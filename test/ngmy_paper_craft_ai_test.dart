import 'package:flutter/material.dart';
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

  test('Each design lists the details it needs, and the prompt carries typed details and the ask rule', () {
    for (final c in kNgmyPaperCrafts) {
      expect(ngmyPaperCraftDetails(c), isNotEmpty, reason: c.id);
    }
    final letter = ngmyPaperCraftByNumber(1)!;
    final keys = ngmyPaperCraftDetails(letter).map((d) => d.key).toList();
    expect(keys, containsAll(['to_name', 'to_address', 'from_name', 'from_address']));
    final places = kNgmyPaperCrafts.firstWhere((c) => c.id == 'place_cards');
    expect(ngmyPaperCraftDetails(places).first.label, 'Guest names');
    final prompt = ngmyPaperCraftAiPrompt(request: 'number 1', picked: letter, details: {'to_name': 'Mr Juma'}, allowAsk: true);
    expect(prompt, contains('Recipient name: Mr Juma'));
    expect(prompt, contains('NEEDS: Recipient name, Recipient address'));
    expect(prompt, contains('"ask"'));
    final noAsk = ngmyPaperCraftAiPrompt(request: 'number 1', picked: letter);
    expect(noAsk, contains('Do not ask questions'));
    final asked = ngmyParsePaperCraftAi('{"design": 1, "ask": "What is the address of Mr Juma?"}')!;
    expect(asked.ask, 'What is the address of Mr Juma?');
    expect(asked.fields, isEmpty);
  });

  test('The editor chat changes words and colours in place, never the folds', () {
    final craft = ngmyPaperCraftByNumber(14)!;
    final deck = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[0]);
    final info = ngmyPaperCraftOfDeck(deck)!;
    expect(info.craft.id, 'quarter_fold_card');
    expect(info.palette.name, 'Blush');
    final before = deck.slides.first.elements.where((e) => e.type == NgmySlideElementType.text).map((e) => (e.x, e.y, e.w, e.h, e.rotation)).toList();
    final prompt = ngmyPaperCraftEditPrompt(deck: deck, request: 'change the name to Neema');
    expect(prompt, contains('#14 Quarter-Fold Card'));
    expect(prompt, contains('COLOUR SET NOW: Blush'));
    final answer = ngmyParsePaperCraftAi('{"palette": "Ocean", "fields": {"1.1": "Asante Neema"}, "reply": "Done"}')!;
    expect(ngmyApplyPaperCraftEdit(deck, answer), isTrue);
    final texts = deck.slides.first.elements.where((e) => e.type == NgmySlideElementType.text).toList();
    expect(texts.first.text, 'Asante Neema');
    expect(texts.map((e) => (e.x, e.y, e.w, e.h, e.rotation)).toList(), before);
    final after = ngmyPaperCraftOfDeck(deck)!;
    expect(after.palette.name, 'Ocean');
    expect(texts.first.color, kNgmyCraftPalettes[2].main);
    final fresh = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[2]);
    expect(deck.slides.first.elements.first.text, fresh.slides.first.elements.first.text);
  });

  testWidgets('Choosing a template opens its details and a describe box; skipping opens the blank template', (tester) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    NgmySlideDeck? got;
    await tester.pumpWidget(MaterialApp(
      home: Builder(
        builder: (ctx) => Scaffold(
          body: TextButton(onPressed: () async => got = await showNgmyPaperCraftPicker(ctx), child: const Text('open')),
        ),
      ),
    ));
    await tester.tap(find.text('open'));
    await tester.pumpAndSettle();
    expect(find.byKey(const ValueKey('craft_number_1')), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_ai_open')), findsOneWidget);
    await tester.tap(find.byKey(const ValueKey('craft_window_letter')));
    await tester.pumpAndSettle();
    expect(find.text('#1 Window Envelope Letter'), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_detail_to_name')), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_detail_to_address')), findsOneWidget);
    expect(find.text('DESCRIBE THE PAPER YOU WANT'), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_ai_text')), findsOneWidget);
    await tester.ensureVisible(find.byKey(const ValueKey('craft_ai_skip')));
    await tester.tap(find.byKey(const ValueKey('craft_ai_skip')));
    await tester.pumpAndSettle();
    expect(got, isNotNull);
    expect(ngmyPaperCraftOfDeck(got!)!.craft.id, 'window_letter');
    expect(got!.slides.first.elements.any((e) => e.text.startsWith('Recipient Name')), isTrue);
    expect(tester.takeException(), isNull);
  });
}
