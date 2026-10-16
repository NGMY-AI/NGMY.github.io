import 'dart:math' as math;

import 'ngmy_db_relay.dart';
/// Admin-controlled dice roll settings (stored in AppConfig.diceSettings).
class NgmyDiceSettings {
  /// Weights for outcomes 1, 2, 3, -1, -2 (any positive ints; relative).
  Map<String, int> weights;
  int winPercent;
  int maxWinStreak;
  int maxLoseStreak;
  int plus3DailyLimit;
  int plus3UsedToday;
  String plus3Date;
  List<Map<String, dynamic>> userGrants;
  List<Map<String, dynamic>> playerState;
  /// Per face: how many times each user should land on it per day / week, then normal play.
  Map<String, Map<String, int>> faceQuotas;
  /// Per user: next plays, plus optional day/week counts for one face.
  List<Map<String, dynamic>> userFaceRules;

  NgmyDiceSettings({
    Map<String, int>? weights,
    this.winPercent = 55,
    this.maxWinStreak = 4,
    this.maxLoseStreak = 5,
    this.plus3DailyLimit = 20,
    this.plus3UsedToday = 0,
    String? plus3Date,
    List<Map<String, dynamic>>? userGrants,
    List<Map<String, dynamic>>? playerState,
    Map<String, Map<String, int>>? faceQuotas,
    List<Map<String, dynamic>>? userFaceRules,
  })  : weights = Map<String, int>.from(weights ?? ngmyDefaultDiceWeights()),
        plus3Date = plus3Date ?? _todayKey(),
        userGrants = userGrants ?? [],
        playerState = playerState ?? [],
        faceQuotas = faceQuotas ?? ngmyDefaultFaceQuotas(),
        userFaceRules = userFaceRules ?? [];

  static String _todayKey() {
    final n = DateTime.now();
    return '${n.year}-${n.month.toString().padLeft(2, '0')}-${n.day.toString().padLeft(2, '0')}';
  }

  void refreshPlus3Day() {
    final t = _todayKey();
    if (plus3Date != t) {
      plus3Date = t;
      plus3UsedToday = 0;
    }
  }

  Map<String, dynamic> toJson() => {
        'weights': weights,
        'winPercent': winPercent,
        'maxWinStreak': maxWinStreak,
        'maxLoseStreak': maxLoseStreak,
        'plus3DailyLimit': plus3DailyLimit,
        'plus3UsedToday': plus3UsedToday,
        'plus3Date': plus3Date,
        'userGrants': userGrants,
        'playerState': playerState,
        'faceQuotas': faceQuotas,
        'userFaceRules': userFaceRules,
      };

  factory NgmyDiceSettings.fromJson(dynamic raw) {
    final d = raw is Map ? Map<String, dynamic>.from(raw) : <String, dynamic>{};
    final wRaw = d['weights'];
    Map<String, int> w = Map<String, int>.from(ngmyDefaultDiceWeights());
    if (wRaw is Map) {
      for (final o in ['1', '2', '3', '-1', '-2']) {
        final v = wRaw[o] ?? wRaw[int.tryParse(o)];
        if (v != null) w[o] = (v is int ? v : int.tryParse('$v') ?? 0).clamp(1, 100);
      }
    }
    return NgmyDiceSettings(
      weights: w,
      winPercent: (d['winPercent'] as num?)?.toInt() ?? 55,
      maxWinStreak: (d['maxWinStreak'] as num?)?.toInt() ?? 4,
      maxLoseStreak: (d['maxLoseStreak'] as num?)?.toInt() ?? 5,
      plus3DailyLimit: (d['plus3DailyLimit'] as num?)?.toInt() ?? 20,
      plus3UsedToday: (d['plus3UsedToday'] as num?)?.toInt() ?? 0,
      plus3Date: (d['plus3Date'] ?? '').toString(),
      userGrants: List<Map<String, dynamic>>.from((d['userGrants'] ?? []).map((e) => Map<String, dynamic>.from(e as Map))),
      playerState: List<Map<String, dynamic>>.from((d['playerState'] ?? []).map((e) => Map<String, dynamic>.from(e as Map))),
      faceQuotas: _parseFaceQuotas(d['faceQuotas']),
      userFaceRules: List<Map<String, dynamic>>.from((d['userFaceRules'] ?? []).map((e) => Map<String, dynamic>.from(e as Map))),
    )..refreshPlus3Day();
  }
}

Map<String, Map<String, int>> ngmyDefaultFaceQuotas() {
  final out = <String, Map<String, int>>{};
  for (final o in ['1', '2', '3', '-1', '-2']) {
    out[o] = {'perDay': 0, 'perWeek': 0};
  }
  return out;
}

Map<String, Map<String, int>> _parseFaceQuotas(dynamic raw) {
  final out = ngmyDefaultFaceQuotas();
  if (raw is! Map) return out;
  for (final o in out.keys) {
    final row = raw[o];
    if (row is! Map) continue;
    out[o] = {
      'perDay': ((row['perDay'] as num?)?.toInt() ?? 0).clamp(0, 999),
      'perWeek': ((row['perWeek'] as num?)?.toInt() ?? 0).clamp(0, 999),
    };
  }
  return out;
}

String ngmyDiceWeekKey([DateTime? now]) {
  final n = now ?? DateTime.now();
  final thursday = n.add(Duration(days: 4 - n.weekday));
  final firstThursday = DateTime(thursday.year, 1, 4);
  final week = 1 + ((thursday.difference(DateTime(firstThursday.year, firstThursday.month, firstThursday.day)).inDays) / 7).floor();
  return '${thursday.year}-W${week.toString().padLeft(2, '0')}';
}

Map<String, int> ngmyDefaultDiceWeights() => {
      '1': 22,
      '2': 22,
      '3': 16,
      '-1': 20,
      '-2': 20,
    };

String _emailKey(String email) => email.toLowerCase().trim();

Map<String, dynamic> _findPlayer(NgmyDiceSettings cfg, String email) {
  final key = _emailKey(email);
  for (final p in cfg.playerState) {
    if (_emailKey((p['email'] ?? '').toString()) == key) return p;
  }
  final p = {'email': key, 'winStreak': 0, 'loseStreak': 0};
  cfg.playerState.add(p);
  return p;
}

int _grantWinsLeft(NgmyDiceSettings cfg, String email) {
  final key = _emailKey(email);
  for (final g in cfg.userGrants) {
    if (_emailKey((g['email'] ?? '').toString()) == key) {
      return (g['winsLeft'] as num?)?.toInt() ?? 0;
    }
  }
  return 0;
}

void useGrantWin(NgmyDiceSettings cfg, String email) {
  final key = _emailKey(email);
  for (final g in cfg.userGrants) {
    if (_emailKey((g['email'] ?? '').toString()) == key) {
      final left = ((g['winsLeft'] as num?)?.toInt() ?? 0) - 1;
      g['winsLeft'] = left < 0 ? 0 : left;
      return;
    }
  }
}

void addUserGrant(NgmyDiceSettings cfg, String email, int wins) {
  final key = _emailKey(email);
  Map<String, dynamic>? row;
  for (final g in cfg.userGrants) {
    if (_emailKey((g['email'] ?? '').toString()) == key) {
      row = g;
      break;
    }
  }
  if (row == null) {
    cfg.userGrants.add({'email': key, 'winsLeft': wins});
  } else {
    row['winsLeft'] = ((row['winsLeft'] as num?)?.toInt() ?? 0) + wins;
  }
}

int? _takeForcedFace(NgmyDiceSettings cfg, String userEmail) {
  final key = _emailKey(userEmail);
  final today = NgmyDiceSettings._todayKey();
  final week = ngmyDiceWeekKey();

  Map<String, dynamic>? newestNext;
  for (final g in cfg.userFaceRules) {
    if (_emailKey((g['email'] ?? '').toString()) != key) continue;
    final left = (g['nextLeft'] as num?)?.toInt() ?? 0;
    if (left <= 0) continue;
    if (newestNext == null ||
        (g['updatedAt'] ?? '').toString().compareTo((newestNext['updatedAt'] ?? '').toString()) >= 0) {
      newestNext = g;
    }
  }
  if (newestNext != null) {
    newestNext['nextLeft'] = ((newestNext['nextLeft'] as num?)?.toInt() ?? 1) - 1;
    return (newestNext['outcome'] as num?)?.toInt() ?? 1;
  }

  int? takeQuota(Map<String, dynamic> row, String quotaKey, String usedKey, String stampKey, String stamp) {
    final quota = (row[quotaKey] as num?)?.toInt() ?? 0;
    if (quota <= 0) return null;
    if ((row[stampKey] ?? '').toString() != stamp) {
      row[stampKey] = stamp;
      row[usedKey] = 0;
    }
    final used = (row[usedKey] as num?)?.toInt() ?? 0;
    if (used >= quota) return null;
    row[usedKey] = used + 1;
    return (row['outcome'] as num?)?.toInt();
  }

  for (final g in cfg.userFaceRules) {
    if (_emailKey((g['email'] ?? '').toString()) != key) continue;
    final day = takeQuota(g, 'perDay', 'dayUsed', 'dayKey', today);
    if (day != null) return day;
  }
  for (final g in cfg.userFaceRules) {
    if (_emailKey((g['email'] ?? '').toString()) != key) continue;
    final wk = takeQuota(g, 'perWeek', 'weekUsed', 'weekKey', week);
    if (wk != null) return wk;
  }

  final player = _findPlayer(cfg, userEmail);
  final use = player['faceUse'] is Map
      ? Map<String, dynamic>.from(player['faceUse'] as Map)
      : <String, dynamic>{};
  player['faceUse'] = use;
  for (final entry in cfg.faceQuotas.entries) {
    final perDay = entry.value['perDay'] ?? 0;
    final perWeek = entry.value['perWeek'] ?? 0;
    if (perDay <= 0 && perWeek <= 0) continue;
    final row = use[entry.key] is Map
        ? Map<String, dynamic>.from(use[entry.key] as Map)
        : <String, dynamic>{};
    use[entry.key] = row;
    if (perDay > 0) {
      if ((row['dayKey'] ?? '').toString() != today) {
        row['dayKey'] = today;
        row['dayUsed'] = 0;
      }
      final used = (row['dayUsed'] as num?)?.toInt() ?? 0;
      if (used < perDay) {
        row['dayUsed'] = used + 1;
        return int.tryParse(entry.key);
      }
    }
    if (perWeek > 0) {
      if ((row['weekKey'] ?? '').toString() != week) {
        row['weekKey'] = week;
        row['weekUsed'] = 0;
      }
      final used = (row['weekUsed'] as num?)?.toInt() ?? 0;
      if (used < perWeek) {
        row['weekUsed'] = used + 1;
        return int.tryParse(entry.key);
      }
    }
  }
  return null;
}

void ngmySetUserFaceRule({
  required NgmyDiceSettings cfg,
  required String email,
  required int outcome,
  int nextLeft = 0,
  int perDay = 0,
  int perWeek = 0,
}) {
  final key = _emailKey(email);
  cfg.userFaceRules.removeWhere(
    (g) => _emailKey((g['email'] ?? '').toString()) == key && (g['outcome'] as num?)?.toInt() == outcome,
  );
  if (nextLeft <= 0 && perDay <= 0 && perWeek <= 0) return;
  cfg.userFaceRules.insert(0, {
    'email': key,
    'outcome': outcome,
    'nextLeft': nextLeft.clamp(0, 999),
    'perDay': perDay.clamp(0, 999),
    'dayUsed': 0,
    'dayKey': NgmyDiceSettings._todayKey(),
    'perWeek': perWeek.clamp(0, 999),
    'weekUsed': 0,
    'weekKey': ngmyDiceWeekKey(),
    'updatedAt': DateTime.now().toUtc().toIso8601String(),
  });
}

/// Picks dice outcome using admin weights, streak caps, grants, +3 daily limit.
int ngmyPickDiceOutcome(NgmyDiceSettings cfg, String userEmail, math.Random rng) {
  cfg.refreshPlus3Day();
  final forced = _takeForcedFace(cfg, userEmail);
  if (forced != null) {
    if (forced == 3) cfg.plus3UsedToday++;
    _recordOutcome(cfg, userEmail, forced);
    return forced;
  }
  final player = _findPlayer(cfg, userEmail);
  final winStreak = (player['winStreak'] as num?)?.toInt() ?? 0;
  final loseStreak = (player['loseStreak'] as num?)?.toInt() ?? 0;

  int pickWinOutcome() {
    final pool = <int>[];
    for (final o in [1, 2, 3]) {
      final w = cfg.weights['$o'] ?? 10;
      for (var i = 0; i < w; i++) pool.add(o);
    }
    if (pool.isEmpty) return 1;
    var o = pool[rng.nextInt(pool.length)];
    if (o == 3 && cfg.plus3UsedToday >= cfg.plus3DailyLimit) {
      o = rng.nextBool() ? 1 : 2;
    }
    return o;
  }

  int pickLoseOutcome() {
    final pool = <int>[];
    for (final o in [-1, -2]) {
      final w = cfg.weights['$o'] ?? 10;
      for (var i = 0; i < w; i++) pool.add(o);
    }
    return pool.isEmpty ? -1 : pool[rng.nextInt(pool.length)];
  }

  if (_grantWinsLeft(cfg, userEmail) > 0) {
    final o = pickWinOutcome();
    useGrantWin(cfg, userEmail);
    _recordOutcome(cfg, userEmail, o);
    return o;
  }

  if (winStreak >= cfg.maxWinStreak) {
    final o = pickLoseOutcome();
    _recordOutcome(cfg, userEmail, o);
    return o;
  }
  if (loseStreak >= cfg.maxLoseStreak) {
    final o = pickWinOutcome();
    if (o == 3) cfg.plus3UsedToday++;
    _recordOutcome(cfg, userEmail, o);
    return o;
  }

  final winPool = <int>[];
  final losePool = <int>[];
  for (final o in [1, 2, 3]) {
    final w = cfg.weights['$o'] ?? 10;
    for (var i = 0; i < w; i++) winPool.add(o);
  }
  for (final o in [-1, -2]) {
    final w = cfg.weights['$o'] ?? 10;
    for (var i = 0; i < w; i++) losePool.add(o);
  }

  final wp = cfg.winPercent.clamp(5, 95);
  final pickWin = rng.nextInt(100) < wp;

  int outcome;
  if (pickWin && winPool.isNotEmpty) {
    outcome = winPool[rng.nextInt(winPool.length)];
    if (outcome == 3 && cfg.plus3UsedToday >= cfg.plus3DailyLimit) {
      outcome = rng.nextBool() ? 1 : 2;
    }
  } else if (losePool.isNotEmpty) {
    outcome = losePool[rng.nextInt(losePool.length)];
  } else {
    outcome = pickWin ? 1 : -1;
  }

  if (outcome == 3) cfg.plus3UsedToday++;
  _recordOutcome(cfg, userEmail, outcome);
  return outcome;
}

const String kNgmyDiceLiveSettingsKey = 'ngmy_dice_live_v1';

void _mergeFaceRules(NgmyDiceSettings local, NgmyDiceSettings remote) {
  final byKey = <String, Map<String, dynamic>>{};
  String idOf(Map<String, dynamic> g) =>
      '${_emailKey((g['email'] ?? '').toString())}|${(g['outcome'] as num?)?.toInt() ?? 0}';
  void take(Map<String, dynamic> g) {
    final id = idOf(g);
    final prev = byKey[id];
    if (prev == null) {
      byKey[id] = Map<String, dynamic>.from(g);
      return;
    }
    final a = (prev['updatedAt'] ?? '').toString();
    final b = (g['updatedAt'] ?? '').toString();
    if (b.compareTo(a) > 0) {
      byKey[id] = Map<String, dynamic>.from(g);
      return;
    }
    if (a.compareTo(b) > 0) return;
    final next = Map<String, dynamic>.from(prev);
    final leftA = (prev['nextLeft'] as num?)?.toInt() ?? 0;
    final leftB = (g['nextLeft'] as num?)?.toInt() ?? 0;
    next['nextLeft'] = leftA < leftB ? leftA : leftB;
    final dayA = (prev['dayUsed'] as num?)?.toInt() ?? 0;
    final dayB = (g['dayUsed'] as num?)?.toInt() ?? 0;
    next['dayUsed'] = dayA > dayB ? dayA : dayB;
    final weekA = (prev['weekUsed'] as num?)?.toInt() ?? 0;
    final weekB = (g['weekUsed'] as num?)?.toInt() ?? 0;
    next['weekUsed'] = weekA > weekB ? weekA : weekB;
    byKey[id] = next;
  }
  for (final g in [...local.userFaceRules, ...remote.userFaceRules]) {
    take(g);
  }
  local.userFaceRules
    ..clear()
    ..addAll(byKey.values);
  local.faceQuotas = remote.faceQuotas.map((k, v) => MapEntry(k, Map<String, int>.from(v)));
}

class NgmyDiceLive {
  static Future<void> pull(NgmyDiceSettings cfg) async {
    try {
      final remote = await ngmyDbRelaySettingsFetch(
        kNgmyDiceLiveSettingsKey,
        timeout: const Duration(seconds: 4),
      );
      if (remote == null || remote.isEmpty) return;
      _mergeFaceRules(cfg, NgmyDiceSettings.fromJson(remote));
    } catch (_) {}
  }

  static Future<void> push(NgmyDiceSettings cfg) async {
    try {
      await ngmyDbRelaySettingsUpsert(
        kNgmyDiceLiveSettingsKey,
        cfg.toJson(),
        timeout: const Duration(seconds: 6),
      );
    } catch (_) {}
  }
}

void _recordOutcome(NgmyDiceSettings cfg, String email, int outcome) {
  final p = _findPlayer(cfg, email);
  final ws = (p['winStreak'] as num?)?.toInt() ?? 0;
  final ls = (p['loseStreak'] as num?)?.toInt() ?? 0;
  if (outcome > 0) {
    p['winStreak'] = ws + 1;
    p['loseStreak'] = 0;
  } else {
    p['loseStreak'] = ls + 1;
    p['winStreak'] = 0;
  }
}
