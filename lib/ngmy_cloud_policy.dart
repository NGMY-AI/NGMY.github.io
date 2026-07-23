/// Which features may use Supabase Realtime vs cloud persistence.
library;

class NgmyCloudPolicy {
  NgmyCloudPolicy._();

  static const bool realtimeForRegularUsers = false;
  static const Set<String> adminRealtimeTables = {'config', 'store_listings'};

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

  static const Set<String> cloudUserKeys = {
    'email',
    'username',
    'phone',
    'passwordHash',
    'status',
    'isAdmin',
    // Admin approval, revoke, restore, and deletion synchronize this cached
    // flag; effective access still comes from civicRegistrarApplications.
    'isAuthorizedRegistrar',
    'profilePicturePath',
  };

  /// Growth Income deposits/withdrawals sync to Supabase so admin can approve with proofs.
  static const bool persistTransactionsToCloud = true;
  static const bool persistMediaPostsToCloud = false;
  static const bool persistAnnouncementsToCloud = false;

    /// ngmy_settings keys this build may read/write (RLS still gates who can mutate).
  static bool allowNgmySettingsKey(String key) {
    final k = key.trim();
    if (k.isEmpty) return false;
    // Published menus / bios / essentials transfer codes
    if (k == 'ngmy_menu_publish_registry' || k.startsWith('ngmy_menu_pub_')) return true;
    if (k == 'ngmy_bio_publish_registry' || k.startsWith('ngmy_bio_pub_')) return true;
    if (k.startsWith('ngmy_essentials_code_v1_')) return true;
    // Admin + app settings (self-enrollment, payments, communicate, branding, …)
    if (k.startsWith('ngmy_') || k.startsWith('civic_')) return true;
    if (k.contains('settings') || k.contains('payment') || k.contains('branding')) return true;
    if (k.contains('help') || k.contains('chat') || k.contains('popup') || k.contains('plans')) return true;
    return false;
  }

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
}
