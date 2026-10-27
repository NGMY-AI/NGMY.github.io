import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_electronics_board.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The Electronics Lab remembers your board and your challenges, so nothing
// disappears when you leave the lab or close the app.
// ═════════════════════════════════════════════════════════════════════════════

const String kElectronicsLabSaveKey = 'ngmy_electronics_lab_v1';

/// The whole board (parts, settings and wires) plus the challenge progress, as text.
String encodeLab(ElectronicsBoard b, int challenge, Set<int> done) {
  final index = {for (var i = 0; i < b.parts.length; i++) b.parts[i]: i};
  return jsonEncode({
    'parts': [
      for (final p in b.parts)
        {
          'k': p.kind,
          'x': double.parse(p.x.toStringAsFixed(4)),
          'y': double.parse(p.y.toStringAsFixed(4)),
          'v': p.volts,
          'l': double.parse(p.level.toStringAsFixed(3)),
          'o': p.ohms,
          'on': p.on,
          'b': p.burnt,
          'bw': p.burnWhy,
          'c': double.parse(p.charge.toStringAsFixed(3)),
          'ch': p.channel,
          'vc': double.parse(p.vc.toStringAsFixed(3)),
          's': double.parse(p.scale.toStringAsFixed(2)),
        },
    ],
    'wires': [
      for (final w in b.wires) [index[w.a], w.ta, index[w.b], w.tb],
    ],
    'challenge': challenge,
    'done': done.toList()..sort(),
  });
}

/// Puts a saved lab back on [b]. Returns the challenge progress, or null when [raw] is not a saved lab.
({int challenge, Set<int> done})? restoreLab(ElectronicsBoard b, String raw) {
  try {
    final j = jsonDecode(raw);
    if (j is! Map) return null;
    b.clear();
    final made = <Part?>[];
    for (final e in (j['parts'] as List? ?? const [])) {
      final m = e as Map;
      final kind = m['k'] as String? ?? '';
      if (!kPartByKind.containsKey(kind)) {
        made.add(null);
        continue;
      }
      final p = b.add(kind, (m['x'] as num? ?? 0.5).toDouble(), (m['y'] as num? ?? 0.5).toDouble());
      p.volts = (m['v'] as num? ?? p.volts).toDouble();
      p.level = (m['l'] as num? ?? p.level).toDouble();
      p.ohms = (m['o'] as num? ?? p.ohms).toDouble();
      p.on = m['on'] as bool? ?? p.on;
      p.burnt = m['b'] as bool? ?? false;
      p.burnWhy = m['bw'] as String? ?? '';
      p.charge = (m['c'] as num? ?? p.charge).toDouble();
      p.channel = (m['ch'] as num? ?? 0).toInt();
      p.vc = (m['vc'] as num? ?? 0).toDouble();
      p.scale = (m['s'] as num? ?? 1).toDouble().clamp(1.0, 2.6);
      made.add(p);
    }
    for (final e in (j['wires'] as List? ?? const [])) {
      final w = e as List;
      final a = (w[0] as num?)?.toInt(), c = (w[2] as num?)?.toInt();
      if (a == null || c == null || a < 0 || c < 0 || a >= made.length || c >= made.length) continue;
      final pa = made[a], pc = made[c];
      if (pa != null && pc != null) b.connect(pa, (w[1] as num).toInt(), pc, (w[3] as num).toInt());
    }
    return (challenge: (j['challenge'] as num? ?? 0).toInt(), done: {for (final d in (j['done'] as List? ?? const [])) (d as num).toInt()});
  } catch (_) {
    return null;
  }
}

Future<String?> loadLabSave() async {
  try {
    return (await SharedPreferences.getInstance()).getString(kElectronicsLabSaveKey);
  } catch (_) {
    return null;
  }
}

Future<void> storeLabSave(String raw) async {
  try {
    await (await SharedPreferences.getInstance()).setString(kElectronicsLabSaveKey, raw);
  } catch (_) {}
}
