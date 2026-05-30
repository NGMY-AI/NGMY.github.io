import 'dart:convert';
import 'dart:typed_data';

enum TransactionType { deposit, withdrawal, adminAdd, adminRemove, reimbursement, contribution, claim }
enum TransactionStatus { pending, approved, rejected }
enum PaymentMethod { cashApp, bitcoin, system }

class AppTransaction {
  final String id;
  final String userEmail;
  final double amount;
  final TransactionType type;
  final PaymentMethod method;
  final String? sourceDetails;
  final String? screenshotPath;
  final String? verificationCode;
  TransactionStatus status;
  final DateTime timestamp;

  AppTransaction({
    required this.id, required this.userEmail, required this.amount,
    required this.type, required this.method, this.sourceDetails,
    this.screenshotPath, this.verificationCode, this.status = TransactionStatus.pending,
    required this.timestamp,
  });

  Map<String, dynamic> toJson() => {
    'id': id, 'userEmail': userEmail, 'amount': amount,
    'type': type.index, 'method': method.index,
    'sourceDetails': sourceDetails, 'screenshotPath': screenshotPath,
    'verificationCode': verificationCode, 'status': status.index,
    'timestamp': timestamp.toUtc().toIso8601String(),
  };

  factory AppTransaction.fromJson(Map<String, dynamic> json) {
    DateTime parseDate(dynamic v) {
      if (v == null || v == "null" || v.toString().isEmpty) return DateTime.now();
      try {
        final d = DateTime.parse(v.toString());
        return d.isUtc ? d.toLocal() : d;
      } catch (_) { return DateTime.now(); }
    }
    return AppTransaction(
      id: json['id'] ?? '',
      userEmail: json['userEmail'] ?? '',
      amount: (json['amount'] ?? 0.0).toDouble(),
      type: TransactionType.values[(json['type'] ?? 0) as int],
      method: PaymentMethod.values[(json['method'] ?? 0) as int],
      sourceDetails: json['sourceDetails'],
      screenshotPath: json['screenshotPath'],
      verificationCode: json['verificationCode'],
      status: TransactionStatus.values[(json['status'] ?? 0) as int],
      timestamp: parseDate(json['timestamp']),
    );
  }
}

class AppConfig {
  String officialCashApp;
  String officialBitcoin;
  String termsAndConditions;
  String privacyPolicy;
  String loanPhone;
  String loanHowItWorks;
  String geminiApiKey;
  String logoUrl;
  List<String> cities;
  List<String> rooms;
  bool helpModeActive;
  String helpPurpose;
  String helpCashApp;
  String helpZelle;
  String helpPhone;
  String helpScopeType; // all, city, room
  String helpScopeValue;
  String helpCampaignId;
  String helpCampaignStartedAt;
  List<Map<String, dynamic>> helpCampaignClosures;
  List<String> openedContributionReceiptKeys;
  List<String> dismissedContributionReceiptKeys;
  List<Map<String, dynamic>> jobPosts;
  List<Map<String, dynamic>> jobWorkerApplications;
  List<Map<String, dynamic>> storeListings;
  List<Map<String, dynamic>> storeInquiries;
  List<Map<String, dynamic>> helpHelperApplications;
  List<Map<String, dynamic>> helpRequests;
  List<Map<String, dynamic>> helpBusinesses;
  int maxMediaPostsPerWeek;

  AppConfig({
    this.officialCashApp = 'NGMYpay',
    this.officialBitcoin = 'bc1q...',
    this.termsAndConditions = 'Welcome to NGMY. By using our services, you agree to...',
    this.privacyPolicy = 'We value your privacy. We collect data only to...',
    this.loanPhone = '706-623-7963',
    this.loanHowItWorks = '1. Submit your loan application with collateral details\n2. Your application will be reviewed within a few hours\n3. If approved, the loan amount will be credited to your account\n4. Make payments over 2 months (total repayment: loan + 36% interest)\n5. Upon full repayment, your collateral is released',
    this.geminiApiKey = '',
    this.logoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png',
    this.cities = const ['Stone Mountain', 'Atlanta', 'Savannah'],
    this.rooms = const ["Room M'minji", 'VIP Room', 'Main Lobby'],
    this.helpModeActive = false,
    this.helpPurpose = '',
    this.helpCashApp = '',
    this.helpZelle = '',
    this.helpPhone = '',
    this.helpScopeType = 'all',
    this.helpScopeValue = '',
    this.helpCampaignId = '',
    this.helpCampaignStartedAt = '',
    this.helpCampaignClosures = const [],
    this.openedContributionReceiptKeys = const [],
    this.dismissedContributionReceiptKeys = const [],
    this.jobPosts = const [],
    this.jobWorkerApplications = const [],
    this.storeListings = const [],
    this.storeInquiries = const [],
    this.helpHelperApplications = const [],
    this.helpRequests = const [],
    this.helpBusinesses = const [],
    this.maxMediaPostsPerWeek = 3,
  });

  Map<String, dynamic> toJson() => {
    'officialCashApp': officialCashApp,
    'officialBitcoin': officialBitcoin,
    'termsAndConditions': termsAndConditions,
    'privacyPolicy': privacyPolicy,
    'loanPhone': loanPhone,
    'loanHowItWorks': loanHowItWorks,
    'geminiApiKey': geminiApiKey,
    'logoUrl': logoUrl,
    'cities': cities,
    'rooms': rooms,
    'helpModeActive': helpModeActive,
    'helpPurpose': helpPurpose,
    'helpCashApp': helpCashApp,
    'helpZelle': helpZelle,
    'helpPhone': helpPhone,
    'helpScopeType': helpScopeType,
    'helpScopeValue': helpScopeValue,
    'helpCampaignId': helpCampaignId,
    'helpCampaignStartedAt': helpCampaignStartedAt,
    'helpCampaignClosures': helpCampaignClosures,
    'openedContributionReceiptKeys': openedContributionReceiptKeys,
    'dismissedContributionReceiptKeys': dismissedContributionReceiptKeys,
    'jobPosts': jobPosts,
    'jobWorkerApplications': jobWorkerApplications,
    'storeListings': storeListings,
    'storeInquiries': storeInquiries,
    'helpHelperApplications': helpHelperApplications,
    'helpRequests': helpRequests,
    'helpBusinesses': helpBusinesses,
    'maxMediaPostsPerWeek': maxMediaPostsPerWeek,
  };

  factory AppConfig.fromJson(Map<String, dynamic> json) => AppConfig(
    officialCashApp: json['officialCashApp'] ?? 'NGMYpay',
    officialBitcoin: json['officialBitcoin'] ?? 'bc1q...',
    termsAndConditions: json['termsAndConditions'] ?? 'Welcome to NGMY. By using our services, you agree to...',
    privacyPolicy: json['privacyPolicy'] ?? 'We value your privacy. We collect data only to...',
    loanPhone: json['loanPhone'] ?? '706-623-7963',
    loanHowItWorks: json['loanHowItWorks'] ?? '1. Submit your loan application with collateral details\n2. Your application will be reviewed within a few hours\n3. If approved, the loan amount will be credited to your account\n4. Make payments over 2 months (total repayment: loan + 36% interest)\n5. Upon full repayment, your collateral is released',
    geminiApiKey: _geminiKeyFromMap(json),
    logoUrl: json['logoUrl'] ?? 'https://i.ibb.co/LhbMvz9/ngmy-logo.png',
    cities: List<String>.from(json['cities'] ?? ['Stone Mountain', 'Atlanta', 'Savannah']),
    rooms: List<String>.from(json['rooms'] ?? ["Room M'minji", 'VIP Room', 'Main Lobby']),
    helpModeActive: json['helpModeActive'] ?? false,
    helpPurpose: json['helpPurpose'] ?? '',
    helpCashApp: json['helpCashApp'] ?? '',
    helpZelle: json['helpZelle'] ?? '',
    helpPhone: json['helpPhone'] ?? '',
    helpScopeType: json['helpScopeType'] ?? 'all',
    helpScopeValue: json['helpScopeValue'] ?? '',
    helpCampaignId: json['helpCampaignId'] ?? '',
    helpCampaignStartedAt: json['helpCampaignStartedAt'] ?? '',
    helpCampaignClosures: List<Map<String, dynamic>>.from((json['helpCampaignClosures'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    openedContributionReceiptKeys: List<String>.from(json['openedContributionReceiptKeys'] ?? const []),
    dismissedContributionReceiptKeys: List<String>.from(json['dismissedContributionReceiptKeys'] ?? const []),
    jobPosts: List<Map<String, dynamic>>.from((json['jobPosts'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    jobWorkerApplications: List<Map<String, dynamic>>.from((json['jobWorkerApplications'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    storeListings: List<Map<String, dynamic>>.from((json['storeListings'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    storeInquiries: List<Map<String, dynamic>>.from((json['storeInquiries'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    helpHelperApplications: List<Map<String, dynamic>>.from((json['helpHelperApplications'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    helpRequests: List<Map<String, dynamic>>.from((json['helpRequests'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    helpBusinesses: List<Map<String, dynamic>>.from((json['helpBusinesses'] ?? const []).map((e) => Map<String, dynamic>.from(e))),
    maxMediaPostsPerWeek: json['maxMediaPostsPerWeek'] ?? 3,
  );
}

String _geminiKeyFromMap(Map<String, dynamic> json) {
  for (final field in ['geminiApiKey', 'gemini_api_key', 'geminiapikey']) {
    final v = json[field]?.toString().trim();
    if (v != null && v.isNotEmpty) return v;
  }
  return '';
}

class InvestmentPlan {
  static const double fixedRoi = 0.0286; // 2.86% daily ROI for all plans
  static const int workDays = 261;

  String name;
  double price;
  double roi;

  InvestmentPlan({required this.name, required this.price, double? roi})
      : roi = fixedRoi;

  double get dailyIncome => price * fixedRoi;
  double get totalReturn => dailyIncome * workDays;

  void applyFixedRoi() => roi = fixedRoi;

  Map<String, dynamic> toJson() => {'name': name, 'price': price, 'roi': fixedRoi};
  factory InvestmentPlan.fromJson(Map<String, dynamic> json) => InvestmentPlan(
        name: (json['name'] ?? '').toString(),
        price: (json['price'] ?? 0.0).toDouble(),
      );
}

class MediaPost {
  final String id;
  final String userEmail;
  final String username;
  final String videoUrl;
  final String contentType; // video | image
  final String caption;
  final DateTime timestamp;
  int likes;
  List<String> likedBy;
  List<String> savedBy;
  List<Map<String, dynamic>> comments;

  MediaPost({
    required this.id,
    required this.userEmail,
    required this.username,
    required this.videoUrl,
    required this.caption,
    required this.timestamp,
    this.contentType = 'video',
    this.likes = 0,
    this.likedBy = const [],
    this.savedBy = const [],
    this.comments = const [],
  });

  Map<String, dynamic> toJson() => {
    'id': id,
    'userEmail': userEmail,
    'username': username,
    'videoUrl': videoUrl,
    'url': videoUrl,
    'contentType': contentType,
    'type': contentType,
    'caption': caption,
    'timestamp': timestamp.toUtc().toIso8601String(),
    'likes': likedBy.length,
    'likedBy': likedBy,
    'savedBy': savedBy,
    'comments': comments,
  };

  factory MediaPost.fromJson(Map<String, dynamic> json) {
    final likedBy = List<String>.from(json['likedBy'] ?? json['liked_by'] ?? const []);
    final savedBy = List<String>.from(json['savedBy'] ?? json['saved_by'] ?? const []);
    final comments = List<Map<String, dynamic>>.from(
      (json['comments'] ?? json['media_comments'] ?? const []).map((e) => Map<String, dynamic>.from(e)),
    );
    return MediaPost(
      id: json['id'] ?? '',
      userEmail: json['userEmail'] ?? json['user_email'] ?? '',
      username: json['username'] ?? 'User',
      videoUrl: json['videoUrl'] ?? json['video_url'] ?? '',
      contentType: (json['contentType'] ?? json['content_type'] ?? json['type'] ?? 'video').toString(),
      caption: json['caption'] ?? '',
      timestamp: DateTime.parse(json['timestamp'] ?? json['created_at'] ?? DateTime.now().toIso8601String()).toLocal(),
      likedBy: likedBy,
      savedBy: savedBy,
      comments: comments,
      likes: likedBy.isNotEmpty ? likedBy.length : (json['likes'] ?? 0),
    );
  }
}

class Announcement {
  final String id;
  final String title;
  final String message;
  final String? imageUrl;
  final String? videoUrl;
  final DateTime timestamp;
  final bool isAi;
  final String authorEmail;
  final String authorUsername;
  final String postType; // official | community

  Announcement({
    required this.id,
    required this.title,
    required this.message,
    this.imageUrl,
    this.videoUrl,
    required this.timestamp,
    this.isAi = false,
    this.authorEmail = '',
    this.authorUsername = 'NGMY',
    this.postType = 'official',
  });

  bool get isOfficial => postType == 'official';

  Map<String, dynamic> toJson() => {
    'id': id,
    'title': title,
    'message': message,
    'imageUrl': imageUrl,
    'videoUrl': videoUrl,
    'timestamp': timestamp.toUtc().toIso8601String(),
    'isAi': isAi,
    'authorEmail': authorEmail,
    'authorUsername': authorUsername,
    'postType': postType,
  };

  factory Announcement.fromJson(Map<String, dynamic> json) {
    return Announcement(
      id: json['id'] ?? '',
      title: json['title'] ?? '',
      message: json['message'] ?? '',
      imageUrl: json['imageUrl'],
      videoUrl: json['videoUrl'],
      timestamp: DateTime.parse(json['timestamp'] ?? DateTime.now().toIso8601String()).toLocal(),
      isAi: json['isAi'] ?? false,
      authorEmail: (json['authorEmail'] ?? json['author_email'] ?? '').toString(),
      authorUsername: (json['authorUsername'] ?? json['author_username'] ?? 'NGMY').toString(),
      postType: (json['postType'] ?? json['post_type'] ?? 'official').toString(),
    );
  }
}

class ActiveInvestment {
  String name; double amount; double dailyROI; final DateTime purchaseDate;
  double totalEarned; int daysClockedIn;
  ActiveInvestment({required this.name, required this.amount, required this.dailyROI, required this.purchaseDate, this.totalEarned = 0.0, this.daysClockedIn = 0});
  Map<String, dynamic> toJson() => {'name': name, 'amount': amount, 'dailyROI': dailyROI, 'purchaseDate': purchaseDate.toUtc().toIso8601String(), 'totalEarned': totalEarned, 'daysClockedIn': daysClockedIn};
  factory ActiveInvestment.fromJson(Map<String, dynamic> json) {
    DateTime parseDate(dynamic v) {
      if (v == null || v == "null" || v.toString().isEmpty) return DateTime.now();
      try {
        final d = DateTime.parse(v.toString());
        return d.isUtc ? d.toLocal() : d;
      } catch (_) { return DateTime.now(); }
    }
    return ActiveInvestment(
      name: json['name'],
      amount: (json['amount'] ?? 0.0).toDouble(),
      dailyROI: (json['dailyROI'] ?? 0.0).toDouble(),
      purchaseDate: parseDate(json['purchaseDate']),
      totalEarned: (json['totalEarned'] ?? 0.0).toDouble(),
      daysClockedIn: json['daysClockedIn'] ?? 0
    );
  }
  double get dailyAmount => amount * dailyROI;
  int get daysLeft => 261 - daysClockedIn;
}

class UserData {
  String email; String phone; String username; double accountBalance; double totalProfit;
  bool isClockedIn; DateTime? clockInStartTime; bool isAdmin; ActiveInvestment? activeInvestment;
  String status; // active, suspended, verified, disabled
  bool forceLogout; int referralCount; int points;
  String? profilePicturePath;
  bool isAuthorizedRegistrar;
  bool isApprovedWorker;
  bool isApprovedHelper;
  bool canSellOnStore;
  DateTime? lastClockInDate;
  String passwordHash;
  String state;
  int helps;
  int missed;
  bool isEnrolledInRegistry;
  String? fullName;
  String? dob;
  String? idType;
  String? registryId;
  String? homeAddress;
  String? city;
  String? room;
  String referredByCode;
  double clockInPenaltyPercent;
  String? pendingInvestmentName;
  double? pendingInvestmentAmount;
  double? pendingInvestmentRoi;
  String savedCashAppTag;
  String savedZelleInfo;
  String savedBitcoinAddress;

  UserData({this.email = '', this.phone = '', this.username = 'User', this.accountBalance = 0.0, this.totalProfit = 0.0, this.isClockedIn = false, this.clockInStartTime, this.isAdmin = false, this.activeInvestment, this.status = 'active', this.forceLogout = false, this.referralCount = 0, this.points = 0, this.profilePicturePath, this.isAuthorizedRegistrar = false, this.isApprovedWorker = false, this.isApprovedHelper = false, this.canSellOnStore = false, this.lastClockInDate, this.passwordHash = '', this.state = 'Georgia', this.helps = 0, this.missed = 0, this.isEnrolledInRegistry = false, this.fullName, this.dob, this.idType, this.registryId, this.homeAddress, this.city, this.room, this.referredByCode = '', this.clockInPenaltyPercent = 0.0, this.pendingInvestmentName, this.pendingInvestmentAmount, this.pendingInvestmentRoi, this.savedCashAppTag = '', this.savedZelleInfo = '', this.savedBitcoinAddress = ''});

  double get totalInvestmentAmount {
    if (activeInvestment == null) return 0.0;
    if (activeInvestment!.daysLeft <= 0) return 0.0;
    return activeInvestment!.amount;
  }
  bool get alreadyClockedInToday {
    if (lastClockInDate == null) return false;
    final now = DateTime.now();
    return lastClockInDate!.year == now.year &&
           lastClockInDate!.month == now.month &&
           lastClockInDate!.day == now.day;
  }
  double get currentTodayEarnings {
    if (!isClockedIn || clockInStartTime == null || activeInvestment == null) return 0.0;
    final elapsed = DateTime.now().difference(clockInStartTime!);
    final totalDaily = activeInvestment!.dailyAmount * (1 - (clockInPenaltyPercent.clamp(0.0, 100.0) / 100));
    double earnings = (totalDaily / 24.0) * (elapsed.inSeconds / 3600.0);
    return earnings > totalDaily ? totalDaily : earnings;
  }
  double get todayDailyGoal => activeInvestment == null ? 0.0 : (activeInvestment!.dailyAmount * (1 - (clockInPenaltyPercent.clamp(0.0, 100.0) / 100)));

  Map<String, dynamic> toJson() => {'email': email, 'phone': phone, 'username': username, 'accountBalance': accountBalance, 'totalProfit': totalProfit, 'isClockedIn': isClockedIn, 'clockInStartTime': clockInStartTime?.toUtc().toIso8601String(), 'isAdmin': isAdmin, 'activeInvestment': activeInvestment?.toJson(), 'status': status, 'forceLogout': forceLogout, 'referralCount': referralCount, 'points': points, 'profilePicturePath': profilePicturePath, 'isAuthorizedRegistrar': isAuthorizedRegistrar, 'isApprovedWorker': isApprovedWorker, 'isApprovedHelper': isApprovedHelper, 'canSellOnStore': canSellOnStore, 'lastClockInDate': lastClockInDate?.toUtc().toIso8601String(), 'passwordHash': passwordHash, 'state': state, 'helps': helps, 'missed': missed, 'isEnrolledInRegistry': isEnrolledInRegistry, 'fullName': fullName, 'dob': dob, 'idType': idType, 'registryId': registryId, 'homeAddress': homeAddress, 'city': city, 'room': room, 'referredByCode': referredByCode, 'clockInPenaltyPercent': clockInPenaltyPercent, 'pendingInvestmentName': pendingInvestmentName, 'pendingInvestmentAmount': pendingInvestmentAmount, 'pendingInvestmentRoi': pendingInvestmentRoi, 'savedCashAppTag': savedCashAppTag, 'savedZelleInfo': savedZelleInfo, 'savedBitcoinAddress': savedBitcoinAddress};

  factory UserData.fromJson(Map<String, dynamic> json) {
    DateTime? parseDate(dynamic v) {
      if (v == null || v == "null" || v.toString().isEmpty) return null;
      try {
        final d = DateTime.parse(v.toString());
        return d.isUtc ? d.toLocal() : d;
      } catch (_) { return null; }
    }
    ActiveInvestment? parseActiveInvestment(dynamic raw) {
      if (raw == null) return null;
      try {
        if (raw is Map<String, dynamic>) return ActiveInvestment.fromJson(raw);
        if (raw is Map) return ActiveInvestment.fromJson(Map<String, dynamic>.from(raw));
        if (raw is String && raw.trim().isNotEmpty) {
          final decoded = jsonDecode(raw);
          if (decoded is Map<String, dynamic>) return ActiveInvestment.fromJson(decoded);
          if (decoded is Map) return ActiveInvestment.fromJson(Map<String, dynamic>.from(decoded));
        }
      } catch (_) {}
      return null;
    }
    return UserData(
      email: json['email'] ?? '',
      phone: json['phone'] ?? '',
      username: json['username'] ?? 'User',
      accountBalance: (json['accountBalance'] ?? 0.0).toDouble(),
      totalProfit: (json['totalProfit'] ?? 0.0).toDouble(),
      isClockedIn: json['isClockedIn'] ?? false,
      clockInStartTime: parseDate(json['clockInStartTime']),
      isAdmin: json['isAdmin'] ?? false,
      activeInvestment: parseActiveInvestment(json['activeInvestment']),
      status: json['status'] ?? 'active',
      forceLogout: json['forceLogout'] ?? false,
      referralCount: json['referralCount'] ?? 0,
      points: json['points'] ?? 0,
      profilePicturePath: json['profilePicturePath'],
      isAuthorizedRegistrar: json['isAuthorizedRegistrar'] ?? false,
      isApprovedWorker: json['isApprovedWorker'] ?? false,
      isApprovedHelper: json['isApprovedHelper'] ?? false,
      canSellOnStore: json['canSellOnStore'] == true,
      lastClockInDate: parseDate(json['lastClockInDate']),
      passwordHash: json['passwordHash'] ?? '',
      state: json['state'] ?? 'Georgia',
      helps: json['helps'] ?? 0,
      missed: json['missed'] ?? 0,
      isEnrolledInRegistry: json['isEnrolledInRegistry'] ?? false,
      fullName: json['fullName'],
      dob: json['dob'],
      idType: json['idType'],
      registryId: json['registryId'],
      homeAddress: json['homeAddress'],
      city: json['city'],
      room: json['room'],
      referredByCode: (json['referredByCode'] ?? '').toString(),
      clockInPenaltyPercent: (json['clockInPenaltyPercent'] ?? 0.0).toDouble(),
      pendingInvestmentName: json['pendingInvestmentName'] as String?,
      pendingInvestmentAmount: json['pendingInvestmentAmount'] == null ? null : (json['pendingInvestmentAmount'] as num).toDouble(),
      pendingInvestmentRoi: json['pendingInvestmentRoi'] == null ? null : (json['pendingInvestmentRoi'] as num).toDouble(),
      savedCashAppTag: (json['savedCashAppTag'] ?? '').toString(),
      savedZelleInfo: (json['savedZelleInfo'] ?? '').toString(),
      savedBitcoinAddress: (json['savedBitcoinAddress'] ?? '').toString(),
    );
  }
}
