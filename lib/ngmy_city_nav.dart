import 'dart:math' as math;

import 'ngmy_construction_home.dart';
import 'ngmy_construction_tour.dart';
import 'ngmy_construction_world.dart';

typedef CityPt = (double, double);

/// Where people of the town can walk: a grid over the whole land with the buildings, signs, trees and cars blocked off, and a
/// search that goes round them. The way found is then straightened wherever the straight line is clear, so they walk like people.
class CityNav {
  CityNav(this.city) {
    _build();
  }

  final HRoom city;
  static const double cell = 24, margin = 14;
  late int nx, nz;
  late List<NavRect> _obs;
  late List<bool> _blocked;
  int _sig = -1;

  double _x(int i) => -city.w / 2 + 8 + i * cell;
  static const double zMin = -750;
  double _z(int j) => zMin + j * cell;

  static int _signature(HRoom r) => Object.hash(r.furn.length, r.furn.fold<int>(0, (a, f) => a ^ (f.x.round() * 31 + f.z.round())));

  void _build() {
    _obs = obstaclesOfWorld(city);
    nx = ((city.w - 16) / cell).ceil() + 1;
    nz = ((city.d - 10 - zMin) / cell).ceil() + 1;
    _blocked = List<bool>.filled(nx * nz, false);
    for (var i = 0; i < nx; i++) {
      for (var j = 0; j < nz; j++) {
        _blocked[i * nz + j] = _hits(_x(i), _z(j));
      }
    }
    _sig = _signature(city);
  }

  bool _hits(double x, double z) {
    if (x < -city.w / 2 + 12 || x > city.w / 2 - 12 || z < zMin - 6 || z > city.d - 14) return true;
    for (final o in _obs) {
      if (o.hit(x, z, margin)) return true;
    }
    return false;
  }

  /// Rebuilds the grid if something was built or moved since.
  void refresh() {
    if (_signature(city) != _sig) _build();
  }

  bool free(double x, double z) => !_hits(x, z);

  bool _clear(CityPt a, CityPt b) {
    final len = math.sqrt(math.pow(b.$1 - a.$1, 2) + math.pow(b.$2 - a.$2, 2));
    final n = math.max(1, (len / 8).ceil());
    for (var i = 0; i <= n; i++) {
      final t = i / n;
      if (_hits(a.$1 + (b.$1 - a.$1) * t, a.$2 + (b.$2 - a.$2) * t)) return false;
    }
    return true;
  }

  (int, int)? _nearestFree(CityPt p) {
    final ci = ((p.$1 + city.w / 2 - 8) / cell).round().clamp(0, nx - 1), cj = ((p.$2 - zMin) / cell).round().clamp(0, nz - 1);
    for (var r = 0; r < 24; r++) {
      (int, int)? best;
      var bd = double.infinity;
      for (var di = -r; di <= r; di++) {
        for (var dj = -r; dj <= r; dj++) {
          if (math.max(di.abs(), dj.abs()) != r) continue;
          final i = ci + di, j = cj + dj;
          if (i < 0 || j < 0 || i >= nx || j >= nz || _blocked[i * nz + j]) continue;
          final dd = math.pow(_x(i) - p.$1, 2) + math.pow(_z(j) - p.$2, 2).toDouble();
          if (dd < bd) {
            bd = dd.toDouble();
            best = (i, j);
          }
        }
      }
      if (best != null) return best;
    }
    return null;
  }

  /// The way from [a] to [b] as a list of points, always going round buildings. A start or end that is inside something (a door)
  /// is joined to the nearest free spot by a short straight step.
  List<CityPt> route(CityPt a, CityPt b) {
    refresh();
    final s = _nearestFree(a), g = _nearestFree(b);
    if (s == null || g == null) return [a, b];
    final start = (_x(s.$1), _z(s.$2)), goal = (_x(g.$1), _z(g.$2));
    final head = _hits(a.$1, a.$2) ? <CityPt>[a] : <CityPt>[];
    final tail = _hits(b.$1, b.$2) ? <CityPt>[b] : <CityPt>[];
    final mid = <CityPt>[];
    final a0 = head.isEmpty ? a : start, b0 = tail.isEmpty ? b : goal;
    if (_clear(a0, b0)) {
      mid.addAll([a0, b0]);
    } else {
      mid.addAll(_search(s, g, a0, b0));
    }
    return [...head, ...mid, ...tail];
  }

  List<CityPt> _search((int, int) s, (int, int) g, CityPt a, CityPt b) {
    final heap = _Heap();
    final came = <int, int>{};
    final cost = <int, double>{};
    final from = s.$1 * nz + s.$2, end = g.$1 * nz + g.$2;
    cost[from] = 0;
    heap.push(from, _h(s.$1, s.$2, g));
    var found = false;
    var guard = 0;
    while (heap.isNotEmpty && guard++ < 40000) {
      final cur = heap.pop();
      if (cur == end) {
        found = true;
        break;
      }
      final ci = cur ~/ nz, cj = cur % nz;
      for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {
          if (di == 0 && dj == 0) continue;
          final i = ci + di, j = cj + dj;
          if (i < 0 || j < 0 || i >= nx || j >= nz || _blocked[i * nz + j]) continue;
          if (di != 0 && dj != 0 && (_blocked[(ci + di) * nz + cj] || _blocked[ci * nz + cj + dj])) continue;
          final k = i * nz + j;
          final tg = cost[cur]! + (di != 0 && dj != 0 ? 1.4142 : 1.0);
          if (tg < (cost[k] ?? 1e9)) {
            came[k] = cur;
            cost[k] = tg;
            heap.push(k, tg + _h(i, j, g));
          }
        }
      }
    }
    if (!found) return [a, b];
    final cells = <int>[end];
    while (came.containsKey(cells.last)) {
      cells.add(came[cells.last]!);
    }
    final pts = <CityPt>[a, for (final k in cells.reversed) (_x(k ~/ nz), _z(k % nz)), b];
    // Cut the corners wherever the straight way is clear.
    final out = <CityPt>[pts.first];
    var i = 0;
    while (i < pts.length - 1) {
      var j = pts.length - 1;
      while (j > i + 1 && !_clear(pts[i], pts[j])) {
        j--;
      }
      out.add(pts[j]);
      i = j;
    }
    return out;
  }

  double _h(int i, int j, (int, int) g) => math.sqrt(math.pow(i - g.$1, 2) + math.pow(j - g.$2, 2));
}

/// A small binary heap of grid cells ordered by their score.
class _Heap {
  final List<int> _k = [];
  final List<double> _v = [];
  bool get isNotEmpty => _k.isNotEmpty;

  void push(int key, double score) {
    _k.add(key);
    _v.add(score);
    var i = _k.length - 1;
    while (i > 0) {
      final p = (i - 1) ~/ 2;
      if (_v[p] <= _v[i]) break;
      _swap(i, p);
      i = p;
    }
  }

  int pop() {
    final top = _k.first;
    final lastK = _k.removeLast(), lastV = _v.removeLast();
    if (_k.isNotEmpty) {
      _k[0] = lastK;
      _v[0] = lastV;
      var i = 0;
      for (;;) {
        final l = 2 * i + 1, r = l + 1;
        var m = i;
        if (l < _k.length && _v[l] < _v[m]) m = l;
        if (r < _k.length && _v[r] < _v[m]) m = r;
        if (m == i) break;
        _swap(i, m);
        i = m;
      }
    }
    return top;
  }

  void _swap(int a, int b) {
    final tk = _k[a];
    _k[a] = _k[b];
    _k[b] = tk;
    final tv = _v[a];
    _v[a] = _v[b];
    _v[b] = tv;
  }
}

/// Total length of a path of points.
double pathLength(List<CityPt> p) {
  var len = 0.0;
  for (var i = 0; i + 1 < p.length; i++) {
    len += math.sqrt(math.pow(p[i + 1].$1 - p[i].$1, 2) + math.pow(p[i + 1].$2 - p[i].$2, 2));
  }
  return len;
}

/// The point at [d] units along [p], and the way it faces there (yaw, 0 is +z).
(double, double, double) pointAlong(List<CityPt> p, double d) {
  var left = d;
  for (var i = 0; i + 1 < p.length; i++) {
    final dx = p[i + 1].$1 - p[i].$1, dz = p[i + 1].$2 - p[i].$2;
    final seg = math.sqrt(dx * dx + dz * dz);
    if (seg < 1e-6) continue;
    if (left <= seg || i + 2 == p.length) {
      final t = (left / seg).clamp(0.0, 1.0);
      return (p[i].$1 + dx * t, p[i].$2 + dz * t, math.atan2(dx, dz));
    }
    left -= seg;
  }
  return (p.last.$1, p.last.$2, 0);
}
