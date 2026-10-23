import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_studio_kit.dart';

/// Circuit Lab: wire switches, logic gates, lights and a buzzer together and see (and hear) how
/// computers think. A signal is either ON or OFF, and each gate follows one simple rule.
class _CPart {
  const _CPart(this.label, this.icon, this.color, this.inputs, this.rule);
  final String label;
  final IconData icon;
  final Color color;
  final int inputs; // 0 for things that start a signal
  final String rule;
}

const Map<String, _CPart> _kCParts = {
  'switch': _CPart('Switch', Icons.toggle_on_rounded, Color(0xFFFACC15), 0, 'Tap it to turn it ON or OFF.'),
  'clock': _CPart('Blinker', Icons.timer_rounded, Color(0xFF34D399), 0, 'Turns itself ON and OFF. Tap to change the speed.'),
  'and': _CPart('AND', Icons.join_inner_rounded, Color(0xFF60A5FA), 2, 'ON only when BOTH inputs are ON.'),
  'or': _CPart('OR', Icons.merge_type_rounded, Color(0xFFA78BFA), 2, 'ON when EITHER input is ON.'),
  'xor': _CPart('XOR', Icons.compare_arrows_rounded, Color(0xFFF472B6), 2, 'ON when the inputs are DIFFERENT.'),
  'nand': _CPart('NAND', Icons.block_rounded, Color(0xFF38BDF8), 2, 'OFF only when BOTH inputs are ON.'),
  'nor': _CPart('NOR', Icons.do_not_disturb_on_rounded, Color(0xFF2DD4BF), 2, 'ON only when BOTH inputs are OFF.'),
  'not': _CPart('NOT', Icons.swap_vert_rounded, Color(0xFFFB923C), 1, 'Flips the signal: ON becomes OFF.'),
  'led': _CPart('Light', Icons.lightbulb_rounded, Color(0xFFFDE047), 1, 'Glows when its input is ON.'),
  'buzzer': _CPart('Buzzer', Icons.volume_up_rounded, Color(0xFFF87171), 1, 'Beeps while its input is ON.'),
};

class _CN {
  _CN(this.id, this.kind, this.pos, [this.param = 0]);
  final String id;
  final String kind;
  Offset pos;
  int param;
}

class _CE {
  const _CE(this.from, this.to, this.port);
  final String from;
  final String to;
  final int port;
}

class _Challenge {
  const _Challenge(this.title, this.task, this.inputs, this.rule, this.output);
  final String title;
  final String task;
  final int inputs;
  final bool Function(List<bool>) rule;
  final String output; // 'led' or 'buzzer'
}

final List<_Challenge> _kChallenges = [
  _Challenge('Both together', 'Make the light glow only when BOTH switches are ON.', 2, (v) => v[0] && v[1], 'led'),
  _Challenge('Either one', 'Make the light glow when AT LEAST ONE switch is ON.', 2, (v) => v[0] || v[1], 'led'),
  _Challenge('Opposites', 'Make the light glow when the two switches are DIFFERENT (one ON, one OFF).', 2, (v) => v[0] != v[1], 'led'),
  _Challenge('Flip it', 'One switch only: make the light glow when the switch is OFF.', 1, (v) => !v[0], 'led'),
  _Challenge('Not both', 'Make the light go OFF only when both switches are ON.', 2, (v) => !(v[0] && v[1]), 'led'),
  _Challenge('Safe lock', 'The buzzer must sound only when A is ON, B is ON and C is OFF.', 3, (v) => v[0] && v[1] && !v[2], 'buzzer'),
];

class NgmyCircuitStudio extends StatefulWidget {
  const NgmyCircuitStudio({super.key});

  @override
  State<NgmyCircuitStudio> createState() => _NgmyCircuitStudioState();
}

class _NgmyCircuitStudioState extends State<NgmyCircuitStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final Map<String, _CN> _nodes = {};
  final List<_CE> _edges = [];
  final Map<String, bool> _val = {};
  final Map<String, bool> _switchOn = {};
  final Map<String, int> _lastBeep = {};
  Size _size = Size.zero;
  int _seq = 0;
  String? _drag;
  Offset _dragOffset = Offset.zero;
  String? _from;
  Offset _to = Offset.zero;
  bool _sound = true;
  int? _challenge;
  String _result = '';
  bool _resultOk = false;
  Set<int> _passed = {};
  String? _selected;

  static const double _half = 32;

  @override
  void initState() {
    super.initState();
    startFrames();
    _loadPassed();
    WidgetsBinding.instance.addPostFrameCallback((_) => _example(0));
  }

  Future<void> _loadPassed() async {
    try {
      final raw = (await SharedPreferences.getInstance()).getStringList('ngmy_circuit_passed_v1') ?? const [];
      if (mounted) setState(() => _passed = raw.map(int.parse).toSet());
    } catch (_) {}
  }

  Future<void> _markPassed(int i) async {
    _passed.add(i);
    try {
      (await SharedPreferences.getInstance()).setStringList('ngmy_circuit_passed_v1', _passed.map((e) => '$e').toList());
    } catch (_) {}
  }

  String _newId() => 'c${_seq++}';

  _CN _add(String kind, Offset pos, [int param = 0]) {
    final n = _CN(_newId(), kind, pos, param);
    _nodes[n.id] = n;
    return n;
  }

  Offset _inPort(_CN n, int port) {
    final cnt = _kCParts[n.kind]!.inputs;
    final dy = cnt == 2 ? (port == 0 ? -14.0 : 14.0) : 0.0;
    return n.pos + Offset(-_half - 4, dy);
  }

  Offset _outPort(_CN n) => n.pos + const Offset(_half + 4, 0);

  // ── Evaluating the circuit ─────────────────────────────────────────────────

  bool _input(String id, int port) {
    for (final e in _edges) {
      if (e.to == id && e.port == port) return _val[e.from] ?? false;
    }
    return false;
  }

  void _evaluate({int? at}) {
    final t = at ?? nowMs;
    for (var pass = 0; pass < 12; pass++) {
      var changed = false;
      for (final n in _nodes.values) {
        bool v;
        switch (n.kind) {
          case 'switch':
            v = _switchOn[n.id] ?? false;
          case 'clock':
            const periods = [900, 500, 250, 1600];
            v = (t ~/ periods[n.param % periods.length]).isEven;
          case 'and':
            v = _input(n.id, 0) && _input(n.id, 1);
          case 'or':
            v = _input(n.id, 0) || _input(n.id, 1);
          case 'xor':
            v = _input(n.id, 0) != _input(n.id, 1);
          case 'nand':
            v = !(_input(n.id, 0) && _input(n.id, 1));
          case 'nor':
            v = !(_input(n.id, 0) || _input(n.id, 1));
          case 'not':
            v = !_input(n.id, 0);
          default:
            v = _input(n.id, 0);
        }
        if (_val[n.id] != v) {
          _val[n.id] = v;
          changed = true;
        }
      }
      if (!changed) break;
    }
  }

  @override
  void onFrame(double dt) {
    _evaluate();
    if (!_sound) return;
    var k = 0;
    for (final n in _nodes.values.where((n) => n.kind == 'buzzer')) {
      if (_val[n.id] == true && nowMs - (_lastBeep[n.id] ?? -1000) > 240) {
        _lastBeep[n.id] = nowMs;
        NgmyTone.play(520 + 90.0 * (k++ % 4), ms: 200, wave: 'square', volume: 0.25);
      }
    }
  }

  // ── Examples and challenges ────────────────────────────────────────────────

  void _clear() {
    _nodes.clear();
    _edges.clear();
    _val.clear();
    _switchOn.clear();
    _selected = null;
  }

  Offset _at(double fx, double fy) => Offset(fx * _size.width, fy * _size.height);

  void _example(int which) {
    if (_size == Size.zero) {
      WidgetsBinding.instance.addPostFrameCallback((_) => _example(which));
      return;
    }
    setState(() {
      _clear();
      _challenge = null;
      _result = '';
      switch (which) {
        case 0: // AND
          final a = _add('switch', _at(0.15, 0.3));
          final b = _add('switch', _at(0.15, 0.62));
          final g = _add('and', _at(0.48, 0.46));
          final l = _add('led', _at(0.82, 0.46));
          _edges..add(_CE(a.id, g.id, 0))..add(_CE(b.id, g.id, 1))..add(_CE(g.id, l.id, 0));
        case 1: // half adder
          final a = _add('switch', _at(0.12, 0.25));
          final b = _add('switch', _at(0.12, 0.65));
          final x = _add('xor', _at(0.46, 0.25));
          final n = _add('and', _at(0.46, 0.65));
          final sum = _add('led', _at(0.82, 0.25), 0);
          final carry = _add('led', _at(0.82, 0.65), 0);
          _edges
            ..add(_CE(a.id, x.id, 0))
            ..add(_CE(b.id, x.id, 1))
            ..add(_CE(a.id, n.id, 0))
            ..add(_CE(b.id, n.id, 1))
            ..add(_CE(x.id, sum.id, 0))
            ..add(_CE(n.id, carry.id, 0));
        case 2: // blinker with buzzer
          final c = _add('clock', _at(0.15, 0.4));
          final no = _add('not', _at(0.45, 0.65));
          final l = _add('led', _at(0.82, 0.3));
          final bz = _add('buzzer', _at(0.82, 0.65));
          _edges..add(_CE(c.id, l.id, 0))..add(_CE(c.id, no.id, 0))..add(_CE(no.id, bz.id, 0));
        default: // memory (SR latch from two NOR gates)
          final s = _add('switch', _at(0.12, 0.25));
          final r = _add('switch', _at(0.12, 0.7));
          final n1 = _add('nor', _at(0.5, 0.25));
          final n2 = _add('nor', _at(0.5, 0.7));
          final l = _add('led', _at(0.86, 0.25));
          _edges
            ..add(_CE(r.id, n1.id, 0))
            ..add(_CE(n2.id, n1.id, 1))
            ..add(_CE(s.id, n2.id, 0))
            ..add(_CE(n1.id, n2.id, 1))
            ..add(_CE(n1.id, l.id, 0));
      }
    });
  }

  void _startChallenge(int i) {
    final c = _kChallenges[i];
    setState(() {
      _clear();
      _challenge = i;
      _result = '';
      for (var k = 0; k < c.inputs; k++) {
        _add('switch', _at(0.14, c.inputs == 1 ? 0.5 : 0.22 + 0.56 * k / (c.inputs - 1)));
      }
      _add(c.output, _at(0.86, 0.5));
    });
  }

  void _check() {
    final i = _challenge;
    if (i == null) return;
    final c = _kChallenges[i];
    final switches = _nodes.values.where((n) => n.kind == 'switch').toList()..sort((a, b) => a.pos.dy.compareTo(b.pos.dy));
    final out = _nodes.values.where((n) => n.kind == c.output).toList();
    if (switches.length < c.inputs || out.isEmpty) {
      setState(() {
        _result = 'Keep the ${c.inputs} switch${c.inputs == 1 ? '' : 'es'} and the ${c.output == 'led' ? 'light' : 'buzzer'} on the board.';
        _resultOk = false;
      });
      return;
    }
    final saved = Map<String, bool>.of(_switchOn);
    final bad = <String>[];
    for (var m = 0; m < (1 << c.inputs); m++) {
      final inputs = [for (var k = 0; k < c.inputs; k++) (m >> k) & 1 == 1];
      for (var k = 0; k < c.inputs; k++) {
        _switchOn[switches[k].id] = inputs[k];
      }
      _evaluate(at: 0);
      final got = _val[out.first.id] ?? false;
      if (got != c.rule(inputs)) {
        final names = [for (var k = 0; k < c.inputs; k++) '${String.fromCharCode(65 + k)} ${inputs[k] ? 'ON' : 'OFF'}'];
        bad.add('${names.join(', ')}: yours is ${got ? 'ON' : 'OFF'} but it should be ${c.rule(inputs) ? 'ON' : 'OFF'}');
      }
    }
    _switchOn
      ..clear()
      ..addAll(saved);
    setState(() {
      if (bad.isEmpty) {
        _result = 'Perfect! Your circuit works for every combination.';
        _resultOk = true;
        _markPassed(i);
        if (_sound) {
          NgmyTone.chord('bell', [0, 4, 7, 12], ms: 900);
        }
      } else {
        _result = 'Not yet. ${bad.first}';
        _resultOk = false;
        if (_sound) NgmyTone.play(140, ms: 250, wave: 'square', volume: 0.3);
      }
    });
  }

  // ── Touch ──────────────────────────────────────────────────────────────────

  String? _nodeAt(Offset p) {
    for (final n in _nodes.values.toList().reversed) {
      if ((p - n.pos).dx.abs() <= _half + 4 && (p - n.pos).dy.abs() <= _half + 4) return n.id;
    }
    return null;
  }

  String? _outAt(Offset p) {
    for (final n in _nodes.values.toList().reversed) {
      if ((p - _outPort(n)).distance <= 24) return n.id;
    }
    return null;
  }

  (String, int)? _inAt(Offset p) {
    (String, int)? best;
    var bestD = 44.0;
    for (final n in _nodes.values) {
      final cnt = _kCParts[n.kind]!.inputs;
      for (var port = 0; port < cnt; port++) {
        final d = (p - _inPort(n, port)).distance;
        if (d < bestD) {
          bestD = d;
          best = (n.id, port);
        }
      }
    }
    return best;
  }

  int? _edgeAt(Offset p) {
    for (var i = 0; i < _edges.length; i++) {
      final e = _edges[i];
      final a = _nodes[e.from], b = _nodes[e.to];
      if (a == null || b == null) continue;
      for (var k = 0; k <= 24; k++) {
        if ((_wirePoint(_outPort(a), _inPort(b, e.port), k / 24) - p).distance < 14) return i;
      }
    }
    return null;
  }

  void _tap(Offset p) {
    final id = _nodeAt(p);
    if (id != null) {
      final n = _nodes[id]!;
      HapticFeedback.selectionClick();
      _selected = id;
      if (n.kind == 'switch') {
        _switchOn[id] = !(_switchOn[id] ?? false);
        if (_sound) NgmyTone.play(_switchOn[id]! ? 900 : 600, ms: 40, wave: 'square', volume: 0.25);
      } else if (n.kind == 'clock') {
        n.param = (n.param + 1) % 4;
      }
      setState(() {});
      return;
    }
    final ei = _edgeAt(p);
    if (ei != null) {
      setState(() => _edges.removeAt(ei));
    } else {
      setState(() => _selected = null);
    }
  }

  Future<void> _long(Offset p) async {
    final id = _nodeAt(p);
    if (id == null) return;
    HapticFeedback.mediumImpact();
    setState(() {
      _nodes.remove(id);
      _edges.removeWhere((e) => e.from == id || e.to == id);
      _selected = null;
    });
  }

  void _addPart(String kind) {
    if (_size == Size.zero) return;
    final rnd = math.Random();
    setState(() {
      final n = _add(kind, Offset(_size.width * (0.3 + rnd.nextDouble() * 0.4), _size.height * (0.2 + rnd.nextDouble() * 0.6)));
      _selected = n.id;
    });
    HapticFeedback.selectionClick();
  }

  @override
  Widget build(BuildContext context) {
    final sel = _selected == null ? null : _nodes[_selected];
    final ch = _challenge == null ? null : _kChallenges[_challenge!];
    return StudioPage(
      title: 'CIRCUIT LAB',
      accent: const Color(0xFF60A5FA),
      help: 'This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.',
      actions: [IconButton(onPressed: () => setState(() => _sound = !_sound), icon: Icon(_sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, color: Colors.white70, size: 21), tooltip: 'Sound')],
      stage: Column(children: [
        if (ch != null)
          Container(
            width: double.infinity,
            margin: const EdgeInsets.fromLTRB(12, 6, 12, 0),
            padding: const EdgeInsets.fromLTRB(12, 8, 8, 8),
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(16), color: const Color(0xFF60A5FA).withValues(alpha: 0.14), border: Border.all(color: const Color(0xFF60A5FA).withValues(alpha: 0.5))),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Challenge: ${ch.title}', style: const TextStyle(color: Color(0xFF60A5FA), fontWeight: FontWeight.w900, fontSize: 12.5)),
                  Text(ch.task, style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.3)),
                  if (_result.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 4), child: Text(_result, style: TextStyle(color: _resultOk ? const Color(0xFF4ADE80) : const Color(0xFFFCA5A5), fontSize: 12, fontWeight: FontWeight.w800))),
                ]),
              ),
              FilledButton(onPressed: _check, style: FilledButton.styleFrom(backgroundColor: const Color(0xFF60A5FA), visualDensity: VisualDensity.compact), child: const Text('Check')),
            ]),
          ),
        Expanded(
          child: LayoutBuilder(builder: (context, box) {
            _size = Size(box.maxWidth, box.maxHeight);
            return GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTapUp: (d) => _tap(d.localPosition),
              onPanStart: (d) {
                final out = _outAt(d.localPosition);
                if (out != null) {
                  _from = out;
                  _to = d.localPosition;
                  return;
                }
                final id = _nodeAt(d.localPosition);
                if (id != null) {
                  _drag = id;
                  _dragOffset = _nodes[id]!.pos - d.localPosition;
                }
              },
              onPanUpdate: (d) {
                if (_from != null) {
                  _to = d.localPosition;
                } else if (_drag != null) {
                  final n = _nodes[_drag!];
                  if (n != null) n.pos = Offset((d.localPosition.dx + _dragOffset.dx).clamp(46, _size.width - 46), (d.localPosition.dy + _dragOffset.dy).clamp(46, _size.height - 46));
                }
              },
              onPanEnd: (_) {
                if (_from != null) {
                  final target = _inAt(_to);
                  if (target != null && target.$1 != _from) {
                    _edges.removeWhere((e) => e.to == target.$1 && e.port == target.$2);
                    _edges.add(_CE(_from!, target.$1, target.$2));
                    HapticFeedback.lightImpact();
                  }
                }
                _from = null;
                _drag = null;
              },
              onLongPressStart: (d) => _long(d.localPosition),
              child: ClipRect(child: CustomPaint(size: _size, painter: _CircuitPainter(this))),
            );
          }),
        ),
        // The rule of the part you touched.
        if (sel != null)
          Container(
            width: double.infinity,
            margin: const EdgeInsets.fromLTRB(12, 0, 12, 6),
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), color: Colors.white.withValues(alpha: 0.06)),
            child: Text('${_kCParts[sel.kind]!.label}: ${_kCParts[sel.kind]!.rule}', style: const TextStyle(color: Colors.white70, fontSize: 12.5)),
          ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'PARTS', children: [
          for (final e in _kCParts.entries)
            GestureDetector(
              onTap: () => _addPart(e.key),
              child: Container(
                width: 58,
                margin: const EdgeInsets.only(right: 6),
                padding: const EdgeInsets.symmetric(vertical: 7),
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(13), color: e.value.color.withValues(alpha: 0.16), border: Border.all(color: e.value.color.withValues(alpha: 0.5))),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Icon(e.value.icon, color: e.value.color, size: 20),
                  const SizedBox(height: 2),
                  Text(e.value.label, style: const TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w800)),
                ]),
              ),
            ),
        ]),
        StudioRow(label: 'TRY', children: [
          for (final e in const [(0, 'AND'), (1, 'Adder'), (2, 'Blinker'), (3, 'Memory')]) StudioButton(icon: Icons.science_rounded, label: e.$2, color: const Color(0xFF60A5FA), onTap: () => _example(e.$1)),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(() {
                _clear();
                _challenge = null;
              })),
        ]),
        StudioRow(label: 'TASKS', children: [
          for (var i = 0; i < _kChallenges.length; i++)
            StudioChip(label: _kChallenges[i].title, icon: _passed.contains(i) ? Icons.check_circle_rounded : Icons.flag_rounded, selected: _challenge == i, color: _passed.contains(i) ? const Color(0xFF4ADE80) : const Color(0xFFFACC15), onTap: () => _startChallenge(i)),
        ]),
      ]),
    );
  }
}

Offset _wirePoint(Offset a, Offset b, double t) {
  final dx = math.max(40.0, (b.dx - a.dx).abs() * 0.5);
  final c1 = a + Offset(dx, 0);
  final c2 = b - Offset(dx, 0);
  final u = 1 - t;
  return a * (u * u * u) + c1 * (3 * u * u * t) + c2 * (3 * u * t * t) + b * (t * t * t);
}

class _CircuitPainter extends CustomPainter {
  _CircuitPainter(this.s) : super(repaint: null);
  final _NgmyCircuitStudioState s;

  static final Map<String, TextPainter> _tp = {};

  static TextPainter _text(String text, double size, Color color, {FontWeight w = FontWeight.w800, String? family, String? package}) {
    final key = '$text|$size|${color.toARGB32()}|$family';
    return _tp.putIfAbsent(key, () => TextPainter(text: TextSpan(text: text, style: TextStyle(fontSize: size, color: color, fontWeight: w, fontFamily: family, package: package)), textDirection: TextDirection.ltr)..layout());
  }

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0E0F14));
    final dot = Paint()..color = Colors.white.withValues(alpha: 0.05);
    for (double y = 20; y < size.height; y += 28) {
      for (double x = 14; x < size.width; x += 28) {
        canvas.drawCircle(Offset(x, y), 1, dot);
      }
    }
    // Wires: yellow and bright when the signal on them is ON.
    for (final e in s._edges) {
      final a = s._nodes[e.from], b = s._nodes[e.to];
      if (a == null || b == null) continue;
      final pa = s._outPort(a), pb = s._inPort(b, e.port);
      final on = s._val[e.from] == true;
      final path = Path()..moveTo(pa.dx, pa.dy);
      final dx = math.max(40.0, (pb.dx - pa.dx).abs() * 0.5);
      path.cubicTo(pa.dx + dx, pa.dy, pb.dx - dx, pb.dy, pb.dx, pb.dy);
      if (on) {
        canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 9..color = const Color(0xFFFACC15).withValues(alpha: 0.28)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
      }
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 3.2..strokeCap = StrokeCap.round..color = on ? const Color(0xFFFDE047) : const Color(0xFF475569));
    }
    final from = s._from;
    if (from != null && s._nodes[from] != null) {
      final pa = s._outPort(s._nodes[from]!);
      final pb = s._to;
      final dx = math.max(40.0, (pb.dx - pa.dx).abs() * 0.5);
      canvas.drawPath(Path()..moveTo(pa.dx, pa.dy)..cubicTo(pa.dx + dx, pa.dy, pb.dx - dx, pb.dy, pb.dx, pb.dy), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white70);
    }
    for (final n in s._nodes.values) {
      _paintNode(canvas, n);
    }
  }

  void _paintNode(Canvas canvas, _CN n) {
    final part = _kCParts[n.kind]!;
    final on = s._val[n.id] == true;
    final rect = Rect.fromCenter(center: n.pos, width: 64, height: 64);
    final rr = RRect.fromRectAndRadius(rect, const Radius.circular(16));
    final selected = s._selected == n.id;
    canvas.drawRRect(rr.shift(const Offset(0, 6)), Paint()..color = Colors.black.withValues(alpha: 0.55)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
    if (on && (n.kind == 'led' || n.kind == 'buzzer')) {
      canvas.drawCircle(n.pos, 52, Paint()..shader = RadialGradient(colors: [part.color.withValues(alpha: 0.6), Colors.transparent]).createShader(Rect.fromCircle(center: n.pos, radius: 52)));
    }
    canvas.drawRRect(rr.shift(const Offset(0, 4)), Paint()..color = Color.lerp(part.color, Colors.black, 0.65)!);
    final lit = on ? 0.35 : 0.0;
    canvas.drawRRect(rr, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(part.color, Colors.white, 0.1 + lit)!, Color.lerp(part.color, Colors.black, on ? 0.2 : 0.45)!]).createShader(rect));
    canvas.drawRRect(rr, Paint()..style = PaintingStyle.stroke..strokeWidth = selected ? 2.6 : 1.2..color = selected ? Colors.white : Colors.white.withValues(alpha: 0.35));
    final icon = n.kind == 'switch' ? ((s._switchOn[n.id] ?? false) ? Icons.toggle_on_rounded : Icons.toggle_off_rounded) : part.icon;
    final ip = _text(String.fromCharCode(icon.codePoint), 30, Colors.white, family: icon.fontFamily, package: icon.fontPackage);
    ip.paint(canvas, n.pos - Offset(ip.width / 2, ip.height / 2));
    final label = _text(part.label, 10.5, Colors.white);
    label.paint(canvas, n.pos + Offset(-label.width / 2, 38));
    final state = _text(part.inputs == 0 || n.kind == 'led' || n.kind == 'buzzer' ? (on ? 'ON' : 'OFF') : '', 9, on ? const Color(0xFFFDE047) : Colors.white38, w: FontWeight.w900);
    state.paint(canvas, n.pos + Offset(-state.width / 2, 51));
    // Ports.
    for (var p = 0; p < part.inputs; p++) {
      _port(canvas, s._inPort(n, p), part.color);
    }
    _port(canvas, s._outPort(n), part.color);
  }

  void _port(Canvas canvas, Offset c, Color color) {
    canvas.drawCircle(c, 8.5, Paint()..color = const Color(0xFF0E0F14));
    canvas.drawCircle(c, 8.5, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.2..color = color);
    canvas.drawCircle(c, 3.2, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _CircuitPainter old) => true;
}
