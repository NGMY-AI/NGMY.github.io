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

  static const _groups = ['All', 'Robotic', 'Nature', 'Warm', 'Bold', 'Clean'];

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
      if (!mounted) return;
      setState(() => _logo = 'data:image/png;base64,${base64Encode(data.buffer.asUint8List())}');
    } catch (_) {
      // The quote still has the NGMY name watermark without the logo picture.
    }
  }

  NgmySlide _slide() => ngmyBuildQuoteSlide(_template, quote: _quote.text, author: _author.text, logoData: _logo);

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
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(18),
                    child: RepaintBoundary(
                      key: _previewKey,
                      child: NgmySlideAnimatedRender(slide: _slide(), animate: false),
                    ),
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
            Row(children: [
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
            const SizedBox(height: 16),
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
