import 'dart:async';
import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_document_translate_chat.dart';
import 'ngmy_document_scan_payments.dart';
import 'ngmy_gemini_vision.dart';
import 'ngmy_modern_chat_prefix.dart';

/// N-Services — document scanner (tap **N** in NGMY Services).
void showNgmyDocumentScanner(
  BuildContext context, {
  required String geminiApiKey,
  required Future<String> Function() refreshApiKey,
  dynamic user,
  dynamic config,
  Future<bool> Function(double amount, String description)? onCharge,
  VoidCallback? onDataChanged,
  Future<bool> Function()? onPersistConfig,
}) {
  Navigator.of(context).push(
    PageRouteBuilder<void>(
      fullscreenDialog: true,
      transitionDuration: const Duration(milliseconds: 420),
      reverseTransitionDuration: const Duration(milliseconds: 320),
      pageBuilder: (context, animation, secondaryAnimation) => _NgmyDocumentScannerPage(
        geminiApiKey: geminiApiKey,
        refreshApiKey: refreshApiKey,
        user: user,
        config: config,
        onCharge: onCharge,
        onDataChanged: onDataChanged,
        onPersistConfig: onPersistConfig,
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
    this.user,
    this.config,
    this.onCharge,
    this.onDataChanged,
    this.onPersistConfig,
  });

  final String geminiApiKey;
  final Future<String> Function() refreshApiKey;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description)? onCharge;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

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
  static const _languagePrefsKey = 'ngmy_document_scan_response_lang_v1';

  final _picker = ImagePicker();
  final _questionC = TextEditingController();
  final _scrollC = ScrollController();
  final _latestAnswerKey = GlobalKey();

  late final AnimationController _ambient;
  late final AnimationController _framePulse;
  late final AnimationController _inner3d;
  late final AnimationController _flagFx;

  final List<_ScannedPage> _pages = [];
  bool _analyzing = false;
  String? _result;
  String? _error;
  /// Cached AI analysis of current pages — used for follow-up Q&A without re-scanning.
  String? _documentContext;
  int _scannedPagesFingerprint = 0;
  final List<({String question, String answer})> _followUps = [];
  /// Follow-up questions since the last scan charge (2 questions = 1 scan).
  int _questionsSinceLastScanCharge = 0;
  /// `en` = English, `sw` = Swahili (Kiswahili).
  String _responseLanguage = 'en';
  int? _remainingFreeScans;
  bool _hasPaidScanAccess = false;
  bool _isAdminUser = false;

  bool get _hasPages => _pages.isNotEmpty;

  bool get _hasDocumentContext => _documentContext != null && _documentContext!.trim().isNotEmpty;

  bool get _pagesMatchScan =>
      _hasDocumentContext && _scannedPagesFingerprint == _pagesFingerprint;

  bool get _canAskFollowUp =>
      _pagesMatchScan && _questionC.text.trim().isNotEmpty;

  int get _pagesFingerprint {
    var fp = _pages.length;
    for (final p in _pages) {
      fp = fp * 31 + p.bytes.length;
    }
    return fp;
  }

  @override
  void initState() {
    super.initState();
    _ambient = AnimationController(vsync: this, duration: const Duration(seconds: 14))..repeat();
    _framePulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _inner3d = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();
    _flagFx = AnimationController(vsync: this, duration: const Duration(milliseconds: 520));
    unawaited(_loadSavedLanguage());
    unawaited(_refreshScanUsage());
  }

  Future<void> _loadSavedLanguage() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final saved = prefs.getString(_languagePrefsKey);
      if (saved == 'en' || saved == 'sw') {
        if (mounted) setState(() => _responseLanguage = saved!);
      }
    } catch (_) {}
  }

  Future<void> _persistLanguage() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_languagePrefsKey, _responseLanguage);
    } catch (_) {}
  }

  Future<void> _refreshScanUsage() async {
    final user = widget.user;
    final config = widget.config;
    if (user == null || config == null) return;
    final email = ((user as dynamic).email as String?) ?? '';
    if (email.isEmpty) return;
    final isAdmin = (user as dynamic).isAdmin == true;
    final remaining = await NgmyDocumentScanPayments.remainingFree(config, email, isAdmin: isAdmin);
    final paid = NgmyDocumentScanPayments.hasActiveAccess(config, email);
    if (!mounted) return;
    setState(() {
      _remainingFreeScans = remaining;
      _hasPaidScanAccess = paid;
      _isAdminUser = isAdmin;
    });
  }

  void _clearDocumentContext() {
    _documentContext = null;
    _scannedPagesFingerprint = 0;
    _followUps.clear();
    _questionsSinceLastScanCharge = 0;
  }

  @override
  void dispose() {
    _ambient.dispose();
    _framePulse.dispose();
    _inner3d.dispose();
    _flagFx.dispose();
    _questionC.dispose();
    _scrollC.dispose();
    super.dispose();
  }

  Future<bool> _ensureScanAccess() async {
    final user = widget.user;
    final config = widget.config;
    if (user == null || config == null || widget.onCharge == null) return true;
    final allowed = await NgmyDocumentScanPayments.ensureAccess(
      context: context,
      user: user,
      config: config,
      onCharge: widget.onCharge!,
      onDataChanged: widget.onDataChanged ?? () {},
      onPersistConfig: widget.onPersistConfig ?? () async => true,
    );
    if (allowed) await _refreshScanUsage();
    return allowed;
  }

  Future<void> _recordScanUsage() async {
    final email = widget.user != null ? (((widget.user as dynamic).email as String?) ?? '') : '';
    if (email.isEmpty) return;
    await NgmyDocumentScanPayments.recordScan(email);
    await _refreshScanUsage();
  }

  void _scrollToLatestAnswer() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      final ctx = _latestAnswerKey.currentContext;
      if (ctx != null) {
        Scrollable.ensureVisible(
          ctx,
          duration: const Duration(milliseconds: 320),
          curve: Curves.easeOutCubic,
          alignment: 0.05,
        );
      }
    });
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
        _clearDocumentContext();
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
      _error = null;
      _clearDocumentContext();
    });
  }

  Future<String?> _resolveApiKey() async {
    var apiKey = widget.geminiApiKey.trim();
    if (apiKey.isEmpty) apiKey = (await widget.refreshApiKey()).trim();
    return apiKey.isEmpty ? null : apiKey;
  }

  String? _mapScanError(String? errRaw) {
    final err = (errRaw ?? '').trim();
    if (err.contains('proxy not deployed') || err.contains('404')) {
      return 'Document Scanner needs the Supabase AI proxy function (same as NGMY Helper). Ask admin to deploy it, then reload.';
    }
    if (err.contains('Network') || err.contains('Failed to fetch') || err.contains('CORS')) {
      return 'Network blocked the scan. Reload the page or try again on the NGMY app.';
    }
    if (err.isNotEmpty) return err.length > 220 ? '${err.substring(0, 220)}…' : err;
    return 'Could not read this document. Try again or use a closer, flatter photo.';
  }

  Future<void> _submitAction() async {
    if (_pages.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Add one or two document photos first.')),
      );
      return;
    }
    if (_canAskFollowUp) {
      await _askFollowUp();
      return;
    }
    if (_hasDocumentContext && _pagesMatchScan && _questionC.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Type a question about your document, or remove pages to scan again.')),
      );
      return;
    }
    await _scanDocuments();
  }

  Future<void> _askFollowUp() async {
    final question = _questionC.text.trim();
    if (question.isEmpty || !_pagesMatchScan || _documentContext == null) return;

    if (!await _ensureScanAccess()) return;

    setState(() {
      _analyzing = true;
      _error = null;
    });

    try {
      final apiKey = await _resolveApiKey();
      if (apiKey == null) {
        setState(() {
          _error = 'AI is not connected. Ask an admin to save an AI API key in Admin → Management Menus → NGMY AI.';
          _analyzing = false;
        });
        return;
      }

      final reply = await geminiDocumentFollowUp(
        apiKey: apiKey,
        documentContext: _documentContext!,
        userQuestion: question,
        languageCode: _responseLanguage,
        priorTurns: _followUps.reversed.toList(),
      );

      if (!mounted) return;
      if (reply.text != null && reply.text!.isNotEmpty) {
        setState(() {
          _analyzing = false;
          _followUps.insert(0, (question: question, answer: reply.text!));
          _questionC.clear();
        });
        _questionsSinceLastScanCharge += 1;
        if (_questionsSinceLastScanCharge >= NgmyDocumentScanPayments.questionsPerScan) {
          _questionsSinceLastScanCharge = 0;
          if (!_isAdminUser && !_hasPaidScanAccess) {
            await _recordScanUsage();
          }
        }
        _scrollToLatestAnswer();
      } else {
        setState(() {
          _analyzing = false;
          _error = _mapScanError(reply.error);
        });
      }
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _analyzing = false;
        _error = 'Something went wrong: $e';
      });
    }
  }

  Future<void> _scanDocuments() async {
    if (_pages.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Add one or two document photos first.')),
      );
      return;
    }

    final user = widget.user;
    final config = widget.config;
    if (user != null && config != null && widget.onCharge != null) {
      if (!await _ensureScanAccess()) return;
    }

    setState(() {
      _analyzing = true;
      _error = null;
      _result = null;
      _clearDocumentContext();
    });

    try {
      final apiKey = await _resolveApiKey();
      if (apiKey == null) {
        setState(() {
          _error = 'AI is not connected. Ask an admin to save an AI API key in Admin → Management Menus → NGMY AI.';
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
          _documentContext = scan.text;
          _scannedPagesFingerprint = _pagesFingerprint;
          _questionsSinceLastScanCharge = 0;
          _questionC.clear();
          if (!_isAdminUser && !_hasPaidScanAccess) {
            unawaited(_recordScanUsage());
          }
        } else {
          _error = _mapScanError(scan.error);
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

  String get _languageLabel => _responseLanguage == 'sw' ? 'Swahili' : 'English';

  Future<void> _toggleLanguageFlag() async {
    if (_analyzing) return;
    await _flagFx.forward(from: 0);
    if (!mounted) return;
    setState(() => _responseLanguage = _responseLanguage == 'en' ? 'sw' : 'en');
    unawaited(_persistLanguage());
    _flagFx.reset();
  }

  Widget _magicLanguageFlag() {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _toggleLanguageFlag,
        borderRadius: BorderRadius.circular(14),
        child: AnimatedBuilder(
          animation: _flagFx,
          builder: (context, child) {
            final t = Curves.easeInOutCubic.transform(_flagFx.value);
            final spin = t * math.pi;
            final scale = 1.0 + math.sin(t * math.pi) * 0.12;
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.002)
                ..rotateY(spin)
                ..scale(scale, scale, 1.0),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  color: Colors.white.withValues(alpha: 0.08),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
                ),
                child: child,
              ),
            );
          },
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 280),
            transitionBuilder: (child, anim) => ScaleTransition(scale: anim, child: child),
            child: Row(
              key: ValueKey<String>(_responseLanguage),
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(_flagEmoji, style: const TextStyle(fontSize: 22)),
                const SizedBox(width: 5),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'Language',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 8, fontWeight: FontWeight.w700),
                    ),
                    Text(
                      _languageLabel,
                      style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900),
                    ),
                  ],
                ),
              ],
            ),
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

  Future<void> _openTranslateChat() async {
    await showNgmyDocumentTranslateChat(
      context,
      geminiApiKey: widget.geminiApiKey,
      refreshApiKey: widget.refreshApiKey,
      initialMyLanguage: _responseLanguage,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onCharge,
      onDataChanged: widget.onDataChanged,
      onPersistConfig: widget.onPersistConfig,
    );
  }

  Widget _translateChatButton() {
    return IconButton(
      tooltip: 'Translate messages (English ↔ Swahili)',
      onPressed: _analyzing ? null : _openTranslateChat,
      padding: const EdgeInsets.only(left: 6, right: 2),
      constraints: const BoxConstraints(minWidth: 44, minHeight: 44),
      icon: const NgmyModernChatPrefixIcon(size: 26),
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

  Widget _followUpCard(({String question, String answer}) turn, {Key? key}) {
    return KeyedSubtree(
      key: key,
      child: _glassCard(
        borderColors: const [_cyan],
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(
                color: _cyan.withValues(alpha: 0.15),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: _cyan.withValues(alpha: 0.45)),
              ),
              child: const Text(
                'Latest answer',
                style: TextStyle(color: _cyan, fontWeight: FontWeight.w800, fontSize: 11),
              ),
            ),
            const SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(Icons.person_outline_rounded, color: _cyan.withValues(alpha: 0.9), size: 18),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    turn.question,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontSize: 13, fontWeight: FontWeight.w700),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(Icons.auto_awesome_rounded, color: _mint.withValues(alpha: 0.9), size: 18),
                const SizedBox(width: 8),
                Expanded(
                  child: SelectableText(
                    turn.answer,
                    style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.5),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _summaryCard() {
    return _glassCard(
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
    );
  }

  Widget _olderFollowUpCard(({String question, String answer}) turn) {
    return _glassCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(Icons.person_outline_rounded, color: _cyan.withValues(alpha: 0.9), size: 18),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  turn.question,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontSize: 13, fontWeight: FontWeight.w700),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(Icons.auto_awesome_rounded, color: _mint.withValues(alpha: 0.9), size: 18),
              const SizedBox(width: 8),
              Expanded(
                child: SelectableText(
                  turn.answer,
                  style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.5),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _scanUsageBanner() {
    if (_isAdminUser) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: _violet.withValues(alpha: 0.15),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: _violet.withValues(alpha: 0.45)),
        ),
        child: Row(
          children: [
            Icon(Icons.admin_panel_settings_outlined, color: _violet.withValues(alpha: 0.95), size: 18),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                'Unlimited scans (admin)',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontWeight: FontWeight.w700, fontSize: 12),
              ),
            ),
          ],
        ),
      );
    }
    if (_hasPaidScanAccess) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: _mint.withValues(alpha: 0.15),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: _mint.withValues(alpha: 0.45)),
        ),
        child: Row(
          children: [
            Icon(Icons.all_inclusive_rounded, color: _mint.withValues(alpha: 0.95), size: 18),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                'Unlimited scans active (30-day pass)',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontWeight: FontWeight.w700, fontSize: 12),
              ),
            ),
          ],
        ),
      );
    }
    final limit = NgmyDocumentScanPayments.freeScanLimitFromConfig(widget.config);
    final remaining = _remainingFreeScans;
    if (limit <= 0) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: _mint.withValues(alpha: 0.12),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: _mint.withValues(alpha: 0.35)),
        ),
        child: Row(
          children: [
            Icon(Icons.all_inclusive_rounded, color: _mint.withValues(alpha: 0.9), size: 18),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                'Unlimited free scans',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontWeight: FontWeight.w700, fontSize: 12),
              ),
            ),
          ],
        ),
      );
    }
    if (remaining == null || NgmyDocumentScanPayments.isUnlimitedRemaining(remaining)) {
      return const SizedBox.shrink();
    }
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.08),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
      ),
      child: Row(
        children: [
          Icon(
            remaining > 0 ? Icons.document_scanner_outlined : Icons.lock_outline_rounded,
            color: remaining > 0 ? _cyan : const Color(0xFFF59E0B),
            size: 18,
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              remaining > 0
                  ? '$remaining free scan${remaining == 1 ? '' : 's'} left · 2 questions = 1 scan'
                  : 'No free scans left — pay to unlock 30 days',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontWeight: FontWeight.w700, fontSize: 12),
            ),
          ),
        ],
      ),
    );
  }

  String get _primaryActionLabel {
    if (_analyzing) {
      return _canAskFollowUp || (_hasDocumentContext && _pagesMatchScan && _questionC.text.trim().isNotEmpty)
          ? 'Answering your question…'
          : 'Reading your document${_pages.length > 1 ? 's' : ''}…';
    }
    if (_canAskFollowUp) return 'Ask about document';
    return 'Scan & summarize';
  }

  IconData get _primaryActionIcon =>
      _canAskFollowUp ? Icons.chat_bubble_outline_rounded : Icons.auto_awesome_rounded;

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
                        controller: _scrollC,
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
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Row(
                                    children: [
                                      _translateChatButton(),
                                      Expanded(
                                        child: Text(
                                          'Tap message icon to translate chats',
                                          style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 10, fontWeight: FontWeight.w600),
                                        ),
                                      ),
                                    ],
                                  ),
                                  TextField(
                                    controller: _questionC,
                                    maxLines: 2,
                                    onChanged: (_) {
                                      if (mounted) setState(() {});
                                    },
                                    onSubmitted: (_) {
                                      if (!_analyzing) unawaited(_submitAction());
                                    },
                                    style: const TextStyle(color: Colors.white, fontSize: 14),
                                    decoration: InputDecoration(
                                      hintText: _pagesMatchScan
                                          ? 'Ask a follow-up question about your document(s)…'
                                          : 'Optional: ask something specific when you scan…',
                                      hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.38)),
                                      border: InputBorder.none,
                                      isDense: true,
                                      contentPadding: const EdgeInsets.fromLTRB(4, 8, 8, 8),
                                    ),
                                  ),
                                  if (_pagesMatchScan) ...[
                                    const SizedBox(height: 4),
                                    Text(
                                      'Documents are loaded — ask questions without scanning again.',
                                      style: TextStyle(color: _mint.withValues(alpha: 0.85), fontSize: 10, fontWeight: FontWeight.w600),
                                    ),
                                  ],
                                ],
                              ),
                            ),
                            if (widget.user != null && widget.config != null) ...[
                              const SizedBox(height: 10),
                              _scanUsageBanner(),
                            ],
                            const SizedBox(height: 14),
                            Material(
                              color: Colors.transparent,
                              child: InkWell(
                                onTap: _analyzing ? null : _submitAction,
                                borderRadius: BorderRadius.circular(18),
                                child: Ink(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(18),
                                    gradient: LinearGradient(
                                      colors: _analyzing
                                          ? [Colors.grey.shade700, Colors.grey.shade800]
                                          : _canAskFollowUp
                                              ? const [Color(0xFF059669), Color(0xFF10B981), Color(0xFF22D3EE)]
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
                                        Icon(_primaryActionIcon, color: Colors.white, size: 24),
                                      const SizedBox(width: 10),
                                      Text(
                                        _primaryActionLabel,
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
                            if (_followUps.isNotEmpty) ...[
                              const SizedBox(height: 16),
                              _followUpCard(_followUps.first, key: _latestAnswerKey),
                              for (var i = 1; i < _followUps.length; i++) ...[
                                const SizedBox(height: 12),
                                _olderFollowUpCard(_followUps[i]),
                              ],
                            ],
                            if (_result != null) ...[
                              const SizedBox(height: 16),
                              _summaryCard(),
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
