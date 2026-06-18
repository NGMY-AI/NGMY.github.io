import 'dart:convert';
import 'dart:math';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_network_resilience.dart';

const String kNgmyDocShareQrPrefix = 'NGMYDOCSYNC1';
const String kNgmyDocShareBundleMarker = 'ngmyDocShareBundle';
const int kNgmyDocShareQrMaxUses = 99;
const String _kQrStashKey = 'ngmy_doc_share_qr_stashes_v1';

class NgmyDocShareSync {
  static String _norm(String email) => email.toLowerCase().trim();

  static String _safeStorageName(String name) =>
      name.replaceAll(RegExp(r'[^\w\-.]+'), '_').replaceAll(RegExp(r'_+'), '_');

  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'DS${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>> _loadStashes() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _kQrStashKey).maybeSingle();
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final stashes = value['stashes'];
      if (stashes is Map) return Map<String, dynamic>.from(stashes);
    } catch (e) {
      debugPrint('[doc share stash] load: $e');
    }
    return {};
  }

  static Future<void> _saveStashes(Map<String, dynamic> stashes) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kQrStashKey,
          'value': {
            'stashes': stashes,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
    } catch (e) {
      debugPrint('[doc share stash] save: $e');
    }
  }

  static Future<({String qrPayload, String token, int usesRemaining})?> createQrForItems({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (items.isEmpty || !await ngmyCanReachCloud()) return null;
    final token = _generateToken();
    final uploaded = <Map<String, dynamic>>[];

    for (final item in items) {
      final bytes = await NgmyDocShareStore.readBytes(ownerEmail, item);
      if (bytes == null || bytes.isEmpty) continue;
      final path = 'doc_share/$token/${item.id}_${_safeStorageName(item.name)}';
      try {
        await Supabase.instance.client.storage.from('media').uploadBinary(
              path,
              bytes,
              fileOptions: FileOptions(contentType: item.mime, upsert: true),
            );
        uploaded.add({
          'path': path,
          'name': item.name,
          'mime': item.mime,
          'sizeBytes': item.sizeBytes,
        });
      } catch (e) {
        debugPrint('[doc share upload] ${item.name}: $e');
      }
    }

    if (uploaded.isEmpty) return null;

    final stashes = await _loadStashes();
    stashes[token] = {
      'ownerEmail': _norm(ownerEmail),
      'files': uploaded,
      'usesRemaining': kNgmyDocShareQrMaxUses,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveStashes(stashes);
    return (
      qrPayload: '$kNgmyDocShareQrPrefix|$token',
      token: token,
      usesRemaining: kNgmyDocShareQrMaxUses,
    );
  }

  static Future<int?> usesRemaining(String token) async {
    final stashes = await _loadStashes();
    final row = stashes[token.trim()];
    if (row is! Map) return null;
    return (row['usesRemaining'] as num?)?.toInt();
  }

  static Future<List<NgmyDocShareItem>?> importFromQrToken({
    required String recipientEmail,
    required String token,
  }) async {
    final id = token.trim();
    if (id.isEmpty || !await ngmyCanReachCloud()) return null;
    final stashes = await _loadStashes();
    final row = stashes[id];
    if (row is! Map) return null;
    final uses = (row['usesRemaining'] as num?)?.toInt() ?? 0;
    if (uses <= 0) return null;

    final files = row['files'];
    if (files is! List || files.isEmpty) return null;
    final owner = (row['ownerEmail'] ?? '').toString();
    final imported = <NgmyDocShareItem>[];

    for (final raw in files) {
      if (raw is! Map) continue;
      final path = (raw['path'] ?? '').toString();
      final name = (raw['name'] ?? 'file').toString();
      final mime = (raw['mime'] ?? 'application/octet-stream').toString();
      if (path.isEmpty) continue;
      try {
        final bytes = await Supabase.instance.client.storage.from('media').download(path);
        final saved = await NgmyDocShareStore.addBytes(
          email: recipientEmail,
          name: name,
          mime: mime,
          bytes: Uint8List.fromList(bytes),
          fromSender: owner.isNotEmpty ? owner : null,
          note: 'Received via QR',
        );
        if (saved != null) imported.add(saved);
      } catch (e) {
        debugPrint('[doc share download] $name: $e');
      }
    }

    if (imported.isEmpty) return null;

    row['usesRemaining'] = uses - 1;
    stashes[id] = row;
    await _saveStashes(stashes);
    return imported;
  }

  static String? parseTokenFromScan(String raw) {
    final text = raw.trim();
    if (text.startsWith('$kNgmyDocShareQrPrefix|')) {
      return text.substring(kNgmyDocShareQrPrefix.length + 1).trim();
    }
    return null;
  }

  static Future<String> exportBundleFile({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    final files = <Map<String, dynamic>>[];
    for (final item in items) {
      final bytes = await NgmyDocShareStore.readBytes(ownerEmail, item);
      if (bytes == null || bytes.isEmpty) continue;
      files.add({
        'name': item.name,
        'mime': item.mime,
        'sizeBytes': item.sizeBytes,
        'data': base64Encode(bytes),
      });
    }
    return jsonEncode({
      'marker': kNgmyDocShareBundleMarker,
      'version': 1,
      'ownerEmail': _norm(ownerEmail),
      'exportedAt': DateTime.now().toUtc().toIso8601String(),
      'files': files,
    });
  }

  static Future<List<NgmyDocShareItem>?> importBundleText({
    required String recipientEmail,
    required String jsonText,
  }) async {
    try {
      final decoded = jsonDecode(jsonText);
      if (decoded is! Map) return null;
      if ((decoded['marker'] ?? '').toString() != kNgmyDocShareBundleMarker) return null;
      final files = decoded['files'];
      if (files is! List) return null;
      final owner = (decoded['ownerEmail'] ?? '').toString();
      final imported = <NgmyDocShareItem>[];
      for (final raw in files) {
        if (raw is! Map) continue;
        final name = (raw['name'] ?? 'file').toString();
        final mime = (raw['mime'] ?? 'application/octet-stream').toString();
        final data = (raw['data'] ?? '').toString();
        if (data.isEmpty) continue;
        final bytes = base64Decode(data);
        final saved = await NgmyDocShareStore.addBytes(
          email: recipientEmail,
          name: name,
          mime: mime,
          bytes: bytes,
          fromSender: owner.isNotEmpty ? owner : null,
          note: 'Imported from file',
        );
        if (saved != null) imported.add(saved);
      }
      return imported.isEmpty ? null : imported;
    } catch (e) {
      debugPrint('[doc share bundle] $e');
      return null;
    }
  }
}
