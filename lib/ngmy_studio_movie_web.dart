// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;
import 'dart:js_util' as js_util;
import 'dart:typed_data';
import 'dart:ui' as ui;

/// Each picture is handed to the video maker in web/ngmy_studio_fast_export.js (the phone's own H.264 encoder).
Future<Uint8List?> ngmyMakeMovieImpl({
  required int width,
  required int height,
  required int fps,
  required int frames,
  required Future<ui.Image> Function(int i) frameAt,
  void Function(double)? onProgress,
}) async {
  if (!js_util.hasProperty(html.window, 'ngmyMovieBegin')) return null;
  num id = 0;
  try {
    id = await js_util.promiseToFuture<num>(js_util.callMethod(html.window, 'ngmyMovieBegin', [width, height, fps]));
  } catch (_) {
    return null;
  }
  if (id == 0) return null;
  try {
    for (var i = 0; i < frames; i++) {
      final image = await frameAt(i);
      final data = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
      image.dispose();
      if (data == null) throw StateError('no picture');
      await js_util.promiseToFuture<Object?>(js_util.callMethod(html.window, 'ngmyMovieAdd', [id, data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes)]));
      onProgress?.call((i + 1) / frames * 0.97);
    }
    final out = await js_util.promiseToFuture<Object?>(js_util.callMethod(html.window, 'ngmyMovieEnd', [id]));
    onProgress?.call(1);
    if (out is Uint8List) return out;
    if (out is ByteBuffer) return out.asUint8List();
    return null;
  } catch (_) {
    try {
      js_util.callMethod(html.window, 'ngmyMovieCancel', [id]);
    } catch (_) {}
    return null;
  }
}
