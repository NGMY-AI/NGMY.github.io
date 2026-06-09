import 'dart:math' as math;

import 'dart:ui' as ui;



import 'package:flutter/material.dart';



/// Professional broadcast overlay styles — video background + inset editable graphics.

enum NgmyNewsBannerStyle {

  broadcastGradient,

  ngmyPrime,

  sunsetPulse,

  cyberNeon,

  royalBlue,

  fireAlert,

  emeraldWave,

  purpleHype,

  midnightGold,

  tropicalVibe,

  sportDynamic,

  podcastPro,

  newsFlash,

  cleanMinimal,

  luxuryDark,

}



extension NgmyNewsBannerStyleExt on NgmyNewsBannerStyle {

  String get label => switch (this) {

        NgmyNewsBannerStyle.broadcastGradient => 'Broadcast Gradient',

        NgmyNewsBannerStyle.ngmyPrime => 'NGMY Prime',

        NgmyNewsBannerStyle.sunsetPulse => 'Sunset Pulse',

        NgmyNewsBannerStyle.cyberNeon => 'Cyber Neon',

        NgmyNewsBannerStyle.royalBlue => 'Royal Blue',

        NgmyNewsBannerStyle.fireAlert => 'Fire Alert',

        NgmyNewsBannerStyle.emeraldWave => 'Emerald Wave',

        NgmyNewsBannerStyle.purpleHype => 'Purple Hype',

        NgmyNewsBannerStyle.midnightGold => 'Midnight Gold',

        NgmyNewsBannerStyle.tropicalVibe => 'Tropical Vibe',

        NgmyNewsBannerStyle.sportDynamic => 'Sport Dynamic',

        NgmyNewsBannerStyle.podcastPro => 'Podcast Pro',

        NgmyNewsBannerStyle.newsFlash => 'News Flash',

        NgmyNewsBannerStyle.cleanMinimal => 'Clean Minimal',

        NgmyNewsBannerStyle.luxuryDark => 'Luxury Dark',

      };

}



class _BannerLayout {

  _BannerLayout(Size size, double scale) {

    final vertical = size.height > size.width * 1.05;

    final sc = scale.clamp(0.55, 1.6);

    final norm = vertical ? 0.62 : 1.0;



    if (vertical) {

      marginH = size.width * 0.082;

      marginTop = size.height * 0.056;

      marginBottom = size.height * 0.050;

      bannerH = size.height * 0.072 * sc * norm;

      footerH = size.height * 0.034 * sc * norm;

      brandW = size.width * 0.26;

      brandH = size.height * 0.054 * sc;

      gap = size.height * 0.014;

    } else {

      marginH = size.width * 0.032;

      marginTop = size.height * 0.038;

      marginBottom = size.height * 0.028;

      bannerH = size.height * 0.155 * sc;

      footerH = size.height * 0.048 * sc;

      brandW = size.width * 0.18;

      brandH = size.height * 0.11 * sc;

      gap = size.height * 0.01;

    }

    this.size = size;

    this.sc = sc;

  }



  late final Size size;

  late final double marginH;

  late final double marginTop;

  late final double marginBottom;

  late final double bannerH;

  late final double footerH;

  late final double brandW;

  late final double brandH;

  late final double gap;

  late final double sc;



  double get footerTop => size.height - marginBottom - footerH;

  double get bannerTop => footerTop - gap - bannerH;



  Rect get bannerRect => Rect.fromLTWH(marginH, bannerTop, size.width - marginH * 2, bannerH);

  Rect get footerRect => Rect.fromLTWH(marginH, footerTop, size.width - marginH * 2, footerH);

  Rect get brandRect => Rect.fromLTWH(size.width - marginH - brandW, marginTop, brandW, brandH);

}



class NgmyNewsBannerPainter extends CustomPainter {

  final NgmyNewsBannerStyle style;

  final String headline;

  final String title;

  final String subtitle;

  final String liveLabel;

  final bool topAccent;

  final double scale;



  NgmyNewsBannerPainter({

    required this.style,

    required this.headline,

    required this.title,

    required this.subtitle,

    required this.liveLabel,

    this.topAccent = false,

    this.scale = 1.0,

  });



  _BannerLayout _l(Size size) => _BannerLayout(size, scale);



  @override

  void paint(Canvas canvas, Size size) {

    if (topAccent) _topLiveStrip(canvas, size);

    switch (style) {

      case NgmyNewsBannerStyle.broadcastGradient:

        _broadcastGradient(canvas, size);

      case NgmyNewsBannerStyle.ngmyPrime:

        _ngmyPrime(canvas, size);

      case NgmyNewsBannerStyle.sunsetPulse:

        _sunsetPulse(canvas, size);

      case NgmyNewsBannerStyle.cyberNeon:

        _cyberNeon(canvas, size);

      case NgmyNewsBannerStyle.royalBlue:

        _royalBlue(canvas, size);

      case NgmyNewsBannerStyle.fireAlert:

        _fireAlert(canvas, size);

      case NgmyNewsBannerStyle.emeraldWave:

        _emeraldWave(canvas, size);

      case NgmyNewsBannerStyle.purpleHype:

        _purpleHype(canvas, size);

      case NgmyNewsBannerStyle.midnightGold:

        _midnightGold(canvas, size);

      case NgmyNewsBannerStyle.tropicalVibe:

        _tropicalVibe(canvas, size);

      case NgmyNewsBannerStyle.sportDynamic:

        _sportDynamic(canvas, size);

      case NgmyNewsBannerStyle.podcastPro:

        _podcastPro(canvas, size);

      case NgmyNewsBannerStyle.newsFlash:

        _newsFlash(canvas, size);

      case NgmyNewsBannerStyle.cleanMinimal:

        _cleanMinimal(canvas, size);

      case NgmyNewsBannerStyle.luxuryDark:

        _luxuryDark(canvas, size);

    }

  }



  void _topLiveStrip(Canvas canvas, Size size) {

    final l = _l(size);

    final h = size.height * (size.height > size.width ? 0.032 : 0.038) * l.sc;

    final r = RRect.fromRectAndRadius(

      Rect.fromLTWH(l.marginH, l.marginTop * 0.35, size.width - l.marginH * 2, h),

      const Radius.circular(8),

    );

    canvas.drawRRect(r, Paint()..color = const Color(0xFFDC2626).withValues(alpha: 0.92));

    _txt(canvas, liveLabel.toUpperCase(), l.marginH + 10, l.marginTop * 0.35 + h * 0.22, h * 0.48, Colors.white, FontWeight.w900);

  }



  void _brandCorner(Canvas canvas, Size size, {required Color bg, required Color fg, bool glass = true}) {

    final l = _l(size);

    final r = l.brandRect;

    final paint = Paint()

      ..color = (glass ? bg.withValues(alpha: 0.78) : bg.withValues(alpha: 0.92));

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(10)), paint);

    canvas.drawRRect(

      RRect.fromRectAndRadius(r, const Radius.circular(10)),

      Paint()

        ..color = Colors.white.withValues(alpha: 0.28)

        ..style = PaintingStyle.stroke

        ..strokeWidth = 1.2,

    );

    _txt(canvas, title.toUpperCase(), r.left + 10, r.top + r.height * 0.22, r.height * 0.34, fg, FontWeight.w900, maxW: r.width - 16);

    if (subtitle.trim().isNotEmpty) {

      _txt(canvas, subtitle, r.left + 10, r.top + r.height * 0.58, r.height * 0.24, fg.withValues(alpha: 0.88), FontWeight.w600, maxW: r.width - 16);

    }

  }



  void _triangleAccents(Canvas canvas, Size size, Color color, {int count = 3}) {

    final l = _l(size);

    final baseY = l.bannerTop + l.bannerH * 0.15;

    for (var i = 0; i < count; i++) {

      final cx = l.bannerRect.left + l.bannerRect.width * (0.45 + i * 0.14);

      final h = l.bannerH * (0.55 + i * 0.12);

      final path = Path()

        ..moveTo(cx, baseY)

        ..lineTo(cx - h * 0.32, baseY + h)

        ..lineTo(cx + h * 0.32, baseY + h)

        ..close();

      canvas.drawPath(

        path,

        Paint()

          ..color = color.withValues(alpha: 0.5)

          ..style = PaintingStyle.stroke

          ..strokeWidth = 2,

      );

    }

  }



  void _socialFooter(Canvas canvas, Size size, {required Color bg, required Color accent, required Color text}) {

    final l = _l(size);

    final r = l.footerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = bg.withValues(alpha: 0.88));

    canvas.drawRRect(

      RRect.fromRectAndRadius(r, const Radius.circular(12)),

      Paint()

        ..color = accent.withValues(alpha: 0.45)

        ..style = PaintingStyle.stroke

        ..strokeWidth = 1,

    );

    final left = subtitle.trim().isNotEmpty ? subtitle : '@NGMY';

    final right = liveLabel.trim().isNotEmpty ? liveLabel : '@NGMYOfficial';

    final fs = r.height * 0.38;

    _txt(canvas, left, r.left + 12, r.top + r.height * 0.28, fs, text, FontWeight.w700);

    _socialIcons(canvas, Offset(r.left + r.width * 0.36, r.top + r.height * 0.18), r.height * 0.52, accent);

    _txt(canvas, right, r.right - 12, r.top + r.height * 0.28, fs, text, FontWeight.w700, align: TextAlign.right, maxW: r.width * 0.28);

  }



  void _socialIcons(Canvas canvas, Offset at, double h, Color color) {

    final icons = [Icons.facebook, Icons.camera_alt_outlined, Icons.alternate_email, Icons.play_circle_outline, Icons.music_note];

    for (var i = 0; i < icons.length; i++) {

      _icon(canvas, icons[i], Offset(at.dx + i * (h * 1.1), at.dy), h * 0.65, color);

    }

  }



  void _icon(Canvas canvas, IconData icon, Offset at, double iconSize, Color color) {

    final tp = TextPainter(

      text: TextSpan(text: String.fromCharCode(icon.codePoint), style: TextStyle(fontSize: iconSize, fontFamily: icon.fontFamily, color: color)),

      textDirection: TextDirection.ltr,

    )..layout();

    tp.paint(canvas, at);

  }



  void _drawInsetBanner(Canvas canvas, Size size, List<Color> colors, {bool angledTop = false, bool triangles = false}) {

    final l = _l(size);

    final r = l.bannerRect;

    final path = Path();

    if (angledTop) {

      path

        ..moveTo(r.left, r.bottom)

        ..lineTo(r.left, r.top + r.height * 0.22)

        ..lineTo(r.right - r.width * 0.08, r.top)

        ..lineTo(r.right, r.top + r.height * 0.12)

        ..lineTo(r.right, r.bottom)

        ..close();

    } else {

      path.addRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)));

    }

    canvas.drawPath(

      path,

      Paint()

        ..shader = ui.Gradient.linear(Offset(r.left, r.top), Offset(r.right, r.top), colors)

        ..blendMode = BlendMode.srcOver,

    );

    canvas.drawPath(

      path,

      Paint()

        ..color = Colors.white.withValues(alpha: 0.22)

        ..style = PaintingStyle.stroke

        ..strokeWidth = 1.2,

    );

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.28, r.height * 0.36, Colors.white, FontWeight.w900, maxW: r.width - 24);

    if (triangles) _triangleAccents(canvas, size, colors.last);

    _socialFooter(canvas, size, bg: const Color(0xFF0A0A0A), accent: colors.last, text: Colors.white70);

  }



  void _broadcastGradient(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF0F172A), fg: Colors.white);

    _drawInsetBanner(canvas, size, const [Color(0xFFF97316), Color(0xFF14B8A6), Color(0xFF0EA5E9)], triangles: true);

  }



  void _ngmyPrime(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF065F46), fg: Colors.white);

    _drawInsetBanner(canvas, size, const [Color(0xFF047857), Color(0xFF00B25A), Color(0xFF6EE7B7)]);

  }



  void _sunsetPulse(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF7C2D12), fg: const Color(0xFFFDE68A));

    _drawInsetBanner(canvas, size, const [Color(0xFFDC2626), Color(0xFFF97316), Color(0xFFFBBF24)], angledTop: true, triangles: true);

  }



  void _cyberNeon(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: Colors.black, fg: const Color(0xFF22D3EE));

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = const Color(0xFF0F172A).withValues(alpha: 0.85));

    canvas.drawLine(Offset(r.left, r.top), Offset(r.right, r.top), Paint()..color = const Color(0xFF22D3EE)..strokeWidth = 2.5);

    canvas.drawLine(Offset(r.left, r.bottom), Offset(r.right, r.bottom), Paint()..color = const Color(0xFFA855F7)..strokeWidth = 2.5);

    _txt(canvas, headline.toUpperCase(), r.left + 12, r.top + r.height * 0.30, r.height * 0.34, const Color(0xFF67E8F9), FontWeight.w900, maxW: r.width - 20);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFA855F7), text: const Color(0xFF67E8F9));

  }



  void _royalBlue(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF1E3A8A), fg: Colors.white);

    final r = l.bannerRect;

    final liveW = r.width * 0.22;

    canvas.drawRRect(
      RRect.fromRectAndCorners(
        Rect.fromLTWH(r.left, r.top, liveW, r.height),
        topLeft: const Radius.circular(12),
        bottomLeft: const Radius.circular(12),
      ),
      Paint()..color = const Color(0xFFDC2626),
    );

    _txt(canvas, 'LIVE', r.left + 10, r.top + r.height * 0.32, r.height * 0.30, Colors.white, FontWeight.w900);

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(r.left + liveW - 6, r.top, r.width - liveW + 6, r.height), const Radius.circular(12)),

      Paint()..color = const Color(0xFF1D4ED8).withValues(alpha: 0.92),

    );

    _txt(canvas, headline.toUpperCase(), r.left + liveW + 8, r.top + r.height * 0.28, r.height * 0.34, Colors.white, FontWeight.w900, maxW: r.width - liveW - 16);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFF3B82F6), text: Colors.white70);

  }



  void _fireAlert(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFFDC2626), fg: Colors.white);

    final r = l.bannerRect;

    final path = Path()

      ..moveTo(r.left, r.bottom)

      ..lineTo(r.left + r.width * 0.12, r.top)

      ..lineTo(r.right, r.top + r.height * 0.08)

      ..lineTo(r.right - r.width * 0.06, r.bottom)

      ..close();

    canvas.drawPath(path, Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.92));

    _txt(canvas, 'BREAKING', r.left + 12, r.top + r.height * 0.12, r.height * 0.26, Colors.white, FontWeight.w900);

    _txt(canvas, headline.toUpperCase(), r.left + 12, r.top + r.height * 0.44, r.height * 0.32, Colors.white, FontWeight.w900, maxW: r.width - 20);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFEF4444), text: Colors.white70);

  }



  void _emeraldWave(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF064E3B), fg: const Color(0xFF6EE7B7));

    _drawInsetBanner(canvas, size, const [Color(0xFF047857), Color(0xFF10B981), Color(0xFF6EE7B7)], angledTop: true);

  }



  void _purpleHype(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF4C1D95), fg: const Color(0xFFE9D5FF));

    _drawInsetBanner(canvas, size, const [Color(0xFF6D28D9), Color(0xFFA855F7), Color(0xFFF472B6)], triangles: true);

  }



  void _midnightGold(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF1C1917), fg: const Color(0xFFFBBF24));

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)), Paint()..color = const Color(0xFF1C1917).withValues(alpha: 0.9));

    canvas.drawRRect(

      RRect.fromRectAndRadius(r.deflate(1), const Radius.circular(13)),

      Paint()

        ..color = const Color(0xFFFBBF24)

        ..style = PaintingStyle.stroke

        ..strokeWidth = 2,

    );

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.28, r.height * 0.34, const Color(0xFFFBBF24), FontWeight.w900, maxW: r.width - 24);

    _socialFooter(canvas, size, bg: const Color(0xFF0C0A09), accent: const Color(0xFFFBBF24), text: const Color(0xFFFDE68A));

  }



  void _tropicalVibe(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF0E7490), fg: Colors.white);

    _drawInsetBanner(canvas, size, const [Color(0xFF06B6D4), Color(0xFF2DD4BF), Color(0xFF34D399)], triangles: true);

  }



  void _sportDynamic(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF1E40AF), fg: Colors.white);

    final r = l.bannerRect;

    canvas.save();

    canvas.translate(r.center.dx, r.center.dy);

    canvas.rotate(-0.035);

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: r.width, height: r.height), const Radius.circular(10)),

      Paint()..color = const Color(0xFF2563EB).withValues(alpha: 0.9),

    );

    canvas.restore();

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(r.left, r.top + r.height * 0.55, r.width * 0.38, r.height * 0.42), const Radius.circular(6)),

      Paint()..color = const Color(0xFFDC2626),

    );

    _txt(canvas, headline.toUpperCase(), r.left + 12, r.top + r.height * 0.22, r.height * 0.34, Colors.white, FontWeight.w900, maxW: r.width - 16);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFF38BDF8), text: Colors.white70);

  }



  void _podcastPro(Canvas canvas, Size size) {

    final l = _l(size);

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(18)), Paint()..color = const Color(0xFF18181B).withValues(alpha: 0.82));

    canvas.drawCircle(Offset(r.left + r.height * 0.42, r.center.dy), r.height * 0.28, Paint()..color = const Color(0xFF7C3AED));

    _txt(canvas, title.toUpperCase(), r.left + r.height * 0.78, r.top + r.height * 0.22, r.height * 0.22, const Color(0xFFA78BFA), FontWeight.w800);

    _txt(canvas, headline, r.left + r.height * 0.78, r.top + r.height * 0.50, r.height * 0.28, Colors.white, FontWeight.w700, maxW: r.width - r.height * 0.9);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFF7C3AED), text: Colors.white60);

  }



  void _newsFlash(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: Colors.white, fg: const Color(0xFFDC2626));

    final r = l.bannerRect;

    final badgeW = r.width * 0.24;

    canvas.drawRRect(
      RRect.fromRectAndCorners(
        Rect.fromLTWH(r.left, r.top, badgeW, r.height),
        topLeft: const Radius.circular(12),
        bottomLeft: const Radius.circular(12),
      ),
      Paint()..color = const Color(0xFFDC2626),
    );

    _txt(canvas, 'NEWS', r.left + 8, r.top + r.height * 0.30, r.height * 0.34, Colors.white, FontWeight.w900);

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(r.left + badgeW - 4, r.top, r.width - badgeW + 4, r.height), const Radius.circular(12)),

      Paint()..color = const Color(0xFF1E3A8A).withValues(alpha: 0.92),

    );

    _txt(canvas, headline.toUpperCase(), r.left + badgeW + 8, r.top + r.height * 0.28, r.height * 0.34, Colors.white, FontWeight.w900, maxW: r.width - badgeW - 14);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFFDC2626), text: Colors.white70);

  }



  void _cleanMinimal(Canvas canvas, Size size) {

    final l = _l(size);

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(16)), Paint()..color = Colors.white.withValues(alpha: 0.9));

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.28, r.height * 0.40, Colors.black87, FontWeight.w800, maxW: r.width - 24);

    if (title.trim().isNotEmpty) {

      _txt(canvas, title, l.brandRect.left, l.brandRect.top + l.brandRect.height * 0.28, l.brandRect.height * 0.36, Colors.white, FontWeight.w700);

    }

    _socialFooter(canvas, size, bg: const Color(0xFF111827), accent: Colors.white54, text: Colors.white60);

  }



  void _luxuryDark(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF27272A), fg: const Color(0xFFD4D4D8));

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)), Paint()..color = const Color(0xFF09090B).withValues(alpha: 0.82));

    for (var i = 0; i < 4; i++) {

      final x0 = r.left + r.width * i / 4;

      final x1 = r.left + r.width * (i + 1) / 4 - 6;

      canvas.drawLine(Offset(x0, r.top), Offset(x1, r.bottom), Paint()..color = const Color(0xFF52525B).withValues(alpha: 0.3)..strokeWidth = 1);

    }

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.30, r.height * 0.32, const Color(0xFFFAFAFA), FontWeight.w800, maxW: r.width - 24);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFA1A1AA), text: const Color(0xFFD4D4D8));

  }



  void _txt(

    Canvas c,

    String t,

    double x,

    double y,

    double fs,

    Color col,

    FontWeight w, {

    double maxW = double.infinity,

    TextAlign align = TextAlign.left,

  }) {

    if (t.trim().isEmpty) return;

    final tp = TextPainter(

      text: TextSpan(text: t, style: TextStyle(color: col, fontSize: fs, fontWeight: w, letterSpacing: 0.4)),

      textDirection: TextDirection.ltr,

      textAlign: align,

      maxLines: 3,

      ellipsis: '…',

    )..layout(maxWidth: maxW);

    var dx = x;

    if (align == TextAlign.right) dx = x - tp.width;

    if (align == TextAlign.center) dx = x - tp.width / 2;

    tp.paint(c, Offset(dx, y));

  }



  @override

  bool shouldRepaint(covariant NgmyNewsBannerPainter old) => true;

}


