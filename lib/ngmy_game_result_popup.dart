import 'dart:math' as math;
import 'package:flutter/material.dart';

import 'ngmy_game_nav.dart';

/// Win/lose popup with 3D celebration, particles, Go Back & Play Again.
Future<void> showNgmyGameResultPopup(
  BuildContext context, {
  required bool win,
  required String title,
  String? subtitle,
  String? outcomeLabel,
  required VoidCallback onGoBack,
  required VoidCallback onPlayAgain,
}) {
  return showGeneralDialog<void>(
    context: context,
    useRootNavigator: true,
    barrierDismissible: false,
    barrierLabel: win ? 'Win' : 'Lose',
    barrierColor: Colors.black54,
    transitionDuration: const Duration(milliseconds: 300),
    pageBuilder: (ctx, _, __) => _GameResultDialog(
      win: win,
      title: title,
      subtitle: subtitle,
      outcomeLabel: outcomeLabel,
      onGoBack: () {
        Navigator.pop(ctx);
        ngmyCloseDialogThen(onGoBack);
      },
      onPlayAgain: () {
        Navigator.pop(ctx);
        ngmyCloseDialogThen(onPlayAgain);
      },
    ),
  );
}

class _GameResultDialog extends StatefulWidget {
  final bool win;
  final String title;
  final String? subtitle;
  final String? outcomeLabel;
  final VoidCallback onGoBack;
  final VoidCallback onPlayAgain;

  const _GameResultDialog({
    required this.win,
    required this.title,
    this.subtitle,
    this.outcomeLabel,
    required this.onGoBack,
    required this.onPlayAgain,
  });

  @override
  State<_GameResultDialog> createState() => _GameResultDialogState();
}

class _GameResultDialogState extends State<_GameResultDialog> with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;
  final math.Random _rng = math.Random();
  late List<_Particle> _particles;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(seconds: 3))..repeat();
    _particles = List.generate(28, (_) => _Particle.random(_rng));
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Material(
        color: Colors.transparent,
        child: AnimatedBuilder(
          animation: _ctrl,
          builder: (_, __) {
            for (final p in _particles) {
              p.tick(_rng);
            }
            return Stack(
              clipBehavior: Clip.none,
              alignment: Alignment.center,
              children: [
                if (widget.win)
                  ..._particles.map((p) => Positioned(
                        left: p.x,
                        top: p.y,
                        child: Opacity(
                          opacity: p.opacity,
                          child: Transform.rotate(
                            angle: p.rot,
                            child: Icon(p.icon, color: p.color, size: p.size),
                          ),
                        ),
                      )),
                Transform.scale(
                  scale: 1.0 + math.sin(_ctrl.value * math.pi * 2) * 0.02,
                  child: Container(
                    width: math.min(380, MediaQuery.of(context).size.width * 0.92),
                    margin: const EdgeInsets.all(20),
                    padding: const EdgeInsets.fromLTRB(22, 26, 22, 20),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: widget.win
                            ? [const Color(0xFF22C55E), const Color(0xFF15803D), const Color(0xFF14532D)]
                            : [const Color(0xFFEF4444), const Color(0xFFB91C1C), const Color(0xFF7F1D1D)],
                      ),
                      borderRadius: BorderRadius.circular(26),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.4), width: 2),
                      boxShadow: [
                        BoxShadow(
                          color: (widget.win ? Colors.green : Colors.red).withValues(alpha: 0.5),
                          blurRadius: 36,
                          spreadRadius: 6,
                        ),
                      ],
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        if (widget.win) _celebrationEmoji() else const Icon(Icons.sentiment_very_dissatisfied_rounded, color: Colors.white, size: 64),
                        const SizedBox(height: 14),
                        Text(
                          widget.title,
                          textAlign: TextAlign.center,
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28),
                        ),
                        if (widget.outcomeLabel != null && widget.outcomeLabel!.isNotEmpty) ...[
                          const SizedBox(height: 14),
                          const Text('YOUR NUMBER', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 3)),
                          const SizedBox(height: 8),
                          Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(vertical: 18),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(18),
                              border: Border.all(color: const Color(0xFF15803D), width: 4),
                            ),
                            child: Text(
                              widget.outcomeLabel!,
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 52, fontWeight: FontWeight.w900, color: Color(0xFF15803D)),
                            ),
                          ),
                        ],
                        if (widget.subtitle != null) ...[
                          const SizedBox(height: 12),
                          Text(widget.subtitle!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.35)),
                        ],
                        const SizedBox(height: 22),
                        Row(
                          children: [
                            Expanded(
                              child: OutlinedButton(
                                onPressed: widget.onGoBack,
                                style: OutlinedButton.styleFrom(
                                  foregroundColor: Colors.white,
                                  side: const BorderSide(color: Colors.white70, width: 2),
                                  padding: const EdgeInsets.symmetric(vertical: 14),
                                ),
                                child: const Text('Go Back', style: TextStyle(fontWeight: FontWeight.w900)),
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: FilledButton(
                                onPressed: widget.onPlayAgain,
                                style: FilledButton.styleFrom(
                                  backgroundColor: Colors.white,
                                  foregroundColor: widget.win ? const Color(0xFF15803D) : const Color(0xFFB91C1C),
                                  padding: const EdgeInsets.symmetric(vertical: 14),
                                ),
                                child: const Text('Play Again', style: TextStyle(fontWeight: FontWeight.w900)),
                              ),
                            ),
                          ],
                        ),
                      ],
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

  Widget _celebrationEmoji() {
    return SizedBox(
      height: 100,
      child: Stack(
        alignment: Alignment.center,
        clipBehavior: Clip.none,
        children: [
          Transform(
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.001)
              ..rotateX(-0.35),
            alignment: Alignment.center,
            child: Container(
              width: 88,
              height: 88,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(colors: [Colors.yellow.shade200, Colors.orange.shade700]),
                boxShadow: [
                  BoxShadow(color: Colors.orange.withValues(alpha: 0.6), blurRadius: 24, spreadRadius: 4),
                  BoxShadow(color: Colors.black.withValues(alpha: 0.3), offset: const Offset(0, 8), blurRadius: 12),
                ],
              ),
              child: const Center(child: Text('🎉', style: TextStyle(fontSize: 52, height: 1))),
            ),
          ),
        ],
      ),
    );
  }
}

class _Particle {
  double x;
  double y;
  double vy;
  double rot;
  double opacity;
  double size;
  Color color;
  IconData icon;

  _Particle({
    required this.x,
    required this.y,
    required this.vy,
    required this.rot,
    required this.opacity,
    required this.size,
    required this.color,
    required this.icon,
  });

  factory _Particle.random(math.Random rng) {
    final icons = [Icons.star_rounded, Icons.celebration_rounded, Icons.auto_awesome_rounded, Icons.circle];
    final colors = [Colors.yellow, Colors.amber, Colors.orange, Colors.white];
    return _Particle(
      x: 40 + rng.nextDouble() * 260,
      y: -20 + rng.nextDouble() * 40,
      vy: 1.5 + rng.nextDouble() * 3,
      rot: rng.nextDouble() * math.pi,
      opacity: 0.7 + rng.nextDouble() * 0.3,
      size: 12 + rng.nextDouble() * 16,
      color: colors[rng.nextInt(colors.length)],
      icon: icons[rng.nextInt(icons.length)],
    );
  }

  void tick(math.Random rng) {
    y += vy;
    rot += 0.08;
    if (y > 320) {
      y = -10;
      x = 40 + rng.nextDouble() * 260;
      vy = 1.5 + rng.nextDouble() * 3;
    }
  }
}
