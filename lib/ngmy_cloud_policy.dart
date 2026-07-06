/// Which features may use Supabase Realtime vs cloud persistence.
///
/// Realtime is admin-only and limited to civic registry, store, popups, and
/// store payment orders. Everything else is local-first with optional polling.
library;

class NgmyCloudPolicy {
  NgmyCloudPolicy._();

  /// Regular users never open Supabase Realtime channels.
  static const bool realtimeForRegularUsers = false;

  /// Admin Realtime watches `config` (scoped fields) and `store_listings`.
  static const Set<String> adminRealtimeTables = {'config', 'store_listings'};

  /// `config` row keys written to / read from Supabase.
  static const Set<String> cloudConfigKeys = {
    'civicRegistrarApplications',
    'civicRegistryMembers',
    'civicRegistryPin',
    'civicRegistryPinsByState',
    'civicCitiesByState',
    'civicSelfEnrollmentEnabled',
    'cities',
    'rooms',
    'storeListings',
    'storeOrders',
    'storeInquiries',
    'storeSellAccessEmails',
    'ngmyPopups',
    'ngmyVideoPopups',
    'familyTreeCreateFee',
    'familyTreePhotoMonthlyFee',
    'familyTreePhotoAccessUntilByEmail',
  };

  /// Minimal user row for admin signup roster + profile avatars (not balances).
  static const Set<String> cloudUserKeys = {
    'email',
    'username',
    'phone',
    'passwordHash',
    'status',
    'isAdmin',
    'profilePicturePath',
  };

  static const bool persistTransactionsToCloud = false;
  static const bool persistMediaPostsToCloud = false;
  static const bool persistAnnouncementsToCloud = false;
  static const bool persistNgmySettingsToCloud = false;

  static Map<String, dynamic> filterConfigForCloud(Map<String, dynamic> row) {
    final out = <String, dynamic>{};
    final id = row['id'];
    if (id != null) out['id'] = id;
    for (final k in cloudConfigKeys) {
      if (row.containsKey(k)) out[k] = row[k];
    }
    return out;
  }

  static Map<String, dynamic> filterConfigFromRemote(Map<String, dynamic> row) {
    final out = <String, dynamic>{};
    for (final k in cloudConfigKeys) {
      if (row.containsKey(k)) out[k] = row[k];
    }
    return out;
  }

  static Map<String, dynamic> filterUserRowForCloud(Map<String, dynamic> row) {
    final out = <String, dynamic>{};
    for (final e in row.entries) {
      if (cloudUserKeys.contains(e.key)) out[e.key] = e.value;
    }
    return out;
  }

  static bool userRowHasCloudFields(Map<String, dynamic> row) {
    return row.keys.any((k) => cloudUserKeys.contains(k) && k != 'email');
  }
}
