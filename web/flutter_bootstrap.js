{{flutter_js}}
{{flutter_build_config}}

// NGMY: use ngmy_service_worker.js (registered in index.html) — not Flutter's worker.
_flutter.loader.load({
  config: {
    canvasKitBaseUrl: './canvaskit/',
    useLocalCanvasKit: true,
  },
}).catch(function (e) {
  window.__ngmyShowLoadError && window.__ngmyShowLoadError(
    'NGMY could not load the app engine. Tap Reload. If you are offline, open once on Wi-Fi and wait for the home screen.',
  );
});
