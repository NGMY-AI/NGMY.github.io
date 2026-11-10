import 'package:flutter/rendering.dart';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_virtual_phone.dart';
import 'package:ngmy/ngmy_vphone_extra.dart';
import 'package:ngmy/ngmy_vphone_link.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<NgmyVirtualPhoneState> open(WidgetTester t, {Size size = const Size(1000, 2000)}) async {
  SharedPreferences.setMockInitialValues({});
  t.view.physicalSize = size;
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
    expect(yt.embed, isNot(contains('enablejsapi')), reason: 'the plain player starts at once, with nothing extra asked of it');
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

  test('every phone is its own: its own device ID, number, place and apps, kept apart from any other', () {
    final a = PhoneData(), b = PhoneData();
    expect(a.deviceId, isNot(b.deviceId));
    expect(a.number, isNot(b.number));
    expect(a.number, startsWith('+1 555 01'));
    a.installed.add('title');
    a.city = 5;
    expect(b.installed, isEmpty);
    expect(b.city, 0);
    final c = PhoneData()..load(jsonDecode(jsonEncode(a.toJson())) as Map<String, dynamic>);
    expect(c.deviceId, a.deviceId);
    expect(c.installed, {'title'});
    expect(c.where.name, kPhoneCities[5].name);
    c.reset();
    expect(c.deviceId, isNot(a.deviceId), reason: 'a reset phone is a new phone');
    expect(c.installed, isEmpty);
  });

  testWidgets('the phone has only Videos, Web, the App Store and Settings of its own: no notes, calculator, clock or files', (t) async {
    final p = await open(t);
    expect([for (final a in kPhoneApps) a.id], ['videos', 'web', 'store', 'settings']);
    await t.tap(find.byKey(const Key('vphone-lock')));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.locked, isFalse);
    for (final id in ['videos', 'web', 'store', 'settings']) {
      expect(find.byKey(Key('vphone-app-$id')), findsOneWidget, reason: id);
    }
    for (final id in ['notes', 'calc', 'clock', 'files', 'contacts', 'messages']) {
      expect(find.byKey(Key('vphone-app-$id')), findsNothing, reason: id);
    }
    await t.tap(find.byKey(const Key('vphone-app-web')));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.app, 'web');
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
    expect(p.wallLink, isNotNull, reason: 'a video opens the four phones');
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
    await t.pumpWidget(const SizedBox());
    await t.pumpWidget(const MaterialApp(home: NgmyVirtualPhonePage()));
    await t.pump(const Duration(milliseconds: 400));
    final p2 = t.state(find.byType(NgmyVirtualPhonePage)) as NgmyVirtualPhoneState;
    expect(p2.saved.single.url, 'https://youtu.be/dQw4w9WgXcQ');
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('Settings: wallpaper and place can be changed, and Reset wipes only the virtual phone', (t) async {
    final p = await open(t);
    p.data.installed.add('title');
    p.openApp('settings');
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.byKey(const Key('vphone-wall-3')));
    await t.pump();
    expect(p.wallpaper, 3);
    await t.dragUntilVisible(find.byKey(const Key('vphone-city')), find.byType(ListView).last, const Offset(0, -150));
    expect(find.text(p.data.deviceId), findsOneWidget);
    (t.widget(find.byKey(const Key('vphone-city'))) as DropdownButtonFormField<int>).onChanged!(13);
    await t.pump(const Duration(milliseconds: 300));
    expect(p.data.where.name, 'Tokyo');
    await t.dragUntilVisible(find.byKey(const Key('vphone-reset')), find.byType(ListView).last, const Offset(0, -150));
    await t.ensureVisible(find.byKey(const Key('vphone-reset')));
    await t.tap(find.byKey(const Key('vphone-reset')));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.data.installed, isEmpty);
    expect(p.wallpaper, 0);
    expect(p.locked, isTrue);
  });

  testWidgets('the App Store has NGMY apps: Get puts one on the home screen, it opens inside the phone, and Remove takes it away', (t) async {
    final p = await open(t);
    p.unlock();
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('vphone-app-title')), findsNothing);
    p.openApp('store');
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('Title Animator'), findsOneWidget);
    await t.tap(find.byKey(const Key('vphone-get-title')));
    await t.pump(const Duration(seconds: 3));
    expect(p.data.isInstalled('title'), isTrue);
    p.goHome();
    await t.pump(const Duration(milliseconds: 400));
    expect(find.byKey(const Key('vphone-app-title')), findsOneWidget);
    await t.tap(find.byKey(const Key('vphone-app-title')));
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(milliseconds: 800));
    expect(find.text('Download the animation (GIF)'), findsOneWidget, reason: 'the Title Animator itself runs inside the phone');
    p.openApp('store');
    await t.pump(const Duration(milliseconds: 800));
    await t.tap(find.byKey(const Key('vphone-remove-title')));
    await t.pump(const Duration(milliseconds: 300));
    expect(p.data.isInstalled('title'), isFalse);
    await t.pump(const Duration(seconds: 4));
  });

  testWidgets('every NGMY app opens inside the phone screen without breaking its layout', (t) async {
    final p = await open(t, size: const Size(780, 1500));
    p.unlock();
    for (final a in kNgmyApps) {
      p.data.installed.add(a.def.id);
      p.openApp(a.def.id);
      await t.pump(const Duration(milliseconds: 500));
      await t.pump(const Duration(milliseconds: 500));
      final e = t.takeException();
      expect(e, isNull, reason: '${a.def.label}: $e');
      p.goHome();
      await t.pump(const Duration(milliseconds: 400));
    }
  });

  testWidgets('double-tap the top of the phone: it gets bigger step by step, up to the full screen, then back', (t) async {
    final p = await open(t, size: const Size(780, 1500));
    expect(p.sizeLevel, 0);
    final w0 = t.getSize(find.byKey(const Key('vphone-device'))).width;
    final sizes = [w0];
    for (var i = 1; i <= 3; i++) {
      await t.tap(find.byKey(const Key('vphone-top')));
      await t.pump(const Duration(milliseconds: 60));
      await t.tap(find.byKey(const Key('vphone-top')));
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 400));
      expect(p.sizeLevel, i);
      sizes.add(t.getSize(find.byKey(const Key('vphone-device'))).width);
    }
    expect(sizes[1], greaterThan(sizes[0]));
    expect(sizes[2], greaterThan(sizes[1]));
    expect(sizes[3], greaterThan(sizes[2]));
    expect(sizes[3], closeTo(390, 1), reason: 'the last step fills the whole screen width');
    expect(t.getSize(find.byKey(const Key('vphone-device'))).height, closeTo(750, 1), reason: 'and the whole height');
    // Once more, and it is back to its first size.
    await t.tap(find.byKey(const Key('vphone-top')));
    await t.pump(const Duration(milliseconds: 60));
    await t.tap(find.byKey(const Key('vphone-top')));
    await t.pump(const Duration(milliseconds: 600));
    await t.pump(const Duration(milliseconds: 400));
    expect(p.sizeLevel, 0);
    expect(t.getSize(find.byKey(const Key('vphone-device'))).width, closeTo(w0, 1));
    // One tap does nothing.
    await t.tap(find.byKey(const Key('vphone-top')));
    await t.pump(const Duration(milliseconds: 700));
    expect(p.sizeLevel, 0);
  });
}
