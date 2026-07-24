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
    this.pinned = false,
    this.pinnedMs = 0,
  });

  final String receiverName;
  final String receiverPhone;
  final String receiverCountry;
  final int lastUsedMs;
  final bool pinned;
  final int pinnedMs;

  String get id => '${receiverName.trim().toLowerCase()}|${receiverPhone.trim()}|${receiverCountry.trim().toLowerCase()}';

  Map<String, dynamic> toMap() => {
        'receiverName': receiverName,
        'receiverPhone': receiverPhone,
        'receiverCountry': receiverCountry,
        'lastUsedMs': lastUsedMs,
        'pinned': pinned,
        'pinnedMs': pinnedMs,
      };

  factory NgmyHelpCenterSavedRecipient.fromMap(Map<String, dynamic> raw) {
    return NgmyHelpCenterSavedRecipient(
      receiverName: (raw['receiverName'] ?? '').toString(),
      receiverPhone: (raw['receiverPhone'] ?? '').toString(),
      receiverCountry: (raw['receiverCountry'] ?? '').toString(),
      lastUsedMs: raw['lastUsedMs'] is int ? raw['lastUsedMs'] as int : int.tryParse('${raw['lastUsedMs']}') ?? 0,
      pinned: raw['pinned'] == true,
      pinnedMs: raw['pinnedMs'] is int ? raw['pinnedMs'] as int : int.tryParse('${raw['pinnedMs']}') ?? 0,
    );
  }

  NgmyHelpCenterSavedRecipient copyWith({
    String? receiverName,
    String? receiverPhone,
    String? receiverCountry,
    int? lastUsedMs,
    bool? pinned,
    int? pinnedMs,
  }) {
    return NgmyHelpCenterSavedRecipient(
      receiverName: receiverName ?? this.receiverName,
      receiverPhone: receiverPhone ?? this.receiverPhone,
      receiverCountry: receiverCountry ?? this.receiverCountry,
      lastUsedMs: lastUsedMs ?? this.lastUsedMs,
      pinned: pinned ?? this.pinned,
      pinnedMs: pinnedMs ?? this.pinnedMs,
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
      ..sort((a, b) {
        if (a.pinned != b.pinned) return a.pinned ? -1 : 1;
        if (a.pinned && b.pinned) return b.pinnedMs.compareTo(a.pinnedMs);
        return b.lastUsedMs.compareTo(a.lastUsedMs);
      });
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

  try {
    final prefs = await SharedPreferences.getInstance();
    final existing = await ngmyLoadHelpCenterSavedRecipients();
    NgmyHelpCenterSavedRecipient? priorEntry;
    for (final e in existing) {
      if (e.receiverName.trim().toLowerCase() == name.toLowerCase() &&
          e.receiverPhone.trim() == phone &&
          e.receiverCountry.trim().toLowerCase() == country.toLowerCase()) {
        priorEntry = e;
        break;
      }
    }

    final entry = NgmyHelpCenterSavedRecipient(
      receiverName: name,
      receiverPhone: phone,
      receiverCountry: country,
      lastUsedMs: DateTime.now().millisecondsSinceEpoch,
      pinned: priorEntry?.pinned ?? false,
      pinnedMs: priorEntry?.pinnedMs ?? 0,
    );

    final next = <NgmyHelpCenterSavedRecipient>[
      entry,
      ...existing.where((e) => e.id != entry.id),
    ];
    if (next.length > kNgmyHelpCenterSavedRecipientsMax) {
      final unpinned = next.where((e) => !e.pinned).toList();
      final pinned = next.where((e) => e.pinned).toList();
      while (pinned.length + unpinned.length > kNgmyHelpCenterSavedRecipientsMax && unpinned.isNotEmpty) {
        unpinned.removeLast();
      }
      next
        ..clear()
        ..addAll(pinned)
        ..addAll(unpinned);
    }
    await prefs.setString(
      kNgmyHelpCenterSavedRecipientsKey,
      jsonEncode(next.map((e) => e.toMap()).toList()),
    );
  } catch (_) {}
}

Future<void> ngmyPersistHelpCenterSavedRecipients(List<NgmyHelpCenterSavedRecipient> list) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      kNgmyHelpCenterSavedRecipientsKey,
      jsonEncode(list.map((e) => e.toMap()).toList()),
    );
  } catch (_) {}
}

Future<void> ngmyDeleteHelpCenterSavedRecipient(String id) async {
  final existing = await ngmyLoadHelpCenterSavedRecipients();
  await ngmyPersistHelpCenterSavedRecipients(existing.where((e) => e.id != id).toList());
}

Future<void> ngmyToggleHelpCenterSavedRecipientPin(String id) async {
  final existing = await ngmyLoadHelpCenterSavedRecipients();
  final next = existing.map((e) {
    if (e.id != id) return e;
    final pin = !e.pinned;
    return e.copyWith(pinned: pin, pinnedMs: pin ? DateTime.now().millisecondsSinceEpoch : 0);
  }).toList();
  await ngmyPersistHelpCenterSavedRecipients(next);
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
