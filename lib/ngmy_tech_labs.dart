import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Four hands-on technology labs: magnets, radio, power plant and pixel TV.
// ═════════════════════════════════════════════════════════════════════════════

Widget _note(String t, {Color color = const Color(0xFF38BDF8)}) => Container(
      width: double.infinity,
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(14), border: Border.all(color: color.withValues(alpha: 0.5))),
      child: Text(t, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.4)),
    );

// ── Magnet lab ───────────────────────────────────────────────────────────────

class _Mag {
  _Mag(this.x, this.y, this.angle);
  double x; // 0..1
  double y;
  double angle;
  bool flipped = false;
}

class NgmyMagnetLab extends StatefulWidget {
  const NgmyMagnetLab({super.key});

  @override
  State<NgmyMagnetLab> createState() => _NgmyMagnetLabState();
}

class _NgmyMagnetLabState extends State<NgmyMagnetLab> with SingleTickerProviderStateMixin, StudioFrames {
  final List<_Mag> _mags = [_Mag(0.3, 0.45, 0), _Mag(0.7, 0.45, 0)..flipped = true];
  int _sel = 0;
  int _drag = -1;
  bool _filings = true;
  bool _electro = false;
  double _volts = 4;
  double _turns = 40;
  Offset _compass = const Offset(0.5, 0.82);
  bool _dragCompass = false;
  Size _size = Size.zero;
  final List<double> _clip = [0, 0, 0, 0, 0]; // 0 = on the floor, 1 = stuck to the coil
  double _humT = 0;
  bool _near = false;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  double get _strength => _electro ? _volts * _turns / 40 : 0;

  /// The poles that make the magnetic field: position, and +1 for north / -1 for south.
  List<(Offset, double)> _poles() {
    final out = <(Offset, double)>[];
    for (final m in _mags) {
      final c = Offset(m.x * _size.width, m.y * _size.height);
      final d = Offset(math.cos(m.angle), math.sin(m.angle)) * 46;
      final s = m.flipped ? -1.0 : 1.0;
      out.add((c + d, s));
      out.add((c - d, -s));
    }
    if (_electro) {
      final c = Offset(_size.width * 0.5, _size.height * 0.22);
      out.add((c + const Offset(0, -26), _strength * 1.2));
      out.add((c + const Offset(0, 26), -_strength * 1.2));
    }
    return out;
  }

  Offset _field(Offset p, List<(Offset, double)> poles) {
    var b = Offset.zero;
    for (final (pp, q) in poles) {
      final d = p - pp;
      final r2 = d.distanceSquared + 90;
      b += d * (q / (r2 * math.sqrt(r2)));
    }
    return b;
  }

  @override
  void onFrame(double dt) {
    final cx = _size.width * 0.5, cy = _size.height * 0.22;
    for (var i = 0; i < _clip.length; i++) {
      final target = _electro && _strength > 1.6 + i * 0.35 ? 1.0 : 0.0;
      _clip[i] += (target - _clip[i]) * math.min(1, dt * 6);
    }
    if (_electro && _strength > 0.5) {
      _humT += dt;
      if (_humT > 0.25) {
        _humT = 0;
        NgmyTone.play(100 + _strength * 12, ms: 200, wave: 'tri', volume: 0.1);
      }
    }
    if (_mags.length >= 2 && _size != Size.zero) {
      final a = Offset(_mags[0].x * _size.width, _mags[0].y * _size.height), b = Offset(_mags[1].x * _size.width, _mags[1].y * _size.height);
      final near = (a - b).distance < 110;
      if (near != _near) {
        _near = near;
        if (near) NgmyTone.play(2200, ms: 30, wave: 'noise', volume: 0.5);
      }
    }
    if (cx < 0 || cy < 0) return;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final attract = (_mags[0].flipped != _mags[1].flipped) == (_mags[0].x < _mags[1].x) ? false : true;
    return StudioPage(
      title: 'MAGNET LAB',
      accent: const Color(0xFFEF4444),
      help: 'Every magnet has a north end (red) and a south end (blue). Opposites attract and the same ends push apart. The grey lines are iron filings showing the invisible magnetic field around them. Drag the magnets and the compass around.\n\nTurn on Electromagnet: a coil of wire with current flowing becomes a magnet! Add more battery volts or more coil turns and it gets strong enough to pick up paper clips. That is how cranes in scrapyards and electric motors work.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) {
              final cp = Offset(_compass.dx * _size.width, _compass.dy * _size.height);
              if ((cp - d.localPosition).distance < 34) {
                _dragCompass = true;
                return;
              }
              for (var i = _mags.length - 1; i >= 0; i--) {
                final c = Offset(_mags[i].x * _size.width, _mags[i].y * _size.height);
                if ((c - d.localPosition).distance < 62) {
                  _drag = i;
                  setState(() => _sel = i);
                  return;
                }
              }
            },
            onPanUpdate: (d) {
              if (_dragCompass) {
                _compass = Offset((d.localPosition.dx / _size.width).clamp(0.05, 0.95), (d.localPosition.dy / _size.height).clamp(0.05, 0.95));
              } else if (_drag >= 0) {
                _mags[_drag]
                  ..x = (d.localPosition.dx / _size.width).clamp(0.12, 0.88)
                  ..y = (d.localPosition.dy / _size.height).clamp(0.3, 0.92);
              }
            },
            onPanEnd: (_) {
              _drag = -1;
              _dragCompass = false;
            },
            child: CustomPaint(size: _size, painter: _MagnetPainter(this)),
          ),
          Positioned(left: 10, right: 10, bottom: 8, child: _note(_electro ? 'The coil is an electromagnet: ${_strength < 1 ? 'too weak to lift anything' : (_strength < 3 ? 'it can lift some paper clips' : 'strong! it lifts every clip')}. Change the volts and turns to see.' : (attract ? 'These two ends are opposite, so the magnets pull together.' : 'These two ends are the same, so the magnets push apart.'), color: const Color(0xFFEF4444))),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Iron filings', selected: _filings, color: const Color(0xFF94A3B8), onTap: () => setState(() => _filings = !_filings)),
          StudioChip(label: 'Electromagnet', icon: Icons.bolt_rounded, selected: _electro, color: const Color(0xFFFACC15), onTap: () => setState(() => _electro = !_electro)),
          StudioButton(icon: Icons.swap_horiz_rounded, label: 'Flip magnet', onTap: () => setState(() => _mags[_sel].flipped = !_mags[_sel].flipped)),
          StudioButton(icon: Icons.rotate_90_degrees_cw_rounded, label: 'Turn', onTap: () => setState(() => _mags[_sel].angle += math.pi / 4)),
        ]),
        if (_electro) ...[
          StudioSlider(label: 'Battery', value: _volts, min: 0, max: 12, display: '${_volts.toStringAsFixed(1)} V', color: const Color(0xFF4ADE80), onChanged: (v) => setState(() => _volts = v)),
          StudioSlider(label: 'Coil turns', value: _turns, min: 5, max: 120, display: '${_turns.round()}', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _turns = v)),
        ],
      ]),
    );
  }
}

class _MagnetPainter extends CustomPainter {
  _MagnetPainter(this.s);
  final _NgmyMagnetLabState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0E1218));
    final poles = s._poles();
    if (s._filings) {
      final p = Paint()..strokeWidth = 1.4..strokeCap = StrokeCap.round;
      for (var x = 12.0; x < size.width; x += 17) {
        for (var y = 12.0; y < size.height; y += 17) {
          final b = s._field(Offset(x, y), poles);
          final m = b.distance;
          if (m < 1e-6) continue;
          final u = b / m;
          final a = (math.sqrt(m) * 9).clamp(0.12, 0.95);
          p.color = Color.lerp(const Color(0xFF64748B), const Color(0xFFE2E8F0), a)!.withValues(alpha: a);
          canvas.drawLine(Offset(x, y) - u * 5, Offset(x, y) + u * 5, p);
        }
      }
    }
    // The coil.
    if (s._electro) {
      final c = Offset(size.width * 0.5, size.height * 0.22);
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: c, width: 54, height: 66), const Radius.circular(10)), Paint()..color = const Color(0xFF475569));
      final turns = (s._turns / 12).clamp(2, 10).round();
      for (var i = 0; i < turns; i++) {
        final y = c.dy - 26 + i * (52 / turns);
        canvas.drawLine(Offset(c.dx - 30, y), Offset(c.dx + 30, y + 4), Paint()..color = const Color(0xFFFB923C)..strokeWidth = 3);
      }
      final north = s._strength > 0;
      canvas.drawCircle(c + const Offset(0, -38), 5, Paint()..color = north ? const Color(0xFFEF4444) : Colors.grey);
      canvas.drawCircle(c + const Offset(0, 38), 5, Paint()..color = north ? const Color(0xFF3B82F6) : Colors.grey);
      // Paper clips on the floor or stuck to the coil.
      for (var i = 0; i < s._clip.length; i++) {
        final floor = Offset(size.width * (0.28 + i * 0.11), size.height * 0.62);
        final stuck = Offset(c.dx - 24 + i * 12, c.dy + 46 + (i % 2) * 7);
        final pos = Offset.lerp(floor, stuck, Curves.easeInOut.transform(s._clip[i].clamp(0.0, 1.0)))!;
        canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: pos, width: 8, height: 20), const Radius.circular(4)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFCBD5E1));
      }
    }
    // Bar magnets.
    for (var i = 0; i < s._mags.length; i++) {
      final m = s._mags[i];
      final c = Offset(m.x * size.width, m.y * size.height);
      canvas.save();
      canvas.translate(c.dx, c.dy);
      canvas.rotate(m.angle);
      final left = RRect.fromRectAndCorners(const Rect.fromLTWH(-58, -15, 58, 30), topLeft: const Radius.circular(8), bottomLeft: const Radius.circular(8));
      final right = RRect.fromRectAndCorners(const Rect.fromLTWH(0, -15, 58, 30), topRight: const Radius.circular(8), bottomRight: const Radius.circular(8));
      final nIsRight = !m.flipped;
      canvas.drawRRect(left, Paint()..color = nIsRight ? const Color(0xFF3B82F6) : const Color(0xFFEF4444));
      canvas.drawRRect(right, Paint()..color = nIsRight ? const Color(0xFFEF4444) : const Color(0xFF3B82F6));
      if (i == s._sel) canvas.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-58, -15, 116, 30), const Radius.circular(8)).inflate(3), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white);
      for (final e in [(-30.0, nIsRight ? 'S' : 'N'), (30.0, nIsRight ? 'N' : 'S')]) {
        final tp = TextPainter(text: TextSpan(text: e.$2, style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, Offset(e.$1 - tp.width / 2, -tp.height / 2));
      }
      canvas.restore();
    }
    // Compass.
    final cp = Offset(s._compass.dx * size.width, s._compass.dy * size.height);
    canvas.drawCircle(cp, 26, Paint()..color = const Color(0xFF1F2937));
    canvas.drawCircle(cp, 26, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.5..color = Colors.white70);
    final b = s._field(cp, poles);
    final ang = b.distance < 1e-6 ? -math.pi / 2 : math.atan2(b.dy, b.dx);
    final d = Offset(math.cos(ang), math.sin(ang));
    final nee = Path()..moveTo(cp.dx + d.dx * 21, cp.dy + d.dy * 21)..lineTo(cp.dx - d.dy * 5, cp.dy + d.dx * 5)..lineTo(cp.dx + d.dy * 5, cp.dy - d.dx * 5)..close();
    canvas.drawPath(nee, Paint()..color = const Color(0xFFEF4444));
    final tail = Path()..moveTo(cp.dx - d.dx * 21, cp.dy - d.dy * 21)..lineTo(cp.dx - d.dy * 5, cp.dy + d.dx * 5)..lineTo(cp.dx + d.dy * 5, cp.dy - d.dx * 5)..close();
    canvas.drawPath(tail, Paint()..color = Colors.white);
    canvas.drawCircle(cp, 3, Paint()..color = Colors.black);
  }

  @override
  bool shouldRepaint(covariant _MagnetPainter old) => true;
}

// ── Radio lab ────────────────────────────────────────────────────────────────

class _Station {
  const _Station(this.name, this.khz, this.kind, this.color);
  final String name;
  final int khz;
  final String kind;
  final Color color;
}

const List<_Station> _kStations = [
  _Station('Talk 700', 700, 'talk', Color(0xFF38BDF8)),
  _Station('Jazz 920', 920, 'jazz', Color(0xFFFBBF24)),
  _Station('Pop 1060', 1060, 'pop', Color(0xFFF472B6)),
  _Station('News 1200', 1200, 'news', Color(0xFF4ADE80)),
  _Station('Rock 1400', 1400, 'rock', Color(0xFFEF4444)),
];

class NgmyRadioLab extends StatefulWidget {
  const NgmyRadioLab({super.key});

  @override
  State<NgmyRadioLab> createState() => _NgmyRadioLabState();
}

class _NgmyRadioLabState extends State<NgmyRadioLab> with SingleTickerProviderStateMixin, StudioFrames {
  double _khz = 920;
  double _vol = 0.6;
  double _antenna = 0.8;
  bool _on = true;
  double _t = 0;
  double _clock = 0;
  int _beat = 0;
  final math.Random _rnd = math.Random();

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  _Station? get _tuned {
    _Station? best;
    var bs = 0.0;
    for (final s in _kStations) {
      final v = math.exp(-math.pow((_khz - s.khz) / 22, 2));
      if (v > bs) {
        bs = v;
        best = s;
      }
    }
    return bs > 0.12 ? best : null;
  }

  double get _signal {
    var bs = 0.0;
    for (final s in _kStations) {
      bs = math.max(bs, math.exp(-math.pow((_khz - s.khz) / 22, 2)).toDouble());
    }
    return (bs * _antenna * 1.15).clamp(0.0, 1.0);
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    if (!_on) return;
    _clock += dt;
    if (_clock < 0.15) return;
    _clock = 0;
    _beat++;
    final sig = _signal;
    final st = _tuned;
    final hiss = (1 - sig) * _vol * 0.3;
    if (hiss > 0.02) NgmyTone.play(1800 + _rnd.nextInt(1500).toDouble(), ms: 130, wave: 'noise', volume: hiss);
    if (st == null || sig < 0.15) return;
    final v = _vol * sig;
    switch (st.kind) {
      case 'jazz':
        const scale = [0, 3, 5, 7, 10, 12, 15];
        if (_beat % 2 == 0) NgmyTone.play(NgmyTone.note(scale[_rnd.nextInt(scale.length)] - 5), ms: 220, wave: 'tri', volume: v * 0.45);
      case 'pop':
        const riff = [0, 4, 7, 4, 9, 7, 4, 2];
        NgmyTone.play(NgmyTone.note(riff[_beat % 8] + 5), ms: 140, wave: 'square', volume: v * 0.2);
        if (_beat % 4 == 0) NgmyTone.drum('kick', volume: v * 0.5);
      case 'rock':
        NgmyTone.play(NgmyTone.note(const [-12, -12, -9, -7][_beat % 4]), ms: 150, wave: 'saw', volume: v * 0.3);
        if (_beat % 2 == 0) NgmyTone.drum('snare', volume: v * 0.4);
      case 'news':
        if (_beat % 6 == 0) {
          NgmyTone.play(1000, ms: 120, wave: 'square', volume: v * 0.25);
        } else if (_rnd.nextBool()) {
          NgmyTone.play(170 + _rnd.nextInt(90).toDouble(), ms: 90, wave: 'tri', volume: v * 0.45);
        }
      default:
        if (_rnd.nextDouble() < 0.7) NgmyTone.play(150 + _rnd.nextInt(180).toDouble(), ms: 80, wave: 'tri', volume: v * 0.45);
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final st = _tuned;
    final sig = _signal;
    return StudioPage(
      title: 'RADIO LAB',
      accent: const Color(0xFFE879F9),
      help: 'Radio stations send invisible waves through the air. Each station uses its own frequency (kHz). Your radio\'s aerial catches all of them at once, and the tuner picks just one.\n\nTurn the dial slowly. Between stations you hear hiss, which is natural radio noise. When you land on a station the signal gets strong and the music or voice comes through. The wiggly picture shows the wave: the station\'s sound is stamped onto a fast carrier wave by changing its height. That is AM, amplitude modulation.\n\nChange the aerial length: a longer aerial catches a stronger signal.',
      stage: Column(children: [
        SizedBox(height: 150, width: double.infinity, child: CustomPaint(painter: _DialPainter(_khz, st))),
        Expanded(child: Padding(padding: const EdgeInsets.fromLTRB(10, 0, 10, 6), child: ClipRRect(borderRadius: BorderRadius.circular(16), child: CustomPaint(size: Size.infinite, painter: _WavePainter(_t, sig, st?.color ?? Colors.white38, _on))))),
        Padding(padding: const EdgeInsets.fromLTRB(10, 0, 10, 8), child: _note(st == null || sig < 0.15 ? 'Hiss: no station here. Turn the dial.' : 'Tuned in to ${st.name}. Signal strength ${(sig * 100).round()}%.', color: const Color(0xFFE879F9))),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: _on ? 'On' : 'Off', icon: Icons.power_settings_new_rounded, selected: _on, color: const Color(0xFF4ADE80), onTap: () => setState(() => _on = !_on)),
          for (final s in _kStations) StudioChip(label: s.name, selected: (_khz - s.khz).abs() < 14, color: s.color, onTap: () => setState(() => _khz = s.khz.toDouble())),
        ]),
        StudioSlider(label: 'Dial', value: _khz, min: 540, max: 1600, display: '${_khz.round()} kHz', color: const Color(0xFFE879F9), onChanged: (v) => setState(() => _khz = v)),
        StudioSlider(label: 'Volume', value: _vol, color: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _vol = v)),
        StudioSlider(label: 'Aerial', value: _antenna, min: 0.3, max: 1.2, display: '${(_antenna * 100).round()} cm', color: const Color(0xFFFBBF24), onChanged: (v) => setState(() => _antenna = v)),
      ]),
    );
  }
}

class _DialPainter extends CustomPainter {
  _DialPainter(this.khz, this.st);
  final double khz;
  final _Station? st;

  @override
  void paint(Canvas canvas, Size size) {
    final r = RRect.fromRectAndRadius(Rect.fromLTWH(14, 10, size.width - 28, size.height - 20), const Radius.circular(18));
    canvas.drawRRect(r, Paint()..color = const Color(0xFF2B1F33));
    canvas.drawRRect(r, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFE879F9).withValues(alpha: 0.6));
    final left = 34.0, right = size.width - 34, top = 56.0;
    canvas.drawLine(Offset(left, top + 36), Offset(right, top + 36), Paint()..color = Colors.white30..strokeWidth = 1.5);
    for (var k = 540; k <= 1600; k += 20) {
      final x = left + (k - 540) / 1060 * (right - left);
      final major = k % 100 == 0;
      canvas.drawLine(Offset(x, top + 36), Offset(x, top + 36 - (major ? 16 : 8)), Paint()..color = Colors.white54..strokeWidth = major ? 1.6 : 1);
      if (k % 200 == 0 && k >= 600) {
        final tp = TextPainter(text: TextSpan(text: '$k', style: const TextStyle(color: Colors.white54, fontSize: 10)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, Offset(x - tp.width / 2, top + 42));
      }
    }
    for (final s in _kStations) {
      final x = left + (s.khz - 540) / 1060 * (right - left);
      canvas.drawCircle(Offset(x, top + 20), 3.2, Paint()..color = s.color);
    }
    final nx = left + (khz - 540) / 1060 * (right - left);
    canvas.drawLine(Offset(nx, top - 8), Offset(nx, top + 40), Paint()..color = const Color(0xFFEF4444)..strokeWidth = 3);
    final tp = TextPainter(text: TextSpan(text: st == null ? '${khz.round()} kHz' : st!.name, style: TextStyle(color: st?.color ?? Colors.white, fontSize: 20, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, Offset(size.width / 2 - tp.width / 2, 22));
  }

  @override
  bool shouldRepaint(covariant _DialPainter old) => true;
}

class _WavePainter extends CustomPainter {
  _WavePainter(this.t, this.sig, this.color, this.on);
  final double t;
  final double sig;
  final Color color;
  final bool on;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF05100A));
    for (var i = 1; i < 4; i++) {
      canvas.drawLine(Offset(0, size.height * i / 4), Offset(size.width, size.height * i / 4), Paint()..color = const Color(0xFF16A34A).withValues(alpha: 0.15));
    }
    if (!on) return;
    final rnd = math.Random((t * 30).floor());
    final path = Path();
    final mid = size.height / 2;
    for (var x = 0.0; x <= size.width; x += 2) {
      final u = x / size.width * 6 * math.pi * 2 - t * 18;
      final audio = 0.55 * math.sin(u / 11 + math.sin(t * 2)) + 0.3 * math.sin(u / 5.3);
      final carrier = math.sin(u * 1.8);
      final env = 0.3 + 0.7 * sig * (1 + audio * 0.9) / 1.9;
      final noise = (rnd.nextDouble() - 0.5) * (1 - sig) * 1.2;
      final y = mid - (carrier * env + noise) * (size.height * 0.36);
      x == 0 ? path.moveTo(x, y) : path.lineTo(x, y);
    }
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Color.lerp(const Color(0xFF4ADE80), color, sig)!);
  }

  @override
  bool shouldRepaint(covariant _WavePainter old) => true;
}

// ── Power plant (generator and the road to your home) ───────────────────────

class NgmyPowerPlantStudio extends StatefulWidget {
  const NgmyPowerPlantStudio({super.key});

  @override
  State<NgmyPowerPlantStudio> createState() => _NgmyPowerPlantStudioState();
}

class _NgmyPowerPlantStudioState extends State<NgmyPowerPlantStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const _sources = [
    ('hand', 'Hand', '🖐️', 'You turn the crank with your muscles. Slow and tiring, but it works anywhere.', ['Food', 'Your muscles', 'Crank', 'Generator', 'Bulb']),
    ('wind', 'Wind', '🌬️', 'Moving air pushes big blades round. No fuel and no smoke.', ['Wind', 'Blades', 'Gearbox', 'Generator', 'Power lines', 'Home']),
    ('water', 'Water', '💧', 'Falling water from a dam spins a water wheel called a turbine. It makes about a sixth of the world\'s electricity.', ['Rain and rivers', 'Dam', 'Water turbine', 'Generator', 'Power lines', 'Home']),
    ('steam', 'Steam', '♨️', 'Coal, gas or a nuclear reactor makes heat. The heat boils water into high-pressure steam that spins the turbine. It makes most of the world\'s electricity.', ['Fuel or reactor', 'Boiler', 'Steam', 'Turbine', 'Generator', 'Power lines', 'Home']),
  ];
  String _src = 'wind';
  double _rpm = 0.5;
  double _turns = 0.6;
  double _magnet = 0.7;
  bool _dc = false;
  double _angle = 0;
  final List<double> _trace = [];
  double _soundT = 0;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  double _emf(double a) {
    final v = math.sin(a) * _turns * _magnet * _rpm * 1.9;
    return _dc ? v.abs() : v;
  }

  @override
  void onFrame(double dt) {
    _angle += _rpm * dt * 14;
    _trace.add(_emf(_angle));
    if (_trace.length > 240) _trace.removeAt(0);
    _soundT += dt;
    if (_soundT > 0.16 && _rpm > 0.05) {
      _soundT = 0;
      NgmyTone.play(70 + _rpm * 140, ms: 150, wave: 'saw', volume: 0.07 + 0.05 * _rpm);
    }
    setState(() {});
  }

  double get _brightness {
    if (_trace.isEmpty) return 0;
    final rms = math.sqrt(_trace.map((e) => e * e).reduce((a, b) => a + b) / _trace.length);
    return (rms / 1.2).clamp(0.0, 1.0);
  }

  @override
  Widget build(BuildContext context) {
    final src = _sources.firstWhere((s) => s.$1 == _src);
    return StudioPage(
      title: 'POWER PLANT',
      accent: const Color(0xFFFBBF24),
      help: 'This is how almost all electricity is made. A magnet spins inside coils of copper wire, and a spinning magnet pushes electrons along the wire: that is a generator (or alternator). Something has to turn it, and that something is what changes between power plants.\n\nPick what turns it: your hand, wind, water or steam. Slide the speed, the coil turns and the magnet strength, and watch the electricity wave and the bulb. The wave goes up and down because the magnet\'s north and south take turns passing the coil: that is alternating current (AC). Press DC to flip the negative half over, like the charger for your phone does.\n\nBelow, see the chain from the energy source to your home.',
      stage: Column(children: [
        Expanded(child: CustomPaint(size: Size.infinite, painter: _GenPainter(this))),
        Padding(
          padding: const EdgeInsets.fromLTRB(10, 0, 10, 8),
          child: Column(children: [
            SizedBox(
              height: 40,
              child: ListView(scrollDirection: Axis.horizontal, children: [
                for (var i = 0; i < src.$5.length; i++) ...[
                  Container(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7), decoration: BoxDecoration(color: const Color(0xFFFBBF24).withValues(alpha: 0.14 + 0.1 * ((_angle * 0.5 + i) % 3 < 1 ? 1 : 0)), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFFFBBF24).withValues(alpha: 0.4))), child: Center(child: Text(src.$5[i], style: const TextStyle(color: Colors.white, fontSize: 11.5, fontWeight: FontWeight.w800)))),
                  if (i < src.$5.length - 1) const Padding(padding: EdgeInsets.symmetric(horizontal: 3), child: Icon(Icons.arrow_forward_rounded, color: Colors.white38, size: 16)),
                ],
              ]),
            ),
            const SizedBox(height: 6),
            _note('${src.$3} ${src.$4}', color: const Color(0xFFFBBF24)),
          ]),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final s in _sources) StudioChip(label: s.$2, selected: _src == s.$1, color: const Color(0xFFFBBF24), onTap: () => setState(() {
                _src = s.$1;
                _rpm = const {'hand': 0.35, 'wind': 0.5, 'water': 0.65, 'steam': 0.9}[s.$1]!;
              })),
          StudioChip(label: _dc ? 'DC' : 'AC', selected: _dc, color: const Color(0xFF38BDF8), onTap: () => setState(() => _dc = !_dc)),
        ]),
        StudioSlider(label: 'Speed', value: _rpm, color: const Color(0xFF4ADE80), onChanged: (v) => setState(() => _rpm = v)),
        StudioSlider(label: 'Coil turns', value: _turns, min: 0.1, color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _turns = v)),
        StudioSlider(label: 'Magnet', value: _magnet, min: 0.1, color: const Color(0xFFEF4444), onChanged: (v) => setState(() => _magnet = v)),
      ]),
    );
  }
}

class _GenPainter extends CustomPainter {
  _GenPainter(this.s);
  final _NgmyPowerPlantStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0E1218));
    final c = Offset(size.width * 0.37, size.height * 0.38);
    final r = math.min(size.width * 0.15, size.height * 0.26);
    // The coils on both sides.
    for (final sx in const [-1.0, 1.0]) {
      for (var i = 0; i < 6; i++) {
        final x = c.dx + sx * (r * 1.25 + i * 7);
        canvas.drawOval(Rect.fromCenter(center: Offset(x, c.dy), width: 10, height: r * 1.5), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFFFB923C).withValues(alpha: 0.5 + 0.5 * s._turns));
      }
    }
    canvas.drawCircle(c, r * 1.15, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white24);
    // The spinning magnet.
    canvas.save();
    canvas.translate(c.dx, c.dy);
    canvas.rotate(s._angle);
    canvas.drawRRect(RRect.fromRectAndCorners(Rect.fromLTWH(-r, -r * 0.22, r, r * 0.44), topLeft: const Radius.circular(8), bottomLeft: const Radius.circular(8)), Paint()..color = const Color(0xFF3B82F6));
    canvas.drawRRect(RRect.fromRectAndCorners(Rect.fromLTWH(0, -r * 0.22, r, r * 0.44), topRight: const Radius.circular(8), bottomRight: const Radius.circular(8)), Paint()..color = const Color(0xFFEF4444));
    canvas.restore();
    // The bulb on the right with a glow.
    final b = Offset(size.width * 0.86, size.height * 0.2);
    final glow = s._brightness;
    canvas.drawCircle(b, 46, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.5 * glow)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 16));
    canvas.drawCircle(b, 20, Paint()..color = Color.lerp(const Color(0xFF3B3F4A), const Color(0xFFFEF08A), glow)!);
    canvas.drawCircle(b, 20, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white54);
    canvas.drawLine(Offset(c.dx + r * 1.25 + 44, c.dy), Offset(b.dx, b.dy + 20), Paint()..color = Colors.white38..strokeWidth = 3);
    final label = TextPainter(text: TextSpan(text: 'Bulb ${(glow * 100).round()}%', style: const TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
    label.paint(canvas, Offset(b.dx - label.width / 2, b.dy + 32));
    // The wave.
    final area = Rect.fromLTWH(12, size.height * 0.64, size.width - 24, size.height * 0.32);
    canvas.drawRRect(RRect.fromRectAndRadius(area, const Radius.circular(14)), Paint()..color = const Color(0xFF05100A));
    canvas.drawLine(Offset(area.left, area.center.dy), Offset(area.right, area.center.dy), Paint()..color = const Color(0xFF16A34A).withValues(alpha: 0.4));
    final path = Path();
    for (var i = 0; i < s._trace.length; i++) {
      final x = area.left + i / 240 * area.width;
      final y = area.center.dy - s._trace[i] * area.height * 0.22 * (s._dc ? 1.6 : 1) - (s._dc ? area.height * 0.2 : 0);
      i == 0 ? path.moveTo(x, y) : path.lineTo(x, y);
    }
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..color = const Color(0xFF4ADE80));
    final tp = TextPainter(text: TextSpan(text: s._dc ? 'DC: always pushes one way' : 'AC: pushes forwards, then backwards', style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w700)), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, Offset(area.left + 10, area.top + 6));
  }

  @override
  bool shouldRepaint(covariant _GenPainter old) => true;
}

// ── Pixel TV ─────────────────────────────────────────────────────────────────

class NgmyPixelTvStudio extends StatefulWidget {
  const NgmyPixelTvStudio({super.key});

  @override
  State<NgmyPixelTvStudio> createState() => _NgmyPixelTvStudioState();
}

class _NgmyPixelTvStudioState extends State<NgmyPixelTvStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const int n = 12;
  final List<Color> _px = List.filled(n * n, const Color(0xFF000000));
  Color _paint = const Color(0xFFEF4444);
  double _r = 239, _g = 68, _b = 68;
  bool _zoom = false;
  double _scan = -1;
  bool _erase = false;
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    if (_scan < 0) return;
    final prev = _scan.floor();
    _scan += dt * 6;
    if (_scan.floor() != prev && _scan < n) NgmyTone.play(300.0 + _scan.floor() * 60, ms: 60, wave: 'square', volume: 0.12);
    if (_scan >= n + 1) _scan = -1;
    setState(() {});
  }

  void _set(Offset p) {
    final side = math.min(_size.width, _size.height);
    final ox = (_size.width - side) / 2, oy = (_size.height - side) / 2;
    final cx = ((p.dx - ox) / side * n).floor(), cy = ((p.dy - oy) / side * n).floor();
    if (cx < 0 || cy < 0 || cx >= n || cy >= n) return;
    final col = _erase ? const Color(0xFF000000) : _paint;
    if (_px[cy * n + cx] == col) return;
    setState(() => _px[cy * n + cx] = col);
    NgmyTone.play(1200, ms: 25, wave: 'noise', volume: 0.3);
  }

  void _preset(String name) {
    for (var i = 0; i < _px.length; i++) {
      _px[i] = const Color(0xFF000000);
    }
    void put(int x, int y, Color c) {
      if (x >= 0 && y >= 0 && x < n && y < n) _px[y * n + x] = c;
    }

    switch (name) {
      case 'smile':
        for (var y = 0; y < n; y++) {
          for (var x = 0; x < n; x++) {
            final d = math.sqrt(math.pow(x - 5.5, 2) + math.pow(y - 5.5, 2));
            if (d < 5.4) put(x, y, const Color(0xFFFACC15));
          }
        }
        for (final p in [(3, 4), (8, 4), (3, 3), (8, 3)]) {
          put(p.$1, p.$2, const Color(0xFF111827));
        }
        for (final p in [(3, 7), (4, 8), (5, 8), (6, 8), (7, 8), (8, 7)]) {
          put(p.$1, p.$2, const Color(0xFF7C2D12));
        }
      case 'heart':
        const rows = ['............', '..##....##..', '.####..####.', '.##########.', '.##########.', '..########..', '...######...', '....####....', '.....##.....', '............', '............', '............'];
        for (var y = 0; y < n; y++) {
          for (var x = 0; x < n; x++) {
            if (rows[y][x] == '#') put(x, y, const Color(0xFFEF4444));
          }
        }
      case 'rocket':
        const rows = ['.....##.....', '....####....', '....####....', '...######...', '...##..##...', '...######...', '...######...', '..########..', '..##.##.##..', '.....##.....', '....#..#....', '............'];
        for (var y = 0; y < n; y++) {
          for (var x = 0; x < n; x++) {
            if (rows[y][x] == '#') put(x, y, y > 8 ? const Color(0xFFFB923C) : (y < 3 ? const Color(0xFFEF4444) : const Color(0xFFE5E7EB)));
          }
        }
      default:
        const cols = [Color(0xFFEF4444), Color(0xFFFB923C), Color(0xFFFACC15), Color(0xFF22C55E), Color(0xFF38BDF8), Color(0xFF6366F1)];
        for (var y = 0; y < n; y++) {
          for (var x = 0; x < n; x++) {
            put(x, y, cols[(y ~/ 2) % cols.length]);
          }
        }
    }
    setState(() {});
    NgmyTone.play(500, ms: 120, wave: 'square', sweep: -0.6, volume: 0.2);
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'PIXEL TV',
      accent: const Color(0xFF22D3EE),
      help: 'A TV picture is made of tiny dots called pixels. Each pixel is three lights: red, green and blue. Mixing different amounts of the three makes every colour you have ever seen.\n\nPaint pixels with your finger. Mix your own colour with the red, green and blue sliders. Press Zoom to look closer, like a magnifying glass on a real screen: you will see the red, green and blue bars inside every pixel. Press Scan to watch the picture drawn line by line, the way old TVs did, one row at a time.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) => _set(d.localPosition),
            onPanUpdate: (d) => _set(d.localPosition),
            onTapDown: (d) => _set(d.localPosition),
            child: CustomPaint(size: _size, painter: _PixelPainter(this)),
          ),
          Positioned(left: 10, right: 10, bottom: 8, child: _note('This picture is ${n * n} pixels. Each pixel needs 3 colour numbers of 8 bits: ${n * n * 24} bits of data. A real HD screen has over 2 million pixels!', color: const Color(0xFF22D3EE))),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Zoom in', icon: Icons.zoom_in_rounded, selected: _zoom, color: const Color(0xFF22D3EE), onTap: () => setState(() => _zoom = !_zoom)),
          StudioChip(label: 'Erase', icon: Icons.cleaning_services_rounded, selected: _erase, color: const Color(0xFFF87171), onTap: () => setState(() => _erase = !_erase)),
          StudioButton(icon: Icons.live_tv_rounded, label: 'Scan', color: const Color(0xFF4ADE80), onTap: () => setState(() => _scan = 0)),
          StudioButton(icon: Icons.delete_outline_rounded, label: 'Clear', onTap: () => setState(() => _px.fillRange(0, _px.length, const Color(0xFF000000)))),
          for (final p in const ['smile', 'heart', 'rocket', 'rainbow']) StudioChip(label: p[0].toUpperCase() + p.substring(1), selected: false, color: const Color(0xFFFBBF24), onTap: () => _preset(p)),
        ]),
        StudioSlider(label: 'Red', value: _r, min: 0, max: 255, display: '${_r.round()}', color: const Color(0xFFEF4444), onChanged: (v) => setState(() {
              _r = v;
              _paint = Color.fromARGB(255, _r.round(), _g.round(), _b.round());
              _erase = false;
            })),
        StudioSlider(label: 'Green', value: _g, min: 0, max: 255, display: '${_g.round()}', color: const Color(0xFF22C55E), onChanged: (v) => setState(() {
              _g = v;
              _paint = Color.fromARGB(255, _r.round(), _g.round(), _b.round());
              _erase = false;
            })),
        StudioSlider(label: 'Blue', value: _b, min: 0, max: 255, display: '${_b.round()}', color: const Color(0xFF3B82F6), onChanged: (v) => setState(() {
              _b = v;
              _paint = Color.fromARGB(255, _r.round(), _g.round(), _b.round());
              _erase = false;
            })),
      ]),
    );
  }
}

class _PixelPainter extends CustomPainter {
  _PixelPainter(this.s);
  final _NgmyPixelTvStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0B0D12));
    final side = math.min(size.width, size.height - 70) - 10;
    final ox = (size.width - side) / 2, oy = 6.0;
    final cell = side / _NgmyPixelTvStudioState.n;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(ox - 8, oy - 8, side + 16, side + 16), const Radius.circular(16)), Paint()..color = const Color(0xFF1F2430));
    for (var y = 0; y < _NgmyPixelTvStudioState.n; y++) {
      for (var x = 0; x < _NgmyPixelTvStudioState.n; x++) {
        final shown = s._scan < 0 || y < s._scan.floor();
        final c = shown ? s._px[y * _NgmyPixelTvStudioState.n + x] : const Color(0xFF000000);
        final rect = Rect.fromLTWH(ox + x * cell, oy + y * cell, cell, cell);
        if (s._zoom) {
          canvas.drawRect(rect, Paint()..color = Colors.black);
          final bw = (cell - 3) / 3;
          for (var k = 0; k < 3; k++) {
            final v = k == 0 ? (c.r * 255) : (k == 1 ? (c.g * 255) : (c.b * 255));
            final col = [const Color(0xFFFF0000), const Color(0xFF00FF00), const Color(0xFF0000FF)][k];
            canvas.drawRect(Rect.fromLTWH(rect.left + 1 + k * (bw + 0.5), rect.top + 2, bw, cell - 4), Paint()..color = col.withValues(alpha: (v / 255).clamp(0.0, 1.0)));
          }
        } else {
          canvas.drawRect(rect.deflate(0.5), Paint()..color = c);
        }
      }
    }
    if (s._scan >= 0 && s._scan < _NgmyPixelTvStudioState.n) {
      final y = oy + s._scan.floor() * cell;
      canvas.drawRect(Rect.fromLTWH(ox, y, side, cell), Paint()..color = Colors.white.withValues(alpha: 0.35));
    }
  }

  @override
  bool shouldRepaint(covariant _PixelPainter old) => true;
}
