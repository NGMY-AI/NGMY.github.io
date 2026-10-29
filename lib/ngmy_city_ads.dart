import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_construction_homescene.dart';
import 'ngmy_electronics_screens.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The ads of the city: new NGMY ads for the billboards, the buses, the police cars and the helicopters.
// Each billboard shows a different one; the later ones are the NGMY app ads from the TVs.
// ═════════════════════════════════════════════════════════════════════════════

class _Ad {
  const _Ad(this.title, this.sub, this.a, this.b, this.accent);
  final String title, sub;
  final Color a, b, accent;
}

const List<_Ad> _ads = [
  _Ad('NGMY JOBS', 'Find work. Get hired. Get paid.', Color(0xFFF59E0B), Color(0xFF92400E), Color(0xFFFFF3C4)),
  _Ad('NGMY LOANS', 'Help when you need it most.', Color(0xFF16A34A), Color(0xFF14532D), Color(0xFFDCFCE7)),
  _Ad('KISWAHILI SCHOOL', 'Learn Swahili and English, step by step.', Color(0xFF14B8A6), Color(0xFF115E59), Color(0xFFCCFBF1)),
  _Ad('CIVIC REGISTRY', 'Your family, your community, registered.', Color(0xFF3B82F6), Color(0xFF1E3A8A), Color(0xFFDBEAFE)),
  _Ad('CORE PROTOCOL', 'Studios for curious minds.', Color(0xFF8B5CF6), Color(0xFF4C1D95), Color(0xFFEDE9FE)),
  _Ad('BUILD AND FIX', 'The Construction Lab: wire it, plumb it.', Color(0xFFEA580C), Color(0xFF7C2D12), Color(0xFFFFEDD5)),
  _Ad('CREATE WITH NGMY', 'Videos, slides, bios and books.', Color(0xFFEC4899), Color(0xFF831843), Color(0xFFFCE7F3)),
];


/// Laid-out text is kept, because an ad is painted again and again.
final Map<String, TextPainter> _text = {};

TextPainter _tp(String text, TextStyle style, double maxWidth, {int lines = 1}) {
  final key = '$text|${style.fontSize?.round()}|${maxWidth.round()}|${style.color?.toARGB32()}';
  return _text[key] ??= (TextPainter(text: TextSpan(text: text, style: style), textDirection: TextDirection.ltr, maxLines: lines)..layout(maxWidth: maxWidth));
}

/// How many different ads there are for the city.
const int kCityAdCount = 1 + 7 + 9;

/// City ad number [n]: the NGMY poster with the logo and the words, seven new ads, then the NGMY app ads.
/// An ad that keeps changing: every 7 seconds the next NGMY ad plays on the billboard, starting from a different one for each billboard.
void paintCityAdLoop(Canvas c, Size s, double t, int seed) => paintCityAd(c, s, t, seed + (t / 7).floor());

void paintCityAd(Canvas c, Size s, double t, int n) {
  final k = n % kCityAdCount;
  if (k == 0) {
    paintNgmyPoster(c, s, t, 0);
    // A shine that sweeps across.
    final x = ((t * 0.35) % 1.6 - 0.3) * s.width;
    c.save();
    c.clipRect(Offset.zero & s);
    c.drawRect(Rect.fromLTWH(x, 0, s.width * 0.12, s.height), Paint()..color = Colors.white.withValues(alpha: 0.12));
    c.restore();
    return;
  }
  if (k >= 8) {
    paintNgmyApp(c, s, k - 8, t);
    return;
  }
  final ad = _ads[k - 1];
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [ad.a, ad.b]).createShader(r));
  // Stripes that slide, so it looks alive.
  c.save();
  c.clipRect(r);
  final stripe = Paint()..color = Colors.white.withValues(alpha: 0.07);
  for (var i = -4; i < 14; i++) {
    final x = (i * s.width / 7 + t * s.width * 0.05) % (s.width * 2) - s.width * 0.4;
    c.drawPath(Path()..moveTo(x, 0)..lineTo(x + s.width * 0.07, 0)..lineTo(x - s.height * 0.4 + s.width * 0.07, s.height)..lineTo(x - s.height * 0.4, s.height)..close(), stripe);
  }
  // A circle that pulses.
  c.drawCircle(Offset(s.width * 0.88, s.height * 0.3), s.height * (0.22 + 0.03 * math.sin(t * 2)), Paint()..color = ad.accent.withValues(alpha: 0.18));
  c.restore();
  final title = _tp(ad.title, TextStyle(color: Colors.white, fontSize: s.height * 0.22, fontWeight: FontWeight.w900, letterSpacing: s.height * 0.012), s.width * 0.9);
  title.paint(c, Offset(s.width * 0.06, s.height * 0.2));
  final sub = _tp(ad.sub, TextStyle(color: ad.accent, fontSize: s.height * 0.1, fontWeight: FontWeight.w700), s.width * 0.8, lines: 2);
  sub.paint(c, Offset(s.width * 0.06, s.height * 0.5));
  // The NGMY name in a corner.
  final img = NgmyLogo.image;
  final box = Rect.fromLTWH(s.width * 0.06, s.height * 0.76, s.height * 0.4, s.height * 0.16);
  if (img != null) {
    final kk = math.min(box.width / img.width, box.height / img.height);
    c.drawImageRect(img, Rect.fromLTWH(0, 0, img.width.toDouble(), img.height.toDouble()), Rect.fromLTWH(box.left, box.top, img.width * kk, img.height * kk), Paint()..filterQuality = FilterQuality.medium);
  } else {
    final tp = TextPainter(text: TextSpan(text: 'NGMY', style: TextStyle(color: Colors.white, fontSize: s.height * 0.12, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(c, box.topLeft);
  }
  final site = _tp('ngmy.org', TextStyle(color: Colors.white70, fontSize: s.height * 0.08, fontWeight: FontWeight.w800), 400);
  site.paint(c, Offset(s.width - site.width - s.width * 0.05, s.height * 0.82));
}
