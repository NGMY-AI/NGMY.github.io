import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/foundation.dart' show visibleForTesting;
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_studio_kit.dart';

/// Reaction Lab: a studio where you drop parts on a board and wire them together.
/// A signal travels along every wire. Sources start signals, logic parts change them
/// and reaction parts turn them into light, sparks, balls, shakes and more.
/// The same parts wired differently give a different show, so everyone can build their own.
const Color _kBg = Color(0xFF121212);

enum _Role { source, logic, out }

class _Part {
  const _Part(this.label, this.icon, this.role, this.color, {this.opts = const []});
  final String label;
  final IconData icon;
  final _Role role;
  final Color color;

  /// What the setting reads as when the part is tapped (cycles through these).
  final List<String> opts;
}

const Map<String, _Part> _kParts = {
  // Sources: they start the signals.
  'beat': _Part('Clock', Icons.timer_rounded, _Role.source, Color(0xFF34D399), opts: ['every 1.4s', 'every 0.8s', 'every 0.45s', 'every 2.4s']),
  'button': _Part('Button', Icons.touch_app_rounded, _Role.source, Color(0xFFFBBF24)),
  'dice': _Part('Dice', Icons.casino_rounded, _Role.source, Color(0xFFF472B6), opts: ['random', 'quick', 'slow']),
  // Logic: they change the signal.
  'delay': _Part('Delay', Icons.hourglass_bottom_rounded, _Role.logic, Color(0xFF60A5FA), opts: ['0.25s', '0.45s', '0.9s', '1.5s']),
  'echo': _Part('Echo', Icons.repeat_rounded, _Role.logic, Color(0xFFA78BFA), opts: ['fast', 'mid', 'slow']),
  'toggle': _Part('Every 2nd', Icons.swap_vert_rounded, _Role.logic, Color(0xFF2DD4BF)),
  'count3': _Part('Every 3rd', Icons.filter_3_rounded, _Role.logic, Color(0xFF38BDF8)),
  'chance': _Part('Chance', Icons.percent_rounded, _Role.logic, Color(0xFFFB923C), opts: ['50%', '25%', '75%']),
  // Reactions: what you see and feel.
  'light': _Part('Light', Icons.lightbulb_rounded, _Role.out, Color(0xFFFDE047)),
  'burst': _Part('Burst', Icons.celebration_rounded, _Role.out, Color(0xFFF472B6)),
  'ripple': _Part('Ripple', Icons.waves_rounded, _Role.out, Color(0xFF22D3EE)),
  'ball': _Part('Ball', Icons.sports_basketball_rounded, _Role.out, Color(0xFFFB923C)),
  'comet': _Part('Comet', Icons.rocket_launch_rounded, _Role.out, Color(0xFFA78BFA)),
  'shake': _Part('Shake', Icons.vibration_rounded, _Role.out, Color(0xFFF87171)),
  'pop': _Part('Pop', Icons.chat_bubble_rounded, _Role.out, Color(0xFF4ADE80)),
  'wash': _Part('Wash', Icons.format_color_fill_rounded, _Role.out, Color(0xFFC084FC)),
};

const List<Color> _kFx = [Color(0xFFF472B6), Color(0xFFFDE047), Color(0xFF34D399), Color(0xFF38BDF8), Color(0xFFA78BFA), Color(0xFFF87171)];
const List<String> _kWords = ['WOW', 'YES', 'BOOM', 'LOVE', 'GO!', '✨'];
const List<int> _kBeatMs = [1400, 800, 450, 2400];
const List<int> _kDelayMs = [250, 450, 900, 1500];
const List<int> _kEchoMs = [120, 220, 380];
const List<int> _kChance = [50, 25, 75];

class _N {
  _N(this.id, this.kind, this.pos, [this.param = 0]);
  final String id;
  final String kind;
  Offset pos;
  int param;
}

class _E {
  const _E(this.from, this.to);
  final String from;
  final String to;
}

class _Ev {
  _Ev(this.at, this.node);
  final int at;
  final String node;
}

class _Sig {
  _Sig(this.from, this.to, this.start, this.end);
  final String from;
  final String to;
  final int start;
  final int end;
}

class _Spark {
  _Spark(this.p, this.v, this.color, this.size, this.life, this.born);
  Offset p;
  Offset v;
  final Color color;
  final double size;
  final int life;
  final int born;
}

class _Ring {
  _Ring(this.c, this.color, this.born, {this.max = 150});
  final Offset c;
  final Color color;
  final int born;
  final double max;
}

class _Ball {
  _Ball(this.p, this.v, this.color, this.born);
  Offset p;
  Offset v;
  final Color color;
  final int born;
}

class _Comet {
  _Comet(this.from, this.to, this.color, this.born);
  final Offset from;
  final Offset to;
  final Color color;
  final int born;
}

class _Pop {
  _Pop(this.p, this.text, this.color, this.born);
  final Offset p;
  final String text;
  final Color color;
  final int born;
}

/// The running board: parts, wires, signals and every effect on screen.
class _Lab extends ChangeNotifier {
  final Map<String, _N> nodes = {};
  final List<_E> edges = [];
  final List<_Ev> _events = [];
  final List<_Sig> sigs = [];
  final List<_Spark> sparks = [];
  final List<_Ring> rings = [];
  final List<_Ball> balls = [];
  final List<_Comet> comets = [];
  final List<_Pop> pops = [];
  final Map<String, int> lastFire = {};
  final Map<String, int> fires = {};
  final Map<String, int> _next = {};
  final Map<String, int> _count = {};
  final math.Random rnd = math.Random();
  int now = 0;
  int _seq = 0;
  int shakeUntil = 0;
  int washUntil = 0;
  Color washColor = Colors.transparent;
  Size size = Size.zero;

  static const int wireMs = 260;

  String newId() => 'n${_seq++}';

  void poke() => notifyListeners();

  /// Sounds for the reactions (off when [soundOn] is false, and never too many at once).
  bool soundOn = false;
  int _lastTone = -1000;

  double _note(int semis) => NgmyTone.note(semis);

  void _tone(double freq, int ms, String wave, {double sweep = 0, double vol = 0.55}) {
    if (!soundOn || now - _lastTone < 35) return;
    _lastTone = now;
    NgmyTone.play(freq, ms: ms, wave: wave, sweep: sweep, volume: vol);
  }

  void clear() {
    nodes.clear();
    edges.clear();
    _events.clear();
    sigs.clear();
    sparks.clear();
    rings.clear();
    balls.clear();
    comets.clear();
    pops.clear();
    lastFire.clear();
    _next.clear();
    _count.clear();
    notifyListeners();
  }

  _N add(String kind, Offset pos, [int param = 0]) {
    final n = _N(newId(), kind, pos, param);
    nodes[n.id] = n;
    notifyListeners();
    return n;
  }

  void remove(String id) {
    nodes.remove(id);
    edges.removeWhere((e) => e.from == id || e.to == id);
    _events.removeWhere((e) => e.node == id);
    notifyListeners();
  }

  bool connect(String from, String to) {
    if (from == to) return false;
    final target = nodes[to];
    final source = nodes[from];
    if (target == null || source == null) return false;
    if (_kParts[target.kind]!.role == _Role.source) return false;
    if (edges.any((e) => e.from == from && e.to == to)) return false;
    edges.add(_E(from, to));
    notifyListeners();
    return true;
  }

  int _interval(_N n) {
    if (n.kind == 'beat') return _kBeatMs[n.param % _kBeatMs.length];
    // dice
    switch (n.param % 3) {
      case 1:
        return 350 + rnd.nextInt(500);
      case 2:
        return 1400 + rnd.nextInt(2200);
      default:
        return 450 + rnd.nextInt(2000);
    }
  }

  /// A signal reaches [id]: it reacts, then passes on along every wire leaving it.
  void fire(String id, {bool pass = true}) {
    final n = nodes[id];
    if (n == null) return;
    lastFire[id] = now;
    fires[id] = (fires[id] ?? 0) + 1;
    final c = n.pos;
    final color = _kFx[n.param % _kFx.length];
    var passOn = pass;
    switch (n.kind) {
      case 'light':
        rings.add(_Ring(c, color, now, max: 90));
        rings.add(_Ring(c, Colors.white, now, max: 50));
        for (var i = 0; i < 12; i++) {
          final a = rnd.nextDouble() * math.pi * 2;
          sparks.add(_Spark(c, Offset(math.cos(a), math.sin(a)) * 110, color, 4, 600, now));
        }
        _tone(_note([0, 4, 7, 12, 16, 19][n.param % 6] + 12), 220, 'tri');
      case 'burst':
        for (var i = 0; i < 70; i++) {
          final a = rnd.nextDouble() * math.pi * 2;
          final sp = 100 + rnd.nextDouble() * 320;
          sparks.add(_Spark(c, Offset(math.cos(a), math.sin(a)) * sp, Color.lerp(color, Colors.white, rnd.nextDouble() * 0.5)!, 3 + rnd.nextDouble() * 4.5, 1000 + rnd.nextInt(700), now));
        }
        rings.add(_Ring(c, color, now, max: 120));
        _tone(120, 200, 'noise', vol: 0.5);
        _tone(_note([7, 12, 16, 19][rnd.nextInt(4)] + 12), 260, 'tri');
      case 'ripple':
        rings.add(_Ring(c, color, now, max: 230));
        rings.add(_Ring(c, color, now + 160, max: 160));
        rings.add(_Ring(c, color, now + 320, max: 100));
        _tone(180 + rnd.nextInt(80).toDouble(), 330, 'sine', sweep: 0.6);
      case 'ball':
        balls.add(_Ball(c, Offset((rnd.nextDouble() - 0.5) * 220, -260 - rnd.nextDouble() * 180), color, now));
        _tone(300 + rnd.nextInt(300).toDouble(), 110, 'sine', sweep: 0.8);
      case 'comet':
        final a = rnd.nextDouble() * math.pi * 2;
        comets.add(_Comet(c, c + Offset(math.cos(a), math.sin(a)) * (260 + rnd.nextDouble() * 200), color, now));
        _tone(380, 400, 'tri', sweep: 2.0, vol: 0.4);
      case 'shake':
        shakeUntil = now + 450;
        HapticFeedback.heavyImpact();
        _tone(70, 260, 'sine', sweep: 0.5, vol: 0.9);
      case 'pop':
        pops.add(_Pop(c, _kWords[n.param % _kWords.length], color, now));
        _tone(_note([0, 5, 9, 12][rnd.nextInt(4)] + 12), 150, 'square', vol: 0.35);
      case 'wash':
        washColor = color;
        washUntil = now + 800;
        _tone(_note(0) + 40, 420, 'tri', vol: 0.4);
      case 'echo':
        final gap = _kEchoMs[n.param % _kEchoMs.length];
        for (var k = 1; k <= 3; k++) {
          _schedule(id, now + gap * k, passOnly: true);
        }
      case 'delay':
        passOn = false;
        for (final e in edges.where((e) => e.from == id)) {
          _sendAlong(e, now + _kDelayMs[n.param % _kDelayMs.length]);
        }
      case 'toggle':
        final k = (_count[id] ?? 0) + 1;
        _count[id] = k;
        passOn = k.isOdd;
      case 'count3':
        final k = (_count[id] ?? 0) + 1;
        _count[id] = k;
        passOn = k % 3 == 0;
      case 'chance':
        passOn = rnd.nextInt(100) < _kChance[n.param % _kChance.length];
      default:
        break;
    }
    if (pass && passOn) {
      for (final e in edges.where((e) => e.from == id)) {
        _sendAlong(e, now);
      }
    }
    if (sparks.length > 700) sparks.removeRange(0, sparks.length - 700);
  }

  /// A pass-on without reacting again (used by Echo).
  void _schedule(String id, int at, {bool passOnly = false}) {
    if (_events.length > 260) return;
    _events.add(_Ev(at, passOnly ? '~$id' : id));
  }

  void _sendAlong(_E e, int from) {
    if (_events.length > 260) return;
    final at = from + wireMs;
    sigs.add(_Sig(e.from, e.to, from, at));
    _events.add(_Ev(at, e.to));
  }

  void tick(int ms) {
    now = ms;
    // Sources fire on their own.
    for (final n in nodes.values.toList()) {
      if (n.kind != 'beat' && n.kind != 'dice') continue;
      final due = _next[n.id];
      if (due == null) {
        _next[n.id] = now + 300;
      } else if (now >= due) {
        fire(n.id);
        _next[n.id] = now + _interval(n);
      }
    }
    // Signals that arrive.
    final due = _events.where((e) => e.at <= now).toList();
    if (due.isNotEmpty) {
      _events.removeWhere((e) => e.at <= now);
      for (final e in due) {
        if (e.node.startsWith('~')) {
          final id = e.node.substring(1);
          for (final w in edges.where((w) => w.from == id)) {
            _sendAlong(w, now);
          }
        } else {
          fire(e.node);
        }
      }
    }
    sigs.removeWhere((s) => s.end < now);
    sparks.removeWhere((s) => now - s.born > s.life);
    rings.removeWhere((r) => now - r.born > 900);
    comets.removeWhere((c) => now - c.born > 700);
    pops.removeWhere((p) => now - p.born > 1100);
    balls.removeWhere((b) => now - b.born > 4200);
    notifyListeners();
  }

  void step(double dt) {
    for (final s in sparks) {
      s.p += s.v * dt;
      s.v = Offset(s.v.dx * (1 - 1.6 * dt), s.v.dy * (1 - 1.6 * dt) + 120 * dt);
    }
    final floor = size.height - 8;
    for (final b in balls) {
      b.v = Offset(b.v.dx, b.v.dy + 900 * dt);
      b.p += b.v * dt;
      if (b.p.dy > floor) {
        b.p = Offset(b.p.dx, floor);
        b.v = Offset(b.v.dx * 0.9, -b.v.dy * 0.62);
      }
      if (b.p.dx < 10 || b.p.dx > size.width - 10) b.v = Offset(-b.v.dx * 0.8, b.v.dy);
    }
  }

  // ── Save and load ────────────────────────────────────────────────────────

  String toJson() {
    final w = size.width <= 0 ? 1.0 : size.width;
    final h = size.height <= 0 ? 1.0 : size.height;
    return jsonEncode({
      'nodes': [for (final n in nodes.values) {'id': n.id, 'k': n.kind, 'x': n.pos.dx / w, 'y': n.pos.dy / h, 'p': n.param}],
      'edges': [for (final e in edges) [e.from, e.to]],
    });
  }

  bool fromJson(String raw) {
    try {
      final m = jsonDecode(raw) as Map<String, dynamic>;
      clear();
      for (final n in (m['nodes'] as List)) {
        final k = '${n['k']}';
        if (!_kParts.containsKey(k)) continue;
        final id = '${n['id']}';
        nodes[id] = _N(id, k, Offset((n['x'] as num).toDouble() * size.width, (n['y'] as num).toDouble() * size.height), (n['p'] as num).toInt());
        final num0 = int.tryParse(id.replaceAll('n', ''));
        if (num0 != null && num0 >= _seq) _seq = num0 + 1;
      }
      for (final e in (m['edges'] as List)) {
        final a = '${e[0]}', b = '${e[1]}';
        if (nodes.containsKey(a) && nodes.containsKey(b)) edges.add(_E(a, b));
      }
      notifyListeners();
      return true;
    } catch (_) {
      return false;
    }
  }

  /// Builds a ready-made board. [spec] items are (kind, x, y, setting); [wires] are index pairs.
  void load(List<(String, double, double, int)> spec, List<(int, int)> wires) {
    clear();
    final ids = <String>[];
    for (final s in spec) {
      ids.add(add(s.$1, Offset(s.$2 * size.width, s.$3 * size.height), s.$4).id);
    }
    for (final w in wires) {
      connect(ids[w.$1], ids[w.$2]);
    }
  }
}

class _Preset {
  const _Preset(this.name, this.blurb, this.spec, this.wires);
  final String name;
  final String blurb;
  final List<(String, double, double, int)> spec;
  final List<(int, int)> wires;
}

const List<_Preset> _kPresets = [
  _Preset('First spark', 'A clock lights a burst and a ripple', [
    ('beat', 0.18, 0.28, 0),
    ('burst', 0.7, 0.2, 0),
    ('delay', 0.45, 0.5, 1),
    ('ripple', 0.75, 0.6, 3),
  ], [(0, 1), (0, 2), (2, 3)]),
  _Preset('Heartbeat', 'Two thumps, then a shake', [
    ('beat', 0.15, 0.3, 1),
    ('ripple', 0.62, 0.15, 0),
    ('delay', 0.4, 0.45, 0),
    ('ripple', 0.7, 0.45, 0),
    ('delay', 0.4, 0.7, 1),
    ('shake', 0.75, 0.75, 0),
  ], [(0, 1), (0, 2), (2, 3), (2, 4), (4, 5)]),
  _Preset('Fireworks', 'Dice launch comets that burst in colour', [
    ('dice', 0.15, 0.7, 1),
    ('echo', 0.4, 0.7, 0),
    ('comet', 0.7, 0.5, 4),
    ('burst', 0.72, 0.2, 1),
    ('burst', 0.3, 0.25, 0),
    ('pop', 0.55, 0.85, 0),
  ], [(0, 1), (1, 2), (1, 3), (1, 4), (0, 5)]),
  _Preset('Rain', 'Balls fall at random and splash', [
    ('beat', 0.15, 0.2, 2),
    ('chance', 0.4, 0.2, 0),
    ('ball', 0.7, 0.12, 3),
    ('chance', 0.4, 0.5, 1),
    ('ball', 0.3, 0.08, 1),
    ('ripple', 0.7, 0.55, 3),
  ], [(0, 1), (1, 2), (0, 3), (3, 4), (2, 5)]),
  _Preset('Disco', 'A beat drives lights, washes and bursts', [
    ('beat', 0.12, 0.45, 2),
    ('toggle', 0.38, 0.2, 0),
    ('wash', 0.7, 0.15, 4),
    ('count3', 0.38, 0.45, 0),
    ('burst', 0.72, 0.4, 0),
    ('light', 0.55, 0.7, 1),
    ('pop', 0.8, 0.8, 4),
  ], [(0, 1), (1, 2), (0, 3), (3, 4), (0, 5), (3, 6)]),
  _Preset('Domino', 'Tap the button and watch it run down the line', [
    ('button', 0.12, 0.2, 0),
    ('delay', 0.34, 0.2, 1),
    ('light', 0.56, 0.2, 1),
    ('delay', 0.56, 0.45, 1),
    ('ball', 0.34, 0.6, 0),
    ('delay', 0.34, 0.8, 1),
    ('burst', 0.7, 0.8, 5),
  ], [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6)]),
];

// ── The screen ──────────────────────────────────────────────────────────────

class NgmyReactionLabScreen extends StatefulWidget {
  const NgmyReactionLabScreen({super.key});

  @override
  State<NgmyReactionLabScreen> createState() => _NgmyReactionLabScreenState();
}

class _NgmyReactionLabScreenState extends State<NgmyReactionLabScreen> with SingleTickerProviderStateMixin {
  static const _prefsKey = 'ngmy_core_reaction_lab_v1';
  final _Lab _lab = _Lab();
  late final Ticker _ticker;
  Duration _last = Duration.zero;
  bool _show = false;
  bool _loaded = false;
  String? _drag;
  Offset _dragOffset = Offset.zero;
  String? _connectFrom;
  Offset _connectTo = Offset.zero;
  Timer? _saveTimer;
  bool _movedDuringDrag = false;
  bool _coach = false;
  bool _sound = true;
  String _descSig = '';
  List<String> _descLines = const [];

  static const _coachKey = 'ngmy_core_lab_coach_v1';

  Future<void> _loadCoach() async {
    try {
      final seen = (await SharedPreferences.getInstance()).getBool(_coachKey) ?? false;
      if (!seen && mounted) setState(() => _coach = true);
    } catch (_) {}
  }

  Future<void> _closeCoach() async {
    setState(() => _coach = false);
    try {
      (await SharedPreferences.getInstance()).setBool(_coachKey, true);
    } catch (_) {}
  }

  /// The board in plain words: "Clock (every 0.8s) → Delay → Ripple".
  List<String> _describe() {
    final sig = '${_lab.nodes.length}|${_lab.edges.length}|${_lab.nodes.values.fold<int>(0, (a, n) => a + n.param * 7 + n.kind.hashCode % 97)}|${_lab.edges.fold<int>(0, (a, e) => a + e.from.hashCode % 31 + e.to.hashCode % 17)}';
    if (sig == _descSig) return _descLines;
    String name(_N n) {
      final p = _kParts[n.kind]!;
      return p.opts.isNotEmpty ? '${p.label} (${p.opts[n.param % p.opts.length]})' : p.label;
    }

    final out = <String>[];
    void walk(_N n, List<String> path, int depth) {
      final next = _lab.edges.where((e) => e.from == n.id).map((e) => _lab.nodes[e.to]).whereType<_N>().toList();
      if (next.isEmpty || depth > 4) {
        if (path.length > 1) out.add(path.join('  →  '));
        return;
      }
      for (final m in next) {
        if (out.length >= 6) return;
        walk(m, [...path, name(m)], depth + 1);
      }
    }

    for (final n in _lab.nodes.values.where((n) => _kParts[n.kind]!.role == _Role.source)) {
      final hasWire = _lab.edges.any((e) => e.from == n.id);
      if (!hasWire) {
        out.add('${name(n)}  →  (not connected: drag from its right dot)');
      } else {
        walk(n, [name(n)], 0);
      }
    }
    _descSig = sig;
    return _descLines = out.take(5).toList();
  }

  @override
  void initState() {
    super.initState();
    unawaited(_loadCoach());
    _lab.soundOn = _sound;
    _ticker = createTicker((elapsed) {
      final dt = ((elapsed - _last).inMicroseconds / 1e6).clamp(0.0, 0.05);
      _last = elapsed;
      _lab.step(dt);
      _lab.tick(elapsed.inMilliseconds);
    })..start();
  }

  @override
  void dispose() {
    _saveTimer?.cancel();
    _ticker.dispose();
    _lab.dispose();
    super.dispose();
  }

  Future<void> _initBoard(Size size) async {
    _lab.size = size;
    _loaded = true;
    var restored = false;
    try {
      final raw = (await SharedPreferences.getInstance()).getString(_prefsKey);
      if (raw != null && raw.isNotEmpty) restored = _lab.fromJson(raw);
    } catch (_) {}
    if (!restored || _lab.nodes.isEmpty) _loadPreset(_kPresets.first);
    if (mounted) setState(() {});
  }

  void _loadPreset(_Preset p) {
    _lab.load(p.spec, p.wires);
    _changed();
  }

  void _changed() {
    _saveTimer?.cancel();
    _saveTimer = Timer(const Duration(milliseconds: 600), () async {
      try {
        (await SharedPreferences.getInstance()).setString(_prefsKey, _lab.toJson());
      } catch (_) {}
    });
  }

  // ── Hit testing ────────────────────────────────────────────────────────────

  static const double _half = 32;

  String? _nodeAt(Offset p) {
    for (final n in _lab.nodes.values.toList().reversed) {
      if ((p - n.pos).dx.abs() <= _half + 4 && (p - n.pos).dy.abs() <= _half + 4) return n.id;
    }
    return null;
  }

  Offset _outPort(_N n) => n.pos + const Offset(_half + 4, 0);
  Offset _inPort(_N n) => n.pos - const Offset(_half + 4, 0);

  String? _outPortAt(Offset p) {
    for (final n in _lab.nodes.values.toList().reversed) {
      if ((p - _outPort(n)).distance <= 24) return n.id;
    }
    return null;
  }

  String? _inPortAt(Offset p) {
    String? best;
    var bestD = 46.0;
    for (final n in _lab.nodes.values) {
      if (_kParts[n.kind]!.role == _Role.source) continue;
      final d = math.min((p - _inPort(n)).distance, (p - n.pos).distance);
      if (d < bestD) {
        bestD = d;
        best = n.id;
      }
    }
    return best;
  }

  int? _edgeAt(Offset p) {
    for (var i = 0; i < _lab.edges.length; i++) {
      final e = _lab.edges[i];
      final a = _lab.nodes[e.from], b = _lab.nodes[e.to];
      if (a == null || b == null) continue;
      for (var k = 0; k <= 24; k++) {
        if ((_wirePoint(_outPort(a), _inPort(b), k / 24) - p).distance < 15) return i;
      }
    }
    return null;
  }

  void _tapAt(Offset p) {
    final id = _nodeAt(p);
    if (id != null) {
      final n = _lab.nodes[id]!;
      HapticFeedback.selectionClick();
      if (n.kind == 'button') {
        _lab.fire(id);
        return;
      }
      if (_show) return;
      final part = _kParts[n.kind]!;
      final span = part.opts.isNotEmpty
          ? part.opts.length
          : (part.role == _Role.out ? (n.kind == 'pop' ? _kWords.length : _kFx.length) : 1);
      n.param = (n.param + 1) % span;
      _lab.poke();
      _changed();
      return;
    }
    if (_show) return;
    final ei = _edgeAt(p);
    if (ei != null) {
      _lab.edges.removeAt(ei);
      _lab.poke();
      _changed();
    }
  }

  void _panStart(Offset p) {
    if (_show) return;
    _movedDuringDrag = false;
    final out = _outPortAt(p);
    if (out != null) {
      _connectFrom = out;
      _connectTo = p;
      return;
    }
    final id = _nodeAt(p);
    if (id != null) {
      _drag = id;
      _dragOffset = _lab.nodes[id]!.pos - p;
    }
  }

  void _panUpdate(Offset p) {
    if (_connectFrom != null) {
      _connectTo = p;
      _lab.poke();
    } else if (_drag != null) {
      final n = _lab.nodes[_drag!];
      if (n == null) return;
      final s = _lab.size;
      n.pos = Offset((p.dx + _dragOffset.dx).clamp(46, s.width - 46), (p.dy + _dragOffset.dy).clamp(46, s.height - 60));
      _movedDuringDrag = true;
      _lab.poke();
    }
  }

  void _panEnd() {
    if (_connectFrom != null) {
      final to = _inPortAt(_connectTo);
      if (to != null && _lab.connect(_connectFrom!, to)) {
        HapticFeedback.lightImpact();
        _changed();
      }
      _connectFrom = null;
      _lab.poke();
    } else if (_drag != null) {
      if (_movedDuringDrag) _changed();
      _drag = null;
    }
  }

  Future<void> _longPress(Offset p) async {
    if (_show) return;
    final id = _nodeAt(p);
    if (id == null) return;
    final n = _lab.nodes[id]!;
    HapticFeedback.mediumImpact();
    final ok = await showModalBottomSheet<bool>(
      context: context,
      backgroundColor: const Color(0xFF1B1B1F),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          const SizedBox(height: 8),
          ListTile(
            leading: Icon(_kParts[n.kind]!.icon, color: _kParts[n.kind]!.color),
            title: Text(_kParts[n.kind]!.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
            subtitle: const Text('Tap it to change its setting. Drag from the right dot to connect.', style: TextStyle(color: Colors.white54)),
          ),
          ListTile(
            leading: const Icon(Icons.delete_outline_rounded, color: Color(0xFFF87171)),
            title: const Text('Remove this part', style: TextStyle(color: Color(0xFFF87171), fontWeight: FontWeight.w800)),
            onTap: () => Navigator.pop(ctx, true),
          ),
        ]),
      ),
    );
    if (ok == true) {
      _lab.remove(id);
      _changed();
    }
  }

  void _addPart(String kind) {
    if (!_loaded) return;
    final s = _lab.size;
    final rnd = _lab.rnd;
    final pos = Offset(s.width * (0.25 + rnd.nextDouble() * 0.5), s.height * (0.2 + rnd.nextDouble() * 0.55));
    _lab.add(kind, pos);
    HapticFeedback.selectionClick();
    _changed();
  }

  Future<void> _presets() async {
    final p = await showModalBottomSheet<_Preset>(
      context: context,
      backgroundColor: const Color(0xFF1B1B1F),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.7),
          child: ListView(shrinkWrap: true, padding: const EdgeInsets.fromLTRB(8, 14, 8, 12), children: [
            const Padding(
              padding: EdgeInsets.fromLTRB(16, 0, 16, 8),
              child: Text('Start from a ready-made board', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
            ),
            for (final p in _kPresets)
              ListTile(
                leading: const Icon(Icons.auto_awesome_rounded, color: Color(0xFFFBBF24)),
                title: Text(p.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                subtitle: Text(p.blurb, style: const TextStyle(color: Colors.white54)),
                onTap: () => Navigator.pop(ctx, p),
              ),
          ]),
        ),
      ),
    );
    if (p != null) _loadPreset(p);
  }

  Future<void> _clear() async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Clear the board?', style: TextStyle(color: Colors.white)),
        content: const Text('All the parts and wires will be removed.', style: TextStyle(color: Colors.white70)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Clear')),
        ],
      ),
    );
    if (ok == true) {
      _lab.clear();
      _changed();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _kBg,
      body: SafeArea(
        child: Column(children: [
          AnimatedSize(
            duration: const Duration(milliseconds: 220),
            child: _show
                ? Align(
                    alignment: Alignment.centerLeft,
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(8, 4, 8, 0),
                      child: TextButton.icon(
                        onPressed: () => setState(() => _show = false),
                        icon: const Icon(Icons.edit_rounded, size: 18),
                        label: const Text('Back to building'),
                      ),
                    ),
                  )
                : _topBar(),
          ),
          Expanded(
            child: LayoutBuilder(builder: (context, box) {
              final size = Size(box.maxWidth, box.maxHeight);
              if (!_loaded) {
                _lab.size = size;
                scheduleMicrotask(() => _initBoard(size));
              } else if (_lab.size != size) {
                _lab.size = size;
              }
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapUp: (d) => _tapAt(d.localPosition),
                onPanStart: (d) => _panStart(d.localPosition),
                onPanUpdate: (d) => _panUpdate(d.localPosition),
                onPanEnd: (_) => _panEnd(),
                onPanCancel: _panEnd,
                onLongPressStart: (d) => _longPress(d.localPosition),
                child: ClipRect(
                  child: Stack(fit: StackFit.expand, children: [
                    CustomPaint(
                      size: size,
                      painter: _LabPainter(_lab, showMode: _show, connectFrom: () => _connectFrom, connectTo: () => _connectTo),
                      child: _lab.nodes.isEmpty && _loaded
                          ? const Center(
                              child: Padding(
                                padding: EdgeInsets.all(32),
                                child: Text(
                                  'Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(color: Colors.white38, height: 1.5),
                                ),
                              ),
                            )
                          : null,
                    ),
                    // What this board does, in plain words.
                    if (!_show && _loaded)
                      Positioned(
                        left: 10,
                        right: 10,
                        top: 6,
                        child: IgnorePointer(
                          child: AnimatedBuilder(
                            animation: _lab,
                            builder: (_, __) {
                              final lines = _describe();
                              if (lines.isEmpty) return const SizedBox.shrink();
                              return Container(
                                padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
                                decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
                                child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                                  const Text('WHAT HAPPENS', style: TextStyle(color: Colors.white38, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.3)),
                                  const SizedBox(height: 3),
                                  for (final l in lines) Text(l, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white70, fontSize: 11.5, height: 1.3)),
                                ]),
                              );
                            },
                          ),
                        ),
                      ),
                    if (_coach) _coachCard(),
                  ]),
                ),
              );
            }),
          ),
          if (!_show) _shelf(),
        ]),
      ),
    );
  }

  /// A short guide, shown the first time and from the ? button.
  Widget _coachCard() {
    Widget step(IconData icon, Color color, String title, String body) => Padding(
          padding: const EdgeInsets.only(bottom: 12),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(width: 38, height: 38, decoration: BoxDecoration(color: color.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12), border: Border.all(color: color.withValues(alpha: 0.6))), child: Icon(icon, color: color, size: 21)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13.5)),
                const SizedBox(height: 2),
                Text(body, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.4)),
              ]),
            ),
          ]),
        );
    return Positioned.fill(
      child: ColoredBox(
        color: Colors.black.withValues(alpha: 0.7),
        child: Center(
          child: Container(
            margin: const EdgeInsets.all(18),
            padding: const EdgeInsets.fromLTRB(18, 18, 18, 10),
            constraints: const BoxConstraints(maxWidth: 380),
            decoration: BoxDecoration(color: const Color(0xFF1B1B1F), borderRadius: BorderRadius.circular(26), border: Border.all(color: const Color(0xFF34D399).withValues(alpha: 0.5))),
            child: SingleChildScrollView(
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('How the Lab works', style: TextStyle(color: Color(0xFF34D399), fontWeight: FontWeight.w900, fontSize: 17)),
                const SizedBox(height: 4),
                const Text('You build a machine. A little light runs along the wires, and every part it touches does something.', style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.4)),
                const SizedBox(height: 14),
                step(Icons.timer_rounded, const Color(0xFF34D399), '1. Something starts it', 'Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random.'),
                step(Icons.swap_vert_rounded, const Color(0xFF60A5FA), '2. Something can change it', 'Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through.'),
                step(Icons.celebration_rounded, const Color(0xFFF472B6), '3. Something shows it', 'Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear.'),
                step(Icons.cable_rounded, const Color(0xFFFACC15), '4. You connect them', 'Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it.'),
                const Text('The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.', style: TextStyle(color: Colors.white54, fontSize: 12, height: 1.4)),
                Align(alignment: Alignment.centerRight, child: TextButton(onPressed: _closeCoach, child: const Text("Let's go"))),
              ]),
            ),
          ),
        ),
      ),
    );
  }

  Widget _topBar() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 4, 8, 2),
      child: Row(children: [
        IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
        const Expanded(child: Text('REACTION LAB', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 14))),
        _barButton(Icons.help_outline_rounded, 'How it works', () => setState(() => _coach = true), iconOnly: true),
        _barButton(_sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, 'Sound', () => setState(() {
              _sound = !_sound;
              _lab.soundOn = _sound;
            }), iconOnly: true),
        _barButton(Icons.auto_awesome_rounded, 'Ideas', _presets, iconOnly: true),
        _barButton(Icons.delete_sweep_rounded, 'Clear', _clear, iconOnly: true),
        _barButton(Icons.play_arrow_rounded, 'Show', () => setState(() => _show = true), strong: true, iconOnly: true),
      ]),
    );
  }

  Widget _barButton(IconData icon, String label, VoidCallback onTap, {bool strong = false, bool iconOnly = false}) {
    return Padding(
      padding: const EdgeInsets.only(left: 6),
      child: Material(
        color: strong ? const Color(0xFF34D399) : Colors.white.withValues(alpha: 0.08),
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: onTap,
          child: Tooltip(
            message: label,
            child: Padding(
            padding: EdgeInsets.symmetric(horizontal: iconOnly ? 8 : 10, vertical: 8),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(icon, size: iconOnly ? 20 : 17, color: strong ? Colors.black : Colors.white),
              if (!iconOnly) ...[
                const SizedBox(width: 4),
                Text(label, style: TextStyle(color: strong ? Colors.black : Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
              ],
            ]),
            ),
          ),
        ),
      ),
    );
  }

  /// The shelf of parts: sources, logic and reactions.
  Widget _shelf() {
    Widget group(String title, _Role role) {
      final kinds = [for (final e in _kParts.entries) if (e.value.role == role) e.key];
      return Padding(
        padding: const EdgeInsets.only(right: 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Padding(
            padding: const EdgeInsets.only(left: 4, bottom: 4),
            child: Text(title, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.4)),
          ),
          Row(children: [for (final k in kinds) _shelfTile(k)]),
        ]),
      );
    }

    return Container(
      padding: const EdgeInsets.fromLTRB(10, 8, 0, 10),
      decoration: BoxDecoration(color: const Color(0xFF17171A), border: Border(top: BorderSide(color: Colors.white.withValues(alpha: 0.08)))),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          group('START', _Role.source),
          group('CHANGE', _Role.logic),
          group('REACT', _Role.out),
        ]),
      ),
    );
  }

  Widget _shelfTile(String kind) {
    final p = _kParts[kind]!;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: GestureDetector(
        onTap: () => _addPart(kind),
        child: Container(
          width: 62,
          padding: const EdgeInsets.symmetric(vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [p.color.withValues(alpha: 0.32), p.color.withValues(alpha: 0.1)]),
            border: Border.all(color: p.color.withValues(alpha: 0.5)),
          ),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            Icon(p.icon, color: p.color, size: 22),
            const SizedBox(height: 3),
            Text(p.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w800)),
          ]),
        ),
      ),
    );
  }
}

// ── Painting the board ──────────────────────────────────────────────────────

Offset _wirePoint(Offset a, Offset b, double t) {
  final dx = math.max(40.0, (b.dx - a.dx).abs() * 0.5);
  final c1 = a + Offset(dx, 0);
  final c2 = b - Offset(dx, 0);
  final u = 1 - t;
  return a * (u * u * u) + c1 * (3 * u * u * t) + c2 * (3 * u * t * t) + b * (t * t * t);
}

class _LabPainter extends CustomPainter {
  _LabPainter(this.lab, {required this.showMode, required this.connectFrom, required this.connectTo}) : super(repaint: lab);

  final _Lab lab;
  final bool showMode;
  final String? Function() connectFrom;
  final Offset Function() connectTo;

  static final Map<String, TextPainter> _tp = {};

  static TextPainter _text(String text, double size, Color color, {FontWeight w = FontWeight.w800, String? family, String? package}) {
    final key = '$text|$size|${color.toARGB32()}|$family';
    return _tp.putIfAbsent(
      key,
      () => TextPainter(
        text: TextSpan(text: text, style: TextStyle(fontSize: size, color: color, fontWeight: w, fontFamily: family, package: package)),
        textDirection: TextDirection.ltr,
      )..layout(),
    );
  }

  static void _icon(Canvas canvas, IconData icon, Offset c, double size, Color color) {
    final tp = _text(String.fromCharCode(icon.codePoint), size, color, family: icon.fontFamily, package: icon.fontPackage);
    tp.paint(canvas, c - Offset(tp.width / 2, tp.height / 2));
  }

  @override
  void paint(Canvas canvas, Size size) {
    final now = lab.now;
    canvas.save();
    if (now < lab.shakeUntil) {
      final k = (lab.shakeUntil - now) / 380;
      canvas.translate(math.sin(now * 0.09) * 9 * k, math.cos(now * 0.13) * 7 * k);
    }
    // A faint dot grid so the board feels like a workbench.
    final dot = Paint()..color = Colors.white.withValues(alpha: 0.05);
    for (double y = 20; y < size.height; y += 28) {
      for (double x = 14; x < size.width; x += 28) {
        canvas.drawCircle(Offset(x, y), 1, dot);
      }
    }
    if (now < lab.washUntil) {
      final k = (lab.washUntil - now) / 800;
      canvas.drawRect(Offset.zero & size, Paint()..color = lab.washColor.withValues(alpha: 0.4 * k));
    }

    // Wires.
    for (final e in lab.edges) {
      final a = lab.nodes[e.from], b = lab.nodes[e.to];
      if (a == null || b == null) continue;
      final pa = a.pos + const Offset(36, 0), pb = b.pos - const Offset(36, 0);
      final path = Path()..moveTo(pa.dx, pa.dy);
      final dx = math.max(40.0, (pb.dx - pa.dx).abs() * 0.5);
      path.cubicTo(pa.dx + dx, pa.dy, pb.dx - dx, pb.dy, pb.dx, pb.dy);
      final ca = _kParts[a.kind]!.color, cb = _kParts[b.kind]!.color;
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 3
          ..strokeCap = StrokeCap.round
          ..shader = LinearGradient(colors: [ca.withValues(alpha: 0.55), cb.withValues(alpha: 0.55)]).createShader(Rect.fromPoints(pa, pb).inflate(2)),
      );
    }
    // Signals running along the wires.
    for (final s in lab.sigs) {
      final a = lab.nodes[s.from], b = lab.nodes[s.to];
      if (a == null || b == null) continue;
      final t = ((now - s.start) / (s.end - s.start)).clamp(0.0, 1.0);
      final p = _wirePoint(a.pos + const Offset(36, 0), b.pos - const Offset(36, 0), t);
      canvas.drawCircle(p, 8, Paint()..color = Colors.white.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
      canvas.drawCircle(p, 4, Paint()..color = Colors.white);
    }
    // The wire being dragged.
    final cf = connectFrom();
    if (cf != null && lab.nodes[cf] != null) {
      final a = lab.nodes[cf]!;
      final pa = a.pos + const Offset(36, 0);
      final pb = connectTo();
      final dx = math.max(40.0, (pb.dx - pa.dx).abs() * 0.5);
      final path = Path()
        ..moveTo(pa.dx, pa.dy)
        ..cubicTo(pa.dx + dx, pa.dy, pb.dx - dx, pb.dy, pb.dx, pb.dy);
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white.withValues(alpha: 0.7));
      canvas.drawCircle(pb, 7, Paint()..color = Colors.white);
    }

    // Effects.
    for (final r in lab.rings) {
      final k = ((now - r.born) / 700).clamp(0.0, 1.0);
      if (now < r.born) continue;
      canvas.drawCircle(r.c, 14 + r.max * Curves.easeOut.transform(k), Paint()..style = PaintingStyle.stroke..strokeWidth = 3.5 * (1 - k) + 0.5..color = r.color.withValues(alpha: (1 - k) * 0.9));
    }
    for (final c in lab.comets) {
      final k = ((now - c.born) / 600).clamp(0.0, 1.0);
      final head = Offset.lerp(c.from, c.to, Curves.easeOut.transform(k))!;
      final tail = Offset.lerp(c.from, c.to, Curves.easeOut.transform((k - 0.35).clamp(0.0, 1.0)))!;
      canvas.drawLine(tail, head, Paint()..strokeWidth = 5..strokeCap = StrokeCap.round..shader = LinearGradient(colors: [c.color.withValues(alpha: 0), c.color]).createShader(Rect.fromPoints(tail, head).inflate(4)));
      canvas.drawCircle(head, 6, Paint()..color = Colors.white);
      canvas.drawCircle(head, 12, Paint()..color = c.color.withValues(alpha: 0.5 * (1 - k))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    }
    for (final s in lab.sparks) {
      final k = ((now - s.born) / s.life).clamp(0.0, 1.0);
      canvas.drawCircle(s.p, s.size * (1 - 0.5 * k), Paint()..color = s.color.withValues(alpha: 1 - k));
    }
    for (final b in lab.balls) {
      canvas.drawCircle(b.p, 11, Paint()..color = b.color.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      canvas.drawCircle(b.p, 8, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, b.color]).createShader(Rect.fromCircle(center: b.p, radius: 8)));
    }
    for (final p in lab.pops) {
      final k = ((now - p.born) / 1000).clamp(0.0, 1.0);
      final tp = _text(p.text, 26 + 8 * (1 - k), p.color.withValues(alpha: (1 - k)), w: FontWeight.w900);
      tp.paint(canvas, p.p - Offset(tp.width / 2, 40 + 60 * k + tp.height / 2));
    }

    // Parts.
    for (final n in lab.nodes.values) {
      _paintNode(canvas, n, now);
    }
    canvas.restore();
  }

  void _paintNode(Canvas canvas, _N n, int now) {
    final part = _kParts[n.kind]!;
    final fired = lab.lastFire[n.id];
    final glow = fired == null ? 0.0 : (1 - (now - fired) / 520).clamp(0.0, 1.0);
    final rect = Rect.fromCenter(center: n.pos, width: 64, height: 64);
    final rr = RRect.fromRectAndRadius(rect, const Radius.circular(18));
    canvas.drawRRect(rr.shift(const Offset(0, 6)), Paint()..color = Colors.black.withValues(alpha: 0.55)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
    if (glow > 0) {
      canvas.drawRRect(rr.inflate(6), Paint()..color = part.color.withValues(alpha: 0.6 * glow)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
    }
    // The thick lower edge.
    canvas.drawRRect(rr.shift(const Offset(0, 4)), Paint()..color = Color.lerp(part.color, Colors.black, 0.65)!);
    canvas.drawRRect(
      rr,
      Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(part.color, Colors.white, 0.18 + 0.4 * glow)!, Color.lerp(part.color, Colors.black, 0.35)!]).createShader(rect),
    );
    canvas.drawRRect(rr, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = Colors.white.withValues(alpha: 0.35));
    _icon(canvas, part.icon, n.pos, 30, Colors.white);

    // Label and setting.
    final label = _text(part.label, 11, Colors.white);
    label.paint(canvas, n.pos + Offset(-label.width / 2, 40));
    String? setting;
    if (part.opts.isNotEmpty) {
      setting = part.opts[n.param % part.opts.length];
    } else if (n.kind == 'pop') {
      setting = _kWords[n.param % _kWords.length];
    }
    if (part.role == _Role.out) {
      canvas.drawCircle(n.pos + Offset(0, 62), 5, Paint()..color = _kFx[n.param % _kFx.length]);
    } else if (setting != null) {
      final st = _text(setting, 9.5, Colors.white54, w: FontWeight.w700);
      st.paint(canvas, n.pos + Offset(-st.width / 2, 54));
    }
    if (n.kind == 'pop') {
      final st = _text(setting!, 9.5, Colors.white54, w: FontWeight.w700);
      st.paint(canvas, n.pos + Offset(-st.width / 2, 54));
    }

    // Ports: in on the left, out on the right (hidden in Show mode).
    if (showMode) return;
    if (part.role != _Role.source) _port(canvas, n.pos - const Offset(36, 0), part.color);
    _port(canvas, n.pos + const Offset(36, 0), part.color);
  }

  void _port(Canvas canvas, Offset c, Color color) {
    canvas.drawCircle(c, 9, Paint()..color = const Color(0xFF121212));
    canvas.drawCircle(c, 9, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.2..color = color);
    canvas.drawCircle(c, 3.5, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _LabPainter old) => true;
}

/// Runs a small board with no screen and reports how many times each part reacted. For tests.
@visibleForTesting
Map<String, int> ngmyReactionLabSimulate(List<(String, int)> parts, List<(int, int)> wires, {int ms = 6000, int seed = 1}) {
  final lab = _Lab()..size = const Size(400, 700);
  final ids = [for (var i = 0; i < parts.length; i++) lab.add(parts[i].$1, Offset(60.0 + i * 20, 100.0 + i * 20), parts[i].$2).id];
  for (final w in wires) {
    lab.connect(ids[w.$1], ids[w.$2]);
  }
  for (var t = 0; t <= ms; t += 16) {
    lab.step(0.016);
    lab.tick(t);
  }
  return {for (var i = 0; i < ids.length; i++) '${i}_${parts[i].$1}': lab.fires[ids[i]] ?? 0};
}
