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
    'profilePicturePath',
  };

  static const bool persistTransactionsToCloud = false;
  static const bool persistMediaPostsToCloud = false;
  static const bool persistAnnouncementsToCloud = false;

  /// Published bio/menu pages must reach Supabase so guest links work.
  static bool allowNgmySettingsKey(String key) {
    final k = key.trim();
    if (k == 'ngmy_menu_publish_registry' || k.startsWith('ngmy_menu_pub_')) return true;
    if (k == 'ngmy_bio_publish_registry' || k.startsWith('ngmy_bio_pub_')) return true;
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
