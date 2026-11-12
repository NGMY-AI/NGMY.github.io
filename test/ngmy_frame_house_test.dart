import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_frame_devices.dart';
import 'package:ngmy/ngmy_frame_drywall.dart';
import 'package:ngmy/ngmy_frame_geo.dart';
import 'package:ngmy/ngmy_frame_wiring.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';

Stud stud(int wall, double u) => kStuds.firstWhere((s) => s.wall == wall && s.u == u && s.takesBox);

void main() {
  setUp(() {
    NgmyTone.enabled = false;
    SharedPreferences.setMockInitialValues({});
  });

  group('knockouts and a cable from box to box', () {
    test('a cable goes into a box through a knockout that has been broken out, and every cable needs its own', () {
      final w = WiringHouse();
      w.place('outlet', stud(0, 80).id);
      final a = w.boxes.first;
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        w.drilled.add(s.id);
      }
      final no = w.pull(a.id);
      expect(no.ok, isFalse);
      expect(no.msg, contains('knockout'));
      expect(no.show, [koId(a.id, 0), koId(a.id, 1)], reason: 'both tabs light up');
      expect(w.knockout(koId(a.id, 1)).ok, isTrue);
      expect(w.knockout(koId(a.id, 1)).ok, isFalse, reason: 'it is out already');
      expect(a.openKo, 1);
      expect(w.pull(a.id).ok, isTrue);
      // A second cable would need a second hole: from this box to another.
      w.place('outlet', stud(0, 112).id);
      final b = w.boxes.last;
      w.knockout(koId(b.id, 0));
      final noSrc = w.pull(b.id, from: a.id);
      expect(noSrc.ok, isFalse);
      expect(noSrc.msg, contains('free knockout'));
      expect(w.knockout(koId(a.id, 0)).ok, isTrue);
      final chain = w.pull(b.id, from: a.id);
      expect(chain.ok, isTrue, reason: chain.msg);
      expect(b.from, a.id);
      expect(w.powered(b), isTrue);
      expect(b.cable!.path.first, isNot(a.cable!.path.first), reason: 'the second cable starts at the first box, not at the panel');
      // Pulling the first cable out takes the one after it out of use too.
      expect(w.pull(a.id).ok, isTrue);
      expect(a.cable, isNull);
      expect(b.cable, isNull, reason: 'it was fed from the first box');
      expect(w.powered(b), isFalse);
    });

    test('a cable can only start at the panel or at a box that has power, and never at the light', () {
      final w = WiringHouse();
      w.place('outlet', stud(0, 80).id);
      w.place('outlet', stud(0, 112).id);
      for (final b in w.boxes) {
        b.kos[0] = true;
        b.kos[1] = true;
      }
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        w.drilled.add(s.id);
      }
      expect(w.pull(w.boxes[1].id, from: w.boxes[0].id).msg, contains('already has power'));
      expect(w.pull(w.boxes[1].id, from: 9999).ok, isFalse);
    });
  });

  group('devices, the breaker, and the things that plug in', () {
    WiringHouse wired() {
      final w = finishedWiring();
      for (final b in w.boxes) {
        w.installDevice(b.id, b.kind == 'ceiling' ? 'light' : (b.kind == 'switch' ? 'switch' : 'outlet'));
        wireDeviceRight(b.ws!, b.dev!);
      }
      return w;
    }

    test('a device fits its own kind of box and only a box that has its cable', () {
      final w = WiringHouse();
      w.place('outlet', stud(0, 80).id);
      final box = w.boxes.first;
      expect(w.installDevice(box.id, 'outlet').msg, contains('cable'), reason: 'no cable yet');
      final f = finishedWiring();
      final outlet = f.boxes.firstWhere((b) => b.kind == 'outlet');
      final sw = f.boxes.firstWhere((b) => b.kind == 'switch');
      final light = f.boxes.firstWhere((b) => b.kind == 'ceiling');
      expect(f.installDevice(outlet.id, 'switch').ok, isFalse);
      expect(f.installDevice(sw.id, 'gfci').ok, isFalse);
      expect(f.installDevice(light.id, 'outlet').ok, isFalse);
      expect(f.installDevice(outlet.id, 'gfci').ok, isTrue);
      expect(f.installDevice(sw.id, 'switch3').ok, isTrue);
      expect(f.installDevice(light.id, 'fan').ok, isTrue);
      expect(outlet.ws, isNotNull);
      // Changing one that is not wired yet is allowed; one that is wired has to be carried on with.
      expect(f.installDevice(outlet.id, 'outlet').ok, isTrue);
      wireDeviceRight(outlet.ws!, 'outlet');
      expect(f.installDevice(outlet.id, 'gfci').msg, contains('already'));
    });

    test('the breaker turns the finished devices on; a light needs its switch on; a TV runs from a working outlet', () {
      final w = wired();
      final sw = w.boxes.firstWhere((b) => b.kind == 'switch');
      final light = w.boxes.firstWhere((b) => b.kind == 'ceiling');
      final outlet = w.boxes.firstWhere((b) => b.kind == 'outlet');
      expect(w.runs(light), isFalse, reason: 'the breaker is off');
      expect(w.plug(outlet.id, 'tv').msg, contains('breaker is off'));
      final on = w.toggleBreaker();
      expect(on.ok, isTrue, reason: on.msg);
      expect(w.runs(outlet), isTrue);
      expect(w.runs(light), isFalse, reason: 'its switch is off');
      expect(w.flip(sw.id).msg, contains('light is on'));
      expect(w.runs(light), isTrue);
      expect(w.flip(sw.id).ok, isTrue);
      expect(w.runs(light), isFalse);
      expect(w.plug(outlet.id, 'phone').ok, isTrue);
      expect(w.plug(outlet.id, 'tv').ok, isTrue, reason: 'it swaps');
      expect(w.plugged[outlet.id], 'tv');
      expect(w.plug(outlet.id, 'tv').msg, 'Unplugged.');
      expect(w.plug(outlet.id, 'washerM').msg, contains('does not fit'), reason: 'a big machine needs its own outlet');
      expect(w.jobs['power'], isTrue);
      expect(w.toggleBreaker().msg, contains('OFF'));
      expect(w.runs(outlet), isFalse);
      // Everything is drawn: the plates, the appliance, the screen of the TV.
      w.toggleBreaker();
      w.plug(outlet.id, 'tv');
      expect(applianceScreens(w), isNotEmpty);
      expect(deviceDynamic(w, 1.0).length, greaterThan(10));
    });

    test('a machine plugs into the outlet made for it', () {
      final w = finishedWiring();
      final outlet = w.boxes.firstWhere((b) => b.kind == 'outlet');
      w.installDevice(outlet.id, 'washer');
      wireDeviceRight(outlet.ws!, 'washer');
      w.toggleBreaker();
      expect(w.plug(outlet.id, 'washerM').ok, isTrue);
      expect(w.plug(outlet.id, 'rangeM').msg, contains('does not fit'));
    });

    test('a device that is not finished does not work, and the power does nothing for it', () {
      final w = finishedWiring();
      final outlet = w.boxes.firstWhere((b) => b.kind == 'outlet');
      w.installDevice(outlet.id, 'outlet');
      expect(w.deviceDone(outlet), isFalse);
      expect(w.toggleBreaker().msg, contains('nothing to test'));
      expect(w.plug(outlet.id, 'tv').msg, contains('Wire the outlet'));
    });
  });

  group('the hint', () {
    test('following the hints from an empty room wires the whole house with no mistake', () {
      final w = WiringHouse();
      var n = 0;
      while (!w.complete && n++ < 200) {
        final h = w.hint();
        expect(h.text, isNotEmpty);
        switch (h.tool) {
          case 'outlet' || 'switch' || 'ceiling':
            expect(w.place(h.tool, h.ids.first).ok, isTrue, reason: h.text);
          case 'knock':
            expect(w.knockout(h.ids.first).ok, isTrue, reason: h.text);
          case 'drill':
            for (final id in h.ids) {
              w.drill(id);
            }
          case 'cable':
            final r = w.pull(h.ids.first);
            expect(r.ok, isTrue, reason: '${h.text} ${r.msg}');
          default:
            fail('unexpected hint: ${h.text}');
        }
      }
      expect(w.complete, isTrue);
      expect(w.mistakes, 0);
      // Then the devices, the power and the switch.
      for (final b in w.boxes) {
        final h = w.hint();
        expect(h.ids, contains(b.id));
        w.installDevice(b.id, b.kind == 'ceiling' ? 'light' : (b.kind == 'switch' ? 'switch' : 'outlet'));
        wireDeviceRight(b.ws!, b.dev!);
      }
      expect(w.hint().tool, 'breaker');
      w.toggleBreaker();
      expect(w.hint().text, contains('Flip the switch'));
      w.flip(w.boxes.firstWhere((b) => b.kind == 'switch').id);
      expect(w.hint().text, contains('Everything works'));
      expect(w.fullyWired, isTrue);
    });

    test('the drywall hints lead from the empty room to a finished one', () {
      final d = DrywallHouse();
      var now = 0.0;
      var n = 0;
      while (!d.complete && n++ < 400) {
        final h = d.hint(now);
        switch (h.tool) {
          case 'cut':
            expect(d.cut(h.ids.first).ok, isTrue, reason: h.text);
          case 'sheet':
            expect(d.hang(h.ids.first).ok, isTrue, reason: h.text);
          case 'screw':
            expect(d.screw(h.ids.first).ok, isTrue, reason: h.text);
          case 'saw':
            expect(d.saw(h.ids.first).ok, isTrue, reason: h.text);
          case 'bead':
            expect(d.bead(h.ids.first - idBead0).ok, isTrue, reason: h.text);
          case 'mud':
            expect(d.mud(h.ids.first - idSurf0, now).ok, isTrue, reason: h.text);
          case 'tape':
            expect(d.tape(h.ids.first - idSurf0, now).ok, isTrue, reason: h.text);
          case 'sand':
            expect(d.sand(h.ids.first - idSurf0, now).ok, isTrue, reason: h.text);
          case 'paint':
            expect(d.paint(h.ids.first - idSurf0).ok, isTrue, reason: h.text);
          default:
            expect(h.text, contains('wait'), reason: 'only waiting is left: ${h.text}');
            now += 5;
        }
      }
      expect(d.complete, isTrue);
      expect(d.mistakes, 0);
      expect(d.jobs.values.every((e) => e), isTrue);
      expect(d.hint(now).text, contains('finished'));
    });
  });

  group('the pages: categories, hint and stars', () {
    testWidgets('the tools open in groups: the TV button shows the TVs, and Back goes to the first screen of tools', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      for (final k in ['look', 'knock', 'drill', 'cable', 'breaker', 'hint']) {
        expect(find.byKey(Key('tool-$k')), findsOneWidget, reason: k);
      }
      for (final c in ['boxes', 'outlets', 'switches', 'lights', 'tvs', 'phones', 'appliances']) {
        expect(find.byKey(Key('cat-$c')), findsOneWidget, reason: c);
      }
      expect(find.byKey(const Key('tool-app:tv')), findsNothing);
      await t.tap(find.byKey(const Key('cat-tvs')));
      await t.pump(const Duration(milliseconds: 200));
      for (final a in kTvs) {
        expect(find.byKey(Key('tool-app:${a.key}')), findsOneWidget, reason: a.label);
      }
      expect(find.byKey(const Key('tool-look')), findsNothing, reason: 'the group replaces the first screen');
      await t.tap(find.byKey(const Key('tool-app:lgtv')));
      await t.pump(const Duration(milliseconds: 200));
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      expect(st.tool, 'app:lgtv');
      await t.tap(find.byKey(const Key('menu-back')));
      await t.pump(const Duration(milliseconds: 200));
      expect(find.byKey(const Key('tool-look')), findsOneWidget);
      // The other groups.
      await t.tap(find.byKey(const Key('cat-switches')));
      await t.pump(const Duration(milliseconds: 200));
      expect(find.byKey(const Key('tool-dev:switch')), findsOneWidget);
      expect(find.byKey(const Key('tool-dev:switch3')), findsOneWidget);
      await t.tap(find.byKey(const Key('menu-back')));
      await t.pump(const Duration(milliseconds: 200));
      await t.tap(find.byKey(const Key('cat-boxes')));
      await t.pump(const Duration(milliseconds: 200));
      for (final k in ['outlet', 'switch', 'ceiling']) {
        expect(find.byKey(Key('tool-$k')), findsOneWidget, reason: k);
      }
      await t.pump(const Duration(seconds: 16));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 16));
    });

    testWidgets('a job finished without a hint earns a star and a hint costs two', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      expect(st.net, 0);
      // An outlet on the panel wall, with its cable, all done without a hint.
      st.setTool('outlet');
      st.pickForTest(stud(0, 80).id);
      st.setTool('knock');
      st.pickForTest(koId(st.w.boxes.first.id, 1));
      st.setTool('drill');
      for (final s in kStuds.where((s) => s.wall == 0 && s.u > 24 && s.u < 80)) {
        st.pickForTest(s.id);
      }
      st.setTool('cable');
      st.pickForTest(st.w.boxes.first.id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.w.boxes.first.cable, isNotNull);
      expect(st.net, 1, reason: 'one star for the job done without a hint');
      expect(st.msg, contains('+1'));
      // A hint costs two stars and lights up the place.
      await t.tap(find.byKey(const Key('tool-hint')));
      await t.pump(const Duration(milliseconds: 200));
      expect(st.net, -1);
      expect(st.hintsUsed, 1);
      expect(st.msg, startsWith('Hint (−2 ⭐)'));
      expect(st.glow, isNotEmpty);
      // The next job, done after a hint, pays nothing.
      st.setTool('outlet');
      st.pickForTest(stud(1, 96).id);
      st.setTool('knock');
      st.pickForTest(koId(st.w.boxes[1].id, 1));
      st.setTool('drill');
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        st.pickForTest(s.id);
      }
      st.setTool('cable');
      st.pickForTest(st.w.boxes[1].id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.w.boxes[1].cable, isNotNull);
      expect(st.net, -1, reason: 'no star for a job done after a hint');
      // And the next one is paid again.
      st.setTool('outlet');
      st.pickForTest(stud(2, 112).id);
      st.setTool('knock');
      st.pickForTest(koId(st.w.boxes[2].id, 0));
      st.setTool('cable');
      st.pickForTest(st.w.boxes[2].id);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.net, 0);
      await t.pump(const Duration(seconds: 16));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 16));
    });

    testWidgets('the close-up of the device opens when a device is tapped on a box that has its cable, and the box keeps what is done', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      st.setTool('outlet');
      st.pickForTest(stud(0, 80).id);
      final box = st.w.boxes.first;
      box.kos[1] = true;
      for (final s in kStuds.where((s) => s.atCableHeight)) {
        st.w.drilled.add(s.id);
      }
      st.setTool('cable');
      st.pickForTest(box.id);
      await t.tap(find.byKey(const Key('cat-outlets')));
      await t.pump(const Duration(milliseconds: 200));
      await t.tap(find.byKey(const Key('tool-dev:gfci')));
      await t.pump(const Duration(milliseconds: 200));
      st.pickForTest(box.id);
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.byType(ElectricalLessonPage), findsOneWidget, reason: 'the close-up');
      expect(box.dev, 'gfci');
      Navigator.of(t.element(find.byType(ElectricalLessonPage))).pop();
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.byType(ElectricalLessonPage), findsNothing);
      expect(st.msg, contains('Not finished'));
      await t.pump(const Duration(seconds: 16));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 16));
    });

    testWidgets('tapping a box with the Knockout tool closes in on it, and the drywall page has the hint too', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyWiringHousePage()));
      await t.pump(const Duration(milliseconds: 600));
      final st = t.state<NgmyWiringHousePageState>(find.byType(NgmyWiringHousePage));
      st.setTool('outlet');
      st.pickForTest(stud(3, 64).id);
      st.setTool('knock');
      final cam = t.widget<Scene3DView>(find.byType(Scene3DView)).cam;
      st.pickForTest(st.w.boxes.first.id);
      for (var i = 0; i < 10; i++) {
        await t.pump(const Duration(milliseconds: 250));
      }
      expect(cam.dist, lessThan(30), reason: 'the view is right up to the box');
      await t.pump(const Duration(seconds: 16));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 16));

      await t.pumpWidget(const MaterialApp(home: NgmyDrywallPage()));
      await t.pump(const Duration(milliseconds: 600));
      final dw = t.state<NgmyDrywallPageState>(find.byType(NgmyDrywallPage));
      expect(find.byKey(const Key('tool-hint')), findsOneWidget);
      await t.tap(find.byKey(const Key('tool-hint')));
      await t.pump(const Duration(milliseconds: 200));
      expect(dw.net, -2);
      expect(dw.glow, isNotEmpty);
      expect(dw.msg, contains('ceiling'));
      await t.pump(const Duration(seconds: 16));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 16));
    });
  });
}
