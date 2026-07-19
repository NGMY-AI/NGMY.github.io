import 'dart:async';
import 'dart:convert';
import 'dart:ui';

import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_hati_kuhowa_templates.dart';
import 'ngmy_slides_class_templates.dart';
import 'ngmy_slides_designs.dart';
import 'ngmy_slides_document_tools.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_marriage_agreement.dart';
import 'ngmy_slides_pdf_ios.dart';
import 'ngmy_slides_render.dart';
import 'ngmy_slides_toolkit.dart';
import 'ngmy_slides_transfer.dart';
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

class _NgmySlidesStudioScreenState extends State<NgmySlidesStudioScreen> with SingleTickerProviderStateMixin {
  List<NgmySlideDeck> _decks = [];
  NgmySlideDeck? _activeDeck;
  int _slideIndex = 0;
  String? _selectedElementId;
  /// Only set while the user is actively typing — keeps format chrome off the keyboard.
  String? _editingTextId;
  bool _loading = true;
  bool _showNotes = false;
  String _ribbonTab = 'Home';
  bool _colorApplyAllSlides = false;
  /// Desktop side format panel; phones use a sheet opened on demand.
  bool _showDesktopFormat = true;
  Timer? _autosaveTimer;

  final List<_UndoSnapshot> _undo = [];
  final List<_UndoSnapshot> _redo = [];
  final Map<String, TextEditingController> _textControllers = {};
  final Map<String, FocusNode> _textFocusNodes = {};
  final Map<String, TextEditingController> _notesControllers = {};
  String? _notesSlideId;
  bool _isDraft = false;

  late final AnimationController _framePulse;

  @override
  void initState() {
    super.initState();
    _framePulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat(reverse: true);
    unawaited(_loadDecks());
  }

  @override
  void dispose() {
    _autosaveTimer?.cancel();
    _framePulse.dispose();
    for (final c in _textControllers.values) {
      c.dispose();
    }
    for (final n in _textFocusNodes.values) {
      n.dispose();
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
    for (final n in _textFocusNodes.values) {
      n.dispose();
    }
    _textFocusNodes.clear();
  }

  void _syncTextControllersForCurrentSlide() {
    final slide = _currentSlide;
    if (slide == null) return;
    final ids = slide.elements.where((e) => e.type == NgmySlideElementType.text).map((e) => e.id).toSet();
    for (final id in _textControllers.keys.toList()) {
      if (!ids.contains(id)) {
        _textControllers.remove(id)?.dispose();
        _textFocusNodes.remove(id)?.dispose();
      }
    }
    for (final e in slide.elements) {
      if (e.type != NgmySlideElementType.text) continue;
      final c = _textControllers.putIfAbsent(e.id, () => TextEditingController(text: e.text));
      _textFocusNodes.putIfAbsent(e.id, () => FocusNode());
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
    var needsRebuild = false;
    if (_activeDeck?.isLockedTemplateDoc == true) {
      ngmyMarriageAutoFitField(el, value);
      // Row-packing slides every element sharing this row's y-coordinate
      // left to right — correct for Marriage Agreement's flowing inline
      // sentences, but wrong for a fixed-column table (like Hati ya
      // Kuhowa's two-column witness table): two unrelated columns can sit
      // at the same y, and packing would drag one column's fields across
      // into the other, off the page. Only run it where it was designed
      // for: Marriage Agreement's own deck kind.
      if (_activeDeck?.isMarriageAgreement == true) {
        final slide = _currentSlide;
        if (slide != null) ngmyMarriagePackRow(slide, el.y + el.h * 0.5);
      }
      needsRebuild = true;
    }
    _commitDraftIfNeeded();
    _syncDeckIntoList();
    _scheduleAutosave();
    // Avoid rebuilding while typing — keeps the phone keyboard stable.
    if (needsRebuild && mounted) setState(() {});
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
    _stopTextEditing(unfocus: true);
    if (_isDraft) {
      setState(() {
        _activeDeck = null;
        _isDraft = false;
        _selectedElementId = null;
        _editingTextId = null;
        _clearTextControllers();
      });
      return;
    }
    unawaited(_persistDecks());
    setState(() {
      _activeDeck = null;
      _selectedElementId = null;
      _editingTextId = null;
      _clearTextControllers();
    });
  }

  void _openMarriageDraft(NgmySlideDeck deck) {
    setState(() {
      _activeDeck = deck.copy();
      _slideIndex = 0;
      _selectedElementId = null;
      _isDraft = true;
      _undo.clear();
      _redo.clear();
      _clearTextControllers();
      _syncTextControllersForCurrentSlide();
      _ribbonTab = 'Home';
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Tap fields to edit names & amounts. Use Sign for signatures. Print from the View tab.'),
        duration: Duration(seconds: 4),
      ),
    );
  }

  void _launchMarriageAgreement() {
    launchNgmyMarriageAgreement(
      context: context,
      savedDecks: _decks,
      openDraftEditor: _openMarriageDraft,
      openSavedDeck: _openDeck,
    );
  }

  void _launchHatiKuhowa() {
    launchNgmyHatiKuhowa(
      context: context,
      savedDecks: _decks,
      openDraftEditor: _openMarriageDraft,
      openSavedDeck: _openDeck,
    );
  }

  Future<void> _openDocumentCategoryPicker() async {
    final category = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF1C1917),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              const SizedBox(height: 18),
              const Text('Hati (Documents)', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 4),
              Text('Chagua aina ya hati', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13)),
              const SizedBox(height: 18),
              _DocumentCategoryTile(
                icon: Icons.workspace_premium_rounded,
                colors: const [Color(0xFFE6C15C), Color(0xFFB8860B), Color(0xFF8B6914)],
                title: 'Hati ya Kuhowesha',
                subtitle: 'Barua ya uchumba',
                onTap: () => Navigator.pop(ctx, 'marriage_agreement'),
              ),
              const SizedBox(height: 10),
              _DocumentCategoryTile(
                icon: Icons.description_rounded,
                colors: const [Color(0xFF2E4270), Color(0xFF12213D), Color(0xFF0A1526)],
                title: 'Hati ya Kuhowa',
                subtitle: 'Hati ya mahari',
                onTap: () => Navigator.pop(ctx, 'hati_kuhowa'),
              ),
            ],
          ),
        ),
      ),
    );

    if (category == 'marriage_agreement') {
      _launchMarriageAgreement();
    } else if (category == 'hati_kuhowa') {
      _launchHatiKuhowa();
    }
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
    if (sample) {
      unawaited(_pickClassTemplate());
      return;
    }
    _openDraftEditor(name: name, sample: false);
  }

  Future<void> _pickClassTemplate() async {
    final picked = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0B1220),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.82,
        minChildSize: 0.45,
        maxChildSize: 0.95,
        builder: (_, scrollCtrl) => Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 16, 20, 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Choose a class template', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                  const SizedBox(height: 6),
                  Text('20 professional decks · 5 slides each · Normal to luxury', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 13)),
                ],
              ),
            ),
            Expanded(
              child: GridView.builder(
                controller: scrollCtrl,
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 10, crossAxisSpacing: 10, childAspectRatio: 1.15),
                itemCount: ngmyClassPresentationTemplates.length,
                itemBuilder: (_, i) {
                  final t = ngmyClassPresentationTemplates[i];
                  return Material(
                    color: Colors.transparent,
                    child: InkWell(
                      onTap: () => Navigator.pop(ctx, t.id),
                      borderRadius: BorderRadius.circular(16),
                      child: Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          gradient: LinearGradient(colors: [t.bg, t.bgEnd]),
                          border: Border.all(color: t.accent.withValues(alpha: 0.45)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                              decoration: BoxDecoration(color: t.accent.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(8)),
                              child: Text(t.category, style: TextStyle(color: t.accent, fontWeight: FontWeight.w800, fontSize: 9)),
                            ),
                            const Spacer(),
                            Text(t.name, style: TextStyle(color: t.titleColor, fontWeight: FontWeight.w900, fontSize: 14)),
                            Text('5 slides', style: TextStyle(color: t.bodyColor.withValues(alpha: 0.8), fontSize: 11)),
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
    );
    if (picked == null || !mounted) return;
    final deck = ngmyClassTemplateById(picked).build();
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

  FocusNode _focusNodeFor(NgmySlideElement el) {
    return _textFocusNodes.putIfAbsent(el.id, () => FocusNode());
  }

  bool get _isEditingText => _editingTextId != null;

  void _stopTextEditing({bool unfocus = true}) {
    if (_editingTextId == null && !unfocus) return;
    final id = _editingTextId;
    if (id != null) {
      final el = _findElement(id);
      final c = _textControllers[id];
      if (el != null && c != null && c.text != el.text) el.text = c.text;
    }
    _editingTextId = null;
    if (unfocus) FocusManager.instance.primaryFocus?.unfocus();
  }

  void _startTextEditing(String id) {
    final el = _findElement(id);
    if (el == null || el.type != NgmySlideElementType.text) return;
    final placeholder = el.text.trim().toLowerCase();
    if (placeholder == 'click to edit text' || placeholder == 'tap to edit text' || placeholder == 'double-tap to edit') {
      el.text = '';
      _controllerFor(el).text = '';
    }
    setState(() {
      _selectedElementId = id;
      _editingTextId = id;
      _showNotes = false;
    });
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted || _editingTextId != id) return;
      final node = _focusNodeFor(el);
      node.requestFocus();
      final c = _controllerFor(el);
      c.selection = TextSelection.collapsed(offset: c.text.length);
    });
  }

  void _selectElement(String? id) {
    final prevId = _selectedElementId;
    if (prevId != null && prevId != id) {
      final prev = _findElement(prevId);
      if (prev != null && prev.type == NgmySlideElementType.text) {
        final c = _textControllers[prevId];
        if (c != null && c.text != prev.text) prev.text = c.text;
      }
    }
    final leavingEdit = _editingTextId != null && _editingTextId != id;
    setState(() {
      if (leavingEdit) _editingTextId = null;
      _selectedElementId = id;
      if (id != null) {
        _showDesktopFormat = true;
        final el = _findElement(id);
        if (el != null && el.type == NgmySlideElementType.text) {
          _controllerFor(el).text = el.text;
        }
      } else {
        _editingTextId = null;
      }
    });
    if (leavingEdit || id == null) {
      FocusManager.instance.primaryFocus?.unfocus();
    }
  }

  void _addTextBox() {
    _mutate(() {
      final el = NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.text,
        x: 0.15,
        y: 0.2,
        w: 0.7,
        h: 0.22,
        text: 'Tap to edit text',
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
    if (_editingTextId == id) _stopTextEditing(unfocus: true);
    _mutate(() {
      _currentSlide!.elements.removeWhere((e) => e.id == id);
      _selectedElementId = null;
      _editingTextId = null;
      _textControllers.remove(id)?.dispose();
      _textFocusNodes.remove(id)?.dispose();
    });
  }

  String _colorTargetHint() {
    final el = _selectedElement();
    if (el?.type == NgmySlideElementType.shape) return 'Tap a design shape, then pick a color to fill it.';
    if (el?.type == NgmySlideElementType.text) return 'Selected text — color applies to this text box.';
    return 'No selection — color applies to the slide background.';
  }

  void _applyPickedColor(Color color, {Color? secondary}) {
    final el = _selectedElement();
    final slide = _currentSlide;
    final deck = _activeDeck;
    if (deck == null) return;

    _mutate(() {
      if (el != null) {
        if (el.type == NgmySlideElementType.text) {
          el.color = color.value;
        } else if (el.type == NgmySlideElementType.shape) {
          el.fillColor = color.value;
          if (secondary != null) el.strokeColor = secondary.value;
        }
        return;
      }
      void applyBg(NgmySlide s) {
        s.background = color.value;
        s.backgroundEnd = secondary?.value;
      }
      if (_colorApplyAllSlides) {
        for (final s in deck.slides) {
          applyBg(s);
        }
      } else if (slide != null) {
        applyBg(slide);
      }
    });
  }

  void _applyThemeColor(NgmySlidesTheme theme) {
    final el = _selectedElement();
    if (el != null) {
      if (el.type == NgmySlideElementType.text) {
        final isTitle = el.fontSize >= 28 || el.fontWeight.index >= FontWeight.w800.index;
        _applyPickedColor(isTitle ? theme.titleColor : theme.bodyColor);
      } else if (el.type == NgmySlideElementType.shape) {
        _applyPickedColor(theme.accent.withValues(alpha: 0.88), secondary: theme.accent);
      }
      return;
    }
    _mutate(() {
      final deck = _activeDeck!;
      void applyBg(NgmySlide s) {
        s.background = theme.slideBg.value;
        s.backgroundEnd = theme.slideBgEnd?.value;
      }
      if (_colorApplyAllSlides) {
        deck.themeId = theme.id;
        for (final s in deck.slides) {
          applyBg(s);
        }
      } else {
        final slide = _currentSlide;
        if (slide != null) applyBg(slide);
      }
    });
  }

  void _applyTextColor(int colorValue) {
    final el = _selectedElement();
    final slide = _currentSlide;
    final deck = _activeDeck;
    if (deck == null) return;

    _mutate(() {
      if (el != null && el.type == NgmySlideElementType.text) {
        el.color = colorValue;
        return;
      }
      void applyText(NgmySlide s) {
        for (final e in s.elements.where((x) => x.type == NgmySlideElementType.text)) {
          e.color = colorValue;
        }
      }
      if (_colorApplyAllSlides) {
        for (final s in deck.slides) {
          applyText(s);
        }
      } else if (slide != null) {
        applyText(slide);
      }
    });
  }

  void _applyLayout(NgmySlideLayout layout) {
    final slide = _currentSlide;
    if (slide == null) return;
    _mutate(() => NgmySlidesTemplates.applyLayout(slide, layout, _theme));
  }

  Future<void> _downloadPdf() async {
    final deck = _activeDeck;
    if (deck == null) return;
    _syncDeckIntoList();
    try {
      final msg = await ngmySlidesDownloadDeckPdf(deck);
      if (!mounted) return;
      await ngmyHandleSlidesPdfDownloadResult(context, msg, deckName: deck.name);
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not create PDF: $e')));
    }
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
        h: 0.22,
        imageRef: imageRef,
        fileName: _activeDeck?.isLockedTemplateDoc == true ? '${kMarriageSignPrefix}placed' : 'Signature',
      );
      _currentSlide!.elements.add(el);
      _selectedElementId = el.id;
    });
  }

  Future<void> _addMarriageSignatureAtZone(NgmySlideElement zone) async {
    final imageRef = await ngmySlidesCaptureSignature(context);
    if (imageRef == null || _currentSlide == null) return;
    _mutate(() {
      final el = NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.signature,
        x: zone.x,
        y: zone.y,
        w: zone.w,
        h: zone.h,
        imageRef: imageRef,
        fileName: '${kMarriageSignPrefix}placed_${zone.fileName.replaceFirst(kMarriageSignPrefix, '')}',
      );
      _currentSlide!.elements.add(el);
      _currentSlide!.elements.removeWhere((e) => e.id == zone.id);
      _selectedElementId = null;
    });
  }

  /// Hides Hati ya Kuhowa's optional 4th NIMETOWE item and shifts every
  /// element below it up to close the gap that would otherwise be left —
  /// same spacing as if there had only ever been 3 items.
  void _hideHatiNimetoweItem4() {
    final slide = _currentSlide;
    if (slide == null) return;
    const rowGap = 0.043;
    NgmySlideElement? anchor;
    for (final e in slide.elements) {
      if (e.fileName == '${kMarriageLocked}_nim_n_4') anchor = e;
    }
    if (anchor == null) return;
    final cutoffY = anchor.y;
    _mutate(() {
      slide.elements.removeWhere((e) =>
          e.fileName == '${kMarriageLocked}_nim_n_4' ||
          e.fileName == '${kMarriageLocked}_nim_ul_4' ||
          e.fileName.startsWith('${kMarriageFieldPrefix}mahari_4:'));
      for (final e in slide.elements) {
        if (e.y > cutoffY + 0.001) e.y -= rowGap;
      }
      _selectedElementId = null;
    });
  }

  bool _marriageElementMovable(NgmySlideElement e) {
    if (_activeDeck?.isLockedTemplateDoc != true) return true;
    if (ngmyMarriageElementIsLocked(e)) return false;
    if (ngmyMarriageElementIsField(e)) return false;
    if (ngmyMarriageElementIsSignZone(e)) return false;
    if (e.type == NgmySlideElementType.signature && e.fileName.startsWith(kMarriageSignPrefix)) return false;
    return false;
  }

  bool _marriageElementSelectable(NgmySlideElement e) {
    if (_activeDeck?.isLockedTemplateDoc != true) return true;
    if (ngmyMarriageElementIsLocked(e)) return false;
    if (ngmyMarriageElementIsSignZone(e)) return false;
    if (e.type == NgmySlideElementType.signature && e.fileName.startsWith(kMarriageSignPrefix)) return false;
    return ngmyMarriageElementIsField(e);
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

  void _addPresetText(NgmySlideElement el) {
    _mutate(() {
      _currentSlide!.elements.add(el);
      _selectedElementId = el.id;
    });
  }

  void _applyDocTool(String toolId) {
    switch (toolId) {
      case 'upload_pdf':
        unawaited(_addPdf());
        return;
      case 'sign_paper':
        unawaited(_addSignature());
        return;
      case 'hd_photo':
        unawaited(_addEnhancedPhoto());
        return;
      case 'sharpen':
        unawaited(_enhanceSelectedImage());
        return;
      case 'print':
        unawaited(_downloadPdf());
        return;
      case 'rotate':
        final el = _selectedElement();
        if (el != null) _mutate(() => el.rotation += 0.785398);
        return;
      case 'text_box':
        _addTextBox();
        return;
      case 'picture':
        unawaited(_addImage());
        return;
      case 'present':
        _startSlideshow();
        return;
      case 'new_slide':
        _addSlide();
        return;
      case 'export_json':
        unawaited(_exportJson());
        return;
      case 'outline_share':
        unawaited(_shareOutline());
        return;
      case 'flashcard_tool':
        _addSchoolSlide(NgmySlideLayout.flashcard);
        return;
      case 'quiz_tool':
        _addSchoolSlide(NgmySlideLayout.quiz);
        return;
      case 'worksheet_tool':
        _addSchoolSlide(NgmySlideLayout.worksheet);
        return;
      case 'duplicate_el':
        final el = _selectedElement();
        if (el == null) return;
        _mutate(() {
          final c = el.copy();
          final copy = NgmySlideElement(
            id: NgmySlidesTemplates.newId(),
            type: c.type,
            x: (c.x + 0.04).clamp(0, 0.92),
            y: (c.y + 0.04).clamp(0, 0.92),
            w: c.w,
            h: c.h,
            text: c.text,
            fontSize: c.fontSize,
            fontWeight: c.fontWeight,
            fontStyle: c.fontStyle,
            decoration: c.decoration,
            color: c.color,
            align: c.align,
            imageRef: c.imageRef,
            shape: c.shape,
            fillColor: c.fillColor,
            strokeColor: c.strokeColor,
            strokeWidth: c.strokeWidth,
            rotation: c.rotation,
            bulletList: c.bulletList,
            fileName: c.fileName,
            pdfPage: c.pdfPage,
            textTransition: c.textTransition,
            textAnimDelayMs: c.textAnimDelayMs,
          );
          _currentSlide!.elements.add(copy);
          _selectedElementId = copy.id;
        });
        return;
      case 'delete_el':
        _deleteSelected();
        return;
      case 'bring_fwd':
        final el = _selectedElement();
        if (el == null || _currentSlide == null) return;
        _mutate(() {
          final list = _currentSlide!.elements;
          final i = list.indexWhere((e) => e.id == el.id);
          if (i >= 0 && i < list.length - 1) {
            list.removeAt(i);
            list.insert(i + 1, el);
          }
        });
        return;
      case 'send_back':
        final el = _selectedElement();
        if (el == null || _currentSlide == null) return;
        _mutate(() {
          final list = _currentSlide!.elements;
          final i = list.indexWhere((e) => e.id == el.id);
          if (i > 0) {
            list.removeAt(i);
            list.insert(i - 1, el);
          }
        });
        return;
      case 'align_left':
        final el = _selectedElement();
        if (el != null) _mutate(() => el.align = TextAlign.left);
        return;
      case 'align_center':
        final el = _selectedElement();
        if (el != null) _mutate(() => el.align = TextAlign.center);
        return;
      case 'align_right':
        final el = _selectedElement();
        if (el != null) _mutate(() => el.align = TextAlign.right);
        return;
      case 'grayscale':
      case 'brighten':
        unawaited(_enhanceSelectedImage());
        return;
      case 'flip_h':
        final el = _selectedElement();
        if (el != null) _mutate(() => el.rotation += 3.14159);
        return;
      case 'flip_v':
        final el = _selectedElement();
        if (el != null) _mutate(() => el.rotation -= 3.14159);
        return;
      case 'rectangle':
        _addShape(NgmySlideShapeKind.rectangle);
        return;
      case 'circle':
        _addShape(NgmySlideShapeKind.circle);
        return;
      case 'triangle':
        _addShape(NgmySlideShapeKind.triangle);
        return;
      case 'arrow':
        _addShape(NgmySlideShapeKind.arrow);
        return;
      case 'line':
      case 'divider':
        _addShape(NgmySlideShapeKind.line);
        return;
      case 'word_count':
        final slide = _currentSlide;
        if (slide == null) return;
        var words = 0;
        for (final e in slide.elements.where((x) => x.type == NgmySlideElementType.text)) {
          words += e.text.trim().split(RegExp(r'\s+')).where((w) => w.isNotEmpty).length;
        }
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$words words on this slide')));
        return;
      case 'title':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Presentation Title', y: 0.28, h: 0.18, fontSize: 40, fontWeight: FontWeight.w900, color: _theme.titleColor.value, align: TextAlign.center, textTransition: NgmySlideTransition.zoom));
        return;
      case 'subtitle':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Subtitle goes here', y: 0.48, h: 0.12, fontSize: 22, color: _theme.bodyColor.value, align: TextAlign.center, textTransition: NgmySlideTransition.fade));
        return;
      case 'bullets':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '• First point\n• Second point\n• Third point', y: 0.22, h: 0.5, fontSize: 20, bulletList: true, textTransition: NgmySlideTransition.slideUp));
        return;
      case 'numbered':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '1. First item\n2. Second item\n3. Third item', y: 0.22, h: 0.5, fontSize: 20, textTransition: NgmySlideTransition.slideLeft));
        return;
      case 'quote':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '"Insert meaningful quote here."', y: 0.3, h: 0.25, fontSize: 24, fontStyle: FontStyle.italic, align: TextAlign.center, textTransition: NgmySlideTransition.fade));
        return;
      case 'citation':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Author, Title (Year). Publisher.', y: 0.78, h: 0.1, fontSize: 14, color: 0xFF64748B, textTransition: NgmySlideTransition.slideUp));
        return;
      case 'date_stamp':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: ngmySlidesTodayStamp(), x: 0.72, y: 0.04, w: 0.24, h: 0.08, fontSize: 14, align: TextAlign.right, textTransition: NgmySlideTransition.fade));
        return;
      case 'page_number':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Page ${_slideIndex + 1}', x: 0.78, y: 0.9, w: 0.18, h: 0.06, fontSize: 13, align: TextAlign.right));
        return;
      case 'header_bar':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0, y: 0, w: 1, h: 0.1, fillColor: _theme.accent.withValues(alpha: 0.18).value, strokeColor: 0x00000000));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Document Header', x: 0.05, y: 0.02, w: 0.9, h: 0.07, fontSize: 18, fontWeight: FontWeight.w800, color: _theme.titleColor.value));
        });
        return;
      case 'footer_bar':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0, y: 0.9, w: 1, h: 0.1, fillColor: _theme.accent.withValues(alpha: 0.12).value, strokeColor: 0x00000000));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Footer · ${ngmySlidesTodayStamp()}', x: 0.05, y: 0.92, w: 0.9, h: 0.06, fontSize: 12, color: _theme.bodyColor.value, align: TextAlign.center));
        });
        return;
      case 'highlight':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.12, y: 0.35, w: 0.76, h: 0.12, fillColor: 0x66FDE047, strokeColor: 0xFFFACC15));
        });
        return;
      case 'redact':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.2, y: 0.4, w: 0.5, h: 0.08, fillColor: 0xFF111827, strokeColor: 0xFF111827));
        });
        return;
      case 'callout':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), shape: NgmySlideShapeKind.arrow, x: 0.15, y: 0.55, w: 0.2, h: 0.12, fillColor: _theme.accent.withValues(alpha: 0.35).value));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Important note', x: 0.38, y: 0.52, w: 0.5, h: 0.15, fontSize: 18, textTransition: NgmySlideTransition.bounce));
        });
        return;
      case 'checkboxes':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '☐ Task one\n☐ Task two\n☐ Task three', y: 0.2, h: 0.45, fontSize: 20));
        return;
      case 'table':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData', y: 0.18, h: 0.55, fontSize: 16, align: TextAlign.left));
        return;
      case 'memo':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.08, y: 0.1, w: 0.84, h: 0.78, fillColor: 0xFFF8FAFC, strokeColor: 0xFFCBD5E1, strokeWidth: 1.5));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'MEMO\n\nTo:\nFrom:\nDate: ${ngmySlidesTodayStamp()}\n\nSubject:\n\nBody text…', x: 0.12, y: 0.14, w: 0.76, h: 0.7, fontSize: 16, color: 0xFF0F172A));
        });
        return;
      case 'letter':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '${ngmySlidesTodayStamp()}\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]', y: 0.08, h: 0.82, fontSize: 17, color: 0xFF0F172A));
        return;
      case 'agenda':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps', y: 0.12, h: 0.76, fontSize: 22, fontWeight: FontWeight.w700, textTransition: NgmySlideTransition.slideUp));
        return;
      case 'toc':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8', y: 0.12, h: 0.76, fontSize: 18));
        return;
      case 'sig_line':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Signature: _________________________', y: 0.78, h: 0.08, fontSize: 16));
        return;
      case 'initial_line':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Initials: ______', x: 0.65, y: 0.78, w: 0.3, h: 0.08, fontSize: 16));
        return;
      case 'approved':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'APPROVED', x: 0.62, y: 0.08, w: 0.32, h: 0.12, fontSize: 28, fontWeight: FontWeight.w900, color: 0xFF059669, align: TextAlign.center, textTransition: NgmySlideTransition.zoom));
        return;
      case 'draft':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'DRAFT', x: 0.62, y: 0.08, w: 0.32, h: 0.12, fontSize: 28, fontWeight: FontWeight.w900, color: 0xFFDC2626, align: TextAlign.center, textTransition: NgmySlideTransition.fade));
        return;
      case 'confidential':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'CONFIDENTIAL', y: 0.42, h: 0.12, fontSize: 36, fontWeight: FontWeight.w900, color: 0x33EF4444, align: TextAlign.center));
        return;
      case 'sticky':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.62, y: 0.12, w: 0.3, h: 0.28, fillColor: 0xFFFEF08A, strokeColor: 0xFFFACC15));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Sticky note', x: 0.64, y: 0.14, w: 0.26, h: 0.24, fontSize: 15, color: 0xFF713F12, textTransition: NgmySlideTransition.swing));
        });
        return;
      case 'progress':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.1, y: 0.48, w: 0.8, h: 0.04, fillColor: 0xFFE2E8F0, strokeColor: 0xFFCBD5E1));
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.1, y: 0.48, w: 0.55, h: 0.04, fillColor: 0xFF2563EB, strokeColor: 0xFF2563EB));
        });
        return;
      case 'stars':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '★★★★☆', y: 0.4, h: 0.12, fontSize: 36, align: TextAlign.center, textTransition: NgmySlideTransition.bounce));
        return;
      case 'equation':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'y = mx + b', y: 0.38, h: 0.14, fontSize: 32, align: TextAlign.center, fontWeight: FontWeight.w700));
        return;
      case 'timeline':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '2024 ──► 2025 ──► 2026\nPhase 1    Phase 2    Phase 3', y: 0.35, h: 0.2, fontSize: 18, align: TextAlign.center, textTransition: NgmySlideTransition.slideLeft));
        return;
      case 'two_col':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Left column\n\n• Point A\n• Point B', x: 0.06, y: 0.18, w: 0.42, h: 0.62, fontSize: 18, textTransition: NgmySlideTransition.slideRight));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Right column\n\n• Point C\n• Point D', x: 0.52, y: 0.18, w: 0.42, h: 0.62, fontSize: 18, textTransition: NgmySlideTransition.slideLeft, textAnimDelayMs: 200));
        });
        return;
      case 'compare':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.05, y: 0.18, w: 0.42, h: 0.62, fillColor: 0x332563EB, strokeColor: 0xFF2563EB));
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.53, y: 0.18, w: 0.42, h: 0.62, fillColor: 0x33059669, strokeColor: 0xFF059669));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Option A', x: 0.08, y: 0.2, w: 0.36, h: 0.1, fontSize: 20, fontWeight: FontWeight.w800));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'Option B', x: 0.56, y: 0.2, w: 0.36, h: 0.1, fontSize: 20, fontWeight: FontWeight.w800));
        });
        return;
      case 'link_text':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'https://example.com', y: 0.5, h: 0.1, fontSize: 16, color: 0xFF2563EB, decoration: TextDecoration.underline));
        return;
      case 'phone':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '(555) 123-4567', y: 0.5, h: 0.1, fontSize: 18));
        return;
      case 'email':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'name@email.com', y: 0.5, h: 0.1, fontSize: 18, color: 0xFF2563EB));
        return;
      case 'qr_placeholder':
        _mutate(() {
          _currentSlide!.elements.add(ngmySlidesMakeShape(id: NgmySlidesTemplates.newId(), x: 0.38, y: 0.28, w: 0.24, h: 0.36, fillColor: 0xFFFFFFFF, strokeColor: 0xFF111827));
          _currentSlide!.elements.add(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: '[ QR CODE ]', x: 0.38, y: 0.4, w: 0.24, h: 0.12, fontSize: 14, align: TextAlign.center));
        });
        return;
      case 'cover_page':
        final slide = _currentSlide;
        if (slide == null) return;
        _mutate(() => NgmySlidesTemplates.applyLayout(slide, NgmySlideLayout.title, _theme));
        return;
      case 'invoice':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t\$100\nTOTAL\t\t\$100', y: 0.08, h: 0.84, fontSize: 16, color: 0xFF0F172A));
        return;
      case 'resume':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'YOUR NAME\nJob Title\n\nExperience\n• Role at Company\n\nEducation\n• Degree', y: 0.08, h: 0.84, fontSize: 17, color: 0xFF0F172A));
        return;
      case 'minutes':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'MEETING MINUTES\nDate: ${ngmySlidesTodayStamp()}\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:', y: 0.06, h: 0.88, fontSize: 16));
        return;
      case 'lab_report':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:', y: 0.06, h: 0.88, fontSize: 17));
        return;
      case 'rubric':
        _addPresetText(ngmySlidesMakeText(id: NgmySlidesTemplates.newId(), text: 'RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2', y: 0.1, h: 0.8, fontSize: 15));
        return;
    }
  }

  bool _isCompactLayout(BuildContext context) => MediaQuery.sizeOf(context).width < 900;

  bool _shouldShowNotesPanel(bool compact) {
    if (!_showNotes) return false;
    if (_isEditingText) return false;
    if (!compact) return true;
    const hiddenTabs = {'Design', 'Transitions', 'Insert'};
    return !hiddenTabs.contains(_ribbonTab);
  }

  /// Format panel never auto-opens on phones (covers the keyboard). Desktop keeps a side panel.
  bool _shouldShowFormatPanel(bool compact) {
    if (_selectedElement() == null) return false;
    if (_isEditingText) return false;
    if (compact) return false;
    return _showDesktopFormat;
  }

  Widget _transitionChip(NgmySlideTransition tr, bool selected, Color accent, bool isDark, VoidCallback onTap) {
    final isNone = tr == NgmySlideTransition.none;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: isNone ? 12 : 10, vertical: 8),
          decoration: BoxDecoration(
            color: selected ? accent.withValues(alpha: 0.25) : (isDark ? Colors.white.withValues(alpha: 0.06) : Colors.black.withValues(alpha: 0.04)),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: selected ? accent : Colors.white12, width: isNone && selected ? 2 : 1),
          ),
          child: Text(
            ngmySlideTransitionChipLabel(tr),
            style: TextStyle(
              fontSize: isNone ? 12 : 18,
              fontWeight: isNone ? FontWeight.w800 : FontWeight.normal,
              color: isNone ? (selected ? accent : (isDark ? Colors.white70 : const Color(0xFF64748B))) : null,
            ),
          ),
        ),
      ),
    );
  }

  Widget _elementTransitionPicker(bool isDark) {
    final el = _selectedElement();
    if (el == null) return const SizedBox.shrink();
    return Row(
      children: [
        const SizedBox(width: 8),
        Text('Anim:', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
        const SizedBox(width: 6),
        ...NgmySlideTransition.values.map((tr) {
          final selected = el.textTransition == tr;
          return _transitionChip(
            tr,
            selected,
            const Color(0xFF059669),
            isDark,
            () => showNgmyTextTransitionPreview(context, transition: tr, onApply: () => _mutate(() => el.textTransition = tr)),
          );
        }),
      ],
    );
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
              onIconTap: () => showNgmySlidesTransferHub(
                context,
                ownerEmail: widget.userEmail,
                decks: _decks,
                onImported: (imported) async {
                  setState(() {
                    for (final d in imported) {
                      _decks.insert(0, d);
                    }
                  });
                  await _persistDecks();
                },
              ),
              onTrailingTap: _openDocumentCategoryPicker,
            ),
            const SizedBox(height: 18),
            Row(
              children: [
                Expanded(
                  child: _actionCard(
                    icon: Icons.add_rounded,
                    label: 'Blank Presentation',
                    color: const Color(0xFF2563EB),
                    onTap: () => _createDeck(),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: _actionCard(
                    icon: Icons.school_rounded,
                    label: 'Class Template',
                    color: const Color(0xFF059669),
                    onTap: () => _createDeck(sample: true, name: 'Class Presentation'),
                  ),
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
              _aliveEmptyPresentationsFrame(isDark)
            else
              ..._decks.asMap().entries.map((e) => _deckTile(e.value, isDark, index: e.key)),
          ],
        ),
      ),
    );
  }

  void _dismissFormatPanel() {
    setState(() {
      _showDesktopFormat = false;
      if (_isCompactLayout(context)) {
        _selectedElementId = null;
        _editingTextId = null;
      }
    });
    if (_isCompactLayout(context)) {
      FocusManager.instance.primaryFocus?.unfocus();
    }
  }

  Future<void> _openMobileFormatSheet() async {
    final el = _selectedElement();
    if (el == null) return;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        return Padding(
          padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
          child: StatefulBuilder(
            builder: (ctx, setSheet) {
              return DraggableScrollableSheet(
                expand: false,
                initialChildSize: 0.52,
                minChildSize: 0.34,
                maxChildSize: 0.9,
                builder: (_, scrollCtrl) {
                  return Container(
                    decoration: BoxDecoration(
                      color: isDark ? const Color(0xFF111827) : Colors.white,
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
                      border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                    ),
                    child: Column(
                      children: [
                        const SizedBox(height: 10),
                        Container(
                          width: 40,
                          height: 4,
                          decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)),
                        ),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(16, 12, 8, 4),
                          child: Row(
                            children: [
                              Text('Format', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                              const Spacer(),
                              TextButton(
                                onPressed: () => Navigator.pop(ctx),
                                child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          child: ListView(
                            controller: scrollCtrl,
                            padding: const EdgeInsets.fromLTRB(12, 0, 12, 24),
                            children: [
                              _formatPanel(
                                isDark,
                                compact: true,
                                embedded: true,
                                onLocalChanged: () {
                                  setSheet(() {});
                                  if (mounted) setState(() {});
                                },
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  );
                },
              );
            },
          ),
        );
      },
    );
  }

  Future<void> _showDeckActionsSheet(NgmySlideDeck deck, bool isDark) async {
    final action = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF0B1220),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 10, 20, 20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Container(
                    width: 52,
                    height: 52,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      gradient: const LinearGradient(colors: [Color(0xFF2563EB), Color(0xFF1D4ED8)]),
                    ),
                    child: const Icon(Icons.slideshow_rounded, color: Colors.white, size: 26),
                  ),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(deck.name, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                        const SizedBox(height: 4),
                        Text('${deck.slides.length} slides • Updated ${_formatDate(deck.updatedAt)}', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 12, fontWeight: FontWeight.w600)),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              _deckActionRow(ctx, Icons.picture_as_pdf_outlined, 'Download PDF', 'Visual PDF like your slides', const Color(0xFF2563EB), 'pdf'),
              const SizedBox(height: 10),
              _deckActionRow(ctx, Icons.drive_file_rename_outline_rounded, 'Rename presentation', 'Rename this deck', const Color(0xFF2563EB), 'rename'),
              const SizedBox(height: 10),
              _deckActionRow(ctx, Icons.content_copy_rounded, 'Duplicate', 'Create a copy you can edit', const Color(0xFF059669), 'duplicate'),
              const SizedBox(height: 10),
              _deckActionRow(ctx, Icons.delete_outline_rounded, 'Delete presentation', 'Remove permanently', const Color(0xFFEF4444), 'delete'),
              const SizedBox(height: 18),
              FilledButton(
                onPressed: () => Navigator.pop(ctx),
                style: FilledButton.styleFrom(
                  backgroundColor: Colors.white.withValues(alpha: 0.1),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
              ),
            ],
          ),
        ),
      ),
    );
    if (action == null || !mounted) return;
    if (action == 'pdf') {
      try {
        final msg = await ngmySlidesDownloadDeckPdf(deck);
        if (!mounted) return;
        await ngmyHandleSlidesPdfDownloadResult(context, msg, deckName: deck.name);
      } catch (e) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not create PDF: $e')));
      }
    } else if (action == 'delete') {
      final ok = await showDialog<bool>(
        context: context,
        builder: (ctx) => AlertDialog(
          backgroundColor: const Color(0xFF111827),
          title: const Text('Delete presentation?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
          content: Text('Delete "${deck.name}" permanently?', style: TextStyle(color: Colors.white.withValues(alpha: 0.7))),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEF4444)), child: const Text('Delete')),
          ],
        ),
      );
      if (ok == true) _deleteDeck(deck);
    } else if (action == 'rename') {
      final name = await _promptText('Rename presentation', deck.name);
      if (name != null) _renameDeck(deck, name);
    } else if (action == 'duplicate') {
      final json = deck.toJson();
      json['id'] = NgmySlidesTemplates.newId();
      json['name'] = '${deck.name} (Copy)';
      setState(() => _decks.insert(0, NgmySlideDeck.fromJson(json)));
      _scheduleAutosave();
    }
  }

  Widget _deckActionRow(BuildContext ctx, IconData icon, String title, String subtitle, Color accent, String value) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => Navigator.pop(ctx, value),
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.05),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
          ),
          child: Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(color: accent.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
                child: Icon(icon, color: accent, size: 22),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: TextStyle(color: value == 'delete' ? const Color(0xFFFCA5A5) : Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 11, fontWeight: FontWeight.w600)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.25)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _panelDoneButton({required VoidCallback onDone, bool isDark = true}) {
    return TextButton(
      onPressed: onDone,
      style: TextButton.styleFrom(
        foregroundColor: const Color(0xFF2563EB),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        minimumSize: Size.zero,
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
      ),
      child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14)),
    );
  }

  Widget _aliveEmptyPresentationsFrame(bool isDark) {
    return AnimatedBuilder(
      animation: _framePulse,
      builder: (context, _) {
        final t = Curves.easeInOut.transform(_framePulse.value);
        return ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 14,
              child: Container(
              width: double.infinity,
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(22),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: isDark
                      ? [
                          Colors.white.withValues(alpha: 0.10 + t * 0.04),
                          const Color(0xFF111827).withValues(alpha: 0.72),
                        ]
                      : [
                          Colors.white.withValues(alpha: 0.88),
                          const Color(0xFFECFEFF).withValues(alpha: 0.75),
                        ],
                ),
                border: Border.all(
                  color: const Color(0xFF67E8F9).withValues(alpha: 0.28 + t * 0.22),
                  width: 1.3,
                ),
              ),
              child: Column(
                children: [
                  Container(
                    width: 58,
                    height: 58,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(
                        colors: [
                          const Color(0xFF67E8F9).withValues(alpha: 0.35 + t * 0.2),
                          const Color(0xFF6366F1).withValues(alpha: 0.18),
                          Colors.transparent,
                        ],
                      ),
                      border: Border.all(color: const Color(0xFF67E8F9).withValues(alpha: 0.45 + t * 0.2)),
                    ),
                    child: Icon(Icons.view_carousel_outlined, size: 28, color: isDark ? Colors.white70 : const Color(0xFF0F172A)),
                  ),
                  const SizedBox(height: 14),
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
            ),
          ),
        );
      },
    );
  }

  Widget _deckTile(NgmySlideDeck deck, bool isDark, {int index = 0}) {
    final accent = deck.deckKind == 'hati_kuhowa'
        ? const [Color(0xFF2E4270), Color(0xFF12213D)]
        : deck.isLockedTemplateDoc
            ? const [Color(0xFFB8860B), Color(0xFF8B6914)]
            : const [Color(0xFF22D3EE), Color(0xFF6366F1)];
    return AnimatedBuilder(
      animation: _framePulse,
      builder: (context, _) {
        final phase = ((_framePulse.value + index * 0.12) % 1.0);
        final t = Curves.easeInOut.transform(phase);
        return Container(
          margin: const EdgeInsets.only(bottom: 10),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 12,
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: () => _openDeck(deck),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: isDark
                            ? [
                                Colors.white.withValues(alpha: 0.10 + t * 0.04),
                                const Color(0xFF111827).withValues(alpha: 0.78),
                              ]
                            : [
                                Colors.white.withValues(alpha: 0.92),
                                const Color(0xFFF0F9FF).withValues(alpha: 0.82),
                              ],
                      ),
                      border: Border.all(
                        color: accent.first.withValues(alpha: (isDark ? 0.34 : 0.26) + t * 0.22),
                        width: 1.25,
                      ),
                    ),
                    child: ListTile(
                      contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                      leading: Container(
                        width: 52,
                        height: 36,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          gradient: LinearGradient(colors: accent),
                        ),
                        child: Icon(
                          deck.isLockedTemplateDoc ? Icons.description_rounded : Icons.slideshow_rounded,
                          color: Colors.white,
                          size: 22,
                        ),
                      ),
                      title: Text(deck.name, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                      subtitle: Text(
                        deck.deckKind == 'marriage_agreement'
                            ? 'Hati ya Kuhowesha • Updated ${_formatDate(deck.updatedAt)}'
                            : deck.deckKind == 'hati_kuhowa'
                                ? 'Hati ya Kuhowa • Updated ${_formatDate(deck.updatedAt)}'
                                : '${deck.slides.length} slides • Updated ${_formatDate(deck.updatedAt)}',
                        style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                      ),
                      trailing: IconButton(
                        icon: Icon(Icons.more_horiz_rounded, color: isDark ? Colors.white54 : const Color(0xFF94A3B8)),
                        tooltip: 'Project options',
                        onPressed: () => _showDeckActionsSheet(deck, isDark),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildEditor() {
    final deck = _activeDeck!;
    final slide = _currentSlide!;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final compact = _isCompactLayout(context);
    final wide = !compact;
    final keyboardInset = MediaQuery.viewInsetsOf(context).bottom;
    final keyboardOpen = keyboardInset > 40;
    final editing = _isEditingText;
    final hideChrome = keyboardOpen || editing;

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B1220) : const Color(0xFFE8EEF6),
      // Avoid double-inset with MainScreen + iOS keyboard (caused the black void).
      resizeToAvoidBottomInset: false,
      body: SafeArea(
        bottom: false,
        child: Stack(
          children: [
            Column(
              children: [
                if (!editing) _editorTopBar(deck, isDark, compact: compact),
                if (!hideChrome) _modernRibbon(isDark, compact: compact),
                if (compact && _selectedElement() != null && !hideChrome)
                  _mobileSelectionBar(isDark),
                Expanded(
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      if (wide && !hideChrome) SizedBox(width: 132, child: _slideStrip(isDark, vertical: true)),
                      Expanded(
                        child: Column(
                          children: [
                            if (compact && !hideChrome) SizedBox(height: 72, child: _slideStrip(isDark, vertical: false)),
                            Expanded(
                              child: Align(
                                alignment: Alignment.topCenter,
                                child: _canvas(slide, isDark, tight: editing || keyboardOpen),
                              ),
                            ),
                            if (_shouldShowNotesPanel(compact) && !keyboardOpen && !editing)
                              _notesPanel(slide, isDark, compact: compact),
                          ],
                        ),
                      ),
                      if (wide && _shouldShowFormatPanel(compact)) SizedBox(width: 240, child: _formatPanel(isDark)),
                    ],
                  ),
                ),
                if (!keyboardOpen && !editing)
                  SizedBox(height: compact ? 72 : widget.bottomScrollPadding),
              ],
            ),
            if (editing && compact) _mobileTextEditOverlay(isDark),
          ],
        ),
      ),
    );
  }

  /// Full-width phone editor above the keyboard — no black dead space under the slide.
  Widget _mobileTextEditOverlay(bool isDark) {
    final el = _selectedElement();
    if (el == null || el.type != NgmySlideElementType.text) return const SizedBox.shrink();
    final c = _controllerFor(el);
    final node = _focusNodeFor(el);
    return Positioned.fill(
      child: Material(
        color: Colors.black.withValues(alpha: 0.55),
        child: Column(
          children: [
            SafeArea(
              bottom: false,
              child: Padding(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
                child: Row(
                  children: [
                    Text(
                      'Edit text',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontWeight: FontWeight.w900, fontSize: 15),
                    ),
                    const Spacer(),
                    TextButton(
                      onPressed: () {
                        _stopTextEditing();
                        setState(() {});
                      },
                      child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w900, color: Color(0xFF60A5FA))),
                    ),
                  ],
                ),
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    color: isDark ? const Color(0xFF111827) : Colors.white,
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: const Color(0xFF2563EB).withValues(alpha: 0.45)),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 20)],
                  ),
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
                    child: TextField(
                      controller: c,
                      focusNode: node,
                      autofocus: true,
                      maxLines: null,
                      expands: true,
                      textAlignVertical: TextAlignVertical.top,
                      keyboardType: TextInputType.multiline,
                      textInputAction: TextInputAction.newline,
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: el.fontWeight,
                        fontStyle: el.fontStyle,
                        decoration: el.decoration,
                        color: isDark ? Colors.white : const Color(0xFF0F172A),
                        height: 1.35,
                      ),
                      cursorColor: const Color(0xFF2563EB),
                      decoration: const InputDecoration(
                        border: InputBorder.none,
                        hintText: 'Type here…',
                        hintStyle: TextStyle(color: Color(0xFF94A3B8)),
                      ),
                      onChanged: (v) => _updateElementText(el.id, v),
                    ),
                  ),
                ),
              ),
            ),
            // Quick format strip sits just above the keyboard. The keyboard
            // itself is already accounted for by MainScreen's ancestor
            // Scaffold (resizeToAvoidBottomInset: true) shrinking the space
            // given to this whole editor — adding keyboardInset again here
            // double-reserved space and left an empty black gap above the
            // keyboard (the "black void" this screen's Scaffold comment
            // already warns about).
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 10),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  color: isDark ? const Color(0xFF1E293B) : Colors.white,
                  border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFFE2E8F0)),
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          children: [
                            _selChip(Icons.format_bold, null, () {
                              _mutate(() => el.fontWeight = el.fontWeight == FontWeight.bold ? FontWeight.w500 : FontWeight.bold);
                            }, isDark),
                            _selChip(Icons.format_italic, null, () {
                              _mutate(() => el.fontStyle = el.fontStyle == FontStyle.italic ? FontStyle.normal : FontStyle.italic);
                            }, isDark),
                            _selChip(Icons.format_underlined_rounded, null, () {
                              _mutate(() => el.decoration = el.decoration == TextDecoration.underline ? TextDecoration.none : TextDecoration.underline);
                            }, isDark),
                            _selChip(Icons.format_list_bulleted_rounded, null, () {
                              _mutate(() => el.bulletList = !el.bulletList);
                            }, isDark),
                            _selChip(_alignIcon(el.align), null, () {
                              _mutate(() => el.align = _nextAlign(el.align));
                            }, isDark),
                            _selChip(Icons.text_increase_rounded, null, () => _mutate(() => el.fontSize = (el.fontSize + 2).clamp(10, 96)), isDark),
                            _selChip(Icons.text_decrease_rounded, null, () => _mutate(() => el.fontSize = (el.fontSize - 2).clamp(10, 96)), isDark),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      '${el.fontSize.toInt()} pt',
                      style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                    ),
                    const SizedBox(width: 4),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _mobileSelectionBar(bool isDark) {
    final el = _selectedElement();
    if (el == null) return const SizedBox.shrink();
    final isText = el.type == NgmySlideElementType.text;
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 0, 12, 8),
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: LinearGradient(
          colors: isDark
              ? [const Color(0xFF1E293B), const Color(0xFF0F172A)]
              : [Colors.white, const Color(0xFFF8FAFC)],
        ),
        border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFFE2E8F0)),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 16, offset: const Offset(0, 6))],
      ),
      child: Row(
        children: [
          if (isText)
            _selChip(Icons.edit_rounded, 'Edit', () => _startTextEditing(el.id), isDark, accent: true),
          _selChip(Icons.tune_rounded, 'Format', () {
            if (_isCompactLayout(context)) {
              unawaited(_openMobileFormatSheet());
            } else {
              setState(() => _showDesktopFormat = true);
            }
          }, isDark),
          if (isText) ...[
            _selChip(Icons.format_bold, null, () {
              _mutate(() => el.fontWeight = el.fontWeight == FontWeight.bold ? FontWeight.w500 : FontWeight.bold);
            }, isDark),
            _selChip(Icons.text_increase_rounded, null, () => _mutate(() => el.fontSize = (el.fontSize + 2).clamp(10, 96)), isDark),
            _selChip(Icons.text_decrease_rounded, null, () => _mutate(() => el.fontSize = (el.fontSize - 2).clamp(10, 96)), isDark),
          ],
          const Spacer(),
          _selChip(Icons.delete_outline_rounded, null, _deleteSelected, isDark, danger: true),
          _selChip(Icons.check_rounded, 'Done', () => _selectElement(null), isDark),
        ],
      ),
    );
  }

  IconData _alignIcon(TextAlign align) {
    switch (align) {
      case TextAlign.center:
        return Icons.format_align_center_rounded;
      case TextAlign.right:
      case TextAlign.end:
        return Icons.format_align_right_rounded;
      default:
        return Icons.format_align_left_rounded;
    }
  }

  TextAlign _nextAlign(TextAlign align) {
    switch (align) {
      case TextAlign.left:
      case TextAlign.start:
        return TextAlign.center;
      case TextAlign.center:
        return TextAlign.right;
      default:
        return TextAlign.left;
    }
  }

  Widget _selChip(IconData icon, String? label, VoidCallback onTap, bool isDark, {bool accent = false, bool danger = false}) {
    final fg = danger
        ? const Color(0xFFEF4444)
        : accent
            ? Colors.white
            : (isDark ? Colors.white70 : const Color(0xFF334155));
    return Padding(
      padding: const EdgeInsets.only(right: 4),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          // Icon buttons never need keyboard focus themselves — without this,
          // tapping one steals focus from the text field being edited and
          // dismisses the on-screen keyboard.
          canRequestFocus: false,
          borderRadius: BorderRadius.circular(12),
          child: Ink(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              gradient: accent
                  ? const LinearGradient(colors: [Color(0xFF2563EB), Color(0xFF7C3AED)])
                  : null,
              color: accent ? null : (isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF1F5F9)),
            ),
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: label == null ? 10 : 12, vertical: 8),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(icon, size: 16, color: fg),
                  if (label != null) ...[
                    const SizedBox(width: 5),
                    Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: fg)),
                  ],
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _editorTopBar(NgmySlideDeck deck, bool isDark, {required bool compact}) {
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 8, 10, 6),
      padding: const EdgeInsets.fromLTRB(6, 6, 8, 6),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isDark
              ? [const Color(0xFF1E293B), const Color(0xFF0F172A)]
              : [Colors.white, const Color(0xFFF0F9FF)],
        ),
        border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFFDBEAFE), width: 1.2),
        boxShadow: [
          BoxShadow(color: const Color(0xFF2563EB).withValues(alpha: isDark ? 0.18 : 0.10), blurRadius: 18, offset: const Offset(0, 6)),
        ],
      ),
      child: Row(
        children: [
          _topIconBtn(Icons.arrow_back_ios_new_rounded, 'Back', _closeEditor, isDark),
          const SizedBox(width: 4),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  deck.name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontWeight: FontWeight.w900,
                    fontSize: compact ? 14 : 15,
                    letterSpacing: -0.2,
                    color: isDark ? Colors.white : const Color(0xFF0F172A),
                  ),
                ),
                Text(
                  '${deck.slides.length} slides · ${_slideIndex + 1} of ${deck.slides.length}',
                  style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: isDark ? Colors.white38 : const Color(0xFF64748B)),
                ),
              ],
            ),
          ),
          _topIconBtn(Icons.undo_rounded, 'Undo', _undo.isEmpty ? null : _undoAction, isDark),
          _topIconBtn(Icons.redo_rounded, 'Redo', _redo.isEmpty ? null : _redoAction, isDark),
          _topIconBtn(Icons.picture_as_pdf_outlined, 'PDF', () => unawaited(_downloadPdf()), isDark),
          PopupMenuButton<String>(
            tooltip: 'More',
            padding: EdgeInsets.zero,
            icon: Icon(Icons.more_horiz_rounded, color: isDark ? Colors.white70 : const Color(0xFF475569)),
            onSelected: (v) async {
              switch (v) {
                case 'share':
                  await _shareOutline();
                case 'timer':
                  final d = _activeDeck;
                  if (d == null) return;
                  final picked = await showModalBottomSheet<int>(
                    context: context,
                    backgroundColor: const Color(0xFF111827),
                    builder: (ctx) => SafeArea(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Padding(padding: EdgeInsets.all(12), child: Text('Seconds per slide', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800))),
                          for (final s in [3, 5, 8, 10, 15, 20, 30, 60])
                            ListTile(
                              title: Text('$s seconds', style: const TextStyle(color: Colors.white)),
                              trailing: d.autoAdvanceSeconds == s ? const Icon(Icons.check_rounded, color: Color(0xFF2563EB)) : null,
                              onTap: () => Navigator.pop(ctx, s),
                            ),
                        ],
                      ),
                    ),
                  );
                  if (picked != null) _mutate(() => d.autoAdvanceSeconds = picked);
              }
            },
            itemBuilder: (_) => [
              const PopupMenuItem(value: 'share', child: Text('Share text outline')),
              PopupMenuItem(value: 'timer', child: Text('Timer: ${_activeDeck?.autoAdvanceSeconds ?? 5}s')),
            ],
          ),
          const SizedBox(width: 4),
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: _startSlideshow,
              borderRadius: BorderRadius.circular(14),
              child: Ink(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  gradient: const LinearGradient(colors: [Color(0xFF2563EB), Color(0xFF7C3AED)]),
                ),
                child: const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 9),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.play_arrow_rounded, color: Colors.white, size: 20),
                      SizedBox(width: 2),
                      Text('Play', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _topIconBtn(IconData icon, String tip, VoidCallback? onTap, bool isDark) {
    return IconButton(
      tooltip: tip,
      onPressed: onTap,
      visualDensity: VisualDensity.compact,
      icon: Icon(icon, size: 20, color: onTap == null ? (isDark ? Colors.white24 : Colors.black26) : (isDark ? Colors.white70 : const Color(0xFF334155))),
    );
  }

  Widget _modernRibbon(bool isDark, {required bool compact}) {
    final tabs = ['Home', 'Insert', 'School', 'Tools', 'Design', 'Transitions', 'View'];
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 0, 10, 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        color: isDark ? const Color(0xFF111827).withValues(alpha: 0.92) : Colors.white.withValues(alpha: 0.96),
        border: Border.all(color: isDark ? const Color(0xFF1F2937) : const Color(0xFFE2E8F0)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.fromLTRB(8, 8, 8, 4),
            child: Row(
              children: tabs.map((t) {
                final sel = _ribbonTab == t;
                return Padding(
                  padding: const EdgeInsets.only(right: 6),
                  child: GestureDetector(
                    onTap: () => setState(() => _ribbonTab = t),
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 180),
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(999),
                        gradient: sel
                            ? const LinearGradient(colors: [Color(0xFF2563EB), Color(0xFF6366F1)])
                            : null,
                        color: sel ? null : (isDark ? Colors.white.withValues(alpha: 0.05) : const Color(0xFFF1F5F9)),
                      ),
                      child: Text(
                        t,
                        style: TextStyle(
                          fontWeight: FontWeight.w800,
                          fontSize: 12,
                          color: sel ? Colors.white : (isDark ? Colors.white60 : const Color(0xFF475569)),
                        ),
                      ),
                    ),
                  ),
                );
              }).toList(),
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.fromLTRB(8, 2, 8, compact ? 8 : 10),
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
            _ribbonBtn(Icons.quiz_rounded, 'Quiz', () => _addSchoolSlide(NgmySlideLayout.quiz), isDark),
            _ribbonBtn(Icons.assignment_rounded, 'Worksheet', () => _addSchoolSlide(NgmySlideLayout.worksheet), isDark),
            _ribbonBtn(Icons.style_rounded, 'Flashcard', () => _addSchoolSlide(NgmySlideLayout.flashcard), isDark),
            _ribbonBtn(Icons.science_rounded, 'Lab Report', () => _applyDocTool('lab_report'), isDark),
            _ribbonBtn(Icons.fact_check_rounded, 'Rubric', () => _applyDocTool('rubric'), isDark),
            _ribbonBtn(Icons.groups_rounded, 'Minutes', () => _applyDocTool('minutes'), isDark),
            _ribbonBtn(Icons.menu_book_rounded, 'Syllabus', () => _applyDocTool('agenda'), isDark),
            _ribbonBtn(Icons.timeline_rounded, 'Timeline', () => _applyDocTool('timeline'), isDark),
          ],
        );
      case 'Tools':
        return Row(
          children: [
            for (final tool in ngmySlidesDocumentTools)
              _ribbonBtn(tool.icon, tool.label, () => _applyDocTool(tool.id), isDark),
          ],
        );
      case 'Insert':
        return Row(
          children: [
            _ribbonBtn(Icons.title_rounded, 'Text Box', _addTextBox, isDark),
            _ribbonBtn(Icons.image_rounded, 'Picture', () => unawaited(_addImage()), isDark),
            _ribbonBtn(Icons.table_chart_rounded, 'Table', () => _applyDocTool('table'), isDark),
            _ribbonBtn(Icons.sticky_note_2_rounded, 'Sticky', () => _applyDocTool('sticky'), isDark),
            _ribbonBtn(Icons.horizontal_rule_rounded, 'Divider', () => _applyDocTool('divider'), isDark),
            _ribbonBtn(Icons.view_agenda_rounded, 'Header', () => _applyDocTool('header_bar'), isDark),
            _ribbonBtn(Icons.crop_square_rounded, 'Rectangle', () => _addShape(NgmySlideShapeKind.rectangle), isDark),
            _ribbonBtn(Icons.circle_outlined, 'Circle', () => _addShape(NgmySlideShapeKind.circle), isDark),
            _ribbonBtn(Icons.change_history_rounded, 'Triangle', () => _addShape(NgmySlideShapeKind.triangle), isDark),
            _ribbonBtn(Icons.arrow_forward_rounded, 'Arrow', () => _addShape(NgmySlideShapeKind.arrow), isDark),
            _ribbonBtn(Icons.crop_landscape_rounded, 'Parallelogram', () => _addShape(NgmySlideShapeKind.parallelogram), isDark),
            _ribbonBtn(Icons.hexagon_outlined, 'Hexagon', () => _addShape(NgmySlideShapeKind.hexagon), isDark),
            _ribbonBtn(Icons.horizontal_rule_rounded, 'Line', () => _addShape(NgmySlideShapeKind.line), isDark),
            _ribbonBtn(Icons.picture_as_pdf_outlined, 'PDF', () => unawaited(_addPdf()), isDark),
            _ribbonBtn(Icons.draw_outlined, 'Signature', () => unawaited(_addSignature()), isDark),
            _ribbonBtn(Icons.format_quote_rounded, 'Quote', () => _applyDocTool('quote'), isDark),
            _ribbonBtn(Icons.add_box_outlined, 'New Slide', () => _addSlide(), isDark),
          ],
        );
      case 'Design':
        final screenW = MediaQuery.sizeOf(context).width - 20;
        return SizedBox(
          width: screenW,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                children: [
                  _aspectChip('Wide 16:9', NgmySlideAspectRatio.landscape169, isDark),
                  _aspectChip('Short 9:16', NgmySlideAspectRatio.portrait916, isDark),
                ],
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  _colorScopeChip('This slide', !_colorApplyAllSlides, isDark, () => setState(() => _colorApplyAllSlides = false)),
                  const SizedBox(width: 6),
                  _colorScopeChip('All slides', _colorApplyAllSlides, isDark, () => setState(() => _colorApplyAllSlides = true)),
                ],
              ),
              const SizedBox(height: 6),
              Text(
                _colorTargetHint(),
                style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: isDark ? Colors.white38 : const Color(0xFF94A3B8)),
              ),
              const SizedBox(height: 8),
              Text('COLORS', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF64748B), letterSpacing: 1)),
              const SizedBox(height: 4),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: NgmySlidesTemplates.themes.map((t) {
                    final selected = _activeDeck?.themeId == t.id && _selectedElement() == null && !_colorApplyAllSlides;
                    return Padding(
                      padding: const EdgeInsets.only(right: 6),
                      child: GestureDetector(
                        onTap: () => _applyThemeColor(t),
                        child: Tooltip(
                          message: t.label,
                          child: Container(
                            width: 26,
                            height: 26,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(colors: [t.slideBg, t.slideBgEnd ?? t.accent]),
                              border: Border.all(color: selected ? t.accent : Colors.white24, width: selected ? 2.5 : 1),
                            ),
                          ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
              const SizedBox(height: 8),
              Text('TEXT COLORS', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF64748B), letterSpacing: 1)),
              const SizedBox(height: 4),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    for (final c in const [
                      0xFF0F172A, 0xFF334155, 0xFF2563EB, 0xFF059669, 0xFFDC2626,
                      0xFF7C3AED, 0xFFEA580C, 0xFF0891B2, 0xFFFFFFFF, 0xFFFBBF24,
                    ])
                      Padding(
                        padding: const EdgeInsets.only(right: 6),
                        child: GestureDetector(
                          onTap: () => _applyTextColor(c),
                          child: Container(
                            width: 24,
                            height: 24,
                            decoration: BoxDecoration(
                              color: Color(c),
                              shape: BoxShape.circle,
                              border: Border.all(color: c == 0xFFFFFFFF ? Colors.black26 : Colors.white24, width: 1.5),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 8),
              Text('SLIDE DESIGNS', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF64748B), letterSpacing: 1)),
              const SizedBox(height: 4),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: ngmySlideDesignTemplates.map((d) {
                    return Padding(
                      padding: const EdgeInsets.only(right: 8),
                      child: GestureDetector(
                        onTap: () {
                          final slide = _currentSlide;
                          if (slide == null) return;
                          if (slide.slideDesignId == d.id) {
                            _mutate(() => ngmyApplySlideDesignToCurrent(slide, d.id));
                            return;
                          }
                          _mutate(() => ngmyApplySlideDesignToCurrent(slide, d.id));
                        },
                        child: Column(
                          children: [
                            ClipRRect(
                              borderRadius: BorderRadius.circular(8),
                              child: Container(
                                width: 72,
                                height: 44,
                                decoration: BoxDecoration(
                                  border: Border.all(
                                    color: _currentSlide?.slideDesignId == d.id ? const Color(0xFF2563EB) : Colors.white24,
                                    width: _currentSlide?.slideDesignId == d.id ? 2.5 : 1,
                                  ),
                                  borderRadius: BorderRadius.circular(8),
                                ),
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(7),
                                  child: ngmyMiniSlidePreview(ngmySlideDesignPreview(d.id)),
                                ),
                              ),
                            ),
                            const SizedBox(height: 3),
                            Text(d.label, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
                          ],
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
              const SizedBox(height: 6),
              _layoutMenu(isDark),
            ],
          ),
        );
      case 'Transitions':
        final el = _selectedElement();
        final screenW = MediaQuery.sizeOf(context).width - 20;
        Widget transitionRow(List<NgmySlideTransition> transitions, NgmySlideTransition? selected, void Function(NgmySlideTransition) onTap, Color accent) {
          return SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: transitions.map((tr) {
                return _transitionChip(tr, selected == tr, accent, isDark, () => onTap(tr));
              }).toList(),
            ),
          );
        }
        return SizedBox(
          width: screenW,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              if (el != null) ...[
                Text('ELEMENT ANIMATION', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF64748B), letterSpacing: 1)),
                const SizedBox(height: 4),
                transitionRow(
                  NgmySlideTransition.values,
                  el.textTransition,
                  (tr) => showNgmyTextTransitionPreview(context, transition: tr, onApply: () => _mutate(() => el.textTransition = tr)),
                  const Color(0xFF059669),
                ),
                const SizedBox(height: 8),
                Text('SLIDE TRANSITION', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF64748B), letterSpacing: 1)),
                const SizedBox(height: 4),
              ],
              transitionRow(
                NgmySlideTransition.values,
                _currentSlide?.transition,
                (tr) => showNgmyTransitionPreview(context, transition: tr, onApply: () => _mutate(() => _currentSlide!.transition = tr)),
                const Color(0xFF2563EB),
              ),
            ],
          ),
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
            _ribbonBtn(Icons.slideshow_rounded, 'Present', _startSlideshow, isDark),
            _ribbonBtn(Icons.text_fields_rounded, 'Text Box', _addTextBox, isDark),
            _ribbonBtn(Icons.open_in_full_rounded, 'Fit Text', () {
              final el = _selectedElement();
              if (el != null && el.type == NgmySlideElementType.text) {
                _mutate(() {
                  el.h = (el.h * 1.25).clamp(0.08, 1.8);
                  el.w = (el.w * 1.1).clamp(0.08, 1.8);
                });
              }
            }, isDark),
            _ribbonBtn(Icons.picture_as_pdf_outlined, 'Download PDF', () => unawaited(_downloadPdf()), isDark),
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
              if (!el.fileName.startsWith('__design__')) _elementTransitionPicker(isDark),
              _ribbonBtn(Icons.delete_forever_outlined, 'Delete', _deleteSelected, isDark),
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
      padding: const EdgeInsets.only(right: 6),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(14),
          child: Ink(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              color: isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF1F5F9),
              border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(icon, size: 18, color: isDark ? const Color(0xFF93C5FD) : const Color(0xFF2563EB)),
                  const SizedBox(height: 3),
                  Text(
                    label,
                    style: TextStyle(
                      fontSize: 9,
                      fontWeight: FontWeight.w800,
                      color: isDark ? Colors.white60 : const Color(0xFF475569),
                    ),
                  ),
                ],
              ),
            ),
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

  Widget _canvas(NgmySlide slide, bool isDark, {bool tight = false}) {
    final aspect = _activeDeck?.aspectValue ?? 16 / 9;
    return Padding(
      padding: EdgeInsets.all(tight ? 8 : 16),
      child: Align(
        alignment: Alignment.topCenter,
        child: AspectRatio(
          aspectRatio: aspect,
          child: GestureDetector(
            onTap: () {
              _stopTextEditing();
              _selectElement(null);
            },
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
                  child: Stack(
                    key: ValueKey('canvas_${slide.id}_${slide.slideDesignId}_${slide.designRevision}'),
                    clipBehavior: Clip.none,
                    children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: DecoratedBox(
                          decoration: BoxDecoration(
                            gradient: slide.backgroundEnd != null
                                ? LinearGradient(
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                    colors: [Color(slide.background), Color(slide.backgroundEnd!)],
                                  )
                                : null,
                            color: slide.backgroundEnd == null ? Color(slide.background) : null,
                          ),
                          child: const SizedBox.expand(),
                        ),
                      ),
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
                );
              },
            ),
          ),
        ),
      ),
    );
  }

  Widget _canvasElement(NgmySlideElement e, double cw, double ch, bool isDark) {
    final marriage = _activeDeck?.isLockedTemplateDoc == true;
    final signZone = marriage && ngmyMarriageElementIsSignZone(e);
    final selectable = !marriage || _marriageElementSelectable(e);
    final movable = !marriage || _marriageElementMovable(e);
    final selected = selectable && _selectedElementId == e.id;
    final scale = cw / 960;
    final isDesign = e.fileName.startsWith('__design__') || e.id.startsWith('design_');
    final accentColor = isDesign ? const Color(0xFFF97316) : const Color(0xFF2563EB);
  final marriageField = marriage && ngmyMarriageElementIsField(e);
    return Positioned(
      key: ValueKey('el_${e.id}'),
      left: e.x * cw,
      top: e.y * ch,
      width: e.w * cw,
      height: e.h * ch,
      child: GestureDetector(
        onTap: () {
          if (signZone) {
            unawaited(_addMarriageSignatureAtZone(e));
            return;
          }
          if (selectable) _selectElement(e.id);
        },
        onDoubleTap: selectable && e.type == NgmySlideElementType.text
            ? () => _startTextEditing(e.id)
            : null,
        onPanUpdate: movable
            ? (d) {
                if (_editingTextId == e.id) return;
                setState(() {
                  e.x = (e.x + d.delta.dx / cw).clamp(-0.3, 1.2);
                  e.y = (e.y + d.delta.dy / ch).clamp(-0.3, 1.2);
                });
                _commitDraftIfNeeded();
                _syncDeckIntoList();
                _scheduleAutosave();
              }
            : null,
        child: Transform.rotate(
          angle: e.rotation,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              Container(
                decoration: BoxDecoration(
                  border: Border.all(
                    color: selected
                        ? (_editingTextId == e.id
                            ? const Color(0xFF22C55E)
                            : (marriageField ? const Color(0xFFB8860B) : accentColor))
                        : Colors.transparent,
                    width: selected ? 2 : 0,
                  ),
                  borderRadius: BorderRadius.circular(selected ? 6 : 0),
                  color: signZone
                      ? const Color(0xFFB8860B).withValues(alpha: 0.08)
                      : (e.type == NgmySlideElementType.signature ? Colors.transparent : null),
                ),
                child: signZone
                    ? Center(
                        child: Text(
                          'Tap to sign',
                          style: TextStyle(
                            fontSize: 10 * scale,
                            fontWeight: FontWeight.w700,
                            color: const Color(0xFFB8860B).withValues(alpha: 0.7),
                          ),
                        ),
                      )
                    : NgmySlideElementView(
                        element: e,
                        scale: scale,
                        editing: _editingTextId == e.id && !_isCompactLayout(context),
                        selected: selected,
                        compactText: marriageField,
                        controller: e.type == NgmySlideElementType.text ? _controllerFor(e) : null,
                        focusNode: e.type == NgmySlideElementType.text ? _focusNodeFor(e) : null,
                        onTextChanged: _editingTextId == e.id && !_isCompactLayout(context)
                            ? (v) => _updateElementText(e.id, v)
                            : null,
                        onTap: () {
                          if (!selectable) return;
                          if (_editingTextId == e.id) return;
                          _selectElement(e.id);
                        },
                        onDoubleTap: selectable && e.type == NgmySlideElementType.text
                            ? () => _startTextEditing(e.id)
                            : null,
                      ),
              ),
              if (selected && movable && _editingTextId != e.id)
                Positioned(
                  right: -4,
                  bottom: -4,
                  child: GestureDetector(
                    onPanUpdate: (d) {
                      setState(() {
                        e.w = (e.w + d.delta.dx / cw).clamp(0.04, 1.8);
                        e.h = (e.h + d.delta.dy / ch).clamp(0.04, 1.8);
                        if (e.type == NgmySlideElementType.text) {
                          e.fontSize = (e.fontSize + d.delta.dy * 0.15).clamp(10, 120);
                        }
                      });
                      _commitDraftIfNeeded();
                      _syncDeckIntoList();
                      _scheduleAutosave();
                    },
                    onScaleUpdate: (d) {
                      setState(() {
                        e.w = (e.w * d.scale).clamp(0.04, 1.8);
                        e.h = (e.h * d.scale).clamp(0.04, 1.8);
                        if (e.type == NgmySlideElementType.text) {
                          e.fontSize = (e.fontSize * d.scale).clamp(10, 120);
                        }
                      });
                      _commitDraftIfNeeded();
                      _syncDeckIntoList();
                      _scheduleAutosave();
                    },
                    child: Container(
                      width: 22,
                      height: 22,
                      decoration: BoxDecoration(
                        color: accentColor,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: Colors.white, width: 1.5),
                      ),
                      child: const Icon(Icons.open_in_full_rounded, size: 12, color: Colors.white),
                    ),
                  ),
                ),
              if (marriage && e.fileName == '${kMarriageLocked}_nim_n_4')
                Positioned(
                  right: -6,
                  top: -6,
                  child: GestureDetector(
                    onTap: _hideHatiNimetoweItem4,
                    child: Container(
                      width: 20,
                      height: 20,
                      decoration: BoxDecoration(
                        color: const Color(0xFF9CA3AF),
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 1.2),
                        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 4)],
                      ),
                      child: const Icon(Icons.close_rounded, size: 13, color: Colors.white),
                    ),
                  ),
                ),
              if (marriage && e.fileName.startsWith('${kMarriageFieldPrefix}tarehe:'))
                Positioned(
                  right: -6,
                  top: -6,
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        e.text = ngmyHatiKuhowaTodayDate();
                      });
                      _commitDraftIfNeeded();
                      _syncDeckIntoList();
                      _scheduleAutosave();
                    },
                    child: Container(
                      width: 20,
                      height: 20,
                      decoration: BoxDecoration(
                        color: const Color(0xFFB8860B),
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 1.2),
                        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 4)],
                      ),
                      child: const Icon(Icons.today_rounded, size: 12, color: Colors.white),
                    ),
                  ),
                ),
              if (selected && e.type == NgmySlideElementType.text && _editingTextId != e.id && _isCompactLayout(context))
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: -28,
                  child: Center(
                    child: GestureDetector(
                      onTap: () => _startTextEditing(e.id),
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: const Color(0xFF2563EB),
                          borderRadius: BorderRadius.circular(999),
                          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.2), blurRadius: 8)],
                        ),
                        child: const Text('Edit text', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
                      ),
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _colorScopeChip(String label, bool selected, bool isDark, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
          color: selected ? const Color(0xFF2563EB).withValues(alpha: 0.25) : (isDark ? Colors.white.withValues(alpha: 0.06) : Colors.black.withValues(alpha: 0.04)),
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: selected ? const Color(0xFF2563EB) : Colors.white12),
        ),
        child: Text(label, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: selected ? const Color(0xFF2563EB) : (isDark ? Colors.white54 : const Color(0xFF64748B)))),
      ),
    );
  }

  Widget _notesPanel(NgmySlide slide, bool isDark, {bool compact = false}) {
    if (_notesSlideId != slide.id) {
      _notesSlideId = slide.id;
      _notesControllers[slide.id]?.dispose();
      _notesControllers[slide.id] = TextEditingController(text: slide.notes);
    }
    final notesC = _notesControllers[slide.id]!;
    return Container(
      height: compact ? 96 : 96,
      padding: EdgeInsets.fromLTRB(12, compact ? 8 : 10, 12, compact ? 8 : 10),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC),
        borderRadius: compact ? const BorderRadius.vertical(top: Radius.circular(18)) : null,
        border: compact ? Border(top: BorderSide(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0))) : null,
        boxShadow: compact ? [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 16, offset: const Offset(0, -4))] : null,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Text('Speaker Notes', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: isDark ? Colors.white70 : const Color(0xFF475569))),
              const Spacer(),
              _panelDoneButton(onDone: () => setState(() => _showNotes = false), isDark: isDark),
            ],
          ),
          const SizedBox(height: 6),
          Expanded(
            child: TextField(
              controller: notesC,
              maxLines: compact ? 2 : 2,
              style: TextStyle(fontSize: compact ? 12 : 12, color: isDark ? Colors.white : const Color(0xFF334155)),
              decoration: InputDecoration(
                isDense: true,
                hintText: 'Speaker notes for this slide…',
                hintStyle: TextStyle(color: isDark ? Colors.white38 : const Color(0xFF94A3B8)),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
              ),
              onChanged: (v) => _updateSlideNotes(slide.id, v),
            ),
          ),
        ],
      ),
    );
  }

  Widget _formatPanel(bool isDark, {bool compact = false, bool embedded = false, VoidCallback? onLocalChanged}) {
    final el = _selectedElement();
    if (el == null) return const SizedBox.shrink();
    void apply(VoidCallback fn) {
      _mutate(fn);
      onLocalChanged?.call();
    }
    final colors = [
      0xFF111827, 0xFFFFFFFF, 0xFF2563EB, 0xFF059669, 0xFFDC2626,
      0xFF7C3AED, 0xFFEA580C, 0xFF334155,
    ];
    final maxW = (1.0 - el.x).clamp(0.06, 1.0);
    final maxH = (1.0 - el.y).clamp(0.06, 1.0);
    final maxX = (1.0 - el.w).clamp(0.01, 1.0);
    final maxY = (1.0 - el.h).clamp(0.01, 1.0);
    final body = ListView(
      physics: embedded ? const NeverScrollableScrollPhysics() : null,
      shrinkWrap: embedded,
      children: [
        if (!embedded)
          Row(
            children: [
              Text('Format', style: TextStyle(fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF0F172A))),
              const Spacer(),
              _panelDoneButton(onDone: _dismissFormatPanel, isDark: isDark),
            ],
          ),
        if (!embedded) const SizedBox(height: 10),
        Text('Size', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
        Row(
          children: [
            const Text('W', style: TextStyle(fontSize: 10)),
            Expanded(child: Slider(value: el.w.clamp(0.05, maxW), min: 0.05, max: maxW, onChanged: (v) => apply(() => el.w = v))),
          ],
        ),
        Row(
          children: [
            const Text('H', style: TextStyle(fontSize: 10)),
            Expanded(child: Slider(value: el.h.clamp(0.05, maxH), min: 0.05, max: maxH, onChanged: (v) => apply(() => el.h = v))),
          ],
        ),
        if (el.type == NgmySlideElementType.text)
          Row(
            children: [
              const Text('Font', style: TextStyle(fontSize: 10)),
              Expanded(child: Slider(value: el.fontSize.clamp(10, 96), min: 10, max: 96, onChanged: (v) => apply(() => el.fontSize = v))),
            ],
          ),
        if (el.type == NgmySlideElementType.image || el.type == NgmySlideElementType.signature || el.type == NgmySlideElementType.pdf) ...[
          Text('Crop / position', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
          Row(children: [const Text('X', style: TextStyle(fontSize: 10)), Expanded(child: Slider(value: el.x.clamp(0.0, maxX), min: 0, max: maxX, onChanged: (v) => apply(() => el.x = v)))]),
          Row(children: [const Text('Y', style: TextStyle(fontSize: 10)), Expanded(child: Slider(value: el.y.clamp(0.0, maxY), min: 0, max: maxY, onChanged: (v) => apply(() => el.y = v)))]),
        ],
        const SizedBox(height: 8),
        if (el.type == NgmySlideElementType.text) ...[
          Text('Text color', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
          const SizedBox(height: 6),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: colors.map((c) {
              return GestureDetector(
                onTap: () => apply(() => el.color = c),
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
            onSelectionChanged: (s) => apply(() => el.align = s.first),
          ),
        ],
        if (el.type == NgmySlideElementType.shape) ...[
          Text('Fill', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
          Wrap(
            spacing: 6,
            children: colors.map((c) => GestureDetector(
                  onTap: () => apply(() => el.fillColor = c),
                  child: Container(width: 22, height: 22, decoration: BoxDecoration(color: Color(c), shape: BoxShape.circle)),
                )).toList(),
          ),
        ],
        const SizedBox(height: 12),
        FilledButton.icon(
          onPressed: () {
            if (embedded && Navigator.of(context).canPop()) Navigator.of(context).pop();
            _deleteSelected();
          },
          icon: const Icon(Icons.delete_outline, size: 16),
          label: const Text('Delete element'),
          style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626)),
        ),
      ],
    );
    if (embedded) return body;
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 10, 12, 12),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1F2937) : Colors.white,
        borderRadius: compact ? const BorderRadius.vertical(top: Radius.circular(18)) : null,
        border: compact ? Border(top: BorderSide(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0))) : null,
        boxShadow: compact ? [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 16, offset: const Offset(0, -4))] : null,
      ),
      child: body,
    );
  }

  Widget _header({
    required String title,
    required String subtitle,
    required IconData icon,
    required Color accent,
    VoidCallback? onIconTap,
    VoidCallback? onTrailingTap,
  }) {
    const marriageAccent = Color(0xFFB8860B);
    return Row(
      children: [
        AnimatedBuilder(
          animation: _framePulse,
          builder: (context, _) {
            final t = Curves.easeInOut.transform(_framePulse.value);
            return Material(
              color: Colors.transparent,
              elevation: 0,
              shadowColor: Colors.transparent,
              child: InkWell(
                onTap: onIconTap,
                borderRadius: BorderRadius.circular(16),
                child: Ink(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        accent,
                        Color.lerp(accent, const Color(0xFF67E8F9), 0.35 + t * 0.15)!,
                      ],
                    ),
                    border: Border.all(color: Colors.white.withValues(alpha: 0.30 + t * 0.2), width: 1.2),
                  ),
                  child: SizedBox(
                    width: 48,
                    height: 48,
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        Icon(icon, color: Colors.white, size: 26),
                        if (onIconTap != null)
                          Positioned(
                            right: 2,
                            bottom: 2,
                            child: Container(
                              padding: const EdgeInsets.all(2),
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(6),
                                border: Border.all(color: accent, width: 1.2),
                              ),
                              child: Icon(Icons.sync_alt_rounded, size: 10, color: accent),
                            ),
                          ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
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
        if (onTrailingTap != null) ...[
          const SizedBox(width: 8),
          Transform.translate(
            offset: const Offset(0, -7),
            child: Tooltip(
              message: 'Documents (Hati)',
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: onTrailingTap,
                  customBorder: const CircleBorder(),
                  child: Ink(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: const LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [Color(0xFFE6C15C), Color(0xFFB8860B), Color(0xFF8B6914)],
                      ),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.55), width: 1.3),
                      boxShadow: [
                        BoxShadow(color: marriageAccent.withValues(alpha: 0.4), blurRadius: 8, offset: const Offset(0, 3)),
                      ],
                    ),
                    child: const SizedBox(
                      width: 38,
                      height: 38,
                      child: Icon(Icons.workspace_premium_rounded, color: Colors.white, size: 19),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ],
    );
  }

  Widget _actionCard({
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return AnimatedBuilder(
      animation: _framePulse,
      builder: (context, _) {
        final t = Curves.easeInOut.transform(_framePulse.value);
        return Material(
          color: Colors.transparent,
          elevation: 0,
          shadowColor: Colors.transparent,
          child: InkWell(
            onTap: onTap,
            borderRadius: BorderRadius.circular(22),
            child: Ink(
              width: double.infinity,
              padding: const EdgeInsets.fromLTRB(16, 18, 16, 18),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(22),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    color,
                    Color.lerp(color, const Color(0xFF67E8F9), 0.22 + t * 0.12)!,
                    color.withValues(alpha: 0.90),
                  ],
                ),
                border: Border.all(
                  color: Colors.white.withValues(alpha: 0.28 + t * 0.22),
                  width: 1.35,
                ),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Transform.scale(
                    scale: 1.0 + t * 0.06,
                    child: Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white.withValues(alpha: 0.14 + t * 0.08),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.40 + t * 0.15)),
                      ),
                      child: Icon(icon, color: Colors.white, size: 26),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    label,
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                  ),
                ],
              ),
            ),
          ),
        );
      },
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

class _DocumentCategoryTile extends StatelessWidget {
  const _DocumentCategoryTile({
    required this.icon,
    required this.colors,
    required this.title,
    required this.subtitle,
    required this.onTap,
  });

  final IconData icon;
  final List<Color> colors;
  final String title;
  final String subtitle;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white.withValues(alpha: 0.04),
      borderRadius: BorderRadius.circular(16),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          child: Row(
            children: [
              Container(
                width: 46,
                height: 46,
                decoration: BoxDecoration(
                  gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: colors),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.5), width: 1.2),
                ),
                child: Icon(icon, color: Colors.white, size: 22),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                    const SizedBox(height: 2),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.4)),
            ],
          ),
        ),
      ),
    );
  }
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
    final seconds = widget.deck.durationForSlide(_index).clamp(1, 120);
    _autoTimer = Timer(Duration(seconds: seconds), () {
      if (!mounted || !_autoPlaying) return;
      if (_index < widget.deck.slides.length - 1) {
        _next();
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

  Widget _slideshowSwitcher(Widget slideContent) {
    if (_lastTransition == NgmySlideTransition.none) {
      return KeyedSubtree(key: ValueKey(_index), child: slideContent);
    }
    final duration = _slideshowTransitionDuration(_lastTransition);
    return AnimatedSwitcher(
      duration: duration,
      layoutBuilder: (currentChild, previousChildren) => Stack(
        fit: StackFit.expand,
        alignment: Alignment.center,
        children: [
          ...previousChildren,
          if (currentChild != null) currentChild,
        ],
      ),
      transitionBuilder: (child, animation) {
        if (animation.status == AnimationStatus.reverse) {
          return FadeTransition(opacity: animation, child: child);
        }
        return _slideshowIncomingTransition(_lastTransition, child, animation);
      },
      child: KeyedSubtree(key: ValueKey(_index), child: slideContent),
    );
  }

  Duration _slideshowTransitionDuration(NgmySlideTransition tr) {
    switch (tr) {
      case NgmySlideTransition.flip:
      case NgmySlideTransition.flipVertical:
      case NgmySlideTransition.rotate3d:
      case NgmySlideTransition.cube:
      case NgmySlideTransition.spiral:
        return const Duration(milliseconds: 550);
      case NgmySlideTransition.bounce:
        return const Duration(milliseconds: 500);
      case NgmySlideTransition.flash:
        return const Duration(milliseconds: 350);
      default:
        return const Duration(milliseconds: 450);
    }
  }

  Widget _slideshowIncomingTransition(NgmySlideTransition tr, Widget child, Animation<double> animation) {
    final curved = CurvedAnimation(parent: animation, curve: Curves.easeOutCubic);
    switch (tr) {
      case NgmySlideTransition.none:
        return child;
      case NgmySlideTransition.fade:
      case NgmySlideTransition.dissolve:
      case NgmySlideTransition.flash:
        return FadeTransition(opacity: curved, child: child);
      case NgmySlideTransition.slideLeft:
      case NgmySlideTransition.push:
        return SlideTransition(position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(curved), child: child);
      case NgmySlideTransition.slideRight:
        return SlideTransition(position: Tween<Offset>(begin: const Offset(-1, 0), end: Offset.zero).animate(curved), child: child);
      case NgmySlideTransition.slideUp:
      case NgmySlideTransition.curtain:
        return SlideTransition(position: Tween<Offset>(begin: const Offset(0, 1), end: Offset.zero).animate(curved), child: child);
      case NgmySlideTransition.slideDown:
        return SlideTransition(position: Tween<Offset>(begin: const Offset(0, -1), end: Offset.zero).animate(curved), child: child);
      case NgmySlideTransition.zoom:
      case NgmySlideTransition.bounce:
        return ScaleTransition(scale: Tween<double>(begin: 0.82, end: 1).animate(curved), child: FadeTransition(opacity: curved, child: child));
      case NgmySlideTransition.zoomOut:
        return ScaleTransition(scale: Tween<double>(begin: 1.18, end: 1).animate(curved), child: FadeTransition(opacity: curved, child: child));
      case NgmySlideTransition.flip:
        return AnimatedBuilder(
          animation: curved,
          child: child,
          builder: (_, c) => Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateY((1 - curved.value) * 1.5708),
            child: Opacity(opacity: curved.value, child: c),
          ),
        );
      case NgmySlideTransition.flipVertical:
        return AnimatedBuilder(
          animation: curved,
          child: child,
          builder: (_, c) => Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateX((1 - curved.value) * 1.5708),
            child: Opacity(opacity: curved.value, child: c),
          ),
        );
      case NgmySlideTransition.rotate3d:
        return AnimatedBuilder(
          animation: curved,
          child: child,
          builder: (_, c) => Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.002)
              ..rotateY(curved.value * 0.8)
              ..rotateX(curved.value * 0.35),
            child: Opacity(opacity: curved.value, child: c),
          ),
        );
      case NgmySlideTransition.cube:
        return AnimatedBuilder(
          animation: curved,
          child: child,
          builder: (_, c) => Transform(
            alignment: Alignment.centerRight,
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.0025)
              ..rotateY(-curved.value * 1.2),
            child: Opacity(opacity: curved.value, child: c),
          ),
        );
      case NgmySlideTransition.blur:
        return FadeTransition(opacity: curved, child: ScaleTransition(scale: Tween<double>(begin: 1.03, end: 1).animate(curved), child: child));
      case NgmySlideTransition.wipeLeft:
        return ClipRect(
          clipper: _SlideWipeClipper(curved.value),
          child: SlideTransition(position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(curved), child: child),
        );
      case NgmySlideTransition.wipeRight:
        return SlideTransition(position: Tween<Offset>(begin: const Offset(-1, 0), end: Offset.zero).animate(curved), child: child);
      case NgmySlideTransition.spiral:
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()..rotateZ((1 - curved.value) * 2)..scale(curved.value, curved.value),
          child: Opacity(opacity: curved.value, child: child),
        );
      case NgmySlideTransition.swing:
        return Transform.rotate(angle: (1 - curved.value) * 0.2, child: FadeTransition(opacity: curved, child: child));
    }
  }

  @override
  Widget build(BuildContext context) {
    final slide = widget.deck.slides[_index];
    final slideContent = ColoredBox(
      color: Color(slide.background),
      child: SizedBox.expand(child: NgmySlideAnimatedRender(slide: slide, animate: true)),
    );
    final body = _slideshowSwitcher(slideContent);

    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      body: GestureDetector(
        onTapUp: (d) {
          final w = MediaQuery.sizeOf(context).width;
          if (d.localPosition.dx > w * 0.55) _next();
          else _prev();
        },
        child: Stack(
          fit: StackFit.expand,
          children: [
            Center(
              child: AspectRatio(
                aspectRatio: widget.deck.aspectValue,
                child: ClipRect(
                  child: InteractiveViewer(minScale: 1, maxScale: 4, child: body),
                ),
              ),
            ),
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

class _SlideWipeClipper extends CustomClipper<Rect> {
  _SlideWipeClipper(this.progress);
  final double progress;

  @override
  Rect getClip(Size size) => Rect.fromLTWH(0, 0, size.width * progress.clamp(0, 1), size.height);

  @override
  bool shouldReclip(covariant _SlideWipeClipper oldClipper) => oldClipper.progress != progress;
}
