import 'dart:convert';

import 'main.dart';
import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_local_growth_income_stash.dart';

const String kNgmySnapshotMarker = 'ngmyAccountSnapshot';
const int kNgmySnapshotVersion = 2;
const String kNgmySnapshotQrPrefix = 'NGMYSNAP1|';

enum NgmySnapshotResolveOutcome { found, notFound, wrongAccount }

/// A full backup of the Growth Income copy behind the home screen's wifi
/// icon (balance, investment, clock-in state, wallet history). Restoring
/// this overwrites that copy — safe to do since it was never tied to the
/// real database-backed account.
class NgmyAccountSnapshot {
  const NgmyAccountSnapshot({
    required this.email,
    required this.ownerRealEmail,
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
  /// Signed-in NGMY account email that owns this local Growth Income copy.
  final String ownerRealEmail;
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

  factory NgmyAccountSnapshot.fromUser(
    UserData user,
    List<AppTransaction> transactions, {
    required String ownerRealEmail,
  }) =>
      NgmyAccountSnapshot(
        email: user.email.trim().toLowerCase(),
        ownerRealEmail: ownerRealEmail.trim().toLowerCase(),
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

  /// True when [snapshot] may be restored into the local Growth Income slot
  /// for [realEmail]. Blocks cross-account restores (QR, code, file, scan).
  static bool ownedByRealAccount(
    NgmyAccountSnapshot snapshot,
    String realEmail, {
    String? stashOwnerEmail,
  }) {
    final real = realEmail.toLowerCase().trim();
    if (real.isEmpty) return false;

    final stashOwner = (stashOwnerEmail ?? '').toLowerCase().trim();
    if (stashOwner.isNotEmpty && stashOwner != real) return false;

    final ownerField = snapshot.ownerRealEmail.toLowerCase().trim();
    if (ownerField.isNotEmpty && ownerField == real) return true;

    final localIdentity = NgmyLocalGrowthIncomeStore.identityEmailFor(realEmail).toLowerCase();
    final snapEmail = snapshot.email.toLowerCase().trim();
    if (snapEmail == real || snapEmail == localIdentity) return true;

    return false;
  }

  static String ownershipBlockMessage(String realEmail) {
    final user = realEmail.trim().isEmpty ? 'your account' : realEmail.trim();
    return 'This backup belongs to another account. You can only restore local Growth Income data for $user.';
  }

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
        'ownerRealEmail': ownerRealEmail,
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

  /// Same relay trick as the advisor/family-tree QR flows: the full snapshot
  /// (including transaction history) is stashed in the cloud as an opaque
  /// blob keyed by a random token, and the QR/code only ever carries that
  /// short token — never balance data itself, and the stash is never read
  /// as a source of truth for any balance. This is what keeps the QR's
  /// dots big: a ~20-character token needs far fewer modules than the
  /// snapshot itself ever could.
  Future<({String qrPayload, String code})?> toStashedPayload({required String ownerEmail}) {
    return NgmyLocalSnapshotStash.create(ownerEmail: ownerEmail, snapshotJson: toJson());
  }

  /// Resolves anything Backup & Restore can receive. When [realEmail] is set,
  /// returns null if the snapshot belongs to a different account.
  static Future<NgmyAccountSnapshot?> resolveAny(String raw, {String? realEmail}) async {
    final detailed = await resolveForRestore(raw, realEmail ?? '');
    if (realEmail == null || realEmail.trim().isEmpty) {
      return detailed.snapshot;
    }
    if (detailed.outcome == NgmySnapshotResolveOutcome.wrongAccount) return null;
    return detailed.snapshot;
  }

  static Future<({NgmyAccountSnapshot? snapshot, NgmySnapshotResolveOutcome outcome})> resolveForRestore(
    String raw,
    String realEmail,
  ) async {
    final stashed = await NgmyLocalSnapshotStash.resolveWithOwner(raw);
    if (stashed != null) {
      try {
        final decoded = jsonDecode(stashed.snapshotJson);
        if (decoded is Map) {
          final snapshot = fromMap(Map<String, dynamic>.from(decoded));
          if (snapshot == null) return (snapshot: null, outcome: NgmySnapshotResolveOutcome.notFound);
          if (realEmail.trim().isNotEmpty &&
              !ownedByRealAccount(snapshot, realEmail, stashOwnerEmail: stashed.ownerEmail)) {
            return (snapshot: null, outcome: NgmySnapshotResolveOutcome.wrongAccount);
          }
          return (snapshot: snapshot, outcome: NgmySnapshotResolveOutcome.found);
        }
      } catch (_) {}
      return (snapshot: null, outcome: NgmySnapshotResolveOutcome.notFound);
    }
    final snapshot = parse(raw);
    if (snapshot == null) return (snapshot: null, outcome: NgmySnapshotResolveOutcome.notFound);
    if (realEmail.trim().isNotEmpty && !ownedByRealAccount(snapshot, realEmail)) {
      return (snapshot: null, outcome: NgmySnapshotResolveOutcome.wrongAccount);
    }
    return (snapshot: snapshot, outcome: NgmySnapshotResolveOutcome.found);
  }

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
      ownerRealEmail: '',
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
      ownerRealEmail: (map['ownerRealEmail'] ?? '').toString(),
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

  static Future<String> exportToFile(
    UserData user,
    List<AppTransaction> transactions, {
    required String ownerRealEmail,
  }) async {
    final snapshot = NgmyAccountSnapshot.fromUser(user, transactions, ownerRealEmail: ownerRealEmail);
    final safe = snapshot.email.replaceAll(RegExp(r'[^\w\-.]+'), '_');
    final filename = 'ngmy-growth-income-$safe.ngmy.json';
    return downloadNgmyAdvisorSyncJson(snapshot.toJson(), filename);
  }
}
