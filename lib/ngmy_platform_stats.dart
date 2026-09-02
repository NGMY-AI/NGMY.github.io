import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_db_relay.dart';
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

Future<Map<String, dynamic>?> _readNgmySetting(String key) async {
  try {
    return await ngmyDbRelaySettingsFetch(key);
  } catch (e) {
    debugPrint('[platform_stats] read setting: $e');
  }
  return null;
}

Future<void> _writeNgmySetting(String key, Map<String, dynamic> value) async {
  try {
    await ngmyDbRelaySettingsUpsert(key, value);
  } catch (e) {
    debugPrint('[platform_stats] write setting: $e');
  }
}

Future<NgmyPlatformLiveStats> ngmyComputePlatformLiveStatsFromCloud() async {
  final client = Supabase.instance.client;

  // Server-side aggregate (security definer) — never exposes individual
  // users' totalProfit or per-transaction amounts to the client.
  final rows = await client.rpc('ngmy_platform_live_stats') as List;
  final row = rows.isNotEmpty ? Map<String, dynamic>.from(rows.first as Map) : const <String, dynamic>{};

  return NgmyPlatformLiveStats(
    totalVolume: (row['total_volume'] ?? 0).toDouble(),
    totalProfit: (row['total_profit'] ?? 0).toDouble(),
    totalPayout: (row['total_payout'] ?? 0).toDouble(),
    platformUsers: (row['platform_users'] as num?)?.toInt() ?? 0,
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
    final stale = cached == null || DateTime.now().difference(cached.updatedAt) > const Duration(minutes: 5);
    if (!forceRefresh && cached != null && !stale) return cached;

    final computed = await ngmyComputePlatformLiveStatsFromCloud();
    final computedSig = jsonEncode({
      'totalVolume': computed.totalVolume,
      'totalProfit': computed.totalProfit,
      'totalPayout': computed.totalPayout,
      'platformUsers': computed.platformUsers,
    });
    final cachedSig = cached == null
        ? ''
        : jsonEncode({
            'totalVolume': cached.totalVolume,
            'totalProfit': cached.totalProfit,
            'totalPayout': cached.totalPayout,
            'platformUsers': cached.platformUsers,
          });
    if (computedSig != cachedSig) {
      await ngmyPublishPlatformLiveStats(computed);
    }
    return computed;
  } catch (e) {
    debugPrint('[platform_stats] fetch: $e');
    return ngmyLoadPlatformLiveStatsFromSettings();
  }
}
