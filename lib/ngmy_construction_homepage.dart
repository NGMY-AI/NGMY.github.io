import 'dart:async';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_home.dart';
import 'ngmy_construction_homescene.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_construction_learn.dart';
import 'ngmy_construction_plumbing.dart';
import 'ngmy_construction_plumbjob.dart';
import 'ngmy_construction_plumbpage.dart';
import 'ngmy_construction_project.dart';
import 'ngmy_construction_projectpage.dart';
import 'ngmy_construction_tour.dart';
import 'ngmy_electronics_screens.dart';
import 'ngmy_electronics_tv.dart';

// ═════════════════════════════════════════════════════════════════════════════
// MY HOUSE PAGE: you are inside the house, room by room. The wiring and the plumbing react to a tap. Everything
// else (furniture, walls, floor, ceiling, doors) only reacts while its edit button is on. A cartoon person can
// walk the house on a tour of the length you choose, and every lesson can be played inside a furnished room.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyHousePage extends StatefulWidget {
  const NgmyHousePage({super.key, this.seed, this.practice = false, this.fresh = false, this.focus = '', this.lesson = ''});
  final int? seed;
  final bool practice;

  /// Start a new house even if one is already open.
  final bool fresh;

  /// Start in a room that needs this: wiring, plumbing or anything (fix).
  final String focus;

  /// A lesson to play inside a furnished room: outlet, switch, gfci, fan, ptrap or faucet.
  final String lesson;

  @override
  State<NgmyHousePage> createState() => _NgmyHousePageState();
}

class _NgmyHousePageState extends State<NgmyHousePage> {
  late HomeProject home;
  late Cam3 cam;
  late Scene3D scene;
  String mode = 'look';

  /// The voltage tester is in your hand: tap an outlet, a switch or the light to check for power.
  bool tester = false;

  /// Looking from inside the room (the default) or from above at the whole cut-away room.
  bool inside = true;
  bool showMap = true;
  int selFurn = 0;
  int selWall = -1;
  int hl = 0;
  String? msg;
  bool good = true;
  Timer? _t;
  final Stopwatch clock = Stopwatch()..start();

  // The house tour.
  HomeTour? tour;
  double _tourStart = 0;
  int tourSecs = 60;
  Timer? _tourTimer;
  String tourNote = '';

  HRoom get room => home.room;
  bool get isLesson => home.isLesson;
  int get problems => home.indoor.where((e) => !e.finished).length;
  double get now => clock.elapsedMilliseconds / 1000;

  @override
  void initState() {
    super.initState();
    if (widget.lesson.isNotEmpty) {
      home = HomeProject.lesson(widget.lesson);
    } else {
      if (widget.fresh || widget.seed != null || HomeProject.session == null) {
        HomeProject.session = HomeProject(seed: widget.seed ?? DateTime.now().millisecondsSinceEpoch % 100000);
      }
      home = HomeProject.session!;
    }
    home.practice = widget.practice || home.practice;
    cam = Cam3(yaw: -0.05, pitch: 0.1, dist: 120, target: const V3(0, 40, 40))..maxDist = 560;
    if (widget.focus.isNotEmpty) {
      final want = home.indoor.where((e) => switch (widget.focus) { 'wiring' => !e.wired, 'plumbing' => !e.plumbed, _ => !e.finished });
      if (want.isNotEmpty) home.current = want.first.id;
    }
    scene = buildHomeRoom(room, problems: problems);
    _frame(snap: true);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      if (isLesson) {
        _say(_lessonIntro());
      } else if (widget.focus.isNotEmpty) {
        _say(switch (widget.focus) { 'wiring' => 'This room needs wiring: press the Wiring button, or tap the red outlet or the light.', 'plumbing' => 'This room needs plumbing: press the Plumbing button, or tap the toilet or the sink.', _ => 'Walk through the house and fix what the signs say is wrong.' });
      }
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    _tourTimer?.cancel();
    super.dispose();
  }

  String _lessonIntro() => switch (home.lessonId) {
        'switch' => 'The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work.',
        'outlet' => 'Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it.',
        'gfci' => 'Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it.',
        'fan' => 'Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin.',
        'ptrap' => 'The sink has no drain yet. Tap the sink and build the drain under it.',
        _ => 'The faucet is not connected yet. Tap the sink and connect the hoses.',
      };

  // ── The camera ──

  void _frame({bool snap = false}) {
    final r = room;
    V3 target;
    double dist, pitch, yaw;
    if (!r.indoor) {
      target = const V3(0, 50, 40);
      dist = 380;
      pitch = 0.22;
      yaw = -0.1;
      cam.yawRange = 0.9;
      cam.maxDist = 560;
    } else if (inside) {
      // Standing in the room, looking in: low, close, like a person in the doorway.
      target = V3(0, 40, r.d * 0.3);
      dist = math.max(r.w * 0.8, r.d * 0.9) + 10;
      pitch = 0.1;
      yaw = -0.05;
      // Inside the house the view stays inside: you can look about a little, not swing round behind the walls.
      cam.yawRange = 0.5;
      cam.maxDist = dist * 1.6;
    } else {
      target = V3(0, 30, r.d * 0.45);
      dist = (r.w * 1.2 > r.d * 1.4 ? r.w * 1.2 : r.d * 1.4) + 30;
      pitch = 0.5;
      yaw = -0.12;
      cam.yawRange = 0.9;
      cam.maxDist = 560;
    }
    if (snap) {
      cam.target = target;
      cam.dist = dist;
      cam.yaw = yaw;
      cam.pitch = pitch;
    } else {
      cam.glideTo(target: target, dist: dist, yaw: yaw, pitch: pitch);
    }
  }

  void _rebuild() {
    scene = buildHomeRoom(room, mode: mode, selected: selFurn, problems: problems);
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

  void _go(int id, {bool keepTour = false}) {
    if (id == home.current || id >= home.rooms.length) return;
    if (!keepTour && tour != null) _stopTour();
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

  bool _live(int id) {
    if (id == idHOutletA) return room.okOutA;
    if (id == idHOutletB) return room.okOutB;
    if (id == idHSwitch) return room.okSwitch;
    if (id == idHLight) return room.okLight;
    if (id >= idHExtra && id < idHExtra + 20) {
      final i = id - idHExtra;
      return i < room.extras.length && room.extras[i].done;
    }
    if (id == idHApp) return room.okOutA;
    if (id == idHApp + 1) return room.okOutB;
    if (id >= idHApp + 2 && id < idHApp + 8) {
      final i = id - idHApp - 2;
      return i < room.extras.length && room.extras[i].done;
    }
    return room.wired;
  }

  void _toggleLight() {
    final fan = room.ceilingFix == 'fan';
    setState(() {
      room.lightOn = !room.lightOn;
      _rebuild();
    });
    _say(room.lightOn ? (fan ? 'The fan spins.' : 'The light is on.') : (fan ? 'The fan stops.' : 'The light is off.'));
    conBeep(room.lightOn ? 900 : 500, ms: 60);
  }

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
      final i = id - idHDoor;
      if (i >= room.doors.length) return;
      if (mode == 'doors') {
        setState(() {
          if (!room.openDoors.remove(i)) room.openDoors.add(i);
          _rebuild();
        });
        conBeep(room.openDoors.contains(i) ? 700 : 450, ms: 70);
        return;
      }
      // Tap a door to open it and walk through, like in a game.
      final to = room.doors[i].to;
      setState(() {
        room.openDoors.add(i);
        _rebuild();
      });
      conBeep(700, ms: 70);
      Future.delayed(const Duration(milliseconds: 450), () {
        if (!mounted) return;
        setState(() => room.openDoors.remove(i));
        _go(to);
      });
      return;
    }
    // The voltage tester answers first.
    final electric = id == idHOutletA || id == idHOutletB || id == idHSwitch || id == idHLight || (id >= idHExtra && id < idHExtra + 20) || (id >= idHApp && id < idHApp + 8);
    if (tester && electric) {
      final live = _live(id);
      conBeep(live ? 1400 : 500, ms: 160);
      _say(live ? 'The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.' : 'The tester stays dark: no power here. It still needs wiring.', ok: !live);
      return;
    }
    if (id == idHOutletA || id == idHOutletB) {
      if (_live(id)) {
        _plugSheet(id == idHOutletA ? 0 : 1);
      } else {
        _fixWiring();
      }
      return;
    }
    if (id >= idHExtra && id < idHExtra + 20) {
      final i = id - idHExtra;
      if (i >= room.extras.length) return;
      final e = room.extras[i];
      if (!e.done) {
        _wireExtra(i);
      } else if (e.kind == 'switch') {
        _toggleLight();
      } else {
        _plugSheet(2 + i);
      }
      return;
    }
    if (id == idHSwitch || id == idHLight) {
      if (!room.okSwitch || !room.okLight) {
        _fixWiring();
      } else {
        _toggleLight();
      }
      return;
    }
    if (id == idHWallTv) {
      final key = room.wallTv;
      if (key == null) return;
      if (!room.tvOn) {
        setState(() {
          room.tvOn = true;
          _rebuild();
        });
        _say('The TV is on and playing ${kNgmyApps[room.tvApp].name}.');
      } else {
        final a = applianceByKey(key);
        showNgmyTvScreen(context, kind: a.key, title: a.name, stayFor: const Duration(hours: 1), showBoot: true);
      }
      return;
    }
    if (id >= idHApp && id < idHApp + 8) {
      final key = room.plugged[id - idHApp];
      if (key == null) return;
      final a = applianceByKey(key);
      if (a.isTv) {
        showNgmyTvScreen(context, kind: a.key, title: a.name, stayFor: const Duration(hours: 1), showBoot: true);
      } else {
        _plugSheet(id - idHApp);
      }
      return;
    }
    if (id == idHToiletF || id == idHSinkF || id == idHTubF || id == idHKSink) {
      if (!room.plumbed) {
        _fixPlumbing();
      } else {
        final i = scene.info[id];
        if (i != null) _say('${i.name}: ${i.about}');
      }
    }
  }

  // ── The plug-in sheet ──

  /// Choose what to plug into an outlet, or unplug it.
  Future<void> _plugSheet(int outlet) {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Plug in', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 10),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (final a in kHomeAppliances)
                GestureDetector(
                  onTap: () {
                    Navigator.pop(ctx);
                    setState(() {
                      room.plugged[outlet] = a.key;
                      _rebuild();
                    });
                    _say(a.isTv ? '${a.name} is on and playing NGMY ads. Tap it to watch full screen.' : '${a.name} is plugged in and running.');
                    conBeep(820, ms: 70);
                  },
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(12), border: Border.all(color: room.plugged[outlet] == a.key ? kConAmber : Colors.white24)),
                    child: Text('${a.emoji} ${a.name}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5)),
                  ),
                ),
              if (room.plugged[outlet] != null)
                GestureDetector(
                  onTap: () {
                    Navigator.pop(ctx);
                    setState(() {
                      room.plugged.remove(outlet);
                      _rebuild();
                    });
                    _say('Unplugged.');
                  },
                  child: Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10), decoration: BoxDecoration(color: const Color(0xFF7F1D1D), borderRadius: BorderRadius.circular(12)), child: const Text('⏏ Unplug', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5))),
                ),
            ]),
          ]),
        ),
      ),
    );
  }

  // ── The TV on the wall ──

  Future<void> _tvSheet() {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        Widget big(String label, VoidCallback f, {Color color = const Color(0xFF0E7490)}) => GestureDetector(
              onTap: () {
                f();
                set(() {});
                setState(_rebuild);
              },
              child: Container(padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11), decoration: BoxDecoration(color: color.withValues(alpha: 0.4), borderRadius: BorderRadius.circular(12), border: Border.all(color: color)), child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5))),
            );
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('TV in ${room.name}', style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
              const SizedBox(height: 10),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (final a in kHomeAppliances.where((a) => a.isTv))
                  big(a.name, () {
                    room.wallTv = a.key;
                    room.tvOn = true;
                  }, color: room.wallTv == a.key ? kConAmber : const Color(0xFF0E7490)),
              ]),
              const SizedBox(height: 10),
              Wrap(spacing: 8, runSpacing: 8, children: [
                if (room.wallTv != null) big(room.tvOn ? '⏻ Turn this TV off' : '⏻ Turn this TV on', () => room.tvOn = !room.tvOn),
                if (room.wallTv != null && !isLesson)
                  big('🗑 Take it down', () {
                    room.wallTv = null;
                    room.tvOn = false;
                  }, color: const Color(0xFF7F1D1D)),
                if (!isLesson)
                  big('📺 A TV in every room, all on', () {
                    for (final r in home.indoor) {
                      r.wallTv ??= 'bangtv';
                      r.tvOn = true;
                    }
                  }, color: const Color(0xFF16A34A)),
                if (!isLesson)
                  big('⏻ All TVs off', () {
                    for (final r in home.indoor) {
                      r.tvOn = false;
                    }
                  }, color: const Color(0xFF6B7280)),
              ]),
            ]),
          ),
        );
      }),
    );
  }

  // ── The tour ──

  Future<void> _tourSheet() {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('House tour 🎬', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
              const SizedBox(height: 4),
              const Text('A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.', style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.4)),
              const SizedBox(height: 12),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (final s in kTourLengths)
                  GestureDetector(
                    onTap: () => set(() => tourSecs = s),
                    child: Container(padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10), decoration: BoxDecoration(color: tourSecs == s ? kConAmber.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(12), border: Border.all(color: tourSecs == s ? kConAmber : Colors.white24, width: tourSecs == s ? 2 : 1)), child: Text(tourLengthName(s), style: TextStyle(color: tourSecs == s ? kConAmber : Colors.white, fontWeight: FontWeight.w900, fontSize: 13))),
                  ),
              ]),
              const SizedBox(height: 14),
              FilledButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  _startTour(tourSecs);
                },
                icon: const Icon(Icons.play_arrow_rounded),
                label: const Text('Play the tour'),
              ),
            ]),
          ),
        );
      }),
    );
  }

  void _startTour(int secs) {
    _tourTimer?.cancel();
    for (final r in home.indoor) {
      r.wallTv ??= 'bangtv';
      r.tvOn = true;
    }
    tour = HomeTour(home, secs.toDouble());
    _tourStart = now;
    inside = true;
    mode = 'look';
    tester = false;
    final first = tour!.firstRoom;
    _fired.clear();
    _switching = false;
    setState(() {
      home.current = first;
      msg = null;
      _rebuild();
    });
    _frame();
    _tourTimer = Timer.periodic(const Duration(milliseconds: 120), (_) => _tourTick());
    setState(() {});
  }

  final Set<String> _fired = {};
  bool _switching = false;
  final GlobalKey _shotKey = GlobalKey();

  /// The last picture of the room we just left. It fades out over the new room: a dissolve, like a cut in a film.
  ui.Image? _shot;
  int _shotId = 0;

  V3 _doorWorld(HRoom r, int i) {
    final d = r.doors[i];
    return switch (d.wall) {
      'left' => V3(-r.w / 2, 40, d.offset + r.d / 2 - 40),
      'right' => V3(r.w / 2, 40, d.offset + r.d / 2 - 40),
      _ => V3(d.offset, 40, 0),
    };
  }

  /// One beat of the tour: swing the doors, switch the TV ad, and move the camera like a film camera.
  void _tourTick() {
    final tr = tour;
    if (tr == null || !mounted) return;
    final e = now - _tourStart;
    if (e >= tr.total) {
      _stopTour();
      _say('The tour is over. Press Tour to walk the house again.');
      return;
    }
    if (_switching) return;
    final p = tr.at(e);
    if (p.room != home.current) {
      _tourCut(p);
      return;
    }
    final r = room;
    var changed = false;
    // The door the person came through stands open when they arrive and swings shut behind them.
    if (p.enterDoor >= 0 && p.enterDoor < r.doors.length) {
      final cur = r.doorAngle[p.enterDoor] ?? 0.0;
      if (!p.walking && p.openDoor < 0) {
        if (cur < 1.25) {
          r.doorAngle[p.enterDoor] = 1.25;
          changed = true;
        }
      } else if (p.walking && cur > 0) {
        r.doorAngle[p.enterDoor] = math.max(0.0, cur - 0.3);
        changed = true;
      }
    }
    // The door ahead swings open while the person stands at it.
    if (p.openDoor >= 0 && p.openDoor < r.doors.length) {
      final a = 1.25 * Curves.easeOut.transform(p.doorU.clamp(0.0, 1.0));
      if ((r.doorAngle[p.openDoor] ?? 0) != a) {
        r.doorAngle[p.openDoor] = a;
        changed = true;
      }
    }
    if (p.event.startsWith('ad') && _fired.add(p.event)) {
      // The person presses the remote: the TV changes to the next ad.
      r.tvApp = (r.tvApp + 1) % kNgmyApps.length;
      changed = true;
      conBeep(1000, ms: 50);
    }
    if (changed) setState(_rebuild);
    // The camera: it follows the person from behind and to the side, and when a door opens it moves in towards the door,
    // so the next room shows through the doorway before the cut.
    final base = math.max(r.w * 0.95, r.d * 1.15) + 20;
    if (p.openDoor >= 0 && p.openDoor < r.doors.length) {
      final dp = _doorWorld(r, p.openDoor);
      final u = Curves.easeInOut.transform(p.doorU.clamp(0.0, 1.0));
      final wall = r.doors[p.openDoor].wall;
      cam.glideTo(target: V3(dp.x * 0.9 + p.x * 0.1, 36, dp.z + (wall == 'back' ? 14 : 0)), dist: base + (70 - base) * u, yaw: wall == 'left' ? 0.55 * u : (wall == 'right' ? -0.55 * u : -0.03), pitch: 0.2 - 0.07 * u);
    } else {
      cam.glideTo(target: V3(p.x * 0.7, 30, p.z * 0.6 + 8), dist: base, yaw: -0.05 - (p.x / (r.w / 2)) * 0.2, pitch: 0.24);
    }
    if (p.note != tourNote) setState(() => tourNote = p.note);
  }

  /// Go on to the next room with a dissolve: the picture of the old room fades away over the new one, where the
  /// camera starts at the door the person comes out of.
  Future<void> _tourCut(PersonPose p) async {
    _switching = true;
    ui.Image? shot;
    try {
      final b = _shotKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      shot = await b?.toImage(pixelRatio: 0.6).timeout(const Duration(milliseconds: 500));
    } catch (_) {
      shot = null;
    }
    if (!mounted || tour == null) {
      _switching = false;
      return;
    }
    room.doorAngle.clear();
    _go(p.room, keepTour: true);
    final r = room;
    if (p.enterDoor >= 0 && p.enterDoor < r.doors.length) r.doorAngle[p.enterDoor] = 1.25;
    setState(() {
      _rebuild();
      _shot = shot;
      _shotId++;
    });
    // The camera begins close on the door they come out of.
    cam.target = V3(p.x, 36, p.z + 4);
    cam.dist = 70;
    cam.yaw = -0.03;
    cam.pitch = 0.15;
    _switching = false;
  }

  void _stopTour() {
    _tourTimer?.cancel();
    _tourTimer = null;
    for (final r in home.rooms) {
      r.openDoors.clear();
      r.doorAngle.clear();
    }
    _shot = null;
    _switching = false;
    setState(() {
      tour = null;
      tourNote = '';
    });
    _frame();
  }

  PersonPose? _pose() {
    final tr = tour;
    if (tr == null) return null;
    return tr.at(now - _tourStart);
  }

  // ── Jobs ──

  void _fixWiring() {
    if (isLesson) {
      _openLesson();
    } else {
      _openWiring();
    }
  }

  void _fixPlumbing() {
    if (isLesson) {
      _openLesson();
    } else {
      _openPlumbing();
    }
  }

  /// The lesson of a lesson room, as the same close-up bench as in the lab.
  Future<void> _openLesson() async {
    final r = room;
    if (r.lessonDone) {
      _say('This lesson is done. Try everything: it all works.');
      return;
    }
    if (r.lessonIsPlumbing) {
      r.lessonPlumb ??= PlumbState();
      await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => r.lesson == 'ptrap' ? PtrapLessonPage(state: r.lessonPlumb) : FaucetLessonPage(state: r.lessonPlumb)));
    } else {
      r.lessonState ??= WiringState();
      await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => ElectricalLessonPage(id: r.lesson, state: r.lessonState)));
    }
    if (!mounted) return;
    setState(_rebuild);
    if (r.lessonDone) {
      _say(switch (r.lesson) {
        'switch' => 'Done! Tap the switch on the wall: the light comes on.',
        'fan' => 'Done! Tap the wall switch and the fan spins.',
        'outlet' || 'gfci' => 'Done! Tap the outlet and plug something in.',
        _ => 'Done! The sink works.',
      });
    }
  }

  Future<void> _wireExtra(int i) async {
    final e = room.extras[i];
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => ElectricalLessonPage(id: e.kind, state: e.state)));
    if (!mounted) return;
    setState(_rebuild);
    if (e.done) _say('Wired! ${e.kind == 'switch' ? 'Tap it to turn the light on and off.' : 'Tap it to plug something in.'}');
  }

  Future<void> _openWiring() async {
    final r = room;
    if (!r.indoor) return;
    // A finished room opens finished: you can pull a device out, change it, or wire it again.
    if (r.wiring == null) {
      final np = RoomProject(seed: home.seed * 37 + r.id, kind: wiringKindFor(r), name: r.name)..fastForward();
      if (!r.wiringNeeded) np.completeWiring();
      r.wiring = np;
    }
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
    r.plumb ??= PlumbJob(seed: home.seed * 41 + r.id, variantId: r.kind == 'kitchen' ? 'kitchen' : 'bathroom');
    if (!r.plumbNeeded && !r.plumb!.allPlaced) r.plumb!.completeAll();
    r.plumb!.practice = home.practice;
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => NgmyPlumbJobPage(job: r.plumb)));
    if (!mounted) return;
    setState(_rebuild);
    if (r.plumbed) _say('${r.name}: the plumbing is finished and nothing leaks.');
  }

  // ── Adding things ──

  Future<void> _addSheet() {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('Add to ${room.name}', style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 4),
            const Text('It goes on the back wall, not wired yet. Tap the red one to wire it yourself.', style: TextStyle(color: Colors.white60, fontSize: 12.5)),
            const SizedBox(height: 12),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (final (kind, label) in const [('outlet', '🔌 Outlet'), ('gfci', '🛡️ GFCI outlet'), ('switch', '💡 Light switch')])
                GestureDetector(
                  onTap: () {
                    Navigator.pop(ctx);
                    _addExtra(kind);
                  },
                  child: Container(padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11), decoration: BoxDecoration(color: const Color(0xFF0E7490).withValues(alpha: 0.4), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFF67E8F9))), child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13))),
                ),
            ]),
          ]),
        ),
      ),
    );
  }

  void _addExtra(String kind) {
    final r = room;
    if (!r.indoor || r.kind == 'hall') {
      _say('Add devices in a room, not in the hall or the garden.', ok: false);
      return;
    }
    if (r.extras.length >= 4) {
      _say('This room already has four added devices.', ok: false);
      return;
    }
    // The first free place along the back wall.
    final used = <double>[-r.w / 4, r.w / 4, for (final d in r.doors.where((e) => e.wall == 'back')) d.offset, for (final d in r.doors.where((e) => e.wall == 'back')) d.offset + 24, for (final e in r.extras) e.x];
    double? x;
    for (var c = -r.w / 2 + 14; c <= r.w / 2 - 14; c += 6) {
      if (used.every((u) => (u - c).abs() > 13)) {
        x = c;
        break;
      }
    }
    if (x == null) {
      _say('There is no free place left on the back wall.', ok: false);
      return;
    }
    final at = x;
    setState(() {
      r.extras.add(HExtra(kind, at));
      _rebuild();
    });
    _say('Added. It is red because it is not wired: tap it to wire it.');
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
    if (tour != null) {
      return Row(children: [
        Expanded(child: Text('🎬 ${tourNote.isEmpty ? 'Walking in' : tourNote}', maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w800, fontSize: 13))),
        _chip('⏹ Stop the tour', true, _stopTour, color: const Color(0xFFF87171)),
      ]);
    }
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
          _chip(room.ceilingFix == 'fan' ? '🌀 Fan (tap for light)' : '💡 Light (tap for fan)', false, () {
            setState(() {
              room.ceilingFix = room.ceilingFix == 'fan' ? 'light' : 'fan';
              _rebuild();
            });
          }, color: const Color(0xFF22D3EE)),
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
    final page = _buildPage(context);
    return Stack(children: [
      Positioned.fill(child: RepaintBoundary(key: _shotKey, child: page)),
      if (_shot != null)
        Positioned.fill(
          child: IgnorePointer(
            child: TweenAnimationBuilder<double>(
              key: ValueKey(_shotId),
              tween: Tween(begin: 1.0, end: 0.0),
              duration: const Duration(milliseconds: 900),
              curve: Curves.easeInOut,
              onEnd: () {
                if (mounted) setState(() => _shot = null);
              },
              builder: (_, v, __) => Opacity(opacity: v, child: RawImage(image: _shot, fit: BoxFit.fill)),
            ),
          ),
        ),
    ]);
  }

  Widget _buildPage(BuildContext context) {
    final r = room;
    final screenW = MediaQuery.of(context).size.width;
    return LessonScaffold(
      title: r.name,
      color: kConAmber,
      stepText: isLesson ? (r.lessonDone ? 'Done ✓' : 'To do') : '${home.finishedCount}/${home.indoor.length} done',
      onSteps: () => isLesson ? _openLesson() : _problems(context),
      stage: Stage3D(
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: () => _frame(),
        message: msg,
        good: good,
        messageTop: (showMap && !isLesson) ? 104 : 10,
        layerOn: (l) => l <= 5,
        dynamicPolys: (_) => homeDynamic(room, now, person: _pose()),
        topLeft: [
          if (showMap && !isLesson) _MiniMap(home: home, onTap: _go, maxWidth: math.min(138.0, screenW * 0.36)),
        ],
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        _row([
          _chip(inside ? '🔭 See the whole room' : '🏠 Be inside', false, () {
            setState(() => inside = !inside);
            _frame();
          }, color: const Color(0xFF67E8F9)),
          if (!isLesson) _chip(tour != null ? '⏹ Stop tour' : '🎬 Tour', tour != null, () => tour != null ? _stopTour() : _tourSheet(), color: const Color(0xFFF472B6)),
          _chip('📺 TV', false, _tvSheet, color: const Color(0xFF60A5FA)),
          if (!isLesson) _chip(room.indoor ? '🌳 Go outside' : '🏠 Go inside', false, () => _go(room.indoor ? 11 : 10), color: const Color(0xFF4ADE80)),
          if (!isLesson) _chip('➕ Add', false, _addSheet, color: const Color(0xFF4ADE80)),
          _chip('🔦 Tester', tester, () => setState(() {
            tester = !tester;
            if (tester) _say('Voltage tester in your hand: tap an outlet, a switch or the light.');
          }), color: const Color(0xFFFB923C)),
          if (isLesson)
            _chip('🔧 Do the lesson', false, _openLesson, color: const Color(0xFFFACC15), dot: !r.lessonDone)
          else ...[
            _chip('⚡ Wiring', false, _openWiring, color: const Color(0xFFFACC15), dot: !r.wired),
            _chip('🚰 Plumbing', false, _openPlumbing, color: const Color(0xFF60A5FA), dot: r.hasPlumbing && !r.plumbed),
            _chip('🗺 Map', showMap, () => setState(() => showMap = !showMap), color: const Color(0xFFA78BFA)),
          ],
        ]),
        const SizedBox(height: 4),
        _row([
          _chip('👁 Look', mode == 'look', () => _setMode('look')),
          _chip('🛋 Furniture', mode == 'furniture', () => _setMode('furniture')),
          _chip('🧱 Walls', mode == 'walls', () => _setMode('walls')),
          _chip('🟫 Floor', mode == 'floor', () => _setMode('floor')),
          _chip('⬜ Ceiling', mode == 'ceiling', () => _setMode('ceiling')),
          _chip('🚪 Doors', mode == 'doors', () => _setMode('doors')),
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
            Text('Wiring ${home.wiredCount}/${home.indoor.length} · Plumbing ${home.plumbedCount}/${home.plumbTotal}', style: const TextStyle(color: kConAmber, fontWeight: FontWeight.w800, fontSize: 12.5)),
            const SizedBox(height: 10),
            for (final e in home.indoor)
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
            OutlinedButton(
              onPressed: () {
                Navigator.pop(ctx);
                setState(() {
                  home.makeBare();
                  _rebuild();
                });
                _say('Every room needs its wiring and plumbing again. Wire the whole house from the start.');
              },
              child: const Text('Start from a bare house (wire everything)'),
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
/// It shrinks to fit, so it never leaves the frame.
class _MiniMap extends StatelessWidget {
  const _MiniMap({required this.home, required this.onTap, required this.maxWidth});
  final HomeProject home;
  final void Function(int id) onTap;
  final double maxWidth;

  static const double cell = 14;
  static const double mapW = cell * 9, mapH = cell * 6;

  @override
  Widget build(BuildContext context) {
    final scale = ((maxWidth - 10) / mapW).clamp(0.5, 1.0);
    return Container(
      padding: const EdgeInsets.all(5),
      decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.6), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white24)),
      child: SizedBox(
        width: mapW * scale,
        height: mapH * scale,
        child: GestureDetector(
          onTapDown: (d) {
            final cx = d.localPosition.dx ~/ (cell * scale), cy = d.localPosition.dy ~/ (cell * scale);
            for (final r in home.rooms) {
              if (cx >= r.gx && cx < r.gx + r.gw && cy >= r.gy && cy < r.gy + r.gh) {
                onTap(r.id);
                return;
              }
            }
          },
          child: FittedBox(fit: BoxFit.fill, child: CustomPaint(size: const Size(mapW, mapH), painter: _MapPainter(home))),
        ),
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
      c.drawRRect(
          RRect.fromRectAndRadius(rect, const Radius.circular(3)),
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = here ? 2.2 : 0.8
            ..color = here ? Colors.white : Colors.white38);
      final tp = TextPainter(text: TextSpan(text: switch (r.kind) { 'bedroom' => '🛏', 'bathroom' => '🚿', 'kitchen' => '🍳', 'living' => '🛋', 'outside' => '🌳', _ => '' }, style: const TextStyle(fontSize: 9)), textDirection: TextDirection.ltr)..layout();
      tp.paint(c, rect.center - Offset(tp.width / 2, tp.height / 2));
    }
  }

  @override
  bool shouldRepaint(covariant _MapPainter old) => true;
}
