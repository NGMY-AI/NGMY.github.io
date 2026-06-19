import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_mechanic_studio_models.dart';

class NgmyCarVec3 {
  const NgmyCarVec3(this.x, this.y, this.z);
  final double x;
  final double y;
  final double z;

  NgmyCarVec3 operator +(NgmyCarVec3 o) => NgmyCarVec3(x + o.x, y + o.y, z + o.z);
  NgmyCarVec3 operator *(double s) => NgmyCarVec3(x * s, y * s, z * s);
}

class NgmyCarMeshFace {
  const NgmyCarMeshFace({
    required this.verts,
    required this.color,
    this.shade = 1.0,
    this.hideWhenPartRemoved,
    this.isGlass = false,
    this.isWheel = false,
  });

  final List<NgmyCarVec3> verts;
  final Color color;
  final double shade;
  final String? hideWhenPartRemoved;
  final bool isGlass;
  final bool isWheel;
}

class NgmyCar3DProjector {
  NgmyCar3DProjector({required this.rotY, required this.rotX, required this.zoom, required this.viewport});

  final double rotY;
  final double rotX;
  final double zoom;
  final Size viewport;

  NgmyCarVec3 _rotate(NgmyCarVec3 v) {
    final cy = math.cos(rotY);
    final sy = math.sin(rotY);
    final x1 = v.x * cy + v.z * sy;
    final z1 = -v.x * sy + v.z * cy;
    final cx = math.cos(rotX);
    final sx = math.sin(rotX);
    final y2 = v.y * cx - z1 * sx;
    final z2 = v.y * sx + z1 * cx;
    return NgmyCarVec3(x1, y2, z2);
  }

  Offset project(NgmyCarVec3 v) {
    final r = _rotate(v);
    final scale = viewport.width * 0.11 * zoom;
    return Offset(
      viewport.width * 0.5 + r.x * scale,
      viewport.height * 0.58 - r.y * scale + r.z * scale * 0.18,
    );
  }

  double depth(NgmyCarVec3 v) => _rotate(v).z;
}

List<NgmyCarMeshFace> ngmyBuildMechanicCarMesh(NgmyMechanicCarProfile car, {required bool showHood}) {
  final ls = car.lengthScale;
  final hs = car.heightScale;
  final body = car.bodyColor;
  final accent = car.accentColor;
  final wheelColor = car.wheelColor;
  final glass = const Color(0xFF7DD3FC);
  final dark = Color.lerp(body, Colors.black, 0.35)!;
  final light = Color.lerp(body, Colors.white, 0.28)!;
  final trim = const Color(0xFFCBD5E1);
  final grille = const Color(0xFF1E293B);
  final headlight = const Color(0xFFFEF08A);
  final taillight = const Color(0xFFEF4444);
  final bay = const Color(0xFF334155);
  final tire = const Color(0xFF0F172A);

  final faces = <NgmyCarMeshFace>[];

  double gz = 0.38 * hs;
  if (car.id == 'suv') gz = 0.48 * hs;
  if (car.id == 'sports') gz = 0.28 * hs;
  if (car.id == 'pickup') gz = 0.44 * hs;

  final wheelR = (car.id == 'suv' ? 0.40 : 0.36) * hs;
  final wheelY = wheelR;
  final wheelX = 0.94 * ls;
  final wheelFrontZ = -1.45 * ls;
  final wheelRearZ = 1.35 * ls;

  void addWheel(double x, double z) {
    const segments = 10;
    for (var i = 0; i < segments; i++) {
      final a0 = i / segments * math.pi * 2;
      final a1 = (i + 1) / segments * math.pi * 2;
      final y0 = wheelY + math.sin(a0) * wheelR * 0.55;
      final y1 = wheelY + math.sin(a1) * wheelR * 0.55;
      final r0 = math.cos(a0) * wheelR * 0.55;
      final r1 = math.cos(a1) * wheelR * 0.55;
      faces.add(NgmyCarMeshFace(
        verts: [
          NgmyCarVec3(x, wheelY, z),
          NgmyCarVec3(x + r0 * (x > 0 ? 0.12 : -0.12), y0, z + r0),
          NgmyCarVec3(x + r1 * (x > 0 ? 0.12 : -0.12), y1, z + r1),
        ],
        color: tire,
        shade: 0.75,
        isWheel: true,
      ));
      faces.add(NgmyCarMeshFace(
        verts: [
          NgmyCarVec3(x, wheelY, z),
          NgmyCarVec3(x + r0 * (x > 0 ? 0.08 : -0.08), y0, z + r0),
          NgmyCarVec3(x + r1 * (x > 0 ? 0.08 : -0.08), y1, z + r1),
        ],
        color: wheelColor,
        shade: 1.05,
        isWheel: true,
      ));
    }
    faces.add(NgmyCarMeshFace(
      verts: [
        NgmyCarVec3(x - 0.06, wheelY, z),
        NgmyCarVec3(x + 0.06, wheelY, z),
        NgmyCarVec3(x, wheelY + 0.04, z + 0.06),
      ],
      color: trim,
      shade: 1.2,
      isWheel: true,
    ));
  }

  addWheel(-wheelX, wheelFrontZ);
  addWheel(wheelX, wheelFrontZ);
  addWheel(-wheelX, wheelRearZ);
  addWheel(wheelX, wheelRearZ);

  void quad(NgmyCarVec3 a, NgmyCarVec3 b, NgmyCarVec3 c, NgmyCarVec3 d, Color c0, {double shade = 1, String? hide, bool glass = false}) {
    faces.add(NgmyCarMeshFace(verts: [a, b, c], color: c0, shade: shade, hideWhenPartRemoved: hide, isGlass: glass));
    faces.add(NgmyCarMeshFace(verts: [a, c, d], color: c0, shade: shade, hideWhenPartRemoved: hide, isGlass: glass));
  }

  final sill = gz + 0.08;
  final belt = sill + (car.id == 'suv' ? 0.42 : 0.36) * hs;
  final roof = belt + (car.id == 'sports' ? 0.28 : 0.34) * hs;
  final front = -2.05 * ls;
  final rear = 2.05 * ls;
  final cabinFront = -0.65 * ls;
  final cabinRear = (car.id == 'pickup' ? 0.35 : 0.95) * ls;
  final hoodEnd = cabinFront;
  final w = 0.92 * ls;

  // Ground shadow plate
  quad(
    NgmyCarVec3(-w, 0.02, front + 0.2),
    NgmyCarVec3(w, 0.02, front + 0.2),
    NgmyCarVec3(w, 0.02, rear - 0.2),
    NgmyCarVec3(-w, 0.02, rear - 0.2),
    Colors.black.withValues(alpha: 0.35),
    shade: 0.5,
  );

  // Lower body sides
  quad(
    NgmyCarVec3(-w, sill, front),
    NgmyCarVec3(-w, sill, rear),
    NgmyCarVec3(-w, belt, rear),
    NgmyCarVec3(-w, belt, front),
    dark,
    shade: 0.82,
  );
  quad(
    NgmyCarVec3(w, sill, rear),
    NgmyCarVec3(w, sill, front),
    NgmyCarVec3(w, belt, front),
    NgmyCarVec3(w, belt, rear),
    dark,
    shade: 0.88,
  );

  // Hood
  if (showHood) {
    quad(
      NgmyCarVec3(-w * 0.92, belt, hoodEnd),
      NgmyCarVec3(w * 0.92, belt, hoodEnd),
      NgmyCarVec3(w * 0.88, belt + 0.06, front + 0.35),
      NgmyCarVec3(-w * 0.88, belt + 0.06, front + 0.35),
      light,
      shade: 1.08,
      hide: 'hood',
    );
    quad(
      NgmyCarVec3(-w * 0.88, belt + 0.06, front + 0.35),
      NgmyCarVec3(w * 0.88, belt + 0.06, front + 0.35),
      NgmyCarVec3(w * 0.82, belt + 0.02, front),
      NgmyCarVec3(-w * 0.82, belt + 0.02, front),
      body,
      shade: 1.0,
      hide: 'hood',
    );
  } else {
    quad(
      NgmyCarVec3(-w * 0.75, belt - 0.02, hoodEnd),
      NgmyCarVec3(w * 0.75, belt - 0.02, hoodEnd),
      NgmyCarVec3(w * 0.72, belt + 0.02, front + 0.25),
      NgmyCarVec3(-w * 0.72, belt + 0.02, front + 0.25),
      bay,
      shade: 0.9,
    );
    // Engine block visible
    quad(
      NgmyCarVec3(-0.28, sill + 0.05, -1.15 * ls),
      NgmyCarVec3(0.28, sill + 0.05, -1.15 * ls),
      NgmyCarVec3(0.28, belt - 0.05, -0.75 * ls),
      NgmyCarVec3(-0.28, belt - 0.05, -0.75 * ls),
      const Color(0xFF475569),
      shade: 0.95,
    );
  }

  // Cabin sides
  quad(
    NgmyCarVec3(-w, belt, cabinRear),
    NgmyCarVec3(-w, belt, cabinFront),
    NgmyCarVec3(-w, roof, cabinFront + 0.05),
    NgmyCarVec3(-w, roof, cabinRear - 0.05),
    body,
    shade: 0.92,
  );
  quad(
    NgmyCarVec3(w, belt, cabinFront),
    NgmyCarVec3(w, belt, cabinRear),
    NgmyCarVec3(w, roof, cabinRear - 0.05),
    NgmyCarVec3(w, roof, cabinFront + 0.05),
    body,
    shade: 0.98,
  );

  // Roof
  quad(
    NgmyCarVec3(-w * 0.82, roof, cabinFront + 0.05),
    NgmyCarVec3(w * 0.82, roof, cabinFront + 0.05),
    NgmyCarVec3(w * 0.82, roof, cabinRear - 0.05),
    NgmyCarVec3(-w * 0.82, roof, cabinRear - 0.05),
    light,
    shade: 1.12,
  );

  // Windshield
  quad(
    NgmyCarVec3(-w * 0.78, belt + 0.02, cabinFront),
    NgmyCarVec3(w * 0.78, belt + 0.02, cabinFront),
    NgmyCarVec3(w * 0.72, roof - 0.02, cabinFront + 0.18),
    NgmyCarVec3(-w * 0.72, roof - 0.02, cabinFront + 0.18),
    glass,
    shade: 1.15,
    glass: true,
  );

  // Rear window
  quad(
    NgmyCarVec3(-w * 0.72, roof - 0.02, cabinRear - 0.18),
    NgmyCarVec3(w * 0.72, roof - 0.02, cabinRear - 0.18),
    NgmyCarVec3(w * 0.78, belt + 0.02, cabinRear),
    NgmyCarVec3(-w * 0.78, belt + 0.02, cabinRear),
    glass,
    shade: 1.05,
    glass: true,
  );

  // Trunk / rear deck
  if (car.id != 'pickup') {
    quad(
      NgmyCarVec3(-w * 0.88, belt, cabinRear),
      NgmyCarVec3(w * 0.88, belt, cabinRear),
      NgmyCarVec3(w * 0.82, belt + 0.04, rear - 0.15),
      NgmyCarVec3(-w * 0.82, belt + 0.04, rear - 0.15),
      body,
      shade: 0.96,
    );
    quad(
      NgmyCarVec3(-w * 0.82, belt + 0.04, rear - 0.15),
      NgmyCarVec3(w * 0.82, belt + 0.04, rear - 0.15),
      NgmyCarVec3(w * 0.78, belt, rear),
      NgmyCarVec3(-w * 0.78, belt, rear),
      dark,
      shade: 0.85,
    );
  } else {
    // Pickup bed
    quad(
      NgmyCarVec3(-w * 0.88, belt, cabinRear),
      NgmyCarVec3(w * 0.88, belt, cabinRear),
      NgmyCarVec3(w * 0.88, belt, rear),
      NgmyCarVec3(-w * 0.88, belt, rear),
      Color.lerp(body, Colors.black, 0.2)!,
      shade: 0.9,
    );
    quad(
      NgmyCarVec3(-w * 0.88, belt, rear),
      NgmyCarVec3(w * 0.88, belt, rear),
      NgmyCarVec3(w * 0.88, sill + 0.12, rear),
      NgmyCarVec3(-w * 0.88, sill + 0.12, rear),
      dark,
      shade: 0.8,
    );
  }

  // Front bumper & fascia
  quad(
    NgmyCarVec3(-w * 0.95, sill - 0.02, front + 0.08),
    NgmyCarVec3(w * 0.95, sill - 0.02, front + 0.08),
    NgmyCarVec3(w * 0.95, belt - 0.08, front),
    NgmyCarVec3(-w * 0.95, belt - 0.08, front),
    dark,
    shade: 0.78,
  );

  // Grille
  quad(
    NgmyCarVec3(-w * 0.42, sill + 0.06, front - 0.02),
    NgmyCarVec3(w * 0.42, sill + 0.06, front - 0.02),
    NgmyCarVec3(w * 0.42, belt - 0.04, front - 0.02),
    NgmyCarVec3(-w * 0.42, belt - 0.04, front - 0.02),
    grille,
    shade: 0.7,
  );

  // Headlights
  for (final sx in [-1.0, 1.0]) {
    quad(
      NgmyCarVec3(sx * w * 0.72, sill + 0.08, front - 0.01),
      NgmyCarVec3(sx * w * 0.88, sill + 0.08, front - 0.01),
      NgmyCarVec3(sx * w * 0.88, belt - 0.06, front - 0.01),
      NgmyCarVec3(sx * w * 0.72, belt - 0.06, front - 0.01),
      headlight,
      shade: 1.25,
    );
  }

  // Taillights
  for (final sx in [-1.0, 1.0]) {
    quad(
      NgmyCarVec3(sx * w * 0.72, sill + 0.06, rear + 0.01),
      NgmyCarVec3(sx * w * 0.88, sill + 0.06, rear + 0.01),
      NgmyCarVec3(sx * w * 0.88, belt - 0.02, rear + 0.01),
      NgmyCarVec3(sx * w * 0.72, belt - 0.02, rear + 0.01),
      taillight,
      shade: 1.2,
    );
  }

  // Side mirrors
  for (final sx in [-1.0, 1.0]) {
    quad(
      NgmyCarVec3(sx * w * 1.02, belt + 0.12, cabinFront + 0.08),
      NgmyCarVec3(sx * (w * 1.02 + 0.06), belt + 0.12, cabinFront + 0.08),
      NgmyCarVec3(sx * (w * 1.02 + 0.06), belt + 0.02, cabinFront + 0.08),
      NgmyCarVec3(sx * w * 1.02, belt + 0.02, cabinFront + 0.08),
      trim,
      shade: 1.1,
    );
  }

  // Sports spoiler
  if (car.id == 'sports') {
    quad(
      NgmyCarVec3(-w * 0.55, roof + 0.02, cabinRear - 0.05),
      NgmyCarVec3(w * 0.55, roof + 0.02, cabinRear - 0.05),
      NgmyCarVec3(w * 0.55, roof + 0.08, cabinRear + 0.02),
      NgmyCarVec3(-w * 0.55, roof + 0.08, cabinRear + 0.02),
      const Color(0xFF111827),
      shade: 0.9,
    );
  }

  // SUV roof rails
  if (car.id == 'suv') {
    quad(
      NgmyCarVec3(-w * 0.7, roof + 0.03, cabinFront),
      NgmyCarVec3(-w * 0.65, roof + 0.03, cabinFront),
      NgmyCarVec3(-w * 0.65, roof + 0.03, cabinRear),
      NgmyCarVec3(-w * 0.7, roof + 0.03, cabinRear),
      trim,
      shade: 1.15,
    );
    quad(
      NgmyCarVec3(w * 0.65, roof + 0.03, cabinRear),
      NgmyCarVec3(w * 0.7, roof + 0.03, cabinRear),
      NgmyCarVec3(w * 0.7, roof + 0.03, cabinFront),
      NgmyCarVec3(w * 0.65, roof + 0.03, cabinFront),
      trim,
      shade: 1.15,
    );
  }

  // Accent stripe
  quad(
    NgmyCarVec3(-w * 1.01, belt - 0.01, hoodEnd),
    NgmyCarVec3(-w * 1.01, belt - 0.01, cabinRear),
    NgmyCarVec3(-w * 1.01, belt + 0.01, cabinRear),
    NgmyCarVec3(-w * 1.01, belt + 0.01, hoodEnd),
    accent,
    shade: 1.15,
  );

  return faces;
}

class NgmyMechanicCarMeshPainter extends CustomPainter {
  NgmyMechanicCarMeshPainter({
    required this.car,
    required this.rotY,
    required this.rotX,
    required this.zoom,
    required this.removedPartIds,
  });

  final NgmyMechanicCarProfile car;
  final double rotY;
  final double rotX;
  final double zoom;
  final Set<String> removedPartIds;

  @override
  void paint(Canvas canvas, Size size) {
    final projector = NgmyCar3DProjector(rotY: rotY, rotX: rotX, zoom: zoom, viewport: size);
    final showHood = !removedPartIds.contains('hood');
    final faces = ngmyBuildMechanicCarMesh(car, showHood: showHood)
        .where((f) => f.hideWhenPartRemoved == null || !removedPartIds.contains(f.hideWhenPartRemoved))
        .toList();

    final projected = <({NgmyCarMeshFace face, List<Offset> pts, double z})>[];
    for (final face in faces) {
      final pts = face.verts.map(projector.project).toList();
      final z = face.verts.map(projector.depth).reduce((a, b) => a + b) / face.verts.length;
      projected.add((face: face, pts: pts, z: z));
    }
    projected.sort((a, b) => a.z.compareTo(b.z));

    for (final item in projected) {
      final path = Path()..moveTo(item.pts[0].dx, item.pts[0].dy);
      for (var i = 1; i < item.pts.length; i++) {
        path.lineTo(item.pts[i].dx, item.pts[i].dy);
      }
      path.close();

      final base = item.face.color;
      final shaded = Color.lerp(base, Colors.black, 1.0 - item.face.shade.clamp(0.55, 1.25)) ?? base;
      final paint = Paint()
        ..shader = ui.Gradient.linear(
          item.pts.first,
          item.pts.last,
          [
            Color.lerp(shaded, Colors.white, item.face.isGlass ? 0.35 : 0.12)!,
            shaded,
          ],
        )
        ..style = PaintingStyle.fill;

      canvas.drawPath(path, paint);

      if (item.face.isGlass) {
        canvas.drawPath(
          path,
          Paint()
            ..color = Colors.white.withValues(alpha: 0.22)
            ..style = PaintingStyle.stroke
            ..strokeWidth = 1.2,
        );
      } else {
        canvas.drawPath(
          path,
          Paint()
            ..color = Colors.white.withValues(alpha: item.face.isWheel ? 0.08 : 0.14)
            ..style = PaintingStyle.stroke
            ..strokeWidth = 0.8,
        );
      }
    }

    // Spec highlight on body
    final hl = Paint()
      ..shader = RadialGradient(
        colors: [Colors.white.withValues(alpha: 0.08), Colors.transparent],
      ).createShader(Rect.fromCircle(center: Offset(size.width * 0.42, size.height * 0.32), radius: size.width * 0.35));
    canvas.drawRect(Offset.zero & size, hl);
  }

  @override
  bool shouldRepaint(covariant NgmyMechanicCarMeshPainter old) =>
      old.rotY != rotY || old.rotX != rotX || old.zoom != zoom || old.car != car || old.removedPartIds != removedPartIds;
}

Offset ngmyProjectMechanicPart(
  NgmyMechanicCarPart part,
  NgmyCar3DProjector projector,
  double explode,
) {
  final p = NgmyCarVec3(
    part.posX + part.explodeX * explode,
    part.posY + part.explodeY * explode,
    part.posZ + part.explodeZ * explode,
  );
  return projector.project(p);
}
