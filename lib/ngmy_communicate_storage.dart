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
    while (cleaned.length > maxStoredMessages) {
      cleaned.removeAt(0);
    }
    await _persist(email, profileId, cleaned);
  }

  static Future<void> _persist(String email, String profileId, List<Map<String, dynamic>> list) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_chatKey(email, profileId), jsonEncode(list));
  }

  static String transcriptForPrompt(List<Map<String, dynamic>> memory, {int maxMessages = 40}) {
    if (memory.isEmpty) return '';
    final slice = memory.length <= maxMessages ? memory : memory.sublist(memory.length - maxMessages);
    final buf = StringBuffer('Your conversation history with this person (remember everything):\n');
    for (final m in slice) {
      final who = m['role'] == 'user' ? 'Them' : 'You';
      final text = (m['text'] ?? '').toString().trim();
      final img = (m['imageB64'] ?? '').toString().trim();
      if (img.isNotEmpty && who == 'Them') {
        buf.writeln('$who: ${text.isEmpty ? '[sent homework photo]' : '$text [+ homework photo]'}');
      } else {
        buf.writeln('$who: $text');
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
  static Future<void> syncFromMemory(String profileId, String chatterEmail, List<Map<String, dynamic>> memory) async {
    if (profileId.trim().isEmpty || chatterEmail.trim().isEmpty || memory.isEmpty) return;
    final all = memory.map((m) => (m['text'] ?? '').toString().toLowerCase()).join(' ');
    final email = chatterEmail.toLowerCase().trim();

    final brokeUp = RegExp(
      r'\b(break up|broke up|we.?re done|i.?m done with you|leave me alone|it.?s over|not together anymore)\b',
    ).hasMatch(all);
    final official = RegExp(
      r'\b(you.?re my (boy|girl)friend|we.?re official|we.?re together|be my (boy|girl)friend|will you be mine|i.?m yours|only yours|exclusive)\b',
    ).hasMatch(all);

    final existing = await loadPartner(profileId);
    if (brokeUp && existing != null && existing['email'] == email) {
      await clearPartner(profileId);
      return;
    }
    if (official) {
      await setPartner(profileId, email: email, status: 'exclusive');
    }
  }
}
