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

  static void _classicBrand(Canvas c, Rect r, String title, String subtitle, Color bg, Color fg) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(10)), Paint()..color = bg.withValues(alpha: 0.88));
    _txt(c, title.toUpperCase(), r.left + 10, r.top + r.height * 0.22, r.height * 0.34, fg, FontWeight.w900, maxW: r.width - 16);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left + 10, r.top + r.height * 0.58, r.height * 0.24, fg.withValues(alpha: 0.88), FontWeight.w600, maxW: r.width - 16);
    }
  }

  static void _neonBrand(Canvas c, Rect r, String title, String subtitle) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = Colors.black.withValues(alpha: 0.82));
    c.drawRRect(
      RRect.fromRectAndRadius(r.deflate(1.5), const Radius.circular(11)),
      Paint()..color = const Color(0xFF22D3EE)..style = PaintingStyle.stroke..strokeWidth = 2,
    );
    _txt(c, title.toUpperCase(), r.center.dx, r.top + r.height * 0.28, r.height * 0.36, const Color(0xFF67E8F9), FontWeight.w900, maxW: r.width - 12, align: TextAlign.center);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.center.dx, r.top + r.height * 0.62, r.height * 0.22, const Color(0xFFA855F7), FontWeight.w700, maxW: r.width - 12, align: TextAlign.center);
    }
  }

  static void _goldBrand(Canvas c, Rect r, String title, String subtitle) {
    c.drawRRect(
      RRect.fromRectAndRadius(r, const Radius.circular(10)),
      Paint()
        ..shader = LinearGradient(colors: [const Color(0xFF78350F), const Color(0xFFD97706)]).createShader(r),
    );
    c.drawRRect(RRect.fromRectAndRadius(r.deflate(2), const Radius.circular(8)), Paint()..color = const Color(0xFFFDE68A)..style = PaintingStyle.stroke..strokeWidth = 1.6);
    _txt(c, title.toUpperCase(), r.left + 10, r.top + r.height * 0.24, r.height * 0.34, const Color(0xFFFFFBEB), FontWeight.w900, maxW: r.width - 16);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left + 10, r.top + r.height * 0.60, r.height * 0.22, const Color(0xFFFEF3C7), FontWeight.w600, maxW: r.width - 16);
    }
  }

  static void _pillBrand(Canvas c, Rect r, String title, String subtitle, Color bg, Color fg) {
    c.drawRRect(RRect.fromRectAndRadius(r, Radius.circular(r.height / 2)), Paint()..color = bg.withValues(alpha: 0.9));
    _txt(c, title.toUpperCase(), r.center.dx, r.top + r.height * 0.30, r.height * 0.34, fg, FontWeight.w900, maxW: r.width - 20, align: TextAlign.center);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.center.dx, r.top + r.height * 0.58, r.height * 0.22, fg.withValues(alpha: 0.85), FontWeight.w600, maxW: r.width - 20, align: TextAlign.center);
    }
  }

  static void _minimalBrand(Canvas c, Rect r, String title, String subtitle, Color fg) {
    c.drawLine(Offset(r.left, r.bottom), Offset(r.right, r.bottom), Paint()..color = fg.withValues(alpha: 0.7)..strokeWidth = 2);
    _txt(c, title.toUpperCase(), r.left, r.top + r.height * 0.20, r.height * 0.38, fg, FontWeight.w800, maxW: r.width);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left, r.top + r.height * 0.58, r.height * 0.24, fg.withValues(alpha: 0.75), FontWeight.w500, maxW: r.width);
    }
  }

  static void _splitBrand(Canvas c, Rect r, String title, String subtitle, Color bg, Color fg) {
    final half = r.width * 0.55;
    c.drawRRect(RRect.fromRectAndCorners(Rect.fromLTWH(r.left, r.top, half, r.height), topLeft: const Radius.circular(10), bottomLeft: const Radius.circular(10)), Paint()..color = bg.withValues(alpha: 0.92));
    _txt(c, title.toUpperCase(), r.left + 8, r.top + r.height * 0.30, r.height * 0.34, fg, FontWeight.w900, maxW: half - 12);
    if (subtitle.trim().isNotEmpty) {
      c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(r.left + half + 4, r.top + r.height * 0.22, r.width - half - 8, r.height * 0.56), const Radius.circular(8)), Paint()..color = fg.withValues(alpha: 0.15));
      _txt(c, subtitle, r.left + half + 10, r.top + r.height * 0.36, r.height * 0.28, fg, FontWeight.w700, maxW: r.width - half - 16);
    }
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
    final path = Path()
      ..moveTo(r.left, r.top + 6)
      ..lineTo(r.right - 8, r.top)
      ..lineTo(r.right, r.bottom - 6)
      ..lineTo(r.left + 8, r.bottom)
      ..close();
    c.drawPath(path, Paint()..color = bg.withValues(alpha: 0.94));
    _txt(c, title.toUpperCase(), r.left + 12, r.top + r.height * 0.26, r.height * 0.36, fg, FontWeight.w900, maxW: r.width - 20);
    if (subtitle.trim().isNotEmpty) {
      _txt(c, subtitle, r.left + 12, r.top + r.height * 0.58, r.height * 0.24, fg.withValues(alpha: 0.9), FontWeight.w700, maxW: r.width - 20);
    }
  }

  static void _classicFooter(Canvas c, Rect r, String left, String right, Color bg, Color accent, Color text) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = bg.withValues(alpha: 0.88));
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = accent.withValues(alpha: 0.45)..style = PaintingStyle.stroke..strokeWidth = 1);
    final fs = r.height * 0.38;
    _txt(c, left, r.left + 12, r.top + r.height * 0.28, fs, text, FontWeight.w700, maxW: r.width * 0.48);
    _txt(c, right, r.right - 12, r.top + r.height * 0.28, fs, text, FontWeight.w700, maxW: r.width * 0.48, align: TextAlign.right);
  }

  static void _neonFooter(Canvas c, Rect r, String left, String right) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)), Paint()..color = Colors.black.withValues(alpha: 0.78));
    final fs = r.height * 0.36;
    _txt(c, left, r.left + 14, r.top + r.height * 0.30, fs, const Color(0xFF67E8F9), FontWeight.w800, maxW: r.width * 0.46);
    _txt(c, right, r.right - 14, r.top + r.height * 0.30, fs, const Color(0xFFF472B6), FontWeight.w800, maxW: r.width * 0.46, align: TextAlign.right);
  }

  static void _goldFooter(Canvas c, Rect r, String left, String right) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = const Color(0xFF1C1917).withValues(alpha: 0.9));
    c.drawRRect(RRect.fromRectAndRadius(r.deflate(1.5), const Radius.circular(10)), Paint()..color = const Color(0xFFFBBF24)..style = PaintingStyle.stroke..strokeWidth = 1.8);
    final fs = r.height * 0.36;
    _txt(c, left, r.left + 12, r.top + r.height * 0.30, fs, const Color(0xFFFDE68A), FontWeight.w800, maxW: r.width * 0.46);
    _txt(c, right, r.right - 12, r.top + r.height * 0.30, fs, const Color(0xFFFDE68A), FontWeight.w800, maxW: r.width * 0.46, align: TextAlign.right);
  }

  static void _pillFooter(Canvas c, Rect r, String left, String right, Color accent, Color text) {
    final fs = r.height * 0.34;
    final pillH = r.height * 0.72;
    final pillY = r.top + (r.height - pillH) / 2;
    final lw = (left.length * fs * 0.55).clamp(r.width * 0.22, r.width * 0.42);
    final rw = (right.length * fs * 0.55).clamp(r.width * 0.22, r.width * 0.42);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(r.left + 8, pillY, lw, pillH), Radius.circular(pillH / 2)), Paint()..color = accent.withValues(alpha: 0.85));
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(r.right - rw - 8, pillY, rw, pillH), Radius.circular(pillH / 2)), Paint()..color = accent.withValues(alpha: 0.55));
    _txt(c, left, r.left + 8 + lw / 2, pillY + pillH * 0.22, fs, text, FontWeight.w800, maxW: lw - 8, align: TextAlign.center);
    _txt(c, right, r.right - 8 - rw / 2, pillY + pillH * 0.22, fs, text, FontWeight.w800, maxW: rw - 8, align: TextAlign.center);
  }

  static void _minimalFooter(Canvas c, Rect r, String left, String right, Color text) {
    final fs = r.height * 0.34;
    _txt(c, left.toUpperCase(), r.left + 10, r.top + r.height * 0.32, fs, text.withValues(alpha: 0.85), FontWeight.w600, maxW: r.width * 0.46);
    _txt(c, right.toUpperCase(), r.right - 10, r.top + r.height * 0.32, fs, text.withValues(alpha: 0.85), FontWeight.w600, maxW: r.width * 0.46, align: TextAlign.right);
  }

  static void _splitFooter(Canvas c, Rect r, String left, String right, Color bg, Color accent, Color text) {
    c.drawRect(Rect.fromLTWH(r.left, r.top, r.width * 0.5 - 2, r.height), Paint()..color = bg.withValues(alpha: 0.9));
    c.drawRect(Rect.fromLTWH(r.left + r.width * 0.5 + 2, r.top, r.width * 0.5 - 2, r.height), Paint()..color = accent.withValues(alpha: 0.35));
    final fs = r.height * 0.36;
    _txt(c, left, r.left + 10, r.top + r.height * 0.30, fs, text, FontWeight.w800, maxW: r.width * 0.44);
    _txt(c, right, r.right - 10, r.top + r.height * 0.30, fs, text, FontWeight.w800, maxW: r.width * 0.44, align: TextAlign.right);
  }

  static void _glassFooter(Canvas c, Rect r, String left, String right, Color text) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)), Paint()..color = Colors.white.withValues(alpha: 0.14));
    final fs = r.height * 0.36;
    _txt(c, left, r.left + 14, r.top + r.height * 0.30, fs, text, FontWeight.w700, maxW: r.width * 0.46);
    _txt(c, right, r.right - 14, r.top + r.height * 0.30, fs, text, FontWeight.w700, maxW: r.width * 0.46, align: TextAlign.right);
  }

  static void _ribbonFooter(Canvas c, Rect r, String left, String right, Color bg, Color accent, Color text) {
    c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(8)), Paint()..color = bg.withValues(alpha: 0.92));
    c.drawRect(Rect.fromLTWH(r.left, r.top, 5, r.height), Paint()..color = accent);
    final fs = r.height * 0.36;
    _txt(c, left, r.left + 14, r.top + r.height * 0.30, fs, text, FontWeight.w800, maxW: r.width * 0.42);
    _txt(c, right, r.right - 12, r.top + r.height * 0.30, fs, accent, FontWeight.w900, maxW: r.width * 0.42, align: TextAlign.right);
  }
}
