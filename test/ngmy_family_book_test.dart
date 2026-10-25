import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
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
    expect(find.text('Family Library'), findsOneWidget);
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
