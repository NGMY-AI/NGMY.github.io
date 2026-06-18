import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';

/// Gate after the one free game — dialog or full game-center page with missed check-in days.
class NgmyGameInvestmentPaywall extends StatefulWidget {
  const NgmyGameInvestmentPaywall({
    super.key,
    this.onGoToInvest,
    this.missedDays = const [],
    this.fullPage = false,
    this.onBack,
  });

  final VoidCallback? onGoToInvest;
  final List<String> missedDays;
  final bool fullPage;
  final VoidCallback? onBack;

  static Future<void> show(
    BuildContext context, {
    VoidCallback? onGoToInvest,
    List<String> missedDays = const [],
  }) {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      barrierColor: Colors.black.withValues(alpha: 0.88),
      builder: (_) => NgmyGameInvestmentPaywall(
        onGoToInvest: onGoToInvest,
        missedDays: missedDays,
      ),
    );
  }

  static String formatMissedDay(String raw) {
    final dk = raw.trim();
    final parts = dk.split('-');
    if (parts.length == 3) {
      final y = int.tryParse(parts[0]);
      final m = int.tryParse(parts[1]);
      final d = int.tryParse(parts[2]);
      if (y != null && m != null && d != null) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        final label = m >= 1 && m <= 12 ? months[m - 1] : parts[1];
        return '$label $d, $y';
      }
    }
    return dk;
  }

  @override
  State<NgmyGameInvestmentPaywall> createState() => _NgmyGameInvestmentPaywallState();
}

class _NgmyGameInvestmentPaywallState extends State<NgmyGameInvestmentPaywall>
    with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200));
    if (!ngmyPreferLightGraphics) _pulse.repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  Widget _body(BuildContext context) {
    const purple = Color(0xFF8B5CF6);
    const pink = Color(0xFFEC4899);
    const cyan = Color(0xFF22D3EE);
    const gold = Color(0xFFFBBF24);
    const danger = Color(0xFFF87171);
    final missed = widget.missedDays.map(NgmyGameInvestmentPaywall.formatMissedDay).toList();

    return AnimatedBuilder(
      animation: _pulse,
      builder: (context, _) {
        final glow = ngmyPreferLightGraphics ? 0.35 : 0.22 + (_pulse.value * 0.3);
        final card = Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(widget.fullPage ? 0 : 30),
            gradient: const LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFF0B0618), Color(0xFF1E1035), Color(0xFF0F172A)],
            ),
            border: widget.fullPage ? null : Border.all(color: purple.withValues(alpha: 0.5)),
            boxShadow: widget.fullPage
                ? null
                : [
                    BoxShadow(color: purple.withValues(alpha: glow), blurRadius: 36, spreadRadius: 2),
                    BoxShadow(color: pink.withValues(alpha: glow * 0.5), blurRadius: 24),
                  ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(widget.fullPage ? 0 : 30),
            child: Stack(
              children: [
                Positioned(
                  top: -40,
                  right: -30,
                  child: Container(
                    width: 140,
                    height: 140,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(colors: [cyan.withValues(alpha: 0.22), Colors.transparent]),
                    ),
                  ),
                ),
                Positioned(
                  bottom: -50,
                  left: -20,
                  child: Container(
                    width: 160,
                    height: 160,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(colors: [pink.withValues(alpha: 0.18), Colors.transparent]),
                    ),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.fromLTRB(22, widget.fullPage ? 18 : 26, 22, widget.fullPage ? 28 : 20),
                  child: Column(
                    mainAxisSize: widget.fullPage ? MainAxisSize.max : MainAxisSize.min,
                    children: [
                      if (widget.fullPage) const SizedBox(height: 8),
                      Container(
                        width: 88,
                        height: 88,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: const LinearGradient(colors: [purple, pink]),
                          border: Border.all(color: gold.withValues(alpha: 0.8), width: 2.5),
                          boxShadow: [BoxShadow(color: purple.withValues(alpha: 0.55), blurRadius: 18, offset: const Offset(0, 6))],
                        ),
                        child: const Icon(Icons.videogame_asset_rounded, color: Colors.white, size: 42),
                      ),
                      const SizedBox(height: 16),
                      ShaderMask(
                        shaderCallback: (r) => const LinearGradient(colors: [Colors.white, cyan]).createShader(r),
                        child: const Text(
                          'Investment Required',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900, letterSpacing: 0.3),
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        widget.fullPage
                            ? 'Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.'
                            : 'Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 13, height: 1.45, fontWeight: FontWeight.w500),
                      ),
                      if (missed.isNotEmpty) ...[
                        const SizedBox(height: 16),
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            color: danger.withValues(alpha: 0.12),
                            borderRadius: BorderRadius.circular(18),
                            border: Border.all(color: danger.withValues(alpha: 0.45)),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Icon(Icons.event_busy_rounded, color: danger.withValues(alpha: 0.95), size: 20),
                                  const SizedBox(width: 8),
                                  Text(
                                    'Missed weekday check-ins (${missed.length}/3 this month)',
                                    style: TextStyle(color: danger.withValues(alpha: 0.95), fontWeight: FontWeight.w900, fontSize: 13),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 10),
                              Text(
                                'Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 11.5, height: 1.4),
                              ),
                              const SizedBox(height: 10),
                              ...missed.map(
                                (day) => Padding(
                                  padding: const EdgeInsets.only(bottom: 6),
                                  child: Row(
                                    children: [
                                      Icon(Icons.calendar_today_rounded, size: 14, color: danger.withValues(alpha: 0.85)),
                                      const SizedBox(width: 8),
                                      Expanded(
                                        child: Text(
                                          day,
                                          style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontWeight: FontWeight.w700, fontSize: 13),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                      const SizedBox(height: 18),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: Colors.black.withValues(alpha: 0.35),
                          borderRadius: BorderRadius.circular(18),
                          border: Border.all(color: purple.withValues(alpha: 0.35)),
                        ),
                        child: Column(
                          children: [
                            _row(Icons.bolt_rounded, 'Unlimited games with an active plan', cyan),
                            const SizedBox(height: 8),
                            _row(Icons.schedule_rounded, 'Weekday check-ins grow your balance', purple),
                            const SizedBox(height: 8),
                            _row(Icons.emoji_events_rounded, 'Compete, bet, and earn points', gold),
                          ],
                        ),
                      ),
                      const SizedBox(height: 20),
                      SizedBox(
                        width: double.infinity,
                        child: DecoratedBox(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(16),
                            gradient: const LinearGradient(colors: [purple, pink]),
                            boxShadow: [BoxShadow(color: pink.withValues(alpha: 0.45), blurRadius: 16, offset: const Offset(0, 6))],
                          ),
                          child: FilledButton.icon(
                            onPressed: () {
                              if (widget.fullPage) {
                                widget.onGoToInvest?.call();
                              } else {
                                Navigator.pop(context);
                                widget.onGoToInvest?.call();
                              }
                            },
                            style: FilledButton.styleFrom(
                              backgroundColor: Colors.transparent,
                              shadowColor: Colors.transparent,
                              foregroundColor: Colors.white,
                              minimumSize: const Size(double.infinity, 52),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                            ),
                            icon: const Icon(Icons.rocket_launch_rounded, size: 22),
                            label: const Text('Invest & Play', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextButton(
                        onPressed: () {
                          if (widget.fullPage) {
                            widget.onBack?.call();
                          } else {
                            Navigator.pop(context);
                          }
                        },
                        child: Text(
                          widget.fullPage ? 'Back' : 'Maybe later',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontWeight: FontWeight.w700),
                        ),
                      ),
                      if (widget.fullPage) const Spacer(),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );

        if (widget.fullPage) {
          return card;
        }
        return Dialog(
          backgroundColor: Colors.transparent,
          insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 20),
          child: card,
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    if (widget.fullPage) {
      return Scaffold(
        backgroundColor: const Color(0xFF0B0618),
        body: SafeArea(child: _body(context)),
      );
    }
    return _body(context);
  }

  Widget _row(IconData icon, String text, Color color) {
    return Row(
      children: [
        Container(
          width: 32,
          height: 32,
          decoration: BoxDecoration(
            color: color.withValues(alpha: 0.16),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Icon(icon, size: 17, color: color),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            text,
            style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 12, fontWeight: FontWeight.w600),
          ),
        ),
      ],
    );
  }
}
