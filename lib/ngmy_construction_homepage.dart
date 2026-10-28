import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_home.dart';
import 'ngmy_construction_homescene.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_construction_learn.dart';
import 'ngmy_construction_plumbjob.dart';
import 'ngmy_construction_plumbpage.dart';
import 'ngmy_construction_project.dart';
import 'ngmy_construction_projectpage.dart';

// ═════════════════════════════════════════════════════════════════════════════
// MY HOUSE PAGE: walk through a finished house room by room. The wiring and the plumbing react to a tap.
// Everything else (furniture, walls, floor, ceiling, doors) only reacts while its edit button is on.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyHousePage extends StatefulWidget {
  const NgmyHousePage({super.key, this.seed, this.practice = false, this.fresh = false});
  final int? seed;
  final bool practice;

  /// Start a new house even if one is already open.
  final bool fresh;

  @override
  State<NgmyHousePage> createState() => _NgmyHousePageState();
}

class _NgmyHousePageState extends State<NgmyHousePage> {
  late HomeProject home;
  late Cam3 cam;
  late Scene3D scene;
  String mode = 'look';
  int selFurn = 0;
  int selWall = -1;
  int hl = 0;
  String? msg;
  bool good = true;
  Timer? _t;

  HRoom get room => home.room;

  @override
  void initState() {
    super.initState();
    if (widget.fresh || widget.seed != null || HomeProject.session == null) {
      HomeProject.session = HomeProject(seed: widget.seed ?? DateTime.now().millisecondsSinceEpoch % 100000);
    }
    home = HomeProject.session!;
    home.practice = widget.practice || home.practice;
    cam = Cam3(yaw: -0.12, pitch: 0.5, dist: 200, target: const V3(0, 30, 60))
      ..maxDist = 420
      ..yawCenter = 0
      ..yawRange = 0.9;
    scene = buildHomeRoom(room);
    _frame(snap: true);
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _frame({bool snap = false}) {
    final r = room;
    final dist = (r.w * 1.2 > r.d * 1.4 ? r.w * 1.2 : r.d * 1.4) + 30;
    if (snap) {
      cam.target = V3(0, 30, r.d * 0.45);
      cam.dist = dist;
      cam.yaw = -0.12;
      cam.pitch = 0.5;
    } else {
      cam.glideTo(target: V3(0, 30, r.d * 0.45), dist: dist, yaw: -0.12, pitch: 0.5);
    }
  }

  void _rebuild() {
    scene = buildHomeRoom(room, mode: mode, selected: selFurn);
  }

  void _say(String t, {bool ok = true}) {
    _t?.cancel();
    setState(() {
      msg = t;
      good = ok;
    });
    _t = Timer(const Duration(seconds: 8), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _setMode(String m) {
    setState(() {
      mode = m;
      selFurn = 0;
      selWall = -1;
      hl = 0;
      _rebuild();
    });
    conBeep(660, ms: 50);
  }

  void _go(int id) {
    if (id == home.current) return;
    setState(() {
      home.current = id;
      selFurn = 0;
      selWall = -1;
      hl = 0;
      msg = null;
      _rebuild();
    });
    _frame();
    conBeep(520, ms: 60);
  }

  // ── Taps in the 3D view ──

  void _pick(int id) {
    if (id == 0) return;
    if (id >= idHFurn && id < idHFurn + 100) {
      if (mode != 'furniture') return;
      setState(() {
        selFurn = id - idHFurn;
        hl = id;
        _rebuild();
      });
      final f = room.furnById(selFurn);
      if (f != null) _say('${kFurnKinds[f.kind]!.name}: move it with the arrows.');
      return;
    }
    if (id == idHWallBack || id == idHWallLeft || id == idHWallRight) {
      if (mode != 'walls') return;
      setState(() {
        selWall = id - idHWallBack;
        hl = id;
      });
      _say('Wall picked. Choose a paint colour.');
      return;
    }
    if (id >= idHDoor && id < idHDoor + 20) {
      if (mode != 'doors') return;
      final i = id - idHDoor;
      setState(() {
        if (!room.openDoors.remove(i)) room.openDoors.add(i);
        _rebuild();
      });
      conBeep(room.openDoors.contains(i) ? 700 : 450, ms: 70);
      return;
    }
    if (id == idHOutletA || id == idHOutletB || id == idHSwitch || id == idHLight) {
      if (!room.wired) {
        _openWiring();
      } else {
        final i = scene.info[id];
        if (i != null) _say('${i.name}: ${i.about}');
      }
      return;
    }
    if (id == idHToiletF || id == idHSinkF || id == idHTubF || id == idHKSink) {
      if (!room.plumbed) {
        _openPlumbing();
      } else {
        final i = scene.info[id];
        if (i != null) _say('${i.name}: ${i.about}');
      }
    }
  }

  // ── Jobs ──

  Future<void> _openWiring() async {
    final r = room;
    if (r.wired && !r.wiringNeeded) {
      _say('The wiring in this room is already finished. Everything works.');
      return;
    }
    r.wiringNeeded = true;
    r.wiring ??= RoomProject(seed: home.seed * 37 + r.id, kind: wiringKindFor(r), name: r.name)..fastForward();
    r.wiring!.practice = home.practice;
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => NgmyRoomProjectPage(project: r.wiring)));
    if (!mounted) return;
    setState(_rebuild);
    if (r.wired) _say('${r.name}: the wiring is finished. The light has power.');
  }

  Future<void> _openPlumbing() async {
    final r = room;
    if (!r.hasPlumbing) {
      _say('This room has no plumbing. Bathrooms and the kitchen do.', ok: false);
      return;
    }
    if (r.plumbed && !r.plumbNeeded) {
      _say('The plumbing in this room is already finished. Nothing leaks.');
      return;
    }
    r.plumbNeeded = true;
    r.plumb ??= PlumbJob(seed: home.seed * 41 + r.id, variantId: r.kind == 'kitchen' ? 'kitchen' : 'bathroom');
    r.plumb!.practice = home.practice;
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => NgmyPlumbJobPage(job: r.plumb)));
    if (!mounted) return;
    setState(_rebuild);
    if (r.plumbed) _say('${r.name}: the plumbing is finished and nothing leaks.');
  }

  // ── Editing ──

  void _move(double dx, double dz) {
    final f = room.furnById(selFurn);
    if (f == null) return;
    setState(() {
      f.x += dx;
      f.z += dz;
      room.clamp(f);
      _rebuild();
    });
  }

  void _turn() {
    final f = room.furnById(selFurn);
    if (f == null) return;
    setState(() {
      f.rot = (f.rot + 1) % 4;
      room.clamp(f);
      _rebuild();
    });
  }

  void _recolor() {
    final f = room.furnById(selFurn);
    if (f == null) return;
    setState(() {
      f.color = (f.color + 1) % kFurnColors.length;
      _rebuild();
    });
    _say('${kFurnKinds[f.kind]!.name}: ${kFurnColorNames[f.color]}.');
  }

  void _remove() {
    final f = room.furnById(selFurn);
    if (f == null) return;
    setState(() {
      room.furn.remove(f);
      selFurn = 0;
      hl = 0;
      _rebuild();
    });
  }

  void _addFurn(String kind) {
    final f = room.add(kind);
    setState(() {
      selFurn = f.id;
      hl = idHFurn + f.id;
      _rebuild();
    });
    _say('${kFurnKinds[kind]!.name} added. Move it with the arrows.');
  }

  // ── Widgets ──

  Widget _chip(String label, bool on, VoidCallback f, {Color color = kConAmber, bool dot = false}) {
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: GestureDetector(
        onTap: f,
        child: Stack(clipBehavior: Clip.none, children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 8),
            decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: on ? color : Colors.white24, width: on ? 2 : 1)),
            child: Text(label, style: TextStyle(color: on ? color : Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5)),
          ),
          if (dot) Positioned(right: -2, top: -3, child: Container(width: 11, height: 11, decoration: BoxDecoration(color: const Color(0xFFEF4444), shape: BoxShape.circle, border: Border.all(color: kConPanel, width: 2)))),
        ]),
      ),
    );
  }

  Widget _row(List<Widget> kids) => SizedBox(height: 40, child: ListView(scrollDirection: Axis.horizontal, children: kids));

  Widget _swatch(Color c, bool on, VoidCallback f, {String? label}) => Padding(
        padding: const EdgeInsets.only(right: 7),
        child: GestureDetector(
          onTap: f,
          child: Container(
            width: label == null ? 34 : null,
            height: 34,
            padding: label == null ? null : const EdgeInsets.symmetric(horizontal: 10),
            decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(10), border: Border.all(color: on ? Colors.white : Colors.white24, width: on ? 3 : 1)),
            child: label == null ? null : Center(child: Text(label, style: TextStyle(color: c.computeLuminance() > 0.5 ? Colors.black : Colors.white, fontWeight: FontWeight.w800, fontSize: 12))),
          ),
        ),
      );

  Widget _arrow(IconData i, VoidCallback f) => Padding(
        padding: const EdgeInsets.only(right: 6),
        child: GestureDetector(
          onTap: f,
          child: Container(width: 40, height: 36, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(10), border: Border.all(color: Colors.white24)), child: Icon(i, color: Colors.white, size: 20)),
        ),
      );

  Widget _context() {
    switch (mode) {
      case 'furniture':
        final f = room.furnById(selFurn);
        return Column(mainAxisSize: MainAxisSize.min, children: [
          if (f != null)
            _row([
              _arrow(Icons.arrow_back_rounded, () => _move(-6, 0)),
              _arrow(Icons.arrow_forward_rounded, () => _move(6, 0)),
              _arrow(Icons.arrow_upward_rounded, () => _move(0, -6)),
              _arrow(Icons.arrow_downward_rounded, () => _move(0, 6)),
              _arrow(Icons.rotate_90_degrees_cw_rounded, _turn),
              _arrow(Icons.palette_rounded, _recolor),
              _arrow(Icons.delete_outline_rounded, _remove),
            ])
          else
            const Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.only(bottom: 4), child: Text('Tap a piece of furniture, or add one:', style: TextStyle(color: Colors.white60, fontSize: 12)))),
          _row([for (final e in kFurnKinds.entries) _chip('${e.value.emoji} ${e.value.name}', false, () => _addFurn(e.key), color: const Color(0xFF67E8F9))]),
        ]);
      case 'walls':
        return _row([
          _chip(selWall < 0 ? 'All walls' : 'Wall ${selWall + 1}: tap Look to reset', selWall < 0, () => setState(() => selWall = -1)),
          for (var i = 0; i < kWallColors.length; i++)
            _swatch(kWallColors[i], false, () {
              setState(() {
                if (selWall < 0) {
                  room.wallColor.fillRange(0, 3, i);
                } else {
                  room.wallColor[selWall] = i;
                }
                _rebuild();
              });
            }, label: kWallColorNames[i]),
        ]);
      case 'floor':
        return _row([
          for (var i = 0; i < kFloorStyles.length; i++)
            _swatch(kFloorStyles[i].color, room.floor == i, () {
              setState(() {
                room.floor = i;
                _rebuild();
              });
            }, label: kFloorStyles[i].name),
        ]);
      case 'ceiling':
        return _row([
          for (var i = 0; i < kCeilColors.length; i++)
            _swatch(kCeilColors[i], room.ceiling == i, () {
              setState(() {
                room.ceiling = i;
                _rebuild();
              });
            }),
        ]);
      default:
        final seen = <int>{};
        return _row([
          for (final d in room.doors)
            if (seen.add(d.to)) _chip('🚪 ${home.rooms[d.to].name}', false, () => _go(d.to), color: const Color(0xFF67E8F9), dot: !home.rooms[d.to].finished),
        ]);
    }
  }

  @override
  Widget build(BuildContext context) {
    final r = room;
    return LessonScaffold(
      title: r.name,
      color: kConAmber,
      stepText: '${home.finishedCount}/${home.rooms.length} done',
      onSteps: () => _problems(context),
      stage: Stage3D(
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: () => _frame(),
        message: msg,
        good: good,
        messageTop: 104,
        layerOn: (l) => l <= 5,
        topLeft: [
          _MiniMap(home: home, onTap: _go),
        ],
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        _row([
          _chip('👁 Look', mode == 'look', () => _setMode('look')),
          _chip('🛋 Furniture', mode == 'furniture', () => _setMode('furniture')),
          _chip('🧱 Walls', mode == 'walls', () => _setMode('walls')),
          _chip('🟫 Floor', mode == 'floor', () => _setMode('floor')),
          _chip('⬜ Ceiling', mode == 'ceiling', () => _setMode('ceiling')),
          _chip('🚪 Doors', mode == 'doors', () => _setMode('doors')),
          _chip('⚡ Wiring', false, _openWiring, color: const Color(0xFFFACC15), dot: !r.wired),
          _chip('🚰 Plumbing', false, _openPlumbing, color: const Color(0xFF60A5FA), dot: r.hasPlumbing && !r.plumbed),
          _chip('📘 Learn', false, () => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => const NgmyConstructionLearnPage())), color: const Color(0xFFA78BFA)),
          _chip(home.practice ? '🔥 Practice' : '🎓 Learn mode', home.practice, () => setState(() => home.practice = !home.practice), color: const Color(0xFFF87171)),
        ]),
        const SizedBox(height: 4),
        _context(),
      ]),
    );
  }

  Future<void> _problems(BuildContext context) {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => SafeArea(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.75),
          child: ListView(shrinkWrap: true, padding: const EdgeInsets.all(16), children: [
            const Text('What the house needs', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 4),
            Text('Wiring ${home.wiredCount}/${home.rooms.length} · Plumbing ${home.plumbedCount}/${home.plumbTotal}', style: const TextStyle(color: kConAmber, fontWeight: FontWeight.w800, fontSize: 12.5)),
            const SizedBox(height: 10),
            for (final e in home.rooms)
              GestureDetector(
                onTap: () {
                  Navigator.pop(ctx);
                  _go(e.id);
                },
                child: Container(
                  margin: const EdgeInsets.only(bottom: 6),
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(12), border: Border.all(color: e.finished ? const Color(0xFF4ADE80).withValues(alpha: 0.5) : Colors.white12)),
                  child: Row(children: [
                    Expanded(child: Text(e.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5))),
                    Text(e.finished ? '✅ finished' : '${e.wired ? '' : '⚡ wiring  '}${e.plumbed ? '' : '🚰 plumbing'}', style: TextStyle(color: e.finished ? const Color(0xFF86EFAC) : Colors.white70, fontSize: 12)),
                  ]),
                ),
              ),
            const SizedBox(height: 8),
            FilledButton(
              onPressed: () {
                Navigator.pop(ctx);
                HomeProject.session = HomeProject(seed: DateTime.now().millisecondsSinceEpoch % 100000);
                setState(() {
                  home = HomeProject.session!;
                  mode = 'look';
                  selFurn = 0;
                  selWall = -1;
                  hl = 0;
                  _rebuild();
                });
                _frame(snap: true);
              },
              child: const Text('A different house'),
            ),
          ]),
        ),
      ),
    );
  }
}

/// The little map of the house: tap a room to go there. Red means the wiring needs work, blue the plumbing.
class _MiniMap extends StatelessWidget {
  const _MiniMap({required this.home, required this.onTap});
  final HomeProject home;
  final void Function(int id) onTap;

  static const double cell = 14;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(5),
      decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.6), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white24)),
      child: GestureDetector(
        onTapDown: (d) {
          final cx = d.localPosition.dx ~/ cell, cy = d.localPosition.dy ~/ cell;
          for (final r in home.rooms) {
            if (cx >= r.gx && cx < r.gx + r.gw && cy >= r.gy && cy < r.gy + r.gh) {
              onTap(r.id);
              return;
            }
          }
        },
        child: CustomPaint(size: const Size(cell * 9, cell * 5), painter: _MapPainter(home)),
      ),
    );
  }
}

class _MapPainter extends CustomPainter {
  _MapPainter(this.home);
  final HomeProject home;

  @override
  void paint(Canvas c, Size s) {
    for (final r in home.rooms) {
      final rect = Rect.fromLTWH(r.gx * _MiniMap.cell + 1, r.gy * _MiniMap.cell + 1, r.gw * _MiniMap.cell - 2, r.gh * _MiniMap.cell - 2);
      final here = r.id == home.current;
      final col = r.finished ? const Color(0xFF22C55E) : (!r.wired ? const Color(0xFFEF4444) : const Color(0xFF3B82F6));
      c.drawRRect(RRect.fromRectAndRadius(rect, const Radius.circular(3)), Paint()..color = col.withValues(alpha: r.finished ? 0.35 : 0.5));
      c.drawRRect(RRect.fromRectAndRadius(rect, const Radius.circular(3)), Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = here ? 2.2 : 0.8
        ..color = here ? Colors.white : Colors.white38);
      final tp = TextPainter(text: TextSpan(text: switch (r.kind) { 'bedroom' => '🛏', 'bathroom' => '🚿', 'kitchen' => '🍳', 'living' => '🛋', _ => '' }, style: const TextStyle(fontSize: 9)), textDirection: TextDirection.ltr)..layout();
      tp.paint(c, rect.center - Offset(tp.width / 2, tp.height / 2));
    }
  }

  @override
  bool shouldRepaint(covariant _MapPainter old) => true;
}
