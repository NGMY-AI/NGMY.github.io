import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// Tech-skill vault games: firewall, binary, terminal, API, cipher, ports.
class NgmyVaultTechSkillScreen extends StatefulWidget {
  const NgmyVaultTechSkillScreen({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultTechSkillScreen> createState() => _NgmyVaultTechSkillScreenState();
}

class _NgmyVaultTechSkillScreenState extends State<NgmyVaultTechSkillScreen> with TickerProviderStateMixin {
  late final AnimationController _ambient;
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
  String _feedback = 'Train a real tech skill. Earn coins.';
  Color _feedbackColor = Colors.white70;
  int _banked = 0;
  double _t = 0;

  // quiz
  String _prompt = '';
  String _hint = '';
  List<String> _options = [];
  int _correct = 0;
  int? _picked;

  // firewall packets
  final List<_FwPacket> _packets = [];
  double _spawn = 0;

  // ports
  final List<_PortCell> _ports = [];
  double _portTick = 0;

  VaultGameDef get g => widget.game;
  List<Color> get colors => g.colors;
  VaultEngine get engine => g.engine;

  @override
  void initState() {
    super.initState();
    _ambient = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat();
    _tick = AnimationController(vsync: this, duration: const Duration(milliseconds: 16))..addListener(_frame);
    unawaited(_load());
  }

  @override
  void dispose() {
    _ambient.dispose();
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

  bool get _isQuiz =>
      engine == VaultEngine.binaryLab ||
      engine == VaultEngine.terminalOps ||
      engine == VaultEngine.apiMapper ||
      engine == VaultEngine.cipherCrack;

  void _frame() {
    if (!_playing || _levelClear) return;
    setState(() {
      _t = (_t + 0.016) % 1000;
      if (engine == VaultEngine.firewallGate) {
        _spawn += 0.016;
        for (final p in _packets) {
          p.y += 0.006 + _level * 0.00045;
        }
        final missed = _packets.where((p) => p.y >= 1.05).toList();
        _packets.removeWhere((p) => p.y >= 1.05);
        for (final p in missed) {
          if (p.threat) {
            // missed a threat on the fence — bad
            unawaited(_loseHit(coins: 3 + _level, msg: 'THREAT PASSED'));
          } else {
            // good traffic escaped without approve — mild loss
            unawaited(_loseHit(coins: 1 + (_level ~/ 2), msg: 'SAFE DROPPED'));
          }
        }
        if (_packets.length < 2 + _level ~/ 3 && _spawn > (0.85 - _level * 0.04).clamp(0.42, 0.85)) {
          _spawn = 0;
          _packets.add(_FwPacket(
            x: 0.12 + _rng.nextDouble() * 0.76,
            y: -0.08,
            threat: false,
            label: 'HTTPS',
          ));
          final last = _packets.last;
          last.threat = _rng.nextBool();
          if (last.threat) {
            last.label = const ['MALWARE', 'SQL-INJ', 'BOTNET', 'PHISH', 'XSS'][_rng.nextInt(5)];
          } else {
            last.label = const ['HTTPS', 'SSH', 'DNS', 'API', 'TLS'][_rng.nextInt(5)];
          }
        }
      } else if (engine == VaultEngine.portSweep) {
        _portTick += 0.016;
        for (final p in _ports) {
          if (p.hot) {
            p.life -= 0.007 + _level * 0.0004;
            if (p.life <= 0) {
              p.hot = false;
              p.life = 0;
              if (p.secure) unawaited(_loseHit(coins: 2 + _level, msg: 'PORT TIMEOUT'));
            }
          }
        }
        if (_portTick > (1.1 - _level * 0.05).clamp(0.55, 1.1)) {
          _portTick = 0;
          final cold = _ports.where((p) => !p.hot).toList()..shuffle(_rng);
          if (cold.isNotEmpty) {
            final pick = cold.first;
            pick.hot = true;
            pick.life = 1;
            pick.secure = _rng.nextDouble() > 0.35;
          }
        }
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
      _feedback = 'Level $_level · skill training';
      _feedbackColor = Colors.white70;
      _packets.clear();
      _ports
        ..clear()
        ..addAll(List.generate(9, (i) => _PortCell(index: i)));
      _spawn = 0;
      _portTick = 0;
      _picked = null;
    });
    if (_isQuiz) _nextQuiz();
    _tick.repeat();
  }

  void _nextQuiz() {
    switch (engine) {
      case VaultEngine.binaryLab:
        final n = 8 + _rng.nextInt(40) + _level;
        final bin = n.toRadixString(2).padLeft(6, '0');
        final wrong = <int>{};
        while (wrong.length < 3) {
          wrong.add(n + _rng.nextInt(17) - 8);
        }
        wrong.remove(n);
        while (wrong.length < 3) {
          wrong.add(n + wrong.length + 1);
        }
        final opts = [n, ...wrong.take(3)].map((e) => '$e').toList()..shuffle(_rng);
        _prompt = 'Binary → decimal';
        _hint = bin;
        _options = opts;
        _correct = opts.indexOf('$n');
        break;
      case VaultEngine.terminalOps:
        final q = _kTerminal[_rng.nextInt(_kTerminal.length)];
        final distractors = _kTerminal.where((e) => e.a != q.a).map((e) => e.a).toSet().toList()..shuffle(_rng);
        final opts = [q.a, ...distractors.take(3)]..shuffle(_rng);
        _prompt = q.q;
        _hint = 'Shell · pick the command';
        _options = opts;
        _correct = opts.indexOf(q.a);
        break;
      case VaultEngine.apiMapper:
        final q = _kApi[_rng.nextInt(_kApi.length)];
        final distractors = _kApi.where((e) => e.a != q.a).map((e) => e.a).toSet().toList()..shuffle(_rng);
        final opts = [q.a, ...distractors.take(3)]..shuffle(_rng);
        _prompt = q.q;
        _hint = 'HTTP · choose the fit';
        _options = opts;
        _correct = opts.indexOf(q.a);
        break;
      case VaultEngine.cipherCrack:
        final word = _kCipherWords[_rng.nextInt(_kCipherWords.length)];
        final shift = 1 + _rng.nextInt(4);
        String enc(String s) => String.fromCharCodes(s.codeUnits.map((c) {
              if (c >= 97 && c <= 122) return 97 + (c - 97 + shift) % 26;
              return c;
            }));
        final cipher = enc(word);
        final wrongs = _kCipherWords.where((w) => w != word).toList()..shuffle(_rng);
        final opts = [word, ...wrongs.take(3)]..shuffle(_rng);
        _prompt = 'Caesar −$shift';
        _hint = cipher;
        _options = opts;
        _correct = opts.indexOf(word);
        break;
      default:
        break;
    }
    _picked = null;
    setState(() {});
  }

  Future<void> _pickQuiz(int i) async {
    if (!_playing || _picked != null) return;
    setState(() => _picked = i);
    final ok = i == _correct;
    await Future<void>.delayed(const Duration(milliseconds: 280));
    if (!mounted || !_playing) return;
    if (ok) {
      await _gainHit(coins: 4 + _level);
      if (_playing && !_levelClear) _nextQuiz();
    } else {
      await _loseHit(coins: 3 + _level, msg: 'WRONG');
      if (_playing && !_levelClear) _nextQuiz();
    }
  }

  Future<void> _tapPacket(_FwPacket p) async {
    if (!_playing) return;
    setState(() => _packets.remove(p));
    // threat packets should be blocked (tap = block), safe should be approved (tap = allow)
    // Single tap action: treat tap as "act". Swipe left block / right allow is nicer.
    // Use: if threat -> tap means BLOCK (correct). if safe -> tap means ALLOW (correct).
    if (p.threat) {
      await _gainHit(coins: 3 + _level);
    } else {
      await _gainHit(coins: 3 + _level);
    }
  }

  Future<void> _swipePacket(_FwPacket p, {required bool block}) async {
    if (!_playing) return;
    setState(() => _packets.remove(p));
    final ok = block == p.threat;
    if (ok) {
      await _gainHit(coins: 4 + _level);
    } else {
      await _loseHit(coins: 3 + _level, msg: block ? 'FALSE BLOCK' : 'FALSE ALLOW');
    }
  }

  Future<void> _tapPort(_PortCell p) async {
    if (!_playing || !p.hot) return;
    setState(() {
      p.hot = false;
      p.life = 0;
    });
    if (p.secure) {
      await _gainHit(coins: 3 + _level);
    } else {
      await _loseHit(coins: 4 + _level, msg: 'HONEYPOT');
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
                    IconButton(
                      onPressed: _finishToHub,
                      icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20),
                    ),
                    Expanded(
                      child: Text(
                        g.title.toUpperCase(),
                        style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.1, fontSize: 12),
                      ),
                    ),
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
                      animation: Listenable.merge([_ambient, _tick]),
                      builder: (_, __) => Stack(
                        fit: StackFit.expand,
                        children: [
                          CustomPaint(
                            painter: _SkillHudPainter(
                              colors: colors,
                              pulse: Curves.easeInOut.transform(_ambient.value),
                              scan: _ambient.value,
                              orbit: (_ambient.value + _t * 0.02) % 1.0,
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
                          : (_playing ? 'TRAINING' : 'START LEVEL $_level'),
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
    if (!_playing && !_levelClear) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Text(
            g.tagline,
            textAlign: TextAlign.center,
            style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 15, height: 1.35),
          ),
        ),
      );
    }
    switch (engine) {
      case VaultEngine.firewallGate:
        return Stack(
          children: [
            Positioned(
              left: 12,
              right: 12,
              bottom: 12,
              child: Text(
                'SWIPE RIGHT = ALLOW · LEFT = BLOCK',
                textAlign: TextAlign.center,
                style: TextStyle(color: colors.first.withValues(alpha: 0.7), fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 0.6),
              ),
            ),
            ..._packets.map((p) {
              return Positioned(
                left: p.x * MediaQuery.sizeOf(context).width * 0.72,
                top: 20 + p.y * (MediaQuery.sizeOf(context).height * 0.42),
                child: GestureDetector(
                  onHorizontalDragEnd: (d) {
                    final vx = d.primaryVelocity ?? 0;
                    if (vx.abs() < 120) return;
                    unawaited(_swipePacket(p, block: vx < 0));
                  },
                  onTap: () => unawaited(_tapPacket(p)),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      gradient: LinearGradient(
                        colors: p.threat
                            ? [const Color(0xFFEF4444), const Color(0xFFF97316)]
                            : [const Color(0xFF22C55E), const Color(0xFF06B6D4)],
                      ),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.45)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(p.threat ? 'THREAT' : 'SAFE', style: const TextStyle(color: Colors.black87, fontWeight: FontWeight.w900, fontSize: 10)),
                        Text(p.label, style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 16)),
                      ],
                    ),
                  ),
                ),
              );
            }),
          ],
        );
      case VaultEngine.portSweep:
        return Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            children: [
              Text(
                'TAP SECURE PORTS · AVOID HONEYPOTS',
                style: TextStyle(color: colors.first.withValues(alpha: 0.8), fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 0.8),
              ),
              const SizedBox(height: 12),
              Expanded(
                child: GridView.builder(
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 10, crossAxisSpacing: 10),
                  itemCount: _ports.length,
                  itemBuilder: (_, i) {
                    final p = _ports[i];
                    final on = p.hot;
                    return GestureDetector(
                      onTap: () => unawaited(_tapPort(p)),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 120),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          gradient: on
                              ? LinearGradient(colors: colors)
                              : LinearGradient(colors: [colors.first.withValues(alpha: 0.12), Colors.white.withValues(alpha: 0.04)]),
                          border: Border.all(color: colors.first.withValues(alpha: on ? 0.95 : 0.28), width: on ? 1.8 : 1),
                        ),
                        child: Center(
                          child: Text(
                            ':${8000 + i * 11}',
                            style: TextStyle(
                              color: on ? Colors.black87 : Colors.white54,
                              fontWeight: FontWeight.w900,
                              fontSize: 13,
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        );
      case VaultEngine.binaryLab:
      case VaultEngine.terminalOps:
      case VaultEngine.apiMapper:
      case VaultEngine.cipherCrack:
        return Padding(
          padding: const EdgeInsets.fromLTRB(16, 18, 16, 10),
          child: Column(
            children: [
              Text(_prompt, style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 0.8)),
              const SizedBox(height: 10),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 22, horizontal: 14),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  gradient: LinearGradient(colors: [colors.first.withValues(alpha: 0.22), colors.last.withValues(alpha: 0.12)]),
                  border: Border.all(color: colors.first.withValues(alpha: 0.5)),
                ),
                child: Column(
                  children: [
                    Text(_hint, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, fontFamily: 'monospace')),
                    const SizedBox(height: 6),
                    Text(_isQuiz ? 'Select the correct output' : '', style: const TextStyle(color: Colors.white54, fontSize: 11)),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              ..._options.asMap().entries.map((e) {
                Color bg = Colors.white.withValues(alpha: 0.06);
                Color border = Colors.white24;
                if (_picked != null) {
                  if (e.key == _correct) {
                    bg = const Color(0xFF34D399).withValues(alpha: 0.22);
                    border = const Color(0xFF34D399);
                  } else if (e.key == _picked) {
                    bg = const Color(0xFFEF4444).withValues(alpha: 0.22);
                    border = const Color(0xFFEF4444);
                  }
                }
                return Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      onTap: () => _pickQuiz(e.key),
                      borderRadius: BorderRadius.circular(14),
                      child: Ink(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(vertical: 13, horizontal: 14),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(14),
                          color: bg,
                          border: Border.all(color: border),
                        ),
                        child: Text(e.value, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14, fontFamily: 'monospace')),
                      ),
                    ),
                  ),
                );
              }),
            ],
          ),
        );
      default:
        return const SizedBox.shrink();
    }
  }
}

class _QA {
  const _QA(this.q, this.a);
  final String q;
  final String a;
}

const _kTerminal = <_QA>[
  _QA('List files in the current directory', 'ls'),
  _QA('Change directory', 'cd'),
  _QA('Print working directory', 'pwd'),
  _QA('Copy a file', 'cp'),
  _QA('Move or rename a file', 'mv'),
  _QA('Remove a file', 'rm'),
  _QA('Make a new folder', 'mkdir'),
  _QA('Show file contents', 'cat'),
  _QA('Search text inside files', 'grep'),
  _QA('Show running processes', 'ps'),
  _QA('Kill a process by PID', 'kill'),
  _QA('Check open ports / sockets', 'ss'),
  _QA('Download a URL from CLI', 'curl'),
  _QA('Secure remote login', 'ssh'),
  _QA('Change file permissions', 'chmod'),
];

const _kApi = <_QA>[
  _QA('Read a resource safely', 'GET'),
  _QA('Create a new resource', 'POST'),
  _QA('Replace a full resource', 'PUT'),
  _QA('Update part of a resource', 'PATCH'),
  _QA('Delete a resource', 'DELETE'),
  _QA('Check if endpoint exists', 'HEAD'),
  _QA('JSON content-type header', 'application/json'),
  _QA('Unauthorized response code', '401'),
  _QA('Not found response code', '404'),
  _QA('Success created code', '201'),
  _QA('Server error code', '500'),
  _QA('Route params live in…', '/users/:id'),
];

const _kCipherWords = <String>[
  'signal', 'packet', 'cipher', 'kernel', 'router', 'socket', 'vault', 'token', 'vector', 'matrix', 'proxy', 'cache'
];

class _FwPacket {
  _FwPacket({required this.x, required this.y, required this.threat, required this.label});
  final double x;
  double y;
  bool threat;
  String label;
}

class _PortCell {
  _PortCell({required this.index});
  final int index;
  bool hot = false;
  bool secure = true;
  double life = 0;
}

class _SkillHudPainter extends CustomPainter {
  _SkillHudPainter({required this.colors, required this.pulse, required this.scan, required this.orbit});
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
      canvas.drawCircle(Offset(cx + math.cos(a) * 10, cy + math.sin(a) * 10), 1.6, Paint()..color = colors.last.withValues(alpha: 0.75));
    }
  }

  @override
  bool shouldRepaint(covariant _SkillHudPainter old) => true;
}
