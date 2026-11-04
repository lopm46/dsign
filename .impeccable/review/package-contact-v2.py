"""Package only the export and verify its portable local dependencies."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import re
import shutil
import zipfile

root = Path(__file__).resolve().parents[2]
bundle = root / 'export'
archive = root / 'dist/dsign-homepage-html-css-v2.zip'
temporary = archive.with_suffix('.zip.partial')
files = sorted(p for p in bundle.rglob('*') if p.is_file())
with zipfile.ZipFile(temporary, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as output:
    for source in files:
        output.write(source, Path('dsign-homepage') / source.relative_to(bundle))

html = (bundle / 'index.html').read_text()
css = (bundle / 'styles.css').read_text()
refs = set(re.findall(r'(?:src|href)="([^"#]+)"', html))
refs.update(re.findall(r'url\("?([^"\)]+)"?\)', css))
for srcset in re.findall(r'srcset="([^"]+)"', html):
    refs.update(part.strip().split()[0] for part in srcset.split(','))
local = sorted(s for s in refs if not s.startswith(('http:', 'https:', 'data:', 'tel:', 'mailto:')))
logo_hash = 'cfc31d8acfed3c19cf01688f9a0f42f86cc92d1cee3a241ad232626b63683841'

with zipfile.ZipFile(temporary) as check:
    assert check.testzip() is None
    assert len(check.namelist()) == len(files)
    for source in files:
        key = 'dsign-homepage/' + source.relative_to(bundle).as_posix()
        assert check.read(key) == source.read_bytes(), key
    for ref in local:
        assert 'dsign-homepage/' + ref in check.namelist(), ref
    assert hashlib.sha256(check.read('dsign-homepage/assets/logo.svg')).hexdigest() == logo_hash
    assert 'dsign-homepage/assets/fonts/OFL.txt' in check.namelist()
    assert 'dsign-homepage/INTEGRATION.md' in check.namelist()
    assert check.read('dsign-homepage/DESIGN.md') == (root / 'DESIGN.md').read_bytes()
    assert b'data-contact-endpoint=' in check.read('dsign-homepage/index.html')

temporary.replace(archive)
shutil.copyfile(archive, root / 'dist/dsign-homepage-html-css.zip')
result = {
    'generatedAt': datetime.now(timezone.utc).isoformat(),
    'archive': str(archive),
    'files': len(files),
    'bytes': archive.stat().st_size,
    'crc': 'pass',
    'allFilesMatchSource': True,
    'localReferences': local,
    'logoSHA256': logo_hash,
    'sourceSHA256': {name: hashlib.sha256((bundle / name).read_bytes()).hexdigest() for name in ['index.html', 'styles.css', 'script.js']},
    'independentReview': 'ship — static extension; real email delivery not tested',
    'previousVersionPreserved': (root / 'dist/dsign-homepage-html-css-v1.zip').exists(),
}
(root / '.impeccable/review/export-contact-v2-package.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({key: result[key] for key in ['archive', 'files', 'bytes', 'crc', 'allFilesMatchSource', 'previousVersionPreserved']}, ensure_ascii=False, indent=2))
