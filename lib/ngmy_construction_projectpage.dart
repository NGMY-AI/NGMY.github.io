import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_construction_project.dart';
import 'ngmy_construction_roomscene.dart';
import 'ngmy_electronics_tv.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE ROOM PROJECT PAGE. Pick up a tool or an item, then tap the place in the 3D room where it goes.
// Learn mode tells you what to do next and explains every wrong move. Practice mode only speaks up when you
// get something wrong, and real wiring mistakes burn and shock.
// ═════════════════════════════════════════════════════════════════════════════

class _Item {
  const _Item(this.key, this.label, this.icon);
  final String key, label;
  final IconData icon;
}

const List<List<_Item>> _trays = [
  [
    _Item('look', 'Look', Icons.search_rounded),
    _Item('wall', 'Wall box', Icons.crop_portrait_rounded),
    _Item('ceiling', 'Ceiling box', Icons.circle_outlined),
    _Item('fanbox', 'Fan box', Icons.air_rounded),
    _Item('drill', 'Drill', Icons.construction_rounded),
    _Item('cable', 'Cable roll', Icons.cable_rounded),
  ],
  [
    _Item('look', 'Look', Icons.search_rounded),
    _Item('sheet', 'Drywall sheet', Icons.view_agenda_rounded),
    _Item('knife', 'Drywall saw', Icons.content_cut_rounded),
    _Item('screw', 'Screw gun', Icons.hardware_rounded),
    _Item('tape', 'Tape', Icons.horizontal_rule_rounded),
    _Item('mud', 'Mud', Icons.format_paint_rounded),
    _Item('sand', 'Sander', Icons.cleaning_services_rounded),
    _Item('paint', 'Roller', Icons.roller_shades_rounded),
  ],
  [
    _Item('look', 'Look', Icons.search_rounded),
    _Item('tester', 'Voltage tester', Icons.flash_on_rounded),
    _Item('outlet', 'Outlet', Icons.power_rounded),
    _Item('gfci', 'GFCI', Icons.shield_rounded),
    _Item('switch', 'Switch', Icons.toggle_on_rounded),
    _Item('light', 'Light', Icons.lightbulb_rounded),
    _Item('fan', 'Fan', Icons.mode_fan_off_rounded),
    _Item('tv', 'TV', Icons.tv_rounded),
    _Item('lamp', 'Lamp', Icons.light_rounded),
    _Item('toaster', 'Toaster', Icons.breakfast_dining_rounded),
    _Item('hairdryer', 'Hair dryer', Icons.dry_rounded),
    _Item('flip', 'Flip switch', Icons.toggle_on_rounded),
    _Item('unplug', 'Unplug', Icons.power_off_rounded),
  ],
];

class NgmyRoomProjectPage extends StatefulWidget {
  const NgmyRoomProjectPage({super.key, this.seed, this.practice = false, this.quick = false, this.project});
  final int? seed;
  /// A job that is already under way (the one for a room of the house).
  final RoomProject? project;
  /// Start with the boxes, cable and drywall already done, ready for the wiring.
  final bool quick;
  final bool practice;

  @override
  State<NgmyRoomProjectPage> createState() => _NgmyRoomProjectPageState();
}

class _NgmyRoomProjectPageState extends State<NgmyRoomProjectPage> {
  late RoomProject p;
  late int seed = widget.seed ?? DateTime.now().millisecondsSinceEpoch % 100000;
  final Cam3 cam = Cam3(yaw: -0.12, pitch: 0.4, dist: 205, target: const V3(0, -4, 28))
    ..maxDist = 300
    // Fixing a wall: you can look a little to each side and up and down, but never round behind the room or under the floor.
    ..yawRange = 0.7
    ..minPitch = 0.05;
  late Scene3D scene;
  final Stopwatch clock = Stopwatch()..start();
  final Map<int, double> fxUntil = {};
  int phase = 0;
  String armed = '';
  int active = -1;
  int hl = 0;
  String chip = '';
  String? msg;
  bool good = false;
  bool behind = false;
  bool flash = false;
  bool doneShown = false;
  Timer? _msgTimer;

  double get now => clock.elapsedMilliseconds / 1000;

  @override
  void initState() {
    super.initState();
    p = widget.project ?? RoomProject(seed: seed, practice: widget.practice);
    if (widget.project != null && p.drywallDone) phase = 2;
    if (widget.quick) {
      p.fastForward();
      phase = 2;
    }
    scene = buildRoomScene(p, _view());
    cam.yawCenter = 0;
    cam.yawRange = 1.1;
  }

  @override
  void dispose() {
    _msgTimer?.cancel();
    super.dispose();
  }

  RoomView _view() => RoomView(armed: armed, active: active, hints: false, labels: false);

  void _rebuild() {
    scene = buildRoomScene(p, _view());
  }

  void _say(String t, {bool ok = false}) {
    _msgTimer?.cancel();
    setState(() {
      msg = t;
      good = ok;
    });
    _msgTimer = Timer(const Duration(seconds: 10), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _apply(Act a) {
    if (a.ok) {
      conGood();
    } else {
      conBad();
    }
    if (a.fx == 'shock') {
      HapticFeedback.heavyImpact();
      setState(() => flash = true);
      Future.delayed(const Duration(milliseconds: 450), () {
        if (mounted) setState(() => flash = false);
      });
    }
    if (a.fx == 'burn' || a.fx == 'trip') {
      for (final s in p.burnt) {
        fxUntil[s] = now + 3.5;
      }
      HapticFeedback.heavyImpact();
      conBeep(150, ms: 300, wave: 'noise', volume: 0.5);
    }
    _rebuild();
    _say(a.msg, ok: a.ok && !a.danger);
    if (p.failed && mounted) {
      WidgetsBinding.instance.addPostFrameCallback((_) => _failed());
    }
    if (p.devicesDone && !doneShown) {
      doneShown = true;
      WidgetsBinding.instance.addPostFrameCallback((_) => _complete());
    }
  }

  // ── Camera ──

  void _roomView() {
    cam.glideTo(target: const V3(0, -4, 28), dist: 205, yaw: behind ? math.pi : -0.12, pitch: 0.4);
  }

  void _front() {
    behind = false;
    cam.setFree(false);
    cam.yawCenter = 0;
    setState(() => active = -1);
    _rebuild();
    cam.glideTo(target: const V3(0, -4, 28), dist: 205, yaw: -0.12, pitch: 0.4);
  }

  void _behind() {
    behind = true;
    cam.setFree(true);
    setState(() => active = -1);
    _rebuild();
    cam.glideTo(target: const V3(0, -4, -20), dist: 190, yaw: math.pi, pitch: 0.3);
  }

  void _open(int slot) {
    final s = slotById(slot);
    cam.setFree(false);
    cam.yawCenter = 0;
    setState(() {
      active = slot;
      chip = '';
      armed = '';
      behind = false;
    });
    _rebuild();
    final at = slotPoint(s, const V3(0, 0, 3));
    cam.glideTo(target: at, dist: s.ceiling ? 22 : 15, yaw: 0.3, pitch: s.ceiling ? -0.8 : 0.26);
  }

  void _leave() {
    setState(() {
      active = -1;
      chip = '';
    });
    _rebuild();
    _roomView();
  }

  // ── Picking ──

  void _pick(int id) {
    // The view never jumps because of a tap that missed: only the buttons move it.
    if (id == 0) {
      if (active < 0) setState(() => hl = 0);
      return;
    }
    if (active >= 0 && !(id >= idBenchBase && id < idBenchBase + 700)) return;
    // Parts of the device you are working on.
    if (id >= idBenchBase && id < idBenchBase + 700) {
      final slot = (id - idBenchBase) ~/ 100;
      // Tapping a device you already put in, from the room, opens it again.
      if (active != slot) {
        if (armed == 'tester') {
          _tester(slot);
        } else {
          setState(() => armed = '');
          _open(slot);
        }
        return;
      }
      _pickBench(slot, (id - idBenchBase) % 100);
      return;
    }
    if (id >= idStudBase && id < idStudBase + 10) {
      if (armed == 'drill') {
        _apply(p.drillStud(id - idStudBase));
        return;
      }
    }
    if (id >= idSlotBase && id < idSlotBase + 7) {
      _pickSlot(id - idSlotBase);
      return;
    }
    if (id >= idDevBase && id < idDevBase + 7) {
      _pickDevice(id - idDevBase);
      return;
    }
    if (id >= idEdgeBase && id < idEdgeBase + 5) {
      if (armed == 'sheet') _apply(p.hangSheet(kSheetEdges[id - idEdgeBase]));
      return;
    }
    if (id >= idSheetBase && id < idSheetBase + 3) {
      final e = kGoodSheetEdges[id - idSheetBase];
      if (armed == 'paint') {
        _apply(p.paintSheet(e));
        return;
      }
    }
    if (id >= idSeamBase && id < idSeamBase + 2) {
      final i = id - idSeamBase;
      switch (armed) {
        case 'tape':
          _apply(p.tapeSeam(i));
          return;
        case 'mud':
          _apply(p.mudSeam(i));
          return;
        case 'sand':
          _apply(p.sandSeam(i));
          return;
      }
    }
    if (id >= idScrewBase && id < idScrewBase + 100) {
      if (armed == 'screw') _apply(p.screw((id - idScrewBase) ~/ 10, (id - idScrewBase) % 10));
      return;
    }
    if (id >= idBetweenBase && id < idBetweenBase + 100) {
      if (armed == 'screw') _apply(p.screw((id - idBetweenBase) ~/ 10, (id - idBetweenBase) % 10, betweenStuds: true));
      return;
    }
    if (id == idPanelObj) {
      _apply(p.toggleBreaker());
      return;
    }
    if (id >= idAppBase && id < idAppBase + 7) {
      final slot = id - idAppBase;
      // A TV opens full screen with the NGMY ads; the Unplug tool pulls any plug.
      if (p.plugged[slot] == 'tv' && armed != 'unplug') {
        showNgmyTvScreen(context, kind: 'tv', title: 'Samsung Neo QLED 8K', stayFor: const Duration(hours: 1), showBoot: true);
        return;
      }
      _apply(p.unplug(slot));
      return;
    }
    // The room itself (floor, walls, studs, sofa) does nothing, unless the Look tool is in your hand.
    if (armed == 'look') {
      final info = scene.info[id];
      if (info != null) {
        setState(() => hl = id);
        _say('${info.name}: ${info.about}', ok: true);
      }
    }
  }

  void _pickSlot(int slot) {
    if (p.devs.containsKey(slot) && armed != 'tester' && armed != 'look' && !kAppliances.contains(armed)) {
      setState(() => armed = '');
      _open(slot);
      return;
    }
    switch (armed) {
      case 'wall':
      case 'ceiling':
      case 'fanbox':
        _apply(p.mountBox(slot, armed == 'fanbox' ? 'fan' : armed));
        return;
      case 'cable':
        _apply(p.pullCable(slot));
        return;
      case 'knife':
        _apply(p.cutOpening(slot));
        return;
      case 'outlet':
      case 'gfci':
      case 'switch':
      case 'light':
      case 'fan':
        final a = p.installDevice(slot, armed);
        _apply(a);
        if (a.ok) {
          final d = p.devs[slot]!;
          d.w.labels = !p.practice;
          armed = '';
          _open(slot);
        }
        return;
      case 'tester':
        _tester(slot);
        return;
    }
    if (p.devs.containsKey(slot)) {
      _open(slot);
      return;
    }
    final info = scene.info[idSlotBase + slot];
    if (info != null) {
      setState(() => hl = idSlotBase + slot);
      _say('${info.name}: ${info.about}', ok: true);
    }
  }

  void _tester(int slot) {
    final live = p.power && p.boxes.containsKey(slot) && p.cabled.contains(slot);
    _say(live ? 'The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.' : 'The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)', ok: !live);
    conBeep(live ? 1400 : 500, ms: 120);
  }

  void _pickDevice(int slot) {
    final d = p.devs[slot];
    if (d == null) return;
    if (kAppliances.contains(armed)) {
      _apply(p.plug(slot, armed));
      return;
    }
    if (armed == 'tester') {
      _tester(slot);
      return;
    }
    if (armed == 'flip') {
      if (d.kind == 'switch' && d.w.stage >= 2) {
        _apply(p.flipSwitch(slot));
      } else {
        _say('Only a finished switch can be flipped.');
      }
      return;
    }
    // Any device you already put in can be opened again to change it or pull it out.
    setState(() => armed = '');
    _open(slot);
  }

  void _pickBench(int slot, int local) {
    final d = p.devs[slot];
    if (d == null) return;
    final lesson = electricalLesson(d.kind);
    final hook = lesson.hookups.where((h) => h.id == local).toList();
    final key = wireKeyForId(d.kind, local);
    if (key != null && d.w.attached.containsValue(key) && d.w.stage == 0) {
      _apply(p.unfasten(slot, key));
      return;
    }
    if (hook.isNotEmpty && d.w.stage == 0) {
      if (chip.isEmpty) {
        _say('Pick a wire below first, then tap ${hook.first.name}.');
        setState(() => hl = benchId(slot, local));
        return;
      }
      final a = p.fasten(slot, chip, local);
      _apply(a);
      if (a.ok) {
        setState(() {
          chip = '';
          hl = 0;
        });
      }
      return;
    }
    final info = scene.info[benchId(slot, local)];
    if (info != null) {
      setState(() => hl = benchId(slot, local));
      _say('${info.name}: ${info.about}', ok: true);
    }
  }


  /// The places the thing in your hand can go, as buttons, so nobody has to hit a tiny glowing marker.
  List<(int, String)> _spots() {
    final out = <(int, String)>[];
    for (final s in kSlots) {
      final has = p.devs.containsKey(s.id);
      final ok = switch (armed) {
        'wall' => !s.ceiling && !p.boxes.containsKey(s.id),
        'ceiling' || 'fanbox' => s.ceiling && !p.boxes.containsKey(s.id),
        'cable' => p.boxes.containsKey(s.id) && !p.cabled.contains(s.id),
        'knife' => !s.ceiling && p.boxes.containsKey(s.id),
        'outlet' || 'gfci' || 'switch' => !s.ceiling && p.boxes.containsKey(s.id) && !has,
        'light' || 'fan' => s.ceiling && p.boxes.containsKey(s.id) && !has,
        'tv' || 'lamp' || 'toaster' || 'hairdryer' => has && (p.devs[s.id]!.kind == 'outlet' || p.devs[s.id]!.kind == 'gfci'),
        'tester' => p.boxes.containsKey(s.id),
        _ => false,
      };
      if (ok) out.add((s.id, s.name));
    }
    return out;
  }

  Widget _spotButtons() {
    final spots = _spots();
    if (spots.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: 6),
      child: Wrap(spacing: 6, runSpacing: 6, children: [
        for (final (id, name) in spots)
          GestureDetector(
            onTap: () {
              if (kAppliances.contains(armed)) {
                _pickDevice(id);
              } else {
                _pickSlot(id);
              }
            },
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 9),
              decoration: BoxDecoration(color: const Color(0xFF0E7490).withValues(alpha: 0.35), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFF67E8F9))),
              child: Text('📍 $name',style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
            ),
          ),
      ]),
    );
  }

  // ── The end of a job ──

  void _failed() {
    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Job over', style: TextStyle(color: Color(0xFFF87171), fontWeight: FontWeight.w900)),
        content: const Text('You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.', style: TextStyle(color: Colors.white70, height: 1.4)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Look around')),
          FilledButton(
            onPressed: () {
              Navigator.pop(ctx);
              _newJob(sameSeed: true);
            },
            child: const Text('Try again'),
          ),
        ],
      ),
    );
  }

  void _complete() {
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Job complete! 🎉', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900)),
        content: Text('The ${p.roomName.toLowerCase()} is built, wired, painted and tested.\n\nMistakes: ${p.mistakes}\nShocks: ${p.shocks}\nLives left: ${p.lives}\n\nEvery job is a little different. Ready for another one?', style: const TextStyle(color: Colors.white70, height: 1.45)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Stay in the room')),
          FilledButton(
            onPressed: () {
              Navigator.pop(ctx);
              _newJob();
            },
            child: const Text('New job'),
          ),
        ],
      ),
    );
  }

  void _newJob({bool sameSeed = false}) {
    setState(() {
      if (!sameSeed) seed = DateTime.now().millisecondsSinceEpoch % 100000;
      p = RoomProject(seed: seed, practice: p.practice);
      phase = 0;
      armed = '';
      active = -1;
      chip = '';
      hl = 0;
      doneShown = false;
      fxUntil.clear();
      msg = null;
      _rebuild();
    });
    _front();
  }

  // ── What to do next (learn mode) ──

  String _next() {
    if (p.failed) return 'The job is over.';
    String names(Iterable<int> ids) => ids.map((i) => slotById(i).name).join(', ');
    switch (phase) {
      case 0:
        final noBox = p.orders.where((o) => !p.boxes.containsKey(o.slot)).toList();
        if (noBox.isNotEmpty) {
          final o = noBox.first;
          final s = slotById(o.slot);
          return 'Mount a box at ${s.name} (${o.device == 'gfci' ? 'a GFCI' : o.device} goes here): pick a ${s.ceiling ? (s.role == 'fan' ? 'fan box' : 'ceiling box') : 'wall box'}, then tap the glowing spot.';
        }
        final noCable = p.orders.where((o) => !p.cabled.contains(o.slot)).toList();
        if (noCable.isNotEmpty) {
          final s = noCable.first.slot;
          final miss = p.studsBetween(s).where((i) => !p.holes.contains(i)).length;
          return miss > 0 ? 'The cable comes from the panel on the right. Pick the drill and tap each stud on the way to ${slotById(s).name} ($miss left).' : 'Pick the cable roll and tap ${slotById(s).name}.';
        }
        return 'Rough-in done! Open 2 Drywall.';
      case 1:
        if (!p.roughDone) return 'Finish the rough-in first (tab 1). Drywall hides the wires.';
        if (!p.allHung) return 'Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall.';
        if (!p.allCut) return 'Pick the drywall saw and tap each box to cut its opening.';
        if (!p.allScrewed) return 'Pick the screw gun and put a screw in every glowing spot on the studs.';
        if (p.seams.any((s) => !s.taped)) return 'Pick the tape and tap each seam between two sheets.';
        if (p.seams.any((s) => s.coats < 3)) return p.seams.any((s) => !s.dry) ? 'The mud is wet. Press "Let it dry", then the next coat.' : 'Pick the mud and tap each seam. It needs three coats, with drying in between.';
        if (p.seams.any((s) => !s.sanded)) return p.seams.any((s) => !s.dry) ? 'Press "Let it dry", then sand.' : 'Pick the sander and tap each seam.';
        if (!p.drywallDone) return 'Pick the roller and paint each sheet.';
        return 'Drywall done! Open 3 Devices.';
      default:
        if (!p.drywallDone) return 'Finish the drywall first (tab 2).';
        final todo = p.orders.where((o) => p.devs[o.slot]?.kind != o.device).toList();
        if (todo.isNotEmpty) {
          final o = todo.first;
          return 'Pick the ${o.device == 'gfci' ? 'GFCI' : o.device} and tap ${slotById(o.slot).name}. (${names(todo.map((e) => e.slot))} still need a device.)';
        }
        final unfinished = p.orders.where((o) => (p.devs[o.slot]?.w.stage ?? 0) < 2).toList();
        if (unfinished.isNotEmpty) return 'Tap ${slotById(unfinished.first.slot).name} to work on it: breaker OFF, wires, push in, cover on.';
        if (!p.breaker) return 'Turn the breaker ON (tap the panel or the breaker button) and test.';
        final out = p.orders.where((o) => (o.device == 'outlet' || o.device == 'gfci') && p.devs[o.slot]?.tested != true).toList();
        if (out.isNotEmpty) return 'Pick the TV or the lamp and plug it into ${slotById(out.first.slot).name} to test it.';
        return 'Flip the wall switch to test the ${p.orders.any((o) => o.device == 'fan') ? 'fan' : 'light'}.';
    }
  }

  @override
  Widget build(BuildContext context) {
    final tray = _trays[phase];
    final d = active >= 0 ? p.devs[active] : null;
    final lesson = d == null ? null : electricalLesson(d.kind);
    final stageText = 'Phase ${phase + 1}/3';
    return Stack(children: [
      LessonScaffold(
        title: '${p.roomName} job',
        color: kConAmber,
        stepText: stageText,
        onSteps: () => _orders(context),
        stage: Stage3D(
          scene: scene,
          cam: cam,
          highlight: hl,
          onPick: _pick,
          onHome: () {
            if (active >= 0) {
              _leave();
            } else {
              setState(() => hl = 0);
              _roomView();
            }
          },
          message: msg,
          good: good,
          info: hl != 0 ? scene.info[hl] : null,
          dynamicPolys: (_) => roomDynamic(p, now, fxUntil),
          topLeft: [
            Row(mainAxisSize: MainAxisSize.min, children: [
              for (var i = 0; i < 3; i++) Padding(padding: const EdgeInsets.only(right: 3), child: Text(i < p.lives ? '❤️' : '🖤', style: const TextStyle(fontSize: 18))),
              const SizedBox(width: 6),
              GestureDetector(
                onTap: () => _apply(p.toggleBreaker()),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
                  decoration: BoxDecoration(color: (p.tripped ? const Color(0xFF9A3412) : (p.power ? const Color(0xFF7F1D1D) : const Color(0xFF14532D))).withValues(alpha: 0.95), borderRadius: BorderRadius.circular(16), border: Border.all(color: p.tripped ? const Color(0xFFFB923C) : (p.power ? const Color(0xFFF87171) : const Color(0xFF4ADE80)), width: 1.4)),
                  child: Text(p.tripped ? 'TRIPPED: tap to reset' : (p.power ? 'Breaker ON' : 'Breaker OFF'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11.5)),
                ),
              ),
            ]),
          ],
          topRight: [
            conPill(behind ? 'In front' : 'Behind the wall', on: behind, icon: behind ? Icons.flip_to_front_rounded : Icons.flip_to_back_rounded, color: const Color(0xFFA78BFA), onTap: behind ? _front : _behind),
            const SizedBox(height: 6),
            if (d != null) ...[
              conPill('Labels', on: d.w.labels, icon: Icons.label_rounded, color: const Color(0xFF38BDF8), onTap: () => setState(() {
                    d.w.labels = !d.w.labels;
                    _rebuild();
                  })),
              const SizedBox(height: 6),
              conPill('Hints', on: d.w.hints, icon: Icons.lightbulb_rounded, onTap: () => setState(() {
                    d.w.hints = !d.w.hints;
                    _rebuild();
                  })),
              const SizedBox(height: 8),
            ],
          ],
        ),
        panel: Column(mainAxisSize: MainAxisSize.min, children: [
          if (d == null) ...[
            Row(children: [
              for (var i = 0; i < 3; i++)
                Expanded(
                  child: GestureDetector(
                    onTap: () => setState(() {
                      phase = i;
                      armed = '';
                      _rebuild();
                    }),
                    child: Container(
                      margin: EdgeInsets.only(right: i < 2 ? 6 : 0),
                      padding: const EdgeInsets.symmetric(vertical: 7),
                      decoration: BoxDecoration(color: phase == i ? kConAmber.withValues(alpha: 0.2) : Colors.white10, borderRadius: BorderRadius.circular(12), border: Border.all(color: phase == i ? kConAmber : Colors.white12)),
                      child: Center(child: Text('${(i == 0 ? p.roughDone : (i == 1 ? p.drywallDone : p.devicesDone)) ? '✅ ' : ''}${kPhaseNames[i]}', style: TextStyle(color: phase == i ? kConAmber : Colors.white70, fontWeight: FontWeight.w900, fontSize: 12))),
                    ),
                  ),
                ),
            ]),
            const SizedBox(height: 6),
            if (!p.practice)
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(color: const Color(0xFF38BDF8).withValues(alpha: 0.1), borderRadius: BorderRadius.circular(10), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.4))),
                child: Text('👉 ${_next()}', maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFFBAE6FD), fontSize: 11.5, height: 1.25, fontWeight: FontWeight.w700)),
              )
            else
              const Text('Practice mode: no hints. You will only hear from me when something is wrong.', style: TextStyle(color: Colors.white38, fontSize: 11.5)),
            const SizedBox(height: 6),
            SizedBox(
              height: 52,
              child: ListView(scrollDirection: Axis.horizontal, children: [
                if (phase < 2 && !p.drywallDone)
                  Padding(
                    padding: const EdgeInsets.only(right: 7),
                    child: GestureDetector(
                      onTap: () => setState(() {
                        p.fastForward();
                        phase = 2;
                        armed = '';
                        _rebuild();
                        _say('The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.', ok: true);
                      }),
                      child: Container(padding: const EdgeInsets.symmetric(horizontal: 12), decoration: BoxDecoration(color: const Color(0xFF1D4ED8), borderRadius: BorderRadius.circular(14)), child: const Center(child: Text('⏩ Skip to the wiring', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5)))),
                    ),
                  ),
                for (final it in tray)
                  Padding(
                    padding: const EdgeInsets.only(right: 7),
                    child: GestureDetector(
                      onTap: () => setState(() {
                        armed = armed == it.key ? '' : it.key;
                        hl = 0;
                        _rebuild();
                        if (armed.isNotEmpty) _roomHint(it.key);
                      }),
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12),
                        decoration: BoxDecoration(color: armed == it.key ? kConAmber.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: armed == it.key ? kConAmber : Colors.white24, width: armed == it.key ? 2 : 1)),
                        child: Row(children: [Icon(it.icon, size: 19, color: armed == it.key ? kConAmber : Colors.white70), const SizedBox(width: 6), Text(it.label, style: TextStyle(color: armed == it.key ? kConAmber : Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5))]),
                      ),
                    ),
                  ),
                if (phase == 1)
                  Padding(
                    padding: const EdgeInsets.only(right: 7),
                    child: GestureDetector(
                      onTap: () => _apply(p.letDry()),
                      child: Container(padding: const EdgeInsets.symmetric(horizontal: 12), decoration: BoxDecoration(color: const Color(0xFF14532D), borderRadius: BorderRadius.circular(14)), child: const Center(child: Text('☀️ Let it dry', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5)))),
                    ),
                  ),
              ]),
            ),
            if (armed.isNotEmpty) _spotButtons(),
          ] else ...[
            Wrap(spacing: 8, runSpacing: 6, children: [
              if (d.w.stage == 0)
                for (final c in lesson!.chips.where((c) => !d.w.attached.containsValue(c.key)))
                  GestureDetector(
                    onTap: () => setState(() {
                      if (d.w.attached.containsValue(c.key)) {
                        _say('That wire is already fastened. Tap the wire in the 3D view to take it off.');
                        return;
                      }
                      chip = chip == c.key ? '' : c.key;
                      if (chip.isNotEmpty) {
                        _say('${c.label}: now tap the screw it belongs on, or press the matching button below.', ok: true);
                      }
                    }),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
                      decoration: BoxDecoration(color: c.color, borderRadius: BorderRadius.circular(14), border: Border.all(color: chip == c.key ? const Color(0xFF67E8F9) : Colors.white24, width: chip == c.key ? 3 : 1)),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [
                        if (d.w.attached.containsValue(c.key)) Padding(padding: const EdgeInsets.only(right: 5), child: Icon(Icons.check_circle_rounded, size: 17, color: c.ink)),
                        Text(c.label, style: TextStyle(color: c.ink, fontWeight: FontWeight.w900, fontSize: 12.5)),
                      ]),
                    ),
                  ),
            ]),
            if (d.w.stage == 0 && chip.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Wrap(spacing: 6, runSpacing: 6, children: [
                  for (final hk in lesson!.hookups.where((hk) => !d.w.attached.containsKey(hk.id)))
                    GestureDetector(
                      onTap: () => _pickBench(active, hk.id),
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 9),
                        decoration: BoxDecoration(color: const Color(0xFF0E7490).withValues(alpha: 0.35), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFF67E8F9))),
                        child: Text('➜ ${hk.name}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                      ),
                    ),
                ]),
              ),
            const SizedBox(height: 8),
            Row(children: [
              conBigButton('Back to the room', Icons.arrow_back_rounded, _leave, color: Colors.white70),
              const SizedBox(width: 8),
              if (d.w.stage == 0) conBigButton(wiringComplete(lesson!, d.w) ? 'Push it into the box' : 'Fasten every wire', Icons.move_down_rounded, wiringComplete(lesson, d.w) ? () => _apply(p.pushIn(active)) : null),
              if (d.w.stage == 1) ...[
                conBigButton('Pull it out', Icons.undo_rounded, () => _apply(p.pullOut(active)), color: Colors.white70),
                const SizedBox(width: 8),
                conBigButton('Cover on', Icons.crop_square_rounded, () => _apply(p.coverOn(active))),
              ],
              if (d.w.stage >= 2) conBigButton(d.w.burnt ? 'Take out the burnt one' : 'Pull it out again', Icons.eject_rounded, () {
                    final a = p.removeDevice(active);
                    _apply(a);
                    if (a.ok) _leave();
                  }, color: d.w.burnt ? const Color(0xFFF87171) : Colors.white70),
            ]),
          ],
        ]),
      ),
      if (flash) Positioned.fill(child: IgnorePointer(child: Container(color: const Color(0xAAFF2A1A)))),
    ]);
  }

  void _roomHint(String key) {
    if (p.practice) return;
    final text = switch (key) {
      'wall' || 'ceiling' || 'fanbox' => 'Tap one of the glowing spots to mount the box there.',
      'drill' => 'Tap a stud to drill a hole through it.',
      'cable' => 'Tap a box that has no cable yet. The cable runs from the panel on the right.',
      'sheet' => 'Tap a glowing stud edge to hang the sheet there.',
      'knife' => 'Tap an orange box outline to cut the opening.',
      'screw' => 'Tap the glowing dots on the studs. The lighter dots between studs are a trap.',
      'tape' || 'mud' || 'sand' => 'Tap a seam between two sheets.',
      'paint' => 'Tap a sheet to paint it.',
      'look' => 'Tap anything to read what it is.',
      'flip' => 'Tap a finished switch to turn the light or the fan on and off.',
      'unplug' => 'Tap whatever is plugged in to pull the plug.',
      'tester' => 'Tap a box or a device to test it for power.',
      'tv' || 'lamp' || 'toaster' || 'hairdryer' => 'Tap a finished outlet to plug it in.',
      _ => 'Tap a glowing box to put it there.',
    };
    _say(text, ok: true);
  }

  Future<void> _orders(BuildContext context) {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        return SafeArea(
          child: ConstrainedBox(
            constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.8),
            child: ListView(shrinkWrap: true, padding: const EdgeInsets.fromLTRB(16, 16, 16, 16), children: [
              Text('Job: ${p.roomName}', style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
              const SizedBox(height: 4),
              Text('Mistakes ${p.mistakes} · Shocks ${p.shocks} · Lives ${p.lives}', style: const TextStyle(color: kConAmber, fontWeight: FontWeight.w800, fontSize: 12.5)),
              const SizedBox(height: 10),
              const Text('The customer wants:', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w800)),
              const SizedBox(height: 6),
              for (final o in p.orders)
                Container(
                  margin: const EdgeInsets.only(bottom: 6),
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white12)),
                  child: Text('${p.devs[o.slot]?.w.stage == 2 ? '✅' : '⬜'} ${o.device == 'gfci' ? 'A GFCI outlet' : (o.device == 'outlet' ? 'An outlet' : (o.device == 'switch' ? 'A light switch' : (o.device == 'light' ? 'A ceiling light' : 'A ceiling fan')))} at ${slotById(o.slot).name}${o.controlledBy != null ? ', turned on by ${slotById(o.controlledBy!).name}' : ''}', style: const TextStyle(color: Colors.white, fontSize: 13)),
                ),
              const SizedBox(height: 10),
              Row(children: [
                const Expanded(child: Text('Practice mode (no hints, real shocks and fires)', style: TextStyle(color: Colors.white70, fontSize: 12.5, fontWeight: FontWeight.w700))),
                Switch(
                  value: p.practice,
                  onChanged: (v) {
                    p.practice = v;
                    for (final dv in p.devs.values) {
                      dv.w.practice = v;
                    }
                    set(() {});
                    setState(() {});
                  },
                ),
              ]),
              const SizedBox(height: 6),
              Row(children: [
                Expanded(child: OutlinedButton(onPressed: () {
                  Navigator.pop(ctx);
                  _newJob(sameSeed: true);
                }, child: const Text('Start this job again'))),
                const SizedBox(width: 8),
                Expanded(child: FilledButton(onPressed: () {
                  Navigator.pop(ctx);
                  _newJob();
                }, child: const Text('A different job'))),
              ]),
            ]),
          ),
        );
      }),
    );
  }
}
