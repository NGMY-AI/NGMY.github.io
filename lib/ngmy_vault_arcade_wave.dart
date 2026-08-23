import 'package:flutter/material.dart';

import 'ngmy_vault_drive_games.dart';
import 'ngmy_vault_games.dart';

/// Driving titles after the core first row — steering wheel + gas/brake.
const kVaultArcadeWaveGames = <VaultGameDef>[
  VaultGameDef(
    id: 'city_cruise',
    title: 'City Cruise',
    shortTitle: 'City Cruise',
    tagline: 'Steer the wheel. Cruise the city streets.',
    techLabel: 'DRIVE',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFF22D3EE), Color(0xFFEF4444)],
    icon: Icons.directions_car_filled_rounded,
  ),
  VaultGameDef(
    id: 'highway_rush',
    title: 'Highway Rush',
    shortTitle: 'Highway Rush',
    tagline: 'Open highway. High speed. Hold the lane.',
    techLabel: 'HIGHWAY',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF2563EB), Color(0xFFFACC15)],
    icon: Icons.speed_rounded,
  ),
  VaultGameDef(
    id: 'night_neon',
    title: 'Night Neon',
    shortTitle: 'Night Neon',
    tagline: 'Neon night drive. Lights, traffic, curves.',
    techLabel: 'NIGHT',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFEC4899), Color(0xFFA78BFA)],
    icon: Icons.nightlight_round,
  ),
  VaultGameDef(
    id: 'mountain_pass',
    title: 'Mountain Pass',
    shortTitle: 'Mountain Pass',
    tagline: 'SUV through winding mountain roads.',
    techLabel: 'SUV',
    engine: VaultEngine.helixHold,
    colors: [Color(0xFF0F766E), Color(0xFF34D399)],
    icon: Icons.terrain_rounded,
  ),
  VaultGameDef(
    id: 'bus_route',
    title: 'Bus Route',
    shortTitle: 'Bus Route',
    tagline: 'Drive the bus. Wide turns. Steady speed.',
    techLabel: 'BUS',
    engine: VaultEngine.nodeDash,
    colors: [Color(0xFFF59E0B), Color(0xFFF97316)],
    icon: Icons.directions_bus_rounded,
  ),
  VaultGameDef(
    id: 'police_chase',
    title: 'Police Chase',
    shortTitle: 'Police Chase',
    tagline: 'Chase lights on. Dense traffic. Don’t crash.',
    techLabel: 'POLICE',
    engine: VaultEngine.gravityHook,
    colors: [Color(0xFF1D4ED8), Color(0xFFEF4444)],
    icon: Icons.local_police_rounded,
  ),
  VaultGameDef(
    id: 'formula_circuit',
    title: 'Formula Circuit',
    shortTitle: 'Formula Circuit',
    tagline: 'Formula car. Max speed. Tight circuit feel.',
    techLabel: 'F1',
    engine: VaultEngine.pulseForge,
    colors: [Color(0xFFDC2626), Color(0xFFFBBF24)],
    icon: Icons.sports_motorsports_rounded,
  ),
  VaultGameDef(
    id: 'offroad_trail',
    title: 'Offroad Trail',
    shortTitle: 'Offroad Trail',
    tagline: 'Dirt trail. Rugged ride. Stay on the path.',
    techLabel: 'OFFROAD',
    engine: VaultEngine.laserLane,
    colors: [Color(0xFF15803D), Color(0xFFF97316)],
    icon: Icons.agriculture_rounded,
  ),
  VaultGameDef(
    id: 'taxi_city',
    title: 'Taxi City',
    shortTitle: 'Taxi City',
    tagline: 'Yellow cab. Busy streets. Earn the fare.',
    techLabel: 'TAXI',
    engine: VaultEngine.orbPop,
    colors: [Color(0xFFFACC15), Color(0xFF111827)],
    icon: Icons.local_taxi_rounded,
  ),
];

/// Full Vault Channel grid: first-row core + driving wave.
const kVaultGames = [...kVaultCoreGames, ...kVaultArcadeWaveGames];

Widget ngmyVaultArcadeWaveScreen(VaultGameDef game) =>
    ngmyVaultDriveGameScreen(game);

bool ngmyVaultIsArcadeWaveGame(String id) =>
    kVaultArcadeWaveGames.any((g) => g.id == id);
