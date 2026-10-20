import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_quote_templates.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';
import 'ngmy_vault_web_io.dart';

/// NGMY Quotes: pick a design, type a quote, size every word, choose how the words look, put your
/// own picture behind them and edit it in a photo studio, and either edit it as a slide or download
/// it as a picture. Returns the new presentation when the user chooses to edit it, otherwise null.
Future<NgmySlideDeck?> showNgmyQuoteMaker(BuildContext context) {
  return Navigator.of(context).push<NgmySlideDeck>(
    MaterialPageRoute(fullscreenDialog: true, builder: (_) => const _QuoteMakerScreen()),
  );
}

/// The maker as a plain widget, with an optional starting background picture (for tests).
@visibleForTesting
Widget ngmyQuoteMakerForTest({Uint8List? photo}) => _QuoteMakerScreen(initialPhoto: photo);

const _ink0 = Color(0xFF070B16);
const _panelBg = Color(0xFF0E1526);
const _cardBg = Color(0xFF151F36);
const _line = Color(0x1FFFFFFF);
const _violet = Color(0xFF8B5CF6);
const _pink = Color(0xFFEC4899);
const _hot = LinearGradient(colors: [_violet, _pink]);

class _QuoteMakerScreen extends StatefulWidget {
  const _QuoteMakerScreen({this.initialPhoto});
  final Uint8List? initialPhoto;
  @override
  State<_QuoteMakerScreen> createState() => _QuoteMakerScreenState();
}

/// One look for the background picture.
class _PhotoLook {
  const _PhotoLook(this.name, {this.bright = 0, this.contrast = 1, this.sat = 1, this.warm = 0, this.tint = 0, this.fade = 0, this.hue = 0});
  final String name;
  final double bright, contrast, sat, warm, tint, fade, hue;
}

const _photoLooks = [
  _PhotoLook('Original'),
  _PhotoLook('Black & white', contrast: 1.1, sat: 0),
  _PhotoLook('Noir', bright: -0.05, contrast: 1.55, sat: 0),
  _PhotoLook('Sepia', sat: 0.25, warm: 0.9),
  _PhotoLook('Vivid', contrast: 1.15, sat: 1.6),
  _PhotoLook('Pop', contrast: 1.3, sat: 1.9),
  _PhotoLook('Faded', bright: 0.06, contrast: 0.85, sat: 0.8, warm: 0.1, fade: 0.4),
  _PhotoLook('Matte', contrast: 0.9, sat: 0.85, fade: 0.55),
  _PhotoLook('Cool', contrast: 1.05, warm: -0.8),
  _PhotoLook('Warm', bright: 0.03, contrast: 1.05, sat: 1.1, warm: 0.8),
  _PhotoLook('Golden hour', bright: 0.04, sat: 1.25, warm: 1.0),
  _PhotoLook('Moonlight', bright: -0.08, contrast: 1.1, sat: 0.8, warm: -0.8, tint: -0.1),
  _PhotoLook('Dreamy', bright: 0.08, contrast: 0.85, sat: 1.1, warm: 0.2, fade: 0.25),
  _PhotoLook('Dramatic', bright: -0.05, contrast: 1.5, sat: 1.2),
  _PhotoLook('Retro', contrast: 0.9, sat: 0.7, warm: 0.4, fade: 0.35),
  _PhotoLook('Forest', sat: 1.2, tint: -0.45, warm: -0.1),
  _PhotoLook('Rose', sat: 1.1, tint: 0.4, warm: 0.3),
  _PhotoLook('Ocean', sat: 1.2, hue: 0, warm: -0.5, tint: -0.2),
];

// ── Colour matrices (4 rows of 5, applied to red, green, blue, alpha) ───────

const _identity = <double>[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

/// The result of doing [b] first, then [a].
List<double> _mulM(List<double> a, List<double> b) {
  final r = List<double>.filled(20, 0);
  for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 5; col++) {
      var s = 0.0;
      for (var k = 0; k < 4; k++) {
        s += a[row * 5 + k] * b[k * 5 + col];
      }
      if (col == 4) s += a[row * 5 + 4];
      r[row * 5 + col] = s;
    }
  }
  return r;
}

List<double> _satM(double s) {
  const lr = 0.2126, lg = 0.7152, lb = 0.0722;
  final sr = (1 - s) * lr, sg = (1 - s) * lg, sb = (1 - s) * lb;
  return [sr + s, sg, sb, 0, 0, sr, sg + s, sb, 0, 0, sr, sg, sb + s, 0, 0, 0, 0, 0, 1, 0];
}

List<double> _hueM(double degrees) {
  final a = degrees * math.pi / 180;
  final c = math.cos(a), s = math.sin(a);
  return [
    0.213 + c * 0.787 - s * 0.213, 0.715 - c * 0.715 - s * 0.715, 0.072 - c * 0.072 + s * 0.928, 0, 0,
    0.213 - c * 0.213 + s * 0.143, 0.715 + c * 0.285 + s * 0.140, 0.072 - c * 0.072 - s * 0.283, 0, 0,
    0.213 - c * 0.213 - s * 0.787, 0.715 - c * 0.715 + s * 0.715, 0.072 + c * 0.928 + s * 0.072, 0, 0,
    0, 0, 0, 1, 0,
  ];
}

List<double> _scaleOffM(double k, double offR, double offG, double offB) =>
    [k, 0, 0, 0, offR, 0, k, 0, 0, offG, 0, 0, k, 0, offB, 0, 0, 0, 1, 0];

class _QuoteMakerScreenState extends State<_QuoteMakerScreen> {
  final _quote = TextEditingController();
  final _author = TextEditingController(text: 'NGMY');
  final _previewKey = GlobalKey();
  final _photoKey = GlobalKey();
  NgmyQuoteTemplate _template = kNgmyQuoteTemplates.first;
  String _group = 'All';
  String? _logo;
  Uint8List? _logoBytes;
  bool _busy = false;
  int _tab = 0;
  int _photoTab = 0;

  // The NGMY logo: round with a ring by default. It can be moved, reframed and resized, never removed.
  final String _seed = 'quote${DateTime.now().microsecondsSinceEpoch}';
  double _logoX = 0.39;
  double _logoY = 0.80;
  double _logoSize = 0.22;
  String _logoFrame = 'circle';
  String _logoRing = 'gold';

  // The words: a size for every word (-1 small, 0 normal, 1 big, 2 huge), and how they look.
  final List<int> _levels = [];
  final Set<int> _picked = {};
  String _fx = '';
  double _textScale = 1.0;
  int? _textColor;
  bool _bold = true;
  bool _italic = false;
  TextAlign _align = TextAlign.center;
  double _quoteY = 0.30;
  bool _quoteMarks = true;
  bool _shapes = true;
  // The highlight behind the words: a colour (null = none), how strong, or a custom colour.
  int? _hlColor;
  double _hlAmt = 1.0;
  bool _hlCustom = false;
  double _hlHue = 50;
  double _hlLight = 0.6;

  /// The highlight as ARGB, 0 when there is none.
  int get _highlight {
    final rgb = _hlCustom ? HSLColor.fromAHSL(1, _hlHue, 0.9, _hlLight).toColor().toARGB32() & 0x00FFFFFF : (_hlColor == null ? null : _hlColor! & 0x00FFFFFF);
    if (rgb == null) return 0;
    return (((_hlAmt * 255).round().clamp(0, 255)) << 24) | rgb;
  }

  static const _hlColors = <int?>[null, 0xFFFACC15, 0xFFFDE047, 0xFF4ADE80, 0xFF22D3EE, 0xFFF472B6, 0xFFFB923C, 0xFFEF4444, 0xFF8B5CF6, 0xFF3B82F6, 0xFFFFFFFF, 0xFF111827];

  // The picture behind the quote and the photo studio.
  Uint8List? _bg;
  // light
  double _exposure = 0, _bright = 0, _contrast = 1;
  // colour
  double _sat = 1, _warm = 0, _tint = 0, _hue = 0, _fade = 0;
  bool _invert = false;
  // effects
  double _blur = 0, _soft = 0, _vignette = 0, _dim = 0, _grain = 0, _spot = 0, _shadeEdges = 0, _shadeWords = 0;
  int? _tintColor;
  double _tintAmt = 0.25;
  int? _leakColor;
  double _leakAmt = 0.5;
  // crop
  double _zoom = 1, _panX = 0, _panY = 0, _rot = 0;
  bool _flipX = false, _flipY = false;

  static const _groups = ['All', 'Robotic', 'Nature', 'Warm', 'Bold', 'Clean'];
  static const _tabs = [
    (Icons.dashboard_customize_rounded, 'Design'),
    (Icons.format_size_rounded, 'Word sizes'),
    (Icons.text_fields_rounded, 'Text'),
    (Icons.photo_filter_rounded, 'Photo'),
    (Icons.verified_rounded, 'Logo'),
  ];
  static const _photoTabs = [
    (Icons.auto_awesome_rounded, 'Looks'),
    (Icons.wb_sunny_rounded, 'Light'),
    (Icons.palette_rounded, 'Colour'),
    (Icons.blur_on_rounded, 'Effects'),
    (Icons.crop_rotate_rounded, 'Crop'),
  ];
  static const _fxList = [
    ('', 'Classic'),
    ('caps', 'Bold caps'),
    ('elegant', 'Elegant'),
    ('shadow', 'Shadow'),
    ('neon', 'Neon glow'),
    ('outline', 'Outline'),
    ('marker', 'Highlighter'),
    ('stamp', 'Stamp'),
    ('retro', 'Retro'),
    ('threed', '3D'),
    ('glitch', 'Glitch'),
    ('fire', 'Fire'),
    ('ice', 'Ice'),
    ('chalk', 'Chalk'),
    ('comic', 'Comic'),
    ('gold', 'Gold'),
    ('sunset', 'Sunset'),
    ('softglow', 'Soft glow'),
    ('lowercase', 'Lowercase'),
    ('double', 'Echo'),
    ('whisper', 'Whisper'),
  ];
  static const _inks = <int?>[null, 0xFFFFFFFF, 0xFF111827, 0xFFFACC15, 0xFF22D3EE, 0xFFF472B6, 0xFF4ADE80, 0xFFEF4444, 0xFF3B82F6, 0xFFFB923C];
  static const _glows = <int>[0xFFFB923C, 0xFFFACC15, 0xFFEF4444, 0xFFF472B6, 0xFF8B5CF6, 0xFF3B82F6, 0xFF22D3EE, 0xFF4ADE80, 0xFFFFFFFF, 0xFF111827];

  @override
  void initState() {
    super.initState();
    _bg = widget.initialPhoto;
    // After the first frame: the logo is decoded with the screen's context, which is not ready inside initState.
    WidgetsBinding.instance.addPostFrameCallback((_) => _loadLogo());
  }

  @override
  void dispose() {
    _quote.dispose();
    _author.dispose();
    super.dispose();
  }

  Future<void> _loadLogo() async {
    try {
      final data = await rootBundle.load('assets/images/ngmy_logo.png');
      final bytes = data.buffer.asUint8List();
      // Decoded ahead of time, so the logo is already drawn the first time it shows.
      if (mounted) await precacheImage(MemoryImage(bytes), context);
      if (!mounted) return;
      setState(() {
        _logoBytes = bytes;
        _logo = 'data:image/png;base64,${base64Encode(bytes)}';
      });
    } catch (_) {
      // The quote still has the NGMY name watermark without the logo picture.
    }
  }

  Future<void> _pickPhoto() async {
    try {
      final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1800, imageQuality: 92);
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (!mounted) return;
      await precacheImage(MemoryImage(bytes), context);
      if (!mounted) return;
      setState(() {
        _bg = bytes;
        _tab = 3;
      });
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not open that picture. $e')));
    }
  }

  void _resetPhotoLook() {
    _exposure = 0;
    _bright = 0;
    _contrast = 1;
    _sat = 1;
    _warm = 0;
    _tint = 0;
    _hue = 0;
    _fade = 0;
    _invert = false;
    _blur = 0;
    _soft = 0;
    _vignette = 0;
    _dim = 0;
    _grain = 0;
    _spot = 0;
    _shadeEdges = 0;
    _shadeWords = 0;
    _tintColor = null;
    _tintAmt = 0.25;
    _leakColor = null;
    _leakAmt = 0.5;
    _zoom = 1;
    _panX = 0;
    _panY = 0;
    _rot = 0;
    _flipX = false;
    _flipY = false;
  }

  void _applyLook(_PhotoLook l) {
    _bright = l.bright;
    _contrast = l.contrast;
    _sat = l.sat;
    _warm = l.warm;
    _tint = l.tint;
    _fade = l.fade;
    _hue = l.hue;
    _exposure = 0;
    _invert = false;
  }

  bool _isLook(_PhotoLook l) =>
      (_bright - l.bright).abs() < 0.001 &&
      (_contrast - l.contrast).abs() < 0.001 &&
      (_sat - l.sat).abs() < 0.001 &&
      (_warm - l.warm).abs() < 0.001 &&
      (_tint - l.tint).abs() < 0.001 &&
      (_fade - l.fade).abs() < 0.001 &&
      (_hue - l.hue).abs() < 0.5 &&
      _exposure.abs() < 0.001 &&
      !_invert;

  List<double> _matrixFor(double bright, double exposure, double contrast, double sat, double warm, double tint, double hue, double fade, bool invert) {
    var m = _identity;
    m = _mulM(_satM(sat), m);
    if (hue.abs() > 0.5) m = _mulM(_hueM(hue), m);
    final gain = math.pow(2, exposure).toDouble() * contrast;
    final off = 128 * (1 - contrast) + bright * 255;
    m = _mulM(_scaleOffM(gain, off + warm * 25, off - tint * 25, off - warm * 25 + tint * 12), m);
    if (fade > 0) m = _mulM(_scaleOffM(1 - fade * 0.5, fade * 255 * 0.25, fade * 255 * 0.25, fade * 255 * 0.25), m);
    if (invert) m = _mulM(_scaleOffM(-1, 255, 255, 255), m);
    return m;
  }

  List<double> get _matrix => _matrixFor(_bright, _exposure, _contrast, _sat, _warm, _tint, _hue, _fade, _invert);

  // One number per word, kept in step with the words in the box.
  List<RegExpMatch> _syncWords() {
    final m = RegExp(r'\S+').allMatches(_quote.text).toList();
    while (_levels.length < m.length) {
      _levels.add(0);
    }
    if (_levels.length > m.length) _levels.removeRange(m.length, _levels.length);
    _picked.removeWhere((i) => i >= m.length);
    return m;
  }

  String _marked() {
    _syncWords();
    return ngmyQuoteMarkup(_quote.text, _levels);
  }

  NgmySlide _slide({String? bakedBackground}) => ngmyBuildQuoteSlide(
        _template,
        quote: _marked(),
        author: _author.text,
        logoData: _logo,
        idSeed: _seed,
        logoX: _logoX,
        logoY: _logoY,
        logoSize: _logoSize,
        logoFrame: _logoFrame,
        logoRing: _logoRing,
        textFx: _fx,
        sizeScale: _textScale,
        bgImage: bakedBackground,
        transparent: _bg != null && bakedBackground == null,
        textColor: _textColor,
        align: _align,
        bold: _bold,
        italic: _italic,
        quoteY: _quoteY,
        quoteMarks: _quoteMarks,
        shapes: _shapes,
        highlight: _highlight,
      );

  /// The picture behind the quote with every photo setting applied, as 1080-wide PNG bytes.
  Future<Uint8List?> _bakePhoto() async {
    if (_bg == null) return null;
    await WidgetsBinding.instance.endOfFrame;
    await Future<void>.delayed(const Duration(milliseconds: 300));
    await WidgetsBinding.instance.endOfFrame;
    final ro = _photoKey.currentContext?.findRenderObject();
    if (ro is! RenderRepaintBoundary) return null;
    final image = await ro.toImage(pixelRatio: 1080 / ro.size.width);
    final data = await image.toByteData(format: ui.ImageByteFormat.png);
    return data?.buffer.asUint8List();
  }

  Future<void> _editAsSlide() async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      final baked = await _bakePhoto();
      final bg = baked == null ? null : 'data:image/png;base64,${base64Encode(baked)}';
      final deck = NgmySlideDeck(
        id: NgmySlidesTemplates.newId(),
        name: 'NGMY Quote',
        aspectRatio: NgmySlideAspectRatio.portrait916,
        autoAdvanceSeconds: 6,
        slides: [_slide(bakedBackground: bg)],
      );
      if (mounted) Navigator.of(context).pop(deck);
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$e')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _download() async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      // Let the logo and every picture finish drawing before the picture is taken.
      await WidgetsBinding.instance.endOfFrame;
      await Future<void>.delayed(const Duration(milliseconds: 400));
      await WidgetsBinding.instance.endOfFrame;
      final ro = _previewKey.currentContext?.findRenderObject();
      if (ro is! RenderRepaintBoundary) throw 'The picture is not ready yet.';
      // 1080 wide, the size of an Instagram story.
      final image = await ro.toImage(pixelRatio: 1080 / ro.size.width);
      final data = await image.toByteData(format: ui.ImageByteFormat.png);
      if (data == null) throw 'Could not make the picture.';
      final ok = await ngmyVaultDownloadBytes(data.buffer.asUint8List(), 'ngmy_quote.png', 'image/png');
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(ok ? 'Your quote picture is ready. Check your downloads.' : 'Downloading is not available here. Use Edit in Slides, then PDF.')),
      );
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$e')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  // ── The picture behind the words, with everything the studio does to it ──

  Widget _photoLayer() {
    final bytes = _bg!;
    return LayoutBuilder(builder: (context, box) {
      final w = box.maxWidth, h = box.maxHeight;
      Widget base(bool looks) {
        Widget img = Image.memory(bytes, fit: BoxFit.cover, gaplessPlayback: true, filterQuality: FilterQuality.medium);
        if (looks) img = ColorFiltered(colorFilter: ColorFilter.matrix(_matrix), child: img);
        // Turn it, flip it, zoom it and move it. A turned picture is enlarged so no corner shows.
        final turn = _rot * math.pi / 180;
        final cover = _rot == 0 ? 1.0 : (math.cos(turn).abs() + math.sin(turn).abs() * (h / w > 1 ? h / w : w / h));
        return Transform.translate(
          offset: Offset(-_panX * w * (_zoom - 1) / 2, -_panY * h * (_zoom - 1) / 2),
          child: Transform.scale(
            scale: _zoom * cover,
            child: Transform.rotate(
              angle: turn,
              child: Transform(alignment: Alignment.center, transform: Matrix4.diagonal3Values(_flipX ? -1 : 1, _flipY ? -1 : 1, 1), child: img),
            ),
          ),
        );
      }

      Widget main = base(true);
      if (_blur > 0.2) main = ImageFiltered(imageFilter: ui.ImageFilter.blur(sigmaX: _blur, sigmaY: _blur, tileMode: TileMode.clamp), child: main);
      return Stack(fit: StackFit.expand, children: [
        ClipRect(child: SizedBox.expand(child: main)),
        if (_soft > 0.02)
          ClipRect(
            child: Opacity(
              opacity: _soft * 0.75,
              child: SizedBox.expand(child: ImageFiltered(imageFilter: ui.ImageFilter.blur(sigmaX: 12, sigmaY: 12, tileMode: TileMode.clamp), child: base(true))),
            ),
          ),
        if (_tintColor != null && _tintAmt > 0) ColoredBox(color: Color(_tintColor!).withValues(alpha: _tintAmt)),
        if (_leakColor != null && _leakAmt > 0)
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: RadialGradient(center: const Alignment(0.9, -0.85), radius: 1.15, colors: [Color(_leakColor!).withValues(alpha: _leakAmt), Color(_leakColor!).withValues(alpha: 0)]),
            ),
          ),
        if (_spot > 0)
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: RadialGradient(center: const Alignment(0, -0.15), radius: 0.8, colors: [Colors.white.withValues(alpha: _spot * 0.55), Colors.white.withValues(alpha: 0)]),
            ),
          ),
        if (_shadeEdges > 0)
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [Colors.black.withValues(alpha: _shadeEdges), Colors.transparent, Colors.transparent, Colors.black.withValues(alpha: _shadeEdges)],
                stops: const [0, 0.32, 0.68, 1],
              ),
            ),
          ),
        if (_shadeWords > 0)
          Positioned(
            left: 0,
            right: 0,
            top: (_quoteY - 0.06) * h,
            height: 0.48 * h,
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Colors.black.withValues(alpha: 0), Colors.black.withValues(alpha: _shadeWords), Colors.black.withValues(alpha: _shadeWords), Colors.black.withValues(alpha: 0)],
                  stops: const [0, 0.25, 0.75, 1],
                ),
              ),
            ),
          ),
        if (_dim > 0) ColoredBox(color: Colors.black.withValues(alpha: _dim)),
        if (_vignette > 0)
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: RadialGradient(radius: 0.95, colors: [Colors.transparent, Colors.black.withValues(alpha: _vignette)], stops: const [0.45, 1]),
            ),
          ),
        if (_grain > 0) CustomPaint(painter: _GrainPainter(_grain)),
      ]);
    });
  }

  // ── Small building blocks ────────────────────────────────────────────────

  InputDecoration _field(String label, String hint) => InputDecoration(
        labelText: label,
        hintText: hint,
        labelStyle: const TextStyle(color: Colors.white60, fontWeight: FontWeight.w600),
        hintStyle: const TextStyle(color: Colors.white30),
        counterStyle: const TextStyle(color: Colors.white30, fontSize: 11),
        filled: true,
        fillColor: _cardBg,
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: _line)),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: _violet, width: 1.6)),
      );

  Widget _label(String text, {IconData? icon}) => Padding(
        padding: const EdgeInsets.only(top: 18, bottom: 8),
        child: Row(children: [
          if (icon != null) ...[Icon(icon, size: 15, color: _violet), const SizedBox(width: 6)],
          Text(text, style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.1)),
        ]),
      );

  Widget _hint(String text) => Text(text, style: const TextStyle(color: Colors.white54, fontSize: 12.5, height: 1.35));

  Widget _card({required Widget child, EdgeInsets padding = const EdgeInsets.all(14)}) => Container(
        width: double.infinity,
        padding: padding,
        decoration: BoxDecoration(color: _cardBg, borderRadius: BorderRadius.circular(18), border: Border.all(color: _line)),
        child: Material(type: MaterialType.transparency, child: child),
      );

  Widget _pill(String label, {required bool on, VoidCallback? onTap, IconData? icon}) {
    final enabled = onTap != null;
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        decoration: BoxDecoration(
          gradient: on ? _hot : null,
          color: on ? null : Colors.white.withValues(alpha: enabled ? 0.07 : 0.03),
          borderRadius: BorderRadius.circular(30),
          border: Border.all(color: on ? Colors.transparent : _line),
        ),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          if (icon != null) ...[Icon(icon, size: 16, color: enabled ? Colors.white : Colors.white30), const SizedBox(width: 6)],
          Text(label, style: TextStyle(color: enabled ? Colors.white : Colors.white30, fontSize: 12.5, fontWeight: FontWeight.w800)),
        ]),
      ),
    );
  }

  Widget _tile({required bool on, required VoidCallback onTap, required Widget child, String? label, double w = 74, double h = 64, double pad = 5}) {
    return GestureDetector(
      onTap: onTap,
      child: SizedBox(
        width: w,
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            width: w,
            height: h,
            padding: EdgeInsets.all(pad),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              color: on ? _violet.withValues(alpha: 0.28) : Colors.white.withValues(alpha: 0.05),
              border: Border.all(color: on ? const Color(0xFFC4B5FD) : _line, width: on ? 2 : 1),
            ),
            child: child,
          ),
          if (label != null) ...[
            const SizedBox(height: 4),
            Text(label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: on ? Colors.white : Colors.white54, fontSize: w < 54 ? 8.5 : 10.5, fontWeight: FontWeight.w700)),
          ],
        ]),
      ),
    );
  }

  Widget _slider(String name, double value, double min, double max, ValueChanged<double> onChanged, {String? shown, double? neutral}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 2),
      child: Column(children: [
        Row(children: [
          Expanded(child: Text(name, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 13))),
          if (neutral != null && (value - neutral).abs() > 0.001)
            GestureDetector(
              onTap: () => setState(() => onChanged(neutral)),
              child: const Padding(padding: EdgeInsets.only(right: 8), child: Icon(Icons.restart_alt_rounded, size: 16, color: Colors.white38)),
            ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 3),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(20)),
            child: Text(shown ?? value.toStringAsFixed(1), style: const TextStyle(color: Colors.white, fontSize: 11.5, fontWeight: FontWeight.w800)),
          ),
        ]),
        SliderTheme(
          data: SliderTheme.of(context).copyWith(
            trackHeight: 4,
            activeTrackColor: _violet,
            inactiveTrackColor: Colors.white12,
            thumbColor: Colors.white,
            overlayColor: _violet.withValues(alpha: 0.2),
            thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 9),
          ),
          child: Slider(value: value.clamp(min, max), min: min, max: max, onChanged: (v) => setState(() => onChanged(v))),
        ),
      ]),
    );
  }

  Widget _swatches(int? selected, ValueChanged<int?> onPick, List<int?> colors) {
    return Wrap(spacing: 10, runSpacing: 10, children: [
      for (final c in colors)
        GestureDetector(
          onTap: () => setState(() => onPick(c)),
          child: Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: c == null ? Colors.white10 : Color(c),
              border: Border.all(color: selected == c ? Colors.white : Colors.white24, width: selected == c ? 3 : 1),
            ),
            child: c == null ? const Icon(Icons.block_rounded, size: 16, color: Colors.white54) : null,
          ),
        ),
    ]);
  }

  // ── The five tabs ────────────────────────────────────────────────────────

  Widget _designTab() {
    final shown = _group == 'All' ? kNgmyQuoteTemplates : kNgmyQuoteTemplates.where((t) => t.group == _group).toList();
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      TextField(
        controller: _quote,
        maxLines: 4,
        minLines: 2,
        maxLength: 280,
        onChanged: (_) => setState(_syncWords),
        style: const TextStyle(color: Colors.white, fontSize: 15),
        decoration: _field('Your quote', _template.sample),
      ),
      const SizedBox(height: 10),
      TextField(
        controller: _author,
        onChanged: (_) => setState(() {}),
        style: const TextStyle(color: Colors.white),
        decoration: _field('Who said it', 'NGMY'),
      ),
      _label('DESIGNS', icon: Icons.dashboard_customize_rounded),
      SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(children: [
          for (final g in _groups) Padding(padding: const EdgeInsets.only(right: 8), child: _pill(g, on: _group == g, onTap: () => setState(() => _group = g))),
        ]),
      ),
      const SizedBox(height: 12),
      SizedBox(
        height: 118,
        child: ListView.separated(
          scrollDirection: Axis.horizontal,
          itemCount: shown.length,
          separatorBuilder: (_, __) => const SizedBox(width: 10),
          itemBuilder: (_, i) {
            final t = shown[i];
            final selected = t.id == _template.id;
            return GestureDetector(
              onTap: () => setState(() => _template = t),
              child: SizedBox(
                width: 70,
                child: Column(children: [
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 160),
                    width: 70,
                    height: 94,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(t.top), Color(t.bottom)]),
                      border: Border.all(color: selected ? Colors.white : _line, width: selected ? 2.5 : 1),
                    ),
                    child: Center(child: Text('“', style: TextStyle(color: Color(t.accent), fontSize: 40, fontWeight: FontWeight.w900))),
                  ),
                  const SizedBox(height: 5),
                  Text(t.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: selected ? Colors.white : Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w700)),
                ]),
              ),
            );
          },
        ),
      ),
      const SizedBox(height: 8),
      _card(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
        child: Column(children: [
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            dense: true,
            activeColor: _violet,
            title: const Text('Design shapes', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
            subtitle: const Text('The lines and circles that come with the design', style: TextStyle(color: Colors.white54, fontSize: 12)),
            value: _shapes,
            onChanged: (v) => setState(() => _shapes = v),
          ),
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            dense: true,
            activeColor: _violet,
            title: const Text('Big quote mark', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
            value: _quoteMarks,
            onChanged: (v) => setState(() => _quoteMarks = v),
          ),
        ]),
      ),
    ]);
  }

  Widget _wordsTab() {
    final words = _syncWords();
    if (words.isEmpty) {
      return _card(child: _hint('Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.'));
    }
    final text = _quote.text;
    // Sentences, so a whole sentence can be picked with one tap.
    final sentenceOf = <int>[];
    var s = 0;
    for (final m in words) {
      sentenceOf.add(s);
      if (RegExp(r'[.!?]["”’)]*$').hasMatch(text.substring(m.start, m.end))) s++;
    }
    final sentenceCount = sentenceOf.isEmpty ? 0 : sentenceOf.last + 1;
    final picked = _picked.toList()..sort();
    int? shared;
    if (picked.isNotEmpty && picked.every((i) => _levels[i] == _levels[picked.first])) shared = _levels[picked.first];

    void setLevel(int lvl) => setState(() {
          for (final i in _picked) {
            _levels[i] = lvl;
          }
        });

    double sizeFor(int lvl) => switch (lvl) { 1 => 20, 2 => 28, -1 => 11, _ => 15 };

    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      _hint('Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.'),
      const SizedBox(height: 10),
      _card(
        child: Wrap(spacing: 6, runSpacing: 6, crossAxisAlignment: WrapCrossAlignment.center, children: [
          for (var i = 0; i < words.length; i++)
            GestureDetector(
              onTap: () => setState(() => _picked.contains(i) ? _picked.remove(i) : _picked.add(i)),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(11),
                  color: _picked.contains(i) ? _violet.withValues(alpha: 0.38) : Colors.white.withValues(alpha: 0.06),
                  border: Border.all(color: _picked.contains(i) ? const Color(0xFFC4B5FD) : _line, width: _picked.contains(i) ? 2 : 1),
                ),
                child: Text(
                  ngmyQuotePlain(text.substring(words[i].start, words[i].end)),
                  style: TextStyle(color: Colors.white, fontSize: sizeFor(_levels[i]), fontWeight: _levels[i] > 0 ? FontWeight.w900 : FontWeight.w600),
                ),
              ),
            ),
        ]),
      ),
      const SizedBox(height: 10),
      Wrap(spacing: 8, runSpacing: 8, children: [
        _pill('All words', on: false, icon: Icons.select_all_rounded, onTap: () => setState(() => _picked.addAll(List.generate(words.length, (i) => i)))),
        if (sentenceCount > 1)
          for (var k = 0; k < sentenceCount && k < 8; k++)
            _pill('Sentence ${k + 1}', on: false, onTap: () => setState(() {
                  _picked
                    ..clear()
                    ..addAll([for (var i = 0; i < words.length; i++) if (sentenceOf[i] == k) i]);
                })),
        _pill('Clear picks', on: false, onTap: () => setState(_picked.clear)),
      ]),
      _label('SIZE OF THE PICKED WORDS', icon: Icons.format_size_rounded),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final (lvl, name) in const [(-1, 'Small'), (0, 'Normal'), (1, 'Big'), (2, 'Huge')])
          _pill(name, on: shared == lvl, onTap: _picked.isEmpty ? null : () => setLevel(lvl)),
      ]),
      const SizedBox(height: 10),
      _pill('Make every word normal', on: false, icon: Icons.restart_alt_rounded, onTap: () => setState(() => _levels.fillRange(0, _levels.length, 0))),
    ]);
  }

  Widget _textTab() {
    final fxName = _fxList.firstWhere((e) => e.$1 == _fx).$2;
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        const Expanded(child: Text('WORD DESIGN', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.1))),
        Text(fxName, style: const TextStyle(color: Color(0xFFC4B5FD), fontSize: 12, fontWeight: FontWeight.w800)),
      ]),
      const SizedBox(height: 10),
      // Seven small boxes in every row.
      LayoutBuilder(builder: (context, box) {
        const gap = 7.0;
        final w = (box.maxWidth - gap * 6) / 7;
        return Wrap(spacing: gap, runSpacing: gap, children: [
          for (final (id, label) in _fxList)
            _tile(
              on: _fx == id,
              onTap: () => setState(() => _fx = id),
              label: label,
              w: w,
              h: w * 0.95,
              pad: 2,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(9),
                child: DecoratedBox(
                  decoration: BoxDecoration(gradient: LinearGradient(colors: [Color(_template.top), Color(_template.bottom)])),
                  child: NgmyFxSample(fx: id, color: Color(_textColor ?? _template.text), size: (w * 0.42).clamp(12, 26)),
                ),
              ),
            ),
        ]);
      }),
      _label('HIGHLIGHT BEHIND THE WORDS', icon: Icons.highlight_rounded),
      Wrap(spacing: 10, runSpacing: 10, crossAxisAlignment: WrapCrossAlignment.center, children: [
        _swatches(_hlCustom ? -1 : _hlColor, (c) {
          _hlCustom = false;
          _hlColor = c;
        }, _hlColors),
        // A colour of your own: tap, then slide the colour and the shade.
        GestureDetector(
          onTap: () => setState(() => _hlCustom = true),
          child: Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: const SweepGradient(colors: [Color(0xFFFF0000), Color(0xFFFFFF00), Color(0xFF00FF00), Color(0xFF00FFFF), Color(0xFF0000FF), Color(0xFFFF00FF), Color(0xFFFF0000)]),
              border: Border.all(color: _hlCustom ? Colors.white : Colors.white24, width: _hlCustom ? 3 : 1),
            ),
            child: const Icon(Icons.colorize_rounded, size: 15, color: Colors.white),
          ),
        ),
      ]),
      const SizedBox(height: 6),
      _hint('Add a coloured band behind the words, with any word design. The first circle turns it off.'),
      if (_highlight != 0) ...[
        const SizedBox(height: 10),
        _card(
          child: Column(children: [
            if (_hlCustom) ...[
              _slider('Colour', _hlHue, 0, 360, (v) => _hlHue = v, shown: '${_hlHue.round()}°'),
              _slider('Shade', _hlLight, 0.15, 0.9, (v) => _hlLight = v, shown: '${(_hlLight * 100).round()}'),
            ],
            _slider('Strength', _hlAmt, 0.15, 1.0, (v) => _hlAmt = v, shown: '${(_hlAmt * 100).round()}%', neutral: 1.0),
          ]),
        ),
      ],
      _label('LOOK', icon: Icons.title_rounded),
      Wrap(spacing: 8, runSpacing: 8, crossAxisAlignment: WrapCrossAlignment.center, children: [
        _pill('Bold', on: _bold, icon: Icons.format_bold_rounded, onTap: () => setState(() => _bold = !_bold)),
        _pill('Italic', on: _italic, icon: Icons.format_italic_rounded, onTap: () => setState(() => _italic = !_italic)),
        for (final (a, ic) in const [(TextAlign.left, Icons.format_align_left_rounded), (TextAlign.center, Icons.format_align_center_rounded), (TextAlign.right, Icons.format_align_right_rounded)])
          GestureDetector(
            onTap: () => setState(() => _align = a),
            child: Container(
              width: 42,
              height: 38,
              decoration: BoxDecoration(
                gradient: _align == a ? _hot : null,
                color: _align == a ? null : Colors.white.withValues(alpha: 0.07),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: _align == a ? Colors.transparent : _line),
              ),
              child: Icon(ic, size: 20, color: Colors.white),
            ),
          ),
      ]),
      _label('COLOUR', icon: Icons.palette_rounded),
      _swatches(_textColor, (c) => _textColor = c, _inks),
      const SizedBox(height: 6),
      _hint('The first circle keeps the colour that comes with the design.'),
      _label('SIZE AND PLACE', icon: Icons.open_with_rounded),
      _card(
        child: Column(children: [
          _slider('Text size', _textScale, 0.5, 1.6, (v) => _textScale = v, shown: '${(_textScale * 100).round()}%', neutral: 1.0),
          _slider('Up / down', _quoteY, 0.12, 0.5, (v) => _quoteY = v, shown: '${(_quoteY * 100).round()}', neutral: 0.30),
        ]),
      ),
    ]);
  }

  Widget _photoTabView() {
    final bg = _bg;
    if (bg == null) {
      return GestureDetector(
        onTap: _pickPhoto,
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 34, horizontal: 18),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            color: _cardBg,
            border: Border.all(color: _violet.withValues(alpha: 0.6), width: 1.6),
            gradient: LinearGradient(colors: [_violet.withValues(alpha: 0.18), _pink.withValues(alpha: 0.12)]),
          ),
          child: Column(children: [
            Container(
              width: 62,
              height: 62,
              decoration: const BoxDecoration(shape: BoxShape.circle, gradient: _hot),
              child: const Icon(Icons.add_photo_alternate_rounded, color: Colors.white, size: 32),
            ),
            const SizedBox(height: 14),
            const Text('Add your picture', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
            const SizedBox(height: 6),
            const Text(
              'It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.4),
            ),
          ]),
        ),
      );
    }
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: SizedBox(width: 46, height: 62, child: Image.memory(bg, fit: BoxFit.cover, cacheWidth: 120)),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Photo studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
            const SizedBox(height: 8),
            Wrap(spacing: 6, runSpacing: 6, children: [
              _pill('Change', on: false, icon: Icons.swap_horiz_rounded, onTap: _pickPhoto),
              _pill('Remove', on: false, icon: Icons.delete_outline_rounded, onTap: () => setState(() {
                    _bg = null;
                    _resetPhotoLook();
                  })),
            ]),
          ]),
        ),
      ]),
      const SizedBox(height: 12),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (var i = 0; i < _photoTabs.length; i++) _pill(_photoTabs[i].$2, on: _photoTab == i, icon: _photoTabs[i].$1, onTap: () => setState(() => _photoTab = i)),
      ]),
      const SizedBox(height: 14),
      switch (_photoTab) {
        0 => _looksPanel(bg),
        1 => _lightPanel(),
        2 => _colourPanel(),
        3 => _effectsPanel(),
        _ => _cropPanel(),
      },
      const SizedBox(height: 10),
      Align(alignment: Alignment.centerLeft, child: _pill('Reset the whole picture', on: false, icon: Icons.restart_alt_rounded, onTap: () => setState(_resetPhotoLook))),
    ]);
  }

  Widget _looksPanel(Uint8List bg) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Wrap(spacing: 8, runSpacing: 8, children: [
        _pill('Auto enhance', on: false, icon: Icons.auto_fix_high_rounded, onTap: () => setState(() {
              _bright = 0.03;
              _contrast = 1.12;
              _sat = 1.15;
              _fade = 0;
              _exposure = 0;
            })),
        _pill('Make words easy to read', on: false, icon: Icons.visibility_rounded, onTap: () => setState(() {
              _shadeWords = 0.55;
              _dim = math.max(_dim, 0.12);
            })),
      ]),
      const SizedBox(height: 14),
      LayoutBuilder(builder: (context, box) {
        const gap = 8.0;
        final w = (box.maxWidth - gap * 3) / 4;
        return Wrap(spacing: gap, runSpacing: 10, children: [
          for (final l in _photoLooks)
            _tile(
              on: _isLook(l),
              label: l.name,
              w: w,
              h: w * 1.25,
              pad: 3,
              onTap: () => setState(() => _applyLook(l)),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(9),
                child: SizedBox.expand(
                  child: ColorFiltered(
                    colorFilter: ColorFilter.matrix(_matrixFor(l.bright, 0, l.contrast, l.sat, l.warm, l.tint, l.hue, l.fade, false)),
                    child: Image.memory(bg, fit: BoxFit.cover, cacheWidth: 140),
                  ),
                ),
              ),
            ),
        ]);
      }),
    ]);
  }

  Widget _lightPanel() => _card(
        child: Column(children: [
          _slider('Exposure', _exposure, -1.5, 1.5, (v) => _exposure = v, shown: _exposure.toStringAsFixed(1), neutral: 0),
          _slider('Brightness', _bright, -0.5, 0.5, (v) => _bright = v, shown: '${(_bright * 100).round()}', neutral: 0),
          _slider('Contrast', _contrast, 0.4, 2.0, (v) => _contrast = v, shown: '${(_contrast * 100).round()}', neutral: 1),
          _slider('Fade', _fade, 0, 1, (v) => _fade = v, shown: '${(_fade * 100).round()}', neutral: 0),
          _slider('Spotlight', _spot, 0, 1, (v) => _spot = v, shown: '${(_spot * 100).round()}', neutral: 0),
          _slider('Darken', _dim, 0, 0.85, (v) => _dim = v, shown: '${(_dim * 100).round()}', neutral: 0),
          _slider('Vignette', _vignette, 0, 0.9, (v) => _vignette = v, shown: '${(_vignette * 100).round()}', neutral: 0),
          _slider('Shade behind words', _shadeWords, 0, 0.85, (v) => _shadeWords = v, shown: '${(_shadeWords * 100).round()}', neutral: 0),
          _slider('Shade top & bottom', _shadeEdges, 0, 0.85, (v) => _shadeEdges = v, shown: '${(_shadeEdges * 100).round()}', neutral: 0),
        ]),
      );

  Widget _colourPanel() => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        _card(
          child: Column(children: [
            _slider('Colour strength', _sat, 0, 2.2, (v) => _sat = v, shown: '${(_sat * 100).round()}', neutral: 1),
            _slider('Warmth', _warm, -1, 1, (v) => _warm = v, shown: '${(_warm * 100).round()}', neutral: 0),
            _slider('Tint', _tint, -1, 1, (v) => _tint = v, shown: '${(_tint * 100).round()}', neutral: 0),
            _slider('Shift colours', _hue, -180, 180, (v) => _hue = v, shown: '${_hue.round()}°', neutral: 0),
            Align(
              alignment: Alignment.centerLeft,
              child: _pill('Negative', on: _invert, icon: Icons.invert_colors_rounded, onTap: () => setState(() => _invert = !_invert)),
            ),
          ]),
        ),
        _label('COLOUR WASH', icon: Icons.format_color_fill_rounded),
        _swatches(_tintColor, (c) => _tintColor = c, [null, ..._glows]),
        const SizedBox(height: 8),
        if (_tintColor != null) _card(child: _slider('Wash strength', _tintAmt, 0, 0.9, (v) => _tintAmt = v, shown: '${(_tintAmt * 100).round()}')),
      ]);

  Widget _effectsPanel() => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        _card(
          child: Column(children: [
            _slider('Blur', _blur, 0, 24, (v) => _blur = v, shown: _blur.round().toString(), neutral: 0),
            _slider('Soft focus', _soft, 0, 1, (v) => _soft = v, shown: '${(_soft * 100).round()}', neutral: 0),
            _slider('Film grain', _grain, 0, 1, (v) => _grain = v, shown: '${(_grain * 100).round()}', neutral: 0),
          ]),
        ),
        _label('LIGHT LEAK', icon: Icons.flare_rounded),
        _swatches(_leakColor, (c) => _leakColor = c, [null, ..._glows.take(8)]),
        const SizedBox(height: 8),
        if (_leakColor != null) _card(child: _slider('Leak strength', _leakAmt, 0, 1, (v) => _leakAmt = v, shown: '${(_leakAmt * 100).round()}')),
      ]);

  Widget _cropPanel() => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        _card(
          child: Column(children: [
            _slider('Zoom', _zoom, 1, 3, (v) => _zoom = v, shown: '${(_zoom * 100).round()}%', neutral: 1),
            _slider('Left / right', _panX, -1, 1, (v) => _panX = v, shown: '${(_panX * 100).round()}', neutral: 0),
            _slider('Up / down', _panY, -1, 1, (v) => _panY = v, shown: '${(_panY * 100).round()}', neutral: 0),
            _slider('Turn', _rot, -180, 180, (v) => _rot = v, shown: '${_rot.round()}°', neutral: 0),
          ]),
        ),
        const SizedBox(height: 10),
        Wrap(spacing: 8, runSpacing: 8, children: [
          _pill('Turn 90°', on: false, icon: Icons.rotate_90_degrees_cw_rounded, onTap: () => setState(() => _rot = ((_rot + 90 + 180) % 360) - 180)),
          _pill('Flip sideways', on: _flipX, icon: Icons.flip_rounded, onTap: () => setState(() => _flipX = !_flipX)),
          _pill('Flip upside down', on: _flipY, icon: Icons.flip_rounded, onTap: () => setState(() => _flipY = !_flipY)),
        ]),
      ]);

  Widget _logoTab() {
    Widget sample(String frame, String ring) {
      final bytes = _logoBytes;
      return ngmyFramedPicture(
        image: bytes == null ? const ColoredBox(color: Colors.white24) : Image.memory(bytes, fit: BoxFit.cover),
        frame: frame.isEmpty ? 'rounded' : frame,
        ring: ring,
      );
    }

    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        const Expanded(child: Text('NGMY logo', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16))),
        _pill('Reset', on: false, icon: Icons.restart_alt_rounded, onTap: () => setState(() {
              _logoX = 0.39;
              _logoY = 0.80;
              _logoSize = 0.22;
              _logoFrame = 'circle';
              _logoRing = 'gold';
            })),
      ]),
      const SizedBox(height: 4),
      _hint('Drag it on the quote to move it. It stays on every quote.'),
      _label('SHAPE', icon: Icons.interests_rounded),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final (id, label) in kNgmySlideFrames)
          if (id.isNotEmpty) _tile(on: _logoFrame == id, onTap: () => setState(() => _logoFrame = id), label: label, w: 62, h: 62, child: sample(id, _logoRing)),
      ]),
      _label('RING', icon: Icons.circle_outlined),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final (id, label) in kNgmySlideRings) _tile(on: _logoRing == id, onTap: () => setState(() => _logoRing = id), label: label, w: 62, h: 62, child: sample(_logoFrame, id)),
      ]),
      const SizedBox(height: 12),
      _card(
        child: _slider('Size', _logoSize, 0.12, 0.4, (v) {
          _logoSize = v;
          _logoX = _logoX.clamp(0.0, 1 - v);
          _logoY = _logoY.clamp(0.0, 0.95);
        }, shown: '${(_logoSize * 100).round()}', neutral: 0.22),
      ),
    ]);
  }

  // ── Screen ───────────────────────────────────────────────────────────────

  Widget _previewPane(double height) {
    return SizedBox(
      height: height,
      child: AspectRatio(
        aspectRatio: 9 / 16,
        child: LayoutBuilder(builder: (context, box) {
          final pw = box.maxWidth;
          final ph = box.maxHeight;
          return Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
              boxShadow: [BoxShadow(color: _violet.withValues(alpha: 0.35), blurRadius: 30, spreadRadius: -4)],
            ),
            child: Stack(children: [
              Positioned.fill(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: RepaintBoundary(
                    key: _previewKey,
                    child: Stack(fit: StackFit.expand, children: [
                      if (_bg != null) RepaintBoundary(key: _photoKey, child: _photoLayer()),
                      NgmySlideAnimatedRender(slide: _slide(), animate: false),
                    ]),
                  ),
                ),
              ),
              // Drag the logo anywhere on the quote. This handle is not part of the picture.
              Positioned(
                left: _logoX * pw,
                top: _logoY * ph,
                width: _logoSize * pw,
                height: _logoSize * pw,
                child: GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onPanUpdate: (d) => setState(() {
                    _logoX = (_logoX + d.delta.dx / pw).clamp(0.0, 1 - _logoSize);
                    _logoY = (_logoY + d.delta.dy / ph).clamp(0.0, 1 - _logoSize * pw / ph);
                  }),
                  child: DecoratedBox(
                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.white.withValues(alpha: 0.3), width: 1)),
                  ),
                ),
              ),
            ]),
          );
        }),
      ),
    );
  }

  Widget _tabBar() {
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 12, 12, 4),
      padding: const EdgeInsets.all(5),
      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(18), border: Border.all(color: _line)),
      child: Row(children: [
        for (var i = 0; i < _tabs.length; i++)
          Expanded(
            child: GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTap: () => setState(() => _tab = i),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 170),
                padding: const EdgeInsets.symmetric(vertical: 8),
                decoration: BoxDecoration(gradient: _tab == i ? _hot : null, borderRadius: BorderRadius.circular(14)),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Icon(_tabs[i].$1, size: 19, color: _tab == i ? Colors.white : Colors.white54),
                  const SizedBox(height: 3),
                  FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Text(_tabs[i].$2, style: TextStyle(color: _tab == i ? Colors.white : Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w800)),
                  ),
                ]),
              ),
            ),
          ),
      ]),
    );
  }

  Widget _controls() {
    return ClipRRect(
      borderRadius: const BorderRadius.vertical(top: Radius.circular(26)),
      child: ColoredBox(
        color: _panelBg,
        child: Column(children: [
          _tabBar(),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 10, 16, 20),
              children: [
                switch (_tab) {
                  0 => _designTab(),
                  1 => _wordsTab(),
                  2 => _textTab(),
                  3 => _photoTabView(),
                  _ => _logoTab(),
                },
              ],
            ),
          ),
        ]),
      ),
    );
  }

  Widget _actions() {
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 12),
      decoration: const BoxDecoration(color: _panelBg, border: Border(top: BorderSide(color: _line))),
      child: Row(children: [
        Expanded(
          child: GestureDetector(
            onTap: _busy ? null : _download,
            child: Container(
              height: 50,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                color: Colors.white.withValues(alpha: 0.08),
                border: Border.all(color: Colors.white24),
              ),
              child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                Icon(Icons.download_rounded, color: Colors.white, size: 20),
                SizedBox(width: 8),
                Flexible(child: FittedBox(fit: BoxFit.scaleDown, child: Text('Download picture', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)))),
              ]),
            ),
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: GestureDetector(
            onTap: _busy ? null : _editAsSlide,
            child: Container(
              height: 50,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                gradient: _hot,
                boxShadow: [BoxShadow(color: _pink.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6))],
              ),
              child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                if (_busy)
                  const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white))
                else
                  const Icon(Icons.slideshow_rounded, color: Colors.white, size: 20),
                const SizedBox(width: 8),
                const Flexible(child: FittedBox(fit: BoxFit.scaleDown, child: Text('Edit in Slides', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)))),
              ]),
            ),
          ),
        ),
      ]),
    );
  }

  Widget _header() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 4, 12, 0),
      child: Row(children: [
        IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.close_rounded, color: Colors.white)),
        const Text('NGMY Quotes', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
        const Spacer(),
        const Icon(Icons.auto_awesome_rounded, color: Color(0xFFFACC15), size: 18),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _ink0,
      body: SafeArea(
        child: LayoutBuilder(builder: (context, box) {
          final wide = box.maxWidth >= 860;
          if (wide) {
            final left = math.min(box.maxWidth * 0.4, 460.0);
            return Row(children: [
              SizedBox(
                width: left,
                child: Column(children: [
                  _header(),
                  Expanded(child: Center(child: _previewPane(math.max(240, box.maxHeight - 110)))),
                ]),
              ),
              Expanded(child: Column(children: [Expanded(child: _controls()), _actions()])),
            ]);
          }
          // On a phone the picture stays in view while the tools scroll under it.
          final previewH = (box.maxHeight * 0.36).clamp(190.0, 360.0);
          return Column(children: [
            _header(),
            Padding(padding: const EdgeInsets.symmetric(vertical: 8), child: Center(child: _previewPane(previewH))),
            Expanded(child: _controls()),
            _actions(),
          ]);
        }),
      ),
    );
  }
}

/// Fine film grain over the picture, the same every time so a downloaded copy matches the preview.
class _GrainPainter extends CustomPainter {
  _GrainPainter(this.amount);
  final double amount;

  @override
  void paint(Canvas canvas, Size size) {
    final rnd = math.Random(7);
    final n = (size.width * size.height / 55).round();
    final light = Paint()..color = Colors.white.withValues(alpha: 0.16 * amount);
    final dark = Paint()..color = Colors.black.withValues(alpha: 0.2 * amount);
    for (var i = 0; i < n; i++) {
      canvas.drawRect(Rect.fromLTWH(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height, 1.1, 1.1), i.isEven ? light : dark);
    }
  }

  @override
  bool shouldRepaint(_GrainPainter old) => old.amount != amount;
}
