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
      'helpCampaignSpendings,helpModeActive,helpPurpose,helpCashApp,helpZelle,helpPhone,'
      'helpScopeType,helpScopeValue,helpState,helpCampaignId,helpCampaignStartedAt,helpCampaignClosures,'
      'geminiApiKey,gemini_api_key,aiApiKey,ai_api_key,gameTimeLimits,diceSettings,'
      'familyTreeCreateFee,familyTreePhotoMonthlyFee,familyTreePhotoAccessUntilByEmail,logoUrl,'
      'officialCashApp,officialBitcoin,loanPhone,loanHowItWorks,loanCompanyZelle';

  static const configBootstrapCore =
      'id,investmentPlans,ngmyChatClosed,civicSelfEnrollmentEnabled,civicRegistryPin,'
      'civicRegistryPinsByState,storeSellAccessEmails,openedContributionReceiptKeys,'
      'dismissedContributionReceiptKeys,familyTreeCreateFee,familyTreePhotoMonthlyFee,'
      'familyTreePhotoAccessUntilByEmail,geminiApiKey,gemini_api_key,aiApiKey,ai_api_key,'
      'gameTimeLimits,diceSettings,gameInvites,officialCashApp,officialBitcoin,'
      'loanPhone,loanHowItWorks,loanCompanyZelle';

  static const configBootstrapHeavy =
      'storeListings,storeInquiries,storeOrders,helpHelperApplications,helpRequests,'
      'helpBusinesses,loanApplications,civicRegistrarApplications,ngmyPopups,ngmyVideoPopups,'
      'jobPosts,jobWorkerApplications,gameInvites,mediaVirtualProfiles,mediaDeliveryQueue,'
      'termsAndConditions,privacyPolicy';

  static const geminiOnly = 'id,geminiApiKey,gemini_api_key,aiApiKey,ai_api_key';

  static const youtubeOnly = 'id,youtubeApiKey,youtube_api_key';

  /// Login probe — small payload, fast on slow networks.
  static const userLogin =
      'email,passwordHash,username,phone,isAdmin,status,forceLogout,accountBalance,canSellOnStore,freeTrialActive,freeTrialDailyAmount,profilePicturePath,'
      'state,civicRegistryStateSwitchesUsed,civicRegistryAnchorState';

  /// Optional — only when users.crownBadge column exists (see users_crown_badge_column.sql).
  static const userCrownBadge = 'crownBadge';

  /// Admin Users tab — every NGMY account row (paginated).
  static const adminUsersList =
      'email,username,phone,passwordHash,isAdmin,status,forceLogout,accountBalance,totalProfit,'
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
