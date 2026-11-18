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

// The couple at the top of the owner's own Hati designs is the default picture. A family can give a photo of the man
// and a photo of the woman; the AI then redraws that same traditional picture (same clothes, pose, colours and
// background) with their own faces, and it is laid into the paper exactly where the couple was.

/// True when this document's paper has a couple picture the AI can redraw.
bool ngmyHatiHasCouplePicture(NgmySlideDeck deck) {
  final id = ngmyHatiPaperIdOfDeck(deck);
  return id != null && ngmyHatiCoupleArea(id) != null;
}

const String _kPrompt = 'You are given three pictures. Picture 1 is a traditional Congolese wedding painting of a man and a '
    'woman. Picture 2 is a photo of the real man. Picture 3 is a photo of the real woman. Redraw picture 1 exactly: the '
    'same size and framing, the same pose, clothes, leopard skin, beads, head wrap, jewellery, staff, colours, lighting, '
    'background and painted style. Change only the two faces: the man in the painting gets the face of the man in '
    'picture 2, and the woman gets the face of the woman in picture 3, so each is clearly recognisable, with their own '
    'skin tone and features, painted in the same style as the rest of the picture. Keep them smiling at each other as in '
    'picture 1. Do not add any words, letters or frames. Return only the finished picture.';

NgmySlideElement? _paper(NgmySlide page) {
  for (final e in page.elements) {
    if (e.fileName == '${kMarriageLocked}_bg') return e;
  }
  return null;
}

/// Opens the couple picture sheet for this document: pick the man's and the woman's photos, let the AI make the
/// picture, or put the original picture back. [apply] changes the document (so it can be undone and saved).
Future<void> ngmyHatiOpenCouplePicture(BuildContext context, NgmySlideDeck deck, NgmySlide page, void Function(VoidCallback change) apply) async {
  final id = ngmyHatiPaperIdOfDeck(deck);
  final area = id == null ? null : ngmyHatiCoupleArea(id);
  if (area == null) return;
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _CoupleSheet(area: area, page: page, apply: apply),
  );
}

class _CoupleSheet extends StatefulWidget {
  const _CoupleSheet({required this.area, required this.page, required this.apply});

  final ({double x, double y, double w, double h, String asset, String art}) area;
  final NgmySlide page;
  final void Function(VoidCallback change) apply;

  @override
  State<_CoupleSheet> createState() => _CoupleSheetState();
}

class _CoupleSheetState extends State<_CoupleSheet> {
  Uint8List? _man, _woman;
  String? _status, _error;
  bool _busy = false;

  Future<void> _pick(bool man) async {
    final ref = await ngmyPickImageBase64(imageQuality: 85, maxWidth: 1024);
    if (ref == null || !mounted) return;
    final bytes = base64Decode(ref.substring(ref.indexOf(',') + 1));
    setState(() {
      if (man) {
        _man = bytes;
      } else {
        _woman = bytes;
      }
      _error = null;
    });
  }

  Future<void> _make() async {
    final man = _man, woman = _woman;
    if (man == null || woman == null || _busy) return;
    setState(() {
      _busy = true;
      _error = null;
      _status = 'The AI is painting your picture. This takes up to a minute.';
    });
    try {
      final couple = await rootBundle.load(widget.area.asset);
      final data = await ngmyEdgeInvoke({
        'action': 'geminiVirtualOutfit',
        'prompt': _kPrompt,
        'personOnly': false,
        'images': [
          {'mimeType': 'image/jpeg', 'data': base64Encode(couple.buffer.asUint8List(couple.offsetInBytes, couple.lengthInBytes))},
          {'mimeType': 'image/jpeg', 'data': base64Encode(man)},
          {'mimeType': 'image/jpeg', 'data': base64Encode(woman)},
        ],
      }, timeout: const Duration(seconds: 150));
      final b64 = data?['imageBase64']?.toString().trim() ?? '';
      if (b64.isEmpty) {
        throw data?['error']?.toString() ?? 'The AI could not make the picture. Please try again.';
      }
      if (!mounted) return;
      setState(() => _status = 'Putting the picture on your paper…');
      await Future<void>.delayed(const Duration(milliseconds: 30));
      final paper = _paper(widget.page);
      if (paper == null || paper.imageRef == null) throw 'This paper has no picture to change.';
      final url = ngmyHatiPutCoupleInPaper(paper.imageRef!, base64Decode(b64), widget.area);
      widget.apply(() => paper.imageRef = url);
      if (!mounted) return;
      Navigator.of(context).pop();
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Your couple picture is on the paper.')));
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
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('The original couple picture is back.')));
  }

  Widget _slot(String label, Uint8List? bytes, bool man) {
    return Expanded(
      child: InkWell(
        onTap: _busy ? null : () => _pick(man),
        borderRadius: BorderRadius.circular(18),
        child: Container(
          height: 150,
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
                Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final ready = _man != null && _woman != null && !_busy;
    return SafeArea(
      child: Container(
        margin: const EdgeInsets.all(10),
        padding: const EdgeInsets.fromLTRB(18, 14, 18, 18),
        decoration: BoxDecoration(color: const Color(0xFF111827), borderRadius: BorderRadius.circular(26), border: Border.all(color: const Color(0xFF263042))),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
            const SizedBox(height: 14),
            const Text('Your couple picture', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
            const SizedBox(height: 6),
            Text(
              'Add a clear photo of the man and of the woman (faces looking at the camera). The AI paints the same traditional picture with your faces.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 13, height: 1.35),
            ),
            const SizedBox(height: 14),
            Row(children: [_slot('Man (Mume)', _man, true), const SizedBox(width: 12), _slot('Woman (Mke)', _woman, false)]),
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
              onPressed: ready ? _make : null,
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
            TextButton(
              onPressed: _busy ? null : _restore,
              child: const Text('Put the original picture back', style: TextStyle(color: Colors.white60)),
            ),
          ],
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
