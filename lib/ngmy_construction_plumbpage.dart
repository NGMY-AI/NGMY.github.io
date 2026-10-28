import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_construction_plumbjob.dart';
import 'ngmy_construction_project.dart' show Act;

// ═════════════════════════════════════════════════════════════════════════════
// PLUMBING JOB PAGE: pick a part (or the wrench, or your hand), then tap the place it goes.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyPlumbJobPage extends StatefulWidget {
  const NgmyPlumbJobPage({super.key, this.seed, this.practice = false, this.job});
  final int? seed;
  /// A job that is already under way (the one for a room of the house).
  final PlumbJob? job;
  final bool practice;

  @override
  State<NgmyPlumbJobPage> createState() => _NgmyPlumbJobPageState();
}

class _NgmyPlumbJobPageState extends State<NgmyPlumbJobPage> {
  late int seed = widget.seed ?? DateTime.now().millisecondsSinceEpoch % 100000;
  late PlumbJob job;
  final Cam3 cam = Cam3(yaw: -0.25, pitch: 0.4, dist: 135, target: const V3(-4, 22, 8))..maxDist = 200;
  late Scene3D scene;
  final Stopwatch clock = Stopwatch()..start();
  String armed = '';
  int hl = 0;
  String? msg;
  bool good = false;
  bool doneShown = false;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    job = widget.job ?? PlumbJob(seed: seed, practice: widget.practice);
    scene = buildPlumbJobScene(job, armed: armed, labels: !job.practice);
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _rebuild() => scene = buildPlumbJobScene(job, armed: armed, labels: !job.practice);

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
    cam.glideTo(target: const V3(-4, 22, 8), dist: 135, yaw: -0.25, pitch: 0.4);
    setState(() => hl = 0);
  }

  /// The job step that an object number belongs to, or null.
  String? _stepOf(int id) {
    final n = job.steps.length;
    if (id >= idPjBase && id < idPjBase + n) return job.steps[id - idPjBase].id;
    if (id >= idPjNut && id < idPjNut + 60) {
      final i = (id - idPjNut) ~/ 2;
      if (i < n) return job.steps[i].id;
    }
    if (id == idPjNut + 60) return 'trap';
    if (id == idPjNut + 61) return 'arm';
    return null;
  }

  Act _no(String m) {
    job.mistakes++;
    return Act(false, m);
  }

  void _pick(int id) => _act(id);

  void _spot(String what) {
    final id = switch (what) {
      'main' => idPjMain,
      _ => idPjBase + job.steps.indexWhere((s) => s.id == what),
    };
    _act(id);
  }

  List<(String, String)> _spots() {
    if (armed == 'hand') return [('main', 'Main water valve')];
    if (armed == 'wrench') return [for (final s in job.steps) if (job.placed.contains(s.id) && job.looseJoints(s.id) > 0) (s.id, s.label)];
    return [for (final s in job.steps) if (s.item == armed && !job.placed.contains(s.id)) (s.id, s.label)];
  }

  void _act(int id) {
    // A tap that missed never moves the view; only the buttons do.
    if (id == 0) return;
    final info = scene.info[id];
    if (armed.isEmpty) {
      setState(() => hl = id);
      if (info != null) {
        _say('${info.name}: ${info.about}', ok: true);
      }
      return;
    }
    final step = _stepOf(id);
    final Act a;
    if (armed == 'hand') {
      a = id == idPjMain ? job.toggleWater() : _no(job.practice ? 'Your hand is only for the main water valve.' : 'Your hand is for the main water valve. Parts are placed by picking them from the tray.');
    } else if (armed == 'wrench') {
      a = step == null ? _no(job.practice ? 'Nothing to tighten.' : 'There is nothing to tighten there.') : job.tighten(step);
    } else if (step == null) {
      a = _no(job.practice ? 'Not there.' : 'That does not go there. Tap one of the glowing spots.');
    } else {
      a = job.place(armed, step);
    }
    if (a.ok) {
      conGood();
    } else {
      conBad();
    }
    setState(() {
      _rebuild();
      hl = id;
    });
    _say(a.msg, ok: a.ok && !a.danger);
    if (job.done && !doneShown) {
      doneShown = true;
      WidgetsBinding.instance.addPostFrameCallback((_) => _done());
    }
  }

  void _done() {
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Job done! 🎉', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900)),
        content: Text('The ${job.variant.title.toLowerCase()} is finished and nothing leaks.\n\nMistakes: ${job.mistakes}\n\nThe next job is different.', style: const TextStyle(color: Colors.white70, height: 1.45)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Stay')),
          FilledButton(onPressed: () {
            Navigator.pop(ctx);
            _newJob();
          }, child: const Text('Next job')),
        ],
      ),
    );
  }

  void _newJob() {
    setState(() {
      seed = DateTime.now().millisecondsSinceEpoch % 100000;
      job = PlumbJob(seed: seed, practice: job.practice);
      armed = '';
      doneShown = false;
      msg = null;
      hl = 0;
      _rebuild();
    });
    _home();
  }

  /// The parts this job needs, and nothing else (a kitchen has no toilet to fit).
  List<String> get _tray => [for (final k in kPlumbItems) if (job.steps.any((s) => s.item == k)) k];

  PStep? _nextStep() {
    for (final s in job.steps) {
      if (!job.placed.contains(s.id) && s.prereq.every(job.placed.contains)) return s;
    }
    return null;
  }

  /// What to do next, in plain words, as (what to say, the tool to pick up, the step to look at).
  (String, String, String?) _guide() {
    if (job.leaking.isNotEmpty) {
      final loose = job.steps.where((s) => job.leaking.contains(s.id)).map((s) => s.label.toLowerCase()).join(', ');
      if (job.waterOn) return ('💧 Water is leaking at: $loose. First turn the main water OFF: pick Hand and tap the main valve.', 'hand', 'main');
      return ('💧 It leaked at: $loose. Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.', 'wrench', job.leaking.first);
    }
    if (!job.allPlaced) {
      final n = _nextStep();
      if (n == null) return ('Fit the parts in the order of the job list.', '', null);
      if (n.waterOff && job.waterOn) return ('The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.', 'hand', 'main');
      return ('Next: pick ${kPlumbItemNames[n.item] ?? n.item} from the tray, then tap ${n.label.toLowerCase()} (the glowing spot). ${n.why}', n.item, n.id);
    }
    final loose = job.steps.where((s) => job.looseJoints(s.id) > 0).toList();
    if (loose.isNotEmpty) return ('Everything is fitted. Now tighten each joint: pick the Wrench and tap ${loose.first.label.toLowerCase()}.', 'wrench', loose.first.id);
    if (!job.waterOn) return ('Turn the main water ON to test for leaks: pick Hand and tap the main valve.', 'hand', 'main');
    return ('Looks good. Watch for leaks; if none, the job is done.', '', null);
  }

  /// "Show me": picks up the right tool and turns the view to where it goes.
  void _showMe() {
    final (text, tool, spot) = _guide();
    setState(() {
      armed = tool;
      _rebuild();
    });
    if (spot != null) {
      final id = spot == 'main' ? idPjMain : idPjBase + job.steps.indexWhere((s) => s.id == spot);
      final info = scene.info[id];
      if (info != null) cam.glideTo(target: info.focus, dist: 70, yaw: -0.2, pitch: 0.3);
      setState(() => hl = id);
    }
    _say(text, ok: true);
  }

  Widget _chip(String key, String label, IconData icon) {
    final on = armed == key;
    return Padding(
      padding: const EdgeInsets.only(right: 7),
      child: GestureDetector(
        onTap: () => setState(() {
          armed = on ? '' : key;
          _rebuild();
        }),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12),
          decoration: BoxDecoration(color: on ? kConAmber.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: on ? kConAmber : Colors.white24, width: on ? 2 : 1)),
          child: Row(children: [Icon(icon, size: 19, color: on ? kConAmber : Colors.white70), const SizedBox(width: 6), Text(label, style: TextStyle(color: on ? kConAmber : Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5))]),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final placed = job.steps.where((s) => job.placed.contains(s.id)).length;
    return LessonScaffold(
      title: 'Plumbing job: ${job.variant.title}',
      color: const Color(0xFF38BDF8),
      stepText: '$placed/${job.steps.length} fitted',
      onSteps: () => _list(context),
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
        dynamicPolys: (_) => plumbJobWater(job, clock.elapsedMilliseconds / 1000),
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        if (!job.practice)
          Container(
            width: double.infinity,
            margin: const EdgeInsets.only(bottom: 6),
            padding: const EdgeInsets.fromLTRB(10, 8, 6, 8),
            decoration: BoxDecoration(color: const Color(0xFF38BDF8).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.6))),
            child: Row(children: [
              Expanded(child: Text('👉 ${_guide().$1}', maxLines: 4, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFFBAE6FD), fontSize: 12, height: 1.3, fontWeight: FontWeight.w700))),
              const SizedBox(width: 6),
              FilledButton(onPressed: _showMe, style: FilledButton.styleFrom(padding: const EdgeInsets.symmetric(horizontal: 10), minimumSize: const Size(0, 36)), child: const Text('Show me', style: TextStyle(fontSize: 12))),
            ]),
          ),
        if (armed.isNotEmpty && _spots().isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Wrap(spacing: 6, runSpacing: 6, children: [
              for (final (id, name) in _spots())
                GestureDetector(
                  onTap: () => _spot(id),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 9),
                    decoration: BoxDecoration(color: const Color(0xFF0E7490).withValues(alpha: 0.35), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFF67E8F9))),
                    child: Text('📍 $name', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                  ),
                ),
            ]),
          ),
        Align(
          alignment: Alignment.centerLeft,
          child: Text(job.practice ? 'Practice mode: no hints. Build it in the right order.' : (job.allPlaced ? 'Everything is fitted. Tighten every joint, then turn the main water on to test.' : 'Job: ${job.variant.blurb}'), maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.3, fontWeight: FontWeight.w700)),
        ),
        const SizedBox(height: 8),
        SizedBox(
          height: 52,
          child: ListView(scrollDirection: Axis.horizontal, children: [
            _chip('hand', 'Hand', Icons.back_hand_rounded),
            _chip('wrench', 'Wrench', Icons.build_rounded),
            for (final k in _tray) _chip(k, kPlumbItemNames[k]!, Icons.plumbing_rounded),
          ]),
        ),
      ]),
    );
  }

  Future<void> _list(BuildContext context) {
    return showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => SafeArea(
        child: ListView(shrinkWrap: true, padding: const EdgeInsets.all(16), children: [
          const Text('The job', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
          const SizedBox(height: 4),
          Text('Mistakes ${job.mistakes}', style: const TextStyle(color: kConAmber, fontWeight: FontWeight.w800, fontSize: 12.5)),
          const SizedBox(height: 10),
          for (final s in job.steps)
            Container(
              margin: const EdgeInsets.only(bottom: 6),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(12)),
              child: Text('${job.placed.contains(s.id) ? '✅' : '🔧'} ${s.label}', style: const TextStyle(color: Colors.white, fontSize: 13.5)),
            ),
          const SizedBox(height: 6),
          const Text('Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.', style: TextStyle(color: Colors.white54, fontSize: 12.5, height: 1.4)),
          const SizedBox(height: 8),
          Row(children: [
            const Expanded(child: Text('Practice mode (no hints, no labels)', style: TextStyle(color: Colors.white70, fontSize: 12.5, fontWeight: FontWeight.w700))),
            Switch(value: job.practice, onChanged: (v) {
              setState(() {
                job.practice = v;
                _rebuild();
              });
              Navigator.pop(ctx);
            }),
          ]),
          FilledButton(onPressed: () {
            Navigator.pop(ctx);
            _newJob();
          }, child: const Text('A different job')),
        ]),
      ),
    );
  }
}
