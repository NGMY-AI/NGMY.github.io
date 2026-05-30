import 'dart:io';

void main() {
  final path = 'lib/main.dart';
  var t = File(path).readAsStringSync();
  const start = "    _GameDef(id: 'precision_stop'";
  const end = "    _GameDef(id: 'profit_solve', title: 'Profit Solve', subtitle: 'Business profit math — type answer', icon: Icons.attach_money_rounded, colors: [Color(0xFF10B981), Color(0xFF047857)]),\n  ];";
  const replacement = r'''    _GameDef(id: 'checkers_deluxe', title: 'Checkers Deluxe', subtitle: 'Wood board — play solo or invite a friend', icon: Icons.grid_on_rounded, colors: [Color(0xFF8B4513), Color(0xFF5D4037)]),
    _GameDef(id: 'tic_tac_go', title: 'Tic Tac Go', subtitle: '3 in a row — real-time multiplayer', icon: Icons.close_rounded, colors: [Color(0xFF2563EB), Color(0xFF1D4ED8)]),
    _GameDef(id: 'pool_8ball', title: '8-Ball Pool', subtitle: 'Aim, shoot, pocket the 8-ball', icon: Icons.sports_baseball_rounded, colors: [Color(0xFF166534), Color(0xFF14532D)]),
    _GameDef(id: 'blackjack_vegas', title: 'Blackjack Vegas', subtitle: 'Beat the dealer — casino classic', icon: Icons.style_rounded, colors: [Color(0xFF0F172A), Color(0xFF334155)]),
    _GameDef(id: 'roulette_euro', title: 'European Roulette', subtitle: 'Pick your number and spin', icon: Icons.trip_origin_rounded, colors: [Color(0xFF7F1D1D), Color(0xFFB91C1C)]),
    _GameDef(id: 'slots_jackpot', title: 'Slots Jackpot', subtitle: 'Match symbols for big wins', icon: Icons.casino_rounded, colors: [Color(0xFF7C3AED), Color(0xFFDB2777)]),
    _GameDef(id: 'poker_texas', title: 'Texas Hold\'em', subtitle: 'Poker skill — invite opponents', icon: Icons.account_balance_wallet_rounded, colors: [Color(0xFF15803D), Color(0xFF166534)]),
    _GameDef(id: 'chess_royale', title: 'Chess Royale', subtitle: 'Classic chess — multiplayer', icon: Icons.extension_rounded, colors: [Color(0xFF1E293B), Color(0xFF475569)]),
    _GameDef(id: 'connect_four_pro', title: 'Connect Four Pro', subtitle: 'Drop discs — beat your rival', icon: Icons.view_column_rounded, colors: [Color(0xFFDC2626), Color(0xFF991B1B)]),
    _GameDef(id: 'domino_block', title: 'Domino Block', subtitle: 'Strategic domino tiles', icon: Icons.view_module_rounded, colors: [Color(0xFFF5F5F4), Color(0xFF78716C)]),
    _GameDef(id: 'plinko_prizes', title: 'Plinko Prizes', subtitle: 'Drop the chip — win prizes', icon: Icons.grain_rounded, colors: [Color(0xFF06B6D4), Color(0xFF0891B2)]),
    _GameDef(id: 'spin_wheel', title: 'Spin Wheel', subtitle: 'Spin for cash multipliers', icon: Icons.attractions_rounded, colors: [Color(0xFFF59E0B), Color(0xFFD97706)]),
    _GameDef(id: 'baccarat_punto', title: 'Baccarat', subtitle: 'High-stakes punto banco', icon: Icons.diamond_rounded, colors: [Color(0xFF1E1B4B), Color(0xFF312E81)]),
    _GameDef(id: 'craps_table', title: 'Craps Table', subtitle: 'Roll the dice — casino table', icon: Icons.casino_outlined, colors: [Color(0xFF065F46), Color(0xFF047857)]),
    _GameDef(id: 'casino_war', title: 'Casino War', subtitle: 'Higher card wins the pot', icon: Icons.compare_arrows_rounded, colors: [Color(0xFFBE123C), Color(0xFF9F1239)]),
    _GameDef(id: 'bingo_live', title: 'Bingo Live', subtitle: 'Mark numbers — shout bingo', icon: Icons.apps_rounded, colors: [Color(0xFFEC4899), Color(0xFFBE185D)]),
    _GameDef(id: 'solitaire_klondike', title: 'Solitaire Klondike', subtitle: 'Clear the deck — earn rewards', icon: Icons.filter_none_rounded, colors: [Color(0xFF22C55E), Color(0xFF16A34A)]),
    _GameDef(id: 'backgammon_pro', title: 'Backgammon Pro', subtitle: 'Race your pieces home', icon: Icons.dashboard_rounded, colors: [Color(0xFFB45309), Color(0xFF92400E)]),
    _GameDef(id: 'billiards_snooker', title: 'Billiards Snooker', subtitle: 'Pro snooker table physics', icon: Icons.sports_rounded, colors: [Color(0xFF14532D), Color(0xFF052E16)]),
    _GameDef(id: 'profit_solve', title: 'Profit Solve', subtitle: 'Business profit — type the answer', icon: Icons.attach_money_rounded, colors: [Color(0xFF10B981), Color(0xFF047857)]),
  ];''';
  final i0 = t.indexOf(start);
  final i1 = t.indexOf(end);
  if (i0 < 0 || i1 < 0) {
    stderr.writeln('markers not found $i0 $i1');
    exit(1);
  }
  t = t.replaceRange(i0, i1 + end.length, replacement);
  File(path).writeAsStringSync(t);
  print('game list updated');
}
