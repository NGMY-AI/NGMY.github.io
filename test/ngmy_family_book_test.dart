import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_ai_language.dart';
import 'package:ngmy/ngmy_book_studio.dart';
import 'package:ngmy/ngmy_family_book_storage.dart';
import 'package:ngmy/ngmy_family_book_ui.dart';
import 'package:shared_preferences/shared_preferences.dart';

const sp = 'C:/Users/appbu/AppData/Local/Temp/claude/C--Users-appbu-StudioProjects-ngmy/57c6e595-d6c4-43c4-9873-33fc75db63b1/scratchpad';

void main() {
  Future<void> openBook(WidgetTester t, {bool withPages = true}) async {
    SharedPreferences.setMockInitialValues({});
    if (withPages) {
      await t.runAsync(() async {
        await saveFamilyBookEntries('a@b.c', 'tree1', [
          FamilyBookEntry(id: '1', title: 'How it all began', body: 'Long ago in a small village by the lake, two families met at a wedding.\n\nThey laughed and danced all night, and nobody knew then how much the day would matter.', updatedAt: DateTime(2026, 1, 2)),
          FamilyBookEntry(id: '2', title: 'The big move', body: 'In the spring we packed everything we owned into one old truck.', updatedAt: DateTime(2026, 2, 3)),
        ]);
      });
    }
    t.view.physicalSize = const Size(860, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: Builder(builder: (c) => Scaffold(body: Center(child: TextButton(onPressed: () => showFamilyBookSheet(c, userEmail: 'a@b.c', treeId: 'tree1', canEdit: true, bookTitle: 'The Smith Family', familyFacts: 'Anna, Bob'), child: const Text('open')))))));
    await t.tap(find.text('open'));
    await t.pump(const Duration(milliseconds: 500));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
    await t.pump(const Duration(milliseconds: 400));
  }

  Future<void> shot(WidgetTester t, String name) async {
    await t.runAsync(() async {
      final ro = t.renderObject(find.byType(RepaintBoundary).last) as RenderRepaintBoundary;
      final img = await ro.toImage(pixelRatio: 1.0);
      final bd = await img.toByteData(format: ui.ImageByteFormat.png);
      File('$sp/$name.png').writeAsBytesSync(bd!.buffer.asUint8List());
    });
  }

  testWidgets('the family book opens on a cover, then turns to its pages', (t) async {
    await openBook(t);
    expect(find.text('The Smith Family'), findsWidgets);
    expect(find.textContaining('Tap the cover'), findsOneWidget);
    await shot(t, 'book_cover');
    await t.tap(find.byTooltip('Next page'));
    await t.pump();
    await t.pump(const Duration(milliseconds: 700));
    expect(find.text('Page 1 of 2'), findsOneWidget);
    await shot(t, 'book_page');
    await t.tap(find.byTooltip('Next page'));
    await t.pump();
    await t.pump(const Duration(milliseconds: 700));
    expect(find.text('Page 2 of 2'), findsOneWidget);
    expect(t.takeException(), isNull);
  });

  testWidgets('an empty family book shows the cover and the ways to start', (t) async {
    await openBook(t, withPages: false);
    expect(find.textContaining('first page'), findsWidgets);
    await shot(t, 'book_empty');
    expect(t.takeException(), isNull);
  });

  test('the book is written in the language the user typed', () {
    expect(ngmyBookLanguageRule('A story about our family'), contains('same language'));
    expect(ngmyBookLanguageRule('Hadithi ya familia yetu pamoja na babu na bibi'), contains('Swahili'));
    expect(ngmyBookLanguageRule('write it in French please'), isNot(contains('Swahili')));
    expect(ngmyBookLanguageRule(''), contains('English'));
    final prompt = ngmyBookAiPrompt(description: 'FACTS in English: Anna, Bob', pages: 3, languageHint: 'Hadithi ya familia yetu pamoja na babu na bibi');
    expect(prompt, contains('Swahili'));
  });

  testWidgets('the framed header keeps a very long name on one line, and the AI menu offers languages', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(860, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    const longName = 'The Very Long Family Name Of The Descendants Of Ikungu Ele And Ekama Pele Of The Great Lake';
    await t.pumpWidget(MaterialApp(home: Builder(builder: (c) => Scaffold(body: TextButton(onPressed: () => showFamilyBookSheet(c, userEmail: 'a@b.c', treeId: 'tree2', canEdit: true, bookTitle: longName, familyFacts: 'Anna, Bob'), child: const Text('open'))))));
    await t.tap(find.text('open'));
    await t.pump(const Duration(milliseconds: 500));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
    await t.pump(const Duration(milliseconds: 400));
    final header = t.widget<Text>(find.text(longName).first);
    expect(header.maxLines, 1);
    expect(find.text('AI'), findsOneWidget);
    expect(find.text('Cover'), findsOneWidget);
    await t.tap(find.text('AI'));
    await t.pump(const Duration(milliseconds: 400));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('Write new pages'), findsOneWidget);
    expect(t.takeException(), isNull);
  });

  Future<void> menuFor(WidgetTester t, String treeId, String body) async {
    SharedPreferences.setMockInitialValues({});
    await t.runAsync(() async {
      await saveFamilyBookEntries('a@b.c', treeId, [FamilyBookEntry(id: '1', title: 'Start', body: body, updatedAt: DateTime(2026, 1, 2))]);
    });
    t.view.physicalSize = const Size(860, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: Builder(builder: (c) => Scaffold(body: TextButton(onPressed: () => showFamilyBookSheet(c, userEmail: 'a@b.c', treeId: treeId, canEdit: true, bookTitle: 'Fam', familyFacts: 'Anna, Bob'), child: const Text('open'))))));
    await t.tap(find.text('open'));
    await t.pump(const Duration(milliseconds: 500));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.text('AI'));
    await t.pump(const Duration(milliseconds: 400));
    await t.pump(const Duration(milliseconds: 400));
  }

  testWidgets('an English book is only offered Swahili, and a Swahili book only English', (t) async {
    await menuFor(t, 'en1', 'The story of our family began in a small village, and the people of the village were kind to them. They had a farm by the lake and it was a good life for all of them.');
    expect(find.text('Translate my book to Swahili'), findsOneWidget);
    expect(find.text('Translate my book to English'), findsNothing);
    expect(find.text('Your book is in English.'), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await menuFor(t, 'sw1', 'Hadithi ya familia yetu ilianza katika kijiji kidogo, na watu wa kijiji walikuwa wema sana kwa wazazi wetu. Walikuwa na shamba karibu na ziwa na maisha yalikuwa mazuri kwa wote.');
    expect(find.text('Translate my book to English'), findsOneWidget);
    expect(find.text('Translate my book to Swahili'), findsNothing);
    expect(find.text('Your book is in Swahili.'), findsOneWidget);
    expect(t.takeException(), isNull);
  });

  test('Swahili is written the way people say it, and cover settings from the AI are checked', () {
    expect(ngmyBookLanguageRule('write it in Swahili'), contains('ukoo'));
    expect(ngmyBookLanguageRule('A story about our family'), contains('SWAHILI THAT REAL SWAHILI SPEAKERS USE'));
    expect(kNgmySwahiliStyleGuide, contains('NEVER translate word for word'));
    final c = const FamilyBookCover().applyAi(
      {'style': 'midnight', 'foil': 'silver', 'frame': 'corners', 'texture': 'stars', 'position': 'top', 'titleSize': 99, 'emblem': 3, 'ribbon': false, 'author': 'The Smiths', 'bogus': 1, 'frame2': 'x'},
      styleIds: const ['leather', 'midnight'],
    );
    expect(c.style, 'midnight');
    expect(c.foil, 'silver');
    expect(c.silver, isTrue);
    expect(c.frame, 'corners');
    expect(c.texture, 'stars');
    expect(c.position, 'top');
    expect(c.titleSize, 36);
    expect(c.emblem, 3);
    expect(c.ribbon, isFalse);
    expect(c.author, 'The Smiths');
    // Anything invalid is ignored.
    final d = c.applyAi({'style': 'nope', 'foil': 'neon', 'frame': 'wavy', 'emblem': 99}, styleIds: const ['leather', 'midnight']);
    expect(d.style, 'midnight');
    expect(d.foil, 'silver');
    expect(d.frame, 'corners');
    expect(d.emblem, 3);
    // An old saved cover (silver on/off) still opens.
    expect(FamilyBookCover.fromJson({'style': 'forest', 'silver': true}).foil, 'silver');
    expect(FamilyBookCover.fromJson(c.toJson()).texture, 'stars');
  });

  testWidgets('the AI menu has a place to say what to fix, with a choice of page, book or cover', (t) async {
    await menuFor(t, 'fix1', 'The story of our family began in a small village, and the people of the village were kind to them.');
    expect(find.text('Fix or change something'), findsOneWidget);
    await t.tap(find.text('Fix or change something'));
    await t.pump(const Duration(milliseconds: 400));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('Tell the AI what to fix'), findsOneWidget);
    expect(find.text('The whole book'), findsOneWidget);
    expect(find.text('The cover design'), findsOneWidget);
    await t.tap(find.text('The cover design'));
    await t.pump();
    expect(find.text('Make the cover dark blue with silver letters'), findsOneWidget);
    expect(t.takeException(), isNull);
  });

  test('any Swahili word makes an advisor answer in Swahili', () {
    expect(ngmyHasSwahiliWord('Hey, habari my friend'), isTrue);
    expect(ngmyHasSwahiliWord('can you help me, asante'), isTrue);
    expect(ngmyHasSwahiliWord('I want to know about my balance'), isFalse);
    expect(kNgmySwahiliReplyRule, contains('Swahili'));
    expect(ngmyDetectTextLanguage('The cat is on the mat and the dog was in the garden with her'), 'en');
    expect(ngmyDetectTextLanguage('Mtoto wa familia ni mzuri sana na watu wa kijiji wana furaha kwa kila siku'), 'sw');
    expect(ngmyDetectTextLanguage('hi'), isNull);
  });

  testWidgets('the owner can design the cover and it is saved', (t) async {
    await openBook(t);
    await t.tap(find.text('Cover'));
    await t.pump(const Duration(milliseconds: 400));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('Design your cover'), findsOneWidget);
    await t.tap(find.text('Midnight'));
    await t.pump();
    await t.scrollUntilVisible(find.text('Save the cover'), 300, scrollable: find.descendant(of: find.byType(BottomSheet), matching: find.byType(Scrollable)).first);
    await t.tap(find.text('Save the cover'));
    await t.pump(const Duration(milliseconds: 400));
    await t.pump(const Duration(milliseconds: 400));
    final saved = await t.runAsync(() => loadFamilyBookCover('a@b.c', 'tree1'));
    expect(saved!.style, 'midnight');
    expect(t.takeException(), isNull);
  });

  test('the AI book can be read even with real line breaks inside its text', () {
    const reply = '```json\n{"title":"Our Story","subtitle":"Long ago","cover_template":"vintage","cover_query":"village","chapters":[{"title":"Start","body":"First paragraph.\n\nSecond paragraph.","image_query":"lake"}]}\n```';
    final doc = ngmyParseBookAi(reply);
    expect(doc, isNotNull);
    expect(doc!.chapters.single.body, contains('Second paragraph.'));
    expect(doc.chapters.single.body, contains('\n'));
    expect(ngmyEscapeJsonStrings('{"a":"x\ny"}'), r'{"a":"x\ny"}');
    expect(kNgmyBookAiMaxPages, 100);
  });
}
