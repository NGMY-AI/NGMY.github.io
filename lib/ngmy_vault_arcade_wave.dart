import 'package:flutter/material.dart';

import 'ngmy_vault_games.dart';
import 'ngmy_vault_games_pack2.dart';
import 'ngmy_vault_games_pack3.dart';
import 'ngmy_vault_new_games.dart';

/// Second-wave arcade titles that fill the Vault hub after the core first row.
const kVaultArcadeWaveGames = <VaultGameDef>[
  VaultGameDef(
    id: 'lane_racer',
    title: 'Lane Racer',
    shortTitle: 'Lane Racer',
    tagline: 'Dodge traffic. Switch lanes. Survive the rush.',
    techLabel: 'RACE',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFEF4444), Color(0xFFF97316)],
    icon: Icons.directions_car_rounded,
  ),
  VaultGameDef(
    id: 'jump_runner',
    title: 'Jump Runner',
    shortTitle: 'Jump Runner',
    tagline: 'Tap to leap. Clear gaps. Keep the streak.',
    techLabel: 'RUN',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF22D3EE), Color(0xFF6366F1)],
    icon: Icons.directions_run_rounded,
  ),
  VaultGameDef(
    id: 'gravity_flap',
    title: 'Gravity Flap',
    shortTitle: 'Gravity Flap',
    tagline: 'Flap through gaps. One miss ends the run.',
    techLabel: 'FLAP',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFFACC15), Color(0xFFF97316)],
    icon: Icons.flight_rounded,
  ),
  VaultGameDef(
    id: 'brick_breaker',
    title: 'Brick Breaker',
    shortTitle: 'Brick Breaker',
    tagline: 'Bounce the ball. Smash every brick.',
    techLabel: 'BRICK',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF60A5FA), Color(0xFFA78BFA)],
    icon: Icons.grid_view_rounded,
  ),
  VaultGameDef(
    id: 'traffic_weave',
    title: 'Traffic Weave',
    shortTitle: 'Traffic Weave',
    tagline: 'Weave past cars without a scratch.',
    techLabel: 'WEAVE',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFF34D399), Color(0xFF06B6D4)],
    icon: Icons.alt_route_rounded,
  ),
  VaultGameDef(
    id: 'laser_defense',
    title: 'Laser Defense',
    shortTitle: 'Laser Defense',
    tagline: 'Aim lasers. Stop the swarm.',
    techLabel: 'LASER',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF22D3EE), Color(0xFFEC4899)],
    icon: Icons.my_location_rounded,
  ),
  VaultGameDef(
    id: 'asteroid_drift',
    title: 'Asteroid Drift',
    shortTitle: 'Asteroid Drift',
    tagline: 'Steer clear of rocks in deep space.',
    techLabel: 'SPACE',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF818CF8), Color(0xFF38BDF8)],
    icon: Icons.public_rounded,
  ),
  VaultGameDef(
    id: 'platform_hop',
    title: 'Platform Hop',
    shortTitle: 'Platform Hop',
    tagline: 'Hop platforms. Climb as high as you can.',
    techLabel: 'HOP',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFFFB7185), Color(0xFFFBBF24)],
    icon: Icons.stairs_rounded,
  ),
  VaultGameDef(
    id: 'slice_drift',
    title: 'Slice Drift',
    shortTitle: 'Slice Drift',
    tagline: 'Swipe to slice. Chain perfect cuts.',
    techLabel: 'SLICE',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFEF4444), Color(0xFFF472B6)],
    icon: Icons.content_cut_rounded,
  ),
  VaultGameDef(
    id: 'target_aim',
    title: 'Target Aim',
    shortTitle: 'Target Aim',
    tagline: 'Hit moving targets before they vanish.',
    techLabel: 'AIM',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFFF97316), Color(0xFFFACC15)],
    icon: Icons.gps_fixed_rounded,
  ),
  VaultGameDef(
    id: 'whack_pulse',
    title: 'Whack Pulse',
    shortTitle: 'Whack Pulse',
    tagline: 'Whack the pulse tiles as they light up.',
    techLabel: 'WHACK',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFFA78BFA), Color(0xFFEC4899)],
    icon: Icons.touch_app_rounded,
  ),
  VaultGameDef(
    id: 'keep_up',
    title: 'Keep Up',
    shortTitle: 'Keep Up',
    tagline: 'Tap to keep the ball in the air.',
    techLabel: 'KEEP',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF34D399), Color(0xFF22D3EE)],
    icon: Icons.sports_volleyball_rounded,
  ),
  VaultGameDef(
    id: 'pinball_bump',
    title: 'Pinball Bump',
    shortTitle: 'Pinball Bump',
    tagline: 'Bumpers, flippers, and big scores.',
    techLabel: 'PIN',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF6366F1), Color(0xFFDB2777)],
    icon: Icons.sports_esports_rounded,
  ),
  VaultGameDef(
    id: 'slingshot_score',
    title: 'Slingshot',
    shortTitle: 'Slingshot',
    tagline: 'Pull back. Release. Nail the bullseye.',
    techLabel: 'SLING',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF0EA5E9), Color(0xFF22C55E)],
    icon: Icons.arrow_outward_rounded,
  ),
  VaultGameDef(
    id: 'orbit_dock',
    title: 'Orbit Dock',
    shortTitle: 'Orbit Dock',
    tagline: 'Match the orbit and dock clean.',
    techLabel: 'DOCK',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFF38BDF8), Color(0xFF818CF8)],
    icon: Icons.radio_button_checked_rounded,
  ),
  VaultGameDef(
    id: 'drag_launch',
    title: 'Drag Launch',
    shortTitle: 'Drag Launch',
    tagline: 'Drag and launch. Stick the landing.',
    techLabel: 'LAUNCH',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFFFBBF24), Color(0xFFEF4444)],
    icon: Icons.rocket_launch_rounded,
  ),
  VaultGameDef(
    id: 'perfect_park',
    title: 'Perfect Park',
    shortTitle: 'Perfect Park',
    tagline: 'Slide into the bay without a bump.',
    techLabel: 'PARK',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFF14B8A6), Color(0xFF06B6D4)],
    icon: Icons.local_parking_rounded,
  ),
  VaultGameDef(
    id: 'collector',
    title: 'Collector',
    shortTitle: 'Collector',
    tagline: 'Catch orbs. Miss too many and you are out.',
    techLabel: 'CATCH',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFFA78BFA), Color(0xFF60A5FA)],
    icon: Icons.blur_on_rounded,
  ),
  VaultGameDef(
    id: 'juggle_tap',
    title: 'Juggle Tap',
    shortTitle: 'Juggle Tap',
    tagline: 'Keep every ball bouncing. Drop none.',
    techLabel: 'JUGGLE',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFFB7185), Color(0xFFF97316)],
    icon: Icons.bubble_chart_rounded,
  ),
  VaultGameDef(
    id: 'metro_flow',
    title: 'Metro Flow',
    shortTitle: 'Metro Flow',
    tagline: 'Guide trains through the metro grid.',
    techLabel: 'METRO',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF64748B), Color(0xFF38BDF8)],
    icon: Icons.train_rounded,
  ),
  VaultGameDef(
    id: 'balloon_rush',
    title: 'Balloon Rush',
    shortTitle: 'Balloon Rush',
    tagline: 'Pop balloons before they float away.',
    techLabel: 'POP',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFF472B6), Color(0xFFFBBF24)],
    icon: Icons.celebration_rounded,
  ),
  VaultGameDef(
    id: 'pattern_echo',
    title: 'Pattern Echo',
    shortTitle: 'Pattern Echo',
    tagline: 'Watch the pattern. Repeat it perfectly.',
    techLabel: 'ECHO',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF818CF8), Color(0xFF34D399)],
    icon: Icons.auto_awesome_rounded,
  ),
  VaultGameDef(
    id: 'stack_tower',
    title: 'Stack Tower',
    shortTitle: 'Stack Tower',
    tagline: 'Stack blocks. Cut perfect edges.',
    techLabel: 'STACK',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFFFBBF24), Color(0xFFF97316)],
    icon: Icons.view_agenda_rounded,
  ),
  VaultGameDef(
    id: 'reflex_grid',
    title: 'Reflex Grid',
    shortTitle: 'Reflex Grid',
    tagline: 'Tap the lit cells before time runs out.',
    techLabel: 'GRID',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF22D3EE), Color(0xFFA78BFA)],
    icon: Icons.grid_4x4_rounded,
  ),
];

/// Full Vault Channel grid: first-row core + arcade wave.
const kVaultGames = [...kVaultCoreGames, ...kVaultArcadeWaveGames];

/// Opens a second-wave arcade game by id.
Widget ngmyVaultArcadeWaveScreen(VaultGameDef game) {
  switch (game.id) {
    case 'lane_racer':
      return NgmyVaultLaneRacerGame(game: game);
    case 'jump_runner':
      return NgmyVaultJumpRunnerGame(game: game);
    case 'gravity_flap':
      return NgmyVaultGravityFlapGame(game: game);
    case 'brick_breaker':
      return NgmyVaultBrickBreakerGame(game: game);
    case 'traffic_weave':
      return NgmyVaultTrafficWeaveGame(game: game);
    case 'laser_defense':
      return NgmyVaultLaserDefenseGame(game: game);
    case 'asteroid_drift':
      return NgmyVaultAsteroidDriftGame(game: game);
    case 'platform_hop':
      return NgmyVaultPlatformHopGame(game: game);
    case 'slice_drift':
      return NgmyVaultSliceDriftGame(game: game);
    case 'target_aim':
      return NgmyVaultTargetAimGame(game: game);
    case 'whack_pulse':
      return NgmyVaultWhackPulseGame(game: game);
    case 'keep_up':
      return NgmyVaultKeepUpGame(game: game);
    case 'pinball_bump':
      return NgmyVaultPinballBumpGame(game: game);
    case 'slingshot_score':
      return NgmyVaultSlingshotScoreGame(game: game);
    case 'orbit_dock':
      return NgmyVaultOrbitDockGame(game: game);
    case 'drag_launch':
      return NgmyVaultDragLaunchGame(game: game);
    case 'perfect_park':
      return NgmyVaultPerfectParkGame(game: game);
    case 'collector':
      return NgmyVaultCollectorGame(game: game);
    case 'juggle_tap':
      return NgmyVaultJuggleTapGame(game: game);
    case 'metro_flow':
      return NgmyVaultMetroFlowGame(game: game);
    case 'balloon_rush':
      return NgmyVaultBalloonRushGame(game: game);
    case 'pattern_echo':
      return NgmyVaultPatternGame(game: game);
    case 'stack_tower':
      return const NgmyVaultStackTowerGame();
    case 'reflex_grid':
      return const NgmyVaultReflexGridGame();
    default:
      throw ArgumentError('Unknown arcade wave game: ${game.id}');
  }
}

bool ngmyVaultIsArcadeWaveGame(String id) =>
    kVaultArcadeWaveGames.any((g) => g.id == id);
