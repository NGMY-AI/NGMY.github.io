import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Vault Channel destination — everyday daily pulse: intention, energy, streak, seal breath.
class NgmyVaultPulseScreen extends StatefulWidget {
  const NgmyVaultPulseScreen({super.key});

  @override
  State<NgmyVaultPulseScreen> createState() => _NgmyVaultPulseScreenState();
}

class _NgmyVaultPulseScreenState extends State<NgmyVaultPulseScreen> with TickerProviderStateMixin {
  static const _kPrefs = 'ngmy_vault_pulse_v1';
  static const _colors = [Color(0xFFFBBF24), Color(0xFFF97316), Color(0xFFEF4444)];

  late final AnimationController _boot;
  late final AnimationController _spin;
  late final AnimationController _wave;
  late final AnimationController _seal;

  final _intentionC = TextEditingController();
  double _energy = 3;
  int _streak = 0;
  String _lastSealDay = '';
  List<_VaultDay> _days = [];
  bool _ready = false;
  bool _sealing = false;
  int _sealSecondsLeft = 0;
  Timer? _sealTimer;

  @override
  void initState() {
    super.initState();
    _boot = AnimationController(vsync: this, duration: const Duration(milliseconds: 1750))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed && mounted) {
          setState(() => _ready = true);
        }
      })
      ..forward();
    _spin = AnimationController(vsync: this, duration: const Duration(milliseconds: 5200))..repeat();
    _wave = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat();
    _seal = AnimationController(vsync: this, duration: const Duration(milliseconds: 4000));
    unawaited(_load());
  }

  @override
  void dispose() {
    _sealTimer?.cancel();
    _boot.dispose();
    _spin.dispose();
    _wave.dispose();
    _seal.dispose();
    _intentionC.dispose();
    super.dispose();
  }

  String get _todayKey {
    final n = DateTime.now();
    return '${n.year}-${n.month.toString().padLeft(2, '0')}-${n.day.toString().padLeft(2, '0')}';
  }

  Future<void> _load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kPrefs);
      if (raw == null || raw.isEmpty) return;
      final map = jsonDecode(raw);
      if (map is! Map) return;
      final days = <_VaultDay>[];
      final list = map['days'];
      if (list is List) {
        for (final e in list) {
          if (e is Map) days.add(_VaultDay.fromJson(Map<String, dynamic>.from(e)));
        }
      }
      if (!mounted) return;
      setState(() {
        _streak = (map['streak'] as num?)?.toInt() ?? 0;
        _lastSealDay = (map['lastSealDay'] ?? '').toString();
        _days = days;
        _VaultDay? today;
        for (final d in days) {
          if (d.day == _todayKey) {
            today = d;
            break;
          }
        }
        if (today != null) {
          _intentionC.text = today.intention;
          _energy = today.energy.toDouble().clamp(1, 5);
        }
      });
    } catch (_) {}
  }

  Future<void> _persist() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _kPrefs,
        jsonEncode({
          'streak': _streak,
          'lastSealDay': _lastSealDay,
          'days': _days.map((d) => d.toJson()).toList(),
        }),
      );
    } catch (_) {}
  }

  void _upsertToday({required bool sealed}) {
    final key = _todayKey;
    final next = _VaultDay(
      day: key,
      intention: _intentionC.text.trim(),
      energy: _energy.round().clamp(1, 5),
      sealed: sealed || _lastSealDay == key,
    );
    final i = _days.indexWhere((d) => d.day == key);
    if (i >= 0) {
      _days[i] = next;
    } else {
      _days.insert(0, next);
    }
    if (_days.length > 14) _days = _days.take(14).toList();
  }

  void _startSeal() {
    if (_sealing) return;
    HapticFeedback.mediumImpact();
    setState(() {
      _sealing = true;
      _sealSecondsLeft = 45;
    });
    _seal
      ..reset()
      ..repeat();
    _sealTimer?.cancel();
    _sealTimer = Timer.periodic(const Duration(seconds: 1), (t) {
      if (!mounted) {
        t.cancel();
        return;
      }
      if (_sealSecondsLeft <= 1) {
        t.cancel();
        _completeSeal();
        return;
      }
      setState(() => _sealSecondsLeft -= 1);
    });
  }

  void _completeSeal() {
    _seal.stop();
    final key = _todayKey;
    var streak = _streak;
    if (_lastSealDay != key) {
      final yesterday = DateTime.now().subtract(const Duration(days: 1));
      final yKey =
          '${yesterday.year}-${yesterday.month.toString().padLeft(2, '0')}-${yesterday.day.toString().padLeft(2, '0')}';
      streak = _lastSealDay == yKey ? streak + 1 : 1;
    }
    setState(() {
      _sealing = false;
      _sealSecondsLeft = 0;
      _lastSealDay = key;
      _streak = streak;
      _upsertToday(sealed: true);
    });
    unawaited(_persist());
    HapticFeedback.heavyImpact();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(_streak <= 1 ? 'Vault sealed for today.' : 'Vault sealed · $_streak day streak'),
        backgroundColor: const Color(0xFFEA580C),
      ),
    );
  }

  void _saveIntention() {
    setState(() => _upsertToday(sealed: _lastSealDay == _todayKey));
    unawaited(_persist());
    HapticFeedback.selectionClick();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: AnimatedBuilder(
        animation: Listenable.merge([_boot, _spin, _wave, _seal]),
        builder: (context, _) {
          final boot = Curves.easeOutCubic.transform(_boot.value.clamp(0.0, 1.0));
          return Stack(
            fit: StackFit.expand,
            children: [
              CustomPaint(
                painter: _VaultBackdropPainter(
                  colors: _colors,
                  spin: _spin.value,
                  wave: _wave.value,
                  boot: boot,
                ),
              ),
              if (!_ready) _bootOverlay(boot) else _readyBody(boot),
            ],
          );
        },
      ),
    );
  }

  Widget _bootOverlay(double boot) {
    final fill = Curves.easeInOut.transform(_boot.value.clamp(0.0, 1.0));
    final step = (fill * 4).floor().clamp(0, 3);
    const lines = [
      'Sealing vault channel…',
      'Encrypting payload…',
      'Key exchange verified.',
      'Secure lane open.',
    ];
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 18, 24, 28),
        child: Column(
          children: [
            Row(
              children: [
                Text(
                  'SYSTEM · SECURE',
                  style: TextStyle(
                    color: _colors.first.withValues(alpha: 0.9),
                    fontWeight: FontWeight.w900,
                    letterSpacing: 1.4,
                    fontSize: 11,
                  ),
                ),
                const Spacer(),
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7)),
                ),
              ],
            ),
            const Spacer(),
            Transform.scale(
              scale: 0.72 + boot * 0.32,
              child: SizedBox(
                width: 200,
                height: 200,
                child: CustomPaint(
                  painter: _VaultOrbPainter(
                    colors: _colors,
                    pulse: 0.4 + math.sin(_wave.value * math.pi * 2) * 0.5,
                    orbit: _spin.value,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 28),
            Text(
              'VAULT CHANNEL',
              style: TextStyle(
                color: Colors.white.withValues(alpha: boot),
                fontSize: 26,
                fontWeight: FontWeight.w900,
                letterSpacing: 2.2,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              lines[step],
              style: TextStyle(
                color: Colors.white.withValues(alpha: 0.65 * boot),
                fontSize: 13,
                fontWeight: FontWeight.w600,
              ),
            ),
            const SizedBox(height: 22),
            ClipRRect(
              borderRadius: BorderRadius.circular(999),
              child: SizedBox(
                height: 6,
                width: 200,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    ColoredBox(color: Colors.white.withValues(alpha: 0.12)),
                    FractionallySizedBox(
                      alignment: Alignment.centerLeft,
                      widthFactor: fill,
                      child: const DecoratedBox(
                        decoration: BoxDecoration(
                          gradient: LinearGradient(colors: _colors),
                        ),
                      ),
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

  Widget _readyBody(double boot) {
    final sealedToday = _lastSealDay == _todayKey;
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 8, 8, 0),
            child: Row(
              children: [
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20),
                ),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'VAULT PULSE',
                        style: TextStyle(
                          color: _colors.first.withValues(alpha: 0.95),
                          fontWeight: FontWeight.w900,
                          letterSpacing: 1.6,
                          fontSize: 13,
                        ),
                      ),
                      Text(
                        sealedToday ? 'Sealed for today' : 'Daily secure ritual',
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11, fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                ),
                _streakChip(),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(18, 12, 18, 28),
              children: [
                _glassPanel(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.auto_awesome_rounded, color: _colors.first, size: 18),
                          const SizedBox(width: 8),
                          const Text('Today’s intention', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                        ],
                      ),
                      const SizedBox(height: 10),
                      TextField(
                        controller: _intentionC,
                        maxLines: 2,
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 15),
                        cursorColor: _colors.first,
                        decoration: InputDecoration(
                          hintText: 'One line — what matters today?',
                          hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                          filled: true,
                          fillColor: Colors.white.withValues(alpha: 0.06),
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                          contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                        ),
                        onChanged: (_) => _saveIntention(),
                      ),
                      const SizedBox(height: 16),
                      Text('Energy', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1)),
                      SliderTheme(
                        data: SliderTheme.of(context).copyWith(
                          activeTrackColor: _colors.first,
                          inactiveTrackColor: Colors.white12,
                          thumbColor: _colors[1],
                          overlayColor: _colors.first.withValues(alpha: 0.2),
                        ),
                        child: Slider(
                          value: _energy,
                          min: 1,
                          max: 5,
                          divisions: 4,
                          label: '${_energy.round()}',
                          onChanged: (v) {
                            setState(() => _energy = v);
                            _saveIntention();
                          },
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          for (final label in const ['Low', 'Steady', 'High'])
                            Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 10, fontWeight: FontWeight.w700)),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                _glassPanel(
                  child: Column(
                    children: [
                      SizedBox(
                        width: 160,
                        height: 160,
                        child: CustomPaint(
                          painter: _VaultOrbPainter(
                            colors: _colors,
                            pulse: _sealing
                                ? 0.55 + math.sin(_seal.value * math.pi * 2) * 0.45
                                : 0.35 + math.sin(_wave.value * math.pi * 2) * 0.25,
                            orbit: _spin.value,
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        _sealing
                            ? 'Seal pulse · $_sealSecondsLeft s'
                            : sealedToday
                                ? 'Channel locked · come back tomorrow'
                                : '45-second seal pulse',
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w700, fontSize: 12),
                      ),
                      const SizedBox(height: 14),
                      SizedBox(
                        width: double.infinity,
                        child: FilledButton(
                          onPressed: sealedToday || _sealing ? null : _startSeal,
                          style: FilledButton.styleFrom(
                            backgroundColor: _colors[1],
                            disabledBackgroundColor: Colors.white12,
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: Text(
                            sealedToday
                                ? 'SEALED'
                                : _sealing
                                    ? 'SEALING…'
                                    : 'START SEAL PULSE',
                            style: const TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.1),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                Text(
                  'RECENT VAULT LOG',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.4),
                ),
                const SizedBox(height: 8),
                if (_days.isEmpty)
                  Text('Seal your first day to start the streak.', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12))
                else
                  ..._days.take(7).map(_dayTile),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _streakChip() {
    return Container(
      margin: const EdgeInsets.only(right: 8),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(999),
        gradient: LinearGradient(colors: [_colors.first.withValues(alpha: 0.35), _colors[1].withValues(alpha: 0.25)]),
        border: Border.all(color: _colors.first.withValues(alpha: 0.45)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Icon(Icons.local_fire_department_rounded, color: Color(0xFFFBBF24), size: 16),
          const SizedBox(width: 4),
          Text('$_streak', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
        ],
      ),
    );
  }

  Widget _glassPanel({required Widget child}) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 14, sigmaY: 14),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white.withValues(alpha: 0.06),
            border: Border.all(color: _colors.first.withValues(alpha: 0.28)),
            boxShadow: [BoxShadow(color: _colors[1].withValues(alpha: 0.12), blurRadius: 20, offset: const Offset(0, 8))],
          ),
          child: child,
        ),
      ),
    );
  }

  Widget _dayTile(_VaultDay d) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(14),
        color: Colors.white.withValues(alpha: 0.04),
        border: Border.all(color: Colors.white10),
      ),
      child: Row(
        children: [
          Icon(
            d.sealed ? Icons.lock_rounded : Icons.lock_open_rounded,
            size: 16,
            color: d.sealed ? _colors.first : Colors.white38,
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(d.day, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 11)),
                if (d.intention.isNotEmpty)
                  Text(
                    d.intention,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 12),
                  ),
              ],
            ),
          ),
          Text('E${d.energy}', style: TextStyle(color: _colors.first.withValues(alpha: 0.85), fontWeight: FontWeight.w900, fontSize: 12)),
        ],
      ),
    );
  }
}

class _VaultDay {
  const _VaultDay({
    required this.day,
    required this.intention,
    required this.energy,
    required this.sealed,
  });

  final String day;
  final String intention;
  final int energy;
  final bool sealed;

  Map<String, dynamic> toJson() => {
        'day': day,
        'intention': intention,
        'energy': energy,
        'sealed': sealed,
      };

  factory _VaultDay.fromJson(Map<String, dynamic> j) => _VaultDay(
        day: (j['day'] ?? '').toString(),
        intention: (j['intention'] ?? '').toString(),
        energy: (j['energy'] as num?)?.toInt() ?? 3,
        sealed: j['sealed'] == true,
      );
}

class _VaultOrbPainter extends CustomPainter {
  _VaultOrbPainter({required this.colors, required this.pulse, required this.orbit});

  final List<Color> colors;
  final double pulse;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    final radius = size.shortestSide * 0.32;
    for (var i = 3; i >= 1; i--) {
      canvas.drawCircle(
        c,
        radius + i * 7 + pulse * 4,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: 0.12 * i),
      );
    }
    canvas.drawCircle(
      c,
      radius,
      Paint()
        ..shader = RadialGradient(
          colors: [
            Colors.white.withValues(alpha: 0.55),
            colors.first.withValues(alpha: 0.85),
            colors.last.withValues(alpha: 0.55),
          ],
        ).createShader(Rect.fromCircle(center: c, radius: radius)),
    );
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: radius + 12),
      -math.pi / 2 + orbit * math.pi * 2,
      math.pi * 1.35,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.4
        ..color = colors.first.withValues(alpha: 0.9),
    );
  }

  @override
  bool shouldRepaint(covariant _VaultOrbPainter old) => old.pulse != pulse || old.orbit != orbit;
}

class _VaultBackdropPainter extends CustomPainter {
  _VaultBackdropPainter({
    required this.colors,
    required this.spin,
    required this.wave,
    required this.boot,
  });

  final List<Color> colors;
  final double spin;
  final double wave;
  final double boot;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height * 0.38);
    for (var i = 1; i <= 5; i++) {
      canvas.drawCircle(
        c,
        40.0 * i + wave * 18,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = colors.first.withValues(alpha: (0.12 / i) * boot),
      );
    }
    final grid = Paint()
      ..color = Colors.white.withValues(alpha: 0.04 * boot)
      ..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 28) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 28) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: 150),
      spin * math.pi * 2,
      1.4,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = colors.last.withValues(alpha: 0.45 * boot),
    );
  }

  @override
  bool shouldRepaint(covariant _VaultBackdropPainter old) =>
      old.spin != spin || old.wave != wave || old.boot != boot;
}
