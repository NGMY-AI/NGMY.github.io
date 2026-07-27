import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_communicate_chat_images.dart';

/// Long-term local storage for Communicate companion chats (months on same device).
class NgmyCommunicateMemoryStore {
  static const int retentionDays = 365;
  static const int maxStoredMessages = 500;

  /// Serialize all writes — concurrent appends were overwriting each other and deleting messages.
  static Future<void> _writeChain = Future<void>.value();

  static Future<T> _serialized<T>(Future<T> Function() action) {
    final gate = Completer<T>();
    // Always continue the chain — a prior failure must never block future saves.
    _writeChain = _writeChain
        .catchError((_) {})
        .then((_) async {
      try {
        final value = await action();
        if (!gate.isCompleted) gate.complete(value);
      } catch (e, st) {
        if (!gate.isCompleted) gate.completeError(e, st);
      }
    });
    // Keep the chain itself healthy even if this job failed.
    _writeChain = _writeChain.catchError((_) {});
    return gate.future;
  }

  static String _chatKey(String email, String profileId) =>
      'ngmy_communicate_chat_${email.toLowerCase().trim()}_${profileId.trim()}';

  static Future<List<Map<String, dynamic>>> load(String email, String profileId) async {
    if (profileId.trim().isEmpty) return [];
    // Wait for any in-flight write so we never load a stale snapshot mid-save.
    await _writeChain.catchError((_) {});
    return _loadUnlocked(_storageEmail(email), profileId);
  }

  /// Prefer account email; fall back so chats still persist on-device without login email.
  static String _storageEmail(String email) {
    final e = email.toLowerCase().trim();
    return e.isEmpty ? 'local' : e;
  }

  static Future<List<Map<String, dynamic>>> _loadUnlocked(String email, String profileId) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_chatKey(email, profileId));
    if (raw == null || raw.isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      final now = DateTime.now();
      final cutoff = now.subtract(const Duration(days: retentionDays));
      final kept = <Map<String, dynamic>>[];
      var migratedInlineImages = false;
      for (final item in decoded) {
        if (item is! Map) continue;
        final map = Map<String, dynamic>.from(item);
        final at = DateTime.tryParse((map['at'] ?? '').toString());
        if (at != null && at.isBefore(cutoff)) continue;
        final role = (map['role'] ?? '').toString();
        final text = (map['text'] ?? '').toString().trim();
        var imageB64 = (map['imageB64'] ?? '').toString().trim();
        var imageId = (map['imageId'] ?? '').toString().trim();
        if (text.isEmpty && imageB64.isEmpty && imageId.isEmpty) continue;
        if (role != 'user' && role != 'ai') continue;

        // Migrate old inline base64 → durable local blob store (survives restarts).
        if (imageB64.isNotEmpty && imageId.isEmpty) {
          imageId = NgmyCommunicateChatImageStore.newId(email: email, profileId: profileId);
          final ok = await NgmyCommunicateChatImageStore.putBase64(imageId, imageB64);
          if (ok) {
            migratedInlineImages = true;
          } else {
            imageId = '';
          }
        }
        if (imageId.isNotEmpty && imageB64.isEmpty) {
          imageB64 = (await NgmyCommunicateChatImageStore.getBase64(imageId)) ?? '';
        }

        final row = <String, dynamic>{
          'role': role,
          'text': text,
          'at': (at ?? now).toUtc().toIso8601String(),
        };
        if (imageId.isNotEmpty) row['imageId'] = imageId;
        if (imageB64.isNotEmpty) row['imageB64'] = imageB64;
        final mime = (map['imageMime'] ?? '').toString().trim();
        if (mime.isNotEmpty) row['imageMime'] = mime;
        kept.add(row);
      }
      if (kept.length != decoded.length || migratedInlineImages) {
        // Queue rewrite after current work — never write unlocked (causes lost messages).
        unawaited(_serialized(() => _persistUnlocked(email, profileId, kept)));
      }
      return kept;
    } catch (_) {
      return [];
    }
  }

  static Future<void> append(
    String email,
    String profileId, {
    required String role,
    required String text,
    String? imageB64,
  }) async =>
      appendWithMime(email, profileId, role: role, text: text, imageB64: imageB64);

  static Future<void> appendWithMime(
    String email,
    String profileId, {
    required String role,
    required String text,
    String? imageB64,
    String imageMime = 'image/jpeg',
  }) async {
    if (profileId.trim().isEmpty) return;
    final storeEmail = _storageEmail(email);
    final trimmed = text.trim();
    final img = (imageB64 ?? '').trim();
    if (trimmed.isEmpty && img.isEmpty) return;
    try {
      await _serialized(() async {
        final list = await _loadUnlocked(storeEmail, profileId);
        final row = <String, dynamic>{
          'role': role,
          'text': trimmed,
          'at': DateTime.now().toUtc().toIso8601String(),
        };
        if (img.isNotEmpty) {
          final imageId = NgmyCommunicateChatImageStore.newId(email: storeEmail, profileId: profileId);
          final ok = await NgmyCommunicateChatImageStore.putBase64(imageId, img);
          if (ok) {
            row['imageId'] = imageId;
            row['imageB64'] = img;
          } else {
            row['imageB64'] = img;
          }
          final mime = imageMime.trim();
          if (mime.isNotEmpty) row['imageMime'] = mime;
        }
        list.add(row);
        await _saveAllUnlocked(storeEmail, profileId, list);
      });
    } catch (e) {
      // Never fail the chat UX — try a direct best-effort write.
      debugPrint('[communicate] append serialized failed, fallback: $e');
      try {
        final list = await _loadUnlocked(storeEmail, profileId);
        list.add({
          'role': role,
          'text': trimmed,
          'at': DateTime.now().toUtc().toIso8601String(),
          if (img.isNotEmpty) 'imageB64': img,
          if (img.isNotEmpty && imageMime.trim().isNotEmpty) 'imageMime': imageMime.trim(),
        });
        await _persistUnlocked(storeEmail, profileId, list);
      } catch (e2) {
        debugPrint('[communicate] append fallback failed: $e2');
      }
    }
  }

  static Future<void> saveAll(String email, String profileId, List<Map<String, dynamic>> messages) async {
    if (profileId.trim().isEmpty) return;
    final storeEmail = _storageEmail(email);
    await _serialized(() => _saveAllUnlocked(storeEmail, profileId, messages));
  }

  static Future<void> _saveAllUnlocked(String email, String profileId, List<Map<String, dynamic>> messages) async {
    final now = DateTime.now();
    final cutoff = now.subtract(const Duration(days: retentionDays));
    final cleaned = await _cleanMessageRowsAsync(email, profileId, messages, cutoff: cutoff);
    while (cleaned.length > maxStoredMessages) {
      final dropped = cleaned.removeAt(0);
      final dropId = (dropped['imageId'] ?? '').toString().trim();
      if (dropId.isNotEmpty) {
        unawaited(NgmyCommunicateChatImageStore.delete(dropId));
      }
    }
    await _persistUnlocked(email, profileId, cleaned);
  }

  /// Full history for backup export (no message cap).
  static Future<List<Map<String, dynamic>>> loadAllForExport(String email, String profileId) async {
    // Hydrated load — export includes base64 for portability.
    return load(email, profileId);
  }

  /// Merge imported messages into local chat (keeps all history).
  static Future<void> restoreMerged(String email, String profileId, List<Map<String, dynamic>> imported) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty || imported.isEmpty) return;
    final existing = await loadAllForExport(email, profileId);
    final byKey = <String, Map<String, dynamic>>{};
    for (final m in existing) {
      byKey[_messageMergeKey(m)] = m;
    }
    for (final m in imported) {
      byKey[_messageMergeKey(m)] = m;
    }
    final merged = byKey.values.toList()
      ..sort((a, b) => (a['at'] ?? '').toString().compareTo((b['at'] ?? '').toString()));
    await saveAll(email, profileId, merged);
  }

  static String _messageMergeKey(Map<String, dynamic> m) {
    final at = (m['at'] ?? '').toString();
    final role = (m['role'] ?? '').toString();
    final text = (m['text'] ?? '').toString();
    final imageId = (m['imageId'] ?? '').toString();
    final imgHint = imageId.isNotEmpty
        ? imageId
        : (m['imageB64'] ?? '').toString().hashCode.toString();
    return '$at|$role|$text|$imgHint';
  }

  static Future<List<Map<String, dynamic>>> _cleanMessageRowsAsync(
    String email,
    String profileId,
    List<Map<String, dynamic>> messages, {
    required DateTime cutoff,
  }) async {
    final now = DateTime.now();
    final cleaned = <Map<String, dynamic>>[];
    for (final m in messages) {
      final role = (m['role'] ?? '').toString();
      final text = (m['text'] ?? '').toString().trim();
      var imageB64 = (m['imageB64'] ?? '').toString().trim();
      var imageId = (m['imageId'] ?? '').toString().trim();
      if (text.isEmpty && imageB64.isEmpty && imageId.isEmpty) continue;
      final at = DateTime.tryParse((m['at'] ?? '').toString()) ?? now;
      if (at.isBefore(cutoff)) continue;

      if (imageB64.isNotEmpty && imageId.isEmpty) {
        imageId = NgmyCommunicateChatImageStore.newId(email: email, profileId: profileId);
        final ok = await NgmyCommunicateChatImageStore.putBase64(imageId, imageB64);
        if (!ok) imageId = '';
      }

      final row = <String, dynamic>{'role': role, 'text': text, 'at': at.toUtc().toIso8601String()};
      if (imageId.isNotEmpty) row['imageId'] = imageId;
      // Keep b64 in RAM list for UI; _persist strips it from prefs.
      if (imageB64.isNotEmpty) row['imageB64'] = imageB64;
      final mime = (m['imageMime'] ?? '').toString().trim();
      if (mime.isNotEmpty) row['imageMime'] = mime;
      cleaned.add(row);
    }
    return cleaned;
  }

  /// Persist metadata only — image bytes live in [NgmyCommunicateChatImageStore].
  static Future<void> _persistUnlocked(String email, String profileId, List<Map<String, dynamic>> list) async {
    final slim = <Map<String, dynamic>>[];
    for (final m in list) {
      final role = (m['role'] ?? '').toString();
      final text = (m['text'] ?? '').toString().trim();
      final imageId = (m['imageId'] ?? '').toString().trim();
      final imageB64 = (m['imageB64'] ?? '').toString().trim();
      if (text.isEmpty && imageId.isEmpty && imageB64.isEmpty) continue;
      final row = <String, dynamic>{
        'role': role,
        'text': text,
        'at': (m['at'] ?? DateTime.now().toUtc().toIso8601String()).toString(),
      };
      if (imageId.isNotEmpty) {
        row['imageId'] = imageId;
      } else if (imageB64.isNotEmpty) {
        // Extremely small inline fallback only (should be rare).
        if (imageB64.length < 80000) {
          row['imageB64'] = imageB64;
        }
      }
      final mime = (m['imageMime'] ?? '').toString().trim();
      if (mime.isNotEmpty) row['imageMime'] = mime;
      slim.add(row);
    }
    final prefs = await SharedPreferences.getInstance();
    final key = _chatKey(email, profileId);
    var payload = slim;
    for (var attempt = 0; attempt < 4; attempt++) {
      try {
        final ok = await prefs.setString(key, jsonEncode(payload));
        if (ok) return;
      } catch (e) {
        debugPrint('[communicate] prefs write attempt $attempt: $e');
      }
      // Quota / size pressure — drop oldest half and retry.
      if (payload.length <= 20) {
        payload = payload.isEmpty ? payload : [payload.last];
      } else {
        payload = payload.sublist(payload.length ~/ 2);
      }
    }
    debugPrint('[communicate] chat prefs write failed after retries for $profileId');
  }

  static String transcriptForPrompt(List<Map<String, dynamic>> memory, {int maxMessages = 40}) {
    if (memory.isEmpty) return '';
    final slice = memory.length <= maxMessages ? memory : memory.sublist(memory.length - maxMessages);
    final now = DateTime.now();
    final buf = StringBuffer('Your conversation history with this person (remember everything — times matter):\n');
    for (final m in slice) {
      final who = m['role'] == 'user' ? 'Them' : 'You';
      final text = (m['text'] ?? '').toString().trim();
      final img = (m['imageB64'] ?? '').toString().trim();
      final at = DateTime.tryParse((m['at'] ?? '').toString());
      var when = '';
      if (at != null) {
        final local = at.toLocal();
        final gap = now.difference(local);
        final ago = gap.inMinutes < 1
            ? 'just now'
            : gap.inMinutes < 60
                ? '${gap.inMinutes}m ago'
                : gap.inHours < 36
                    ? '${gap.inHours}h ago'
                    : '${gap.inDays}d ago';
        final hh = local.hour > 12
            ? local.hour - 12
            : (local.hour == 0 ? 12 : local.hour);
        final ampm = local.hour >= 12 ? 'PM' : 'AM';
        final mm = local.minute.toString().padLeft(2, '0');
        when = ' [$ago · $hh:$mm $ampm]';
      }
      if (img.isNotEmpty && who == 'Them') {
        buf.writeln('$who$when: ${text.isEmpty ? '[sent homework photo]' : '$text [+ homework photo]'}');
      } else {
        buf.writeln('$who$when: $text');
      }
    }
    return buf.toString();
  }

  /// Recent user homework photos still in chat memory (newest last).
  static List<({String mimeType, String data})> recentUserImages(
    List<Map<String, dynamic>> memory, {
    int maxImages = 2,
    int withinLastMessages = 20,
  }) {
    final slice = memory.length <= withinLastMessages ? memory : memory.sublist(memory.length - withinLastMessages);
    final found = <({String mimeType, String data})>[];
    for (final m in slice) {
      if (m['role'] != 'user') continue;
      final data = (m['imageB64'] ?? '').toString().trim();
      if (data.isEmpty) continue;
      final mime = (m['imageMime'] ?? 'image/jpeg').toString().trim();
      found.add((mimeType: mime.isEmpty ? 'image/jpeg' : mime, data: data));
    }
    if (found.length <= maxImages) return found;
    return found.sublist(found.length - maxImages);
  }
}

/// Local talk-time meter — per account on this device only (never synced to cloud).
class NgmyCommunicateTimeTracker {
  static String _key(String email) => 'ngmy_communicate_used_sec_${email.toLowerCase().trim()}';

  static Future<int> getUsedSeconds(String email) async {
    if (email.trim().isEmpty) return 0;
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(_key(email)) ?? 0;
  }

  /// Kept for call sites — reads local usage only (no cloud).
  static Future<int> syncFromCloud(String email) async => getUsedSeconds(email);

  static Future<void> addSeconds(String email, int seconds) async {
    if (email.trim().isEmpty || seconds <= 0) return;
    final prefs = await SharedPreferences.getInstance();
    final cur = prefs.getInt(_key(email)) ?? 0;
    await prefs.setInt(_key(email), cur + seconds);
  }

  static Future<void> resetAfterPayment(String email) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_key(email), 0);
  }
}

/// Offline avatar cache — companion photos stay on device when Wi‑Fi drops.
class NgmyCommunicateAvatarCache {
  static final Map<String, Uint8List> _ram = {};

  static String _key(String profileId) => 'ngmy_comm_avatar_${profileId.trim()}';

  static Uint8List? bytesInRam(String profileId) {
    final id = profileId.trim();
    if (id.isEmpty) return null;
    return _ram[id];
  }

  static Future<Uint8List?> loadBytes(String profileId) async {
    if (profileId.trim().isEmpty) return null;
    final id = profileId.trim();
    final cached = _ram[id];
    if (cached != null && cached.isNotEmpty) return cached;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(id));
    if (raw == null || raw.isEmpty) return null;
    try {
      final bytes = base64Decode(raw);
      if (bytes.isNotEmpty) _ram[id] = bytes;
      return bytes;
    } catch (_) {
      return null;
    }
  }

  static Future<void> saveBytes(String profileId, Uint8List bytes) async {
    if (profileId.trim().isEmpty || bytes.isEmpty) return;
    final id = profileId.trim();
    _ram[id] = bytes;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(id), base64Encode(bytes));
  }

  static Future<void> saveFromDataUrl(String profileId, String dataUrl) async {
    final url = dataUrl.trim();
    if (!url.startsWith('data:image') || profileId.trim().isEmpty) return;
    try {
      final bytes = base64Decode(url.split(',').last);
      await saveBytes(profileId, bytes);
    } catch (_) {}
  }

  static Future<void> ensureCached(String profileId, String avatarUrl) async {
    if (profileId.trim().isEmpty) return;
    final ram = bytesInRam(profileId);
    if (ram != null && ram.isNotEmpty) return;
    final existing = await loadBytes(profileId);
    if (existing != null && existing.isNotEmpty) return;

    final url = avatarUrl.trim();
    if (url.startsWith('data:image')) {
      await saveFromDataUrl(profileId, url);
      return;
    }
    if (!url.startsWith('http')) return;
    try {
      final resp = await http.get(Uri.parse(url)).timeout(const Duration(seconds: 12));
      if (resp.statusCode == 200 && resp.bodyBytes.isNotEmpty) {
        await saveBytes(profileId, resp.bodyBytes);
      }
    } catch (_) {}
  }

  static Future<void> cacheAllProfiles(Iterable<dynamic> rawProfiles) async {
    for (final e in rawProfiles) {
      if (e is! Map) continue;
      final id = (e['id'] ?? '').toString().trim();
      final url = (e['avatarUrl'] ?? e['avatar_url'] ?? '').toString().trim();
      if (id.isEmpty || url.isEmpty) continue;
      await ensureCached(id, url);
    }
  }

  /// Load every saved avatar into RAM so icons show instantly offline.
  static Future<void> hydrateRamFromDisk() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      for (final key in prefs.getKeys()) {
        if (!key.startsWith('ngmy_comm_avatar_')) continue;
        final id = key.substring('ngmy_comm_avatar_'.length).trim();
        if (id.isEmpty || (_ram[id]?.isNotEmpty ?? false)) continue;
        final raw = prefs.getString(key);
        if (raw == null || raw.isEmpty) continue;
        try {
          final bytes = base64Decode(raw);
          if (bytes.isNotEmpty) _ram[id] = bytes;
        } catch (_) {}
      }
    } catch (_) {}
  }

  static Future<bool> hasOnDisk(String profileId) async {
    if (profileId.trim().isEmpty) return false;
    if (bytesInRam(profileId) != null) return true;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(profileId.trim()));
    return raw != null && raw.isNotEmpty;
  }

  static Future<void> patchProfileAvatarInConfig(
    dynamic config,
    String profileId, {
    String? avatarUrl,
    Uint8List? bytes,
  }) async {
    final id = profileId.trim();
    if (id.isEmpty) return;
    if (bytes != null && bytes.isNotEmpty) {
      await saveBytes(id, bytes);
    }
    final raw = (config as dynamic).communicateProfiles;
    if (raw is! List) return;
    final profiles = raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
    final idx = profiles.indexWhere((p) => (p['id'] ?? '').toString().trim() == id);
    if (idx < 0) return;
    final url = (avatarUrl ?? '').trim();
    if (url.startsWith('data:image')) {
      profiles[idx]['avatarUrl'] = url;
      await saveFromDataUrl(id, url);
    } else {
      final cached = bytes ?? bytesInRam(id) ?? await loadBytes(id);
      if (cached != null && cached.isNotEmpty) {
        profiles[idx]['avatarUrl'] = 'data:image/jpeg;base64,${base64Encode(cached)}';
      }
    }
    (config as dynamic).communicateProfiles = profiles;
  }

  static Future<void> persistConfigProfilesLocally(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = (config as dynamic).communicateProfiles;
      if (raw is! List) return;
      final embedded = await profilesWithEmbeddedAvatars(raw);
      await prefs.setString(
        'ngmy_communicate_settings_v1',
        jsonEncode({
          'communicateEnabled': (config as dynamic).communicateEnabled == true,
          'communicateProfiles': embedded,
          'savedAt': DateTime.now().toUtc().toIso8601String(),
        }),
      );
    } catch (e) {
      debugPrint('[communicate avatars] local backup: $e');
    }
  }

  /// Embed cached avatar bytes as data URLs so profiles survive offline reloads.
  static Future<List<Map<String, dynamic>>> profilesWithEmbeddedAvatars(
    Iterable<dynamic> rawProfiles,
  ) async {
    final out = <Map<String, dynamic>>[];
    for (final e in rawProfiles) {
      if (e is! Map) continue;
      final m = Map<String, dynamic>.from(e);
      final id = (m['id'] ?? '').toString().trim();
      final url = (m['avatarUrl'] ?? m['avatar_url'] ?? '').toString().trim();
      if (id.isEmpty) {
        out.add(m);
        continue;
      }
      if (url.startsWith('data:image')) {
        await saveFromDataUrl(id, url);
        out.add(m);
        continue;
      }
      final bytes = bytesInRam(id) ?? await loadBytes(id);
      if (bytes != null && bytes.isNotEmpty) {
        m['avatarUrl'] = 'data:image/jpeg;base64,${base64Encode(bytes)}';
      }
      out.add(m);
    }
    return out;
  }
}

/// One exclusive partner per advisor profile — stored locally on this device only.
class NgmyCommunicateRelationshipStore {
  static String _key(String profileId) => 'ngmy_comm_partner_${profileId.trim()}';

  static Future<Map<String, String>?> loadPartner(String profileId) async {
    if (profileId.trim().isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(profileId));
    if (raw == null || raw.isEmpty) return null;
    try {
      final m = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      final email = (m['email'] ?? '').toString().trim();
      if (email.isEmpty) return null;
      return {
        'email': email.toLowerCase().trim(),
        'name': (m['name'] ?? '').toString(),
        'status': (m['status'] ?? 'dating').toString(),
        'since': (m['since'] ?? '').toString(),
      };
    } catch (_) {
      return null;
    }
  }

  /// Returns false if this advisor is already exclusive with someone else on this device.
  static Future<bool> setPartner(String profileId, {required String email, String name = '', String status = 'dating'}) async {
    if (profileId.trim().isEmpty || email.trim().isEmpty) return false;
    final normalized = email.toLowerCase().trim();
    final existing = await loadPartner(profileId);
    if (existing != null) {
      final exEmail = (existing['email'] ?? '').toLowerCase().trim();
      if (exEmail.isNotEmpty && exEmail != normalized) return false;
    }
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(profileId),
      jsonEncode({
        'email': normalized,
        'name': name.trim(),
        'status': status,
        'since': DateTime.now().toUtc().toIso8601String(),
      }),
    );
    return true;
  }

  static Future<void> clearPartner(String profileId, {String? onlyIfEmail}) async {
    if (profileId.trim().isEmpty) return;
    if (onlyIfEmail != null) {
      final current = await loadPartner(profileId);
      final curEmail = (current?['email'] ?? '').toLowerCase().trim();
      if (curEmail.isNotEmpty && curEmail != onlyIfEmail.toLowerCase().trim()) return;
    }
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key(profileId));
  }

  /// Infer relationship changes from chat history.
  /// [allowDating] false for Wisdom / non-datable respectable chats with regular users.
  static Future<void> syncFromMemory(
    String profileId,
    String chatterEmail,
    List<Map<String, dynamic>> memory, {
    bool allowDating = true,
  }) async {
    if (profileId.trim().isEmpty || chatterEmail.trim().isEmpty || memory.isEmpty) return;
    final all = memory.map((m) => (m['text'] ?? '').toString().toLowerCase()).join(' ');
    final email = chatterEmail.toLowerCase().trim();

    final brokeUp = RegExp(
      r'\b(break up|broke up|we.?re done|i.?m done with you|leave me alone|it.?s over|not together anymore|'
      r'we.?re not together|i.?m single now)\b',
    ).hasMatch(all);
    final official = RegExp(
      r'\b(you.?re my (boy|girl)friend|we.?re official|we.?re together|we.?re dating|be my (boy|girl)friend|'
      r'will you be mine|i.?m yours|only yours|exclusive|date me|dating you|you.?re my girl|you.?re my man|'
      r'i want you to be (my|mine)|let.?s be exclusive)\b',
    ).hasMatch(all);
    final softDating = RegExp(
      r'\b(my love|babe|baby|papi|i love you|love you|miss you|handsome|suck your|your dick|my pussy|fuck me|'
      r'make me cum|i.?m your girl|i.?m your man)\b',
    ).hasMatch(all);
    final aiText = memory
        .where((m) => (m['role'] ?? '').toString() == 'ai')
        .map((m) => (m['text'] ?? '').toString().toLowerCase())
        .join(' ');
    final advisorRomance = RegExp(
      r'\b(babe|baby|my love|boyfriend|girlfriend|miss you|handsome|beautiful|my man|my girl|i love you)\b',
    ).hasMatch(aiText);
    final userCount = memory.where((m) => (m['role'] ?? '').toString() == 'user').length;

    final existing = await loadPartner(profileId);
    if (brokeUp && existing != null && existing['email'] == email) {
      await clearPartner(profileId, onlyIfEmail: email);
      return;
    }
    // Someone else already has this advisor — don't steal the relationship (one partner only).
    if (existing != null && existing['email'] != email) return;

    if (!allowDating) {
      // Wisdom / respectable-with-regular-user: never form a relationship stamp.
      if (existing != null && existing['email'] == email) {
        await clearPartner(profileId);
      }
      return;
    }

    // User romance, official talk, or advisor already talked sweet back = exclusive with this person.
    if (official || (softDating && userCount >= 1) || (advisorRomance && userCount >= 1)) {
      await setPartner(profileId, email: email, name: '', status: 'exclusive');
    }
  }

  static int _datingScoreForMemory(List<Map<String, dynamic>> memory) {
    if (memory.isEmpty) return 0;
    final all = memory.map((m) => (m['text'] ?? '').toString().toLowerCase()).join(' ');
    var score = 0;
    if (RegExp(
      r'\b(you.?re my (boy|girl)friend|we.?re official|we.?re together|we.?re dating|exclusive|be my (boy|girl)friend)\b',
    ).hasMatch(all)) {
      score += 20;
    }
    if (RegExp(r'\b(babe|baby|my love|boyfriend|girlfriend|i love you|love you|miss you)\b').hasMatch(all)) {
      score += 8;
    }
    if (RegExp(r'\b(sex|sexy|horny|fuck|dick|pussy|nude|naked)\b').hasMatch(all)) score += 4;
    if (memory.where((m) => m['role'] == 'user').length >= 2) score += 2;
    final aiText = memory
        .where((m) => (m['role'] ?? '').toString() == 'ai')
        .map((m) => (m['text'] ?? '').toString().toLowerCase())
        .join(' ');
    if (RegExp(r'\b(babe|baby|my love|boyfriend|girlfriend|miss you|handsome|beautiful|my man|my girl)\b')
        .hasMatch(aiText)) {
      score += 12;
    }
    return score;
  }

  /// Scan every local chat thread for this advisor — stamp partner if someone is already dating them.
  static Future<void> reconcilePartnerFromAllLocalChats(String profileId) async {
    final id = profileId.trim();
    if (id.isEmpty) return;
    final current = await loadPartner(id);
    if (current != null && (current['email'] ?? '').toString().trim().isNotEmpty) return;

    final prefs = await SharedPreferences.getInstance();
    const prefix = 'ngmy_communicate_chat_';
    final suffix = '_$id';
    String? bestEmail;
    var bestScore = 0;

    for (final key in prefs.getKeys()) {
      if (!key.startsWith(prefix) || !key.endsWith(suffix)) continue;
      final emailPart = key.substring(prefix.length, key.length - suffix.length);
      if (emailPart.isEmpty) continue;
      final raw = prefs.getString(key);
      if (raw == null || raw.isEmpty) continue;
      try {
        final decoded = jsonDecode(raw);
        if (decoded is! List) continue;
        final memory = decoded.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
        final score = _datingScoreForMemory(memory);
        if (score > bestScore) {
          bestScore = score;
          bestEmail = emailPart.toLowerCase().trim();
        }
      } catch (_) {}
    }

    if (bestEmail != null && bestScore >= 8) {
      await setPartner(id, email: bestEmail, status: 'exclusive');
    }
  }

  static bool isTakenBySomeoneElse(Map<String, String>? partner, String chatterEmail) {
    if (partner == null) return false;
    final p = (partner['email'] ?? '').toLowerCase().trim();
    final e = chatterEmail.toLowerCase().trim();
    return p.isNotEmpty && e.isNotEmpty && p != e;
  }

  /// When the exclusive partner opens chat after being away, leave girlfriend/boyfriend
  /// check-up texts they "sent" while the app was closed — real partner energy.
  static Future<List<Map<String, dynamic>>> injectMissYouCheckInsIfNeeded({
    required String profileId,
    required String chatterEmail,
    required String advisorGender,
    required List<Map<String, dynamic>> memory,
  }) async {
    final partner = await loadPartner(profileId);
    if (partner == null) return memory;
    final partnerEmail = (partner['email'] ?? '').toLowerCase().trim();
    final email = chatterEmail.toLowerCase().trim();
    if (partnerEmail.isEmpty || partnerEmail != email) return memory;
    if (memory.isEmpty) return memory;

    DateTime? lastAt;
    for (var i = memory.length - 1; i >= 0; i--) {
      final at = DateTime.tryParse((memory[i]['at'] ?? '').toString());
      if (at != null) {
        lastAt = at.toLocal();
        break;
      }
    }
    if (lastAt == null) return memory;

    final gap = DateTime.now().difference(lastAt);
    // Under 3 hours is still the same hangout — no canned "how's your day?" miss-you spam.
    if (gap.inMinutes < 180) return memory;

    final prefs = await SharedPreferences.getInstance();
    final flagKey = 'ngmy_missyou_${profileId.trim()}_${email}_$lastAt';
    if (prefs.getBool(flagKey) == true) return memory;

    final girl = advisorGender.toLowerCase() != 'male';
    final hours = gap.inHours;
    final days = gap.inDays;

    final lines = <String>[];
    if (days >= 2) {
      lines.add(
        girl
            ? 'Babe… it’s been $days days 🥺 I miss you. You okay? Text me when you can.'
            : 'Hey… $days days and nothing. I miss you. You good?',
      );
      lines.add(
        girl
            ? 'I keep checking my phone for you 💔 Just need to know you’re safe.'
            : 'Been thinking about you. Hit me when you’re free.',
      );
    } else if (hours >= 8) {
      lines.add(
        girl
            ? 'Hey you… been a while 😌 Missed you. You good?'
            : 'Checking in on you. Missed you.',
      );
      lines.add(
        girl
            ? 'Don’t leave me hanging too long baby 💕'
            : 'Don’t ghost me like that 😤',
      );
    } else {
      // 3–8 hours — miss them without a fresh "how was your day" if they may still be mid-day.
      lines.add(
        girl
            ? 'Just thinking about you 💭 You went quiet… everything alright?'
            : 'You went quiet. Everything good?',
      );
    }

    final next = List<Map<String, dynamic>>.from(memory);
    for (final line in lines) {
      await NgmyCommunicateMemoryStore.append(email, profileId, role: 'ai', text: line);
      next.add({
        'role': 'ai',
        'text': line,
        'at': DateTime.now().toUtc().toIso8601String(),
      });
    }
    await prefs.setBool(flagKey, true);
    return next;
  }
}

/// Per-user language pair for Translator companions (NGMY Advisors).
class NgmyTranslatorLanguageStore {
  static String _key(String email, String profileId) =>
      'ngmy_translator_langs_${email.toLowerCase().trim()}_${profileId.trim()}';

  static Future<Map<String, String>?> load(String email, String profileId) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email, profileId));
    if (raw == null || raw.isEmpty) return null;
    try {
      final map = jsonDecode(raw);
      if (map is! Map) return null;
      final native = (map['native'] ?? '').toString().trim();
      final learning = (map['learning'] ?? '').toString().trim();
      if (native.isEmpty || learning.isEmpty) return null;
      return {'native': native, 'learning': learning};
    } catch (_) {
      return null;
    }
  }

  static Future<void> save(String email, String profileId, {required String native, required String learning}) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(email, profileId),
      jsonEncode({'native': native.trim(), 'learning': learning.trim()}),
    );
  }
}

/// Tracks things the user said they would do so advisors can remind / follow up.
class NgmyCommunicatePromiseStore {
  static String _key(String email, String profileId) =>
      'ngmy_comm_promises_${email.toLowerCase().trim()}_${profileId.trim()}';

  static Future<List<Map<String, dynamic>>> load(String email, String profileId) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email, profileId));
    if (raw == null || raw.isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      return decoded.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    } catch (_) {
      return [];
    }
  }

  static Future<void> _save(String email, String profileId, List<Map<String, dynamic>> list) async {
    final prefs = await SharedPreferences.getInstance();
    final trimmed = list.length > 40 ? list.sublist(list.length - 40) : list;
    await prefs.setString(_key(email, profileId), jsonEncode(trimmed));
  }

  static Future<void> syncFromUserText(String email, String profileId, String text) async {
    final t = text.trim();
    if (t.isEmpty) return;
    final lower = t.toLowerCase();
    final hit = RegExp(
      r"\b(remind me|i('?m| am) (gonna|going to|about to)|i will|i('?ll| ll)|i have to|i need to|"
      r"i should|don'?t let me forget|i['’]m supposed to)\b",
    ).hasMatch(lower);
    if (!hit) return;

    final when = _whenHint(lower);
    final list = await load(email, profileId);
    // Avoid near-duplicates.
    final norm = lower.replaceAll(RegExp(r'\s+'), ' ');
    if (list.any((e) => (e['text'] ?? '').toString().toLowerCase().replaceAll(RegExp(r'\s+'), ' ') == norm)) {
      return;
    }
    list.add({
      'text': t.length > 180 ? '${t.substring(0, 180)}…' : t,
      'when': when,
      'at': DateTime.now().toUtc().toIso8601String(),
      'done': false,
    });
    await _save(email, profileId, list);
  }

  static String _whenHint(String lower) {
    if (RegExp(r'\b(tomorrow morning|tmr morning|in the morning|this morning)\b').hasMatch(lower)) {
      return 'morning';
    }
    if (RegExp(r'\b(tonight|this evening|this afternoon|this weekend|tomorrow)\b').hasMatch(lower)) {
      final m = RegExp(r'\b(tonight|this evening|this afternoon|this weekend|tomorrow)\b').firstMatch(lower);
      return m?.group(0) ?? 'later';
    }
    final clock = RegExp(r'\b([01]?\d|2[0-3])\s*(:\s*[0-5]\d)?\s*(am|pm)?\b').firstMatch(lower);
    if (clock != null) return clock.group(0)!.replaceAll(' ', '');
    return 'sometime';
  }

  /// Prompt block so the advisor remembers open plans.
  static Future<String> promptBlock(String email, String profileId) async {
    final list = await load(email, profileId);
    final open = list.where((e) => e['done'] != true).toList();
    if (open.isEmpty) return '';
    final now = DateTime.now();
    final buf = StringBuffer('THINGS THEY SAID THEY WOULD DO (remember + remind naturally):\n');
    for (final p in open.take(8)) {
      final text = (p['text'] ?? '').toString();
      final when = (p['when'] ?? 'sometime').toString();
      final at = DateTime.tryParse((p['at'] ?? '').toString());
      var dueNote = '';
      if (at != null) {
        final ageH = now.difference(at.toLocal()).inHours;
        if (when.contains('morning') && now.hour >= 12 && ageH >= 4) {
          dueNote = ' — time likely passed; ask how their day went and if they did it';
        } else if (when.contains('tonight') && (now.hour >= 22 || ageH >= 12)) {
          dueNote = ' — follow up gently: did they do it?';
        } else if (ageH >= 20) {
          dueNote = ' — old enough to check in warmly';
        }
      }
      buf.writeln('- ($when) "$text"$dueNote');
    }
    buf.writeln(
      'Use these naturally — remind before/around the time, or after ask if they did it / how the day was. Do not dump the whole list every reply.\n',
    );
    return buf.toString();
  }
}

/// Remembers what the chatter is working on (projects / grind) — local only.
/// Shared per user email so Mariam + Suzana (personal helpers) both remember.
class NgmyCommunicateFocusStore {
  static String _key(String email, String profileId) =>
      'ngmy_comm_focus_${email.toLowerCase().trim()}';

  static Future<List<Map<String, dynamic>>> load(String email, String profileId) async {
    if (email.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email, profileId));
    if (raw == null || raw.isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      return decoded.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    } catch (_) {
      return [];
    }
  }

  static Future<void> _save(String email, String profileId, List<Map<String, dynamic>> list) async {
    final prefs = await SharedPreferences.getInstance();
    final trimmed = list.length > 12 ? list.sublist(list.length - 12) : list;
    await prefs.setString(_key(email, profileId), jsonEncode(trimmed));
  }

  /// Detect "I'm working on X" / "remember I'm building Y" and save it.
  static Future<void> syncFromUserText(String email, String profileId, String text) async {
    final t = text.trim();
    if (t.isEmpty) return;
    final lower = t.toLowerCase();

    String? focus;
    final patterns = <RegExp>[
      RegExp(
        r"\b(?:i(?:'m| am)?\s+(?:working(?:\s+hard)?\s+on|building|fixing|renovating|starting|launching|trying\s+to|grinding\s+on|focused\s+on))\s+(.+)$",
        caseSensitive: false,
      ),
      RegExp(
        r"(?:remember(?:\s+that)?(?:\s+i(?:'m| am)?)?|save\s+this|keep\s+in\s+mind)\s*[:\-]?\s*(.+)$",
        caseSensitive: false,
      ),
      RegExp(
        r"\b(?:my\s+(?:project|goal|grind|focus)\s+(?:is|right\s+now))\s+(.+)$",
        caseSensitive: false,
      ),
    ];
    for (final p in patterns) {
      final m = p.firstMatch(lower);
      if (m != null) {
        focus = (m.group(1) ?? '').trim();
        break;
      }
    }
    // Explicit: "I'm working hard on my house"
    if (focus == null || focus.isEmpty) {
      final m = RegExp(
        r"\bworking(?:\s+hard)?\s+on\s+(.{3,120})",
        caseSensitive: false,
      ).firstMatch(t);
      if (m != null) focus = m.group(1)!.trim();
    }
    if (focus == null || focus.length < 3) return;
    // Strip trailing ask-for-quote tails so we don't store the whole message.
    focus = focus
        .replaceAll(RegExp(r'[.!?].*$'), '')
        .replaceAll(RegExp(r'\b(give|send|write|make|quote|motivate|keep me).*$', caseSensitive: false), '')
        .trim();
    if (focus.length < 3) return;
    if (focus.length > 140) focus = '${focus.substring(0, 140)}…';

    final list = await load(email, profileId);
    final norm = focus.toLowerCase().replaceAll(RegExp(r'\s+'), ' ');
    list.removeWhere(
      (e) => (e['text'] ?? '').toString().toLowerCase().replaceAll(RegExp(r'\s+'), ' ') == norm,
    );
    list.add({
      'text': focus,
      'at': DateTime.now().toUtc().toIso8601String(),
    });
    await _save(email, profileId, list);
  }

  static Future<String> promptBlock(String email, String profileId) async {
    final list = await load(email, profileId);
    if (list.isEmpty) return '';
    final buf = StringBuffer(
      'WHAT THEY ARE WORKING ON (remember this — quotes and advice should match their grind):\n',
    );
    for (final p in list.reversed.take(5)) {
      final text = (p['text'] ?? '').toString().trim();
      if (text.isEmpty) continue;
      buf.writeln('- "$text"');
    }
    buf.writeln(
      'When they ask for a quote / motivation / keep me going — write it ABOUT their current work. '
      'When advising, reference these projects naturally. Do not dump the list every reply.\n',
    );
    return buf.toString();
  }
}
