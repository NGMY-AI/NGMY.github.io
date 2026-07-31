import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_hub_form_ui.dart';
import 'ngmy_offline_icons.dart';

Future<void> showNgmyColorBucketsDialog(
  BuildContext context, {
  required String userEmail,
}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Paint Mix',
    barrierColor: const Color(0xFF0B0B0B),
    transitionDuration: const Duration(milliseconds: 300),
    pageBuilder: (ctx, a1, a2) => const NgmyColorBucketsScreen(),
    transitionBuilder: (ctx, anim, a2, child) => FadeTransition(
      opacity: anim,
      child: ScaleTransition(
        scale: Tween<double>(
          begin: 0.96,
          end: 1,
        ).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)),
        child: child,
      ),
    ),
  );
}

Future<int> ngmyColorBucketsCount({required String userEmail}) async => 0;

class _Pigment {
  const _Pigment(this.name, this.emoji, this.color);
  final String name;
  final String emoji;
  final Color color;
}

// Bright, punchy, easy-to-recognize colors with playful names — kids should
// be able to pick these by sight without reading an art-supply label.
const _kPigments = <_Pigment>[
  _Pigment('Cherry Red', '🍒', Color(0xFFEF4444)),
  _Pigment('Orange Pop', '🍊', Color(0xFFF97316)),
  _Pigment('Sunny Yellow', '🌞', Color(0xFFFACC15)),
  _Pigment('Lime Green', '🍏', Color(0xFF84CC16)),
  _Pigment('Grass Green', '🌿', Color(0xFF22C55E)),
  _Pigment('Teal Splash', '🌊', Color(0xFF14B8A6)),
  _Pigment('Sky Blue', '🩵', Color(0xFF38BDF8)),
  _Pigment('Ocean Blue', '🐬', Color(0xFF3B82F6)),
  _Pigment('Grape Purple', '🍇', Color(0xFF8B5CF6)),
  _Pigment('Bubblegum Pink', '🍬', Color(0xFFEC4899)),
  _Pigment('Choco Brown', '🍫', Color(0xFF92400E)),
  _Pigment('Snow White', '⛄', Color(0xFFF8FAFC)),
  _Pigment('Jet Black', '🖤', Color(0xFF18181B)),
];

class _Bucket {
  _Bucket(this.label);
  final String label;
  final List<Color> drops = [];
  int get volume => drops.length;

  Color get mixed {
    if (drops.isEmpty) return const Color(0xFFE2E8F0);
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

Color _mixWeighted(_Bucket a, _Bucket b) {
  final all = <Color>[...a.drops, ...b.drops];
  if (all.isEmpty) return const Color(0xFFE2E8F0);
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
  final rr = (c.r * 255)
      .round()
      .clamp(0, 255)
      .toRadixString(16)
      .padLeft(2, '0');
  final gg = (c.g * 255)
      .round()
      .clamp(0, 255)
      .toRadixString(16)
      .padLeft(2, '0');
  final bb = (c.b * 255)
      .round()
      .clamp(0, 255)
      .toRadixString(16)
      .padLeft(2, '0');
  return '#${rr.toUpperCase()}${gg.toUpperCase()}${bb.toUpperCase()}';
}

String _describe(Color c) {
  final hsl = HSLColor.fromColor(c);
  final l = hsl.lightness;
  final s = hsl.saturation;
  final h = hsl.hue;
  if (l > 0.9) return 'Almost White ✨';
  if (l < 0.08) return 'Deep Black 🖤';
  if (s < 0.1) return l > 0.5 ? 'Light Gray' : 'Dark Gray';
  String tone;
  if (h < 18 || h >= 345) {
    tone = 'Red';
  } else if (h < 40) {
    tone = 'Orange';
  } else if (h < 70) {
    tone = 'Yellow';
  } else if (h < 155) {
    tone = 'Green';
  } else if (h < 200) {
    tone = 'Teal';
  } else if (h < 250) {
    tone = 'Blue';
  } else if (h < 295) {
    tone = 'Purple';
  } else {
    tone = 'Pink';
  }
  final depth = l > 0.62 ? 'Pastel' : (l < 0.32 ? 'Deep' : 'Bright');
  return '$depth $tone';
}

class NgmyColorBucketsScreen extends StatefulWidget {
  const NgmyColorBucketsScreen({super.key});

  @override
  State<NgmyColorBucketsScreen> createState() => _NgmyColorBucketsScreenState();
}

class _NgmyColorBucketsScreenState extends State<NgmyColorBucketsScreen> {
  _Pigment? _selected;
  final _a = _Bucket('1');
  final _b = _Bucket('2');
  Color? _result;
  String? _note;
  int _mixVersion = 0;

  void _pourInto(_Bucket bucket) {
    final p = _selected;
    if (p == null) {
      HapticFeedback.lightImpact();
      return;
    }
    setState(() {
      bucket.drops.add(p.color);
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
      _mixVersion++;
      _note =
          '${_describe(mix)} · ${_hexOf(mix)}\n'
          '${_a.volume} drop${_a.volume == 1 ? '' : 's'} in Bucket 1 + ${_b.volume} in Bucket 2';
    });
    HapticFeedback.mediumImpact();
  }

  void _clear(_Bucket bucket) {
    setState(() {
      bucket.drops.clear();
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
    final hub = NgmyHubTheme.of(context);
    final isDark = hub.isDark;
    final ink = hub.title;
    final muted = hub.subtitle;
    final pad = MediaQuery.paddingOf(context);
    return Material(
      child: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: isDark
                ? const [
                    Color(0xFF120B1E),
                    Color(0xFF1B1030),
                    Color(0xFF0B1220),
                  ]
                : const [
                    Color(0xFFFFF7ED),
                    Color(0xFFFDF2FF),
                    Color(0xFFEFF6FF),
                  ],
          ),
        ),
        child: Padding(
          padding: EdgeInsets.fromLTRB(14, pad.top + 6, 14, pad.bottom + 10),
          child: Column(
            children: [
              Row(
                children: [
                  Container(
                    width: 42,
                    height: 42,
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(
                        colors: [Color(0xFFF97316), Color(0xFFEC4899)],
                      ),
                      borderRadius: BorderRadius.circular(14),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(
                            0xFFEC4899,
                          ).withValues(alpha: 0.35),
                          blurRadius: 14,
                          offset: const Offset(0, 5),
                        ),
                      ],
                    ),
                    child: const Center(
                      child: NgmyOfflineEmoji('🎨', fontSize: 22),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Paint Mix',
                          style: TextStyle(
                            color: ink,
                            fontWeight: FontWeight.w900,
                            fontSize: 22,
                          ),
                        ),
                        Text(
                          'Pick a color, pour it in a bucket, then mix!',
                          style: TextStyle(
                            color: muted,
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ],
                    ),
                  ),
                  _roundIconButton(
                    hub: hub,
                    icon: Icons.refresh_rounded,
                    onTap: _reset,
                  ),
                  const SizedBox(width: 8),
                  _roundIconButton(
                    hub: hub,
                    icon: Icons.close_rounded,
                    onTap: () => Navigator.pop(context),
                  ),
                ],
              ),
              const SizedBox(height: 14),
              SizedBox(
                height: 92,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  itemCount: _kPigments.length,
                  separatorBuilder: (_, __) => const SizedBox(width: 10),
                  itemBuilder: (context, i) {
                    final p = _kPigments[i];
                    final on = _selected?.name == p.name;
                    return GestureDetector(
                      onTap: () => setState(() => _selected = p),
                      child: AnimatedScale(
                        scale: on ? 1.1 : 1.0,
                        duration: const Duration(milliseconds: 200),
                        curve: Curves.easeOutBack,
                        child: SizedBox(
                          width: 64,
                          child: Column(
                            children: [
                              Container(
                                width: 56,
                                height: 56,
                                alignment: Alignment.center,
                                decoration: BoxDecoration(
                                  color: p.color,
                                  shape: BoxShape.circle,
                                  border: Border.all(
                                    color: on
                                        ? Colors.white
                                        : Colors.white.withValues(alpha: 0.7),
                                    width: on ? 3.4 : 2,
                                  ),
                                  boxShadow: [
                                    BoxShadow(
                                      color: p.color.withValues(
                                        alpha: on ? 0.55 : 0.3,
                                      ),
                                      blurRadius: on ? 16 : 8,
                                      offset: const Offset(0, 4),
                                    ),
                                  ],
                                ),
                                child: NgmyOfflineEmoji(p.emoji, fontSize: 20),
                              ),
                              const SizedBox(height: 5),
                              Text(
                                p.name,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: on ? ink : muted,
                                  fontSize: 10,
                                  fontWeight: on
                                      ? FontWeight.w800
                                      : FontWeight.w600,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(height: 12),
              Expanded(
                child: Row(
                  children: [
                    Expanded(child: _bucketCard(_a, hub)),
                    const SizedBox(width: 10),
                    Expanded(child: _bucketCard(_b, hub)),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              SizedBox(
                height: 52,
                width: double.infinity,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    gradient: (_a.volume == 0 && _b.volume == 0)
                        ? LinearGradient(colors: [hub.chipOffBg, hub.chipOffBg])
                        : const LinearGradient(
                            colors: [
                              Color(0xFFF97316),
                              Color(0xFFEC4899),
                              Color(0xFF8B5CF6),
                            ],
                          ),
                    borderRadius: BorderRadius.circular(16),
                    boxShadow: (_a.volume == 0 && _b.volume == 0)
                        ? null
                        : [
                            BoxShadow(
                              color: const Color(
                                0xFFEC4899,
                              ).withValues(alpha: 0.4),
                              blurRadius: 16,
                              offset: const Offset(0, 6),
                            ),
                          ],
                  ),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      borderRadius: BorderRadius.circular(16),
                      onTap: (_a.volume == 0 && _b.volume == 0) ? null : _mix,
                      child: Center(
                        child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            'Mix it up! ',
                            style: TextStyle(
                              color: (_a.volume == 0 && _b.volume == 0)
                                  ? muted
                                  : Colors.white,
                              fontWeight: FontWeight.w900,
                              fontSize: 16,
                            ),
                          ),
                          NgmyOfflineEmoji(
                            '🎉',
                            fontSize: 16,
                            color: (_a.volume == 0 && _b.volume == 0) ? muted : Colors.white,
                          ),
                        ],
                      ),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              _resultBar(hub),
            ],
          ),
        ),
      ),
    );
  }

  Widget _roundIconButton({
    required NgmyHubTheme hub,
    required IconData icon,
    required VoidCallback onTap,
  }) {
    return Material(
      color: hub.isDark ? hub.surfaceElevated : Colors.white,
      shape: const CircleBorder(),
      elevation: 2,
      shadowColor: Colors.black.withValues(alpha: 0.15),
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.all(9),
          child: Icon(icon, color: hub.title, size: 18),
        ),
      ),
    );
  }

  Widget _bucketCard(_Bucket bucket, NgmyHubTheme hub) {
    final fill = bucket.volume == 0
        ? 0.0
        : (0.18 + (bucket.volume / 10).clamp(0.0, 0.68));
    final labelBg = hub.isDark
        ? const Color(0xFF8B5CF6).withValues(alpha: 0.22)
        : const Color(0xFFF3E8FF);
    final labelInk = hub.isDark
        ? const Color(0xFFC4B5FD)
        : const Color(0xFF7C3AED);
    final clearBg = hub.isDark
        ? const Color(0xFFEF4444).withValues(alpha: 0.2)
        : const Color(0xFFFEE2E2);
    return Container(
      decoration: BoxDecoration(
        color: hub.surface,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: hub.border, width: 1.4),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: hub.isDark ? 0.2 : 0.05),
            blurRadius: 14,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        borderRadius: BorderRadius.circular(20),
        child: InkWell(
          onTap: () => _pourInto(bucket),
          borderRadius: BorderRadius.circular(20),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 12, 12, 10),
            child: Column(
              children: [
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 9,
                        vertical: 4,
                      ),
                      decoration: BoxDecoration(
                        color: labelBg,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const NgmyOfflineEmoji('🪣', fontSize: 12),
                          Text(
                            ' Bucket ${bucket.label}',
                            style: TextStyle(
                              color: labelInk,
                              fontWeight: FontWeight.w800,
                              fontSize: 12,
                            ),
                          ),
                        ],
                      ),
                    ),
                    const Spacer(),
                    if (bucket.volume > 0)
                      GestureDetector(
                        onTap: () => _clear(bucket),
                        child: Container(
                          padding: const EdgeInsets.all(4),
                          decoration: BoxDecoration(
                            color: clearBg,
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: const Icon(
                            Icons.close_rounded,
                            size: 14,
                            color: Color(0xFFEF4444),
                          ),
                        ),
                      ),
                  ],
                ),
                const SizedBox(height: 8),
                Expanded(
                  child: CustomPaint(
                    painter: _BucketPainter(
                      color: bucket.mixed,
                      fill: fill,
                      empty: bucket.volume == 0,
                      isDark: hub.isDark,
                    ),
                    child: const SizedBox.expand(),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  bucket.volume == 0
                      ? 'Tap to pour a color!'
                      : '${bucket.volume} drop${bucket.volume == 1 ? '' : 's'} · ${_hexOf(bucket.mixed)}',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: hub.subtitle,
                    fontSize: 11,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _resultBar(NgmyHubTheme hub) {
    final has = _result != null;
    return Container(
      height: 104,
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: hub.surface,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: hub.border, width: 1.4),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: hub.isDark ? 0.2 : 0.05),
            blurRadius: 14,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Row(
        children: [
          SizedBox(
            width: 76,
            height: 76,
            child: Stack(
              alignment: Alignment.center,
              clipBehavior: Clip.none,
              children: [
                if (has)
                  _SparkleBurst(key: ValueKey(_mixVersion), color: _result!),
                Container(
                  width: 72,
                  height: 72,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: has ? _result : hub.surfaceElevated,
                    border: Border.all(
                      color: hub.isDark ? hub.border : Colors.white,
                      width: 3,
                    ),
                    boxShadow: has
                        ? [
                            BoxShadow(
                              color: _result!.withValues(alpha: 0.5),
                              blurRadius: 18,
                              offset: const Offset(0, 6),
                            ),
                          ]
                        : null,
                    gradient: has
                        ? RadialGradient(
                            center: const Alignment(-0.3, -0.35),
                            colors: [
                              Color.lerp(_result!, Colors.white, 0.25)!,
                              _result!,
                              Color.lerp(_result!, Colors.black, 0.12)!,
                            ],
                          )
                        : null,
                  ),
                  child: !has
                      ? const Center(
                          child: NgmyOfflineEmoji('🖌️', fontSize: 26),
                        )
                      : null,
                ),
              ],
            ),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: has
                ? Text(
                    _note ?? _hexOf(_result!),
                    style: TextStyle(
                      color: hub.title,
                      fontSize: 12.5,
                      height: 1.4,
                      fontWeight: FontWeight.w700,
                    ),
                  )
                : Row(
                    children: [
                      Expanded(
                        child: Text(
                          'Pour some colors in, then hit Mix it up! ',
                          style: TextStyle(
                            color: hub.subtitle,
                            fontSize: 12.5,
                            height: 1.4,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ),
                      const NgmyOfflineEmoji('✨', fontSize: 14),
                    ],
                  ),
          ),
        ],
      ),
    );
  }
}

/// A one-shot burst of little sparkle dots around the result blob — plays
/// once whenever [key] changes (i.e. every time a new mix is made).
class _SparkleBurst extends StatefulWidget {
  const _SparkleBurst({required super.key, required this.color});
  final Color color;

  @override
  State<_SparkleBurst> createState() => _SparkleBurstState();
}

class _SparkleBurstState extends State<_SparkleBurst>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c;

  @override
  void initState() {
    super.initState();
    _c = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 700),
    )..forward();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _c,
      builder: (context, _) => CustomPaint(
        size: const Size(96, 96),
        painter: _SparklePainter(progress: _c.value, color: widget.color),
      ),
    );
  }
}

class _SparklePainter extends CustomPainter {
  _SparklePainter({required this.progress, required this.color});
  final double progress;
  final Color color;
  static const _dots = 10;

  @override
  void paint(Canvas canvas, Size size) {
    if (progress <= 0.001) return;
    final center = Offset(size.width / 2, size.height / 2);
    final ease = Curves.easeOutCubic.transform(progress);
    final fade = 1.0 - Curves.easeIn.transform(progress);
    for (var i = 0; i < _dots; i++) {
      final angle = (i / _dots) * math.pi * 2;
      final dist = 18 + ease * 26;
      final p = center + Offset(math.cos(angle), math.sin(angle)) * dist;
      final radius = 3.2 * (1 - ease * 0.5);
      final dotColor = i.isEven ? color : Colors.white;
      canvas.drawCircle(
        p,
        radius,
        Paint()..color = dotColor.withValues(alpha: fade.clamp(0.0, 1.0)),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _SparklePainter old) =>
      old.progress != progress || old.color != color;
}

class _BucketPainter extends CustomPainter {
  _BucketPainter({
    required this.color,
    required this.fill,
    required this.empty,
    required this.isDark,
  });
  final Color color;
  final double fill;
  final bool empty;
  final bool isDark;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final handleColor = isDark
        ? const Color(0xFF5B5470)
        : const Color(0xFFB6BECC);
    final bucketMaterial = isDark
        ? const [Color(0xFF2A2438), Color(0xFF1B1626)]
        : const [Color(0xFFFAFBFF), Color(0xFFE7EBF3)];
    final outlineColor = isDark
        ? const Color(0xFF453F5C)
        : const Color(0xFFCBD5E1);
    // A friendly, slightly-tapered paint bucket with a swing handle — reads
    // as "paint" at a glance instead of a somber ceramic mixing bowl.
    final bucket = Path()
      ..moveTo(w * 0.16, h * 0.30)
      ..lineTo(w * 0.84, h * 0.30)
      ..lineTo(w * 0.74, h * 0.92)
      ..quadraticBezierTo(w * 0.5, h * 1.0, w * 0.26, h * 0.92)
      ..close();

    final handle = Path()
      ..moveTo(w * 0.26, h * 0.30)
      ..quadraticBezierTo(w * 0.5, -h * 0.14, w * 0.74, h * 0.30);
    canvas.drawPath(
      handle,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3.2
        ..strokeCap = StrokeCap.round
        ..color = handleColor,
    );

    canvas.drawPath(
      bucket,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: bucketMaterial,
        ).createShader(Offset.zero & size),
    );

    canvas.save();
    canvas.clipPath(bucket);
    if (!empty) {
      final top = h * (1 - fill.clamp(0.16, 0.82));
      final rect = Rect.fromLTRB(0, top, w, h);
      canvas.drawRect(
        rect,
        Paint()
          ..shader = LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color.lerp(color, Colors.white, 0.22)!,
              color,
              Color.lerp(color, Colors.black, 0.12)!,
            ],
          ).createShader(rect),
      );
      canvas.drawOval(
        Rect.fromCenter(
          center: Offset(w * 0.5, top + 3),
          width: w * 0.56,
          height: 9,
        ),
        Paint()..color = Colors.white.withValues(alpha: 0.4),
      );
    }
    canvas.restore();

    canvas.drawPath(
      bucket,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = outlineColor,
    );
    canvas.drawLine(
      Offset(w * 0.16, h * 0.30),
      Offset(w * 0.84, h * 0.30),
      Paint()
        ..strokeWidth = 3
        ..color = handleColor
        ..strokeCap = StrokeCap.round,
    );
  }

  @override
  bool shouldRepaint(covariant _BucketPainter old) =>
      old.color != color ||
      old.fill != fill ||
      old.empty != empty ||
      old.isDark != isDark;
}
