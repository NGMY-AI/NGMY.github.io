import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_communicate_sync.dart';
import 'ngmy_family_tree_sync.dart';
import 'ngmy_network_resilience.dart';

/// Saved restore QR codes from NGMY Advisors or Family Tree (one slot each per user).
enum NgmySyncQrSource {
  advisor,
  familyTree,
}

extension NgmySyncQrSourceX on NgmySyncQrSource {
  String get storageKey => this == NgmySyncQrSource.advisor ? 'advisor' : 'family_tree';

  String get displayLabel =>
      this == NgmySyncQrSource.advisor ? 'NGMY Advisors' : 'NGMY Family Tree';

  String get shortLabel =>
      this == NgmySyncQrSource.advisor ? 'Advisors sync' : 'Family tree sync';
}

class NgmySavedSyncQrRecord {
  const NgmySavedSyncQrRecord({
    required this.source,
    required this.qrPayload,
    required this.stashToken,
    required this.backupCode,
    required this.usesRemaining,
    required this.savedAt,
  });

  final NgmySyncQrSource source;
  final String qrPayload;
  final String stashToken;
  final String backupCode;
  final int usesRemaining;
  final String savedAt;

  String get label => source.displayLabel;

  Map<String, dynamic> toJson() => {
        'source': source.storageKey,
        'qrPayload': qrPayload,
        'stashToken': stashToken,
        'backupCode': backupCode,
        'usesRemaining': usesRemaining,
        'savedAt': savedAt,
        'label': label,
      };

  factory NgmySavedSyncQrRecord.fromJson(Map<String, dynamic> json) {
    final sourceKey = (json['source'] ?? '').toString();
    final source = sourceKey == 'family_tree' ? NgmySyncQrSource.familyTree : NgmySyncQrSource.advisor;
    return NgmySavedSyncQrRecord(
      source: source,
      qrPayload: (json['qrPayload'] ?? '').toString(),
      stashToken: (json['stashToken'] ?? '').toString(),
      backupCode: (json['backupCode'] ?? '').toString(),
      usesRemaining: (json['usesRemaining'] as num?)?.toInt() ?? 0,
      savedAt: (json['savedAt'] ?? '').toString(),
    );
  }

  NgmySavedSyncQrRecord copyWith({int? usesRemaining}) => NgmySavedSyncQrRecord(
        source: source,
        qrPayload: qrPayload,
        stashToken: stashToken,
        backupCode: backupCode,
        usesRemaining: usesRemaining ?? this.usesRemaining,
        savedAt: savedAt,
      );
}

/// Per-user saved sync QRs in Supabase (`ngmy_settings`).
class NgmySyncQrSavedStore {
  static const _settingsKey = 'ngmy_user_saved_sync_qrs_v1';

  static String _norm(String email) => email.toLowerCase().trim();

  static Future<Map<String, dynamic>> _loadRoot() async {
    if (!await ngmyCanReachCloud()) return {'byEmail': <String, dynamic>{}};
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _settingsKey).maybeSingle();
      if (row == null) return {'byEmail': <String, dynamic>{}};
      final value = row['value'];
      if (value is! Map) return {'byEmail': <String, dynamic>{}};
      final byEmail = value['byEmail'];
      if (byEmail is Map) {
        return {'byEmail': Map<String, dynamic>.from(byEmail)};
      }
    } catch (e) {
      debugPrint('[sync qr saved] load: $e');
    }
    return {'byEmail': <String, dynamic>{}};
  }

  static Future<void> _saveRoot(Map<String, dynamic> root) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _settingsKey,
          'value': {
            'byEmail': root['byEmail'] ?? {},
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
    } catch (e) {
      debugPrint('[sync qr saved] save: $e');
      rethrow;
    }
  }

  static Map<String, dynamic>? _userMap(Map<String, dynamic> root, String email) {
    final key = _norm(email);
    if (key.isEmpty) return null;
    final byEmail = root['byEmail'];
    if (byEmail is! Map) return null;
    final user = byEmail[key];
    if (user is Map) return Map<String, dynamic>.from(user);
    return null;
  }

  static Future<List<NgmySavedSyncQrRecord>> loadForUser(String email) async {
    final root = await _loadRoot();
    final user = _userMap(root, email);
    if (user == null) return [];
    final out = <NgmySavedSyncQrRecord>[];
    for (final source in NgmySyncQrSource.values) {
      final raw = user[source.storageKey];
      if (raw is Map) {
        final rec = NgmySavedSyncQrRecord.fromJson(Map<String, dynamic>.from(raw));
        if (rec.qrPayload.isNotEmpty) {
          final liveUses = await _liveUsesRemaining(rec);
          out.add(rec.copyWith(usesRemaining: liveUses ?? rec.usesRemaining));
        }
      }
    }
    out.sort((a, b) => a.source.index.compareTo(b.source.index));
    return out;
  }

  static Future<NgmySavedSyncQrRecord?> loadOne(String email, NgmySyncQrSource source) async {
    final all = await loadForUser(email);
    for (final r in all) {
      if (r.source == source) return r;
    }
    return null;
  }

  static Future<bool> hasSaved(String email, NgmySyncQrSource source) async {
    final one = await loadOne(email, source);
    return one != null;
  }

  static Future<void> save({
    required String email,
    required NgmySyncQrSource source,
    required String qrPayload,
    required String stashToken,
    required String backupCode,
    required int usesRemaining,
  }) async {
    final key = _norm(email);
    if (key.isEmpty) throw StateError('Sign in to save a sync QR code.');
    if (qrPayload.trim().isEmpty || stashToken.trim().isEmpty) {
      throw StateError('Invalid QR code.');
    }

    final root = await _loadRoot();
    final byEmail = Map<String, dynamic>.from((root['byEmail'] as Map?) ?? {});
    final user = Map<String, dynamic>.from(_userMap(root, email) ?? {});
    if (user.containsKey(source.storageKey)) {
      throw StateError(
        'You already saved a ${source.displayLabel} QR. '
        'Open QR Code Generator → Saved and delete it before saving a new one.',
      );
    }

    user[source.storageKey] = NgmySavedSyncQrRecord(
      source: source,
      qrPayload: qrPayload.trim(),
      stashToken: stashToken.trim(),
      backupCode: backupCode.trim(),
      usesRemaining: usesRemaining,
      savedAt: DateTime.now().toUtc().toIso8601String(),
    ).toJson();
    byEmail[key] = user;
    root['byEmail'] = byEmail;
    await _saveRoot(root);
  }

  static Future<void> delete(String email, NgmySyncQrSource source) async {
    final key = _norm(email);
    if (key.isEmpty) return;
    final root = await _loadRoot();
    final byEmail = Map<String, dynamic>.from((root['byEmail'] as Map?) ?? {});
    final user = Map<String, dynamic>.from(_userMap(root, email) ?? {});
    if (!user.containsKey(source.storageKey)) return;
    user.remove(source.storageKey);
    if (user.isEmpty) {
      byEmail.remove(key);
    } else {
      byEmail[key] = user;
    }
    root['byEmail'] = byEmail;
    await _saveRoot(root);
  }

  static String? extractStashToken(String qrPayload, NgmySyncQrSource source) {
    final trimmed = qrPayload.trim();
    final prefix = source == NgmySyncQrSource.advisor
        ? kNgmyAdvisorSyncQrPrefixV2
        : kNgmyFamilyTreeSyncQrPrefixV2;
    if (!trimmed.startsWith('$prefix|')) return null;
    final parts = trimmed.split('|');
    if (parts.length < 2) return null;
    final token = parts[1].trim();
    return token.isEmpty ? null : token;
  }

  static Future<int?> _liveUsesRemaining(NgmySavedSyncQrRecord record) async {
    if (record.stashToken.isEmpty) return null;
    if (record.source == NgmySyncQrSource.advisor) {
      return NgmyCommunicateQrStash.usesRemainingForToken(record.stashToken);
    }
    return NgmyFamilyTreeQrStash.usesRemainingForToken(record.stashToken);
  }
}
