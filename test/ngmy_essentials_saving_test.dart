import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_business_contacts.dart';
import 'package:ngmy/ngmy_business_essentials.dart';
import 'package:ngmy/ngmy_business_notes.dart';
import 'package:ngmy/ngmy_hub_form_ui.dart';
import 'package:ngmy/ngmy_local_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

// Business Essentials: what people type is kept on this device and never disappears.

const _email = 'owner@ngmy.org';
String _notesKey(String email) => 'ngmy_business_notes_v1_${email.toLowerCase().trim().hashCode.abs()}';

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('the local store keeps what is written and gives it back', () async {
    expect(await ngmyLocalRead('k'), isNull);
    expect(await ngmyLocalWrite('k', 'hello'), isTrue);
    expect(await ngmyLocalRead('k'), 'hello');
  });

  test('a note that is saved comes back', () async {
    await ngmyImportBusinessNotes(userEmail: _email, items: [NgmyBusinessNote(title: 'Groceries', body: 'milk, bread')]);
    final back = await ngmyExportBusinessNotes(userEmail: _email);
    expect(back.map((n) => n.title), ['Groceries']);
    expect(back.single.body, 'milk, bread');
  });

  test('one damaged note can no longer make every other note disappear', () async {
    final good = NgmyBusinessNote(title: 'Keep me', body: 'important').toJson();
    final damaged = {'id': 'bad', 'title': 'x', 'textAnims': 5}; // cannot be read
    SharedPreferences.setMockInitialValues({'flutter.${_notesKey(_email)}': jsonEncode([good, damaged])});
    final read = await ngmyExportBusinessNotes(userEmail: _email);
    expect(read.map((n) => n.title), ['Keep me'], reason: 'the good note is read; the damaged one is skipped, not everything');
    // Saving a new note afterwards keeps the old one (before, an empty read was saved back and wiped them all).
    await ngmyImportBusinessNotes(userEmail: _email, items: [NgmyBusinessNote(title: 'New one')]);
    final after = await ngmyExportBusinessNotes(userEmail: _email);
    expect(after.map((n) => n.title).toSet(), {'Keep me', 'New one'});
  });

  test('a contact that is saved comes back', () async {
    await ngmyImportBusinessContacts(userEmail: _email, items: [NgmyBusinessContact(name: 'Amina', company: 'NGMY', phone: '5551234567', email: 'a@x.com', category: 'Client')]);
    final back = await ngmyExportBusinessContacts(userEmail: _email);
    expect(back.map((c) => c.name), ['Amina']);
  });

  testWidgets('the framed title sits in the middle', (t) async {
    t.view.physicalSize = const Size(800, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(
      home: Scaffold(body: Row(children: [SizedBox(width: 48), Expanded(child: NgmyFramedTitle(title: 'Notes', subtitle: 'Write it down')), SizedBox(width: 48)])),
    ));
    final r = t.getRect(find.byKey(const Key('ngmy-framed-title')));
    expect((r.center.dx - 200).abs(), lessThan(2));
    expect(find.text('Notes'), findsOneWidget);
    expect(find.text('Write it down'), findsOneWidget);
  });

  testWidgets('Business Contacts opens with its name in a frame at the top', (t) async {
    t.view.physicalSize = const Size(800, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: Builder(builder: (ctx) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyBusinessContactsDialog(ctx, userEmail: _email), child: const Text('go')))))));
    await t.tap(find.text('go'));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byKey(const Key('ngmy-framed-title')), findsOneWidget);
    expect(find.textContaining('Business Contacts'), findsWidgets);
    expect(t.getRect(find.byKey(const Key('ngmy-framed-title'))).top, lessThan(80));
  });

  testWidgets('Business Essentials: the tiles start below the top frame and never go up into it, even when scrolled', (t) async {
    t.view.physicalSize = const Size(860, 1860);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: Builder(builder: (ctx) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyBusinessEssentialsHub(ctx, userEmail: _email), child: const Text('go')))))));
    await t.tap(find.text('go'));
    for (var i = 0; i < 40 && find.text('Notes').evaluate().isEmpty; i++) {
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await t.pump(const Duration(milliseconds: 100));
    }
    final frame = t.getRect(find.byKey(const Key('ngmy-framed-title')));
    final notes = find.text('Notes').first;
    expect(t.getRect(notes).top, greaterThan(frame.bottom), reason: 'the first tile is under the frame');
    final grid = find.byType(GridView).first;
    final gridTop = t.getRect(grid).top;
    expect(gridTop, greaterThan(frame.bottom), reason: 'the scrolling area itself starts below the frame, so nothing can scroll into it');
    await t.drag(grid, const Offset(0, -400));
    await t.pump(const Duration(milliseconds: 300));
    final frameAfter = t.getRect(find.byKey(const Key('ngmy-framed-title')));
    expect(t.getRect(grid).top, greaterThan(frameAfter.bottom), reason: 'after scrolling the tiles still stay below the frame');
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 2));
  });
}
