import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_gemini_vision.dart';

/// N-Services — document scanner (tap **N** in NGMY Services).
void showNgmyDocumentScanner(
  BuildContext context, {
  required String geminiApiKey,
  required Future<String> Function() refreshApiKey,
}) {
  Navigator.of(context).push(
    PageRouteBuilder<void>(
      fullscreenDialog: true,
      transitionDuration: const Duration(milliseconds: 420),
      reverseTransitionDuration: const Duration(milliseconds: 320),
      pageBuilder: (_, __, ___) => _NgmyDocumentScannerPage(
        geminiApiKey: geminiApiKey,
        refreshApiKey: refreshApiKey,
      ),
      transitionsBuilder: (_, anim, __, child) {
        final slide = Tween<Offset>(begin: const Offset(0, 0.08), end: Offset.zero)
            .animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
        return FadeTransition(
          opacity: anim,
          child: SlideTransition(position: slide, child: child),
        );
      },
    ),
  );
}

class _NgmyDocumentScannerPage extends StatefulWidget {
  const _NgmyDocumentScannerPage({
    required this.geminiApiKey,
    required this.refreshApiKey,
  });

  final String geminiApiKey;
  final Future<String> Function() refreshApiKey;

  @override
  State<_NgmyDocumentScannerPage> createState() => _NgmyDocumentScannerPageState();
}

class _NgmyDocumentScannerPageState extends State<_NgmyDocumentScannerPage> with TickerProviderStateMixin {
  static const _mint = Color(0xFF34D399);
  static const _cyan = Color(0xFF22D3EE);
  static const _violet = Color(0xFF8B5CF6);
  static const _pink = Color(0xFFF472B6);

  final _picker = ImagePicker();
  final _questionC = TextEditingController();

  late final AnimationController _ambient;
  late final AnimationController _framePulse;

  Uint8List? _bytes;
  String? _mime;
  String? _previewPath;
  bool _analyzing = false;
  String? _result;
  String? _error;

  @override
  void initState() {
    super.initState();
    _ambient = AnimationController(vsync: this, duration: const Duration(seconds: 14))..repeat();
    _framePulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _ambient.dispose();
    _framePulse.dispose();
    _questionC.dispose();
    super.dispose();
  }

  Future<void> _pick(ImageSource source) async {
    try {
      final file = await _picker.pickImage(source: source, imageQuality: 82, maxWidth: 2000);
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (!mounted) return;
      setState(() {
        _bytes = bytes;
        _mime = 'image/jpeg';
        _result = null;
        _error = null;
        _previewPath = kIsWeb ? null : file.path;
      });
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Could not load image: $e')),
        );
      }
    }
  }

  Future<void> _analyze() async {
    if (_bytes == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Take or choose a photo of your document first.')),
      );
      return;
    }

    setState(() {
      _analyzing = true;
      _error = null;
      _result = null;
    });

    try {
      var apiKey = widget.geminiApiKey.trim();
      if (apiKey.isEmpty) apiKey = (await widget.refreshApiKey()).trim();
      if (apiKey.isEmpty) {
        setState(() {
          _error = 'AI is not connected. Ask an admin to save the Gemini API key in Admin → Management Hub.';
          _analyzing = false;
        });
        return;
      }

      final reply = await geminiAnalyzeImage(
        apiKey: apiKey,
        imageBytes: _bytes!,
        mimeType: _mime ?? 'image/jpeg',
        prompt: ngmyDocumentScanPrompt(userQuestion: _questionC.text),
      );

      if (!mounted) return;
      setState(() {
        _analyzing = false;
        if (reply != null && reply.isNotEmpty) {
          _result = reply;
        } else {
          _error = 'Could not read this document clearly. Try brighter light or a flatter photo.';
        }
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _analyzing = false;
        _error = 'Something went wrong: $e';
      });
    }
  }

  Widget _orbitSparkle(double angle, double pulse, int i, double size) {
    final r = size * 0.55;
    return Transform.translate(
      offset: Offset(math.cos(angle) * r, math.sin(angle) * r),
      child: Container(
        width: 6 + pulse * 4,
        height: 6 + pulse * 4,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Color.lerp(_cyan, _pink, (i % 4) / 3.0)!.withValues(alpha: 0.5 + pulse * 0.45),
          boxShadow: [
            BoxShadow(color: _violet.withValues(alpha: 0.65), blurRadius: 8 + pulse * 6),
          ],
        ),
      ),
    );
  }

  Widget _heroOrb(double t) {
    const s = 72.0;
    final idle = t * math.pi * 2;
    final pulse = (math.sin(idle) + 1) * 0.5;
    final bob = math.sin(idle * 1.4) * 6;
    final orbit = idle * 0.85;

    return SizedBox(
      height: 130,
      child: Stack(
        alignment: Alignment.center,
        clipBehavior: Clip.none,
        children: [
          Container(
            width: 100,
            height: 100,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(color: _violet.withValues(alpha: 0.35 + pulse * 0.25), blurRadius: 36, spreadRadius: 4),
                BoxShadow(color: _cyan.withValues(alpha: 0.22 + pulse * 0.2), blurRadius: 28, spreadRadius: 2),
              ],
            ),
          ),
          for (var i = 0; i < 10; i++) _orbitSparkle(orbit + i * math.pi / 5, pulse, i, s),
          Transform.translate(
            offset: Offset(0, bob),
            child: Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.0028)
                ..rotateX(0.42 + math.sin(idle) * 0.12)
                ..rotateY(0.35 + math.sin(idle * 0.8) * 0.2)
                ..rotateZ(math.sin(idle * 0.5) * 0.08),
              child: Container(
                width: s,
                height: s * 1.12,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(18),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF4F46E5), Color(0xFF7C3AED), Color(0xFF06B6D4)],
                  ),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.55), width: 2),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 18, offset: const Offset(0, 10)),
                    BoxShadow(color: _mint.withValues(alpha: 0.35), blurRadius: 20, spreadRadius: 1),
                  ],
                ),
                child: const Icon(Icons.description_rounded, color: Colors.white, size: 40),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _scanFrame({required Widget child}) {
    return AnimatedBuilder(
      animation: _framePulse,
      builder: (context, _) {
        final glow = 0.35 + _framePulse.value * 0.45;
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.0016)
            ..rotateX(0.04)
            ..rotateY(-0.03),
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(22),
              boxShadow: [
                BoxShadow(color: _cyan.withValues(alpha: glow * 0.35), blurRadius: 24, spreadRadius: 1),
                BoxShadow(color: _violet.withValues(alpha: glow * 0.28), blurRadius: 18),
              ],
            ),
            child: CustomPaint(
              painter: _ScanCornerPainter(progress: _framePulse.value),
              child: Container(
                margin: const EdgeInsets.all(3),
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(18),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      Colors.white.withValues(alpha: 0.12),
                      Colors.white.withValues(alpha: 0.04),
                    ],
                  ),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.22 + glow * 0.2)),
                ),
                child: child,
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _previewContent() {
    if (_bytes == null) {
      return SizedBox(
        height: 210,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.document_scanner_rounded, size: 52, color: Colors.white.withValues(alpha: 0.4)),
            const SizedBox(height: 12),
            Text(
              'Place your document in the frame',
              style: TextStyle(
                color: Colors.white.withValues(alpha: 0.65),
                fontWeight: FontWeight.w700,
                fontSize: 14,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              'Receipts · letters · forms · homework',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12),
            ),
          ],
        ),
      );
    }

    Widget img;
    if (_previewPath != null && !kIsWeb) {
      img = Image.file(File(_previewPath!), fit: BoxFit.contain);
    } else {
      img = Image.memory(_bytes!, fit: BoxFit.contain);
    }

    return ConstrainedBox(
      constraints: const BoxConstraints(maxHeight: 280),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(12),
        child: img,
      ),
    );
  }

  Widget _actionButton({
    required String label,
    required IconData icon,
    required List<Color> colors,
    required VoidCallback? onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            gradient: LinearGradient(colors: colors),
            boxShadow: [
              BoxShadow(color: colors.last.withValues(alpha: 0.45), blurRadius: 14, offset: const Offset(0, 6)),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 14),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, color: Colors.white, size: 22),
                const SizedBox(width: 8),
                Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _glassCard({required Widget child, List<Color>? borderColors}) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Colors.white.withValues(alpha: 0.14),
            Colors.white.withValues(alpha: 0.05),
          ],
        ),
        border: Border.all(
          color: (borderColors?.first ?? Colors.white).withValues(alpha: 0.28),
        ),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 16, offset: const Offset(0, 8)),
        ],
      ),
      child: child,
    );
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _ambient,
      builder: (context, _) {
        final t = _ambient.value;
        final bgShift = math.sin(t * math.pi * 2) * 0.08;

        return Scaffold(
          body: Stack(
            fit: StackFit.expand,
            children: [
              Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment(-0.8 + bgShift, -1),
                    end: Alignment(1.2 - bgShift, 1),
                    colors: const [
                      Color(0xFF0F172A),
                      Color(0xFF1E1B4B),
                      Color(0xFF134E4A),
                      Color(0xFF312E81),
                    ],
                  ),
                ),
              ),
              ...List.generate(8, (i) {
                final a = t * math.pi * 2 + i * 0.9;
                return Positioned(
                  left: MediaQuery.sizeOf(context).width * (0.1 + (i % 4) * 0.22) + math.cos(a) * 12,
                  top: 80 + (i * 70.0) + math.sin(a) * 18,
                  child: Opacity(
                    opacity: 0.12 + (i % 3) * 0.04,
                    child: Transform.rotate(
                      angle: a * 0.3,
                      child: Icon(
                        i.isEven ? Icons.auto_awesome : Icons.star_rounded,
                        color: i.isEven ? _cyan : _pink,
                        size: 20 + (i % 3) * 6,
                      ),
                    ),
                  ),
                );
              }),
              SafeArea(
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(8, 4, 8, 0),
                      child: Row(
                        children: [
                          IconButton(
                            icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white),
                            onPressed: () => Navigator.pop(context),
                          ),
                          const Expanded(
                            child: Text(
                              'Document Scanner',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w900,
                                fontSize: 18,
                                letterSpacing: 0.3,
                              ),
                            ),
                          ),
                          const SizedBox(width: 48),
                        ],
                      ),
                    ),
                    Expanded(
                      child: SingleChildScrollView(
                        padding: const EdgeInsets.fromLTRB(18, 0, 18, 28),
                        child: Column(
                          children: [
                            _heroOrb(t),
                            const SizedBox(height: 4),
                            ShaderMask(
                              shaderCallback: (bounds) => const LinearGradient(
                                colors: [_cyan, _mint, _violet],
                              ).createShader(bounds),
                              child: const Text(
                                'Snap · Scan · Understand',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.w800,
                                  color: Colors.white,
                                  letterSpacing: 0.5,
                                ),
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text(
                              'Family-friendly AI reads your papers and highlights what matters.',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white.withValues(alpha: 0.72),
                                fontSize: 13,
                                height: 1.35,
                              ),
                            ),
                            const SizedBox(height: 18),
                            _scanFrame(child: _previewContent()),
                            const SizedBox(height: 14),
                            Row(
                              children: [
                                Expanded(
                                  child: _actionButton(
                                    label: 'Camera',
                                    icon: Icons.photo_camera_rounded,
                                    colors: const [Color(0xFF059669), Color(0xFF10B981)],
                                    onTap: _analyzing ? null : () => _pick(ImageSource.camera),
                                  ),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: _actionButton(
                                    label: 'Gallery',
                                    icon: Icons.photo_library_rounded,
                                    colors: const [Color(0xFF6366F1), Color(0xFF8B5CF6)],
                                    onTap: _analyzing ? null : () => _pick(ImageSource.gallery),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 14),
                            _glassCard(
                              child: TextField(
                                controller: _questionC,
                                maxLines: 2,
                                style: const TextStyle(color: Colors.white, fontSize: 14),
                                decoration: InputDecoration(
                                  hintText: 'Ask anything about this document (optional)',
                                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.38)),
                                  border: InputBorder.none,
                                  prefixIcon: Icon(Icons.chat_bubble_outline_rounded, color: _cyan.withValues(alpha: 0.85)),
                                ),
                              ),
                            ),
                            const SizedBox(height: 14),
                            Material(
                              color: Colors.transparent,
                              child: InkWell(
                                onTap: _analyzing ? null : _analyze,
                                borderRadius: BorderRadius.circular(18),
                                child: Ink(
                                  width: double.infinity,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(18),
                                    gradient: LinearGradient(
                                      colors: _analyzing
                                          ? [Colors.grey.shade700, Colors.grey.shade800]
                                          : const [Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFF8B5CF6)],
                                    ),
                                    boxShadow: [
                                      BoxShadow(
                                        color: _pink.withValues(alpha: 0.45),
                                        blurRadius: 20,
                                        offset: const Offset(0, 8),
                                      ),
                                    ],
                                  ),
                                  padding: const EdgeInsets.symmetric(vertical: 16),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      if (_analyzing)
                                        const SizedBox(
                                          width: 22,
                                          height: 22,
                                          child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white),
                                        )
                                      else
                                        const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 24),
                                      const SizedBox(width: 10),
                                      Text(
                                        _analyzing ? 'Reading your document…' : 'Scan & summarize',
                                        style: const TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.w900,
                                          fontSize: 16,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                            if (_error != null) ...[
                              const SizedBox(height: 16),
                              _glassCard(
                                borderColors: const [Colors.redAccent],
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Icon(Icons.info_outline_rounded, color: Colors.redAccent, size: 20),
                                    const SizedBox(width: 10),
                                    Expanded(
                                      child: Text(_error!, style: const TextStyle(color: Colors.redAccent, fontSize: 13, height: 1.4)),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                            if (_result != null) ...[
                              const SizedBox(height: 16),
                              _glassCard(
                                borderColors: const [_mint],
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      children: [
                                        Container(
                                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                                          decoration: BoxDecoration(
                                            color: _mint.withValues(alpha: 0.2),
                                            borderRadius: BorderRadius.circular(20),
                                            border: Border.all(color: _mint.withValues(alpha: 0.5)),
                                          ),
                                          child: const Text(
                                            'AI Summary',
                                            style: TextStyle(color: _mint, fontWeight: FontWeight.w800, fontSize: 11),
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(height: 12),
                                    SelectableText(
                                      _result!,
                                      style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.5),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

/// Animated corner brackets around the scan area.
class _ScanCornerPainter extends CustomPainter {
  _ScanCornerPainter({required this.progress});

  final double progress;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Color.lerp(const Color(0xFF22D3EE), const Color(0xFFA78BFA), progress)!
      ..strokeWidth = 3.2
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    const len = 28.0;
    const inset = 6.0;
    final w = size.width;
    final h = size.height;

    void corner(Offset o, bool top, bool left) {
      final dx = left ? 1.0 : -1.0;
      final dy = top ? 1.0 : -1.0;
      canvas.drawLine(o, o + Offset(len * dx, 0), paint);
      canvas.drawLine(o, o + Offset(0, len * dy), paint);
    }

    corner(const Offset(inset, inset), true, true);
    corner(Offset(w - inset, inset), true, false);
    corner(Offset(inset, h - inset), false, true);
    corner(Offset(w - inset, h - inset), false, false);
  }

  @override
  bool shouldRepaint(covariant _ScanCornerPainter old) => old.progress != progress;
}
