import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_swahili_curriculum.dart';

// ── Local economy store — fully offline, SharedPreferences only ────────────

class VaultSchoolStore {
  static const _kCoins = 'ngmy_school_coins_v1';
  static const _kBest = 'ngmy_school_best_v1';
  static const _kOwned = 'ngmy_school_owned_v1';

  static Future<int> coins() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(_kCoins) ?? 0;
  }

  static Future<int> addCoins(int amount) async {
    final prefs = await SharedPreferences.getInstance();
    final next = (prefs.getInt(_kCoins) ?? 0) + amount;
    await prefs.setInt(_kCoins, next);
    return next;
  }

  static Future<Map<String, int>> bestScores() async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kBest);
    if (raw == null) return {};
    try {
      final decoded = jsonDecode(raw);
      if (decoded is Map) return decoded.map((k, v) => MapEntry('$k', (v as num).toInt()));
    } catch (_) {}
    return {};
  }

  static Future<void> recordBest(String gameId, int score) async {
    final all = await bestScores();
    if ((all[gameId] ?? 0) >= score) return;
    all[gameId] = score;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kBest, jsonEncode(all));
  }

  static Future<Set<String>> owned() async {
    final prefs = await SharedPreferences.getInstance();
    return (prefs.getStringList(_kOwned) ?? const []).toSet();
  }

  /// Returns false if not enough coins.
  static Future<bool> buy(String upgradeId, int cost) async {
    final have = await coins();
    if (have < cost) return false;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_kCoins, have - cost);
    final own = await owned();
    own.add(upgradeId);
    await prefs.setStringList(_kOwned, own.toList());
    return true;
  }
}

class VaultUpgrade {
  const VaultUpgrade({required this.id, required this.title, required this.blurb, required this.icon, required this.cost, required this.colors});
  final String id;
  final String title;
  final String blurb;
  final IconData icon;
  final int cost;
  final List<Color> colors;
}

const kVaultSchoolUpgrades = <VaultUpgrade>[
  VaultUpgrade(id: 'extra_life', title: 'Extra Life', blurb: '+1 starting life in every Game School game.', icon: Icons.favorite_rounded, cost: 60, colors: [Color(0xFFF472B6), Color(0xFFEF4444)]),
  VaultUpgrade(id: 'slow_start', title: 'Slow-Mo Start', blurb: 'First 5 seconds run at half speed to warm up.', icon: Icons.hourglass_bottom_rounded, cost: 45, colors: [Color(0xFF60A5FA), Color(0xFF22D3EE)]),
  VaultUpgrade(id: 'double_coins', title: 'Double Coins', blurb: 'Permanently earn 2x coins from every round.', icon: Icons.diamond_rounded, cost: 120, colors: [Color(0xFFFBBF24), Color(0xFFF97316)]),
];

// ── Shared word pool (pulled straight from the English-learning curriculum) ─

class _SchoolWord {
  const _SchoolWord(this.sw, this.en);
  final String sw;
  final String en;
}

List<_SchoolWord> _wordPool() {
  final out = <_SchoolWord>[];
  for (final level in kSwahiliLevels) {
    for (final day in level.days) {
      for (final w in day.words) {
        final en = w.english.trim();
        final sw = w.swahili.trim();
        if (en.isEmpty || sw.isEmpty || en.length > 14) continue;
        out.add(_SchoolWord(sw, en));
      }
    }
  }
  out.shuffle();
  return out;
}

// ── Hub screen ───────────────────────────────────────────────────────────────

class NgmyVaultGameSchoolScreen extends StatefulWidget {
  const NgmyVaultGameSchoolScreen({super.key});

  @override
  State<NgmyVaultGameSchoolScreen> createState() => _NgmyVaultGameSchoolScreenState();
}

class _NgmyVaultGameSchoolScreenState extends State<NgmyVaultGameSchoolScreen> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  int _coins = 0;
  Map<String, int> _best = {};
  Set<String> _owned = {};
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
    unawaited(_load());
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final c = await VaultSchoolStore.coins();
    final b = await VaultSchoolStore.bestScores();
    final o = await VaultSchoolStore.owned();
    if (!mounted) return;
    setState(() {
      _coins = c;
      _best = b;
      _owned = o;
      _loading = false;
    });
  }

  Future<void> _openGame(Widget Function() builder) async {
    HapticFeedback.selectionClick();
    await Navigator.of(context).push(
      PageRouteBuilder<void>(
        opaque: true,
        transitionDuration: const Duration(milliseconds: 360),
        pageBuilder: (context, anim, secondary) => FadeTransition(
          opacity: CurvedAnimation(parent: anim, curve: Curves.easeOutCubic),
          child: builder(),
        ),
      ),
    );
    await _load();
  }

  Future<void> _buy(VaultUpgrade u) async {
    if (_owned.contains(u.id)) return;
    final ok = await VaultSchoolStore.buy(u.id, u.cost);
    if (!mounted) return;
    if (!ok) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Need ${u.cost - _coins} more coins'), backgroundColor: const Color(0xFF4B1D1D)),
      );
      return;
    }
    HapticFeedback.mediumImpact();
    await _load();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF07060F),
      body: AnimatedBuilder(
        animation: _pulse,
        builder: (context, _) {
          final t = Curves.easeInOut.transform(_pulse.value);
          if (_loading) return const Center(child: CircularProgressIndicator(color: Color(0xFFFBBF24)));
          return SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _header(t),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(16, 6, 16, 24),
                    children: [
                      _gameCard(
                        t,
                        id: 'speed_typer',
                        title: 'Speed Typer',
                        tagline: 'Type the English word before time runs out.',
                        icon: Icons.keyboard_alt_rounded,
                        colors: const [Color(0xFF34D399), Color(0xFF06B6D4)],
                        onTap: () => _openGame(() => const _SpeedTyperGame()),
                      ),
                      const SizedBox(height: 14),
                      _gameCard(
                        t,
                        id: 'word_match',
                        title: 'Word Match Rush',
                        tagline: 'Pick the right English meaning — fast.',
                        icon: Icons.psychology_alt_rounded,
                        colors: const [Color(0xFFA78BFA), Color(0xFFEC4899)],
                        onTap: () => _openGame(() => const _WordMatchGame()),
                      ),
                      const SizedBox(height: 14),
                      _gameCard(
                        t,
                        id: 'letter_rain',
                        title: 'Letter Rain',
                        tagline: 'Tap falling letters before they hit the ground.',
                        icon: Icons.grain_rounded,
                        colors: const [Color(0xFFFBBF24), Color(0xFFF97316)],
                        onTap: () => _openGame(() => const _LetterRainGame()),
                      ),
                      const SizedBox(height: 26),
                      Row(
                        children: [
                          const Text('UPGRADES', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 13)),
                          const Spacer(),
                          Text('Spend coins earned in Game School', style: TextStyle(color: Colors.white38, fontSize: 11, fontWeight: FontWeight.w600)),
                        ],
                      ),
                      const SizedBox(height: 10),
                      ...kVaultSchoolUpgrades.map((u) => Padding(
                            padding: const EdgeInsets.only(bottom: 10),
                            child: _upgradeTile(u, owned: _owned.contains(u.id)),
                          )),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _header(double t) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(6, 6, 16, 10),
      child: Row(
        children: [
          IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
          Expanded(
            child: ShaderMask(
              shaderCallback: (bounds) => LinearGradient(
                colors: [Color.lerp(const Color(0xFFFBBF24), const Color(0xFFF472B6), t)!, const Color(0xFF60A5FA)],
              ).createShader(bounds),
              child: const Text('GAME SCHOOL', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 2, fontSize: 16)),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [const Color(0xFFFBBF24).withValues(alpha: 0.9), const Color(0xFFF97316).withValues(alpha: 0.9)]),
              borderRadius: BorderRadius.circular(999),
              boxShadow: [BoxShadow(color: const Color(0xFFFBBF24).withValues(alpha: 0.35 * t + 0.15), blurRadius: 14)],
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.monetization_on_rounded, size: 15, color: Colors.white),
                const SizedBox(width: 4),
                Text('$_coins', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _gameCard(
    double t, {
    required String id,
    required String title,
    required String tagline,
    required IconData icon,
    required List<Color> colors,
    required VoidCallback onTap,
  }) {
    final best = _best[id] ?? 0;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(22),
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [colors.first.withValues(alpha: 0.28), const Color(0xFF0C0A18), colors.last.withValues(alpha: 0.22)],
            ),
            border: Border.all(color: colors.first.withValues(alpha: 0.4 + t * 0.25), width: 1.3),
            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.16 * t + 0.06), blurRadius: 24, offset: const Offset(0, 10))],
          ),
          child: Row(
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(colors: colors),
                  boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.5), blurRadius: 16)],
                ),
                child: Icon(icon, color: Colors.white, size: 26),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                    const SizedBox(height: 3),
                    Text(tagline, style: const TextStyle(color: Colors.white54, fontSize: 12, height: 1.3)),
                    if (best > 0) ...[
                      const SizedBox(height: 6),
                      Text('Best: $best', style: TextStyle(color: colors.first, fontWeight: FontWeight.w800, fontSize: 11)),
                    ],
                  ],
                ),
              ),
              Icon(Icons.play_circle_fill_rounded, color: colors.first, size: 30),
            ],
          ),
        ),
      ),
    );
  }

  Widget _upgradeTile(VaultUpgrade u, {required bool owned}) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: Colors.white.withValues(alpha: 0.04),
        border: Border.all(color: owned ? u.colors.first.withValues(alpha: 0.6) : Colors.white12),
      ),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: u.colors)),
            child: Icon(u.icon, color: Colors.white, size: 19),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(u.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                Text(u.blurb, style: const TextStyle(color: Colors.white54, fontSize: 11, height: 1.3)),
              ],
            ),
          ),
          const SizedBox(width: 8),
          if (owned)
            const Icon(Icons.check_circle_rounded, color: Color(0xFF34D399), size: 22)
          else
            FilledButton(
              onPressed: () => _buy(u),
              style: FilledButton.styleFrom(
                backgroundColor: u.colors.first,
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                minimumSize: Size.zero,
              ),
              child: Text('${u.cost}', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 12)),
            ),
        ],
      ),
    );
  }
}

// ── Shared game-over overlay ─────────────────────────────────────────────────

class _ResultOverlay extends StatelessWidget {
  const _ResultOverlay({required this.score, required this.coins, required this.colors, required this.onAgain, required this.onExit});
  final int score;
  final int coins;
  final List<Color> colors;
  final VoidCallback onAgain;
  final VoidCallback onExit;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black.withValues(alpha: 0.72),
      alignment: Alignment.center,
      child: TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: const Duration(milliseconds: 460),
        curve: Curves.elasticOut,
        builder: (context, t, child) => Transform.scale(scale: t.clamp(0, 1.2), child: Opacity(opacity: t.clamp(0, 1), child: child)),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 36),
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(colors: [colors.first.withValues(alpha: 0.25), const Color(0xFF0C0A18)]),
            border: Border.all(color: colors.first.withValues(alpha: 0.6)),
            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 30)],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.emoji_events_rounded, color: colors.first, size: 46),
              const SizedBox(height: 10),
              const Text('ROUND OVER', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.4)),
              const SizedBox(height: 14),
              Text('$score', style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 40)),
              const Text('SCORE', style: TextStyle(color: Colors.white38, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2)),
              const SizedBox(height: 10),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.monetization_on_rounded, color: Color(0xFFFBBF24), size: 18),
                  const SizedBox(width: 4),
                  Text('+$coins coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 15)),
                ],
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: onExit,
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                      child: const Text('Exit'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: onAgain,
                      style: FilledButton.styleFrom(backgroundColor: colors.first),
                      child: const Text('Play Again', style: TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

Widget _gameChrome({required BuildContext context, required String title, required List<Color> colors, required int score, required int lives, required Duration timeLeft, required Widget child}) {
  return Scaffold(
    backgroundColor: const Color(0xFF07060F),
    body: SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(6, 6, 16, 6),
            child: Row(
              children: [
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                Expanded(
                  child: Text(title, textAlign: TextAlign.center, style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 14)),
                ),
                SizedBox(
                  width: 44,
                  child: Row(
                    children: List.generate(lives.clamp(0, 5), (i) => const Padding(padding: EdgeInsets.only(left: 2), child: Icon(Icons.favorite_rounded, color: Color(0xFFF472B6), size: 14))),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('SCORE  $score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                Text('${timeLeft.inSeconds}s', style: TextStyle(color: timeLeft.inSeconds <= 5 ? const Color(0xFFEF4444) : Colors.white70, fontWeight: FontWeight.w900, fontSize: 15)),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Expanded(child: child),
        ],
      ),
    ),
  );
}

// ── Game 1: Speed Typer ──────────────────────────────────────────────────────

class _SpeedTyperGame extends StatefulWidget {
  const _SpeedTyperGame();
  @override
  State<_SpeedTyperGame> createState() => _SpeedTyperGameState();
}

class _SpeedTyperGameState extends State<_SpeedTyperGame> with SingleTickerProviderStateMixin {
  static const _colors = [Color(0xFF34D399), Color(0xFF06B6D4)];
  final _controller = TextEditingController();
  final _focus = FocusNode();
  late final List<_SchoolWord> _pool;
  late final AnimationController _flash;
  int _idx = 0;
  int _score = 0;
  int _combo = 0;
  int _lives = 3;
  Duration _left = const Duration(seconds: 40);
  Timer? _timer;
  bool _over = false;
  Color _flashColor = Colors.transparent;

  @override
  void initState() {
    super.initState();
    _pool = _wordPool();
    _flash = AnimationController(vsync: this, duration: const Duration(milliseconds: 260));
    unawaited(_applyUpgrades());
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  Future<void> _applyUpgrades() async {
    final owned = await VaultSchoolStore.owned();
    if (owned.contains('extra_life') && mounted) setState(() => _lives += 1);
  }

  @override
  void dispose() {
    _timer?.cancel();
    _controller.dispose();
    _focus.dispose();
    _flash.dispose();
    super.dispose();
  }

  _SchoolWord get _current => _pool[_idx % _pool.length];

  void _submit(String value) {
    if (_over) return;
    final target = _current.en.toLowerCase().trim();
    final got = value.toLowerCase().trim();
    if (got.isEmpty) return;
    if (got == target) {
      _combo++;
      final gained = 10 + _combo * 2;
      setState(() {
        _score += gained;
        _idx++;
        _flashColor = const Color(0xFF34D399);
      });
      HapticFeedback.lightImpact();
    } else {
      _combo = 0;
      setState(() => _flashColor = const Color(0xFFEF4444));
      HapticFeedback.heavyImpact();
      final lives = _lives - 1;
      setState(() => _lives = lives);
      if (lives <= 0) {
        _finish();
        return;
      }
    }
    _controller.clear();
    _flash.forward(from: 0);
  }

  Future<void> _finish() async {
    if (_over) return;
    _timer?.cancel();
    setState(() => _over = true);
    final owned = await VaultSchoolStore.owned();
    final mult = owned.contains('double_coins') ? 2 : 1;
    final coins = (_score ~/ 8) * mult;
    await VaultSchoolStore.recordBest('speed_typer', _score);
    await VaultSchoolStore.addCoins(coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _idx = 0;
      _score = 0;
      _combo = 0;
      _lives = 3;
      _left = const Duration(seconds: 40);
      _over = false;
    });
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _gameChrome(
          context: context,
          title: 'SPEED TYPER',
          colors: _colors,
          score: _score,
          lives: _lives,
          timeLeft: _left,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 22),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (_combo >= 3)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Text('COMBO x$_combo', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, letterSpacing: 1.2)),
                  ),
                AnimatedBuilder(
                  animation: _flash,
                  builder: (context, _) {
                    final glow = Color.lerp(Colors.transparent, _flashColor, (1 - _flash.value))!;
                    return Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(vertical: 26),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: Colors.white.withValues(alpha: 0.05),
                        border: Border.all(color: glow.withValues(alpha: 0.8), width: 2),
                      ),
                      child: Column(
                        children: [
                          Text(_current.sw, style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w700, fontSize: 14)),
                          const SizedBox(height: 8),
                          Text('Type in English', style: TextStyle(color: _colors.first, fontWeight: FontWeight.w900, fontSize: 22)),
                        ],
                      ),
                    );
                  },
                ),
                const SizedBox(height: 22),
                TextField(
                  controller: _controller,
                  focusNode: _focus,
                  autofocus: true,
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                  onSubmitted: _submit,
                  onChanged: (v) {
                    if (v.toLowerCase().trim() == _current.en.toLowerCase().trim()) _submit(v);
                  },
                  decoration: InputDecoration(
                    filled: true,
                    fillColor: Colors.white.withValues(alpha: 0.06),
                    hintText: 'type here…',
                    hintStyle: const TextStyle(color: Colors.white24),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                  ),
                ),
              ],
            ),
          ),
        ),
        if (_over)
          _ResultOverlay(
            score: _score,
            coins: (_score ~/ 8),
            colors: _colors,
            onAgain: _restart,
            onExit: () => Navigator.pop(context),
          ),
      ],
    );
  }
}

// ── Game 2: Word Match Rush ──────────────────────────────────────────────────

class _WordMatchGame extends StatefulWidget {
  const _WordMatchGame();
  @override
  State<_WordMatchGame> createState() => _WordMatchGameState();
}

class _WordMatchGameState extends State<_WordMatchGame> {
  static const _colors = [Color(0xFFA78BFA), Color(0xFFEC4899)];
  late final List<_SchoolWord> _pool;
  int _idx = 0;
  int _score = 0;
  int _combo = 0;
  int _lives = 3;
  Duration _left = const Duration(seconds: 40);
  Timer? _timer;
  bool _over = false;
  List<String> _options = [];
  int? _picked;
  int? _correctIdx;

  @override
  void initState() {
    super.initState();
    _pool = _wordPool();
    _rollOptions();
    unawaited(_applyUpgrades());
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  Future<void> _applyUpgrades() async {
    final owned = await VaultSchoolStore.owned();
    if (owned.contains('extra_life') && mounted) setState(() => _lives += 1);
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  _SchoolWord get _current => _pool[_idx % _pool.length];

  void _rollOptions() {
    final rnd = math.Random();
    final correct = _current.en;
    final distractors = <String>{};
    while (distractors.length < 3) {
      final w = _pool[rnd.nextInt(_pool.length)].en;
      if (w != correct) distractors.add(w);
    }
    final opts = [correct, ...distractors]..shuffle();
    setState(() {
      _options = opts;
      _picked = null;
      _correctIdx = opts.indexOf(correct);
    });
  }

  Future<void> _pick(int i) async {
    if (_over || _picked != null) return;
    setState(() => _picked = i);
    final right = i == _correctIdx;
    if (right) {
      _combo++;
      setState(() => _score += 10 + _combo * 2);
      HapticFeedback.lightImpact();
    } else {
      _combo = 0;
      HapticFeedback.heavyImpact();
      final lives = _lives - 1;
      setState(() => _lives = lives);
    }
    await Future<void>.delayed(const Duration(milliseconds: 480));
    if (!mounted || _over) return;
    if (_lives <= 0) {
      _finish();
      return;
    }
    setState(() => _idx++);
    _rollOptions();
  }

  Future<void> _finish() async {
    if (_over) return;
    _timer?.cancel();
    setState(() => _over = true);
    final owned = await VaultSchoolStore.owned();
    final mult = owned.contains('double_coins') ? 2 : 1;
    final coins = (_score ~/ 8) * mult;
    await VaultSchoolStore.recordBest('word_match', _score);
    await VaultSchoolStore.addCoins(coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _idx = 0;
      _score = 0;
      _combo = 0;
      _lives = 3;
      _left = const Duration(seconds: 40);
      _over = false;
    });
    _rollOptions();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _gameChrome(
          context: context,
          title: 'WORD MATCH RUSH',
          colors: _colors,
          score: _score,
          lives: _lives,
          timeLeft: _left,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 22),
            child: Column(
              children: [
                if (_combo >= 3)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Text('COMBO x$_combo', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, letterSpacing: 1.2)),
                  ),
                TweenAnimationBuilder<double>(
                  key: ValueKey(_idx),
                  tween: Tween(begin: 0, end: 1),
                  duration: const Duration(milliseconds: 340),
                  curve: Curves.easeOutBack,
                  builder: (context, t, child) => Transform.scale(scale: 0.85 + t * 0.15, child: Opacity(opacity: t.clamp(0, 1), child: child)),
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(vertical: 28),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      gradient: LinearGradient(colors: [_colors.first.withValues(alpha: 0.22), _colors.last.withValues(alpha: 0.14)]),
                      border: Border.all(color: _colors.first.withValues(alpha: 0.5)),
                    ),
                    child: Text(_current.sw, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26)),
                  ),
                ),
                const SizedBox(height: 22),
                ..._options.asMap().entries.map((e) => Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: _optionButton(e.key, e.value),
                    )),
              ],
            ),
          ),
        ),
        if (_over)
          _ResultOverlay(
            score: _score,
            coins: (_score ~/ 8),
            colors: _colors,
            onAgain: _restart,
            onExit: () => Navigator.pop(context),
          ),
      ],
    );
  }

  Widget _optionButton(int i, String label) {
    Color bg = Colors.white.withValues(alpha: 0.06);
    Color border = Colors.white24;
    if (_picked != null) {
      if (i == _correctIdx) {
        bg = const Color(0xFF34D399).withValues(alpha: 0.25);
        border = const Color(0xFF34D399);
      } else if (i == _picked) {
        bg = const Color(0xFFEF4444).withValues(alpha: 0.25);
        border = const Color(0xFFEF4444);
      }
    }
    return AnimatedContainer(
      duration: const Duration(milliseconds: 220),
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), color: bg, border: Border.all(color: border)),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: () => _pick(i),
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 16),
            child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
          ),
        ),
      ),
    );
  }
}

// ── Game 3: Letter Rain ──────────────────────────────────────────────────────

class _FallingLetter {
  _FallingLetter({required this.char, required this.x});
  final String char;
  final double x;
  double y = -0.1;
}

class _LetterRainGame extends StatefulWidget {
  const _LetterRainGame();
  @override
  State<_LetterRainGame> createState() => _LetterRainGameState();
}

class _LetterRainGameState extends State<_LetterRainGame> {
  static const _colors = [Color(0xFFFBBF24), Color(0xFFF97316)];
  static const _letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  final _rnd = math.Random();
  final List<_FallingLetter> _drops = [];
  Timer? _spawnTimer;
  Timer? _tickTimer;
  int _score = 0;
  int _lives = 3;
  double _speed = 0.006;
  Duration _left = const Duration(seconds: 35);
  Timer? _clock;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    unawaited(_applyUpgrades());
    _spawnTimer = Timer.periodic(const Duration(milliseconds: 900), (_) {
      if (_over || _drops.length > 6) return;
      setState(() => _drops.add(_FallingLetter(char: _letters[_rnd.nextInt(_letters.length)], x: 0.08 + _rnd.nextDouble() * 0.84)));
    });
    _tickTimer = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        for (final d in _drops) {
          d.y += _speed;
        }
        final missed = _drops.where((d) => d.y >= 1.0).length;
        if (missed > 0) {
          _drops.removeWhere((d) => d.y >= 1.0);
          _lives -= missed;
          HapticFeedback.heavyImpact();
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.014, _speed + 0.00012);
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  Future<void> _applyUpgrades() async {
    final owned = await VaultSchoolStore.owned();
    if (owned.contains('extra_life') && mounted) setState(() => _lives += 1);
    if (owned.contains('slow_start') && mounted) {
      setState(() => _speed = 0.003);
      Timer(const Duration(seconds: 5), () {
        if (mounted && !_over) setState(() => _speed = 0.006);
      });
    }
  }

  @override
  void dispose() {
    _spawnTimer?.cancel();
    _tickTimer?.cancel();
    _clock?.cancel();
    super.dispose();
  }

  void _handleKey(String char) {
    if (_over || _drops.isEmpty) return;
    _FallingLetter? lowest;
    for (final d in _drops) {
      if (d.char == char && (lowest == null || d.y > lowest.y)) lowest = d;
    }
    if (lowest == null) return;
    setState(() {
      _drops.remove(lowest);
      _score += 8;
    });
    HapticFeedback.lightImpact();
  }

  Future<void> _finish() async {
    if (_over) return;
    _spawnTimer?.cancel();
    _tickTimer?.cancel();
    _clock?.cancel();
    setState(() => _over = true);
    final owned = await VaultSchoolStore.owned();
    final mult = owned.contains('double_coins') ? 2 : 1;
    final coins = (_score ~/ 8) * mult;
    await VaultSchoolStore.recordBest('letter_rain', _score);
    await VaultSchoolStore.addCoins(coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _drops.clear();
      _score = 0;
      _lives = 3;
      _speed = 0.006;
      _left = const Duration(seconds: 35);
      _over = false;
    });
    _spawnTimer = Timer.periodic(const Duration(milliseconds: 900), (_) {
      if (_over || _drops.length > 6) return;
      setState(() => _drops.add(_FallingLetter(char: _letters[_rnd.nextInt(_letters.length)], x: 0.08 + _rnd.nextDouble() * 0.84)));
    });
    _tickTimer = Timer.periodic(const Duration(milliseconds: 32), (_) {
      if (_over) return;
      setState(() {
        for (final d in _drops) {
          d.y += _speed;
        }
        final missed = _drops.where((d) => d.y >= 1.0).length;
        if (missed > 0) {
          _drops.removeWhere((d) => d.y >= 1.0);
          _lives -= missed;
        }
      });
      if (_lives <= 0) _finish();
    });
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() {
        _left -= const Duration(seconds: 1);
        _speed = math.min(0.014, _speed + 0.00012);
      });
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _gameChrome(
          context: context,
          title: 'LETTER RAIN',
          colors: _colors,
          score: _score,
          lives: _lives,
          timeLeft: _left,
          child: KeyboardListener(
            focusNode: FocusNode()..requestFocus(),
            autofocus: true,
            onKeyEvent: (event) {
              if (event is! KeyDownEvent) return;
              final label = event.logicalKey.keyLabel;
              if (label.length == 1) _handleKey(label.toUpperCase());
            },
            child: LayoutBuilder(
              builder: (context, c) {
                return Stack(
                  children: [
                    for (final d in _drops)
                      Positioned(
                        left: d.x * c.maxWidth - 16,
                        top: d.y * c.maxHeight,
                        child: GestureDetector(
                          onTap: () => _handleKey(d.char),
                          child: Container(
                            width: 34,
                            height: 34,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(colors: _colors),
                              boxShadow: [BoxShadow(color: _colors.first.withValues(alpha: 0.5), blurRadius: 10)],
                            ),
                            child: Text(d.char, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                          ),
                        ),
                      ),
                    Positioned(
                      bottom: 8,
                      left: 0,
                      right: 0,
                      child: Text('Tap the letters or type on a keyboard', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 11, fontWeight: FontWeight.w600)),
                    ),
                  ],
                );
              },
            ),
          ),
        ),
        if (_over)
          _ResultOverlay(
            score: _score,
            coins: (_score ~/ 8),
            colors: _colors,
            onAgain: _restart,
            onExit: () => Navigator.pop(context),
          ),
      ],
    );
  }
}
