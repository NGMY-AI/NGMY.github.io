import 'package:flutter/rendering.dart';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_vphone_wall.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<NgmyPhoneWallState> open(WidgetTester t, {Size size = const Size(1000, 2000)}) async {
  SharedPreferences.setMockInitialValues({});
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 2.0;
  addTearDown(t.view.reset);
  await t.pumpWidget(const MaterialApp(home: NgmyPhoneWallPage()));
  await t.pump(const Duration(milliseconds: 100));
  await t.pump(const Duration(milliseconds: 400));
  return t.state(find.byType(NgmyPhoneWallPage)) as NgmyPhoneWallState;
}

void main() {
  test('100 phones go four at a time, set after set, and start over when all are done', () {
    final p = PhoneWallPlan();
    expect(p.sets, 25);
    expect(p.phones, [0, 1, 2, 3]);
    final seen = <int>{...p.phones};
    var wraps = 0;
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
    wraps++;
    expect(p.phones, [0, 1, 2, 3]);
    expect(p.round, 2);
    expect(wraps, 1);
    expect(PhoneWallPlan().behind, 96);
  });

  test('every phone is its own: 100 different device IDs and numbers', () {
    final phones = makeWallPhones(random: math.Random(7));
    expect(phones.length, 100);
    expect(phones.map((p) => p.deviceId).toSet().length, 100);
    expect(phones.map((p) => p.number).toSet().length, greaterThan(95));
    expect(phones.first.where.name, isNotEmpty);
  });

  testWidgets('four phones in two rows, a link plays on all four, and the next four come when the video is over', (t) async {
    final w = await open(t);
    for (var i = 0; i < 4; i++) {
      expect(find.byKey(Key('wall-phone-$i')), findsOneWidget);
    }
    expect(find.byKey(const Key('wall-phone-4')), findsNothing);
    // Two in a row: phones 0 and 1 are side by side, 2 and 3 are under them.
    final r0 = t.getRect(find.byKey(const Key('wall-phone-0'))), r1 = t.getRect(find.byKey(const Key('wall-phone-1'))), r2 = t.getRect(find.byKey(const Key('wall-phone-2'))), r3 = t.getRect(find.byKey(const Key('wall-phone-3')));
    expect(r0.top, r1.top);
    expect(r2.top, r3.top);
    expect(r0.left, lessThan(r1.left));
    expect(r2.top, greaterThan(r0.bottom - 1));
    expect(find.text('Set 1 of 25 · phones 1 to 4 · round 1'), findsOneWidget);

    // Not a video link: nothing starts.
    await t.enterText(find.byKey(const Key('wall-link')), 'hello');
    await t.tap(find.byKey(const Key('wall-play')));
    await t.pump();
    expect(find.byKey(const Key('wall-problem')), findsOneWidget);
    expect(w.playing, isFalse);

    await t.enterText(find.byKey(const Key('wall-link')), 'https://youtu.be/dQw4w9WgXcQ');
    await t.tap(find.byKey(const Key('wall-play')));
    await t.pump(const Duration(milliseconds: 700));
    expect(w.playing, isTrue);
    expect(find.byKey(const Key('wall-problem')), findsNothing);
    // Each of the four front phones remembers it watched the video.
    for (var i = 0; i < 4; i++) {
      expect(w.phones[i].watched, ['https://youtu.be/dQw4w9WgXcQ']);
    }
    expect(w.phones[4].watched, isEmpty);

    // The video is over on the four phones: the next four come in (one time, even if all four say so).
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
    expect(w.phones[4].watched, ['https://youtu.be/dQw4w9WgXcQ']);
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('set after set until all 100 phones have played it, then it starts again from the first four', (t) async {
    final w = await open(t);
    w.play('https://youtu.be/dQw4w9WgXcQ');
    await t.pump(const Duration(milliseconds: 700));
    final reached = <int>{...w.plan.phones};
    for (var s = 1; s < 25; s++) {
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

  testWidgets('skip, restart and stop work, and the phones keep their identity between visits', (t) async {
    final w = await open(t);
    w.play('https://example.com/clip.mp4');
    await t.pump(const Duration(milliseconds: 700));
    await t.tap(find.byKey(const Key('wall-skip')));
    await t.pump(const Duration(milliseconds: 800));
    expect(w.plan.set, 1);
    final id5 = w.phones[4].deviceId;
    await t.tap(find.byKey(const Key('wall-restart')));
    await t.pump(const Duration(milliseconds: 800));
    expect(w.plan.set, 0);
    await t.tap(find.byKey(const Key('wall-stop')));
    await t.pump(const Duration(milliseconds: 300));
    expect(w.playing, isFalse);
    // Open the wall again: the same 100 phones.
    await t.pumpWidget(const SizedBox());
    await t.pumpWidget(const MaterialApp(home: NgmyPhoneWallPage()));
    await t.pump(const Duration(milliseconds: 500));
    final w2 = t.state(find.byType(NgmyPhoneWallPage)) as NgmyPhoneWallState;
    expect(w2.phones[4].deviceId, id5);
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('the four phones fit a small phone screen, upright or sideways', (t) async {
    final w = await open(t, size: const Size(780, 1500));
    for (final land in [true, false]) {
      if (w.landscape != land) {
        await t.tap(find.byKey(const Key('wall-orient')));
        await t.pumpAndSettle(const Duration(milliseconds: 100), EnginePhase.sendSemanticsUpdate, const Duration(seconds: 5));
      }
      for (var i = 0; i < 4; i++) {
        final r = t.getRect(find.byKey(Key('wall-phone-$i')));
        expect(r.left, greaterThanOrEqualTo(0));
        expect(r.right, lessThanOrEqualTo(390));
        expect(r.bottom, lessThanOrEqualTo(750));
      }
    }
  });
}
