import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
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
      final mine = marks.where((q) => q.id == idSlotBase + o.slot).toList();
      expect(mine, isNotEmpty, reason: 'a light on spot ${o.slot}');
      expect(mine.every((q) => q.color == _red), isTrue, reason: 'red: not fixed yet');
      expect(mine.length, lessThan(60), reason: 'just a small light, no frame round the box');
    }
    // No lights outside the devices phase.
    expect(roomDynamic(p, 0.0, {}).where((q) => q.id == idSlotBase + first), isEmpty);
    // It blinks: lit, then dark.
    expect(roomDynamic(p, 0.5, {}, marks: true).where((q) => q.id >= idSlotBase && q.id < idSlotBase + 7), isEmpty);
    expect(roomDynamic(p, 0.9, {}, marks: true).where((q) => q.id >= idSlotBase && q.id < idSlotBase + 7), isNotEmpty);
    // The box you picked has a bigger light, the same colour.
    double size(List<dynamic> polys, int slot) {
      final xs = [for (final q in polys.where((q) => q.id == idSlotBase + slot)) for (final v in q.pts) v.x as double];
      return xs.reduce((a, b) => a > b ? a : b) - xs.reduce((a, b) => a < b ? a : b);
    }

    final pickedMarks = roomDynamic(p, 0.0, {}, marks: true, picked: first);
    expect(size(pickedMarks, first), greaterThan(size(marks, first)));
    // One device in but not covered or not wired: still red. Everything fixed right: green.
    p.installDevice(first, p.orders.first.device);
    expect(roomDynamic(p, 0.0, {}, marks: true).where((q) => q.id == idSlotBase + first).every((q) => q.color == _red), isTrue);
    p.completeWiring();
    final done = roomDynamic(p, 0.0, {}, marks: true);
    for (final o in p.orders) {
      final mine = done.where((q) => q.id == idSlotBase + o.slot).toList();
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

  testWidgets('turned on its side, working on a device: the buttons are icons in one row with the wires, and the messages are small and out of the way', (t) async {
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
    // The bench is open: one row, no big buttons with words.
    expect(find.byKey(const Key('work-row')), findsOneWidget);
    expect(find.text('Back to the room'), findsNothing);
    expect(find.text('Fasten every wire'), findsNothing);
    expect(find.textContaining('Take it out and put in'), findsNothing);
    expect(find.byTooltip('Back to the room'), findsOneWidget);
    expect(find.byTooltip('Fasten every wire first'), findsOneWidget);
    expect(find.byTooltip('Take it out and put in a different one'), findsOneWidget);
    // They are all the same height and on the same line as the wire chips.
    final back = t.getRect(find.byTooltip('Back to the room'));
    final wire = t.getRect(find.text('Bare copper · ground'));
    expect((back.center.dy - wire.center.dy).abs(), lessThan(8), reason: 'in line with the wires');
    expect(back.height, inInclusiveRange(44, 46));
    // The message that tells what happened is a small note in a corner.
    final note = find.textContaining('is held up to');
    expect(note, findsOneWidget);
    final box = t.getRect(find.ancestor(of: note, matching: find.byType(Container)).first);
    expect(box.width, lessThan(900 * 0.45), reason: 'a small note, not a banner across the work');
    expect(box.left, greaterThan(200), reason: 'clear of the hearts and the breaker button');
    // Wires can still be picked from that row: pick one and the screws appear in the same row.
    await t.tap(find.text('Bare copper · ground'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('➜'), findsWidgets);
    await t.pump(const Duration(seconds: 12));
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
