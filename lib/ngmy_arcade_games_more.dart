import 'package:flutter/material.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_games_c.dart';
import 'ngmy_arcade_games_d.dart';
import 'ngmy_arcade_games_e.dart';
import 'ngmy_arcade_games_f.dart';
import 'ngmy_arcade_games_g.dart';
import 'ngmy_arcade_games_h.dart';
import 'ngmy_arcade_host.dart';

/// The 50 newer arcade money games (21–70).
const kNgmyArcadeGamesMore = <NgmyArcadeDef>[
  // Action & reflex
  NgmyArcadeDef('air_hockey', 'Air Hockey', 'Beat the computer to 5 goals', '🏒', Icons.sports_hockey_rounded, [Color(0xFF0EA5E9), Color(0xFF1E3A8A)], 150),
  NgmyArcadeDef('quick_draw', 'Quick Draw', 'Draw faster than the gunslinger, 5 duels', '🤠', Icons.bolt_rounded, [Color(0xFFF59E0B), Color(0xFF7C2D12)], 90),
  NgmyArcadeDef('paddle_duel', 'Paddle Duel', 'Beat the computer at table tennis', '🏓', Icons.sports_tennis_rounded, [Color(0xFF0EA5E9), Color(0xFF0C4A6E)], 120),
  NgmyArcadeDef('beat_tiles', 'Beat Tiles', 'Tap 30 music tiles before they fall', '🎹', Icons.piano_rounded, [Color(0xFFE879F9), Color(0xFF6D28D9)], 60),
  NgmyArcadeDef('perfect_stop', 'Perfect Stop', 'Stop the bar in the green 10 times', '🟩', Icons.linear_scale_rounded, [Color(0xFF22C55E), Color(0xFF312E81)], 60),
  NgmyArcadeDef('hoop_shot', 'Hoop Shot', 'Sink 10 baskets on a moving hoop', '🏀', Icons.sports_basketball_rounded, [Color(0xFFF97316), Color(0xFF7C2D12)], 75),
  // Puzzles & brain
  NgmyArcadeDef('color_flood', 'Color Flood', 'Flood the board in 21 moves', '🌊', Icons.format_color_fill_rounded, [Color(0xFFA855F7), Color(0xFF1F2937)], 120),
  NgmyArcadeDef('true_false', 'True or False', 'Call 12 facts right', '✅', Icons.fact_check_rounded, [Color(0xFF3B82F6), Color(0xFF1E3A8A)], 90),
  NgmyArcadeDef('clock_reader', 'Clock Reader', 'Read 10 clocks correctly', '🕰️', Icons.schedule_rounded, [Color(0xFF14B8A6), Color(0xFF134E4A)], 90),
  NgmyArcadeDef('quick_count', 'Quick Count', 'Count the flashing dots', '🔴', Icons.blur_on_rounded, [Color(0xFFEC4899), Color(0xFF831843)], 90),
  NgmyArcadeDef('shell_game', 'Shell Game', 'Follow the ball under the cups', '🥤', Icons.local_drink_rounded, [Color(0xFFDC2626), Color(0xFF450A0A)], 120),
  // Casual favourites
  NgmyArcadeDef('ball_sort', 'Ball Sort', 'Sort the coloured balls into tubes', '🧪', Icons.science_rounded, [Color(0xFF6366F1), Color(0xFF020617)], 180),
  NgmyArcadeDef('burger_builder', 'Burger Builder', 'Stack 6 burgers exactly as ordered', '🍔', Icons.lunch_dining_rounded, [Color(0xFFF59E0B), Color(0xFF7C2D12)], 120),
  NgmyArcadeDef('deep_fishing', 'Deep Sea Fishing', 'Catch 12 fish, skip the sharks', '🎣', Icons.phishing_rounded, [Color(0xFF0369A1), Color(0xFF082F49)], 90),
  NgmyArcadeDef('moon_lander', 'Moon Lander', 'Land softly on the moon 5 times', '🛸', Icons.flight_land_rounded, [Color(0xFF64748B), Color(0xFF020617)], 120),
  NgmyArcadeDef('jelly_jump', 'Frog Jump', 'Bounce up 30 platforms', '🐸', Icons.keyboard_double_arrow_up_rounded, [Color(0xFFF472B6), Color(0xFF7C3AED)], 90),
  NgmyArcadeDef('mini_golf', 'Mini Golf', 'Sink 6 holes, one putt each', '⛳', Icons.golf_course_rounded, [Color(0xFF16A34A), Color(0xFF14532D)], 180),
  // Money & treasure
  NgmyArcadeDef('gold_miner', 'Gold Miner', 'Claw up \$900 of gold and gems', '⛏️', Icons.construction_rounded, [Color(0xFFEAB308), Color(0xFF451A03)], 90),
  NgmyArcadeDef('cash_counter', 'Cash Counter', 'Count 10 piles of cash', '💵', Icons.payments_rounded, [Color(0xFF22C55E), Color(0xFF14532D)], 120),
  NgmyArcadeDef('slot_stopper', 'Slot Stopper', 'Stop the reels on 3 of a kind', '🎰', Icons.casino_rounded, [Color(0xFFF59E0B), Color(0xFF7F1D1D)], 90),
  NgmyArcadeDef('change_maker', 'Change Maker', 'Give 6 customers exact change', '🧾', Icons.point_of_sale_rounded, [Color(0xFF10B981), Color(0xFF022C22)], 150),
  NgmyArcadeDef('find_it', 'Find It', 'Spot 15 hidden things in the scene', '🔍', Icons.search_rounded, [Color(0xFFFB923C), Color(0xFFC2410C)], 120),
  // Classics & skill
  NgmyArcadeDef('knife_throw', 'Knife Throw', 'Stick 21 knives in the spinning log', '🔪', Icons.change_history_rounded, [Color(0xFFD97706), Color(0xFF0F172A)], 90),
  NgmyArcadeDef('stick_bridge', 'Stick Bridge', 'Grow sticks to cross 12 gaps', '🥷', Icons.straighten_rounded, [Color(0xFFFDA4AF), Color(0xFF7E22CE)], 120),
  NgmyArcadeDef('zigzag_run', 'Zigzag Run', 'Turn 30 corners on the path', '〰️', Icons.timeline_rounded, [Color(0xFF14B8A6), Color(0xFF0F766E)], 90),
  NgmyArcadeDef('emoji_math', 'Emoji Math', 'Solve 10 emoji equations', '🧮', Icons.functions_rounded, [Color(0xFF06B6D4), Color(0xFF164E63)], 150),
  NgmyArcadeDef('connect_four', 'Connect Four', 'Beat the computer twice', '🔴', Icons.view_column_rounded, [Color(0xFF2563EB), Color(0xFF172554)], 240),
  NgmyArcadeDef('pop_lock', 'Pop the Lock', 'Tap the dot 20 times in a row', '🔓', Icons.lock_clock_rounded, [Color(0xFF6366F1), Color(0xFF1E1B4B)], 75),
];

const kNgmyArcadeGameIdsMore = <String>{
  'air_hockey', 'quick_draw',
  'paddle_duel', 'beat_tiles', 'perfect_stop', 'hoop_shot', 'color_flood', 'true_false', 'clock_reader', 'quick_count', 'shell_game',
  'ball_sort', 'burger_builder', 'deep_fishing', 'moon_lander', 'jelly_jump', 'mini_golf',
  'gold_miner', 'cash_counter', 'slot_stopper', 'change_maker', 'find_it',
  'knife_throw', 'stick_bridge', 'zigzag_run', 'emoji_math', 'connect_four', 'pop_lock', };

Widget ngmyBuildArcadeGameMore(String id, NgmyArcadeArgs a) =>
    ngmyBuildArcadeGameC(id, a) ??
    ngmyBuildArcadeGameD(id, a) ??
    ngmyBuildArcadeGameE(id, a) ??
    ngmyBuildArcadeGameF(id, a) ??
    ngmyBuildArcadeGameG(id, a) ??
    ngmyBuildArcadeGameH(id, a) ??
    const Center(child: Text('Game not found', style: TextStyle(color: Colors.white)));
