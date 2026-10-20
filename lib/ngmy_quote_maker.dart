import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

import 'ngmy_quote_templates.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';
import 'ngmy_vault_web_io.dart';

/// NGMY Quotes: pick a design, type a quote, and either edit it as a slide or download it as a
/// picture. Returns the new presentation when the user chooses to edit it, otherwise null.
Future<NgmySlideDeck?> showNgmyQuoteMaker(BuildContext context) {
  return Navigator.of(context).push<NgmySlideDeck>(
    MaterialPageRoute(fullscreenDialog: true, builder: (_) => const _QuoteMakerScreen()),
  );
}

class _QuoteMakerScreen extends StatefulWidget {
  const _QuoteMakerScreen();
  @override
  State<_QuoteMakerScreen> createState() => _QuoteMakerScreenState();
}

class _QuoteMakerScreenState extends State<_QuoteMakerScreen> {
  final _quote = TextEditingController();
  final _author = TextEditingController(text: 'NGMY');
  final _previewKey = GlobalKey();
  NgmyQuoteTemplate _template = kNgmyQuoteTemplates.first;
  String _group = 'All';
  String? _logo;
  bool _busy = false;
  // The NGMY logo: round with a ring by default. It can be moved, reframed and resized, never removed.
  final String _seed = 'quote${DateTime.now().microsecondsSinceEpoch}';
  double _logoX = 0.39;
  double _logoY = 0.80;
  double _logoSize = 0.22;
  String _logoFrame = 'circle';
  String _logoRing = 'gold';

  // How the words look: a design, an overall size, and bigger words marked with *stars*.
  String _fx = '';
  double _textScale = 1.0;

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

  /// Makes the selected words (or the word the cursor is in) bigger by putting stars around them.
  void _bigger() {
    final text = _quote.text;
    var sel = _quote.selection;
    if (!sel.isValid) sel = TextSelection.collapsed(offset: text.length);
    var a = sel.start;
    var b = sel.end;
    if (a == b) {
      while (a > 0 && !RegExp(r'\s').hasMatch(text[a - 1])) {
        a--;
      }
      while (b < text.length && !RegExp(r'\s').hasMatch(text[b])) {
        b++;
      }
    }
    if (a == b) return;
    final piece = text.substring(a, b).replaceAll('*', '');
    final next = '${text.substring(0, a)}*$piece*${text.substring(b)}';
    _quote.value = TextEditingValue(text: next, selection: TextSelection.collapsed(offset: a + piece.length + 2));
    setState(() {});
  }

  void _normalWords() {
    final text = _quote.text;
    final sel = _quote.selection;
    if (sel.isValid && !sel.isCollapsed) {
      final next = text.replaceRange(sel.start, sel.end, text.substring(sel.start, sel.end).replaceAll('*', ''));
      _quote.value = TextEditingValue(text: next, selection: TextSelection.collapsed(offset: sel.start));
    } else {
      _quote.value = TextEditingValue(text: text.replaceAll('*', ''), selection: const TextSelection.collapsed(offset: 0));
    }
    setState(() {});
  }

  List<Widget> _wordsControls() => [
        Row(children: [
          const Icon(Icons.text_fields_rounded, color: Color(0xFFFACC15), size: 18),
          const SizedBox(width: 8),
          const Expanded(
            child: Text('Words', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
          ),
        ]),
        const SizedBox(height: 4),
        const Text('Select words or a whole sentence in your quote, then tap Bigger. Or put *stars* around them.',
            style: TextStyle(color: Colors.white54, fontSize: 12)),
        const SizedBox(height: 8),
        Row(children: [
          FilledButton.icon(
            onPressed: _bigger,
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF7C3AED)),
            icon: const Icon(Icons.format_size_rounded, size: 18),
            label: const Text('Bigger', style: TextStyle(fontWeight: FontWeight.w800)),
          ),
          const SizedBox(width: 8),
          OutlinedButton(
            onPressed: _normalWords,
            style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white38)),
            child: const Text('Normal', style: TextStyle(fontWeight: FontWeight.w800)),
          ),
        ]),
        Row(children: [
          const Text('Size', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
          Expanded(
            child: Slider(value: _textScale, min: 0.6, max: 1.5, onChanged: (v) => setState(() => _textScale = v)),
          ),
        ]),
        const Text('DESIGN', style: TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
        const SizedBox(height: 6),
        Wrap(spacing: 6, runSpacing: 6, children: [
          for (final (id, label) in _fxList)
            ChoiceChip(
              label: Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
              selected: _fx == id,
              onSelected: (_) => setState(() => _fx = id),
            ),
        ]),
        const SizedBox(height: 14),
      ];

  static const _groups =['All', 'Robotic', 'Nature', 'Warm', 'Bold', 'Clean'];

  @override
  void initState() {
    super.initState();
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
      setState(() => _logo = 'data:image/png;base64,${base64Encode(bytes)}');
    } catch (_) {
      // The quote still has the NGMY name watermark without the logo picture.
    }
  }

  NgmySlide _slide() => ngmyBuildQuoteSlide(
        _template,
        quote: _quote.text,
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
      );

  void _editAsSlide() {
    final deck = NgmySlideDeck(
      id: NgmySlidesTemplates.newId(),
      name: 'NGMY Quote',
      aspectRatio: NgmySlideAspectRatio.portrait916,
      autoAdvanceSeconds: 6,
      slides: [_slide()],
    );
    Navigator.of(context).pop(deck);
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

  @override
  Widget build(BuildContext context) {
    final shown = _group == 'All' ? kNgmyQuoteTemplates : kNgmyQuoteTemplates.where((t) => t.group == _group).toList();
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
                                child: NgmySlideAnimatedRender(slide: _slide(), animate: false),
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
              onChanged: (_) => setState(() {}),
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
            ..._wordsControls(),
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
                            gradient: LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: [Color(t.top), Color(t.bottom)],
                            ),
                            border: Border.all(color: selected ? Colors.white : Colors.white24, width: selected ? 2.5 : 1),
                          ),
                          child: Center(
                            child: Text('“', style: TextStyle(color: Color(t.accent), fontSize: 38, fontWeight: FontWeight.w900)),
                          ),
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
            const SizedBox(height: 18),
            Row(children: [
              const Icon(Icons.verified_rounded, color: Color(0xFFFACC15), size: 18),
              const SizedBox(width: 8),
              const Expanded(
                child: Text('NGMY logo', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
              ),
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
            const Text('Drag it on the quote to move it. It stays on every quote.',
                style: TextStyle(color: Colors.white54, fontSize: 12)),
            const SizedBox(height: 10),
            const Text('SHAPE', style: TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
            const SizedBox(height: 6),
            Wrap(spacing: 6, runSpacing: 6, children: [
              for (final (id, label) in kNgmySlideFrames)
                if (id.isNotEmpty)
                  ChoiceChip(
                    label: Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                    selected: _logoFrame == id,
                    onSelected: (_) => setState(() => _logoFrame = id),
                  ),
            ]),
            const SizedBox(height: 10),
            const Text('RING', style: TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
            const SizedBox(height: 6),
            Wrap(spacing: 6, runSpacing: 6, children: [
              for (final (id, label) in kNgmySlideRings)
                ChoiceChip(
                  label: Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                  selected: _logoRing == id,
                  onSelected: (_) => setState(() => _logoRing = id),
                ),
            ]),
            const SizedBox(height: 10),
            Row(children: [
              const Text('Size', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
              Expanded(
                child: Slider(
                  value: _logoSize,
                  min: 0.12,
                  max: 0.4,
                  onChanged: (v) => setState(() {
                    _logoSize = v;
                    _logoX = _logoX.clamp(0.0, 1 - v);
                    _logoY = _logoY.clamp(0.0, 0.95);
                  }),
                ),
              ),
            ]),
            const SizedBox(height: 10),
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
}
