/// Column lists for Supabase reads — smaller payloads, less cached egress.
/// Secret columns (API keys, passwordHash) must never appear here.
class NgmySupabaseColumns {
  NgmySupabaseColumns._();

  /// Periodic config poll (no API secret columns — those stay server-only).
  static const configPoll =
      'id,ngmyChatClosed,investmentPlans,storeOrders,storeInquiries,storeListings,'
      'helpHelperApplications,helpRequests,helpBusinesses,loanApplications,'
      'civicRegistrarApplications,ngmyPopups,ngmyVideoPopups,jobPosts,jobWorkerApplications,'
      'gameInvites,civicSelfEnrollmentEnabled,civicRegistryPin,civicRegistryPinsByState,'
      'openedContributionReceiptKeys,dismissedContributionReceiptKeys,storeSellAccessEmails,'
      'helpCampaignSpendings,helpModeActive,helpPurpose,helpCashApp,helpZelle,helpPhone,'
      'helpScopeType,helpScopeValue,helpState,helpCampaignId,helpCampaignStartedAt,helpCampaignClosures,'
      'gameTimeLimits,diceSettings,'
      'familyTreeCreateFee,familyTreePhotoMonthlyFee,familyTreePhotoAccessUntilByEmail,logoUrl,'
      'officialCashApp,officialBitcoin,loanPhone,loanHowItWorks,loanCompanyZelle';

  static const configBootstrapCore =
      'id,investmentPlans,ngmyChatClosed,civicSelfEnrollmentEnabled,civicRegistryPin,'
      'civicRegistryPinsByState,civicCitiesByState,cities,rooms,storeSellAccessEmails,openedContributionReceiptKeys,'
      'dismissedContributionReceiptKeys,familyTreeCreateFee,familyTreePhotoMonthlyFee,'
      'familyTreePhotoAccessUntilByEmail,'
      'gameTimeLimits,diceSettings,gameInvites,officialCashApp,officialBitcoin,'
      'loanPhone,loanHowItWorks,loanCompanyZelle';

  static const configBootstrapHeavy =
      'storeListings,storeInquiries,storeOrders,helpHelperApplications,helpRequests,'
      'helpBusinesses,loanApplications,civicRegistrarApplications,ngmyPopups,ngmyVideoPopups,'
      'jobPosts,jobWorkerApplications,gameInvites,mediaVirtualProfiles,mediaDeliveryQueue,'
      'termsAndConditions,privacyPolicy';

  /// Deprecated: API keys must not be selected by clients.
  static const geminiOnly = 'id';

  static const youtubeOnly = 'id';

  /// Login probe — never includes passwordHash (verified server-side).
  static const userLogin =
      'email,username,phone,isAdmin,status,forceLogout,accountBalance,canSellOnStore,freeTrialActive,freeTrialDailyAmount,profilePicturePath,'
      'state,civicRegistryStateSwitchesUsed,civicRegistryAnchorState';

  /// Optional — only when users.crownBadge column exists (see users_crown_badge_column.sql).
  static const userCrownBadge = 'crownBadge';

  /// Admin Users tab — every NGMY account row (paginated). Never select passwordHash.
  static const adminUsersList =
      'email,username,phone,isAdmin,status,forceLogout,accountBalance,totalProfit,'
      'canSellOnStore,freeTrialActive,freeTrialDailyAmount,profilePicturePath,referredByCode,referralCount,'
      'points,mediaBio,isEnrolledInRegistry,fullName,state,isAuthorizedRegistrar,isApprovedWorker,isApprovedHelper';

  /// Media feed read — matches live Supabase (extras in `data` jsonb).
  static const mediaFeedCore =
      'id,userEmail,videoUrl,url,contentType,type,description,created_at,likes,shareCount,likedBy,savedBy,sharedBy,comments,data';

  /// Full media row when all optional columns exist (see media_optional_columns.sql).
  static const mediaFeed =
      'id,userEmail,username,videoUrl,url,contentType,type,caption,timestamp,likes,'
      'likedBy,savedBy,comments,data,taggedUsers,mediaAspectRatio,'
      'externalLink,previewSeconds,continuePrice,watchReward,watchRequiredSeconds,rewardedViewers';
}
