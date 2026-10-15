import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:image_picker/image_picker.dart';

/// Ending celebrations: a big, luxurious animated scene that plays after the last slide.
/// Ten styles; each says NGMY by default, and the words and the logo can be changed.

class NgmyFinaleStyle {
  const NgmyFinaleStyle(this.id, this.name, this.subtitle, this.bg, this.title);
  final String id;
  final String name;

  /// The line under the title until the user changes it.
  final String subtitle;
  final List<Color> bg;

  /// Colours of the shimmering title.
  final List<Color> title;
}

const _gold = [Color(0xFFB8860B), Color(0xFFFDE68A), Color(0xFFFFFBEB), Color(0xFFF5C451), Color(0xFF8A6417)];
const _silver = [Color(0xFF94A3B8), Color(0xFFF8FAFC), Color(0xFFFFFFFF), Color(0xFFE2E8F0), Color(0xFF64748B)];
const _rose = [Color(0xFFB76E79), Color(0xFFFBCFE8), Color(0xFFFFF1F2), Color(0xFFF9A8D4), Color(0xFF9D4E5C)];

const kNgmyFinales = <NgmyFinaleStyle>[
  NgmyFinaleStyle('fireworks', 'Royal Fireworks', 'Thank you for celebrating with us', [Color(0xFF0B1230), Color(0xFF020617)], _gold),
  NgmyFinaleStyle('confetti', 'Golden Confetti', 'Together we rise', [Color(0xFF4A0D1E), Color(0xFF12030A)], _gold),
  NgmyFinaleStyle('crown', 'Crown of Glory', 'Built for our community', [Color(0xFF2E1065), Color(0xFF0A0118)], _gold),
  NgmyFinaleStyle('aurora', 'Aurora Gala', 'A brighter future, together', [Color(0xFF031B2E), Color(0xFF01060F)], _silver),
  NgmyFinaleStyle('champagne', 'Champagne Toast', 'Cheers to every member', [Color(0xFF2A1A05), Color(0xFF070401)], _gold),
  NgmyFinaleStyle('diamonds', 'Diamond Rain', 'Every member is a jewel', [Color(0xFF0F172A), Color(0xFF020617)], _silver),
  NgmyFinaleStyle('starburst', 'Golden Starburst', 'Thank you!', [Color(0xFF5B2A06), Color(0xFF1A0B02)], _gold),
  NgmyFinaleStyle('balloons', 'Luxury Balloons', 'Let\'s celebrate', [Color(0xFF312E81), Color(0xFF581C87)], _rose),
  NgmyFinaleStyle('galaxy', 'Galaxy Spiral', 'The sky is not the limit', [Color(0xFF05010F), Color(0xFF000000)], _silver),
  NgmyFinaleStyle('redcarpet', 'Red Carpet', 'Tonight we shine', [Color(0xFF450A0A), Color(0xFF0C0101)], _gold),
];

NgmyFinaleStyle? ngmyFinaleStyle(String? id) {
  for (final s in kNgmyFinales) {
    if (s.id == id) return s;
  }
  return null;
}

/// What the user picked: the style, the words and an optional logo (data URI).
class NgmyFinaleChoice {
  const NgmyFinaleChoice({required this.style, this.title = 'NGMY', this.subtitle = '', this.logo = ''});
  final String style;
  final String title;
  final String subtitle;
  final String logo;

  bool get none => style.isEmpty;
  String get subtitleOrDefault => subtitle.trim().isNotEmpty ? subtitle : (ngmyFinaleStyle(style)?.subtitle ?? '');

  NgmyFinaleChoice copyWith({String? style, String? title, String? subtitle, String? logo}) => NgmyFinaleChoice(
        style: style ?? this.style,
        title: title ?? this.title,
        subtitle: subtitle ?? this.subtitle,
        logo: logo ?? this.logo,
      );
}

// ─── The animated scene ───────────────────────────────────────────────────

/// One celebration, filling its box. [preview] draws fewer particles (for small cards).
class NgmyFinaleView extends StatefulWidget {
  const NgmyFinaleView({super.key, required this.choice, this.preview = false});
  final NgmyFinaleChoice choice;
  final bool preview;

  @override
  State<NgmyFinaleView> createState() => _NgmyFinaleViewState();
}

class _NgmyFinaleViewState extends State<NgmyFinaleView> with SingleTickerProviderStateMixin {
  final _time = ValueNotifier<double>(0);
  late final Ticker _ticker;

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((d) => _time.value = d.inMicroseconds / 1e6)..start();
  }

  @override
  void dispose() {
    _ticker.dispose();
    _time.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final style = ngmyFinaleStyle(widget.choice.style) ?? kNgmyFinales.first;
    final logo = _bytes(widget.choice.logo);
    return LayoutBuilder(builder: (context, c) {
      final s = math.min(c.maxWidth, c.maxHeight);
      return ClipRect(
        child: Stack(fit: StackFit.expand, children: [
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: RadialGradient(center: const Alignment(0, -0.2), radius: 1.2, colors: style.bg),
            ),
          ),
          RepaintBoundary(
            child: CustomPaint(painter: _FinalePainter(style.id, _time, widget.preview ? 0.45 : 1)),
          ),
          Center(
            child: ValueListenableBuilder<double>(
              valueListenable: _time,
              builder: (context, t, _) {
                final intro = Curves.easeOutBack.transform((t / 1.4).clamp(0.0, 1.0));
                final fade = (t / 0.9).clamp(0.0, 1.0);
                final sub = ((t - 0.8) / 0.9).clamp(0.0, 1.0);
                final breathe = 1 + math.sin(t * 1.6) * 0.012;
                return Opacity(
                  opacity: fade,
                  child: Transform.scale(
                    scale: (0.6 + 0.4 * intro) * breathe,
                    child: Padding(
                      padding: EdgeInsets.symmetric(horizontal: s * 0.08),
                      child: Column(mainAxisSize: MainAxisSize.min, children: [
                        if (logo != null) ...[
                          Container(
                            width: s * 0.22,
                            height: s * 0.22,
                            padding: EdgeInsets.all(s * 0.008),
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: SweepGradient(colors: [...style.title, style.title.first], transform: GradientRotation(t * 0.8)),
                              boxShadow: [BoxShadow(color: style.title[1].withValues(alpha: 0.55), blurRadius: s * 0.08)],
                            ),
                            child: ClipOval(child: Image.memory(logo, fit: BoxFit.cover, gaplessPlayback: true)),
                          ),
                          SizedBox(height: s * 0.04),
                        ],
                        _Shimmer(
                          colors: style.title,
                          t: t,
                          child: Text(
                            widget.choice.title.trim().isEmpty ? 'NGMY' : widget.choice.title.trim(),
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: s * (widget.choice.title.trim().length > 12 ? 0.1 : 0.17),
                              fontWeight: FontWeight.w900,
                              letterSpacing: s * 0.012,
                              height: 1.05,
                              shadows: [Shadow(color: style.title[1].withValues(alpha: 0.6), blurRadius: s * 0.05)],
                            ),
                          ),
                        ),
                        SizedBox(height: s * 0.025),
                        Opacity(
                          opacity: sub,
                          child: Transform.translate(
                            offset: Offset(0, (1 - sub) * s * 0.03),
                            child: Column(mainAxisSize: MainAxisSize.min, children: [
                              Container(
                                width: s * 0.22,
                                height: math.max(1.5, s * 0.004),
                                decoration: BoxDecoration(gradient: LinearGradient(colors: [Colors.transparent, style.title[1], Colors.transparent])),
                              ),
                              SizedBox(height: s * 0.022),
                              Text(
                                widget.choice.subtitleOrDefault,
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Colors.white.withValues(alpha: 0.92),
                                  fontSize: s * 0.05,
                                  fontWeight: FontWeight.w600,
                                  letterSpacing: s * 0.003,
                                ),
                              ),
                            ]),
                          ),
                        ),
                      ]),
                    ),
                  ),
                );
              },
            ),
          ),
        ]),
      );
    });
  }
}

Uint8List? _bytes(String uri) {
  final i = uri.indexOf(',');
  if (!uri.startsWith('data:') || i < 0) return null;
  try {
    return base64Decode(uri.substring(i + 1));
  } catch (_) {
    return null;
  }
}

/// A light sweeping across the title.
class _Shimmer extends StatelessWidget {
  const _Shimmer({required this.colors, required this.t, required this.child});
  final List<Color> colors;
  final double t;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    final p = (t * 0.35) % 1.6 - 0.3;
    return ShaderMask(
      blendMode: BlendMode.srcIn,
      shaderCallback: (r) => LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: colors,
        stops: [0, (p - 0.1).clamp(0.0, 1.0), p.clamp(0.0, 1.0), (p + 0.1).clamp(0.0, 1.0), 1],
      ).createShader(r),
      child: child,
    );
  }
}

/// Repeatable pseudo-random number 0..1 for particle [i], property [k].
double _r(int i, int k) {
  var x = (i * 374761393 + k * 668265263 + 1013904223) & 0x7fffffff;
  x = ((x ^ (x >> 13)) * 1274126177) & 0x7fffffff;
  x = x ^ (x >> 16);
  return (x & 0xffff) / 65535.0;
}

class _FinalePainter extends CustomPainter {
  _FinalePainter(this.id, this.time, this.density) : super(repaint: time);
  final String id;
  final ValueNotifier<double> time;
  final double density;

  int n(int full) => math.max(4, (full * density).round());

  @override
  void paint(Canvas canvas, Size size) {
    final t = time.value;
    switch (id) {
      case 'fireworks':
        _fireworks(canvas, size, t);
      case 'confetti':
        _confetti(canvas, size, t);
      case 'crown':
        _crown(canvas, size, t);
      case 'aurora':
        _aurora(canvas, size, t);
      case 'champagne':
        _champagne(canvas, size, t);
      case 'diamonds':
        _diamonds(canvas, size, t);
      case 'starburst':
        _starburst(canvas, size, t);
      case 'balloons':
        _balloons(canvas, size, t);
      case 'galaxy':
        _galaxy(canvas, size, t);
      case 'redcarpet':
        _redCarpet(canvas, size, t);
    }
  }

  // Shared pieces ------------------------------------------------------------

  void _sparkle(Canvas c, Offset p, double r, Color color, double alpha) {
    if (alpha <= 0.01) return;
    final paint = Paint()
      ..color = color.withValues(alpha: alpha.clamp(0, 1))
      ..blendMode = BlendMode.plus;
    final path = Path()
      ..moveTo(p.dx, p.dy - r)
      ..quadraticBezierTo(p.dx, p.dy, p.dx + r, p.dy)
      ..quadraticBezierTo(p.dx, p.dy, p.dx, p.dy + r)
      ..quadraticBezierTo(p.dx, p.dy, p.dx - r, p.dy)
      ..quadraticBezierTo(p.dx, p.dy, p.dx, p.dy - r)
      ..close();
    c.drawPath(path, paint);
    c.drawCircle(p, r * 0.18, paint);
  }

  void _twinkles(Canvas c, Size s, double t, int count, Color color, {int seed = 0}) {
    final m = math.min(s.width, s.height);
    for (var i = 0; i < n(count); i++) {
      final a = (math.sin(t * (1.2 + _r(i, seed + 3) * 2.5) + _r(i, seed + 4) * 6.28) + 1) / 2;
      _sparkle(c, Offset(_r(i, seed + 1) * s.width, _r(i, seed + 2) * s.height), m * (0.006 + 0.014 * _r(i, seed + 5)) * (0.5 + a), color, a * a);
    }
  }

  Color _pick(List<Color> colors, int i, int k) => colors[(_r(i, k) * colors.length).floor().clamp(0, colors.length - 1)];

  static const _goldBits = [Color(0xFFFDE68A), Color(0xFFF5C451), Color(0xFFFFFBEB), Color(0xFFD4AF37), Color(0xFFF9A8D4)];

  // 1. Royal Fireworks ------------------------------------------------------

  void _fireworks(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    _twinkles(c, s, t, 40, const Color(0xFFFFFFFF), seed: 10);
    const shells = 7;
    const period = 2.8;
    final palettes = [
      [const Color(0xFFFDE68A), const Color(0xFFF59E0B)],
      [const Color(0xFFFBCFE8), const Color(0xFFEC4899)],
      [const Color(0xFFE0F2FE), const Color(0xFF38BDF8)],
      [const Color(0xFFFFFFFF), const Color(0xFFD4AF37)],
    ];
    for (var i = 0; i < shells; i++) {
      final phase = t + i * period / shells;
      final cycle = (phase / period).floor();
      final u = (phase % period) / period;
      final seed = i * 97 + cycle * 13;
      final x0 = s.width * (0.15 + 0.7 * _r(seed, 1));
      final bx = x0 + s.width * (_r(seed, 2) - 0.5) * 0.15;
      final by = s.height * (0.12 + 0.35 * _r(seed, 3));
      final pal = palettes[(seed % palettes.length).abs()];
      if (u < 0.22) {
        final v = Curves.easeOutCubic.transform(u / 0.22);
        final p = Offset.lerp(Offset(x0, s.height), Offset(bx, by), v)!;
        final trail = Paint()
          ..shader = LinearGradient(colors: [pal[0].withValues(alpha: 0), pal[0]]).createShader(Rect.fromPoints(Offset(x0, s.height), p))
          ..strokeWidth = m * 0.006
          ..strokeCap = StrokeCap.round;
        c.drawLine(Offset.lerp(Offset(x0, s.height), p, 0.75)!, p, trail);
        c.drawCircle(p, m * 0.008, Paint()..color = Colors.white);
      } else {
        final v = (u - 0.22) / 0.78;
        final e = Curves.easeOutCubic.transform(v);
        final fade = (1 - v) * (1 - v);
        final count = n(46);
        final radius = m * (0.16 + 0.1 * _r(seed, 4));
        // Bright flash at the start of the burst.
        if (v < 0.15) {
          c.drawCircle(Offset(bx, by), m * 0.08 * (1 - v / 0.15),
              Paint()..color = pal[0].withValues(alpha: 0.5 * (1 - v / 0.15))..maskFilter = MaskFilter.blur(BlurStyle.normal, m * 0.04));
        }
        for (var k = 0; k < count; k++) {
          final a = k / count * math.pi * 2 + _r(seed, k + 10) * 0.2;
          final rr = radius * e * (0.75 + 0.25 * _r(seed, k + 60));
          final drop = v * v * m * 0.12;
          final p = Offset(bx + math.cos(a) * rr, by + math.sin(a) * rr + drop);
          final tail = Offset(bx + math.cos(a) * rr * 0.82, by + math.sin(a) * rr * 0.82 + drop * 0.8);
          final col = k.isEven ? pal[0] : pal[1];
          c.drawLine(tail, p, Paint()
            ..color = col.withValues(alpha: fade * 0.8)
            ..strokeWidth = m * 0.005
            ..strokeCap = StrokeCap.round
            ..blendMode = BlendMode.plus);
          if (v > 0.45 && _r(seed, k + 120) > 0.5) {
            _sparkle(c, p, m * 0.012, Colors.white, fade * (0.5 + 0.5 * math.sin(t * 30 + k)));
          }
        }
      }
    }
  }

  // 2. Golden Confetti ------------------------------------------------------

  void _confetti(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    // Soft light sweeping diagonally.
    final sweep = (t * 0.25) % 1.6 - 0.3;
    c.drawRect(
      Offset.zero & s,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: const [Color(0x00FFFFFF), Color(0x22FDE68A), Color(0x00FFFFFF)],
          stops: [(sweep - 0.15).clamp(0.0, 1.0), sweep.clamp(0.0, 1.0), (sweep + 0.15).clamp(0.0, 1.0)],
        ).createShader(Offset.zero & s),
    );
    final count = n(150);
    for (var i = 0; i < count; i++) {
      final speed = m * (0.08 + 0.12 * _r(i, 1));
      final h = s.height + m * 0.1;
      final y = (t * speed + _r(i, 2) * h) % h - m * 0.05;
      final x = _r(i, 3) * s.width + math.sin(t * (0.8 + _r(i, 4)) + i) * m * 0.04;
      final w = m * (0.012 + 0.012 * _r(i, 5));
      final flip = math.cos(t * (2 + 3 * _r(i, 6)) + i);
      final col = _pick(_goldBits, i, 7);
      c.save();
      c.translate(x, y);
      c.rotate(t * (0.6 + _r(i, 8) * 2) + i);
      final paint = Paint()..color = Color.lerp(col, Colors.white, (flip.abs() * 0.4))!.withValues(alpha: 0.95);
      if (i % 5 == 0) {
        // Curly ribbon.
        final path = Path()..moveTo(-w * 2, 0);
        for (var k = 1; k <= 8; k++) {
          path.lineTo(-w * 2 + k * w * 0.5, math.sin(k * 1.2 + t * 4) * w * 0.5);
        }
        c.drawPath(path, Paint()
          ..color = paint.color
          ..style = PaintingStyle.stroke
          ..strokeWidth = w * 0.35);
      } else {
        c.drawRect(Rect.fromCenter(center: Offset.zero, width: w, height: w * 1.8 * flip.abs().clamp(0.15, 1.0)), paint);
      }
      c.restore();
    }
    _twinkles(c, s, t, 25, const Color(0xFFFDE68A), seed: 30);
  }

  // 3. Crown of Glory -------------------------------------------------------

  void _crown(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    final center = Offset(s.width / 2, s.height * 0.5);
    // Slowly turning rays of light.
    final rays = 16;
    for (var i = 0; i < rays; i++) {
      final a = i / rays * math.pi * 2 + t * 0.12;
      final path = Path()
        ..moveTo(center.dx, center.dy)
        ..lineTo(center.dx + math.cos(a - 0.07) * m * 1.2, center.dy + math.sin(a - 0.07) * m * 1.2)
        ..lineTo(center.dx + math.cos(a + 0.07) * m * 1.2, center.dy + math.sin(a + 0.07) * m * 1.2)
        ..close();
      c.drawPath(
        path,
        Paint()
          ..shader = RadialGradient(colors: [const Color(0xFFFDE68A).withValues(alpha: 0.22), const Color(0x00FDE68A)])
              .createShader(Rect.fromCircle(center: center, radius: m * 1.2)),
      );
    }
    // The crown above the title, drawn in gold.
    final cw = m * 0.28, ch = m * 0.16;
    // Just above the title.
    final top = Offset(s.width / 2 - cw / 2, s.height * 0.5 - m * 0.15 - ch);
    final crown = Path()
      ..moveTo(top.dx, top.dy + ch)
      ..lineTo(top.dx, top.dy + ch * 0.3)
      ..lineTo(top.dx + cw * 0.22, top.dy + ch * 0.6)
      ..lineTo(top.dx + cw * 0.5, top.dy)
      ..lineTo(top.dx + cw * 0.78, top.dy + ch * 0.6)
      ..lineTo(top.dx + cw, top.dy + ch * 0.3)
      ..lineTo(top.dx + cw, top.dy + ch)
      ..close();
    final draw = (t / 1.8).clamp(0.0, 1.0);
    final bounds = Rect.fromLTWH(top.dx, top.dy, cw, ch);
    if (draw >= 1) {
      c.drawPath(crown, Paint()
        ..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: const [Color(0xFFFFF7D6), Color(0xFFF5C451), Color(0xFFB8860B)])
            .createShader(bounds));
      // Jewels.
      for (final (dx, col) in [(0.5, const Color(0xFFE11D48)), (0.22, const Color(0xFF2563EB)), (0.78, const Color(0xFF10B981))]) {
        c.drawCircle(Offset(top.dx + cw * dx, top.dy + ch * 0.78), m * 0.016, Paint()..color = col);
        c.drawCircle(Offset(top.dx + cw * dx - m * 0.005, top.dy + ch * 0.78 - m * 0.005), m * 0.005, Paint()..color = Colors.white70);
      }
      for (final dx in [0.0, 0.5, 1.0]) {
        c.drawCircle(Offset(top.dx + cw * dx, top.dy + (dx == 0.5 ? 0 : ch * 0.3)), m * 0.014, Paint()..color = const Color(0xFFFFFBEB));
      }
    }
    for (final metric in crown.computeMetrics()) {
      c.drawPath(
        metric.extractPath(0, metric.length * draw),
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = m * 0.008
          ..strokeJoin = StrokeJoin.round
          ..color = const Color(0xFFFDE68A),
      );
    }
    if (draw >= 1) {
      final glint = (t * 0.5) % 1;
      _sparkle(c, Offset(top.dx + cw * glint, top.dy + ch * 0.5), m * 0.04, Colors.white, math.sin(glint * math.pi));
    }
    _twinkles(c, s, t, 45, const Color(0xFFFDE68A), seed: 40);
  }

  // 4. Aurora Gala ----------------------------------------------------------

  void _aurora(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    _twinkles(c, s, t, 60, Colors.white, seed: 50);
    final bands = [
      (const Color(0xFF34D399), 0.28, 0.9, 0.0),
      (const Color(0xFF22D3EE), 0.36, 1.2, 1.3),
      (const Color(0xFFA78BFA), 0.22, 0.7, 2.6),
      (const Color(0xFFF472B6), 0.42, 1.0, 4.1),
    ];
    for (final (col, base, speed, ph) in bands) {
      final path = Path();
      for (var x = 0.0; x <= s.width + 10; x += s.width / 40) {
        final y = s.height * base +
            math.sin(x / s.width * 4 + t * speed + ph) * m * 0.07 +
            math.sin(x / s.width * 9 - t * speed * 1.4 + ph) * m * 0.025;
        x == 0 ? path.moveTo(x, y) : path.lineTo(x, y);
      }
      c.drawPath(path, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = m * 0.14
        ..color = col.withValues(alpha: 0.28)
        ..blendMode = BlendMode.plus
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, m * 0.06));
      c.drawPath(path, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = m * 0.01
        ..color = col.withValues(alpha: 0.55)
        ..blendMode = BlendMode.plus
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, m * 0.01));
    }
    // Rising lights.
    for (var i = 0; i < n(40); i++) {
      final h = s.height + 20;
      final y = s.height - ((t * m * (0.05 + 0.06 * _r(i, 1)) + _r(i, 2) * h) % h);
      final x = _r(i, 3) * s.width + math.sin(t + i) * m * 0.02;
      c.drawCircle(Offset(x, y), m * (0.003 + 0.004 * _r(i, 4)), Paint()
        ..color = const Color(0xFFCCFBF1).withValues(alpha: 0.4 + 0.5 * _r(i, 5))
        ..blendMode = BlendMode.plus);
    }
  }

  // 5. Champagne Toast ------------------------------------------------------

  void _champagne(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    final glow = 0.25 + 0.1 * math.sin(t * 1.5);
    c.drawCircle(Offset(s.width / 2, s.height * 0.5), m * 0.55, Paint()
      ..shader = RadialGradient(colors: [const Color(0xFFF5C451).withValues(alpha: glow), const Color(0x00F5C451)])
          .createShader(Rect.fromCircle(center: Offset(s.width / 2, s.height * 0.5), radius: m * 0.55)));
    // Golden streamers from the corners.
    for (var i = 0; i < 6; i++) {
      final fromLeft = i.isEven;
      final path = Path()..moveTo(fromLeft ? 0 : s.width, s.height * (0.05 + i * 0.07));
      for (var k = 1; k <= 20; k++) {
        final x = fromLeft ? k / 20 * s.width * 0.45 : s.width - k / 20 * s.width * 0.45;
        final y = s.height * (0.05 + i * 0.07) + k * m * 0.012 + math.sin(k * 0.8 + t * 3 + i) * m * 0.02;
        path.lineTo(x, y);
      }
      c.drawPath(path, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = m * 0.008
        ..color = _goldBits[i % 4].withValues(alpha: 0.7));
    }
    // Bubbles rising, popping into sparkles at the top.
    for (var i = 0; i < n(110); i++) {
      final speed = m * (0.07 + 0.12 * _r(i, 1));
      final h = s.height * 1.1;
      final travel = (t * speed + _r(i, 2) * h) % h;
      final y = s.height - travel;
      final x = s.width * (0.1 + 0.8 * _r(i, 3)) + math.sin(t * 2 + i) * m * 0.015;
      final r = m * (0.004 + 0.012 * _r(i, 4));
      if (y < s.height * 0.08) {
        _sparkle(c, Offset(x, y), r * 2.4, const Color(0xFFFDE68A), (y / (s.height * 0.08)).clamp(0, 1));
        continue;
      }
      c.drawCircle(Offset(x, y), r, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = math.max(0.8, r * 0.25)
        ..color = const Color(0xFFFFF7D6).withValues(alpha: 0.75));
      c.drawCircle(Offset(x - r * 0.35, y - r * 0.35), r * 0.25, Paint()..color = Colors.white.withValues(alpha: 0.8));
    }
  }

  // 6. Diamond Rain ---------------------------------------------------------

  void _diamonds(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    _twinkles(c, s, t, 30, const Color(0xFFBFDBFE), seed: 60);
    for (var i = 0; i < n(42); i++) {
      final size = m * (0.025 + 0.035 * _r(i, 1));
      final h = s.height + size * 4;
      final y = (t * m * (0.04 + 0.06 * _r(i, 2)) + _r(i, 3) * h) % h - size * 2;
      final x = _r(i, 4) * s.width + math.sin(t * 0.7 + i) * m * 0.02;
      c.save();
      c.translate(x, y);
      c.rotate(math.sin(t * 0.8 + i) * 0.5);
      final w = size, hh = size * 1.2;
      final crownTop = -hh * 0.35;
      final gem = Path()
        ..moveTo(-w * 0.5, crownTop)
        ..lineTo(-w * 0.28, -hh * 0.6)
        ..lineTo(w * 0.28, -hh * 0.6)
        ..lineTo(w * 0.5, crownTop)
        ..lineTo(0, hh * 0.6)
        ..close();
      c.drawPath(gem, Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: const [Color(0xFFFFFFFF), Color(0xFFBAE6FD), Color(0xFF93C5FD), Color(0xFFE0E7FF)],
        ).createShader(Rect.fromCenter(center: Offset.zero, width: w, height: hh * 1.2)));
      final facet = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = math.max(0.6, size * 0.03)
        ..color = Colors.white.withValues(alpha: 0.7);
      c.drawLine(Offset(-w * 0.5, crownTop), Offset(w * 0.5, crownTop), facet);
      c.drawLine(Offset(-w * 0.28, -hh * 0.6), Offset(0, hh * 0.6), facet);
      c.drawLine(Offset(w * 0.28, -hh * 0.6), Offset(0, hh * 0.6), facet);
      c.restore();
      final glint = math.sin(t * 2.2 + i * 1.7);
      if (glint > 0.85) _sparkle(c, Offset(x + size * 0.2, y - size * 0.3), size * 0.9, Colors.white, (glint - 0.85) / 0.15);
    }
  }

  // 7. Golden Starburst -----------------------------------------------------

  void _starburst(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    final center = Offset(s.width / 2, s.height / 2);
    const rays = 28;
    for (var i = 0; i < rays; i++) {
      final a = i / rays * math.pi * 2 - t * 0.15;
      final wide = i.isEven ? 0.05 : 0.025;
      final path = Path()
        ..moveTo(center.dx, center.dy)
        ..lineTo(center.dx + math.cos(a - wide) * m * 1.3, center.dy + math.sin(a - wide) * m * 1.3)
        ..lineTo(center.dx + math.cos(a + wide) * m * 1.3, center.dy + math.sin(a + wide) * m * 1.3)
        ..close();
      c.drawPath(path, Paint()..color = const Color(0xFFFDE68A).withValues(alpha: i.isEven ? 0.12 : 0.07));
    }
    // Rings pulsing out.
    for (var k = 0; k < 3; k++) {
      final v = ((t + k * 0.6) % 1.8) / 1.8;
      c.drawCircle(center, m * (0.15 + 0.6 * v), Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = m * 0.008 * (1 - v)
        ..color = const Color(0xFFFDE68A).withValues(alpha: (1 - v) * 0.6));
    }
    // A burst of golden sparks every 2.4 s.
    final cycle = (t / 2.4).floor();
    final v = (t % 2.4) / 2.4;
    for (var i = 0; i < n(70); i++) {
      final a = _r(i, cycle) * math.pi * 2;
      final dist = m * (0.1 + 0.55 * Curves.easeOutQuart.transform(v) * (0.5 + 0.5 * _r(i, cycle + 1)));
      final p = center + Offset(math.cos(a), math.sin(a)) * dist;
      _sparkle(c, p, m * (0.01 + 0.012 * _r(i, 3)), _pick(_goldBits, i, 4), (1 - v) * 1.2);
    }
  }

  // 8. Luxury Balloons ------------------------------------------------------

  void _balloons(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    const colors = [Color(0xFFF5C451), Color(0xFFE8B4B8), Color(0xFFE2E8F0), Color(0xFFFFFFFF), Color(0xFFB76E79), Color(0xFFD4AF37)];
    for (var i = 0; i < n(22); i++) {
      final r = m * (0.045 + 0.035 * _r(i, 1));
      final h = s.height + r * 6;
      final y = s.height + r * 2 - ((t * m * (0.05 + 0.05 * _r(i, 2)) + _r(i, 3) * h) % h);
      final x = _r(i, 4) * s.width + math.sin(t * 0.9 + i * 1.3) * m * 0.03;
      final col = colors[i % colors.length];
      // String.
      final string = Path()..moveTo(x, y + r * 1.15);
      for (var k = 1; k <= 6; k++) {
        string.lineTo(x + math.sin(k * 1.4 + t * 2 + i) * r * 0.15, y + r * 1.15 + k * r * 0.35);
      }
      c.drawPath(string, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = math.max(0.7, r * 0.03)
        ..color = Colors.white.withValues(alpha: 0.6));
      final rect = Rect.fromCenter(center: Offset(x, y), width: r * 2, height: r * 2.3);
      c.drawOval(rect, Paint()
        ..shader = RadialGradient(
          center: const Alignment(-0.35, -0.45),
          radius: 0.9,
          colors: [Colors.white, col, Color.lerp(col, Colors.black, 0.35)!],
          stops: const [0, 0.35, 1],
        ).createShader(rect));
      c.drawPath(
        Path()
          ..moveTo(x - r * 0.12, y + r * 1.15)
          ..lineTo(x + r * 0.12, y + r * 1.15)
          ..lineTo(x, y + r * 1.0)
          ..close(),
        Paint()..color = Color.lerp(col, Colors.black, 0.3)!,
      );
    }
    // Light confetti between them.
    for (var i = 0; i < n(60); i++) {
      final h = s.height + 20;
      final y = (t * m * (0.1 + 0.1 * _r(i, 11)) + _r(i, 12) * h) % h - 10;
      final x = _r(i, 13) * s.width;
      c.save();
      c.translate(x, y);
      c.rotate(t * 3 + i);
      c.drawRect(Rect.fromCenter(center: Offset.zero, width: m * 0.012, height: m * 0.02), Paint()..color = colors[i % colors.length].withValues(alpha: 0.85));
      c.restore();
    }
  }

  // 9. Galaxy Spiral --------------------------------------------------------

  void _galaxy(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    final center = Offset(s.width / 2, s.height / 2);
    _twinkles(c, s, t, 50, Colors.white, seed: 70);
    for (final (col, dx, dy, r) in [
      (const Color(0xFF7C3AED), -0.25, -0.15, 0.45),
      (const Color(0xFFDB2777), 0.28, 0.2, 0.4),
      (const Color(0xFF0EA5E9), 0.05, 0.3, 0.35),
    ]) {
      final p = center + Offset(dx * s.width + math.sin(t * 0.3) * m * 0.03, dy * s.height);
      c.drawCircle(p, m * r, Paint()
        ..shader = RadialGradient(colors: [col.withValues(alpha: 0.32 + 0.08 * math.sin(t)), col.withValues(alpha: 0)])
            .createShader(Rect.fromCircle(center: p, radius: m * r)));
    }
    final count = n(420);
    for (var i = 0; i < count; i++) {
      final arm = i % 3;
      final f = _r(i, 1);
      final dist = m * 0.6 * math.pow(f, 0.8);
      final a = arm * math.pi * 2 / 3 + f * 5.5 + t * 0.18 + (_r(i, 2) - 0.5) * 0.5;
      final p = center + Offset(math.cos(a) * dist, math.sin(a) * dist * 0.62);
      final col = Color.lerp(const Color(0xFFFDE68A), const Color(0xFFC4B5FD), f)!;
      c.drawCircle(p, m * (0.0025 + 0.004 * _r(i, 3)), Paint()
        ..color = col.withValues(alpha: 0.5 + 0.5 * _r(i, 4))
        ..blendMode = BlendMode.plus);
    }
    c.drawCircle(center, m * 0.12, Paint()
      ..shader = RadialGradient(colors: [const Color(0xFFFFF7D6).withValues(alpha: 0.55), const Color(0x00FFF7D6)])
          .createShader(Rect.fromCircle(center: center, radius: m * 0.12)));
    // A shooting star now and then.
    final sv = (t % 3.5) / 3.5;
    if (sv < 0.25) {
      final cyc = (t / 3.5).floor();
      final start = Offset(s.width * (0.1 + 0.5 * _r(cyc, 9)), s.height * 0.1 * _r(cyc, 8));
      final end = start + Offset(m * 0.6, m * 0.3);
      final head = Offset.lerp(start, end, sv / 0.25)!;
      c.drawLine(Offset.lerp(start, head, 0.6)!, head, Paint()
        ..shader = LinearGradient(colors: [Colors.white.withValues(alpha: 0), Colors.white]).createShader(Rect.fromPoints(start, head))
        ..strokeWidth = m * 0.005
        ..strokeCap = StrokeCap.round);
    }
  }

  // 10. Red Carpet ----------------------------------------------------------

  void _redCarpet(Canvas c, Size s, double t) {
    final m = math.min(s.width, s.height);
    // Spotlights sweeping from the top.
    for (var i = 0; i < 3; i++) {
      final origin = Offset(s.width * (0.2 + i * 0.3), -m * 0.05);
      final a = math.pi / 2 + math.sin(t * (0.5 + i * 0.15) + i * 2) * 0.45;
      final len = s.height * 1.3;
      final spread = 0.16;
      final path = Path()
        ..moveTo(origin.dx, origin.dy)
        ..lineTo(origin.dx + math.cos(a - spread) * len, origin.dy + math.sin(a - spread) * len)
        ..lineTo(origin.dx + math.cos(a + spread) * len, origin.dy + math.sin(a + spread) * len)
        ..close();
      c.drawPath(path, Paint()
        ..shader = RadialGradient(colors: [const Color(0xFFFFF7D6).withValues(alpha: 0.28), const Color(0x00FFF7D6)])
            .createShader(Rect.fromCircle(center: origin, radius: len))
        ..blendMode = BlendMode.plus);
    }
    // Velvet curtains on both sides.
    for (final left in [true, false]) {
      final w = s.width * 0.16;
      final x0 = left ? 0.0 : s.width - w;
      final rect = Rect.fromLTWH(x0, 0, w, s.height);
      final colors = <Color>[];
      for (var k = 0; k < 7; k++) {
        colors.add(k.isEven ? const Color(0xFF7F1D1D) : const Color(0xFFB91C1C));
      }
      final path = Path()
        ..moveTo(left ? 0 : s.width, 0)
        ..lineTo(left ? w : s.width - w, 0)
        ..quadraticBezierTo(left ? w * 0.55 : s.width - w * 0.55, s.height * 0.55, left ? w * 0.9 : s.width - w * 0.9, s.height)
        ..lineTo(left ? 0 : s.width, s.height)
        ..close();
      c.drawPath(path, Paint()..shader = LinearGradient(colors: colors).createShader(rect));
      c.drawLine(Offset(left ? w * 0.62 : s.width - w * 0.62, s.height * 0.5), Offset(left ? w * 0.95 : s.width - w * 0.95, s.height * 0.52),
          Paint()
            ..color = const Color(0xFFF5C451)
            ..strokeWidth = m * 0.012
            ..strokeCap = StrokeCap.round);
    }
    // Red carpet in perspective.
    final carpet = Path()
      ..moveTo(s.width * 0.42, s.height * 0.78)
      ..lineTo(s.width * 0.58, s.height * 0.78)
      ..lineTo(s.width * 0.8, s.height)
      ..lineTo(s.width * 0.2, s.height)
      ..close();
    c.drawPath(carpet, Paint()
      ..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF991B1B), Color(0xFFDC2626)])
          .createShader(Rect.fromLTWH(0, s.height * 0.78, s.width, s.height * 0.22)));
    // Gold glitter falling.
    for (var i = 0; i < n(80); i++) {
      final h = s.height + 10;
      final y = (t * m * (0.05 + 0.07 * _r(i, 1)) + _r(i, 2) * h) % h;
      final x = s.width * (0.15 + 0.7 * _r(i, 3)) + math.sin(t + i) * m * 0.01;
      final a = (math.sin(t * 5 + i) + 1) / 2;
      _sparkle(c, Offset(x, y), m * (0.006 + 0.008 * _r(i, 4)), const Color(0xFFFDE68A), 0.3 + 0.7 * a);
    }
  }

  @override
  bool shouldRepaint(covariant _FinalePainter old) => old.id != id || old.density != density;
}

// ─── Gallery, preview and editing ─────────────────────────────────────────

/// A row of live mini previews to choose from ("None" first). Tap one to see it full screen
/// and change its words or logo.
class NgmyFinalePicker extends StatelessWidget {
  const NgmyFinalePicker({super.key, required this.choice, required this.onChanged});
  final NgmyFinaleChoice choice;
  final ValueChanged<NgmyFinaleChoice> onChanged;

  @override
  Widget build(BuildContext context) {
    Widget card({required bool selected, required Widget child, required String label, required VoidCallback onTap}) => GestureDetector(
          onTap: onTap,
          child: SizedBox(
            width: 112,
            child: Column(children: [
              AnimatedContainer(
                duration: const Duration(milliseconds: 180),
                height: 72,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: selected ? const Color(0xFFFDE68A) : Colors.white12, width: selected ? 2.5 : 1),
                  boxShadow: selected ? [BoxShadow(color: const Color(0xFFF5C451).withValues(alpha: 0.4), blurRadius: 14)] : null,
                ),
                child: ClipRRect(borderRadius: BorderRadius.circular(12), child: child),
              ),
              const SizedBox(height: 5),
              Text(label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(color: selected ? const Color(0xFFFDE68A) : Colors.white70, fontSize: 11, fontWeight: FontWeight.w700)),
            ]),
          ),
        );

    return SizedBox(
      height: 100,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          card(
            selected: choice.none,
            label: 'None',
            onTap: () => onChanged(choice.copyWith(style: '')),
            child: Container(color: Colors.white.withValues(alpha: 0.05), child: const Icon(Icons.block_rounded, color: Colors.white38)),
          ),
          for (final st in kNgmyFinales) ...[
            const SizedBox(width: 10),
            card(
              selected: choice.style == st.id,
              label: st.name,
              onTap: () async {
                final picked = await showNgmyFinalePreview(context, choice.copyWith(style: st.id));
                if (picked != null) onChanged(picked);
              },
              child: IgnorePointer(child: NgmyFinaleView(choice: choice.copyWith(style: st.id), preview: true)),
            ),
          ],
        ],
      ),
    );
  }
}

/// Full-screen view of a celebration with its words and logo to edit. Returns the choice
/// when "Use this" is tapped.
Future<NgmyFinaleChoice?> showNgmyFinalePreview(BuildContext context, NgmyFinaleChoice start) {
  return Navigator.of(context).push<NgmyFinaleChoice>(
    MaterialPageRoute(fullscreenDialog: true, builder: (_) => _FinalePreviewPage(start: start)),
  );
}

class _FinalePreviewPage extends StatefulWidget {
  const _FinalePreviewPage({required this.start});
  final NgmyFinaleChoice start;
  @override
  State<_FinalePreviewPage> createState() => _FinalePreviewPageState();
}

class _FinalePreviewPageState extends State<_FinalePreviewPage> {
  late NgmyFinaleChoice _c = widget.start;
  late final _title = TextEditingController(text: widget.start.title);
  late final _sub = TextEditingController(text: widget.start.subtitleOrDefault);
  int _replay = 0;

  @override
  void dispose() {
    _title.dispose();
    _sub.dispose();
    super.dispose();
  }

  Future<void> _pickLogo() async {
    try {
      final img = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 700, maxHeight: 700, imageQuality: 90);
      if (img == null) return;
      final bytes = await img.readAsBytes();
      final lower = img.name.toLowerCase();
      final mime = lower.endsWith('.png') ? 'image/png' : 'image/jpeg';
      setState(() {
        _c = _c.copyWith(logo: 'data:$mime;base64,${base64Encode(bytes)}');
        _replay++;
      });
    } catch (_) {}
  }

  InputDecoration _deco(String label) => InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(color: Colors.white60),
        filled: true,
        fillColor: Colors.white.withValues(alpha: 0.07),
        isDense: true,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
      );

  @override
  Widget build(BuildContext context) {
    final style = ngmyFinaleStyle(_c.style) ?? kNgmyFinales.first;
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(children: [
          Expanded(
            child: Stack(children: [
              Positioned.fill(child: NgmyFinaleView(key: ValueKey('${_c.style}$_replay'), choice: _c)),
              Positioned(
                top: 8,
                left: 8,
                child: IconButton.filled(
                  onPressed: () => Navigator.pop(context),
                  style: IconButton.styleFrom(backgroundColor: Colors.black54),
                  icon: const Icon(Icons.close_rounded, color: Colors.white),
                ),
              ),
              Positioned(
                top: 8,
                right: 8,
                child: IconButton.filled(
                  tooltip: 'Play again',
                  onPressed: () => setState(() => _replay++),
                  style: IconButton.styleFrom(backgroundColor: Colors.black54),
                  icon: const Icon(Icons.replay_rounded, color: Colors.white),
                ),
              ),
            ]),
          ),
          Container(
            padding: const EdgeInsets.fromLTRB(16, 14, 16, 12),
            decoration: const BoxDecoration(color: Color(0xFF0F0F14), borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Text(style.name, style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w900, fontSize: 16)),
              const SizedBox(height: 10),
              Row(children: [
                Expanded(
                  child: TextField(
                    controller: _title,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
                    decoration: _deco('Big words'),
                    onChanged: (v) => setState(() => _c = _c.copyWith(title: v)),
                  ),
                ),
                const SizedBox(width: 8),
                GestureDetector(
                  onTap: _pickLogo,
                  child: Container(
                    width: 48,
                    height: 48,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: Colors.white.withValues(alpha: 0.07),
                      border: Border.all(color: const Color(0xFFF5C451).withValues(alpha: 0.6)),
                    ),
                    child: _c.logo.isEmpty
                        ? const Icon(Icons.add_photo_alternate_rounded, color: Color(0xFFFDE68A), size: 22)
                        : ClipOval(child: Image.memory(_bytes(_c.logo) ?? Uint8List(0), fit: BoxFit.cover)),
                  ),
                ),
                if (_c.logo.isNotEmpty)
                  IconButton(
                    tooltip: 'Remove logo',
                    onPressed: () => setState(() => _c = _c.copyWith(logo: '')),
                    icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 18),
                  ),
              ]),
              const SizedBox(height: 8),
              TextField(
                controller: _sub,
                style: const TextStyle(color: Colors.white),
                decoration: _deco('Line under it'),
                onChanged: (v) => setState(() => _c = _c.copyWith(subtitle: v)),
              ),
              const SizedBox(height: 12),
              FilledButton.icon(
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFFD4AF37),
                  foregroundColor: Colors.black,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                onPressed: () => Navigator.pop(context, _c.copyWith(subtitle: _sub.text)),
                icon: const Icon(Icons.celebration_rounded),
                label: const Text('Use this ending', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ]),
          ),
        ]),
      ),
    );
  }
}

/// Bottom sheet to choose or change a deck's ending celebration (from the slides menu).
Future<NgmyFinaleChoice?> showNgmyFinaleGallery(BuildContext context, NgmyFinaleChoice current) {
  return showModalBottomSheet<NgmyFinaleChoice>(
    context: context,
    backgroundColor: Colors.transparent,
    isScrollControlled: true,
    builder: (ctx) {
      var choice = current;
      return StatefulBuilder(
        builder: (ctx, setLocal) => Container(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 20),
          decoration: const BoxDecoration(color: Color(0xFF0F0F14), borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
          child: SafeArea(
            top: false,
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(9)))),
              const SizedBox(height: 14),
              const Text('Ending celebration', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 4),
              const Text('Plays after your last slide. Tap one to watch it and change its words or logo.',
                  style: TextStyle(color: Colors.white60, fontSize: 12.5)),
              const SizedBox(height: 14),
              NgmyFinalePicker(
                choice: choice,
                onChanged: (c) {
                  setLocal(() => choice = c);
                  Navigator.pop(ctx, c);
                },
              ),
            ]),
          ),
        ),
      );
    },
  );
}
