/* NGMY PWA — caches the app shell so the site opens offline (replaces Flutter's unregister-only worker). */
'use strict';

const CACHE_PREFIX = 'ngmy-pwa-';
const SCOPE_PATH = '/NGMY.github.io/';
const CACHE_NAME = CACHE_PREFIX + '__NGMY_DEPLOY_ID__';

const PRECACHE_URLS = __NGMY_PRECACHE_URLS__;

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
