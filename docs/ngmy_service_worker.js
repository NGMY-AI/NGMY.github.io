/* NGMY PWA â€” cache-first shell so the app opens offline after one online visit. */
'use strict';

const CACHE_PREFIX = 'ngmy-pwa-';
function ngmySwBasePath() {
  var p = self.location.pathname || '/';
  return p.replace(/[^/]*$/, '') || '/';
}
const SCOPE_PATH = ngmySwBasePath();
const CACHE_NAME = CACHE_PREFIX + '20260613074005';

const PRECACHE_URLS = ['./','./.last_build_id','./.nojekyll','./404.html','./assets/AssetManifest.bin','./assets/AssetManifest.bin.json','./assets/assets/sounds/income_cash.mp3','./assets/assets/sounds/README.md','./assets/assets/sounds/YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3','./assets/assets/video_studio/yt_news_desk.png','./assets/assets/video_studio/yt_studio_curved.png','./assets/FontManifest.json','./assets/fonts/MaterialIcons-Regular.otf','./assets/NOTICES','./assets/packages/cupertino_icons/assets/CupertinoIcons.ttf','./assets/shaders/ink_sparkle.frag','./assets/shaders/stretch_effect.frag','./canvaskit/canvaskit.js','./canvaskit/canvaskit.js.symbols','./canvaskit/canvaskit.wasm','./canvaskit/chromium/canvaskit.js','./canvaskit/chromium/canvaskit.js.symbols','./canvaskit/chromium/canvaskit.wasm','./canvaskit/experimental_webparagraph/canvaskit.js','./canvaskit/experimental_webparagraph/canvaskit.js.symbols','./canvaskit/experimental_webparagraph/canvaskit.wasm','./canvaskit/skwasm.js','./canvaskit/skwasm.js.symbols','./canvaskit/skwasm.wasm','./canvaskit/skwasm_heavy.js','./canvaskit/skwasm_heavy.js.symbols','./canvaskit/skwasm_heavy.wasm','./canvaskit/wimp.js','./canvaskit/wimp.js.symbols','./canvaskit/wimp.wasm','./CNAME','./favicon.png','./flutter.js','./flutter_bootstrap.js','./icons/Icon-192.png','./icons/Icon-512.png','./icons/Icon-maskable-192.png','./icons/Icon-maskable-512.png','./index.html','./main.dart.js','./manifest.json','./version.json'];

const CRITICAL_OFFLINE_URLS = [
  './',
  './index.html',
  './flutter_bootstrap.js',
  './flutter.js',
  './main.dart.js',
  './canvaskit/canvaskit.js',
  './canvaskit/canvaskit.wasm',
  './assets/AssetManifest.bin.json',
  './assets/FontManifest.json',
  './assets/fonts/MaterialIcons-Regular.otf',
  './assets/packages/cupertino_icons/assets/CupertinoIcons.ttf',
  './manifest.json',
  './favicon.png',
  './icons/Icon-192.png',
];

async function precacheUrl(cache, url) {
  try {
    const res = await fetch(new Request(url, { cache: 'reload' }));
    if (res && res.ok) {
      await cache.put(url, res.clone());
      return true;
    }
  } catch (e) {
    console.warn('[ngmy-sw] precache skip', url, e);
  }
  return false;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      for (const url of CRITICAL_OFFLINE_URLS) {
        await precacheUrl(cache, url);
      }
      const rest = PRECACHE_URLS.filter((u) => CRITICAL_OFFLINE_URLS.indexOf(u) === -1);
      await Promise.allSettled(rest.map((url) => precacheUrl(cache, url)));
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
      const cache = await caches.open(CACHE_NAME);
      for (const url of CRITICAL_OFFLINE_URLS) {
        const hit = await cache.match(url);
        if (!hit) await precacheUrl(cache, url);
      }
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.postMessage({ type: 'CACHE_READY' });
      }
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
  if (SCOPE_PATH === '/' || SCOPE_PATH === '') return true;
  return url.pathname.startsWith(SCOPE_PATH) || url.pathname === '/' || url.pathname.endsWith('index.html');
}

function isAppShellAsset(url) {
  if (url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) return true;
  return /\.(js|wasm|json|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|otf|css|html|bin|symbols)$/i.test(url.pathname);
}

function isCriticalScript(url) {
  return /\/(main\.dart\.js|flutter_bootstrap\.js|flutter\.js|canvaskit|dart_sdk)/i.test(url.pathname);
}

function isCriticalFont(url) {
  return /MaterialIcons-Regular\.otf|CupertinoIcons\.ttf/i.test(url.pathname);
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.type !== 'ENSURE_CACHED') return;
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const urls = Array.isArray(data.urls) ? data.urls : [];
      for (const raw of urls) {
        const rel = raw.startsWith('./') ? raw : './' + raw;
        const hit = await cache.match(rel);
        if (hit) continue;
        await precacheUrl(cache, rel);
      }
    })(),
  );
});

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

      const shellAsset =
        isAppShellAsset(url) || isCriticalScript(url) || isCriticalFont(url);

      if (!self.navigator.onLine && shellAsset) {
        if (cached) return cached;
        const offlineFallback = await cacheLookupByPathname(url);
        if (offlineFallback) return offlineFallback;
        return new Response('Offline â€” asset not cached: ' + url.pathname, {
          status: 503,
          statusText: 'Offline cache miss',
        });
      }

      if (shellAsset && cached) {
        if (self.navigator.onLine) {
          event.waitUntil(
            fetch(event.request)
              .then((res) => {
                if (res && res.status === 200) return cache.put(event.request, res.clone());
              })
              .catch(() => {}),
          );
        }
        return cached;
      }

      if (event.request.mode === 'navigate') {
        const cachedNav = await offlineDocument();
        if (cachedNav) {
          if (self.navigator.onLine) {
            event.waitUntil(
              fetch(event.request)
                .then((res) => {
                  if (res && res.status === 200) return cache.put(event.request, res.clone());
                })
                .catch(() => {}),
            );
          }
          return cachedNav;
        }
        try {
          const net = await fetch(event.request);
          if (net && net.status === 200) {
            cache.put(event.request, net.clone());
            return net;
          }
        } catch (_) {}
        return new Response(
          '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NGMY Offline</title></head><body style="font-family:system-ui;background:#121212;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:24px"><div><h2>NGMY is offline</h2><p>Open the app once while online so it can cache for offline use.</p><button onclick="location.reload()" style="margin-top:16px;padding:12px 24px;border:none;border-radius:8px;background:#00B25A;color:#fff;font-weight:700">Retry</button></div></body></html>',
          { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
        );
      }

      if (cached) {
        if (self.navigator.onLine) {
          event.waitUntil(
            fetch(event.request)
              .then((res) => {
                if (res && res.status === 200) return cache.put(event.request, res.clone());
              })
              .catch(() => {}),
          );
        }
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

