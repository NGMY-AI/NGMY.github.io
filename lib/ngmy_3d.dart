import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

// ═════════════════════════════════════════════════════════════════════════════
// A small 3D engine: solid shapes with real lighting that you can turn, zoom and tap.
// Everything is drawn from flat shaded polygons, so it needs no plugin and works everywhere.
// ═════════════════════════════════════════════════════════════════════════════

class V3 {
  const V3(this.x, this.y, this.z);
  final double x, y, z;
  static const zero = V3(0, 0, 0);

  V3 operator +(V3 o) => V3(x + o.x, y + o.y, z + o.z);
  V3 operator -(V3 o) => V3(x - o.x, y - o.y, z - o.z);
  V3 operator *(double k) => V3(x * k, y * k, z * k);
  double dot(V3 o) => x * o.x + y * o.y + z * o.z;
  V3 cross(V3 o) => V3(y * o.z - z * o.y, z * o.x - x * o.z, x * o.y - y * o.x);
  double get len => math.sqrt(x * x + y * y + z * z);
  V3 get unit {
    final l = len;
    return l < 1e-9 ? this : V3(x / l, y / l, z / l);
  }

  static V3 lerp(V3 a, V3 b, double t) => V3(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t);
}

V3 rotY(V3 p, double a) {
  final c = math.cos(a), s = math.sin(a);
  return V3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c);
}

/// One flat face. [id] says which object it belongs to (0 means it cannot be tapped).
class Poly {
  const Poly(this.pts, this.n, this.color, this.id, {this.shine = 0, this.alpha = 1, this.twoSided = false, this.layer = 0, this.bias = 0, this.order = 2, this.group = 0});
  final List<V3> pts;
  final V3 n;
  final Color color;
  final int id;
  final double shine;
  final double alpha;
  final bool twoSided;
  final int layer;

  /// Draws this face as if it were a little nearer. Small parts that sit on a big face (screws, slots, plates) use it so the big face never covers them.
  final double bias;

  /// The tier it is drawn in: 0 the shell of a room (floor, walls) first, 1 things fixed to it, 2 everything else, 3 see-through things last.
  /// Inside a tier the faces are sorted far to near.
  final int order;

  /// Faces of one convex part (a limb, a ball, a box) share a group: the whole part is sorted as one, so its own faces can never
  /// end up in front of a neighbour part they should be behind. 0 means each face is sorted by itself.
  final int group;
}

/// What an object is called and what it does, and where the camera goes when it is tapped.
class ObjInfo {
  const ObjInfo(this.name, this.about, this.focus, this.dist);
  final String name;
  final String about;
  final V3 focus;
  final double dist;
}

class Label3D {
  const Label3D(this.at, this.text, this.color);
  final V3 at;
  final String text;
  final Color color;
}

class Scene3D {
  const Scene3D(this.polys, {this.info = const {}, this.labels = const [], this.screens = const [], this.shell});
  final List<Poly> polys;
  final Map<int, ObjInfo> info;
  final List<Label3D> labels;

  /// Real pictures on screens (a TV playing an ad), drawn flat on a four cornered patch of the scene.
  final List<ScreenQuad> screens;

  /// The room box (x from, x to, z from, z to) whose walls are tier 0. When the camera is outside it, those walls are drawn last, so they hide the room.
  final (double, double, double, double)? shell;
}

/// A screen in the scene: where its four corners are (top left, top right, bottom right, bottom left, seen from the front)
/// and how to paint what it shows, at [width] by [height], at a moment [t].
class ScreenQuad {
  const ScreenQuad(this.corners, this.id, this.paint, {this.width = 320, this.height = 180, this.bias = 0.6, this.order = 1, this.group = 0, this.twoSided = false});
  final List<V3> corners;
  final int id;
  final void Function(Canvas canvas, Size size, double t) paint;
  final double width, height;

  /// How much nearer than the middle of the patch it counts as when the scene is sorted, so the wall behind never covers it.
  final double bias;

  /// The drawing tier (see [Poly.order]).
  final int order;

  /// The group (see [Poly.group]) of the frame this screen sits in, so the frame and the picture are sorted as one piece and the frame can never cover the picture.
  final int group;

  /// Also drawn when seen from behind (the picture then shows mirrored), so a TV never goes blank when you walk round it.
  final bool twoSided;
}

// ─── Building shapes ─────────────────────────────────────────────────────────

class MeshBuilder {
  final List<Poly> polys = [];

  /// The object the next shapes belong to, the layer they sit on and how see-through they are.
  int id = 0;
  int layer = 0;
  double alpha = 1;
  double bias = 0;

  /// The tier the next shapes are drawn in (see [Poly.order]), and whether each shape is one sorted group.
  int order = 2;
  bool grouped = false;
  static int _groups = 0;

  /// A fresh group number, for faces made somewhere else that must be sorted together as one part.
  static int newGroup() => ++_groups;
  int _g = 0;
  int _sticky = 0;

  /// Everything built between [startGroup] and [endGroup] is sorted as one piece, in the order it was built. Use it for a wall and
  /// the windows and doors drawn on it, so the wall is always drawn first and the details are never hidden behind it.
  int startGroup() => _sticky = ++_groups;

  /// Goes on building in a group that was started earlier (a wall, then later its skirting board).
  void joinGroup(int g) => _sticky = g;
  void endGroup() => _sticky = 0;

  void _begin() {
    _g = _sticky != 0 ? _sticky : (grouped ? ++_groups : 0);
  }

  void quad(V3 a, V3 b, V3 c, V3 d, Color col, {V3? normal, double shine = 0, bool twoSided = false}) {
    final n = (normal ?? (b - a).cross(d - a)).unit;
    polys.add(Poly([a, b, c, d], n, col, id, shine: shine, alpha: alpha, twoSided: twoSided, layer: layer, bias: bias, order: order, group: _g));
  }

  void tri(V3 a, V3 b, V3 c, Color col, {V3? normal, double shine = 0, bool twoSided = true}) {
    final n = (normal ?? (b - a).cross(c - a)).unit;
    polys.add(Poly([a, b, c], n, col, id, shine: shine, alpha: alpha, twoSided: twoSided, layer: layer, bias: bias, order: order, group: _g));
  }

  /// A block centred on [c] with size [s]. Big faces can be cut into [split] x [split] tiles so they sort properly.
  /// With [ends] false the top and bottom faces are left out (for studs whose ends nobody sees).
  void box(V3 c, V3 s, Color col, {double shine = 0, int split = 1, double yaw = 0, bool ends = true}) {
    _begin();
    final hx = s.x / 2, hy = s.y / 2, hz = s.z / 2;
    V3 r(V3 p) => (yaw == 0 ? p : rotY(p, yaw)) + c;
    V3 rn(V3 p) => yaw == 0 ? p : rotY(p, yaw);
    void face(V3 n, V3 o, V3 u, V3 v) {
      for (var i = 0; i < split; i++) {
        for (var j = 0; j < split; j++) {
          final a = o + u * (i / split) + v * (j / split);
          final b = a + u * (1 / split);
          final cc = b + v * (1 / split);
          final d = a + v * (1 / split);
          polys.add(Poly([r(a), r(b), r(cc), r(d)], rn(n), col, id, shine: shine, alpha: alpha, layer: layer, bias: bias, order: order, group: _g));
        }
      }
    }
    face(V3(0, 0, 1), V3(-hx, -hy, hz), V3(2 * hx, 0, 0), V3(0, 2 * hy, 0));
    face(V3(0, 0, -1), V3(hx, -hy, -hz), V3(-2 * hx, 0, 0), V3(0, 2 * hy, 0));
    face(V3(1, 0, 0), V3(hx, -hy, hz), V3(0, 0, -2 * hz), V3(0, 2 * hy, 0));
    face(V3(-1, 0, 0), V3(-hx, -hy, -hz), V3(0, 0, 2 * hz), V3(0, 2 * hy, 0));
    if (ends) {
      face(V3(0, 1, 0), V3(-hx, hy, hz), V3(2 * hx, 0, 0), V3(0, 0, -2 * hz));
      face(V3(0, -1, 0), V3(-hx, -hy, -hz), V3(2 * hx, 0, 0), V3(0, 0, 2 * hz));
    }
  }

  /// A round bar from [p0] to [p1].
  void cyl(V3 p0, V3 p1, double r, Color col, {double shine = 0, int sides = 14, bool caps = true, bool inner = false, double r1 = -1}) {
    _begin();
    final axis = (p1 - p0).unit;
    final helper = axis.y.abs() < 0.9 ? const V3(0, 1, 0) : const V3(1, 0, 0);
    final u = axis.cross(helper).unit;
    final v = axis.cross(u).unit;
    final rEnd = r1 < 0 ? r : r1;
    V3 dir(int i) => u * math.cos(i * 2 * math.pi / sides) + v * math.sin(i * 2 * math.pi / sides);
    for (var i = 0; i < sides; i++) {
      final d0 = dir(i), d1 = dir(i + 1);
      final n = (d0 + d1).unit;
      polys.add(Poly([p0 + d0 * r, p0 + d1 * r, p1 + d1 * rEnd, p1 + d0 * rEnd], n, col, id, shine: shine, alpha: alpha, twoSided: inner, layer: layer, bias: bias, order: order, group: _g));
      if (caps) {
        polys.add(Poly([p0, p0 + d1 * r, p0 + d0 * r], axis * -1, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias, order: order, group: _g));
        polys.add(Poly([p1, p1 + d0 * rEnd, p1 + d1 * rEnd], axis, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias, order: order, group: _g));
      }
    }
  }

  /// A ball (low detail) centred on [c].
  void ball(V3 c, double r, Color col, {double shine = 0.4, int lat = 6, int lon = 10}) {
    _begin();
    V3 pt(int i, int j) {
      final th = math.pi * i / lat;
      final ph = 2 * math.pi * j / lon;
      return V3(math.sin(th) * math.cos(ph), math.cos(th), math.sin(th) * math.sin(ph));
    }
    for (var i = 0; i < lat; i++) {
      for (var j = 0; j < lon; j++) {
        final a = pt(i, j), b = pt(i, j + 1), cc = pt(i + 1, j + 1), d = pt(i + 1, j);
        polys.add(Poly([c + a * r, c + b * r, c + cc * r, c + d * r], (a + b + cc + d).unit, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias, order: order, group: _g));
      }
    }
  }

  /// A bendy tube (a wire, a pipe, a hose) through [pts].
  void tube(List<V3> pts, double r, Color col, {double shine = 0.25, int sides = 10, bool joints = true, bool endCaps = true, bool inner = false}) {
    _begin();
    for (var i = 0; i + 1 < pts.length; i++) {
      if ((pts[i + 1] - pts[i]).len < 1e-6) continue;
      cyl(pts[i], pts[i + 1], r, col, shine: shine, sides: sides, caps: endCaps && (i == 0 || i == pts.length - 2), inner: inner);
    }
    if (joints) {
      for (var i = 1; i + 1 < pts.length; i++) {
        ball(pts[i], r * 0.98, col, shine: shine, lat: 4, lon: sides);
      }
    }
  }

  /// A flat ring (a washer, a nut face) around the axis from [p0] to [p1].
  void ring(V3 p0, V3 p1, double rOut, double rIn, Color col, {double shine = 0.4, int sides = 16}) {
    _begin();
    cyl(p0, p1, rOut, col, shine: shine, sides: sides, caps: false);
    final axis = (p1 - p0).unit;
    final helper = axis.y.abs() < 0.9 ? const V3(0, 1, 0) : const V3(1, 0, 0);
    final u = axis.cross(helper).unit;
    final v = axis.cross(u).unit;
    V3 dir(int i) => u * math.cos(i * 2 * math.pi / sides) + v * math.sin(i * 2 * math.pi / sides);
    for (final (pp, nn) in [(p0, axis * -1), (p1, axis)]) {
      for (var i = 0; i < sides; i++) {
        polys.add(Poly([pp + dir(i) * rIn, pp + dir(i) * rOut, pp + dir(i + 1) * rOut, pp + dir(i + 1) * rIn], nn, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias, order: order, group: _g));
      }
    }
  }
}

/// Moves and turns a group of faces: turn about the x axis by [rx], then about the y axis by [ry], then slide by [t].
List<Poly> transformPolys(List<Poly> ps, {double rx = 0, double ry = 0, V3 t = V3.zero}) {
  final cx = math.cos(rx), sx = math.sin(rx);
  V3 rotX(V3 p) => V3(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);
  V3 fix(V3 p) => ry == 0 ? p : rotY(p, ry);
  V3 pt(V3 p) => fix(rx == 0 ? p : rotX(p)) + t;
  V3 dir(V3 p) => fix(rx == 0 ? p : rotX(p));
  return [for (final p in ps) Poly([for (final v in p.pts) pt(v)], dir(p.n), p.color, p.id, shine: p.shine, alpha: p.alpha, twoSided: p.twoSided, layer: p.layer, bias: p.bias, order: p.order, group: p.group)];
}

/// Turns sharp corners of a path into smooth bends of about [radius].
List<V3> roundedPath(List<V3> pts, double radius, {int steps = 6}) {
  if (pts.length < 3) return pts;
  final out = <V3>[pts.first];
  for (var i = 1; i + 1 < pts.length; i++) {
    final a = pts[i - 1], b = pts[i], c = pts[i + 1];
    final d1 = (b - a), d2 = (c - b);
    final r1 = math.min(radius, d1.len * 0.5), r2 = math.min(radius, d2.len * 0.5);
    final p0 = b - d1.unit * r1, p2 = b + d2.unit * r2;
    for (var k = 0; k <= steps; k++) {
      final t = k / steps;
      final q = V3.lerp(V3.lerp(p0, b, t), V3.lerp(b, p2, t), t);
      out.add(q);
    }
  }
  out.add(pts.last);
  return out;
}

/// A smooth curve through [pts] (Catmull-Rom).
List<V3> smoothPath(List<V3> pts, {int per = 6}) {
  if (pts.length < 3) return pts;
  final out = <V3>[];
  for (var i = 0; i + 1 < pts.length; i++) {
    final p0 = i == 0 ? pts[i] : pts[i - 1], p1 = pts[i], p2 = pts[i + 1], p3 = i + 2 < pts.length ? pts[i + 2] : pts[i + 1];
    for (var k = 0; k < per; k++) {
      final t = k / per, t2 = t * t, t3 = t2 * t;
      double ax(double a, double b, double c, double d) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.add(V3(ax(p0.x, p1.x, p2.x, p3.x), ax(p0.y, p1.y, p2.y, p3.y), ax(p0.z, p1.z, p2.z, p3.z)));
    }
  }
  out.add(pts.last);
  return out;
}

// ─── Camera ──────────────────────────────────────────────────────────────────

class Cam3 extends ChangeNotifier {
  Cam3({this.yaw = 0.5, this.pitch = 0.3, this.dist = 40, this.target = V3.zero});
  double yaw, pitch, dist;
  V3 target;
  double minDist = 6, maxDist = 160;

  /// How far the camera may look up and down. A room view keeps [minPitch] above the floor, so you can never go under it.
  double minPitch = -1.25, maxPitch = 1.35;

  /// Turning is kept to the front of the scene unless [free] is on (the "look behind the wall" button), so a swipe never throws you round the back by accident.
  double yawCenter = 0, yawRange = 1.25;
  bool free = false;

  void setFree(bool v) {
    free = v;
    if (!v) yaw = yaw.clamp(yawCenter - yawRange, yawCenter + yawRange);
    notifyListeners();
  }

  // A glide to a new view.
  V3? _toTarget;
  double? _toDist;
  double? _toYaw, _toPitch;

  void glideTo({V3? target, double? dist, double? yaw, double? pitch}) {
    _toTarget = target;
    _toDist = dist;
    _toYaw = yaw;
    _toPitch = pitch;
    notifyListeners();
  }

  bool get gliding => _toTarget != null || _toDist != null || _toYaw != null || _toPitch != null;

  void tick(double dt) {
    if (!gliding) return;
    final k = 1 - math.exp(-dt * 7);
    if (_toTarget != null) {
      target = V3.lerp(target, _toTarget!, k);
      if ((target - _toTarget!).len < 0.02) {
        target = _toTarget!;
        _toTarget = null;
      }
    }
    if (_toDist != null) {
      dist += (_toDist! - dist) * k;
      if ((dist - _toDist!).abs() < 0.05) {
        dist = _toDist!;
        _toDist = null;
      }
    }
    if (_toYaw != null) {
      yaw += (_toYaw! - yaw) * k;
      if ((yaw - _toYaw!).abs() < 0.003) {
        yaw = _toYaw!;
        _toYaw = null;
      }
    }
    if (_toPitch != null) {
      pitch += (_toPitch! - pitch) * k;
      if ((pitch - _toPitch!).abs() < 0.003) {
        pitch = _toPitch!;
        _toPitch = null;
      }
    }
    notifyListeners();
  }

  void orbit(double dYaw, double dPitch) {
    _toYaw = null;
    _toPitch = null;
    yaw += dYaw;
    if (!free) yaw = yaw.clamp(yawCenter - yawRange, yawCenter + yawRange);
    pitch = (pitch + dPitch).clamp(minPitch, maxPitch);
    notifyListeners();
  }


  /// The spot of the plane at height [y] (the floor, by default) that is under the point [p] of a view of size [size], or null
  /// when that point of the screen looks at the sky. This is what makes "double tap where you want to go" possible.
  V3? floorPoint(Offset p, Size size, {double y = 0}) {
    final f = math.min(size.width, size.height) * 1.15;
    final dx = (p.dx - size.width / 2) / f, dy = -(p.dy - size.height / 2) / f;
    final cy = math.cos(yaw), sy = math.sin(yaw), cp = math.cos(pitch), sp = math.sin(pitch);
    // Camera-space offset (without the distance) back to a world offset.
    V3 unrot(V3 r) {
      final t = -r.z;
      final qy = r.y * cp + t * sp;
      final z1 = t * cp - r.y * sp;
      return V3(r.x * cy - z1 * sy, qy, r.x * sy + z1 * cy);
    }

    V3 at(double t) => target + unrot(V3(dx * t, dy * t, t - dist));
    final a = at(0), b = at(1);
    final dyw = b.y - a.y;
    if (dyw.abs() < 1e-9) return null;
    final t = (y - a.y) / dyw;
    if (t <= 0) return null;
    return at(t);
  }

  void zoomBy(double factor) {
    _toDist = null;
    dist = (dist * factor).clamp(minDist, maxDist);
    notifyListeners();
  }
}

// ─── Drawing ─────────────────────────────────────────────────────────────────

class HitCache {
  final List<(Path, int)> list = [];

  /// The object under [p], nearest first.
  int pick(Offset p) {
    for (var i = list.length - 1; i >= 0; i--) {
      if (list[i].$1.contains(p)) return list[i].$2;
    }
    return 0;
  }
}

class Scene3DPainter extends CustomPainter {
  Scene3DPainter({required this.scene, required this.cam, required this.hits, this.highlight = 0, this.layerOn, this.clock, this.dynamicPolys, Listenable? repaint, this.background = const Color(0xFF0E1218), this.sky = false}) : super(repaint: repaint);
  final Scene3D scene;
  final Cam3 cam;
  final HitCache hits;
  final int highlight;
  final bool Function(int layer)? layerOn;
  final ValueListenable<double>? clock;

  /// Shapes that move (water, sparks), made fresh for each moment.
  final List<Poly> Function(double t)? dynamicPolys;
  final Color background;

  /// Draw space behind the scene (stars, a galaxy, the Earth) instead of a plain dark colour.
  final bool sky;

  double get time => clock?.value ?? 0;

  static const _toLight = V3(-0.28, 0.55, -0.8);

  void _paintSky(Canvas canvas, Size size) {
    final w = size.width, h = size.height;
    final rect = Offset.zero & size;
    canvas.drawRect(rect, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF02030A), Color(0xFF0A0F2E), Color(0xFF241552)]).createShader(rect));
    final drift = cam.yaw * 90;
    // The galaxy: a soft slanted band of light.
    canvas.save();
    canvas.translate(w * 0.45 - drift, h * 0.3);
    canvas.rotate(-0.45);
    for (var i = 0; i < 3; i++) {
      final bw = w * (1.9 - i * 0.4), bh = h * (0.2 - i * 0.05);
      final r = Rect.fromCenter(center: Offset.zero, width: bw, height: bh);
      final col = [const Color(0xFF6D4AFF), const Color(0xFF38BDF8), const Color(0xFFF0ABFC)][i];
      canvas.drawOval(r, Paint()..shader = RadialGradient(colors: [col.withValues(alpha: 0.30 - i * 0.07), col.withValues(alpha: 0)]).createShader(r));
    }
    canvas.restore();
    // The stars, always in the same places, some twinkling.
    final rnd = math.Random(11);
    final star = Paint();
    for (var i = 0; i < 170; i++) {
      final x = ((rnd.nextDouble() * w * 1.5 - drift * (0.4 + rnd.nextDouble() * 0.6)) % w + w) % w;
      final y = rnd.nextDouble() * h * 0.85;
      final big = rnd.nextDouble();
      final tw = 0.55 + 0.45 * math.sin(time * (1 + big * 2) + i);
      star.color = Colors.white.withValues(alpha: (0.35 + 0.65 * big) * tw);
      canvas.drawCircle(Offset(x, y), 0.5 + big * 1.4, star);
    }
    // The Earth, with its blue seas, green land, clouds and a shadow on one side.
    final c = Offset(w * 0.8 - drift * 0.3, h * 0.17);
    final rad = math.min(w, h) * 0.12;
    canvas.drawCircle(c, rad * 1.5, Paint()..shader = RadialGradient(colors: [const Color(0xFF38BDF8).withValues(alpha: 0.28), const Color(0x0038BDF8)]).createShader(Rect.fromCircle(center: c, radius: rad * 1.5)));
    canvas.save();
    canvas.clipPath(Path()..addOval(Rect.fromCircle(center: c, radius: rad)));
    canvas.drawCircle(c, rad, Paint()..shader = const RadialGradient(center: Alignment(-0.4, -0.4), colors: [Color(0xFF4FB3F6), Color(0xFF1D5FC4), Color(0xFF0B2A6B)]).createShader(Rect.fromCircle(center: c, radius: rad)));
    final land = Paint()..color = const Color(0xFF3FA55B);
    for (final (dx, dy, rx, ry) in const [(-0.35, -0.2, 0.42, 0.3), (0.3, 0.25, 0.32, 0.38), (0.05, -0.55, 0.22, 0.14), (-0.5, 0.45, 0.2, 0.16)]) {
      canvas.drawOval(Rect.fromCenter(center: c + Offset(dx * rad + math.sin(time * 0.05) * rad * 0.08, dy * rad), width: rx * rad * 2, height: ry * rad * 2), land);
    }
    final cloud = Paint()..color = Colors.white.withValues(alpha: 0.55);
    for (final (dx, dy, rx) in const [(-0.1, 0.0, 0.5), (0.35, -0.4, 0.3), (-0.4, 0.55, 0.35)]) {
      canvas.drawOval(Rect.fromCenter(center: c + Offset(dx * rad, dy * rad), width: rx * rad * 2, height: rad * 0.16), cloud);
    }
    canvas.drawCircle(c + Offset(rad * 0.45, rad * 0.35), rad, Paint()..color = Colors.black.withValues(alpha: 0.38));
    canvas.restore();
    // A small moon.
    final m = Offset(w * 0.18 - drift * 0.2, h * 0.12);
    canvas.drawCircle(m, rad * 0.28, Paint()..color = const Color(0xFFD7D9E0));
    canvas.drawCircle(m + Offset(rad * 0.08, rad * 0.05), rad * 0.07, Paint()..color = const Color(0xFFAEB1BC));
    canvas.drawCircle(m + Offset(-rad * 0.1, -rad * 0.09), rad * 0.05, Paint()..color = const Color(0xFFAEB1BC));
  }

  @override
  void paint(Canvas canvas, Size size) {
    if (sky) {
      _paintSky(canvas, size);
    } else {
      canvas.drawRect(Offset.zero & size, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(background, Colors.white, 0.06)!, background]).createShader(Offset.zero & size));
    }
    final w = size.width, h = size.height;
    final f = math.min(w, h) * 1.15;
    final cx = w / 2, cy = h / 2;
    final cyw = math.cos(cam.yaw), syw = math.sin(cam.yaw), cp = math.cos(cam.pitch), sp = math.sin(cam.pitch);
    V3 rotN(V3 q) {
      final x1 = q.x * cyw + q.z * syw;
      final z1 = -q.x * syw + q.z * cyw;
      // The camera looks down the minus z axis: things with a bigger z are closer, so depth runs the other way.
      return V3(x1, q.y * cp - z1 * sp, -(q.y * sp + z1 * cp));
    }

    V3 toCam(V3 p) {
      final r = rotN(p - cam.target);
      return V3(r.x, r.y, r.z + cam.dist);
    }

    var outside = false;
    var roomDepth = 0.0;
    final sh = scene.shell;
    if (sh != null) {
      final ex = cam.target.x - cam.dist * cp * syw, ez = cam.target.z + cam.dist * cp * cyw;
      outside = ex < sh.$1 - 1 || ex > sh.$2 + 1 || ez < sh.$3 - 1;
      // Seen from outside, the walls nearer to you than the middle of the room are left out (a doll's house), so nothing inside is ever hidden.
      if (outside) roomDepth = toCam(V3((sh.$1 + sh.$2) / 2, 40, (sh.$3 + sh.$4) / 2)).z;
    }
    final toLight = _toLight.unit;
    final half = (toLight + const V3(0, 0, -1)).unit;
    final drawn = <_Face>[];
    final all = dynamicPolys == null ? scene.polys : [...scene.polys, ...dynamicPolys!(time)];
    for (final p in all) {
      if (layerOn != null && !layerOn!(p.layer)) continue;
      final cp3 = _clipNear([for (final v in p.pts) toCam(v)]);
      if (cp3.length < 3) continue;
      var zs = 0.0;
      var mid = V3.zero;
      for (final v in cp3) {
        zs += v.z;
        mid = mid + v;
      }
      mid = mid * (1 / cp3.length);
      if (outside && p.order == 0 && mid.z < roomDepth) continue;
      var n = rotN(p.n);
      final facing = n.dot(mid);
      if (facing > 0) {
        if (!p.twoSided) continue;
        n = n * -1;
      }
      final lam = math.max(0.0, n.dot(toLight));
      var shade = 0.56 + 0.58 * lam;
      var spec = 0.0;
      if (p.shine > 0) spec = math.pow(math.max(0.0, n.dot(half)), 28) * p.shine;
      var col = p.color;
      if (highlight != 0 && p.id == highlight) {
        col = Color.lerp(col, const Color(0xFF67E8F9), 0.28 + 0.14 * math.sin(time * 6))!;
        shade += 0.12;
      }
      final r = (col.r * 255 * shade + 255 * spec * 0.55).clamp(0.0, 255.0).round();
      final g = (col.g * 255 * shade + 255 * spec * 0.55).clamp(0.0, 255.0).round();
      final b = (col.b * 255 * shade + 255 * spec * 0.55).clamp(0.0, 255.0).round();
      final path = Path();
      for (var i = 0; i < cp3.length; i++) {
        final v = cp3[i];
        final x = cx + v.x * f / v.z, y = cy - v.y * f / v.z;
        i == 0 ? path.moveTo(x, y) : path.lineTo(x, y);
      }
      path.close();
      drawn.add(_Face(path, Color.fromRGBO(r, g, b, p.alpha), zs / cp3.length - p.bias, p.id, p.alpha < 0.99, p.id == highlight && highlight != 0, null, p.order, p.group));
    }
    for (final sq in scene.screens) {
      final q = [for (final v in sq.corners) toCam(v)];
      final mid = (q[0] + q[1] + q[2] + q[3]) * 0.25;
      final n = rotN((sq.corners[3] - sq.corners[0]).cross(sq.corners[1] - sq.corners[0]));
      if (n.dot(mid) > 0 && !sq.twoSided) continue;
      if (q.every((v) => v.z >= 1)) {
        final pts = [for (final v in q) Offset(cx + v.x * f / v.z, cy - v.y * f / v.z)];
        final path = Path()..addPolygon(pts, true);
        drawn.add(_Face(path, Colors.transparent, mid.z - sq.bias, sq.id, false, false, (c) => _drawQuad(c, sq, pts, time), sq.order, sq.group));
        continue;
      }
      // A corner is behind the camera (a big screen seen from close by): cut the screen into little patches and draw the ones in front, so it never switches off.
      const nx = 8, ny = 6;
      V3 at(double u, double v) => V3.lerp(V3.lerp(q[0], q[1], u), V3.lerp(q[3], q[2], u), v);
      final cells = <(int, int, List<Offset>)>[];
      final path = Path();
      for (var j = 0; j < ny; j++) {
        for (var i = 0; i < nx; i++) {
          final cs = [at(i / nx, j / ny), at((i + 1) / nx, j / ny), at((i + 1) / nx, (j + 1) / ny), at(i / nx, (j + 1) / ny)];
          if (cs.any((v) => v.z < 1)) continue;
          final pts = [for (final v in cs) Offset(cx + v.x * f / v.z, cy - v.y * f / v.z)];
          cells.add((i, j, pts));
          path.addPolygon(pts, true);
        }
      }
      if (cells.isEmpty) continue;
      drawn.add(_Face(path, Colors.transparent, mid.z - sq.bias, sq.id, false, false, (c) => _drawQuadCells(c, sq, cells, nx, ny, time), sq.order, sq.group));
    }
    // Far to near inside each tier. A grouped part is sorted as one piece by the middle of the whole part.
    final gz = <int, double>{}, gn = <int, int>{};
    for (final f in drawn) {
      if (f.group != 0) {
        gz[f.group] = (gz[f.group] ?? 0) + f.z;
        gn[f.group] = (gn[f.group] ?? 0) + 1;
      }
    }
    double key(_Face f) => f.group != 0 ? gz[f.group]! / gn[f.group]! : f.z;
    for (var i = 0; i < drawn.length; i++) {
      drawn[i].seq = i;
    }
    drawn.sort((a, b) {
      final c = a.order.compareTo(b.order);
      if (c != 0) return c;
      final k = key(b).compareTo(key(a));
      return k != 0 ? k : a.seq.compareTo(b.seq);
    });
    hits.list.clear();
    final fill = Paint()..style = PaintingStyle.fill;
    final edge = Paint()..style = PaintingStyle.stroke..strokeWidth = 0.8;
    for (final d in drawn) {
      if (d.draw != null) {
        d.draw!(canvas);
        if (d.id != 0) hits.list.add((d.path, d.id));
        continue;
      }
      fill.color = d.color;
      canvas.drawPath(d.path, fill);
      if (!d.see) {
        edge.color = d.color;
        canvas.drawPath(d.path, edge);
      }
      if (d.id != 0) hits.list.add((d.path, d.id));
    }
    // A bright outline around the object that is selected.
    if (highlight != 0) {
      final o = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white.withValues(alpha: 0.35 + 0.25 * math.sin(time * 6));
      for (final d in drawn) {
        if (d.glow) canvas.drawPath(d.path, o);
      }
    }
    for (final l in scene.labels) {
      final v = toCam(l.at);
      if (v.z < 1) continue;
      final p = Offset(cx + v.x * f / v.z, cy - v.y * f / v.z);
      final tp = TextPainter(text: TextSpan(text: l.text, style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
      final r = RRect.fromRectAndRadius(Rect.fromCenter(center: p, width: tp.width + 14, height: tp.height + 8), const Radius.circular(10));
      canvas.drawRRect(r, Paint()..color = l.color.withValues(alpha: 0.92));
      canvas.drawRRect(r, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white70);
      tp.paint(canvas, p - Offset(tp.width / 2, tp.height / 2));
    }
  }

  @override
  bool shouldRepaint(covariant Scene3DPainter old) => true;
}

/// Cuts a face against the near plane so that close-up views of big walls still draw.
List<V3> _clipNear(List<V3> pts, {double near = 0.5}) {
  var allIn = true;
  var allOut = true;
  for (final v in pts) {
    if (v.z >= near) {
      allOut = false;
    } else {
      allIn = false;
    }
  }
  if (allIn) return pts;
  if (allOut) return const [];
  final out = <V3>[];
  for (var i = 0; i < pts.length; i++) {
    final a = pts[i], b = pts[(i + 1) % pts.length];
    final ain = a.z >= near, bin = b.z >= near;
    if (ain) out.add(a);
    if (ain != bin) out.add(V3.lerp(a, b, (near - a.z) / (b.z - a.z)));
  }
  return out;
}


/// Paints [sq] flat onto the four screen points [p] (top left, top right, bottom right, bottom left).
/// The matrix that lays a picture of [w] by [h] on the four screen points [p] (top left, top right, bottom right, bottom left).
Matrix4? _quadMatrix(List<Offset> p, double w, double h) {
  final x0 = p[0].dx, y0 = p[0].dy, x1 = p[1].dx, y1 = p[1].dy, x2 = p[2].dx, y2 = p[2].dy, x3 = p[3].dx, y3 = p[3].dy;
  final dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  final dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  double a, b, d, e, g = 0, hh = 0;
  if (dx3.abs() < 1e-9 && dy3.abs() < 1e-9) {
    a = x1 - x0;
    b = x3 - x0;
    d = y1 - y0;
    e = y3 - y0;
  } else {
    final den = dx1 * dy2 - dx2 * dy1;
    if (den.abs() < 1e-9) return null;
    g = (dx3 * dy2 - dx2 * dy3) / den;
    hh = (dx1 * dy3 - dx3 * dy1) / den;
    a = x1 - x0 + g * x1;
    b = x3 - x0 + hh * x3;
    d = y1 - y0 + g * y1;
    e = y3 - y0 + hh * y3;
  }
  return Matrix4(a / w, d / w, 0, g / w, b / h, e / h, 0, hh / h, 0, 0, 1, 0, x0, y0, 0, 1);
}

void _drawQuad(Canvas canvas, ScreenQuad sq, List<Offset> p, double t) {
  final w = sq.width, hh = sq.height;
  final m = _quadMatrix(p, w, hh);
  if (m == null) return;
  canvas.save();
  canvas.transform(m.storage);
  canvas.clipRect(Rect.fromLTWH(0, 0, w, hh));
  sq.paint(canvas, Size(w, hh), t);
  canvas.restore();
}

/// A screen cut into [nx] by [ny] patches: the picture is recorded once and each patch shows its own part of it.
void _drawQuadCells(Canvas canvas, ScreenQuad sq, List<(int, int, List<Offset>)> cells, int nx, int ny, double t) {
  final w = sq.width, hh = sq.height;
  final rec = ui.PictureRecorder();
  sq.paint(Canvas(rec), Size(w, hh), t);
  final pic = rec.endRecording();
  final cw = w / nx, ch = hh / ny;
  for (final (i, j, pts) in cells) {
    final m = _quadMatrix(pts, cw, ch);
    if (m == null) continue;
    canvas.save();
    canvas.transform(m.storage);
    canvas.clipRect(Rect.fromLTWH(0, 0, cw, ch));
    canvas.translate(-i * cw, -j * ch);
    canvas.drawPicture(pic);
    canvas.restore();
  }
  pic.dispose();
}

class _Face {
  _Face(this.path, this.color, this.z, this.id, this.see, this.glow, [this.draw, this.order = 2, this.group = 0]);
  final int order;
  final int group;
  int seq = 0;
  final void Function(Canvas canvas)? draw;
  final Path path;
  final Color color;
  final double z;
  final int id;
  final bool see;
  final bool glow;
}

// ─── The view: turn with a finger, pinch or scroll to zoom, tap to pick ───────

class Scene3DView extends StatefulWidget {
  const Scene3DView({super.key, required this.scene, required this.cam, this.highlight = 0, this.onPick, this.layerOn, this.dynamicPolys, this.background = const Color(0xFF0E1218), this.overlay, this.onDoubleTap, this.sky = false});
  final Scene3D scene;
  final Cam3 cam;
  final int highlight;
  final void Function(int id)? onPick;
  final bool Function(int layer)? layerOn;
  final List<Poly> Function(double t)? dynamicPolys;
  final Color background;
  final Widget? overlay;
  final bool sky;

  /// A double tap: where on the view (and how big the view is), for "go to where I tapped".
  final void Function(Offset local, Size size)? onDoubleTap;

  @override
  State<Scene3DView> createState() => _Scene3DViewState();
}

class _Scene3DViewState extends State<Scene3DView> with SingleTickerProviderStateMixin {
  late final Ticker _ticker;
  final HitCache _hits = HitCache();
  final ValueNotifier<double> _time = ValueNotifier(0);
  Duration _last = Duration.zero;
  double _startDist = 40;
  Offset _lastDouble = Offset.zero;

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((d) {
      final dt = (d - _last).inMicroseconds / 1e6;
      _last = d;
      widget.cam.tick(dt.clamp(0.0, 0.1));
      _time.value = d.inMicroseconds / 1e6;
    })..start();
  }

  @override
  void dispose() {
    _ticker.dispose();
    _time.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerSignal: (e) {
        if (e is PointerScrollEvent) widget.cam.zoomBy(1 + e.scrollDelta.dy * 0.0012);
      },
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onScaleStart: (d) => _startDist = widget.cam.dist,
        onScaleUpdate: (d) {
          if (d.pointerCount >= 2) {
            widget.cam.zoomBy(_startDist / d.scale / widget.cam.dist);
          } else {
            widget.cam.orbit(-d.focalPointDelta.dx * 0.009, d.focalPointDelta.dy * 0.009);
          }
        },
        onTapUp: (d) => widget.onPick?.call(_hits.pick(d.localPosition)),
        onDoubleTapDown: widget.onDoubleTap == null ? null : (d) => _lastDouble = d.localPosition,
        onDoubleTap: widget.onDoubleTap == null ? null : () => widget.onDoubleTap!(_lastDouble, context.size ?? Size.zero),
        child: Stack(fit: StackFit.expand, children: [
          ClipRect(
            child: RepaintBoundary(
              child: CustomPaint(
                painter: Scene3DPainter(scene: widget.scene, cam: widget.cam, hits: _hits, highlight: widget.highlight, layerOn: widget.layerOn, clock: _time, dynamicPolys: widget.dynamicPolys, repaint: Listenable.merge([widget.cam, _time]), background: widget.background, sky: widget.sky),
                size: Size.infinite,
              ),
            ),
          ),
          if (widget.overlay != null) widget.overlay!,
        ]),
      ),
    );
  }
}
