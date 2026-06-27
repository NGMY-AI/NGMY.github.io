import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'main.dart';
import 'ngmy_game_session.dart';

/// A second, fully local copy of a user's growth-income numbers (balance,
/// investment, clock-in streak, wallet history). Never touches Supabase —
/// the real Growth Income tabs and their database sync are untouched.
class NgmyLocalGrowthIncomeStore {
  /// v1 copied the main Growth Income wallet on first open; v2 starts fresh.
  static const int walletSchemaVersion = 2;

  static String _normalize(String email) => email.toLowerCase().trim();

  static String _key(String realEmail) => 'ngmy_local_growth_income_${_normalize(realEmail)}';

  /// The `UserData.email` used internally for this copy. Deliberately distinct
  /// from the real account email so widgets we reuse from the real app (like
  /// `NgmyLiveBalance`, which caches balances globally per real email) never
  /// collide with the real account's cached balance — that mismatch was the
  /// cause of the balance shown here disagreeing with the local figures.
  static String identityEmailFor(String realEmail) => '${_normalize(realEmail)}+local.ngmy';

  /// Loads the local copy. The first time this device opens it, the wallet
  /// starts at \$0 with no investment — nothing is copied from the main
  /// Growth Income account. After that the local copy is fully independent.
  static Future<({
    UserData user,
    List<AppTransaction> transactions,
    int walletStateRevision,
  })> load(String realEmail, UserData liveUserSeed) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(realEmail));
    if (raw == null || raw.trim().isEmpty) {
      final seeded = _freshUser(realEmail, liveUserSeed);
      await save(realEmail, seeded, const [], walletStateRevision: 0);
      ngmySeedLiveBalance(seeded.email, seeded.accountBalance);
      return (user: seeded, transactions: <AppTransaction>[], walletStateRevision: 0);
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
      return (user: user, transactions: transactions, walletStateRevision: revision);
    } catch (_) {
      final seeded = _freshUser(realEmail, liveUserSeed);
      await save(realEmail, seeded, const [], walletStateRevision: 0);
      ngmySeedLiveBalance(seeded.email, seeded.accountBalance);
      return (user: seeded, transactions: <AppTransaction>[], walletStateRevision: 0);
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
  }) async {
    final prefs = await SharedPreferences.getInstance();
    var revision = walletStateRevision;
    if (revision == null) {
      revision = await readWalletStateRevision(realEmail);
      if (bumpWalletRevision) revision++;
    }
    await prefs.setString(_key(realEmail), jsonEncode(_toMap(user, transactions, walletStateRevision: revision)));
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
    required int walletStateRevision,
  }) =>
      {
        'walletSchemaVersion': walletSchemaVersion,
        'walletStateRevision': walletStateRevision,
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

  /// Mirrors main.dart's ngmyApplyApprovedTransactionToBalance call site —
  /// applies the transaction's balance effect if approved.
  static void applyTransaction(UserData user, AppTransaction t) {
    ngmyApplyApprovedTransactionToBalance(user, t);
    ngmySeedLiveBalance(user.email, user.accountBalance);
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
}
