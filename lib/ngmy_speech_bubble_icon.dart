import 'package:flutter/material.dart';

/// Soft 3D speech-bubble icon (white messenger style) — vector, not a photo.
class NgmySpeechBubbleIcon extends StatelessWidget {
  const NgmySpeechBubbleIcon({super.key, this.size = 26});

  final double size;

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      size: Size(size, size),
      painter: const _NgmySpeechBubblePainter(),
    );
  }
}

class _NgmySpeechBubblePainter extends CustomPainter {
  const _NgmySpeechBubblePainter();

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;

    final bubble = Path()
      ..addRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(w * 0.1, h * 0.06, w * 0.8, h * 0.5),
          Radius.circular(h * 0.25),
        ),
      );

    final tail = Path()
      ..moveTo(w * 0.2, h * 0.54)
      ..quadraticBezierTo(w * 0.04, h * 0.72, w * 0.18, h * 0.9)
      ..quadraticBezierTo(w * 0.28, h * 0.68, w * 0.34, h * 0.56)
      ..close();

    final shape = Path.combine(PathOperation.union, bubble, tail);

    canvas.save();
    canvas.translate(0, 1.2);
    canvas.drawPath(
      shape,
      Paint()
        ..color = const Color(0x44000000)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2.5),
    );
    canvas.restore();

    canvas.drawPath(
      shape,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFFFFFFF), Color(0xFFF1F5F9), Color(0xFFDCE3EB)],
          stops: [0.0, 0.55, 1.0],
        ).createShader(Rect.fromLTWH(0, 0, w, h)),
    );

    canvas.drawPath(
      shape,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = w * 0.04
        ..color = const Color(0xFFB8C4D0),
    );

    final highlight = Path()
      ..addRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(w * 0.16, h * 0.12, w * 0.42, h * 0.14),
          Radius.circular(h * 0.08),
        ),
      );
    canvas.drawPath(
      highlight,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Colors.white.withValues(alpha: 0.85), Colors.white.withValues(alpha: 0.0)],
        ).createShader(Rect.fromLTWH(w * 0.16, h * 0.12, w * 0.42, h * 0.14)),
    );
  }

  @override
  bool shouldRepaint(covariant _NgmySpeechBubblePainter old) => false;
}
