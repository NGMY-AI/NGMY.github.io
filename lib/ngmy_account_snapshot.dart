import 'dart:convert';

import 'main.dart';
import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_local_growth_income.dart';

const String kNgmySnapshotMarker = 'ngmyAccountSnapshot';
const int kNgmySnapshotVersion = 2;
const String kNgmySnapshotQrPrefix = 'NGMYSNAP1|';

/// A full backup of the Growth Income copy behind the home screen's wifi
/// icon (balance, investment, clock-in state, wallet history). Restoring
/// this overwrites that copy — safe to do since it was never tied to the
/// real database-backed account.
class NgmyAccountSnapshot {
  const NgmyAccountSnapshot({
    required this.email,
    required this.username,
    required this.accountBalance,
    required this.totalProfit,
    required this.isClockedIn,
    required this.clockInStartTime,
    required this.lastClockInDate,
    required this.lastClockInEarningsDate,
    required this.todayClockInEarned,
    required this.clockInPenaltyPercent,
    required this.activeInvestment,
    required this.transactions,
    required this.exportedAt,
  });

  final String email;
  final String username;
  final double accountBalance;
  final double totalProfit;
  final bool isClockedIn;
  final DateTime? clockInStartTime;
  final DateTime? lastClockInDate;
  final DateTime? lastClockInEarningsDate;
  final double todayClockInEarned;
  final double clockInPenaltyPercent;
  final ActiveInvestment? activeInvestment;
  final List<AppTransaction> transactions;
  final DateTime exportedAt;

  factory NgmyAccountSnapshot.fromUser(UserData user, List<AppTransaction> transactions) => NgmyAccountSnapshot(
        email: user.email.trim().toLowerCase(),
        username: user.username,
        accountBalance: user.accountBalance,
        totalProfit: user.totalProfit,
        isClockedIn: user.isClockedIn,
        clockInStartTime: user.clockInStartTime,
        lastClockInDate: user.lastClockInDate,
        lastClockInEarningsDate: user.lastClockInEarningsDate,
        todayClockInEarned: user.todayClockInEarned,
        clockInPenaltyPercent: user.clockInPenaltyPercent,
        activeInvestment: user.activeInvestment,
        transactions: transactions,
        exportedAt: DateTime.now(),
      );

  /// Rebuilds a [UserData] from this snapshot, suitable for writing straight
  /// into [NgmyLocalGrowthIncomeStore]. [realEmail] is the signed-in account's
  /// real email — the stored identity email is derived from it.
  UserData toUserData(String realEmail) => UserData(
        email: NgmyLocalGrowthIncomeStore.identityEmailFor(realEmail),
        username: username,
        accountBalance: accountBalance,
        totalProfit: totalProfit,
        isClockedIn: isClockedIn,
        clockInStartTime: clockInStartTime,
        lastClockInDate: lastClockInDate,
        lastClockInEarningsDate: lastClockInEarningsDate,
        todayClockInEarned: todayClockInEarned,
        clockInPenaltyPercent: clockInPenaltyPercent,
        activeInvestment: activeInvestment,
      );

  Map<String, dynamic> toMap() => {
        kNgmySnapshotMarker: kNgmySnapshotVersion,
        'email': email,
        'username': username,
        'accountBalance': accountBalance,
        'totalProfit': totalProfit,
        'isClockedIn': isClockedIn,
        'clockInStartTime': clockInStartTime?.toUtc().toIso8601String(),
        'lastClockInDate': lastClockInDate?.toUtc().toIso8601String(),
        'lastClockInEarningsDate': lastClockInEarningsDate?.toUtc().toIso8601String(),
        'todayClockInEarned': todayClockInEarned,
        'clockInPenaltyPercent': clockInPenaltyPercent,
        'activeInvestment': activeInvestment == null
            ? null
            : {
                'name': activeInvestment!.name,
                'amount': activeInvestment!.amount,
                'dailyROI': activeInvestment!.dailyROI,
                'purchaseDate': activeInvestment!.purchaseDate.toUtc().toIso8601String(),
                'totalEarned': activeInvestment!.totalEarned,
                'daysClockedIn': activeInvestment!.daysClockedIn,
              },
        'transactions': transactions
            .map((t) => {
                  'id': t.id,
                  'userEmail': t.userEmail,
                  'amount': t.amount,
                  'type': t.type.name,
                  'method': t.method.name,
                  'sourceDetails': t.sourceDetails,
                  'status': t.status.name,
                  'timestamp': t.timestamp.toUtc().toIso8601String(),
                })
            .toList(),
        'exportedAt': exportedAt.toUtc().toIso8601String(),
      };

  String toJson() => const JsonEncoder.withIndent('  ').convert(toMap());

  /// QR codes have no server to offload the payload to (unlike the advisor/
  /// family-tree QR flows, which stash the bulk of the data in Supabase and
  /// only encode a short token) — this copy must stay fully local, so the
  /// transaction history is left out of the QR specifically. Including it
  /// made the encoded text so long that the QR needed far more modules,
  /// shrinking every dot to the point phone cameras couldn't focus on them.
  /// Money/ROI fields are packed as integer cents/basis-points and dates as
  /// epoch seconds (instead of raw doubles and millisecond ISO strings) to
  /// keep the module count — and so each dot's on-screen size — as low as
  /// possible. The downloadable file still includes full history & precision.
  Map<String, dynamic> _toCompactMap() => {
        'qb': (accountBalance * 100).round(),
        'qp': (totalProfit * 100).round(),
        'qu': username,
        if (isClockedIn) 'qc': true,
        if (clockInStartTime != null) 'qs': clockInStartTime!.toUtc().millisecondsSinceEpoch ~/ 1000,
        if (lastClockInDate != null) 'ql': lastClockInDate!.toUtc().millisecondsSinceEpoch ~/ 1000,
        if (lastClockInEarningsDate != null) 'qe': lastClockInEarningsDate!.toUtc().millisecondsSinceEpoch ~/ 1000,
        if (todayClockInEarned != 0) 'qt': (todayClockInEarned * 100).round(),
        if (clockInPenaltyPercent != 0) 'qn': clockInPenaltyPercent.round(),
        if (activeInvestment != null)
          'qi': {
            'n': activeInvestment!.name,
            'a': (activeInvestment!.amount * 100).round(),
            'r': (activeInvestment!.dailyROI * 100).round(),
            'p': activeInvestment!.purchaseDate.toUtc().millisecondsSinceEpoch ~/ 1000,
            't': (activeInvestment!.totalEarned * 100).round(),
            'd': activeInvestment!.daysClockedIn,
          },
      };

  String toQrPayload() => '$kNgmySnapshotQrPrefix${base64Url.encode(utf8.encode(jsonEncode(_toCompactMap())))}';

  static NgmyAccountSnapshot? parse(String raw) {
    try {
      var text = raw.trim();
      if (text.startsWith('﻿')) text = text.substring(1);
      var isQr = false;
      if (text.startsWith(kNgmySnapshotQrPrefix)) {
        isQr = true;
        text = utf8.decode(base64Url.decode(text.substring(kNgmySnapshotQrPrefix.length)));
      }
      final decoded = jsonDecode(text);
      if (decoded is! Map) return null;
      final map = Map<String, dynamic>.from(decoded);
      return isQr ? _fromCompactMap(map) : fromMap(map);
    } catch (_) {
      return null;
    }
  }

  static NgmyAccountSnapshot? _fromCompactMap(Map<String, dynamic> map) {
    // Pre-shrink QR payloads encoded dates as millisecond ISO/epoch values;
    // the current encoder uses epoch *seconds*. Telling them apart by
    // magnitude keeps old already-generated QR codes parseable too.
    DateTime? parseDate(dynamic v) {
      if (v == null) return null;
      if (v is num) {
        final n = v.toInt();
        final ms = n > 100000000000 ? n : n * 1000;
        return DateTime.fromMillisecondsSinceEpoch(ms, isUtc: true).toLocal();
      }
      return DateTime.tryParse(v.toString())?.toLocal();
    }
    double cents(dynamic v) => (v as num? ?? 0).toDouble() / 100;
    ActiveInvestment? investment;
    final rawInvestment = map['qi'];
    if (rawInvestment is Map) {
      final m = Map<String, dynamic>.from(rawInvestment);
      investment = ActiveInvestment(
        name: (m['n'] ?? '').toString(),
        amount: cents(m['a']),
        dailyROI: cents(m['r']),
        purchaseDate: parseDate(m['p']) ?? DateTime.now(),
        totalEarned: cents(m['t']),
        daysClockedIn: (m['d'] as num? ?? 0).toInt(),
      );
    }
    return NgmyAccountSnapshot(
      email: '',
      username: (map['qu'] ?? 'User').toString(),
      accountBalance: cents(map['qb']),
      totalProfit: cents(map['qp']),
      isClockedIn: map['qc'] == true,
      clockInStartTime: parseDate(map['qs']),
      lastClockInDate: parseDate(map['ql']),
      lastClockInEarningsDate: parseDate(map['qe']),
      todayClockInEarned: cents(map['qt']),
      clockInPenaltyPercent: (map['qn'] as num? ?? 0).toDouble(),
      activeInvestment: investment,
      transactions: const [],
      exportedAt: DateTime.now(),
    );
  }

  static NgmyAccountSnapshot? fromMap(Map<String, dynamic> map) {
    if (map[kNgmySnapshotMarker] != kNgmySnapshotVersion) return null;
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

    final rawTxns = map['transactions'];
    final transactions = rawTxns is List
        ? rawTxns
            .map((e) {
              if (e is! Map) return null;
              final m = Map<String, dynamic>.from(e);
              try {
                return AppTransaction(
                  id: (m['id'] ?? '').toString(),
                  userEmail: (m['userEmail'] ?? '').toString(),
                  amount: (m['amount'] as num? ?? 0).toDouble(),
                  type: TransactionType.values.byName((m['type'] ?? 'reimbursement').toString()),
                  method: PaymentMethod.values.byName((m['method'] ?? 'system').toString()),
                  sourceDetails: m['sourceDetails'] as String?,
                  status: TransactionStatus.values.byName((m['status'] ?? 'approved').toString()),
                  timestamp: parseDate(m['timestamp']) ?? DateTime.now(),
                );
              } catch (_) {
                return null;
              }
            })
            .whereType<AppTransaction>()
            .toList()
        : <AppTransaction>[];

    return NgmyAccountSnapshot(
      email: (map['email'] ?? '').toString(),
      username: (map['username'] ?? 'User').toString(),
      accountBalance: (map['accountBalance'] as num? ?? 0).toDouble(),
      totalProfit: (map['totalProfit'] as num? ?? 0).toDouble(),
      isClockedIn: map['isClockedIn'] == true,
      clockInStartTime: parseDate(map['clockInStartTime']),
      lastClockInDate: parseDate(map['lastClockInDate']),
      lastClockInEarningsDate: parseDate(map['lastClockInEarningsDate']),
      todayClockInEarned: (map['todayClockInEarned'] as num? ?? 0).toDouble(),
      clockInPenaltyPercent: (map['clockInPenaltyPercent'] as num? ?? 0).toDouble(),
      activeInvestment: investment,
      transactions: transactions,
      exportedAt: parseDate(map['exportedAt']) ?? DateTime.now(),
    );
  }

  static Future<String> exportToFile(UserData user, List<AppTransaction> transactions) async {
    final snapshot = NgmyAccountSnapshot.fromUser(user, transactions);
    final safe = snapshot.email.replaceAll(RegExp(r'[^\w\-.]+'), '_');
    final filename = 'ngmy-growth-income-$safe.ngmy.json';
    return downloadNgmyAdvisorSyncJson(snapshot.toJson(), filename);
  }
}
