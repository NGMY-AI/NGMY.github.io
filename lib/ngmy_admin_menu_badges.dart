/// Pending / new-request counts for Admin Dashboard → Management Menus badges.
class NgmyAdminMenuCounts {
  static int pendingInList(List<Map<String, dynamic>> list) =>
      list.where((a) => (a['status'] ?? 'pending').toString().toLowerCase() == 'pending').length;

  static int pendingLoanApplications(List<Map<String, dynamic>> list) => pendingInList(list);

  static int pendingRegistrarApplications(List<Map<String, dynamic>> list) => pendingInList(list);

  static int pendingJobWorkerApplications(List<Map<String, dynamic>> list) => pendingInList(list);

  static int pendingGameInvites(List<Map<String, dynamic>> gameInvites) => pendingInList(gameInvites);

  /// Red badge for Admin → Wallet tab (deposits + withdrawals awaiting review).
  static int pendingWalletAdminCount({
    required int pendingDeposits,
    required int pendingWithdrawals,
  }) =>
      pendingDeposits + pendingWithdrawals;
}
