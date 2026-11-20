import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/rendering.dart';
import 'package:image/image.dart' as img;
import 'package:share_plus/share_plus.dart';

import 'ngmy_bytes_save.dart';

/// How carefully a GIF's 256 colours are picked (1 is the most careful; the old setting was 12, which made soft,
/// smeared colours).
const int kNgmyGifSampling = 3;

/// Makes a moving GIF from pictures: [frameAt] draws moment [i] (of [frames]) at exactly [width] x [height].
///
/// The 256 colours are picked once, carefully, from eight moments spread over the whole animation, and every picture
/// is then drawn with them. Picking them again for every picture (as before) was slow, so the GIF had to be small and
/// its colours rough, which is what made it blurry.
Future<Uint8List> ngmyMakeGif({
  required int width,
  required int height,
  required int fps,
  required int frames,
  required Future<ui.Image> Function(int i) frameAt,
  void Function(double)? onProgress,
}) async {
  Future<Uint8List> rgbaAt(int i) async {
    final image = await frameAt(i);
    final data = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
    image.dispose();
    if (data == null) throw StateError('no picture');
    return data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
  }

  // The colours: rows taken in turn from eight moments make one picture to learn from.
  const samples = 8;
  final picks = <Uint8List>[];
  for (var k = 0; k < samples; k++) {
    picks.add(await rgbaAt((k * frames / samples).floor()));
    onProgress?.call((k + 1) / samples * 0.1);
  }
  final row = width * 4;
  final mix = Uint8List(row * height);
  for (var y = 0; y < height; y++) {
    mix.setRange(y * row, (y + 1) * row, picks[y % samples], y * row);
  }
  picks.clear();
  final q = img.NeuralQuantizer(img.Image.fromBytes(width: width, height: height, bytes: mix.buffer, numChannels: 4, order: img.ChannelOrder.rgba),
      samplingFactor: kNgmyGifSampling);

  final enc = img.GifEncoder(delay: 0, repeat: 0, dither: img.DitherKernel.none);
  final delay = (100 / fps).round();
  final memo = <int, int>{};
  for (var i = 0; i < frames; i++) {
    final rgba = await rgbaAt(i);
    final out = img.Image(width: width, height: height, numChannels: 1, palette: q.palette);
    final idx = out.data!.buffer.asUint8List();
    for (var p = 0, o = 0; p < idx.length; p++, o += 4) {
      final key = (rgba[o] << 16) | (rgba[o + 1] << 8) | rgba[o + 2];
      idx[p] = memo[key] ??= q.getColorIndexRgb(rgba[o], rgba[o + 1], rgba[o + 2]);
    }
    enc.addFrame(out, duration: delay);
    onProgress?.call(0.1 + (i + 1) / frames * 0.9);
    // Let the screen breathe so the progress bar moves.
    await Future<void>.delayed(Duration.zero);
  }
  return enc.finish() ?? Uint8List(0);
}

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

/// Hands a finished GIF to the phone (save / send), or downloads it. True when it went through.
Future<bool> ngmySaveGif(Uint8List bytes, String name) async {
  var done = false;
  try {
    final res = await Share.shareXFiles([XFile.fromData(bytes, mimeType: 'image/gif', name: '$name.gif')], text: 'Made in NGMY Core Protocol');
    done = res.status != ShareResultStatus.unavailable;
  } catch (_) {}
  if (!done) done = await ngmySaveBytes(bytes, '$name.gif', 'image/gif');
  return done;
}
