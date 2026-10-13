import 'package:flutter/material.dart';

/// The middle frame in every money game: what you have made so far, with the
/// stake and the full prize either side.
class NgmyEarnedSoFar extends StatelessWidget {
  const NgmyEarnedSoFar({super.key, required this.earned, required this.prize, required this.stake});
  final double earned;
  final double prize;
  final double stake;

  @override
  Widget build(BuildContext context) {
    Widget side(String label, String value, Color color) => Expanded(
          child: Column(
            children: [
              Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 10.5, fontWeight: FontWeight.w800, letterSpacing: 0.6)),
              const SizedBox(height: 2),
              FittedBox(child: Text(value, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 15))),
            ],
          ),
        );
    return Padding(
      padding: const EdgeInsets.fromLTRB(14, 0, 14, 8),
      child: Row(
        children: [
          side('STAKE', '\$${stake.toStringAsFixed(2)}', Colors.white),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18),
              gradient: const LinearGradient(colors: [Color(0xFF065F46), Color(0xFF047857)]),
              border: Border.all(color: const Color(0xFF34D399).withValues(alpha: 0.7), width: 1.4),
              boxShadow: [BoxShadow(color: const Color(0xFF10B981).withValues(alpha: 0.35), blurRadius: 14)],
            ),
            child: Column(
              children: [
                const Text('EARNED SO FAR', style: TextStyle(color: Color(0xFFA7F3D0), fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1)),
                TweenAnimationBuilder<double>(
                  tween: Tween(end: earned),
                  duration: const Duration(milliseconds: 350),
                  builder: (_, v, _) => Text('\$${v.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                ),
              ],
            ),
          ),
          side('FULL WIN', '\$${prize.toStringAsFixed(2)}', const Color(0xFFFDE68A)),
        ],
      ),
    );
  }
}
