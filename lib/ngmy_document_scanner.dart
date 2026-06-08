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
      pageBuilder: (context, animation, secondaryAnimation) => _NgmyDocumentScannerPage(
        geminiApiKey: geminiApiKey,
        refreshApiKey: refreshApiKey,
      ),
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        final slide = Tween<Offset>(begin: const Offset(0, 0.08), end: Offset.zero)
            .animate(CurvedAnimation(parent: animation, curve: Curves.easeOutCubic));
        return FadeTransition(opacity: animation, child: SlideTransition(position: slide, child: child));
      },
    ),
  );
}

class _ScannedPage {
  _ScannedPage({required this.bytes, this.path});

  final Uint8List bytes;
  final String? path;
  final String mime = 'image/jpeg';
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

  static const double _emptyFrameHeight = 128;
  static const double _filledMaxHeight = 280;

  final _picker = ImagePicker();
  final _questionC = TextEditingController();

  late final AnimationController _ambient;
  late final AnimationController _framePulse;
  late final AnimationController _inner3d;
  late final AnimationController _flagFx;

  final List<_ScannedPage> _pages = [];
  bool _analyzing = false;
  String? _result;
  String? _error;
  /// `en` = English, `sw` = Swahili (Kiswahili).
  String _responseLanguage = 'en';

  bool get _hasPages => _pages.isNotEmpty;

  @override
  void initState() {
    super.initState();
    _ambient = AnimationController(vsync: this, duration: const Duration(seconds: 14))..repeat();
    _framePulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _inner3d = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();
    _flagFx = AnimationController(vsync: this, duration: const Duration(milliseconds: 520));
  }

  @override
  void dispose() {
    _ambient.dispose();
    _framePulse.dispose();
    _inner3d.dispose();
    _flagFx.dispose();
    _questionC.dispose();
    super.dispose();
  }

  int get _slotsLeft => 2 - _pages.length;

  Future<void> _addImages(List<XFile> files) async {
    if (files.isEmpty) return;
    final take = files.length > _slotsLeft ? files.sublist(0, _slotsLeft) : files;
    try {
      for (final file in take) {
        final bytes = await file.readAsBytes();
        _pages.add(_ScannedPage(bytes: bytes, path: kIsWeb ? null : file.path));
      }
      if (!mounted) return;
      setState(() {
        _result = null;
        _error = null;
      });
      if (files.length > _slotsLeft && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Only 2 documents at a time — extra files were skipped.')),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Could not load image: $e')),
        );
      }
    }
  }

  Future<void> _pickCamera() async {
    if (_slotsLeft <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('You already have 2 documents. Remove one to add another.')),
      );
      return;
    }
    final file = await _picker.pickImage(source: ImageSource.camera, imageQuality: 82, maxWidth: 2000);
    if (file != null) await _addImages([file]);
  }

  Future<void> _pickGallery() async {
    if (_slotsLeft <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('You already have 2 documents. Remove one to add another.')),
      );
      return;
    }
    try {
      final files = await _picker.pickMultiImage(
        imageQuality: 82,
        maxWidth: 2000,
        limit: _slotsLeft,
      );
      await _addImages(files);
    } catch (_) {
      final file = await _picker.pickImage(source: ImageSource.gallery, imageQuality: 82, maxWidth: 2000);
      if (file != null) await _addImages([file]);
    }
  }

  void _removePage(int index) {
    setState(() {
      _pages.removeAt(index);
      _result = null;
    });
  }

  Future<void> _analyze() async {
    if (_pages.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Add one or two document photos first.')),
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
          _error = 'AI is not connected. Ask an admin to save an AI API key in Admin → Management Hub.';
          _analyzing = false;
        });
        return;
      }

      final images = _pages.map((p) => (bytes: p.bytes, mimeType: p.mime)).toList();
      final scan = await geminiAnalyzeImages(
        apiKey: apiKey,
        images: images,
        prompt: ngmyDocumentScanPrompt(userQuestion: _questionC.text, pageCount: _pages.length, languageCode: _responseLanguage),
      );

      if (!mounted) return;
      setState(() {
        _analyzing = false;
        if (scan.text != null && scan.text!.isNotEmpty) {
          _result = scan.text;
        } else {
          final err = (scan.error ?? '').trim();
          if (err.contains('proxy not deployed') || err.contains('404')) {
            _error = 'Document Scanner needs the ngmy-ai-chat Supabase function (same as NGMY Helper). Ask admin to deploy it, then reload.';
          } else if (err.contains('Network') || err.contains('Failed to fetch') || err.contains('CORS')) {
            _error = 'Network blocked the scan. Reload the page or try again on the NGMY app.';
          } else if (err.isNotEmpty) {
            _error = err.length > 220 ? '${err.substring(0, 220)}…' : err;
          } else {
            _error = 'Could not read this document. Try again or use a closer, flatter photo.';
          }
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
          boxShadow: [BoxShadow(color: _violet.withValues(alpha: 0.65), blurRadius: 8 + pulse * 6)],
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

  Widget _scanFrame({required Widget child, required bool compact}) {
    return AnimatedBuilder(
      animation: _framePulse,
      builder: (context, _) {
        final glow = 0.35 + _framePulse.value * 0.45;
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.0016)
            ..rotateX(compact ? 0.03 : 0.04)
            ..rotateY(compact ? -0.02 : -0.03),
          child: Container(
            width: double.infinity,
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
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: compact ? 8 : 10),
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

  Widget _frameInterior3D() {
    return AnimatedBuilder(
      animation: _inner3d,
      builder: (context, _) {
        final t = _inner3d.value * math.pi * 2;
        final scanY = (math.sin(t * 1.2) + 1) / 2;

        Widget miniPage(double phase, Color accent) {
          final bob = math.sin(t + phase) * 5;
          final tiltX = 0.55 + math.sin(t * 0.9 + phase) * 0.18;
          final tiltY = -0.35 + math.cos(t * 0.7 + phase) * 0.22;
          return Transform.translate(
            offset: Offset(0, bob),
            child: Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.004)
                ..rotateX(tiltX)
                ..rotateY(tiltY)
                ..rotateZ(math.sin(t + phase) * 0.06),
              child: Container(
                width: 52,
                height: 66,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [accent.withValues(alpha: 0.95), accent.withValues(alpha: 0.55)],
                  ),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.65), width: 1.5),
                  boxShadow: [
                    BoxShadow(color: accent.withValues(alpha: 0.55), blurRadius: 16, offset: const Offset(0, 8)),
                    BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 6)),
                  ],
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.article_rounded, color: Colors.white.withValues(alpha: 0.9), size: 22),
                    const SizedBox(height: 4),
                    Container(
                      width: 30,
                      height: 3,
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.35),
                        borderRadius: BorderRadius.circular(2),
                      ),
                    ),
                    const SizedBox(height: 3),
                    Container(
                      width: 24,
                      height: 3,
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.22),
                        borderRadius: BorderRadius.circular(2),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        }

        return SizedBox(
          height: _emptyFrameHeight - 24,
          width: double.infinity,
          child: Stack(
            alignment: Alignment.center,
            clipBehavior: Clip.none,
            children: [
              Positioned.fill(
                child: CustomPaint(painter: _HoloGridPainter(t: t)),
              ),
              for (var i = 0; i < 8; i++)
                Positioned(
                  left: 20 + (i % 4) * 28.0 + math.sin(t + i) * 4,
                  top: 18 + (i ~/ 4) * 36.0 + math.cos(t * 0.8 + i) * 3,
                  child: Container(
                    width: 4,
                    height: 4,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Color.lerp(_cyan, _pink, (i % 3) / 2.0)!.withValues(alpha: 0.45),
                      boxShadow: [BoxShadow(color: _violet.withValues(alpha: 0.6), blurRadius: 6)],
                    ),
                  ),
                ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  miniPage(0, _cyan),
                  const SizedBox(width: 22),
                  miniPage(1.4, _violet),
                ],
              ),
              Positioned(
                left: 24,
                right: 24,
                top: 8 + scanY * (_emptyFrameHeight - 48),
                child: Container(
                  height: 3,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(2),
                    gradient: LinearGradient(
                      colors: [
                        Colors.transparent,
                        _mint.withValues(alpha: 0.9),
                        _cyan.withValues(alpha: 0.95),
                        _mint.withValues(alpha: 0.9),
                        Colors.transparent,
                      ],
                    ),
                    boxShadow: [
                      BoxShadow(color: _mint.withValues(alpha: 0.65), blurRadius: 12, spreadRadius: 1),
                    ],
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _emptyFrameContent() {
    return SizedBox(
      width: double.infinity,
      height: _emptyFrameHeight - 12,
      child: _frameInterior3D(),
    );
  }

  String get _flagEmoji => _responseLanguage == 'sw' ? '🇹🇿' : '🇺🇸';

  Future<void> _toggleLanguageFlag() async {
    if (_analyzing) return;
    await _flagFx.forward(from: 0);
    if (!mounted) return;
    setState(() => _responseLanguage = _responseLanguage == 'en' ? 'sw' : 'en');
    _flagFx.reset();
  }

  Widget _magicLanguageFlag() {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _toggleLanguageFlag,
        customBorder: const CircleBorder(),
        child: AnimatedBuilder(
          animation: _flagFx,
          builder: (context, child) {
            final t = Curves.easeInOutCubic.transform(_flagFx.value);
            final spin = t * math.pi;
            final scale = 1.0 + math.sin(t * math.pi) * 0.22;
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.002)
                ..rotateY(spin)
                ..scale(scale, scale, 1.0),
              child: Container(
                width: 44,
                height: 44,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(color: _cyan.withValues(alpha: 0.35 * t), blurRadius: 16 + 8 * t),
                    BoxShadow(color: _violet.withValues(alpha: 0.28 * t), blurRadius: 12),
                  ],
                ),
                child: child,
              ),
            );
          },
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 280),
            transitionBuilder: (child, anim) => ScaleTransition(scale: anim, child: child),
            child: Text(_flagEmoji, key: ValueKey<String>(_responseLanguage), style: const TextStyle(fontSize: 28)),
          ),
        ),
      ),
    );
  }

  Widget _filledPreview() {
    if (_pages.length == 1) {
      Widget img;
      final p = _pages.first;
      if (p.path != null && !kIsWeb) {
        img = Image.file(File(p.path!), fit: BoxFit.contain);
      } else {
        img = Image.memory(p.bytes, fit: BoxFit.contain);
      }
      return Stack(
        children: [
          ConstrainedBox(
            constraints: const BoxConstraints(maxHeight: _filledMaxHeight),
            child: ClipRRect(borderRadius: BorderRadius.circular(12), child: img),
          ),
          Positioned(
            top: 6,
            right: 6,
            child: _removeChip(0),
          ),
        ],
      );
    }

    return ConstrainedBox(
      constraints: const BoxConstraints(maxHeight: _filledMaxHeight),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          for (var i = 0; i < _pages.length; i++) ...[
            if (i > 0) const SizedBox(width: 8),
            Expanded(
              child: Stack(
                fit: StackFit.expand,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(12),
                    child: _pages[i].path != null && !kIsWeb
                        ? Image.file(File(_pages[i].path!), fit: BoxFit.cover)
                        : Image.memory(_pages[i].bytes, fit: BoxFit.cover),
                  ),
                  Positioned(top: 4, right: 4, child: _removeChip(i)),
                  Positioned(
                    bottom: 4,
                    left: 4,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        color: Colors.black.withValues(alpha: 0.55),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        'Page ${i + 1}',
                        style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w800),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _removeChip(int index) {
    return Material(
      color: Colors.black54,
      shape: const CircleBorder(),
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: () => _removePage(index),
        child: const Padding(
          padding: EdgeInsets.all(4),
          child: Icon(Icons.close_rounded, color: Colors.white, size: 16),
        ),
      ),
    );
  }

  Widget _modernChatPrefix() {
    return Padding(
      padding: const EdgeInsets.only(left: 10, right: 6),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: Image.asset(
          'assets/images/ngmy_document_ask_icon.png',
          width: 28,
          height: 28,
          fit: BoxFit.cover,
        ),
      ),
    );
  }

  Widget _actionButton({
    required String label,
    required IconData icon,
    required List<Color> colors,
    required VoidCallback? onTap,
    String? sublabel,
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
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(icon, color: Colors.white, size: 22),
                    const SizedBox(width: 8),
                    Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                  ],
                ),
                if (sublabel != null)
                  Padding(
                    padding: const EdgeInsets.only(top: 2),
                    child: Text(sublabel, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 10)),
                  ),
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
        border: Border.all(color: (borderColors?.first ?? Colors.white).withValues(alpha: 0.28)),
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
        final slotHint = _slotsLeft == 2 ? '2 pages' : '1 more';

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
                          _magicLanguageFlag(),
                        ],
                      ),
                    ),
                    Expanded(
                      child: SingleChildScrollView(
                        padding: const EdgeInsets.fromLTRB(18, 0, 18, 28),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            _heroOrb(t),
                            const SizedBox(height: 4),
                            ShaderMask(
                              shaderCallback: (bounds) => const LinearGradient(colors: [_cyan, _mint, _violet]).createShader(bounds),
                              child: const Text(
                                'Snap · Scan · Understand',
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white, letterSpacing: 0.5),
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text(
                              'Family-friendly AI reads your papers and highlights what matters.',
                              textAlign: TextAlign.center,
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 13, height: 1.35),
                            ),
                            const SizedBox(height: 18),
                            _scanFrame(
                              compact: !_hasPages,
                              child: _hasPages ? _filledPreview() : _emptyFrameContent(),
                            ),
                            if (!_hasPages) ...[
                              const SizedBox(height: 14),
                              Text(
                                'Place your document in the frame',
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Colors.white.withValues(alpha: 0.78),
                                  fontWeight: FontWeight.w800,
                                  fontSize: 13.5,
                                ),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                'Up to 2 pages · camera or gallery',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.48), fontSize: 11.5),
                              ),
                            ],
                            const SizedBox(height: 14),
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Expanded(
                                  child: _actionButton(
                                    label: 'Camera',
                                    icon: Icons.photo_camera_rounded,
                                    colors: const [Color(0xFF059669), Color(0xFF10B981)],
                                    onTap: _analyzing ? null : _pickCamera,
                                    sublabel: _slotsLeft > 0 ? slotHint : 'Full',
                                  ),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: _actionButton(
                                    label: 'Gallery',
                                    icon: Icons.photo_library_rounded,
                                    colors: const [Color(0xFF6366F1), Color(0xFF8B5CF6)],
                                    onTap: _analyzing ? null : _pickGallery,
                                    sublabel: _slotsLeft > 0 ? 'Up to 2' : 'Full',
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
                                  hintText: 'Ask anything about your document(s)…',
                                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.38)),
                                  border: InputBorder.none,
                                  prefixIcon: _modernChatPrefix(),
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
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(18),
                                    gradient: LinearGradient(
                                      colors: _analyzing
                                          ? [Colors.grey.shade700, Colors.grey.shade800]
                                          : const [Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFF8B5CF6)],
                                    ),
                                    boxShadow: [
                                      BoxShadow(color: _pink.withValues(alpha: 0.45), blurRadius: 20, offset: const Offset(0, 8)),
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
                                        _analyzing
                                            ? 'Reading your document${_pages.length > 1 ? 's' : ''}…'
                                            : 'Scan & summarize',
                                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16),
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
                                    Expanded(child: Text(_error!, style: const TextStyle(color: Colors.redAccent, fontSize: 13, height: 1.4))),
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
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                                      decoration: BoxDecoration(
                                        color: _mint.withValues(alpha: 0.2),
                                        borderRadius: BorderRadius.circular(20),
                                        border: Border.all(color: _mint.withValues(alpha: 0.5)),
                                      ),
                                      child: Text(
                                        _pages.length > 1 ? 'AI Summary · ${_pages.length} pages' : 'AI Summary',
                                        style: const TextStyle(color: _mint, fontWeight: FontWeight.w800, fontSize: 11),
                                      ),
                                    ),
                                    const SizedBox(height: 12),
                                    SelectableText(_result!, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.5)),
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

class _HoloGridPainter extends CustomPainter {
  _HoloGridPainter({required this.t});

  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFF22D3EE).withValues(alpha: 0.08)
      ..strokeWidth = 1;

    const step = 22.0;
    final offset = (t * 40) % step;
    for (var x = -step; x < size.width + step; x += step) {
      canvas.drawLine(Offset(x + offset, 0), Offset(x + offset, size.height), paint);
    }
    for (var y = -step; y < size.height + step; y += step) {
      canvas.drawLine(Offset(0, y + offset * 0.6), Offset(size.width, y + offset * 0.6), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _HoloGridPainter old) => old.t != t;
}
