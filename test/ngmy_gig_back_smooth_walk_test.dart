import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_projectpage.dart';

void main() {
  testWidgets('the work tray starts with a Back button, before Devices: it lets go one step at a time and keeps the work', (t) async {
    t.view.physicalSize = const Size(1800, 800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final p = RoomProject(seed: 3, kind: 0)..fastForward();
    await t.pumpWidget(MaterialApp(home: NgmyRoomProjectPage(project: p)));
    await t.pump(const Duration(milliseconds: 600));
    final back = find.byKey(const Key('tray-back'));
    expect(back, findsOneWidget);
    expect(t.getTopLeft(back).dx, lessThan(t.getTopLeft(find.byKey(const Key('phase-chip'))).dx), reason: 'Back comes before Devices');
    // Pick a box, then a device kind for it: the tray then shows only what fits.
    final st = t.state(find.byType(NgmyRoomProjectPage)) as dynamic;
    final slot = p.orders.firstWhere((o) => o.device == 'gfci', orElse: () => p.orders.first).slot;
    st.pickBoxForTest(slot);
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('tray-show-all')), findsOneWidget);
    // Back: the box is let go and the whole tray is back.
    await t.tap(back);
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('tray-show-all')), findsNothing);
    expect(find.text('Outlet'), findsOneWidget);
    // Back again at the top: the whole room, nothing undone.
    final before = p.drywallDone;
    await t.tap(back);
    await t.pump(const Duration(seconds: 1));
    expect(p.drywallDone, before);
    expect(find.byKey(const Key('tray-back')), findsOneWidget);
    await t.pump(const Duration(seconds: 1));
  });

  test('when the people of the city move only their labels change: the city is not built again', () {
    final home = HomeProject(seed: 4);
    final city = home.rooms[11];
    final c = Community(houseSeed: 4);
    final a = c.figuresIn(home, 11);
    final s = buildHomeRoom(city, residents: a);
    c.calls.add(HelpCall(99, 0, 'power', 'No power', 3));
    final b = c.figuresIn(home, 11);
    final sw = Stopwatch()..start();
    final moved = relabelResidents(s, city, b)!;
    final relabelUs = sw.elapsedMicroseconds;
    sw.reset();
    final full = buildHomeRoom(city, residents: b);
    final rebuildUs = sw.elapsedMicroseconds;
    // ignore: avoid_print
    print('relabel ${relabelUs}us, full rebuild ${rebuildUs}us, ${full.polys.length} faces');
    expect(identical(moved.polys, s.polys), isTrue, reason: 'the same faces');
    expect(identical(moved.screens, s.screens), isTrue, reason: 'the same signs and screens, so their pictures are kept');
    expect([for (final l in moved.labels) l.text], [for (final l in full.labels) l.text], reason: 'the same labels as a full rebuild');
    expect(moved.labels.any((l) => l.text.contains('Help')), isTrue);
    // Moving them again works from the new scene too.
    expect([for (final l in relabelResidents(moved, city, a)!.labels) l.text], [for (final l in s.labels) l.text]);
    // A room of the house is not a city scene.
    expect(relabelResidents(buildHomeRoom(home.rooms[0]), home.rooms[0], b), isNull);
  });
}
