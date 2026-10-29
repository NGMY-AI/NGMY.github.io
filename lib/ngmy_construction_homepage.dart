import 'dart:async';
import 'ngmy_city_traffic.dart';
import 'ngmy_city_delivery.dart';
import 'ngmy_city_needs.dart';
import 'ngmy_frame_loop.dart';
import 'ngmy_city_uber.dart';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_community.dart';
import 'ngmy_construction_cityin.dart';
import 'ngmy_construction_communitypage.dart';
import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_electrical_more.dart';
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
    _loadLock();
    _commTimer = Timer.periodic(const Duration(seconds: 2), (_) {
      final cm = comm;
      if (_locked) {
        if (mounted) setState(() {});
        return;
      }
      if (cm == null || !mounted || tour != null || _pages > 0) return;
      // Only draw the scene again when somebody has moved or changed, not every two seconds for nothing.
      final figs = cm.figuresIn(home, room.id);
      final sig = [for (final f in figs) '${f.id}:${f.x.round()}:${f.z.round()}:${f.calling}:${f.activityLabel}'].join('|');
      if (inner == null && sig != _figSig) {
        _figSig = sig;
        setState(_rebuild);
      }
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
    _rideTimer?.cancel();
    _droneTimer?.cancel();
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
    } else if (inside && full) {
      // Full screen: you stand right inside the room, in the middle, like in a normal house, with the walls round you.
      target = V3(0, 46, r.d * 0.1);
      dist = r.d * 0.74;
      pitch = 0.05;
      yaw = 0;
      cam
        ..minDist = 6
        ..maxDist = r.d * 0.78
        ..minPitch = 0.02
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
    if (id >= idHCam && id < idHCam + 4) {
      _eyeAt(id - idHCam);
      return;
    }
    if (id >= idHTag && id < idHTag + 3000) {
      final f = room.furnById(id - idHTag);
      if (f != null) _goToTag(f);
      return;
    }
    if (id == idCinElevator) {
      if (inner?.isTower == true) setState(() => _cardElevator = true);
      return;
    }
    if (id == idCinPanel || id == idCinOutlet) {
      final inn = inner;
      if (inn != null) {
        // Tap the panel, the outlet or the switch: the wiring job opens right away.
        if (inn.dark) {
          _houseJob(inn);
        } else {
          _say('This one works: the house has power.', ok: true);
        }
      }
      return;
    }
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
    if (room.indoor) _frame();
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
                    btn(Icons.fullscreen_exit_rounded, () {
                      setState(() => full = false);
                      if (room.indoor) _frame();
                    }),
                    btn(Icons.screen_rotation_rounded, () => setState(() => _fullTurns = _fullTurns == 1 ? 3 : 1)),
                    btn(_hideTags ? Icons.label_off_rounded : Icons.label_rounded, () => setState(() => _hideTags = !_hideTags)),
                    if (!room.indoor) btn(_droneOn ? Icons.stop_rounded : Icons.flight_rounded, () => _droneOn ? _stopDrone() : setState(() => _cardDrone = true)),
                    if (_workReady) GestureDetector(onTap: _completeWork, child: Container(width: 40, height: 40, margin: const EdgeInsets.only(right: 8), decoration: BoxDecoration(color: const Color(0xFF16A34A), shape: BoxShape.circle, border: Border.all(color: Colors.white)), child: const Icon(Icons.task_alt_rounded, color: Colors.white, size: 22))),
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

  /// Look from a camera in a corner of the hall: the view is put right there, looking across the room.
  void _eyeAt(int i) {
    final r = room;
    final ex = (i % 2 == 0 ? -1.0 : 1.0) * (r.w / 2 - 14), ez = i < 2 ? 14.0 : r.d - 14, ey = HRoom.h - 24;
    final vx = -ex, vz = r.d / 2 - ez;
    final yaw = math.atan2(vx, -vz), pitch = 0.12;
    const d = 26.0;
    final target = V3(ex + d * math.cos(pitch) * math.sin(yaw), ey - d * math.sin(pitch), ez - d * math.cos(pitch) * math.cos(yaw));
    cam.minDist = 6;
    cam.glideTo(target: target, dist: d, yaw: yaw, pitch: pitch);
    _say('You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.', ok: true);
    conBeep(700, ms: 70);
  }

  // ── Deliveries: orders to take, rival couriers and the race ──

  bool _cardOrders = false;

  /// The delivery board of the town (null in a lesson room, which has no town).
  DeliveryBoard? get _boardMaybe {
    final out = home.rooms.where((r) => !r.indoor);
    if (out.isEmpty) return null;
    final city = out.first;
    return (city.deliveryBoard ??= DeliveryBoard(city)) as DeliveryBoard;
  }

  DeliveryBoard get _board => _boardMaybe!;

  void _deliveryEvent(DeliveryEvent? e) {
    if (e == null) return;
    if (e.points > 0) comm?.points += e.points;
    conBeep(e.kind == 'pickup' ? 700 : 940, ms: 120);
    _say(e.text, ok: e.kind != 'expired');
    setState(_rebuild);
  }

  // ── The Uber licence and the Uber stations: drive people home and earn the fare ──

  bool _cardLicence = false;
  int _uberSayMs = 0;

  /// The Uber board of the town (null in a lesson room).
  UberBoard? get _uberMaybe {
    final out = home.rooms.where((r) => !r.indoor);
    if (out.isEmpty) return null;
    final city = out.first;
    return (city.uberBoard ??= UberBoard(city)) as UberBoard;
  }

  void _buyLicence() {
    final cm = comm;
    if (cm == null) return;
    if (needs.uberLicence) {
      _say('You already have your Uber licence.', ok: true);
    } else if (cm.points < kUberLicencePrice) {
      _say('The licence costs $kUberLicencePrice points. You have ${cm.points}. Earn more with jobs and deliveries.', ok: false);
    } else {
      cm.points -= kUberLicencePrice;
      needs.uberLicence = true;
      conBeep(880, ms: 140);
      _say('You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.', ok: true);
    }
    setState(() {});
    inner?.build(comm);
  }

  Widget _licenceCard() {
    final cm = comm;
    final has = needs.uberLicence;
    return Container(
      color: Colors.black.withValues(alpha: 0.55),
      alignment: Alignment.center,
      child: Container(
        width: 330,
        margin: const EdgeInsets.all(14),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(28), border: Border.all(color: Colors.white24)),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            const Text('🪪', style: TextStyle(fontSize: 30)),
            const SizedBox(width: 10),
            const Expanded(child: Text('Uber licence', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900))),
            GestureDetector(onTap: () => setState(() => _cardLicence = false), child: const Icon(Icons.close_rounded, color: Colors.white54)),
          ]),
          const SizedBox(height: 10),
          Text(has ? 'You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.' : 'With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.', style: const TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.35)),
          const SizedBox(height: 10),
          Text('You have ${cm?.points ?? 0} ⭐', style: const TextStyle(color: Color(0xFFFACC15), fontWeight: FontWeight.w800)),
          const SizedBox(height: 10),
          GestureDetector(
            onTap: has ? () => setState(() => _cardLicence = false) : _buyLicence,
            child: Container(
              height: 50,
              alignment: Alignment.center,
              decoration: BoxDecoration(color: has ? const Color(0xFF22C55E) : ((cm?.points ?? 0) >= kUberLicencePrice ? const Color(0xFFFACC15) : Colors.white12), borderRadius: BorderRadius.circular(16)),
              child: Text(has ? '✓ Licensed' : 'Get the licence · $kUberLicencePrice ⭐', style: TextStyle(color: has || (cm?.points ?? 0) >= kUberLicencePrice ? Colors.black : Colors.white38, fontWeight: FontWeight.w900, fontSize: 16)),
            ),
          ),
        ]),
      ),
    );
  }

  /// While you drive: a person at the station gets in, and at their house they get out and pay.
  void _uberTick(WorldWalker w) {
    final u = _uberMaybe;
    if (u == null || u.stations.isEmpty) return;
    final fare = u.drop(w.x, w.z, now);
    if (fare > 0) {
      comm?.points += fare;
      conBeep(940, ms: 140);
      _say('🚖 You dropped the passenger at the house. Fare: +$fare points. Thank you!', ok: true);
      setState(_rebuild);
      return;
    }
    if (u.active == null && u.stationNear(w.x, w.z) != null && u.waiting.any((p) => p.station == u.stationNear(w.x, w.z))) {
      if (!needs.uberLicence) {
        if (DateTime.now().millisecondsSinceEpoch - _uberSayMs > 20000) {
          _uberSayMs = DateTime.now().millisecondsSinceEpoch;
          _say('People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.', ok: false);
        }
        return;
      }
      if (needs.outOfGas) return;
      final p = u.pickUp(w.x, w.z);
      if (p != null) {
        conBeep(700, ms: 100);
        _say('🚖 ${p.name} got in. Take them to their house (follow the yellow line): ${p.fare} points.', ok: true);
        setState(_rebuild);
      }
    }
  }

  /// The Uber chip: where to get the licence, where the stations are, and who is in the car.
  void _uberChip() {
    final u = _uberMaybe;
    if (u == null) return;
    final p = u.active;
    if (p != null) {
      _say('🚖 ${p.name} is in the car and wants to go home: ${p.fare} points. Follow the yellow line to the house.', ok: true);
      return;
    }
    if (!needs.uberLicence) {
      final dmv = [for (final f in room.furn) if (f.kind == 'dmv') f];
      if (dmv.isEmpty) {
        _say('There is no licence office in this town yet.', ok: false);
        return;
      }
      _teleportTo(dmv.first);
      _say('You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.', ok: true);
      return;
    }
    if (u.stations.isEmpty) {
      _say('There is no Uber station in this town yet.', ok: false);
      return;
    }
    final w = walker;
    final st = [...u.stations]..sort((a, b) => ((a.x - (w?.x ?? 0)) * (a.x - (w?.x ?? 0)) + (a.z - (w?.z ?? 0)) * (a.z - (w?.z ?? 0))).compareTo((b.x - (w?.x ?? 0)) * (b.x - (w?.x ?? 0)) + (b.z - (w?.z ?? 0)) * (b.z - (w?.z ?? 0))));
    _teleportTo(st.first);
    _say('You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.', ok: true);
  }

  // ── Buying: food for energy, gas for the car, goods for the town, all paid for with points ──

  bool _cardShop = false;

  /// Buy [it] with points: food gives energy back, gas fills the tank, the town items go into the stores.
  void _buyItem(ShopItem it) {
    final cm = comm;
    if (cm == null) return;
    String say;
    var ok = true;
    if (it.id == 'bread' || it.id == 'medicine') {
      say = cm.buy(it.id == 'bread' ? 'food' : 'medicine');
      ok = !say.startsWith('You need');
    } else if (it.fuel > 0) {
      final price = it.id == 'tank' ? fillPrice(needs.fuel) : it.price;
      if (needs.fuel >= 0.99) {
        say = 'The tank is already full.';
        ok = false;
      } else if (cm.points < price) {
        say = 'You need $price points for that. Earn more with jobs and deliveries.';
        ok = false;
      } else {
        cm.points -= price;
        needs.fill(it.fuel);
        say = it.id == 'tank' ? 'You filled the tank for $price points.' : 'You put gas in the car. -$price points.';
      }
    } else if (it.cure) {
      if (!needs.sick) {
        say = 'You feel fine: you do not need pills.';
        ok = false;
      } else if (cm.points < it.price) {
        say = 'You need ${it.price} points for the ${it.name.toLowerCase()}.';
        ok = false;
      } else {
        cm.points -= it.price;
        needs.cure();
        say = 'You took the pills. You feel well again.';
      }
    } else {
      final wantsEnergy = it.energy > 0 && (needs.energy < 0.98 || needs.resting || needs.crawling);
      final wantsDrink = it.thirst > 0 && needs.thirst < 0.97;
      if (!wantsEnergy && !wantsDrink) {
        say = it.energy > 0 ? 'You are not hungry: your energy is full.' : 'You are not thirsty.';
        ok = false;
      } else if (cm.points < it.price) {
        say = 'You need ${it.price} points for the ${it.name.toLowerCase()}.';
        ok = false;
      } else {
        cm.points -= it.price;
        if (it.energy > 0) needs.eat(it.energy);
        if (it.thirst > 0) needs.drink(it.thirst);
        say = 'You had the ${it.name.toLowerCase()}. ${needs.crawling || needs.resting ? 'Still too tired: eat more.' : 'You feel stronger.'}';
      }
    }
    conBeep(ok ? 880 : 300, ms: 90);
    _say(say, ok: ok);
    inner?.build(comm);
    setState(_rebuild);
  }

  Widget _shopCard() {
    final cm = comm;
    final gas = inner?.isGasShop ?? false;
    final size = MediaQuery.of(context).size;
    // Sideways (a phone on its side, or full screen): three columns of big tiles that fit the screen, nothing to scroll.
    final wide = size.width > size.height * 1.15;

    Widget tile(ShopItem it) {
      final price = it.id == 'tank' ? fillPrice(needs.fuel) : it.price;
      final can = (cm?.points ?? 0) >= price;
      return GestureDetector(
        onTap: () => _buyItem(it),
        child: Container(
          width: wide ? 112 : double.infinity,
          margin: const EdgeInsets.only(bottom: 8),
          padding: EdgeInsets.symmetric(horizontal: wide ? 8 : 12, vertical: wide ? 8 : 10),
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(16), border: Border.all(color: can ? const Color(0xFFFACC15).withValues(alpha: 0.5) : Colors.white12)),
          child: wide
              ? Column(mainAxisSize: MainAxisSize.min, children: [
                  Text(it.emoji, style: const TextStyle(fontSize: 28)),
                  const SizedBox(height: 2),
                  Text(it.name, maxLines: 1, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5)),
                  Text(it.note, maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white54, fontSize: 9.5, height: 1.15)),
                  const SizedBox(height: 5),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                    decoration: BoxDecoration(color: can ? const Color(0xFFFACC15) : Colors.white12, borderRadius: BorderRadius.circular(12)),
                    child: Text('$price ⭐', style: TextStyle(color: can ? Colors.black : Colors.white38, fontWeight: FontWeight.w900, fontSize: 13)),
                  ),
                ])
              : Row(children: [
                  Text(it.emoji, style: const TextStyle(fontSize: 26)),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(it.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                      Text(it.note, style: const TextStyle(color: Colors.white54, fontSize: 11.5)),
                    ]),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
                    decoration: BoxDecoration(color: can ? const Color(0xFFFACC15) : Colors.white12, borderRadius: BorderRadius.circular(14)),
                    child: Text('$price ⭐', style: TextStyle(color: can ? Colors.black : Colors.white38, fontWeight: FontWeight.w900)),
                  ),
                ]),
        ),
      );
    }

    Widget section(String title, List<ShopItem> items) => Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
          Padding(padding: const EdgeInsets.only(top: 2, bottom: 6), child: Text(title, style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.2))),
          if (wide) Wrap(spacing: 8, children: [for (final it in items) tile(it)]) else for (final it in items) tile(it),
        ]);

    final header = Row(children: [
      Text(gas ? '⛽' : '🛒', style: const TextStyle(fontSize: 28)),
      const SizedBox(width: 10),
      Expanded(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(gas ? 'NGMY Gas shop' : 'NGMY Mart', style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
          Text('You have ${cm?.points ?? 0} ⭐', style: const TextStyle(color: Color(0xFFFACC15), fontSize: 13, fontWeight: FontWeight.w800)),
        ]),
      ),
      if (wide) SizedBox(width: 190, child: NeedsBars(needs: needs, driving: gas, height: 14)),
      const SizedBox(width: 12),
      GestureDetector(onTap: () => setState(() => _cardShop = false), child: const Icon(Icons.close_rounded, color: Colors.white54, size: 26)),
    ]);

    final food = section('FOOD AND DRINKS (energy)', kShopFood);
    final more = section(gas ? 'GAS' : 'HEALTH AND THE TOWN', gas ? kShopGas : kShopTown);
    return Container(
      color: Colors.black.withValues(alpha: 0.55),
      alignment: Alignment.center,
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Container(
          width: wide ? math.min(size.width - 24, 820) : 340,
          margin: const EdgeInsets.all(12),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(28), border: Border.all(color: Colors.white24)),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            header,
            const SizedBox(height: 10),
            if (!wide) ...[NeedsBars(needs: needs, driving: gas, height: 14), const SizedBox(height: 8)],
            if (wide)
              Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Expanded(flex: 5, child: food),
                const SizedBox(width: 14),
                Expanded(flex: 3, child: more),
              ])
            else ...[food, more],
          ]),
        ),
      ),
    );
  }

  Widget _ordersCard() {
    final b = _board;
    final w = walker;
    final px = w?.x ?? 0, pz = w?.z ?? 300;
    final act = b.active;
    Widget pill(String t, Color c) => Container(padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3), decoration: BoxDecoration(color: c.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(10)), child: Text(t, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 11.5)));
    String where(Furn f) => kFurnKinds[f.kind]!.name;
    Widget orderRow(DeliveryOrder o) {
      final a = doorSpot(o.from);
      final toShop = (math.sqrt(math.pow(a.$1 - px, 2) + math.pow(a.$2 - pz, 2)) / 10).round();
      return Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white12)),
        child: Row(children: [
          Text(o.info.emoji, style: const TextStyle(fontSize: 26)),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('${o.info.name}: ${where(o.from)} → a house', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5)),
              const SizedBox(height: 3),
              Wrap(spacing: 6, children: [pill('${o.pay} points', const Color(0xFFFACC15)), pill('$toShop m to the shop', const Color(0xFF38BDF8)), pill('${(o.distance / 10).round()} m trip', const Color(0xFF4ADE80))]),
            ]),
          ),
          const SizedBox(width: 8),
          GestureDetector(
            onTap: act != null
                ? null
                : () {
                    if (b.take(o, now)) {
                      setState(() => _cardOrders = false);
                      if (!steer) _startSteer();
                      _say('${o.info.emoji} Order taken: go to the ${where(o.from).toLowerCase()} (follow the yellow line), then to the house.', ok: true);
                    }
                  },
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
              decoration: BoxDecoration(color: act != null ? Colors.white12 : const Color(0xFFFACC15), borderRadius: BorderRadius.circular(14)),
              child: Text('Take', style: TextStyle(color: act != null ? Colors.white38 : Colors.black, fontWeight: FontWeight.w900)),
            ),
          ),
        ]),
      );
    }

    final rows = b.table();
    final medals = ['🥇', '🥈', '🥉', '4', '5', '6'];
    return Container(
      color: Colors.black.withValues(alpha: 0.55),
      alignment: Alignment.center,
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Container(
          width: 340,
          margin: const EdgeInsets.all(14),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(28), border: Border.all(color: Colors.white24)),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Row(children: [
              const Text('🛵', style: TextStyle(fontSize: 28)),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('Deliveries', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
                  Text('Race ${b.round}: first to $kRaceGoal wins +$kRaceBonus', style: const TextStyle(color: Colors.white60, fontSize: 12.5)),
                ]),
              ),
              GestureDetector(onTap: () => setState(() => _cardOrders = false), child: const Icon(Icons.close_rounded, color: Colors.white54)),
            ]),
            const SizedBox(height: 12),
            if (act != null)
              Container(
                padding: const EdgeInsets.all(12),
                margin: const EdgeInsets.only(bottom: 10),
                decoration: BoxDecoration(color: const Color(0xFFFACC15).withValues(alpha: 0.14), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFFFACC15))),
                child: Row(children: [
                  Text(act.info.emoji, style: const TextStyle(fontSize: 24)),
                  const SizedBox(width: 10),
                  Expanded(child: Text(act.pickedUp ? 'You have the ${act.info.name.toLowerCase()}. Take it to the house (follow the yellow line).' : 'Go to the ${where(act.from).toLowerCase()} to pick up the ${act.info.name.toLowerCase()}.', style: const TextStyle(color: Colors.white, fontSize: 13))),
                  GestureDetector(
                    onTap: () => setState(() {
                      b.cancel();
                      _say('Order given back.', ok: true);
                    }),
                    child: const Text('Give back', style: TextStyle(color: Color(0xFFF87171), fontWeight: FontWeight.w900, fontSize: 12.5)),
                  ),
                ]),
              )
            else ...[
              const Text('OPEN ORDERS', style: TextStyle(color: Colors.white54, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
              const SizedBox(height: 8),
              for (final o in b.open(px, pz).take(6)) orderRow(o),
            ],
            const SizedBox(height: 6),
            const Text('THE RACE', style: TextStyle(color: Colors.white54, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
            const SizedBox(height: 8),
            for (var i = 0; i < rows.length; i++)
              Container(
                margin: const EdgeInsets.only(bottom: 6),
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                decoration: BoxDecoration(color: rows[i].$1 == 'You' ? const Color(0xFF38BDF8).withValues(alpha: 0.18) : Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(12), border: Border.all(color: rows[i].$1 == 'You' ? const Color(0xFF38BDF8) : Colors.white10)),
                child: Row(children: [
                  SizedBox(width: 26, child: Text(medals[i], style: const TextStyle(fontSize: 16, color: Colors.white70))),
                  Expanded(child: Text(rows[i].$1, style: TextStyle(color: Colors.white, fontWeight: rows[i].$1 == 'You' ? FontWeight.w900 : FontWeight.w700))),
                  Text('${rows[i].$2}/$kRaceGoal', style: const TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900)),
                  const SizedBox(width: 10),
                  Text('${rows[i].$3} pts', style: const TextStyle(color: Color(0xFFFACC15), fontWeight: FontWeight.w800, fontSize: 12)),
                ]),
              ),
          ]),
        ),
      ),
    );
  }

  // ── The elevator of an office tower ──

  bool _cardElevator = false;
  bool _onBalcony = false;

  // ── The ride in the elevator: walk in, the doors close, the numbers climb, the doors open and you walk out ──

  _Ride? _ride;
  FrameLoop? _rideTimer;
  CityInterior? _lobby;
  final ValueNotifier<String> _rideLabel = ValueNotifier('');

  /// Take the elevator to [n]: the camera follows the person to the doors, into the car (where the display counts the levels), and out.
  void _goLevel(int n) {
    final inn = inner;
    if (inn == null || !inn.isTower || _ride != null) return;
    if (n == inn.level) {
      setState(() => _cardElevator = false);
      return;
    }
    _lobby = inn;
    _ride = _Ride(inn.level, n, DateTime.now().millisecondsSinceEpoch)
      ..sx = inn.walker.x
      ..sz = inn.walker.z;
    _inX = 0;
    _inZ = 0;
    inn.doorOpen = 0;
    setState(() => _cardElevator = false);
    cam.glideTo(target: const V3(0, 40, 45), dist: 175, yaw: 0.0, pitch: 0.28);
    _say('Going to level $n: walking to the elevator.', ok: true);
    _rideTimer?.cancel();
    _rideTimer = FrameLoop(_rideTick)..start();
  }

  double _ease(double k) {
    final x = k.clamp(0.0, 1.0);
    return x * x * (3 - 2 * x);
  }

  void _rideTick() {
    final r = _ride, lobby = _lobby;
    if (r == null || lobby == null || !mounted) {
      _rideTimer?.cancel();
      return;
    }
    final nowMs = DateTime.now().millisecondsSinceEpoch;
    final el = (nowMs - r.t0) / 1000;
    final up = r.to > r.from;
    switch (r.stage) {
      case 0:
        // Walk to the doors, wait while they open, step in.
        final w = lobby.walker;
        if (el < 1.0) {
          final k = _ease(el / 1.0);
          w
            ..x = r.sx * (1 - k)
            ..z = r.sz + (62 - r.sz) * k
            ..yaw = math.atan2(-r.sx, 62 - r.sz)
            ..walking = true;
        } else if (el < 1.8) {
          w
            ..x = 0
            ..z = 62
            ..yaw = math.pi
            ..walking = false;
        } else if (el < 2.5) {
          final k = _ease((el - 1.8) / 0.7);
          w
            ..z = 62 - 44 * k
            ..yaw = math.pi
            ..walking = true;
        } else {
          w.walking = false;
        }
        w.phase += 0.3;
        lobby.doorOpen = _ease((el - 0.8) / 0.8);
        if (el >= 2.6) {
          // Into the car.
          r.stage = 1;
          r.t0 = nowMs;
          r.total = 3.0 + ((r.to - r.from).abs() - 1).clamp(0, 99) * 1.1;
          r.shown = r.from;
          final cab = CityInterior('cabin', lobby.door)
            ..shownLevel = r.from
            ..goingUp = up
            ..doorOpen = 1;
          cab.walker
            ..x = 0
            ..z = 44
            ..yaw = 0
            ..walking = false;
          cab.build(null);
          inner = cab;
          _rideLabel.value = '${up ? '▲' : '▼'}  ${r.from == 1 ? 'L' : r.from}';
          setState(_rebuild);
          cam.setView(target: const V3(0, 52, 40), dist: 66, yaw: math.pi, pitch: 0.1);
          conBeep(520, ms: 70, volume: 0.25);
        }
      case 1:
        // The doors shut, the car goes up (or down) with the number counting, a little shake, and the doors open with a chime.
        final cab = inner;
        if (cab == null || !cab.isCabin) return;
        final t = r.total;
        cab.doorOpen = el < 0.9 ? 1 - _ease(el / 0.9) : (el > t - 0.9 ? _ease((el - (t - 0.9)) / 0.9) : 0);
        final moving = el > 0.9 && el < t - 0.9;
        if (moving) {
          final k = _ease((el - 0.9) / (t - 1.8));
          final lv = (r.from + ((r.to - r.from) * k).round()).clamp(1, cab.levels);
          if (lv != r.shown) {
            r.shown = lv;
            cab.shownLevel = lv;
            _rideLabel.value = '${up ? '▲' : '▼'}  ${lv == 1 ? 'L' : lv}';
            conBeep(500 + lv * 22, ms: 45, volume: 0.2);
          }
        }
        final shake = moving ? 1.0 : 0.25;
        cam.setView(
          target: V3(0, 52 + math.sin(el * 5.3) * 0.5 * shake, 40),
          dist: 66 + math.sin(el * 2.1) * 1.2,
          yaw: math.pi + math.sin(el * 0.9) * 0.5 + math.sin(el * 8) * 0.010 * shake,
          pitch: 0.1 + math.sin(el * 6.1) * 0.007 * shake,
        );
        if (el > t - 0.9 && !r.chimed) {
          r.chimed = true;
          cab.shownLevel = r.to;
          _rideLabel.value = '${r.to == 1 ? 'L' : r.to}';
          conBeep(880, ms: 140, volume: 0.3);
          Future<void>.delayed(const Duration(milliseconds: 150), () => conBeep(1175, ms: 220, volume: 0.3));
        }
        if (el >= t) {
          // The car stops: the lobby of the new level, with the doors open and the person in the doorway.
          r.stage = 2;
          r.t0 = nowMs;
          final id = lobby.door.id;
          final dark = room.darkOffices[id] == r.to;
          final p = _houseProjects[id * 100 + r.to];
          lobby.goToLevel(r.to, darkHere: dark);
          lobby.fixtures = p == null ? const [false, false, false, false] : _fixturesOf(p);
          lobby.build(comm);
          lobby.walker
            ..x = 0
            ..z = 16
            ..yaw = 0
            ..walking = false;
          lobby.doorOpen = 1;
          inner = lobby;
          setState(_rebuild);
          cam.setView(target: const V3(0, 40, 50), dist: 175, yaw: 0.0, pitch: 0.28);
        }
      default:
        // Walk out of the doors into the lobby; the doors close behind.
        final w = lobby.walker;
        final k = _ease(el / 1.6);
        w
          ..x = 0
          ..z = 16 + 96 * k
          ..yaw = 0
          ..walking = el < 1.6
          ..phase += 0.3;
        lobby.doorOpen = 1 - _ease((el - 1.3) / 0.8);
        cam.glideTo(target: V3(0, 40, w.z * 0.7 + 14));
        if (el >= 2.2) {
          final dark = lobby.dark;
          _rideTimer?.cancel();
          _ride = null;
          w.walking = false;
          lobby.doorOpen = 0;
          setState(_rebuild);
          cam.glideTo(target: const V3(0, 30, 110), dist: 170, yaw: 0.0, pitch: 0.4);
          conBeep(660, ms: 80);
          _say(dark ? 'Level ${lobby.level}. This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.' : 'Level ${lobby.level} of ${lobby.levels}.', ok: true);
        }
    }
  }

  Widget _elevatorCard() {
    final inn = inner;
    if (inn == null || !inn.isTower) return const SizedBox.shrink();
    final jobLevel = room.darkOffices[inn.door.id];
    return Container(
      color: Colors.black.withValues(alpha: 0.55),
      alignment: Alignment.center,
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Container(
          width: 330,
          margin: const EdgeInsets.all(14),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(28), border: Border.all(color: Colors.white24)),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Row(children: [
              const Text('🛗', style: TextStyle(fontSize: 28)),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('Elevator', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
                  Text('You are on level ${inn.level} of ${inn.levels}', style: const TextStyle(color: Colors.white60, fontSize: 12.5)),
                ]),
              ),
              GestureDetector(onTap: () => setState(() => _cardElevator = false), child: const Icon(Icons.close_rounded, color: Colors.white54)),
            ]),
            const SizedBox(height: 12),
            const Text('Choose a level. A red one has an office with no power.', style: TextStyle(color: Colors.white70, fontSize: 13)),
            const SizedBox(height: 10),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (var n = inn.levels; n >= 1; n--)
                GestureDetector(
                  onTap: () => _goLevel(n),
                  child: Container(
                    width: 58,
                    height: 52,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: n == inn.level ? const Color(0xFF38BDF8) : (n == jobLevel ? const Color(0xFFDC2626).withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.08)),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: n == jobLevel ? const Color(0xFFEF4444) : (n == inn.level ? Colors.white : Colors.white24), width: n == inn.level || n == jobLevel ? 2 : 1),
                    ),
                    child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Text(n == 1 ? 'L' : '$n', style: TextStyle(color: n == inn.level ? Colors.black : Colors.white, fontSize: 19, fontWeight: FontWeight.w900)),
                      if (n == jobLevel) const Text('⚡', style: TextStyle(fontSize: 11)),
                    ]),
                  ),
                ),
            ]),
            const SizedBox(height: 6),
            const Text('L is the lobby. On every level there is a balcony with a view of the town.', style: TextStyle(color: Colors.white38, fontSize: 11.5)),
          ]),
        ),
      ),
    );
  }

  // ── The drone: one smooth flight over the city ──

  bool _droneOn = false;
  bool _cardDrone = false;
  FrameLoop? _droneTimer;
  List<DroneLeg> _legs = const [];
  int _legIx = 0;
  int _legStartMs = 0;
  List<V3> _pe = const [], _pl = const [];
  List<double> _pc = const [];

  /// The view as a place for the eye and a place it looks at.
  (V3, V3) _eyeNow() {
    final cp = math.cos(cam.pitch), sp = math.sin(cam.pitch);
    return (cam.target + V3(-cam.dist * cp * math.sin(cam.yaw), cam.dist * sp, cam.dist * cp * math.cos(cam.yaw)), cam.target);
  }

  V3 _cr(V3 a, V3 b, V3 c, V3 d, double u) {
    double f(double p0, double p1, double p2, double p3) => 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u * u + (-p0 + 3 * p1 - 3 * p2 + p3) * u * u * u);
    return V3(f(a.x, b.x, c.x, d.x), f(a.y, b.y, c.y, d.y), f(a.z, b.z, c.z, d.z));
  }

  List<DroneLeg> _makeLegs(String what) => buildDroneLegs(home.rooms.firstWhere((r) => !r.indoor), what);

  void _startDrone(String what) {
    _stopRing();
    _stopTour();
    if (steer) _stopSteer();
    inner = null;
    final legs = _makeLegs(what);
    if (legs.isEmpty) return;
    setState(() {
      _cardDrone = false;
      _cardCall = null;
      _droneOn = true;
      _legs = legs;
      _legIx = -1;
    });
    cam
      ..minDist = 6
      ..maxDist = 2600
      ..minPitch = -1.2
      ..maxPitch = 1.4
      ..setFree(true);
    _nextLeg();
    _droneTimer?.cancel();
    _droneTimer = FrameLoop(_droneTick)..start();
  }

  void _nextLeg() {
    _legIx++;
    if (_legIx >= _legs.length) {
      _stopDrone();
      return;
    }
    final l = _legs[_legIx];
    _legStartMs = DateTime.now().millisecondsSinceEpoch;
    if (l.enter != null) {
      inner = CityInterior(interiorKindOf(l.enter!.kind), l.enter!, dark: room.darkHouses.contains(l.enter!.id))..build(comm);
      setState(_rebuild);
    }
    if (l.exit && inner != null) {
      inner = null;
      setState(_rebuild);
    }
    if (l.follow == null && l.heli == null) {
      // Carry on from where the camera is, so there is no jump (only going into or out of a building cuts).
      final cut = l.enter != null || l.exit;
      final (e0, l0) = _eyeNow();
      _pe = [if (!cut) e0, ...l.eyes];
      _pl = [if (!cut) l0, ...l.looks];
      _pc = [0.0];
      for (var i = 1; i < _pe.length; i++) {
        _pc.add(_pc.last + math.max(1.0, (_pe[i] - _pe[i - 1]).len));
      }
    }
    if (l.note != null) _say('🚁 ${l.note}', ok: true);
  }

  void _droneTick() {
    if (!_droneOn || !mounted) return;
    final l = _legs[_legIx];
    final el = (DateTime.now().millisecondsSinceEpoch - _legStartMs) / 1000;
    V3 eye, look;
    if (l.heli != null) {
      final p = heliPose(l.heli!, now);
      look = V3(p.$1, p.$2 - 33, p.$3);
      final side = l.heli! .isEven ? 1.0 : -1.0;
      eye = V3(look.x + p.$5 * 165 * side, look.y + 30, look.z - p.$4 * 165 * side);
      if (el < 3) {
        final k = el / 3, e = k * k * (3 - 2 * k);
        final (e0, l0) = _eyeNow();
        eye = V3.lerp(e0, eye, e);
        look = V3.lerp(l0, look, e);
      }
      if (el >= l.secs) {
        _nextLeg();
        return;
      }
    } else if (l.follow != null) {
      final p = vehiclePose(kTraffic[l.follow!], now);
      look = V3(p.$1, 26, p.$2);
      final a = el * 0.35 + 0.8;
      eye = V3(p.$1 + math.sin(a) * 190, 85, p.$2 + math.cos(a) * 190);
      if (el < 2.5) {
        final k = el / 2.5, e = k * k * (3 - 2 * k);
        final (e0, l0) = _eyeNow();
        eye = V3.lerp(e0, eye, e);
        look = V3.lerp(l0, look, e);
      }
      if (el >= l.secs) {
        _nextLeg();
        return;
      }
    } else {
      final s = el * l.speed;
      if (_pe.length < 2 || s >= _pc.last) {
        _nextLeg();
        return;
      }
      var i = 0;
      while (i + 2 < _pc.length && _pc[i + 1] <= s) {
        i++;
      }
      final u = ((s - _pc[i]) / (_pc[i + 1] - _pc[i])).clamp(0.0, 1.0);
      V3 at(List<V3> p, int k) => p[k.clamp(0, p.length - 1)];
      eye = _cr(at(_pe, i - 1), at(_pe, i), at(_pe, i + 1), at(_pe, i + 2), u);
      look = _cr(at(_pl, i - 1), at(_pl, i), at(_pl, i + 1), at(_pl, i + 2), u);
    }
    final v = look - eye;
    final d = math.max(8.0, v.len);
    cam.setView(target: look, dist: d, yaw: math.atan2(v.x, -v.z), pitch: math.asin((-v.y / d).clamp(-1.0, 1.0)));
  }

  void _stopDrone() {
    _droneTimer?.cancel();
    _droneTimer = null;
    if (!mounted) return;
    setState(() {
      _droneOn = false;
      inner = null;
      _rebuild();
    });
    _frame();
    _say('The drone has landed.', ok: true);
  }

  Widget _droneCard() {
    Widget opt(String emoji, String title, String sub, String what) => GestureDetector(
          onTap: () => _startDrone(what),
          child: Container(
            margin: const EdgeInsets.only(top: 8),
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white12)),
            child: Row(children: [
              Text(emoji, style: const TextStyle(fontSize: 26)),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                  Text(sub, style: const TextStyle(color: Colors.white54, fontSize: 12)),
                ]),
              ),
              const Icon(Icons.chevron_right_rounded, color: Colors.white38),
            ]),
          ),
        );
    return Container(
      color: Colors.black.withValues(alpha: 0.55),
      alignment: Alignment.center,
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Container(
          width: 330,
          margin: const EdgeInsets.all(14),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(28), border: Border.all(color: Colors.white24)),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Row(children: [
              const Text('🚁', style: TextStyle(fontSize: 28)),
              const SizedBox(width: 10),
              const Expanded(child: Text('Drone film', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900))),
              GestureDetector(onTap: () => setState(() => _cardDrone = false), child: const Icon(Icons.close_rounded, color: Colors.white54)),
            ]),
            const Text('What should the drone show you?', style: TextStyle(color: Colors.white60, fontSize: 13)),
            opt('🌆', 'The whole city', 'High flights over every street', 'city'),
            opt('🪧', 'Billboards and NGMY logos', 'Close to every ad, and the big logo board', 'billboards'),
            opt('🏁', 'Edge billboards only', 'A tour round the big boards at the edges of the city', 'edges'),
            opt('🏠', 'Houses', 'Fly by the houses, then go inside a big one', 'houses'),
            opt('🏥', 'Hospital, shop and school', 'Fly in and look round inside each', 'hospital'),
            opt('🚌', 'Traffic', 'Follow the self-driving buses and police cars', 'traffic'),
            opt('🎬', 'Everything', 'A little of all of it', 'all'),
          ]),
        ),
      ),
    );
  }

  // ── Jobs round the neighbourhood: houses and street lights that break, goods to carry, houses to sell ──

  /// The wiring job for a house with no power: the same wiring bench as the jobs, in that house.
  /// The wiring job of each dark house, kept so the work you did is still there when you come back.
  Map<int, RoomProject> get _houseProjects => home.rooms.firstWhere((r) => !r.indoor).houseWork;

  List<bool> _fixturesOf(RoomProject p) => [for (var i = 0; i < 4; i++) p.orderOk(i)];

  /// The key of the wiring job of the building the person is in (a house, or one level of an office tower).
  int? get _workKey {
    final inn = inner;
    if (inn == null || !inn.dark) return null;
    return inn.isTower ? inn.door.id * 100 + inn.level : inn.door.id;
  }

  /// Is the wiring of the dark house or office you are in all connected? Then the Complete work button shows.
  bool get _workReady {
    final k = _workKey;
    final p = k == null ? null : _houseProjects[k];
    return p != null && (p.wiringWorks || _fixturesOf(p).every((o) => o));
  }

  /// The Complete work button: check the wiring, bring the power back, pay the points.
  void _completeWork() {
    final inn = inner, k = _workKey;
    final p = k == null ? null : _houseProjects[k];
    if (inn == null || k == null || p == null) return;
    if (!p.wiringWorks) {
      _say('Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.', ok: false);
      return;
    }
    final f = inn.door;
    _houseProjects.remove(k);
    if (inn.isTower) {
      room.darkOffices.remove(f.id);
    } else {
      room.darkHouses.remove(f.id);
    }
    inn.dark = false;
    comm?.points += 20;
    inn.build(comm);
    setState(_rebuild);
    conBeep(880, ms: 120, volume: 0.3);
    _say(inn.isTower ? 'Work complete! The power is back on level ${inn.level}. +20 points.' : 'Work complete! The power is back in the house. +20 points.', ok: true);
  }

  Future<void> _houseJob(CityInterior inn) async {
    final f = inn.door;
    final key = inn.isTower ? f.id * 100 + inn.level : f.id;
    final p = _houseProjects.putIfAbsent(key, () => RoomProject(seed: f.id * 13 + 5 + inn.level, kind: 0, variants: true)..fastForward());
    await _pushPage(MaterialPageRoute<void>(builder: (_) => NgmyRoomProjectPage(project: p)));
    if (!mounted) return;
    inn.fixtures = _fixturesOf(p);
    if (_workReady) {
      // Everything is connected: the work is handed in by itself (the green button is there too, if it has to be done by hand).
      _completeWork();
    } else {
      inn.build(comm);
      setState(_rebuild);
      final done = [if (p.orderOk(0)) 'outlet 1', if (p.orderOk(1)) 'outlet 2', if (p.orderOk(2)) 'the ceiling light', if (p.orderOk(3)) 'the switch'];
      final todo = [if (!p.orderOk(0)) 'outlet 1', if (!p.orderOk(1)) 'outlet 2', if (!p.orderOk(2)) 'the ceiling light', if (!p.orderOk(3)) 'the switch'];
      _say('${done.isEmpty ? 'Nothing is fixed yet' : 'Fixed so far: ${done.join(', ')}'}. Still to do: ${todo.join(', ')}. Tap the red frames to carry on.', ok: false);
    }
  }

  /// A street light that went out: the lamp wiring lesson, then the light comes back.
  Future<void> _fixLamp(Furn f) async {
    final st = room.lampWork.putIfAbsent(f.id, () => WiringState());
    await _pushPage(MaterialPageRoute<void>(builder: (_) => ElectricalLessonPage(id: 'light', state: st)));
    if (!mounted) return;
    if (st.stage >= 2 && evaluateWiring(electricalLesson('light'), st).ok) {
      room.lampWork.remove(f.id);
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
    if (_isBusy) return;
    final houses = [for (final f in city.furn) if ((f.kind == 'house2' || f.kind == 'bighouse') && !city.darkHouses.contains(f.id) && f.id != _lastHouse) f];
    if (city.darkHouses.length < 2 && houses.isNotEmpty && _ringing == null && _nCall == null) {
      final f = houses[_rnd.nextInt(houses.length)];
      city.darkHouses.add(f.id);
      _lastHouse = f.id;
      _ringCall(_NCall(f, f.kind == 'bighouse' ? 'the big house' : 'the house'));
    }
    final lamps = [for (final f in city.furn) if ((f.kind == 'pole' || f.kind == 'lamppost') && !city.brokenLamps.contains(f.id)) f];
    if (city.brokenLamps.length < 3 && lamps.isNotEmpty && _beat % 90 == 0) {
      city.brokenLamps.add(lamps[(_beat * 5) % lamps.length].id);
      _say('⚡ A street light went out in the town. Find it (it is dark, with a red sign) and fix it.', ok: false);
    }
    if (!room.indoor && inner == null) setState(_rebuild);
  }

  /// The call that is open in the middle of the screen (and turns with a full screen game), and the office message.
  _NCall? _cardCall;
  bool _cardOffice = false;

  Future<void> _neighbourText(_NCall c) async {
    setState(() => _cardCall = c);
  }

  /// Where in front of the job's building the person is sent.
  (double, double)? _jobSpot() {
    final f = _job?.furn;
    if (f == null) return null;
    final k = kFurnKinds[f.kind]!;
    final out = rotY(V3(0, 0, k.d / 2 + 60), f.rot * math.pi / 2);
    return (f.x + out.x, f.z + out.z);
  }

  int? _jobMeters() {
    final w = walker, s = _jobSpot();
    if (w == null || s == null) return null;
    return (math.sqrt(math.pow(s.$1 - w.x, 2) + math.pow(s.$2 - w.z, 2)) / 10).round();
  }

  /// The GPS: a line of yellow dashes on the ground from the person to the job, and a tall yellow beam over the place.
  List<Poly> _routePolys() {
    final w = walker, s = _uberMaybe?.target ?? _boardMaybe?.target ?? _jobSpot();
    if ((_job == null && _boardMaybe?.active == null && _uberMaybe?.active == null) || w == null || s == null || room.indoor || inner != null) return const [];
    final b = MeshBuilder()
      ..grouped = false
      ..order = 1;
    final dx = s.$1 - w.x, dz = s.$2 - w.z;
    final len = math.sqrt(dx * dx + dz * dz);
    if (len > 60) {
      final yaw = math.atan2(dx, dz);
      var n = 0;
      for (var d = 46.0; d < len - 30 && n < 70; d += 26, n++) {
        b.box(V3(w.x + dx / len * d, 1.4, w.z + dz / len * d), const V3(9, 0.7, 15), const Color(0xFFFACC15), yaw: yaw);
      }
    }
    b.order = 3;
    b.alpha = 0.4;
    b.cyl(V3(s.$1, 0, s.$2), V3(s.$1, 170, s.$2), 4, const Color(0xFFFACC15), sides: 8);
    b.cyl(V3(s.$1, 0, s.$2), V3(s.$1, 1.6, s.$2), 24, const Color(0xFFFACC15), sides: 14);
    return b.polys;
  }

  Widget _cardOverlay() {
    final c = _cardCall;
    Widget bubble(String t) => Align(
          alignment: Alignment.centerLeft,
          child: Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            constraints: const BoxConstraints(maxWidth: 290),
            decoration: const BoxDecoration(color: Color(0xFF334155), borderRadius: BorderRadius.only(topLeft: Radius.circular(5), topRight: Radius.circular(18), bottomLeft: Radius.circular(18), bottomRight: Radius.circular(18))),
            child: Text(t, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.3)),
          ),
        );
    Widget action(IconData icon, String label, Color col, VoidCallback onTap, {bool primary = false}) => GestureDetector(
          onTap: onTap,
          child: Container(
            height: 48,
            margin: const EdgeInsets.only(top: 8),
            decoration: BoxDecoration(color: primary ? col : col.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(16), border: Border.all(color: col)),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, color: primary ? Colors.black : col, size: 21),
              const SizedBox(width: 8),
              Text(label, style: TextStyle(color: primary ? Colors.black : Colors.white, fontWeight: FontWeight.w900, fontSize: 14.5)),
            ]),
          ),
        );
    final Widget body;
    if (c != null) {
      final m = _jobMeters();
      body = Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          CircleAvatar(radius: 24, backgroundColor: const Color(0xFFF59E0B), child: Text(c.emoji, style: const TextStyle(fontSize: 22))),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(c.caller, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
              const Text('Message · now', style: TextStyle(color: Colors.white38, fontSize: 12)),
            ]),
          ),
          GestureDetector(onTap: () => setState(() => _cardCall = null), child: const Icon(Icons.close_rounded, color: Colors.white54)),
        ]),
        const SizedBox(height: 12),
        for (final line in c.lines) bubble(line),
        Container(
          margin: const EdgeInsets.only(top: 4),
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(color: const Color(0xFFFACC15).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFFFACC15).withValues(alpha: 0.5))),
          child: Row(children: [
            const Icon(Icons.navigation_rounded, color: Color(0xFFFACC15)),
            const SizedBox(width: 10),
            Expanded(child: Text(m == null ? 'A yellow line on the ground will show you the way.' : 'Follow the yellow line on the ground. It is about $m metres away.', style: const TextStyle(color: Colors.white, fontSize: 13))),
          ]),
        ),
        action(Icons.navigation_rounded, 'Show me the way', const Color(0xFFFACC15), () {
          setState(() => _cardCall = null);
          if (!steer) _startSteer();
          final w = walker;
          if (w != null) cam.glideTo(target: V3(w.x, 30, w.z), dist: 220, pitch: 0.5);
          _say('Follow the yellow line on the ground to get there.', ok: true);
        }, primary: true),
        action(Icons.directions_walk_rounded, 'Take me there', const Color(0xFF4ADE80), () {
          setState(() => _cardCall = null);
          if (_job == null) {
            _job = c;
            _jobSecs = 0;
          }
          _teleportTo(c.furn);
          _say(c.kind == 'power' ? 'You are at the house. Walk in and onto the red mat at the breaker panel.' : (c.kind == 'sick' ? 'You are at the hospital. Walk in and onto the desk.' : 'You are at the street light. Press Fix the street light.'), ok: true);
        }),
        action(Icons.schedule_rounded, 'Later', const Color(0xFFF59E0B), () {
          setState(() {
            _cardCall = null;
            if (identical(_job, c)) _job = null;
            if (!_waiting.contains(c)) _waiting.add(c);
          });
          _say('Saved on your waiting list.', ok: true);
        }),
      ]);
    } else {
      body = Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Row(children: [
          CircleAvatar(radius: 24, backgroundColor: Color(0xFFEF4444), child: Text('☎', style: TextStyle(fontSize: 22))),
          SizedBox(width: 12),
          Text('City office', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
        ]),
        const SizedBox(height: 12),
        bubble('Hello, this is the City office. A few calls were missed.'),
        bubble('Please answer the phone, so you can keep working.'),
        bubble('Every call is a person who needs help. Thank you for answering!'),
        action(Icons.check_rounded, 'OK, I will answer', const Color(0xFF4ADE80), () => setState(() => _cardOffice = false), primary: true),
      ]);
    }
    return Container(
      color: Colors.black.withValues(alpha: 0.55),
      alignment: Alignment.center,
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Container(
          width: 330,
          margin: const EdgeInsets.all(14),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: Colors.white24),
            boxShadow: const [BoxShadow(color: Colors.black54, blurRadius: 24)],
          ),
          child: body,
        ),
      ),
    );
  }

  /// Sell a building, a billboard or a crate you put in the town, for points.
  void _sell() {
    final f = room.furnById(selFurn);
    if (f == null) return;
    const prices = {'house2': 40, 'bighouse': 80, 'shop': 70, 'billboard': 15, 'crate': 4, 'car': 25, 'tree': 5, 'bench': 4, 'tower': 120, 'hq': 200, 'store': 90, 'gasstation': 90, 'cornersign': 30};
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
    const pink = Color(0xFFF472B6), sky = Color(0xFF38BDF8);
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        Widget label(String t) => Padding(
              padding: const EdgeInsets.only(top: 18, bottom: 8),
              child: Text(t.toUpperCase(), style: const TextStyle(color: Colors.white54, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
            );
        return Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2330), Color(0xFF0E1018)]),
            borderRadius: BorderRadius.vertical(top: Radius.circular(30)),
            border: Border(top: BorderSide(color: Color(0x33FFFFFF))),
          ),
          child: SafeArea(
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(20, 10, 20, 18),
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                Center(child: Container(width: 42, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
                const SizedBox(height: 16),
                Row(children: [
                  Container(
                    width: 52,
                    height: 52,
                    decoration: BoxDecoration(gradient: const LinearGradient(colors: [pink, Color(0xFFA855F7)]), borderRadius: BorderRadius.circular(16)),
                    child: const Icon(Icons.movie_creation_rounded, color: Colors.white, size: 28),
                  ),
                  const SizedBox(width: 14),
                  const Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('House tour', style: TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
                      SizedBox(height: 2),
                      Text('A film of your whole house, with every TV on.', style: TextStyle(color: Colors.white60, fontSize: 13)),
                    ]),
                  ),
                ]),
                label('Who walks the house'),
                SizedBox(
                  height: 96,
                  child: ListView(scrollDirection: Axis.horizontal, children: [
                    for (final e in kAvatarNames.entries)
                      Padding(
                        padding: const EdgeInsets.only(right: 10),
                        child: GestureDetector(
                          onTap: () {
                            set(() => ngmyPlayerAvatar = e.key);
                            GlbAvatar.load(e.key);
                            setState(() {});
                          },
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 160),
                            width: 92,
                            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 6),
                            decoration: BoxDecoration(
                              color: ngmyPlayerAvatar == e.key ? sky.withValues(alpha: 0.18) : Colors.white.withValues(alpha: 0.06),
                              borderRadius: BorderRadius.circular(18),
                              border: Border.all(color: ngmyPlayerAvatar == e.key ? sky : Colors.white12, width: ngmyPlayerAvatar == e.key ? 2 : 1),
                            ),
                            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                              CircleAvatar(
                                radius: 20,
                                backgroundColor: ngmyPlayerAvatar == e.key ? sky : Colors.white24,
                                child: Text(e.value.split(' ').first, style: const TextStyle(fontSize: 22)),
                              ),
                              const SizedBox(height: 6),
                              Text(e.value.split(' ').skip(1).join(' '), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ngmyPlayerAvatar == e.key ? sky : Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5)),
                            ]),
                          ),
                        ),
                      ),
                  ]),
                ),
                label('How long'),
                Container(
                  padding: const EdgeInsets.all(4),
                  decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(16)),
                  child: Row(children: [
                    for (final s in kTourLengths)
                      Expanded(
                        child: GestureDetector(
                          onTap: () => set(() => tourSecs = s),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 160),
                            padding: const EdgeInsets.symmetric(vertical: 11),
                            decoration: BoxDecoration(color: tourSecs == s ? kConAmber : Colors.transparent, borderRadius: BorderRadius.circular(12)),
                            child: Center(child: Text(tourLengthName(s), textAlign: TextAlign.center, style: TextStyle(color: tourSecs == s ? Colors.black : Colors.white70, fontWeight: FontWeight.w900, fontSize: 12.5))),
                          ),
                        ),
                      ),
                  ]),
                ),
                const SizedBox(height: 22),
                GestureDetector(
                  onTap: () {
                    Navigator.pop(ctx);
                    _startTour(tourSecs);
                  },
                  child: Container(
                    height: 56,
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFEF4444)]),
                      borderRadius: BorderRadius.circular(18),
                      boxShadow: [BoxShadow(color: const Color(0xFFEF4444).withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6))],
                    ),
                    child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Icon(Icons.play_arrow_rounded, color: Colors.white, size: 30),
                      SizedBox(width: 6),
                      Text('Play the tour', style: TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900)),
                    ]),
                  ),
                ),
                const SizedBox(height: 12),
                GestureDetector(
                  onTap: () {
                    Navigator.pop(ctx);
                    _startTour(45, hallOnly: true);
                  },
                  child: Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white12)),
                    child: const Row(children: [
                      Icon(Icons.meeting_room_rounded, color: pink, size: 26),
                      SizedBox(width: 12),
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text('Hallway tour', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                          Text('Just the hall and its big TVs, 45 seconds', style: TextStyle(color: Colors.white54, fontSize: 12.5)),
                        ]),
                      ),
                      Icon(Icons.chevron_right_rounded, color: Colors.white38),
                    ]),
                  ),
                ),
              ]),
            ),
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
    if (w != null && !room.indoor) return PersonPose(room: room.id, x: w.x, z: w.z, yaw: w.yaw, walking: w.walking, phase: w.phase, running: w.running && w.walking, lift: w.lift, crawl: needs.crawling);
    return null;
  }

  // ── Walking about the world ──

  /// Walking about outside with the arrows: the person you steer, how it is going, and the arrows held (sideways, forward).
  bool steer = false;
  WorldWalker? walker;
  FrameLoop? _walkTimer;
  double _inX = 0, _inZ = 0;
  int _lastWalkMs = 0;

  /// The building you are walking about in (the hospital or the shop), running, the vehicle you drive, and what you can do where you stand.
  CityInterior? inner;
  bool _run = false;
  Furn? _driving;
  int _tiredSayMs = 0;

  /// The stars lost because the crawl to a shop ran out.
  void _takePenalty() {
    final p = needs.penaltyDue;
    if (p <= 0) return;
    needs.penaltyDue = 0;
    final cm = comm;
    if (cm != null) cm.points = math.max(0, cm.points - p);
    if (mounted) setState(() {});
  }

  /// Energy and gas of the person in the city.
  final CityNeeds needs = CityNeeds.session;
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
    _walkTimer = FrameLoop(_walkTick, testEvery: const Duration(milliseconds: 40))..start();
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
    if (_ride != null) return;
    if (w == null || !mounted || (inn == null && room.indoor)) return;
    final nowMs = DateTime.now().millisecondsSinceEpoch;
    final dt = ((nowMs - _lastWalkMs) / 1000).clamp(0.0, 0.1);
    _lastWalkMs = nowMs;
    w.refresh();
    w.running = _run && _driving == null;
    if (_driving == null) w.unstick();
    w.fall(dt);
    final sy = math.sin(cam.yaw), cy = math.cos(cam.yaw);
    final dx = sy * _inZ + cy * _inX, dz = -cy * _inZ + sy * _inX;
    var moved = false;
    // Worn out (or no gas): the person cannot move until the rest is over, or they eat (or fill up).
    final stuck = _driving == null ? needs.resting : needs.outOfGas;
    if (_driving == null) w.speedScale = needs.crawling ? 0.28 : 1;
    if (stuck) {
      if ((_inX != 0 || _inZ != 0 || w.target != null) && nowMs - _tiredSayMs > 6000) {
        _tiredSayMs = nowMs;
        _say(_driving == null ? 'You are too tired to walk. Rest a little, or buy some food in a shop.' : 'The car has no gas. Get out, walk to a gas station and buy gas.', ok: false);
      }
      w.target = null;
    } else if (_inX != 0 || _inZ != 0) {
      w.target = null;
      moved = w.step(dx, dz, dt);
    } else {
      moved = w.advance(dt);
    }
    if (!moved) w.walking = false;
    // Nothing counts against the person while they are working (a job page is open) or away from the city map.
    final counting = _pages == 0 && !room.indoor;
    final tiredMsg = counting ? needs.tick(dt, walking: moved && _driving == null, driving: moved && _driving != null) : null;
    if (tiredMsg != null) _say(tiredMsg, ok: false);
    _takePenalty();
    if (moved || w.lift > 0) cam.follow(V3(w.x, 30, w.z));
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
      if (inn.licenceRequested) {
        inn.licenceRequested = false;
        if (!_cardLicence) setState(() => _cardLicence = true);
      }
      if (inn.shopRequested) {
        inn.shopRequested = false;
        if (!_cardShop) setState(() => _cardShop = true);
      }
      if (inn.elevatorRequested) {
        inn.elevatorRequested = false;
        if (!_cardElevator) setState(() => _cardElevator = true);
      }
      if (inn.onBalcony != _onBalcony) {
        _onBalcony = inn.onBalcony;
        // Out on the balcony the view turns to look over the town, and comes back when you step in.
        if (_onBalcony) {
          cam.glideTo(target: const V3(230, -40, 100), dist: 330, yaw: 1.35, pitch: 0.35);
        } else {
          cam.glideTo(target: V3(0, 30, 110), dist: 170, yaw: 0.0, pitch: 0.4);
        }
      }
      if (inn.leaving) _leaveBuilding();
      if (!_onBalcony && _ride == null) _keepCamInside();
      return;
    }
    if (inn == null && _driving == null && _boardMaybe?.active != null) _deliveryEvent(_boardMaybe!.updatePlayer(w.x, w.z, now));
    if (inn == null && _driving != null) _uberTick(w);
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

  /// Inside a building the camera stays inside the walls, so turning round never shows a wall from behind (black) or the outside.
  void _keepCamInside() {
    final hw = CityInterior.w / 2 - 10, z0 = 12.0, z1 = CityInterior.d - 10, top = CityInterior.h - 8;
    final before = cam.dist;
    for (var i = 0; i < 40; i++) {
      final cp = math.cos(cam.pitch), sp = math.sin(cam.pitch);
      final ex = cam.target.x - cam.dist * cp * math.sin(cam.yaw);
      final ez = cam.target.z + cam.dist * cp * math.cos(cam.yaw);
      final ey = cam.target.y + cam.dist * sp;
      if (ex.abs() <= hw && ez >= z0 && ez <= z1 && ey <= top) break;
      if (cam.dist <= cam.minDist) break;
      cam.dist = math.max(cam.minDist, cam.dist * 0.93);
    }
    if (cam.dist != before) cam.glideTo(dist: cam.dist);
  }

  void _enterBuilding(Furn f) {
    _inX = 0;
    _inZ = 0;
    final inn = CityInterior(interiorKindOf(f.kind), f, dark: room.darkHouses.contains(f.id))
      ..carrying = _carrying
      ..fixtures = _houseProjects[f.id] == null ? const [false, false, false, false] : _fixturesOf(_houseProjects[f.id]!)
      ..build(comm);
    inner = inn;
    _act = null;
    if (inn.isTower) {
      final jl = room.darkOffices[f.id];
      if (_job != null && _job!.kind == 'office' && jl != null) {
        _cardElevator = true;
      }
    }
    cam
      ..minDist = 60
      ..maxDist = 420
      ..minPitch = 0.15
      ..maxPitch = 1.35
      ..setFree(true);
    cam.glideTo(target: V3(0, 30, 110), dist: 170, yaw: 0.0, pitch: 0.4);
    setState(_rebuild);
    _say(switch (inn.kind) {
      'hospital' => 'The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out.',
      'dmv' => 'The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out.',
      'tower' => 'The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out.',
      'house2' || 'bighouse' => 'The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out.',
      'school' => 'The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out.',
      'firestation' => 'The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out.',
      _ => 'The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out.',
    });
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
    // Close to a gas station with a thirsty tank: buy gas right here.
    final pump = (drv != null || _carrying == null) && needs.fuel < (drv != null ? 0.7 : 0.99) && room.furn.any((f) => f.kind == 'gasstation' && math.sqrt(math.pow(w.x - f.x, 2) + math.pow(w.z - f.z, 2)) < 135);
    if (pump) {
      act = (label: '⛽ Buy gas (${fillPrice(needs.fuel)} ⭐)', go: () => _buyItem(kShopGas[1]));
    } else if (drv != null) {
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
    w.unstick();
    setState(_rebuild);
    _say('You got out.');
  }

  (String, double, double, double, int)? _driveNow() {
    final f = _driving, w = walker;
    if (f == null || w == null) return null;
    return (f.kind, w.x, w.z, w.yaw, f.color);
  }

  // ── Life in the city: time passes, people call ──

  // ── The work you are given: one job at a time, a waiting list, and the office ──

  /// How many job pages (the wiring bench, a lesson) are open on top of the city. Nothing happens in the city meanwhile.
  int _pages = 0;
  String _figSig = '';

  Future<void> _pushPage(Route<void> r) async {
    _pages++;
    try {
      await Navigator.of(context).push(r);
    } finally {
      _pages--;
    }
  }

  /// The job being done, the jobs waiting ("Later"), how many calls in a row were missed, and seconds spent on the job.
  _NCall? _job;
  final List<_NCall> _waiting = [];
  int _strikes = 0;
  int _jobSecs = 0;
  int _lastHouse = -1;
  final math.Random _rnd = math.Random();
  bool _hideTags = false;

  static const String _lockKey = 'ngmy_city_locked_until';
  int _lockedUntil = 0;
  bool get _locked => DateTime.now().millisecondsSinceEpoch < _lockedUntil;

  Future<void> _loadLock() async {
    try {
      final p = await SharedPreferences.getInstance();
      // The game is never closed for missing calls: an old lock saved on this phone is cleared.
      if (p.getInt(_lockKey) != null) await p.remove(_lockKey);
    } catch (_) {}
  }

  /// Missing calls never closes the game. After three in a row the office calls again, and the count starts over.
  void _lockOut() {
    _strikes = 0;
    _stopRing();
    _officeCall();
  }

  void _strike(String why) {
    _strikes++;
    if (_strikes >= 3) {
      _lockOut();
    } else if (_strikes == 2) {
      _say('$why. That is two in a row.', ok: false);
      _officeCall();
    } else {
      _say('$why. Answer the phone and finish the job, or you lose your place.', ok: false);
    }
  }

  /// The office rings to say the phone must be answered.
  void _officeCall() {
    conBeep(1046, ms: 160, wave: 'sine', volume: 0.3);
    setState(() {
      _cardCall = null;
      _cardOffice = true;
    });
  }

  /// Is something happening that should stop new work from coming in?
  bool get _isBusy => _pages > 0 || _job != null || _locked || _droneOn;

  /// A fresh job at a house that is chosen by chance, never the same one twice running. Marks the fault in the city.
  _NCall? _newJob() {
    final city = home.rooms.firstWhere((r) => !r.indoor);
    final cm = comm;
    final houses = [for (final f in city.furn) if ((f.kind == 'house2' || f.kind == 'bighouse') && !city.darkHouses.contains(f.id) && f.id != _lastHouse) f];
    final lamps = [for (final f in city.furn) if ((f.kind == 'pole' || f.kind == 'lamppost') && !city.brokenLamps.contains(f.id)) f];
    final hospital = city.furn.where((f) => f.kind == 'hospital');
    final order = [0, 1, 2, 3]..shuffle(_rnd);
    final towers = [for (final f in city.furn) if ((f.kind == 'tower' || f.kind == 'hq') && !city.darkOffices.containsKey(f.id)) f];
    for (final k in order) {
      if (k == 0 && houses.isNotEmpty && city.darkHouses.length < 4) {
        final f = houses[_rnd.nextInt(houses.length)];
        city.darkHouses.add(f.id);
        _lastHouse = f.id;
        return _NCall(f, f.kind == 'bighouse' ? 'the big house' : 'the house');
      }
      if (k == 1 && cm != null && hospital.isNotEmpty) {
        final well = cm.living.where((p) => !p.sick && p.inBed < 0).toList();
        if (well.isNotEmpty) {
          final p = well[_rnd.nextInt(well.length)];
          p.sick = true;
          p.health = math.min(p.health, 70);
          return _NCall(hospital.first, 'the hospital', kind: 'sick', who: p.name);
        }
      }
      if (k == 3 && towers.isNotEmpty && city.darkOffices.length < 3) {
        final f = towers[_rnd.nextInt(towers.length)];
        final lv = 2 + _rnd.nextInt(towerLevels(f) - 1);
        city.darkOffices[f.id] = lv;
        return _NCall(f, f.kind == 'hq' ? 'the NGMY company building' : 'the office tower', kind: 'office', level: lv);
      }
      if (k == 2 && lamps.isNotEmpty && city.brokenLamps.length < 4) {
        final f = lamps[_rnd.nextInt(lamps.length)];
        city.brokenLamps.add(f.id);
        return _NCall(f, 'the street', kind: 'light');
      }
    }
    return null;
  }

  /// Is the thing this job is about put right?
  bool _jobDone(_NCall c) {
    final city = home.rooms.firstWhere((r) => !r.indoor);
    switch (c.kind) {
      case 'power':
        return !city.darkHouses.contains(c.furn.id);
      case 'light':
        return !city.brokenLamps.contains(c.furn.id);
      case 'office':
        return !city.darkOffices.containsKey(c.furn.id);
      default:
        final cm = comm;
        if (cm == null) return false;
        final p = cm.residents.where((r) => r.name == c.who);
        if (p.isEmpty) return true;
        return p.first.inBed >= 0 || !p.first.sick || !p.first.alive;
    }
  }

  void _finishJob(_NCall c) {
    _strikes = 0;
    _job = null;
    _jobSecs = 0;
    if (c.kind == 'sick') {
      comm?.points += 10;
      _say('The sick person is at the hospital. +10 points. Well done.', ok: true);
    }
    if (mounted) setState(_rebuild);
  }

  /// Put the person in front of whatever the job is about.
  void _teleportTo(Furn f) {
    final w = walker;
    if (w == null || room.indoor) return;
    if (inner != null) _leaveBuilding();
    w
      ..target = null
      ..refresh();
    final spot = _frontSpot(f, w);
    w
      ..x = spot.$1
      ..z = spot.$2;
    w.unstick();
    cam.glideTo(target: V3(w.x, 30, w.z), dist: 170);
    if (!steer) _startSteer();
  }

  /// A free place right in front of the door of a building (a few steps from it), or beside a pole or a street light.
  (double, double) _frontSpot(Furn f, WorldWalker w) {
    final k = kFurnKinds[f.kind]!;
    final building = kEnterable.contains(f.kind);
    final dist = building ? k.d / 2 + 32 : 34.0;
    final front = rotY(V3(0, 0, 1), f.rot * math.pi / 2);
    final side = V3(front.z, 0, -front.x);
    final tries = <(double, double)>[];
    if (building) {
      for (final dd in const [0.0, 10.0, 22.0, 36.0, 52.0]) {
        for (final ss in const [0.0, 24.0, -24.0, 48.0, -48.0]) {
          tries.add((f.x + front.x * (dist + dd) + side.x * ss, f.z + front.z * (dist + dd) + side.z * ss));
        }
      }
    } else {
      for (var i = 0; i < 12; i++) {
        final a = i * math.pi / 6;
        tries.add((f.x + math.cos(a) * dist, f.z + math.sin(a) * dist));
      }
    }
    for (final t in tries) {
      if (!w.blocked(t.$1, t.$2)) return t;
    }
    return tries.first;
  }

  void _startJob(_NCall c) {
    _job = c;
    _jobSecs = 0;
    _teleportTo(c.furn);
    _say(switch (c.kind) { 'sick' => 'New job: ${c.who} is sick. Go into the hospital and onto the desk.', 'light' => 'New job: a street light is out. Tap the dark light to fix it.', _ => 'New job: a house has no power. Walk in and fix it at the panel.' }, ok: true);
    setState(() {});
  }

  /// A red tag over a dark house or a street light: go there, and into the house.
  void _goToTag(Furn f) {
    if (room.indoor) return;
    _teleportTo(f);
    if (f.kind == 'house2' || f.kind == 'bighouse') {
      _enterBuilding(f);
    } else if (f.kind == 'tower' || f.kind == 'hq') {
      _enterBuilding(f);
      setState(() => _cardElevator = true);
    } else {
      _say('You are at the street light. Press Fix the street light.', ok: true);
    }
  }

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
    if (inner != null && _workReady) _completeWork();
    if (!steer && _pages == 0 && !room.indoor && (needs.resting || needs.crawling)) {
      final m = needs.tick(1);
      if (m != null) _say(m, ok: false);
      _takePenalty();
    }
    // Now and then somebody feels unwell: medicine from the shop sets it right.
    if (steer && !room.indoor && !needs.sick && _rnd.nextInt(240) == 0) {
      needs.fallSick();
      _say('You feel unwell: a headache. You tire faster until you take pills from a shop.', ok: false);
    }
    if (_locked || _pages > 0) return;
    if (_beat % 45 == 20 && !isLesson && !room.indoor) _neighbourEvents();
    // In the city the phone rings at least once a minute with a job, so there is always somebody who needs you.
    if (!isLesson && !room.indoor) {
      final raceMsg = _boardMaybe?.advance(now);
      if (raceMsg != null) _say('🏁 $raceMsg', ok: true);
      final w0 = walker;
      if (w0 != null && _boardMaybe?.active != null && inner == null) _deliveryEvent(_boardMaybe!.updatePlayer(w0.x, w0.z, now));
      final j = _job;
      if (j != null) {
        _jobSecs++;
        if (_jobDone(j)) {
          _finishJob(j);
        } else if (_jobSecs >= 240) {
          _job = null;
          _jobSecs = 0;
          _strike('The job was not finished in time');
        }
      } else if (_waiting.isNotEmpty && inner == null && _ringing == null && _nCall == null) {
        // The first job is done and you are out of the house: on to the next one.
        final next = _waiting.removeAt(0);
        if (!_jobDone(next)) _startJob(next);
      } else if (_ringing == null && _nCall == null && ++_quiet >= 45) {
        _serviceCall();
      }
    } else if (room.indoor) {
      _quiet = 0;
    }
    for (final c in cm.calls) {
      if (room.indoor) continue; // calls and jobs only come while you are in the city map (the garden with the billboards)
      if (_isBusy && !_knownCalls.contains(c.id)) continue;
      if (_knownCalls.add(c.id)) _ring(c);
    }
    _knownCalls.removeWhere((id) => !cm.calls.any((c) => c.id == id));
    final r = _ringing;
    if (r != null && !cm.calls.any((c) => c.id == r.id)) _stopRing();
  }

  /// The phone rings: a two-note ring and a buzz, and a call banner to answer.
  void _ring(HelpCall c) {
    _quiet = 0;
    _ringing = c;
    _nCall = null;
    _startRingTimer();
  }

  /// How many seconds have passed in the city without the phone ringing. It never gets to a minute.
  int _quiet = 0;

  /// Rings with a job: a house with no power, a street light that is out, or somebody who is sick and needs the hospital.
  void _serviceCall() {
    _quiet = 0;
    final c = _newJob();
    if (c == null) return;
    if (_isBusy) {
      // Somebody is working: no phone call, the job waits on the list.
      if (_waiting.length < 3) _waiting.add(c);
      return;
    }
    _ringCall(c);
  }

  void _ringCall(_NCall c) {
    _quiet = 0;
    _ringing = null;
    _nCall = c;
    _startRingTimer();
  }

  void _startRingTimer() {
    _ringTicks = 0;
    _ringTimer?.cancel();
    _ringTimer = Timer.periodic(const Duration(milliseconds: 380), (_) {
      if (!mounted) return;
      _ringTicks++;
      if (_ringTicks > 36) {
        final missed = _nCall;
        _stopRing();
        if (missed != null) _strike('Nobody answered the phone');
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
    if (_ride != null) return null;
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
    // The incoming call: the person on top (picture, small "incoming call", the name big, what it is about), and under it the
    // buttons in a row, each with its word, so nothing is squeezed or on top of anything else.
    Widget incoming({required Widget avatar, required String who, required String about, required Color glow, required VoidCallback onDecline, VoidCallback? onLater, required VoidCallback onAnswer}) {
      Widget action(IconData icon, String label, Color col, VoidCallback onTap, {bool big = false}) => Expanded(
            child: GestureDetector(
              onTapDown: (_) => onTap(),
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                Container(width: big ? 58 : 50, height: big ? 58 : 50, decoration: BoxDecoration(color: col, shape: BoxShape.circle), child: Icon(icon, color: Colors.white, size: big ? 30 : 26)),
                const SizedBox(height: 5),
                Text(label, style: const TextStyle(color: Colors.white70, fontSize: 12, fontWeight: FontWeight.w800)),
              ]),
            ),
          );
      return Container(
        width: math.min(screenW - 28, 340),
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.fromLTRB(18, 16, 18, 14),
        decoration: BoxDecoration(gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2937), Color(0xFF0B1220)]), borderRadius: BorderRadius.circular(30), border: Border.all(color: Colors.white24, width: 2), boxShadow: [BoxShadow(color: glow.withValues(alpha: 0.35), blurRadius: 24)]),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
            avatar,
            const SizedBox(width: 14),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                const Text('INCOMING CALL', style: TextStyle(color: Colors.white54, fontSize: 11.5, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
                const SizedBox(height: 2),
                Text(who, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 21, fontWeight: FontWeight.w900)),
                const SizedBox(height: 2),
                Text(about, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white54, fontSize: 13)),
              ]),
            ),
          ]),
          const SizedBox(height: 14),
          Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            action(Icons.call_end_rounded, 'Decline', const Color(0xFFEF4444), onDecline),
            if (onLater != null) action(Icons.schedule_rounded, 'Later', const Color(0xFFF59E0B), onLater),
            action(Icons.call_rounded, 'Answer', const Color(0xFF22C55E), onAnswer, big: true),
          ]),
        ]),
      );
    }

    return SizedBox(
      width: screenW,
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        if (nc != null)
          incoming(
            avatar: CircleAvatar(radius: 28, backgroundColor: const Color(0xFFF59E0B), child: Text(nc.emoji, style: const TextStyle(fontSize: 26))),
            who: nc.caller,
            about: nc.subtitle,
            glow: const Color(0xFFFACC15),
            onDecline: () {
              _stopRing();
              _strike('You turned the call down');
            },
            onLater: () {
              final c = nc;
              _stopRing();
              _waiting.add(c);
              _say('Saved on your waiting list. You will be taken there when you are free.', ok: true);
            },
            onAnswer: () {
              final c = nc;
              _stopRing();
              _job = c;
              _jobSecs = 0;
              _neighbourText(c);
            },
          ),
        if (call != null)
          incoming(
            avatar: CircleAvatar(radius: 28, backgroundColor: kResidents[call.resident].style.shirt, child: Text(kResidents[call.resident].name[0], style: const TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.w900))),
            who: kResidents[call.resident].name,
            about: 'NGMY City · mobile',
            glow: const Color(0xFF4ADE80),
            onDecline: _stopRing,
            onAnswer: () {
              _stopRing();
              _textSheet(call);
            },
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
                // The energy (and the gas in a car) as a long battery as wide as the two buttons together.
                Padding(padding: const EdgeInsets.only(left: 4, top: 6), child: SizedBox(width: _driving == null ? 206 : 140, child: NeedsBars(needs: needs, driving: _driving != null, height: 12))),
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
      await _pushPage(MaterialPageRoute<void>(builder: (_) => r.lesson == 'ptrap' ? PtrapLessonPage(state: r.lessonPlumb) : FaucetLessonPage(state: r.lessonPlumb)));
    } else {
      r.lessonState ??= WiringState();
      await _pushPage(MaterialPageRoute<void>(builder: (_) => ElectricalLessonPage(id: r.lesson, state: r.lessonState)));
    }
    if (!mounted) return;
    setState(_rebuild);
    if (r.lessonDone) {
      comm?.points += 10;
      _say(switch (r.lesson) {
        'switch' => 'Done! Tap the switch on the wall: the light comes on.',
        'fan' => 'Done! Tap the wall switch and the fan spins.',
        'outlet' || 'gfci' => 'Done! Tap the outlet and plug something in.',
        _ when isSwitchKind(r.lesson) => 'Done! Tap the switch on the wall: it works.',
        _ when isOutletKind(r.lesson) => 'Done! Tap the outlet and plug something in.',
        _ => 'Done! The sink works.',
      });
    }
  }

  Future<void> _wireExtra(int i) async {
    final e = room.extras[i];
    final was = e.done;
    await _pushPage(MaterialPageRoute<void>(builder: (_) => ElectricalLessonPage(id: e.kind, state: e.state)));
    if (!mounted) return;
    setState(_rebuild);
    if (e.done && !was) comm?.points += 8;
    if (e.done) _say('Wired! ${was ? '' : 'You are paid 8 stars. '}${e.kind == 'switch' ? 'Tap it to turn the light on and off.' : 'Tap it to plug something in.'}');
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
    final wasWired = r.wired;
    await _pushPage(MaterialPageRoute<void>(builder: (_) => NgmyRoomProjectPage(project: r.wiring)));
    if (!mounted) return;
    setState(_rebuild);
    if (r.wired && !wasWired) {
      comm?.points += 20;
      _say('${r.name}: the wiring is finished and the light has power. You are paid 20 stars!', ok: true);
    } else if (r.wired) {
      _say('${r.name}: the wiring is finished. The light has power.');
    }
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
    final wasPlumbed = r.plumbed;
    await _pushPage(MaterialPageRoute<void>(builder: (_) => NgmyPlumbJobPage(job: r.plumb)));
    if (!mounted) return;
    setState(_rebuild);
    if (r.plumbed && !wasPlumbed) {
      comm?.points += 20;
      _say('${r.name}: the plumbing is finished and nothing leaks. You are paid 20 stars!', ok: true);
    } else if (r.plumbed) {
      _say('${r.name}: the plumbing is finished and nothing leaks.');
    }
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
    if (_locked) {
      final left = Duration(milliseconds: _lockedUntil - DateTime.now().millisecondsSinceEpoch);
      return Scaffold(
        backgroundColor: const Color(0xFF0B0F17),
        body: SafeArea(
          child: Center(
            child: Padding(
              padding: const EdgeInsets.all(28),
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                const Text('🔒', style: TextStyle(fontSize: 54)),
                const SizedBox(height: 12),
                const Text('The game is closed for now', style: TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900), textAlign: TextAlign.center),
                const SizedBox(height: 10),
                const Text('You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.', style: TextStyle(color: Colors.white70, fontSize: 14.5, height: 1.4), textAlign: TextAlign.center),
                const SizedBox(height: 14),
                Text('It opens again in ${left.inHours}h ${left.inMinutes % 60}m', style: const TextStyle(color: Color(0xFFFACC15), fontSize: 18, fontWeight: FontWeight.w900)),
                const SizedBox(height: 22),
                FilledButton(onPressed: () => Navigator.of(context).maybePop(), child: const Text('Go back')),
              ]),
            ),
          ),
        ),
      );
    }
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
        if (_workReady) _chip('✅ Complete work', true, _completeWork, color: const Color(0xFF22C55E)),
        _chip(steer ? '⏹ Stop walking' : '🚶 Walk the city', steer, steer ? _stopSteer : _startSteer, color: const Color(0xFF4ADE80)),
        _chip('🏗 Build', false, _addSheet, color: const Color(0xFF4ADE80)),
        _chip('📞 Calls', false, () => _citySheet('calls'), color: const Color(0xFFF472B6), dot: (comm?.calls.length ?? 0) > 0),
        _chip('🏥 Hospital', false, () => _citySheet('hospital'), color: const Color(0xFFF87171)),
        _chip('🛒 Shop', false, () => _citySheet('shop'), color: const Color(0xFFFB923C)),
        _chip('👨‍👩‍👧 People', false, () => _citySheet('people'), color: const Color(0xFF60A5FA)),
        _chip('🏠 Go inside', false, () => _go(10), color: const Color(0xFF4ADE80)),
        if (inner?.isShop == true) _chip('🛒 Buy things', _cardShop, () => setState(() => _cardShop = true), color: const Color(0xFFFACC15)),
        if (inner?.isTower == true) _chip('🏢 Level ${inner!.level} of ${inner!.levels}', false, () => setState(() => _cardElevator = true), color: const Color(0xFF60A5FA)),
        if (_job != null) _chip('📋 My job${_jobMeters() == null ? '' : ' · ${_jobMeters()} m'}', false, () => setState(() => _cardCall = _job), color: const Color(0xFFFACC15)),
        if (_waiting.isNotEmpty) _chip('⏳ Waiting: ${_waiting.length}', false, () => _say('${_waiting.length} job${_waiting.length == 1 ? '' : 's'} waiting. You are taken to the next one when you finish this one.', ok: true), color: const Color(0xFFF59E0B)),
        _chip('🛵 Orders', _board.active != null, () => setState(() => _cardOrders = true), color: const Color(0xFFFACC15), dot: _board.active == null),
        _chip(_droneOn ? '⏹ Stop drone' : '🚁 Drone', _droneOn, () => _droneOn ? _stopDrone() : setState(() => _cardDrone = true), color: const Color(0xFF38BDF8)),
        _chip(_hideTags ? '🏷 Show tags' : '🏷 Hide tags', _hideTags, () => setState(() => _hideTags = !_hideTags), color: const Color(0xFFF87171)),
        _chip('🚖 Uber', _uberMaybe?.active != null, _uberChip, color: const Color(0xFFFACC15)),
        _chip('🗺 Map', showMap, () => setState(() => showMap = !showMap), color: const Color(0xFFA78BFA)),
      ];

  Scene3D? _tagSrc, _tagOut;

  /// The scene, without the red tags when they are switched off.
  Scene3D get _shownScene {
    if (!_hideTags) return scene;
    if (identical(_tagSrc, scene) && _tagOut != null) return _tagOut!;
    _tagSrc = scene;
    return _tagOut = Scene3D(scene.polys, info: scene.info, labels: [for (final l in scene.labels) if (l.id == 0 && l.color != const Color(0xFFDC2626) && !l.text.contains('rooms still need work') && !l.text.contains('house is finished')) l], screens: scene.screens, shell: scene.shell);
  }

  Widget _buildPage(BuildContext context) {
    final r = room;
    final mq = MediaQuery.of(context);
    final screenW = full ? mq.size.height : mq.size.width;
    _padW = screenW;
    final stage3d = Stage3D(
        sky: !room.indoor && inner == null,
        stars: isLesson ? null : () => comm?.points ?? 0,
        scene: _shownScene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: () => _frame(),
        onDoubleTap: _doubleTap,
        message: msg,
        good: good,
        messageTop: full ? 62 : ((showMap && !isLesson) ? 104 : 10),
        layerOn: (l) => l <= 5,
        dynamicPolys: (_) => inner != null ? inner!.dynamicPolys(now, playerStyle) : [...homeDynamic(room, now, person: _pose(), personStyle: playerStyle, residents: _figs, mode: mode, drive: _driveNow(), carrying: _carrying != null || (_boardMaybe?.carrying ?? false), couriers: room.indoor ? const [] : [...(_boardMaybe?.figures(now) ?? const <CourierFigure>[]), ...(_uberMaybe?.figures(now) ?? const <CourierFigure>[])]), if (!room.indoor) ...trafficPolys(now), ...((_job != null || _boardMaybe?.active != null || _uberMaybe?.active != null) ? _routePolys() : const <Poly>[])],
        dynamicScreens: (_) => (inner == null && !room.indoor) ? trafficScreens(now) : const [],
        bottom: _pad(),
        topLeft: [
          if (showMap && !isLesson && !full) _MiniMap(home: home, onTap: _go, maxWidth: math.min(138.0, screenW * 0.36)),
        ],
      );
    final anyCard = _cardCall != null || _cardOffice || _cardDrone || _cardElevator || _cardOrders || _cardShop || _cardLicence;
    final carDisplay = _ride?.stage == 1;
    final stage = (anyCard || carDisplay)
        ? Stack(fit: StackFit.expand, children: [
            stage3d,
            if (anyCard) Positioned.fill(child: _cardLicence ? _licenceCard() : _cardShop ? _shopCard() : _cardOrders ? _ordersCard() : (_cardElevator ? _elevatorCard() : (_cardDrone ? _droneCard() : _cardOverlay()))),
            if (carDisplay)
              Positioned(
                top: 74,
                left: 0,
                right: 0,
                child: IgnorePointer(
                  child: Center(
                    child: ValueListenableBuilder<String>(
                      valueListenable: _rideLabel,
                      builder: (_, v, __) => Container(
                        padding: const EdgeInsets.symmetric(horizontal: 26, vertical: 8),
                        decoration: BoxDecoration(color: const Color(0xFF020617).withValues(alpha: 0.82), borderRadius: BorderRadius.circular(18), border: Border.all(color: const Color(0xFF22D3EE), width: 2)),
                        child: Text(v, style: const TextStyle(color: Color(0xFFFACC15), fontSize: 44, fontWeight: FontWeight.w900, letterSpacing: 2)),
                      ),
                    ),
                  ),
                ),
              ),
          ])
        : stage3d;
    if (full) return _fullScreen(stage);
    return LessonScaffold(
      title: r.name,
      color: kConAmber,
      stepText: isLesson ? (r.lessonDone ? 'Done ✓' : 'To do') : '${home.finishedCount}/${home.indoor.length} done',
      onSteps: () => isLesson ? _openLesson() : _problems(context),
      titleExtra: room.indoor ? null : NeedsBars(needs: needs, driving: _driving != null, height: 12),
      stage: stage,
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
/// A ride in the elevator: from which level to which, where the person started, when the part began, and what the display shows.
class _Ride {
  _Ride(this.from, this.to, this.t0);
  final int from, to;
  int t0;
  int stage = 0;
  int shown = 1;
  double total = 3;
  double sx = 0, sz = 112;
  bool chimed = false;
}

/// One leg of a drone film: a smooth curve through the eye points (looking at the look points) at [speed] units a second, optionally into or
/// out of a building, or following a vehicle for [secs] seconds.
class DroneLeg {
  DroneLeg(this.eyes, this.looks, {this.speed = 130, this.note, this.enter, this.exit = false, this.follow, this.heli, this.secs = 8});
  final List<V3> eyes, looks;
  final double speed, secs;
  final String? note;
  final Furn? enter;
  final bool exit;
  final int? follow;

  /// Follow helicopter number [heli], to show the billboard it flies with.
  final int? heli;
}

class _NCall {
  _NCall(this.furn, this.name, {this.kind = 'power', this.who = '', this.level = 0});
  final Furn furn;
  final String name;

  /// power (a house with no power), light (a street light is out) or sick (somebody needs the hospital).
  final String kind;
  final String who;

  /// For an office call: the level of the tower that has no power.
  final int level;

  String get emoji => switch (kind) { 'sick' => '🤒', 'light' => '💡', 'office' => '🏢', _ => '⚡' };
  String get caller => switch (kind) { 'sick' => who.isEmpty ? 'A neighbour' : who, 'light' => 'City lights office', 'office' => 'Office manager', _ => 'Your neighbour' };
  String get subtitle => switch (kind) { 'sick' => 'Needs a doctor', 'light' => 'A street light is out', 'office' => 'No power in an office', _ => 'No power at a house' };
  List<String> get lines => switch (kind) {
        'sick' => ['Hello! $caller is very sick and cannot get up.', 'Please take them to the hospital: walk into the hospital and onto the desk to admit them.', 'I will pay you 10 points. Thank you!'],
        'office' => ['Hello, this is the office manager. The office on level $level of $name has lost its power and nobody can work.', 'Please take the elevator up to level $level, and fix the wiring at the breaker panel there.', 'I will pay you 20 points. Thank you so much!'],
        'light' => ['Hello! A street light is out and the street is dark.', 'It is the dark one with the red sign. Could you fix its wiring?', 'I will pay you 10 points. Thank you!'],
        _ => ['Hello! All the lights went out in $name. The power is off in the whole house.', 'Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.', 'I will pay you 20 points. Thank you!'],
      };
}

/// The face of a billboard or a building: the way it looks out (x, z).
(double, double) droneFacing(Furn f) {
  final v = rotY(const V3(0, 0, 1), f.rot * math.pi / 2);
  return (v.x, v.z);
}

/// The legs of a drone film. [what] is city, billboards, houses, hospital or traffic; anything else is all of them. Each leg is a
/// smooth curve through its points, so the drone never cuts and never flies into anything: it keeps well in front of a billboard
/// and well above the roofs.
List<DroneLeg> buildDroneLegs(HRoom city, String what) {
  final legs = <DroneLeg>[];
    var eyes = <V3>[], looks = <V3>[];
  var notes = <String>[];
  var startsInside = false;
  void flush({double speed = 130}) {
    if (eyes.isEmpty) return;
    legs.add(DroneLeg(eyes, looks, speed: speed, exit: startsInside, note: notes.isEmpty ? null : notes.first));
    eyes = [];
    looks = [];
    notes = [];
    startsInside = false;
  }

  void pt(V3 e, V3 l, {String? note}) {
    eyes.add(e);
    looks.add(l);
    if (note != null) notes.add(note);
  }

  /// Fly past the face of something slowly: come down in front of it, then swing round its side in an arc, always looking at it and
  /// never nearer than [near]. It takes about three seconds.
  bool insideSign(V3 p) {
    for (final f in city.furn) {
      if (f.kind != 'billboard' && f.kind != 'cornersign' && f.kind != 'townsign' && f.kind != 'adboard') continue;
      final (hx, hz, hy) = switch (f.kind) { 'townsign' => (215.0, 40.0, 345.0), 'cornersign' => (95.0, 40.0, 185.0), 'adboard' => (180.0, 40.0, 215.0), _ => (60.0, 60.0, 90.0) };
      final turned = f.rot.isOdd;
      if ((p.x - f.x).abs() < (turned ? hz : hx) && (p.z - f.z).abs() < (turned ? hx : hz) && p.y < hy) return true;
    }
    return false;
  }

  void pass(Furn f, double height, double look, double near, double far, double lift, {String? note}) {
    final (fx, fz) = droneFacing(f);
    final c = V3(f.x, look, f.z);
    final base = math.atan2(fx, fz);
    String? pending;
    for (var i = 0; i < 6; i++) {
      final a = base - 0.55 + i * 0.38;
      final r = near + (far - near) * i / 5;
      final at = V3(f.x + math.sin(a) * r, height + lift * i / 5 + (i == 0 ? 40 : 0), f.z + math.cos(a) * r);
      // A point that would sit inside another sign (boards stand close together at the edges) is left out.
      if (insideSign(at)) {
        if (i == 0) pending = note;
        continue;
      }
      if (eyes.isNotEmpty && i > 0) {
        final prev = eyes.last;
        var cuts = false;
        for (var s = 0.0; s <= 1.0 && !cuts; s += 0.02) {
          cuts = insideSign(V3.lerp(prev, at, s));
        }
        // The straight line to the next point would cut through a board (they stand close together): climb over it.
        if (cuts) {
          pt(V3(prev.x, 420, prev.z), looks.last);
          pt(V3(at.x, 420, at.z), c);
        }
      }
      pt(at, c, note: i == 0 ? note : pending);
      pending = null;
    }
  }

  /// A billboard, a corner sign or the big town sign, passed the way that suits its size.
  /// Does the straight line from [a] to [b] go through any sign (its mast and board)?
  bool hitsSigns(V3 a, V3 b) {
    for (var s = 0.0; s <= 1.0; s += 0.02) {
      final p = V3.lerp(a, b, s);
      for (final f in city.furn) {
        if (f.kind != 'billboard' && f.kind != 'cornersign' && f.kind != 'townsign' && f.kind != 'adboard') continue;
        final (hx, hz, hy) = switch (f.kind) { 'townsign' => (215.0, 40.0, 345.0), 'cornersign' => (95.0, 40.0, 185.0), 'adboard' => (180.0, 40.0, 215.0), _ => (60.0, 60.0, 90.0) };
        final turned = f.rot.isOdd;
        if ((p.x - f.x).abs() < (turned ? hz : hx) && (p.z - f.z).abs() < (turned ? hx : hz) && p.y < hy) return true;
      }
    }
    return false;
  }

  void passSignPoints(Furn f) {
    switch (f.kind) {
      case 'townsign':
        pass(f, 255, 250, 430, 520, 60, note: 'The biggest billboard in the city: NGMY Town');
      case 'cornersign':
        pass(f, 115, 120, 210, 260, 50, note: 'A corner billboard: NGMY Town');
      case 'adboard':
        pass(f, 160, 142, 330, 410, 55, note: 'A big NGMY ad billboard');
      case 'tower':
        pass(f, 430, towerHeightFor(f) + 40, 150, 210, 20, note: 'A tower with NGMY ad boards');
      case 'hq':
        pass(f, 440, 312, 190, 250, 20, note: 'The NGMY company building');
      default:
        pass(f, 75, 48, 130, 175, 45, note: 'An NGMY billboard');
    }
  }

  void passSign(Furn f) {
    final before = eyes.length;
    passSignPoints(f);
    if (before > 0 && before < eyes.length) {
      final a = eyes[before - 1], b = eyes[before];
      if (hitsSigns(a, b)) {
        // Going from one sign to the next would cut through one: climb above them and come down onto the next.
        final la = looks[before - 1], lb = looks[before];
        eyes.insertAll(before, [V3(a.x, 420, a.z), V3(b.x, 420, b.z)]);
        looks.insertAll(before, [la, lb]);
      }
    }
  }

  void interior(Furn f) {
    flush();
    legs.add(DroneLeg([const V3(-100, 100, 320), const V3(0, 105, 280), const V3(100, 100, 320)], [const V3(-30, 40, 100), const V3(0, 40, 100), const V3(30, 40, 100)], speed: 55, enter: f, note: 'Inside the ${kFurnKinds[f.kind]!.name.toLowerCase()}'));
    startsInside = true;
  }

  final all = !const ['city', 'billboards', 'edges', 'houses', 'hospital', 'traffic'].contains(what);
  // Every billboard in the town: the street ones, the corner ones, the big ones at the edges, and the towers with their boards.
  final boards = [for (final f in city.furn) if (f.kind == 'billboard' || f.kind == 'cornersign' || f.kind == 'adboard' || f.kind == 'tower' || f.kind == 'hq') f];
  final towns = city.furn.where((f) => f.kind == 'townsign');
  final houses = [for (final f in city.furn) if (f.kind == 'house2' || f.kind == 'bighouse') f];

  // The film always starts at the big sign that welcomes everybody to NGMY Town: from high up, down and round it.
  pt(const V3(0, 900, 1600), const V3(0, 250, 640), note: 'Welcome to NGMY Town');
  if (towns.isNotEmpty) passSign(towns.first);
  if (what == 'city' || all) {
    pt(const V3(-700, 430, 1150), const V3(-200, 0, 900));
    pt(const V3(-720, 360, 320), const V3(-200, 0, 500));
    pt(const V3(0, 400, 60), const V3(0, 0, 500));
    pt(const V3(720, 360, 320), const V3(200, 0, 500));
    pt(const V3(700, 430, 1150), const V3(200, 0, 900));
    pt(const V3(0, 520, 1450), const V3(0, 0, 800));
    flush(speed: 200);
  }
  if (what == 'billboards' || all) {
    pt(const V3(-380, 470, 1300), const V3(-330, 40, 760));
    // The big NGMY logo board behind the house: in front of it, then round behind it.
    pt(const V3(0, 330, 260), const V3(0, 250, -118), note: 'The big NGMY logo board: New Global Movement for Youth');
    pt(const V3(190, 320, 100), const V3(0, 250, -118));
    pt(const V3(260, 300, -160), const V3(0, 250, -118));
    pt(const V3(100, 290, -330), const V3(0, 250, -118));
    pt(const V3(-120, 300, -320), const V3(0, 250, -118));
    pt(const V3(-260, 330, -80), const V3(0, 250, -118));
    pt(const V3(-100, 400, 350), const V3(-200, 100, 480));
    // Then every billboard, always the nearest one next, so the drone goes round the city without crossing it.
    var from = towns.isEmpty ? const V3(0, 0, 640) : V3(towns.first.x, 0, towns.first.z);
    final left = List<Furn>.of(boards);
    var shown = 0;
    while (left.isNotEmpty && shown < (all ? 8 : 80)) {
      left.sort((a, b) => (math.pow(a.x - from.x, 2) + math.pow(a.z - from.z, 2)).compareTo(math.pow(b.x - from.x, 2) + math.pow(b.z - from.z, 2)));
      final f = left.removeAt(0);
      passSign(f);
      from = V3(f.x, 0, f.z);
      shown++;
    }
    flush(speed: 105);
    for (var i = 0; i < kHelis.length; i++) {
      legs.add(DroneLeg(const [], const [], heli: i, secs: 10, note: 'A helicopter with its billboard'));
    }
  }
  if (what == 'edges') {
    // Only the big boards at the edges of the town, all the way round (clockwise), with a high sweep between them.
    final edge = [for (final f in city.furn) if (f.kind == 'adboard' || f.kind == 'cornersign') f];
    double ang(Furn f) => math.atan2(f.z - 1000, f.x);
    edge.sort((a, b) => ang(a).compareTo(ang(b)));
    for (final f in edge) {
      if (eyes.length > 1) {
        final last = eyes.last;
        pt(V3((last.x + f.x) / 2, 430, (last.z + f.z) / 2), V3(f.x, 100, f.z));
      }
      passSign(f);
    }
    flush(speed: 150);
  }
  if (what == 'houses' || all) {
    for (var i = 0; i < houses.length && i < (all ? 2 : 5); i++) {
      final f = houses[(i * 5 + 1) % houses.length];
      pass(f, 150, 50, 270, 330, 70, note: f.kind == 'bighouse' ? 'A big house with TV windows' : 'A house');
    }
    final bh = houses.where((f) => f.kind == 'bighouse');
    if (bh.isNotEmpty) {
      final f = bh.first;
      final (fx, fz) = droneFacing(f);
      pt(V3(f.x + fx * 220, 110, f.z + fz * 220), V3(f.x, 45, f.z));
      interior(f);
    }
  }
  if (what == 'hospital' || all) {
    for (final kind in const ['hospital', 'shop', 'school']) {
      final f = city.furn.where((f) => f.kind == kind);
      if (f.isEmpty) continue;
      pass(f.first, 160, 50, 300, 360, 60, note: 'The $kind');
      interior(f.first);
    }
  }
  flush();
  if (what == 'traffic' || all) {
    if (!all) {
      for (var i = 0; i < kHelis.length; i++) {
        legs.add(DroneLeg(const [], const [], heli: i, secs: 10, note: 'A helicopter with its billboard'));
      }
    }
    for (var i = 0; i < kTraffic.length && i < (all ? 2 : 4); i++) {
      legs.add(DroneLeg(const [], const [], follow: i, secs: 9, note: kTraffic[i].kind == 'bus' ? 'A self-driving bus with its billboards' : 'A self-driving police car'));
    }
  }
  return legs;
}

