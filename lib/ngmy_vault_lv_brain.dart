import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 31–40: quick brain games (more questions, less time, fewer
/// mistakes allowed as the levels go up).
VaultLvDef _quiz(String id, String title, String tagline, String emoji, IconData icon, List<Color> colors, String hint,
        ArcadeQ Function(int level, int round, math.Random r) make,
        {double optionFont = 18, int perQ = 14}) =>
    VaultLvDef(
      id: id,
      title: title,
      tagline: tagline,
      emoji: emoji,
      icon: icon,
      colors: colors,
      tag: 'BRAIN',
      build: (a, l) => ArcadeQuiz(
        args: a,
        goal: lvI(l, 5, 12),
        strikes: l > 20 ? 2 : 3,
        colors: colors,
        hint: hint,
        optionFontSize: optionFont,
        make: (round, r) => make(l, round, r),
      ),
      seconds: (l) => lvI(l, 5, 12) * lvI(l, perQ, (perQ * 0.5).round()) + 8,
    );

final kVaultBrainGames = <VaultLvDef>[
  _quiz('v_mental_chain', 'Mental Chain', 'Follow the chain of sums in your head.', '🧠', Icons.psychology_rounded, const [Color(0xFF6366F1), Color(0xFF1E1B4B)], 'Keep the total', _chainQ, perQ: 18),
  _quiz('v_time_add', 'Time Teller', 'Work out the time before or after.', '⏰', Icons.access_time_rounded, const [Color(0xFF14B8A6), Color(0xFF042F2E)], 'What time?', _timeQ),
  _quiz('v_units', 'Unit Switch', 'Convert between units fast.', '📏', Icons.straighten_rounded, const [Color(0xFF0EA5E9), Color(0xFF082F49)], 'Convert', _unitQ),
  _quiz('v_fraction', 'Fraction Pie', 'What part of the pie is coloured?', '🥧', Icons.pie_chart_rounded, const [Color(0xFFF59E0B), Color(0xFF451A03)], 'Which fraction?', _fractionQ, optionFont: 22),
  _quiz('v_shadow', 'Shadow Match', 'Whose shadow is it?', '👤', Icons.contrast_rounded, const [Color(0xFF64748B), Color(0xFF020617)], 'Whose shadow?', _shadowQ, optionFont: 28),
  _quiz('v_compass', 'Compass Walk', 'Follow the directions — where do you end up?', '🧭', Icons.explore_rounded, const [Color(0xFF22C55E), Color(0xFF052E16)], 'Where do you stop?', _compassQ, optionFont: 22, perQ: 20),
  _quiz('v_percent', 'Sale Shopper', 'Work out sale prices and tips.', '🏷️', Icons.local_offer_rounded, const [Color(0xFFEC4899), Color(0xFF500724)], 'How much?', _percentQ),
  _quiz('v_roman', 'Roman Numerals', 'Read and write Roman numbers.', '🏛️', Icons.account_balance_rounded, const [Color(0xFFD4AF37), Color(0xFF292524)], 'Roman numbers', _romanQ),
  _quiz('v_odd_word', 'Odd Word Out', 'Which word doesn’t belong?', '🙃', Icons.rule_rounded, const [Color(0xFFF97316), Color(0xFF431407)], 'Odd one out', _oddWordQ),
  _quiz('v_synonym', 'Same Meaning', 'Pick the word that means the same.', '📚', Icons.menu_book_rounded, const [Color(0xFFA855F7), Color(0xFF3B0764)], 'Same meaning', _synonymQ),
];

ArcadeQ _numQ(Widget prompt, int answer, math.Random r, {int spread = 6}) {
  final wrong = <String>{};
  while (wrong.length < 3) {
    final d = (1 + r.nextInt(spread)) * (r.nextBool() ? 1 : -1);
    if (answer + d != answer) wrong.add('${answer + d}');
  }
  final (opts, ans) = arcadeOptions('$answer', wrong, r);
  return ArcadeQ(prompt, opts, ans);
}

// 31 Mental Chain
ArcadeQ _chainQ(int level, int round, math.Random r) {
  var v = 2 + r.nextInt(lvI(level, 9, 25));
  final parts = <String>['$v'];
  final steps = lvI(level, 2, 6);
  for (var i = 0; i < steps; i++) {
    final op = r.nextInt(level > 10 ? 3 : 2);
    if (op == 0) {
      final n = 1 + r.nextInt(lvI(level, 9, 30));
      v += n;
      parts.add('+ $n');
    } else if (op == 1) {
      final n = 1 + r.nextInt(math.max(1, math.min(v, lvI(level, 9, 30))));
      v -= n;
      parts.add('− $n');
    } else {
      final n = 2 + r.nextInt(lvI(level, 2, 4));
      v *= n;
      parts.add('× $n');
    }
  }
  return _numQ(Text(parts.join('  '), style: const TextStyle(fontSize: 26)), v, r, spread: lvI(level, 4, 10));
}

// 32 Time Teller
String _clock(int mins) {
  final m = ((mins % 1440) + 1440) % 1440;
  final h24 = m ~/ 60, mm = m % 60;
  final h = h24 % 12 == 0 ? 12 : h24 % 12;
  return '$h:${mm.toString().padLeft(2, '0')} ${h24 < 12 ? 'AM' : 'PM'}';
}

ArcadeQ _timeQ(int level, int round, math.Random r) {
  final step = level < 10 ? 15 : 5;
  final start = r.nextInt(1440 ~/ step) * step;
  final delta = (1 + r.nextInt(lvI(level, 8, 60))) * step * (level > 15 && r.nextBool() ? -1 : 1);
  final ans = _clock(start + delta);
  final h = delta.abs() ~/ 60, m = delta.abs() % 60;
  final wrong = {_clock(start + delta + 60), _clock(start + delta - step), _clock(start - delta), _clock(start + delta + 12 * 60)}..remove(ans);
  final (opts, a) = arcadeOptions(ans, wrong, r);
  return ArcadeQ(
    Column(mainAxisSize: MainAxisSize.min, children: [
      Text(_clock(start), style: const TextStyle(fontSize: 34)),
      Text('${delta < 0 ? 'minus' : 'plus'} ${h > 0 ? '$h h ' : ''}${m > 0 ? '$m min' : ''}', style: const TextStyle(fontSize: 20, color: Color(0xFF99F6E4))),
    ]),
    opts,
    a,
  );
}

// 33 Unit Switch
ArcadeQ _unitQ(int level, int round, math.Random r) {
  final convs = <(String, String, int)>[
    ('m', 'cm', 100), ('km', 'm', 1000), ('kg', 'g', 1000), ('L', 'mL', 1000), ('hours', 'minutes', 60),
    ('minutes', 'seconds', 60), ('days', 'hours', 24), ('weeks', 'days', 7), ('feet', 'inches', 12), ('yards', 'feet', 3), ('dozen', 'items', 12),
  ];
  final c = convs[r.nextInt(math.min(convs.length, lvI(level, 5, convs.length)))];
  final n = 1 + r.nextInt(lvI(level, 9, 40));
  final reverse = level > 12 && r.nextBool();
  if (reverse) {
    final big = n * c.$3;
    return _numQ(Text('$big ${c.$2} = ? ${c.$1}', style: const TextStyle(fontSize: 26)), n, r, spread: 4);
  }
  return _numQ(Text('$n ${c.$1} = ? ${c.$2}', style: const TextStyle(fontSize: 26)), n * c.$3, r, spread: 3);
}

// 34 Fraction Pie
ArcadeQ _fractionQ(int level, int round, math.Random r) {
  final den = 2 + r.nextInt(lvI(level, 3, 11));
  final num = 1 + r.nextInt(den - 1);
  final ans = '$num/$den';
  final wrong = <String>{'${den - num}/$den', '$num/${den + 1}', '${num + 1}/$den', '$den/${den + num}'}..remove(ans);
  final (opts, a) = arcadeOptions(ans, wrong, r);
  return ArcadeQ(SizedBox(width: 160, height: 160, child: CustomPaint(painter: _PiePainter(num, den, level > 16))), opts, a);
}

class _PiePainter extends CustomPainter {
  _PiePainter(this.num, this.den, this.scatter);
  final int num, den;
  final bool scatter;
  @override
  void paint(Canvas canvas, Size s) {
    final rect = Offset.zero & s;
    final sweep = math.pi * 2 / den;
    // Harder levels: the coloured slices are not next to each other.
    final colored = <int>{};
    if (scatter) {
      for (var i = 0; colored.length < num; i += 2) {
        colored.add(i % den);
        if (i > den * 3) {
          for (var j = 0; colored.length < num; j++) {
            colored.add(j);
          }
        }
      }
    } else {
      for (var i = 0; i < num; i++) {
        colored.add(i);
      }
    }
    for (var i = 0; i < den; i++) {
      canvas.drawArc(rect, -math.pi / 2 + i * sweep, sweep, true, Paint()..color = colored.contains(i) ? const Color(0xFFF59E0B) : const Color(0xFFFEF3C7));
      canvas.drawArc(rect, -math.pi / 2 + i * sweep, sweep, true, Paint()
        ..style = PaintingStyle.stroke
        ..color = const Color(0xFF78350F)
        ..strokeWidth = 2);
    }
  }

  @override
  bool shouldRepaint(covariant _PiePainter old) => true;
}

// 35 Shadow Match
const _shadowPool = ['🐘', '🦒', '🐢', '🦀', '🐌', '🦋', '🐟', '🐇', '🦆', '🐿️', '🦔', '🐊', '🦕', '🐈', '🐎', '🦉', '🐙', '🦜', '✈️', '🚲', '🎸', '☂️', '🔑', '🍐', '🍄', '🌵', '⚓', '🏠', '🚀', '⛵'];

ArcadeQ _shadowQ(int level, int round, math.Random r) {
  final pool = _shadowPool.take(lvI(level, 12, _shadowPool.length)).toList();
  final ans = pool[r.nextInt(pool.length)];
  final (opts, a) = arcadeOptions(ans, pool, r);
  final angle = level > 18 ? (r.nextDouble() - 0.5) * 1.2 : 0.0;
  return ArcadeQ(
    Transform.rotate(
      angle: angle,
      child: ColorFiltered(colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn), child: Text(ans, style: TextStyle(fontSize: lvD(level, 110, 70)))),
    ),
    opts,
    a,
  );
}

// 36 Compass Walk
ArcadeQ _compassQ(int level, int round, math.Random r) {
  const n = 5;
  final steps = lvI(level, 2, 7);
  var x = 2, y = 2;
  final moves = <String>[];
  const names = {'N': (0, -1), 'S': (0, 1), 'E': (1, 0), 'W': (-1, 0)};
  for (var i = 0; i < steps; i++) {
    final opts = names.entries.where((e) {
      final nx = x + e.value.$1, ny = y + e.value.$2;
      return nx >= 0 && ny >= 0 && nx < n && ny < n;
    }).toList();
    final e = opts[r.nextInt(opts.length)];
    x += e.value.$1;
    y += e.value.$2;
    moves.add(e.key);
  }
  final end = y * n + x;
  final others = (List.generate(n * n, (i) => i)..remove(end)..remove(12)..shuffle(r)).take(3).toList();
  final picks = ([end, ...others]..shuffle(r));
  const letters = ['A', 'B', 'C', 'D'];
  final ansLetter = letters[picks.indexOf(end)];
  return ArcadeQ(
    Column(mainAxisSize: MainAxisSize.min, children: [
      Text(moves.join(' → '), style: const TextStyle(fontSize: 22)),
      const SizedBox(height: 8),
      SizedBox(
        width: 170,
        height: 170,
        child: GridView.count(
          crossAxisCount: n,
          physics: const NeverScrollableScrollPhysics(),
          children: [
            for (var i = 0; i < n * n; i++)
              Container(
                margin: const EdgeInsets.all(1.5),
                alignment: Alignment.center,
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(4)),
                child: Text(picks.contains(i) ? '${letters[picks.indexOf(i)]}${i == 12 ? '⭐' : ''}' : (i == 12 ? '⭐' : ''),
                    style: const TextStyle(fontSize: 14, color: Color(0xFFFDE68A))),
              ),
          ],
        ),
      ),
      const Text('Start at ⭐ · N is up', style: TextStyle(fontSize: 12, color: Colors.white60)),
    ]),
    letters,
    letters.indexOf(ansLetter),
  );
}

// 37 Sale Shopper
ArcadeQ _percentQ(int level, int round, math.Random r) {
  const pcts = [10, 20, 25, 50, 15, 30, 40, 75, 5];
  final pct = pcts[r.nextInt(lvI(level, 4, pcts.length))];
  final price = (2 + r.nextInt(lvI(level, 10, 80))) * (pct == 15 || pct == 5 ? 20 : 4);
  final off = price * pct ~/ 100;
  final mode = r.nextInt(level > 12 ? 3 : 2);
  final (q, ans) = switch (mode) {
    0 => ('\$$price, $pct% off. Sale price?', price - off),
    1 => ('$pct% of \$$price?', off),
    _ => ('\$$price + $pct% tip. Total?', price + off),
  };
  return _numQ(Text(q, style: const TextStyle(fontSize: 22)), ans, r, spread: math.max(2, price ~/ 10));
}

// 38 Roman Numerals
String _roman(int n) {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  final b = StringBuffer();
  var v = n;
  for (var i = 0; i < vals.length; i++) {
    while (v >= vals[i]) {
      b.write(syms[i]);
      v -= vals[i];
    }
  }
  return b.toString();
}

ArcadeQ _romanQ(int level, int round, math.Random r) {
  final n = 1 + r.nextInt(lvI(level, 20, 2000));
  if (r.nextBool()) {
    return _numQ(Text(_roman(n), style: const TextStyle(fontSize: 34, letterSpacing: 2)), n, r, spread: math.max(2, n ~/ 8));
  }
  final wrong = {_roman(n + 1), _roman(math.max(1, n - 1)), _roman(n + 10), _roman(n + 5)}..remove(_roman(n));
  final (opts, a) = arcadeOptions(_roman(n), wrong, r);
  return ArcadeQ(Text('$n', style: const TextStyle(fontSize: 40)), opts, a);
}

// 39 Odd Word Out
const _cats = <List<String>>[
  ['apple', 'banana', 'mango', 'grape', 'peach', 'cherry', 'lemon'],
  ['dog', 'cat', 'horse', 'cow', 'goat', 'sheep', 'rabbit'],
  ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'],
  ['car', 'bus', 'train', 'bike', 'truck', 'plane', 'boat'],
  ['piano', 'guitar', 'drum', 'violin', 'flute', 'trumpet', 'harp'],
  ['Paris', 'London', 'Tokyo', 'Nairobi', 'Lagos', 'Cairo', 'Rome'],
  ['shirt', 'jacket', 'dress', 'sock', 'scarf', 'hat', 'coat'],
  ['hammer', 'saw', 'drill', 'wrench', 'pliers', 'chisel', 'shovel'],
  ['soccer', 'tennis', 'golf', 'hockey', 'boxing', 'rugby', 'cricket'],
  ['Mars', 'Venus', 'Earth', 'Jupiter', 'Saturn', 'Mercury', 'Neptune'],
  ['oak', 'pine', 'maple', 'palm', 'birch', 'cedar', 'willow'],
  ['nurse', 'doctor', 'teacher', 'pilot', 'chef', 'farmer', 'lawyer'],
];

ArcadeQ _oddWordQ(int level, int round, math.Random r) {
  final ci = r.nextInt(_cats.length);
  var oi = r.nextInt(_cats.length - 1);
  if (oi >= ci) oi++;
  final group = (List.of(_cats[ci])..shuffle(r)).take(3).toList();
  final odd = _cats[oi][r.nextInt(_cats[oi].length)];
  final opts = [...group, odd]..shuffle(r);
  return ArcadeQ(const Text('Which one doesn’t belong?', style: TextStyle(fontSize: 24)), opts, opts.indexOf(odd));
}

// 40 Same Meaning
const _syn = <(String, String)>[
  ('happy', 'glad'), ('big', 'large'), ('fast', 'quick'), ('smart', 'clever'), ('begin', 'start'), ('end', 'finish'),
  ('angry', 'mad'), ('tired', 'sleepy'), ('shut', 'close'), ('gift', 'present'), ('rich', 'wealthy'), ('brave', 'bold'),
  ('little', 'small'), ('easy', 'simple'), ('scared', 'afraid'), ('pretty', 'lovely'), ('loud', 'noisy'), ('wise', 'sensible'),
  ('buy', 'purchase'), ('help', 'assist'), ('shout', 'yell'), ('quiet', 'silent'), ('wet', 'damp'), ('fix', 'repair'),
  ('error', 'mistake'), ('choose', 'select'), ('enormous', 'huge'), ('ancient', 'old'), ('rapid', 'swift'), ('honest', 'truthful'),
  ('reply', 'answer'), ('journey', 'trip'), ('famous', 'well-known'), ('gather', 'collect'), ('vanish', 'disappear'), ('tiny', 'minute'),
];

ArcadeQ _synonymQ(int level, int round, math.Random r) {
  final pool = _syn.take(lvI(level, 14, _syn.length)).toList();
  final p = pool[r.nextInt(pool.length)];
  final (opts, a) = arcadeOptions(p.$2, pool.map((e) => e.$2), r);
  return ArcadeQ(Text(p.$1.toUpperCase(), style: const TextStyle(fontSize: 34, letterSpacing: 1)), opts, a);
}
