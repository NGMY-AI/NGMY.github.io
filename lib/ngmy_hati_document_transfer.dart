import 'ngmy_hati_kuhowa_templates.dart';
import 'ngmy_slides_marriage_agreement.dart';
import 'ngmy_slides_models.dart';

/// Optional transfer between Hati ya Kuhowa and Hati ya Kuhoweya.
///
/// The two marriage documents share the same people, but the first paragraph
/// names them from opposite family sides. This maps each filled name into the
/// matching slot on the other document and copies shared fields/signatures.

String? ngmyHatiMarriageFieldKey(NgmySlideElement e) {
  if (!ngmyMarriageElementIsField(e)) return null;
  return e.fileName.replaceFirst(kMarriageFieldPrefix, '').split(':').first;
}

String? ngmyHatiMarriageSignKey(NgmySlideElement e) {
  if (!ngmyMarriageElementIsSignZone(e)) return null;
  return e.fileName.replaceFirst(kMarriageSignPrefix, '');
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

NgmySlideElement? _findSign(NgmySlideDeck deck, String key) {
  for (final slide in deck.slides) {
    for (final e in slide.elements) {
      if (ngmyHatiMarriageSignKey(e) == key) return e;
    }
  }
  return null;
}

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

/// Copies names / date / mahari / witnesses / writer / signatures from [source]
/// into [destination], remapping the first-paragraph names correctly.
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

  const sharedFieldKeys = <String>[
    'tarehe',
    'mahari_1',
    'mahari_2',
    'mahari_3',
    'mahari_4',
    'witness_mke_1_name',
    'witness_mke_2_name',
    'witness_mke_3_name',
    'witness_mume_1_name',
    'witness_mume_2_name',
    'witness_mume_3_name',
    'mwandishi_jina',
  ];
  for (final key in sharedFieldKeys) {
    final from = _findField(source, key);
    final to = _findField(destination, key);
    if (from == null || to == null) continue;
    final text = from.text.trim();
    if (text.isEmpty) continue;
    if (text == '[Jina la Shahidi]') continue;
    to.text = from.text;
    fields++;
  }

  for (final slide in source.slides) {
    for (final e in slide.elements) {
      final signKey = ngmyHatiMarriageSignKey(e);
      if (signKey == null) continue;
      final image = (e.imageRef ?? '').trim();
      if (image.isEmpty) continue;
      final dest = _findSign(destination, signKey);
      if (dest == null) continue;
      dest.imageRef = e.imageRef;
      signatures++;
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
