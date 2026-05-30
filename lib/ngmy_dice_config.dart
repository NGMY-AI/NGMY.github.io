import 'dart:math' as math;
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
  })  : weights = Map<String, int>.from(weights ?? ngmyDefaultDiceWeights()),
        plus3Date = plus3Date ?? _todayKey(),
        userGrants = userGrants ?? [],
        playerState = playerState ?? [];

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
    )..refreshPlus3Day();
  }
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

/// Picks dice outcome using admin weights, streak caps, grants, +3 daily limit.
int ngmyPickDiceOutcome(NgmyDiceSettings cfg, String userEmail, math.Random rng) {
  cfg.refreshPlus3Day();
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
