import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

const String _kSavedQrsKey = 'ngmy_saved_qrs_v1';

/// A QR code saved only on this device (never synced to Supabase).
class NgmySavedQrRecord {
  final String id;
  final String label;
  final int typeIndex;
  final String typeLabel;
  final String payload;
  final String savedAt;

  const NgmySavedQrRecord({
    required this.id,
    required this.label,
    required this.typeIndex,
    required this.typeLabel,
    required this.payload,
    required this.savedAt,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'label': label,
        'typeIndex': typeIndex,
        'typeLabel': typeLabel,
        'payload': payload,
        'savedAt': savedAt,
      };

  factory NgmySavedQrRecord.fromJson(Map<String, dynamic> json) {
    return NgmySavedQrRecord(
      id: (json['id'] ?? '').toString(),
      label: (json['label'] ?? 'Untitled').toString(),
      typeIndex: json['typeIndex'] is int ? json['typeIndex'] as int : int.tryParse('${json['typeIndex']}') ?? 0,
      typeLabel: (json['typeLabel'] ?? 'QR').toString(),
      payload: (json['payload'] ?? '').toString(),
      savedAt: (json['savedAt'] ?? '').toString(),
    );
  }
}

Future<List<NgmySavedQrRecord>> loadNgmySavedQrs() async {
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
  final list = await loadNgmySavedQrs();
  list.insert(0, record);
  await persistNgmySavedQrs(list);
  return record;
}

Future<void> deleteNgmySavedQr(String id) async {
  final list = await loadNgmySavedQrs();
  list.removeWhere((r) => r.id == id);
  await persistNgmySavedQrs(list);
}
