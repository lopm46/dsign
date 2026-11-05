"""Give the shared stylesheet a content version so browsers refresh it after a deploy."""
from pathlib import Path
import hashlib
import re
import sys

root = Path(__file__).resolve().parents[1]
export = root / 'export'
version = hashlib.sha256((export / 'styles.css').read_bytes()).hexdigest()[:12]
check = '--check' in sys.argv
stale = []
for page in sorted(export.glob('*.html')):
    source = page.read_text()
    updated = re.sub(r'href="styles\.css(?:\?[^"\s]*)?"', f'href="styles.css?v={version}"', source)
    if source != updated:
        stale.append(page.name)
        if not check:
            page.write_text(updated)
if check and stale:
    raise SystemExit('Refresh stylesheet versions before committing: python3 scripts/version-styles.py')
print(f'Shared stylesheet version: {version}; {len(stale)} pages '+('outdated' if check else 'updated'))
