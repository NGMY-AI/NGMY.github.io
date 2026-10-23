import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_play_data.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// DINOSAURS: a timeline, a size chart next to you, and a quiz.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyDinoStudio extends StatefulWidget {
  const NgmyDinoStudio({super.key});

  @override
  State<NgmyDinoStudio> createState() => _NgmyDinoStudioState();
}

class _NgmyDinoStudioState extends State<NgmyDinoStudio> {
  String _era = '';
  String _diet = '';
  PlayDino? _sel;
  bool _quiz = false;
  PlayDino? _q;
  int _score = 0;
  int _asked = 0;
  String _feedback = '';
  final math.Random _rnd = math.Random();

  static const _eraColor = {'Triassic': Color(0xFFFB923C), 'Jurassic': Color(0xFF4ADE80), 'Cretaceous': Color(0xFF38BDF8)};
  static const _dietColor = {'meat': Color(0xFFF87171), 'plants': Color(0xFF4ADE80), 'fish': Color(0xFF38BDF8)};

  List<PlayDino> get _list => [
        for (final d in kDinos)
          if ((_era.isEmpty || d.when == _era) && (_diet.isEmpty || d.diet == _diet)) d,
      ];

  void _roar(PlayDino d) {
    final low = 70 + (30 / math.max(1, d.lengthM)) * 12;
    NgmyTone.play(low.toDouble(), ms: 700, sweep: -0.5, wave: 'saw', volume: 0.5);
    NgmyTone.play(low * 0.5, ms: 600, wave: 'noise', volume: 0.35);
  }

  void _ask() {
    setState(() {
      _q = kDinos[_rnd.nextInt(kDinos.length)];
      _feedback = '';
    });
  }

  void _answer(String diet) {
    final q = _q;
    if (q == null) return;
    final ok = q.diet == diet;
    setState(() {
      _asked++;
      if (ok) _score++;
      _feedback = ok ? 'Correct! ${q.name} eats ${q.diet == 'meat' ? 'meat' : (q.diet == 'fish' ? 'fish' : 'plants')}.' : 'Not quite. ${q.name} eats ${q.diet == 'meat' ? 'meat' : (q.diet == 'fish' ? 'fish' : 'plants')}.';
    });
    NgmyTone.chord('bell', ok ? [0, 4, 7, 12] : [0, 1], ms: 700, volume: 0.5);
    later(1600, _ask);
  }

  void later(int ms, VoidCallback fn) => Future<void>.delayed(Duration(milliseconds: ms), () {
        if (mounted) fn();
      });

  @override
  Widget build(BuildContext context) {
    final list = _list;
    final maxLen = list.isEmpty ? 1.0 : list.map((d) => d.lengthM).reduce(math.max);
    return StudioPage(
      title: 'DINOSAURS',
      accent: const Color(0xFF4ADE80),
      help: 'Dinosaurs lived from about 230 to 66 million years ago, in three long ages: Triassic, Jurassic and Cretaceous. Humans only appeared about 300,000 years ago, so no person ever met a dinosaur!\n\nTap a dinosaur to hear a roar and read about it. The bars show real length. The small person line is you (1.7 m) for comparison.\n\nTurn on Quiz and guess whether each dinosaur ate meat, plants or fish.',
      stage: _quiz
          ? Center(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Text('Score $_score / $_asked', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800)),
                  const SizedBox(height: 14),
                  Text(_q?.emoji ?? '🦖', style: const TextStyle(fontSize: 84)),
                  const SizedBox(height: 8),
                  Text(_q?.name ?? 'Press Start', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w900)),
                  Text(_q == null ? '' : '${_q!.when}, ${_q!.lengthM} m long', style: const TextStyle(color: Colors.white54)),
                  const SizedBox(height: 14),
                  Text(_feedback, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w800, fontSize: 15)),
                  const SizedBox(height: 14),
                  if (_q == null)
                    StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: _ask)
                  else
                    Wrap(spacing: 10, children: [
                      StudioButton(icon: Icons.restaurant_rounded, label: 'Meat', color: const Color(0xFFF87171), onTap: () => _answer('meat')),
                      StudioButton(icon: Icons.eco_rounded, label: 'Plants', color: const Color(0xFF4ADE80), onTap: () => _answer('plants')),
                      StudioButton(icon: Icons.set_meal_rounded, label: 'Fish', color: const Color(0xFF38BDF8), onTap: () => _answer('fish')),
                    ]),
                ]),
              ),
            )
          : Column(children: [
              Expanded(
                child: ListView.builder(
                  padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
                  itemCount: list.length,
                  itemBuilder: (context, i) {
                    final d = list[i];
                    final col = _eraColor[d.when]!;
                    final sel = identical(_sel, d);
                    return GestureDetector(
                      onTap: () {
                        setState(() => _sel = d);
                        _roar(d);
                      },
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 7),
                        padding: const EdgeInsets.all(9),
                        decoration: BoxDecoration(color: col.withValues(alpha: sel ? 0.2 : 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: sel ? col : col.withValues(alpha: 0.25))),
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Row(children: [
                            Text(d.emoji, style: const TextStyle(fontSize: 22)),
                            const SizedBox(width: 8),
                            Expanded(child: Text(d.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14))),
                            Text('${d.mya.round()} million years ago', style: TextStyle(color: col, fontSize: 11, fontWeight: FontWeight.w800)),
                          ]),
                          const SizedBox(height: 6),
                          LayoutBuilder(builder: (context, box) {
                            final w = box.maxWidth;
                            return SizedBox(
                              height: 16,
                              child: Stack(children: [
                                Container(width: w * (d.lengthM / maxLen).clamp(0.02, 1.0), decoration: BoxDecoration(color: _dietColor[d.diet], borderRadius: BorderRadius.circular(5))),
                                Positioned(left: w * (1.7 / maxLen).clamp(0.0, 1.0), top: 0, bottom: 0, child: Container(width: 2, color: Colors.white)),
                              ]),
                            );
                          }),
                          const SizedBox(height: 3),
                          Text('${d.lengthM} m  ·  ${d.diet == 'meat' ? 'eats meat' : (d.diet == 'fish' ? 'eats fish' : 'eats plants')}${d.lengthM >= 1.7 ? '  ·  ${(d.lengthM / 1.7).toStringAsFixed(1)} people long' : ''}', style: const TextStyle(color: Colors.white54, fontSize: 11)),
                          if (sel) Padding(padding: const EdgeInsets.only(top: 4), child: Text(d.fact, style: const TextStyle(color: Colors.white, fontSize: 12.5, height: 1.35))),
                        ]),
                      ),
                    );
                  },
                ),
              ),
            ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: _quiz ? 'Quiz on' : 'Quiz', icon: Icons.quiz_rounded, selected: _quiz, color: const Color(0xFFFBBF24), onTap: () => setState(() {
                _quiz = !_quiz;
                _score = 0;
                _asked = 0;
                _q = null;
                _feedback = '';
              })),
          for (final e in const ['', 'Triassic', 'Jurassic', 'Cretaceous'])
            StudioChip(label: e.isEmpty ? 'All ages' : e, selected: _era == e, color: e.isEmpty ? const Color(0xFF9CA3AF) : _eraColor[e]!, onTap: () => setState(() => _era = e)),
        ]),
        StudioRow(children: [
          for (final e in const ['', 'meat', 'plants', 'fish'])
            StudioChip(label: e.isEmpty ? 'All diets' : (e == 'meat' ? 'Meat eaters' : (e == 'plants' ? 'Plant eaters' : 'Fish eaters')), selected: _diet == e, color: e.isEmpty ? const Color(0xFF9CA3AF) : _dietColor[e]!, onTap: () => setState(() => _diet = e)),
        ]),
      ]),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// ANIMAL ARENA: race, compare, and guess.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyAnimalStudio extends StatefulWidget {
  const NgmyAnimalStudio({super.key});

  @override
  State<NgmyAnimalStudio> createState() => _NgmyAnimalStudioState();
}

class _NgmyAnimalStudioState extends State<NgmyAnimalStudio> with SingleTickerProviderStateMixin, StudioFrames {
  String _mode = 'browse';
  String _group = '';
  String _sort = 'name';
  PlayAnimal? _sel;
  // Race.
  final List<PlayAnimal> _racers = [kAnimals[0], kAnimals[2], kAnimals[10]];
  bool _racing = false;
  final List<double> _pos = [0, 0, 0];
  int _winner = -1;
  // Higher or lower.
  PlayAnimal _a = kAnimals[0];
  PlayAnimal _b = kAnimals[1];
  String _stat = 'kmh';
  int _score = 0;
  String _fb = '';
  final math.Random _rnd = math.Random();

  @override
  void initState() {
    super.initState();
    startFrames();
    _newPair();
  }

  void _newPair() {
    _a = kAnimals[_rnd.nextInt(kAnimals.length)];
    do {
      _b = kAnimals[_rnd.nextInt(kAnimals.length)];
    } while (_b == _a || value(_a) == value(_b));
    _stat = const ['kmh', 'kg', 'life'][_rnd.nextInt(3)];
  }

  double value(PlayAnimal a) => _stat == 'kmh' ? a.kmh : (_stat == 'kg' ? a.kg : a.lifeYears);

  String get _statWord => _stat == 'kmh' ? 'faster' : (_stat == 'kg' ? 'heavier' : 'longer-lived');

  @override
  void onFrame(double dt) {
    if (!_racing) return;

    for (var i = 0; i < 3; i++) {
      // Real speeds are squeezed so a snail-slow animal still moves, and a falcon doesn't teleport.
      _pos[i] += dt * (0.04 + math.pow(_racers[i].kmh, 0.55) * 0.012);
      if (_pos[i] >= 1 && _winner < 0) {
        _winner = i;
        NgmyTone.chord('bell', [0, 4, 7, 12, 16], ms: 1200, volume: 0.6);
      }
    }
    if (_pos.every((p) => p >= 1)) _racing = false;
    for (var i = 0; i < 3; i++) {
      _pos[i] = _pos[i].clamp(0.0, 1.0);
    }
  }

  void _sound(PlayAnimal a) {
    final base = 220 / math.pow(math.max(a.kg, 0.001), 0.08);
    NgmyTone.play(base.clamp(60, 1200).toDouble(), ms: 260, sweep: 0.4, wave: 'saw', volume: 0.4);
  }

  @override
  Widget build(BuildContext context) {
    final list = [for (final a in kAnimals) if (_group.isEmpty || a.group == _group) a];
    if (_sort == 'speed') {
      list.sort((x, y) => y.kmh.compareTo(x.kmh));
    } else if (_sort == 'weight') {
      list.sort((x, y) => y.kg.compareTo(x.kg));
    } else if (_sort == 'life') {
      list.sort((x, y) => y.lifeYears.compareTo(x.lifeYears));
    }
    return StudioPage(
      title: 'ANIMAL ARENA',
      accent: const Color(0xFFFB923C),
      help: 'BROWSE: tap an animal to hear it and read about it. Sort by speed, weight or lifespan.\n\nRACE: pick three animals and see who wins. The speeds are real but squeezed, so a snail and a falcon can both fit on screen.\n\nHIGHER OR LOWER: two animals appear. Guess which one is faster, heavier or lives longer. Keep a streak going!',
      stage: _mode == 'browse' ? _browse(list) : (_mode == 'race' ? _race() : _higher()),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final m in const [('browse', 'Browse', Icons.grid_view_rounded), ('race', 'Race', Icons.flag_rounded), ('higher', 'Higher or lower', Icons.swap_vert_rounded)])
            StudioChip(label: m.$2, icon: m.$3, selected: _mode == m.$1, color: const Color(0xFFFB923C), onTap: () => setState(() => _mode = m.$1)),
        ]),
        if (_mode == 'browse') ...[
          StudioRow(children: [
            for (final g in const ['', 'mammal', 'bird', 'reptile', 'fish', 'insect', 'amphibian'])
              StudioChip(label: g.isEmpty ? 'All' : g[0].toUpperCase() + g.substring(1), selected: _group == g, color: const Color(0xFFFB923C), onTap: () => setState(() => _group = g)),
          ]),
          StudioRow(label: 'SORT', children: [
            for (final s in const [('name', 'A to Z'), ('speed', 'Fastest'), ('weight', 'Heaviest'), ('life', 'Longest life')])
              StudioChip(label: s.$2, selected: _sort == s.$1, color: const Color(0xFF38BDF8), onTap: () => setState(() => _sort = s.$1)),
          ]),
        ],
        if (_mode == 'race') ...[
          StudioRow(label: 'LANE', children: [
            for (var i = 0; i < 3; i++)
              StudioChip(label: '${i + 1}: ${_racers[i].name}', selected: false, color: const Color(0xFFFB923C), onTap: () => setState(() {
                    final next = kAnimals[(kAnimals.indexOf(_racers[i]) + 1) % kAnimals.length];
                    _racers[i] = next;
                    _sound(next);
                    _pos.fillRange(0, 3, 0);
                    _winner = -1;
                    _racing = false;
                  })),
          ]),
          StudioRow(children: [
            StudioButton(icon: Icons.flag_rounded, label: 'Go!', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                  _pos.fillRange(0, 3, 0);
                  _winner = -1;
                  _racing = true;

                })),
            StudioButton(icon: Icons.shuffle_rounded, label: 'Random', onTap: () => setState(() {
                  for (var i = 0; i < 3; i++) {
                    _racers[i] = kAnimals[_rnd.nextInt(kAnimals.length)];
                  }
                  _pos.fillRange(0, 3, 0);
                  _winner = -1;
                  _racing = false;
                })),
          ]),
        ],
      ]),
    );
  }

  Widget _browse(List<PlayAnimal> list) {
    return Column(children: [
      Expanded(
        child: GridView.builder(
          padding: const EdgeInsets.fromLTRB(10, 8, 10, 8),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4, mainAxisSpacing: 7, crossAxisSpacing: 7, childAspectRatio: 0.86),
          itemCount: list.length,
          itemBuilder: (context, i) {
            final a = list[i];
            final sel = identical(a, _sel);
            return GestureDetector(
              onTap: () {
                setState(() => _sel = a);
                _sound(a);
              },
              child: Container(
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: sel ? 0.14 : 0.05), borderRadius: BorderRadius.circular(14), border: Border.all(color: sel ? const Color(0xFFFB923C) : Colors.white12)),
                child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                  Text(a.emoji, style: const TextStyle(fontSize: 28)),
                  const SizedBox(height: 3),
                  Text(a.name, textAlign: TextAlign.center, maxLines: 2, style: const TextStyle(color: Colors.white, fontSize: 10.5, fontWeight: FontWeight.w800)),
                ]),
              ),
            );
          },
        ),
      ),
      if (_sel != null)
        Container(
          width: double.infinity,
          margin: const EdgeInsets.fromLTRB(10, 0, 10, 6),
          padding: const EdgeInsets.fromLTRB(14, 8, 8, 10),
          decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFFFB923C).withValues(alpha: 0.6))),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              Text(_sel!.emoji, style: const TextStyle(fontSize: 24)),
              const SizedBox(width: 8),
              Expanded(child: Text('${_sel!.name}  ·  ${_sel!.group}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
              IconButton(visualDensity: VisualDensity.compact, onPressed: () => setState(() => _sel = null), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 19)),
            ]),
            Text(_sel!.fact, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
            const SizedBox(height: 4),
            Text('Top speed ${_sel!.kmh} km/h  ·  ${_sel!.kg >= 1 ? '${_sel!.kg.round()} kg' : '${(_sel!.kg * 1000).toStringAsFixed(1)} g'}  ·  lives ~${_sel!.lifeYears.round()} years  ·  eats ${_sel!.diet == 'both' ? 'plants and meat' : (_sel!.diet == 'meat' ? 'meat' : (_sel!.diet == 'fish' ? 'fish' : 'plants'))}  ·  ${_sel!.home}', style: const TextStyle(color: Colors.white38, fontSize: 11, height: 1.35)),
          ]),
        ),
    ]);
  }

  Widget _race() {
    return LayoutBuilder(builder: (context, box) {
      final trackW = box.maxWidth - 90;
      return Padding(
        padding: const EdgeInsets.fromLTRB(12, 16, 12, 8),
        child: Column(children: [
          for (var i = 0; i < 3; i++)
            Expanded(
              child: Stack(alignment: Alignment.centerLeft, children: [
                Positioned.fill(child: Container(margin: const EdgeInsets.symmetric(vertical: 6), decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(14)))),
                Positioned(right: 10, child: const Text('🏁', style: TextStyle(fontSize: 24))),
                Positioned(left: 8 + trackW * _pos[i], child: Column(mainAxisSize: MainAxisSize.min, children: [Text(_racers[i].emoji, style: const TextStyle(fontSize: 34)), Text('${_racers[i].name} ${_racers[i].kmh.round()} km/h', style: const TextStyle(color: Colors.white54, fontSize: 9.5))])),
                if (_winner == i) const Positioned(right: 40, child: Text('🏆', style: TextStyle(fontSize: 30))),
              ]),
            ),
          Text(_winner >= 0 ? '${_racers[_winner].name} wins!' : (_racing ? 'Racing...' : 'Tap a lane name to change the animal, then press Go!'), style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900)),
        ]),
      );
    });
  }

  Widget _higher() {
    String fmt(PlayAnimal x) {
      final v = value(x);
      return _stat == 'kmh' ? '${v.round()} km/h' : (_stat == 'kg' ? (v >= 1 ? '${v.round()} kg' : '${(v * 1000).toStringAsFixed(1)} g') : '${v.round()} years');
    }

    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        Text('Streak $_score', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800)),
        const SizedBox(height: 10),
        Text('Which one is $_statWord?', style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
        const SizedBox(height: 16),
        Row(children: [
          for (final x in [_a, _b])
            Expanded(
              child: GestureDetector(
                onTap: () {
                  final other = identical(x, _a) ? _b : _a;
                  final ok = value(x) > value(other);
                  setState(() {
                    _fb = ok ? 'Yes! ${x.name} ${fmt(x)} vs ${other.name} ${fmt(other)}' : 'No. ${other.name} is ${_statWord}: ${fmt(other)} vs ${fmt(x)}';
                    _score = ok ? _score + 1 : 0;
                  });
                  NgmyTone.chord('bell', ok ? [0, 4, 7, 12] : [0, 1], ms: 700, volume: 0.5);
                  Future<void>.delayed(const Duration(milliseconds: 1700), () {
                    if (mounted) setState(_newPair);
                  });
                },
                child: Container(
                  margin: const EdgeInsets.symmetric(horizontal: 6),
                  padding: const EdgeInsets.symmetric(vertical: 22),
                  decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(20), border: Border.all(color: const Color(0xFFFB923C).withValues(alpha: 0.5))),
                  child: Column(children: [Text(x.emoji, style: const TextStyle(fontSize: 56)), const SizedBox(height: 6), Text(x.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))]),
                ),
              ),
            ),
        ]),
        const SizedBox(height: 18),
        Text(_fb, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w800)),
      ]),
    );
  }
}
