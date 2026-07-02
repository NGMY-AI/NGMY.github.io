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
  NgmyCarVec3 operator -(NgmyCarVec3 o) => NgmyCarVec3(x - o.x, y - o.y, z - o.z);
  NgmyCarVec3 operator *(double s) => NgmyCarVec3(x * s, y * s, z * s);

  NgmyCarVec3 rotateY(double angle, {double pivotX = 0, double pivotZ = 0}) {
    final lx = x - pivotX;
    final lz = z - pivotZ;
    final c = math.cos(angle);
    final s = math.sin(angle);
    return NgmyCarVec3(pivotX + lx * c + lz * s, y, pivotZ - lx * s + lz * c);
  }
}

class NgmyCarMeshFace {
  const NgmyCarMeshFace({
    required this.verts,
    required this.color,
    this.shade = 1.0,
    this.hideWhenPartRemoved,
    this.isGlass = false,
    this.isWheel = false,
    this.isInterior = false,
  });

  final List<NgmyCarVec3> verts;
  final Color color;
  final double shade;
  final String? hideWhenPartRemoved;
  final bool isGlass;
  final bool isWheel;
  final bool isInterior;
}

class NgmyMechanicCarDoorState {
  const NgmyMechanicCarDoorState({
    this.frontLeft = 0,
    this.frontRight = 0,
    this.rearLeft = 0,
    this.rearRight = 0,
    this.hood = 0,
  });

  final double frontLeft;
  final double frontRight;
  final double rearLeft;
  final double rearRight;
  final double hood;

  bool get anyOpen =>
      frontLeft > 0.01 || frontRight > 0.01 || rearLeft > 0.01 || rearRight > 0.01 || hood > 0.01;

  @override
  bool operator ==(Object other) =>
      other is NgmyMechanicCarDoorState &&
      other.frontLeft == frontLeft &&
      other.frontRight == frontRight &&
      other.rearLeft == rearLeft &&
      other.rearRight == rearRight &&
      other.hood == hood;

  @override
  int get hashCode => Object.hash(frontLeft, frontRight, rearLeft, rearRight, hood);
}

class NgmyCar3DProjector {
  NgmyCar3DProjector({required this.rotY, required this.rotX, required this.zoom, required this.viewport});

  final double rotY;
  final double rotX;
  final double zoom;
  final Size viewport;

  static const _cameraDist = 9.5;

  NgmyCarVec3 _rotate(NgmyCarVec3 v) {
    final cy = math.cos(rotY);
    final sy = math.sin(rotY);
    final x1 = v.x * cy + v.z * sy;
    final z1 = -v.x * sy + v.z * cy;
    final cx = math.cos(rotX);
    final sx = math.sin(rotX);
    final y2 = v.y * cx - z1 * sx;
    final z2 = v.y * sx + z1 * cx;
    return NgmyCarVec3(x1, y2, z2 + _cameraDist);
  }

  Offset project(NgmyCarVec3 v) {
    final r = _rotate(v);
    final focal = viewport.width * 0.52 * zoom;
    final persp = focal / r.z.clamp(2.5, 24.0);
    return Offset(
      viewport.width * 0.5 + r.x * persp,
      viewport.height * 0.56 - r.y * persp,
    );
  }

  double depth(NgmyCarVec3 v) => _rotate(v).z;

  NgmyCarVec3 worldNormal(NgmyCarVec3 a, NgmyCarVec3 b, NgmyCarVec3 c) {
    final ab = b - a;
    final ac = c - a;
    final nx = ab.y * ac.z - ab.z * ac.y;
    final ny = ab.z * ac.x - ab.x * ac.z;
    final nz = ab.x * ac.y - ab.y * ac.x;
    final len = math.sqrt(nx * nx + ny * ny + nz * nz);
    if (len < 1e-6) return const NgmyCarVec3(0, 1, 0);
    final w = NgmyCarVec3(nx / len, ny / len, nz / len);
    final cy = math.cos(rotY);
    final sy = math.sin(rotY);
    final x1 = w.x * cy + w.z * sy;
    final z1 = -w.x * sy + w.z * cy;
    final cx = math.cos(rotX);
    final sx = math.sin(rotX);
    final y2 = w.y * cx - z1 * sx;
    final z2 = w.y * sx + z1 * cx;
    return NgmyCarVec3(x1, y2, z2);
  }
}

class _CarMeshBuilder {
  _CarMeshBuilder(this.car, this.doors);

  final NgmyMechanicCarProfile car;
  final NgmyMechanicCarDoorState doors;
  final faces = <NgmyCarMeshFace>[];

  late final double ls;
  late final double hs;
  late final Color body;
  late final Color accent;
  late final Color wheelColor;
  late final Color glass;
  late final Color dark;
  late final Color light;
  late final Color trim;
  late final Color grille;
  late final Color headlight;
  late final Color taillight;
  late final Color bay;
  late final Color tire;
  late final Color interior;
  late final Color seat;
  late final double gz;
  late final double wheelR;
  late final double wheelY;
  late final double wheelX;
  late final double wheelFrontZ;
  late final double wheelRearZ;
  late final double sill;
  late final double belt;
  late final double roof;
  late final double front;
  late final double rear;
  late final double cabinFront;
  late final double cabinRear;
  late final double hoodEnd;
  late final double w;
  late final double doorSplit;

  void init() {
    ls = car.lengthScale;
    hs = car.heightScale;
    body = car.bodyColor;
    accent = car.accentColor;
    wheelColor = car.wheelColor;
    glass = const Color(0xFF93C5FD);
    dark = Color.lerp(body, Colors.black, 0.38)!;
    light = Color.lerp(body, Colors.white, 0.32)!;
    trim = const Color(0xFFD1D5DB);
    grille = const Color(0xFF111827);
    headlight = const Color(0xFFFEF9C3);
    taillight = const Color(0xFFEF4444);
    bay = const Color(0xFF374151);
    tire = const Color(0xFF0B0F19);
    interior = const Color(0xFF1F2937);
    seat = const Color(0xFF374151);

    gz = switch (car.id) {
      'suv' => 0.48 * hs,
      'sports' => 0.26 * hs,
      'pickup' => 0.44 * hs,
      _ => 0.38 * hs,
    };

    wheelR = (car.id == 'suv' ? 0.42 : car.id == 'sports' ? 0.34 : 0.38) * hs;
    wheelY = wheelR * 0.98;
    wheelX = 0.96 * ls;
    wheelFrontZ = -1.48 * ls;
    wheelRearZ = 1.38 * ls;
    sill = gz + 0.06;
    belt = sill + (car.id == 'suv' ? 0.44 : car.id == 'sports' ? 0.30 : 0.38) * hs;
    roof = belt + (car.id == 'sports' ? 0.26 : 0.36) * hs;
    front = -2.12 * ls;
    rear = 2.12 * ls;
    cabinFront = -0.62 * ls;
    cabinRear = car.id == 'pickup' ? 0.38 * ls : 0.98 * ls;
    hoodEnd = cabinFront;
    w = 0.94 * ls;
    doorSplit = (cabinFront + cabinRear) / 2;
  }

  void quad(
    NgmyCarVec3 a,
    NgmyCarVec3 b,
    NgmyCarVec3 c,
    NgmyCarVec3 d,
    Color c0, {
    double shade = 1,
    String? hide,
    bool glass = false,
    bool interior = false,
  }) {
    faces.add(NgmyCarMeshFace(verts: [a, b, c], color: c0, shade: shade, hideWhenPartRemoved: hide, isGlass: glass, isInterior: interior));
    faces.add(NgmyCarMeshFace(verts: [a, c, d], color: c0, shade: shade, hideWhenPartRemoved: hide, isGlass: glass, isInterior: interior));
  }

  void tri(NgmyCarVec3 a, NgmyCarVec3 b, NgmyCarVec3 c, Color c0, {double shade = 1, String? hide, bool glass = false, bool wheel = false}) {
    faces.add(NgmyCarMeshFace(verts: [a, b, c], color: c0, shade: shade, hideWhenPartRemoved: hide, isGlass: glass, isWheel: wheel));
  }

  void box(double x0, double x1, double y0, double y1, double z0, double z1, Color color, {double shade = 1, String? hide, bool interior = false}) {
    quad(NgmyCarVec3(x0, y0, z0), NgmyCarVec3(x1, y0, z0), NgmyCarVec3(x1, y1, z0), NgmyCarVec3(x0, y1, z0), color, shade: shade, hide: hide, interior: interior);
    quad(NgmyCarVec3(x1, y0, z1), NgmyCarVec3(x0, y0, z1), NgmyCarVec3(x0, y1, z1), NgmyCarVec3(x1, y1, z1), color, shade: shade * 0.92, hide: hide, interior: interior);
    quad(NgmyCarVec3(x0, y0, z1), NgmyCarVec3(x0, y0, z0), NgmyCarVec3(x0, y1, z0), NgmyCarVec3(x0, y1, z1), color, shade: shade * 0.85, hide: hide, interior: interior);
    quad(NgmyCarVec3(x1, y0, z0), NgmyCarVec3(x1, y0, z1), NgmyCarVec3(x1, y1, z1), NgmyCarVec3(x1, y1, z0), color, shade: shade * 0.88, hide: hide, interior: interior);
    quad(NgmyCarVec3(x0, y1, z0), NgmyCarVec3(x1, y1, z0), NgmyCarVec3(x1, y1, z1), NgmyCarVec3(x0, y1, z1), color, shade: shade * 1.08, hide: hide, interior: interior);
    quad(NgmyCarVec3(x0, y0, z1), NgmyCarVec3(x1, y0, z1), NgmyCarVec3(x1, y0, z0), NgmyCarVec3(x0, y0, z0), color, shade: shade * 0.72, hide: hide, interior: interior);
  }

  void cylinderY(double cx, double cz, double radius, double halfWidth, Color color, {int segments = 14, double shade = 1, bool wheel = false}) {
    for (var i = 0; i < segments; i++) {
      final a0 = i / segments * math.pi * 2;
      final a1 = (i + 1) / segments * math.pi * 2;
      final y0 = wheelY + math.sin(a0) * radius;
      final y1 = wheelY + math.sin(a1) * radius;
      final r0 = math.cos(a0) * radius;
      final r1 = math.cos(a1) * radius;
      tri(
        NgmyCarVec3(cx - halfWidth, wheelY, cz),
        NgmyCarVec3(cx - halfWidth, y0, cz + r0),
        NgmyCarVec3(cx - halfWidth, y1, cz + r1),
        color,
        shade: shade,
        wheel: wheel,
      );
      tri(
        NgmyCarVec3(cx + halfWidth, wheelY, cz),
        NgmyCarVec3(cx + halfWidth, y1, cz + r1),
        NgmyCarVec3(cx + halfWidth, y0, cz + r0),
        color,
        shade: shade * 0.95,
        wheel: wheel,
      );
      quad(
        NgmyCarVec3(cx - halfWidth, y0, cz + r0),
        NgmyCarVec3(cx + halfWidth, y0, cz + r0),
        NgmyCarVec3(cx + halfWidth, y1, cz + r1),
        NgmyCarVec3(cx - halfWidth, y1, cz + r1),
        color,
        shade: shade * 0.9,
        interior: wheel,
      );
    }
  }

  void addWheel(double x, double z, {bool showCaliper = false}) {
    cylinderY(x, z, wheelR * 0.92, 0.11, tire, segments: 18, shade: 0.78, wheel: true);
    cylinderY(x, z, wheelR * 0.62, 0.075, wheelColor, segments: 16, shade: 1.05, wheel: true);
    const spokes = 5;
    for (var i = 0; i < spokes; i++) {
      final mid = i / spokes * math.pi * 2;
      final half = math.pi / spokes * 0.32;
      final a0 = mid - half;
      final a1 = mid + half;
      final y0 = wheelY + math.sin(a0) * wheelR * 0.55;
      final y1 = wheelY + math.sin(a1) * wheelR * 0.55;
      final r0 = math.cos(a0) * wheelR * 0.55;
      final r1 = math.cos(a1) * wheelR * 0.55;
      final outward = x > 0 ? 1.0 : -1.0;
      tri(
        NgmyCarVec3(x + outward * 0.01, wheelY, z),
        NgmyCarVec3(x + outward * 0.07, y0, z + r0),
        NgmyCarVec3(x + outward * 0.07, y1, z + r1),
        trim,
        shade: 1.2,
        wheel: true,
      );
    }
    if (showCaliper) {
      box(x - 0.02, x + 0.02, wheelY + wheelR * 0.08, wheelY + wheelR * 0.28, z - wheelR * 0.12, z + wheelR * 0.12, const Color(0xFFB91C1C), shade: 0.95);
    }
  }

  void addWheelArch(double x, double z) {
    const arcSegs = 10;
    final archR = wheelR * 1.18;
    for (var i = 0; i < arcSegs; i++) {
      final a = math.pi * 0.06 + (math.pi * 0.88) * (i / arcSegs);
      final a2 = math.pi * 0.06 + (math.pi * 0.88) * ((i + 1) / arcSegs);
      final y0 = wheelY + math.cos(a) * archR;
      final y1 = wheelY + math.cos(a2) * archR;
      final zz0 = z + math.sin(a) * archR * 0.52;
      final zz1 = z + math.sin(a2) * archR * 0.52;
      tri(
        NgmyCarVec3(x, y0, zz0),
        NgmyCarVec3(x, y1, zz1),
        NgmyCarVec3(x - (x > 0 ? 0.06 : -0.06), math.min(y0, y1) - 0.03, (zz0 + zz1) / 2),
        dark,
        shade: 0.58,
      );
    }
  }

  List<NgmyCarVec3> _doorPanelVerts({
    required double side,
    required double zFront,
    required double zRear,
    required double openAngle,
  }) {
    final hingeX = side * w;
    final hingeZ = zFront;
    final pts = [
      NgmyCarVec3(hingeX, sill + 0.02, zFront + 0.02),
      NgmyCarVec3(hingeX, sill + 0.02, zRear - 0.02),
      NgmyCarVec3(hingeX, roof - 0.04, zRear - 0.06),
      NgmyCarVec3(hingeX, roof - 0.04, zFront + 0.06),
    ];
    return pts.map((p) => p.rotateY(openAngle * side, pivotX: hingeX, pivotZ: hingeZ)).toList();
  }

  void addDoor({
    required double side,
    required double zFront,
    required double zRear,
    required double openAngle,
  }) {
    final v = _doorPanelVerts(side: side, zFront: zFront, zRear: zRear, openAngle: openAngle);
    quad(v[0], v[1], v[2], v[3], body, shade: side > 0 ? 0.96 : 0.9);
    final midZ = (zFront + zRear) / 2;
    final handle = [
      NgmyCarVec3(side * w * 1.002, belt + 0.06, midZ - 0.05).rotateY(openAngle * side, pivotX: side * w, pivotZ: zFront),
      NgmyCarVec3(side * w * 1.002, belt + 0.06, midZ + 0.05).rotateY(openAngle * side, pivotX: side * w, pivotZ: zFront),
      NgmyCarVec3(side * w * 1.002, belt + 0.09, midZ + 0.05).rotateY(openAngle * side, pivotX: side * w, pivotZ: zFront),
      NgmyCarVec3(side * w * 1.002, belt + 0.09, midZ - 0.05).rotateY(openAngle * side, pivotX: side * w, pivotZ: zFront),
    ];
    quad(handle[0], handle[1], handle[2], handle[3], trim, shade: 1.18);
    if (openAngle > 0.15) {
      final inner = [
        NgmyCarVec3(side * (w - 0.04), sill + 0.04, zFront + 0.06),
        NgmyCarVec3(side * (w - 0.04), sill + 0.04, zRear - 0.06),
        NgmyCarVec3(side * (w - 0.04), roof - 0.08, zRear - 0.1),
        NgmyCarVec3(side * (w - 0.04), roof - 0.08, zFront + 0.1),
      ].map((p) => p.rotateY(openAngle * side, pivotX: side * w, pivotZ: zFront)).toList();
      quad(inner[0], inner[1], inner[2], inner[3], interior, shade: 0.82, interior: true);
    }
  }

  void addInterior() {
    final floorY = sill + 0.04;
    box(-w * 0.72, w * 0.72, floorY, floorY + 0.02, cabinFront + 0.12, cabinRear - 0.12, const Color(0xFF111827), shade: 0.75, interior: true);

    void seatBlock(double sx, double sz) {
      box(sx - 0.22, sx + 0.22, floorY + 0.02, floorY + 0.28, sz - 0.18, sz + 0.18, seat, shade: 0.88, interior: true);
      box(sx - 0.2, sx + 0.2, floorY + 0.28, floorY + 0.52, sz - 0.16, sz + 0.04, seat, shade: 0.95, interior: true);
    }

    seatBlock(-0.28, cabinFront + 0.35);
    seatBlock(0.28, cabinFront + 0.35);
    seatBlock(-0.28, doorSplit + 0.22);
    seatBlock(0.28, doorSplit + 0.22);

    box(-w * 0.55, w * 0.55, floorY + 0.18, belt - 0.02, cabinFront + 0.08, cabinFront + 0.28, interior, shade: 0.9, interior: true);
    box(-0.04, 0.04, floorY + 0.22, floorY + 0.38, cabinFront + 0.12, cabinFront + 0.22, trim, shade: 1.05, interior: true);

    const wheelSegs = 10;
    final swZ = cabinFront + 0.18;
    for (var i = 0; i < wheelSegs; i++) {
      final a0 = i / wheelSegs * math.pi * 2;
      final a1 = (i + 1) / wheelSegs * math.pi * 2;
      tri(
        NgmyCarVec3(-0.26, floorY + 0.34, swZ),
        NgmyCarVec3(-0.26 + math.cos(a0) * 0.11, floorY + 0.34 + math.sin(a0) * 0.11, swZ),
        NgmyCarVec3(-0.26 + math.cos(a1) * 0.11, floorY + 0.34 + math.sin(a1) * 0.11, swZ),
        trim,
        shade: 1.1,
      );
    }
  }

  void addBodyShell({required bool showHood}) {
    quad(
      NgmyCarVec3(-w, sill, front),
      NgmyCarVec3(w, sill, front),
      NgmyCarVec3(w, sill, rear),
      NgmyCarVec3(-w, sill, rear),
      dark,
      shade: 0.7,
    );

    quad(
      NgmyCarVec3(-w, sill, front),
      NgmyCarVec3(-w, sill, rear),
      NgmyCarVec3(-w, belt, rear),
      NgmyCarVec3(-w, belt, front),
      dark,
      shade: 0.84,
    );
    quad(
      NgmyCarVec3(w, sill, rear),
      NgmyCarVec3(w, sill, front),
      NgmyCarVec3(w, belt, front),
      NgmyCarVec3(w, belt, rear),
      dark,
      shade: 0.9,
    );

    if (showHood) {
      final hoodLift = doors.hood * 0.55;
      final h0 = belt + hoodLift;
      quad(
        NgmyCarVec3(-w * 0.9, h0, hoodEnd),
        NgmyCarVec3(w * 0.9, h0, hoodEnd),
        NgmyCarVec3(w * 0.86, h0 + 0.08, front + 0.32),
        NgmyCarVec3(-w * 0.86, h0 + 0.08, front + 0.32),
        light,
        shade: 1.1,
        hide: 'hood',
      );
      quad(
        NgmyCarVec3(-w * 0.86, h0 + 0.08, front + 0.32),
        NgmyCarVec3(w * 0.86, h0 + 0.08, front + 0.32),
        NgmyCarVec3(w * 0.8, h0 + 0.04, front + 0.05),
        NgmyCarVec3(-w * 0.8, h0 + 0.04, front + 0.05),
        body,
        shade: 1.02,
        hide: 'hood',
      );
    } else {
      quad(
        NgmyCarVec3(-w * 0.72, belt - 0.02, hoodEnd),
        NgmyCarVec3(w * 0.72, belt - 0.02, hoodEnd),
        NgmyCarVec3(w * 0.68, belt + 0.02, front + 0.22),
        NgmyCarVec3(-w * 0.68, belt + 0.02, front + 0.22),
        bay,
        shade: 0.88,
      );
      box(-0.32, 0.32, sill + 0.04, belt - 0.04, -1.18 * ls, -0.72 * ls, const Color(0xFF475569), shade: 0.94);
      box(-0.18, 0.18, sill + 0.06, belt - 0.08, -0.95 * ls, -0.78 * ls, const Color(0xFF64748B), shade: 1.0);
    }

    quad(
      NgmyCarVec3(-w * 0.84, belt, cabinFront),
      NgmyCarVec3(-w * 0.84, belt, cabinRear),
      NgmyCarVec3(-w * 0.84, roof, cabinRear - 0.04),
      NgmyCarVec3(-w * 0.84, roof, cabinFront + 0.04),
      body,
      shade: 0.93,
    );
    quad(
      NgmyCarVec3(w * 0.84, belt, cabinRear),
      NgmyCarVec3(w * 0.84, belt, cabinFront),
      NgmyCarVec3(w * 0.84, roof, cabinFront + 0.04),
      NgmyCarVec3(w * 0.84, roof, cabinRear - 0.04),
      body,
      shade: 0.98,
    );

    quad(
      NgmyCarVec3(-w * 0.8, roof, cabinFront + 0.04),
      NgmyCarVec3(w * 0.8, roof, cabinFront + 0.04),
      NgmyCarVec3(w * 0.8, roof, cabinRear - 0.04),
      NgmyCarVec3(-w * 0.8, roof, cabinRear - 0.04),
      light,
      shade: 1.14,
    );

    quad(
      NgmyCarVec3(-w * 0.76, belt + 0.02, cabinFront),
      NgmyCarVec3(w * 0.76, belt + 0.02, cabinFront),
      NgmyCarVec3(w * 0.7, roof - 0.02, cabinFront + 0.2),
      NgmyCarVec3(-w * 0.7, roof - 0.02, cabinFront + 0.2),
      glass,
      shade: 1.12,
      glass: true,
    );
    quad(
      NgmyCarVec3(-w * 0.7, roof - 0.02, cabinRear - 0.2),
      NgmyCarVec3(w * 0.7, roof - 0.02, cabinRear - 0.2),
      NgmyCarVec3(w * 0.76, belt + 0.02, cabinRear),
      NgmyCarVec3(-w * 0.76, belt + 0.02, cabinRear),
      glass,
      shade: 1.04,
      glass: true,
    );

    for (final sx in [-1.0, 1.0]) {
      quad(
        NgmyCarVec3(sx * w * 1.001, sill + 0.02, doorSplit - 0.01),
        NgmyCarVec3(sx * w * 1.001, sill + 0.02, doorSplit + 0.01),
        NgmyCarVec3(sx * w * 1.001, roof - 0.02, doorSplit + 0.01),
        NgmyCarVec3(sx * w * 1.001, roof - 0.02, doorSplit - 0.01),
        dark,
        shade: 0.52,
      );
    }

    if (car.id != 'pickup') {
      quad(
        NgmyCarVec3(-w * 0.86, belt, cabinRear),
        NgmyCarVec3(w * 0.86, belt, cabinRear),
        NgmyCarVec3(w * 0.8, belt + 0.05, rear - 0.12),
        NgmyCarVec3(-w * 0.8, belt + 0.05, rear - 0.12),
        body,
        shade: 0.95,
      );
      quad(
        NgmyCarVec3(-w * 0.8, belt + 0.05, rear - 0.12),
        NgmyCarVec3(w * 0.8, belt + 0.05, rear - 0.12),
        NgmyCarVec3(w * 0.76, belt, rear),
        NgmyCarVec3(-w * 0.76, belt, rear),
        dark,
        shade: 0.82,
      );
    } else {
      quad(
        NgmyCarVec3(-w * 0.86, belt, cabinRear),
        NgmyCarVec3(w * 0.86, belt, cabinRear),
        NgmyCarVec3(w * 0.86, belt, rear),
        NgmyCarVec3(-w * 0.86, belt, rear),
        Color.lerp(body, Colors.black, 0.22)!,
        shade: 0.88,
      );
      box(-w * 0.86, w * 0.86, sill + 0.08, belt, cabinRear, rear, dark, shade: 0.78);
    }
  }

  void addFrontRear() {
    quad(
      NgmyCarVec3(-w * 0.92, sill - 0.02, front + 0.06),
      NgmyCarVec3(w * 0.92, sill - 0.02, front + 0.06),
      NgmyCarVec3(w * 0.92, belt - 0.06, front),
      NgmyCarVec3(-w * 0.92, belt - 0.06, front),
      dark,
      shade: 0.76,
    );
    quad(
      NgmyCarVec3(-w * 0.82, sill - 0.05, front + 0.08),
      NgmyCarVec3(w * 0.82, sill - 0.05, front + 0.08),
      NgmyCarVec3(w * 0.82, sill + 0.02, front + 0.02),
      NgmyCarVec3(-w * 0.82, sill + 0.02, front + 0.02),
      Color.lerp(dark, Colors.black, 0.35)!,
      shade: 0.62,
    );

    for (var i = 0; i < 5; i++) {
      final t0 = i / 5;
      final t1 = (i + 0.72) / 5;
      final y0 = sill + 0.08 + (belt - 0.06 - (sill + 0.08)) * t0;
      final y1 = sill + 0.08 + (belt - 0.06 - (sill + 0.08)) * t1;
      quad(
        NgmyCarVec3(-w * 0.4, y0, front - 0.03),
        NgmyCarVec3(w * 0.4, y0, front - 0.03),
        NgmyCarVec3(w * 0.4, y1, front - 0.03),
        NgmyCarVec3(-w * 0.4, y1, front - 0.03),
        grille,
        shade: 0.68,
      );
    }

    for (final sx in [-1.0, 1.0]) {
      box(sx * w * 0.68, sx * w * 0.88, sill + 0.06, belt - 0.04, front - 0.04, front + 0.02, headlight, shade: 1.22);
      quad(
        NgmyCarVec3(sx * w * 0.58, sill + 0.01, front + 0.01),
        NgmyCarVec3(sx * w * 0.66, sill + 0.01, front + 0.01),
        NgmyCarVec3(sx * w * 0.66, sill + 0.07, front + 0.01),
        NgmyCarVec3(sx * w * 0.58, sill + 0.07, front + 0.01),
        trim,
        shade: 1.08,
      );
    }

    quad(
      NgmyCarVec3(-w * 0.78, sill + 0.04, rear),
      NgmyCarVec3(w * 0.78, sill + 0.04, rear),
      NgmyCarVec3(w * 0.78, belt - 0.02, rear + 0.02),
      NgmyCarVec3(-w * 0.78, belt - 0.02, rear + 0.02),
      dark,
      shade: 0.8,
    );

    for (final sx in [-1.0, 1.0]) {
      box(sx * w * 0.68, sx * w * 0.88, sill + 0.05, belt - 0.02, rear - 0.02, rear + 0.04, taillight, shade: 1.18);
    }

    box(w * 0.3, w * 0.42, sill - 0.05, sill + 0.05, rear - 0.01, rear + 0.03, trim, shade: 0.92);
  }

  void addDetails() {
    for (final sx in [-1.0, 1.0]) {
      box(sx * w * 1.01, sx * (w * 1.01 + 0.07), belt + 0.02, belt + 0.14, cabinFront + 0.06, cabinFront + 0.14, trim, shade: 1.08);
      quad(
        NgmyCarVec3(sx * w * 1.001, belt - 0.01, hoodEnd),
        NgmyCarVec3(sx * w * 1.001, belt - 0.01, cabinRear),
        NgmyCarVec3(sx * w * 1.001, belt + 0.01, cabinRear),
        NgmyCarVec3(sx * w * 1.001, belt + 0.01, hoodEnd),
        accent,
        shade: 1.14,
      );
    }

    if (car.id == 'sports') {
      box(-w * 0.52, w * 0.52, roof + 0.02, roof + 0.1, cabinRear - 0.04, cabinRear + 0.06, const Color(0xFF111827), shade: 0.88);
    }
    if (car.id == 'suv') {
      box(-w * 0.68, -w * 0.62, roof + 0.02, roof + 0.06, cabinFront, cabinRear, trim, shade: 1.12);
      box(w * 0.62, w * 0.68, roof + 0.02, roof + 0.06, cabinFront, cabinRear, trim, shade: 1.12);
    }
  }

  List<NgmyCarMeshFace> build({required bool showHood}) {
    init();

    quad(
      NgmyCarVec3(-w * 1.05, 0.015, front + 0.15),
      NgmyCarVec3(w * 1.05, 0.015, front + 0.15),
      NgmyCarVec3(w * 1.05, 0.015, rear - 0.15),
      NgmyCarVec3(-w * 1.05, 0.015, rear - 0.15),
      Colors.black.withValues(alpha: 0.42),
      shade: 0.5,
    );

    addInterior();
    addBodyShell(showHood: showHood);

    addDoor(side: -1, zFront: cabinFront, zRear: doorSplit, openAngle: doors.frontLeft * 0.72);
    addDoor(side: 1, zFront: cabinFront, zRear: doorSplit, openAngle: doors.frontRight * 0.72);
    addDoor(side: -1, zFront: doorSplit, zRear: cabinRear, openAngle: doors.rearLeft * 0.68);
    addDoor(side: 1, zFront: doorSplit, zRear: cabinRear, openAngle: doors.rearRight * 0.68);

    addFrontRear();
    addDetails();

    addWheelArch(-w, wheelFrontZ);
    addWheelArch(w, wheelFrontZ);
    addWheelArch(-w, wheelRearZ);
    addWheelArch(w, wheelRearZ);
    addWheel(-wheelX, wheelFrontZ, showCaliper: true);
    addWheel(wheelX, wheelFrontZ, showCaliper: true);
    addWheel(-wheelX, wheelRearZ);
    addWheel(wheelX, wheelRearZ);

    return faces;
  }
}

List<NgmyCarMeshFace> ngmyBuildMechanicCarMesh(
  NgmyMechanicCarProfile car, {
  required bool showHood,
  NgmyMechanicCarDoorState doors = const NgmyMechanicCarDoorState(),
}) {
  return _CarMeshBuilder(car, doors).build(showHood: showHood);
}

class NgmyMechanicCarMeshPainter extends CustomPainter {
  NgmyMechanicCarMeshPainter({
    required this.car,
    required this.rotY,
    required this.rotX,
    required this.zoom,
    required this.removedPartIds,
    this.doors = const NgmyMechanicCarDoorState(),
  });

  final NgmyMechanicCarProfile car;
  final double rotY;
  final double rotX;
  final double zoom;
  final Set<String> removedPartIds;
  final NgmyMechanicCarDoorState doors;

  static const _lightDir = NgmyCarVec3(-0.35, 0.72, 0.58);

  @override
  void paint(Canvas canvas, Size size) {
    final projector = NgmyCar3DProjector(rotY: rotY, rotX: rotX, zoom: zoom, viewport: size);
    final showHood = !removedPartIds.contains('hood');
    final faces = ngmyBuildMechanicCarMesh(car, showHood: showHood, doors: doors)
        .where((f) => f.hideWhenPartRemoved == null || !removedPartIds.contains(f.hideWhenPartRemoved))
        .toList();

    final projected = <({NgmyCarMeshFace face, List<Offset> pts, List<NgmyCarVec3> world, double z})>[];
    for (final face in faces) {
      final pts = face.verts.map(projector.project).toList();
      final z = face.verts.map(projector.depth).reduce((a, b) => a + b) / face.verts.length;
      projected.add((face: face, pts: pts, world: face.verts, z: z));
    }
    projected.sort((a, b) => a.z.compareTo(b.z));

    for (final item in projected) {
      final path = Path()..moveTo(item.pts[0].dx, item.pts[0].dy);
      for (var i = 1; i < item.pts.length; i++) {
        path.lineTo(item.pts[i].dx, item.pts[i].dy);
      }
      path.close();

      final n = projector.worldNormal(item.world[0], item.world[1], item.world[2]);
      final ndotl = (n.x * _lightDir.x + n.y * _lightDir.y + n.z * _lightDir.z).clamp(0.22, 1.0);
      final base = item.face.color;
      final lit = Color.lerp(base, Colors.black, 1.0 - (ndotl * item.face.shade.clamp(0.55, 1.25))) ?? base;

      final paint = Paint()
        ..shader = ui.Gradient.linear(
          item.pts.first,
          item.pts.last,
          [
            Color.lerp(lit, Colors.white, item.face.isGlass ? 0.42 : item.face.isInterior ? 0.08 : 0.14)!,
            lit,
          ],
        )
        ..style = PaintingStyle.fill;

      canvas.drawPath(path, paint);

      if (item.face.isGlass) {
        canvas.drawPath(
          path,
          Paint()
            ..color = Colors.white.withValues(alpha: doors.anyOpen ? 0.12 : 0.28)
            ..style = PaintingStyle.stroke
            ..strokeWidth = 1.4,
        );
        canvas.drawPath(
          path,
          Paint()
            ..color = const Color(0xFFBAE6FD).withValues(alpha: 0.18)
            ..style = PaintingStyle.fill,
        );
      } else {
        canvas.drawPath(
          path,
          Paint()
            ..color = Colors.white.withValues(alpha: item.face.isWheel ? 0.1 : item.face.isInterior ? 0.06 : 0.16)
            ..style = PaintingStyle.stroke
            ..strokeWidth = item.face.isInterior ? 0.5 : 0.85,
        );
      }
    }

    final hl = Paint()
      ..shader = RadialGradient(
        colors: [Colors.white.withValues(alpha: 0.1), Colors.transparent],
      ).createShader(Rect.fromCircle(center: Offset(size.width * 0.44, size.height * 0.3), radius: size.width * 0.38));
    canvas.drawRect(Offset.zero & size, hl);

    final groundGlow = Paint()
      ..shader = RadialGradient(
        colors: [
          kNgmyMechanicAccent.withValues(alpha: 0.14),
          Colors.transparent,
        ],
      ).createShader(Rect.fromCircle(center: Offset(size.width * 0.5, size.height * 0.72), radius: size.width * 0.42));
    canvas.drawRect(Offset.zero & size, groundGlow);
  }

  @override
  bool shouldRepaint(covariant NgmyMechanicCarMeshPainter old) =>
      old.rotY != rotY ||
      old.rotX != rotX ||
      old.zoom != zoom ||
      old.car != car ||
      old.removedPartIds != removedPartIds ||
      old.doors != doors;
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
