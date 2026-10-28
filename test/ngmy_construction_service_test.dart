import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_house.dart';
import 'package:ngmy/ngmy_construction_service.dart';

void main() {
  test('every service call can be solved with the right tools, in any of 60 different mixes', () {
    final mixes = <String>{};
    for (var seed = 1; seed <= 60; seed++) {
      final c = ServiceCall(seed: seed);
      expect(c.faults.length, 4);
      expect(c.faults.map((f) => f.info.target).toSet().length, 4, reason: 'no two problems on the same thing');
      mixes.add(c.faults.map((f) => f.kind.name).join(','));
      for (final f in List.of(c.faults)) {
        final i = f.info;
        if (i.circuit != 0 && c.circuitLive(i.circuit)) {
          final off = c.use('hand', i.circuit);
          expect(off.ok, isTrue, reason: off.msg);
        }
        final a = c.use(i.tool, i.target);
        expect(a.ok, isTrue, reason: '${f.kind.name} seed $seed: ${a.msg}');
        expect(f.fixed, isTrue);
      }
      expect(c.allFixed, isTrue);
      expect(c.house.trippedBreakers, isEmpty);
    }
    expect(mixes.length, greaterThan(30));
  });

  test('the wrong tool is explained in learn mode, and only refused in practice mode', () {
    final learn = ServiceCall(seed: 3);
    final f = learn.faults.firstWhere((f) => f.info.circuit == 0 && f.kind != FaultKind.tripped && f.kind != FaultKind.noHotWater);
    final wrong = learn.use(f.info.tool == 'wrench' ? 'pliers' : 'wrench', f.info.target);
    expect(wrong.ok, isFalse);
    expect(wrong.msg, contains(f.info.clue));
    final practice = ServiceCall(seed: 3, practice: true);
    final pf = practice.faults.firstWhere((x) => x.kind == f.kind);
    final w2 = practice.use(pf.info.tool == 'wrench' ? 'pliers' : 'wrench', pf.info.target);
    expect(w2.msg, 'That is not the right tool for this problem.');
    expect(practice.mistakes, 1);
  });

  test('touching live wires: learn mode stops you, practice mode shocks you, and three shocks end the call', () {
    ServiceCall withFault(FaultKind k, {bool practice = false}) {
      for (var s = 1; s < 500; s++) {
        final c = ServiceCall(seed: s, practice: practice);
        if (c.faults.any((f) => f.kind == k) && !c.faults.any((f) => f.kind == FaultKind.tripped)) return c;
      }
      throw StateError('no call with $k');
    }

    final c = withFault(FaultKind.deadOutlet);
    final f = c.faults.firstWhere((f) => f.kind == FaultKind.deadOutlet);
    final stop = c.use('screwdriver', f.info.target);
    expect(stop.msg, contains('STOP'));
    expect(c.lives, 3);
    final p = withFault(FaultKind.deadOutlet, practice: true);
    final pf = p.faults.firstWhere((f) => f.kind == FaultKind.deadOutlet);
    expect(p.use('screwdriver', pf.info.target).fx, 'shock');
    expect(p.lives, 2);
    expect(p.house.offBreakers, isNotEmpty);
    // Turning the breaker on again and doing it wrong twice more ends the call.
    for (var i = 0; i < 2; i++) {
      p.house.offBreakers.clear();
      p.use('screwdriver', pf.info.target);
    }
    expect(p.failed, isTrue);
    expect(p.use('wrench', idHNut).msg, contains('over'));
  });

  test('breakers can be switched off and on, and a tripped one is reset by hand', () {
    final c = ServiceCall(seed: 7);
    final off = c.use('hand', idBreaker2);
    expect(off.ok, isTrue);
    expect(c.circuitLive(idBreaker2), isFalse);
    expect(c.use('hand', idBreaker2).msg, contains('ON'));
    expect(c.use('wrench', idBreaker2).msg, contains('with your hand'));
    expect(c.use('inspect', idBreaker3).msg, contains('ON'));
  });

  test('the house shows each problem while it is there and not after it is fixed', () {
    for (var seed = 1; seed <= 20; seed++) {
      final c = ServiceCall(seed: seed);
      for (final f in c.faults) {
        switch (f.kind) {
          case FaultKind.nutLeak:
            expect(c.house.leaking && !c.house.nutFixed, isTrue);
          case FaultKind.pexLeak:
            expect(c.house.pexLeak, isTrue);
          case FaultKind.wallHole:
            expect(c.house.holes.contains(f.spot), isTrue);
          case FaultKind.clogged:
            expect(c.house.clogged, isTrue);
          default:
        }
      }
      expect(houseWater(c.house, 1.0).isNotEmpty || c.faults.every((f) => !{FaultKind.nutLeak, FaultKind.pexLeak, FaultKind.dripFaucet, FaultKind.runningToilet, FaultKind.clogged, FaultKind.burntOutlet}.contains(f.kind)), isTrue);
      expect(buildHouseScene(c.house).polys.length, greaterThan(1000));
    }
  });
}
