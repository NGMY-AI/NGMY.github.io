import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Future<void> showNgmyColorBucketsDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Color Buckets',
    barrierColor: Colors.black,
    transitionDuration: const Duration(milliseconds: 280),
    pageBuilder: (ctx, a1, a2) => const NgmyColorBucketsScreen(),
    transitionBuilder: (ctx, anim, a2, child) {
      return FadeTransition(opacity: anim, child: child);
    },
  );
}

Future<int> ngmyColorBucketsCount({required String userEmail}) async => 0;

class _Pigment {
  const _Pigment(this.name, this.color);
  final String name;
  final Color color;
}

/// Studio pigments — muted, paint-like (no candy pink / neon rainbow).
const _kPigments = <_Pigment>[
  _Pigment('Titanium White', Color(0xFFF4F1EA)),
  _Pigment('Ivory Black', Color(0xFF1A1A1A)),
  _Pigment('Payne\'s Gray', Color(0xFF536878)),
  _Pigment('Burnt Umber', Color(0xFF8A3324)),
  _Pigment('Raw Sienna', Color(0xFFC47E3A)),
  _Pigment('Yellow Ochre', Color(0xFFC9A227)),
  _Pigment('Cadmium Yellow', Color(0xFFE0B000)),
  _Pigment('Cadmium Orange', Color(0xFFD96B1E)),
  _Pigment('Venetian Red', Color(0xFFB03A2E)),
  _Pigment('Alizarin Crimson', Color(0xFF8B1E3F)),
  _Pigment('Burnt Sienna', Color(0xFFA0522D)),
  _Pigment('Viridian', Color(0xFF2E6B57)),
  _Pigment('Sap Green', Color(0xFF4A6B3A)),
  _Pigment('Phthalo Green', Color(0xFF0F4C45)),
  _Pigment('Cerulean', Color(0xFF2F6F8F)),
  _Pigment('Ultramarine', Color(0xFF2B3A8F)),
  _Pigment('Cobalt Blue', Color(0xFF3A5F9A)),
  _Pigment('Indigo', Color(0xFF2C3E6B)),
];

class _Jar {
  _Jar(this.label);
  final String label;
  final List<Color> drops = [];

  int get volume => drops.length;

  Color get mixed {
    if (drops.isEmpty) return const Color(0xFF2A2A2A);
    var r = 0.0, g = 0.0, b = 0.0;
    for (final c in drops) {
      r += c.r;
      g += c.g;
      b += c.b;
    }
    final n = drops.length.toDouble();
    return Color.from(alpha: 1, red: r / n, green: g / n, blue: b / n);
  }
}

Color _mixWeighted(_Jar a, _Jar b) {
  final all = <Color>[...a.drops, ...b.drops];
  if (all.isEmpty) return const Color(0xFF2A2A2A);
  var r = 0.0, g = 0.0, bl = 0.0;
  for (final c in all) {
    r += c.r;
    g += c.g;
    bl += c.b;
  }
  final n = all.length.toDouble();
  return Color.from(alpha: 1, red: r / n, green: g / n, blue: bl / n);
}

String _hexOf(Color c) {
  final rr = (c.r * 255).round().clamp(0, 255).toRadixString(16).padLeft(2, '0');
  final gg = (c.g * 255).round().clamp(0, 255).toRadixString(16).padLeft(2, '0');
  final bb = (c.b * 255).round().clamp(0, 255).toRadixString(16).padLeft(2, '0');
  return '#${rr.toUpperCase()}${gg.toUpperCase()}${bb.toUpperCase()}';
}

String _describe(Color c) {
  final hsl = HSLColor.fromColor(c);
  final l = hsl.lightness;
  final s = hsl.saturation;
  final h = hsl.hue;
  if (l > 0.9) return 'Near white';
  if (l < 0.08) return 'Near black';
  if (s < 0.1) return l > 0.5 ? 'Light gray' : 'Dark gray';
  String tone;
  if (h < 18 || h >= 345) {
    tone = 'red';
  } else if (h < 40) {
    tone = 'orange';
  } else if (h < 70) {
    tone = 'yellow';
  } else if (h < 155) {
    tone = 'green';
  } else if (h < 200) {
    tone = 'teal';
  } else if (h < 250) {
    tone = 'blue';
  } else if (h < 295) {
    tone = 'violet';
  } else {
    tone = 'magenta';
  }
  final depth = l > 0.62 ? 'Pale' : (l < 0.32 ? 'Deep' : 'True');
  return '$depth $tone';
}

class NgmyColorBucketsScreen extends StatefulWidget {
  const NgmyColorBucketsScreen({super.key});

  @override
  State<NgmyColorBucketsScreen> createState() => _NgmyColorBucketsScreenState();
}

class _NgmyColorBucketsScreenState extends State<NgmyColorBucketsScreen> {
  _Pigment? _selected;
  int _activeJar = 0;
  final _jarA = _Jar('A');
  final _jarB = _Jar('B');
  Color? _result;
  String? _resultNote;

  _Jar get _target => _activeJar == 0 ? _jarA : _jarB;

  void _pour() {
    final p = _selected;
    if (p == null) return;
    setState(() {
      _target.drops.add(p.color);
      _result = null;
      _resultNote = null;
    });
    HapticFeedback.selectionClick();
  }

  void _mix() {
    if (_jarA.volume == 0 && _jarB.volume == 0) return;
    final mix = _mixWeighted(_jarA, _jarB);
    final a = _jarA.volume;
    final b = _jarB.volume;
    final total = a + b;
    setState(() {
      _result = mix;
      _resultNote = total == 0
          ? null
          : '${_describe(mix)} · ${_hexOf(mix)}\n'
              'Weighted ${a} drop${a == 1 ? '' : 's'} from A + $b from B';
    });
    HapticFeedback.mediumImpact();
  }

  void _clearJar(int which) {
    setState(() {
      (which == 0 ? _jarA : _jarB).drops.clear();
      _result = null;
      _resultNote = null;
    });
  }

  void _reset() {
    setState(() {
      _jarA.drops.clear();
      _jarB.drops.clear();
      _result = null;
      _resultNote = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    final pad = MediaQuery.paddingOf(context);
    return Material(
      color: const Color(0xFF141210),
      child: Stack(
        fit: StackFit.expand,
        children: [
          // Soft workshop light — no rainbow.
          const DecoratedBox(
            decoration: BoxDecoration(
              gradient: RadialGradient(
                center: Alignment(0, -0.55),
                radius: 1.15,
                colors: [Color(0xFF2A241C), Color(0xFF141210)],
              ),
            ),
          ),
          Positioned.fill(
            child: CustomPaint(painter: _GrainPainter()),
          ),
          Padding(
            padding: EdgeInsets.fromLTRB(16, pad.top + 8, 16, pad.bottom + 10),
            child: Column(
              children: [
                Row(
                  children: [
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Pigment Lab',
                            style: TextStyle(
                              color: Color(0xFFE8E0D4),
                              fontWeight: FontWeight.w800,
                              fontSize: 22,
                              letterSpacing: 0.2,
                            ),
                          ),
                          SizedBox(height: 2),
                          Text(
                            'Pour by volume — more drops weigh more in the mix',
                            style: TextStyle(color: Color(0xFF9A9184), fontSize: 12, height: 1.25),
                          ),
                        ],
                      ),
                    ),
                    IconButton(
                      onPressed: _reset,
                      tooltip: 'Clear all',
                      icon: const Icon(Icons.refresh_rounded, color: Color(0xFF9A9184)),
                    ),
                    IconButton(
                      onPressed: () => Navigator.pop(context),
                      icon: const Icon(Icons.close_rounded, color: Color(0xFFE8E0D4)),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                // Pigment strip
                SizedBox(
                  height: 72,
                  child: ListView.separated(
                    scrollDirection: Axis.horizontal,
                    itemCount: _kPigments.length,
                    separatorBuilder: (_, __) => const SizedBox(width: 8),
                    itemBuilder: (context, i) {
                      final p = _kPigments[i];
                      final on = identical(_selected, p) || _selected?.name == p.name;
                      return GestureDetector(
                        onTap: () => setState(() => _selected = p),
                        child: SizedBox(
                          width: 54,
                          child: Column(
                            children: [
                              Expanded(
                                child: AnimatedContainer(
                                  duration: const Duration(milliseconds: 160),
                                  decoration: BoxDecoration(
                                    color: p.color,
                                    borderRadius: BorderRadius.circular(10),
                                    border: Border.all(
                                      color: on ? const Color(0xFFE8E0D4) : const Color(0x33FFFFFF),
                                      width: on ? 2.4 : 1,
                                    ),
                                    boxShadow: [
                                      BoxShadow(
                                        color: Colors.black.withValues(alpha: 0.45),
                                        blurRadius: 8,
                                        offset: const Offset(0, 4),
                                      ),
                                      if (on)
                                        BoxShadow(
                                          color: p.color.withValues(alpha: 0.35),
                                          blurRadius: 10,
                                        ),
                                    ],
                                  ),
                                ),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                p.name.split(' ').last,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                  color: on ? const Color(0xFFE8E0D4) : const Color(0xFF7A7166),
                                  fontSize: 9,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),
                if (_selected != null)
                  Padding(
                    padding: const EdgeInsets.only(top: 6),
                    child: Text(
                      _selected!.name,
                      style: const TextStyle(color: Color(0xFFB7AFA3), fontSize: 12, fontWeight: FontWeight.w600),
                    ),
                  ),
                const SizedBox(height: 8),
                Expanded(
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Expanded(child: _jarPanel(0, _jarA)),
                      const SizedBox(width: 10),
                      Expanded(child: _jarPanel(1, _jarB)),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(
                      child: _actionBtn(
                        label: _selected == null ? 'Select a pigment' : 'Pour into ${_activeJar == 0 ? 'A' : 'B'}',
                        filled: true,
                        color: const Color(0xFF3D3429),
                        onTap: _selected == null ? null : _pour,
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: _actionBtn(
                        label: 'Mix bowls',
                        filled: true,
                        color: const Color(0xFF5C4A32),
                        onTap: (_jarA.volume == 0 && _jarB.volume == 0) ? null : _mix,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                SizedBox(
                  height: 118,
                  child: _resultBowl(),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _jarPanel(int index, _Jar jar) {
    final active = _activeJar == index;
    final fill = jar.volume == 0 ? 0.0 : (0.12 + (jar.volume / 12).clamp(0.0, 0.88));
    return GestureDetector(
      onTap: () => setState(() => _activeJar = index),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.fromLTRB(10, 10, 10, 8),
        decoration: BoxDecoration(
          color: const Color(0xFF1C1915),
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: active ? const Color(0xFFC4B49A) : const Color(0xFF2E2A24),
            width: active ? 1.6 : 1,
          ),
          boxShadow: [
            BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 14, offset: const Offset(0, 8)),
          ],
        ),
        child: Column(
          children: [
            Row(
              children: [
                Text(
                  'Bowl ${jar.label}',
                  style: TextStyle(
                    color: active ? const Color(0xFFE8E0D4) : const Color(0xFF9A9184),
                    fontWeight: FontWeight.w800,
                    fontSize: 13,
                  ),
                ),
                const Spacer(),
                if (jar.volume > 0)
                  GestureDetector(
                    onTap: () => _clearJar(index),
                    child: const Icon(Icons.close_rounded, size: 16, color: Color(0xFF7A7166)),
                  ),
              ],
            ),
            const SizedBox(height: 6),
            Expanded(
              child: CustomPaint(
                painter: _PaintBowlPainter(
                  paintColor: jar.mixed,
                  fill: fill,
                  empty: jar.volume == 0,
                ),
                child: const SizedBox.expand(),
              ),
            ),
            const SizedBox(height: 6),
            Text(
              jar.volume == 0 ? 'Empty' : '${jar.volume} drop${jar.volume == 1 ? '' : 's'} · ${_hexOf(jar.mixed)}',
              style: const TextStyle(color: Color(0xFF8A8175), fontSize: 11, fontWeight: FontWeight.w700),
            ),
            if (active)
              const Padding(
                padding: EdgeInsets.only(top: 2),
                child: Text('Pouring here', style: TextStyle(color: Color(0xFFC4B49A), fontSize: 10, fontWeight: FontWeight.w700)),
              ),
          ],
        ),
      ),
    );
  }

  Widget _resultBowl() {
    final has = _result != null;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      decoration: BoxDecoration(
        color: const Color(0xFF1C1915),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: const Color(0xFF2E2A24)),
      ),
      child: Row(
        children: [
          Container(
            width: 86,
            height: 86,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: has ? _result : const Color(0xFF2A2620),
              border: Border.all(color: const Color(0xFF4A4338), width: 2),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.5),
                  blurRadius: 12,
                  offset: const Offset(0, 6),
                ),
                if (has)
                  BoxShadow(
                    color: _result!.withValues(alpha: 0.28),
                    blurRadius: 16,
                  ),
              ],
              gradient: has
                  ? RadialGradient(
                      center: const Alignment(-0.35, -0.4),
                      radius: 0.95,
                      colors: [
                        Color.lerp(_result!, Colors.white, 0.22)!,
                        _result!,
                        Color.lerp(_result!, Colors.black, 0.22)!,
                      ],
                      stops: const [0, 0.45, 1],
                    )
                  : null,
            ),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text('Mixture', style: TextStyle(color: Color(0xFFE8E0D4), fontWeight: FontWeight.w800, fontSize: 14)),
                const SizedBox(height: 4),
                Text(
                  has ? (_resultNote ?? _hexOf(_result!)) : 'Add drops to A and/or B, then Mix bowls.\nMore drops in one bowl shift the result that way.',
                  style: const TextStyle(color: Color(0xFF9A9184), fontSize: 12, height: 1.35, fontWeight: FontWeight.w600),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _actionBtn({required String label, required bool filled, required Color color, VoidCallback? onTap}) {
    return SizedBox(
      height: 48,
      child: Material(
        color: onTap == null ? color.withValues(alpha: 0.45) : color,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(14),
          child: Center(
            child: Text(
              label,
              style: TextStyle(
                color: onTap == null ? const Color(0xFF7A7166) : const Color(0xFFE8E0D4),
                fontWeight: FontWeight.w800,
                fontSize: 13,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _PaintBowlPainter extends CustomPainter {
  _PaintBowlPainter({required this.paintColor, required this.fill, required this.empty});
  final Color paintColor;
  final double fill;
  final bool empty;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bowl = Path()
      ..moveTo(w * 0.16, h * 0.08)
      ..lineTo(w * 0.84, h * 0.08)
      ..quadraticBezierTo(w * 0.92, h * 0.45, w * 0.78, h * 0.92)
      ..quadraticBezierTo(w * 0.5, h * 1.02, w * 0.22, h * 0.92)
      ..quadraticBezierTo(w * 0.08, h * 0.45, w * 0.16, h * 0.08)
      ..close();

    // Glass body
    canvas.drawPath(
      bowl,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            const Color(0xFF3A342C).withValues(alpha: 0.55),
            const Color(0xFF1A1713).withValues(alpha: 0.8),
          ],
        ).createShader(Offset.zero & size),
    );

    canvas.save();
    canvas.clipPath(bowl);
    if (!empty) {
      final top = h * (1 - fill);
      final liquid = Rect.fromLTRB(0, top, w, h);
      canvas.drawRect(
        liquid,
        Paint()
          ..shader = LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color.lerp(paintColor, Colors.white, 0.18)!,
              paintColor,
              Color.lerp(paintColor, Colors.black, 0.18)!,
            ],
          ).createShader(liquid),
      );
      // Surface highlight
      canvas.drawOval(
        Rect.fromCenter(center: Offset(w * 0.5, top + 4), width: w * 0.55, height: 10),
        Paint()..color = Colors.white.withValues(alpha: 0.12),
      );
    }
    canvas.restore();

    // Rim
    canvas.drawPath(
      bowl,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = const Color(0xFF5A5246),
    );
    // Glass gleam
    canvas.drawPath(
      Path()
        ..moveTo(w * 0.22, h * 0.15)
        ..quadraticBezierTo(w * 0.28, h * 0.5, w * 0.26, h * 0.78),
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.2
        ..color = Colors.white.withValues(alpha: 0.14)
        ..strokeCap = StrokeCap.round,
    );
  }

  @override
  bool shouldRepaint(covariant _PaintBowlPainter oldDelegate) =>
      oldDelegate.paintColor != paintColor || oldDelegate.fill != fill || oldDelegate.empty != empty;
}

class _GrainPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final rnd = math.Random(7);
    final p = Paint()..color = Colors.white.withValues(alpha: 0.015);
    for (var i = 0; i < 120; i++) {
      final x = rnd.nextDouble() * size.width;
      final y = rnd.nextDouble() * size.height;
      canvas.drawCircle(Offset(x, y), rnd.nextDouble() * 1.2 + 0.3, p);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
