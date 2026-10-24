import 'dart:collection';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

Widget _hud(String label, String value, {Color color = Colors.white}) => Column(mainAxisSize: MainAxisSize.min, children: [
      Text(label, style: const TextStyle(color: Colors.white38, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
      Text(value, style: TextStyle(color: color, fontSize: 17, fontWeight: FontWeight.w900)),
    ]);

// ═════════════════════════════════════════════════════════════════════════════
// ROBOT CODER: write a tiny program with cards and send the robot to the star.
// ═════════════════════════════════════════════════════════════════════════════

class RobotLevel {
  RobotLevel(this.n, this.walls, this.start, this.goal, this.solution);
  final int n; // grid size
  final Set<int> walls;
  final (int, int) start; // x, y
  final (int, int) goal;
  final List<String> solution; // F, L, R
  int get par => compressedLength(solution);
  int get limit => par + 3;

  /// The fewest cards the known solution needs once long runs are put in a loop.
  static int compressedLength(List<String> s) {
    var cards = 0;
    var i = 0;
    while (i < s.length) {
      var j = i;
      while (j < s.length && s[j] == s[i]) {
        j++;
      }
      final run = j - i;
      cards += run >= 4 ? 3 : run;
      i = j;
    }
    return cards;
  }
}

const _dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]; // east, south, west, north

RobotLevel? _makeRobotLevel(int index) {
  final n = math.min(5 + index ~/ 4, 8);
  final rnd = math.Random(1000 + index * 7919);
  for (var attempt = 0; attempt < 200; attempt++) {
    final walls = <int>{};
    final density = 0.06 + index * 0.012;
    for (var i = 0; i < n * n; i++) {
      if (rnd.nextDouble() < density) walls.add(i);
    }
    final start = (0, n - 1);
    final goal = (n - 1 - rnd.nextInt(2), rnd.nextInt(math.max(1, n ~/ 2)));
    walls.remove(start.$2 * n + start.$1);
    walls.remove(goal.$2 * n + goal.$1);
    final sol = _solveRobot(n, walls, start, goal);
    if (sol != null && sol.length >= math.min(4 + index, 12)) return RobotLevel(n, walls, start, goal, sol);
  }
  return null;
}

List<String>? _solveRobot(int n, Set<int> walls, (int, int) start, (int, int) goal) {
  final startState = (start.$1, start.$2, 0);
  final prev = <(int, int, int), ((int, int, int), String)?>{startState: null};
  final q = Queue<(int, int, int)>()..add(startState);
  while (q.isNotEmpty) {
    final s = q.removeFirst();
    if (s.$1 == goal.$1 && s.$2 == goal.$2) {
      final out = <String>[];
      var cur = s;
      while (prev[cur] != null) {
        out.add(prev[cur]!.$2);
        cur = prev[cur]!.$1;
      }
      return out.reversed.toList();
    }
    final d = _dirs[s.$3];
    final nx = s.$1 + d.$1, ny = s.$2 + d.$2;
    final moves = <((int, int, int), String)>[
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && !walls.contains(ny * n + nx)) ((nx, ny, s.$3), 'F'),
      ((s.$1, s.$2, (s.$3 + 3) % 4), 'L'),
      ((s.$1, s.$2, (s.$3 + 1) % 4), 'R'),
    ];
    for (final m in moves) {
      if (!prev.containsKey(m.$1)) {
        prev[m.$1] = (s, m.$2);
        q.add(m.$1);
      }
    }
  }
  return null;
}

class _Card {
  _Card(this.kind, [this.n = 2]);
  final String kind; // F L R REP END
  int n;
}

class NgmyRobotCoderStudio extends StatefulWidget {
  const NgmyRobotCoderStudio({super.key});

  @override
  State<NgmyRobotCoderStudio> createState() => _NgmyRobotCoderStudioState();
}

class _NgmyRobotCoderStudioState extends State<NgmyRobotCoderStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const totalLevels = 30;
  int _level = 0;
  int _unlocked = 0;
  Map<String, int> _stars = {};
  RobotLevel? _lv;
  final List<_Card> _prog = [];
  // Robot.
  int _rx = 0, _ry = 0, _rd = 0;
  List<String> _plan = [];
  int _step = 0;
  double _acc = 0;
  bool _running = false;
  String _msg = '';
  bool _won = false;
  int _hintAt = 0;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('robot_coder').then((m) {
      if (!mounted) return;
      setState(() {
        _unlocked = ((m['unlocked'] as num?)?.toInt() ?? 0).clamp(0, totalLevels - 1);
        _level = ((m['level'] as num?)?.toInt() ?? _unlocked).clamp(0, _unlocked);
        _stars = {for (final e in ((m['stars'] as Map?) ?? const {}).entries) '${e.key}': (e.value as num).toInt()};
        _load();
      });
    });
    _load();
  }

  void _load() {
    var lv = _makeRobotLevel(_level);
    lv ??= RobotLevel(5, {}, (0, 4), (4, 4), ['F', 'F', 'F', 'F']);
    _lv = lv;
    _prog.clear();
    _reset();
    _msg = '';
    _won = false;
    _hintAt = 0;
  }

  void _reset() {
    final lv = _lv!;
    _rx = lv.start.$1;
    _ry = lv.start.$2;
    _rd = 0;
    _running = false;
    _plan = [];
    _step = 0;
  }

  /// Turns the cards into a list of single moves, running loops.
  List<String> _expand() {
    final out = <String>[];
    void run(int from, int to) {
      var i = from;
      while (i < to) {
        final c = _prog[i];
        if (c.kind == 'REP') {
          var depth = 1, j = i + 1;
          while (j < to && depth > 0) {
            if (_prog[j].kind == 'REP') depth++;
            if (_prog[j].kind == 'END') depth--;
            j++;
          }
          final endIdx = depth == 0 ? j - 1 : to;
          for (var k = 0; k < c.n && out.length < 500; k++) {
            run(i + 1, endIdx);
          }
          i = endIdx + 1;
        } else if (c.kind == 'END') {
          i++;
        } else {
          out.add(c.kind);
          i++;
        }
      }
    }

    run(0, _prog.length);
    return out;
  }

  void _run() {
    if (_prog.isEmpty) {
      setState(() => _msg = 'Add some cards first.');
      return;
    }
    setState(() {
      _reset();
      _plan = _expand();
      _running = true;
      _msg = '';
      _won = false;
    });
  }

  @override
  void onFrame(double dt) {
    if (!_running) return;
    _acc += dt;
    if (_acc < 0.34) return;
    _acc = 0;
    final lv = _lv!;
    if (_step >= _plan.length) {
      _running = false;
      _msg = 'The robot stopped before the star. Change your cards and try again.';
      setState(() {});
      return;
    }
    final c = _plan[_step++];
    if (c == 'L') {
      _rd = (_rd + 3) % 4;
      NgmyTone.play(700, ms: 40, wave: 'square', volume: 0.15);
    } else if (c == 'R') {
      _rd = (_rd + 1) % 4;
      NgmyTone.play(800, ms: 40, wave: 'square', volume: 0.15);
    } else {
      final d = _dirs[_rd];
      final nx = _rx + d.$1, ny = _ry + d.$2;
      if (nx < 0 || ny < 0 || nx >= lv.n || ny >= lv.n || lv.walls.contains(ny * lv.n + nx)) {
        _running = false;
        _msg = 'Bump! The robot hit a wall.';
        NgmyTone.play(110, ms: 200, wave: 'saw', volume: 0.3);
        setState(() {});
        return;
      }
      _rx = nx;
      _ry = ny;
      NgmyTone.play(500, ms: 50, wave: 'tri', volume: 0.2);
    }
    if (_rx == lv.goal.$1 && _ry == lv.goal.$2) {
      _running = false;
      _won = true;
      final used = _prog.length;
      final stars = used <= lv.par ? 3 : (used <= lv.par + 2 ? 2 : 1);
      if (stars > (_stars['$_level'] ?? 0)) _stars['$_level'] = stars;
      if (_level + 1 < totalLevels) _unlocked = math.max(_unlocked, _level + 1);
      _msg = 'You got the star with $used cards!${used > lv.par ? ' (Can you do it in ${lv.par}?)' : ''}';
      NgmyTone.chord('bell', [0, 4, 7, 12], ms: 600, volume: 0.45);
      NgmyProgress.save('robot_coder', {'unlocked': _unlocked, 'level': _level, 'stars': _stars});
    }
    setState(() {});
  }

  void _add(String k) {
    if (_running) return;
    final lv = _lv!;
    if (_prog.length >= lv.limit) {
      setState(() => _msg = 'This level only allows ${lv.limit} cards.');
      return;
    }
    setState(() {
      _prog.add(_Card(k, k == 'REP' ? 3 : 2));
      _msg = '';
    });
    NgmyTone.play(1000, ms: 30, wave: 'tri', volume: 0.15);
  }

  @override
  Widget build(BuildContext context) {
    final lv = _lv;
    if (lv == null) return const SizedBox.shrink();
    return StudioPage(
      title: 'ROBOT CODER',
      accent: const Color(0xFF38BDF8),
      help: 'Programmers give computers a list of instructions, called a program. Here you write a program for a robot using cards, then press Run to watch it follow your instructions one at a time.\n\n• Forward moves one square the way the robot is facing.\n• Turn left and Turn right spin it on the spot.\n• Repeat runs the cards between it and its End card again and again. Tap a Repeat card in your program to change how many times.\n\nGet the robot to the star without hitting a wall, using as few cards as you can for 3 stars. There are 30 levels, and your progress is saved.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(16, 4, 16, 0), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [_hud('LEVEL', '${_level + 1} / $totalLevels'), _hud('CARDS', '${_prog.length} / ${lv.limit}', color: _prog.length >= lv.limit ? const Color(0xFFFB923C) : Colors.white), _hud('STARS', '${'★' * (_stars['$_level'] ?? 0)}${'☆' * (3 - (_stars['$_level'] ?? 0))}', color: const Color(0xFFFBBF24))])),
        Expanded(flex: 5, child: Padding(padding: const EdgeInsets.all(10), child: CustomPaint(size: Size.infinite, painter: _RobotPainter(this)))),
        if (_msg.isNotEmpty) Padding(padding: const EdgeInsets.symmetric(horizontal: 14), child: Text(_msg, textAlign: TextAlign.center, style: TextStyle(color: _won ? const Color(0xFF4ADE80) : const Color(0xFFFBBF24), fontWeight: FontWeight.w800))),
        Expanded(
          flex: 3,
          child: Container(
            width: double.infinity,
            margin: const EdgeInsets.fromLTRB(10, 6, 10, 6),
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white12)),
            child: _prog.isEmpty
                ? const Center(child: Text('Your program goes here.\nTap the cards below to add them.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white38, height: 1.5)))
                : SingleChildScrollView(
                    child: Wrap(spacing: 6, runSpacing: 6, children: [
                      for (var i = 0; i < _prog.length; i++) _cardView(i),
                    ]),
                  ),
          ),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          _pal('F', 'Forward', Icons.arrow_upward_rounded, const Color(0xFF4ADE80)),
          _pal('L', 'Turn left', Icons.rotate_left_rounded, const Color(0xFF38BDF8)),
          _pal('R', 'Turn right', Icons.rotate_right_rounded, const Color(0xFF38BDF8)),
          _pal('REP', 'Repeat', Icons.loop_rounded, const Color(0xFFF472B6)),
          _pal('END', 'End', Icons.stop_circle_outlined, const Color(0xFFF472B6)),
        ]),
        StudioRow(children: [
          StudioButton(icon: _running ? Icons.hourglass_top_rounded : Icons.play_arrow_rounded, label: 'Run', color: const Color(0xFF4ADE80), onTap: _run),
          StudioButton(icon: Icons.undo_rounded, label: 'Undo', onTap: () => setState(() {
                if (_prog.isNotEmpty && !_running) _prog.removeLast();
              })),
          StudioButton(icon: Icons.delete_outline_rounded, label: 'Clear', onTap: () => setState(() {
                _prog.clear();
                _reset();
                _msg = '';
              })),
          StudioButton(icon: Icons.lightbulb_rounded, label: 'Hint', color: const Color(0xFFFBBF24), onTap: () => setState(() {
                final sol = lv.solution;
                _msg = 'Hint: start with ${sol.take(math.min(sol.length, ++_hintAt + 1)).map((e) => e == 'F' ? 'Forward' : (e == 'L' ? 'Left' : 'Right')).join(', ')}…';
              })),
          if (_won && _level + 1 < totalLevels) StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _level++;
                _load();
                NgmyProgress.save('robot_coder', {'unlocked': _unlocked, 'level': _level, 'stars': _stars});
              })),
        ]),
        StudioRow(label: 'LEVEL', children: [
          for (var i = 0; i < totalLevels; i++) StudioChip(label: i <= _unlocked ? '${i + 1}' : '🔒', selected: i == _level, color: const Color(0xFF38BDF8), onTap: () {
                if (i <= _unlocked) setState(() {
                      _level = i;
                      _load();
                    });
              }),
        ]),
      ]),
    );
  }

  Widget _pal(String k, String label, IconData icon, Color c) => GestureDetector(
        onTap: () => _add(k),
        child: Container(margin: const EdgeInsets.only(right: 6), padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9), decoration: BoxDecoration(color: c.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(14), border: Border.all(color: c.withValues(alpha: 0.6))), child: Row(mainAxisSize: MainAxisSize.min, children: [Icon(icon, size: 17, color: c), const SizedBox(width: 4), Text(label, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 12))])),
      );

  Widget _cardView(int i) {
    final c = _prog[i];
    const names = {'F': ('Forward', Icons.arrow_upward_rounded, Color(0xFF4ADE80)), 'L': ('Left', Icons.rotate_left_rounded, Color(0xFF38BDF8)), 'R': ('Right', Icons.rotate_right_rounded, Color(0xFF38BDF8)), 'REP': ('Repeat', Icons.loop_rounded, Color(0xFFF472B6)), 'END': ('End', Icons.stop_circle_outlined, Color(0xFFF472B6))};
    final d = names[c.kind]!;
    final active = _running && i == _activeCard;
    return GestureDetector(
      onTap: () {
        if (_running) return;
        if (c.kind == 'REP') setState(() => c.n = c.n >= 8 ? 2 : c.n + 1);
      },
      onLongPress: () {
        if (!_running) setState(() => _prog.removeAt(i));
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
        decoration: BoxDecoration(color: d.$3.withValues(alpha: active ? 0.5 : 0.2), borderRadius: BorderRadius.circular(12), border: Border.all(color: d.$3)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [Icon(d.$2, size: 16, color: d.$3), const SizedBox(width: 4), Text(c.kind == 'REP' ? '${d.$1} ×${c.n}' : d.$1, style: TextStyle(color: d.$3, fontWeight: FontWeight.w900, fontSize: 12))]),
      ),
    );
  }

  int get _activeCard => -1;
}

class _RobotPainter extends CustomPainter {
  _RobotPainter(this.s);
  final _NgmyRobotCoderStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    final lv = s._lv!;
    final cell = math.min(size.width, size.height) / lv.n;
    final ox = (size.width - cell * lv.n) / 2, oy = (size.height - cell * lv.n) / 2;
    for (var y = 0; y < lv.n; y++) {
      for (var x = 0; x < lv.n; x++) {
        final r = Rect.fromLTWH(ox + x * cell + 1.5, oy + y * cell + 1.5, cell - 3, cell - 3);
        final wall = lv.walls.contains(y * lv.n + x);
        canvas.drawRRect(RRect.fromRectAndRadius(r, Radius.circular(cell * 0.14)), Paint()..color = wall ? const Color(0xFF475569) : ((x + y) % 2 == 0 ? const Color(0xFF0F2A3D) : const Color(0xFF12324A)));
        if (wall) {
          canvas.drawLine(r.topLeft + const Offset(8, 8), r.bottomRight - const Offset(8, 8), Paint()..color = Colors.white24..strokeWidth = 3);
          canvas.drawLine(r.topRight + const Offset(-8, 8), r.bottomLeft + const Offset(8, -8), Paint()..color = Colors.white24..strokeWidth = 3);
        }
      }
    }
    // Star.
    final gc = Offset(ox + (lv.goal.$1 + 0.5) * cell, oy + (lv.goal.$2 + 0.5) * cell);
    final tp = TextPainter(text: TextSpan(text: '⭐', style: TextStyle(fontSize: cell * 0.62)), textDirection: TextDirection.ltr)..layout();
    canvas.drawCircle(gc, cell * 0.4, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
    tp.paint(canvas, gc - Offset(tp.width / 2, tp.height / 2));
    // Robot.
    final c = Offset(ox + (s._rx + 0.5) * cell, oy + (s._ry + 0.5) * cell);
    canvas.save();
    canvas.translate(c.dx, c.dy);
    canvas.rotate(s._rd * math.pi / 2);
    final body = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: cell * 0.62, height: cell * 0.62), Radius.circular(cell * 0.14));
    canvas.drawRRect(body, Paint()..shader = const LinearGradient(colors: [Color(0xFFE5E7EB), Color(0xFF94A3B8)]).createShader(body.outerRect));
    canvas.drawRRect(body, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFF38BDF8));
    canvas.drawCircle(Offset(cell * 0.12, -cell * 0.1), cell * 0.07, Paint()..color = const Color(0xFF0EA5E9));
    canvas.drawCircle(Offset(cell * 0.12, cell * 0.1), cell * 0.07, Paint()..color = const Color(0xFF0EA5E9));
    canvas.drawPath(Path()..moveTo(cell * 0.31, 0)..lineTo(cell * 0.2, -cell * 0.08)..lineTo(cell * 0.2, cell * 0.08)..close(), Paint()..color = const Color(0xFFFBBF24));
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _RobotPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// INTERNET JOURNEY: send a message across the network the fastest way.
// ═════════════════════════════════════════════════════════════════════════════

class _Net {
  _Net(this.pos, this.names, this.edges, this.down);
  final List<Offset> pos; // 0..1
  final List<String> names;
  final Map<(int, int), int> edges; // sorted pair -> ms
  final Set<(int, int)> down;
}

(int, int) _ek(int a, int b) => a < b ? (a, b) : (b, a);

_Net _makeNet(int level) {
  final rnd = math.Random(77 + level * 131);
  final n = math.min(6 + level, 12);
  final names = <String>['Your phone', 'Home router', for (var i = 0; i < n - 3; i++) const ['ISP', 'Switch', 'Router', 'Hub', 'Gateway', 'Relay', 'Tower', 'Exchange', 'Cable'][i % 9], 'Server'];
  for (;;) {
    final pos = <Offset>[const Offset(0.1, 0.5)];
    for (var i = 1; i < n - 1; i++) {
      pos.add(Offset(0.2 + 0.62 * (i - 1) / math.max(1, n - 3) + rnd.nextDouble() * 0.07, 0.12 + rnd.nextDouble() * 0.76));
    }
    pos.add(const Offset(0.92, 0.5));
    final edges = <(int, int), int>{};
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        final d = (pos[i] - pos[j]).distance;
        if (d < 0.36 + level * 0.01 && (j - i) <= 3) edges[(i, j)] = (d * 160 + 6 + rnd.nextInt(12)).round();
      }
    }
    final down = <(int, int)>{};
    for (final e in edges.keys) {
      if (e.$1 != 0 && e.$2 != n - 1 && rnd.nextDouble() < 0.12 + level * 0.01) down.add(e);
    }
    final net = _Net(pos, names, edges, down);
    if (_bestPath(net) != null && edges.length >= n) return net;
  }
}

({int ms, List<int> path})? _bestPath(_Net net) {
  final n = net.pos.length;
  final dist = List<int>.filled(n, 1 << 30);
  final prev = List<int>.filled(n, -1);
  dist[0] = 0;
  final done = <int>{};
  while (done.length < n) {
    var u = -1;
    for (var i = 0; i < n; i++) {
      if (!done.contains(i) && (u < 0 || dist[i] < dist[u])) u = i;
    }
    if (u < 0 || dist[u] >= 1 << 30) break;
    done.add(u);
    for (final e in net.edges.entries) {
      if (net.down.contains(e.key)) continue;
      final v = e.key.$1 == u ? e.key.$2 : (e.key.$2 == u ? e.key.$1 : -1);
      if (v < 0) continue;
      if (dist[u] + e.value < dist[v]) {
        dist[v] = dist[u] + e.value;
        prev[v] = u;
      }
    }
  }
  if (dist[n - 1] >= 1 << 30) return null;
  final path = <int>[];
  for (var c = n - 1; c >= 0; c = prev[c]) {
    path.add(c);
    if (c == 0) break;
  }
  return (ms: dist[n - 1], path: path.reversed.toList());
}

class NgmyInternetJourneyStudio extends StatefulWidget {
  const NgmyInternetJourneyStudio({super.key});

  @override
  State<NgmyInternetJourneyStudio> createState() => _NgmyInternetJourneyStudioState();
}

class _NgmyInternetJourneyStudioState extends State<NgmyInternetJourneyStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const total = 20;
  int _level = 0;
  int _unlocked = 0;
  Map<String, int> _stars = {};
  late _Net _net;
  List<int> _route = [0];
  bool _sent = false;
  double _packet = 0;
  int _best = 0;
  String _msg = '';
  static const _facts = [
    'When you open a website, your request is cut into small packets that travel through many routers.',
    'A router is a traffic officer: it looks at where each packet is going and picks the next hop.',
    'Ping is how many milliseconds a packet takes to go there. Lower is better. A blink takes about 300 ms.',
    'If a cable or router breaks, packets find another way round. That is why the internet keeps working.',
    'Undersea cables carry almost all the internet between continents. They are about as thick as a garden hose.',
    'Every device has an IP address, like a house number, so packets know where to go.',
  ];

  @override
  void initState() {
    super.initState();
    _net = _makeNet(0);
    startFrames();
    NgmyProgress.load('internet_journey').then((m) {
      if (!mounted) return;
      setState(() {
        _unlocked = ((m['unlocked'] as num?)?.toInt() ?? 0).clamp(0, total - 1);
        _level = ((m['level'] as num?)?.toInt() ?? _unlocked).clamp(0, _unlocked);
        _stars = {for (final e in ((m['stars'] as Map?) ?? const {}).entries) '${e.key}': (e.value as num).toInt()};
        _load();
      });
    });
  }

  void _load() {
    _net = _makeNet(_level);
    _route = [0];
    _sent = false;
    _packet = 0;
    _msg = '';
    _best = _bestPath(_net)!.ms;
  }

  int get _ms {
    var s = 0;
    for (var i = 0; i + 1 < _route.length; i++) {
      s += _net.edges[_ek(_route[i], _route[i + 1])] ?? 0;
    }
    return s;
  }

  @override
  void onFrame(double dt) {
    if (_sent && _packet < _route.length - 1) {
      _packet = math.min(_route.length - 1.0, _packet + dt * 2.2);
      if (_packet >= _route.length - 1) _finish();
    }
    setState(() {});
  }

  void _finish() {
    final ms = _ms;
    final stars = ms <= _best ? 3 : (ms <= _best * 1.25 ? 2 : (ms <= _best * 1.6 ? 1 : 0));
    _msg = stars == 3 ? 'Perfect! $ms ms is the fastest route.' : (stars > 0 ? '$ms ms. The best route is $_best ms.' : '$ms ms is too slow. The best route is $_best ms.');
    if (stars > 0) {
      if (stars > (_stars['$_level'] ?? 0)) _stars['$_level'] = stars;
      if (_level + 1 < total) _unlocked = math.max(_unlocked, _level + 1);
      NgmyTone.chord('bell', [0, 4, 7], ms: 500, volume: 0.4);
      NgmyProgress.save('internet_journey', {'unlocked': _unlocked, 'level': _level, 'stars': _stars});
    }
  }

  void _tapNode(int i) {
    if (_sent) return;
    final cur = _route.last;
    if (i == cur) return;
    final e = _ek(cur, i);
    if (_route.contains(i)) {
      // Go back to that node.
      setState(() => _route = _route.sublist(0, _route.indexOf(i) + 1));
      return;
    }
    if (!_net.edges.containsKey(e)) {
      setState(() => _msg = 'There is no cable between those two.');
      return;
    }
    if (_net.down.contains(e)) {
      setState(() => _msg = 'That cable is broken! Pick another way.');
      NgmyTone.play(110, ms: 200, wave: 'saw', volume: 0.3);
      return;
    }
    setState(() {
      _route.add(i);
      _msg = '';
    });
    NgmyTone.play(600 + _route.length * 60.0, ms: 40, wave: 'square', volume: 0.2);
  }

  @override
  Widget build(BuildContext context) {
    final last = _net.pos.length - 1;
    final reached = _route.last == last;
    return StudioPage(
      title: 'INTERNET JOURNEY',
      accent: const Color(0xFF22D3EE),
      help: 'When you send a message, it does not fly through the air: it hops along cables from machine to machine until it reaches the server. Each cable takes some time, shown in milliseconds (ms).\n\nTap the machines one after another to build a route from Your phone to the Server. Pick the quickest route, and watch out for broken cables (shown with a red cross). When your route reaches the Server, press Send. There are 20 networks, and they get bigger.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(16, 4, 16, 0), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [_hud('NETWORK', '${_level + 1} / $total'), _hud('YOUR TIME', '$_ms ms'), _hud('STARS', '${'★' * (_stars['$_level'] ?? 0)}${'☆' * (3 - (_stars['$_level'] ?? 0))}', color: const Color(0xFFFBBF24))])),
        Expanded(
          child: LayoutBuilder(builder: (context, box) {
            final size = Size(box.maxWidth, box.maxHeight);
            return GestureDetector(
              onTapDown: (d) {
                for (var i = 0; i < _net.pos.length; i++) {
                  final p = Offset(_net.pos[i].dx * size.width, _net.pos[i].dy * size.height);
                  if ((p - d.localPosition).distance < 30) {
                    _tapNode(i);
                    return;
                  }
                }
              },
              child: CustomPaint(size: size, painter: _NetPainter(this)),
            );
          }),
        ),
        Padding(padding: const EdgeInsets.fromLTRB(14, 0, 14, 8), child: Text(_msg.isEmpty ? _facts[_level % _facts.length] : _msg, textAlign: TextAlign.center, style: TextStyle(color: _msg.isEmpty ? Colors.white54 : const Color(0xFFFBBF24), fontSize: 12.5, height: 1.4, fontWeight: _msg.isEmpty ? FontWeight.w500 : FontWeight.w800))),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioButton(icon: Icons.send_rounded, label: 'Send', color: const Color(0xFF4ADE80), onTap: () {
            if (!reached) {
              setState(() => _msg = 'Build a route all the way to the Server first.');
              return;
            }
            setState(() {
              _sent = true;
              _packet = 0;
            });
          }),
          StudioButton(icon: Icons.undo_rounded, label: 'Undo', onTap: () => setState(() {
                if (!_sent && _route.length > 1) _route.removeLast();
              })),
          StudioButton(icon: Icons.refresh_rounded, label: 'Start over', onTap: () => setState(() {
                _route = [0];
                _sent = false;
                _msg = '';
              })),
          if (_sent && _packet >= _route.length - 1 && (_stars['$_level'] ?? 0) > 0 && _level + 1 < total) StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next network', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _level++;
                _load();
              })),
        ]),
        StudioRow(label: 'NET', children: [
          for (var i = 0; i < total; i++) StudioChip(label: i <= _unlocked ? '${i + 1}' : '🔒', selected: i == _level, color: const Color(0xFF22D3EE), onTap: () {
                if (i <= _unlocked) setState(() {
                      _level = i;
                      _load();
                    });
              }),
        ]),
      ]),
    );
  }
}

class _NetPainter extends CustomPainter {
  _NetPainter(this.s);
  final _NgmyInternetJourneyStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF040C14));
    final net = s._net;
    Offset p(int i) => Offset(net.pos[i].dx * size.width, net.pos[i].dy * size.height);
    bool onRoute(int a, int b) {
      for (var i = 0; i + 1 < s._route.length; i++) {
        if (_ek(s._route[i], s._route[i + 1]) == _ek(a, b)) return true;
      }
      return false;
    }

    for (final e in net.edges.entries) {
      final a = p(e.key.$1), b = p(e.key.$2);
      final down = net.down.contains(e.key);
      final sel = onRoute(e.key.$1, e.key.$2);
      canvas.drawLine(a, b, Paint()..color = down ? const Color(0xFF7F1D1D) : (sel ? const Color(0xFF22D3EE) : const Color(0xFF334155))..strokeWidth = sel ? 5 : 2.5..strokeCap = StrokeCap.round);
      final m = Offset.lerp(a, b, 0.5)!;
      final tp = TextPainter(text: TextSpan(text: down ? '✖' : '${e.value}', style: TextStyle(color: down ? const Color(0xFFEF4444) : Colors.white70, fontSize: down ? 14 : 10.5, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: m, width: tp.width + 8, height: tp.height + 3), const Radius.circular(6)), Paint()..color = const Color(0xFF040C14));
      tp.paint(canvas, m - Offset(tp.width / 2, tp.height / 2));
    }
    for (var i = 0; i < net.pos.length; i++) {
      final c = p(i);
      final isEnd = i == net.pos.length - 1;
      final inRoute = s._route.contains(i);
      final col = i == 0 ? const Color(0xFF4ADE80) : (isEnd ? const Color(0xFFF472B6) : (inRoute ? const Color(0xFF22D3EE) : const Color(0xFF64748B)));
      if (inRoute) canvas.drawCircle(c, 26, Paint()..color = col.withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
      canvas.drawCircle(c, 19, Paint()..color = const Color(0xFF0B1722));
      canvas.drawCircle(c, 19, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = col);
      final icon = TextPainter(text: TextSpan(text: i == 0 ? '📱' : (isEnd ? '🖥️' : '📡'), style: const TextStyle(fontSize: 18)), textDirection: TextDirection.ltr)..layout();
      icon.paint(canvas, c - Offset(icon.width / 2, icon.height / 2));
      final nm = TextPainter(text: TextSpan(text: net.names[i], style: TextStyle(color: col, fontSize: 9.5, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
      nm.paint(canvas, c + Offset(-nm.width / 2, 22));
    }
    if (s._sent && s._route.length > 1) {
      final i = s._packet.floor().clamp(0, s._route.length - 2);
      final f = (s._packet - i).clamp(0.0, 1.0);
      final pos = Offset.lerp(p(s._route[i]), p(s._route[i + 1]), f)!;
      canvas.drawCircle(pos, 11, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.5)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: pos, width: 14, height: 10), const Radius.circular(3)), Paint()..color = const Color(0xFFFBBF24));
    }
  }

  @override
  bool shouldRepaint(covariant _NetPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// POWER GRID: keep a city's lights on for a day with sun, wind, water, gas and a battery.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyPowerGridStudio extends StatefulWidget {
  const NgmyPowerGridStudio({super.key});

  @override
  State<NgmyPowerGridStudio> createState() => _NgmyPowerGridStudioState();
}

class _NgmyPowerGridStudioState extends State<NgmyPowerGridStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const dayLen = 54.0; // seconds for 24 hours
  double _clock = 0; // 0..24
  bool _running = false;
  bool _over = false;
  int _level = 1;
  int _unlocked = 1;
  double _hydro = 0.4;
  double _gas = 0.3;
  double _batt = 0.0; // -1 charge .. +1 discharge
  double _charge = 0.5;
  double _blackout = 0;
  double _waste = 0;
  double _co2 = 0;
  final List<(double, double, double)> _trace = []; // hour, demand, supply
  double _wind = 0.5;
  final math.Random _rnd = math.Random();
  Map<String, int> _stars = {};

  double _demandAt(double h) {
    final base = 60 + _level * 6;
    final morning = math.exp(-math.pow((h - 7.5) / 1.8, 2)) * 0.35;
    final evening = math.exp(-math.pow((h - 19) / 2.2, 2)) * 0.6;
    final night = 0.45;
    return base * (night + morning + evening + 0.25 * (h > 8 && h < 17 ? 1 : 0.4));
  }

  double _solarAt(double h) => h < 6 || h > 18 ? 0 : math.sin(math.pi * (h - 6) / 12) * (50 + _level * 2);
  double get _windNow => _wind * (30 + _level * 3);
  double get _hydroNow => _hydro * 45;
  double get _gasNow => _gas * 60;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('power_grid').then((m) {
      if (!mounted) return;
      setState(() {
        _unlocked = ((m['unlocked'] as num?)?.toInt() ?? 1).clamp(1, 12);
        _level = _unlocked;
        _stars = {for (final e in ((m['stars'] as Map?) ?? const {}).entries) '${e.key}': (e.value as num).toInt()};
      });
    });
  }

  void _start() {
    setState(() {
      _clock = 0;
      _running = true;
      _over = false;
      _blackout = 0;
      _waste = 0;
      _co2 = 0;
      _charge = 0.5;
      _trace.clear();
    });
  }

  @override
  void onFrame(double dt) {
    if (!_running) return;
    final hrs = dt * 24 / dayLen;
    _clock += hrs;
    _wind = (_wind + (_rnd.nextDouble() - 0.5) * 0.35 * dt * (1 + _level * 0.1)).clamp(0.05, 1.0);
    final demand = _demandAt(_clock);
    final solar = _solarAt(_clock);
    // The battery: positive gives power, negative takes power in.
    var battP = _batt * 40;
    if (battP > 0 && _charge <= 0.001) battP = 0;
    if (battP < 0 && _charge >= 0.999) battP = 0;
    _charge = (_charge - battP * hrs / 160).clamp(0.0, 1.0);
    final supply = solar + _windNow + _hydroNow + _gasNow + battP;
    _co2 += _gasNow * hrs;
    if (supply < demand - 1) {
      _blackout += hrs * (demand - supply) / demand;
    } else if (supply > demand * 1.2) {
      _waste += hrs * (supply - demand * 1.2) / demand;
    }
    if (_trace.isEmpty || _clock - _trace.last.$1 > 0.1) _trace.add((_clock, demand, supply));
    if (_clock >= 24) {
      _running = false;
      _over = true;
      final score = 100 - _blackout * 30 - _waste * 8 - _co2 / 90;
      final stars = score >= 80 ? 3 : (score >= 55 ? 2 : (score >= 30 ? 1 : 0));
      if (stars > (_stars['$_level'] ?? 0)) _stars['$_level'] = stars;
      if (stars > 0 && _level < 12) _unlocked = math.max(_unlocked, _level + 1);
      NgmyProgress.save('power_grid', {'unlocked': _unlocked, 'stars': _stars});
      if (stars > 0) NgmyTone.chord('bell', [0, 4, 7, 12], ms: 600, volume: 0.45);
    }
    if (supply < demand - 1 && (_clock * 10).floor() % 4 == 0) NgmyTone.play(120, ms: 80, wave: 'saw', volume: 0.06);
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final demand = _demandAt(_clock);
    final solar = _solarAt(_clock);
    final battP = (_batt * 40) * ((_batt > 0 && _charge <= 0.001) || (_batt < 0 && _charge >= 0.999) ? 0 : 1);
    final supply = solar + _windNow + _hydroNow + _gasNow + battP;
    final lit = (supply / demand).clamp(0.0, 1.0);
    final score = (100 - _blackout * 30 - _waste * 8 - _co2 / 90).round();
    final hh = _clock.floor() % 24, mm = ((_clock - _clock.floor()) * 60).floor();
    return StudioPage(
      title: 'POWER GRID',
      accent: const Color(0xFFFBBF24),
      help: 'You run the power company for a city. People use more electricity in the morning and a lot more in the evening, but the sun only shines in the day and the wind keeps changing. Press Start and keep the supply (the line) at or above what the city needs (the shaded area) for the whole day.\n\n• Solar is free but only works in daylight.\n• Wind is free but gusty.\n• Hydro (water) is clean and you can turn it up or down.\n• Gas is powerful and fast but makes pollution (CO2).\n• The battery stores spare power: slide it to the left to charge it, and to the right to use it later.\n\nToo little power means a blackout. Too much is wasted. Win 1 star or more to unlock the next, bigger city (12 levels).',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(16, 4, 16, 0), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [_hud('CITY', 'Level $_level'), _hud('TIME', '${hh.toString().padLeft(2, '0')}:${mm.toString().padLeft(2, '0')}'), _hud('SCORE', '${score.clamp(0, 100)}', color: score > 60 ? const Color(0xFF4ADE80) : const Color(0xFFFB923C)), _hud('CO2', '${_co2.round()}', color: const Color(0xFF94A3B8))])),
        Expanded(flex: 4, child: CustomPaint(size: Size.infinite, painter: _CityPainter(lit, _clock, supply >= demand - 1))),
        Expanded(flex: 4, child: Padding(padding: const EdgeInsets.fromLTRB(10, 0, 10, 6), child: ClipRRect(borderRadius: BorderRadius.circular(14), child: CustomPaint(size: Size.infinite, painter: _GridChartPainter(_trace, _clock, supply, demand, _level)))),),
        Padding(padding: const EdgeInsets.fromLTRB(14, 0, 14, 6), child: Text('Making ${supply.round()} MW · City needs ${demand.round()} MW   ${supply < demand - 1 ? '⚠ BLACKOUT' : (supply > demand * 1.2 ? 'too much is wasted' : '✔ lights on')}', textAlign: TextAlign.center, style: TextStyle(color: supply < demand - 1 ? const Color(0xFFF87171) : const Color(0xFF4ADE80), fontWeight: FontWeight.w900, fontSize: 13))),
        if (!_running)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: _over
                ? Text(score >= 30 ? 'Day complete! Score $score. ${'★' * (_stars['$_level'] ?? 0)}' : 'Too many blackouts or too much pollution. Score $score. Try again!', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900))
                : const Text('Set your power plants, then press Start.', style: TextStyle(color: Colors.white54)),
          ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Hydro', value: _hydro, display: '${_hydroNow.round()} MW', color: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _hydro = v)),
        StudioSlider(label: 'Gas', value: _gas, display: '${_gasNow.round()} MW', color: const Color(0xFF94A3B8), onChanged: (v) => setState(() => _gas = v)),
        StudioSlider(label: 'Battery', value: _batt, min: -1, max: 1, display: '${_batt < -0.02 ? 'charging' : (_batt > 0.02 ? 'giving' : 'idle')}  ${(_charge * 100).round()}%', color: const Color(0xFF4ADE80), onChanged: (v) => setState(() => _batt = v)),
        StudioRow(children: [
          StudioButton(icon: _running ? Icons.pause_rounded : Icons.play_arrow_rounded, label: _running ? 'Pause' : (_clock > 0 && !_over ? 'Resume' : 'Start day'), color: const Color(0xFF4ADE80), onTap: () {
            if (_over || _clock == 0) {
              _start();
            } else {
              setState(() => _running = !_running);
            }
          }),
          for (var l = 1; l <= 12; l++) StudioChip(label: l <= _unlocked ? 'City $l${(_stars['$l'] ?? 0) > 0 ? ' ${'★' * _stars['$l']!}' : ''}' : '🔒', selected: _level == l, color: const Color(0xFFFBBF24), onTap: () {
                if (l <= _unlocked) setState(() {
                      _level = l;
                      _running = false;
                      _clock = 0;
                      _over = false;
                      _trace.clear();
                      _blackout = 0;
                      _waste = 0;
                      _co2 = 0;
                    });
              }),
        ]),
      ]),
    );
  }
}

class _CityPainter extends CustomPainter {
  _CityPainter(this.lit, this.clock, this.ok);
  final double lit;
  final double clock;
  final bool ok;

  @override
  void paint(Canvas canvas, Size size) {
    final night = clock < 6 || clock > 19 ? 1.0 : (clock < 8 ? (8 - clock) / 2 : (clock > 17 ? (clock - 17) / 2 : 0.0));
    canvas.drawRect(Offset.zero & size, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(const Color(0xFF38BDF8), const Color(0xFF05060F), night)!, Color.lerp(const Color(0xFFBAE6FD), const Color(0xFF14123A), night)!]).createShader(Offset.zero & size));
    final ang = math.pi * (clock - 6) / 12;
    final sun = Offset(size.width * (0.1 + 0.8 * ((clock - 6) / 12).clamp(0.0, 1.0)), size.height * (0.55 - 0.45 * math.sin(ang.clamp(0.0, math.pi))));
    if (clock > 5.5 && clock < 18.5) canvas.drawCircle(sun, 18, Paint()..color = const Color(0xFFFDE047));
    final rnd = math.Random(4);
    for (var i = 0; i < 40; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height * 0.5), 1, Paint()..color = Colors.white.withValues(alpha: night * 0.7));
    }
    final base = size.height;
    for (var i = 0; i < 12; i++) {
      final w = size.width / 12;
      final h = size.height * (0.28 + rnd.nextDouble() * 0.5);
      final r = Rect.fromLTWH(i * w + 3, base - h, w - 6, h);
      canvas.drawRect(r, Paint()..color = const Color(0xFF0B1220));
      for (var y = r.top + 8; y < r.bottom - 8; y += 14) {
        for (var x = r.left + 5; x < r.right - 8; x += 11) {
          final on = (rnd.nextDouble() < lit) && (ok || rnd.nextDouble() < 0.5);
          canvas.drawRect(Rect.fromLTWH(x, y, 6, 8), Paint()..color = on ? const Color(0xFFFDE047).withValues(alpha: 0.4 + 0.5 * night) : const Color(0xFF1E293B));
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant _CityPainter old) => true;
}

class _GridChartPainter extends CustomPainter {
  _GridChartPainter(this.trace, this.clock, this.supply, this.demand, this.level);
  final List<(double, double, double)> trace;
  final double clock;
  final double supply;
  final double demand;
  final int level;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0B0F17));
    final maxV = 190.0 + level * 8;
    double x(double h) => h / 24 * size.width;
    double y(double v) => size.height - v / maxV * size.height * 0.95 - 4;
    // The whole day's demand as a faint shape; supply as the line so far.
    final area = Path()..moveTo(0, size.height);
    for (var h = 0.0; h <= 24; h += 0.25) {
      final base = 60 + level * 6;
      final morning = math.exp(-math.pow((h - 7.5) / 1.8, 2)) * 0.35;
      final evening = math.exp(-math.pow((h - 19) / 2.2, 2)) * 0.6;
      final d = base * (0.45 + morning + evening + 0.25 * (h > 8 && h < 17 ? 1 : 0.4));
      area.lineTo(x(h), y(d));
    }
    area..lineTo(size.width, size.height)..close();
    canvas.drawPath(area, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.16));
    canvas.drawPath(area, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFFBBF24).withValues(alpha: 0.7));
    if (trace.length > 1) {
      final p = Path()..moveTo(x(trace.first.$1), y(trace.first.$3));
      for (final t in trace.skip(1)) {
        p.lineTo(x(t.$1), y(t.$3));
      }
      p.lineTo(x(clock), y(supply));
      canvas.drawPath(p, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFF4ADE80)..strokeJoin = StrokeJoin.round);
    }
    canvas.drawLine(Offset(x(clock), 0), Offset(x(clock), size.height), Paint()..color = Colors.white30);
    for (final h in const [0, 6, 12, 18, 24]) {
      final tp = TextPainter(text: TextSpan(text: '${h.toString().padLeft(2, '0')}h', style: const TextStyle(color: Colors.white38, fontSize: 9)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, Offset(math.min(size.width - tp.width - 2, x(h.toDouble())), 2));
    }
    final lg = TextPainter(text: const TextSpan(children: [TextSpan(text: '━ you make   ', style: TextStyle(color: Color(0xFF4ADE80))), TextSpan(text: '▮ city needs', style: TextStyle(color: Color(0xFFFBBF24)))], style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
    lg.paint(canvas, Offset(size.width - lg.width - 8, size.height - lg.height - 4));
  }

  @override
  bool shouldRepaint(covariant _GridChartPainter old) => true;
}
