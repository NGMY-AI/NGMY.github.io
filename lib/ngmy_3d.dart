import 'dart:math' as math;

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
  const Poly(this.pts, this.n, this.color, this.id, {this.shine = 0, this.alpha = 1, this.twoSided = false, this.layer = 0, this.bias = 0});
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
  const Scene3D(this.polys, {this.info = const {}, this.labels = const []});
  final List<Poly> polys;
  final Map<int, ObjInfo> info;
  final List<Label3D> labels;
}

// ─── Building shapes ─────────────────────────────────────────────────────────

class MeshBuilder {
  final List<Poly> polys = [];

  /// The object the next shapes belong to, the layer they sit on and how see-through they are.
  int id = 0;
  int layer = 0;
  double alpha = 1;
  double bias = 0;

  void quad(V3 a, V3 b, V3 c, V3 d, Color col, {V3? normal, double shine = 0, bool twoSided = false}) {
    final n = (normal ?? (b - a).cross(d - a)).unit;
    polys.add(Poly([a, b, c, d], n, col, id, shine: shine, alpha: alpha, twoSided: twoSided, layer: layer, bias: bias));
  }

  void tri(V3 a, V3 b, V3 c, Color col, {V3? normal, double shine = 0, bool twoSided = true}) {
    final n = (normal ?? (b - a).cross(c - a)).unit;
    polys.add(Poly([a, b, c], n, col, id, shine: shine, alpha: alpha, twoSided: twoSided, layer: layer, bias: bias));
  }

  /// A block centred on [c] with size [s]. Big faces can be cut into [split] x [split] tiles so they sort properly.
  /// With [ends] false the top and bottom faces are left out (for studs whose ends nobody sees).
  void box(V3 c, V3 s, Color col, {double shine = 0, int split = 1, double yaw = 0, bool ends = true}) {
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
          polys.add(Poly([r(a), r(b), r(cc), r(d)], rn(n), col, id, shine: shine, alpha: alpha, layer: layer, bias: bias));
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
    final axis = (p1 - p0).unit;
    final helper = axis.y.abs() < 0.9 ? const V3(0, 1, 0) : const V3(1, 0, 0);
    final u = axis.cross(helper).unit;
    final v = axis.cross(u).unit;
    final rEnd = r1 < 0 ? r : r1;
    V3 dir(int i) => u * math.cos(i * 2 * math.pi / sides) + v * math.sin(i * 2 * math.pi / sides);
    for (var i = 0; i < sides; i++) {
      final d0 = dir(i), d1 = dir(i + 1);
      final n = (d0 + d1).unit;
      polys.add(Poly([p0 + d0 * r, p0 + d1 * r, p1 + d1 * rEnd, p1 + d0 * rEnd], n, col, id, shine: shine, alpha: alpha, twoSided: inner, layer: layer, bias: bias));
      if (caps) {
        polys.add(Poly([p0, p0 + d1 * r, p0 + d0 * r], axis * -1, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias));
        polys.add(Poly([p1, p1 + d0 * rEnd, p1 + d1 * rEnd], axis, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias));
      }
    }
  }

  /// A ball (low detail) centred on [c].
  void ball(V3 c, double r, Color col, {double shine = 0.4, int lat = 6, int lon = 10}) {
    V3 pt(int i, int j) {
      final th = math.pi * i / lat;
      final ph = 2 * math.pi * j / lon;
      return V3(math.sin(th) * math.cos(ph), math.cos(th), math.sin(th) * math.sin(ph));
    }
    for (var i = 0; i < lat; i++) {
      for (var j = 0; j < lon; j++) {
        final a = pt(i, j), b = pt(i, j + 1), cc = pt(i + 1, j + 1), d = pt(i + 1, j);
        polys.add(Poly([c + a * r, c + b * r, c + cc * r, c + d * r], (a + b + cc + d).unit, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias));
      }
    }
  }

  /// A bendy tube (a wire, a pipe, a hose) through [pts].
  void tube(List<V3> pts, double r, Color col, {double shine = 0.25, int sides = 10, bool joints = true, bool endCaps = true, bool inner = false}) {
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
    cyl(p0, p1, rOut, col, shine: shine, sides: sides, caps: false);
    final axis = (p1 - p0).unit;
    final helper = axis.y.abs() < 0.9 ? const V3(0, 1, 0) : const V3(1, 0, 0);
    final u = axis.cross(helper).unit;
    final v = axis.cross(u).unit;
    V3 dir(int i) => u * math.cos(i * 2 * math.pi / sides) + v * math.sin(i * 2 * math.pi / sides);
    for (final (pp, nn) in [(p0, axis * -1), (p1, axis)]) {
      for (var i = 0; i < sides; i++) {
        polys.add(Poly([pp + dir(i) * rIn, pp + dir(i) * rOut, pp + dir(i + 1) * rOut, pp + dir(i + 1) * rIn], nn, col, id, shine: shine, alpha: alpha, layer: layer, bias: bias));
      }
    }
  }
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
    pitch = (pitch + dPitch).clamp(-1.25, 1.35);
    notifyListeners();
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
  Scene3DPainter({required this.scene, required this.cam, required this.hits, this.highlight = 0, this.layerOn, this.clock, this.dynamicPolys, Listenable? repaint, this.background = const Color(0xFF0E1218)}) : super(repaint: repaint);
  final Scene3D scene;
  final Cam3 cam;
  final HitCache hits;
  final int highlight;
  final bool Function(int layer)? layerOn;
  final ValueListenable<double>? clock;

  /// Shapes that move (water, sparks), made fresh for each moment.
  final List<Poly> Function(double t)? dynamicPolys;
  final Color background;

  double get time => clock?.value ?? 0;

  static const _toLight = V3(-0.28, 0.55, -0.8);

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(background, Colors.white, 0.06)!, background]).createShader(Offset.zero & size));
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
      drawn.add(_Face(path, Color.fromRGBO(r, g, b, p.alpha), zs / cp3.length - p.bias, p.id, p.alpha < 0.99, p.id == highlight && highlight != 0));
    }
    drawn.sort((a, b) => b.z.compareTo(a.z));
    hits.list.clear();
    final fill = Paint()..style = PaintingStyle.fill;
    final edge = Paint()..style = PaintingStyle.stroke..strokeWidth = 0.8;
    for (final d in drawn) {
      fill.color = d.color;
      canvas.drawPath(d.path, fill);
      if (!d.see) {
        edge.color = d.color;
        canvas.drawPath(d.path, edge);
      }
      if (d.id != 0 && !d.see) hits.list.add((d.path, d.id));
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

class _Face {
  _Face(this.path, this.color, this.z, this.id, this.see, this.glow);
  final Path path;
  final Color color;
  final double z;
  final int id;
  final bool see;
  final bool glow;
}

// ─── The view: turn with a finger, pinch or scroll to zoom, tap to pick ───────

class Scene3DView extends StatefulWidget {
  const Scene3DView({super.key, required this.scene, required this.cam, this.highlight = 0, this.onPick, this.layerOn, this.dynamicPolys, this.background = const Color(0xFF0E1218), this.overlay});
  final Scene3D scene;
  final Cam3 cam;
  final int highlight;
  final void Function(int id)? onPick;
  final bool Function(int layer)? layerOn;
  final List<Poly> Function(double t)? dynamicPolys;
  final Color background;
  final Widget? overlay;

  @override
  State<Scene3DView> createState() => _Scene3DViewState();
}

class _Scene3DViewState extends State<Scene3DView> with SingleTickerProviderStateMixin {
  late final Ticker _ticker;
  final HitCache _hits = HitCache();
  final ValueNotifier<double> _time = ValueNotifier(0);
  Duration _last = Duration.zero;
  double _startDist = 40;

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
        child: Stack(fit: StackFit.expand, children: [
          ClipRect(
            child: RepaintBoundary(
              child: CustomPaint(
                painter: Scene3DPainter(scene: widget.scene, cam: widget.cam, hits: _hits, highlight: widget.highlight, layerOn: widget.layerOn, clock: _time, dynamicPolys: widget.dynamicPolys, repaint: Listenable.merge([widget.cam, _time]), background: widget.background),
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
