import 'dart:async';
import 'ngmy_city_traffic.dart';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_community.dart';
import 'ngmy_construction_cityin.dart';
import 'ngmy_construction_communitypage.dart';
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
import 'ngmy_avatar_glb.dart';
import 'ngmy_construction_world.dart';
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

  /// Looking all the way round from the middle of the room (a closed room, 360 degrees), by dragging.
  bool walk = false;
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

  /// The community that lives in this house, when it is running.
  Community? get comm => Community.active != null && Community.active!.houseSeed == home.seed ? Community.active : null;
  List<ResidentFigure> _figs = const [];
  Timer? _commTimer;
  String _lastNews = '';

  void _refreshFigs() {
    _figs = comm?.figuresIn(home, room.id) ?? const [];
  }
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
        _madeSession = true;
      }
      home = HomeProject.session!;
    }
    home.practice = widget.practice || home.practice;
    cam = Cam3(yaw: -0.05, pitch: 0.1, dist: 120, target: const V3(0, 40, 40))..maxDist = 560;
    if (widget.focus == 'city') home.current = 11;
    if (widget.focus.isNotEmpty) {
      final want = home.indoor.where((e) => switch (widget.focus) { 'wiring' => !e.wired, 'plumbing' => !e.plumbed, _ => !e.finished });
      if (want.isNotEmpty) home.current = want.first.id;
    }
    // The real characters are read from their files in the background; plain figures stand in until each is ready.
    GlbAvatar.preload(ngmyPlayerAvatar);
    NgmyLogo.load();
    _startLife();
    _refreshFigs();
    scene = buildHomeRoom(room, problems: problems, residents: _figs);
    _frame(snap: true);
    // While the community runs, the people and the news are kept up to date.
    _commTimer = Timer.periodic(const Duration(seconds: 2), (_) {
      final cm = comm;
      if (cm == null || !mounted || tour != null) return;
      setState(_rebuild);
      if (cm.log.isNotEmpty && cm.log.first != _lastNews) {
        _lastNews = cm.log.first;
        _say(_lastNews);
      }
    });
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
    _walkTimer?.cancel();
    _t?.cancel();
    _tourTimer?.cancel();
    _commTimer?.cancel();
    _lifeTimer?.cancel();
    _ringTimer?.cancel();
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
    if (walk) {
      // Standing in the middle of the room: the camera is the head, and turning it goes all the way round.
      target = V3(0, 40, r.d * 0.5);
      dist = math.max(r.w, r.d) * 0.6;
      pitch = 0.12;
      yaw = -0.05;
      cam
        ..minDist = 20
        ..maxDist = 260
        ..minPitch = -1.2
        ..maxPitch = 1.2
        ..setFree(true);
    } else if (!r.indoor) {
      // The garden: walk right round the house, from above, never from under the ground.
      target = const V3(0, 40, 150);
      dist = 540;
      pitch = 0.35;
      yaw = -0.25;
      cam
        ..minDist = 30
        ..maxDist = 2400
        ..minPitch = 0.03
        ..maxPitch = 1.35
        ..setFree(true);
    } else if (inside) {
      // Standing in the room, looking in: low, close, like a person in the doorway.
      target = V3(0, 40, r.d * 0.3);
      dist = math.max(r.w * 0.8, r.d * 0.9) + 10;
      pitch = 0.1;
      yaw = -0.05;
      // Inside the house the view stays inside: you can look about a little, not swing round behind the walls or go under the floor.
      cam
        ..minDist = 6
        ..maxDist = dist * 1.6
        ..minPitch = 0.03
        ..maxPitch = 1.35
        ..setFree(true);
    } else {
      target = V3(0, 30, r.d * 0.45);
      dist = (r.w * 1.2 > r.d * 1.4 ? r.w * 1.2 : r.d * 1.4) + 30;
      pitch = 0.5;
      yaw = -0.12;
      cam
        ..minDist = 6
        ..maxDist = 560
        ..minPitch = 0.1
        ..maxPitch = 1.35
        ..setFree(true);
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

  /// Double tap: go to where you tapped. Standing in a room that walks you there; from above or outside it takes you closer.
  void _doubleTap(Offset p, Size size) {
    final spot = cam.floorPoint(p, size);
    if (spot == null) return;
    final r = room;
    final inn = inner;
    if (inn != null) {
      inn.walker.goTo(spot.x.clamp(-CityInterior.w / 2 + 12, CityInterior.w / 2 - 12), spot.z.clamp(12.0, CityInterior.d - 4));
    } else if (walk) {
      final x = spot.x.clamp(-r.w / 2 + 10, r.w / 2 - 10), z = spot.z.clamp(10.0, r.d - 10);
      cam.glideTo(target: V3(x, 48, z));
    } else if (!r.indoor && steer && walker != null) {
      // Walk there: the person goes to the spot you tapped, round whatever is in the way.
      walker!.goTo(spot.x.clamp(-r.w / 2 + 12, r.w / 2 - 12), spot.z.clamp(-290.0, r.d - 12));
    } else if (!r.indoor) {
      cam.glideTo(target: V3(spot.x, 30, spot.z), dist: math.max(70, cam.dist * 0.4), pitch: 0.32);
    } else {
      // Like a map: you are taken to the spot you tapped, close to it and low, so you can look round the room from there.
      cam.glideTo(target: V3(spot.x.clamp(-r.w / 2 + 8, r.w / 2 - 8), 40, spot.z.clamp(8.0, r.d - 8)), dist: math.max(36, cam.dist * 0.35), pitch: 0.2);
    }
    conBeep(560, ms: 50);
  }

  void _rebuild() {
    _refreshFigs();
    final inn = inner;
    scene = inn != null ? inn.scene : buildHomeRoom(room, mode: mode, selected: selFurn, problems: problems, closed: walk, residents: _figs, hideFurn: _driving != null ? {idHFurn + _driving!.id} : const {});
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
    if (steer && id != 11) _stopSteer();
    inner = null;
    _driving = null;
    _act = null;
    if (!keepTour && tour != null) _stopTour();
    setState(() {
      home.current = id;
      selFurn = 0;
      selWall = -1;
      hl = 0;
      msg = null;
      _rebuild();
    });
    if (!room.indoor) walker = WorldWalker(room, x: 0, z: 24);
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
    if (id >= idHResident && id < idHResident + 20) {
      _residentSheet(id - idHResident);
      return;
    }
    if (id >= idHFurn && id < idHFurn + 100) {
      final ff = room.furnById(id - idHFurn);
      if (!room.indoor && mode != 'furniture' && ff != null && (ff.kind == 'hospital' || ff.kind == 'shop')) {
        _citySheet(ff.kind);
        return;
      }
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
      // Tap a door: open it or close it, or go through it.
      _doorSheet(i);
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
    if (id >= idHWallTv && id <= idHWallTv + 3) {
      final key = (id == idHWallTv || id == idHWallTv + 2) ? room.wallTv : (room.wallTv2 ?? room.wallTv);
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

  /// A resident's card: how they are, and what you can do for them without leaving the room.
  /// A door you tapped: open it, close it, or go through it.
  Future<void> _doorSheet(int i) {
    final to = room.doors[i].to;
    final where = to < home.rooms.length ? home.rooms[to].name : 'the next room';
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('Door to $where', style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 4),
            Text(room.openDoors.contains(i) ? 'The door is open.' : 'The door is closed.', style: const TextStyle(color: Colors.white54)),
            const SizedBox(height: 12),
            Wrap(spacing: 10, runSpacing: 10, children: [
              FilledButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  setState(() {
                    if (!room.openDoors.remove(i)) room.openDoors.add(i);
                    _rebuild();
                  });
                  conBeep(room.openDoors.contains(i) ? 700 : 450, ms: 70);
                },
                icon: Icon(room.openDoors.contains(i) ? Icons.door_front_door_outlined : Icons.meeting_room_outlined),
                label: Text(room.openDoors.contains(i) ? 'Close the door' : 'Open the door'),
              ),
              OutlinedButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
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
                },
                icon: const Icon(Icons.arrow_forward_rounded),
                label: const Text('Go through'),
              ),
            ]),
          ]),
        ),
      ),
    );
  }

  void _enterFull() {
    setState(() => full = true);
    if (!steer && !room.indoor) _startSteer();
  }

  /// Just the game, turned on its side like a video, with only the walking controls and a way back.
  Widget _fullScreen(Widget stage) {
    final mq = MediaQuery.of(context);
    final land = Size(mq.size.height, mq.size.width);
    Widget btn(IconData icon, VoidCallback onTap) => GestureDetector(
          onTap: onTap,
          onDoubleTap: () => setState(() => _fullHide = true),
          child: Container(width: 40, height: 40, margin: const EdgeInsets.only(right: 8), decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), shape: BoxShape.circle, border: Border.all(color: Colors.white38)), child: Icon(icon, color: Colors.white, size: 20)),
        );
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: RotatedBox(
          quarterTurns: _fullTurns,
          child: MediaQuery(
            data: mq.copyWith(size: land, padding: EdgeInsets.zero, viewPadding: EdgeInsets.zero),
            child: SizedBox(
              width: land.width,
              height: land.height,
              child: Stack(children: [
                Positioned.fill(child: stage),
                if (_fullHide)
                  Positioned(top: 0, left: 0, child: GestureDetector(behavior: HitTestBehavior.translucent, onDoubleTap: () => setState(() => _fullHide = false), child: const SizedBox(width: 110, height: 64)))
                else
                  Positioned(top: 10, left: 10, child: Row(children: [
                    btn(Icons.fullscreen_exit_rounded, () => setState(() => full = false)),
                    btn(Icons.screen_rotation_rounded, () => setState(() => _fullTurns = _fullTurns == 1 ? 3 : 1)),
                  ])),
              ]),
            ),
          ),
        ),
      ),
    );
  }

  /// The text message that follows a call: what the person needs, and how to get to them.
  Future<void> _textSheet(HelpCall c) {
    final info = kResidents[c.resident];
    final roomId = c.kind == 'power' ? info.room : (info.bath >= 0 ? info.bath : info.room);
    final roomName = roomId < home.rooms.length ? home.rooms[roomId].name : 'the house';
    Widget bubble(String text, {bool mine = false}) => Align(
          alignment: mine ? Alignment.centerRight : Alignment.centerLeft,
          child: Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            constraints: const BoxConstraints(maxWidth: 290),
            decoration: BoxDecoration(color: mine ? const Color(0xFF2563EB) : const Color(0xFF374151), borderRadius: BorderRadius.circular(18)),
            child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.3)),
          ),
        );
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(26))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              CircleAvatar(radius: 18, backgroundColor: info.style.shirt, child: Text(info.name[0], style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900))),
              const SizedBox(width: 10),
              Text(info.name, style: const TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900)),
              const Spacer(),
              const Text('Messages', style: TextStyle(color: Colors.white38, fontSize: 12)),
            ]),
            const Divider(color: Colors.white12),
            bubble('Hi, it\'s ${info.name}. ${c.message}'),
            bubble(c.kind == 'power' ? 'Please come to $roomName and fix the wiring. I can\'t stay in the dark.' : 'Please come to $roomName and fix the leak before it floods.'),
            bubble('I\'ll pay ${c.reward} points. Thank you!'),
            bubble('On my way!', mine: true),
            const SizedBox(height: 6),
            Wrap(spacing: 10, runSpacing: 8, children: [
              FilledButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  final f = _figs.where((f) => f.id == c.resident).toList();
                  if (f.isNotEmpty && !room.indoor) cam.glideTo(target: V3(f.first.x, 30, f.first.z), dist: 160);
                  _say('${info.name} is the one with the phone sign.', ok: true);
                },
                icon: const Icon(Icons.place_rounded),
                label: Text('Show me where ${info.name} is'),
              ),
              FilledButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  if (steer) _stopSteer();
                  full = false;
                  _go(roomId);
                  _say('You are in $roomName. Fix the problem with the Wiring or Plumbing button.', ok: true);
                },
                icon: const Icon(Icons.build_rounded),
                label: Text('Go and fix it ($roomName)'),
              ),
            ]),
          ]),
        ),
      ),
    );
  }

  /// From the floor, looking up at the ceiling (and the lights and fan on it).
  void _lookUpHere() {
    final r = room;
    if (!r.indoor) return;
    setState(() {
      inside = true;
      walk = false;
      mode = 'ceiling';
      _rebuild();
    });
    cam
      ..minDist = 20
      ..maxDist = 300
      ..minPitch = -0.95
      ..maxPitch = 1.35
      ..setFree(true);
    cam.glideTo(target: V3(0, HRoom.h - 12, r.d * 0.5), dist: math.max(r.w, r.d) * 0.75, yaw: -0.05, pitch: -0.5);
    _say('Looking up at the ceiling from the floor. Drag to look round.', ok: true);
  }

  // ── Jobs round the neighbourhood: houses and street lights that break, goods to carry, houses to sell ──

  /// The wiring job for a house with no power: the same wiring bench as the jobs, in that house.
  Future<void> _houseJob(CityInterior inn) async {
    final f = inn.door;
    final p = RoomProject(seed: f.id * 13 + 5, kind: 0)..fastForward();
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => NgmyRoomProjectPage(project: p)));
    if (!mounted) return;
    if (p.devicesDone) {
      room.darkHouses.remove(f.id);
      inn.dark = false;
      comm?.points += 20;
      inn.build(comm);
      setState(_rebuild);
      _say('The power is back in the house: you fixed the wiring the right way. +20 points.', ok: true);
    } else {
      _say('The wiring is not finished yet. Walk back onto the red mat at the panel to try again.', ok: false);
    }
  }

  /// A street light that went out: the lamp wiring lesson, then the light comes back.
  Future<void> _fixLamp(Furn f) async {
    final st = WiringState();
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => ElectricalLessonPage(id: 'light', state: st)));
    if (!mounted) return;
    if (st.stage >= 2 && evaluateWiring(electricalLesson('light'), st).ok) {
      room.brokenLamps.remove(f.id);
      comm?.points += 8;
      setState(_rebuild);
      _say('The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +8 points.', ok: true);
    } else {
      _say('The light is still out: finish the wiring and fit the cover, then it comes on.', ok: false);
    }
  }

  void _pickUp(Furn f) {
    room.furn.remove(f);
    _carrying = 'crate';
    setState(_rebuild);
    _say('You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.', ok: true);
    conBeep(700, ms: 60);
  }

  void _drop() {
    final w = walker;
    if (w == null) return;
    room.add('crate', x: w.x + math.sin(w.yaw) * 34, z: w.z + math.cos(w.yaw) * 34);
    _carrying = null;
    setState(_rebuild);
    _say('You put the crate down.', ok: true);
  }

  /// The town's things break from time to time, and the neighbours ring.
  void _neighbourEvents() {
    final city = home.rooms.firstWhere((r) => !r.indoor);
    final houses = [for (final f in city.furn) if ((f.kind == 'house2' || f.kind == 'bighouse') && !city.darkHouses.contains(f.id)) f];
    if (city.darkHouses.length < 2 && houses.isNotEmpty) {
      final f = houses[(_beat * 7 + 3) % houses.length];
      city.darkHouses.add(f.id);
      _ringNeighbour(f);
    }
    final lamps = [for (final f in city.furn) if ((f.kind == 'pole' || f.kind == 'lamppost') && !city.brokenLamps.contains(f.id)) f];
    if (city.brokenLamps.length < 3 && lamps.isNotEmpty && _beat % 90 == 0) {
      city.brokenLamps.add(lamps[(_beat * 5) % lamps.length].id);
      _say('⚡ A street light went out in the town. Find it (it is dark, with a red sign) and fix it.', ok: false);
    }
    if (!room.indoor && inner == null) setState(_rebuild);
  }

  Future<void> _neighbourText(_NCall c) {
    final f = c.furn;
    Widget bubble(String text, {bool mine = false}) => Align(
          alignment: mine ? Alignment.centerRight : Alignment.centerLeft,
          child: Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            constraints: const BoxConstraints(maxWidth: 290),
            decoration: BoxDecoration(color: mine ? const Color(0xFF2563EB) : const Color(0xFF374151), borderRadius: BorderRadius.circular(18)),
            child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.3)),
          ),
        );
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(26))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Row(children: [
              CircleAvatar(radius: 18, backgroundColor: Color(0xFFF59E0B), child: Text('⚡')),
              SizedBox(width: 10),
              Text('Your neighbour', style: TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900)),
              Spacer(),
              Text('Messages', style: TextStyle(color: Colors.white38, fontSize: 12)),
            ]),
            const Divider(color: Colors.white12),
            bubble('Hello! All the lights went out in ${c.name}. The power is off in the whole house.'),
            bubble('Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.'),
            bubble('I will pay you 20 points. Thank you!'),
            bubble('I am on my way.', mine: true),
            const SizedBox(height: 6),
            Wrap(spacing: 10, runSpacing: 8, children: [
              FilledButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  if (!room.indoor) cam.glideTo(target: V3(f.x, 40, f.z), dist: 260);
                  _say('The dark house with the red sign is the one. Walk to its front door and in.', ok: true);
                },
                icon: const Icon(Icons.place_rounded),
                label: const Text('Show me the house'),
              ),
              FilledButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  final w = walker;
                  if (w != null && !room.indoor) {
                    final k = kFurnKinds[f.kind]!;
                    final out = rotY(V3(0, 0, k.d / 2 + 60), f.rot * math.pi / 2);
                    w
                      ..x = f.x + out.x
                      ..z = f.z + out.z
                      ..target = null;
                    cam.glideTo(target: V3(w.x, 30, w.z), dist: 170);
                    if (!steer) _startSteer();
                  }
                  _say('You are at the house. Walk in through the door, then onto the red mat at the breaker panel.', ok: true);
                },
                icon: const Icon(Icons.directions_walk_rounded),
                label: const Text('Take me there'),
              ),
            ]),
          ]),
        ),
      ),
    );
  }

  /// Sell a building, a billboard or a crate you put in the town, for points.
  void _sell() {
    final f = room.furnById(selFurn);
    if (f == null) return;
    const prices = {'house2': 40, 'bighouse': 80, 'shop': 70, 'billboard': 15, 'crate': 4, 'car': 25, 'tree': 5, 'bench': 4};
    final p = prices[f.kind];
    if (p == null) {
      _say('This cannot be sold.', ok: false);
      return;
    }
    room.furn.remove(f);
    room.darkHouses.remove(f.id);
    room.brokenLamps.remove(f.id);
    selFurn = 0;
    comm?.points += p;
    setState(_rebuild);
    _say('Sold for $p points.', ok: true);
  }

  /// The city's own services (calls, people, the hospital, the shop), opened over the city.
  Future<void> _citySheet(String tab) async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => ClipRRect(
        borderRadius: const BorderRadius.vertical(top: Radius.circular(22)),
        child: SizedBox(height: MediaQuery.of(ctx).size.height * 0.82, child: NgmyCommunityPage(initialTab: tab)),
      ),
    );
    if (!mounted) return;
    setState(() {
      _refreshFigs();
      _rebuild();
    });
  }

  Future<void> _residentSheet(int id) {
    final cm = comm;
    if (cm == null || id >= cm.residents.length) return Future.value();
    final p = cm.residents[id];
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        Widget btn(String label, String Function() act, {Color col = kConAmber}) => GestureDetector(
              onTap: () {
                final t = act();
                set(() {});
                setState(_rebuild);
                _say(t);
              },
              child: Container(padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11), decoration: BoxDecoration(color: col.withValues(alpha: 0.22), borderRadius: BorderRadius.circular(12), border: Border.all(color: col)), child: Text(label, style: TextStyle(color: col, fontWeight: FontWeight.w900, fontSize: 13))),
            );
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('${p.name} ${p.badge}', style: const TextStyle(color: Colors.white, fontSize: 19, fontWeight: FontWeight.w900)),
              Text(p.info.about, style: const TextStyle(color: Colors.white54, fontSize: 12.5)),
              const SizedBox(height: 8),
              Text('Now: ${p.mood}\nFood ${(100 - p.hunger).round()}%   Health ${p.health.round()}%   Home ${p.comfort.round()}%', style: const TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.5)),
              const SizedBox(height: 12),
              Wrap(spacing: 8, runSpacing: 8, children: [
                btn('🍞 Feed', () => cm.feed(p)),
                if (p.sick) btn('💊 Medicine', () => cm.giveMedicine(p), col: const Color(0xFFA78BFA)),
                if (p.sick || p.health < 60) btn('🏥 Hospital', () => cm.admit(p), col: const Color(0xFFF87171)),
              ]),
            ]),
          ),
        );
      }),
    );
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
              for (final a in kHomeAppliances.where((a) => !a.wallOnly))
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
                    if (room.kind == 'hall') room.wallTv2 = a.key;
                    room.tvOn = true;
                  }, color: room.wallTv == a.key ? kConAmber : const Color(0xFF0E7490)),
              ]),
              if (isLesson) ...[
                const Text('Which wall?', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 13)),
                const SizedBox(height: 6),
                Wrap(spacing: 8, runSpacing: 8, children: [
                  for (final (key, name) in const [('back', 'Back wall'), ('left', 'Left wall'), ('right', 'Right wall')])
                    big(name, () => room.tvWall = key, color: room.tvWall == key ? kConAmber : const Color(0xFF0E7490)),
                ]),
              ],
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
                      r.wallTv ??= 'tv100';
                      if (r.kind == 'hall') r.wallTv2 ??= 'tv100';
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
              const SizedBox(height: 10),
              const Text('Who walks the house?', style: TextStyle(color: Colors.white70, fontSize: 12.5, fontWeight: FontWeight.w800)),
              const SizedBox(height: 6),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (final e in kAvatarNames.entries)
                  GestureDetector(
                    onTap: () {
                      set(() => ngmyPlayerAvatar = e.key);
                      GlbAvatar.load(e.key);
                      setState(() {});
                    },
                    child: Container(padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10), decoration: BoxDecoration(color: ngmyPlayerAvatar == e.key ? const Color(0xFF38BDF8).withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(12), border: Border.all(color: ngmyPlayerAvatar == e.key ? const Color(0xFF38BDF8) : Colors.white24, width: ngmyPlayerAvatar == e.key ? 2 : 1)), child: Text(e.value, style: TextStyle(color: ngmyPlayerAvatar == e.key ? const Color(0xFF38BDF8) : Colors.white, fontWeight: FontWeight.w900, fontSize: 13))),
                  ),
              ]),
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
              const SizedBox(height: 8),
              OutlinedButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  _startTour(45, hallOnly: true);
                },
                icon: const Icon(Icons.meeting_room_rounded),
                label: const Text('Book a hallway tour (just the hall)'),
              ),
            ]),
          ),
        );
      }),
    );
  }

  void _startTour(int secs, {bool hallOnly = false}) {
    _tourTimer?.cancel();
    for (final r in home.indoor) {
      r.wallTv ??= 'tv100';
      if (r.kind == 'hall') r.wallTv2 ??= 'tv100';
      r.tvOn = true;
    }
    walk = false;
    tour = hallOnly ? HomeTour.hallOnly(home, secs.toDouble()) : HomeTour(home, secs.toDouble());
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
    if (tr != null) return tr.at(now - _tourStart);
    // Outside, the person you steer is always standing in the world.
    final w = walker;
    if (_driving != null) return null;
    if (w != null && !room.indoor) return PersonPose(room: room.id, x: w.x, z: w.z, yaw: w.yaw, walking: w.walking, phase: w.phase, running: w.running && w.walking, lift: w.lift);
    return null;
  }

  // ── Walking about the world ──

  /// Walking about outside with the arrows: the person you steer, how it is going, and the arrows held (sideways, forward).
  bool steer = false;
  WorldWalker? walker;
  Timer? _walkTimer;
  double _inX = 0, _inZ = 0;
  int _lastWalkMs = 0;

  /// The building you are walking about in (the hospital or the shop), running, the vehicle you drive, and what you can do where you stand.
  CityInterior? inner;
  bool _run = false;
  Furn? _driving;
  ({String label, VoidCallback go})? _act;
  final Map<int, double> _fedAt = {};

  /// The phone: who is calling, how long it has rung, and the calls that were already there.
  HelpCall? _ringing;
  Timer? _ringTimer;
  int _ringTicks = 0;
  final Set<int> _knownCalls = {};
  Timer? _lifeTimer;
  int _beat = 0;
  bool _madeSession = false;

  /// Full screen: just the game, turned on its side like a video, with the walking controls.
  bool full = false;
  int _fullTurns = 1;
  double _padW = 400;
  bool _fullHide = false;

  /// What the person carries (a crate to sell at the market), and the neighbour who is calling about a house with no power.
  String? _carrying;
  _NCall? _nCall;

  void _startSteer() {
    if (room.indoor) return;
    walker ??= WorldWalker(room, x: 0, z: 24);
    walker!.refresh();
    steer = true;
    _lastWalkMs = DateTime.now().millisecondsSinceEpoch;
    _walkTimer?.cancel();
    _walkTimer = Timer.periodic(const Duration(milliseconds: 40), (_) => _walkTick());
    setState(() {});
    _say('Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.');
  }

  void _stopSteer() {
    steer = false;
    _inX = 0;
    _inZ = 0;
    _run = false;
    _walkTimer?.cancel();
    _walkTimer = null;
    walker?.walking = false;
    setState(() {});
  }

  /// One beat of walking: move with the stick (up is away from you) or towards the spot that was double tapped, keep the
  /// camera on the person, and go through the door they walk up to (the house, the hospital, the shop).
  void _walkTick() {
    final inn = inner;
    final w = inn?.walker ?? walker;
    if (w == null || !mounted || (inn == null && room.indoor)) return;
    final nowMs = DateTime.now().millisecondsSinceEpoch;
    final dt = ((nowMs - _lastWalkMs) / 1000).clamp(0.0, 0.1);
    _lastWalkMs = nowMs;
    w.refresh();
    w.running = _run && _driving == null;
    w.fall(dt);
    final sy = math.sin(cam.yaw), cy = math.cos(cam.yaw);
    final dx = sy * _inZ + cy * _inX, dz = -cy * _inZ + sy * _inX;
    var moved = false;
    if (_inX != 0 || _inZ != 0) {
      w.target = null;
      moved = w.step(dx, dz, dt);
    } else {
      moved = w.advance(dt);
    }
    if (!moved) w.walking = false;
    if (moved || w.lift > 0) cam.glideTo(target: V3(w.x, 30, w.z));
    if (inn != null) {
      inn.carrying = _carrying;
      final said = inn.update(comm);
      _carrying = inn.carrying;
      if (said != null) {
        _say(said);
        setState(_rebuild);
      }
      if (inn.jobRequested) {
        inn.jobRequested = false;
        _houseJob(inn);
      }
      if (inn.leaving) _leaveBuilding();
      return;
    }
    if (moved && _driving == null) {
      if (w.atDoor && (w.yaw.abs() > 2.2 || w.target != null && w.target!.$2 < 4)) {
        // Walked up to the front door facing the house: in they go.
        _stopSteer();
        _go(10);
        _say('You are inside the living room. Use Go outside to come back out.');
        return;
      }
      for (final f in room.furn.where((f) => kEnterable.contains(f.kind))) {
        final k = kFurnKinds[f.kind]!;
        final dv = rotY(V3(0, 0, k.d / 2 + 10), f.rot * math.pi / 2);
        if ((w.x - (f.x + dv.x)).abs() < 22 && (w.z - (f.z + dv.z)).abs() < 16) {
          _enterBuilding(f);
          return;
        }
      }
    }
    _updateAct(w);
  }

  void _enterBuilding(Furn f) {
    _inX = 0;
    _inZ = 0;
    final inn = CityInterior(f.kind, f, dark: room.darkHouses.contains(f.id))
      ..carrying = _carrying
      ..build(comm);
    inner = inn;
    _act = null;
    cam
      ..minDist = 60
      ..maxDist = 420
      ..minPitch = 0.15
      ..maxPitch = 1.35
      ..setFree(true);
    cam.glideTo(target: V3(0, 30, 110), dist: 260, yaw: 0.0, pitch: 0.55);
    setState(_rebuild);
    _say(f.kind == 'hospital' ? 'The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out.' : 'The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out.');
    conBeep(660, ms: 80);
  }

  void _leaveBuilding() {
    final inn = inner;
    final w = walker;
    if (inn == null || w == null) return;
    final f = inn.door;
    final k = kFurnKinds[f.kind]!;
    _carrying = inn.carrying;
    inner = null;
    _inX = 0;
    _inZ = 0;
    final out = rotY(V3(0, 0, k.d / 2 + 30), f.rot * math.pi / 2);
    w
      ..x = f.x + out.x
      ..z = f.z + out.z
      ..yaw = 0
      ..target = null
      ..refresh();
    setState(_rebuild);
    _frame();
    cam.glideTo(target: V3(w.x, 30, w.z));
    _say('You are back in the city.');
  }

  /// What can be done where the person stands: feed an animal, get in or out of a vehicle.
  void _updateAct(WorldWalker w) {
    ({String label, VoidCallback go})? act;
    final drv = _driving;
    if (drv != null) {
      act = (label: '🚪 Get out', go: _getOut);
    } else {
      if (_carrying != null) {
        act = (label: '⬇ Put the crate down', go: _drop);
      }
      for (final f in room.furn) {
        final d = math.sqrt(math.pow(w.x - f.x, 2) + math.pow(w.z - f.z, 2));
        final name = kFurnKinds[f.kind]!.name.toLowerCase();
        if (act != null) break;
        if (f.kind == 'crate' && d < 46) {
          act = (label: '📦 Pick up the crate', go: () => _pickUp(f));
          break;
        }
        if ((f.kind == 'pole' || f.kind == 'lamppost') && room.brokenLamps.contains(f.id) && d < 60) {
          act = (label: '🔧 Fix the street light', go: () => _fixLamp(f));
          break;
        }
        if (kAnimalKinds.contains(f.kind) && d < 36) {
          act = (label: '🍎 Feed the $name', go: () => _feed(f));
          break;
        }
        if (const ['car', 'ambulance', 'firetruck'].contains(f.kind) && d < 60) {
          act = (label: '🚗 Get in the $name', go: () => _getIn(f));
          break;
        }
      }
    }
    if (act?.label != _act?.label) setState(() => _act = act);
  }

  void _feed(Furn f) {
    final last = _fedAt[f.id];
    final name = kFurnKinds[f.kind]!.name;
    if (last != null && now - last < 30) {
      _say('The ${name.toLowerCase()} has just eaten. Come back in a little while.', ok: false);
      return;
    }
    _fedAt[f.id] = now;
    final t = comm?.feedAnimal(name) ?? 'You fed the ${name.toLowerCase()}.';
    conBeep(880, ms: 90);
    setState(() {});
    _say(t);
  }

  void _getIn(Furn f) {
    final w = walker;
    if (w == null) return;
    _driving = f;
    w
      ..skipFurn = f.id
      ..body = 22
      ..speedScale = 2.4
      ..x = f.x
      ..z = f.z
      ..yaw = math.atan2(math.cos(f.rot * math.pi / 2), -math.sin(f.rot * math.pi / 2))
      ..target = null
      ..refresh();
    setState(_rebuild);
    _say('You are driving the ${kFurnKinds[f.kind]!.name.toLowerCase()}. Slide the stick to drive. Press Get out to stop.');
    conBeep(300, ms: 120);
  }

  void _getOut() {
    final f = _driving;
    final w = walker;
    if (f == null || w == null) return;
    // The vehicle stays where it was left, and you stand beside it.
    f
      ..x = w.x
      ..z = w.z
      ..rot = ((w.yaw - math.pi / 2) / (math.pi / 2)).round() % 4;
    final side = w.yaw + math.pi / 2;
    _driving = null;
    w
      ..skipFurn = null
      ..body = 7
      ..speedScale = 1
      ..running = false
      ..refresh();
    for (final r in [46.0, 62.0, 80.0]) {
      final nx = w.x + math.sin(side) * r, nz = w.z + math.cos(side) * r;
      if (!w.blocked(nx, nz)) {
        w
          ..x = nx
          ..z = nz;
        break;
      }
    }
    setState(_rebuild);
    _say('You got out.');
  }

  (String, double, double, double, int)? _driveNow() {
    final f = _driving, w = walker;
    if (f == null || w == null) return null;
    return (f.kind, w.x, w.z, w.yaw, f.color);
  }

  // ── Life in the city: time passes, people call ──

  Future<void> _startLife() async {
    if (isLesson) return;
    Map<String, dynamic>? saved;
    final already = Community.active;
    if (already == null || already.houseSeed != home.seed) {
      try {
        saved = await Community.loadJson();
      } catch (_) {}
    }
    if (!mounted) return;
    {
      Community made;
      final active = Community.active;
      if (active != null && active.houseSeed == home.seed) {
        made = active;
      } else if (saved != null && ((saved['seed'] as num?)?.toInt() ?? -1) == home.seed) {
        made = Community.fromJson(saved);
      } else if (saved != null && _madeSession) {
        // The house you left is the one that comes back, with its repairs.
        final seed = (saved['seed'] as num?)?.toInt() ?? home.seed;
        home = HomeProject.session = HomeProject(seed: seed);
        Community.applyHouse(home, saved);
        made = Community.fromJson(saved);
      } else {
        made = Community(houseSeed: home.seed, seed: home.seed)..syncCalls(home);
      }
      Community.active = made;
      for (final c in made.calls) {
        _knownCalls.add(c.id);
      }
      setState(() {
        _rebuild();
        _frame(snap: true);
      });
      _lifeTimer = Timer.periodic(const Duration(seconds: 1), (_) => _life());
    }
  }

  void _life() {
    final cm = comm;
    if (cm == null || !mounted) return;
    if (tour == null) cm.advance(1, home);
    if (++_beat % 8 == 0) cm.save(home);
    if (_beat % 45 == 20 && !isLesson) _neighbourEvents();
    for (final c in cm.calls) {
      if (_knownCalls.add(c.id)) _ring(c);
    }
    _knownCalls.removeWhere((id) => !cm.calls.any((c) => c.id == id));
    final r = _ringing;
    if (r != null && !cm.calls.any((c) => c.id == r.id)) _stopRing();
  }

  /// The phone rings: a two-note ring and a buzz, and a call banner to answer.
  void _ring(HelpCall c) {
    _ringing = c;
    _nCall = null;
    _startRingTimer();
  }

  void _ringNeighbour(Furn f) {
    _ringing = null;
    _nCall = _NCall(f, f.kind == 'bighouse' ? 'the big house' : 'the house');
    _startRingTimer();
  }

  void _startRingTimer() {
    _ringTicks = 0;
    _ringTimer?.cancel();
    _ringTimer = Timer.periodic(const Duration(milliseconds: 380), (_) {
      if (!mounted) return;
      _ringTicks++;
      if (_ringTicks > 36) {
        _stopRing();
        return;
      }
      if (_ringTicks % 8 < 4) {
        conBeep(_ringTicks.isEven ? 1046 : 1318, ms: 160, wave: 'sine', volume: 0.3);
        if (_ringTicks % 8 == 0) HapticFeedback.vibrate();
      }
    });
    setState(() {});
  }

  void _stopRing() {
    _ringTimer?.cancel();
    _ringTimer = null;
    if (!mounted) return;
    setState(() {
      _ringing = null;
      _nCall = null;
    });
  }

  Widget? _pad() {
    final controls = steer && !room.indoor;
    final call = _ringing;
    final nc = _nCall;
    if (!controls && call == null && nc == null) return null;
    final screenW = _padW;
    Widget btn(String label, VoidCallback onTap, {bool on = false, Color col = const Color(0xFF4ADE80)}) => GestureDetector(
          onTapDown: (_) => onTap(),
          child: Container(
            margin: const EdgeInsets.only(left: 4, top: 6),
            padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 12),
            decoration: BoxDecoration(color: on ? col.withValues(alpha: 0.45) : Colors.black.withValues(alpha: 0.62), borderRadius: BorderRadius.circular(18), border: Border.all(color: col, width: 1.8)),
            child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
          ),
        );
    return SizedBox(
      width: screenW,
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        if (nc != null)
          Container(
            width: math.min(screenW - 28, 330),
            margin: const EdgeInsets.only(bottom: 10),
            padding: const EdgeInsets.fromLTRB(18, 14, 18, 16),
            decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(30), border: Border.all(color: Colors.white24, width: 2), boxShadow: [BoxShadow(color: const Color(0xFFFACC15).withValues(alpha: 0.35), blurRadius: 24)]),
            child: Row(children: [
              const CircleAvatar(radius: 26, backgroundColor: Color(0xFFF59E0B), child: Text('⚡', style: TextStyle(fontSize: 24))),
              const SizedBox(width: 12),
              const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text('incoming call', style: TextStyle(color: Colors.white54, fontSize: 12)),
                Text('Your neighbour', style: TextStyle(color: Colors.white, fontSize: 19, fontWeight: FontWeight.w900)),
                Text('No power at a house', style: TextStyle(color: Colors.white38, fontSize: 11.5)),
              ])),
              GestureDetector(
                onTapDown: (_) => _stopRing(),
                child: Container(width: 52, height: 52, decoration: const BoxDecoration(color: Color(0xFFEF4444), shape: BoxShape.circle), child: const Icon(Icons.call_end_rounded, color: Colors.white)),
              ),
              const SizedBox(width: 14),
              GestureDetector(
                onTapDown: (_) {
                  final c = nc;
                  _stopRing();
                  _neighbourText(c);
                },
                child: Container(width: 52, height: 52, decoration: const BoxDecoration(color: Color(0xFF22C55E), shape: BoxShape.circle), child: const Icon(Icons.call_rounded, color: Colors.white)),
              ),
            ]),
          ),
        if (call != null)
          Container(
            width: math.min(screenW - 28, 330),
            margin: const EdgeInsets.only(bottom: 10),
            padding: const EdgeInsets.fromLTRB(18, 14, 18, 16),
            decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(30), border: Border.all(color: Colors.white24, width: 2), boxShadow: [BoxShadow(color: const Color(0xFF4ADE80).withValues(alpha: 0.35), blurRadius: 24)]),
            child: Row(children: [
              CircleAvatar(radius: 26, backgroundColor: kResidents[call.resident].style.shirt, child: Text(kResidents[call.resident].name[0], style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w900))),
              const SizedBox(width: 12),
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                const Text('incoming call', style: TextStyle(color: Colors.white54, fontSize: 12)),
                Text(kResidents[call.resident].name, style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
                const Text('NGMY City · mobile', style: TextStyle(color: Colors.white38, fontSize: 11.5)),
              ])),
              GestureDetector(
                onTapDown: (_) => _stopRing(),
                child: Container(width: 52, height: 52, decoration: const BoxDecoration(color: Color(0xFFEF4444), shape: BoxShape.circle), child: const Icon(Icons.call_end_rounded, color: Colors.white)),
              ),
              const SizedBox(width: 14),
              GestureDetector(
                onTapDown: (_) {
                  _stopRing();
                  _textSheet(call);
                },
                child: Container(width: 52, height: 52, decoration: const BoxDecoration(color: Color(0xFF22C55E), shape: BoxShape.circle), child: const Icon(Icons.call_rounded, color: Colors.white)),
              ),
            ]),
          ),
        if (controls)
          Padding(
            padding: const EdgeInsets.fromLTRB(22, 0, 22, 44),
            child: Row(crossAxisAlignment: CrossAxisAlignment.end, mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
              _Stick(onMove: (x, y) {
                _inX = x;
                _inZ = y;
              }),
              Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.end, children: [
                if (_act != null) btn('✋ ${_act!.label}', _act!.go, col: const Color(0xFFFACC15)),
                Row(mainAxisSize: MainAxisSize.min, children: [
                  if (_driving == null) btn(_run ? '🏃 Run: on' : '🏃 Run', () => setState(() => _run = !_run), on: _run),
                  if (_driving == null) btn('⬆ Jump', () => (inner?.walker ?? walker)?.jump(), col: const Color(0xFF60A5FA)),
                ]),
              ]),
            ]),
          ),
      ]),
    );
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
    // Road pieces jump a whole piece at a time so they stay joined to their neighbours.
    final road = kRoadKinds.contains(f.kind);
    setState(() {
      f.x += road ? dx.sign * kRoadGrid : dx;
      f.z += road ? dz.sign * kRoadGrid : dz;
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
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: on ? color : Colors.white24, width: on ? 2 : 1)),
            child: Text(label, style: TextStyle(color: on ? color : Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
          ),
          if (dot) Positioned(right: -2, top: -3, child: Container(width: 11, height: 11, decoration: BoxDecoration(color: const Color(0xFFEF4444), shape: BoxShape.circle, border: Border.all(color: kConPanel, width: 2)))),
        ]),
      ),
    );
  }

  Widget _row(List<Widget> kids) => SizedBox(height: 30, child: ListView(scrollDirection: Axis.horizontal, children: kids));

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
              if (!room.indoor) _arrow(Icons.sell_rounded, _sell),
              _arrow(Icons.delete_outline_rounded, _remove),
            ])
          else
            const Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.only(bottom: 4), child: Text('Tap a piece of furniture, or add one:', style: TextStyle(color: Colors.white60, fontSize: 12)))),
          _row([for (final e in kFurnKinds.entries) if (kOutdoorFurn.contains(e.key) == !room.indoor) _chip('${e.value.emoji} ${e.value.name}', false, () => _addFurn(e.key), color: const Color(0xFF67E8F9))]),
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
          _chip('⛶ Full screen', false, _enterFull, color: const Color(0xFF38BDF8)),
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

  /// The buttons of the city (the garden): walking round it with the controls, building, and its hospital, shop, calls and people.
  List<Widget> _cityChips() => [
        _chip(steer ? '⏹ Stop walking' : '🚶 Walk the city', steer, steer ? _stopSteer : _startSteer, color: const Color(0xFF4ADE80)),
        _chip('🏗 Build', false, _addSheet, color: const Color(0xFF4ADE80)),
        _chip('📞 Calls', false, () => _citySheet('calls'), color: const Color(0xFFF472B6), dot: (comm?.calls.length ?? 0) > 0),
        _chip('🏥 Hospital', false, () => _citySheet('hospital'), color: const Color(0xFFF87171)),
        _chip('🛒 Shop', false, () => _citySheet('shop'), color: const Color(0xFFFB923C)),
        _chip('👨‍👩‍👧 People', false, () => _citySheet('people'), color: const Color(0xFF60A5FA)),
        _chip('🏠 Go inside', false, () => _go(10), color: const Color(0xFF4ADE80)),
        _chip('🗺 Map', showMap, () => setState(() => showMap = !showMap), color: const Color(0xFFA78BFA)),
      ];

  Widget _buildPage(BuildContext context) {
    final r = room;
    final mq = MediaQuery.of(context);
    final screenW = full ? mq.size.height : mq.size.width;
    _padW = screenW;
    final stage3d = Stage3D(
        sky: !room.indoor && inner == null,
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: () => _frame(),
        onDoubleTap: _doubleTap,
        message: msg,
        good: good,
        messageTop: (showMap && !isLesson && !full) ? 104 : 10,
        layerOn: (l) => l <= 5,
        dynamicPolys: (_) => inner != null ? inner!.dynamicPolys(now, playerStyle) : [...homeDynamic(room, now, person: _pose(), personStyle: playerStyle, residents: _figs, mode: mode, drive: _driveNow(), carrying: _carrying != null), if (!room.indoor) ...trafficPolys(now)],
        dynamicScreens: (_) => (inner == null && !room.indoor) ? trafficScreens(now) : const [],
        bottom: _pad(),
        topLeft: [
          if (showMap && !isLesson && !full) _MiniMap(home: home, onTap: _go, maxWidth: math.min(138.0, screenW * 0.36)),
        ],
      );
    if (full) return _fullScreen(stage3d);
    return LessonScaffold(
      title: r.name,
      color: kConAmber,
      stepText: isLesson ? (r.lessonDone ? 'Done ✓' : 'To do') : '${home.finishedCount}/${home.indoor.length} done',
      onSteps: () => isLesson ? _openLesson() : _problems(context),
      stage: stage3d,
      panel: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        _row(!room.indoor ? _cityChips() : [
          _chip(inside ? '🔭 See the whole room' : '🏠 Be inside', false, () {
            setState(() => inside = !inside);
            _frame();
          }, color: const Color(0xFF67E8F9)),
          if (!isLesson) _chip(tour != null ? '⏹ Stop tour' : '🎬 Tour', tour != null, () => tour != null ? _stopTour() : _tourSheet(), color: const Color(0xFFF472B6)),
          _chip('⬆ Look up at the ceiling', false, _lookUpHere, color: const Color(0xFF67E8F9)),
          _chip(walk ? '🚶 Stop looking round' : '🔄 Look all round (360)', walk, () {
            setState(() {
              walk = !walk;
              if (walk && tour != null) _stopTour();
              _rebuild();
            });
            _frame();
            if (walk) _say('Drag to turn all the way round. Double tap a spot on the floor to walk there.');
          }, color: const Color(0xFFFB923C)),
          _chip('📺 TV', false, _tvSheet, color: const Color(0xFF60A5FA)),
          if (!isLesson) _chip(room.indoor ? '🌳 Go outside' : '🏠 Go inside', false, () => _go(room.indoor ? 11 : 10), color: const Color(0xFF4ADE80)),
          if (!room.indoor) _chip(steer ? '⏹ Stop walking' : '🚶 Walk about', steer, steer ? _stopSteer : _startSteer, color: const Color(0xFF4ADE80)),
          if (!isLesson) _chip('➕ Add', false, _addSheet, color: const Color(0xFF4ADE80)),
          if (!isLesson) _chip('🏘 Community', false, () {
            if (room.indoor) _go(11);
            _citySheet('calls');
          }, color: const Color(0xFFF472B6), dot: (comm?.calls.length ?? 0) > 0),
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

/// The round walking stick: put a finger on it and slide in the direction to go. The further from the middle, the faster.
class _Stick extends StatefulWidget {
  const _Stick({required this.onMove});
  final void Function(double x, double y) onMove;

  @override
  State<_Stick> createState() => _StickState();
}

class _StickState extends State<_Stick> {
  static const double _size = 132, _reach = 46;
  Offset? _knob;

  void _set(Offset local) {
    var d = local - const Offset(_size / 2, _size / 2);
    if (d.distance > _reach) d = d / d.distance * _reach;
    final x = d.dx / _reach, y = -d.dy / _reach;
    final mag = math.sqrt(x * x + y * y);
    widget.onMove(mag < 0.15 ? 0 : x, mag < 0.15 ? 0 : y);
    setState(() => _knob = d);
  }

  void _end() {
    widget.onMove(0, 0);
    setState(() => _knob = null);
  }

  @override
  Widget build(BuildContext context) {
    const green = Color(0xFF4ADE80);
    return Listener(
      behavior: HitTestBehavior.opaque,
      onPointerDown: (e) => _set(e.localPosition),
      onPointerMove: (e) => _set(e.localPosition),
      onPointerUp: (_) => _end(),
      onPointerCancel: (_) => _end(),
      child: SizedBox(
        width: _size,
        height: _size,
        child: Stack(alignment: Alignment.center, children: [
          Container(width: _size, height: _size, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.black.withValues(alpha: 0.42), border: Border.all(color: green.withValues(alpha: 0.9), width: 2.4))),
          Container(width: _size * 0.5, height: _size * 0.5, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: green.withValues(alpha: 0.25), width: 1.5))),
          Transform.translate(
            offset: _knob ?? Offset.zero,
            child: Container(width: 56, height: 56, decoration: BoxDecoration(shape: BoxShape.circle, color: green.withValues(alpha: _knob == null ? 0.55 : 0.9), border: Border.all(color: Colors.white, width: 2))),
          ),
        ]),
      ),
    );
  }
}

/// A neighbour who rang about a house with no power.
class _NCall {
  _NCall(this.furn, this.name);
  final Furn furn;
  final String name;
}
