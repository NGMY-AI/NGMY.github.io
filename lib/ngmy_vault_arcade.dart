import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_game_school.dart';
import 'ngmy_vault_games.dart';
import 'ngmy_vault_sync.dart';

/// Vault Channel arcade — offline tech games with local level progress.
class NgmyVaultArcadeScreen extends StatefulWidget {
  const NgmyVaultArcadeScreen({super.key});

  @override
  State<NgmyVaultArcadeScreen> createState() => _NgmyVaultArcadeScreenState();
}

class _NgmyVaultArcadeScreenState extends State<NgmyVaultArcadeScreen> with TickerProviderStateMixin {
  static const _bootColors = [Color(0xFFFBBF24), Color(0xFFF97316), Color(0xFFEF4444)];

  late final AnimationController _boot;
  late final AnimationController _spin;
  late final AnimationController _wave;
  late final AnimationController _glow;
  late final PageController _adPage;
  Timer? _adTimer;
  bool _ready = false;
  int _adIndex = 0;
  Map<String, VaultGameProgress> _progress = {};

  int _walletCoins = 0;
  int _displayCoins = 0;
  final List<_FlyingCoin> _flying = [];
  final GlobalKey _coinKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    _boot = AnimationController(vsync: this, duration: const Duration(milliseconds: 850))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed && mounted) setState(() => _ready = true);
      })
      ..forward();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat();
    _wave = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat();
    _glow = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _adPage = PageController();
    _adTimer = Timer.periodic(const Duration(seconds: 4), (_) {
      if (!_ready || !mounted || !_adPage.hasClients) return;
      final next = (_adIndex + 1) % kVaultGames.length;
      _adPage.animateToPage(next, duration: const Duration(milliseconds: 520), curve: Curves.easeInOutCubic);
    });
    unawaited(_loadProgress());
  }

  @override
  void dispose() {
    _adTimer?.cancel();
    _boot.dispose();
    _spin.dispose();
    _wave.dispose();
    _glow.dispose();
    _adPage.dispose();
    super.dispose();
  }

  Future<void> _loadProgress() async {
    final map = await VaultProgressStore.loadAll();
    final wallet = await VaultProgressStore.walletCoins();
    if (!mounted) return;
    setState(() {
      _progress = map;
      _walletCoins = wallet;
      if (_flying.isEmpty) _displayCoins = wallet;
    });
  }

  int get _cleared => _progress.values.fold(0, (a, b) => a + b.level.clamp(0, 10));

  Future<void> _openGame(VaultGameDef game) async {
    HapticFeedback.selectionClick();
    final page = game.id == 'vault_sync' ? const NgmyVaultSyncScreen() : NgmyVaultLeveledGameScreen(game: game);
    final result = await Navigator.of(context).push<Object?>(
      PageRouteBuilder(
        opaque: true,
        transitionDuration: const Duration(milliseconds: 380),
        reverseTransitionDuration: const Duration(milliseconds: 280),
        pageBuilder: (context, anim, secondary) => FadeTransition(
          opacity: CurvedAnimation(parent: anim, curve: Curves.easeOutCubic),
          child: page,
        ),
      ),
    );
    await _loadProgress();
    final earned = result is VaultGameResult ? result.coinsEarned : 0;
    if (earned > 0 && mounted) _playCoinFly(earned);
  }

  void _playCoinFly(int amount) {
    final box = _coinKey.currentContext?.findRenderObject() as RenderBox?;
    final target = box?.localToGlobal(Offset(box.size.width / 2, box.size.height / 2)) ?? Offset(MediaQuery.sizeOf(context).width - 48, 56);
    final start = Offset(MediaQuery.sizeOf(context).width / 2, MediaQuery.sizeOf(context).height * 0.55);
    setState(() {
      _flying
        ..clear()
        ..addAll(List.generate(math.min(12, math.max(5, amount ~/ 3)), (i) {
          return _FlyingCoin(
            id: DateTime.now().microsecondsSinceEpoch + i,
            start: start + Offset((_rng.nextDouble() - 0.5) * 80, (_rng.nextDouble() - 0.5) * 40),
            end: target,
            delay: i * 0.05,
          );
        }));
    });
    // Count up after arcs land.
    Future<void>.delayed(const Duration(milliseconds: 720), () async {
      if (!mounted) return;
      final from = _displayCoins;
      final to = _walletCoins;
      const steps = 18;
      for (var i = 1; i <= steps; i++) {
        await Future<void>.delayed(const Duration(milliseconds: 28));
        if (!mounted) return;
        setState(() => _displayCoins = from + ((to - from) * (i / steps)).round());
      }
      setState(() {
        _displayCoins = _walletCoins;
        _flying.clear();
      });
    });
  }

  final _rng = math.Random();

  Future<void> _openGameSchool() async {
    HapticFeedback.selectionClick();
    await Navigator.of(context).push(
      PageRouteBuilder<void>(
        opaque: true,
        transitionDuration: const Duration(milliseconds: 380),
        reverseTransitionDuration: const Duration(milliseconds: 280),
        pageBuilder: (context, anim, secondary) => FadeTransition(
          opacity: CurvedAnimation(parent: anim, curve: Curves.easeOutCubic),
          child: const NgmyVaultGameSchoolScreen(),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: AnimatedBuilder(
        animation: Listenable.merge([_boot, _spin, _wave, _glow]),
        builder: (context, _) {
          final boot = Curves.easeOutCubic.transform(_boot.value.clamp(0.0, 1.0));
          return Stack(
            fit: StackFit.expand,
            children: [
              CustomPaint(
                painter: _ArcadeBootBackdrop(colors: _bootColors, spin: _spin.value, wave: _wave.value, boot: boot),
              ),
              if (!_ready) _bootOverlay(boot) else _hubBody(),
              ..._flying.map((c) => _FlyingCoinLayer(coin: c)),
            ],
          );
        },
      ),
    );
  }

  Widget _bootOverlay(double boot) {
    final fill = Curves.easeInOut.transform(_boot.value.clamp(0.0, 1.0));
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 18, 24, 28),
        child: Column(
          children: [
            Row(
              children: [
                Text('SYSTEM · SECURE', style: TextStyle(color: _bootColors.first.withValues(alpha: 0.9), fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 11)),
                const Spacer(),
                IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7))),
              ],
            ),
            const Spacer(),
            Transform.scale(
              scale: 0.75 + boot * 0.3,
              child: SizedBox(
                width: 200,
                height: 200,
                child: CustomPaint(
                  painter: _ArcadeBootRing(
                    colors: _bootColors,
                    needle: _spin.value * math.pi * 2,
                    target: 1.2,
                    pulse: 0.4 + math.sin(_wave.value * math.pi * 2) * 0.4,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
            Text('VAULT CHANNEL', style: TextStyle(color: Colors.white.withValues(alpha: boot), fontSize: 24, fontWeight: FontWeight.w900, letterSpacing: 2)),
            const SizedBox(height: 10),
            Text('Calibrating sync lane…', style: TextStyle(color: Colors.white.withValues(alpha: 0.6 * boot), fontSize: 13, fontWeight: FontWeight.w600)),
            const SizedBox(height: 20),
            ClipRRect(
              borderRadius: BorderRadius.circular(999),
              child: SizedBox(
                height: 6,
                width: 180,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    ColoredBox(color: Colors.white.withValues(alpha: 0.12)),
                    FractionallySizedBox(
                      alignment: Alignment.centerLeft,
                      widthFactor: fill,
                      child: const DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(colors: _bootColors))),
                    ),
                  ],
                ),
              ),
            ),
            const Spacer(),
          ],
        ),
      ),
    );
  }

  Widget _hubBody() {
    final glow = 0.35 + _glow.value * 0.35;
    return SafeArea(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 4, 14, 0),
            child: Row(
              children: [
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
                const Expanded(
                  child: Text('VAULT CHANNEL', style: TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, letterSpacing: 1.6, fontSize: 14)),
                ),
                _chip(Icons.monetization_on_rounded, '$_displayCoins', key: _coinKey),
                const SizedBox(width: 8),
                _chip(Icons.flag_rounded, '$_cleared LV'),
              ],
            ),
          ),
          const SizedBox(height: 10),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14),
            child: SizedBox(
              height: 220,
              child: Stack(
                children: [
                  PageView.builder(
                    controller: _adPage,
                    itemCount: kVaultGames.length,
                    onPageChanged: (i) => setState(() => _adIndex = i),
                    itemBuilder: (context, i) {
                      final g = kVaultGames[i];
                      return _GameAdCard(
                        game: g,
                        progress: _progress[g.id],
                        glow: glow,
                        onPlay: () => _openGame(g),
                      );
                    },
                  ),
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: 12,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: List.generate(kVaultGames.length, (i) {
                        final on = i == _adIndex;
                        return AnimatedContainer(
                          duration: const Duration(milliseconds: 220),
                          margin: const EdgeInsets.symmetric(horizontal: 3),
                          width: on ? 16 : 6,
                          height: 6,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(99),
                            color: on ? const Color(0xFFFBBF24) : Colors.white24,
                          ),
                        );
                      }),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 0),
            child: _GameSchoolBanner(glow: glow, onTap: _openGameSchool),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 14, 18, 6),
            child: Row(
              children: [
                Text('TECH GAMES', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 12)),
                const Spacer(),
                Text('Coins · addictive offline play', style: TextStyle(color: Colors.white38, fontWeight: FontWeight.w600, fontSize: 11)),
              ],
            ),
          ),
          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.fromLTRB(14, 4, 14, 18),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3,
                mainAxisSpacing: 10,
                crossAxisSpacing: 10,
                childAspectRatio: 1.05,
              ),
              itemCount: kVaultGames.length,
              itemBuilder: (context, i) {
                final g = kVaultGames[i];
                return _GameTile(game: g, progress: _progress[g.id], onTap: () => _openGame(g));
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _chip(IconData icon, String text, {Key? key}) {
    return Container(
      key: key,
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 5),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.07),
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: Colors.white12),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 13, color: const Color(0xFFFBBF24)),
          const SizedBox(width: 4),
          Text(text, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 11)),
        ],
      ),
    );
  }
}

class _GameAdCard extends StatelessWidget {
  const _GameAdCard({required this.game, required this.progress, required this.glow, required this.onPlay});

  final VaultGameDef game;
  final VaultGameProgress? progress;
  final double glow;
  final VoidCallback onPlay;

  @override
  Widget build(BuildContext context) {
    final level = (progress?.level ?? 1).clamp(1, 10);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onPlay,
        borderRadius: BorderRadius.circular(22),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                game.colors.first.withValues(alpha: 0.42),
                const Color(0xFF0B1220),
                game.colors.last.withValues(alpha: 0.32),
              ],
            ),
            border: Border.all(color: game.colors.first.withValues(alpha: 0.5 + glow * 0.2), width: 1.4),
            boxShadow: [
              BoxShadow(color: game.colors.first.withValues(alpha: 0.22 * glow), blurRadius: 26, offset: const Offset(0, 10)),
            ],
          ),
          child: Stack(
            children: [
              Positioned(right: -18, top: -20, child: Icon(game.icon, size: 160, color: game.colors.first.withValues(alpha: 0.14))),
              Padding(
                padding: const EdgeInsets.fromLTRB(18, 16, 18, 28),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: game.colors.first.withValues(alpha: 0.22),
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: Text('FEATURED · AD', style: TextStyle(color: game.colors.first, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1)),
                    ),
                    const Spacer(),
                    Text(game.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26, letterSpacing: 0.3)),
                    const SizedBox(height: 6),
                    Text(game.tagline, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontWeight: FontWeight.w600, fontSize: 13)),
                    const SizedBox(height: 14),
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                          decoration: BoxDecoration(
                            gradient: LinearGradient(colors: game.colors),
                            borderRadius: BorderRadius.circular(999),
                          ),
                          child: const Text('PLAY', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.2)),
                        ),
                        const SizedBox(width: 12),
                        Text('Level $level / 10', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _GameTile extends StatelessWidget {
  const _GameTile({required this.game, required this.progress, required this.onTap});

  final VaultGameDef game;
  final VaultGameProgress? progress;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final level = (progress?.level ?? 1).clamp(1, 10);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            color: const Color(0xFF0D1422),
            border: Border.all(color: game.colors.first.withValues(alpha: 0.4)),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: game.colors)),
                child: Icon(game.icon, color: Colors.black.withValues(alpha: 0.78), size: 24),
              ),
              const SizedBox(height: 8),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 6),
                child: Text(
                  game.shortTitle,
                  textAlign: TextAlign.center,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11),
                ),
              ),
              const SizedBox(height: 4),
              Text('Lv $level', style: TextStyle(color: game.colors.first.withValues(alpha: 0.9), fontWeight: FontWeight.w800, fontSize: 10)),
            ],
          ),
        ),
      ),
    );
  }
}

class _ArcadeBootRing extends CustomPainter {
  _ArcadeBootRing({required this.colors, required this.needle, required this.target, required this.pulse});
  final List<Color> colors;
  final double needle;
  final double target;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.shortestSide * 0.38;
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(c, r + i * 8 + pulse * 4, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = colors.first.withValues(alpha: 0.1 * i));
    }
    canvas.drawCircle(
      c,
      r * 0.55,
      Paint()
        ..shader = RadialGradient(colors: [Colors.white.withValues(alpha: 0.35), colors.first.withValues(alpha: 0.55), colors.last.withValues(alpha: 0.25)]).createShader(Rect.fromCircle(center: c, radius: r * 0.55)),
    );
    canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white.withValues(alpha: 0.18));
    final tx = c.dx + math.cos(target) * r;
    final ty = c.dy + math.sin(target) * r;
    canvas.drawCircle(Offset(tx, ty), 10 + pulse * 2, Paint()..color = colors.first.withValues(alpha: 0.95));
    canvas.drawCircle(Offset(tx, ty), 4, Paint()..color = Colors.white);
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: r),
      needle - 0.55,
      1.1,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 5
        ..strokeCap = StrokeCap.round
        ..shader = SweepGradient(colors: [colors.last.withValues(alpha: 0.1), colors.first, colors[1]], transform: GradientRotation(needle - 0.55)).createShader(Rect.fromCircle(center: c, radius: r)),
    );
    final nx = c.dx + math.cos(needle) * r;
    final ny = c.dy + math.sin(needle) * r;
    canvas.drawCircle(Offset(nx, ny), 5, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _ArcadeBootRing old) => old.needle != needle || old.pulse != pulse;
}

class _ArcadeBootBackdrop extends CustomPainter {
  _ArcadeBootBackdrop({required this.colors, required this.spin, required this.wave, required this.boot});
  final List<Color> colors;
  final double spin;
  final double wave;
  final double boot;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.42);
    for (var i = 1; i <= 5; i++) {
      canvas.drawCircle(c, 38.0 * i + wave * 16, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = colors.first.withValues(alpha: (0.1 / i) * boot));
    }
    final grid = Paint()
      ..color = Colors.white.withValues(alpha: 0.035 * boot)
      ..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 26) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 26) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: 160),
      spin * math.pi * 2,
      1.5,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = colors.last.withValues(alpha: 0.4 * boot),
    );
  }

  @override
  bool shouldRepaint(covariant _ArcadeBootBackdrop old) => old.spin != spin || old.wave != wave || old.boot != boot;
}

class _FlyingCoin {
  _FlyingCoin({required this.id, required this.start, required this.end, required this.delay});
  final int id;
  final Offset start;
  final Offset end;
  final double delay;
}

class _FlyingCoinLayer extends StatefulWidget {
  const _FlyingCoinLayer({required this.coin});
  final _FlyingCoin coin;

  @override
  State<_FlyingCoinLayer> createState() => _FlyingCoinLayerState();
}

class _FlyingCoinLayerState extends State<_FlyingCoinLayer> with SingleTickerProviderStateMixin {
  late final AnimationController _c;

  @override
  void initState() {
    super.initState();
    _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 780));
    Future<void>.delayed(Duration(milliseconds: (widget.coin.delay * 1000).round()), () {
      if (mounted) _c.forward();
    });
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _c,
      builder: (context, _) {
        final t = Curves.easeInOutCubic.transform(_c.value);
        final pos = Offset.lerp(widget.coin.start, widget.coin.end, t)!;
        final scale = 1.2 - t * 0.45;
        final opacity = (1.0 - (t - 0.75).clamp(0.0, 1.0) * 4).clamp(0.0, 1.0);
        return Positioned(
          left: pos.dx - 12,
          top: pos.dy - 12,
          child: Opacity(
            opacity: opacity,
            child: Transform.scale(
              scale: scale,
              child: Container(
                width: 24,
                height: 24,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: const LinearGradient(colors: [Color(0xFFFBBF24), Color(0xFFF97316)]),
                  boxShadow: [BoxShadow(color: const Color(0xFFFBBF24).withValues(alpha: 0.55), blurRadius: 12)],
                ),
                child: const Icon(Icons.monetization_on_rounded, size: 16, color: Colors.black87),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _GameSchoolBanner extends StatelessWidget {
  const _GameSchoolBanner({required this.glow, required this.onTap});
  final double glow;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    const colors = [Color(0xFFFBBF24), Color(0xFFA78BFA), Color(0xFF34D399)];
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(22),
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.fromLTRB(16, 16, 12, 16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [colors[0].withValues(alpha: 0.32), const Color(0xFF120B1E), colors[1].withValues(alpha: 0.30)],
            ),
            border: Border.all(color: colors[0].withValues(alpha: 0.5 + glow * 0.25), width: 1.4),
            boxShadow: [BoxShadow(color: colors[0].withValues(alpha: 0.22 * glow), blurRadius: 26, offset: const Offset(0, 10))],
          ),
          child: Row(
            children: [
              Container(
                width: 50,
                height: 50,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: const LinearGradient(colors: colors),
                  boxShadow: [BoxShadow(color: colors[0].withValues(alpha: 0.5), blurRadius: 16)],
                ),
                child: const Icon(Icons.auto_stories_rounded, color: Colors.white, size: 24),
              ),
              const SizedBox(width: 14),
              const Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('GAME SCHOOL', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 14)),
                    SizedBox(height: 3),
                    Text('Learn English, earn coins, unlock upgrades — a whole category of its own.', style: TextStyle(color: Colors.white60, fontSize: 11.5, height: 1.3)),
                  ],
                ),
              ),
              const Icon(Icons.arrow_forward_ios_rounded, color: Colors.white54, size: 16),
            ],
          ),
        ),
      ),
    );
  }
}
