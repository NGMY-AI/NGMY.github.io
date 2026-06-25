import 'dart:convert';

import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';

/// Mirrors main.dart's ActiveInvestment shape without importing main.dart (avoids a cyclic import).
class NgmySnapshotInvestment {
  const NgmySnapshotInvestment({
    required this.name,
    required this.amount,
    required this.dailyROI,
    required this.purchaseDate,
    required this.totalEarned,
    required this.daysClockedIn,
  });

  final String name;
  final double amount;
  final double dailyROI;
  final DateTime purchaseDate;
  final double totalEarned;
  final int daysClockedIn;

  static NgmySnapshotInvestment? fromDynamic(dynamic investment) {
    if (investment == null) return null;
    try {
      return NgmySnapshotInvestment(
        name: (investment.name ?? '').toString(),
        amount: ((investment.amount ?? 0) as num).toDouble(),
        dailyROI: ((investment.dailyROI ?? 0) as num).toDouble(),
        purchaseDate: (investment.purchaseDate as DateTime?) ?? DateTime.now(),
        totalEarned: ((investment.totalEarned ?? 0) as num).toDouble(),
        daysClockedIn: ((investment.daysClockedIn ?? 0) as num).toInt(),
      );
    } catch (_) {
      return null;
    }
  }

  Map<String, dynamic> toMap() => {
        'name': name,
        'amount': amount,
        'dailyROI': dailyROI,
        'purchaseDate': purchaseDate.toUtc().toIso8601String(),
        'totalEarned': totalEarned,
        'daysClockedIn': daysClockedIn,
      };

  factory NgmySnapshotInvestment.fromMap(Map<String, dynamic> map) => NgmySnapshotInvestment(
        name: (map['name'] ?? '').toString(),
        amount: (map['amount'] as num? ?? 0).toDouble(),
        dailyROI: (map['dailyROI'] as num? ?? 0).toDouble(),
        purchaseDate: DateTime.tryParse((map['purchaseDate'] ?? '').toString())?.toLocal() ?? DateTime.now(),
        totalEarned: (map['totalEarned'] as num? ?? 0).toDouble(),
        daysClockedIn: (map['daysClockedIn'] as num? ?? 0).toInt(),
      );
}

const String kNgmySnapshotMarker = 'ngmyAccountSnapshot';
const int kNgmySnapshotVersion = 1;
const String kNgmySnapshotQrPrefix = 'NGMYSNAP1|';

/// A personal, local-only record of a user's growth-income numbers
/// (balance, investment, clock-in streak). Never touches Supabase —
/// the live account balance always stays the source of truth.
class NgmyAccountSnapshot {
  const NgmyAccountSnapshot({
    required this.email,
    required this.username,
    required this.accountBalance,
    required this.totalProfit,
    required this.isClockedIn,
    required this.clockInStartTime,
    required this.lastClockInDate,
    required this.clockInPenaltyPercent,
    required this.points,
    required this.referralCount,
    required this.helps,
    required this.missed,
    required this.activeInvestment,
    required this.exportedAt,
  });

  final String email;
  final String username;
  final double accountBalance;
  final double totalProfit;
  final bool isClockedIn;
  final DateTime? clockInStartTime;
  final DateTime? lastClockInDate;
  final double clockInPenaltyPercent;
  final int points;
  final int referralCount;
  final int helps;
  final int missed;
  final NgmySnapshotInvestment? activeInvestment;
  final DateTime exportedAt;

  /// [user] is the app's UserData (declared in main.dart); kept dynamic here
  /// to avoid importing main.dart back into this file.
  factory NgmyAccountSnapshot.fromUser(dynamic user) => NgmyAccountSnapshot(
        email: ((user.email ?? '') as String).trim().toLowerCase(),
        username: (user.username ?? 'User') as String,
        accountBalance: ((user.accountBalance ?? 0) as num).toDouble(),
        totalProfit: ((user.totalProfit ?? 0) as num).toDouble(),
        isClockedIn: user.isClockedIn == true,
        clockInStartTime: user.clockInStartTime as DateTime?,
        lastClockInDate: user.lastClockInDate as DateTime?,
        clockInPenaltyPercent: ((user.clockInPenaltyPercent ?? 0) as num).toDouble(),
        points: ((user.points ?? 0) as num).toInt(),
        referralCount: ((user.referralCount ?? 0) as num).toInt(),
        helps: ((user.helps ?? 0) as num).toInt(),
        missed: ((user.missed ?? 0) as num).toInt(),
        activeInvestment: NgmySnapshotInvestment.fromDynamic(user.activeInvestment),
        exportedAt: DateTime.now(),
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
        'clockInPenaltyPercent': clockInPenaltyPercent,
        'points': points,
        'referralCount': referralCount,
        'helps': helps,
        'missed': missed,
        'activeInvestment': activeInvestment?.toMap(),
        'exportedAt': exportedAt.toUtc().toIso8601String(),
      };

  String toJson() => const JsonEncoder.withIndent('  ').convert(toMap());

  String toQrPayload() => '$kNgmySnapshotQrPrefix${base64Url.encode(utf8.encode(jsonEncode(toMap())))}';

  static NgmyAccountSnapshot? parse(String raw) {
    try {
      var text = raw.trim();
      if (text.startsWith('﻿')) text = text.substring(1);
      if (text.startsWith(kNgmySnapshotQrPrefix)) {
        text = utf8.decode(base64Url.decode(text.substring(kNgmySnapshotQrPrefix.length)));
      }
      final decoded = jsonDecode(text);
      if (decoded is! Map) return null;
      return fromMap(Map<String, dynamic>.from(decoded));
    } catch (_) {
      return null;
    }
  }

  static NgmyAccountSnapshot? fromMap(Map<String, dynamic> map) {
    if (map[kNgmySnapshotMarker] != kNgmySnapshotVersion) return null;
    DateTime? parseDate(dynamic v) {
      if (v == null) return null;
      return DateTime.tryParse(v.toString())?.toLocal();
    }
    NgmySnapshotInvestment? investment;
    final rawInvestment = map['activeInvestment'];
    if (rawInvestment is Map) {
      try {
        investment = NgmySnapshotInvestment.fromMap(Map<String, dynamic>.from(rawInvestment));
      } catch (_) {}
    }
    return NgmyAccountSnapshot(
      email: (map['email'] ?? '').toString(),
      username: (map['username'] ?? 'User').toString(),
      accountBalance: (map['accountBalance'] as num? ?? 0).toDouble(),
      totalProfit: (map['totalProfit'] as num? ?? 0).toDouble(),
      isClockedIn: map['isClockedIn'] == true,
      clockInStartTime: parseDate(map['clockInStartTime']),
      lastClockInDate: parseDate(map['lastClockInDate']),
      clockInPenaltyPercent: (map['clockInPenaltyPercent'] as num? ?? 0).toDouble(),
      points: (map['points'] as num? ?? 0).toInt(),
      referralCount: (map['referralCount'] as num? ?? 0).toInt(),
      helps: (map['helps'] as num? ?? 0).toInt(),
      missed: (map['missed'] as num? ?? 0).toInt(),
      activeInvestment: investment,
      exportedAt: parseDate(map['exportedAt']) ?? DateTime.now(),
    );
  }

  static Future<String> exportToFile(dynamic user) async {
    final snapshot = NgmyAccountSnapshot.fromUser(user);
    final safe = snapshot.email.replaceAll(RegExp(r'[^\w\-.]+'), '_');
    final filename = 'ngmy-account-snapshot-$safe.ngmy.json';
    return downloadNgmyAdvisorSyncJson(snapshot.toJson(), filename);
  }
}
