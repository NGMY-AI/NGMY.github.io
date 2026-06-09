import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'generated/ngmy_fortune.g.dart';
import 'ngmy_fun_games_limits.dart';

const _confGold = Color(0xFFF59E0B);
const _confDeep = Color(0xFFB45309);
const _brainViolet = Color(0xFF8B5CF6);
const _fortuneCyan = Color(0xFF06B6D4);

/// Confidence quote popup — shown on app resume and after daily reveal.
Future<void> showNgmyConfidencePopup(
  BuildContext context, {
  required String quote,
}) async {
  final overlay = Overlay.of(context, rootOverlay: true);
  late OverlayEntry entry;
  entry = OverlayEntry(
    builder: (ctx) => _ConfidencePopupOverlay(
      quote: quote,
      onDismiss: () => entry.remove(),
    ),
  );
  overlay.insert(entry);
}

/// Fortune reveal popup with crystal-ball style animation.
Future<void> showNgmyFortunePopup(BuildContext context, {required NgmyFortuneItem fortune}) async {
  final overlay = Overlay.of(context, rootOverlay: true);
  late OverlayEntry entry;
  entry = OverlayEntry(
    builder: (ctx) => _FortunePopupOverlay(fortune: fortune, onDismiss: () => entry.remove()),
  );
  overlay.insert(entry);
}

class _ConfidencePopupOverlay extends StatefulWidget {
  const _ConfidencePopupOverlay({
    required this.quote,
    required this.onDismiss,
  });

  final String quote;
  final VoidCallback onDismiss;

  @override
  State<_ConfidencePopupOverlay> createState() => _ConfidencePopupOverlayState();
}

class _ConfidencePopupOverlayState extends State<_ConfidencePopupOverlay> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..forward();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.black.withValues(alpha: 0.78),
      child: GestureDetector(
        onTap: widget.onDismiss,
        child: AnimatedBuilder(
          animation: _ctrl,
          builder: (context, _) {
            final scale = Curves.elasticOut.transform(_ctrl.value.clamp(0.0, 1.0));
            final t = _ctrl.value * math.pi * 2;
            return Center(
              child: Transform.scale(
                scale: 0.45 + scale * 0.55,
                child: Transform(
                  alignment: Alignment.center,
                  transform: Matrix4.identity()
                    ..setEntry(3, 2, 0.003)
                    ..rotateY(math.sin(t) * 0.22)
                    ..rotateX(0.18),
                  child: Container(
                    width: math.min(MediaQuery.sizeOf(context).width - 40, 340),
                    padding: const EdgeInsets.fromLTRB(24, 30, 24, 26),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(28),
                      gradient: const LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [Color(0xFFFBBF24), _confGold, _confDeep],
                      ),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.55), width: 2),
                      boxShadow: [
                        BoxShadow(color: _confGold.withValues(alpha: 0.6), blurRadius: 36, spreadRadius: 4),
                      ],
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Text('💪', style: TextStyle(fontSize: 40)),
                        const SizedBox(height: 8),
                        const Text(
                          'Daily Confidence Boost',
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16, letterSpacing: 0.5),
                        ),
                        const SizedBox(height: 14),
                        Text(
                          widget.quote,
                          textAlign: TextAlign.center,
                          style: const TextStyle(color: Colors.white, fontSize: 15, height: 1.45, fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(height: 16),
                        Text(
                          'Tap anywhere to close',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 11),
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

class _FortunePopupOverlay extends StatefulWidget {
  const _FortunePopupOverlay({required this.fortune, required this.onDismiss});

  final NgmyFortuneItem fortune;
  final VoidCallback onDismiss;

  @override
  State<_FortunePopupOverlay> createState() => _FortunePopupOverlayState();
}

class _FortunePopupOverlayState extends State<_FortunePopupOverlay> with TickerProviderStateMixin {
  late final AnimationController _ctrl;
  late final AnimationController _orbCtrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 700))..forward();
    _orbCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    _orbCtrl.dispose();
    super.dispose();
  }

  Color _auraColor() {
    return switch (widget.fortune.auraColor) {
      'gold' => const Color(0xFFFBBF24),
      'emerald' => const Color(0xFF10B981),
      'sapphire' => const Color(0xFF3B82F6),
      'amber' => const Color(0xFFF59E0B),
      'violet' => _brainViolet,
      'crimson' => const Color(0xFFEF4444),
      'silver' => const Color(0xFF94A3B8),
      _ => _fortuneCyan,
    };
  }

  @override
  Widget build(BuildContext context) {
    final aura = _auraColor();
    return Material(
      color: Colors.black.withValues(alpha: 0.82),
      child: GestureDetector(
        onTap: widget.onDismiss,
        child: AnimatedBuilder(
          animation: Listenable.merge([_ctrl, _orbCtrl]),
          builder: (context, _) {
            final scale = Curves.easeOutBack.transform(_ctrl.value);
            final t = _orbCtrl.value * math.pi * 2;
            return Center(
              child: Opacity(
                opacity: _ctrl.value,
                child: Transform.scale(
                  scale: 0.7 + scale * 0.3,
                  child: Container(
                    width: math.min(MediaQuery.sizeOf(context).width - 36, 360),
                    padding: const EdgeInsets.fromLTRB(22, 26, 22, 22),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(26),
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [const Color(0xFF0F172A), aura.withValues(alpha: 0.35)],
                      ),
                      border: Border.all(color: aura.withValues(alpha: 0.75), width: 1.5),
                      boxShadow: [BoxShadow(color: aura.withValues(alpha: 0.45), blurRadius: 30, spreadRadius: 2)],
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Transform(
                          alignment: Alignment.center,
                          transform: Matrix4.identity()
                            ..setEntry(3, 2, 0.004)
                            ..rotateY(math.sin(t) * 0.5)
                            ..rotateX(0.35 + math.cos(t * 0.8) * 0.15),
                          child: Container(
                            width: 88,
                            height: 88,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: RadialGradient(
                                colors: [Colors.white.withValues(alpha: 0.9), aura, aura.withValues(alpha: 0.4), Colors.transparent],
                                stops: const [0.0, 0.35, 0.7, 1.0],
                              ),
                              boxShadow: [BoxShadow(color: aura.withValues(alpha: 0.6), blurRadius: 24)],
                            ),
                            child: const Center(child: Text('🔮', style: TextStyle(fontSize: 36))),
                          ),
                        ),
                        const SizedBox(height: 12),
                        Text(
                          widget.fortune.mood,
                          style: TextStyle(color: aura, fontWeight: FontWeight.w900, fontSize: 14, letterSpacing: 1.2),
                        ),
                        const SizedBox(height: 10),
                        Text(
                          widget.fortune.text,
                          textAlign: TextAlign.center,
                          style: const TextStyle(color: Colors.white, fontSize: 15, height: 1.4, fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(height: 14),
                        Text(
                          'Lucky: ${widget.fortune.luckyNumbers.join(' · ')}',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, fontWeight: FontWeight.w700),
                        ),
                        const SizedBox(height: 10),
                        Text('Tap to close', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10)),
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

/// Called on app resume — shows today's confidence quote if user unlocked it today.
Future<void> ngmyMaybeShowConfidenceResumePopup(BuildContext context) async {
  if (!context.mounted) return;
  final quote = await NgmyFunGamesResumeGate.todayQuoteIfAny();
  if (quote == null || !context.mounted) return;
  await showNgmyConfidencePopup(
    context,
    quote: quote.text,
  );
}

/// Prevents duplicate popups within the same resume burst.
class NgmyFunGamesResumeGate {
  static DateTime? _lastPopupAt;
  static String? _cachedQuote;

  static Future<({String text})?> todayQuoteIfAny() async {
    final has = await NgmyFunGamesLimits.hasConfidenceTodayQuote();
    if (!has) return null;
    final quote = await NgmyFunGamesLimits.todayConfidenceQuote();
    if (quote == null || quote.isEmpty) return null;
    final now = DateTime.now();
    if (_lastPopupAt != null && now.difference(_lastPopupAt!) < const Duration(seconds: 8)) {
      return null;
    }
    if (_cachedQuote == quote && _lastPopupAt != null && now.difference(_lastPopupAt!) < const Duration(minutes: 2)) {
      return null;
    }
    _lastPopupAt = now;
    _cachedQuote = quote;
    return (text: quote);
  }
}
