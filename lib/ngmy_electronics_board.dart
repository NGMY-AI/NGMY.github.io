import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_electronics_extra_parts.dart';
import 'ngmy_electronics_more_parts.dart';
import 'ngmy_electronics_screens.dart';
import 'ngmy_electronics_tv.dart';


// ═════════════════════════════════════════════════════════════════════════════
// A small but real electronics simulator: parts, wires, and a circuit solver.
// Voltages and currents are worked out with nodal analysis (Ohm's and Kirchhoff's
// laws), so a bulb really does get brighter with more battery and burns out with too
// much, and an LED really does need a resistor.
// ═════════════════════════════════════════════════════════════════════════════

class PartInfo {
  const PartInfo(this.kind, this.name, this.emoji, this.color, this.about, this.made);
  final String kind;
  final String name;
  final String emoji;
  final Color color;
  final String about;
  final String made;
}

const List<PartInfo> kPartInfos = [
  PartInfo('battery', 'Battery', '🔋', Color(0xFF4ADE80), 'Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.', 'Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.'),
  PartInfo('solar', 'Solar panel', '☀️', Color(0xFFFACC15), 'Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.', 'Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.'),
  PartInfo('crank', 'Hand crank', '🔄', Color(0xFFFB923C), 'A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.', 'A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.'),
  PartInfo('turbine', 'Wind turbine', '🌬️', Color(0xFF38BDF8), 'A generator turned by the wind. Change the wind strength to change the volts.', 'Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.'),
  ...kPowerPartInfos,
  PartInfo('switch', 'Switch', '🎚️', Color(0xFFA78BFA), 'Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.', 'Two metal contacts. Flipping the lever makes them touch, or pulls them apart.'),
  PartInfo('fuse', 'Fuse', '🧯', Color(0xFFF87171), 'A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.', 'A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.'),
  PartInfo('pot', 'Dimmer knob', '🎛️', Color(0xFF2DD4BF), 'A resistor you can change. Turn it to let less or more current through, like a volume control.', 'A strip of resistive material with a sliding contact that touches it at different places.'),
  PartInfo('resistor', 'Resistor', '〰️', Color(0xFFFBBF24), 'Holds back the current, which protects other parts. Tap it to change its size in ohms.', 'A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.'),
  PartInfo('bulb', 'Light bulb', '💡', Color(0xFFFDE047), 'Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!', 'A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.'),
  PartInfo('led', 'LED', '🔴', Color(0xFFEF4444), 'A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.', 'A tiny chip of special crystal. When electrons cross the join in the chip they give off light.'),
  PartInfo('motor', 'Motor', '⚙️', Color(0xFF94A3B8), 'Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.', 'Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.'),
  PartInfo('buzzer', 'Buzzer', '🔔', Color(0xFFF472B6), 'Makes a sound when current flows through it.', 'A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.'),
  PartInfo('heater', 'Heater', '🔥', Color(0xFFFB923C), 'Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.', 'A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.'),
  PartInfo('capacitor', 'Capacitor', '🪫', Color(0xFF60A5FA), 'Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.', 'Two sheets of metal foil, rolled up with a thin plastic sheet between them.'),
  PartInfo('radio', 'Radio', '📻', Color(0xFFE879F9), 'Needs about 3 volts or more. When it has power it picks up stations and plays them.', 'An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.'),
  PartInfo('tv', 'Samsung Neo QLED 8K', '📺', Color(0xFF22D3EE), 'Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.', 'Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.'),
  ...kMorePartInfos,
  ...kExtraPartInfos,
];

final Map<String, PartInfo> kPartByKind = {for (final p in kPartInfos) p.kind: p};

class Part {
  Part(this.id, this.kind, this.x, this.y) {
    switch (kind) {
      case 'battery':
        volts = 3;
      case 'solar':
        level = 0.8;
      case 'turbine':
        level = 0.6;
      case 'switch':
        on = false;
      case 'resistor':
        ohms = 100;
      case 'pot':
        level = 0.5;
      case 'ldr':
        level = 0.5;
      case 'buck':
        volts = 5;
      case 'regulator':
        volts = 5;
    }
  }

  final String id;
  final String kind;
  double x; // 0..1 across the board
  double y; // 0..1 down the board
  double volts = 3;
  double level = 0.5; // light / wind / pot position / crank speed
  double ohms = 100;
  bool on = true;
  bool burnt = false;
  double spin = 0; // animation angle
  double vc = 0; // capacitor voltage
  double hot = 0; // a power source being shorted heats up (0..1.4)
  double charge = 1; // a 1.5 V battery starts flat and has to be charged
  int channel = 0; // the TV channel
  double onAge = 0; // seconds a gadget has been switched on
  String burnWhy = ''; // why it burnt out
  double scale = 1; // a screen can be made bigger (1 is the normal size)
  double sag = 0; // an overloaded power source: how much its volts collapse
  double demand = 0; // amps the circuit is asking a power source for
  double drop = 0; // a voltage reducer: how many volts it takes off right now
  double vin = 0; // a voltage reducer: volts arriving
  double vout = 0; // a voltage reducer: volts leaving

  // Results of the last solve.
  double v = 0; // volts across (a minus b)
  double i = 0; // amps from a to b through the part
  double glow = 0;

  PartInfo get info => kPartByKind[kind]!;
}

/// A flying spark, in board units plus a pixel offset (so it starts exactly on a terminal).
class Spark {
  Spark(this.x, this.y, this.ox, this.oy, this.vx, this.vy, this.life);
  final double x, y;
  double ox, oy, vx, vy, life;
}

class Wire {

  Wire(this.a, this.ta, this.b, this.tb);
  final Part a;
  final int ta;
  final Part b;
  final int tb;
}

/// Where a wire bends: wires between neighbouring parts stay shallow, return wires swing out underneath.
Offset wireMid(Offset a, Offset b, Wire w) {
  final direct = (w.ta == 1 && w.tb == 0 && a.dx < b.dx) || (w.ta == 0 && w.tb == 1 && b.dx < a.dx);
  final bow = direct ? 10.0 : 34 + (a - b).distance * 0.1;
  return Offset((a.dx + b.dx) / 2, math.max(a.dy, b.dy) + bow);
}

class ElectronicsBoard {
  final List<Part> parts = [];
  final List<Wire> wires = [];
  int _id = 0;
  double time = 0;
  void Function(String kind, Part p)? onEvent;
  final List<Spark> sparks = [];
  final math.Random _rnd = math.Random();
  double _shortSignal = 0;
  double _overSignal = 0;

  /// Throws [n] sparks from near the part, a terminal side (-1 left, 1 right) or both (0).
  void emitSparks(Part p, int n, {int side = 0, double speed = 220}) {
    for (var i = 0; i < n && sparks.length < 160; i++) {
      final sx = side == 0 ? (_rnd.nextBool() ? -1 : 1) : side;
      final a = _rnd.nextDouble() * math.pi * 2;
      final v = speed * (0.3 + _rnd.nextDouble());
      sparks.add(Spark(p.x, p.y, sx * kTerm.toDouble(), 0, math.cos(a) * v, math.sin(a) * v - 60, 0.35 + _rnd.nextDouble() * 0.45));
    }
  }

  void _moveSparks(double dt) {
    for (final s in sparks) {
      s.ox += s.vx * dt;
      s.oy += s.vy * dt;
      s.vy += 520 * dt;
      s.life -= dt;
    }
    sparks.removeWhere((s) => s.life <= 0);
  }

  Part add(String kind, double x, double y) {
    final p = Part('p${_id++}', kind, x, y);
    parts.add(p);
    return p;
  }

  void remove(Part p) {
    parts.remove(p);
    wires.removeWhere((w) => w.a == p || w.b == p);
  }

  void clear() {
    parts.clear();
    wires.clear();
  }

  bool connected(Part a, int ta, Part b, int tb) => wires.any((w) => (w.a == a && w.ta == ta && w.b == b && w.tb == tb) || (w.a == b && w.ta == tb && w.b == a && w.tb == ta));

  Wire? connect(Part a, int ta, Part b, int tb) {
    if (a == b || connected(a, ta, b, tb)) return null;
    final w = Wire(a, ta, b, tb);
    wires.add(w);
    return w;
  }

  /// Offset of a terminal in board pixels.
  static Offset terminal(Part p, int t, Size size) => Offset(p.x * size.width + (t == 0 ? -1 : 1) * termOffset(p), p.y * size.height);

  /// How far each round dot sits from the middle of a part. A bigger screen pushes its dots out.
  static double termOffset(Part p) => kTerm + (isScreenKind(p.kind) ? (p.scale - 1) * 38 : 0);
  static const double kTerm = 42;

  // ── Circuit maths ────────────────────────────────────────────────────────

  double _sourceVolts(Part p) {
    switch (p.kind) {
      case 'battery':
        return p.volts == 1.5 && p.charge <= 0.02 ? 0 : p.volts;
      case 'solar':
        return 5 * p.level;
      case 'crank':
        return 4 * p.level;
      case 'turbine':
        return 5 * p.level;
    }
    return 0;
  }

  /// The most current a power source can really give. Ask for more and its volts sag.
  double sourceMaxAmps(Part p) {
    switch (p.kind) {
      case 'battery':
        if (p.volts <= 1.5) return 0.5;
        if (p.volts <= 3) return 0.8;
        if (p.volts <= 4.5) return 1.0;
        if (p.volts <= 9) return 1.2;
        return 1.5;
      case 'solar':
        return 0.1 + 0.9 * p.level;
      case 'crank':
        return 0.6;
      case 'turbine':
        return 0.1 + 0.5 * p.level;
    }
    return 1.0;
  }

  bool overloaded(Part p) => isSource(p) && !p.burnt && p.demand > sourceMaxAmps(p) * 1.0;

  double _sourceR(Part p) => _sourceR0(p) * (1 + p.sag);

  double _sourceR0(Part p) {
    switch (p.kind) {
      case 'battery':
        return 0.4 + p.volts * 0.05;
      case 'solar':
        return 3;
      case 'crank':
        return 1.5;
      default:
        return 1.2;
    }
  }

  bool isSource(Part p) => p.kind == 'battery' || p.kind == 'solar' || p.kind == 'crank' || p.kind == 'turbine';

  double _load(Part p) {
    switch (p.kind) {
      case 'bulb':
        return 10;
      case 'motor':
        return 6;
      case 'buzzer':
        return 25;
      case 'heater':
        return 4;
      case 'radio':
        return 30;
      case 'tv':
        return 50;
      case 'resistor':
        return p.ohms;
      case 'pot':
        return 1 + 99 * p.level;
      case 'ldr':
        return 20 + 980 * (1 - p.level);
      case 'voltmeter':
        return 1e6;
      case 'ammeter':
        return 0.02;
    }
    final spec = kDeviceSpecs[p.kind];
    if (spec != null) return spec.load;
    return 100;
  }

  /// Runs the circuit for [dt] seconds of real time.
  void step(double dt) {
    time += dt;
    _moveSparks(dt);
    _shortSignal = math.max(0, _shortSignal - dt);
    _overSignal = math.max(0, _overSignal - dt);
    final h = math.min(dt * 6, 0.12); // the circuit runs a little faster than real life
    // A fresh voltage reducer starts already regulating, so the gadget after it never sees the full battery volts.
    for (final p in parts) {
      if (isReducer(p) && !p.burnt && p.vin == 0 && p.vout == 0) {
        final vmax = parts.where((q) => isSource(q) && !q.burnt).fold<double>(0, (m, q) => math.max(m, _sourceVolts(q)));
        p.drop = math.max(0.0, vmax - reducerTarget(p));
      }
    }
    // Crank slows down; turbine stays at its wind setting.
    for (final p in parts) {
      if (p.kind == 'crank') p.level = math.max(0, p.level - dt * 0.25);
    }
    // Nets: every terminal joined by wires shares a voltage.
    final ids = <String, int>{};
    int key(Part p, int t) => ids.putIfAbsent('${p.id}.$t', () => ids.length);
    final parent = <int>[];
    int find(int a) {
      while (parent[a] != a) {
        parent[a] = parent[parent[a]];
        a = parent[a];
      }
      return a;
    }

    for (final p in parts) {
      key(p, 0);
      key(p, 1);
    }
    for (var i = 0; i < ids.length; i++) {
      parent.add(i);
    }
    for (final w in wires) {
      final a = find(key(w.a, w.ta)), b = find(key(w.b, w.tb));
      if (a != b) parent[a] = b;
    }
    final netIndex = <int, int>{};
    int net(Part p, int t) => netIndex.putIfAbsent(find(key(p, t)), () => netIndex.length);
    for (final p in parts) {
      net(p, 0);
      net(p, 1);
    }
    final n = netIndex.length;
    if (n == 0) return;
    // The ground is the minus end of the first power source.
    var ground = 0;
    for (final p in parts) {
      if (isSource(p)) {
        ground = net(p, 1);
        break;
      }
    }

    // Each part is a conductance with an optional current push (a "Norton" model).
    // First ask: what would the circuit take from healthy power sources?
    for (final p in parts) {
      p.sag = 0;
    }
    final bool ledSettled = _solve(n, ground, h, true);
    if (!ledSettled) _solve(n, ground, h, false);
    // A battery or solar panel can only give so many amps. Ask for more and its volts sag, like in real life.
    var over = false;
    for (final p in parts) {
      if (!isSource(p) || p.burnt) {
        p.demand = 0;
        continue;
      }
      p.demand = math.max(0.0, -p.i);
      final k = p.demand / sourceMaxAmps(p);
      p.sag = k > 1.0 ? math.min(4.0, (k - 1) * 1.5) : 0;
      if (p.sag > 0) over = true;
    }
    if (over) _solve(n, ground, h, true);
    _effects(dt);
  }

  final Map<String, bool> _ledOn = {};

  bool _solve(int n, int ground, double h, bool iterate) {
    final ids = <String, int>{};
    int key(Part p, int t) => ids.putIfAbsent('${p.id}.$t', () => ids.length);
    final parent = <int>[];
    for (final p in parts) {
      key(p, 0);
      key(p, 1);
    }
    for (var i = 0; i < ids.length; i++) {
      parent.add(i);
    }
    int find(int a) {
      while (parent[a] != a) {
        parent[a] = parent[parent[a]];
        a = parent[a];
      }
      return a;
    }

    for (final w in wires) {
      final a = find(key(w.a, w.ta)), b = find(key(w.b, w.tb));
      if (a != b) parent[a] = b;
    }
    final netIndex = <int, int>{};
    int net(Part p, int t) => netIndex.putIfAbsent(find(key(p, t)), () => netIndex.length);
    for (final p in parts) {
      net(p, 0);
      net(p, 1);
    }

    List<double> v = List.filled(n, 0);
    final gOf = <Part, double>{};
    final injA = <Part, double>{};
    for (var round = 0; round < (iterate ? 10 : 1); round++) {
      final g = List.generate(n, (_) => List<double>.filled(n, 0));
      final cur = List<double>.filled(n, 0);
      gOf.clear();
      injA.clear();
      for (final p in parts) {
        final a = net(p, 0), b = net(p, 1);
        double gg;
        double inj = 0;
        if (isSource(p) && !p.burnt) {
          gg = 1 / _sourceR(p);
          inj = _sourceVolts(p) * gg;
        } else if (p.burnt && p.kind != 'capacitor') {
          gg = 1e-9;
        } else if (p.kind == 'switch') {
          gg = p.on ? 100 : 1e-9;
        } else if (p.kind == 'fuse') {
          gg = 1 / 0.05;
        } else if (p.kind == 'led' || p.kind == 'diode') {
          final on = _ledOn[p.id] ?? false;
          final led = p.kind == 'led';
          gg = on ? (led ? 1 / 15 : 1 / 0.8) : 1e-9;
          inj = on ? gg * (led ? 1.9 : 0.7) : 0;
        } else if (isReducer(p)) {
          gg = 1 / 0.3;
          inj = gg * p.drop;
        } else if (p.kind == 'capacitor') {
          gg = 0.3 / h;
          inj = gg * p.vc;
          if (p.burnt) gg = 1e-9;
        } else {
          gg = 1 / _load(p);
        }
        gOf[p] = gg;
        injA[p] = inj;
        g[a][a] += gg;
        g[b][b] += gg;
        g[a][b] -= gg;
        g[b][a] -= gg;
        cur[a] += inj;
        cur[b] -= inj;
      }
      for (var i = 0; i < n; i++) {
        g[i][i] += 1e-9;
      }
      v = _gauss(g, cur, ground);
      if (!iterate) break;
      var changed = false;
      for (final p in parts) {
        if (p.kind != 'led' && p.kind != 'diode') continue;
        final vd = v[net(p, 0)] - v[net(p, 1)];
        final was = _ledOn[p.id] ?? false;
        final led = p.kind == 'led';
        final now = was ? vd > (led ? 1.8 : 0.65) : vd > (led ? 1.95 : 0.75);
        if (now != was) {
          _ledOn[p.id] = now;
          changed = true;
        }
      }
      if (!changed) break;
    }
    for (final p in parts) {
      final a = net(p, 0), b = net(p, 1);
      p.v = v[a] - v[b];
      if (isReducer(p)) {
        p.vin = v[a] - v[ground];
        p.vout = v[b] - v[ground];
      }
      p.i = (gOf[p] ?? 0) * p.v - (injA[p] ?? 0);
      if (p.kind == 'capacitor' && !p.burnt) p.vc = p.v;
    }
    return true;
  }

  List<double> _gauss(List<List<double>> g, List<double> cur, int ground) {
    final n = cur.length;
    // Remove the ground row and column, then solve.
    final idx = [for (var i = 0; i < n; i++) if (i != ground) i];
    final m = idx.length;
    if (m == 0) return List.filled(n, 0);
    final a = [for (final r in idx) [for (final c in idx) g[r][c], cur[r]]];
    for (var col = 0; col < m; col++) {
      var piv = col;
      for (var r = col + 1; r < m; r++) {
        if (a[r][col].abs() > a[piv][col].abs()) piv = r;
      }
      final tmp = a[col];
      a[col] = a[piv];
      a[piv] = tmp;
      final d = a[col][col];
      if (d.abs() < 1e-14) continue;
      for (var r = 0; r < m; r++) {
        if (r == col) continue;
        final f = a[r][col] / d;
        if (f == 0) continue;
        for (var c = col; c <= m; c++) {
          a[r][c] -= f * a[col][c];
        }
      }
    }
    final out = List<double>.filled(n, 0);
    for (var k = 0; k < m; k++) {
      final d = a[k][k];
      out[idx[k]] = d.abs() < 1e-14 ? 0 : a[k][m] / d;
    }
    return out;
  }

  /// What each part does with its voltage and current: glow, spin, burn out.
  void _effects(double dt) {
    for (final p in parts) {
      if (p.kind == 'battery' && p.volts == 1.5 && !p.burnt) {
        // A 1.5 V cell is rechargeable: current pushed into it by a solar panel (or crank, or wind turbine) fills it up.
        if (p.i > 0.003) {
          p.charge = math.min(1.0, p.charge + dt * 0.2 * math.min(p.i, 1.0));
        } else if (p.i < -0.003) {
          p.charge = math.max(0.0, p.charge - dt * 0.015 * math.min(-p.i, 1.0));
        }
      }
      if (isSource(p) && !p.burnt) {
        // A big current from a power source means its wires are joined without anything to use the power: a short circuit.
        final isc = _sourceVolts(p) / _sourceR0(p);
        if (overloaded(p) && _overSignal <= 0 && p.demand < isc * 0.55) {
          _overSignal = 8;
          onEvent?.call('overload', p);
        }
        if (isc > 0.3 && p.demand > 0.4 && p.demand > isc * 0.55 && !_chargingPair(p)) {
          p.hot += dt * 0.9;
          emitSparks(p, 3, speed: 260);
          if (_shortSignal <= 0) {
            _shortSignal = 0.35;
            onEvent?.call('short', p);
          }
          if (p.hot > 1.4) _burn(p, 'The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the −.');
        } else {
          p.hot = math.max(0, p.hot - dt * 0.8);
        }
      }
      final power = (p.v * p.i).abs();
      final cur = p.i.abs();
      if (isReducer(p) && !p.burnt) {
        // The converter keeps its output at the set volts: it takes off exactly what is too much.
        final target = reducerTarget(p);
        if (cur < 0.002) {
          p.drop = (p.vin - target).clamp(0.0, 24.0);
        } else {
          p.drop = (p.drop + (p.vout - target) * 0.7).clamp(0.0, 24.0);
        }
        p.glow = (p.vin > target + 0.2 && (p.vout - target).abs() < 0.35) ? 1.0 : 0.0;
        p.onAge = p.glow > 0 ? p.onAge + dt : 0;
        if (p.vin > 26) _burn(p, 'The ${p.info.name} got ${p.vin.toStringAsFixed(1)} V going in, more than the 26 V it can take.');
        if (cur > 1.5) _burn(p, 'More than 1.5 amps went through the ${p.info.name}. The gadget on its output takes too much power for it.');
        if (p.kind == 'regulator' && p.drop * cur > 2.5) _burn(p, 'The regulator had to turn ${p.drop.toStringAsFixed(1)} V into heat while ${(cur * 1000).round()} mA flowed. That is ${(p.drop * cur).toStringAsFixed(1)} watts of heat, so it overheated. A step-down converter wastes far less.');
      }
      if (p.kind == 'diode' && !p.burnt) {
        p.glow = (_ledOn[p.id] ?? false) ? 1.0 : 0.0;
        if (cur > 1.5) _burn(p, 'More than 1.5 amps went through the diode, so it burnt out.');
      }
      final spec = kDeviceSpecs[p.kind];
      if (spec != null) {
        final vv = spec.polar ? p.v : p.v.abs();
        final on = !p.burnt && vv >= spec.minV;
        if (!p.burnt && p.v.abs() > spec.maxV) _burn(p, 'The ${p.info.name} is made for ${_fmtV(spec.minV)} to ${_fmtV(spec.maxV)} volts but got ${p.v.abs().toStringAsFixed(1)} V, so it burnt out.');
        p.glow = (on && !p.burnt) ? 1.0 : 0.0;
        p.onAge = p.glow > 0 ? p.onAge + dt : 0;
        if (kSpinners.contains(p.kind)) {
          p.glow = p.glow > 0 ? ((p.v.abs() - 1.0) / 6).clamp(0.15, 1.4) : 0.0;
          p.spin += p.glow * dt * (p.kind == 'fan' ? 30 : 26);
        }
      }
      switch (p.kind) {
        case 'bulb':
          p.glow = p.burnt ? 0 : (power / 0.9).clamp(0.0, 1.0);
          if (!p.burnt && power > 2.4) _burn(p, 'The bulb got ${p.v.abs().toStringAsFixed(1)} V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.');
        case 'led':
          p.glow = p.burnt ? 0 : ((cur - 0.001) / 0.02).clamp(0.0, 1.0);
          if (!p.burnt && cur > 0.045) _burn(p, 'The LED had ${(cur * 1000).round()} milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.');
        case 'heater':
          p.glow = (power / 14).clamp(0.0, 1.0);
        case 'motor':
          p.glow = (cur / 0.5).clamp(0.0, 1.6);
          p.spin += p.glow * dt * 24;
        case 'buzzer':
          p.glow = (cur / 0.05).clamp(0.0, 1.0);
        case 'ammeter':
          if (!p.burnt && cur > 1.5) _burn(p, 'The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.');
        case 'fuse':
          p.glow = p.burnt ? 0 : (cur / 1).clamp(0.0, 1.0);
          if (!p.burnt && cur > 1.0) _burn(p, 'More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.');
        case 'resistor':
          if (!p.burnt && power > 0.8) _burn(p, 'The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.');
        case 'capacitor':
          p.glow = (p.vc.abs() / 9).clamp(0.0, 1.0);
          if (!p.burnt && p.vc.abs() > 13) _burn(p, 'The capacitor was charged to ${p.vc.abs().toStringAsFixed(1)} V, more than it can hold.');
        case 'crank':
          p.spin += p.level * dt * 22;
        case 'turbine':
          p.spin += p.level * dt * 14;
        case 'solar':
          p.glow = p.level;
      }
    }
  }

  /// A source pushing current into a rechargeable 1.5 V cell is charging it, which is not a short circuit.
  bool _chargingPair(Part p) => parts.any((q) => q != p && q.kind == 'battery' && q.volts == 1.5 && !q.burnt && q.i.abs() > 0.5 * p.i.abs());

  void _burn(Part p, String why) {
    p.burnt = true;
    p.burnWhy = why;
    emitSparks(p, 34, speed: 300);
    onEvent?.call('burn', p);
  }

  void repairAll() {
    for (final p in parts) {
      p.burnt = false;
      p.burnWhy = '';
      p.vc = 0;
    }
    _ledOn.clear();
  }

  // ── Why is it not working? ───────────────────────────────────────────────

  static String _fmtV(double x) => x == x.roundToDouble() ? '${x.round()}' : '$x';

  /// Parts that do something only when they are powered.
  bool isReducer(Part p) => p.kind == 'buck' || p.kind == 'regulator';

  /// The volts a voltage reducer is set to give out.
  double reducerTarget(Part p) => p.kind == 'regulator' ? 5.0 : p.volts;

  bool needsPower(Part p) => const {'bulb', 'led', 'motor', 'buzzer', 'heater'}.contains(p.kind) || kDeviceSpecs.containsKey(p.kind) || isReducer(p);

  /// Has a left (+) dot that must go towards the battery +.
  bool hasPolarity(Part p) => isSource(p) || p.kind == 'led' || p.kind == 'diode' || isReducer(p) || (kDeviceSpecs[p.kind]?.polar ?? false);

  int wireCount(Part p, int t) => wires.where((w) => (w.a == p && w.ta == t) || (w.b == p && w.tb == t)).length;

  bool works(Part p) {
    if (p.burnt) return false;
    if (kDeviceSpecs.containsKey(p.kind)) return p.glow > 0;
    return p.glow > (p.kind == 'led' ? 0.02 : 0.05);
  }

  /// A gadget that is wired to something but is not working: worth a warning badge on the board.
  bool needsAttention(Part p) => !p.burnt && needsPower(p) && !works(p) && (wireCount(p, 0) + wireCount(p, 1)) > 0;

  /// The reason a part is not working, in plain words, or null when nothing is wrong.
  String? diagnose(Part p) {
    final name = p.info.name;
    if (p.burnt) return '${p.burnWhy.isEmpty ? 'The $name burnt out.' : p.burnWhy} Press the spanner at the top to fit a new one.';
    if (!needsPower(p) || works(p)) return null;
    final a = wireCount(p, 0), b = wireCount(p, 1);
    if (a == 0 && b == 0) return 'The $name is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop.';
    if (a == 0 || b == 0) return 'Only one end of the $name is wired. Electricity needs a full loop, so wire the ${a == 0 ? 'left (+)' : 'right'} dot as well, and bring it back to the battery.';
    final sources = parts.where(isSource).toList();
    if (sources.isEmpty) return 'There is no power. Add a battery, a solar panel, a hand crank or a wind turbine.';
    if (isReducer(p)) {
      final target = reducerTarget(p);
      if (p.vin < -0.3) return 'The $name is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget.';
      if (p.vin <= target + 0.2) return 'The $name can only bring volts DOWN. It makes ${_fmtV(target)} V, but only ${p.vin.toStringAsFixed(1)} V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting.';
    }
    final spec = kDeviceSpecs[p.kind];
    final polar = p.kind == 'led' || (spec?.polar ?? false);
    if (polar && p.v < -0.3) return 'The $name is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the −. Swap its two wires.';
    for (final s in of('battery')) {
      if (s.volts == 1.5 && s.charge <= 0.02 && wireCount(s, 0) + wireCount(s, 1) > 0) {
        if (s.v < -0.3) return 'The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the − to the −, to charge it.';
        return 'The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, − to −) and wait until it is full, then wire it to the $name.';
      }
    }
    for (final s in of('switch')) {
      if (!s.on) return 'A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it.';
    }
    for (final q in parts) {
      if (q.burnt && q != p) return 'The ${q.info.name} in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it.';
    }
    for (final s in sources) {
      if (s.kind == 'solar' && s.level < 0.05) return 'The solar panel has no light. Turn the sunlight up.';
      if (s.kind == 'turbine' && s.level < 0.05) return 'The wind turbine has no wind. Turn the wind up.';
      if (s.kind == 'crank' && s.level < 0.05) return 'The hand crank has stopped. Tap it again and again to spin it.';
    }
    for (final s in sources) {
      if (overloaded(s)) return 'The ${s.info.name} is overloaded. Everything connected to it asks for ${s.demand.toStringAsFixed(2)} amps, but it can only give about ${sourceMaxAmps(s).toStringAsFixed(2)} amps, so its volts sag and the $name does not get enough. Take some gadgets off, or use a bigger battery.';
    }
    if (spec != null && p.v.abs() < spec.minV && p.i.abs() > 0.0005) {
      final others = parts.any((q) => q != p && needsPower(q) && (q.i.abs() > 0.0005));
      return 'The $name needs at least ${_fmtV(spec.minV)} volts but only gets ${p.v.abs().toStringAsFixed(1)} V. Use a bigger battery${others ? ', or take out parts that share the voltage with it' : ''}.';
    }
    if (p.kind == 'led' && p.i.abs() > 0.0005) return 'An LED needs about 2 volts to light up but only gets ${p.v.abs().toStringAsFixed(1)} V. Use a bigger battery.';
    if (p.i.abs() < 0.0005) return 'No current is flowing through the $name. The loop is not complete: follow the wires from the battery + through every part and back to the battery −. A wire is probably missing or on the wrong dot.';
    return 'The $name is not getting enough power (${p.v.abs().toStringAsFixed(1)} V). Try a bigger battery.';
  }

  // ── Checks used by the challenges ────────────────────────────────────────

  Iterable<Part> of(String kind) => parts.where((p) => p.kind == kind);
  bool lit(String kind, [double min = 0.35]) => of(kind).any((p) => p.glow >= min && !p.burnt);
  bool has(String kind) => parts.any((p) => p.kind == kind);

  /// Is a source's loop actually carrying current?
  bool powered(Part p) => p.i.abs() > 0.002 || p.glow > 0.05;
}

// ═════════════════════════════════════════════════════════════════════════════
// Drawing the board
// ═════════════════════════════════════════════════════════════════════════════

class BoardPainter extends CustomPainter {
  BoardPainter(this.board, {this.selected, this.dragFrom, this.dragTo, this.selWire, this.popIn = const {}});
  final ElectronicsBoard board;
  final Part? selected;
  final (Part, int)? dragFrom;
  final Offset? dragTo;
  final Wire? selWire;
  final Map<String, double> popIn; // part id -> 0..1 appear animation

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0E1218));
    final dot = Paint()..color = Colors.white.withValues(alpha: 0.06);
    for (var x = 12.0; x < size.width; x += 24) {
      for (var y = 12.0; y < size.height; y += 24) {
        canvas.drawCircle(Offset(x, y), 1.1, dot);
      }
    }
    // Wires.
    for (final w in board.wires) {
      final a = ElectronicsBoard.terminal(w.a, w.ta, size), b = ElectronicsBoard.terminal(w.b, w.tb, size);
      _wire(canvas, a, b, w, w == selWire);
    }
    if (dragFrom != null && dragTo != null) {
      final a = ElectronicsBoard.terminal(dragFrom!.$1, dragFrom!.$2, size);
      canvas.drawLine(a, dragTo!, Paint()..color = Colors.white70..strokeWidth = 3..strokeCap = StrokeCap.round);
    }
    for (final p in board.parts) {
      final c = Offset(p.x * size.width, p.y * size.height);
      if (p.hot > 0) canvas.drawCircle(c, 46 + 14 * math.sin(board.time * 30), Paint()..color = const Color(0xFFFF3B1F).withValues(alpha: (p.hot * 0.45).clamp(0.0, 0.6))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
      final pop = popIn[p.id] ?? 1.0;
      canvas.save();
      canvas.translate(c.dx, c.dy);
      canvas.scale(Curves.elasticOut.transform(pop.clamp(0.0, 1.0)).clamp(0.01, 1.4));
      _part(canvas, p, identical(p, selected));
      canvas.restore();
      if (board.overloaded(p)) {
        final bp = c + const Offset(0, -40);
        final flash = 0.65 + 0.35 * math.sin(board.time * 10);
        canvas.drawPath(Path()..moveTo(bp.dx, bp.dy - 13)..lineTo(bp.dx + 13, bp.dy + 10)..lineTo(bp.dx - 13, bp.dy + 10)..close(), Paint()..color = const Color(0xFFEF4444).withValues(alpha: flash));
        canvas.drawPath(Path()..moveTo(bp.dx, bp.dy - 13)..lineTo(bp.dx + 13, bp.dy + 10)..lineTo(bp.dx - 13, bp.dy + 10)..close(), Paint()..style = PaintingStyle.stroke..strokeWidth = 1.6..color = Colors.white);
        _text(canvas, '!', bp + const Offset(-3, -8), Colors.white, 14);
      }
      if (board.needsAttention(p)) {
        final bp = c + const Offset(0, -40);
        canvas.drawCircle(bp, 10, Paint()..color = const Color(0xFFF59E0B));
        _text(canvas, '!', bp + const Offset(-3, -8), Colors.black, 14);
      }
      for (var t = 0; t < 2; t++) {
        final tp = ElectronicsBoard.terminal(p, t, size);
        canvas.drawCircle(tp, 7, Paint()..color = const Color(0xFF0E1218));
        canvas.drawCircle(tp, 6, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..color = t == 0 && board.hasPolarity(p) ? const Color(0xFFF87171) : Colors.white70);
        if (t == 0 && board.hasPolarity(p)) {
          _text(canvas, '+', tp + const Offset(-4, -22), const Color(0xFFF87171), 13);
        }
      }
    }
    // Sparks fly on top of everything.
    for (final sp in board.sparks) {
      final pos = Offset(sp.x * size.width + sp.ox, sp.y * size.height + sp.oy);
      final k = (sp.life / 0.8).clamp(0.0, 1.0);
      final col = Color.lerp(const Color(0xFFFF6A00), const Color(0xFFFFF3A0), k)!;
      canvas.drawLine(pos, pos - Offset(sp.vx, sp.vy) * 0.035, Paint()..color = col..strokeWidth = 2.4..strokeCap = StrokeCap.round);
      canvas.drawCircle(pos, 4.5 * k + 1, Paint()..color = col.withValues(alpha: 0.35 * k)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3));
    }
    final shorted = board.parts.any((p) => p.hot > 0.05);
    if (shorted) {
      final warn = board.parts.fold<double>(0, (m, p) => math.max(m, p.hot));
      canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFFFF2A1A).withValues(alpha: 0.05 + 0.09 * warn * (0.5 + 0.5 * math.sin(board.time * 22))));
      final tp = TextPainter(text: const TextSpan(text: '⚡ SHORT CIRCUIT! Too much current. Add a load or a fuse.', style: TextStyle(color: Color(0xFFFFE08A), fontSize: 13, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout(maxWidth: size.width - 24);
      tp.paint(canvas, Offset(12, 10));
    }
  }

  void _text(Canvas canvas, String t, Offset o, Color c, double s) {
    final tp = TextPainter(text: TextSpan(text: t, style: TextStyle(color: c, fontSize: s, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, o);
  }

  void _wire(Canvas canvas, Offset a, Offset b, Wire w, bool sel) {
    final path = Path()..moveTo(a.dx, a.dy);
    final mid = wireMid(a, b, w);
    path.quadraticBezierTo(mid.dx, mid.dy, b.dx, b.dy);
    final cur = w.a.i.abs() + w.b.i.abs();
    final flowing = (w.a.i.abs() > 0.003 && w.b.i.abs() > 0.003);
    final heat = math.max(w.a.hot, w.b.hot);
    final hot = heat > 0.05 ? Color.lerp(const Color(0xFFFBBF24), const Color(0xFFFF3B1F), (heat / 1.2).clamp(0.0, 1.0))! : (flowing ? Color.lerp(const Color(0xFF38BDF8), const Color(0xFFFBBF24), (cur * 1.2).clamp(0.0, 1.0))! : const Color(0xFF6B7280));
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = sel ? 7 : 5..strokeCap = StrokeCap.round..color = (sel ? Colors.white : hot).withValues(alpha: flowing ? 0.4 : 0.55));
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..strokeCap = StrokeCap.round..color = sel ? Colors.white : hot);
    if (flowing) {
      // Moving dots show the current flowing; faster means more current.
      final metrics = path.computeMetrics().first;
      final speed = 40 + (cur * 120).clamp(0, 160);
      final dir = w.a.i + w.b.i >= 0 ? 1 : -1;
      for (var k = 0; k < metrics.length / 22; k++) {
        final d = ((k * 22 + board.time * speed * dir) % metrics.length + metrics.length) % metrics.length;
        final t = metrics.getTangentForOffset(d);
        if (t != null) canvas.drawCircle(t.position, 2.6, Paint()..color = Colors.white);
      }
    }
  }

  // ── Realistic parts ────────────────────────────────────────────────────────

  Paint _metal(Rect r, {bool vertical = true, Color a = const Color(0xFF6B7280), Color b = const Color(0xFFF3F4F6)}) => Paint()
    ..shader = LinearGradient(begin: vertical ? Alignment.topCenter : Alignment.centerLeft, end: vertical ? Alignment.bottomCenter : Alignment.centerRight, colors: [a, b, a, Color.lerp(a, Colors.black, 0.3)!], stops: const [0, 0.35, 0.65, 1]).createShader(r);

  void _screw(Canvas canvas, Offset c) {
    canvas.drawCircle(c, 4.2, Paint()..shader = const RadialGradient(colors: [Color(0xFFF3F4F6), Color(0xFF6B7280)]).createShader(Rect.fromCircle(center: c, radius: 4.2)));
    canvas.drawLine(c + const Offset(-2.6, -1), c + const Offset(2.6, 1), Paint()..color = const Color(0xFF374151)..strokeWidth = 1.2);
  }

  void _part(Canvas canvas, Part p, bool sel) {
    final lead = Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFE5E7EB), Color(0xFF6B7280)]).createShader(const Rect.fromLTWH(-48, -3, 96, 6))..strokeWidth = 3.4..strokeCap = StrokeCap.round;
    // A soft shadow on the board.
    canvas.drawOval(const Rect.fromLTWH(-34, 14, 68, 12), Paint()..color = Colors.black.withValues(alpha: 0.45)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
    if (sel) canvas.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-46, -34, 92, 62), const Radius.circular(14)), Paint()..color = Colors.white.withValues(alpha: 0.14));
    final reach = ElectronicsBoard.termOffset(p);
    canvas.drawLine(Offset(-reach, 0), const Offset(-26, 0), lead);
    canvas.drawLine(const Offset(26, 0), Offset(reach, 0), lead);
    final dead = p.burnt;
    final grown = isScreenKind(p.kind) && p.scale != 1.0;
    if (grown) {
      canvas.save();
      canvas.scale(p.scale);
    }
    switch (p.kind) {
      case 'battery':
        _battery(canvas, p);
      case 'solar':
        final frame = RRect.fromRectAndRadius(const Rect.fromLTWH(-38, -22, 76, 44), const Radius.circular(4));
        canvas.drawRRect(frame, _metal(frame.outerRect, vertical: false, a: const Color(0xFF9CA3AF), b: const Color(0xFFE5E7EB)));
        final cells = const Rect.fromLTWH(-34, -18, 68, 36);
        canvas.drawRect(cells, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(const Color(0xFF0B1B4D), const Color(0xFF3B82F6), 0.25 + 0.55 * p.level)!, Color.lerp(const Color(0xFF050B24), const Color(0xFF1E40AF), 0.3 + 0.4 * p.level)!]).createShader(cells));
        final grid = Paint()..color = Colors.white.withValues(alpha: 0.35)..strokeWidth = 0.8;
        for (var i = 1; i < 6; i++) {
          canvas.drawLine(Offset(-34 + i * 68 / 6, -18), Offset(-34 + i * 68 / 6, 18), grid);
        }
        for (var i = 1; i < 4; i++) {
          canvas.drawLine(Offset(-34, -18 + i * 9), Offset(34, -18 + i * 9), grid);
        }
        for (var i = 0; i < 6; i++) {
          canvas.drawLine(Offset(-34 + (i + 0.5) * 68 / 6, -18), Offset(-34 + (i + 0.5) * 68 / 6, 18), Paint()..color = const Color(0xFFCBD5E1).withValues(alpha: 0.5)..strokeWidth = 0.6);
        }
        canvas.drawPath(Path()..moveTo(-34, 18)..lineTo(-6 + 40 * p.level, -18)..lineTo(4 + 40 * p.level, -18)..lineTo(-24, 18)..close(), Paint()..color = Colors.white.withValues(alpha: 0.10 + 0.22 * p.level));
        canvas.drawCircle(const Offset(28, -30), 4 + 4 * p.level, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.9));
      case 'crank':
        final base = RRect.fromRectAndRadius(const Rect.fromLTWH(-28, -16, 56, 32), const Radius.circular(8));
        canvas.drawRRect(base, _metal(base.outerRect, a: const Color(0xFF475569), b: const Color(0xFF94A3B8)));
        canvas.drawCircle(Offset.zero, 12, Paint()..shader = const RadialGradient(colors: [Color(0xFFE5E7EB), Color(0xFF4B5563)]).createShader(Rect.fromCircle(center: Offset.zero, radius: 12)));
        final knob = Offset(math.cos(p.spin) * 22, math.sin(p.spin) * 22);
        canvas.drawLine(Offset.zero, knob, Paint()..color = const Color(0xFFCBD5E1)..strokeWidth = 5..strokeCap = StrokeCap.round);
        canvas.drawCircle(knob, 7, Paint()..shader = const RadialGradient(colors: [Color(0xFFFB923C), Color(0xFF9A3412)]).createShader(Rect.fromCircle(center: knob, radius: 7)));
        _screw(canvas, const Offset(-22, -10));
        _screw(canvas, const Offset(22, 10));
      case 'turbine':
        canvas.drawPath(Path()..moveTo(-3, 24)..lineTo(3, 24)..lineTo(1.5, 0)..lineTo(-1.5, 0)..close(), Paint()..color = const Color(0xFFE5E7EB));
        for (var k = 0; k < 3; k++) {
          final a = p.spin + k * 2.094;
          canvas.save();
          canvas.rotate(a);
          canvas.drawPath(Path()..moveTo(0, -2)..quadraticBezierTo(6, -14, 2, -30)..quadraticBezierTo(-2, -14, 0, -2)..close(), Paint()..color = Colors.white);
          canvas.restore();
        }
        canvas.drawCircle(Offset.zero, 4.5, Paint()..shader = const RadialGradient(colors: [Colors.white, Color(0xFF94A3B8)]).createShader(Rect.fromCircle(center: Offset.zero, radius: 4.5)));
      case 'switch':
        final base = RRect.fromRectAndRadius(const Rect.fromLTWH(-30, -2, 60, 20), const Radius.circular(5));
        canvas.drawRRect(base, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF374151), Color(0xFF111827)]).createShader(base.outerRect));
        _screw(canvas, const Offset(-22, 8));
        _screw(canvas, const Offset(22, 8));
        final tip = p.on ? const Offset(22, 8) : const Offset(14, -18);
        canvas.drawLine(const Offset(-22, 8), tip, Paint()..color = const Color(0xFF111827)..strokeWidth = 6..strokeCap = StrokeCap.round);
        canvas.drawLine(const Offset(-22, 8), tip, Paint()..color = p.on ? const Color(0xFF4ADE80) : const Color(0xFFE5E7EB)..strokeWidth = 4..strokeCap = StrokeCap.round);
        canvas.drawCircle(Offset.lerp(const Offset(-22, 8), tip, 0.85)!, 5, Paint()..color = const Color(0xFFEF4444));
      case 'fuse':
        final tube = RRect.fromRectAndRadius(const Rect.fromLTWH(-24, -9, 48, 18), const Radius.circular(9));
        canvas.drawRRect(tube, Paint()..color = const Color(0xFFBAE6FD).withValues(alpha: 0.25));
        canvas.drawRRect(tube, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white54);
        if (!dead) {
          canvas.drawLine(const Offset(-20, 0), const Offset(20, 0), Paint()..strokeWidth = 1.6..color = Color.lerp(const Color(0xFFE5E7EB), const Color(0xFFFB923C), p.glow)!);
        } else {
          canvas.drawLine(const Offset(-20, 0), const Offset(-5, 0), Paint()..strokeWidth = 1.6..color = Colors.white38);
          canvas.drawLine(const Offset(5, 0), const Offset(20, 0), Paint()..strokeWidth = 1.6..color = Colors.white38);
          canvas.drawCircle(Offset.zero, 6, Paint()..color = Colors.black45);
        }
        for (final sx in const [-1.0, 1.0]) {
          final cap = Rect.fromCenter(center: Offset(sx * 22, 0), width: 9, height: 20);
          canvas.drawRRect(RRect.fromRectAndRadius(cap, const Radius.circular(3)), _metal(cap, vertical: true, a: const Color(0xFFB45309), b: const Color(0xFFFCD34D)));
        }
      case 'pot':
        canvas.drawCircle(Offset.zero, 21, Paint()..shader = const RadialGradient(colors: [Color(0xFF9CA3AF), Color(0xFF1F2937)]).createShader(Rect.fromCircle(center: Offset.zero, radius: 21)));
        for (var k = 0; k <= 10; k++) {
          final a = math.pi * 0.75 + k * math.pi * 1.5 / 10;
          canvas.drawLine(Offset(math.cos(a) * 18, math.sin(a) * 18), Offset(math.cos(a) * 22, math.sin(a) * 22), Paint()..color = Colors.white54..strokeWidth = 1.2);
        }
        canvas.drawCircle(Offset.zero, 13, Paint()..shader = const RadialGradient(colors: [Color(0xFF374151), Color(0xFF0B0F17)]).createShader(Rect.fromCircle(center: Offset.zero, radius: 13)));
        final ang = math.pi * 0.75 + p.level * math.pi * 1.5;
        canvas.drawLine(Offset(math.cos(ang) * 3, math.sin(ang) * 3), Offset(math.cos(ang) * 12, math.sin(ang) * 12), Paint()..color = const Color(0xFFFBBF24)..strokeWidth = 3..strokeCap = StrokeCap.round);
      case 'resistor':
        final body = RRect.fromRectAndRadius(const Rect.fromLTWH(-24, -9, 48, 18), const Radius.circular(9));
        canvas.drawRRect(body, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFF5E6C8), Color(0xFFC9A66B), Color(0xFF8B6B3A)]).createShader(body.outerRect));
        final bands = <double, List<Color>>{47.0: [Color(0xFFFACC15), Color(0xFF7C3AED), Colors.black], 100.0: [Color(0xFF8B5A2B), Colors.black, Color(0xFF8B5A2B)], 220.0: [Color(0xFFEF4444), Color(0xFFEF4444), Color(0xFF8B5A2B)], 470.0: [Color(0xFFFACC15), Color(0xFF7C3AED), Color(0xFF8B5A2B)], 1000.0: [Color(0xFF8B5A2B), Colors.black, Color(0xFFEF4444)]};
        final cols = bands[p.ohms] ?? bands[100.0]!;
        for (var i = 0; i < 3; i++) {
          canvas.drawRect(Rect.fromLTWH(-14 + i * 9.0, -9, 4.5, 18), Paint()..color = cols[i]);
        }
        canvas.drawRect(const Rect.fromLTWH(14, -9, 3.5, 18), Paint()..color = const Color(0xFFFBBF24));
        _text(canvas, p.ohms >= 1000 ? '1kΩ' : '${p.ohms.round()}Ω', const Offset(-10, 12), Colors.white70, 10);
      case 'bulb':
        if (p.glow > 0) canvas.drawCircle(const Offset(0, -6), 34, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.55 * p.glow)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
        final base = Rect.fromCenter(center: const Offset(0, 17), width: 18, height: 12);
        canvas.drawRRect(RRect.fromRectAndRadius(base, const Radius.circular(3)), _metal(base, vertical: true, a: const Color(0xFF6B7280), b: const Color(0xFFD1D5DB)));
        for (var i = 0; i < 3; i++) {
          canvas.drawLine(Offset(-9, 13 + i * 3.5), Offset(9, 13 + i * 3.5), Paint()..color = Colors.black26..strokeWidth = 1);
        }
        canvas.drawCircle(const Offset(0, -4), 17, Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.4), colors: [dead ? const Color(0xFF52525B) : Color.lerp(const Color(0xFFD1D5DB), const Color(0xFFFFFBEB), p.glow)!.withValues(alpha: dead ? 0.5 : 0.25 + 0.7 * p.glow), (dead ? const Color(0xFF27272A) : Color.lerp(const Color(0xFF9CA3AF), const Color(0xFFFDE047), p.glow)!).withValues(alpha: 0.18 + 0.5 * p.glow)]).createShader(Rect.fromCircle(center: const Offset(0, -4), radius: 17)));
        canvas.drawCircle(const Offset(0, -4), 17, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white.withValues(alpha: 0.6));
        canvas.drawPath(Path()..moveTo(-9, -12)..quadraticBezierTo(-12, -4, -9, 0), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withValues(alpha: 0.45));
        canvas.drawLine(const Offset(-4, 11), const Offset(-4, -2), Paint()..color = Colors.grey..strokeWidth = 1.4);
        canvas.drawLine(const Offset(4, 11), const Offset(4, -2), Paint()..color = Colors.grey..strokeWidth = 1.4);
        final fil = Path()..moveTo(-4, -2);
        for (var k = 0; k < 6; k++) {
          fil.lineTo(-4 + (k + 1) * 8 / 6, -2 + (k.isEven ? -6 : 1));
        }
        canvas.drawPath(fil, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.8..color = dead ? Colors.black54 : Color.lerp(const Color(0xFF9CA3AF), const Color(0xFFFFF7CC), p.glow)!);
      case 'led':
        if (p.glow > 0) canvas.drawCircle(const Offset(0, -4), 30, Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.6 * p.glow)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 11));
        canvas.drawLine(const Offset(-5, 6), const Offset(-5, 20), Paint()..color = const Color(0xFFD1D5DB)..strokeWidth = 2.4);
        canvas.drawLine(const Offset(5, 6), const Offset(5, 17), Paint()..color = const Color(0xFFD1D5DB)..strokeWidth = 2.4);
        final dome = Path()..moveTo(-12, 8)..lineTo(-12, -6)..quadraticBezierTo(0, -26, 12, -6)..lineTo(12, 8)..close();
        canvas.drawPath(dome, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [dead ? const Color(0xFF3F3F46) : Color.lerp(const Color(0xFF7F1D1D), const Color(0xFFFF8A8A), p.glow)!, dead ? const Color(0xFF18181B) : Color.lerp(const Color(0xFF450A0A), const Color(0xFFEF4444), p.glow)!]).createShader(const Rect.fromLTWH(-12, -22, 24, 30)));
        canvas.drawPath(dome, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = Colors.white30);
        canvas.drawRect(const Rect.fromLTWH(-14, 6, 28, 4), Paint()..color = const Color(0xFFB91C1C));
        canvas.drawPath(Path()..moveTo(-7, -4)..quadraticBezierTo(-6, -12, 0, -15), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withValues(alpha: 0.5));
      case 'motor':
        final can = Rect.fromLTWH(-28, -14, 48, 28);
        canvas.drawRRect(RRect.fromRectAndRadius(can, const Radius.circular(6)), _metal(can, a: const Color(0xFF64748B), b: const Color(0xFFE2E8F0)));
        canvas.drawRect(const Rect.fromLTWH(14, -14, 6, 28), Paint()..color = const Color(0xFF1F2937));
        canvas.drawRect(const Rect.fromLTWH(20, -2, 10, 4), Paint()..color = const Color(0xFFCBD5E1));
        canvas.save();
        canvas.translate(31, 0);
        for (var k = 0; k < 3; k++) {
          canvas.save();
          canvas.rotate(p.spin + k * 2.094);
          canvas.drawOval(Rect.fromCenter(center: const Offset(0, -9), width: 7, height: 15), Paint()..color = const Color(0xFFFB923C).withValues(alpha: 0.9));
          canvas.restore();
        }
        canvas.drawCircle(Offset.zero, 3, Paint()..color = const Color(0xFF111827));
        canvas.restore();
        _text(canvas, 'M', const Offset(-20, -9), const Color(0xFF111827), 14);
      case 'buzzer':
        final disc = Rect.fromCenter(center: Offset.zero, width: 42, height: 42);
        canvas.drawOval(disc, Paint()..shader = const RadialGradient(center: Alignment(-0.3, -0.4), colors: [Color(0xFF4B5563), Color(0xFF0B0F17)]).createShader(disc));
        canvas.drawCircle(Offset.zero, 6, Paint()..color = Colors.black);
        canvas.drawCircle(Offset.zero, 6, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white24);
        _text(canvas, '+', const Offset(-17, -18), Colors.white70, 12);
        for (var k = 1; k <= 3; k++) {
          canvas.drawArc(Rect.fromCircle(center: Offset.zero, radius: 24.0 + k * 5 + (p.glow > 0 ? (board.time * 14) % 5 : 0)), -0.7, 1.4, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFF472B6).withValues(alpha: p.glow * (1 - k * 0.22)));
        }
      case 'heater':
        final base = RRect.fromRectAndRadius(const Rect.fromLTWH(-30, -12, 60, 26), const Radius.circular(6));
        canvas.drawRRect(base, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFD6D3D1), Color(0xFF78716C)]).createShader(base.outerRect));
        final z = Path()..moveTo(-24, 0);
        for (var k = 0; k < 8; k++) {
          z.quadraticBezierTo(-24 + k * 6.0 + 3, k.isEven ? -10 : 10, -24 + (k + 1) * 6.0, 0);
        }
        if (p.glow > 0.1) canvas.drawPath(z, Paint()..style = PaintingStyle.stroke..strokeWidth = 10..color = const Color(0xFFFF7A18).withValues(alpha: 0.5 * p.glow)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
        canvas.drawPath(z, Paint()..style = PaintingStyle.stroke..strokeWidth = 3.2..strokeCap = StrokeCap.round..color = Color.lerp(const Color(0xFF57534E), const Color(0xFFFFB347), p.glow)!);
      case 'capacitor':
        final can = Rect.fromLTWH(-16, -22, 32, 40);
        canvas.drawRRect(RRect.fromRectAndRadius(can, const Radius.circular(6)), Paint()..shader = const LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [Color(0xFF1E3A8A), Color(0xFF3B82F6), Color(0xFF1E3A8A)]).createShader(can));
        canvas.drawRect(const Rect.fromLTWH(-16, -22, 7, 40), Paint()..color = const Color(0xFFE5E7EB));
        for (var i = 0; i < 4; i++) {
          _text(canvas, '−', Offset(-14, -18.0 + i * 9), const Color(0xFF111827), 11);
        }
        final top = Rect.fromLTWH(-16, -24, 32, 7);
        canvas.drawRRect(RRect.fromRectAndRadius(top, const Radius.circular(3)), _metal(top, vertical: false));
        canvas.drawRect(Rect.fromLTWH(-3, 18 - 38 * p.glow, 14, 38 * p.glow), Paint()..color = const Color(0xFF4ADE80).withValues(alpha: 0.5));
        _text(canvas, '1F', const Offset(0, -6), Colors.white, 11);
      case 'radio':
        final body = RRect.fromRectAndRadius(const Rect.fromLTWH(-34, -18, 68, 36), const Radius.circular(8));
        canvas.drawRRect(body, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFB45309), Color(0xFF78350F)]).createShader(body.outerRect));
        canvas.drawRRect(body, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = const Color(0xFFFCD34D).withValues(alpha: 0.6));
        canvas.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-30, -14, 30, 28), const Radius.circular(4)), Paint()..color = const Color(0xFF1C1917));
        for (var i = 0; i < 6; i++) {
          canvas.drawLine(Offset(-27, -10.0 + i * 4.4), Offset(-3, -10.0 + i * 4.4), Paint()..color = const Color(0xFF57534E)..strokeWidth = 1.4);
        }
        canvas.drawRect(const Rect.fromLTWH(4, -13, 26, 10), Paint()..color = p.glow > 0 ? const Color(0xFFFEF3C7) : const Color(0xFF44403C));
        if (p.glow > 0) canvas.drawLine(Offset(8 + (board.time * 7) % 18, -13), Offset(8 + (board.time * 7) % 18, -3), Paint()..color = const Color(0xFFDC2626)..strokeWidth = 1.6);
        canvas.drawCircle(const Offset(11, 8), 6, Paint()..shader = const RadialGradient(colors: [Color(0xFFE5E7EB), Color(0xFF4B5563)]).createShader(Rect.fromCircle(center: const Offset(11, 8), radius: 6)));
        canvas.drawCircle(const Offset(25, 8), 4, Paint()..color = const Color(0xFFFCD34D));
        canvas.drawLine(const Offset(24, -18), const Offset(34, -32), Paint()..color = const Color(0xFFD1D5DB)..strokeWidth = 1.8);
        if (p.glow > 0) {
          for (var k = 1; k <= 2; k++) {
            canvas.drawArc(Rect.fromCircle(center: const Offset(34, -32), radius: 4.0 + k * 5 + (board.time * 8) % 5), -2.4, 1.6, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = const Color(0xFFE879F9).withValues(alpha: 0.7));
          }
        }
      case 'tv':
        canvas.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-36, -24, 72, 44), const Radius.circular(6)), Paint()..color = const Color(0xFF0B0F17));
        final screen = RRect.fromRectAndRadius(const Rect.fromLTWH(-33, -21, 66, 38), const Radius.circular(3));
        if (p.glow > 0 && !p.burnt) {
          canvas.save();
          canvas.clipRRect(screen);
          canvas.translate(-33, -21);
          paintNgmyTv(canvas, const Size(66, 38), p.channel, board.time, age: p.onAge);
          canvas.restore();
          canvas.drawCircle(const Offset(30, 18), 1.6, Paint()..color = const Color(0xFF4ADE80));
        } else {
          canvas.drawRRect(screen, Paint()..color = const Color(0xFF05070A));
          canvas.drawPath(Path()..moveTo(-33, -21)..lineTo(-10, -21)..lineTo(-33, 0)..close(), Paint()..color = Colors.white.withValues(alpha: 0.05));
        }
        canvas.drawRect(const Rect.fromLTWH(-14, 20, 28, 4), Paint()..color = const Color(0xFF475569));
    }
    paintMorePart(canvas, p, board.time, _text);
    if (dead) _text(canvas, '✖', const Offset(-6, -42), const Color(0xFFEF4444), 14);
    if (grown) canvas.restore();
  }

  void _battery(Canvas canvas, Part p) {
    final v = p.volts;
    if (v <= 4.5) {
      // A cell, like the ones in a torch: shiny can, coloured label, a bump on the plus end.
      final can = Rect.fromLTWH(-28, -13, 56, 26);
      canvas.drawRRect(RRect.fromRectAndRadius(can, const Radius.circular(5)), _metal(can, a: const Color(0xFF9CA3AF), b: const Color(0xFFF9FAFB)));
      final label = Rect.fromLTWH(-22, -13, 44, 26);
      canvas.drawRect(label, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF030712)]).createShader(label));
      canvas.drawRect(const Rect.fromLTWH(-22, -3, 44, 6), Paint()..color = const Color(0xFFD97706));
      final nub = Rect.fromLTWH(28, -5, 6, 10);
      canvas.drawRRect(RRect.fromRectAndRadius(nub, const Radius.circular(2)), _metal(nub, vertical: true, a: const Color(0xFF9CA3AF), b: const Color(0xFFF3F4F6)));
      _text(canvas, '+', const Offset(18, -12), const Color(0xFFFBBF24), 11);
      _text(canvas, '−', const Offset(-22, -11), Colors.white70, 11);
      _text(canvas, '${v == v.roundToDouble() ? v.round() : v}V', const Offset(-14, -12), const Color(0xFFFBBF24), 13);
      if (v == 1.5) {
        canvas.drawRect(const Rect.fromLTWH(-22, 14, 44, 4), Paint()..color = Colors.white12);
        canvas.drawRect(Rect.fromLTWH(-22, 14, 44 * p.charge, 4), Paint()..color = Color.lerp(const Color(0xFFEF4444), const Color(0xFF4ADE80), p.charge)!);
        if (p.charge <= 0.02) _text(canvas, 'FLAT', const Offset(-10, 0), const Color(0xFFF87171), 9);
      }
      if (v > 2) {
        canvas.drawLine(const Offset(0, -13), const Offset(0, 13), Paint()..color = Colors.white24..strokeWidth = 1);
        _text(canvas, v > 3 ? '3 cells' : '2 cells', const Offset(-14, 2), Colors.white54, 8);
      }
    } else if (v <= 9) {
      // The little 9 volt block with its snap studs on top.
      final box = Rect.fromLTWH(-22, -17, 44, 34);
      canvas.drawRRect(RRect.fromRectAndRadius(box, const Radius.circular(5)), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF111827), Color(0xFF000000)]).createShader(box));
      canvas.drawRect(const Rect.fromLTWH(-22, -4, 44, 16), Paint()..color = const Color(0xFF16A34A));
      for (final sx in const [-8.0, 8.0]) {
        canvas.drawCircle(Offset(sx, -18), sx < 0 ? 5 : 3.6, Paint()..shader = const RadialGradient(colors: [Color(0xFFF3F4F6), Color(0xFF6B7280)]).createShader(Rect.fromCircle(center: Offset(sx, -18), radius: 5)));
      }
      _text(canvas, '9V', const Offset(-11, -2), Colors.white, 16);
    } else {
      // A big car-style battery with two posts.
      final box = Rect.fromLTWH(-34, -16, 68, 32);
      canvas.drawRRect(RRect.fromRectAndRadius(box, const Radius.circular(4)), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF030712)]).createShader(box));
      canvas.drawRect(const Rect.fromLTWH(-34, -4, 68, 11), Paint()..color = const Color(0xFFFACC15));
      for (final sx in const [-24.0, 24.0]) {
        canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(sx, -20), width: 10, height: 8), const Radius.circular(2)), Paint()..color = const Color(0xFFCBD5E1));
      }
      _text(canvas, '+', const Offset(20, -17), const Color(0xFFEF4444), 10);
      _text(canvas, '12V', const Offset(-13, -5), const Color(0xFF111827), 15);
    }
  }

  @override
  bool shouldRepaint(covariant BoardPainter old) => true;
}

/// A named list of example circuits (used by the lab and as fallbacks for the inventor).
class Recipe {
  const Recipe(this.title, this.explain, this.parts, this.wires, {this.keys = const []});
  final String title;
  final String explain;
  final List<(String, String, double, double, Map<String, double>)> parts; // id, kind, x, y, settings
  final List<(String, int, String, int)> wires;
  final List<String> keys;

  void build(ElectronicsBoard b) {
    b.clear();
    final byId = <String, Part>{};
    for (final p in parts) {
      final part = b.add(p.$2, p.$3, p.$4);
      p.$5.forEach((k, v) {
        switch (k) {
          case 'volts':
            part.volts = v;
          case 'level':
            part.level = v;
          case 'ohms':
            part.ohms = v;
          case 'on':
            part.on = v > 0;
          case 'charge':
            part.charge = v;
        }
      });
      byId[p.$1] = part;
    }
    for (final w in wires) {
      final a = byId[w.$1], c = byId[w.$3];
      if (a != null && c != null) b.connect(a, w.$2, c, w.$4);
    }
  }
}

const List<Recipe> kRecipes = [
  Recipe('Flashlight', 'A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 3}),
    ('s', 'switch', 0.5, 0.3, {'on': 1}),
    ('l', 'bulb', 0.8, 0.3, {}),
  ], [('b', 0, 's', 0), ('s', 1, 'l', 0), ('l', 1, 'b', 1)], keys: ['flashlight', 'torch', 'bulb', 'light', 'lamp']),
  Recipe('Safe LED', 'An LED burns out with too much current, so a resistor goes in the loop to hold the current back.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 3}),
    ('r', 'resistor', 0.5, 0.3, {'ohms': 220}),
    ('d', 'led', 0.8, 0.3, {}),
  ], [('b', 0, 'r', 0), ('r', 1, 'd', 0), ('d', 1, 'b', 1)], keys: ['led', 'diode', 'indicator']),
  Recipe('Electric fan', 'Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 3}),
    ('p', 'pot', 0.5, 0.3, {'level': 0.2}),
    ('m', 'motor', 0.8, 0.3, {}),
  ], [('b', 0, 'p', 0), ('p', 1, 'm', 0), ('m', 1, 'b', 1)], keys: ['fan', 'motor', 'spin', 'dimmer']),
  Recipe('Sun-powered lamp', 'A solar panel turns light into electricity with no battery at all. More light, brighter bulb.', [
    ('s', 'solar', 0.25, 0.3, {'level': 0.9}),
    ('l', 'bulb', 0.75, 0.3, {}),
  ], [('s', 0, 'l', 0), ('l', 1, 's', 1)], keys: ['solar', 'sun', 'without battery', 'no battery', 'free']),
  Recipe('Hand-crank light', 'Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.', [
    ('c', 'crank', 0.25, 0.3, {'level': 0.9}),
    ('l', 'bulb', 0.75, 0.3, {}),
  ], [('c', 0, 'l', 0), ('l', 1, 'c', 1)], keys: ['crank', 'dynamo', 'alternator', 'generator', 'hand', 'bicycle', 'pedal']),
  Recipe('Wind-powered motor', 'The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.', [
    ('t', 'turbine', 0.25, 0.3, {'level': 0.7}),
    ('m', 'motor', 0.75, 0.3, {}),
  ], [('t', 0, 'm', 0), ('m', 1, 't', 1)], keys: ['wind', 'turbine', 'windmill', 'water', 'hydro']),
  Recipe('Pocket radio', 'A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 9}),
    ('s', 'switch', 0.5, 0.3, {'on': 1}),
    ('r', 'radio', 0.8, 0.3, {}),
  ], [('b', 0, 's', 0), ('s', 1, 'r', 0), ('r', 1, 'b', 1)], keys: ['radio', 'music', 'listen']),
  Recipe('Television', 'A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 12}),
    ('s', 'switch', 0.5, 0.3, {'on': 1}),
    ('t', 'tv', 0.8, 0.3, {}),
  ], [('b', 0, 's', 0), ('s', 1, 't', 0), ('t', 1, 'b', 1)], keys: ['tv', 'television', 'screen', 'watch']),
  Recipe('Doorbell', 'Press the switch and current flows through the buzzer, which shakes to make a sound.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 3}),
    ('s', 'switch', 0.5, 0.3, {'on': 1}),
    ('z', 'buzzer', 0.8, 0.3, {}),
  ], [('b', 0, 's', 0), ('s', 1, 'z', 0), ('z', 1, 'b', 1)], keys: ['bell', 'buzzer', 'alarm', 'doorbell', 'sound']),
  Recipe('Toaster', 'A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 9}),
    ('s', 'switch', 0.5, 0.3, {'on': 1}),
    ('h', 'heater', 0.8, 0.3, {}),
  ], [('b', 0, 's', 0), ('s', 1, 'h', 0), ('h', 1, 'b', 1)], keys: ['heater', 'toaster', 'heat', 'hot', 'kettle', 'warm']),
  Recipe('Solar flash', 'A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.', [
    ('s', 'solar', 0.2, 0.25, {'level': 0.9}),
    ('r', 'resistor', 0.55, 0.25, {'ohms': 100}),
    ('c', 'capacitor', 0.85, 0.25, {}),
    ('q', 'resistor', 0.55, 0.6, {'ohms': 220}),
    ('d', 'led', 0.85, 0.6, {}),
  ], [('s', 0, 'r', 0), ('r', 1, 'c', 0), ('c', 1, 's', 1), ('c', 0, 'q', 0), ('q', 1, 'd', 0), ('d', 1, 'c', 1)], keys: ['capacitor', 'store', 'charge', 'flash']),
  Recipe('Two bulbs in a row', 'Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.', [
    ('b', 'battery', 0.15, 0.3, {'volts': 3}),
    ('l1', 'bulb', 0.5, 0.3, {}),
    ('l2', 'bulb', 0.85, 0.3, {}),
  ], [('b', 0, 'l1', 0), ('l1', 1, 'l2', 0), ('l2', 1, 'b', 1)], keys: ['series', 'two bulbs', 'dim']),
  Recipe('Charge a flat battery', 'A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, − to −) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.', [
    ('s', 'solar', 0.25, 0.3, {'level': 0.9}),
    ('b', 'battery', 0.75, 0.3, {'volts': 1.5, 'charge': 0}),
  ], [('s', 0, 'b', 0), ('b', 1, 's', 1)], keys: ['charge', 'rechargeable', 'flat', 'recharge']),
  Recipe('Phone charger', 'A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!', [
    ('b', 'battery', 0.2, 0.3, {'volts': 4.5}),
    ('s', 'switch', 0.5, 0.3, {'on': 1}),
    ('p', 'phone', 0.8, 0.3, {}),
  ], [('b', 0, 's', 0), ('s', 1, 'p', 0), ('p', 1, 'b', 1)], keys: ['phone', 'charger', 'usb', 'mobile']),
  Recipe('Cooling fan', 'A motor turns the blades. More volts, faster fan. It works either way round.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 3}),
    ('f', 'fan', 0.8, 0.3, {}),
  ], [('b', 0, 'f', 0), ('f', 1, 'b', 1)], keys: ['fan', 'cool', 'air', 'wind']),
  Recipe('Measure a bulb', 'The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!', [
    ('b', 'battery', 0.15, 0.2, {'volts': 3}),
    ('a', 'ammeter', 0.5, 0.2, {}),
    ('l', 'bulb', 0.85, 0.2, {}),
    ('v', 'voltmeter', 0.5, 0.6, {}),
  ], [('b', 0, 'a', 0), ('a', 1, 'l', 0), ('l', 1, 'b', 1), ('v', 0, 'l', 0), ('v', 1, 'l', 1)], keys: ['meter', 'measure', 'volt', 'amp', 'current', 'power', 'watt']),
  Recipe('Phone and TV on one battery', 'The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.', [
    ('b', 'battery', 0.15, 0.2, {'volts': 9}),
    ('t', 'tv', 0.55, 0.2, {}),
    ('c', 'buck', 0.4, 0.5, {'volts': 5}),
    ('p', 'phone', 0.8, 0.5, {}),
  ], [('b', 0, 't', 0), ('t', 1, 'b', 1), ('b', 0, 'c', 0), ('c', 1, 'p', 0), ('p', 1, 'b', 1)], keys: ['phone and tv', 'reduce', 'step down', 'converter', 'buck', 'one battery', 'tv and phone', 'lower voltage']),
  Recipe('Safe phone charger', 'A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 12}),
    ('c', 'buck', 0.5, 0.3, {'volts': 5}),
    ('p', 'phone', 0.8, 0.3, {}),
  ], [('b', 0, 'c', 0), ('c', 1, 'p', 0), ('p', 1, 'b', 1)], keys: ['safe', 'charger', 'adapter', 'usb', 'lower', 'reduce']),
  Recipe('Protect with a diode', 'A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.', [
    ('b', 'battery', 0.2, 0.3, {'volts': 9}),
    ('d', 'diode', 0.5, 0.3, {}),
    ('r', 'radio', 0.8, 0.3, {}),
  ], [('b', 0, 'd', 0), ('d', 1, 'r', 0), ('r', 1, 'b', 1)], keys: ['diode', 'protect', 'backwards', 'one way']),
];

