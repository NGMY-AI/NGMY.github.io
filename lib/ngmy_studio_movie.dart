import 'dart:math' as math;
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
/// The colours are picked once, carefully, from eight moments spread over the whole animation, and every picture
/// is then drawn with them. Picking them again for every picture (as before) was slow, so the GIF had to be small and
/// its colours rough, which is what made it blurry.
///
/// [cornerRadius] (in pixels) rounds the four corners: the pixels outside the round corners are see-through.
Future<Uint8List> ngmyMakeGif({
  required int width,
  required int height,
  required int fps,
  required int frames,
  required Future<ui.Image> Function(int i) frameAt,
  double cornerRadius = 0,
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
  // 255 colours for the picture; the last place is the see-through colour of the round corners.
  final q = img.NeuralQuantizer(img.Image.fromBytes(width: width, height: height, bytes: mix.buffer, numChannels: 4, order: img.ChannelOrder.rgba),
      numberOfColors: 255, samplingFactor: kNgmyGifSampling);
  final rgb = Uint8List(256 * 3);
  for (var c = 0; c < q.palette.numColors && c < 255; c++) {
    rgb[c * 3] = q.palette.getRed(c).toInt();
    rgb[c * 3 + 1] = q.palette.getGreen(c).toInt();
    rgb[c * 3 + 2] = q.palette.getBlue(c).toInt();
  }
  final cut = ngmyRoundCornerCuts(width, height, cornerRadius);

  // Each picture after the first keeps only what changed: the parts that stay the same are left see-through, so the
  // picture before shows through. A scene that holds still costs almost nothing, which keeps a sharp GIF small.
  final gif = NgmyGifWriter(width, height, rgb);
  final delay = (100 / fps).round();
  // Colour to palette place, worked out once per colour (7 levels of detail per channel is finer than 255 colours).
  final memo = Int16List(1 << 21)..fillRange(0, 1 << 21, -1);
  Uint8List? prev;
  for (var i = 0; i < frames; i++) {
    final rgba = await rgbaAt(i);
    final idx = Uint8List(width * height);
    for (var p = 0, o = 0; p < idx.length; p++, o += 4) {
      final key = ((rgba[o] >> 1) << 14) | ((rgba[o + 1] >> 1) << 7) | (rgba[o + 2] >> 1);
      var c = memo[key];
      if (c < 0) memo[key] = c = q.getColorIndexRgb(rgba[o], rgba[o + 1], rgba[o + 2]);
      idx[p] = c;
    }
    for (var y = 0; y < height; y++) {
      final n = cut[y];
      if (n == 0) continue;
      idx.fillRange(y * width, y * width + n, kNgmyGifClear);
      idx.fillRange((y + 1) * width - n, (y + 1) * width, kNgmyGifClear);
    }
    if (prev == null) {
      gif.frame(0, 0, width, height, idx, delay);
    } else {
      gif.changes(prev, idx, delay);
    }
    prev = idx;
    onProgress?.call(0.1 + (i + 1) / frames * 0.9);
    // Let the screen breathe so the progress bar moves.
    await Future<void>.delayed(Duration.zero);
  }
  return gif.finish();
}

/// The see-through colour of a GIF made here (the round corners, and the parts that did not change).
const int kNgmyGifClear = 255;

/// Writes a moving GIF: one set of 256 colours ([rgb], 3 bytes each; colour [kNgmyGifClear] is see-through), the
/// pictures play in a loop and each one is laid over the one before.
class NgmyGifWriter {
  NgmyGifWriter(this.width, this.height, Uint8List rgb) {
    _b.add('GIF89a'.codeUnits);
    _u16(width);
    _u16(height);
    _b.addByte(0xF7); // one colour table of 256 colours
    _b.addByte(kNgmyGifClear);
    _b.addByte(0);
    _b.add(rgb);
    // Play forever.
    _b.add(const [0x21, 0xFF, 0x0B]);
    _b.add('NETSCAPE2.0'.codeUnits);
    _b.add(const [3, 1, 0, 0, 0]);
  }

  final int width;
  final int height;
  final BytesBuilder _b = BytesBuilder(copy: false);

  void _u16(int v) {
    _b.addByte(v & 0xFF);
    _b.addByte((v >> 8) & 0xFF);
  }

  /// One picture of [w] x [h] at [x],[y], shown for [delayCs] hundredths of a second.
  void frame(int x, int y, int w, int h, Uint8List idx, int delayCs) {
    // Laid over the picture before (kept, not cleared), with the see-through colour.
    _b.add(const [0x21, 0xF9, 4, (1 << 2) | 1]);
    _u16(delayCs);
    _b.addByte(kNgmyGifClear);
    _b.addByte(0);
    _b.addByte(0x2C);
    _u16(x);
    _u16(y);
    _u16(w);
    _u16(h);
    _b.addByte(0);
    _b.addByte(8);
    _lzw(idx);
    _b.addByte(0);
  }

  /// The next picture [now], keeping only the box around what changed since [before].
  void changes(Uint8List before, Uint8List now, int delayCs) {
    var x0 = width, y0 = height, x1 = -1, y1 = -1;
    for (var y = 0; y < height; y++) {
      final r = y * width;
      for (var x = 0; x < width; x++) {
        if (before[r + x] != now[r + x]) {
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
      }
    }
    if (x1 < 0) {
      // Nothing changed: one see-through pixel keeps the timing.
      frame(0, 0, 1, 1, Uint8List.fromList(const [kNgmyGifClear]), delayCs);
      return;
    }
    final w = x1 - x0 + 1, h = y1 - y0 + 1;
    final part = Uint8List(w * h);
    for (var y = 0; y < h; y++) {
      final r = (y0 + y) * width + x0;
      for (var x = 0; x < w; x++) {
        final v = now[r + x];
        part[y * w + x] = v == before[r + x] ? kNgmyGifClear : v;
      }
    }
    frame(x0, y0, w, h, part, delayCs);
  }

  Uint8List finish() {
    _b.addByte(0x3B);
    return _b.takeBytes();
  }

  /// The GIF squeeze (LZW, 8-bit colours), in blocks of up to 255 bytes. The table of known runs is a fixed-size
  /// number table (no general map), which is what keeps it quick on a phone.
  void _lzw(Uint8List data) {
    const clear = 256, eoi = 257, hsize = 5003, hshift = 4;
    final htab = Int32List(hsize)..fillRange(0, hsize, -1);
    final codetab = Int32List(hsize);
    var codeSize = 9, next = eoi + 1;
    var bits = 0, count = 0;
    final block = Uint8List(255);
    var used = 0;
    void put(int v) {
      block[used++] = v;
      if (used == 255) {
        _b.addByte(255);
        _b.add(Uint8List.fromList(block));
        used = 0;
      }
    }

    void emit(int code) {
      bits |= code << count;
      count += codeSize;
      while (count >= 8) {
        put(bits & 0xFF);
        bits >>= 8;
        count -= 8;
      }
    }

    emit(clear);
    var prefix = data[0];
    outer:
    for (var n = 1; n < data.length; n++) {
      final k = data[n];
      final fcode = (k << 12) + prefix;
      var i = (k << hshift) ^ prefix;
      if (htab[i] == fcode) {
        prefix = codetab[i];
        continue;
      }
      if (htab[i] >= 0) {
        final disp = i == 0 ? 1 : hsize - i;
        do {
          i -= disp;
          if (i < 0) i += hsize;
          if (htab[i] == fcode) {
            prefix = codetab[i];
            continue outer;
          }
        } while (htab[i] >= 0);
      }
      emit(prefix);
      if (next == 4096) {
        emit(clear);
        next = eoi + 1;
        codeSize = 9;
        htab.fillRange(0, hsize, -1);
      } else {
        if (next >= (1 << codeSize)) codeSize++;
        codetab[i] = next++;
        htab[i] = fcode;
      }
      prefix = k;
    }
    emit(prefix);
    emit(eoi);
    if (count > 0) put(bits & 0xFF);
    if (used > 0) {
      _b.addByte(used);
      _b.add(Uint8List.sublistView(block, 0, used));
    }
  }
}

/// For each row of a [w] x [h] picture with round corners of [r] pixels: how many pixels at each end are outside.
List<int> ngmyRoundCornerCuts(int w, int h, double r) {
  final cut = List<int>.filled(h, 0);
  if (r <= 0) return cut;
  r = math.min(r, math.min(w, h) / 2);
  for (var y = 0; y < h; y++) {
    final fromEdge = math.min(y, h - 1 - y) + 0.5;
    if (fromEdge >= r) continue;
    final dy = r - fromEdge;
    cut[y] = (r - math.sqrt(r * r - dy * dy)).round();
  }
  return cut;
}

/// [src] put into exactly [w] x [h] at its own size, never stretched (stretching by a hair is what softened every
/// picture): a captured screen part can be a pixel bigger or smaller than asked.
Future<ui.Image> ngmyImageExact(ui.Image src, int w, int h, {Color background = const Color(0xFF121212)}) async {
  if (src.width == w && src.height == h) return src;
  final rec = ui.PictureRecorder();
  final c = Canvas(rec);
  c.drawRect(Rect.fromLTWH(0, 0, w.toDouble(), h.toDouble()), Paint()..color = background);
  c.drawImage(src, Offset.zero, Paint());
  final pic = rec.endRecording();
  final out = await pic.toImage(w, h);
  pic.dispose();
  src.dispose();
  return out;
}

/// The last GIF handed to [ngmySaveGif] (only read by the tests).
Uint8List? ngmyLastGifForTest;

/// Hands a finished GIF to the phone (save / send), or downloads it. True when it went through.
Future<bool> ngmySaveGif(Uint8List bytes, String name) async {
  ngmyLastGifForTest = bytes;
  var done = false;
  try {
    final res = await Share.shareXFiles([XFile.fromData(bytes, mimeType: 'image/gif', name: '$name.gif')], text: 'Made in NGMY Core Protocol');
    done = res.status != ShareResultStatus.unavailable;
  } catch (_) {}
  if (!done) done = await ngmySaveBytes(bytes, '$name.gif', 'image/gif');
  return done;
}
