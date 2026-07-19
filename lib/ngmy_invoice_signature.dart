import 'dart:math' as math;
import 'package:flutter/material.dart';

/// Opens a full-screen signature pad, sized to the device's current
/// orientation (no forced rotation — see _FullscreenSignatureDialogState).
Future<void> showNgmyFullscreenSignature(
  BuildContext context, {
  required String title,
  required List<Offset?> points,
  required void Function(List<Offset?> saved, Size canvasSize, Color color, double strokeWidth) onSave,
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
  final void Function(List<Offset?>, Size canvasSize, Color color, double strokeWidth) onSave;

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

  static const _inkChoices = [Color(0xFF111827), Color(0xFF1D4ED8), Color(0xFF7F1D1D), Color(0xFF14532D)];
  static const _thicknessChoices = [2.2, 3.5, 5.2];
  Color _inkColor = _inkChoices.first;
  double _strokeWidth = _thicknessChoices[1];

  @override
  void initState() {
    super.initState();
    _points = List<Offset?>.from(widget.initialPoints);
    // Forcing a landscape orientation lock here (via the browser's Screen
    // Orientation API on web) only actually works inside true browser
    // fullscreen, which this dialog isn't — the attempted lock could fail
    // or half-apply, which is what made the canvas feel like it was
    // "moving" under the user's finger while signing. Just draw in
    // whatever orientation the device is already in.
  }

  void _done() {
    final box = _padKey.currentContext?.findRenderObject() as RenderBox?;
    final size = box?.size ?? const Size(600, 300);
    widget.onSave(List<Offset?>.from(_points), size, _inkColor, _strokeWidth);
    Navigator.pop(context);
  }

  Widget _inkSwatch(Color c) {
    final selected = c.toARGB32() == _inkColor.toARGB32();
    return GestureDetector(
      onTap: () => setState(() => _inkColor = c),
      child: Container(
        width: 22,
        height: 22,
        margin: const EdgeInsets.symmetric(horizontal: 3),
        decoration: BoxDecoration(
          color: c,
          shape: BoxShape.circle,
          border: Border.all(color: selected ? Colors.white : Colors.white24, width: selected ? 2.2 : 1),
          boxShadow: selected ? [const BoxShadow(color: Colors.black45, blurRadius: 4)] : null,
        ),
      ),
    );
  }

  Widget _thicknessDot(double w) {
    final selected = w == _strokeWidth;
    return GestureDetector(
      onTap: () => setState(() => _strokeWidth = w),
      child: Container(
        width: 30,
        height: 30,
        margin: const EdgeInsets.symmetric(horizontal: 3),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: selected ? Colors.white.withOpacity(0.14) : Colors.transparent,
          border: Border.all(color: selected ? const Color(0xFF10B981) : Colors.white24, width: selected ? 1.4 : 1),
        ),
        child: Container(
          width: (w * 1.6).clamp(4.0, 11.0),
          height: (w * 1.6).clamp(4.0, 11.0),
          decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // Sideways like a rotated video, without ever touching the OS/browser
    // orientation APIs (those don't reliably apply here, which was the
    // "screen moving" bug). RotatedBox just rotates the rendering — the
    // page stays in its natural portrait orientation the whole time, so
    // there's nothing for the browser to fight over, and Flutter transforms
    // touch hit-testing through the rotation automatically.
    return Dialog.fullscreen(
      backgroundColor: const Color(0xFF0A0F1C),
      child: RotatedBox(
        quarterTurns: 1,
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
                          Text('Sign with finger or stylus', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11)),
                        ],
                      ),
                    ),
                    TextButton(onPressed: () => setState(_points.clear), child: const Text('Clear')),
                    FilledButton(onPressed: _done, child: const Text('Done')),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(12, 6, 12, 0),
                child: Row(
                  children: [
                    Text('Ink', style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 10, fontWeight: FontWeight.w800)),
                    const SizedBox(width: 6),
                    ..._inkChoices.map(_inkSwatch),
                    const SizedBox(width: 14),
                    Text('Thickness', style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 10, fontWeight: FontWeight.w800)),
                    const SizedBox(width: 6),
                    ..._thicknessChoices.map(_thicknessDot),
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
                    inkColor: _inkColor,
                    strokeWidthBase: _strokeWidth,
                  ),
                ),
              ),
            ],
          ),
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
  final Color inkColor;
  final double strokeWidthBase;

  const _SignatureCanvas({
    super.key,
    required this.points,
    required this.onChanged,
    this.height,
    this.borderColor = const Color(0xFFCBD5E1),
    this.inkColor = const Color(0xFF0F172A),
    this.strokeWidthBase = 3.5,
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
                painter: NgmySignaturePainter(points, canvasSize: Size(w, h), liveDraw: true, color: inkColor, strokeWidthBase: strokeWidthBase),
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
  // While actively drawing, points must render at a fixed 1:1 scale against
  // the canvas — fitSignatureToSize's "fit to content's bounding box,
  // centered" logic recomputes on every repaint as the box grows with each
  // new stroke, which rescales everything already drawn smaller and smaller.
  // That's what read as "zooming out" while signing. Only use the
  // fit-to-box behavior for a static, already-finished preview.
  final bool liveDraw;
  final double strokeWidthBase;

  NgmySignaturePainter(
    this.points, {
    this.color = const Color(0xFF0F172A),
    required this.canvasSize,
    this.liveDraw = false,
    this.strokeWidthBase = 2.8,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final fitted = liveDraw
        ? points.map((p) => p == null ? null : Offset(p.dx * size.width, p.dy * size.height)).toList()
        : fitSignatureToSize(points, size);
    final stroke = (strokeWidthBase * (size.shortestSide / 280)).clamp(2.0, 8.0);
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
      oldDelegate.points != points ||
      oldDelegate.canvasSize != canvasSize ||
      oldDelegate.color != color ||
      oldDelegate.strokeWidthBase != strokeWidthBase;
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
