/* NGMY PWA â€” caches the app shell so the site opens offline (replaces Flutter's unregister-only worker). */
'use strict';

const CACHE_PREFIX = 'ngmy-pwa-';
const SCOPE_PATH = '/NGMY.github.io/';
const CACHE_NAME = CACHE_PREFIX + '20260531155850';

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

async function offlineDocument() {
  for (const u of INDEX_CANDIDATES) {
    const hit = await caches.match(u);
    if (hit) return hit;
  }
  return undefined;
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (!url.pathname.startsWith(SCOPE_PATH) && url.pathname !== '/' && !url.pathname.endsWith('index.html')) {
    return;
  }

  event.respondWith(
    (async () => {
      const cached = await caches.match(event.request);

      if (event.request.mode === 'navigate') {
        try {
          const net = await fetch(event.request);
          if (net && net.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, net.clone());
          }
          return net;
        } catch (_) {
          return cached || (await offlineDocument()) || new Response('NGMY is offline. Open this app once online to cache it.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
        }
      }

      if (cached) {
        event.waitUntil(
          fetch(event.request)
            .then((res) => {
              if (res && res.status === 200) {
                return caches.open(CACHE_NAME).then((c) => c.put(event.request, res));
              }
            })
            .catch(() => {}),
        );
        return cached;
      }

      try {
        const res = await fetch(event.request);
        if (res && res.status === 200) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, res.clone());
        }
        return res;
      } catch (_) {
        return cached;
      }
    })(),
  );
});

