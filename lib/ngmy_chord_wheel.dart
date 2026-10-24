import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// CHORD LAB: the circle of fifths. Tap chords, see which ones are friends, build a loop.
// ═════════════════════════════════════════════════════════════════════════════

const List<String> _kNames = ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'];
const List<int> _kSemis = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];

class _Chord {
  const _Chord(this.slot, this.minor);
  final int slot; // 0..11 round the wheel
  final bool minor;

  int get root => _kSemis[slot] + (minor ? 9 : 0);
  String get name => minor ? '${_kNames[(slot + 3) % 12 == slot ? slot : _minorName(slot)]}m' : _kNames[slot];

  static int _minorName(int slot) {
    final s = (_kSemis[slot] + 9) % 12;
    return _kSemis.indexOf(s);
  }

  List<int> get notes {
    var r = root % 12;
    if (r > 6) r -= 12;
    return [r, r + (minor ? 3 : 4), r + 7];
  }

  @override
  bool operator ==(Object other) => other is _Chord && other.slot == slot && other.minor == minor;

  @override
  int get hashCode => slot * 2 + (minor ? 1 : 0);
}

class NgmyChordWheelStudio extends StatefulWidget {
  const NgmyChordWheelStudio({super.key});

  @override
  State<NgmyChordWheelStudio> createState() => _NgmyChordWheelStudioState();
}

class _NgmyChordWheelStudioState extends State<NgmyChordWheelStudio> with SingleTickerProviderStateMixin, StudioFrames {
  int _home = 0; // key, as a spot on the wheel
  _Chord? _shown;
  final List<_Chord?> _slots = [const _Chord(0, false), const _Chord(1, false), _Chord(0, false).minorOf(), const _Chord(11, false)];
  int _slotSel = 0;
  bool _playing = false;
  double _bpm = 84;
  double _acc = 0;
  int _beat = -1;
  String _inst = 'piano';
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  Set<_Chord> get _friends {
    // The chords that belong to the home key: I, IV, V (major) and vi, ii, iii (minor).
    final h = _home;
    return {
      _Chord(h, false),
      _Chord((h + 11) % 12, false),
      _Chord((h + 1) % 12, false),
      _Chord(h, true),
      _Chord((h + 11) % 12, true),
      _Chord((h + 1) % 12, true),
    };
  }

  String _roman(_Chord c) {
    final h = _home;
    if (!c.minor) {
      if (c.slot == h) return 'I';
      if (c.slot == (h + 11) % 12) return 'IV';
      if (c.slot == (h + 1) % 12) return 'V';
    } else {
      if (c.slot == h) return 'vi';
      if (c.slot == (h + 11) % 12) return 'ii';
      if (c.slot == (h + 1) % 12) return 'iii';
    }
    return '';
  }

  void _sound(_Chord c) {
    NgmyTone.chord(_inst, c.notes, ms: 1100, volume: 0.42);
  }

  @override
  void onFrame(double dt) {
    if (_playing) {
      _acc += dt;
      final step = 60 / _bpm * 2;
      if (_acc >= step) {
        _acc = 0;
        _beat = (_beat + 1) % 4;
        final c = _slots[_beat];
        if (c != null) {
          _shown = c;
          _sound(c);
        }
      }
    }
    setState(() {});
  }

  void _tapWheel(Offset p) {
    final c = Offset(_size.width / 2, _size.height * 0.46);
    final r = math.min(_size.width, _size.height * 0.9) * 0.46;
    final d = p - c;
    final dist = d.distance;
    if (dist > r || dist < r * 0.18) return;
    var a = math.atan2(d.dy, d.dx) + math.pi / 2;
    a = (a % (2 * math.pi) + 2 * math.pi) % (2 * math.pi);
    final slot = ((a + math.pi / 12) / (math.pi / 6)).floor() % 12;
    final minor = dist < r * 0.62;
    final ch = _Chord(slot, minor);
    setState(() {
      _shown = ch;
      if (!_playing) _slots[_slotSel] = ch;
      _slotSel = (_slotSel + 1) % 4;
    });
    _sound(ch);
  }

  @override
  Widget build(BuildContext context) {
    final shown = _shown;
    return StudioPage(
      title: 'CHORD LAB',
      accent: const Color(0xFFA78BFA),
      help: 'A chord is three notes played together. This wheel is the "circle of fifths", the map musicians use to find chords that sound good together.\n\n• Tap the OUTER ring for a major chord (bright and happy) and the INNER ring for a minor chord (darker and sadder). Each tap also fills the next empty slot of your 4-chord loop.\n• Pick a HOME KEY with the chips under the wheel. The glowing chords are the ones that belong to that key. The Roman numbers tell you their job: I is home, V pulls you back to I, IV is gentle.\n• Press Play to hear your 4 chords on a loop. Tap a slot to choose which one your next tap replaces.\n• Try the ready-made progressions: a lot of famous songs use I, V, vi, IV!',
      stage: Column(children: [
        Expanded(
          flex: 5,
          child: LayoutBuilder(builder: (context, box) {
            _size = Size(box.maxWidth, box.maxHeight);
            return GestureDetector(onTapDown: (d) => _tapWheel(d.localPosition), child: CustomPaint(size: _size, painter: _WheelPainter(this)));
          }),
        ),
        SizedBox(height: 44, child: CustomPaint(size: const Size(double.infinity, 44), painter: _KeysPainter(shown?.notes ?? const []))),
        Padding(
          padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
          child: Row(children: [
            for (var i = 0; i < 4; i++)
              Expanded(
                child: GestureDetector(
                  onTap: () => setState(() {
                    _slotSel = i;
                    final c = _slots[i];
                    if (c != null) {
                      _shown = c;
                      _sound(c);
                    }
                  }),
                  child: Container(
                    margin: const EdgeInsets.symmetric(horizontal: 4),
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(16), color: (_playing && _beat == i) ? const Color(0xFFA78BFA) : Colors.white.withValues(alpha: _slotSel == i ? 0.16 : 0.07), border: Border.all(color: _slotSel == i ? const Color(0xFFA78BFA) : Colors.white12, width: _slotSel == i ? 2 : 1)),
                    child: Column(children: [
                      Text(_slots[i]?.name ?? '—', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
                      Text(_slots[i] == null ? '' : _roman(_slots[i]!), style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w800)),
                    ]),
                  ),
                ),
              ),
          ]),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'HOME', children: [for (var i = 0; i < 12; i++) StudioChip(label: _kNames[i], selected: _home == i, color: const Color(0xFFFBBF24), onTap: () => setState(() => _home = i))]),
        StudioRow(children: [
          StudioButton(icon: _playing ? Icons.stop_rounded : Icons.play_arrow_rounded, label: _playing ? 'Stop' : 'Play loop', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _playing = !_playing;
                _beat = -1;
                _acc = 99;
              })),
          StudioChip(label: 'Pop: I V vi IV', selected: false, color: const Color(0xFFF472B6), onTap: () => _preset([_Chord(_home, false), _Chord((_home + 1) % 12, false), _Chord(_home, true), _Chord((_home + 11) % 12, false)])),
          StudioChip(label: 'Sad: vi IV I V', selected: false, color: const Color(0xFF38BDF8), onTap: () => _preset([_Chord(_home, true), _Chord((_home + 11) % 12, false), _Chord(_home, false), _Chord((_home + 1) % 12, false)])),
          StudioChip(label: 'Jazz: ii V I', selected: false, color: const Color(0xFF4ADE80), onTap: () => _preset([_Chord((_home + 11) % 12, true), _Chord((_home + 1) % 12, false), _Chord(_home, false), _Chord(_home, false)])),
          StudioButton(icon: Icons.delete_outline_rounded, label: 'Clear', onTap: () => setState(() {
                for (var i = 0; i < 4; i++) {
                  _slots[i] = null;
                }
                _slotSel = 0;
              })),
        ]),
        StudioRow(label: 'SOUND', children: [for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFFA78BFA), onTap: () => setState(() => _inst = i.$1))]),
        StudioSlider(label: 'Speed', value: _bpm, min: 50, max: 160, display: '${_bpm.round()} bpm', color: const Color(0xFFA78BFA), onChanged: (v) => setState(() => _bpm = v)),
      ]),
    );
  }

  void _preset(List<_Chord> c) {
    setState(() {
      for (var i = 0; i < 4; i++) {
        _slots[i] = c[i];
      }
      _slotSel = 0;
    });
  }
}

extension on _Chord {
  _Chord minorOf() => _Chord(slot == 0 ? 0 : slot, true);
}

class _WheelPainter extends CustomPainter {
  _WheelPainter(this.s);
  final _NgmyChordWheelStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.46);
    final r = math.min(size.width, size.height * 0.9) * 0.46;
    canvas.drawCircle(c, r + 6, Paint()..color = const Color(0xFF14121F));
    final friends = s._friends;
    for (var slot = 0; slot < 12; slot++) {
      final a0 = -math.pi / 2 + (slot - 0.5) * math.pi / 6;
      for (final minor in const [false, true]) {
        final ch = _Chord(slot, minor);
        final outer = minor ? r * 0.62 : r;
        final inner = minor ? r * 0.18 : r * 0.62;
        final isFriend = friends.contains(ch);
        final isShown = s._shown == ch;
        final hue = (slot * 30.0 + 250) % 360;
        final base = HSVColor.fromAHSV(1, hue, minor ? 0.5 : 0.62, minor ? 0.62 : 0.92).toColor();
        final path = Path()
          ..arcTo(Rect.fromCircle(center: c, radius: outer), a0 + 0.012, math.pi / 6 - 0.024, false)
          ..arcTo(Rect.fromCircle(center: c, radius: inner), a0 + math.pi / 6 - 0.012, -(math.pi / 6 - 0.024), false)
          ..close();
        canvas.drawPath(path, Paint()..color = isShown ? Colors.white : base.withValues(alpha: isFriend ? 1 : 0.38));
        if (isFriend) canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..color = Colors.white.withValues(alpha: 0.85));
        final mid = a0 + math.pi / 12;
        final rr = (outer + inner) / 2;
        final pos = c + Offset(math.cos(mid), math.sin(mid)) * rr;
        final tp = TextPainter(text: TextSpan(text: ch.name, style: TextStyle(color: isShown ? Colors.black : Colors.white, fontSize: minor ? 12 : 15, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, pos - Offset(tp.width / 2, tp.height / 2 + (isFriend ? 6 : 0)));
        if (isFriend) {
          final rm = s._roman(ch);
          final tr = TextPainter(text: TextSpan(text: rm, style: TextStyle(color: isShown ? Colors.black54 : Colors.white70, fontSize: 9.5, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
          tr.paint(canvas, pos - Offset(tr.width / 2, -tp.height / 2 + 4));
        }
      }
    }
    canvas.drawCircle(c, r * 0.18, Paint()..color = const Color(0xFF14121F));
    final home = TextPainter(text: TextSpan(text: s._shown?.name ?? _kNames[s._home], style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    home.paint(canvas, c - Offset(home.width / 2, home.height / 2));
  }

  @override
  bool shouldRepaint(covariant _WheelPainter old) => true;
}

class _KeysPainter extends CustomPainter {
  _KeysPainter(this.notes);
  final List<int> notes;

  @override
  void paint(Canvas canvas, Size size) {
    const white = [0, 2, 4, 5, 7, 9, 11];
    const black = {0: 1, 1: 3, 3: 6, 4: 8, 5: 10};
    const octs = 2;
    final w = size.width / (7 * octs);
    final lit = {for (final n in notes) ((n % 12) + 12) % 12};
    for (var i = 0; i < 7 * octs; i++) {
      final semi = white[i % 7];
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(i * w + 1, 0, w - 2, size.height), const Radius.circular(5)), Paint()..color = lit.contains(semi) ? const Color(0xFFA78BFA) : Colors.white.withValues(alpha: 0.9));
    }
    for (var i = 0; i < 7 * octs; i++) {
      final b = black[i % 7];
      if (b == null) continue;
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(i * w + w * 0.68, 0, w * 0.64, size.height * 0.6), const Radius.circular(4)), Paint()..color = lit.contains(b) ? const Color(0xFF7C3AED) : const Color(0xFF111827));
    }
  }

  @override
  bool shouldRepaint(covariant _KeysPainter old) => true;
}
