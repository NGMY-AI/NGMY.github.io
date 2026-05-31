import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:geolocator/geolocator.dart';
import 'package:geolocator_android/geolocator_android.dart';
import 'package:geolocator_web/web_settings.dart';
import 'package:http/http.dart' as http;

import 'ngmy_geolocation_stub.dart' if (dart.library.html) 'ngmy_geolocation_web.dart';

/// Device GPS reading with coordinates and a human-readable label.
class NgmyGpsReading {
  final double lat;
  final double lng;
  final String label;

  const NgmyGpsReading({required this.lat, required this.lng, required this.label});
}

enum NgmyGpsFailure {
  permissionDenied,
  serviceDisabled,
  timeout,
  unavailable,
}

String ngmyFormatCoords(double lat, double lng) =>
    'Live GPS · ${lat.toStringAsFixed(5)}, ${lng.toStringAsFixed(5)}';

String ngmyGpsFailureMessage(NgmyGpsFailure failure) {
  switch (failure) {
    case NgmyGpsFailure.permissionDenied:
      return 'Location blocked. In your browser tap the lock icon → Site settings → Allow Location, then try again.';
    case NgmyGpsFailure.serviceDisabled:
      return 'Turn on Location Services / GPS on your phone, then try again.';
    case NgmyGpsFailure.timeout:
      return 'GPS timed out. Move near a window or outdoors and tap Share location again.';
    case NgmyGpsFailure.unavailable:
      return 'Could not read GPS. Use Chrome/Safari over HTTPS and allow location when prompted.';
  }
}

LocationSettings _freshLocationSettings({bool highAccuracy = true}) {
  if (kIsWeb) {
    return WebSettings(
      accuracy: highAccuracy ? LocationAccuracy.best : LocationAccuracy.medium,
      maximumAge: Duration.zero,
      timeLimit: const Duration(seconds: 30),
    );
  }
  if (defaultTargetPlatform == TargetPlatform.android) {
    return AndroidSettings(
      accuracy: highAccuracy ? LocationAccuracy.best : LocationAccuracy.medium,
      forceLocationManager: true,
      intervalDuration: const Duration(seconds: 1),
      timeLimit: const Duration(seconds: 30),
    );
  }
  return LocationSettings(
    accuracy: highAccuracy ? LocationAccuracy.best : LocationAccuracy.medium,
    timeLimit: const Duration(seconds: 30),
  );
}

Future<LocationPermission> _requestLocationPermission() async {
  var permission = await Geolocator.checkPermission();
  if (permission == LocationPermission.denied) {
    permission = await Geolocator.requestPermission();
  }
  return permission;
}

Future<Position?> _readPositionViaGeolocator({bool highAccuracy = true}) async {
  try {
    return await Geolocator.getCurrentPosition(
      locationSettings: _freshLocationSettings(highAccuracy: highAccuracy),
    );
  } catch (e) {
    debugPrint('[ngmy_store_location] geolocator read: $e');
    return null;
  }
}

Future<({double lat, double lng})?> _readCoordsWithFallback() async {
  if (kIsWeb) {
    final web = await ngmyPlatformGeolocationFallback();
    if (web != null) return web;
  }

  final permission = await _requestLocationPermission();
  if (permission == LocationPermission.denied || permission == LocationPermission.deniedForever) {
    return null;
  }

  if (!kIsWeb) {
    final enabled = await Geolocator.isLocationServiceEnabled();
    if (!enabled) return null;
  }

  var pos = await _readPositionViaGeolocator(highAccuracy: true);
  pos ??= await _readPositionViaGeolocator(highAccuracy: false);

  if (pos != null) {
    return (lat: pos.latitude, lng: pos.longitude);
  }

  if (kIsWeb) {
    final web = await ngmyPlatformGeolocationFallback();
    if (web != null) return web;
  }

  try {
    final last = await Geolocator.getLastKnownPosition();
    if (last != null) return (lat: last.latitude, lng: last.longitude);
  } catch (_) {}

  return null;
}

Future<String?> _reverseGeocodeAddress(double lat, double lng) async {
  try {
    final url = Uri.parse(
      'https://nominatim.openstreetmap.org/reverse?format=json&lat=$lat&lon=$lng&zoom=16&addressdetails=1',
    );
    final resp = await http
        .get(
          url,
          headers: const {'User-Agent': 'NGMY-Store/1.0 (live-tracking)'},
        )
        .timeout(const Duration(seconds: 12));
    if (resp.statusCode != 200) return null;
    final data = jsonDecode(resp.body);
    if (data is! Map) return null;
    final display = (data['display_name'] ?? '').toString().trim();
    if (display.isNotEmpty) return display;
    final addr = data['address'];
    if (addr is Map) {
      final parts = <String>[
        (addr['house_number'] ?? '').toString(),
        (addr['road'] ?? addr['pedestrian'] ?? '').toString(),
        (addr['city'] ?? addr['town'] ?? addr['village'] ?? '').toString(),
        (addr['state'] ?? '').toString(),
      ].where((s) => s.trim().isNotEmpty).toList();
      if (parts.isNotEmpty) return parts.join(', ');
    }
  } catch (e) {
    debugPrint('[ngmy_store_location] reverse geocode: $e');
  }
  return null;
}

Future<({NgmyGpsReading? reading, NgmyGpsFailure? failure})> ngmyFetchCurrentGpsDetailed() async {
  try {
    if (!kIsWeb) {
      final permission = await Geolocator.checkPermission();
      if (permission == LocationPermission.denied) {
        final requested = await Geolocator.requestPermission();
        if (requested == LocationPermission.denied || requested == LocationPermission.deniedForever) {
          return (reading: null, failure: NgmyGpsFailure.permissionDenied);
        }
      } else if (permission == LocationPermission.deniedForever) {
        return (reading: null, failure: NgmyGpsFailure.permissionDenied);
      }

      if (!await Geolocator.isLocationServiceEnabled()) {
        return (reading: null, failure: NgmyGpsFailure.serviceDisabled);
      }
    }

    final coords = await _readCoordsWithFallback();
    if (coords == null) {
      return (reading: null, failure: NgmyGpsFailure.unavailable);
    }

    final address = await _reverseGeocodeAddress(coords.lat, coords.lng);
    final label = address != null && address.isNotEmpty
        ? address
        : ngmyFormatCoords(coords.lat, coords.lng);

    return (
      reading: NgmyGpsReading(lat: coords.lat, lng: coords.lng, label: label),
      failure: null,
    );
  } catch (e) {
    debugPrint('[ngmy_store_location] detailed fetch: $e');
    final msg = e.toString().toLowerCase();
    if (msg.contains('timeout')) {
      return (reading: null, failure: NgmyGpsFailure.timeout);
    }
    return (reading: null, failure: NgmyGpsFailure.unavailable);
  }
}

/// Reads fresh GPS from the device (never uses stale cached web positions).
Future<NgmyGpsReading?> ngmyFetchCurrentGpsReading() async {
  final result = await ngmyFetchCurrentGpsDetailed();
  return result.reading;
}

/// Returns a human-readable location string from device GPS (web + mobile).
Future<String?> ngmyFetchCurrentLocationLabel() async {
  final reading = await ngmyFetchCurrentGpsReading();
  return reading?.label;
}

/// Straight-line distance in miles (device GPS vs job site, store, etc.).
double ngmyDistanceMiles(double lat1, double lng1, double lat2, double lng2) {
  final meters = Geolocator.distanceBetween(lat1, lng1, lat2, lng2);
  return meters / 1609.344;
}

bool ngmyIsWithinMiles({
  required double fromLat,
  required double fromLng,
  required double toLat,
  required double toLng,
  double maxMiles = 3,
}) {
  return ngmyDistanceMiles(fromLat, fromLng, toLat, toLng) <= maxMiles;
}
