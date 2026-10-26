import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_book_studio.dart' show NgmyAiBadge;
import 'ngmy_news_ai.dart';
import 'ngmy_news_paper.dart';
import 'ngmy_photo_crop.dart';
import 'ngmy_vault_web_io.dart';

/// NGMY News: add a picture, and the AI writes a newspaper page about NGMY around it.
/// Then talk to the AI to change anything, pick another design, and download the page.
Future<void> showNgmyNewsMaker(BuildContext context, {Uint8List? photo}) {
  return Navigator.of(context).push<void>(MaterialPageRoute(fullscreenDialog: true, builder: (_) => NgmyNewsMakerScreen(initialPhoto: photo)));
}

typedef NgmyNewsWriter = Future<NgmyNewsDoc> Function({required NgmyNewsTemplate template, Uint8List? photo, String request, String? paper});
typedef NgmyNewsEditor = Future<NgmyNewsEdit> Function({required NgmyNewsDoc doc, required NgmyNewsTemplate template, required String instruction, Uint8List? photo, List<(String, String)> history});

const _bg = Color(0xFF070B16);
const _card = Color(0xFF151F36);
const _line = Color(0x1FFFFFFF);
const _violet = Color(0xFF8B5CF6);
const _pink = Color(0xFFEC4899);

class NgmyNewsMakerScreen extends StatefulWidget {
  const NgmyNewsMakerScreen({super.key, this.initialPhoto, this.writer, this.editor});
  final Uint8List? initialPhoto;

  /// The AI calls, replaceable in tests.
  final NgmyNewsWriter? writer;
  final NgmyNewsEditor? editor;

  @override
  State<NgmyNewsMakerScreen> createState() => _NgmyNewsMakerScreenState();
}

class _NgmyNewsMakerScreenState extends State<NgmyNewsMakerScreen> {
  final _pageKey = GlobalKey();
  final _request = TextEditingController();
  final _chat = TextEditingController();
  final _scroll = ScrollController();
  Uint8List? _photo;
  Uint8List? _logo;
  NgmyNewsTemplate _template = kNgmyNewsTemplates.first;
  NgmyNewsDoc _doc = const NgmyNewsDoc();
  String _lang = 'en';
  bool _busy = false;
  String _status = '';
  final List<(String, String)> _talk = [];
  final List<NgmyNewsDoc> _undo = [];

  @override
  void initState() {
    super.initState();
    _photo = widget.initialPhoto;
    _doc = NgmyNewsDoc(paper: ngmyNewsPaperNameFor(_template));
    ngmyLoadNewsFonts().then((_) {
      if (mounted) setState(() {});
    });
    rootBundle.load('assets/images/ngmy_logo.png').then((d) {
      if (mounted) setState(() => _logo = d.buffer.asUint8List());
    }).catchError((_) {});
  }

  @override
  void dispose() {
    _request.dispose();
    _chat.dispose();
    _scroll.dispose();
    super.dispose();
  }

  void _say(String m) {
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(m)));
  }

  Future<void> _pickPhoto() async {
    try {
      final f = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1600, imageQuality: 88);
      if (f == null) return;
      final b = await f.readAsBytes();
      if (!mounted) return;
      if (!mounted) return;
      // The picture opens in the crop screen first. "Use the whole picture" keeps it as it is.
      final cropped = await showNgmyPhotoCrop(context, b);
      if (cropped == null || !mounted) return;
      await precacheImage(MemoryImage(cropped), context);
      if (mounted) setState(() => _photo = cropped);
    } catch (e) {
      _say('Could not open that picture. $e');
    }
  }

  Future<void> _crop() async {
    final p = _photo;
    if (p == null || _busy) return;
    final cropped = await showNgmyPhotoCrop(context, p);
    if (cropped == null || !mounted) return;
    await precacheImage(MemoryImage(cropped), context);
    if (mounted) setState(() => _photo = cropped);
  }

  Future<void> _write() async {
    if (_busy) return;
    setState(() {
      _busy = true;
      _status = 'The editor is writing your newspaper…';
    });
    try {
      final write = widget.writer ?? ngmyWriteNews;
      final asked = _lang == 'sw' ? '${_request.text.trim()} Write the whole newspaper in Swahili (Kiswahili).'.trim() : _request.text;
      final doc = await write(template: _template, photo: _photo, request: asked, paper: null);
      if (!mounted) return;
      setState(() {
        _undo.clear();
        _doc = doc;
        _talk
          ..clear()
          ..add(('ai', 'Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.'));
      });
    } catch (e) {
      _say('$e');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _send() async {
    final text = _chat.text.trim();
    if (text.isEmpty || _busy || _doc.isEmpty) return;
    setState(() {
      _busy = true;
      _status = 'Working on it…';
      _talk.add(('you', text));
      _chat.clear();
    });
    try {
      final edit = widget.editor ?? ngmyEditNews;
      final r = await edit(doc: _doc, template: _template, instruction: text, photo: _photo, history: List.of(_talk));
      if (!mounted) return;
      setState(() {
        if (r.changed) {
          _undo.add(_doc);
          _doc = r.doc;
        }
        _talk.add(('ai', r.message));
      });
    } catch (e) {
      if (mounted) setState(() => _talk.add(('ai', '$e')));
    } finally {
      if (mounted) setState(() => _busy = false);
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (_scroll.hasClients) _scroll.animateTo(_scroll.position.maxScrollExtent, duration: const Duration(milliseconds: 250), curve: Curves.easeOut);
      });
    }
  }

  void _pickTemplate(NgmyNewsTemplate t) {
    setState(() {
      // The paper keeps its name unless it still has the old design's default name.
      final wasDefault = _doc.paper == ngmyNewsPaperNameFor(_template);
      _template = t;
      if (wasDefault) _doc = _doc.copyWith(paper: ngmyNewsPaperNameFor(t));
    });
  }

  Future<void> _download() async {
    if (_busy || _doc.isEmpty) return;
    setState(() {
      _busy = true;
      _status = 'Making your picture…';
    });
    try {
      await WidgetsBinding.instance.endOfFrame;
      await Future<void>.delayed(const Duration(milliseconds: 350));
      final ro = _pageKey.currentContext?.findRenderObject();
      if (ro is! RenderRepaintBoundary) throw 'The page is not ready yet.';
      final image = await ro.toImage(pixelRatio: 1800 / ro.size.width);
      final data = await image.toByteData(format: ui.ImageByteFormat.png);
      if (data == null) throw 'Could not make the picture.';
      final ok = await ngmyVaultDownloadBytes(data.buffer.asUint8List(), 'ngmy_news.png', 'image/png');
      _say(ok ? 'Your newspaper picture is ready. Check your downloads.' : 'Downloading is not available here.');
    } catch (e) {
      _say('$e');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final hasDoc = !_doc.isEmpty;
    return Scaffold(
      backgroundColor: _bg,
      appBar: AppBar(
        backgroundColor: _bg,
        elevation: 0,
        leading: IconButton(icon: const Icon(Icons.close_rounded), onPressed: () => Navigator.of(context).maybePop()),
        title: const Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(Icons.newspaper_rounded, size: 22, color: Color(0xFFFACC15)),
          SizedBox(width: 8),
          Text('NGMY NEWS', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 16)),
        ]),
        centerTitle: true,
        actions: [
          if (_undo.isNotEmpty) IconButton(tooltip: 'Undo the last change', icon: const Icon(Icons.undo_rounded), onPressed: () => setState(() => _doc = _undo.removeLast())),
          IconButton(tooltip: 'Download', icon: const Icon(Icons.download_rounded), onPressed: hasDoc ? _download : null),
        ],
      ),
      body: Stack(children: [
        ListView(controller: _scroll, padding: const EdgeInsets.fromLTRB(14, 4, 14, 40), children: [
          Container(
            decoration: BoxDecoration(boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.6), blurRadius: 24, offset: const Offset(0, 10))]),
            child: AspectRatio(
              aspectRatio: kNewsPageW / kNewsPageH,
              child: FittedBox(
                fit: BoxFit.contain,
                child: RepaintBoundary(key: _pageKey, child: NgmyNewspaperView(doc: _doc, template: _template, photo: _photo, logo: _logo)),
              ),
            ),
          ),
          const SizedBox(height: 14),
          _section('1  YOUR PICTURE'),
          Row(children: [
            Expanded(
              child: FilledButton.icon(
                onPressed: _busy ? null : _pickPhoto,
                icon: const Icon(Icons.add_photo_alternate_rounded),
                label: Text(_photo == null ? 'Add a picture' : 'Change the picture', style: const TextStyle(fontWeight: FontWeight.w800)),
                style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(48), backgroundColor: _card, foregroundColor: Colors.white, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14), side: const BorderSide(color: _line))),
              ),
            ),
            if (_photo != null) ...[
              const SizedBox(width: 10),
              ClipRRect(borderRadius: BorderRadius.circular(10), child: Image.memory(_photo!, width: 48, height: 48, fit: BoxFit.cover)),
              IconButton(tooltip: 'Crop the picture', onPressed: _busy ? null : _crop, icon: const Icon(Icons.crop_rounded, color: Colors.white70)),
            ],
          ]),
          const SizedBox(height: 14),
          _section('2  WHAT SHOULD IT BE ABOUT?  (optional)'),
          TextField(
            controller: _request,
            minLines: 1,
            maxLines: 3,
            style: const TextStyle(color: Colors.white),
            decoration: _fieldDeco('Leave it empty and the AI picks a story about NGMY'),
          ),
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 6, children: [
            for (final i in kNgmyNewsIdeas)
              ActionChip(
                label: Text(i.$1, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                backgroundColor: _card,
                labelStyle: const TextStyle(color: Colors.white70),
                side: const BorderSide(color: _line),
                onPressed: () => setState(() => _request.text = i.$2),
              ),
          ]),
          const SizedBox(height: 10),
          Wrap(crossAxisAlignment: WrapCrossAlignment.center, spacing: 8, children: [
            const Text('LANGUAGE', style: TextStyle(color: Colors.white54, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
            const SizedBox(width: 12),
            ChoiceChip(label: const Text('English'), selected: _lang == 'en', onSelected: (_) => setState(() => _lang = 'en')),
            const SizedBox(width: 8),
            ChoiceChip(label: const Text('Kiswahili'), selected: _lang == 'sw', onSelected: (_) => setState(() => _lang = 'sw')),
          ]),
          const SizedBox(height: 14),
          _section('3  PICK A DESIGN'),
          // Two lines of designs, one above the other, so each one is easy to find.
          SizedBox(height: 78, child: ListView(scrollDirection: Axis.horizontal, children: [for (final t in kNgmyNewsTemplates.take(10)) _designTile(t)])),
          const SizedBox(height: 8),
          SizedBox(height: 78, child: ListView(scrollDirection: Axis.horizontal, children: [for (final t in kNgmyNewsTemplates.skip(10)) _designTile(t)])),
          const SizedBox(height: 16),
          GestureDetector(
            onTap: _busy ? null : _write,
            child: Container(
              height: 54,
              alignment: Alignment.center,
              decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), gradient: const LinearGradient(colors: [_violet, _pink]), boxShadow: [BoxShadow(color: _pink.withValues(alpha: 0.4), blurRadius: 18)]),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 21),
                const SizedBox(width: 8),
                Text(hasDoc ? 'Write it again' : 'Write my newspaper', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
              ]),
            ),
          ),
          if (hasDoc) ...[
            const SizedBox(height: 22),
            Row(children: [
              const NgmyAiBadge(size: 30),
              const SizedBox(width: 10),
              const Expanded(child: Text('TALK TO THE EDITOR', style: TextStyle(color: Colors.white70, fontSize: 12, fontWeight: FontWeight.w900, letterSpacing: 1.2))),
            ]),
            const SizedBox(height: 8),
            for (final m in _talk) _bubble(m),
            const SizedBox(height: 6),
            Wrap(spacing: 8, runSpacing: 6, children: [
              for (final s in const ['Make the headline shorter', 'Add a paragraph about the Civic Registry', 'Write the whole thing in Swahili', 'Change the newspaper name'])
                ActionChip(
                  label: Text(s, style: const TextStyle(fontSize: 11.5)),
                  backgroundColor: _card,
                  labelStyle: const TextStyle(color: Colors.white70),
                  side: const BorderSide(color: _line),
                  onPressed: () => setState(() => _chat.text = s),
                ),
            ]),
            const SizedBox(height: 10),
            Row(children: [
              Expanded(child: TextField(controller: _chat, minLines: 1, maxLines: 4, style: const TextStyle(color: Colors.white), decoration: _fieldDeco('Ask for a change, or ask a question…'), onSubmitted: (_) => _send())),
              const SizedBox(width: 8),
              IconButton.filled(onPressed: _busy ? null : _send, style: IconButton.styleFrom(backgroundColor: _violet), icon: const Icon(Icons.send_rounded)),
            ]),
            const SizedBox(height: 14),
            FilledButton.icon(
              onPressed: _busy ? null : _download,
              icon: const Icon(Icons.download_rounded),
              label: const Text('Download the newspaper picture', style: TextStyle(fontWeight: FontWeight.w900)),
              style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(52), backgroundColor: const Color(0xFF16A34A), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
            ),
          ],
        ]),
        if (_busy)
          Positioned.fill(
            child: ColoredBox(
              color: Colors.black.withValues(alpha: 0.55),
              child: Center(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 18),
                  decoration: BoxDecoration(color: const Color(0xFF241409), borderRadius: BorderRadius.circular(20), border: Border.all(color: const Color(0xFFE8C46A).withValues(alpha: 0.5))),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    const SizedBox(width: 26, height: 26, child: CircularProgressIndicator(strokeWidth: 3, color: Color(0xFFE8C46A))),
                    const SizedBox(width: 14),
                    Text(_status, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                  ]),
                ),
              ),
            ),
          ),
      ]),
    );
  }

  Widget _section(String t) => Padding(padding: const EdgeInsets.only(bottom: 8), child: Text(t, style: const TextStyle(color: Colors.white54, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)));

  InputDecoration _fieldDeco(String hint) => InputDecoration(
        hintText: hint,
        hintStyle: const TextStyle(color: Colors.white38, fontSize: 13),
        filled: true,
        fillColor: _card,
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
      );

  Widget _designTile(NgmyNewsTemplate t) {
    final on = t.id == _template.id;
    return GestureDetector(
      onTap: () => _pickTemplate(t),
      child: Container(
        width: 72,
        margin: const EdgeInsets.only(right: 8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
          color: Color(t.paper),
          border: Border.all(color: on ? _pink : _line, width: on ? 2.4 : 1),
        ),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Container(height: 5, margin: const EdgeInsets.symmetric(horizontal: 10), color: Color(t.accent)),
          const SizedBox(height: 5),
          for (var i = 0; i < 4; i++) Container(height: 2, margin: const EdgeInsets.fromLTRB(10, 0, 10, 3), color: Color(t.ink).withValues(alpha: 0.5)),
          const SizedBox(height: 3),
          Padding(padding: const EdgeInsets.symmetric(horizontal: 3), child: Text(t.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: Color(t.ink)))),
        ]),
      ),
    );
  }

  Widget _bubble((String, String) m) {
    final mine = m.$1 == 'you';
    return Align(
      alignment: mine ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        constraints: const BoxConstraints(maxWidth: 320),
        decoration: BoxDecoration(color: mine ? _violet.withValues(alpha: 0.35) : _card, borderRadius: BorderRadius.circular(16), border: Border.all(color: _line)),
        child: Text(m.$2, style: const TextStyle(color: Colors.white, fontSize: 13.5, height: 1.35)),
      ),
    );
  }
}
