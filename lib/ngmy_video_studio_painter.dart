import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_news_banner_painter.dart';
import 'ngmy_video_studio_models.dart';

enum NgmyTemplatePaintLayer { background, foreground, frameBorders }

/// Programmatic templates (photo studios use Image.asset instead).
class NgmyVideoTemplatePainter extends CustomPainter {
  final NgmyVideoTemplateId templateId;
  final NgmyVideoFormat format;
  final Map<String, Rect> slotRects;
  final Map<String, NgmyVideoSlotShape> slotShapes;
  final String headline;
  final String title;
  final String subtitle;
  final String liveLabel;
  final double headlineFontScale;
  final double titleFontScale;
  final NgmyTemplatePaintLayer layer;

  NgmyVideoTemplatePainter({
    required this.templateId,
    required this.format,
    required this.slotRects,
    required this.slotShapes,
    required this.headline,
    required this.title,
    required this.subtitle,
    required this.liveLabel,
    required this.headlineFontScale,
    required this.titleFontScale,
    required this.layer,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final def = ngmyTemplateDef(templateId);
    if (def.usesPhotoBackdrop) return;

    final banner = def.newsBannerStyle;
    if (banner != null) {
      if (layer == NgmyTemplatePaintLayer.background) {
        canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0A0A0A));
      } else if (layer == NgmyTemplatePaintLayer.foreground) {
        NgmyNewsBannerPainter(
          style: banner,
          headline: headline,
          title: title,
          subtitle: subtitle,
          liveLabel: liveLabel,
          topAccent: def.newsTopAccent,
        ).paint(canvas, size);
      }
      if (layer == NgmyTemplatePaintLayer.frameBorders) _drawBorders(canvas, size);
      return;
    }

    switch (templateId) {
      case NgmyVideoTemplateId.ytBreakingNews:
      case NgmyVideoTemplateId.ytNewsLowerThird:
      case NgmyVideoTemplateId.ttNewsLowerThird:
        _breakingNews(canvas, size);
        break;
      case NgmyVideoTemplateId.ytBreakingStudio:
        _breakingStudio(canvas, size);
        break;
      case NgmyVideoTemplateId.ytBreakingTitle:
        _breakingTitle(canvas, size);
        break;
      case NgmyVideoTemplateId.ytStudio3Wall:
        _studio3Wall(canvas, size);
        break;
      case NgmyVideoTemplateId.ytStudio2Column:
        _studio2Column(canvas, size);
        break;
      case NgmyVideoTemplateId.ytNewsDualSplit:
        _newsDualSplit(canvas, size);
        break;
      case NgmyVideoTemplateId.ytSynthwaveEnd:
      case NgmyVideoTemplateId.ttSynthwaveEnd:
        _synthwaveEnd(canvas, size);
        break;
      case NgmyVideoTemplateId.ytThanksTriple:
      case NgmyVideoTemplateId.ttThanksTriple:
        _thanksTriple(canvas, size);
        break;
      case NgmyVideoTemplateId.ytDualEnd:
        _dualEnd(canvas, size);
        break;
      case NgmyVideoTemplateId.ttNewsTag:
        _newsTag(canvas, size);
        break;
      default:
        break;
    }
    if (layer == NgmyTemplatePaintLayer.frameBorders) _drawBorders(canvas, size);
  }

  void _drawBorders(Canvas canvas, Size size) {
    for (final e in slotRects.entries) {
      final px = _px(e.value, size);
      final shape = slotShapes[e.key] ?? NgmyVideoSlotShape.rect;
      final p = Paint()
        ..color = const Color(0xFF00D4FF)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.5;
      if (shape == NgmyVideoSlotShape.circle) {
        canvas.drawOval(px, p);
      } else {
        canvas.drawRRect(RRect.fromRectAndRadius(px, const Radius.circular(4)), p);
      }
    }
  }

  Rect _px(Rect n, Size s) => Rect.fromLTWH(n.left * s.width, n.top * s.height, n.width * s.width, n.height * s.height);

  void _breakingNews(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    if (layer != NgmyTemplatePaintLayer.foreground) {
      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0D3B7A));
      final grid = Paint()..color = const Color(0xFF3B82F6).withOpacity(0.22)..strokeWidth = 1;
      for (var x = 0.0; x < w; x += 28) {
        canvas.drawLine(Offset(x, 0), Offset(x, h), grid);
      }
      for (var y = 0.0; y < h; y += 28) {
        canvas.drawLine(Offset(0, y), Offset(w, y), grid);
      }
      canvas.drawCircle(Offset(w * 0.72, h * 0.38), w * 0.28, Paint()..color = const Color(0xFF2563EB).withOpacity(0.35));
    } else {
      _badge(canvas, Offset(w * 0.04, h * 0.04), subtitle.toUpperCase(), const Color(0xFFDC2626), 11 * titleFontScale);
      _badge(canvas, Offset(w * 0.04, h * 0.11), title.toUpperCase(), const Color(0xFF1D4ED8), 26 * titleFontScale);
      final barH = (h * 0.11).clamp(48.0, 88.0) * headlineFontScale;
      final barTop = h - barH - h * 0.02;
      canvas.drawRect(Rect.fromLTWH(0, barTop, w, barH), Paint()..color = Colors.white);
      canvas.drawRect(Rect.fromLTWH(0, barTop + barH - 4, w, 4), Paint()..color = const Color(0xFFDC2626));
      _txt(canvas, headline, w * 0.04, barTop + barH * 0.22, barH * 0.32, Colors.black87, FontWeight.w800, maxW: w * 0.58);
      _livePill(canvas, Offset(w * 0.78, barTop + barH * 0.18), liveLabel, barH * 0.55);
    }
  }

  void _breakingStudio(Canvas canvas, Size size) {
    if (layer != NgmyTemplatePaintLayer.foreground) {
      _room(canvas, size, floor: const Color(0xFF7F1D1D), glow: const Color(0xFF1E3A8A));
    } else {
      _badge(canvas, Offset(size.width * 0.32, size.height * 0.06), '${subtitle.toUpperCase()} ${title.toUpperCase()}', const Color(0xFF1D4ED8), 14 * titleFontScale, wide: true);
      final barH = size.height * 0.10 * headlineFontScale;
      canvas.drawRect(Rect.fromLTWH(0, size.height - barH, size.width * 0.78, barH), Paint()..color = const Color(0xFF1D4ED8));
      _txt(canvas, headline, size.width * 0.03, size.height - barH * 0.68, barH * 0.38, Colors.white, FontWeight.w800);
    }
  }

  void _breakingTitle(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    if (layer != NgmyTemplatePaintLayer.foreground) {
      canvas.drawRect(Offset.zero & size, Paint()..shader = ui.Gradient.radial(Offset(w * 0.5, h * 0.35), w * 0.7, [const Color(0xFF1E40AF), const Color(0xFF0F172A)]));
    } else {
      _txt(canvas, subtitle.toUpperCase(), w * 0.08, h * 0.10, 42 * titleFontScale, const Color(0xFFEF4444), FontWeight.w900, italic: true);
      _txt(canvas, title.toUpperCase(), w * 0.08, h * 0.22, 52 * titleFontScale, Colors.white, FontWeight.w900);
      final barH = h * 0.09;
      canvas.drawRect(Rect.fromLTWH(0, h - barH, w, barH), Paint()..color = Colors.white);
      _txt(canvas, headline, w * 0.04, h - barH * 0.7, barH * 0.4, Colors.black87, FontWeight.w800);
    }
  }

  void _studio3Wall(Canvas canvas, Size size) {
    if (layer != NgmyTemplatePaintLayer.foreground) {
      _room(canvas, size, floor: const Color(0xFF111827), glow: const Color(0xFF06B6D4));
    } else {
      final barH = size.height * 0.11;
      canvas.drawRect(Rect.fromLTWH(0, size.height - barH, size.width, barH), Paint()..color = Colors.white.withOpacity(0.95));
      _txt(canvas, subtitle, size.width * 0.04, size.height - barH * 0.72, barH * 0.32, Colors.black87, FontWeight.w800);
      _txt(canvas, headline, size.width * 0.04, size.height - barH * 0.38, barH * 0.28, const Color(0xFFDC2626), FontWeight.w900);
    }
  }

  void _studio2Column(Canvas canvas, Size size) {
    if (layer != NgmyTemplatePaintLayer.foreground) {
      _room(canvas, size, floor: const Color(0xFF1F2937), glow: const Color(0xFF6366F1));
    } else {
      _badge(canvas, Offset(size.width * 0.04, size.height * 0.04), subtitle.toUpperCase(), const Color(0xFF4F46E5), 12 * titleFontScale);
      final barH = size.height * 0.09;
      canvas.drawRect(Rect.fromLTWH(0, size.height - barH, size.width, barH), Paint()..color = const Color(0xFF0EA5E9));
      _txt(canvas, headline, size.width * 0.04, size.height - barH * 0.65, barH * 0.4, Colors.white, FontWeight.w800);
    }
  }

  void _newsDualSplit(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    if (layer != NgmyTemplatePaintLayer.foreground) {
      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0F172A));
    } else {
      canvas.drawRect(Rect.fromLTWH(0, 0, w, h * 0.12), Paint()..color = const Color(0xFFDC2626));
      _txt(canvas, '${subtitle.toUpperCase()} ${title.toUpperCase()}', w * 0.5, h * 0.035, h * 0.045, Colors.white, FontWeight.w900, center: true);
      final barH = h * 0.09;
      canvas.drawRect(Rect.fromLTWH(0, h - barH, w, barH), Paint()..color = const Color(0xFF1D4ED8));
      _txt(canvas, headline, w * 0.04, h - barH * 0.65, barH * 0.42, Colors.white, FontWeight.w800);
    }
  }

  void _synthwaveEnd(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    if (layer != NgmyTemplatePaintLayer.foreground) {
      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF050508));
      final horizon = h * 0.62;
      final grid = Paint()..color = const Color(0xFF7C3AED).withOpacity(0.85)..strokeWidth = 1.2;
      for (var i = 0; i < 12; i++) {
        final t = i / 12;
        final y = horizon + (h - horizon) * t * t;
        canvas.drawLine(Offset(0, y), Offset(w, y), grid);
      }
    } else {
      _txt(canvas, subtitle, w * 0.08, h * 0.56, 18 * titleFontScale, Colors.white, FontWeight.w400, italic: true);
      _txt(canvas, title.toUpperCase(), w * 0.08, h * 0.64, 28 * titleFontScale, const Color(0xFFA855F7), FontWeight.w900);
    }
  }

  void _thanksTriple(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    if (layer != NgmyTemplatePaintLayer.foreground) {
      canvas.drawRect(Offset.zero & size, Paint()..color = Colors.black);
    } else {
      final titleFs = (format == NgmyVideoFormat.youtube ? 20.0 : 15.0) * titleFontScale;
      _txt(canvas, title.toUpperCase(), w * 0.5, h * 0.06, titleFs, Colors.white, FontWeight.w900, center: true);
      final barH = h * 0.09;
      canvas.drawRect(Rect.fromLTWH(0, h - barH, w, barH), Paint()..color = Colors.white);
      _txt(canvas, headline, w * 0.06, h - barH * 0.62, barH * 0.45, Colors.black87, FontWeight.w700);
    }
  }

  void _dualEnd(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    if (layer != NgmyTemplatePaintLayer.foreground) {
      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0A0A12));
    } else {
      _txt(canvas, title.toUpperCase(), w * 0.5, h * 0.05, 18 * titleFontScale, Colors.white, FontWeight.w900, center: true);
      final barH = h * 0.08;
      canvas.drawRect(Rect.fromLTWH(0, h - barH, w, barH), Paint()..color = const Color(0xFF7C3AED));
      _txt(canvas, headline, w * 0.5, h - barH * 0.65, barH * 0.42, Colors.white, FontWeight.w800, center: true);
    }
  }

  void _newsTag(Canvas canvas, Size size) {
    if (layer != NgmyTemplatePaintLayer.foreground) return;
    final w = size.width;
    final h = size.height;
    final barH = h * 0.08 * headlineFontScale;
    canvas.drawRect(Rect.fromLTWH(0, h - barH - 8, w, barH), Paint()..color = Colors.black.withOpacity(0.78));
    _txt(canvas, title.toUpperCase(), w * 0.05, h - barH, barH * 0.42, const Color(0xFFEF4444), FontWeight.w900);
    _txt(canvas, headline, w * 0.05, h - barH * 0.48, barH * 0.35, Colors.white, FontWeight.w700);
  }

  void _room(Canvas canvas, Size size, {required Color floor, required Color glow}) {
    final w = size.width;
    final h = size.height;
    canvas.drawRect(Rect.fromLTWH(0, h * 0.45, w, h * 0.55), Paint()..color = floor.withOpacity(0.9));
    canvas.drawRect(Rect.fromLTWH(0, 0, w, h * 0.45), Paint()..color = const Color(0xFF0B1220));
    canvas.drawRect(Rect.fromLTWH(w * 0.02, h * 0.08, w * 0.96, h * 0.32), Paint()..color = glow.withOpacity(0.25));
  }

  void _badge(Canvas canvas, Offset at, String text, Color bg, double fs, {bool wide = false}) {
    final tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: Colors.white, fontSize: fs, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout(maxWidth: wide ? 400 : 200);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(at.dx, at.dy, tp.width + 24, tp.height + 12), const Radius.circular(4)), Paint()..color = bg);
    tp.paint(canvas, Offset(at.dx + 12, at.dy + 6));
  }

  void _livePill(Canvas canvas, Offset at, String label, double h) {
    final parts = label.toUpperCase().split(' ');
    final live = parts.isNotEmpty ? parts.first : 'LIVE';
    final rest = parts.length > 1 ? parts.sublist(1).join(' ') : 'STREAMING';
    final w = h * 2.8;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(at.dx, at.dy, w * 0.35, h), const Radius.circular(4)), Paint()..color = const Color(0xFF38BDF8));
    _txt(canvas, live, at.dx + 6, at.dy + h * 0.2, h * 0.42, Colors.black, FontWeight.w900);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(at.dx + w * 0.35, at.dy, w * 0.65, h), const Radius.circular(4)), Paint()..color = const Color(0xFFDC2626));
    if (rest.isNotEmpty) _txt(canvas, rest, at.dx + w * 0.38, at.dy + h * 0.2, h * 0.38, Colors.white, FontWeight.w900);
  }

  void _txt(Canvas c, String text, double x, double y, double fs, Color color, FontWeight weight, {double maxW = double.infinity, bool center = false, bool italic = false}) {
    if (text.trim().isEmpty) return;
    final tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: color, fontSize: fs, fontWeight: weight, fontStyle: italic ? FontStyle.italic : FontStyle.normal)), textDirection: TextDirection.ltr, maxLines: 2, ellipsis: '…')..layout(maxWidth: maxW);
    tp.paint(c, Offset(center ? x - tp.width / 2 : x, y));
  }

  @override
  bool shouldRepaint(covariant NgmyVideoTemplatePainter old) => true;
}
