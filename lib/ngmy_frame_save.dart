import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_plumbing.dart';

/// Keeps what the player did in a lesson on the device, so it is still there when the lesson is left and opened again, or the app is closed.
/// It is cleared when the lesson is finished or started over.
class FrameSave {
  static String _k(String key) => 'lesson_save_$key';

  static Future<Map<String, dynamic>?> load(String key) async {
    try {
      final p = await SharedPreferences.getInstance();
      final s = p.getString(_k(key));
      if (s == null) return null;
      return jsonDecode(s) as Map<String, dynamic>;
    } catch (_) {
      return null;
    }
  }

  static Future<void> save(String key, Map<String, dynamic> data) async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(_k(key), jsonEncode(data));
    } catch (_) {}
  }

  static Future<void> clear(String key) async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.remove(_k(key));
    } catch (_) {}
  }
}

extension WiringStateSave on WiringState {
  Map<String, dynamic> toJson() => {
        'attached': {for (final e in attached.entries) '${e.key}': e.value},
        'stage': stage,
        'strap': strap,
        'burnt': burnt,
      };

  void loadJson(Map<String, dynamic> j) {
    attached.clear();
    for (final e in ((j['attached'] as Map?) ?? const {}).entries) {
      attached[int.parse('${e.key}')] = '${e.value}';
    }
    stage = (j['stage'] as num?)?.toInt() ?? 0;
    strap = j['strap'] != false;
    burnt = j['burnt'] == true;
  }
}

extension PlumbStateSave on PlumbState {
  Map<String, dynamic> toJson() => {
        'placed': placed.toList(),
        'tight': tight,
        'running': running,
        'leakAt': leakAt,
        'attached': {for (final e in attached.entries) '${e.key}': e.value},
        'hot': hotOpen,
        'cold': coldOpen,
      };

  void loadJson(Map<String, dynamic> j) {
    placed
      ..clear()
      ..addAll([for (final e in (j['placed'] as List? ?? const [])) '$e']);
    for (final e in ((j['tight'] as Map?) ?? const {}).entries) {
      tight['${e.key}'] = e.value == true;
    }
    running = j['running'] == true;
    leakAt = '${j['leakAt'] ?? ''}';
    attached.clear();
    for (final e in ((j['attached'] as Map?) ?? const {}).entries) {
      attached[int.parse('${e.key}')] = '${e.value}';
    }
    hotOpen = j['hot'] == true;
    coldOpen = j['cold'] == true;
  }
}
