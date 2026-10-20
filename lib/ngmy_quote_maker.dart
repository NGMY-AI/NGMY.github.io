import 'dart:convert';
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
/// own picture behind them, and either edit it as a slide or download it as a picture. Returns the
/// new presentation when the user chooses to edit it, otherwise null.
Future<NgmySlideDeck?> showNgmyQuoteMaker(BuildContext context) {
  return Navigator.of(context).push<NgmySlideDeck>(
    MaterialPageRoute(fullscreenDialog: true, builder: (_) => const _QuoteMakerScreen()),
  );
}

/// The maker as a plain widget, with an optional starting background picture (for tests).
@visibleForTesting
Widget ngmyQuoteMakerForTest({Uint8List? photo}) => _QuoteMakerScreen(initialPhoto: photo);

class _QuoteMakerScreen extends StatefulWidget {
  const _QuoteMakerScreen({this.initialPhoto});
  final Uint8List? initialPhoto;
  @override
  State<_QuoteMakerScreen> createState() => _QuoteMakerScreenState();
}

/// One look for the background picture: brightness, contrast, colour, warmth.
class _PhotoLook {
  const _PhotoLook(this.name, this.bright, this.contrast, this.sat, this.warm);
  final String name;
  final double bright;
  final double contrast;
  final double sat;
  final double warm;
}

const _photoLooks = [
  _PhotoLook('Original', 0, 1, 1, 0),
  _PhotoLook('Black & white', 0, 1.1, 0, 0),
  _PhotoLook('Sepia', 0, 1, 0.25, 0.9),
  _PhotoLook('Vivid', 0, 1.15, 1.6, 0),
  _PhotoLook('Faded', 0.12, 0.8, 0.8, 0.1),
  _PhotoLook('Cool', 0, 1.05, 1, -0.8),
  _PhotoLook('Warm', 0.03, 1.05, 1.1, 0.8),
  _PhotoLook('Dramatic', -0.05, 1.5, 1.2, 0),
];

List<double> _photoMatrix(double bright, double contrast, double sat, double warm) {
  const lr = 0.2126, lg = 0.7152, lb = 0.0722;
  final sr = (1 - sat) * lr, sg = (1 - sat) * lg, sb = (1 - sat) * lb;
  final off = 128 * (1 - contrast) + bright * 255;
  final c = contrast;
  return [
    (sr + sat) * c, sg * c, sb * c, 0, off + warm * 25,
    sr * c, (sg + sat) * c, sb * c, 0, off,
    sr * c, sg * c, (sb + sat) * c, 0, off - warm * 25,
    0, 0, 0, 1, 0,
  ];
}

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

  // The picture behind the quote, and the photo studio settings.
  Uint8List? _bg;
  double _bright = 0;
  double _contrast = 1;
  double _sat = 1;
  double _warm = 0;
  double _blur = 0;
  double _dim = 0;
  double _vignette = 0;
  double _zoom = 1;
  double _panX = 0;
  double _panY = 0;
  bool _flip = false;

  static const _groups = ['All', 'Robotic', 'Nature', 'Warm', 'Bold', 'Clean'];
  static const _tabs = [
    (Icons.palette_rounded, 'Design'),
    (Icons.format_size_rounded, 'Word sizes'),
    (Icons.text_fields_rounded, 'Text'),
    (Icons.photo_rounded, 'Photo'),
    (Icons.verified_rounded, 'Logo'),
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
  ];
  static const _inks = <int?>[
    null,
    0xFFFFFFFF,
    0xFF111827,
    0xFFFACC15,
    0xFF22D3EE,
    0xFFF472B6,
    0xFF4ADE80,
    0xFFEF4444,
    0xFF3B82F6,
    0xFFFB923C,
  ];

  @override
  void initState() {
    super.initState();
    _bg = widget.initialPhoto;
    _loadLogo();
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
    _bright = 0;
    _contrast = 1;
    _sat = 1;
    _warm = 0;
    _blur = 0;
    _dim = 0;
    _vignette = 0;
    _zoom = 1;
    _panX = 0;
    _panY = 0;
    _flip = false;
  }

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

  // ── The picture behind the words ──────────────────────────────────────────

  Widget _photoImage(Uint8List bytes, {bool looks = true}) {
    Widget img = Image.memory(bytes, fit: BoxFit.cover, gaplessPlayback: true, filterQuality: FilterQuality.medium);
    if (_flip) img = Transform.flip(flipX: true, child: img);
    if (looks) img = ColorFiltered(colorFilter: ColorFilter.matrix(_photoMatrix(_bright, _contrast, _sat, _warm)), child: img);
    return img;
  }

  Widget _photoLayer() {
    final bytes = _bg!;
    return LayoutBuilder(builder: (context, box) {
      Widget img = Transform.translate(
        offset: Offset(-_panX * box.maxWidth * (_zoom - 1) / 2, -_panY * box.maxHeight * (_zoom - 1) / 2),
        child: Transform.scale(scale: _zoom, child: _photoImage(bytes)),
      );
      if (_blur > 0.2) {
        img = ImageFiltered(imageFilter: ui.ImageFilter.blur(sigmaX: _blur, sigmaY: _blur, tileMode: TileMode.clamp), child: img);
      }
      return Stack(fit: StackFit.expand, children: [
        ClipRect(child: SizedBox.expand(child: img)),
        if (_dim > 0) ColoredBox(color: Colors.black.withValues(alpha: _dim)),
        if (_vignette > 0)
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: RadialGradient(
                radius: 0.95,
                colors: [Colors.transparent, Colors.black.withValues(alpha: _vignette)],
                stops: const [0.45, 1],
              ),
            ),
          ),
      ]);
    });
  }

  // ── Small building blocks ─────────────────────────────────────────────────

  InputDecoration _field(String label, String hint) => InputDecoration(
        labelText: label,
        hintText: hint,
        labelStyle: const TextStyle(color: Colors.white70),
        hintStyle: const TextStyle(color: Colors.white30),
        counterStyle: const TextStyle(color: Colors.white38),
        filled: true,
        fillColor: Colors.white.withValues(alpha: 0.06),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
      );

  Widget _label(String text) => Padding(
        padding: const EdgeInsets.only(top: 12, bottom: 6),
        child: Text(text, style: const TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
      );

  Widget _hint(String text) => Text(text, style: const TextStyle(color: Colors.white54, fontSize: 12));

  Widget _tile({required bool on, required VoidCallback onTap, required Widget child, String? label, double w = 74, double h = 64}) {
    return GestureDetector(
      onTap: onTap,
      child: SizedBox(
        width: w,
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Container(
            width: w,
            height: h,
            padding: const EdgeInsets.all(5),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              color: on ? const Color(0xFF8B5CF6).withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.05),
              border: Border.all(color: on ? const Color(0xFFA78BFA) : Colors.white12, width: on ? 2 : 1),
            ),
            child: child,
          ),
          if (label != null) ...[
            const SizedBox(height: 4),
            Text(label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: on ? Colors.white : Colors.white60, fontSize: 10.5, fontWeight: FontWeight.w700)),
          ],
        ]),
      ),
    );
  }

  Widget _slider(String name, double value, double min, double max, ValueChanged<double> onChanged, {String? shown}) {
    return Row(children: [
      SizedBox(width: 92, child: Text(name, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 13))),
      Expanded(child: Slider(value: value.clamp(min, max), min: min, max: max, onChanged: (v) => setState(() => onChanged(v)))),
      SizedBox(width: 38, child: Text(shown ?? value.toStringAsFixed(1), textAlign: TextAlign.right, style: const TextStyle(color: Colors.white38, fontSize: 11))),
    ]);
  }

  // ── The five tabs ─────────────────────────────────────────────────────────

  Widget _designTab() {
    final shown = _group == 'All' ? kNgmyQuoteTemplates : kNgmyQuoteTemplates.where((t) => t.group == _group).toList();
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(children: [
          for (final g in _groups)
            Padding(
              padding: const EdgeInsets.only(right: 6),
              child: ChoiceChip(
                label: Text(g, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                selected: _group == g,
                onSelected: (_) => setState(() => _group = g),
              ),
            ),
        ]),
      ),
      const SizedBox(height: 10),
      SizedBox(
        height: 116,
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
                width: 68,
                child: Column(children: [
                  Container(
                    width: 68,
                    height: 92,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(t.top), Color(t.bottom)]),
                      border: Border.all(color: selected ? Colors.white : Colors.white24, width: selected ? 2.5 : 1),
                    ),
                    child: Center(child: Text('“', style: TextStyle(color: Color(t.accent), fontSize: 38, fontWeight: FontWeight.w900))),
                  ),
                  const SizedBox(height: 4),
                  Text(t.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: selected ? Colors.white : Colors.white60, fontSize: 10.5, fontWeight: FontWeight.w700)),
                ]),
              ),
            );
          },
        ),
      ),
      SwitchListTile(
        contentPadding: EdgeInsets.zero,
        dense: true,
        title: const Text('Design shapes', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
        subtitle: const Text('The lines and circles that come with the design', style: TextStyle(color: Colors.white54, fontSize: 12)),
        value: _shapes,
        onChanged: (v) => setState(() => _shapes = v),
      ),
      SwitchListTile(
        contentPadding: EdgeInsets.zero,
        dense: true,
        title: const Text('Big quote mark', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
        value: _quoteMarks,
        onChanged: (v) => setState(() => _quoteMarks = v),
      ),
    ]);
  }

  Widget _wordsTab() {
    final words = _syncWords();
    if (words.isEmpty) {
      return _hint('Type your quote in the box above. Every word will show up here so you can make it bigger, normal or smaller.');
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
      Container(
        width: double.infinity,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(14)),
        child: Wrap(spacing: 6, runSpacing: 6, crossAxisAlignment: WrapCrossAlignment.center, children: [
          for (var i = 0; i < words.length; i++)
            GestureDetector(
              onTap: () => setState(() => _picked.contains(i) ? _picked.remove(i) : _picked.add(i)),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: _picked.contains(i) ? const Color(0xFF8B5CF6).withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.06),
                  border: Border.all(color: _picked.contains(i) ? const Color(0xFFA78BFA) : Colors.white12, width: _picked.contains(i) ? 2 : 1),
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
      Wrap(spacing: 6, runSpacing: 6, children: [
        ActionChip(
          label: const Text('All words', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
          onPressed: () => setState(() => _picked.addAll(List.generate(words.length, (i) => i))),
        ),
        if (sentenceCount > 1)
          for (var k = 0; k < sentenceCount && k < 8; k++)
            ActionChip(
              label: Text('Sentence ${k + 1}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
              onPressed: () => setState(() {
                _picked
                  ..clear()
                  ..addAll([for (var i = 0; i < words.length; i++) if (sentenceOf[i] == k) i]);
              }),
            ),
        ActionChip(label: const Text('Clear picks', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700)), onPressed: () => setState(_picked.clear)),
      ]),
      _label('SIZE OF THE PICKED WORDS'),
      Wrap(spacing: 6, runSpacing: 6, children: [
        for (final (lvl, name) in const [(-1, 'Small'), (0, 'Normal'), (1, 'Big'), (2, 'Huge')])
          ChoiceChip(
            label: Text(name, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800)),
            selected: shared == lvl,
            onSelected: _picked.isEmpty ? null : (_) => setLevel(lvl),
          ),
        ActionChip(
          label: const Text('Make every word normal', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
          onPressed: () => setState(() => _levels.fillRange(0, _levels.length, 0)),
        ),
      ]),
    ]);
  }

  Widget _textTab() {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      _label('WORD DESIGN'),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final (id, label) in _fxList)
          _tile(
            on: _fx == id,
            onTap: () => setState(() => _fx = id),
            label: label,
            child: ClipRect(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: [Color(_template.top), Color(_template.bottom)]),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: NgmyFxSample(fx: id, color: Color(_textColor ?? _template.text), size: 26),
              ),
            ),
          ),
      ]),
      _label('LOOK'),
      Wrap(spacing: 8, runSpacing: 8, crossAxisAlignment: WrapCrossAlignment.center, children: [
        FilterChip(
          label: const Text('Bold', style: TextStyle(fontWeight: FontWeight.w900)),
          selected: _bold,
          onSelected: (v) => setState(() => _bold = v),
        ),
        FilterChip(
          label: const Text('Italic', style: TextStyle(fontStyle: FontStyle.italic, fontWeight: FontWeight.w700)),
          selected: _italic,
          onSelected: (v) => setState(() => _italic = v),
        ),
        SegmentedButton<TextAlign>(
          showSelectedIcon: false,
          segments: const [
            ButtonSegment(value: TextAlign.left, icon: Icon(Icons.format_align_left_rounded, size: 18)),
            ButtonSegment(value: TextAlign.center, icon: Icon(Icons.format_align_center_rounded, size: 18)),
            ButtonSegment(value: TextAlign.right, icon: Icon(Icons.format_align_right_rounded, size: 18)),
          ],
          selected: {_align},
          onSelectionChanged: (v) => setState(() => _align = v.first),
        ),
      ]),
      _label('COLOUR'),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final c in _inks)
          GestureDetector(
            onTap: () => setState(() => _textColor = c),
            child: Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: c == null ? null : Color(c),
                gradient: c == null ? LinearGradient(colors: [Color(_template.top), Color(_template.bottom)]) : null,
                border: Border.all(color: _textColor == c ? Colors.white : Colors.white24, width: _textColor == c ? 3 : 1),
              ),
              child: c == null ? const Icon(Icons.auto_awesome_rounded, size: 16, color: Colors.white) : null,
            ),
          ),
      ]),
      const SizedBox(height: 4),
      _hint('The first circle keeps the colour that comes with the design.'),
      _label('SIZE AND PLACE'),
      _slider('Text size', _textScale, 0.5, 1.6, (v) => _textScale = v, shown: '${(_textScale * 100).round()}%'),
      _slider('Up / down', _quoteY, 0.12, 0.5, (v) => _quoteY = v, shown: '${(_quoteY * 100).round()}'),
    ]);
  }

  Widget _photoTab() {
    final bg = _bg;
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        FilledButton.icon(
          onPressed: _pickPhoto,
          style: FilledButton.styleFrom(backgroundColor: const Color(0xFF7C3AED)),
          icon: const Icon(Icons.add_photo_alternate_rounded, size: 20),
          label: Text(bg == null ? 'Add your picture' : 'Change picture', style: const TextStyle(fontWeight: FontWeight.w800)),
        ),
        const SizedBox(width: 8),
        if (bg != null)
          OutlinedButton(
            onPressed: () => setState(() {
              _bg = null;
              _resetPhotoLook();
            }),
            style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white38)),
            child: const Text('Remove', style: TextStyle(fontWeight: FontWeight.w800)),
          ),
      ]),
      const SizedBox(height: 6),
      _hint(bg == null
          ? 'Put your own picture behind the words. Your words, logo and design stay on top; only the background changes.'
          : 'This is the background. Make it brighter, softer, darker or a different colour so the words are easy to read.'),
      if (bg != null) ...[
        _label('LOOKS'),
        SizedBox(
          height: 98,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: _photoLooks.length,
            separatorBuilder: (_, __) => const SizedBox(width: 8),
            itemBuilder: (_, i) {
              final l = _photoLooks[i];
              final on = (_bright - l.bright).abs() < 0.001 && (_contrast - l.contrast).abs() < 0.001 && (_sat - l.sat).abs() < 0.001 && (_warm - l.warm).abs() < 0.001;
              return _tile(
                on: on,
                label: l.name,
                w: 66,
                h: 74,
                onTap: () => setState(() {
                  _bright = l.bright;
                  _contrast = l.contrast;
                  _sat = l.sat;
                  _warm = l.warm;
                }),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: SizedBox.expand(
                    child: ColorFiltered(
                      colorFilter: ColorFilter.matrix(_photoMatrix(l.bright, l.contrast, l.sat, l.warm)),
                      child: Image.memory(bg, fit: BoxFit.cover, cacheWidth: 120),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
        _label('LIGHT'),
        _slider('Brightness', _bright, -0.5, 0.5, (v) => _bright = v, shown: '${(_bright * 100).round()}'),
        _slider('Contrast', _contrast, 0.5, 1.8, (v) => _contrast = v, shown: '${(_contrast * 100).round()}'),
        _slider('Darken', _dim, 0, 0.85, (v) => _dim = v, shown: '${(_dim * 100).round()}'),
        _slider('Vignette', _vignette, 0, 0.9, (v) => _vignette = v, shown: '${(_vignette * 100).round()}'),
        _label('COLOUR'),
        _slider('Colour', _sat, 0, 2, (v) => _sat = v, shown: '${(_sat * 100).round()}'),
        _slider('Warmth', _warm, -1, 1, (v) => _warm = v, shown: '${(_warm * 100).round()}'),
        _label('FOCUS AND FRAME'),
        _slider('Blur', _blur, 0, 24, (v) => _blur = v, shown: _blur.round().toString()),
        _slider('Zoom', _zoom, 1, 3, (v) => _zoom = v, shown: '${(_zoom * 100).round()}%'),
        _slider('Left / right', _panX, -1, 1, (v) => _panX = v, shown: '${(_panX * 100).round()}'),
        _slider('Up / down', _panY, -1, 1, (v) => _panY = v, shown: '${(_panY * 100).round()}'),
        Row(children: [
          FilterChip(label: const Text('Flip'), selected: _flip, onSelected: (v) => setState(() => _flip = v)),
          const SizedBox(width: 8),
          TextButton(onPressed: () => setState(_resetPhotoLook), child: const Text('Reset picture')),
        ]),
      ],
    ]);
  }

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
        const Icon(Icons.verified_rounded, color: Color(0xFFFACC15), size: 18),
        const SizedBox(width: 8),
        const Expanded(child: Text('NGMY logo', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
        TextButton(
          onPressed: () => setState(() {
            _logoX = 0.39;
            _logoY = 0.80;
            _logoSize = 0.22;
            _logoFrame = 'circle';
            _logoRing = 'gold';
          }),
          child: const Text('Reset'),
        ),
      ]),
      _hint('Drag it on the quote to move it. It stays on every quote.'),
      _label('SHAPE'),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final (id, label) in kNgmySlideFrames)
          if (id.isNotEmpty)
            _tile(on: _logoFrame == id, onTap: () => setState(() => _logoFrame = id), label: label, w: 66, h: 66, child: sample(id, _logoRing)),
      ]),
      _label('RING'),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final (id, label) in kNgmySlideRings)
          _tile(on: _logoRing == id, onTap: () => setState(() => _logoRing = id), label: label, w: 66, h: 66, child: sample(_logoFrame, id)),
      ]),
      const SizedBox(height: 8),
      _slider('Size', _logoSize, 0.12, 0.4, (v) {
        _logoSize = v;
        _logoX = _logoX.clamp(0.0, 1 - v);
        _logoY = _logoY.clamp(0.0, 0.95);
      }, shown: '${(_logoSize * 100).round()}'),
    ]);
  }

  // ── Screen ────────────────────────────────────────────────────────────────

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0B1220),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0B1220),
        foregroundColor: Colors.white,
        elevation: 0,
        title: const Text('NGMY Quotes', style: TextStyle(fontWeight: FontWeight.w900)),
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
          children: [
            Center(
              child: ConstrainedBox(
                constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.5),
                child: AspectRatio(
                  aspectRatio: 9 / 16,
                  child: LayoutBuilder(
                    builder: (context, box) {
                      final pw = box.maxWidth;
                      final ph = box.maxHeight;
                      return Stack(
                        children: [
                          Positioned.fill(
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(18),
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
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(8),
                                  border: Border.all(color: Colors.white.withValues(alpha: 0.35), width: 1),
                                ),
                              ),
                            ),
                          ),
                        ],
                      );
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 14),
            TextField(
              controller: _quote,
              maxLines: 4,
              minLines: 2,
              maxLength: 280,
              onChanged: (_) => setState(_syncWords),
              style: const TextStyle(color: Colors.white),
              decoration: _field('Your quote', _template.sample),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _author,
              onChanged: (_) => setState(() {}),
              style: const TextStyle(color: Colors.white),
              decoration: _field('Who said it', 'NGMY'),
            ),
            const SizedBox(height: 14),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (var i = 0; i < _tabs.length; i++)
                ChoiceChip(
                  avatar: Icon(_tabs[i].$1, size: 18),
                  label: Text(_tabs[i].$2, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800)),
                  selected: _tab == i,
                  onSelected: (_) => setState(() => _tab = i),
                ),
            ]),
            const SizedBox(height: 12),
            switch (_tab) {
              0 => _designTab(),
              1 => _wordsTab(),
              2 => _textTab(),
              3 => _photoTab(),
              _ => _logoTab(),
            },
            const SizedBox(height: 18),
            Row(children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: _busy ? null : _download,
                  style: OutlinedButton.styleFrom(
                    foregroundColor: Colors.white,
                    side: const BorderSide(color: Colors.white38),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  icon: const Icon(Icons.download_rounded),
                  label: const Text('Download picture', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton.icon(
                  onPressed: _busy ? null : _editAsSlide,
                  style: FilledButton.styleFrom(
                    backgroundColor: const Color(0xFF7C3AED),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  icon: const Icon(Icons.edit_rounded),
                  label: const Text('Edit in Slides', style: TextStyle(fontWeight: FontWeight.w900)),
                ),
              ),
            ]),
          ],
        ),
      ),
    );
  }
}
