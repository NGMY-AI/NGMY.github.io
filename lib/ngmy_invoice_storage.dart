import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

const String kSavedInvoicesKey = 'saved_invoices_v1';

Future<void> cleanupExpiredPaidInvoices() async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(kSavedInvoicesKey);
  if (raw == null || raw.isEmpty) return;
  try {
    final now = DateTime.now();
    final decoded = (jsonDecode(raw) as List).cast<dynamic>();
    final keep = decoded.where((entry) {
      if (entry is! Map) return false;
      final paidAtRaw = entry['paidAt']?.toString();
      if (paidAtRaw == null || paidAtRaw.isEmpty) return true;
      final paidAt = DateTime.tryParse(paidAtRaw);
      if (paidAt == null) return true;
      return now.isBefore(paidAt.add(const Duration(days: 5)));
    }).toList();
    await prefs.setString(kSavedInvoicesKey, jsonEncode(keep));
  } catch (_) {}
}

Future<List<Map<String, dynamic>>> loadSavedInvoices() async {
  await cleanupExpiredPaidInvoices();
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(kSavedInvoicesKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .where((e) => (e['id'] ?? '').toString().isNotEmpty)
        .toList()
      ..sort((a, b) {
        final ad = DateTime.tryParse((a['createdAt'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
        final bd = DateTime.tryParse((b['createdAt'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
        return bd.compareTo(ad);
      });
  } catch (_) {
    return [];
  }
}

Future<void> persistSavedInvoices(List<Map<String, dynamic>> entries) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(kSavedInvoicesKey, jsonEncode(entries));
}

Future<void> addSavedInvoice(Map<String, dynamic> entry) async {
  final list = await loadSavedInvoices();
  list.insert(0, entry);
  await persistSavedInvoices(list);
}

Future<void> deleteSavedInvoice(String id) async {
  final list = await loadSavedInvoices();
  list.removeWhere((e) => (e['id'] ?? '').toString() == id);
  await persistSavedInvoices(list);
}

Future<int> savedInvoiceCount() async => (await loadSavedInvoices()).length;

const String _invoiceProviderKeyPrefix = 'invoice_provider_v1_';

String _invoiceProviderKey(String userEmail) =>
    '$_invoiceProviderKeyPrefix${userEmail.toLowerCase().trim().hashCode.abs()}';

Future<Map<String, String>> loadInvoiceProviderProfile(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_invoiceProviderKey(userEmail));
  if (raw == null || raw.isEmpty) return {};
  try {
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return {};
    return decoded.map((k, v) => MapEntry(k.toString(), v.toString()));
  } catch (_) {
    return {};
  }
}

Future<void> saveInvoiceProviderProfile(
  String userEmail,
  Map<String, String> profile,
) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_invoiceProviderKey(userEmail), jsonEncode(profile));
}
