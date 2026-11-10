import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_projectpage.dart';
import 'package:ngmy/ngmy_construction_roomscene.dart';

const _red = Color(0xFFEF4444), _green = Color(0xFF22C55E), _cyan = Color(0xFF67E8F9);

int count(List<dynamic> polys, int id, Color c) => polys.where((p) => p.id == id && p.color == c).length;

void main() {
  test('every box that is not fixed has a tiny red frame and a blinking red dot, green once it is fixed, and the picked box has no red frame', () {
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    final first = p.orders.first.slot, second = p.orders[1].slot;
    final marks = roomDynamic(p, 0.0, {}, marks: true);
    for (final o in p.orders) {
      expect(count(marks, idSlotBase + o.slot, _red), greaterThan(4), reason: 'frame and dot on spot ${o.slot}');
    }
    // No marks outside the devices phase.
    expect(count(roomDynamic(p, 0.0, {}), idSlotBase + first, _red), 0);
    // The dot blinks: on, then off.
    final off = roomDynamic(p, 0.5, {}, marks: true);
    expect(off.length, lessThan(marks.length));
    // The box you picked loses its red frame (it shows a cyan one), the others keep theirs.
    final pickedMarks = roomDynamic(p, 0.0, {}, marks: true, picked: first);
    expect(count(pickedMarks, idSlotBase + first, _cyan), 24, reason: 'a frame of four bars, six faces each');
    expect(count(pickedMarks, idSlotBase + first, _red), count(marks, idSlotBase + first, _red) - 24, reason: 'only the frame goes: the dot stays');
    expect(count(pickedMarks, idSlotBase + second, _red), count(marks, idSlotBase + second, _red));
    // Once the job is done every box has a green dot and no red frame.
    p.completeWiring();
    final done = roomDynamic(p, 0.0, {}, marks: true);
    for (final o in p.orders) {
      expect(count(done, idSlotBase + o.slot, _red), 0, reason: 'spot ${o.slot} is fixed');
      expect(count(done, idSlotBase + o.slot, _green), greaterThan(0));
    }
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
