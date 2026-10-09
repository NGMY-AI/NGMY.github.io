import 'dart:typed_data';

import 'package:image/image.dart' as img;

/// Shrinks a photo before it is uploaded to cloud storage, so one picture costs a few hundred KB
/// instead of 5-25 MB. Long side capped at [maxSide] px, re-encoded as JPEG.
/// Returns the original when it isn't a decodable image (or is already small).
({Uint8List bytes, String mime}) ngmyShrinkImageForUpload(
  Uint8List raw, {
  String mime = 'image/jpeg',
  int maxSide = 1600,
  int quality = 80,
}) {
  final m = mime.toLowerCase();
  // Leave videos, GIFs (animation) and non-images untouched.
  if (raw.isEmpty || m.contains('gif') || (m.isNotEmpty && !m.startsWith('image/'))) {
    return (bytes: raw, mime: mime);
  }
  try {
    final decoded = img.decodeImage(raw);
    if (decoded == null) return (bytes: raw, mime: mime);
    if (raw.length < 300 * 1024 && decoded.width <= maxSide && decoded.height <= maxSide) {
      return (bytes: raw, mime: mime);
    }
    var frame = decoded;
    final resized = frame.width > maxSide || frame.height > maxSide;
    if (resized) {
      frame = img.copyResize(
        frame,
        width: frame.width >= frame.height ? maxSide : null,
        height: frame.height > frame.width ? maxSide : null,
        interpolation: img.Interpolation.average,
      );
    }
    final jpg = Uint8List.fromList(img.encodeJpg(frame, quality: quality));
    if (jpg.isEmpty) return (bytes: raw, mime: mime);
    // A resized photo is always used; otherwise only if re-encoding actually saved space.
    if (!resized && jpg.length >= raw.length) return (bytes: raw, mime: mime);
    return (bytes: jpg, mime: 'image/jpeg');
  } catch (_) {
    return (bytes: raw, mime: mime);
  }
}
