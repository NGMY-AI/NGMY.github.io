// ═════════════════════════════════════════════════════════════════════════════
// THE ELECTRICAL SAFETY ENGINE
//
// One place that decides whether a simulated wiring job is correct and safe. The lessons, the room jobs and the test all
// ask it. It has no screens in it, so the same rules serve practice, the test and any lesson added later.
//
// It keeps four things apart: a wire that is physically fastened, a wire on the terminal it is meant for, a circuit that
// is complete, and a circuit that passes the safety checks. Only a circuit that is all four is CORRECT. A device that
// works (a light that comes on, a TV that plays) is never, on its own, a reason to call the wiring safe.
//
// These are simplified U.S. residential training rules for a simulator. Real work follows the device's own instructions,
// the local electrical code, and a licensed electrician.
// ═════════════════════════════════════════════════════════════════════════════

/// How a wiring job is judged.
enum SafetyStatus {
  /// Every applicable rule is met.
  correct,

  /// A required connection rule is broken.
  incorrect,

  /// The arrangement is a simulated electrical hazard.
  unsafe,

  /// Something that is needed is missing.
  incomplete,

  /// The wire functions, the diagram or the conditions are not established, so it cannot be called safe.
  requiresVerification,
}

extension SafetyStatusText on SafetyStatus {
  String get label => switch (this) {
        SafetyStatus.correct => 'CORRECT',
        SafetyStatus.incorrect => 'INCORRECT',
        SafetyStatus.unsafe => 'UNSAFE',
        SafetyStatus.incomplete => 'INCOMPLETE',
        SafetyStatus.requiresVerification => 'REQUIRES VERIFICATION',
      };

  /// How bad it is, for choosing the worst of several findings.
  int get severity => switch (this) {
        SafetyStatus.correct => 0,
        SafetyStatus.incomplete => 1,
        SafetyStatus.requiresVerification => 2,
        SafetyStatus.incorrect => 3,
        SafetyStatus.unsafe => 4,
      };
}

/// What a terminal is for.
enum TerminalRole { hot, neutral, ground, load }

/// What a conductor does in the circuit. [unknown] means nobody has verified it.
enum WireFunction { hot, neutral, ground, unknown }

class Terminal {
  const Terminal(this.id, this.name, this.role);
  final int id;
  final String name;
  final TerminalRole role;
}

class Wire {
  const Wire(this.key, this.label, this.function);
  final String key;
  final String label;

  /// The function this conductor really has in this circuit (the color is only a hint).
  final WireFunction function;
}

/// A wire fastened to a terminal. [secure] is false for a loose connection, [bare] for copper left showing.
class Connection {
  const Connection(this.wire, this.terminal, {this.secure = true, this.bare = false});
  final Wire wire;
  final Terminal terminal;
  final bool secure;
  final bool bare;
}

/// What the device needs: how many hot and neutral wires, and whether it needs a ground.
class DeviceRules {
  const DeviceRules({required this.name, this.hotWires = 1, this.neutralWires = 1, this.needsGround = true});
  final String name;
  final int hotWires, neutralWires;
  final bool needsGround;
}

/// One thing the engine found, with the rule behind it and how to put it right.
class SafetyFinding {
  const SafetyFinding(this.code, this.status, this.message, this.rule, this.fix);
  final String code;
  final SafetyStatus status;
  final String message;
  final String rule;
  final String fix;
}

/// What the simulation shows when the power goes on: nothing, a dead device, a spark, a trip, a fire.
class Consequence {
  const Consequence(this.kind, this.effect, this.text, {this.operates = false, this.trips = false, this.burns = false});

  /// none, dead, wrong, shock, arc, trip, fire, hidden.
  final String kind;

  /// What to draw: none, arc (blue crackle on live metal), spark, smoke, fire.
  final String effect;
  final String text;

  /// Does the device do its job (a light comes on)? That never makes it safe.
  final bool operates;
  final bool trips, burns;
}

class SafetyReport {
  const SafetyReport(this.status, this.findings, this.consequence);
  final SafetyStatus status;
  final List<SafetyFinding> findings;
  final Consequence consequence;

  bool get safe => status == SafetyStatus.correct;
  bool get hasFault => !safe;
}

/// Judges a set of connections. Everything the learner sees about right and wrong comes from here.
///
/// [unverified] holds wires whose function nobody has established (an old house, a switch loop): the result can never be CORRECT
/// while one is in use. [supported] is false for a fixture that hangs on an unsuitable box.
SafetyReport evaluateConnections(DeviceRules rules, List<Connection> conns, {bool supported = true, bool functionsVerified = true}) {
  final f = <SafetyFinding>[];
  void add(String code, SafetyStatus st, String msg, String rule, String fix) => f.add(SafetyFinding(code, st, msg, rule, fix));

  int count(WireFunction w, TerminalRole t) => conns.where((c) => c.wire.function == w && c.terminal.role == t).length;
  final hotOnHot = count(WireFunction.hot, TerminalRole.hot);
  final hotOnNeu = count(WireFunction.hot, TerminalRole.neutral);
  final hotOnGnd = count(WireFunction.hot, TerminalRole.ground);
  final neuOnNeu = count(WireFunction.neutral, TerminalRole.neutral);
  final neuOnHot = count(WireFunction.neutral, TerminalRole.hot);
  final neuOnGnd = count(WireFunction.neutral, TerminalRole.ground);
  final gndOnGnd = count(WireFunction.ground, TerminalRole.ground);
  final gndOnHot = count(WireFunction.ground, TerminalRole.hot);
  final gndOnNeu = count(WireFunction.ground, TerminalRole.neutral);
  final onLoad = conns.where((c) => c.terminal.role == TerminalRole.load).length;

  if (conns.any((c) => c.wire.function == WireFunction.unknown) || !functionsVerified) {
    add('UNVERIFIED', SafetyStatus.requiresVerification, 'A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.', 'Verify every conductor with a tester before you connect it.', 'Identify each wire with a tester and the device diagram, then connect it.');
  }
  if (conns.any((c) => !c.secure)) {
    add('LOOSE', SafetyStatus.unsafe, 'A connection is loose. A loose connection heats up and can arc.', 'Every conductor must be fastened tightly under its screw or connector.', 'Tighten the connection.');
  }
  if (conns.any((c) => c.bare)) {
    add('EXPOSED', SafetyStatus.unsafe, 'Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.', 'No conductor may be left exposed.', 'Trim the wire so only the part under the screw is bare.');
  }
  if (!supported) {
    add('SUPPORT', SafetyStatus.unsafe, 'The box or support is not rated for this device. It can fall.', 'A fixture or fan must hang from a box or bracket rated for its weight.', 'Use a box rated for this fixture (a fan-rated box for a fan).');
  }
  if (hotOnGnd > 0 || gndOnHot > 0) {
    add('HOT_TO_GROUND', SafetyStatus.unsafe, 'The hot wire is connected to the ground. That is a short circuit to ground: a very large current.', 'The equipment ground never carries current in normal use, and the hot wire never touches it.', 'Hot goes on the hot terminal (brass). Ground goes only on the green screw.');
  }
  if ((hotOnNeu > 0 && neuOnNeu > 0) || (neuOnHot > 0 && hotOnHot > 0)) {
    add('SHORT', SafetyStatus.unsafe, 'The hot and the neutral are connected together. That is a short circuit.', 'Hot and neutral must never touch each other.', 'Put each wire on its own terminal.');
  } else if (hotOnNeu > 0 || neuOnHot > 0) {
    add('REVERSED', SafetyStatus.unsafe, 'Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.', 'Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.', 'Swap them: black (hot) to brass, white (neutral) to silver.');
  }
  if (neuOnGnd > 0 || gndOnNeu > 0) {
    add('NEUTRAL_GROUND', SafetyStatus.unsafe, 'The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.', 'The neutral is never used as the equipment ground, and the two are not joined at the device.', 'Neutral to the silver terminal only. Ground to the green screw only.');
  }
  if (gndOnHot > 0 && hotOnGnd == 0 || gndOnNeu > 0 && neuOnGnd == 0) {
    add('GROUND_AS_CURRENT', SafetyStatus.unsafe, 'The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.', 'The equipment ground goes only to the ground terminal.', 'Move the bare copper (ground) wire to the green screw.');
  }
  if (onLoad > 0 && hotOnHot < rules.hotWires) {
    add('LOAD_SIDE', SafetyStatus.incorrect, 'The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.', 'Supply (line) conductors go to the LINE terminals.', 'Move the wires to the LINE screws.');
  }
  if (hotOnHot < rules.hotWires && onLoad == 0 && hotOnNeu == 0 && neuOnHot == 0 && hotOnGnd == 0) {
    add('MISSING_HOT', SafetyStatus.incomplete, 'The hot wire is not on the hot terminal, so the device gets no power.', 'The device needs its hot connection.', 'Connect the black (hot) wire to the brass terminal.');
  }
  if (hotOnHot >= rules.hotWires && neuOnNeu < rules.neutralWires && rules.neutralWires > 0 && neuOnHot == 0 && neuOnGnd == 0) {
    add('OPEN_NEUTRAL', SafetyStatus.unsafe, 'The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.', 'The neutral return conductor must be connected.', 'Connect the white (neutral) wire to the silver terminal.');
  }
  if (rules.needsGround && gndOnGnd == 0) {
    add('MISSING_GROUND', SafetyStatus.unsafe, 'There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.', 'A required equipment ground must be connected to the ground terminal.', 'Connect the bare copper (ground) wire to the green screw.');
  }

  var status = SafetyStatus.correct;
  for (final x in f) {
    if (x.status.severity > status.severity) status = x.status;
  }
  return SafetyReport(status, f, _consequenceOf(f, conns));
}

Consequence _consequenceOf(List<SafetyFinding> f, List<Connection> conns) {
  bool has(String c) => f.any((x) => x.code == c);
  if (has('SHORT') || has('HOT_TO_GROUND')) {
    return const Consequence('fire', 'fire', 'BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.', trips: true, burns: true);
  }
  if (has('LOOSE')) {
    return const Consequence('fire', 'smoke', 'The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.', burns: true);
  }
  if (has('EXPOSED')) {
    return const Consequence('arc', 'spark', 'Bare copper touches something it should not: sparks. The circuit is not safe.');
  }
  if (has('GROUND_AS_CURRENT')) {
    return const Consequence('arc', 'arc', 'Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.');
  }
  if (has('REVERSED')) {
    return const Consequence('arc', 'arc', 'Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.');
  }
  if (has('NEUTRAL_GROUND')) {
    return const Consequence('trip', 'spark', 'The neutral and ground are joined: the protective device trips with a snap of sparks.', trips: true);
  }
  if (has('SUPPORT')) {
    return const Consequence('hidden', 'none', 'It looks fine for now. But the support cannot carry the weight, and it can fall later.');
  }
  if (has('OPEN_NEUTRAL')) {
    return const Consequence('hidden', 'none', 'Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.');
  }
  if (has('LOAD_SIDE') || has('MISSING_HOT')) {
    return const Consequence('dead', 'none', 'Nothing happens: the device gets no power.');
  }
  if (has('UNVERIFIED')) {
    return const Consequence('hidden', 'none', 'It cannot be judged: the wire functions were not verified.');
  }
  if (has('MISSING_GROUND')) {
    return const Consequence('hidden', 'none', 'It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.', operates: true);
  }
  return const Consequence('none', 'none', 'It works, and every safety rule is met.', operates: true);
}

// ─── The test ────────────────────────────────────────────────────────────────

/// What a learner built for one device in the test.
class TestAttempt {
  const TestAttempt(this.title, this.rules, this.connections, {this.supported = true});
  final String title;
  final DeviceRules rules;
  final List<Connection> connections;
  final bool supported;
}

class TestItemResult {
  const TestItemResult(this.title, this.report, this.points);
  final String title;
  final SafetyReport report;

  /// 0 to 100.
  final int points;
}

class TestQuestion {
  const TestQuestion(this.text, this.choices, this.correct, this.why);
  final String text;
  final List<String> choices;
  final int correct;
  final String why;
}

class QuestionResult {
  const QuestionResult(this.question, this.chosen);
  final TestQuestion question;
  final int chosen;
  bool get right => chosen == question.correct;
}

class TestResult {
  const TestResult(this.items, this.answers, this.score, this.passed);
  final List<TestItemResult> items;
  final List<QuestionResult> answers;
  final int score;

  /// A test is passed only if every circuit is CORRECT and the score is high enough. An unsafe circuit never passes.
  final bool passed;
  List<SafetyFinding> get violations => [for (final i in items) ...i.report.findings.where((x) => x.status.severity >= SafetyStatus.incorrect.severity)];
}

const int kPassMark = 80;

/// A test in progress. It says the same thing whether a connection is right or wrong, and shows nothing until [submit].
class TestSession {
  TestSession(this.attempts, this.questions);
  final List<TestAttempt> attempts;
  final List<TestQuestion> questions;
  final Map<int, int> _answers = {};
  bool submitted = false;

  /// What the learner hears after each action in the test: the same words every time.
  static const String neutralNote = 'Recorded.';

  String record() => neutralNote;

  String answer(int question, int choice) {
    _answers[question] = choice;
    return neutralNote;
  }

  TestResult submit() {
    submitted = true;
    final items = <TestItemResult>[];
    for (final a in attempts) {
      final r = evaluateConnections(a.rules, a.connections, supported: a.supported);
      final right = a.connections.where((c) => _fits(c)).length;
      final need = a.rules.hotWires + a.rules.neutralWires + (a.rules.needsGround ? 1 : 0);
      var pts = need == 0 ? 0 : (right * 100 / need).round().clamp(0, 100);
      // A circuit that is not CORRECT can never score above a fail, however much of it is right.
      if (!r.safe) pts = pts.clamp(0, kPassMark - 1);
      items.add(TestItemResult(a.title, r, pts));
    }
    final answers = [for (var i = 0; i < questions.length; i++) QuestionResult(questions[i], _answers[i] ?? -1)];
    final parts = <int>[for (final i in items) i.points, for (final q in answers) q.right ? 100 : 0];
    final score = parts.isEmpty ? 0 : (parts.reduce((a, b) => a + b) / parts.length).round();
    final passed = items.every((i) => i.report.safe) && score >= kPassMark;
    return TestResult(items, answers, score, passed);
  }

  static bool _fits(Connection c) => switch (c.wire.function) {
        WireFunction.hot => c.terminal.role == TerminalRole.hot,
        WireFunction.neutral => c.terminal.role == TerminalRole.neutral,
        WireFunction.ground => c.terminal.role == TerminalRole.ground,
        WireFunction.unknown => false,
      };
}

// ─── What the learner is taught about wires ──────────────────────────────────

class WireGuide {
  const WireGuide(this.color, this.function, this.terminal, this.circuit, this.note, this.exception);
  final String color, function, terminal, circuit, note, exception;
}

/// Common U.S. residential conventions. Other countries use other colors. Always verify.
const List<WireGuide> kWireGuide = [
  WireGuide('Black', 'Hot (line or switched)', 'Brass terminal', '120 V branch circuit', 'Carries the power from the breaker. Treat it as live until it is tested dead.', 'Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.'),
  WireGuide('Red', 'Hot (second hot or traveler)', 'Brass or the marked traveler terminal', 'Switch legs, travelers, fan and light controls', 'Often the switched wire to a fan or light, or a traveler.', 'Check the diagram: red can be a traveler or a second circuit.'),
  WireGuide('White', 'Neutral', 'Silver terminal', '120 V branch circuit', 'The return path for the current. It can still be live if something is wrong.', 'In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.'),
  WireGuide('Bare copper or green', 'Equipment ground', 'Green screw or the ground lead', 'Every grounded device', 'Not for current in normal use. It is the safety path if a fault happens.', 'Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.'),
  WireGuide('Gray / blue / others', 'Depends on the installation', 'See the device diagram', 'Low voltage, control wires, other systems', 'Do not guess what a wire does from its color.', 'Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.'),
];

const String kWireGuideNote =
    'These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.';

/// Questions for each lesson's test.
const Map<String, List<TestQuestion>> kLessonQuestions = {
  'outlet': [
    TestQuestion('On a standard receptacle, which terminal does the hot wire go on?', ['Silver', 'Brass', 'Green'], 1, 'Brass is the hot side. Silver is neutral and green is the ground.'),
    TestQuestion('The outlet works with hot and neutral swapped. Is it safe?', ['Yes, it works', 'No: reversed polarity leaves live parts that should be dead', 'Yes if there is a ground'], 1, 'Working is not the same as safe. Reversed polarity energizes the wrong parts.'),
    TestQuestion('May the neutral be used as the equipment ground?', ['Yes', 'No, never', 'Only in old houses'], 1, 'The ground is a separate safety path. The neutral carries current in normal use.'),
  ],
  'switch': [
    TestQuestion('A single-pole switch opens and closes which conductor?', ['The hot to the light', 'The neutral', 'The ground'], 0, 'The switch breaks the hot conductor to the load.'),
    TestQuestion('May the ground wire be used to carry current to the light?', ['Yes', 'No, never', 'If the wire is thick'], 1, 'The equipment ground is only for safety.'),
    TestQuestion('Does every switch box have a neutral?', ['Yes', 'No: never assume it does', 'Only new houses'], 1, 'Many switch boxes have no neutral. Smart switches need to be chosen for that.'),
  ],
  'light': [
    TestQuestion('Does a light that turns on prove the fixture is wired safely?', ['Yes', 'No: the wires, the ground and the support must be right', 'Only with a switch'], 1, 'A fixture can light up with an unsafe connection.'),
    TestQuestion('A fixture must hang from:', ['Its wires', 'A box or mount rated for its weight', 'Tape'], 1, 'The box carries the weight. The wires never do.'),
  ],
  'fan': [
    TestQuestion('A ceiling fan needs a box that is:', ['Any ceiling box', 'Rated for a fan', 'Plastic only'], 1, 'A fan shakes and is heavy. A plain light box can let it fall.'),
    TestQuestion('The fan spins. Is the installation safe?', ['Yes', 'No: support, ground and wiring must all be right', 'Yes if it is quiet'], 1, 'A spinning fan says nothing about the box, the ground or the connections.'),
  ],
  'gfci': [
    TestQuestion('On a GFCI, power from the breaker goes on:', ['LINE', 'LOAD', 'Either'], 0, 'LINE is the supply. LOAD feeds outlets further down the line.'),
  ],
};

// ─── Wiring that follows a diagram (switch types, fan and light leads) ───────

/// Judges leads that must follow the device's own wiring diagram: [expected] says which target each lead belongs to,
/// [actual] says where the learner put it (a lead that is not in [actual] is not connected).
/// A lead that goes to the wrong target is INCORRECT. A lead left out is INCOMPLETE. An unknown diagram is REQUIRES VERIFICATION.
SafetyReport evaluateDiagram(String device, Map<String, String> expected, Map<String, String> actual, {bool diagramKnown = true}) {
  final f = <SafetyFinding>[];
  if (!diagramKnown) {
    f.add(SafetyFinding('NO_DIAGRAM', SafetyStatus.requiresVerification, 'The wiring diagram for this $device is not established, so the connections cannot be judged.', 'Wire only to the manufacturer diagram for the exact device.', 'Find the diagram that came with the device.'));
  }
  expected.forEach((lead, target) {
    final got = actual[lead];
    if (got == null) {
      f.add(SafetyFinding('LEAD_MISSING', SafetyStatus.incomplete, 'The $lead lead is not connected.', 'Every lead on the diagram needs its connection.', 'Connect the $lead lead to $target.'));
    } else if (got != target) {
      f.add(SafetyFinding('LEAD_WRONG', SafetyStatus.incorrect, 'The $lead lead is connected to $got, but the diagram says $target.', 'Connections follow the approved wiring diagram.', 'Move the $lead lead to $target.'));
    }
  });
  var status = SafetyStatus.correct;
  for (final x in f) {
    if (x.status.severity > status.severity) status = x.status;
  }
  final ok = status == SafetyStatus.correct;
  return SafetyReport(status, f, ok ? const Consequence('none', 'none', 'It works as the diagram says.', operates: true) : const Consequence('wrong', 'none', 'It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.'));
}

/// A switch must be the type the circuit needs: a single-pole switch is not a three-way or a four-way, and the other way round.
SafetyReport evaluateSwitchChoice({required String installed, required String required}) {
  const known = {'single-pole', 'three-way', 'four-way', 'dimmer', 'smart-neutral', 'smart-no-neutral'};
  if (!known.contains(installed) || !known.contains(required)) {
    return const SafetyReport(SafetyStatus.requiresVerification, [SafetyFinding('SWITCH_UNKNOWN', SafetyStatus.requiresVerification, 'The switch type or the circuit type is not established.', 'The switch must match the circuit and its approved diagram.', 'Identify the circuit (one place to switch it, or two or more) and read the switch instructions.')], Consequence('hidden', 'none', 'It cannot be judged.'));
  }
  if (installed == required) {
    return const SafetyReport(SafetyStatus.correct, [], Consequence('none', 'none', 'The switch type matches the circuit.', operates: true));
  }
  return SafetyReport(SafetyStatus.incorrect, [SafetyFinding('SWITCH_TYPE', SafetyStatus.incorrect, 'A $installed switch cannot do the job of a $required switch.', 'The switching arrangement must match the switch type and its approved diagram.', 'Use a $required switch for this circuit.')], const Consequence('wrong', 'none', 'The light does not switch as it should.'));
}
