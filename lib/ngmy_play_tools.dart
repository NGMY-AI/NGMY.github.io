import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Everyday tools for everyone: unit converter, world clock, maths and typing.
// ═════════════════════════════════════════════════════════════════════════════

class _Unit {
  const _Unit(this.name, this.toBase);
  final String name;
  final double toBase;
}

const Map<String, List<_Unit>> _kUnits = {
  'Length': [_Unit('millimetre', 0.001), _Unit('centimetre', 0.01), _Unit('metre', 1), _Unit('kilometre', 1000), _Unit('inch', 0.0254), _Unit('foot', 0.3048), _Unit('yard', 0.9144), _Unit('mile', 1609.344)],
  'Weight': [_Unit('gram', 0.001), _Unit('kilogram', 1), _Unit('tonne', 1000), _Unit('ounce', 0.0283495), _Unit('pound', 0.45359237)],
  'Volume': [_Unit('millilitre', 0.001), _Unit('litre', 1), _Unit('cup', 0.2365882), _Unit('US gallon', 3.785412), _Unit('UK gallon', 4.54609)],
  'Speed': [_Unit('km/h', 1), _Unit('m/s', 3.6), _Unit('mph', 1.609344), _Unit('knot', 1.852)],
  'Area': [_Unit('sq metre', 1), _Unit('sq kilometre', 1e6), _Unit('hectare', 1e4), _Unit('acre', 4046.856), _Unit('sq foot', 0.09290304)],
  'Time': [_Unit('second', 1), _Unit('minute', 60), _Unit('hour', 3600), _Unit('day', 86400), _Unit('week', 604800), _Unit('year', 31557600)],
  'Temperature': [_Unit('Celsius', 1), _Unit('Fahrenheit', 1), _Unit('Kelvin', 1)],
};

class NgmyConverterStudio extends StatefulWidget {
  const NgmyConverterStudio({super.key});

  @override
  State<NgmyConverterStudio> createState() => _NgmyConverterStudioState();
}

class _NgmyConverterStudioState extends State<NgmyConverterStudio> {
  String _cat = 'Length';
  int _from = 2;
  int _to = 3;
  final TextEditingController _ctl = TextEditingController(text: '1');

  double _convert(double v) {
    final units = _kUnits[_cat]!;
    if (_cat == 'Temperature') {
      double c;
      switch (_from) {
        case 1:
          c = (v - 32) * 5 / 9;
        case 2:
          c = v - 273.15;
        default:
          c = v;
      }
      switch (_to) {
        case 1:
          return c * 9 / 5 + 32;
        case 2:
          return c + 273.15;
        default:
          return c;
      }
    }
    if (_cat == 'Speed') {
      // Stored as "km/h per unit" inverse for m/s, so convert via km/h.
      final kmh = _from == 1 ? v * 3.6 : v * units[_from].toBase;
      return _to == 1 ? kmh / 3.6 : kmh / units[_to].toBase;
    }
    return v * units[_from].toBase / units[_to].toBase;
  }

  String _fmt(double v) {
    if (v == 0) return '0';
    final a = v.abs();
    if (a >= 1e9 || a < 1e-4) return v.toStringAsExponential(3);
    var s = v.toStringAsFixed(a >= 100 ? 2 : (a >= 1 ? 4 : 6));
    if (s.contains('.')) s = s.replaceFirst(RegExp(r'0+$'), '').replaceFirst(RegExp(r'\.$'), '');
    return s;
  }

  @override
  Widget build(BuildContext context) {
    final units = _kUnits[_cat]!;
    final v = double.tryParse(_ctl.text.trim().replaceAll(',', '.'));
    final out = v == null ? '—' : _fmt(_convert(v));
    return StudioPage(
      title: 'UNIT CONVERTER',
      accent: const Color(0xFF38BDF8),
      help: 'Type a number, pick the unit it is in (From) and the unit you want (To). The answer appears at once.',
      stage: ListView(padding: const EdgeInsets.all(18), children: [
        TextField(
          controller: _ctl,
          onChanged: (_) => setState(() {}),
          keyboardType: const TextInputType.numberWithOptions(decimal: true, signed: true),
          style: const TextStyle(color: Colors.white, fontSize: 34, fontWeight: FontWeight.w900),
          decoration: InputDecoration(labelText: units[_from].name, labelStyle: const TextStyle(color: Colors.white54), enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Colors.white24)), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Color(0xFF38BDF8)))),
        ),
        const SizedBox(height: 18),
        Container(
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(color: const Color(0xFF38BDF8).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(18), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.4))),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(units[_to].name.toUpperCase(), style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
            const SizedBox(height: 4),
            SelectableText(out, style: const TextStyle(color: Colors.white, fontSize: 34, fontWeight: FontWeight.w900)),
          ]),
        ),
        const SizedBox(height: 14),
        Center(child: StudioButton(icon: Icons.swap_vert_rounded, label: 'Swap', onTap: () => setState(() {
              final t = _from;
              _from = _to;
              _to = t;
            }))),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final c in _kUnits.keys)
            StudioChip(label: c, selected: _cat == c, color: const Color(0xFF38BDF8), onTap: () => setState(() {
                  _cat = c;
                  _from = 0;
                  _to = math.min(1, _kUnits[c]!.length - 1);
                })),
        ]),
        StudioRow(label: 'FROM', children: [for (var i = 0; i < units.length; i++) StudioChip(label: units[i].name, selected: _from == i, color: const Color(0xFF4ADE80), onTap: () => setState(() => _from = i))]),
        StudioRow(label: 'TO', children: [for (var i = 0; i < units.length; i++) StudioChip(label: units[i].name, selected: _to == i, color: const Color(0xFFFBBF24), onTap: () => setState(() => _to = i))]),
      ]),
    );
  }
}

// ── World clock ──────────────────────────────────────────────────────────────

class NgmyWorldClockStudio extends StatefulWidget {
  const NgmyWorldClockStudio({super.key});

  @override
  State<NgmyWorldClockStudio> createState() => _NgmyWorldClockStudioState();
}

class _NgmyWorldClockStudioState extends State<NgmyWorldClockStudio> {
  Timer? _t;
  static const List<(String, double, String)> _cities = [
    ('Nairobi', 3, 'Kenya'),
    ('Dar es Salaam', 3, 'Tanzania'),
    ('Kampala', 3, 'Uganda'),
    ('Addis Ababa', 3, 'Ethiopia'),
    ('Lagos', 1, 'Nigeria'),
    ('Accra', 0, 'Ghana'),
    ('Johannesburg', 2, 'South Africa'),
    ('Cairo', 2, 'Egypt'),
    ('London', 0, 'United Kingdom'),
    ('Paris', 1, 'France'),
    ('Dubai', 4, 'UAE'),
    ('Mumbai', 5.5, 'India'),
    ('Beijing', 8, 'China'),
    ('Tokyo', 9, 'Japan'),
    ('Sydney', 10, 'Australia'),
    ('Auckland', 12, 'New Zealand'),
    ('Honolulu', -10, 'Hawaii'),
    ('Los Angeles', -8, 'USA West'),
    ('Chicago', -6, 'USA Central'),
    ('New York', -5, 'USA East'),
    ('Sao Paulo', -3, 'Brazil'),
  ];

  @override
  void initState() {
    super.initState();
    _t = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now().toUtc();
    final mine = DateTime.now();
    return StudioPage(
      title: 'WORLD CLOCK',
      accent: const Color(0xFFFBBF24),
      help: 'See what time it is in cities around the world right now. The moon and sun show whether it is day or night there. Times use standard time: places that change their clocks in summer may be one hour different.',
      stage: ListView(padding: const EdgeInsets.fromLTRB(14, 8, 14, 10), children: [
        Container(
          padding: const EdgeInsets.all(14),
          margin: const EdgeInsets.only(bottom: 8),
          decoration: BoxDecoration(color: const Color(0xFFFBBF24).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFFFBBF24).withValues(alpha: 0.4))),
          child: Row(children: [
            const Text('📍', style: TextStyle(fontSize: 24)),
            const SizedBox(width: 10),
            const Expanded(child: Text('Your phone', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800))),
            Text(_hm(mine, true), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
          ]),
        ),
        for (final c in _cities)
          Builder(builder: (context) {
            final t = now.add(Duration(minutes: (c.$2 * 60).round()));
            final day = t.hour >= 6 && t.hour < 18;
            return Container(
              margin: const EdgeInsets.only(bottom: 6),
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(14)),
              child: Row(children: [
                Text(day ? '☀️' : '🌙', style: const TextStyle(fontSize: 22)),
                const SizedBox(width: 10),
                Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(c.$1, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)), Text('${c.$3}  ·  UTC${c.$2 >= 0 ? '+' : ''}${c.$2 == c.$2.roundToDouble() ? c.$2.round() : c.$2}', style: const TextStyle(color: Colors.white38, fontSize: 11))])),
                Text(_hm(t, false), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              ]),
            );
          }),
      ]),
    );
  }

  String _hm(DateTime t, bool secs) {
    String two(int v) => v.toString().padLeft(2, '0');
    return '${two(t.hour)}:${two(t.minute)}${secs ? ':${two(t.second)}' : ''}';
  }
}

// ── Maths trainer ────────────────────────────────────────────────────────────

class NgmyMathStudio extends StatefulWidget {
  const NgmyMathStudio({super.key});

  @override
  State<NgmyMathStudio> createState() => _NgmyMathStudioState();
}

class _NgmyMathStudioState extends State<NgmyMathStudio> {
  String _op = '+';
  int _level = 1;
  int _a = 0, _b = 0, _answer = 0;
  int _asked = 0, _right = 0, _streak = 0, _best = 0;
  String _entry = '';
  String _fb = '';
  bool _playing = false;
  final math.Random _rnd = math.Random();
  final Stopwatch _sw = Stopwatch();

  void _next() {
    final hi = const [0, 10, 20, 100, 1000][_level.clamp(1, 4)];
    var op = _op;
    if (op == '?') op = const ['+', '-', '×', '÷'][_rnd.nextInt(4)];
    switch (op) {
      case '+':
        _a = _rnd.nextInt(hi) + 1;
        _b = _rnd.nextInt(hi) + 1;
        _answer = _a + _b;
      case '-':
        _a = _rnd.nextInt(hi) + 1;
        _b = _rnd.nextInt(_a) + 0;
        _answer = _a - _b;
      case '×':
        final m = math.min(hi, _level >= 3 ? 12 : 10);
        _a = _rnd.nextInt(m) + 1;
        _b = _rnd.nextInt(m) + 1;
        _answer = _a * _b;
      default:
        final m = math.min(hi, _level >= 3 ? 12 : 10);
        _b = _rnd.nextInt(m) + 1;
        _answer = _rnd.nextInt(m) + 1;
        _a = _b * _answer;
    }
    _shownOp = op;
    _entry = '';
  }

  String _shownOp = '+';

  void _start() {
    setState(() {
      _asked = 0;
      _right = 0;
      _streak = 0;
      _fb = '';
      _playing = true;
      _sw
        ..reset()
        ..start();
      _next();
    });
  }

  void _submit() {
    final v = int.tryParse(_entry);
    if (v == null) return;
    final ok = v == _answer;
    setState(() {
      _asked++;
      if (ok) {
        _right++;
        _streak++;
        _best = math.max(_best, _streak);
        _fb = _streak >= 3 ? '🔥 $_streak in a row!' : 'Correct!';
      } else {
        _streak = 0;
        _fb = 'It was $_answer';
      }
      if (_asked >= 10) {
        _playing = false;
        _sw.stop();
        _fb = 'Done! $_right of 10 in ${_sw.elapsed.inSeconds} seconds.';
      } else {
        _next();
      }
    });
    NgmyTone.chord('bell', ok ? [0, 4, 7] : [0, 1], ms: 500, volume: 0.45);
  }

  void _key(String k) {
    setState(() {
      if (k == '⌫') {
        if (_entry.isNotEmpty) _entry = _entry.substring(0, _entry.length - 1);
      } else if (_entry.length < 7) {
        _entry += k;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'MATHS TRAINER',
      accent: const Color(0xFF4ADE80),
      help: 'Ten quick questions. Choose a type of sum and a level, press Start, and type the answers with the number pad. Beat your streak and your time!',
      stage: Center(
        child: Padding(
          padding: const EdgeInsets.all(18),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text('$_right right  ·  best streak $_best', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800)),
            const SizedBox(height: 20),
            if (_playing) ...[
              Text('$_a $_shownOp $_b = ?', style: const TextStyle(color: Colors.white, fontSize: 46, fontWeight: FontWeight.w900)),
              const SizedBox(height: 10),
              Container(
                width: 190,
                padding: const EdgeInsets.symmetric(vertical: 10),
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(14)),
                child: Text(_entry.isEmpty ? '…' : _entry, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF4ADE80), fontSize: 32, fontWeight: FontWeight.w900)),
              ),
            ] else
              const Text('🧮', style: TextStyle(fontSize: 70)),
            const SizedBox(height: 14),
            Text(_fb, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 16)),
            const SizedBox(height: 16),
            if (_playing)
              SizedBox(
                width: 260,
                child: Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
                  for (final k in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '⌫', '0', '✔'])
                    GestureDetector(
                      onTap: () => k == '✔' ? _submit() : _key(k),
                      child: Container(width: 78, height: 50, alignment: Alignment.center, decoration: BoxDecoration(color: k == '✔' ? const Color(0xFF4ADE80) : Colors.white.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(14)), child: Text(k, style: TextStyle(color: k == '✔' ? Colors.black : Colors.white, fontSize: 22, fontWeight: FontWeight.w900))),
                    ),
                ]),
              ),
          ]),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final o in const [('+', 'Add'), ('-', 'Subtract'), ('×', 'Multiply'), ('÷', 'Divide'), ('?', 'Mixed')]) StudioChip(label: o.$2, selected: _op == o.$1, color: const Color(0xFF4ADE80), onTap: () => setState(() => _op = o.$1)),
        ]),
        StudioRow(children: [
          for (var l = 1; l <= 4; l++) StudioChip(label: 'Level $l', selected: _level == l, color: const Color(0xFFFBBF24), onTap: () => setState(() => _level = l)),
          StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: _start),
        ]),
      ]),
    );
  }
}

// ── Typing tutor ─────────────────────────────────────────────────────────────

class NgmyTypingStudio extends StatefulWidget {
  const NgmyTypingStudio({super.key});

  @override
  State<NgmyTypingStudio> createState() => _NgmyTypingStudioState();
}

class _NgmyTypingStudioState extends State<NgmyTypingStudio> {
  static const _easy = ['sun', 'moon', 'star', 'tree', 'bird', 'fish', 'lion', 'rain', 'book', 'home', 'road', 'play', 'song', 'cake', 'milk', 'hand', 'blue', 'jump'];
  static const _hard = ['elephant', 'mountain', 'universe', 'gravity', 'dinosaur', 'planet', 'galaxy', 'telescope', 'adventure', 'friendship', 'beautiful', 'chemistry', 'volcano', 'rainforest', 'butterfly', 'mathematics', 'lightning', 'community'];
  bool _hardMode = false;
  List<String> _words = [];
  int _i = 0;
  int _typed = 0;
  int _mistakes = 0;
  final Stopwatch _sw = Stopwatch();
  final TextEditingController _ctl = TextEditingController();
  final FocusNode _focus = FocusNode();
  String _done = '';

  void _start() {
    final pool = List<String>.from(_hardMode ? _hard : _easy)..shuffle();
    setState(() {
      _words = pool.take(12).toList();
      _i = 0;
      _typed = 0;
      _mistakes = 0;
      _done = '';
      _ctl.clear();
      _sw
        ..reset()
        ..start();
    });
    _focus.requestFocus();
  }

  void _onChanged(String v) {
    if (_i >= _words.length) return;
    final w = _words[_i];
    if (v.endsWith(' ') || v == w) {
      final guess = v.trim();
      setState(() {
        if (guess == w) {
          _typed += w.length + 1;
          NgmyTone.playNote('bell', 12 + (_i % 7) * 2, ms: 200, volume: 0.35);
        } else {
          _mistakes++;
        }
        _i++;
        _ctl.clear();
        if (_i >= _words.length) {
          _sw.stop();
          final mins = math.max(_sw.elapsed.inSeconds, 1) / 60;
          _done = '${((_typed / 5) / mins).round()} words per minute, $_mistakes mistakes';
          NgmyTone.chord('bell', [0, 4, 7, 12], ms: 1000);
        }
      });
    } else {
      setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    final w = _i < _words.length ? _words[_i] : '';
    return StudioPage(
      title: 'TYPING TUTOR',
      accent: const Color(0xFFF472B6),
      help: 'Press Start, then type each word you see and press space. You get a score in words per minute at the end. Most adults type 40 words per minute. Can you beat that?',
      stage: Center(
        child: Padding(
          padding: const EdgeInsets.all(18),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            if (_words.isNotEmpty && _done.isEmpty) ...[
              Text('${_i + 1} / ${_words.length}', style: const TextStyle(color: Colors.white38)),
              const SizedBox(height: 10),
              Text.rich(TextSpan(children: [
                for (var k = 0; k < w.length; k++)
                  TextSpan(text: w[k], style: TextStyle(color: k < _ctl.text.length ? (_ctl.text[k] == w[k] ? const Color(0xFF4ADE80) : const Color(0xFFF87171)) : Colors.white, fontSize: 48, fontWeight: FontWeight.w900)),
              ])),
              const SizedBox(height: 20),
              TextField(controller: _ctl, focusNode: _focus, autofocus: true, autocorrect: false, enableSuggestions: false, textAlign: TextAlign.center, onChanged: _onChanged, style: const TextStyle(color: Colors.white, fontSize: 24), decoration: InputDecoration(hintText: 'type here', hintStyle: const TextStyle(color: Colors.white24), enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: const BorderSide(color: Colors.white24)))),
            ] else if (_done.isNotEmpty) ...[
              const Text('🎉', style: TextStyle(fontSize: 64)),
              const SizedBox(height: 10),
              Text(_done, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFBBF24), fontSize: 22, fontWeight: FontWeight.w900)),
            ] else
              const Text('⌨️', style: TextStyle(fontSize: 70)),
          ]),
        ),
      ),
      tools: StudioRow(children: [
        StudioChip(label: 'Short words', selected: !_hardMode, color: const Color(0xFFF472B6), onTap: () => setState(() => _hardMode = false)),
        StudioChip(label: 'Long words', selected: _hardMode, color: const Color(0xFFF472B6), onTap: () => setState(() => _hardMode = true)),
        StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: _start),
      ]),
    );
  }
}
