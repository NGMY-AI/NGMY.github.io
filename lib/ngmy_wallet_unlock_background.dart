import 'package:flutter/material.dart';

/// Soft mesh only used on the unlock screen (not the wallet itself).
class WalletUnlockMeshBackground extends StatelessWidget {
  const WalletUnlockMeshBackground({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (isDark) {
      return const ColoredBox(color: Color(0xFF0A0A0A));
    }
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF7C3AED), Color(0xFF2563EB), Color(0xFFDB2777), Color(0xFFF97316)],
          stops: [0.0, 0.35, 0.7, 1.0],
        ),
      ),
      child: Stack(
        fit: StackFit.expand,
        children: [
          Positioned(top: -80, right: -40, child: _blob(220, const Color(0xFFA78BFA).withValues(alpha: 0.45))),
          Positioned(bottom: 80, left: -60, child: _blob(260, const Color(0xFF38BDF8).withValues(alpha: 0.35))),
          Positioned(bottom: -40, right: 20, child: _blob(180, const Color(0xFFF472B6).withValues(alpha: 0.4))),
        ],
      ),
    );
  }

  Widget _blob(double size, Color color) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: color,
        boxShadow: [BoxShadow(color: color, blurRadius: 60, spreadRadius: 10)],
      ),
    );
  }
}
