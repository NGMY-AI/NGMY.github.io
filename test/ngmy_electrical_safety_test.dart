import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_electrical_safety.dart';

const _rules = DeviceRules(name: 'Outlet');
const _hot = Terminal(1, 'Brass', TerminalRole.hot);
const _neu = Terminal(2, 'Silver', TerminalRole.neutral);
const _gnd = Terminal(3, 'Green', TerminalRole.ground);
const _load = Terminal(4, 'LOAD (taped)', TerminalRole.load);
const _black = Wire('black', 'Black', WireFunction.hot);
const _white = Wire('white', 'White', WireFunction.neutral);
const _bare = Wire('ground', 'Bare copper', WireFunction.ground);

SafetyReport judge(List<Connection> c, {bool supported = true}) => evaluateConnections(_rules, c, supported: supported);

void _wire(RoomProject p, int slot, Map<int, String> plan) {
  for (final e in plan.entries) {
    expect(p.fasten(slot, e.value, e.key).ok, isTrue);
  }
  expect(p.pushIn(slot).ok, isTrue);
  expect(p.coverOn(slot).ok, isTrue);
}

void main() {
  group('the safety engine', () {
    test('correct outlet wiring is CORRECT and safe', () {
      final r = judge([const Connection(_black, _hot), const Connection(_white, _neu), const Connection(_bare, _gnd)]);
      expect(r.status, SafetyStatus.correct);
      expect(r.safe, isTrue);
      expect(r.consequence.operates, isTrue);
    });

    test('reversed hot and neutral is UNSAFE, shows live metal, and nothing runs on it', () {
      final r = judge([const Connection(_black, _neu), const Connection(_white, _hot), const Connection(_bare, _gnd)]);
      expect(r.status, SafetyStatus.unsafe);
      expect(r.findings.any((f) => f.code == 'REVERSED'), isTrue);
      expect(r.consequence.operates, isFalse);
      expect(r.consequence.effect, 'arc');
    });

    test('a missing neutral is UNSAFE with nothing to see (no smoke does not mean safe)', () {
      final r = judge([const Connection(_black, _hot), const Connection(_bare, _gnd)]);
      expect(r.status, SafetyStatus.unsafe);
      expect(r.findings.single.code, 'OPEN_NEUTRAL');
      expect(r.consequence.effect, 'none');
      expect(r.safe, isFalse);
    });

    test('a missing ground is UNSAFE even though the device runs', () {
      final r = judge([const Connection(_black, _hot), const Connection(_white, _neu)]);
      expect(r.status, SafetyStatus.unsafe);
      expect(r.consequence.operates, isTrue, reason: 'it runs, and that is the trap');
      expect(r.safe, isFalse);
    });

    test('the ground on the wrong terminal, and the neutral used as ground, are UNSAFE', () {
      expect(judge([const Connection(_black, _hot), const Connection(_white, _neu), const Connection(_bare, _neu)]).findings.any((f) => f.code == 'GROUND_AS_CURRENT'), isTrue);
      expect(judge([const Connection(_black, _hot), const Connection(_white, _gnd), const Connection(_bare, _gnd)]).findings.any((f) => f.code == 'NEUTRAL_GROUND'), isTrue);
      final hotOnGround = judge([const Connection(_black, _gnd), const Connection(_white, _neu), const Connection(_bare, _hot)]);
      expect(hotOnGround.status, SafetyStatus.unsafe);
      expect(hotOnGround.consequence.effect, 'fire');
      expect(hotOnGround.consequence.trips, isTrue);
    });

    test('hot and neutral joined is a short with fire; a loose wire and bare copper are UNSAFE', () {
      final s = judge([const Connection(_black, _hot), const Connection(_white, _hot), const Connection(_bare, _gnd)]);
      expect(s.findings.any((f) => f.code == 'SHORT'), isTrue);
      expect(s.consequence.burns, isTrue);
      final loose = judge([const Connection(_black, _hot, secure: false), const Connection(_white, _neu), const Connection(_bare, _gnd)]);
      expect(loose.status, SafetyStatus.unsafe);
      expect(loose.consequence.effect, 'smoke');
      final bare = judge([const Connection(_black, _hot, bare: true), const Connection(_white, _neu), const Connection(_bare, _gnd)]);
      expect(bare.findings.any((f) => f.code == 'EXPOSED'), isTrue);
    });

    test('wires on the taped LOAD side are INCORRECT and nothing happens; nothing connected is INCOMPLETE', () {
      final r = judge([const Connection(_black, _load), const Connection(_white, _load), const Connection(_bare, _gnd)]);
      expect(r.findings.any((f) => f.code == 'LOAD_SIDE'), isTrue);
      expect(r.safe, isFalse);
      final none = judge(const []);
      expect(none.safe, isFalse);
      expect(none.findings.any((f) => f.code == 'MISSING_HOT'), isTrue);
    });

    test('a conductor of unknown function, or unverified functions, REQUIRE VERIFICATION and are never CORRECT', () {
      const mystery = Wire('mystery', 'White (switch loop?)', WireFunction.unknown);
      final r = judge([const Connection(_black, _hot), const Connection(mystery, _neu), const Connection(_bare, _gnd)]);
      expect(r.findings.any((f) => f.code == "UNVERIFIED"), isTrue);
      expect(r.safe, isFalse);
      final unverified = evaluateConnections(_rules, [const Connection(_black, _hot), const Connection(_white, _neu), const Connection(_bare, _gnd)], functionsVerified: false);
      expect(unverified.status, SafetyStatus.requiresVerification);
    });

    test('an unsupported fixture is UNSAFE however well it is wired', () {
      final r = judge([const Connection(_black, _hot), const Connection(_white, _neu), const Connection(_bare, _gnd)], supported: false);
      expect(r.status, SafetyStatus.unsafe);
      expect(r.findings.single.code, 'SUPPORT');
    });

    test('the switch type must match the circuit; leads must follow the diagram', () {
      expect(evaluateSwitchChoice(installed: 'single-pole', required: 'three-way').status, SafetyStatus.incorrect);
      expect(evaluateSwitchChoice(installed: 'three-way', required: 'three-way').safe, isTrue);
      expect(evaluateSwitchChoice(installed: 'mystery', required: 'three-way').status, SafetyStatus.requiresVerification);
      final fan = {'motor': 'fan control', 'light': 'light control'};
      expect(evaluateDiagram('fan', fan, {'motor': 'light control', 'light': 'fan control'}).status, SafetyStatus.incorrect);
      expect(evaluateDiagram('fan', fan, {'motor': 'fan control'}).status, SafetyStatus.incomplete);
      expect(evaluateDiagram('fan', fan, fan).safe, isTrue);
      expect(evaluateDiagram('fan', fan, fan, diagramKnown: false).status, SafetyStatus.requiresVerification);
    });
  });

  group('the lessons use the engine', () {
    WiringState wired(Map<int, String> plan) {
      final s = WiringState()..power = false;
      for (final e in plan.entries) {
        s.attached[e.key] = e.value;
      }
      return s;
    }

    test('an incomplete switch, wrong ceiling-light wiring and a fan on a plain box are all judged', () {
      final sw = electricalLesson('switch');
      expect(evaluateWiring(sw, wired({idGreen: 'ground', idBrassTop: 'blackLine'})).status, SafetyStatus.incomplete);
      expect(evaluateWiring(sw, wired({idGreen: 'ground', idBrassTop: 'blackLine', idBrassBottom: 'blackLoad'})).ok, isTrue);
      final light = electricalLesson('light');
      final swapped = evaluateWiring(light, wired({idNutGround: 'ground', idNutWhite: 'black', idNutBlack: 'white'}));
      expect(swapped.ok, isFalse);
      expect(swapped.works, isFalse, reason: 'a light on reversed polarity is not allowed to count as working');
      final fan = electricalLesson('fan');
      final plan = {idNutGround: 'ground', idNutWhite: 'white', idNutBlack: 'black'};
      expect(evaluateWiring(fan, wired(plan)).ok, isTrue);
      final onPlainBox = wired(plan)..supported = false;
      expect(evaluateWiring(fan, onPlainBox).status, SafetyStatus.unsafe);
    });

    test('practice feedback explains the rule and the fix; Learn mode refuses and explains', () {
      final outlet = electricalLesson('outlet');
      final s = WiringState()
        ..power = false
        ..practice = true;
      tryFasten(outlet, s, 'black', outlet.hookups.firstWhere((h) => h.id == idSilverTop));
      tryFasten(outlet, s, 'white', outlet.hookups.firstWhere((h) => h.id == idBrassTop));
      tryFasten(outlet, s, 'ground', outlet.hookups.firstWhere((h) => h.id == idGreen));
      final v = evaluateWiring(outlet, s);
      expect(v.kind, 'reversed');
      expect(v.message, contains('reversed'));
      expect(v.fix, contains('brass'));
      final learn = WiringState()..power = false;
      expect(tryFasten(outlet, learn, 'black', outlet.hookups.firstWhere((h) => h.id == idSilverTop)), contains('BRASS'));
    });
  });

  group('the job', () {
    test('THE BUG: hot and neutral swapped no longer lets a TV run; it shows live-metal arcs, in practice and in learn mode', () {
      for (final practice in [true, false]) {
        final p = RoomProject(seed: 3, practice: practice, kind: 0)..fastForward();
        final slot = p.orders.firstWhere((o) => o.device == 'outlet').slot;
        expect(p.installDevice(slot, 'outlet').ok, isTrue);
        _wire(p, slot, {idGreen: 'ground', idSilverTop: 'black', idBrassTop: 'white'});
        p.toggleBreaker();
        final plugged = p.plug(slot, 'tv');
        expect(p.applianceRuns(slot), isFalse, reason: 'the TV must not run on a reversed outlet (practice: $practice)');
        expect(plugged.ok, isFalse);
        expect(p.fxKind[slot], 'arc');
        expect(p.verdict(slot).ok, isFalse);
        expect(p.devicesDone, isFalse);
      }
    });

    test('a correct outlet runs the TV', () {
      final p = RoomProject(seed: 3, practice: true, kind: 0)..fastForward();
      final slot = p.orders.firstWhere((o) => o.device == 'outlet').slot;
      p.installDevice(slot, 'outlet');
      _wire(p, slot, {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'});
      p.toggleBreaker();
      expect(p.plug(slot, 'tv').ok, isTrue);
      expect(p.applianceRuns(slot), isTrue);
      expect(p.fxKind, isEmpty);
    });

    test('test mode says nothing until submit and never passes unsafe or missing wiring', () {
      final p = RoomProject(seed: 3, kind: 0)..fastForward();
      p.test = true;
      final slot = p.orders.firstWhere((o) => o.device == 'outlet').slot;
      p.installDevice(slot, 'outlet');
      // Right and wrong wires get exactly the same answer.
      final right = p.fasten(slot, 'ground', idGreen).msg;
      final wrong = p.fasten(slot, 'black', idSilverTop).msg;
      p.fasten(slot, 'white', idSilverBottom);
      expect(right, wrong);
      expect(right, TestSession.neutralNote);
      expect(p.pushIn(slot).ok, isTrue);
      p.coverOn(slot);
      final on = p.toggleBreaker();
      expect(on.fx, anyOf('burn', 'trip', 'arc'));
      expect(on.msg, isNot(contains('reversed')), reason: 'the test does not explain the answer');
      final session = TestSession(p.testAttempts(), p.testQuestions());
      for (var i = 0; i < session.questions.length; i++) {
        expect(session.answer(i, session.questions[i].correct), TestSession.neutralNote);
      }
      final res = session.submit();
      expect(res.passed, isFalse, reason: 'unsafe or missing wiring never passes, even with every answer right');
      expect(res.violations, isNotEmpty);
    });
  });

  group('the test', () {
    TestSession build(List<Connection> c, {bool right = true}) {
      final s = TestSession([TestAttempt('Outlet', _rules, c)], kLessonQuestions['outlet']!);
      for (var i = 0; i < s.questions.length; i++) {
        s.answer(i, right ? s.questions[i].correct : (s.questions[i].correct + 1) % 3);
      }
      return s;
    }

    test('a correct circuit with right answers passes with the full score', () {
      final r = build([const Connection(_black, _hot), const Connection(_white, _neu), const Connection(_bare, _gnd)]).submit();
      expect(r.passed, isTrue);
      expect(r.score, 100);
    });

    test('an unsafe circuit never passes, even if every question is right, and its points are capped', () {
      final r = build([const Connection(_black, _neu), const Connection(_white, _hot), const Connection(_bare, _gnd)]).submit();
      expect(r.passed, isFalse);
      expect(r.items.single.points, lessThan(kPassMark));
      expect(r.violations.any((v) => v.code == 'REVERSED'), isTrue);
    });

    test('wrong answers cost points and are explained after submit', () {
      final r = build([const Connection(_black, _hot), const Connection(_white, _neu), const Connection(_bare, _gnd)], right: false).submit();
      expect(r.score, lessThan(100));
      expect(r.passed, isFalse);
      expect(r.answers.any((a) => !a.right && a.question.why.isNotEmpty), isTrue);
    });
  });
}
