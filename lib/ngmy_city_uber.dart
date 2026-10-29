import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_city_delivery.dart';
import 'ngmy_construction_home.dart';
import 'ngmy_construction_tour.dart';

/// What the licence office charges for the Uber licence.
const int kUberLicencePrice = 40;

/// How close (town units) the car must be to the station to pick somebody up, and to the house door to drop them off.
const double kUberReach = 150, kUberDropReach = 70;

/// A person waiting at an Uber station who wants to go home, and what the ride pays.
class UberPassenger {
  UberPassenger(this.id, this.name, this.style, this.station, this.house, this.fare, this.slot);
  final int id;
  final String name;
  final PersonStyle style;
  final Furn station, house;
  final int fare;

  /// Where in the queue at the station they stand (0, 1, 2).
  final int slot;
  bool aboard = false;
  double bornAt = 0;

  (double, double) get standAt {
    final a = station.rot * math.pi / 2;
    final fx = math.sin(a), fz = math.cos(a);
    // In front of the shelter, side by side.
    return (station.x + fx * 42 - fz * (slot - 1) * 24, station.z + fz * 42 + fx * (slot - 1) * 24);
  }

  double get distance {
    final a = station, b = doorSpot(house);
    return math.sqrt(math.pow(a.x - b.$1, 2) + math.pow(a.z - b.$2, 2));
  }
}

/// The Uber stations of the town: people queue up there, you drive them home and are paid the fare.
class UberBoard {
  UberBoard(this.city, {int seed = 11}) : _rnd = math.Random(seed) {
    stations = [for (final f in city.furn) if (f.kind == 'ubstation') f];
    houses = [for (final f in city.furn) if (f.kind == 'house2' || f.kind == 'bighouse') f];
    refill(0);
  }

  final HRoom city;
  final math.Random _rnd;
  late final List<Furn> stations, houses;
  final List<UberPassenger> waiting = [];
  UberPassenger? active;
  int rides = 0, earned = 0;
  int _nextId = 1;
  double _nextAt = 0;

  static const _names = ['Ada', 'Ben', 'Chidi', 'Dina', 'Efe', 'Farah', 'Gus', 'Halima', 'Ivo', 'Jamal', 'Kemi', 'Lola'];
  static const _skins = [Color(0xFF8D5524), Color(0xFFC68642), Color(0xFFE0AC69), Color(0xFF6F4A2E), Color(0xFFA9714B)];
  static const _shirts = [Color(0xFFEC4899), Color(0xFF14B8A6), Color(0xFF6366F1), Color(0xFFF97316), Color(0xFF84CC16), Color(0xFF0EA5E9)];

  /// Keeps up to three people waiting at each station.
  void refill(double now) {
    if (houses.isEmpty) return;
    for (final s in stations) {
      final here = waiting.where((p) => p.station == s).map((p) => p.slot).toSet();
      for (var slot = 0; slot < 3; slot++) {
        if (here.contains(slot)) continue;
        if (active?.station == s && active?.slot == slot) continue;
        final i = _nextId++;
        final house = houses[_rnd.nextInt(houses.length)];
        final a = doorSpot(house);
        final dist = math.sqrt(math.pow(s.x - a.$1, 2) + math.pow(s.z - a.$2, 2));
        waiting.add(UberPassenger(
          i,
          _names[_rnd.nextInt(_names.length)],
          PersonStyle(skin: _skins[_rnd.nextInt(_skins.length)], shirt: _shirts[_rnd.nextInt(_shirts.length)], pants: const Color(0xFF334155), avatar: 'human'),
          s,
          house,
          6 + (dist / 45).round().clamp(0, 30),
          slot,
        )..bornAt = now);
      }
    }
  }

  /// The station you are close to, if any.
  Furn? stationNear(double x, double z) {
    for (final s in stations) {
      if (math.sqrt(math.pow(s.x - x, 2) + math.pow(s.z - z, 2)) < kUberReach) return s;
    }
    return null;
  }

  /// The passenger who gets in: the one who has waited longest at the station you are at.
  UberPassenger? pickUp(double x, double z) {
    if (active != null) return null;
    final s = stationNear(x, z);
    if (s == null) return null;
    final here = [for (final p in waiting) if (p.station == s) p];
    if (here.isEmpty) return null;
    here.sort((a, b) => a.bornAt.compareTo(b.bornAt));
    final p = here.first;
    waiting.remove(p);
    p.aboard = true;
    active = p;
    return p;
  }

  /// The place to drive to now (the house door of the passenger), or null.
  (double, double)? get target => active == null ? null : doorSpot(active!.house);

  /// Called with where the car is: at the house, the passenger gets out and you are paid. Returns the fare, or 0.
  int drop(double x, double z, double now) {
    final p = active, t = target;
    if (p == null || t == null) return 0;
    if (math.sqrt(math.pow(t.$1 - x, 2) + math.pow(t.$2 - z, 2)) > kUberDropReach) return 0;
    active = null;
    rides++;
    earned += p.fare;
    _nextAt = now + 4;
    refill(now);
    return p.fare;
  }

  /// You give the passenger back (they wait at the station again).
  void cancel() {
    final p = active;
    if (p == null) return;
    p.aboard = false;
    waiting.add(p);
    active = null;
  }

  /// The people waiting, as they are drawn (standing at the station).
  List<CourierFigure> figures(double now) {
    if (now < _nextAt) return const [];
    return [
      for (final p in waiting)
        CourierFigure(p.name, p.standAt.$1, p.standAt.$2, math.atan2(p.station.x - p.standAt.$1, p.station.z - p.standAt.$2) + math.pi, now * 1.4 + p.id, false, p.style, p.style.shirt, false),
    ];
  }
}
