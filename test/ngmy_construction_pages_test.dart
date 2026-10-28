import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_house.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_projectpage.dart';
import 'package:ngmy/ngmy_construction_roomscene.dart';
import 'package:ngmy/ngmy_construction_service.dart';
import 'package:ngmy/ngmy_construction_servicepage.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

Finder _tray() => find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right);

Finder _view() => find.byWidgetPredicate((w) => w is CustomPaint && w.painter is Scene3DPainter);

Offset? _find3d(WidgetTester t, int id) {
  final painter = t.widget<CustomPaint>(_view()).painter! as Scene3DPainter;
  final box = t.getRect(_view());
  final centre = box.size.center(Offset.zero);
  Offset? best;
  var bd = double.infinity;
  // Every spot where that object is really on top; the one nearest the middle of the view is clear of the cards at the edges.
  for (final h in painter.hits.list.where((h) => h.$2 == id)) {
    final r = h.$1.getBounds();
    for (var i = 1; i < 8; i++) {
      for (var j = 1; j < 8; j++) {
        final p = Offset(r.left + r.width * i / 8, r.top + r.height * j / 8);
        if (!h.$1.contains(p) || painter.hits.pick(p) != id) continue;
        final d = (p - centre).distance;
        if (d < bd) {
          bd = d;
          best = p;
        }
      }
    }
  }
  return best == null ? null : box.topLeft + best;
}

void main() {
  setUp(() => NgmyTone.enabled = false);

  testWidgets('the landing offers the room project, the service calls and the lessons', (t) async {
    t.view.physicalSize = const Size(900, 4200);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('Learn mode'), findsOneWidget);
    expect(find.text('Practice mode'), findsOneWidget);
    expect(find.text('Fix a house (learn)'), findsOneWidget);
    expect(find.text('Fix a house (practice)'), findsOneWidget);
    expect(find.text('Wall outlet'), findsOneWidget);
  });

  testWidgets('room project: pick a box, tap the glowing spot, and it is mounted', (t) async {
    t.view.physicalSize = const Size(900, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final plan = RoomProject(seed: 3);
    final first = plan.orders.firstWhere((o) => !slotById(o.slot).ceiling).slot;
    await t.pumpWidget(const MaterialApp(home: NgmyRoomProjectPage(seed: 3)));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.textContaining('Mount a box at'), findsOneWidget);
    expect(find.text('Behind the wall'), findsOneWidget);
    await t.tap(find.text('Wall box'));
    await t.pump(const Duration(milliseconds: 500));
    final at = _find3d(t, idSlotBase + first);
    expect(at, isNotNull);
    await t.tapAt(at!);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('box fixed to the side of the stud'), findsOneWidget);
    await t.tap(find.text('Behind the wall'));
    await t.pump(const Duration(milliseconds: 1500));
    expect(find.text('In front'), findsOneWidget);
    await t.tap(find.text('In front'));
    await t.pump(const Duration(milliseconds: 1500));
    expect(find.text('Behind the wall'), findsOneWidget);
    await t.pump(const Duration(seconds: 12));
  });

  testWidgets('room project: practice mode gives no hints', (t) async {
    t.view.physicalSize = const Size(900, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyRoomProjectPage(seed: 3, practice: true)));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.textContaining('Practice mode: no hints'), findsOneWidget);
    expect(find.textContaining('Mount a box at'), findsNothing);
    await t.pump(const Duration(seconds: 12));
  });

  testWidgets('service call: look at the problem, use the wrong tool, then the right one', (t) async {
    t.view.physicalSize = const Size(900, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    var seed = 1;
    late ServiceCall plan;
    for (; seed < 400; seed++) {
      plan = ServiceCall(seed: seed);
      if (plan.faults.any((f) => f.kind == FaultKind.runningToilet)) break;
    }
    final f = plan.faults.firstWhere((f) => f.kind == FaultKind.runningToilet);
    await t.pumpWidget(MaterialApp(home: NgmyServiceCallPage(seed: seed)));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.text('0/4 fixed'), findsOneWidget);
    final toilet = _find3d(t, f.info.target);
    expect(toilet, isNotNull);
    await t.tapAt(toilet!);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('rubber flapper'), findsWidgets);
    await t.scrollUntilVisible(find.text('Wrench'), 80, scrollable: _tray());
    await t.ensureVisible(find.text('Wrench'));
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.text('Wrench'));
    await t.pump(const Duration(milliseconds: 300));
    await t.pump(const Duration(milliseconds: 1500));
    await t.tapAt(_find3d(t, f.info.target)!);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('does not fix this'), findsWidgets);
    await t.scrollUntilVisible(find.text('New flapper'), 80, scrollable: _tray());
    await t.ensureVisible(find.text('New flapper'));
    await t.pump(const Duration(milliseconds: 400));
    await t.tap(find.text('New flapper'));
    await t.pump(const Duration(milliseconds: 300));
    await t.pump(const Duration(milliseconds: 1500));
    await t.tapAt(_find3d(t, f.info.target)!);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('The toilet stops running'), findsWidgets);
    expect(find.text('1/4 fixed'), findsOneWidget);
    await t.pump(const Duration(seconds: 12));
  });

  test('the house scene still builds quickly enough for every service call', () {
    for (var s = 1; s <= 12; s++) {
      final c = ServiceCall(seed: s);
      expect(buildHouseScene(c.house).polys.length, lessThan(12000));
    }
  });
}
