import 'dart:typed_data';
import 'dart:ui' as ui;

Future<Uint8List?> ngmyMakeMovieImpl({
  required int width,
  required int height,
  required int fps,
  required int frames,
  required Future<ui.Image> Function(int i) frameAt,
  void Function(double)? onProgress,
}) async =>
    null;
