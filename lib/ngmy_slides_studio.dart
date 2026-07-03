import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';
import 'ngmy_slides_toolkit.dart';
import 'ngmy_worksheet_helpers.dart';

/// PowerPoint-style presentation studio for students — slides, text, shapes,
/// themes, transitions, speaker notes, and slideshow mode.
class NgmySlidesStudioScreen extends StatefulWidget {
  const NgmySlidesStudioScreen({
    super.key,
    required this.userEmail,
    this.bottomScrollPadding = 96,
  });

  final String userEmail;
  final double bottomScrollPadding;

  @override
  State<NgmySlidesStudioScreen> createState() => _NgmySlidesStudioScreenState();
}

class _NgmySlidesStudioScreenState extends State<NgmySlidesStudioScreen> {
  List<NgmySlideDeck> _decks = [];
  NgmySlideDeck? _activeDeck;
  int _slideIndex = 0;
  String? _selectedElementId;
  bool _loading = true;
  bool _showNotes = true;
  String _ribbonTab = 'Home';
  Timer? _autosaveTimer;

  final List<_UndoSnapshot> _undo = [];
  final List<_UndoSnapshot> _redo = [];
  final Map<String, TextEditingController> _textControllers = {};
  final Map<String, TextEditingController> _notesControllers = {};
  String? _notesSlideId;
  bool _isDraft = false;

  @override
  void initState() {
    super.initState();
    unawaited(_loadDecks());
  }

  @override
  void dispose() {
    _autosaveTimer?.cancel();
    for (final c in _textControllers.values) {
      c.dispose();
    }
    for (final c in _notesControllers.values) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _loadDecks() async {
    final decks = await NgmySlidesStorage.loadDecks(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _decks = decks;
      _loading = false;
    });
  }

  Future<void> _persistDecks() async {
    await NgmySlidesStorage.saveDecks(widget.userEmail, _decks);
  }

  void _scheduleAutosave() {
    _autosaveTimer?.cancel();
    _autosaveTimer = Timer(const Duration(milliseconds: 600), () {
      unawaited(_persistDecks());
    });
  }

  void _pushUndo() {
    if (_activeDeck == null) return;
    _undo.add(_UndoSnapshot(_activeDeck!.copy(), _slideIndex, _selectedElementId));
    if (_undo.length > 40) _undo.removeAt(0);
    _redo.clear();
  }

  void _undoAction() {
    if (_undo.isEmpty || _activeDeck == null) return;
    _redo.add(_UndoSnapshot(_activeDeck!.copy(), _slideIndex, _selectedElementId));
    final snap = _undo.removeLast();
    setState(() {
      _activeDeck = snap.deck;
      _slideIndex = snap.slideIndex.clamp(0, _activeDeck!.slides.length - 1);
      _selectedElementId = snap.selectedId;
      _syncDeckIntoList();
      _syncTextControllersForCurrentSlide();
    });
    _scheduleAutosave();
  }

  void _redoAction() {
    if (_redo.isEmpty || _activeDeck == null) return;
    _undo.add(_UndoSnapshot(_activeDeck!.copy(), _slideIndex, _selectedElementId));
    final snap = _redo.removeLast();
    setState(() {
      _activeDeck = snap.deck;
      _slideIndex = snap.slideIndex.clamp(0, _activeDeck!.slides.length - 1);
      _selectedElementId = snap.selectedId;
      _syncDeckIntoList();
      _syncTextControllersForCurrentSlide();
    });
    _scheduleAutosave();
  }

  void _syncDeckIntoList() {
    if (_activeDeck == null) return;
    final i = _decks.indexWhere((d) => d.id == _activeDeck!.id);
    if (i >= 0) {
      _decks[i] = _activeDeck!.copy();
      _decks[i].updatedAt = DateTime.now();
    }
    _activeDeck!.updatedAt = DateTime.now();
  }

  NgmySlideElement? _findElement(String id) {
    final slide = _currentSlide;
    if (slide == null) return null;
    for (final e in slide.elements) {
      if (e.id == id) return e;
    }
    return null;
  }

  void _clearTextControllers() {
    for (final c in _textControllers.values) {
      c.dispose();
    }
    _textControllers.clear();
  }

  void _syncTextControllersForCurrentSlide() {
    final slide = _currentSlide;
    if (slide == null) return;
    final ids = slide.elements.where((e) => e.type == NgmySlideElementType.text).map((e) => e.id).toSet();
    for (final id in _textControllers.keys.toList()) {
      if (!ids.contains(id)) {
        _textControllers.remove(id)?.dispose();
      }
    }
    for (final e in slide.elements) {
      if (e.type != NgmySlideElementType.text) continue;
      final c = _textControllers.putIfAbsent(e.id, () => TextEditingController(text: e.text));
      if (c.text != e.text) c.text = e.text;
    }
  }

  void _commitDraftIfNeeded() {
    if (!_isDraft || _activeDeck == null) return;
    _isDraft = false;
    _decks.insert(0, _activeDeck!.copy());
    _syncDeckIntoList();
    _scheduleAutosave();
  }

  void _updateElementText(String elementId, String value) {
    final el = _findElement(elementId);
    if (el == null || el.text == value) return;
    el.text = value;
    _commitDraftIfNeeded();
    _syncDeckIntoList();
    _scheduleAutosave();
    if (mounted) setState(() {});
  }

  void _updateSlideNotes(String slideId, String value) {
    final slide = _currentSlide;
    if (slide == null || slide.id != slideId || slide.notes == value) return;
    slide.notes = value;
    _commitDraftIfNeeded();
    _syncDeckIntoList();
    _scheduleAutosave();
  }

  NgmySlide? get _currentSlide {
    final deck = _activeDeck;
    if (deck == null || deck.slides.isEmpty) return null;
    return deck.slides[_slideIndex.clamp(0, deck.slides.length - 1)];
  }

  NgmySlidesTheme get _theme =>
      NgmySlidesTemplates.themeById(_activeDeck?.themeId ?? 'office_blue');

  void _openDeck(NgmySlideDeck deck) {
    setState(() {
      _activeDeck = deck.copy();
      _slideIndex = 0;
      _selectedElementId = null;
      _isDraft = false;
      _undo.clear();
      _redo.clear();
      _clearTextControllers();
      _syncTextControllersForCurrentSlide();
    });
  }

  void _closeEditor() {
    if (_isDraft) {
      setState(() {
        _activeDeck = null;
        _isDraft = false;
        _selectedElementId = null;
        _clearTextControllers();
      });
      return;
    }
    unawaited(_persistDecks());
    setState(() {
      _activeDeck = null;
      _selectedElementId = null;
      _clearTextControllers();
    });
  }

  void _openDraftEditor({String? name, bool sample = false}) {
    _pushUndoIfEditing();
    final deck = sample
        ? NgmySlidesTemplates.sampleDeck(name ?? 'Class Presentation')
        : NgmySlideDeck(id: NgmySlidesTemplates.newId(), name: name ?? 'Untitled Presentation');
    setState(() {
      _activeDeck = deck.copy();
      _slideIndex = 0;
      _selectedElementId = null;
      _isDraft = true;
      _undo.clear();
      _redo.clear();
      _clearTextControllers();
    });
  }

  void _createDeck({String? name, bool sample = false}) {
    _openDraftEditor(name: name, sample: sample);
  }

  void _pushUndoIfEditing() {
    if (_activeDeck != null) _pushUndo();
  }

  void _mutate(VoidCallback fn) {
    _commitDraftIfNeeded();
    _pushUndo();
    setState(fn);
    _syncTextControllersForCurrentSlide();
    _syncDeckIntoList();
    _scheduleAutosave();
  }

  void _addSlide({NgmySlideLayout layout = NgmySlideLayout.titleContent}) {
    _mutate(() {
      final slide = NgmySlide(id: NgmySlidesTemplates.newId());
      NgmySlidesTemplates.applyLayout(slide, layout, _theme);
      _activeDeck!.slides.insert(_slideIndex + 1, slide);
      _slideIndex++;
      _selectedElementId = null;
    });
  }

  void _duplicateSlide() {
    final slide = _currentSlide;
    if (slide == null) return;
    _mutate(() {
      final json = slide.toJson();
      json['id'] = NgmySlidesTemplates.newId();
      final elements = json['elements'] as List?;
      if (elements != null) {
        for (final el in elements) {
          if (el is Map) el['id'] = NgmySlidesTemplates.newId();
        }
      }
      _activeDeck!.slides.insert(_slideIndex + 1, NgmySlide.fromJson(json));
      _slideIndex++;
    });
  }

  void _deleteSlide() {
    if (_activeDeck == null || _activeDeck!.slides.length <= 1) return;
    _mutate(() {
      _activeDeck!.slides.removeAt(_slideIndex);
      _slideIndex = _slideIndex.clamp(0, _activeDeck!.slides.length - 1);
      _selectedElementId = null;
    });
  }

  void _reorderSlide(int from, int to) {
    if (_activeDeck == null || from == to) return;
    _mutate(() {
      final item = _activeDeck!.slides.removeAt(from);
      _activeDeck!.slides.insert(to, item);
      if (_slideIndex == from) _slideIndex = to;
      else if (from < _slideIndex && to >= _slideIndex) _slideIndex--;
      else if (from > _slideIndex && to <= _slideIndex) _slideIndex++;
    });
  }

  void _deleteDeck(NgmySlideDeck deck) {
    setState(() {
      _decks.removeWhere((d) => d.id == deck.id);
      if (_activeDeck?.id == deck.id) _activeDeck = null;
    });
    _scheduleAutosave();
  }

  void _renameDeck(NgmySlideDeck deck, String name) {
    setState(() {
      deck.name = name.trim().isEmpty ? 'Untitled Presentation' : name.trim();
      deck.updatedAt = DateTime.now();
      if (_activeDeck?.id == deck.id) _activeDeck!.name = deck.name;
    });
    _scheduleAutosave();
  }

  NgmySlideElement? _selectedElement() {
    final slide = _currentSlide;
    if (slide == null || _selectedElementId == null) return null;
    for (final e in slide.elements) {
      if (e.id == _selectedElementId) return e;
    }
    return null;
  }

  TextEditingController _controllerFor(NgmySlideElement el) {
    return _textControllers.putIfAbsent(el.id, () => TextEditingController(text: el.text));
  }

  void _selectElement(String? id) {
    setState(() {
      _selectedElementId = id;
      if (id != null) {
        final el = _findElement(id);
        if (el != null && el.type == NgmySlideElementType.text) {
          _controllerFor(el).text = el.text;
        }
      }
    });
  }

  void _addTextBox() {
    _mutate(() {
      final el = NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.text,
        x: 0.15,
        y: 0.2,
        w: 0.7,
        h: 0.18,
        text: 'Click to edit text',
        fontSize: 24,
        color: _theme.bodyColor.value,
      );
      _currentSlide!.elements.add(el);
      _selectedElementId = el.id;
    });
  }

  void _addShape(NgmySlideShapeKind shape) {
    _mutate(() {
      final el = NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.shape,
        x: 0.3,
        y: 0.3,
        w: 0.25,
        h: 0.25,
        shape: shape,
        fillColor: _theme.accent.withValues(alpha: 0.25).value,
        strokeColor: _theme.accent.value,
      );
      _currentSlide!.elements.add(el);
      _selectedElementId = el.id;
    });
  }

  Future<void> _addImage() async {
    final ref = await ngmyPickImageBase64();
    if (ref == null || _currentSlide == null) return;
    _mutate(() {
      final el = NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.image,
        x: 0.2,
        y: 0.18,
        w: 0.6,
        h: 0.55,
        imageRef: ref,
      );
      _currentSlide!.elements.add(el);
      _selectedElementId = el.id;
    });
  }

  void _deleteSelected() {
    final id = _selectedElementId;
    if (id == null || _currentSlide == null) return;
    _mutate(() {
      _currentSlide!.elements.removeWhere((e) => e.id == id);
      _selectedElementId = null;
      _textControllers.remove(id)?.dispose();
    });
  }

  void _applyTheme(NgmySlidesTheme theme) {
    _mutate(() => NgmySlidesTemplates.applyThemeToDeck(_activeDeck!, theme));
  }

  void _applyLayout(NgmySlideLayout layout) {
    final slide = _currentSlide;
    if (slide == null) return;
    _mutate(() => NgmySlidesTemplates.applyLayout(slide, layout, _theme));
  }

  Future<void> _shareOutline() async {
    final deck = _activeDeck;
    if (deck == null) return;
    final buf = StringBuffer('${deck.name}\n${'=' * deck.name.length}\n\n');
    for (var i = 0; i < deck.slides.length; i++) {
      final s = deck.slides[i];
      buf.writeln('Slide ${i + 1}: ${s.title.isEmpty ? '(untitled)' : s.title}');
      for (final e in s.elements.where((x) => x.type == NgmySlideElementType.text)) {
        if (e.text.trim().isNotEmpty) buf.writeln('  • ${e.text.replaceAll('\n', ' ')}');
      }
      if (s.notes.trim().isNotEmpty) buf.writeln('  Notes: ${s.notes}');
      buf.writeln();
    }
    await Share.share(buf.toString(), subject: deck.name);
  }

  Future<void> _exportJson() async {
    final deck = _activeDeck;
    if (deck == null) return;
    await Share.share(jsonEncode(deck.toJson()), subject: '${deck.name}.json');
  }

  void _startSlideshow() {
    final deck = _activeDeck;
    if (deck == null || deck.slides.isEmpty) return;
    _syncDeckIntoList();
    unawaited(_persistDecks());
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => _NgmySlideshowPage(
          deck: _decks.firstWhere((d) => d.id == deck.id, orElse: () => deck).copy(),
          startIndex: _slideIndex,
        ),
      ),
    );
  }

  Future<void> _addPdf() async {
    final picked = await ngmySlidesPickPdf();
    if (picked == null || _activeDeck == null || !mounted) return;
    final pages = ngmySlidesEstimatePdfPages(picked.bytes);
    final mode = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      builder: (ctx) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Padding(
              padding: const EdgeInsets.all(14),
              child: Text('Import ${picked.fileName} ($pages page${pages == 1 ? '' : 's'})', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
            ),
            ListTile(
              leading: const Icon(Icons.view_day_rounded, color: Color(0xFF2563EB)),
              title: const Text('Scrollable PDF on this slide', style: TextStyle(color: Colors.white)),
              subtitle: Text('Scroll through all $pages pages inside the slide', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
              onTap: () => Navigator.pop(ctx, 'scroll'),
            ),
            if (pages > 1)
              ListTile(
                leading: const Icon(Icons.view_carousel_rounded, color: Color(0xFF059669)),
                title: Text('One slide per page ($pages slides)', style: const TextStyle(color: Colors.white)),
                subtitle: const Text('Each page becomes its own slide you can present', style: TextStyle(color: Colors.white54, fontSize: 12)),
                onTap: () => Navigator.pop(ctx, 'split'),
              ),
          ],
        ),
      ),
    );
    if (mode == null) return;
    if (mode == 'scroll') {
      _mutate(() {
        final el = NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.pdf,
          x: 0.06,
          y: 0.08,
          w: 0.88,
          h: 0.84,
          imageRef: picked.dataUrl,
          fileName: picked.fileName,
          text: picked.fileName,
        );
        _currentSlide!.elements.add(el);
        _selectedElementId = el.id;
      });
      return;
    }
    if (mode == 'split') {
      _mutate(() {
        final insertAt = _slideIndex + 1;
        for (var p = 1; p <= pages; p++) {
          final slide = NgmySlide(
            id: NgmySlidesTemplates.newId(),
            title: '${picked.fileName} — page $p',
            layout: NgmySlideLayout.blank,
          );
          slide.elements.add(
            NgmySlideElement(
              id: NgmySlidesTemplates.newId(),
              type: NgmySlideElementType.pdf,
              x: 0.04,
              y: 0.06,
              w: 0.92,
              h: 0.88,
              imageRef: picked.dataUrl,
              fileName: '$p / $pages',
              pdfPage: p,
              text: picked.fileName,
            ),
          );
          _activeDeck!.slides.insert(insertAt + p - 1, slide);
        }
        _slideIndex = insertAt;
        _selectedElementId = null;
      });
    }
  }

  Future<void> _addSignature() async {
    final imageRef = await ngmySlidesCaptureSignature(context);
    if (imageRef == null || _currentSlide == null) return;
    _mutate(() {
      final el = NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.signature,
        x: 0.55,
        y: 0.62,
        w: 0.35,
        h: 0.2,
        imageRef: imageRef,
        fileName: 'Signature',
      );
      _currentSlide!.elements.add(el);
      _selectedElementId = el.id;
    });
  }

  Future<void> _addEnhancedPhoto() async {
    final ref = await ngmySlidesPickAndEnhancePhoto();
    if (ref == null || _currentSlide == null) return;
    _mutate(() {
      final el = NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.image,
        x: 0.1,
        y: 0.1,
        w: 0.8,
        h: 0.8,
        imageRef: ref,
        fileName: 'HD Photo',
      );
      _currentSlide!.elements.add(el);
      _selectedElementId = el.id;
    });
  }

  Future<void> _enhanceSelectedImage() async {
    final el = _selectedElement();
    if (el == null || el.imageRef == null) return;
    final enhanced = await ngmySlidesEnhanceImage(el.imageRef!);
    if (enhanced == null) return;
    _mutate(() => el.imageRef = enhanced);
  }

  void _addSchoolSlide(NgmySlideLayout layout) {
    _mutate(() {
      final slide = NgmySlide(id: NgmySlidesTemplates.newId());
      NgmySlidesTemplates.applyLayout(slide, layout, _theme);
      _activeDeck!.slides.insert(_slideIndex + 1, slide);
      _slideIndex++;
      _selectedElementId = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: Color(0xFF0B1220),
        body: Center(child: CircularProgressIndicator(color: Color(0xFF2563EB))),
      );
    }
    if (_activeDeck == null) return _buildLibrary();
    return _buildEditor();
  }

  Widget _buildLibrary() {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B1220) : const Color(0xFFF1F5F9),
      body: SafeArea(
        bottom: false,
        child: ListView(
          padding: EdgeInsets.fromLTRB(18, 12, 18, widget.bottomScrollPadding),
          children: [
            _header(
              title: 'NGMY SLIDES',
              subtitle: 'School & document toolkit — edit PDFs, photos, sign papers, present',
              icon: Icons.auto_stories_rounded,
              accent: const Color(0xFF2563EB),
            ),
            const SizedBox(height: 18),
            Wrap(
              spacing: 10,
              runSpacing: 10,
              children: [
                _actionCard(
                  icon: Icons.add_rounded,
                  label: 'Blank Presentation',
                  color: const Color(0xFF2563EB),
                  onTap: () => _createDeck(),
                ),
                _actionCard(
                  icon: Icons.school_rounded,
                  label: 'Class Template',
                  color: const Color(0xFF059669),
                  onTap: () => _createDeck(sample: true, name: 'Class Presentation'),
                ),
              ],
            ),
            const SizedBox(height: 24),
            Text(
              'YOUR PRESENTATIONS',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.w900,
                letterSpacing: 1.2,
                color: isDark ? Colors.white54 : const Color(0xFF64748B),
              ),
            ),
            const SizedBox(height: 12),
            if (_decks.isEmpty)
              Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: isDark ? const Color(0xFF111827) : Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                ),
                child: Column(
                  children: [
                    Icon(Icons.view_carousel_outlined, size: 48, color: isDark ? Colors.white24 : Colors.black26),
                    const SizedBox(height: 12),
                    Text(
                      'No presentations yet',
                      style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      'Open Blank or Class Template to start — nothing is saved until you edit.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                    ),
                  ],
                ),
              )
            else
              ..._decks.map((d) => _deckTile(d, isDark)),
          ],
        ),
      ),
    );
  }

  Widget _deckTile(NgmySlideDeck deck, bool isDark) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
        boxShadow: [if (!isDark) BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 10, offset: const Offset(0, 4))],
      ),
      child: ListTile(
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
        leading: Container(
          width: 52,
          height: 36,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(6),
            gradient: LinearGradient(colors: [const Color(0xFF2563EB), const Color(0xFF1D4ED8)]),
          ),
          child: const Icon(Icons.slideshow_rounded, color: Colors.white, size: 22),
        ),
        title: Text(deck.name, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A))),
        subtitle: Text(
          '${deck.slides.length} slides • Updated ${_formatDate(deck.updatedAt)}',
          style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
        ),
        trailing: PopupMenuButton<String>(
          onSelected: (v) async {
            if (v == 'delete') {
              final ok = await showDialog<bool>(
                context: context,
                builder: (ctx) => AlertDialog(
                  title: const Text('Delete presentation?'),
                  content: Text('Delete "${deck.name}" permanently?'),
                  actions: [
                    TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
                    FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
                  ],
                ),
              );
              if (ok == true) _deleteDeck(deck);
            } else if (v == 'rename') {
              final name = await _promptText('Rename presentation', deck.name);
              if (name != null) _renameDeck(deck, name);
            } else if (v == 'duplicate') {
              final json = deck.toJson();
              json['id'] = NgmySlidesTemplates.newId();
              json['name'] = '${deck.name} (Copy)';
              setState(() => _decks.insert(0, NgmySlideDeck.fromJson(json)));
              _scheduleAutosave();
            }
          },
          itemBuilder: (_) => const [
            PopupMenuItem(value: 'rename', child: Text('Rename')),
            PopupMenuItem(value: 'duplicate', child: Text('Duplicate')),
            PopupMenuItem(value: 'delete', child: Text('Delete')),
          ],
        ),
        onTap: () => _openDeck(deck),
      ),
    );
  }

  Widget _buildEditor() {
    final deck = _activeDeck!;
    final slide = _currentSlide!;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final wide = MediaQuery.sizeOf(context).width >= 900;

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B1220) : const Color(0xFFE2E8F0),
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            _editorTopBar(deck, isDark),
            _ribbon(isDark),
            Expanded(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  if (wide) SizedBox(width: 132, child: _slideStrip(isDark, vertical: true)),
                  Expanded(
                    child: Column(
                      children: [
                        if (!wide) SizedBox(height: 92, child: _slideStrip(isDark, vertical: false)),
                        Expanded(child: _canvas(slide, isDark)),
                        if (_showNotes) _notesPanel(slide, isDark),
                      ],
                    ),
                  ),
                  if (wide && _selectedElement() != null) SizedBox(width: 220, child: _formatPanel(isDark)),
                ],
              ),
            ),
            if (!wide && _selectedElement() != null) SizedBox(height: 140, child: _formatPanel(isDark)),
            SizedBox(height: widget.bottomScrollPadding),
          ],
        ),
      ),
    );
  }

  Widget _editorTopBar(NgmySlideDeck deck, bool isDark) {
    return Container(
      padding: const EdgeInsets.fromLTRB(8, 6, 8, 6),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : Colors.white,
        border: Border(bottom: BorderSide(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0))),
      ),
      child: Row(
        children: [
          IconButton(
            tooltip: 'Back to library',
            onPressed: _closeEditor,
            icon: Icon(Icons.arrow_back_rounded, color: isDark ? Colors.white : const Color(0xFF0F172A)),
          ),
          Expanded(
            child: Text(
              deck.name,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : const Color(0xFF0F172A)),
            ),
          ),
          IconButton(tooltip: 'Undo', onPressed: _undo.isEmpty ? null : _undoAction, icon: const Icon(Icons.undo_rounded, size: 20)),
          IconButton(tooltip: 'Redo', onPressed: _redo.isEmpty ? null : _redoAction, icon: const Icon(Icons.redo_rounded, size: 20)),
          IconButton(tooltip: 'Share outline', onPressed: _shareOutline, icon: const Icon(Icons.ios_share_rounded, size: 20)),
          FilledButton.icon(
            onPressed: _startSlideshow,
            style: FilledButton.styleFrom(
              backgroundColor: const Color(0xFF2563EB),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            ),
            icon: const Icon(Icons.play_circle_fill_rounded, size: 18),
            label: const Text('Present', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
          ),
          const SizedBox(width: 4),
          IconButton(
            tooltip: 'Auto-advance: ${_activeDeck?.autoAdvanceSeconds ?? 5}s per slide',
            onPressed: () async {
              final deck = _activeDeck;
              if (deck == null) return;
              final picked = await showModalBottomSheet<int>(
                context: context,
                backgroundColor: const Color(0xFF111827),
                builder: (ctx) => SafeArea(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Padding(
                        padding: EdgeInsets.all(12),
                        child: Text('Seconds per slide during Present', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                      ),
                      for (final s in [3, 5, 8, 10, 15, 20, 30, 60])
                        ListTile(
                          title: Text('$s seconds', style: const TextStyle(color: Colors.white)),
                          trailing: deck.autoAdvanceSeconds == s ? const Icon(Icons.check_rounded, color: Color(0xFF2563EB)) : null,
                          onTap: () => Navigator.pop(ctx, s),
                        ),
                    ],
                  ),
                ),
              );
              if (picked != null) _mutate(() => deck.autoAdvanceSeconds = picked);
            },
            icon: Icon(Icons.timer_outlined, size: 20, color: isDark ? Colors.white70 : const Color(0xFF475569)),
          ),
        ],
      ),
    );
  }

  Widget _ribbon(bool isDark) {
    final tabs = ['Home', 'Insert', 'School', 'Tools', 'Design', 'Transitions', 'View'];
    return Container(
      color: isDark ? const Color(0xFF1F2937) : const Color(0xFFF8FAFC),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            child: Row(
              children: tabs.map((t) {
                final sel = _ribbonTab == t;
                return Padding(
                  padding: const EdgeInsets.only(right: 4),
                  child: TextButton(
                    onPressed: () => setState(() => _ribbonTab = t),
                    style: TextButton.styleFrom(
                      backgroundColor: sel ? (isDark ? const Color(0xFF2563EB) : const Color(0xFFDBEAFE)) : Colors.transparent,
                      foregroundColor: sel ? (isDark ? Colors.white : const Color(0xFF1D4ED8)) : (isDark ? Colors.white70 : const Color(0xFF475569)),
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    ),
                    child: Text(t, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                  ),
                );
              }).toList(),
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 8),
            child: _ribbonTools(isDark),
          ),
        ],
      ),
    );
  }

  Widget _ribbonTools(bool isDark) {
    switch (_ribbonTab) {
      case 'School':
        return Row(
          children: [
            for (final (label, layout) in ngmySlidesSchoolLayouts)
              _ribbonBtn(_schoolLayoutIcon(layout), label, () => _addSchoolSlide(layout), isDark),
            _ribbonBtn(Icons.notes_rounded, 'Notes Slide', () => _addSchoolSlide(NgmySlideLayout.titleContent), isDark),
          ],
        );
      case 'Tools':
        return Row(
          children: [
            _ribbonBtn(Icons.picture_as_pdf_rounded, 'Upload PDF', () => unawaited(_addPdf()), isDark),
            _ribbonBtn(Icons.draw_rounded, 'Sign Paper', () => unawaited(_addSignature()), isDark),
            _ribbonBtn(Icons.hd_rounded, 'HD Photo', () => unawaited(_addEnhancedPhoto()), isDark),
            _ribbonBtn(Icons.auto_fix_high_rounded, 'Sharpen Image', () => unawaited(_enhanceSelectedImage()), isDark),
            _ribbonBtn(Icons.print_rounded, 'Print', () {
              final deck = _activeDeck;
              if (deck != null) unawaited(ngmySlidesOpenPrintPreview(context, deck));
            }, isDark),
            _ribbonBtn(Icons.crop_rotate_rounded, 'Rotate', () {
              final el = _selectedElement();
              if (el != null) _mutate(() => el.rotation += 0.785398);
            }, isDark),
            _ribbonBtn(Icons.text_fields_rounded, 'Text Box', _addTextBox, isDark),
            _ribbonBtn(Icons.image_rounded, 'Picture', () => unawaited(_addImage()), isDark),
          ],
        );
      case 'Insert':
        return Row(
          children: [
            _ribbonBtn(Icons.title_rounded, 'Text Box', _addTextBox, isDark),
            _ribbonBtn(Icons.image_rounded, 'Picture', () => unawaited(_addImage()), isDark),
            _ribbonBtn(Icons.crop_square_rounded, 'Rectangle', () => _addShape(NgmySlideShapeKind.rectangle), isDark),
            _ribbonBtn(Icons.circle_outlined, 'Circle', () => _addShape(NgmySlideShapeKind.circle), isDark),
            _ribbonBtn(Icons.change_history_rounded, 'Triangle', () => _addShape(NgmySlideShapeKind.triangle), isDark),
            _ribbonBtn(Icons.arrow_forward_rounded, 'Arrow', () => _addShape(NgmySlideShapeKind.arrow), isDark),
            _ribbonBtn(Icons.horizontal_rule_rounded, 'Line', () => _addShape(NgmySlideShapeKind.line), isDark),
            _ribbonBtn(Icons.picture_as_pdf_outlined, 'PDF', () => unawaited(_addPdf()), isDark),
            _ribbonBtn(Icons.draw_outlined, 'Signature', () => unawaited(_addSignature()), isDark),
            _ribbonBtn(Icons.add_box_outlined, 'New Slide', () => _addSlide(), isDark),
          ],
        );
      case 'Design':
        return Row(
          children: [
            _aspectChip('Wide 16:9', NgmySlideAspectRatio.landscape169, isDark),
            _aspectChip('Short 9:16', NgmySlideAspectRatio.portrait916, isDark),
            const SizedBox(width: 8),
            ...NgmySlidesTemplates.themes.map((t) {
              final selected = _activeDeck?.themeId == t.id;
              return Padding(
                padding: const EdgeInsets.only(right: 8),
                child: FilterChip(
                  selected: selected,
                  avatar: Container(
                    width: 18,
                    height: 18,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(6),
                      gradient: LinearGradient(colors: [t.slideBg, t.slideBgEnd ?? t.accent.withValues(alpha: 0.35)]),
                      border: Border.all(color: t.accent, width: 1.5),
                    ),
                  ),
                  label: Text(t.label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: selected ? t.accent : null)),
                  selectedColor: t.accent.withValues(alpha: 0.2),
                  checkmarkColor: t.accent,
                  onSelected: (_) => _applyTheme(t),
                ),
              );
            }),
            const SizedBox(width: 8),
            _layoutMenu(isDark),
          ],
        );
      case 'Transitions':
        return Wrap(
          spacing: 6,
          runSpacing: 6,
          crossAxisAlignment: WrapCrossAlignment.center,
          children: NgmySlideTransition.values.map((tr) {
            final selected = _currentSlide?.transition == tr;
            return FilterChip(
              label: Text('${ngmySlideTransitionEmoji(tr)} ${ngmySlideTransitionEmoji(tr)}', style: const TextStyle(fontSize: 16)),
              tooltip: tr.name,
              selected: selected,
              onSelected: (_) => _mutate(() => _currentSlide!.transition = tr),
              selectedColor: const Color(0xFF2563EB).withValues(alpha: 0.25),
              checkmarkColor: const Color(0xFF2563EB),
            );
          }).toList(),
        );
      case 'View':
        return Row(
          children: [
            _ribbonBtn(Icons.notes_rounded, _showNotes ? 'Hide Notes' : 'Show Notes', () => setState(() => _showNotes = !_showNotes), isDark),
            _ribbonBtn(Icons.print_rounded, 'Print deck', () {
              final deck = _activeDeck;
              if (deck != null) unawaited(ngmySlidesOpenPrintPreview(context, deck));
            }, isDark),
            _ribbonBtn(Icons.file_download_outlined, 'Export JSON', () => unawaited(_exportJson()), isDark),
            _ribbonBtn(Icons.content_copy_rounded, 'Duplicate Slide', _duplicateSlide, isDark),
            _ribbonBtn(Icons.delete_outline_rounded, 'Delete Slide', _deleteSlide, isDark),
            _slideDurationStepper(isDark),
          ],
        );
      case 'Home':
      default:
        final el = _selectedElement();
        return Row(
          children: [
            _ribbonBtn(Icons.add_box_outlined, 'New Slide', () => _addSlide(), isDark),
            _ribbonBtn(Icons.content_copy_rounded, 'Duplicate', _duplicateSlide, isDark),
            _ribbonBtn(Icons.delete_outline_rounded, 'Delete Slide', _deleteSlide, isDark),
            if (el != null) ...[
              const SizedBox(width: 8),
              _ribbonBtn(Icons.format_bold, 'Bold', () {
                _mutate(() => el.fontWeight = el.fontWeight == FontWeight.bold ? FontWeight.w500 : FontWeight.bold);
              }, isDark),
              _ribbonBtn(Icons.format_italic, 'Italic', () {
                _mutate(() => el.fontStyle = el.fontStyle == FontStyle.italic ? FontStyle.normal : FontStyle.italic);
              }, isDark),
              _ribbonBtn(Icons.format_underlined, 'Underline', () {
                _mutate(() => el.decoration = el.decoration == TextDecoration.underline ? TextDecoration.none : TextDecoration.underline);
              }, isDark),
              _ribbonBtn(Icons.format_list_bulleted, 'Bullets', () {
                _mutate(() => el.bulletList = !el.bulletList);
              }, isDark),
              _fontSizeStepper(el, isDark),
              if (el.type != NgmySlideElementType.text) _ribbonBtn(Icons.delete_forever_outlined, 'Delete', _deleteSelected, isDark),
            ],
          ],
        );
    }
  }

  Widget _aspectChip(String label, NgmySlideAspectRatio ratio, bool isDark) {
    final selected = _activeDeck?.aspectRatio == ratio;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: ChoiceChip(
        label: Text(label, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700)),
        selected: selected,
        onSelected: (_) => _mutate(() => _activeDeck!.aspectRatio = ratio),
        selectedColor: const Color(0xFF2563EB).withValues(alpha: 0.25),
      ),
    );
  }

  Widget _slideDurationStepper(bool isDark) {
    final slide = _currentSlide;
    if (slide == null) return const SizedBox.shrink();
    final val = slide.durationSeconds > 0 ? slide.durationSeconds : (_activeDeck?.autoAdvanceSeconds ?? 5);
    return Container(
      margin: const EdgeInsets.only(left: 8),
      padding: const EdgeInsets.symmetric(horizontal: 6),
      decoration: BoxDecoration(
        border: Border.all(color: isDark ? Colors.white24 : const Color(0xFFCBD5E1)),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.timer_outlined, size: 14, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
          IconButton(
            visualDensity: VisualDensity.compact,
            icon: const Icon(Icons.remove, size: 16),
            onPressed: () => _mutate(() {
              final base = slide.durationSeconds > 0 ? slide.durationSeconds : (_activeDeck?.autoAdvanceSeconds ?? 5);
              slide.durationSeconds = (base - 1).clamp(1, 120);
            }),
          ),
          Text('${val}s', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 11, color: isDark ? Colors.white : Colors.black87)),
          IconButton(
            visualDensity: VisualDensity.compact,
            icon: const Icon(Icons.add, size: 16),
            onPressed: () => _mutate(() {
              final base = slide.durationSeconds > 0 ? slide.durationSeconds : (_activeDeck?.autoAdvanceSeconds ?? 5);
              slide.durationSeconds = (base + 1).clamp(1, 120);
            }),
          ),
        ],
      ),
    );
  }

  IconData _schoolLayoutIcon(NgmySlideLayout layout) {
    switch (layout) {
      case NgmySlideLayout.flashcard:
        return Icons.style_rounded;
      case NgmySlideLayout.quiz:
        return Icons.quiz_rounded;
      case NgmySlideLayout.worksheet:
        return Icons.assignment_rounded;
      case NgmySlideLayout.section:
        return Icons.view_agenda_rounded;
      default:
        return Icons.notes_rounded;
    }
  }

  Widget _fontSizeStepper(NgmySlideElement el, bool isDark) {
    return Container(
      margin: const EdgeInsets.only(left: 4),
      padding: const EdgeInsets.symmetric(horizontal: 6),
      decoration: BoxDecoration(
        border: Border.all(color: isDark ? Colors.white24 : const Color(0xFFCBD5E1)),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          IconButton(
            visualDensity: VisualDensity.compact,
            icon: const Icon(Icons.remove, size: 16),
            onPressed: () => _mutate(() => el.fontSize = (el.fontSize - 2).clamp(10, 96)),
          ),
          Text('${el.fontSize.toInt()}', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
          IconButton(
            visualDensity: VisualDensity.compact,
            icon: const Icon(Icons.add, size: 16),
            onPressed: () => _mutate(() => el.fontSize = (el.fontSize + 2).clamp(10, 96)),
          ),
        ],
      ),
    );
  }

  Widget _layoutMenu(bool isDark) {
    return PopupMenuButton<NgmySlideLayout>(
      tooltip: 'Slide layout',
      child: Chip(
        avatar: Icon(Icons.dashboard_customize_outlined, size: 16, color: isDark ? Colors.white70 : const Color(0xFF475569)),
        label: const Text('Layout', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700)),
      ),
      onSelected: _applyLayout,
      itemBuilder: (_) => NgmySlideLayout.values
          .map((l) => PopupMenuItem(value: l, child: Text(l.name, style: const TextStyle(fontSize: 12))))
          .toList(),
    );
  }

  Widget _ribbonBtn(IconData icon, String label, VoidCallback onTap, bool isDark) {
    return Padding(
      padding: const EdgeInsets.only(right: 4),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 18, color: isDark ? Colors.white70 : const Color(0xFF334155)),
              const SizedBox(height: 2),
              Text(label, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
            ],
          ),
        ),
      ),
    );
  }

  Widget _slideStrip(bool isDark, {required bool vertical}) {
    final deck = _activeDeck!;
    final list = ListView.separated(
      scrollDirection: vertical ? Axis.vertical : Axis.horizontal,
      padding: const EdgeInsets.all(8),
      itemCount: deck.slides.length,
      separatorBuilder: (_, __) => SizedBox(width: vertical ? 0 : 8, height: vertical ? 8 : 0),
      itemBuilder: (context, i) {
        final selected = i == _slideIndex;
        return GestureDetector(
          onTap: () => setState(() {
            _slideIndex = i;
            _selectedElementId = null;
            _syncTextControllersForCurrentSlide();
          }),
          onLongPress: () async {
            if (deck.slides.length <= 1) return;
            final action = await showModalBottomSheet<String>(
              context: context,
              builder: (ctx) => SafeArea(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    ListTile(leading: const Icon(Icons.content_copy), title: const Text('Duplicate'), onTap: () => Navigator.pop(ctx, 'dup')),
                    ListTile(leading: const Icon(Icons.delete_outline), title: const Text('Delete'), onTap: () => Navigator.pop(ctx, 'del')),
                    if (i > 0) ListTile(leading: const Icon(Icons.arrow_upward), title: const Text('Move up'), onTap: () => Navigator.pop(ctx, 'up')),
                    if (i < deck.slides.length - 1) ListTile(leading: const Icon(Icons.arrow_downward), title: const Text('Move down'), onTap: () => Navigator.pop(ctx, 'down')),
                  ],
                ),
              ),
            );
            if (action == 'dup') {
              setState(() => _slideIndex = i);
              _duplicateSlide();
            } else if (action == 'del') {
              setState(() => _slideIndex = i);
              _deleteSlide();
            } else if (action == 'up') _reorderSlide(i, i - 1);
            else if (action == 'down') _reorderSlide(i, i + 1);
          },
          child: Container(
            width: vertical ? double.infinity : 112,
            height: vertical ? 72 : 64,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: selected ? const Color(0xFF2563EB) : (isDark ? Colors.white24 : const Color(0xFFCBD5E1)), width: selected ? 2 : 1),
              color: isDark ? const Color(0xFF1F2937) : Colors.white,
            ),
            child: Stack(
              children: [
                Positioned.fill(child: ngmyMiniSlidePreview(deck.slides[i])),
                Positioned(
                  left: 4,
                  bottom: 4,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                    decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(4)),
                    child: Text('${i + 1}', style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w800)),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
    return Container(
      color: isDark ? const Color(0xFF111827) : const Color(0xFFF1F5F9),
      child: Column(
        children: [
          if (vertical)
            Padding(
              padding: const EdgeInsets.all(8),
              child: IconButton.filled(
                tooltip: 'Add slide',
                onPressed: () => _addSlide(),
                icon: const Icon(Icons.add, size: 18),
                style: IconButton.styleFrom(backgroundColor: const Color(0xFF2563EB), minimumSize: const Size(36, 36)),
              ),
            ),
          Expanded(child: list),
        ],
      ),
    );
  }

  Widget _canvas(NgmySlide slide, bool isDark) {
    final aspect = _activeDeck?.aspectValue ?? 16 / 9;
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Center(
        child: AspectRatio(
          aspectRatio: aspect,
          child: GestureDetector(
            onTap: () => _selectElement(null),
            child: LayoutBuilder(
              builder: (context, constraints) {
                final w = constraints.maxWidth;
                final h = constraints.maxHeight;
                return DecoratedBox(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(4),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 8))],
                    gradient: slide.backgroundEnd != null
                        ? LinearGradient(
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                            colors: [Color(slide.background), Color(slide.backgroundEnd!)],
                          )
                        : null,
                    color: slide.backgroundEnd == null ? Color(slide.background) : null,
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(4),
                    child: Stack(
                      children: [
                        ...slide.elements.map((e) => _canvasElement(e, w, h, isDark)),
                        if (slide.elements.isEmpty)
                          Center(
                            child: Text(
                              'Use Insert → Text Box, Picture, or Shapes',
                              style: TextStyle(color: isDark ? Colors.white54 : const Color(0xFF94A3B8), fontWeight: FontWeight.w600),
                            ),
                          ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
        ),
      ),
    );
  }

  Widget _canvasElement(NgmySlideElement e, double cw, double ch, bool isDark) {
    final selected = _selectedElementId == e.id;
    final scale = cw / 960;
    return Positioned(
      key: ValueKey('el_${e.id}'),
      left: e.x * cw,
      top: e.y * ch,
      width: e.w * cw,
      height: e.h * ch,
      child: GestureDetector(
        onTap: () => _selectElement(e.id),
        onPanUpdate: (d) {
          setState(() {
            e.x = (e.x + d.delta.dx / cw).clamp(0.0, 1.0 - e.w);
            e.y = (e.y + d.delta.dy / ch).clamp(0.0, 1.0 - e.h);
          });
          _commitDraftIfNeeded();
          _syncDeckIntoList();
          _scheduleAutosave();
        },
        child: Transform.rotate(
          angle: e.rotation,
          child: Container(
            decoration: BoxDecoration(
              border: selected ? Border.all(color: const Color(0xFF2563EB), width: 2) : null,
            ),
            child: NgmySlideElementView(
              element: e,
              scale: scale,
              editing: true,
              selected: selected,
              controller: e.type == NgmySlideElementType.text ? _controllerFor(e) : null,
              onTextChanged: selected && e.type == NgmySlideElementType.text ? (v) => _updateElementText(e.id, v) : null,
              onTap: () => _selectElement(e.id),
            ),
          ),
        ),
      ),
    );
  }

  Widget _notesPanel(NgmySlide slide, bool isDark) {
    if (_notesSlideId != slide.id) {
      _notesSlideId = slide.id;
      _notesControllers[slide.id]?.dispose();
      _notesControllers[slide.id] = TextEditingController(text: slide.notes);
    }
    final notesC = _notesControllers[slide.id]!;
    return Container(
      height: 88,
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 8),
      color: isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Notes', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
          const SizedBox(width: 12),
          Expanded(
            child: TextField(
              controller: notesC,
              maxLines: 3,
              style: TextStyle(fontSize: 12, color: isDark ? Colors.white : const Color(0xFF334155)),
              decoration: InputDecoration(
                isDense: true,
                hintText: 'Speaker notes for this slide…',
                hintStyle: TextStyle(color: isDark ? Colors.white38 : const Color(0xFF94A3B8)),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
              ),
              onChanged: (v) => _updateSlideNotes(slide.id, v),
            ),
          ),
        ],
      ),
    );
  }

  Widget _formatPanel(bool isDark) {
    final el = _selectedElement()!;
    final colors = [
      0xFF111827, 0xFFFFFFFF, 0xFF2563EB, 0xFF059669, 0xFFDC2626,
      0xFF7C3AED, 0xFFEA580C, 0xFF334155,
    ];
    return Container(
      padding: const EdgeInsets.all(12),
      color: isDark ? const Color(0xFF1F2937) : Colors.white,
      child: ListView(
        children: [
          Text('Format', style: TextStyle(fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF0F172A))),
          const SizedBox(height: 10),
          if (el.type == NgmySlideElementType.text) ...[
            Text('Text color', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
            const SizedBox(height: 6),
            Wrap(
              spacing: 6,
              runSpacing: 6,
              children: colors.map((c) {
                return GestureDetector(
                  onTap: () => _mutate(() => el.color = c),
                  child: Container(
                    width: 24,
                    height: 24,
                    decoration: BoxDecoration(
                      color: Color(c),
                      shape: BoxShape.circle,
                      border: Border.all(color: el.color == c ? const Color(0xFF2563EB) : Colors.grey, width: el.color == c ? 2 : 1),
                    ),
                  ),
                );
              }).toList(),
            ),
            const SizedBox(height: 12),
            SegmentedButton<TextAlign>(
              segments: const [
                ButtonSegment(value: TextAlign.left, icon: Icon(Icons.format_align_left, size: 16)),
                ButtonSegment(value: TextAlign.center, icon: Icon(Icons.format_align_center, size: 16)),
                ButtonSegment(value: TextAlign.right, icon: Icon(Icons.format_align_right, size: 16)),
              ],
              selected: {el.align},
              onSelectionChanged: (s) => _mutate(() => el.align = s.first),
            ),
          ],
          if (el.type == NgmySlideElementType.shape) ...[
            Text('Fill', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
            Wrap(
              spacing: 6,
              children: colors.map((c) => GestureDetector(
                    onTap: () => _mutate(() => el.fillColor = c),
                    child: Container(width: 22, height: 22, decoration: BoxDecoration(color: Color(c), shape: BoxShape.circle)),
                  )).toList(),
            ),
          ],
          const SizedBox(height: 12),
          FilledButton.icon(
            onPressed: _deleteSelected,
            icon: const Icon(Icons.delete_outline, size: 16),
            label: const Text('Delete element'),
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626)),
          ),
        ],
      ),
    );
  }

  Widget _header({
    required String title,
    required String subtitle,
    required IconData icon,
    required Color accent,
  }) {
    return Row(
      children: [
        Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(color: accent, borderRadius: BorderRadius.circular(12)),
          child: Icon(icon, color: Colors.white, size: 26),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
              Text(subtitle, style: TextStyle(fontSize: 12, color: Colors.grey.shade600, fontWeight: FontWeight.w600)),
            ],
          ),
        ),
      ],
    );
  }

  Widget _actionCard({
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        width: 160,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: [color, color.withValues(alpha: 0.75)]),
          borderRadius: BorderRadius.circular(16),
          boxShadow: [BoxShadow(color: color.withValues(alpha: 0.35), blurRadius: 14, offset: const Offset(0, 6))],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, color: Colors.white, size: 28),
            const SizedBox(height: 12),
            Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
          ],
        ),
      ),
    );
  }

  Future<String?> _promptText(String title, String initial) async {
    final c = TextEditingController(text: initial);
    final result = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(title),
        content: TextField(controller: c, autofocus: true),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, c.text), child: const Text('Save')),
        ],
      ),
    );
    c.dispose();
    return result;
  }

  String _formatDate(DateTime d) {
    final local = d.toLocal();
    return '${local.month}/${local.day}/${local.year}';
  }
}

class _UndoSnapshot {
  _UndoSnapshot(this.deck, this.slideIndex, this.selectedId);
  final NgmySlideDeck deck;
  final int slideIndex;
  final String? selectedId;
}

class _NgmySlideshowPage extends StatefulWidget {
  const _NgmySlideshowPage({required this.deck, this.startIndex = 0});
  final NgmySlideDeck deck;
  final int startIndex;

  @override
  State<_NgmySlideshowPage> createState() => _NgmySlideshowPageState();
}

class _NgmySlideshowPageState extends State<_NgmySlideshowPage> {
  late int _index;
  NgmySlideTransition _lastTransition = NgmySlideTransition.fade;
  Timer? _autoTimer;
  bool _autoPlaying = true;

  @override
  void initState() {
    super.initState();
    _index = widget.startIndex.clamp(0, widget.deck.slides.length - 1);
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
    _scheduleAutoAdvance();
  }

  @override
  void dispose() {
    _autoTimer?.cancel();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    super.dispose();
  }

  void _scheduleAutoAdvance() {
    _autoTimer?.cancel();
    if (!_autoPlaying) return;
    final seconds = widget.deck.durationForSlide(_index);
    _autoTimer = Timer(Duration(seconds: seconds), () {
      if (!mounted) return;
      if (_index < widget.deck.slides.length - 1) {
        _next();
        _scheduleAutoAdvance();
      }
    });
  }

  void _toggleAuto() {
    setState(() => _autoPlaying = !_autoPlaying);
    if (_autoPlaying) {
      _scheduleAutoAdvance();
    } else {
      _autoTimer?.cancel();
    }
  }

  void _next() {
    if (_index < widget.deck.slides.length - 1) {
      setState(() {
        _lastTransition = widget.deck.slides[_index + 1].transition;
        _index++;
      });
      _scheduleAutoAdvance();
    }
  }

  void _prev() {
    if (_index > 0) {
      setState(() {
        _lastTransition = widget.deck.slides[_index].transition;
        _index--;
      });
      _scheduleAutoAdvance();
    }
  }

  @override
  Widget build(BuildContext context) {
    final slide = widget.deck.slides[_index];
    Widget body = _SlideRender(slide: slide);

    switch (_lastTransition) {
      case NgmySlideTransition.fade:
      case NgmySlideTransition.dissolve:
        body = AnimatedSwitcher(duration: const Duration(milliseconds: 500), child: KeyedSubtree(key: ValueKey(_index), child: body));
      case NgmySlideTransition.slideLeft:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 450),
          transitionBuilder: (c, a) => SlideTransition(position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: c),
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.slideRight:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 450),
          transitionBuilder: (c, a) => SlideTransition(position: Tween<Offset>(begin: const Offset(-1, 0), end: Offset.zero).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: c),
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.slideUp:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 450),
          transitionBuilder: (c, a) => SlideTransition(position: Tween<Offset>(begin: const Offset(0, 1), end: Offset.zero).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: c),
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.slideDown:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 450),
          transitionBuilder: (c, a) => SlideTransition(position: Tween<Offset>(begin: const Offset(0, -1), end: Offset.zero).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: c),
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.zoom:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 450),
          transitionBuilder: (c, a) => ScaleTransition(scale: Tween<double>(begin: 0.75, end: 1).animate(CurvedAnimation(parent: a, curve: Curves.easeOutBack)), child: c),
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.zoomOut:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 450),
          transitionBuilder: (c, a) => ScaleTransition(scale: Tween<double>(begin: 1.25, end: 1).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: c),
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.flip:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 550),
          transitionBuilder: (c, a) {
            final angle = Tween<double>(begin: 1.5708, end: 0).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic));
            return AnimatedBuilder(
              animation: angle,
              child: c,
              builder: (_, child) => Transform(
                alignment: Alignment.center,
                transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateY(angle.value),
                child: Opacity(opacity: a.value, child: child),
              ),
            );
          },
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.flipVertical:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 550),
          transitionBuilder: (c, a) {
            final angle = Tween<double>(begin: 1.5708, end: 0).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic));
            return AnimatedBuilder(
              animation: angle,
              child: c,
              builder: (_, child) => Transform(
                alignment: Alignment.center,
                transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateX(angle.value),
                child: Opacity(opacity: a.value, child: child),
              ),
            );
          },
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.rotate3d:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 600),
          transitionBuilder: (c, a) {
            return AnimatedBuilder(
              animation: a,
              child: c,
              builder: (_, child) => Transform(
                alignment: Alignment.center,
                transform: Matrix4.identity()
                  ..setEntry(3, 2, 0.002)
                  ..rotateY(a.value * 0.8)
                  ..rotateX(a.value * 0.35),
                child: Opacity(opacity: a.value, child: child),
              ),
            );
          },
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.cube:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 600),
          transitionBuilder: (c, a) {
            final t = CurvedAnimation(parent: a, curve: Curves.easeInOutCubic);
            return AnimatedBuilder(
              animation: t,
              child: c,
              builder: (_, child) => Transform(
                alignment: Alignment.centerRight,
                transform: Matrix4.identity()
                  ..setEntry(3, 2, 0.0025)
                  ..rotateY(-t.value * 1.2),
                child: Opacity(opacity: t.value, child: child),
              ),
            );
          },
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.blur:
        body = AnimatedSwitcher(
          duration: const Duration(milliseconds: 500),
          transitionBuilder: (c, a) => FadeTransition(
            opacity: a,
            child: ScaleTransition(scale: Tween<double>(begin: 1.04, end: 1).animate(a), child: c),
          ),
          child: KeyedSubtree(key: ValueKey(_index), child: body),
        );
      case NgmySlideTransition.none:
        break;
    }

    return Scaffold(
      backgroundColor: Colors.black,
      body: GestureDetector(
        onTapUp: (d) {
          final w = MediaQuery.sizeOf(context).width;
          if (d.localPosition.dx > w * 0.55) _next();
          else _prev();
        },
        child: Stack(
          fit: StackFit.expand,
          children: [
            Center(child: AspectRatio(aspectRatio: widget.deck.aspectValue, child: body)),
            Positioned(
              top: 12,
              left: 12,
              child: Row(
                children: [
                  IconButton.filled(
                    onPressed: () => Navigator.pop(context),
                    icon: const Icon(Icons.close_rounded),
                    style: IconButton.styleFrom(backgroundColor: Colors.black54),
                  ),
                  const SizedBox(width: 8),
                  IconButton.filled(
                    onPressed: _toggleAuto,
                    icon: Icon(_autoPlaying ? Icons.pause_rounded : Icons.play_arrow_rounded),
                    style: IconButton.styleFrom(backgroundColor: Colors.black54),
                  ),
                ],
              ),
            ),
            Positioned(
              top: 16,
              right: 16,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)),
                child: Text(
                  _autoPlaying ? 'Auto ${widget.deck.durationForSlide(_index)}s' : 'Manual',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 11),
                ),
              ),
            ),
            Positioned(
              bottom: 16,
              right: 16,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)),
                child: Text('${_index + 1} / ${widget.deck.slides.length}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SlideRender extends StatelessWidget {
  const _SlideRender({required this.slide});
  final NgmySlide slide;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, c) {
        final w = c.maxWidth;
        final h = c.maxHeight;
        return DecoratedBox(
          decoration: BoxDecoration(
            gradient: slide.backgroundEnd != null
                ? LinearGradient(colors: [Color(slide.background), Color(slide.backgroundEnd!)])
                : null,
            color: slide.backgroundEnd == null ? Color(slide.background) : null,
          ),
          child: Stack(
            children: slide.elements.map((e) {
              return Positioned(
                left: e.x * w,
                top: e.y * h,
                width: e.w * w,
                height: e.h * h,
                child: NgmySlideElementView(element: e, scale: w / 960),
              );
            }).toList(),
          ),
        );
      },
    );
  }
}
