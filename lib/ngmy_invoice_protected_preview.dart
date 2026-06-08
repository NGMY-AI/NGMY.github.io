import 'package:flutter/material.dart';

/// Watermarked preview — discourages unpaid screenshot use of premium invoice templates.
class NgmyInvoiceProtectedPreview extends StatelessWidget {
  const NgmyInvoiceProtectedPreview({
    super.key,
    required this.locked,
    required this.child,
  });

  final bool locked;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    if (!locked) return child;
    return Stack(
      children: [
        child,
        Positioned.fill(
          child: IgnorePointer(
            child: CustomPaint(
              painter: _PreviewWatermarkPainter(),
            ),
          ),
        ),
        Positioned(
          left: 8,
          right: 8,
          bottom: 8,
          child: IgnorePointer(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: BoxDecoration(
                color: Colors.black.withValues(alpha: 0.72),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: const Color(0xFFD4AF37).withValues(alpha: 0.55)),
              ),
              child: const Text(
                'PREVIEW ONLY — Pay to edit, save, or download',
                textAlign: TextAlign.center,
                style: TextStyle(color: Color(0xFFFDE68A), fontSize: 10, fontWeight: FontWeight.w800),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class _PreviewWatermarkPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final text = TextSpan(
      text: 'PREVIEW',
      style: TextStyle(
        color: Colors.white.withValues(alpha: 0.08),
        fontSize: size.width * 0.12,
        fontWeight: FontWeight.w900,
        letterSpacing: 4,
      ),
    );
    final tp = TextPainter(text: text, textDirection: TextDirection.ltr)..layout();
    canvas.save();
    canvas.translate(size.width * 0.5, size.height * 0.5);
    canvas.rotate(-0.35);
    tp.paint(canvas, Offset(-tp.width / 2, -tp.height / 2));
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _PreviewWatermarkPainter old) => false;
}
