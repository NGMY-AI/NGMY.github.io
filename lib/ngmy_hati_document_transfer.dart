import 'ngmy_hati_kuhowa_templates.dart';
import 'ngmy_slides_marriage_agreement.dart';
import 'ngmy_slides_models.dart';

/// Optional transfer between Hati ya Kuhowa and Hati ya Kuhoweya.
///
/// The two marriage documents share the same people, but the first paragraph
/// names them from opposite family sides. This maps each filled name into the
/// matching slot on the other document and copies every other editable field
/// and signature below that paragraph as-is.

const String kNgmyHatiPlacedSignPrefix = '${kMarriageSignPrefix}placed_';

String? ngmyHatiMarriageFieldKey(NgmySlideElement e) {
  if (!ngmyMarriageElementIsField(e)) return null;
  return e.fileName.replaceFirst(kMarriageFieldPrefix, '').split(':').first;
}

/// Slot id for an empty tap-to-sign zone (`marriage_sign_mke_witness_1`).
String? ngmyHatiEmptySignZoneSlot(NgmySlideElement e) {
  if (!e.fileName.startsWith(kMarriageSignPrefix)) return null;
  if (e.fileName.startsWith(kNgmyHatiPlacedSignPrefix)) return null;
  if (e.type == NgmySlideElementType.signature) return null;
  return e.fileName.substring(kMarriageSignPrefix.length);
}

/// Slot id for a captured signature (`marriage_sign_placed_mke_witness_1`).
String? ngmyHatiPlacedSignatureSlot(NgmySlideElement e) {
  if (e.type != NgmySlideElementType.signature) return null;
  if (!e.fileName.startsWith(kNgmyHatiPlacedSignPrefix)) return null;
  return e.fileName.substring(kNgmyHatiPlacedSignPrefix.length);
}

bool ngmyHatiIsTransferableDeck(NgmySlideDeck deck) =>
    deck.deckKind == kNgmyHatiKuhowaDeckKind || deck.deckKind == kNgmyHatiKuhoweshaDeckKind;

String ngmyHatiTransferPartnerKind(String deckKind) {
  if (deckKind == kNgmyHatiKuhowaDeckKind) return kNgmyHatiKuhoweshaDeckKind;
  if (deckKind == kNgmyHatiKuhoweshaDeckKind) return kNgmyHatiKuhowaDeckKind;
  return '';
}

String ngmyHatiTransferPartnerTitle(String deckKind) {
  if (deckKind == kNgmyHatiKuhowaDeckKind) return 'Hati ya Kuhoweya';
  if (deckKind == kNgmyHatiKuhoweshaDeckKind) return 'Hati ya Kuhowa';
  return 'partner document';
}

/// Doc1 (Kuhowa — groom's father speaking) placeholder → Doc2 (Kuhoweya).
const Map<String, String> kNgmyHatiKuhowaToKuhoweyaPlaceholders = {
  '[Jina la Baba]': '[Jina la Baba wa Mume]',
  '[Jina la Jamii]': '[Jina la Jamii ya Mume]',
  '[Jina la Nyumba]': '[Jina la Nyumba ya Mume]',
  '[Jina la Kijana]': '[Jina la Mume]',
  '[Jina la Binti]': '[Jina la Binti]',
  '[Jina la Baba wa Binti]': '[Jina la Baba]',
  '[Jina la Jamii ya Binti]': '[Jina la Jamii]',
  '[Jina la Nyumba ya Binti]': '[Jina la Nyumba]',
};

/// Doc2 → Doc1 reverse map.
final Map<String, String> kNgmyHatiKuhoweyaToKuhowaPlaceholders = {
  for (final e in kNgmyHatiKuhowaToKuhoweyaPlaceholders.entries) e.value: e.key,
};

String _collapseWs(String s) => s.replaceAll(RegExp(r'\s+'), ' ').trim();

/// Pull filled values out of an intro paragraph using its original template.
Map<String, String> ngmyHatiExtractIntroPlaceholders(String template, String filled) {
  final t = _collapseWs(template);
  final f = _collapseWs(filled);
  if (t.isEmpty || f.isEmpty) return {};
  final re = RegExp(r'\[[^\]]+\]');
  final placeholders = re.allMatches(t).map((m) => m.group(0)!).toList();
  if (placeholders.isEmpty) return {};

  final buf = StringBuffer('^');
  var pos = 0;
  for (final m in re.allMatches(t)) {
    if (m.start > pos) buf.write(RegExp.escape(t.substring(pos, m.start)));
    buf.write('(.*?)');
    pos = m.end;
  }
  if (pos < t.length) buf.write(RegExp.escape(t.substring(pos)));
  buf.write(r'\.?$');

  final match = RegExp(buf.toString(), caseSensitive: false).firstMatch(f);
  if (match == null) return {};

  final out = <String, String>{};
  for (var i = 0; i < placeholders.length; i++) {
    final value = (match.group(i + 1) ?? '').trim();
    if (value.isEmpty) continue;
    out[placeholders[i]] = value;
  }
  return out;
}

String ngmyHatiApplyIntroPlaceholders(String template, Map<String, String> values) {
  var out = template;
  final keys = values.keys.toList()..sort((a, b) => b.length.compareTo(a.length));
  for (final key in keys) {
    final value = values[key]?.trim() ?? '';
    if (value.isEmpty) continue;
    // Skip unfilled placeholders that were copied as-is.
    if (value.startsWith('[') && value.endsWith(']')) continue;
    out = out.replaceFirst(key, value);
  }
  return out;
}

Map<String, String> ngmyHatiMapIntroPlaceholders({
  required String sourceKind,
  required Map<String, String> sourceValues,
}) {
  final map = sourceKind == kNgmyHatiKuhowaDeckKind
      ? kNgmyHatiKuhowaToKuhoweyaPlaceholders
      : kNgmyHatiKuhoweyaToKuhowaPlaceholders;
  final out = <String, String>{};
  for (final e in map.entries) {
    final v = sourceValues[e.key]?.trim() ?? '';
    if (v.isEmpty) continue;
    if (v.startsWith('[') && v.endsWith(']')) continue;
    out[e.value] = v;
  }
  return out;
}

String ngmyHatiIntroTemplateForKind(String deckKind) {
  if (deckKind == kNgmyHatiKuhowaDeckKind) return kNgmyHatiKuhowaIntroTemplate;
  if (deckKind == kNgmyHatiKuhoweshaDeckKind) return kNgmyHatiKuhoweshaIntroTemplate;
  return '';
}

NgmySlideElement? _findField(NgmySlideDeck deck, String key) {
  for (final slide in deck.slides) {
    for (final e in slide.elements) {
      if (ngmyHatiMarriageFieldKey(e) == key) return e;
    }
  }
  return null;
}

NgmySlide? _primarySlide(NgmySlideDeck deck) => deck.slides.isEmpty ? null : deck.slides.first;

String ngmyHatiPaperTemplateIdFromDeck(NgmySlideDeck deck) {
  final theme = deck.themeId.trim();
  final prefix = deck.deckKind == kNgmyHatiKuhowaDeckKind
      ? 'hati_kuhowa_'
      : deck.deckKind == kNgmyHatiKuhoweshaDeckKind
          ? 'hati_kuhoweya_'
          : '';
  if (prefix.isNotEmpty && theme.startsWith(prefix)) {
    return theme.substring(prefix.length);
  }
  return kNgmyHatiKuhowaTemplates.first.id;
}

bool _isUnfilledWitnessPlaceholder(String text) {
  final t = text.trim();
  return t.isEmpty || t == '[Jina la Shahidi]';
}

/// Copies names / date / mahari / witnesses / writer / signatures from [source]
/// into [destination], remapping the first-paragraph names correctly and
/// transferring everything under that paragraph as-is.
({int names, int fields, int signatures}) ngmyHatiTransferDocumentContent({
  required NgmySlideDeck source,
  required NgmySlideDeck destination,
}) {
  final sourceKind = source.deckKind ?? '';
  final destKind = destination.deckKind ?? '';
  if (!ngmyHatiIsTransferableDeck(source) || !ngmyHatiIsTransferableDeck(destination)) {
    return (names: 0, fields: 0, signatures: 0);
  }
  if (sourceKind.isEmpty || destKind.isEmpty || sourceKind == destKind) {
    return (names: 0, fields: 0, signatures: 0);
  }

  var names = 0;
  var fields = 0;
  var signatures = 0;

  // ── First paragraph: role-mapped names ───────────────────────────────────
  final sourceIntroEl = _findField(source, 'utangulizi');
  final destIntroEl = _findField(destination, 'utangulizi');
  if (sourceIntroEl != null && destIntroEl != null) {
    final extracted = ngmyHatiExtractIntroPlaceholders(
      ngmyHatiIntroTemplateForKind(sourceKind),
      sourceIntroEl.text,
    );
    final mapped = ngmyHatiMapIntroPlaceholders(sourceKind: sourceKind, sourceValues: extracted);
    if (mapped.isNotEmpty) {
      destIntroEl.text = ngmyHatiApplyIntroPlaceholders(
        ngmyHatiIntroTemplateForKind(destKind),
        mapped,
      );
      names = mapped.length;
    }
  }

  // ── Everything else under the intro: copy matching fields as-is ──────────
  // Includes tarehe, mahari_1..4, witness names, mwandishi_jina, and
  // nimetowe_label when both documents have that editable banner.
  final sourceFieldKeys = <String>{};
  for (final slide in source.slides) {
    for (final e in slide.elements) {
      final key = ngmyHatiMarriageFieldKey(e);
      if (key == null || key == 'utangulizi') continue;
      sourceFieldKeys.add(key);
    }
  }
  for (final key in sourceFieldKeys) {
    final from = _findField(source, key);
    final to = _findField(destination, key);
    if (from == null || to == null) continue;
    final text = from.text;
    if (key.startsWith('witness_') && _isUnfilledWitnessPlaceholder(text)) continue;
    if (text.trim().isEmpty) continue;
    to.text = text;
    fields++;
  }

  // ── Signatures: placed images replace empty tap-to-sign zones ────────────
  // After signing, the empty zone is removed and a `marriage_sign_placed_*`
  // signature element holds the ink. Transfer that image into the matching
  // slot on the partner document.
  final destSlide = _primarySlide(destination);
  if (destSlide != null) {
    for (final slide in source.slides) {
      for (final e in slide.elements) {
        final slot = ngmyHatiPlacedSignatureSlot(e);
        if (slot == null) continue;
        final image = (e.imageRef ?? '').trim();
        if (image.isEmpty) continue;

        double x = e.x;
        double y = e.y;
        double w = e.w;
        double h = e.h;
        for (final xEl in destSlide.elements) {
          if (ngmyHatiEmptySignZoneSlot(xEl) == slot || ngmyHatiPlacedSignatureSlot(xEl) == slot) {
            x = xEl.x;
            y = xEl.y;
            w = xEl.w;
            h = xEl.h;
            break;
          }
        }

        destSlide.elements.removeWhere((xEl) {
          return ngmyHatiPlacedSignatureSlot(xEl) == slot || ngmyHatiEmptySignZoneSlot(xEl) == slot;
        });

        destSlide.elements.add(
          NgmySlideElement(
            id: NgmySlidesTemplates.newId(),
            type: NgmySlideElementType.signature,
            x: x,
            y: y,
            w: w,
            h: h,
            imageRef: e.imageRef,
            fileName: '$kNgmyHatiPlacedSignPrefix$slot',
          ),
        );
        signatures++;
      }
    }
  }

  destination.updatedAt = DateTime.now();
  return (names: names, fields: fields, signatures: signatures);
}

NgmySlideDeck ngmyHatiBuildPartnerDeck(NgmySlideDeck source) {
  final templateId = ngmyHatiPaperTemplateIdFromDeck(source);
  if (source.deckKind == kNgmyHatiKuhowaDeckKind) {
    return ngmyBuildHatiKuhoweshaDeck(templateId: templateId);
  }
  return ngmyBuildHatiKuhowaDeck(templateId: templateId);
}
