import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_paper_craft_ai.dart';
import 'package:ngmy/ngmy_paper_crafts.dart';
import 'package:ngmy/ngmy_slides_models.dart';

void main() {
  test('Every design has its own number, 1 upward with no gaps', () {
    final numbers = kNgmyPaperCrafts.map((c) => c.number).toList();
    expect(numbers, List.generate(kNgmyPaperCrafts.length, (i) => i + 1));
    expect(ngmyPaperCraftByNumber(1)!.id, 'window_letter');
    expect(ngmyPaperCraftByNumber(26)!.id, 'door_hangers');
    expect(ngmyPaperCraftByNumber(99), isNull);
  });

  test('A request finds its design by number', () {
    expect(ngmyFindPaperCraft('number 5 for my tomato seeds')!.id, 'seed_envelopes');
    expect(ngmyFindPaperCraft('Make #12 for the shop')!.id, 'paper_bag');
    expect(ngmyFindPaperCraft('namba 18 kwa harusi yetu')!.id, 'gift_tags');
    expect(ngmyFindPaperCraft('no. 7 please')!.id, 'gift_box');
    expect(ngmyFindPaperCraft('3')!.id, 'square_envelope');
    expect(ngmyFindPaperCraft('14: thank you to my team')!.id, 'quarter_fold_card');
  });

  test('A request finds its design by name, in English or Swahili', () {
    expect(ngmyFindPaperCraft('write a window envelope letter to my landlord')!.id, 'window_letter');
    expect(ngmyFindPaperCraft('a pop-up card for Asha')!.id, 'pop_up_card');
    expect(ngmyFindPaperCraft('gift tags for the wedding')!.id, 'gift_tags');
    expect(ngmyFindPaperCraft('folded gift tags')!.id, 'folded_tags');
    expect(ngmyFindPaperCraft('a bookmark for my class')!.id, 'bookmarks');
    expect(ngmyFindPaperCraft('Door hanger: do not disturb')!.id, 'door_hangers');
    expect(ngmyFindPaperCraft('nitengenezee mfuko wa zawadi')!.id, 'paper_bag');
    expect(ngmyFindPaperCraft('tri-fold card invitation')!.id, 'tri_fold_card');
    // Only a description: the AI chooses.
    expect(ngmyFindPaperCraft('something nice for my mum'), isNull);
  });

  test('The AI catalog lists every design with its numbered text boxes', () {
    final catalog = ngmyPaperCraftCatalog();
    for (final c in kNgmyPaperCrafts) {
      expect(catalog, contains('#${c.number} ${c.name}'));
      expect(ngmyPaperCraftFields(c), isNotEmpty);
    }
    final letter = ngmyPaperCraftFields(ngmyPaperCraftByNumber(1)!);
    expect(letter.any((f) => f.sample.startsWith('Recipient Name')), isTrue);
    final card = ngmyPaperCraftFields(kNgmyPaperCrafts.firstWhere((c) => c.id == 'quarter_fold_card'));
    expect(card.any((f) => f.upsideDown), isTrue);
    final prompt = ngmyPaperCraftAiPrompt(request: 'number 1', picked: ngmyPaperCraftByNumber(1), language: 'sw');
    expect(prompt, contains('#1 Window Envelope Letter'));
    expect(prompt, isNot(contains('#2 ')));
    expect(prompt, contains('Swahili'));
  });

  test('The answer goes only into text boxes, keeps the lines and turned boxes, and fits', () {
    final answer = ngmyParsePaperCraftAi('```json\n{"design": 14, "palette": "Ocean", "fields": {"1.1": "Asante sana", "1.5": "${'Mpendwa Mama Asha, ' * 150}"}}\n```')!;
    expect(answer.design, 14);
    final craft = ngmyPaperCraftByNumber(answer.design)!;
    final plain = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[2]);
    final deck = ngmyBuildFilledPaperCraft(craft, kNgmyCraftPalettes[2], answer.fields);
    final texts = deck.slides.first.elements.where((e) => e.type == NgmySlideElementType.text).toList();
    final plainTexts = plain.slides.first.elements.where((e) => e.type == NgmySlideElementType.text).toList();
    expect(texts[0].text, 'Asante sana');
    // Same boxes, same places, same turns.
    for (var i = 0; i < texts.length; i++) {
      expect(texts[i].x, plainTexts[i].x);
      expect(texts[i].y, plainTexts[i].y);
      expect(texts[i].rotation, plainTexts[i].rotation);
    }
    expect(deck.slides.first.elements.first.text, plain.slides.first.elements.first.text);
    // The long message was made smaller and trimmed so it stays in its box.
    final long = texts[4];
    expect(long.fontSize, lessThan(plainTexts[4].fontSize));
    expect(long.text.endsWith('...'), isTrue);
    expect(long.text.length, lessThan(150 * 20));
  });
}
