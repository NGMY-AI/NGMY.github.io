import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_worksheet_helpers.dart';

/// Stored in project JSON — tiny string, works offline, no base64.
const kNgmyBuiltinThumbPrefix = 'ngmy:thumb:';

bool ngmyIsBuiltinThumbnail(String? ref) =>
    ref != null && ref.startsWith(kNgmyBuiltinThumbPrefix);

String ngmyBuiltinThumbnailRef(String id) => '$kNgmyBuiltinThumbPrefix$id';

String? ngmyBuiltinThumbnailId(String? ref) {
  if (!ngmyIsBuiltinThumbnail(ref)) return null;
  return ref!.substring(kNgmyBuiltinThumbPrefix.length);
}

class NgmyBuiltinThumbnailDef {
  final String id;
  final String label;
  final String subtitle;
  final IconData icon;

  const NgmyBuiltinThumbnailDef({
    required this.id,
    required this.label,
    required this.subtitle,
    required this.icon,
  });
}

const kNgmyBuiltinThumbnails = <NgmyBuiltinThumbnailDef>[
  NgmyBuiltinThumbnailDef(id: 'construction', label: 'Construction', subtitle: 'Jobsite & builds', icon: Icons.construction_rounded),
  NgmyBuiltinThumbnailDef(id: 'house', label: 'Home Build', subtitle: 'Houses & rooms', icon: Icons.home_work_rounded),
  NgmyBuiltinThumbnailDef(id: 'grocery', label: 'Grocery', subtitle: 'Store & pantry', icon: Icons.shopping_cart_rounded),
  NgmyBuiltinThumbnailDef(id: 'calculator', label: 'Calculations', subtitle: 'Math & estimates', icon: Icons.calculate_rounded),
  NgmyBuiltinThumbnailDef(id: 'lumber', label: 'Materials', subtitle: 'Lumber & supplies', icon: Icons.inventory_2_rounded),
  NgmyBuiltinThumbnailDef(id: 'kitchen', label: 'Kitchen', subtitle: 'Remodel & meals', icon: Icons.kitchen_rounded),
  NgmyBuiltinThumbnailDef(id: 'landscape', label: 'Landscaping', subtitle: 'Yard & garden', icon: Icons.yard_rounded),
  NgmyBuiltinThumbnailDef(id: 'plumbing', label: 'Plumbing', subtitle: 'Pipes & water', icon: Icons.water_drop_rounded),
  NgmyBuiltinThumbnailDef(id: 'electrical', label: 'Electrical', subtitle: 'Wiring & power', icon: Icons.bolt_rounded),
  NgmyBuiltinThumbnailDef(id: 'store', label: 'Retail Shop', subtitle: 'Daily business', icon: Icons.storefront_rounded),
  NgmyBuiltinThumbnailDef(id: 'paint_remodel', label: 'Paint & Remodel', subtitle: 'Colors & walls', icon: Icons.format_paint_rounded),
  NgmyBuiltinThumbnailDef(id: 'roofing', label: 'Roofing', subtitle: 'Roofs & exteriors', icon: Icons.roofing_rounded),
  NgmyBuiltinThumbnailDef(id: 'warehouse', label: 'Warehouse', subtitle: 'Storage & stock', icon: Icons.warehouse_rounded),
  NgmyBuiltinThumbnailDef(id: 'vehicles', label: 'Vehicles', subtitle: 'Fleet & transport', icon: Icons.local_shipping_rounded),
  NgmyBuiltinThumbnailDef(id: 'farm', label: 'Farm', subtitle: 'Crops & livestock', icon: Icons.agriculture_rounded),
  NgmyBuiltinThumbnailDef(id: 'restaurant', label: 'Restaurant', subtitle: 'Food & catering', icon: Icons.restaurant_rounded),
  NgmyBuiltinThumbnailDef(id: 'tools', label: 'Tools', subtitle: 'Workshop gear', icon: Icons.handyman_rounded),
  NgmyBuiltinThumbnailDef(id: 'wallet', label: 'Cash & Wallet', subtitle: 'Quick spending', icon: Icons.account_balance_wallet_rounded),
  NgmyBuiltinThumbnailDef(id: 'concrete', label: 'Concrete', subtitle: 'Foundation work', icon: Icons.foundation_rounded),
  NgmyBuiltinThumbnailDef(id: 'blueprint', label: 'Blueprint', subtitle: 'Plans & design', icon: Icons.architecture_rounded),
];

NgmyBuiltinThumbnailDef? ngmyBuiltinThumbnailDef(String? ref) {
  final id = ngmyBuiltinThumbnailId(ref);
  if (id == null) return null;
  for (final d in kNgmyBuiltinThumbnails) {
    if (d.id == id) return d;
  }
  return null;
}

/// Animated built-in artwork for worksheet project thumbnails.
class NgmyBuiltinThumbnailArt extends StatefulWidget {
  final String id;
  final bool animate;

  const NgmyBuiltinThumbnailArt({
    super.key,
    required this.id,
    this.animate = true,
  });

  @override
  State<NgmyBuiltinThumbnailArt> createState() => _NgmyBuiltinThumbnailArtState();
}

class _NgmyBuiltinThumbnailArtState extends State<NgmyBuiltinThumbnailArt>
    with TickerProviderStateMixin {
  late AnimationController _ctrl;
  late AnimationController _ctrlFast;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 3200),
    );
    _ctrlFast = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1800),
    );
    if (widget.animate) {
      _ctrl.repeat();
      _ctrlFast.repeat();
    }
  }

  @override
  void didUpdateWidget(covariant NgmyBuiltinThumbnailArt oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.animate) {
      if (!_ctrl.isAnimating) _ctrl.repeat();
      if (!_ctrlFast.isAnimating) _ctrlFast.repeat();
    } else {
      _ctrl.stop();
      _ctrlFast.stop();
    }
  }

  @override
  void dispose() {
    _ctrl.dispose();
    _ctrlFast.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final def = kNgmyBuiltinThumbnails.firstWhere(
      (d) => d.id == widget.id,
      orElse: () => kNgmyBuiltinThumbnails.first,
    );
    return TickerMode(
      enabled: widget.animate,
      child: AnimatedBuilder(
        animation: Listenable.merge([_ctrl, _ctrlFast]),
        builder: (context, _) {
          return CustomPaint(
            painter: _NgmyBuiltinThumbPainter(
              id: widget.id,
              t: widget.animate ? _ctrl.value : 0,
              tFast: widget.animate ? _ctrlFast.value : 0,
            ),
            child: Center(
              child: Icon(
                def.icon,
                size: 44,
                color: Colors.white.withValues(alpha: 0.95),
                shadows: const [
                  Shadow(color: Colors.black26, blurRadius: 8, offset: Offset(0, 2)),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

class _NgmyBuiltinThumbPainter extends CustomPainter {
  final String id;
  final double t;
  final double tFast;

  _NgmyBuiltinThumbPainter({required this.id, required this.t, this.tFast = 0});

  @override
  void paint(Canvas canvas, Size size) {
    switch (id) {
      case 'construction':
        _paintConstruction(canvas, size);
      case 'house':
        _paintHouse(canvas, size);
      case 'grocery':
        _paintGrocery(canvas, size);
      case 'calculator':
        _paintCalculator(canvas, size);
      case 'lumber':
        _paintLumber(canvas, size);
      case 'kitchen':
        _paintKitchen(canvas, size);
      case 'landscape':
        _paintLandscape(canvas, size);
      case 'plumbing':
        _paintPlumbing(canvas, size);
      case 'electrical':
        _paintElectrical(canvas, size);
      case 'store':
        _paintStore(canvas, size);
      case 'paint_remodel':
        _paintPaintRemodel(canvas, size);
      case 'roofing':
        _paintRoofing(canvas, size);
      case 'warehouse':
        _paintWarehouse(canvas, size);
      case 'vehicles':
        _paintVehicles(canvas, size);
      case 'farm':
        _paintFarm(canvas, size);
      case 'restaurant':
        _paintRestaurant(canvas, size);
      case 'tools':
        _paintTools(canvas, size);
      case 'wallet':
        _paintWallet(canvas, size);
      case 'concrete':
        _paintConcrete(canvas, size);
      case 'blueprint':
        _paintBlueprint(canvas, size);
      default:
        _paintConstruction(canvas, size);
    }
  }

  void _bg(Canvas canvas, Size size, List<Color> colors) {
    final rect = Offset.zero & size;
    canvas.drawRect(
      rect,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: colors,
        ).createShader(rect),
    );
  }

  void _ring(Canvas canvas, Size size, Color color, double phase, {double inset = 18}) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide / 2 - inset;
    final paint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4
      ..color = color;
    const segments = 24;
    for (var i = 0; i < segments; i++) {
      final a0 = (i / segments) * math.pi * 2 + phase;
      final a1 = a0 + (math.pi * 2 / segments) * 0.55;
      canvas.drawArc(
        Rect.fromCircle(center: center, radius: radius),
        a0,
        a1 - a0,
        false,
        paint,
      );
    }
  }

  void _orbitDots(Canvas canvas, Size size, Color color, {int count = 8, double inset = 10}) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide / 2 - inset;
    for (var i = 0; i < count; i++) {
      final a = t * math.pi * 2 + (i / count) * math.pi * 2;
      final dot = Offset(center.dx + math.cos(a) * radius, center.dy + math.sin(a) * radius);
      canvas.drawCircle(dot, 3.5, Paint()..color = color.withValues(alpha: 0.55 + 0.35 * math.sin(a * 2)));
    }
  }

  void _sparkles(Canvas canvas, Size size, {int count = 10}) {
    for (var i = 0; i < count; i++) {
      final phase = t * math.pi * 2 + i * 0.8;
      final alpha = (math.sin(phase) + 1) / 2;
      canvas.drawCircle(
        Offset(size.width * ((i * 0.17) % 0.9 + 0.05), size.height * ((i * 0.23) % 0.85 + 0.08)),
        1.5 + alpha * 2.5,
        Paint()..color = Colors.white.withValues(alpha: 0.2 + alpha * 0.6),
      );
    }
  }

  void _paintConstruction(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFF59E0B), Color(0xFFEA580C), Color(0xFF78350F)]);
    _ring(canvas, size, Colors.white.withValues(alpha: 0.55), t * math.pi * 2, inset: 12);
    _ring(canvas, size, const Color(0xFFFDE68A).withValues(alpha: 0.45), -t * math.pi * 1.4, inset: 22);
    _drawBeams(canvas, size, const Color(0xFFFFFBEB), t);
    _orbitDots(canvas, size, Colors.white.withValues(alpha: 0.7), count: 6, inset: 8);
  }

  void _drawBeams(Canvas canvas, Size size, Color c, double t) {
    final p = Paint()..color = c.withValues(alpha: 0.35);
    for (var i = 0; i < 3; i++) {
      final y = size.height * (0.25 + i * 0.22) + math.sin(t * math.pi * 2 + i) * 4;
      canvas.drawRect(Rect.fromLTWH(16, y, size.width - 32, 3), p);
    }
  }

  void _paintHouse(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF38BDF8), Color(0xFF2563EB), Color(0xFF1E3A8A)]);
    final pulse = 0.5 + 0.5 * math.sin(t * math.pi * 2);
    canvas.drawCircle(
      Offset(size.width * 0.5, size.height * 0.38),
      size.shortestSide * (0.22 + pulse * 0.06),
      Paint()..color = Colors.white.withValues(alpha: 0.18 + pulse * 0.12),
    );
    _ring(canvas, size, Colors.white.withValues(alpha: 0.4), -t * math.pi * 2, inset: 20);
    _sparkles(canvas, size, count: 12);
    _orbitDots(canvas, size, const Color(0xFFBFDBFE), count: 5, inset: 14);
  }

  void _paintGrocery(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF34D399), Color(0xFF059669), Color(0xFF064E3B)]);
    const items = [Color(0xFFFDE68A), Color(0xFFF87171), Color(0xFF93C5FD), Color(0xFFFBBF24)];
    for (var i = 0; i < 6; i++) {
      final phase = t * math.pi * 2 + i * 1.1;
      final x = size.width * (0.15 + (i % 3) * 0.28) + math.sin(phase) * 8;
      final y = size.height * (0.18 + (i ~/ 3) * 0.55) + math.cos(phase * 0.8) * 10;
      canvas.drawCircle(Offset(x, y), 7 + (i % 2) * 2.0, Paint()..color = items[i % items.length].withValues(alpha: 0.85));
    }
    _ring(canvas, size, Colors.white.withValues(alpha: 0.35), t * math.pi * 2, inset: 16);
    _orbitDots(canvas, size, const Color(0xFFBBF7D0), count: 5, inset: 12);
  }

  void _paintCalculator(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFA78BFA), Color(0xFF7C3AED), Color(0xFF4C1D95)]);
    final pulse = 0.5 + 0.5 * math.sin(t * math.pi * 2);
    canvas.drawCircle(
      Offset(size.width / 2, size.height / 2),
      size.shortestSide * (0.18 + pulse * 0.08),
      Paint()..color = Colors.white.withValues(alpha: 0.1 + pulse * 0.12),
    );
    const nums = ['7', '3', '+', '42', 'π', '∑'];
    const extraNums = ['×', '÷', '100', '0', '∞', '%'];
    final tp = TextPainter(textDirection: TextDirection.ltr);
    for (var i = 0; i < nums.length; i++) {
      final phase = t * math.pi * 2 + i * 0.9;
      tp.text = TextSpan(
        text: nums[i],
        style: TextStyle(
          color: Colors.white.withValues(alpha: 0.35 + 0.25 * math.sin(phase)),
          fontSize: 14 + (i % 2) * 4,
          fontWeight: FontWeight.w800,
        ),
      );
      tp.layout();
      tp.paint(
        canvas,
        Offset(
          size.width * (0.08 + (i % 3) * 0.3) + math.sin(phase) * 6,
          size.height * (0.12 + (i ~/ 3) * 0.62) + math.cos(phase) * 5,
        ),
      );
    }
    for (var i = 0; i < extraNums.length; i++) {
      final phase = tFast * math.pi * 2 + i * 0.85;
      tp.text = TextSpan(
        text: extraNums[i],
        style: TextStyle(
          color: const Color(0xFFE9D5FF).withValues(alpha: 0.28 + 0.3 * math.sin(phase)),
          fontSize: 12 + (i % 2) * 3,
          fontWeight: FontWeight.w800,
        ),
      );
      tp.layout();
      tp.paint(
        canvas,
        Offset(
          size.width * (0.55 + (i % 3) * 0.12) + math.cos(phase) * 7,
          size.height * (0.08 + (i ~/ 3) * 0.38) + math.sin(phase) * 6,
        ),
      );
    }
    _ring(canvas, size, Colors.white.withValues(alpha: 0.35), t * math.pi * 1.5, inset: 14);
    _ring(canvas, size, const Color(0xFFC4B5FD).withValues(alpha: 0.55), -tFast * math.pi * 2, inset: 8);
    _ring(canvas, size, const Color(0xFFDDD6FE).withValues(alpha: 0.4), tFast * math.pi * 2.8, inset: 22);
    _orbitDots(canvas, size, const Color(0xFFF5F3FF), count: 8, inset: 10);
    _sparkles(canvas, size, count: 14);
    for (var i = 0; i < 4; i++) {
      final scanY = size.height * ((tFast * 0.35 + i * 0.22) % 0.9);
      canvas.drawLine(
        Offset(12, scanY),
        Offset(size.width - 12, scanY),
        Paint()
          ..color = Colors.white.withValues(alpha: 0.08 + 0.06 * math.sin(tFast * math.pi * 2 + i))
          ..strokeWidth = 1.2,
      );
    }
  }

  void _paintLumber(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFD97706), Color(0xFF92400E), Color(0xFF451A03)]);
    for (var i = 0; i < 5; i++) {
      final shimmer = (math.sin(t * math.pi * 2 + i * 0.7) + 1) / 2;
      final top = size.height * 0.14 + i * (size.height * 0.14);
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(20, top, size.width - 40, 10),
          const Radius.circular(3),
        ),
        Paint()..color = Color.lerp(const Color(0xFFFEF3C7), const Color(0xFFFCD34D), shimmer)!,
      );
    }
    _ring(canvas, size, const Color(0xFFFEF3C7).withValues(alpha: 0.35), t * math.pi * 2, inset: 15);
    _sparkles(canvas, size, count: 8);
  }

  void _paintKitchen(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFFB7185), Color(0xFFF97316), Color(0xFFBE123C)]);
    for (var i = 0; i < 8; i++) {
      final phase = t * math.pi * 2 + i * 0.75;
      final alpha = (math.sin(phase) + 1) / 2;
      canvas.drawCircle(
        Offset(
          size.width * (0.1 + (i * 0.11) % 0.85) + math.sin(phase * 1.3) * 12,
          size.height * (0.15 + (i * 0.13) % 0.7),
        ),
        2 + alpha * 3,
        Paint()..color = Colors.white.withValues(alpha: 0.25 + alpha * 0.55),
      );
    }
    _ring(canvas, size, const Color(0xFFFDE68A).withValues(alpha: 0.4), -t * math.pi * 2.2, inset: 11);
    _orbitDots(canvas, size, const Color(0xFFFED7AA), count: 4, inset: 14);
  }

  void _paintLandscape(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF86EFAC), Color(0xFF16A34A), Color(0xFF14532D)]);
    final wave = Path()
      ..moveTo(0, size.height * 0.72)
      ..quadraticBezierTo(
        size.width * 0.25,
        size.height * (0.62 + math.sin(t * math.pi * 2) * 0.04),
        size.width * 0.5,
        size.height * 0.72,
      )
      ..quadraticBezierTo(
        size.width * 0.75,
        size.height * (0.82 + math.cos(t * math.pi * 2) * 0.04),
        size.width,
        size.height * 0.68,
      )
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    canvas.drawPath(wave, Paint()..color = const Color(0xFF15803D).withValues(alpha: 0.85));
    _sparkles(canvas, size, count: 8);
    _orbitDots(canvas, size, const Color(0xFFBBF7D0), count: 4, inset: 18);
  }

  void _paintPlumbing(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF22D3EE), Color(0xFF0891B2), Color(0xFF164E63)]);
    for (var i = 0; i < 3; i++) {
      final r = size.shortestSide * (0.12 + i * 0.14 + (t * 0.08) % 0.12);
      canvas.drawCircle(
        Offset(size.width / 2, size.height * 0.55),
        r,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..color = Colors.white.withValues(alpha: 0.45 - i * 0.12),
      );
    }
    _orbitDots(canvas, size, const Color(0xFFA5F3FC), count: 6, inset: 12);
    _ring(canvas, size, Colors.white.withValues(alpha: 0.3), -tFast * math.pi * 2, inset: 18);
  }

  void _paintElectrical(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFFACC15), Color(0xFFEAB308), Color(0xFF713F12)]);
    final flash = (math.sin(t * math.pi * 4) + 1) / 2;
    canvas.drawRect(
      Offset.zero & size,
      Paint()..color = Colors.white.withValues(alpha: flash * 0.12),
    );
    _ring(canvas, size, Colors.white.withValues(alpha: 0.5 + flash * 0.3), -t * math.pi * 3, inset: 10);
    _ring(canvas, size, const Color(0xFFFEF08A).withValues(alpha: 0.35 + flash * 0.2), tFast * math.pi * 4, inset: 18);
    _sparkles(canvas, size, count: 10);
  }

  void _paintStore(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF818CF8), Color(0xFF6366F1), Color(0xFF312E81)]);
    for (var i = 0; i < 4; i++) {
      final lit = (math.sin(t * math.pi * 2 + i * 1.5) + 1) / 2;
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(14 + i * (size.width - 28) / 4, 14, (size.width - 28) / 4 - 4, 8),
          const Radius.circular(4),
        ),
        Paint()..color = Color.lerp(const Color(0xFF312E81), const Color(0xFFFDE68A), lit)!,
      );
    }
    _ring(canvas, size, Colors.white.withValues(alpha: 0.3), t * math.pi * 2, inset: 16);
    _sparkles(canvas, size, count: 8);
    _orbitDots(canvas, size, const Color(0xFFE0E7FF), count: 5, inset: 13);
  }

  void _paintPaintRemodel(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFF472B6), Color(0xFFDB2777), Color(0xFF831843)]);
    for (var i = 0; i < 4; i++) {
      final drip = (t + i * 0.2) % 1.0;
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(size.width * (0.18 + i * 0.18), size.height * (0.15 + drip * 0.55), 8, 18 + drip * 22),
          const Radius.circular(6),
        ),
        Paint()..color = [const Color(0xFFFBCFE8), const Color(0xFF93C5FD), const Color(0xFFFDE68A), const Color(0xFF86EFAC)][i].withValues(alpha: 0.85),
      );
    }
    _ring(canvas, size, Colors.white.withValues(alpha: 0.45), t * math.pi * 2.5, inset: 13);
  }

  void _paintRoofing(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF64748B), Color(0xFF334155), Color(0xFF0F172A)]);
    for (var i = 0; i < 8; i++) {
      final y = size.height * (0.12 + (t * 0.35 + i * 0.12) % 0.75);
      canvas.drawLine(
        Offset(size.width * (0.1 + (i % 4) * 0.22), y),
        Offset(size.width * (0.18 + (i % 4) * 0.22), y + 10),
        Paint()..color = Colors.white.withValues(alpha: 0.25)..strokeWidth = 1.5,
      );
    }
    _orbitDots(canvas, size, const Color(0xFFCBD5E1), count: 7, inset: 11);
  }

  void _paintWarehouse(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF94A3B8), Color(0xFF475569), Color(0xFF1E293B)]);
    for (var i = 0; i < 4; i++) {
      final lift = math.sin(t * math.pi * 2 + i) * 4;
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(22 + i * 16.0, size.height * 0.55 - i * 14 + lift, size.width - 44 - i * 8, 16),
          const Radius.circular(3),
        ),
        Paint()..color = Color.lerp(const Color(0xFFCBD5E1), const Color(0xFFF8FAFC), (math.sin(t * math.pi * 2 + i) + 1) / 2)!,
      );
    }
    _ring(canvas, size, Colors.white.withValues(alpha: 0.35), -t * math.pi * 1.8, inset: 15);
  }

  void _paintVehicles(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF60A5FA), Color(0xFF2563EB), Color(0xFF1E3A8A)]);
    for (var i = 0; i < 5; i++) {
      final x = size.width * ((t * 0.45 + i * 0.18) % 1.1 - 0.05);
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTWH(x, size.height * (0.62 + (i % 2) * 0.08), 28, 8), const Radius.circular(3)),
        Paint()..color = Colors.white.withValues(alpha: 0.35 + i * 0.08),
      );
    }
    _sparkles(canvas, size, count: 6);
  }

  void _paintFarm(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFFBBF24), Color(0xFF84CC16), Color(0xFF365314)]);
    final sunPulse = 0.5 + 0.5 * math.sin(t * math.pi * 2);
    canvas.drawCircle(
      Offset(size.width * 0.82, size.height * 0.18),
      14 + sunPulse * 4,
      Paint()..color = const Color(0xFFFEF08A).withValues(alpha: 0.75),
    );
    for (var i = 0; i < 6; i++) {
      final sway = math.sin(t * math.pi * 2 + i) * 6;
      canvas.drawLine(
        Offset(size.width * (0.12 + i * 0.14), size.height * 0.72),
        Offset(size.width * (0.12 + i * 0.14) + sway, size.height * 0.52),
        Paint()..color = const Color(0xFF166534).withValues(alpha: 0.85)..strokeWidth = 3,
      );
    }
    _ring(canvas, size, const Color(0xFFFEF08A).withValues(alpha: 0.35), t * math.pi * 2, inset: 14);
  }

  void _paintRestaurant(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFFFB923C), Color(0xFFEA580C), Color(0xFF7C2D12)]);
    for (var i = 0; i < 4; i++) {
      final steam = math.sin(t * math.pi * 2 + i * 0.9) * 8;
      canvas.drawOval(
        Rect.fromCenter(center: Offset(size.width * (0.28 + i * 0.16), size.height * 0.42 + steam), width: 10, height: 18),
        Paint()..color = Colors.white.withValues(alpha: 0.22),
      );
    }
    _orbitDots(canvas, size, const Color(0xFFFED7AA), count: 5, inset: 16);
    _sparkles(canvas, size, count: 7);
  }

  void _paintTools(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF78716C), Color(0xFF44403C), Color(0xFF1C1917)]);
    _ring(canvas, size, const Color(0xFFFCD34D).withValues(alpha: 0.55), t * math.pi * 3, inset: 10);
    _ring(canvas, size, Colors.white.withValues(alpha: 0.25), -t * math.pi * 2, inset: 24);
    for (var i = 0; i < 3; i++) {
      final a = t * math.pi * 2 + i * 2.1;
      canvas.drawCircle(
        Offset(size.width / 2 + math.cos(a) * 34, size.height / 2 + math.sin(a) * 22),
        4,
        Paint()..color = const Color(0xFFFCD34D).withValues(alpha: 0.8),
      );
    }
  }

  void _paintWallet(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF4ADE80), Color(0xFF16A34A), Color(0xFF14532D)]);
    for (var i = 0; i < 5; i++) {
      final flip = (math.sin(t * math.pi * 2 + i * 1.2) + 1) / 2;
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(size.width * (0.2 + i * 0.03), size.height * (0.28 + flip * 0.08), 36, 22),
          const Radius.circular(4),
        ),
        Paint()..color = Color.lerp(const Color(0xFFBBF7D0), const Color(0xFFFEF08A), flip)!,
      );
    }
    _sparkles(canvas, size, count: 9);
    _ring(canvas, size, Colors.white.withValues(alpha: 0.4), t * math.pi * 2.2, inset: 12);
  }

  void _paintConcrete(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF9CA3AF), Color(0xFF6B7280), Color(0xFF374151)]);
    final spin = t * math.pi * 2;
    canvas.drawArc(
      Rect.fromCircle(center: Offset(size.width / 2, size.height * 0.55), radius: 34),
      spin,
      math.pi * 1.2,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 5
        ..color = Colors.white.withValues(alpha: 0.45),
    );
    for (var i = 0; i < 6; i++) {
      final a = spin + i * 1.05;
      canvas.drawCircle(
        Offset(size.width / 2 + math.cos(a) * 34, size.height * 0.55 + math.sin(a) * 34),
        3,
        Paint()..color = const Color(0xFFE5E7EB).withValues(alpha: 0.85),
      );
    }
  }

  void _paintBlueprint(Canvas canvas, Size size) {
    _bg(canvas, size, const [Color(0xFF1D4ED8), Color(0xFF1E3A8A), Color(0xFF172554)]);
    final grid = Paint()
      ..color = Colors.white.withValues(alpha: 0.12)
      ..strokeWidth = 1;
    const step = 18.0;
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
    final scanY = size.height * ((t * 0.85) % 1.0);
    canvas.drawRect(
      Rect.fromLTWH(0, scanY, size.width, 6),
      Paint()..color = const Color(0xFF93C5FD).withValues(alpha: 0.45),
    );
    _ring(canvas, size, const Color(0xFFBFDBFE).withValues(alpha: 0.45), -t * math.pi * 2, inset: 11);
  }

  @override
  bool shouldRepaint(covariant _NgmyBuiltinThumbPainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.tFast != tFast || oldDelegate.id != id;
}

Future<String?> showNgmyBuiltinThumbnailPicker(BuildContext context) {
  final p = WorksheetPalette.of(context);
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return DraggableScrollableSheet(
        initialChildSize: 0.72,
        minChildSize: 0.45,
        maxChildSize: 0.92,
        expand: false,
        builder: (_, scrollCtrl) {
          return Container(
            decoration: BoxDecoration(
              color: p.cardBg,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
              boxShadow: [BoxShadow(color: p.shadow, blurRadius: 24, offset: const Offset(0, -4))],
            ),
            child: Column(
              children: [
                const SizedBox(height: 10),
                Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(color: p.cardBorder, borderRadius: BorderRadius.circular(99)),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 16, 20, 8),
                  child: Row(
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              WorksheetPalette.green.withValues(alpha: 0.25),
                              WorksheetPalette.teal.withValues(alpha: 0.18),
                            ],
                          ),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Icon(Icons.auto_awesome_rounded, color: WorksheetPalette.greenDark, size: 22),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Choose a theme', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: p.primaryText)),
                            Text('Animated thumbnails for construction, grocery, and more.', style: TextStyle(fontSize: 12, color: p.secondaryText)),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: GridView.builder(
                    controller: scrollCtrl,
                    padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      mainAxisSpacing: 12,
                      crossAxisSpacing: 12,
                      childAspectRatio: 1.05,
                    ),
                    itemCount: kNgmyBuiltinThumbnails.length,
                    itemBuilder: (_, i) {
                      final def = kNgmyBuiltinThumbnails[i];
                      return Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () => Navigator.pop(ctx, ngmyBuiltinThumbnailRef(def.id)),
                          borderRadius: BorderRadius.circular(16),
                          child: Ink(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(color: p.cardBorder),
                              boxShadow: [BoxShadow(color: p.shadow, blurRadius: 8, offset: const Offset(0, 3))],
                            ),
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(15),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Expanded(
                                    child: NgmyBuiltinThumbnailArt(id: def.id),
                                  ),
                                  Container(
                                    color: p.mutedSurface,
                                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(def.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: p.primaryText)),
                                        Text(def.subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 10, color: p.secondaryText, fontWeight: FontWeight.w600)),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          );
        },
      );
    },
  );
}

/// 16:9 full-frame animated preview with Themes / Your photos actions.
class NgmyWorksheetThumbnailPickerFrame extends StatelessWidget {
  final String? thumbnailPath;
  final ValueChanged<String?> onThumbnailChanged;
  final BorderRadius borderRadius;

  const NgmyWorksheetThumbnailPickerFrame({
    super.key,
    required this.thumbnailPath,
    required this.onThumbnailChanged,
    this.borderRadius = const BorderRadius.all(Radius.circular(14)),
  });

  Future<void> _pickGallery() async {
    final img = await ngmyPickImageBase64(maxWidth: 1920);
    if (img != null) onThumbnailChanged(img);
  }

  Future<void> _pickBuiltin(BuildContext context) async {
    final ref = await showNgmyBuiltinThumbnailPicker(context);
    if (ref != null) onThumbnailChanged(ref);
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    final hasThumb = thumbnailPath != null && thumbnailPath!.trim().isNotEmpty;
    final previewRef = hasThumb ? thumbnailPath : ngmyBuiltinThumbnailRef('construction');

    return AspectRatio(
      aspectRatio: 16 / 9,
      child: Material(
        color: p.mutedSurface,
        borderRadius: borderRadius,
        clipBehavior: Clip.antiAlias,
        child: Stack(
          fit: StackFit.expand,
          children: [
            ngmyWorksheetThumbnail(
              imageRef: previewRef,
              width: double.infinity,
              height: double.infinity,
              borderRadius: borderRadius,
              animate: true,
            ),
            if (!hasThumb)
              DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [
                      Colors.transparent,
                      Colors.black.withValues(alpha: 0.35),
                    ],
                  ),
                ),
                child: Align(
                  alignment: Alignment.topCenter,
                  child: Padding(
                    padding: const EdgeInsets.only(top: 10),
                    child: Text(
                      'Pick a theme or your own photo',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w700,
                        color: Colors.white.withValues(alpha: 0.92),
                        shadows: const [Shadow(color: Colors.black45, blurRadius: 6)],
                      ),
                    ),
                  ),
                ),
              ),
            Positioned(
              left: 8,
              right: 8,
              bottom: 8,
              child: Row(
                children: [
                  Expanded(
                    child: FilledButton.icon(
                      onPressed: () => _pickBuiltin(context),
                      style: FilledButton.styleFrom(
                        backgroundColor: WorksheetPalette.green,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        visualDensity: VisualDensity.compact,
                      ),
                      icon: const Icon(Icons.auto_awesome_rounded, size: 16),
                      label: const Text('Themes', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: _pickGallery,
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.white,
                        backgroundColor: Colors.black.withValues(alpha: 0.35),
                        side: const BorderSide(color: Colors.white70),
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        visualDensity: VisualDensity.compact,
                      ),
                      icon: const Icon(Icons.photo_library_outlined, size: 16),
                      label: const Text('Your photos', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Renders user photo, built-in animated art, or placeholder.
Widget ngmyWorksheetThumbnail({
  required String? imageRef,
  required double width,
  required double height,
  BoxFit fit = BoxFit.cover,
  IconData icon = Icons.image_outlined,
  Color? iconColor,
  BorderRadius? borderRadius,
  bool animate = true,
}) {
  final radius = borderRadius ?? BorderRadius.circular(12);
  final builtinId = ngmyBuiltinThumbnailId(imageRef);
  if (builtinId != null) {
    return ClipRRect(
      borderRadius: radius,
      child: SizedBox(
        width: width,
        height: height,
        child: NgmyBuiltinThumbnailArt(id: builtinId, animate: animate),
      ),
    );
  }
  return ngmyImageOrPlaceholder(
    imageRef: imageRef,
    width: width,
    height: height,
    fit: fit,
    icon: icon,
    iconColor: iconColor,
    borderRadius: radius,
  );
}
