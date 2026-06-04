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

  /// Login probe — small payload, fast on slow networks.
  static const userLogin =
      'email,passwordHash,username,phone,isAdmin,status,forceLogout,accountBalance';

  /// Media feed read — matches live Supabase (extras in `data` jsonb).
  static const mediaFeedCore =
      'id,userEmail,videoUrl,url,contentType,type,description,created_at,likedBy,savedBy,data';

  /// Full media row when all optional columns exist (see media_optional_columns.sql).
  static const mediaFeed =
      'id,userEmail,username,videoUrl,url,contentType,type,caption,timestamp,likes,'
      'likedBy,savedBy,comments,data,taggedUsers,mediaAspectRatio,'
      'externalLink,previewSeconds,continuePrice,watchReward,watchRequiredSeconds,rewardedViewers';
}
