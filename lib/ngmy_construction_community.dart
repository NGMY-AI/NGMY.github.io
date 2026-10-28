import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_construction_home.dart';
import 'ngmy_construction_tour.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE COMMUNITY: the people who live in My House. They get hungry and sick, their rooms lose power and their sinks
// leak, and the player looks after them: feeds them, gives medicine, keeps the patients in the hospital cared for, and
// answers the calls for help by really fixing the wiring or the plumbing in the house. Fixing things earns points.
// Everything is saved, so the community is still there next time.
// ═════════════════════════════════════════════════════════════════════════════

const String kCommunityKey = 'ngmy_community_v1';

/// What one resident looks like and where they live.
class ResidentInfo {
  const ResidentInfo(this.id, this.name, this.room, this.bath, this.style, this.about);
  final int id;
  final String name;

  /// The room they live in (a number from the house) and the bathroom they use (-1 for none).
  final int room, bath;
  final PersonStyle style;
  final String about;
}

const List<ResidentInfo> kResidents = [
  ResidentInfo(0, 'Ama', 0, 2, PersonStyle(skin: Color(0xFF8A5A3C), hair: Color(0xFF1B1210), shirt: Color(0xFFD9467E), pants: Color(0xFF3B3F5C)), 'A nurse who works nights.'),
  ResidentInfo(1, 'Joseph', 1, 2, PersonStyle(skin: Color(0xFF6B4530), hair: Color(0xFF161010), shirt: Color(0xFF2E8F5B), pants: Color(0xFF2E3440)), 'A student who is always hungry.'),
  ResidentInfo(2, 'Grace', 3, 4, PersonStyle(skin: Color(0xFFA06B47), hair: Color(0xFF2A1A10), shirt: Color(0xFFF59E0B), pants: Color(0xFF4A3F6B)), 'A teacher who marks papers late.'),
  ResidentInfo(3, 'Daniel', 6, 8, PersonStyle(skin: Color(0xFFE0A47C), hair: Color(0xFF5B3A1E), shirt: Color(0xFF2F6FB5), pants: Color(0xFF2E3440)), 'A driver who sleeps in the day.'),
  ResidentInfo(4, 'Fatima', 7, 8, PersonStyle(skin: Color(0xFFC98B5E), hair: Color(0xFF1B1210), shirt: Color(0xFF7C3AED), pants: Color(0xFF2B2D3A)), 'A baker who gets up at four.'),
  ResidentInfo(5, 'Papa Moses', 10, -1, PersonStyle(skin: Color(0xFF7A4B30), hair: Color(0xFFD1D5DB), shirt: Color(0xFFB45309), pants: Color(0xFF3F3A33)), 'The oldest in the house. He watches TV all day.'),
  ResidentInfo(6, 'Mama Rose', 9, -1, PersonStyle(skin: Color(0xFF8C5B3B), hair: Color(0xFF8A8F98), shirt: Color(0xFFEF4444), pants: Color(0xFF3B3F5C)), 'Cooks for everybody in the kitchen.'),
];

class Resident {
  Resident(this.info);
  final ResidentInfo info;
  double hunger = 25, health = 100, comfort = 100;
  bool sick = false, alive = true;

  /// The hospital bed they are in, or -1.
  int inBed = -1;

  int get id => info.id;
  String get name => info.name;

  /// One plain word for how they are.
  String get mood {
    if (!alive) return 'has died';
    if (inBed >= 0) return 'in hospital';
    if (health < 30) return 'in danger';
    if (sick) return 'sick';
    if (hunger > 80) return 'starving';
    if (hunger > 55) return 'hungry';
    if (comfort < 40) return 'unhappy at home';
    return 'fine';
  }

  /// A little picture word for the label over their head in the house.
  String get badge => switch (mood) { 'has died' => '🕯', 'in hospital' => '🏥', 'in danger' => '🆘', 'sick' => '🤒', 'starving' || 'hungry' => '🍽', 'unhappy at home' => '😟', _ => '🙂' };
}

/// A call for help: a resident says what is wrong, and it is done when the fault in the house is really fixed.
class HelpCall {
  HelpCall(this.id, this.resident, this.kind, this.message, this.reward);
  final int id;
  final int resident;

  /// power or leak.
  final String kind;
  final String message;
  final int reward;
  double age = 0;
}

class Bed {
  int resident = -1;
  double care = 100, heal = 0;
}

class Community {
  Community({this.houseSeed = 1, int seed = 1}) : _r = math.Random(seed) {
    residents = [for (final i in kResidents) Resident(i)];
    // A little start: a few people are a bit hungry, and there is some food in the cupboard.
    residents[1].hunger = 55;
    residents[4].hunger = 40;
  }

  final int houseSeed;
  final math.Random _r;
  late List<Resident> residents;
  final List<HelpCall> calls = [];
  final List<Bed> beds = [Bed(), Bed(), Bed()];
  final List<String> log = [];
  int points = 10, food = 8, medicine = 4, served = 0, saved = 0, _nextCall = 1;
  double clock = 0;
  double _nextBreak = 45;

  List<Resident> get living => [for (final r in residents) if (r.alive) r];
  bool get everyoneGone => living.isEmpty;
  int get deaths => residents.where((r) => !r.alive).length;

  void _say(String t) {
    log.insert(0, t);
    if (log.length > 12) log.removeLast();
  }

  // ── Time ──

  /// Moves the community on by [dt] seconds (a second is a few minutes in the house).
  void advance(double dt, HomeProject home) {
    clock += dt;
    for (final p in living) {
      final room = home.rooms[p.info.room];
      final power = room.wired;
      final leak = p.info.bath >= 0 ? !home.rooms[p.info.bath].plumbed : (room.hasPlumbing && !room.plumbed);
      if (p.inBed < 0) {
        p.hunger = math.min(100, p.hunger + 0.3 * dt);
        final target = 100.0 - (power ? 0 : 45) - (leak ? 35 : 0);
        p.comfort += (target - p.comfort).clamp(-0.6 * dt, 0.8 * dt);
        if (!p.sick && (p.comfort < 40 || p.hunger > 85) && _r.nextDouble() < 0.012 * dt) {
          p.sick = true;
          _say('${p.name} has fallen sick. Give medicine, or send them to the hospital.');
        }
        var drain = 0.0;
        if (p.hunger >= 95) drain += 0.9;
        if (p.sick) drain += 0.55;
        if (p.comfort < 15) drain += 0.4;
        if (drain > 0) {
          p.health -= drain * dt;
        } else if (p.health < 100) {
          p.health = math.min(100, p.health + 0.15 * dt);
        }
        if (p.health <= 0) _die(p);
      }
    }
    for (var i = 0; i < beds.length; i++) {
      final b = beds[i];
      if (b.resident < 0) continue;
      final p = residents[b.resident];
      if (!p.alive) {
        b.resident = -1;
        continue;
      }
      b.care = math.max(0, b.care - 1.0 * dt);
      if (b.care > 30) {
        b.heal = math.min(100, b.heal + 2.2 * dt);
      } else if (b.care <= 0) {
        p.health -= 1.2 * dt;
        if (p.health <= 0) {
          _die(p);
          b.resident = -1;
          continue;
        }
      }
      if (b.heal >= 100) {
        p.sick = false;
        p.inBed = -1;
        p.health = math.max(p.health, 80);
        p.hunger = math.min(p.hunger, 30);
        b.resident = -1;
        b.heal = 0;
        b.care = 100;
        points += 8;
        saved++;
        _say('${p.name} is better and went home. +8 points.');
      }
    }
    for (final c in calls) {
      c.age += dt;
    }
    syncCalls(home);
    _nextBreak -= dt;
    if (_nextBreak <= 0) {
      _nextBreak = 60 + _r.nextDouble() * 50;
      breakSomething(home);
    }
  }

  void _die(Resident p) {
    p.alive = false;
    p.health = 0;
    if (p.inBed >= 0) beds[p.inBed].resident = -1;
    p.inBed = -1;
    calls.removeWhere((c) => c.resident == p.id);
    _say('${p.name} has died. Keep up with everybody\'s needs: food, medicine and a home that works.');
  }

  // ── The calls for help ──

  static const List<String> _powerWords = [
    'My outlet is dead and it is dark in here. Please come and wire it.',
    'The light in my room does not work, and my phone will not charge. Can you fix the wiring?',
    'I have no power in my room at all. Can an electrician come?',
  ];
  static const List<String> _leakWords = [
    'The sink leaks and there is water on the floor. Please fix the plumbing.',
    'The toilet is not connected and the water is running everywhere. Help!',
    'There is no water at my sink and the pipes are open. Can a plumber come?',
  ];

  bool _hasCall(int resident, String kind) => calls.any((c) => c.resident == resident && c.kind == kind);

  /// Opens a call for every fault that has no call yet, and finishes the calls whose fault has been fixed.
  void syncCalls(HomeProject home) {
    for (final c in List.of(calls)) {
      final info = kResidents[c.resident];
      final fixed = c.kind == 'power' ? home.rooms[info.room].wired : (info.bath >= 0 ? home.rooms[info.bath].plumbed : home.rooms[info.room].plumbed);
      if (fixed) {
        calls.remove(c);
        points += c.reward;
        served++;
        _say('${info.name}\'s ${c.kind == 'power' ? 'power is back' : 'leak is fixed'}. +${c.reward} points. Thank you!');
      }
    }
    for (final p in living) {
      if (calls.length >= 4) break;
      final room = home.rooms[p.info.room];
      if (!room.wired && !_hasCall(p.id, 'power')) {
        calls.add(HelpCall(_nextCall++, p.id, 'power', _powerWords[_r.nextInt(_powerWords.length)], 15));
        _say('${p.name} is calling for help: no power.');
      }
      final plumbRoom = p.info.bath >= 0 ? home.rooms[p.info.bath] : room;
      if (plumbRoom.hasPlumbing && !plumbRoom.plumbed && !_hasCall(p.id, 'leak') && calls.length < 4) {
        calls.add(HelpCall(_nextCall++, p.id, 'leak', _leakWords[_r.nextInt(_leakWords.length)], 15));
        _say('${p.name} is calling for help: a leak.');
      }
    }
  }

  /// A cable burns out or a pipe bursts in someone's home, so there is always something to do.
  void breakSomething(HomeProject home) {
    if (calls.length >= 3 || living.isEmpty) return;
    final p = living[_r.nextInt(living.length)];
    final room = home.rooms[p.info.room];
    final plumbRoom = p.info.bath >= 0 ? home.rooms[p.info.bath] : room;
    final wantLeak = plumbRoom.hasPlumbing && plumbRoom.plumbed && _r.nextBool();
    if (wantLeak) {
      plumbRoom.plumbNeeded = true;
      plumbRoom.plumb = null;
    } else if (room.wired) {
      room.wiringNeeded = true;
      room.wiring = null;
      room.lightOn = false;
      room.plugged.clear();
    } else {
      return;
    }
    syncCalls(home);
  }

  // ── What the player does ──

  String feed(Resident p) {
    if (!p.alive) return '${p.name} has died.';
    if (p.inBed >= 0) return '${p.name} is in hospital and is fed there.';
    if (p.hunger < 20) return '${p.name} is not hungry.';
    if (food <= 0) return 'There is no food left. Buy some in the shop.';
    food--;
    p.hunger = math.max(0, p.hunger - 65);
    points += 2;
    final t = '${p.name} ate and feels better. +2 points.';
    _say(t);
    return t;
  }

  String giveMedicine(Resident p) {
    if (!p.alive) return '${p.name} has died.';
    if (!p.sick) return '${p.name} is not sick.';
    if (medicine <= 0) return 'There is no medicine left. Buy some in the shop.';
    medicine--;
    p.sick = false;
    p.health = math.min(100, p.health + 20);
    points += 3;
    final t = '${p.name} took the medicine and is better. +3 points.';
    _say(t);
    return t;
  }

  String admit(Resident p) {
    if (!p.alive) return '${p.name} has died.';
    if (p.inBed >= 0) return '${p.name} is already in hospital.';
    if (!p.sick && p.health > 60) return '${p.name} is not ill enough for the hospital.';
    final i = beds.indexWhere((b) => b.resident < 0);
    if (i < 0) return 'The hospital is full. Treat the patients first, they go home when they are better.';
    beds[i]
      ..resident = p.id
      ..care = 100
      ..heal = 0;
    p.inBed = i;
    final t = '${p.name} is in bed ${i + 1} of the hospital. Keep up with their care.';
    _say(t);
    return t;
  }

  String treat(int bed) {
    final b = beds[bed];
    if (b.resident < 0) return 'This bed is empty.';
    if (b.care > 70) return 'The patient is cared for already.';
    if (medicine <= 0) return 'There is no medicine left. Buy some in the shop.';
    medicine--;
    b.care = 100;
    points += 1;
    final t = '${residents[b.resident].name} was treated. +1 point.';
    _say(t);
    return t;
  }

  String buy(String what) {
    switch (what) {
      case 'food':
        if (points < 10) return 'You need 10 points for 5 portions of food.';
        points -= 10;
        food += 5;
        return 'You bought 5 portions of food.';
      default:
        if (points < 12) return 'You need 12 points for 3 doses of medicine.';
        points -= 12;
        medicine += 3;
        return 'You bought 3 doses of medicine.';
    }
  }

  // ── Where the people stand in the house ──

  /// The residents who are standing in room [roomId], with a free spot each.
  List<ResidentFigure> figuresIn(HomeProject home, int roomId) {
    final out = <ResidentFigure>[];
    final room = home.rooms[roomId];
    if (!room.indoor) return out;
    final nav = RoomNav(room);
    for (final p in living.where((p) => p.info.room == roomId && p.inBed < 0)) {
      final want = switch (room.kind) {
        'bedroom' => (room.w * 0.30, room.d - 22.0),
        'kitchen' => (-room.w * 0.15, 56.0),
        _ => (-room.w * 0.25, 40.0),
      };
      final path = nav.route(want, want);
      final spot = path.last;
      out.add(ResidentFigure(id: p.id, room: roomId, x: spot.$1, z: spot.$2, yaw: 0, style: p.info.style, label: '${p.name} ${p.badge}', alert: p.mood != 'fine'));
    }
    return out;
  }

  // ── Saving ──

  Map<String, dynamic> toJson(HomeProject home) => {
        'v': 1,
        'seed': houseSeed,
        'points': points,
        'food': food,
        'medicine': medicine,
        'served': served,
        'saved': saved,
        'clock': clock,
        'nextCall': _nextCall,
        'res': [
          for (final p in residents) {'hunger': p.hunger, 'health': p.health, 'comfort': p.comfort, 'sick': p.sick, 'alive': p.alive, 'bed': p.inBed}
        ],
        'beds': [
          for (final b in beds) {'res': b.resident, 'care': b.care, 'heal': b.heal}
        ],
        'calls': [
          for (final c in calls) {'id': c.id, 'res': c.resident, 'kind': c.kind, 'msg': c.message, 'reward': c.reward, 'age': c.age}
        ],
        // What the house looks like now: which rooms have power and water.
        'wired': {for (final r in home.indoor) '${r.id}': r.wired},
        'plumbed': {for (final r in home.indoor.where((r) => r.hasPlumbing)) '${r.id}': r.plumbed},
      };

  /// Gives the house the state that was saved: rooms that were fixed stay fixed, rooms that broke stay broken.
  static void applyHouse(HomeProject home, Map<String, dynamic> j) {
    final wired = (j['wired'] as Map?) ?? const {};
    final plumbed = (j['plumbed'] as Map?) ?? const {};
    for (final r in home.indoor) {
      final w = wired['${r.id}'];
      if (w is bool) {
        r.wiringNeeded = !w;
        r.wiring = null;
      }
      final p = plumbed['${r.id}'];
      if (p is bool && r.hasPlumbing) {
        r.plumbNeeded = !p;
        r.plumb = null;
      }
    }
  }

  static Community fromJson(Map<String, dynamic> j) {
    final c = Community(houseSeed: (j['seed'] as num?)?.toInt() ?? 1, seed: ((j['clock'] as num?)?.toInt() ?? 0) + 7);
    c.points = (j['points'] as num?)?.toInt() ?? 10;
    c.food = (j['food'] as num?)?.toInt() ?? 8;
    c.medicine = (j['medicine'] as num?)?.toInt() ?? 4;
    c.served = (j['served'] as num?)?.toInt() ?? 0;
    c.saved = (j['saved'] as num?)?.toInt() ?? 0;
    c.clock = (j['clock'] as num?)?.toDouble() ?? 0;
    c._nextCall = (j['nextCall'] as num?)?.toInt() ?? 1;
    final res = (j['res'] as List?) ?? const [];
    for (var i = 0; i < c.residents.length && i < res.length; i++) {
      final m = res[i] as Map;
      c.residents[i]
        ..hunger = (m['hunger'] as num).toDouble()
        ..health = (m['health'] as num).toDouble()
        ..comfort = (m['comfort'] as num).toDouble()
        ..sick = m['sick'] == true
        ..alive = m['alive'] != false
        ..inBed = (m['bed'] as num?)?.toInt() ?? -1;
    }
    final beds = (j['beds'] as List?) ?? const [];
    for (var i = 0; i < c.beds.length && i < beds.length; i++) {
      final m = beds[i] as Map;
      c.beds[i]
        ..resident = (m['res'] as num).toInt()
        ..care = (m['care'] as num).toDouble()
        ..heal = (m['heal'] as num).toDouble();
    }
    for (final m in (j['calls'] as List?) ?? const []) {
      final k = m as Map;
      c.calls.add(HelpCall((k['id'] as num).toInt(), (k['res'] as num).toInt(), k['kind'] as String, k['msg'] as String, (k['reward'] as num).toInt())..age = (k['age'] as num).toDouble());
    }
    return c;
  }

  static Future<Map<String, dynamic>?> loadJson() async {
    try {
      final p = await SharedPreferences.getInstance();
      final s = p.getString(kCommunityKey);
      if (s == null) return null;
      return jsonDecode(s) as Map<String, dynamic>;
    } catch (_) {
      return null;
    }
  }

  Future<void> save(HomeProject home) async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(kCommunityKey, jsonEncode(toJson(home)));
    } catch (_) {}
  }

  static Future<void> forget() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.remove(kCommunityKey);
    } catch (_) {}
  }
}
