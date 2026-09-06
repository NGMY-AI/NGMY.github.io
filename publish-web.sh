#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

export PATH="/tmp/flutter/bin:${PATH:-}"

BASE_HREF="/"
DEPLOY_ID="$(date -u +%Y%m%d%H%M%S)"
LIVE_URL="https://ngmy.org/"
LEGACY_URL="https://ngmy-ai.github.io/NGMY.github.io/"

echo "========================================"
echo " NGMY Web Publish"
echo " Deploy ID: $DEPLOY_ID"
echo "========================================"

echo ""
echo "[1/6] flutter pub get ..."
flutter pub get

echo ""
echo "[2/6] flutter build web (release) ..."
flutter build web --release --base-href="$BASE_HREF" --no-wasm-dry-run --no-web-resources-cdn

if [[ ! -f build/web/index.html ]]; then
  echo "Build failed: build/web/index.html not found" >&2
  exit 1
fi

echo ""
echo "[3/6] Copy build/web -> docs/ ..."
rm -rf docs
mkdir -p docs
cp -a build/web/. docs/
touch docs/.nojekyll
printf '%s' 'ngmy.org' > docs/CNAME

echo ""
echo "[4/6] Stamp deploy id (cache bust for phones) ..."
DEPLOYED_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
cat > docs/version.json <<EOF
{"app_name":"ngmy","version":"1.0.0","build_number":"$DEPLOY_ID","package_name":"ngmy","deployed_at":"$DEPLOYED_AT"}
EOF

sed -i "s/__NGMY_DEPLOY_ID__/$DEPLOY_ID/g" docs/index.html
if ! grep -q '<base href="/">' docs/index.html; then
  sed -i 's|<base href="[^"]*">|<base href="/">|g' docs/index.html
fi
cp docs/index.html docs/404.html

mkdir -p docs/apps

if [[ -f docs/manifest.json ]]; then
  cat > docs/manifest.json <<'EOF'
{
  "name": "NGMY",
  "short_name": "NGMY",
  "id": "/",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ffffff",
  "description": "Next Generation - Make Yours",
  "orientation": "portrait-primary",
  "prefer_related_applications": false,
  "icons": [
    {"src": "icons/Icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "icons/Icon-512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "icons/Icon-maskable-192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable"},
    {"src": "icons/Icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}
EOF
fi

if [[ -f docs/flutter_bootstrap.js ]]; then
  sed -i 's/,{}//g' docs/flutter_bootstrap.js
  sed -i 's/serviceWorkerSettings:[^{]*{[^}]*},*//g' docs/flutter_bootstrap.js
  if grep -q '_flutter.loader.load({});' docs/flutter_bootstrap.js; then
    python3 - <<'PY'
from pathlib import Path
boot = Path("docs/flutter_bootstrap.js").read_text()
loader = """_flutter.loader.load({
  config: {
    renderer: window.__NGMY_IN_APP_BROWSER__ ? "html" : "canvaskit",
    canvasKitBaseUrl: "./canvaskit/",
    useLocalCanvasKit: true
  }
}).catch(function (e) {
  console.error("[ngmy] Flutter load failed", e);
  window.__ngmyShowLoadError && window.__ngmyShowLoadError(
    "NGMY could not load the app engine. Tap Reload. If you are offline, open once on Wi-Fi and wait for the home screen."
  );
});"""
boot = boot.replace("_flutter.loader.load({});", loader)
Path("docs/flutter_bootstrap.js").write_text(boot)
PY
  fi
fi

rm -f docs/flutter_service_worker.js

SW_TEMPLATE="web/ngmy_service_worker.js"
SW_OUT="docs/ngmy_service_worker.js"
if [[ -f "$SW_TEMPLATE" ]]; then
  python3 - <<PY
import json
from pathlib import Path

deploy_id = "$DEPLOY_ID"
template = Path("$SW_TEMPLATE").read_text()
docs = Path("docs")
urls = {"./", "./index.html"}
for p in docs.rglob("*"):
    if p.is_file() and p.name != "ngmy_service_worker.js":
        rel = "./" + p.relative_to(docs).as_posix()
        urls.add(rel)
json_urls = ", ".join(json.dumps(u) for u in sorted(urls))
sw = template.replace("__NGMY_DEPLOY_ID__", deploy_id).replace("__NGMY_PRECACHE_URLS__", f"[{json_urls}]")
Path("$SW_OUT").write_text(sw)
print(f"  Wrote ngmy_service_worker.js ({len(urls)} precache URLs)")
PY
fi

MAIN_SIZE=$(wc -c < docs/main.dart.js 2>/dev/null || echo 0)
echo "  main.dart.js size: $MAIN_SIZE bytes"
echo "  version.json build_number: $DEPLOY_ID"

echo ""
echo "[5/6] Git status ..."
git status -sb

echo ""
echo "Done. Deploy ID: $DEPLOY_ID"
echo "Live URL (after push): $LIVE_URL"
echo "Legacy URL: $LEGACY_URL"
