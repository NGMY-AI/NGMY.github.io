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
      expect(s.screens.length, 2, reason: '${t.name}: a picture on the front and on the back');
    }
  });

  test('the board plays the NGMY default until something is changed, and can go back to it', () {
    final c = BbContent();
    expect(c.useDefault, isTrue);
    expect(c.headline, BbContent.defHeadline);
    c.useDefault = false;
    c.headline = 'MY SHOP';
    c.logoBytes = null;
    final j = c.toJson();
    final d = BbContent()..fromJson(j);
    expect(d.useDefault, isFalse);
    expect(d.headline, 'MY SHOP');
    d.resetToNgmy();
    expect(d.useDefault, isTrue);
    expect(d.headline, BbContent.defHeadline);
  });

  test('the 30 second drone shot is smooth, stays above the ground, always looks at the board and goes right round it', () {
    expect(kBillboardShotSecs, 30);
    for (final t in kBbTemplates) {
      final centre = V3(0, t.poleH + t.h / 2, 0);
      var prev = billboardShot(t, 0).$1;
      var minA = 99.0, maxA = -99.0;
      var sides = <int>{};
      for (var s = 0.1; s <= 30.0001; s += 0.1) {
        final (eye, look) = billboardShot(t, s);
        expect(eye.y, greaterThanOrEqualTo(17.9), reason: '${t.name} at $s s is not under the ground');
        expect((look - centre).len, lessThan(1), reason: 'looks at the board');
        expect((eye - prev).len, lessThan(t.w * 0.25), reason: '${t.name}: no jump at $s s');
        prev = eye;
        final a = math.atan2(eye.x, eye.z);
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
    expect(st.content.useDefault, isFalse);
    expect(st.content.headline, 'MY SHOP');
    await t.tap(find.text('Done'));
    await t.pump(const Duration(milliseconds: 100));
    await t.pump(const Duration(milliseconds: 500));
    await t.tap(find.text('🎬 30 second drone shot'));
    await t.pump(const Duration(milliseconds: 200));
    expect(find.text('⏹ Stop the drone'), findsOneWidget);
    await t.tap(find.text('⏹ Stop the drone'));
    await t.pump(const Duration(milliseconds: 200));
    expect(find.text('🎬 30 second drone shot'), findsOneWidget);
  });
}
