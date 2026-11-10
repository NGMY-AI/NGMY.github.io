import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_electrical_safety.dart';
import 'ngmy_electrical_ui.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Diagram lessons: wiring that must follow the device's own diagram (a three-way switch, a fan with a light kit).
// Practice tells you at once, with the rule. Test says nothing until you submit. Judged by the safety engine.
// ═════════════════════════════════════════════════════════════════════════════

class DiagramLesson {
  const DiagramLesson(this.id, this.title, this.intro, this.targets, this.expected, this.notes);
  final String id, title, intro;

  /// Where a lead can be connected.
  final List<String> targets;

  /// Lead → the target the diagram puts it on.
  final Map<String, String> expected;
  final List<String> notes;
}

const List<DiagramLesson> kDiagramLessons = [
  DiagramLesson(
    'threeway',
    'Three-way switch (two switches, one light)',
    'Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.',
    ['Switch 1 common', 'Switch 2 common', 'Traveler terminal (both switches)', 'Green ground screw', 'Neutral splice (not on a switch)'],
    {'Line (from the breaker)': 'Switch 1 common', 'Load (to the light)': 'Switch 2 common', 'Traveler A': 'Traveler terminal (both switches)', 'Traveler B': 'Traveler terminal (both switches)', 'Ground': 'Green ground screw', 'Neutral': 'Neutral splice (not on a switch)'},
    ['Never assume the dark screw is the same on every brand: read the diagram on the switch.', 'A switch loop or an old house may not follow the colors: verify the wires.'],
  ),
  DiagramLesson(
    'fanlight',
    'Ceiling fan with a light kit',
    'A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker\'s diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.',
    ['Fan (motor) control wire', 'Light control wire', 'Neutral', 'Ground', 'Fan-rated support'],
    {'Motor lead (black)': 'Fan (motor) control wire', 'Light lead (blue)': 'Light control wire', 'Neutral (white)': 'Neutral', 'Ground (green)': 'Ground', 'Support': 'Fan-rated support'},
    ['A blue wire is a light-kit lead on many fans, but not on all: read the diagram.', 'A fan that spins does not prove the installation is safe.'],
  ),
];

class NgmyElectricalDiagramPage extends StatefulWidget {
  const NgmyElectricalDiagramPage({super.key});

  @override
  State<NgmyElectricalDiagramPage> createState() => _DiagramPageState();
}

const double _rowH = 58, _rowGap = 8;

Color _leadColor(String lead) {
  final s = lead.toLowerCase();
  if (s.contains('blue')) return const Color(0xFF2F7DE1);
  if (s.contains('ground') || s.contains('green')) return const Color(0xFF22A06B);
  if (s.contains('neutral') || s.contains('white')) return const Color(0xFFF1F1EA);
  if (s.contains('traveler a')) return const Color(0xFFE23B3B);
  if (s.contains('traveler b')) return const Color(0xFFF59E0B);
  if (s.contains('load')) return const Color(0xFF7C4A2D);
  if (s.contains('support')) return const Color(0xFF9CA3AF);
  return const Color(0xFF2A2A30);
}

Color _padColor(String target) {
  final s = target.toLowerCase();
  if (s.contains('ground')) return const Color(0xFF22A06B);
  if (s.contains('common')) return const Color(0xFF52525B);
  if (s.contains('traveler')) return const Color(0xFFC9A03A);
  if (s.contains('neutral')) return const Color(0xFFCBD0D6);
  if (s.contains('support')) return const Color(0xFF9CA3AF);
  return const Color(0xFFF59E0B);
}

IconData _leadIcon(String lead) {
  final s = lead.toLowerCase();
  if (s.contains('ground')) return Icons.south_rounded;
  if (s.contains('neutral')) return Icons.remove_rounded;
  if (s.contains('support')) return Icons.anchor_rounded;
  if (s.contains('light') || s.contains('load')) return Icons.lightbulb_rounded;
  if (s.contains('motor')) return Icons.air_rounded;
  if (s.contains('traveler')) return Icons.swap_horiz_rounded;
  return Icons.bolt_rounded;
}

class _DiagramPageState extends State<NgmyElectricalDiagramPage> with SingleTickerProviderStateMixin {
  int lesson = 0;
  bool test = false;
  final Map<String, String> picked = {};
  SafetyReport? result;
  String? sel;
  String? lastLead;
  String? coach;
  bool coachOk = true;
  late final AnimationController _draw = AnimationController(vsync: this, duration: const Duration(milliseconds: 450));

  DiagramLesson get l => kDiagramLessons[lesson];

  @override
  void dispose() {
    _draw.dispose();
    super.dispose();
  }

  Color _col(SafetyStatus s) => s == SafetyStatus.correct ? const Color(0xFF4ADE80) : (s == SafetyStatus.incomplete ? const Color(0xFFFACC15) : const Color(0xFFF87171));

  void _reset(int i) => setState(() {
        lesson = i;
        picked.clear();
        result = null;
        sel = null;
        lastLead = null;
        coach = null;
      });

  void _tapLead(String lead) => setState(() {
        sel = sel == lead ? null : lead;
        if (sel != null) {
          coach = 'Now tap the place on the diagram where "$lead" goes.';
          coachOk = true;
        }
      });

  void _tapTarget(String target) {
    final lead = sel;
    if (lead == null) {
      setState(() {
        coach = 'Pick a wire on the left first, then tap the place it goes.';
        coachOk = false;
      });
      return;
    }
    setState(() {
      picked[lead] = target;
      lastLead = lead;
      result = null;
      sel = null;
      if (!test) {
        final one = evaluateDiagram(l.title, {lead: l.expected[lead]!}, {lead: target});
        coachOk = one.safe;
        coach = one.safe ? 'Right: this follows the diagram.' : '${one.findings.first.message} ${one.findings.first.fix}';
      } else {
        coach = null;
      }
    });
    _draw.forward(from: 0);
    HapticFeedback.selectionClick();
  }

  Widget _toggle(String label, bool on, IconData icon, VoidCallback f) => Expanded(
        child: GestureDetector(
          onTap: f,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            padding: const EdgeInsets.symmetric(vertical: 11),
            decoration: BoxDecoration(color: on ? const Color(0xFFF59E0B).withValues(alpha: 0.2) : Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(14), border: Border.all(color: on ? const Color(0xFFF59E0B) : Colors.white12, width: on ? 2 : 1)),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, size: 17, color: on ? const Color(0xFFF59E0B) : Colors.white54),
              const SizedBox(width: 6),
              Flexible(child: Text(label, textAlign: TextAlign.center, style: TextStyle(color: on ? const Color(0xFFF59E0B) : Colors.white70, fontWeight: FontWeight.w800, fontSize: 12.5))),
            ]),
          ),
        ),
      );

  Widget _leadChip(String lead) {
    final c = _leadColor(lead);
    final on = sel == lead;
    final done = picked[lead] != null;
    final light = c.computeLuminance() > 0.5;
    final ink = light ? const Color(0xFF111827) : Colors.white;
    return GestureDetector(
      onTap: () => _tapLead(lead),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        height: _rowH,
        margin: const EdgeInsets.only(bottom: _rowGap),
        padding: const EdgeInsets.fromLTRB(10, 0, 16, 0),
        decoration: BoxDecoration(
          color: c,
          borderRadius: const BorderRadius.horizontal(left: Radius.circular(16), right: Radius.circular(29)),
          border: Border.all(color: on ? const Color(0xFF67E8F9) : Colors.white24, width: on ? 3 : 1),
          boxShadow: [if (on) BoxShadow(color: const Color(0xFF67E8F9).withValues(alpha: 0.5), blurRadius: 14)],
        ),
        child: Row(children: [
          Icon(done ? Icons.check_circle_rounded : _leadIcon(lead), size: 20, color: ink),
          const SizedBox(width: 7),
          Expanded(child: Text(lead, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 12.5, height: 1.15))),
        ]),
      ),
    );
  }

  Widget _pad(String target) {
    final c = _padColor(target);
    final here = [for (final e in picked.entries) if (e.value == target) e.key];
    final hot = sel != null;
    return GestureDetector(
      onTap: () => _tapTarget(target),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        height: _rowH,
        margin: const EdgeInsets.only(bottom: _rowGap),
        padding: const EdgeInsets.fromLTRB(16, 0, 10, 0),
        decoration: BoxDecoration(
          color: const Color(0xFF1B222C),
          borderRadius: const BorderRadius.horizontal(left: Radius.circular(29), right: Radius.circular(16)),
          border: Border.all(color: hot ? const Color(0xFF67E8F9).withValues(alpha: 0.7) : (here.isNotEmpty ? c : Colors.white12), width: hot || here.isNotEmpty ? 2 : 1),
        ),
        child: Row(children: [
          Container(
            width: 22,
            height: 22,
            decoration: BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Colors.white.withValues(alpha: 0.9), c]), border: Border.all(color: Colors.black38)),
            child: Center(child: Container(width: 10, height: 2.5, color: Colors.black54)),
          ),
          const SizedBox(width: 8),
          Expanded(child: Text(target, maxLines: 3, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12, height: 1.15))),
          if (here.isNotEmpty)
            GestureDetector(
              onTap: () => setState(() {
                for (final k in here) {
                  picked.remove(k);
                }
                result = null;
              }),
              child: const Padding(padding: EdgeInsets.only(left: 4), child: Icon(Icons.close_rounded, size: 18, color: Colors.white54)),
            ),
        ]),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final rows = math.max(l.expected.length, l.targets.length);
    final h = rows * (_rowH + _rowGap);
    final connected = picked.length;
    return Scaffold(
      backgroundColor: const Color(0xFF0E1218),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0E1218),
        title: const Text('Diagram lessons', style: TextStyle(fontWeight: FontWeight.w900)),
        actions: [IconButton(tooltip: 'Wire guide', onPressed: () => showWireGuide(context), icon: const Icon(Icons.menu_book_rounded))],
      ),
      body: ListView(padding: const EdgeInsets.fromLTRB(14, 4, 14, 28), children: [
        SizedBox(
          height: 78,
          child: Row(children: [
            for (var i = 0; i < kDiagramLessons.length; i++) ...[
              if (i > 0) const SizedBox(width: 10),
              Expanded(
                child: GestureDetector(
                  onTap: () => _reset(i),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: lesson == i ? const [Color(0xFFB45309), Color(0xFFF59E0B)] : [Colors.white.withValues(alpha: 0.06), Colors.white.withValues(alpha: 0.03)]),
                      borderRadius: BorderRadius.circular(18),
                      border: Border.all(color: lesson == i ? const Color(0xFFFCD34D) : Colors.white12),
                    ),
                    child: Row(children: [
                      Text(kDiagramLessons[i].id == 'threeway' ? '🔀' : '🌀', style: const TextStyle(fontSize: 26)),
                      const SizedBox(width: 8),
                      Expanded(child: Text(kDiagramLessons[i].title.split(' (').first, maxLines: 3, overflow: TextOverflow.ellipsis, style: TextStyle(color: lesson == i ? Colors.white : Colors.white70, fontWeight: FontWeight.w900, fontSize: 13, height: 1.15))),
                    ]),
                  ),
                ),
              ),
            ],
          ]),
        ),
        const SizedBox(height: 12),
        Row(children: [
          _toggle('Practice (instant feedback)', !test, Icons.build_rounded, () => setState(() {
                test = false;
                result = null;
                coach = null;
              })),
          const SizedBox(width: 10),
          _toggle('Test (marked on submit)', test, Icons.fact_check_rounded, () => setState(() {
                test = true;
                result = null;
                coach = null;
              })),
        ]),
        const SizedBox(height: 14),
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white12)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(l.title, style: const TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900, height: 1.2)),
            const SizedBox(height: 6),
            Text(l.intro, style: const TextStyle(color: Colors.white70, fontSize: 12.8, height: 1.45)),
            const SizedBox(height: 10),
            ClipRRect(borderRadius: BorderRadius.circular(6), child: LinearProgressIndicator(value: connected / l.expected.length, minHeight: 8, backgroundColor: Colors.white12, valueColor: const AlwaysStoppedAnimation(Color(0xFFF59E0B)))),
            const SizedBox(height: 4),
            Text('$connected of ${l.expected.length} wires connected', style: const TextStyle(color: Colors.white54, fontSize: 11.5, fontWeight: FontWeight.w700)),
          ]),
        ),
        const SizedBox(height: 14),
        const Row(children: [
          Expanded(child: Text('WIRES', textAlign: TextAlign.center, style: TextStyle(color: Colors.white38, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 2))),
          SizedBox(width: 56),
          Expanded(child: Text('DIAGRAM', textAlign: TextAlign.center, style: TextStyle(color: Colors.white38, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 2))),
        ]),
        const SizedBox(height: 6),
        LayoutBuilder(builder: (context, c) {
          final w = c.maxWidth;
          final colW = (w - 56) / 2;
          return SizedBox(
            height: h,
            child: Stack(children: [
              Positioned.fill(
                child: AnimatedBuilder(
                  animation: _draw,
                  builder: (_, __) => CustomPaint(
                    painter: _WirePainter(
                      leads: l.expected.keys.toList(),
                      targets: l.targets,
                      picked: Map.of(picked),
                      colW: colW,
                      last: lastLead,
                      progress: _draw.value,
                    ),
                  ),
                ),
              ),
              Positioned(left: 0, top: 0, width: colW, child: Column(children: [for (final lead in l.expected.keys) _leadChip(lead)])),
              Positioned(right: 0, top: 0, width: colW, child: Column(children: [for (final t in l.targets) _pad(t)])),
            ]),
          );
        }),
        const SizedBox(height: 8),
        if (coach != null && !test)
          AnimatedContainer(
            duration: const Duration(milliseconds: 200),
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: (coachOk ? const Color(0xFF4ADE80) : const Color(0xFFF87171)).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: (coachOk ? const Color(0xFF4ADE80) : const Color(0xFFF87171)).withValues(alpha: 0.6))),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Icon(coachOk ? Icons.check_circle_rounded : Icons.error_rounded, size: 20, color: coachOk ? const Color(0xFF4ADE80) : const Color(0xFFF87171)),
              const SizedBox(width: 8),
              Expanded(child: Text(coach!, style: TextStyle(color: coachOk ? const Color(0xFF86EFAC) : const Color(0xFFFCA5A5), fontSize: 12.8, height: 1.4, fontWeight: FontWeight.w700))),
            ]),
          ),
        const SizedBox(height: 12),
        SizedBox(
          height: 52,
          child: FilledButton.icon(
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFFF59E0B), foregroundColor: Colors.black, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
            onPressed: () => setState(() => result = evaluateDiagram(l.title, l.expected, picked)),
            icon: Icon(test ? Icons.fact_check_rounded : Icons.verified_rounded),
            label: Text(test ? 'Submit the test' : 'Check my wiring', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
          ),
        ),
        if (result != null) ...[
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: _col(result!.status).withValues(alpha: 0.1), borderRadius: BorderRadius.circular(16), border: Border.all(color: _col(result!.status).withValues(alpha: 0.6))),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(result!.safe ? 'CORRECT: every lead follows the diagram.' : '${result!.status.label}: not passed', style: TextStyle(color: _col(result!.status), fontWeight: FontWeight.w900, fontSize: 15)),
              const SizedBox(height: 8),
              for (final f in result!.findings) Text('${f.message}\nRule: ${f.rule}\nFix: ${f.fix}\n', style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.3)),
              for (final n in l.notes) Text('• $n', style: const TextStyle(color: Colors.white54, fontSize: 12.5, height: 1.4)),
            ]),
          ),
        ],
      ]),
    );
  }
}

/// The wires between the leads and the diagram: soft curves in the colour of each lead, the newest one drawn out as you watch.
class _WirePainter extends CustomPainter {
  _WirePainter({required this.leads, required this.targets, required this.picked, required this.colW, required this.last, required this.progress});
  final List<String> leads, targets;
  final Map<String, String> picked;
  final double colW;
  final String? last;
  final double progress;

  @override
  void paint(Canvas canvas, Size size) {
    double y(int i) => i * (_rowH + _rowGap) + _rowH / 2;
    final x0 = colW, x1 = size.width - colW;
    final socket = Paint()..color = Colors.white24;
    for (var i = 0; i < leads.length; i++) {
      canvas.drawCircle(Offset(x0, y(i)), 5, socket);
    }
    for (var i = 0; i < targets.length; i++) {
      canvas.drawCircle(Offset(x1, y(i)), 5, socket);
    }
    for (final e in picked.entries) {
      final li = leads.indexOf(e.key), ti = targets.indexOf(e.value);
      if (li < 0 || ti < 0) continue;
      final a = Offset(x0, y(li)), b = Offset(x1, y(ti));
      final mid = (a.dx + b.dx) / 2;
      var path = Path()
        ..moveTo(a.dx, a.dy)
        ..cubicTo(mid, a.dy, mid, b.dy, b.dx, b.dy);
      if (e.key == last && progress < 1) {
        final m = path.computeMetrics().first;
        path = m.extractPath(0, m.length * progress);
      }
      final col = _leadColor(e.key);
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 9..strokeCap = StrokeCap.round..color = Colors.black.withValues(alpha: 0.55));
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 6..strokeCap = StrokeCap.round..color = col);
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.6..strokeCap = StrokeCap.round..color = Colors.white.withValues(alpha: 0.45));
      if (e.key != last || progress >= 1) {
        canvas.drawCircle(a, 5.5, Paint()..color = col);
        canvas.drawCircle(b, 5.5, Paint()..color = col);
      }
    }
  }

  @override
  bool shouldRepaint(_WirePainter old) => true;
}
