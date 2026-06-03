import 'package:flutter/material.dart';

/// Teal gradient circle + white speech-bubble outline (matches Invest / nVest UI).
class NgmyMessengerBubbleIcon extends StatelessWidget {
  const NgmyMessengerBubbleIcon({
    super.key,
    this.size = 40,
    this.showShadow = true,
  });

  final double size;
  final bool showShadow;

  static const LinearGradient gradient = LinearGradient(
    begin: Alignment.bottomLeft,
    end: Alignment.topRight,
    colors: [Color(0xFF0D9488), Color(0xFF14B8A6), Color(0xFF5EEAD4)],
  );

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          if (showShadow)
            Positioned(
              left: size * 0.1,
              top: size * 0.14,
              child: Container(
                width: size * 0.88,
                height: size * 0.88,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: const Color(0xFF99F6E4).withValues(alpha: 0.5),
                ),
              ),
            ),
          Container(
            width: size,
            height: size,
            decoration: const BoxDecoration(shape: BoxShape.circle, gradient: gradient),
            child: CustomPaint(
              painter: NgmySpeechOutlinePainter(strokeWidth: size * 0.042),
            ),
          ),
        ],
      ),
    );
  }
}

class NgmySpeechOutlinePainter extends CustomPainter {
  NgmySpeechOutlinePainter({required this.strokeWidth});

  final double strokeWidth;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.white
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    final cx = size.width * 0.48;
    final cy = size.height * 0.4;
    final r = size.width * 0.26;
    canvas.drawCircle(Offset(cx, cy), r, paint);

    final tail = Path()
      ..moveTo(cx - r * 0.5, cy + r * 0.65)
      ..quadraticBezierTo(cx - r * 1.0, cy + r * 1.05, cx - r * 0.12, cy + r * 0.9);
    canvas.drawPath(tail, paint);
  }

  @override
  bool shouldRepaint(covariant NgmySpeechOutlinePainter old) => old.strokeWidth != strokeWidth;
}
