import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

const String kNgmyHelpCenterSenderInfoKey = 'ngmy_help_center_sender_info_v1';
const String kNgmyHelpCenterSavedRecipientsKey = 'ngmy_help_center_serving_locally_v1';
const String kNgmyHelpCenterReceiptTemplateKey = 'ngmy_help_center_receipt_template_v1';
const int kNgmyHelpCenterSavedRecipientsMax = 40;

/// Saved sender profile for Help Center Send Money receipts.
class NgmyHelpCenterSenderInfo {
  const NgmyHelpCenterSenderInfo({
    this.name = '',
    this.phone = '',
    this.email = '',
  });

  final String name;
  final String phone;
  final String email;

  Map<String, dynamic> toMap() => {
        'name': name,
        'phone': phone,
        'email': email,
      };

  factory NgmyHelpCenterSenderInfo.fromMap(Map<String, dynamic>? raw) {
    if (raw == null) return const NgmyHelpCenterSenderInfo();
    return NgmyHelpCenterSenderInfo(
      name: (raw['name'] ?? '').toString(),
      phone: (raw['phone'] ?? '').toString(),
      email: (raw['email'] ?? '').toString(),
    );
  }

  NgmyHelpCenterSenderInfo mergeWith({
    String? name,
    String? phone,
    String? email,
  }) {
    return NgmyHelpCenterSenderInfo(
      name: (name ?? this.name).trim(),
      phone: (phone ?? this.phone).trim(),
      email: (email ?? this.email).trim(),
    );
  }
}

/// Locally saved recipient for quick reuse.
class NgmyHelpCenterSavedRecipient {
  const NgmyHelpCenterSavedRecipient({
    required this.receiverName,
    required this.receiverPhone,
    required this.receiverCountry,
    this.lastUsedMs = 0,
  });

  final String receiverName;
  final String receiverPhone;
  final String receiverCountry;
  final int lastUsedMs;

  String get id => '${receiverName.trim().toLowerCase()}|${receiverPhone.trim()}|${receiverCountry.trim().toLowerCase()}';

  Map<String, dynamic> toMap() => {
        'receiverName': receiverName,
        'receiverPhone': receiverPhone,
        'receiverCountry': receiverCountry,
        'lastUsedMs': lastUsedMs,
      };

  factory NgmyHelpCenterSavedRecipient.fromMap(Map<String, dynamic> raw) {
    return NgmyHelpCenterSavedRecipient(
      receiverName: (raw['receiverName'] ?? '').toString(),
      receiverPhone: (raw['receiverPhone'] ?? '').toString(),
      receiverCountry: (raw['receiverCountry'] ?? '').toString(),
      lastUsedMs: raw['lastUsedMs'] is int ? raw['lastUsedMs'] as int : int.tryParse('${raw['lastUsedMs']}') ?? 0,
    );
  }
}

Future<NgmyHelpCenterSenderInfo> ngmyLoadHelpCenterSenderInfo() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(kNgmyHelpCenterSenderInfoKey);
    if (raw == null || raw.trim().isEmpty) return const NgmyHelpCenterSenderInfo();
    final decoded = jsonDecode(raw);
    if (decoded is Map) return NgmyHelpCenterSenderInfo.fromMap(Map<String, dynamic>.from(decoded));
  } catch (_) {}
  return const NgmyHelpCenterSenderInfo();
}

Future<void> ngmySaveHelpCenterSenderInfo(NgmyHelpCenterSenderInfo info) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kNgmyHelpCenterSenderInfoKey, jsonEncode(info.toMap()));
  } catch (_) {}
}

Future<List<NgmyHelpCenterSavedRecipient>> ngmyLoadHelpCenterSavedRecipients() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(kNgmyHelpCenterSavedRecipientsKey) ?? prefs.getString('ngmy_help_center_serving_locally_v1');
    if (raw == null || raw.trim().isEmpty) return const [];
    final decoded = jsonDecode(raw);
    if (decoded is! List) return const [];
    return decoded
        .whereType<Map>()
        .map((e) => NgmyHelpCenterSavedRecipient.fromMap(Map<String, dynamic>.from(e)))
        .where((e) => e.receiverName.trim().isNotEmpty && e.receiverPhone.trim().length >= 6)
        .toList()
      ..sort((a, b) => b.lastUsedMs.compareTo(a.lastUsedMs));
  } catch (_) {}
  return const [];
}

Future<void> ngmySaveHelpCenterSavedRecipient({
  required String receiverName,
  required String receiverPhone,
  required String receiverCountry,
}) async {
  final name = receiverName.trim();
  final phone = receiverPhone.trim();
  final country = receiverCountry.trim();
  if (name.isEmpty || phone.length < 6 || country.isEmpty) return;

  final entry = NgmyHelpCenterSavedRecipient(
    receiverName: name,
    receiverPhone: phone,
    receiverCountry: country,
    lastUsedMs: DateTime.now().millisecondsSinceEpoch,
  );

  try {
    final prefs = await SharedPreferences.getInstance();
    final existing = await ngmyLoadHelpCenterSavedRecipients();
    final next = <NgmyHelpCenterSavedRecipient>[
      entry,
      ...existing.where((e) => e.id != entry.id),
    ];
    if (next.length > kNgmyHelpCenterSavedRecipientsMax) {
      next.removeRange(kNgmyHelpCenterSavedRecipientsMax, next.length);
    }
    await prefs.setString(
      kNgmyHelpCenterSavedRecipientsKey,
      jsonEncode(next.map((e) => e.toMap()).toList()),
    );
  } catch (_) {}
}

Future<String> ngmyLoadHelpCenterReceiptTemplateId() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final id = prefs.getString(kNgmyHelpCenterReceiptTemplateKey);
    if (id != null && id.trim().isNotEmpty) return id.trim();
  } catch (_) {}
  return 'modern';
}

Future<void> ngmySaveHelpCenterReceiptTemplateId(String id) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kNgmyHelpCenterReceiptTemplateKey, id.trim());
  } catch (_) {}
}

@Deprecated('Use ngmyLoadHelpCenterSavedRecipients')
Future<List<NgmyHelpCenterSavedRecipient>> ngmyLoadHelpCenterServingLocally() => ngmyLoadHelpCenterSavedRecipients();

@Deprecated('Use ngmySaveHelpCenterSavedRecipient')
Future<void> ngmySaveHelpCenterServingLocallyEntry({
  required String receiverName,
  required String receiverPhone,
  required String receiverCountry,
}) =>
    ngmySaveHelpCenterSavedRecipient(
      receiverName: receiverName,
      receiverPhone: receiverPhone,
      receiverCountry: receiverCountry,
    );
