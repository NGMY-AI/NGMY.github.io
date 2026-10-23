import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_play_data.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// PERIODIC TABLE: all 118 elements, states of matter, and mixing two together.
// ═════════════════════════════════════════════════════════════════════════════

const Map<String, Color> _kCatColor = {
  'alkali metal': Color(0xFFF87171),
  'alkaline earth metal': Color(0xFFFB923C),
  'transition metal': Color(0xFFFACC15),
  'post-transition metal': Color(0xFF86EFAC),
  'metalloid': Color(0xFF2DD4BF),
  'diatomic nonmetal': Color(0xFF38BDF8),
  'polyatomic nonmetal': Color(0xFF60A5FA),
  'noble gas': Color(0xFFA78BFA),
  'lanthanide': Color(0xFFF472B6),
  'actinide': Color(0xFFE879F9),
};

Color _catColor(String c) {
  for (final e in _kCatColor.entries) {
    if (c.startsWith(e.key)) return e.value;
  }
  return const Color(0xFF9CA3AF);
}

class NgmyPeriodicStudio extends StatefulWidget {
  const NgmyPeriodicStudio({super.key});

  @override
  State<NgmyPeriodicStudio> createState() => _NgmyPeriodicStudioState();
}

class _NgmyPeriodicStudioState extends State<NgmyPeriodicStudio> {
  List<Map<String, dynamic>> _el = [];
  Map<String, dynamic>? _sel;
  Map<String, dynamic>? _first; // for mixing
  bool _mix = false;
  String _filter = '';
  double _tempC = 20;
  String _result = '';
  String _resultNote = '';

  @override
  void initState() {
    super.initState();
    NgmyPlayData.json('elements').then((v) {
      if (mounted) setState(() => _el = [for (final e in v as List) if ((e as Map)['z'] as int <= 118) Map<String, dynamic>.from(e)]);
    });
  }

  String _state(Map<String, dynamic> e) {
    final mt = (e['mt'] as num?)?.toDouble();
    final bl = (e['bl'] as num?)?.toDouble();
    final k = _tempC + 273.15;
    if (mt == null) return (e['ph'] ?? 'Solid').toString().toLowerCase();
    if (k < mt) return 'solid';
    if (bl != null && k >= bl) return 'gas';
    return 'liquid';
  }

  void _tap(Map<String, dynamic> e) {
    final z = e['z'] as int;
    NgmyTone.playNote('bell', 48 + (z % 24), ms: 700, volume: 0.55);
    if (_mix) {
      if (_first == null) {
        setState(() {
          _first = e;
          _result = '';
        });
        return;
      }
      final a = _first!['s'] as String, b = e['s'] as String;
      final key = ([a, b]..sort()).join('+');
      final hit = kCompounds[key];
      setState(() {
        _result = hit == null ? '$a + $b: nothing famous happens. Try another pair!' : '$a + $b = ${hit.$1}';
        _resultNote = hit?.$2 ?? '';
        _first = null;
      });
      if (hit != null) {
        NgmyTone.chord('bell', [0, 4, 7, 12], ms: 1200);
      } else {
        NgmyTone.play(120, ms: 220, volume: 0.4);
      }
      return;
    }
    setState(() => _sel = e);
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    return StudioPage(
      title: 'PERIODIC TABLE',
      accent: const Color(0xFF38BDF8),
      help: 'Everything around you is made of about 100 kinds of atoms called elements. This table lays out all 118 of them in a smart pattern: elements in the same column behave in similar ways.\n\nTap any element to hear it and read about it. Colours show the family it belongs to.\n\nThe Temperature slider changes the heat: elements that melt show a wavy edge (liquid), and ones that boil away turn into a dotted edge (gas). Try 1000 degrees: only a few are still solid!\n\nTurn on Mix, then tap two elements to see what they make together. Try hydrogen and oxygen, or sodium and chlorine.',
      stage: _el.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : Column(children: [
              Expanded(
                child: LayoutBuilder(builder: (context, box) {
                  final cell = math.min(box.maxWidth / 18, box.maxHeight / 10);
                  final gridW = cell * 18;
                  return Align(
                    alignment: Alignment.topCenter,
                    child: SizedBox(
                      width: gridW,
                      height: cell * 10,
                      child: Stack(children: [
                        for (final e in _el)
                          Positioned(
                            left: ((e['x'] as int) - 1) * cell,
                            top: ((e['y'] as int) - 1) * cell,
                            width: cell,
                            height: cell,
                            child: _cell(e, cell),
                          ),
                        Positioned(left: cell * 2.2, top: cell * 0.2, width: cell * 9, child: Text(_mix ? (_first == null ? 'Pick the first element' : 'Now pick the second one') : 'Tap an element', style: const TextStyle(color: Colors.white38, fontSize: 11))),
                      ]),
                    ),
                  );
                }),
              ),
              if (_mix && _result.isNotEmpty)
                Container(
                  width: double.infinity,
                  margin: const EdgeInsets.fromLTRB(10, 0, 10, 6),
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: const Color(0xFF38BDF8).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.4))),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(_result, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                    if (_resultNote.isNotEmpty) Text(_resultNote, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
                  ]),
                ),
              if (!_mix && sel != null) _card(sel),
            ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: _mix ? 'Mixing' : 'Mix two', icon: Icons.science_rounded, selected: _mix, color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _mix = !_mix;
                _first = null;
                _result = '';
              })),
          for (final f in const [('', 'All'), ('metal', 'Metals'), ('nonmetal', 'Non-metals'), ('noble gas', 'Noble gases')])
            StudioChip(label: f.$2, selected: _filter == f.$1, color: const Color(0xFF38BDF8), onTap: () => setState(() => _filter = f.$1)),
        ]),
        StudioSlider(label: 'Temperature', value: _tempC, min: -270, max: 6000, display: '${_tempC.round()}°C', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _tempC = v)),
      ]),
    );
  }

  bool _passes(Map<String, dynamic> e) {
    if (_filter.isEmpty) return true;
    final c = (e['c'] ?? '').toString();
    switch (_filter) {
      case 'metal':
        return c.contains('metal') && !c.contains('nonmetal') && !c.contains('metalloid');
      case 'nonmetal':
        return c.contains('nonmetal');
      default:
        return c.contains(_filter);
    }
  }

  Widget _cell(Map<String, dynamic> e, double cell) {
    final col = _catColor((e['c'] ?? '').toString());
    final st = _state(e);
    final on = _passes(e);
    final picked = identical(e, _sel) || identical(e, _first);
    return GestureDetector(
      onTap: () => _tap(e),
      child: Container(
        margin: const EdgeInsets.all(0.8),
        decoration: BoxDecoration(
          color: col.withValues(alpha: on ? (st == 'gas' ? 0.12 : (st == 'liquid' ? 0.4 : 0.7)) : 0.07),
          borderRadius: BorderRadius.circular(cell * 0.14),
          border: Border.all(color: picked ? Colors.white : (st == 'gas' ? col.withValues(alpha: 0.9) : Colors.transparent), width: picked ? 2 : 1),
        ),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Text('${e['z']}', style: TextStyle(color: Colors.white.withValues(alpha: on ? 0.6 : 0.2), fontSize: cell * 0.2, height: 1)),
          Text(e['s'].toString(), style: TextStyle(color: Colors.white.withValues(alpha: on ? 1 : 0.3), fontSize: cell * 0.36, fontWeight: FontWeight.w900, height: 1.1)),
        ]),
      ),
    );
  }

  Widget _card(Map<String, dynamic> e) {
    final col = _catColor((e['c'] ?? '').toString());
    final mt = (e['mt'] as num?)?.toDouble();
    final bl = (e['bl'] as num?)?.toDouble();
    String c(double? k) => k == null ? '—' : '${(k - 273.15).round()}°C';
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.fromLTRB(10, 0, 10, 6),
      padding: const EdgeInsets.fromLTRB(14, 8, 8, 10),
      decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(18), border: Border.all(color: col.withValues(alpha: 0.6))),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          Text('${e['s']}', style: TextStyle(color: col, fontSize: 26, fontWeight: FontWeight.w900)),
          const SizedBox(width: 10),
          Expanded(child: Text('${e['n']}  ·  #${e['z']}  ·  ${e['c']}', maxLines: 2, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5))),
          IconButton(visualDensity: VisualDensity.compact, onPressed: () => setState(() => _sel = null), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 19)),
        ]),
        Text('${e['sm']}', maxLines: 4, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.35)),
        const SizedBox(height: 4),
        Text('Mass ${e['m']} · melts at ${c(mt)} · boils at ${c(bl)} · now: ${_state(e)}${e['by'] == null ? '' : ' · found by ${e['by']}'}', style: const TextStyle(color: Colors.white38, fontSize: 11, height: 1.35)),
      ]),
    );
  }
}
