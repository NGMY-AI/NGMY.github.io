import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_billboard_studio.dart';

void main() {
  test('there are several billboard kinds and each builds a scene with a picture on both sides', () {
    expect(kBbTemplates.length, greaterThanOrEqualTo(6));
    for (final t in kBbTemplates) {
      final s = buildBillboardScene(t, BbContent());
      expect(s.polys, isNotEmpty, reason: t.name);
      expect(s.screens.length, greaterThanOrEqualTo(2 * t.signs), reason: '${t.name}: every sign on the front and on the back');
      expect(t.w / t.h, inInclusiveRange(1.6, 3.2), reason: '${t.name}: the words fit a sign this shape');
      expect(math.max(t.tw, t.th), greaterThanOrEqualTo(380), reason: '${t.name} is big');
    }
  });

  test('the board plays the NGMY default until something is changed, and can go back to it', () {
    final c = BbContent();
    expect(c.signs[0].useDefault, isTrue);
    expect(c.signs[0].headline, BbSign.defHeadline);
    c.signs[1].useDefault = false;
    c.signs[1].headline = 'MY SHOP';
    final d = BbContent()..fromJson(c.toJson());
    expect(d.signs[0].useDefault, isTrue);
    expect(d.signs[1].useDefault, isFalse);
    expect(d.signs[1].headline, 'MY SHOP');
    d.resetAll();
    expect(d.signs[1].useDefault, isTrue);
    expect(d.signs[1].headline, BbSign.defHeadline);
  });

  test('the 30 second drone shot is smooth, stays above the ground, always looks at the board and goes right round it', () {
    expect(kBillboardShotSecs, 30);
    for (final t in kBbTemplates) {
      final centre = V3(t.cx, t.poleH + t.th / 2, t.cz);
      var prev = billboardShot(t, 0).$1;
      var minA = 99.0, maxA = -99.0;
      var sides = <int>{};
      for (var s = 0.1; s <= 30.0001; s += 0.1) {
        final (eye, look) = billboardShot(t, s);
        expect(eye.y, greaterThanOrEqualTo(17.9), reason: '${t.name} at $s s is not under the ground');
        expect((look - centre).len, lessThan(t.tw * 0.4), reason: 'looks at the board');
        expect((eye - prev).len, lessThan(t.span * 0.25), reason: '${t.name}: no jump at $s s');
        prev = eye;
        final a = math.atan2(eye.x - t.cx, eye.z - t.cz);
        minA = math.min(minA, a);
        maxA = math.max(maxA, a);
        sides.add(((a + math.pi) / (math.pi / 2)).floor() % 4);
      }
      expect(sides.length, 4, reason: '${t.name}: the drone shows the front, both sides and the back');
    }
  });

  testWidgets('the studio opens, can change the board and start and stop the drone shot', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    SharedPreferences.setMockInitialValues({});
    await t.pumpWidget(const MaterialApp(home: NgmyBillboardStudioPage()));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('🎬 30 second drone shot'), findsOneWidget);
    await t.tap(find.text('🪧 Choose billboard'));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('Neon board'), findsOneWidget);
    await t.ensureVisible(find.text('Neon board'));
    await t.pump();
    await t.tap(find.text('Neon board'));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.textContaining('Neon board'), findsWidgets);
    await t.tap(find.text('✏️ Edit'));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('Edit your billboard'), findsOneWidget);
    await t.enterText(find.byType(TextField).first, 'MY SHOP');
    await t.pump();
    final st = t.state(find.byType(NgmyBillboardStudioPage)) as dynamic;
    expect(st.content.signs[0].useDefault, isFalse);
    expect(st.content.signs[0].headline, 'MY SHOP');
    await t.tap(find.text('Done'));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    await t.tap(find.text('🎬 30 second drone shot'));
    await t.pump(const Duration(milliseconds: 200));
    expect(find.text('⏹ Stop the drone'), findsOneWidget);
    expect(find.text('Crane shot'), findsNothing, reason: 'no shot name or bar on screen while flying');
    await t.tap(find.text('👁 Hide everything'));
    await t.pump(const Duration(milliseconds: 100));
    expect(find.text('⏹ Stop the drone'), findsNothing);
    expect(find.text('👁 Hide everything'), findsNothing);
    await t.tapAt(const Offset(225, 400));
    await t.pump(const Duration(milliseconds: 100));
    expect(find.text('⏹ Stop the drone'), findsOneWidget);
    await t.tap(find.text('⏹ Stop the drone'));
    await t.pump(const Duration(milliseconds: 200));
    expect(find.text('🎬 30 second drone shot'), findsOneWidget);
  });
}
