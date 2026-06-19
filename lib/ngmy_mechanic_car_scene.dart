import 'package:flutter/material.dart';

import 'ngmy_mechanic_car_mesh.dart';
import 'ngmy_mechanic_studio_models.dart';

/// Interactive 3D car bay — drag to orbit, pinch to zoom, tap parts to select.
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
  double _rotY = -0.62;
  double _rotX = 0.22;
  double _zoom = 1.05;
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
        final projector = NgmyCar3DProjector(rotY: _rotY, rotX: _rotX, zoom: _zoom, viewport: Size(w, h));

        return GestureDetector(
          onScaleUpdate: (d) {
            setState(() {
              if ((d.scale - 1.0).abs() > 0.01) {
                _zoom = (_zoom * d.scale).clamp(0.8, 1.55);
              }
              _rotY += d.focalPointDelta.dx * 0.008;
              _rotX = (_rotX + d.focalPointDelta.dy * 0.006).clamp(-0.35, 0.48);
            });
          },
          child: Stack(
            fit: StackFit.expand,
            children: [
              CustomPaint(painter: _GarageFloorPainter()),
              CustomPaint(
                painter: NgmyMechanicCarMeshPainter(
                  car: widget.car,
                  rotY: _rotY,
                  rotX: _rotX,
                  zoom: _zoom,
                  removedPartIds: widget.removedPartIds,
                ),
              ),
              ...widget.parts.map((p) => _buildPartMarker(p, projector)),
              Positioned(
                left: 12,
                bottom: 12,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    color: Colors.black.withValues(alpha: 0.5),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: kNgmyMechanicAccent.withValues(alpha: 0.4)),
                  ),
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.threed_rotation_rounded, color: kNgmyMechanicAccent, size: 16),
                        SizedBox(width: 6),
                        Text(
                          'Drag to rotate · Pinch to zoom',
                          style: TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              Positioned(
                right: 12,
                top: 12,
                child: _viewPresetButton(Icons.refresh_rounded, 'Reset view', () {
                  setState(() {
                    _rotY = -0.62;
                    _rotX = 0.22;
                    _zoom = 1.05;
                  });
                }),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _viewPresetButton(IconData icon, String tip, VoidCallback onTap) {
    return Tooltip(
      message: tip,
      child: Material(
        color: Colors.black.withValues(alpha: 0.45),
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(10),
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Icon(icon, color: Colors.white70, size: 18),
          ),
        ),
      ),
    );
  }

  Widget _buildPartMarker(NgmyMechanicCarPart part, NgmyCar3DProjector projector) {
    if (widget.removedPartIds.contains(part.id)) return const SizedBox.shrink();

    final selected = widget.selectedPartId == part.id;
    final center = ngmyProjectMechanicPart(part, projector, widget.explodeStrength);
    final size = 38.0 * part.size;

    return Positioned(
      left: center.dx - size / 2,
      top: center.dy - size / 2,
      child: AnimatedBuilder(
        animation: _pulse,
        builder: (context, child) {
          final glow = selected ? 0.35 + _pulse.value * 0.25 : 0.0;
          return Material(
            color: Colors.transparent,
            elevation: selected ? 8 : 2,
            shadowColor: part.color.withValues(alpha: 0.6),
            shape: const CircleBorder(),
            child: InkWell(
              onTap: () => widget.onPartTap(part),
              customBorder: const CircleBorder(),
              child: Container(
                width: size,
                height: size,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(
                    colors: [
                      part.color.withValues(alpha: 0.98),
                      part.color.withValues(alpha: 0.55),
                    ],
                  ),
                  border: Border.all(
                    color: selected ? kNgmyMechanicAccent : Colors.white.withValues(alpha: 0.5),
                    width: selected ? 2.5 : 1.5,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: part.color.withValues(alpha: 0.5 + glow),
                      blurRadius: selected ? 20 : 10,
                      spreadRadius: selected ? 2 : 0,
                    ),
                    if (selected)
                      BoxShadow(
                        color: kNgmyMechanicAccent.withValues(alpha: glow),
                        blurRadius: 26,
                        spreadRadius: 4,
                      ),
                  ],
                ),
                child: Icon(part.icon, color: Colors.white, size: 18 * part.size),
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
        colors: [Color(0xFF1E293B), Color(0xFF0B1220), Color(0xFF020617)],
      ).createShader(rect);
    canvas.drawRect(rect, bg);

    final horizon = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          kNgmyMechanicAccent2.withValues(alpha: 0.06),
          Colors.transparent,
        ],
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height * 0.5));
    canvas.drawRect(rect, horizon);

    final grid = Paint()
      ..color = kNgmyMechanicAccent2.withValues(alpha: 0.1)
      ..strokeWidth = 1;
    const step = 32.0;
    final floorY = size.height * 0.52;
    for (var x = -size.width; x < size.width * 2; x += step) {
      canvas.drawLine(Offset(x, floorY), Offset(x + size.width * 0.35, size.height), grid);
    }
    for (var y = floorY; y < size.height; y += step * 0.85) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y + size.width * 0.06), grid);
    }

    final spotlight = Paint()
      ..shader = RadialGradient(
        colors: [
          kNgmyMechanicAccent.withValues(alpha: 0.16),
          kNgmyMechanicAccent2.withValues(alpha: 0.04),
          Colors.transparent,
        ],
        stops: const [0.0, 0.45, 1.0],
      ).createShader(Rect.fromCircle(center: Offset(size.width * 0.5, size.height * 0.38), radius: size.width * 0.62));
    canvas.drawRect(rect, spotlight);

    final lift = Paint()..color = const Color(0xFF334155).withValues(alpha: 0.85);
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(size.width * 0.5, size.height * 0.72), width: size.width * 0.55, height: 14),
        const Radius.circular(4),
      ),
      lift,
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(size.width * 0.5, size.height * 0.72), width: size.width * 0.48, height: 6),
        const Radius.circular(2),
      ),
      Paint()..color = kNgmyMechanicAccent.withValues(alpha: 0.35),
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
