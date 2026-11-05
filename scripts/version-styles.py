"""Version local CSS and JavaScript URLs so browsers refresh changed assets after a deploy."""
from pathlib import Path
import hashlib
import re
import sys

root = Path(__file__).resolve().parents[1]
export = root / 'export'
versions = {asset.name: hashlib.sha256(asset.read_bytes()).hexdigest()[:12]
            for pattern in ('*.css', '*.js') for asset in export.glob(pattern)}
check = '--check' in sys.argv
stale = []

def version_url(match):
    name = match['name']
    if name not in versions:
        return match[0]
    return f'{match["attribute"]}="{name}?v={versions[name]}"'

for page in sorted(export.glob('*.html')):
    source = page.read_text()
    updated = re.sub(r'(?P<attribute>href|src)="(?P<name>[^"?]+\.(?:css|js))(?:\?[^"\s]*)?"', version_url, source)
    if source != updated:
        stale.append(page.name)
        if not check:
            page.write_text(updated)
if check and stale:
    raise SystemExit('Refresh local CSS/JS versions before committing: python3 scripts/version-styles.py')
print(f'Local CSS/JS versions checked; {len(stale)} pages '+('outdated' if check else 'updated'))
