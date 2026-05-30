import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// Opens a full-screen signature pad (portrait) for comfortable signing on phone.
Future<void> showNgmyFullscreenSignature(
  BuildContext context, {
  required String title,
  required List<Offset?> points,
  required void Function(List<Offset?> saved, Size canvasSize) onSave,
}) async {
  final working = List<Offset?>.from(points);
  await showDialog<void>(
    context: context,
    barrierDismissible: false,
    builder: (ctx) => _FullscreenSignatureDialog(
      title: title,
      initialPoints: working,
      onSave: onSave,
    ),
  );
}

class _FullscreenSignatureDialog extends StatefulWidget {
  final String title;
  final List<Offset?> initialPoints;
  final void Function(List<Offset?>, Size canvasSize) onSave;

  const _FullscreenSignatureDialog({
    required this.title,
    required this.initialPoints,
    required this.onSave,
  });

  @override
  State<_FullscreenSignatureDialog> createState() => _FullscreenSignatureDialogState();
}

class _FullscreenSignatureDialogState extends State<_FullscreenSignatureDialog> {
  late List<Offset?> _points;
  final GlobalKey _padKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    _points = List<Offset?>.from(widget.initialPoints);
    SystemChrome.setPreferredOrientations(const [
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
      DeviceOrientation.landscapeLeft,
      DeviceOrientation.landscapeRight,
    ]);
  }

  @override
  void dispose() {
    SystemChrome.setPreferredOrientations(DeviceOrientation.values);
    super.dispose();
  }

  void _done() {
    final box = _padKey.currentContext?.findRenderObject() as RenderBox?;
    final size = box?.size ?? const Size(400, 600);
    widget.onSave(List<Offset?>.from(_points), size);
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Dialog.fullscreen(
      backgroundColor: const Color(0xFF0A0F1C),
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 8, 0),
              child: Row(
                children: [
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close, color: Colors.white70)),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(widget.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                        Text('Rotate phone for wider space · sign with finger or stylus', style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 11)),
                      ],
                    ),
                  ),
                  TextButton(onPressed: () => setState(_points.clear), child: const Text('Clear')),
                  FilledButton(onPressed: _done, child: const Text('Done')),
                ],
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: Container(
                  key: _padKey,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: const Color(0xFF10B981), width: 2),
                    boxShadow: [BoxShadow(color: const Color(0xFF10B981).withOpacity(0.2), blurRadius: 20)],
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: GestureDetector(
                      onPanStart: (d) => setState(() => _points.add(d.localPosition)),
                      onPanUpdate: (d) => setState(() => _points.add(d.localPosition)),
                      onPanEnd: (_) => setState(() => _points.add(null)),
                      child: CustomPaint(
                        painter: NgmySignaturePainter(_points),
                        child: const SizedBox.expand(),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Inline signature pad with full-screen expand button.
class NgmyInvoiceSignaturePad extends StatelessWidget {
  final String title;
  final List<Offset?> points;
  final VoidCallback onChanged;
  final VoidCallback onClear;
  final VoidCallback onFullscreen;

  const NgmyInvoiceSignaturePad({
    super.key,
    required this.title,
    required this.points,
    required this.onChanged,
    required this.onClear,
    required this.onFullscreen,
  });

  static const padHeight = 120.0;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF0F1B33) : const Color(0xFFF3F6FF),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: isDark ? Colors.white24 : const Color(0xFFCAD6F3)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(child: Text(title, style: const TextStyle(fontWeight: FontWeight.w700))),
              IconButton(
                tooltip: 'Full screen sign',
                visualDensity: VisualDensity.compact,
                onPressed: onFullscreen,
                icon: const Icon(Icons.open_in_full_rounded, color: Color(0xFF10B981), size: 22),
              ),
            ],
          ),
          Container(
            height: padHeight,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: const Color(0xFFCBD5E1)),
            ),
            child: GestureDetector(
              onPanStart: (d) {
                points.add(d.localPosition);
                onChanged();
              },
              onPanUpdate: (d) {
                points.add(d.localPosition);
                onChanged();
              },
              onPanEnd: (_) {
                points.add(null);
                onChanged();
              },
              child: CustomPaint(
                painter: NgmySignaturePainter(points),
                child: const SizedBox.expand(),
              ),
            ),
          ),
          Align(
            alignment: Alignment.centerRight,
            child: TextButton(onPressed: onClear, child: const Text('Clear')),
          ),
        ],
      ),
    );
  }
}

class NgmySignaturePainter extends CustomPainter {
  final List<Offset?> points;
  final Color color;

  NgmySignaturePainter(this.points, {this.color = const Color(0xFF0F172A)});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round
      ..style = PaintingStyle.stroke;
    for (var i = 0; i < points.length - 1; i++) {
      final a = points[i];
      final b = points[i + 1];
      if (a != null && b != null) canvas.drawLine(a, b, paint);
    }
  }

  @override
  bool shouldRepaint(covariant NgmySignaturePainter oldDelegate) => true;
}

List<Offset?> scaleSignaturePoints(List<Offset?> src, {required double scaleX, required double scaleY}) {
  return src.map((p) => p == null ? null : Offset(p.dx * scaleX, p.dy * scaleY)).toList();
}

Widget previewSignature(List<Offset?> points, {double height = 36, Color color = const Color(0xFF0F172A)}) {
  if (!points.any((p) => p != null)) return SizedBox(height: height);
  final scale = height / NgmyInvoiceSignaturePad.padHeight;
  return SizedBox(
    height: height,
    width: double.infinity,
    child: CustomPaint(
      painter: NgmySignaturePainter(
        scaleSignaturePoints(points, scaleX: scale, scaleY: scale),
        color: color,
      ),
    ),
  );
}
