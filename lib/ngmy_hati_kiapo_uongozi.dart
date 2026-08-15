import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_marriage_paper_art.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';
import 'ngmy_slides_marriage_agreement.dart';
import 'ngmy_slides_models.dart';

const String kNgmyHatiKiapoUongoziDeckKind = 'hati_kiapo_uongozi';
const String kNgmyHatiKiapoSettingsKey = 'civic_hati_kiapo_uongozi';
const String _kNgmyHatiKiapoPrefsKey = 'ngmy_civic_hati_kiapo_uongozi_v1';

/// Image element that holds the president's oath video (registrar-only upload).
const String kKiapoVideoFileName = '__kiapo_video__';

const int _softLine = 0xFFE2D8C8;

const String kNgmyHatiKiapoBodyP1 =
    'Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, '
    'ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, '
    'amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja '
    'kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu.';

const String kNgmyHatiKiapoBodyP2 =
    'Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa '
    'uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama '
    'yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, '
    'nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea.';

const String kNgmyHatiKiapoBodyP3 =
    'Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote '
    'wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa '
    'maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka '
    'mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi.';

bool ngmyIsHatiKiapoUongoziDeck(String? deckKind) =>
    deckKind == kNgmyHatiKiapoUongoziDeckKind;

bool ngmyKiapoElementIsVideoZone(NgmySlideElement e) =>
    e.fileName == kKiapoVideoFileName || e.fileName.startsWith('${kKiapoVideoFileName}_');

bool ngmyKiapoHasVideo(NgmySlideElement e) {
  final ref = (e.imageRef ?? '').trim();
  return ngmyKiapoElementIsVideoZone(e) && ref.isNotEmpty;
}

// ── Shared civic store (one oath document per state) ─────────────────────────

class NgmyHatiKiapoStore {
  NgmyHatiKiapoStore._();

  static Map<String, NgmySlideDeck> _byState = {};
  static bool _loaded = false;

  static String _stateKey(String state) => state.trim().toLowerCase();

  static Future<void> load({bool forceCloud = false}) async {
    if (_loaded && !forceCloud) return;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kNgmyHatiKiapoPrefsKey);
      if (raw != null && raw.trim().isNotEmpty) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          _byState = {
            for (final e in decoded.entries)
              if (e.value is Map)
                e.key.toString(): NgmySlideDeck.fromJson(Map<String, dynamic>.from(e.value as Map)),
          };
        }
      }
    } catch (e) {
      debugPrint('[kiapo] local load: $e');
    }
    if (forceCloud || await ngmyCanReachCloud()) {
      try {
        final row = await ngmyFetchSettingsValueViaRest(kNgmyHatiKiapoSettingsKey);
        if (row != null && row['byState'] is Map) {
          final remote = <String, NgmySlideDeck>{};
          for (final e in (row['byState'] as Map).entries) {
            if (e.value is! Map) continue;
            remote[e.key.toString()] = NgmySlideDeck.fromJson(Map<String, dynamic>.from(e.value as Map));
          }
          for (final e in remote.entries) {
            final local = _byState[e.key];
            if (local == null || !e.value.updatedAt.isBefore(local.updatedAt)) {
              _byState[e.key] = e.value;
            }
          }
          await _saveLocal();
        }
      } catch (e) {
        debugPrint('[kiapo] cloud load: $e');
      }
    }
    _loaded = true;
  }

  static Future<void> _saveLocal() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _kNgmyHatiKiapoPrefsKey,
        jsonEncode({for (final e in _byState.entries) e.key: e.value.toJson()}),
      );
    } catch (e) {
      debugPrint('[kiapo] local save: $e');
    }
  }

  static Future<NgmySlideDeck?> loadForState(String state) async {
    await load();
    final key = _stateKey(state);
    if (key.isEmpty) return null;
    return _byState[key]?.copy();
  }

  static Future<bool> save(NgmySlideDeck deck) async {
    final state = (deck.marriageState ?? '').trim();
    final key = _stateKey(state);
    if (key.isEmpty) return false;
    deck.deckKind = kNgmyHatiKiapoUongoziDeckKind;
    deck.updatedAt = DateTime.now();
    _byState[key] = deck.copy();
    _loaded = true;
    await _saveLocal();
    if (!await ngmyCanReachCloud()) return false;
    try {
      return await ngmyUpsertSettingsRowReliable(kNgmyHatiKiapoSettingsKey, {
        'byState': {for (final e in _byState.entries) e.key: e.value.toJson()},
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      });
    } catch (e) {
      debugPrint('[kiapo] cloud save: $e');
      return false;
    }
  }

  static Future<String?> pickAndUploadOathVideo({required String state}) async {
    final picked = await ImagePicker().pickVideo(source: ImageSource.gallery);
    if (picked == null) return null;
    final bytes = await picked.readAsBytes();
    if (bytes.isEmpty) return null;
    final cloud = await _uploadVideoBytes(state: state, bytes: bytes);
    if (cloud != null) return cloud;
    // Fallback for offline — keep under ~4MB to avoid blowing prefs.
    if (bytes.length > 4 * 1024 * 1024) return null;
    return 'data:video/mp4;base64,${base64Encode(bytes)}';
  }

  static Future<String?> _uploadVideoBytes({
    required String state,
    required List<int> bytes,
  }) async {
    try {
      if (!await ngmyCanReachCloud()) return null;
      final safe = _stateKey(state).replaceAll(RegExp(r'[^a-z0-9]+'), '_');
      final path = 'civic_kiapo/$safe/${DateTime.now().microsecondsSinceEpoch}.mp4';
      final storage = Supabase.instance.client.storage.from('media');
      await storage.uploadBinary(
        path,
        Uint8List.fromList(bytes),
        fileOptions: const FileOptions(upsert: true, contentType: 'video/mp4'),
      );
      return storage.getPublicUrl(path);
    } catch (e) {
      debugPrint('[kiapo] video upload: $e');
      return null;
    }
  }
}

// ── Element helpers (same locked/field/sign contract as other Hati docs) ─────

NgmySlideElement _kLockedText(
  String text, {
  required double x,
  required double y,
  required double w,
  required double h,
  double fontSize = 14,
  FontWeight fontWeight = FontWeight.w600,
  FontStyle fontStyle = FontStyle.normal,
  TextAlign align = TextAlign.left,
  String tag = '',
  int color = 0xFF1A1208,
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: h,
    text: text,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    color: color,
    align: align,
    fileName: tag.isEmpty ? kMarriageLocked : '${kMarriageLocked}_$tag',
  );
}

NgmySlideElement _kLockedShape({
  required NgmySlideShapeKind shape,
  required double x,
  required double y,
  required double w,
  required double h,
  int fillColor = 0x00000000,
  int strokeColor = 0xFFD4AF37,
  double strokeWidth = 1.4,
  String tag = '',
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.shape,
    shape: shape,
    x: x,
    y: y,
    w: w,
    h: h,
    fillColor: fillColor,
    strokeColor: strokeColor,
    strokeWidth: strokeWidth,
    fileName: tag.isEmpty ? kMarriageLocked : '${kMarriageLocked}_$tag',
  );
}

NgmySlideElement _kBgImage(String dataUrl) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.image,
    x: 0,
    y: 0,
    w: 1,
    h: 1,
    imageRef: dataUrl,
    fileName: '${kMarriageLocked}_bg',
  );
}

double _kBlankH(double fontSize) => (fontSize * 0.0017).clamp(0.02, 0.06);

NgmySlideElement _kBlank(
  String key,
  double x,
  double y,
  double w, {
  int ink = 0xFF1A1208,
  double fontSize = 13,
  String startText = '',
  TextAlign align = TextAlign.left,
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: _kBlankH(fontSize),
    text: startText,
    fontSize: fontSize,
    fontWeight: FontWeight.w700,
    fontStyle: FontStyle.italic,
    color: ink,
    align: align,
    fileName: '$kMarriageFieldPrefix$key:${w.toStringAsFixed(3)}',
  );
}

NgmySlideElement _kBlankUnderline(double x, double y, double w, {int color = _softLine}) {
  return _kLockedShape(
    shape: NgmySlideShapeKind.line,
    x: x,
    y: y + 0.002,
    w: w,
    h: 0.002,
    strokeColor: color,
    strokeWidth: 0.8,
    tag: 'ul_${x}_$y',
  );
}

NgmySlideElement _kParagraphField(
  String key,
  double x,
  double y,
  double w,
  double h, {
  required String startText,
  int ink = 0xFF1A1208,
  double fontSize = 12.5,
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: h,
    text: startText,
    fontSize: fontSize,
    fontWeight: FontWeight.w600,
    color: ink,
    align: TextAlign.justify,
    fileName: '$kMarriageFieldPrefix$key:${w.toStringAsFixed(3)}',
  );
}

List<NgmySlideElement> _buildKiapoPage({
  required int ink,
  required int accent,
  required String state,
}) {
  const cx = 0.085;
  const cw = 0.83;
  final out = <NgmySlideElement>[];

  // Soft NGMY watermark
  out.add(_kLockedText(
    'NGMY',
    x: -0.08,
    y: 0.02,
    w: 0.45,
    h: 0.08,
    fontSize: 52,
    fontWeight: FontWeight.w900,
    align: TextAlign.center,
    color: (0x0E << 24) | (ink & 0x00FFFFFF),
    tag: 'watermark',
  ));

  // Title block
  out.add(_kLockedText(
    'HATI YA KIAPO CHA UONGOZI',
    x: cx,
    y: 0.034,
    w: cw,
    h: 0.055,
    fontSize: 28,
    fontWeight: FontWeight.w900,
    align: TextAlign.center,
    color: ink,
    tag: 'title',
  ));
  out.add(_kLockedText(
    'Kiapo cha Rais · Presidential Oath of Leadership',
    x: cx,
    y: 0.086,
    w: cw,
    h: 0.028,
    fontSize: 12,
    fontWeight: FontWeight.w600,
    fontStyle: FontStyle.italic,
    align: TextAlign.center,
    color: accent,
    tag: 'subtitle',
  ));
  out.add(_kLockedShape(
    shape: NgmySlideShapeKind.line,
    x: cx + cw * 0.18,
    y: 0.118,
    w: cw * 0.64,
    h: 0.002,
    strokeColor: accent,
    strokeWidth: 1.6,
    tag: 'title_rule',
  ));

  // Tarehe
  out.add(_kLockedText(
    'Tarehe:',
    x: cx,
    y: 0.135,
    w: 0.12,
    h: 0.028,
    fontSize: 14,
    fontWeight: FontWeight.w800,
    color: ink,
    tag: 'tarehe_lbl',
  ));
  out.add(_kBlank('tarehe_top', cx + 0.13, 0.135, 0.42, ink: ink, fontSize: 14, startText: '[Weka Tarehe Hapa]'));
  out.add(_kBlankUnderline(cx + 0.13, 0.155, 0.42));

  // Oath body
  out.add(_kLockedShape(
    shape: NgmySlideShapeKind.rectangle,
    x: cx,
    y: 0.175,
    w: cw,
    h: 0.028,
    fillColor: accent,
    strokeColor: accent,
    strokeWidth: 0,
    tag: 'ribbon',
  ));
  out.add(_kLockedText(
    'KIAPO CHA UONGOZI',
    x: cx,
    y: 0.177,
    w: cw,
    h: 0.024,
    fontSize: 12,
    fontWeight: FontWeight.w900,
    align: TextAlign.center,
    color: 0xFFFFFFFF,
    tag: 'ribbon_txt',
  ));

  out.add(_kParagraphField('body_p1', cx, 0.215, cw, 0.14, startText: kNgmyHatiKiapoBodyP1, ink: ink, fontSize: 12.2));
  out.add(_kParagraphField('body_p2', cx, 0.362, cw, 0.12, startText: kNgmyHatiKiapoBodyP2, ink: ink, fontSize: 12.2));
  out.add(_kParagraphField('body_p3', cx, 0.488, cw, 0.115, startText: kNgmyHatiKiapoBodyP3, ink: ink, fontSize: 12.2));

  // Video of the president reading the oath
  const videoY = 0.615;
  const videoH = 0.145;
  out.add(_kLockedShape(
    shape: NgmySlideShapeKind.rectangle,
    x: cx,
    y: videoY,
    w: cw,
    h: videoH,
    fillColor: 0x10000000,
    strokeColor: accent,
    strokeWidth: 1.6,
    tag: 'video_frame',
  ));
  out.add(_kLockedText(
    'VIDEO YA KIAPO',
    x: cx + 0.02,
    y: videoY + 0.008,
    w: cw - 0.04,
    h: 0.02,
    fontSize: 10,
    fontWeight: FontWeight.w800,
    color: accent,
    tag: 'video_lbl',
  ));
  out.add(NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.image,
    x: cx + 0.03,
    y: videoY + 0.03,
    w: cw - 0.06,
    h: videoH - 0.04,
    fileName: kKiapoVideoFileName,
  ));

  // Rais Anayeapa
  const signY = 0.78;
  out.add(_kLockedText(
    'Rais Anayeapa:',
    x: cx,
    y: signY,
    w: cw,
    h: 0.028,
    fontSize: 15,
    fontWeight: FontWeight.w900,
    color: ink,
    tag: 'rais_hdr',
  ));
  out.add(_kLockedText('Jina:', x: cx, y: signY + 0.038, w: 0.1, h: 0.026, fontSize: 13, fontWeight: FontWeight.w700, color: ink, tag: 'jina_lbl'));
  out.add(_kBlank('rais_jina', cx + 0.11, signY + 0.038, 0.62, ink: ink, fontSize: 13));
  out.add(_kBlankUnderline(cx + 0.11, signY + 0.058, 0.62));

  out.add(_kLockedText('Sahihi:', x: cx, y: signY + 0.078, w: 0.12, h: 0.026, fontSize: 13, fontWeight: FontWeight.w700, color: ink, tag: 'sahihi_lbl'));
  out.add(NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.shape,
    shape: NgmySlideShapeKind.rectangle,
    x: cx + 0.13,
    y: signY + 0.068,
    w: 0.38,
    h: 0.055,
    fillColor: 0x00000000,
    strokeColor: 0x00000000,
    fileName: '${kMarriageSignPrefix}rais',
  ));
  out.add(_kBlankUnderline(cx + 0.13, signY + 0.118, 0.38));

  out.add(_kLockedText('Tarehe:', x: cx + 0.54, y: signY + 0.078, w: 0.12, h: 0.026, fontSize: 13, fontWeight: FontWeight.w700, color: ink, tag: 'tarehe2_lbl'));
  out.add(_kBlank('rais_tarehe', cx + 0.66, signY + 0.078, 0.2, ink: ink, fontSize: 12));
  out.add(_kBlankUnderline(cx + 0.66, signY + 0.098, 0.2));

  final trimmedState = state.trim();
  if (trimmedState.isNotEmpty) {
    const stateBoxH = 0.032;
    const stateBoxW = 0.72;
    final stateBoxX = cx + (cw - stateBoxW) / 2;
    const stateY = 0.935;
    out.addAll([
      _kLockedShape(
        shape: NgmySlideShapeKind.rectangle,
        x: stateBoxX,
        y: stateY,
        w: stateBoxW,
        h: stateBoxH,
        fillColor: 0x00000000,
        strokeColor: accent,
        strokeWidth: 1.0,
        tag: 'state_box',
      ),
      _kLockedText(
        "EMO 'YA M'MBONDO $trimmedState",
        x: stateBoxX,
        y: stateY + 0.003,
        w: stateBoxW,
        h: stateBoxH - 0.006,
        fontSize: 14,
        fontWeight: FontWeight.w700,
        align: TextAlign.center,
        color: ink,
        tag: 'state_text',
      ),
    ]);
  }

  return out;
}

/// Builds the single-page presidential oath document for a Civic Registry state.
NgmySlideDeck ngmyBuildHatiKiapoUongoziDeck({required String state}) {
  ngmyClearMarriagePaperCache();
  const ink = 0xFF12213D;
  const accent = 0xFFB8860B;
  const background = 0xFFFFFEFB;
  final bgUrl = ngmyMarriagePaperDataUrl(NgmyMarriagePaperStyle.elegantNavy);

  final page = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Hati ya Kiapo cha Uongozi',
    layout: NgmySlideLayout.blank,
    background: background,
    elements: [
      _kBgImage(bgUrl),
      ..._buildKiapoPage(ink: ink, accent: accent, state: state),
    ],
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Hati ya Kiapo cha Uongozi',
    themeId: 'hati_kiapo_elegant_navy',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: kNgmyHatiKiapoUongoziDeckKind,
    marriageState: state.trim(),
    slides: [page],
  );
}

/// Opens the civic oath document for [state]. Registrars may create/edit;
/// enrolled members may view an existing published oath for their state.
Future<void> launchNgmyHatiKiapoUongozi({
  required BuildContext context,
  required String state,
  required bool canEdit,
  required void Function(NgmySlideDeck deck) openDraftEditor,
  required void Function(NgmySlideDeck deck) openSavedDeck,
}) async {
  final trimmed = state.trim();
  if (trimmed.isEmpty) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Chagua jimbo la Civic Registry kwanza.')),
      );
    }
    return;
  }

  await NgmyHatiKiapoStore.load(forceCloud: true);
  final existing = await NgmyHatiKiapoStore.loadForState(trimmed);
  if (!context.mounted) return;

  if (existing != null) {
    if (canEdit) {
      final action = await showModalBottomSheet<String>(
        context: context,
        backgroundColor: const Color(0xFF14110C),
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
                const Text(
                  'Hati ya Kiapo cha Uongozi',
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                ),
                const SizedBox(height: 8),
                Text(
                  'Hati ya jimbo: $trimmed',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
                ),
                const SizedBox(height: 16),
                FilledButton.icon(
                  onPressed: () => Navigator.pop(ctx, 'continue'),
                  icon: const Icon(Icons.edit_document),
                  label: const Text('Fungua / hariri hati'),
                  style: FilledButton.styleFrom(
                    backgroundColor: const Color(0xFFB8860B),
                    foregroundColor: Colors.black,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                  ),
                ),
                const SizedBox(height: 10),
                OutlinedButton.icon(
                  onPressed: () => Navigator.pop(ctx, 'new'),
                  icon: const Icon(Icons.refresh_rounded),
                  label: const Text('Anza upya (hati mpya)'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: Colors.white70,
                    side: const BorderSide(color: Colors.white24),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                  ),
                ),
              ],
            ),
          ),
        ),
      );
      if (action == 'continue') {
        openSavedDeck(existing);
        return;
      }
      if (action != 'new') return;
      if (!context.mounted) return;
      final confirm = await showDialog<bool>(
        context: context,
        builder: (ctx) => AlertDialog(
          title: const Text('Anza hati mpya?'),
          content: const Text('Hati iliyopo ya jimbo hili itabadilishwa.'),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Ghairi')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Endelea')),
          ],
        ),
      );
      if (confirm != true || !context.mounted) return;
      openDraftEditor(ngmyBuildHatiKiapoUongoziDeck(state: trimmed));
      return;
    }
    openSavedDeck(existing);
    return;
  }

  if (!canEdit) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Registrar wa $trimmed bado hajachapisha Hati ya Kiapo cha Uongozi.',
          ),
        ),
      );
    }
    return;
  }

  if (!context.mounted) return;
  openDraftEditor(ngmyBuildHatiKiapoUongoziDeck(state: trimmed));
}

// ── Video slot widget (canvas / present / export preview) ────────────────────

class NgmyKiapoVideoSlot extends StatefulWidget {
  const NgmyKiapoVideoSlot({
    super.key,
    required this.videoRef,
    required this.scale,
    this.emptyHint = true,
    this.canUpload = false,
  });

  final String? videoRef;
  final double scale;
  final bool emptyHint;
  final bool canUpload;

  @override
  State<NgmyKiapoVideoSlot> createState() => _NgmyKiapoVideoSlotState();
}

class _NgmyKiapoVideoSlotState extends State<NgmyKiapoVideoSlot> {
  VideoPlayerController? _controller;
  bool _ready = false;
  bool _error = false;
  bool _playing = false;

  @override
  void initState() {
    super.initState();
    unawaited(_init());
  }

  @override
  void didUpdateWidget(covariant NgmyKiapoVideoSlot oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.videoRef != widget.videoRef) {
      unawaited(_reinit());
    }
  }

  Future<void> _reinit() async {
    await _controller?.dispose();
    _controller = null;
    if (mounted) {
      setState(() {
        _ready = false;
        _error = false;
        _playing = false;
      });
    }
    await _init();
  }

  Future<void> _init() async {
    final ref = (widget.videoRef ?? '').trim();
    if (ref.isEmpty) return;
    try {
      if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('data:')) {
        _controller = VideoPlayerController.networkUrl(
          Uri.parse(ref),
          videoPlayerOptions: VideoPlayerOptions(mixWithOthers: true),
        );
      } else {
        throw Exception('unsupported video ref');
      }
      await _controller!.initialize().timeout(const Duration(seconds: 25));
      if (!mounted) return;
      _controller!.setLooping(false);
      setState(() => _ready = true);
    } catch (e) {
      debugPrint('[kiapo video] $e');
      if (mounted) setState(() => _error = true);
    }
  }

  @override
  void dispose() {
    _controller?.dispose();
    super.dispose();
  }

  void _toggle() {
    final c = _controller;
    if (c == null || !_ready) return;
    if (c.value.isPlaying) {
      c.pause();
      setState(() => _playing = false);
    } else {
      c.play();
      setState(() => _playing = true);
    }
  }

  @override
  Widget build(BuildContext context) {
    final ref = (widget.videoRef ?? '').trim();
    if (ref.isEmpty) {
      if (!widget.emptyHint) return const SizedBox.shrink();
      return DecoratedBox(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8 * widget.scale),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              const Color(0xFF12213D).withValues(alpha: 0.92),
              const Color(0xFF0A1526).withValues(alpha: 0.95),
            ],
          ),
          border: Border.all(color: const Color(0xFFB8860B).withValues(alpha: 0.55)),
        ),
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.videocam_rounded, color: const Color(0xFFB8860B), size: 28 * widget.scale),
              SizedBox(height: 6 * widget.scale),
              Text(
                widget.canUpload ? 'Tap to add president video' : 'Video ya kiapo',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white.withValues(alpha: 0.85),
                  fontWeight: FontWeight.w700,
                  fontSize: 11 * widget.scale,
                ),
              ),
            ],
          ),
        ),
      );
    }
    if (_error) {
      return Center(
        child: Icon(Icons.videocam_off_rounded, color: Colors.white54, size: 28 * widget.scale),
      );
    }
    if (!_ready || _controller == null) {
      return const Center(child: CircularProgressIndicator(color: Color(0xFFB8860B), strokeWidth: 2));
    }
    final c = _controller!;
    final w = c.value.size.width > 0 ? c.value.size.width : 16.0;
    final h = c.value.size.height > 0 ? c.value.size.height : 9.0;
    return GestureDetector(
      onTap: _toggle,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(6 * widget.scale),
        child: Stack(
          fit: StackFit.expand,
          children: [
            FittedBox(
              fit: BoxFit.cover,
              clipBehavior: Clip.hardEdge,
              child: SizedBox(width: w, height: h, child: VideoPlayer(c)),
            ),
            if (!_playing)
              Center(
                child: Container(
                  padding: EdgeInsets.all(8 * widget.scale),
                  decoration: BoxDecoration(
                    color: Colors.black.withValues(alpha: 0.45),
                    shape: BoxShape.circle,
                  ),
                  child: Icon(Icons.play_arrow_rounded, color: Colors.white, size: 28 * widget.scale),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
