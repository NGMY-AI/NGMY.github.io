import 'package:flutter/material.dart';

import 'ngmy_construction_electrical.dart';

// The pop-up of a screw (or nut) that has no wire on it: tap it twice and it says why it has none and which wire belongs there.

/// The colour of the metal of a screw by what it is for.
Color screwMetal(Hookup h) => switch (h.role) {
      'hot' => const Color(0xFFD4A017),
      'neutral' => const Color(0xFFCBD0D6),
      'ground' => const Color(0xFF22A06B),
      _ => const Color(0xFFF59E0B),
    };

/// The wires of the lesson that belong on [h].
List<WireChoice> wiresFor(ElectricalLesson l, Hookup h) => [for (final c in l.chips) if (h.accepts.contains(c.key)) c];

/// Why [h] has no wire on it now, in plain words.
String screwWhy(ElectricalLesson l, WiringState s, Hookup h) {
  final mine = wiresFor(l, h);
  final names = mine.isEmpty ? 'its wire' : mine.map((c) => c.label).join(' or ');
  // A twin: another place that takes the same kind of wire.
  final twins = [for (final o in l.hookups) if (o.id != h.id && o.accepts.any(h.accepts.contains)) o];
  final twinFilled = twins.any((o) => s.attached.containsKey(o.id));
  if (h.taped) {
    return 'This is a LOAD screw and it is covered with tape on purpose. Power comes in on the LINE screws. The LOAD screws only matter when you want this GFCI to protect other outlets further along the same wire: then the cable that carries on to them goes here, and the tape comes off. For a single outlet, leave it covered.';
  }
  if (h.role == 'ground') {
    return s.attached.containsKey(h.id)
        ? 'It has its wire: the bare copper ground.'
        : 'Nothing is on it yet, and it must never stay empty. The ground wire gives a stray current a safe road to the earth, so a fault trips the breaker instead of shocking you. The bare copper wire goes here, and nowhere else.';
  }
  if (twinFilled) {
    final metal = h.role == 'hot' ? 'brass' : (h.role == 'neutral' ? 'silver' : 'matching');
    return 'This is a spare. A cable brings in only ONE ${h.role == 'hot' ? 'hot' : (h.role == 'neutral' ? 'neutral' : 'matching')} wire, and the $metal screws on the two sides of the device are joined inside by a metal bridge, so the wire on the other screw already feeds this one. Use this free screw to pass the power on to the next outlet or switch with a second cable, never for a wire of a different colour.';
  }
  return 'No wire is on it yet. $names goes here: ${h.hint}';
}

/// Shows the pop-up in the middle of the screen, in frames.
Future<void> showScrewWhy(BuildContext context, ElectricalLesson l, WiringState s, Hookup h) {
  final metal = screwMetal(h);
  final wires = wiresFor(l, h);
  final empty = !s.attached.containsKey(h.id);
  Widget frame(String title, IconData icon, Color col, Widget child) => Container(
        width: double.infinity,
        margin: const EdgeInsets.only(top: 10),
        padding: const EdgeInsets.fromLTRB(14, 10, 14, 12),
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [col.withValues(alpha: 0.16), col.withValues(alpha: 0.04)]),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: col.withValues(alpha: 0.65), width: 1.4),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Icon(icon, size: 17, color: col),
            const SizedBox(width: 7),
            Expanded(child: Text(title, style: TextStyle(color: col, fontWeight: FontWeight.w900, fontSize: 12.5, letterSpacing: 0.5))),
          ]),
          const SizedBox(height: 6),
          child,
        ]),
      );
  return showDialog<void>(
    context: context,
    barrierColor: Colors.black.withValues(alpha: 0.7),
    builder: (ctx) => Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 440),
        child: Container(
          key: const Key('screw-why'),
          padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
          decoration: BoxDecoration(
            gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1F2430), Color(0xFF11141A)]),
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: metal.withValues(alpha: 0.8), width: 1.8),
            boxShadow: [BoxShadow(color: metal.withValues(alpha: 0.3), blurRadius: 30)],
          ),
          child: SingleChildScrollView(
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              Row(children: [
                Container(
                  width: 46,
                  height: 46,
                  decoration: BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Colors.white.withValues(alpha: 0.9), metal]), border: Border.all(color: Colors.black38, width: 2)),
                  child: Center(child: Container(width: 20, height: 4, color: Colors.black54)),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(h.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17, height: 1.15)),
                    Text(empty ? 'No wire on this one' : 'This one has its wire', style: TextStyle(color: metal, fontWeight: FontWeight.w800, fontSize: 12.5)),
                  ]),
                ),
              ]),
              frame(
                'THE WIRE THAT GOES HERE',
                Icons.cable_rounded,
                const Color(0xFF38BDF8),
                Wrap(spacing: 8, runSpacing: 6, children: [
                  if (wires.isEmpty) Text(h.hint, style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.35)),
                  for (final c in wires)
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                      decoration: BoxDecoration(color: c.color, borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white38)),
                      child: Text(c.label, style: TextStyle(color: c.ink, fontWeight: FontWeight.w900, fontSize: 12.5)),
                    ),
                ]),
              ),
              frame('WHY IT HAS NO WIRE', Icons.help_outline_rounded, const Color(0xFFFACC15), Text(screwWhy(l, s, h), style: const TextStyle(color: Colors.white, fontSize: 13.5, height: 1.4))),
              frame('REMEMBER', Icons.lightbulb_rounded, const Color(0xFF4ADE80), Text(h.hint, style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.4))),
              const SizedBox(height: 12),
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: () => Navigator.pop(ctx),
                  style: FilledButton.styleFrom(backgroundColor: metal.withValues(alpha: 0.9), foregroundColor: Colors.black, padding: const EdgeInsets.symmetric(vertical: 12), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
                  child: const Text('Got it', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                ),
              ),
            ]),
          ),
        ),
      ),
    ),
  );
}
