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
    case NgmySlideTransition.wipeLeft:
      return '🧹';
    case NgmySlideTransition.wipeRight:
      return '🧽';
    case NgmySlideTransition.bounce:
      return '🏀';
    case NgmySlideTransition.push:
      return '👉';
    case NgmySlideTransition.flash:
      return '⚡';
    case NgmySlideTransition.spiral:
      return '🌀';
    case NgmySlideTransition.swing:
      return '🎢';
    case NgmySlideTransition.curtain:
      return '🎭';
  }
}

/// Preview a transition animation, then optionally apply it.
Future<void> showNgmyTransitionPreview(
  BuildContext context, {
  required NgmySlideTransition transition,
  required VoidCallback onApply,
}) async {
  await showDialog<void>(
    context: context,
    barrierColor: Colors.black87,
    builder: (ctx) => _TransitionPreviewDialog(transition: transition, onApply: () {
      Navigator.pop(ctx);
      onApply();
    }),
  );
}

class _TransitionPreviewDialog extends StatefulWidget {
  const _TransitionPreviewDialog({required this.transition, required this.onApply});
  final NgmySlideTransition transition;
  final VoidCallback onApply;

  @override
  State<_TransitionPreviewDialog> createState() => _TransitionPreviewDialogState();
}

class _TransitionPreviewDialogState extends State<_TransitionPreviewDialog> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  var _playing = true;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  Widget _buildSlide(String label, Color color) {
    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [color, color.withValues(alpha: 0.7)]),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Center(child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
    );
  }

  Widget _animatedPreview() {
    final out = _buildSlide('Slide A', const Color(0xFF2563EB));
    final inn = _buildSlide('Slide B', const Color(0xFF059669));
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (context, _) {
        final t = _ctrl.value;
        switch (widget.transition) {
          case NgmySlideTransition.none:
            return inn;
          case NgmySlideTransition.fade:
          case NgmySlideTransition.dissolve:
            return Stack(children: [out, Opacity(opacity: t, child: inn)]);
          case NgmySlideTransition.slideLeft:
          case NgmySlideTransition.push:
            return Stack(children: [out, Transform.translate(offset: Offset((1 - t) * 220, 0), child: inn)]);
          case NgmySlideTransition.slideRight:
            return Stack(children: [out, Transform.translate(offset: Offset(-(1 - t) * 220, 0), child: inn)]);
          case NgmySlideTransition.slideUp:
          case NgmySlideTransition.curtain:
            return Stack(children: [out, Transform.translate(offset: Offset(0, (1 - t) * 140), child: inn)]);
          case NgmySlideTransition.slideDown:
            return Stack(children: [out, Transform.translate(offset: Offset(0, -(1 - t) * 140), child: inn)]);
          case NgmySlideTransition.zoom:
            return Stack(children: [out, Transform.scale(scale: 0.6 + t * 0.4, child: Opacity(opacity: t, child: inn))]);
          case NgmySlideTransition.zoomOut:
            return Stack(children: [out, Transform.scale(scale: 1.3 - t * 0.3, child: Opacity(opacity: t, child: inn))]);
          case NgmySlideTransition.flip:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateY(t * 3.14159),
              child: t < 0.5 ? out : inn,
            );
          case NgmySlideTransition.flipVertical:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateX(t * 3.14159),
              child: t < 0.5 ? out : inn,
            );
          case NgmySlideTransition.rotate3d:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..setEntry(3, 2, 0.002)..rotateY(t * 1.2)..rotateX(t * 0.5),
              child: Opacity(opacity: 0.4 + t * 0.6, child: inn),
            );
          case NgmySlideTransition.cube:
            return Transform(
              alignment: Alignment.centerRight,
              transform: Matrix4.identity()..setEntry(3, 2, 0.002)..rotateY(-t * 1.4),
              child: Opacity(opacity: t, child: inn),
            );
          case NgmySlideTransition.blur:
            return Stack(children: [out, Opacity(opacity: t, child: Transform.scale(scale: 1.02 - t * 0.02, child: inn))]);
          case NgmySlideTransition.wipeLeft:
            return Stack(children: [out, ClipRect(clipper: _WipeClipper(t), child: inn)]);
          case NgmySlideTransition.wipeRight:
            return Stack(children: [out, ClipRect(clipper: _WipeClipper(1 - t), child: inn)]);
          case NgmySlideTransition.bounce:
            final bounce = Curves.bounceOut.transform(t);
            return Stack(children: [out, Transform.scale(scale: 0.5 + bounce * 0.5, child: Opacity(opacity: t, child: inn))]);
          case NgmySlideTransition.flash:
            return Stack(children: [out, Opacity(opacity: t < 0.15 ? 1 : t, child: ColoredBox(color: Colors.white.withValues(alpha: t < 0.15 ? 0.9 : 0), child: inn))]);
          case NgmySlideTransition.spiral:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..rotateZ(t * 6.28)..scale(t, t),
              child: inn,
            );
          case NgmySlideTransition.swing:
            return Transform.rotate(angle: (t - 0.5) * 0.35, child: Stack(children: [out, Opacity(opacity: t, child: inn)]));
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: const Color(0xFF111827),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('${ngmySlideTransitionEmoji(widget.transition)} Preview', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
            const SizedBox(height: 14),
            SizedBox(width: 280, height: 160, child: ClipRRect(borderRadius: BorderRadius.circular(12), child: _animatedPreview())),
            const SizedBox(height: 16),
            Row(
              children: [
                TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
                const Spacer(),
                FilledButton(onPressed: widget.onApply, child: const Text('Use transition')),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _WipeClipper extends CustomClipper<Rect> {
  _WipeClipper(this.progress);
  final double progress;

  @override
  Rect getClip(Size size) => Rect.fromLTWH(0, 0, size.width * progress.clamp(0, 1), size.height);

  @override
  bool shouldReclip(covariant _WipeClipper oldClipper) => oldClipper.progress != progress;
}
