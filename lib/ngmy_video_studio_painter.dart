import 'package:flutter/material.dart';



import 'ngmy_news_banner_painter.dart';

import 'ngmy_video_studio_models.dart';



enum NgmyTemplatePaintLayer { background, foreground, frameBorders }



/// Thumbnail / legacy paint helper for broadcast overlays.

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

    final banner = def.newsBannerStyle;

    if (banner == null) return;



    if (layer == NgmyTemplatePaintLayer.background) {

      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF111827));

    } else if (layer == NgmyTemplatePaintLayer.foreground) {

      NgmyNewsBannerPainter(

        style: banner,

        headline: headline,

        title: title,

        subtitle: subtitle,

        liveLabel: liveLabel,

        topAccent: def.newsTopAccent,

        scale: headlineFontScale.clamp(0.6, 1.8),

      ).paint(canvas, size);

    }

    if (layer == NgmyTemplatePaintLayer.frameBorders) _drawBorders(canvas, size);

  }



  void _drawBorders(Canvas canvas, Size size) {

    for (final e in slotRects.entries) {

      final px = _px(e.value, size);

      final shape = slotShapes[e.key] ?? NgmyVideoSlotShape.rect;

      final p = Paint()

        ..color = const Color(0xFF00B25A)

        ..style = PaintingStyle.stroke

        ..strokeWidth = 2;

      if (shape == NgmyVideoSlotShape.circle) {

        canvas.drawOval(px, p);

      } else {

        canvas.drawRRect(RRect.fromRectAndRadius(px, const Radius.circular(4)), p);

      }

    }

  }



  Rect _px(Rect n, Size s) => Rect.fromLTWH(n.left * s.width, n.top * s.height, n.width * s.width, n.height * s.height);



  @override

  bool shouldRepaint(covariant NgmyVideoTemplatePainter old) => true;

}


