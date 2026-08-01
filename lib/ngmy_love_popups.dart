import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_offline_icons.dart';

const _lovePink = Color(0xFFEC4899);
const _loveDeep = Color(0xFF9F1239);

/// Full-screen love match result (~7 seconds) with percentage.
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
      onDone: () => entry.remove(),
    ),
  );
  overlay.insert(entry);
  await Future<void>.delayed(const Duration(seconds: 7));
  entry.remove();
}

/// Compact romantic idea toast — frame fits the text.
Future<void> showNgmyLoveIdeaPopup(
  BuildContext context, {
  required String title,
  required String emoji,
  required String idea,
  Color accent = _lovePink,
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
  await Future<void>.delayed(const Duration(milliseconds: 4500));
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
    Future<void>.delayed(const Duration(seconds: 7), () {
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
                      colors: [Color(0xFFFB7185), _lovePink, _loveDeep],
                    ),
                    border: Border.all(color: Colors.white.withValues(alpha: 0.55), width: 2),
                    boxShadow: [
                      BoxShadow(color: _lovePink.withValues(alpha: 0.65), blurRadius: 40, spreadRadius: 4),
                      BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 24, offset: const Offset(0, 14)),
                    ],
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const NgmyOfflineEmoji('💘', fontSize: 36),
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
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 480))..forward();
    Future<void>.delayed(const Duration(milliseconds: 4500), () {
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
    final maxW = MediaQuery.sizeOf(context).width * 0.88;

    return IgnorePointer(
      child: Material(
        color: Colors.transparent,
        child: AnimatedBuilder(
          animation: _ctrl,
          builder: (context, _) {
            final slide = Curves.easeOutBack.transform(_ctrl.value);
            return Align(
              alignment: Alignment.center,
              child: Transform.scale(
                scale: 0.85 + slide * 0.15,
                child: Opacity(
                  opacity: _ctrl.value,
                  child: Container(
                    constraints: BoxConstraints(maxWidth: maxW),
                    margin: const EdgeInsets.symmetric(horizontal: 20),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [
                          const Color(0xFF2A1528).withValues(alpha: 0.97),
                          const Color(0xFF1A1020).withValues(alpha: 0.97),
                        ],
                      ),
                      border: Border.all(color: widget.accent.withValues(alpha: 0.75), width: 1.2),
                      boxShadow: [
                        BoxShadow(color: widget.accent.withValues(alpha: 0.35), blurRadius: 16, spreadRadius: 0),
                      ],
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        NgmyOfflineEmoji(widget.emoji, fontSize: 22),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                widget.title,
                                style: TextStyle(color: widget.accent, fontWeight: FontWeight.w800, fontSize: 12),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                widget.idea,
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 15,
                                  height: 1.35,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
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
