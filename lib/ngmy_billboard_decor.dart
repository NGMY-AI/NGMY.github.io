import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';

// What stands round a billboard so it is a place and not a stick with a board: a footing, a catwalk with a rail, lamps, beacons, braces, a service hut,
// a fence, a truck, cones, bushes and flowers, and then extras that make each kind of board its own (a highway barrier, a tower ladder, neon tubes
// and a glowing street, a stage with speakers, a gate with towers and flags). All in the board's own space: the face looks toward +z, y is up.

const Color _steel = Color(0xFF4B5563), _conc = Color(0xFF9CA3AF), _dark = Color(0xFF111827), _leaf = Color(0xFF3F8F4D), _lamp = Color(0xFFFFF1A8);

/// Adds the surroundings of one board to [out]. [place] puts a point of the board's own space into the scene (the board's turn and position).
void billboardDecor(
  MeshBuilder out,
  String kind,
  V3 Function(V3) place, {
  required double yaw,
  required double bw,
  required double bh,
  required double yBottom,
  required double yTop,
  required double thick,
  required Color frame,
}) {
  final d = MeshBuilder()..order = 2;
  void box(double x, double y, double z, double sx, double sy, double sz, Color c, {double shine = 0.1}) => d.box(place(V3(x, y, z)), V3(sx, sy, sz), c, shine: shine, yaw: yaw);
  void cyl(double x0, double y0, double z0, double x1, double y1, double z1, double r, Color c, {int sides = 8, double? r1}) =>
      d.cyl(place(V3(x0, y0, z0)), place(V3(x1, y1, z1)), r, c, sides: sides, r1: r1 ?? -1);
  void ball(double x, double y, double z, double r, Color c, {double shine = 0.2}) => d.ball(place(V3(x, y, z)), r, c, shine: shine, lat: 4, lon: 8);
  // A soft halo of light: a see-through ball.
  void halo(double x, double y, double z, double r, Color c) {
    d.alpha = 0.25;
    d.bias = 2;
    d.ball(place(V3(x, y, z)), r, c, shine: 0, lat: 4, lon: 8);
    d.alpha = 1;
    d.bias = 0;
  }
  final zp = -thick / 2;
  final s = math.max(0.8, bw / 400);

  // ── Every board: footings, a catwalk with a rail and a ladder, lamps, beacons ──
  final standsOnTwoPoles = kind != 'tower' && kind != 'screen' && kind != 'gate';
  if (standsOnTwoPoles) {
    for (final x in const [-1.0, 1.0]) {
      box(x * bw * 0.3, 7, zp, 30 * s, 14, 30 * s, _conc, shine: 0.05);
      box(x * bw * 0.3, 16, zp, 22 * s, 4, 22 * s, _steel);
    }
    // Braces: a cross between the two poles and a rail across them.
    cyl(-bw * 0.3, 30, zp, bw * 0.3, yBottom - 40, zp, 2.2 * s, _steel);
    cyl(bw * 0.3, 30, zp, -bw * 0.3, yBottom - 40, zp, 2.2 * s, _steel);
    cyl(-bw * 0.3, yBottom * 0.55, zp, bw * 0.3, yBottom * 0.55, zp, 3 * s, _steel);
  }
  // The catwalk along the bottom of the board, with a rail and posts and a ladder on the left.
  final cw = bw * 0.92;
  box(0, yBottom - 12, 26, cw, 3, 38, _steel, shine: 0.25);
  box(0, yBottom - 15, 8, cw, 4, 4, _steel);
  for (var i = 0; i <= 8; i++) {
    final x = -cw / 2 + i * cw / 8;
    cyl(x, yBottom - 11, 43, x, yBottom + 12, 43, 1.4, _steel, sides: 5);
  }
  box(0, yBottom + 12, 43, cw, 2.4, 2.4, frame, shine: 0.3);
  box(0, yBottom + 1, 43, cw, 1.6, 1.6, _steel);
  for (final x in [-cw / 2 + 10, -cw / 2 + 26]) {
    cyl(x, 6, 30, x, yBottom - 12, 30, 1.6, _steel, sides: 5);
  }
  for (var y = 20.0; y < yBottom - 14; y += 18) {
    cyl(-cw / 2 + 10, y, 30, -cw / 2 + 26, y, 30, 1.0, _steel, sides: 5);
  }
  // Lamps on arms over the top edge, shining down on the face.
  for (var i = 0; i < 4; i++) {
    final x = -bw * 0.36 + i * bw * 0.24;
    cyl(x, yTop + 6, -2, x, yTop + 24, 34, 1.8, _steel, sides: 6);
    box(x, yTop + 25, 40, 26, 9, 16, _dark, shine: 0.2);
    box(x, yTop + 20.5, 40, 22, 1.4, 12, _lamp, shine: 0.8);
  }
  // Red beacons on the top corners.
  for (final x in const [-1.0, 1.0]) {
    cyl(x * (bw / 2 + 8), yTop, 3, x * (bw / 2 + 8), yTop + 16, 3, 1.6, _steel, sides: 5);
    ball(x * (bw / 2 + 8), yTop + 20, 3, 6, const Color(0xFFEF4444), shine: 0.6);
  }

  // ── On the ground round it ──
  // A service hut at the side, with a door, a window and a slanted roof.
  final hx = bw * 0.62 + 60;
  box(hx, 32, -50, 90, 64, 70, const Color(0xFFE5E7EB));
  box(hx, 66, -50, 100, 6, 80, const Color(0xFF7F1D1D));
  box(hx - 22, 24, -14, 24, 46, 2, const Color(0xFF6B3F1D));
  box(hx + 18, 36, -14, 26, 20, 2, const Color(0xFF93C5FD), shine: 0.5);
  box(hx, 56, -13.5, 70, 6, 1, frame);
  // A fence behind the board and the hut.
  for (var i = -6; i <= 6; i++) {
    cyl(i * bw * 0.14, 0, -150, i * bw * 0.14, 28, -150, 1.8, _steel, sides: 5);
  }
  box(0, 24, -150, bw * 1.68, 2, 2, _steel);
  box(0, 10, -150, bw * 1.68, 2, 2, _steel);
  // Traffic cones, bushes and flowers.
  for (final x in [-bw * 0.55, -bw * 0.5, bw * 0.55]) {
    cyl(x, 0, 95, x, 18, 95, 8, const Color(0xFFF97316), sides: 8, r1: 2.5);
    box(x, 1.5, 95, 18, 3, 18, _dark);
  }
  for (var i = 0; i < 6; i++) {
    final x = -bw * 0.48 + i * bw * 0.19;
    ball(x, 9, 56 + (i.isEven ? 0 : 18), 12 + (i % 3) * 3, _leaf, shine: 0.05);
    for (var j = 0; j < 3; j++) {
      ball(x - 6 + j * 6, 21, 62 + (i.isEven ? 0 : 18), 2.6, const [Color(0xFFF472B6), Color(0xFFFACC15), Color(0xFFFFFFFF)][(i + j) % 3], shine: 0.1);
    }
  }
  // A parked pickup truck.
  final tx = -bw * 0.72 - 40;
  box(tx, 14, 140, 120, 16, 52, const Color(0xFFDC2626), shine: 0.3);
  box(tx - 18, 30, 140, 50, 16, 48, const Color(0xFFDC2626), shine: 0.3);
  box(tx - 18, 31, 140, 40, 12, 49, const Color(0xFF93C5FD), shine: 0.5);
  box(tx + 36, 24, 140, 48, 4, 48, const Color(0xFF7F1D1D));
  for (final dx in const [-34.0, 34.0]) {
    for (final dz in const [-26.0, 26.0]) {
      cyl(tx + dx, 9, 140 + dz, tx + dx, 9, 140 + dz + (dz > 0 ? 5 : -5), 9, _dark, sides: 10);
    }
  }

  // ── What makes each kind its own ──
  switch (kind) {
    case 'highway':
      // Concrete barriers in a row in front, a strip of road with lane marks, and two cars passing.
      for (var i = -5; i <= 5; i++) {
        box(i * bw * 0.16, 12, 210, bw * 0.14, 24, 14, _conc, shine: 0.05);
        box(i * bw * 0.16, 25, 210, bw * 0.12, 3, 9, const Color(0xFFFACC15));
      }
      d.quad(place(V3(-bw * 1.0, 0.6, 250)), place(V3(bw * 1.0, 0.6, 250)), place(V3(bw * 1.0, 0.6, 400)), place(V3(-bw * 1.0, 0.6, 400)), const Color(0xFF2B2F38), normal: const V3(0, 1, 0));
      for (var i = -4; i <= 4; i++) {
        d.quad(place(V3(i * bw * 0.22, 0.9, 322)), place(V3(i * bw * 0.22 + bw * 0.1, 0.9, 322)), place(V3(i * bw * 0.22 + bw * 0.1, 0.9, 328)), place(V3(i * bw * 0.22, 0.9, 328)), const Color(0xFFF8FAFC), normal: const V3(0, 1, 0));
      }
      for (final (x, c) in [(-bw * 0.3, const Color(0xFF2563EB)), (bw * 0.22, const Color(0xFFFACC15))]) {
        box(x, 14, 290, 74, 14, 34, c, shine: 0.4);
        box(x - 4, 27, 290, 40, 12, 30, const Color(0xFF93C5FD), shine: 0.5);
        for (final dx in const [-24.0, 24.0]) {
          for (final dz in const [-17.0, 17.0]) {
            cyl(x + dx, 7, 290 + dz, x + dx, 7, 290 + dz + (dz > 0 ? 4 : -4), 7, _dark, sides: 10);
          }
        }
      }
    case 'tower':
      // Bands on the pole, a ladder cage, a base platform with a fence, an antenna and a big beacon on top.
      for (final y in [yBottom * 0.3, yBottom * 0.6, yBottom - 30]) {
        cyl(0, y, zp, 0, y + 10, zp, 17 * s, frame, sides: 12);
      }
      for (var y = 30.0; y < yBottom - 30; y += 16) {
        cyl(-19 * s, y, zp + 18 * s, 19 * s, y, zp + 18 * s, 0.9, _steel, sides: 4);
      }
      for (final x in const [-19.0, 19.0]) {
        cyl(x * s, 20, zp + 18 * s, x * s, yBottom - 20, zp + 18 * s, 1.4, _steel, sides: 5);
      }
      box(0, 4, 0, 160 * s, 8, 160 * s, _conc, shine: 0.05);
      box(0, 10, 0, 100 * s, 4, 100 * s, _steel);
      cyl(0, yTop + 4, zp, 0, yTop + 70, zp, 2.2, _steel, sides: 6);
      ball(0, yTop + 74, zp, 8, const Color(0xFFEF4444), shine: 0.7);
      halo(0, yTop + 74, zp, 14, const Color(0xFFEF4444));
    case 'neon':
      // Neon tubes round the board, a glowing pool on the street, a diner front and two coloured lamps.
      const pink = Color(0xFFEC4899), cyan = Color(0xFF22D3EE);
      for (final (m, col) in [(14.0, pink), (24.0, cyan)]) {
        final x1 = bw / 2 + m, y1 = yTop + m - 4, y0 = yBottom - m + 4;
        box(0, y1, 5, bw + m * 2, 3.2, 3.2, col, shine: 0.9);
        box(0, y0, 5, bw + m * 2, 3.2, 3.2, col, shine: 0.9);
        box(-x1, (y1 + y0) / 2, 5, 3.2, y1 - y0, 3.2, col, shine: 0.9);
        box(x1, (y1 + y0) / 2, 5, 3.2, y1 - y0, 3.2, col, shine: 0.9);
      }
      d.alpha = 0.22;
      d.quad(place(V3(-bw * 0.8, 0.7, 40)), place(V3(bw * 0.8, 0.7, 40)), place(V3(bw * 0.7, 0.7, 240)), place(V3(-bw * 0.7, 0.7, 240)), cyan, normal: const V3(0, 1, 0));
      d.quad(place(V3(-bw * 0.4, 0.8, 60)), place(V3(bw * 0.4, 0.8, 60)), place(V3(bw * 0.3, 0.8, 200)), place(V3(-bw * 0.3, 0.8, 200)), pink, normal: const V3(0, 1, 0));
      d.alpha = 1;
      final fx = -bw * 0.62 - 90;
      box(fx, 50, -30, 150, 100, 90, const Color(0xFF1F2937));
      box(fx, 90, 20, 160, 10, 24, pink, shine: 0.5);
      box(fx, 40, 16, 110, 50, 2, const Color(0xFFFDE68A), shine: 0.6);
      box(fx, 76, 16, 90, 12, 2, cyan, shine: 0.9);
      for (final x in [bw * 0.55, -bw * 0.5]) {
        cyl(x, 0, 150, x, 110, 150, 2.6, _steel, sides: 6);
        ball(x, 116, 150, 9, x > 0 ? pink : cyan, shine: 0.9);
        halo(x, 116, 150, 20, x > 0 ? pink : cyan);
      }
    case 'screen':
      // A stage under the screen with steps, speaker stacks, a lighting truss and a crowd barrier.
      box(0, 7, 40, bw * 1.1, 14, 130, const Color(0xFF374151), shine: 0.15);
      for (var i = 0; i < 3; i++) {
        box(0, 3 + i * 3, 120 + i * 10, 110, 4, 12, const Color(0xFF4B5563));
      }
      for (final x in const [-1.0, 1.0]) {
        box(x * bw * 0.62, 36, 40, 44, 44, 40, _dark, shine: 0.2);
        box(x * bw * 0.62, 66, 40, 36, 16, 34, _dark, shine: 0.2);
        ball(x * bw * 0.62, 34, 61, 11, const Color(0xFF374151), shine: 0.4);
        ball(x * bw * 0.62, 66, 58, 6, const Color(0xFF374151), shine: 0.4);
        cyl(x * bw * 0.45, 14, 70, x * bw * 0.45, yTop + 30, 70, 3, _steel, sides: 6);
      }
      box(0, yTop + 30, 70, bw * 0.9, 4, 4, _steel);
      for (var i = 0; i < 5; i++) {
        final x = -bw * 0.36 + i * bw * 0.18;
        box(x, yTop + 22, 70, 16, 12, 14, _dark);
        box(x, yTop + 16, 70, 12, 1.4, 10, const [Color(0xFFEC4899), Color(0xFF22D3EE), Color(0xFFFACC15), Color(0xFF4ADE80), Color(0xFFA78BFA)][i], shine: 0.8);
      }
      for (var i = -7; i <= 7; i++) {
        cyl(i * bw * 0.075, 0, 220, i * bw * 0.075, 20, 220, 1.6, _steel, sides: 5);
      }
      box(0, 18, 220, bw * 1.2, 2, 2, _steel);
    case 'gate':
      // Two stone towers with battlements and torches, flags, and a paved way through the arch.
      for (final x in const [-1.0, 1.0]) {
        final tx = x * (bw / 2 + 110);
        box(tx, 130, zp, 80, 260, 80, const Color(0xFFB8AFA0), shine: 0.05);
        for (var i = 0; i < 4; i++) {
          box(tx - 30 + i * 20, 270, zp, 12, 16, 80, const Color(0xFFB8AFA0), shine: 0.05);
        }
        box(tx, 100, zp + 41, 26, 36, 2, _dark);
        cyl(tx, 280, zp, tx, 330, zp, 1.8, _steel, sides: 5);
        d.quad(place(V3(tx, 330, zp)), place(V3(tx + x * 46, 322, zp)), place(V3(tx + x * 46, 298, zp)), place(V3(tx, 306, zp)), frame, normal: const V3(0, 0, 1), twoSided: true);
        ball(tx + x * 52, 60, zp + 46, 7, const Color(0xFFF97316), shine: 0.8);
        halo(tx + x * 52, 60, zp + 46, 15, const Color(0xFFF97316));
      }
      d.quad(place(V3(-bw * 0.35, 0.7, -80)), place(V3(bw * 0.35, 0.7, -80)), place(V3(bw * 0.3, 0.7, 320)), place(V3(-bw * 0.3, 0.7, 320)), const Color(0xFFC2B59B), normal: const V3(0, 1, 0));
  }
  out.polys.addAll(d.polys);
}
