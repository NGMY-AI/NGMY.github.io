import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_virtual_phone.dart';
import 'package:ngmy/ngmy_vphone_link.dart';
import 'package:ngmy/ngmy_vphone_extra.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<NgmyVirtualPhoneState> open(WidgetTester t) async {
  SharedPreferences.setMockInitialValues({});
  t.view.physicalSize = const Size(1000, 2000);
  t.view.devicePixelRatio = 2.0;
  addTearDown(t.view.reset);
  await t.pumpWidget(const MaterialApp(home: NgmyVirtualPhonePage()));
  await t.pump(const Duration(milliseconds: 100));
  await t.pump(const Duration(milliseconds: 300));
  return t.state(find.byType(NgmyVirtualPhonePage)) as NgmyVirtualPhoneState;
}

void main() {
  phoneExtraTests();
  test('every kind of video link is understood', () {
    final yt = parseVideoLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    expect(yt.kind, VPhoneLinkKind.youtube);
    expect(yt.embed, contains('youtube-nocookie.com/embed/dQw4w9WgXcQ'));
    expect(parseVideoLink('https://youtu.be/dQw4w9WgXcQ?t=42').embed, contains('start=42'));
    expect(parseVideoLink('youtube.com/shorts/abcDEF12345').kind, VPhoneLinkKind.youtube);
    expect(parseVideoLink('https://www.youtube.com/embed/dQw4w9WgXcQ').kind, VPhoneLinkKind.youtube);
    final vi = parseVideoLink('https://vimeo.com/76979871');
    expect(vi.kind, VPhoneLinkKind.vimeo);
    expect(vi.embed, contains('player.vimeo.com/video/76979871'));
    final f = parseVideoLink('https://example.com/media/My%20Clip.mp4?x=1');
    expect(f.kind, VPhoneLinkKind.file);
    expect(f.title, 'My Clip.mp4');
    expect(parseVideoLink('example.com/a.webm').url, 'https://example.com/a.webm');
    expect(parseVideoLink('https://example.com/stream/live.m3u8').kind, VPhoneLinkKind.file);
    expect(parseVideoLink('https://example.com/some/page').kind, VPhoneLinkKind.page);
    for (final bad in ['', '   ', 'hello', 'two words.com', 'ftp://x.com/a.mp4', 'https://']) {
      expect(parseVideoLink(bad).playable, isFalse, reason: bad);
    }
  });

  test('the calculator works', () {
    final c = PhoneCalc();
    for (final k in ['1', '2', '+', '3', '=']) {
      c.press(k);
    }
    expect(c.shown, '15');
    c.press('×');
    c.press('2');
    c.press('=');
    expect(c.shown, '30');
    c.press('C');
    for (final k in ['7', '÷', '0', '=']) {
      c.press(k);
    }
    expect(c.shown, 'Error');
    c.press('C');
    for (final k in ['1', '÷', '4', '=']) {
      c.press(k);
    }
    expect(c.shown, '0.25');
    c.press('C');
    for (final k in ['9', '−', '2', '×', '3', '=']) {
      c.press(k);
    }
    expect(c.shown, '21', reason: 'it works left to right like a phone calculator');
    c.press('±');
    expect(c.shown, '-21');
    c.press('%');
    expect(c.shown, '-0.21');
  });

  testWidgets('the phone starts locked, unlocks, shows its apps, and goes home', (t) async {
    final p = await open(t);
    expect(find.byKey(const Key('vphone-lock')), findsOneWidget);
    expect(p.locked, isTrue);
    await t.tap(find.byKey(const Key('vphone-lock')));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.locked, isFalse);
    for (final a in kPhoneApps) {
      expect(find.byKey(Key('vphone-app-${a.id}')), findsOneWidget, reason: a.label);
    }
    await t.tap(find.byKey(const Key('vphone-app-calc')));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.app, 'calc');
    await t.tap(find.byKey(const Key('vphone-calc-7')));
    await t.tap(find.byKey(const Key('vphone-calc-×')));
    await t.tap(find.byKey(const Key('vphone-calc-6')));
    await t.tap(find.byKey(const Key('vphone-calc-=')));
    await t.pump();
    expect(find.text('42'), findsOneWidget);
    await t.tap(find.byKey(const Key('vphone-home-bar')));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.app, isNull);
  });

  testWidgets('Videos: paste a link and it plays, save it, and it is still there after the phone is opened again', (t) async {
    final p = await open(t);
    p.openApp('videos');
    await t.pump(const Duration(milliseconds: 400));
    await t.enterText(find.byKey(const Key('vphone-link-field')), 'not a link');
    await t.tap(find.byKey(const Key('vphone-play')));
    await t.pump();
    expect(find.byKey(const Key('vphone-problem')), findsOneWidget);
    await t.enterText(find.byKey(const Key('vphone-link-field')), 'https://youtu.be/dQw4w9WgXcQ');
    await t.tap(find.byKey(const Key('vphone-play')));
    await t.pump(const Duration(milliseconds: 700));
    await t.tap(find.byKey(const Key('wall-one')));
    await t.pump(const Duration(milliseconds: 800));
    expect(p.wallLink, isNull);
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('vphone-problem')), findsNothing);
    expect(find.text('YouTube video dQw4w9WgXcQ'), findsWidgets);
    expect(p.recent.length, 1);
    await t.tap(find.byKey(const Key('vphone-save')));
    await t.pump(const Duration(milliseconds: 300));
    expect(p.saved.length, 1);
    expect(find.text('Saved to Videos'), findsOneWidget);
    await t.pump(const Duration(seconds: 4));
    // A new phone window reads what was saved.
    await t.pumpWidget(const SizedBox());
    await t.pumpWidget(const MaterialApp(home: NgmyVirtualPhonePage()));
    await t.pump(const Duration(milliseconds: 400));
    final p2 = t.state(find.byType(NgmyVirtualPhonePage)) as NgmyVirtualPhoneState;
    expect(p2.saved.single.url, 'https://youtu.be/dQw4w9WgXcQ');
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('Notes are kept, wallpaper can be changed, and Reset wipes only the virtual phone', (t) async {
    final p = await open(t);
    p.openApp('notes');
    await t.pump(const Duration(milliseconds: 400));
    await t.enterText(find.byKey(const Key('vphone-note-field')), 'Buy bread');
    await t.tap(find.byKey(const Key('vphone-note-add')));
    await t.pump();
    expect(p.notes, ['Buy bread']);
    expect(find.text('Buy bread'), findsOneWidget);
    p.openApp('settings');
    await t.pump(const Duration(milliseconds: 400));
    await t.dragUntilVisible(find.byKey(const Key('vphone-wall-3')), find.byType(ListView).last, const Offset(0, -150));
    await t.tap(find.byKey(const Key('vphone-wall-3')));
    await t.pump();
    expect(p.wallpaper, 3);
    await t.dragUntilVisible(find.byKey(const Key('vphone-reset')), find.byType(ListView).last, const Offset(0, -150));
    await t.tap(find.byKey(const Key('vphone-reset')));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.notes, isEmpty);
    expect(p.wallpaper, 0);
    expect(p.locked, isTrue);
  });

  testWidgets('Clock: the stopwatch runs', (t) async {
    final p = await open(t);
    p.openApp('clock');
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.byKey(const Key('vphone-sw-toggle')));
    await t.pump(const Duration(milliseconds: 1500));
    final txt = (t.widget(find.byKey(const Key('vphone-stopwatch'))) as Text).data!;
    expect(txt, isNotEmpty);
    await t.tap(find.byKey(const Key('vphone-sw-toggle')));
    await t.pump(const Duration(milliseconds: 200));
  });
}

void phoneExtraTests() {
  test('every phone is its own: its own device ID, number, place, apps and files, kept apart from any other', () {
    final a = PhoneData(), b = PhoneData();
    expect(a.deviceId, isNot(b.deviceId));
    expect(a.number, isNot(b.number));
    expect(a.number, startsWith('+1 555 01'));
    a.installed.add('maps');
    a.city = 5;
    a.files.add(PhoneFile('x.txt', 'text/plain', base64Encode([1, 2, 3]), 3, DateTime(2026, 1, 1)));
    a.contacts.add(PhoneContact('Ama', '+255 700 000 000'));
    expect(b.installed, isEmpty);
    expect(b.files, isEmpty);
    expect(b.city, 0);
    // What one phone keeps can be read back by the same phone only.
    final c = PhoneData()..load(jsonDecode(jsonEncode(a.toJson())) as Map<String, dynamic>);
    expect(c.deviceId, a.deviceId);
    expect(c.installed, {'maps'});
    expect(c.where.name, kPhoneCities[5].name);
    expect(c.files.single.bytes, [1, 2, 3]);
    expect(c.contacts.single.name, 'Ama');
    c.reset();
    expect(c.deviceId, isNot(a.deviceId), reason: 'a reset phone is a new phone');
    expect(c.files, isEmpty);
  });

  test('noughts and crosses: the phone blocks and wins, and a full board is a draw', () {
    final g = TicTacToe();
    g.play(0);
    expect(g.cells[4], 'O');
    g.play(1);
    expect(g.cells[2], 'O', reason: 'it blocked 0-1-2');
    g.play(3);
    expect(g.cells[6], 'O', reason: 'it blocked 0-3-6');
    expect(g.winner == null || g.winner == 'O', isTrue);
    for (var i = 0; i < 9 && !g.over; i++) {
      g.play(i);
    }
    expect(g.over, isTrue);
    expect(g.winner, isNot('X'), reason: 'the phone never loses this way');
  });

  testWidgets('App Store: Get installs an app on the home screen, it is kept, and Remove takes it away', (t) async {
    final p = await open(t);
    p.unlock();
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('vphone-app-maps')), findsNothing);
    p.openApp('store');
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.byKey(const Key('vphone-get-maps')));
    await t.pump(const Duration(seconds: 3));
    expect(p.data.isInstalled('maps'), isTrue);
    expect(find.byKey(const Key('vphone-open-maps')), findsOneWidget);
    p.goHome();
    await t.pump(const Duration(milliseconds: 400));
    expect(find.byKey(const Key('vphone-app-maps')), findsOneWidget);
    p.openApp('maps');
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('This phone is in Dar es Salaam, Tanzania'), findsOneWidget);
    p.openApp('store');
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.byKey(const Key('vphone-remove-maps')));
    await t.pump(const Duration(milliseconds: 300));
    expect(p.data.isInstalled('maps'), isFalse);
    await t.pump(const Duration(seconds: 4));
  });

  testWidgets('Contacts and Messages keep what is written, and Settings can move the phone to another city', (t) async {
    final p = await open(t);
    p.data.installed.addAll(['contacts', 'messages']);
    p.openApp('contacts');
    await t.pump(const Duration(milliseconds: 400));
    await t.enterText(find.byKey(const Key('vphone-con-name')), 'Ama');
    await t.enterText(find.byKey(const Key('vphone-con-num')), '0712345678');
    await t.tap(find.byKey(const Key('vphone-con-add')));
    await t.pump();
    expect(p.data.contacts.single.name, 'Ama');
    p.openApp('messages');
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.byKey(const Key('vphone-msg-Ama')));
    await t.pump();
    await t.enterText(find.byKey(const Key('vphone-msg-field')), 'Hello Ama');
    await t.tap(find.byKey(const Key('vphone-msg-send')));
    await t.pump();
    expect(p.data.messages.single.text, 'Hello Ama');
    expect(find.text('Hello Ama'), findsOneWidget);
    p.openApp('settings');
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text(p.data.deviceId), findsOneWidget);
    await t.tap(find.byKey(const Key('vphone-city')));
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.text('Tokyo, Japan').last);
    await t.pump(const Duration(milliseconds: 400));
    expect(p.data.where.name, 'Tokyo');
  });

  testWidgets('Files and Photos: a downloaded picture is stored on the phone and shows in Photos', (t) async {
    final p = await open(t);
    p.data.installed.add('photos');
    // A 1 by 1 picture, as if it had been downloaded.
    const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
    p.data.addFile(PhoneFile('dot.png', 'image/png', png, 70, DateTime(2026, 1, 1)));
    p.openApp('files');
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('dot.png'), findsOneWidget);
    await t.enterText(find.byKey(const Key('vphone-dl-field')), 'nonsense');
    await t.tap(find.byKey(const Key('vphone-dl')));
    await t.pump();
    expect(find.text('Paste the link of the file to download.'), findsOneWidget);
    p.openApp('photos');
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(seconds: 1));
    expect(find.byType(Image), findsOneWidget);
    expect(find.textContaining('No pictures yet'), findsNothing);
  });
}
