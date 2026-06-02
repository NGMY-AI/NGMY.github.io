/* NGMY PWA â€” cache-first shell so the app opens offline after one online visit. */
'use strict';

const CACHE_PREFIX = 'ngmy-pwa-';
const SCOPE_PATH = '/NGMY.github.io/';
const CACHE_NAME = CACHE_PREFIX + '20260602000243';

const PRECACHE_URLS = ['/NGMY.github.io/','/NGMY.github.io/.last_build_id','/NGMY.github.io/.nojekyll','/NGMY.github.io/assets/AssetManifest.bin','/NGMY.github.io/assets/AssetManifest.bin.json','/NGMY.github.io/assets/assets/video_studio/yt_news_desk.png','/NGMY.github.io/assets/assets/video_studio/yt_studio_curved.png','/NGMY.github.io/assets/FontManifest.json','/NGMY.github.io/assets/fonts/MaterialIcons-Regular.otf','/NGMY.github.io/assets/NOTICES','/NGMY.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf','/NGMY.github.io/assets/shaders/ink_sparkle.frag','/NGMY.github.io/assets/shaders/stretch_effect.frag','/NGMY.github.io/canvaskit/canvaskit.js','/NGMY.github.io/canvaskit/canvaskit.js.symbols','/NGMY.github.io/canvaskit/canvaskit.wasm','/NGMY.github.io/canvaskit/chromium/canvaskit.js','/NGMY.github.io/canvaskit/chromium/canvaskit.js.symbols','/NGMY.github.io/canvaskit/chromium/canvaskit.wasm','/NGMY.github.io/canvaskit/experimental_webparagraph/canvaskit.js','/NGMY.github.io/canvaskit/experimental_webparagraph/canvaskit.js.symbols','/NGMY.github.io/canvaskit/experimental_webparagraph/canvaskit.wasm','/NGMY.github.io/canvaskit/skwasm.js','/NGMY.github.io/canvaskit/skwasm.js.symbols','/NGMY.github.io/canvaskit/skwasm.wasm','/NGMY.github.io/canvaskit/skwasm_heavy.js','/NGMY.github.io/canvaskit/skwasm_heavy.js.symbols','/NGMY.github.io/canvaskit/skwasm_heavy.wasm','/NGMY.github.io/canvaskit/wimp.js','/NGMY.github.io/canvaskit/wimp.js.symbols','/NGMY.github.io/canvaskit/wimp.wasm','/NGMY.github.io/favicon.png','/NGMY.github.io/flutter.js','/NGMY.github.io/flutter_bootstrap.js','/NGMY.github.io/icons/Icon-192.png','/NGMY.github.io/icons/Icon-512.png','/NGMY.github.io/icons/Icon-maskable-192.png','/NGMY.github.io/icons/Icon-maskable-512.png','/NGMY.github.io/index.html','/NGMY.github.io/main.dart.js','/NGMY.github.io/manifest.json','/NGMY.github.io/version.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await Promise.allSettled(
        PRECACHE_URLS.map((url) =>
          cache.add(new Request(url, { cache: 'reload' })).catch((e) => {
            console.warn('[ngmy-sw] precache skip', url, e);
          }),
        ),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

function scopeUrl(path) {
  return new URL(path, self.location.origin).href;
}

const INDEX_CANDIDATES = [
  scopeUrl(SCOPE_PATH),
  scopeUrl(SCOPE_PATH + 'index.html'),
  './index.html',
  'index.html',
];

async function cacheLookup(request) {
  const hit = await caches.match(request);
  if (hit) return hit;
  return caches.match(request, { ignoreSearch: true });
}

async function cacheLookupByPathname(url) {
  const cache = await caches.open(CACHE_NAME);
  const keys = await cache.keys();
  for (const req of keys) {
    if (new URL(req.url).pathname === url.pathname) {
      const match = await cache.match(req);
      if (match) return match;
    }
  }
  return undefined;
}

async function offlineDocument() {
  for (const u of INDEX_CANDIDATES) {
    const hit = await cacheLookup(new Request(u));
    if (hit) return hit;
  }
  return undefined;
}

function isInScope(url) {
  return url.pathname.startsWith(SCOPE_PATH) || url.pathname === '/' || url.pathname.endsWith('index.html');
}

function isAppShellAsset(url) {
  if (url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) return true;
  return /\.(js|wasm|json|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|otf|css|html|bin|symbols)$/i.test(url.pathname);
}

function isCriticalScript(url) {
  return /\/(main\.dart\.js|flutter_bootstrap\.js|flutter\.js|canvaskit|dart_sdk)/i.test(url.pathname);
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (!isInScope(url)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      let cached = await cacheLookup(event.request);
      if (!cached && (isAppShellAsset(url) || isCriticalScript(url))) {
        cached = await cacheLookupByPathname(url);
      }

      if ((isAppShellAsset(url) || isCriticalScript(url)) && cached) {
        event.waitUntil(
          fetch(event.request)
            .then((res) => {
              if (res && res.status === 200) return cache.put(event.request, res.clone());
            })
            .catch(() => {}),
        );
        return cached;
      }

      if (event.request.mode === 'navigate') {
        try {
          const net = await fetch(event.request);
          if (net && net.status === 200) {
            cache.put(event.request, net.clone());
          }
          return net;
        } catch (_) {
          const offline = await offlineDocument();
          if (offline) return offline;
          return (
            cached ||
            new Response(
              '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NGMY Offline</title></head><body style="font-family:system-ui;background:#121212;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:24px"><div><h2>NGMY is offline</h2><p>Open the app once while online so it can cache for offline use.</p><button onclick="location.reload()" style="margin-top:16px;padding:12px 24px;border:none;border-radius:8px;background:#00B25A;color:#fff;font-weight:700">Retry</button></div></body></html>',
              { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
            )
          );
        }
      }

      if (cached) {
        event.waitUntil(
          fetch(event.request)
            .then((res) => {
              if (res && res.status === 200) return cache.put(event.request, res.clone());
            })
            .catch(() => {}),
        );
        return cached;
      }

      try {
        const res = await fetch(event.request);
        if (res && res.status === 200) {
          cache.put(event.request, res.clone());
        }
        return res;
      } catch (_) {
        const fallback = await cacheLookupByPathname(url);
        if (fallback) return fallback;
        return cached;
      }
    })(),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    (async () => {
      const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const client of all) {
        if ('focus' in client) {
          client.focus();
          return;
        }
      }
      if (self.clients.openWindow) {
        await self.clients.openWindow(scopeUrl(SCOPE_PATH));
      }
    })(),
  );
});

