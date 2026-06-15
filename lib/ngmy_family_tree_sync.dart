import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_worksheets_storage.dart';

const String kNgmyFamilyTreeSyncMarker = 'ngmyFamilyTreeSync';
const int kNgmyFamilyTreeSyncVersion = 1;
const String kNgmyFamilyTreeSyncQrPrefixV2 = 'NGMYFTSYNC2';
const int kNgmyFamilyTreeSyncQrMaxUses = 2;
const String _kCloudSettingsKey = 'ngmy_family_tree_backup_codes_v1';
const String _kQrStashSettingsKey = 'ngmy_family_tree_qr_stashes_v1';

class NgmyFamilyTreeBackupCodes {
  static String _norm(String email) => email.toLowerCase().trim();

  static String _generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'FT${List.generate(8, (_) => chars[r.nextInt(chars.length)]).join()}';
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
      debugPrint('[family tree sync codes] load: $e');
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
      debugPrint('[family tree sync codes] save: $e');
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

  static Future<String?> ensureActiveCode(String email) async {
    if (email.trim().isEmpty) return null;
    final existing = await codeForEmail(email);
    if (existing != null) {
      final codes = await _loadCloudMap();
      final row = codes[existing];
      if (row is Map) {
        codes[existing] = {
          ...Map<String, dynamic>.from(row),
          'active': true,
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
    final can = await NgmyFamilyTreeSyncService.userCanSyncEmail(email, config);
    if (can) {
      await ensureActiveCode(email);
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

    if (!isRecipient && !await NgmyFamilyTreeSyncService.userCanSyncEmail(email, config)) return false;

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

class NgmyFamilyTreeQrStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'FT${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
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
      debugPrint('[family tree qr stash] load: $e');
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
      debugPrint('[family tree qr stash] save: $e');
    }
  }

  static Future<({String qrPayload, String token, int usesRemaining})?> createFromBundle(
    NgmyFamilyTreeSyncBundle bundle, {
    required bool isAdmin,
  }) async {
    if (!await ngmyCanReachCloud()) return null;
    final token = _generateToken();
    final stashes = await _loadStashes();
    stashes[token] = {
      'ownerEmail': bundle.ownerEmail,
      'code': bundle.code,
      'payload': base64Encode(utf8.encode(jsonEncode(bundle.toMap()))),
      'usesRemaining': isAdmin ? 999 : kNgmyFamilyTreeSyncQrMaxUses,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveStashes(stashes);
    final uses = isAdmin ? 999 : kNgmyFamilyTreeSyncQrMaxUses;
    return (
      qrPayload: '$kNgmyFamilyTreeSyncQrPrefixV2|$token',
      token: token,
      usesRemaining: uses,
    );
  }

  static Future<int?> usesRemainingForToken(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    final stashes = await _loadStashes();
    final row = stashes[id];
    if (row is! Map) return null;
    return (row['usesRemaining'] as num?)?.toInt();
  }

  static Future<NgmyFamilyTreeSyncBundle?> consumeToken(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    final stashes = await _loadStashes();
    final row = stashes[id];
    if (row is! Map) return null;
    final uses = (row['usesRemaining'] as num?)?.toInt() ?? 0;
    if (uses <= 0) return null;

    final ownerEmail = (row['ownerEmail'] ?? '').toString();
    final code = (row['code'] ?? '').toString();
    if (!await NgmyFamilyTreeBackupCodes.isBackupCodeActive(code, ownerEmail: ownerEmail)) {
      // Stash was issued when sender was valid — allow restore if payload exists.
      debugPrint('[family tree qr stash] owner code inactive; allowing stash restore');
    }

    final payloadRaw = (row['payload'] ?? '').toString();
    if (payloadRaw.isEmpty) return null;
    NgmyFamilyTreeSyncBundle? bundle;
    try {
      final jsonText = utf8.decode(base64Decode(payloadRaw));
      bundle = NgmyFamilyTreeSyncBundle.parse(jsonText);
    } catch (e) {
      debugPrint('[family tree qr stash] decode: $e');
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

class NgmyFamilyTreeSyncBundle {
  const NgmyFamilyTreeSyncBundle({
    required this.code,
    required this.ownerEmail,
    required this.trees,
    required this.exportedAt,
  });

  final String code;
  final String ownerEmail;
  final List<FamilyTree> trees;
  final DateTime exportedAt;

  Map<String, dynamic> toMap() => {
        'marker': kNgmyFamilyTreeSyncMarker,
        'version': kNgmyFamilyTreeSyncVersion,
        'code': code,
        'ownerEmail': ownerEmail,
        'exportedAt': exportedAt.toUtc().toIso8601String(),
        'trees': trees.map((t) => t.toJson()).toList(),
      };

  static NgmyFamilyTreeSyncBundle? parse(String raw) {
    try {
      final map = jsonDecode(raw);
      if (map is! Map) return null;
      if ((map['marker'] ?? '').toString() != kNgmyFamilyTreeSyncMarker) return null;
      return _fromMap(Map<String, dynamic>.from(map));
    } catch (e) {
      debugPrint('[family tree sync] parse: $e');
      return null;
    }
  }

  static Future<NgmyFamilyTreeSyncBundle?> parseAsync(String raw) async {
    final trimmed = raw.trim();
    if (trimmed.startsWith('$kNgmyFamilyTreeSyncQrPrefixV2|')) {
      final parts = trimmed.split('|');
      if (parts.length >= 2) {
        return NgmyFamilyTreeQrStash.consumeToken(parts[1]);
      }
      return null;
    }
    return parse(trimmed);
  }

  static NgmyFamilyTreeSyncBundle? _fromMap(Map<String, dynamic> map) {
    final code = (map['code'] ?? '').toString();
    final owner = (map['ownerEmail'] ?? '').toString();
    if (code.isEmpty || owner.isEmpty) return null;
    final rawTrees = map['trees'];
    final trees = rawTrees is List
        ? rawTrees
            .whereType<Map>()
            .map((e) => FamilyTree.fromJson(Map<String, dynamic>.from(e)))
            .where((t) => t.id.isNotEmpty)
            .toList()
        : <FamilyTree>[];
    final exportedAt = DateTime.tryParse((map['exportedAt'] ?? '').toString()) ?? DateTime.now();
    return NgmyFamilyTreeSyncBundle(code: code, ownerEmail: owner, trees: trees, exportedAt: exportedAt);
  }
}

class NgmyFamilyTreeSyncService {
  static String _emailKey(String email) => email.toLowerCase().trim();

  static Future<bool> userCanSyncEmail(String email, dynamic config) async {
    if (email.trim().isEmpty) return false;
    if (NgmyCommunicatePayments.hasActivePass(config, email)) return true;
    final trees = await loadFamilyTreesLocalOnly(email);
    return trees.isNotEmpty;
  }

  static bool userCanSync(dynamic user, dynamic config) {
    if ((user as dynamic).isAdmin == true) return true;
    final email = ((user as dynamic).email as String?) ?? '';
    if (email.isEmpty) return false;
    return NgmyCommunicatePayments.hasActivePass(config, email);
  }

  static Future<List<({String id, String name, int count})>> treesSummary(String email) async {
    final trees = await loadFamilyTreesLocalOnly(email);
    return trees
        .map((t) => (id: t.id, name: t.name, count: t.members.length))
        .toList()
      ..sort((a, b) => a.name.compareTo(b.name));
  }

  static Future<NgmyFamilyTreeSyncBundle?> buildExportBundle({
    required String email,
    required dynamic config,
    required bool isAdmin,
    String? onlyTreeId,
  }) async {
    if (email.trim().isEmpty) return null;
    if (!isAdmin && !await userCanSyncEmail(email, config)) return null;

    String? code;
    if (!isAdmin) {
      code = await NgmyFamilyTreeBackupCodes.ensureActiveCode(email);
      if (code == null) return null;
    } else {
      code = 'ADMIN-LOCAL';
    }

    var trees = await loadFamilyTreesLocalOnly(email);
    if (onlyTreeId != null && onlyTreeId.trim().isNotEmpty) {
      trees = trees.where((t) => t.id == onlyTreeId.trim()).toList();
    }
    if (trees.isEmpty) return null;

    trees = trees
        .map((t) => t.copyWith(ownerEmail: familyTreeOwnerEmail(t, email)))
        .toList();

    return NgmyFamilyTreeSyncBundle(
      code: code,
      ownerEmail: _emailKey(email),
      trees: trees,
      exportedAt: DateTime.now(),
    );
  }

  static Future<String?> exportToFile({
    required String email,
    required dynamic config,
    required bool isAdmin,
    String? onlyTreeId,
  }) async {
    final bundle = await buildExportBundle(
      email: email,
      config: config,
      isAdmin: isAdmin,
      onlyTreeId: onlyTreeId,
    );
    if (bundle == null) return null;
    final slug = onlyTreeId != null && bundle.trees.isNotEmpty
        ? bundle.trees.first.name
        : 'all-family-trees';
    final safe = slug.replaceAll(RegExp(r'[^\w\-.]+'), '_').toLowerCase();
    final filename = 'ngmy-family-trees-$safe-${bundle.code}.ngmy.json';
    return downloadNgmyAdvisorSyncJson(const JsonEncoder.withIndent('  ').convert(bundle.toMap()), filename);
  }

  static Future<({String qrPayload, String code, int usesRemaining})?> createQrRestorePayload({
    required String email,
    required dynamic config,
    required bool isAdmin,
    String? onlyTreeId,
  }) async {
    final bundle = await buildExportBundle(
      email: email,
      config: config,
      isAdmin: isAdmin,
      onlyTreeId: onlyTreeId,
    );
    if (bundle == null) return null;
    final stash = await NgmyFamilyTreeQrStash.createFromBundle(bundle, isAdmin: isAdmin);
    if (stash == null) return null;
    return (qrPayload: stash.qrPayload, code: bundle.code, usesRemaining: stash.usesRemaining);
  }

  static Future<({int trees, int members, bool viewOnly})?> importBundle({
    required String email,
    required dynamic config,
    required bool isAdmin,
    required String raw,
  }) async {
    final bundle = await NgmyFamilyTreeSyncBundle.parseAsync(raw);
    if (bundle == null) return null;

    final fromQr = raw.trim().startsWith('$kNgmyFamilyTreeSyncQrPrefixV2|');
    final crossAccount = _emailKey(bundle.ownerEmail) != _emailKey(email);

    if (!fromQr) {
      final ok = await NgmyFamilyTreeBackupCodes.validateImportCode(
        email: email,
        code: bundle.code,
        isAdmin: isAdmin,
        config: config,
        ownerEmail: bundle.ownerEmail,
        recipientImport: crossAccount,
      );
      if (!ok) {
        if (crossAccount) {
          throw StateError('This backup expired or the sender\'s tree is no longer available.');
        }
        throw StateError('Backup code is locked. Create a family tree or renew your advisor pass to restore.');
      }
    }

    var treeCount = 0;
    var memberCount = 0;
    final viewOnly = _emailKey(bundle.ownerEmail) != _emailKey(email);
    for (final tree in bundle.trees) {
      if (tree.id.isEmpty) continue;
      if (viewOnly) {
        await assertCanImportSharedFamilyTree(email, tree);
      }
      await restoreFamilyTreeMerged(
        email,
        tree,
        bundleOwnerEmail: bundle.ownerEmail,
      );
      treeCount += 1;
      memberCount += tree.members.length;
    }
    if (treeCount == 0) return null;
    return (trees: treeCount, members: memberCount, viewOnly: viewOnly);
  }
}
