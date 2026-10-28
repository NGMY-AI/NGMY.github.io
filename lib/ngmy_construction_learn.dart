import 'package:flutter/material.dart';

import 'ngmy_construction_lab.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// LEARN: short, plain cards for anybody starting in construction, wiring or plumbing.
// ═════════════════════════════════════════════════════════════════════════════

class LearnCard {
  const LearnCard(this.title, this.text);
  final String title, text;
}

class LearnGroup {
  const LearnGroup(this.name, this.emoji, this.color, this.cards);
  final String name, emoji;
  final Color color;
  final List<LearnCard> cards;
}

const List<LearnGroup> kLearnGroups = [
  LearnGroup('Safety first', '🦺', Color(0xFFF87171), [
    LearnCard('Breaker off, then test', 'Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.'),
    LearnCard('Lock out, tag out', 'On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.'),
    LearnCard('Water and power', 'Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.'),
    LearnCard('Eyes, ears, lungs', 'Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.'),
    LearnCard('Shut the water off', 'Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.'),
  ]),
  LearnGroup('Wiring basics', '⚡', Color(0xFFFACC15), [
    LearnCard('Wire colours', 'Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.'),
    LearnCard('Screw colours', 'On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.'),
    LearnCard('Wire size', '14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.'),
    LearnCard('Breakers', 'A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.'),
    LearnCard('Wire nuts', 'Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.'),
    LearnCard('Switches', 'A switch cuts the hot wire only. The neutral goes straight through to the light.'),
    LearnCard('GFCI', 'A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.'),
    LearnCard('Ceiling fans', 'A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.'),
    LearnCard('Heights', 'Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.'),
  ]),
  LearnGroup('Plumbing basics', '🚰', Color(0xFF60A5FA), [
    LearnCard('Hot left, cold right', 'On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.'),
    LearnCard('The P-trap', 'The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.'),
    LearnCard('Shut-off valves', 'Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.'),
    LearnCard('Slip nuts', 'Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.'),
    LearnCard('Wax ring', 'A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.'),
    LearnCard('Drain slope', 'Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.'),
    LearnCard('Order of work', 'Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).'),
  ]),
  LearnGroup('Framing and walls', '🏠', Color(0xFFD97706), [
    LearnCard('Studs', 'Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.'),
    LearnCard('Drilling studs', 'Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.'),
    LearnCard('Drywall', 'A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.'),
    LearnCard('Taping and mud', 'Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.'),
    LearnCard('Order of a build', 'Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.'),
  ]),
  LearnGroup('Tools', '🧰', Color(0xFF34D399), [
    LearnCard('Voltage tester', 'A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.'),
    LearnCard('Wire strippers', 'Strip the plastic off without nicking the copper. A nick weakens the wire.'),
    LearnCard('Adjustable wrench', 'For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.'),
    LearnCard('Drill and screw gun', 'A drill makes holes through studs. A screw gun sets drywall screws to the right depth.'),
    LearnCard('Level and tape measure', 'Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.'),
  ]),
];

class NgmyConstructionLearnPage extends StatelessWidget {
  const NgmyConstructionLearnPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kStudioBg,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(14, 8, 14, 24),
          children: [
            Row(children: [
              IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
              const Text('Learn the trades', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
            ]),
            for (final g in kLearnGroups) ...[
              Padding(padding: const EdgeInsets.fromLTRB(4, 16, 4, 8), child: Text('${g.emoji}  ${g.name.toUpperCase()}', style: TextStyle(color: g.color, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.1))),
              for (final c in g.cards)
                Container(
                  margin: const EdgeInsets.only(bottom: 8),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: kConPanel, borderRadius: BorderRadius.circular(14), border: Border.all(color: g.color.withValues(alpha: 0.35))),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(c.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                    const SizedBox(height: 3),
                    Text(c.text, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.4)),
                  ]),
                ),
            ],
          ],
        ),
      ),
    );
  }
}
