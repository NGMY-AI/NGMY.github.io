import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_mechanic_studio_models.dart';

/// Interactive pseudo-3D car bay — drag to orbit, tap parts to select.
class NgmyMechanicCarScene extends StatefulWidget {
  const NgmyMechanicCarScene({
    super.key,
    required this.car,
    required this.parts,
    required this.removedPartIds,
    required this.selectedPartId,
    required this.explodeStrength,
    required this.onPartTap,
    this.highlightInstalled = true,
  });

  final NgmyMechanicCarProfile car;
  final List<NgmyMechanicCarPart> parts;
  final Set<String> removedPartIds;
  final String? selectedPartId;
  final double explodeStrength;
  final bool highlightInstalled;
  final ValueChanged<NgmyMechanicCarPart> onPartTap;

  @override
  State<NgmyMechanicCarScene> createState() => _NgmyMechanicCarSceneState();
}

class _NgmyMechanicCarSceneState extends State<NgmyMechanicCarScene> with SingleTickerProviderStateMixin {
  double _rotY = -0.55;
  double _rotX = 0.18;
  double _zoom = 1.0;
  late AnimationController _pulse;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, c) {
        final w = c.maxWidth;
        final h = c.maxHeight;
        return GestureDetector(
          onScaleUpdate: (d) {
            setState(() {
              if (d.scale != 1.0) {
                _zoom = (_zoom * d.scale).clamp(0.75, 1.45);
              }
              _rotY += d.focalPointDelta.dx * 0.008;
              _rotX = (_rotX + d.focalPointDelta.dy * 0.006).clamp(-0.45, 0.55);
            });
          },
          child: Stack(
            fit: StackFit.expand,
            children: [
              CustomPaint(painter: _GarageFloorPainter()),
              Center(
                child: Transform(
                  transform: Matrix4.identity()
                    ..setEntry(3, 2, 0.0012)
                    ..scale(_zoom)
                    ..rotateY(_rotY)
                    ..rotateX(_rotX),
                  alignment: Alignment.center,
                  transformHitTests: true,
                  child: SizedBox(
                    width: w * 0.88,
                    height: h * 0.72,
                    child: Stack(
                      clipBehavior: Clip.none,
                      children: [
                        Positioned.fill(
                          child: CustomPaint(
                            painter: _CarBodyPainter(
                              car: widget.car,
                              removedHood: widget.removedPartIds.contains('hood'),
                            ),
                          ),
                        ),
                        ...widget.parts.map((p) => _buildPartNode(p, w * 0.88, h * 0.72)),
                      ],
                    ),
                  ),
                ),
              ),
              Positioned(
                left: 12,
                bottom: 12,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    color: Colors.black.withValues(alpha: 0.45),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: kNgmyMechanicAccent.withValues(alpha: 0.35)),
                  ),
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.touch_app_rounded, color: kNgmyMechanicAccent, size: 16),
                        SizedBox(width: 6),
                        Text(
                          'Drag to orbit · Pinch to zoom',
                          style: TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildPartNode(NgmyMechanicCarPart part, double boxW, double boxH) {
    if (widget.removedPartIds.contains(part.id)) return const SizedBox.shrink();

    final selected = widget.selectedPartId == part.id;
    final explode = widget.explodeStrength;
    final dx = part.explodeX * explode * boxW * 0.35;
    final dy = part.explodeY * explode * boxH * 0.35;
    final left = part.anchorX * boxW + dx - 22 * part.size;
    final top = part.anchorY * boxH + dy - 22 * part.size;
    final depthGlow = part.depth * 40 * explode;

    return Positioned(
      left: left,
      top: top,
      child: AnimatedBuilder(
        animation: _pulse,
        builder: (context, child) {
          final glow = selected ? 0.35 + _pulse.value * 0.25 : 0.0;
          return Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: () => widget.onPartTap(part),
              customBorder: const CircleBorder(),
              child: Container(
                width: 44 * part.size,
                height: 44 * part.size,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(
                    colors: [
                      part.color.withValues(alpha: 0.95),
                      part.color.withValues(alpha: 0.55),
                    ],
                  ),
                  border: Border.all(
                    color: selected ? kNgmyMechanicAccent : Colors.white.withValues(alpha: 0.35),
                    width: selected ? 2.5 : 1.2,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: part.color.withValues(alpha: 0.45 + glow),
                      blurRadius: selected ? 18 : 8,
                      spreadRadius: selected ? 2 : 0,
                      offset: Offset(0, depthGlow * 0.02),
                    ),
                    if (selected)
                      BoxShadow(
                        color: kNgmyMechanicAccent.withValues(alpha: glow),
                        blurRadius: 24,
                        spreadRadius: 4,
                      ),
                  ],
                ),
                child: Icon(part.icon, color: Colors.white, size: 20 * part.size),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _GarageFloorPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    final bg = Paint()
      ..shader = const LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [Color(0xFF111827), Color(0xFF0B1220), Color(0xFF020617)],
      ).createShader(rect);
    canvas.drawRect(rect, bg);

    final grid = Paint()
      ..color = kNgmyMechanicAccent2.withValues(alpha: 0.08)
      ..strokeWidth = 1;
    const step = 28.0;
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, size.height * 0.55), Offset(x + size.width * 0.15, size.height), grid);
    }
    for (var y = size.height * 0.55; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y + size.width * 0.08), grid);
    }

    final spotlight = Paint()
      ..shader = RadialGradient(
        colors: [
          kNgmyMechanicAccent.withValues(alpha: 0.12),
          Colors.transparent,
        ],
      ).createShader(Rect.fromCircle(center: Offset(size.width * 0.5, size.height * 0.35), radius: size.width * 0.55));
    canvas.drawRect(rect, spotlight);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _CarBodyPainter extends CustomPainter {
  _CarBodyPainter({required this.car, required this.removedHood});

  final NgmyMechanicCarProfile car;
  final bool removedHood;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final ls = car.lengthScale;
    final hs = car.heightScale;

    final shadow = Paint()..color = Colors.black.withValues(alpha: 0.45);
    canvas.drawOval(
      Rect.fromCenter(center: Offset(w * 0.5, h * 0.86), width: w * 0.72 * ls, height: h * 0.12),
      shadow,
    );

    _drawWheel(canvas, Offset(w * 0.22, h * 0.78), h * 0.11 * hs, car.wheelColor);
    _drawWheel(canvas, Offset(w * 0.78, h * 0.78), h * 0.11 * hs, car.wheelColor);

    final bodyPath = Path()
      ..moveTo(w * 0.12, h * 0.62 * hs)
      ..lineTo(w * 0.18, h * 0.48 * hs)
      ..quadraticBezierTo(w * 0.28, h * 0.28 * hs, w * 0.42, h * 0.26 * hs)
      ..lineTo(w * 0.68, h * 0.24 * hs)
      ..quadraticBezierTo(w * 0.88, h * 0.30 * hs, w * 0.90, h * 0.42 * hs)
      ..lineTo(w * 0.88, h * 0.58 * hs)
      ..quadraticBezierTo(w * 0.86, h * 0.68 * hs, w * 0.72, h * 0.70 * hs)
      ..lineTo(w * 0.28, h * 0.70 * hs)
      ..quadraticBezierTo(w * 0.14, h * 0.68 * hs, w * 0.12, h * 0.62 * hs)
      ..close();

    final bodyPaint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [
          Color.lerp(car.bodyColor, Colors.white, 0.22)!,
          car.bodyColor,
          Color.lerp(car.bodyColor, Colors.black, 0.25)!,
        ],
      ).createShader(Offset.zero & size);
    canvas.drawPath(bodyPath, bodyPaint);

    final trim = Paint()
      ..color = car.accentColor.withValues(alpha: 0.85)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.2;
    canvas.drawPath(bodyPath, trim);

    final glass = Paint()..color = const Color(0xFF0EA5E9).withValues(alpha: 0.35);
    final glassPath = Path()
      ..moveTo(w * 0.38, h * 0.30 * hs)
      ..lineTo(w * 0.62, h * 0.28 * hs)
      ..lineTo(w * 0.66, h * 0.42 * hs)
      ..lineTo(w * 0.36, h * 0.44 * hs)
      ..close();
    canvas.drawPath(glassPath, glass);

    if (!removedHood) {
      final hood = Paint()..color = Color.lerp(car.bodyColor, Colors.white, 0.08)!;
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(w * 0.30, h * 0.34 * hs, w * 0.28, h * 0.12 * hs),
          const Radius.circular(8),
        ),
        hood,
      );
    } else {
      final bay = Paint()..color = const Color(0xFF1E293B).withValues(alpha: 0.75);
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(w * 0.28, h * 0.32 * hs, w * 0.32, h * 0.16 * hs),
          const Radius.circular(6),
        ),
        bay,
      );
    }

    if (car.id == 'pickup') {
      final bed = Paint()..color = Color.lerp(car.bodyColor, Colors.black, 0.15)!;
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(w * 0.58, h * 0.38 * hs, w * 0.26, h * 0.28 * hs),
          const Radius.circular(4),
        ),
        bed,
      );
    }

    if (car.id == 'suv') {
      final rack = Paint()
        ..color = Colors.white.withValues(alpha: 0.5)
        ..strokeWidth = 2;
      canvas.drawLine(Offset(w * 0.36, h * 0.26 * hs), Offset(w * 0.64, h * 0.24 * hs), rack);
    }
  }

  void _drawWheel(Canvas canvas, Offset center, double r, Color color) {
    canvas.drawCircle(center, r, Paint()..color = Colors.black.withValues(alpha: 0.5));
    canvas.drawCircle(center, r * 0.82, Paint()..color = color);
    canvas.drawCircle(center, r * 0.35, Paint()..color = Colors.grey.shade400);
    for (var i = 0; i < 5; i++) {
      final a = i * math.pi * 2 / 5;
      canvas.drawLine(
        center,
        center + Offset(math.cos(a) * r * 0.65, math.sin(a) * r * 0.65),
        Paint()
          ..color = Colors.white.withValues(alpha: 0.35)
          ..strokeWidth = 2,
      );
    }
  }

  @override
  bool shouldRepaint(covariant _CarBodyPainter old) =>
      old.car != car || old.removedHood != removedHood;
}
