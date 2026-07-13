import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

enum VaultEngine {
  laserPrism,
  radarSwipe,
  orbitDodge,
  hexFuse,
  wireFlow,
  byteSlice,
  dockPulse,
  neuronLink,
  chronoGate,
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

/// Vault Sync is opened separately; these are the rebuilt distinct leveled games.
const kVaultGames = <VaultGameDef>[
  VaultGameDef(
    id: 'vault_sync',
    title: 'Vault Sync',
    shortTitle: 'Vault Sync',
    tagline: 'Tap when the arcs meet. Chase combos.',
    techLabel: 'SYNC RING',
    engine: VaultEngine.laserPrism, // unused for sync
    colors: [Color(0xFFFBBF24), Color(0xFFF97316)],
    icon: Icons.sync_rounded,
  ),
  VaultGameDef(
    id: 'laser_prism',
    title: 'Laser Prism',
    shortTitle: 'Laser Prism',
    tagline: 'Spin the prism. Light the target node.',
    techLabel: 'BEAM',
    engine: VaultEngine.laserPrism,
    colors: [Color(0xFF22D3EE), Color(0xFF6366F1)],
    icon: Icons.auto_awesome_rounded,
  ),
  VaultGameDef(
    id: 'radar_swipe',
    title: 'Radar Sweep',
    shortTitle: 'Radar Sweep',
    tagline: 'Swipe toward each blip as the radar passes.',
    techLabel: 'RADAR',
    engine: VaultEngine.radarSwipe,
    colors: [Color(0xFF34D399), Color(0xFF06B6D4)],
    icon: Icons.radar_rounded,
  ),
  VaultGameDef(
    id: 'orbit_dodge',
    title: 'Orbit Dodge',
    shortTitle: 'Orbit Dodge',
    tagline: 'Tap to boost your probe through debris rings.',
    techLabel: 'ORBIT',
    engine: VaultEngine.orbitDodge,
    colors: [Color(0xFFA78BFA), Color(0xFFEC4899)],
    icon: Icons.public_rounded,
  ),
  VaultGameDef(
    id: 'hex_fuse',
    title: 'Hex Fuse',
    shortTitle: 'Hex Fuse',
    tagline: 'Tap matching hex pulses before they fade.',
    techLabel: 'HEX',
    engine: VaultEngine.hexFuse,
    colors: [Color(0xFFF59E0B), Color(0xFFEF4444)],
    icon: Icons.hexagon_rounded,
  ),
  VaultGameDef(
    id: 'wire_flow',
    title: 'Wire Flow',
    shortTitle: 'Wire Flow',
    tagline: 'Hold and ride the current along the live wire.',
    techLabel: 'WIRE',
    engine: VaultEngine.wireFlow,
    colors: [Color(0xFF60A5FA), Color(0xFF818CF8)],
    icon: Icons.cable_rounded,
  ),
  VaultGameDef(
    id: 'byte_slice',
    title: 'Byte Slice',
    shortTitle: 'Byte Slice',
    tagline: 'Swipe-cut falling code blocks on the beat.',
    techLabel: 'SLICE',
    engine: VaultEngine.byteSlice,
    colors: [Color(0xFF4ADE80), Color(0xFF22C55E)],
    icon: Icons.content_cut_rounded,
  ),
  VaultGameDef(
    id: 'dock_pulse',
    title: 'Dock Pulse',
    shortTitle: 'Dock Pulse',
    tagline: 'Release in the docking window to lock in.',
    techLabel: 'DOCK',
    engine: VaultEngine.dockPulse,
    colors: [Color(0xFFFBBF24), Color(0xFF84CC16)],
    icon: Icons.rocket_launch_rounded,
  ),
  VaultGameDef(
    id: 'neuron_link',
    title: 'Neuron Link',
    shortTitle: 'Neuron Link',
    tagline: 'Connect twin neurons with animated arcs.',
    techLabel: 'NEURAL',
    engine: VaultEngine.neuronLink,
    colors: [Color(0xFFF472B6), Color(0xFFA78BFA)],
    icon: Icons.hub_rounded,
  ),
  VaultGameDef(
    id: 'chrono_gate',
    title: 'Chrono Gate',
    shortTitle: 'Chrono Gate',
    tagline: 'Hold open while the chrono rings overlap.',
    techLabel: 'CHRONO',
    engine: VaultEngine.chronoGate,
    colors: [Color(0xFF67E8F9), Color(0xFF3B82F6)],
    icon: Icons.timelapse_rounded,
  ),
];

List<Color> _levelPalette(VaultGameDef g, int level) {
  final shift = (level - 1) * 18.0;
  Color hueShift(Color c) {
    final hsl = HSLColor.fromColor(c);
    return hsl.withHue((hsl.hue + shift) % 360).toColor();
  }
  return [hueShift(g.colors.first), hueShift(g.colors.last)];
}

class VaultGameProgress {
  const VaultGameProgress({this.best = 0, this.plays = 0, this.xp = 0, this.level = 1, this.bestCombo = 0});

  final int best;
  final int plays;
  final int xp;
  final int level;
  final int bestCombo;

  Map<String, dynamic> toJson() => {
        'best': best,
        'plays': plays,
        'xp': xp,
        'level': level,
        'bestCombo': bestCombo,
        'stars': (level / 4).floor().clamp(0, 3),
      };

  factory VaultGameProgress.fromJson(Map map) => VaultGameProgress(
        best: (map['best'] as num?)?.toInt() ?? 0,
        plays: (map['plays'] as num?)?.toInt() ?? 0,
        xp: (map['xp'] as num?)?.toInt() ?? 0,
        level: ((map['level'] as num?)?.toInt() ?? 1).clamp(1, 10),
        bestCombo: (map['bestCombo'] as num?)?.toInt() ?? 0,
      );
}

class VaultProgressStore {
  static const _k = 'ngmy_vault_arcade_progress_v2';

  static Future<Map<String, VaultGameProgress>> loadAll() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final out = <String, VaultGameProgress>{};
      final raw = prefs.getString(_k) ?? prefs.getString('ngmy_vault_arcade_progress_v1');
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
            xp: prev.xp,
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

  static Future<VaultGameProgress> saveLevel({
    required String gameId,
    required int level,
    required int score,
    required int xpGain,
  }) async {
    final all = await loadAll();
    final prev = all[gameId] ?? const VaultGameProgress();
    final next = VaultGameProgress(
      best: math.max(prev.best, score),
      plays: prev.plays + 1,
      xp: prev.xp + xpGain,
      level: math.max(prev.level, level.clamp(1, 10)),
      bestCombo: prev.bestCombo,
    );
    all[gameId] = next;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_k, jsonEncode(all.map((k, v) => MapEntry(k, v.toJson()))));
    } catch (_) {}
    return next;
  }
}

/// Shared leveled shell — 10 steps, no hearts, clear target then next level.
class NgmyVaultLeveledGameScreen extends StatefulWidget {
  const NgmyVaultLeveledGameScreen({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultLeveledGameScreen> createState() => _NgmyVaultLeveledGameScreenState();
}

class _NgmyVaultLeveledGameScreenState extends State<NgmyVaultLeveledGameScreen> with TickerProviderStateMixin {
  late final AnimationController _tick;
  late final AnimationController _flash;
  final _rng = math.Random();

  int _level = 1;
  int _progress = 0;
  int _need = 3;
  int _score = 0;
  int _savedLevel = 1;
  bool _playing = false;
  bool _levelClear = false;
  String _feedback = 'Clear the target to unlock the next design';
  Color _feedbackColor = Colors.white70;

  // laser
  double _prism = 0;
  double _targetAngle = 1.2;

  // radar
  double _blipAngle = 0.8;
  bool _blipLive = true;

  // orbit
  double _shipR = 0.55;
  double _hazard = 0;

  // hex
  int _hexFocus = 0;
  List<int> _hexLit = const [];

  // wire
  double _wireT = 0;
  bool _holdingWire = false;

  // byte
  double _byteY = -0.2;
  int _byteLane = 1;
  int _sliceLane = 1;

  // dock
  double _dockV = 0;

  // neuron
  int? _picked;
  List<int> _pairs = const [0, 1, 2, 3, 4, 5];
  final Set<int> _linked = {};

  // chrono
  bool _holdingGate = false;

  VaultGameDef get g => widget.game;
  List<Color> get colors => _levelPalette(g, _level);

  @override
  void initState() {
    super.initState();
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat();
    _flash = AnimationController(vsync: this, duration: const Duration(milliseconds: 220));
    _tick.addListener(_onTick);
    unawaited(_load());
  }

  @override
  void dispose() {
    _tick.removeListener(_onTick);
    _tick.dispose();
    _flash.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final all = await VaultProgressStore.loadAll();
    if (!mounted) return;
    final p = all[g.id];
    setState(() {
      _savedLevel = (p?.level ?? 1).clamp(1, 10);
      _level = _savedLevel;
      _need = _needFor(_level);
    });
  }

  int _needFor(int level) => 2 + level; // 3..12

  double get _speed => 0.85 + _level * 0.12;

  void _onTick() {
    if (!_playing || _levelClear) return;
    var failMsg = '';
    var doHit = false;
    setState(() {
      switch (g.engine) {
        case VaultEngine.orbitDodge:
          _hazard = (_hazard + 0.012 * _speed) % (math.pi * 2);
          final shipA = _tick.value * math.pi * 2;
          final d = _angleDelta(shipA, _hazard);
          if (d < 0.28 && _shipR > 0.42 && _shipR < 0.72) {
            failMsg = 'HIT DEBRIS';
          }
          _shipR = (_shipR - 0.0025 * _speed).clamp(0.22, 0.92);
          break;
        case VaultEngine.byteSlice:
          _byteY += 0.016 * _speed;
          if (_byteY > 1.05) {
            _byteY = -0.15;
            failMsg = 'MISSED BYTE';
            _byteLane = _rng.nextInt(3);
          }
          break;
        case VaultEngine.wireFlow:
          if (_holdingWire) {
            _wireT += 0.01 * _speed;
            if (_wireT >= 1) {
              _wireT = 0;
              doHit = true;
            }
          } else {
            _wireT = (_wireT - 0.008).clamp(0.0, 1.0);
          }
          break;
        case VaultEngine.dockPulse:
          _dockV = (math.sin(_tick.value * math.pi * 2 * (0.7 + _level * 0.08)) + 1) / 2;
          break;
        case VaultEngine.chronoGate:
        case VaultEngine.laserPrism:
        case VaultEngine.radarSwipe:
        case VaultEngine.hexFuse:
        case VaultEngine.neuronLink:
          break;
      }
    });
    if (failMsg.isNotEmpty) _failStep(failMsg);
    if (doHit) unawaited(_hit());
  }

  double _angleDelta(double a, double b) {
    var d = (a - b) % (math.pi * 2);
    if (d > math.pi) d -= math.pi * 2;
    if (d < -math.pi) d += math.pi * 2;
    return d.abs();
  }

  void _start() {
    HapticFeedback.mediumImpact();
    setState(() {
      _playing = true;
      _levelClear = false;
      _progress = 0;
      _need = _needFor(_level);
      _feedback = 'Level $_level · hit $_need targets';
      _feedbackColor = Colors.white70;
      _prism = 0;
      _targetAngle = _rng.nextDouble() * math.pi * 2;
      _blipAngle = _rng.nextDouble() * math.pi * 2;
      _blipLive = true;
      _shipR = 0.55;
      _hazard = _rng.nextDouble() * math.pi * 2;
      _hexFocus = _rng.nextInt(7);
      _hexLit = [_hexFocus];
      _wireT = 0;
      _holdingWire = false;
      _byteY = -0.2;
      _byteLane = _rng.nextInt(3);
      _sliceLane = 1;
      _dockV = 0;
      _picked = null;
      _pairs = List.generate(6, (i) => i ~/ 2)..shuffle(_rng);
      _linked.clear();
      _holdingGate = false;
      _tick
        ..duration = Duration(milliseconds: (1600 / _speed).round())
        ..repeat();
    });
  }

  Future<void> _hit() async {
    HapticFeedback.lightImpact();
    unawaited(_flash.forward(from: 0));
    setState(() {
      _progress += 1;
      _score += 10 + _level * 4;
      _feedback = 'LOCKED $_progress / $_need';
      _feedbackColor = colors.first;
      _targetAngle = (_targetAngle + 0.9 + _rng.nextDouble()) % (math.pi * 2);
      _blipAngle = _rng.nextDouble() * math.pi * 2;
      _blipLive = true;
      _hexFocus = _rng.nextInt(7);
      _hexLit = [_hexFocus, if (_level > 4) (_hexFocus + 3) % 7];
      _byteY = -0.2;
      _byteLane = _rng.nextInt(3);
      _picked = null;
    });
    if (_progress >= _need) await _clearLevel();
  }

  void _failStep(String msg) {
    HapticFeedback.heavyImpact();
    setState(() {
      _progress = 0;
      _feedback = msg;
      _feedbackColor = const Color(0xFFEF4444);
      _shipR = 0.55;
      _wireT = 0;
      _holdingWire = false;
      _byteY = -0.2;
      _linked.clear();
      _picked = null;
    });
  }

  Future<void> _clearLevel() async {
    setState(() {
      _levelClear = true;
      _playing = false;
      _feedback = _level >= 10 ? 'MAXED · ALL 10 DESIGNS CLEARED' : 'LEVEL $_level CLEAR · NEXT DESIGN UNLOCKED';
      _feedbackColor = const Color(0xFFFBBF24);
    });
    final nextLevel = (_level + 1).clamp(1, 10);
    final saved = await VaultProgressStore.saveLevel(
      gameId: g.id,
      level: _level >= 10 ? 10 : nextLevel,
      score: _score,
      xpGain: 20 + _level * 8,
    );
    if (!mounted) return;
    setState(() {
      _savedLevel = saved.level;
      if (_level < 10) _level = nextLevel;
    });
  }

  void _onLaserDrag(DragUpdateDetails d) {
    if (!_playing) return;
    setState(() => _prism = (_prism + d.delta.dx * 0.01) % (math.pi * 2));
  }

  void _onLaserTap() {
    if (!_playing) {
      _start();
      return;
    }
    final beam = _prism + math.pi / 2;
    if (_angleDelta(beam, _targetAngle) < 0.22) {
      _hit();
    } else {
      _failStep('BEAM MISS');
    }
  }

  void _onRadarSwipe(DragEndDetails d) {
    if (!_playing) {
      _start();
      return;
    }
    if (!_blipLive) return;
    final v = d.velocity.pixelsPerSecond;
    final swipe = math.atan2(v.dy, v.dx);
    final sweep = _tick.value * math.pi * 2;
    if (_angleDelta(sweep, _blipAngle) > 0.55) {
      _failStep('OUT OF SWEEP');
      return;
    }
    if (_angleDelta(swipe, _blipAngle) < 0.7) {
      _hit();
    } else {
      _failStep('WRONG VECTOR');
    }
  }

  void _onOrbitTap() {
    if (!_playing) {
      _start();
      return;
    }
    setState(() => _shipR = (_shipR + 0.12).clamp(0.22, 0.95));
    // Score when boosting through safe corridor repeatedly
    if (_shipR > 0.7) _hit();
  }

  void _onHexTap(int i) {
    if (!_playing) {
      _start();
      return;
    }
    if (_hexLit.contains(i)) {
      _hit();
    } else {
      _failStep('WRONG HEX');
    }
  }

  void _onWireStart() {
    if (!_playing) {
      _start();
      return;
    }
    setState(() => _holdingWire = true);
  }

  void _onWireEnd() {
    if (!_playing) return;
    if (_wireT < 0.85) _failStep('CURRENT BROKE');
    setState(() => _holdingWire = false);
  }

  void _onByteSwipe(DragEndDetails d) {
    if (!_playing) {
      _start();
      return;
    }
    final v = d.primaryVelocity ?? 0;
    setState(() {
      if (v < -80) _sliceLane = (_sliceLane - 1).clamp(0, 2);
      if (v > 80) _sliceLane = (_sliceLane + 1).clamp(0, 2);
    });
    if (_byteY > 0.55 && _byteY < 0.9 && _sliceLane == _byteLane) {
      _hit();
    }
  }

  void _onDockRelease() {
    if (!_playing) {
      _start();
      return;
    }
    final window = 0.14 / (0.8 + _level * 0.05);
    if ((_dockV - 0.62).abs() < window) {
      _hit();
    } else {
      _failStep('DOCK FAIL');
    }
  }

  void _onNeuronTap(int i) {
    if (!_playing) {
      _start();
      return;
    }
    if (_linked.contains(i)) return;
    if (_picked == null) {
      setState(() => _picked = i);
      return;
    }
    if (_picked == i) {
      setState(() => _picked = null);
      return;
    }
    if (_pairs[_picked!] == _pairs[i]) {
      _linked.add(_picked!);
      _linked.add(i);
      setState(() => _picked = null);
      _hit();
    } else {
      setState(() => _picked = null);
      _failStep('BAD LINK');
    }
  }

  void _onGateStart() {
    if (!_playing) {
      _start();
      return;
    }
    setState(() => _holdingGate = true);
  }

  void _onGateEnd() {
    if (!_playing || !_holdingGate) return;
    setState(() => _holdingGate = false);
    final a = _tick.value * math.pi * 2;
    final b = _tick.value * math.pi * 2 * (1.15 + _level * 0.03);
    if (_angleDelta(a, b) < 0.28) {
      _hit();
    } else {
      _failStep('GATE CLOSED');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
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
                      Expanded(child: Text(g.title.toUpperCase(), style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.1, fontSize: 12))),
                      _pill('LV $_level/10'),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          _pill('$_score'),
                          const SizedBox(width: 8),
                          Text('Target $_progress/$_need', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
                          const Spacer(),
                          Text('Best LV $_savedLevel', style: TextStyle(color: colors.first.withValues(alpha: 0.8), fontWeight: FontWeight.w800, fontSize: 11)),
                        ],
                      ),
                      const SizedBox(height: 8),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(99),
                        child: LinearProgressIndicator(
                          value: _need == 0 ? 0 : _progress / _need,
                          minHeight: 7,
                          backgroundColor: Colors.white12,
                          color: colors.first,
                        ),
                      ),
                    ],
                  ),
                ),
                Expanded(child: _field()),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 0, 18, 10),
                  child: Text(_feedback, textAlign: TextAlign.center, style: TextStyle(color: _feedbackColor, fontWeight: FontWeight.w800, fontSize: 13)),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 0, 18, 16),
                  child: SizedBox(
                    width: double.infinity,
                    child: FilledButton(
                      onPressed: _levelClear
                          ? (_level >= 10 ? () => Navigator.pop(context) : _start)
                          : (_playing ? null : _start),
                      style: FilledButton.styleFrom(
                        backgroundColor: colors[1],
                        foregroundColor: Colors.white,
                        disabledBackgroundColor: colors[1].withValues(alpha: 0.35),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: Text(
                        _levelClear ? (_level >= 10 ? 'DONE' : 'ENTER LEVEL $_level') : (_playing ? 'IN PROGRESS' : 'START LEVEL $_level'),
                        style: const TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1),
                      ),
                    ),
                  ),
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

  Widget _field() {
    switch (g.engine) {
      case VaultEngine.laserPrism:
        return GestureDetector(
          onHorizontalDragUpdate: _onLaserDrag,
          onTap: _onLaserTap,
          child: CustomPaint(
            painter: _LaserPainter(colors: colors, prism: _prism, target: _targetAngle, t: _tick.value, flash: _flash.value),
            child: const Center(child: Text('DRAG · TAP', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.radarSwipe:
        return GestureDetector(
          onPanEnd: _onRadarSwipe,
          onTap: () {
            if (!_playing) _start();
          },
          child: CustomPaint(
            painter: _RadarPainter(colors: colors, sweep: _tick.value * math.pi * 2, blip: _blipAngle, live: _blipLive, flash: _flash.value),
            child: const Center(child: Text('SWIPE TO BLIP', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.orbitDodge:
        return GestureDetector(
          onTap: _onOrbitTap,
          child: CustomPaint(
            painter: _OrbitPainter(colors: colors, shipR: _shipR, hazard: _hazard, shipA: _tick.value * math.pi * 2, flash: _flash.value),
            child: const Center(child: Text('TAP BOOST', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.hexFuse:
        return Center(
          child: SizedBox(
            width: 280,
            height: 280,
            child: CustomPaint(
              painter: _HexPainter(colors: colors, lit: _hexLit, t: _tick.value, flash: _flash.value),
              child: Stack(
                children: List.generate(7, (i) {
                  final p = _hexPoint(i, 280);
                  return Positioned(
                    left: p.dx - 28,
                    top: p.dy - 28,
                    width: 56,
                    height: 56,
                    child: GestureDetector(onTap: () => _onHexTap(i), behavior: HitTestBehavior.opaque),
                  );
                }),
              ),
            ),
          ),
        );
      case VaultEngine.wireFlow:
        return GestureDetector(
          onTapDown: (_) => _onWireStart(),
          onTapUp: (_) => _onWireEnd(),
          onTapCancel: _onWireEnd,
          child: CustomPaint(
            painter: _WirePainter(colors: colors, t: _wireT, pulse: _tick.value, holding: _holdingWire),
            child: Center(child: Text(_holdingWire ? 'HOLD' : 'HOLD THE CURRENT', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.byteSlice:
        return GestureDetector(
          onHorizontalDragEnd: _onByteSwipe,
          onTap: () {
            if (!_playing) _start();
          },
          child: CustomPaint(
            painter: _BytePainter(colors: colors, y: _byteY, lane: _byteLane, slice: _sliceLane, t: _tick.value),
            child: const Center(child: Text('SWIPE LANES', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.dockPulse:
        return GestureDetector(
          onTapDown: (_) {
            if (!_playing) _start();
          },
          onTapUp: (_) => _onDockRelease(),
          child: CustomPaint(
            painter: _DockPainter(colors: colors, v: _dockV, level: _level, flash: _flash.value),
            child: const Center(child: Text('RELEASE IN WINDOW', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
      case VaultEngine.neuronLink:
        return Center(
          child: SizedBox(
            width: 300,
            height: 300,
            child: CustomPaint(
              painter: _NeuronPainter(colors: colors, pairs: _pairs, linked: _linked, picked: _picked, t: _tick.value),
              child: Stack(
                children: List.generate(6, (i) {
                  final a = -math.pi / 2 + i * math.pi / 3;
                  final c = Offset(150 + math.cos(a) * 110, 150 + math.sin(a) * 110);
                  return Positioned(
                    left: c.dx - 26,
                    top: c.dy - 26,
                    width: 52,
                    height: 52,
                    child: GestureDetector(onTap: () => _onNeuronTap(i), behavior: HitTestBehavior.opaque),
                  );
                }),
              ),
            ),
          ),
        );
      case VaultEngine.chronoGate:
        return GestureDetector(
          onTapDown: (_) => _onGateStart(),
          onTapUp: (_) => _onGateEnd(),
          onTapCancel: _onGateEnd,
          child: CustomPaint(
            painter: _ChronoPainter(colors: colors, t: _tick.value, holding: _holdingGate, level: _level, flash: _flash.value),
            child: Center(child: Text(_holdingGate ? 'HOLD' : 'HOLD ON OVERLAP', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))),
          ),
        );
    }
  }

  Offset _hexPoint(int i, double size) {
    if (i == 0) return Offset(size / 2, size / 2);
    final a = -math.pi / 2 + (i - 1) * math.pi / 3;
    return Offset(size / 2 + math.cos(a) * 90, size / 2 + math.sin(a) * 90);
  }
}

// ── Painters ─────────────────────────────────────────────────────────────────

class _LaserPainter extends CustomPainter {
  _LaserPainter({required this.colors, required this.prism, required this.target, required this.t, required this.flash});
  final List<Color> colors;
  final double prism;
  final double target;
  final double t;
  final double flash;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.shortestSide * 0.34;
    canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white24);
    final beam = prism + math.pi / 2;
    final tip = Offset(c.dx + math.cos(beam) * r * 1.15, c.dy + math.sin(beam) * r * 1.15);
    canvas.drawLine(c, tip, Paint()..color = colors.first.withValues(alpha: 0.9)..strokeWidth = 4 + flash * 6..strokeCap = StrokeCap.round);
    final tx = c.dx + math.cos(target) * r;
    final ty = c.dy + math.sin(target) * r;
    canvas.drawCircle(Offset(tx, ty), 12 + math.sin(t * math.pi * 2) * 2, Paint()..color = colors.last);
    // prism body
    final path = Path();
    for (var i = 0; i < 3; i++) {
      final a = prism + i * math.pi * 2 / 3;
      final p = Offset(c.dx + math.cos(a) * 28, c.dy + math.sin(a) * 28);
      if (i == 0) path.moveTo(p.dx, p.dy); else path.lineTo(p.dx, p.dy);
    }
    path.close();
    canvas.drawPath(path, Paint()..shader = LinearGradient(colors: colors).createShader(Rect.fromCircle(center: c, radius: 30)));
  }

  @override
  bool shouldRepaint(covariant _LaserPainter old) => old.prism != prism || old.target != target || old.t != t || old.flash != flash;
}

class _RadarPainter extends CustomPainter {
  _RadarPainter({required this.colors, required this.sweep, required this.blip, required this.live, required this.flash});
  final List<Color> colors;
  final double sweep;
  final double blip;
  final bool live;
  final double flash;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.shortestSide * 0.36;
    for (var i = 1; i <= 3; i++) {
      canvas.drawCircle(c, r * i / 3, Paint()..style = PaintingStyle.stroke..color = Colors.white24);
    }
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), sweep - 0.2, 0.55, true, Paint()..color = colors.first.withValues(alpha: 0.18));
    canvas.drawLine(c, Offset(c.dx + math.cos(sweep) * r, c.dy + math.sin(sweep) * r), Paint()..color = colors.first..strokeWidth = 3);
    if (live) {
      canvas.drawCircle(Offset(c.dx + math.cos(blip) * r * 0.72, c.dy + math.sin(blip) * r * 0.72), 8 + flash * 8, Paint()..color = colors.last);
    }
  }

  @override
  bool shouldRepaint(covariant _RadarPainter old) => old.sweep != sweep || old.blip != blip || old.flash != flash;
}

class _OrbitPainter extends CustomPainter {
  _OrbitPainter({required this.colors, required this.shipR, required this.hazard, required this.shipA, required this.flash});
  final List<Color> colors;
  final double shipR;
  final double hazard;
  final double shipA;
  final double flash;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final maxR = size.shortestSide * 0.4;
    canvas.drawCircle(c, maxR * 0.35, Paint()..style = PaintingStyle.stroke..color = Colors.white24);
    canvas.drawCircle(c, maxR * 0.62, Paint()..style = PaintingStyle.stroke..color = Colors.white24);
    canvas.drawCircle(c, maxR * 0.9, Paint()..style = PaintingStyle.stroke..color = Colors.white24);
    final hx = c.dx + math.cos(hazard) * maxR * 0.62;
    final hy = c.dy + math.sin(hazard) * maxR * 0.62;
    canvas.drawCircle(Offset(hx, hy), 16, Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.85));
    final sx = c.dx + math.cos(shipA) * maxR * shipR;
    final sy = c.dy + math.sin(shipA) * maxR * shipR;
    canvas.drawCircle(Offset(sx, sy), 10 + flash * 6, Paint()..color = colors.first);
  }

  @override
  bool shouldRepaint(covariant _OrbitPainter old) => old.shipR != shipR || old.hazard != hazard || old.shipA != shipA;
}

class _HexPainter extends CustomPainter {
  _HexPainter({required this.colors, required this.lit, required this.t, required this.flash});
  final List<Color> colors;
  final List<int> lit;
  final double t;
  final double flash;

  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 0; i < 7; i++) {
      final p = i == 0 ? Offset(size.width / 2, size.height / 2) : Offset(size.width / 2 + math.cos(-math.pi / 2 + (i - 1) * math.pi / 3) * 90, size.height / 2 + math.sin(-math.pi / 2 + (i - 1) * math.pi / 3) * 90);
      final on = lit.contains(i);
      final path = Path();
      for (var k = 0; k < 6; k++) {
        final a = t * math.pi * 2 * 0.05 + k * math.pi / 3;
        final q = Offset(p.dx + math.cos(a) * 26, p.dy + math.sin(a) * 26);
        if (k == 0) path.moveTo(q.dx, q.dy); else path.lineTo(q.dx, q.dy);
      }
      path.close();
      canvas.drawPath(path, Paint()..color = on ? colors.first.withValues(alpha: 0.85 + flash * 0.15) : Colors.white.withValues(alpha: 0.08));
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = on ? colors.last : Colors.white24);
    }
  }

  @override
  bool shouldRepaint(covariant _HexPainter old) => old.lit != lit || old.t != t || old.flash != flash;
}

class _WirePainter extends CustomPainter {
  _WirePainter({required this.colors, required this.t, required this.pulse, required this.holding});
  final List<Color> colors;
  final double t;
  final double pulse;
  final bool holding;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path();
    path.moveTo(40, size.height * 0.7);
    path.cubicTo(size.width * 0.25, size.height * 0.2, size.width * 0.55, size.height * 0.9, size.width - 40, size.height * 0.35);
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 10..color = Colors.white12..strokeCap = StrokeCap.round);
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 4..color = colors.first.withValues(alpha: 0.35)..strokeCap = StrokeCap.round);
    final metric = path.computeMetrics().first;
    final tip = metric.getTangentForOffset(metric.length * t.clamp(0.0, 1.0))!.position;
    canvas.drawCircle(tip, holding ? 12 + pulse * 4 : 8, Paint()..color = colors.last);
  }

  @override
  bool shouldRepaint(covariant _WirePainter old) => old.t != t || old.holding != holding || old.pulse != pulse;
}

class _BytePainter extends CustomPainter {
  _BytePainter({required this.colors, required this.y, required this.lane, required this.slice, required this.t});
  final List<Color> colors;
  final double y;
  final int lane;
  final int slice;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width / 3;
    for (var i = 0; i < 3; i++) {
      final rect = RRect.fromRectAndRadius(Rect.fromLTWH(i * w + 8, 20, w - 16, size.height - 40), const Radius.circular(14));
      canvas.drawRRect(rect, Paint()..color = Colors.white.withValues(alpha: i == slice ? 0.12 : 0.04));
      canvas.drawRRect(rect, Paint()..style = PaintingStyle.stroke..color = i == slice ? colors.first : Colors.white10);
    }
    final by = 20 + y * (size.height - 80);
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(lane * w + 18, by, w - 36, 34), const Radius.circular(8)),
      Paint()..shader = LinearGradient(colors: colors).createShader(Rect.fromLTWH(lane * w, by, w, 34)),
    );
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(slice * w + 22, size.height - 54, w - 44, 16), const Radius.circular(8)),
      Paint()..color = Colors.white.withValues(alpha: 0.85),
    );
  }

  @override
  bool shouldRepaint(covariant _BytePainter old) => old.y != y || old.lane != lane || old.slice != slice;
}

class _DockPainter extends CustomPainter {
  _DockPainter({required this.colors, required this.v, required this.level, required this.flash});
  final List<Color> colors;
  final double v;
  final int level;
  final double flash;

  @override
  void paint(Canvas canvas, Size size) {
    final track = RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.2, size.height * 0.2, size.width * 0.6, size.height * 0.6), const Radius.circular(24));
    canvas.drawRRect(track, Paint()..color = Colors.white10);
    final winH = (0.12 / (0.8 + level * 0.05)) * size.height * 0.6;
    final winY = size.height * 0.2 + size.height * 0.6 * 0.55;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.2, winY, size.width * 0.6, winH), const Radius.circular(12)), Paint()..color = const Color(0xFF34D399).withValues(alpha: 0.45));
    final shipY = size.height * 0.2 + (1 - v) * size.height * 0.6;
    canvas.drawCircle(Offset(size.width / 2, shipY), 14 + flash * 8, Paint()..color = colors.first);
  }

  @override
  bool shouldRepaint(covariant _DockPainter old) => old.v != v || old.flash != flash || old.level != level;
}

class _NeuronPainter extends CustomPainter {
  _NeuronPainter({required this.colors, required this.pairs, required this.linked, required this.picked, required this.t});
  final List<Color> colors;
  final List<int> pairs;
  final Set<int> linked;
  final int? picked;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    for (var i = 0; i < 6; i++) {
      for (var j = i + 1; j < 6; j++) {
        if (linked.contains(i) && linked.contains(j) && pairs[i] == pairs[j]) {
          final a = _pt(i, c);
          final b = _pt(j, c);
          canvas.drawLine(a, b, Paint()..color = colors.first.withValues(alpha: 0.7)..strokeWidth = 3);
        }
      }
    }
    for (var i = 0; i < 6; i++) {
      final p = _pt(i, c);
      final on = linked.contains(i) || picked == i;
      canvas.drawCircle(p, 22 + (on ? math.sin(t * math.pi * 2) * 2 : 0), Paint()..color = on ? colors.first : Colors.white24);
      canvas.drawCircle(p, 8, Paint()..color = Colors.white);
    }
  }

  Offset _pt(int i, Offset c) {
    final a = -math.pi / 2 + i * math.pi / 3;
    return Offset(c.dx + math.cos(a) * 110, c.dy + math.sin(a) * 110);
  }

  @override
  bool shouldRepaint(covariant _NeuronPainter old) => old.picked != picked || old.linked != linked || old.t != t;
}

class _ChronoPainter extends CustomPainter {
  _ChronoPainter({required this.colors, required this.t, required this.holding, required this.level, required this.flash});
  final List<Color> colors;
  final double t;
  final bool holding;
  final int level;
  final double flash;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.shortestSide * 0.34;
    final a = t * math.pi * 2;
    final b = t * math.pi * 2 * (1.15 + level * 0.03);
    canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white24);
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), a, 0.9, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 8..color = colors.first..strokeCap = StrokeCap.round);
    canvas.drawArc(Rect.fromCircle(center: c, radius: r - 18), b, 0.9, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 8..color = colors.last..strokeCap = StrokeCap.round);
    if (holding) canvas.drawCircle(c, 30 + flash * 10, Paint()..color = colors.first.withValues(alpha: 0.25));
  }

  @override
  bool shouldRepaint(covariant _ChronoPainter old) => old.t != t || old.holding != holding || old.flash != flash;
}
