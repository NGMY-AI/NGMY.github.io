import 'dart:async';
import 'ngmy_electrical_diagram_page.dart';
import 'ngmy_electrical_fx.dart';
import 'ngmy_electrical_safety.dart';
import 'ngmy_electrical_ui.dart';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_house.dart';
import 'ngmy_construction_plumbing.dart';
import 'ngmy_construction_projectpage.dart';
import 'ngmy_construction_servicepage.dart';
import 'ngmy_construction_communitypage.dart';
import 'ngmy_construction_homepage.dart';
import 'ngmy_construction_learn.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// CONSTRUCTION LAB: learn the trades on real looking 3D models. Wire an outlet, a switch and a GFCI,
// build a sink drain, connect a faucet, and walk through a whole house stage by stage.
// ═════════════════════════════════════════════════════════════════════════════

const Color kConBg = Color(0xFF0E1218);
const Color kConPanel = Color(0xFF161B24);
const Color kConAmber = Color(0xFFF59E0B);

void conBeep(double f, {int ms = 90, String wave = 'tri', double volume = 0.25}) {
  try {
    NgmyTone.play(f, ms: ms, wave: wave, volume: volume);
  } catch (_) {}
}

void conGood() {
  conBeep(880, ms: 80);
  Future.delayed(const Duration(milliseconds: 90), () => conBeep(1320, ms: 120));
}

void conBad() => conBeep(180, ms: 220, wave: 'square', volume: 0.25);

class _LessonInfo {
  const _LessonInfo(this.id, this.emoji, this.title, this.blurb, this.color);
  final String id, emoji, title, blurb;
  final Color color;
}

const List<_LessonInfo> _lessons = [
  _LessonInfo('outlet', '🔌', 'Wall outlet', 'Black to brass, white to silver', Color(0xFFF59E0B)),
  _LessonInfo('switch', '💡', 'Light switch', 'Two blacks and a wire nut', Color(0xFF38BDF8)),
  _LessonInfo('gfci', '🛡️', 'GFCI outlet', 'LINE and LOAD near water', Color(0xFF34D399)),
  _LessonInfo('fan', '🌀', 'Ceiling fan', 'Black, white, green and a fan box', Color(0xFF22D3EE)),
  _LessonInfo('ptrap', '🪠', 'Sink drain (P-trap)', 'Build a drain with a water seal', Color(0xFF60A5FA)),
  _LessonInfo('faucet', '🚰', 'Faucet supply lines', 'Hot left, cold right', Color(0xFFF87171)),
  _LessonInfo('house', '🏗️', 'Build and fix a house', 'Stage by stage, then repair', Color(0xFFA78BFA)),
];

// ─── The landing page ────────────────────────────────────────────────────────

class NgmyConstructionLab extends StatefulWidget {
  const NgmyConstructionLab({super.key});

  @override
  State<NgmyConstructionLab> createState() => _NgmyConstructionLabState();
}

class _NgmyConstructionLabState extends State<NgmyConstructionLab> {
  bool practice = false;

  void _push(Widget page) => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => page));

  /// Every lesson plays inside a furnished room, with a big TV on the wall showing the NGMY Jobs ad.
  void _lesson(String id) => _push(id == 'house' ? const _HousePage() : NgmyHousePage(lesson: id));

  @override
  Widget build(BuildContext context) {
    NgmyTone.theme = kStudioSoundThemes['CONSTRUCTION LAB'] ?? 'tech';
    return Scaffold(
      backgroundColor: kStudioBg,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(14, 8, 14, 24),
          children: [
            Row(children: [
              IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(color: kConAmber.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(13), border: Border.all(color: kConAmber.withValues(alpha: 0.6))),
                child: const Center(child: Text('🏗️', style: TextStyle(fontSize: 22))),
              ),
              const SizedBox(width: 10),
              const Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Construction Lab', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
                  Text('Wire it. Plumb it. Fix a house.', style: TextStyle(color: Colors.white54, fontSize: 12)),
                ]),
              ),
            ]),
            const SizedBox(height: 12),
            GestureDetector(
              onTap: () => _push(NgmyHousePage(practice: practice)),
              child: Container(
                padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF4A3414), Color(0xFF1F1A12), Color(0xFF2A1F12)]),
                  borderRadius: BorderRadius.circular(26),
                  border: Border.all(color: kConAmber, width: 1.8),
                  boxShadow: [BoxShadow(color: kConAmber.withValues(alpha: 0.28), blurRadius: 26, offset: const Offset(0, 8))],
                ),
                child: Column(children: [
                  Container(
                    width: 78,
                    height: 78,
                    decoration: BoxDecoration(shape: BoxShape.circle, color: kConAmber.withValues(alpha: 0.2), border: Border.all(color: kConAmber, width: 2), boxShadow: [BoxShadow(color: kConAmber.withValues(alpha: 0.5), blurRadius: 22)]),
                    child: const Center(child: Text('🏠', style: TextStyle(fontSize: 42))),
                  ),
                  const SizedBox(height: 12),
                  const Text('My House', textAlign: TextAlign.center, style: TextStyle(color: kConAmber, fontWeight: FontWeight.w900, fontSize: 22)),
                  const SizedBox(height: 4),
                  const Text('5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, fontSize: 13, height: 1.35)),
                  const SizedBox(height: 14),
                  Container(padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 10), decoration: BoxDecoration(color: kConAmber, borderRadius: BorderRadius.circular(20)), child: const Text('Go in', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 14))),
                ]),
              ),
            ),
            _section('JOBS'),
            _grid([
              _tile('🔌', 'Wire a room', 'Go to a room that needs wiring', const Color(0xFF22C55E), () => _push(NgmyHousePage(practice: practice, focus: 'wiring'))),
              _tile('🚽', 'Plumb a room', 'Go to a bathroom or kitchen', const Color(0xFF38BDF8), () => _push(NgmyHousePage(practice: practice, focus: 'plumbing'))),
              _tile('🧠', 'Diagram lessons', 'Three-way switch, fan with light', const Color(0xFFA78BFA), () => _push(const NgmyElectricalDiagramPage())),
              _tile('🔧', 'Fix a house', 'Walk the house and fix every sign', const Color(0xFFF59E0B), () => _push(NgmyHousePage(practice: practice, focus: 'fix'))),
              _tile('🧱', 'Build a room', 'Frame, drywall, then wire', const Color(0xFF4ADE80), () => _push(NgmyRoomProjectPage(practice: practice))),
              _tile('⚡', 'Wiring bench', 'Just the wiring, one room', const Color(0xFFFACC15), () => _push(NgmyRoomProjectPage(quick: true, practice: practice))),
              _tile('🧪', 'Safety inspection', 'A test job: marked when you submit', const Color(0xFFA78BFA), () => _push(const NgmyRoomProjectPage(quick: true, test: true))),
              _tile('📞', 'Service calls', 'A customer rings with problems', const Color(0xFFFB7185), () => _push(NgmyServiceCallPage(practice: practice))),
            ]),
            _section('LESSONS'),
            _grid([
              for (final l in _lessons) _tile(l.emoji, l.title, l.blurb, l.color, () => _lesson(l.id)),
              _tile('📘', 'Learn the trades', 'Short cards for beginners', const Color(0xFFA78BFA), () => _push(const NgmyConstructionLearnPage())),
            ]),
          ],
        ),
      ),
    );
  }

  Widget _section(String t) => Padding(
        padding: const EdgeInsets.fromLTRB(4, 22, 4, 12),
        child: Row(children: [
          Expanded(child: Container(height: 1, color: kConAmber.withValues(alpha: 0.35))),
          Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Text(t, style: const TextStyle(color: kConAmber, fontWeight: FontWeight.w900, fontSize: 12.5, letterSpacing: 2))),
          Expanded(child: Container(height: 1, color: kConAmber.withValues(alpha: 0.35))),
        ]),
      );

  Widget _toggle(String label, bool on, Color c, VoidCallback f) => GestureDetector(
        onTap: f,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(color: on ? c.withValues(alpha: 0.2) : Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(18), border: Border.all(color: on ? c : Colors.white24, width: on ? 2 : 1)),
          child: Center(child: Text(label, style: TextStyle(color: on ? c : Colors.white70, fontWeight: FontWeight.w900, fontSize: 13))),
        ),
      );

  /// Tiles two to a row.
  Widget _grid(List<Widget> tiles) {
    final rows = <Widget>[];
    for (var i = 0; i < tiles.length; i += 2) {
      rows.add(Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: IntrinsicHeight(
          child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Expanded(child: tiles[i]),
            const SizedBox(width: 8),
            Expanded(child: i + 1 < tiles.length ? tiles[i + 1] : const SizedBox.shrink()),
          ]),
        ),
      ));
    }
    return Column(children: rows);
  }

  Widget _tile(String emoji, String title, String line, Color c, VoidCallback f) => GestureDetector(
        onTap: f,
        child: Container(
          padding: const EdgeInsets.fromLTRB(10, 16, 10, 14),
          decoration: BoxDecoration(
            gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [c.withValues(alpha: 0.2), kConPanel]),
            borderRadius: BorderRadius.circular(22),
            border: Border.all(color: c.withValues(alpha: 0.55), width: 1.4),
            boxShadow: [BoxShadow(color: c.withValues(alpha: 0.18), blurRadius: 16, offset: const Offset(0, 6))],
          ),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.center, children: [
            Container(
              width: 56,
              height: 56,
              decoration: BoxDecoration(shape: BoxShape.circle, color: c.withValues(alpha: 0.22), border: Border.all(color: c.withValues(alpha: 0.7), width: 1.5), boxShadow: [BoxShadow(color: c.withValues(alpha: 0.35), blurRadius: 14)]),
              child: Center(child: Text(emoji, style: const TextStyle(fontSize: 28))),
            ),
            const SizedBox(height: 10),
            Text(title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
            const SizedBox(height: 3),
            Text(line, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white60, fontSize: 11.5, height: 1.3)),
          ]),
        ),
      );
}

// ─── Shared pieces ───────────────────────────────────────────────────────────

/// The 3D view with a message banner, an info card and zoom buttons on top of it.
class Stage3D extends StatelessWidget {
  const Stage3D({required this.scene, required this.cam, required this.onPick, required this.onHome, this.highlight = 0, this.dynamicPolys, this.layerOn, this.message, this.good = false, this.info, this.topLeft, this.topRight, this.infoAction, this.messageTop, this.onDoubleTap, this.bottom, this.sky = false});
  final bool sky;
  final Scene3D scene;
  final Cam3 cam;
  final void Function(int id) onPick;
  final VoidCallback onHome;
  final int highlight;
  final List<Poly> Function(double t)? dynamicPolys;
  final bool Function(int layer)? layerOn;
  final String? message;
  final bool good;
  final ObjInfo? info;
  final List<Widget>? topLeft;
  final List<Widget>? topRight;
  final Widget? infoAction;

  /// How far down the message banner sits (it clears the corner widgets).
  final double? messageTop;

  /// A double tap on the picture: where, and how big the picture is.
  final void Function(Offset local, Size size)? onDoubleTap;

  /// Something along the bottom of the picture, in the middle (the walking arrows).
  final Widget? bottom;

  @override
  Widget build(BuildContext context) {
    return Stack(children: [
      Positioned.fill(child: Scene3DView(scene: scene, cam: cam, highlight: highlight, onPick: onPick, dynamicPolys: dynamicPolys, layerOn: layerOn, background: kConBg, onDoubleTap: onDoubleTap, sky: sky)),
      if (topLeft != null) Positioned(left: 8, top: 8, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: topLeft!)),
      Positioned(
        right: 8,
        top: 8,
        child: Column(children: [
          ...?topRight,
          _round(Icons.add_rounded, 'Zoom in', () => cam.zoomBy(0.8)),
          _round(Icons.remove_rounded, 'Zoom out', () => cam.zoomBy(1.25)),
          _round(Icons.center_focus_strong_rounded, 'Back to the whole view', onHome),
        ]),
      ),
      if (bottom != null) Positioned(left: 0, right: 0, bottom: 14, child: Center(child: bottom!)),
      if (message != null)
        Positioned(
          left: 10,
          right: 62,
          top: messageTop ?? (topLeft != null ? 60 : 10),
          child: Container(
            padding: const EdgeInsets.fromLTRB(12, 9, 12, 9),
            decoration: BoxDecoration(color: (good ? const Color(0xFF14532D) : const Color(0xFF7F1D1D)).withValues(alpha: 0.95), borderRadius: BorderRadius.circular(14), border: Border.all(color: good ? const Color(0xFF4ADE80) : const Color(0xFFF87171))),
            child: Text(message!, style: const TextStyle(color: Colors.white, fontSize: 12.5, height: 1.35, fontWeight: FontWeight.w700)),
          ),
        ),
      if (info != null)
        Positioned(
          left: 10,
          right: 10,
          bottom: 8,
          child: Container(
            padding: const EdgeInsets.fromLTRB(14, 10, 10, 10),
            decoration: BoxDecoration(color: const Color(0xF2111318), borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white24)),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(info!.name, style: const TextStyle(color: Color(0xFF67E8F9), fontWeight: FontWeight.w900, fontSize: 14.5)),
                  const SizedBox(height: 3),
                  Text(info!.about, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.4)),
                  if (infoAction != null) ...[const SizedBox(height: 6), infoAction!],
                ]),
              ),
              IconButton(visualDensity: VisualDensity.compact, onPressed: onHome, icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20)),
            ]),
          ),
        ),
    ]);
  }

  Widget _round(IconData icon, String tip, VoidCallback f) => Padding(
        padding: const EdgeInsets.only(bottom: 6),
        child: Tooltip(
          message: tip,
          child: GestureDetector(
            onTap: f,
            child: Container(width: 38, height: 38, decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), shape: BoxShape.circle, border: Border.all(color: Colors.white24)), child: Icon(icon, color: Colors.white, size: 20)),
          ),
        ),
      );
}

Widget conPill(String label, {required bool on, required VoidCallback onTap, Color color = kConAmber, IconData? icon}) => GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.25) : Colors.black.withValues(alpha: 0.5), borderRadius: BorderRadius.circular(18), border: Border.all(color: on ? color : Colors.white24)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          if (icon != null) ...[Icon(icon, color: on ? color : Colors.white70, size: 16), const SizedBox(width: 5)],
          Text(label, style: TextStyle(color: on ? color : Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
        ]),
      ),
    );

Widget conBigButton(String label, IconData icon, VoidCallback? onTap, {Color color = kConAmber}) => Expanded(
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 11),
          decoration: BoxDecoration(color: onTap == null ? Colors.white10 : color.withValues(alpha: 0.9), borderRadius: BorderRadius.circular(14)),
          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            Icon(icon, size: 18, color: onTap == null ? Colors.white38 : Colors.black),
            const SizedBox(width: 6),
            Flexible(child: Text(label, textAlign: TextAlign.center, style: TextStyle(color: onTap == null ? Colors.white38 : Colors.black, fontWeight: FontWeight.w900, fontSize: 12.5))),
          ]),
        ),
      ),
    );

Future<void> showConSteps(BuildContext context, String title, List<String> steps, List<bool> done) {
  return showModalBottomSheet<void>(
    context: context,
    backgroundColor: const Color(0xFF17171C),
    isScrollControlled: true,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
    builder: (ctx) => SafeArea(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.75),
        child: ListView(shrinkWrap: true, padding: const EdgeInsets.fromLTRB(16, 16, 16, 16), children: [
          Text(title, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
          const SizedBox(height: 4),
          Text('${done.where((d) => d).length} of ${steps.length} steps done', style: const TextStyle(color: kConAmber, fontWeight: FontWeight.w800, fontSize: 12.5)),
          const SizedBox(height: 10),
          for (var i = 0; i < steps.length; i++)
            Container(
              margin: const EdgeInsets.only(bottom: 8),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(14), border: Border.all(color: done[i] ? const Color(0xFF4ADE80).withValues(alpha: 0.6) : Colors.white12)),
              child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(done[i] ? '✅' : '${i + 1}.', style: TextStyle(color: done[i] ? Colors.white : kConAmber, fontWeight: FontWeight.w900, fontSize: 14)),
                const SizedBox(width: 10),
                Expanded(child: Text(steps[i], style: TextStyle(color: done[i] ? Colors.white54 : Colors.white, fontSize: 13, height: 1.4))),
              ]),
            ),
        ]),
      ),
    ),
  );
}

/// A lesson page: a header with the title, the menu under it, then the 3D area.
class LessonScaffold extends StatelessWidget {
  const LessonScaffold({required this.title, required this.color, required this.stage, required this.panel, required this.onSteps, required this.stepText});
  final String title;
  final Color color;
  final Widget stage;
  final Widget panel;
  final VoidCallback onSteps;
  final String stepText;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kStudioBg,
      body: SafeArea(
        child: Column(children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(4, 4, 8, 4),
            child: Row(children: [
              IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
              Expanded(child: Text(title, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 16))),
              GestureDetector(
                onTap: onSteps,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                  decoration: BoxDecoration(color: color.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(16), border: Border.all(color: color.withValues(alpha: 0.6))),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [Icon(Icons.checklist_rounded, color: color, size: 17), const SizedBox(width: 5), Text(stepText, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 12))]),
                ),
              ),
            ]),
          ),
          // The menu sits at the top, like in the Electronics Lab, and never takes more than a third of the screen.
          Container(
            width: double.infinity,
            constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.34),
            padding: const EdgeInsets.fromLTRB(10, 6, 10, 8),
            decoration: const BoxDecoration(color: kConPanel, border: Border(bottom: BorderSide(color: Colors.white12))),
            child: SingleChildScrollView(child: panel),
          ),
          Expanded(child: ClipRRect(borderRadius: const BorderRadius.vertical(bottom: Radius.circular(20)), child: stage)),
        ]),
      ),
    );
  }
}

// ─── Electrical lessons ──────────────────────────────────────────────────────

/// The close-up wiring bench for one device. A room can hand it the state it is keeping, so the work carries on there.
class ElectricalLessonPage extends StatefulWidget {
  const ElectricalLessonPage({super.key, required this.id, this.state});
  final String id;
  final WiringState? state;

  @override
  State<ElectricalLessonPage> createState() => _ElectricalPageState();
}

class _ElectricalPageState extends State<ElectricalLessonPage> {
  late final ElectricalLesson lesson = electricalLesson(widget.id);
  late final WiringState s = widget.state ?? WiringState();
  // A ceiling light or fan is seen from the side, where the house wires, the fixture wires and the nuts between them are all in view.
  bool get _ceilingLesson => lesson.id == 'light' || lesson.id == 'fan';
  late final Cam3 cam = _ceilingLesson ? Cam3(yaw: 1.15, pitch: 0.12, dist: 11, target: const V3(0, -0.3, 3.2)) : Cam3(yaw: 0.42, pitch: 0.26, dist: 12, target: const V3(0, 0.2, 2.8));
  late Scene3D scene = buildElectricalScene(lesson, s);
  String chip = '';
  int hl = 0;
  String? msg;
  bool good = false;
  int mistakes = 0;
  Timer? _msgTimer;
  final Stopwatch _clock = Stopwatch()..start();
  double _fxStart = 0;
  double get _now => _clock.elapsedMilliseconds / 1000;

  /// Learn: a wrong wire is refused and explained. Practice: it is allowed, and the power-on shows what it does. Test: it is allowed in silence and judged when you submit.
  void _setMode(String m) {
    setState(() {
      s.practice = m == 'practice';
      s.test = m == 'test';
      if (s.test) {
        s.hints = false;
        s.labels = false;
      }
      _rebuild();
    });
    _say(switch (m) { 'practice' => 'Practice: you can put a wire anywhere. The mistake shows when the power goes on.', 'test' => 'Test: put every wire where you think it goes. Nothing is marked until you submit.', _ => 'Learn: a wrong wire is refused and explained.' }, ok: true);
  }

  @override
  void dispose() {
    _msgTimer?.cancel();
    super.dispose();
  }

  void _say(String text, {bool ok = false}) {
    _msgTimer?.cancel();
    setState(() {
      msg = text;
      good = ok;
    });
    _msgTimer = Timer(const Duration(seconds: 9), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _rebuild() {
    s.testing = s.testing && s.power && s.stage >= 2;
    scene = buildElectricalScene(lesson, s);
  }

  void _home() {
    if (_ceilingLesson && s.stage == 0) {
      cam.glideTo(target: const V3(0, -0.3, 3.2), dist: 11, yaw: 1.15, pitch: 0.12);
      setState(() => hl = 0);
      return;
    }
    cam.glideTo(target: V3(0, 0.1, s.stage == 0 ? 2.8 : 0.4), dist: s.stage == 0 ? 12 : 10, yaw: 0.42, pitch: 0.26);
    setState(() => hl = 0);
  }

  /// Turns the device so the screws that wire belongs on are in view: brass on the right, silver on the left, green at the bottom.
  void _lookFor(String key) {
    if (_ceilingLesson) {
      cam.glideTo(target: const V3(0, -0.3, 3.2), dist: 9, yaw: 1.15, pitch: 0.12);
      return;
    }
    if (key == 'ground') {
      cam.glideTo(target: const V3(0, -1.2, 5.0), dist: 8, yaw: 0.15, pitch: 0.55);
    } else if (key == 'white') {
      cam.glideTo(target: const V3(-0.9, 0.0, 4.4), dist: 8.5, yaw: 0.95, pitch: 0.2);
    } else {
      cam.glideTo(target: const V3(0.9, 0.0, 4.4), dist: 8.5, yaw: -0.95, pitch: 0.2);
    }
  }

  List<bool> _done() {
    final off = !s.power || s.stage > 0;
    bool has(String k) => s.attached.values.contains(k);
    switch (lesson.id) {
      case 'switch':
        return [off, off, off, has('ground'), has('blackLine'), has('blackLoad'), s.stage >= 2 && s.testing];
      case 'gfci':
        return [off, off, has('ground'), has('white'), has('black'), s.stage >= 2, s.stage >= 2 && s.testing];
      default:
        return [off, off, has('ground'), has('white'), has('black'), s.stage >= 1, s.stage >= 2 && s.testing];
    }
  }

  void _pick(int id) {
    if (id == 0) {
      _home();
      return;
    }
    // The wall, the studs, the box and the cable are only the scenery: they cannot be tapped, so a tap on a wire never lands on them.
    if (const {idWall, idStud, idBox, idCable, idCableB}.contains(id)) return;
    final hook = lesson.hookups.where((h) => h.id == id).toList();
    // A tap on a wire that is fastened takes it off the screw.
    final key = wireKeyForId(lesson.id, id);
    if (key != null && s.stage == 0 && s.attached.containsValue(key)) {
      if (s.power) {
        conBad();
        _say('STOP! The power is still on. Turn the breaker OFF before you touch any wire.');
        return;
      }
      s.attached.removeWhere((_, v) => v == key);
      setState(_rebuild);
      _say('Wire taken off the screw.', ok: true);
      return;
    }
    // Tapping a screw or nut that already has a wire takes the wire off it.
    if (hook.isNotEmpty && s.stage == 0 && s.attached.containsKey(id) && (chip.isEmpty || s.attached[id] == chip)) {
      if (s.power) {
        conBad();
        _say('STOP! The power is still on. Turn the breaker OFF before you touch any wire.');
        return;
      }
      s.attached.remove(id);
      setState(() {
        chip = '';
        _rebuild();
      });
      _say(s.test ? TestSession.neutralNote : 'Wire taken off.', ok: true);
      return;
    }
    // Tapping a house wire in the picture picks it up, like choosing it in the tray: then tap where it goes.
    if (key != null && s.stage == 0 && !s.attached.containsValue(key) && lesson.chips.any((c) => c.key == key)) {
      setState(() {
        chip = chip == key ? '' : key;
        hl = chip.isEmpty ? 0 : id;
      });
      if (chip.isNotEmpty) {
        _lookFor(key);
        _say('${lesson.chips.firstWhere((c) => c.key == key).label}: picked up. Now tap the screw, nut or wire it joins.', ok: true);
      }
      return;
    }
    if (hook.isNotEmpty && chip.isNotEmpty && s.stage == 0) {
      final err = tryFasten(lesson, s, chip, hook.first);
      if (err != null) {
        mistakes++;
        conBad();
        _say(err);
      } else if (s.test) {
        conBeep(520, ms: 60);
        setState(() {
          _rebuild();
          hl = id;
        });
        _say(TestSession.neutralNote, ok: true);
        chip = '';
      } else {
        conGood();
        setState(() {
          _rebuild();
          hl = id;
        });
        if (s.practice) {
          // Practice allows a wrong wire, so it does not say it is right: it says where it went.
          _say('${hook.first.name}: fastened.', ok: true);
        } else if (wiringComplete(lesson, s)) {
          _say('Every wire is on the right screw. Now push the device into the box.', ok: true);
        } else {
          _say('${hook.first.name}: fastened correctly.', ok: true);
        }
        cam.glideTo(target: hookupPoint(lesson.id, id, s), dist: 7);
        chip = '';
      }
      return;
    }
    final info = scene.info[id];
    if (info != null) {
      setState(() => hl = id);
      cam.glideTo(target: info.focus, dist: info.dist);
    }
  }

  void _power() {
    setState(() {
      s.power = !s.power;
      if (!s.power) s.testing = false;
      _rebuild();
    });
    if (s.power) {
      conBeep(120, ms: 200, wave: 'saw');
      if (s.stage == 0) _say('The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.');
    } else {
      conBeep(600, ms: 100);
      _say('Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)', ok: true);
    }
  }

  void _test() {
    final v = evaluateWiring(lesson, s);
    if (!v.ok) {
      // The wiring is not correct and safe: show what the power-on does. A device that works is still not a pass.
      setState(() {
        s.power = true;
        s.testing = false;
        if (v.burns) s.burnt = true;
        s.fx = v.effect;
        _fxStart = _now;
        _rebuild();
      });
      mistakes++;
      conBad();
      HapticFeedback.heavyImpact();
      conBeep(v.effect == 'arc' ? 95 : 150, ms: 450, wave: v.effect == 'arc' ? 'saw' : 'noise', volume: 0.5);
      _say(s.test ? (v.trips ? 'The breaker tripped.' : 'Power is on.') : '${v.message}\nHow to fix it: ${v.fix}');
      return;
    }
    setState(() {
      s.power = true;
      s.testing = true;
      _rebuild();
    });
    conGood();
    _say(
      switch (lesson.id) {
        'switch' => 'Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: $mistakes.',
        'gfci' => 'Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: $mistakes.',
        _ => 'The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: $mistakes.',
      },
      ok: true,
    );
  }

  @override
  Widget build(BuildContext context) {
    final done = _done();
    final next = done.indexWhere((d) => !d);
    final stepText = next < 0 ? 'All done' : 'Step ${next + 1}/${lesson.steps.length}';
    final canPush = wiringComplete(lesson, s) && !s.power;
    return LessonScaffold(
      title: lesson.title,
      color: kConAmber,
      stepText: stepText,
      onSteps: () => showConSteps(context, lesson.title, lesson.steps, done),
      stage: Stage3D(
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: _home,
        dynamicPolys: (_) {
          final b = MeshBuilder();
          final active = s.fx.isNotEmpty && _now - _fxStart < (s.fx == 'fire' ? 7 : 4.5);
          if (active || (s.burnt && s.fx.isNotEmpty)) {
            faultEffect(b, active ? s.fx : 'smolder', (l) => V3(l.x * 0.32, -0.2 + l.y * 0.32, 0.8 + l.z * 0.32), 0.32, _now);
          }
          return b.polys;
        },
        message: msg,
        good: good,
        info: hl != 0 ? scene.info[hl] : null,
        topLeft: [
          GestureDetector(
            onTap: _power,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              decoration: BoxDecoration(color: (s.power ? const Color(0xFF7F1D1D) : const Color(0xFF14532D)).withValues(alpha: 0.95), borderRadius: BorderRadius.circular(18), border: Border.all(color: s.power ? const Color(0xFFF87171) : const Color(0xFF4ADE80), width: 1.5)),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                Icon(s.power ? Icons.bolt_rounded : Icons.power_off_rounded, color: Colors.white, size: 18),
                const SizedBox(width: 5),
                Text(s.power ? 'Breaker ON (live)' : 'Breaker OFF (safe)', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
              ]),
            ),
          ),
        ],
        topRight: [
          conPill('Learn', on: !s.practice && !s.test, icon: Icons.school_rounded, color: const Color(0xFF4ADE80), onTap: () => _setMode('learn')),
          const SizedBox(height: 6),
          conPill('Practice', on: s.practice, icon: Icons.build_rounded, color: const Color(0xFFF87171), onTap: () => _setMode('practice')),
          const SizedBox(height: 6),
          conPill('Test', on: s.test, icon: Icons.fact_check_rounded, color: const Color(0xFFA78BFA), onTap: () => _setMode('test')),
          const SizedBox(height: 6),
          if (!s.test) ...[
            conPill('Hints', on: s.hints, icon: Icons.lightbulb_rounded, onTap: () => setState(() {
                  s.hints = !s.hints;
                  _rebuild();
                })),
            const SizedBox(height: 6),
            conPill('Labels', on: s.labels, icon: Icons.label_rounded, color: const Color(0xFF38BDF8), onTap: () => setState(() {
                  s.labels = !s.labels;
                  _rebuild();
                })),
            const SizedBox(height: 6),
            conPill('Wire guide', on: false, icon: Icons.menu_book_rounded, color: const Color(0xFFFDBA74), onTap: () => showWireGuide(context)),
            const SizedBox(height: 6),
          ],
          conPill('Brass side', on: false, icon: Icons.rotate_left_rounded, color: const Color(0xFFCDA033), onTap: () => cam.glideTo(target: V3(0.6, 0, s.stage == 0 ? 4.2 : 0.4), dist: 10, yaw: -0.95, pitch: 0.2)),
          const SizedBox(height: 6),
          conPill('Silver side', on: false, icon: Icons.rotate_right_rounded, color: const Color(0xFFCBD0D6), onTap: () => cam.glideTo(target: V3(-0.6, 0, s.stage == 0 ? 4.2 : 0.4), dist: 10, yaw: 0.95, pitch: 0.2)),
          const SizedBox(height: 8),
        ],
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        if (s.stage == 0) ...[
          Wrap(spacing: 8, runSpacing: 6, children: [
              for (final c in lesson.chips.where((c) => !s.attached.containsValue(c.key)))
                Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: GestureDetector(
                    onTap: () {
                      if (s.attached.containsValue(c.key)) {
                        _say('That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.');
                        return;
                      }
                      setState(() => chip = chip == c.key ? '' : c.key);
                      if (chip.isNotEmpty) {
                        _lookFor(c.key);
                        _say('${c.label}: now tap the screw it belongs on.', ok: true);
                      }
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14),
                      decoration: BoxDecoration(color: c.color, borderRadius: BorderRadius.circular(14), border: Border.all(color: chip == c.key ? const Color(0xFF67E8F9) : Colors.white24, width: chip == c.key ? 3 : 1)),
                      child: Row(children: [
                        if (s.attached.containsValue(c.key)) Padding(padding: const EdgeInsets.only(right: 6), child: Icon(Icons.check_circle_rounded, size: 18, color: c.ink)),
                        Text(c.label, style: TextStyle(color: c.ink, fontWeight: FontWeight.w900, fontSize: 13)),
                      ]),
                    ),
                  ),
                ),
            ]),
          if (s.test) ...[
            Row(children: [conBigButton('Submit the test', Icons.fact_check_rounded, () => showTestFlow(context, title: lesson.title, attempts: [TestAttempt(lesson.title, rulesOf(lesson), connectionsOf(lesson, s), supported: s.supported)], questions: kLessonQuestions[lesson.id] ?? const []), color: const Color(0xFFA78BFA))]),
            const SizedBox(height: 8),
          ],
          const SizedBox(height: 8),
          Row(children: [
            conBigButton(canPush ? 'Push it into the box' : (s.power ? 'Turn the breaker OFF first' : 'Fasten every wire first'), Icons.move_down_rounded, canPush
                ? () {
                    setState(() {
                      s.stage = 1;
                      _rebuild();
                    });
                    conGood();
                    _say('The wires are folded back and the device is pushed into the box. Now put the cover plate on.', ok: true);
                    _home();
                  }
                : null),
          ]),
        ] else if (s.stage == 1) ...[
          Row(children: [
            conBigButton('Pull it back out', Icons.undo_rounded, () {
              setState(() {
                s.stage = 0;
                _rebuild();
              });
              _home();
            }, color: Colors.white70),
            const SizedBox(width: 8),
            conBigButton('Put the cover plate on', Icons.crop_square_rounded, () {
              setState(() {
                s.stage = 2;
                _rebuild();
              });
              conGood();
              _say('Cover plate on. Now turn the power on and test.', ok: true);
            }),
          ]),
        ] else ...[
          Row(children: [
            conBigButton('Start over', Icons.restart_alt_rounded, () {
              setState(() {
                s.stage = 0;
                s.attached.clear();
                s.power = true;
                s.testing = false;
                s.burnt = false;
                s.fx = '';
                mistakes = 0;
                chip = '';
                hl = 0;
                _rebuild();
              });
              _home();
            }, color: Colors.white70),
            const SizedBox(width: 8),
            conBigButton(s.testing ? 'Tested ✓' : 'Power on and test', Icons.bolt_rounded, s.testing ? null : _test),
          ]),
        ],
      ]),
    );
  }
}

// ─── Sink drain (P-trap) ─────────────────────────────────────────────────────

class PtrapLessonPage extends StatefulWidget {
  const PtrapLessonPage({super.key, this.state});
  final PlumbState? state;

  @override
  State<PtrapLessonPage> createState() => _PtrapPageState();
}

class _PtrapPageState extends State<PtrapLessonPage> {
  late final PlumbState s = widget.state ?? PlumbState();
  late final Cam3 cam = Cam3(yaw: -0.3, pitch: 0.18, dist: 40, target: const V3(7, 3, 0));
  late Scene3D scene = buildPtrapScene(s);
  String chip = '';
  int hl = 0;
  String? msg;
  bool good = false;
  Timer? _t;
  static const steps = [
    'Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.',
    'Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.',
    'Pick the trap arm and tap its outline. It joins the trap to the wall drain.',
    'Slide each slip nut up to its joint and hand tighten it: tap the nuts.',
    'Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas.',
  ];

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
    _t = Timer(const Duration(seconds: 9), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _home() {
    cam.glideTo(target: const V3(7, 3, 0), dist: 40, yaw: -0.3, pitch: 0.18);
    setState(() => hl = 0);
  }

  List<bool> _done() => [
        s.placed.contains('tail'),
        s.placed.contains('trap'),
        s.placed.contains('arm'),
        s.tight['n1'] == true && s.tight['n2'] == true,
        s.running && s.leakAt.isEmpty,
      ];

  void _rebuild() => scene = buildPtrapScene(s);

  void _pick(int id) {
    if (id == 0) {
      _home();
      return;
    }
    final pieces = {idTail: 'tail', idTrap: 'trap', idArm: 'arm'};
    final key = pieces[id];
    if (key != null && !s.placed.contains(key)) {
      if (chip.isEmpty) {
        _say('Pick the ${key == 'tail' ? 'tailpiece' : (key == 'trap' ? 'P-trap' : 'trap arm')} from the buttons below first, then tap its glowing outline.');
        return;
      }
      if (chip != key) {
        conBad();
        _say(switch (chip) {
          'tail' => 'The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain.',
          'trap' => 'The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle.',
          _ => 'The trap arm is the long straight pipe that goes into the wall. It goes last, on the right.',
        });
        return;
      }
      if (key == 'trap' && !s.placed.contains('tail')) {
        conBad();
        _say('Start from the top: put the tailpiece on first, then the trap under it.');
        return;
      }
      if (key == 'arm' && !s.placed.contains('trap')) {
        conBad();
        _say('The trap arm joins the trap. Put the P-trap on first.');
        return;
      }
      setState(() {
        s.placed.add(key);
        s.running = false;
        s.leakAt = '';
        _rebuild();
        chip = '';
      });
      conGood();
      _say('Piece in place. ${s.placed.length == 3 ? 'Now tighten the two slip nuts: tap each nut.' : 'Pick the next piece.'}', ok: true);
      return;
    }
    if ((id == idNut1 || id == idNut2)) {
      final nk = id == idNut1 ? 'n1' : 'n2';
      if (s.tight[nk] != true) {
        setState(() {
          s.tight[nk] = true;
          s.leakAt = '';
          _rebuild();
        });
        conGood();
        _say('Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.', ok: true);
        return;
      }
    }
    final info = scene.info[id];
    if (info != null) {
      setState(() => hl = id);
      cam.glideTo(target: info.focus, dist: info.dist);
    }
  }

  void _run() {
    final loose = ['n1', 'n2'].where((k) => s.tight[k] != true).toList();
    setState(() {
      s.running = true;
      s.leakAt = loose.isEmpty ? '' : loose.first;
      _rebuild();
    });
    if (loose.isNotEmpty) {
      conBad();
      _say('It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.');
    } else {
      conGood();
      _say('No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!', ok: true);
    }
  }

  @override
  Widget build(BuildContext context) {
    final done = _done();
    final next = done.indexWhere((d) => !d);
    final allPlaced = s.placed.length == 3;
    const names = {'tail': 'Tailpiece', 'trap': 'P-trap', 'arm': 'Trap arm'};
    return LessonScaffold(
      title: 'Sink drain (P-trap)',
      color: const Color(0xFF60A5FA),
      stepText: next < 0 ? 'All done' : 'Step ${next + 1}/${steps.length}',
      onSteps: () => showConSteps(context, 'Sink drain (P-trap)', steps, done),
      stage: Stage3D(
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: _home,
        message: msg,
        good: good,
        info: hl != 0 ? scene.info[hl] : null,
        dynamicPolys: (t) => ptrapWater(s, t),
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        Wrap(spacing: 8, runSpacing: 6, children: [
            for (final k in const ['tail', 'trap', 'arm'])
              Padding(
                padding: const EdgeInsets.only(right: 8),
                child: GestureDetector(
                  onTap: s.placed.contains(k) ? null : () => setState(() => chip = chip == k ? '' : k),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    decoration: BoxDecoration(color: s.placed.contains(k) ? Colors.white10 : const Color(0xFF1E3A5F), borderRadius: BorderRadius.circular(14), border: Border.all(color: chip == k ? const Color(0xFF67E8F9) : Colors.white24, width: chip == k ? 3 : 1)),
                    child: Row(children: [
                      if (s.placed.contains(k)) const Padding(padding: EdgeInsets.only(right: 6), child: Icon(Icons.check_circle_rounded, size: 18, color: Color(0xFF4ADE80))),
                      Text(names[k]!, style: TextStyle(color: s.placed.contains(k) ? Colors.white38 : Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
                    ]),
                  ),
                ),
              ),
          ]),
        const SizedBox(height: 8),
        Row(children: [
          conBigButton('Start over', Icons.restart_alt_rounded, () {
            setState(() {
              s.placed.clear();
              s.tight.updateAll((k, v) => false);
              s.running = false;
              s.leakAt = '';
              chip = '';
              hl = 0;
              _rebuild();
            });
            _home();
          }, color: Colors.white70),
          const SizedBox(width: 8),
          conBigButton(allPlaced ? 'Run the water' : 'Build the drain first', Icons.water_drop_rounded, allPlaced ? _run : null, color: const Color(0xFF60A5FA)),
        ]),
      ]),
    );
  }
}

// ─── Faucet supply lines ─────────────────────────────────────────────────────

class FaucetLessonPage extends StatefulWidget {
  const FaucetLessonPage({super.key, this.state});
  final PlumbState? state;

  @override
  State<FaucetLessonPage> createState() => _FaucetPageState();
}

class _FaucetPageState extends State<FaucetLessonPage> {
  late final PlumbState s = widget.state ?? PlumbState();
  late final Cam3 cam = Cam3(yaw: -0.25, pitch: 0.2, dist: 36, target: const V3(0, 9, -3));
  late Scene3D scene = buildFaucetScene(s);
  String chip = '';
  int hl = 0;
  String? msg;
  bool good = false;
  Timer? _t;
  static const steps = [
    'Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).',
    'Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.',
    'Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.',
    'Open the valves slowly and turn on the faucet. Check every connection for drips.',
  ];

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
    _t = Timer(const Duration(seconds: 9), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _home() {
    cam.glideTo(target: const V3(0, 9, -3), dist: 36, yaw: -0.25, pitch: 0.2);
    setState(() => hl = 0);
  }

  void _rebuild() => scene = buildFaucetScene(s);

  List<bool> _done() => [
        s.hints || s.attached.isNotEmpty,
        s.attached[idValveHot] == 'hot' && s.attached[idInletHot] == 'hot',
        s.attached[idValveCold] == 'cold' && s.attached[idInletCold] == 'cold',
        s.valvesOpen && faucetComplete(s),
      ];

  void _pick(int id) {
    if (id == 0) {
      _home();
      return;
    }
    final hooks = kFaucetHooks.where((h) => h.id == id).toList();
    if (hooks.isNotEmpty && chip.isNotEmpty) {
      final err = tryHose(s, chip, hooks.first);
      if (err != null) {
        conBad();
        _say(err);
      } else {
        conGood();
        setState(() {
          s.valvesOpen = false;
          _rebuild();
          hl = id;
        });
        cam.glideTo(target: faucetHookPoint(id), dist: 12);
        _say(faucetComplete(s) ? 'All four ends are connected. Now open the valves.' : '${hooks.first.name}: connected.', ok: true);
      }
      return;
    }
    // A tap on a hose takes it off.
    if (id == idHoseHot || id == idHoseCold) {
      final k = id == idHoseHot ? 'hot' : 'cold';
      if (s.attached.containsValue(k)) {
        setState(() {
          s.attached.removeWhere((_, v) => v == k);
          s.valvesOpen = false;
          _rebuild();
        });
        _say('Hose taken off.', ok: true);
        return;
      }
    }
    final info = scene.info[id];
    if (info != null) {
      setState(() => hl = id);
      cam.glideTo(target: info.focus, dist: info.dist);
    }
  }

  void _open() {
    setState(() {
      s.valvesOpen = !s.valvesOpen;
      _rebuild();
    });
    if (!s.valvesOpen) {
      _say('Valves closed.', ok: true);
      return;
    }
    if (faucetComplete(s)) {
      conGood();
      _say('Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!', ok: true);
    } else {
      conBad();
      _say('Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.');
    }
  }

  @override
  Widget build(BuildContext context) {
    final done = _done();
    final next = done.indexWhere((d) => !d);
    return LessonScaffold(
      title: 'Faucet supply lines',
      color: const Color(0xFFF87171),
      stepText: next < 0 ? 'All done' : 'Step ${next + 1}/${steps.length}',
      onSteps: () => showConSteps(context, 'Faucet supply lines', steps, done),
      stage: Stage3D(
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: _home,
        message: msg,
        good: good,
        info: hl != 0 ? scene.info[hl] : null,
        dynamicPolys: (t) => faucetWater(s, t),
        topRight: [
          conPill('Hints', on: s.hints, icon: Icons.lightbulb_rounded, onTap: () => setState(() {
                s.hints = !s.hints;
                _rebuild();
              })),
          const SizedBox(height: 8),
        ],
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        Wrap(spacing: 8, runSpacing: 6, children: [
            for (final (k, label, col) in const [('hot', 'Hot hose (red)', kHot), ('cold', 'Cold hose (blue)', kCold)])
              Padding(
                padding: const EdgeInsets.only(right: 8),
                child: GestureDetector(
                  onTap: () => setState(() => chip = chip == k ? '' : k),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    decoration: BoxDecoration(color: col, borderRadius: BorderRadius.circular(14), border: Border.all(color: chip == k ? const Color(0xFF67E8F9) : Colors.white24, width: chip == k ? 3 : 1)),
                    child: Row(children: [
                      if (s.attached.values.where((v) => v == k).length == 2) const Padding(padding: EdgeInsets.only(right: 6), child: Icon(Icons.check_circle_rounded, size: 18, color: Colors.white)),
                      Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
                    ]),
                  ),
                ),
              ),
          ]),
        const SizedBox(height: 8),
        Row(children: [
          conBigButton('Start over', Icons.restart_alt_rounded, () {
            setState(() {
              s.attached.clear();
              s.valvesOpen = false;
              chip = '';
              hl = 0;
              _rebuild();
            });
            _home();
          }, color: Colors.white70),
          const SizedBox(width: 8),
          conBigButton(s.valvesOpen ? 'Close the valves' : 'Open the valves', Icons.water_drop_rounded, _open, color: const Color(0xFFF87171)),
        ]),
      ]),
    );
  }
}

// ─── The whole house ─────────────────────────────────────────────────────────

class _HousePage extends StatefulWidget {
  const _HousePage();

  @override
  State<_HousePage> createState() => _HousePageState();
}

class _HousePageState extends State<_HousePage> {
  final HouseState s = HouseState();
  late final Cam3 cam = Cam3(yaw: -0.3, pitch: 0.48, dist: 46, target: const V3(0, 4, -2))..maxDist = 80;
  late Scene3D scene = buildHouseScene(s);
  int hl = 0;
  String tool = '';
  String? msg;
  bool good = false;
  Timer? _t;

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
    _t = Timer(const Duration(seconds: 9), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _home() {
    cam.glideTo(target: const V3(0, 4, -2), dist: 46, yaw: -0.3, pitch: 0.48);
    setState(() => hl = 0);
  }

  void _rebuild() => scene = buildHouseScene(s);

  void _pick(int id) {
    if (id == 0) {
      _home();
      return;
    }
    if (id == idBreakerLiving && s.breakerTripped && s.stage >= 5) {
      setState(() {
        s.breakerTripped = false;
        _rebuild();
        hl = id;
      });
      conGood();
      _say('You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.', ok: true);
      cam.glideTo(target: const V3(-6.5, 5, -3), dist: 22);
      return;
    }
    if ((id == idHNut || id == idHTrap) && s.leaking && !s.nutFixed && s.stage >= 5) {
      if (tool == 'wrench' && id == idHNut) {
        setState(() {
          s.nutFixed = true;
          s.leaking = false;
          _rebuild();
          hl = id;
        });
        conGood();
        _say('You tightened the slip nut with the wrench. The drip has stopped.', ok: true);
        return;
      }
      conBad();
      _say(id == idHNut ? 'Hand tightening is not enough here. Pick the wrench first, then tap the nut.' : 'The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.');
    }
    final info = scene.info[id];
    if (info != null) {
      setState(() => hl = id);
      cam.glideTo(target: info.focus, dist: info.dist);
    }
  }

  void _openLesson(String id) {
    final Widget page = switch (id) {
      'ptrap' => const PtrapLessonPage(),
      'faucet' => const FaucetLessonPage(),
      _ => ElectricalLessonPage(id: id),
    };
    Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => page));
  }

  @override
  Widget build(BuildContext context) {
    final stage = kHouseStages[s.stage];
    final lesson = hl == 0 ? null : houseLessonFor(hl);
    final fixed = [!s.breakerTripped, !s.leaking || s.nutFixed];
    return LessonScaffold(
      title: 'Build and fix a house',
      color: const Color(0xFFA78BFA),
      stepText: 'Stage ${s.stage + 1}/${kHouseStages.length}',
      onSteps: () => showConSteps(context, 'Fix the house', const ['The living room has no power: find the tripped breaker in the panel and reset it.', 'The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)'], fixed),
      stage: Stage3D(
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: _home,
        message: msg,
        good: good,
        info: hl != 0 ? scene.info[hl] : null,
        infoAction: lesson == null
            ? null
            : GestureDetector(
                onTap: () => _openLesson(lesson),
                child: Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7), decoration: BoxDecoration(color: kConAmber, borderRadius: BorderRadius.circular(12)), child: const Text('Open the 3D lesson', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 12))),
              ),
        layerOn: (l) => l <= s.stage,
        dynamicPolys: (t) => houseWater(s, t),
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          Expanded(child: Text('${s.stage + 1}. ${stage.$1}', style: const TextStyle(color: Color(0xFFC4B5FD), fontWeight: FontWeight.w900, fontSize: 14))),
          conPill('Wrench', on: tool == 'wrench', icon: Icons.build_rounded, color: const Color(0xFF38BDF8), onTap: () => setState(() => tool = tool == 'wrench' ? '' : 'wrench')),
        ]),
        const SizedBox(height: 2),
        Text(stage.$2, maxLines: 3, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.35)),
        Slider(
          value: s.stage.toDouble(),
          min: 0,
          max: (kHouseStages.length - 1).toDouble(),
          divisions: kHouseStages.length - 1,
          activeColor: const Color(0xFFA78BFA),
          label: stage.$1,
          onChanged: (v) => setState(() {
            s.stage = v.round();
            if (s.stage < 5) hl = 0;
            _rebuild();
          }),
        ),
        Row(children: [
          Expanded(child: Text(fixed[0] ? '✅ Living room power fixed' : '⚠ Living room has no power', style: TextStyle(color: fixed[0] ? const Color(0xFF86EFAC) : const Color(0xFFFCA5A5), fontSize: 11.5, fontWeight: FontWeight.w800))),
          Expanded(child: Text(fixed[1] ? '✅ Sink leak fixed' : '⚠ Kitchen sink drips', textAlign: TextAlign.right, style: TextStyle(color: fixed[1] ? const Color(0xFF86EFAC) : const Color(0xFFFCA5A5), fontSize: 11.5, fontWeight: FontWeight.w800))),
        ]),
      ]),
    );
  }
}
