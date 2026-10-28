import 'dart:math' as math;

import 'ngmy_construction_house.dart';
import 'ngmy_construction_project.dart' show Act;

// ═════════════════════════════════════════════════════════════════════════════
// SERVICE CALLS: a customer rings with a list of problems in the house. You look around, find out what is
// wrong with the right tool, and fix it. Every call is a different mix of problems.
// ═════════════════════════════════════════════════════════════════════════════

enum FaultKind { tripped, noHotWater, nutLeak, pexLeak, deadOutlet, flicker, burntOutlet, gfciTripped, runningToilet, dripFaucet, wallHole, clogged }

class FaultInfo {
  const FaultInfo({required this.complaint, required this.clue, required this.tool, required this.done, required this.target, this.circuit = 0, this.safetyNote = ''});

  /// What the customer says.
  final String complaint;

  /// What a good look at the problem tells you.
  final String clue;
  final String tool;
  final String done;
  final int target;

  /// The breaker that must be off before you touch the wires (0 for none).
  final int circuit;
  final String safetyNote;
}

const Map<FaultKind, FaultInfo> kFaultInfo = {
  FaultKind.tripped: FaultInfo(complaint: 'The living room has no power at all.', clue: 'The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.', tool: 'hand', done: 'Breaker reset. The living room has power again.', target: idBreakerLiving),
  FaultKind.noHotWater: FaultInfo(complaint: 'There is no hot water.', clue: 'The water heater breaker has tripped (orange). Reset it by hand.', tool: 'hand', done: 'Breaker reset. The water heater is heating again.', target: idBreaker4),
  FaultKind.nutLeak: FaultInfo(complaint: 'Water is dripping under the kitchen sink.', clue: 'The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.', tool: 'wrench', done: 'Slip nut tightened. The drip stopped.', target: idHNut),
  FaultKind.pexLeak: FaultInfo(complaint: 'There is a wet spot on the wall behind the kitchen.', clue: 'A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.', tool: 'crimper', done: 'The joint is crimped again and it does not leak.', target: idHJoint),
  FaultKind.deadOutlet: FaultInfo(complaint: 'The outlet by the sofa does not work, but the lights do.', clue: 'The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.', tool: 'screwdriver', done: 'You tightened the loose screw. The outlet works again.', target: idHOutlet, circuit: idBreakerLiving, safetyNote: 'Turn the living room breaker OFF first.'),
  FaultKind.flicker: FaultInfo(complaint: 'The living room light flickers.', clue: 'A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.', tool: 'pliers', done: 'You twisted the wire nut tight. The light is steady.', target: idHLight, circuit: idBreakerLiving, safetyNote: 'Turn the living room breaker OFF first.'),
  FaultKind.burntOutlet: FaultInfo(complaint: 'The kitchen outlet sparks and smells burnt.', clue: 'The outlet has burnt. Turn the breaker off and replace it with a new outlet.', tool: 'newoutlet', done: 'New outlet fitted. No more sparks.', target: idHGfci, circuit: idBreaker2, safetyNote: 'Turn the kitchen breaker OFF first.'),
  FaultKind.gfciTripped: FaultInfo(complaint: 'The kitchen outlets are dead.', clue: 'The GFCI outlet has tripped. Press its RESET button by hand.', tool: 'hand', done: 'You pressed RESET. The kitchen outlets work.', target: idHGfci),
  FaultKind.runningToilet: FaultInfo(complaint: 'The toilet keeps running.', clue: 'The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.', tool: 'flapper', done: 'New flapper fitted. The toilet stops running.', target: idHToilet),
  FaultKind.dripFaucet: FaultInfo(complaint: 'The kitchen faucet drips.', clue: 'The faucet washer is worn. Tighten the packing nut with the wrench, then check.', tool: 'wrench', done: 'The faucet is sealed. No more drips.', target: idHFaucet),
  FaultKind.wallHole: FaultInfo(complaint: 'There is a hole in the wall.', clue: 'A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.', tool: 'patch', done: 'Patch fitted. Now it only needs mud, sanding and paint.', target: idHHole),
  FaultKind.clogged: FaultInfo(complaint: 'The kitchen sink drains very slowly.', clue: 'The drain is clogged. Use the plunger.', tool: 'plunger', done: 'The clog is gone. The sink drains fast.', target: idHCounter),
};

const List<String> kServiceTools = ['inspect', 'hand', 'screwdriver', 'pliers', 'wrench', 'crimper', 'plunger', 'flapper', 'newoutlet', 'patch'];

const Map<String, String> kToolNames = {
  'inspect': 'Look and test',
  'hand': 'Hand',
  'screwdriver': 'Screwdriver',
  'pliers': 'Pliers',
  'wrench': 'Wrench',
  'crimper': 'Crimp tool',
  'plunger': 'Plunger',
  'flapper': 'New flapper',
  'newoutlet': 'New outlet',
  'patch': 'Drywall patch',
};

class Fault {
  Fault(this.kind, {this.spot = 0});
  final FaultKind kind;
  final int spot;
  bool fixed = false;
  FaultInfo get info => kFaultInfo[kind]!;
}

/// The breaker in each room: living room, kitchen, bathroom, heater.
const List<int> kBreakers = [idBreakerLiving, idBreaker2, idBreaker3, idBreaker4];

class ServiceCall {
  ServiceCall({this.seed = 1, this.practice = false, int count = 4}) {
    final r = math.Random(seed);
    final kinds = [...FaultKind.values]..shuffle(r);
    final used = <int>{};
    final chosen = <Fault>[];
    for (final k in kinds) {
      final t = kFaultInfo[k]!.target;
      if (used.contains(t)) continue;
      used.add(t);
      chosen.add(Fault(k, spot: r.nextInt(kHoleSpots.length)));
      if (chosen.length >= count) break;
    }
    faults = chosen;
    _apply();
  }

  final int seed;
  bool practice;
  late final List<Fault> faults;
  final HouseState house = HouseState();
  int lives = 3;
  int mistakes = 0;
  int shocks = 0;
  bool failed = false;

  bool has(FaultKind k) => faults.any((f) => f.kind == k && !f.fixed);

  /// Sets the house to match the faults that are still there.
  void _apply() {
    house.trippedBreakers.clear();
    if (has(FaultKind.tripped)) house.trippedBreakers.add(idBreakerLiving);
    if (has(FaultKind.noHotWater)) house.trippedBreakers.add(idBreaker4);
    house.leaking = has(FaultKind.nutLeak);
    house.nutFixed = !house.leaking;
    house.pexLeak = has(FaultKind.pexLeak);
    house.burntOutlet = has(FaultKind.burntOutlet);
    house.gfciTripped = has(FaultKind.gfciTripped);
    house.flicker = has(FaultKind.flicker);
    house.toiletRunning = has(FaultKind.runningToilet);
    house.faucetDrip = has(FaultKind.dripFaucet);
    house.clogged = has(FaultKind.clogged);
    house.holes.clear();
    house.patched.clear();
    for (final f in faults.where((f) => f.kind == FaultKind.wallHole)) {
      if (f.fixed) {
        house.patched.add(f.spot);
      } else {
        house.holes.add(f.spot);
      }
    }
  }

  bool get allFixed => faults.every((f) => f.fixed);
  int get fixedCount => faults.where((f) => f.fixed).length;

  Fault? faultAt(int id) {
    for (final f in faults) {
      if (f.info.target == id || (f.kind == FaultKind.nutLeak && id == idHTrap) || (f.kind == FaultKind.pexLeak && id == idHPipes)) return f;
    }
    return null;
  }

  bool circuitLive(int breaker) => !house.trippedBreakers.contains(breaker) && !house.offBreakers.contains(breaker);

  Act _mistake(String m) {
    mistakes++;
    return Act(false, m);
  }

  Act _shock() {
    shocks++;
    lives--;
    // The breaker is knocked off by the shock so nobody gets hurt further.
    for (final b in kBreakers) {
      if (!house.trippedBreakers.contains(b)) house.offBreakers.add(b);
    }
    if (lives <= 0) {
      failed = true;
      return const Act(false, 'ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.', danger: true, fx: 'shock');
    }
    return Act(false, 'ZAP! You touched a live wire and got a shock. All the breakers were knocked off. $lives ${lives == 1 ? 'life' : 'lives'} left. Turn the breaker OFF first.', danger: true, fx: 'shock');
  }

  /// Use [tool] on the thing with object number [id].
  Act use(String tool, int id) {
    if (failed) return const Act(false, 'This call is over. Start a new one.');
    // The breaker panel.
    if (kBreakers.contains(id)) return _breaker(tool, id);
    final f = faultAt(id);
    if (tool == 'inspect') {
      if (f == null || f.fixed) return const Act(true, 'You look closely. Everything looks fine here.');
      return Act(true, 'You look and test: ${f.info.clue}');
    }
    if (f == null || f.fixed) {
      return Act(false, practice ? 'Nothing needs fixing there.' : 'There is nothing wrong with this, so the ${kToolNames[tool]} is not needed. Use "Look and test" on things to find the problem.');
    }
    final info = f.info;
    if (tool != info.tool) {
      mistakes++;
      return Act(false, practice ? 'That is not the right tool for this problem.' : 'The ${kToolNames[tool]} does not fix this. ${info.clue}');
    }
    // Wires are only touched with the circuit off.
    if (info.circuit != 0 && circuitLive(info.circuit)) {
      if (practice) return _shock();
      return _mistake('STOP! ${info.safetyNote} The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.');
    }
    f.fixed = true;
    _apply();
    return Act(true, info.done);
  }

  Act _breaker(String tool, int id) {
    if (tool == 'inspect') {
      return Act(true, house.trippedBreakers.contains(id) ? 'This breaker has tripped: it sits in the middle (orange).' : (house.offBreakers.contains(id) ? 'This breaker is switched OFF.' : 'This breaker is ON.'));
    }
    if (tool != 'hand') return _mistake(practice ? 'Use your hand on a breaker.' : 'A breaker is switched with your hand, not with a ${kToolNames[tool]}.');
    if (house.trippedBreakers.contains(id)) {
      final f = faults.where((f) => f.info.target == id && !f.fixed).toList();
      if (f.isNotEmpty) {
        f.first.fixed = true;
        _apply();
        return Act(true, f.first.info.done);
      }
      house.trippedBreakers.remove(id);
      return const Act(true, 'Breaker reset.');
    }
    if (house.offBreakers.contains(id)) {
      house.offBreakers.remove(id);
      return const Act(true, 'Breaker back ON.');
    }
    house.offBreakers.add(id);
    return const Act(true, 'Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)');
  }
}
