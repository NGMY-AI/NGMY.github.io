import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_helper_ai_limit.dart';

const _accent = Color(0xFF00B25A);
const _warn = Color(0xFFF59E0B);
const _warnDeep = Color(0xFFEA580C);

/// Premium warning when the user has exactly 3 NGMY Helper messages left today.
Future<void> showNgmyHelperThreeLeftPopup(
  BuildContext context, {
  required String userEmail,
  required int remaining,
  required int dailyLimit,
  VoidCallback? onBrowseHelpTopics,
}) async {
  if (remaining != 3 || dailyLimit <= 0) return;
  final already = await NgmyHelperAiLimit.wasThreeLeftPopupShown(userEmail);
  if (already) return;
  await NgmyHelperAiLimit.markThreeLeftPopupShown(userEmail);

  if (!context.mounted) return;
  final overlay = Overlay.of(context, rootOverlay: true);
  late OverlayEntry entry;
  entry = OverlayEntry(
    builder: (ctx) => _HelperThreeLeftOverlay(
      remaining: remaining,
      dailyLimit: dailyLimit,
      onBrowseHelpTopics: onBrowseHelpTopics,
      onDismiss: () => entry.remove(),
    ),
  );
  overlay.insert(entry);
}

class _HelperThreeLeftOverlay extends StatefulWidget {
  const _HelperThreeLeftOverlay({
    required this.remaining,
    required this.dailyLimit,
    required this.onDismiss,
    this.onBrowseHelpTopics,
  });

  final int remaining;
  final int dailyLimit;
  final VoidCallback? onBrowseHelpTopics;
  final VoidCallback onDismiss;

  @override
  State<_HelperThreeLeftOverlay> createState() => _HelperThreeLeftOverlayState();
}

class _HelperThreeLeftOverlayState extends State<_HelperThreeLeftOverlay> with TickerProviderStateMixin {
  late final AnimationController _enter;
  late final AnimationController _pulse;
  late final AnimationController _orbit;
  late final AnimationController _count;

  @override
  void initState() {
    super.initState();
    _enter = AnimationController(vsync: this, duration: const Duration(milliseconds: 820))..forward();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
    _orbit = AnimationController(vsync: this, duration: const Duration(seconds: 9))..repeat();
    _count = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..forward();
  }

  @override
  void dispose() {
    _enter.dispose();
    _pulse.dispose();
    _orbit.dispose();
    _count.dispose();
    super.dispose();
  }

  void _dismiss() {
    _enter.reverse().then((_) {
      if (mounted) widget.onDismiss();
    });
  }

  @override
  Widget build(BuildContext context) {
    final w = math.min(MediaQuery.sizeOf(context).width - 32, 360.0);
    return Material(
      color: Colors.black.withValues(alpha: 0.82),
      child: GestureDetector(
        onTap: _dismiss,
        child: Stack(
          children: [
            ...List.generate(18, (i) {
              return AnimatedBuilder(
                animation: _orbit,
                builder: (_, __) {
                  final t = _orbit.value * math.pi * 2 + i * 0.55;
                  final x = MediaQuery.sizeOf(context).width * 0.5 + math.cos(t) * (120 + i * 8);
                  final y = MediaQuery.sizeOf(context).height * 0.42 + math.sin(t * 1.3) * (90 + i * 6);
                  return Positioned(
                    left: x,
                    top: y,
                    child: Opacity(
                      opacity: 0.25 + (math.sin(t) + 1) * 0.2,
                      child: Icon(
                        i.isEven ? Icons.auto_awesome_rounded : Icons.bolt_rounded,
                        size: 10 + (i % 4) * 2,
                        color: i.isEven ? _warn : _accent,
                      ),
                    ),
                  );
                },
              );
            }),
            Center(
              child: GestureDetector(
                onTap: () {},
                child: AnimatedBuilder(
                  animation: _enter,
                  builder: (context, child) {
                    final scale = Curves.elasticOut.transform(_enter.value.clamp(0.0, 1.0));
                    final tilt = math.sin(_enter.value * math.pi) * 0.08;
                    return Transform.scale(
                      scale: 0.5 + scale * 0.5,
                      child: Transform(
                        alignment: Alignment.center,
                        transform: Matrix4.identity()
                          ..setEntry(3, 2, 0.0028)
                          ..rotateY(tilt)
                          ..rotateX(0.12),
                        child: child,
                      ),
                    );
                  },
                  child: Container(
                    width: w,
                    padding: const EdgeInsets.fromLTRB(22, 26, 22, 22),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(28),
                      gradient: const LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [Color(0xFF1E293B), Color(0xFF0F172A), Color(0xFF14532D)],
                      ),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.22), width: 1.5),
                      boxShadow: [
                        BoxShadow(color: _warn.withValues(alpha: 0.35), blurRadius: 40, spreadRadius: 2),
                        BoxShadow(color: _accent.withValues(alpha: 0.25), blurRadius: 28, offset: const Offset(0, 12)),
                      ],
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        AnimatedBuilder(
                          animation: Listenable.merge([_pulse, _count]),
                          builder: (_, __) {
                            final glow = 0.55 + _pulse.value * 0.45;
                            return Stack(
                              alignment: Alignment.center,
                              children: [
                                Container(
                                  width: 108,
                                  height: 108,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    boxShadow: [
                                      BoxShadow(color: _warn.withValues(alpha: glow * 0.5), blurRadius: 36, spreadRadius: 6),
                                    ],
                                  ),
                                ),
                                SizedBox(
                                  width: 96,
                                  height: 96,
                                  child: CircularProgressIndicator(
                                    value: widget.remaining / widget.dailyLimit,
                                    strokeWidth: 6,
                                    backgroundColor: Colors.white.withValues(alpha: 0.08),
                                    color: _warn,
                                  ),
                                ),
                                Text(
                                  '${widget.remaining}',
                                  style: TextStyle(
                                    fontSize: 38,
                                    fontWeight: FontWeight.w900,
                                    color: Colors.white,
                                    shadows: [Shadow(color: _warn.withValues(alpha: glow), blurRadius: 16)],
                                  ),
                                ),
                              ],
                            );
                          },
                        ),
                        const SizedBox(height: 14),
                        ShaderMask(
                          shaderCallback: (bounds) => const LinearGradient(
                            colors: [_warn, Color(0xFFFDE68A), _warnDeep],
                          ).createShader(bounds),
                          child: const Text(
                            '3 Messages Left',
                            style: TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.w900,
                              letterSpacing: 0.4,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        const SizedBox(height: 10),
                        Text(
                          'You have 3 NGMY Helper AI messages left in your 24-hour window. '
                          'When you reach zero, Help Topics opens automatically until your limit resets.',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white.withValues(alpha: 0.88),
                            fontSize: 13.5,
                            height: 1.45,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            _chip(Icons.schedule_rounded, 'Resets in 24h'),
                            const SizedBox(width: 8),
                            _chip(Icons.menu_book_rounded, 'Help Topics ready'),
                          ],
                        ),
                        const SizedBox(height: 18),
                        Row(
                          children: [
                            if (widget.onBrowseHelpTopics != null)
                              Expanded(
                                child: OutlinedButton(
                                  onPressed: () {
                                    widget.onDismiss();
                                    widget.onBrowseHelpTopics?.call();
                                  },
                                  style: OutlinedButton.styleFrom(
                                    foregroundColor: Colors.white70,
                                    side: BorderSide(color: Colors.white.withValues(alpha: 0.35)),
                                    padding: const EdgeInsets.symmetric(vertical: 13),
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                  child: const Text('Browse Topics', style: TextStyle(fontWeight: FontWeight.w700)),
                                ),
                              ),
                            if (widget.onBrowseHelpTopics != null) const SizedBox(width: 10),
                            Expanded(
                              flex: widget.onBrowseHelpTopics != null ? 1 : 2,
                              child: FilledButton(
                                onPressed: _dismiss,
                                style: FilledButton.styleFrom(
                                  backgroundColor: _accent,
                                  foregroundColor: Colors.white,
                                  padding: const EdgeInsets.symmetric(vertical: 13),
                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  elevation: 6,
                                  shadowColor: _accent.withValues(alpha: 0.5),
                                ),
                                child: const Text('Got it — keep chatting', style: TextStyle(fontWeight: FontWeight.w800)),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _chip(IconData icon, String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.08),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 13, color: _warn),
          const SizedBox(width: 5),
          Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 10, fontWeight: FontWeight.w700)),
        ],
      ),
    );
  }
}
