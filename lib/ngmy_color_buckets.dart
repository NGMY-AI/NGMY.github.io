import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Future<void> showNgmyColorBucketsDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Color Buckets',
    barrierColor: Colors.black.withValues(alpha: 0.72),
    transitionDuration: const Duration(milliseconds: 380),
    pageBuilder: (ctx, a1, a2) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, a2, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutCubic);
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.94, end: 1).animate(curved),
          child: const NgmyColorBucketsScreen(),
        ),
      );
    },
  );
}

Future<int> ngmyColorBucketsCount({required String userEmail}) async => 0;

class _PaintSwatch {
  const _PaintSwatch(this.name, this.color);
  final String name;
  final Color color;
}

const _kSwatches = <_PaintSwatch>[
  _PaintSwatch('White', Color(0xFFFFFFFF)),
  _PaintSwatch('Black', Color(0xFF111827)),
  _PaintSwatch('Red', Color(0xFFEF4444)),
  _PaintSwatch('Orange', Color(0xFFF97316)),
  _PaintSwatch('Yellow', Color(0xFFFACC15)),
  _PaintSwatch('Lime', Color(0xFF84CC16)),
  _PaintSwatch('Green', Color(0xFF22C55E)),
  _PaintSwatch('Teal', Color(0xFF14B8A6)),
  _PaintSwatch('Cyan', Color(0xFF06B6D4)),
  _PaintSwatch('Blue', Color(0xFF3B82F6)),
  _PaintSwatch('Indigo', Color(0xFF6366F1)),
  _PaintSwatch('Violet', Color(0xFF8B5CF6)),
  _PaintSwatch('Pink', Color(0xFFEC4899)),
  _PaintSwatch('Brown', Color(0xFF92400E)),
  _PaintSwatch('Gold', Color(0xFFEAB308)),
  _PaintSwatch('Navy', Color(0xFF1E3A8A)),
];

class _Bucket {
  _Bucket(this.label);
  final String label;
  final List<Color> pours = [];

  Color get mixed {
    if (pours.isEmpty) return const Color(0xFF1F2937);
    var r = 0.0, g = 0.0, b = 0.0;
    for (final c in pours) {
      r += c.r;
      g += c.g;
      b += c.b;
    }
    final n = pours.length.toDouble();
    return Color.from(alpha: 1, red: r / n, green: g / n, blue: b / n);
  }

  String get hex {
    final c = mixed;
    final rr = (c.r * 255).round().clamp(0, 255).toRadixString(16).padLeft(2, '0');
    final gg = (c.g * 255).round().clamp(0, 255).toRadixString(16).padLeft(2, '0');
    final bb = (c.b * 255).round().clamp(0, 255).toRadixString(16).padLeft(2, '0');
    return '#${rr.toUpperCase()}${gg.toUpperCase()}${bb.toUpperCase()}';
  }
}

class NgmyColorBucketsScreen extends StatefulWidget {
  const NgmyColorBucketsScreen({super.key});

  @override
  State<NgmyColorBucketsScreen> createState() => _NgmyColorBucketsScreenState();
}

class _NgmyColorBucketsScreenState extends State<NgmyColorBucketsScreen> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _pourAnim;
  Color? _selected;
  String? _selectedName;
  int _targetBucket = 0;
  final _buckets = [_Bucket('A'), _Bucket('B'), _Bucket('Mix')];
  String? _resultLabel;
  bool _pouring = false;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
    _pourAnim = AnimationController(vsync: this, duration: const Duration(milliseconds: 700));
  }

  @override
  void dispose() {
    _pulse.dispose();
    _pourAnim.dispose();
    super.dispose();
  }

  Future<void> _pourInto(int index) async {
    if (_selected == null || _pouring) return;
    setState(() {
      _pouring = true;
      _targetBucket = index;
    });
    HapticFeedback.selectionClick();
    await _pourAnim.forward(from: 0);
    setState(() {
      _buckets[index].pours.add(_selected!);
      _resultLabel = null;
      _pouring = false;
    });
  }

  void _blendAll() {
    final a = _buckets[0].mixed;
    final b = _buckets[1].mixed;
    if (_buckets[0].pours.isEmpty && _buckets[1].pours.isEmpty) return;
    final parts = <Color>[];
    if (_buckets[0].pours.isNotEmpty) parts.add(a);
    if (_buckets[1].pours.isNotEmpty) parts.add(b);
    var r = 0.0, g = 0.0, bl = 0.0;
    for (final c in parts) {
      r += c.r;
      g += c.g;
      bl += c.b;
    }
    final n = parts.length.toDouble();
    final mix = Color.from(alpha: 1, red: r / n, green: g / n, blue: bl / n);
    setState(() {
      _buckets[2].pours
        ..clear()
        ..addAll(parts);
      _resultLabel = _describeMix(mix);
    });
    HapticFeedback.mediumImpact();
  }

  String _describeMix(Color c) {
    final hsl = HSLColor.fromColor(c);
    final l = hsl.lightness;
    final s = hsl.saturation;
    final h = hsl.hue;
    if (l > 0.92) return 'Almost pure white';
    if (l < 0.08) return 'Deep black';
    if (s < 0.12) return l > 0.55 ? 'Soft gray' : 'Charcoal gray';
    String tone;
    if (h < 20 || h >= 340) {
      tone = 'red';
    } else if (h < 45) {
      tone = 'orange';
    } else if (h < 70) {
      tone = 'yellow';
    } else if (h < 160) {
      tone = 'green';
    } else if (h < 200) {
      tone = 'cyan';
    } else if (h < 255) {
      tone = 'blue';
    } else if (h < 290) {
      tone = 'violet';
    } else {
      tone = 'pink';
    }
    final depth = l > 0.65 ? 'Light' : (l < 0.35 ? 'Deep' : 'Rich');
    return '$depth $tone mix';
  }

  void _clearBucket(int i) {
    setState(() {
      _buckets[i].pours.clear();
      if (i == 2) _resultLabel = null;
    });
  }

  void _resetAll() {
    setState(() {
      for (final b in _buckets) {
        b.pours.clear();
      }
      _resultLabel = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 540, maxHeight: 780),
        child: Material(
          color: const Color(0xFF0A0F1C),
          borderRadius: BorderRadius.circular(28),
          clipBehavior: Clip.antiAlias,
          child: Column(
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(18, 16, 8, 16),
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Color(0xFFEF4444), Color(0xFFF59E0B), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFF8B5CF6)],
                  ),
                ),
                child: Row(
                  children: [
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Color Buckets', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                          SizedBox(height: 4),
                          Text(
                            'Pour paints into buckets, then blend them to discover the mix.',
                            style: TextStyle(color: Colors.white70, fontSize: 12, height: 1.35),
                          ),
                        ],
                      ),
                    ),
                    IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white)),
                  ],
                ),
              ),
              Expanded(
                child: ListView(
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 24),
                  children: [
                    const Text('Pick a color', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                    const SizedBox(height: 10),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: _kSwatches.map((s) {
                        final on = _selected == s.color;
                        return GestureDetector(
                          onTap: () => setState(() {
                            _selected = s.color;
                            _selectedName = s.name;
                          }),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 180),
                            width: 46,
                            height: 46,
                            decoration: BoxDecoration(
                              color: s.color,
                              shape: BoxShape.circle,
                              border: Border.all(color: on ? Colors.white : Colors.white24, width: on ? 3 : 1),
                              boxShadow: on
                                  ? [BoxShadow(color: s.color.withValues(alpha: 0.55), blurRadius: 12, spreadRadius: 1)]
                                  : null,
                            ),
                            child: on ? Icon(Icons.check_rounded, color: s.color.computeLuminance() > 0.55 ? Colors.black87 : Colors.white, size: 18) : null,
                          ),
                        );
                      }).toList(),
                    ),
                    if (_selectedName != null) ...[
                      const SizedBox(height: 10),
                      Text('Selected: $_selectedName — tap a bucket to pour', style: const TextStyle(color: Colors.white60, fontSize: 12)),
                    ],
                    const SizedBox(height: 18),
                    AnimatedBuilder(
                      animation: Listenable.merge([_pulse, _pourAnim]),
                      builder: (context, _) {
                        return Row(
                          children: [
                            Expanded(child: _bucketCard(0)),
                            const SizedBox(width: 10),
                            Expanded(child: _bucketCard(1)),
                          ],
                        );
                      },
                    ),
                    const SizedBox(height: 14),
                    SizedBox(
                      height: 52,
                      child: FilledButton.icon(
                        onPressed: _blendAll,
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFF8B5CF6),
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        ),
                        icon: const Icon(Icons.science_rounded),
                        label: const Text('Pour into Mix Bowl', style: TextStyle(fontWeight: FontWeight.w900)),
                      ),
                    ),
                    const SizedBox(height: 14),
                    AnimatedBuilder(
                      animation: _pulse,
                      builder: (context, _) => _mixBowl(),
                    ),
                    const SizedBox(height: 14),
                    OutlinedButton(
                      onPressed: _resetAll,
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.white70,
                        side: const BorderSide(color: Colors.white24),
                        minimumSize: const Size.fromHeight(46),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: const Text('Clear all buckets', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _bucketCard(int index) {
    final bucket = _buckets[index];
    final pouringHere = _pouring && _targetBucket == index;
    final p = _pulse.value;
    final pourT = Curves.easeInOut.transform(_pourAnim.value);
    return GestureDetector(
      onTap: () => _pourInto(index),
      child: Container(
        height: 190,
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: pouringHere ? Colors.white70 : Colors.white12),
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [const Color(0xFF111827), Color.lerp(const Color(0xFF0B1220), bucket.mixed, 0.35)!],
          ),
        ),
        child: Column(
          children: [
            Row(
              children: [
                Text('Bucket ${bucket.label}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                const Spacer(),
                if (bucket.pours.isNotEmpty)
                  InkWell(
                    onTap: () => _clearBucket(index),
                    child: const Icon(Icons.close_rounded, color: Colors.white38, size: 18),
                  ),
              ],
            ),
            const SizedBox(height: 8),
            Expanded(
              child: Stack(
                alignment: Alignment.bottomCenter,
                children: [
                  CustomPaint(
                    size: const Size(double.infinity, double.infinity),
                    painter: _BucketPainter(fill: bucket.mixed, level: (bucket.pours.length / 8).clamp(0.08, 1.0), shimmer: p),
                  ),
                  if (pouringHere && _selected != null)
                    Positioned(
                      top: 8 + pourT * 70,
                      child: Container(
                        width: 18,
                        height: 28,
                        decoration: BoxDecoration(
                          color: _selected,
                          borderRadius: BorderRadius.circular(99),
                          boxShadow: [BoxShadow(color: _selected!.withValues(alpha: 0.6), blurRadius: 10)],
                        ),
                      ),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 6),
            Text(
              bucket.pours.isEmpty ? 'Empty' : '${bucket.pours.length} pour${bucket.pours.length == 1 ? '' : 's'} · ${bucket.hex}',
              style: const TextStyle(color: Colors.white60, fontSize: 11, fontWeight: FontWeight.w700),
            ),
          ],
        ),
      ),
    );
  }

  Widget _mixBowl() {
    final mix = _buckets[2];
    final p = _pulse.value;
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white12),
        gradient: LinearGradient(
          colors: [
            Color.lerp(const Color(0xFF1F2937), mix.mixed, 0.45 + p * 0.15)!,
            const Color(0xFF0B1220),
          ],
        ),
        boxShadow: [
          if (mix.pours.isNotEmpty) BoxShadow(color: mix.mixed.withValues(alpha: 0.35), blurRadius: 22, spreadRadius: 1),
        ],
      ),
      child: Column(
        children: [
          const Text('Mix Bowl', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
          const SizedBox(height: 12),
          Container(
            width: 120,
            height: 120,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: mix.pours.isEmpty ? const Color(0xFF1F2937) : mix.mixed,
              border: Border.all(color: Colors.white24, width: 3),
              boxShadow: [
                BoxShadow(color: (mix.pours.isEmpty ? Colors.black : mix.mixed).withValues(alpha: 0.45), blurRadius: 18),
              ],
            ),
            alignment: Alignment.center,
            child: mix.pours.isEmpty
                ? const Icon(Icons.water_drop_outlined, color: Colors.white30, size: 36)
                : Text(
                    mix.hex,
                    style: TextStyle(
                      color: mix.mixed.computeLuminance() > 0.55 ? Colors.black87 : Colors.white,
                      fontWeight: FontWeight.w900,
                      fontSize: 13,
                    ),
                  ),
          ),
          const SizedBox(height: 12),
          Text(
            _resultLabel ?? (mix.pours.isEmpty ? 'Blend Bucket A + B to reveal the color' : _describeMix(mix.mixed)),
            textAlign: TextAlign.center,
            style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 13, height: 1.35),
          ),
          if (mix.pours.isNotEmpty) ...[
            const SizedBox(height: 8),
            TextButton(
              onPressed: () => _clearBucket(2),
              child: const Text('Clear mix', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w700)),
            ),
          ],
        ],
      ),
    );
  }
}

class _BucketPainter extends CustomPainter {
  _BucketPainter({required this.fill, required this.level, required this.shimmer});
  final Color fill;
  final double level;
  final double shimmer;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(size.width * 0.18, 8)
      ..lineTo(size.width * 0.82, 8)
      ..lineTo(size.width * 0.72, size.height - 6)
      ..quadraticBezierTo(size.width * 0.5, size.height, size.width * 0.28, size.height - 6)
      ..close();
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.2
        ..color = Colors.white24,
    );
    final fillH = size.height * level;
    canvas.save();
    canvas.clipPath(path);
    final rect = Rect.fromLTWH(0, size.height - fillH, size.width, fillH);
    final paint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          Color.lerp(fill, Colors.white, 0.18 + shimmer * 0.1)!,
          fill,
        ],
      ).createShader(rect);
    canvas.drawRect(rect, paint);
    final wave = Path();
    final y = size.height - fillH;
    wave.moveTo(0, y);
    for (var x = 0.0; x <= size.width; x += 4) {
      wave.lineTo(x, y + math.sin((x / 18) + shimmer * math.pi * 2) * 3);
    }
    wave.lineTo(size.width, size.height);
    wave.lineTo(0, size.height);
    wave.close();
    canvas.drawPath(wave, Paint()..color = fill.withValues(alpha: 0.85));
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _BucketPainter oldDelegate) =>
      oldDelegate.fill != fill || oldDelegate.level != level || oldDelegate.shimmer != shimmer;
}
