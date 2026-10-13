import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_host.dart';
import 'ngmy_vault_games.dart';

/// Vault Channel level games: every game has [kVaultLevels] levels that get harder,
/// a level map, and pays Vault coins for each level cleared (more the first time).

const kVaultLevels = 30;

/// 0 at level 1 → 1 at the last level.
double lvT(int level) => ((level - 1) / (kVaultLevels - 1)).clamp(0.0, 1.0);

/// A whole number that grows from [a] (level 1) to [b] (last level).
int lvI(int level, int a, int b) => (a + (b - a) * lvT(level)).round();

/// A number that grows from [a] (level 1) to [b] (last level).
double lvD(int level, double a, double b) => a + (b - a) * lvT(level);

class VaultLvDef {
  const VaultLvDef({
    required this.id,
    required this.title,
    required this.tagline,
    required this.emoji,
    required this.icon,
    required this.colors,
    required this.tag,
    required this.build,
    this.seconds,
  });

  final String id;
  final String title;
  final String tagline;
  final String emoji;
  final IconData icon;
  final List<Color> colors;

  /// Short category label (BUILD, PUZZLE, ARCADE…).
  final String tag;
  final Widget Function(NgmyArcadeArgs a, int level) build;

  /// Time limit for a level (null = no clock; the game ends itself).
  final int Function(int level)? seconds;

  VaultGameDef get asHubDef => VaultGameDef(
        id: id,
        title: title,
        shortTitle: title,
        tagline: tagline,
        techLabel: tag,
        engine: VaultEngine.wordMatch,
        colors: colors,
        icon: icon,
      );
}

/// Coins for clearing [level]: first time pays more.
int vaultLvCoins(int level, {required bool firstClear}) => firstClear ? 10 + level * 3 : 2 + level ~/ 2;

/// The level map for one game. Pops a [VaultGameResult] with the coins earned.
class NgmyVaultLevelMap extends StatefulWidget {
  const NgmyVaultLevelMap({super.key, required this.def});
  final VaultLvDef def;

  @override
  State<NgmyVaultLevelMap> createState() => _NgmyVaultLevelMapState();
}

class _NgmyVaultLevelMapState extends State<NgmyVaultLevelMap> {
  int _unlocked = 1;
  int _earned = 0;
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final all = await VaultProgressStore.loadAll();
    if (!mounted) return;
    setState(() {
      _unlocked = (all[widget.def.id]?.level ?? 1).clamp(1, kVaultLevels);
      _loaded = true;
    });
  }

  Future<void> _play(int level) async {
    HapticFeedback.selectionClick();
    var next = level;
    while (mounted) {
      final r = await Navigator.of(context).push<_LevelOutcome>(
        MaterialPageRoute(builder: (_) => _NgmyVaultLevelPlay(def: widget.def, level: next, firstClear: next >= _unlocked)),
      );
      if (r == null) break;
      if (r.won) {
        _earned += r.coins;
        if (next >= _unlocked) {
          _unlocked = math.min(kVaultLevels, next + 1);
        }
        if (mounted) setState(() {});
      }
      if (r.goNext && next < kVaultLevels) {
        next++;
        continue;
      }
      if (r.retry) continue;
      break;
    }
    await _load();
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.def;
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) Navigator.of(context).pop(VaultGameResult(coinsEarned: _earned, score: _unlocked));
      },
      child: Scaffold(
        backgroundColor: const Color(0xFF070B14),
        body: Stack(children: [
          Positioned.fill(
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [d.colors.first.withValues(alpha: 0.35), const Color(0xFF070B14), d.colors.last.withValues(alpha: 0.18)],
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(4, 4, 14, 0),
                child: Row(children: [
                  IconButton(
                    onPressed: () => Navigator.of(context).pop(VaultGameResult(coinsEarned: _earned, score: _unlocked)),
                    icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20),
                  ),
                  Text(d.emoji, style: const TextStyle(fontSize: 24)),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(d.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                  ),
                  if (_earned > 0)
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(color: const Color(0xFFFBBF24).withValues(alpha: 0.18), borderRadius: BorderRadius.circular(99)),
                      child: Text('+$_earned 🪙', style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w900)),
                    ),
                ]),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 6, 20, 4),
                child: Text(d.tagline, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontWeight: FontWeight.w600)),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 4, 20, 10),
                child: Row(children: [
                  Expanded(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(99),
                      child: LinearProgressIndicator(
                        value: (_unlocked - 1) / kVaultLevels,
                        minHeight: 8,
                        backgroundColor: Colors.white10,
                        valueColor: AlwaysStoppedAnimation(d.colors.first),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Text('${_unlocked - 1}/$kVaultLevels cleared', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
                ]),
              ),
              Expanded(
                child: !_loaded
                    ? const Center(child: CircularProgressIndicator())
                    : GridView.builder(
                        padding: const EdgeInsets.fromLTRB(18, 4, 18, 18),
                        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 5, mainAxisSpacing: 10, crossAxisSpacing: 10),
                        itemCount: kVaultLevels,
                        itemBuilder: (context, i) {
                          final level = i + 1;
                          final open = level <= _unlocked;
                          final done = level < _unlocked;
                          return GestureDetector(
                            onTap: open ? () => _play(level) : null,
                            child: AnimatedContainer(
                              duration: const Duration(milliseconds: 200),
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                gradient: open ? LinearGradient(colors: done ? d.colors : [Colors.white, d.colors.first]) : null,
                                color: open ? null : Colors.white.withValues(alpha: 0.06),
                                border: Border.all(color: open ? Colors.white.withValues(alpha: 0.6) : Colors.white12, width: level == _unlocked ? 3 : 1),
                                boxShadow: level == _unlocked ? [BoxShadow(color: d.colors.first.withValues(alpha: 0.6), blurRadius: 14)] : null,
                              ),
                              alignment: Alignment.center,
                              child: open
                                  ? Column(mainAxisSize: MainAxisSize.min, children: [
                                      Text('$level', style: TextStyle(color: done ? Colors.white : Colors.black87, fontWeight: FontWeight.w900, fontSize: 17)),
                                      if (done) const Text('★', style: TextStyle(color: Color(0xFFFDE68A), fontSize: 10, height: 1)),
                                    ])
                                  : const Icon(Icons.lock_rounded, color: Colors.white24, size: 18),
                            ),
                          );
                        },
                      ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(18, 0, 18, 16),
                child: SizedBox(
                  width: double.infinity,
                  child: FilledButton(
                    onPressed: _loaded ? () => _play(_unlocked) : null,
                    style: FilledButton.styleFrom(backgroundColor: d.colors.first, padding: const EdgeInsets.symmetric(vertical: 14)),
                    child: Text(
                      _unlocked > kVaultLevels - 1 && _unlocked == kVaultLevels ? 'PLAY LEVEL $kVaultLevels' : 'PLAY LEVEL $_unlocked',
                      style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, letterSpacing: 1),
                    ),
                  ),
                ),
              ),
            ]),
          ),
        ]),
      ),
    );
  }
}

class _LevelOutcome {
  const _LevelOutcome({required this.won, this.coins = 0, this.goNext = false, this.retry = false});
  final bool won;
  final int coins;
  final bool goNext;
  final bool retry;
}

class _NgmyVaultLevelPlay extends StatefulWidget {
  const _NgmyVaultLevelPlay({required this.def, required this.level, required this.firstClear});
  final VaultLvDef def;
  final int level;
  final bool firstClear;

  @override
  State<_NgmyVaultLevelPlay> createState() => _NgmyVaultLevelPlayState();
}

class _NgmyVaultLevelPlayState extends State<_NgmyVaultLevelPlay> {
  final _rng = math.Random();
  int _done = 0, _total = 1;
  int? _secondsLeft;
  Timer? _timer;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _secondsLeft = widget.def.seconds?.call(widget.level);
    if (_secondsLeft != null) {
      _timer = Timer.periodic(const Duration(seconds: 1), (_) {
        if (_over || !mounted) return;
        setState(() => _secondsLeft = _secondsLeft! - 1);
        if (_secondsLeft! <= 0) _finish(false, "Time's up");
      });
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  Future<void> _finish(bool won, String why) async {
    if (_over) return;
    _over = true;
    _timer?.cancel();
    final d = widget.def;
    var coins = 0;
    if (won) {
      HapticFeedback.heavyImpact();
      coins = vaultLvCoins(widget.level, firstClear: widget.firstClear);
      await VaultProgressStore.saveRun(gameId: d.id, level: widget.level + 1, score: widget.level, coinsEarned: coins);
    } else {
      await VaultProgressStore.saveRun(gameId: d.id, level: 1, score: 0, coinsEarned: 0);
    }
    if (!mounted) return;
    final choice = await showDialog<String>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => _ResultDialog(def: d, level: widget.level, won: won, coins: coins, why: why),
    );
    if (!mounted) return;
    Navigator.of(context).pop(_LevelOutcome(won: won, coins: coins, goNext: choice == 'next', retry: choice == 'retry'));
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.def;
    final args = NgmyArcadeArgs(
      rng: _rng,
      onProgress: (done, total) {
        if (_over || !mounted) return;
        setState(() {
          _done = done.clamp(0, math.max(1, total));
          _total = math.max(1, total);
        });
      },
      onComplete: () {
        if (!mounted) return;
        setState(() => _done = _total);
        unawaited(_finish(true, ''));
      },
      onKnockout: (why) => unawaited(_finish(false, why)),
    );
    final secs = _secondsLeft;
    return Scaffold(
      backgroundColor: const Color(0xFF070B14),
      body: SafeArea(
        child: Column(children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(4, 4, 12, 2),
            child: Row(children: [
              IconButton(
                onPressed: () => Navigator.of(context).pop(const _LevelOutcome(won: false)),
                icon: const Icon(Icons.close_rounded, color: Colors.white70),
              ),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(d.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                  Text('LEVEL ${widget.level} of $kVaultLevels · win ${vaultLvCoins(widget.level, firstClear: widget.firstClear)} 🪙',
                      style: TextStyle(color: d.colors.first, fontWeight: FontWeight.w800, fontSize: 11.5)),
                ]),
              ),
              if (secs != null)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 6),
                  decoration: BoxDecoration(
                    color: secs <= 10 ? const Color(0xFFEF4444) : Colors.white.withValues(alpha: 0.1),
                    borderRadius: BorderRadius.circular(99),
                  ),
                  child: Text('⏱ ${secs ~/ 60}:${(secs % 60).toString().padLeft(2, '0')}',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                ),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 2, 16, 8),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(99),
              child: LinearProgressIndicator(
                value: _done / _total,
                minHeight: 7,
                backgroundColor: Colors.white10,
                valueColor: AlwaysStoppedAnimation(d.colors.first),
              ),
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(8, 0, 8, 8),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: IgnorePointer(ignoring: _over, child: d.build(args, widget.level)),
              ),
            ),
          ),
        ]),
      ),
    );
  }
}

class _ResultDialog extends StatelessWidget {
  const _ResultDialog({required this.def, required this.level, required this.won, required this.coins, required this.why});
  final VaultLvDef def;
  final int level;
  final bool won;
  final int coins;
  final String why;

  @override
  Widget build(BuildContext context) {
    final last = level >= kVaultLevels;
    return Dialog(
      backgroundColor: const Color(0xFF0F172A),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24), side: BorderSide(color: def.colors.first.withValues(alpha: 0.6))),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(22, 24, 22, 18),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Text(won ? (last ? '🏆' : '⭐') : '💥', style: const TextStyle(fontSize: 54)),
          const SizedBox(height: 8),
          Text(won ? (last ? 'ALL $kVaultLevels LEVELS CLEARED!' : 'LEVEL $level CLEARED!') : 'LEVEL $level FAILED',
              textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
          const SizedBox(height: 6),
          Text(won ? '+$coins coins added to your Vault' : (why.isEmpty ? 'Give it another go!' : '$why — give it another go!'),
              textAlign: TextAlign.center, style: TextStyle(color: won ? const Color(0xFFFDE68A) : Colors.white70, fontWeight: FontWeight.w800)),
          const SizedBox(height: 18),
          Row(children: [
            Expanded(
              child: OutlinedButton(
                onPressed: () => Navigator.pop(context, 'map'),
                style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white38)),
                child: const Text('Levels'),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: FilledButton(
                onPressed: () => Navigator.pop(context, won && !last ? 'next' : 'retry'),
                style: FilledButton.styleFrom(backgroundColor: def.colors.first),
                child: Text(won && !last ? 'Next level' : (won ? 'Play again' : 'Try again'),
                    style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900)),
              ),
            ),
          ]),
        ]),
      ),
    );
  }
}
