import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_projectpage.dart';
import 'package:ngmy/ngmy_construction_roomscene.dart';

const _red = Color(0xFFEF4444), _green = Color(0xFF22C55E);


void main() {
  test('every box has a little light that blinks red until its device is in and wired right, then blinks green, and there are no frames', () {
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    final first = p.orders.first.slot;
    final marks = roomDynamic(p, 0.0, {}, marks: true);
    for (final o in p.orders) {
      final mine = marks.where((q) => q.id == idSlotBase + o.slot && q.alpha > 0.5).toList();
      expect(mine, isNotEmpty, reason: 'a light on spot ${o.slot}');
      expect(mine.every((q) => q.color == _red), isTrue, reason: 'red: not fixed yet');
      expect(mine.length, lessThan(60), reason: 'just a small light, no frame round the box');
    }
    // No lights outside the devices phase.
    expect(roomDynamic(p, 0.0, {}).where((q) => q.id == idSlotBase + first), isEmpty);
    // It blinks: lit, then dark.
    expect(roomDynamic(p, 0.5, {}, marks: true).where((q) => q.id >= idSlotBase && q.id < idSlotBase + 7 && q.alpha > 0.5), isEmpty);
    expect(roomDynamic(p, 0.9, {}, marks: true).where((q) => q.id >= idSlotBase && q.id < idSlotBase + 7 && q.alpha > 0.5), isNotEmpty);
    // The box you picked has a bigger light, the same colour.
    double size(List<dynamic> polys, int slot) {
      final xs = [for (final q in polys.where((q) => q.id == idSlotBase + slot && q.alpha > 0.5)) for (final v in q.pts) v.x as double];
      return xs.reduce((a, b) => a > b ? a : b) - xs.reduce((a, b) => a < b ? a : b);
    }

    final pickedMarks = roomDynamic(p, 0.0, {}, marks: true, picked: first);
    expect(size(pickedMarks, first), greaterThan(size(marks, first)));
    // One device in but not covered or not wired: still red. Everything fixed right: green.
    p.installDevice(first, p.orders.first.device);
    expect(roomDynamic(p, 0.0, {}, marks: true).where((q) => q.id == idSlotBase + first && q.alpha > 0.5).every((q) => q.color == _red), isTrue);
    p.completeWiring();
    final done = roomDynamic(p, 0.0, {}, marks: true);
    for (final o in p.orders) {
      final mine = done.where((q) => q.id == idSlotBase + o.slot && q.alpha > 0.5).toList();
      expect(mine, isNotEmpty);
      expect(mine.every((q) => q.color == _green), isTrue, reason: 'spot ${o.slot} is fixed: green');
    }
  });

  testWidgets('turned on its side the job screen has no phase tabs and no hint: only the tray, with the phase as its first button', (t) async {
    t.view.physicalSize = const Size(1800, 800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    await t.pumpWidget(MaterialApp(home: NgmyRoomProjectPage(project: p)));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('Rough-in'), findsNothing);
    expect(find.textContaining('Drywall'), findsNothing);
    expect(find.textContaining('The breaker being on'), findsNothing);
    expect(find.byKey(const Key('phase-chip')), findsOneWidget);
    expect(find.text('3 Devices'), findsOneWidget);
    expect(find.text('Outlet'), findsOneWidget);
    // The phase button is the first thing in the tray, and a tap goes to the next phase.
    final chipLeft = t.getTopLeft(find.byKey(const Key('phase-chip'))).dx;
    expect(chipLeft, lessThan(t.getTopLeft(find.text('Outlet')).dx));
    await t.tap(find.byKey(const Key('phase-chip')));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('1 Rough-in'), findsOneWidget);
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('turned on its side, working on a device: small buttons with their words in one row with the wires, the screw options in a small row under it, and small messages', (t) async {
    t.view.physicalSize = const Size(1800, 800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    await t.pumpWidget(MaterialApp(home: NgmyRoomProjectPage(project: p)));
    await t.pump(const Duration(milliseconds: 600));
    final st = t.state(find.byType(NgmyRoomProjectPage)) as dynamic;
    final slot = p.orders.firstWhere((o) => o.device == 'outlet').slot;
    st.pickBoxForTest(slot);
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('Outlet'));
    await t.pump(const Duration(milliseconds: 900));
    await t.pump(const Duration(milliseconds: 600));
    // The bench is open: one row, the buttons have their words, and the frames are not bigger than the wire chips.
    expect(find.byKey(const Key('work-row')), findsOneWidget);
    expect(find.text('Back to the room'), findsOneWidget);
    expect(find.text('Fasten every wire'), findsOneWidget);
    expect(find.text('Take it out, put in another'), findsOneWidget);
    final backBox = t.getRect(find.ancestor(of: find.text('Back to the room'), matching: find.byType(Container)).first);
    final wireBox = t.getRect(find.ancestor(of: find.text('Black · hot'), matching: find.byType(Container)).first);
    expect(backBox.height, 44);
    expect(wireBox.height, 44);
    expect((backBox.center.dy - wireBox.center.dy).abs(), lessThan(2), reason: 'in line with the wires');
    expect(t.widget<Text>(find.text('Back to the room')).style!.fontSize, lessThanOrEqualTo(11), reason: 'small words');
    // The message that tells what happened is a small note in a corner.
    final note = find.textContaining('is held up to');
    expect(note, findsOneWidget);
    final box = t.getRect(find.ancestor(of: note, matching: find.byType(Container)).first);
    expect(box.width, lessThan(900 * 0.45), reason: 'a small note, not a banner across the work');
    expect(box.left, greaterThan(200), reason: 'clear of the hearts and the breaker button');
    // No screw options until a wire is picked. Then they come in their own small row UNDER the buttons, not along the side.
    expect(find.byKey(const Key('screw-row')), findsNothing);
    await t.tap(find.text('Black · hot'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('screw-row')), findsOneWidget);
    expect(find.textContaining('➜'), findsWidgets);
    final screw = t.getRect(find.byKey(const Key('screw-row')));
    final row = t.getRect(find.byKey(const Key('work-row')));
    expect(screw.top, greaterThanOrEqualTo(row.bottom), reason: 'under the buttons');
    expect(screw.height, lessThanOrEqualTo(34), reason: 'low and slim');
    final chipBox = t.getRect(find.ancestor(of: find.textContaining('➜').first, matching: find.byType(Container)).first);
    expect(chipBox.height, lessThan(36), reason: 'the options are not big');
    await t.pump(const Duration(seconds: 12));
  });

  testWidgets('a single tap on the 3D view answers at once (it does not wait for a double tap), even when the view also listens for double taps', (t) async {
    final picks = <int>[];
    const wall = Poly([V3(-40, -40, 0), V3(40, -40, 0), V3(40, 40, 0), V3(-40, 40, 0)], V3(0, 0, 1), Color(0xFF888888), 7);
    await t.pumpWidget(MaterialApp(
      home: SizedBox(
        width: 400,
        height: 400,
        child: Scene3DView(scene: const Scene3D([wall]), cam: Cam3(yaw: 0, pitch: 0, dist: 120, target: V3.zero), onPick: picks.add, onDoubleTap: (a, b) {}),
      ),
    ));
    await t.pump(const Duration(milliseconds: 200));
    await t.tapAt(const Offset(200, 200));
    // No waiting for the double-tap window: it is answered straight away.
    await t.pump(const Duration(milliseconds: 20));
    expect(picks, [7]);
    // Tapping again quickly is a second pick (it is not swallowed as a double tap).
    await t.tapAt(const Offset(200, 200));
    await t.pump(const Duration(milliseconds: 20));
    expect(picks.length, 2);
    // Dragging the view is not a tap.
    final g = await t.startGesture(const Offset(150, 150));
    await g.moveBy(const Offset(60, 0));
    await g.up();
    await t.pump(const Duration(milliseconds: 50));
    expect(picks.length, 2);
    await t.pump(const Duration(seconds: 1));
  });

  test('the lights are small, and an empty box has a bigger invisible pad round it that a finger can hit', () {
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    final marks = roomDynamic(p, 0.0, {}, marks: true);
    final slot = p.orders.first.slot;
    double width(Iterable<dynamic> polys) {
      final xs = [for (final q in polys) for (final v in q.pts) v.x as double];
      return xs.reduce((a, b) => a > b ? a : b) - xs.reduce((a, b) => a < b ? a : b);
    }

    final light = marks.where((q) => q.id == idSlotBase + slot && q.alpha > 0.5);
    final pad = marks.where((q) => q.id == idSlotBase + slot && q.alpha < 0.1);
    expect(width(light), lessThan(2.0), reason: 'a small light');
    expect(pad, isNotEmpty);
    expect(width(pad), greaterThan(9.0), reason: 'a pad bigger than the 5.6 wide box');
    // With a device in the box there is no pad (the device is tapped itself, and appliances are plugged into it).
    p.installDevice(slot, p.orders.first.device);
    expect(roomDynamic(p, 0.0, {}, marks: true).where((q) => q.id == idSlotBase + slot && q.alpha < 0.1), isEmpty);
  });

  testWidgets('standing up straight the bench keeps its big buttons with words', (t) async {
    t.view.physicalSize = const Size(1000, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    await t.pumpWidget(MaterialApp(home: NgmyRoomProjectPage(project: p)));
    await t.pump(const Duration(milliseconds: 600));
    final st = t.state(find.byType(NgmyRoomProjectPage)) as dynamic;
    st.pickBoxForTest(p.orders.firstWhere((o) => o.device == 'outlet').slot);
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('Outlet'));
    await t.pump(const Duration(milliseconds: 900));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byKey(const Key('work-row')), findsNothing);
    expect(find.text('Back to the room'), findsOneWidget);
    await t.pump(const Duration(seconds: 12));
  });

  testWidgets('standing up straight the phase tabs and the hint are all there, as before', (t) async {
    t.view.physicalSize = const Size(1000, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    await t.pumpWidget(MaterialApp(home: NgmyRoomProjectPage(project: p)));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('Rough-in'), findsOneWidget);
    expect(find.textContaining('Drywall'), findsOneWidget);
    expect(find.textContaining('3 Devices'), findsOneWidget);
    expect(find.textContaining('The breaker being on'), findsOneWidget);
    expect(find.byKey(const Key('phase-chip')), findsNothing);
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('tap a box in the devices phase and the tray shows only what fits it: outlets for an outlet box, switches for a switch box, a light or a fan for the ceiling', (t) async {
    t.view.physicalSize = const Size(1000, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    await t.pumpWidget(MaterialApp(home: NgmyRoomProjectPage(project: p)));
    await t.pump(const Duration(milliseconds: 600));
    final st = t.state(find.byType(NgmyRoomProjectPage)) as dynamic;
    // Nothing picked: the whole tray, as before.
    final row = find.descendant(of: find.byKey(const Key('room-tray')), matching: find.byType(Scrollable));
    // Slide along the tray and read every label on it.
    final seen = <String>{};
    for (var i = 0; i < 40; i++) {
      seen.addAll(t.widgetList<Text>(find.byType(Text)).map((e) => e.data).whereType<String>());
      await t.drag(row, const Offset(-300, 0));
      await t.pump(const Duration(milliseconds: 100));
    }
    for (final label in ['Outlet', 'Switch', 'Light', 'Fan', 'TV', 'Voltage tester']) {
      expect(seen, contains(label));
    }
    for (var i = 0; i < 40; i++) {
      await t.drag(row, const Offset(300, 0));
    }
    await t.pump(const Duration(milliseconds: 300));
    final outletSlot = p.orders.firstWhere((o) => o.device == 'outlet').slot;
    final switchSlot = p.orders.firstWhere((o) => o.device == 'switch').slot;
    final ceilingSlot = p.orders.firstWhere((o) => o.device == 'light' || o.device == 'fan').slot;

    Future<Set<String>> labels() async {
      final out = <String>{};
      for (var i = 0; i < 40; i++) {
        out.addAll(t.widgetList<Text>(find.byType(Text)).map((e) => e.data).whereType<String>());
        await t.drag(row, const Offset(-300, 0));
        await t.pump(const Duration(milliseconds: 60));
      }
      for (var i = 0; i < 40; i++) {
        await t.drag(row, const Offset(300, 0));
      }
      await t.pump(const Duration(milliseconds: 200));
      return out;
    }

    st.pickBoxForTest(outletSlot);
    await t.pump(const Duration(milliseconds: 300));
    final forOutlet = await labels();
    expect(forOutlet, containsAll(['Outlet', 'GFCI', 'Split outlet', 'Dryer 4-wire (14-30)', 'Washer (5-20)']));
    for (final label in ['Switch', 'Light', 'Fan', 'TV', 'Voltage tester', 'Look', '3-way switch']) {
      expect(forOutlet, isNot(contains(label)), reason: '$label does not fit an outlet box');
    }
    // Tap it again: let go, and the whole tray is back.
    st.pickBoxForTest(outletSlot);
    await t.pump(const Duration(milliseconds: 300));
    expect(await labels(), containsAll(['Switch', 'Light', 'Outlet']));

    st.pickBoxForTest(switchSlot);
    await t.pump(const Duration(milliseconds: 300));
    final forSwitch = await labels();
    expect(forSwitch, containsAll(['Switch', '3-way switch', 'Smart switch']));
    for (final label in ['Outlet', 'Light', 'Fan', 'GFCI']) {
      expect(forSwitch, isNot(contains(label)));
    }

    // Picking another box moves the choice, and the little cross lets it go.
    st.pickBoxForTest(ceilingSlot);
    await t.pump(const Duration(milliseconds: 300));
    final forCeiling = await labels();
    expect(forCeiling, containsAll(['Light', 'Fan']));
    for (final label in ['Outlet', 'Switch', 'GFCI']) {
      expect(forCeiling, isNot(contains(label)));
    }
    await t.tap(find.byKey(const Key('tray-show-all')));
    await t.pump(const Duration(milliseconds: 300));
    expect(await labels(), containsAll(['Outlet', 'Switch', 'Light']));

    // Picked box, then an item: it goes straight into that box.
    st.pickBoxForTest(outletSlot);
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('Outlet'));
    await t.pump(const Duration(milliseconds: 600));
    expect(p.devs[outletSlot]?.kind, 'outlet');
    await t.pump(const Duration(seconds: 12));
  });
}
