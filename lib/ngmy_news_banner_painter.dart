import 'dart:ui' as ui;



import 'package:flutter/material.dart';



/// Professional broadcast overlay styles — full-screen video + editable graphics.

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



  @override

  void paint(Canvas canvas, Size size) {

    if (topAccent) _topLiveStrip(canvas, size);

    switch (style) {

      case NgmyNewsBannerStyle.broadcastGradient:

        _broadcastGradient(canvas, size);

        break;

      case NgmyNewsBannerStyle.ngmyPrime:

        _ngmyPrime(canvas, size);

        break;

      case NgmyNewsBannerStyle.sunsetPulse:

        _sunsetPulse(canvas, size);

        break;

      case NgmyNewsBannerStyle.cyberNeon:

        _cyberNeon(canvas, size);

        break;

      case NgmyNewsBannerStyle.royalBlue:

        _royalBlue(canvas, size);

        break;

      case NgmyNewsBannerStyle.fireAlert:

        _fireAlert(canvas, size);

        break;

      case NgmyNewsBannerStyle.emeraldWave:

        _emeraldWave(canvas, size);

        break;

      case NgmyNewsBannerStyle.purpleHype:

        _purpleHype(canvas, size);

        break;

      case NgmyNewsBannerStyle.midnightGold:

        _midnightGold(canvas, size);

        break;

      case NgmyNewsBannerStyle.tropicalVibe:

        _tropicalVibe(canvas, size);

        break;

      case NgmyNewsBannerStyle.sportDynamic:

        _sportDynamic(canvas, size);

        break;

      case NgmyNewsBannerStyle.podcastPro:

        _podcastPro(canvas, size);

        break;

      case NgmyNewsBannerStyle.newsFlash:

        _newsFlash(canvas, size);

        break;

      case NgmyNewsBannerStyle.cleanMinimal:

        _cleanMinimal(canvas, size);

        break;

      case NgmyNewsBannerStyle.luxuryDark:

        _luxuryDark(canvas, size);

        break;

    }

  }



  double _s(double v, Size size) => v * scale * (size.height / 1080).clamp(0.55, 1.35);



  void _topLiveStrip(Canvas canvas, Size size) {

    final h = size.height * 0.045 * scale;

    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, h), Paint()..color = const Color(0xFFDC2626));

    _txt(canvas, liveLabel.toUpperCase(), size.width * 0.04, h * 0.18, h * 0.55, Colors.white, FontWeight.w900);

  }



  void _brandCorner(Canvas canvas, Size size, {required Color bg, required Color fg, bool showTriangles = false}) {

    final w = size.width;

    final boxW = w * 0.20;

    final boxH = size.height * 0.13 * scale;

    final left = w - boxW - w * 0.03;

    final top = size.height * 0.04;

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(left, top, boxW, boxH), const Radius.circular(6)),

      Paint()..color = bg.withValues(alpha: 0.92),

    );

    _txt(canvas, title.toUpperCase(), left + boxW * 0.08, top + boxH * 0.28, boxH * 0.32, fg, FontWeight.w900, maxW: boxW * 0.84);

    if (subtitle.trim().isNotEmpty) {

      _txt(canvas, subtitle, left + boxW * 0.08, top + boxH * 0.62, boxH * 0.22, fg.withValues(alpha: 0.85), FontWeight.w600, maxW: boxW * 0.84);

    }

    if (showTriangles) _triangleAccents(canvas, size, const Color(0xFF14B8A6), count: 3);

  }



  void _triangleAccents(Canvas canvas, Size size, Color color, {int count = 3}) {

    final w = size.width;

    final baseY = size.height * 0.78;

    for (var i = 0; i < count; i++) {

      final cx = w * (0.55 + i * 0.12);

      final h = size.height * (0.22 + i * 0.04) * scale;

      final path = Path()

        ..moveTo(cx, baseY)

        ..lineTo(cx - h * 0.35, baseY + h)

        ..lineTo(cx + h * 0.35, baseY + h)

        ..close();

      canvas.drawPath(path, Paint()..color = color.withValues(alpha: 0.55)..style = PaintingStyle.stroke..strokeWidth = 2.5);

    }

  }



  void _socialFooter(Canvas canvas, Size size, {required Color bg, required Color accent, required Color text}) {

    final w = size.width;

    final fh = size.height * 0.055 * scale;

    final top = size.height - fh;

    canvas.drawRect(Rect.fromLTWH(0, top, w, fh), Paint()..color = bg);

    final left = subtitle.trim().isNotEmpty ? subtitle : '@NGMY';

    final right = liveLabel.trim().isNotEmpty ? liveLabel : '@NGMYOfficial';

    _txt(canvas, left, w * 0.04, top + fh * 0.28, fh * 0.42, text, FontWeight.w700);

    _socialIcons(canvas, Offset(w * 0.38, top + fh * 0.22), fh * 0.55, accent);

    _txt(canvas, right, w * 0.72, top + fh * 0.28, fh * 0.42, text, FontWeight.w700, align: TextAlign.right, maxW: w * 0.24);

  }



  void _socialIcons(Canvas canvas, Offset at, double h, Color color) {

    final icons = [Icons.facebook, Icons.camera_alt_outlined, Icons.alternate_email, Icons.play_circle_outline, Icons.music_note];

    for (var i = 0; i < icons.length; i++) {

      _icon(canvas, icons[i], Offset(at.dx + i * (h * 1.15), at.dy), h * 0.7, color);

      if (i < icons.length - 1) {

        canvas.drawLine(

          Offset(at.dx + (i + 1) * (h * 1.15) - h * 0.2, at.dy + h * 0.1),

          Offset(at.dx + (i + 1) * (h * 1.15) - h * 0.05, at.dy + h * 0.85),

          Paint()..color = color.withValues(alpha: 0.5)..strokeWidth = 1.2,

        );

      }

    }

  }



  void _icon(Canvas canvas, IconData icon, Offset at, double size, Color color) {

    final tp = TextPainter(

      text: TextSpan(text: String.fromCharCode(icon.codePoint), style: TextStyle(fontSize: size, fontFamily: icon.fontFamily, color: color)),

      textDirection: TextDirection.ltr,

    )..layout();

    tp.paint(canvas, at);

  }



  void _gradientBanner(Canvas canvas, Size size, List<Color> colors, {bool triangles = false}) {

    final w = size.width;

    final h = size.height;

    final bh = h * 0.22 * scale;

    final top = h - bh - h * 0.055 * scale;

    final rect = Rect.fromLTWH(0, top, w, bh);

    canvas.drawRect(

      rect,

      Paint()

        ..shader = ui.Gradient.linear(Offset.zero, Offset(w, 0), colors)

        ..blendMode = BlendMode.srcOver,

    );

    _txt(canvas, headline.toUpperCase(), w * 0.04, top + bh * 0.22, bh * 0.38, Colors.white, FontWeight.w900, maxW: w * 0.92);

    if (triangles) _triangleAccents(canvas, size, colors.last);

    _socialFooter(canvas, size, bg: const Color(0xFF0A0A0A), accent: colors.last, text: Colors.white70);

  }



  void _broadcastGradient(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF0F172A), fg: Colors.white, showTriangles: false);

    _gradientBanner(canvas, size, const [Color(0xFFF97316), Color(0xFF14B8A6), Color(0xFF0EA5E9)], triangles: true);

  }



  void _ngmyPrime(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF00B25A), fg: Colors.white);

    _gradientBanner(canvas, size, const [Color(0xFF065F46), Color(0xFF00B25A), Color(0xFF34D399)]);

  }



  void _sunsetPulse(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF7C2D12), fg: const Color(0xFFFDE68A));

    _gradientBanner(canvas, size, const [Color(0xFFDC2626), Color(0xFFF97316), Color(0xFFFBBF24)], triangles: true);

  }



  void _cyberNeon(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    _brandCorner(canvas, size, bg: Colors.black, fg: const Color(0xFF22D3EE));

    final bh = h * 0.20 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.drawRect(Rect.fromLTWH(0, top, w, bh), Paint()..color = const Color(0xFF0F172A).withValues(alpha: 0.92));

    canvas.drawRect(Rect.fromLTWH(0, top, w, 3), Paint()..color = const Color(0xFF22D3EE));

    canvas.drawRect(Rect.fromLTWH(0, top + bh - 3, w, 3), Paint()..color = const Color(0xFFA855F7));

    _txt(canvas, headline.toUpperCase(), w * 0.04, top + bh * 0.28, bh * 0.36, const Color(0xFF22D3EE), FontWeight.w900, maxW: w * 0.9);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFA855F7), text: const Color(0xFF67E8F9));

  }



  void _royalBlue(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    _brandCorner(canvas, size, bg: const Color(0xFF1E3A8A), fg: Colors.white);

    final bh = h * 0.24 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.28, bh * 0.35), Paint()..color = const Color(0xFFDC2626));

    _txt(canvas, 'LIVE', w * 0.04, top + bh * 0.06, bh * 0.22, Colors.white, FontWeight.w900);

    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.32, w, bh * 0.68), Paint()..color = const Color(0xFF1D4ED8));

    _txt(canvas, headline.toUpperCase(), w * 0.04, top + bh * 0.48, bh * 0.34, Colors.white, FontWeight.w900, maxW: w * 0.92);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFF3B82F6), text: Colors.white70);

  }



  void _fireAlert(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    _brandCorner(canvas, size, bg: const Color(0xFFDC2626), fg: Colors.white);

    final bh = h * 0.21 * scale;

    final top = h - bh - h * 0.055 * scale;

    final path = Path()

      ..moveTo(0, top + bh)

      ..lineTo(w * 0.15, top)

      ..lineTo(w, top)

      ..lineTo(w, top + bh)

      ..close();

    canvas.drawPath(path, Paint()..color = const Color(0xFFEF4444));

    _txt(canvas, 'BREAKING', w * 0.04, top + bh * 0.08, bh * 0.28, Colors.white, FontWeight.w900);

    _txt(canvas, headline.toUpperCase(), w * 0.04, top + bh * 0.42, bh * 0.36, Colors.white, FontWeight.w900, maxW: w * 0.9);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFEF4444), text: Colors.white70);

  }



  void _emeraldWave(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF064E3B), fg: const Color(0xFF6EE7B7));

    _gradientBanner(canvas, size, const [Color(0xFF047857), Color(0xFF10B981), Color(0xFF6EE7B7)]);

  }



  void _purpleHype(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF4C1D95), fg: const Color(0xFFE9D5FF));

    _gradientBanner(canvas, size, const [Color(0xFF6D28D9), Color(0xFFA855F7), Color(0xFFF472B6)], triangles: true);

  }



  void _midnightGold(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    _brandCorner(canvas, size, bg: const Color(0xFF1C1917), fg: const Color(0xFFFBBF24));

    final bh = h * 0.22 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.drawRect(Rect.fromLTWH(0, top, w, bh), Paint()..color = const Color(0xFF1C1917).withValues(alpha: 0.94));

    canvas.drawRect(Rect.fromLTWH(0, top, w, 4), Paint()..color = const Color(0xFFFBBF24));

    _txt(canvas, headline.toUpperCase(), w * 0.04, top + bh * 0.28, bh * 0.36, const Color(0xFFFBBF24), FontWeight.w900, maxW: w * 0.9);

    _socialFooter(canvas, size, bg: const Color(0xFF0C0A09), accent: const Color(0xFFFBBF24), text: const Color(0xFFFDE68A));

  }



  void _tropicalVibe(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF0E7490), fg: Colors.white);

    _gradientBanner(canvas, size, const [Color(0xFF06B6D4), Color(0xFF2DD4BF), Color(0xFF34D399)], triangles: true);

  }



  void _sportDynamic(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    _brandCorner(canvas, size, bg: const Color(0xFF1E40AF), fg: Colors.white);

    final bh = h * 0.23 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.save();

    canvas.translate(w * 0.5, top + bh * 0.5);

    canvas.rotate(-0.04);

    canvas.drawRect(Rect.fromCenter(center: Offset.zero, width: w * 1.1, height: bh), Paint()..color = const Color(0xFF2563EB));

    canvas.restore();

    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.55, w * 0.35, bh * 0.45), Paint()..color = const Color(0xFFDC2626));

    _txt(canvas, headline.toUpperCase(), w * 0.04, top + bh * 0.18, bh * 0.34, Colors.white, FontWeight.w900, maxW: w * 0.92);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFF38BDF8), text: Colors.white70);

  }



  void _podcastPro(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    final bh = h * 0.26 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.04, top, w * 0.92, bh), const Radius.circular(18)),

      Paint()..color = const Color(0xFF18181B).withValues(alpha: 0.92),

    );

    canvas.drawCircle(Offset(w * 0.1, top + bh * 0.5), bh * 0.22, Paint()..color = const Color(0xFF7C3AED));

    _txt(canvas, title.toUpperCase(), w * 0.18, top + bh * 0.22, bh * 0.22, const Color(0xFFA78BFA), FontWeight.w800);

    _txt(canvas, headline, w * 0.18, top + bh * 0.52, bh * 0.30, Colors.white, FontWeight.w700, maxW: w * 0.76);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFF7C3AED), text: Colors.white60);

  }



  void _newsFlash(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    _brandCorner(canvas, size, bg: Colors.white, fg: const Color(0xFFDC2626));

    final bh = h * 0.20 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.22, bh), Paint()..color = const Color(0xFFDC2626));

    _txt(canvas, 'NEWS', w * 0.03, top + bh * 0.32, bh * 0.38, Colors.white, FontWeight.w900);

    canvas.drawRect(Rect.fromLTWH(w * 0.22, top, w * 0.78, bh), Paint()..color = const Color(0xFF1E3A8A));

    _txt(canvas, headline.toUpperCase(), w * 0.26, top + bh * 0.28, bh * 0.36, Colors.white, FontWeight.w900, maxW: w * 0.7);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFFDC2626), text: Colors.white70);

  }



  void _cleanMinimal(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    final bh = h * 0.14 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.drawRect(Rect.fromLTWH(w * 0.04, top, w * 0.92, bh), Paint()..color = Colors.white.withValues(alpha: 0.94));

    _txt(canvas, headline.toUpperCase(), w * 0.07, top + bh * 0.28, bh * 0.42, Colors.black87, FontWeight.w800, maxW: w * 0.86);

    if (title.trim().isNotEmpty) {

      _txt(canvas, title, w * 0.07, top - bh * 0.55, bh * 0.38, Colors.white, FontWeight.w700);

    }

    _socialFooter(canvas, size, bg: const Color(0xFF111827), accent: Colors.white54, text: Colors.white60);

  }



  void _luxuryDark(Canvas canvas, Size size) {

    final w = size.width;

    final h = size.height;

    _brandCorner(canvas, size, bg: const Color(0xFF27272A), fg: const Color(0xFFD4D4D8));

    final bh = h * 0.24 * scale;

    final top = h - bh - h * 0.055 * scale;

    canvas.drawRect(Rect.fromLTWH(0, top, w, bh), Paint()..color = const Color(0xFF09090B).withValues(alpha: 0.88));

    for (var i = 0; i < 5; i++) {

      canvas.drawLine(Offset(w * i / 4, top), Offset(w * (i + 1) / 4 - w * 0.02, top + bh), Paint()..color = const Color(0xFF52525B).withValues(alpha: 0.35)..strokeWidth = 1);

    }

    _txt(canvas, headline.toUpperCase(), w * 0.04, top + bh * 0.30, bh * 0.34, const Color(0xFFFAFAFA), FontWeight.w800, maxW: w * 0.9);

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

      text: TextSpan(text: t, style: TextStyle(color: col, fontSize: fs, fontWeight: w, letterSpacing: 0.5)),

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


