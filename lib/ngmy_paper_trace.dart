import 'dart:async';
import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:sensors_plus/sensors_plus.dart';

import 'ngmy_hub_form_ui.dart';
import 'ngmy_paper_trace_storage.dart';

Future<void> showNgmyPaperTraceDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Paper Trace',
    barrierColor: Colors.black.withValues(alpha: 0.88),
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (ctx, a1, a2) => _PaperTraceHub(userEmail: userEmail),
    transitionBuilder: (ctx, anim, _, child) {
      final slide = Tween<Offset>(begin: const Offset(0, 0.08), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(opacity: anim, child: SlideTransition(position: slide, child: child));
    },
  );
}

class _PaperTraceHub extends StatefulWidget {
  const _PaperTraceHub({required this.userEmail});

  final String userEmail;

  @override
  State<_PaperTraceHub> createState() => _PaperTraceHubState();
}

class _PaperTraceHubState extends State<_PaperTraceHub> {
  List<NgmyPaperTraceSession> _sessions = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await loadNgmyPaperTraceSessions(userEmail: widget.userEmail);
    if (!mounted) return;
    setState(() {
      _sessions = list;
      _loading = false;
    });
  }

  Future<void> _pickAndTrace(ImageSource source) async {
    final file = await ImagePicker().pickImage(source: source, imageQuality: 90, maxWidth: 2400);
    if (file == null || !mounted) return;
    final bytes = await file.readAsBytes();
    final b64 = 'data:image/jpeg;base64,${base64Encode(bytes)}';
    if (!mounted) return;
    await Navigator.of(context).push<void>(
      MaterialPageRoute(
        fullscreenDialog: true,
        builder: (_) => _PaperTraceStudio(
          userEmail: widget.userEmail,
          imageBase64: b64,
          title: 'Paper trace',
        ),
      ),
    );
    await _reload();
  }

  Future<void> _openSession(NgmyPaperTraceSession session) async {
    await Navigator.of(context).push<void>(
      MaterialPageRoute(
        fullscreenDialog: true,
        builder: (_) => _PaperTraceStudio(
          userEmail: widget.userEmail,
          imageBase64: session.imageBase64,
          title: session.title,
          sessionId: session.id,
        ),
      ),
    );
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final w = MediaQuery.of(context).size.width;
    final dialogW = w > 520 ? 500.0 : w - 20;

    return Center(
      child: Material(
        color: t.scaffold,
        borderRadius: BorderRadius.circular(20),
        clipBehavior: Clip.antiAlias,
        child: SizedBox(
          width: dialogW,
          height: MediaQuery.of(context).size.height * 0.82,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(8, 8, 12, 0),
                child: Row(
                  children: [
                    IconButton(
                      onPressed: () => Navigator.pop(context),
                      icon: Icon(Icons.close_rounded, color: t.iconButtonIcon),
                    ),
                    Expanded(
                      child: Text('Paper Trace', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 18)),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 0, 20, 12),
                child: Text(
                  'Upload a picture, open the camera, and trace on paper. The image stays synced as you move your phone.',
                  style: TextStyle(color: t.subtitle, fontSize: 13, height: 1.35),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  children: [
                    Expanded(
                      child: FilledButton.icon(
                        onPressed: () => _pickAndTrace(ImageSource.gallery),
                        icon: const Icon(Icons.photo_library_rounded, size: 20),
                        label: const Text('Upload photo'),
                        style: FilledButton.styleFrom(backgroundColor: const Color(0xFF38BDF8), padding: const EdgeInsets.symmetric(vertical: 12)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: () => _pickAndTrace(ImageSource.camera),
                        icon: const Icon(Icons.photo_camera_rounded, size: 20),
                        label: const Text('Camera'),
                        style: OutlinedButton.styleFrom(foregroundColor: const Color(0xFF38BDF8), padding: const EdgeInsets.symmetric(vertical: 12)),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 8),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Text('Saved traces', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 13)),
              ),
              if (_loading)
                const Expanded(child: Center(child: CircularProgressIndicator(color: Color(0xFF38BDF8))))
              else if (_sessions.isEmpty)
                Expanded(
                  child: Center(
                    child: Text('No traces yet.\nUpload a photo to start drawing.', textAlign: TextAlign.center, style: TextStyle(color: t.subtitle, height: 1.4)),
                  ),
                )
              else
                Expanded(
                  child: ListView.separated(
                    padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
                    itemCount: _sessions.length,
                    separatorBuilder: (_, _) => const SizedBox(height: 8),
                    itemBuilder: (context, i) {
                      final s = _sessions[i];
                      return Material(
                        color: t.categoryCardBg(const Color(0xFFF97316)),
                        borderRadius: BorderRadius.circular(14),
                        child: InkWell(
                          onTap: () => _openSession(s),
                          borderRadius: BorderRadius.circular(14),
                          child: Padding(
                            padding: const EdgeInsets.all(12),
                            child: Row(
                              children: [
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(10),
                                  child: _thumbFromB64(s.imageBase64, 52, 52),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(s.title, style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 14)),
                                      Text(
                                        '${s.createdAt.month}/${s.createdAt.day}/${s.createdAt.year}',
                                        style: TextStyle(color: t.subtitle, fontSize: 11),
                                      ),
                                    ],
                                  ),
                                ),
                                IconButton(
                                  onPressed: () async {
                                    await deleteNgmyPaperTraceSession(userEmail: widget.userEmail, id: s.id);
                                    await _reload();
                                  },
                                  icon: Icon(Icons.delete_outline_rounded, color: t.subtitle, size: 20),
                                ),
                              ],
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _thumbFromB64(String ref, double w, double h) {
    try {
      if (!ref.startsWith('data:image')) return Container(width: w, height: h, color: const Color(0xFFE2E8F0));
      final bytes = base64Decode(ref.split(',').last);
      return Image.memory(bytes, width: w, height: h, fit: BoxFit.cover);
    } catch (_) {
      return Container(width: w, height: h, color: const Color(0xFFE2E8F0));
    }
  }
}

class _DrawStroke {
  _DrawStroke({required this.color, required this.width, required this.points});

  final Color color;
  final double width;
  final List<Offset> points;
}

class _PaperTraceStudio extends StatefulWidget {
  const _PaperTraceStudio({
    required this.userEmail,
    required this.imageBase64,
    required this.title,
    this.sessionId,
  });

  final String userEmail;
  final String imageBase64;
  final String title;
  final String? sessionId;

  @override
  State<_PaperTraceStudio> createState() => _PaperTraceStudioState();
}

class _PaperTraceStudioState extends State<_PaperTraceStudio> {
  final _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.noDuplicates,
    facing: CameraFacing.back,
    torchEnabled: false,
  );
  final _captureKey = GlobalKey();
  final _strokes = <_DrawStroke>[];
  _DrawStroke? _active;

  StreamSubscription<AccelerometerEvent>? _accelSub;
  double _tiltX = 0;
  double _tiltY = 0;
  Offset _imageOffset = Offset.zero;
  double _imageScale = 1;
  double _scaleGestureStart = 1;
  Offset _panGestureStart = Offset.zero;
  double _imageOpacity = 0.55;
  bool _imageLocked = true;
  bool _eraser = false;
  Color _brushColor = Colors.black;
  double _brushWidth = 3;
  bool _cameraOk = true;
  bool _saving = false;

  Uint8List? _imageBytes;

  @override
  void initState() {
    super.initState();
    _loadImage();
    _startTiltSync();
  }

  void _loadImage() {
    try {
      if (widget.imageBase64.startsWith('data:image')) {
        _imageBytes = base64Decode(widget.imageBase64.split(',').last);
      }
    } catch (_) {}
  }

  void _startTiltSync() {
    if (kIsWeb) return;
    _accelSub = accelerometerEventStream(samplingPeriod: SensorInterval.uiInterval).listen((e) {
      if (!_imageLocked) return;
      setState(() {
        _tiltX = (_tiltX * 0.82 - e.x * 10).clamp(-48.0, 48.0);
        _tiltY = (_tiltY * 0.82 + e.y * 10).clamp(-48.0, 48.0);
      });
    });
  }

  @override
  void dispose() {
    _accelSub?.cancel();
    _camera.dispose();
    super.dispose();
  }

  void _onDrawStart(Offset local) {
    setState(() {
      _active = _DrawStroke(
        color: _eraser ? Colors.transparent : _brushColor,
        width: _eraser ? _brushWidth * 2.5 : _brushWidth,
        points: [local],
      );
      if (!_eraser) {
        _strokes.add(_active!);
      } else {
        _strokes.add(_active!);
      }
    });
  }

  void _onDrawUpdate(Offset local) {
    if (_active == null) return;
    setState(() => _active!.points.add(local));
  }

  void _onDrawEnd() => _active = null;

  Future<void> _save() async {
    if (_saving) return;
    setState(() => _saving = true);
    String? sketchB64;
    try {
      final boundary = _captureKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary != null) {
        final img = await boundary.toImage(pixelRatio: 2);
        final bytes = await img.toByteData(format: ui.ImageByteFormat.png);
        if (bytes != null) {
          sketchB64 = 'data:image/png;base64,${base64Encode(bytes.buffer.asUint8List())}';
        }
      }
    } catch (_) {}

    if (widget.sessionId == null) {
      await addNgmyPaperTraceSession(
        userEmail: widget.userEmail,
        title: widget.title,
        imageBase64: widget.imageBase64,
        sketchBase64: sketchB64,
      );
    }
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Trace saved')));
    Navigator.pop(context);
  }

  Widget _buildReferenceOverlay() {
    final size = MediaQuery.sizeOf(context);
    final baseW = size.width * 0.82;
    final baseH = size.height * 0.48;

    Widget img = Opacity(
      opacity: _imageOpacity,
      child: Image.memory(_imageBytes!, fit: BoxFit.contain, width: baseW, height: baseH),
    );

    img = Transform.translate(
      offset: Offset(_imageOffset.dx + (_imageLocked ? _tiltX : 0), _imageOffset.dy + (_imageLocked ? _tiltY : 0)),
      child: Transform.scale(scale: _imageScale, child: img),
    );

    if (!_imageLocked) {
      img = GestureDetector(
        onScaleStart: (d) {
          _scaleGestureStart = _imageScale;
          _panGestureStart = _imageOffset;
        },
        onScaleUpdate: (d) {
          setState(() {
            _imageScale = (_scaleGestureStart * d.scale).clamp(0.35, 2.5);
            _imageOffset = _panGestureStart + d.focalPointDelta;
          });
        },
        child: img,
      );
    }

    return Center(child: img);
  }

  @override
  Widget build(BuildContext context) {
    final top = MediaQuery.paddingOf(context).top;
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        fit: StackFit.expand,
        children: [
          if (_cameraOk)
            MobileScanner(
              controller: _camera,
              fit: BoxFit.cover,
              onDetect: (_) {},
              errorBuilder: (context, error, child) {
                WidgetsBinding.instance.addPostFrameCallback((_) {
                  if (mounted) setState(() => _cameraOk = false);
                });
                return const _PaperSurface();
              },
            )
          else
            const _PaperSurface(),
          RepaintBoundary(
            key: _captureKey,
            child: Stack(
              fit: StackFit.expand,
              children: [
                if (_imageBytes != null)
                  _buildReferenceOverlay(),
                Listener(
                  onPointerDown: (e) => _onDrawStart(e.localPosition),
                  onPointerMove: (e) => _onDrawUpdate(e.localPosition),
                  onPointerUp: (_) => _onDrawEnd(),
                  onPointerCancel: (_) => _onDrawEnd(),
                  child: CustomPaint(
                    painter: _SketchPainter(strokes: _strokes, active: _active, eraser: _eraser),
                    child: const SizedBox.expand(),
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            top: top + 8,
            left: 12,
            right: 12,
            child: Row(
              children: [
                IconButton.filled(
                  style: IconButton.styleFrom(backgroundColor: Colors.black54),
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.close_rounded, color: Colors.white),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    _imageLocked ? 'Trace mode — image synced to paper' : 'Drag to align image',
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
                IconButton.filled(
                  style: IconButton.styleFrom(backgroundColor: const Color(0xFF38BDF8)),
                  onPressed: _saving ? null : _save,
                  icon: _saving
                      ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : const Icon(Icons.check_rounded, color: Colors.white),
                ),
              ],
            ),
          ),
          Positioned(
            left: 12,
            right: 12,
            bottom: MediaQuery.paddingOf(context).bottom + 12,
            child: _TraceToolbar(
              opacity: _imageOpacity,
              brushWidth: _brushWidth,
              eraser: _eraser,
              locked: _imageLocked,
              color: _brushColor,
              onOpacity: (v) => setState(() => _imageOpacity = v),
              onBrush: (v) => setState(() => _brushWidth = v),
              onEraser: (v) => setState(() => _eraser = v),
              onLock: (v) => setState(() {
                _imageLocked = v;
                if (v) {
                  _tiltX = 0;
                  _tiltY = 0;
                }
              }),
              onColor: (c) => setState(() {
                _brushColor = c;
                _eraser = false;
              }),
              onClear: () => setState(_strokes.clear),
              onResetTilt: () => setState(() {
                _tiltX = 0;
                _tiltY = 0;
              }),
            ),
          ),
        ],
      ),
    );
  }
}

class _PaperSurface extends StatelessWidget {
  const _PaperSurface();

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _PaperGridPainter(),
      child: const ColoredBox(color: Color(0xFFFFFDF7)),
    );
  }
}

class _PaperGridPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFE7E5E4)
      ..strokeWidth = 0.5;
    const step = 24.0;
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (var y = 0.0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _SketchPainter extends CustomPainter {
  _SketchPainter({required this.strokes, required this.active, required this.eraser});

  final List<_DrawStroke> strokes;
  final _DrawStroke? active;
  final bool eraser;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.saveLayer(Offset.zero & size, Paint());
    for (final s in strokes) {
      if (s.points.length < 2) continue;
      final isEraser = s.color == Colors.transparent;
      final paint = Paint()
        ..color = isEraser ? Colors.black : s.color
        ..strokeWidth = s.width
        ..strokeCap = StrokeCap.round
        ..style = PaintingStyle.stroke
        ..blendMode = isEraser ? BlendMode.clear : BlendMode.srcOver;
      final path = Path()..moveTo(s.points.first.dx, s.points.first.dy);
      for (var i = 1; i < s.points.length; i++) {
        path.lineTo(s.points[i].dx, s.points[i].dy);
      }
      canvas.drawPath(path, paint);
    }
    canvas.restore();
    if (active != null && active!.points.length > 1 && active!.color != Colors.transparent) {
      final paint = Paint()
        ..color = active!.color
        ..strokeWidth = active!.width
        ..strokeCap = StrokeCap.round
        ..style = PaintingStyle.stroke;
      final path = Path()..moveTo(active!.points.first.dx, active!.points.first.dy);
      for (var i = 1; i < active!.points.length; i++) {
        path.lineTo(active!.points[i].dx, active!.points[i].dy);
      }
      canvas.drawPath(path, paint);
    }
  }

  @override
  bool shouldRepaint(covariant _SketchPainter old) => true;
}

class _TraceToolbar extends StatelessWidget {
  const _TraceToolbar({
    required this.opacity,
    required this.brushWidth,
    required this.eraser,
    required this.locked,
    required this.color,
    required this.onOpacity,
    required this.onBrush,
    required this.onEraser,
    required this.onLock,
    required this.onColor,
    required this.onClear,
    required this.onResetTilt,
  });

  final double opacity;
  final double brushWidth;
  final bool eraser;
  final bool locked;
  final Color color;
  final ValueChanged<double> onOpacity;
  final ValueChanged<double> onBrush;
  final ValueChanged<bool> onEraser;
  final ValueChanged<bool> onLock;
  final ValueChanged<Color> onColor;
  final VoidCallback onClear;
  final VoidCallback onResetTilt;

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: BoxDecoration(
        color: Colors.black.withValues(alpha: 0.72),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white24),
      ),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(
              children: [
                const Icon(Icons.opacity_rounded, color: Colors.white70, size: 16),
                Expanded(
                  child: Slider(
                    value: opacity,
                    min: 0.15,
                    max: 0.95,
                    onChanged: onOpacity,
                    activeColor: const Color(0xFF38BDF8),
                  ),
                ),
                IconButton(
                  tooltip: locked ? 'Unlock to move image' : 'Lock to paper',
                  onPressed: () => onLock(!locked),
                  icon: Icon(locked ? Icons.push_pin_rounded : Icons.open_with_rounded, color: locked ? const Color(0xFF34D399) : Colors.white),
                ),
                IconButton(
                  tooltip: 'Reset tilt',
                  onPressed: onResetTilt,
                  icon: const Icon(Icons.screen_rotation_alt_rounded, color: Colors.white70, size: 20),
                ),
              ],
            ),
            Row(
              children: [
                _colorDot(const Color(0xFF0F172A), color, onColor),
                _colorDot(const Color(0xFFDC2626), color, onColor),
                _colorDot(const Color(0xFF2563EB), color, onColor),
                _colorDot(const Color(0xFF16A34A), color, onColor),
                const SizedBox(width: 6),
                IconButton(
                  onPressed: () => onEraser(!eraser),
                  icon: Icon(Icons.auto_fix_off_rounded, color: eraser ? const Color(0xFFF97316) : Colors.white70, size: 20),
                ),
                Expanded(
                  child: Slider(
                    value: brushWidth,
                    min: 1.5,
                    max: 12,
                    onChanged: onBrush,
                    activeColor: const Color(0xFFF97316),
                  ),
                ),
                IconButton(
                  onPressed: onClear,
                  icon: const Icon(Icons.delete_sweep_outlined, color: Colors.white70, size: 20),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _colorDot(Color c, Color selected, ValueChanged<Color> onPick) {
    final on = c.toARGB32() == selected.toARGB32();
    return GestureDetector(
      onTap: () => onPick(c),
      child: Container(
        width: 24,
        height: 24,
        margin: const EdgeInsets.only(right: 6),
        decoration: BoxDecoration(
          color: c,
          shape: BoxShape.circle,
          border: Border.all(color: on ? const Color(0xFF38BDF8) : Colors.white38, width: on ? 2.5 : 1),
        ),
      ),
    );
  }
}
