import 'dart:convert';

import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';
import 'ngmy_slides_pdf_embed_stub.dart'
    if (dart.library.html) 'ngmy_slides_pdf_embed_web.dart';

/// Shared slide element rendering for canvas, thumbnails, and slideshow.
class NgmySlideElementView extends StatelessWidget {
  const NgmySlideElementView({
    super.key,
    required this.element,
    required this.scale,
    this.editing = false,
    this.selected = false,
    this.controller,
    this.onTextChanged,
    this.onTap,
  });

  final NgmySlideElement element;
  final double scale;
  final bool editing;
  final bool selected;
  final TextEditingController? controller;
  final ValueChanged<String>? onTextChanged;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    switch (element.type) {
      case NgmySlideElementType.text:
        return _textView();
      case NgmySlideElementType.image:
      case NgmySlideElementType.signature:
        return _imageView();
      case NgmySlideElementType.pdf:
        return _pdfView();
      case NgmySlideElementType.shape:
        return CustomPaint(painter: NgmyShapePainter(element), size: Size.infinite);
    }
  }

  TextStyle _textStyle() => TextStyle(
        fontSize: element.fontSize * scale,
        fontWeight: element.fontWeight,
        fontStyle: element.fontStyle,
        decoration: element.decoration,
        color: Color(element.color),
        height: 1.25,
      );

  Widget _textView() {
    if (editing && selected && controller != null) {
      return TextField(
        key: ValueKey('slide_tf_${element.id}'),
        controller: controller,
        maxLines: null,
        expands: true,
        style: _textStyle(),
        textAlign: element.align,
        decoration: InputDecoration(
          border: InputBorder.none,
          isDense: true,
          contentPadding: const EdgeInsets.all(4),
          filled: true,
          fillColor: Colors.white.withValues(alpha: 0.08),
        ),
        onChanged: onTextChanged,
        onTap: onTap,
      );
    }
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Padding(
        padding: const EdgeInsets.all(4),
        child: Align(
          alignment: _alignToAlignment(element.align),
          child: Text(
            element.text,
            key: ValueKey('slide_txt_${element.id}_${element.text.hashCode}'),
            style: _textStyle(),
            textAlign: element.align,
            softWrap: true,
            overflow: TextOverflow.visible,
          ),
        ),
      ),
    );
  }

  Alignment _alignToAlignment(TextAlign align) {
    switch (align) {
      case TextAlign.center:
        return Alignment.center;
      case TextAlign.right:
      case TextAlign.end:
        return Alignment.centerRight;
      default:
        return Alignment.centerLeft;
    }
  }

  Widget _imageView() {
    final ref = element.imageRef;
    if (ref == null || !ref.startsWith('data:image')) {
      return const Center(child: Icon(Icons.image_not_supported_outlined, color: Colors.white54, size: 32));
    }
    try {
      final bytes = base64Decode(ref.split(',').last);
      return Image.memory(
        bytes,
        key: ValueKey('img_${element.id}_${bytes.length}'),
        fit: BoxFit.contain,
        gaplessPlayback: true,
        errorBuilder: (_, __, ___) => const Center(child: Icon(Icons.broken_image_outlined, color: Colors.white54)),
      );
    } catch (_) {
      return const Center(child: Icon(Icons.broken_image_outlined, color: Colors.white54));
    }
  }

  Widget _pdfView() {
    final ref = element.imageRef;
    if (ref == null || ref.isEmpty) {
      return const Center(child: Icon(Icons.picture_as_pdf_rounded, color: Color(0xFFDC2626), size: 40));
    }
    return ngmySlidesPdfEmbed(
      dataUrl: ref,
      pdfPage: element.pdfPage,
      fileName: element.fileName,
    );
  }
}

class NgmyShapePainter extends CustomPainter {
  NgmyShapePainter(this.element);
  final NgmySlideElement element;

  @override
  void paint(Canvas canvas, Size size) {
    final fill = Paint()..color = Color(element.fillColor);
    final stroke = Paint()
      ..color = Color(element.strokeColor)
      ..style = PaintingStyle.stroke
      ..strokeWidth = element.strokeWidth;
    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    switch (element.shape) {
      case NgmySlideShapeKind.rectangle:
        canvas.drawRect(rect, fill);
        canvas.drawRect(rect, stroke);
      case NgmySlideShapeKind.circle:
        canvas.drawOval(rect, fill);
        canvas.drawOval(rect, stroke);
      case NgmySlideShapeKind.triangle:
        final path = Path()
          ..moveTo(size.width / 2, 0)
          ..lineTo(size.width, size.height)
          ..lineTo(0, size.height)
          ..close();
        canvas.drawPath(path, fill);
        canvas.drawPath(path, stroke);
      case NgmySlideShapeKind.arrow:
        final path = Path()
          ..moveTo(0, size.height * 0.45)
          ..lineTo(size.width * 0.65, size.height * 0.45)
          ..lineTo(size.width * 0.65, size.height * 0.2)
          ..lineTo(size.width, size.height * 0.5)
          ..lineTo(size.width * 0.65, size.height * 0.8)
          ..lineTo(size.width * 0.65, size.height * 0.55)
          ..lineTo(0, size.height * 0.55)
          ..close();
        canvas.drawPath(path, fill);
        canvas.drawPath(path, stroke);
      case NgmySlideShapeKind.line:
        canvas.drawLine(Offset(0, size.height / 2), Offset(size.width, size.height / 2), stroke..strokeWidth = element.strokeWidth + 2);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyShapePainter oldDelegate) => oldDelegate.element != element;
}

Widget ngmyMiniSlidePreview(NgmySlide slide) {
  return LayoutBuilder(
    builder: (context, c) {
      final w = c.maxWidth;
      final h = c.maxHeight;
      return ClipRRect(
        borderRadius: BorderRadius.circular(6),
        child: DecoratedBox(
          decoration: BoxDecoration(
            gradient: slide.backgroundEnd != null
                ? LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(slide.background), Color(slide.backgroundEnd!)],
                  )
                : null,
            color: slide.backgroundEnd == null ? Color(slide.background) : null,
          ),
          child: Stack(
            children: slide.elements.take(6).map((e) {
              return Positioned(
                left: e.x * w,
                top: e.y * h,
                width: e.w * w,
                height: e.h * h,
                child: NgmySlideElementView(element: e, scale: w / 960),
              );
            }).toList(),
          ),
        ),
      );
    },
  );
}

String ngmySlideTransitionEmoji(NgmySlideTransition t) {
  switch (t) {
    case NgmySlideTransition.none:
      return '⏭️';
    case NgmySlideTransition.fade:
      return '🌫️';
    case NgmySlideTransition.slideLeft:
      return '⬅️';
    case NgmySlideTransition.slideRight:
      return '➡️';
    case NgmySlideTransition.slideUp:
      return '⬆️';
    case NgmySlideTransition.slideDown:
      return '⬇️';
    case NgmySlideTransition.zoom:
      return '🔍';
    case NgmySlideTransition.zoomOut:
      return '🔎';
    case NgmySlideTransition.flip:
      return '🔄';
    case NgmySlideTransition.flipVertical:
      return '🔃';
    case NgmySlideTransition.rotate3d:
      return '🎡';
    case NgmySlideTransition.cube:
      return '🧊';
    case NgmySlideTransition.blur:
      return '✨';
    case NgmySlideTransition.dissolve:
      return '💫';
  }
}
