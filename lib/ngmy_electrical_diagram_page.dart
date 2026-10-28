import 'package:flutter/material.dart';

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

class _DiagramPageState extends State<NgmyElectricalDiagramPage> {
  int lesson = 0;
  bool test = false;
  final Map<String, String> picked = {};
  SafetyReport? result;

  DiagramLesson get l => kDiagramLessons[lesson];

  Color _col(SafetyStatus s) => s == SafetyStatus.correct ? const Color(0xFF4ADE80) : (s == SafetyStatus.incomplete ? const Color(0xFFFACC15) : const Color(0xFFF87171));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0E1218),
      appBar: AppBar(backgroundColor: const Color(0xFF17171C), title: const Text('Diagram lessons'), actions: [IconButton(onPressed: () => showWireGuide(context), icon: const Icon(Icons.menu_book_rounded))]),
      body: ListView(padding: const EdgeInsets.all(14), children: [
        Wrap(spacing: 8, children: [
          for (var i = 0; i < kDiagramLessons.length; i++)
            ChoiceChip(label: Text(kDiagramLessons[i].title.split(' (').first), selected: lesson == i, onSelected: (_) => setState(() {
                  lesson = i;
                  picked.clear();
                  result = null;
                })),
        ]),
        const SizedBox(height: 8),
        Wrap(spacing: 8, children: [
          ChoiceChip(label: const Text('Practice (instant feedback)'), selected: !test, onSelected: (_) => setState(() {
                test = false;
                result = null;
              })),
          ChoiceChip(label: const Text('Test (marked on submit)'), selected: test, onSelected: (_) => setState(() {
                test = true;
                result = null;
              })),
        ]),
        const SizedBox(height: 10),
        Text(l.title, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
        const SizedBox(height: 4),
        Text(l.intro, style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.4)),
        const SizedBox(height: 10),
        for (final lead in l.expected.keys) ...[
          Text(lead, style: const TextStyle(color: Color(0xFFF59E0B), fontWeight: FontWeight.w900)),
          DropdownButton<String>(
            isExpanded: true,
            dropdownColor: const Color(0xFF17171C),
            value: picked[lead],
            hint: const Text('Connect it to...', style: TextStyle(color: Colors.white54)),
            items: [for (final t in l.targets) DropdownMenuItem(value: t, child: Text(t, style: const TextStyle(color: Colors.white, fontSize: 13)))],
            onChanged: (v) => setState(() {
              picked[lead] = v!;
              result = null;
            }),
          ),
          if (!test && picked[lead] != null)
            Builder(builder: (_) {
              final one = evaluateDiagram(l.title, {lead: l.expected[lead]!}, {lead: picked[lead]!});
              return Text(one.safe ? 'Right: this follows the diagram.' : one.findings.first.message + ' ' + one.findings.first.fix, style: TextStyle(color: _col(one.status), fontSize: 12.5, height: 1.3));
            }),
          const SizedBox(height: 6),
        ],
        FilledButton(
          onPressed: () => setState(() => result = evaluateDiagram(l.title, l.expected, picked)),
          child: Text(test ? 'Submit the test' : 'Check my wiring'),
        ),
        if (result != null) ...[
          const SizedBox(height: 10),
          Text(result!.safe ? 'CORRECT: every lead follows the diagram.' : '${result!.status.label}: not passed', style: TextStyle(color: _col(result!.status), fontWeight: FontWeight.w900, fontSize: 16)),
          for (final f in result!.findings) Text('${f.message}\nRule: ${f.rule}\nFix: ${f.fix}\n', style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.3)),
          for (final n in l.notes) Text('• $n', style: const TextStyle(color: Colors.white54, fontSize: 12.5)),
        ],
      ]),
    );
  }
}
