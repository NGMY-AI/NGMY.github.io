import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_virtual_phone.dart';
import 'package:ngmy/ngmy_vphone_link.dart';
import 'package:ngmy/ngmy_vphone_wall.dart';
import 'package:shared_preferences/shared_preferences.dart';

final _yt = parseVideoLink('https://youtu.be/dQw4w9WgXcQ');

Future<NgmyPhoneWallState> openWall(WidgetTester t, {Size size = const Size(780, 1500), VoidCallback? onOne}) async {
  SharedPreferences.setMockInitialValues({});
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 2.0;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(home: Scaffold(backgroundColor: const Color(0xFF0B1020), body: NgmyPhoneWallView(link: _yt, onOneDevice: onOne ?? () {}))));
  await t.pump(const Duration(milliseconds: 100));
  await t.pump(const Duration(milliseconds: 700));
  return t.state(find.byType(NgmyPhoneWallView)) as NgmyPhoneWallState;
}

void main() {
  test('100 phones go four at a time, set after set, and start over when all are done', () {
    final p = PhoneWallPlan();
    expect(p.sets, 25);
    expect(p.phones, [0, 1, 2, 3]);
    final seen = <int>{...p.phones};
    for (var i = 0; i < 24; i++) {
      expect(p.next(), isFalse);
      expect(p.phones.length, 4);
      expect(seen.intersection(p.phones.toSet()), isEmpty, reason: 'a phone is never in two sets in one round');
      seen.addAll(p.phones);
    }
    expect(seen.length, 100);
    expect(p.phones, [96, 97, 98, 99]);
    expect(p.behind, 0);
    expect(p.next(), isTrue, reason: 'all 100 are done: a new round');
    expect(p.phones, [0, 1, 2, 3]);
    expect(p.round, 2);
    expect(PhoneWallPlan().behind, 96);
  });

  test('every phone is its own: 100 different device IDs and numbers', () {
    final phones = makeWallPhones(random: math.Random(7));
    expect(phones.length, 100);
    expect(phones.map((p) => p.deviceId).toSet().length, 100);
    expect(phones.map((p) => p.number).toSet().length, greaterThan(95));
  });


  testWidgets('on a phone that cannot hold four players, the phones of a set take turns (nothing crashes), set after set', (t) async {
    NgmyPhoneWallState.limitForTest = 1;
    addTearDown(() => NgmyPhoneWallState.limitForTest = null);
    final w = await openWall(t);
    expect(w.liveNow, [0], reason: 'only one video at a time');
    expect(w.phones[0].watched, isNotEmpty);
    expect(w.phones[1].watched, isEmpty, reason: 'it has not had its turn yet');
    expect(find.text('Waiting its turn'), findsNWidgets(3));
    w.videoEnded();
    await t.pump(const Duration(milliseconds: 1600));
    expect(w.liveNow, [1]);
    expect(w.plan.set, 0, reason: 'still the first set: the other phones of it have not played yet');
    for (var i = 0; i < 3; i++) {
      w.nextSet();
      await t.pump(const Duration(milliseconds: 100));
    }
    expect(w.plan.set, 1, reason: 'after the fourth phone the next set comes');
    expect(w.liveNow, [4]);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 2));
  });
  testWidgets('four phones fill the room two by two, and the video plays on all four', (t) async {
    final w = await openWall(t);
    for (var i = 0; i < 4; i++) {
      expect(find.byKey(Key('wall-phone-$i')), findsOneWidget);
    }
    expect(find.byKey(const Key('wall-phone-4')), findsNothing);
    final r0 = t.getRect(find.byKey(const Key('wall-phone-0'))), r1 = t.getRect(find.byKey(const Key('wall-phone-1'))), r2 = t.getRect(find.byKey(const Key('wall-phone-2'))), r3 = t.getRect(find.byKey(const Key('wall-phone-3')));
    expect(r0.top, r1.top);
    expect(r2.top, r3.top);
    expect(r0.left, lessThan(r1.left));
    expect(r2.top, greaterThan(r0.bottom - 1));
    // They are wide enough to fill the screen (390 wide): nothing wasted on the sides.
    expect(r0.left, lessThan(14));
    expect(r1.right, greaterThan(390 - 28));
    expect(r1.width, greaterThan(150));
    expect(w.playing, isTrue);
    expect(find.text('Set 1 of 25 · phones 1 to 4 · round 1'), findsOneWidget);
    for (var i = 0; i < 4; i++) {
      expect(w.phones[i].watched, ['https://youtu.be/dQw4w9WgXcQ']);
    }
    expect(w.phones[4].watched, isEmpty);
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('when the video is over the next four come in, set after set until all 100 have played it, then it starts again', (t) async {
    final w = await openWall(t);
    // Said by all four phones at once: the next four come in one time.
    w.videoEnded();
    w.videoEnded();
    w.videoEnded();
    w.videoEnded();
    await t.pump(const Duration(seconds: 2));
    await t.pump(const Duration(seconds: 1));
    expect(w.plan.set, 1);
    expect(find.text('Set 2 of 25 · phones 5 to 8 · round 1'), findsOneWidget);
    expect(find.byKey(const Key('wall-phone-4')), findsOneWidget);
    expect(find.byKey(const Key('wall-phone-0')), findsNothing);
    final reached = <int>{0, 1, 2, 3, ...w.plan.phones};
    for (var s = 2; s < 25; s++) {
      w.videoEnded();
      await t.pump(const Duration(milliseconds: 1600));
      await t.pump(const Duration(milliseconds: 700));
      expect(w.plan.set, s);
      reached.addAll(w.plan.phones);
    }
    expect(reached.length, 100);
    expect(w.phones.every((p) => p.watched.isNotEmpty), isTrue, reason: 'every one of the 100 phones played it');
    w.videoEnded();
    await t.pump(const Duration(milliseconds: 1600));
    await t.pump(const Duration(milliseconds: 700));
    expect(w.plan.set, 0);
    expect(w.plan.round, 2);
    expect(find.text('Set 1 of 25 · phones 1 to 4 · round 2'), findsOneWidget);
    expect(find.byKey(const Key('wall-phone-0')), findsOneWidget);
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('skip and restart work, the phones keep their identity between visits, and One phone goes back', (t) async {
    var back = 0;
    final w = await openWall(t, onOne: () => back++);
    await t.tap(find.byKey(const Key('wall-skip')));
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(milliseconds: 200));
    expect(w.plan.set, 1);
    final id5 = w.phones[4].deviceId;
    await t.tap(find.byKey(const Key('wall-restart')));
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(milliseconds: 200));
    expect(w.plan.set, 0);
    await t.tap(find.byKey(const Key('wall-one')));
    expect(back, 1);
    await t.pumpWidget(const SizedBox());
    await t.pumpWidget(MaterialApp(home: Scaffold(body: NgmyPhoneWallView(link: _yt, onOneDevice: () {}))));
    await t.pump(const Duration(milliseconds: 700));
    final w2 = t.state(find.byType(NgmyPhoneWallView)) as NgmyPhoneWallState;
    expect(w2.phones[4].deviceId, id5);
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('in the Phone, starting a video opens the four phones, and One phone goes back to the single phone', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(780, 1500);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyVirtualPhonePage()));
    await t.pump(const Duration(milliseconds: 500));
    final p = t.state(find.byType(NgmyVirtualPhonePage)) as NgmyVirtualPhoneState;
    p.openApp('videos');
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byKey(const Key('wall-phone-0')), findsNothing, reason: 'one phone until a video starts');
    await t.enterText(find.byKey(const Key('vphone-link-field')), 'https://youtu.be/dQw4w9WgXcQ');
    await t.tap(find.byKey(const Key('vphone-play')));
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(milliseconds: 600));
    expect(p.wallLink, isNotNull);
    for (var i = 0; i < 4; i++) {
      expect(find.byKey(Key('wall-phone-$i')), findsOneWidget);
    }
    await t.tap(find.byKey(const Key('wall-one')));
    await t.pump(const Duration(milliseconds: 800));
    expect(p.wallLink, isNull);
    expect(find.byKey(const Key('wall-phone-0')), findsNothing);
    // Back on the single phone, in Videos, with the same video in front.
    expect(find.byKey(const Key('vphone-now-title')), findsOneWidget);
    expect(find.text('YouTube video dQw4w9WgXcQ'), findsWidgets);
    // A web page link stays on the one phone.
    await t.enterText(find.byKey(const Key('vphone-link-field')), 'https://example.com/some/page');
    await t.tap(find.byKey(const Key('vphone-play')));
    await t.pump(const Duration(milliseconds: 500));
    expect(p.wallLink, isNull);
    await t.pump(const Duration(seconds: 1));
  });
}
