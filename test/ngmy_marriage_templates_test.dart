import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_marriage_agreement_templates.dart';
import 'package:ngmy/ngmy_marriage_paper_art.dart';
import 'package:ngmy/ngmy_ndoa_hati_deck.dart';

void main() {
  test('marriage documents keep every previous template plus ten certificate layouts', () {
    expect(kNgmyMarriagePaperTemplates, hasLength(19));
    expect(
      kNgmyMarriagePaperTemplates.map((t) => t.id).toSet(),
      {
        'heritage_gold',
        'heritage_crimson',
        'elegant_navy',
        'elegant_gold',
        'kente_sunset',
        'indigo_mudcloth',
        'adinkra_royal',
        'nile_lotus',
        'shweshwe_ivory',
        'rings_ndoa',
        'couple_taarifa',
        'barua_kuhowesha',
        'mahari_pande',
        'sheria_familia',
        'ndoa_safi',
        'pete_pana',
        'muhuri_familia',
        'fomu_wazi',
        'upendo_dhahabu',
      },
    );
    expect(
      kNgmyMarriagePaperTemplates.map((t) => t.layoutKind).toSet(),
      NgmyMarriageLayoutKind.values.toSet(),
    );
  });

  test('previous cloth templates are back and new certificates still render', () {
    const previous = ['kente_sunset', 'indigo_mudcloth', 'adinkra_royal', 'nile_lotus', 'shweshwe_ivory'];
    for (final id in previous) {
      final tpl = ngmyMarriageTemplateById(id);
      expect(tpl, isNotNull, reason: id);
      expect(ngmyMarriagePaperPng(tpl!.paperStyle).length, greaterThan(800), reason: id);
    }
    const ids = ['rings_ndoa', 'couple_taarifa', 'barua_kuhowesha', 'mahari_pande', 'sheria_familia', 'ndoa_safi', 'pete_pana', 'muhuri_familia', 'fomu_wazi', 'upendo_dhahabu'];
    for (final id in ids) {
      final tpl = ngmyMarriageTemplateById(id);
      expect(tpl, isNotNull, reason: id);
      expect(tpl!.layoutKind, isNot(NgmyMarriageLayoutKind.classic), reason: id);
      final png = ngmyMarriagePaperPng(tpl.paperStyle);
      expect(png.length, greaterThan(800), reason: id);
    }
  });

  test('Hati ya Kuhowa and Kuhowesha keep ten papers and resolve heritage for old docs', () {
    expect(kNgmyHatiKuhowaTemplates, hasLength(10));
    expect(
      kNgmyHatiKuhowaTemplates.map((t) => t.id).toList(),
      [
        'kuhowa_elegant_navy',
        'kuhowa_elegant_gold',
        'kuhowa_gold_ribbon',
        'kuhowa_gold_baroque',
        'kuhowa_elegant_emerald',
        'kuhowa_elegant_burgundy',
        'kuhowa_gold_filigree',
        'kuhowa_gold_laurel',
        'kuhowa_gold_crest',
        'kuhowa_gold_star',
      ],
    );
    for (final id in ['kuhowa_heritage_gold', 'kuhowa_heritage_crimson']) {
      expect(kNgmyHatiKuhowaTemplates.any((t) => t.id == id), isFalse, reason: id);
      expect(ngmyHatiKuhowaTemplateById(id), isNotNull, reason: 'older saved $id still opens');
    }
    for (final id in ['kuhowa_kente_sunset', 'kuhowa_rings_ndoa', 'kuhowa_upendo']) {
      expect(kNgmyHatiKuhowaTemplates.any((t) => t.id == id), isFalse, reason: id);
      expect(ngmyHatiKuhowaTemplateById(id), isNotNull, reason: 'older saved $id still opens');
    }
    for (final id in ['kuhowa_gold_filigree', 'kuhowa_gold_laurel', 'kuhowa_gold_crest', 'kuhowa_gold_ribbon', 'kuhowa_gold_baroque', 'kuhowa_gold_star']) {
      final tpl = ngmyHatiKuhowaTemplateById(id);
      expect(tpl, isNotNull, reason: id);
      expect(tpl!.layoutKind, NgmyHatiLayoutKind.classic, reason: id);
      expect(ngmyMarriagePaperPng(tpl.paperStyle).length, greaterThan(800), reason: id);
      expect(ngmyBuildHatiKuhowaDeck(templateId: id).slides, hasLength(1), reason: id);
    }
  });

  test('every Hati ya Ndoa template uses the Kuhowa page on its own paper', () {
    for (final tpl in kNgmyMarriagePaperTemplates) {
      final deck = ngmyBuildMarriageAgreementDeck(templateId: tpl.id);
      expect(deck.slides, hasLength(1), reason: tpl.id);
      final texts = deck.slides[0].elements.map((e) => e.text).whereType<String>();
      expect(texts, contains('HATI YA NDOA'), reason: tpl.id);
      expect(texts, contains('TAREHE:'), reason: tpl.id);
      expect(texts, contains('NIMETOWA'), reason: tpl.id);
      expect(texts, contains('MASHAHIDI'), reason: tpl.id);
      expect(texts, contains('MWANDISHI'), reason: tpl.id);
      expect(texts, contains('UPANDE WA MKE'), reason: tpl.id);
      expect(texts, contains('UPANDE WA MUME'), reason: tpl.id);
    }
  });
}
