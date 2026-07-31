import 'dart:typed_data';

/// Non-web: no vault video thumbnails.
Future<Uint8List?> ngmyVaultCaptureVideoThumbnail({
  Object? webBlob,
  Uint8List? bytes,
  String? objectUrl,
  String mime = 'video/mp4',
}) async =>
    null;
