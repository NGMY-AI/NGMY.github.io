import 'ngmy_vault_arcade_set.dart';
import 'ngmy_vault_kids_games.dart';
import 'ngmy_vault_lv_host.dart';

/// Every Vault Channel game, in hub order: the learning games first, then the arcade games.
final List<VaultLvDef> kVaultLvGames = [
  ...kVaultKidsGames,
  ...kVaultArcadeSet,
];

VaultLvDef? ngmyVaultLvDef(String id) {
  for (final d in kVaultLvGames) {
    if (d.id == id) return d;
  }
  return null;
}
