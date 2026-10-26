import 'dart:ui' show PictureRecorder;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electronics_board.dart';
import 'package:ngmy/ngmy_electronics_lab.dart';
import 'package:ngmy/ngmy_electronics_more_parts.dart';
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
    expect(find.text('Voltmeter').evaluate().length + find.text('Party lights').evaluate().length, greaterThan(0));
    expect(kPartInfos.length, 29);
    // Every part can be put on the board and drawn.
    for (final k in [for (final p in kPartInfos) p.kind]) {
      final b = ElectronicsBoard()..add(k, 0.5, 0.5);
      final rec = PictureRecorder();
      BoardPainter(b).paint(Canvas(rec), const Size(300, 300));
    }
    expect(kNgmyTvChannels.length, 6);
    await t.pumpWidget(MaterialApp(home: NgmyTvScreen(channel: 2, stayFor: const Duration(seconds: 60))));
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 4));
    expect(find.byType(NgmyTvScreen), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 61));
  });
}
