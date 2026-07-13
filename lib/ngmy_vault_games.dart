import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

enum VaultEngine { wordMatch, neonSerpent, orbRush, laneDrift, echoMatch, gravityWell }

class VaultGameDef {
  const VaultGameDef({
    required this.id,
    required this.title,
    required this.shortTitle,
    required this.tagline,
    required this.techLabel,
    required this.engine,
    required this.colors,
    required this.icon,
  });

  final String id;
  final String title;
  final String shortTitle;
  final String tagline;
  final String techLabel;
  final VaultEngine engine;
  final List<Color> colors;
  final IconData icon;
}

const kVaultGames = <VaultGameDef>[
  VaultGameDef(
    id: 'vault_sync',
    title: 'Vault Sync',
    shortTitle: 'Vault Sync',
    tagline: 'Tap when the arcs meet. Chase combos.',
    techLabel: 'SYNC',
    engine: VaultEngine.wordMatch,
    colors: [Color(0xFFFBBF24), Color(0xFFF97316)],
    icon: Icons.sync_rounded,
  ),
  VaultGameDef(
    id: 'word_match',
    title: 'Word Match',
    shortTitle: 'Word Match',
    tagline: 'Learn English or Kiswahili — earn coins.',
    techLabel: 'WORDS',
    engine: VaultEngine.wordMatch,
    colors: [Color(0xFFA78BFA), Color(0xFFEC4899)],
    icon: Icons.menu_book_rounded,
  ),
  VaultGameDef(
    id: 'neon_serpent',
    title: 'Neon Serpent',
    shortTitle: 'Neon Serpent',
    tagline: 'Steer with your finger. Eat rivals. Grow.',
    techLabel: 'SNAKE',
    engine: VaultEngine.neonSerpent,
    colors: [Color(0xFF34D399), Color(0xFFA3E635)],
    icon: Icons.gesture_rounded,
  ),
  VaultGameDef(
    id: 'orb_rush',
    title: 'Orb Rush',
    shortTitle: 'Orb Rush',
    tagline: 'Pop glowing orbs before they burst.',
    techLabel: 'ORBS',
    engine: VaultEngine.orbRush,
    colors: [Color(0xFFF472B6), Color(0xFFA78BFA)],
    icon: Icons.bubble_chart_rounded,
  ),
  VaultGameDef(
    id: 'lane_drift',
    title: 'Lane Drift',
    shortTitle: 'Lane Drift',
    tagline: 'Finger-steer through neon traffic lanes.',
    techLabel: 'DRIFT',
    engine: VaultEngine.laneDrift,
    colors: [Color(0xFF60A5FA), Color(0xFF38BDF8)],
    icon: Icons.speed_rounded,
  ),
  VaultGameDef(
    id: 'echo_match',
    title: 'Echo Match',
    shortTitle: 'Echo Match',
    tagline: 'Replay the pulse chain. Climb 10 echoes.',
    techLabel: 'ECHO',
    engine: VaultEngine.echoMatch,
    colors: [Color(0xFFFBBF24), Color(0xFFF97316)],
    icon: Icons.graphic_eq_rounded,
  ),
  VaultGameDef(
    id: 'gravity_well',
    title: 'Gravity Well',
    shortTitle: 'Gravity Well',
    tagline: 'Sling your probe into coin wells.',
    techLabel: 'GRAV',
    engine: VaultEngine.gravityWell,
    colors: [Color(0xFFEF4444), Color(0xFFF59E0B)],
    icon: Icons.blur_circular_rounded,
  ),
];

// Large offline banks for Type Rush
const kVaultSentences = <String>[
  'Systems online and ready',
  'Sync the vault channel now',
  'Type faster to earn coins',
  'Neon lights fill the grid',
  'Hold the line no matter what',
  'Data packets move like rain',
  'Keep your focus razor sharp',
  'Unlock the next pulse level',
  'Charge the core before midnight',
  'Every word is a new reward',
  'Swipe through the signal storm',
  'Build speed without mistakes',
  'The future runs on keystrokes',
  'Catch the falling code words',
  'Stay calm under pressure',
  'Accuracy beats empty speed',
  'Vault coins stack in real time',
  'Design ten steps of mastery',
  'Make every level feel alive',
  'Your streak is your power',
  'Firewalls melt under pressure',
  'Route the beam through glass',
  'Orbit the debris with grace',
  'Rewrite the protocol cleanly',
  'Never drop the live current',
  'Cut the byte on the beat',
  'Dock soft into the bay',
  'Link two neurons at once',
  'Open the chrono gate gently',
  'Coins fly home when you win',
];

const kVaultWords = <String>[
  'vault', 'sync', 'pulse', 'neon', 'orbit', 'laser', 'grid', 'core', 'byte', 'packet',
  'signal', 'quantum', 'cipher', 'firewall', 'memory', 'cache', 'node', 'mesh', 'drift', 'boost',
  'combo', 'streak', 'level', 'coin', 'reward', 'focus', 'speed', 'precision', 'charge', 'glow',
  'spark', 'flux', 'vector', 'matrix', 'kernel', 'thread', 'frame', 'render', 'shader', 'pixel',
  'audio', 'relay', 'beacon', 'portal', 'gate', 'prism', 'helix', 'nova', 'flare', 'surge',
  'rapid', 'swift', 'clean', 'sharp', 'bright', 'heavy', 'light', 'solid', 'fluid', 'static',
  'dynamic', 'online', 'secure', 'local', 'offline', 'arcade', 'serpent', 'orb', 'echo', 'well',
  'type', 'rush', 'catch', 'match', 'link', 'hold', 'tap', 'drag', 'swipe', 'steer',
  'grow', 'eat', 'win', 'rise', 'fall', 'climb', 'clear', 'unlock', 'upgrade', 'design',
];

class VaultGameProgress {
  const VaultGameProgress({this.best = 0, this.plays = 0, this.coins = 0, this.level = 1, this.bestCombo = 0});

  final int best;
  final int plays;
  final int coins;
  final int level;
  final int bestCombo;

  /// Legacy alias used by older hub code paths.
  int get xp => coins;

  Map<String, dynamic> toJson() => {
        'best': best,
        'plays': plays,
        'coins': coins,
        'xp': coins,
        'level': level,
        'bestCombo': bestCombo,
      };

  factory VaultGameProgress.fromJson(Map map) {
    final coins = (map['coins'] as num?)?.toInt() ?? (map['xp'] as num?)?.toInt() ?? 0;
    return VaultGameProgress(
      best: (map['best'] as num?)?.toInt() ?? 0,
      plays: (map['plays'] as num?)?.toInt() ?? 0,
      coins: coins,
      level: ((map['level'] as num?)?.toInt() ?? 1).clamp(1, 10),
      bestCombo: (map['bestCombo'] as num?)?.toInt() ?? 0,
    );
  }
}

class VaultProgressStore {
  static const _k = 'ngmy_vault_arcade_progress_v3';
  static const _kWallet = 'ngmy_vault_arcade_wallet_v1';

  static Future<int> walletCoins() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getInt(_kWallet) ?? 0;
    } catch (_) {
      return 0;
    }
  }

  static Future<int> addWalletCoins(int amount) async {
    final prefs = await SharedPreferences.getInstance();
    final next = (prefs.getInt(_kWallet) ?? 0) + amount;
    await prefs.setInt(_kWallet, next);
    return next;
  }

  static Future<int> spendWalletCoins(int amount) async {
    final prefs = await SharedPreferences.getInstance();
    final have = prefs.getInt(_kWallet) ?? 0;
    final next = math.max(0, have - amount);
    await prefs.setInt(_kWallet, next);
    return next;
  }

  static Future<Map<String, VaultGameProgress>> loadAll() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final out = <String, VaultGameProgress>{};
      final raw = prefs.getString(_k) ?? prefs.getString('ngmy_vault_arcade_progress_v2') ?? prefs.getString('ngmy_vault_arcade_progress_v1');
      if (raw != null) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          for (final e in decoded.entries) {
            out['${e.key}'] = VaultGameProgress.fromJson(Map<String, dynamic>.from(e.value as Map));
          }
        }
      }
      final syncRaw = prefs.getString('ngmy_vault_sync_v2');
      if (syncRaw != null) {
        final map = jsonDecode(syncRaw);
        if (map is Map) {
          final best = (map['best'] as num?)?.toInt() ?? 0;
          final bestCombo = (map['bestCombo'] as num?)?.toInt() ?? 0;
          final prev = out['vault_sync'] ?? const VaultGameProgress();
          out['vault_sync'] = VaultGameProgress(
            best: math.max(prev.best, best),
            plays: math.max(prev.plays, best > 0 ? 1 : 0),
            coins: prev.coins,
            level: prev.level,
            bestCombo: math.max(prev.bestCombo, bestCombo),
          );
        }
      }
      return out;
    } catch (_) {
      return {};
    }
  }

  static Future<VaultGameProgress> saveRun({
    required String gameId,
    required int level,
    required int score,
    required int coinsEarned,
  }) async {
    final all = await loadAll();
    final prev = all[gameId] ?? const VaultGameProgress();
    final next = VaultGameProgress(
      best: math.max(prev.best, score),
      plays: prev.plays + 1,
      coins: prev.coins + coinsEarned,
      level: math.max(prev.level, level.clamp(1, 10)),
      bestCombo: prev.bestCombo,
    );
    all[gameId] = next;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_k, jsonEncode(all.map((k, v) => MapEntry(k, v.toJson()))));
      if (coinsEarned > 0) await addWalletCoins(coinsEarned);
    } catch (_) {}
    return next;
  }

  /// Back-compat for older call sites.
  static Future<VaultGameProgress> saveLevel({
    required String gameId,
    required int level,
    required int score,
    required int xpGain,
  }) =>
      saveRun(gameId: gameId, level: level, score: score, coinsEarned: xpGain);
}

/// Result popped back to the arcade hub for coin-fly animation.
class VaultGameResult {
  const VaultGameResult({required this.coinsEarned, required this.score});
  final int coinsEarned; // can be negative when user lost coins
  final int score;
}

class NgmyVaultLeveledGameScreen extends StatefulWidget {
  const NgmyVaultLeveledGameScreen({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultLeveledGameScreen> createState() => _NgmyVaultLeveledGameScreenState();
}

class _NgmyVaultLeveledGameScreenState extends State<NgmyVaultLeveledGameScreen> with TickerProviderStateMixin {
  late final AnimationController _tick;
  final _rng = math.Random();
  final _typeCtrl = TextEditingController();
  final _typeFocus = FocusNode();

  int _level = 1;
  int _savedLevel = 1;
  int _score = 0;
  int _sessionCoins = 0;
  int _progress = 0;
  int _need = 3;
  bool _playing = false;
  bool _levelClear = false;
  String _feedback = 'Earn coins. Clear 10 levels.';
  Color _feedbackColor = Colors.white70;

  // type rush
  String _prompt = '';
  final List<_FallWord> _falling = [];
  Timer? _spawnTimer;

  // snake
  final List<Offset> _snake = [];
  final List<_RivalSnake> _rivals = [];
  Offset _aim = const Offset(0, -1);
  Offset? _food;
  double _snakeSpeed = 2.4;

  // orbs
  final List<_Orb> _orbs = [];

  // lane
  double _carX = 0.5;
  final List<_LaneObstacle> _obstacles = [];

  // echo
  List<int> _echo = [];
  int _echoStep = 0;
  bool _echoShow = false;
  int? _echoFlash;

  // gravity
  Offset _probe = const Offset(0.5, 0.8);
  Offset _vel = Offset.zero;
  bool _dragging = false;
  Offset _well = const Offset(0.5, 0.28);

  VaultGameDef get g => widget.game;
  List<Color> get colors => g.colors;
  bool get _isRainLevel => g.engine == VaultEngine.wordMatch && _level % 2 == 0;

  @override
  void initState() {
    super.initState();
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 16))..addListener(_frame);
    unawaited(_load());
  }

  @override
  void dispose() {
    _spawnTimer?.cancel();
    _tick.dispose();
    _typeCtrl.dispose();
    _typeFocus.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final all = await VaultProgressStore.loadAll();
    if (!mounted) return;
    final p = all[g.id];
    setState(() {
      _savedLevel = (p?.level ?? 1).clamp(1, 10);
      _level = _savedLevel;
      _need = 2 + _level;
    });
  }

  void _frame() {
    if (!_playing || _levelClear) return;
    setState(() {
      switch (g.engine) {
        case VaultEngine.wordMatch:
          if (_isRainLevel) {
            for (final w in _falling) {
              w.y += (0.004 + _level * 0.00055);
            }
            _falling.removeWhere((w) {
              if (w.y >= 1.0) {
                _progress = math.max(0, _progress - 1);
                _feedback = 'WORD DROPPED';
                _feedbackColor = const Color(0xFFEF4444);
                return true;
              }
              return false;
            });
          }
          break;
        case VaultEngine.neonSerpent:
          _stepSnake();
          break;
        case VaultEngine.orbRush:
          for (final o in _orbs) {
            o.r += 0.004 + _level * 0.0004;
          }
          _orbs.removeWhere((o) {
            if (o.r >= o.maxR) {
              _progress = math.max(0, _progress - 1);
              return true;
            }
            return false;
          });
          if (_orbs.length < 3 + _level ~/ 2) _spawnOrb();
          break;
        case VaultEngine.laneDrift:
          for (final o in _obstacles) {
            o.y += 0.012 + _level * 0.0012;
          }
          _obstacles.removeWhere((o) => o.y > 1.2);
          if (_obstacles.isEmpty || _obstacles.last.y > 0.28) {
            _obstacles.add(_LaneObstacle(x: _rng.nextDouble(), y: -0.1, w: 0.18 + _rng.nextDouble() * 0.12));
          }
          for (final o in _obstacles) {
              if ((o.x - _carX).abs() < o.w * 0.55 && o.y > 0.72 && o.y < 0.92) {
              unawaited(_loseHit(coins: 4 + _level, msg: 'CRASH'));
              _obstacles.clear();
              break;
            }
          }
          break;
        case VaultEngine.gravityWell:
          if (!_dragging) {
            final to = _well - _probe;
            _vel += to * 0.0018;
            _vel *= 0.992;
            _probe += _vel * 0.02;
            if (_probe.dx < 0.05 || _probe.dx > 0.95) _vel = Offset(-_vel.dx * 0.8, _vel.dy);
            if (_probe.dy < 0.05 || _probe.dy > 0.95) _vel = Offset(_vel.dx, -_vel.dy * 0.8);
            _probe = Offset(_probe.dx.clamp(0.05, 0.95), _probe.dy.clamp(0.05, 0.95));
            if ((_probe - _well).distance < 0.07) {
              _well = Offset(0.2 + _rng.nextDouble() * 0.6, 0.15 + _rng.nextDouble() * 0.45);
              _vel *= 0.2;
              unawaited(_gainHit(coins: 4 + _level));
            }
          }
          break;
        case VaultEngine.echoMatch:
          break;
      }
    });
  }

  void _stepSnake() {
    if (_snake.isEmpty) return;
    final head = _snake.first + _aim * (_snakeSpeed * 0.0045 * (1 + _level * 0.04));
    final nh = Offset(head.dx.clamp(0.02, 0.98), head.dy.clamp(0.02, 0.98));
    _snake.insert(0, nh);
    while (_snake.length > 8 + _progress * 2) {
      _snake.removeLast();
    }
    if (_food != null && (nh - _food!).distance < 0.045) {
      _food = Offset(0.1 + _rng.nextDouble() * 0.8, 0.1 + _rng.nextDouble() * 0.8);
      unawaited(_gainHit(coins: 3 + _level));
    }
    for (final r in _rivals) {
      final dir = (_snake.first - r.body.first);
      final n = dir.distance < 0.001 ? Offset(_rng.nextDouble() - 0.5, _rng.nextDouble() - 0.5) : dir / dir.distance;
      final h = r.body.first + n * (0.003 + _level * 0.00025);
      r.body.insert(0, Offset(h.dx.clamp(0.02, 0.98), h.dy.clamp(0.02, 0.98)));
      while (r.body.length > r.len) {
        r.body.removeLast();
      }
      // eat rival head if we hit their body and we're longer
      if (r.body.length > 1) {
        for (var i = 1; i < r.body.length; i++) {
          if ((nh - r.body[i]).distance < 0.03 && _snake.length >= r.len) {
            r.len = math.max(3, r.len - 2);
            while (r.body.length > r.len) {
              r.body.removeLast();
            }
            unawaited(_gainHit(coins: 6 + _level));
            break;
          }
        }
      }
      if ((nh - r.body.first).distance < 0.03 && r.len > _snake.length) {
        unawaited(_loseHit(coins: 5 + _level, msg: 'EATEN'));
        _resetSnake();
      }
    }
  }

  void _resetSnake() {
    _snake
      ..clear()
      ..addAll([const Offset(0.5, 0.6), const Offset(0.5, 0.64), const Offset(0.5, 0.68)]);
    _aim = const Offset(0, -1);
    _food = Offset(0.3 + _rng.nextDouble() * 0.4, 0.25 + _rng.nextDouble() * 0.3);
    _rivals
      ..clear()
      ..add(_RivalSnake(len: 5, body: [const Offset(0.2, 0.3), const Offset(0.2, 0.34), const Offset(0.2, 0.38)]))
      ..add(_RivalSnake(len: 4, body: [const Offset(0.8, 0.4), const Offset(0.76, 0.4), const Offset(0.72, 0.4)]));
  }

  void _spawnOrb() {
    _orbs.add(_Orb(x: 0.12 + _rng.nextDouble() * 0.76, y: 0.15 + _rng.nextDouble() * 0.55, r: 0.02, maxR: 0.09 + _rng.nextDouble() * 0.04));
  }

  Future<void> _start() async {
    HapticFeedback.mediumImpact();
    _spawnTimer?.cancel();
    setState(() {
      _playing = true;
      _levelClear = false;
      _progress = 0;
      _need = 3 + _level;
      _feedback = 'Level $_level · earn coins';
      _feedbackColor = Colors.white70;
      _falling.clear();
      _orbs.clear();
      _obstacles.clear();
      _echo = [];
      _echoStep = 0;
      _probe = const Offset(0.5, 0.8);
      _vel = Offset.zero;
      _well = Offset(0.3 + _rng.nextDouble() * 0.4, 0.25);
      _carX = 0.5;
      _typeCtrl.clear();
    });
    if (g.engine == VaultEngine.neonSerpent) _resetSnake();
    if (g.engine == VaultEngine.wordMatch) {
      if (_isRainLevel) {
        _spawnTimer = Timer.periodic(Duration(milliseconds: (900 - _level * 40).clamp(420, 900)), (_) {
          if (!_playing || !mounted) return;
          setState(() {
            _falling.add(_FallWord(text: kVaultWords[_rng.nextInt(kVaultWords.length)], x: 0.1 + _rng.nextDouble() * 0.7, y: -0.05));
          });
        });
      } else {
        _nextSentence();
      }
      WidgetsBinding.instance.addPostFrameCallback((_) => _typeFocus.requestFocus());
    }
    if (g.engine == VaultEngine.echoMatch) await _nextEcho();
    _tick.repeat();
  }

  void _nextSentence() {
    _prompt = kVaultSentences[_rng.nextInt(kVaultSentences.length)];
    _typeCtrl.clear();
    setState(() {});
  }

  Future<void> _nextEcho() async {
    _echo = [..._echo, _rng.nextInt(4)];
    _echoStep = 0;
    setState(() {
      _echoShow = true;
      _feedback = 'Watch';
    });
    for (final n in _echo) {
      if (!mounted || !_playing) return;
      setState(() => _echoFlash = n);
      await Future<void>.delayed(Duration(milliseconds: (380 - _level * 12).clamp(180, 380)));
      if (!mounted) return;
      setState(() => _echoFlash = null);
      await Future<void>.delayed(const Duration(milliseconds: 120));
    }
    if (!mounted) return;
    setState(() {
      _echoShow = false;
      _feedback = 'Repeat';
    });
  }

  int _banked = 0;

  Future<void> _gainHit({required int coins}) async {
    HapticFeedback.lightImpact();
    setState(() {
      _progress += 1;
      _score += coins * 2;
      _sessionCoins += coins;
      _feedback = '+$coins coins · $_progress/$_need';
      _feedbackColor = const Color(0xFFFBBF24);
    });
    await VaultProgressStore.addWalletCoins(coins);
    _banked += coins;
    if (_progress >= _need) await _clearLevel();
  }

  Future<void> _loseHit({required int coins, required String msg}) async {
    HapticFeedback.heavyImpact();
    final lost = coins.clamp(1, 99);
    setState(() {
      _progress = 0;
      _sessionCoins -= lost;
      _feedback = '$msg · -$lost coins';
      _feedbackColor = const Color(0xFFEF4444);
    });
    await VaultProgressStore.spendWalletCoins(lost);
  }

  Future<void> _clearLevel() async {
    _spawnTimer?.cancel();
    final bonus = 12 + _level * 4;
    setState(() {
      _levelClear = true;
      _playing = false;
      _sessionCoins += bonus;
      _feedback = _level >= 10 ? 'MAXED · COINS BANKED' : 'LEVEL $_level CLEAR · +$bonus BONUS';
      _feedbackColor = const Color(0xFFFBBF24);
    });
    final nextLevel = (_level + 1).clamp(1, 10);
    await VaultProgressStore.addWalletCoins(bonus);
    _banked += bonus;
    final saved = await VaultProgressStore.saveRun(
      gameId: g.id,
      level: _level >= 10 ? 10 : nextLevel,
      score: _score,
      coinsEarned: 0,
    );
    if (!mounted) return;
    setState(() {
      _savedLevel = saved.level;
      if (_level < 10) _level = nextLevel;
    });
  }

  Future<void> _finishToHub() async {
    final pending = _sessionCoins - _banked;
    if (pending > 0) {
      await VaultProgressStore.addWalletCoins(pending);
      _banked = _sessionCoins;
      await VaultProgressStore.saveRun(gameId: g.id, level: _level, score: _score, coinsEarned: 0);
    } else if (pending < 0) {
      // losses already spent from wallet during play
      _banked = _sessionCoins;
    }
    if (!mounted) return;
    Navigator.pop(context, VaultGameResult(coinsEarned: _sessionCoins, score: _score));
  }

  void _onType(String value) {
    if (!_playing) return;
    if (g.engine != VaultEngine.wordMatch) return;
    if (_isRainLevel) {
      final typed = value.trim().toLowerCase();
      final idx = _falling.indexWhere((w) => w.text == typed);
      if (idx >= 0) {
        setState(() => _falling.removeAt(idx));
        _typeCtrl.clear();
        unawaited(_gainHit(coins: 3 + _level));
      }
      return;
    }
    if (value.toLowerCase().trim() == _prompt.toLowerCase()) {
      unawaited(_gainHit(coins: 5 + _level));
      _nextSentence();
    }
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) async {
        if (didPop) return;
        await _finishToHub();
      },
      child: Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 14, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: _finishToHub,
                    icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20),
                  ),
                  Expanded(child: Text(g.title.toUpperCase(), style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.1, fontSize: 12))),
                  _pill(Icons.monetization_on_rounded, '$_sessionCoins'),
                  const SizedBox(width: 8),
                  _pill(Icons.flag_rounded, 'LV $_level/10'),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: Column(
                children: [
                  Row(
                    children: [
                      Text('Target $_progress/$_need', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
                      const Spacer(),
                      Text('Best LV $_savedLevel', style: TextStyle(color: colors.first.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 11)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(99),
                    child: LinearProgressIndicator(
                      value: _need == 0 ? 0 : (_progress / _need).clamp(0.0, 1.0),
                      minHeight: 7,
                      backgroundColor: Colors.white12,
                      color: colors.first,
                    ),
                  ),
                ],
              ),
            ),
            Expanded(child: AnimatedBuilder(animation: _tick, builder: (_, __) => _field())),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 0, 18, 8),
              child: Text(_feedback, textAlign: TextAlign.center, style: TextStyle(color: _feedbackColor, fontWeight: FontWeight.w800, fontSize: 13)),
            ),
            if (g.engine == VaultEngine.wordMatch && _playing)
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 10),
                child: TextField(
                  controller: _typeCtrl,
                  focusNode: _typeFocus,
                  autofocus: true,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 16),
                  cursorColor: colors.first,
                  decoration: InputDecoration(
                    hintText: _isRainLevel ? 'Type falling words…' : 'Type the sentence…',
                    hintStyle: const TextStyle(color: Colors.white38),
                    filled: true,
                    fillColor: Colors.white.withValues(alpha: 0.06),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: colors.first.withValues(alpha: 0.45))),
                    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: colors.first.withValues(alpha: 0.35))),
                    focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: colors.first, width: 1.4)),
                  ),
                  onChanged: _onType,
                  textInputAction: TextInputAction.done,
                ),
              ),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 0, 18, 16),
              child: SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: _levelClear ? (_level >= 10 ? _finishToHub : _start) : (_playing ? null : _start),
                  style: FilledButton.styleFrom(
                    backgroundColor: colors.last,
                    foregroundColor: Colors.white,
                    disabledBackgroundColor: colors.last.withValues(alpha: 0.35),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  child: Text(
                    _levelClear ? (_level >= 10 ? 'COLLECT COINS' : 'NEXT LEVEL $_level') : (_playing ? 'PLAYING' : 'START LEVEL $_level'),
                    style: const TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
      ),
    );
  }

  Widget _pill(IconData icon, String t) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(999)),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 13, color: const Color(0xFFFBBF24)),
          const SizedBox(width: 4),
          Text(t, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
        ],
      ),
    );
  }

  Widget _field() {
    switch (g.engine) {
      case VaultEngine.wordMatch:
        return Padding(
          padding: const EdgeInsets.all(16),
          child: Stack(
            children: [
              if (!_isRainLevel)
                Center(
                  child: TweenAnimationBuilder<double>(
                    key: ValueKey(_prompt),
                    tween: Tween(begin: 0.85, end: 1),
                    duration: const Duration(milliseconds: 420),
                    curve: Curves.easeOutBack,
                    builder: (context, s, child) => Transform.scale(scale: s, child: child),
                    child: Container(
                      padding: const EdgeInsets.all(18),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(18),
                        gradient: LinearGradient(colors: [colors.first.withValues(alpha: 0.25), colors.last.withValues(alpha: 0.18)]),
                        border: Border.all(color: colors.first.withValues(alpha: 0.55)),
                      ),
                      child: Text(
                        _playing ? _prompt : 'Start to type glowing sentences',
                        textAlign: TextAlign.center,
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, height: 1.3),
                      ),
                    ),
                  ),
                )
              else
                ..._falling.map((w) {
                  return Positioned(
                    left: w.x * MediaQuery.sizeOf(context).width * 0.75,
                    top: 20 + w.y * (MediaQuery.sizeOf(context).height * 0.42),
                    child: Transform.scale(
                      scale: 1 + math.sin(w.y * 12) * 0.08,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          gradient: LinearGradient(colors: colors),
                          boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.45), blurRadius: 16)],
                        ),
                        child: Text(w.text, style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 0.5)),
                      ),
                    ),
                  );
                }),
            ],
          ),
        );
      case VaultEngine.neonSerpent:
        return GestureDetector(
          onPanUpdate: (d) {
            if (!_playing) return;
            final v = d.delta;
            if (v.distance < 0.5) return;
            setState(() => _aim = Offset(v.dx, v.dy) / v.distance);
          },
          onTap: () {
            if (!_playing) _start();
          },
          child: CustomPaint(
            painter: _SnakePainter(colors: colors, snake: _snake, rivals: _rivals, food: _food),
            child: const Center(child: Text('DRAG TO STEER', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.orbRush:
        return LayoutBuilder(
          builder: (context, c) {
            return GestureDetector(
              onTapDown: (d) {
                if (!_playing) {
                  _start();
                  return;
                }
                final p = Offset(d.localPosition.dx / c.maxWidth, d.localPosition.dy / c.maxHeight);
                final hit = _orbs.indexWhere((o) => (Offset(o.x, o.y) - p).distance < o.r + 0.03);
                if (hit >= 0) {
                  setState(() => _orbs.removeAt(hit));
                  unawaited(_gainHit(coins: 2 + _level));
                }
              },
              child: CustomPaint(painter: _OrbPainter(colors: colors, orbs: _orbs), size: Size.infinite),
            );
          },
        );
      case VaultEngine.laneDrift:
        return GestureDetector(
          onHorizontalDragUpdate: (d) {
            if (!_playing) return;
            setState(() => _carX = (_carX + d.delta.dx / 280).clamp(0.08, 0.92));
          },
          onTap: () {
            if (!_playing) _start();
          },
          child: CustomPaint(
            painter: _LanePainter(colors: colors, carX: _carX, obstacles: _obstacles, t: _tick.value),
            child: const Center(child: Text('DRAG TO DRIFT', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.echoMatch:
        return Center(
          child: SizedBox(
            width: 260,
            height: 260,
            child: GridView.builder(
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 12, crossAxisSpacing: 12),
              itemCount: 4,
              itemBuilder: (_, i) {
                final on = _echoFlash == i;
                return GestureDetector(
                  onTap: () async {
                    if (!_playing) {
                      await _start();
                      return;
                    }
                    if (_echoShow) return;
                    if (_echo[_echoStep] == i) {
                      setState(() => _echoStep += 1);
                      if (_echoStep >= _echo.length) {
                        await _gainHit(coins: 4 + _level);
                        if (_playing && !_levelClear) await _nextEcho();
                      }
                    } else {
                      unawaited(_loseHit(coins: 3 + _level, msg: 'WRONG ECHO'));
                      await _nextEcho();
                    }
                  },
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 90),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(18),
                      gradient: on ? LinearGradient(colors: colors) : null,
                      color: on ? null : Colors.white.withValues(alpha: 0.07),
                      border: Border.all(color: colors.first.withValues(alpha: on ? 0.95 : 0.35)),
                    ),
                  ),
                );
              },
            ),
          ),
        );
      case VaultEngine.gravityWell:
        return LayoutBuilder(
          builder: (context, c) {
            return GestureDetector(
              onPanStart: (d) {
                if (!_playing) {
                  _start();
                  return;
                }
                setState(() {
                  _dragging = true;
                  _probe = Offset(d.localPosition.dx / c.maxWidth, d.localPosition.dy / c.maxHeight);
                  _vel = Offset.zero;
                });
              },
              onPanUpdate: (d) {
                if (!_dragging) return;
                setState(() => _probe = Offset(d.localPosition.dx / c.maxWidth, d.localPosition.dy / c.maxHeight));
              },
              onPanEnd: (d) {
                if (!_dragging) return;
                final v = d.velocity.pixelsPerSecond;
                setState(() {
                  _dragging = false;
                  _vel = Offset(v.dx / 1400, v.dy / 1400);
                });
              },
              child: CustomPaint(painter: _GravityPainter(colors: colors, probe: _probe, well: _well), size: Size.infinite),
            );
          },
        );
    }
  }
}

class _FallWord {
  _FallWord({required this.text, required this.x, required this.y});
  final String text;
  final double x;
  double y;
}

class _RivalSnake {
  _RivalSnake({required this.len, required this.body});
  int len;
  final List<Offset> body;
}

class _Orb {
  _Orb({required this.x, required this.y, required this.r, required this.maxR});
  final double x;
  final double y;
  double r;
  final double maxR;
}

class _LaneObstacle {
  _LaneObstacle({required this.x, required this.y, required this.w});
  final double x;
  double y;
  final double w;
}

class _SnakePainter extends CustomPainter {
  _SnakePainter({required this.colors, required this.snake, required this.rivals, required this.food});
  final List<Color> colors;
  final List<Offset> snake;
  final List<_RivalSnake> rivals;
  final Offset? food;

  @override
  void paint(Canvas canvas, Size size) {
    void drawSnake(List<Offset> body, Color a, Color b) {
      for (var i = body.length - 1; i >= 0; i--) {
        final p = Offset(body[i].dx * size.width, body[i].dy * size.height);
        final t = i / math.max(1, body.length - 1);
        canvas.drawCircle(p, i == 0 ? 11 : 8 - t * 2, Paint()..color = Color.lerp(a, b, t)!);
      }
    }

    drawSnake(snake, colors.first, colors.last);
    for (final r in rivals) {
      drawSnake(r.body, const Color(0xFFEF4444), const Color(0xFFF97316));
    }
    if (food != null) {
      canvas.drawCircle(Offset(food!.dx * size.width, food!.dy * size.height), 8, Paint()..color = const Color(0xFFFBBF24));
    }
  }

  @override
  bool shouldRepaint(covariant _SnakePainter old) => true;
}

class _OrbPainter extends CustomPainter {
  _OrbPainter({required this.colors, required this.orbs});
  final List<Color> colors;
  final List<_Orb> orbs;

  @override
  void paint(Canvas canvas, Size size) {
    for (final o in orbs) {
      final p = Offset(o.x * size.width, o.y * size.height);
      final rr = o.r * size.shortestSide;
      canvas.drawCircle(p, rr, Paint()..color = colors.first.withValues(alpha: 0.2));
      canvas.drawCircle(p, rr * 0.7, Paint()..shader = RadialGradient(colors: colors).createShader(Rect.fromCircle(center: p, radius: rr)));
    }
  }

  @override
  bool shouldRepaint(covariant _OrbPainter old) => true;
}

class _LanePainter extends CustomPainter {
  _LanePainter({required this.colors, required this.carX, required this.obstacles, required this.t});
  final List<Color> colors;
  final double carX;
  final List<_LaneObstacle> obstacles;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 0; i < 8; i++) {
      final y = ((i / 8) + t) % 1.0 * size.height;
      canvas.drawRect(Rect.fromLTWH(size.width * 0.48, y, 4, 28), Paint()..color = Colors.white24);
    }
    for (final o in obstacles) {
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(o.x * size.width, o.y * size.height), width: o.w * size.width, height: 28), const Radius.circular(8)),
        Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.85),
      );
    }
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(carX * size.width, size.height * 0.82), width: 44, height: 64), const Radius.circular(12)),
      Paint()..shader = LinearGradient(colors: colors).createShader(Rect.fromLTWH(0, 0, size.width, size.height)),
    );
  }

  @override
  bool shouldRepaint(covariant _LanePainter old) => true;
}

class _GravityPainter extends CustomPainter {
  _GravityPainter({required this.colors, required this.probe, required this.well});
  final List<Color> colors;
  final Offset probe;
  final Offset well;

  @override
  void paint(Canvas canvas, Size size) {
    final w = Offset(well.dx * size.width, well.dy * size.height);
    final p = Offset(probe.dx * size.width, probe.dy * size.height);
    canvas.drawCircle(w, 34, Paint()..color = colors.first.withValues(alpha: 0.2));
    canvas.drawCircle(w, 16, Paint()..color = const Color(0xFFFBBF24));
    canvas.drawCircle(p, 12, Paint()..color = colors.last);
    canvas.drawLine(p, w, Paint()..color = Colors.white24..strokeWidth = 2);
  }

  @override
  bool shouldRepaint(covariant _GravityPainter old) => true;
}
