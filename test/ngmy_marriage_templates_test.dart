import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_marriage_agreement_templates.dart';
import 'package:ngmy/ngmy_marriage_paper_art.dart';

void main() {
  test('marriage documents now offer nine unique paper templates', () {
    expect(kNgmyMarriagePaperTemplates, hasLength(9));
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
      },
    );
  });

  test('new African and ceremonial templates render their own paper art', () {
    const ids = ['kente_sunset', 'indigo_mudcloth', 'adinkra_royal', 'nile_lotus', 'shweshwe_ivory'];
    for (final id in ids) {
      final tpl = ngmyMarriageTemplateById(id);
      expect(tpl, isNotNull, reason: id);
      final png = ngmyMarriagePaperPng(tpl!.paperStyle);
      expect(png.length, greaterThan(800), reason: id);
    }
  });
}
