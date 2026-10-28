import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_3d.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The real characters (X Bot, Dancer, Soldier): the .glb files themselves, read here and drawn in the game's own 3D.
// The skeleton and the animations (idle, walk, samba dance...) are the ones in the files. The picture on the skin is
// painted onto the faces of the body. The body is thinned out to a few thousand faces so the game stays quick.
// ═════════════════════════════════════════════════════════════════════════════

const Map<String, String> kGlbFiles = {
  'xbot': 'assets/avatars/Xbot.glb',
  'michelle': 'assets/avatars/Michelle.glb',
  'soldier': 'assets/avatars/Soldier.glb',
};

/// How many game units one metre of the model is. A person in the house is about 66 units tall.
const double kAvatarUnitsPerMetre = 36.0;

/// How many faces the body keeps: the one on the tour (close up) and the people who live in the house.
const int kAvatarFacesGuide = 5000;
const int kAvatarFacesResident = 2000;

class _Chan {
  _Chan(this.node, this.path, this.times, this.values, this.step);
  final int node;

  /// 0 move, 1 turn, 2 scale.
  final int path;
  final Float64List times, values;
  final bool step;
}

class _Clip {
  _Clip(this.name, this.duration, this.chans);
  final String name;
  final double duration;
  final List<_Chan> chans;
}

class _Img {
  _Img(this.w, this.h, this.rgba);
  final int w, h;
  final Uint8List rgba;
}

/// One thinned-out body: the points with the bones that move them, and the faces with their colours.
class _Lod {
  _Lod(this.rest, this.jidx, this.wgt, this.vskin, this.tris, this.colors);
  final Float64List rest;
  final Uint16List jidx;
  final Float64List wgt;
  final Uint8List vskin;
  final Int32List tris;
  final Int32List colors;
  int get vertices => rest.length ~/ 3;
  int get faces => tris.length ~/ 3;
}

class GlbAvatar {
  GlbAvatar._(this.key);
  final String key;

  static final Map<String, GlbAvatar> _ready = {};
  static final Map<String, Future<GlbAvatar?>> _loading = {};

  /// Set to false to keep the plain figures (some tests do).
  static bool enabled = true;

  /// The character, if it has been read already.
  static GlbAvatar? ready(String key) => enabled ? _ready[key] : null;

  /// Reads the character in the background. Safe to call again and again.
  static Future<GlbAvatar?> load(String key) {
    final done = _ready[key];
    if (done != null) return Future.value(done);
    final path = kGlbFiles[key];
    if (path == null) return Future.value(null);
    return _loading[key] ??= () async {
      try {
        final data = await rootBundle.load(path);
        final a = GlbAvatar._(key);
        await a._read(data);
        _ready[key] = a;
        return a;
      } catch (e) {
        debugPrint('Could not read the character $key: $e');
        return null;
      } finally {
        _loading.remove(key);
      }
    }();
  }

  /// Reads all three, the one that is needed first at the front.
  static Future<void> preload([String first = 'xbot']) async {
    await load(first);
    for (final k in kGlbFiles.keys) {
      await load(k);
    }
  }

  // ── What is in the file ──

  late List<int> _parent;
  late List<List<int>> _children;
  late List<int> _roots;
  late Float64List _restT, _restR, _restS;
  final Map<String, _Clip> clips = {};
  late List<List<int>> _skinJoints;
  late List<Float64List> _skinIbm;
  late _Lod _guide, _resident;
  double _floor = 0;

  int get nodeCount => _parent.length;

  Future<void> _read(ByteData data) async {
    if (data.getUint32(0, Endian.little) != 0x46546C67) throw 'not a glb file';
    var off = 12;
    Map<String, dynamic>? json;
    Uint8List? bin;
    while (off + 8 <= data.lengthInBytes) {
      final len = data.getUint32(off, Endian.little), type = data.getUint32(off + 4, Endian.little);
      final chunk = data.buffer.asUint8List(data.offsetInBytes + off + 8, len);
      if (type == 0x4E4F534A) json = jsonDecode(utf8.decode(chunk)) as Map<String, dynamic>;
      if (type == 0x004E4942) bin = chunk;
      off += 8 + len;
    }
    if (json == null || bin == null) throw 'empty glb';
    final g = _Glb(json, bin);

    // The skeleton: where every bone sits when nobody is moving it.
    final nodes = (json['nodes'] as List).cast<Map<String, dynamic>>();
    final n = nodes.length;
    _parent = List.filled(n, -1);
    _children = [for (final nd in nodes) [for (final c in (nd['children'] as List? ?? const [])) (c as num).toInt()]];
    for (var i = 0; i < n; i++) {
      for (final c in _children[i]) {
        _parent[c] = i;
      }
    }
    _roots = [for (final r in ((json['scenes'] as List)[(json['scene'] as num?)?.toInt() ?? 0]['nodes'] as List)) (r as num).toInt()];
    _restT = Float64List(n * 3);
    _restR = Float64List(n * 4);
    _restS = Float64List(n * 3);
    for (var i = 0; i < n; i++) {
      final nd = nodes[i];
      final t = (nd['translation'] as List?)?.cast<num>() ?? const [0, 0, 0];
      final r = (nd['rotation'] as List?)?.cast<num>() ?? const [0, 0, 0, 1];
      final s = (nd['scale'] as List?)?.cast<num>() ?? const [1, 1, 1];
      for (var k = 0; k < 3; k++) {
        _restT[i * 3 + k] = t[k].toDouble();
        _restS[i * 3 + k] = s[k].toDouble();
      }
      for (var k = 0; k < 4; k++) {
        _restR[i * 4 + k] = r[k].toDouble();
      }
    }

    // The skins: which bones move the body, and the matrices that undo the bind pose.
    _skinJoints = [];
    _skinIbm = [];
    for (final s in (json['skins'] as List? ?? const [])) {
      final joints = [for (final j in (s['joints'] as List)) (j as num).toInt()];
      _skinJoints.add(joints);
      final ibm = s['inverseBindMatrices'] != null ? g.accessor((s['inverseBindMatrices'] as num).toInt()).$1 : null;
      _skinIbm.add(ibm ?? _identities(joints.length));
    }

    // The animations.
    for (final a in (json['animations'] as List? ?? const [])) {
      final chans = <_Chan>[];
      var dur = 0.0;
      final samplers = a['samplers'] as List;
      for (final c in (a['channels'] as List)) {
        final target = c['target'] as Map;
        final node = (target['node'] as num?)?.toInt();
        final path = switch (target['path']) { 'translation' => 0, 'rotation' => 1, 'scale' => 2, _ => -1 };
        if (node == null || path < 0) continue;
        final s = samplers[(c['sampler'] as num).toInt()] as Map;
        final times = g.accessor((s['input'] as num).toInt()).$1;
        var values = g.accessor((s['output'] as num).toInt()).$1;
        final mode = s['interpolation'] ?? 'LINEAR';
        final comps = path == 1 ? 4 : 3;
        if (mode == 'CUBICSPLINE') {
          // Three values per key (in tangent, value, out tangent): the value is the middle one.
          final v = Float64List(times.length * comps);
          for (var i = 0; i < times.length; i++) {
            for (var k = 0; k < comps; k++) {
              v[i * comps + k] = values[(i * 3 + 1) * comps + k];
            }
          }
          values = v;
        }
        if (times.isNotEmpty) dur = math.max(dur, times.last);
        chans.add(_Chan(node, path, times, values, mode == 'STEP'));
      }
      final name = (a['name'] as String?) ?? 'clip${clips.length}';
      clips[name] = _Clip(name, dur, chans);
    }

    // The pictures on the skin.
    final images = <int, _Img>{};
    for (var i = 0; i < ((json['images'] as List?)?.length ?? 0); i++) {
      final bytes = g.imageBytes(i);
      if (bytes == null) continue;
      try {
        final codec = await ui.instantiateImageCodec(bytes);
        final frame = await codec.getNextFrame();
        final bd = await frame.image.toByteData(format: ui.ImageByteFormat.rawRgba);
        if (bd != null) images[i] = _Img(frame.image.width, frame.image.height, bd.buffer.asUint8List(bd.offsetInBytes, bd.lengthInBytes));
        frame.image.dispose();
        codec.dispose();
      } catch (e) {
        debugPrint('Could not read a picture of $key: $e');
      }
      await Future<void>.delayed(Duration.zero);
    }

    // The body.
    final mesh = _gatherMesh(json, g, nodes, images);
    await Future<void>.delayed(Duration.zero);
    _guide = _thin(mesh, kAvatarFacesGuide);
    await Future<void>.delayed(Duration.zero);
    _resident = _thin(mesh, kAvatarFacesResident);

    // Feet on the floor: the lowest point of the standing pose is y = 0.
    final rest = _poseMatrices(null, 0);
    final pts = _skin(_guide, rest);
    var low = double.infinity;
    for (var i = 1; i < pts.length; i += 3) {
      low = math.min(low, pts[i]);
    }
    _floor = low.isFinite ? low : 0;
  }

  static Float64List _identities(int n) {
    final m = Float64List(n * 16);
    for (var i = 0; i < n; i++) {
      m[i * 16] = m[i * 16 + 5] = m[i * 16 + 10] = m[i * 16 + 15] = 1;
    }
    return m;
  }

  // ── Putting the body together ──

  _Mesh _gatherMesh(Map<String, dynamic> json, _Glb g, List<Map<String, dynamic>> nodes, Map<int, _Img> images) {
    final materials = (json['materials'] as List? ?? const []).cast<Map<String, dynamic>>();
    final textures = (json['textures'] as List? ?? const []).cast<Map<String, dynamic>>();
    final meshes = (json['meshes'] as List).cast<Map<String, dynamic>>();
    final pos = <double>[], jidx = <int>[], wgt = <double>[], vskin = <int>[];
    final tris = <int>[], triColor = <int>[];
    for (var ni = 0; ni < nodes.length; ni++) {
      final nd = nodes[ni];
      final mi = (nd['mesh'] as num?)?.toInt();
      if (mi == null) continue;
      final skin = (nd['skin'] as num?)?.toInt();
      for (final prim in (meshes[mi]['primitives'] as List).cast<Map<String, dynamic>>()) {
        final attrs = (prim['attributes'] as Map).cast<String, dynamic>();
        if (attrs['POSITION'] == null || prim['indices'] == null) continue;
        final p = g.accessor((attrs['POSITION'] as num).toInt()).$1;
        final nv = p.length ~/ 3;
        final j = attrs['JOINTS_0'] != null ? g.accessor((attrs['JOINTS_0'] as num).toInt()).$1 : null;
        final w = attrs['WEIGHTS_0'] != null ? g.accessor((attrs['WEIGHTS_0'] as num).toInt()).$1 : null;
        final mat = (prim['material'] as num?)?.toInt();
        final m = mat != null ? materials[mat] : const <String, dynamic>{};
        final pbr = (m['pbrMetallicRoughness'] as Map?)?.cast<String, dynamic>() ?? const {};
        final factor = (pbr['baseColorFactor'] as List?)?.cast<num>() ?? const [1, 1, 1, 1];
        final texInfo = (pbr['baseColorTexture'] as Map?)?.cast<String, dynamic>();
        final texSet = (texInfo?['texCoord'] as num?)?.toInt() ?? 0;
        final uvAcc = attrs['TEXCOORD_$texSet'];
        final uv = uvAcc != null ? g.accessor((uvAcc as num).toInt()).$1 : null;
        _Img? img;
        if (texInfo != null) {
          final src = (textures[(texInfo['index'] as num).toInt()]['source'] as num?)?.toInt();
          if (src != null) img = images[src];
        }
        final base = pos.length ~/ 3;
        // A bone-less part is held by its own node: a single bone that is never turned.
        pos.addAll(p);
        for (var v = 0; v < nv; v++) {
          vskin.add(skin ?? 255);
          for (var k = 0; k < 4; k++) {
            jidx.add(j != null ? j[v * 4 + k].toInt() : 0);
            wgt.add(w != null ? w[v * 4 + k] : (k == 0 ? 1.0 : 0.0));
          }
        }
        final idx = g.accessor((prim['indices'] as num).toInt()).$1;
        for (var t = 0; t + 2 < idx.length; t += 3) {
          final a = idx[t].toInt(), b = idx[t + 1].toInt(), c = idx[t + 2].toInt();
          tris
            ..add(base + a)
            ..add(base + b)
            ..add(base + c);
          triColor.add(_faceColor(img, uv, a, b, c, factor));
        }
        // A part that hangs on a plain node (no skin) moves with that node: remember which one.
        if (skin == null) _rigid.add((base, nv, ni));
      }
    }
    return _Mesh(Float64List.fromList(pos), Uint16List.fromList(jidx), Float64List.fromList(wgt), Uint8List.fromList(vskin), Int32List.fromList(tris), Int32List.fromList(triColor));
  }

  final List<(int, int, int)> _rigid = [];

  int _faceColor(_Img? img, Float64List? uv, int a, int b, int c, List<num> f) {
    var r = f[0].toDouble(), gg = f[1].toDouble(), bl = f[2].toDouble();
    if (img != null && uv != null) {
      final cu = (uv[a * 2] + uv[b * 2] + uv[c * 2]) / 3, cv = (uv[a * 2 + 1] + uv[b * 2 + 1] + uv[c * 2 + 1]) / 3;
      var sr = 0.0, sg = 0.0, sb = 0.0;
      void sample(double u, double v) {
        u -= u.floorToDouble();
        v -= v.floorToDouble();
        final x = math.min(img.w - 1, (u * img.w).floor()), y = math.min(img.h - 1, (v * img.h).floor());
        final o = (y * img.w + x) * 4;
        sr += img.rgba[o];
        sg += img.rgba[o + 1];
        sb += img.rgba[o + 2];
      }

      sample(cu, cv);
      for (final q in [a, b, c]) {
        sample((cu + uv[q * 2]) / 2, (cv + uv[q * 2 + 1]) / 2);
      }
      r *= sr / 4 / 255;
      gg *= sg / 4 / 255;
      bl *= sb / 4 / 255;
    }
    int ch(double x) => (x.clamp(0.0, 1.0) * 255).round();
    return 0xFF000000 | (ch(r) << 16) | (ch(gg) << 8) | ch(bl);
  }

  /// Thins the body out: points that fall in the same little cell become one point, and faces that fall flat are dropped.
  _Lod _thin(_Mesh m, int target) {
    final nv = m.pos.length ~/ 3;
    var lox = double.infinity, loy = double.infinity, loz = double.infinity, hix = -double.infinity, hiy = -double.infinity, hiz = -double.infinity;
    for (var i = 0; i < nv; i++) {
      final x = m.pos[i * 3], y = m.pos[i * 3 + 1], z = m.pos[i * 3 + 2];
      lox = math.min(lox, x);
      hix = math.max(hix, x);
      loy = math.min(loy, y);
      hiy = math.max(hiy, y);
      loz = math.min(loz, z);
      hiz = math.max(hiz, z);
    }
    final size = math.max(hix - lox, math.max(hiy - loy, hiz - loz));
    Int32List cluster(double cell, List<int> count) {
      final ids = <int, int>{};
      final out = Int32List(nv);
      for (var i = 0; i < nv; i++) {
        final ix = ((m.pos[i * 3] - lox) / cell).floor(), iy = ((m.pos[i * 3 + 1] - loy) / cell).floor(), iz = ((m.pos[i * 3 + 2] - loz) / cell).floor();
        out[i] = ids.putIfAbsent((ix * 1024 + iy) * 1024 + iz, () => ids.length);
      }
      count[0] = ids.length;
      return out;
    }

    int faces(Int32List cl) {
      final seen = <int>{};
      for (var t = 0; t < m.tris.length; t += 3) {
        final a = cl[m.tris[t]], b = cl[m.tris[t + 1]], c = cl[m.tris[t + 2]];
        if (a == b || b == c || a == c) continue;
        seen.add(_key3(a, b, c));
      }
      return seen.length;
    }

    // The biggest faces count that still fits is the one with the smallest cell.
    var lo = size / 400, hi = size / 8;
    final count = [0];
    var best = cluster(hi, count);
    for (var i = 0; i < 9; i++) {
      final mid = (lo + hi) / 2;
      final cl = cluster(mid, count);
      if (faces(cl) > target) {
        lo = mid;
      } else {
        hi = mid;
        best = cl;
      }
    }
    final cl = best;
    var nc = 0;
    for (final c in cl) {
      nc = math.max(nc, c + 1);
    }
    // For every little cell, the point nearest to the middle of the points in it stands for all of them.
    final sx = Float64List(nc), sy = Float64List(nc), sz = Float64List(nc);
    final cnt = Int32List(nc);
    for (var i = 0; i < nv; i++) {
      final c = cl[i];
      sx[c] += m.pos[i * 3];
      sy[c] += m.pos[i * 3 + 1];
      sz[c] += m.pos[i * 3 + 2];
      cnt[c]++;
    }
    final rep = Int32List(nc)..fillRange(0, nc, -1);
    final repD = Float64List(nc)..fillRange(0, nc, double.infinity);
    for (var i = 0; i < nv; i++) {
      final c = cl[i];
      final dx = m.pos[i * 3] - sx[c] / cnt[c], dy = m.pos[i * 3 + 1] - sy[c] / cnt[c], dz = m.pos[i * 3 + 2] - sz[c] / cnt[c];
      final d = dx * dx + dy * dy + dz * dz;
      if (d < repD[c]) {
        repD[c] = d;
        rep[c] = i;
      }
    }
    final outTris = <int>[];
    final sums = <int, List<double>>{};
    final order = <int, int>{};
    for (var t = 0; t < m.tris.length; t += 3) {
      final a = cl[m.tris[t]], b = cl[m.tris[t + 1]], c = cl[m.tris[t + 2]];
      if (a == b || b == c || a == c) continue;
      final k = _key3(a, b, c);
      final col = m.colors[t ~/ 3];
      final s = sums[k];
      if (s == null) {
        sums[k] = [((col >> 16) & 255).toDouble(), ((col >> 8) & 255).toDouble(), (col & 255).toDouble(), 1];
        order[k] = outTris.length ~/ 3;
        outTris
          ..add(a)
          ..add(b)
          ..add(c);
      } else {
        s[0] += (col >> 16) & 255;
        s[1] += (col >> 8) & 255;
        s[2] += col & 255;
        s[3] += 1;
      }
    }
    final colors = Int32List(outTris.length ~/ 3);
    sums.forEach((k, s) {
      colors[order[k]!] = 0xFF000000 | ((s[0] / s[3]).round() << 16) | ((s[1] / s[3]).round() << 8) | (s[2] / s[3]).round();
    });
    final rest = Float64List(nc * 3);
    final jidx = Uint16List(nc * 4);
    final wgt = Float64List(nc * 4);
    final vskin = Uint8List(nc);
    for (var c = 0; c < nc; c++) {
      final v = rep[c];
      for (var k = 0; k < 3; k++) {
        rest[c * 3 + k] = m.pos[v * 3 + k];
      }
      for (var k = 0; k < 4; k++) {
        jidx[c * 4 + k] = m.jidx[v * 4 + k];
        wgt[c * 4 + k] = m.wgt[v * 4 + k];
      }
      vskin[c] = m.vskin[v];
    }
    return _Lod(rest, jidx, wgt, vskin, Int32List.fromList(outTris), colors);
  }

  static int _key3(int a, int b, int c) {
    var x = a, y = b, z = c;
    int t;
    if (x > y) {
      t = x;
      x = y;
      y = t;
    }
    if (y > z) {
      t = y;
      y = z;
      z = t;
    }
    if (x > y) {
      t = x;
      x = y;
      y = t;
    }
    return (x * 65536 + y) * 65536 + z;
  }

  // ── Moving the body ──

  final Map<String, Float64List> _scratch = {};

  /// The world matrix of every bone for [clip] at [time] (all bones at rest when [clip] is null), then the matrix of
  /// every joint of every skin, packed one after the other.
  Float64List _poseMatrices(String? clip, double time) {
    final n = nodeCount;
    final tr = Float64List.fromList(_restT), ro = Float64List.fromList(_restR), sc = Float64List.fromList(_restS);
    final c = clip == null ? null : clips[clip];
    if (c != null && c.duration > 0) {
      final tt = time - (time / c.duration).floorToDouble() * c.duration;
      for (final ch in c.chans) {
        _sample(ch, tt, ch.path == 0 ? tr : (ch.path == 1 ? ro : sc));
      }
    }
    final world = _scratch.putIfAbsent('world', () => Float64List(n * 16));
    final local = Float64List(16);
    void walk(int i) {
      _compose(tr, ro, sc, i, local);
      final p = _parent[i];
      if (p < 0) {
        world.setRange(i * 16, i * 16 + 16, local);
      } else {
        _mul(world, p * 16, local, 0, world, i * 16);
      }
      for (final k in _children[i]) {
        walk(k);
      }
    }

    for (final r in _roots) {
      walk(r);
    }
    var total = 0;
    for (final j in _skinJoints) {
      total += j.length;
    }
    final out = Float64List((total + _rigid.length) * 16);
    var o = 0;
    for (var s = 0; s < _skinJoints.length; s++) {
      final joints = _skinJoints[s];
      for (var j = 0; j < joints.length; j++) {
        _mul(world, joints[j] * 16, _skinIbm[s], j * 16, out, o);
        o += 16;
      }
    }
    for (final r in _rigid) {
      out.setRange(o, o + 16, world, r.$3 * 16);
      o += 16;
    }
    return out;
  }

  static void _sample(_Chan ch, double t, Float64List dst) {
    final times = ch.times;
    final comps = ch.path == 1 ? 4 : 3;
    final n = times.length;
    if (n == 0) return;
    final o = ch.node * comps;
    if (t <= times[0] || n == 1) {
      for (var k = 0; k < comps; k++) {
        dst[o + k] = ch.values[k];
      }
      return;
    }
    if (t >= times[n - 1]) {
      for (var k = 0; k < comps; k++) {
        dst[o + k] = ch.values[(n - 1) * comps + k];
      }
      return;
    }
    var lo = 0, hi = n - 1;
    while (hi - lo > 1) {
      final mid = (lo + hi) >> 1;
      if (times[mid] <= t) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    final f = ch.step ? 0.0 : (t - times[lo]) / (times[hi] - times[lo]);
    final v = ch.values;
    if (ch.path != 1) {
      for (var k = 0; k < 3; k++) {
        dst[o + k] = v[lo * 3 + k] + (v[hi * 3 + k] - v[lo * 3 + k]) * f;
      }
      return;
    }
    var dot = 0.0;
    for (var k = 0; k < 4; k++) {
      dot += v[lo * 4 + k] * v[hi * 4 + k];
    }
    final sign = dot < 0 ? -1.0 : 1.0;
    var len = 0.0;
    for (var k = 0; k < 4; k++) {
      final q = v[lo * 4 + k] + (sign * v[hi * 4 + k] - v[lo * 4 + k]) * f;
      dst[o + k] = q;
      len += q * q;
    }
    len = math.sqrt(len);
    if (len > 1e-9) {
      for (var k = 0; k < 4; k++) {
        dst[o + k] /= len;
      }
    }
  }

  static void _compose(Float64List t, Float64List r, Float64List s, int i, Float64List m) {
    final x = r[i * 4], y = r[i * 4 + 1], z = r[i * 4 + 2], w = r[i * 4 + 3];
    final sx = s[i * 3], sy = s[i * 3 + 1], sz = s[i * 3 + 2];
    m[0] = (1 - 2 * (y * y + z * z)) * sx;
    m[1] = (2 * (x * y + z * w)) * sx;
    m[2] = (2 * (x * z - y * w)) * sx;
    m[3] = 0;
    m[4] = (2 * (x * y - z * w)) * sy;
    m[5] = (1 - 2 * (x * x + z * z)) * sy;
    m[6] = (2 * (y * z + x * w)) * sy;
    m[7] = 0;
    m[8] = (2 * (x * z + y * w)) * sz;
    m[9] = (2 * (y * z - x * w)) * sz;
    m[10] = (1 - 2 * (x * x + y * y)) * sz;
    m[11] = 0;
    m[12] = t[i * 3];
    m[13] = t[i * 3 + 1];
    m[14] = t[i * 3 + 2];
    m[15] = 1;
  }

  /// out = a * b (column major), where out may be the same list as a or b as long as it is a different place in it.
  static void _mul(Float64List a, int ao, Float64List b, int bo, Float64List out, int oo) {
    for (var c = 0; c < 4; c++) {
      for (var r = 0; r < 4; r++) {
        out[oo + c * 4 + r] = a[ao + r] * b[bo + c * 4] + a[ao + 4 + r] * b[bo + c * 4 + 1] + a[ao + 8 + r] * b[bo + c * 4 + 2] + a[ao + 12 + r] * b[bo + c * 4 + 3];
      }
    }
  }

  /// Every point of [lod] moved by its bones.
  Float64List _skin(_Lod lod, Float64List mats) {
    final out = Float64List(lod.vertices * 3);
    final base = <int>[];
    var o = 0;
    for (final j in _skinJoints) {
      base.add(o);
      o += j.length * 16;
    }
    final rigidBase = o;
    for (var v = 0; v < lod.vertices; v++) {
      final px = lod.rest[v * 3], py = lod.rest[v * 3 + 1], pz = lod.rest[v * 3 + 2];
      var x = 0.0, y = 0.0, z = 0.0;
      final sk = lod.vskin[v];
      if (sk == 255) {
        // Not skinned: stays where its own bone is (the first rigid part found for this point is good enough for the few of them).
        x = px;
        y = py;
        z = pz;
        if (_rigid.isNotEmpty) {
          final m = rigidBase;
          x = mats[m] * px + mats[m + 4] * py + mats[m + 8] * pz + mats[m + 12];
          y = mats[m + 1] * px + mats[m + 5] * py + mats[m + 9] * pz + mats[m + 13];
          z = mats[m + 2] * px + mats[m + 6] * py + mats[m + 10] * pz + mats[m + 14];
        }
      } else {
        for (var k = 0; k < 4; k++) {
          final w = lod.wgt[v * 4 + k];
          if (w == 0) continue;
          final m = base[sk] + lod.jidx[v * 4 + k] * 16;
          x += w * (mats[m] * px + mats[m + 4] * py + mats[m + 8] * pz + mats[m + 12]);
          y += w * (mats[m + 1] * px + mats[m + 5] * py + mats[m + 9] * pz + mats[m + 13]);
          z += w * (mats[m + 2] * px + mats[m + 6] * py + mats[m + 10] * pz + mats[m + 14]);
        }
      }
      out[v * 3] = x;
      out[v * 3 + 1] = y;
      out[v * 3 + 2] = z;
    }
    return out;
  }

  /// The name of the clip that suits what the person is doing.
  String clipFor({bool walking = false}) {
    String? find(String part) {
      for (final k in clips.keys) {
        if (k.toLowerCase().contains(part)) return k;
      }
      return null;
    }

    final want = walking ? find('walk') : (find('idle') ?? find('samba'));
    if (want != null) return want;
    return find('samba') ?? clips.keys.firstWhere((k) => !k.toLowerCase().contains('pose'), orElse: () => clips.keys.first);
  }

  double clipLength(String clip) => clips[clip]?.duration ?? 1;

  /// The character as faces of the game: feet on y = 0, facing +z (turned by [yaw]), standing at [x], [z].
  /// [walkedUnits] is how far the person has walked (it keeps the feet in step with the ground); null means just use [time].
  List<Poly> polys({required double time, required double x, required double z, required double yaw, bool walking = false, double? walkedUnits, int id = 0, bool close = true}) {
    final lod = close ? _guide : _resident;
    final clip = clipFor(walking: walking);
    final len = clipLength(clip);
    final clipTime = walking && walkedUnits != null ? walkedUnits / 50 * len : time;
    final mats = _poseMatrices(clip, clipTime);
    final p = _skin(lod, mats);
    final s = kAvatarUnitsPerMetre;
    final c = math.cos(yaw), sn = math.sin(yaw);
    final pts = List<V3>.generate(lod.vertices, (i) {
      final px = p[i * 3] * s, py = (p[i * 3 + 1] - _floor) * s, pz = p[i * 3 + 2] * s;
      return V3(px * c + pz * sn + x, py, -px * sn + pz * c + z);
    });
    final out = <Poly>[];
    for (var t = 0; t < lod.tris.length; t += 3) {
      final a = pts[lod.tris[t]], b = pts[lod.tris[t + 1]], d = pts[lod.tris[t + 2]];
      final n = (b - a).cross(d - a).unit;
      out.add(Poly([a, b, d], n, Color(lod.colors[t ~/ 3]), id, shine: 0.08));
    }
    return out;
  }
}

class _Mesh {
  _Mesh(this.pos, this.jidx, this.wgt, this.vskin, this.tris, this.colors);
  final Float64List pos;
  final Uint16List jidx;
  final Float64List wgt;
  final Uint8List vskin;
  final Int32List tris;
  final Int32List colors;
}

/// The two parts of a .glb file and how to read the numbers out of it.
class _Glb {
  _Glb(this.json, this.bin);
  final Map<String, dynamic> json;
  final Uint8List bin;

  Uint8List? imageBytes(int i) {
    final im = (json['images'] as List)[i] as Map;
    final bv = (im['bufferView'] as num?)?.toInt();
    if (bv == null) return null;
    final v = (json['bufferViews'] as List)[bv] as Map;
    final off = (v['byteOffset'] as num?)?.toInt() ?? 0, len = (v['byteLength'] as num).toInt();
    return Uint8List.sublistView(bin, off, off + len);
  }

  /// All the numbers of accessor [i] as doubles (whole numbers stay whole, "normalized" ones become 0..1), and how many numbers make one element.
  (Float64List, int) accessor(int i) {
    final a = (json['accessors'] as List)[i] as Map;
    final count = (a['count'] as num).toInt();
    final comps = switch (a['type']) { 'SCALAR' => 1, 'VEC2' => 2, 'VEC3' => 3, 'VEC4' => 4, 'MAT2' => 4, 'MAT3' => 9, 'MAT4' => 16, _ => 1 };
    final ct = (a['componentType'] as num).toInt();
    final size = switch (ct) { 5120 || 5121 => 1, 5122 || 5123 => 2, _ => 4 };
    final norm = a['normalized'] == true;
    final out = Float64List(count * comps);
    final bvi = (a['bufferView'] as num?)?.toInt();
    if (bvi == null) return (out, comps);
    final v = (json['bufferViews'] as List)[bvi] as Map;
    final base = ((v['byteOffset'] as num?)?.toInt() ?? 0) + ((a['byteOffset'] as num?)?.toInt() ?? 0);
    final stride = (v['byteStride'] as num?)?.toInt() ?? comps * size;
    final bd = ByteData.sublistView(bin);
    for (var e = 0; e < count; e++) {
      for (var k = 0; k < comps; k++) {
        final o = base + e * stride + k * size;
        double x;
        switch (ct) {
          case 5120:
            x = bd.getInt8(o).toDouble();
            if (norm) x = math.max(x / 127, -1);
          case 5121:
            x = bd.getUint8(o).toDouble();
            if (norm) x /= 255;
          case 5122:
            x = bd.getInt16(o, Endian.little).toDouble();
            if (norm) x = math.max(x / 32767, -1);
          case 5123:
            x = bd.getUint16(o, Endian.little).toDouble();
            if (norm) x /= 65535;
          case 5125:
            x = bd.getUint32(o, Endian.little).toDouble();
          default:
            x = bd.getFloat32(o, Endian.little);
        }
        out[e * comps + k] = x;
      }
    }
    return (out, comps);
  }
}
