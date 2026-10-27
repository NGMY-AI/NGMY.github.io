import 'dart:ui' show PictureRecorder;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_house.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_construction_plumbing.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  setUp(() => NgmyTone.enabled = false);

  group('the 3D engine', () {
    test('a box has six faces, a tube has rings, and the camera cannot go inside or too far', () {
      final b = MeshBuilder()..id = 7;
      b.box(V3.zero, const V3(2, 2, 2), Colors.red);
      expect(b.polys.length, 6);
      expect(b.polys.every((p) => p.id == 7), isTrue);
      final t = MeshBuilder();
      t.tube(const [V3(0, 0, 0), V3(0, 5, 0), V3(3, 5, 0)], 0.3, Colors.blue);
      expect(t.polys.length, greaterThan(30));
      final cam = Cam3(dist: 20);
      cam.zoomBy(0.001);
      expect(cam.dist, cam.minDist);
      cam.zoomBy(1e6);
      expect(cam.dist, cam.maxDist);
      cam.orbit(0, 100);
      expect(cam.pitch, lessThan(1.4));
    });

    test('the painter draws a scene and a tap finds the object that is in front', () {
      final b = MeshBuilder()..id = 5;
      b.box(const V3(0, 0, 0), const V3(4, 4, 1), Colors.green);
      b.id = 9;
      b.box(const V3(0, 0, 1.5), const V3(1, 1, 1), Colors.orange);
      final scene = Scene3D(b.polys);
      final cache = HitCache();
      final painter = Scene3DPainter(scene: scene, cam: Cam3(yaw: 0, pitch: 0, dist: 14), hits: cache);
      painter.paint(Canvas(PictureRecorder()), const Size(400, 400));
      expect(cache.pick(const Offset(200, 200)), 9);
      expect(cache.pick(const Offset(200, 150)), 5);
      expect(cache.pick(const Offset(5, 5)), 0);
    });

    test('a big wall close to the camera is cut by the near plane instead of vanishing', () {
      final b = MeshBuilder()..id = 3;
      b.box(const V3(0, 0, 0), const V3(60, 40, 0.5), Colors.white);
      final cache = HitCache();
      Scene3DPainter(scene: Scene3D(b.polys), cam: Cam3(yaw: 0.3, pitch: 0.2, dist: 3), hits: cache).paint(Canvas(PictureRecorder()), const Size(300, 300));
      expect(cache.list, isNotEmpty);
    });
  });

  group('electrical lessons', () {
    test('every lesson builds at every stage and every object has something to say', () {
      for (final l in kElectricalLessons) {
        for (var stage = 0; stage < 3; stage++) {
          final s = WiringState()
            ..power = false
            ..stage = stage
            ..testing = stage == 2
            ..hints = true
            ..labels = true;
          final scene = buildElectricalScene(l, s);
          expect(scene.polys.length, greaterThan(300), reason: l.id);
          expect(scene.polys.length, lessThan(9000), reason: '${l.id} is not too heavy');
          for (final h in l.hookups) {
            expect(scene.info.containsKey(h.id), isTrue, reason: '${l.id} ${h.name}');
          }
        }
      }
    });

    test('the wires only go where they belong, and the power must be off first', () {
      final l = electricalLesson('outlet');
      final s = WiringState();
      Hookup h(int id) => l.hookups.firstWhere((x) => x.id == id);
      expect(tryFasten(l, s, 'black', h(idBrassTop)), contains('STOP'));
      s.power = false;
      expect(tryFasten(l, s, 'black', h(idSilverTop)), contains('BRASS'));
      expect(tryFasten(l, s, 'white', h(idBrassTop)), contains('SILVER'));
      expect(tryFasten(l, s, 'black', h(idGreen)), contains('never goes on the green'));
      expect(tryFasten(l, s, 'ground', h(idBrassBottom)), contains('GREEN'));
      expect(tryFasten(l, s, 'ground', h(idGreen)), isNull);
      expect(tryFasten(l, s, 'white', h(idSilverBottom)), isNull);
      expect(tryFasten(l, s, 'black', h(idBrassTop)), isNull);
      expect(tryFasten(l, s, 'black', h(idBrassBottom)), contains('already'));
      expect(wiringComplete(l, s), isTrue);
    });

    test('the switch takes two black wires on brass screws, and the GFCI refuses the taped LOAD side', () {
      final sw = electricalLesson('switch');
      final s = WiringState()..power = false;
      Hookup h(ElectricalLesson l, int id) => l.hookups.firstWhere((x) => x.id == id);
      expect(tryFasten(sw, s, 'blackLine', h(sw, idBrassBottom)), isNull);
      expect(tryFasten(sw, s, 'blackLoad', h(sw, idBrassTop)), isNull);
      expect(tryFasten(sw, s, 'ground', h(sw, idGreen)), isNull);
      expect(wiringComplete(sw, s), isTrue);
      final g = electricalLesson('gfci');
      final gs = WiringState()..power = false;
      expect(tryFasten(g, gs, 'black', h(g, idBrassTop)), contains('LOAD'));
      expect(tryFasten(g, gs, 'white', h(g, idSilverTop)), contains('LOAD'));
      expect(tryFasten(g, gs, 'black', h(g, idBrassBottom)), isNull);
      expect(tryFasten(g, gs, 'white', h(g, idSilverBottom)), isNull);
      expect(tryFasten(g, gs, 'ground', h(g, idGreen)), isNull);
      expect(wiringComplete(g, gs), isTrue);
    });
  });

  group('plumbing and the house', () {
    test('the drain and the faucet scenes build with and without water', () {
      final p = PlumbState()
        ..placed.addAll({'tail', 'trap', 'arm'})
        ..running = true;
      expect(buildPtrapScene(p).polys.length, greaterThan(500));
      expect(ptrapWater(p, 1.2), isNotEmpty);
      p.leakAt = 'n1';
      expect(ptrapWater(p, 1.2), isNotEmpty);
      final f = PlumbState()
        ..hints = true
        ..valvesOpen = true;
      expect(faucetWater(f, 0.5), isNotEmpty);
      f.attached.addAll({idValveHot: 'hot', idInletHot: 'hot', idValveCold: 'cold', idInletCold: 'cold'});
      expect(faucetComplete(f), isTrue);
      expect(buildFaucetScene(f).polys.length, greaterThan(500));
      expect(faucetWater(f, 0.5).length, greaterThan(20));
    });

    test('hot goes on the left and cold on the right', () {
      final s = PlumbState();
      PlumbHook h(int id) => kFaucetHooks.firstWhere((x) => x.id == id);
      expect(tryHose(s, 'hot', h(idValveCold)), contains('LEFT'));
      expect(tryHose(s, 'cold', h(idInletHot)), contains('RIGHT'));
      expect(tryHose(s, 'hot', h(idValveHot)), isNull);
      expect(tryHose(s, 'hot', h(idValveHot)), contains('already'));
    });

    test('the house builds at every stage, the tripped breaker darkens the light and the lessons are linked', () {
      for (var st = 0; st < kHouseStages.length; st++) {
        final s = HouseState()..stage = st;
        final scene = buildHouseScene(s);
        expect(scene.polys.length, lessThan(12000));
        expect(scene.info.containsKey(idPanel), isTrue);
      }
      expect(houseLessonFor(idHOutlet), 'outlet');
      expect(houseLessonFor(idHSwitch), 'switch');
      expect(houseLessonFor(idHGfci), 'gfci');
      expect(houseLessonFor(idHTrap), 'ptrap');
      expect(houseLessonFor(idHFaucet), 'faucet');
      expect(houseLessonFor(idSlab), isNull);
      final tripped = buildHouseScene(HouseState());
      final fixed = buildHouseScene(HouseState()..breakerTripped = false);
      expect(fixed.polys.length, greaterThan(tripped.polys.length));
      expect(houseWater(HouseState(), 1.0), isNotEmpty);
      expect(houseWater(HouseState()..nutFixed = true, 1.0), isEmpty);
    });
  });

  group('the pages', () {
    const names = ['Wall outlet', 'Light switch', 'GFCI outlet', 'Sink drain (P-trap)', 'Faucet supply lines', 'Build and fix a house'];

    testWidgets('the lab lists every lesson and each one opens', (t) async {
      t.view.physicalSize = const Size(900, 3200);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
      await t.pump(const Duration(milliseconds: 500));
      for (final name in names) {
        expect(find.text(name), findsOneWidget, reason: name);
      }
      for (final name in names) {
        await t.tap(find.text(name));
        await t.pump(const Duration(milliseconds: 500));
        await t.pump(const Duration(milliseconds: 500));
        expect(t.takeException(), isNull, reason: name);
        await t.tap(find.byIcon(Icons.arrow_back_ios_new_rounded).first);
        await t.pump(const Duration(milliseconds: 500));
        await t.pump(const Duration(milliseconds: 500));
      }
    });

    testWidgets('in the outlet lesson the breaker, the wires and the steps work', (t) async {
      t.view.physicalSize = const Size(900, 2000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
      await t.pump(const Duration(milliseconds: 500));
      await t.tap(find.text('Wall outlet'));
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.text('Breaker ON (live)'), findsOneWidget);
      expect(find.text('Turn the breaker OFF first'), findsOneWidget);
      await t.tap(find.text('Breaker ON (live)'));
      await t.pump(const Duration(milliseconds: 400));
      expect(find.text('Breaker OFF (safe)'), findsOneWidget);
      expect(find.text('Fasten every wire first'), findsOneWidget);
      await t.tap(find.text('Black · hot'));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.textContaining('now tap the screw it belongs on'), findsOneWidget);
      await t.tap(find.textContaining('Step '));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.textContaining('Turn the breaker OFF and test'), findsOneWidget);
      await t.pump(const Duration(seconds: 12));
    });

    testWidgets('the house page moves through the building stages', (t) async {
      t.view.physicalSize = const Size(900, 3200);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
      await t.pump(const Duration(milliseconds: 500));
      await t.tap(find.text('Build and fix a house'));
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.text('6. Fixtures'), findsOneWidget);
      expect(find.textContaining('Living room has no power'), findsOneWidget);
      await t.drag(find.byType(Slider), const Offset(-2000, 0));
      await t.pump(const Duration(milliseconds: 500));
      expect(find.text('1. Slab'), findsOneWidget);
      await t.pump(const Duration(seconds: 12));
    });

    testWidgets('a real tap on a screw in the 3D view fastens the wire, and a wrong screw is explained', (t) async {
      t.view.physicalSize = const Size(900, 2000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
      await t.pump(const Duration(milliseconds: 500));
      await t.tap(find.text('Wall outlet'));
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 600));
      final view = find.byWidgetPredicate((w) => w is CustomPaint && w.painter is Scene3DPainter);
      Offset? find3d(int id) {
        final painter = t.widget<CustomPaint>(view).painter! as Scene3DPainter;
        final box = t.getRect(view);
        for (var y = 0.0; y < box.height; y += 3) {
          for (var x = 0.0; x < box.width; x += 3) {
            if (painter.hits.pick(Offset(x, y)) == id) return box.topLeft + Offset(x, y);
          }
        }
        return null;
      }
      // The breaker is on: touching a screw is refused.
      await t.tap(find.text('Bare copper · ground'));
      await t.pump(const Duration(milliseconds: 1500));
      final green = find3d(idGreen);
      expect(green, isNotNull);
      await t.tapAt(green!);
      await t.pump(const Duration(milliseconds: 300));
      expect(find.textContaining('STOP'), findsWidgets);
      // Breaker off, ground wire on the green screw.
      await t.tap(find.text('Breaker ON (live)'));
      await t.pump(const Duration(milliseconds: 400));
      await t.tapAt(find3d(idGreen)!);
      await t.pump(const Duration(milliseconds: 700));
      expect(find.textContaining('Green ground screw: fastened correctly'), findsOneWidget);
      // The white wire on a brass screw is explained, then it goes on a silver screw.
      await t.pump(const Duration(milliseconds: 1200));
      await t.tap(find.text('White · neutral'));
      await t.pump(const Duration(milliseconds: 1600));
      final brass = find3d(idBrassTop) ?? find3d(idBrassBottom);
      expect(brass, isNotNull);
      await t.tapAt(brass!);
      await t.pump(const Duration(milliseconds: 500));
      expect(find.textContaining('SILVER'), findsWidgets);
      await t.pump(const Duration(milliseconds: 1200));
      final silver = find3d(idSilverTop) ?? find3d(idSilverBottom);
      expect(silver, isNotNull);
      await t.tapAt(silver!);
      await t.pump(const Duration(milliseconds: 1800));
      // The black wire goes on a brass screw.
      await t.tap(find.text('Black · hot'));
      await t.pump(const Duration(milliseconds: 1800));
      final brass2 = find3d(idBrassTop) ?? find3d(idBrassBottom);
      expect(brass2, isNotNull);
      await t.tapAt(brass2!);
      await t.pump(const Duration(milliseconds: 600));
      expect(find.textContaining('Every wire is on the right screw'), findsOneWidget);
      // Push the outlet in, put the plate on and test it.
      await t.tap(find.text('Push it into the box'));
      await t.pump(const Duration(milliseconds: 600));
      await t.tap(find.text('Put the cover plate on'));
      await t.pump(const Duration(milliseconds: 600));
      await t.tap(find.text('Power on and test'));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.textContaining('The lesson is complete'), findsOneWidget);
      await t.pump(const Duration(seconds: 12));
    });
  });
}
