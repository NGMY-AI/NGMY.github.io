import 'dart:math' as math;

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE ROOM PROJECT: a whole room to build with your own hands.
// 1. Rough-in: mount the boxes, drill the studs and pull the cable from the panel.
// 2. Drywall: hang the sheets, cut openings, screw them, tape, mud, sand and paint.
// 3. Devices: install the outlets, switches, light and fan, wire them, and test them by plugging things in.
// Every job is a little different. Wrong moves are explained, and in practice mode real mistakes burn or shock.
// ═════════════════════════════════════════════════════════════════════════════

/// The studs along the back wall, 16 inches apart.
final List<double> kStudX = [for (var i = 0; i < 10; i++) -72.0 + 16 * i];

const double kPanelX = 64, kPanelY = 10, kLaneY = 40;

class BoxSlot {
  const BoxSlot(this.id, this.name, this.ceiling, this.pos, this.role);
  final int id;
  final String name;
  final bool ceiling;
  final V3 pos;

  /// low (outlet height), switch (switch height), light or fan.
  final String role;
}

const List<BoxSlot> kSlots = [
  BoxSlot(0, 'Outlet spot 1', false, V3(-57.8, -32, 0), 'low'),
  BoxSlot(1, 'Outlet spot 2', false, V3(-9.8, -32, 0), 'low'),
  BoxSlot(2, 'Outlet spot 3', false, V3(38.2, -32, 0), 'low'),
  BoxSlot(3, 'Switch spot 1', false, V3(-25.8, 0, 0), 'switch'),
  BoxSlot(4, 'Switch spot 2', false, V3(22.2, 0, 0), 'switch'),
  BoxSlot(5, 'Ceiling light spot', true, V3(-30, 48, 40), 'light'),
  BoxSlot(6, 'Ceiling fan spot', true, V3(30, 48, 40), 'fan'),
];

BoxSlot slotById(int id) => kSlots.firstWhere((s) => s.id == id);

/// One thing the customer asked for: this device in this place.
class Order {
  const Order(this.slot, this.device, {this.controlledBy});
  final int slot;
  final String device;

  /// A light or fan is turned on by this switch spot.
  final int? controlledBy;
}

/// The sheets of drywall hang with their left edge on a stud: -72, -24 and 24 are the only places that work.
const List<int> kSheetEdges = [-72, -48, -24, 0, 24];
const List<int> kGoodSheetEdges = [-72, -24, 24];

class Seam {
  bool taped = false;
  int coats = 0;
  bool dry = true;
  bool sanded = false;
}

class SheetState {
  bool placed = false;
  final Set<int> cutouts = {};
  final Set<int> screws = {};
  bool sanded = false;
  bool painted = false;
}

class Dev {
  Dev(this.kind) : w = WiringState();
  final String kind;
  final WiringState w;
  bool tested = false;
}

/// What happened when you did something.
class Act {
  const Act(this.ok, this.msg, {this.danger = false, this.fx = ''});
  final bool ok;
  final String msg;
  final bool danger;
  final String fx; // spark, burn, shock, trip, done
}

const List<String> kPhaseNames = ['1 Rough-in', '2 Drywall', '3 Devices'];

const List<String> kAppliances = ['tv', 'lamp', 'toaster', 'hairdryer'];

class RoomProject {
  RoomProject({this.seed = 1, this.practice = false}) {
    _plan();
  }

  final int seed;
  bool practice;
  late final String roomName;
  late final List<Order> orders;
  int lives = 3;
  int mistakes = 0;
  int shocks = 0;
  bool failed = false;

  // ── Rough-in ──
  final Map<int, String> boxes = {}; // slot -> wall, ceiling or fan
  final Set<int> holes = {}; // stud numbers drilled at the cable height
  final Set<int> cabled = {};

  // ── Drywall ──
  final Map<int, SheetState> sheets = {}; // left edge -> sheet
  final List<Seam> seams = [Seam(), Seam()];

  // ── Devices ──
  final Map<int, Dev> devs = {};
  bool breaker = false;
  bool tripped = false;
  final Set<int> switchOn = {};
  final Map<int, String> plugged = {}; // outlet slot -> appliance
  final Set<int> burnt = {};
  final List<String> log = [];

  void _plan() {
    final r = math.Random(seed);
    final kind = r.nextInt(3);
    final outlets = [0, 1, 2]..shuffle(r);
    final sw = 3 + r.nextInt(2);
    switch (kind) {
      case 0:
        roomName = 'Living room';
        orders = [Order(outlets[0], 'outlet'), Order(outlets[1], 'outlet'), Order(5, 'light', controlledBy: sw), Order(sw, 'switch')];
      case 1:
        roomName = 'Bedroom';
        orders = [Order(outlets[0], 'outlet'), Order(outlets[1], 'outlet'), Order(6, 'fan', controlledBy: sw), Order(sw, 'switch')];
      default:
        roomName = 'Kitchen';
        orders = [Order(outlets[0], 'gfci'), Order(outlets[1], 'gfci'), Order(5, 'light', controlledBy: sw), Order(sw, 'switch')];
    }
  }

  /// The slots this job needs boxes at.
  Set<int> get needed => {for (final o in orders) o.slot};

  Order? orderAt(int slot) {
    for (final o in orders) {
      if (o.slot == slot) return o;
    }
    return null;
  }

  Act _mistake(String msg) {
    mistakes++;
    return Act(false, msg);
  }

  /// Does the rough-in and the drywall in one go, so a person can start straight at the wiring.
  void fastForward() {
    for (final o in orders) {
      final s = slotById(o.slot);
      boxes[o.slot] = s.role == 'fan' ? 'fan' : (s.ceiling ? 'ceiling' : 'wall');
    }
    holes.addAll([for (var i = 0; i < kStudX.length; i++) i]);
    cabled.addAll(needed);
    for (final e in kGoodSheetEdges) {
      final sh = SheetState()
        ..placed = true
        ..painted = true
        ..sanded = true;
      for (final st in studsUnder(e)) {
        for (var r = 0; r < screwRows; r++) {
          sh.screws.add(st * 10 + r);
        }
      }
      for (final slot in needed) {
        final s = slotById(slot);
        if (!s.ceiling && s.pos.x >= e && s.pos.x <= e + 48) sh.cutouts.add(slot);
      }
      sheets[e] = sh;
    }
    for (final sm in seams) {
      sm
        ..taped = true
        ..coats = 3
        ..dry = true
        ..sanded = true;
    }
  }

  // ───────────────────────── Phase 1: rough-in ─────────────────────────

  /// Studs the cable has to pass through to get from the panel to [slot].
  List<int> studsBetween(int slot) {
    final x = slotById(slot).pos.x;
    return [for (var i = 0; i < kStudX.length; i++) if (kStudX[i] > x && kStudX[i] < kPanelX) i];
  }

  Act mountBox(int slot, String kind) {
    if (boxes.containsKey(slot)) return _mistake('There is already a box at ${slotById(slot).name}.');
    final s = slotById(slot);
    // The right box for the spot: wall boxes on the wall, ceiling boxes in the ceiling, fan-rated boxes for fans.
    if (!s.ceiling && kind != 'wall') return _mistake('That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).');
    if (s.ceiling && kind == 'wall') return _mistake('A wall box cannot go in the ceiling. Use a round ceiling box.');
    if (s.role == 'fan' && kind != 'fan') {
      if (!practice) return _mistake('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.');
      boxes[slot] = kind;
      mistakes++;
      return const Act(true, 'Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)');
    }
    boxes[slot] = kind;
    return Act(true, '${s.name}: box fixed to the ${s.ceiling ? 'ceiling joist' : 'side of the stud'}.');
  }

  Act drillStud(int stud) {
    if (stud < 0 || stud >= kStudX.length) return const Act(false, 'That is not a stud.');
    if (holes.contains(stud)) return _mistake('That stud already has a hole.');
    if (boxes.isEmpty) return _mistake('Mount the boxes first. Then you know where the cable has to go and which studs need a hole.');
    holes.add(stud);
    return const Act(true, 'Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.');
  }

  Act pullCable(int slot) {
    final s = slotById(slot);
    if (!boxes.containsKey(slot)) return _mistake('There is no box at ${s.name}. Mount the box first, then pull the cable to it.');
    if (cabled.contains(slot)) return _mistake('The cable is already there.');
    final missing = studsBetween(slot).where((i) => !holes.contains(i)).toList();
    if (missing.isNotEmpty) {
      return _mistake('The cable is stuck: the stud at ${kStudX[missing.first].round()} inches has no hole. Drill ${missing.length == 1 ? 'it' : 'the studs'} first (${missing.length} left on the way).');
    }
    cabled.add(slot);
    return Act(true, 'Cable pulled from the panel to ${s.name}, through the studs and along the ceiling.');
  }

  bool get roughDone => needed.every((s) => boxes.containsKey(s) && cabled.contains(s));

  // ───────────────────────── Phase 2: drywall ─────────────────────────

  Act _needRough() => const Act(false, 'Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.');

  SheetState? sheetCovering(double x) {
    for (final e in sheets.entries) {
      if (e.value.placed && x >= e.key && x <= e.key + 48) return e.value;
    }
    return null;
  }

  Act hangSheet(int edge) {
    if (!roughDone) return _mistake(_needRough().msg);
    if (!kSheetEdges.contains(edge)) return const Act(false, 'That is not a place for a sheet.');
    if (!kGoodSheetEdges.contains(edge)) {
      return _mistake('The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.');
    }
    if (sheets[edge]?.placed == true) return _mistake('There is already a sheet there.');
    sheets[edge] = (sheets[edge] ?? SheetState())..placed = true;
    return const Act(true, 'Sheet hung. Now screw it to the studs.');
  }

  /// Studs under a sheet that has its left edge at [edge].
  List<int> studsUnder(int edge) => [for (var i = 0; i < kStudX.length; i++) if (kStudX[i] >= edge && kStudX[i] <= edge + 48) i];

  static const int screwRows = 6;

  Act cutOpening(int slot) {
    final s = slotById(slot);
    if (s.ceiling) return _mistake('Ceiling fixtures do not need an opening in the wall.');
    if (!boxes.containsKey(slot)) return _mistake('There is no box at ${s.name}.');
    final sh = sheetCovering(s.pos.x);
    if (sh == null) return _mistake('There is no sheet over this box yet. Hang the sheet first, then cut the opening.');
    if (sh.cutouts.contains(slot)) return _mistake('The opening is already cut.');
    sh.cutouts.add(slot);
    return const Act(true, 'Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.');
  }

  /// A screw at [stud] (a number from 0) and [row]. Between studs there is nothing to screw into.
  Act screw(int stud, int row, {bool betweenStuds = false}) {
    if (betweenStuds) return _mistake('Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).');
    final covering = kGoodSheetEdges.where((e) => kStudX[stud] >= e && kStudX[stud] <= e + 48 && sheets[e]?.placed == true).toList();
    if (covering.isEmpty) return _mistake('There is no sheet here yet.');
    final key = stud * 10 + row;
    // A stud under the seam holds the edge of both sheets: one screw goes through each.
    if (covering.every((e) => sheets[e]!.screws.contains(key))) return _mistake('There is already a screw there.');
    for (final e in covering) {
      sheets[e]!.screws.add(key);
    }
    return const Act(true, 'Screw set just below the paper, not through it.');
  }

  bool sheetScrewed(int edge) {
    final sh = sheets[edge];
    if (sh == null || !sh.placed) return false;
    return studsUnder(edge).every((st) => List.generate(screwRows, (r) => r).every((r) => sh.screws.contains(st * 10 + r)));
  }

  bool get allHung => kGoodSheetEdges.every((e) => sheets[e]?.placed == true);
  bool get allScrewed => kGoodSheetEdges.every(sheetScrewed);
  bool get allCut => needed.where((s) => !slotById(s).ceiling).every((s) => sheetCovering(slotById(s).pos.x)?.cutouts.contains(s) == true);

  Act tapeSeam(int i) {
    if (!allHung) return _mistake('Hang all the sheets first.');
    if (!allScrewed) return _mistake('Finish screwing every sheet to the studs first. Tape goes on a solid wall.');
    if (seams[i].taped) return _mistake('This seam already has tape.');
    seams[i].taped = true;
    seams[i].dry = true;
    return const Act(true, 'Paper tape pressed into the seam.');
  }

  Act mudSeam(int i) {
    final s = seams[i];
    if (!s.taped) return _mistake('Tape first. The mud goes over the tape.');
    if (!s.dry) return _mistake('The last coat is still wet. Let it dry before the next coat.');
    if (s.coats >= 3) return _mistake('Three coats are enough. Now sand it.');
    s.coats++;
    s.dry = false;
    return Act(true, 'Coat ${s.coats} of joint compound spread. Let it dry.');
  }

  Act letDry() {
    if (seams.every((s) => s.dry)) return const Act(false, 'Nothing is wet.');
    for (final s in seams) {
      s.dry = true;
    }
    return const Act(true, 'The mud is dry.');
  }

  Act sandSeam(int i) {
    final s = seams[i];
    if (s.coats < 3) return _mistake('Put on all three coats of mud first. Sanding now would just rub off the tape.');
    if (!s.dry) return _mistake('The mud is still wet. Let it dry first.');
    if (s.sanded) return _mistake('Already sanded.');
    s.sanded = true;
    return const Act(true, 'Sanded smooth. Wear a mask: the dust is bad to breathe.');
  }

  Act paintSheet(int edge) {
    final sh = sheets[edge];
    if (sh == null || !sh.placed) return _mistake('There is no sheet there.');
    if (!allCut) return _mistake('Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.');
    if (!seams.every((s) => s.sanded)) return _mistake('Sand the seams first. Paint shows every bump.');
    if (sh.painted) return _mistake('This sheet is already painted.');
    sh.painted = true;
    return const Act(true, 'Primer and paint rolled on.');
  }

  bool get drywallDone => allHung && allScrewed && allCut && seams.every((s) => s.sanded) && kGoodSheetEdges.every((e) => sheets[e]?.painted == true);

  // ───────────────────────── Phase 3: devices ─────────────────────────

  bool get power => breaker && !tripped;

  void syncPower() {
    for (final d in devs.values) {
      d.w.power = power;
    }
  }

  String _kindOkFor(BoxSlot s, String kind) {
    if (s.ceiling) return (kind == 'light' || kind == 'fan') ? '' : 'A ceiling box holds a light or a fan, not an outlet or a switch.';
    return (kind == 'outlet' || kind == 'gfci' || kind == 'switch') ? '' : 'A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch.';
  }

  Act installDevice(int slot, String kind) {
    final s = slotById(slot);
    if (!drywallDone) return _mistake('Finish the drywall first. Devices go in after the walls are painted.');
    if (!boxes.containsKey(slot) || !cabled.contains(slot)) return _mistake('There is no box with cable at ${s.name}.');
    if (devs.containsKey(slot)) return _mistake('There is already a device there. Pull it out first if you want to move it.');
    final bad = _kindOkFor(s, kind);
    if (bad.isNotEmpty) return _mistake(bad);
    if ((kind == 'switch' && s.role == 'low') || (kind != 'switch' && !s.ceiling && s.role == 'switch')) {
      if (!practice) {
        return _mistake(kind == 'switch' ? 'A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.' : 'Outlets go low, about 16 inches from the floor. This box is up at switch height.');
      }
      mistakes++;
      log.add('Wrong height at ${s.name}.');
    }
    if (kind == 'fan' && boxes[slot] != 'fan') {
      if (!practice) return _mistake('This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.');
    }
    final d = Dev(kind);
    d.w.practice = practice;
    d.w.power = power;
    devs[slot] = d;
    return Act(true, '${kind == 'light' ? 'Light fixture' : kind == 'fan' ? 'Ceiling fan' : kind == 'gfci' ? 'GFCI outlet' : kind == 'switch' ? 'Switch' : 'Outlet'} is held up to ${s.name}. Turn the breaker OFF, then wire it.');
  }

  Act removeDevice(int slot) {
    final d = devs[slot];
    if (d == null) return const Act(false, 'There is nothing there.');
    if (power && !d.w.burnt) {
      if (practice) return _shock();
      return _mistake('STOP! The breaker is ON. Turn it OFF before you take a device out.');
    }
    devs.remove(slot);
    plugged.remove(slot);
    burnt.remove(slot);
    switchOn.remove(slot);
    return const Act(true, 'Device taken out. You can put it somewhere else, or put in a new one.');
  }

  Act _shock() {
    shocks++;
    lives--;
    breaker = false;
    syncPower();
    if (lives <= 0) {
      failed = true;
      return const Act(false, 'ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.', danger: true, fx: 'shock');
    }
    return Act(false, 'ZAP! You touched a live wire and got a shock. The breaker is now off. $lives ${lives == 1 ? 'life' : 'lives'} left. Always turn the breaker OFF and test the wires first.', danger: true, fx: 'shock');
  }

  /// Fasten a wire on the device at [slot].
  Act fasten(int slot, String chip, int hookupId) {
    final d = devs[slot];
    if (d == null) return const Act(false, 'There is no device here.');
    syncPower();
    final lesson = electricalLesson(d.kind);
    final h = lesson.hookups.firstWhere((x) => x.id == hookupId);
    final r = tryFasten(lesson, d.w, chip, h);
    if (r == null) return Act(true, '${h.name}: wire fastened.');
    if (r.startsWith('SHOCK')) return _shock();
    mistakes++;
    return Act(false, r, danger: r.startsWith('STOP'));
  }

  Act unfasten(int slot, String chipKey) {
    final d = devs[slot];
    if (d == null) return const Act(false, '');
    syncPower();
    if (d.w.power && d.w.stage == 0) {
      if (practice) return _shock();
      return _mistake('STOP! The power is still on. Turn the breaker OFF before you touch any wire.');
    }
    d.w.attached.removeWhere((_, v) => v == chipKey);
    return const Act(true, 'Wire taken off.');
  }

  Act pushIn(int slot) {
    final d = devs[slot];
    if (d == null) return const Act(false, 'There is no device here.');
    final lesson = electricalLesson(d.kind);
    if (!wiringComplete(lesson, d.w)) return _mistake('Every wire must be fastened first.');
    if (power) {
      if (practice) return _shock();
      return _mistake('Turn the breaker OFF before you push the device into the box.');
    }
    d.w.stage = 1;
    return const Act(true, 'The wires are folded back and the device is in the box. Now put the cover on.');
  }

  Act pullOut(int slot) {
    final d = devs[slot];
    if (d == null) return const Act(false, '');
    if (power) {
      if (practice) return _shock();
      return _mistake('Turn the breaker OFF before you pull the device out.');
    }
    d.w.stage = 0;
    d.w.testing = false;
    return const Act(true, 'Device pulled out of the box.');
  }

  Act coverOn(int slot) {
    final d = devs[slot];
    if (d == null || d.w.stage != 1) return _mistake('Push the device into the box first.');
    d.w.stage = 2;
    return const Act(true, 'Cover on. Now you can turn the breaker on and test.');
  }

  Verdict verdict(int slot) => evaluateWiring(electricalLesson(devs[slot]!.kind), devs[slot]!.w);

  /// Switch the breaker on or off. Switching on tests every finished device, and a real mistake shows now.
  Act toggleBreaker() {
    if (tripped) {
      tripped = false;
      breaker = false;
      syncPower();
      return const Act(true, 'You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.');
    }
    breaker = !breaker;
    syncPower();
    if (!breaker) return const Act(true, 'Breaker OFF. It is safe to work on the wires.');
    return _evaluate();
  }

  Act _evaluate() {
    final msgs = <String>[];
    var tripNow = false;
    var burnNow = false;
    for (final e in devs.entries) {
      final d = e.value;
      if (d.w.stage == 0) continue;
      final v = verdict(e.key);
      d.w.testing = d.w.stage >= 2;
      if (v.trips) tripNow = true;
      if (v.burns) {
        burnNow = true;
        d.w.burnt = true;
        burnt.add(e.key);
      }
      if (!v.ok) msgs.add('${slotById(e.key).name}: ${v.message}');
    }
    if (tripNow) {
      tripped = true;
      syncPower();
      return Act(false, '${burnNow ? 'BANG! Sparks and smoke. ' : ''}The breaker tripped. ${msgs.join(' ')} Fix it, then flip the breaker OFF and ON again.', danger: true, fx: burnNow ? 'burn' : 'trip');
    }
    if (msgs.isNotEmpty) return Act(true, 'Power is on. ${msgs.join(' ')}', danger: true);
    return const Act(true, 'Power is on.');
  }

  Act flipSwitch(int slot) {
    final d = devs[slot];
    if (d == null || d.kind != 'switch' || d.w.stage < 2) return const Act(false, 'Nothing to flip yet.');
    if (switchOn.contains(slot)) {
      switchOn.remove(slot);
    } else {
      switchOn.add(slot);
    }
    final load = orders.where((o) => o.controlledBy == slot).toList();
    if (load.isEmpty) return const Act(true, 'Click.');
    final lo = load.first;
    final ok = loadRuns(lo.slot);
    if (switchOn.contains(slot) && ok) {
      devs[lo.slot]?.tested = true;
      return Act(true, '${lo.device == 'fan' ? 'The fan spins' : 'The light turns on'}. The switch works.');
    }
    if (switchOn.contains(slot)) return Act(false, '${lo.device == 'fan' ? 'The fan' : 'The light'} did not come on. Check the breaker and the wires on the switch and on the ${lo.device}.');
    return const Act(true, 'Off.');
  }

  bool deviceOk(int slot) {
    final d = devs[slot];
    if (d == null || d.w.stage < 2 || d.w.burnt) return false;
    return verdict(slot).works;
  }

  bool loadRuns(int slot) {
    final o = orderAt(slot);
    final sw = o?.controlledBy;
    if (o == null || sw == null || !power || !deviceOk(slot) || !deviceOk(sw)) return false;
    return switchOn.contains(sw);
  }

  Act plug(int slot, String appliance) {
    final d = devs[slot];
    if (d == null || (d.kind != 'outlet' && d.kind != 'gfci') || d.w.stage < 2) return _mistake('There is no finished outlet there to plug into.');
    if (plugged.containsKey(slot)) return _mistake('Something is already plugged in.');
    plugged[slot] = appliance;
    if (d.w.burnt) return const Act(false, 'The outlet is burnt. Nothing works. Pull it out and put in a new one.', danger: true);
    if (power && deviceOk(slot)) {
      d.tested = true;
      final v = verdict(slot);
      if (v.kind == 'reversed' || v.kind == 'noGround') {
        return Act(true, 'It runs, but be careful: ${v.message}', danger: true);
      }
      return Act(true, '${_appName(appliance)} runs. The outlet works.');
    }
    if (!power) return const Act(true, 'Plugged in. Nothing happens because the breaker is off. Turn it on to test.');
    return Act(false, 'Nothing happens. ${verdict(slot).message}', danger: true);
  }

  Act unplug(int slot) {
    if (plugged.remove(slot) == null) return const Act(false, '');
    return const Act(true, 'Unplugged.');
  }

  bool applianceRuns(int slot) => plugged.containsKey(slot) && power && deviceOk(slot);

  static String _appName(String a) => switch (a) { 'tv' => 'The TV', 'lamp' => 'The lamp', 'toaster' => 'The toaster', _ => 'The hair dryer' };

  /// Is the whole job finished: every device in, wired right, and tested?
  bool get devicesDone {
    for (final o in orders) {
      final d = devs[o.slot];
      if (d == null || d.kind != o.device || d.w.stage < 2) return false;
      if (!verdict(o.slot).ok) return false;
      if (o.device == 'outlet' || o.device == 'gfci') {
        if (!d.tested) return false;
      } else if (o.device != 'switch' && !d.tested) {
        return false;
      }
    }
    return true;
  }

  int get phaseDoneCount => (roughDone ? 1 : 0) + (drywallDone ? 1 : 0) + (devicesDone ? 1 : 0);
}
