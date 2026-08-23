import 'package:flutter/material.dart';

import 'ngmy_vault_drive_games.dart';
import 'ngmy_vault_games.dart';
import 'ngmy_vault_premium_games.dart';

/// Hub games after the core first row: previous premium set + one redesigned car game.
const kVaultArcadeWaveGames = <VaultGameDef>[
  VaultGameDef(
    id: 'neon_drift',
    title: 'Neon Drift',
    shortTitle: 'Neon Drift',
    tagline: 'Swipe lanes. Dodge traffic. Own the night road.',
    techLabel: 'RACE',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF22D3EE), Color(0xFF6366F1)],
    icon: Icons.directions_car_filled_rounded,
  ),
  VaultGameDef(
    id: 'sky_flap',
    title: 'Sky Flap',
    shortTitle: 'Sky Flap',
    tagline: 'Tap to soar. Thread the pipes. Don’t fall.',
    techLabel: 'FLAP',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFFFACC15), Color(0xFF38BDF8)],
    icon: Icons.flight_takeoff_rounded,
  ),
  VaultGameDef(
    id: 'crystal_breaker',
    title: 'Crystal Breaker',
    shortTitle: 'Crystal Breaker',
    tagline: 'Bounce the orb. Shatter every crystal.',
    techLabel: 'BREAK',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFA78BFA), Color(0xFFEC4899)],
    icon: Icons.diamond_rounded,
  ),
  VaultGameDef(
    id: 'fruit_slash',
    title: 'Fruit Slash',
    shortTitle: 'Fruit Slash',
    tagline: 'Swipe to slice. Avoid the bombs.',
    techLabel: 'SLASH',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFFEF4444), Color(0xFFFBBF24)],
    icon: Icons.content_cut_rounded,
  ),
  VaultGameDef(
    id: 'peak_hopper',
    title: 'Peak Hopper',
    shortTitle: 'Peak Hopper',
    tagline: 'Bounce higher. Climb forever.',
    techLabel: 'HOP',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFF34D399), Color(0xFF06B6D4)],
    icon: Icons.terrain_rounded,
  ),
  VaultGameDef(
    id: 'bubble_rush',
    title: 'Bubble Rush',
    shortTitle: 'Bubble Rush',
    tagline: 'Pop the matching color before they rise away.',
    techLabel: 'POP',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF60A5FA), Color(0xFFF472B6)],
    icon: Icons.bubble_chart_rounded,
  ),
  VaultGameDef(
    id: 'paddle_duel',
    title: 'Paddle Duel',
    shortTitle: 'Paddle Duel',
    tagline: 'Glow pong. Outscore the AI.',
    techLabel: 'PONG',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF22D3EE), Color(0xFF34D399)],
    icon: Icons.sports_tennis_rounded,
  ),
  VaultGameDef(
    id: 'orbit_dodge',
    title: 'Orbit Dodge',
    shortTitle: 'Orbit Dodge',
    tagline: 'Steer the ship. Weave through asteroids.',
    techLabel: 'SPACE',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF818CF8), Color(0xFF38BDF8)],
    icon: Icons.rocket_launch_rounded,
  ),
  VaultGameDef(
    id: 'cascade_match',
    title: 'Cascade Match',
    shortTitle: 'Cascade Match',
    tagline: 'Swap gems. Chain cascades. Rack combos.',
    techLabel: 'MATCH',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFF97316), Color(0xFFA78BFA)],
    icon: Icons.grid_on_rounded,
  ),
  // Single redesigned car game (added — does not replace the set above)
  VaultGameDef(
    id: 'street_racer',
    title: 'Street Racer',
    shortTitle: 'Street Racer',
    tagline: 'Real steering wheel. Hold gas. Drive the street.',
    techLabel: 'DRIVE',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFFEF4444), Color(0xFF22D3EE)],
    icon: Icons.sports_motorsports_rounded,
  ),
];

const kVaultGames = [...kVaultCoreGames, ...kVaultArcadeWaveGames];

Widget ngmyVaultArcadeWaveScreen(VaultGameDef game) {
  if (ngmyVaultIsDriveGame(game.id)) {
    return ngmyVaultDriveGameScreen(game);
  }
  return ngmyVaultPremiumGameScreen(game);
}

bool ngmyVaultIsArcadeWaveGame(String id) =>
    kVaultArcadeWaveGames.any((g) => g.id == id);
