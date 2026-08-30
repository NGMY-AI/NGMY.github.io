/// Tracks which money features are actively on-screen so cloud/wallet polls
/// only run while those surfaces are open — not merely because the app is.
class NgmyFeatureSyncSession {
  NgmyFeatureSyncSession._();

  static int _growthIncomeAdmin = 0;
  static int _growthIncomeUser = 0;
  static int _loans = 0;
  static int _adminDashboard = 0;
  static int _civicRegistry = 0;

  static bool get growthIncomeAdminActive => _growthIncomeAdmin > 0;
  static bool get growthIncomeUserActive => _growthIncomeUser > 0;
  static bool get loansActive => _loans > 0;
  static bool get adminDashboardActive => _adminDashboard > 0;
  static bool get civicRegistryActive => _civicRegistry > 0;
  static bool get anyGrowthIncomeActive => growthIncomeAdminActive || growthIncomeUserActive;

  /// Wired by the app root to start scoped polls / refreshes.
  static void Function()? onEnteredGrowthIncomeAdmin;
  static void Function()? onLeftGrowthIncomeAdmin;
  static void Function()? onEnteredGrowthIncomeUser;
  static void Function()? onLeftGrowthIncomeUser;
  static void Function()? onEnteredAdminDashboard;
  static void Function()? onLeftAdminDashboard;

  static void enterGrowthIncomeAdmin() {
    _growthIncomeAdmin++;
    if (_growthIncomeAdmin == 1) onEnteredGrowthIncomeAdmin?.call();
  }

  static void leaveGrowthIncomeAdmin() {
    if (_growthIncomeAdmin <= 0) return;
    _growthIncomeAdmin--;
    if (_growthIncomeAdmin == 0) onLeftGrowthIncomeAdmin?.call();
  }

  static void enterGrowthIncomeUser() {
    _growthIncomeUser++;
    if (_growthIncomeUser == 1) onEnteredGrowthIncomeUser?.call();
  }

  static void leaveGrowthIncomeUser() {
    if (_growthIncomeUser <= 0) return;
    _growthIncomeUser--;
    if (_growthIncomeUser == 0) onLeftGrowthIncomeUser?.call();
  }

  static void enterLoans() => _loans++;
  static void leaveLoans() {
    if (_loans > 0) _loans--;
  }

  static void enterAdminDashboard() {
    _adminDashboard++;
    if (_adminDashboard == 1) onEnteredAdminDashboard?.call();
  }

  static void leaveAdminDashboard() {
    if (_adminDashboard <= 0) return;
    _adminDashboard--;
    if (_adminDashboard == 0) onLeftAdminDashboard?.call();
  }

  static void enterCivicRegistry() {
    _civicRegistry++;
  }

  static void leaveCivicRegistry() {
    if (_civicRegistry > 0) _civicRegistry--;
  }
}
