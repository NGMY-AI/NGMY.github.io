import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_projectpage.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

Finder _view() => find.byWidgetPredicate((w) => w is CustomPaint && w.painter is Scene3DPainter);

Future<void> _frames(WidgetTester t, [int n = 25]) async {
  for (var i = 0; i < n; i++) {
    await t.pump(const Duration(milliseconds: 100));
  }
}

void main() {
  setUp(() => NgmyTone.enabled = false);

  testWidgets('place and wire a device with buttons only, and a missed tap never moves the view', (t) async {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final plan = RoomProject(seed: 3);
    final o = plan.orders.firstWhere((o) => o.device == 'outlet' || o.device == 'gfci');
    await t.pumpWidget(const MaterialApp(home: NgmyRoomProjectPage(seed: 3, quick: true)));
    await _frames(t, 8);
    await t.tap(find.text(o.device == 'gfci' ? 'GFCI' : 'Outlet'));
    await _frames(t, 3);
    // The spot is offered as a button.
    await t.tap(find.text('📍 ${slotById(o.slot).name}'));
    await _frames(t);
    expect(find.text('Back to the room'), findsOneWidget);
    // Tapping the wall or empty space while working changes nothing about the view.
    final box = t.getRect(_view());
    final before = (t.widget<CustomPaint>(_view()).painter! as Scene3DPainter).cam;
    final d0 = before.dist, y0 = before.yaw;
    await t.tapAt(box.topLeft + const Offset(15, 400));
    await t.tapAt(box.topLeft + const Offset(box_w, 600));
    await _frames(t, 20);
    final after = (t.widget<CustomPaint>(_view()).painter! as Scene3DPainter).cam;
    expect((after.dist - d0).abs() < 0.01 && (after.yaw - y0).abs() < 0.01, isTrue);
    expect(find.text('Back to the room'), findsOneWidget);
    // Wire it with the wire buttons and the screw buttons.
    final lesson = electricalLesson(o.device);
    for (final c in lesson.chips) {
      await t.ensureVisible(find.text(c.label).first);
      await t.tap(find.text(c.label).first);
      await _frames(t, 2);
      final want = lesson.hookups.firstWhere((h) => h.accepts.contains(c.key) && !h.taped);
      await t.ensureVisible(find.text('➜ ${want.name}'));
      await t.tap(find.text('➜ ${want.name}'));
      await _frames(t, 2);
    }
    expect(find.text('Push it into the box'), findsOneWidget);
    await t.pump(const Duration(seconds: 12));
  });
}
const double box_w = 880;
