import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_voice_input.dart';

/// "Describe it and the AI makes it": speak (or type) what the presentation is
/// about, pick how many slides and a look, and get a finished, colourful deck.

/// A look the presentation can have — colours, decorations and motion.
class NgmySlidesAiStyle {
  const NgmySlidesAiStyle({
    required this.id,
    required this.label,
    required this.icon,
    required this.backgrounds,
    required this.text,
    required this.muted,
    required this.accents,
    this.transition = NgmySlideTransition.fade,
  });

  final String id;
  final String label;
  final IconData icon;

  /// Gradient pairs, used in turn slide by slide.
  final List<(int, int)> backgrounds;
  final int text;
  final int muted;
  final List<int> accents;
  final NgmySlideTransition transition;
}

const kNgmySlidesAiStyles = <NgmySlidesAiStyle>[
  NgmySlidesAiStyle(
    id: 'colorful',
    label: 'Colorful',
    icon: Icons.palette_rounded,
    backgrounds: [(0xFF7C3AED, 0xFFDB2777), (0xFF2563EB, 0xFF06B6D4), (0xFFF97316, 0xFFE11D48), (0xFF059669, 0xFF2563EB)],
    text: 0xFFFFFFFF,
    muted: 0xE6FFFFFF,
    accents: [0xFFFACC15, 0xFF22D3EE, 0xFFF472B6],
    transition: NgmySlideTransition.zoom,
  ),
  NgmySlidesAiStyle(
    id: 'nature',
    label: 'Nature',
    icon: Icons.forest_rounded,
    backgrounds: [(0xFF14532D, 0xFF166534), (0xFF365314, 0xFF4D7C0F), (0xFF064E3B, 0xFF0F766E), (0xFF3F6212, 0xFF15803D)],
    text: 0xFFF7FEE7,
    muted: 0xE6ECFCCB,
    accents: [0xFFA3E635, 0xFFFDE68A, 0xFF86EFAC],
    transition: NgmySlideTransition.fade,
  ),
  NgmySlidesAiStyle(
    id: 'vibe',
    label: 'Vibe',
    icon: Icons.graphic_eq_rounded,
    backgrounds: [(0xFF12002B, 0xFF4C1D95), (0xFF0F172A, 0xFF7E22CE), (0xFF1E1B4B, 0xFFBE185D), (0xFF020617, 0xFF6D28D9)],
    text: 0xFFFFFFFF,
    muted: 0xE6F5D0FE,
    accents: [0xFFF472B6, 0xFF22D3EE, 0xFFA78BFA],
    transition: NgmySlideTransition.slideLeft,
  ),
  NgmySlidesAiStyle(
    id: 'celebration',
    label: 'Celebration',
    icon: Icons.celebration_rounded,
    backgrounds: [(0xFFB45309, 0xFFDB2777), (0xFF7C2D12, 0xFFF59E0B), (0xFF9D174D, 0xFFF97316), (0xFF6D28D9, 0xFFEC4899)],
    text: 0xFFFFFFFF,
    muted: 0xEEFFF7ED,
    accents: [0xFFFDE68A, 0xFFFFFFFF, 0xFF67E8F9],
    transition: NgmySlideTransition.bounce,
  ),
  NgmySlidesAiStyle(
    id: 'professional',
    label: 'Professional',
    icon: Icons.business_center_rounded,
    backgrounds: [(0xFF0F172A, 0xFF1E3A8A), (0xFF111827, 0xFF1F2937), (0xFF0B1437, 0xFF1E40AF), (0xFF0F172A, 0xFF334155)],
    text: 0xFFFFFFFF,
    muted: 0xE6CBD5E1,
    accents: [0xFF38BDF8, 0xFFFACC15, 0xFF94A3B8],
    transition: NgmySlideTransition.push,
  ),
  NgmySlidesAiStyle(
    id: 'ocean',
    label: 'Ocean',
    icon: Icons.water_rounded,
    backgrounds: [(0xFF0C4A6E, 0xFF0369A1), (0xFF083344, 0xFF0E7490), (0xFF1E3A8A, 0xFF0891B2), (0xFF0C4A6E, 0xFF155E75)],
    text: 0xFFFFFFFF,
    muted: 0xE6E0F2FE,
    accents: [0xFF7DD3FC, 0xFF5EEAD4, 0xFFFDE68A],
    transition: NgmySlideTransition.slideUp,
  ),
  NgmySlidesAiStyle(
    id: 'sunset',
    label: 'Sunset',
    icon: Icons.wb_twilight_rounded,
    backgrounds: [(0xFF7C2D12, 0xFFF97316), (0xFF831843, 0xFFFB923C), (0xFF4C1D95, 0xFFF43F5E), (0xFF9A3412, 0xFFFBBF24)],
    text: 0xFFFFFFFF,
    muted: 0xEEFFEDD5,
    accents: [0xFFFDE68A, 0xFFFFFFFF, 0xFFFCA5A5],
    transition: NgmySlideTransition.fade,
  ),
  NgmySlidesAiStyle(
    id: 'minimal',
    label: 'Minimal',
    icon: Icons.crop_square_rounded,
    backgrounds: [(0xFFFFFFFF, 0xFFF1F5F9), (0xFFF8FAFC, 0xFFFFFFFF), (0xFFFFFFFF, 0xFFE2E8F0), (0xFFF8FAFC, 0xFFF1F5F9)],
    text: 0xFF0F172A,
    muted: 0xFF475569,
    accents: [0xFF2563EB, 0xFF0F172A, 0xFF94A3B8],
    transition: NgmySlideTransition.fade,
  ),
  NgmySlidesAiStyle(
    id: 'elegant',
    label: 'Elegant',
    icon: Icons.diamond_rounded,
    backgrounds: [(0xFF0C0A09, 0xFF292524), (0xFF1C1917, 0xFF0C0A09), (0xFF111111, 0xFF2D2416), (0xFF0C0A09, 0xFF1C1917)],
    text: 0xFFFEF3C7,
    muted: 0xE6E7E5E4,
    accents: [0xFFD4AF37, 0xFFFDE68A, 0xFFA8A29E],
    transition: NgmySlideTransition.dissolve,
  ),
];

NgmySlidesAiStyle ngmySlidesAiStyleById(String id) =>
    kNgmySlidesAiStyles.firstWhere((s) => s.id == id.trim().toLowerCase(), orElse: () => kNgmySlidesAiStyles.first);

/// One slide as the AI outlines it.
class NgmySlidesAiOutlineSlide {
  NgmySlidesAiOutlineSlide({required this.kind, required this.title, this.subtitle = '', this.bullets = const [], this.notes = ''});
  final String kind; // title, bullets, section, quote, closing
  final String title;
  final String subtitle;
  final List<String> bullets;
  final String notes;
}

class NgmySlidesAiOutline {
  NgmySlidesAiOutline({required this.title, required this.style, required this.slides});
  final String title;
  final String style;
  final List<NgmySlidesAiOutlineSlide> slides;
}

String ngmySlidesAiPrompt({required String description, required int slideCount, required String styleId}) {
  final styles = kNgmySlidesAiStyles.map((s) => s.id).join(', ');
  return '''
You design presentation slides. Write a presentation from the user's request.

USER REQUEST (spoken, may be informal):
"""$description"""

Rules:
- Exactly $slideCount slides.
- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).
- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.
- Titles are short and punchy (max 7 words). Use the user's own names, facts and details; never invent prices, dates or statistics they did not give.
- "notes": 1-2 sentences the presenter can say.
- "style": ${styleId == 'auto' ? 'pick the best of: $styles (match the mood they describe: nature, vibe, celebration, colorful, professional...)' : 'use "$styleId"'}.
- Reply with JSON only, no markdown, in this shape:
{"title":"...","style":"...","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"..."}]}
''';
}

/// Reads the AI's JSON (tolerates code fences and stray text around it).
NgmySlidesAiOutline? ngmyParseSlidesAiOutline(String raw, {required String fallbackStyle}) {
  var s = raw.trim();
  final start = s.indexOf('{');
  final end = s.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  s = s.substring(start, end + 1);
  try {
    final m = jsonDecode(s);
    if (m is! Map) return null;
    final slidesRaw = m['slides'];
    if (slidesRaw is! List || slidesRaw.isEmpty) return null;
    final slides = <NgmySlidesAiOutlineSlide>[];
    for (final e in slidesRaw) {
      if (e is! Map) continue;
      final bullets = (e['bullets'] is List) ? (e['bullets'] as List).map((b) => '$b'.trim()).where((b) => b.isNotEmpty).toList() : <String>[];
      slides.add(NgmySlidesAiOutlineSlide(
        kind: '${e['kind'] ?? 'bullets'}'.trim().toLowerCase(),
        title: '${e['title'] ?? ''}'.trim(),
        subtitle: '${e['subtitle'] ?? ''}'.trim(),
        bullets: bullets,
        notes: '${e['notes'] ?? ''}'.trim(),
      ));
    }
    if (slides.isEmpty) return null;
    final style = '${m['style'] ?? fallbackStyle}'.trim().toLowerCase();
    return NgmySlidesAiOutline(
      title: '${m['title'] ?? slides.first.title}'.trim(),
      style: kNgmySlidesAiStyles.any((x) => x.id == style) ? style : fallbackStyle,
      slides: slides,
    );
  } catch (_) {
    return null;
  }
}

int _withAlpha(int argb, int alpha) => (alpha.clamp(0, 255) << 24) | (argb & 0x00FFFFFF);

/// Turns an outline into real slides with the style's colours and decorations.
NgmySlideDeck ngmyBuildSlidesAiDeck(NgmySlidesAiOutline outline) {
  final st = ngmySlidesAiStyleById(outline.style);
  String id() => NgmySlidesTemplates.newId();
  final slides = <NgmySlide>[];

  NgmySlideElement text(String t, double x, double y, double w, double h, double size,
      {FontWeight weight = FontWeight.w600, int? color, TextAlign align = TextAlign.left, bool bullets = false, FontStyle style = FontStyle.normal, int delay = 0}) {
    return NgmySlideElement(
      id: id(),
      type: NgmySlideElementType.text,
      x: x,
      y: y,
      w: w,
      h: h,
      text: t,
      fontSize: size,
      fontWeight: weight,
      fontStyle: style,
      color: color ?? st.text,
      align: align,
      bulletList: bullets,
      textTransition: delay > 0 ? NgmySlideTransition.fade : NgmySlideTransition.none,
      textAnimDelayMs: delay,
    );
  }

  NgmySlideElement shape(NgmySlideShapeKind kind, double x, double y, double w, double h, int fill, {double rotation = 0}) {
    return NgmySlideElement(
      id: id(),
      type: NgmySlideElementType.shape,
      x: x,
      y: y,
      w: w,
      h: h,
      shape: kind,
      fillColor: fill,
      strokeColor: fill,
      strokeWidth: 0,
      rotation: rotation,
    );
  }

  for (var i = 0; i < outline.slides.length; i++) {
    final o = outline.slides[i];
    final (bg, bgEnd) = st.backgrounds[i % st.backgrounds.length];
    final a1 = st.accents[i % st.accents.length];
    final a2 = st.accents[(i + 1) % st.accents.length];
    final els = <NgmySlideElement>[];
    var layout = NgmySlideLayout.titleContent;

    switch (o.kind) {
      case 'title':
        layout = NgmySlideLayout.title;
        els
          ..add(shape(NgmySlideShapeKind.circle, 0.70, -0.25, 0.46, 0.82, _withAlpha(a1, 0x33)))
          ..add(shape(NgmySlideShapeKind.circle, -0.08, 0.68, 0.24, 0.43, _withAlpha(a2, 0x2E)))
          ..add(shape(NgmySlideShapeKind.rectangle, 0.40, 0.62, 0.20, 0.012, a1))
          ..add(text(o.title, 0.08, 0.28, 0.84, 0.30, 56, weight: FontWeight.w900, align: TextAlign.center))
          ..add(text(o.subtitle, 0.12, 0.66, 0.76, 0.14, 24, color: st.muted, align: TextAlign.center, delay: 300));
      case 'section':
        layout = NgmySlideLayout.section;
        els
          ..add(shape(NgmySlideShapeKind.hexagon, 0.78, 0.10, 0.18, 0.32, _withAlpha(a1, 0x40), rotation: 0.3))
          ..add(shape(NgmySlideShapeKind.rectangle, 0.08, 0.60, 0.14, 0.014, a1))
          ..add(text(o.title, 0.08, 0.34, 0.74, 0.24, 48, weight: FontWeight.w900))
          ..add(text(o.subtitle, 0.08, 0.64, 0.70, 0.14, 22, color: st.muted, delay: 250));
      case 'quote':
        els
          ..add(text('“', 0.06, 0.02, 0.2, 0.36, 140, weight: FontWeight.w900, color: _withAlpha(a1, 0xCC)))
          ..add(text(o.title, 0.12, 0.30, 0.76, 0.34, 36, weight: FontWeight.w700, style: FontStyle.italic, align: TextAlign.center))
          ..add(text(o.subtitle.isEmpty ? '' : '— ${o.subtitle}', 0.12, 0.68, 0.76, 0.12, 22, color: st.muted, align: TextAlign.center, delay: 300))
          ..add(shape(NgmySlideShapeKind.circle, 0.82, 0.66, 0.26, 0.46, _withAlpha(a2, 0x26)));
      case 'closing':
        layout = NgmySlideLayout.title;
        els
          ..add(shape(NgmySlideShapeKind.circle, -0.15, -0.30, 0.50, 0.90, _withAlpha(a1, 0x2E)))
          ..add(shape(NgmySlideShapeKind.circle, 0.78, 0.62, 0.30, 0.54, _withAlpha(a2, 0x33)))
          ..add(text(o.title, 0.10, 0.30, 0.80, 0.26, 54, weight: FontWeight.w900, align: TextAlign.center))
          ..add(text(o.subtitle, 0.14, 0.60, 0.72, 0.16, 24, color: st.muted, align: TextAlign.center, delay: 300));
      default:
        final points = o.bullets.isEmpty && o.subtitle.isNotEmpty ? [o.subtitle] : o.bullets;
        els
          ..add(shape(NgmySlideShapeKind.circle, 0.80, 0.52, 0.30, 0.54, _withAlpha(a2, 0x24)))
          ..add(shape(NgmySlideShapeKind.rectangle, 0.0, 0.0, 0.012, 1.0, a1))
          ..add(text(o.title, 0.07, 0.08, 0.86, 0.16, 38, weight: FontWeight.w900))
          ..add(shape(NgmySlideShapeKind.rectangle, 0.07, 0.25, 0.12, 0.012, a1))
          ..add(text(points.join('\n'), 0.07, 0.31, 0.70, 0.60, points.length > 4 ? 22 : 25, color: st.muted, bullets: true, delay: 250));
    }

    slides.add(NgmySlide(
      id: id(),
      title: o.title,
      notes: o.notes,
      layout: layout,
      background: bg,
      backgroundEnd: bgEnd,
      transition: st.transition,
      elements: els,
    ));
  }

  final name = outline.title.trim().isEmpty ? 'AI Presentation' : outline.title.trim();
  return NgmySlideDeck(id: id(), name: name.length > 60 ? name.substring(0, 60) : name, slides: slides);
}

/// Asks the AI for the outline and builds the deck. Throws a readable message on failure.
Future<NgmySlideDeck> ngmyCreateSlidesWithAi({required String description, required int slideCount, required String styleId}) async {
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not set up yet. Ask the admin to turn on AI.';
  final creds = ngmyParseAiCredentials(key);
  final prompt = ngmySlidesAiPrompt(description: description, slideCount: slideCount, styleId: styleId);
  NgmySlidesAiOutline? outline;
  String? lastError;
  for (var attempt = 0; attempt < 2 && outline == null; attempt++) {
    final r = await ngmyAiGenerateWithCredentials(creds, prompt);
    if (r.text != null) {
      outline = ngmyParseSlidesAiOutline(r.text!, fallbackStyle: styleId == 'auto' ? 'colorful' : styleId);
    } else {
      lastError = r.error;
    }
  }
  if (outline == null) {
    throw lastError != null && ngmyIsOfflineOrNetworkError(lastError)
        ? 'No internet connection — try again when you are online.'
        : 'The AI could not write the slides. Try describing it again.';
  }
  return ngmyBuildSlidesAiDeck(outline);
}

/// The "describe it" sheet. Returns the finished deck, or null if closed.
Future<NgmySlideDeck?> showNgmySlidesAiMaker(BuildContext context, {bool startListening = true}) {
  return showModalBottomSheet<NgmySlideDeck>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _SlidesAiMakerSheet(startListening: startListening),
  );
}

class _SlidesAiMakerSheet extends StatefulWidget {
  const _SlidesAiMakerSheet({required this.startListening});
  final bool startListening;
  @override
  State<_SlidesAiMakerSheet> createState() => _SlidesAiMakerSheetState();
}

class _SlidesAiMakerSheetState extends State<_SlidesAiMakerSheet> with SingleTickerProviderStateMixin {
  final _desc = TextEditingController();
  late final AnimationController _pulse;
  bool _listening = false;
  bool _busy = false;
  String _before = '';
  int _count = 7;
  String _style = 'auto';
  String? _error;

  static const _counts = [3, 5, 7, 10, 12, 15];

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1100));
    if (widget.startListening) WidgetsBinding.instance.addPostFrameCallback((_) => _toggleMic());
  }

  @override
  void dispose() {
    unawaited(NgmyVoiceInput.stop());
    _pulse.dispose();
    _desc.dispose();
    super.dispose();
  }

  Future<void> _toggleMic() async {
    if (_listening) {
      await NgmyVoiceInput.stop();
      if (mounted) setState(() => _listening = false);
      _pulse.stop();
      return;
    }
    HapticFeedback.mediumImpact();
    _before = _desc.text.trim();
    setState(() {
      _listening = true;
      _error = null;
    });
    _pulse.repeat(reverse: true);
    final ok = await NgmyVoiceInput.listen(onText: (t, {bool isFinal = false}) {
      if (!mounted) return;
      final joined = [_before, t.trim()].where((s) => s.isNotEmpty).join(' ');
      _desc.value = TextEditingValue(text: joined, selection: TextSelection.collapsed(offset: joined.length));
      if (isFinal) {
        _before = joined;
      }
    });
    if (!ok && mounted) {
      _pulse.stop();
      setState(() {
        _listening = false;
        _error = 'The microphone could not start. Allow microphone access, or type your idea below.';
      });
    }
  }

  Future<void> _create() async {
    final d = _desc.text.trim();
    if (d.length < 6) {
      setState(() => _error = 'Tell me a little about the presentation first.');
      return;
    }
    if (_listening) await _toggleMic();
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final deck = await ngmyCreateSlidesWithAi(description: d, slideCount: _count, styleId: _style);
      if (mounted) Navigator.of(context).pop(deck);
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = '$e';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    const panel = Color(0xFF111827);
    const accent = Color(0xFF8B5CF6);
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Padding(
      padding: EdgeInsets.only(bottom: bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92, maxWidth: 640),
        decoration: const BoxDecoration(
          color: panel,
          borderRadius: BorderRadius.vertical(top: Radius.circular(26)),
        ),
        child: SafeArea(
          top: false,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)))),
                const SizedBox(height: 14),
                const Row(
                  children: [
                    Icon(Icons.auto_awesome_rounded, color: Color(0xFFC4B5FD)),
                    SizedBox(width: 8),
                    Expanded(child: Text('Create with AI', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20))),
                  ],
                ),
                const SizedBox(height: 4),
                const Text(
                  'Tap the mic and describe it: what it\'s about, who it\'s for, the mood (nature, vibe, celebration…) and anything it must say.',
                  style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.35),
                ),
                const SizedBox(height: 18),
                Center(
                  child: GestureDetector(
                    onTap: _busy ? null : _toggleMic,
                    child: AnimatedBuilder(
                      animation: _pulse,
                      builder: (_, child) {
                        final p = _listening ? _pulse.value : 0.0;
                        return Container(
                          width: 92,
                          height: 92,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(
                              colors: _listening ? const [Color(0xFFEF4444), Color(0xFFDB2777)] : const [accent, Color(0xFF6366F1)],
                            ),
                            boxShadow: [
                              BoxShadow(
                                color: (_listening ? const Color(0xFFEF4444) : accent).withValues(alpha: 0.45),
                                blurRadius: 18 + p * 22,
                                spreadRadius: p * 8,
                              ),
                            ],
                          ),
                          child: child,
                        );
                      },
                      child: Icon(_listening ? Icons.stop_rounded : Icons.mic_rounded, color: Colors.white, size: 42),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  _listening ? 'Listening… tap to stop' : 'Tap to speak',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: _listening ? const Color(0xFFFCA5A5) : Colors.white54, fontWeight: FontWeight.w700, fontSize: 12),
                ),
                const SizedBox(height: 14),
                TextField(
                  controller: _desc,
                  minLines: 3,
                  maxLines: 6,
                  style: const TextStyle(color: Colors.white, height: 1.35),
                  decoration: InputDecoration(
                    hintText: 'e.g. A presentation about NGMY for next Saturday — what the app does, Civic Registry, how to join. Make it feel like a celebration.',
                    hintStyle: const TextStyle(color: Colors.white38, fontSize: 13),
                    filled: true,
                    fillColor: Colors.white.withValues(alpha: 0.05),
                    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1))),
                    focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: accent)),
                  ),
                ),
                const SizedBox(height: 18),
                const Text('How many slides?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                const SizedBox(height: 8),
                Row(
                  children: [
                    for (final c in _counts)
                      Expanded(
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 3),
                          child: GestureDetector(
                            onTap: () => setState(() => _count = c),
                            child: AnimatedContainer(
                              duration: const Duration(milliseconds: 180),
                              height: 42,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: _count == c ? accent : Colors.white.withValues(alpha: 0.06),
                                border: Border.all(color: _count == c ? Colors.white54 : Colors.white12),
                              ),
                              child: Text('$c', style: TextStyle(color: Colors.white, fontWeight: _count == c ? FontWeight.w900 : FontWeight.w700)),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
                const SizedBox(height: 18),
                const Text('Look & feel', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    _styleChip('auto', 'Let AI choose', Icons.auto_awesome_rounded, const [Color(0xFF8B5CF6), Color(0xFF22D3EE)]),
                    for (final s in kNgmySlidesAiStyles)
                      _styleChip(s.id, s.label, s.icon, [Color(s.backgrounds.first.$1), Color(s.backgrounds.first.$2)]),
                  ],
                ),
                if (_error != null) ...[
                  const SizedBox(height: 14),
                  Text(_error!, style: const TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w700, fontSize: 12.5)),
                ],
                const SizedBox(height: 18),
                SizedBox(
                  height: 54,
                  child: ElevatedButton.icon(
                    onPressed: _busy ? null : _create,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: accent,
                      foregroundColor: Colors.white,
                      disabledBackgroundColor: accent.withValues(alpha: 0.5),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
                    ),
                    icon: _busy
                        ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white))
                        : const Icon(Icons.auto_awesome_rounded),
                    label: Text(
                      _busy ? 'Designing your $_count slides…' : 'Create my presentation',
                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _styleChip(String id, String label, IconData icon, List<Color> colors) {
    final selected = _style == id;
    return GestureDetector(
      onTap: () => setState(() => _style = id),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.fromLTRB(6, 6, 12, 6),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(99),
          color: selected ? Colors.white.withValues(alpha: 0.12) : Colors.white.withValues(alpha: 0.04),
          border: Border.all(color: selected ? Colors.white70 : Colors.white12, width: selected ? 1.6 : 1),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 26,
              height: 26,
              decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: colors)),
              child: Icon(icon, size: 14, color: Colors.white),
            ),
            const SizedBox(width: 7),
            Text(label, style: TextStyle(color: Colors.white, fontWeight: selected ? FontWeight.w900 : FontWeight.w600, fontSize: 12.5)),
          ],
        ),
      ),
    );
  }
}

