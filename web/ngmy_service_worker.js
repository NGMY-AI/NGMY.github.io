/* NGMY PWA — cache-first shell so the app opens offline after one online visit. */
'use strict';

function ngmySwQuiet() {}

const CACHE_PREFIX = 'ngmy-pwa-';
function ngmySwBasePath() {
  var p = self.location.pathname || '/';
  return p.replace(/[^/]*$/, '') || '/';
}
const SCOPE_PATH = ngmySwBasePath();
const CACHE_NAME = CACHE_PREFIX + '__NGMY_DEPLOY_ID__';

/** Same-origin proxy target — never appears in the browser as bright-handler. */
const NGMY_EDGE_UPSTREAM =
  'https://gvufllqqxjnpicmkxzcg.supabase.co/functions/v1/bright-handler';
const NGMY_REST_UPSTREAM =
  'https://gvufllqqxjnpicmkxzcg.supabase.co/rest/v1';

/** ngmy_settings keys that must never download via REST (legacy rows may hold PII). */
const NGMY_SENSITIVE_SETTINGS_KEYS = new Set([
  'civic_self_enrollment_settings',
  'civic_cities_rooms',
  'civic_help_mode_settings',
  'civic_deleted_contribution_ids',
  'civic_contribution_receipt_removed',
  'civic_registry_members',
  'civic_registry_pins',
  'civic_state_registrar_subscriptions',
  'store_sell_access_emails',
  'management_operational_lists',
  'family_tree_photo_access',
  'civic_help_campaign_spendings',
  'game_invites',
  'store_inquiries',
  'store_orders',
  'media_virtual_profiles',
  'ngmy_family_tree_backup_codes_v1',
  'ngmy_family_tree_qr_stashes_v1',
]);

function ngmyIsApiSyncPath(url) {
  return url.pathname === '/api/sync' || url.pathname.endsWith('/api/sync');
}

function ngmyIsApiRestPath(url) {
  return url.pathname.indexOf('/api/rest/v1') !== -1;
}

function ngmyRestUpstreamUrl(url) {
  var idx = url.pathname.indexOf('/api/rest/v1');
  var suffix = url.pathname.substring(idx + '/api/rest/v1'.length);
  return NGMY_REST_UPSTREAM + suffix + url.search;
}

function ngmySensitiveSettingsKey(url) {
  if (url.pathname.indexOf('ngmy_settings') === -1) return '';
  var params = url.searchParams;
  var raw = params.get('key') || '';
  if (raw.indexOf('eq.') === 0) raw = raw.substring(3);
  try {
    raw = decodeURIComponent(raw);
  } catch (_) {}
  return raw.trim();
}

function ngmyBlockSensitiveSettingsGet(request, url) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return null;
  var key = ngmySensitiveSettingsKey(url);
  if (!key) return null;
  if (key.indexOf('civic_') === 0 || NGMY_SENSITIVE_SETTINGS_KEYS.has(key)) {
    return new Response('[]', {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return null;
}

function ngmyBlockSensitiveRest(request, url) {
  var path = url.pathname || '';
  if (path.indexOf('/rpc/') !== -1) return null;
  var blockedTables = [
    'users_store_contact',
    'password_reset_otp',
    'live_help_codes',
    'live_support_sessions',
    'help_applications',
    'help_businesses',
    'help_requests',
  ];
  if (request.method === 'GET' || request.method === 'HEAD') {
    for (var i = 0; i < blockedTables.length; i++) {
      if (path.indexOf(blockedTables[i]) !== -1) {
        return new Response('[]', {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
  }
  return ngmyBlockSensitiveSettingsGet(request, url);
}

async function ngmyProxyApiSync(request) {
  var headers = new Headers(request.headers);
  if (!headers.get('content-type')) headers.set('content-type', 'application/json');
  var body = await request.text();
  var res = await fetch(NGMY_EDGE_UPSTREAM, {
    method: 'POST',
    headers: headers,
    body: body,
  });
  var text = await res.text();
  return new Response(text, {
    status: res.status,
    statusText: res.statusText,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function ngmyProxyApiRest(request) {
  var url = new URL(request.url);
  var blocked = ngmyBlockSensitiveRest(request, url);
  if (blocked) return blocked;

  var headers = new Headers(request.headers);
  var upstream = ngmyRestUpstreamUrl(url);
  var init = {
    method: request.method,
    headers: headers,
  };
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = await request.clone().arrayBuffer();
  }
  var res = await fetch(upstream, init);
  return res;
}

const PRECACHE_URLS = __NGMY_PRECACHE_URLS__;

const CRITICAL_OFFLINE_URLS = [
  './',
  './index.html',
  './flutter_bootstrap.js',
  './flutter.js',
  './main.dart.js',
  './canvaskit/canvaskit.js',
  './canvaskit/canvaskit.wasm',
  './canvaskit/chromium/canvaskit.js',
  './canvaskit/chromium/canvaskit.wasm',
  './assets/AssetManifest.bin.json',
  './assets/AssetManifest.bin',
  './assets/FontManifest.json',
  './assets/assets/fonts/Roboto-Light.ttf',
  './assets/assets/fonts/Roboto-Regular.ttf',
  './assets/assets/fonts/Roboto-Medium.ttf',
  './assets/assets/fonts/Roboto-Bold.ttf',
  './assets/assets/fonts/NotoColorEmoji.ttf',
  './assets/assets/twemoji/1f4dd.png',
  './assets/assets/twemoji/1f1fa-1f1f8.png',
  './assets/assets/twemoji/1f1f9-1f1ff.png',
  './assets/assets/twemoji/1f3a8.png',
  './assets/assets/twemoji/1f352.png',
  './assets/assets/twemoji/1f34a.png',
  './assets/assets/twemoji/1f31e.png',
  './assets/assets/twemoji/1f34f.png',
  './assets/assets/twemoji/1f33f.png',
  './assets/assets/twemoji/1f30a.png',
  './assets/assets/twemoji/1fa75.png',
  './assets/assets/twemoji/1f42c.png',
  './assets/assets/twemoji/1f347.png',
  './assets/assets/twemoji/1f36c.png',
  './assets/assets/twemoji/1f36b.png',
  './assets/assets/twemoji/26c4.png',
  './assets/assets/twemoji/1f5a4.png',
  './assets/assets/twemoji/1faa3.png',
  './assets/assets/twemoji/1f58c.png',
  './assets/assets/twemoji/2728.png',
  './assets/assets/twemoji/1f389.png',
  './assets/fonts/MaterialIcons-Regular.otf',
  './assets/packages/cupertino_icons/assets/CupertinoIcons.ttf',
  './manifest.json',
  './favicon.png',
  './icons/Icon-192.png',
  './ngmy_service_worker.js',
];

function criticalPartUrls() {
  return PRECACHE_URLS.filter((u) => /main\.dart\.js.*\.part\.js/i.test(u));
}

function absoluteShellUrls() {
  const origin = self.location.origin;
  const base = SCOPE_PATH.endsWith('/') ? SCOPE_PATH : SCOPE_PATH + '/';
  return [
    origin + base,
    origin + base + 'index.html',
    origin + '/',
    origin + '/index.html',
  ];
}

async function cacheAbsoluteShell(cache) {
  for (const abs of absoluteShellUrls()) {
    try {
      const hit = await cache.match(abs);
      if (hit) continue;
      const rel = abs.replace(self.location.origin, '');
      const fromRel = await cache.match('./index.html') || await cache.match('index.html');
      if (fromRel) {
        await cache.put(abs, fromRel.clone());
        continue;
      }
      await precacheUrl(cache, abs);
    } catch (e) {
      ngmySwQuiet('[ngmy-sw] absolute shell', abs, e);
    }
  }
}

async function shellCachedIn(cache) {
  for (const u of INDEX_CANDIDATES) {
    const hit = await cache.match(new Request(u));
    if (hit) return true;
  }
  for (const abs of absoluteShellUrls()) {
    const hit = await cache.match(abs);
    if (hit) return true;
  }
  return false;
}

async function offlineDocumentFromCache(cache) {
  for (const u of INDEX_CANDIDATES) {
    const hit = await cache.match(new Request(u));
    if (hit) return hit;
  }
  for (const abs of absoluteShellUrls()) {
    const hit = await cache.match(abs);
    if (hit) return hit;
  }
  return undefined;
}

async function offlineDocumentAnyCache() {
  const hit = await offlineDocument();
  if (hit) return hit;
  const keys = await caches.keys();
  for (const k of keys.filter((x) => x.startsWith(CACHE_PREFIX))) {
    const c = await caches.open(k);
    const doc = await offlineDocumentFromCache(c);
    if (doc) return doc;
  }
  return undefined;
}

async function precacheUrl(cache, url) {
  try {
    const res = await fetch(new Request(url, { cache: 'reload' }));
    if (res && res.ok) {
      await cache.put(url, res.clone());
      return true;
    }
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] precache skip', url, e);
  }
  return false;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const allCritical = CRITICAL_OFFLINE_URLS.concat(criticalPartUrls());
      for (const url of allCritical) {
        await precacheUrl(cache, url);
      }
      const rest = PRECACHE_URLS.filter(
        (u) => allCritical.indexOf(u) === -1,
      );
      await Promise.allSettled(rest.map((url) => precacheUrl(cache, url)));
      await cacheAbsoluteShell(cache);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const allCritical = CRITICAL_OFFLINE_URLS.concat(criticalPartUrls());
      for (const url of allCritical) {
        const hit = await cache.match(url);
        if (!hit) await precacheUrl(cache, url);
      }
      await cacheAbsoluteShell(cache);
      const ready = await shellCachedIn(cache);

      if (ready) {
        const keys = await caches.keys();
        await Promise.all(
          keys
            .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
            .map((k) => caches.delete(k)),
        );
      } else {
        ngmySwQuiet('[ngmy-sw] keep prior cache — new shell not ready yet');
      }

      await self.clients.claim();
      await restoreAllAlarms();
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
  for (const abs of absoluteShellUrls()) {
    const hit = await caches.match(abs);
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

const ALARM_STORE = 'ngmy-alarms-v1';
const alarmTimers = new Map();

async function loadStoredAlarms() {
  try {
    const cache = await caches.open(ALARM_STORE);
    const hit = await cache.match('alarms.json');
    if (!hit) return [];
    const list = await hit.json();
    return Array.isArray(list) ? list : [];
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] load alarms failed', e);
    return [];
  }
}

async function saveStoredAlarms(alarms) {
  try {
    const cache = await caches.open(ALARM_STORE);
    await cache.put('alarms.json', new Response(JSON.stringify(alarms), {
      headers: { 'Content-Type': 'application/json' },
    }));
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] save alarms failed', e);
  }
}

function cancelAlarmTimer(id) {
  const tid = alarmTimers.get(id);
  if (tid != null) {
    clearTimeout(tid);
    alarmTimers.delete(id);
  }
}

async function fireAlarm(alarm) {
  cancelAlarmTimer(alarm.id);
  try {
    await self.registration.showNotification(alarm.title || 'Wake up', {
      body: alarm.body || 'Your NGMY wake alarm',
      requireInteraction: true,
      silent: false,
      tag: alarm.id,
      vibrate: [800, 300, 800, 300, 800],
      data: { alarmId: alarm.id },
    });
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] showNotification failed', e);
  }
  const remaining = (await loadStoredAlarms()).filter((a) => a.id !== alarm.id);
  await saveStoredAlarms(remaining);
}

function scheduleAlarmTimer(alarm) {
  if (!alarm || !alarm.id || !alarm.at) return;
  cancelAlarmTimer(alarm.id);
  const delay = new Date(alarm.at).getTime() - Date.now();
  if (delay <= 0) return;
  if (delay > 7 * 24 * 60 * 60 * 1000) return;
  const tid = setTimeout(() => fireAlarm(alarm), delay);
  alarmTimers.set(alarm.id, tid);
}

async function upsertAlarm(alarm) {
  const list = await loadStoredAlarms();
  const next = list.filter((a) => a.id !== alarm.id);
  next.push({
    id: alarm.id,
    at: alarm.at,
    title: alarm.title || 'Wake up',
    body: alarm.body || 'Your NGMY wake alarm',
  });
  await saveStoredAlarms(next);
  scheduleAlarmTimer(next[next.length - 1]);
}

async function restoreAllAlarms() {
  const list = await loadStoredAlarms();
  const now = Date.now();
  const kept = [];
  for (const alarm of list) {
    const at = new Date(alarm.at).getTime();
    if (at <= now) continue;
    kept.push(alarm);
    scheduleAlarmTimer(alarm);
  }
  if (kept.length !== list.length) await saveStoredAlarms(kept);
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || !data.type) return;

  if (data.type === 'SCHEDULE_ALARM') {
    event.waitUntil(
      upsertAlarm({
        id: data.id,
        at: data.at,
        title: data.title,
        body: data.body,
      }),
    );
    return;
  }

  if (data.type === 'ENSURE_CACHED') {
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
  }
});

self.addEventListener('fetch', (event) => {
  var url = new URL(event.request.url);

  // POST /api/sync — same-origin proxy; DevTools never shows bright-handler.
  if (event.request.method === 'POST' && url.origin === self.location.origin && ngmyIsApiSyncPath(url)) {
    event.respondWith(ngmyProxyApiSync(event.request));
    return;
  }

  // /api/rest/v1/* — same-origin PostgREST proxy (hides supabase.co URLs).
  if (url.origin === self.location.origin && ngmyIsApiRestPath(url)) {
    event.respondWith(ngmyProxyApiRest(event.request));
    return;
  }

  if (event.request.method !== 'GET') return;

  if (url.origin !== self.location.origin) return;
  if (!isInScope(url)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Always fetch version.json from network so phones detect new deploys.
      if (url.pathname.endsWith('version.json')) {
        try {
          const net = await fetch(event.request, { cache: 'no-store' });
          if (net && net.ok) return net;
        } catch (_) {}
        const cached = await cacheLookup(event.request);
        if (cached) return cached;
        return fetch(event.request);
      }

      let cached = await cacheLookup(event.request);
      if (!cached && (isAppShellAsset(url) || isCriticalScript(url))) {
        cached = await cacheLookupByPathname(url);
      }

      const shellAsset =
        isAppShellAsset(url) || isCriticalScript(url) || isCriticalFont(url);

      // Cache-first for shell assets — required for iOS offline (onLine is unreliable).
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

      if (!self.navigator.onLine && shellAsset) {
        const offlineFallback = await cacheLookupByPathname(url);
        if (offlineFallback) return offlineFallback;
        if (url.pathname.indexOf('canvaskit') !== -1) {
          const alt = await cache.match('./canvaskit/canvaskit.wasm')
            || await cache.match('canvaskit/canvaskit.wasm')
            || await cache.match('./canvaskit/canvaskit.js')
            || await cache.match('canvaskit/canvaskit.js');
          if (alt) return alt;
        }
        return new Response('Offline — asset not cached: ' + url.pathname, {
          status: 503,
          statusText: 'Offline cache miss',
        });
      }

      if (event.request.mode === 'navigate') {
        // Network-first for HTML when online so deploy checks and new builds reach PWAs.
        if (self.navigator.onLine) {
          try {
            const net = await fetch(event.request, { cache: 'no-store' });
            if (net && net.status === 200) {
              cache.put(event.request, net.clone());
              await cacheAbsoluteShell(cache);
              return net;
            }
          } catch (_) {}
        }
        const cachedNav = await offlineDocumentAnyCache();
        if (cachedNav) {
          if (self.navigator.onLine) {
            event.waitUntil(
              fetch(event.request, { cache: 'no-store' })
                .then((res) => {
                  if (res && res.status === 200) {
                    cache.put(event.request, res.clone());
                    return cacheAbsoluteShell(cache);
                  }
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
