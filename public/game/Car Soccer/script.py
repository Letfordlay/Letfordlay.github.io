#!/usr/bin/env python3
"""Make the Car Soccer build work from any sub-folder (e.g. /game/Car Soccer/).

Usage:  python fix_subfolder.py "path/to/Car Soccer"
Idempotent: safe to run more than once. Edits files in place.
"""
import re, sys
from pathlib import Path

root = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
if not (root / "index.html").is_file():
    sys.exit(f"index.html not found in {root}")

DIRS = ["assets", "legal", "licenses", "android", "asset-packs"]
FILES = ["android-chrome-192x192.png", "android-chrome-512x512.png", "app-ads.txt",
         "apple-touch-icon.png", "embed.html", "favicon-16x16.png", "favicon-32x32.png",
         "favicon.ico", "game-license.txt", "index.html", "maskable-icon-512x512.png",
         "online.html", "site.webmanifest", "THIRD_PARTY_NOTICES.md"]
alt = "|".join([re.escape(d) + "/" for d in DIRS] + [re.escape(f) for f in FILES])
changed = {}

def bump(path, n):
    if n: changed[str(path.relative_to(root))] = changed.get(str(path.relative_to(root)), 0) + n

def fix_js(path):
    s = path.read_text(encoding="utf-8")
    n = 0
    # 1. new URL("/x", import.meta.url): resolves against the *module* (in /assets/), not the page
    def url_sub(m):
        p = m.group(2)
        rel = "./" + p[len("assets/"):] if p.startswith("assets/") else "../" + p
        return f'new URL({m.group(1)}{rel}{m.group(1)},import.meta.url)'
    s, k = re.subn(r'new URL\((["\'`])/((?:' + alt + r')[^"\'`]*)\1,import\.meta\.url\)', url_sub, s); n += k
    # 2. Vite preload helper hard-codes a leading "/" (breaks lazy CSS / preloads)
    s, k = re.subn(r'function\((\w+)\)\{return"/"\+\1\}',
                   r'function(\1){return new URL("../"+\1,import.meta.url).href}', s); n += k
    # 3. every other quoted root-absolute path -> relative to the page
    s, k = re.subn(r'(["\'`])/(?=(?:' + alt + r'))', r'\1', s); n += k
    if n: path.write_text(s, encoding="utf-8")
    bump(path, n)

def fix_css(path):
    s = path.read_text(encoding="utf-8")
    s, n = re.subn(r'url\(\s*(["\']?)/(?=(?:' + alt + r'))', r'url(\1../', s)  # css lives in /assets/
    if n: path.write_text(s, encoding="utf-8")
    bump(path, n)

def fix_html(path):
    s = path.read_text(encoding="utf-8")
    s, n = re.subn(r'((?:href|src|content)=")/(?=(?:' + alt + r'))', r'\1./', s)
    if n: path.write_text(s, encoding="utf-8")
    bump(path, n)

def fix_manifest(path):
    s = path.read_text(encoding="utf-8")
    s, n = re.subn(r'(":\s*")/(?=[^/])', r'\1./', s)          # "src":"/x.png" -> "./x.png"
    s, k = re.subn(r'("(?:start_url|scope|id)":\s*")/(")', r'\1./\2', s)
    if n + k: path.write_text(s, encoding="utf-8")
    bump(path, n + k)

for p in root.rglob("*"):
    if not p.is_file() or p.name in ("game-sw.js", "coi-serviceworker.js"): continue
    if p.suffix == ".js": fix_js(p)
    elif p.suffix == ".css": fix_css(p)
    elif p.suffix == ".html": fix_html(p)
    elif p.suffix == ".webmanifest": fix_manifest(p)

print("Rewrote paths in:")
for k, v in sorted(changed.items()): print(f"  {v:4d}  {k}")
if not changed: print("  (nothing - already fixed?)")

# report anything root-absolute that is still left in scripts
left = {}
for p in root.rglob("*.js"):
    if p.name in ("game-sw.js", "coi-serviceworker.js"): continue
    for m in re.finditer(r'(["\'`])(/[\w.\-]+(?:/[\w.\-${}]*)+\.(?:js|css|png|jpe?g|webp|svg|glb|gltf|wav|mp3|ogg|bin|json|wasm|txt))\1',
                         p.read_text(encoding="utf-8", errors="ignore")):
        left.setdefault(m.group(2), set()).add(p.name)
if left:
    print("\nStill root-absolute (check these, send them to me if something 404s):")
    for k, v in sorted(left.items()): print(f"  {k}   in {', '.join(sorted(v))}")