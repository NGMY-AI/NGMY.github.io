import 'package:flutter/material.dart';

import 'ngmy_vault_card_games.dart';
import 'ngmy_vault_games.dart';
import 'ngmy_vault_mind_games.dart';
import 'ngmy_vault_pro_wrapper.dart';

/// Adult Vault Channel games — casino tables, classic boards, and strategy
/// puzzles with proper UI (playing cards, roulette wheel, grids, AI opponents).
const kVaultRealisticGames = <VaultGameDef>[
  // ── Casino & card tables ─────────────────────────────────────────────────
  VaultGameDef(
    id: 'blackjack_vegas',
    title: 'Vegas Blackjack',
    shortTitle: 'Blackjack',
    tagline: 'Hit or stand against the dealer. Real 21.',
    techLabel: 'TABLE',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF0B1220), Color(0xFFFBBF24)],
    icon: Icons.style_rounded,
  ),
  VaultGameDef(
    id: 'roulette_euro',
    title: 'Euro Roulette',
    shortTitle: 'Roulette',
    tagline: 'Pick your number. Spin the wheel.',
    techLabel: 'WHEEL',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF7F1D1D), Color(0xFF22C55E)],
    icon: Icons.trip_origin_rounded,
  ),
  VaultGameDef(
    id: 'slots_jackpot',
    title: 'Jackpot Slots',
    shortTitle: 'Slots',
    tagline: 'Match three symbols on the machine.',
    techLabel: 'SLOTS',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFF7C3AED), Color(0xFFDB2777)],
    icon: Icons.casino_rounded,
  ),
  VaultGameDef(
    id: 'billiards_snooker',
    title: 'Snooker Pro',
    shortTitle: 'Snooker',
    tagline: 'Aim, power up, and pocket the shot.',
    techLabel: 'CUE',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF14532D), Color(0xFF22C55E)],
    icon: Icons.sports_rounded,
  ),
  VaultGameDef(
    id: 'baccarat_punto',
    title: 'Punto Banco',
    shortTitle: 'Baccarat',
    tagline: 'Player or banker — closest to nine wins.',
    techLabel: 'BAC',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF312E81), Color(0xFF6366F1)],
    icon: Icons.diamond_rounded,
  ),
  VaultGameDef(
    id: 'casino_war',
    title: 'Casino War',
    shortTitle: 'Casino War',
    tagline: 'Higher card takes the table. War on ties.',
    techLabel: 'WAR',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFFBE123C), Color(0xFFE11D48)],
    icon: Icons.compare_arrows_rounded,
  ),
  VaultGameDef(
    id: 'video_poker',
    title: 'Video Poker',
    shortTitle: 'Video Poker',
    tagline: 'Hold the best cards. Draw for payout.',
    techLabel: 'POKER',
    engine: VaultEngine.wordMatch,
    colors: [Color(0xFF14532D), Color(0xFF059669)],
    icon: Icons.filter_none_rounded,
  ),
  VaultGameDef(
    id: 'hi_lo_cards',
    title: 'Hi-Lo Cards',
    shortTitle: 'Hi-Lo',
    tagline: 'Call the next card. Build your streak.',
    techLabel: 'HI-LO',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF1E3A8A), Color(0xFF60A5FA)],
    icon: Icons.swap_vert_rounded,
  ),
  // ── Classic board games ──────────────────────────────────────────────────
  VaultGameDef(
    id: 'checkers_deluxe',
    title: 'Checkers',
    shortTitle: 'Checkers',
    tagline: 'Jump and crown pieces. Beat the AI.',
    techLabel: 'BOARD',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFF44403C), Color(0xFFF8FAFC)],
    icon: Icons.grid_view_rounded,
  ),
  VaultGameDef(
    id: 'connect_four',
    title: 'Connect Four',
    shortTitle: 'Connect 4',
    tagline: 'Drop discs. Line up four first.',
    techLabel: 'C4',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFFEF4444), Color(0xFFFBBF24)],
    icon: Icons.view_column_rounded,
  ),
  VaultGameDef(
    id: 'reversi_duel',
    title: 'Reversi',
    shortTitle: 'Reversi',
    tagline: 'Flank discs and control the board.',
    techLabel: 'REV',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFFE2E8F0), Color(0xFF64748B)],
    icon: Icons.contrast_rounded,
  ),
  VaultGameDef(
    id: 'tic_tac_go',
    title: 'Tic Tac Toe',
    shortTitle: 'Tic Tac Toe',
    tagline: 'Three in a row against smart AI.',
    techLabel: 'XOX',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF2563EB), Color(0xFF818CF8)],
    icon: Icons.grid_3x3_rounded,
  ),
  VaultGameDef(
    id: 'profit_solve',
    title: 'Profit Lab',
    shortTitle: 'Profit Lab',
    tagline: 'Real business math scenarios under pressure.',
    techLabel: 'PROFIT',
    engine: VaultEngine.wordMatch,
    colors: [Color(0xFF047857), Color(0xFF10B981)],
    icon: Icons.attach_money_rounded,
  ),
  // ── Strategy & logic ─────────────────────────────────────────────────────
  VaultGameDef(
    id: 'merge_2048',
    title: 'Merge 2048',
    shortTitle: '2048',
    tagline: 'Slide tiles. Plan merges to 2048.',
    techLabel: '2048',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFFBBF24), Color(0xFFF97316)],
    icon: Icons.grid_on_rounded,
  ),
  VaultGameDef(
    id: 'code_breaker',
    title: 'Code Breaker',
    shortTitle: 'Code Breaker',
    tagline: 'Crack the secret code with pure logic.',
    techLabel: 'LOGIC',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF818CF8), Color(0xFFA78BFA)],
    icon: Icons.password_rounded,
  ),
  VaultGameDef(
    id: 'cipher_five',
    title: 'Cipher Five',
    shortTitle: 'Cipher 5',
    tagline: 'Guess the five-letter word in six tries.',
    techLabel: 'WORD',
    engine: VaultEngine.wordMatch,
    colors: [Color(0xFF10B981), Color(0xFF22D3EE)],
    icon: Icons.abc_rounded,
  ),
  VaultGameDef(
    id: 'sudoku_six',
    title: 'Sudoku Six',
    shortTitle: 'Sudoku',
    tagline: 'Fill the 6×6 grid. No repeats.',
    techLabel: 'SUDOKU',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF60A5FA), Color(0xFF38BDF8)],
    icon: Icons.apps_rounded,
  ),
  VaultGameDef(
    id: 'slide_lock',
    title: 'Slide Lock',
    shortTitle: 'Slide Lock',
    tagline: 'Unscramble the numbered 15-tile lock.',
    techLabel: 'PUZZLE',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFF34D399), Color(0xFF06B6D4)],
    icon: Icons.extension_rounded,
  ),
  VaultGameDef(
    id: 'hanoi_spire',
    title: 'Tower of Hanoi',
    shortTitle: 'Hanoi',
    tagline: 'Move the tower in the fewest moves.',
    techLabel: 'HANOI',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFF472B6), Color(0xFFA78BFA)],
    icon: Icons.filter_none_rounded,
  ),
  VaultGameDef(
    id: 'make_twenty_four',
    title: 'Make 24',
    shortTitle: 'Make 24',
    tagline: 'Use four numbers once each to hit 24.',
    techLabel: 'MATH',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFFFACC15), Color(0xFF34D399)],
    icon: Icons.calculate_rounded,
  ),
];

const _kVaultProGameIds = {
  'blackjack_vegas',
  'roulette_euro',
  'slots_jackpot',
  'billiards_snooker',
  'checkers_deluxe',
  'tic_tac_go',
  'profit_solve',
};

const _kVaultCardGameIds = {
  'baccarat_punto',
  'casino_war',
  'video_poker',
  'hi_lo_cards',
};

Widget ngmyVaultRealisticGameScreen(VaultGameDef game) {
  if (_kVaultProGameIds.contains(game.id)) {
    return NgmyVaultProGameScreen(game: game);
  }
  if (_kVaultCardGameIds.contains(game.id)) {
    return NgmyVaultCardGameScreen(game: game);
  }
  switch (game.id) {
    case 'merge_2048':
      return NgmyVaultMerge2048Game(game: game);
    case 'code_breaker':
      return NgmyVaultCodeBreakerGame(game: game);
    case 'connect_four':
      return NgmyVaultConnectFourGame(game: game);
    case 'slide_lock':
      return NgmyVaultSlideLockGame(game: game);
    case 'sudoku_six':
      return NgmyVaultSudokuSixGame(game: game);
    case 'cipher_five':
      return NgmyVaultCipherFiveGame(game: game);
    case 'reversi_duel':
      return NgmyVaultReversiDuelGame(game: game);
    case 'hanoi_spire':
      return NgmyVaultHanoiSpireGame(game: game);
    case 'make_twenty_four':
      return NgmyVaultMakeTwentyFourGame(game: game);
    default:
      throw ArgumentError('Unknown vault game: ${game.id}');
  }
}

bool ngmyVaultIsRealisticGame(String id) =>
    kVaultRealisticGames.any((g) => g.id == id);