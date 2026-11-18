import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_slides_models.dart';

// Pinned Hati papers: in a Hati document, the ⋯ menu next to Play has "Pin this paper" as its last choice. A pinned
// paper comes first in the paper picker (Hati ya Kuhowa, Hati ya Kuhoweya and Malipo ya Awamu share the same papers).
// Up to four can be pinned; the same menu unpins. The pins are kept on this device. Nothing is drawn on the papers.

const int kNgmyHatiMaxPins = 4;
const String _kKey = 'ngmy_hati_pins';

/// The pinned paper ids, first pinned first.
final ValueNotifier<List<String>> ngmyHatiPins = ValueNotifier<List<String>>(const []);
Future<void>? _loading;

Future<void> ngmyHatiPinsLoad() => _loading ??= () async {
      try {
        final p = await SharedPreferences.getInstance();
        ngmyHatiPins.value = List.unmodifiable(p.getStringList(_kKey) ?? const <String>[]);
      } catch (_) {}
    }();

enum NgmyHatiPinResult { pinned, unpinned, full }

/// Pins [id], or unpins it when it is already pinned. Says [NgmyHatiPinResult.full] (and changes nothing) when four
/// papers are pinned already.
Future<NgmyHatiPinResult> ngmyHatiTogglePin(String id) async {
  await ngmyHatiPinsLoad();
  final now = [...ngmyHatiPins.value];
  final NgmyHatiPinResult result;
  if (now.remove(id)) {
    result = NgmyHatiPinResult.unpinned;
  } else if (now.length >= kNgmyHatiMaxPins) {
    return NgmyHatiPinResult.full;
  } else {
    now.add(id);
    result = NgmyHatiPinResult.pinned;
  }
  ngmyHatiPins.value = List.unmodifiable(now);
  try {
    final p = await SharedPreferences.getInstance();
    await p.setStringList(_kKey, now);
  } catch (_) {}
  return result;
}

bool ngmyHatiIsPinned(String id) => ngmyHatiPins.value.contains(id);

/// The paper a Hati document was made from (Kuhowa, Kuhoweya or Malipo ya Awamu), or null for any other document.
String? ngmyHatiPaperIdOfDeck(NgmySlideDeck deck) {
  final t = deck.themeId;
  for (final prefix in const ['hati_kuhowa_', 'hati_kuhoweya_', 'hati_malipo_awamu_']) {
    if (t.startsWith(prefix) && t.length > prefix.length) return t.substring(prefix.length);
  }
  return null;
}

/// [list] with the pinned papers first (in the order they were pinned), then the rest in their usual order.
List<T> ngmyHatiPinnedFirst<T>(List<T> list, String Function(T) idOf) {
  final pins = ngmyHatiPins.value;
  final pinned = <T>[
    for (final id in pins) ...list.where((t) => idOf(t) == id),
  ];
  return [...pinned, ...list.where((t) => !pins.contains(idOf(t)))];
}
