import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

/// Home “tech deck” under the spending cards — robotic HUD frames with motion.
/// Tapping a frame opens a full-screen pulse / scan animation.

class NgmyHomeTechFramesPanel extends StatefulWidget {
  const NgmyHomeTechFramesPanel({super.key});

  @override
  State<NgmyHomeTechFramesPanel> createState() => _NgmyHomeTechFramesPanelState();
}

class _NgmyHomeTechFramesPanelState extends State<NgmyHomeTechFramesPanel> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _scan;
  late final AnimationController _orbit;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
    _scan = AnimationController(vsync: this, duration: const Duration(milliseconds: 3400))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(milliseconds: 9000))..repeat();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _scan.dispose();
    _orbit.dispose();
    super.dispose();
  }

  Future<void> _openExperience(_TechFrameSpec spec) async {
    await Navigator.of(context).push(
      PageRouteBuilder(
        opaque: false,
        barrierColor: Colors.black.withValues(alpha: 0.55),
        transitionDuration: const Duration(milliseconds: 420),
        reverseTransitionDuration: const Duration(milliseconds: 320),
        pageBuilder: (_, anim, secondary) => FadeTransition(
          opacity: CurvedAnimation(parent: anim, curve: Curves.easeOutCubic),
          child: _TechPulseExperience(spec: spec),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([_pulse, _scan, _orbit]),
      builder: (context, _) {
        final pulse = Curves.easeInOut.transform(_pulse.value);
        final scan = _scan.value;
        final orbit = _orbit.value;
        // Neural / Signal get the big first-creation frames again (majority of height).
        // Core + Vault stay as wide bars underneath without crushing the top pair.
        return Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              flex: 5,
              child: ConstrainedBox(
                constraints: const BoxConstraints(minHeight: 168),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Expanded(
                      child: _TechFrameCard(
                        spec: _TechFrameSpec.neural,
                        pulse: pulse,
                        scan: scan,
                        orbit: orbit,
                        onTap: () => _openExperience(_TechFrameSpec.neural),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _TechFrameCard(
                        spec: _TechFrameSpec.signal,
                        pulse: pulse,
                        scan: (scan + 0.35) % 1.0,
                        orbit: (orbit + 0.22) % 1.0,
                        onTap: () => _openExperience(_TechFrameSpec.signal),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 96,
              child: _TechFrameCard(
                spec: _TechFrameSpec.core,
                pulse: pulse,
                scan: (scan + 0.62) % 1.0,
                orbit: (orbit + 0.48) % 1.0,
                wide: true,
                onTap: () => _openExperience(_TechFrameSpec.core),
              ),
            ),
            const SizedBox(height: 10),
            SizedBox(
              height: 96,
              child: _TechFrameCard(
                spec: _TechFrameSpec.vault,
                pulse: pulse,
                scan: (scan + 0.18) % 1.0,
                orbit: (orbit + 0.71) % 1.0,
                wide: true,
                onTap: () => _openExperience(_TechFrameSpec.vault),
              ),
            ),
          ],
        );
      },
    );
  }
}

enum _TechKind { neural, signal, core, vault }

class _TechFrameSpec {
  const _TechFrameSpec({
    required this.kind,
    required this.title,
    required this.subtitle,
    required this.badge,
    required this.colors,
    required this.icon,
  });

  final _TechKind kind;
  final String title;
  final String subtitle;
  final String badge;
  final List<Color> colors;
  final IconData icon;

  static const neural = _TechFrameSpec(
    kind: _TechKind.neural,
    title: 'NEURAL LINK',
    subtitle: 'Sync pulse · live',
    badge: 'NODE A',
    colors: [Color(0xFF22D3EE), Color(0xFF6366F1)],
    icon: Icons.hub_rounded,
  );

  static const signal = _TechFrameSpec(
    kind: _TechKind.signal,
    title: 'SIGNAL GRID',
    subtitle: 'Freq sweep · online',
    badge: 'NODE B',
    colors: [Color(0xFFA78BFA), Color(0xFFEC4899)],
    icon: Icons.radar_rounded,
  );

  static const core = _TechFrameSpec(
    kind: _TechKind.core,
    title: 'CORE PROTOCOL',
    subtitle: 'Tap to boot the system sequence',
    badge: 'MAINFRAME',
    colors: [Color(0xFF34D399), Color(0xFF06B6D4), Color(0xFF818CF8)],
    icon: Icons.memory_rounded,
  );

  static const vault = _TechFrameSpec(
    kind: _TechKind.vault,
    title: 'VAULT CHANNEL',
    subtitle: 'Secure lane · encrypted pulse',
    badge: 'SECURE',
    colors: [Color(0xFFFBBF24), Color(0xFFF97316), Color(0xFFEF4444)],
    icon: Icons.shield_rounded,
  );
}

class _TechFrameCard extends StatelessWidget {
  const _TechFrameCard({
    required this.spec,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.onTap,
    this.wide = false,
  });

  final _TechFrameSpec spec;
  final double pulse;
  final double scan;
  final double orbit;
  final VoidCallback onTap;
  final bool wide;

  @override
  Widget build(BuildContext context) {
    final glow = 0.35 + pulse * 0.35;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(24),
        child: CustomPaint(
          painter: _HudFramePainter(
            colors: spec.colors,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            glow: glow,
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(24),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18),
              child: Container(
                padding: EdgeInsets.fromLTRB(wide ? 18 : 14, wide ? 14 : 14, wide ? 18 : 14, wide ? 14 : 14),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(24),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      Colors.white.withValues(alpha: 0.10),
                      spec.colors.first.withValues(alpha: 0.16 + pulse * 0.08),
                      spec.colors.last.withValues(alpha: 0.12),
                      Colors.black.withValues(alpha: 0.18),
                    ],
                  ),
                ),
                child: wide ? _wideBody() : _tallBody(),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _tallBody() {
    return LayoutBuilder(
      builder: (context, constraints) {
        final orb = (constraints.maxHeight * 0.38).clamp(56.0, 88.0);
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                _badge(),
                const Spacer(),
                Icon(spec.icon, size: 20, color: Colors.white.withValues(alpha: 0.85 + pulse * 0.15)),
              ],
            ),
            const Spacer(),
            Center(
              child: SizedBox(
                width: orb,
                height: orb,
                child: CustomPaint(
                  painter: _OrbPainter(colors: spec.colors, pulse: pulse, orbit: orbit, kind: spec.kind),
                ),
              ),
            ),
            const Spacer(),
            Text(
              spec.title,
              style: TextStyle(
                color: Colors.white.withValues(alpha: 0.95),
                fontWeight: FontWeight.w900,
                fontSize: 13,
                letterSpacing: 1.1,
              ),
            ),
            const SizedBox(height: 3),
            Text(
              spec.subtitle,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11, fontWeight: FontWeight.w600),
            ),
          ],
        );
      },
    );
  }

  Widget _wideBody() {
    return Row(
      children: [
        SizedBox(
          width: 64,
          height: 64,
          child: CustomPaint(
            painter: _OrbPainter(colors: spec.colors, pulse: pulse, orbit: orbit, kind: spec.kind),
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _badge(),
              const SizedBox(height: 6),
              Text(
                spec.title,
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14, letterSpacing: 1.2),
              ),
              const SizedBox(height: 3),
              Text(
                spec.subtitle,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 11.5, fontWeight: FontWeight.w600),
              ),
            ],
          ),
        ),
        Icon(Icons.play_arrow_rounded, color: Colors.white.withValues(alpha: 0.75 + pulse * 0.25), size: 26),
      ],
    );
  }

  Widget _badge() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: spec.colors.first.withValues(alpha: 0.55)),
        color: Colors.black.withValues(alpha: 0.25),
      ),
      child: Text(
        spec.badge,
        style: TextStyle(
          color: spec.colors.first.withValues(alpha: 0.95),
          fontSize: 9.5,
          fontWeight: FontWeight.w900,
          letterSpacing: 1.0,
        ),
      ),
    );
  }
}

class _HudFramePainter extends CustomPainter {
  _HudFramePainter({
    required this.colors,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.glow,
  });

  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;
  final double glow;

  @override
  void paint(Canvas canvas, Size size) {
    final r = RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(24));
    final border = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.4
      ..shader = LinearGradient(
        colors: [
          colors.first.withValues(alpha: 0.35 + glow * 0.45),
          Colors.white.withValues(alpha: 0.35),
          colors.last.withValues(alpha: 0.45 + glow * 0.35),
        ],
      ).createShader(Offset.zero & size);
    canvas.drawRRect(r, border);

    // Corner brackets
    final bracket = Paint()
      ..color = colors.first.withValues(alpha: 0.75 + pulse * 0.25)
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    const c = 14.0;
    const inset = 8.0;
    void corner(double x, double y, double dx, double dy) {
      canvas.drawPath(
        Path()
          ..moveTo(x + dx * c, y)
          ..lineTo(x, y)
          ..lineTo(x, y + dy * c),
        bracket,
      );
    }

    corner(inset, inset, 1, 1);
    corner(size.width - inset, inset, -1, 1);
    corner(inset, size.height - inset, 1, -1);
    corner(size.width - inset, size.height - inset, -1, -1);

    // Scan line
    final sy = size.height * scan;
    final scanPaint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          colors.first.withValues(alpha: 0.0),
          colors.first.withValues(alpha: 0.22),
          colors.first.withValues(alpha: 0.0),
        ],
      ).createShader(Rect.fromLTWH(0, sy - 18, size.width, 36));
    canvas.drawRect(Rect.fromLTWH(6, sy - 18, size.width - 12, 36), scanPaint);

    // Tiny orbit ticks
    final cx = size.width - 22;
    final cy = 22.0;
    final tick = Paint()..color = colors.last.withValues(alpha: 0.7)..strokeWidth = 1.5;
    for (var i = 0; i < 6; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 3);
      canvas.drawCircle(Offset(cx + math.cos(a) * 8, cy + math.sin(a) * 8), 1.2, tick);
    }
  }

  @override
  bool shouldRepaint(covariant _HudFramePainter old) =>
      old.pulse != pulse || old.scan != scan || old.orbit != orbit || old.glow != glow;
}

class _OrbPainter extends CustomPainter {
  _OrbPainter({required this.colors, required this.pulse, required this.orbit, required this.kind});

  final List<Color> colors;
  final double pulse;
  final double orbit;
  final _TechKind kind;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide * 0.34;

    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        radius + i * 7 + pulse * 4,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: 0.12 * i),
      );
    }

    final fill = Paint()
      ..shader = RadialGradient(
        colors: [
          Colors.white.withValues(alpha: 0.55),
          colors.first.withValues(alpha: 0.85),
          colors.last.withValues(alpha: 0.55),
        ],
      ).createShader(Rect.fromCircle(center: c, radius: radius));
    canvas.drawCircle(c, radius, fill);

    final ring = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..color = Colors.white.withValues(alpha: 0.55 + pulse * 0.35);
    canvas.drawCircle(c, radius + 2, ring);

    if (kind == _TechKind.signal) {
      final sweep = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.2
        ..color = colors.last.withValues(alpha: 0.85);
      canvas.drawArc(Rect.fromCircle(center: c, radius: radius + 10), orbit * math.pi * 2, 1.2, false, sweep);
    } else if (kind == _TechKind.neural) {
      for (var i = 0; i < 4; i++) {
        final a = orbit * math.pi * 2 + i * (math.pi / 2);
        final p = Offset(c.dx + math.cos(a) * (radius + 12), c.dy + math.sin(a) * (radius + 12));
        canvas.drawCircle(p, 2.4, Paint()..color = colors[i % colors.length]);
        canvas.drawLine(c, p, Paint()..color = colors.first.withValues(alpha: 0.35)..strokeWidth = 1);
      }
    } else if (kind == _TechKind.vault) {
      // Shield-style lock ring
      canvas.drawArc(
        Rect.fromCircle(center: c, radius: radius + 11),
        -math.pi / 2 + orbit * math.pi * 2,
        math.pi * 1.35,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.4
          ..color = colors.first.withValues(alpha: 0.9),
      );
      for (var i = 0; i < 3; i++) {
        final a = orbit * math.pi * 2 + i * (math.pi * 2 / 3);
        final p = Offset(c.dx + math.cos(a) * (radius + 14), c.dy + math.sin(a) * (radius + 14));
        canvas.drawCircle(p, 2.2, Paint()..color = colors[i % colors.length]);
      }
    } else {
      // Core hex-ish ticks
      for (var i = 0; i < 6; i++) {
        final a = orbit * math.pi * 2 + i * (math.pi / 3);
        final inner = Offset(c.dx + math.cos(a) * (radius - 6), c.dy + math.sin(a) * (radius - 6));
        final outer = Offset(c.dx + math.cos(a) * (radius + 8), c.dy + math.sin(a) * (radius + 8));
        canvas.drawLine(inner, outer, Paint()..color = Colors.white.withValues(alpha: 0.55)..strokeWidth = 1.6);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _OrbPainter old) => old.pulse != pulse || old.orbit != orbit;
}

// ── Full-screen tap experience ──────────────────────────────────────────────

class _TechPulseExperience extends StatefulWidget {
  const _TechPulseExperience({required this.spec});

  final _TechFrameSpec spec;

  @override
  State<_TechPulseExperience> createState() => _TechPulseExperienceState();
}

class _TechPulseExperienceState extends State<_TechPulseExperience> with TickerProviderStateMixin {
  late final AnimationController _boot;
  late final AnimationController _spin;
  late final AnimationController _wave;

  @override
  void initState() {
    super.initState();
    _boot = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..forward();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 4800))..repeat();
    _wave = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat();
  }

  @override
  void dispose() {
    _boot.dispose();
    _spin.dispose();
    _wave.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final spec = widget.spec;
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: GestureDetector(
        onTap: () => Navigator.pop(context),
        child: AnimatedBuilder(
          animation: Listenable.merge([_boot, _spin, _wave]),
          builder: (context, _) {
            final boot = Curves.easeOutCubic.transform(_boot.value.clamp(0.0, 1.0));
            return Stack(
              fit: StackFit.expand,
              children: [
                BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 18 * boot, sigmaY: 18 * boot),
                  child: Container(color: const Color(0xFF030712).withValues(alpha: 0.72 * boot)),
                ),
                CustomPaint(
                  painter: _ExperienceBackdropPainter(
                    colors: spec.colors,
                    spin: _spin.value,
                    wave: _wave.value,
                    boot: boot,
                  ),
                ),
                SafeArea(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(24, 18, 24, 28),
                    child: Column(
                      children: [
                        Row(
                          children: [
                            Text(
                              'SYSTEM · ${spec.badge}',
                              style: TextStyle(
                                color: spec.colors.first.withValues(alpha: 0.9),
                                fontWeight: FontWeight.w900,
                                letterSpacing: 1.4,
                                fontSize: 11,
                              ),
                            ),
                            const Spacer(),
                            Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7)),
                          ],
                        ),
                        const Spacer(),
                        Transform.scale(
                          scale: 0.7 + boot * 0.35,
                          child: SizedBox(
                            width: 220,
                            height: 220,
                            child: CustomPaint(
                              painter: _OrbPainter(
                                colors: spec.colors,
                                pulse: 0.4 + math.sin(_wave.value * math.pi * 2) * 0.5,
                                orbit: _spin.value,
                                kind: spec.kind,
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(height: 28),
                        Opacity(
                          opacity: boot,
                          child: Column(
                            children: [
                              Text(
                                spec.title,
                                textAlign: TextAlign.center,
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 28,
                                  fontWeight: FontWeight.w900,
                                  letterSpacing: 2.2,
                                ),
                              ),
                              const SizedBox(height: 10),
                              Text(
                                _statusLine(spec.kind, _wave.value),
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Colors.white.withValues(alpha: 0.65),
                                  fontSize: 13,
                                  fontWeight: FontWeight.w600,
                                  letterSpacing: 0.4,
                                ),
                              ),
                              const SizedBox(height: 22),
                              _meterBar(spec.colors, _wave.value),
                            ],
                          ),
                        ),
                        const Spacer(),
                        Text(
                          'TAP ANYWHERE TO CLOSE',
                          style: TextStyle(
                            color: Colors.white.withValues(alpha: 0.35),
                            fontSize: 11,
                            fontWeight: FontWeight.w800,
                            letterSpacing: 1.6,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }

  String _statusLine(_TechKind kind, double t) {
    final step = (t * 4).floor() % 4;
    switch (kind) {
      case _TechKind.neural:
        return const ['Mapping neural pathways…', 'Calibrating link latency…', 'Handshake complete.', 'Ready for input.'][step];
      case _TechKind.signal:
        return const ['Sweeping spectrum…', 'Locking carrier wave…', 'Grid synchronized.', 'Broadcast online.'][step];
      case _TechKind.core:
        return const ['Booting core modules…', 'Loading protocol stack…', 'Integrity check OK.', 'Mainframe online.'][step];
      case _TechKind.vault:
        return const ['Sealing vault channel…', 'Encrypting payload…', 'Key exchange verified.', 'Secure lane open.'][step];
    }
  }

  Widget _meterBar(List<Color> colors, double t) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(999),
      child: SizedBox(
        height: 6,
        width: 180,
        child: Stack(
          fit: StackFit.expand,
          children: [
            ColoredBox(color: Colors.white.withValues(alpha: 0.12)),
            FractionallySizedBox(
              alignment: Alignment.centerLeft,
              widthFactor: 0.35 + (math.sin(t * math.pi * 2).abs() * 0.55),
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: colors),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ExperienceBackdropPainter extends CustomPainter {
  _ExperienceBackdropPainter({
    required this.colors,
    required this.spin,
    required this.wave,
    required this.boot,
  });

  final List<Color> colors;
  final double spin;
  final double wave;
  final double boot;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.42);
    for (var i = 1; i <= 5; i++) {
      canvas.drawCircle(
        c,
        40.0 * i + wave * 20,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: (0.12 / i) * boot),
      );
    }

    // Soft grid
    final grid = Paint()..color = Colors.white.withValues(alpha: 0.04 * boot)..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 28) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 28) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }

    // Rotating arc
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: 150),
      spin * math.pi * 2,
      1.4,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = colors.last.withValues(alpha: 0.45 * boot),
    );
  }

  @override
  bool shouldRepaint(covariant _ExperienceBackdropPainter old) =>
      old.spin != spin || old.wave != wave || old.boot != boot;
}
