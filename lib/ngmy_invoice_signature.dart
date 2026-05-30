import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// Opens a full-screen landscape signature pad (YouTube-style wide canvas).
Future<void> showNgmyFullscreenSignature(
  BuildContext context, {
  required String title,
  required List<Offset?> points,
  required void Function(List<Offset?> saved, Size canvasSize) onSave,
}) async {
  await showDialog<void>(
    context: context,
    barrierDismissible: false,
    builder: (ctx) => _FullscreenSignatureDialog(
      title: title,
      initialPoints: List<Offset?>.from(points),
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
      DeviceOrientation.landscapeLeft,
      DeviceOrientation.landscapeRight,
    ]);
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
  }

  @override
  void dispose() {
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    SystemChrome.setPreferredOrientations(DeviceOrientation.values);
    super.dispose();
  }

  void _done() {
    final box = _padKey.currentContext?.findRenderObject() as RenderBox?;
    final size = box?.size ?? const Size(600, 300);
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
                        Text('Landscape mode · sign with finger or stylus', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11)),
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
                child: _SignatureCanvas(
                  key: _padKey,
                  points: _points,
                  onChanged: () => setState(() {}),
                  borderColor: const Color(0xFF10B981),
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
                tooltip: 'Full screen sign (landscape)',
                visualDensity: VisualDensity.compact,
                onPressed: onFullscreen,
                icon: const Icon(Icons.screen_rotation_rounded, color: Color(0xFF10B981), size: 22),
              ),
            ],
          ),
          _SignatureCanvas(
            points: points,
            onChanged: onChanged,
            height: padHeight,
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

class _SignatureCanvas extends StatelessWidget {
  final List<Offset?> points;
  final VoidCallback onChanged;
  final double? height;
  final Color borderColor;

  const _SignatureCanvas({
    super.key,
    required this.points,
    required this.onChanged,
    this.height,
    this.borderColor = const Color(0xFFCBD5E1),
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (ctx, constraints) {
        final h = height ?? constraints.maxHeight;
        final w = constraints.maxWidth.isFinite ? constraints.maxWidth : double.infinity;
        return Container(
          height: height,
          width: w,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(height != null ? 8 : 16),
            border: Border.all(color: borderColor, width: height != null ? 1 : 2),
            boxShadow: height == null ? [BoxShadow(color: borderColor.withOpacity(0.2), blurRadius: 20)] : null,
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(height != null ? 7 : 14),
            child: GestureDetector(
              onPanStart: (d) {
                _addPoint(points, d.localPosition, Size(w, h));
                onChanged();
              },
              onPanUpdate: (d) {
                _addPoint(points, d.localPosition, Size(w, h));
                onChanged();
              },
              onPanEnd: (_) {
                points.add(null);
                onChanged();
              },
              child: CustomPaint(
                painter: NgmySignaturePainter(points, canvasSize: Size(w, h)),
                child: SizedBox(height: h, width: w),
              ),
            ),
          ),
        );
      },
    );
  }

  void _addPoint(List<Offset?> target, Offset local, Size size) {
    if (size.width <= 0 || size.height <= 0) return;
    target.add(Offset(local.dx / size.width, local.dy / size.height));
  }
}

class NgmySignaturePainter extends CustomPainter {
  final List<Offset?> points;
  final Color color;
  final Size canvasSize;

  NgmySignaturePainter(this.points, {this.color = const Color(0xFF0F172A), required this.canvasSize});

  @override
  void paint(Canvas canvas, Size size) {
    final fitted = fitSignatureToSize(points, size);
    final stroke = (2.8 * (size.shortestSide / 280)).clamp(2.0, 4.5);
    final paint = Paint()
      ..color = color
      ..strokeWidth = stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round
      ..style = PaintingStyle.stroke
      ..isAntiAlias = true;
    for (var i = 0; i < fitted.length - 1; i++) {
      final a = fitted[i];
      final b = fitted[i + 1];
      if (a != null && b != null) canvas.drawLine(a, b, paint);
    }
  }

  @override
  bool shouldRepaint(covariant NgmySignaturePainter oldDelegate) =>
      oldDelegate.points != points || oldDelegate.canvasSize != canvasSize;
}

bool signaturePointsLookNormalized(List<Offset?> points) {
  var maxV = 0.0;
  var hasPoint = false;
  for (final p in points) {
    if (p == null) continue;
    hasPoint = true;
    maxV = math.max(maxV, math.max(p.dx.abs(), p.dy.abs()));
  }
  return hasPoint && maxV <= 1.5;
}

List<Offset?> normalizeSignaturePoints(List<Offset?> src, Size size) {
  if (size.width <= 0 || size.height <= 0) return src;
  if (signaturePointsLookNormalized(src)) return src;
  return src.map((p) => p == null ? null : Offset(p.dx / size.width, p.dy / size.height)).toList();
}

List<Offset?> scaleSignaturePoints(List<Offset?> src, {required double scaleX, required double scaleY}) {
  if (signaturePointsLookNormalized(src)) return src;
  return src.map((p) => p == null ? null : Offset(p.dx * scaleX, p.dy * scaleY)).toList();
}

/// Fits normalized (or legacy pixel) signature strokes into [targetSize] preserving proportions.
List<Offset?> fitSignatureToSize(List<Offset?> rawPoints, Size targetSize, {Size legacySource = const Size(280, 120)}) {
  if (!rawPoints.any((p) => p != null) || targetSize.width <= 0 || targetSize.height <= 0) return rawPoints;

  List<Offset?> pixelPts;
  if (signaturePointsLookNormalized(rawPoints)) {
    pixelPts = rawPoints.map((p) => p == null ? null : Offset(p.dx * targetSize.width, p.dy * targetSize.height)).toList();
  } else {
    pixelPts = rawPoints
        .map((p) => p == null ? null : Offset(p.dx / legacySource.width * targetSize.width, p.dy / legacySource.height * targetSize.height))
        .toList();
  }

  var minX = double.infinity;
  var minY = double.infinity;
  var maxX = double.negativeInfinity;
  var maxY = double.negativeInfinity;
  for (final p in pixelPts) {
    if (p == null) continue;
    minX = math.min(minX, p.dx);
    minY = math.min(minY, p.dy);
    maxX = math.max(maxX, p.dx);
    maxY = math.max(maxY, p.dy);
  }
  final contentW = maxX - minX;
  final contentH = maxY - minY;
  if (contentW < 0.5 && contentH < 0.5) return pixelPts;

  const pad = 6.0;
  final availW = targetSize.width - pad * 2;
  final availH = targetSize.height - pad * 2;
  final scale = math.min(availW / contentW, availH / contentH);

  return pixelPts.map((p) {
    if (p == null) return null;
    final dx = (p.dx - minX) * scale + pad + (availW - contentW * scale) / 2;
    final dy = (p.dy - minY) * scale + pad + (availH - contentH * scale) / 2;
    return Offset(dx, dy);
  }).toList();
}

Widget previewSignature(List<Offset?> points, {double height = 48, Color color = const Color(0xFF0F172A)}) {
  if (!points.any((p) => p != null)) return SizedBox(height: height);
  return SizedBox(
    height: height,
    width: double.infinity,
    child: LayoutBuilder(
      builder: (_, c) => CustomPaint(
        painter: NgmySignaturePainter(points, color: color, canvasSize: Size(c.maxWidth, height)),
      ),
    ),
  );
}
