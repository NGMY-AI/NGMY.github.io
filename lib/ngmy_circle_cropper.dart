import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image/image.dart' as img;

/// Which square of the picture (in image pixels) sits inside the round frame.
///
/// The picture is first drawn to cover a [viewport]-sized square
/// ([baseScale] = cover scale), then the user's pan/zoom moves it:
/// `screen = zoom * picturePoint + (tx, ty)`.
({int x, int y, int size}) ngmyCircleCropRect({
  required int imageWidth,
  required int imageHeight,
  required double viewport,
  required double zoom,
  required double tx,
  required double ty,
}) {
  final baseScale = math.max(viewport / imageWidth, viewport / imageHeight);
  final z = zoom <= 0 ? 1.0 : zoom;
  final sidePx = (viewport / z) / baseScale;
  var x = ((-tx) / z) / baseScale;
  var y = ((-ty) / z) / baseScale;
  final int size = sidePx.round().clamp(1, math.min(imageWidth, imageHeight)).toInt();
  x = x.clamp(0, (imageWidth - size).toDouble());
  y = y.clamp(0, (imageHeight - size).toDouble());
  return (x: x.round(), y: y.round(), size: size);
}

/// Opens a round crop screen. The user drags and pinches the photo until it
/// fills the circle the way they want; returns a square JPEG of exactly what
/// is inside the circle (or null if they cancel).
Future<Uint8List?> showNgmyCircleCropper(BuildContext context, Uint8List raw, {int outputSize = 600}) async {
  img.Image? decoded;
  try {
    decoded = img.decodeImage(raw);
  } catch (_) {
    decoded = null;
  }
  if (decoded == null) return null;
  // Apply the camera's rotation tag, and keep it small enough to move smoothly.
  var source = img.bakeOrientation(decoded);
  const maxSide = 1400;
  if (source.width > maxSide || source.height > maxSide) {
    source = img.copyResize(
      source,
      width: source.width >= source.height ? maxSide : null,
      height: source.height > source.width ? maxSide : null,
    );
  }
  final shown = Uint8List.fromList(img.encodeJpg(source, quality: 90));
  if (!context.mounted) return null;
  final picture = source;
  return Navigator.of(context).push<Uint8List>(
    MaterialPageRoute(
      fullscreenDialog: true,
      builder: (_) => _CircleCropScreen(picture: picture, shownBytes: shown, outputSize: outputSize),
    ),
  );
}

class _CircleCropScreen extends StatefulWidget {
  const _CircleCropScreen({required this.picture, required this.shownBytes, required this.outputSize});

  final img.Image picture;
  final Uint8List shownBytes;
  final int outputSize;

  @override
  State<_CircleCropScreen> createState() => _CircleCropScreenState();
}

class _CircleCropScreenState extends State<_CircleCropScreen> {
  final _controller = TransformationController();
  double? _viewport;

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _center(double viewport) {
    if (_viewport == viewport) return;
    final first = _viewport == null;
    _viewport = viewport;
    if (!first) {
      // Frame size changed (rotation): re-center after this layout.
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) _applyCenter(viewport);
      });
      return;
    }
    _applyCenter(viewport);
  }

  void _applyCenter(double viewport) {
    final w = widget.picture.width.toDouble();
    final h = widget.picture.height.toDouble();
    final base = math.max(viewport / w, viewport / h);
    final dx = -(w * base - viewport) / 2;
    final dy = -(h * base - viewport) / 2;
    _controller.value = Matrix4.identity()..translate(dx, dy);
  }

  void _done() {
    final viewport = _viewport;
    if (viewport == null) return;
    final m = _controller.value;
    final t = m.getTranslation();
    final rect = ngmyCircleCropRect(
      imageWidth: widget.picture.width,
      imageHeight: widget.picture.height,
      viewport: viewport,
      zoom: m.getMaxScaleOnAxis(),
      tx: t.x,
      ty: t.y,
    );
    var square = img.copyCrop(widget.picture, x: rect.x, y: rect.y, width: rect.size, height: rect.size);
    if (square.width > widget.outputSize) {
      square = img.copyResize(square, width: widget.outputSize, height: widget.outputSize);
    }
    Navigator.of(context).pop(Uint8List.fromList(img.encodeJpg(square, quality: 82)));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        title: const Text('Fit your photo', style: TextStyle(fontWeight: FontWeight.w800)),
        actions: [
          TextButton(
            onPressed: _done,
            child: const Text('Use photo', style: TextStyle(color: Color(0xFF38BDF8), fontWeight: FontWeight.w900, fontSize: 15)),
          ),
        ],
      ),
      body: LayoutBuilder(
        builder: (context, box) {
          final viewport = math.min(box.maxWidth - 32, box.maxHeight - 140).clamp(200.0, 420.0);
          _center(viewport);
          final w = widget.picture.width.toDouble();
          final h = widget.picture.height.toDouble();
          final base = math.max(viewport / w, viewport / h);
          return Column(
            children: [
              const SizedBox(height: 24),
              Center(
                child: SizedBox(
                  width: viewport,
                  height: viewport,
                  child: Stack(
                    children: [
                      ClipRect(
                        child: InteractiveViewer(
                          transformationController: _controller,
                          constrained: false,
                          minScale: 1,
                          maxScale: 6,
                          boundaryMargin: EdgeInsets.zero,
                          child: SizedBox(
                            width: w * base,
                            height: h * base,
                            child: Image.memory(widget.shownBytes, fit: BoxFit.fill, gaplessPlayback: true),
                          ),
                        ),
                      ),
                      // Dark corners with a clear circle: what is inside is kept.
                      IgnorePointer(
                        child: CustomPaint(size: Size(viewport, viewport), painter: _CircleMaskPainter()),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 18),
              const Text(
                'Drag to move · pinch to zoom',
                style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 4),
              const Text(
                'Everything inside the circle is your profile photo.',
                style: TextStyle(color: Colors.white38, fontSize: 12),
              ),
            ],
          );
        },
      ),
    );
  }
}

class _CircleMaskPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final full = Path()..addRect(Offset.zero & size);
    final hole = Path()..addOval(Offset.zero & size);
    canvas.drawPath(
      Path.combine(PathOperation.difference, full, hole),
      Paint()..color = Colors.black.withValues(alpha: 0.62),
    );
    canvas.drawOval(
      (Offset.zero & size).deflate(1),
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = Colors.white.withValues(alpha: 0.9),
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
