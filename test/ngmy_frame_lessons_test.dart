import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_frame_drywall.dart';
import 'package:ngmy/ngmy_frame_geo.dart';
import 'package:ngmy/ngmy_frame_wiring.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

Stud stud(int wall, double u) => kStuds.firstWhere((s) => s.wall == wall && s.u == u);

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
      expect(f.pull(f.boxes.first.id).msg, contains('switch'));
      f.place('switch', stud(2, 80).id);
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        f.drilled.add(s.id);
      }
      expect(f.pull(f.boxes.last.id).ok, isTrue);
      final c = f.boxes.firstWhere((b) => b.kind == 'ceiling');
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
      w.pull(w.boxes.first.id);
      expect(w.tasks.firstWhere((t) => t.text.contains('switch')).done, isFalse, reason: 'far from the door');
      w.reset();
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        w.drilled.add(s.id);
      }
      w.place('switch', stud(2, 80).id);
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
    testWidgets('the wiring page: pick a tool, put a box on a stud, drill, pull the cable', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.text('Wiring a house'), findsOneWidget);
      for (final k in ['look', 'outlet', 'switch']) {
        expect(find.byKey(Key('tool-$k'), skipOffstage: false), findsOneWidget);
      }
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      st.setTool('outlet');
      await t.pump(const Duration(milliseconds: 200));
      st.pickForTest(stud(0, 80).id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.w.boxes.length, 1);
      st.setTool('cable');
      await t.pump(const Duration(milliseconds: 200));
      st.pickForTest(st.w.boxes.first.id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.w.boxes.first.cable, isNull, reason: 'no holes yet');
      expect(st.glow, isNotEmpty, reason: 'the studs to drill light up');
      st.setTool('drill');
      await t.pump(const Duration(milliseconds: 200));
      for (final id in st.glow.toList()) {
        st.pickForTest(id);
      }
      st.setTool('cable');
      st.pickForTest(st.w.boxes.first.id);
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

    testWidgets('the two lessons are in the Lessons list, just before Learn the trades, and open', (t) async {
      t.view.physicalSize = const Size(900, 9000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
      await t.pump(const Duration(milliseconds: 500));
      Offset at(String s) => t.getTopLeft(find.text(s));
      bool before(Offset a, Offset b) => a.dy < b.dy || (a.dy == b.dy && a.dx < b.dx);
      final w = at('Wiring a house'), dw = at('Hanging drywall'), last = at('Learn the trades'), diagram = at('Diagram lessons');
      expect(before(diagram, w), isTrue);
      expect(before(w, dw), isTrue);
      expect(before(dw, last), isTrue);
      await t.tap(find.text('Wiring a house'));
      await t.pump(const Duration(milliseconds: 500));
      await t.pump(const Duration(milliseconds: 500));
      expect(find.byType(NgmyWiringHousePage), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 14));
    });
  });
}
