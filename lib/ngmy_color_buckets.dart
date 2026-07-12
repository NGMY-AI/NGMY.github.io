import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Future<void> showNgmyColorBucketsDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Paint Mix',
    barrierColor: const Color(0xFF0B0B0B),
    transitionDuration: const Duration(milliseconds: 260),
    pageBuilder: (ctx, a1, a2) => const NgmyColorBucketsScreen(),
    transitionBuilder: (ctx, anim, a2, child) => FadeTransition(opacity: anim, child: child),
  );
}

Future<int> ngmyColorBucketsCount({required String userEmail}) async => 0;

class _Pigment {
  const _Pigment(this.name, this.color);
  final String name;
  final Color color;
}

const _kPigments = <_Pigment>[
  _Pigment('Titanium White', Color(0xFFF2EFE8)),
  _Pigment('Ivory Black', Color(0xFF161616)),
  _Pigment('Payne Gray', Color(0xFF4E5C68)),
  _Pigment('Burnt Umber', Color(0xFF7A3E2B)),
  _Pigment('Raw Sienna', Color(0xFFB87333)),
  _Pigment('Yellow Ochre', Color(0xFFC59A1B)),
  _Pigment('Cadmium Yellow', Color(0xFFD6A800)),
  _Pigment('Cadmium Orange', Color(0xFFCC6518)),
  _Pigment('Venetian Red', Color(0xFFA33A2C)),
  _Pigment('Alizarin', Color(0xFF7E1D38)),
  _Pigment('Burnt Sienna', Color(0xFF96502A)),
  _Pigment('Viridian', Color(0xFF2A6452)),
  _Pigment('Sap Green', Color(0xFF456536)),
  _Pigment('Phthalo Green', Color(0xFF0D453F)),
  _Pigment('Cerulean', Color(0xFF2C6785)),
  _Pigment('Ultramarine', Color(0xFF2A3786)),
  _Pigment('Cobalt', Color(0xFF3A5C94)),
  _Pigment('Indigo', Color(0xFF2A3A62)),
];

class _Bowl {
  _Bowl(this.label);
  final String label;
  final List<Color> drops = [];
  int get volume => drops.length;

  Color get mixed {
    if (drops.isEmpty) return const Color(0xFF1A1A1A);
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

Color _mixWeighted(_Bowl a, _Bowl b) {
  final all = <Color>[...a.drops, ...b.drops];
  if (all.isEmpty) return const Color(0xFF1A1A1A);
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
  static const _bg = Color(0xFF0B0B0B);
  static const _panel = Color(0xFF141414);
  static const _line = Color(0xFF2A2A2A);
  static const _text = Color(0xFFEAEAEA);
  static const _muted = Color(0xFF8E8E8E);

  _Pigment? _selected;
  final _a = _Bowl('A');
  final _b = _Bowl('B');
  Color? _result;
  String? _note;

  void _pourInto(_Bowl bowl) {
    final p = _selected;
    if (p == null) {
      HapticFeedback.lightImpact();
      return;
    }
    setState(() {
      bowl.drops.add(p.color);
      _result = null;
      _note = null;
    });
    HapticFeedback.selectionClick();
  }

  void _mix() {
    if (_a.volume == 0 && _b.volume == 0) return;
    final mix = _mixWeighted(_a, _b);
    setState(() {
      _result = mix;
      _note = '${_describe(mix)} · ${_hexOf(mix)}\n'
          '${_a.volume} drop${_a.volume == 1 ? '' : 's'} in A + ${_b.volume} in B';
    });
    HapticFeedback.mediumImpact();
  }

  void _clear(_Bowl bowl) {
    setState(() {
      bowl.drops.clear();
      _result = null;
      _note = null;
    });
  }

  void _reset() {
    setState(() {
      _a.drops.clear();
      _b.drops.clear();
      _result = null;
      _note = null;
      _selected = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    final pad = MediaQuery.paddingOf(context);
    return Material(
      color: _bg,
      child: Padding(
        padding: EdgeInsets.fromLTRB(14, pad.top + 6, 14, pad.bottom + 10),
        child: Column(
          children: [
            Row(
              children: [
                Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                    color: _panel,
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: _line),
                  ),
                  child: const Icon(Icons.palette_outlined, color: _text, size: 18),
                ),
                const SizedBox(width: 10),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Paint Mix', style: TextStyle(color: _text, fontWeight: FontWeight.w800, fontSize: 20)),
                      Text('Tap a color, then tap a bowl to pour', style: TextStyle(color: _muted, fontSize: 11)),
                    ],
                  ),
                ),
                IconButton(onPressed: _reset, icon: const Icon(Icons.refresh_rounded, color: _muted)),
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: _text)),
              ],
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 78,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: _kPigments.length,
                separatorBuilder: (_, __) => const SizedBox(width: 8),
                itemBuilder: (context, i) {
                  final p = _kPigments[i];
                  final on = _selected?.name == p.name;
                  return GestureDetector(
                    onTap: () => setState(() => _selected = p),
                    child: SizedBox(
                      width: 58,
                      child: Column(
                        children: [
                          Expanded(
                            child: Container(
                              decoration: BoxDecoration(
                                color: p.color,
                                borderRadius: BorderRadius.circular(12),
                                border: Border.all(color: on ? _text : _line, width: on ? 2 : 1),
                                boxShadow: [
                                  BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 8, offset: const Offset(0, 3)),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(height: 5),
                          Text(
                            p.name.split(' ').last,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(color: on ? _text : _muted, fontSize: 9, fontWeight: FontWeight.w700),
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
                padding: const EdgeInsets.only(top: 4),
                child: Text(_selected!.name, style: const TextStyle(color: _muted, fontSize: 12, fontWeight: FontWeight.w600)),
              ),
            const SizedBox(height: 10),
            Expanded(
              child: Row(
                children: [
                  Expanded(child: _bowlCard(_a)),
                  const SizedBox(width: 10),
                  Expanded(child: _bowlCard(_b)),
                ],
              ),
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 48,
              width: double.infinity,
              child: FilledButton(
                onPressed: (_a.volume == 0 && _b.volume == 0) ? null : _mix,
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF222222),
                  disabledBackgroundColor: const Color(0xFF171717),
                  foregroundColor: _text,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14), side: const BorderSide(color: _line)),
                ),
                child: const Text('Mix bowls', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
            const SizedBox(height: 10),
            _resultBar(),
          ],
        ),
      ),
    );
  }

  Widget _bowlCard(_Bowl bowl) {
    final fill = bowl.volume == 0 ? 0.0 : (0.18 + (bowl.volume / 10).clamp(0.0, 0.72));
    return Material(
      color: _panel,
      borderRadius: BorderRadius.circular(18),
      child: InkWell(
        onTap: () => _pourInto(bowl),
        borderRadius: BorderRadius.circular(18),
        child: Container(
          padding: const EdgeInsets.fromLTRB(10, 10, 10, 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: _line),
          ),
          child: Column(
            children: [
              Row(
                children: [
                  Text('Bowl ${bowl.label}', style: const TextStyle(color: _text, fontWeight: FontWeight.w800, fontSize: 13)),
                  const Spacer(),
                  if (bowl.volume > 0)
                    GestureDetector(
                      onTap: () => _clear(bowl),
                      child: const Icon(Icons.close_rounded, size: 16, color: _muted),
                    ),
                ],
              ),
              const SizedBox(height: 6),
              Expanded(
                child: CustomPaint(
                  painter: _WideBowlPainter(color: bowl.mixed, fill: fill, empty: bowl.volume == 0),
                  child: const SizedBox.expand(),
                ),
              ),
              const SizedBox(height: 6),
              Text(
                bowl.volume == 0 ? 'Tap to pour' : '${bowl.volume} drop${bowl.volume == 1 ? '' : 's'} · ${_hexOf(bowl.mixed)}',
                style: const TextStyle(color: _muted, fontSize: 11, fontWeight: FontWeight.w700),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _resultBar() {
    final has = _result != null;
    return Container(
      height: 96,
      width: double.infinity,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _line),
      ),
      child: Row(
        children: [
          Container(
            width: 70,
            height: 70,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: has ? _result : const Color(0xFF1A1A1A),
              border: Border.all(color: _line, width: 2),
              gradient: has
                  ? RadialGradient(
                      center: const Alignment(-0.3, -0.35),
                      colors: [
                        Color.lerp(_result!, Colors.white, 0.2)!,
                        _result!,
                        Color.lerp(_result!, Colors.black, 0.2)!,
                      ],
                    )
                  : null,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              has ? (_note ?? _hexOf(_result!)) : 'Mix after pouring. More drops in one bowl pull the result that way.',
              style: const TextStyle(color: _muted, fontSize: 12, height: 1.35, fontWeight: FontWeight.w600),
            ),
          ),
        ],
      ),
    );
  }
}

class _WideBowlPainter extends CustomPainter {
  _WideBowlPainter({required this.color, required this.fill, required this.empty});
  final Color color;
  final double fill;
  final bool empty;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    // Short, wide ceramic bowl — not a tall cup.
    final bowl = Path()
      ..moveTo(w * 0.12, h * 0.22)
      ..lineTo(w * 0.88, h * 0.22)
      ..quadraticBezierTo(w * 0.94, h * 0.55, w * 0.82, h * 0.88)
      ..quadraticBezierTo(w * 0.5, h * 1.02, w * 0.18, h * 0.88)
      ..quadraticBezierTo(w * 0.06, h * 0.55, w * 0.12, h * 0.22)
      ..close();

    canvas.drawPath(
      bowl,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF2A2A2A), Color(0xFF151515)],
        ).createShader(Offset.zero & size),
    );

    canvas.save();
    canvas.clipPath(bowl);
    if (!empty) {
      final top = h * (1 - fill.clamp(0.15, 0.9));
      final rect = Rect.fromLTRB(0, top, w, h);
      canvas.drawRect(
        rect,
        Paint()
          ..shader = LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color.lerp(color, Colors.white, 0.16)!,
              color,
              Color.lerp(color, Colors.black, 0.16)!,
            ],
          ).createShader(rect),
      );
      canvas.drawOval(
        Rect.fromCenter(center: Offset(w * 0.5, top + 3), width: w * 0.62, height: 8),
        Paint()..color = Colors.white.withValues(alpha: 0.12),
      );
    }
    canvas.restore();

    canvas.drawPath(
      bowl,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.8
        ..color = const Color(0xFF3A3A3A),
    );
    // Rim highlight
    canvas.drawLine(
      Offset(w * 0.16, h * 0.22),
      Offset(w * 0.84, h * 0.22),
      Paint()
        ..strokeWidth = 2.4
        ..color = const Color(0xFF4A4A4A)
        ..strokeCap = StrokeCap.round,
    );
  }

  @override
  bool shouldRepaint(covariant _WideBowlPainter oldDelegate) =>
      oldDelegate.color != color || oldDelegate.fill != fill || oldDelegate.empty != empty;
}
