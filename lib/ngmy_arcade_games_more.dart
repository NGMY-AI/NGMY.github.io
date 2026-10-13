import 'package:flutter/material.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_games_c.dart';
import 'ngmy_arcade_games_d.dart';
import 'ngmy_arcade_games_e.dart';
import 'ngmy_arcade_games_f.dart';
import 'ngmy_arcade_games_g.dart';
import 'ngmy_arcade_host.dart';

/// The 50 newer arcade money games (21–70).
const kNgmyArcadeGamesMore = <NgmyArcadeDef>[
  // Action & reflex
  NgmyArcadeDef('color_gate', 'Color Gate', 'Switch colour to pass 20 gates', '🚦', Icons.traffic_rounded, [Color(0xFFEF4444), Color(0xFF3B82F6)], 75),
  NgmyArcadeDef('paddle_duel', 'Paddle Duel', 'Beat the computer at table tennis', '🏓', Icons.sports_tennis_rounded, [Color(0xFF0EA5E9), Color(0xFF0C4A6E)], 120),
  NgmyArcadeDef('beat_tiles', 'Beat Tiles', 'Tap 30 music tiles before they fall', '🎹', Icons.piano_rounded, [Color(0xFFE879F9), Color(0xFF6D28D9)], 60),
  NgmyArcadeDef('target_range', 'Target Range', 'Hit 20 targets before they vanish', '🎯', Icons.gps_fixed_rounded, [Color(0xFFDC2626), Color(0xFF365314)], 60),
  NgmyArcadeDef('perfect_stop', 'Perfect Stop', 'Stop the bar in the green 10 times', '🟩', Icons.linear_scale_rounded, [Color(0xFF22C55E), Color(0xFF312E81)], 60),
  NgmyArcadeDef('hoop_shot', 'Hoop Shot', 'Sink 10 baskets on a moving hoop', '🏀', Icons.sports_basketball_rounded, [Color(0xFFF97316), Color(0xFF7C2D12)], 75),
  NgmyArcadeDef('penalty_kick', 'Penalty Kick', 'Score 8 goals past the keeper', '⚽', Icons.sports_soccer_rounded, [Color(0xFF16A34A), Color(0xFF0EA5E9)], 75),
  NgmyArcadeDef('dino_dash', 'Desert Dash', 'Jump over 25 cactuses', '🏃', Icons.directions_run_rounded, [Color(0xFFF59E0B), Color(0xFFB45309)], 90),
  NgmyArcadeDef('lane_racer', 'Lane Racer', 'Weave past 30 cars on the highway', '🏎️', Icons.directions_car_rounded, [Color(0xFF6B7280), Color(0xFF111827)], 90),
  NgmyArcadeDef('planet_shield', 'Planet Shield', 'Block 20 meteors from hitting Earth', '🌍', Icons.shield_rounded, [Color(0xFF22D3EE), Color(0xFF1E1B4B)], 75),
  // Puzzles & brain
  NgmyArcadeDef('pipe_flow', 'Pipe Flow', 'Turn the pipes so water flows across', '🚰', Icons.plumbing_rounded, [Color(0xFF38BDF8), Color(0xFF082F49)], 150),
  NgmyArcadeDef('color_flood', 'Color Flood', 'Flood the board in 21 moves', '🌊', Icons.format_color_fill_rounded, [Color(0xFFA855F7), Color(0xFF1F2937)], 120),
  NgmyArcadeDef('hanoi_tower', 'Hanoi Tower', 'Move the 4-disc tower to the goal', '🗼', Icons.stacked_bar_chart_rounded, [Color(0xFFF59E0B), Color(0xFF78350F)], 150),
  NgmyArcadeDef('emoji_riddle', 'Emoji Riddles', 'Guess the phrase from the emojis', '🤔', Icons.emoji_objects_rounded, [Color(0xFFF59E0B), Color(0xFF9A3412)], 120),
  NgmyArcadeDef('bigger_sum', 'Bigger Sum', 'Pick the bigger answer 15 times', '⚖️', Icons.balance_rounded, [Color(0xFF10B981), Color(0xFF065F46)], 75),
  NgmyArcadeDef('true_false', 'True or False', 'Call 12 facts right', '✅', Icons.fact_check_rounded, [Color(0xFF3B82F6), Color(0xFF1E3A8A)], 90),
  NgmyArcadeDef('capital_quiz', 'Capital Cities', 'Name 10 world capitals', '🏛️', Icons.account_balance_rounded, [Color(0xFF8B5CF6), Color(0xFF4C1D95)], 90),
  NgmyArcadeDef('clock_reader', 'Clock Reader', 'Read 10 clocks correctly', '🕰️', Icons.schedule_rounded, [Color(0xFF14B8A6), Color(0xFF134E4A)], 90),
  NgmyArcadeDef('quick_count', 'Quick Count', 'Count the flashing dots', '🔴', Icons.blur_on_rounded, [Color(0xFFEC4899), Color(0xFF831843)], 90),
  NgmyArcadeDef('shell_game', 'Shell Game', 'Follow the ball under the cups', '🥤', Icons.local_drink_rounded, [Color(0xFFDC2626), Color(0xFF450A0A)], 120),
  // Casual favourites
  NgmyArcadeDef('gem_swap', 'Gem Swap', 'Match 3 to clear 60 gems', '💎', Icons.diamond_rounded, [Color(0xFFC084FC), Color(0xFF581C87)], 120),
  NgmyArcadeDef('block_collapse', 'Block Collapse', 'Pop groups to clear 56 blocks', '🟥', Icons.dashboard_rounded, [Color(0xFF14B8A6), Color(0xFF042F2E)], 120),
  NgmyArcadeDef('ball_sort', 'Ball Sort', 'Sort the coloured balls into tubes', '🧪', Icons.science_rounded, [Color(0xFF6366F1), Color(0xFF020617)], 180),
  NgmyArcadeDef('burger_builder', 'Burger Builder', 'Stack 6 burgers exactly as ordered', '🍔', Icons.lunch_dining_rounded, [Color(0xFFF59E0B), Color(0xFF7C2D12)], 120),
  NgmyArcadeDef('archery', 'Archery', 'Score 70 points with 10 arrows', '🏹', Icons.adjust_rounded, [Color(0xFF22C55E), Color(0xFF166534)], 75),
  NgmyArcadeDef('deep_fishing', 'Deep Sea Fishing', 'Catch 12 fish, skip the sharks', '🎣', Icons.phishing_rounded, [Color(0xFF0369A1), Color(0xFF082F49)], 90),
  NgmyArcadeDef('cannon_blast', 'Cannon Blast', 'Fire the cannon to hit 10 targets', '💣', Icons.whatshot_rounded, [Color(0xFF38BDF8), Color(0xFF374151)], 120),
  NgmyArcadeDef('moon_lander', 'Moon Lander', 'Land softly on the moon 5 times', '🛸', Icons.flight_land_rounded, [Color(0xFF64748B), Color(0xFF020617)], 120),
  NgmyArcadeDef('jelly_jump', 'Frog Jump', 'Bounce up 30 platforms', '🐸', Icons.keyboard_double_arrow_up_rounded, [Color(0xFFF472B6), Color(0xFF7C3AED)], 90),
  NgmyArcadeDef('mini_golf', 'Mini Golf', 'Sink 6 holes in par', '⛳', Icons.golf_course_rounded, [Color(0xFF16A34A), Color(0xFF14532D)], 180),
  // Money & treasure
  NgmyArcadeDef('treasure_hunt', 'Treasure Hunt', 'Dig up 5 treasures with hot/cold clues', '🏴‍☠️', Icons.travel_explore_rounded, [Color(0xFFF59E0B), Color(0xFF92400E)], 120),
  NgmyArcadeDef('safe_cracker', 'Safe Cracker', 'Crack 2 safes with code clues', '🔐', Icons.lock_open_rounded, [Color(0xFF64748B), Color(0xFF0F172A)], 180),
  NgmyArcadeDef('gold_miner', 'Gold Miner', 'Claw up \$600 of gold and gems', '⛏️', Icons.construction_rounded, [Color(0xFFEAB308), Color(0xFF451A03)], 90),
  NgmyArcadeDef('cash_counter', 'Cash Counter', 'Count 10 piles of cash', '💵', Icons.payments_rounded, [Color(0xFF22C55E), Color(0xFF14532D)], 120),
  NgmyArcadeDef('plinko_drop', 'Plinko Drop', 'Drop balls into the big slots', '🔮', Icons.scatter_plot_rounded, [Color(0xFF8B5CF6), Color(0xFF1E1B4B)], 90),
  NgmyArcadeDef('slot_stopper', 'Slot Stopper', 'Stop the reels on 3 of a kind', '🎰', Icons.casino_rounded, [Color(0xFFF59E0B), Color(0xFF7F1D1D)], 90),
  NgmyArcadeDef('change_maker', 'Change Maker', 'Give 6 customers exact change', '🧾', Icons.point_of_sale_rounded, [Color(0xFF10B981), Color(0xFF022C22)], 150),
  NgmyArcadeDef('price_guess', 'Price Guess', 'Pick what costs more, 10 times', '🏷️', Icons.sell_rounded, [Color(0xFFF97316), Color(0xFF7C2D12)], 90),
  NgmyArcadeDef('make_13', 'Make 13', 'Pair cards that add up to 13', '🂡', Icons.style_rounded, [Color(0xFF16A34A), Color(0xFF052E16)], 120),
  NgmyArcadeDef('find_it', 'Find It', 'Spot 15 hidden things in the scene', '🔍', Icons.search_rounded, [Color(0xFFFB923C), Color(0xFFC2410C)], 120),
  // Classics & skill
  NgmyArcadeDef('knife_throw', 'Knife Throw', 'Stick 21 knives in the spinning log', '🔪', Icons.change_history_rounded, [Color(0xFFD97706), Color(0xFF0F172A)], 90),
  NgmyArcadeDef('fall_down', 'Fall Down', 'Drop through 25 rising gaps', '🟡', Icons.south_rounded, [Color(0xFF22D3EE), Color(0xFF083344)], 90),
  NgmyArcadeDef('stick_bridge', 'Stick Bridge', 'Grow sticks to cross 12 gaps', '🥷', Icons.straighten_rounded, [Color(0xFFFDA4AF), Color(0xFF7E22CE)], 120),
  NgmyArcadeDef('zigzag_run', 'Zigzag Run', 'Turn 30 corners on the path', '〰️', Icons.timeline_rounded, [Color(0xFF14B8A6), Color(0xFF0F766E)], 90),
  NgmyArcadeDef('word_search', 'Word Search', 'Find 6 money words in the grid', '🔠', Icons.manage_search_rounded, [Color(0xFF0EA5E9), Color(0xFF075985)], 150),
  NgmyArcadeDef('emoji_math', 'Emoji Math', 'Solve 10 emoji equations', '🧮', Icons.functions_rounded, [Color(0xFF06B6D4), Color(0xFF164E63)], 150),
  NgmyArcadeDef('connect_four', 'Connect Four', 'Beat the computer twice', '🔴', Icons.view_column_rounded, [Color(0xFF2563EB), Color(0xFF172554)], 240),
  NgmyArcadeDef('pop_lock', 'Pop the Lock', 'Tap the dot 20 times in a row', '🔓', Icons.lock_clock_rounded, [Color(0xFF6366F1), Color(0xFF1E1B4B)], 75),
  NgmyArcadeDef('asteroid_blaster', 'Asteroid Blaster', 'Shoot down 30 asteroids', '☄️', Icons.rocket_rounded, [Color(0xFF7C3AED), Color(0xFF0B1026)], 90),
  NgmyArcadeDef('tetro_drop', 'Tetro Drop', 'Clear 6 lines of falling blocks', '🧱', Icons.view_quilt_rounded, [Color(0xFF22D3EE), Color(0xFF111827)], 180),
];

const kNgmyArcadeGameIdsMore = <String>{
  'color_gate', 'paddle_duel', 'beat_tiles', 'target_range', 'perfect_stop', 'hoop_shot', 'penalty_kick', 'dino_dash', 'lane_racer', 'planet_shield',
  'pipe_flow', 'color_flood', 'hanoi_tower', 'emoji_riddle', 'bigger_sum', 'true_false', 'capital_quiz', 'clock_reader', 'quick_count', 'shell_game',
  'gem_swap', 'block_collapse', 'ball_sort', 'burger_builder', 'archery', 'deep_fishing', 'cannon_blast', 'moon_lander', 'jelly_jump', 'mini_golf',
  'treasure_hunt', 'safe_cracker', 'gold_miner', 'cash_counter', 'plinko_drop', 'slot_stopper', 'change_maker', 'price_guess', 'make_13', 'find_it',
  'knife_throw', 'fall_down', 'stick_bridge', 'zigzag_run', 'word_search', 'emoji_math', 'connect_four', 'pop_lock', 'asteroid_blaster', 'tetro_drop',
};

Widget ngmyBuildArcadeGameMore(String id, NgmyArcadeArgs a) =>
    ngmyBuildArcadeGameC(id, a) ??
    ngmyBuildArcadeGameD(id, a) ??
    ngmyBuildArcadeGameE(id, a) ??
    ngmyBuildArcadeGameF(id, a) ??
    ngmyBuildArcadeGameG(id, a) ??
    const Center(child: Text('Game not found', style: TextStyle(color: Colors.white)));
