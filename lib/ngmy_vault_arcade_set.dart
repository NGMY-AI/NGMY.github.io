import 'ngmy_arcade_games.dart';
import 'ngmy_vault_lv_host.dart';

/// The Game Center's arcade games, in the Vault Channel for free play with coins:
/// 30 levels each, the clock getting shorter as the levels go up. All offline.
/// (The casino-style ones are left out.)
const _skip = {'slot_stopper', 'plinko_drop'};

final kVaultArcadeSet = <VaultLvDef>[
  for (final g in kNgmyArcadeGames)
    if (!_skip.contains(g.id))
      VaultLvDef(
        id: 'gc_${g.id}',
        title: g.title,
        tagline: g.subtitle,
        emoji: g.emoji,
        icon: g.icon,
        colors: g.colors,
        tag: 'PLAY',
        build: (a, l) => ngmyBuildArcadeGame(g.id, a),
        seconds: (l) => lvI(l, (g.seconds * 1.6).round(), (g.seconds * 0.9).round()),
      ),
];
