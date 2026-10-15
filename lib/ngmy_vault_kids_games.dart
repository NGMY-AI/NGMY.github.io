import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_host.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault Channel games for kids (and everyone): bright, friendly learning games that work
/// fully offline. Each has 30 levels that slowly get harder.

// ─── A playful "pick the right one" game ──────────────────────────────────

class KidQ {
  const KidQ({required this.prompt, required this.options, required this.answer, this.big = true});
  final Widget prompt;

  /// Emoji or short words.
  final List<String> options;
  final int answer;

  /// Big option text (emoji); false for words.
  final bool big;
}

class KidQuizGame extends StatefulWidget {
  const KidQuizGame({
    super.key,
    required this.args,
    required this.goal,
    required this.colors,
    required this.title,
    required this.make,
    this.lives = 3,
  });
  final NgmyArcadeArgs args;
  final int goal;
  final List<Color> colors;
  final String title;
  final KidQ Function(int round, math.Random r) make;
  final int lives;

  @override
  State<KidQuizGame> createState() => _KidQuizGameState();
}

class _KidQuizGameState extends State<KidQuizGame> with TickerProviderStateMixin {
  int _round = 0, _right = 0, _wrong = 0;
  late KidQ _q = widget.make(0, widget.args.rng);
  int? _picked;
  Timer? _next;
  late final AnimationController _bounce = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat(reverse: true);
  late final AnimationController _burst = AnimationController(vsync: this, duration: const Duration(milliseconds: 900));
  late final AnimationController _shake = AnimationController(vsync: this, duration: const Duration(milliseconds: 420));

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, widget.goal);
  }

  @override
  void dispose() {
    _next?.cancel();
    _bounce.dispose();
    _burst.dispose();
    _shake.dispose();
    super.dispose();
  }

  void _pick(int i) {
    if (_picked != null) return;
    final ok = i == _q.answer;
    setState(() => _picked = i);
    if (ok) {
      _right++;
      HapticFeedback.lightImpact();
      _burst.forward(from: 0);
      widget.args.onProgress(_right, widget.goal);
    } else {
      _wrong++;
      HapticFeedback.heavyImpact();
      _shake.forward(from: 0);
    }
    _next = Timer(Duration(milliseconds: ok ? 750 : 1100), () {
      if (!mounted) return;
      if (_right >= widget.goal) {
        widget.args.onComplete();
        return;
      }
      if (_wrong >= widget.lives) {
        widget.args.onKnockout('Out of hearts — try again!');
        return;
      }
      setState(() {
        _round++;
        _q = widget.make(_round, widget.args.rng);
        _picked = null;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.colors;
    return Stack(children: [
      Positioned.fill(
        child: DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.first, c.last]),
          ),
        ),
      ),
      // Soft floating bubbles behind everything.
      Positioned.fill(child: AnimatedBuilder(animation: _bounce, builder: (_, __) => CustomPaint(painter: _BubblesPainter(_bounce.value)))),
      Column(children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 10, 14, 0),
          child: Row(children: [
            Expanded(
              child: Text(widget.title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18, shadows: [Shadow(color: Colors.black26, blurRadius: 6)])),
            ),
            for (var i = 0; i < widget.lives; i++)
              Padding(
                padding: const EdgeInsets.only(left: 2),
                child: Text(i < widget.lives - _wrong ? '❤️' : '🤍', style: const TextStyle(fontSize: 18)),
              ),
          ]),
        ),
        // Stars for progress.
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 8, 14, 0),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(99),
            child: LinearProgressIndicator(
              value: _right / widget.goal,
              minHeight: 12,
              backgroundColor: Colors.white24,
              color: const Color(0xFFFDE047),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 4),
          child: Text('⭐ $_right / ${widget.goal}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
        ),
        Expanded(
          child: Center(
            child: AnimatedBuilder(
              animation: Listenable.merge([_bounce, _shake]),
              builder: (_, child) {
                final dx = math.sin(_shake.value * math.pi * 6) * 12 * (1 - _shake.value);
                return Transform.translate(
                  offset: Offset(dx, math.sin(_bounce.value * math.pi) * -6),
                  child: child,
                );
              },
              child: AnimatedSwitcher(
                duration: const Duration(milliseconds: 350),
                transitionBuilder: (w, a) => ScaleTransition(scale: CurvedAnimation(parent: a, curve: Curves.elasticOut), child: w),
                child: Container(
                  key: ValueKey(_round),
                  margin: const EdgeInsets.symmetric(horizontal: 20),
                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 22),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(30),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.18), blurRadius: 24, offset: const Offset(0, 10))],
                  ),
                  child: DefaultTextStyle(
                    style: const TextStyle(color: Color(0xFF1F2937), fontWeight: FontWeight.w900, fontSize: 26, height: 1.2),
                    textAlign: TextAlign.center,
                    child: _q.prompt,
                  ),
                ),
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 0, 14, 18),
          child: LayoutBuilder(builder: (context, box) {
            final n = _q.options.length;
            final perRow = n <= 3 ? n : 2;
            final w = (box.maxWidth - (perRow - 1) * 12) / perRow;
            return Wrap(
              spacing: 12,
              runSpacing: 12,
              alignment: WrapAlignment.center,
              children: [
                for (var i = 0; i < n; i++)
                  _option(i, w),
              ],
            );
          }),
        ),
      ]),
      // Star burst when right.
      Positioned.fill(
        child: IgnorePointer(
          child: AnimatedBuilder(
            animation: _burst,
            builder: (_, __) => _burst.isAnimating ? CustomPaint(painter: _StarBurstPainter(_burst.value)) : const SizedBox.shrink(),
          ),
        ),
      ),
    ]);
  }

  Widget _option(int i, double w) {
    final picked = _picked == i;
    final right = _picked != null && i == _q.answer;
    final bg = right
        ? const Color(0xFF22C55E)
        : picked
            ? const Color(0xFFEF4444)
            : Colors.white;
    final fg = right || picked ? Colors.white : const Color(0xFF1F2937);
    return GestureDetector(
      onTap: () => _pick(i),
      child: AnimatedScale(
        scale: right ? 1.08 : 1,
        duration: const Duration(milliseconds: 220),
        curve: Curves.easeOutBack,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          width: w,
          height: _q.big ? 84 : 64,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: bg,
            borderRadius: BorderRadius.circular(22),
            border: Border.all(color: Colors.white, width: 3),
            boxShadow: [
              BoxShadow(color: Colors.black.withValues(alpha: 0.18), offset: const Offset(0, 5), blurRadius: 0),
            ],
          ),
          child: FittedBox(
            fit: BoxFit.scaleDown,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: Text(_q.options[i], style: TextStyle(color: fg, fontWeight: FontWeight.w900, fontSize: _q.big ? 44 : 24)),
            ),
          ),
        ),
      ),
    );
  }
}

class _BubblesPainter extends CustomPainter {
  _BubblesPainter(this.t);
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()..color = Colors.white.withValues(alpha: 0.12);
    for (var i = 0; i < 14; i++) {
      final x = (i * 97 % 100) / 100 * s.width;
      final y = ((i * 53 % 100) / 100 * s.height + t * 24 * (i.isEven ? 1 : -1));
      canvas.drawCircle(Offset(x, y), 14.0 + (i * 13 % 40), p);
    }
  }

  @override
  bool shouldRepaint(covariant _BubblesPainter old) => old.t != t;
}

class _StarBurstPainter extends CustomPainter {
  _StarBurstPainter(this.v);
  final double v;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width / 2, s.height * 0.42);
    const cols = [Color(0xFFFDE047), Color(0xFFF472B6), Color(0xFF60A5FA), Color(0xFF4ADE80), Color(0xFFFB923C)];
    for (var i = 0; i < 18; i++) {
      final a = i / 18 * math.pi * 2;
      final d = Curves.easeOutCubic.transform(v) * s.shortestSide * 0.45;
      final p = c + Offset(math.cos(a), math.sin(a)) * d;
      final r = 9 * (1 - v);
      final paint = Paint()..color = cols[i % cols.length].withValues(alpha: 1 - v);
      final path = Path();
      for (var k = 0; k < 10; k++) {
        final rr = k.isEven ? r : r * 0.45;
        final aa = k / 10 * math.pi * 2 - math.pi / 2;
        final pt = p + Offset(math.cos(aa), math.sin(aa)) * rr;
        k == 0 ? path.moveTo(pt.dx, pt.dy) : path.lineTo(pt.dx, pt.dy);
      }
      canvas.drawPath(path..close(), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _StarBurstPainter old) => old.v != v;
}

// ─── Question makers ──────────────────────────────────────────────────────

(List<String>, int) _opts(String right, Iterable<String> pool, math.Random r, {int count = 4}) {
  final wrong = pool.where((w) => w != right).toSet().toList()..shuffle(r);
  final opts = [right, ...wrong.take(count - 1)]..shuffle(r);
  return (opts, opts.indexOf(right));
}

Widget _big(String s, {double size = 58}) => Text(s, style: TextStyle(fontSize: size, height: 1.1));
Widget _line(String s, {double size = 20, Color color = const Color(0xFF6B7280)}) =>
    Text(s, style: TextStyle(fontSize: size, color: color, fontWeight: FontWeight.w800));

const _things = [
  ('🐶', 'DOG'), ('🐱', 'CAT'), ('🐟', 'FISH'), ('🐦', 'BIRD'), ('🐸', 'FROG'), ('🦁', 'LION'), ('🐘', 'ELEPHANT'),
  ('🍎', 'APPLE'), ('🍌', 'BANANA'), ('🥭', 'MANGO'), ('🍇', 'GRAPES'), ('🍊', 'ORANGE'), ('🥕', 'CARROT'),
  ('🚗', 'CAR'), ('🚌', 'BUS'), ('✈️', 'PLANE'), ('🚲', 'BIKE'), ('⚽', 'BALL'), ('🏠', 'HOUSE'), ('🌞', 'SUN'),
  ('🌙', 'MOON'), ('⭐', 'STAR'), ('🌳', 'TREE'), ('🌸', 'FLOWER'), ('📚', 'BOOK'), ('✏️', 'PENCIL'), ('🎈', 'BALLOON'),
  ('🐝', 'BEE'), ('🐄', 'COW'), ('🦒', 'GIRAFFE'), ('🐵', 'MONKEY'), ('🦓', 'ZEBRA'), ('🐢', 'TURTLE'), ('🥚', 'EGG'),
  ('🍞', 'BREAD'), ('🧃', 'JUICE'), ('🎂', 'CAKE'), ('👑', 'CROWN'), ('🔑', 'KEY'), ('🪁', 'KITE'), ('🐑', 'SHEEP'),
];

const _countables = ['🍎', '🐥', '⭐', '🎈', '🐟', '🌸', '🍌', '🚗', '🦋', '⚽', '🍓', '🐞'];

KidQ _countQ(int level, int round, math.Random r) {
  final max = lvI(level, 5, 15);
  final n = 1 + r.nextInt(max);
  final e = _countables[r.nextInt(_countables.length)];
  final pool = <String>{for (var d = -3; d <= 3; d++) if (n + d > 0 && d != 0) '${n + d}'};
  final (o, a) = _opts('$n', pool, r, count: level < 8 ? 3 : 4);
  return KidQ(
    prompt: Column(mainAxisSize: MainAxisSize.min, children: [
      _line('How many?'),
      const SizedBox(height: 10),
      Wrap(alignment: WrapAlignment.center, spacing: 4, runSpacing: 4, children: [for (var i = 0; i < n; i++) Text(e, style: const TextStyle(fontSize: 34))]),
    ]),
    options: o,
    answer: a,
  );
}

KidQ _letterQ(int level, int round, math.Random r) {
  final t = _things[r.nextInt(_things.length)];
  final right = t.$2[0];
  final pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  final (o, a) = _opts(right, pool, r, count: level < 10 ? 3 : 4);
  return KidQ(
    prompt: Column(mainAxisSize: MainAxisSize.min, children: [
      _big(t.$1, size: 74),
      const SizedBox(height: 6),
      _line(level < 15 ? '${t.$2.substring(0, 1)}${'_' * (t.$2.length - 1)}' : 'Starts with…', size: 22, color: const Color(0xFF6366F1)),
      _line('What letter does it start with?', size: 15),
    ]),
    options: o,
    answer: a,
  );
}

const _colorDots = [('🔴', 'RED'), ('🟠', 'ORANGE'), ('🟡', 'YELLOW'), ('🟢', 'GREEN'), ('🔵', 'BLUE'), ('🟣', 'PURPLE'), ('🟤', 'BROWN'), ('⚫', 'BLACK'), ('⚪', 'WHITE')];
const _colorThings = {
  'RED': ['🍎', '🍓', '🌹', '🚒'],
  'ORANGE': ['🍊', '🥕', '🎃', '🦊'],
  'YELLOW': ['🍌', '🌻', '🐥', '🌞'],
  'GREEN': ['🥦', '🐸', '🍀', '🥒'],
  'BLUE': ['🐳', '🧢', '💧', '🫐'],
  'PURPLE': ['🍇', '🍆', '☂️', '🔮'],
  'BROWN': ['🐻', '🥔', '🍫', '🪵'],
  'BLACK': ['🎱', '🐈‍⬛', '🕷️', '🎩'],
  'WHITE': ['🥚', '⛄', '🐑', '☁️'],
};

KidQ _colorQ(int level, int round, math.Random r) {
  final c = _colorDots[r.nextInt(level < 10 ? 6 : _colorDots.length)];
  if (level < 12 || r.nextBool()) {
    // Show the colour, pick its name.
    final (o, a) = _opts(c.$2, _colorDots.map((d) => d.$2), r, count: level < 6 ? 3 : 4);
    return KidQ(prompt: Column(mainAxisSize: MainAxisSize.min, children: [_big(c.$1, size: 80), _line('What colour is this?', size: 16)]), options: o, answer: a, big: false);
  }
  // Name the colour, pick the thing.
  final things = _colorThings[c.$2]!;
  final right = things[r.nextInt(things.length)];
  final pool = [for (final e in _colorThings.entries) if (e.key != c.$2) ...e.value];
  final (o, a) = _opts(right, pool, r);
  return KidQ(prompt: Column(mainAxisSize: MainAxisSize.min, children: [_line('Find something', size: 18), _line(c.$2, size: 34, color: const Color(0xFF111827))]), options: o, answer: a);
}

const _shapes = [('🔺', 'TRIANGLE'), ('🟥', 'SQUARE'), ('🟢', 'CIRCLE'), ('⭐', 'STAR'), ('❤️', 'HEART'), ('🔷', 'DIAMOND'), ('🌙', 'MOON'), ('➕', 'CROSS')];

KidQ _shapeQ(int level, int round, math.Random r) {
  final s = _shapes[r.nextInt(level < 10 ? 5 : _shapes.length)];
  if (level < 15 || r.nextBool()) {
    final (o, a) = _opts(s.$1, _shapes.map((x) => x.$1), r, count: level < 6 ? 3 : 4);
    return KidQ(prompt: Column(mainAxisSize: MainAxisSize.min, children: [_line('Tap the', size: 18), _line(s.$2, size: 34, color: const Color(0xFF111827))]), options: o, answer: a);
  }
  final (o, a) = _opts(s.$2, _shapes.map((x) => x.$2), r);
  return KidQ(prompt: Column(mainAxisSize: MainAxisSize.min, children: [_big(s.$1, size: 80), _line('What shape?', size: 16)]), options: o, answer: a, big: false);
}

const _fruit = ['🍎', '🍊', '🍌', '🍓', '🥭', '🍇'];

KidQ _mathQ(int level, int round, math.Random r) {
  final max = lvI(level, 5, 20);
  final sub = level > 8 && r.nextInt(3) == 0;
  var x = 1 + r.nextInt(max ~/ 2 + 1), y = 1 + r.nextInt(max ~/ 2 + 1);
  if (sub && y > x) {
    final t = x;
    x = y;
    y = t;
  }
  final ans = sub ? x - y : x + y;
  final e = _fruit[r.nextInt(_fruit.length)];
  final pool = <String>{for (var d = -3; d <= 3; d++) if (ans + d >= 0 && d != 0) '${ans + d}'};
  final (o, a) = _opts('$ans', pool, r);
  final visual = x + y <= 12;
  return KidQ(
    prompt: Column(mainAxisSize: MainAxisSize.min, children: [
      if (visual) ...[
        Wrap(alignment: WrapAlignment.center, children: [for (var i = 0; i < x; i++) Text(e, style: const TextStyle(fontSize: 26))]),
        _line(sub ? 'take away' : 'plus', size: 16),
        Wrap(alignment: WrapAlignment.center, children: [for (var i = 0; i < y; i++) Text(e, style: const TextStyle(fontSize: 26))]),
        const SizedBox(height: 8),
      ],
      _line('$x ${sub ? '−' : '+'} $y = ?', size: 34, color: const Color(0xFF111827)),
    ]),
    options: o,
    answer: a,
  );
}

const _homes = [
  ('🐟', '🌊'), ('🐦', '🌳'), ('🐄', '🏡'), ('🐪', '🏜️'), ('🐧', '🧊'), ('🐝', '🍯'), ('🐒', '🌴'), ('🐻', '🏔️'), ('🦁', '🌾'), ('🐸', '🪷'),
];

KidQ _homeQ(int level, int round, math.Random r) {
  final h = _homes[r.nextInt(_homes.length)];
  final (o, a) = _opts(h.$2, _homes.map((x) => x.$2), r, count: level < 8 ? 3 : 4);
  return KidQ(prompt: Column(mainAxisSize: MainAxisSize.min, children: [_big(h.$1, size: 80), _line('Where does it live?', size: 16)]), options: o, answer: a);
}

const _swahili = [
  ('🐱', 'PAKA'), ('🐶', 'MBWA'), ('🍌', 'NDIZI'), ('💧', 'MAJI'), ('🏠', 'NYUMBA'), ('🚗', 'GARI'), ('🌞', 'JUA'), ('🌳', 'MTI'),
  ('🐟', 'SAMAKI'), ('🐦', 'NDEGE'), ('📚', 'KITABU'), ('⚽', 'MPIRA'), ('🥛', 'MAZIWA'), ('🥭', 'EMBE'), ('🦁', 'SIMBA'),
  ('🐘', 'TEMBO'), ('🦒', 'TWIGA'), ('🌙', 'MWEZI'), ('⭐', 'NYOTA'), ('🐄', 'NG\'OMBE'), ('🍚', 'WALI'), ('🥚', 'YAI'),
  ('👁️', 'JICHO'), ('✋', 'MKONO'), ('🦶', 'MGUU'), ('❤️', 'MOYO'), ('🔥', 'MOTO'), ('🌧️', 'MVUA'), ('🐐', 'MBUZI'), ('🐔', 'KUKU'),
];

KidQ _swahiliQ(int level, int round, math.Random r) {
  final w = _swahili[r.nextInt(_swahili.length)];
  if (level < 12 || r.nextBool()) {
    final (o, a) = _opts(w.$2, _swahili.map((x) => x.$2), r, count: level < 6 ? 3 : 4);
    return KidQ(prompt: Column(mainAxisSize: MainAxisSize.min, children: [_big(w.$1, size: 80), _line('Kwa Kiswahili ni…?', size: 16)]), options: o, answer: a, big: false);
  }
  final (o, a) = _opts(w.$1, _swahili.map((x) => x.$1), r);
  return KidQ(prompt: Column(mainAxisSize: MainAxisSize.min, children: [_line('Gusa', size: 18), _line(w.$2, size: 36, color: const Color(0xFF111827))]), options: o, answer: a);
}

const _sizes = ['🐜', '🐭', '🐱', '🐶', '🐷', '🐴', '🦒', '🐘', '🐳'];

KidQ _bigQ(int level, int round, math.Random r) {
  final bigger = r.nextBool();
  if (level < 14) {
    final i = r.nextInt(_sizes.length - 1);
    final j = i + 1 + r.nextInt(_sizes.length - 1 - i);
    final right = bigger ? _sizes[j] : _sizes[i];
    final opts = [_sizes[i], _sizes[j]]..shuffle(r);
    return KidQ(
      prompt: Column(mainAxisSize: MainAxisSize.min, children: [_line('Which one is', size: 18), _line(bigger ? 'BIGGER?' : 'SMALLER?', size: 34, color: const Color(0xFF111827))]),
      options: opts,
      answer: opts.indexOf(right),
    );
  }
  final a = r.nextInt(lvI(level, 20, 100)), b = r.nextInt(lvI(level, 20, 100));
  if (a == b) return _bigQ(level, round, r);
  final right = bigger ? math.max(a, b) : math.min(a, b);
  final opts = ['$a', '$b'];
  return KidQ(
    prompt: Column(mainAxisSize: MainAxisSize.min, children: [_line('Which number is', size: 18), _line(bigger ? 'BIGGER?' : 'SMALLER?', size: 34, color: const Color(0xFF111827))]),
    options: opts,
    answer: opts.indexOf('$right'),
  );
}

KidQ _spellQ(int level, int round, math.Random r) {
  final short = _things.where((t) => t.$2.length <= lvI(level, 4, 8) && t.$2.length >= 3).toList();
  final t = short[r.nextInt(short.length)];
  final word = t.$2;
  final hole = r.nextInt(word.length);
  final shown = word.split('').asMap().entries.map((e) => e.key == hole ? '_' : e.value).join(' ');
  final (o, a) = _opts(word[hole], 'ABCDEFGHIJKLMNOPRSTUVWY'.split(''), r, count: level < 8 ? 3 : 4);
  return KidQ(
    prompt: Column(mainAxisSize: MainAxisSize.min, children: [
      _big(t.$1, size: 68),
      const SizedBox(height: 8),
      _line(shown, size: 30, color: const Color(0xFF111827)),
      _line('Which letter is missing?', size: 14),
    ]),
    options: o,
    answer: a,
  );
}

const _patternSets = [
  ['🍎', '🍌'], ['🔴', '🔵'], ['🐶', '🐱'], ['⭐', '🌙'], ['🟥', '🟨', '🟦'], ['🐸', '🐟', '🐦'], ['🌸', '🌻', '🌷'], ['⚽', '🏀', '🎾', '🏐'],
];

KidQ _patternQ(int level, int round, math.Random r) {
  final sets = level < 10 ? _patternSets.sublist(0, 4) : _patternSets;
  final set = sets[r.nextInt(sets.length)];
  final len = lvI(level, 4, 8);
  final seq = [for (var i = 0; i < len; i++) set[i % set.length]];
  final right = set[len % set.length];
  final pool = {..._patternSets.expand((e) => e)};
  final (o, a) = _opts(right, pool, r, count: 3);
  return KidQ(
    prompt: Column(mainAxisSize: MainAxisSize.min, children: [
      _line('What comes next?', size: 16),
      const SizedBox(height: 8),
      Wrap(alignment: WrapAlignment.center, spacing: 2, children: [
        for (final e in seq) Text(e, style: const TextStyle(fontSize: 32)),
        const Text('❓', style: TextStyle(fontSize: 32)),
      ]),
    ]),
    options: o,
    answer: a,
  );
}

// ─── Memory Match ─────────────────────────────────────────────────────────

class KidMemoryGame extends StatefulWidget {
  const KidMemoryGame({super.key, required this.args, required this.pairs, required this.colors, required this.misses});
  final NgmyArcadeArgs args;
  final int pairs;
  final List<Color> colors;

  /// Wrong pairs allowed before the round ends.
  final int misses;

  @override
  State<KidMemoryGame> createState() => _KidMemoryGameState();
}

class _KidMemoryGameState extends State<KidMemoryGame> {
  static const _faces = ['🐶', '🐱', '🦁', '🐸', '🐵', '🐼', '🦄', '🐙', '🐢', '🐝', '🍎', '🍌', '🍉', '🍓', '🚗', '🚀', '⚽', '🎈', '🌞', '⭐'];
  late final List<String> _cards;
  final _open = <int>{};
  final _done = <int>{};
  int? _first;
  bool _busy = false;
  int _missed = 0;

  @override
  void initState() {
    super.initState();
    final faces = (List.of(_faces)..shuffle(widget.args.rng)).take(widget.pairs).toList();
    _cards = [...faces, ...faces]..shuffle(widget.args.rng);
    widget.args.onProgress(0, widget.pairs);
  }

  void _tap(int i) {
    if (_busy || _open.contains(i) || _done.contains(i)) return;
    HapticFeedback.selectionClick();
    setState(() => _open.add(i));
    if (_first == null) {
      _first = i;
      return;
    }
    final a = _first!;
    _first = null;
    if (_cards[a] == _cards[i]) {
      setState(() => _done.addAll([a, i]));
      HapticFeedback.lightImpact();
      widget.args.onProgress(_done.length ~/ 2, widget.pairs);
      if (_done.length == _cards.length) Timer(const Duration(milliseconds: 400), widget.args.onComplete);
      return;
    }
    _busy = true;
    _missed++;
    Timer(const Duration(milliseconds: 800), () {
      if (!mounted) return;
      setState(() {
        _open
          ..remove(a)
          ..remove(i);
        _busy = false;
      });
      if (_missed >= widget.misses) widget.args.onKnockout('Too many misses — try again!');
    });
  }

  @override
  Widget build(BuildContext context) {
    final cols = _cards.length <= 12 ? 3 : 4;
    return Stack(children: [
      Positioned.fill(
        child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: widget.colors))),
      ),
      Column(children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 12, 14, 4),
          child: Row(children: [
            const Expanded(child: Text('Find the pairs!', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
            Text('Misses ${widget.misses - _missed}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
          ]),
        ),
        Expanded(
          child: Center(
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: AspectRatio(
                aspectRatio: cols / (_cards.length / cols).ceil(),
                child: GridView.count(
                  physics: const NeverScrollableScrollPhysics(),
                  crossAxisCount: cols,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  children: [
                    for (var i = 0; i < _cards.length; i++)
                      GestureDetector(
                        onTap: () => _tap(i),
                        child: TweenAnimationBuilder<double>(
                          tween: Tween(end: _open.contains(i) || _done.contains(i) ? 1 : 0),
                          duration: const Duration(milliseconds: 280),
                          builder: (_, v, __) => Transform(
                            alignment: Alignment.center,
                            transform: Matrix4.identity()
                              ..setEntry(3, 2, 0.002)
                              ..rotateY(math.pi * v),
                            child: Container(
                              decoration: BoxDecoration(
                                color: v > 0.5 ? (_done.contains(i) ? const Color(0xFFDCFCE7) : Colors.white) : const Color(0xFF7C3AED),
                                borderRadius: BorderRadius.circular(16),
                                border: Border.all(color: Colors.white, width: 3),
                                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.2), offset: const Offset(0, 4))],
                              ),
                              alignment: Alignment.center,
                              child: Transform(
                                alignment: Alignment.center,
                                transform: Matrix4.identity()..rotateY(v > 0.5 ? math.pi : 0),
                                child: Text(v > 0.5 ? _cards[i] : '❔', style: const TextStyle(fontSize: 34)),
                              ),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ]),
    ]);
  }
}

// ─── Letter Balloons ──────────────────────────────────────────────────────

class KidBalloonGame extends StatefulWidget {
  const KidBalloonGame({super.key, required this.args, required this.goal, required this.speed, required this.letters});
  final NgmyArcadeArgs args;
  final int goal;
  final double speed;
  final String letters;

  @override
  State<KidBalloonGame> createState() => _KidBalloonGameState();
}

class _Balloon {
  _Balloon(this.x, this.y, this.letter, this.color, this.wobble);
  double x, y;
  final String letter;
  final Color color;
  final double wobble;
  bool popped = false;
  double pop = 0;
}

class _KidBalloonGameState extends State<KidBalloonGame> with SingleTickerProviderStateMixin {
  late final AnimationController _loop = AnimationController(vsync: this, duration: const Duration(days: 1))..addListener(_tick);
  final _balloons = <_Balloon>[];
  late String _target;
  int _score = 0, _hearts = 3;
  Duration _last = Duration.zero;
  double _spawn = 0, _t = 0;
  bool _over = false;
  static const _cols = [Color(0xFFEF4444), Color(0xFFF59E0B), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFFA855F7), Color(0xFFEC4899)];

  @override
  void initState() {
    super.initState();
    _target = widget.letters[widget.args.rng.nextInt(widget.letters.length)];
    widget.args.onProgress(0, widget.goal);
    _loop.forward();
  }

  @override
  void dispose() {
    _loop.dispose();
    super.dispose();
  }

  void _tick() {
    if (_over) return;
    final now = _loop.lastElapsedDuration ?? Duration.zero;
    final dt = ((now - _last).inMicroseconds / 1e6).clamp(0.0, 0.05);
    _last = now;
    _t += dt;
    _spawn -= dt;
    final r = widget.args.rng;
    if (_spawn <= 0) {
      _spawn = 0.9 / widget.speed;
      // Make sure the target letter shows up often.
      final letter = r.nextInt(3) == 0 ? _target : widget.letters[r.nextInt(widget.letters.length)];
      _balloons.add(_Balloon(0.08 + r.nextDouble() * 0.84, 1.15, letter, _cols[r.nextInt(_cols.length)], r.nextDouble() * 6));
    }
    for (final b in _balloons) {
      if (b.popped) {
        b.pop += dt * 3;
      } else {
        b.y -= dt * 0.16 * widget.speed;
      }
    }
    _balloons.removeWhere((b) => b.y < -0.15 || b.pop >= 1);
    setState(() {});
  }

  void _tap(_Balloon b) {
    if (b.popped || _over) return;
    b.popped = true;
    if (b.letter == _target) {
      _score++;
      HapticFeedback.lightImpact();
      widget.args.onProgress(_score, widget.goal);
      if (_score >= widget.goal) {
        _over = true;
        widget.args.onComplete();
        return;
      }
      if (_score % 3 == 0) {
        final r = widget.args.rng;
        _target = widget.letters[r.nextInt(widget.letters.length)];
      }
    } else {
      _hearts--;
      HapticFeedback.heavyImpact();
      if (_hearts <= 0) {
        _over = true;
        widget.args.onKnockout('Popped the wrong letters');
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, box) {
      final w = box.maxWidth, h = box.maxHeight;
      final size = math.min(w, h) * 0.17;
      return Stack(children: [
        const Positioned.fill(
          child: DecoratedBox(
            decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7DD3FC), Color(0xFFE0F2FE)])),
          ),
        ),
        for (final b in _balloons)
          Positioned(
            left: b.x * w - size / 2 + math.sin(_t * 2 + b.wobble) * 8,
            top: b.y * h,
            child: GestureDetector(
              onTapDown: (_) => _tap(b),
              child: Opacity(
                opacity: (1 - b.pop).clamp(0.0, 1.0),
                child: Transform.scale(
                  scale: 1 + b.pop * 0.8,
                  child: SizedBox(
                    width: size,
                    height: size * 1.5,
                    child: Column(children: [
                      Container(
                        width: size,
                        height: size * 1.15,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.elliptical(size / 2, size * 0.6)),
                          gradient: RadialGradient(center: const Alignment(-0.4, -0.5), colors: [Colors.white, b.color], stops: const [0, 0.45]),
                        ),
                        child: Text(b.letter, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: size * 0.5, shadows: const [Shadow(blurRadius: 4)])),
                      ),
                      Container(width: 1.5, height: size * 0.3, color: Colors.black26),
                    ]),
                  ),
                ),
              ),
            ),
          ),
        Positioned(
          top: 10,
          left: 0,
          right: 0,
          child: Center(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999), boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 8)]),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                const Text('Pop  ', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: Color(0xFF374151))),
                Text(_target, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 28, color: Color(0xFF2563EB))),
                Text('   ⭐ $_score/${widget.goal}   ${'❤️' * _hearts.clamp(0, 3)}', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
              ]),
            ),
          ),
        ),
      ]);
    });
  }
}

// ─── The list ─────────────────────────────────────────────────────────────

VaultLvDef _quiz(String id, String title, String tagline, String emoji, IconData icon, List<Color> colors,
        KidQ Function(int level, int round, math.Random r) make) =>
    VaultLvDef(
      id: id,
      title: title,
      tagline: tagline,
      emoji: emoji,
      icon: icon,
      colors: colors,
      tag: 'LEARN',
      build: (a, l) => KidQuizGame(args: a, goal: lvI(l, 6, 14), colors: colors, title: title, lives: l > 20 ? 2 : 3, make: (round, r) => make(l, round, r)),
      seconds: (l) => lvI(l, 150, 70),
    );

final kVaultKidsGames = <VaultLvDef>[
  _quiz('kid_count', 'Count It', 'Count the things and tap the number.', '🔢', Icons.looks_one_rounded, const [Color(0xFFFB923C), Color(0xFFF43F5E)], _countQ),
  _quiz('kid_letters', 'First Letter', 'What letter does it start with?', '🔤', Icons.abc_rounded, const [Color(0xFF60A5FA), Color(0xFF6366F1)], _letterQ),
  _quiz('kid_colors', 'Colour Hunt', 'Learn your colours.', '🎨', Icons.palette_rounded, const [Color(0xFFF472B6), Color(0xFFA855F7)], _colorQ),
  _quiz('kid_shapes', 'Shape Finder', 'Circles, stars, hearts and more.', '🔺', Icons.category_rounded, const [Color(0xFF34D399), Color(0xFF0EA5E9)], _shapeQ),
  _quiz('kid_math', 'Fruit Maths', 'Add and take away with fruit.', '🍎', Icons.calculate_rounded, const [Color(0xFFFACC15), Color(0xFFF97316)], _mathQ),
  _quiz('kid_homes', 'Animal Homes', 'Where does each animal live?', '🐧', Icons.pets_rounded, const [Color(0xFF4ADE80), Color(0xFF16A34A)], _homeQ),
  _quiz('kid_swahili', 'Kiswahili Words', 'Jifunze maneno ya Kiswahili.', '🗣️', Icons.translate_rounded, const [Color(0xFF22D3EE), Color(0xFF0D9488)], _swahiliQ),
  _quiz('kid_bigsmall', 'Big or Small', 'Which one is bigger or smaller?', '🐘', Icons.unfold_more_rounded, const [Color(0xFFC084FC), Color(0xFF7C3AED)], _bigQ),
  _quiz('kid_spell', 'Missing Letter', 'Fill in the missing letter.', '✏️', Icons.spellcheck_rounded, const [Color(0xFFF87171), Color(0xFFDB2777)], _spellQ),
  _quiz('kid_pattern', 'What Comes Next', 'Finish the pattern.', '🧩', Icons.extension_rounded, const [Color(0xFF818CF8), Color(0xFF0EA5E9)], _patternQ),
  VaultLvDef(
    id: 'kid_memory',
    title: 'Memory Match',
    tagline: 'Flip the cards and find the pairs.',
    emoji: '🃏',
    icon: Icons.style_rounded,
    colors: const [Color(0xFFA78BFA), Color(0xFFEC4899)],
    tag: 'LEARN',
    build: (a, l) => KidMemoryGame(args: a, pairs: lvI(l, 3, 10), colors: const [Color(0xFFA78BFA), Color(0xFFEC4899)], misses: lvI(l, 10, 14)),
    seconds: (l) => lvI(l, 150, 80),
  ),
  VaultLvDef(
    id: 'kid_balloons',
    title: 'Letter Balloons',
    tagline: 'Pop the balloons with the right letter.',
    emoji: '🎈',
    icon: Icons.celebration_rounded,
    colors: const [Color(0xFF38BDF8), Color(0xFF6366F1)],
    tag: 'LEARN',
    build: (a, l) => KidBalloonGame(
      args: a,
      goal: lvI(l, 6, 18),
      speed: lvD(l, 0.8, 1.9),
      letters: l < 10 ? 'ABCDEF' : (l < 20 ? 'ABCDEFGHIJKL' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    ),
    seconds: (l) => lvI(l, 75, 60),
  ),
];
