from pathlib import Path
import zipfile, re, json, hashlib, shutil, sys

root=Path(__file__).resolve().parents[2]
export=root/'export'
version=sys.argv[1] if len(sys.argv)>1 else 'v4'
assert re.fullmatch(r'v[0-9]+',version)
archive=root/('dist/dsign-site-html-css-'+version+'.zip')
files=sorted(p for p in export.rglob('*') if p.is_file())
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
    for p in files: z.write(p,'dsign-homepage/'+p.relative_to(export).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    for p in files:
        key='dsign-homepage/'+p.relative_to(export).as_posix()
        assert z.read(key)==p.read_bytes()
    for p in export.glob('*.html'):
        s=p.read_text()
        refs=set(re.findall(r'(?:src|href)="([^"]+)"',s))
        for group in re.findall(r'srcset="([^"]+)"',s):refs.update(item.strip().split()[0] for item in group.split(','))
        for ref in refs:
            if ref.startswith(('http:','https:','tel:','mailto:','data:','#')):continue
            assert 'dsign-homepage/'+ref.split('#')[0] in z.namelist(),ref
        ids=re.findall(r'\bid="([^"]+)"',s)
        assert len(ids)==len(set(ids)),p
    for p in export.glob('*.css'):
        for ref in re.findall(r'url\("?([^"\)]+)"?\)',p.read_text()):
            assert 'dsign-homepage/'+ref in z.namelist(),ref
    assert hashlib.sha256(z.read('dsign-homepage/assets/logo.svg')).hexdigest()=='cfc31d8acfed3c19cf01688f9a0f42f86cc92d1cee3a241ad232626b63683841'
    assert z.read('dsign-homepage/DESIGN.md')==(root/'DESIGN.md').read_bytes()
shutil.copyfile(archive,root/'dist/dsign-homepage-html-css.zip')
report={'archive':str(archive),'files':len(files),'bytes':archive.stat().st_size,'crc':'pass','resources':'pass','logo':'identical','charter':'preserved','previousV2Preserved':(root/'dist/dsign-homepage-html-css-v2.zip').exists()}
(root/'.impeccable/review/materials-package.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report,ensure_ascii=False,indent=2))
