import 'package:flutter/foundation.dart';
import 'package:geolocator/geolocator.dart';

/// Returns a human-readable location string from device GPS (web + mobile).
Future<String?> ngmyFetchCurrentLocationLabel() async {
  try {
    final serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) return null;

    var permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    }
    if (permission == LocationPermission.denied || permission == LocationPermission.deniedForever) {
      return null;
    }

    final pos = await Geolocator.getCurrentPosition(locationSettings: const LocationSettings(accuracy: LocationAccuracy.high));
    return 'Live GPS · ${pos.latitude.toStringAsFixed(5)}, ${pos.longitude.toStringAsFixed(5)}';
  } catch (e) {
    debugPrint('[ngmy_store_location] $e');
    return null;
  }
}

String ngmyFormatCoords(double lat, double lng) => 'Live GPS · ${lat.toStringAsFixed(5)}, ${lng.toStringAsFixed(5)}';
