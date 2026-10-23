import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_play_data.dart';
import 'ngmy_studio_kit.dart';
import 'ngmy_universe_data.dart';

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

// ═════════════════════════════════════════════════════════════════════════════
// SKY MAP: stars and the 88 constellations.
// ═════════════════════════════════════════════════════════════════════════════

class NgmySkyStudio extends StatefulWidget {
  const NgmySkyStudio({super.key});

  @override
  State<NgmySkyStudio> createState() => _NgmySkyStudioState();
}

class _NgmySkyStudioState extends State<NgmySkyStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final UAmbient _amb = UAmbient();
  List<List<dynamic>> _stars = [];
  List<Map<String, dynamic>> _cons = [];
  double _lon = 0; // centre of view
  double _lat = 20;
  double _zoom = 1;
  double _baseZoom = 1;
  Map<String, dynamic>? _sel;
  bool _lines = true;
  bool _names = true;
  bool _music = true;
  bool _swahili = false;
  double _vLon = 0;
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyPlayData.json('sky').then((v) {
      final m = v as Map;
      if (!mounted) return;
      setState(() {
        _stars = [for (final s in m['stars'] as List) List<dynamic>.from(s as List)];
        _cons = [for (final c in m['cons'] as List) Map<String, dynamic>.from(c as Map)];
      });
    });
  }

  @override
  void onFrame(double dt) {
    _amb.update(dt, _music);
    if (_vLon.abs() > 0.01) {
      _lon -= _vLon * dt;
      _vLon *= math.exp(-dt * 2.5);
    }
  }

  double get _scale => math.min(_size.width, _size.height) * 0.62 * _zoom;

  /// Orthographic view from inside the sky: returns null if behind us.
  Offset? project(double lon, double lat) {
    final l0 = _lon * math.pi / 180, p0 = _lat * math.pi / 180;
    final l = lon * math.pi / 180, p = lat * math.pi / 180;
    final dl = l - l0;
    final cosc = math.sin(p0) * math.sin(p) + math.cos(p0) * math.cos(p) * math.cos(dl);
    if (cosc < 0.02) return null;
    final x = math.cos(p) * math.sin(dl);
    final y = math.cos(p0) * math.sin(p) - math.sin(p0) * math.cos(p) * math.cos(dl);
    // The sky is seen from the inside, so east is to the left.
    return Offset(_size.width / 2 - x * _scale, _size.height / 2 - y * _scale);
  }

  Map<String, dynamic>? _hit(Offset t) {
    Map<String, dynamic>? best;
    var bd = 46.0;
    for (final c in _cons) {
      final cc = c['c'] as List;
      final p = project((cc[0] as num).toDouble(), (cc[1] as num).toDouble());
      if (p == null) continue;
      final d = (p - t).distance;
      if (d < bd) {
        bd = d;
        best = c;
      }
    }
    return best;
  }

  void _pick(Map<String, dynamic> c) {
    final cc = c['c'] as List;
    setState(() {
      _sel = c;
      _lon = (cc[0] as num).toDouble();
      _lat = (cc[1] as num).toDouble().clamp(-80, 80);
      _zoom = math.max(_zoom, 1.7);
    });
    final h = (c['n'] as String).hashCode.abs();
    for (var i = 0; i < 4; i++) {
      later(160 * i, () => NgmyTone.playNote('bell', [0, 4, 7, 9, 12, 14, 16][(h + i * 3) % 7] + 12, ms: 800, volume: 0.45));
    }
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    return StudioPage(
      title: 'SKY MAP',
      accent: const Color(0xFF818CF8),
      help: 'This is the night sky: about 1,000 of the brightest stars and all 88 constellations, the star pictures people have drawn for thousands of years. Every culture saw different shapes.\n\nDrag to look around. Pinch to zoom. Tap a constellation to hear its notes and read its name (in English, and in Swahili where it is known).\n\nStars are different colours: blue ones are very hot, red ones are cooler. Bigger dots are brighter.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onScaleStart: (d) => _baseZoom = _zoom,
            onScaleUpdate: (d) {
              if (d.pointerCount >= 2) {
                _zoom = (_baseZoom * d.scale).clamp(0.6, 6.0);
              } else {
                final k = 90 / _scale;
                _lon -= d.focalPointDelta.dx * k;
                _lat = (_lat + d.focalPointDelta.dy * k).clamp(-85.0, 85.0);
                _vLon = d.focalPointDelta.dx * k * 30;
              }
            },
            onTapUp: (d) {
              final c = _hit(d.localPosition);
              if (c != null) _pick(c);
            },
            child: CustomPaint(size: _size, painter: _SkyPainter(this)),
          ),
          if (_stars.isEmpty) const Center(child: CircularProgressIndicator()),
          if (sel != null)
            Positioned(
              left: 10,
              right: 10,
              bottom: 8,
              child: Container(
                padding: const EdgeInsets.fromLTRB(14, 8, 6, 8),
                decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFF818CF8).withValues(alpha: 0.6))),
                child: Row(children: [
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('${sel['n']}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                      Text((sel['sw'] as String).isEmpty ? 'Short name: ${sel['id']}' : 'In Swahili: ${sel['sw']}  ·  short name ${sel['id']}', style: const TextStyle(color: Colors.white60, fontSize: 12)),
                    ]),
                  ),
                  IconButton(onPressed: () => setState(() => _sel = null), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20)),
                ]),
              ),
            ),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Lines', selected: _lines, color: const Color(0xFF818CF8), onTap: () => setState(() => _lines = !_lines)),
          StudioChip(label: 'Names', selected: _names, color: const Color(0xFF818CF8), onTap: () => setState(() => _names = !_names)),
          StudioChip(label: 'Kiswahili', selected: _swahili, color: const Color(0xFF4ADE80), onTap: () => setState(() => _swahili = !_swahili)),
          StudioChip(label: 'Music', icon: _music ? Icons.music_note_rounded : Icons.music_off_rounded, selected: _music, color: const Color(0xFF818CF8), onTap: () => setState(() => _music = !_music)),
          StudioChip(label: 'Random', icon: Icons.casino_rounded, selected: false, color: const Color(0xFFFBBF24), onTap: () {
                if (_cons.isNotEmpty) _pick(_cons[math.Random().nextInt(_cons.length)]);
              }),
        ]),
        StudioSlider(label: 'Zoom', value: _zoom, min: 0.6, max: 6, display: '${_zoom.toStringAsFixed(1)}x', color: const Color(0xFF818CF8), onChanged: (v) => setState(() => _zoom = v)),
      ]),
    );
  }
}

class _SkyPainter extends CustomPainter {
  _SkyPainter(this.s);
  final _NgmySkyStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF02030A), Color(0xFF0B1030)]).createShader(Offset.zero & size));
    final c = Offset(size.width / 2, size.height / 2);
    canvas.drawCircle(c, s._scale, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white10);
    final p = Paint();
    for (final st in s._stars) {
      final o = s.project((st[0] as num).toDouble(), (st[1] as num).toDouble());
      if (o == null) continue;
      final mag = (st[2] as num).toDouble();
      final bv = (st[3] as num).toDouble();
      final r = (0.5 + (5 - mag) * 0.55) * math.sqrt(s._zoom);
      p.color = Color.lerp(const Color(0xFF9DB8FF), const Color(0xFFFFB27A), ((bv + 0.3) / 2.0).clamp(0.0, 1.0))!.withValues(alpha: 0.95);
      canvas.drawCircle(o, math.max(0.6, r), p);
      if (mag < 2.2) {
        canvas.drawCircle(o, r * 2.6, Paint()..color = p.color.withValues(alpha: 0.18)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
      }
      if (s._names && (st[4] as String).isNotEmpty && mag < 2.6 && s._zoom > 0.9) {
        final t = TextPainter(text: TextSpan(text: st[4] as String, style: const TextStyle(color: Colors.white54, fontSize: 9.5)), textDirection: TextDirection.ltr)..layout();
        t.paint(canvas, o + Offset(r + 3, -4));
      }
    }
    for (final con in s._cons) {
      final selected = identical(con, s._sel);
      if (s._lines) {
        final lp = Paint()..style = PaintingStyle.stroke..strokeWidth = selected ? 2.2 : 0.9..color = (selected ? const Color(0xFFFBBF24) : const Color(0xFF818CF8)).withValues(alpha: selected ? 0.95 : 0.4);
        for (final seg in con['l'] as List) {
          Offset? prev;
          for (final pt in seg as List) {
            final o = s.project((pt[0] as num).toDouble(), (pt[1] as num).toDouble());
            if (o != null && prev != null) canvas.drawLine(prev, o, lp);
            prev = o;
          }
        }
      }
      if (s._names || selected) {
        final cc = con['c'] as List;
        final o = s.project((cc[0] as num).toDouble(), (cc[1] as num).toDouble());
        if (o != null) {
          final label = s._swahili && (con['sw'] as String).isNotEmpty ? con['sw'] as String : con['n'] as String;
          final t = TextPainter(text: TextSpan(text: label, style: TextStyle(color: selected ? const Color(0xFFFBBF24) : Colors.white.withValues(alpha: 0.5), fontSize: selected ? 13 : 10.5, fontWeight: FontWeight.w800, shadows: const [Shadow(color: Colors.black, blurRadius: 4)])), textDirection: TextDirection.ltr)..layout();
          t.paint(canvas, o + Offset(-t.width / 2, -t.height / 2));
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant _SkyPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// PLATES & QUAKES: the cracked shell of the Earth and last month's earthquakes.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyQuakeStudio extends StatefulWidget {
  const NgmyQuakeStudio({super.key});

  @override
  State<NgmyQuakeStudio> createState() => _NgmyQuakeStudioState();
}

class _NgmyQuakeStudioState extends State<NgmyQuakeStudio> with SingleTickerProviderStateMixin, StudioFrames {
  List<Map<String, dynamic>> _bounds = [];
  List<List<dynamic>> _quakes = [];
  UWorld? _world;
  double _zoom = 1;
  double _baseZoom = 1;
  Offset _pan = Offset.zero;
  bool _showQuakes = true;
  bool _showPlates = true;
  bool _playing = false;
  double _sweep = -180;
  int _selQ = -1;
  double _t = 0;
  Size _size = Size.zero;
  double _minMag = 4.5;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyPlayData.json('earth_quakes').then((v) {
      final m = v as Map;
      if (!mounted) return;
      setState(() {
        _bounds = [for (final b in m['bounds'] as List) Map<String, dynamic>.from(b as Map)];
        _quakes = [for (final q in m['quakes'] as List) List<dynamic>.from(q as List)];
      });
    });
    UWorld.load().then((w) {
      if (mounted) setState(() => _world = w);
    });
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    if (_playing) {
      final prev = _sweep;
      _sweep += dt * 40;
      for (var i = 0; i < _quakes.length; i++) {
        final lon = (_quakes[i][0] as num).toDouble();
        if (lon >= prev && lon < _sweep && (_quakes[i][2] as num) >= _minMag) {
          final mag = (_quakes[i][2] as num).toDouble();
          final lat = (_quakes[i][1] as num).toDouble();
          NgmyTone.playNote('bell', 24 + ((lat + 90) / 180 * 30).round(), ms: 350 + (mag * 60).round(), volume: 0.12 + mag * 0.03);
        }
      }
      if (_sweep > 180) {
        _sweep = -180;
        _playing = false;
      }
    }
  }

  Offset toScreen(double lon, double lat) {
    final w = _size.width * _zoom, h = _size.width / 2 * _zoom;
    return Offset(_size.width / 2 + _pan.dx + lon / 180 * w / 2, _size.height / 2 + _pan.dy - lat / 90 * h / 2);
  }

  @override
  Widget build(BuildContext context) {
    final q = _selQ >= 0 && _selQ < _quakes.length ? _quakes[_selQ] : null;
    return StudioPage(
      title: 'PLATES & QUAKES',
      accent: const Color(0xFFF87171),
      help: 'The ground under us is a cracked shell made of giant slabs called tectonic plates. They move a few centimetres a year, about as fast as your fingernails grow.\n\nWhere plates push together (red lines), mountains rise and volcanoes erupt. Where they pull apart (blue), new ground forms. Where they slide past each other (yellow), earthquakes are common.\n\nThe dots are real earthquakes of magnitude 4.5 or more from one month. See how they trace the plate edges! Tap a dot for details. Press Play to hear the Earth: a sweep from west to east plays a note for each quake.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onScaleStart: (d) => _baseZoom = _zoom,
            onScaleUpdate: (d) {
              setState(() {
                if (d.pointerCount >= 2) {
                  _zoom = (_baseZoom * d.scale).clamp(1.0, 8.0);
                } else {
                  _pan += d.focalPointDelta;
                }
              });
            },
            onTapUp: (d) {
              var best = -1;
              var bd = 24.0;
              for (var i = 0; i < _quakes.length; i++) {
                final o = toScreen((_quakes[i][0] as num).toDouble(), (_quakes[i][1] as num).toDouble());
                final dist = (o - d.localPosition).distance;
                if (dist < bd) {
                  bd = dist;
                  best = i;
                }
              }
              setState(() => _selQ = best);
              if (best >= 0) NgmyTone.playNote('bell', 20 + ((_quakes[best][2] as num).toDouble() * 3).round(), ms: 900, volume: 0.6);
            },
            child: CustomPaint(size: _size, painter: _QuakePainter(this)),
          ),
          if (_bounds.isEmpty) const Center(child: CircularProgressIndicator()),
          Positioned(
            left: 10,
            right: 10,
            bottom: 8,
            child: Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.6), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
              child: q == null
                  ? Wrap(alignment: WrapAlignment.spaceAround, spacing: 12, runSpacing: 4, children: const [
                      _Key(Color(0xFFF87171), "Push together"),
                      _Key(Color(0xFF38BDF8), "Pull apart"),
                      _Key(Color(0xFFFBBF24), "Slide past"),
                    ])
                  : Text('Magnitude ${q[2]}  ·  ${q[4]}  ·  ${q[3]} km deep. ${(q[2] as num) >= 6 ? 'A strong earthquake.' : 'Felt by people nearby.'}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12.5)),
            ),
          ),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Plates', selected: _showPlates, color: const Color(0xFFF87171), onTap: () => setState(() => _showPlates = !_showPlates)),
          StudioChip(label: 'Quakes', selected: _showQuakes, color: const Color(0xFFFBBF24), onTap: () => setState(() => _showQuakes = !_showQuakes)),
          StudioChip(label: _playing ? 'Stop' : 'Play the Earth', icon: _playing ? Icons.stop_rounded : Icons.play_arrow_rounded, selected: _playing, color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _playing = !_playing;
                if (_playing) _sweep = -180;
              })),
        ]),
        StudioSlider(label: 'Smallest quake', value: _minMag, min: 4.5, max: 7, display: 'M ${_minMag.toStringAsFixed(1)}', color: const Color(0xFFFBBF24), onChanged: (v) => setState(() => _minMag = v)),
      ]),
    );
  }
}

class _Key extends StatelessWidget {
  const _Key(this.c, this.t);
  final Color c;
  final String t;

  @override
  Widget build(BuildContext context) => Row(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 14, height: 4, color: c),
        const SizedBox(width: 5),
        Text(t, style: const TextStyle(color: Colors.white70, fontSize: 11.5)),
      ]);
}

class _QuakePainter extends CustomPainter {
  _QuakePainter(this.s);
  final _NgmyQuakeStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF06101F));
    final tl = s.toScreen(-180, 90), br = s.toScreen(180, -90);
    canvas.drawRect(Rect.fromPoints(tl, br), Paint()..color = const Color(0xFF0A1A33));
    final w = s._world;
    if (w != null) {
      final land = Paint()..color = const Color(0xFF1E2F4A);
      for (final c in w.countries) {
        for (final ring in c.rings) {
          final path = Path();
          for (var i = 0; i < ring.length; i++) {
            final o = s.toScreen(ring[i][0], ring[i][1]);
            i == 0 ? path.moveTo(o.dx, o.dy) : path.lineTo(o.dx, o.dy);
          }
          path.close();
          canvas.drawPath(path, land);
        }
      }
    }
    if (s._showPlates) {
      for (final b in s._bounds) {
        final t = (b['t'] ?? '').toString();
        final col = t.contains('SR') || t.contains('CRB') ? const Color(0xFF38BDF8) : (t.contains('TF') || t.contains('CTF') ? const Color(0xFFFBBF24) : const Color(0xFFF87171));
        final path = Path();
        final pts = b['p'] as List;
        for (var i = 0; i < pts.length; i++) {
          final o = s.toScreen((pts[i][0] as num).toDouble(), (pts[i][1] as num).toDouble());
          i == 0 ? path.moveTo(o.dx, o.dy) : path.lineTo(o.dx, o.dy);
        }
        canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.8..color = col.withValues(alpha: 0.85));
      }
    }
    if (s._showQuakes) {
      for (var i = 0; i < s._quakes.length; i++) {
        final q = s._quakes[i];
        final mag = (q[2] as num).toDouble();
        if (mag < s._minMag) continue;
        final o = s.toScreen((q[0] as num).toDouble(), (q[1] as num).toDouble());
        final lon = (q[0] as num).toDouble();
        final lit = s._playing && (lon - s._sweep).abs() < 6;
        final base = (1.5 + (mag - 4.5) * 2.2) * (1 + (lit ? 1.2 : 0));
        final pulse = 0.5 + 0.5 * math.sin(s._t * 3 + i);
        canvas.drawCircle(o, base * (1.4 + pulse * 0.4), Paint()..color = const Color(0xFFFB923C).withValues(alpha: 0.2));
        canvas.drawCircle(o, base, Paint()..color = (i == s._selQ ? Colors.white : const Color(0xFFFB923C)).withValues(alpha: 0.9));
      }
    }
    if (s._playing) {
      final x = s.toScreen(s._sweep, 0).dx;
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), Paint()..color = const Color(0xFF4ADE80).withValues(alpha: 0.8)..strokeWidth = 1.5);
    }
  }

  @override
  bool shouldRepaint(covariant _QuakePainter old) => true;
}
