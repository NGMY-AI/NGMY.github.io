import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:geolocator/geolocator.dart';
import 'package:geolocator_android/geolocator_android.dart';
import 'package:geolocator_web/web_settings.dart';
import 'package:http/http.dart' as http;

/// Device GPS reading with coordinates and a human-readable label.
class NgmyGpsReading {
  final double lat;
  final double lng;
  final String label;

  const NgmyGpsReading({required this.lat, required this.lng, required this.label});
}

String ngmyFormatCoords(double lat, double lng) =>
    'Live GPS · ${lat.toStringAsFixed(5)}, ${lng.toStringAsFixed(5)}';

LocationSettings _freshLocationSettings() {
  if (kIsWeb) {
    return WebSettings(
      accuracy: LocationAccuracy.best,
      maximumAge: Duration.zero,
      timeLimit: const Duration(seconds: 25),
    );
  }
  if (defaultTargetPlatform == TargetPlatform.android) {
    return AndroidSettings(
      accuracy: LocationAccuracy.best,
      forceLocationManager: true,
      intervalDuration: const Duration(seconds: 1),
      timeLimit: const Duration(seconds: 25),
    );
  }
  return const LocationSettings(
    accuracy: LocationAccuracy.best,
    timeLimit: Duration(seconds: 25),
  );
}

Future<bool> ngmyEnsureLocationPermission() async {
  try {
    if (!await Geolocator.isLocationServiceEnabled()) return false;
    var permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    }
    return permission == LocationPermission.always || permission == LocationPermission.whileInUse;
  } catch (e) {
    debugPrint('[ngmy_store_location] permission error: $e');
    return false;
  }
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

/// Reads fresh GPS from the device (never uses stale cached web positions).
Future<NgmyGpsReading?> ngmyFetchCurrentGpsReading() async {
  try {
    if (!await ngmyEnsureLocationPermission()) return null;

    final pos = await Geolocator.getCurrentPosition(
      locationSettings: _freshLocationSettings(),
    );

    final address = await _reverseGeocodeAddress(pos.latitude, pos.longitude);
    final label = address != null && address.isNotEmpty
        ? address
        : ngmyFormatCoords(pos.latitude, pos.longitude);

    return NgmyGpsReading(lat: pos.latitude, lng: pos.longitude, label: label);
  } catch (e) {
    debugPrint('[ngmy_store_location] $e');
    return null;
  }
}

/// Returns a human-readable location string from device GPS (web + mobile).
Future<String?> ngmyFetchCurrentLocationLabel() async {
  final reading = await ngmyFetchCurrentGpsReading();
  return reading?.label;
}
