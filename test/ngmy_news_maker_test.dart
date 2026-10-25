import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_master_knowledge.dart';
import 'package:ngmy/ngmy_news_ai.dart';
import 'package:ngmy/ngmy_news_maker.dart';
import 'package:ngmy/ngmy_news_paper.dart';
import 'package:ngmy/ngmy_quote_maker.dart';

void main() {
  testWidgets('the news maker writes a page, takes a change from the chat and keeps the watermarks', (t) async {
    t.view.physicalSize = const Size(860, 4400);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    var asked = '';
    await t.pumpWidget(MaterialApp(
      home: NgmyNewsMakerScreen(
        writer: ({required template, photo, request = '', paper}) async => const NgmyNewsDoc(paper: 'The NGMY Gazette', headline: 'Big News From NGMY', body: ['KB PABLO QR built NGMY.']),
        editor: ({required doc, required template, required instruction, photo, history = const []}) async {
          asked = instruction;
          return NgmyNewsEdit(message: 'Shortened it.', doc: doc.copyWith(headline: 'Short News'), changed: true);
        },
      ),
    ));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('Write my newspaper'), findsOneWidget);
    await t.tap(find.ancestor(of: find.text('Write my newspaper'), matching: find.byType(GestureDetector)).first);
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('BIG NEWS FROM NGMY'), findsOneWidget);
    expect(find.text('TALK TO THE EDITOR'), findsOneWidget);
    await t.enterText(find.byType(TextField).last, 'make the headline shorter');
    await t.tap(find.byIcon(Icons.send_rounded));
    await t.pump(const Duration(milliseconds: 300));
    expect(asked, 'make the headline shorter');
    expect(find.text('SHORT NEWS'), findsOneWidget);
    expect(find.text('Shortened it.'), findsOneWidget);
    expect(find.text('CREATED BY NGMY.ORG'), findsOneWidget);
    expect(t.takeException(), isNull);
  });

  testWidgets('NGMY Quotes has a News tab', (t) async {
    t.view.physicalSize = const Size(860, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: ngmyQuoteMakerForTest()));
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.text('News'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('Make a newspaper'), findsOneWidget);
    expect(t.takeException(), isNull);
  });

  test('a change from the AI only touches what it names', () {
    const doc = NgmyNewsDoc(headline: 'Old', subhead: 'Sub', body: ['One', 'Two']);
    final next = doc.applyJson({'headline': 'New'});
    expect(next.headline, 'New');
    expect(next.subhead, 'Sub');
    expect(next.body, ['One', 'Two']);
  });

  test('the AI knowledge names the CEO and every studio and creator tool in the app', () {
    final k = ngmyMasterKnowledge().toLowerCase();
    expect(k, contains('kb pablo qr'));
    expect(k, contains('founder, president and ceo'));
    final studios = File('lib/ngmy_core_protocol_sims.dart').readAsStringSync();
    final missing = <String>[];
    for (final m in RegExp(r"_StudioDef\('([A-Z ]+)'").allMatches(studios)) {
      final name = m.group(1)!.toLowerCase();
      if (!k.contains(name)) missing.add(name);
    }
    final hub = File('lib/ngmy_studio_hub.dart').readAsStringSync();
    for (final m in RegExp(r"(?<![a-z])title: '([^']+)'").allMatches(hub)) {
      final name = m.group(1)!.toLowerCase();
      if (!k.contains(name)) missing.add(name);
    }
    expect(missing, isEmpty, reason: 'Add these to kNgmyFeatureFacts in lib/ngmy_master_knowledge.dart so the news AI can write about them: $missing');
  });
}
