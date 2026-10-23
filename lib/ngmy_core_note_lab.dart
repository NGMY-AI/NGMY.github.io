import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_studio_kit.dart';

/// Note Lab: connect musical parts and hear a tune build itself. A signal runs along the wires.
/// Instruments play a note when it arrives, Delay holds it back, Up and Down change the pitch of
/// everything after them, and Chance, Every 2nd and Shuffle make it less predictable.
enum _NRole { source, mod, note, drum }

class _NPart {
  const _NPart(this.label, this.icon, this.role, this.color, {this.opts = const []});
  final String label;
  final IconData icon;
  final _NRole role;
  final Color color;
  final List<String> opts;
}

const Map<String, _NPart> _kNParts = {
  'beat': _NPart('Clock', Icons.timer_rounded, _NRole.source, Color(0xFF34D399), opts: ['every 1s', 'every 0.7s', 'every 0.5s', 'every 0.4s', 'every 4s']),
  'button': _NPart('Button', Icons.touch_app_rounded, _NRole.source, Color(0xFFFBBF24)),
  'dice': _NPart('Dice', Icons.casino_rounded, _NRole.source, Color(0xFFF472B6)),
  'delay': _NPart('Delay', Icons.hourglass_bottom_rounded, _NRole.mod, Color(0xFF60A5FA), opts: ['0.12s', '0.25s', '0.5s', '1s']),
  'echo': _NPart('Echo', Icons.repeat_rounded, _NRole.mod, Color(0xFFA78BFA), opts: ['fast', 'mid', 'slow']),
  'up': _NPart('Higher', Icons.north_rounded, _NRole.mod, Color(0xFF4ADE80), opts: ['+2', '+5', '+7', '+12']),
  'down': _NPart('Lower', Icons.south_rounded, _NRole.mod, Color(0xFFF87171), opts: ['-2', '-5', '-7', '-12']),
  'chance': _NPart('Chance', Icons.percent_rounded, _NRole.mod, Color(0xFFFB923C), opts: ['50%', '25%', '75%']),
  'every2': _NPart('Every 2nd', Icons.swap_vert_rounded, _NRole.mod, Color(0xFF2DD4BF)),
  'every3': _NPart('Every 3rd', Icons.filter_3_rounded, _NRole.mod, Color(0xFF38BDF8)),
  'shuffle': _NPart('Shuffle', Icons.shuffle_rounded, _NRole.mod, Color(0xFFC084FC)),
  'piano': _NPart('Piano', Icons.piano_rounded, _NRole.note, Color(0xFFFACC15)),
  'bell': _NPart('Bell', Icons.notifications_rounded, _NRole.note, Color(0xFF22D3EE)),
  'pluck': _NPart('Pluck', Icons.queue_music_rounded, _NRole.note, Color(0xFFF472B6)),
  'synth': _NPart('Synth', Icons.waves_rounded, _NRole.note, Color(0xFFA78BFA)),
  'organ': _NPart('Organ', Icons.church_rounded, _NRole.note, Color(0xFFFB923C)),
  'flute': _NPart('Flute', Icons.air_rounded, _NRole.note, Color(0xFF4ADE80)),
  'bass': _NPart('Bass', Icons.speaker_rounded, _NRole.note, Color(0xFFEF4444)),
  'kick': _NPart('Kick', Icons.circle_rounded, _NRole.drum, Color(0xFFF87171)),
  'snare': _NPart('Snare', Icons.adjust_rounded, _NRole.drum, Color(0xFFFDE047)),
  'hat': _NPart('Hat', Icons.change_history_rounded, _NRole.drum, Color(0xFF38BDF8)),
  'clap': _NPart('Clap', Icons.back_hand_rounded, _NRole.drum, Color(0xFFF472B6)),
};

const List<int> _kPitch = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21];
const List<int> _kBassPitch = [-24, -22, -20, -17, -15];
const List<int> _kBeatMs = [1000, 667, 500, 375, 4000];
const List<int> _kDelayMs = [125, 250, 500, 1000];
const List<int> _kEchoMs = [120, 220, 380];
const List<int> _kUp = [2, 5, 7, 12];
const List<int> _kChance = [50, 25, 75];

bool _isInstrument(String k) => const {'piano', 'bell', 'pluck', 'synth', 'organ', 'flute', 'bass'}.contains(k);

String _partWord(String kind, int param) {
  final p = _kNParts[kind]!;
  if (_isInstrument(kind)) {
    final semis = kind == 'bass' ? _kBassPitch[param % _kBassPitch.length] : _kPitch[param % _kPitch.length];
    return '${p.label} ${NgmyTone.nameOf(semis)}';
  }
  if (p.opts.isNotEmpty) return '${p.label} (${p.opts[param % p.opts.length]})';
  return p.label;
}

class _NN {
  _NN(this.id, this.kind, this.pos, [this.param = 0]);
  final String id;
  final String kind;
  Offset pos;
  int param;
}

class _NE {
  const _NE(this.from, this.to);
  final String from;
  final String to;
}

class _NEv {
  _NEv(this.at, this.node, this.shift, {this.passOnly = false});
  final int at;
  final String node;
  final int shift;
  final bool passOnly;
}

class _NSig {
  _NSig(this.from, this.to, this.start, this.end);
  final String from;
  final String to;
  final int start;
  final int end;
}

class _NRing {
  _NRing(this.c, this.color, this.born);
  final Offset c;
  final Color color;
  final int born;
}

class _NPop {
  _NPop(this.p, this.text, this.color, this.born);
  final Offset p;
  final String text;
  final Color color;
  final int born;
}

class _NoteBoard extends ChangeNotifier {
  final Map<String, _NN> nodes = {};
  final List<_NE> edges = [];
  final List<_NEv> _events = [];
  final List<_NSig> sigs = [];
  final List<_NRing> rings = [];
  final List<_NPop> pops = [];
  final Map<String, int> lastFire = {};
  final Map<String, int> fires = {};
  final Map<String, int> _next = {};
  final Map<String, int> _count = {};
  final math.Random rnd = math.Random();
  int now = 0;
  int _seq = 0;
  bool soundOn = true;
  Size size = Size.zero;
  static const int wireMs = 220;

  void poke() => notifyListeners();

  String newId() => 'm${_seq++}';

  void clear() {
    nodes.clear();
    edges.clear();
    _events.clear();
    sigs.clear();
    rings.clear();
    pops.clear();
    lastFire.clear();
    _next.clear();
    _count.clear();
    notifyListeners();
  }

  _NN add(String kind, Offset pos, [int param = 0]) {
    final n = _NN(newId(), kind, pos, param);
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
    final a = nodes[from], b = nodes[to];
    if (a == null || b == null) return false;
    if (_kNParts[b.kind]!.role == _NRole.source) return false;
    if (edges.any((e) => e.from == from && e.to == to)) return false;
    edges.add(_NE(from, to));
    notifyListeners();
    return true;
  }

  int _interval(_NN n) {
    if (n.kind == 'beat') return _kBeatMs[n.param % _kBeatMs.length];
    return 300 + rnd.nextInt(1800);
  }

  void _send(_NE e, int at, int shift) {
    if (_events.length > 240) return;
    sigs.add(_NSig(e.from, e.to, at, at + wireMs));
    _events.add(_NEv(at + wireMs, e.to, shift));
  }

  void _sound(String kind, int param, int shift) {
    if (!soundOn) return;
    switch (kind) {
      case 'kick':
        NgmyTone.drum('kick');
      case 'snare':
        NgmyTone.drum('snare');
      case 'hat':
        NgmyTone.drum('hat');
      case 'clap':
        NgmyTone.drum('clap');
      case 'bass':
        NgmyTone.playNote('synth', (_kBassPitch[param % _kBassPitch.length] + shift).clamp(-36, 48), ms: 500, volume: 0.8);
      default:
        NgmyTone.playNote(kind, (_kPitch[param % _kPitch.length] + shift).clamp(-24, 48), ms: kind == 'organ' || kind == 'flute' || kind == 'synth' ? 650 : 1100, volume: 0.6);
    }
  }

  /// A signal reaches [id] carrying [shift] (how many semitones higher or lower the tune is now).
  void fire(String id, int shift) {
    final n = nodes[id];
    if (n == null) return;
    lastFire[id] = now;
    fires[id] = (fires[id] ?? 0) + 1;
    final part = _kNParts[n.kind]!;
    var pass = true;
    var outShift = shift;
    if (part.role == _NRole.note || part.role == _NRole.drum) {
      _sound(n.kind, n.param, shift);
      rings.add(_NRing(n.pos, part.color, now));
      if (part.role == _NRole.note) {
        final semis = (n.kind == 'bass' ? _kBassPitch[n.param % _kBassPitch.length] : _kPitch[n.param % _kPitch.length]) + shift;
        pops.add(_NPop(n.pos, NgmyTone.nameOf(semis), part.color, now));
      }
    }
    switch (n.kind) {
      case 'delay':
        pass = false;
        for (final e in edges.where((e) => e.from == id)) {
          _send(e, now + _kDelayMs[n.param % _kDelayMs.length], shift);
        }
      case 'echo':
        final gap = _kEchoMs[n.param % _kEchoMs.length];
        for (var k = 1; k <= 3; k++) {
          _events.add(_NEv(now + gap * k, id, shift, passOnly: true));
        }
      case 'up':
        outShift = shift + _kUp[n.param % _kUp.length];
      case 'down':
        outShift = shift - _kUp[n.param % _kUp.length];
      case 'every2':
        final k = (_count[id] ?? 0) + 1;
        _count[id] = k;
        pass = k.isOdd;
      case 'every3':
        final k = (_count[id] ?? 0) + 1;
        _count[id] = k;
        pass = k % 3 == 0;
      case 'chance':
        pass = rnd.nextInt(100) < _kChance[n.param % _kChance.length];
      case 'shuffle':
        pass = false;
        final outs = edges.where((e) => e.from == id).toList();
        if (outs.isNotEmpty) _send(outs[rnd.nextInt(outs.length)], now, shift);
    }
    if (pass) {
      for (final e in edges.where((e) => e.from == id)) {
        _send(e, now, outShift);
      }
    }
  }

  void tick(int ms) {
    now = ms;
    for (final n in nodes.values.toList()) {
      if (n.kind != 'beat' && n.kind != 'dice') continue;
      final due = _next[n.id];
      if (due == null) {
        _next[n.id] = now + 250;
      } else if (now >= due) {
        fire(n.id, 0);
        _next[n.id] = now + _interval(n);
      }
    }
    final due = _events.where((e) => e.at <= now).toList();
    if (due.isNotEmpty) {
      _events.removeWhere((e) => e.at <= now);
      for (final e in due) {
        if (e.passOnly) {
          for (final w in edges.where((w) => w.from == e.node)) {
            _send(w, now, e.shift);
          }
        } else {
          fire(e.node, e.shift);
        }
      }
    }
    sigs.removeWhere((s) => s.end < now);
    rings.removeWhere((r) => now - r.born > 800);
    pops.removeWhere((p) => now - p.born > 900);
    notifyListeners();
  }

  void loadPreset(_NPreset p) {
    clear();
    final ids = <String>[];
    for (final s in p.spec) {
      ids.add(add(s.$1, Offset(s.$2 * size.width, s.$3 * size.height), s.$4).id);
    }
    for (final w in p.wires) {
      connect(ids[w.$1], ids[w.$2]);
    }
  }
}

class _NPreset {
  const _NPreset(this.name, this.blurb, this.spec, this.wires);
  final String name;
  final String blurb;
  final List<(String, double, double, int)> spec;
  final List<(int, int)> wires;
}

/// A tune made of a chain of notes with delays between them. The parts follow a snaking path, five to a row.
_NPreset _chainTune(String name, String blurb, List<int> notes, {String inst = 'piano', int delay = 2}) {
  final kinds = <(String, int)>[('beat', 4)];
  for (var i = 0; i < notes.length; i++) {
    if (i > 0) kinds.add(('delay', delay));
    kinds.add((inst, notes[i]));
  }
  const perRow = 5;
  final rows = (kinds.length / perRow).ceil();
  final spec = <(String, double, double, int)>[];
  final wires = <(int, int)>[];
  for (var i = 0; i < kinds.length; i++) {
    final row = i ~/ perRow;
    var col = i % perRow;
    if (row.isOdd) col = perRow - 1 - col;
    final x = 0.11 + col * 0.195;
    final y = rows == 1 ? 0.4 : 0.2 + row * (0.58 / (rows - 1));
    spec.add((kinds[i].$1, x, y, kinds[i].$2));
    if (i > 0) wires.add((i - 1, i));
  }
  return _NPreset(name, blurb, spec, wires);
}

final List<_NPreset> _kNPresets = [
  _chainTune('Twinkle machine', 'A chain of notes and delays plays Twinkle Twinkle', [0, 0, 3, 3, 4, 4, 3]),
  const _NPreset('Techno loop', 'A beat drives kick, snare, hats and a bass', [
    ('beat', 0.12, 0.3, 2),
    ('kick', 0.5, 0.1, 0),
    ('delay', 0.34, 0.42, 1),
    ('hat', 0.6, 0.38, 0),
    ('every2', 0.34, 0.66, 0),
    ('snare', 0.7, 0.66, 0),
    ('chance', 0.5, 0.88, 0),
    ('clap', 0.85, 0.88, 0),
    ('bass', 0.85, 0.15, 0),
  ], [(0, 1), (0, 2), (2, 3), (0, 4), (4, 5), (2, 6), (6, 7), (0, 8)]),
  const _NPreset('Rain bells', 'Dice pick a bell at random', [
    ('dice', 0.12, 0.45, 0),
    ('shuffle', 0.4, 0.45, 0),
    ('bell', 0.7, 0.12, 0),
    ('bell', 0.85, 0.35, 2),
    ('bell', 0.85, 0.6, 4),
    ('bell', 0.7, 0.85, 6),
    ('flute', 0.55, 0.65, 3),
  ], [(0, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6)]),
  const _NPreset('Canon', 'The same tune a second later, an octave higher', [
    ('beat', 0.12, 0.12, 4),
    ('piano', 0.4, 0.12, 0),
    ('delay', 0.6, 0.12, 2),
    ('piano', 0.8, 0.12, 2),
    ('delay', 0.8, 0.36, 2),
    ('piano', 0.6, 0.36, 3),
    ('delay', 0.4, 0.36, 2),
    ('piano', 0.2, 0.36, 4),
    ('delay', 0.2, 0.7, 3),
    ('up', 0.4, 0.7, 3),
  ], [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 7), (0, 8), (8, 9), (9, 1)]),
  const _NPreset('Harp', 'Tap the button: a note, echoes, then higher ones', [
    ('button', 0.12, 0.45, 0),
    ('pluck', 0.35, 0.45, 0),
    ('echo', 0.55, 0.25, 1),
    ('up', 0.75, 0.25, 0),
    ('pluck', 0.9, 0.45, 3),
    ('pluck', 0.55, 0.7, 2),
    ('echo', 0.8, 0.75, 0),
  ], [(0, 1), (1, 2), (2, 3), (3, 4), (1, 5), (5, 6)]),
];

class NgmyNoteLabScreen extends StatefulWidget {
  const NgmyNoteLabScreen({super.key});

  @override
  State<NgmyNoteLabScreen> createState() => _NgmyNoteLabScreenState();
}

class _NgmyNoteLabScreenState extends State<NgmyNoteLabScreen> with SingleTickerProviderStateMixin {
  static const _coachKey = 'ngmy_core_note_lab_coach_v1';
  static const double _half = 32;
  final _NoteBoard _lab = _NoteBoard();
  late final Ticker _ticker;
  Duration _last = Duration.zero;
  bool _loaded = false;
  bool _coach = false;
  bool _sound = true;
  String? _drag;
  Offset _dragOffset = Offset.zero;
  String? _from;
  Offset _to = Offset.zero;
  String _descSig = '';
  List<String> _desc = const [];

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((e) {
      _last = e;
      _lab.tick(e.inMilliseconds);
    })..start();
    unawaited(_loadCoach());
  }

  @override
  void dispose() {
    _ticker.dispose();
    _lab.dispose();
    super.dispose();
  }

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

  List<String> _describe() {
    final sig = '${_lab.nodes.length}|${_lab.edges.length}|${_lab.nodes.values.fold<int>(0, (a, n) => a + n.param * 7 + n.kind.hashCode % 97)}|${_lab.edges.fold<int>(0, (a, e) => a + e.from.hashCode % 31 + e.to.hashCode % 17)}';
    if (sig == _descSig) return _desc;
    final out = <String>[];
    void walk(_NN n, List<String> path, int depth) {
      final next = _lab.edges.where((e) => e.from == n.id).map((e) => _lab.nodes[e.to]).whereType<_NN>().toList();
      if (next.isEmpty || depth > 5) {
        if (path.length > 1) out.add(path.join('  →  '));
        return;
      }
      for (final m in next) {
        if (out.length >= 5) return;
        walk(m, [...path, _partWord(m.kind, m.param)], depth + 1);
      }
    }

    for (final n in _lab.nodes.values.where((n) => _kNParts[n.kind]!.role == _NRole.source)) {
      if (!_lab.edges.any((e) => e.from == n.id)) {
        out.add('${_partWord(n.kind, n.param)}  →  (not connected: drag from its right dot)');
      } else {
        walk(n, [_partWord(n.kind, n.param)], 0);
      }
    }
    _descSig = sig;
    return _desc = out.take(4).toList();
  }

  String? _nodeAt(Offset p) {
    for (final n in _lab.nodes.values.toList().reversed) {
      if ((p - n.pos).dx.abs() <= _half + 4 && (p - n.pos).dy.abs() <= _half + 4) return n.id;
    }
    return null;
  }

  Offset _out(_NN n) => n.pos + const Offset(_half + 4, 0);
  Offset _in(_NN n) => n.pos - const Offset(_half + 4, 0);

  String? _outAt(Offset p) {
    for (final n in _lab.nodes.values.toList().reversed) {
      if ((p - _out(n)).distance <= 24) return n.id;
    }
    return null;
  }

  String? _inAt(Offset p) {
    String? best;
    var d0 = 46.0;
    for (final n in _lab.nodes.values) {
      if (_kNParts[n.kind]!.role == _NRole.source) continue;
      final d = math.min((p - _in(n)).distance, (p - n.pos).distance);
      if (d < d0) {
        d0 = d;
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
        if ((_wire(_out(a), _in(b), k / 24) - p).distance < 15) return i;
      }
    }
    return null;
  }

  void _tap(Offset p) {
    final id = _nodeAt(p);
    if (id != null) {
      final n = _lab.nodes[id]!;
      HapticFeedback.selectionClick();
      if (n.kind == 'button') {
        _lab.fire(id, 0);
        return;
      }
      final part = _kNParts[n.kind]!;
      final span = _isInstrument(n.kind) ? (n.kind == 'bass' ? _kBassPitch.length : _kPitch.length) : (part.opts.isNotEmpty ? part.opts.length : 1);
      n.param = (n.param + 1) % span;
      // Hear the new setting straight away.
      if (_isInstrument(n.kind) || part.role == _NRole.drum) _lab._sound(n.kind, n.param, 0);
      _lab.poke();
      return;
    }
    final ei = _edgeAt(p);
    if (ei != null) {
      _lab.edges.removeAt(ei);
      _lab.poke();
    }
  }

  Future<void> _long(Offset p) async {
    final id = _nodeAt(p);
    if (id == null) return;
    HapticFeedback.mediumImpact();
    _lab.remove(id);
  }

  void _addPart(String kind) {
    if (!_loaded) return;
    final s = _lab.size;
    _lab.add(kind, Offset(s.width * (0.25 + _lab.rnd.nextDouble() * 0.5), s.height * (0.22 + _lab.rnd.nextDouble() * 0.55)));
    if (_isInstrument(kind) || _kNParts[kind]!.role == _NRole.drum) _lab._sound(kind, 0, 0);
    HapticFeedback.selectionClick();
  }

  Future<void> _ideas() async {
    final p = await showModalBottomSheet<_NPreset>(
      context: context,
      backgroundColor: const Color(0xFF1B1B1F),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: ListView(shrinkWrap: true, padding: const EdgeInsets.fromLTRB(8, 14, 8, 12), children: [
          const Padding(padding: EdgeInsets.fromLTRB(16, 0, 16, 8), child: Text('Start from a ready-made machine', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16))),
          for (final p in _kNPresets)
            ListTile(
              leading: const Icon(Icons.library_music_rounded, color: Color(0xFF4ADE80)),
              title: Text(p.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
              subtitle: Text(p.blurb, style: const TextStyle(color: Colors.white54)),
              onTap: () => Navigator.pop(ctx, p),
            ),
        ]),
      ),
    );
    if (p != null) _lab.loadPreset(p);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kStudioBg,
      body: SafeArea(
        child: Column(children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(4, 4, 8, 2),
            child: Row(children: [
              IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
              const Expanded(child: Text('NOTE LAB', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 14.5))),
              IconButton(onPressed: () => setState(() => _coach = true), icon: const Icon(Icons.help_outline_rounded, color: Color(0xFF4ADE80)), tooltip: 'How it works'),
              IconButton(
                onPressed: () => setState(() {
                  _sound = !_sound;
                  _lab.soundOn = _sound;
                }),
                icon: Icon(_sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, color: Colors.white70),
                tooltip: 'Sound',
              ),
              IconButton(onPressed: _ideas, icon: const Icon(Icons.auto_awesome_rounded, color: Colors.white70), tooltip: 'Ideas'),
              IconButton(onPressed: _lab.clear, icon: const Icon(Icons.delete_sweep_rounded, color: Colors.white70), tooltip: 'Clear'),
            ]),
          ),
          Expanded(
            child: LayoutBuilder(builder: (context, box) {
              final size = Size(box.maxWidth, box.maxHeight);
              if (!_loaded) {
                _lab.size = size;
                _loaded = true;
                scheduleMicrotask(() {
                  _lab.loadPreset(_kNPresets.first);
                  if (mounted) setState(() {});
                });
              } else if (_lab.size != size) {
                _lab.size = size;
              }
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapUp: (d) => _tap(d.localPosition),
                onPanStart: (d) {
                  final o = _outAt(d.localPosition);
                  if (o != null) {
                    _from = o;
                    _to = d.localPosition;
                    return;
                  }
                  final id = _nodeAt(d.localPosition);
                  if (id != null) {
                    _drag = id;
                    _dragOffset = _lab.nodes[id]!.pos - d.localPosition;
                  }
                },
                onPanUpdate: (d) {
                  if (_from != null) {
                    _to = d.localPosition;
                    _lab.poke();
                  } else if (_drag != null) {
                    final n = _lab.nodes[_drag!];
                    if (n != null) {
                      n.pos = Offset((d.localPosition.dx + _dragOffset.dx).clamp(46, size.width - 46), (d.localPosition.dy + _dragOffset.dy).clamp(46, size.height - 60));
                      _lab.poke();
                    }
                  }
                },
                onPanEnd: (_) {
                  if (_from != null) {
                    final t = _inAt(_to);
                    if (t != null && _lab.connect(_from!, t)) HapticFeedback.lightImpact();
                    _from = null;
                    _lab.poke();
                  }
                  _drag = null;
                },
                onLongPressStart: (d) => _long(d.localPosition),
                child: ClipRect(
                  child: Stack(fit: StackFit.expand, children: [
                    CustomPaint(size: size, painter: _NotePainter(_lab, () => _from, () => _to)),
                    if (_loaded)
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
                                  const Text('WHAT YOU HEAR', style: TextStyle(color: Colors.white38, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.3)),
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
          _shelf(),
        ]),
      ),
    );
  }

  Widget _coachCard() {
    Widget step(IconData icon, Color color, String title, String body) => Padding(
          padding: const EdgeInsets.only(bottom: 12),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(width: 38, height: 38, decoration: BoxDecoration(color: color.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12), border: Border.all(color: color.withValues(alpha: 0.6))), child: Icon(icon, color: color, size: 21)),
            const SizedBox(width: 12),
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13.5)),
              const SizedBox(height: 2),
              Text(body, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.4)),
            ])),
          ]),
        );
    return Positioned.fill(
      child: ColoredBox(
        color: Colors.black.withValues(alpha: 0.72),
        child: Center(
          child: Container(
            margin: const EdgeInsets.all(18),
            padding: const EdgeInsets.fromLTRB(18, 18, 18, 10),
            constraints: const BoxConstraints(maxWidth: 380),
            decoration: BoxDecoration(color: const Color(0xFF1B1B1F), borderRadius: BorderRadius.circular(26), border: Border.all(color: const Color(0xFF4ADE80).withValues(alpha: 0.5))),
            child: SingleChildScrollView(
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Make music by connecting', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900, fontSize: 17)),
                const SizedBox(height: 4),
                const Text('A little light runs along the wires. Whatever it touches plays a sound, then passes the light on.', style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.4)),
                const SizedBox(height: 14),
                step(Icons.timer_rounded, const Color(0xFF34D399), '1. Start it', 'Clock sends the light on its own, over and over. Button sends it when you tap. Dice send it at random times.'),
                step(Icons.piano_rounded, const Color(0xFFFACC15), '2. Play notes', 'Piano, Bell, Pluck, Synth, Organ, Flute and Bass play a note when the light arrives. Tap one to change its note. Kick, Snare, Hat and Clap are drums.'),
                step(Icons.north_rounded, const Color(0xFF60A5FA), '3. Shape it', 'Delay waits before passing it on. Echo repeats it. Higher and Lower change the pitch of everything after them. Chance, Every 2nd and Shuffle make it less predictable.'),
                step(Icons.cable_rounded, const Color(0xFFF472B6), '4. Wire it up', 'Drag from the right dot of a part to the next part. Tap a wire to cut it. Press and hold a part to remove it.'),
                const Text('The WHAT YOU HEAR box reads your machine back to you. Press the sparkle for machines to learn from.', style: TextStyle(color: Colors.white54, fontSize: 12, height: 1.4)),
                Align(alignment: Alignment.centerRight, child: TextButton(onPressed: _closeCoach, child: const Text("Let's go"))),
              ]),
            ),
          ),
        ),
      ),
    );
  }

  Widget _shelf() {
    Widget group(String title, _NRole role) {
      final kinds = [for (final e in _kNParts.entries) if (e.value.role == role) e.key];
      return Padding(
        padding: const EdgeInsets.only(right: 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Padding(padding: const EdgeInsets.only(left: 4, bottom: 4), child: Text(title, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.4))),
          Row(children: [
            for (final k in kinds)
              Padding(
                padding: const EdgeInsets.only(right: 6),
                child: GestureDetector(
                  onTap: () => _addPart(k),
                  child: Container(
                    width: 60,
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [_kNParts[k]!.color.withValues(alpha: 0.32), _kNParts[k]!.color.withValues(alpha: 0.1)]), border: Border.all(color: _kNParts[k]!.color.withValues(alpha: 0.5))),
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      Icon(_kNParts[k]!.icon, color: _kNParts[k]!.color, size: 22),
                      const SizedBox(height: 3),
                      Text(_kNParts[k]!.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w800)),
                    ]),
                  ),
                ),
              ),
          ]),
        ]),
      );
    }

    return Container(
      padding: const EdgeInsets.fromLTRB(10, 8, 0, 10),
      decoration: BoxDecoration(color: kStudioPanel, border: Border(top: BorderSide(color: Colors.white.withValues(alpha: 0.08)))),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          group('START', _NRole.source),
          group('PLAY', _NRole.note),
          group('DRUMS', _NRole.drum),
          group('SHAPE', _NRole.mod),
        ]),
      ),
    );
  }
}

Offset _wire(Offset a, Offset b, double t) {
  final dx = math.max(40.0, (b.dx - a.dx).abs() * 0.5);
  final c1 = a + Offset(dx, 0);
  final c2 = b - Offset(dx, 0);
  final u = 1 - t;
  return a * (u * u * u) + c1 * (3 * u * u * t) + c2 * (3 * u * t * t) + b * (t * t * t);
}

class _NotePainter extends CustomPainter {
  _NotePainter(this.lab, this.from, this.to) : super(repaint: lab);
  final _NoteBoard lab;
  final String? Function() from;
  final Offset Function() to;
  static final Map<String, TextPainter> _tp = {};

  static TextPainter _text(String text, double size, Color color, {FontWeight w = FontWeight.w800, String? family, String? package}) {
    final key = '$text|$size|${color.toARGB32()}|$family';
    return _tp.putIfAbsent(key, () => TextPainter(text: TextSpan(text: text, style: TextStyle(fontSize: size, color: color, fontWeight: w, fontFamily: family, package: package)), textDirection: TextDirection.ltr)..layout());
  }

  @override
  void paint(Canvas canvas, Size size) {
    final now = lab.now;
    final dot = Paint()..color = Colors.white.withValues(alpha: 0.05);
    for (double y = 20; y < size.height; y += 28) {
      for (double x = 14; x < size.width; x += 28) {
        canvas.drawCircle(Offset(x, y), 1, dot);
      }
    }
    for (final e in lab.edges) {
      final a = lab.nodes[e.from], b = lab.nodes[e.to];
      if (a == null || b == null) continue;
      final pa = a.pos + const Offset(36, 0), pb = b.pos - const Offset(36, 0);
      final dx = math.max(40.0, (pb.dx - pa.dx).abs() * 0.5);
      final path = Path()..moveTo(pa.dx, pa.dy)..cubicTo(pa.dx + dx, pa.dy, pb.dx - dx, pb.dy, pb.dx, pb.dy);
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..strokeCap = StrokeCap.round..shader = LinearGradient(colors: [_kNParts[a.kind]!.color.withValues(alpha: 0.55), _kNParts[b.kind]!.color.withValues(alpha: 0.55)]).createShader(Rect.fromPoints(pa, pb).inflate(2)));
    }
    for (final s in lab.sigs) {
      final a = lab.nodes[s.from], b = lab.nodes[s.to];
      if (a == null || b == null) continue;
      final t = ((now - s.start) / (s.end - s.start)).clamp(0.0, 1.0);
      final p = _wire(a.pos + const Offset(36, 0), b.pos - const Offset(36, 0), t);
      canvas.drawCircle(p, 9, Paint()..color = Colors.white.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
      canvas.drawCircle(p, 4.2, Paint()..color = Colors.white);
    }
    final f = from();
    if (f != null && lab.nodes[f] != null) {
      final pa = lab.nodes[f]!.pos + const Offset(36, 0);
      final pb = to();
      final dx = math.max(40.0, (pb.dx - pa.dx).abs() * 0.5);
      canvas.drawPath(Path()..moveTo(pa.dx, pa.dy)..cubicTo(pa.dx + dx, pa.dy, pb.dx - dx, pb.dy, pb.dx, pb.dy), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white70);
      canvas.drawCircle(pb, 7, Paint()..color = Colors.white);
    }
    for (final r in lab.rings) {
      final k = ((now - r.born) / 700).clamp(0.0, 1.0);
      canvas.drawCircle(r.c, 30 + 90 * Curves.easeOut.transform(k), Paint()..style = PaintingStyle.stroke..strokeWidth = 3.5 * (1 - k) + 0.5..color = r.color.withValues(alpha: (1 - k) * 0.9));
    }
    for (final p in lab.pops) {
      final k = ((now - p.born) / 800).clamp(0.0, 1.0);
      final tp = _text(p.text, 24 + 8 * (1 - k), p.color.withValues(alpha: 1 - k), w: FontWeight.w900);
      tp.paint(canvas, p.p - Offset(tp.width / 2, 48 + 50 * k + tp.height / 2));
    }
    for (final n in lab.nodes.values) {
      _node(canvas, n, now);
    }
  }

  void _node(Canvas canvas, _NN n, int now) {
    final part = _kNParts[n.kind]!;
    final fired = lab.lastFire[n.id];
    final glow = fired == null ? 0.0 : (1 - (now - fired) / 520).clamp(0.0, 1.0);
    final rect = Rect.fromCenter(center: n.pos, width: 64, height: 64);
    final rr = RRect.fromRectAndRadius(rect, const Radius.circular(18));
    canvas.drawRRect(rr.shift(const Offset(0, 6)), Paint()..color = Colors.black.withValues(alpha: 0.55)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
    if (glow > 0) canvas.drawRRect(rr.inflate(6), Paint()..color = part.color.withValues(alpha: 0.6 * glow)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
    canvas.drawRRect(rr.shift(const Offset(0, 4)), Paint()..color = Color.lerp(part.color, Colors.black, 0.65)!);
    canvas.drawRRect(rr, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(part.color, Colors.white, 0.18 + 0.4 * glow)!, Color.lerp(part.color, Colors.black, 0.35)!]).createShader(rect));
    canvas.drawRRect(rr, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = Colors.white.withValues(alpha: 0.35));
    final ip = _text(String.fromCharCode(part.icon.codePoint), 30, Colors.white, family: part.icon.fontFamily, package: part.icon.fontPackage);
    ip.paint(canvas, n.pos - Offset(ip.width / 2, ip.height / 2));
    final word = _isInstrument(n.kind) ? _partWord(n.kind, n.param) : part.label;
    final label = _text(word, 10.5, Colors.white);
    label.paint(canvas, n.pos + Offset(-label.width / 2, 40));
    if (!_isInstrument(n.kind) && part.opts.isNotEmpty) {
      final st = _text(part.opts[n.param % part.opts.length], 9.5, Colors.white54, w: FontWeight.w700);
      st.paint(canvas, n.pos + Offset(-st.width / 2, 54));
    }
    if (part.role != _NRole.source) _port(canvas, n.pos - const Offset(36, 0), part.color);
    _port(canvas, n.pos + const Offset(36, 0), part.color);
  }

  void _port(Canvas canvas, Offset c, Color color) {
    canvas.drawCircle(c, 9, Paint()..color = const Color(0xFF121212));
    canvas.drawCircle(c, 9, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.2..color = color);
    canvas.drawCircle(c, 3.5, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _NotePainter old) => true;
}
