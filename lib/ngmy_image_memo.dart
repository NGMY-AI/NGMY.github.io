import 'dart:collection';
import 'dart:convert';

import 'package:flutter/painting.dart';

/// One [MemoryImage] per base64 photo, reused across rebuilds.
///
/// Building `MemoryImage(base64Decode(...))` inside `build` makes a brand-new
/// image on every frame. Animated screens (bio pages, the Home vote ad) rebuild
/// ~60 times a second, so the same photo was decoded over and over until the
/// phone ran out of memory and the browser reloaded the whole app.
final LinkedHashMap<String, (String, MemoryImage)> _memo = LinkedHashMap();
const int _kMaxEntries = 48;

String _memoKey(String s) => '${s.length}:${s.length > 48 ? s.substring(s.length - 48) : s}';

/// Accepts a `data:image/...;base64,` URI or bare base64. Returns null when
/// the text is empty or not valid base64.
MemoryImage? ngmyMemoImage(String raw) {
  final s = raw.trim();
  if (s.isEmpty) return null;
  final key = _memoKey(s);
  final hit = _memo.remove(key);
  if (hit != null && (identical(hit.$1, s) || hit.$1 == s)) {
    _memo[key] = hit;
    return hit.$2;
  }
  try {
    final comma = s.startsWith('data:') ? s.indexOf(',') : -1;
    final bytes = base64Decode(comma >= 0 ? s.substring(comma + 1) : s);
    if (bytes.isEmpty) return null;
    final img = MemoryImage(bytes);
    _memo[key] = (s, img);
    while (_memo.length > _kMaxEntries) {
      _memo.remove(_memo.keys.first);
    }
    return img;
  } catch (_) {
    return null;
  }
}
