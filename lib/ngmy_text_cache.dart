import 'package:flutter/painting.dart';

// Words drawn on screens that move every frame (the ads on the TVs, phones and city screens) are laid out once and
// reused, instead of being measured again sixty times a second. Laying out words is the slowest part of drawing an
// ad, so this keeps rooms full of screens smooth.

final Map<Object, TextPainter> _cache = <Object, TextPainter>{};
const int _kMax = 800;

/// [c] with its see-through level rounded to one of 17 steps, so a word that fades in uses a few layouts, not hundreds.
Color ngmyTextColorStep(Color c) => c.withValues(alpha: (c.a * 16).roundToDouble() / 16);

/// A font size rounded to half a point, for the same reason.
double ngmyTextSizeStep(double v) => (v * 2).roundToDouble() / 2;

/// The laid out words for [text] in [style] (the same object every time they are asked for again).
TextPainter ngmyCachedText(String text, TextStyle style, {int maxLines = 1, String? ellipsis, TextAlign align = TextAlign.left, double maxWidth = double.infinity}) {
  final key = (text, style, maxLines, ellipsis, align, maxWidth.isFinite ? (maxWidth * 2).roundToDouble() / 2 : -1.0);
  final hit = _cache.remove(key);
  if (hit != null) {
    _cache[key] = hit;
    return hit;
  }
  final tp = TextPainter(text: TextSpan(text: text, style: style), textDirection: TextDirection.ltr, maxLines: maxLines, ellipsis: ellipsis, textAlign: align)
    ..layout(maxWidth: maxWidth.isFinite ? (maxWidth * 2).roundToDouble() / 2 : double.infinity);
  _cache[key] = tp;
  while (_cache.length > _kMax) {
    final k = _cache.keys.first;
    _cache.remove(k)!.dispose();
  }
  return tp;
}

/// How many layouts are kept now (for the speed checks).
int get ngmyTextCacheSize => _cache.length;
