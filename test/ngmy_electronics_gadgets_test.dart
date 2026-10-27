import 'dart:ui' show PictureRecorder;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:ngmy/ngmy_electronics_board.dart';
import 'package:ngmy/ngmy_electronics_lab.dart';
import 'package:ngmy/ngmy_electronics_save.dart';
import 'package:ngmy/ngmy_electronics_extra_parts.dart';
import 'package:ngmy/ngmy_electronics_more_parts.dart';
import 'package:ngmy/ngmy_electronics_screens.dart';
import 'package:ngmy/ngmy_electronics_tv.dart';

ElectronicsBoard loop(String kind, {double volts = 3, bool backwards = false, int steps = 120}) {
  final b = ElectronicsBoard();
  final bat = b.add('battery', 0.2, 0.3)..volts = volts..charge = volts == 1.5 ? 0 : 1;
  final d = b.add(kind, 0.8, 0.3);
  if (backwards) {
    b.connect(bat, 0, d, 1);
    b.connect(d, 0, bat, 1);
  } else {
    b.connect(bat, 0, d, 0);
    b.connect(d, 1, bat, 1);
  }
  for (var i = 0; i < steps; i++) {
    b.step(1 / 30);
  }
  return b;
}

void main() {
  test('every new appliance runs on a battery in its range, and burns with too many volts', () {
    for (final k in kExtraDeviceSpecs.keys) {
      final spec = kExtraDeviceSpecs[k]!;
      final ok = [for (final v in const [3.0, 4.5, 9.0, 12.0]) if (v >= spec.minV + 0.8 && v <= spec.maxV) v];
      if (ok.isEmpty) continue; // needs a step-down converter, tested below
      final b = loop(k, volts: ok.first);
      expect(b.of(k).first.glow, greaterThan(0), reason: '$k should run on ${ok.first} V');
      expect(b.of(k).first.burnt, isFalse, reason: k);
      expect(b.diagnose(b.of(k).first), isNull, reason: k);
      if (spec.maxV < 12) {
        final hot = loop(k, volts: 12);
        expect(hot.of(k).first.burnt, isTrue, reason: '$k should burn at 12 V');
      }
    }
  });

  test('the TV turns on at 12 V and shows its channel; it stays dark with too few volts', () {
    final on = loop('tv', volts: 12);
    expect(on.of('tv').first.glow, 1);
    expect(on.of('tv').first.onAge, greaterThan(3));
    expect(on.diagnose(on.of('tv').first), isNull);
    final weak = loop('tv', volts: 3);
    expect(weak.of('tv').first.glow, 0);
    expect(weak.diagnose(weak.of('tv').first), contains('needs at least 5.5 volts'));
  });

  test('a gadget plugged in backwards does not work and the lab says so', () {
    final b = loop('tv', volts: 12, backwards: true);
    expect(b.of('tv').first.glow, 0);
    expect(b.diagnose(b.of('tv').first), contains('backwards'));
  });

  test('a gadget with nothing wired, or only one end, explains what to do', () {
    final b = ElectronicsBoard();
    final tv = b.add('tv', 0.5, 0.3);
    b.step(0.1);
    expect(b.diagnose(tv), contains('not connected'));
    final bat = b.add('battery', 0.2, 0.3);
    b.connect(bat, 0, tv, 0);
    b.step(0.1);
    expect(b.diagnose(tv), contains('Only one end'));
  });

  test('too many volts burn a gadget and the reason is kept', () {
    final b = loop('calculator', volts: 9);
    final c = b.of('calculator').first;
    expect(c.burnt, isTrue);
    expect(b.diagnose(c), contains('made for 1.2 to 4.8 volts'));
    b.repairAll();
    expect(b.of('calculator').first.burnt, isFalse);
  });

  test('a 1.5 V battery starts flat, charges from a solar panel, then runs a speaker', () {
    final flat = loop('speaker', volts: 1.5);
    expect(flat.of('battery').first.charge, 0);
    expect(flat.of('speaker').first.glow, 0);
    expect(flat.diagnose(flat.of('speaker').first), contains('flat'));

    final b = ElectronicsBoard();
    final solar = b.add('solar', 0.2, 0.3)..level = 0.9;
    final cell = b.add('battery', 0.8, 0.3)..volts = 1.5..charge = 0;
    b.connect(solar, 0, cell, 0);
    b.connect(cell, 1, solar, 1);
    for (var i = 0; i < 600; i++) {
      b.step(1 / 30);
    }
    expect(cell.charge, greaterThan(0.95));
    // Move the charged cell onto a speaker.
    final c2 = ElectronicsBoard();
    final bat = c2.add('battery', 0.2, 0.3)..volts = 1.5..charge = 1;
    final sp = c2.add('speaker', 0.8, 0.3);
    c2.connect(bat, 0, sp, 0);
    c2.connect(sp, 1, bat, 1);
    for (var i = 0; i < 60; i++) {
      c2.step(1 / 30);
    }
    expect(sp.glow, 1);
  });

  test('every new gadget switches on with a suitable battery', () {
    const volts = {'fan': 3.0, 'speaker': 3.0, 'clock': 3.0, 'calculator': 3.0, 'phone': 4.5, 'router': 12.0, 'siren': 9.0, 'toycar': 3.0, 'kettle': 9.0, 'lamp': 4.5, 'lights': 4.5, 'radio': 9.0};
    volts.forEach((kind, v) {
      final b = loop(kind, volts: v);
      expect(b.of(kind).first.burnt, isFalse, reason: kind);
      expect(b.of(kind).first.glow, greaterThan(0), reason: kind);
    });
  });

  test('the meters read the circuit', () {
    final b = ElectronicsBoard();
    kRecipes.firstWhere((r) => r.title == 'Measure a bulb').build(b);
    for (var i = 0; i < 60; i++) {
      b.step(1 / 30);
    }
    expect(b.of('voltmeter').first.v.abs(), closeTo(b.of('bulb').first.v.abs(), 0.01));
    expect(b.of('ammeter').first.i.abs(), greaterThan(0.1));
    expect(b.of('bulb').first.burnt, isFalse);
  });

  testWidgets('the lab has two tool rows, shows the TV, and the TV opens big on its own', (t) async {
    t.view.physicalSize = const Size(860, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyElectronicsLab()));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byType(ListView), findsWidgets);
    expect(kPartInfos.length, 76);
    // Every part can be put on the board and drawn.
    for (final k in [for (final p in kPartInfos) p.kind]) {
      final b = ElectronicsBoard()..add(k, 0.5, 0.5);
      final rec = PictureRecorder();
      BoardPainter(b).paint(Canvas(rec), const Size(300, 300));
    }
    expect(kNgmyTvChannels.length, 10);
    await t.pumpWidget(MaterialApp(home: NgmyTvScreen(channel: 2, stayFor: const Duration(seconds: 60))));
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 4));
    expect(find.byType(NgmyTvScreen), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 61));
  });
  reducerTests();
}

ElectronicsBoard converterLoop(String reducer, String device, {double battery = 9, double out = 5, int steps = 240}) {
  final b = ElectronicsBoard();
  final bat = b.add('battery', 0.15, 0.3)..volts = battery;
  final c = b.add(reducer, 0.5, 0.3)..volts = out;
  final d = b.add(device, 0.85, 0.3);
  b.connect(bat, 0, c, 0);
  b.connect(c, 1, d, 0);
  b.connect(d, 1, bat, 1);
  for (var i = 0; i < steps; i++) {
    b.step(1 / 30);
  }
  return b;
}

void reducerTests() {
  test('a phone on a 9 V battery burns, but a step-down converter keeps it safe at 5 V', () {
    final bare = loop('phone', volts: 9);
    expect(bare.of('phone').first.burnt, isTrue);
    final safe = converterLoop('buck', 'phone');
    final phone = safe.of('phone').first;
    expect(phone.burnt, isFalse);
    expect(phone.glow, greaterThan(0));
    expect(phone.v, closeTo(5.0, 0.5));
    expect(safe.diagnose(safe.of('buck').first), isNull);
  });

  test('the converter shares one battery between a TV and a phone', () {
    final b = ElectronicsBoard();
    final bat = b.add('battery', 0.15, 0.2)..volts = 9;
    final tv = b.add('tv', 0.55, 0.2);
    final buck = b.add('buck', 0.4, 0.5)..volts = 5;
    final phone = b.add('phone', 0.8, 0.5);
    b.connect(bat, 0, tv, 0);
    b.connect(tv, 1, bat, 1);
    b.connect(bat, 0, buck, 0);
    b.connect(buck, 1, phone, 0);
    b.connect(phone, 1, bat, 1);
    for (var i = 0; i < 300; i++) {
      b.step(1 / 30);
    }
    expect(tv.glow, greaterThan(0));
    expect(phone.glow, greaterThan(0));
    expect(tv.burnt || phone.burnt, isFalse);
    expect(phone.v, closeTo(5.0, 0.6));
  });

  test('a converter cannot raise volts, and the regulator overheats on a hungry load', () {
    final weak = converterLoop('buck', 'phone', battery: 3);
    expect(weak.diagnose(weak.of('buck').first), contains('only bring volts DOWN'));
    final hot = converterLoop('regulator', 'kettle', battery: 12);
    expect(hot.of('regulator').first.burnt || hot.of('kettle').first.glow > 0, isTrue);
    final ok = converterLoop('regulator', 'phone', battery: 9);
    expect(ok.of('phone').first.glow, greaterThan(0));
    expect(ok.of('regulator').first.burnt, isFalse);
  });

  test('a diode only passes electricity one way and the light sensor changes with light', () {
    final fwd = ElectronicsBoard();
    final bat = fwd.add('battery', 0.15, 0.3)..volts = 9;
    final dio = fwd.add('diode', 0.5, 0.3);
    final radio = fwd.add('radio', 0.85, 0.3);
    fwd.connect(bat, 0, dio, 0);
    fwd.connect(dio, 1, radio, 0);
    fwd.connect(radio, 1, bat, 1);
    for (var i = 0; i < 120; i++) {
      fwd.step(1 / 30);
    }
    expect(radio.glow, greaterThan(0));
    final rev = ElectronicsBoard();
    final bat2 = rev.add('battery', 0.15, 0.3)..volts = 9;
    final dio2 = rev.add('diode', 0.5, 0.3);
    final radio2 = rev.add('radio', 0.85, 0.3);
    rev.connect(bat2, 0, dio2, 1);
    rev.connect(dio2, 0, radio2, 0);
    rev.connect(radio2, 1, bat2, 1);
    for (var i = 0; i < 120; i++) {
      rev.step(1 / 30);
    }
    expect(radio2.glow, 0);
    final dark = ElectronicsBoard();
    final b3 = dark.add('battery', 0.2, 0.3)..volts = 9;
    final l = dark.add('ldr', 0.6, 0.3)..level = 0.0;
    dark.connect(b3, 0, l, 0);
    dark.connect(l, 1, b3, 1);
    dark.step(0.1);
    final darkI = l.i.abs();
    l.level = 1.0;
    dark.step(0.1);
    expect(l.i.abs(), greaterThan(darkI * 3));
  });

  testWidgets('the TV has 10 channels, a remote and apps; the phone opens with its apps', (t) async {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    expect(kNgmyTvChannels.length, 10);
    expect(kNgmyApps.length, greaterThanOrEqualTo(9));
    await t.pumpWidget(MaterialApp(home: NgmyTvScreen(channel: 8, stayFor: const Duration(seconds: 60), showBoot: false)));
    await t.pump(const Duration(seconds: 1));
    expect(find.text('APPS'), findsOneWidget);
    await t.tap(find.text('APPS'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('NGMY Apps'), findsOneWidget);
    await t.tap(find.text('Jobs').first);
    await t.pump(const Duration(seconds: 1));
    expect(find.textContaining('NGMY TV · Jobs'), findsOneWidget);
    await t.tap(find.text('ADS'));
    await t.pump(const Duration(seconds: 1));
    await t.pumpWidget(MaterialApp(home: NgmyDeviceScreen(kind: 'phone', charge: 40)));
    await t.pump(const Duration(seconds: 1));
    expect(find.text('iPhone 18 Pro Max'), findsOneWidget);
    await t.tap(find.text('Calendar'));
    await t.pump(const Duration(seconds: 1));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 61));
    // Every app and every ad can be drawn at TV and phone sizes.
    for (var a = 0; a < kNgmyApps.length; a++) {
      for (final size in const [Size(320, 180), Size(180, 380), Size(24, 44)]) {
        paintNgmyApp(Canvas(PictureRecorder()), size, a, 12.5);
      }
    }
    for (var ch = 0; ch < kNgmyTvChannels.length; ch++) {
      paintNgmyTv(Canvas(PictureRecorder()), const Size(320, 180), ch, 7.0);
    }
  });
}

void realityTests() {
  test('a battery that is asked for too much current shows overloaded and its volts sag', () {
    final b = ElectronicsBoard();
    final bat = b.add('battery', 0.1, 0.3)..volts = 9;
    final kettle = b.add('kettle', 0.4, 0.3);
    final heater = b.add('heater', 0.7, 0.3);
    final light = b.add('bulb', 0.7, 0.6);
    for (final d in [kettle, heater, light]) {
      b.connect(bat, 0, d, 0);
      b.connect(d, 1, bat, 1);
    }
    for (var i = 0; i < 60; i++) {
      b.step(1 / 30);
    }
    expect(bat.demand, greaterThan(b.sourceMaxAmps(bat)));
    expect(b.overloaded(bat), isTrue);
    expect(bat.v, lessThan(8.0));
    final events = <String>[];
    b.onEvent = (k, p) => events.add(k);
    for (var i = 0; i < 30; i++) {
      b.step(1 / 30);
    }
    expect(events, contains('overload'));
    final why = b.diagnose(light);
    expect(why, anyOf(isNull, contains('overloaded')));
    // Taking the hungry gadgets off clears the warning.
    b.remove(kettle);
    b.remove(heater);
    for (var i = 0; i < 30; i++) {
      b.step(1 / 30);
    }
    expect(b.overloaded(bat), isFalse);
    expect(bat.v, closeTo(9.0, 0.8));
  });

  test('one bulb is fine, and a solar panel has a smaller limit than a big battery', () {
    final b = loop('bulb', volts: 3);
    expect(b.overloaded(b.of('battery').first), isFalse);
    final s = ElectronicsBoard();
    final panel = s.add('solar', 0.2, 0.3)..level = 0.3;
    final heater = s.add('heater', 0.7, 0.3);
    s.connect(panel, 0, heater, 0);
    s.connect(heater, 1, panel, 1);
    for (var i = 0; i < 30; i++) {
      s.step(1 / 30);
    }
    expect(s.sourceMaxAmps(panel), lessThan(0.5));
    expect(s.sourceMaxAmps(s.add('battery', 0.5, 0.5)..volts = 12), greaterThan(1.0));
  });

  test('the lab board is saved and comes back exactly, wires and settings included', () {
    final b = ElectronicsBoard();
    final bat = b.add('battery', 0.2, 0.3)..volts = 9;
    final tv = b.add('tv', 0.6, 0.3)..channel = 4;
    final buck = b.add('buck', 0.4, 0.6)..volts = 6;
    b.connect(bat, 0, tv, 0);
    b.connect(tv, 1, bat, 1);
    b.connect(bat, 0, buck, 0);
    final raw = encodeLab(b, 3, {0, 1, 2});
    final back = ElectronicsBoard();
    final progress = restoreLab(back, raw);
    expect(progress, isNotNull);
    expect(progress!.challenge, 3);
    expect(progress.done, {0, 1, 2});
    expect(back.parts.map((p) => p.kind).toList(), ['battery', 'tv', 'buck']);
    expect(back.parts[0].volts, 9);
    expect(back.parts[1].channel, 4);
    expect(back.parts[2].volts, 6);
    expect(back.wires.length, 3);
    expect(restoreLab(ElectronicsBoard(), 'not json'), isNull);
  });

  testWidgets('what you build in the lab is still there when you come back, and the challenges sit behind a flag', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(860, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyElectronicsLab()));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.byTooltip('Challenges'), findsOneWidget);
    expect(find.byTooltip('AI Inventor: say what you want to make'), findsOneWidget);
    await t.tap(find.text('Light bulb').first);
    await t.pump(const Duration(milliseconds: 400));
    expect(find.textContaining('1 parts'), findsOneWidget);
    await t.tap(find.byTooltip('Challenges'));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.textContaining('Challenges'), findsWidgets);
    expect(find.textContaining('Light the bulb'), findsWidgets);
    await t.tapAt(const Offset(10, 10));
    await t.pump(const Duration(milliseconds: 500));
    // Leave the lab, then open it again.
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(milliseconds: 300));
    await t.pumpWidget(const MaterialApp(home: NgmyElectronicsLab()));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('1 parts'), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(milliseconds: 300));
  });
}

void screenTests() {
  test('every screen device has a name, a spec and can be drawn on the board', () {
    expect(kScreenDevices.length, greaterThanOrEqualTo(24));
    for (final k in kScreenDevices.keys) {
      expect(kPartByKind.containsKey(k), isTrue, reason: k);
      expect(kDeviceSpecs.containsKey(k) || k == 'tv', isTrue, reason: k);
      final b = ElectronicsBoard()..add(k, 0.5, 0.5);
      b.parts.first.scale = 2.0;
      BoardPainter(b).paint(Canvas(PictureRecorder()), const Size(400, 400));
    }
    expect(kPartByKind['phone']!.name, 'iPhone 18 Pro Max');
    expect(kPartByKind['tv']!.name, contains('Samsung'));
    expect(kScreenDevices.values.where((d) => d.style == ScreenStyle.tv).length, greaterThanOrEqualTo(5));
  });

  test('an expensive phone needs a step-down converter on a 9 V battery', () {
    for (final k in const ['galaxy', 'pixel', 'xiaomi', 'huawei', 'oppo', 'vivo', 'zfold', 'honor', 'iphonefold']) {
      expect(loop(k, volts: 9).of(k).first.burnt, isTrue, reason: '$k bare on 9 V');
      final ok = converterLoop('buck', k);
      expect(ok.of(k).first.burnt, isFalse, reason: k);
      expect(ok.of(k).first.glow, greaterThan(0), reason: k);
    }
    expect(loop('laptop', volts: 12).of('laptop').first.glow, greaterThan(0));
  });

  test('a screen can be made bigger but never smaller, and its dots move out with it', () {
    final b = ElectronicsBoard();
    final tv = b.add('tv', 0.5, 0.5);
    const size = Size(400, 400);
    final normal = ElectronicsBoard.terminal(tv, 1, size).dx - ElectronicsBoard.terminal(tv, 0, size).dx;
    tv.scale = 2.0;
    final big = ElectronicsBoard.terminal(tv, 1, size).dx - ElectronicsBoard.terminal(tv, 0, size).dx;
    expect(big, greaterThan(normal));
    final bulb = b.add('bulb', 0.2, 0.2);
    expect(ElectronicsBoard.termOffset(bulb), ElectronicsBoard.kTerm);
    final raw = encodeLab(b, 0, {});
    final back = ElectronicsBoard();
    restoreLab(back, raw);
    expect(back.parts.first.scale, 2.0);
  });

  testWidgets('every big screen opens: phones, tablets and computers with their apps', (t) async {
    t.view.physicalSize = const Size(1000, 1800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    for (final k in kScreenDevices.keys.where((k) => !isTvKind(k))) {
      await t.pumpWidget(MaterialApp(home: NgmyDeviceScreen(kind: k, charge: 30)));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.text(kScreenDevices[k]!.name), findsOneWidget, reason: k);
      expect(t.takeException(), isNull, reason: k);
      await t.tap(find.text('Jobs').first, warnIfMissed: false);
      await t.pump(const Duration(milliseconds: 600));
      expect(t.takeException(), isNull, reason: '$k with an app open');
    }
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('tapping a screen four times opens the size sheet, three times opens the big screen', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final b = ElectronicsBoard();
    final bat = b.add('battery', 0.15, 0.5)..volts = 12;
    final tv = b.add('tv', 0.6, 0.5);
    b.connect(bat, 0, tv, 0);
    b.connect(tv, 1, bat, 1);
    await t.pumpWidget(MaterialApp(home: Scaffold(body: BoardEditor(board: b, tvPopUp: false))));
    await t.pump(const Duration(milliseconds: 500));
    final board = find.byType(CustomPaint).evaluate().map((e) => e.widget).length;
    expect(board, greaterThan(0));
    final area = t.getRect(find.byType(LayoutBuilder).last);
    final at = Offset(area.left + area.width * 0.6, area.top + area.height * 0.5);
    for (var i = 0; i < 4; i++) {
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 120));
    }
    await t.pump(const Duration(milliseconds: 700));
    expect(find.textContaining('Resize the'), findsOneWidget);
    await t.tap(find.text('Done'));
    await t.pump(const Duration(milliseconds: 600));
    for (var i = 0; i < 3; i++) {
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 120));
    }
    await t.pump(const Duration(milliseconds: 900));
    expect(find.byType(NgmyTvScreen), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 61));
  });
}
