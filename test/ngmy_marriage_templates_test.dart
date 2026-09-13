import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_marriage_agreement_templates.dart';
import 'package:ngmy/ngmy_marriage_paper_art.dart';

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

  test('Hati ya Kuhowa and Kuhowesha keep yesterday’s six papers plus five gold-edge papers', () {
    expect(kNgmyHatiKuhowaTemplates, hasLength(11));
    expect(
      kNgmyHatiKuhowaTemplates.take(6).map((t) => t.id).toList(),
      [
        'kuhowa_elegant_navy',
        'kuhowa_elegant_gold',
        'kuhowa_heritage_gold',
        'kuhowa_heritage_crimson',
        'kuhowa_elegant_emerald',
        'kuhowa_elegant_burgundy',
      ],
    );
    expect(
      kNgmyHatiKuhowaTemplates.skip(6).map((t) => t.id).toList(),
      [
        'kuhowa_gold_filigree',
        'kuhowa_gold_laurel',
        'kuhowa_gold_crest',
        'kuhowa_gold_ribbon',
        'kuhowa_gold_baroque',
      ],
    );
    for (final id in ['kuhowa_kente_sunset', 'kuhowa_rings_ndoa', 'kuhowa_upendo']) {
      expect(kNgmyHatiKuhowaTemplates.any((t) => t.id == id), isFalse, reason: id);
      expect(ngmyHatiKuhowaTemplateById(id), isNotNull, reason: 'older saved $id still opens');
    }
    for (final id in ['kuhowa_gold_filigree', 'kuhowa_gold_laurel', 'kuhowa_gold_crest', 'kuhowa_gold_ribbon', 'kuhowa_gold_baroque']) {
      final tpl = ngmyHatiKuhowaTemplateById(id);
      expect(tpl, isNotNull, reason: id);
      expect(tpl!.layoutKind, NgmyHatiLayoutKind.classic, reason: id);
      expect(ngmyMarriagePaperPng(tpl.paperStyle).length, greaterThan(800), reason: id);
      expect(ngmyBuildHatiKuhowaDeck(templateId: id).slides, hasLength(1), reason: id);
    }
  });

  test('every Hati ya Ndoa template is the screenshot certificate on one page', () {
    for (final tpl in kNgmyMarriagePaperTemplates) {
      final deck = ngmyBuildMarriageAgreementDeck(templateId: tpl.id);
      expect(deck.slides, hasLength(1), reason: tpl.id);
      final texts = deck.slides[0].elements.map((e) => e.text).whereType<String>();
      expect(texts, contains('HATI YA NDOA'), reason: tpl.id);
      expect(texts, contains('TAARIFA ZA WANANDOA'), reason: tpl.id);
      expect(texts, contains('TAMKO LA MAKUBALIANO'), reason: tpl.id);
      expect(texts, contains('MASHAHIDI'), reason: tpl.id);
    }
  });
}
