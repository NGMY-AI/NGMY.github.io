import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image/image.dart' as img;

import 'ngmy_edge_invoke.dart';
import 'ngmy_hati_kuhowa_templates.dart';
import 'ngmy_hati_photo_art.dart';
import 'ngmy_hati_pins.dart';
import 'ngmy_marriage_markers.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_worksheet_helpers.dart';

// The couple at the top of the owner's own Hati designs is the default picture (and on Mkataba wa Ndoa Kijiji, the
// groom's parents beside the hut). A family can give a photo of the man and of the woman, and of the groom's father and
// mother; the AI then redraws that same traditional picture (same clothes, pose, colours and background) with their
// own faces, and it is laid into the paper exactly where the people were. Each group can be switched off.

/// True when this document's paper has a couple picture the AI can redraw.
bool ngmyHatiHasCouplePicture(NgmySlideDeck deck) {
  final id = ngmyHatiPaperIdOfDeck(deck);
  return id != null && ngmyHatiCoupleArea(id) != null;
}

/// True when this document's paper also has the groom's parents.
bool ngmyHatiHasParentsPicture(NgmySlideDeck deck) {
  final id = ngmyHatiPaperIdOfDeck(deck);
  return id != null && ngmyHatiParentsArea(id) != null;
}

String _prompt({required bool parents}) {
  final who = parents ? 'an older man and an older woman (the parents)' : 'a man and a woman';
  return 'You are given three pictures. Picture 1 is a traditional Congolese wedding painting of $who. Picture 2 is a '
      'photo of the real man. Picture 3 is a photo of the real woman. Redraw picture 1 exactly: the same size and '
      'framing, the same pose, clothes, leopard skin, beads, head wrap, hat, jewellery, staff, spear, colours, lighting, '
      'background and painted style, and every part of the picture around them. Change only the two faces: the man in '
      'the painting gets the face of the man in picture 2, and the woman gets the face of the woman in picture 3, so each '
      'is clearly recognisable, with their own skin tone, age and features, painted in the same style as the rest of the '
      'picture. Keep their expressions warm as in picture 1. Do not add any words, letters or frames. Return only the '
      'finished picture.';
}

NgmySlideElement? _paper(NgmySlide page) {
  for (final e in page.elements) {
    if (e.fileName == '${kMarriageLocked}_bg') return e;
  }
  return null;
}

typedef _Area = ({double x, double y, double w, double h, String asset, String art});

/// Opens the people picture sheet for this document: the man's and the woman's photos, and on a paper with the groom's
/// parents their photos too (each group can be switched off); the AI makes the picture, or the original comes back.
/// [apply] changes the document (so it can be undone and saved). [firstTime]: opened right after the paper was picked.
Future<void> ngmyHatiOpenCouplePicture(BuildContext context, NgmySlideDeck deck, NgmySlide page, void Function(VoidCallback change) apply, {bool firstTime = false}) async {
  final id = ngmyHatiPaperIdOfDeck(deck);
  final area = id == null ? null : ngmyHatiCoupleArea(id);
  if (area == null) return;
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _CoupleSheet(area: area, parents: ngmyHatiParentsArea(id!), page: page, apply: apply, firstTime: firstTime),
  );
}

class _CoupleSheet extends StatefulWidget {
  const _CoupleSheet({required this.area, required this.parents, required this.page, required this.apply, this.firstTime = false});

  final _Area area;
  final _Area? parents;
  final NgmySlide page;
  final void Function(VoidCallback change) apply;
  final bool firstTime;

  @override
  State<_CoupleSheet> createState() => _CoupleSheetState();
}

class _CoupleSheetState extends State<_CoupleSheet> {
  // 0 man, 1 woman, 2 father, 3 mother.
  final List<Uint8List?> _photos = List.filled(4, null);
  bool _useCouple = true, _useParents = true;
  String? _status, _error;
  bool _busy = false;

  bool get _hasParents => widget.parents != null;
  bool get _coupleReady => _photos[0] != null && _photos[1] != null;
  bool get _parentsReady => _photos[2] != null && _photos[3] != null;

  /// What will be painted: each switched-on group with both photos.
  bool get _ready =>
      !_busy &&
      (_useCouple || (_hasParents && _useParents)) &&
      (!_useCouple || _coupleReady) &&
      (!_hasParents || !_useParents || _parentsReady);

  Future<void> _pick(int slot) async {
    final ref = await ngmyPickImageBase64(imageQuality: 85, maxWidth: 1024);
    if (ref == null || !mounted) return;
    final bytes = base64Decode(ref.substring(ref.indexOf(',') + 1));
    setState(() {
      _photos[slot] = bytes;
      _error = null;
    });
  }

  Future<Uint8List> _paint(_Area area, Uint8List man, Uint8List woman, {required bool parents}) async {
    final original = await rootBundle.load(area.asset);
    final data = await ngmyEdgeInvoke({
      'action': 'geminiVirtualOutfit',
      'prompt': _prompt(parents: parents),
      'personOnly': false,
      'images': [
        {'mimeType': 'image/jpeg', 'data': base64Encode(original.buffer.asUint8List(original.offsetInBytes, original.lengthInBytes))},
        {'mimeType': 'image/jpeg', 'data': base64Encode(man)},
        {'mimeType': 'image/jpeg', 'data': base64Encode(woman)},
      ],
    }, timeout: const Duration(seconds: 150));
    final b64 = data?['imageBase64']?.toString().trim() ?? '';
    if (b64.isEmpty) {
      throw data?['error']?.toString() ?? 'The AI could not make the picture. Please try again.';
    }
    return base64Decode(b64);
  }

  Future<void> _make() async {
    if (!_ready) return;
    final couple = _useCouple;
    final parents = _hasParents && _useParents;
    setState(() {
      _busy = true;
      _error = null;
      _status = couple && parents
          ? 'The AI is painting the couple and the parents. This takes up to two minutes.'
          : 'The AI is painting your picture. This takes up to a minute.';
    });
    try {
      // Both at once.
      final made = await Future.wait([
        if (couple) _paint(widget.area, _photos[0]!, _photos[1]!, parents: false),
        if (parents) _paint(widget.parents!, _photos[2]!, _photos[3]!, parents: true),
      ]);
      if (!mounted) return;
      setState(() => _status = 'Putting the picture on your paper…');
      await Future<void>.delayed(const Duration(milliseconds: 30));
      final paper = _paper(widget.page);
      if (paper == null || paper.imageRef == null) throw 'This paper has no picture to change.';
      // Laid onto the paper as it is now (a couple made earlier stays when only the parents are made, and the other way).
      var url = paper.imageRef!;
      var i = 0;
      if (couple) url = ngmyHatiPutCoupleInPaper(url, made[i++], widget.area);
      if (parents) url = ngmyHatiPutCoupleInPaper(url, made[i++], widget.parents!);
      widget.apply(() => paper.imageRef = url);
      if (!mounted) return;
      Navigator.of(context).pop();
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(couple && parents ? 'Your couple and parents are on the paper.' : parents ? 'The parents are on the paper.' : 'Your couple picture is on the paper.'),
      ));
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _busy = false;
        _status = null;
        _error = e.toString();
      });
    }
  }

  void _restore() {
    final paper = _paper(widget.page);
    if (paper == null) return;
    final ownTitle = widget.page.elements.any((e) => e.fileName == '${kMarriageLocked}_title');
    final url = ngmyHatiPhotoArtUrl(ownTitle ? '${widget.area.art}_notitle' : widget.area.art);
    if (url == null) return;
    widget.apply(() => paper.imageRef = url);
    Navigator.of(context).pop();
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('The original picture is back.')));
  }

  Widget _slot(String label, int slot, bool on) {
    final bytes = _photos[slot];
    return Expanded(
      child: Opacity(
        opacity: on ? 1 : 0.35,
        child: InkWell(
          onTap: _busy || !on ? null : () => _pick(slot),
          borderRadius: BorderRadius.circular(18),
          child: Container(
            height: 130,
            decoration: BoxDecoration(
              color: const Color(0xFF1E2537),
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: bytes == null ? const Color(0xFF334155) : const Color(0xFFF2C14E), width: 1.4),
              image: bytes == null ? null : DecorationImage(image: MemoryImage(bytes), fit: BoxFit.cover),
            ),
            alignment: Alignment.bottomCenter,
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 8),
              decoration: const BoxDecoration(
                color: Color(0xCC0B1220),
                borderRadius: BorderRadius.vertical(bottom: Radius.circular(17)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(bytes == null ? Icons.add_a_photo_outlined : Icons.check_circle_rounded, size: 16, color: const Color(0xFFF2C14E)),
                  const SizedBox(width: 6),
                  Flexible(child: Text(label, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5))),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  /// A group (the couple, or the parents) with its switch and its two photo slots.
  Widget _group(String title, String hint, bool on, ValueChanged<bool> onChanged, List<Widget> slots) {
    return Container(
      margin: const EdgeInsets.only(top: 12),
      padding: const EdgeInsets.fromLTRB(12, 6, 12, 12),
      decoration: BoxDecoration(color: const Color(0xFF151C2B), borderRadius: BorderRadius.circular(20), border: Border.all(color: const Color(0xFF263042))),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                    Text(hint, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
                  ],
                ),
              ),
              Switch(value: on, onChanged: _busy ? null : onChanged, activeThumbColor: const Color(0xFFF2C14E)),
            ],
          ),
          const SizedBox(height: 8),
          Row(children: slots),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        margin: const EdgeInsets.all(10),
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.9),
        decoration: BoxDecoration(color: const Color(0xFF111827), borderRadius: BorderRadius.circular(26), border: Border.all(color: const Color(0xFF263042))),
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(18, 14, 18, 18),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
              const SizedBox(height: 14),
              Text(widget.firstTime ? 'Put your own faces on this paper?' : 'Your pictures on the paper',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
              const SizedBox(height: 6),
              Text(
                _hasParents
                    ? 'Add a clear photo of each person (face looking at the camera). The AI paints the same traditional picture with your faces: the couple at the top, and the groom\'s parents beside the hut. Switch off what you do not want.'
                    : 'Add a clear photo of the man and of the woman (faces looking at the camera). The AI paints the same traditional picture with your faces.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 13, height: 1.35),
              ),
              _group('The couple', 'The man and the woman getting married', _useCouple, (v) => setState(() => _useCouple = v), [
                _slot('Man (Mume)', 0, _useCouple),
                const SizedBox(width: 12),
                _slot('Woman (Mke)', 1, _useCouple),
              ]),
              if (_hasParents)
                _group('The groom\'s parents', 'Optional: his father and mother', _useParents, (v) => setState(() => _useParents = v), [
                  _slot('Father (Baba)', 2, _useParents),
                  const SizedBox(width: 12),
                  _slot('Mother (Mama)', 3, _useParents),
                ]),
              if (_status != null) ...[
                const SizedBox(height: 14),
                Row(children: [
                  const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2.4, color: Color(0xFFF2C14E))),
                  const SizedBox(width: 10),
                  Expanded(child: Text(_status!, style: const TextStyle(color: Colors.white70, fontSize: 13))),
                ]),
              ],
              if (_error != null) ...[
                const SizedBox(height: 12),
                Text(_error!, style: const TextStyle(color: Color(0xFFFCA5A5), fontSize: 13)),
              ],
              const SizedBox(height: 16),
              FilledButton.icon(
                onPressed: _ready ? _make : null,
                icon: const Icon(Icons.auto_awesome_rounded),
                label: Text(_busy ? 'Painting…' : 'Make our picture'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFFF2C14E),
                  foregroundColor: const Color(0xFF1A1208),
                  disabledBackgroundColor: const Color(0xFF3B3320),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  textStyle: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15),
                ),
              ),
              const SizedBox(height: 8),
              if (widget.firstTime)
                TextButton(
                  onPressed: _busy ? null : () => Navigator.of(context).pop(),
                  child: const Text('Not now (you can do it later from the three dots)', style: TextStyle(color: Colors.white60)),
                )
              else
                TextButton(
                  onPressed: _busy ? null : _restore,
                  child: const Text('Put the original picture back', style: TextStyle(color: Colors.white60)),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Lays [picture] (the AI's couple) into the paper picture [paperUrl] at the couple's place, fading its inner edges
/// into the paper so no seam shows, and returns the new paper as a data link.
String ngmyHatiPutCoupleInPaper(String paperUrl, Uint8List picture, ({double x, double y, double w, double h, String asset, String art}) area) {
  final paper = img.decodeImage(base64Decode(paperUrl.substring(paperUrl.indexOf(',') + 1)));
  final made = img.decodeImage(picture);
  if (paper == null || made == null) throw 'Could not read the picture.';
  final x0 = (area.x * paper.width).round(), y0 = (area.y * paper.height).round();
  final w = (area.w * paper.width).round(), h = (area.h * paper.height).round();
  // The AI may answer in another size: fill the couple's box, keeping the middle.
  final s = math.max(w / made.width, h / made.height);
  final scaled = img.copyResize(made, width: (made.width * s).round(), height: (made.height * s).round(), interpolation: img.Interpolation.average);
  final fit = img.copyCrop(scaled, x: (scaled.width - w) ~/ 2, y: (scaled.height - h) ~/ 2, width: w, height: h);
  const feather = 28;
  for (var j = 0; j < h; j++) {
    for (var i = 0; i < w; i++) {
      final px = x0 + i, py = y0 + j;
      if (px >= paper.width || py >= paper.height) continue;
      // Only the sides inside the page fade (the couple's box touches the page edge on the left and top).
      var a = 1.0;
      if (x0 > 0) a = math.min(a, i / feather);
      if (y0 > 0) a = math.min(a, j / feather);
      a = math.min(a, (w - 1 - i) / feather);
      a = math.min(a, (h - 1 - j) / feather);
      a = a.clamp(0.0, 1.0);
      final src = fit.getPixel(i, j);
      if (a >= 1) {
        paper.setPixelRgb(px, py, src.r, src.g, src.b);
      } else if (a > 0) {
        final d = paper.getPixel(px, py);
        paper.setPixelRgb(px, py, (d.r * (1 - a) + src.r * a).round(), (d.g * (1 - a) + src.g * a).round(), (d.b * (1 - a) + src.b * a).round());
      }
    }
  }
  return 'data:image/jpeg;base64,${base64Encode(img.encodeJpg(paper, quality: 82))}';
}
