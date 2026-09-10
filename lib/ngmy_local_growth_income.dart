import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'main.dart';
import 'ngmy_db_relay.dart';
import 'ngmy_game_session.dart';
import 'ngmy_local_snapshot_sync.dart';
import 'ngmy_network_resilience.dart';

/// One NGMY account's Growth Income wallet — local cache plus a cloud copy so
/// every device signed into that account shows the same money, plan, and profit.
class NgmyLocalGrowthIncomeStore {
  /// v1 copied the main Growth Income wallet on first open; v2 starts fresh.
  static const int walletSchemaVersion = 2;
  static const String cloudKeyPrefix = 'ngmy_gi_account_wallet_v1_';

  static String _normalize(String email) => email.toLowerCase().trim();

  static String _key(String realEmail) => 'ngmy_local_growth_income_${_normalize(realEmail)}';

  static String creditedPrefsKey(String realEmail) =>
      'ngmy_gi_credited_txn_ids_${_normalize(realEmail)}';

  static String cloudSettingsKey(String realEmail) =>
      '$cloudKeyPrefix${base64Url.encode(utf8.encode(_normalize(realEmail)))}';

  /// The `UserData.email` used internally for this copy. Deliberately distinct
  /// from the real account email so widgets we reuse from the real app (like
  /// `NgmyLiveBalance`, which caches balances globally per real email) never
  /// collide with the real account's cached balance — that mismatch was the
  /// cause of the balance shown here disagreeing with the local figures.
  static String identityEmailFor(String realEmail) => '${_normalize(realEmail)}+local.ngmy';

  /// Loads this device's cached copy. Call [reconcileWithCloud] afterwards so
  /// a second phone on the same account picks up the same wallet.
  static Future<({
    UserData user,
    List<AppTransaction> transactions,
    int walletStateRevision,
    DateTime? updatedAt,
    List<String> creditedTxnIds,
  })> load(String realEmail, UserData liveUserSeed) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(realEmail));
    if (raw == null || raw.trim().isEmpty) {
      final seeded = _freshUser(realEmail, liveUserSeed);
      await save(realEmail, seeded, const [], walletStateRevision: 0);
      ngmySeedLiveBalance(seeded.email, seeded.accountBalance);
      return (
        user: seeded,
        transactions: <AppTransaction>[],
        walletStateRevision: 0,
        updatedAt: null,
        creditedTxnIds: await loadCreditedIds(realEmail),
      );
    }
    try {
      final map = jsonDecode(raw) as Map<String, dynamic>;
      final version = (map['walletSchemaVersion'] as num?)?.toInt() ?? 1;
      var user = _userFromMap(realEmail, map);
      var transactions = _transactionsFromMap(map);
      var revision = _revisionFromMap(map);
      if (version < walletSchemaVersion) {
        _resetFinancialState(user);
        transactions = <AppTransaction>[];
        revision = 0;
        await save(realEmail, user, transactions, walletStateRevision: revision);
      } else if (!map.containsKey('walletStateRevision')) {
        revision = _initialRevisionFromActivity(transactions);
        await save(realEmail, user, transactions, walletStateRevision: revision);
      }
      ngmySeedLiveBalance(user.email, user.accountBalance);
      final credited = _creditedFromMap(map);
      return (
        user: user,
        transactions: transactions,
        walletStateRevision: revision,
        updatedAt: _updatedAtFromMap(map),
        creditedTxnIds: credited.isNotEmpty ? credited : await loadCreditedIds(realEmail),
      );
    } catch (_) {
      final seeded = _freshUser(realEmail, liveUserSeed);
      await save(realEmail, seeded, const [], walletStateRevision: 0);
      ngmySeedLiveBalance(seeded.email, seeded.accountBalance);
      return (
        user: seeded,
        transactions: <AppTransaction>[],
        walletStateRevision: 0,
        updatedAt: null,
        creditedTxnIds: await loadCreditedIds(realEmail),
      );
    }
  }

  static int _revisionFromMap(Map<String, dynamic> map) => (map['walletStateRevision'] as num?)?.toInt() ?? 0;

  /// Seeds revision for wallets saved before anti-cheat versioning existed.
  static int _initialRevisionFromActivity(List<AppTransaction> transactions) {
    if (transactions.isEmpty) return 0;
    return transactions.length;
  }

  static Future<int> readWalletStateRevision(String realEmail) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(realEmail));
    if (raw == null || raw.trim().isEmpty) return 0;
    try {
      return _revisionFromMap(jsonDecode(raw) as Map<String, dynamic>);
    } catch (_) {
      return 0;
    }
  }

  static Future<void> save(
    String realEmail,
    UserData user,
    List<AppTransaction> transactions, {
    int? walletStateRevision,
    bool bumpWalletRevision = false,
    DateTime? updatedAt,
    List<String>? creditedTxnIds,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    var revision = walletStateRevision;
    if (revision == null) {
      revision = await readWalletStateRevision(realEmail);
      if (bumpWalletRevision) revision++;
    }
    final at = updatedAt ?? DateTime.now().toUtc();
    final credited = creditedTxnIds ?? await loadCreditedIds(realEmail);
    await prefs.setString(
      _key(realEmail),
      jsonEncode(_toMap(
        user,
        transactions,
        ownerEmail: realEmail,
        walletStateRevision: revision,
        updatedAt: at,
        creditedTxnIds: credited,
      )),
    );
    await saveCreditedIds(realEmail, credited);
    unawaited(ngmySyncLocalLiveSnapshotIfRegistered(
      ownerEmail: realEmail,
      user: user,
      transactions: transactions,
      walletStateRevision: revision,
    ));
  }

  /// Overwrites the local copy outright (used by snapshot restore — safe here
  /// since this state was never database-authoritative).
  static Future<void> replace(
    String realEmail,
    UserData user,
    List<AppTransaction> transactions, {
    required int walletStateRevision,
  }) =>
      save(realEmail, user, transactions, walletStateRevision: walletStateRevision);

  static UserData _freshUser(String realEmail, UserData live) => UserData(
        email: identityEmailFor(realEmail),
        username: live.username,
      );

  /// Immediate first frame so Growth Income never shows a spinner.
  static UserData previewUser(UserData live) {
    final user = _freshUser(live.email, live);
    user.accountBalance = live.accountBalance.clamp(0.0, double.infinity);
    user.totalProfit = live.totalProfit;
    final inv = live.activeInvestment;
    if (inv != null) {
      user.activeInvestment = ActiveInvestment(
        name: inv.name,
        amount: inv.amount,
        dailyROI: inv.dailyROI,
        purchaseDate: inv.purchaseDate,
        daysClockedIn: inv.daysClockedIn,
        totalEarned: inv.totalEarned,
      );
    }
    return user;
  }

  static void _resetFinancialState(UserData user) {
    user.accountBalance = 0;
    user.totalProfit = 0;
    user.isClockedIn = false;
    user.clockInStartTime = null;
    user.clockInPenaltyPercent = 0;
    user.lastClockInDate = null;
    user.lastClockInEarningsDate = null;
    user.todayClockInEarned = 0;
    user.pendingInvestmentName = null;
    user.pendingInvestmentAmount = null;
    user.pendingInvestmentRoi = null;
    user.activeInvestment = null;
  }

  static Map<String, dynamic> _toMap(
    UserData user,
    List<AppTransaction> transactions, {
    required String ownerEmail,
    required int walletStateRevision,
    DateTime? updatedAt,
    List<String>? creditedTxnIds,
  }) =>
      {
        'walletSchemaVersion': walletSchemaVersion,
        'walletStateRevision': walletStateRevision,
        'ownerEmail': _normalize(ownerEmail),
        'updatedAt': (updatedAt ?? DateTime.now().toUtc()).toIso8601String(),
        'creditedTxnIds': creditedTxnIds ?? const <String>[],
        'username': user.username,
        'accountBalance': user.accountBalance,
        'totalProfit': user.totalProfit,
        'isClockedIn': user.isClockedIn,
        'clockInStartTime': user.clockInStartTime?.toUtc().toIso8601String(),
        'clockInPenaltyPercent': user.clockInPenaltyPercent,
        'lastClockInDate': user.lastClockInDate?.toUtc().toIso8601String(),
        'lastClockInEarningsDate': user.lastClockInEarningsDate?.toUtc().toIso8601String(),
        'todayClockInEarned': user.todayClockInEarned,
        'pendingInvestmentName': user.pendingInvestmentName,
        'pendingInvestmentAmount': user.pendingInvestmentAmount,
        'pendingInvestmentRoi': user.pendingInvestmentRoi,
        'activeInvestment': user.activeInvestment == null
            ? null
            : {
                'name': user.activeInvestment!.name,
                'amount': user.activeInvestment!.amount,
                'dailyROI': user.activeInvestment!.dailyROI,
                'purchaseDate': user.activeInvestment!.purchaseDate.toUtc().toIso8601String(),
                'totalEarned': user.activeInvestment!.totalEarned,
                'daysClockedIn': user.activeInvestment!.daysClockedIn,
              },
        'transactions': transactions.map(_txnToMap).toList(),
      };

  static UserData _userFromMap(String realEmail, Map<String, dynamic> map) {
    DateTime? parseDate(dynamic v) => v == null ? null : DateTime.tryParse(v.toString())?.toLocal();
    ActiveInvestment? investment;
    final rawInvestment = map['activeInvestment'];
    if (rawInvestment is Map) {
      final m = Map<String, dynamic>.from(rawInvestment);
      investment = ActiveInvestment(
        name: (m['name'] ?? '').toString(),
        amount: (m['amount'] as num? ?? 0).toDouble(),
        dailyROI: (m['dailyROI'] as num? ?? 0).toDouble(),
        purchaseDate: parseDate(m['purchaseDate']) ?? DateTime.now(),
        totalEarned: (m['totalEarned'] as num? ?? 0).toDouble(),
        daysClockedIn: (m['daysClockedIn'] as num? ?? 0).toInt(),
      );
    }
    return UserData(
      email: identityEmailFor(realEmail),
      username: (map['username'] ?? 'User').toString(),
      accountBalance: (map['accountBalance'] as num? ?? 0).toDouble(),
      totalProfit: (map['totalProfit'] as num? ?? 0).toDouble(),
      isClockedIn: map['isClockedIn'] == true,
      clockInStartTime: parseDate(map['clockInStartTime']),
      clockInPenaltyPercent: (map['clockInPenaltyPercent'] as num? ?? 0).toDouble(),
      lastClockInDate: parseDate(map['lastClockInDate']),
      lastClockInEarningsDate: parseDate(map['lastClockInEarningsDate']),
      todayClockInEarned: (map['todayClockInEarned'] as num? ?? 0).toDouble(),
      pendingInvestmentName: map['pendingInvestmentName'] as String?,
      pendingInvestmentAmount: (map['pendingInvestmentAmount'] as num?)?.toDouble(),
      pendingInvestmentRoi: (map['pendingInvestmentRoi'] as num?)?.toDouble(),
      activeInvestment: investment,
    );
  }

  static Map<String, dynamic> _txnToMap(AppTransaction t) => {
        'id': t.id,
        'userEmail': t.userEmail,
        'amount': t.amount,
        'type': t.type.name,
        'method': t.method.name,
        'sourceDetails': t.sourceDetails,
        'verificationCode': t.verificationCode,
        'status': t.status.name,
        'timestamp': t.timestamp.toUtc().toIso8601String(),
      };

  static AppTransaction? _txnFromMap(Map<String, dynamic> m) {
    try {
      return AppTransaction(
        id: (m['id'] ?? '').toString(),
        userEmail: (m['userEmail'] ?? '').toString(),
        amount: (m['amount'] as num? ?? 0).toDouble(),
        type: TransactionType.values.byName((m['type'] ?? 'reimbursement').toString()),
        method: PaymentMethod.values.byName((m['method'] ?? 'system').toString()),
        sourceDetails: m['sourceDetails'] as String?,
        verificationCode: m['verificationCode']?.toString(),
        status: TransactionStatus.values.byName((m['status'] ?? 'approved').toString()),
        timestamp: DateTime.tryParse((m['timestamp'] ?? '').toString())?.toLocal() ?? DateTime.now(),
      );
    } catch (_) {
      return null;
    }
  }

  static List<AppTransaction> _transactionsFromMap(Map<String, dynamic> map) {
    final raw = map['transactions'];
    if (raw is! List) return const [];
    return raw
        .map((e) => e is Map ? _txnFromMap(Map<String, dynamic>.from(e)) : null)
        .whereType<AppTransaction>()
        .toList();
  }

  /// Applies a transaction to the GI history user and mirrors the resulting
  /// balance onto [realEmail] so app-wide payments (Store, fees, games, etc.)
  /// can spend Growth Income money everywhere.
  static void applyTransaction(UserData user, AppTransaction t, {String? realEmail}) {
    ngmyApplyApprovedTransactionToBalance(user, t);
    ngmySeedLiveBalance(user.email, user.accountBalance);
    final real = (realEmail ?? '').trim();
    if (real.isNotEmpty) {
      ngmyNotifyBalanceChanged(email: real, balance: user.accountBalance, allowIncrease: true);
    }
  }

  /// Pulls this account's Growth Income wallet (cloud + this phone) onto
  /// [liveUser] so Store, fees, and games spend the same money as Growth Income.
  static Future<void> reconcileIntoLiveUser(dynamic liveUser) async {
    final user = liveUser as UserData;
    final realEmail = user.email.trim();
    if (realEmail.isEmpty) return;
    try {
      final loaded = await load(realEmail, user);
      final synced = await reconcileWithCloud(
        realEmail: realEmail,
        localUser: loaded.user,
        localTransactions: loaded.transactions,
        localRevision: loaded.walletStateRevision,
        localUpdatedAt: loaded.updatedAt,
        localCreditedIds: loaded.creditedTxnIds,
      );
      final gi = synced.user;
      user.accountBalance = gi.accountBalance;
      user.totalProfit = gi.totalProfit;
      user.isClockedIn = gi.isClockedIn;
      user.clockInStartTime = gi.clockInStartTime;
      user.clockInPenaltyPercent = gi.clockInPenaltyPercent;
      user.lastClockInDate = gi.lastClockInDate;
      user.lastClockInEarningsDate = gi.lastClockInEarningsDate;
      user.todayClockInEarned = gi.todayClockInEarned;
      user.pendingInvestmentName = gi.pendingInvestmentName;
      user.pendingInvestmentAmount = gi.pendingInvestmentAmount;
      user.pendingInvestmentRoi = gi.pendingInvestmentRoi;
      final inv = gi.activeInvestment;
      user.activeInvestment = inv == null
          ? null
          : ActiveInvestment(
              name: inv.name,
              amount: inv.amount,
              dailyROI: inv.dailyROI,
              purchaseDate: inv.purchaseDate,
              daysClockedIn: inv.daysClockedIn,
              totalEarned: inv.totalEarned,
            );
      ngmySeedLiveBalance(user.email, gi.accountBalance, allowIncrease: true);
      ngmySeedLiveBalance(gi.email, gi.accountBalance, allowIncrease: true);
    } catch (_) {}
  }

  // --- Local equivalents of main.dart's library-private clock-in helpers ---
  // (Dart privacy is file-scoped, so `_ngmyIsWeekend` etc. in main.dart can't
  // be imported here — these are small, deliberate re-implementations.)

  static bool isWeekend(DateTime d) => d.weekday == DateTime.saturday || d.weekday == DateTime.sunday;

  static bool sameCalendarDay(DateTime? a, DateTime b) {
    if (a == null) return false;
    return a.year == b.year && a.month == b.month && a.day == b.day;
  }

  static int _minutesSinceMidnight(DateTime now) => now.hour * 60 + now.minute;

  /// Mirrors main.dart:5256 _ngmyClockInLatePenaltyPercent.
  static double latePenaltyPercent(DateTime now) {
    final minutesLate = _minutesSinceMidnight(now);
    if (minutesLate < 10) return 0;
    if (minutesLate >= 30) return 20;
    if (minutesLate >= 10) return 15;
    return 0;
  }

  static bool isClockInWindowOpen(DateTime now) {
    final isPastNoon = now.hour >= 12;
    if (isPastNoon) return false;
    if (isWeekend(now)) return false;
    return true;
  }

  /// Local equivalent of main.dart:5067 _ngmyApplyMidnightClockReset, merged
  /// with settling the previous day's earnings (the real app's payout is
  /// server-scheduled; this runs the equivalent settlement on-device).
  /// Call this once when the local screen loads/resumes, before any other
  /// clock-in logic runs.
  /// Returns true when a clock-in payout transaction was added.
  static bool applyDailyRollover(UserData user, List<AppTransaction> transactions) {
    final now = DateTime.now();
    var addedPayout = false;
    if (user.isClockedIn && user.clockInStartTime != null && !sameCalendarDay(user.clockInStartTime, now)) {
      final earned = user.todayDailyGoal;
      if (earned > 0) {
        final txn = AppTransaction(
          id: 'local_clockin_payout_${user.email}_${user.clockInStartTime!.millisecondsSinceEpoch}',
          userEmail: user.email,
          amount: earned,
          type: TransactionType.reimbursement,
          method: PaymentMethod.system,
          sourceDetails: 'Clock-in daily earnings (local)',
          status: TransactionStatus.approved,
          timestamp: now,
        );
        applyTransaction(user, txn);
        user.totalProfit += earned;
        if (user.activeInvestment != null) {
          user.activeInvestment!.totalEarned += earned;
          user.activeInvestment!.daysClockedIn += 1;
        }
        transactions.add(txn);
        addedPayout = true;
      }
      user.lastClockInEarningsDate = user.clockInStartTime;
      user.isClockedIn = false;
      user.clockInStartTime = null;
      user.clockInPenaltyPercent = 0;
    }
    if (user.lastClockInEarningsDate != null && !sameCalendarDay(user.lastClockInEarningsDate, now)) {
      user.todayClockInEarned = 0;
    }
    return addedPayout;
  }

  static DateTime? _updatedAtFromMap(Map<String, dynamic> map) =>
      DateTime.tryParse((map['updatedAt'] ?? '').toString())?.toUtc();

  static List<String> _creditedFromMap(Map<String, dynamic> map) {
    final raw = map['creditedTxnIds'];
    if (raw is! List) return const [];
    return raw.map((e) => e.toString()).where((e) => e.isNotEmpty).toList();
  }

  static Future<List<String>> loadCreditedIds(String realEmail) async {
    final prefs = await SharedPreferences.getInstance();
    return List<String>.from(prefs.getStringList(creditedPrefsKey(realEmail)) ?? const <String>[]);
  }

  static Future<void> saveCreditedIds(String realEmail, List<String> ids) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList(creditedPrefsKey(realEmail), ids.toSet().toList());
  }

  static bool walletHasActivity(UserData user, List<AppTransaction> transactions) {
    if (user.accountBalance > 0.009) return true;
    if (user.totalProfit > 0.009) return true;
    if (user.activeInvestment != null) return true;
    if (user.pendingInvestmentAmount != null && user.pendingInvestmentAmount! > 0) return true;
    return transactions.isNotEmpty;
  }

  static double walletRank(UserData user, int revision) {
    final inv = user.activeInvestment;
    final invested = inv == null ? 0.0 : inv.amount.abs();
    final earned = inv?.totalEarned ?? 0.0;
    return invested * 1000000.0 + user.accountBalance + user.totalProfit + earned + revision * 0.0001;
  }

  static bool _samePlan(UserData a, UserData b) {
    final left = a.activeInvestment;
    final right = b.activeInvestment;
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    return left.name == right.name && (left.amount - right.amount).abs() < 0.01;
  }

  static Future<({
    UserData user,
    List<AppTransaction> transactions,
    int walletStateRevision,
    DateTime updatedAt,
    List<String> creditedTxnIds,
  })?> fetchCloudWallet(String realEmail) async {
    try {
      final value = await ngmyDbRelaySettingsFetch(
        cloudSettingsKey(realEmail),
        timeout: kNgmyCloudLoadTimeout,
      );
      if (value == null) return null;
      final user = _userFromMap(realEmail, value);
      final transactions = _transactionsFromMap(value);
      return (
        user: user,
        transactions: transactions,
        walletStateRevision: _revisionFromMap(value),
        updatedAt: _updatedAtFromMap(value) ?? DateTime.fromMillisecondsSinceEpoch(0, isUtc: true),
        creditedTxnIds: _creditedFromMap(value),
      );
    } catch (e) {
      debugPrint('[growth income] cloud fetch: $e');
      return null;
    }
  }

  static Future<bool> pushCloudWallet({
    required String realEmail,
    required UserData user,
    required List<AppTransaction> transactions,
    required int walletStateRevision,
    required DateTime updatedAt,
    required List<String> creditedTxnIds,
  }) async {
    try {
      await ngmyDbRelaySettingsUpsert(
        cloudSettingsKey(realEmail),
        _toMap(
          user,
          transactions,
          ownerEmail: realEmail,
          walletStateRevision: walletStateRevision,
          updatedAt: updatedAt.toUtc(),
          creditedTxnIds: creditedTxnIds,
        ),
        updatedAt: updatedAt.toUtc().toIso8601String(),
        timeout: kNgmyCloudWriteTimeout,
      );
      return true;
    } catch (e) {
      debugPrint('[growth income] cloud push: $e');
      return false;
    }
  }

  /// Picks one wallet for this account. Cloud wins once devices are in sync;
  /// the first time they differ, the richer plan/balance wins so a $0 phone
  /// cannot wipe the phone that actually has the investment.
  static bool cloudWalletShouldWin({
    required UserData localUser,
    required List<AppTransaction> localTransactions,
    required int localRevision,
    required DateTime? localUpdatedAt,
    required UserData cloudUser,
    required List<AppTransaction> cloudTransactions,
    required int cloudRevision,
    required DateTime cloudUpdatedAt,
  }) {
    final localActive = walletHasActivity(localUser, localTransactions);
    final cloudActive = walletHasActivity(cloudUser, cloudTransactions);
    if (!localActive && cloudActive) return true;
    if (localActive && !cloudActive) return false;

    if (_samePlan(localUser, cloudUser) && localUpdatedAt != null) {
      final localAt = localUpdatedAt.toUtc();
      final cloudAt = cloudUpdatedAt.toUtc();
      if (cloudAt.isAfter(localAt.add(const Duration(seconds: 2)))) return true;
      if (localAt.isAfter(cloudAt.add(const Duration(seconds: 2)))) return false;
    }

    return walletRank(cloudUser, cloudRevision) > walletRank(localUser, localRevision) + 0.01;
  }

  static Future<({
    UserData user,
    List<AppTransaction> transactions,
    int walletStateRevision,
    DateTime updatedAt,
    List<String> creditedTxnIds,
    bool adoptedCloud,
  })> reconcileWithCloud({
    required String realEmail,
    required UserData localUser,
    required List<AppTransaction> localTransactions,
    required int localRevision,
    required DateTime? localUpdatedAt,
    required List<String> localCreditedIds,
    bool pushIfLocalWins = true,
  }) async {
    final cloud = await fetchCloudWallet(realEmail);
    if (cloud == null) {
      final at = localUpdatedAt ?? DateTime.now().toUtc();
      if (pushIfLocalWins && walletHasActivity(localUser, localTransactions)) {
        await pushCloudWallet(
          realEmail: realEmail,
          user: localUser,
          transactions: localTransactions,
          walletStateRevision: localRevision,
          updatedAt: at,
          creditedTxnIds: localCreditedIds,
        );
      }
      return (
        user: localUser,
        transactions: localTransactions,
        walletStateRevision: localRevision,
        updatedAt: at,
        creditedTxnIds: localCreditedIds,
        adoptedCloud: false,
      );
    }

    final takeCloud = cloudWalletShouldWin(
      localUser: localUser,
      localTransactions: localTransactions,
      localRevision: localRevision,
      localUpdatedAt: localUpdatedAt,
      cloudUser: cloud.user,
      cloudTransactions: cloud.transactions,
      cloudRevision: cloud.walletStateRevision,
      cloudUpdatedAt: cloud.updatedAt,
    );
    if (takeCloud) {
      await save(
        realEmail,
        cloud.user,
        cloud.transactions,
        walletStateRevision: cloud.walletStateRevision,
        updatedAt: cloud.updatedAt,
        creditedTxnIds: cloud.creditedTxnIds.isNotEmpty ? cloud.creditedTxnIds : localCreditedIds,
      );
      return (
        user: cloud.user,
        transactions: cloud.transactions,
        walletStateRevision: cloud.walletStateRevision,
        updatedAt: cloud.updatedAt,
        creditedTxnIds: cloud.creditedTxnIds.isNotEmpty ? cloud.creditedTxnIds : localCreditedIds,
        adoptedCloud: true,
      );
    }

    final at = localUpdatedAt ?? DateTime.now().toUtc();
    if (pushIfLocalWins) {
      await save(
        realEmail,
        localUser,
        localTransactions,
        walletStateRevision: localRevision,
        updatedAt: at,
        creditedTxnIds: localCreditedIds,
      );
      await pushCloudWallet(
        realEmail: realEmail,
        user: localUser,
        transactions: localTransactions,
        walletStateRevision: localRevision,
        updatedAt: at,
        creditedTxnIds: localCreditedIds,
      );
    }
    return (
      user: localUser,
      transactions: localTransactions,
      walletStateRevision: localRevision,
      updatedAt: at,
      creditedTxnIds: localCreditedIds,
      adoptedCloud: false,
    );
  }
}
