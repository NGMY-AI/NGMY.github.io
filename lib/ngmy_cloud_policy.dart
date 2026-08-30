/// Which features may use Supabase Realtime vs cloud persistence.
library;

class NgmyCloudPolicy {
  NgmyCloudPolicy._();

  static const bool realtimeForRegularUsers = false;
  static const Set<String> adminRealtimeTables = {'config', 'store_listings'};

  /// Public config columns only. Locked PII blobs load via Edge (privateLists / civic).
  static const Set<String> cloudConfigKeys = {
    'civicSelfEnrollmentEnabled',
    'storeListings',
    'storeSellAccessEmails',
    'ngmyPopups',
    'ngmyVideoPopups',
    'familyTreeCreateFee',
    'familyTreePhotoMonthlyFee',
  };

  /// Edge-only geography (civic_cities_rooms settings key).
  static const Set<String> lockedConfigColumns = {
    'civicCitiesByState',
    'cities',
    'rooms',
    'storeOrders',
    'storeInquiries',
    'loanApplications',
    'gameInvites',
    'jobWorkerApplications',
    'jobPosts',
    'helpHelperApplications',
    'helpRequests',
    'helpBusinesses',
    'mediaVirtualProfiles',
    'familyTreePhotoAccessUntilByEmail',
    'civicRegistrarApplications',
    'civicRegistryMembers',
    'civicRegistryPin',
    'civicRegistryPinsByState',
    'geminiApiKey',
    'gemini_api_key',
    'aiApiKey',
    'ai_api_key',
    'youtubeApiKey',
    'youtube_api_key',
    'elevenLabsApiKey',
    'elevenlabs_api_key',
    'resendApiKey',
    'passwordHash',
    'helpCampaignSpendings',
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
    // Civic state is an account setting. The state-change allowance must
    // survive restarts, logins, and device changes until an admin resets it.
    'state',
    'civicRegistryStateSwitchesUsed',
    'civicRegistryAnchorState',
    'profilePicturePath',
  };

  /// Growth Income deposits/withdrawals sync to Supabase so admin can approve with proofs.
  static const bool persistTransactionsToCloud = true;
  static const bool persistMediaPostsToCloud = false;
  static const bool persistAnnouncementsToCloud = false;

    /// ngmy_settings keys readable without admin JWT (matches SQL allowlist).
  static bool settingsKeyPublicReadable(String key) {
    final k = key.trim();
    if (k.isEmpty) return false;
    const exact = {
      'ngmy_popups',
      'ngmy_chat_closed',
      'terms_and_conditions',
      'privacy_policy',
      'investment_plans',
      'ngmy_app_branding',
      'civic_self_enrollment_settings',
      'home_vote_ad_campaign',
      'ngmy_menu_publish_registry',
      'ngmy_bio_publish_registry',
      'ngmy_slides_transfer_qr_stashes_v1',
    };
    if (exact.contains(k)) return true;
    if (k.startsWith('ngmy_menu_pub_')) return true;
    if (k.startsWith('ngmy_bio_pub_')) return true;
    if (k.startsWith('ngmy_doc_share_code_v2_')) return true;
    if (k.startsWith('ngmy_doc_share_stash_v2_')) return true;
    if (k.startsWith('ngmy_essentials_code_v1_')) return true;
    return false;
  }

  /// Client-side guard — public keys or admin JWT writes via Supabase client.
  static bool allowNgmySettingsKey(String key) {
    if (settingsKeyPublicReadable(key)) return true;
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
