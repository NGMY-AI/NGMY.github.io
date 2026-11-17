import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/painting.dart';

// Little screens on the lab board (a TV, a phone, a watch) show the whole real ad. Drawing a whole ad every frame for
// every little screen would make the board slow, so the picture is made a set number of times a second, kept, and
// shown again in between. Screens that show the same thing at the same moment share one picture.

class _Shot {
  _Shot(this.bucket, this.image);
  final int bucket;
  final ui.Image image;
}

final Map<Object, _Shot> _shots = <Object, _Shot>{};
const int _kMaxShots = 24;
const int _kMaxPixels = 6000000;

double _dpr() {
  try {
    final views = ui.PlatformDispatcher.instance.views;
    return views.isEmpty ? 2.0 : views.first.devicePixelRatio;
  } catch (_) {
    return 2.0;
  }
}

final Paint _paint = Paint()
  ..filterQuality = FilterQuality.high
  ..isAntiAlias = true;

/// Draws [draw] into the [size] box at the top left of [c], from a picture made [fps] times a second at [time] and
/// kept under [key]. The picture is made sharp enough to zoom in on ([sharp] times the size, times the phone pixels).
void ngmyDrawCachedScreen(Canvas c, Object key, Size size, double time, void Function(Canvas c) draw, {double fps = 15, double sharp = 4}) {
  if (size.width <= 0 || size.height <= 0) return;
  final bucket = (time * fps).floor();
  var shot = _shots.remove(key);
  if (shot == null || shot.bucket != bucket) {
    final maxDim = math.max(size.width, size.height);
    final scale = math.min(sharp * _dpr(), 1600 / maxDim).clamp(1.0, 64.0);
    final rec = ui.PictureRecorder();
    final pc = Canvas(rec)..scale(scale);
    draw(pc);
    final pic = rec.endRecording();
    final img = pic.toImageSync(math.max(1, (size.width * scale).round()), math.max(1, (size.height * scale).round()));
    pic.dispose();
    shot?.image.dispose();
    shot = _Shot(bucket, img);
  }
  _shots[key] = shot;
  var pixels = 0;
  for (final s in _shots.values) {
    pixels += s.image.width * s.image.height;
  }
  while (_shots.length > 1 && (_shots.length > _kMaxShots || pixels > _kMaxPixels)) {
    final k = _shots.keys.first;
    final old = _shots.remove(k)!;
    pixels -= old.image.width * old.image.height;
    old.image.dispose();
  }
  final img = shot.image;
  c.drawImageRect(img, Rect.fromLTWH(0, 0, img.width.toDouble(), img.height.toDouble()), Offset.zero & size, _paint);
}
