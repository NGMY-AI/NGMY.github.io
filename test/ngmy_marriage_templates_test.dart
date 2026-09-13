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

  test('Hati ya Kuhowa picker keeps previous papers plus ten certificate layouts', () {
    expect(kNgmyHatiKuhowaTemplates, hasLength(21));
    for (final id in ['kuhowa_kente_sunset', 'kuhowa_indigo_mudcloth', 'kuhowa_adinkra_royal', 'kuhowa_nile_lotus', 'kuhowa_shweshwe_ivory']) {
      expect(ngmyHatiKuhowaTemplateById(id), isNotNull, reason: id);
    }
    const ids = [
      'kuhowa_rings_ndoa',
      'kuhowa_couple_taarifa',
      'kuhowa_barua',
      'kuhowa_mahari_pande',
      'kuhowa_sheria_familia',
      'kuhowa_ndoa_pamoja',
      'kuhowa_pete_pana',
      'kuhowa_muhuri',
      'kuhowa_fomu',
      'kuhowa_upendo',
    ];
    for (final id in ids) {
      final tpl = ngmyHatiKuhowaTemplateById(id);
      expect(tpl, isNotNull, reason: id);
      expect(tpl!.layoutKind, isNot(NgmyHatiLayoutKind.classic), reason: id);
      final deck = ngmyBuildHatiKuhowaDeck(templateId: id);
      expect(deck.slides.single.elements.length, greaterThan(10), reason: id);
    }
  });

  test('each new certificate is a single page that matches the sample structure', () {
    const ids = ['rings_ndoa', 'couple_taarifa', 'barua_kuhowesha', 'mahari_pande', 'sheria_familia', 'ndoa_safi', 'pete_pana', 'muhuri_familia', 'fomu_wazi', 'upendo_dhahabu'];
    for (final id in ids) {
      final deck = ngmyBuildMarriageAgreementDeck(templateId: id);
      expect(deck.slides, hasLength(1), reason: id);
      expect(deck.slides[0].elements.length, greaterThan(20), reason: id);
    }
    final classic = ngmyBuildMarriageAgreementDeck(templateId: 'heritage_gold');
    expect(classic.slides, hasLength(2));
  });
}
