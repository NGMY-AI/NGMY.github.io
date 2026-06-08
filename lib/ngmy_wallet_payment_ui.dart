import 'dart:math' as math;

import 'package:flutter/material.dart';

enum NgmyWalletPaymentTheme { standard, premium, luxury }

class NgmyWalletPaymentThemeData {
  const NgmyWalletPaymentThemeData({
    required this.header,
    required this.accent,
    required this.glow,
    required this.icon,
    required this.badge,
    required this.amountShader,
  });

  final List<Color> header;
  final List<Color> accent;
  final Color glow;
  final IconData icon;
  final String badge;
  final List<Color> amountShader;

  static NgmyWalletPaymentThemeData forTheme(NgmyWalletPaymentTheme theme) {
    switch (theme) {
      case NgmyWalletPaymentTheme.premium:
        return const NgmyWalletPaymentThemeData(
          header: [Color(0xFF1E1B4B), Color(0xFF4C1D95), Color(0xFF7C3AED)],
          accent: [Color(0xFF7C3AED), Color(0xFFA855F7)],
          glow: Color(0xFFA855F7),
          icon: Icons.workspace_premium_rounded,
          badge: 'PREMIUM',
          amountShader: [Color(0xFFE9D5FF), Color(0xFFC084FC), Color(0xFF7C3AED)],
        );
      case NgmyWalletPaymentTheme.luxury:
        return const NgmyWalletPaymentThemeData(
          header: [Color(0xFF0A0A0A), Color(0xFF1C1917), Color(0xFF422006)],
          accent: [Color(0xFFD4AF37), Color(0xFFFBBF24)],
          glow: Color(0xFFD4AF37),
          icon: Icons.diamond_rounded,
          badge: 'LUXURY',
          amountShader: [Color(0xFFFFF7D6), Color(0xFFD4AF37), Color(0xFFB8860B)],
        );
      case NgmyWalletPaymentTheme.standard:
        return const NgmyWalletPaymentThemeData(
          header: [Color(0xFF0F766E), Color(0xFF0D9488), Color(0xFF14B8A6)],
          accent: [Color(0xFF14B8A6), Color(0xFF10B981)],
          glow: Color(0xFF14B8A6),
          icon: Icons.account_balance_wallet_rounded,
          badge: 'NGMY WALLET',
          amountShader: [Color(0xFFCCFBF1), Color(0xFF14B8A6), Color(0xFF0D9488)],
        );
    }
  }
}

Future<bool> showNgmyWalletPaymentConfirm({
  required BuildContext context,
  required String title,
  required String message,
  required double amount,
  required double balance,
  NgmyWalletPaymentTheme theme = NgmyWalletPaymentTheme.standard,
}) {
  return showDialog<bool>(
    context: context,
    barrierColor: Colors.black.withValues(alpha: 0.72),
    builder: (ctx) => _NgmyWalletPaymentDialog(
      title: title,
      message: message,
      amount: amount,
      balance: balance,
      themeData: NgmyWalletPaymentThemeData.forTheme(theme),
    ),
  ).then((v) => v == true);
}

class _NgmyWalletPaymentDialog extends StatelessWidget {
  const _NgmyWalletPaymentDialog({
    required this.title,
    required this.message,
    required this.amount,
    required this.balance,
    required this.themeData,
  });

  final String title;
  final String message;
  final double amount;
  final double balance;
  final NgmyWalletPaymentThemeData themeData;

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
      child: NgmyPaymentShell(
        themeData: themeData,
        title: title,
        subtitle: message,
        child: Column(
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 18),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    Colors.black.withValues(alpha: 0.45),
                    themeData.glow.withValues(alpha: 0.12),
                  ],
                ),
                border: Border.all(color: themeData.glow.withValues(alpha: 0.45)),
                boxShadow: [BoxShadow(color: themeData.glow.withValues(alpha: 0.22), blurRadius: 18, spreadRadius: 1)],
              ),
              child: Column(
                children: [
                  Text('AMOUNT DUE', style: TextStyle(color: themeData.glow.withValues(alpha: 0.85), fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 2.2)),
                  const SizedBox(height: 8),
                  ShaderMask(
                    shaderCallback: (b) => LinearGradient(colors: themeData.amountShader).createShader(b),
                    child: Text(
                      '\$${amount.toStringAsFixed(2)}',
                      style: const TextStyle(fontSize: 44, fontWeight: FontWeight.w900, color: Colors.white, height: 1),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.06),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
                    ),
                    child: Text(
                      'Balance: \$${balance.toStringAsFixed(2)}',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(Icons.shield_rounded, size: 16, color: themeData.glow.withValues(alpha: 0.85)),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    'Charged instantly from your NGMY wallet. This payment cannot be reversed.',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11, height: 1.4),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => Navigator.pop(context, false),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.white70,
                      side: BorderSide(color: Colors.white.withValues(alpha: 0.22)),
                      padding: const EdgeInsets.symmetric(vertical: 14),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  flex: 2,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      gradient: LinearGradient(colors: themeData.accent),
                      boxShadow: [BoxShadow(color: themeData.glow.withValues(alpha: 0.45), blurRadius: 14, offset: const Offset(0, 4))],
                    ),
                    child: Material(
                      color: Colors.transparent,
                      child: InkWell(
                        onTap: () => Navigator.pop(context, true),
                        borderRadius: BorderRadius.circular(14),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              const Icon(Icons.lock_open_rounded, color: Colors.white, size: 18),
                              const SizedBox(width: 8),
                              Text('Pay \$${amount.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class NgmyPaymentShell extends StatelessWidget {
  const NgmyPaymentShell({
    required this.themeData,
    required this.title,
    required this.subtitle,
    required this.child,
  });

  final NgmyWalletPaymentThemeData themeData;
  final String title;
  final String subtitle;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(28),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(28),
          border: Border.all(color: themeData.glow.withValues(alpha: 0.35), width: 1.2),
          boxShadow: [BoxShadow(color: themeData.glow.withValues(alpha: 0.28), blurRadius: 28, spreadRadius: 2)],
        ),
        child: Material(
          color: const Color(0xFF0B0F18),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(22, 22, 22, 20),
                decoration: BoxDecoration(
                  gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: themeData.header),
                ),
                child: Column(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.12),
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.2)),
                      ),
                      child: Text(themeData.badge, style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 2)),
                    ),
                    const SizedBox(height: 14),
                    Container(
                      width: 64,
                      height: 64,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(colors: themeData.accent),
                        boxShadow: [BoxShadow(color: themeData.glow.withValues(alpha: 0.55), blurRadius: 16)],
                      ),
                      child: Icon(themeData.icon, color: Colors.white, size: 32),
                    ),
                    const SizedBox(height: 14),
                    Text(title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, height: 1.2)),
                    const SizedBox(height: 8),
                    Text(subtitle, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 13, height: 1.45)),
                  ],
                ),
              ),
              Padding(padding: const EdgeInsets.fromLTRB(18, 16, 18, 20), child: child),
            ],
          ),
        ),
      ),
    );
  }
}

class NgmyPlanOptionCard extends StatelessWidget {
  const NgmyPlanOptionCard({
    required this.themeData,
    required this.label,
    required this.price,
    required this.hint,
    required this.icon,
    required this.onTap,
  });

  final NgmyWalletPaymentThemeData themeData;
  final String label;
  final double price;
  final String hint;
  final IconData icon;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Ink(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            gradient: LinearGradient(
              colors: [Colors.white.withValues(alpha: 0.04), themeData.glow.withValues(alpha: 0.08)],
            ),
            border: Border.all(color: themeData.glow.withValues(alpha: 0.35)),
          ),
          child: Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(colors: themeData.accent),
                ),
                child: Icon(icon, color: Colors.white, size: 20),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                    Text(hint, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11)),
                  ],
                ),
              ),
              Text('\$${price.toStringAsFixed(2)}', style: TextStyle(color: themeData.glow, fontWeight: FontWeight.w900, fontSize: 16)),
            ],
          ),
        ),
      ),
    );
  }
}

Future<void> showNgmyUnlockCelebration({
  required BuildContext context,
  required NgmyWalletPaymentTheme theme,
  required String headline,
  required String subtitle,
  String footnote = 'Tap anywhere to continue',
}) {
  final themeData = NgmyWalletPaymentThemeData.forTheme(theme);
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Unlock celebration',
    barrierColor: Colors.black.withValues(alpha: 0.78),
    transitionDuration: const Duration(milliseconds: 420),
    pageBuilder: (ctx, a1, a2) => NgmyUnlockCelebrationOverlay(
      themeData: themeData,
      headline: headline,
      subtitle: subtitle,
      footnote: footnote,
    ),
    transitionBuilder: (ctx, anim, _, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack);
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(scale: Tween<double>(begin: 0.88, end: 1).animate(curved), child: child),
      );
    },
  );
}

class NgmyUnlockCelebrationOverlay extends StatefulWidget {
  const NgmyUnlockCelebrationOverlay({
    required this.themeData,
    required this.headline,
    required this.subtitle,
    required this.footnote,
  });

  final NgmyWalletPaymentThemeData themeData;
  final String headline;
  final String subtitle;
  final String footnote;

  @override
  State<NgmyUnlockCelebrationOverlay> createState() => NgmyUnlockCelebrationOverlayState();
}

class NgmyUnlockCelebrationOverlayState extends State<NgmyUnlockCelebrationOverlay> with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..forward();
    Future.delayed(const Duration(milliseconds: 2800), () {
      if (mounted) Navigator.of(context).pop();
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
      color: Colors.transparent,
      child: Stack(
        alignment: Alignment.center,
        children: [
          AnimatedBuilder(
            animation: _ctrl,
            builder: (_, __) => CustomPaint(
              painter: _CelebrationBurstPainter(progress: _ctrl.value, color: widget.themeData.glow),
              size: Size.infinite,
            ),
          ),
          ScaleTransition(
            scale: Tween<double>(begin: 0.6, end: 1).animate(CurvedAnimation(parent: _ctrl, curve: const Interval(0.0, 0.55, curve: Curves.elasticOut))),
            child: FadeTransition(
              opacity: Tween<double>(begin: 0, end: 1).animate(CurvedAnimation(parent: _ctrl, curve: const Interval(0.0, 0.35, curve: Curves.easeOut))),
              child: Container(
                margin: const EdgeInsets.symmetric(horizontal: 28),
                padding: const EdgeInsets.fromLTRB(24, 28, 24, 24),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(28),
                  gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: widget.themeData.header),
                  border: Border.all(color: widget.themeData.glow.withValues(alpha: 0.65), width: 1.5),
                  boxShadow: [BoxShadow(color: widget.themeData.glow.withValues(alpha: 0.45), blurRadius: 32, spreadRadius: 4)],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      width: 88,
                      height: 88,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(colors: widget.themeData.accent),
                        boxShadow: [BoxShadow(color: widget.themeData.glow.withValues(alpha: 0.6), blurRadius: 24)],
                      ),
                      child: Icon(widget.themeData.icon, color: Colors.white, size: 44),
                    ),
                    const SizedBox(height: 18),
                    Text(widget.headline, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26)),
                    const SizedBox(height: 8),
                    Text(widget.subtitle, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 14, fontWeight: FontWeight.w600)),
                    const SizedBox(height: 14),
                    Text('Your invoice templates are ready.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12)),
                    const SizedBox(height: 16),
                    Text(widget.footnote, style: TextStyle(color: widget.themeData.glow.withValues(alpha: 0.85), fontSize: 11, fontWeight: FontWeight.w700)),
                  ],
                ),
              ),
            ),
          ),
          Positioned.fill(
            child: GestureDetector(onTap: () => Navigator.of(context).pop(), behavior: HitTestBehavior.translucent),
          ),
        ],
      ),
    );
  }
}

class _CelebrationBurstPainter extends CustomPainter {
  _CelebrationBurstPainter({required this.progress, required this.color});

  final double progress;
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final rnd = math.Random(7);
    for (var i = 0; i < 36; i++) {
      final angle = (i / 36) * math.pi * 2;
      final dist = progress * (80 + rnd.nextDouble() * 120);
      final p = center + Offset(math.cos(angle) * dist, math.sin(angle) * dist);
      final r = (1 - progress) * 4 + 1.5;
      canvas.drawCircle(p, r, Paint()..color = color.withValues(alpha: (1 - progress) * 0.65));
    }
  }

  @override
  bool shouldRepaint(covariant _CelebrationBurstPainter old) => old.progress != progress;
}
