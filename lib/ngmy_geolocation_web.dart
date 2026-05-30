// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

/// Browser geolocation API (HTTPS required). Used when geolocator package fails on web/PWA.
Future<({double lat, double lng})?> ngmyPlatformGeolocationFallback() async {
  final geo = html.window.navigator.geolocation;
  try {
    final position = await geo.getCurrentPosition(
      enableHighAccuracy: true,
      maximumAge: Duration.zero,
      timeout: const Duration(seconds: 30),
    );
    final lat = position.coords?.latitude;
    final lng = position.coords?.longitude;
    if (lat == null || lng == null) return null;
    return (lat: lat.toDouble(), lng: lng.toDouble());
  } catch (e) {
    return null;
  }
}
