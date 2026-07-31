// ignore: avoid_web_libraries_in_flutter
import 'dart:async';
import 'dart:html' as html;

/// Browser geolocation — waits for a fresh, high-accuracy fix (no cached position).
Future<({double lat, double lng, double? accuracyM})?> ngmyPlatformGeolocationFallback() async {
  final geo = html.window.navigator.geolocation;
  try {
    final position = await geo.getCurrentPosition(
      enableHighAccuracy: true,
      maximumAge: Duration.zero,
      timeout: const Duration(seconds: 25),
    );
    final lat = position.coords?.latitude;
    final lng = position.coords?.longitude;
    if (lat == null || lng == null) return null;
    final accuracy = position.coords?.accuracy;
    var best = (
      lat: lat.toDouble(),
      lng: lng.toDouble(),
      accuracyM: accuracy?.toDouble(),
    );

    // If accuracy is weak, watch briefly for a better satellite/Wi‑Fi fix.
    if (accuracy == null || accuracy > 80) {
      final improved = await _watchForBetterFix(geo, best);
      if (improved != null) best = improved;
    }
    return best;
  } catch (_) {
    return null;
  }
}

Future<({double lat, double lng, double? accuracyM})?> _watchForBetterFix(
  html.Geolocation geo,
  ({double lat, double lng, double? accuracyM}) seed,
) async {
  final completer = Completer<({double lat, double lng, double? accuracyM})?>();
  var best = seed;
  late StreamSubscription<dynamic> sub;
  final timer = Timer(const Duration(seconds: 12), () {
    if (!completer.isCompleted) completer.complete(best);
    sub.cancel();
  });

  sub = geo.watchPosition(
    enableHighAccuracy: true,
    maximumAge: Duration.zero,
  ).listen((position) {
    final lat = position.coords?.latitude;
    final lng = position.coords?.longitude;
    if (lat == null || lng == null) return;
    final acc = position.coords?.accuracy?.toDouble();
    if (acc != null && (best.accuracyM == null || acc < best.accuracyM!)) {
      best = (lat: lat.toDouble(), lng: lng.toDouble(), accuracyM: acc);
    }
    if (acc != null && acc <= 35) {
      if (!completer.isCompleted) completer.complete(best);
      timer.cancel();
      sub.cancel();
    }
  }, onError: (_) {
    if (!completer.isCompleted) completer.complete(best);
    timer.cancel();
  });

  return completer.future.timeout(
    const Duration(seconds: 13),
    onTimeout: () {
      sub.cancel();
      return best;
    },
  );
}
