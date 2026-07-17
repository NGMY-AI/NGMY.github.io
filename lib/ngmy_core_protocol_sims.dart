import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

/// Full-screen Core Protocol simulations — drag finger for protocol effects.
class NgmyCoreProtocolSimsScreen extends StatefulWidget {
  const NgmyCoreProtocolSimsScreen({super.key});

  @override
  State<NgmyCoreProtocolSimsScreen> createState() =>
      _NgmyCoreProtocolSimsScreenState();
}

enum _ProtocolSimKind {
  pulseWeave,
  signalLattice,
  orbitHandler,
  hexHandshake,
  fluxStream,
  echoField,
  liquidCore,
  tidalPool,
  mercuryDrag,
  vortexFluid,
}

class _SimMeta {
  const _SimMeta({
    required this.kind,
    required this.title,
    required this.blurb,
    required this.colors,
    required this.icon,
  });

  final _ProtocolSimKind kind;
  final String title;
  final String blurb;
  final List<Color> colors;
  final IconData icon;
}

const _kSims = <_SimMeta>[
  _SimMeta(
    kind: _ProtocolSimKind.pulseWeave,
    title: 'PULSE WEAVE',
    blurb: 'Drag trails of live protocol pulses',
    colors: [Color(0xFF34D399), Color(0xFF06B6D4)],
    icon: Icons.graphic_eq_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.signalLattice,
    title: 'SIGNAL LATTICE',
    blurb: 'Energize nodes as your finger routes',
    colors: [Color(0xFF22D3EE), Color(0xFF818CF8)],
    icon: Icons.grid_on_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.orbitHandler,
    title: 'ORBIT HANDLER',
    blurb: 'Pull orbital packets around the core',
    colors: [Color(0xFFA78BFA), Color(0xFFEC4899)],
    icon: Icons.blur_circular_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.hexHandshake,
    title: 'HEX HANDSHAKE',
    blurb: 'Wake hexagonal handshake cells',
    colors: [Color(0xFFFBBF24), Color(0xFF34D399)],
    icon: Icons.hexagon_outlined,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.fluxStream,
    title: 'FLUX STREAM',
    blurb: 'Bend flowing protocol current',
    colors: [Color(0xFF06B6D4), Color(0xFF6366F1)],
    icon: Icons.waves_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.echoField,
    title: 'ECHO FIELD',
    blurb: 'Cast expanding echo rings',
    colors: [Color(0xFFF472B6), Color(0xFF818CF8)],
    icon: Icons.podcasts_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.liquidCore,
    title: 'LIQUID CORE',
    blurb: 'Morph a living fluid mass',
    colors: [Color(0xFF22D3EE), Color(0xFF34D399)],
    icon: Icons.water_drop_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.tidalPool,
    title: 'TIDAL POOL',
    blurb: 'Stir liquid ripples on touch',
    colors: [Color(0xFF38BDF8), Color(0xFF6366F1)],
    icon: Icons.waterfall_chart_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.mercuryDrag,
    title: 'MERCURY DRAG',
    blurb: 'Pull liquid-metal ribbons',
    colors: [Color(0xFFE2E8F0), Color(0xFF94A3B8)],
    icon: Icons.blur_on_rounded,
  ),
  _SimMeta(
    kind: _ProtocolSimKind.vortexFluid,
    title: 'VORTEX FLUID',
    blurb: 'Spin a liquid whirlpool',
    colors: [Color(0xFF2DD4BF), Color(0xFF818CF8)],
    icon: Icons.cyclone_rounded,
  ),
];

/// A three-stage glass-panel reveal — one tile unfolds, a glowing link
/// draws down to the next, it unfolds, and so on. Auto-plays, no touch
/// input needed (unlike the drag sims above).
class _UnfoldMeta {
  const _UnfoldMeta({
    required this.title,
    required this.blurb,
    required this.colors,
    required this.icons,
  });

  final String title;
  final String blurb;
  final List<Color> colors;
  final List<IconData> icons; // exactly 3, top to bottom

  Color get glow => Color.lerp(colors.first, colors.last, 0.5)!;
}

const _kUnfoldSims = <_UnfoldMeta>[
  _UnfoldMeta(
    title: 'MESSAGE FUNNEL',
    blurb: 'Mail rises into place, then SMS, then the ad',
    colors: [Color(0xFF818CF8), Color(0xFF6366F1)],
    icons: [Icons.mail_rounded, Icons.sms_rounded, Icons.campaign_rounded],
  ),
];

class _NgmyCoreProtocolSimsScreenState
    extends State<NgmyCoreProtocolSimsScreen> {
  /// Original CORE PROTOCOL boot loads first, then the sims hub.
  bool _booting = true;
  _SimMeta? _active;
  _UnfoldMeta? _activeUnfold;

  void _exitSim() => setState(() => _active = null);
  void _exitUnfold() => setState(() => _activeUnfold = null);

  @override
  Widget build(BuildContext context) {
    final active = _active;
    final activeUnfold = _activeUnfold;
    return PopScope(
      canPop: !_booting && active == null && activeUnfold == null,
      onPopInvokedWithResult: (didPop, _) {
        if (didPop) return;
        if (active != null) {
          _exitSim();
        } else if (activeUnfold != null) {
          _exitUnfold();
        }
      },
      child: Scaffold(
        backgroundColor: const Color(0xFF030712),
        body: Stack(
          fit: StackFit.expand,
          children: [
            const _CoreBackdrop(),
            if (_booting)
              _CoreProtocolBootSplash(
                onFinished: () {
                  if (mounted) setState(() => _booting = false);
                },
              )
            else if (active == null && activeUnfold == null)
              _SimPicker(
                onPick: (s) => setState(() => _active = s),
                onPickUnfold: (s) => setState(() => _activeUnfold = s),
                onClose: () => Navigator.of(context).maybePop(),
              )
            else if (active != null)
              _ProtocolSimCanvas(meta: active, onExit: _exitSim)
            else
              _UnfoldSimCanvas(meta: activeUnfold!, onExit: _exitUnfold),
          ],
        ),
      ),
    );
  }
}

/// Same boot / loading beat as the original CORE PROTOCOL pulse screen —
/// runs fully before the simulation hub opens.
class _CoreProtocolBootSplash extends StatefulWidget {
  const _CoreProtocolBootSplash({required this.onFinished});

  final VoidCallback onFinished;

  @override
  State<_CoreProtocolBootSplash> createState() =>
      _CoreProtocolBootSplashState();
}

class _CoreProtocolBootSplashState extends State<_CoreProtocolBootSplash>
    with TickerProviderStateMixin {
  static const _coreColors = [Color(0xFF34D399), Color(0xFF06B6D4)];

  late final AnimationController _boot;
  late final AnimationController _spin;
  late final AnimationController _wave;
  bool _notified = false;

  @override
  void initState() {
    super.initState();
    _boot = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1600),
    )..forward();
    _spin = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 4800),
    )..repeat();
    _wave = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 2600),
    )..repeat();
    _boot.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        Future<void>.delayed(const Duration(milliseconds: 900), () {
          if (!mounted || _notified) return;
          _notified = true;
          widget.onFinished();
        });
      }
    });
  }

  @override
  void dispose() {
    _boot.dispose();
    _spin.dispose();
    _wave.dispose();
    super.dispose();
  }

  String _statusLine(double t) {
    final step = (t * 4).floor() % 4;
    return const [
      'Booting core modules…',
      'Loading protocol stack…',
      'Integrity check OK.',
      'Mainframe online.',
    ][step];
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([_boot, _spin, _wave]),
      builder: (context, _) {
        final boot = Curves.easeOutCubic.transform(_boot.value.clamp(0.0, 1.0));
        return Stack(
          fit: StackFit.expand,
          children: [
            Container(
              color: const Color(0xFF030712).withValues(alpha: 0.92 * boot),
            ),
            CustomPaint(
              painter: _BootBackdropPainter(
                colors: _coreColors,
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
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'SYSTEM · MAINFRAME',
                        style: TextStyle(
                          color: _coreColors.first.withValues(alpha: 0.9),
                          fontWeight: FontWeight.w900,
                          letterSpacing: 1.4,
                          fontSize: 11,
                        ),
                      ),
                    ),
                    const Spacer(),
                    Transform.scale(
                      scale: 0.7 + boot * 0.35,
                      child: SizedBox(
                        width: 220,
                        height: 220,
                        child: CustomPaint(
                          painter: _BootOrbPainter(
                            colors: _coreColors,
                            pulse:
                                0.4 + math.sin(_wave.value * math.pi * 2) * 0.5,
                            orbit: _spin.value,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 28),
                    Opacity(
                      opacity: boot,
                      child: Column(
                        children: [
                          const Text(
                            'CORE PROTOCOL',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 28,
                              fontWeight: FontWeight.w900,
                              letterSpacing: 2.2,
                            ),
                          ),
                          const SizedBox(height: 10),
                          Text(
                            _statusLine(_wave.value),
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.65),
                              fontSize: 13,
                              fontWeight: FontWeight.w600,
                              letterSpacing: 0.4,
                            ),
                          ),
                          const SizedBox(height: 22),
                          ClipRRect(
                            borderRadius: BorderRadius.circular(999),
                            child: SizedBox(
                              height: 6,
                              width: 180,
                              child: Stack(
                                fit: StackFit.expand,
                                children: [
                                  ColoredBox(
                                    color: Colors.white.withValues(alpha: 0.12),
                                  ),
                                  FractionallySizedBox(
                                    alignment: Alignment.centerLeft,
                                    widthFactor: boot.clamp(0.2, 1.0),
                                    child: const DecoratedBox(
                                      decoration: BoxDecoration(
                                        gradient: LinearGradient(
                                          colors: _coreColors,
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const Spacer(),
                    Text(
                      'LOADING SIMULATIONS…',
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
    );
  }
}

class _BootBackdropPainter extends CustomPainter {
  _BootBackdropPainter({
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
    final grid = Paint()
      ..color = Colors.white.withValues(alpha: 0.04 * boot)
      ..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 28) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 28) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
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
  bool shouldRepaint(covariant _BootBackdropPainter old) =>
      old.spin != spin || old.wave != wave || old.boot != boot;
}

class _BootOrbPainter extends CustomPainter {
  _BootOrbPainter({
    required this.colors,
    required this.pulse,
    required this.orbit,
  });

  final List<Color> colors;
  final double pulse;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide * 0.34 * (0.92 + pulse * 0.08);
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        radius + i * 10,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2
          ..color = colors.first.withValues(alpha: 0.14 * i),
      );
    }
    canvas.drawCircle(
      c,
      radius,
      Paint()
        ..shader = RadialGradient(
          colors: [
            Colors.white.withValues(alpha: 0.55),
            colors.first.withValues(alpha: 0.9),
            colors.last.withValues(alpha: 0.55),
          ],
        ).createShader(Rect.fromCircle(center: c, radius: radius)),
    );
    for (var i = 0; i < 8; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 4);
      final p = Offset(
        c.dx + math.cos(a) * (radius + 18),
        c.dy + math.sin(a) * (radius + 18),
      );
      canvas.drawCircle(
        p,
        3.2,
        Paint()..color = colors.last.withValues(alpha: 0.85),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _BootOrbPainter old) =>
      old.pulse != pulse || old.orbit != orbit;
}

class _CoreBackdrop extends StatelessWidget {
  const _CoreBackdrop();

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _CoreBackdropPainter(),
      child: const SizedBox.expand(),
    );
  }
}

class _CoreBackdropPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    canvas.drawRect(
      rect,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF030712), Color(0xFF0B1220), Color(0xFF020617)],
        ).createShader(rect),
    );
    final glow = Paint()
      ..shader = RadialGradient(
        center: const Alignment(0, -0.2),
        radius: 0.85,
        colors: [
          const Color(0xFF34D399).withValues(alpha: 0.16),
          const Color(0xFF06B6D4).withValues(alpha: 0.06),
          Colors.transparent,
        ],
      ).createShader(rect);
    canvas.drawRect(rect, glow);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _SimPicker extends StatelessWidget {
  const _SimPicker({
    required this.onPick,
    required this.onPickUnfold,
    required this.onClose,
  });

  final ValueChanged<_SimMeta> onPick;
  final ValueChanged<_UnfoldMeta> onPickUnfold;
  final VoidCallback onClose;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 12, 12, 8),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'SYSTEM · MAINFRAME',
                        style: TextStyle(
                          color: const Color(0xFF34D399).withValues(alpha: 0.9),
                          fontWeight: FontWeight.w900,
                          letterSpacing: 1.5,
                          fontSize: 11,
                        ),
                      ),
                      const SizedBox(height: 6),
                      const Text(
                        'CORE PROTOCOL',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 26,
                          fontWeight: FontWeight.w900,
                          letterSpacing: 1.8,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Pick a simulation — drag your finger to run it',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.62),
                          fontSize: 13,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
                IconButton(
                  onPressed: onClose,
                  icon: Icon(
                    Icons.close_rounded,
                    color: Colors.white.withValues(alpha: 0.75),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 28),
              children: [
                GridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    mainAxisSpacing: 12,
                    crossAxisSpacing: 12,
                    childAspectRatio: 0.92,
                  ),
                  itemCount: _kSims.length,
                  itemBuilder: (context, i) {
                    final s = _kSims[i];
                    return _SimPickTile(meta: s, onTap: () => onPick(s));
                  },
                ),
                const SizedBox(height: 26),
                Padding(
                  padding: const EdgeInsets.only(left: 4, bottom: 4),
                  child: Row(
                    children: [
                      const Text(
                        'UNFOLD SEQUENCES',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          letterSpacing: 1.4,
                          fontSize: 13,
                        ),
                      ),
                      const Spacer(),
                      Text(
                        'Tap to watch · tap to exit',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.38),
                          fontSize: 11,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 8),
                for (final s in _kUnfoldSims)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: SizedBox(
                      height: 160,
                      child: _UnfoldPickTile(
                        meta: s,
                        onTap: () => onPickUnfold(s),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _SimPickTile extends StatelessWidget {
  const _SimPickTile({required this.meta, required this.onTap});

  final _SimMeta meta;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                meta.colors.first.withValues(alpha: 0.2),
                const Color(0xFF0B1220),
                meta.colors.last.withValues(alpha: 0.12),
              ],
            ),
            border: Border.all(
              color: meta.colors.first.withValues(alpha: 0.45),
            ),
            boxShadow: [
              BoxShadow(
                color: meta.colors.first.withValues(alpha: 0.16),
                blurRadius: 14,
                offset: const Offset(0, 6),
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 14, 12, 12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(colors: meta.colors),
                    boxShadow: [
                      BoxShadow(
                        color: meta.colors.first.withValues(alpha: 0.4),
                        blurRadius: 10,
                      ),
                    ],
                  ),
                  child: Icon(meta.icon, color: Colors.white, size: 22),
                ),
                const Spacer(),
                Text(
                  meta.title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w900,
                    fontSize: 13,
                    letterSpacing: 0.8,
                    height: 1.15,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  meta.blurb,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.58),
                    fontSize: 11,
                    fontWeight: FontWeight.w600,
                    height: 1.2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _UnfoldPickTile extends StatelessWidget {
  const _UnfoldPickTile({required this.meta, required this.onTap});

  final _UnfoldMeta meta;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                meta.colors.first.withValues(alpha: 0.2),
                const Color(0xFF0B1220),
                meta.colors.last.withValues(alpha: 0.12),
              ],
            ),
            border: Border.all(
              color: meta.colors.first.withValues(alpha: 0.45),
            ),
            boxShadow: [
              BoxShadow(
                color: meta.colors.first.withValues(alpha: 0.16),
                blurRadius: 14,
                offset: const Offset(0, 6),
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 14, 12, 12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    for (var i = 0; i < meta.icons.length; i++)
                      Padding(
                        padding: EdgeInsets.only(left: i == 0 ? 0 : 6),
                        child: Transform.rotate(
                          angle: 0.7854, // 45°
                          child: Container(
                            width: 26,
                            height: 26,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(7),
                              gradient: LinearGradient(colors: meta.colors),
                              boxShadow: [
                                BoxShadow(
                                  color: meta.colors.first.withValues(
                                    alpha: 0.4,
                                  ),
                                  blurRadius: 8,
                                ),
                              ],
                            ),
                            child: Transform.rotate(
                              angle: -0.7854,
                              child: Icon(
                                meta.icons[i],
                                color: Colors.white,
                                size: 13,
                              ),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
                const Spacer(),
                Text(
                  meta.title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w900,
                    fontSize: 13,
                    letterSpacing: 0.8,
                    height: 1.15,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  meta.blurb,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.58),
                    fontSize: 11,
                    fontWeight: FontWeight.w600,
                    height: 1.2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ── Interactive canvas ──────────────────────────────────────────────────────

class _ProtocolSimCanvas extends StatefulWidget {
  const _ProtocolSimCanvas({required this.meta, required this.onExit});

  final _SimMeta meta;

  /// Leave simulation with no on-screen chrome (device back / long-press).
  final VoidCallback onExit;

  @override
  State<_ProtocolSimCanvas> createState() => _ProtocolSimCanvasState();
}

class _ProtocolSimCanvasState extends State<_ProtocolSimCanvas>
    with SingleTickerProviderStateMixin {
  late final Ticker _ticker;
  Duration _elapsed = Duration.zero;
  Offset? _finger;
  final List<_TrailPoint> _trail = [];
  final List<_Burst> _bursts = [];
  final List<_EnergizedNode> _nodes = [];
  double _orbitPull = 0;
  Offset _orbitAim = Offset.zero;
  final Set<int> _hexLit = {};
  double _fluxAngle = 0;
  int _echoCount = 0;

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((d) {
      _elapsed = d;
      _decayTrail();
      if (mounted) setState(() {});
    })..start();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }

  void _decayTrail() {
    final now = _elapsed.inMilliseconds;
    _trail.removeWhere((p) => now - p.bornMs > 1400);
    _bursts.removeWhere((b) => now - b.bornMs > 1800);
    _nodes.removeWhere((n) => now - n.bornMs > 2200);
  }

  void _onDown(Offset p) {
    _finger = p;
    _pushTrail(p, force: 1);
    _spawnBurst(p);
    _energizeNear(p);
    _lightHex(p);
    _echoCount++;
  }

  void _onMove(Offset p) {
    final prev = _finger;
    _finger = p;
    final force = prev == null ? 0.6 : (p - prev).distance.clamp(0.5, 28) / 28;
    _pushTrail(p, force: force);
    if (force > 0.35) _spawnBurst(p, small: true);
    _energizeNear(p);
    _lightHex(p);
    if (prev != null) {
      final d = p - prev;
      _fluxAngle = math.atan2(d.dy, d.dx);
    }
    final size = MediaQuery.sizeOf(context);
    final c = Offset(size.width / 2, size.height * 0.48);
    _orbitAim = p - c;
    _orbitPull = (_orbitAim.distance / (size.shortestSide * 0.42)).clamp(
      0.0,
      1.0,
    );
  }

  void _onUp() {
    if (_finger != null) _spawnBurst(_finger!);
    _finger = null;
  }

  void _pushTrail(Offset p, {required double force}) {
    _trail.add(_TrailPoint(p, _elapsed.inMilliseconds, force));
    if (_trail.length > 120) _trail.removeRange(0, _trail.length - 120);
  }

  void _spawnBurst(Offset p, {bool small = false}) {
    _bursts.add(_Burst(p, _elapsed.inMilliseconds, small ? 0.55 : 1.0));
    if (_bursts.length > 24) _bursts.removeAt(0);
  }

  void _energizeNear(Offset p) {
    const cols = 8;
    const rows = 12;
    final size = MediaQuery.sizeOf(context);
    final cellW = size.width / (cols + 1);
    final cellH = size.height / (rows + 1);
    for (var r = 1; r <= rows; r++) {
      for (var c = 1; c <= cols; c++) {
        final o = Offset(c * cellW, r * cellH);
        if ((o - p).distance < 56) {
          _nodes.add(_EnergizedNode(o, _elapsed.inMilliseconds));
        }
      }
    }
    if (_nodes.length > 80) _nodes.removeRange(0, _nodes.length - 80);
  }

  void _lightHex(Offset p) {
    const n = 42;
    final size = MediaQuery.sizeOf(context);
    final cx = size.width / 2;
    final cy = size.height * 0.48;
    final R = size.shortestSide * 0.095;
    for (var i = 0; i < n; i++) {
      final ring = (i / 7).floor();
      final slot = i % 7;
      final a = slot * (math.pi * 2 / 7) + ring * 0.22;
      final d = ring * R * 1.75;
      final o = Offset(cx + math.cos(a) * d, cy + math.sin(a) * d);
      if ((o - p).distance < R * 0.95) {
        _hexLit.add(i);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final t = _elapsed.inMilliseconds / 1000.0;
    final meta = widget.meta;
    // No visible buttons inside a simulation — long-press returns to the hub.
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onPanStart: (d) => _onDown(d.localPosition),
      onPanUpdate: (d) => _onMove(d.localPosition),
      onPanEnd: (_) => _onUp(),
      onPanCancel: _onUp,
      onTapDown: (d) => _onDown(d.localPosition),
      onLongPress: widget.onExit,
      child: CustomPaint(
        painter: _ProtocolPainter(
          kind: meta.kind,
          colors: meta.colors,
          time: t,
          finger: _finger,
          trail: List<_TrailPoint>.from(_trail),
          bursts: List<_Burst>.from(_bursts),
          nodes: List<_EnergizedNode>.from(_nodes),
          orbitPull: _orbitPull,
          orbitAim: _orbitAim,
          hexLit: Set<int>.from(_hexLit),
          fluxAngle: _fluxAngle,
          echoCount: _echoCount,
        ),
        child: const SizedBox.expand(),
      ),
    );
  }
}

class _TrailPoint {
  _TrailPoint(this.p, this.bornMs, this.force);
  final Offset p;
  final int bornMs;
  final double force;
}

class _Burst {
  _Burst(this.p, this.bornMs, this.power);
  final Offset p;
  final int bornMs;
  final double power;
}

class _EnergizedNode {
  _EnergizedNode(this.p, this.bornMs);
  final Offset p;
  final int bornMs;
}

class _ProtocolPainter extends CustomPainter {
  _ProtocolPainter({
    required this.kind,
    required this.colors,
    required this.time,
    required this.finger,
    required this.trail,
    required this.bursts,
    required this.nodes,
    required this.orbitPull,
    required this.orbitAim,
    required this.hexLit,
    required this.fluxAngle,
    required this.echoCount,
  });

  final _ProtocolSimKind kind;
  final List<Color> colors;
  final double time;
  final Offset? finger;
  final List<_TrailPoint> trail;
  final List<_Burst> bursts;
  final List<_EnergizedNode> nodes;
  final double orbitPull;
  final Offset orbitAim;
  final Set<int> hexLit;
  final double fluxAngle;
  final int echoCount;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.48);
    switch (kind) {
      case _ProtocolSimKind.pulseWeave:
        _paintPulseWeave(canvas, size, c);
        break;
      case _ProtocolSimKind.signalLattice:
        _paintSignalLattice(canvas, size, c);
        break;
      case _ProtocolSimKind.orbitHandler:
        _paintOrbitHandler(canvas, size, c);
        break;
      case _ProtocolSimKind.hexHandshake:
        _paintHexHandshake(canvas, size, c);
        break;
      case _ProtocolSimKind.fluxStream:
        _paintFluxStream(canvas, size, c);
        break;
      case _ProtocolSimKind.echoField:
        _paintEchoField(canvas, size, c);
        break;
      case _ProtocolSimKind.liquidCore:
        _paintLiquidCore(canvas, size, c);
        break;
      case _ProtocolSimKind.tidalPool:
        _paintTidalPool(canvas, size, c);
        break;
      case _ProtocolSimKind.mercuryDrag:
        _paintMercuryDrag(canvas, size, c);
        break;
      case _ProtocolSimKind.vortexFluid:
        _paintVortexFluid(canvas, size, c);
        break;
    }
    _paintFingerGlow(canvas);
  }

  void _paintFingerGlow(Canvas canvas) {
    final f = finger;
    if (f == null) return;
    canvas.drawCircle(
      f,
      18 + math.sin(time * 8) * 3,
      Paint()
        ..color = colors.first.withValues(alpha: 0.35)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 16),
    );
    canvas.drawCircle(
      f,
      5,
      Paint()..color = Colors.white.withValues(alpha: 0.9),
    );
  }

  void _paintPulseWeave(Canvas canvas, Size size, Offset c) {
    _drawCore(canvas, c, 46, time);
    if (trail.length >= 2) {
      final path = Path()..moveTo(trail.first.p.dx, trail.first.p.dy);
      for (var i = 1; i < trail.length; i++) {
        path.lineTo(trail[i].p.dx, trail[i].p.dy);
      }
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 4.5
          ..strokeCap = StrokeCap.round
          ..strokeJoin = StrokeJoin.round
          ..shader = ui.Gradient.linear(
            trail.first.p,
            trail.last.p,
            [colors.first, colors.last, Colors.white],
            const [0, 0.55, 1],
          )
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2),
      );
    }
    for (final p in trail) {
      final age = ((_elapsedMs - p.bornMs) / 1400).clamp(0.0, 1.0);
      final r = 4 + p.force * 10 * (1 - age);
      canvas.drawCircle(
        p.p,
        r,
        Paint()
          ..color = Color.lerp(
            colors.first,
            colors.last,
            p.force,
          )!.withValues(alpha: 0.75 * (1 - age)),
      );
    }
    for (final b in bursts) {
      final age = ((_elapsedMs - b.bornMs) / 1800).clamp(0.0, 1.0);
      final r = 12 + age * 70 * b.power;
      canvas.drawCircle(
        b.p,
        r,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.2 * (1 - age)
          ..color = colors.first.withValues(alpha: 0.7 * (1 - age)),
      );
    }
  }

  void _paintSignalLattice(Canvas canvas, Size size, Offset c) {
    const cols = 8;
    const rows = 12;
    final cellW = size.width / (cols + 1);
    final cellH = size.height / (rows + 1);
    final pts = <Offset>[];
    for (var r = 1; r <= rows; r++) {
      for (var col = 1; col <= cols; col++) {
        pts.add(Offset(col * cellW, r * cellH));
      }
    }
    final line = Paint()
      ..color = colors.first.withValues(alpha: 0.18)
      ..strokeWidth = 1;
    for (var r = 0; r < rows; r++) {
      for (var col = 0; col < cols; col++) {
        final i = r * cols + col;
        if (col < cols - 1) canvas.drawLine(pts[i], pts[i + 1], line);
        if (r < rows - 1) canvas.drawLine(pts[i], pts[i + cols], line);
      }
    }
    for (final n in nodes) {
      final age = ((_elapsedMs - n.bornMs) / 2200).clamp(0.0, 1.0);
      canvas.drawCircle(
        n.p,
        5 + (1 - age) * 6,
        Paint()
          ..color = colors.last.withValues(alpha: 0.85 * (1 - age))
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6),
      );
      canvas.drawCircle(
        n.p,
        3,
        Paint()..color = Colors.white.withValues(alpha: 0.9 * (1 - age)),
      );
    }
    for (final p in pts) {
      canvas.drawCircle(
        p,
        2.2,
        Paint()..color = colors.first.withValues(alpha: 0.35),
      );
    }
    if (finger != null && trail.length >= 2) {
      final path = Path()..moveTo(trail.first.p.dx, trail.first.p.dy);
      for (var i = 1; i < trail.length; i++) {
        path.lineTo(trail[i].p.dx, trail[i].p.dy);
      }
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.4
          ..color = colors.last.withValues(alpha: 0.7),
      );
    }
    _drawCore(canvas, c, 36, time);
  }

  void _paintOrbitHandler(Canvas canvas, Size size, Offset c) {
    final aim = orbitAim == Offset.zero ? Offset(1, 0) : orbitAim;
    final pull = orbitPull;
    final baseR = size.shortestSide * 0.12;
    for (var ring = 1; ring <= 4; ring++) {
      final rr = baseR * ring * (1 + pull * 0.35);
      canvas.drawCircle(
        c,
        rr,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2
          ..color = colors.first.withValues(alpha: 0.22 + pull * 0.2),
      );
      for (var i = 0; i < 6 + ring * 2; i++) {
        final a =
            time * (0.6 + ring * 0.25) +
            i * (math.pi * 2 / (6 + ring * 2)) +
            pull;
        final o = Offset(c.dx + math.cos(a) * rr, c.dy + math.sin(a) * rr);
        final toward = Offset(
          o.dx + aim.dx * 0.04 * pull,
          o.dy + aim.dy * 0.04 * pull,
        );
        canvas.drawCircle(
          toward,
          2.5 + pull * 2,
          Paint()..color = Color.lerp(colors.first, colors.last, i / 8)!,
        );
      }
    }
    if (finger != null) {
      canvas.drawLine(
        c,
        finger!,
        Paint()
          ..color = colors.last.withValues(alpha: 0.45)
          ..strokeWidth = 1.6,
      );
    }
    _drawCore(canvas, c, 42 + pull * 10, time);
  }

  void _paintHexHandshake(Canvas canvas, Size size, Offset c) {
    const n = 42;
    final R = size.shortestSide * 0.095;
    for (var i = 0; i < n; i++) {
      final ring = (i / 7).floor();
      final slot = i % 7;
      final a = slot * (math.pi * 2 / 7) + ring * 0.22;
      final d = ring * R * 1.75;
      final o = ring == 0
          ? c
          : Offset(c.dx + math.cos(a) * d, c.dy + math.sin(a) * d);
      final lit = hexLit.contains(i) || ring == 0;
      _drawHex(
        canvas,
        o,
        R * 0.72,
        fill: lit
            ? colors.first.withValues(alpha: 0.35)
            : colors.first.withValues(alpha: 0.06),
        stroke: lit ? colors.last : colors.first.withValues(alpha: 0.35),
        pulse: lit ? 0.5 + 0.5 * math.sin(time * 6 + i) : 0,
      );
    }
    if (trail.length >= 2) {
      for (var i = 1; i < trail.length; i++) {
        canvas.drawLine(
          trail[i - 1].p,
          trail[i].p,
          Paint()
            ..color = colors.last.withValues(alpha: 0.45)
            ..strokeWidth = 2,
        );
      }
    }
  }

  void _paintFluxStream(Canvas canvas, Size size, Offset c) {
    final bands = 9;
    for (var b = 0; b < bands; b++) {
      final path = Path();
      final y0 = size.height * (0.18 + b * 0.075);
      path.moveTo(0, y0);
      for (var x = 0.0; x <= size.width; x += 10) {
        final phase = time * 2.2 + b * 0.55 + x * 0.02;
        var y = y0 + math.sin(phase) * (10 + b * 1.5);
        if (finger != null) {
          final dx = (x - finger!.dx).abs();
          final influence = math.exp(-dx / 90);
          y += math.sin(fluxAngle) * 28 * influence;
          y += math.cos(phase + fluxAngle) * 8 * influence;
        }
        path.lineTo(x, y);
      }
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.1
          ..color = Color.lerp(
            colors.first,
            colors.last,
            b / bands,
          )!.withValues(alpha: 0.55),
      );
    }
    for (final p in trail) {
      final age = ((_elapsedMs - p.bornMs) / 1400).clamp(0.0, 1.0);
      canvas.drawCircle(
        p.p,
        3 + p.force * 5,
        Paint()..color = Colors.white.withValues(alpha: 0.55 * (1 - age)),
      );
    }
    _drawCore(canvas, c, 34, time);
  }

  void _paintEchoField(Canvas canvas, Size size, Offset c) {
    _drawCore(canvas, c, 40, time);
    final origins = <Offset>[c, ...bursts.map((b) => b.p)];
    if (finger != null) origins.add(finger!);
    for (var oi = 0; oi < origins.length; oi++) {
      final o = origins[oi];
      for (var ring = 0; ring < 5; ring++) {
        final phase =
            (time * 1.4 + ring * 0.35 + oi * 0.2 + echoCount * 0.05) % 1.0;
        final r = 20 + phase * size.shortestSide * 0.55;
        canvas.drawCircle(
          o,
          r,
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2 * (1 - phase)
            ..color = Color.lerp(
              colors.first,
              colors.last,
              phase,
            )!.withValues(alpha: 0.55 * (1 - phase)),
        );
      }
    }
    for (final p in trail) {
      final age = ((_elapsedMs - p.bornMs) / 1400).clamp(0.0, 1.0);
      canvas.drawCircle(
        p.p,
        2.5,
        Paint()..color = colors.last.withValues(alpha: 0.7 * (1 - age)),
      );
    }
  }

  void _paintLiquidCore(Canvas canvas, Size size, Offset c) {
    final target = finger ?? c;
    final blob = Offset(
      c.dx + (target.dx - c.dx) * 0.55,
      c.dy + (target.dy - c.dy) * 0.55,
    );
    final baseR = size.shortestSide * 0.16;
    for (var layer = 4; layer >= 1; layer--) {
      final path = Path();
      const steps = 36;
      for (var i = 0; i <= steps; i++) {
        final a = (i / steps) * math.pi * 2;
        final wobble =
            1 +
            0.12 * math.sin(a * 3 + time * 2.4) +
            0.08 * math.sin(a * 5 - time * 1.6) +
            (finger != null
                ? 0.1 *
                      math.cos(
                        a -
                            math.atan2(
                              target.dy - blob.dy,
                              target.dx - blob.dx,
                            ),
                      )
                : 0);
        final r = (baseR + layer * 10) * wobble;
        final p = Offset(blob.dx + math.cos(a) * r, blob.dy + math.sin(a) * r);
        if (i == 0) {
          path.moveTo(p.dx, p.dy);
        } else {
          path.lineTo(p.dx, p.dy);
        }
      }
      path.close();
      canvas.drawPath(
        path,
        Paint()
          ..color = Color.lerp(
            colors.first,
            colors.last,
            layer / 4,
          )!.withValues(alpha: 0.18 + layer * 0.08)
          ..maskFilter = MaskFilter.blur(
            BlurStyle.normal,
            layer == 1 ? 2 : 8.0,
          ),
      );
      if (layer == 1) {
        canvas.drawPath(
          path,
          Paint()
            ..shader = RadialGradient(
              colors: [
                Colors.white.withValues(alpha: 0.55),
                colors.first.withValues(alpha: 0.75),
                colors.last.withValues(alpha: 0.35),
              ],
            ).createShader(Rect.fromCircle(center: blob, radius: baseR * 1.3)),
        );
      }
    }
    for (final b in bursts) {
      final age = ((_elapsedMs - b.bornMs) / 1800).clamp(0.0, 1.0);
      canvas.drawCircle(
        b.p,
        8 + age * 40 * b.power,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.4 * (1 - age)
          ..color = colors.first.withValues(alpha: 0.55 * (1 - age)),
      );
    }
  }

  void _paintTidalPool(Canvas canvas, Size size, Offset c) {
    // Soft water floor
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            colors.last.withValues(alpha: 0.08),
            colors.first.withValues(alpha: 0.14),
            const Color(0xFF030712),
          ],
        ).createShader(Offset.zero & size),
    );
    for (var i = 0; i < 7; i++) {
      final y = size.height * (0.2 + i * 0.1);
      final path = Path()..moveTo(0, y);
      for (var x = 0.0; x <= size.width; x += 8) {
        path.lineTo(x, y + math.sin(time * 1.8 + x * 0.03 + i) * 6);
      }
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2
          ..color = colors.first.withValues(alpha: 0.2),
      );
    }
    for (final b in bursts) {
      final age = ((_elapsedMs - b.bornMs) / 1800).clamp(0.0, 1.0);
      for (var ring = 0; ring < 4; ring++) {
        final phase = (age + ring * 0.12).clamp(0.0, 1.0);
        canvas.drawCircle(
          b.p,
          10 + phase * 90 * b.power,
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2.6 * (1 - phase)
            ..color = Color.lerp(
              colors.first,
              colors.last,
              phase,
            )!.withValues(alpha: 0.65 * (1 - phase)),
        );
      }
    }
    if (finger != null) {
      for (var ring = 0; ring < 3; ring++) {
        final phase = (time * 1.5 + ring * 0.33) % 1.0;
        canvas.drawCircle(
          finger!,
          16 + phase * 70,
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2 * (1 - phase)
            ..color = colors.last.withValues(alpha: 0.5 * (1 - phase)),
        );
      }
    }
    _drawCore(canvas, c, 28, time);
  }

  void _paintMercuryDrag(Canvas canvas, Size size, Offset c) {
    _drawCore(canvas, c, 32, time);
    if (trail.isEmpty) return;
    for (var i = 0; i < trail.length; i++) {
      final p = trail[i];
      final age = ((_elapsedMs - p.bornMs) / 1400).clamp(0.0, 1.0);
      final r = 6 + p.force * 14 * (1 - age) + math.sin(time * 6 + i) * 1.5;
      canvas.drawCircle(
        p.p,
        r,
        Paint()
          ..shader = RadialGradient(
            colors: [
              Colors.white.withValues(alpha: 0.9 * (1 - age)),
              colors.first.withValues(alpha: 0.75 * (1 - age)),
              colors.last.withValues(alpha: 0.2 * (1 - age)),
            ],
          ).createShader(Rect.fromCircle(center: p.p, radius: r)),
      );
      if (i > 0) {
        final prev = trail[i - 1].p;
        canvas.drawLine(
          prev,
          p.p,
          Paint()
            ..strokeWidth = (r * 0.85).clamp(2.0, 16.0)
            ..strokeCap = StrokeCap.round
            ..color = colors.first.withValues(alpha: 0.45 * (1 - age))
            ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 3),
        );
      }
    }
    for (final b in bursts) {
      final age = ((_elapsedMs - b.bornMs) / 1800).clamp(0.0, 1.0);
      canvas.drawCircle(
        b.p,
        10 + (1 - age) * 18 * b.power,
        Paint()
          ..color = Colors.white.withValues(alpha: 0.35 * (1 - age))
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8),
      );
    }
  }

  void _paintVortexFluid(Canvas canvas, Size size, Offset c) {
    final center = finger ?? c;
    final arms = 7;
    for (var arm = 0; arm < arms; arm++) {
      final path = Path();
      for (var s = 0; s < 48; s++) {
        final t = s / 47;
        final a = time * 2.2 + arm * (math.pi * 2 / arms) + t * 4.2;
        final r =
            18 +
            t * size.shortestSide * 0.42 * (0.85 + 0.15 * math.sin(time + arm));
        final p = Offset(
          center.dx + math.cos(a) * r,
          center.dy + math.sin(a) * r,
        );
        if (s == 0) {
          path.moveTo(p.dx, p.dy);
        } else {
          path.lineTo(p.dx, p.dy);
        }
      }
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.4
          ..strokeCap = StrokeCap.round
          ..color = Color.lerp(
            colors.first,
            colors.last,
            arm / arms,
          )!.withValues(alpha: 0.55)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 1.5),
      );
    }
    for (final p in trail) {
      final age = ((_elapsedMs - p.bornMs) / 1400).clamp(0.0, 1.0);
      canvas.drawCircle(
        p.p,
        3 + p.force * 4,
        Paint()..color = colors.first.withValues(alpha: 0.65 * (1 - age)),
      );
    }
    canvas.drawCircle(
      center,
      22 + math.sin(time * 5) * 3,
      Paint()
        ..shader = RadialGradient(
          colors: [
            Colors.white.withValues(alpha: 0.7),
            colors.first.withValues(alpha: 0.8),
            colors.last.withValues(alpha: 0.0),
          ],
        ).createShader(Rect.fromCircle(center: center, radius: 40)),
    );
  }

  int get _elapsedMs => (time * 1000).round();

  void _drawCore(Canvas canvas, Offset c, double radius, double t) {
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        radius + i * 8 + math.sin(t * 3) * 2,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: 0.12 * i),
      );
    }
    canvas.drawCircle(
      c,
      radius,
      Paint()
        ..shader = RadialGradient(
          colors: [
            Colors.white.withValues(alpha: 0.55),
            colors.first.withValues(alpha: 0.85),
            colors.last.withValues(alpha: 0.5),
          ],
        ).createShader(Rect.fromCircle(center: c, radius: radius)),
    );
    canvas.drawCircle(
      c,
      radius + 2,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = Colors.white.withValues(alpha: 0.55),
    );
  }

  void _drawHex(
    Canvas canvas,
    Offset c,
    double r, {
    required Color fill,
    required Color stroke,
    required double pulse,
  }) {
    final path = Path();
    for (var i = 0; i < 6; i++) {
      final a = -math.pi / 2 + i * math.pi / 3;
      final p = Offset(
        c.dx + math.cos(a) * (r + pulse * 2),
        c.dy + math.sin(a) * (r + pulse * 2),
      );
      if (i == 0) {
        path.moveTo(p.dx, p.dy);
      } else {
        path.lineTo(p.dx, p.dy);
      }
    }
    path.close();
    canvas.drawPath(path, Paint()..color = fill);
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.4
        ..color = stroke.withValues(alpha: 0.85),
    );
  }

  @override
  bool shouldRepaint(covariant _ProtocolPainter old) => true;
}

// ── Unfold reveal canvas ─────────────────────────────────────────────────────

/// Fullscreen auto-playing reveal: stage 1 unfolds, a glowing link draws
/// down to stage 2, it unfolds, a link draws to stage 3, it unfolds — then
/// a hold, a soft fade, and the loop repeats. Tap anywhere to exit.
class _UnfoldSimCanvas extends StatefulWidget {
  const _UnfoldSimCanvas({required this.meta, required this.onExit});

  final _UnfoldMeta meta;
  final VoidCallback onExit;

  @override
  State<_UnfoldSimCanvas> createState() => _UnfoldSimCanvasState();
}

class _UnfoldSimCanvasState extends State<_UnfoldSimCanvas>
    with TickerProviderStateMixin {
  late final AnimationController _seq;
  late final AnimationController _pulse;

  // The big ad box lives fixed at the bottom the whole time. Mail and SMS
  // are "born" there — they spawn small, tucked behind it — then rise to
  // their own slot up top, one at a time.
  static const double _topY = 0;
  static const double _midY = 156;
  static const double _botY = 300;
  static const double _adWidth = 188.0;
  static const double _boxWidth = 104.0;
  static const double _adTotalH = _adWidth * 0.62 + _adWidth * 0.16;
  static const double _stackHeight = _botY + _adTotalH;
  static const double _stackWidth = 340;

  @override
  void initState() {
    super.initState();
    // Slow, deliberate pacing — this is meant to read like a polished ad,
    // not a quick UI transition.
    _seq = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 6600),
    )..repeat();
    _pulse = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1900),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _seq.dispose();
    _pulse.dispose();
    super.dispose();
  }

  double _seg(double t, double start, double end) =>
      ((t - start) / (end - start)).clamp(0.0, 1.0);

  /// Returns (y, scale, riseProgress) for a box that's born (pops in small)
  /// at the bottom slot during [bornStart]-[bornEnd], then rises to [home]
  /// during [riseStart]-[riseEnd]. [riseProgress] also drives the trailing
  /// link so the glow travels up in lockstep with the box itself.
  (double, double, double) _riseState(
    double t, {
    required double bornStart,
    required double bornEnd,
    required double riseStart,
    required double riseEnd,
    required double home,
  }) {
    if (t < bornStart) return (_botY, 0.0, 0.0);
    final born = Curves.easeOutBack.transform(_seg(t, bornStart, bornEnd));
    if (t < riseStart) return (_botY, born.clamp(0.0, 1.0), 0.0);
    final rise = Curves.easeInOutCubic.transform(_seg(t, riseStart, riseEnd));
    final y = _botY + (home - _botY) * rise;
    return (y, 1.0, rise);
  }

  @override
  Widget build(BuildContext context) {
    final meta = widget.meta;
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: widget.onExit,
      child: SizedBox.expand(
        child: AnimatedBuilder(
          animation: Listenable.merge([_seq, _pulse]),
          builder: (context, _) {
            final t = _seq.value;
            final pulse = Curves.easeInOut.transform(_pulse.value);
            // Hold everything from ~0.83–0.92, then fade out before the loop restarts.
            final holdFade = t < 0.83 ? 1.0 : 1.0 - _seg(t, 0.83, 0.92);
            final restartGap = t > 0.98
                ? 0.0
                : 1.0; // fully hidden briefly before replay
            final fade = holdFade * restartGap;

            final (mailY, mailScale, mailRise) = _riseState(
              t,
              bornStart: 0.05,
              bornEnd: 0.12,
              riseStart: 0.12,
              riseEnd: 0.40,
              home: _topY,
            );
            final (smsY, smsScale, smsRise) = _riseState(
              t,
              bornStart: 0.46,
              bornEnd: 0.53,
              riseStart: 0.53,
              riseEnd: 0.81,
              home: _midY,
            );

            return Stack(
              fit: StackFit.expand,
              children: [
                Container(color: const Color(0xFF030712)),
                _UnfoldGlowBackdrop(color: meta.glow, pulse: pulse),
                Center(
                  child: SizedBox(
                    width: _stackWidth,
                    height: _stackHeight,
                    child: Stack(
                      clipBehavior: Clip.none,
                      children: [
                        // The big box — fixed, always present, everything else is born from it.
                        Positioned(
                          top: _botY,
                          left: 0,
                          right: 0,
                          child: Center(
                            child: _UnfoldBox3D(
                              icon: meta.icons[2],
                              colors: meta.colors,
                              width: _adWidth,
                              opacity: fade,
                              scale: 1,
                              pulse: pulse,
                              isFinal: true,
                            ),
                          ),
                        ),
                        // Trailing glow links — drawn in lockstep with each box's rise.
                        Positioned(
                          top: _topY,
                          left: 0,
                          right: 0,
                          height: _botY - _topY,
                          child: _UnfoldLink(
                            colors: meta.colors,
                            progress: mailRise * fade,
                          ),
                        ),
                        Positioned(
                          top: _midY,
                          left: 0,
                          right: 0,
                          height: _botY - _midY,
                          child: _UnfoldLink(
                            colors: meta.colors,
                            progress: smsRise * fade,
                          ),
                        ),
                        Positioned(
                          top: mailY,
                          left: 0,
                          right: 0,
                          child: Center(
                            child: _UnfoldBox3D(
                              icon: meta.icons[0],
                              colors: meta.colors,
                              width: _boxWidth,
                              opacity: mailScale * fade,
                              scale: mailScale,
                              pulse: pulse,
                            ),
                          ),
                        ),
                        Positioned(
                          top: smsY,
                          left: 0,
                          right: 0,
                          child: Center(
                            child: _UnfoldBox3D(
                              icon: meta.icons[1],
                              colors: meta.colors,
                              width: _boxWidth,
                              opacity: smsScale * fade,
                              scale: smsScale,
                              pulse: pulse,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Positioned(
                  left: 0,
                  right: 0,
                  top: 0,
                  child: SafeArea(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20, 14, 20, 0),
                      child: Opacity(
                        opacity: 0.85,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              meta.title,
                              style: TextStyle(
                                color: meta.glow,
                                fontWeight: FontWeight.w900,
                                letterSpacing: 1.6,
                                fontSize: 13,
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              'Tap anywhere to exit',
                              style: TextStyle(
                                color: Colors.white.withValues(alpha: 0.35),
                                fontSize: 11,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ],
                        ),
                      ),
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
}

/// A soft radial wash behind the stack, breathing with [pulse].
class _UnfoldGlowBackdrop extends StatelessWidget {
  const _UnfoldGlowBackdrop({required this.color, required this.pulse});
  final Color color;
  final double pulse;

  @override
  Widget build(BuildContext context) => CustomPaint(
    painter: _UnfoldGlowPainter(color: color, pulse: pulse),
  );
}

class _UnfoldGlowPainter extends CustomPainter {
  _UnfoldGlowPainter({required this.color, required this.pulse});
  final Color color;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.46);
    final r = size.shortestSide * (0.42 + pulse * 0.05);
    final paint = Paint()
      ..shader = RadialGradient(
        colors: [
          color.withValues(alpha: 0.16 + pulse * 0.06),
          Colors.transparent,
        ],
      ).createShader(Rect.fromCircle(center: c, radius: r));
    canvas.drawCircle(c, r, paint);
  }

  @override
  bool shouldRepaint(covariant _UnfoldGlowPainter old) =>
      old.pulse != pulse || old.color != color;
}

/// Rounds the corners of an arbitrary polygon by clipping [radius] in from
/// each vertex along its adjacent edges and joining the cut with a quad
/// curve — used to give the isometric box faces their soft "cut glass" edges.
ui.Path _roundedPolygonPath(List<Offset> pts, double radius) {
  final path = ui.Path();
  final n = pts.length;
  for (var i = 0; i < n; i++) {
    final prev = pts[(i - 1 + n) % n];
    final curr = pts[i];
    final next = pts[(i + 1) % n];
    final toPrev = prev - curr;
    final toNext = next - curr;
    final d1 = toPrev.distance, d2 = toNext.distance;
    final r = math.min(radius, math.min(d1, d2) / 2);
    final p1 = curr + toPrev * (d1 == 0 ? 0 : r / d1);
    final p2 = curr + toNext * (d2 == 0 ? 0 : r / d2);
    if (i == 0) {
      path.moveTo(p1.dx, p1.dy);
    } else {
      path.lineTo(p1.dx, p1.dy);
    }
    path.quadraticBezierTo(curr.dx, curr.dy, p2.dx, p2.dy);
  }
  path.close();
  return path;
}

/// A genuine isometric 3D box — a rounded diamond top face plus two shaded
/// side faces extruded downward, like a real cut-glass block viewed at an
/// angle (matching the reference ad mock). The first two stages are clear
/// frosted glass, the final stage ([isFinal]) is the solid-color "ad"
/// payload with a NEW ribbon, like real content sitting inside the glass.
class _IsoBoxPainter extends CustomPainter {
  _IsoBoxPainter({
    required this.colors,
    required this.depth,
    required this.isFinal,
    required this.glowAlpha,
  });

  final List<Color> colors;
  final double depth;
  final bool isFinal;
  final double glowAlpha;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height - depth;
    final cx = w / 2;
    final topTip = Offset(cx, 0);
    final rightTip = Offset(w, h / 2);
    final botTip = Offset(cx, h);
    final leftTip = Offset(0, h / 2);
    Offset down(Offset o) => Offset(o.dx, o.dy + depth);

    final rightFace = ui.Path()
      ..moveTo(rightTip.dx, rightTip.dy)
      ..lineTo(botTip.dx, botTip.dy)
      ..lineTo(down(botTip).dx, down(botTip).dy)
      ..lineTo(down(rightTip).dx, down(rightTip).dy)
      ..close();
    final leftFace = ui.Path()
      ..moveTo(leftTip.dx, leftTip.dy)
      ..lineTo(botTip.dx, botTip.dy)
      ..lineTo(down(botTip).dx, down(botTip).dy)
      ..lineTo(down(leftTip).dx, down(leftTip).dy)
      ..close();

    final base = colors.first;
    final base2 = colors.last;

    canvas.drawPath(
      rightFace,
      Paint()
        ..shader = LinearGradient(
          colors: [
            Color.lerp(base2, Colors.black, 0.42)!,
            Color.lerp(base2, Colors.black, 0.6)!,
          ],
        ).createShader(rightFace.getBounds()),
    );
    canvas.drawPath(
      leftFace,
      Paint()
        ..shader = LinearGradient(
          colors: [
            Color.lerp(base, Colors.black, 0.56)!,
            Color.lerp(base, Colors.black, 0.72)!,
          ],
        ).createShader(leftFace.getBounds()),
    );
    final edgeStroke = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.1
      ..color = Colors.white.withValues(alpha: 0.10);
    canvas.drawPath(rightFace, edgeStroke);
    canvas.drawPath(leftFace, edgeStroke);

    final topPath = _roundedPolygonPath([
      topTip,
      rightTip,
      botTip,
      leftTip,
    ], h * 0.16);

    canvas.drawPath(
      topPath,
      Paint()
        ..color = base.withValues(alpha: glowAlpha)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 26),
    );
    canvas.drawPath(
      topPath,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isFinal
              ? [base.withValues(alpha: 0.90), base2.withValues(alpha: 0.97)]
              : [
                  Colors.white.withValues(alpha: 0.28),
                  Colors.white.withValues(alpha: 0.08),
                  base.withValues(alpha: 0.16),
                ],
        ).createShader(Rect.fromLTWH(0, 0, w, h)),
    );
    canvas.drawPath(
      topPath,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.6
        ..color = Colors.white.withValues(alpha: isFinal ? 0.55 : 0.72),
    );
  }

  @override
  bool shouldRepaint(covariant _IsoBoxPainter old) =>
      old.depth != depth ||
      old.isFinal != isFinal ||
      old.glowAlpha != glowAlpha ||
      old.colors != colors;
}

class _UnfoldBox3D extends StatelessWidget {
  const _UnfoldBox3D({
    required this.icon,
    required this.colors,
    required this.width,
    required this.opacity,
    required this.scale,
    required this.pulse,
    this.isFinal = false,
  });

  final IconData icon;
  final List<Color> colors;
  final double width;
  final double opacity;
  final double scale;
  final double pulse;
  final bool isFinal;

  @override
  Widget build(BuildContext context) {
    final depth = width * 0.16;
    final topH = width * 0.62;
    final totalH = topH + depth;
    if (opacity <= 0.001) return SizedBox(width: width, height: totalH);
    final glowAlpha = (0.30 + pulse * 0.20) * opacity;
    return Opacity(
      opacity: opacity.clamp(0.0, 1.0),
      child: Transform.scale(
        scale: 0.55 + scale * 0.45,
        child: SizedBox(
          width: width,
          height: totalH,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              CustomPaint(
                size: Size(width, totalH),
                painter: _IsoBoxPainter(
                  colors: colors,
                  depth: depth,
                  isFinal: isFinal,
                  glowAlpha: glowAlpha,
                ),
              ),
              Positioned(
                left: 0,
                right: 0,
                top: 0,
                height: topH,
                child: Center(
                  child: Icon(
                    icon,
                    color: Colors.white.withValues(alpha: isFinal ? 1 : 0.94),
                    size: width * 0.30,
                  ),
                ),
              ),
              if (isFinal)
                Positioned(
                  left: width * 0.04,
                  top: topH * 0.08,
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 7,
                      vertical: 2,
                    ),
                    decoration: BoxDecoration(
                      color: const Color(0xFF22C55E),
                      borderRadius: BorderRadius.circular(5),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(0xFF22C55E).withValues(alpha: 0.5),
                          blurRadius: 8,
                        ),
                      ],
                    ),
                    child: const Text(
                      'NEW',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w900,
                        fontSize: 9,
                        letterSpacing: 0.5,
                      ),
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Glowing curved loop connecting two panels, drawn progressively as
/// [progress] goes 0→1 — the "energy flowing to the next stage" beat.
class _UnfoldLink extends StatelessWidget {
  const _UnfoldLink({required this.colors, required this.progress});

  final List<Color> colors;
  final double progress;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 34,
      width: double.infinity,
      child: CustomPaint(
        painter: _UnfoldLinkPainter(colors: colors, progress: progress),
      ),
    );
  }
}

class _UnfoldLinkPainter extends CustomPainter {
  _UnfoldLinkPainter({required this.colors, required this.progress});
  final List<Color> colors;
  final double progress;

  @override
  void paint(Canvas canvas, Size size) {
    if (progress <= 0.001) return;
    final cx = size.width / 2;
    // Starts at the bottom (the big box) and reveals upward — the glow
    // trails behind the box as it rises, growing in lockstep with it.
    final path = Path()
      ..moveTo(cx, size.height)
      ..cubicTo(
        cx + 26,
        size.height * 0.65,
        cx - 26,
        size.height * 0.35,
        cx,
        0,
      );
    final metric = path.computeMetrics().first;
    final drawn = metric.extractPath(0, metric.length * progress);

    final glow = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 7
      ..strokeCap = StrokeCap.round
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6)
      ..shader = LinearGradient(
        colors: colors,
      ).createShader(Offset.zero & size);
    canvas.drawPath(drawn, glow);

    final core = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.2
      ..strokeCap = StrokeCap.round
      ..color = Colors.white.withValues(alpha: 0.9);
    canvas.drawPath(drawn, core);
  }

  @override
  bool shouldRepaint(covariant _UnfoldLinkPainter old) =>
      old.progress != progress || old.colors != colors;
}
