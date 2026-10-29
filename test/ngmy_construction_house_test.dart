import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_plumbjob.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void wireDevice(RoomProject p, int slot) {
  final d = p.devs[slot]!;
  final plan = switch (d.kind) {
    'outlet' => {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'},
    'gfci' => {idGreen: 'ground', idSilverBottom: 'white', idBrassBottom: 'black'},
    'switch' => {idGreen: 'ground', idBrassTop: 'blackLine', idBrassBottom: 'blackLoad'},
    _ => {idNutGround: 'ground', idNutWhite: 'white', idNutBlack: 'black'},
  };
  for (final e in plan.entries) {
    expect(p.fasten(slot, e.value, e.key).ok, isTrue);
  }
  expect(p.pushIn(slot).ok, isTrue);
  expect(p.coverOn(slot).ok, isTrue);
}

void main() {
  setUp(() => NgmyTone.enabled = false);

  test('the house has five bedrooms, three bathrooms, a kitchen, a living room and a hall, all joined by doors', () {
    final h = HomeProject(seed: 7);
    expect(h.rooms.where((r) => r.kind == 'bedroom').length, 5);
    expect(h.rooms.where((r) => r.kind == 'bathroom').length, 3);
    expect(h.rooms.where((r) => r.kind == 'kitchen').length, 1);
    expect(h.rooms.where((r) => r.kind == 'living').length, 1);
    final seen = <int>{5};
    final todo = [5];
    while (todo.isNotEmpty) {
      for (final d in h.rooms[todo.removeLast()].doors) {
        if (seen.add(d.to)) todo.add(d.to);
      }
    }
    expect(seen.length, h.rooms.length);
    // The map cells never overlap.
    final cells = <int>{};
    for (final r in h.rooms) {
      for (var x = r.gx; x < r.gx + r.gw; x++) {
        for (var y = r.gy; y < r.gy + r.gh; y++) {
          expect(cells.add(y * 10 + x), isTrue);
        }
      }
    }
    expect(h.rooms.any((r) => !r.wired), isTrue);
    expect(h.rooms.any((r) => r.hasPlumbing && !r.plumbed), isTrue);
    // A different house every time.
    expect({for (var s = 1; s < 12; s++) HomeProject(seed: s).rooms.map((r) => r.wiringNeeded).join()}.length, greaterThan(3));
  });

  test('only the wiring and plumbing can be tapped; everything else only while its edit button is on', () {
    final h = HomeProject(seed: 7);
    const always = {0, idHOutletA, idHOutletB, idHSwitch, idHLight, idHToiletF, idHSinkF, idHTubF, idHKSink, idHApp, idHApp + 1, idHWallTv, idHWallTv + 1, idHWallTv + 2, idHWallTv + 3};
    for (final r in h.indoor) {
      final look = buildHomeRoom(r);
      expect(look.polys.length, lessThan(9000));
      for (final p in look.polys) {
        expect(always.contains(p.id) || (p.id >= idHDoor && p.id < idHDoor + 20) || (p.id >= idHCam && p.id < idHCam + 4), isTrue, reason: '${r.name} object ${p.id} is tappable in Look mode');
      }
      for (final (mode, test) in <(String, bool Function(int))>[
        ('furniture', (id) => id >= idHFurn && id < idHFurn + 100),
        ('walls', (id) => id >= idHWallBack && id <= idHWallRight),
        ('floor', (id) => id == idHFloorObj),
        ('ceiling', (id) => id == idHCeilObj),
        ('doors', (id) => id >= idHDoor && id < idHDoor + 20),
      ]) {
        final s = buildHomeRoom(r, mode: mode);
        if (mode == 'furniture' && r.furn.isEmpty) continue;
        expect(s.polys.any((p) => test(p.id)), isTrue, reason: '${r.name} $mode');
      }
    }
  });

  test('a room is finished when its wiring and its plumbing jobs are done, and the signal goes away', () {
    final h = HomeProject(seed: 7);
    final r = h.rooms[2]; // a bathroom
    r.wiringNeeded = true;
    r.plumbNeeded = true;
    expect(r.finished, isFalse);
    expect(buildHomeRoom(r).labels.length, 2);
    r.wiring = RoomProject(seed: 3, kind: wiringKindFor(r), name: r.name)..fastForward();
    final p = r.wiring!;
    for (final o in p.orders) {
      expect(p.installDevice(o.slot, o.device).ok, isTrue);
    }
    for (final o in p.orders) {
      wireDevice(p, o.slot);
    }
    expect(p.toggleBreaker().ok, isTrue);
    for (final o in p.orders) {
      if (o.device == 'outlet' || o.device == 'gfci') expect(p.plug(o.slot, 'tv').ok, isTrue);
    }
    expect(p.flipSwitch(p.orders.firstWhere((o) => o.device == 'switch').slot).ok, isTrue);
    expect(r.wired, isTrue);
    expect(r.finished, isFalse);
    r.plumb = PlumbJob(seed: 1, variantId: 'bathroom');
    final j = r.plumb!;
    expect(j.toggleWater().ok, isTrue);
    for (final s in j.steps) {
      expect(j.place(s.item, s.id).ok, isTrue, reason: s.id);
    }
    for (final s in j.steps) {
      for (var i = 0; i < s.tighten; i++) {
        j.tighten(s.id);
      }
    }
    expect(j.toggleWater().ok, isTrue);
    expect(r.plumbed, isTrue);
    expect(r.finished, isTrue);
    expect(buildHomeRoom(r).labels, isEmpty);
  });

  test('a finished room can be opened and worked on, and pulling a device out makes it need wiring again', () {
    final h = HomeProject(seed: 7);
    final r = h.rooms[0];
    r.wiringNeeded = false;
    expect(r.wired, isTrue);
    r.wiring = RoomProject(seed: 9, kind: wiringKindFor(r), name: r.name)
      ..fastForward()
      ..completeWiring();
    expect(r.wired, isTrue);
    final p = r.wiring!;
    final sw = p.orders.firstWhere((o) => o.device == 'switch').slot;
    p.breaker = false;
    p.syncPower();
    expect(p.removeDevice(sw).ok, isTrue);
    expect(r.wired, isFalse);
    final bath = h.rooms[2];
    bath.plumbNeeded = false;
    expect(bath.plumbed, isTrue);
    bath.plumb = PlumbJob(seed: 2, variantId: 'bathroom')..completeAll();
    expect(bath.plumbed, isTrue);
  });

  test('the garden is joined to the living room by the front door and builds fine', () {
    final h = HomeProject(seed: 7);
    final out = h.rooms.firstWhere((r) => r.kind == 'outside');
    expect(h.rooms[10].doors.any((d) => d.to == out.id), isTrue);
    expect(out.doors.single.to, 10);
    final s = buildHomeRoom(out, problems: 3);
    expect(s.polys.length, lessThan(12000));
    expect(s.polys.any((p) => p.id == idHDoor), isTrue);
    expect(s.labels.single.text, contains('3 rooms'));
    expect(h.indoor.length, 11);
  });

  test('plugging in, the switch and the fan show up in the scene', () {
    final h = HomeProject(seed: 7);
    final r = h.rooms[0];
    r.wiringNeeded = false;
    r.plugged[0] = 'bangtv';
    final plain = buildHomeRoom(r).polys.length;
    expect(buildHomeRoom(r).polys.any((p) => p.id == idHApp), isTrue);
    expect(buildHomeRoom(r).screens.where((q) => q.id == idHApp), isNotEmpty, reason: 'the NGMY ad plays on the glass');
    expect(homeDynamic(r, 1.0).any((p) => p.id == idHApp), isFalse, reason: 'nothing floats in front of the screen');
    r.lightOn = true;
    expect(r.ceilingFix, 'fan');
    expect(homeDynamic(r, 1.0).where((p) => p.id == idHLight), isNotEmpty, reason: 'the fan blades turn');
    expect(plain, greaterThan(500));
    r.wiringNeeded = true;
    expect(buildHomeRoom(r).polys.any((p) => p.id == idHApp), isFalse, reason: 'nothing runs without power');
  });

  test('furniture stays inside the room', () {
    final r = HomeProject(seed: 1).rooms[0];
    final f = r.add('bed');
    f.x = 500;
    f.z = -500;
    r.clamp(f);
    expect(f.x.abs(), lessThan(r.w / 2));
    expect(f.z, greaterThan(0));
    expect(f.z, lessThan(r.d));
  });

  testWidgets('walk through a door, add and move furniture, and a tap on the floor does nothing', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 7);
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    for (var i = 0; i < 6; i++) {
      await t.pump(const Duration(milliseconds: 100));
    }
    final h = HomeProject.session!;
    expect(h.current, 0);
    // A tap on the middle of the picture in Look mode changes nothing.
    final before = h.room.furn.length;
    await t.tapAt(const Offset(220, 560));
    await t.pump(const Duration(milliseconds: 300));
    expect(h.room.furn.length, before);
    expect(h.room.openDoors, isEmpty);
    // Furniture mode: add a plant, then move it.
    await t.tap(find.text('🛋 Furniture'));
    await t.pump(const Duration(milliseconds: 300));
    await t.scrollUntilVisible(find.text('🪴 Plant'), 120, scrollable: find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).last);
    await t.ensureVisible(find.text('🪴 Plant'));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('🪴 Plant'));
    await t.pump(const Duration(milliseconds: 300));
    expect(h.room.furn.length, before + 1);
    final plant = h.room.furn.last;
    final x0 = plant.x;
    await t.tap(find.byIcon(Icons.arrow_forward_rounded));
    await t.pump(const Duration(milliseconds: 300));
    expect(plant.x, greaterThan(x0));
    await t.tap(find.byIcon(Icons.delete_outline_rounded));
    await t.pump(const Duration(milliseconds: 300));
    expect(h.room.furn.length, before);
    // Look mode again and through the door into the hall.
    await t.tap(find.text('👁 Look'));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('🚪 Hall'));
    await t.pump(const Duration(milliseconds: 300));
    expect(h.current, 5);
    await t.pump(const Duration(seconds: 10));
  });
}
