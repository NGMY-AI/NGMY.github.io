import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

enum VaultEngine {
  wordMatch,
  neonSerpent,
  pulseForge,
  laserLane,
  orbPop,
  helixHold,
  nodeDash,
  gravityHook,
}

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
  // Row 1
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
    tagline: 'Steer the data worm. Absorb nodes. Grow.',
    techLabel: 'SNAKE',
    engine: VaultEngine.neonSerpent,
    colors: [Color(0xFF34D399), Color(0xFF22D3EE)],
    icon: Icons.polyline_rounded,
  ),
  // Row 2
  VaultGameDef(
    id: 'color_sprint',
    title: 'Color Sprint',
    shortTitle: 'Color Sprint',
    tagline: 'Tap the matching color before it changes.',
    techLabel: 'REFLEX',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFFB7185), Color(0xFFFACC15)],
    icon: Icons.palette_rounded,
  ),
  VaultGameDef(
    id: 'beat_bounce',
    title: 'Beat Bounce',
    shortTitle: 'Beat Bounce',
    tagline: 'Tap in rhythm to keep the streak alive.',
    techLabel: 'RHYTHM',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF60A5FA), Color(0xFF818CF8)],
    icon: Icons.graphic_eq_rounded,
  ),
  VaultGameDef(
    id: 'maze_dash',
    title: 'Maze Dash',
    shortTitle: 'Maze Dash',
    tagline: 'Swipe to steer through the maze to the exit.',
    techLabel: 'MAZE',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFF34D399), Color(0xFF06B6D4)],
    icon: Icons.route_rounded,
  ),
  // Extra keep
  VaultGameDef(
    id: 'memory_flip',
    title: 'Memory Flip',
    shortTitle: 'Memory Flip',
    tagline: 'Flip cards, find every pair, beat the clock.',
    techLabel: 'MEMORY',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF2DD4BF), Color(0xFF22D3EE)],
    icon: Icons.style_rounded,
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
  late final AnimationController _ambient;
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
  double _snakeSpeed = 1.55;

  // orbs
  final List<_Orb> _orbs = [];
  double _fxT = 0;

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

  // circuit
  final List<_CircuitNode> _nodes = [];
  double _circuitSpawn = 0;

  VaultGameDef get g => widget.game;
  List<Color> get colors => g.colors;
  bool get _isRainLevel => g.engine == VaultEngine.wordMatch && _level % 2 == 0;

  @override
  void initState() {
    super.initState();
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 16))..addListener(_frame);
    _ambient = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();
    unawaited(_load());
  }

  @override
  void dispose() {
    _spawnTimer?.cancel();
    _tick.dispose();
    _ambient.dispose();
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
      _fxT = (_fxT + 0.016) % 1000;
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
        case VaultEngine.pulseForge:
        case VaultEngine.laserLane:
        case VaultEngine.orbPop:
        case VaultEngine.helixHold:
        case VaultEngine.nodeDash:
        case VaultEngine.gravityHook:
          break;
      }
    });
  }

  void _stepSnake() {
    if (_snake.isEmpty) return;
    final head = _snake.first + _aim * (_snakeSpeed * 0.00305 * (1 + _level * 0.028));
    final nh = Offset(head.dx.clamp(0.02, 0.98), head.dy.clamp(0.02, 0.98));
    _snake.insert(0, nh);
    while (_snake.length > 10 + _progress * 2) {
      _snake.removeLast();
    }
    if (_food != null && (nh - _food!).distance < 0.045) {
      _food = Offset(0.1 + _rng.nextDouble() * 0.8, 0.1 + _rng.nextDouble() * 0.8);
      unawaited(_gainHit(coins: 3 + _level));
    }
    for (final r in _rivals) {
      final dir = (_snake.first - r.body.first);
      final n = dir.distance < 0.001 ? Offset(_rng.nextDouble() - 0.5, _rng.nextDouble() - 0.5) : dir / dir.distance;
      final h = r.body.first + n * (0.00185 + _level * 0.00014);
      r.body.insert(0, Offset(h.dx.clamp(0.02, 0.98), h.dy.clamp(0.02, 0.98)));
      while (r.body.length > r.len) {
        r.body.removeLast();
      }
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

  void _spawnCircuitNode() {
    final col = _rng.nextInt(3);
    final row = _rng.nextInt(3);
    if (_nodes.any((n) => n.col == col && n.row == row)) return;
    _nodes.add(_CircuitNode(col: col, row: row, life: 1.0));
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
      _nodes.clear();
      _circuitSpawn = 0;
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
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 10, 14, 4),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(18),
                  child: AnimatedBuilder(
                    animation: Listenable.merge([_tick, _ambient]),
                    builder: (_, __) => Stack(
                      fit: StackFit.expand,
                      children: [
                        CustomPaint(
                          painter: _ArenaHudPainter(
                            colors: colors,
                            pulse: Curves.easeInOut.transform(_ambient.value),
                            scan: _ambient.value,
                            orbit: (_ambient.value + _fxT * 0.02) % 1.0,
                          ),
                        ),
                        _field(),
                      ],
                    ),
                  ),
                ),
              ),
            ),
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
            painter: _SnakePainter(
              colors: colors,
              snake: _snake,
              rivals: _rivals,
              food: _food,
              pulse: Curves.easeInOut.transform(_ambient.value),
              t: _fxT,
            ),
            child: !_playing
                ? const Center(child: Text('STEER THE DATA WORM', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, letterSpacing: 1.2)))
                : const SizedBox.expand(),
          ),
        );
      case VaultEngine.pulseForge:
      case VaultEngine.laserLane:
      case VaultEngine.orbPop:
      case VaultEngine.helixHold:
      case VaultEngine.nodeDash:
      case VaultEngine.gravityHook:
        return const Center(child: Text('Open from arcade hub', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w800)));
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
  double spin = 0;
}

class _LaneObstacle {
  _LaneObstacle({required this.x, required this.y, required this.w});
  final double x;
  double y;
  final double w;
}

class _CircuitNode {
  _CircuitNode({required this.col, required this.row, required this.life});
  final int col;
  final int row;
  double life;
}

class _ArenaHudPainter extends CustomPainter {
  _ArenaHudPainter({required this.colors, required this.pulse, required this.scan, required this.orbit});
  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final bg = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [const Color(0xFF07101C), colors.first.withValues(alpha: 0.12), const Color(0xFF050A12)],
      ).createShader(Offset.zero & size);
    canvas.drawRect(Offset.zero & size, bg);

    final grid = Paint()..color = colors.first.withValues(alpha: 0.07 + pulse * 0.04)..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 28) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 28) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }

    final corner = Paint()
      ..color = colors.last.withValues(alpha: 0.55 + pulse * 0.35)
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke;
    const L = 18.0;
    canvas.drawLine(const Offset(10, 10), const Offset(10 + L, 10), corner);
    canvas.drawLine(const Offset(10, 10), const Offset(10, 10 + L), corner);
    canvas.drawLine(Offset(size.width - 10, 10), Offset(size.width - 10 - L, 10), corner);
    canvas.drawLine(Offset(size.width - 10, 10), Offset(size.width - 10, 10 + L), corner);
    canvas.drawLine(Offset(10, size.height - 10), Offset(10 + L, size.height - 10), corner);
    canvas.drawLine(Offset(10, size.height - 10), Offset(10, size.height - 10 - L), corner);
    canvas.drawLine(Offset(size.width - 10, size.height - 10), Offset(size.width - 10 - L, size.height - 10), corner);
    canvas.drawLine(Offset(size.width - 10, size.height - 10), Offset(size.width - 10, size.height - 10 - L), corner);

    final sy = size.height * scan;
    canvas.drawRect(
      Rect.fromLTWH(8, sy - 16, size.width - 16, 32),
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Colors.transparent, colors.first.withValues(alpha: 0.16), Colors.transparent],
        ).createShader(Rect.fromLTWH(0, sy - 16, size.width, 32)),
    );

    final cx = size.width - 28.0;
    final cy = 28.0;
    for (var i = 0; i < 6; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 3);
      canvas.drawCircle(
        Offset(cx + math.cos(a) * 10, cy + math.sin(a) * 10),
        1.6,
        Paint()..color = colors.last.withValues(alpha: 0.75),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _ArenaHudPainter old) => true;
}

class _SnakePainter extends CustomPainter {
  _SnakePainter({
    required this.colors,
    required this.snake,
    required this.rivals,
    required this.food,
    required this.pulse,
    required this.t,
  });
  final List<Color> colors;
  final List<Offset> snake;
  final List<_RivalSnake> rivals;
  final Offset? food;
  final double pulse;
  final double t;

  Path _hex(Offset c, double r) {
    final p = Path();
    for (var i = 0; i < 6; i++) {
      final a = -math.pi / 2 + i * math.pi / 3;
      final o = Offset(c.dx + math.cos(a) * r, c.dy + math.sin(a) * r);
      if (i == 0) {
        p.moveTo(o.dx, o.dy);
      } else {
        p.lineTo(o.dx, o.dy);
      }
    }
    p.close();
    return p;
  }

  void _drawWorm(Canvas canvas, Size size, List<Offset> body, Color a, Color b, {required bool hero}) {
    if (body.isEmpty) return;
    final pts = body.map((p) => Offset(p.dx * size.width, p.dy * size.height)).toList();

    // Link cables between segments
    for (var i = 0; i < pts.length - 1; i++) {
      final tt = i / math.max(1, pts.length - 1);
      canvas.drawLine(
        pts[i],
        pts[i + 1],
        Paint()
          ..color = Color.lerp(a, b, tt)!.withValues(alpha: 0.55)
          ..strokeWidth = hero ? 5.5 : 3.5
          ..strokeCap = StrokeCap.round,
      );
      canvas.drawLine(
        pts[i],
        pts[i + 1],
        Paint()
          ..color = Colors.white.withValues(alpha: 0.25)
          ..strokeWidth = hero ? 1.6 : 1.1
          ..strokeCap = StrokeCap.round,
      );
    }

    // Hex module body (tail → head so head paints last)
    for (var i = pts.length - 1; i >= 0; i--) {
      final tt = i / math.max(1, pts.length - 1);
      final r = (hero ? 11.0 : 8.0) - tt * (hero ? 3.5 : 2.5);
      final fill = Color.lerp(a, b, tt)!;
      final hex = _hex(pts[i], r);
      canvas.drawPath(hex, Paint()..color = fill.withValues(alpha: 0.92));
      canvas.drawPath(
        hex,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.6
          ..color = Colors.white.withValues(alpha: 0.55 + pulse * 0.2),
      );
      // inner chip
      canvas.drawCircle(pts[i], r * 0.28, Paint()..color = Colors.black.withValues(alpha: 0.35));
      canvas.drawCircle(pts[i], r * 0.14, Paint()..color = Colors.white.withValues(alpha: 0.55));
    }

    final head = pts.first;
    final dir = pts.length > 1 ? (pts.first - pts[1]) : const Offset(0, -1);
    final n = dir.distance < 0.001 ? const Offset(0, -1) : dir / dir.distance;
    final perp = Offset(-n.dy, n.dx);
    final headR = hero ? 13.0 : 9.5;
    final crown = _hex(head, headR);
    canvas.drawPath(crown, Paint()..color = a);
    canvas.drawPath(
      crown,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.2
        ..color = Colors.white.withValues(alpha: 0.85),
    );
    // sensor bar
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromCenter(center: head + n * (headR * 0.15), width: headR * 1.1, height: 4),
        const Radius.circular(2),
      ),
      Paint()..color = const Color(0xFF0B1220),
    );
    // LED eyes
    final eye = head + n * 2;
    canvas.drawCircle(eye + perp * 4.2, 2.4, Paint()..color = const Color(0xFF67E8F9));
    canvas.drawCircle(eye - perp * 4.2, 2.4, Paint()..color = const Color(0xFF67E8F9));
    canvas.drawCircle(eye + perp * 4.2, 1.0, Paint()..color = Colors.white);
    canvas.drawCircle(eye - perp * 4.2, 1.0, Paint()..color = Colors.white);
  }

  @override
  void paint(Canvas canvas, Size size) {
    _drawWorm(canvas, size, snake, colors.first, colors.last, hero: true);
    for (final r in rivals) {
      _drawWorm(canvas, size, r.body, const Color(0xFFF43F5E), const Color(0xFFFB923C), hero: false);
    }
    if (food != null) {
      final p = Offset(food!.dx * size.width, food!.dy * size.height);
      final beat = 1 + math.sin(t * 3.5) * 0.1 + pulse * 0.06;
      final node = RRect.fromRectAndRadius(
        Rect.fromCenter(center: p, width: 22 * beat, height: 22 * beat),
        const Radius.circular(5),
      );
      canvas.drawRRect(node, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.2));
      canvas.drawRRect(
        node,
        Paint()
          ..shader = const LinearGradient(colors: [Color(0xFFFFF7AE), Color(0xFFFBBF24), Color(0xFF22D3EE)])
              .createShader(Rect.fromCenter(center: p, width: 24, height: 24)),
      );
      canvas.drawRRect(
        node,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.5
          ..color = Colors.white.withValues(alpha: 0.75),
      );
      // tiny hash mark
      canvas.drawLine(p + const Offset(-4, 0), p + const Offset(4, 0), Paint()..color = Colors.black54..strokeWidth = 1.5);
      canvas.drawLine(p + const Offset(0, -4), p + const Offset(0, 4), Paint()..color = Colors.black54..strokeWidth = 1.5);
    }
  }

  @override
  bool shouldRepaint(covariant _SnakePainter old) => true;
}

class _OrbRushPainter extends CustomPainter {
  _OrbRushPainter({required this.colors, required this.orbs, required this.pulse, required this.t});
  final List<Color> colors;
  final List<_Orb> orbs;
  final double pulse;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    for (final o in orbs) {
      final p = Offset(o.x * size.width, o.y * size.height);
      final rr = o.r * size.shortestSide;
      canvas.drawCircle(p, rr * 1.45, Paint()..color = colors.first.withValues(alpha: 0.12 + pulse * 0.08));
      canvas.drawCircle(
        p,
        rr,
        Paint()
          ..shader = RadialGradient(colors: [Colors.white.withValues(alpha: 0.75), colors.first, colors.last.withValues(alpha: 0.55)])
              .createShader(Rect.fromCircle(center: p, radius: rr)),
      );
      canvas.drawCircle(
        p,
        rr + 3 + pulse * 2,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..color = Colors.white.withValues(alpha: 0.45),
      );
      for (var i = 0; i < 4; i++) {
        final a = o.spin + i * (math.pi / 2) + t;
        canvas.drawCircle(
          Offset(p.dx + math.cos(a) * (rr + 8), p.dy + math.sin(a) * (rr + 8)),
          2,
          Paint()..color = colors.last.withValues(alpha: 0.8),
        );
      }
    }
  }

  @override
  bool shouldRepaint(covariant _OrbRushPainter old) => true;
}

class _LanePainter extends CustomPainter {
  _LanePainter({required this.colors, required this.carX, required this.obstacles, required this.t, required this.pulse});
  final List<Color> colors;
  final double carX;
  final List<_LaneObstacle> obstacles;
  final double t;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final road = RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.08, 0, size.width * 0.84, size.height), const Radius.circular(18));
    canvas.drawRRect(road, Paint()..color = const Color(0xFF0A1524).withValues(alpha: 0.85));
    canvas.drawRRect(
      road,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = colors.first.withValues(alpha: 0.35 + pulse * 0.2),
    );

    for (var i = 0; i < 12; i++) {
      final y = ((i / 12) + (t * 0.04) % 1.0) % 1.0 * size.height;
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.485, y, 5, 26), const Radius.circular(3)),
        Paint()..color = Colors.white.withValues(alpha: 0.28 + pulse * 0.15),
      );
    }
    for (final o in obstacles) {
      final rect = RRect.fromRectAndRadius(
        Rect.fromCenter(center: Offset(o.x * size.width, o.y * size.height), width: o.w * size.width, height: 30),
        const Radius.circular(10),
      );
      canvas.drawRRect(rect, Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.88));
      canvas.drawRRect(
        rect,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.5
          ..color = const Color(0xFFFCA5A5),
      );
    }
    final car = RRect.fromRectAndRadius(
      Rect.fromCenter(center: Offset(carX * size.width, size.height * 0.82), width: 46, height: 68),
      const Radius.circular(14),
    );
    canvas.drawRRect(
      car,
      Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: colors).createShader(car.outerRect),
    );
    canvas.drawRRect(
      car,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = Colors.white.withValues(alpha: 0.65),
    );
    canvas.drawCircle(Offset(carX * size.width, size.height * 0.78), 5, Paint()..color = Colors.white.withValues(alpha: 0.85));
  }

  @override
  bool shouldRepaint(covariant _LanePainter old) => true;
}

class _EchoRingsPainter extends CustomPainter {
  _EchoRingsPainter({required this.colors, required this.pulse, required this.flash});
  final List<Color> colors;
  final double pulse;
  final int? flash;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        40.0 * i + pulse * 6,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2
          ..color = colors.first.withValues(alpha: 0.12 * i + (flash != null ? 0.08 : 0)),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _EchoRingsPainter old) => true;
}

class _GravityPainter extends CustomPainter {
  _GravityPainter({required this.colors, required this.probe, required this.well, required this.pulse, required this.t});
  final List<Color> colors;
  final Offset probe;
  final Offset well;
  final double pulse;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final w = Offset(well.dx * size.width, well.dy * size.height);
    final p = Offset(probe.dx * size.width, probe.dy * size.height);
    for (var i = 4; i >= 1; i--) {
      canvas.drawCircle(
        w,
        18.0 * i + pulse * 4 + math.sin(t * 3) * 2,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.4
          ..color = colors.first.withValues(alpha: 0.1 * i),
      );
    }
    canvas.drawCircle(
      w,
      18,
      Paint()
        ..shader = RadialGradient(colors: [const Color(0xFFFFF7AE), const Color(0xFFFBBF24), colors.first.withValues(alpha: 0.4)])
            .createShader(Rect.fromCircle(center: w, radius: 18)),
    );
    final dash = Paint()
      ..color = Colors.white.withValues(alpha: 0.28)
      ..strokeWidth = 1.5
      ..style = PaintingStyle.stroke;
    final path = Path()..moveTo(p.dx, p.dy)..lineTo(w.dx, w.dy);
    canvas.drawPath(path, dash);
    canvas.drawCircle(p, 16 + pulse * 2, Paint()..color = colors.last.withValues(alpha: 0.2));
    canvas.drawCircle(
      p,
      11,
      Paint()
        ..shader = RadialGradient(colors: [Colors.white, colors.last]).createShader(Rect.fromCircle(center: p, radius: 11)),
    );
    canvas.drawCircle(p, 3, Paint()..color = Colors.black87);
  }

  @override
  bool shouldRepaint(covariant _GravityPainter old) => true;
}

class _CircuitPainter extends CustomPainter {
  _CircuitPainter({required this.colors, required this.nodes, required this.pulse, required this.t});
  final List<Color> colors;
  final List<_CircuitNode> nodes;
  final double pulse;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final cellW = size.width / 3;
    final cellH = size.height / 3;
    final line = Paint()
      ..color = colors.first.withValues(alpha: 0.18 + pulse * 0.08)
      ..strokeWidth = 1.2;
    for (var i = 1; i < 3; i++) {
      canvas.drawLine(Offset(cellW * i, 12), Offset(cellW * i, size.height - 12), line);
      canvas.drawLine(Offset(12, cellH * i), Offset(size.width - 12, cellH * i), line);
    }
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        final center = Offset(cellW * (c + 0.5), cellH * (r + 0.5));
        canvas.drawCircle(center, 10, Paint()..color = Colors.white.withValues(alpha: 0.06));
        canvas.drawCircle(
          center,
          10,
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 1
            ..color = colors.last.withValues(alpha: 0.25),
        );
      }
    }
    for (final n in nodes) {
      final center = Offset(cellW * (n.col + 0.5), cellH * (n.row + 0.5));
      final beat = 0.75 + n.life * 0.45 + math.sin(t * 6 + n.col) * 0.05;
      canvas.drawCircle(center, 28 * beat, Paint()..color = colors.first.withValues(alpha: 0.18 * n.life));
      canvas.drawCircle(
        center,
        16 * beat,
        Paint()
          ..shader = RadialGradient(colors: [Colors.white, colors.first, colors.last])
              .createShader(Rect.fromCircle(center: center, radius: 18)),
      );
      canvas.drawCircle(
        center,
        18 * beat,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..color = Colors.white.withValues(alpha: 0.55 + pulse * 0.3),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _CircuitPainter old) => true;
}
