const int kNgmyMaxRegistrarsPerState = 15;

/// Civic Registry per-state registrar caps and lists.
class NgmyCivicRegistryStats {
  static String _emailKey(String email) => email.toLowerCase().trim();

  static String registrarStateForUser({
    required String email,
    required String userState,
    required List<Map<String, dynamic>> applications,
  }) {
    final key = _emailKey(email);
    Map<String, dynamic>? best;
    for (final a in applications) {
      if ((a['userEmail'] ?? '').toString().toLowerCase().trim() != key) continue;
      if ((a['status'] ?? '').toString().toLowerCase() != 'approved') continue;
      best = a;
    }
    if (best != null) {
      final s = (best['state'] ?? '').toString().trim();
      if (s.isNotEmpty) return s;
    }
    return userState.trim();
  }

  static bool isRegistrarAssignedToState({
    required String email,
    required String userState,
    required bool isAuthorizedRegistrar,
    required List<Map<String, dynamic>> applications,
    required String state,
  }) {
    if (!isAuthorizedRegistrar) return false;
    final st = state.trim().toLowerCase();
    final key = _emailKey(email);
    for (final a in applications) {
      if ((a['userEmail'] ?? '').toString().toLowerCase().trim() != key) continue;
      final status = (a['status'] ?? '').toString().toLowerCase();
      if (status != 'approved' && status != 'pending') continue;
      if ((a['state'] ?? '').toString().trim().toLowerCase() == st) return true;
    }
    final serving = registrarStateForUser(
      email: email,
      userState: userState,
      applications: applications,
    );
    if (serving.trim().toLowerCase() == st) return true;
    if (userState.trim().toLowerCase() == st) return true;
    return false;
  }

  static List<Map<String, dynamic>> approvedApplicationsForState(
    List<Map<String, dynamic>> applications,
    String state,
  ) {
    final st = state.trim().toLowerCase();
    return applications.where((a) {
      if ((a['status'] ?? '').toString().toLowerCase() != 'approved') return false;
      return (a['state'] ?? '').toString().trim().toLowerCase() == st;
    }).map((e) => Map<String, dynamic>.from(e)).toList();
  }

  static int activeRegistrarsInState({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
    bool excludeRegistryAdmins = true,
  }) {
    final st = state.trim().toLowerCase();
    final emails = <String>{};
    for (final u in users) {
      final isReg = (u as dynamic).isAuthorizedRegistrar == true;
      if (!isReg) continue;
      if (excludeRegistryAdmins && (u as dynamic).isCivicRegistryAdmin == true) continue;
      final email = (u as dynamic).email.toString();
      final userState = (u as dynamic).state.toString();
      if (isRegistrarAssignedToState(
        email: email,
        userState: userState,
        isAuthorizedRegistrar: true,
        applications: applications,
        state: state,
      )) {
        emails.add(_emailKey(email));
      }
    }
    return emails.length;
  }

  static int slotsRemaining({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
  }) {
    final used = activeRegistrarsInState(
      state: state,
      applications: applications,
      users: users,
    );
    return (kNgmyMaxRegistrarsPerState - used).clamp(0, kNgmyMaxRegistrarsPerState);
  }

  static bool canApproveRegistrarForState({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
    bool applicantIsRegistryAdmin = false,
  }) {
    if (applicantIsRegistryAdmin) return true;
    return slotsRemaining(state: state, applications: applications, users: users) > 0;
  }

  /// Registrars listed for a state (includes Civic Registry Admin on every state).
  static List<dynamic> registrarsListedForState({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
  }) {
    final st = state.trim().toLowerCase();
    final out = <dynamic>[];
    for (final u in users) {
      final isReg = (u as dynamic).isAuthorizedRegistrar == true;
      if (!isReg) continue;
      if ((u as dynamic).isCivicRegistryAdmin == true) {
        out.add(u);
        continue;
      }
      final email = (u as dynamic).email.toString();
      final userState = (u as dynamic).state.toString();
      if (isRegistrarAssignedToState(
        email: email,
        userState: userState,
        isAuthorizedRegistrar: true,
        applications: applications,
        state: st,
      )) {
        out.add(u);
      }
    }
    return out;
  }
}
