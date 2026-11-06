import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

void _label(Canvas canvas, String s, Offset at, {Color color = Colors.white, double size = 13, FontWeight weight = FontWeight.w900}) {
  final tp = TextPainter(text: TextSpan(text: s, style: TextStyle(color: color, fontSize: size, fontWeight: weight)), textDirection: TextDirection.ltr)..layout();
  tp.paint(canvas, at - Offset(tp.width / 2, tp.height / 2));
}

Widget _overlay(String title, String sub, Color c, List<Widget> actions) => Center(
      child: Container(
        margin: const EdgeInsets.all(24),
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(color: const Color(0xEE17171A), borderRadius: BorderRadius.circular(24), border: Border.all(color: c.withValues(alpha: 0.6))),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Text(title, textAlign: TextAlign.center, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 22)),
          const SizedBox(height: 6),
          Text(sub, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, height: 1.4)),
          const SizedBox(height: 14),
          Wrap(spacing: 8, alignment: WrapAlignment.center, children: actions),
        ]),
      ),
    );

// ═════════════════════════════════════════════════════════════════════════════
// MAGNET CRANE: lift the iron off the conveyor. Plastic, wood and aluminium do not stick.
// ═════════════════════════════════════════════════════════════════════════════

class ScrapKind {
  const ScrapKind(this.name, this.emoji, this.magnetic);
  final String name;
  final String emoji;
  final bool magnetic;
}

const List<ScrapKind> kScrap = [
  ScrapKind('Iron nail', '🔩', true),
  ScrapKind('Steel can', '🥫', true),
  ScrapKind('Nickel coin', '🪙', true),
  ScrapKind('Iron key', '🗝️', true),
  ScrapKind('Plastic duck', '🦆', false),
  ScrapKind('Wooden log', '🪵', false),
  ScrapKind('Aluminium foil', '📎', false),
  ScrapKind('Glass bottle', '🍾', false),
  ScrapKind('Copper wire', '🧵', false),
];

class _Scrap {
  _Scrap(this.kind, this.x);
  final ScrapKind kind;
  double x;
  double y = 0;
  double vy = 0;
  bool held = false;
  bool onBelt = true;
  double flash = 0;
}

class NgmyMagnetCraneStudio extends StatefulWidget {
  const NgmyMagnetCraneStudio({super.key});

  @override
  State<NgmyMagnetCraneStudio> createState() => _NgmyMagnetCraneStudioState();
}

class _NgmyMagnetCraneStudioState extends State<NgmyMagnetCraneStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final math.Random _rnd = math.Random();
  final List<_Scrap> _items = [];
  Size _size = const Size(300, 500);
  Offset _m = const Offset(150, 120);
  bool _on = false;
  double _time = 45;
  int _score = 0;
  int _missed = 0;
  int _best = 0;
  String _state = 'ready';
  double _spawn = 0;
  String _tip = '';
  double _tipLife = 0;
  double _t = 0;
  final List<(Offset, String, double)> _floaters = [];

  double get _beltY => _size.height * 0.82;
  Rect get _bin => Rect.fromLTWH(_size.width - 96, _size.height * 0.16, 84, 74);

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('magnet_crane').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 0);
    });
  }

  void _start() {
    _items.clear();
    _score = 0;
    _missed = 0;
    _time = 45;
    _spawn = 0;
    _state = 'play';
    _m = Offset(_size.width * 0.4, _size.height * 0.3);
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    _tipLife = math.max(0, _tipLife - dt);
    for (var i = _floaters.length - 1; i >= 0; i--) {
      _floaters[i] = (_floaters[i].$1 - Offset(0, 40 * dt), _floaters[i].$2, _floaters[i].$3 - dt);
      if (_floaters[i].$3 <= 0) _floaters.removeAt(i);
    }
    if (_state == 'play') {
      _time -= dt;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = 0.9 + _rnd.nextDouble() * 0.9;
        final it = _Scrap(kScrap[_rnd.nextInt(kScrap.length)], -20);
        it.y = _beltY;
        _items.add(it);
      }
      _stepItems(dt);
      if (_time <= 0) {
        _state = 'done';
        for (final it in _items.where((i) => i.held)) {
          it.held = false;
        }
        if (_score > _best) {
          _best = _score;
          NgmyProgress.save('magnet_crane', {'best': _best});
        }
      }
    }
    setState(() {});
  }

  void _stepItems(double dt) {
    final speed = 52.0 + (45 - _time) * 0.8;
    for (final it in List.of(_items)) {
      it.flash = math.max(0, it.flash - dt);
      if (it.held) {
        // Carried: swings along under the magnet.
        it.x += (_m.dx - it.x) * math.min(1, dt * 14);
        it.y += (_m.dy + 30 - it.y) * math.min(1, dt * 14);
        if (!_on) {
          it.held = false;
          it.onBelt = false;
          if (_bin.inflate(10).contains(Offset(it.x, it.y))) {
            // In the bin!
            _score += 1;
            _floaters.add((Offset(it.x, it.y), '+1 ${it.kind.name}', 1.0));
            NgmyTone.sfx('zap', 8, ms: 160, volume: 0.45);
            _items.remove(it);
            continue;
          }
        }
        continue;
      }
      if (it.onBelt) {
        it.x += speed * dt;
      } else {
        it.vy += 900 * dt;
        it.y += it.vy * dt;
        if (it.y >= _beltY) {
          it.y = _beltY;
          it.vy = 0;
          it.onBelt = true;
        }
      }
      // The magnet reaches for iron, and does nothing to the rest.
      if (_on) {
        final d = Offset(_m.dx - it.x, _m.dy + 28 - it.y);
        final dist = d.distance;
        if (dist < 110) {
          if (it.kind.magnetic) {
            final pull = 30000 / math.max(dist * dist, 400);
            it.onBelt = false;
            it.x += d.dx / math.max(dist, 1) * pull * dt * 14;
            it.y += d.dy / math.max(dist, 1) * pull * dt * 14;
            it.vy = 0;
            if (dist < 26) {
              final carrying = _items.where((o) => o.held).length;
              if (carrying < 3) {
                it.held = true;
                NgmyTone.sfx('click', 3, ms: 60, volume: 0.5);
                _tip = '${it.kind.name}: magnetic ✔';
                _tipLife = 1.4;
              }
            }
          } else if (dist < 60) {
            it.flash = 0.3;
            _tip = '${it.kind.name}: not magnetic ✖';
            _tipLife = 1.4;
          }
        }
      }
      if (it.x > _size.width + 30) {
        if (it.kind.magnetic) {
          _missed++;
          _floaters.add((Offset(_size.width - 60, _beltY - 30), 'missed!', 0.9));
        }
        _items.remove(it);
      }
    }
  }

  void _move(Offset p) {
    _m = Offset(p.dx.clamp(20, _size.width - 20), p.dy.clamp(40, _beltY - 20));
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'MAGNET LAB',
      accent: const Color(0xFFEF4444),
      help: 'A magnet pulls on iron, steel and nickel, but not on plastic, wood, glass, copper or aluminium.\n\nPress and hold on the screen to turn the electromagnet on, and drag to move it. Iron things jump up and stick to it. Carry them over the bin (top right) and let go. You score 1 for each magnetic thing in the bin, and the belt gets faster. Things that are not magnetic ignore the magnet, so do not waste time on them!\n\nYou have 45 seconds.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          Listener(
            behavior: HitTestBehavior.opaque,
            onPointerDown: (e) {
              _move(e.localPosition);
              _on = _state == 'play';
              if (_on) HapticFeedback.selectionClick();
            },
            onPointerMove: (e) => _move(e.localPosition),
            onPointerUp: (_) => _on = false,
            onPointerCancel: (_) => _on = false,
            child: CustomPaint(size: _size, painter: _CranePainter(this)),
          ),
          Positioned(left: 14, right: 14, top: 4, child: IgnorePointer(child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text('${_time.ceil().clamp(0, 99)} s', style: TextStyle(color: _time < 10 ? const Color(0xFFF87171) : Colors.white, fontWeight: FontWeight.w900, fontSize: 20)), Text('SCORE $_score   MISSED $_missed', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900))]))),
          if (_state == 'ready') _overlay('Magnet Lab', 'Hold to switch on the magnet. Lift the iron, leave the rest.${_best > 0 ? '\nBest: $_best' : ''}', const Color(0xFFEF4444), [StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: () => setState(_start))]),
          if (_state == 'done') _overlay('Time! Score $_score', _score >= _best ? 'New best!' : 'Best: $_best', const Color(0xFF4ADE80), [StudioButton(icon: Icons.replay_rounded, label: 'Again', color: const Color(0xFF4ADE80), onTap: () => setState(_start))]),
        ]);
      }),
    );
  }
}

class _CranePainter extends CustomPainter {
  _CranePainter(this.s);
  final _NgmyMagnetCraneStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF111827), Color(0xFF1F2937)]).createShader(Offset.zero & size));
    // The bin.
    final bin = s._bin;
    canvas.drawRRect(RRect.fromRectAndRadius(bin, const Radius.circular(10)), Paint()..color = const Color(0xFF166534).withValues(alpha: 0.6));
    canvas.drawRRect(RRect.fromRectAndRadius(bin, const Radius.circular(10)), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFF4ADE80));
    _label(canvas, 'IRON BIN', bin.center, color: const Color(0xFF86EFAC), size: 12);
    // The belt.
    final by = s._beltY + 22;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(0, by, size.width, 22), const Radius.circular(8)), Paint()..color = const Color(0xFF374151));
    for (var x = -(s._t * 52) % 30; x < size.width; x += 30) {
      canvas.drawLine(Offset(x, by + 3), Offset(x + 10, by + 19), Paint()..color = Colors.black26..strokeWidth = 3);
    }
    // Things on the belt.
    for (final it in s._items) {
      final tp = TextPainter(text: TextSpan(text: it.kind.emoji, style: TextStyle(fontSize: 34, shadows: it.flash > 0 ? const [Shadow(color: Colors.red, blurRadius: 12)] : null)), textDirection: TextDirection.ltr)..layout();
      canvas.save();
      canvas.translate(it.x, it.y);
      if (it.held) canvas.rotate(math.sin(s._t * 8) * 0.12);
      tp.paint(canvas, Offset(-tp.width / 2, -tp.height / 2));
      canvas.restore();
    }
    // The crane: a cable and the electromagnet.
    final m = s._m;
    canvas.drawLine(Offset(m.dx, 0), Offset(m.dx, m.dy - 14), Paint()..color = Colors.white54..strokeWidth = 3);
    if (s._on) {
      canvas.drawCircle(m + const Offset(0, 28), 90, Paint()..shader = RadialGradient(colors: [const Color(0xFF60A5FA).withValues(alpha: 0.4), Colors.transparent]).createShader(Rect.fromCircle(center: m + const Offset(0, 28), radius: 90)));
      for (var i = 0; i < 4; i++) {
        final r = 20 + ((s._t * 80 + i * 22) % 90);
        canvas.drawCircle(m + const Offset(0, 28), r, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = const Color(0xFF93C5FD).withValues(alpha: (1 - r / 110).clamp(0.0, 0.5)));
      }
    }
    final body = RRect.fromRectAndRadius(Rect.fromCenter(center: m, width: 58, height: 28), const Radius.circular(10));
    canvas.drawRRect(body, Paint()..shader = LinearGradient(colors: s._on ? const [Color(0xFF60A5FA), Color(0xFF1D4ED8)] : const [Color(0xFF9CA3AF), Color(0xFF4B5563)]).createShader(body.outerRect));
    canvas.drawRect(Rect.fromLTWH(m.dx - 29, m.dy + 6, 20, 14), Paint()..color = const Color(0xFFEF4444));
    canvas.drawRect(Rect.fromLTWH(m.dx + 9, m.dy + 6, 20, 14), Paint()..color = const Color(0xFFE5E7EB));
    _label(canvas, 'N', Offset(m.dx - 19, m.dy + 13), size: 10);
    _label(canvas, 'S', Offset(m.dx + 19, m.dy + 13), color: Colors.black87, size: 10);
    if (s._tipLife > 0 && s._tip.isNotEmpty) {
      final good = s._tip.contains('✔');
      _label(canvas, s._tip, Offset(size.width / 2, size.height * 0.1), color: good ? const Color(0xFF4ADE80) : const Color(0xFFF87171), size: 15);
    }
    for (final f in s._floaters) {
      _label(canvas, f.$2, f.$1, color: const Color(0xFFFBBF24).withValues(alpha: f.$3.clamp(0.0, 1.0)), size: 14);
    }
  }

  @override
  bool shouldRepaint(covariant _CranePainter old) => true;
}
