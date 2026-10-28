import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';

// ═════════════════════════════════════════════════════════════════════════════
// What a wiring fault looks like in the simulation: blue arcs on live metal, flying sparks, rising smoke, flames.
// Everything here is drawn inside the training scene. Each kind is a different fault, so not every mistake makes a fire.
// ═════════════════════════════════════════════════════════════════════════════

double _h(num a) {
  final x = math.sin(a * 12.9898) * 43758.5453;
  return x - x.floorToDouble();
}

/// Draws a fault effect. [kind] is arc, spark, smoke, fire or smolder. [at] maps a point in the device's own space
/// (x to the right, y up, z out of the wall; a wall outlet is about 5 across and 8 tall) to the scene, and [u] is how big
/// that is compared with a wall outlet in the job (the close-up bench is smaller).
void faultEffect(MeshBuilder b, String kind, V3 Function(V3 local) at, double u, double t) {
  if (kind == 'none' || kind.isEmpty) return;
  b.id = 0;
  void sparks(int n, double speed) {
    for (var i = 0; i < n; i++) {
      final ph = (t * 1.8 + i * 0.173) % 1.0;
      final a = _h(i * 3.1 + (t * 1.8 + i * 0.173).floor()) * math.pi * 2;
      final sp = speed * (0.6 + _h(i + 5) * 0.8);
      final pos = V3(math.cos(a) * ph * sp, math.sin(a) * ph * sp - ph * ph * 6, 3 + ph * 3);
      b.ball(at(pos), 0.3 * u * (1 - ph * 0.6) + 0.05 * u, Color.lerp(const Color(0xFFFFF3A0), const Color(0xFFFF6A00), ph)!, shine: 0, lat: 3, lon: 5);
    }
  }

  void smoke(int n, double dark, double rise) {
    b.alpha = 0.34;
    for (var i = 0; i < n; i++) {
      final ph = (t * 0.45 + i / n) % 1.0;
      final c = V3(math.sin(i * 1.7 + t) * 1.4 + ph * 1.5, ph * rise - 1, 3.5 + ph * 4);
      b.ball(at(c), (1.1 + ph * 3.4) * u, Color.lerp(Color.lerp(const Color(0xFF17171A), const Color(0xFF3B3B40), 1 - dark)!, const Color(0xFF8E8E96), ph)!, shine: 0, lat: 3, lon: 6);
    }
    b.alpha = 1;
  }

  switch (kind) {
    case 'arc':
      // Blue-white bolts that jump between the screws: they flicker, so some beats show none.
      final frame = (t * 14).floor();
      for (var k = 0; k < 3; k++) {
        if (_h(frame * 3.1 + k * 7.7) < 0.3) continue;
        final sy = 2.2 - k * 2.0, ey = 1.6 - k * 2.0;
        final pts = <V3>[];
        for (var i = 0; i <= 6; i++) {
          final f = i / 6;
          final j = (i == 0 || i == 6) ? 0.0 : (_h(frame + k * 13 + i) - 0.5) * 1.6;
          pts.add(at(V3(-1.8 + 3.6 * f, sy + (ey - sy) * f + j, 3.3)));
        }
        b.tube(pts, 0.1 * u, Color.lerp(Colors.white, const Color(0xFF60A5FA), _h(frame + k))!, shine: 0, sides: 4, joints: false);
      }
      b.alpha = 0.16 + 0.1 * math.sin(t * 31);
      b.ball(at(const V3(0, 0, 3.6)), 3.2 * u, const Color(0xFF93C5FD), shine: 0, lat: 4, lon: 8);
      b.alpha = 1;
    case 'spark':
      sparks(22, 7);
      b.alpha = 0.2 + 0.1 * math.sin(t * 26);
      b.ball(at(const V3(0, 0, 3.4)), 2.4 * u, const Color(0xFFFFE08A), shine: 0, lat: 4, lon: 8);
      b.alpha = 1;
    case 'smoke':
      // Something is overheating: it glows red, then it smokes.
      b.alpha = 0.3 + 0.08 * math.sin(t * 7);
      b.ball(at(const V3(0, 0, 3.2)), 2.6 * u, const Color(0xFFEF4444), shine: 0, lat: 4, lon: 8);
      b.alpha = 1;
      smoke(9, 0.8, 11);
      sparks(5, 3);
    case 'fire':
      // A flash, flames, flying sparks and a lot of smoke.
      b.alpha = 0.3 + 0.12 * math.sin(t * 20);
      b.ball(at(const V3(0, 0, 3.4)), 4.4 * u, const Color(0xFFFB923C), shine: 0, lat: 4, lon: 8);
      b.alpha = 1;
      final beat = (t * 11).floor();
      for (var i = 0; i < 6; i++) {
        final x = -2.2 + i * 0.88;
        final hgt = 2.4 + _h(beat + i * 5) * 3.6;
        b.cyl(at(V3(x, -2.2, 3)), at(V3(x + (_h(beat + i) - 0.5) * 1.2, -2.2 + hgt, 3.4)), 0.85 * u, const Color(0xFFEA580C), r1: 0.05 * u, sides: 6, shine: 0);
        b.cyl(at(V3(x, -2.2, 3.1)), at(V3(x, -2.2 + hgt * 0.62, 3.5)), 0.5 * u, const Color(0xFFFACC15), r1: 0.04 * u, sides: 6, shine: 0);
      }
      sparks(16, 6);
      smoke(10, 1.0, 13);
    case 'smolder':
      // Afterwards, the burnt device still smokes a little.
      smoke(4, 0.9, 9);
  }
}
