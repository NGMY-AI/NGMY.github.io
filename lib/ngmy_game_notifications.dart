import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_game_session.dart';
import 'ngmy_network_resilience.dart';

/// Game receipts are kept for good (the user wants every one). A very high cap only guards
/// the phone's storage.
const int kNgmyGameNotificationMax = 5000;
/// Kept for the "today" badge and old callers; receipts themselves no longer expire.
const Duration kNgmyGameNotificationRetention = Duration(days: 36500);
const Duration _kGameReceiptCloudTimeout = Duration(seconds: 12);

/// Set by the app: works out a receipt's missing stake / balances from the transaction history.
Future<List<NgmyGameNotification>> Function(String email, List<NgmyGameNotification> items)? ngmyReceiptFiller;

/// Bumped when game win/lose receipts change (Game Center badge).
final ValueNotifier<int> ngmyGameNotificationsTick = ValueNotifier<int>(0);

/// Growth Income's copy ("you@x.com+local.ngmy") plays with the same account — its receipts
/// belong with the account's, so they never seem to vanish when switching between the two.
String _emailKey(String email) {
  final k = email.toLowerCase().trim();
  return k.endsWith('+local.ngmy') ? k.substring(0, k.length - '+local.ngmy'.length) : k;
}

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
  /// What was bet, and the account balance before and after the game.
  final double? stake;
  final double? balanceBefore;
  final double? balanceAfter;

  const NgmyGameNotification({
    required this.id,
    required this.gameTitle,
    required this.won,
    required this.amount,
    required this.detail,
    required this.timestamp,
    this.txnId,
    this.stake,
    this.balanceBefore,
    this.balanceAfter,
  });

  bool get missingNumbers => stake == null || balanceBefore == null || balanceAfter == null;

  NgmyGameNotification withNumbers({double? stake, double? balanceBefore, double? balanceAfter}) => NgmyGameNotification(
        id: id,
        gameTitle: gameTitle,
        won: won,
        amount: amount,
        detail: detail,
        timestamp: timestamp,
        txnId: txnId,
        stake: this.stake ?? stake,
        balanceBefore: this.balanceBefore ?? balanceBefore,
        balanceAfter: this.balanceAfter ?? balanceAfter,
      );

  String get _mergeKey =>
      (txnId != null && txnId!.trim().isNotEmpty) ? 'txn:${txnId!.trim()}' : 'id:${id.trim()}';

  /// Net result of the game for the balance (payout minus stake), when the stake is known.
  double? get net {
    final s = stake;
    if (s == null) return null;
    return won ? amount - s : -s;
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'gameTitle': gameTitle,
        'won': won,
        'amount': amount,
        'detail': detail,
        'timestamp': timestamp.toUtc().toIso8601String(),
        if (txnId != null && txnId!.isNotEmpty) 'txnId': txnId,
        if (stake != null) 'stake': stake,
        if (balanceBefore != null) 'balanceBefore': balanceBefore,
        if (balanceAfter != null) 'balanceAfter': balanceAfter,
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
    double? n(Object? v) => v is num ? v.toDouble() : double.tryParse('${v ?? ''}');
    return NgmyGameNotification(
      id: (json['id'] ?? '').toString(),
      gameTitle: (json['gameTitle'] ?? 'Game').toString(),
      won: json['won'] == true,
      amount: (json['amount'] as num?)?.toDouble() ?? 0.0,
      detail: (json['detail'] ?? '').toString(),
      timestamp: at,
      txnId: json['txnId']?.toString(),
      stake: n(json['stake']),
      balanceBefore: n(json['balanceBefore']),
      balanceAfter: n(json['balanceAfter']),
    );
  }
}

class NgmyGameNotifications {
  /// Newest first; only a very high cap (receipts don't expire).
  static List<NgmyGameNotification> _prune(List<NgmyGameNotification> items) {
    final sorted = List<NgmyGameNotification>.from(items)..sort((a, b) => b.timestamp.compareTo(a.timestamp));
    return sorted.length > kNgmyGameNotificationMax ? sorted.sublist(0, kNgmyGameNotificationMax) : sorted;
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
      // Keep the original receipt time, and whichever copy knows the balances.
      final keep = n.timestamp.isBefore(existing.timestamp) ? n : existing;
      final other = identical(keep, n) ? existing : n;
      byKey[key] = keep.balanceAfter != null || other.balanceAfter == null
          ? keep
          : NgmyGameNotification(
              id: keep.id,
              gameTitle: keep.gameTitle,
              won: keep.won,
              amount: keep.amount,
              detail: keep.detail,
              timestamp: keep.timestamp,
              txnId: keep.txnId,
              stake: keep.stake ?? other.stake,
              balanceBefore: other.balanceBefore,
              balanceAfter: other.balanceAfter,
            );
    }

    for (final n in a) {
      consider(n);
    }
    for (final n in b) {
      consider(n);
    }
    return byKey.values.toList();
  }

  static List<NgmyGameNotification> _decode(String? raw) {
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

  static Future<List<NgmyGameNotification>> _loadRaw(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final mine = _decode(prefs.getString(_prefsKey(key)));
    // Receipts saved earlier under Growth Income's copy move in with the account's.
    final oldKey = 'ngmy_game_notifications_$key+local.ngmy';
    final old = _decode(prefs.getString(oldKey));
    if (old.isEmpty) return mine;
    final merged = _prune(_mergeReceiptLists(mine, old));
    await prefs.setString(_prefsKey(key), jsonEncode(merged.map((e) => e.toJson()).toList()));
    await prefs.remove(oldKey);
    return merged;
  }

  static Future<List<NgmyGameNotification>> _fetchCloudKey(String settingsKey) async {
    try {
      final value = await ngmyDbRelaySettingsFetchRaw(settingsKey, timeout: _kGameReceiptCloudTimeout);
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

  static Future<List<NgmyGameNotification>> _loadFromCloud(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return [];
    if (!await ngmyCanReachCloud()) return [];
    final mine = await _fetchCloudKey(_cloudSettingsKey(key));
    // Plus the ones saved in the cloud under Growth Income's copy.
    final old = await _fetchCloudKey('ngmy_game_receipts_$key+local.ngmy');
    return old.isEmpty ? mine : _mergeReceiptLists(mine, old).toList();
  }

  /// Adds to the cloud copy instead of replacing it — another phone's receipts are never wiped.
  static Future<void> _pushToCloud(String email, List<NgmyGameNotification> items) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    if (!await ngmyCanReachCloud()) return;
    try {
      final cloud = await _fetchCloudKey(_cloudSettingsKey(key));
      final merged = _prune(_mergeReceiptLists(items, cloud));
      await ngmyDbRelaySettingsUpsertRaw(
        _cloudSettingsKey(key),
        merged.map((e) => e.toJson()).toList(),
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
  static final Map<String, Future<void>> _syncInFlight = {};
  static final Map<String, DateTime> _lastSyncAt = {};
  static const Duration _kPassiveSyncMinGap = Duration(minutes: 2);

  /// [force] false is for passive callers (badge rebuilds): at most one cloud
  /// round-trip per [_kPassiveSyncMinGap]. User actions keep the default.
  static Future<void> syncFromCloud(String email, {bool force = true}) {
    final key = _emailKey(email);
    if (key.isEmpty) return Future.value();
    final running = _syncInFlight[key];
    if (running != null) return running;
    final last = _lastSyncAt[key];
    if (!force && last != null && DateTime.now().difference(last) < _kPassiveSyncMinGap) {
      return Future.value();
    }
    _lastSyncAt[key] = DateTime.now();
    final job = _syncFromCloudNow(key).whenComplete(() => _syncInFlight.remove(key));
    _syncInFlight[key] = job;
    return job;
  }

  static String _listJson(List<NgmyGameNotification> items) =>
      jsonEncode(items.map((e) => e.toJson()).toList());

  static Future<void> _syncFromCloudNow(String key) async {
    final local = await _loadRaw(key);
    final cloud = await _loadFromCloud(key);
    if (cloud.isEmpty && local.isEmpty) return;
    final merged = _prune(_mergeReceiptLists(local, cloud));
    final mergedJson = _listJson(merged);
    if (_listJson(_prune(local)) != mergedJson) {
      await _saveLocal(key, merged);
    }
    if (_listJson(_prune(cloud)) != mergedJson) {
      await _pushToCloud(key, merged);
    }
  }

  /// Saves a receipt. Call right after the game's payout (or loss) was applied: the balance
  /// "after" is read now, and "before" is worked out from the stake and the payout.
  static Future<void> record({
    required String email,
    required String gameTitle,
    required bool won,
    required double amount,
    required String detail,
    String? txnId,
    DateTime? at,
    double? stake,
    double? balanceAfter,
  }) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    // Read the balance before any await, while it is exactly the after-game figure.
    final after = balanceAfter ?? (at == null ? ngmyLiveBalanceFor(key) : null);
    double? before;
    if (after != null && stake != null) {
      before = won ? after - amount + stake : after + stake;
    }
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
      stake: stake,
      balanceBefore: before,
      balanceAfter: after,
    );
    items.insert(0, entry);
    await _saveMerged(key, items);
    // Any box still empty (stake not passed, or a win copied from another phone) is worked
    // out from the transaction history straight away.
    if (entry.missingNumbers) unawaited(fillMissing(key).then((_) => ngmyGameNotificationsTick.value++).catchError((_) {}));
  }

  /// Fills in the stake and balance before/after on receipts that don't have them (older
  /// receipts, or games that didn't record them) from the account's transaction history.
  static Future<void> fillMissing(String email) async {
    final filler = ngmyReceiptFiller;
    final key = _emailKey(email);
    if (filler == null || key.isEmpty) return;
    final items = await _loadRaw(key);
    if (!items.any((e) => e.missingNumbers)) return;
    final filled = await filler(key, items);
    if (filled.length != items.length) return;
    var changed = false;
    for (var i = 0; i < items.length; i++) {
      if (jsonEncode(items[i].toJson()) != jsonEncode(filled[i].toJson())) changed = true;
    }
    if (changed) await _saveMerged(key, filled);
  }

  static Future<int> countFor(String email) async {
    await syncFromCloud(email, force: false);
    final list = await listFor(email, syncCloud: false);
    // Badge = today's results.
    final since = DateTime.now().subtract(const Duration(hours: 24));
    return list.where((e) => e.timestamp.isAfter(since)).length;
  }

  static Future<List<NgmyGameNotification>> listFor(String email, {bool syncCloud = true}) async {
    final key = _emailKey(email);
    if (key.isEmpty) return [];
    if (syncCloud) await syncFromCloud(email);
    return _prune(await _loadRaw(key));
  }
}

String ngmyNormalizeEmailForNotifications(String email) => _emailKey(email);

String ngmyFormatGameNotificationWhen(DateTime at) {
  final now = DateTime.now();
  final diff = now.difference(at);
  if (diff.inMinutes < 1) return 'Just now';
  if (diff.inHours < 1) return '${diff.inMinutes}m ago';
  if (diff.inDays < 1) return '${diff.inHours}h ago';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  final h = at.hour % 12 == 0 ? 12 : at.hour % 12;
  return '${months[at.month - 1]} ${at.day}${at.year == now.year ? '' : ', ${at.year}'} · '
      '$h:${at.minute.toString().padLeft(2, '0')} ${at.hour < 12 ? 'AM' : 'PM'}';
}

String _money(double v) {
  final s = v.abs().toStringAsFixed(2);
  final parts = s.split('.');
  final whole = parts[0].replaceAllMapped(RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'), (m) => '${m[1]},');
  return '\$$whole.${parts[1]}';
}

Future<void> showNgmyGameReceiptSheet(
  BuildContext context, {
  required String email,
}) async {
  // Open right away with what's on this phone; the cloud copy refreshes it.
  final initial = await NgmyGameNotifications.listFor(email, syncCloud: false);
  if (!context.mounted) return;
  unawaited(NgmyGameNotifications.syncFromCloud(email)
      .then((_) => NgmyGameNotifications.fillMissing(email))
      .then<void>((_) { ngmyGameNotificationsTick.value++; })
      .catchError((_) {}));

  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => ValueListenableBuilder<int>(
      valueListenable: ngmyGameNotificationsTick,
      builder: (ctx, _, _) => FutureBuilder<List<NgmyGameNotification>>(
        future: NgmyGameNotifications.listFor(email, syncCloud: false),
        initialData: initial,
        builder: (ctx, snap) => _NgmyGameReceiptsSheet(items: snap.data ?? initial),
      ),
    ),
  );
}

class _NgmyGameReceiptsSheet extends StatelessWidget {
  const _NgmyGameReceiptsSheet({required this.items});
  final List<NgmyGameNotification> items;

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.paddingOf(context).bottom;
    final wins = items.where((e) => e.won).length;
    final nets = items.map((e) => e.net).whereType<double>();
    final net = nets.fold<double>(0, (a, b) => a + b);
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.88),
      decoration: const BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1E1036), Color(0xFF120A22)]),
        borderRadius: BorderRadius.vertical(top: Radius.circular(26)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(height: 10),
          Container(width: 42, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2))),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 14, 8, 6),
            child: Row(
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(14),
                    gradient: const LinearGradient(colors: [Color(0xFFA855F7), Color(0xFF6366F1)]),
                    boxShadow: [BoxShadow(color: const Color(0xFFA855F7).withValues(alpha: 0.45), blurRadius: 14)],
                  ),
                  child: const Icon(Icons.receipt_long_rounded, color: Colors.white, size: 24),
                ),
                const SizedBox(width: 12),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Game Receipts', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
                      Text('Every game you play · kept for good', style: TextStyle(color: Colors.white60, fontSize: 11.5)),
                    ],
                  ),
                ),
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
              ],
            ),
          ),
          if (items.isNotEmpty)
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 4, 16, 10),
              child: Row(
                children: [
                  _summary('GAMES', '${items.length}', const Color(0xFFC4B5FD)),
                  const SizedBox(width: 8),
                  _summary('WON', '$wins', const Color(0xFF6EE7B7)),
                  const SizedBox(width: 8),
                  _summary('NET', '${net >= 0 ? '+' : '-'}${_money(net)}', net >= 0 ? const Color(0xFF6EE7B7) : const Color(0xFFFCA5A5)),
                ],
              ),
            ),
          if (items.isEmpty)
            Padding(
              padding: EdgeInsets.fromLTRB(24, 36, 24, 24 + bottom),
              child: Column(
                children: [
                  Icon(Icons.sports_esports_outlined, size: 52, color: Colors.white.withValues(alpha: 0.35)),
                  const SizedBox(height: 12),
                  Text('No game receipts yet', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w800)),
                  const SizedBox(height: 6),
                  Text('Play a game and its receipt shows up here.',
                      textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13)),
                ],
              ),
            )
          else
            Flexible(
              child: ListView.separated(
                padding: EdgeInsets.fromLTRB(14, 2, 14, 16 + bottom),
                itemCount: items.length,
                separatorBuilder: (_, _) => const SizedBox(height: 8),
                itemBuilder: (_, i) => _NgmyGameReceiptCard(n: items[i]),
              ),
            ),
        ],
      ),
    );
  }

  static Widget _summary(String label, String value, Color color) => Expanded(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 8),
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.05),
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: color.withValues(alpha: 0.35)),
          ),
          child: Column(
            children: [
              Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
              const SizedBox(height: 2),
              FittedBox(child: Text(value, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 15))),
            ],
          ),
        ),
      );
}

class _NgmyGameReceiptCard extends StatelessWidget {
  const _NgmyGameReceiptCard({required this.n});
  final NgmyGameNotification n;

  @override
  Widget build(BuildContext context) {
    final partial = n.won && (n.detail.toLowerCase().contains('%') || (n.stake != null && n.amount < n.stake!));
    final draw = n.won && n.detail.toLowerCase().startsWith('draw');
    final label = !n.won ? 'LOST' : (draw ? 'DRAW' : (partial ? 'PARTIAL' : 'WON'));
    final accent = !n.won
        ? const Color(0xFFF87171)
        : (draw ? const Color(0xFF93C5FD) : (partial ? const Color(0xFFFBBF24) : const Color(0xFF34D399)));
    final net = n.net;
    String m(double? v) => v == null ? '…' : _money(v);
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(14),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [accent.withValues(alpha: 0.13), const Color(0xFF221440)],
        ),
        border: Border.all(color: accent.withValues(alpha: 0.4)),
      ),
      padding: const EdgeInsets.fromLTRB(10, 8, 10, 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Icon(n.won ? Icons.emoji_events_rounded : Icons.close_rounded, color: accent, size: 16),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  n.gameTitle,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1),
                decoration: BoxDecoration(color: accent.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(99)),
                child: Text(label, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 8.5, letterSpacing: 0.6)),
              ),
              const SizedBox(width: 6),
              Text(
                net != null ? '${net >= 0 ? '+' : '-'}${_money(net)}' : '${n.won ? '+' : '-'}${_money(n.amount)}',
                style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 13),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Row(
            children: [
              _frame('STAKE', m(n.stake), Colors.white),
              const SizedBox(width: 4),
              _frame('PAID', _money(n.won ? n.amount : 0), accent),
              const SizedBox(width: 4),
              _frame('BEFORE', m(n.balanceBefore), const Color(0xFFC4B5FD)),
              const SizedBox(width: 4),
              _frame('AFTER', m(n.balanceAfter), const Color(0xFF93C5FD)),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            '${ngmyFormatGameNotificationWhen(n.timestamp)}${n.detail.trim().isEmpty ? '' : ' · ${n.detail.trim()}'}',
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10),
          ),
        ],
      ),
    );
  }

  static Widget _frame(String label, String value, Color color) => Expanded(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
          decoration: BoxDecoration(
            color: Colors.black.withValues(alpha: 0.22),
            borderRadius: BorderRadius.circular(8),
            border: Border.all(color: color.withValues(alpha: 0.28)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 7.5, fontWeight: FontWeight.w900, letterSpacing: 0.6)),
              FittedBox(
                fit: BoxFit.scaleDown,
                alignment: Alignment.centerLeft,
                child: Text(value, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 11.5)),
              ),
            ],
          ),
        ),
      );
}
