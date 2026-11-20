import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/rendering.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_bytes_save.dart';
import 'ngmy_studio_movie_stub.dart' if (dart.library.html) 'ngmy_studio_movie_web.dart' as impl;

/// Makes a sharp MP4 video from pictures: [frameAt] draws moment [i] (of [frames]) at exactly [width] x [height].
/// Null when this phone or browser cannot make video (then a GIF can be made instead).
Future<Uint8List?> ngmyMakeMovie({
  required int width,
  required int height,
  required int fps,
  required int frames,
  required Future<ui.Image> Function(int i) frameAt,
  void Function(double)? onProgress,
}) =>
    impl.ngmyMakeMovieImpl(width: width & ~1, height: height & ~1, fps: fps, frames: frames, frameAt: frameAt, onProgress: onProgress);

/// [src] drawn to fill exactly [w] x [h] (a captured screen part is not always a whole number of pixels).
Future<ui.Image> ngmyImageExact(ui.Image src, int w, int h, {Color background = const Color(0xFF121212)}) async {
  if (src.width == w && src.height == h) return src;
  final rec = ui.PictureRecorder();
  final c = Canvas(rec);
  c.drawRect(Rect.fromLTWH(0, 0, w.toDouble(), h.toDouble()), Paint()..color = background);
  c.drawImageRect(
    src,
    Rect.fromLTWH(0, 0, src.width.toDouble(), src.height.toDouble()),
    Rect.fromLTWH(0, 0, w.toDouble(), h.toDouble()),
    Paint()..filterQuality = FilterQuality.high,
  );
  final pic = rec.endRecording();
  final out = await pic.toImage(w, h);
  pic.dispose();
  src.dispose();
  return out;
}

/// Hands a finished video to the phone (Save Video / send), or downloads it. True when it went through.
Future<bool> ngmySaveMovie(Uint8List bytes, String name) async {
  var done = false;
  try {
    final res = await Share.shareXFiles([XFile.fromData(bytes, mimeType: 'video/mp4', name: '$name.mp4')], text: 'Made in NGMY Core Protocol');
    done = res.status != ShareResultStatus.unavailable;
  } catch (_) {}
  if (!done) done = await ngmySaveBytes(bytes, '$name.mp4', 'video/mp4');
  return done;
}
