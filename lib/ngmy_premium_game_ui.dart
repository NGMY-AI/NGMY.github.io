import 'dart:math' as math;
import 'package:flutter/material.dart';

import 'ngmy_multiplayer.dart';

/// Casino & classic pro games shown with premium Game Center cards.
const Set<String> kNgmyPremiumCasinoGameIds = {
  'blackjack_vegas',
  'roulette_euro',
  'slots_jackpot',
  'poker_texas',
  'chess_royale',
  'connect_four_pro',
  'domino_block',
  'plinko_prizes',
  'spin_wheel',
  'baccarat_punto',
  'craps_table',
  'casino_war',
  'bingo_live',
  'solitaire_klondike',
  'backgammon_pro',
  'billiards_snooker',
  'profit_solve',
};

class NgmyPremiumGameStyle {
  final List<Color> gradient;
  final Color accent;
  final Color glow;
  final String badge;
  final String heroEmoji;
  final IconData icon;
  const NgmyPremiumGameStyle({
    required this.gradient,
    required this.accent,
    required this.glow,
    required this.badge,
    required this.heroEmoji,
    required this.icon,
  });
}

NgmyPremiumGameStyle ngmyPremiumStyleFor(String gameId) {
  switch (gameId) {
    case 'blackjack_vegas':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF0B1220), Color(0xFF1E293B), Color(0xFF0F172A)],
        accent: Color(0xFFFBBF24),
        glow: Color(0xFF334155),
        badge: 'VEGAS TABLE',
        heroEmoji: '🃏',
        icon: Icons.style_rounded,
      );
    case 'roulette_euro':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF450A0A), Color(0xFF7F1D1D), Color(0xFF991B1B)],
        accent: Color(0xFF22C55E),
        glow: Color(0xFFB91C1C),
        badge: 'EURO WHEEL',
        heroEmoji: '🎡',
        icon: Icons.trip_origin_rounded,
      );
    case 'slots_jackpot':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF4C1D95), Color(0xFF7C3AED), Color(0xFFDB2777)],
        accent: Color(0xFFFDE047),
        glow: Color(0xFFA855F7),
        badge: 'JACKPOT',
        heroEmoji: '🎰',
        icon: Icons.casino_rounded,
      );
    case 'poker_texas':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF052E16), Color(0xFF14532D), Color(0xFF166534)],
        accent: Color(0xFFE2E8F0),
        glow: Color(0xFF22C55E),
        badge: "HOLD'EM",
        heroEmoji: '♠️',
        icon: Icons.account_balance_wallet_rounded,
      );
    case 'chess_royale':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF0F172A), Color(0xFF334155), Color(0xFF475569)],
        accent: Color(0xFFF8FAFC),
        glow: Color(0xFF64748B),
        badge: 'ROYALE',
        heroEmoji: '♟️',
        icon: Icons.extension_rounded,
      );
    case 'connect_four_pro':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF1E3A8A), Color(0xFF2563EB), Color(0xFF1D4ED8)],
        accent: Color(0xFFEF4444),
        glow: Color(0xFF3B82F6),
        badge: 'CONNECT 4',
        heroEmoji: '🔴',
        icon: Icons.view_column_rounded,
      );
    case 'domino_block':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF44403C), Color(0xFF78716C), Color(0xFF57534E)],
        accent: Color(0xFFFAFAF9),
        glow: Color(0xFFA8A29E),
        badge: 'DOMINOES',
        heroEmoji: '🁓',
        icon: Icons.view_module_rounded,
      );
    case 'plinko_prizes':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF0E7490), Color(0xFF0891B2), Color(0xFF06B6D4)],
        accent: Color(0xFFFDE68A),
        glow: Color(0xFF22D3EE),
        badge: 'PLINKO',
        heroEmoji: '💎',
        icon: Icons.grain_rounded,
      );
    case 'spin_wheel':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF92400E), Color(0xFFD97706), Color(0xFFF59E0B)],
        accent: Color(0xFFFEE2E2),
        glow: Color(0xFFFBBF24),
        badge: 'BIG SPIN',
        heroEmoji: '🎡',
        icon: Icons.attractions_rounded,
      );
    case 'baccarat_punto':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF1E1B4B), Color(0xFF312E81), Color(0xFF4338CA)],
        accent: Color(0xFFE0E7FF),
        glow: Color(0xFF6366F1),
        badge: 'PUNTO BANCO',
        heroEmoji: '💎',
        icon: Icons.diamond_rounded,
      );
    case 'craps_table':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF064E3B), Color(0xFF047857), Color(0xFF059669)],
        accent: Color(0xFFECFDF5),
        glow: Color(0xFF10B981),
        badge: 'CRAPS',
        heroEmoji: '🎲',
        icon: Icons.casino_outlined,
      );
    case 'casino_war':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF881337), Color(0xFFBE123C), Color(0xFFE11D48)],
        accent: Color(0xFFFECDD3),
        glow: Color(0xFFF43F5E),
        badge: 'WAR',
        heroEmoji: '⚔️',
        icon: Icons.compare_arrows_rounded,
      );
    case 'bingo_live':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF831843), Color(0xFFBE185D), Color(0xFFEC4899)],
        accent: Color(0xFFFCE7F3),
        glow: Color(0xFFF472B6),
        badge: 'LIVE BINGO',
        heroEmoji: '🎱',
        icon: Icons.apps_rounded,
      );
    case 'solitaire_klondike':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF14532D), Color(0xFF15803D), Color(0xFF22C55E)],
        accent: Color(0xFFDCFCE7),
        glow: Color(0xFF4ADE80),
        badge: 'KLONDIKE',
        heroEmoji: '🃏',
        icon: Icons.filter_none_rounded,
      );
    case 'backgammon_pro':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF78350F), Color(0xFF92400E), Color(0xFFB45309)],
        accent: Color(0xFFFEF3C7),
        glow: Color(0xFFF59E0B),
        badge: 'BACKGAMMON',
        heroEmoji: '🎲',
        icon: Icons.dashboard_rounded,
      );
    case 'billiards_snooker':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF052E16), Color(0xFF14532D), Color(0xFF166534)],
        accent: Color(0xFF86EFAC),
        glow: Color(0xFF22C55E),
        badge: 'SNOOKER',
        heroEmoji: '🎱',
        icon: Icons.sports_rounded,
      );
    case 'profit_solve':
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF064E3B), Color(0xFF047857), Color(0xFF10B981)],
        accent: Color(0xFFD1FAE5),
        glow: Color(0xFF34D399),
        badge: 'PROFIT LAB',
        heroEmoji: '💰',
        icon: Icons.attach_money_rounded,
      );
    default:
      return const NgmyPremiumGameStyle(
        gradient: [Color(0xFF1E293B), Color(0xFF334155)],
        accent: Color(0xFFFBBF24),
        glow: Color(0xFF64748B),
        badge: 'PREMIUM',
        heroEmoji: '🎮',
        icon: Icons.casino_rounded,
      );
  }
}

/// Rich Game Center tile for casino / classic pro games.
Widget ngmyPremiumGameCenterTile({
  required String gameId,
  required String title,
  required String subtitle,
  required VoidCallback onTap,
  VoidCallback? onInvite,
}) {
  final style = ngmyPremiumStyleFor(gameId);
  return Padding(
    padding: const EdgeInsets.only(bottom: 14),
    child: Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Container(
          height: 118,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: style.gradient,
            ),
            border: Border.all(color: style.accent.withValues(alpha: 0.55), width: 1.5),
            boxShadow: [
              BoxShadow(color: style.glow.withValues(alpha: 0.45), blurRadius: 18, offset: const Offset(0, 8)),
              BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4)),
            ],
          ),
          child: Stack(
            children: [
              Positioned(
                right: -18,
                top: -12,
                child: Text(
                  style.heroEmoji,
                  style: TextStyle(fontSize: 88, color: Colors.white.withValues(alpha: 0.12)),
                ),
              ),
              Positioned(
                left: 0,
                right: 0,
                top: 0,
                height: 42,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
                    gradient: LinearGradient(
                      colors: [Colors.white.withValues(alpha: 0.14), Colors.transparent],
                    ),
                  ),
                ),
              ),
              Row(
                children: [
                  const SizedBox(width: 14),
                  Container(
                    width: 72,
                    height: 72,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(
                        colors: [style.accent.withValues(alpha: 0.35), Colors.black.withValues(alpha: 0.2)],
                      ),
                      border: Border.all(color: style.accent.withValues(alpha: 0.7), width: 2),
                      boxShadow: [BoxShadow(color: style.glow.withValues(alpha: 0.5), blurRadius: 12)],
                    ),
                    child: Center(
                      child: Text(style.heroEmoji, style: const TextStyle(fontSize: 34)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                            color: style.accent.withValues(alpha: 0.18),
                            borderRadius: BorderRadius.circular(6),
                            border: Border.all(color: style.accent.withValues(alpha: 0.45)),
                          ),
                          child: Text(
                            style.badge,
                            style: TextStyle(color: style.accent, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 0.8),
                          ),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          title,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 0.3),
                        ),
                        const SizedBox(height: 3),
                        Text(
                          subtitle,
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 11, height: 1.25),
                        ),
                      ],
                    ),
                  ),
                  if (onInvite != null)
                    IconButton(
                      icon: Icon(Icons.person_add_rounded, color: style.accent),
                      tooltip: 'Invite player',
                      onPressed: onInvite,
                    ),
                  Padding(
                    padding: const EdgeInsets.only(right: 12),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                      decoration: BoxDecoration(
                        color: style.accent.withValues(alpha: 0.22),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: style.accent.withValues(alpha: 0.5)),
                      ),
                      child: Icon(Icons.play_arrow_rounded, color: style.accent, size: 28),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    ),
  );
}

// --- In-game realistic widgets ---

const List<String> _cardRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

Widget ngmyPlayingCard(int value, {bool hidden = false, double width = 52, double height = 74}) {
  if (hidden) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF1E3A8A), Color(0xFF312E81)],
        ),
        border: Border.all(color: const Color(0xFFFBBF24), width: 1.5),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 6, offset: const Offset(0, 3))],
      ),
      child: Center(child: Icon(Icons.casino_rounded, color: Colors.white.withValues(alpha: 0.5), size: width * 0.45)),
    );
  }
  final rank = value.clamp(1, 13);
  final isRed = rank == 1 || rank >= 10 || rank % 2 == 0;
  final suit = ['♠', '♥', '♦', '♣'][rank % 4];
  final color = isRed ? const Color(0xFFDC2626) : const Color(0xFF0F172A);
  return Container(
    width: width,
    height: height,
    decoration: BoxDecoration(
      color: const Color(0xFFFFFBEB),
      borderRadius: BorderRadius.circular(8),
      border: Border.all(color: const Color(0xFFE2E8F0)),
      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.28), blurRadius: 6, offset: const Offset(0, 3))],
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(6, 4, 0, 0),
          child: Text('${_cardRanks[rank - 1]}\n$suit', style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 11, height: 1.1)),
        ),
        const Spacer(),
        Center(child: Text(suit, style: TextStyle(color: color, fontSize: width * 0.38))),
        const Spacer(),
      ],
    ),
  );
}

class _RouletteWheelPainter extends CustomPainter {
  final int? winningNumber;
  _RouletteWheelPainter({this.winningNumber});

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.width / 2 - 4;
    const segments = 37;
    for (var i = 0; i < segments; i++) {
      final start = i * 2 * math.pi / segments - math.pi / 2;
      final paint = Paint()
        ..color = i == 0
            ? const Color(0xFF22C55E)
            : (i.isEven ? const Color(0xFFDC2626) : const Color(0xFF0F172A))
        ..style = PaintingStyle.fill;
      canvas.drawArc(Rect.fromCircle(center: center, radius: radius), start, 2 * math.pi / segments, true, paint);
    }
    canvas.drawCircle(center, radius, Paint()..color = const Color(0xFF78350F)..style = PaintingStyle.stroke..strokeWidth = 8);
    canvas.drawCircle(center, radius * 0.22, Paint()..color = const Color(0xFFFBBF24));
    if (winningNumber != null) {
      final text = TextPainter(
        text: TextSpan(
          text: '$winningNumber',
          style: const TextStyle(color: Color(0xFF0F172A), fontWeight: FontWeight.w900, fontSize: 18),
        ),
        textDirection: TextDirection.ltr,
      )..layout();
      text.paint(canvas, center - Offset(text.width / 2, text.height / 2));
    }
  }

  @override
  bool shouldRepaint(covariant _RouletteWheelPainter old) => old.winningNumber != winningNumber;
}

Widget ngmyRouletteWheel({int? result, double size = 160}) {
  return Container(
    width: size,
    height: size,
    decoration: BoxDecoration(
      shape: BoxShape.circle,
      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 16, offset: const Offset(0, 6))],
    ),
    child: CustomPaint(painter: _RouletteWheelPainter(winningNumber: result)),
  );
}

Widget ngmySlotMachineFrame({required List<String> symbols, required VoidCallback onSpin}) {
  return Column(
    children: [
      Container(
        padding: const EdgeInsets.fromLTRB(16, 14, 16, 18),
        decoration: BoxDecoration(
          gradient: const LinearGradient(colors: [Color(0xFF4C1D95), Color(0xFF1E1B4B)]),
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: const Color(0xFFFBBF24), width: 3),
          boxShadow: [BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.5), blurRadius: 20)],
        ),
        child: Column(
          children: [
            const Text('JACKPOT SLOTS', style: TextStyle(color: Color(0xFFFDE047), fontWeight: FontWeight.w900, letterSpacing: 2)),
            const SizedBox(height: 12),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: symbols
                  .map(
                    (s) => Container(
                      width: 72,
                      height: 86,
                      margin: const EdgeInsets.symmetric(horizontal: 4),
                      decoration: BoxDecoration(
                        color: Colors.black.withValues(alpha: 0.35),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: Colors.white24),
                      ),
                      alignment: Alignment.center,
                      child: Text(s, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                    ),
                  )
                  .toList(),
            ),
          ],
        ),
      ),
      const SizedBox(height: 14),
      FilledButton.icon(
        onPressed: onSpin,
        icon: const Icon(Icons.casino_rounded),
        label: const Text('SPIN REELS', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1)),
        style: FilledButton.styleFrom(
          backgroundColor: const Color(0xFFFBBF24),
          foregroundColor: const Color(0xFF1E1B4B),
          padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 14),
        ),
      ),
    ],
  );
}

Widget ngmyThemedCasinoTable({
  required String gameId,
  required String prompt,
  required VoidCallback onPlay,
  bool vsComputer = true,
  String? opponentLabel,
}) {
  final style = ngmyPremiumStyleFor(gameId);
  final title = kNgmyProGameTitles[gameId] ?? gameId;
  return Column(
    children: [
      Text(prompt, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
      const SizedBox(height: 12),
      Expanded(
        child: Center(
          child: Container(
            width: double.infinity,
            margin: const EdgeInsets.symmetric(horizontal: 4),
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(22),
              gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: style.gradient),
              border: Border.all(color: style.accent.withValues(alpha: 0.5), width: 2),
              boxShadow: [BoxShadow(color: style.glow.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 10))],
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(style.heroEmoji, style: const TextStyle(fontSize: 64)),
                const SizedBox(height: 10),
                Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                const SizedBox(height: 8),
                Text(
                  vsComputer ? 'Face NGMY at the ${style.badge} table' : 'Face $opponentLabel at the table',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12),
                ),
                const SizedBox(height: 20),
                Icon(style.icon, size: 48, color: style.accent.withValues(alpha: 0.85)),
              ],
            ),
          ),
        ),
      ),
      const SizedBox(height: 8),
      SizedBox(
        width: double.infinity,
        child: FilledButton(
          onPressed: onPlay,
          style: FilledButton.styleFrom(
            backgroundColor: style.accent,
            foregroundColor: style.gradient.first.computeLuminance() > 0.4 ? Colors.black : Colors.white,
            padding: const EdgeInsets.symmetric(vertical: 14),
          ),
          child: const Text('DEAL / PLAY ROUND', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 0.5)),
        ),
      ),
    ],
  );
}
