import 'package:flutter/material.dart';

import 'ngmy_video_studio_models.dart';

enum NgmyTemplatePaintLayer { background, foreground, frameBorders }

/// Drawn only for non-photo templates (end screens, TikTok tags).
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
    switch (templateId) {
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
      _txt(canvas, liveLabel.toUpperCase(), w * 0.72, h - barH * 0.62, barH * 0.4, const Color(0xFF7C3AED), FontWeight.w800);
      for (final id in ['left', 'right']) {
        final r = slotRects[id];
        if (r != null) {
          _txt(canvas, subtitle.toUpperCase(), _px(r, size).left, _px(r, size).top - 14, 11 * titleFontScale, const Color(0xFF00D4FF), FontWeight.w800);
        }
      }
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
    _txt(canvas, liveLabel.toUpperCase(), w * 0.72, h - barH * 0.75, barH * 0.38, Colors.white, FontWeight.w800);
  }

  void _txt(Canvas c, String t, double x, double y, double fs, Color col, FontWeight w, {bool center = false}) {
    if (t.trim().isEmpty) return;
    final tp = TextPainter(
      text: TextSpan(text: t, style: TextStyle(color: col, fontSize: fs, fontWeight: w)),
      textDirection: TextDirection.ltr,
    )..layout();
    tp.paint(c, Offset(center ? x - tp.width / 2 : x, y));
  }

  @override
  bool shouldRepaint(covariant NgmyVideoTemplatePainter old) => true;
}
