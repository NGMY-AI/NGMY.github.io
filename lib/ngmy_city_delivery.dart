import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_construction_home.dart';
import 'ngmy_city_nav.dart';
import 'ngmy_construction_tour.dart';

// ═════════════════════════════════════════════════════════════════════════════
// DELIVERIES IN THE CITY: orders for food, groceries, medicine, packages and letters are posted all the time. You take one,
// pick it up at the shop (the place named in the order), and carry it to the house. Five other couriers are doing the same
// all over the town: an order they take is gone, and the first to deliver [kRaceGoal] orders wins the round.
// ═════════════════════════════════════════════════════════════════════════════

/// The first to deliver this many orders in a round wins it.
const int kRaceGoal = 8;

/// The extra points for winning a round.
const int kRaceBonus = 40;

/// How close (in town units) you must be to the door to pick up or hand over an order.
const double kDeliveryReach = 58;

class DeliveryKind {
  const DeliveryKind(this.key, this.emoji, this.name, this.from);
  final String key, emoji, name;

  /// The kinds of building the order is picked up at.
  final Set<String> from;
}

const List<DeliveryKind> kDeliveryKinds = [
  DeliveryKind('food', '🍔', 'Food', {'store', 'gasstation'}),
  DeliveryKind('groceries', '🛒', 'Groceries', {'shop', 'store'}),
  DeliveryKind('medicine', '💊', 'Medicine', {'hospital'}),
  DeliveryKind('package', '📦', 'Package', {'hq', 'tower'}),
  DeliveryKind('letters', '✉️', 'Letters', {'school', 'firestation', 'hq'}),
];

DeliveryKind deliveryKindOf(String key) => kDeliveryKinds.firstWhere((k) => k.key == key, orElse: () => kDeliveryKinds.first);

/// The place in front of the door of a building where an order is handed over.
(double, double) doorSpot(Furn f) {
  final k = kFurnKinds[f.kind]!;
  final a = f.rot * math.pi / 2;
  final d = k.d / 2 + 30;
  return (f.x + math.sin(a) * d, f.z + math.cos(a) * d);
}

/// The door of a building itself (the front face), where people go in and come out.
(double, double) doorFace(Furn f) {
  final k = kFurnKinds[f.kind]!;
  final a = f.rot * math.pi / 2;
  final d = k.d / 2 - 2;
  return (f.x + math.sin(a) * d, f.z + math.cos(a) * d);
}

/// One order: what, where from, where to, how much it pays, and who has it (null nobody, -1 you, 0 and up one of the couriers).
class DeliveryOrder {
  DeliveryOrder(this.id, this.kind, this.from, this.to, this.pay);
  final int id;
  final String kind;
  final Furn from, to;
  final int pay;
  int? holder;
  bool pickedUp = false;

  /// Wanted at the hospital for somebody who was run over: it comes first on the board and pays well.
  bool emergency = false;

  /// When you took it (seconds on the town clock), so an order you leave for six minutes goes back on the board.
  double takenAt = 0;

  DeliveryKind get info => deliveryKindOf(kind);

  double get distance {
    final a = doorSpot(from), b = doorSpot(to);
    return math.sqrt(math.pow(a.$1 - b.$1, 2) + math.pow(a.$2 - b.$2, 2));
  }
}

/// A courier of the town who is racing you.
class Courier {
  Courier(this.name, this.color, this.style, this.speed, this.x, this.z);
  final String name;
  final Color color;
  final PersonStyle style;

  /// Town units a second, on the way.
  final double speed;

  double x, z;
  int roundDeliveries = 0, deliveries = 0, points = 0;
  DeliveryOrder? job;

  /// The time (town clock) the courier started the current leg and when it ends, from where to where; and the rest after a delivery.
  double legStart = 0, legEnd = 0, fromX = 0, fromZ = 0, toX = 0, toZ = 0;
  int leg = 0; // 0 resting, 1 to the pick-up, 2 to the house
  double restUntil = 0;

  /// The way being walked (round the buildings, to the door), and whether the courier is inside the building just now.
  List<(double, double)> path = const [];
  double pathLen = 0;
  bool inside = false;
  double insideEnd = 0;
}

/// A courier as it is drawn right now.
class CourierFigure {
  const CourierFigure(this.name, this.x, this.z, this.yaw, this.phase, this.walking, this.style, this.color, this.carrying);
  final String name;
  final double x, z, yaw, phase;
  final bool walking, carrying;
  final PersonStyle style;
  final Color color;
}

/// What happened when the player moved: nothing, a pick-up, or a delivery.
class DeliveryEvent {
  const DeliveryEvent(this.kind, this.text, {this.points = 0});

  /// pickup, delivered, expired, lost or won (a round was won; [text] says by whom).
  final String kind, text;
  final int points;
}

class DeliveryBoard {
  DeliveryBoard(this.city, {int seed = 7}) : _rnd = math.Random(seed) {
    houses = [for (final f in city.furn) if (f.kind == 'house2' || f.kind == 'bighouse') f];
    _places = [for (final f in city.furn) if (kDeliveryKinds.any((k) => k.from.contains(f.kind))) f];
    const names = ['Maya', 'Kofi', 'Amara', 'Tunde', 'Zawadi'];
    const colors = [Color(0xFFEF4444), Color(0xFF22C55E), Color(0xFFF59E0B), Color(0xFFA855F7), Color(0xFF06B6D4)];
    const avatars = ['human', 'soldier', 'michelle', 'xbot', 'human'];
    for (var i = 0; i < names.length; i++) {
      final spot = _randomPlace();
      couriers.add(Courier(
        names[i],
        colors[i],
        PersonStyle(skin: const [Color(0xFF8D5524), Color(0xFFC68642), Color(0xFFE0AC69), Color(0xFF6F4A2E), Color(0xFFA9714B)][i], shirt: colors[i], pants: const Color(0xFF2E3440), avatar: avatars[i]),
        58.0 + i * 7.5,
        spot.$1,
        spot.$2,
      ));
    }
    refill(0);
  }

  final HRoom city;
  late final List<Furn> houses;
  late final List<Furn> _places;
  final math.Random _rnd;
  final List<DeliveryOrder> orders = [];
  final List<Courier> couriers = [];
  int _nextId = 1;
  late final CityNav nav = CityNav(city);

  /// You: the order you carry, how many you delivered this round and in all, and your points from deliveries.
  DeliveryOrder? active;
  int roundDeliveries = 0, deliveries = 0, points = 0, round = 1;

  /// The last round's winner, and what to say about it (for the page to show once).
  String? lastWinner;

  (double, double) _randomPlace() {
    if (_places.isEmpty) return (0.0, 300.0);
    return doorSpot(_places[_rnd.nextInt(_places.length)]);
  }

  /// Somebody was run over and is in the [hospital]: medicine and food are wanted there from the nearest stores. They go to the top of the board.
  void postEmergency(Furn hospital) {
    final stores = [for (final f in _places) if (f.kind == 'store' || f.kind == 'shop' || f.kind == 'gasstation') f];
    if (stores.isEmpty) return;
    stores.sort((a, b) => _d(a.x, a.z, (hospital.x, hospital.z)).compareTo(_d(b.x, b.z, (hospital.x, hospital.z))));
    var i = 0;
    for (final kind in const ['medicine', 'food']) {
      final from = stores[i % stores.length];
      i++;
      orders.insert(0, DeliveryOrder(_nextId++, kind, from, hospital, kind == 'medicine' ? 30 : 24)..emergency = true);
    }
  }

  /// Keeps at least [min] open orders on the board.
  void refill(double now, {int min = 7}) {
    var guard = 0;
    while (orders.where((o) => o.holder == null).length < min && guard++ < 30) {
      final kind = kDeliveryKinds[_rnd.nextInt(kDeliveryKinds.length)];
      final froms = [for (final f in _places) if (kind.from.contains(f.kind)) f];
      if (froms.isEmpty || houses.isEmpty) return;
      final from = froms[_rnd.nextInt(froms.length)];
      final to = houses[_rnd.nextInt(houses.length)];
      final a = doorSpot(from), b = doorSpot(to);
      final dist = math.sqrt(math.pow(a.$1 - b.$1, 2) + math.pow(a.$2 - b.$2, 2));
      orders.add(DeliveryOrder(_nextId++, kind.key, from, to, 6 + (dist / 70).round().clamp(0, 22)));
    }
  }

  /// You take an order. Only one at a time.
  bool take(DeliveryOrder o, double now) {
    if (active != null || o.holder != null || !orders.contains(o)) return false;
    o.holder = -1;
    o.takenAt = now;
    active = o;
    return true;
  }

  /// You give the order back.
  void cancel() {
    final o = active;
    if (o == null) return;
    o.holder = null;
    o.pickedUp = false;
    active = null;
  }

  /// Is the player carrying something to deliver?
  bool get carrying => active?.pickedUp == true;

  /// The place the player should go to now: the pick-up, then the house.
  (double, double)? get target {
    final o = active;
    if (o == null) return null;
    return doorSpot(o.pickedUp ? o.to : o.from);
  }

  /// Called often with where the player is: picks up at the shop, hands over at the house.
  DeliveryEvent? updatePlayer(double x, double z, double now) {
    final o = active;
    if (o == null) return null;
    if (now - o.takenAt > 360) {
      cancel();
      return const DeliveryEvent('expired', 'That order took too long and went back on the board.');
    }
    final t = target!;
    final d = math.sqrt(math.pow(t.$1 - x, 2) + math.pow(t.$2 - z, 2));
    if (d > kDeliveryReach) return null;
    if (!o.pickedUp) {
      o.pickedUp = true;
      return DeliveryEvent('pickup', '${o.info.emoji} You picked up the ${o.info.name.toLowerCase()} at the ${kFurnKinds[o.from.kind]!.name.toLowerCase()}. Now take it to the ${o.emergency ? 'hospital' : 'house'}.');
    }
    orders.remove(o);
    active = null;
    deliveries++;
    roundDeliveries++;
    points += o.pay;
    refill(now);
    var text = '${o.info.emoji} Delivered! +${o.pay} points.';
    var extra = 0;
    if (roundDeliveries >= kRaceGoal) {
      extra = kRaceBonus;
      points += extra;
      lastWinner = 'You';
      text += ' You won the race with $kRaceGoal deliveries: +$kRaceBonus points!';
      _newRound();
    }
    return DeliveryEvent(extra > 0 ? 'won' : 'delivered', text, points: o.pay + extra);
  }

  void _newRound() {
    round++;
    roundDeliveries = 0;
    for (final c in couriers) {
      c.roundDeliveries = 0;
    }
  }

  /// The couriers get on with their day: pick an order, go to the shop, go to the house, rest a moment, again.
  /// Returns a message when one of them wins the round.
  String? advance(double now) {
    String? message;
    for (final c in couriers) {
      if (c.leg == 0) {
        if (now < c.restUntil) continue;
        final free = [for (final o in orders) if (o.holder == null) o];
        if (free.isEmpty) continue;
        free.sort((a, b) {
          if (a.emergency != b.emergency) return a.emergency ? -1 : 1;
          final da = _dist(c, doorSpot(a.from)), db = _dist(c, doorSpot(b.from));
          return da.compareTo(db);
        });
        // They do not always take the nearest, so the race is not the same every time.
        final o = free[math.min(free.length - 1, _rnd.nextInt(3))];
        o.holder = couriers.indexOf(c);
        c.job = o;
        _startLeg(c, now, 1, o.from);
      } else if (now >= c.legEnd) {
        if (!c.inside) {
          // At the door: in they go, and they are out of sight for a moment.
          c.x = c.toX;
          c.z = c.toZ;
          c.inside = true;
          c.insideEnd = now + (c.leg == 1 ? 1.6 : 1.3);
          continue;
        }
        if (now < c.insideEnd) continue;
        c.inside = false;
        final o = c.job!;
        if (c.leg == 1) {
          _startLeg(c, now, 2, o.to);
        } else {
          orders.remove(o);
          c.job = null;
          c.leg = 0;
          c.deliveries++;
          c.roundDeliveries++;
          c.points += o.pay;
          c.restUntil = now + 2 + _rnd.nextDouble() * 5;
          refill(now);
          if (c.roundDeliveries >= kRaceGoal) {
            lastWinner = c.name;
            message = '${c.name} won the race with $kRaceGoal deliveries! A new round starts.';
            _newRound();
          }
        }
      }
    }
    return message;
  }

  double _dist(Courier c, (double, double) p) => math.sqrt(math.pow(p.$1 - c.x, 2) + math.pow(p.$2 - c.z, 2));

  /// Sends the courier to the door of [building]: round the other buildings, up to its door.
  void _startLeg(Courier c, double start, int leg, Furn building) {
    final spot = doorSpot(building), door = doorFace(building);
    c.leg = leg;
    c.fromX = c.x;
    c.fromZ = c.z;
    c.toX = door.$1;
    c.toZ = door.$2;
    c.path = [...nav.route((c.x, c.z), spot), door];
    c.pathLen = pathLength(c.path);
    c.legStart = start;
    c.legEnd = start + math.max(1.0, c.pathLen / c.speed);
  }

  /// Where each courier is at [now] and what it is doing, for drawing.
  List<CourierFigure> figures(double now) {
    final out = <CourierFigure>[];
    for (final c in couriers) {
      var x = c.x, z = c.z, yaw = 0.0;
      var walking = false;
      // Inside a building (handing over, picking up): not on the street.
      if (c.inside) continue;
      if (c.leg != 0 && now >= c.legStart && c.path.length > 1) {
        final k = ((now - c.legStart) / math.max(0.01, c.legEnd - c.legStart)).clamp(0.0, 1.0);
        final p = pointAlong(c.path, c.pathLen * k);
        x = p.$1;
        z = p.$2;
        yaw = p.$3;
        walking = k < 1;
      }
      out.add(CourierFigure(c.name, x, z, yaw, now * 2.2 + c.speed, walking, c.style, c.color, c.leg == 2));
    }
    return out;
  }

  /// The race table, best first: (name, deliveries this round, points).
  List<(String, int, int)> table() {
    final rows = <(String, int, int)>[('You', roundDeliveries, points), for (final c in couriers) (c.name, c.roundDeliveries, c.points)];
    rows.sort((a, b) {
      final r = b.$2.compareTo(a.$2);
      return r != 0 ? r : b.$3.compareTo(a.$3);
    });
    return rows;
  }

  /// The orders you can take now, nearest to you first.
  List<DeliveryOrder> open(double px, double pz) {
    final list = [for (final o in orders) if (o.holder == null) o];
    list.sort((a, b) {
      if (a.emergency != b.emergency) return a.emergency ? -1 : 1;
      final da = _d(px, pz, doorSpot(a.from)), db = _d(px, pz, doorSpot(b.from));
      return da.compareTo(db);
    });
    return list;
  }

  double _d(double x, double z, (double, double) p) => math.sqrt(math.pow(p.$1 - x, 2) + math.pow(p.$2 - z, 2));
}
