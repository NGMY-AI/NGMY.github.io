import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_frame_drywall.dart';
import 'package:ngmy/ngmy_frame_geo.dart';
import 'package:ngmy/ngmy_frame_wiring.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

Stud stud(int wall, double u) => kStuds.firstWhere((s) => s.wall == wall && s.u == u);

/// Breaks out the knockouts of every box (a cable cannot go into a box without one).
void open(WiringHouse w) {
  for (final b in w.boxes) {
    b.kos[0] = true;
    b.kos[1] = true;
  }
}

void main() {
  setUp(() => NgmyTone.enabled = false);

  group('the frame', () {
    test('studs stand 16 inches apart, the door and the window are framed with king, jack and short studs, and the cable line passes them', () {
      for (var k = 0; k < 4; k++) {
        final common = [for (final s in kStuds) if (s.wall == k && s.kind == 'common') s.u]..sort();
        for (final u in common) {
          expect(u % 16, 0, reason: 'wall $k stud at $u');
        }
        expect(kStuds.where((s) => s.wall == k && s.kind == 'corner').length, 2);
      }
      for (final s in kStuds.where((s) => s.wall == kDoor.wall && s.atCableHeight)) {
        expect(s.u <= kDoor.u0 || s.u >= kDoor.u1, isTrue, reason: 'a stud in the doorway at ${s.u}');
      }
      expect(kStuds.where((s) => s.kind == 'king').length, 4);
      expect(kStuds.where((s) => s.kind == 'jack').length, 4);
      expect(kStuds.where((s) => s.kind == 'cripple').length, 4);
      expect(kStuds.firstWhere((s) => s.kind == 'cripple' && s.wall == kDoor.wall).atCableHeight, isFalse);
      expect(kStuds.where((s) => s.kind == 'cripple' && s.wall == kWindow.wall && s.atCableHeight).length, 2);
    });
  });

  group('wiring a house: the rules', () {
    test('boxes go on full studs, one to a stud, ceiling boxes on joists', () {
      final w = WiringHouse();
      expect(w.place('outlet', stud(0, 48).id).ok, isTrue);
      expect(w.place('outlet', stud(0, 48).id).ok, isFalse, reason: 'one box to a stud');
      final cripple = kStuds.firstWhere((s) => s.kind == 'cripple');
      expect(w.place('outlet', cripple.id).msg, contains('short stud'));
      expect(w.place('switch', idJoist0).ok, isFalse);
      expect(w.place('ceiling', stud(1, 16).id).msg, contains('joist'));
      expect(w.place('ceiling', idJoist0 + 3).ok, isTrue);
      expect(w.place('ceiling', idJoist0 + 4).ok, isFalse, reason: 'one light');
      expect(w.mistakes, 5);
    });

    test('a stud is drilled once, only where there is wood at the cable line, and the top plate can be drilled', () {
      final w = WiringHouse();
      final s = stud(0, 64);
      expect(w.drill(s.id).ok, isTrue);
      expect(w.drilled, contains(s.id));
      expect(w.drill(s.id).ok, isFalse);
      final over = kStuds.firstWhere((s) => s.kind == 'cripple' && s.wall == kDoor.wall);
      expect(w.drill(over.id).msg, contains('no wood'));
      expect(w.drill(topSegId(0, 2)).ok, isTrue);
      expect(w.drill(idPanel).ok, isFalse);
    });

    test('the cable only goes through studs that have a hole, and the lit ones are the ones still to drill', () {
      final w = WiringHouse();
      w.place('outlet', stud(0, 80).id);
      open(w);
      final box = w.boxes.first;
      final no = w.pull(box.id);
      expect(no.ok, isFalse);
      expect(no.show, isNotEmpty);
      expect(no.msg, contains('hole'));
      var guard = 0;
      while (!w.pull(box.id).ok && guard++ < 20) {
        for (final id in w.pull(box.id).show) {
          w.drill(id);
        }
      }
      expect(box.cable, isNotNull);
      // The panel is at 24 on the same wall: the cable goes through the studs between (32, 48, 64) and no others.
      expect(w.drilled.length, 3);
      expect(box.cable!.inches, greaterThan(50));
      expect(w.pull(box.id).ok, isTrue);
      expect(box.cable, isNull);
    });

    test('a cable never goes across the doorway, the light is fed from the switch through a hole in the top plate, and the finished house passes every task', () {
      final w = finishedWiring();
      expect(w.complete, isTrue, reason: w.tasks.where((t) => !t.done).map((t) => t.text).join(', '));
      expect(w.mistakes, 0);
      expect(w.boxes.length, 6);
      for (final b in w.boxes.where((b) => b.cable != null && !b.cable!.light)) {
        for (final p in b.cable!.path) {
          final doorway = p.z > 55 && p.x > 4 && p.x < 40 && p.y < 60;
          expect(doorway, isFalse, reason: 'box ${b.id} crosses the doorway at $p');
        }
      }
      final f = WiringHouse();
      f.place('ceiling', idJoist0 + 4);
      open(f);
      expect(f.pull(f.boxes.first.id).msg, contains('switch'));
      f.place('switch', stud(2, 80).id);
      open(f);
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        f.drilled.add(s.id);
      }
      expect(f.pull(f.boxes.last.id).ok, isTrue);
      final c = f.boxes.firstWhere((b) => b.kind == 'ceiling');
      expect(f.pull(c.id).msg, contains('Connect the wires'), reason: 'the switch is not wired yet');
      final swb = f.boxes.firstWhere((b) => b.kind == 'switch');
      f.installDevice(swb.id, 'switch');
      wireDeviceRight(swb.ws!, 'switch');
      final r = f.pull(c.id);
      expect(r.ok, isFalse);
      expect(r.msg, contains('top plate'));
      f.drill(r.show.first);
      expect(f.pull(c.id).ok, isTrue);
    });

    test('the switch has to be beside the door to count', () {
      final w = WiringHouse();
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        w.drilled.add(s.id);
      }
      w.place('switch', stud(2, 128).id);
      open(w);
      w.pull(w.boxes.first.id);
      expect(w.tasks.firstWhere((t) => t.text.contains('switch')).done, isFalse, reason: 'far from the door');
      w.reset();
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        w.drilled.add(s.id);
      }
      w.place('switch', stud(2, 80).id);
      open(w);
      w.pull(w.boxes.first.id);
      expect(w.tasks.firstWhere((t) => t.text.contains('switch')).done, isTrue);
    });

    test('the scene shows the boxes, holes and marks for each tool', () {
      final w = finishedWiring();
      for (final tool in ['look', 'outlet', 'switch', 'ceiling', 'drill', 'cable']) {
        final s = buildWiringScene(w, tool: tool);
        expect(s.polys.length, greaterThan(500), reason: tool);
        expect(s.closedShell, isTrue);
      }
      expect(wiringDynamic(w, 5.0, const {}, {stud(0, 32).id}).length, greaterThan(50));
    });
  });

  group('hanging drywall: the rules', () {
    test('there are eighteen places for sheets and ten holes to cut, and the narrow ones need cutting', () {
      expect(kDSlots.length, 18);
      expect(kDSlots.where((s) => s.ceiling).length, 6);
      expect(kDSlots.where((s) => s.needsCut).length, 3 + 1 + 1);
      expect(kDCuts.length, 10);
    });

    test('the ceiling goes first, a narrow piece is cut before it is hung, and screws, holes and corner bead come in order', () {
      final d = DrywallHouse();
      final wall = kDSlots.firstWhere((s) => !s.ceiling && !s.needsCut);
      expect(d.hang(wall.id).msg, contains('ceiling'));
      final narrow = kDSlots.firstWhere((s) => s.ceiling && s.needsCut);
      expect(d.hang(narrow.id).msg, contains('cut it'));
      final whole = kDSlots.firstWhere((s) => s.ceiling && !s.needsCut);
      expect(d.cut(whole.id).ok, isFalse);
      expect(d.cut(narrow.id).ok, isTrue);
      expect(d.hang(narrow.id).ok, isTrue);
      expect(d.cut(narrow.id).ok, isFalse, reason: 'already up');
      expect(d.screw(whole.id).ok, isFalse, reason: 'not hung');
      expect(d.screw(narrow.id).ok, isTrue);
      expect(d.saw(kDCuts.first.id).ok, isFalse, reason: 'its sheet is not up');
      expect(d.bead(0).ok, isFalse);
      expect(d.mud(1, 0).msg, contains('Not yet'));
    });

    test('finishing goes mud, tape, two more coats, sand, prime, with drying in between', () {
      final d = DrywallHouse();
      for (final s in kDSlots) {
        if (s.needsCut) d.cut(s.id);
      }
      for (final s in kDSlots.where((s) => s.ceiling)) {
        expect(d.hang(s.id).ok, isTrue);
      }
      for (final s in kDSlots.where((s) => !s.ceiling)) {
        expect(d.hang(s.id).ok, isTrue);
      }
      for (final s in kDSlots) {
        expect(d.screw(s.id).ok, isTrue);
      }
      expect(d.allHung && d.allScrewed, isTrue);
      expect(d.mud(1, 0).msg, contains('hole'), reason: 'the holes are not cut yet');
      for (final c in kDCuts) {
        expect(d.saw(c.id).ok, isTrue);
      }
      expect(d.allCut, isTrue);
      expect(d.mud(2, 0).msg, contains('corner bead'), reason: 'the window wall needs its bead');
      expect(d.bead(0).ok && d.bead(1).ok, isTrue);
      for (var s = 0; s < 5; s++) {
        expect(d.tape(s, 0).msg, contains('Mud first'));
        expect(d.mud(s, 0).ok, isTrue);
        expect(d.mud(s, 0).msg, contains('tape'), reason: 'tape goes into the wet mud');
        expect(d.tape(s, 0).ok, isTrue);
        expect(d.mud(s, 1).msg, contains('wet'), reason: 'a second coat on wet mud cracks');
        expect(d.mud(s, 10).ok, isTrue);
        expect(d.sand(s, 10).ok, isFalse, reason: 'sand only after the third coat');
        expect(d.mud(s, 20).ok, isTrue);
        expect(d.sand(s, 21).msg, contains('wet'));
        expect(d.paint(s).ok, isFalse, reason: 'sand first');
        expect(d.sand(s, 40).ok, isTrue);
        expect(d.paint(s).ok, isTrue);
      }
      expect(d.complete, isTrue);
      expect(d.mistakes, greaterThan(0));
      d.reset();
      expect(d.complete, isFalse);
      expect(d.hung, 0);
    });

    test('the picture: sheets, the ceiling lit toward the viewer, and the marks of each tool', () {
      final d = DrywallHouse();
      for (final tool in ['look', 'sheet', 'cut', 'screw', 'saw', 'bead', 'mud', 'tape', 'sand', 'paint']) {
        expect(buildDrywallScene(d, tool: tool).polys.length, greaterThan(500), reason: tool);
      }
      final bare = buildDrywallScene(d).polys.length;
      for (final s in kDSlots) {
        if (s.needsCut) d.cut(s.id);
        d.hang(s.id);
        d.screw(s.id);
      }
      expect(buildDrywallScene(d).polys.length, greaterThan(bare + 100));
      expect(drywallCeiling(d, 0, const V3(0, 1, 0)).length, greaterThan(30));
      expect(drywallCeiling(DrywallHouse(), 0, const V3(0, 1, 0)), isEmpty);
    });
  });

  group('the pages', () {
    for (final drywall in [false, true]) {
      testWidgets('double tap on the floor walks there, ${drywall ? 'in the drywall lesson' : 'in the wiring lesson'}, also from the view of the whole room', (t) async {
        t.view.physicalSize = const Size(900, 1700);
        t.view.devicePixelRatio = 1.0;
        addTearDown(t.view.reset);
        await t.pumpWidget(MaterialApp(home: drywall ? const NgmyDrywallPage() : const NgmyWiringHousePage()));
        await t.pump(const Duration(milliseconds: 600));
        final cam = t.widget<Scene3DView>(find.byType(Scene3DView).first).cam;
        final r = t.getRect(find.byType(Scene3DView).first);
        final p = Offset(r.center.dx, r.bottom - 150);
        final before = cam.target;
        await t.tapAt(p);
        await t.pump(const Duration(milliseconds: 80));
        await t.tapAt(p);
        await t.pump(const Duration(milliseconds: 1800));
        expect((cam.target - before).len, greaterThan(8), reason: 'the view moved to where the double tap was');
        // From the whole room, a double tap goes back inside, to that spot.
        await t.tap(find.text('Whole room'));
        await t.pump(const Duration(milliseconds: 1800));
        expect(find.text('Inside'), findsOneWidget);
        final r2 = t.getRect(find.byType(Scene3DView).first);
        await t.tapAt(Offset(r2.center.dx, r2.center.dy + 40));
        await t.pump(const Duration(milliseconds: 80));
        await t.tapAt(Offset(r2.center.dx, r2.center.dy + 40));
        await t.pump(const Duration(milliseconds: 1800));
        expect(find.text('Whole room'), findsOneWidget, reason: 'back inside the room');
        await t.pump(const Duration(seconds: 14));
        await t.pumpWidget(const SizedBox());
        await t.pump(const Duration(seconds: 14));
      });

      testWidgets('looking up at the ceiling, a double tap closes in on the spot that was tapped${drywall ? ' (drywall)' : ' (wiring)'}', (t) async {
        t.view.physicalSize = const Size(900, 1700);
        t.view.devicePixelRatio = 1.0;
        addTearDown(t.view.reset);
        await t.pumpWidget(MaterialApp(home: drywall ? const NgmyDrywallPage() : const NgmyWiringHousePage()));
        await t.pump(const Duration(milliseconds: 600));
        final cam = t.widget<Scene3DView>(find.byType(Scene3DView).first).cam;
        cam.glideTo(pitch: -0.9, dist: 60);
        await t.pump(const Duration(milliseconds: 1800));
        final r = t.getRect(find.byType(Scene3DView).first);
        final p = Offset(r.center.dx + 60, r.center.dy - 60);
        final spot = cam.roomPoint(p - r.topLeft, r.size, -72, 72, 0, 96, -60, 60);
        expect(spot, isNotNull, reason: 'looking up, the finger still touches the ceiling or a wall');
        expect(spot!.y, greaterThan(40));
        final before = cam.target;
        await t.tapAt(p);
        await t.pump(const Duration(milliseconds: 80));
        await t.tapAt(p);
        await t.pump(const Duration(milliseconds: 1800));
        expect((cam.target - before).len, greaterThan(3), reason: 'the view moved to the spot that was tapped');
        await t.pump(const Duration(seconds: 14));
        await t.pumpWidget(const SizedBox());
        await t.pump(const Duration(seconds: 14));
      });
    }

    testWidgets('tap a tool lying on the floor and you pick it up: the cable roll and the drill in the wiring room', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      expect(st.msg, contains('Tap a tool on the floor'), reason: 'the first message says how to start');
      expect(st.tool, 'look');
      st.pickForTest(idPropRoll);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.tool, 'cable');
      expect(st.msg, contains('picked up the roll of cable'));
      expect(st.msg, contains('no box yet'), reason: 'and it says what to do first');
      st.pickForTest(idPropDrill);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.tool, 'drill');
      // They are really in the picture, with a pad round each so a finger finds them.
      for (final id in [idPropRoll, idPropDrill]) {
        expect(st.scene.polys.where((p) => p.id == id).length, greaterThan(5), reason: 'prop $id');
        expect(st.scene.polys.any((p) => p.id == id && p.alpha < 0.1), isTrue, reason: 'pad of $id');
        expect(st.scene.info[id], isNotNull);
      }
      await t.pump(const Duration(seconds: 14));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });

    testWidgets('a real finger tap on the cable roll in the picture picks it up', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      final r = t.getRect(find.byType(Scene3DView).first);
      // Look for the roll where it is on the screen: tap along the floor until something is picked up.
      var found = false;
      for (var y = r.bottom - 40; y > r.center.dy && !found; y -= 25) {
        for (var x = r.left + 40; x < r.right - 60 && !found; x += 25) {
          await t.tapAt(Offset(x, y));
          await t.pump(const Duration(milliseconds: 500));
          if (st.tool == 'cable' || st.tool == 'drill') found = true;
        }
      }
      expect(found, isTrue, reason: 'a tap on a tool on the floor picks it up');
      await t.pump(const Duration(seconds: 14));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });

    testWidgets('tap any tool on the drywall floor and you pick it up: the saw, the roller, the sander, the mud, the tape and the rest', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyDrywallPage()));
      await t.pump(const Duration(milliseconds: 600));
      final st = t.state<NgmyDrywallPageState>(find.byType(NgmyDrywallPage));
      expect(st.msg, contains('Tap a tool on the floor'));
      final expected = {idPropStack: 'sheet', idPropMud: 'mud', idPropTape: 'tape', idPropKnife: 'mud', idPropGun: 'screw', idPropSquare: 'cut', idPropPole: 'sand', idPropBead: 'bead', idPropTray: 'paint', idPropSaw: 'saw'};
      for (final e in expected.entries) {
        st.pickForTest(e.key);
        await t.pump(const Duration(milliseconds: 100));
        expect(st.tool, e.value, reason: 'prop ${e.key}');
        expect(st.msg, contains('picked up'));
        expect(st.scene.polys.any((p) => p.id == e.key && p.alpha < 0.1), isTrue, reason: 'a pad round prop ${e.key}');
      }
      // With nothing hung yet, the tools that need work done first say what to do first.
      st.pickForTest(idPropSaw);
      expect(st.msg, contains('Hang the sheets'));
      st.pickForTest(idPropTray);
      expect(st.msg, contains('sanded'));
      st.pickForTest(idPropMud);
      expect(st.msg, contains('Nothing is ready for mud'));
      await t.pump(const Duration(seconds: 14));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });

    testWidgets('every tool is on the screen at once: the tools wrap into rows and none is hidden at the side', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyDrywallPage()));
      await t.pump(const Duration(milliseconds: 600));
      for (final k in ['look', 'sheet', 'cut', 'screw', 'saw', 'bead', 'mud', 'tape', 'sand', 'paint']) {
        expect(find.byKey(Key('tool-$k')), findsOneWidget, reason: k);
      }
      await t.pump(const Duration(seconds: 14));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });

    testWidgets('after a cable cannot be pulled, the lit studs can be drilled in one tap and then the cable goes through', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      st.setTool('outlet');
      st.pickForTest(stud(2, 112).id);
      st.setTool('knock');
      st.pickForTest(koId(st.w.boxes.first.id, 1));
      st.setTool('cable');
      st.pickForTest(koId(st.w.boxes.first.id, 1));
      await t.pump(const Duration(milliseconds: 200));
      expect(st.glow.length, greaterThan(3), reason: 'every stud still to drill is lit, not only a few');
      await t.tap(find.text('Drill the lit'));
      await t.pump(const Duration(milliseconds: 200));
      st.pickForTest(koId(st.w.boxes.first.id, 1));
      await t.pump(const Duration(milliseconds: 300));
      expect(st.w.boxes.first.cable, isNotNull);
      await t.pump(const Duration(seconds: 14));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });

    testWidgets('the wiring page: pick a tool, put a box on a stud, drill, pull the cable', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.text('Wiring a house'), findsOneWidget);
      for (final k in ['look', 'knock', 'drill', 'cable']) {
        expect(find.byKey(Key('tool-$k'), skipOffstage: false), findsOneWidget);
      }
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      st.setTool('outlet');
      await t.pump(const Duration(milliseconds: 200));
      st.pickForTest(stud(0, 80).id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.w.boxes.length, 1);
      st.setTool('knock');
      st.pickForTest(koId(st.w.boxes.first.id, 1));
      expect(st.w.boxes.first.openKo, 1);
      st.setTool('cable');
      await t.pump(const Duration(milliseconds: 200));
      st.pickForTest(koId(st.w.boxes.first.id, 1));
      await t.pump(const Duration(milliseconds: 200));
      expect(st.w.boxes.first.cable, isNull, reason: 'no holes yet');
      expect(st.glow, isNotEmpty, reason: 'the studs to drill light up');
      st.setTool('drill');
      await t.pump(const Duration(milliseconds: 200));
      for (final id in st.glow.toList()) {
        st.pickForTest(id);
      }
      st.setTool('cable');
      st.pickForTest(koId(st.w.boxes.first.id, 1));
      await t.pump(const Duration(milliseconds: 300));
      expect(st.w.boxes.first.cable, isNotNull);
      await t.tap(find.text('Whole room'));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.text('Inside'), findsOneWidget);
      await t.pump(const Duration(seconds: 14));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });

    testWidgets('the drywall page: hang the ceiling, and the tools are all there', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyDrywallPage()));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.text('Hanging drywall'), findsOneWidget);
      for (final k in ['look', 'sheet', 'cut']) {
        expect(find.byKey(Key('tool-$k'), skipOffstage: false), findsOneWidget);
      }
      final st = t.state<NgmyDrywallPageState>(find.byType(NgmyDrywallPage));
      st.setTool('sheet');
      await t.pump(const Duration(milliseconds: 200));
      final whole = kDSlots.firstWhere((s) => s.ceiling && !s.needsCut);
      st.pickForTest(whole.id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.d.sheets[whole.id]!.placed, isTrue);
      final wall = kDSlots.firstWhere((s) => !s.ceiling);
      st.pickForTest(wall.id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.d.sheets[wall.id]!.placed, isFalse, reason: 'the ceiling is first');
      await t.pump(const Duration(seconds: 14));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });

    testWidgets('the two lessons sit side by side in the second row from the bottom of the Lessons list, and open', (t) async {
      t.view.physicalSize = const Size(900, 9000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
      await t.pump(const Duration(milliseconds: 500));
      Offset at(String s) => t.getTopLeft(find.text(s));
      bool before(Offset a, Offset b) => a.dy < b.dy || (a.dy == b.dy && a.dx < b.dx);
      final w = at('Wiring a house'), dw = at('Hanging drywall'), last = at('Learn the trades'), diagram = at('Diagram lessons');
      expect((w.dy - dw.dy).abs() < 1, isTrue, reason: "wiring and drywall are side by side in one row");
      expect((diagram.dy - last.dy).abs() < 1, isTrue, reason: "the diagram lessons and learn the trades are the last row");
      expect(w.dy < diagram.dy, isTrue, reason: "the wiring and drywall row is the second row from the bottom");
      await t.tap(find.text('Wiring a house'));
      await t.pump(const Duration(milliseconds: 500));
      await t.pump(const Duration(milliseconds: 500));
      expect(find.byType(NgmyWiringHousePage), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });
  });
}
