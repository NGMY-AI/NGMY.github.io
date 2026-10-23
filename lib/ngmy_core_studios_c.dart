import 'dart:math' as math;

import 'package:flutter/foundation.dart' show visibleForTesting;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// 11. PIANO STUDIO: a real two-octave keyboard, six instruments, and songs to learn or listen to.
// ═════════════════════════════════════════════════════════════════════════════

/// Notes are written like: C D E F G A B, with # or b for sharps and flats, + for an octave up,
/// - for an octave down, and :2 for how many beats it lasts (1 if left out).
class _Song {
  const _Song(this.title, this.bpm, this.notes);
  final String title;
  final int bpm;
  final String notes;
}

const List<_Song> _kSongs = [
  _Song('Twinkle Twinkle', 100, 'C C G G A A G:2 F F E E D D C:2 G G F F E E D:2 G G F F E E D:2 C C G G A A G:2 F F E E D D C:2'),
  _Song('Ode to Joy', 110, 'E E F G G F E D C C D E E:1.5 D:.5 D:2 E E F G G F E D C C D E D:1.5 C:.5 C:2'),
  _Song('Mary Had a Little Lamb', 108, 'E D C D E E E:2 D D D:2 E G G:2 E D C D E E E E D D E D C:3'),
  _Song('Happy Birthday', 96, 'G:.75 G:.25 A G C+ B:2 G:.75 G:.25 A G D+ C+:2 G:.75 G:.25 G+ E+ C+ B A:2 F+:.75 F+:.25 E+ C+ D+ C+:2'),
  _Song('Jingle Bells', 120, 'E E E:2 E E E:2 E G C:1.5 D:.5 E:4 F F F:1.5 F:.5 F E E E:.5 E:.5 E D D E D:2 G:2'),
  _Song('Silent Night', 70, 'G:1.5 A:.5 G E:3 G:1.5 A:.5 G E:3 D+:2 D+ B:3 C+:2 C+ G:3 A:2 A C+:1.5 B:.5 A G:1.5 A:.5 G E:3 A:2 A C+:1.5 B:.5 A G:1.5 A:.5 G E:3 D+:2 D+ F+:1.5 D+:.5 B C+:3 E+:3 C+ G E G:1.5 F:.5 D C:4'),
  _Song('Fur Elise', 120, 'E+:.5 D#+:.5 E+:.5 D#+:.5 E+:.5 B:.5 D+:.5 C+:.5 A:1.5 C:.5 E:.5 A:.5 B:1.5 E:.5 G#:.5 B:.5 C+:1.5 E:.5 E+:.5 D#+:.5 E+:.5 D#+:.5 E+:.5 B:.5 D+:.5 C+:.5 A:1.5 C:.5 E:.5 A:.5 B:1.5 E:.5 C+:.5 B:.5 A:3'),
  _Song('Frere Jacques', 104, 'C D E C C D E C E F G:2 E F G:2 G:.5 A:.5 G:.5 F:.5 E C G:.5 A:.5 G:.5 F:.5 E C C G- C:2 C G- C:2'),
  _Song('Row Your Boat', 100, 'C:1.5 C:1.5 C E:1.5 E D:1.5 E F:1.5 G:3 C+:.33 C+:.33 C+:.33 G:.33 G:.33 G:.33 E:.33 E:.33 E:.33 C:.33 C:.33 C:.33 G:1.5 F:.5 E:1.5 D:.5 C:3'),
  _Song('Hot Cross Buns', 110, 'E D C:2 E D C:2 C:.5 C:.5 C:.5 C:.5 D:.5 D:.5 D:.5 D:.5 E D C:2'),
  _Song('London Bridge', 110, 'G:1.5 A:.5 G F E F G:2 D E F:2 E F G:2 G:1.5 A:.5 G F E F G:2 D:2 G E C:2'),
  _Song('When the Saints', 112, 'C E F G:3 C E F G:3 C E F G:2 E C E D:3 E E D C C E G G:3 G E F G:2 F E C D C:3'),
  _Song('Yankee Doodle', 120, 'C C D E C E D G- C C D E C:2 B-:2 C C D E F E D C B- G- A- B- C:2 C:2'),
  _Song('Old MacDonald', 116, 'G G G D E E D:2 B B A A G:2 D G G G D E E D:2 B B A A G:2'),
  _Song('Au Clair de la Lune', 90, 'C C C D E:2 D:2 C E D D C:4'),
  _Song('Canon (bass line)', 76, 'E+:2 D+:2 C+:2 B:2 A:2 G:2 A:2 B:2 C+:2 G:2 A:2 E:2 F:2 C:2 F:2 G:2'),
  _Song('C Major Scale', 100, 'C D E F G A B C+ B A G F E D C:2'),
  _Song('Pentatonic Run', 120, 'C D E G A G E D C D E G A+ C+:2 A G E D C:2'),
];

const List<int> _kWhite = [0, 2, 4, 5, 7, 9, 11];
const Map<String, int> _kLetters = {'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11};

List<(int, double)> _parseSong(String s) {
  final out = <(int, double)>[];
  for (final tok in s.split(RegExp(r'\s+'))) {
    if (tok.isEmpty) continue;
    final parts = tok.split(':');
    var p = parts[0];
    final beats = parts.length > 1 ? (double.tryParse(parts[1].startsWith('.') ? '0${parts[1]}' : parts[1]) ?? 1.0) : 1.0;
    var semis = _kLetters[p[0]] ?? 0;
    p = p.substring(1);
    for (final ch in p.split('')) {
      if (ch == '#') semis += 1;
      if (ch == 'b') semis -= 1;
      if (ch == '+') semis += 12;
      if (ch == '-') semis -= 12;
    }
    out.add((semis, beats));
  }
  // Keep the whole song on the two octaves of the keyboard.
  if (out.isNotEmpty) {
    var lo = out.map((n) => n.$1).reduce(math.min);
    var hi = out.map((n) => n.$1).reduce(math.max);
    while (lo < 0) {
      lo += 12;
      hi += 12;
      for (var i = 0; i < out.length; i++) {
        out[i] = (out[i].$1 + 12, out[i].$2);
      }
    }
    while (hi > 23 && lo - 12 >= 0) {
      lo -= 12;
      hi -= 12;
      for (var i = 0; i < out.length; i++) {
        out[i] = (out[i].$1 - 12, out[i].$2);
      }
    }
  }
  return out;
}

/// The notes of a song written in the short notation, for tests.
@visibleForTesting
List<(int, double)> ngmyParseSong(String s) => _parseSong(s);

@visibleForTesting
int get ngmySongCount => _kSongs.length;

@visibleForTesting
String ngmySongNotes(int i) => _kSongs[i].notes;

class NgmyPianoStudio extends StatefulWidget {
  const NgmyPianoStudio({super.key});

  @override
  State<NgmyPianoStudio> createState() => _NgmyPianoStudioState();
}

class _NgmyPianoStudioState extends State<NgmyPianoStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final Map<int, int> _pointers = {}; // pointer id -> note it is holding
  final Map<int, int> _flash = {}; // note -> when it last sounded
  final Set<int> _down = {};
  String _inst = 'piano';
  String _mode = 'free'; // free, learn, listen
  int _songIndex = 0;
  int _learnAt = 0;
  bool _labels = true;
  int _octave = 0;
  double _tempo = 1.0;
  // Recording and playback.
  bool _rec = false;
  int _recStart = 0;
  final List<(int, int)> _recorded = []; // (ms since start, note)
  List<(double, int)> _queue = [];
  int _queueStart = 0;
  String _queueKind = '';

  List<(int, double)> get _song => _parseSong(_kSongs[_songIndex].notes);

  int _noteMs() => _inst == 'organ' || _inst == 'synth' || _inst == 'flute' ? 650 : 1400;

  void _press(int semis) {
    final note = semis + _octave * 12;
    NgmyTone.playNote(_inst, note, ms: _noteMs());
    HapticFeedback.selectionClick();
    _flash[semis] = nowMs;
    _down.add(semis);
    if (_rec) _recorded.add((nowMs - _recStart, semis));
    if (_mode == 'learn') {
      final s = _song;
      if (_learnAt < s.length && s[_learnAt].$1 == semis) {
        _learnAt++;
      }
    }
  }

  void _release(int semis) => _down.remove(semis);

  void _startListen() {
    final s = _song;
    final beatMs = 60000 / (_kSongs[_songIndex].bpm * _tempo);
    var t = 0.0;
    _queue = [];
    for (final n in s) {
      _queue.add((t, n.$1));
      t += n.$2 * beatMs;
    }
    _queueStart = nowMs;
    _queueKind = 'listen';
  }

  void _startPlayback() {
    if (_recorded.isEmpty) return;
    _queue = [for (final r in _recorded) (r.$1.toDouble(), r.$2)];
    _queueStart = nowMs;
    _queueKind = 'playback';
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    while (_queue.isNotEmpty && nowMs - _queueStart >= _queue.first.$1) {
      final n = _queue.removeAt(0);
      NgmyTone.playNote(_inst, n.$2 + _octave * 12, ms: _noteMs());
      _flash[n.$2] = nowMs;
      _down.add(n.$2);
      later(220, () => _down.remove(n.$2));
    }
    if (_queue.isEmpty && _queueKind.isNotEmpty && nowMs - _queueStart > 600) {
      _queueKind = '';
      if (_mode == 'listen') _mode = 'free';
    }
  }

  // The keyboard geometry.
  static const int _whites = 14;

  int? _keyAt(Offset p, Size size) {
    final ww = size.width / _whites;
    final bw = ww * 0.62;
    final bh = size.height * 0.6;
    if (p.dy < 0 || p.dy > size.height || p.dx < 0 || p.dx > size.width) return null;
    if (p.dy < bh) {
      for (var i = 0; i < _whites - 1; i++) {
        if (![0, 1, 3, 4, 5].contains(i % 7)) continue;
        final cx = (i + 1) * ww;
        if ((p.dx - cx).abs() < bw / 2) return _kWhite[i % 7] + 12 * (i ~/ 7) + 1;
      }
    }
    final i = (p.dx / ww).floor().clamp(0, _whites - 1);
    return _kWhite[i % 7] + 12 * (i ~/ 7);
  }

  @override
  Widget build(BuildContext context) {
    final song = _kSongs[_songIndex];
    final notes = _song;
    final expected = _mode == 'learn' && _learnAt < notes.length ? notes[_learnAt].$1 : null;
    final done = _mode == 'learn' && _learnAt >= notes.length;
    return StudioPage(
      title: 'PIANO STUDIO',
      accent: const Color(0xFFFACC15),
      help: 'A two-octave keyboard. Touch the keys, and use several fingers for chords. Slide across the keys to glide.\n\nPick an instrument: piano, organ, bell, pluck, synth or flute.\n\nLEARN: pick a song and the next key to press glows. Press it and the glow moves on. LISTEN: the piano plays the song for you. Both use the songs list: Twinkle Twinkle, Ode to Joy, Happy Birthday, Silent Night, Fur Elise and more.\n\nRECORD saves what you play so you can play it back. Octave moves the keyboard up or down.',
      stage: Column(children: [
        // The song card.
        Container(
          margin: const EdgeInsets.fromLTRB(12, 8, 12, 8),
          padding: const EdgeInsets.fromLTRB(14, 10, 14, 10),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), color: Colors.white.withValues(alpha: 0.05), border: Border.all(color: const Color(0xFFFACC15).withValues(alpha: 0.3))),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              const Icon(Icons.music_note_rounded, color: Color(0xFFFACC15), size: 18),
              const SizedBox(width: 6),
              Expanded(child: Text(_mode == 'free' ? 'Free play' : song.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
              if (_rec) const Text('● RECORDING', style: TextStyle(color: Color(0xFFF87171), fontWeight: FontWeight.w900, fontSize: 11)),
            ]),
            const SizedBox(height: 4),
            Text(
              done
                  ? 'You played the whole song. Well done!'
                  : _mode == 'learn'
                      ? 'Press the glowing key: ${NgmyTone.nameOf(expected ?? 0)}  (${_learnAt + 1} of ${notes.length})'
                      : _mode == 'listen'
                          ? 'Listen and watch the keys.'
                          : 'Touch the keys. Choose a song below to learn it or hear it.',
              style: const TextStyle(color: Colors.white60, fontSize: 12.5),
            ),
            if (_mode == 'learn' || _mode == 'listen') ...[
              const SizedBox(height: 8),
              ClipRRect(
                borderRadius: BorderRadius.circular(4),
                child: LinearProgressIndicator(
                  minHeight: 5,
                  value: _mode == 'learn' ? (_learnAt / notes.length).clamp(0.0, 1.0) : (_queue.isEmpty ? 1 : 1 - _queue.length / notes.length),
                  backgroundColor: Colors.white12,
                  color: const Color(0xFFFACC15),
                ),
              ),
            ],
          ]),
        ),
        const Spacer(),
        // The keyboard.
        Padding(
          padding: const EdgeInsets.fromLTRB(6, 0, 6, 10),
          child: LayoutBuilder(builder: (context, box) {
            final size = Size(box.maxWidth, 210);
            return Listener(
              onPointerDown: (e) {
                final k = _keyAt(e.localPosition, size);
                if (k != null) {
                  _pointers[e.pointer] = k;
                  _press(k);
                }
              },
              onPointerMove: (e) {
                final k = _keyAt(e.localPosition, size);
                final old = _pointers[e.pointer];
                if (k != null && k != old) {
                  if (old != null) _release(old);
                  _pointers[e.pointer] = k;
                  _press(k);
                }
              },
              onPointerUp: (e) {
                final old = _pointers.remove(e.pointer);
                if (old != null) _release(old);
              },
              onPointerCancel: (e) {
                final old = _pointers.remove(e.pointer);
                if (old != null) _release(old);
              },
              child: SizedBox(
                width: size.width,
                height: size.height,
                child: CustomPaint(painter: _KeysPainter(_down, _flash, nowMs, expected, _labels, _octave)),
              ),
            );
          }),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'SOUND', children: [
          for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFFFACC15), onTap: () => setState(() => _inst = i.$1)),
        ]),
        StudioRow(label: 'MODE', children: [
          StudioChip(label: 'Free play', icon: Icons.piano_rounded, selected: _mode == 'free', color: const Color(0xFFFACC15), onTap: () => setState(() {
                _mode = 'free';
                _queue = [];
              })),
          StudioChip(label: 'Learn', icon: Icons.school_rounded, selected: _mode == 'learn', color: const Color(0xFFFACC15), onTap: () => setState(() {
                _mode = 'learn';
                _learnAt = 0;
                _queue = [];
              })),
          StudioChip(label: 'Listen', icon: Icons.headphones_rounded, selected: _mode == 'listen', color: const Color(0xFFFACC15), onTap: () => setState(() {
                _mode = 'listen';
                _startListen();
              })),
        ]),
        SizedBox(
          height: 40,
          child: ListView(scrollDirection: Axis.horizontal, children: [
            for (var i = 0; i < _kSongs.length; i++)
              StudioChip(label: _kSongs[i].title, icon: Icons.queue_music_rounded, selected: _songIndex == i, color: const Color(0xFF38BDF8), onTap: () => setState(() {
                    _songIndex = i;
                    _learnAt = 0;
                    if (_mode == 'free') _mode = 'learn';
                    if (_mode == 'listen') _startListen();
                  })),
          ]),
        ),
        StudioRow(children: [
          StudioButton(icon: _rec ? Icons.stop_rounded : Icons.fiber_manual_record_rounded, label: _rec ? 'Stop' : 'Record', color: const Color(0xFFF87171), onTap: () => setState(() {
                _rec = !_rec;
                if (_rec) {
                  _recorded.clear();
                  _recStart = nowMs;
                }
              })),
          StudioButton(icon: Icons.play_arrow_rounded, label: 'Play back', color: const Color(0xFF4ADE80), onTap: () => setState(_startPlayback)),
          StudioButton(icon: Icons.arrow_downward_rounded, label: 'Octave', onTap: () => setState(() => _octave = (_octave - 1).clamp(-1, 1))),
          StudioButton(icon: Icons.arrow_upward_rounded, label: 'Octave', onTap: () => setState(() => _octave = (_octave + 1).clamp(-1, 1))),
          StudioChip(label: 'Names', selected: _labels, color: const Color(0xFFFACC15), onTap: () => setState(() => _labels = !_labels)),
        ]),
        StudioSlider(label: 'Song speed', value: _tempo, min: 0.5, max: 1.8, display: '${_tempo.toStringAsFixed(1)}x', onChanged: (v) => setState(() => _tempo = v), color: const Color(0xFFFACC15)),
      ]),
    );
  }
}

class _KeysPainter extends CustomPainter {
  _KeysPainter(this.down, this.flash, this.now, this.expected, this.labels, this.octave);
  final Set<int> down;
  final Map<int, int> flash;
  final int now;
  final int? expected;
  final bool labels;
  final int octave;

  @override
  void paint(Canvas canvas, Size size) {
    final ww = size.width / 14;
    final bw = ww * 0.62;
    final bh = size.height * 0.6;
    for (var i = 0; i < 14; i++) {
      final semis = _kWhite[i % 7] + 12 * (i ~/ 7);
      final lit = down.contains(semis) || now - (flash[semis] ?? -1000) < 160;
      final want = expected == semis;
      final rect = Rect.fromLTWH(i * ww + 1, 0, ww - 2, size.height);
      final rr = RRect.fromRectAndCorners(rect, bottomLeft: const Radius.circular(10), bottomRight: const Radius.circular(10));
      canvas.drawRRect(rr, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: lit ? [const Color(0xFFFDE047), const Color(0xFFFACC15)] : [const Color(0xFFF8FAFC), const Color(0xFFCBD5E1)]).createShader(rect));
      if (want) {
        final pulse = 0.5 + 0.5 * math.sin(now * 0.012);
        canvas.drawRRect(rr, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFF38BDF8).withValues(alpha: 0.5 + 0.5 * pulse));
        canvas.drawRRect(rr, Paint()..color = const Color(0xFF38BDF8).withValues(alpha: 0.2 + 0.2 * pulse));
      }
      if (labels) {
        final tp = TextPainter(text: TextSpan(text: NgmyTone.nameOf(semis), style: const TextStyle(color: Color(0xFF64748B), fontSize: 10, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, Offset(i * ww + (ww - tp.width) / 2, size.height - 20));
      }
    }
    for (var i = 0; i < 13; i++) {
      if (![0, 1, 3, 4, 5].contains(i % 7)) continue;
      final semis = _kWhite[i % 7] + 12 * (i ~/ 7) + 1;
      final lit = down.contains(semis) || now - (flash[semis] ?? -1000) < 160;
      final want = expected == semis;
      final rect = Rect.fromLTWH((i + 1) * ww - bw / 2, 0, bw, bh);
      final rr = RRect.fromRectAndCorners(rect, bottomLeft: const Radius.circular(7), bottomRight: const Radius.circular(7));
      canvas.drawRRect(rr.shift(const Offset(0, 3)), Paint()..color = Colors.black.withValues(alpha: 0.5)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3));
      canvas.drawRRect(rr, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: lit ? [const Color(0xFFFACC15), const Color(0xFFEAB308)] : [const Color(0xFF1E293B), const Color(0xFF020617)]).createShader(rect));
      if (want) {
        final pulse = 0.5 + 0.5 * math.sin(now * 0.012);
        canvas.drawRRect(rr, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFF38BDF8).withValues(alpha: 0.5 + 0.5 * pulse));
      }
    }
  }

  @override
  bool shouldRepaint(covariant _KeysPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 12. DRUM PADS: tap the pads to play, record a loop, and layer more on top.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyDrumStudio extends StatefulWidget {
  const NgmyDrumStudio({super.key});

  @override
  State<NgmyDrumStudio> createState() => _NgmyDrumStudioState();
}

class _NgmyDrumStudioState extends State<NgmyDrumStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const _pads = <(String, String, Color)>[
    ('kick', 'Kick', Color(0xFFF87171)),
    ('snare', 'Snare', Color(0xFFFACC15)),
    ('hat', 'Hat', Color(0xFF38BDF8)),
    ('open', 'Open hat', Color(0xFF22D3EE)),
    ('clap', 'Clap', Color(0xFFA78BFA)),
    ('tom', 'Tom', Color(0xFFFB923C)),
    ('low', 'Low tom', Color(0xFFEF4444)),
    ('rim', 'Rim', Color(0xFFF472B6)),
    ('cow', 'Cowbell', Color(0xFFFDE047)),
    ('crash', 'Crash', Color(0xFF4ADE80)),
    ('shake', 'Shaker', Color(0xFF2DD4BF)),
    ('bass', 'Bass', Color(0xFFC084FC)),
    ('n0', 'C', Color(0xFF60A5FA)),
    ('n4', 'E', Color(0xFF34D399)),
    ('n7', 'G', Color(0xFFFBBF24)),
    ('n9', 'A', Color(0xFFF472B6)),
  ];
  final List<int> _flash = List.filled(16, -1000);
  final Set<(int, int)> _loop = {}; // (pad, step)
  int _kit = 0;
  bool _playing = true;
  bool _rec = false;
  bool _click = false;
  double _bpm = 100;
  int _step = -1;
  double _acc = 0;

  void _hit(int pad, {bool fromLoop = false}) {
    final id = _pads[pad].$1;
    _flash[pad] = nowMs;
    if (id.startsWith('n')) {
      final semi = int.parse(id.substring(1));
      NgmyTone.playNote('synth', semi + (_kit == 1 ? 12 : 0), ms: 420, volume: 0.6);
    } else if (id == 'bass') {
      NgmyTone.play(65 * (_kit == 2 ? 0.8 : 1), ms: 380, sweep: 0.3, volume: 0.9);
    } else {
      NgmyTone.drum(id, kit: _kit);
    }
    if (!fromLoop) {
      HapticFeedback.lightImpact();
      if (_rec && _playing) {
        // Land it on the nearest beat of the loop.
        final stepLen = 60 / _bpm / 4;
        var s = _step < 0 ? 0 : _step;
        if (_acc > stepLen / 2) s = (s + 1) % 16;
        _loop.add((pad, s));
      }
    }
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    if (!_playing) return;
    _acc += dt;
    final stepLen = 60 / _bpm / 4;
    while (_acc >= stepLen) {
      _acc -= stepLen;
      _step = (_step + 1) % 16;
      if (_click && _step % 4 == 0) NgmyTone.play(_step == 0 ? 1600 : 1100, ms: 40, wave: 'square', volume: 0.2);
      for (final h in _loop.where((h) => h.$2 == _step).toList()) {
        _hit(h.$1, fromLoop: true);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'DRUM PADS',
      accent: const Color(0xFFF87171),
      help: 'Sixteen pads. Tap them to play drums, a bass note and four notes of a chord.\n\nPress Record, then tap pads in time with the beat. Whatever you tap goes into a one-bar loop that keeps playing, and you can keep adding more on top, one layer after another. Clear wipes the loop.\n\nThe row of dots shows your loop. The white line is where it is now. Change the Kit for a different sound, and the tempo for faster or slower.',
      stage: Column(children: [
        // The loop, as dots along a ruler.
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 10, 14, 4),
          child: SizedBox(
            height: 70,
            child: CustomPaint(size: const Size(double.infinity, 70), painter: _LoopPainter(_loop, _step, _pads.map((p) => p.$3).toList(), _rec)),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 4, 12, 10),
            child: GridView.builder(
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4, mainAxisSpacing: 10, crossAxisSpacing: 10),
              itemCount: 16,
              itemBuilder: (_, i) {
                final p = _pads[i];
                final k = (1 - (nowMs - _flash[i]) / 220).clamp(0.0, 1.0);
                return Listener(
                  onPointerDown: (_) => _hit(i),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(18),
                      gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(p.$3.withValues(alpha: 0.35), Colors.white, k * 0.55)!, Color.lerp(p.$3.withValues(alpha: 0.12), p.$3, k)!]),
                      border: Border.all(color: p.$3.withValues(alpha: 0.5 + 0.5 * k), width: 1.4 + k),
                      boxShadow: [BoxShadow(color: p.$3.withValues(alpha: 0.15 + 0.6 * k), blurRadius: 10 + 18 * k)],
                    ),
                    child: Center(child: Text(p.$2, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontWeight: FontWeight.w900, fontSize: 12))),
                  ),
                );
              },
            ),
          ),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Tempo', value: _bpm, min: 60, max: 170, display: '${_bpm.round()}', onChanged: (v) => setState(() => _bpm = v), color: const Color(0xFFF87171)),
        StudioRow(label: 'KIT', children: [
          for (final k in const [(0, 'Classic'), (1, 'Bright'), (2, 'Deep')]) StudioChip(label: k.$2, selected: _kit == k.$1, color: const Color(0xFFF87171), onTap: () => setState(() => _kit = k.$1)),
        ]),
        StudioRow(children: [
          StudioButton(icon: _playing ? Icons.pause_rounded : Icons.play_arrow_rounded, label: _playing ? 'Pause' : 'Play', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _playing = !_playing;
                if (!_playing) _step = -1;
              })),
          StudioButton(icon: _rec ? Icons.stop_rounded : Icons.fiber_manual_record_rounded, label: _rec ? 'Stop rec' : 'Record', color: const Color(0xFFF87171), onTap: () => setState(() => _rec = !_rec)),
          StudioChip(label: 'Click', icon: Icons.timer_rounded, selected: _click, color: const Color(0xFFF87171), onTap: () => setState(() => _click = !_click)),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', onTap: () => setState(_loop.clear)),
        ]),
      ]),
    );
  }
}

class _LoopPainter extends CustomPainter {
  _LoopPainter(this.loop, this.step, this.colors, this.rec);
  final Set<(int, int)> loop;
  final int step;
  final List<Color> colors;
  final bool rec;

  @override
  void paint(Canvas canvas, Size size) {
    final cw = size.width / 16;
    canvas.drawRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(14)), Paint()..color = Colors.white.withValues(alpha: 0.05));
    for (var s = 0; s < 16; s++) {
      final x = s * cw + cw / 2;
      canvas.drawLine(Offset(x, 8), Offset(x, size.height - 8), Paint()..strokeWidth = s % 4 == 0 ? 1.4 : 0.6..color = Colors.white.withValues(alpha: s % 4 == 0 ? 0.18 : 0.08));
    }
    for (final h in loop) {
      final x = h.$2 * cw + cw / 2;
      final y = 10 + (h.$1 / 15) * (size.height - 20);
      canvas.drawCircle(Offset(x, y), 4, Paint()..color = colors[h.$1]);
    }
    if (step >= 0) {
      final x = step * cw + cw / 2;
      canvas.drawLine(Offset(x, 4), Offset(x, size.height - 4), Paint()..strokeWidth = 2.5..color = Colors.white.withValues(alpha: 0.9));
    }
    if (rec) canvas.drawRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(14)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFF87171));
  }

  @override
  bool shouldRepaint(covariant _LoopPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 13. CHORD LAB: learn how chords are built, hear them, and make a chord loop.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyChordStudio extends StatefulWidget {
  const NgmyChordStudio({super.key});

  @override
  State<NgmyChordStudio> createState() => _NgmyChordStudioState();
}

class _NgmyChordStudioState extends State<NgmyChordStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const _types = <String, (String, List<int>, String)>{
    'maj': ('Major', [0, 4, 7], 'bright and happy'),
    'min': ('Minor', [0, 3, 7], 'darker and sadder'),
    '7': ('7th', [0, 4, 7, 10], 'bluesy, wants to move'),
    'maj7': ('Major 7', [0, 4, 7, 11], 'dreamy and smooth'),
    'm7': ('Minor 7', [0, 3, 7, 10], 'cool and mellow'),
    'sus2': ('Sus 2', [0, 2, 7], 'open and floating'),
    'sus4': ('Sus 4', [0, 5, 7], 'tense, wants to resolve'),
    'dim': ('Dim', [0, 3, 6], 'spooky and tense'),
    'aug': ('Aug', [0, 4, 8], 'strange and dreamlike'),
  };
  static const _degrees = ['Root', '2nd', '3rd', '4th', '5th', '6th', '7th'];
  int _root = 0;
  String _type = 'maj';
  String _inst = 'piano';
  double _bpm = 80;
  final List<(int, String)> _slots = [(0, 'maj'), (7, 'maj'), (9, 'min'), (5, 'maj')];
  int _slot = 0;
  bool _loop = false;
  int _playSlot = -1;
  double _acc = 0;
  int _beat = 0;
  int _flashAt = -1000;

  List<int> _notes(int root, String type) => [for (final i in _types[type]!.$2) root + i];

  String _chordName(int root, String type) {
    final t = _types[type]!.$1;
    return '${NgmyTone.nameOf(root)} ${t.toLowerCase()}';
  }

  void _strum(List<int> notes, {bool block = false}) {
    _flashAt = nowMs;
    if (block) {
      NgmyTone.chord(_inst, notes, ms: 1400);
    } else {
      for (var i = 0; i < notes.length; i++) {
        later(110 * i, () => NgmyTone.playNote(_inst, notes[i], ms: 1300));
      }
    }
  }

  void _preset(String name) {
    // Chords as steps of the major scale from the chosen root.
    const major = [0, 2, 4, 5, 7, 9, 11];
    (int, String) c(int degree, String type, [int shift = 0]) => ((_root + major[degree] + shift) % 12, type);
    setState(() {
      switch (name) {
        case 'pop':
          _slots..clear()..addAll([c(0, 'maj'), c(4, 'maj'), c(5, 'min'), c(3, 'maj')]);
        case 'jazz':
          _slots..clear()..addAll([c(1, 'm7'), c(4, '7'), c(0, 'maj7'), c(0, 'maj7')]);
        case 'blues':
          _slots..clear()..addAll([c(0, '7'), c(3, '7'), c(0, '7'), c(4, '7')]);
        case 'sad':
          _slots..clear()..addAll([c(5, 'min'), c(3, 'maj'), c(0, 'maj'), c(4, 'maj')]);
        default:
          _slots..clear()..addAll([c(0, 'min'), c(6, 'maj', -1), c(5, 'maj', -1), c(4, 'maj')]);
      }
    });
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    if (!_loop) return;
    _acc += dt;
    final beatLen = 60 / _bpm;
    while (_acc >= beatLen) {
      _acc -= beatLen;
      if (_beat % 4 == 0) {
        _playSlot = (_beat ~/ 4) % _slots.length;
        final s = _slots[_playSlot];
        final n = _notes(s.$1, s.$2);
        NgmyTone.chord(_inst, n, ms: 1800, volume: 0.42);
      } else {
        final s = _slots[_playSlot < 0 ? 0 : _playSlot];
        final n = _notes(s.$1, s.$2);
        NgmyTone.playNote(_inst, n[(_beat % 4 - 1) % n.length] + 12, ms: 600, volume: 0.35);
      }
      _beat++;
      _flashAt = nowMs;
    }
  }

  @override
  Widget build(BuildContext context) {
    final notes = _notes(_root, _type);
    final t = _types[_type]!;
    return StudioPage(
      title: 'CHORD LAB',
      accent: const Color(0xFFA78BFA),
      help: 'A chord is a few notes played together. Pick a starting note (the root) and a type. The keyboard shows which notes make the chord, and the line below tells you how they are built.\n\nPress Strum to hear them one after another, or Together for all at once.\n\nThe four slots at the bottom are a chord loop. Tap a slot, then press Put in slot to place the chord you built. Loop plays them one after another. The ready-made loops use the famous chord patterns behind thousands of songs.',
      stage: ListView(padding: const EdgeInsets.all(14), children: [
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(22), gradient: LinearGradient(colors: [const Color(0xFFA78BFA).withValues(alpha: 0.3), const Color(0xFF1B1B1F)]), border: Border.all(color: const Color(0xFFA78BFA).withValues(alpha: 0.5))),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(_chordName(_root, _type), style: const TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.w900)),
            const SizedBox(height: 2),
            Text('It sounds ${t.$3}.', style: const TextStyle(color: Colors.white60, fontSize: 13)),
            const SizedBox(height: 10),
            Wrap(spacing: 8, runSpacing: 6, children: [
              for (var i = 0; i < notes.length; i++)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), color: Colors.white.withValues(alpha: 0.08), border: Border.all(color: Colors.white24)),
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Text(NgmyTone.nameOf(notes[i]), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                    Text(_interval(t.$2[i]), style: const TextStyle(color: Colors.white54, fontSize: 10)),
                  ]),
                ),
            ]),
          ]),
        ),
        const SizedBox(height: 12),
        SizedBox(height: 120, child: CustomPaint(painter: _MiniKeysPainter(notes, nowMs - _flashAt < 400 ? 1.0 : 0.0), size: const Size(double.infinity, 120))),
        const SizedBox(height: 12),
        Row(children: [
          Expanded(child: _big(Icons.graphic_eq_rounded, 'Strum', () => _strum(notes))),
          const SizedBox(width: 10),
          Expanded(child: _big(Icons.layers_rounded, 'Together', () => _strum(notes, block: true))),
        ]),
        const SizedBox(height: 16),
        const Text('YOUR CHORD LOOP', style: TextStyle(color: Colors.white38, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1.3)),
        const SizedBox(height: 8),
        Row(children: [
          for (var i = 0; i < _slots.length; i++)
            Expanded(
              child: GestureDetector(
                onTap: () => setState(() {
                  _slot = i;
                  _root = _slots[i].$1;
                  _type = _slots[i].$2;
                  _strum(_notes(_slots[i].$1, _slots[i].$2));
                }),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  height: 74,
                  margin: EdgeInsets.only(right: i == _slots.length - 1 ? 0 : 8),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    color: _playSlot == i && _loop ? const Color(0xFFA78BFA).withValues(alpha: 0.5) : Colors.white.withValues(alpha: 0.06),
                    border: Border.all(color: _slot == i ? const Color(0xFFA78BFA) : Colors.white12, width: _slot == i ? 2 : 1),
                  ),
                  child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                    Text('${i + 1}', style: const TextStyle(color: Colors.white38, fontSize: 10, fontWeight: FontWeight.w900)),
                    Text(NgmyTone.nameOf(_slots[i].$1), style: const TextStyle(color: Colors.white, fontSize: 19, fontWeight: FontWeight.w900)),
                    Text(_types[_slots[i].$2]!.$1, style: const TextStyle(color: Colors.white54, fontSize: 10)),
                  ]),
                ),
              ),
            ),
        ]),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'ROOT', children: [
          for (var i = 0; i < 12; i++) StudioChip(label: NgmyTone.names[i], selected: _root == i, color: const Color(0xFFA78BFA), onTap: () => setState(() {
                _root = i;
                _strum(_notes(_root, _type));
              })),
        ]),
        StudioRow(label: 'TYPE', children: [
          for (final e in _types.entries) StudioChip(label: e.value.$1, selected: _type == e.key, color: const Color(0xFFA78BFA), onTap: () => setState(() {
                _type = e.key;
                _strum(_notes(_root, _type));
              })),
        ]),
        StudioRow(label: 'SOUND', children: [
          for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFFA78BFA), onTap: () => setState(() => _inst = i.$1)),
        ]),
        StudioRow(label: 'LOOPS', children: [
          for (final p in const [('pop', 'Pop'), ('jazz', 'Jazz'), ('blues', 'Blues'), ('sad', 'Sad song'), ('epic', 'Epic')]) StudioButton(icon: Icons.queue_music_rounded, label: p.$2, onTap: () => _preset(p.$1)),
        ]),
        StudioRow(children: [
          StudioButton(icon: Icons.add_box_rounded, label: 'Put in slot ${_slot + 1}', color: const Color(0xFFA78BFA), onTap: () => setState(() => _slots[_slot] = (_root, _type))),
          StudioButton(icon: _loop ? Icons.stop_rounded : Icons.loop_rounded, label: _loop ? 'Stop' : 'Loop', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _loop = !_loop;
                _beat = 0;
                _acc = 0;
                _playSlot = -1;
              })),
        ]),
        StudioSlider(label: 'Tempo', value: _bpm, min: 50, max: 140, display: '${_bpm.round()}', onChanged: (v) => setState(() => _bpm = v), color: const Color(0xFFA78BFA)),
      ]),
    );
  }

  String _interval(int semis) {
    const names = {0: 'Root', 2: '2nd', 3: 'minor 3rd', 4: '3rd', 5: '4th', 6: 'flat 5th', 7: '5th', 8: 'sharp 5th', 10: 'minor 7th', 11: 'major 7th', 14: '9th'};
    return names[semis] ?? '$semis';
  }

  Widget _big(IconData icon, String label, VoidCallback onTap) => Material(
        color: const Color(0xFFA78BFA).withValues(alpha: 0.18),
        borderRadius: BorderRadius.circular(16),
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 14),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, color: const Color(0xFFA78BFA)),
              const SizedBox(width: 8),
              Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
            ]),
          ),
        ),
      );
}

/// Two octaves of keys with the chord's notes lit.
class _MiniKeysPainter extends CustomPainter {
  _MiniKeysPainter(this.notes, this.flash);
  final List<int> notes;
  final double flash;

  @override
  void paint(Canvas canvas, Size size) {
    final ww = size.width / 14;
    final bw = ww * 0.62;
    final bh = size.height * 0.62;
    bool lit(int semis) => notes.contains(semis) || notes.contains(semis + 12) || notes.contains(semis - 12);
    for (var i = 0; i < 14; i++) {
      final semis = _kWhite[i % 7] + 12 * (i ~/ 7);
      final on = notes.contains(semis);
      final rect = Rect.fromLTWH(i * ww + 1, 0, ww - 2, size.height);
      canvas.drawRRect(
        RRect.fromRectAndCorners(rect, bottomLeft: const Radius.circular(8), bottomRight: const Radius.circular(8)),
        Paint()..color = on ? Color.lerp(const Color(0xFFA78BFA), Colors.white, flash * 0.4)! : const Color(0xFFE2E8F0),
      );
      if (on) {
        final tp = TextPainter(text: TextSpan(text: NgmyTone.nameOf(semis), style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, Offset(i * ww + (ww - tp.width) / 2, size.height - 22));
      }
    }
    for (var i = 0; i < 13; i++) {
      if (![0, 1, 3, 4, 5].contains(i % 7)) continue;
      final semis = _kWhite[i % 7] + 12 * (i ~/ 7) + 1;
      final on = notes.contains(semis);
      canvas.drawRRect(
        RRect.fromRectAndCorners(Rect.fromLTWH((i + 1) * ww - bw / 2, 0, bw, bh), bottomLeft: const Radius.circular(6), bottomRight: const Radius.circular(6)),
        Paint()..color = on ? Color.lerp(const Color(0xFF7C3AED), Colors.white, flash * 0.4)! : const Color(0xFF0F172A),
      );
    }
    lit(0);
  }

  @override
  bool shouldRepaint(covariant _MiniKeysPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 14. NAME MELODY: type your name and hear the tune it makes.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyNameMelodyStudio extends StatefulWidget {
  const NgmyNameMelodyStudio({super.key});

  @override
  State<NgmyNameMelodyStudio> createState() => _NgmyNameMelodyStudioState();
}

class _NgmyNameMelodyStudioState extends State<NgmyNameMelodyStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final TextEditingController _text = TextEditingController(text: 'NGMY');
  String _scale = 'Pentatonic';
  String _inst = 'bell';
  double _bpm = 130;
  bool _loop = true;
  bool _playing = false;
  int _idx = -1;
  double _acc = 0;

  List<int?> get _melody {
    final scale = kStudioScales[_scale]!;
    final out = <int?>[];
    for (final c in _text.text.toLowerCase().runes) {
      if (c >= 97 && c <= 122) {
        final i = c - 97;
        final degree = i % scale.length;
        final oct = (i ~/ scale.length) % 3; // low, middle or high
        out.add(scale[degree] + 12 * (oct - 1) + 12);
      } else if (c == 32) {
        out.add(null); // a space is a rest
      }
    }
    return out;
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  @override
  void onFrame(double dt) {
    if (!_playing) return;
    final m = _melody;
    if (m.isEmpty) return;
    _acc += dt;
    final len = 60 / _bpm / 2;
    while (_acc >= len) {
      _acc -= len;
      _idx++;
      if (_idx >= m.length) {
        if (_loop) {
          _idx = 0;
        } else {
          _playing = false;
          _idx = -1;
          return;
        }
      }
      final n = m[_idx];
      if (n != null) NgmyTone.playNote(_inst, n, ms: 700, volume: 0.6);
    }
  }

  @override
  Widget build(BuildContext context) {
    final m = _melody;
    final letters = _text.text.toLowerCase().runes.where((c) => (c >= 97 && c <= 122) || c == 32).map(String.fromCharCode).toList();
    return StudioPage(
      title: 'NAME MELODY',
      accent: const Color(0xFFF472B6),
      help: 'Every letter is a note. Type your name, a friend\'s name or any words, and the app turns them into a tune. A space is a short rest.\n\nPick a scale (Pentatonic always sounds nice, Minor sounds sad, Blues sounds cool) and an instrument. Press Play to hear it, and watch each letter light up as its note plays. Share saves the picture of your melody.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'name-melody'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: Padding(
        padding: const EdgeInsets.all(14),
        child: RepaintBoundary(
          key: _shot,
          child: Container(
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(24), gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF3B0764), Color(0xFF0F172A)])),
            padding: const EdgeInsets.fromLTRB(10, 18, 10, 14),
            child: m.isEmpty
                ? const Center(child: Text('Type some letters below', style: TextStyle(color: Colors.white54)))
                : Column(children: [
                    Text(_text.text.trim().isEmpty ? '' : _text.text.trim(), maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
                    const SizedBox(height: 14),
                    Expanded(
                      child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
                        for (var i = 0; i < m.length; i++)
                          Expanded(
                            child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                              Expanded(
                                child: Align(
                                  alignment: Alignment.bottomCenter,
                                  child: FractionallySizedBox(
                                    heightFactor: m[i] == null ? 0.05 : ((m[i]! + 6) / 36).clamp(0.12, 1.0),
                                    child: AnimatedContainer(
                                      duration: const Duration(milliseconds: 120),
                                      margin: const EdgeInsets.symmetric(horizontal: 1.5),
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(8),
                                        color: m[i] == null ? Colors.white12 : HSVColor.fromAHSV(1, (m[i]! * 22.0) % 360, 0.6, i == _idx ? 1 : 0.8).toColor(),
                                        boxShadow: i == _idx ? [BoxShadow(color: Colors.white.withValues(alpha: 0.6), blurRadius: 16)] : null,
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(height: 4),
                              Text(i < letters.length ? letters[i].toUpperCase() : '', style: TextStyle(color: i == _idx ? Colors.white : Colors.white54, fontWeight: FontWeight.w900, fontSize: m.length > 16 ? 9 : 12)),
                              Text(m[i] == null ? '' : NgmyTone.nameOf(m[i]!), style: const TextStyle(color: Colors.white30, fontSize: 8)),
                            ]),
                          ),
                      ]),
                    ),
                  ]),
          ),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        TextField(
          controller: _text,
          maxLength: 30,
          onChanged: (_) => setState(() {
            _idx = -1;
          }),
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
          decoration: InputDecoration(counterText: '', hintText: 'Type a name or some words', hintStyle: const TextStyle(color: Colors.white30), filled: true, fillColor: Colors.white.withValues(alpha: 0.06), isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none)),
        ),
        const SizedBox(height: 8),
        StudioRow(label: 'SCALE', children: [
          for (final s in kStudioScales.keys) StudioChip(label: s, selected: _scale == s, color: const Color(0xFFF472B6), onTap: () => setState(() => _scale = s)),
        ]),
        StudioRow(label: 'SOUND', children: [
          for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFFF472B6), onTap: () => setState(() => _inst = i.$1)),
        ]),
        StudioSlider(label: 'Tempo', value: _bpm, min: 70, max: 220, display: '${_bpm.round()}', onChanged: (v) => setState(() => _bpm = v), color: const Color(0xFFF472B6)),
        StudioRow(children: [
          StudioButton(icon: _playing ? Icons.stop_rounded : Icons.play_arrow_rounded, label: _playing ? 'Stop' : 'Play', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _playing = !_playing;
                _idx = -1;
                _acc = 1;
              })),
          StudioChip(label: 'Loop', icon: Icons.loop_rounded, selected: _loop, color: const Color(0xFFF472B6), onTap: () => setState(() => _loop = !_loop)),
        ]),
      ]),
    );
  }
}
