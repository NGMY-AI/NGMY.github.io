import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// Shared live platform metrics — same numbers for every user (stored in ngmy_settings).
const String kNgmyPlatformLiveStatsKey = 'platform_live_stats';

class NgmyPlatformLiveStats {
  const NgmyPlatformLiveStats({
    required this.totalVolume,
    required this.totalProfit,
    required this.totalPayout,
    required this.platformUsers,
    required this.updatedAt,
  });

  final double totalVolume;
  final double totalProfit;
  final double totalPayout;
  final int platformUsers;
  final DateTime updatedAt;

  Map<String, dynamic> toJson() => {
        'totalVolume': totalVolume,
        'totalProfit': totalProfit,
        'totalPayout': totalPayout,
        'platformUsers': platformUsers,
        'updatedAt': updatedAt.toUtc().toIso8601String(),
      };

  static NgmyPlatformLiveStats? fromJson(Map<String, dynamic>? raw) {
    if (raw == null) return null;
    final at = DateTime.tryParse('${raw['updatedAt'] ?? ''}');
    if (at == null) return null;
    return NgmyPlatformLiveStats(
      totalVolume: (raw['totalVolume'] ?? 0).toDouble(),
      totalProfit: (raw['totalProfit'] ?? 0).toDouble(),
      totalPayout: (raw['totalPayout'] ?? 0).toDouble(),
      platformUsers: raw['platformUsers'] is int ? raw['platformUsers'] as int : int.tryParse('${raw['platformUsers']}') ?? 0,
      updatedAt: at,
    );
  }
}

bool _txnApproved(dynamic status) {
  if (status is num) return status.toInt() == 1;
  return status?.toString().toLowerCase().trim() == 'approved';
}

int? _txnTypeIndex(dynamic type) {
  if (type is num) return type.toInt();
  final name = type?.toString().toLowerCase().trim();
  return switch (name) {
    'deposit' => 0,
    'withdrawal' => 1,
    'adminadd' => 2,
    'adminremove' => 3,
    'reimbursement' => 4,
    'contribution' => 5,
    'claim' => 6,
    _ => int.tryParse('$type'),
  };
}

Future<Map<String, dynamic>?> _readNgmySetting(String key) async {
  try {
    final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', key).maybeSingle();
    if (row == null) return null;
    final value = row['value'];
    if (value is Map) return Map<String, dynamic>.from(value);
  } catch (e) {
    debugPrint('[platform_stats] read setting: $e');
  }
  return null;
}

Future<void> _writeNgmySetting(String key, Map<String, dynamic> value) async {
  try {
    await Supabase.instance.client.from('ngmy_settings').upsert([
      {
        'key': key,
        'value': value,
        'updated_at': DateTime.now().toUtc().toIso8601String(),
      },
    ], onConflict: 'key');
  } catch (e) {
    debugPrint('[platform_stats] write setting: $e');
  }
}

Future<NgmyPlatformLiveStats> ngmyComputePlatformLiveStatsFromCloud() async {
  final client = Supabase.instance.client;

  final usersRaw = await client.from('users').select('totalProfit').limit(5000);
  final users = usersRaw as List? ?? [];
  var totalProfit = 0.0;
  for (final row in users) {
    if (row is! Map) continue;
    totalProfit += (row['totalProfit'] ?? row['total_profit'] ?? 0).toDouble();
  }
  final platformUsers = users.length;

  var totalVolume = 0.0;
  var totalPayout = 0.0;
  var offset = 0;
  const page = 1000;
  while (offset < 50000) {
    final batch = await client.from('transactions').select('amount, type, status').range(offset, offset + page - 1);
    final list = batch as List? ?? [];
    if (list.isEmpty) break;
    for (final row in list) {
      if (row is! Map) continue;
      if (!_txnApproved(row['status'])) continue;
      final amount = (row['amount'] ?? 0).toDouble();
      final type = _txnTypeIndex(row['type']);
      if (type == 0) {
        totalVolume += amount;
      } else if (type == 1) {
        totalPayout += amount;
      }
    }
    if (list.length < page) break;
    offset += page;
  }

  return NgmyPlatformLiveStats(
    totalVolume: totalVolume,
    totalProfit: totalProfit,
    totalPayout: totalPayout,
    platformUsers: platformUsers,
    updatedAt: DateTime.now(),
  );
}

Future<NgmyPlatformLiveStats?> ngmyLoadPlatformLiveStatsFromSettings() async {
  final raw = await _readNgmySetting(kNgmyPlatformLiveStatsKey);
  return NgmyPlatformLiveStats.fromJson(raw);
}

Future<NgmyPlatformLiveStats?> ngmyPublishPlatformLiveStats(NgmyPlatformLiveStats stats) async {
  await _writeNgmySetting(kNgmyPlatformLiveStatsKey, stats.toJson());
  return stats;
}

/// Loads shared stats from cloud settings; refreshes from Supabase when stale or missing.
Future<NgmyPlatformLiveStats?> ngmyFetchPlatformLiveStats({bool forceRefresh = false}) async {
  if (!await ngmyCanReachCloud()) {
    return ngmyLoadPlatformLiveStatsFromSettings();
  }
  try {
    final cached = await ngmyLoadPlatformLiveStatsFromSettings();
    final stale = cached == null || DateTime.now().difference(cached.updatedAt) > const Duration(seconds: 8);
    if (!forceRefresh && cached != null && !stale) return cached;

    final computed = await ngmyComputePlatformLiveStatsFromCloud();
    await ngmyPublishPlatformLiveStats(computed);
    return computed;
  } catch (e) {
    debugPrint('[platform_stats] fetch: $e');
    return ngmyLoadPlatformLiveStatsFromSettings();
  }
}
