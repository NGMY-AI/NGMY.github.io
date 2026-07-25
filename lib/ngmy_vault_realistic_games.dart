import 'package:flutter/material.dart';

import 'ngmy_vault_games.dart';
import 'ngmy_vault_games_pack2.dart';
import 'ngmy_vault_games_pack3.dart';

/// Twenty skill-based Vault Channel games — driving, shooting, timing, and
/// strategy. Replaces the older puzzle-only row below Memory Flip.
const kVaultRealisticGames = <VaultGameDef>[
  VaultGameDef(
    id: 'night_highway',
    title: 'Night Highway',
    shortTitle: 'Night Highway',
    tagline: 'Three-lane dodge at speed. No second chances.',
    techLabel: 'DRIVE',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF6366F1), Color(0xFF0EA5E9)],
    icon: Icons.directions_car_filled_rounded,
  ),
  VaultGameDef(
    id: 'drag_strip',
    title: 'Drag Strip',
    shortTitle: 'Drag Strip',
    tagline: 'Release at green. Nail the perfect launch.',
    techLabel: 'LAUNCH',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFEF4444), Color(0xFFF97316)],
    icon: Icons.speed_rounded,
  ),
  VaultGameDef(
    id: 'precision_park',
    title: 'Precision Park',
    shortTitle: 'Precision Park',
    tagline: 'Slide into tight spots without touching the curb.',
    techLabel: 'PARK',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFF22C55E), Color(0xFF14B8A6)],
    icon: Icons.local_parking_rounded,
  ),
  VaultGameDef(
    id: 'wheelie_king',
    title: 'Wheelie King',
    shortTitle: 'Wheelie King',
    tagline: 'Hold the balance. Push too far and you flip.',
    techLabel: 'BIKE',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFFF59E0B), Color(0xFFEF4444)],
    icon: Icons.two_wheeler_rounded,
  ),
  VaultGameDef(
    id: 'roof_run',
    title: 'Roof Run',
    shortTitle: 'Roof Run',
    tagline: 'Jump gaps across rooftops before the city swallows you.',
    techLabel: 'RUN',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFF8B5CF6), Color(0xFFEC4899)],
    icon: Icons.directions_run_rounded,
  ),
  VaultGameDef(
    id: 'cargo_haul',
    title: 'Cargo Haul',
    shortTitle: 'Cargo Haul',
    tagline: 'Grab contracts under the clock. Miss nothing.',
    techLabel: 'HAUL',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF0EA5E9), Color(0xFF2563EB)],
    icon: Icons.inventory_2_rounded,
  ),
  VaultGameDef(
    id: 'range_master',
    title: 'Range Master',
    shortTitle: 'Range Master',
    tagline: 'Lead your shots. Clear every target lane.',
    techLabel: 'AIM',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFFDC2626), Color(0xFF991B1B)],
    icon: Icons.gps_fixed_rounded,
  ),
  VaultGameDef(
    id: 'trader_math',
    title: 'Trader Math',
    shortTitle: 'Trader Math',
    tagline: 'Fast market math under pressure. No calculator.',
    techLabel: 'TRADE',
    engine: VaultEngine.wordMatch,
    colors: [Color(0xFFFBBF24), Color(0xFF059669)],
    icon: Icons.candlestick_chart_rounded,
  ),
  VaultGameDef(
    id: 'signal_decode',
    title: 'Signal Decode',
    shortTitle: 'Signal Decode',
    tagline: 'Memorize encrypted bursts. Replay them clean.',
    techLabel: 'SIGNAL',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF06B6D4), Color(0xFF3B82F6)],
    icon: Icons.radar_rounded,
  ),
  VaultGameDef(
    id: 'vault_breaker',
    title: 'Vault Breaker',
    shortTitle: 'Vault Breaker',
    tagline: 'Break the security wall. Keep the ball alive.',
    techLabel: 'BREAK',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFA855F7), Color(0xFF6366F1)],
    icon: Icons.sports_esports_rounded,
  ),
  VaultGameDef(
    id: 'jet_corridor',
    title: 'Jet Corridor',
    shortTitle: 'Jet Corridor',
    tagline: 'Thread a narrow corridor at full thrust.',
    techLabel: 'JET',
    engine: VaultEngine.neonSerpent,
    colors: [Color(0xFF38BDF8), Color(0xFF0284C7)],
    icon: Icons.flight_rounded,
  ),
  VaultGameDef(
    id: 'rush_hour',
    title: 'Rush Hour',
    shortTitle: 'Rush Hour',
    tagline: 'Weave through live traffic without clipping a bumper.',
    techLabel: 'WEAVE',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFFF97316), Color(0xFFEA580C)],
    icon: Icons.traffic_rounded,
  ),
  VaultGameDef(
    id: 'blade_slice',
    title: 'Blade Slice',
    shortTitle: 'Blade Slice',
    tagline: 'Cut the lane clean. One swipe, one target.',
    techLabel: 'SLICE',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFEF4444), Color(0xFFBE123C)],
    icon: Icons.content_cut_rounded,
  ),
  VaultGameDef(
    id: 'pub_darts',
    title: 'Pub Darts',
    shortTitle: 'Pub Darts',
    tagline: 'Release on the sweet spot. Bullseye pays.',
    techLabel: 'DARTS',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF16A34A), Color(0xFF14532D)],
    icon: Icons.adjust_rounded,
  ),
  VaultGameDef(
    id: 'ring_toss_pro',
    title: 'Ring Toss Pro',
    shortTitle: 'Ring Toss',
    tagline: 'Arc the ring onto the peg. Physics, not luck.',
    techLabel: 'TOSS',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFFEC4899), Color(0xFFDB2777)],
    icon: Icons.album_rounded,
  ),
  VaultGameDef(
    id: 'perimeter_defense',
    title: 'Perimeter Defense',
    shortTitle: 'Perimeter',
    tagline: 'Rotate shields and block incoming fire.',
    techLabel: 'DEFENSE',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFF22D3EE), Color(0xFF0891B2)],
    icon: Icons.shield_rounded,
  ),
  VaultGameDef(
    id: 'steel_walk',
    title: 'Steel Walk',
    shortTitle: 'Steel Walk',
    tagline: 'Hop narrow beams. One misstep ends the run.',
    techLabel: 'BALANCE',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF94A3B8), Color(0xFF475569)],
    icon: Icons.height_rounded,
  ),
  VaultGameDef(
    id: 'deep_space',
    title: 'Deep Space Drift',
    shortTitle: 'Deep Space',
    tagline: 'Drift through asteroid fields. Don\'t clip the rock.',
    techLabel: 'DRIFT',
    engine: VaultEngine.neonSerpent,
    colors: [Color(0xFF312E81), Color(0xFF7C3AED)],
    icon: Icons.public_rounded,
  ),
  VaultGameDef(
    id: 'slingshot_pro',
    title: 'Slingshot Pro',
    shortTitle: 'Slingshot Pro',
    tagline: 'Pull, aim, release — knock down every block.',
    techLabel: 'SLING',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF84CC16), Color(0xFF65A30D)],
    icon: Icons.architecture_rounded,
  ),
  VaultGameDef(
    id: 'orbit_dock',
    title: 'Orbit Dock',
    shortTitle: 'Orbit Dock',
    tagline: 'Match velocity and dock the capsule on the ring.',
    techLabel: 'DOCK',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF60A5FA), Color(0xFF1D4ED8)],
    icon: Icons.satellite_alt_rounded,
  ),
];

Widget ngmyVaultRealisticGameScreen(VaultGameDef game) {
  switch (game.id) {
    case 'night_highway':
      return NgmyVaultLaneRacerGame(game: game);
    case 'drag_strip':
      return NgmyVaultDragLaunchGame(game: game);
    case 'precision_park':
      return NgmyVaultPerfectParkGame(game: game);
    case 'wheelie_king':
      return NgmyVaultWheelieGame(game: game);
    case 'roof_run':
      return NgmyVaultJumpRunnerGame(game: game);
    case 'cargo_haul':
      return NgmyVaultCollectorGame(game: game);
    case 'range_master':
      return NgmyVaultTargetAimGame(game: game);
    case 'trader_math':
      return NgmyVaultQuickMathGame(game: game);
    case 'signal_decode':
      return NgmyVaultPatternGame(game: game);
    case 'vault_breaker':
      return NgmyVaultBrickBreakerGame(game: game);
    case 'jet_corridor':
      return NgmyVaultGravityFlapGame(game: game);
    case 'rush_hour':
      return NgmyVaultTrafficWeaveGame(game: game);
    case 'blade_slice':
      return NgmyVaultSliceDriftGame(game: game);
    case 'pub_darts':
      return NgmyVaultDartsTimingGame(game: game);
    case 'ring_toss_pro':
      return NgmyVaultRingTossGame(game: game);
    case 'perimeter_defense':
      return NgmyVaultLaserDefenseGame(game: game);
    case 'steel_walk':
      return NgmyVaultPlatformHopGame(game: game);
    case 'deep_space':
      return NgmyVaultAsteroidDriftGame(game: game);
    case 'slingshot_pro':
      return NgmyVaultSlingshotScoreGame(game: game);
    case 'orbit_dock':
      return NgmyVaultOrbitDockGame(game: game);
    default:
      throw ArgumentError('Unknown realistic vault game: ${game.id}');
  }
}

bool ngmyVaultIsRealisticGame(String id) =>
    kVaultRealisticGames.any((g) => g.id == id);

/// Full Vault Channel grid: core row games + twenty realistic skill games.
const kVaultGames = [...kVaultCoreGames, ...kVaultRealisticGames];
