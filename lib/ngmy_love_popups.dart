import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Full-screen 3D-style love match result (~4 seconds).
Future<void> showNgmyLoveMatchPopup(
  BuildContext context, {
  required int score,
  required String message,
}) async {
  final overlay = Overlay.of(context, rootOverlay: true);
  late OverlayEntry entry;
  entry = OverlayEntry(
    builder: (ctx) => _LoveMatchPopupOverlay(
      score: score,
      message: message,
      onDone: () {
        entry.remove();
      },
    ),
  );
  overlay.insert(entry);
  await Future<void>.delayed(const Duration(seconds: 4));
  entry.remove();
}

/// Smaller romantic idea popup for Next / Keep / Date.
Future<void> showNgmyLoveIdeaPopup(
  BuildContext context, {
  required String title,
  required String emoji,
  required String idea,
  Color accent = const Color(0xFFEC4899),
}) async {
  final overlay = Overlay.of(context, rootOverlay: true);
  late OverlayEntry entry;
  entry = OverlayEntry(
    builder: (ctx) => _LoveIdeaPopupOverlay(
      title: title,
      emoji: emoji,
      idea: idea,
      accent: accent,
      onDone: () => entry.remove(),
    ),
  );
  overlay.insert(entry);
  await Future<void>.delayed(const Duration(milliseconds: 3200));
  entry.remove();
}

class _LoveMatchPopupOverlay extends StatefulWidget {
  const _LoveMatchPopupOverlay({
    required this.score,
    required this.message,
    required this.onDone,
  });

  final int score;
  final String message;
  final VoidCallback onDone;

  @override
  State<_LoveMatchPopupOverlay> createState() => _LoveMatchPopupOverlayState();
}

class _LoveMatchPopupOverlayState extends State<_LoveMatchPopupOverlay> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..forward();
    Future<void>.delayed(const Duration(seconds: 4), () {
      if (mounted) widget.onDone();
    });
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.black.withValues(alpha: 0.72),
      child: AnimatedBuilder(
        animation: _ctrl,
        builder: (context, _) {
          final scale = Curves.elasticOut.transform(_ctrl.value.clamp(0.0, 1.0));
          final t = _ctrl.value * math.pi * 2;
          return Center(
            child: Transform.scale(
              scale: 0.4 + scale * 0.6,
              child: Transform(
                alignment: Alignment.center,
                transform: Matrix4.identity()
                  ..setEntry(3, 2, 0.003)
                  ..rotateY(math.sin(t) * 0.18)
                  ..rotateX(0.22 + math.sin(t * 0.7) * 0.1),
                child: Container(
                  width: math.min(MediaQuery.sizeOf(context).width - 48, 320),
                  padding: const EdgeInsets.fromLTRB(22, 28, 22, 24),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(28),
                    gradient: const LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [Color(0xFFFB7185), Color(0xFFEC4899), Color(0xFF9F1239)],
                    ),
                    border: Border.all(color: Colors.white.withValues(alpha: 0.55), width: 2),
                    boxShadow: [
                      BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.65), blurRadius: 40, spreadRadius: 4),
                      BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 24, offset: const Offset(0, 14)),
                    ],
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text('💘', style: TextStyle(fontSize: 36)),
                      const SizedBox(height: 8),
                      Text(
                        '${widget.score}%',
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: 56,
                          height: 1,
                          shadows: [Shadow(color: Colors.black38, blurRadius: 8)],
                        ),
                      ),
                      const SizedBox(height: 6),
                      const Text(
                        'Love Match',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16, letterSpacing: 1),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        widget.message,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontSize: 14, height: 1.35, fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _LoveIdeaPopupOverlay extends StatefulWidget {
  const _LoveIdeaPopupOverlay({
    required this.title,
    required this.emoji,
    required this.idea,
    required this.accent,
    required this.onDone,
  });

  final String title;
  final String emoji;
  final String idea;
  final Color accent;
  final VoidCallback onDone;

  @override
  State<_LoveIdeaPopupOverlay> createState() => _LoveIdeaPopupOverlayState();
}

class _LoveIdeaPopupOverlayState extends State<_LoveIdeaPopupOverlay> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 550))..forward();
    Future<void>.delayed(const Duration(milliseconds: 3200), () {
      if (mounted) widget.onDone();
    });
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Material(
        color: Colors.transparent,
        child: AnimatedBuilder(
          animation: _ctrl,
          builder: (context, _) {
            final slide = Curves.easeOutBack.transform(_ctrl.value);
            return Align(
              alignment: Alignment.topCenter,
              child: Padding(
                padding: EdgeInsets.only(top: MediaQuery.paddingOf(context).top + 72),
                child: Transform.translate(
                  offset: Offset(0, (1 - slide) * -40),
                  child: Opacity(
                    opacity: _ctrl.value,
                    child: Container(
                      margin: const EdgeInsets.symmetric(horizontal: 22),
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(
                        color: const Color(0xFF1A1020).withValues(alpha: 0.94),
                        borderRadius: BorderRadius.circular(18),
                        border: Border.all(color: widget.accent.withValues(alpha: 0.65), width: 1.5),
                        boxShadow: [
                          BoxShadow(color: widget.accent.withValues(alpha: 0.4), blurRadius: 20),
                        ],
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(widget.emoji, style: const TextStyle(fontSize: 28)),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(widget.title, style: TextStyle(color: widget.accent, fontWeight: FontWeight.w900, fontSize: 13)),
                                const SizedBox(height: 4),
                                Text(widget.idea, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.35)),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
