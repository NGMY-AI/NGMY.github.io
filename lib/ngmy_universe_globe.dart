import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';
import 'ngmy_universe_data.dart';

/// Earth Globe: a turning Earth with every country on it. Drag to spin, pinch to zoom, tap a
/// country to read about it, or search and the globe flies there.
class NgmyGlobeStudio extends StatefulWidget {
  const NgmyGlobeStudio({super.key, this.world});

  /// For tests: a world to use instead of loading the asset.
  final UWorld? world;

  @override
  State<NgmyGlobeStudio> createState() => _NgmyGlobeStudioState();
}

class _NgmyGlobeStudioState extends State<NgmyGlobeStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final TextEditingController _search = TextEditingController();
  final UAmbient _amb = UAmbient();
  UWorld? _world;
  // The ring points of every country, with their sines and cosines worked out once.
  List<List<Float64List>> _prep = const [];
  double _lat = 15, _lon = 10, _zoom = 1.0;
  double _vLon = 0, _vLat = 0;
  double? _tLat, _tLon, _tZoom;
  bool _spin = true;
  bool _night = true;
  bool _borders = true;
  bool _names = true;
  bool _music = true;
  bool _touching = false;
  double _hour = 14;
  double _day = 172;
  UCountry? _sel;
  Size _size = Size.zero;
  double _baseZoom = 1;
  List<UCountry> _matches = const [];

  static const _continentView = <String, (double, double, double)>{
    'Africa': (3, 20, 1.9),
    'Asia': (33, 90, 1.6),
    'Europe': (52, 15, 3.2),
    'North America': (45, -100, 1.8),
    'South America': (-15, -60, 1.9),
    'Oceania': (-25, 140, 2.4),
    'Antarctica': (-82, 0, 2.2),
  };

  @override
  void initState() {
    super.initState();
    startFrames();
    final w = widget.world;
    if (w != null) {
      _setWorld(w);
    } else {
      UWorld.load().then((w) {
        if (mounted) setState(() => _setWorld(w));
      });
    }
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  void _setWorld(UWorld w) {
    _world = w;
    _prep = [
      for (final c in w.countries)
        [
          for (final r in c.rings)
            () {
              final a = Float64List(r.length * 4);
              for (var i = 0; i < r.length; i++) {
                final lon = r[i][0] * math.pi / 180, lat = r[i][1] * math.pi / 180;
                a[i * 4] = math.sin(lat);
                a[i * 4 + 1] = math.cos(lat);
                a[i * 4 + 2] = math.sin(lon);
                a[i * 4 + 3] = math.cos(lon);
              }
              return a;
            }(),
        ],
    ];
  }

  double get _baseR => _size == Size.zero ? 100 : math.min(_size.width, _size.height) * 0.43;
  double get _r => _baseR * _zoom;

  void _fly(double lat, double lon, double zoom) {
    _tLat = lat;
    _tLon = lon;
    _tZoom = zoom.clamp(1.0, 16.0);
    _vLon = _vLat = 0;
  }

  void _select(UCountry c) {
    _sel = c;
    _fly(c.cLat, c.cLon, 105 / math.max(c.span, 3));
    HapticFeedback.selectionClick();
    final hue = (kWorldContinents.indexOf(c.continent) + 1) * 3;
    NgmyTone.playNote('bell', hue + 12, ms: 900, volume: 0.45);
    NgmyTone.play(300, ms: 280, wave: 'tri', sweep: 1.4, volume: 0.15);
  }

  @override
  void onFrame(double dt) {
    _amb.update(dt, _music);
    if (_tLat != null) {
      final k = 1 - math.exp(-dt * 3.6);
      var dLon = _tLon! - _lon;
      while (dLon > 180) {
        dLon -= 360;
      }
      while (dLon < -180) {
        dLon += 360;
      }
      _lon += dLon * k;
      _lat += (_tLat! - _lat) * k;
      _zoom += (_tZoom! - _zoom) * k;
      if (dLon.abs() < 0.2 && (_tLat! - _lat).abs() < 0.2 && (_tZoom! - _zoom).abs() < 0.02) {
        _tLat = _tLon = _tZoom = null;
      }
    } else if (!_touching) {
      _lon += _vLon * dt;
      _lat = (_lat + _vLat * dt).clamp(-85.0, 85.0);
      final damp = math.exp(-dt * 2.2);
      _vLon *= damp;
      _vLat *= damp;
      if (_spin && _vLon.abs() < 3) _lon += 7 * dt / math.sqrt(_zoom);
    }
    while (_lon > 180) {
      _lon -= 360;
    }
    while (_lon < -180) {
      _lon += 360;
    }
  }

  /// The country under a screen point, if there is one.
  UCountry? _hit(Offset p) {
    final w = _world;
    if (w == null || _size == Size.zero) return null;
    final c = Offset(_size.width / 2, _size.height / 2);
    final x = (p.dx - c.dx) / _r, y = (c.dy - p.dy) / _r;
    final d2 = x * x + y * y;
    if (d2 > 1) return null;
    final z = math.sqrt(1 - d2);
    final lat0 = _lat * math.pi / 180;
    final lat = math.asin((z * math.sin(lat0) + y * math.cos(lat0)).clamp(-1.0, 1.0));
    final lon = _lon * math.pi / 180 + math.atan2(x, z * math.cos(lat0) - y * math.sin(lat0));
    return w.at(lon * 180 / math.pi, lat * 180 / math.pi);
  }

  void _find(String q) {
    final w = _world;
    if (w == null || q.trim().isEmpty) {
      setState(() => _matches = const []);
      return;
    }
    final s = q.trim().toLowerCase();
    setState(() => _matches = w.countries.where((c) => c.name.toLowerCase().contains(s)).take(6).toList());
  }

  void _facts() {
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Planet Earth', style: TextStyle(color: Color(0xFF38BDF8), fontWeight: FontWeight.w900)),
        content: SingleChildScrollView(
          child: Text(
            'Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s² at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January',
            style: TextStyle(color: Colors.white70, height: 1.55, fontSize: 14),
          ),
        ),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close'))],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    return StudioPage(
      title: 'EARTH GLOBE',
      accent: const Color(0xFF38BDF8),
      help: 'A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.',
      actions: [
        IconButton(onPressed: _facts, icon: const Icon(Icons.public_rounded, color: Colors.white70, size: 21), tooltip: 'Earth facts'),
        IconButton(onPressed: () => studioShare(context, _shot, name: 'earth'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share'),
      ],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: Stack(fit: StackFit.expand, children: [
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onScaleStart: (d) {
                _touching = true;
                _baseZoom = _zoom;
                _tLat = _tLon = _tZoom = null;
              },
              onScaleUpdate: (d) {
                if (d.pointerCount >= 2) {
                  _zoom = (_baseZoom * d.scale).clamp(0.8, 16.0);
                } else {
                  final k = 57.2958 / _r;
                  _lon -= d.focalPointDelta.dx * k;
                  _lat = (_lat + d.focalPointDelta.dy * k).clamp(-85.0, 85.0);
                }
              },
              onScaleEnd: (d) {
                _touching = false;
                final k = 57.2958 / _r;
                _vLon = (-d.velocity.pixelsPerSecond.dx * k).clamp(-160.0, 160.0);
                _vLat = (d.velocity.pixelsPerSecond.dy * k).clamp(-100.0, 100.0);
              },
              onTapUp: (d) {
                final c = _hit(d.localPosition);
                if (c != null) {
                  setState(() => _select(c));
                } else {
                  setState(() => _sel = null);
                }
              },
              child: CustomPaint(
                size: _size,
                painter: _GlobePainter(
                  world: _world,
                  prep: _prep,
                  lat: _lat,
                  lon: _lon,
                  radius: _r,
                  zoom: _zoom,
                  selected: _sel,
                  night: _night,
                  borders: _borders,
                  names: _names,
                  hour: _hour,
                  day: _day,
                  now: nowMs,
                ),
              ),
            ),
            if (_world == null) const Center(child: CircularProgressIndicator(color: Color(0xFF38BDF8))),
            if (sel != null)
              Positioned(left: 10, right: 10, bottom: 8, child: _card(sel)),
          ]),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        TextField(
          controller: _search,
          onChanged: _find,
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
          decoration: InputDecoration(
            isDense: true,
            prefixIcon: const Icon(Icons.search_rounded, color: Colors.white54, size: 20),
            hintText: 'Search a country',
            hintStyle: const TextStyle(color: Colors.white30),
            filled: true,
            fillColor: Colors.white.withValues(alpha: 0.06),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
          ),
        ),
        if (_matches.isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(top: 6),
            child: SizedBox(
              height: 38,
              child: ListView(scrollDirection: Axis.horizontal, children: [
                for (final c in _matches)
                  StudioChip(label: c.name, icon: Icons.place_rounded, selected: false, color: const Color(0xFF38BDF8), onTap: () {
                    _search.clear();
                    setState(() {
                      _matches = const [];
                      _select(c);
                    });
                  }),
              ]),
            ),
          ),
        const SizedBox(height: 6),
        StudioRow(label: 'GO TO', children: [
          StudioChip(label: 'Whole Earth', icon: Icons.language_rounded, selected: false, color: const Color(0xFF38BDF8), onTap: () => setState(() {
                _sel = null;
                _fly(15, _lon, 1.0);
              })),
          for (final e in _continentView.entries) StudioChip(label: e.key, selected: false, color: const Color(0xFF38BDF8), onTap: () => setState(() => _fly(e.value.$1, e.value.$2, e.value.$3))),
          StudioChip(label: 'Random', icon: Icons.casino_rounded, selected: false, color: const Color(0xFF38BDF8), onTap: () {
            final w = _world;
            if (w != null) setState(() => _select(w.countries[math.Random().nextInt(w.countries.length)]));
          }),
        ]),
        StudioSlider(label: 'Zoom', value: _zoom, min: 0.8, max: 16, display: '${_zoom.toStringAsFixed(1)}x', color: const Color(0xFF38BDF8), onChanged: (v) => setState(() {
              _tZoom = null;
              _zoom = v;
            })),
        StudioSlider(label: 'Time', value: _hour, min: 0, max: 24, display: '${_hour.floor().toString().padLeft(2, '0')}:00', color: const Color(0xFFFACC15), onChanged: (v) => setState(() => _hour = v)),
        StudioSlider(label: 'Season', value: _day, min: 0, max: 365, display: _seasonName(), color: const Color(0xFF4ADE80), onChanged: (v) => setState(() => _day = v)),
        StudioRow(children: [
          StudioChip(label: 'Spin', icon: Icons.autorenew_rounded, selected: _spin, color: const Color(0xFF38BDF8), onTap: () => setState(() => _spin = !_spin)),
          StudioChip(label: 'Night', icon: Icons.nightlight_round, selected: _night, color: const Color(0xFF38BDF8), onTap: () => setState(() => _night = !_night)),
          StudioChip(label: 'Borders', icon: Icons.border_all_rounded, selected: _borders, color: const Color(0xFF38BDF8), onTap: () => setState(() => _borders = !_borders)),
          StudioChip(label: 'Names', icon: Icons.label_rounded, selected: _names, color: const Color(0xFF38BDF8), onTap: () => setState(() => _names = !_names)),
          StudioChip(label: 'Music', icon: _music ? Icons.music_note_rounded : Icons.music_off_rounded, selected: _music, color: const Color(0xFF38BDF8), onTap: () => setState(() => _music = !_music)),
        ]),
      ]),
    );
  }

  String _seasonName() {
    // Day 0 is January 1st.
    const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const starts = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var m = 0;
    for (var i = 0; i < 12; i++) {
      if (_day >= starts[i]) m = i;
    }
    return '${names[m]} ${(_day - starts[m]).floor() + 1}';
  }

  Widget _card(UCountry c) {
    final dens = c.areaKm2 > 0 ? c.pop / c.areaKm2 : 0;
    final share = c.pop / 7.9e9 * 100;
    final hue = ((kWorldContinents.indexOf(c.continent) + 1) * 47.0) % 360;
    final color = HSVColor.fromAHSV(1, hue, 0.55, 1).toColor();
    Widget stat(String k, String v) => Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(k, style: const TextStyle(color: Colors.white38, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
            const SizedBox(height: 1),
            Text(v, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 12.5, fontWeight: FontWeight.w800, height: 1.2)),
          ]),
        );
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 10, 8, 12),
      decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(20), border: Border.all(color: color.withValues(alpha: 0.6))),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Container(width: 10, height: 10, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
          const SizedBox(width: 8),
          Expanded(child: Text(c.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
          IconButton(visualDensity: VisualDensity.compact, onPressed: () => setState(() => _sel = null), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20)),
        ]),
        Text('${c.continent}${c.subregion.isNotEmpty ? ' · ${c.subregion}' : ''}', style: const TextStyle(color: Colors.white54, fontSize: 12)),
        const SizedBox(height: 8),
        Row(children: [stat('CAPITAL', c.capital), const SizedBox(width: 8), stat('PEOPLE', c.pop > 0 ? formatBig(c.pop) : '—')]),
        const SizedBox(height: 8),
        Row(children: [
          stat('SIZE', '${withCommas(c.areaKm2)} km²'),
          const SizedBox(width: 8),
          stat('CROWDING', c.pop > 0 ? '${dens < 10 ? dens.toStringAsFixed(1) : withCommas(dens)} per km²' : '—'),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          stat('WORLD SHARE', '${share < 0.1 ? share.toStringAsFixed(3) : share.toStringAsFixed(1)}% of people'),
          const SizedBox(width: 8),
          stat('ECONOMY', c.gdp > 0 ? '\$${formatBig(c.gdp * 1e6)} · ${c.income}' : c.income),
        ]),
      ]),
    );
  }
}

const List<String> kWorldContinents = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctica', 'Seven seas (open ocean)'];

class _GlobePainter extends CustomPainter {
  _GlobePainter({required this.world, required this.prep, required this.lat, required this.lon, required this.radius, required this.zoom, required this.selected, required this.night, required this.borders, required this.names, required this.hour, required this.day, required this.now});
  final UWorld? world;
  final List<List<Float64List>> prep;
  final double lat;
  final double lon;
  final double radius;
  final double zoom;
  final UCountry? selected;
  final bool night;
  final bool borders;
  final bool names;
  final double hour;
  final double day;
  final int now;

  static final Map<String, TextPainter> _tp = {};

  static TextPainter _text(String t, double size, Color c) => _tp.putIfAbsent('$t|$size|${c.toARGB32()}', () => TextPainter(text: TextSpan(text: t, style: TextStyle(fontSize: size, color: c, fontWeight: FontWeight.w800, shadows: const [Shadow(color: Colors.black87, blurRadius: 4)])), textDirection: TextDirection.ltr)..layout());

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF05060B));
    final rnd = math.Random(4);
    for (var i = 0; i < 90; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() * 1.2 + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.25 + rnd.nextDouble() * 0.5));
    }
    final c = Offset(size.width / 2, size.height / 2);
    final R = radius;
    // The glow of the air around Earth.
    canvas.drawCircle(c, R * 1.05, Paint()..shader = RadialGradient(colors: [Colors.transparent, const Color(0xFF38BDF8).withValues(alpha: 0.35), Colors.transparent], stops: const [0.93, 0.975, 1.0]).createShader(Rect.fromCircle(center: c, radius: R * 1.1)));
    // The ocean.
    final disc = Rect.fromCircle(center: c, radius: R);
    canvas.drawCircle(c, R, Paint()..shader = const RadialGradient(center: Alignment(-0.35, -0.4), colors: [Color(0xFF1D5C9C), Color(0xFF0B2A52), Color(0xFF061428)], stops: [0, 0.65, 1]).createShader(disc));
    canvas.save();
    canvas.clipPath(Path()..addOval(disc));

    final lat0 = lat * math.pi / 180, lon0 = lon * math.pi / 180;
    final sl0 = math.sin(lat0), cl0 = math.cos(lat0), sn0 = math.sin(lon0), cn0 = math.cos(lon0);

    // Lines of latitude and longitude every 30 degrees.
    final grid = Paint()..style = PaintingStyle.stroke..strokeWidth = 0.7..color = Colors.white.withValues(alpha: 0.1);
    Offset? proj(double la, double lo) {
      final sp = math.sin(la), cp = math.cos(la);
      final sd = math.sin(lo - lon0), cd = math.cos(lo - lon0);
      final cosc = sl0 * sp + cl0 * cp * cd;
      if (cosc < 0) return null;
      return Offset(c.dx + R * cp * sd, c.dy - R * (cl0 * sp - sl0 * cp * cd));
    }

    for (var la = -60; la <= 60; la += 30) {
      Path? p;
      for (var lo = -180; lo <= 180; lo += 4) {
        final o = proj(la * math.pi / 180, lo * math.pi / 180);
        if (o == null) {
          if (p != null) canvas.drawPath(p, grid);
          p = null;
        } else if (p == null) {
          p = Path()..moveTo(o.dx, o.dy);
        } else {
          p.lineTo(o.dx, o.dy);
        }
      }
      if (p != null) canvas.drawPath(p, grid);
    }
    for (var lo = -180; lo < 180; lo += 30) {
      Path? p;
      for (var la = -88; la <= 88; la += 4) {
        final o = proj(la * math.pi / 180, lo * math.pi / 180);
        if (o == null) {
          if (p != null) canvas.drawPath(p, grid);
          p = null;
        } else if (p == null) {
          p = Path()..moveTo(o.dx, o.dy);
        } else {
          p.lineTo(o.dx, o.dy);
        }
      }
      if (p != null) canvas.drawPath(p, grid);
    }

    final w = world;
    if (w != null && prep.length == w.countries.length) {
      final selPath = <Path>[];
      for (var ci = 0; ci < w.countries.length; ci++) {
        final country = w.countries[ci];
        final isSel = identical(country, selected);
        final hue = ((kWorldContinents.indexOf(country.continent) + 1) * 47.0) % 360;
        final fill = Paint()..color = HSVColor.fromAHSV(1, hue, isSel ? 0.35 : 0.5, isSel ? 1.0 : 0.62).toColor();
        final line = Paint()..style = PaintingStyle.stroke..strokeWidth = isSel ? 2.2 : 0.7..strokeJoin = StrokeJoin.round..color = isSel ? Colors.white : Colors.black.withValues(alpha: 0.55);
        for (final ring in prep[ci]) {
          final n = ring.length ~/ 4;
          final path = Path();
          var anyVisible = false;
          for (var i = 0; i < n; i++) {
            final sp = ring[i * 4], cp = ring[i * 4 + 1], sl = ring[i * 4 + 2], cl = ring[i * 4 + 3];
            final sd = sl * cn0 - cl * sn0;
            final cd = cl * cn0 + sl * sn0;
            var x = R * cp * sd;
            var y = R * (cl0 * sp - sl0 * cp * cd);
            final cosc = sl0 * sp + cl0 * cp * cd;
            if (cosc >= 0) {
              anyVisible = true;
            } else {
              // Points on the far side are pressed onto the edge, so the shape still closes properly.
              final len = math.sqrt(x * x + y * y);
              if (len > 0) {
                x = x / len * R;
                y = y / len * R;
              }
            }
            if (i == 0) {
              path.moveTo(c.dx + x, c.dy - y);
            } else {
              path.lineTo(c.dx + x, c.dy - y);
            }
          }
          if (!anyVisible) continue;
          path.close();
          canvas.drawPath(path, fill);
          if (borders || isSel) canvas.drawPath(path, line);
          if (isSel) selPath.add(path);
        }
      }
      for (final p in selPath) {
        canvas.drawPath(p, Paint()..style = PaintingStyle.stroke..strokeWidth = 5..color = Colors.white.withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
      }
      // Names appear as you zoom in.
      if (names) {
        for (final country in w.countries) {
          final isSel = identical(country, selected);
          if (!isSel && (zoom < 1.8 || country.span < 14 / zoom)) continue;
          final la = country.cLat * math.pi / 180, lo = country.cLon * math.pi / 180;
          final cosc = sl0 * math.sin(la) + cl0 * math.cos(la) * math.cos(lo - lon0);
          if (cosc < 0.25) continue;
          final o = proj(la, lo);
          if (o == null) continue;
          final tp = _text(country.name, isSel ? 13 : 10.5, isSel ? Colors.white : Colors.white.withValues(alpha: 0.9));
          tp.paint(canvas, o - Offset(tp.width / 2, tp.height / 2));
        }
      }
    }

    // Day and night: the Sun lights one side of Earth.
    if (night) {
      final decl = -23.44 * math.cos(2 * math.pi * (day + 10) / 365) * math.pi / 180;
      final sunLon = -(hour - 12) * 15 * math.pi / 180;
      final sp = math.sin(decl), cp = math.cos(decl);
      final sd = math.sin(sunLon - lon0), cd = math.cos(sunLon - lon0);
      final sx = cp * sd;
      final sy = cl0 * sp - sl0 * cp * cd;
      final sz = sl0 * sp + cl0 * cp * cd; // positive: the Sun is on the side we can see
      final center = Offset(c.dx + sx * R, c.dy - sy * R);
      final rad = R * (1.15 + 0.5 * (1 - sz.clamp(-1.0, 1.0)) * 0.5);
      canvas.drawCircle(
        c,
        R,
        Paint()..shader = RadialGradient(colors: [Colors.transparent, Colors.transparent, const Color(0xFF020510).withValues(alpha: 0.78)], stops: const [0, 0.46, 0.82]).createShader(Rect.fromCircle(center: center, radius: rad)),
      );
    }
    // The edge of the globe is a little darker, which makes it look round.
    canvas.drawCircle(c, R, Paint()..shader = RadialGradient(colors: [Colors.transparent, Colors.black.withValues(alpha: 0.4)], stops: const [0.72, 1.0]).createShader(disc));
    canvas.restore();
    canvas.drawCircle(c, R, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = const Color(0xFF7DD3FC).withValues(alpha: 0.5));
  }

  @override
  bool shouldRepaint(covariant _GlobePainter old) => true;
}
