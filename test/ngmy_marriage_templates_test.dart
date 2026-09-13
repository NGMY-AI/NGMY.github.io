import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_marriage_agreement_templates.dart';
import 'package:ngmy/ngmy_marriage_paper_art.dart';

void main() {
  test('marriage documents keep the original four plus ten certificate layouts', () {
    expect(kNgmyMarriagePaperTemplates, hasLength(14));
    expect(
      kNgmyMarriagePaperTemplates.map((t) => t.id).toSet(),
      {
        'heritage_gold',
        'heritage_crimson',
        'elegant_navy',
        'elegant_gold',
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

  test('retired cloth templates no longer exist and new certificates render paper', () {
    const retired = ['kente_sunset', 'indigo_mudcloth', 'adinkra_royal', 'nile_lotus', 'shweshwe_ivory'];
    for (final id in retired) {
      expect(kNgmyMarriagePaperTemplates.any((t) => t.id == id), isFalse, reason: id);
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

  test('Hati ya Kuhowa picker now includes ten certificate layouts', () {
    expect(kNgmyHatiKuhowaTemplates, hasLength(16));
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

  test('each new certificate builds a two-page deck with unique chrome', () {
    const ids = ['rings_ndoa', 'couple_taarifa', 'barua_kuhowesha', 'mahari_pande', 'sheria_familia', 'ndoa_safi', 'pete_pana', 'muhuri_familia', 'fomu_wazi', 'upendo_dhahabu'];
    for (final id in ids) {
      final deck = ngmyBuildMarriageAgreementDeck(templateId: id);
      expect(deck.slides, hasLength(2), reason: id);
      expect(deck.slides[0].elements.length, greaterThan(8), reason: id);
      expect(deck.slides[1].elements.length, greaterThan(8), reason: id);
    }
  });
}
