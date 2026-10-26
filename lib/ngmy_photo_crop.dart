import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

/// Lets the person crop a picture: choose the shape, pinch or use the slider to zoom, drag to move.
/// Returns the cropped picture, the original when they choose "Use the whole picture", or null if they cancel.
Future<Uint8List?> showNgmyPhotoCrop(BuildContext context, Uint8List bytes, {double? aspect}) {
  return Navigator.of(context).push<Uint8List>(MaterialPageRoute(fullscreenDialog: true, builder: (_) => NgmyPhotoCropScreen(bytes: bytes, aspect: aspect)));
}

/// The crop shapes: label and width / height (null keeps the picture's own shape).
const List<(String, double?)> kNgmyCropShapes = [
  ('Original', null),
  ('Wide 16:9', 16 / 9),
  ('Landscape 3:2', 3 / 2),
  ('Photo 4:3', 4 / 3),
  ('Square', 1),
  ('Portrait 3:4', 3 / 4),
];

/// The part of the picture (in its own pixels) that a crop keeps.
Rect ngmyCropRect({required double imageW, required double imageH, required double aspect, required double zoom, required double centerX, required double centerY}) {
  var w = imageW, h = imageW / aspect;
  if (h > imageH) {
    h = imageH;
    w = imageH * aspect;
  }
  w /= zoom;
  h /= zoom;
  final cx = (centerX * imageW).clamp(w / 2, imageW - w / 2);
  final cy = (centerY * imageH).clamp(h / 2, imageH - h / 2);
  return Rect.fromLTWH(cx - w / 2, cy - h / 2, w, h);
}

class NgmyPhotoCropScreen extends StatefulWidget {
  const NgmyPhotoCropScreen({super.key, required this.bytes, this.aspect});
  final Uint8List bytes;
  final double? aspect;

  @override
  State<NgmyPhotoCropScreen> createState() => _NgmyPhotoCropScreenState();
}

class _NgmyPhotoCropScreenState extends State<NgmyPhotoCropScreen> {
  ui.Image? _img;
  int _shape = 0;
  double _zoom = 1;
  double _cx = 0.5, _cy = 0.5;
  double _zoom0 = 1;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    ui.instantiateImageCodec(widget.bytes).then((c) => c.getNextFrame()).then((f) {
      if (mounted) setState(() => _img = f.image);
    });
    if (widget.aspect != null) {
      final i = kNgmyCropShapes.indexWhere((s) => s.$2 != null && (s.$2! - widget.aspect!).abs() < 0.02);
      if (i >= 0) _shape = i;
    }
  }

  double get _aspect => kNgmyCropShapes[_shape].$2 ?? (_img == null ? 1 : _img!.width / _img!.height);

  Rect get _rect => ngmyCropRect(imageW: _img!.width.toDouble(), imageH: _img!.height.toDouble(), aspect: _aspect, zoom: _zoom, centerX: _cx, centerY: _cy);

  Future<void> _done() async {
    final img = _img;
    if (img == null || _busy) return;
    setState(() => _busy = true);
    try {
      final src = _rect;
      final outW = math.min(1600.0, src.width);
      final outH = outW * src.height / src.width;
      final rec = ui.PictureRecorder();
      final canvas = Canvas(rec);
      canvas.drawImageRect(img, src, Rect.fromLTWH(0, 0, outW, outH), Paint()..filterQuality = FilterQuality.high);
      final out = await rec.endRecording().toImage(outW.round(), outH.round());
      final data = await out.toByteData(format: ui.ImageByteFormat.png);
      if (mounted) Navigator.of(context).pop(data!.buffer.asUint8List());
    } catch (_) {
      if (mounted) {
        setState(() => _busy = false);
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Could not crop that picture.')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final img = _img;
    return Scaffold(
      backgroundColor: const Color(0xFF070B16),
      appBar: AppBar(
        backgroundColor: const Color(0xFF070B16),
        elevation: 0,
        leading: IconButton(icon: const Icon(Icons.close_rounded), onPressed: () => Navigator.of(context).pop()),
        title: const Text('Crop the picture', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
        centerTitle: true,
        actions: [TextButton(onPressed: _busy || img == null ? null : _done, child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)))],
      ),
      body: img == null
          ? const Center(child: CircularProgressIndicator())
          : Column(children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Center(
                    child: AspectRatio(
                      aspectRatio: _aspect,
                      child: LayoutBuilder(builder: (context, box) {
                        return GestureDetector(
                          onScaleStart: (_) => _zoom0 = _zoom,
                          onScaleUpdate: (d) {
                            setState(() {
                              _zoom = (_zoom0 * d.scale).clamp(1.0, 6.0);
                              final r = _rect;
                              // Dragging moves the picture under the frame.
                              _cx = (_cx - d.focalPointDelta.dx / box.maxWidth * r.width / img.width).clamp(0.0, 1.0);
                              _cy = (_cy - d.focalPointDelta.dy / box.maxHeight * r.height / img.height).clamp(0.0, 1.0);
                            });
                          },
                          child: Container(
                            decoration: BoxDecoration(border: Border.all(color: const Color(0xFFEC4899), width: 2.5)),
                            child: CustomPaint(size: Size.infinite, painter: _CropPainter(img, _rect)),
                          ),
                        );
                      }),
                    ),
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.fromLTRB(16, 10, 16, 16),
                color: const Color(0xFF0E1526),
                child: SafeArea(
                  top: false,
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    SizedBox(
                      height: 40,
                      child: ListView(scrollDirection: Axis.horizontal, children: [
                        for (var i = 0; i < kNgmyCropShapes.length; i++)
                          Padding(
                            padding: const EdgeInsets.only(right: 8),
                            child: ChoiceChip(
                              label: Text(kNgmyCropShapes[i].$1, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12.5)),
                              selected: _shape == i,
                              onSelected: (_) => setState(() => _shape = i),
                            ),
                          ),
                      ]),
                    ),
                    Row(children: [
                      const Icon(Icons.zoom_out_rounded, color: Colors.white54, size: 20),
                      Expanded(child: Slider(value: _zoom, min: 1, max: 6, onChanged: (v) => setState(() => _zoom = v))),
                      const Icon(Icons.zoom_in_rounded, color: Colors.white54, size: 20),
                    ]),
                    const Text('Drag the picture to move it. Pinch or use the slider to zoom.', style: TextStyle(color: Colors.white54, fontSize: 12)),
                    const SizedBox(height: 6),
                    TextButton(onPressed: () => Navigator.of(context).pop(widget.bytes), child: const Text('Use the whole picture')),
                  ]),
                ),
              ),
            ]),
    );
  }
}

class _CropPainter extends CustomPainter {
  _CropPainter(this.image, this.src);
  final ui.Image image;
  final Rect src;
  @override
  void paint(Canvas canvas, Size size) => canvas.drawImageRect(image, src, Offset.zero & size, Paint()..filterQuality = FilterQuality.medium);
  @override
  bool shouldRepaint(covariant _CropPainter old) => old.src != src || old.image != image;
}
