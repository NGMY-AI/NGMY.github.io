import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_play_data.dart';
import 'ngmy_studio_kit.dart';

void _text(Canvas canvas, String s, Offset at, {Color color = Colors.white, double size = 13, FontWeight weight = FontWeight.w900}) {
  final tp = TextPainter(text: TextSpan(text: s, style: TextStyle(color: color, fontSize: size, fontWeight: weight)), textDirection: TextDirection.ltr)..layout();
  tp.paint(canvas, at - Offset(tp.width / 2, tp.height / 2));
}

// ═════════════════════════════════════════════════════════════════════════════
// RADIO LAB: turn the dial and find the six hidden stations in the static.
// ═════════════════════════════════════════════════════════════════════════════

class RadioStation {
  const RadioStation(this.name, this.emoji, this.mhz, this.style);
  final String name;
  final String emoji;
  final double mhz;
  final String style;
}

const List<RadioStation> kStations = [
  RadioStation('Rock FM', '🎸', 89.1, 'rock'),
  RadioStation('Jazz Corner', '🎷', 92.7, 'jazz'),
  RadioStation('News Beep', '📰', 95.5, 'news'),
  RadioStation('Classic Bells', '🎻', 98.9, 'bells'),
  RadioStation('Space Radio', '🛰️', 102.3, 'space'),
  RadioStation('Storm Watch', '⛈️', 105.7, 'storm'),
];

/// How strongly a station comes in at [mhz]. Strongest right on its number, fading quickly each side.
double stationStrength(RadioStation s, double mhz, double antenna) {
  final d = (mhz - s.mhz) / 0.32;
  return math.exp(-d * d) * (0.55 + 0.45 * antenna);
}

class NgmyRadioStudio extends StatefulWidget {
  const NgmyRadioStudio({super.key});

  @override
  State<NgmyRadioStudio> createState() => _NgmyRadioStudioState();
}

class _NgmyRadioStudioState extends State<NgmyRadioStudio> with SingleTickerProviderStateMixin, StudioFrames {
  double _mhz = 88.0;
  double _antenna = 0.6;
  final Set<int> _found = {};
  final List<double> _lock = List.filled(6, 0);
  double _t = 0;
  double _beat = 0;
  int _step = 0;
  String _banner = '';
  double _bannerLife = 0;
  Size _size = Size.zero;

  static const double lo = 87.5, hi = 108.0;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('radio_lab').then((m) {
      if (mounted) setState(() => _found.addAll([for (final v in (m['found'] as List? ?? const [])) (v as num).toInt()]));
    });
  }

  int get _bestIdx {
    var bi = 0;
    var bs = 0.0;
    for (var i = 0; i < kStations.length; i++) {
      final s = stationStrength(kStations[i], _mhz, _antenna);
      if (s > bs) {
        bs = s;
        bi = i;
      }
    }
    return bi;
  }

  double get _bestStrength => stationStrength(kStations[_bestIdx], _mhz, _antenna);

  @override
  void onFrame(double dt) {
    _t += dt;
    _bannerLife = math.max(0, _bannerLife - dt);
    final bi = _bestIdx;
    final st = _bestStrength;
    for (var i = 0; i < 6; i++) {
      _lock[i] = i == bi && st > 0.78 ? _lock[i] + dt : 0;
      if (_lock[i] > 0.9 && _found.add(i)) {
        _banner = 'Found ${kStations[i].name}! ${kStations[i].emoji}';
        _bannerLife = 2.2;
        NgmyTone.chord('bell', const [0, 4, 7, 12], ms: 600, volume: 0.45);
        NgmyProgress.save('radio_lab', {'found': _found.toList()});
        if (_found.length == 6) {
          _banner = 'You found every station! 📻';
          _bannerLife = 4;
        }
      }
    }
    _beat += dt;
    if (_beat > 0.2) {
      _beat = 0;
      _sound(bi, st);
    }
    setState(() {});
  }

  void _sound(int bi, double st) {
    // Static, louder when you are off a station.
    final staticVol = (1 - st).clamp(0.0, 1.0) * 0.32;
    if (staticVol > 0.02) NgmyTone.play(1200.0 + (_t * 997) % 1500, ms: 150, wave: 'noise', volume: staticVol);
    if (st < 0.12) return;
    final v = (st * 0.5).clamp(0.0, 0.5);
    _step++;
    switch (kStations[bi].style) {
      case 'rock':
        NgmyTone.play(const [82.0, 82.0, 110.0, 98.0][_step % 4], ms: 170, wave: 'saw', volume: v);
        if (_step.isOdd) NgmyTone.play(3000, ms: 40, wave: 'noise', volume: v * 0.8);
      case 'jazz':
        NgmyTone.play(NgmyTone.note(const [0, 3, 5, 6, 7, 10, 7, 5][_step % 8] - 5), ms: _step.isEven ? 220 : 110, wave: 'tri', volume: v);
      case 'news':
        if (_step % 6 < 3) NgmyTone.play(1000, ms: 110, wave: 'sine', volume: v);
      case 'bells':
        NgmyTone.playNote('bell', const [0, 4, 7, 12, 7, 4][_step % 6], ms: 500, volume: v);
      case 'space':
        NgmyTone.play(300.0 + (_step % 5) * 90, ms: 190, wave: 'saw', sweep: 1.4, volume: v * 0.8);
      case 'storm':
        NgmyTone.play(900, ms: 180, wave: 'noise', volume: v * 0.6);
        if (_step % 9 == 0) NgmyTone.play(60, ms: 500, wave: 'sine', volume: v);
    }
  }

  void _dial(double dx) {
    final w = _size.width - 40;
    setState(() => _mhz = (lo + ((dx - 20) / w).clamp(0.0, 1.0) * (hi - lo)));
  }

  @override
  Widget build(BuildContext context) {
    final bi = _bestIdx;
    final st = _bestStrength;
    return StudioPage(
      title: 'RADIO LAB',
      accent: const Color(0xFFE879F9),
      help: 'A radio picks one station out of thousands of invisible radio waves. Each station broadcasts on its own frequency (the number on the dial). When you are exactly on it the music comes in clearly, and everywhere else you only hear static.\n\nDrag along the dial to tune in. Hold steady on a station for a moment to lock it. Find all six! A longer antenna catches more signal.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) => _dial(d.localPosition.dx),
            onPanUpdate: (d) => _dial(d.localPosition.dx),
            onTapDown: (d) => _dial(d.localPosition.dx),
            child: CustomPaint(size: _size, painter: _RadioPainter(this, bi, st)),
          ),
          if (_bannerLife > 0) Positioned(left: 20, right: 20, top: 16, child: IgnorePointer(child: Container(padding: const EdgeInsets.all(12), decoration: BoxDecoration(color: const Color(0xEE17171A), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFFE879F9))), child: Text(_banner, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17))))),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Antenna', value: _antenna, color: const Color(0xFFE879F9), display: _antenna > 0.7 ? 'long' : (_antenna > 0.35 ? 'medium' : 'short'), onChanged: (v) => setState(() => _antenna = v)),
        StudioRow(children: [for (var i = 0; i < 6; i++) StudioChip(label: _found.contains(i) ? '${kStations[i].emoji} ${kStations[i].name}' : '? ? ?', selected: _found.contains(i), color: const Color(0xFFE879F9), onTap: () {
                if (_found.contains(i)) setState(() => _mhz = kStations[i].mhz);
              })]),
      ]),
    );
  }
}

class _RadioPainter extends CustomPainter {
  _RadioPainter(this.s, this.best, this.strength);
  final _NgmyRadioStudioState s;
  final int best;
  final double strength;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF14101A));
    final body = RRect.fromRectAndRadius(Rect.fromLTWH(14, 14, size.width - 28, size.height * 0.42), const Radius.circular(22));
    canvas.drawRRect(body, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF8B5A2B), Color(0xFF4A2E14)]).createShader(body.outerRect));
    // Speaker grille.
    final speaker = Rect.fromLTWH(30, 30, size.width * 0.34, body.height - 32);
    canvas.drawRRect(RRect.fromRectAndRadius(speaker, const Radius.circular(12)), Paint()..color = const Color(0xFF1C1209));
    for (var y = speaker.top + 8; y < speaker.bottom - 4; y += 9) {
      canvas.drawLine(Offset(speaker.left + 8, y), Offset(speaker.right - 8, y), Paint()..color = const Color(0xFF5A4630)..strokeWidth = 3..strokeCap = StrokeCap.round);
    }
    // The waveform: calm and clear on a station, messy static off it.
    final wave = Rect.fromLTWH(speaker.right + 14, 30, body.right - speaker.right - 28, body.height - 32);
    canvas.drawRRect(RRect.fromRectAndRadius(wave, const Radius.circular(12)), Paint()..color = const Color(0xFF05160C));
    final path = Path();
    final r = math.Random((s._t * 30).floor());
    for (var x = 0.0; x <= wave.width; x += 3) {
      final clean = math.sin((x / wave.width) * math.pi * 6 + s._t * 10) * strength;
      final noise = (r.nextDouble() - 0.5) * 2 * (1 - strength);
      final y = wave.center.dy + (clean * 0.7 + noise * 0.8) * wave.height * 0.4;
      x == 0 ? path.moveTo(wave.left + x, y) : path.lineTo(wave.left + x, y);
    }
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..color = Color.lerp(const Color(0xFF4ADE80), const Color(0xFFE879F9), strength)!);
    // Big station emoji when you are locked on.
    if (strength > 0.55) _text(canvas, kStations[best].emoji, Offset(wave.center.dx, wave.top + 22), size: 26);
    // Signal bars.
    for (var i = 0; i < 5; i++) {
      final on = strength * 5 > i + 0.3;
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(wave.right - 80 + i * 15, wave.bottom - 8 - 8 * (i + 1), 10, 8.0 * (i + 1)), const Radius.circular(2)), Paint()..color = on ? const Color(0xFF4ADE80) : Colors.white12);
    }
    // The dial.
    final dial = Rect.fromLTWH(20, size.height * 0.52, size.width - 40, 84);
    canvas.drawRRect(RRect.fromRectAndRadius(dial, const Radius.circular(14)), Paint()..color = const Color(0xFFF5E9C8));
    for (var f = 88; f <= 108; f++) {
      final x = dial.left + (f - _NgmyRadioStudioState.lo) / (_NgmyRadioStudioState.hi - _NgmyRadioStudioState.lo) * dial.width;
      final big = f % 4 == 0;
      canvas.drawLine(Offset(x, dial.top + 8), Offset(x, dial.top + (big ? 34 : 22)), Paint()..color = const Color(0xFF3B2A14)..strokeWidth = big ? 2.4 : 1.2);
      if (big) _text(canvas, '$f', Offset(x, dial.top + 46), color: const Color(0xFF3B2A14), size: 12);
    }
    // Stations you have found are marked on the dial.
    for (final i in s._found) {
      final x = dial.left + (kStations[i].mhz - _NgmyRadioStudioState.lo) / (_NgmyRadioStudioState.hi - _NgmyRadioStudioState.lo) * dial.width;
      _text(canvas, kStations[i].emoji, Offset(x, dial.bottom - 14), size: 16);
    }
    final nx = dial.left + (s._mhz - _NgmyRadioStudioState.lo) / (_NgmyRadioStudioState.hi - _NgmyRadioStudioState.lo) * dial.width;
    canvas.drawLine(Offset(nx, dial.top - 6), Offset(nx, dial.bottom + 6), Paint()..color = const Color(0xFFEF4444)..strokeWidth = 3.4..strokeCap = StrokeCap.round);
    _text(canvas, '${s._mhz.toStringAsFixed(1)} MHz', Offset(size.width / 2, dial.bottom + 32), size: 26, color: const Color(0xFFFBBF24));
    // How many found.
    _text(canvas, '${s._found.length} of 6 stations found', Offset(size.width / 2, dial.bottom + 66), size: 14, color: Colors.white70);
  }

  @override
  bool shouldRepaint(covariant _RadioPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// PIXEL TV: paint pictures with the three lights every screen is made of.
// ═════════════════════════════════════════════════════════════════════════════

const List<Color> kTvPalette = [
  Color(0xFF000000), Color(0xFFFFFFFF), Color(0xFFFF0000), Color(0xFF00FF00), Color(0xFF0000FF), Color(0xFFFFFF00), Color(0xFF00FFFF), Color(0xFFFF00FF), Color(0xFFFF8A00),
];

const int kTvN = 12;

/// Pictures to start from. Characters are palette numbers (0 black, 1 white, 2 red, ...).
const Map<String, List<String>> kTvArt = {
  'Heart': ['000000000000', '002200002200', '022220022220', '022222222220', '022222222220', '022222222220', '002222222200', '000222222000', '000022220000', '000002200000', '000000000000', '000000000000'],
  'Smiley': ['000055550000', '005555555500', '055555555550', '055455554550', '055555555550', '055555555550', '055255552550', '055525525550', '005552255500', '005555555500', '000055550000', '000000000000'],
  'Tree': ['000000330000', '000003333000', '000033333300', '000333333330', '000033333300', '000333333330', '003333333333', '000033333300', '000003333000', '000000880000', '000000880000', '000000880000'],
  'Rocket': ['000000110000', '000001111000', '000001441000', '000001111000', '000001111000', '000021111200', '000221111220', '000201111020', '000000550000', '000005885000', '000000880000', '000000000000'],
};

class NgmyPixelScreenStudio extends StatefulWidget {
  const NgmyPixelScreenStudio({super.key});

  @override
  State<NgmyPixelScreenStudio> createState() => _NgmyPixelScreenStudioState();
}

class _NgmyPixelScreenStudioState extends State<NgmyPixelScreenStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final List<int> _px = List.filled(kTvN * kTvN, 0);
  int _color = 2;
  int _channel = 0; // 0 all, 1 red, 2 green, 3 blue
  bool _scan = false;
  double _t = 0;
  int _last = 0;
  String? _goal;
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    startFrames();
    _load('Heart');
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    setState(() {});
  }

  void _load(String name) {
    final art = kTvArt[name]!;
    for (var y = 0; y < kTvN; y++) {
      for (var x = 0; x < kTvN; x++) {
        _px[y * kTvN + x] = int.parse(art[y][x]);
      }
    }
  }

  void _paint(Offset p, double side, Offset origin) {
    final cell = side / kTvN;
    final x = ((p.dx - origin.dx) / cell).floor(), y = ((p.dy - origin.dy) / cell).floor();
    if (x < 0 || y < 0 || x >= kTvN || y >= kTvN) return;
    final i = y * kTvN + x;
    setState(() {
      _px[i] = _color;
      _last = i;
    });
    if (_goal != null) {
      // nothing to do: the match score is worked out when drawing
    }
  }

  double get _match {
    if (_goal == null) return 0;
    final art = kTvArt[_goal]!;
    var ok = 0;
    for (var y = 0; y < kTvN; y++) {
      for (var x = 0; x < kTvN; x++) {
        if (_px[y * kTvN + x] == int.parse(art[y][x])) ok++;
      }
    }
    return ok / (kTvN * kTvN);
  }

  @override
  Widget build(BuildContext context) {
    final goal = _goal;
    final match = _match;
    final lc = kTvPalette[_px[_last]];
    return StudioPage(
      title: 'PIXEL TV',
      accent: const Color(0xFF22D3EE),
      help: 'A TV screen is thousands of tiny dots called pixels. Each pixel is made of three tiny lights: red, green and blue. Mixing them in different amounts makes every colour you see.\n\nPaint on the screen with your finger. The strip on the left shows the red, green and blue lights inside the last pixel you touched. Use the channel buttons to see your picture through just one colour. Turn on the scan to watch it draw like an old TV. Try the challenge: copy the little picture.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        final side = math.min(box.maxWidth - 90, box.maxHeight - 28);
        final origin = Offset(76 + (box.maxWidth - 76 - side) / 2 - 8, (box.maxHeight - side) / 2);
        return Stack(fit: StackFit.expand, children: [
          GestureDetector(
            onPanStart: (d) => _paint(d.localPosition, side, origin),
            onPanUpdate: (d) => _paint(d.localPosition, side, origin),
            onTapDown: (d) => _paint(d.localPosition, side, origin),
            child: CustomPaint(size: _size, painter: _TvPainter(_px, side, origin, _channel, _scan, _t, _last)),
          ),
          Positioned(left: 8, top: 14, width: 62, child: _Subpixels(lc)),
          if (goal != null) Positioned(right: 10, top: 10, child: Container(padding: const EdgeInsets.all(6), decoration: BoxDecoration(color: const Color(0xEE17171A), borderRadius: BorderRadius.circular(10), border: Border.all(color: Colors.white24)), child: Column(children: [CustomPaint(size: const Size(60, 60), painter: _TvPainter([for (final r in kTvArt[goal]!) ...r.split('').map(int.parse)], 60, Offset.zero, 0, false, 0, -1)), Text('${(match * 100).round()}%', style: TextStyle(color: match > 0.95 ? const Color(0xFF4ADE80) : Colors.white, fontWeight: FontWeight.w900))]))),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'PAINT', children: [
          for (var i = 0; i < kTvPalette.length; i++)
            GestureDetector(onTap: () => setState(() => _color = i), child: Container(width: _color == i ? 40 : 32, height: _color == i ? 40 : 32, margin: const EdgeInsets.only(right: 8), decoration: BoxDecoration(color: kTvPalette[i], shape: BoxShape.circle, border: Border.all(color: _color == i ? Colors.white : Colors.white30, width: _color == i ? 3 : 1)))),
        ]),
        StudioRow(label: 'SEE', children: [for (final c in const [(0, 'All colours'), (1, 'Red light'), (2, 'Green light'), (3, 'Blue light')]) StudioChip(label: c.$2, selected: _channel == c.$1, color: const [Color(0xFFFFFFFF), Color(0xFFEF4444), Color(0xFF22C55E), Color(0xFF3B82F6)][c.$1], onTap: () => setState(() => _channel = c.$1))]),
        StudioRow(children: [
          StudioChip(label: 'Scan lines', icon: Icons.tv_rounded, selected: _scan, color: const Color(0xFF22D3EE), onTap: () => setState(() => _scan = !_scan)),
          for (final n in kTvArt.keys) StudioChip(label: n, selected: false, color: const Color(0xFFFBBF24), onTap: () => setState(() {
                _load(n);
                _goal = null;
              })),
          StudioChip(label: 'Challenge', icon: Icons.flag_rounded, selected: _goal != null, color: const Color(0xFF4ADE80), onTap: () => setState(() {
                final keys = kTvArt.keys.toList()..shuffle();
                _goal = keys.first;
                _px.fillRange(0, _px.length, 0);
              })),
          StudioChip(label: 'Clear', icon: Icons.delete_outline_rounded, selected: false, color: const Color(0xFFF87171), onTap: () => setState(() => _px.fillRange(0, _px.length, 0))),
        ]),
      ]),
    );
  }
}

class _Subpixels extends StatelessWidget {
  const _Subpixels(this.c);
  final Color c;

  @override
  Widget build(BuildContext context) {
    Widget bar(Color on, double v) => Expanded(child: Container(margin: const EdgeInsets.symmetric(horizontal: 2), decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(4), border: Border.all(color: Colors.white12)), child: Align(alignment: Alignment.bottomCenter, child: FractionallySizedBox(heightFactor: v.clamp(0.0, 1.0), widthFactor: 1, child: DecoratedBox(decoration: BoxDecoration(color: on, borderRadius: BorderRadius.circular(3), boxShadow: [BoxShadow(color: on.withValues(alpha: v), blurRadius: 10 * v)]))))));
    return Column(children: [
      const Text('INSIDE\nONE PIXEL', textAlign: TextAlign.center, style: TextStyle(color: Colors.white54, fontSize: 8.5, fontWeight: FontWeight.w900)),
      const SizedBox(height: 4),
      Container(height: 130, padding: const EdgeInsets.all(3), decoration: BoxDecoration(color: const Color(0xFF0B0F17), borderRadius: BorderRadius.circular(8)), child: Row(children: [bar(const Color(0xFFFF2020), c.r), bar(const Color(0xFF20FF20), c.g), bar(const Color(0xFF3060FF), c.b)])),
      const SizedBox(height: 4),
      Container(height: 24, decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(6), border: Border.all(color: Colors.white24))),
      const SizedBox(height: 2),
      const Text('R   G   B', style: TextStyle(color: Colors.white38, fontSize: 9, fontWeight: FontWeight.w900)),
    ]);
  }
}

class _TvPainter extends CustomPainter {
  _TvPainter(this.px, this.side, this.origin, this.channel, this.scan, this.t, this.last);
  final List<int> px;
  final double side;
  final Offset origin;
  final int channel;
  final bool scan;
  final double t;
  final int last;

  @override
  void paint(Canvas canvas, Size size) {
    final cell = side / kTvN;
    final frame = RRect.fromRectAndRadius((origin & Size(side, side)).inflate(10), const Radius.circular(16));
    canvas.drawRRect(frame, Paint()..color = const Color(0xFF1F2937));
    canvas.drawRect(origin & Size(side, side), Paint()..color = Colors.black);
    final scanRow = scan ? ((t * 5) % (kTvN + 3)) : 99.0;
    for (var y = 0; y < kTvN; y++) {
      for (var x = 0; x < kTvN; x++) {
        var c = kTvPalette[px[y * kTvN + x]];
        if (scan && y > scanRow) c = Colors.black;
        if (channel != 0) {
          final r = channel == 1 ? c.r : 0.0, g = channel == 2 ? c.g : 0.0, b = channel == 3 ? c.b : 0.0;
          c = Color.from(alpha: 1, red: r, green: g, blue: b);
        }
        final rect = Rect.fromLTWH(origin.dx + x * cell, origin.dy + y * cell, cell, cell);
        canvas.drawRect(rect.deflate(0.4), Paint()..color = c);
        if (side > 100 && c != Colors.black) {
          // The three little lights show faintly inside each lit pixel.
          for (var k = 0; k < 3; k++) {
            canvas.drawRect(Rect.fromLTWH(rect.left + cell * (0.12 + 0.28 * k), rect.top + 1, cell * 0.2, cell - 2), Paint()..color = Colors.black.withValues(alpha: 0.12));
          }
        }
      }
    }
    if (side > 100 && last >= 0) {
      final x = last % kTvN, y = last ~/ kTvN;
      canvas.drawRect(Rect.fromLTWH(origin.dx + x * cell, origin.dy + y * cell, cell, cell), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white);
    }
    if (scan && scanRow < kTvN) {
      canvas.drawRect(Rect.fromLTWH(origin.dx, origin.dy + scanRow * cell, side, cell), Paint()..color = Colors.white.withValues(alpha: 0.25));
    }
  }

  @override
  bool shouldRepaint(covariant _TvPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// ATOM BUILDER: add protons, neutrons and electrons, and watch the element change.
// ═════════════════════════════════════════════════════════════════════════════

const Map<int, String> kElementEmoji = {
  1: '💧', 2: '🎈', 3: '🔋', 6: '💎', 7: '🌬️', 8: '🫁', 9: '🦷', 10: '💡', 11: '🧂', 12: '🎆', 13: '🥫', 14: '🏖️', 15: '🔥', 16: '🥚', 17: '🏊', 18: '💡',
  19: '🍌', 20: '🦴', 26: '🧲', 29: '🪙', 47: '🥈', 50: '🥫', 79: '🥇', 80: '🌡️', 82: '🎣', 92: '☢️',
};

/// The electrons in each ring, filling the inner rings first (2, 8, 18, 32 ...).
List<int> electronShells(int e) {
  const cap = [2, 8, 18, 32, 32, 18, 8];
  final out = <int>[];
  var left = e;
  for (final c in cap) {
    if (left <= 0) break;
    out.add(math.min(c, left));
    left -= c;
  }
  return out;
}

/// A rough guess at whether the nucleus holds together: neutrons about equal to protons for small atoms.
bool nucleusStable(int p, int n) {
  if (p == 0) return n == 0 ? true : false;
  if (p == 1) return n <= 1;
  final lo = p <= 20 ? p * 0.85 : p * 1.05;
  final hi = p <= 20 ? p * 1.25 : p * 1.6;
  return p <= 82 && n >= lo && n <= hi;
}

class AtomChallenge {
  const AtomChallenge(this.text, this.p, this.n, this.e);
  final String text;
  final int p, n, e;
}

const List<AtomChallenge> kAtomChallenges = [
  AtomChallenge('Build a Helium atom.', 2, 2, 2),
  AtomChallenge('Build a Carbon atom (it has 6 of everything).', 6, 6, 6),
  AtomChallenge('Build Oxygen with 8 protons.', 8, 8, 8),
  AtomChallenge('Make a Sodium ion with a + charge: 11 protons but one electron missing.', 11, 12, 10),
  AtomChallenge('Make a Chloride ion with a − charge: 17 protons and one extra electron.', 17, 18, 18),
  AtomChallenge('Make radioactive Carbon-14 (6 protons, 8 neutrons).', 6, 8, 6),
  AtomChallenge('Build gold! It has 79 protons.', 79, 118, 79),
  AtomChallenge('Make a Calcium ion with a 2+ charge.', 20, 20, 18),
];

class NgmyAtomStudio extends StatefulWidget {
  const NgmyAtomStudio({super.key});

  @override
  State<NgmyAtomStudio> createState() => _NgmyAtomStudioState();
}

class _NgmyAtomStudioState extends State<NgmyAtomStudio> with SingleTickerProviderStateMixin, StudioFrames {
  int _p = 1, _n = 0, _e = 1;
  int _challenge = -1;
  double _t = 0;
  List<dynamic> _elements = const [];
  final Set<int> _done = {};
  double _wobble = 0;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyPlayData.json('elements').then((d) {
      if (mounted) setState(() => _elements = d as List);
    });
    NgmyProgress.load('atom_builder').then((m) {
      if (mounted) setState(() => _done.addAll([for (final v in (m['done'] as List? ?? const [])) (v as num).toInt()]));
    });
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    _wobble = math.max(0, _wobble - dt * 3);
    setState(() {});
  }

  Map<String, dynamic>? get _el {
    if (_p < 1 || _p > _elements.length) return null;
    return _elements[_p - 1] as Map<String, dynamic>;
  }

  bool get _challengeDone => _challenge >= 0 && _p == kAtomChallenges[_challenge].p && _n == kAtomChallenges[_challenge].n && _e == kAtomChallenges[_challenge].e;

  void _bump(String what, int d) {
    setState(() {
      switch (what) {
        case 'p':
          _p = (_p + d).clamp(0, 94);
        case 'n':
          _n = (_n + d).clamp(0, 150);
        case 'e':
          _e = (_e + d).clamp(0, 100);
      }
      _wobble = 1;
    });
    NgmyTone.sfx('click', _p + _n + _e, ms: 50, volume: 0.35);
    if (_challengeDone && _done.add(_challenge)) {
      NgmyTone.chord('bell', const [0, 4, 7, 12], ms: 600, volume: 0.45);
      NgmyProgress.save('atom_builder', {'done': _done.toList()});
    }
  }

  @override
  Widget build(BuildContext context) {
    final el = _el;
    final charge = _p - _e;
    final stable = nucleusStable(_p, _n);
    final name = el == null ? 'Nothing yet' : el['n'] as String;
    final sym = el == null ? '–' : el['s'] as String;
    final kind = charge == 0 ? 'Atom' : (charge > 0 ? 'Ion  +$charge' : 'Ion  −${-charge}');
    return StudioPage(
      title: 'ATOM BUILDER',
      accent: const Color(0xFF4ADE80),
      help: 'Everything is made of atoms. In the middle is the nucleus: protons (red) and neutrons (grey). Electrons (blue) zoom around it in rings.\n\nThe number of PROTONS decides which element it is: 1 proton is hydrogen, 6 is carbon, 79 is gold. Neutrons change the weight, and too many or too few make the atom radioactive. Electrons decide the charge: the same number as protons is a neutral atom, and missing or extra electrons make it an ion.\n\nTap + and − to build atoms, then try the challenges.',
      stage: Column(children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 6, 14, 0),
          child: Row(children: [
            Text(kElementEmoji[_p] ?? '⚛️', style: const TextStyle(fontSize: 38)),
            const SizedBox(width: 10),
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('$name ($sym)', style: const TextStyle(color: Colors.white, fontSize: 21, fontWeight: FontWeight.w900)),
              Text('$kind · mass ${_p + _n}${stable ? '' : ' · ⚠ unstable, radioactive'}', style: TextStyle(color: stable ? const Color(0xFF86EFAC) : const Color(0xFFFBBF24), fontWeight: FontWeight.w800, fontSize: 12.5)),
            ])),
          ]),
        ),
        if (_challenge >= 0)
          Container(
            margin: const EdgeInsets.fromLTRB(12, 6, 12, 0),
            padding: const EdgeInsets.all(10),
            width: double.infinity,
            decoration: BoxDecoration(color: (_challengeDone ? const Color(0xFF4ADE80) : const Color(0xFFFBBF24)).withValues(alpha: 0.14), borderRadius: BorderRadius.circular(14), border: Border.all(color: (_challengeDone ? const Color(0xFF4ADE80) : const Color(0xFFFBBF24)).withValues(alpha: 0.5))),
            child: Text(_challengeDone ? '✅ Done! ${kAtomChallenges[_challenge].text}' : kAtomChallenges[_challenge].text, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12.5)),
          ),
        Expanded(child: CustomPaint(size: Size.infinite, painter: _AtomPainter(_p, _n, _e, _t, stable, _wobble, el))),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          for (final c in const [('p', 'Protons', Color(0xFFEF4444)), ('n', 'Neutrons', Color(0xFF9CA3AF)), ('e', 'Electrons', Color(0xFF38BDF8))])
            Expanded(
              child: Container(
                margin: const EdgeInsets.symmetric(horizontal: 3),
                padding: const EdgeInsets.symmetric(vertical: 6),
                decoration: BoxDecoration(color: c.$3.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: c.$3.withValues(alpha: 0.5))),
                child: Column(children: [
                  Text(c.$2, style: TextStyle(color: c.$3, fontWeight: FontWeight.w900, fontSize: 11)),
                  Text('${c.$1 == 'p' ? _p : (c.$1 == 'n' ? _n : _e)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                    IconButton(visualDensity: VisualDensity.compact, onPressed: () => _bump(c.$1, -1), icon: Icon(Icons.remove_circle_rounded, color: c.$3, size: 30)),
                    IconButton(visualDensity: VisualDensity.compact, onPressed: () => _bump(c.$1, 1), icon: Icon(Icons.add_circle_rounded, color: c.$3, size: 30)),
                  ]),
                ]),
              ),
            ),
        ]),
        StudioRow(label: 'GOAL', children: [for (var i = 0; i < kAtomChallenges.length; i++) StudioChip(label: '${_done.contains(i) ? '✓ ' : ''}${i + 1}', selected: _challenge == i, color: const Color(0xFF4ADE80), onTap: () => setState(() => _challenge = _challenge == i ? -1 : i))]),
      ]),
    );
  }
}

class _AtomPainter extends CustomPainter {
  _AtomPainter(this.p, this.n, this.e, this.t, this.stable, this.wobble, this.el);
  final int p, n, e;
  final double t;
  final bool stable;
  final double wobble;
  final Map<String, dynamic>? el;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.46);
    final shells = electronShells(e);
    final maxR = math.min(size.width, size.height * 0.9) / 2 - 6;
    final shellCount = math.max(shells.length, 1);
    // The nucleus.
    final nCount = p + n;
    final nucR = (6 + math.sqrt(nCount) * 4.2).clamp(8.0, maxR * 0.4);
    if (!stable) canvas.drawCircle(c, nucR + 14 + 4 * math.sin(t * 14), Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.3)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 12));
    final rnd = math.Random(3);
    final ball = math.max(3.0, nucR / (math.sqrt(math.max(nCount, 1)) * 0.75));
    final order = List.generate(nCount, (i) => i)..shuffle(rnd);
    for (var i = 0; i < nCount; i++) {
      final k = order[i];
      final a = k * 2.399963 + t * 0.4;
      final rr = nucR * math.sqrt((k + 0.5) / nCount) * 0.95;
      final pos = c + Offset(math.cos(a) * rr, math.sin(a) * rr) + Offset(math.sin(t * 20 + k) * 1.2 * wobble, math.cos(t * 17 + k) * 1.2 * wobble);
      final proton = i < p;
      canvas.drawCircle(pos, ball, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: proton ? const [Color(0xFFFCA5A5), Color(0xFFDC2626)] : const [Color(0xFFE5E7EB), Color(0xFF6B7280)]).createShader(Rect.fromCircle(center: pos, radius: ball)));
    }
    // The electron rings.
    for (var s = 0; s < shells.length; s++) {
      final r = nucR + 20 + (maxR - nucR - 24) * (s + 1) / shellCount;
      canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = Colors.white.withValues(alpha: 0.14));
      final count = shells[s];
      final speed = 1.6 / (s + 1);
      for (var k = 0; k < count; k++) {
        final a = t * speed + k * 2 * math.pi / count + s;
        final pos = c + Offset(math.cos(a) * r, math.sin(a) * r);
        canvas.drawCircle(pos, 7, Paint()..color = const Color(0xFF38BDF8).withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
        canvas.drawCircle(pos, 3.6, Paint()..color = const Color(0xFF7DD3FC));
      }
    }
    // A tiny periodic table that shows where this element lives.
    final tw = math.min(size.width - 40, 260.0);
    final cell = tw / 18;
    final tx = (size.width - tw) / 2, ty = size.height - cell * 7 - 8;
    if (el != null) {
      for (var i = 0; i < 118; i++) {
        // Positions are drawn only for the element we are on, plus a faint grid for context.
      }
    }
    for (var y = 0; y < 7; y++) {
      for (var x = 0; x < 18; x++) {
        final main = (y == 0 && (x == 0 || x == 17)) || (y > 0 && y < 3 && (x < 2 || x > 11)) || y >= 3;
        if (!main) continue;
        canvas.drawRect(Rect.fromLTWH(tx + x * cell, ty + y * cell, cell - 1, cell - 1), Paint()..color = Colors.white.withValues(alpha: 0.07));
      }
    }
    if (el != null) {
      final x = (el!['x'] as num).toInt() - 1, y = (el!['y'] as num).toInt() - 1;
      if (y < 7) {
        final r = Rect.fromLTWH(tx + x * cell, ty + y * cell, cell - 1, cell - 1);
        canvas.drawRect(r.inflate(2), Paint()..color = const Color(0xFF4ADE80).withValues(alpha: 0.4)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
        canvas.drawRect(r, Paint()..color = const Color(0xFF4ADE80));
      }
    }
  }

  @override
  bool shouldRepaint(covariant _AtomPainter old) => true;
}
