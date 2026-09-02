import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';

const int kNgmyGameNotificationMax = 99;
const Duration kNgmyGameNotificationRetention = Duration(days: 5);
const Duration _kGameReceiptCloudTimeout = Duration(seconds: 12);

/// Bumped when game win/lose receipts change (Game Center badge).
final ValueNotifier<int> ngmyGameNotificationsTick = ValueNotifier<int>(0);

String _emailKey(String email) => email.toLowerCase().trim();

String _prefsKey(String email) => 'ngmy_game_notifications_${_emailKey(email)}';

String _cloudSettingsKey(String email) => 'ngmy_game_receipts_${_emailKey(email)}';

class NgmyGameNotification {
  final String id;
  final String gameTitle;
  final bool won;
  final double amount;
  final String detail;
  final DateTime timestamp;
  final String? txnId;

  const NgmyGameNotification({
    required this.id,
    required this.gameTitle,
    required this.won,
    required this.amount,
    required this.detail,
    required this.timestamp,
    this.txnId,
  });

  String get _mergeKey =>
      (txnId != null && txnId!.trim().isNotEmpty) ? 'txn:${txnId!.trim()}' : 'id:${id.trim()}';

  Map<String, dynamic> toJson() => {
        'id': id,
        'gameTitle': gameTitle,
        'won': won,
        'amount': amount,
        'detail': detail,
        'timestamp': timestamp.toUtc().toIso8601String(),
        if (txnId != null && txnId!.isNotEmpty) 'txnId': txnId,
      };

  factory NgmyGameNotification.fromJson(Map<String, dynamic> json) {
    DateTime at = DateTime.now();
    final raw = json['timestamp'];
    if (raw != null) {
      try {
        final d = DateTime.parse(raw.toString());
        at = d.isUtc ? d.toLocal() : d;
      } catch (_) {}
    }
    return NgmyGameNotification(
      id: (json['id'] ?? '').toString(),
      gameTitle: (json['gameTitle'] ?? 'Game').toString(),
      won: json['won'] == true,
      amount: (json['amount'] as num?)?.toDouble() ?? 0.0,
      detail: (json['detail'] ?? '').toString(),
      timestamp: at,
      txnId: json['txnId']?.toString(),
    );
  }
}

class NgmyGameNotifications {
  static List<NgmyGameNotification> _prune(List<NgmyGameNotification> items) {
    final cutoff = DateTime.now().subtract(kNgmyGameNotificationRetention);
    final fresh = items.where((e) => !e.timestamp.isBefore(cutoff)).toList()
      ..sort((a, b) => b.timestamp.compareTo(a.timestamp));
    if (fresh.length > kNgmyGameNotificationMax) {
      return fresh.sublist(0, kNgmyGameNotificationMax);
    }
    return fresh;
  }

  static List<NgmyGameNotification> _mergeReceiptLists(
    Iterable<NgmyGameNotification> a,
    Iterable<NgmyGameNotification> b,
  ) {
    final byKey = <String, NgmyGameNotification>{};
    void consider(NgmyGameNotification n) {
      final key = n._mergeKey;
      final existing = byKey[key];
      if (existing == null) {
        byKey[key] = n;
        return;
      }
      // Keep the original receipt time (earliest timestamp wins).
      if (n.timestamp.isBefore(existing.timestamp)) {
        byKey[key] = n;
      }
    }

    for (final n in a) {
      consider(n);
    }
    for (final n in b) {
      consider(n);
    }
    return byKey.values.toList();
  }

  static Future<List<NgmyGameNotification>> _loadRaw(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_prefsKey(key));
    if (raw == null || raw.trim().isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      return decoded
          .whereType<Map>()
          .map((e) => NgmyGameNotification.fromJson(Map<String, dynamic>.from(e)))
          .toList();
    } catch (_) {
      return [];
    }
  }

  static Future<List<NgmyGameNotification>> _loadFromCloud(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return [];
    if (!await ngmyCanReachCloud()) return [];
    try {
      final value = await ngmyDbRelaySettingsFetchRaw(_cloudSettingsKey(key), timeout: _kGameReceiptCloudTimeout);
      if (value is! List) return [];
      return value
          .whereType<Map>()
          .map((e) => NgmyGameNotification.fromJson(Map<String, dynamic>.from(e)))
          .toList();
    } catch (e) {
      debugPrint('[game-receipts] cloud load: $e');
      return [];
    }
  }

  static Future<void> _pushToCloud(String email, List<NgmyGameNotification> items) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    if (!await ngmyCanReachCloud()) return;
    try {
      await ngmyDbRelaySettingsUpsertRaw(
        _cloudSettingsKey(key),
        items.map((e) => e.toJson()).toList(),
        timeout: _kGameReceiptCloudTimeout,
      );
    } catch (e) {
      debugPrint('[game-receipts] cloud push: $e');
    }
  }

  static Future<void> _saveLocal(String email, List<NgmyGameNotification> items) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final pruned = _prune(items);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_prefsKey(key), jsonEncode(pruned.map((e) => e.toJson()).toList()));
    ngmyGameNotificationsTick.value++;
  }

  static Future<void> _saveMerged(String email, List<NgmyGameNotification> items) async {
    final pruned = _prune(items);
    await _saveLocal(email, pruned);
    unawaited(_pushToCloud(email, pruned));
  }

  /// Merge local + cloud receipts (preserves original timestamps across devices).
  static Future<void> syncFromCloud(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final local = await _loadRaw(key);
    final cloud = await _loadFromCloud(key);
    if (cloud.isEmpty && local.isEmpty) return;
    final merged = _prune(_mergeReceiptLists(local, cloud));
    final localPruned = _prune(local);
    final localJson = jsonEncode(localPruned.map((e) => e.toJson()).toList());
    final mergedJson = jsonEncode(merged.map((e) => e.toJson()).toList());
    if (localJson != mergedJson) {
      await _saveLocal(key, merged);
    }
    await _pushToCloud(key, merged);
  }

  static Future<void> record({
    required String email,
    required String gameTitle,
    required bool won,
    required double amount,
    required String detail,
    String? txnId,
    DateTime? at,
  }) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final items = await _loadRaw(key);
    if (txnId != null && txnId.isNotEmpty && items.any((e) => e.txnId == txnId)) return;
    final when = at ?? DateTime.now();
    final entry = NgmyGameNotification(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      gameTitle: gameTitle,
      won: won,
      amount: amount,
      detail: detail,
      timestamp: when,
      txnId: txnId,
    );
    items.insert(0, entry);
    await _saveMerged(key, items);
  }

  static Future<int> countFor(String email) async {
    await syncFromCloud(email);
    final list = await listFor(email, syncCloud: false);
    return list.length;
  }

  static Future<List<NgmyGameNotification>> listFor(String email, {bool syncCloud = true}) async {
    final key = _emailKey(email);
    if (key.isEmpty) return [];
    if (syncCloud) await syncFromCloud(email);
    final raw = await _loadRaw(key);
    final items = _prune(List<NgmyGameNotification>.from(raw));
    if (items.length != raw.length) await _saveMerged(key, items);
    return items;
  }
}

String ngmyNormalizeEmailForNotifications(String email) => email.toLowerCase().trim();

String ngmyFormatGameNotificationWhen(DateTime at) {
  final now = DateTime.now();
  final diff = now.difference(at);
  if (diff.inMinutes < 1) return 'Just now';
  if (diff.inHours < 1) return '${diff.inMinutes}m ago';
  if (diff.inDays < 1) return '${diff.inHours}h ago';
  if (diff.inDays < 5) return '${diff.inDays}d ago';
  final m = at.month.toString().padLeft(2, '0');
  final d = at.day.toString().padLeft(2, '0');
  return '$m/$d ${at.hour.toString().padLeft(2, '0')}:${at.minute.toString().padLeft(2, '0')}';
}

Future<void> showNgmyGameReceiptSheet(
  BuildContext context, {
  required String email,
}) async {
  await NgmyGameNotifications.syncFromCloud(email);
  final items = await NgmyGameNotifications.listFor(email, syncCloud: false);
  if (!context.mounted) return;

  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      final bottom = MediaQuery.paddingOf(ctx).bottom;
      return Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(ctx).height * 0.82),
        decoration: const BoxDecoration(
          color: Color(0xFF2B1454),
          borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const SizedBox(height: 10),
            Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 14, 12, 8),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: const Color(0xFF5C3B8A),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(Icons.receipt_long_rounded, color: Colors.white, size: 22),
                  ),
                  const SizedBox(width: 12),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Game Receipts',
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17),
                        ),
                        Text(
                          'Wins & losses · last 5 days · max 99 · syncs across devices',
                          style: TextStyle(color: Colors.white60, fontSize: 11),
                        ),
                      ],
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(ctx),
                    icon: const Icon(Icons.close_rounded, color: Colors.white70),
                  ),
                ],
              ),
            ),
            const Divider(height: 1, color: Colors.white12),
            if (items.isEmpty)
              Padding(
                padding: EdgeInsets.fromLTRB(24, 36, 24, 24 + bottom),
                child: Column(
                  children: [
                    Icon(Icons.sports_esports_outlined, size: 48, color: Colors.white.withValues(alpha: 0.35)),
                    const SizedBox(height: 12),
                    Text(
                      'No game results yet',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w700),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      'Play skill games to see wins and losses here.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
                    ),
                  ],
                ),
              )
            else
              Flexible(
                child: ListView.separated(
                  padding: EdgeInsets.fromLTRB(14, 10, 14, 14 + bottom),
                  itemCount: items.length,
                  separatorBuilder: (_, _) => const SizedBox(height: 8),
                  itemBuilder: (_, i) {
                    final n = items[i];
                    final win = n.won;
                    final accent = win ? const Color(0xFF22C55E) : const Color(0xFFEF4444);
                    final amountLabel = win
                        ? '+\$${n.amount.toStringAsFixed(2)}'
                        : '-\$${n.amount.toStringAsFixed(2)}';
                    return Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
                      decoration: BoxDecoration(
                        color: const Color(0xFF3D2568),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: accent.withValues(alpha: 0.45)),
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: 36,
                            height: 36,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: accent.withValues(alpha: 0.18),
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: Icon(
                              win ? Icons.emoji_events_rounded : Icons.close_rounded,
                              color: accent,
                              size: 20,
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    Expanded(
                                      child: Text(
                                        n.gameTitle,
                                        maxLines: 1,
                                        overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.w800,
                                          fontSize: 14,
                                        ),
                                      ),
                                    ),
                                    Text(
                                      amountLabel,
                                      style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 13),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 3),
                                Text(
                                  win ? 'You won' : 'You lost',
                                  style: TextStyle(
                                    color: accent.withValues(alpha: 0.95),
                                    fontWeight: FontWeight.w700,
                                    fontSize: 11,
                                  ),
                                ),
                                if (n.detail.trim().isNotEmpty) ...[
                                  const SizedBox(height: 2),
                                  Text(
                                    n.detail,
                                    maxLines: 2,
                                    overflow: TextOverflow.ellipsis,
                                    style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11),
                                  ),
                                ],
                                const SizedBox(height: 4),
                                Text(
                                  ngmyFormatGameNotificationWhen(n.timestamp),
                                  style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),
          ],
        ),
      );
    },
  );
}
