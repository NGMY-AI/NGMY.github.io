import 'package:flutter/foundation.dart';

import 'ngmy_settings_cloud.dart';
import 'ngmy_slides_models.dart';

/// Presentations an admin keeps in the database, as many as they like.
///
/// Each presentation is its own row (a deck with pictures can be big), and a small index row lists
/// them so the admin can see and bring any of them back later. Only the admin screens call this;
/// normal users never see the button.
class NgmyAdminSlidesVault {
  NgmyAdminSlidesVault._();

  // Settings rows under the studio-library prefix, which the relay already allows.
  static const _prefix = 'ngmy_menu_lib_v1_';
  static const _indexKey = '${_prefix}zzslides_index';

  static String _deckKey(String id) => '${_prefix}zzslide_${id.replaceAll(RegExp(r'[^A-Za-z0-9_-]'), '')}';

  /// The saved presentations, newest first. Null when the database cannot be reached.
  static Future<List<Map<String, dynamic>>?> list() async {
    final row = await ngmyFetchSettingsRowStatus(_indexKey, timeout: const Duration(seconds: 12));
    if (!row.reachable) return null;
    final raw = row.value?['items'];
    final items = raw is List ? raw.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList() : <Map<String, dynamic>>[];
    items.sort((a, b) => (b['savedAt'] ?? '').toString().compareTo((a['savedAt'] ?? '').toString()));
    return items;
  }

  /// Saves each presentation (a newer save of the same one replaces the old). Returns how many worked.
  static Future<int> save(List<NgmySlideDeck> decks) async {
    final current = await list();
    if (current == null) return 0;
    final byId = {for (final i in current) (i['id'] ?? '').toString(): i};
    var saved = 0;
    for (final deck in decks) {
      final now = DateTime.now().toUtc().toIso8601String();
      final ok = await ngmyUpsertSettingsRowReliable(_deckKey(deck.id), {'deck': deck.toJson(), 'savedAt': now});
      if (!ok) continue;
      byId[deck.id] = {'id': deck.id, 'name': deck.name, 'slides': deck.slides.length, 'savedAt': now};
      saved++;
    }
    if (saved > 0) {
      final ok = await ngmyUpsertSettingsRowReliable(_indexKey, {
        'items': byId.values.toList(),
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      });
      if (!ok) return 0;
    }
    return saved;
  }

  static Future<NgmySlideDeck?> load(String id) async {
    try {
      final row = await ngmyFetchSettingsRowStatus(_deckKey(id), timeout: const Duration(seconds: 20));
      final deck = row.value?['deck'];
      if (deck is! Map) return null;
      return NgmySlideDeck.fromJson(Map<String, dynamic>.from(deck));
    } catch (e) {
      debugPrint('[admin slides vault] load $id: $e');
      return null;
    }
  }

  static Future<bool> remove(String id) async {
    final current = await list();
    if (current == null) return false;
    current.removeWhere((i) => (i['id'] ?? '').toString() == id);
    final ok = await ngmyUpsertSettingsRowReliable(_indexKey, {
      'items': current,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    });
    if (ok) await ngmyDeleteSettingsKeyReliable(_deckKey(id));
    return ok;
  }
}
