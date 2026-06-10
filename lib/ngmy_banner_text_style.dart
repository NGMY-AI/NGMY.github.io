import 'package:flutter/material.dart';

/// How brand name + social handles are framed on broadcast overlays.
enum NgmyBannerTextStyle {
  broadcastClassic,
  neonHandles,
  goldCrest,
  pillSocial,
  minimalCaps,
  splitBar,
  glassBrand,
  boldRibbon,
}

extension NgmyBannerTextStyleExt on NgmyBannerTextStyle {
  String get label => switch (this) {
        NgmyBannerTextStyle.broadcastClassic => 'Classic broadcast',
        NgmyBannerTextStyle.neonHandles => 'Neon handles',
        NgmyBannerTextStyle.goldCrest => 'Gold crest',
        NgmyBannerTextStyle.pillSocial => 'Pill social',
        NgmyBannerTextStyle.minimalCaps => 'Minimal caps',
        NgmyBannerTextStyle.splitBar => 'Split bar',
        NgmyBannerTextStyle.glassBrand => 'Glass brand',
        NgmyBannerTextStyle.boldRibbon => 'Bold ribbon',
      };
}

class NgmyBannerTextRenderer {
  static void drawBrand(
    Canvas canvas,
    Rect r, {
    required NgmyBannerTextStyle style,
    required String title,
    required String subtitle,
    required Color bg,
    required Color fg,
  }) {
    if (title.trim().isEmpty && subtitle.trim().isEmpty) return;
    switch (style) {
      case NgmyBannerTextStyle.broadcastClassic:
        _classicBrand(canvas, r, title, subtitle, bg, fg);
      case NgmyBannerTextStyle.neonHandles:
        _neonBrand(canvas, r, title, subtitle);
      case NgmyBannerTextStyle.goldCrest:
        _goldBrand(canvas, r, title, subtitle);
      case NgmyBannerTextStyle.pillSocial:
        _pillBrand(canvas, r, title, subtitle, bg, fg);
      case NgmyBannerTextStyle.minimalCaps:
        _minimalBrand(canvas, r, title, subtitle, fg);
      case NgmyBannerTextStyle.splitBar:
        _splitBrand(canvas, r, title, subtitle, bg, fg);
      case NgmyBannerTextStyle.glassBrand:
        _glassBrand(canvas, r, title, subtitle, fg);
      case NgmyBannerTextStyle.boldRibbon:
        _ribbonBrand(canvas, r, title, subtitle, bg, fg);
    }
  }

  static void drawFooter(
    Canvas canvas,
    Rect r, {
    required NgmyBannerTextStyle style,
    required String left,
    required String right,
    required Color bg,
    required Color accent,
    required Color text,
  }) {
    switch (style) {
      case NgmyBannerTextStyle.broadcastClassic:
        _classicFooter(canvas, r, left, right, bg, accent, text);
      case NgmyBannerTextStyle.neonHandles:
        _neonFooter(canvas, r, left, right);
      case NgmyBannerTextStyle.goldCrest:
        _goldFooter(canvas, r, left, right);
      case NgmyBannerTextStyle.pillSocial:
        _pillFooter(canvas, r, left, right, accent, text);
      case NgmyBannerTextStyle.minimalCaps:
        _minimalFooter(canvas, r, left, right, text);
      case NgmyBannerTextStyle.splitBar:
        _splitFooter(canvas, r, left, right, bg, accent, text);
      case NgmyBannerTextStyle.glassBrand:
        _glassFooter(canvas, r, left, right, text);
      case NgmyBannerTextStyle.boldRibbon:
        _ribbonFooter(canvas, r, left, right, bg, accent, text);
    }
  }

  static void _txt(Canvas c, String t, double x, double y, double fs, Color col, FontWeight w, {double maxW = double.infinity, TextAlign align = TextAlign.left}) {
    if (t.trim().isEmpty) return;
    final tp = TextPainter(
      text: TextSpan(text: t, style: TextStyle(color: col, fontSize: fs, fontWeight: w, letterSpacing: 0.3)),
      textDirection: TextDirection.ltr,
      textAlign: align,
      maxLines: 2,
      ellipsis: '…',
    )..layout(maxWidth: maxW);
    var dx = x;
    if (align == TextAlign.center) dx = x - tp.width / 2;
    if (align == TextAlign.right) dx = x - tp.width;
    tp.paint(c, Offset(dx, y));
  }

  static void _luxuryCorners(Canvas c, Rect r, Color accent, {double inset = 6}) {
    final paint = Paint()
      ..color = accent.withValues(alpha: 0.85)
      ..strokeWidth = 1.6
      ..style = PaintingStyle.stroke;
    const len = 10.0;
    c.drawLine(Offset(r.left + inset, r.top + inset), Offset(r.left + inset + len, r.top + inset), paint);
    c.drawLine(Offset(r.left + inset, r.top + inset), Offset(r.left + inset, r.top + inset + len), paint);
    c.drawLine(Offset(r.right - inset, r.top + inset), Offset(r.right - inset - len, r.top + inset), paint);
    c.drawLine(Offset(r.right - inset, r.top + inset), Offset(r.right - inset, r.top + inset + len), paint);
    c.drawLine(Offset(r.left + inset, r.bottom - inset), Offset(r.left + inset + len, r.bottom - inset), paint);
    c.drawLine(Offset(r.left + inset, r.bottom - inset), Offset(r.left + inset, r.bottom - inset - len), paint);
    c.drawLine(Offset(r.right - inset, r.bottom - inset), Offset(r.right - inset - len, r.bottom - inset), paint);
    c.drawLine(Offset(r.right - inset, r.bottom - inset), Offset(r.right - inset, r.bottom - inset - len), paint);
  }

  static void _sheenLine(Canvas c, Rect r, {double yFrac = 0.18}) {
    c.drawLine(
      Offset(r.left + 8, r.top + r.height * yFrac),
      Offset(r.right - 8, r.top + r.height * yFrac),
      Paint()
        ..shader = LinearGradient(
          colors: [Colors.white.withValues(alpha: 0.0), Colors.white.withValues(alpha: 0.35), Colors.white.withValues(alpha: 0.0)],
        ).createShader(Rect.fromLTWH(r.left, r.top, r.width, 2)),
    );
  }

  static void _classicBrand(Canvas c, Rect r, String title, String subtitle, Color bg, Color fg) {
    final outer = RRect.fromRectAndRadius(r, const Radius.circular(12));
    c.drawRRect(
      outer,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [bg.withValues(alpha: 0.95), Color.lerp(bg, Colors.black, 0.35)!.withValues(alpha: 0.92)],
        ).createShader(r),
    );
    c.drawRRect(
      outer.deflate(1.2),
      Paint()
        ..color = const Color(0xFFFBBF24).withValues(alpha: 0.75)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.4,
    );
    _luxuryCorners(c, r.deflate(3), const Color(0xFFFDE68A));
    _sheenLine(c, r);
    _txt(c, title.toUpperCase(), r.left + 12, r.top + r.height * 0.20, r.height * 0.34, fg, FontWeight.w900, maxW: r.width - 20);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left + 12, r.top + r.height * 0.56, r.height * 0.22, fg.withValues(alpha: 0.88), FontWeight.w600, maxW: r.width - 20);
    }
  }

  static void _neonBrand(Canvas c, Rect r, String title, String subtitle) {
    final path = Path()..addRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)));
    c.drawPath(path, Paint()..color = const Color(0xFF020617).withValues(alpha: 0.92));
    for (var i = 3; i >= 1; i--) {
      c.drawPath(
        path,
        Paint()
          ..color = Color.lerp(const Color(0xFF22D3EE), const Color(0xFFA855F7), i / 3)!.withValues(alpha: 0.12 * i)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.0 + i,
      );
    }
    c.drawPath(
      path,
      Paint()
        ..color = const Color(0xFF67E8F9)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.8,
    );
    _txt(c, title.toUpperCase(), r.center.dx, r.top + r.height * 0.26, r.height * 0.36, const Color(0xFFECFEFF), FontWeight.w900, maxW: r.width - 14, align: TextAlign.center);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.center.dx, r.top + r.height * 0.60, r.height * 0.22, const Color(0xFFE879F9), FontWeight.w700, maxW: r.width - 14, align: TextAlign.center);
    }
  }

  static void _goldBrand(Canvas c, Rect r, String title, String subtitle) {
    final crest = RRect.fromRectAndRadius(r, const Radius.circular(11));
    c.drawRRect(
      crest,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [const Color(0xFF92400E), const Color(0xFFB45309), const Color(0xFF78350F)],
        ).createShader(r),
    );
    c.drawRRect(
      crest.deflate(2),
      Paint()
        ..shader = LinearGradient(colors: [const Color(0xFFFEF3C7), const Color(0xFFFBBF24), const Color(0xFFD97706)]).createShader(r.deflate(2))
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.2,
    );
    final crownY = r.top + r.height * 0.12;
    c.drawPath(
      Path()
        ..moveTo(r.center.dx - 8, crownY + 6)
        ..lineTo(r.center.dx - 4, crownY)
        ..lineTo(r.center.dx, crownY + 5)
        ..lineTo(r.center.dx + 4, crownY)
        ..lineTo(r.center.dx + 8, crownY + 6)
        ..close(),
      Paint()..color = const Color(0xFFFDE68A),
    );
    _txt(c, title.toUpperCase(), r.center.dx, r.top + r.height * 0.34, r.height * 0.32, const Color(0xFFFFFBEB), FontWeight.w900, maxW: r.width - 16, align: TextAlign.center);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.center.dx, r.top + r.height * 0.62, r.height * 0.20, const Color(0xFFFEF3C7), FontWeight.w600, maxW: r.width - 16, align: TextAlign.center);
    }
  }

  static void _pillBrand(Canvas c, Rect r, String title, String subtitle, Color bg, Color fg) {
    final rad = Radius.circular(r.height / 2);
    c.drawRRect(
      RRect.fromRectAndRadius(r, rad),
      Paint()
        ..shader = LinearGradient(
          colors: [Color.lerp(bg, Colors.white, 0.12)!.withValues(alpha: 0.94), bg.withValues(alpha: 0.88)],
        ).createShader(r),
    );
    c.drawRRect(
      RRect.fromRectAndRadius(r.deflate(1.5), rad),
      Paint()
        ..color = fg.withValues(alpha: 0.55)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.3,
    );
    c.drawCircle(Offset(r.left + r.height * 0.42, r.center.dy), r.height * 0.14, Paint()..color = fg.withValues(alpha: 0.85));
    _txt(c, title.toUpperCase(), r.center.dx + r.height * 0.04, r.top + r.height * 0.28, r.height * 0.34, fg, FontWeight.w900, maxW: r.width - r.height * 0.5, align: TextAlign.center);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.center.dx, r.top + r.height * 0.58, r.height * 0.22, fg.withValues(alpha: 0.82), FontWeight.w600, maxW: r.width - 24, align: TextAlign.center);
    }
  }

  static void _minimalBrand(Canvas c, Rect r, String title, String subtitle, Color fg) {
    final frame = RRect.fromRectAndRadius(r.deflate(2), const Radius.circular(8));
    c.drawRRect(
      frame,
      Paint()
        ..color = Colors.black.withValues(alpha: 0.22),
    );
    c.drawRRect(
      frame,
      Paint()
        ..color = const Color(0xFFFBBF24).withValues(alpha: 0.65)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.2,
    );
    c.drawLine(Offset(r.left + 10, r.bottom - 3), Offset(r.right - 10, r.bottom - 3), Paint()..color = fg.withValues(alpha: 0.45)..strokeWidth = 1);
    _txt(c, title.toUpperCase(), r.left + 10, r.top + r.height * 0.18, r.height * 0.36, fg, FontWeight.w800, maxW: r.width - 16);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left + 10, r.top + r.height * 0.56, r.height * 0.22, fg.withValues(alpha: 0.78), FontWeight.w500, maxW: r.width - 16);
    }
  }

  static void _splitBrand(Canvas c, Rect r, String title, String subtitle, Color bg, Color fg) {
    final angle = 0.08;
    c.save();
    c.translate(r.center.dx, r.center.dy);
    c.rotate(angle);
    c.translate(-r.center.dx, -r.center.dy);
    final leftW = r.width * 0.58;
    final leftRect = Rect.fromLTWH(r.left, r.top, leftW, r.height);
    final rightRect = Rect.fromLTWH(r.left + leftW - 10, r.top + 4, r.width - leftW + 6, r.height - 8);
    c.drawRRect(
      RRect.fromRectAndCorners(leftRect, topLeft: const Radius.circular(12), bottomLeft: const Radius.circular(12)),
      Paint()
        ..shader = LinearGradient(colors: [bg.withValues(alpha: 0.96), Color.lerp(bg, Colors.black, 0.25)!]).createShader(leftRect),
    );
    c.drawRRect(
      RRect.fromRectAndRadius(rightRect, const Radius.circular(10)),
      Paint()..color = fg.withValues(alpha: 0.14),
    );
    c.drawRRect(
      RRect.fromRectAndRadius(rightRect, const Radius.circular(10)),
      Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.55)..style = PaintingStyle.stroke..strokeWidth = 1.2,
    );
    _txt(c, title.toUpperCase(), leftRect.left + 10, leftRect.top + leftRect.height * 0.28, leftRect.height * 0.34, fg, FontWeight.w900, maxW: leftRect.width - 14);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, rightRect.left + 8, rightRect.top + rightRect.height * 0.32, rightRect.height * 0.28, fg, FontWeight.w700, maxW: rightRect.width - 12);
    }
    c.restore();
  }

  static void _glassBrand(Canvas c, Rect r, String title, String subtitle, Color fg) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = Colors.white.withValues(alpha: 0.16));
    c.drawRRect(RRect.fromRectAndRadius(r.deflate(1), const Radius.circular(11)), Paint()..color = Colors.white.withValues(alpha: 0.45)..style = PaintingStyle.stroke..strokeWidth = 1.2);
    _txt(c, title.toUpperCase(), r.left + 10, r.top + r.height * 0.26, r.height * 0.34, fg, FontWeight.w900, maxW: r.width - 16);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left + 10, r.top + r.height * 0.58, r.height * 0.24, fg.withValues(alpha: 0.9), FontWeight.w600, maxW: r.width - 16);
    }
  }

  static void _ribbonBrand(Canvas c, Rect r, String title, String subtitle, Color bg, Color fg) {
    final tail = r.height * 0.22;
    final path = Path()
      ..moveTo(r.left, r.top + tail)
      ..lineTo(r.left + 10, r.top)
      ..lineTo(r.right - 14, r.top + 4)
      ..lineTo(r.right, r.bottom - tail)
      ..lineTo(r.right - 12, r.bottom)
      ..lineTo(r.left + 6, r.bottom - 4)
      ..close();
    c.drawPath(
      path,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color.lerp(bg, Colors.white, 0.08)!.withValues(alpha: 0.96), bg.withValues(alpha: 0.92)],
        ).createShader(r),
    );
    c.drawPath(
      path,
      Paint()
        ..color = const Color(0xFFFBBF24).withValues(alpha: 0.7)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.4,
    );
    c.drawPath(
      Path()
        ..moveTo(r.left, r.top + tail + 2)
        ..lineTo(r.left - 6, r.top + tail + 10)
        ..lineTo(r.left, r.top + tail + 18)
        ..close(),
      Paint()..color = Color.lerp(bg, Colors.black, 0.35)!.withValues(alpha: 0.9),
    );
    _txt(c, title.toUpperCase(), r.left + 14, r.top + r.height * 0.24, r.height * 0.36, fg, FontWeight.w900, maxW: r.width - 22);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left + 14, r.top + r.height * 0.56, r.height * 0.24, fg.withValues(alpha: 0.9), FontWeight.w700, maxW: r.width - 22);
    }
  }

  static void _classicFooter(Canvas c, Rect r, String left, String right, Color bg, Color accent, Color text) {
    final outer = RRect.fromRectAndRadius(r, const Radius.circular(14));
    c.drawRRect(
      outer,
      Paint()
        ..shader = LinearGradient(
          colors: [bg.withValues(alpha: 0.94), Color.lerp(bg, Colors.black, 0.3)!.withValues(alpha: 0.9)],
        ).createShader(r),
    );
    c.drawRRect(
      outer.deflate(1),
      Paint()..color = accent.withValues(alpha: 0.65)..style = PaintingStyle.stroke..strokeWidth = 1.4,
    );
    _luxuryCorners(c, r.deflate(2), accent, inset: 5);
    final fs = r.height * 0.36;
    _txt(c, left, r.left + 14, r.top + r.height * 0.28, fs, text, FontWeight.w700, maxW: r.width * 0.46);
    c.drawLine(Offset(r.center.dx, r.top + 6), Offset(r.center.dx, r.bottom - 6), Paint()..color = accent.withValues(alpha: 0.35)..strokeWidth = 1);
    _txt(c, right, r.right - 14, r.top + r.height * 0.28, fs, text, FontWeight.w700, maxW: r.width * 0.46, align: TextAlign.right);
  }

  static void _neonFooter(Canvas c, Rect r, String left, String right) {
    final path = Path()..addRRect(RRect.fromRectAndRadius(r, const Radius.circular(16)));
    c.drawPath(path, Paint()..color = const Color(0xFF020617).withValues(alpha: 0.88));
    c.drawPath(
      path,
      Paint()
        ..shader = LinearGradient(colors: [const Color(0xFF22D3EE), const Color(0xFFA855F7)]).createShader(r)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2,
    );
    final fs = r.height * 0.34;
    _txt(c, left, r.left + 16, r.top + r.height * 0.30, fs, const Color(0xFF67E8F9), FontWeight.w800, maxW: r.width * 0.44);
    _txt(c, right, r.right - 16, r.top + r.height * 0.30, fs, const Color(0xFFF472B6), FontWeight.w800, maxW: r.width * 0.44, align: TextAlign.right);
  }

  static void _goldFooter(Canvas c, Rect r, String left, String right) {
    c.drawRRect(
      RRect.fromRectAndRadius(r, const Radius.circular(13)),
      Paint()
        ..shader = LinearGradient(
          colors: [const Color(0xFF1C1917), const Color(0xFF292524), const Color(0xFF1C1917)],
        ).createShader(r),
    );
    c.drawRRect(
      RRect.fromRectAndRadius(r.deflate(1.5), const Radius.circular(11)),
      Paint()
        ..shader = LinearGradient(colors: [const Color(0xFFFEF3C7), const Color(0xFFFBBF24), const Color(0xFFD97706)]).createShader(r)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2,
    );
    _sheenLine(c, r, yFrac: 0.22);
    final fs = r.height * 0.34;
    _txt(c, left, r.left + 14, r.top + r.height * 0.30, fs, const Color(0xFFFDE68A), FontWeight.w800, maxW: r.width * 0.44);
    _txt(c, right, r.right - 14, r.top + r.height * 0.30, fs, const Color(0xFFFDE68A), FontWeight.w800, maxW: r.width * 0.44, align: TextAlign.right);
  }

  static void _pillFooter(Canvas c, Rect r, String left, String right, Color accent, Color text) {
    final fs = r.height * 0.32;
    final pillH = r.height * 0.76;
    final pillY = r.top + (r.height - pillH) / 2;
    final lw = (left.length * fs * 0.58).clamp(r.width * 0.24, r.width * 0.44);
    final rw = (right.length * fs * 0.58).clamp(r.width * 0.24, r.width * 0.44);
    void luxPill(double x, double w, double alpha) {
      final rect = Rect.fromLTWH(x, pillY, w, pillH);
      c.drawRRect(
        RRect.fromRectAndRadius(rect, Radius.circular(pillH / 2)),
        Paint()
          ..shader = LinearGradient(
            colors: [accent.withValues(alpha: alpha), Color.lerp(accent, Colors.black, 0.25)!.withValues(alpha: alpha)],
          ).createShader(rect),
      );
      c.drawRRect(
        RRect.fromRectAndRadius(rect.deflate(1), Radius.circular(pillH / 2)),
        Paint()..color = Colors.white.withValues(alpha: 0.25)..style = PaintingStyle.stroke..strokeWidth = 1,
      );
    }

    luxPill(r.left + 6, lw, 0.92);
    luxPill(r.right - rw - 6, rw, 0.72);
    _txt(c, left, r.left + 6 + lw / 2, pillY + pillH * 0.22, fs, text, FontWeight.w800, maxW: lw - 10, align: TextAlign.center);
    _txt(c, right, r.right - 6 - rw / 2, pillY + pillH * 0.22, fs, text, FontWeight.w800, maxW: rw - 10, align: TextAlign.center);
  }

  static void _minimalFooter(Canvas c, Rect r, String left, String right, Color text) {
    final frame = RRect.fromRectAndRadius(r.deflate(1), const Radius.circular(10));
    c.drawRRect(frame, Paint()..color = Colors.black.withValues(alpha: 0.18));
    c.drawRRect(
      frame,
      Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.45)..style = PaintingStyle.stroke..strokeWidth = 1,
    );
    final fs = r.height * 0.32;
    _txt(c, left.toUpperCase(), r.left + 12, r.top + r.height * 0.32, fs, text.withValues(alpha: 0.9), FontWeight.w700, maxW: r.width * 0.44);
    c.drawCircle(Offset(r.center.dx, r.center.dy), 2.2, Paint()..color = text.withValues(alpha: 0.35));
    _txt(c, right.toUpperCase(), r.right - 12, r.top + r.height * 0.32, fs, text.withValues(alpha: 0.9), FontWeight.w700, maxW: r.width * 0.44, align: TextAlign.right);
  }

  static void _splitFooter(Canvas c, Rect r, String left, String right, Color bg, Color accent, Color text) {
    final mid = r.width * 0.5;
    final leftRect = Rect.fromLTWH(r.left, r.top, mid - 3, r.height);
    final rightRect = Rect.fromLTWH(r.left + mid + 3, r.top, mid - 3, r.height);
    c.drawRRect(
      RRect.fromRectAndCorners(leftRect, topLeft: const Radius.circular(12), bottomLeft: const Radius.circular(12)),
      Paint()..shader = LinearGradient(colors: [bg.withValues(alpha: 0.94), Color.lerp(bg, Colors.black, 0.2)!]).createShader(leftRect),
    );
    c.drawRRect(
      RRect.fromRectAndCorners(rightRect, topRight: const Radius.circular(12), bottomRight: const Radius.circular(12)),
      Paint()..shader = LinearGradient(colors: [accent.withValues(alpha: 0.42), accent.withValues(alpha: 0.22)]).createShader(rightRect),
    );
    c.drawLine(
      Offset(r.center.dx, r.top + 4),
      Offset(r.center.dx, r.bottom - 4),
      Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.75)..strokeWidth = 1.5,
    );
    final fs = r.height * 0.34;
    _txt(c, left, leftRect.left + 12, leftRect.top + leftRect.height * 0.30, fs, text, FontWeight.w800, maxW: leftRect.width - 16);
    _txt(c, right, rightRect.right - 12, rightRect.top + rightRect.height * 0.30, fs, text, FontWeight.w800, maxW: rightRect.width - 16, align: TextAlign.right);
  }

  static void _glassFooter(Canvas c, Rect r, String left, String right, Color text) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)), Paint()..color = Colors.white.withValues(alpha: 0.14));
    final fs = r.height * 0.36;
    _txt(c, left, r.left + 14, r.top + r.height * 0.30, fs, text, FontWeight.w700, maxW: r.width * 0.46);
    _txt(c, right, r.right - 14, r.top + r.height * 0.30, fs, text, FontWeight.w700, maxW: r.width * 0.46, align: TextAlign.right);
  }

  static void _ribbonFooter(Canvas c, Rect r, String left, String right, Color bg, Color accent, Color text) {
    final path = Path()
      ..moveTo(r.left + 8, r.top)
      ..lineTo(r.right - 6, r.top + 3)
      ..lineTo(r.right, r.bottom - 4)
      ..lineTo(r.left + 14, r.bottom)
      ..lineTo(r.left, r.bottom - 8)
      ..close();
    c.drawPath(
      path,
      Paint()
        ..shader = LinearGradient(colors: [bg.withValues(alpha: 0.95), Color.lerp(bg, Colors.black, 0.2)!]).createShader(r),
    );
    c.drawPath(path, Paint()..color = accent.withValues(alpha: 0.85)..style = PaintingStyle.stroke..strokeWidth = 1.5);
    c.drawRect(Rect.fromLTWH(r.left + 6, r.top + 2, 4, r.height - 4), Paint()..color = accent);
    final fs = r.height * 0.34;
    _txt(c, left, r.left + 16, r.top + r.height * 0.30, fs, text, FontWeight.w800, maxW: r.width * 0.40);
    _txt(c, right, r.right - 10, r.top + r.height * 0.30, fs, accent, FontWeight.w900, maxW: r.width * 0.40, align: TextAlign.right);
  }
}
