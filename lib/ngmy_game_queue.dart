import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// One game bet or payout that the server has not confirmed yet, kept in full on this phone.
class NgmyQueuedGameTxn {
  const NgmyQueuedGameTxn({required this.id, required this.key, required this.delta, required this.at, required this.txn});

  final String id;

  /// Lowercase account email.
  final String key;

  /// Bets are negative, payouts positive.
  final double delta;
  final DateTime at;

  /// The whole receipt (AppTransaction JSON), so it can be replayed even if the app's list lost it.
  final Map<String, dynamic> txn;

  Map<String, dynamic> toJson() => {'id': id, 'key': key, 'delta': delta, 'at': at.toUtc().toIso8601String(), 'txn': txn};

  static NgmyQueuedGameTxn? fromJson(Object? j) {
    if (j is! Map) return null;
    final id = (j['id'] ?? '').toString();
    final txn = j['txn'];
    if (id.isEmpty || txn is! Map) return null;
    return NgmyQueuedGameTxn(
      id: id,
      key: (j['key'] ?? '').toString(),
      delta: (j['delta'] as num?)?.toDouble() ?? 0,
      at: DateTime.tryParse((j['at'] ?? '').toString()) ?? DateTime.now(),
      txn: Map<String, dynamic>.from(txn),
    );
  }
}

const _kGameQueueKey = 'ngmy_game_queue_v1';

/// Games played while offline (or whose save failed). Each one stays here until the server has applied it,
/// so a day of offline play is replayed in order when the phone is back online, exactly as if it had been played online.
final Map<String, NgmyQueuedGameTxn> ngmyGameQueue = {};
bool _loaded = false;

Future<void> ngmyGameQueueLoad() async {
  if (_loaded) return;
  _loaded = true;
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kGameQueueKey);
    if (raw == null || raw.isEmpty) return;
    for (final e in jsonDecode(raw) as List) {
      final q = NgmyQueuedGameTxn.fromJson(e);
      if (q != null) ngmyGameQueue.putIfAbsent(q.id, () => q);
    }
  } catch (e) {
    debugPrint('[game queue] load: $e');
  }
}

Future<void> _save() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kGameQueueKey, jsonEncode([for (final q in ngmyGameQueue.values) q.toJson()]));
  } catch (e) {
    debugPrint('[game queue] save: $e');
  }
}

void ngmyGameQueueAdd(NgmyQueuedGameTxn q) {
  if (ngmyGameQueue.containsKey(q.id)) return;
  ngmyGameQueue[q.id] = q;
  _save();
}

void ngmyGameQueueRemove(String id) {
  if (ngmyGameQueue.remove(id) != null) _save();
}

/// The waiting games, oldest first (a bet is always replayed before its payout).
List<NgmyQueuedGameTxn> ngmyGameQueueOrdered() => ngmyGameQueue.values.toList()..sort((a, b) => a.at.compareTo(b.at));

/// Net effect of the waiting games on [key], leaving out the ids in [alreadyCounted].
double ngmyGameQueueNetFor(String key, Set<String> alreadyCounted) {
  var sum = 0.0;
  for (final q in ngmyGameQueue.values) {
    if (q.key == key && !alreadyCounted.contains(q.id)) sum += q.delta;
  }
  return sum;
}

@visibleForTesting
void ngmyGameQueueResetForTest() {
  ngmyGameQueue.clear();
  _loaded = false;
}
