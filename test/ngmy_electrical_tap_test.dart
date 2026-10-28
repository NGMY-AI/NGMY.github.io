import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_lab.dart';

Offset? _find(WidgetTester t, int id) {
  final view = find.byWidgetPredicate((w) => w is CustomPaint && w.painter is Scene3DPainter).first;
  final painter = t.widget<CustomPaint>(view).painter! as Scene3DPainter;
  final box = t.getRect(view);
  for (final h in painter.hits.list.where((h) => h.$2 == id)) {
    final r = h.$1.getBounds();
    for (var i = 0; i <= 60; i++) {
      for (var j = 0; j <= 60; j++) {
        final p = Offset(r.left + r.width * i / 60, r.top + r.height * j / 60);
        if (h.$1.contains(p) && painter.hits.pick(p) == id) return box.topLeft + p;
      }
    }
  }
  return null;
}

void main() {
  testWidgets('tap a house wire, then the fixture wire: they join; tap the nut again: they come apart', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final s = WiringState()..power = false;
    await t.pumpWidget(MaterialApp(home: ElectricalLessonPage(id: 'light', state: s)));
    await t.pump(const Duration(milliseconds: 600));
    final house = _find(t, idBlack);
    expect(house, isNotNull, reason: 'the house black wire can be tapped');
    await t.tapAt(house!);
    await t.pump(const Duration(milliseconds: 600));
    expect(s.attached, isEmpty, reason: 'the first tap only picks the wire up');
    final fixture = _find(t, idNutBlack);
    expect(fixture, isNotNull, reason: 'the fixture wire can be tapped');
    await t.tapAt(fixture!);
    await t.pump(const Duration(milliseconds: 800));
    expect(s.attached[idNutBlack], 'black');
    // Tapping the joined wire again takes it off.
    final again = _find(t, idNutBlack);
    expect(again, isNotNull);
    await t.tapAt(again!);
    await t.pump(const Duration(milliseconds: 600));
    expect(s.attached, isEmpty);
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('swiping up looks up and swiping right turns right: the other way round from before', (t) async {
    final cam = Cam3(yaw: 0, pitch: 0.3, dist: 100, target: V3.zero)..setFree(true);
    await t.pumpWidget(MaterialApp(home: Scene3DView(scene: const Scene3D([]), cam: cam)));
    await t.pump(const Duration(milliseconds: 100));
    final c = t.getCenter(find.byType(Scene3DView));
    await t.dragFrom(c, const Offset(100, 0));
    expect(cam.yaw, greaterThan(0.3));
    final p0 = cam.pitch;
    await t.dragFrom(c, const Offset(0, -100));
    expect(cam.pitch, greaterThan(p0));
  });

  test('a lesson room is big and bare, the outlets are in the open, and the TV can go on any wall', () {
    for (final id in ['outlet', 'switch', 'gfci', 'fan']) {
      final h = HomeProject.lesson(id);
      final r = h.rooms[0];
      expect(r.w, greaterThanOrEqualTo(240), reason: id);
      expect(r.furn, isEmpty, reason: '$id has nothing standing in front of the outlets');
      final box = wallTvBox(r, applianceByKey(r.wallTv!));
      expect(box.w, greaterThan(100), reason: 'a big default TV');
      expect(box.cx - box.w / 2, greaterThanOrEqualTo(-r.w / 2));
      expect(box.cx + box.w / 2, lessThanOrEqualTo(r.w / 2));
    }
    final r = HomeProject.lesson('outlet').rooms[0];
    final back = buildHomeRoom(r).screens.where((q) => q.id == idHWallTv).first.corners.first;
    r.tvWall = 'left';
    final left = buildHomeRoom(r).screens.where((q) => q.id == idHWallTv).first.corners.first;
    expect(left.x, closeTo(-r.w / 2 + 2.95, 0.5), reason: 'now on the left wall');
    expect(back.x, isNot(closeTo(left.x, 1)));
  });
}
