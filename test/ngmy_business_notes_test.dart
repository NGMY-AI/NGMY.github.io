import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_business_notes.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  testWidgets('a long note is saved in full and is there when you come back', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(430, 932);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: Builder(builder: (c) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyBusinessNotesDialog(c, userEmail: 'a@b.c'), child: const Text('open')))))));
    await t.tap(find.text('open'));
    await t.pump(const Duration(milliseconds: 600));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('Notes'), findsOneWidget);
    await t.tap(find.text('New note'));
    await t.pump(const Duration(milliseconds: 600));
    // Pick the first background tile on the picker.
    final tiles = t.widgetList<Text>(find.byType(Text)).where((w) => w.style?.fontSize == 13 && w.style?.fontWeight == FontWeight.w800).toList();
    expect(tiles, isNotEmpty);
    await t.tap(find.text(tiles.first.data!));
    await t.pump(const Duration(milliseconds: 700));
    final long = List.generate(400, (i) => 'Sentence number $i of a very long paragraph.').join(' ');
    final body = find.byType(TextField).at(1);
    await t.enterText(body, long);
    for (var i = 0; i < 6; i++) {
      await t.pump(const Duration(milliseconds: 300));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
    }
    await t.tap(find.byIcon(Icons.arrow_back_ios_new_rounded).first);
    for (var i = 0; i < 6; i++) {
      await t.pump(const Duration(milliseconds: 300));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    }
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString('ngmy_business_notes_v1_a@b.c') ?? prefs.getKeys().map(prefs.getString).whereType<String>().firstWhere((s) => s.contains('Sentence number'), orElse: () => '');
    expect(saved, contains('Sentence number 399'));
    expect(t.takeException(), isNull);
  });
}
