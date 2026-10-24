import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_electronics_board.dart';
import 'ngmy_electronics_lab.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// AI INVENTOR: say what you want to make, and watch it get built part by part.
// ═════════════════════════════════════════════════════════════════════════════

typedef InventorAi = Future<String?> Function(String prompt);

Future<String?> _defaultAi(String prompt) async {
  try {
    final r = await ngmyAiGenerateWithCredentials(ngmyParseAiCredentials(''), prompt).timeout(const Duration(seconds: 28));
    return r.text;
  } catch (_) {
    return null;
  }
}

/// The result of an invention, ready to be built on the board.
class Design {
  Design({required this.title, required this.explain, required this.steps, required this.recipe, this.honest = '', this.fromAi = false});
  final String title;
  final String explain;
  final List<String> steps;
  final Recipe recipe;
  final String honest;
  final bool fromAi;
}

const String _kHonestFreeEnergy = 'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.';

bool _wantsFree(String w) => RegExp(r'free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor').hasMatch(w);

/// A design from the built-in library when the AI is not reachable.
Design localDesign(String wish) {
  final w = wish.toLowerCase();
  Recipe? best;
  var bestScore = 0;
  for (final r in kRecipes) {
    var s = 0;
    for (final k in r.keys) {
      if (w.contains(k)) s += k.length;
    }
    if (s > bestScore) {
      bestScore = s;
      best = r;
    }
  }
  final free = _wantsFree(w);
  if (free) best = kRecipes.firstWhere((r) => r.title == 'Hand-crank light');
  best ??= kRecipes.first;
  final names = {for (final p in best.parts) p.$1: kPartByKind[p.$2]!};
  final steps = <String>[
    for (final p in best.parts) 'Add the ${names[p.$1]!.name.toLowerCase()}: ${names[p.$1]!.about.split('. ').first}.',
    'Join them with wires into one complete loop, so the current can go round and round.',
    'Switch on and watch it work!',
  ];
  return Design(title: best.title, explain: best.explain, steps: steps, recipe: best, honest: free ? _kHonestFreeEnergy : '');
}

String _prompt(String wish) {
  final catalog = kPartInfos.map((p) => '- ${p.kind}: ${p.name}. ${p.about.split('. ').first}.').join('\n');
  return '''
You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "$wish".

You may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):
$catalog

Rules for a circuit that really works in the simulator:
- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.
- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).
- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.
- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.

Reply with ONLY a JSON object, no markdown, in exactly this form:
{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],
"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],
"wires":[["a",0,"b",0],["b",1,"c",0]]}
Optional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.
''';
}

Design? parseDesign(String? raw) {
  if (raw == null) return null;
  final a = raw.indexOf('{'), z = raw.lastIndexOf('}');
  if (a < 0 || z <= a) return null;
  try {
    final m = jsonDecode(raw.substring(a, z + 1)) as Map;
    final parts = <(String, String, double, double, Map<String, double>)>[];
    final ids = <String>{};
    var n = 0;
    for (final e in (m['parts'] as List)) {
      final kind = '${e['kind']}';
      final id = '${e['id']}';
      if (!kPartByKind.containsKey(kind) || ids.contains(id) || parts.length >= 8) continue;
      ids.add(id);
      final settings = <String, double>{};
      for (final k in const ['volts', 'level', 'ohms', 'on']) {
        final v = e[k];
        if (v is num) settings[k] = v.toDouble();
      }
      // Tidy layout even if the numbers are odd.
      final x = (e['x'] is num ? (e['x'] as num).toDouble() : 0.2 + (n % 3) * 0.3).clamp(0.16, 0.84);
      final y = (e['y'] is num ? (e['y'] as num).toDouble() : 0.25 + (n ~/ 3) * 0.3).clamp(0.1, 0.9);
      parts.add((id, kind, x, y, settings));
      n++;
    }
    if (parts.length < 2) return null;
    final wires = <(String, int, String, int)>[];
    for (final w in (m['wires'] as List)) {
      final l = w as List;
      if (l.length < 4) continue;
      final a1 = '${l[0]}', b1 = '${l[2]}';
      final t1 = (l[1] as num).toInt().clamp(0, 1), t2 = (l[3] as num).toInt().clamp(0, 1);
      if (ids.contains(a1) && ids.contains(b1) && a1 != b1) wires.add((a1, t1, b1, t2));
    }
    if (wires.length < 2) return null;
    final steps = [for (final s in (m['steps'] as List? ?? const [])) '$s'];
    final recipe = Recipe('${m['title'] ?? 'My invention'}', '${m['explain'] ?? ''}', parts, wires);
    return Design(title: recipe.title, explain: recipe.explain, steps: steps.isEmpty ? ['Add the parts.', 'Wire them into a loop.', 'Switch on!'] : steps, recipe: recipe, honest: '${m['honest'] ?? ''}', fromAi: true);
  } catch (_) {
    return null;
  }
}

/// Does the design really carry current when we try it out?
bool designWorks(Recipe r) {
  final b = ElectronicsBoard();
  r.build(b);
  for (var i = 0; i < 60; i++) {
    b.step(1 / 30);
  }
  return b.parts.any((p) => !b.isSource(p) && (p.i.abs() > 0.002 || p.glow > 0.05)) && !b.parts.every((p) => p.burnt);
}

/// What is on the board right now, in words, so questions can be about the real thing.
String describeBoard(ElectronicsBoard b) {
  final names = <String, String>{};
  var n = 0;
  for (final p in b.parts) {
    names[p.id] = '${p.info.name} #${++n}';
  }
  final lines = <String>[];
  for (final p in b.parts) {
    final set = <String>[];
    if (p.kind == 'battery') set.add('${p.volts} V');
    if (p.kind == 'resistor') set.add('${p.ohms.round()} ohms');
    if (const ['solar', 'turbine', 'crank', 'pot'].contains(p.kind)) set.add('level ${(p.level * 100).round()}%');
    if (p.kind == 'switch') set.add(p.on ? 'closed' : 'open');
    final state = p.burnt ? 'BURNT OUT' : (p.glow > 0.05 ? 'working (glow ${(p.glow * 100).round()}%)' : 'not working');
    lines.add('${names[p.id]}${set.isEmpty ? '' : ' (${set.join(', ')})'}: $state, current ${(p.i.abs() * 1000).toStringAsFixed(0)} mA');
  }
  final wires = [for (final w in b.wires) '${names[w.a.id]} terminal ${w.ta} to ${names[w.b.id]} terminal ${w.tb}'];
  return 'Parts:\n${lines.join('\n')}\nWires: ${wires.join('; ')}';
}

String _askPrompt(Design d, String board, String q, List<(String, String)> history) {
  final hist = history.isEmpty ? '' : 'Earlier questions:\n${[for (final h in history) 'Q: ${h.$1}\nA: ${h.$2}'].join('\n')}\n\n';
  return '''
You are a friendly electronics teacher. A person just had you build "${d.title}" in a circuit simulator. How it works: ${d.explain}
Build steps: ${d.steps.join(' | ')}
${d.honest.isEmpty ? '' : 'Honesty note already given: ${d.honest}\n'}
This is exactly what is on the board right now:
$board

${hist}Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.
Question: "$q"
''';
}

/// An answer from the parts library when the AI is not reachable.
String localAnswer(Design d, ElectronicsBoard b, String question) {
  final q = question.toLowerCase();
  for (final p in b.parts) {
    if (p.burnt) {
      return 'The ${p.info.name.toLowerCase()} burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it.';
    }
  }
  for (final info in kPartInfos) {
    final on = b.parts.any((p) => p.kind == info.kind);
    if (on && (q.contains(info.name.toLowerCase()) || q.contains(info.kind))) {
      return '${info.about} ${info.made}';
    }
  }
  if (RegExp(r'why|not (work|light|turn|run|on)|dark|nothing').hasMatch(q)) {
    final working = b.parts.where((p) => !b.isSource(p) && (p.glow > 0.05 || p.i.abs() > 0.002)).isNotEmpty;
    if (!working) return 'Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed.';
    return 'It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster.';
  }
  if (RegExp(r'volt|amp|current|power|watt').hasMatch(q)) {
    final cur = b.parts.fold<double>(0, (m, p) => p.i.abs() > m ? p.i.abs() : m);
    return 'Voltage is the push, current is how much charge flows each second. Right now the biggest current is about ${(cur * 1000).toStringAsFixed(0)} milliamps. Tap a power part to change its volts and watch the current change.';
  }
  if (RegExp(r'free|forever|perpetual|infinite').hasMatch(q)) {
    return 'No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity.';
  }
  return '${d.explain} Ask me about a part, like "what does the ${b.parts.isEmpty ? 'battery' : b.parts.first.info.name.toLowerCase()} do?", or "why is it not working?".';
}

class NgmyInventorStudio extends StatefulWidget {

  const NgmyInventorStudio({super.key, this.ai});

  /// Asks the AI. Pass a fake in tests.
  final InventorAi? ai;

  @override
  State<NgmyInventorStudio> createState() => _NgmyInventorStudioState();
}

class _NgmyInventorStudioState extends State<NgmyInventorStudio> {
  final ElectronicsBoard _board = ElectronicsBoard();
  final Map<String, double> _pop = {};
  final TextEditingController _ctl = TextEditingController();
  final List<Timer> _timers = [];
  Design? _design;
  bool _thinking = false;
  bool _building = false;
  int _step = 0;
  String _status = '';
  int _run = 0;
  bool _askMode = false;
  bool _answering = false;
  final List<(String, String)> _qa = [];
  final ScrollController _infoScroll = ScrollController();

  static const _ideas = [
    'A motor that works without a battery',
    'Free electricity',
    'A radio with no battery',
    'A night light that charges in the day',
    'A hand-powered torch',
    'A TV',
    'A doorbell',
    'A wind-powered fan',
  ];

  @override
  void dispose() {
    for (final t in _timers) {
      t.cancel();
    }
    _infoScroll.dispose();
    super.dispose();
  }

  Future<void> _ask() async {
    final d = _design;
    final q = _ctl.text.trim();
    if (d == null || q.isEmpty || _answering || _thinking) return;
    FocusManager.instance.primaryFocus?.unfocus();
    _ctl.clear();
    setState(() => _answering = true);
    final ask = widget.ai ?? _defaultAi;
    final board = describeBoard(_board);
    var a = (await ask(_askPrompt(d, board, q, _qa)))?.trim();
    if (a == null || a.isEmpty || a.startsWith('{')) a = localAnswer(d, _board, q);
    if (!mounted) return;
    final answer = a;
    setState(() {
      _answering = false;
      _qa.add((q, answer));
    });
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_infoScroll.hasClients) _infoScroll.animateTo(_infoScroll.position.maxScrollExtent, duration: const Duration(milliseconds: 250), curve: Curves.easeOut);
    });
  }

  Future<void> _invent([String? wish]) async {

    final w = (wish ?? _ctl.text).trim();
    if (w.isEmpty || _thinking || _building) return;
    FocusManager.instance.primaryFocus?.unfocus();
    _ctl.text = w;
    setState(() {
      _thinking = true;
      _design = null;
      _qa.clear();
      _askMode = false;
      _status = 'Thinking about how to build it…';
    });
    NgmyTone.play(500, ms: 160, wave: 'square', sweep: -0.5, volume: 0.25);
    final ask = widget.ai ?? _defaultAi;
    var design = parseDesign(await ask(_prompt(w)));
    var note = '';
    if (design != null && !designWorks(design.recipe)) {
      design = null;
      note = 'The first idea did not make a complete loop, so I used a proven design.';
    }
    design ??= localDesign(w);
    if (_wantsFree(w.toLowerCase()) && design.honest.isEmpty) {
      design = Design(title: design.title, explain: design.explain, steps: design.steps, recipe: design.recipe, honest: _kHonestFreeEnergy, fromAi: design.fromAi);
    }
    if (!mounted) return;
    setState(() {
      _thinking = false;
      _design = design;
      _status = note;
      _askMode = true;
    });
    _build(design);
  }

  void _build(Design d) {
    for (final t in _timers) {
      t.cancel();
    }
    _timers.clear();
    final run = ++_run;
    _board.clear();
    _pop.clear();
    setState(() {
      _building = true;
      _step = 0;
    });
    final r = d.recipe;
    final byId = <String, Part>{};
    var t = 500;
    final total = r.parts.length + r.wires.length + 1;
    var done = 0;
    void at(int ms, VoidCallback fn) {
      _timers.add(Timer(Duration(milliseconds: ms), () {
        if (!mounted || run != _run) return;
        fn();
      }));
    }

    for (var i = 0; i < r.parts.length; i++) {
      final p = r.parts[i];
      at(t, () {
        final part = _board.add(p.$2, p.$3, p.$4);
        p.$5.forEach((k, v) {
          switch (k) {
            case 'volts':
              part.volts = v;
            case 'level':
              part.level = v;
            case 'ohms':
              part.ohms = v;
            case 'on':
              part.on = v > 0;
          }
        });
        _pop[part.id] = 0;
        byId[p.$1] = part;
        NgmyTone.play(700.0 + i * 120, ms: 80, wave: 'square', volume: 0.25);
        setState(() => _step = ((++done) / total * d.steps.length).floor().clamp(0, d.steps.length));
      });
      t += 650;
    }
    t += 250;
    for (final w in r.wires) {
      at(t, () {
        final a = byId[w.$1], b = byId[w.$3];
        if (a != null && b != null) _board.connect(a, w.$2, b, w.$4);
        NgmyTone.play(1500, ms: 45, wave: 'tri', volume: 0.25);
        setState(() => _step = ((++done) / total * d.steps.length).floor().clamp(0, d.steps.length));
      });
      t += 520;
    }
    at(t + 200, () {
      NgmyTone.play(300, ms: 360, wave: 'square', sweep: -1.2, volume: 0.3);
      setState(() {
        _building = false;
        _step = d.steps.length;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final d = _design;
    return StudioPage(
      title: 'AI INVENTOR',
      accent: const Color(0xFFA78BFA),
      help: 'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',
      stage: Column(children: [
        AnimatedSize(
          duration: const Duration(milliseconds: 250),
          child: Container(
            width: double.infinity,
            constraints: BoxConstraints(maxHeight: _qa.isEmpty ? 200 : 260),
            margin: const EdgeInsets.fromLTRB(10, 6, 10, 2),
            padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
            decoration: BoxDecoration(color: const Color(0xFFA78BFA).withValues(alpha: 0.1), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFFA78BFA).withValues(alpha: 0.35))),
            child: _thinking
                ? Row(children: [const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Color(0xFFA78BFA))), const SizedBox(width: 12), Expanded(child: Text(_status, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)))])
                : d == null
                    ? const Text('What do you want to invent? Type it below, or tap an idea.', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, height: 1.4))
                    : SingleChildScrollView(
                        controller: _infoScroll,
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Row(children: [
                            Expanded(child: Text(d.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15.5))),
                            Text(d.fromAi ? '🤖 AI design' : '📚 From the library', style: const TextStyle(color: Colors.white38, fontSize: 10.5, fontWeight: FontWeight.w700)),
                          ]),
                          if (_status.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 3), child: Text(_status, style: const TextStyle(color: Color(0xFFFBBF24), fontSize: 11.5))),
                          const SizedBox(height: 3),
                          Text(d.explain, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
                          if (d.honest.isNotEmpty) Container(margin: const EdgeInsets.only(top: 6), padding: const EdgeInsets.all(8), decoration: BoxDecoration(color: const Color(0xFFFBBF24).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)), child: Text(d.honest, style: const TextStyle(color: Color(0xFFFDE68A), fontSize: 11.5, height: 1.35))),
                          const SizedBox(height: 6),
                          for (var i = 0; i < d.steps.length; i++)
                            Padding(
                              padding: const EdgeInsets.only(bottom: 3),
                              child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                Text(i < _step ? '✅' : (i == _step && _building ? '🔧' : '⬜'), style: const TextStyle(fontSize: 12)),
                                const SizedBox(width: 6),
                                Expanded(child: Text(d.steps[i], style: TextStyle(color: i < _step ? Colors.white : Colors.white54, fontSize: 12, height: 1.3))),
                              ]),
                            ),
                          for (final qa in _qa) ...[
                            const SizedBox(height: 8),
                            Align(alignment: Alignment.centerRight, child: Container(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6), decoration: BoxDecoration(color: const Color(0xFFA78BFA).withValues(alpha: 0.3), borderRadius: BorderRadius.circular(12)), child: Text(qa.$1, style: const TextStyle(color: Colors.white, fontSize: 12.5, fontWeight: FontWeight.w700)))),
                            const SizedBox(height: 4),
                            Container(padding: const EdgeInsets.all(10), decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(12)), child: Text(qa.$2, style: const TextStyle(color: Colors.white, fontSize: 12.5, height: 1.4))),
                          ],
                          if (_answering) const Padding(padding: EdgeInsets.only(top: 8), child: Text('Thinking…', style: TextStyle(color: Colors.white54, fontSize: 12))),
                        ]),
                      ),
          ),
        ),
        Expanded(child: BoardEditor
(board: _board, popIn: _pop)),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        if (d != null)
          StudioRow(children: [
            StudioChip(label: 'Ask about it', selected: _askMode, color: const Color(0xFFA78BFA), onTap: () => setState(() => _askMode = true)),
            StudioChip(label: 'Invent something new', selected: !_askMode, color: const Color(0xFFA78BFA), onTap: () => setState(() => _askMode = false)),
            if (_askMode)
              for (final s in const ['How does it work?', 'Why is it not working?', 'What is the most important part?'])
                StudioChip(label: s, selected: false, color: const Color(0xFFA78BFA), onTap: () {
                  _ctl.text = s;
                  _ask();
                }),
          ]),
        if (d == null || !_askMode) StudioRow(children: [for (final i in _ideas) StudioChip(label: i, selected: false, color: const Color(0xFFA78BFA), onTap: () => _invent(i))]),

        Row(children: [
          Expanded(
            child: TextField(
              controller: _ctl,
              onSubmitted: (_) => _askMode && d != null ? _ask() : _invent(),
              textInputAction: TextInputAction.go,
              style: const TextStyle(color: Colors.white),
              decoration: InputDecoration(hintText: _askMode && d != null ? 'Ask a question about it…' : 'I want to make…', hintStyle: const TextStyle(color: Colors.white38), isDense: true, filled: true, fillColor: Colors.white.withValues(alpha: 0.07), border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none), contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12)),
            ),
          ),
          const SizedBox(width: 8),
          StudioButton(icon: _askMode && d != null ? Icons.question_answer_rounded : Icons.auto_awesome_rounded, label: _askMode && d != null ? 'Ask' : 'Invent', color: const Color(0xFFA78BFA), onTap: () => _askMode && d != null ? _ask() : _invent()),
        ]),
      ]),
    );
  }
}

