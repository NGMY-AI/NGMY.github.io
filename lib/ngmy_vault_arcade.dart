import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_vault_sync.dart';

/// Vault Channel arcade — fully offline tech mini-games with local progress.
class NgmyVaultArcadeScreen extends StatefulWidget {
  const NgmyVaultArcadeScreen({super.key});

  @override
  State<NgmyVaultArcadeScreen> createState() => _NgmyVaultArcadeScreenState();
}

class _NgmyVaultArcadeScreenState extends State<NgmyVaultArcadeScreen> with TickerProviderStateMixin {
  late final AnimationController _boot;
  late final AnimationController _glow;
  late final PageController _adPage;
  Timer? _adTimer;
  bool _ready = false;
  int _adIndex = 0;
  Map<String, VaultGameProgress> _progress = {};

  @override
  void initState() {
    super.initState();
    _boot = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed && mounted) setState(() => _ready = true);
      })
      ..forward();
    _glow = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _adPage = PageController(viewportFraction: 0.92);
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
    _glow.dispose();
    _adPage.dispose();
    super.dispose();
  }

  Future<void> _loadProgress() async {
    final map = await VaultProgressStore.loadAll();
    if (!mounted) return;
    setState(() => _progress = map);
  }

  int get _totalXp => _progress.values.fold(0, (a, b) => a + b.xp);
  int get _gamesPlayed => _progress.values.where((p) => p.plays > 0).length;

  Future<void> _openGame(VaultGameDef game) async {
    HapticFeedback.selectionClick();
    Widget page;
    if (game.engine == VaultEngine.sync && game.id == 'vault_sync') {
      page = const NgmyVaultSyncScreen();
    } else {
      page = NgmyVaultGamePlayScreen(game: game);
    }
    await Navigator.of(context).push(
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
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF05070D),
      body: AnimatedBuilder(
        animation: Listenable.merge([_boot, _glow]),
        builder: (context, _) {
          if (!_ready) return _bootBody();
          return _hubBody();
        },
      ),
    );
  }

  Widget _bootBody() {
    final t = Curves.easeOutCubic.transform(_boot.value);
    return SafeArea(
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.videogame_asset_rounded, size: 54, color: Color.lerp(const Color(0xFFFBBF24), const Color(0xFFF97316), _glow.value)!.withValues(alpha: t)),
            const SizedBox(height: 18),
            Text('VAULT CHANNEL', style: TextStyle(color: Colors.white.withValues(alpha: t), fontWeight: FontWeight.w900, letterSpacing: 2.2, fontSize: 22)),
            const SizedBox(height: 8),
            Text('Loading offline arcade…', style: TextStyle(color: Colors.white54.withValues(alpha: t), fontWeight: FontWeight.w600)),
            const SizedBox(height: 22),
            SizedBox(
              width: 180,
              height: 6,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(99),
                child: LinearProgressIndicator(
                  value: t,
                  backgroundColor: Colors.white12,
                  color: const Color(0xFFFBBF24),
                ),
              ),
            ),
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
                  child: Text('VAULT ARCADE', style: TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, letterSpacing: 1.6, fontSize: 14)),
                ),
                _chip(Icons.bolt_rounded, '$_totalXp XP'),
                const SizedBox(width: 8),
                _chip(Icons.sports_esports_rounded, '$_gamesPlayed/${kVaultGames.length}'),
              ],
            ),
          ),
          const SizedBox(height: 8),
          SizedBox(
            height: 168,
            child: PageView.builder(
              controller: _adPage,
              itemCount: kVaultGames.length,
              onPageChanged: (i) => setState(() => _adIndex = i),
              itemBuilder: (context, i) {
                final g = kVaultGames[i];
                final p = _progress[g.id];
                return Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 6),
                  child: _GameAdCard(
                    game: g,
                    progress: p,
                    glow: glow,
                    onPlay: () => _openGame(g),
                  ),
                );
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 10, 18, 6),
            child: Row(
              children: [
                Text('TECH GAMES', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 12)),
                const Spacer(),
                Text('All offline · progress saved', style: TextStyle(color: Colors.white38, fontWeight: FontWeight.w600, fontSize: 11)),
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
                childAspectRatio: 0.78,
              ),
              itemCount: kVaultGames.length,
              itemBuilder: (context, i) {
                final g = kVaultGames[i];
                return _GameTile(
                  game: g,
                  progress: _progress[g.id],
                  onTap: () => _openGame(g),
                );
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _chip(IconData icon, String text) {
    return Container(
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
    final best = progress?.best ?? 0;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onPlay,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                game.colors.first.withValues(alpha: 0.35),
                const Color(0xFF0B1220),
                game.colors.last.withValues(alpha: 0.28),
              ],
            ),
            border: Border.all(color: game.colors.first.withValues(alpha: 0.45 + glow * 0.2)),
            boxShadow: [
              BoxShadow(color: game.colors.first.withValues(alpha: 0.18 * glow), blurRadius: 22, offset: const Offset(0, 8)),
            ],
          ),
          child: Stack(
            children: [
              Positioned(
                right: -20,
                top: -24,
                child: Icon(game.icon, size: 140, color: game.colors.first.withValues(alpha: 0.12)),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                            color: game.colors.first.withValues(alpha: 0.2),
                            borderRadius: BorderRadius.circular(999),
                          ),
                          child: Text('NOW PLAYING · AD', style: TextStyle(color: game.colors.first, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1)),
                        ),
                        const Spacer(),
                        if (best > 0) Text('BEST $best', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 11)),
                      ],
                    ),
                    const Spacer(),
                    Text(game.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 0.4)),
                    const SizedBox(height: 4),
                    Text(game.tagline, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontWeight: FontWeight.w600, fontSize: 12)),
                    const SizedBox(height: 10),
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                          decoration: BoxDecoration(
                            gradient: LinearGradient(colors: game.colors),
                            borderRadius: BorderRadius.circular(999),
                          ),
                          child: const Text('PLAY', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.2)),
                        ),
                        const SizedBox(width: 10),
                        Text(game.techLabel, style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w700, fontSize: 11)),
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
    final best = progress?.best ?? 0;
    final stars = progress?.stars ?? 0;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: const Color(0xFF0D1422),
            border: Border.all(color: game.colors.first.withValues(alpha: 0.35)),
          ),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(8, 10, 8, 8),
            child: Column(
              children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(colors: game.colors),
                  ),
                  child: Icon(game.icon, color: Colors.black.withValues(alpha: 0.78), size: 22),
                ),
                const SizedBox(height: 8),
                Text(
                  game.shortTitle,
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11, height: 1.15),
                ),
                const Spacer(),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(3, (i) {
                    return Icon(
                      i < stars ? Icons.star_rounded : Icons.star_outline_rounded,
                      size: 12,
                      color: i < stars ? const Color(0xFFFBBF24) : Colors.white24,
                    );
                  }),
                ),
                const SizedBox(height: 2),
                Text(best > 0 ? 'Best $best' : 'New', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontWeight: FontWeight.w700, fontSize: 10)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ── Catalog + progress ───────────────────────────────────────────────────────

enum VaultEngine { sync, nodes, sequence, packets, hold }

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
    this.speed = 1.0,
    this.lives = 3,
    this.targetScore = 40,
  });

  final String id;
  final String title;
  final String shortTitle;
  final String tagline;
  final String techLabel;
  final VaultEngine engine;
  final List<Color> colors;
  final IconData icon;
  final double speed;
  final int lives;
  final int targetScore;
}

class VaultGameProgress {
  const VaultGameProgress({this.best = 0, this.plays = 0, this.xp = 0, this.stars = 0, this.bestCombo = 0});

  final int best;
  final int plays;
  final int xp;
  final int stars;
  final int bestCombo;

  Map<String, dynamic> toJson() => {'best': best, 'plays': plays, 'xp': xp, 'stars': stars, 'bestCombo': bestCombo};

  factory VaultGameProgress.fromJson(Map map) => VaultGameProgress(
        best: (map['best'] as num?)?.toInt() ?? 0,
        plays: (map['plays'] as num?)?.toInt() ?? 0,
        xp: (map['xp'] as num?)?.toInt() ?? 0,
        stars: (map['stars'] as num?)?.toInt() ?? 0,
        bestCombo: (map['bestCombo'] as num?)?.toInt() ?? 0,
      );
}

class VaultProgressStore {
  static const _k = 'ngmy_vault_arcade_progress_v1';

  static Future<Map<String, VaultGameProgress>> loadAll() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final out = <String, VaultGameProgress>{};
      final raw = prefs.getString(_k);
      if (raw != null) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          for (final e in decoded.entries) {
            out['${e.key}'] = VaultGameProgress.fromJson(Map<String, dynamic>.from(e.value as Map));
          }
        }
      }
      // Merge classic Vault Sync highs into arcade tile progress.
      final syncRaw = prefs.getString('ngmy_vault_sync_v2');
      if (syncRaw != null) {
        final map = jsonDecode(syncRaw);
        if (map is Map) {
          final best = (map['best'] as num?)?.toInt() ?? 0;
          final bestCombo = (map['bestCombo'] as num?)?.toInt() ?? 0;
          final prev = out['vault_sync'] ?? const VaultGameProgress();
          if (best > prev.best || bestCombo > prev.bestCombo) {
            out['vault_sync'] = VaultGameProgress(
              best: math.max(prev.best, best),
              plays: math.max(prev.plays, best > 0 ? 1 : 0),
              xp: prev.xp,
              stars: prev.stars,
              bestCombo: math.max(prev.bestCombo, bestCombo),
            );
          }
        }
      }
      return out;
    } catch (_) {
      return {};
    }
  }

  static Future<VaultGameProgress> recordRun({
    required String gameId,
    required int score,
    required int combo,
    required int targetScore,
  }) async {
    final all = await loadAll();
    final prev = all[gameId] ?? const VaultGameProgress();
    final best = math.max(prev.best, score);
    final bestCombo = math.max(prev.bestCombo, combo);
    final gained = score + (combo * 2);
    final xp = prev.xp + gained;
    var stars = prev.stars;
    if (best >= targetScore) stars = math.max(stars, 1);
    if (best >= targetScore * 2) stars = math.max(stars, 2);
    if (best >= targetScore * 3) stars = math.max(stars, 3);
    final next = VaultGameProgress(best: best, plays: prev.plays + 1, xp: xp, stars: stars, bestCombo: bestCombo);
    all[gameId] = next;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_k, jsonEncode(all.map((k, v) => MapEntry(k, v.toJson()))));
    } catch (_) {}
    // Mirror classic Vault Sync highs into arcade store when that game is played via old screen.
    return next;
  }
}

const kVaultGames = <VaultGameDef>[
  VaultGameDef(id: 'vault_sync', title: 'Vault Sync', shortTitle: 'Vault Sync', tagline: 'Tap when the arcs meet. Chase combos.', techLabel: 'SYNC RING', engine: VaultEngine.sync, colors: [Color(0xFFFBBF24), Color(0xFFF97316)], icon: Icons.sync_rounded, targetScore: 30),
  VaultGameDef(id: 'pulse_lock', title: 'Pulse Lock', shortTitle: 'Pulse Lock', tagline: 'Tighter sync windows. No mercy.', techLabel: 'LOCK', engine: VaultEngine.sync, colors: [Color(0xFF22D3EE), Color(0xFF6366F1)], icon: Icons.lock_clock_rounded, speed: 1.25, targetScore: 35),
  VaultGameDef(id: 'orbit_snap', title: 'Orbit Snap', shortTitle: 'Orbit Snap', tagline: 'Faster orbit. Snap the notch.', techLabel: 'ORBIT', engine: VaultEngine.sync, colors: [Color(0xFFA78BFA), Color(0xFFEC4899)], icon: Icons.blur_circular_rounded, speed: 1.55, targetScore: 40),
  VaultGameDef(id: 'node_strike', title: 'Node Strike', shortTitle: 'Node Strike', tagline: 'Hit lit circuit nodes before they fade.', techLabel: 'GRID', engine: VaultEngine.nodes, colors: [Color(0xFF34D399), Color(0xFF06B6D4)], icon: Icons.grid_view_rounded, targetScore: 25),
  VaultGameDef(id: 'circuit_spark', title: 'Circuit Spark', shortTitle: 'Circuit Spark', tagline: 'More nodes. Faster sparks.', techLabel: 'SPARK', engine: VaultEngine.nodes, colors: [Color(0xFFF59E0B), Color(0xFFEF4444)], icon: Icons.flash_on_rounded, speed: 1.35, targetScore: 30),
  VaultGameDef(id: 'firewall_rush', title: 'Firewall Rush', shortTitle: 'Firewall Rush', tagline: 'Seal breaches as they light up.', techLabel: 'FIREWALL', engine: VaultEngine.nodes, colors: [Color(0xFFEF4444), Color(0xFFF97316)], icon: Icons.security_rounded, speed: 1.6, lives: 4, targetScore: 35),
  VaultGameDef(id: 'memory_core', title: 'Memory Core', shortTitle: 'Memory Core', tagline: 'Repeat the protocol sequence.', techLabel: 'RAM', engine: VaultEngine.sequence, colors: [Color(0xFF60A5FA), Color(0xFF818CF8)], icon: Icons.memory_rounded, targetScore: 20),
  VaultGameDef(id: 'protocol_echo', title: 'Protocol Echo', shortTitle: 'Proto Echo', tagline: 'Longer chains. Perfect recall.', techLabel: 'ECHO', engine: VaultEngine.sequence, colors: [Color(0xFF2DD4BF), Color(0xFF22D3EE)], icon: Icons.graphic_eq_rounded, speed: 1.2, targetScore: 24),
  VaultGameDef(id: 'cipher_chain', title: 'Cipher Chain', shortTitle: 'Cipher Chain', tagline: 'Rapid cipher playback.', techLabel: 'CIPHER', engine: VaultEngine.sequence, colors: [Color(0xFFF472B6), Color(0xFFA78BFA)], icon: Icons.password_rounded, speed: 1.45, targetScore: 28),
  VaultGameDef(id: 'packet_catch', title: 'Packet Catch', shortTitle: 'Packet Catch', tagline: 'Catch falling data packets.', techLabel: 'NET', engine: VaultEngine.packets, colors: [Color(0xFF38BDF8), Color(0xFF6366F1)], icon: Icons.wifi_tethering_rounded, targetScore: 30),
  VaultGameDef(id: 'data_rain', title: 'Data Rain', shortTitle: 'Data Rain', tagline: 'Heavier rain. Faster drops.', techLabel: 'RAIN', engine: VaultEngine.packets, colors: [Color(0xFF4ADE80), Color(0xFF06B6D4)], icon: Icons.water_drop_rounded, speed: 1.4, targetScore: 36),
  VaultGameDef(id: 'bit_stream', title: 'Bit Stream', shortTitle: 'Bit Stream', tagline: 'Lane-swap and scoop every bit.', techLabel: 'STREAM', engine: VaultEngine.packets, colors: [Color(0xFFFBBF24), Color(0xFF84CC16)], icon: Icons.alt_route_rounded, speed: 1.65, targetScore: 42),
  VaultGameDef(id: 'signal_hold', title: 'Signal Hold', shortTitle: 'Signal Hold', tagline: 'Hold when the bar hits green.', techLabel: 'HOLD', engine: VaultEngine.hold, colors: [Color(0xFF34D399), Color(0xFFFBBF24)], icon: Icons.touch_app_rounded, targetScore: 25),
  VaultGameDef(id: 'bandwidth_grip', title: 'Bandwidth Grip', shortTitle: 'BW Grip', tagline: 'Narrow green zone. Grip hard.', techLabel: 'BAND', engine: VaultEngine.hold, colors: [Color(0xFF22D3EE), Color(0xFF3B82F6)], icon: Icons.speed_rounded, speed: 1.3, targetScore: 30),
  VaultGameDef(id: 'latency_clamp', title: 'Latency Clamp', shortTitle: 'Latency', tagline: 'Clamp latency spikes in the zone.', techLabel: 'CLAMP', engine: VaultEngine.hold, colors: [Color(0xFFF97316), Color(0xFFEF4444)], icon: Icons.timelapse_rounded, speed: 1.55, targetScore: 34),
  VaultGameDef(id: 'trace_link', title: 'Trace Link', shortTitle: 'Trace Link', tagline: 'Tap nodes in the correct order.', techLabel: 'TRACE', engine: VaultEngine.sequence, colors: [Color(0xFFA3E635), Color(0xFF22C55E)], icon: Icons.hub_rounded, speed: 1.1, targetScore: 22),
  VaultGameDef(id: 'mesh_path', title: 'Mesh Path', shortTitle: 'Mesh Path', tagline: 'Navigate the mesh without a miss.', techLabel: 'MESH', engine: VaultEngine.nodes, colors: [Color(0xFF818CF8), Color(0xFFC084FC)], icon: Icons.share_rounded, speed: 1.25, targetScore: 28),
  VaultGameDef(id: 'quantum_gate', title: 'Quantum Gate', shortTitle: 'Q-Gate', tagline: 'Unstable sync gates. Stay sharp.', techLabel: 'QUANTUM', engine: VaultEngine.sync, colors: [Color(0xFF67E8F9), Color(0xFFA78BFA)], icon: Icons.auto_awesome_rounded, speed: 1.8, lives: 2, targetScore: 45),
  VaultGameDef(id: 'cache_burst', title: 'Cache Burst', shortTitle: 'Cache Burst', tagline: 'Clear hot cache tiles on burst.', techLabel: 'CACHE', engine: VaultEngine.nodes, colors: [Color(0xFFFDA4AF), Color(0xFFF43F5E)], icon: Icons.bolt_rounded, speed: 1.7, targetScore: 38),
  VaultGameDef(id: 'mainframe_raid', title: 'Mainframe Raid', shortTitle: 'Mainframe', tagline: 'Endgame raid. Highest stakes.', techLabel: 'RAID', engine: VaultEngine.packets, colors: [Color(0xFFFBBF24), Color(0xFFEF4444)], icon: Icons.dns_rounded, speed: 1.85, lives: 5, targetScore: 50),
];

// ── Play screen (engines) ────────────────────────────────────────────────────

class NgmyVaultGamePlayScreen extends StatefulWidget {
  const NgmyVaultGamePlayScreen({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultGamePlayScreen> createState() => _NgmyVaultGamePlayScreenState();
}

class _NgmyVaultGamePlayScreenState extends State<NgmyVaultGamePlayScreen> with TickerProviderStateMixin {
  late final AnimationController _tick;
  late final AnimationController _flash;

  bool _playing = false;
  int _score = 0;
  int _combo = 0;
  int _best = 0;
  int _lives = 3;
  String _feedback = 'Tap START';
  Color _feedbackColor = Colors.white70;

  // sync
  double _target = 0;

  // nodes
  final _rng = math.Random();
  List<bool> _lit = List.filled(9, false);
  Timer? _nodeTimer;

  // sequence
  List<int> _seq = [];
  int _seqStep = 0;
  bool _showingSeq = false;
  int? _flashPad;

  // packets
  int _lane = 1;
  double _packetY = -0.2;
  int _packetLane = 1;

  // hold
  bool _holding = false;

  VaultGameDef get g => widget.game;

  @override
  void initState() {
    super.initState();
    _lives = g.lives;
    _tick = AnimationController(vsync: this, duration: Duration(milliseconds: (1800 / g.speed).round()))..repeat();
    _flash = AnimationController(vsync: this, duration: const Duration(milliseconds: 180));
    unawaited(_loadBest());
    _tick.addListener(_onTick);
  }

  @override
  void dispose() {
    _nodeTimer?.cancel();
    _tick.removeListener(_onTick);
    _tick.dispose();
    _flash.dispose();
    super.dispose();
  }

  Future<void> _loadBest() async {
    final all = await VaultProgressStore.loadAll();
    if (!mounted) return;
    setState(() => _best = all[g.id]?.best ?? 0);
  }

  void _onTick() {
    if (!_playing) return;
    if (g.engine == VaultEngine.packets) {
      setState(() {
        _packetY += 0.018 * g.speed;
        if (_packetY >= 1.05) {
          _packetY = -0.15;
          if (_packetLane == _lane) {
            _hit(perfect: true);
          } else {
            _miss();
          }
          _packetLane = _rng.nextInt(3);
        }
      });
    }
  }

  void _start() {
    HapticFeedback.mediumImpact();
    _nodeTimer?.cancel();
    setState(() {
      _playing = true;
      _score = 0;
      _combo = 0;
      _lives = g.lives;
      _feedback = 'GO';
      _feedbackColor = Colors.white70;
      _target = _rng.nextDouble() * math.pi * 2;
      _lit = List.filled(9, false);
      _seq = [];
      _seqStep = 0;
      _showingSeq = false;
      _packetY = -0.2;
      _packetLane = _rng.nextInt(3);
      _lane = 1;
      _holding = false;
    });
    if (g.engine == VaultEngine.nodes) _spawnNode();
    if (g.engine == VaultEngine.sequence) _nextSequence();
  }

  void _spawnNode() {
    _nodeTimer?.cancel();
    if (!_playing || !mounted) return;
    final idx = _rng.nextInt(9);
    setState(() {
      _lit = List.filled(9, false);
      _lit[idx] = true;
    });
    _nodeTimer = Timer(Duration(milliseconds: (900 / g.speed).round()), () {
      if (!_playing || !mounted) return;
      if (_lit[idx]) {
        setState(() => _lit[idx] = false);
        _miss();
      }
      _spawnNode();
    });
  }

  void _nextSequence() {
    _seq = [..._seq, _rng.nextInt(4)];
    _seqStep = 0;
    _playSequence();
  }

  Future<void> _playSequence() async {
    setState(() {
      _showingSeq = true;
      _feedback = 'Watch';
    });
    for (final n in _seq) {
      if (!mounted || !_playing) return;
      setState(() => _flashPad = n);
      await Future<void>.delayed(Duration(milliseconds: (320 / g.speed).round()));
      if (!mounted) return;
      setState(() => _flashPad = null);
      await Future<void>.delayed(Duration(milliseconds: (140 / g.speed).round()));
    }
    if (!mounted || !_playing) return;
    setState(() {
      _showingSeq = false;
      _feedback = 'Repeat';
    });
  }

  Future<void> _hit({required bool perfect}) async {
    HapticFeedback.lightImpact();
    _flash.forward(from: 0);
    setState(() {
      _combo += 1;
      _score += perfect ? 3 + (_combo ~/ 2) : 1 + (_combo ~/ 3);
      _feedback = perfect ? 'PERFECT' : 'GOOD';
      _feedbackColor = perfect ? const Color(0xFFFBBF24) : const Color(0xFF34D399);
      if (g.engine == VaultEngine.sync) _target = _rng.nextDouble() * math.pi * 2;
    });
  }

  Future<void> _miss() async {
    HapticFeedback.heavyImpact();
    setState(() {
      _combo = 0;
      _lives -= 1;
      _feedback = 'MISS';
      _feedbackColor = const Color(0xFFEF4444);
    });
    if (_lives <= 0) await _endRun();
  }

  Future<void> _endRun() async {
    _nodeTimer?.cancel();
    setState(() => _playing = false);
    final prog = await VaultProgressStore.recordRun(gameId: g.id, score: _score, combo: _combo, targetScore: g.targetScore);
    if (!mounted) return;
    setState(() {
      _best = prog.best;
      _feedback = 'RUN OVER · Best $_best';
      _feedbackColor = Colors.white70;
    });
  }

  double get _needle => _tick.value * math.pi * 2;

  double _delta(double a, double b) {
    var d = (a - b) % (math.pi * 2);
    if (d > math.pi) d -= math.pi * 2;
    if (d < -math.pi) d += math.pi * 2;
    return d.abs();
  }

  void _tapSync() {
    if (!_playing) {
      _start();
      return;
    }
    final d = _delta(_needle, _target);
    if (d < 0.20 / g.speed.clamp(0.8, 2.0)) {
      _hit(perfect: true);
    } else if (d < 0.45 / g.speed.clamp(0.8, 2.0)) {
      _hit(perfect: false);
    } else {
      _miss();
    }
  }

  void _tapNode(int i) {
    if (!_playing) {
      _start();
      return;
    }
    if (!_lit[i]) {
      _miss();
      return;
    }
    setState(() => _lit[i] = false);
    _hit(perfect: true);
  }

  void _tapPad(int i) {
    if (!_playing) {
      _start();
      return;
    }
    if (_showingSeq) return;
    if (_seq.isEmpty) return;
    if (_seq[_seqStep] == i) {
      setState(() => _seqStep += 1);
      if (_seqStep >= _seq.length) {
        _hit(perfect: true);
        _nextSequence();
      }
    } else {
      _miss();
      if (_playing) _nextSequence();
    }
  }

  void _onHoldStart() {
    if (!_playing) {
      _start();
      return;
    }
    setState(() => _holding = true);
  }

  void _onHoldEnd() {
    if (!_playing || !_holding) return;
    setState(() => _holding = false);
    final v = (math.sin(_tick.value * math.pi * 2) + 1) / 2;
    final center = 0.55;
    final window = 0.12 / g.speed;
    if ((v - center).abs() < window * 0.45) {
      _hit(perfect: true);
    } else if ((v - center).abs() < window) {
      _hit(perfect: false);
    } else {
      _miss();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF05070D),
      body: SafeArea(
        child: AnimatedBuilder(
          animation: Listenable.merge([_tick, _flash]),
          builder: (context, _) {
            return Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 4, 14, 0),
                  child: Row(
                    children: [
                      IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
                      Expanded(child: Text(g.title.toUpperCase(), style: TextStyle(color: g.colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 12))),
                      _pill('$_best'),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                  child: Row(
                    children: [
                      _pill('$_score'),
                      const SizedBox(width: 8),
                      _pill('x$_combo'),
                      const Spacer(),
                      Row(
                        children: List.generate(g.lives, (i) {
                          return Padding(
                            padding: const EdgeInsets.only(left: 3),
                            child: Icon(Icons.favorite_rounded, size: 16, color: i < _lives ? const Color(0xFFEF4444) : Colors.white24),
                          );
                        }),
                      ),
                    ],
                  ),
                ),
                Expanded(child: _playfield()),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 0, 20, 18),
                  child: Text(_feedback, textAlign: TextAlign.center, style: TextStyle(color: _feedbackColor, fontWeight: FontWeight.w800, fontSize: 14)),
                ),
              ],
            );
          },
        ),
      ),
    );
  }

  Widget _pill(String t) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(999)),
      child: Text(t, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
    );
  }

  Widget _playfield() {
    switch (g.engine) {
      case VaultEngine.sync:
        return Center(
          child: GestureDetector(
            onTap: _tapSync,
            child: SizedBox(
              width: 260,
              height: 260,
              child: CustomPaint(
                painter: _MiniSyncPainter(colors: g.colors, needle: _needle, target: _target, playing: _playing),
                child: Center(
                  child: Text(_playing ? 'TAP' : 'START', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 2)),
                ),
              ),
            ),
          ),
        );
      case VaultEngine.nodes:
        return Center(
          child: SizedBox(
            width: 260,
            height: 260,
            child: GridView.builder(
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 10, crossAxisSpacing: 10),
              itemCount: 9,
              itemBuilder: (_, i) {
                final on = _lit[i];
                return GestureDetector(
                  onTap: () => _tapNode(i),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 90),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      color: on ? g.colors.first : Colors.white.withValues(alpha: 0.06),
                      border: Border.all(color: on ? g.colors.last : Colors.white12),
                      boxShadow: on ? [BoxShadow(color: g.colors.first.withValues(alpha: 0.45), blurRadius: 14)] : null,
                    ),
                  ),
                );
              },
            ),
          ),
        );
      case VaultEngine.sequence:
        return Center(
          child: SizedBox(
            width: 240,
            height: 240,
            child: GridView.builder(
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 12, crossAxisSpacing: 12),
              itemCount: 4,
              itemBuilder: (_, i) {
                final on = _flashPad == i;
                return GestureDetector(
                  onTap: () => _tapPad(i),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 80),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      gradient: on ? LinearGradient(colors: g.colors) : null,
                      color: on ? null : Colors.white.withValues(alpha: 0.07),
                      border: Border.all(color: g.colors.first.withValues(alpha: on ? 0.9 : 0.35)),
                    ),
                    child: Center(child: Text('${i + 1}', style: TextStyle(color: on ? Colors.black : Colors.white70, fontWeight: FontWeight.w900, fontSize: 22))),
                  ),
                );
              },
            ),
          ),
        );
      case VaultEngine.packets:
        return GestureDetector(
          onTap: () {
            if (!_playing) _start();
          },
          onHorizontalDragEnd: (d) {
            if (!_playing) {
              _start();
              return;
            }
            final v = d.primaryVelocity ?? 0;
            setState(() {
              if (v < -120) _lane = (_lane - 1).clamp(0, 2);
              if (v > 120) _lane = (_lane + 1).clamp(0, 2);
            });
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 12),
            child: LayoutBuilder(
              builder: (context, c) {
                final w = c.maxWidth / 3;
                final h = c.maxHeight;
                return Stack(
                  children: [
                    Row(
                      children: List.generate(3, (i) {
                        return Expanded(
                          child: Container(
                            margin: const EdgeInsets.symmetric(horizontal: 4),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(14),
                              color: Colors.white.withValues(alpha: i == _lane ? 0.1 : 0.04),
                              border: Border.all(color: i == _lane ? g.colors.first.withValues(alpha: 0.7) : Colors.white10),
                            ),
                          ),
                        );
                      }),
                    ),
                    Positioned(
                      left: _packetLane * w + w * 0.2,
                      top: _packetY * h,
                      child: Container(
                        width: w * 0.55,
                        height: 28,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          gradient: LinearGradient(colors: g.colors),
                        ),
                      ),
                    ),
                    Positioned(
                      left: _lane * w + w * 0.15,
                      bottom: 18,
                      child: Container(
                        width: w * 0.7,
                        height: 18,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: Colors.white.withValues(alpha: 0.85),
                        ),
                      ),
                    ),
                    if (!_playing)
                      const Center(child: Text('SWIPE · TAP START', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w900, letterSpacing: 1))),
                  ],
                );
              },
            ),
          ),
        );
      case VaultEngine.hold:
        final v = (math.sin(_tick.value * math.pi * 2) + 1) / 2;
        return GestureDetector(
          onTapDown: (_) => _onHoldStart(),
          onTapUp: (_) => _onHoldEnd(),
          onTapCancel: _onHoldEnd,
          child: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(_playing ? (_holding ? 'HOLD' : 'RELEASE IN GREEN') : 'HOLD TO START', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800)),
                const SizedBox(height: 22),
                SizedBox(
                  width: 280,
                  height: 28,
                  child: Stack(
                    children: [
                      Container(decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(99))),
                      Align(
                        alignment: Alignment((0.55 * 2) - 1, 0),
                        child: Container(
                          width: 56 / g.speed,
                          height: 28,
                          decoration: BoxDecoration(color: const Color(0xFF34D399).withValues(alpha: 0.55), borderRadius: BorderRadius.circular(99)),
                        ),
                      ),
                      Align(
                        alignment: Alignment((v * 2) - 1, 0),
                        child: Container(
                          width: 14,
                          height: 28,
                          decoration: BoxDecoration(color: g.colors.first, borderRadius: BorderRadius.circular(99)),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
    }
  }
}

class _MiniSyncPainter extends CustomPainter {
  _MiniSyncPainter({required this.colors, required this.needle, required this.target, required this.playing});

  final List<Color> colors;
  final double needle;
  final double target;
  final bool playing;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.width * 0.42;
    final ring = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 10
      ..shader = SweepGradient(colors: [...colors, colors.first]).createShader(Rect.fromCircle(center: c, radius: r));
    canvas.drawCircle(c, r, ring);
    final notch = Paint()
      ..color = colors.first
      ..strokeWidth = 6
      ..strokeCap = StrokeCap.round
      ..style = PaintingStyle.stroke;
    final n1 = Offset(c.dx + math.cos(target) * (r - 18), c.dy + math.sin(target) * (r - 18));
    final n2 = Offset(c.dx + math.cos(target) * (r + 8), c.dy + math.sin(target) * (r + 8));
    canvas.drawLine(n1, n2, notch);
    if (playing) {
      final needlePaint = Paint()
        ..color = Colors.white
        ..strokeWidth = 4
        ..strokeCap = StrokeCap.round;
      final tip = Offset(c.dx + math.cos(needle) * (r - 8), c.dy + math.sin(needle) * (r - 8));
      canvas.drawLine(c, tip, needlePaint);
    }
  }

  @override
  bool shouldRepaint(covariant _MiniSyncPainter old) => old.needle != needle || old.target != target || old.playing != playing;
}
