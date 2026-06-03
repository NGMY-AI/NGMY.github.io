/// Column lists for Supabase reads — smaller payloads, less cached egress.
class NgmySupabaseColumns {
  NgmySupabaseColumns._();

  /// Periodic config poll (no full legal blobs unless needed elsewhere).
  static const configPoll =
      'id,ngmyChatClosed,investmentPlans,storeOrders,storeInquiries,storeListings,'
      'helpHelperApplications,helpRequests,helpBusinesses,loanApplications,'
      'civicRegistrarApplications,ngmyPopups,ngmyVideoPopups,jobPosts,jobWorkerApplications,'
      'gameInvites,civicSelfEnrollmentEnabled,civicRegistryPin,civicRegistryPinsByState,'
      'openedContributionReceiptKeys,dismissedContributionReceiptKeys,storeSellAccessEmails,'
      'geminiApiKey,gemini_api_key,aiApiKey,ai_api_key,gameTimeLimits,diceSettings,'
      'familyTreeCreateFee,familyTreePhotoMonthlyFee,familyTreePhotoAccessUntilByEmail';

  static const configBootstrapCore =
      'id,investmentPlans,ngmyChatClosed,civicSelfEnrollmentEnabled,civicRegistryPin,'
      'civicRegistryPinsByState,storeSellAccessEmails,openedContributionReceiptKeys,'
      'dismissedContributionReceiptKeys,familyTreeCreateFee,familyTreePhotoMonthlyFee,'
      'familyTreePhotoAccessUntilByEmail,geminiApiKey,gemini_api_key,aiApiKey,ai_api_key';

  static const configBootstrapHeavy =
      'storeListings,storeInquiries,storeOrders,helpHelperApplications,helpRequests,'
      'helpBusinesses,loanApplications,civicRegistrarApplications,ngmyPopups,ngmyVideoPopups,'
      'jobPosts,jobWorkerApplications,gameInvites,mediaVirtualProfiles,mediaDeliveryQueue,'
      'termsAndConditions,privacyPolicy';

  static const geminiOnly = 'id,geminiApiKey,gemini_api_key,aiApiKey,ai_api_key';

  /// Media feed without re-downloading large comment blobs on every poll.
  static const mediaFeed =
      'id,authorEmail,authorUsername,videoUrl,imageUrl,caption,timestamp,likes,'
      'likedBy,savedBy,views,isStory,storyExpiresAt';
}
