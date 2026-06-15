import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_storage.dart';
import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_network_resilience.dart';

const String kNgmyAdvisorSyncMarker = 'ngmyAdvisorSync';
const int kNgmyAdvisorSyncVersion = 1;
const String kNgmyAdvisorSyncQrPrefix = 'NGMYASYNC1';
const String kNgmyAdvisorSyncQrPrefixV2 = 'NGMYASYNC2';
const int kNgmyAdvisorSyncQrMaxUses = 2;
const String _kCloudSettingsKey = 'ngmy_communicate_backup_codes_v1';
const String _kQrStashSettingsKey = 'ngmy_communicate_qr_stashes_v1';

/// Cloud activation codes — only codes live in Supabase; conversation data stays local.
class NgmyCommunicateBackupCodes {
  static String _norm(String email) => email.toLowerCase().trim();

  static String _generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'ADV${List.generate(8, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>> _loadCloudMap() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _kCloudSettingsKey).maybeSingle();
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final codes = value['codes'];
      if (codes is Map) return Map<String, dynamic>.from(codes);
    } catch (e) {
      debugPrint('[advisor sync codes] load: $e');
    }
    return {};
  }

  static Future<void> _saveCloudMap(Map<String, dynamic> codes) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kCloudSettingsKey,
          'value': {
            'codes': codes,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
    } catch (e) {
      debugPrint('[advisor sync codes] save: $e');
    }
  }

  static Future<String?> codeForEmail(String email) async {
    final key = _norm(email);
    if (key.isEmpty) return null;
    final codes = await _loadCloudMap();
    for (final entry in codes.entries) {
      final v = entry.value;
      if (v is Map && _norm((v['email'] ?? '').toString()) == key && v['active'] == true) {
        return entry.key;
      }
    }
    return null;
  }

  static Future<String?> ensureActiveCode(String email, {DateTime? passUntil}) async {
    if (email.trim().isEmpty) return null;
    final existing = await codeForEmail(email);
    if (existing != null) {
      final codes = await _loadCloudMap();
      final row = codes[existing];
      if (row is Map) {
        codes[existing] = {
          ...Map<String, dynamic>.from(row),
          'active': true,
          'passUntil': passUntil?.toUtc().toIso8601String(),
          'updatedAt': DateTime.now().toUtc().toIso8601String(),
        };
        await _saveCloudMap(codes);
      }
      return existing;
    }
    final code = _generateCode();
    final codes = await _loadCloudMap();
    codes[code] = {
      'email': _norm(email),
      'active': true,
      'passUntil': passUntil?.toUtc().toIso8601String(),
      'createdAt': DateTime.now().toUtc().toIso8601String(),
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveCloudMap(codes);
    return code;
  }

  static Future<void> revokeAllForEmail(String email) async {
    final key = _norm(email);
    if (key.isEmpty) return;
    final codes = await _loadCloudMap();
    var changed = false;
    for (final entry in codes.entries.toList()) {
      final v = entry.value;
      if (v is Map && _norm((v['email'] ?? '').toString()) == key) {
        codes.remove(entry.key);
        changed = true;
      }
    }
    if (changed) await _saveCloudMap(codes);
  }

  static Future<void> syncForUser(String email, dynamic config, {required bool isAdmin}) async {
    if (isAdmin || email.trim().isEmpty) return;
    if (NgmyCommunicatePayments.hasActivePass(config, email)) {
      await ensureActiveCode(email, passUntil: NgmyCommunicatePayments.passExpiresAt(config, email));
    } else {
      await revokeAllForEmail(email);
    }
  }

  static Future<bool> validateImportCode({
    required String email,
    required String code,
    required bool isAdmin,
    required dynamic config,
    String? ownerEmail,
    bool recipientImport = false,
  }) async {
    if (isAdmin) return true;
    final normalized = code.trim().toUpperCase();
    if (normalized.isEmpty) return false;
    if (normalized == 'ADMIN-LOCAL') return isAdmin || recipientImport;

    final owner = _norm((ownerEmail ?? email).toString());
    final scanner = _norm(email);
    final isRecipient = recipientImport || owner != scanner;

    // Scanner restoring someone else's QR/file does not need their own advisor pass.
    if (!isRecipient && !NgmyCommunicatePayments.hasActivePass(config, email)) return false;

    if (!await ngmyCanReachCloud()) return false;
    final codes = await _loadCloudMap();
    final row = codes[normalized];
    if (row is! Map) return false;
    if (row['active'] != true) return false;
    return _norm((row['email'] ?? '').toString()) == owner;
  }

  static Future<bool> isBackupCodeActive(String code, {required String ownerEmail}) async {
    final normalized = code.trim().toUpperCase();
    if (normalized.isEmpty || normalized == 'ADMIN-LOCAL') return true;
    if (!await ngmyCanReachCloud()) return false;
    final codes = await _loadCloudMap();
    final row = codes[normalized];
    if (row is! Map) return false;
    if (row['active'] != true) return false;
    return _norm((row['email'] ?? '').toString()) == _norm(ownerEmail);
  }
}

/// Short-lived cloud stash so QR codes stay small (2 scans total).
class NgmyCommunicateQrStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'QR${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>> _loadStashes() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _kQrStashSettingsKey).maybeSingle();
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final stashes = value['stashes'];
      if (stashes is Map) return Map<String, dynamic>.from(stashes);
    } catch (e) {
      debugPrint('[advisor qr stash] load: $e');
    }
    return {};
  }

  static Future<void> _saveStashes(Map<String, dynamic> stashes) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kQrStashSettingsKey,
          'value': {
            'stashes': stashes,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
    } catch (e) {
      debugPrint('[advisor qr stash] save: $e');
    }
  }

  /// Creates a cloud stash and returns a compact QR payload (always fits on screen).
  static Future<({String qrPayload, String token, int usesRemaining})?> createFromBundle(
    NgmyAdvisorSyncBundle bundle, {
    required bool isAdmin,
  }) async {
    if (!await ngmyCanReachCloud()) return null;
    final token = _generateToken();
    final stashes = await _loadStashes();
    stashes[token] = {
      'ownerEmail': bundle.ownerEmail,
      'code': bundle.code,
      'payload': base64Encode(utf8.encode(jsonEncode(bundle.toMap()))),
      'usesRemaining': isAdmin ? 999 : kNgmyAdvisorSyncQrMaxUses,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveStashes(stashes);
    final uses = isAdmin ? 999 : kNgmyAdvisorSyncQrMaxUses;
    return (
      qrPayload: '$kNgmyAdvisorSyncQrPrefixV2|$token',
      token: token,
      usesRemaining: uses,
    );
  }

  static Future<NgmyAdvisorSyncBundle?> consumeToken(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    final stashes = await _loadStashes();
    final row = stashes[id];
    if (row is! Map) return null;
    final uses = (row['usesRemaining'] as num?)?.toInt() ?? 0;
    if (uses <= 0) return null;

    final ownerEmail = (row['ownerEmail'] ?? '').toString();
    final code = (row['code'] ?? '').toString();
    if (!await NgmyCommunicateBackupCodes.isBackupCodeActive(code, ownerEmail: ownerEmail)) {
      debugPrint('[advisor qr stash] owner code inactive; allowing stash restore');
    }

    final payloadRaw = (row['payload'] ?? '').toString();
    if (payloadRaw.isEmpty) return null;
    NgmyAdvisorSyncBundle? bundle;
    try {
      final jsonText = utf8.decode(base64Decode(payloadRaw));
      bundle = NgmyAdvisorSyncBundle.parse(jsonText);
    } catch (e) {
      debugPrint('[advisor qr stash] decode: $e');
      return null;
    }
    if (bundle == null) return null;

    final nextUses = uses - 1;
    if (nextUses <= 0) {
      stashes.remove(id);
    } else {
      stashes[id] = {
        ...Map<String, dynamic>.from(row),
        'usesRemaining': nextUses,
        'lastUsedAt': DateTime.now().toUtc().toIso8601String(),
      };
    }
    await _saveStashes(stashes);
    return bundle;
  }
}

class NgmyAdvisorSyncThread {
  const NgmyAdvisorSyncThread({
    required this.profileId,
    required this.profileName,
    required this.profileRole,
    required this.messages,
    this.partner,
    this.translatorLangs,
  });

  final String profileId;
  final String profileName;
  final String profileRole;
  final List<Map<String, dynamic>> messages;
  final Map<String, dynamic>? partner;
  final Map<String, String>? translatorLangs;

  Map<String, dynamic> toMap() => {
        'profileId': profileId,
        'profileName': profileName,
        'profileRole': profileRole,
        'messages': messages,
        if (partner != null) 'partner': partner,
        if (translatorLangs != null) 'translatorLangs': translatorLangs,
      };

  factory NgmyAdvisorSyncThread.fromMap(Map<String, dynamic> map) {
    final rawMsgs = map['messages'];
    final msgs = rawMsgs is List
        ? rawMsgs.map((e) => e is Map ? Map<String, dynamic>.from(e) : null).whereType<Map<String, dynamic>>().toList()
        : <Map<String, dynamic>>[];
    Map<String, dynamic>? partner;
    if (map['partner'] is Map) partner = Map<String, dynamic>.from(map['partner'] as Map);
    Map<String, String>? langs;
    if (map['translatorLangs'] is Map) {
      langs = (map['translatorLangs'] as Map).map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return NgmyAdvisorSyncThread(
      profileId: (map['profileId'] ?? '').toString(),
      profileName: (map['profileName'] ?? 'Advisor').toString(),
      profileRole: (map['profileRole'] ?? 'companion').toString(),
      messages: msgs,
      partner: partner,
      translatorLangs: langs,
    );
  }
}

class NgmyAdvisorSyncBundle {
  const NgmyAdvisorSyncBundle({
    required this.code,
    required this.ownerEmail,
    required this.threads,
    required this.exportedAt,
  });

  final String code;
  final String ownerEmail;
  final List<NgmyAdvisorSyncThread> threads;
  final DateTime exportedAt;

  Map<String, dynamic> toMap() => {
        kNgmyAdvisorSyncMarker: kNgmyAdvisorSyncVersion,
        'code': code,
        'ownerEmail': ownerEmail,
        'exportedAt': exportedAt.toUtc().toIso8601String(),
        'threads': threads.map((t) => t.toMap()).toList(),
      };

  String toJson() => jsonEncode(toMap());

  static NgmyAdvisorSyncBundle? parse(String raw) {
    try {
      var text = raw.trim();
      if (text.startsWith('\uFEFF')) text = text.substring(1);
      if (text.startsWith(kNgmyAdvisorSyncQrPrefixV2)) return null;
      if (text.startsWith(kNgmyAdvisorSyncQrPrefix)) {
        final payload = text.substring(kNgmyAdvisorSyncQrPrefix.length);
        if (payload.startsWith('|')) {
          text = utf8.decode(base64Url.decode(payload.substring(1)));
        }
      }
      final decoded = jsonDecode(text);
      if (decoded is! Map) return null;
      return fromMap(Map<String, dynamic>.from(decoded));
    } catch (e) {
      debugPrint('[advisor sync parse] $e');
      return null;
    }
  }

  static Future<NgmyAdvisorSyncBundle?> parseAsync(String raw) async {
    final trimmed = raw.trim();
    if (trimmed.startsWith('$kNgmyAdvisorSyncQrPrefixV2|')) {
      final parts = trimmed.split('|');
      if (parts.length >= 2) {
        return NgmyCommunicateQrStash.consumeToken(parts[1]);
      }
      return null;
    }
    return parse(trimmed);
  }

  static NgmyAdvisorSyncBundle? fromMap(Map<String, dynamic> map) {
    if (map[kNgmyAdvisorSyncMarker] != kNgmyAdvisorSyncVersion && map[kNgmyAdvisorSyncMarker] != 1) return null;
    final code = (map['code'] ?? '').toString().trim().toUpperCase();
    final owner = (map['ownerEmail'] ?? '').toString().trim();
    if (code.isEmpty || owner.isEmpty) return null;
    final rawThreads = map['threads'];
    final threads = rawThreads is List
        ? rawThreads.map((e) => e is Map ? NgmyAdvisorSyncThread.fromMap(Map<String, dynamic>.from(e)) : null).whereType<NgmyAdvisorSyncThread>().toList()
        : <NgmyAdvisorSyncThread>[];
    final exportedAt = DateTime.tryParse((map['exportedAt'] ?? '').toString()) ?? DateTime.now();
    return NgmyAdvisorSyncBundle(code: code, ownerEmail: owner, threads: threads, exportedAt: exportedAt);
  }
}

class NgmyCommunicateSyncService {
  static String _emailKey(String email) => email.toLowerCase().trim();

  static String _profileNameFromConfig(dynamic config, String id) {
    final raw = (config as dynamic).communicateProfiles;
    if (raw is List) {
      for (final e in raw) {
        if (e is Map && (e['id'] ?? '').toString() == id) {
          return (e['name'] ?? 'Advisor').toString();
        }
      }
    }
    return 'Advisor';
  }

  static String _profileRoleFromConfig(dynamic config, String id) {
    final raw = (config as dynamic).communicateProfiles;
    if (raw is List) {
      for (final e in raw) {
        if (e is Map && (e['id'] ?? '').toString() == id) {
          return (e['role'] ?? 'companion').toString();
        }
      }
    }
    return 'companion';
  }

  static Future<List<String>> profileIdsWithLocalChats(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final prefix = 'ngmy_communicate_chat_${key}_';
    final ids = <String>[];
    for (final k in prefs.getKeys()) {
      if (k.startsWith(prefix)) ids.add(k.substring(prefix.length));
    }
    return ids;
  }

  static Future<List<({String id, String name, int count})>> threadsSummary(String email, dynamic config) async {
    final ids = await profileIdsWithLocalChats(email);
    final rows = <({String id, String name, int count})>[];
    for (final id in ids) {
      final msgs = await NgmyCommunicateMemoryStore.load(email, id);
      if (msgs.isEmpty) continue;
      rows.add((id: id, name: _profileNameFromConfig(config, id), count: msgs.length));
    }
    rows.sort((a, b) => a.name.compareTo(b.name));
    return rows;
  }

  static Future<NgmyAdvisorSyncBundle?> buildExportBundle({
    required String email,
    required dynamic config,
    required bool isAdmin,
    String? onlyProfileId,
  }) async {
    if (email.trim().isEmpty) return null;
    String? code;
    if (!isAdmin) {
      if (!NgmyCommunicatePayments.hasActivePass(config, email)) return null;
      code = await NgmyCommunicateBackupCodes.ensureActiveCode(
        email,
        passUntil: NgmyCommunicatePayments.passExpiresAt(config, email),
      );
      if (code == null) return null;
    } else {
      code = 'ADMIN-LOCAL';
    }

    final ids = onlyProfileId != null && onlyProfileId.trim().isNotEmpty
        ? [onlyProfileId.trim()]
        : await profileIdsWithLocalChats(email);

    final threads = <NgmyAdvisorSyncThread>[];
    for (final id in ids) {
      final msgs = await NgmyCommunicateMemoryStore.loadAllForExport(email, id);
      if (msgs.isEmpty) continue;
      final partner = await NgmyCommunicateRelationshipStore.loadPartner(id);
      final langs = await NgmyTranslatorLanguageStore.load(email, id);
      threads.add(
        NgmyAdvisorSyncThread(
          profileId: id,
          profileName: _profileNameFromConfig(config, id),
          profileRole: _profileRoleFromConfig(config, id),
          messages: msgs,
          partner: partner,
          translatorLangs: langs,
        ),
      );
    }
    if (threads.isEmpty) return null;

    return NgmyAdvisorSyncBundle(
      code: code,
      ownerEmail: _emailKey(email),
      threads: threads,
      exportedAt: DateTime.now(),
    );
  }

  static Future<String?> exportToFile({
    required String email,
    required dynamic config,
    required bool isAdmin,
    String? onlyProfileId,
  }) async {
    final bundle = await buildExportBundle(email: email, config: config, isAdmin: isAdmin, onlyProfileId: onlyProfileId);
    if (bundle == null) return null;
    final slug = onlyProfileId != null ? bundle.threads.first.profileName : 'all-advisors';
    final safe = slug.replaceAll(RegExp(r'[^\w\-.]+'), '_').toLowerCase();
    final filename = 'ngmy-advisors-$safe-${bundle.code}.ngmy.json';
    return downloadNgmyAdvisorSyncJson(const JsonEncoder.withIndent('  ').convert(bundle.toMap()), filename);
  }

  static Future<({String qrPayload, String code, int usesRemaining})?> createQrRestorePayload({
    required String email,
    required dynamic config,
    required bool isAdmin,
    String? onlyProfileId,
  }) async {
    final bundle = await buildExportBundle(
      email: email,
      config: config,
      isAdmin: isAdmin,
      onlyProfileId: onlyProfileId,
    );
    if (bundle == null) return null;
    final stash = await NgmyCommunicateQrStash.createFromBundle(bundle, isAdmin: isAdmin);
    if (stash == null) return null;
    return (qrPayload: stash.qrPayload, code: bundle.code, usesRemaining: stash.usesRemaining);
  }

  static Future<({int threads, int messages})?> importBundle({
    required String email,
    required dynamic config,
    required bool isAdmin,
    required String raw,
  }) async {
    final bundle = await NgmyAdvisorSyncBundle.parseAsync(raw);
    if (bundle == null) return null;

    final fromQr = raw.trim().startsWith('$kNgmyAdvisorSyncQrPrefixV2|');
    final crossAccount = !isAdmin && _emailKey(bundle.ownerEmail) != _emailKey(email);
    if (!fromQr && crossAccount) {
      throw StateError('This backup belongs to another account.');
    }

    if (!fromQr) {
      final ok = await NgmyCommunicateBackupCodes.validateImportCode(
        email: email,
        code: bundle.code,
        isAdmin: isAdmin,
        config: config,
        ownerEmail: bundle.ownerEmail,
        recipientImport: crossAccount,
      );
      if (!ok) {
        if (crossAccount) {
          throw StateError('This backup expired or the sender\'s advisor pass is no longer active.');
        }
        throw StateError('Backup code is locked or expired. Renew your advisor pass to restore conversations.');
      }
    }

    var threadCount = 0;
    var messageCount = 0;
    for (final thread in bundle.threads) {
      if (thread.profileId.isEmpty || thread.messages.isEmpty) continue;
      await NgmyCommunicateMemoryStore.restoreMerged(email, thread.profileId, thread.messages);
      if (thread.partner != null) {
        final p = thread.partner!;
        await NgmyCommunicateRelationshipStore.setPartner(
          thread.profileId,
          email: (p['email'] ?? email).toString(),
          name: (p['name'] ?? '').toString(),
          status: (p['status'] ?? 'dating').toString(),
        );
      }
      if (thread.translatorLangs != null) {
        final langs = thread.translatorLangs!;
        await NgmyTranslatorLanguageStore.save(
          email,
          thread.profileId,
          native: langs['native'] ?? '',
          learning: langs['learning'] ?? '',
        );
      }
      threadCount += 1;
      messageCount += thread.messages.length;
    }
    if (threadCount == 0) return null;
    return (threads: threadCount, messages: messageCount);
  }

  static bool userCanSync(dynamic user, dynamic config) {
    if ((user as dynamic).isAdmin == true) return true;
    return NgmyCommunicatePayments.hasActivePass(config, ((user as dynamic).email as String?) ?? '');
  }
}
