import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'main.dart';

/// A second, fully local copy of a user's growth-income numbers (balance,
/// investment, clock-in streak, wallet history). Never touches Supabase —
/// the real Growth Income tabs and their database sync are untouched.
class NgmyLocalGrowthIncomeStore {
  static String _key(String email) => 'ngmy_local_growth_income_${email.toLowerCase().trim()}';

  /// Loads the local copy, seeding it once from [liveUserSeed] the first time
  /// this device opens it. After that the local copy is fully independent.
  static Future<({UserData user, List<AppTransaction> transactions})> load(UserData liveUserSeed) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(liveUserSeed.email));
    if (raw == null || raw.trim().isEmpty) {
      final seeded = _seedFrom(liveUserSeed);
      await save(liveUserSeed.email, seeded, const []);
      return (user: seeded, transactions: <AppTransaction>[]);
    }
    try {
      final map = jsonDecode(raw) as Map<String, dynamic>;
      return (user: _userFromMap(liveUserSeed.email, map), transactions: _transactionsFromMap(map));
    } catch (_) {
      final seeded = _seedFrom(liveUserSeed);
      return (user: seeded, transactions: <AppTransaction>[]);
    }
  }

  static Future<void> save(String email, UserData user, List<AppTransaction> transactions) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(email), jsonEncode(_toMap(user, transactions)));
  }

  /// Overwrites the local copy outright (used by snapshot restore — safe here
  /// since this state was never database-authoritative).
  static Future<void> replace(String email, UserData user, List<AppTransaction> transactions) =>
      save(email, user, transactions);

  static UserData _seedFrom(UserData live) => UserData(
        email: live.email,
        username: live.username,
        accountBalance: live.accountBalance,
        totalProfit: live.totalProfit,
        isClockedIn: live.isClockedIn,
        clockInStartTime: live.clockInStartTime,
        clockInPenaltyPercent: live.clockInPenaltyPercent,
        lastClockInDate: live.lastClockInDate,
        lastClockInEarningsDate: live.lastClockInEarningsDate,
        todayClockInEarned: live.todayClockInEarned,
        activeInvestment: live.activeInvestment == null
            ? null
            : ActiveInvestment(
                name: live.activeInvestment!.name,
                amount: live.activeInvestment!.amount,
                dailyROI: live.activeInvestment!.dailyROI,
                purchaseDate: live.activeInvestment!.purchaseDate,
                totalEarned: live.activeInvestment!.totalEarned,
                daysClockedIn: live.activeInvestment!.daysClockedIn,
              ),
      );

  static Map<String, dynamic> _toMap(UserData user, List<AppTransaction> transactions) => {
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

  static UserData _userFromMap(String email, Map<String, dynamic> map) {
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
      email: email,
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
  static void applyDailyRollover(UserData user, List<AppTransaction> transactions) {
    final now = DateTime.now();
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
      }
      user.lastClockInEarningsDate = user.clockInStartTime;
      user.isClockedIn = false;
      user.clockInStartTime = null;
      user.clockInPenaltyPercent = 0;
    }
    if (user.lastClockInEarningsDate != null && !sameCalendarDay(user.lastClockInEarningsDate, now)) {
      user.todayClockInEarned = 0;
    }
  }
}
