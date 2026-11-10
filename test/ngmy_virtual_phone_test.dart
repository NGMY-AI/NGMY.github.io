import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_virtual_phone.dart';
import 'package:ngmy/ngmy_vphone_link.dart';
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
    await t.tap(find.byKey(const Key('vphone-wall-3')));
    await t.pump();
    expect(p.wallpaper, 3);
    await t.ensureVisible(find.byKey(const Key('vphone-reset')));
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
