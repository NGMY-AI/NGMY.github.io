import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';

/// Premium dialog when user taps clock-in without an active investment plan.
class NgmyClockInInvestmentDialog extends StatefulWidget {
  const NgmyClockInInvestmentDialog({super.key, this.onGoToInvest});

  final VoidCallback? onGoToInvest;

  static Future<void> show(BuildContext context, {VoidCallback? onGoToInvest}) {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      barrierColor: Colors.black.withValues(alpha: 0.78),
      builder: (ctx) => NgmyClockInInvestmentDialog(onGoToInvest: onGoToInvest),
    );
  }

  @override
  State<NgmyClockInInvestmentDialog> createState() => _NgmyClockInInvestmentDialogState();
}

class _NgmyClockInInvestmentDialogState extends State<NgmyClockInInvestmentDialog> with SingleTickerProviderStateMixin {
  late final AnimationController _pulseCtrl;

  @override
  void initState() {
    super.initState();
    _pulseCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400));
    if (!ngmyPreferLightGraphics) _pulseCtrl.repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulseCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const accent = Color(0xFF22C55E);
    const accent2 = Color(0xFF10B981);
    const gold = Color(0xFFFBBF24);

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 22, vertical: 24),
      child: AnimatedBuilder(
        animation: _pulseCtrl,
        builder: (context, _) {
          final glow = ngmyPreferLightGraphics ? 0.32 : 0.24 + (_pulseCtrl.value * 0.28);
          return Container(
            padding: const EdgeInsets.fromLTRB(22, 24, 22, 20),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(28),
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Color(0xFF04120C), Color(0xFF064E3B), Color(0xFF0F172A)],
              ),
              boxShadow: [
                BoxShadow(color: accent.withValues(alpha: glow), blurRadius: 30, spreadRadius: 1),
                BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 24, offset: const Offset(0, 12)),
              ],
              border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Stack(
                  alignment: Alignment.center,
                  children: [
                    Container(
                      width: 88,
                      height: 88,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: RadialGradient(
                          colors: [accent.withValues(alpha: 0.35 + glow * 0.15), Colors.transparent],
                        ),
                      ),
                    ),
                    Container(
                      width: 72,
                      height: 72,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [Color(0xFF34D399), Color(0xFF059669)],
                        ),
                        border: Border.all(color: gold.withValues(alpha: 0.75), width: 2),
                        boxShadow: [
                          BoxShadow(color: accent.withValues(alpha: 0.45), blurRadius: 16, offset: const Offset(0, 4)),
                        ],
                      ),
                      child: const Icon(Icons.trending_up_rounded, color: Colors.white, size: 36),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                const Text(
                  'Investment Plan Required',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white, fontSize: 21, fontWeight: FontWeight.w900, letterSpacing: 0.2),
                ),
                const SizedBox(height: 8),
                Text(
                  'Clock-in earnings unlock after you activate a plan. Invest once, then tap the clock each weekday before noon.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 13, height: 1.45, fontWeight: FontWeight.w500),
                ),
                const SizedBox(height: 18),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
                  decoration: BoxDecoration(
                    color: Colors.black.withValues(alpha: 0.28),
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: accent.withValues(alpha: 0.38)),
                  ),
                  child: Column(
                    children: [
                      _benefitRow(Icons.schedule_rounded, 'Weekday clock-in before 12:00 PM'),
                      const SizedBox(height: 8),
                      _benefitRow(Icons.payments_rounded, 'Daily ROI paid to your balance'),
                      const SizedBox(height: 8),
                      _benefitRow(Icons.bolt_rounded, 'One tap after your plan is active'),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton.icon(
                    onPressed: () {
                      Navigator.pop(context);
                      widget.onGoToInvest?.call();
                    },
                    icon: const Icon(Icons.account_balance_wallet_rounded, size: 20),
                    label: const Text('View Investment Plans', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14)),
                    style: FilledButton.styleFrom(
                      backgroundColor: accent2,
                      foregroundColor: Colors.white,
                      minimumSize: const Size(double.infinity, 48),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text('Maybe later', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w700)),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _benefitRow(IconData icon, String text) {
    return Row(
      children: [
        Container(
          width: 30,
          height: 30,
          decoration: BoxDecoration(
            color: const Color(0xFF22C55E).withValues(alpha: 0.16),
            borderRadius: BorderRadius.circular(9),
          ),
          child: Icon(icon, size: 16, color: const Color(0xFF6EE7B7)),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            text,
            style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 12, fontWeight: FontWeight.w600),
          ),
        ),
      ],
    );
  }
}
