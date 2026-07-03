import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_qr_stash.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_sync.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_supabase_multipart_relay.dart';

/// QR prefix — scan to send a document to this user's Doc Share inbox.
const String kNgmyDocShareMyCodeQrPrefix = 'NGMYDOCRCV';

/// Files larger than this use Supabase storage instead of settings bundle.
const int kNgmyMyCodeStorageThresholdBytes = 8 * 1024 * 1024;

String _lookupKey(String code) => 'ngmy_doc_share_my_code_lookup_v1_${code.trim().toUpperCase()}';

String _userKey(String email) => 'ngmy_doc_share_my_code_user_v1_${email.trim().toLowerCase()}';

String _inboxKey(String email) => 'ngmy_doc_share_inbox_v1_${email.trim().toLowerCase()}';

String _prefsKey(String email) => 'ngmy_doc_share_my_code_local_v1_${email.trim().toLowerCase()}';

/// Personal Doc Share receive code — 5 digits + 1 letter, unique per user.
class NgmyDocShareMyCode {
  static String? normalizeInput(String raw) {
    final t = raw.trim().toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
    if (!RegExp(r'^\d{5}[A-Z]$').hasMatch(t)) return null;
    return t;
  }

  static bool looksLikeMyCode(String raw) => normalizeInput(raw) != null;

  static bool isQrPayload(String raw) {
    final t = raw.trim().toUpperCase();
    return t.startsWith('$kNgmyDocShareMyCodeQrPrefix|') || t.startsWith('$kNgmyDocShareMyCodeQrPrefix:');
  }

  static String? parseQrPayload(String raw) {
    final t = raw.trim().toUpperCase();
    for (final sep in ['|', ':']) {
      final prefix = '$kNgmyDocShareMyCodeQrPrefix$sep';
      if (t.startsWith(prefix)) {
        return normalizeInput(t.substring(prefix.length));
      }
    }
    return null;
  }

  static String qrPayloadForCode(String code) {
    final normalized = normalizeInput(code);
    if (normalized == null) return '';
    return '$kNgmyDocShareMyCodeQrPrefix|$normalized';
  }

  static String _generateCode() {
    final r = Random.secure();
    final digits = List.generate(5, (_) => r.nextInt(10)).join();
    const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    return '$digits${letters[r.nextInt(letters.length)]}';
  }

  static Future<Map<String, dynamic>?> _loadSettingsRow(String key) async {
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', key)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is Map) return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[doc share my code] load $key: $e');
    }
    return null;
  }

  static Future<bool> _saveSettingsRow(String key, Map<String, dynamic> value) async {
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': key,
          'value': value,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      return true;
    } catch (e) {
      debugPrint('[doc share my code] save $key: $e');
      return false;
    }
  }

  /// Returns this user's permanent receive code (creates & registers if needed).
  static Future<String?> ensureMyCode(String ownerEmail) async {
    final email = ownerEmail.trim().toLowerCase();
    if (email.isEmpty) return null;

    final prefs = await SharedPreferences.getInstance();
    final cached = normalizeInput(prefs.getString(_prefsKey(email)) ?? '');
    if (cached != null) {
      final owner = await resolveRecipientEmail(cached);
      if (owner == email) return cached;
    }

    final userRow = await _loadSettingsRow(_userKey(email));
    final cloudCode = normalizeInput((userRow?['code'] ?? '').toString());
    if (cloudCode != null) {
      await prefs.setString(_prefsKey(email), cloudCode);
      return cloudCode;
    }

    for (var attempt = 0; attempt < 12; attempt++) {
      final code = _generateCode();
      final taken = await resolveRecipientEmail(code);
      if (taken != null) continue;

      final now = DateTime.now().toUtc().toIso8601String();
      final lookupOk = await _saveSettingsRow(_lookupKey(code), {
        'code': code,
        'ownerEmail': email,
        'createdAt': now,
      });
      final userOk = await _saveSettingsRow(_userKey(email), {
        'code': code,
        'ownerEmail': email,
        'createdAt': now,
      });
      if (lookupOk && userOk) {
        await prefs.setString(_prefsKey(email), code);
        return code;
      }
    }
    return null;
  }

  static Future<String?> resolveRecipientEmail(String rawCode) async {
    final code = normalizeInput(rawCode);
    if (code == null) return null;
    final row = await _loadSettingsRow(_lookupKey(code));
    final email = (row?['ownerEmail'] ?? '').toString().trim().toLowerCase();
    return email.isEmpty ? null : email;
  }

  static Future<bool> sendToRecipient({
    required String senderEmail,
    required String recipientCode,
    required List<NgmyDocShareItem> items,
    void Function(String status)? onStatus,
  }) async {
    if (items.isEmpty) return false;
    final code = normalizeInput(recipientCode);
    if (code == null) return false;

    final recipientEmail = await resolveRecipientEmail(code);
    if (recipientEmail == null) {
      onStatus?.call('Code not found. Check the 5 numbers and letter.');
      return false;
    }
    if (recipientEmail == senderEmail.trim().toLowerCase()) {
      onStatus?.call('That is your own code. Share it with others so they can send to you.');
      return false;
    }

    final totalBytes = items.fold<int>(0, (sum, i) => sum + i.sizeBytes);
    final useStorage = totalBytes > kNgmyMyCodeStorageThresholdBytes ||
        items.any((i) => i.sizeBytes > kNgmyMyCodeStorageThresholdBytes);

    if (useStorage) {
      return _sendViaStorage(
        senderEmail: senderEmail,
        recipientEmail: recipientEmail,
        code: code,
        items: items,
        onStatus: onStatus,
      );
    }

    onStatus?.call('Uploading to ${recipientEmail.split('@').first}…');
    final bundleJson = await NgmyDocShareSync.exportBundleFile(
      ownerEmail: senderEmail,
      items: items,
      deliveryVia: 'myCode',
    );

    try {
      final decoded = jsonDecode(bundleJson);
      if (decoded is Map) {
        final files = decoded['files'];
        if (files is! List || files.isEmpty || files.length != items.length) {
          onStatus?.call('Could not read file data. For large files use NGMY Transfer or try again.');
          return false;
        }
      }
    } catch (_) {
      onStatus?.call('Could not prepare files for sending.');
      return false;
    }

    if (bundleJson.length > kNgmyDocShareCloudStashMaxBytes) {
      onStatus?.call(
        'File too large for My Code (${(bundleJson.length / (1024 * 1024)).toStringAsFixed(1)} MB). Use NGMY Transfer for big videos.',
      );
      return false;
    }

    final stash = await NgmyDocShareQrStash.createFromBundleJson(
      ownerEmail: senderEmail,
      bundleJson: bundleJson,
      fileCount: items.length,
    );
    if (stash == null) {
      onStatus?.call('Could not upload. Check connection and try again.');
      return false;
    }

    final deliveryId = 'mc_${DateTime.now().millisecondsSinceEpoch}_${Random.secure().nextInt(9999)}';
    final ok = await _appendInboxDelivery(
      recipientEmail: recipientEmail,
      delivery: {
        'id': deliveryId,
        'type': 'stash',
        'stashToken': stash.token,
        'senderEmail': senderEmail.trim().toLowerCase(),
        'fileCount': items.length,
        'fileNames': items.map((e) => e.name).toList(),
        'createdAt': DateTime.now().toUtc().toIso8601String(),
        'status': 'pending',
      },
    );
    if (!ok) {
      onStatus?.call('Delivery failed. Try again.');
      return false;
    }
    onStatus?.call('Sent ${items.length} file(s) to My Code $code.');
    return true;
  }

  static Future<bool> _sendViaStorage({
    required String senderEmail,
    required String recipientEmail,
    required String code,
    required List<NgmyDocShareItem> items,
    void Function(String status)? onStatus,
  }) async {
    if (!await ngmyCanReachCloud()) {
      onStatus?.call('No internet. Large files need a connection to send via My Code.');
      return false;
    }

    final deliveryId = 'mc_${DateTime.now().millisecondsSinceEpoch}_${Random.secure().nextInt(9999)}';
    final sessionId = '${DateTime.now().microsecondsSinceEpoch}_${Random().nextInt(99999)}';
    final fileRows = <Map<String, dynamic>>[];
    final storagePaths = <String>[];

    for (final item in items) {
      onStatus?.call('Uploading ${item.name}…');
      final base = 'my-code-inbox/${recipientEmail.trim()}/$sessionId/${ngmySupabaseRelaySafeName(item.name)}';
      var partCount = 0;

      await for (final chunk in NgmyDocShareStore.readFileStream(senderEmail, item)) {
        if (chunk.isEmpty) continue;
        final partPath = '$base.part${partCount.toString().padLeft(5, '0')}';
        await Supabase.instance.client.storage.from(kNgmySupabaseRelayBucket).uploadBinary(
              partPath,
              chunk,
              fileOptions: FileOptions(upsert: true, contentType: item.mime),
            );
        storagePaths.add(partPath);
        partCount++;
      }

      if (partCount <= 0) {
        onStatus?.call('Could not read ${item.name}. Try NGMY Transfer.');
        await ngmySupabaseRemovePaths(storagePaths);
        return false;
      }

      fileRows.add({
        'name': item.name,
        'mime': item.mime,
        'sizeBytes': item.sizeBytes,
        'storageBase': base,
        'partCount': partCount,
      });
    }

    final ok = await _appendInboxDelivery(
      recipientEmail: recipientEmail,
      delivery: {
        'id': deliveryId,
        'type': 'storage',
        'senderEmail': senderEmail.trim().toLowerCase(),
        'fileCount': items.length,
        'fileNames': items.map((e) => e.name).toList(),
        'files': fileRows,
        'createdAt': DateTime.now().toUtc().toIso8601String(),
        'status': 'pending',
      },
    );

    if (!ok) {
      onStatus?.call('Delivery failed. Try again.');
      await ngmySupabaseRemovePaths(storagePaths);
      return false;
    }

    onStatus?.call('Sent ${items.length} large file(s) to My Code $code.');
    return true;
  }

  static Future<bool> _appendInboxDelivery({
    required String recipientEmail,
    required Map<String, dynamic> delivery,
  }) async {
    final key = _inboxKey(recipientEmail);
    final row = await _loadSettingsRow(key) ?? {'deliveries': <dynamic>[]};
    final list = (row['deliveries'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
    list.add(delivery);
    return _saveSettingsRow(key, {'deliveries': list});
  }

  /// Pull pending My Code deliveries into this user's Doc Share library.
  static Future<int> pullInbox({required String recipientEmail}) async {
    final email = recipientEmail.trim().toLowerCase();
    if (email.isEmpty) return 0;

    final row = await _loadSettingsRow(_inboxKey(email));
    if (row == null) return 0;

    final rawList = row['deliveries'];
    if (rawList is! List || rawList.isEmpty) return 0;

    var imported = 0;
    final updated = <Map<String, dynamic>>[];

    for (final raw in rawList) {
      if (raw is! Map) continue;
      final delivery = Map<String, dynamic>.from(raw);
      if ((delivery['status'] ?? '').toString() == 'done') {
        updated.add(delivery);
        continue;
      }

      final type = (delivery['type'] ?? 'stash').toString();

      if (type == 'storage') {
        final count = await _importStorageDelivery(recipientEmail: email, delivery: delivery);
        if (count > 0) {
          imported += count;
          delivery['status'] = 'done';
          delivery['deliveredAt'] = DateTime.now().toUtc().toIso8601String();
        }
        updated.add(delivery);
        continue;
      }

      final token = (delivery['stashToken'] ?? '').toString().trim();
      if (token.isEmpty) {
        updated.add(delivery);
        continue;
      }

      final jsonText = await NgmyDocShareQrStash.consumeToken(token);
      if (jsonText == null || jsonText.isEmpty) {
        updated.add(delivery);
        continue;
      }

      final items = await NgmyDocShareSync.importBundleText(
        recipientEmail: email,
        jsonText: jsonText,
      );
      if (items != null && items.isNotEmpty) {
        imported += items.length;
        delivery['status'] = 'done';
        delivery['deliveredAt'] = DateTime.now().toUtc().toIso8601String();
      }
      updated.add(delivery);
    }

    final pending = updated.where((d) => (d['status'] ?? '') != 'done').toList();
    final done = updated.where((d) => (d['status'] ?? '') == 'done').toList();
    final keep = [...pending, ...done.take(50)];

    await _saveSettingsRow(_inboxKey(email), {'deliveries': keep});
    return imported;
  }

  static Future<int> _importStorageDelivery({
    required String recipientEmail,
    required Map<String, dynamic> delivery,
  }) async {
    final files = delivery['files'];
    if (files is! List || files.isEmpty) return 0;

    final sender = (delivery['senderEmail'] ?? '').toString();
    var count = 0;
    final pathsToDelete = <String>[];

    for (final raw in files) {
      if (raw is! Map) continue;
      final name = (raw['name'] ?? 'file').toString();
      final mime = (raw['mime'] ?? 'application/octet-stream').toString();
      final base = (raw['storageBase'] ?? '').toString();
      final partCount = (raw['partCount'] as num?)?.toInt() ?? 0;
      if (base.isEmpty || partCount <= 0) continue;

      final partPaths = ngmySupabasePartPathsFor(base, partCount);
      pathsToDelete.addAll(partPaths);

      final saved = await ngmySupabaseDownloadToDocShare(
        recipientEmail: recipientEmail,
        name: name,
        mime: mime,
        ownerEmail: sender,
        storagePaths: partPaths,
        note: 'Received via My Code',
      );
      if (saved != null) count++;
    }

    if (count > 0) {
      await ngmySupabaseRemovePaths(pathsToDelete);
    }
    return count;
  }
}
