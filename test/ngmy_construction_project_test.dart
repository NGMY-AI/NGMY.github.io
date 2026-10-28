import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_project.dart';

/// Does every step of a room job the right way.
void doRoughIn(RoomProject p) {
  for (final o in p.orders) {
    final s = slotById(o.slot);
    final kind = s.ceiling ? (s.role == 'fan' ? 'fan' : 'ceiling') : 'wall';
    expect(p.mountBox(o.slot, kind).ok, isTrue, reason: 'box ${s.name}');
  }
  for (final o in p.orders) {
    for (final st in p.studsBetween(o.slot)) {
      if (!p.holes.contains(st)) expect(p.drillStud(st).ok, isTrue);
    }
    expect(p.pullCable(o.slot).ok, isTrue, reason: 'cable ${o.slot}');
  }
  expect(p.roughDone, isTrue);
}

void doDrywall(RoomProject p) {
  for (final e in kGoodSheetEdges) {
    expect(p.hangSheet(e).ok, isTrue);
  }
  for (final o in p.orders.where((o) => !slotById(o.slot).ceiling)) {
    expect(p.cutOpening(o.slot).ok, isTrue, reason: 'cut ${o.slot}');
  }
  for (final e in kGoodSheetEdges) {
    for (final st in p.studsUnder(e)) {
      for (var r = 0; r < RoomProject.screwRows; r++) {
        final a = p.screw(st, r);
        // A stud on the shared edge of two sheets is screwed by the first sheet only.
        if (!a.ok && !a.msg.contains('already')) fail(a.msg);
      }
    }
  }
}

void doFinish(RoomProject p) {
  for (var i = 0; i < 2; i++) {
    expect(p.tapeSeam(i).ok, isTrue);
  }
  for (var c = 0; c < 3; c++) {
    for (var i = 0; i < 2; i++) {
      expect(p.mudSeam(i).ok, isTrue);
    }
    expect(p.letDry().ok, isTrue);
  }
  for (var i = 0; i < 2; i++) {
    expect(p.sandSeam(i).ok, isTrue);
  }
  for (final e in kGoodSheetEdges) {
    expect(p.paintSheet(e).ok, isTrue);
  }
  expect(p.drywallDone, isTrue);
}

void wireRight(RoomProject p, int slot) {
  final d = p.devs[slot]!;
  final l = electricalLesson(d.kind);
  final plan = switch (d.kind) {
    'outlet' => {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'},
    'gfci' => {idGreen: 'ground', idSilverBottom: 'white', idBrassBottom: 'black'},
    'switch' => {idGreen: 'ground', idBrassTop: 'blackLine', idBrassBottom: 'blackLoad'},
    _ => {idNutGround: 'ground', idNutWhite: 'white', idNutBlack: 'black'},
  };
  for (final e in plan.entries) {
    final a = p.fasten(slot, e.value, e.key);
    expect(a.ok, isTrue, reason: '${l.id} ${e.key}: ${a.msg}');
  }
  expect(p.pushIn(slot).ok, isTrue);
  expect(p.coverOn(slot).ok, isTrue);
}

void main() {
  test('a whole room job, done right, ends with working outlets, switch and light', () {
    for (final seed in [1, 2, 3, 4, 5, 6]) {
      final p = RoomProject(seed: seed);
      doRoughIn(p);
      doDrywall(p);
      doFinish(p);
      for (final o in p.orders) {
        expect(p.installDevice(o.slot, o.device).ok, isTrue, reason: 'install ${o.device}');
      }
      expect(p.breaker, isFalse);
      for (final o in p.orders) {
        wireRight(p, o.slot);
      }
      final on = p.toggleBreaker();
      expect(on.ok, isTrue, reason: on.msg);
      expect(p.tripped, isFalse);
      for (final o in p.orders) {
        if (o.device == 'outlet' || o.device == 'gfci') {
          final a = p.plug(o.slot, 'tv');
          expect(a.ok, isTrue, reason: a.msg);
          expect(p.applianceRuns(o.slot), isTrue);
        }
      }
      expect(p.devicesDone, isFalse);
      final sw = p.orders.firstWhere((o) => o.device == 'switch').slot;
      final f = p.flipSwitch(sw);
      expect(f.ok, isTrue, reason: f.msg);
      expect(p.devicesDone, isTrue, reason: 'room ${p.roomName} seed $seed');
      expect(p.failed, isFalse);
    }
  });

  test('jobs are different from each other', () {
    final names = {for (var s = 1; s <= 30; s++) RoomProject(seed: s).roomName};
    expect(names.length, 3);
    final layouts = {for (var s = 1; s <= 30; s++) RoomProject(seed: s).orders.map((o) => '${o.slot}${o.device}').join(',')};
    expect(layouts.length, greaterThan(6));
  });

  test('the rough-in refuses wrong moves and says why', () {
    final p = RoomProject(seed: 1);
    final o = p.orders.first;
    expect(p.mountBox(o.slot, 'ceiling').msg, contains('ceiling box'));
    expect(p.mountBox(5, 'wall').msg, contains('cannot go in the ceiling'));
    expect(p.drillStud(3).msg, contains('Mount the boxes first'));
    expect(p.pullCable(o.slot).msg, contains('no box'));
    p.mountBox(o.slot, 'wall');
    expect(p.pullCable(o.slot).msg, contains('stud'));
    expect(p.hangSheet(-72).msg, contains('Finish the rough-in'));
    expect(p.mistakes, greaterThan(3));
  }
  );

  test('drywall: the edges land on studs, order matters, and screws need studs', () {
    final p = RoomProject(seed: 2);
    doRoughIn(p);
    expect(p.hangSheet(-48).msg, contains('between two studs'));
    expect(p.hangSheet(-72).ok, isTrue);
    expect(p.hangSheet(-72).msg, contains('already'));
    expect(p.screw(1, 0, betweenStuds: true).msg, contains('Missed the stud'));
    expect(p.tapeSeam(0).msg, contains('Hang all the sheets'));
    expect(p.paintSheet(-72).msg, contains('Cut the openings'));
    expect(p.cutOpening(5).msg, contains('Ceiling fixtures'));
    expect(p.mudSeam(0).msg, contains('Tape first'));
    expect(p.sandSeam(0).msg, contains('three coats'));
    expect(p.installDevice(p.orders.first.slot, p.orders.first.device).msg, contains('Finish the drywall'));
  });

  test('devices: the breaker rules, wrong heights, and what a real mistake does in practice mode', () {
    final p = RoomProject(seed: 1);
    doRoughIn(p);
    doDrywall(p);
    doFinish(p);
    final out = p.orders.firstWhere((o) => o.device == 'outlet');
    final sw = p.orders.firstWhere((o) => o.device == 'switch');
    // Learn mode: an outlet at switch height and a switch at outlet height are refused.
    expect(p.installDevice(sw.slot, 'outlet').msg, contains('Outlets go low'));
    expect(p.installDevice(out.slot, 'switch').msg, contains('switch goes about 48'));
    expect(p.installDevice(out.slot, 'light').msg, contains('light or a fan hangs'));
    expect(p.installDevice(out.slot, 'outlet').ok, isTrue);
    // The power is on: wires are refused, and wrong wires are explained.
    p.breaker = true;
    expect(p.fasten(out.slot, 'black', idBrassTop).msg, contains('STOP'));
    p.breaker = false;
    expect(p.fasten(out.slot, 'black', idSilverTop).msg, contains('BRASS'));
    expect(p.pushIn(out.slot).msg, contains('Every wire'));
  });

  test('practice mode: touching live wires shocks, and a hot wire on the ground burns the outlet and trips the breaker', () {
    final p = RoomProject(seed: 1, practice: true);
    doRoughIn(p);
    doDrywall(p);
    doFinish(p);
    final out = p.orders.firstWhere((o) => o.device == 'outlet').slot;
    expect(p.installDevice(out, 'outlet').ok, isTrue);
    p.breaker = true;
    final z = p.fasten(out, 'black', idBrassTop);
    expect(z.fx, 'shock');
    expect(p.lives, 2);
    expect(p.breaker, isFalse);
    // Wrong wires are allowed now, and the mistake shows when the power comes on.
    expect(p.fasten(out, 'black', idGreen).ok, isTrue);
    expect(p.fasten(out, 'white', idSilverTop).ok, isTrue);
    expect(p.fasten(out, 'ground', idBrassTop).ok, isTrue);
    expect(p.pushIn(out).ok, isTrue);
    expect(p.coverOn(out).ok, isTrue);
    final on = p.toggleBreaker();
    expect(on.fx, 'burn');
    expect(p.tripped, isTrue);
    expect(p.devs[out]!.w.burnt, isTrue);
    expect(p.plug(out, 'lamp').msg, contains('burnt'));
    expect(p.toggleBreaker().msg, contains('fully OFF'));
    expect(p.removeDevice(out).ok, isTrue);
    expect(p.installDevice(out, 'outlet').ok, isTrue);
  });

  test('three shocks end the job', () {
    final p = RoomProject(seed: 1, practice: true);
    doRoughIn(p);
    doDrywall(p);
    doFinish(p);
    final out = p.orders.firstWhere((o) => o.device == 'outlet').slot;
    p.installDevice(out, 'outlet');
    for (var i = 0; i < 3; i++) {
      p.breaker = true;
      p.fasten(out, 'black', idBrassTop);
    }
    expect(p.lives, 0);
    expect(p.failed, isTrue);
  });

  test('every wiring mistake has its own result', () {
    Verdict v(String lesson, Map<int, String> att) {
      final s = WiringState()..power = false..attached.addAll(att);
      return evaluateWiring(electricalLesson(lesson), s);
    }

    expect(v('outlet', {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'}).ok, isTrue);
    expect(v('outlet', {idGreen: 'ground', idSilverTop: 'black', idBrassTop: 'white'}).kind, 'reversed');
    expect(v('outlet', {idGreen: 'black', idSilverTop: 'white', idBrassTop: 'ground'}).kind, 'short');
    expect(v('outlet', {idGreen: 'ground', idSilverTop: 'white', idSilverBottom: 'black'}).kind, 'short');
    expect(v('outlet', {idGreen: 'ground', idBrassTop: 'black'}).kind, 'openNeutral');
    expect(v('outlet', {idGreen: 'ground', idSilverTop: 'white'}).kind, 'dead');
    expect(v('outlet', {idSilverTop: 'white', idBrassTop: 'black'}).kind, 'noGround');
    expect(v('outlet', {idGreen: 'white', idSilverTop: 'ground', idBrassTop: 'black'}).kind, 'bonded');
    expect(v('gfci', {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'}).kind, 'dead');
    expect(v('gfci', {idGreen: 'ground', idSilverBottom: 'white', idBrassBottom: 'black'}).ok, isTrue);
    expect(v('switch', {idGreen: 'ground', idBrassTop: 'blackLine', idBrassBottom: 'blackLoad'}).ok, isTrue);
    expect(v('switch', {idGreen: 'ground', idBrassTop: 'blackLine'}).kind, 'dead');
    expect(v('switch', {idGreen: 'blackLine', idBrassTop: 'blackLoad', idBrassBottom: 'ground'}).kind, 'short');
    expect(v('light', {idNutGround: 'ground', idNutWhite: 'white', idNutBlack: 'black'}).ok, isTrue);
    expect(v('light', {idNutGround: 'ground', idNutWhite: 'black', idNutBlack: 'white'}).kind, 'reversed');
    expect(v('fan', {idNutGround: 'black', idNutWhite: 'white', idNutBlack: 'ground'}).kind, 'short');
  });
}
