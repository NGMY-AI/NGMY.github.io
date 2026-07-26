import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';

const _mint = Color(0xFF2EF6A3);
const _mintDim = Color(0xFF10B981);
const _cyan = Color(0xFF22D3EE);
const _bg = Color(0xFF05080F);
const _panel = Color(0xFF111827);
const _panel2 = Color(0xFF0F172A);

void showNgmyNeoGlassDashboard({
  required BuildContext context,
  String? userEmail,
  String? displayName,
  double? balance,
}) {
  Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyNeoGlassDashboardPage(
        userEmail: userEmail ?? '',
        displayName: displayName?.trim().isNotEmpty == true ? displayName!.trim() : 'Creator',
        balance: balance,
      ),
    ),
  );
}

class NgmyNeoGlassDashboardPage extends StatefulWidget {
  const NgmyNeoGlassDashboardPage({
    super.key,
    required this.userEmail,
    required this.displayName,
    this.balance,
  });

  final String userEmail;
  final String displayName;
  final double? balance;

  @override
  State<NgmyNeoGlassDashboardPage> createState() => _NgmyNeoGlassDashboardPageState();
}

class _NgmyNeoGlassDashboardPageState extends State<NgmyNeoGlassDashboardPage> with SingleTickerProviderStateMixin {
  late final AnimationController _float;
  int _nav = 0;
  int _range = 0;

  static const _ranges = ['Today', 'Yesterday', '7 Days', 'Month', 'Total'];

  @override
  void initState() {
    super.initState();
    _float = AnimationController(vsync: this, duration: const Duration(milliseconds: 4200))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _float.dispose();
    super.dispose();
  }

  String get _balanceText {
    final b = widget.balance ?? 82417.60;
    final sign = b < 0 ? '-' : '';
    final abs = b.abs();
    final whole = abs.floor();
    final frac = ((abs - whole) * 100).round().clamp(0, 99);
    final wholeStr = whole.toString().replaceAllMapped(RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'), (m) => '${m[1]}.');
    return '$sign\$$wholeStr,${frac.toString().padLeft(2, '0')}';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bg,
      body: Stack(
        children: [
          const Positioned.fill(child: _NeoGridBackground()),
          SafeArea(
            child: Column(
              children: [
                _topBar(context),
                Expanded(
                  child: AnimatedBuilder(
                    animation: _float,
                    builder: (context, child) {
                      final t = Curves.easeInOut.transform(_float.value);
                      final lift = 4 + t * 6;
                      return Transform(
                        alignment: Alignment.center,
                        transform: Matrix4.identity()
                          ..setEntry(3, 2, 0.001)
                          ..translateByDouble(0, -lift, 0, 1)
                          ..rotateX(-0.11)
                          ..rotateY(0.14),
                        child: child,
                      );
                    },
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(10, 0, 10, 12),
                      child: _GlassPlate(
                        padding: EdgeInsets.zero,
                        radius: 22,
                        depth: 28,
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(22),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              _sidebar(),
                              Expanded(child: _mainPanel()),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          _floatingBadge(top: 92, right: 18, label: 'Sync Live', amount: '+ \$128.40'),
          _floatingBadge(top: 148, right: 28, label: 'Vault Pulse', amount: '+ \$64.00'),
        ],
      ),
    );
  }

  Widget _topBar(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(8, 6, 8, 8),
      child: Row(
        children: [
          IconButton(
            onPressed: () => Navigator.pop(context),
            icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20),
          ),
          const Spacer(),
          Text('NGMY NEO', style: TextStyle(color: _mint.withValues(alpha: 0.9), fontWeight: FontWeight.w900, letterSpacing: 2)),
          const Spacer(),
          const SizedBox(width: 48),
        ],
      ),
    );
  }

  Widget _sidebar() {
    const items = [
      (Icons.dashboard_rounded, 'Command'),
      (Icons.account_balance_wallet_rounded, 'Finance'),
      (Icons.hub_rounded, 'Systems'),
      (Icons.tune_rounded, 'Config'),
    ];
    return Container(
      width: 72,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            const Color(0xFF151C28),
            _panel2.withValues(alpha: 0.98),
          ],
        ),
        border: Border(right: BorderSide(color: Colors.white.withValues(alpha: 0.06))),
      ),
      child: Column(
        children: [
          const SizedBox(height: 16),
          Text('NGMY+', style: TextStyle(color: _mint, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 0.6)),
          const SizedBox(height: 20),
          ...List.generate(items.length, (i) {
            final active = _nav == i;
            return Padding(
              padding: const EdgeInsets.symmetric(vertical: 6),
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: () => setState(() => _nav = i),
                  borderRadius: BorderRadius.circular(14),
                  child: Container(
                    width: 52,
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      color: active ? _mint.withValues(alpha: 0.14) : Colors.transparent,
                      border: Border.all(color: active ? _mint.withValues(alpha: 0.45) : Colors.transparent),
                      boxShadow: active
                          ? [BoxShadow(color: _mint.withValues(alpha: 0.2), blurRadius: 12, offset: const Offset(0, 4))]
                          : null,
                    ),
                    child: Icon(items[i].$1, color: active ? _mint : Colors.white38, size: 22),
                  ),
                ),
              ),
            );
          }),
          const Spacer(),
          Icon(Icons.power_settings_new_rounded, color: Colors.white24, size: 20),
          const SizedBox(height: 16),
        ],
      ),
    );
  }

  Widget _mainPanel() {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(14, 14, 14, 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('Hello, ${widget.displayName}!', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 18)),
          const SizedBox(height: 4),
          Text('Your futuristic creator command center', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11)),
          const SizedBox(height: 14),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: List.generate(_ranges.length, (i) {
                final on = _range == i;
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      onTap: () => setState(() => _range = i),
                      borderRadius: BorderRadius.circular(20),
                      child: _GlassPlate(
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                        radius: 20,
                        depth: 8,
                        glow: on ? _mint : null,
                        child: Text(
                          _ranges[i],
                          style: TextStyle(
                            color: on ? _mint : Colors.white54,
                            fontWeight: FontWeight.w700,
                            fontSize: 11,
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),
          const SizedBox(height: 14),
          _GlassPlate(
            depth: 22,
            glow: _mint,
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('TOTAL BALANCE', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, letterSpacing: 1.2, fontWeight: FontWeight.w800)),
                const SizedBox(height: 8),
                Text(
                  _balanceText,
                  style: TextStyle(
                    color: _mint,
                    fontWeight: FontWeight.w900,
                    fontSize: 28,
                    letterSpacing: -0.5,
                    shadows: [Shadow(color: _mint.withValues(alpha: 0.45), blurRadius: 16)],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(child: _metricTile('VAULT', '\$12.4k', Icons.shield_rounded, _cyan)),
              const SizedBox(width: 8),
              Expanded(child: _metricTile('SLIDES', '\$8.2k', Icons.auto_stories_rounded, const Color(0xFF8B5CF6))),
              const SizedBox(width: 8),
              Expanded(child: _metricTile('TOOLS', '\$3.1k', Icons.build_rounded, const Color(0xFFF59E0B))),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(child: _miniStat('Conversion', '0.1%', 0.12)),
              const SizedBox(width: 8),
              Expanded(child: _miniStat('Active', '98.2%', 0.82)),
              const SizedBox(width: 8),
              Expanded(child: _miniStat('Growth', '+4.8%', 0.48)),
            ],
          ),
          const SizedBox(height: 14),
          _GlassPlate(
            depth: 18,
            padding: const EdgeInsets.fromLTRB(14, 14, 14, 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Text('Revenue Pulse', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                    const Spacer(),
                    Container(
                      width: 36,
                      height: 36,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(colors: [_mint, _mintDim]),
                        boxShadow: [BoxShadow(color: _mint.withValues(alpha: 0.5), blurRadius: 14, offset: const Offset(0, 4))],
                      ),
                      child: const Icon(Icons.add, color: Color(0xFF052E1B), size: 22),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                SizedBox(
                  height: 100,
                  child: CustomPaint(
                    painter: _WaveChartPainter(phase: _float.value),
                    size: const Size(double.infinity, 100),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: _GlassPlate(
                  depth: 12,
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Creator Checkout', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 12)),
                      const SizedBox(height: 4),
                      Text('Glass UI · 3D depth · live glow', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10)),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _GlassPlate(
                  depth: 12,
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Global Reach', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 12)),
                      const SizedBox(height: 4),
                      Text('Deploy anywhere · NGMY cloud', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10)),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _metricTile(String label, String value, IconData icon, Color accent) {
    return _GlassPlate(
      depth: 14,
      glow: accent,
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: accent, size: 18),
          const SizedBox(height: 10),
          Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 9, fontWeight: FontWeight.w800, letterSpacing: 0.8)),
          const SizedBox(height: 4),
          Text(value, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 15)),
        ],
      ),
    );
  }

  Widget _miniStat(String label, String value, double progress) {
    return _GlassPlate(
      depth: 10,
      padding: const EdgeInsets.all(10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 9, fontWeight: FontWeight.w700)),
          const SizedBox(height: 6),
          Text(value, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
          const SizedBox(height: 8),
          ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: LinearProgressIndicator(
              value: progress,
              minHeight: 4,
              backgroundColor: Colors.white.withValues(alpha: 0.06),
              color: _mint,
            ),
          ),
        ],
      ),
    );
  }

  Widget _floatingBadge({required double top, required double right, required String label, required String amount}) {
    return Positioned(
      top: top,
      right: right,
      child: _GlassPlate(
        depth: 16,
        glow: _mint,
        radius: 14,
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 22,
              height: 22,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: _mint.withValues(alpha: 0.2),
                border: Border.all(color: _mint.withValues(alpha: 0.6)),
              ),
              child: const Icon(Icons.check_rounded, color: _mint, size: 14),
            ),
            const SizedBox(width: 8),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 9, fontWeight: FontWeight.w700)),
                Text(amount, style: const TextStyle(color: _mint, fontWeight: FontWeight.w900, fontSize: 12)),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// Thick glass slab with rim light + deep shadow (3D grab-able look).
class _GlassPlate extends StatelessWidget {
  const _GlassPlate({
    required this.child,
    this.padding = const EdgeInsets.all(14),
    this.radius = 18,
    this.depth = 16,
    this.glow,
  });

  final Widget child;
  final EdgeInsets padding;
  final double radius;
  final double depth;
  final Color? glow;

  @override
  Widget build(BuildContext context) {
    final accent = glow ?? _cyan;
    return ngmyClipBackdrop(
      borderRadius: BorderRadius.circular(radius),
      sigma: 10,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(radius),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              const Color(0xFF1A2332).withValues(alpha: 0.96),
              _panel.withValues(alpha: 0.98),
              _panel2,
            ],
            stops: const [0.0, 0.45, 1.0],
          ),
          border: Border.all(
            width: 1.2,
            color: Colors.white.withValues(alpha: 0.14),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.65),
              blurRadius: depth,
              spreadRadius: 1,
              offset: Offset(0, depth * 0.65),
            ),
            BoxShadow(
              color: accent.withValues(alpha: 0.12),
              blurRadius: depth * 1.4,
              offset: Offset(0, depth * 0.25),
            ),
          ],
        ),
        child: Stack(
          children: [
            Positioned(
              left: 8,
              right: 8,
              top: 0,
              height: 1.2,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(radius),
                  gradient: LinearGradient(
                    colors: [
                      Colors.white.withValues(alpha: 0.35),
                      Colors.white.withValues(alpha: 0.0),
                    ],
                  ),
                ),
              ),
            ),
            Padding(padding: padding, child: child),
          ],
        ),
      ),
    );
  }
}

class _NeoGridBackground extends StatelessWidget {
  const _NeoGridBackground();

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _GridPainter(),
      size: Size.infinite,
    );
  }
}

class _GridPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final bg = Paint()..color = _bg;
    canvas.drawRect(Offset.zero & size, bg);

    final glow = Paint()
      ..shader = RadialGradient(
        center: const Alignment(0.2, -0.4),
        radius: 1.1,
        colors: [_mint.withValues(alpha: 0.08), Colors.transparent],
      ).createShader(Offset.zero & size);
    canvas.drawRect(Offset.zero & size, glow);

    final grid = Paint()
      ..color = _mint.withValues(alpha: 0.04)
      ..strokeWidth = 1;
    const step = 28.0;
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _WaveChartPainter extends CustomPainter {
  _WaveChartPainter({required this.phase});

  final double phase;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path();
    final w = size.width;
    final h = size.height;
    path.moveTo(0, h * 0.72);
    for (var i = 0; i <= 40; i++) {
      final x = w * (i / 40);
      final t = i / 40 * math.pi * 2 + phase * math.pi * 2;
      final y = h * 0.55 + math.sin(t) * h * 0.22 + math.sin(t * 2.3) * h * 0.08;
      path.lineTo(x, y);
    }
    path.lineTo(w, h);
    path.lineTo(0, h);
    path.close();

    final fill = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [_cyan.withValues(alpha: 0.35), _cyan.withValues(alpha: 0.02)],
      ).createShader(Rect.fromLTWH(0, 0, w, h));
    canvas.drawPath(path, fill);

    final stroke = Paint()
      ..color = _cyan
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.2
      ..maskFilter = const MaskFilter.blur(BlurStyle.solid, 0.5);
    final line = Path();
    line.moveTo(0, h * 0.72);
    for (var i = 0; i <= 40; i++) {
      final x = w * (i / 40);
      final t = i / 40 * math.pi * 2 + phase * math.pi * 2;
      final y = h * 0.55 + math.sin(t) * h * 0.22 + math.sin(t * 2.3) * h * 0.08;
      line.lineTo(x, y);
    }
    canvas.drawPath(line, stroke);
  }

  @override
  bool shouldRepaint(covariant _WaveChartPainter oldDelegate) => oldDelegate.phase != phase;
}
