import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_house.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_construction_service.dart';

// ═════════════════════════════════════════════════════════════════════════════
// SERVICE CALL PAGE: the customer's list of problems, a toolbox, and the 3D house.
// ═════════════════════════════════════════════════════════════════════════════

const Map<String, IconData> _toolIcons = {
  'inspect': Icons.search_rounded,
  'hand': Icons.back_hand_rounded,
  'screwdriver': Icons.hardware_rounded,
  'pliers': Icons.content_cut_rounded,
  'wrench': Icons.build_rounded,
  'crimper': Icons.compress_rounded,
  'plunger': Icons.vertical_align_bottom_rounded,
  'flapper': Icons.water_drop_rounded,
  'newoutlet': Icons.power_rounded,
  'patch': Icons.crop_square_rounded,
};

class NgmyServiceCallPage extends StatefulWidget {
  const NgmyServiceCallPage({super.key, this.seed, this.practice = false});
  final int? seed;
  final bool practice;

  @override
  State<NgmyServiceCallPage> createState() => _NgmyServiceCallPageState();
}

class _NgmyServiceCallPageState extends State<NgmyServiceCallPage> {
  late ServiceCall call;
  late int seed = widget.seed ?? DateTime.now().millisecondsSinceEpoch % 100000;
  final Cam3 cam = Cam3(yaw: -0.3, pitch: 0.48, dist: 46, target: const V3(0, 4, -2))..maxDist = 80;
  late Scene3D scene;
  final Stopwatch clock = Stopwatch()..start();
  String tool = 'inspect';
  int hl = 0;
  String? msg;
  bool good = false;
  bool flash = false;
  bool doneShown = false;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    call = ServiceCall(seed: seed, practice: widget.practice);
    scene = buildHouseScene(call.house);
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _say(String t, {bool ok = false}) {
    _t?.cancel();
    setState(() {
      msg = t;
      good = ok;
    });
    _t = Timer(const Duration(seconds: 10), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _home() {
    cam.glideTo(target: const V3(0, 4, -2), dist: 46, yaw: -0.3, pitch: 0.48);
    setState(() => hl = 0);
  }

  void _pick(int id) {
    if (id == 0) {
      _home();
      return;
    }
    final info = scene.info[id];
    final a = call.use(tool, id);
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
    setState(() {
      scene = buildHouseScene(call.house);
      hl = id;
    });
    _say(a.msg, ok: a.ok && !a.danger);
    if (info != null) cam.glideTo(target: info.focus, dist: info.dist);
    if (call.failed) {
      WidgetsBinding.instance.addPostFrameCallback((_) => _over());
    } else if (call.allFixed && !doneShown) {
      doneShown = true;
      WidgetsBinding.instance.addPostFrameCallback((_) => _done());
    }
  }

  void _over() {
    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Call over', style: TextStyle(color: Color(0xFFF87171), fontWeight: FontWeight.w900)),
        content: const Text('Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.', style: TextStyle(color: Colors.white70, height: 1.4)),
        actions: [FilledButton(onPressed: () {
          Navigator.pop(ctx);
          _newCall();
        }, child: const Text('New call'))],
      ),
    );
  }

  void _done() {
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('All fixed! 🎉', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900)),
        content: Text('Every problem on the customer\'s list is fixed.\n\nMistakes: ${call.mistakes}\nShocks: ${call.shocks}\nLives left: ${call.lives}\n\nThe next call will have different problems.', style: const TextStyle(color: Colors.white70, height: 1.45)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Stay')),
          FilledButton(onPressed: () {
            Navigator.pop(ctx);
            _newCall();
          }, child: const Text('Next call')),
        ],
      ),
    );
  }

  void _newCall() {
    setState(() {
      seed = DateTime.now().millisecondsSinceEpoch % 100000;
      call = ServiceCall(seed: seed, practice: call.practice);
      scene = buildHouseScene(call.house);
      doneShown = false;
      msg = null;
      hl = 0;
    });
    _home();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(children: [
      LessonScaffold(
        title: 'Service call',
        color: const Color(0xFF38BDF8),
        stepText: '${call.fixedCount}/${call.faults.length} fixed',
        onSteps: () => _ticket(context),
        stage: Stage3D(
          scene: scene,
          cam: cam,
          highlight: hl,
          onPick: _pick,
          onHome: _home,
          message: msg,
          good: good,
          info: hl != 0 ? scene.info[hl] : null,
          layerOn: (l) => l <= 5,
          dynamicPolys: (_) => houseWater(call.house, clock.elapsedMilliseconds / 1000),
          topLeft: [
            Row(mainAxisSize: MainAxisSize.min, children: [
              for (var i = 0; i < 3; i++) Padding(padding: const EdgeInsets.only(right: 3), child: Text(i < call.lives ? '❤️' : '🖤', style: const TextStyle(fontSize: 18))),
            ]),
          ],
        ),
        panel: Column(mainAxisSize: MainAxisSize.min, children: [
          Align(
            alignment: Alignment.centerLeft,
            child: Text('Customer: ${call.faults.where((f) => !f.fixed).map((f) => f.info.complaint).join('  ·  ').ifEmpty('All fixed!')}', maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.3, fontWeight: FontWeight.w700)),
          ),
          const SizedBox(height: 8),
          SizedBox(
            height: 52,
            child: ListView(scrollDirection: Axis.horizontal, children: [
              for (final k in kServiceTools)
                Padding(
                  padding: const EdgeInsets.only(right: 7),
                  child: GestureDetector(
                    onTap: () => setState(() => tool = k),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      decoration: BoxDecoration(color: tool == k ? kConAmber.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: tool == k ? kConAmber : Colors.white24, width: tool == k ? 2 : 1)),
                      child: Row(children: [Icon(_toolIcons[k], size: 19, color: tool == k ? kConAmber : Colors.white70), const SizedBox(width: 6), Text(kToolNames[k]!, style: TextStyle(color: tool == k ? kConAmber : Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5))]),
                    ),
                  ),
                ),
            ]),
          ),
        ]),
      ),
      if (flash) Positioned.fill(child: IgnorePointer(child: Container(color: const Color(0xAAFF2A1A)))),
    ]);
  }

  Future<void> _ticket(BuildContext context) {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        return SafeArea(
          child: ListView(shrinkWrap: true, padding: const EdgeInsets.fromLTRB(16, 16, 16, 16), children: [
            const Text('The customer says…', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 4),
            Text('Mistakes ${call.mistakes} · Shocks ${call.shocks} · Lives ${call.lives}', style: const TextStyle(color: kConAmber, fontWeight: FontWeight.w800, fontSize: 12.5)),
            const SizedBox(height: 10),
            for (final f in call.faults)
              Container(
                margin: const EdgeInsets.only(bottom: 8),
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(14), border: Border.all(color: f.fixed ? const Color(0xFF4ADE80).withValues(alpha: 0.6) : Colors.white12)),
                child: Text('${f.fixed ? '✅' : '🔧'} ${f.info.complaint}', style: TextStyle(color: f.fixed ? Colors.white54 : Colors.white, fontSize: 13.5)),
              ),
            const SizedBox(height: 6),
            const Text('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.', style: TextStyle(color: Colors.white54, fontSize: 12.5, height: 1.4)),
            const SizedBox(height: 8),
            Row(children: [
              const Expanded(child: Text('Practice mode (no explanations, real shocks)', style: TextStyle(color: Colors.white70, fontSize: 12.5, fontWeight: FontWeight.w700))),
              Switch(value: call.practice, onChanged: (v) {
                call.practice = v;
                set(() {});
              }),
            ]),
            FilledButton(onPressed: () {
              Navigator.pop(ctx);
              _newCall();
            }, child: const Text('A different call')),
          ]),
        );
      }),
    );
  }
}

extension on String {
  String ifEmpty(String other) => isEmpty ? other : this;
}
