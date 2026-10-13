import 'package:flutter/material.dart';

/// A modern message icon: a soft white speech bubble with three typing dots,
/// drawn (not a font glyph), in the style of today's chat apps.
class NgmyModernChatIcon extends StatelessWidget {
  const NgmyModernChatIcon({super.key, this.size = 22, this.dotColor = const Color(0xFF6366F1), this.bubbleColor = Colors.white});
  final double size;
  final Color dotColor;
  final Color bubbleColor;

  @override
  Widget build(BuildContext context) => CustomPaint(size: Size.square(size), painter: _ChatPainter(bubbleColor, dotColor));
}

class _ChatPainter extends CustomPainter {
  _ChatPainter(this.bubble, this.dots);
  final Color bubble;
  final Color dots;

  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final h = s.height;
    final body = RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.04, h * 0.1, w * 0.92, h * 0.68), Radius.circular(w * 0.3));
    final tail = Path()
      ..moveTo(w * 0.2, h * 0.68)
      ..quadraticBezierTo(w * 0.2, h * 0.92, w * 0.06, h * 0.96)
      ..quadraticBezierTo(w * 0.36, h * 0.94, w * 0.46, h * 0.74)
      ..close();
    final shape = Path()
      ..addRRect(body)
      ..addPath(tail, Offset.zero);
    canvas.drawShadow(shape, Colors.black, 1.5, false);
    canvas.drawPath(shape, Paint()..color = bubble);
    final r = w * 0.075;
    for (final x in [0.31, 0.5, 0.69]) {
      canvas.drawCircle(Offset(w * x, h * 0.44), r, Paint()..color = dots);
    }
  }

  @override
  bool shouldRepaint(covariant _ChatPainter old) => old.bubble != bubble || old.dots != dots;
}
