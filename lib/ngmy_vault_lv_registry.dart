import 'ngmy_vault_lv_build.dart';
import 'ngmy_vault_lv_logic.dart';
import 'ngmy_vault_lv_mind.dart';
import 'ngmy_vault_lv_brain.dart';
import 'ngmy_vault_lv_arcade.dart';
import 'ngmy_vault_lv_host.dart';

/// Every Vault Channel level game, in hub order.
final List<VaultLvDef> kVaultLvGames = [
  ...kVaultBuildGames,
  ...kVaultLogicGames,
  ...kVaultMindGames,
  ...kVaultBrainGames,
  ...kVaultArcadeGames,
];

VaultLvDef? ngmyVaultLvDef(String id) {
  for (final d in kVaultLvGames) {
    if (d.id == id) return d;
  }
  return null;
}
