import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_business_notes.dart';
import 'package:shared_preferences/shared_preferences.dart';

bool _hasMark(InlineSpan s) {
  var found = false;
  s.visitChildren((c) {
    if (c is TextSpan && c.style?.backgroundColor != null) found = true;
    return true;
  });
  return found;
}

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
    expect(find.text('Search notes'), findsOneWidget);
    expect(find.text('Trash'), findsOneWidget);
    await t.tap(find.text('New note'));
    await t.pump(const Duration(milliseconds: 600));
    // Pick the first background tile on the picker.
    final tiles = t.widgetList<Text>(find.byType(Text)).where((w) => w.style?.fontSize == 13 && w.style?.fontWeight == FontWeight.w800).toList();
    expect(tiles, isNotEmpty);
    await t.tap(find.text(tiles.first.data!));
    await t.pump(const Duration(milliseconds: 700));
    final long = List.generate(400, (i) => 'Sentence number $i of a very long paragraph.').join(' ');
    final body = find.byType(TextField).last;
    await t.enterText(body, long);
    for (var i = 0; i < 6; i++) {
      await t.pump(const Duration(milliseconds: 300));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
    }
    await t.tap(find.byIcon(Icons.arrow_back_ios_new_rounded).last);
    for (var i = 0; i < 6; i++) {
      await t.pump(const Duration(milliseconds: 300));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    }
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString('ngmy_business_notes_v1_a@b.c') ?? prefs.getKeys().map(prefs.getString).whereType<String>().firstWhere((s) => s.contains('Sentence number'), orElse: () => '');
    expect(saved, contains('Sentence number 399'));
    await t.enterText(find.byType(TextField).first, 'number 7');
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byType(Text), findsWidgets);
    expect(t.widgetList<RichText>(find.byType(RichText)).any((r) => _hasMark(r.text)), isTrue);
    expect(t.takeException(), isNull);
  });

  testWidgets('drag one note onto another to stack them into a book', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(430, 932);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.runAsync(() => ngmyImportBusinessNotes(userEmail: 'a@b.c', items: [NgmyBusinessNote(id: 'n1', title: 'Alpha', body: 'first'), NgmyBusinessNote(id: 'n2', title: 'Beta', body: 'second')]));
    await t.pumpWidget(MaterialApp(home: Builder(builder: (c) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyBusinessNotesDialog(c, userEmail: 'a@b.c'), child: const Text('open')))))));
    await t.tap(find.text('open'));
    await t.pump(const Duration(milliseconds: 600));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('Alpha'), findsOneWidget);
    expect(find.text('Beta'), findsOneWidget);
    final g = await t.startGesture(t.getCenter(find.text('Alpha')));
    await t.pump(const Duration(milliseconds: 500));
    await g.moveTo(t.getCenter(find.text('Beta')) + const Offset(30, 10));
    await t.pump(const Duration(milliseconds: 200));
    await g.moveBy(const Offset(2, 2));
    await t.pump(const Duration(milliseconds: 200));
    await g.up();
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('Name your book'), findsOneWidget);
    await t.tap(find.text('Save'));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('My book'), findsOneWidget);
    expect(find.text('2 notes'), findsOneWidget);
    expect(t.takeException(), isNull);
  });
}
