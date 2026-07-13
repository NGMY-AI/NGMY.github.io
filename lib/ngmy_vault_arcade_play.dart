import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// Playable tech arcade games (timing / skill) — no quiz screens.
class NgmyVaultArcadePlayScreen extends StatefulWidget {
  const NgmyVaultArcadePlayScreen({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultArcadePlayScreen> createState() => _NgmyVaultArcadePlayScreenState();
}

class _NgmyVaultArcadePlayScreenState extends State<NgmyVaultArcadePlayScreen> with TickerProviderStateMixin {
  late final AnimationController _ambient;
  late final AnimationController _spin;
  late final AnimationController _tick;
  final _rng = math.Random();

  int _level = 1;
  int _savedLevel = 1;
  int _score = 0;
  int _sessionCoins = 0;
  int _progress = 0;
  int _need = 4;
  bool _playing = false;
  bool _levelClear = false;
  String _feedback = 'Play. Earn coins. Clear 10 levels.';
  Color _feedbackColor = Colors.white70;
  int _banked = 0;
  double _t = 0;

  // pulse forge
  double _needle = 0;
  double _target = 0.72;
  double _speed = 1.1;

  // laser lane
  double _carX = 0.5;
  final List<_Obstacle> _beams = [];

  // orb pop
  final List<_PopOrb> _orbs = [];

  // helix hold
  bool _holding = false;
  double _helix = 0;
  double _helixTarget = 0.5;

  // node dash
  final List<_DashNode> _nodes = [];
  double _nodeSpawn = 0;

  // gravity hook
  Offset _probe = const Offset(0.5, 0.78);
  Offset _vel = Offset.zero;
  Offset _well = const Offset(0.5, 0.28);
  bool _dragging = false;

  VaultGameDef get g => widget.game;
  List<Color> get colors => g.colors;
  VaultEngine get engine => g.engine;

  @override
  void initState() {
    super.initState();
    _ambient = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat();
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 16))..addListener(_frame);
    unawaited(_load());
  }

  @override
  void dispose() {
    _ambient.dispose();
    _spin.dispose();
    _tick.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final all = await VaultProgressStore.loadAll();
    if (!mounted) return;
    final p = all[g.id];
    setState(() {
      _savedLevel = (p?.level ?? 1).clamp(1, 10);
      _level = _savedLevel;
      _need = 3 + _level;
    });
  }

  void _frame() {
    if (!_playing || _levelClear) return;
    setState(() {
      _t = (_t + 0.016) % 1000;
      switch (engine) {
        case VaultEngine.pulseForge:
          _needle = (_needle + 0.012 * _speed * (1 + _level * 0.04)) % 1.0;
          break;
        case VaultEngine.laserLane:
          for (final b in _beams) {
            b.y += 0.0085 + _level * 0.0008;
          }
          _beams.removeWhere((b) => b.y > 1.2);
          if (_beams.isEmpty || _beams.last.y > 0.3) {
            _beams.add(_Obstacle(x: _rng.nextDouble(), y: -0.08, w: 0.16 + _rng.nextDouble() * 0.14));
          }
          for (final b in _beams) {
            if ((b.x - _carX).abs() < b.w * 0.55 && b.y > 0.72 && b.y < 0.9) {
              unawaited(_loseHit(coins: 4 + _level, msg: 'HIT'));
              _beams.clear();
              break;
            }
          }
          break;
        case VaultEngine.orbPop:
          for (final o in _orbs) {
            o.r += 0.003 + _level * 0.00028;
            o.spin += 0.05;
          }
          _orbs.removeWhere((o) {
            if (o.r >= o.maxR) {
              unawaited(_loseHit(coins: 3 + _level, msg: 'BURST'));
              return true;
            }
            return false;
          });
          if (_orbs.length < 2 + _level ~/ 2) {
            _orbs.add(_PopOrb(
              x: 0.15 + _rng.nextDouble() * 0.7,
              y: 0.18 + _rng.nextDouble() * 0.5,
              r: 0.02,
              maxR: 0.08 + _rng.nextDouble() * 0.035,
            ));
          }
          break;
        case VaultEngine.helixHold:
          _helix = (_helix + 0.01 * (1 + _level * 0.03)) % 1.0;
          if (_holding) {
            final d = (_helix - _helixTarget).abs();
            final wrap = math.min(d, 1 - d);
            if (wrap < 0.07) {
              unawaited(_gainHit(coins: 2 + _level ~/ 2));
              _helixTarget = _rng.nextDouble();
            }
          }
          break;
        case VaultEngine.nodeDash:
          _nodeSpawn += 0.016;
          for (final n in _nodes) {
            n.life -= 0.0075 + _level * 0.00045;
          }
          _nodes.removeWhere((n) {
            if (n.life <= 0) {
              unawaited(_loseHit(coins: 2 + _level, msg: 'MISSED'));
              return true;
            }
            return false;
          });
          if (_nodes.length < 2 + _level ~/ 3 && _nodeSpawn > 0.55) {
            _nodeSpawn = 0;
            final i = _rng.nextInt(9);
            if (!_nodes.any((n) => n.index == i)) {
              _nodes.add(_DashNode(index: i, life: 1));
            }
          }
          break;
        case VaultEngine.gravityHook:
          if (!_dragging) {
            final to = _well - _probe;
            _vel += to * 0.0017;
            _vel *= 0.992;
            _probe += _vel * 0.02;
            _probe = Offset(_probe.dx.clamp(0.05, 0.95), _probe.dy.clamp(0.05, 0.95));
            if ((_probe - _well).distance < 0.07) {
              _well = Offset(0.18 + _rng.nextDouble() * 0.64, 0.16 + _rng.nextDouble() * 0.42);
              _vel *= 0.15;
              unawaited(_gainHit(coins: 4 + _level));
            }
          }
          break;
        default:
          break;
      }
    });
  }

  Future<void> _start() async {
    HapticFeedback.mediumImpact();
    setState(() {
      _playing = true;
      _levelClear = false;
      _progress = 0;
      _need = 3 + _level;
      _feedback = 'Level $_level · go';
      _feedbackColor = Colors.white70;
      _beams.clear();
      _orbs.clear();
      _nodes.clear();
      _nodeSpawn = 0;
      _needle = 0;
      _target = 0.55 + _rng.nextDouble() * 0.3;
      _speed = 1.0 + _level * 0.06;
      _carX = 0.5;
      _holding = false;
      _helix = 0;
      _helixTarget = _rng.nextDouble();
      _probe = const Offset(0.5, 0.78);
      _vel = Offset.zero;
      _well = Offset(0.3 + _rng.nextDouble() * 0.4, 0.25);
    });
    _tick.repeat();
  }

  Future<void> _tapPulse() async {
    if (!_playing) {
      await _start();
      return;
    }
    final d = (_needle - _target).abs();
    final wrap = math.min(d, 1 - d);
    if (wrap < 0.06) {
      HapticFeedback.lightImpact();
      _target = (_target + 0.18 + _rng.nextDouble() * 0.25) % 1.0;
      _speed = (_speed + 0.04).clamp(1.0, 2.4);
      await _gainHit(coins: 4 + _level);
    } else {
      await _loseHit(coins: 3 + _level, msg: 'OFF SYNC');
    }
  }

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
      _progress = math.max(0, _progress - 1);
      _sessionCoins -= lost;
      _feedback = '$msg · -$lost coins';
      _feedbackColor = const Color(0xFFEF4444);
    });
    await VaultProgressStore.spendWalletCoins(lost);
  }

  Future<void> _clearLevel() async {
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
      _banked = _sessionCoins;
    }
    if (!mounted) return;
    Navigator.pop(context, VaultGameResult(coinsEarned: _sessionCoins, score: _score));
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
                    IconButton(onPressed: _finishToHub, icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
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
                      animation: Listenable.merge([_ambient, _spin, _tick]),
                      builder: (_, __) => Stack(
                        fit: StackFit.expand,
                        children: [
                          CustomPaint(
                            painter: _PlayHudPainter(
                              colors: colors,
                              pulse: Curves.easeInOut.transform(_ambient.value),
                              scan: _ambient.value,
                              orbit: _spin.value,
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
                      _levelClear
                          ? (_level >= 10 ? 'COLLECT COINS' : 'NEXT LEVEL $_level')
                          : (_playing ? 'PLAYING' : 'START LEVEL $_level'),
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
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        Icon(icon, size: 13, color: const Color(0xFFFBBF24)),
        const SizedBox(width: 4),
        Text(t, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
      ]),
    );
  }

  Widget _field() {
    if (!_playing && !_levelClear) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Text(g.tagline, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 15, height: 1.35)),
        ),
      );
    }
    switch (engine) {
      case VaultEngine.pulseForge:
        return GestureDetector(
          onTap: () => unawaited(_tapPulse()),
          child: CustomPaint(
            painter: _PulseForgePainter(colors: colors, needle: _needle, target: _target, pulse: _ambient.value),
            child: const Center(child: Text('TAP WHEN ARCS MEET', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, letterSpacing: 1))),
          ),
        );
      case VaultEngine.laserLane:
        return GestureDetector(
          onHorizontalDragUpdate: (d) {
            if (!_playing) return;
            setState(() => _carX = (_carX + d.delta.dx / 280).clamp(0.08, 0.92));
          },
          onTap: () {
            if (!_playing) unawaited(_start());
          },
          child: CustomPaint(
            painter: _LaserPainter(colors: colors, carX: _carX, beams: _beams, t: _t, pulse: _ambient.value),
            child: !_playing ? const Center(child: Text('DRAG TO DODGE', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900))) : null,
          ),
        );
      case VaultEngine.orbPop:
        return LayoutBuilder(builder: (context, c) {
          return GestureDetector(
            onTapDown: (d) {
              if (!_playing) {
                unawaited(_start());
                return;
              }
              final p = Offset(d.localPosition.dx / c.maxWidth, d.localPosition.dy / c.maxHeight);
              final hit = _orbs.indexWhere((o) => (Offset(o.x, o.y) - p).distance < o.r + 0.035);
              if (hit >= 0) {
                setState(() => _orbs.removeAt(hit));
                unawaited(_gainHit(coins: 3 + _level));
              }
            },
            child: CustomPaint(painter: _OrbPopPainter(colors: colors, orbs: _orbs, pulse: _ambient.value), size: Size.infinite),
          );
        });
      case VaultEngine.helixHold:
        return GestureDetector(
          onTapDown: (_) {
            if (!_playing) {
              unawaited(_start());
              return;
            }
            setState(() => _holding = true);
          },
          onTapUp: (_) => setState(() => _holding = false),
          onTapCancel: () => setState(() => _holding = false),
          child: CustomPaint(
            painter: _HelixPainter(colors: colors, helix: _helix, target: _helixTarget, holding: _holding, pulse: _ambient.value),
            child: Center(
              child: Text(_holding ? 'HOLDING…' : 'HOLD ON THE MARK', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w900)),
            ),
          ),
        );
      case VaultEngine.nodeDash:
        return Padding(
          padding: const EdgeInsets.all(16),
          child: GridView.builder(
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 10, crossAxisSpacing: 10),
            itemCount: 9,
            itemBuilder: (_, i) {
              final live = _nodes.where((e) => e.index == i).toList();
              final n = live.isEmpty ? null : live.first;
              final on = n != null;
              return GestureDetector(
                onTap: () {
                  if (!_playing) {
                    unawaited(_start());
                    return;
                  }
                  if (n == null) {
                    unawaited(_loseHit(coins: 2 + _level, msg: 'EMPTY'));
                    return;
                  }
                  setState(() => _nodes.remove(n));
                  unawaited(_gainHit(coins: 3 + _level));
                },
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 100),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: on ? LinearGradient(colors: colors) : null,
                    color: on ? null : Colors.white.withValues(alpha: 0.05),
                    border: Border.all(color: colors.first.withValues(alpha: on ? 0.95 : 0.3), width: on ? 2 : 1),
                    boxShadow: on ? [BoxShadow(color: colors.first.withValues(alpha: 0.45), blurRadius: 16)] : null,
                  ),
                ),
              );
            },
          ),
        );
      case VaultEngine.gravityHook:
        return LayoutBuilder(builder: (context, c) {
          return GestureDetector(
            onPanStart: (d) {
              if (!_playing) {
                unawaited(_start());
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
            child: CustomPaint(
              painter: _GravityHookPainter(colors: colors, probe: _probe, well: _well, pulse: _ambient.value, t: _t),
              size: Size.infinite,
            ),
          );
        });
      default:
        return const SizedBox.shrink();
    }
  }
}

class _Obstacle {
  _Obstacle({required this.x, required this.y, required this.w});
  final double x;
  double y;
  final double w;
}

class _PopOrb {
  _PopOrb({required this.x, required this.y, required this.r, required this.maxR});
  final double x;
  final double y;
  double r;
  final double maxR;
  double spin = 0;
}

class _DashNode {
  _DashNode({required this.index, required this.life});
  final int index;
  double life;
}

class _PlayHudPainter extends CustomPainter {
  _PlayHudPainter({required this.colors, required this.pulse, required this.scan, required this.orbit});
  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [const Color(0xFF07101C), colors.first.withValues(alpha: 0.14), const Color(0xFF050A12)],
        ).createShader(Offset.zero & size),
    );
    final grid = Paint()
      ..color = colors.first.withValues(alpha: 0.07 + pulse * 0.04)
      ..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 28) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 28) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
    final sy = size.height * scan;
    canvas.drawRect(
      Rect.fromLTWH(8, sy - 16, size.width - 16, 32),
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Colors.transparent, colors.first.withValues(alpha: 0.14), Colors.transparent],
        ).createShader(Rect.fromLTWH(0, sy - 16, size.width, 32)),
    );
    final cx = size.width - 28.0;
    final cy = 28.0;
    for (var i = 0; i < 6; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 3);
      canvas.drawCircle(Offset(cx + math.cos(a) * 10, cy + math.sin(a) * 10), 1.6, Paint()..color = colors.last.withValues(alpha: 0.8));
    }
  }

  @override
  bool shouldRepaint(covariant _PlayHudPainter old) => true;
}

class _PulseForgePainter extends CustomPainter {
  _PulseForgePainter({required this.colors, required this.needle, required this.target, required this.pulse});
  final List<Color> colors;
  final double needle;
  final double target;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.shortestSide * 0.32;
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(c, r + i * 10 + pulse * 4, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = colors.first.withValues(alpha: 0.12 * i));
    }
    canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.white.withValues(alpha: 0.18));
    final ta = target * math.pi * 2 - math.pi / 2;
    final na = needle * math.pi * 2 - math.pi / 2;
    canvas.drawCircle(Offset(c.dx + math.cos(ta) * r, c.dy + math.sin(ta) * r), 12 + pulse * 2, Paint()..color = colors.first);
    canvas.drawCircle(Offset(c.dx + math.cos(ta) * r, c.dy + math.sin(ta) * r), 4, Paint()..color = Colors.white);
    canvas.drawLine(c, Offset(c.dx + math.cos(na) * r, c.dy + math.sin(na) * r), Paint()..color = colors.last..strokeWidth = 3.5..strokeCap = StrokeCap.round);
    canvas.drawCircle(c, r * 0.28, Paint()..shader = RadialGradient(colors: [Colors.white.withValues(alpha: 0.55), colors.first.withValues(alpha: 0.5)]).createShader(Rect.fromCircle(center: c, radius: r * 0.28)));
  }

  @override
  bool shouldRepaint(covariant _PulseForgePainter old) => true;
}

class _LaserPainter extends CustomPainter {
  _LaserPainter({required this.colors, required this.carX, required this.beams, required this.t, required this.pulse});
  final List<Color> colors;
  final double carX;
  final List<_Obstacle> beams;
  final double t;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final road = RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.08, 0, size.width * 0.84, size.height), const Radius.circular(18));
    canvas.drawRRect(road, Paint()..color = const Color(0xFF0A1524).withValues(alpha: 0.88));
    for (var i = 0; i < 12; i++) {
      final y = ((i / 12) + (t * 0.04) % 1.0) % 1.0 * size.height;
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.485, y, 5, 26), const Radius.circular(3)), Paint()..color = Colors.white24);
    }
    for (final b in beams) {
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(b.x * size.width, b.y * size.height), width: b.w * size.width, height: 16), const Radius.circular(6)),
        Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.9),
      );
    }
    final car = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(carX * size.width, size.height * 0.82), width: 44, height: 64), const Radius.circular(12));
    canvas.drawRRect(car, Paint()..shader = LinearGradient(colors: colors).createShader(car.outerRect));
    canvas.drawRRect(car, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withValues(alpha: 0.7));
  }

  @override
  bool shouldRepaint(covariant _LaserPainter old) => true;
}

class _OrbPopPainter extends CustomPainter {
  _OrbPopPainter({required this.colors, required this.orbs, required this.pulse});
  final List<Color> colors;
  final List<_PopOrb> orbs;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    for (final o in orbs) {
      final p = Offset(o.x * size.width, o.y * size.height);
      final rr = o.r * size.shortestSide;
      canvas.drawCircle(p, rr * 1.4, Paint()..color = colors.first.withValues(alpha: 0.14 + pulse * 0.08));
      canvas.drawCircle(p, rr, Paint()..shader = RadialGradient(colors: [Colors.white, colors.first, colors.last]).createShader(Rect.fromCircle(center: p, radius: rr)));
      for (var i = 0; i < 4; i++) {
        final a = o.spin + i * (math.pi / 2);
        canvas.drawCircle(Offset(p.dx + math.cos(a) * (rr + 7), p.dy + math.sin(a) * (rr + 7)), 2, Paint()..color = colors.last);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _OrbPopPainter old) => true;
}

class _HelixPainter extends CustomPainter {
  _HelixPainter({required this.colors, required this.helix, required this.target, required this.holding, required this.pulse});
  final List<Color> colors;
  final double helix;
  final double target;
  final bool holding;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final r = size.shortestSide * 0.3;
    canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 8..color = Colors.white12);
    final ta = target * math.pi * 2 - math.pi / 2;
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), ta - 0.25, 0.5, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 10..color = colors.first.withValues(alpha: 0.85)..strokeCap = StrokeCap.round);
    final ha = helix * math.pi * 2 - math.pi / 2;
    canvas.drawCircle(Offset(c.dx + math.cos(ha) * r, c.dy + math.sin(ha) * r), holding ? 14 : 10, Paint()..color = holding ? colors.last : Colors.white70);
    canvas.drawCircle(c, r * 0.22 + pulse * 4, Paint()..color = colors.first.withValues(alpha: holding ? 0.45 : 0.2));
  }

  @override
  bool shouldRepaint(covariant _HelixPainter old) => true;
}

class _GravityHookPainter extends CustomPainter {
  _GravityHookPainter({required this.colors, required this.probe, required this.well, required this.pulse, required this.t});
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
      canvas.drawCircle(w, 16.0 * i + pulse * 3 + math.sin(t * 3) * 2, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.3..color = colors.first.withValues(alpha: 0.1 * i));
    }
    canvas.drawCircle(w, 16, Paint()..shader = const RadialGradient(colors: [Color(0xFFFFF7AE), Color(0xFFFBBF24)]).createShader(Rect.fromCircle(center: Offset.zero, radius: 16))..color = const Color(0xFFFBBF24));
    canvas.drawCircle(w, 16, Paint()..color = const Color(0xFFFBBF24));
    canvas.drawLine(p, w, Paint()..color = Colors.white24..strokeWidth = 1.5);
    canvas.drawCircle(p, 14 + pulse * 2, Paint()..color = colors.last.withValues(alpha: 0.22));
    canvas.drawCircle(p, 11, Paint()..shader = RadialGradient(colors: [Colors.white, colors.last]).createShader(Rect.fromCircle(center: p, radius: 11)));
  }

  @override
  bool shouldRepaint(covariant _GravityHookPainter old) => true;
}
