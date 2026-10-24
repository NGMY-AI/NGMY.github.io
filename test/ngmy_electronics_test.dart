import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electronics_board.dart';

ElectronicsBoard run(String title, {void Function(ElectronicsBoard b)? tweak, int steps = 90}) {
  final b = ElectronicsBoard();
  kRecipes.firstWhere((r) => r.title == title).build(b);
  tweak?.call(b);
  for (var i = 0; i < steps; i++) {
    b.step(1 / 30);
  }
  return b;
}

void main() {
  test('a flashlight lights up, and goes dark when the switch is open', () {
    final b = run('Flashlight');
    expect(b.of('bulb').first.glow, greaterThan(0.5));
    expect(b.of('bulb').first.burnt, isFalse);
    final off = run('Flashlight', tweak: (b) => b.of('switch').first.on = false);
    expect(off.of('bulb').first.glow, lessThan(0.01));
  });

  test('too many volts burn the bulb out', () {
    final b = run('Flashlight', tweak: (b) => b.of('battery').first.volts = 12);
    expect(b.of('bulb').first.burnt, isTrue);
  });

  test('an LED needs a resistor', () {
    final ok = run('Safe LED');
    expect(ok.of('led').first.glow, greaterThan(0.1));
    expect(ok.of('led').first.burnt, isFalse);
    final bad = run('Safe LED', tweak: (b) => b.of('resistor').first.ohms = 0.01);
    expect(bad.of('led').first.burnt, isTrue);
  });

  test('power sources without a battery work', () {
    expect(run('Sun-powered lamp').of('bulb').first.glow, greaterThan(0.3));
    expect(run('Hand-crank light', steps: 15).of('bulb').first.glow, greaterThan(0.2));
    expect(run('Wind-powered motor').of('motor').first.glow, greaterThan(0.3));
  });

  test('a crank stops making power when you stop turning it', () {
    final b = run('Hand-crank light', steps: 600);
    expect(b.of('bulb').first.glow, lessThan(0.05));
  });

  test('radio and TV need enough volts', () {
    expect(run('Pocket radio').of('radio').first.glow, 1);
    expect(run('Television').of('tv').first.glow, 1);
    expect(run('Television', tweak: (b) => b.of('battery').first.volts = 3).of('tv').first.glow, 0);
  });

  test('two bulbs in a row are dimmer than one', () {
    final one = run('Flashlight').of('bulb').first.glow;
    final two = run('Two bulbs in a row').of('bulb').first.glow;
    expect(two, lessThan(one));
  });

  test('a capacitor charges up', () {
    final b = run('Solar flash', steps: 120);
    expect(b.of('capacitor').first.vc, greaterThan(0.5));
  });

  test('a battery wired straight to a switch sparks and overheats', () {
    final b = ElectronicsBoard();
    final bat = b.add('battery', 0.2, 0.5)..volts = 9;
    final sw = b.add('switch', 0.6, 0.5)..on = true;
    b.connect(bat, 0, sw, 0);
    b.connect(sw, 1, bat, 1);
    var events = 0;
    b.onEvent = (k, p) {
      if (k == 'short') events++;
    };
    for (var i = 0; i < 20; i++) {
      b.step(1 / 30);
    }
    expect(events, greaterThan(0));
    expect(b.sparks, isNotEmpty);
    for (var i = 0; i < 90; i++) {
      b.step(1 / 30);
    }
    expect(bat.burnt, isTrue);
  });

  test('the toaster glows', () {
    expect(run('Toaster').of('heater').first.glow, greaterThan(0.5));
  });
}
