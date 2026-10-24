import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

Widget _hud(String label, String value, {Color color = Colors.white}) => Column(mainAxisSize: MainAxisSize.min, children: [
      Text(label, style: const TextStyle(color: Colors.white38, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
      Text(value, style: TextStyle(color: color, fontSize: 18, fontWeight: FontWeight.w900)),
    ]);

Widget _card(String title, String sub, Color c, List<Widget> actions) => Center(
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(color: const Color(0xEE17171A), borderRadius: BorderRadius.circular(24), border: Border.all(color: c.withValues(alpha: 0.6))),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Text(title, textAlign: TextAlign.center, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 22)),
          const SizedBox(height: 6),
          Text(sub, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, height: 1.4)),
          const SizedBox(height: 14),
          Wrap(spacing: 8, alignment: WrapAlignment.center, children: actions),
        ]),
      ),
    );

// ═════════════════════════════════════════════════════════════════════════════
// BUG HUNT: find every bug hidden in the code without touching one.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyBugHuntStudio extends StatefulWidget {
  const NgmyBugHuntStudio({super.key});

  @override
  State<NgmyBugHuntStudio> createState() => _NgmyBugHuntStudioState();
}

class _NgmyBugHuntStudioState extends State<NgmyBugHuntStudio> {
  static const levels = {'Easy': (8, 10), 'Medium': (10, 20), 'Hard': (12, 34)};
  String _level = 'Easy';
  late int _n, _bugs;
  late List<bool> _bug, _open, _flag;
  bool _placed = false;
  bool _over = false;
  bool _won = false;
  bool _flagMode = false;
  int _seconds = 0;
  final Stopwatch _sw = Stopwatch();
  Map<String, int> _best = {};

  @override
  void initState() {
    super.initState();
    _reset();
    NgmyProgress.load('bug_hunt').then((m) {
      if (mounted) setState(() => _best = {for (final e in m.entries) e.key: (e.value as num).toInt()});
    });
  }

  void _reset() {
    final l = levels[_level]!;
    _n = l.$1;
    _bugs = l.$2;
    _bug = List.filled(_n * _n, false);
    _open = List.filled(_n * _n, false);
    _flag = List.filled(_n * _n, false);
    _placed = false;
    _over = false;
    _won = false;
    _seconds = 0;
    _sw
      ..stop()
      ..reset();
  }

  Iterable<int> _nbrs(int i) sync* {
    final r = i ~/ _n, c = i % _n;
    for (var dr = -1; dr <= 1; dr++) {
      for (var dc = -1; dc <= 1; dc++) {
        if (dr == 0 && dc == 0) continue;
        final rr = r + dr, cc = c + dc;
        if (rr >= 0 && cc >= 0 && rr < _n && cc < _n) yield rr * _n + cc;
      }
    }
  }

  int _count(int i) => _nbrs(i).where((j) => _bug[j]).length;

  void _place(int safe) {
    final rnd = math.Random();
    final bad = {safe, ..._nbrs(safe)};
    var put = 0;
    while (put < _bugs) {
      final k = rnd.nextInt(_n * _n);
      if (bad.contains(k) || _bug[k]) continue;
      _bug[k] = true;
      put++;
    }
    _placed = true;
    _sw.start();
  }

  void _reveal(int i) {
    final stack = [i];
    while (stack.isNotEmpty) {
      final k = stack.removeLast();
      if (_open[k] || _flag[k]) continue;
      _open[k] = true;
      if (_count(k) == 0 && !_bug[k]) stack.addAll(_nbrs(k));
    }
  }

  void _tap(int i) {
    if (_over) return;
    if (_flagMode) {
      if (!_open[i]) setState(() => _flag[i] = !_flag[i]);
      return;
    }
    if (_flag[i]) return;
    if (!_placed) _place(i);
    setState(() {
      if (_bug[i]) {
        _over = true;
        _sw.stop();
        for (var k = 0; k < _bug.length; k++) {
          if (_bug[k]) _open[k] = true;
        }
        NgmyTone.play(90, ms: 450, wave: 'noise', volume: 0.5);
        HapticFeedback.heavyImpact();
        return;
      }
      _reveal(i);
      NgmyTone.play(700 + _count(i) * 90.0, ms: 40, wave: 'square', volume: 0.15);
      final safeLeft = [for (var k = 0; k < _bug.length; k++) if (!_bug[k] && !_open[k]) k];
      if (safeLeft.isEmpty) {
        _over = true;
        _won = true;
        _sw.stop();
        _seconds = _sw.elapsed.inSeconds;
        if (_best[_level] == null || _seconds < _best[_level]!) {
          _best[_level] = _seconds;
          NgmyProgress.save('bug_hunt', _best);
        }
        NgmyTone.chord('bell', [0, 4, 7, 12], ms: 600, volume: 0.45);
      }
    });
  }

  static const _numCol = [Colors.transparent, Color(0xFF38BDF8), Color(0xFF4ADE80), Color(0xFFFBBF24), Color(0xFFF472B6), Color(0xFFF87171), Color(0xFF2DD4BF), Color(0xFFA78BFA), Colors.white];

  @override
  Widget build(BuildContext context) {
    final flags = _flag.where((f) => f).length;
    return StudioPage(
      title: 'BUG HUNT',
      accent: const Color(0xFFF87171),
      help: 'Bugs are hidden in the grid. Tap a square to open it. A number tells you how many bugs are touching that square (including diagonals). Use the numbers to work out where the bugs are, and open every safe square without touching a bug.\n\nTurn on the Flag button to mark squares you think hide a bug. The first square you tap is always safe.',
      stage: LayoutBuilder(builder: (context, box) {
        final side = math.min(box.maxWidth - 24, box.maxHeight - 90);
        final cell = side / _n;
        return Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [_hud('BUGS LEFT', '${_bugs - flags}'), _hud('BEST', _best[_level] == null ? '—' : '${_best[_level]}s')]),
          const SizedBox(height: 10),
          Stack(children: [
            SizedBox(
              width: side,
              height: side,
              child: Column(children: [
                for (var r = 0; r < _n; r++)
                  Expanded(
                    child: Row(children: [
                      for (var c = 0; c < _n; c++)
                        Expanded(
                          child: GestureDetector(
                            onTap: () => _tap(r * _n + c),
                            onLongPress: () {
                              if (!_open[r * _n + c] && !_over) setState(() => _flag[r * _n + c] = !_flag[r * _n + c]);
                            },
                            child: Container(
                              margin: const EdgeInsets.all(1.2),
                              decoration: BoxDecoration(color: _open[r * _n + c] ? (_bug[r * _n + c] ? const Color(0xFF7F1D1D) : const Color(0xFF0F172A)) : const Color(0xFF1E293B), borderRadius: BorderRadius.circular(cell * 0.2), border: Border.all(color: _open[r * _n + c] ? Colors.white10 : Colors.white24)),
                              alignment: Alignment.center,
                              child: _open[r * _n + c]
                                  ? (_bug[r * _n + c] ? Text('🐛', style: TextStyle(fontSize: cell * 0.6)) : (_count(r * _n + c) == 0 ? null : Text('${_count(r * _n + c)}', style: TextStyle(color: _numCol[_count(r * _n + c)], fontWeight: FontWeight.w900, fontSize: cell * 0.55))))
                                  : (_flag[r * _n + c] ? Text('🚩', style: TextStyle(fontSize: cell * 0.55)) : null),
                            ),
                          ),
                        ),
                    ]),
                  ),
              ]),
            ),
            if (_over) Positioned.fill(child: Container(decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.45), borderRadius: BorderRadius.circular(10)), child: _card(_won ? 'All bugs found!' : 'A bug got you', _won ? 'Time: ${_seconds}s' : 'Look at where they were hiding.', _won ? const Color(0xFF4ADE80) : const Color(0xFFF87171), [StudioButton(icon: Icons.replay_rounded, label: 'New game', color: const Color(0xFF4ADE80), onTap: () => setState(_reset))]))),
          ]),
        ]);
      }),
      tools: StudioRow(children: [
        for (final l in levels.keys) StudioChip(label: l, selected: _level == l, color: const Color(0xFFF87171), onTap: () => setState(() {
              _level = l;
              _reset();
            })),
        StudioChip(label: 'Flag mode', icon: Icons.flag_rounded, selected: _flagMode, color: const Color(0xFFFBBF24), onTap: () => setState(() => _flagMode = !_flagMode)),
        StudioButton(icon: Icons.refresh_rounded, label: 'New', onTap: () => setState(_reset)),
      ]),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// SIGNAL BREAKER: bounce the signal off your dish and break every data packet.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyBreakerStudio extends StatefulWidget {
  const NgmyBreakerStudio({super.key});

  @override
  State<NgmyBreakerStudio> createState() => _NgmyBreakerStudioState();
}

class _NgmyBreakerStudioState extends State<NgmyBreakerStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const cols = 8;
  int _level = 1;
  int _best = 1;
  int _lives = 3;
  int _score = 0;
  double _paddle = 0.5;
  Offset _ball = const Offset(0.5, 0.8);
  Offset _vel = Offset.zero;
  bool _launched = false;
  List<List<int>> _bricks = [];
  String _state = 'ready';
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('signal_breaker').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 1);
    });
  }

  void _build() {
    final rows = math.min(3 + _level, 9);
    _bricks = [
      for (var r = 0; r < rows; r++)
        [for (var c = 0; c < cols; c++) (_level >= 3 && (r + c) % 5 == 0) ? 2 : 1],
    ];
    _resetBall();
    _state = 'play';
  }

  void _resetBall() {
    _launched = false;
    _ball = Offset(_paddle, 0.88);
    _vel = Offset.zero;
  }

  void _launch() {
    if (_launched) return;
    _launched = true;
    final sp = 0.55 + _level * 0.03;
    _vel = Offset((math.Random().nextDouble() - 0.5) * 0.4, -sp);
  }

  @override
  void onFrame(double dt) {
    if (_state != 'play' || _size == Size.zero) return;
    if (!_launched) {
      _ball = Offset(_paddle, 0.88);
      setState(() {});
      return;
    }
    _ball += _vel * dt;
    if (_ball.dx < 0.02 || _ball.dx > 0.98) {
      _vel = Offset(-_vel.dx, _vel.dy);
      _ball = Offset(_ball.dx.clamp(0.02, 0.98), _ball.dy);
      NgmyTone.play(300, ms: 25, wave: 'square', volume: 0.12);
    }
    if (_ball.dy < 0.02) {
      _vel = Offset(_vel.dx, _vel.dy.abs());
      NgmyTone.play(300, ms: 25, wave: 'square', volume: 0.12);
    }
    // Paddle.
    if (_ball.dy > 0.9 && _ball.dy < 0.94 && _vel.dy > 0 && (_ball.dx - _paddle).abs() < 0.14) {
      final off = (_ball.dx - _paddle) / 0.14;
      final sp = _vel.distance * 1.01;
      _vel = Offset(off * sp * 0.75, -math.sqrt(math.max(0.05, sp * sp - math.pow(off * sp * 0.75, 2))));
      NgmyTone.play(520, ms: 40, wave: 'square', volume: 0.2);
    }
    // Bricks.
    final top = 0.12, bh = 0.045, gap = 0.006;
    for (var r = 0; r < _bricks.length; r++) {
      for (var c = 0; c < cols; c++) {
        if (_bricks[r][c] == 0) continue;
        final x0 = 0.03 + c * (0.94 / cols), x1 = x0 + 0.94 / cols - gap;
        final y0 = top + r * (bh + gap), y1 = y0 + bh;
        if (_ball.dx > x0 && _ball.dx < x1 && _ball.dy > y0 && _ball.dy < y1) {
          _bricks[r][c]--;
          _score += 10;
          final fromSide = (_ball.dx - x0 < 0.012 || x1 - _ball.dx < 0.012);
          _vel = fromSide ? Offset(-_vel.dx, _vel.dy) : Offset(_vel.dx, -_vel.dy);
          NgmyTone.play(700 + (r * 80).toDouble(), ms: 50, wave: 'square', volume: 0.22);
        }
      }
    }
    if (_bricks.every((r) => r.every((b) => b == 0))) {
      _state = 'won';
      if (_level + 1 > _best) {
        _best = _level + 1;
        NgmyProgress.save('signal_breaker', {'best': _best});
      }
      NgmyTone.chord('bell', [0, 4, 7, 12], ms: 600, volume: 0.45);
    }
    if (_ball.dy > 1.02) {
      _lives--;
      NgmyTone.play(120, ms: 250, wave: 'saw', volume: 0.3);
      if (_lives <= 0) {
        _state = 'lost';
      } else {
        _resetBall();
      }
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'SIGNAL BREAKER',
      accent: const Color(0xFF818CF8),
      help: 'You are a satellite dish bouncing a signal. Drag your finger to slide the dish left and right, tap to launch the signal, and break all the data packets. Do not let the signal fall past your dish: you have 3 lives. Packets with a bright core need two hits.\n\nEvery level adds another row. Your best level is saved.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: _launch,
          onPanUpdate: (d) => setState(() => _paddle = (_paddle + d.delta.dx / _size.width).clamp(0.1, 0.9)),
          child: Stack(fit: StackFit.expand, children: [
            CustomPaint(size: _size, painter: _BreakerPainter(this)),
            Positioned(left: 16, right: 16, top: 6, child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [_hud('LEVEL', '$_level'), _hud('SCORE', '$_score'), _hud('LIVES', '❤' * _lives)])),
            if (_state == 'ready') _card('Signal Breaker', 'Drag to move the dish. Tap to launch.', const Color(0xFF818CF8), [StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                  _level = 1;
                  _lives = 3;
                  _score = 0;
                  _build();
                }))]),
            if (_state == 'won') _card('Level $_level clear!', 'Next: more rows.', const Color(0xFF4ADE80), [StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next level', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                  _level++;
                  _build();
                }))]),
            if (_state == 'lost') _card('Game over', 'You reached level $_level with $_score points.', const Color(0xFFF87171), [StudioButton(icon: Icons.replay_rounded, label: 'Play again', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                  _level = 1;
                  _lives = 3;
                  _score = 0;
                  _build();
                }))]),
          ]),
        );
      }),
    );
  }
}

class _BreakerPainter extends CustomPainter {
  _BreakerPainter(this.s);
  final _NgmyBreakerStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF05060F), Color(0xFF14123A)]).createShader(Offset.zero & size));
    const top = 0.12, bh = 0.045, gap = 0.006;
    const cols = _NgmyBreakerStudioState.cols;
    for (var r = 0; r < s._bricks.length; r++) {
      for (var c = 0; c < cols; c++) {
        final b = s._bricks[r][c];
        if (b == 0) continue;
        final x0 = (0.03 + c * (0.94 / cols)) * size.width, w = (0.94 / cols - gap) * size.width;
        final y0 = (top + r * (bh + gap)) * size.height, h = bh * size.height;
        final col = HSVColor.fromAHSV(1, (r * 38 + 200) % 360, 0.65, 1).toColor();
        final rect = RRect.fromRectAndRadius(Rect.fromLTWH(x0, y0, w, h), const Radius.circular(5));
        canvas.drawRRect(rect, Paint()..color = col);
        canvas.drawRRect(rect, Paint()..style = PaintingStyle.stroke..strokeWidth = b == 2 ? 3 : 1..color = b == 2 ? Colors.white : Colors.white24);
        canvas.drawRect(Rect.fromLTWH(x0 + w * 0.15, y0 + h * 0.4, w * 0.7, 2), Paint()..color = Colors.black26);
      }
    }
    final pc = Offset(s._paddle * size.width, size.height * 0.92);
    final dish = Path()..moveTo(pc.dx - 0.14 * size.width, pc.dy)..quadraticBezierTo(pc.dx, pc.dy + 26, pc.dx + 0.14 * size.width, pc.dy)..quadraticBezierTo(pc.dx, pc.dy + 10, pc.dx - 0.14 * size.width, pc.dy)..close();
    canvas.drawPath(dish, Paint()..color = const Color(0xFFE5E7EB));
    canvas.drawLine(pc, pc + const Offset(0, -10), Paint()..color = const Color(0xFF9CA3AF)..strokeWidth = 3);
    canvas.drawCircle(pc + const Offset(0, -10), 4, Paint()..color = const Color(0xFFFBBF24));
    final bc = Offset(s._ball.dx * size.width, s._ball.dy * size.height);
    canvas.drawCircle(bc, 12, Paint()..color = const Color(0xFF818CF8).withValues(alpha: 0.4)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    canvas.drawCircle(bc, 6, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _BreakerPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// PASSWORD LAB: see how long a password would last, and make a strong one.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyPasswordLabStudio extends StatefulWidget {
  const NgmyPasswordLabStudio({super.key});

  @override
  State<NgmyPasswordLabStudio> createState() => _NgmyPasswordLabStudioState();
}

class _NgmyPasswordLabStudioState extends State<NgmyPasswordLabStudio> {
  final TextEditingController _ctl = TextEditingController();
  bool _show = true;
  String _generated = '';
  static const _common = ['password', '123456', 'qwerty', 'letmein', 'welcome', 'admin', 'iloveyou', 'monkey', 'dragon', 'football', 'abc123', 'login', 'master', 'sunshine', 'princess'];
  static const _words = ['river', 'lemon', 'tiger', 'cloud', 'maple', 'rocket', 'purple', 'garden', 'planet', 'silver', 'forest', 'candle', 'thunder', 'island', 'pepper', 'mirror', 'castle', 'orange', 'whale', 'bridge'];

  ({double bits, String time, Color color, String label}) _analyse(String p) {
    if (p.isEmpty) return (bits: 0, time: '—', color: Colors.white24, label: 'Type a password to test');
    var pool = 0;
    if (RegExp(r'[a-z]').hasMatch(p)) pool += 26;
    if (RegExp(r'[A-Z]').hasMatch(p)) pool += 26;
    if (RegExp(r'\d').hasMatch(p)) pool += 10;
    if (RegExp(r'[^A-Za-z0-9]').hasMatch(p)) pool += 32;
    var bits = p.length * (math.log(math.max(pool, 2)) / math.ln2);
    final lower = p.toLowerCase();
    if (_common.any((w) => lower.contains(w))) bits = math.min(bits, 18);
    if (RegExp(r'(.)\1{2,}').hasMatch(p)) bits *= 0.8;
    if (RegExp(r'(0123|1234|2345|3456|abcd|qwer)', caseSensitive: false).hasMatch(p)) bits *= 0.7;
    final secs = math.pow(2, bits) / 1e10; // ten billion guesses a second
    String t;
    if (secs < 1) {
      t = 'instantly';
    } else if (secs < 60) {
      t = '${secs.round()} seconds';
    } else if (secs < 3600) {
      t = '${(secs / 60).round()} minutes';
    } else if (secs < 86400) {
      t = '${(secs / 3600).round()} hours';
    } else if (secs < 86400 * 365) {
      t = '${(secs / 86400).round()} days';
    } else if (secs < 86400 * 365 * 1000) {
      t = '${(secs / 86400 / 365).round()} years';
    } else if (secs < 86400 * 365 * 1e9) {
      t = 'thousands of years';
    } else {
      t = 'billions of years';
    }
    if (bits < 28) return (bits: bits, time: t, color: const Color(0xFFEF4444), label: 'Very weak');
    if (bits < 40) return (bits: bits, time: t, color: const Color(0xFFFB923C), label: 'Weak');
    if (bits < 60) return (bits: bits, time: t, color: const Color(0xFFFACC15), label: 'Okay');
    if (bits < 80) return (bits: bits, time: t, color: const Color(0xFF84CC16), label: 'Strong');
    return (bits: bits, time: t, color: const Color(0xFF22C55E), label: 'Excellent');
  }

  void _generate() {
    final r = math.Random.secure();
    final w = [for (var i = 0; i < 4; i++) _words[r.nextInt(_words.length)]];
    setState(() {
      _generated = '${w[0][0].toUpperCase()}${w[0].substring(1)}-${w[1]}-${w[2]}-${w[3]}${r.nextInt(90) + 10}!';
      _ctl.text = _generated;
    });
    NgmyTone.play(1200, ms: 60, wave: 'square', volume: 0.2);
  }

  @override
  Widget build(BuildContext context) {
    final a = _analyse(_ctl.text);
    final p = _ctl.text;
    Widget check(String t, bool ok) => Padding(padding: const EdgeInsets.symmetric(vertical: 3), child: Row(children: [Icon(ok ? Icons.check_circle_rounded : Icons.cancel_rounded, size: 18, color: ok ? const Color(0xFF22C55E) : Colors.white24), const SizedBox(width: 8), Expanded(child: Text(t, style: TextStyle(color: ok ? Colors.white : Colors.white54, fontSize: 13)))]));
    return StudioPage(
      title: 'PASSWORD LAB',
      accent: const Color(0xFF22C55E),
      help: 'A password is the lock on your accounts. Type any password to see how long a computer making ten billion guesses every second would take to crack it. Longer is much stronger than clever: a long phrase of random words beats a short word full of symbols.\n\nTry examples, and press Make one for me to see a strong password. Please do not type a password you really use: this is only for practice.',
      stage: ListView(padding: const EdgeInsets.all(18), children: [
        TextField(
          controller: _ctl,
          obscureText: !_show,
          onChanged: (_) => setState(() {}),
          autocorrect: false,
          enableSuggestions: false,
          style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w800),
          decoration: InputDecoration(hintText: 'Try a password…', hintStyle: const TextStyle(color: Colors.white24), suffixIcon: IconButton(icon: Icon(_show ? Icons.visibility_rounded : Icons.visibility_off_rounded, color: Colors.white54), onPressed: () => setState(() => _show = !_show)), enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Colors.white24)), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: a.color))),
        ),
        const SizedBox(height: 16),
        ClipRRect(borderRadius: BorderRadius.circular(8), child: LinearProgressIndicator(value: (a.bits / 90).clamp(0.02, 1.0), minHeight: 14, backgroundColor: Colors.white10, valueColor: AlwaysStoppedAnimation(a.color))),
        const SizedBox(height: 10),
        Row(children: [Expanded(child: Text(a.label, style: TextStyle(color: a.color, fontWeight: FontWeight.w900, fontSize: 20))), const SizedBox(width: 8), Text('${a.bits.round()} bits', style: const TextStyle(color: Colors.white38))]),
        const SizedBox(height: 6),
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(color: a.color.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: a.color.withValues(alpha: 0.4))),
          child: Text(p.isEmpty ? 'Waiting for a password' : 'A fast computer could crack this ${a.time == 'instantly' ? 'instantly' : 'in about ${a.time}'}.', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
        ),
        const SizedBox(height: 16),
        check('At least 12 characters', p.length >= 12),
        check('Upper and lower case letters', RegExp(r'[a-z]').hasMatch(p) && RegExp(r'[A-Z]').hasMatch(p)),
        check('A number', RegExp(r'\d').hasMatch(p)),
        check('A symbol like ! or -', RegExp(r'[^A-Za-z0-9]').hasMatch(p)),
        check('Not a common password', p.isNotEmpty && !_common.any((w) => p.toLowerCase().contains(w))),
        const SizedBox(height: 14),
        const Text('GOOD HABITS', style: TextStyle(color: Colors.white38, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
        const SizedBox(height: 6),
        for (final tip in const ['Use a different password for every account.', 'A passphrase of 4 random words is easy to remember and hard to crack.', 'Never share a password or a code you receive by text, even with a friend.', 'Turn on two-step login wherever you can.', 'Use a password manager so you do not have to remember them all.'])
          Padding(padding: const EdgeInsets.only(bottom: 5), child: Text('•  $tip', style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.35))),
      ]),
      tools: StudioRow(children: [
        StudioButton(icon: Icons.auto_awesome_rounded, label: 'Make one for me', color: const Color(0xFF22C55E), onTap: _generate),
        for (final e in const ['password', 'Tiger2024', 'Xk9#mP2!qL7vR', 'river-lemon-tiger-cloud']) StudioChip(label: e, selected: false, color: const Color(0xFF38BDF8), onTap: () => setState(() => _ctl.text = e)),
      ]),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// WAVE LAB: build a sound out of waves, see it on the screen, and play it.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyWaveLabStudio extends StatefulWidget {
  const NgmyWaveLabStudio({super.key});

  @override
  State<NgmyWaveLabStudio> createState() => _NgmyWaveLabStudioState();
}

class _NgmyWaveLabStudioState extends State<NgmyWaveLabStudio> with SingleTickerProviderStateMixin, StudioFrames {
  String _wave = 'sine';
  String _wave2 = 'square';
  double _base = 220; // Hz
  double _mix = 0.0; // 0 = only wave 1
  bool _echo = false;
  bool _arp = false;
  double _arpT = 0;
  int _arpI = 0;
  double _t = 0;
  int _lastKey = -1;
  double _lastAt = -10;
  static const _ratios = [1.0, 9 / 8, 5 / 4, 4 / 3, 3 / 2, 5 / 3, 15 / 8, 2.0];
  static const _names = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Ti', 'Do'];

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    if (_arp) {
      _arpT += dt;
      if (_arpT > 0.18) {
        _arpT = 0;
        _arpI = (_arpI + 1) % 8;
        _play(const [0, 2, 4, 7, 4, 2, 7, 4][_arpI]);
      }
    }
    setState(() {});
  }

  double _sample(String w, double ph) {
    switch (w) {
      case 'square':
        return math.sin(ph) >= 0 ? 0.8 : -0.8;
      case 'tri':
        return 2 / math.pi * math.asin(math.sin(ph));
      case 'saw':
        return ((ph / (2 * math.pi)) % 1.0) * 1.6 - 0.8;
      default:
        return math.sin(ph);
    }
  }

  void _play(int k) {
    final f = _base * _ratios[k];
    _lastKey = k;
    _lastAt = _t;
    NgmyTone.play(f, ms: 380, wave: _wave, volume: 0.45 * (1 - _mix * 0.5));
    if (_mix > 0.05) NgmyTone.play(f * 1.005, ms: 380, wave: _wave2, volume: 0.45 * _mix);
    if (_echo) {
      Future<void>.delayed(const Duration(milliseconds: 220), () => NgmyTone.play(f, ms: 380, wave: _wave, volume: 0.22));
      Future<void>.delayed(const Duration(milliseconds: 440), () => NgmyTone.play(f, ms: 380, wave: _wave, volume: 0.1));
    }
  }

  @override
  Widget build(BuildContext context) {
    final f = _lastKey >= 0 ? _base * _ratios[_lastKey] : _base;
    return StudioPage(
      title: 'WAVE LAB',
      accent: const Color(0xFF22D3EE),
      help: 'Every sound is a wave of air shaking. Fast shaking is a high note and slow shaking is a low note (that is the frequency, in Hertz). The shape of the wave changes the colour of the sound: sine is smooth and soft, square is buzzy like an old game, triangle is gentle, and sawtooth is bright and rough.\n\nPick a wave, drag the Pitch slider, and tap the keys to hear it. Mix in a second wave to make a new sound. Turn on Echo to hear it bounce back, or Auto-play to let the lab play a tune for you. The screen shows the real shape of the wave you are making.',
      stage: Column(children: [
        Expanded(child: Padding(padding: const EdgeInsets.fromLTRB(10, 8, 10, 6), child: ClipRRect(borderRadius: BorderRadius.circular(18), child: CustomPaint(size: Size.infinite, painter: _ScopePainter(this, f))))),
        SizedBox(
          height: 104,
          child: Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 8),
            child: Row(children: [
              for (var k = 0; k < 8; k++)
                Expanded(
                  child: GestureDetector(
                    onTapDown: (_) => _play(k),
                    child: Container(
                      margin: const EdgeInsets.symmetric(horizontal: 2),
                      decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: _lastKey == k && _t - _lastAt < 0.25 ? const [Color(0xFF22D3EE), Color(0xFF0E7490)] : [Colors.white.withValues(alpha: 0.14), Colors.white.withValues(alpha: 0.05)]), border: Border.all(color: Colors.white24)),
                      alignment: Alignment.bottomCenter,
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(_names[k], style: const TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w800)),
                    ),
                  ),
                ),
            ]),
          ),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'WAVE', children: [for (final w in const [('sine', 'Sine'), ('square', 'Square'), ('tri', 'Triangle'), ('saw', 'Sawtooth')]) StudioChip(label: w.$2, selected: _wave == w.$1, color: const Color(0xFF22D3EE), onTap: () => setState(() => _wave = w.$1))]),
        StudioSlider(label: 'Pitch', value: _base, min: 80, max: 600, display: '${_base.round()} Hz', color: const Color(0xFF22D3EE), onChanged: (v) => setState(() => _base = v)),
        StudioRow(label: 'MIX IN', children: [
          for (final w in const [('sine', 'Sine'), ('square', 'Square'), ('tri', 'Triangle'), ('saw', 'Sawtooth')]) StudioChip(label: w.$2, selected: _wave2 == w.$1, color: const Color(0xFFF472B6), onTap: () => setState(() => _wave2 = w.$1)),
        ]),
        StudioSlider(label: 'Amount', value: _mix, color: const Color(0xFFF472B6), onChanged: (v) => setState(() => _mix = v)),
        StudioRow(children: [
          StudioChip(label: 'Echo', icon: Icons.waves_rounded, selected: _echo, color: const Color(0xFFFBBF24), onTap: () => setState(() => _echo = !_echo)),
          StudioChip(label: 'Auto-play', icon: Icons.play_circle_rounded, selected: _arp, color: const Color(0xFF4ADE80), onTap: () => setState(() => _arp = !_arp)),
        ]),
      ]),
    );
  }
}

class _ScopePainter extends CustomPainter {
  _ScopePainter(this.s, this.freq);
  final _NgmyWaveLabStudioState s;
  final double freq;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF031014));
    final grid = Paint()..color = const Color(0xFF0E7490).withValues(alpha: 0.25);
    for (var i = 1; i < 8; i++) {
      canvas.drawLine(Offset(size.width * i / 8, 0), Offset(size.width * i / 8, size.height), grid);
    }
    for (var i = 1; i < 4; i++) {
      canvas.drawLine(Offset(0, size.height * i / 4), Offset(size.width, size.height * i / 4), grid);
    }
    final mid = size.height / 2;
    final cycles = 3 + freq / 100;
    final active = s._t - s._lastAt < 0.6;
    final amp = (active ? 0.38 * (1 - (s._t - s._lastAt) / 0.8) : 0.12) * size.height;
    final path = Path();
    for (var x = 0.0; x <= size.width; x += 2) {
      final ph = x / size.width * cycles * 2 * math.pi + (active ? s._t * 12 : 0);
      final v = s._sample(s._wave, ph) * (1 - s._mix) + s._sample(s._wave2, ph * 1.005) * s._mix;
      final y = mid - v * amp;
      x == 0 ? path.moveTo(x, y) : path.lineTo(x, y);
    }
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 5..color = const Color(0xFF22D3EE).withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..color = const Color(0xFF67E8F9));
    final tp = TextPainter(text: TextSpan(text: '${freq.round()} Hz  ·  one wave every ${(1000 / freq).toStringAsFixed(1)} ms', style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w700)), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, const Offset(10, 8));
  }

  @override
  bool shouldRepaint(covariant _ScopePainter old) => true;
}
