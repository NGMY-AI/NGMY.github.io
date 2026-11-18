import 'dart:convert';

import 'package:flutter/services.dart';

// The four picture papers for the Hati documents (curtains, village, sunset, roses) are pictures in assets/hati, made
// from the owner's own designs by tool/hati_photo/exact.dart. A document keeps its paper inside itself as a data link,
// so each picture is read once and kept here as one.

const List<String> kNgmyHatiPhotoArt = [
  'exact_curtain',
  'exact_curtain_notitle',
  'exact_village',
  'exact_village_notitle',
  'exact_sunset',
  'exact_sunset_notitle',
  'exact_roses',
  'exact_roses_notitle',
  'exact_kijiji',
  'exact_kijiji_notitle',
  'exact_kifalme',
  'exact_kifalme_notitle',
];

final Map<String, String> _urls = {};
Future<void>? _loading;

/// Reads the four pictures (once). Call before building or showing a Hati paper.
Future<void> ngmyHatiPhotoArtLoad() => _loading ??= () async {
      for (final name in kNgmyHatiPhotoArt) {
        try {
          final data = await rootBundle.load('assets/hati/$name.jpg');
          _urls[name] = 'data:image/jpeg;base64,${base64Encode(data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes))}';
        } catch (_) {}
      }
    }();

/// The picture as a data link, or null when it has not been read yet.
String? ngmyHatiPhotoArtUrl(String name) => _urls[name];
