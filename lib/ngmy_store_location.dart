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

Future<({double lat, double lng, double? accuracyM})?> _readFreshCoords() async {
  ({double lat, double lng, double? accuracyM})? best;

  Future<void> consider(double lat, double lng, double? accuracyM) async {
    final candidate = (lat: lat, lng: lng, accuracyM: accuracyM);
    if (best == null) {
      best = candidate;
      return;
    }
    final prev = best!.accuracyM;
    if (accuracyM != null && (prev == null || accuracyM < prev)) {
      best = candidate;
    }
  }

  if (kIsWeb) {
    final web = await ngmyPlatformGeolocationFallback();
    if (web != null) await consider(web.lat, web.lng, web.accuracyM);
  }

  final permission = await _requestLocationPermission();
  if (permission != LocationPermission.denied && permission != LocationPermission.deniedForever) {
    if (!kIsWeb) {
      final enabled = await Geolocator.isLocationServiceEnabled();
      if (!enabled) {
        return best;
      }
    }

    for (var i = 0; i < 3; i++) {
      final pos = await _readPositionViaGeolocator(highAccuracy: true);
      if (pos != null) {
        await consider(pos.latitude, pos.longitude, pos.accuracy);
        if (pos.accuracy <= 40) break;
      }
      if (i < 2) await Future<void>.delayed(const Duration(milliseconds: 450));
    }
  }

  if (best != null) return best;

  if (kIsWeb) {
    return ngmyPlatformGeolocationFallback();
  }
  return null;
}

bool _looksLikePoorAddress(String label) {
  final s = label.trim();
  if (s.length < 6) return true;
  final lower = s.toLowerCase();
  if (lower.startsWith('live gps')) return true;
  if (RegExp(r'^\d{1,3}\.\d{4,},').hasMatch(s) && !lower.contains('street') && !lower.contains('road') && !lower.contains(' ave')) {
    return true;
  }
  // Plus codes alone (e.g. "H93F+2Q Dallas") — not a street address.
  if (RegExp(r'^[2-9CFGHJMPQRVWX]{4,8}\+[2-9CFGHJMPQRVWX]{2,3}\b', caseSensitive: false).hasMatch(s)) {
    return true;
  }
  if (lower.contains('approximate') || lower.contains('ip address')) return true;
  if (RegExp(r'^\d+\.\d+\.\d+\.\d+').hasMatch(s)) return true;
  return false;
}

String _joinParts(Iterable<String> parts) => parts.map((p) => p.trim()).where((p) => p.isNotEmpty).join(', ');

String? _addressFromNominatimMap(Map<dynamic, dynamic> addr) {
  final house = (addr['house_number'] ?? '').toString().trim();
  final road = (addr['road'] ?? addr['pedestrian'] ?? addr['footway'] ?? addr['residential'] ?? '').toString().trim();
  final line1 = _joinParts([house, road]);
  final area = (addr['neighbourhood'] ?? addr['suburb'] ?? addr['quarter'] ?? '').toString().trim();
  final city = (addr['city'] ?? addr['town'] ?? addr['village'] ?? addr['hamlet'] ?? '').toString().trim();
  final state = (addr['state'] ?? addr['region'] ?? '').toString().trim();
  final postcode = (addr['postcode'] ?? '').toString().trim();
  final built = _joinParts([line1, area, city, state, postcode]);
  return built.isEmpty ? null : built;
}

Future<String?> _reverseGeocodeBigDataCloud(double lat, double lng) async {
  try {
    final url = Uri.parse(
      'https://api.bigdatacloud.net/data/reverse-geocode-client'
      '?latitude=$lat&longitude=$lng&localityLanguage=en',
    );
    final resp = await http.get(url).timeout(const Duration(seconds: 10));
    if (resp.statusCode != 200) return null;
    final data = jsonDecode(resp.body);
    if (data is! Map) return null;
    final house = (data['houseNumber'] ?? '').toString().trim();
    final street = (data['street'] ?? data['streetName'] ?? '').toString().trim();
    final line1 = _joinParts([house, street]);
    final city = (data['city'] ?? data['locality'] ?? '').toString().trim();
    final state = (data['principalSubdivision'] ?? '').toString().trim();
    final postcode = (data['postcode'] ?? '').toString().trim();
    final built = _joinParts([line1, city, state, postcode]);
    if (built.isNotEmpty && !_looksLikePoorAddress(built)) return built;
  } catch (e) {
    debugPrint('[ngmy_store_location] bigdatacloud geocode: $e');
  }
  return null;
}

Future<String?> _reverseGeocodeNominatim(double lat, double lng) async {
  try {
    final url = Uri.parse(
      'https://nominatim.openstreetmap.org/reverse?format=json&lat=$lat&lon=$lng&zoom=18&addressdetails=1',
    );
    final resp = await http
        .get(
          url,
          headers: const {'User-Agent': 'NGMY-SiteMap/1.0 (live-gps-address)'},
        )
        .timeout(const Duration(seconds: 12));
    if (resp.statusCode != 200) return null;
    final data = jsonDecode(resp.body);
    if (data is! Map) return null;
    final addr = data['address'];
    if (addr is Map) {
      final structured = _addressFromNominatimMap(addr);
      if (structured != null && !_looksLikePoorAddress(structured)) return structured;
    }
    final display = (data['display_name'] ?? '').toString().trim();
    if (display.isNotEmpty && !_looksLikePoorAddress(display)) return display;
  } catch (e) {
    debugPrint('[ngmy_store_location] nominatim geocode: $e');
  }
  return null;
}

Future<String?> _reverseGeocodeAddress(double lat, double lng) async {
  final cloud = await _reverseGeocodeBigDataCloud(lat, lng);
  if (cloud != null && cloud.isNotEmpty) return cloud;
  return _reverseGeocodeNominatim(lat, lng);
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

    final coords = await _readFreshCoords();
    if (coords == null) {
      return (reading: null, failure: NgmyGpsFailure.unavailable);
    }

    if (coords.accuracyM != null && coords.accuracyM! > 250) {
      debugPrint('[ngmy_store_location] weak GPS accuracy: ${coords.accuracyM}m');
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
