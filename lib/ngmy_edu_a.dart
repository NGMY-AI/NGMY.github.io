import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import 'ngmy_studio_kit.dart';

Widget _banner(String text, Color c, {Widget? action}) => Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 10),
      decoration: BoxDecoration(color: c.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: c.withValues(alpha: 0.4))),
      child: Row(children: [
        Expanded(child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.4, fontWeight: FontWeight.w600))),
        if (action != null) ...[const SizedBox(width: 8), action],
      ]),
    );

// ═════════════════════════════════════════════════════════════════════════════
// MOLECULE MAKER: join atoms with bonds until every atom has all the bonds it needs.
// ═════════════════════════════════════════════════════════════════════════════

class MoleculeTarget {
  const MoleculeTarget(this.name, this.formula, this.atoms, this.fact);
  final String name;
  final String formula;
  final Map<String, int> atoms;
  final String fact;
}

const Map<String, (int, Color, String)> kElements = {
  'H': (1, Color(0xFFE5E7EB), 'Hydrogen'),
  'C': (4, Color(0xFF6B7280), 'Carbon'),
  'N': (3, Color(0xFF3B82F6), 'Nitrogen'),
  'O': (2, Color(0xFFEF4444), 'Oxygen'),
  'S': (2, Color(0xFFFACC15), 'Sulfur'),
  'Cl': (1, Color(0xFF22C55E), 'Chlorine'),
};

const List<MoleculeTarget> kMolecules = [
  MoleculeTarget('Hydrogen', 'H₂', {'H': 2}, 'The lightest gas there is. Two hydrogen atoms share one bond.'),
  MoleculeTarget('Hydrogen chloride', 'HCl', {'H': 1, 'Cl': 1}, 'Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.'),
  MoleculeTarget('Water', 'H₂O', {'H': 2, 'O': 1}, 'Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.'),
  MoleculeTarget('Ammonia', 'NH₃', {'N': 1, 'H': 3}, 'Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.'),
  MoleculeTarget('Methane', 'CH₄', {'C': 1, 'H': 4}, 'Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.'),
  MoleculeTarget('Hydrogen sulfide', 'H₂S', {'H': 2, 'S': 1}, 'Sulfur acts like oxygen. This gas smells like rotten eggs.'),
  MoleculeTarget('Oxygen', 'O₂', {'O': 2}, 'Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.'),
  MoleculeTarget('Nitrogen', 'N₂', {'N': 2}, 'Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.'),
  MoleculeTarget('Carbon dioxide', 'CO₂', {'C': 1, 'O': 2}, 'Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.'),
  MoleculeTarget('Formaldehyde', 'CH₂O', {'C': 1, 'H': 2, 'O': 1}, 'Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.'),
  MoleculeTarget('Ethene', 'C₂H₄', {'C': 2, 'H': 4}, 'Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.'),
  MoleculeTarget('Ethane', 'C₂H₆', {'C': 2, 'H': 6}, 'Two carbons joined by a single bond, each holding three hydrogens.'),
  MoleculeTarget('Methanol', 'CH₃OH', {'C': 1, 'H': 4, 'O': 1}, 'The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.'),
];

class _Atom {
  _Atom(this.sym, this.pos);
  final String sym;
  Offset pos;
}

/// Is this a finished molecule that matches the target? (Pure, so it can be tested.)
bool moleculeComplete(List<String> syms, Map<int, int> bonds, MoleculeTarget t) {
  if (syms.isEmpty) return false;
  final counts = <String, int>{};
  for (final s in syms) {
    counts[s] = (counts[s] ?? 0) + 1;
  }
  if (counts.length != t.atoms.length) return false;
  for (final e in t.atoms.entries) {
    if (counts[e.key] != e.value) return false;
  }
  final used = List<int>.filled(syms.length, 0);
  final adj = List.generate(syms.length, (_) => <int>[]);
  bonds.forEach((k, order) {
    final a = k ~/ 100, b = k % 100;
    used[a] += order;
    used[b] += order;
    adj[a].add(b);
    adj[b].add(a);
  });
  for (var i = 0; i < syms.length; i++) {
    if (used[i] != kElements[syms[i]]!.$1) return false;
  }
  final seen = <int>{0};
  final queue = [0];
  while (queue.isNotEmpty) {
    for (final n in adj[queue.removeLast()]) {
      if (seen.add(n)) queue.add(n);
    }
  }
  return seen.length == syms.length;
}

class NgmyMoleculeStudio extends StatefulWidget {
  const NgmyMoleculeStudio({super.key});

  @override
  State<NgmyMoleculeStudio> createState() => _NgmyMoleculeStudioState();
}

class _NgmyMoleculeStudioState extends State<NgmyMoleculeStudio> {
  int _level = 0;
  final List<_Atom> _atoms = [];
  final Map<int, int> _bonds = {};
  int? _sel;
  int? _drag;
  final Set<int> _done = {};
  Size _size = const Size(300, 300);

  MoleculeTarget get _target => kMolecules[_level];

  @override
  void initState() {
    super.initState();
    NgmyProgress.load('molecule_maker').then((m) {
      if (!mounted) return;
      setState(() => _done.addAll([for (final v in (m['done'] as List? ?? const [])) (v as num).toInt()]));
    });
  }

  int _used(int i) {
    var u = 0;
    _bonds.forEach((k, o) {
      if (k ~/ 100 == i || k % 100 == i) u += o;
    });
    return u;
  }

  bool get _complete => moleculeComplete([for (final a in _atoms) a.sym], _bonds, _target);

  void _add(String sym) {
    if (_atoms.length >= 12) return;
    final r = math.Random(_atoms.length * 7 + 3);
    final w = _size.width, h = _size.height;
    setState(() => _atoms.add(_Atom(sym, Offset(w * (0.2 + 0.6 * r.nextDouble()), h * (0.2 + 0.6 * r.nextDouble())))));
    NgmyTone.sfx('pop', _atoms.length, ms: 90, volume: 0.35);
  }

  void _clear() => setState(() {
        _atoms.clear();
        _bonds.clear();
        _sel = null;
      });

  int? _hit(Offset p) {
    for (var i = _atoms.length - 1; i >= 0; i--) {
      if ((_atoms[i].pos - p).distance < 30) return i;
    }
    return null;
  }

  void _tap(Offset p) {
    final i = _hit(p);
    setState(() {
      if (i == null) {
        _sel = null;
      } else if (_sel == null) {
        _sel = i;
      } else if (_sel == i) {
        _sel = null;
      } else {
        final a = math.min(_sel!, i), b = math.max(_sel!, i);
        final key = a * 100 + b;
        final cur = _bonds[key] ?? 0;
        final next = cur >= 3 ? 0 : cur + 1;
        if (next == 0) {
          _bonds.remove(key);
        } else {
          final freeA = kElements[_atoms[a].sym]!.$1 - _used(a) + cur;
          final freeB = kElements[_atoms[b].sym]!.$1 - _used(b) + cur;
          if (next <= freeA && next <= freeB) {
            _bonds[key] = next;
            NgmyTone.sfx('click', next * 3, ms: 70, volume: 0.35);
          } else {
            _bonds.remove(key);
          }
        }
        _sel = null;
        if (_complete && _done.add(_level)) {
          NgmyTone.sfx('zap', 12, ms: 300, volume: 0.5);
          NgmyProgress.save('molecule_maker', {'done': _done.toList()});
        }
      }
    });
  }

  void _removeSelected() {
    final s = _sel;
    if (s == null) return;
    setState(() {
      final keys = _bonds.keys.where((k) => k ~/ 100 == s || k % 100 == s).toList();
      for (final k in keys) {
        _bonds.remove(k);
      }
      // Re-number the bonds of atoms that come after the removed one.
      final shifted = <int, int>{};
      _bonds.forEach((k, o) {
        var a = k ~/ 100, b = k % 100;
        if (a > s) a--;
        if (b > s) b--;
        shifted[a * 100 + b] = o;
      });
      _bonds
        ..clear()
        ..addAll(shifted);
      _atoms.removeAt(s);
      _sel = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    final t = _target;
    final done = _complete;
    var open = 0;
    for (var i = 0; i < _atoms.length; i++) {
      open += kElements[_atoms[i].sym]!.$1 - _used(i);
    }
    final need = t.atoms.entries.map((e) => '${e.value} ${kElements[e.key]!.$3.toLowerCase()}').join(' + ');
    return StudioPage(
      title: 'MOLECULE MAKER',
      accent: const Color(0xFF2DD4BF),
      help: 'Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!',
      stage: Column(children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(10, 6, 10, 6),
          child: _banner(done ? '🎉 ${t.name} (${t.formula}) built! ${t.fact}' : 'Build ${t.name} (${t.formula}): $need. Open bonds left: $open.', done ? const Color(0xFF4ADE80) : const Color(0xFF2DD4BF),
              action: done && _level < kMolecules.length - 1
                  ? StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                        _level++;
                        _clear();
                      }))
                  : null),
        ),
        Expanded(
          child: LayoutBuilder(builder: (context, c) {
            _size = Size(c.maxWidth, c.maxHeight);
            return GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTapUp: (d) => _tap(d.localPosition),
              onPanStart: (d) => _drag = _hit(d.localPosition),
              onPanUpdate: (d) {
                final i = _drag;
                if (i == null) return;
                setState(() => _atoms[i].pos = Offset((_atoms[i].pos.dx + d.delta.dx).clamp(26, c.maxWidth - 26), (_atoms[i].pos.dy + d.delta.dy).clamp(26, c.maxHeight - 26)));
              },
              onPanEnd: (_) => _drag = null,
              child: CustomPaint(size: Size.infinite, painter: _MolPainter(_atoms, _bonds, _sel, _used)),
            );
          }),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'GOAL', children: [for (var i = 0; i < kMolecules.length; i++) StudioChip(label: '${_done.contains(i) ? '✓ ' : ''}${kMolecules[i].formula}', selected: _level == i, color: const Color(0xFF2DD4BF), onTap: () => setState(() {
                  _level = i;
                  _clear();
                }))]),
        StudioRow(label: 'ADD', children: [
          for (final e in kElements.entries)
            StudioChip(label: '${e.key} · ${e.value.$1}', selected: false, color: e.key == 'H' || e.key == 'C' ? const Color(0xFF9CA3AF) : e.value.$2, onTap: () => _add(e.key)),
        ]),
        StudioRow(children: [
          StudioChip(label: 'Remove selected atom', icon: Icons.delete_outline_rounded, selected: false, color: const Color(0xFFF87171), onTap: _removeSelected),
          StudioChip(label: 'Clear all', icon: Icons.refresh_rounded, selected: false, color: const Color(0xFFFBBF24), onTap: _clear),
        ]),
      ]),
    );
  }
}

class _MolPainter extends CustomPainter {
  _MolPainter(this.atoms, this.bonds, this.sel, this.used);
  final List<_Atom> atoms;
  final Map<int, int> bonds;
  final int? sel;
  final int Function(int) used;

  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 0; i < 6; i++) {
      canvas.drawCircle(Offset(size.width * (0.15 + 0.7 * ((i * 37) % 10) / 10), size.height * (0.1 + 0.8 * ((i * 53) % 10) / 10)), 60 + i * 12, Paint()..color = const Color(0xFF2DD4BF).withValues(alpha: 0.03));
    }
    bonds.forEach((k, order) {
      final a = atoms[k ~/ 100].pos, b = atoms[k % 100].pos;
      final d = b - a;
      final n = Offset(-d.dy, d.dx) / math.max(d.distance, 1);
      for (var j = 0; j < order; j++) {
        final off = n * ((j - (order - 1) / 2) * 8);
        canvas.drawLine(a + off, b + off, Paint()..color = Colors.white70..strokeWidth = 4..strokeCap = StrokeCap.round);
      }
    });
    for (var i = 0; i < atoms.length; i++) {
      final at = atoms[i];
      final el = kElements[at.sym]!;
      final free = el.$1 - used(i);
      final r = Rect.fromCircle(center: at.pos, radius: 26);
      if (sel == i) canvas.drawCircle(at.pos, 34, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.4)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      canvas.drawCircle(at.pos, 26, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.5), colors: [Color.lerp(el.$2, Colors.white, 0.5)!, el.$2, Color.lerp(el.$2, Colors.black, 0.5)!], stops: const [0, 0.5, 1]).createShader(r));
      final tp = TextPainter(text: TextSpan(text: at.sym, style: TextStyle(color: at.sym == 'H' || at.sym == 'S' ? const Color(0xFF111827) : Colors.white, fontWeight: FontWeight.w900, fontSize: 19)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, at.pos - Offset(tp.width / 2, tp.height / 2));
      final bc = free == 0 ? const Color(0xFF22C55E) : const Color(0xFFF59E0B);
      canvas.drawCircle(at.pos + const Offset(20, -20), 10, Paint()..color = bc);
      final bt = TextPainter(text: TextSpan(text: free == 0 ? '✓' : '$free', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)), textDirection: TextDirection.ltr)..layout();
      bt.paint(canvas, at.pos + Offset(20 - bt.width / 2, -20 - bt.height / 2));
    }
    if (atoms.isEmpty) {
      final tp = TextPainter(text: const TextSpan(text: 'Add atoms with the buttons below', style: TextStyle(color: Colors.white38, fontSize: 15, fontWeight: FontWeight.w700)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, Offset((size.width - tp.width) / 2, size.height / 2));
    }
  }

  @override
  bool shouldRepaint(covariant _MolPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// DNA LAB: copy DNA, turn it into RNA, then read it to build a protein.
// ═════════════════════════════════════════════════════════════════════════════

const String _kCodonOrder = 'TCAG';
const String _kCodonAmino = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
const Map<String, String> kAminoNames = {
  'F': 'Phenylalanine', 'L': 'Leucine', 'S': 'Serine', 'Y': 'Tyrosine', 'C': 'Cysteine', 'W': 'Tryptophan', 'P': 'Proline', 'H': 'Histidine',
  'Q': 'Glutamine', 'R': 'Arginine', 'I': 'Isoleucine', 'M': 'Methionine', 'T': 'Threonine', 'N': 'Asparagine', 'K': 'Lysine', 'V': 'Valine',
  'A': 'Alanine', 'D': 'Aspartate', 'E': 'Glutamate', 'G': 'Glycine',
};

/// The amino acid letter for an RNA codon like "AUG" ('*' for stop).
String codonToAmino(String rna) {
  final dna = rna.replaceAll('U', 'T');
  final a = _kCodonOrder.indexOf(dna[0]), b = _kCodonOrder.indexOf(dna[1]), c = _kCodonOrder.indexOf(dna[2]);
  return _kCodonAmino[a * 16 + b * 4 + c];
}

String dnaPartner(String b) => const {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}[b]!;
String rnaPartner(String b) => const {'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C'}[b]!;

class NgmyDnaStudio extends StatefulWidget {
  const NgmyDnaStudio({super.key});

  @override
  State<NgmyDnaStudio> createState() => _NgmyDnaStudioState();
}

class _NgmyDnaStudioState extends State<NgmyDnaStudio> {
  int _mode = 0;
  int _round = 0;
  String _dna = '';
  final List<String> _typed = [];
  String _msg = '';
  int _score = 0;
  int _best = 0;
  List<String> _options = [];

  static const _bases = ['A', 'T', 'C', 'G'];
  static const _modes = ['1 · Copy DNA', '2 · Make RNA', '3 · Build a protein'];

  @override
  void initState() {
    super.initState();
    _newRound();
    NgmyProgress.load('dna_lab').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 0);
    });
  }

  String get _rna => [for (final c in _dna.split('')) rnaPartner(c)].join();

  List<String> get _codons => [for (var i = 0; i < 9; i += 3) _rna.substring(i, i + 3)];

  void _newRound() {
    final r = math.Random(_round * 31 + _mode * 7 + DateTime.now().millisecond);
    String make() => List.generate(9, (_) => _bases[r.nextInt(4)]).join();
    var s = make();
    // The strand for protein building starts with the START codon and has no STOP codons.
    if (_mode == 2) {
      while (true) {
        s = 'TAC${make().substring(3)}';
        final cs = [for (var i = 0; i < 9; i += 3) [for (final c in s.substring(i, i + 3).split('')) rnaPartner(c)].join()];
        if (!cs.any((c) => codonToAmino(c) == '*')) break;
      }
    }
    _dna = s;
    _typed.clear();
    _msg = '';
    _options = [];
    if (_mode == 2) _pickOptions();
  }

  void _pickOptions() {
    final i = _typed.length;
    if (i >= 3) {
      _options = [];
      return;
    }
    final right = codonToAmino(_codons[i]);
    final all = kAminoNames.keys.where((k) => k != right).toList()..shuffle(math.Random(i + _round));
    _options = ([right, ...all.take(3)])..shuffle(math.Random(_round * 3 + i));
  }

  int get _need => _mode == 2 ? 3 : 9;
  bool get _finished => _typed.length >= _need;

  void _answer(String a) {
    if (_finished) return;
    final i = _typed.length;
    final right = switch (_mode) { 0 => dnaPartner(_dna[i]), 1 => rnaPartner(_dna[i]), _ => codonToAmino(_codons[i]) };
    setState(() {
      if (a == right) {
        _typed.add(a);
        _score++;
        if (_score > _best) {
          _best = _score;
          NgmyProgress.save('dna_lab', {'best': _best});
        }
        NgmyTone.sfx('click', 4 + i, ms: 90, volume: 0.4);
        _msg = switch (_mode) {
          0 => '${_dna[i]} always pairs with $right.',
          1 => 'RNA copies the DNA, but swaps T for U. ${_dna[i]} → $right.',
          _ => '${_codons[i]} codes for ${kAminoNames[right]}.',
        };
        if (_mode == 2) _pickOptions();
        if (_finished) _msg = _mode == 2 ? 'Protein built: ${[for (final x in _typed) kAminoNames[x]].join(' – ')}. Cells do this thousands of times a second.' : 'Perfect copy! Next: try another strand.';
      } else {
        _score = 0;
        NgmyTone.sfx('buzz', 0, ms: 160, volume: 0.35);
        _msg = switch (_mode) {
          0 => 'Not quite. Remember: A pairs with T, and C pairs with G.',
          1 => 'Not quite. RNA pairs A with U, T with A, C with G and G with C.',
          _ => 'Not quite. Look the codon up on the codon wheel: the first two letters pick the row.',
        };
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget tile(String t, Color c, {bool ghost = false}) => Container(
          width: 30,
          height: 40,
          margin: const EdgeInsets.all(2),
          alignment: Alignment.center,
          decoration: BoxDecoration(color: ghost ? Colors.white10 : c, borderRadius: BorderRadius.circular(8), border: ghost ? Border.all(color: Colors.white24) : null),
          child: Text(t, style: TextStyle(color: ghost ? Colors.white24 : Colors.black, fontWeight: FontWeight.w900, fontSize: 17)),
        );
    Color baseColor(String b) => const {'A': Color(0xFFF87171), 'T': Color(0xFF60A5FA), 'U': Color(0xFF60A5FA), 'C': Color(0xFFFBBF24), 'G': Color(0xFF4ADE80)}[b] ?? Colors.white;
    final top = _mode == 2 ? _rna : _dna;
    final topLabel = _mode == 2 ? 'RNA (read three letters at a time)' : 'DNA strand';
    final bottomLabel = _mode == 0 ? 'Your copy (the other strand)' : (_mode == 1 ? 'Your RNA' : 'Your protein');
    return StudioPage(
      title: 'DNA LAB',
      accent: const Color(0xFFF472B6),
      help: 'DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 · Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 · Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 · Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.',
      stage: SingleChildScrollView(
        padding: const EdgeInsets.all(14),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(topLabel, style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
          const SizedBox(height: 4),
          if (_mode == 2)
            Wrap(children: [
              for (var c = 0; c < 3; c++)
                Container(
                  margin: const EdgeInsets.only(right: 8, bottom: 6),
                  padding: const EdgeInsets.all(4),
                  decoration: BoxDecoration(color: _typed.length == c ? const Color(0xFFF472B6).withValues(alpha: 0.18) : Colors.transparent, borderRadius: BorderRadius.circular(10), border: Border.all(color: _typed.length == c ? const Color(0xFFF472B6) : Colors.white12)),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [for (final b in _codons[c].split('')) tile(b, baseColor(b))]),
                ),
            ])
          else
            Wrap(children: [for (final b in top.split('')) tile(b, baseColor(b))]),
          if (_mode != 2) ...[
            Padding(padding: const EdgeInsets.symmetric(vertical: 2), child: Wrap(children: [for (var i = 0; i < 9; i++) SizedBox(width: 34, child: Center(child: Icon(Icons.more_vert_rounded, size: 14, color: i < _typed.length ? Colors.white54 : Colors.white12)))])),
          ],
          const SizedBox(height: 6),
          Text(bottomLabel, style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
          const SizedBox(height: 4),
          if (_mode == 2)
            Wrap(spacing: 8, runSpacing: 6, children: [
              for (var i = 0; i < 3; i++)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                  decoration: BoxDecoration(color: i < _typed.length ? const Color(0xFF4ADE80).withValues(alpha: 0.25) : Colors.white10, borderRadius: BorderRadius.circular(12), border: Border.all(color: i < _typed.length ? const Color(0xFF4ADE80) : Colors.white24)),
                  child: Text(i < _typed.length ? kAminoNames[_typed[i]]! : '?', style: TextStyle(color: i < _typed.length ? Colors.white : Colors.white38, fontWeight: FontWeight.w900)),
                ),
            ])
          else
            Wrap(children: [for (var i = 0; i < 9; i++) i < _typed.length ? tile(_typed[i], baseColor(_typed[i])) : tile('?', Colors.white, ghost: true)]),
          const SizedBox(height: 14),
          if (_msg.isNotEmpty) _banner(_msg, _finished ? const Color(0xFF4ADE80) : const Color(0xFFF472B6)) else _banner(_mode == 0 ? 'Tap the letter that pairs with the first letter of the strand.' : (_mode == 1 ? 'Turn each DNA letter into its RNA partner.' : 'Choose the amino acid that this codon codes for. AUG is the START codon.'), const Color(0xFFF472B6)),
          const SizedBox(height: 10),
          Text('In a row: $_score    Best: $_best', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800)),
        ]),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [for (var i = 0; i < 3; i++) StudioChip(label: _modes[i], selected: _mode == i, color: const Color(0xFFF472B6), onTap: () => setState(() {
                  _mode = i;
                  _round++;
                  _newRound();
                }))]),
        if (_finished)
          Align(alignment: Alignment.centerLeft, child: StudioButton(icon: Icons.refresh_rounded, label: 'New strand', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _round++;
                _newRound();
              })))
        else if (_mode == 2)
          Wrap(spacing: 8, runSpacing: 8, children: [for (final o in _options) StudioButton(icon: Icons.biotech_rounded, label: kAminoNames[o]!, color: const Color(0xFFF472B6), onTap: () => _answer(o))])
        else
          Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [for (final b in (_mode == 0 ? const ['A', 'T', 'C', 'G'] : const ['A', 'U', 'C', 'G'])) GestureDetector(onTap: () => _answer(b), child: Container(width: 64, height: 54, alignment: Alignment.center, decoration: BoxDecoration(color: baseColor(b), borderRadius: BorderRadius.circular(14)), child: Text(b, style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 24))))]),
      ]),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// ECOSYSTEM LAB: grass, rabbits and foxes. Change one thing and watch the rest react.
// ═════════════════════════════════════════════════════════════════════════════

/// One small step of the grass / rabbit / fox model. Values are [grass, rabbits, foxes].
List<double> ecoStep(List<double> s, double dt, {double grow = 1, double breed = 1, double hunt = 1}) {
  final g = s[0], r = s[1], f = s[2];
  final dG = grow * (100 - g) * 0.05 - 0.0016 * r * g;
  final dR = 0.9 * breed * r * g / (g + 40) - 0.019 * hunt * r * f - 0.35 * r;
  final dF = 0.01 * hunt * r * f - 0.4 * f;
  return [(g + dG * dt).clamp(0.0, 100.0), (r + dR * dt).clamp(0.0, 400.0), (f + dF * dt).clamp(0.0, 200.0)];
}

class NgmyEcosystemStudio extends StatefulWidget {
  const NgmyEcosystemStudio({super.key});

  @override
  State<NgmyEcosystemStudio> createState() => _NgmyEcosystemStudioState();
}

class _NgmyEcosystemStudioState extends State<NgmyEcosystemStudio> with SingleTickerProviderStateMixin {
  late final Ticker _tick;
  Duration _last = Duration.zero;
  List<double> _s = [80, 30, 6];
  final List<List<double>> _hist = [];
  double _t = 0;
  double _grow = 1, _breed = 1, _hunt = 1;
  double _survived = 0;
  double _best = 0;
  String _note = 'Grass feeds rabbits, rabbits feed foxes. Keep all three alive!';

  @override
  void initState() {
    super.initState();
    _tick = createTicker(_onTick)..start();
    NgmyProgress.load('ecosystem').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toDouble() ?? 0);
    });
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  bool get _alive => _s[1] >= 1 && _s[2] >= 0.5;

  void _onTick(Duration d) {
    final dt = math.min((d - _last).inMicroseconds / 1e6, 0.05);
    _last = d;
    if (dt <= 0) return;
    for (var i = 0; i < 4; i++) {
      _s = ecoStep(_s, dt * 1.5 / 4, grow: _grow, breed: _breed, hunt: _hunt);
    }
    _t += dt;
    if (_hist.isEmpty || _t - (_hist.last[3]) > 0.25) {
      _hist.add([..._s, _t]);
      if (_hist.length > 160) _hist.removeAt(0);
    }
    if (_alive) {
      _survived += dt;
      if (_survived > _best) {
        _best = _survived;
        if (_best.floor() % 5 == 0) NgmyProgress.save('ecosystem', {'best': _best});
      }
    }
    _explain();
    setState(() {});
  }

  void _explain() {
    final g = _s[0], r = _s[1], f = _s[2];
    if (r < 1) {
      _note = 'The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset.';
    } else if (f < 0.5) {
      _note = 'The foxes died out. With no predators, rabbits breed freely and will eat all the grass.';
    } else if (g < 15) {
      _note = 'The grass is nearly eaten. Too many rabbits, so soon many will starve.';
    } else if (r > 120) {
      _note = 'Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number.';
    } else if (f > 18) {
      _note = 'Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop.';
    } else {
      _note = 'A balanced ecosystem. Notice the populations rise and fall in turn: more prey → more predators → less prey → fewer predators.';
    }
  }

  void _event(String what) {
    setState(() {
      switch (what) {
        case 'drought':
          _s = [_s[0] * 0.2, _s[1], _s[2]];
        case 'disease':
          _s = [_s[0], _s[1] * 0.3, _s[2]];
        case 'foxes':
          _s = [_s[0], _s[1], _s[2] + 12];
        case 'rabbits':
          _s = [_s[0], _s[1] + 40, _s[2]];
      }
    });
    NgmyTone.sfx('pop', 3, ms: 120, volume: 0.4);
  }

  void _reset() => setState(() {
        _s = [80, 30, 6];
        _hist.clear();
        _t = 0;
        _survived = 0;
        _grow = 1;
        _breed = 1;
        _hunt = 1;
      });

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'ECOSYSTEM LAB',
      accent: const Color(0xFF4ADE80),
      help: 'A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(10, 6, 10, 4), child: _banner(_note, _alive ? const Color(0xFF4ADE80) : const Color(0xFFF87171))),
        Expanded(child: Padding(padding: const EdgeInsets.fromLTRB(10, 0, 10, 4), child: ClipRRect(borderRadius: BorderRadius.circular(18), child: CustomPaint(size: Size.infinite, painter: _EcoPainter(_s, _hist, _t)))),),
        Padding(
          padding: const EdgeInsets.only(bottom: 6),
          child: Text('Alive together: ${_survived.round()} s     Best: ${_best.round()} s', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, fontSize: 12.5)),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Grass growth', value: _grow, min: 0.2, max: 2, display: '${_grow.toStringAsFixed(1)}×', color: const Color(0xFF4ADE80), onChanged: (v) => setState(() => _grow = v)),
        StudioSlider(label: 'Rabbit breeding', value: _breed, min: 0.3, max: 2, display: '${_breed.toStringAsFixed(1)}×', color: const Color(0xFFE5E7EB), onChanged: (v) => setState(() => _breed = v)),
        StudioSlider(label: 'Fox hunting', value: _hunt, min: 0.3, max: 2, display: '${_hunt.toStringAsFixed(1)}×', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _hunt = v)),
        StudioRow(children: [
          StudioChip(label: 'Drought', icon: Icons.wb_sunny_rounded, selected: false, color: const Color(0xFFFBBF24), onTap: () => _event('drought')),
          StudioChip(label: 'Disease', icon: Icons.sick_rounded, selected: false, color: const Color(0xFFA78BFA), onTap: () => _event('disease')),
          StudioChip(label: '+ Foxes', selected: false, color: const Color(0xFFFB923C), onTap: () => _event('foxes')),
          StudioChip(label: '+ Rabbits', selected: false, color: const Color(0xFFE5E7EB), onTap: () => _event('rabbits')),
          StudioChip(label: 'Reset', icon: Icons.refresh_rounded, selected: false, color: const Color(0xFF38BDF8), onTap: _reset),
        ]),
      ]),
    );
  }
}

class _EcoPainter extends CustomPainter {
  _EcoPainter(this.s, this.hist, this.t);
  final List<double> s;
  final List<List<double>> hist;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final meadowH = size.height * 0.5;
    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, meadowH), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7DD3FC), Color(0xFFBAE6FD)]).createShader(Rect.fromLTWH(0, 0, size.width, meadowH)));
    final green = Color.lerp(const Color(0xFF854D0E), const Color(0xFF22C55E), (s[0] / 100).clamp(0, 1))!;
    canvas.drawRect(Rect.fromLTWH(0, meadowH * 0.55, size.width, meadowH * 0.45), Paint()..color = green);
    final blades = (s[0] * 0.9).round();
    final rnd = math.Random(5);
    for (var i = 0; i < blades; i++) {
      final x = rnd.nextDouble() * size.width, y = meadowH * (0.6 + 0.4 * rnd.nextDouble());
      canvas.drawLine(Offset(x, y), Offset(x + math.sin(t * 2 + i) * 2, y - 8 - rnd.nextDouble() * 8), Paint()..color = const Color(0xFF166534)..strokeWidth = 1.6);
    }
    void animals(int count, String emoji, double size0, double seed, double yBase) {
      final r = math.Random(seed.toInt());
      for (var i = 0; i < count; i++) {
        final speed = 0.2 + r.nextDouble() * 0.3;
        final x = ((r.nextDouble() + t * speed * 0.05 * (i.isEven ? 1 : -1)) % 1.0) * size.width;
        final y = yBase + r.nextDouble() * meadowH * 0.25 + math.sin(t * 4 + i * 2).abs() * -4;
        final tp = TextPainter(text: TextSpan(text: emoji, style: TextStyle(fontSize: size0)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, Offset(x - tp.width / 2, y));
      }
    }

    animals(math.min(s[1].round(), 40), '🐇', 17, 1, meadowH * 0.5);
    animals(math.min(s[2].round(), 20), '🦊', 22, 2, meadowH * 0.45);

    // The chart.
    final chart = Rect.fromLTWH(10, meadowH + 10, size.width - 20, size.height - meadowH - 20);
    canvas.drawRect(Rect.fromLTWH(0, meadowH, size.width, size.height - meadowH), Paint()..color = const Color(0xFF0B1210));
    final grid = Paint()..color = Colors.white10;
    for (var i = 0; i <= 4; i++) {
      canvas.drawLine(Offset(chart.left, chart.top + chart.height * i / 4), Offset(chart.right, chart.top + chart.height * i / 4), grid);
    }
    void line(int idx, double maxV, Color c) {
      if (hist.length < 2) return;
      final p = Path();
      for (var i = 0; i < hist.length; i++) {
        final x = chart.left + chart.width * i / 159;
        final y = chart.bottom - chart.height * (hist[i][idx] / maxV).clamp(0, 1);
        i == 0 ? p.moveTo(x, y) : p.lineTo(x, y);
      }
      canvas.drawPath(p, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.6..color = c..strokeJoin = StrokeJoin.round);
    }

    line(0, 100, const Color(0xFF22C55E));
    line(1, 120, const Color(0xFFE5E7EB));
    line(2, 24, const Color(0xFFFB923C));
    void legend(String text, Color c, double x) {
      final tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: c, fontSize: 11, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, Offset(x, chart.top + 2));
    }

    legend('Grass ${s[0].round()}', const Color(0xFF22C55E), chart.left + 6);
    legend('Rabbits ${s[1].round()}', const Color(0xFFE5E7EB), chart.left + 92);
    legend('Foxes ${s[2].round()}', const Color(0xFFFB923C), chart.left + 190);
  }

  @override
  bool shouldRepaint(covariant _EcoPainter old) => true;
}
