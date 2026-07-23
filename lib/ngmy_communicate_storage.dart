import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// Long-term local storage for Communicate companion chats (months on same device).
class NgmyCommunicateMemoryStore {
  static const int retentionDays = 365;
  static const int maxStoredMessages = 500;

  static String _chatKey(String email, String profileId) =>
      'ngmy_communicate_chat_${email.toLowerCase().trim()}_${profileId.trim()}';

  static Future<List<Map<String, dynamic>>> load(String email, String profileId) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_chatKey(email, profileId));
    if (raw == null || raw.isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      final now = DateTime.now();
      final cutoff = now.subtract(const Duration(days: retentionDays));
      final kept = <Map<String, dynamic>>[];
      for (final item in decoded) {
        if (item is! Map) continue;
        final map = Map<String, dynamic>.from(item);
        final at = DateTime.tryParse((map['at'] ?? '').toString());
        if (at != null && at.isBefore(cutoff)) continue;
        final role = (map['role'] ?? '').toString();
        final text = (map['text'] ?? '').toString().trim();
        final imageB64 = (map['imageB64'] ?? '').toString().trim();
        if (text.isEmpty && imageB64.isEmpty) continue;
        if (role != 'user' && role != 'ai') continue;
        final row = <String, dynamic>{'role': role, 'text': text, 'at': (at ?? now).toUtc().toIso8601String()};
        if (imageB64.isNotEmpty) row['imageB64'] = imageB64;
        kept.add(row);
      }
      if (kept.length != decoded.length) await _persist(email, profileId, kept);
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
    if (email.trim().isEmpty || profileId.trim().isEmpty) return;
    final trimmed = text.trim();
    final img = (imageB64 ?? '').trim();
    if (trimmed.isEmpty && img.isEmpty) return;
    final list = await load(email, profileId);
    final row = <String, dynamic>{
      'role': role,
      'text': trimmed,
      'at': DateTime.now().toUtc().toIso8601String(),
    };
    if (img.isNotEmpty) {
      row['imageB64'] = img;
      final mime = imageMime.trim();
      if (mime.isNotEmpty) row['imageMime'] = mime;
    }
    list.add(row);
    await saveAll(email, profileId, list);
  }

  static Future<void> saveAll(String email, String profileId, List<Map<String, dynamic>> messages) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return;
    final now = DateTime.now();
    final cutoff = now.subtract(const Duration(days: retentionDays));
    final cleaned = _cleanMessageRows(messages, cutoff: cutoff);
    while (cleaned.length > maxStoredMessages) {
      cleaned.removeAt(0);
    }
    await _persist(email, profileId, cleaned);
  }

  /// Full history for backup export (no message cap).
  static Future<List<Map<String, dynamic>>> loadAllForExport(String email, String profileId) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_chatKey(email, profileId));
    if (raw == null || raw.isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      final kept = <Map<String, dynamic>>[];
      for (final item in decoded) {
        if (item is! Map) continue;
        final map = Map<String, dynamic>.from(item);
        final role = (map['role'] ?? '').toString();
        final text = (map['text'] ?? '').toString().trim();
        final imageB64 = (map['imageB64'] ?? '').toString().trim();
        if (text.isEmpty && imageB64.isEmpty) continue;
        if (role != 'user' && role != 'ai') continue;
        kept.add(map);
      }
      kept.sort((a, b) => (a['at'] ?? '').toString().compareTo((b['at'] ?? '').toString()));
      return kept;
    } catch (_) {
      return [];
    }
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
    await _persist(email, profileId, merged);
  }

  static String _messageMergeKey(Map<String, dynamic> m) {
    final at = (m['at'] ?? '').toString();
    final role = (m['role'] ?? '').toString();
    final text = (m['text'] ?? '').toString();
    return '$at|$role|$text';
  }

  static List<Map<String, dynamic>> _cleanMessageRows(List<Map<String, dynamic>> messages, {required DateTime cutoff}) {
    final now = DateTime.now();
    final cleaned = <Map<String, dynamic>>[];
    for (final m in messages) {
      final role = (m['role'] ?? '').toString();
      final text = (m['text'] ?? '').toString().trim();
      final imageB64 = (m['imageB64'] ?? '').toString().trim();
      if (text.isEmpty && imageB64.isEmpty) continue;
      final at = DateTime.tryParse((m['at'] ?? '').toString()) ?? now;
      if (at.isBefore(cutoff)) continue;
      final row = <String, dynamic>{'role': role, 'text': text, 'at': at.toUtc().toIso8601String()};
      if (imageB64.isNotEmpty) {
        row['imageB64'] = imageB64;
        final mime = (m['imageMime'] ?? '').toString().trim();
        if (mime.isNotEmpty) row['imageMime'] = mime;
      }
      cleaned.add(row);
    }
    return cleaned;
  }

  static Future<void> _persist(String email, String profileId, List<Map<String, dynamic>> list) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_chatKey(email, profileId), jsonEncode(list));
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

/// Cloud sync — same account shares talk-time across all devices.
class NgmyCommunicateTimeCloud {
  static const _settingsKey = 'ngmy_communicate_time_usage_v1';

  static String _norm(String email) => email.toLowerCase().trim();

  static Future<int> fetchSeconds(String email) async {
    if (!await ngmyCanReachCloud() || email.trim().isEmpty) return 0;
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _settingsKey).maybeSingle();
      if (row == null) return 0;
      final value = row['value'];
      if (value is! Map) return 0;
      final users = value['users'];
      if (users is! Map) return 0;
      final entry = users[_norm(email)];
      if (entry is! Map) return 0;
      return (entry['usedSeconds'] as num?)?.toInt() ?? 0;
    } catch (e) {
      debugPrint('[comm time cloud] fetch: $e');
      return 0;
    }
  }

  static Future<void> pushSeconds(String email, int seconds) async {
    if (!await ngmyCanReachCloud() || email.trim().isEmpty) return;
    try {
      Map<String, dynamic> users = {};
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _settingsKey).maybeSingle();
      if (row != null) {
        final value = row['value'];
        if (value is Map) {
          final raw = value['users'];
          if (raw is Map) users = Map<String, dynamic>.from(raw);
        }
      }
      final key = _norm(email);
      final prev = (users[key] is Map) ? Map<String, dynamic>.from(users[key] as Map) : <String, dynamic>{};
      final prevSec = (prev['usedSeconds'] as num?)?.toInt() ?? 0;
      users[key] = {
        'usedSeconds': math.max(prevSec, seconds),
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      };
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _settingsKey,
          'value': {'users': users, 'savedAt': DateTime.now().toUtc().toIso8601String()},
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
    } catch (e) {
      debugPrint('[comm time cloud] push: $e');
    }
  }

  static Future<void> reset(String email) async {
    await pushSeconds(email, 0);
  }
}

/// Rolling talk-time meter — per account, synced across phones.
class NgmyCommunicateTimeTracker {
  static String _key(String email) => 'ngmy_communicate_used_sec_${email.toLowerCase().trim()}';

  /// Pull cloud usage into local cache — call when opening any AI chat.
  static Future<int> syncFromCloud(String email) async {
    if (email.trim().isEmpty) return 0;
    final prefs = await SharedPreferences.getInstance();
    final local = prefs.getInt(_key(email)) ?? 0;
    final cloud = await NgmyCommunicateTimeCloud.fetchSeconds(email);
    final merged = math.max(local, cloud);
    if (merged != local) await prefs.setInt(_key(email), merged);
    return merged;
  }

  static Future<int> getUsedSeconds(String email) async => syncFromCloud(email);

  static Future<void> addSeconds(String email, int seconds) async {
    if (email.trim().isEmpty || seconds <= 0) return;
    final prefs = await SharedPreferences.getInstance();
    final cur = prefs.getInt(_key(email)) ?? 0;
    final cloud = await NgmyCommunicateTimeCloud.fetchSeconds(email);
    final next = math.max(cur, cloud) + seconds;
    await prefs.setInt(_key(email), next);
    unawaited(NgmyCommunicateTimeCloud.pushSeconds(email, next));
  }

  static Future<void> resetAfterPayment(String email) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_key(email), 0);
    unawaited(NgmyCommunicateTimeCloud.reset(email));
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

/// One exclusive partner per companion profile (per device) — AI stays taken.
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
        'email': email,
        'name': (m['name'] ?? '').toString(),
        'status': (m['status'] ?? 'dating').toString(),
        'since': (m['since'] ?? '').toString(),
      };
    } catch (_) {
      return null;
    }
  }

  static Future<void> setPartner(String profileId, {required String email, String name = '', String status = 'dating'}) async {
    if (profileId.trim().isEmpty || email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(profileId),
      jsonEncode({
        'email': email.toLowerCase().trim(),
        'name': name.trim(),
        'status': status,
        'since': DateTime.now().toUtc().toIso8601String(),
      }),
    );
  }

  static Future<void> clearPartner(String profileId) async {
    if (profileId.trim().isEmpty) return;
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
      r'\b(my love|babe|baby|papi|i love you|love you|suck your|your dick|my pussy|fuck me|'
      r'make me cum|i.?m your girl|i.?m your man)\b',
    ).hasMatch(all);
    final userCount = memory.where((m) => (m['role'] ?? '').toString() == 'user').length;

    final existing = await loadPartner(profileId);
    if (brokeUp && existing != null && existing['email'] == email) {
      await clearPartner(profileId);
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

    if (official || (softDating && userCount >= 2)) {
      await setPartner(profileId, email: email, status: 'exclusive');
    }
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
