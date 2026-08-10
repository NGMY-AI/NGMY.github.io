import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_sync_qr_saved.dart';

export 'ngmy_sync_qr_saved.dart' show NgmySyncQrSource, NgmySavedSyncQrRecord, NgmySyncQrSavedStore;

const String _kSavedQrsKey = 'ngmy_saved_qrs_v1';

/// A QR code saved on this device, or a cloud-sync restore QR (Advisors / Family Tree).
class NgmySavedQrRecord {
  final String id;
  final String label;
  final int typeIndex;
  final String typeLabel;
  final String payload;
  final String savedAt;
  /// Non-null for restore QRs saved from Advisors or Family Tree sync.
  final NgmySyncQrSourceKind? syncSource;
  final int? usesRemaining;

  const NgmySavedQrRecord({
    required this.id,
    required this.label,
    required this.typeIndex,
    required this.typeLabel,
    required this.payload,
    required this.savedAt,
    this.syncSource,
    this.usesRemaining,
  });

  bool get isSyncQr => syncSource != null;

  Map<String, dynamic> toJson() => {
        'id': id,
        'label': label,
        'typeIndex': typeIndex,
        'typeLabel': typeLabel,
        'payload': payload,
        'savedAt': savedAt,
        if (syncSource != null) 'syncSource': syncSource!.name,
        if (usesRemaining != null) 'usesRemaining': usesRemaining,
      };

  factory NgmySavedQrRecord.fromJson(Map<String, dynamic> json) {
    NgmySyncQrSourceKind? sync;
    final syncRaw = json['syncSource']?.toString();
    if (syncRaw == NgmySyncQrSourceKind.advisor.name) {
      sync = NgmySyncQrSourceKind.advisor;
    } else if (syncRaw == NgmySyncQrSourceKind.familyTree.name) {
      sync = NgmySyncQrSourceKind.familyTree;
    }
    return NgmySavedQrRecord(
      id: (json['id'] ?? '').toString(),
      label: (json['label'] ?? 'Untitled').toString(),
      typeIndex: json['typeIndex'] is int ? json['typeIndex'] as int : int.tryParse('${json['typeIndex']}') ?? 0,
      typeLabel: (json['typeLabel'] ?? 'QR').toString(),
      payload: (json['payload'] ?? '').toString(),
      savedAt: (json['savedAt'] ?? '').toString(),
      syncSource: sync,
      usesRemaining: (json['usesRemaining'] as num?)?.toInt(),
    );
  }

  factory NgmySavedQrRecord.fromSyncRecord(NgmySavedSyncQrRecord sync) {
    return NgmySavedQrRecord(
      id: 'sync_${sync.source.storageKey}',
      label: sync.label,
      typeIndex: -1,
      typeLabel: 'Saved from ${sync.source.displayLabel}',
      payload: sync.qrPayload,
      savedAt: sync.savedAt,
      syncSource: sync.source == NgmySyncQrSource.advisor
          ? NgmySyncQrSourceKind.advisor
          : NgmySyncQrSourceKind.familyTree,
      usesRemaining: sync.usesRemaining,
    );
  }
}

/// Matches cloud sync QR slots (not stored in SharedPreferences).
enum NgmySyncQrSourceKind { advisor, familyTree }

Future<List<NgmySavedQrRecord>> loadNgmySavedQrs({String? userEmail}) async {
  final local = await _loadLocalSavedQrs();
  if (userEmail == null || userEmail.trim().isEmpty) return local;
  try {
    final sync = await NgmySyncQrSavedStore.loadForUser(userEmail);
    final syncRecords = sync.map(NgmySavedQrRecord.fromSyncRecord).toList();
    return [...syncRecords, ...local];
  } catch (_) {
    return local;
  }
}

Future<List<NgmySavedQrRecord>> _loadLocalSavedQrs() async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_kSavedQrsKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => NgmySavedQrRecord.fromJson(Map<String, dynamic>.from(e)))
        .where((r) => r.id.isNotEmpty && r.payload.isNotEmpty)
        .toList();
  } catch (_) {
    return [];
  }
}

Future<void> persistNgmySavedQrs(List<NgmySavedQrRecord> records) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    _kSavedQrsKey,
    jsonEncode(records.map((e) => e.toJson()).toList()),
  );
}

Future<NgmySavedQrRecord> addNgmySavedQr(NgmySavedQrRecord record) async {
  final list = await _loadLocalSavedQrs();
  list.insert(0, record);
  await persistNgmySavedQrs(list);
  return record;
}

Future<void> deleteNgmySavedQr(String id, {String? userEmail}) async {
  if (id.startsWith('sync_')) {
    if (userEmail == null || userEmail.trim().isEmpty) return;
    if (id == 'sync_advisor') {
      await NgmySyncQrSavedStore.delete(userEmail, NgmySyncQrSource.advisor);
      return;
    }
    if (id == 'sync_family_tree') {
      await NgmySyncQrSavedStore.delete(userEmail, NgmySyncQrSource.familyTree);
      return;
    }
  }
  final list = await _loadLocalSavedQrs();
  list.removeWhere((r) => r.id == id);
  await persistNgmySavedQrs(list);
}

const String _kSavedQrTemplatesKey = 'ngmy_saved_qr_templates_v1';

/// A QR template composition saved on this device (like a saved QR).
class NgmySavedQrTemplateRecord {
  const NgmySavedQrTemplateRecord({
    required this.id,
    required this.label,
    required this.templateId,
    required this.templateName,
    required this.typeIndex,
    required this.typeLabel,
    required this.payload,
    required this.title,
    required this.body,
    required this.footer,
    required this.savedAt,
  });

  final String id;
  final String label;
  final String templateId;
  final String templateName;
  final int typeIndex;
  final String typeLabel;
  final String payload;
  final String title;
  final String body;
  final String footer;
  final String savedAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'label': label,
        'templateId': templateId,
        'templateName': templateName,
        'typeIndex': typeIndex,
        'typeLabel': typeLabel,
        'payload': payload,
        'title': title,
        'body': body,
        'footer': footer,
        'savedAt': savedAt,
      };

  factory NgmySavedQrTemplateRecord.fromJson(Map<String, dynamic> json) {
    return NgmySavedQrTemplateRecord(
      id: (json['id'] ?? '').toString(),
      label: (json['label'] ?? 'Untitled template').toString(),
      templateId: (json['templateId'] ?? '').toString(),
      templateName: (json['templateName'] ?? 'Template').toString(),
      typeIndex: json['typeIndex'] is int ? json['typeIndex'] as int : int.tryParse('${json['typeIndex']}') ?? 0,
      typeLabel: (json['typeLabel'] ?? 'QR').toString(),
      payload: (json['payload'] ?? '').toString(),
      title: (json['title'] ?? '').toString(),
      body: (json['body'] ?? '').toString(),
      footer: (json['footer'] ?? '').toString(),
      savedAt: (json['savedAt'] ?? '').toString(),
    );
  }
}

Future<List<NgmySavedQrTemplateRecord>> loadNgmySavedQrTemplates() async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_kSavedQrTemplatesKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => NgmySavedQrTemplateRecord.fromJson(Map<String, dynamic>.from(e)))
        .where((r) => r.id.isNotEmpty && r.payload.isNotEmpty && r.templateId.isNotEmpty)
        .toList();
  } catch (_) {
    return [];
  }
}

Future<void> persistNgmySavedQrTemplates(List<NgmySavedQrTemplateRecord> records) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    _kSavedQrTemplatesKey,
    jsonEncode(records.map((e) => e.toJson()).toList()),
  );
}

Future<NgmySavedQrTemplateRecord> addNgmySavedQrTemplate(NgmySavedQrTemplateRecord record) async {
  final list = await loadNgmySavedQrTemplates();
  list.insert(0, record);
  await persistNgmySavedQrTemplates(list);
  return record;
}

Future<void> deleteNgmySavedQrTemplate(String id) async {
  final list = await loadNgmySavedQrTemplates();
  list.removeWhere((r) => r.id == id);
  await persistNgmySavedQrTemplates(list);
}
