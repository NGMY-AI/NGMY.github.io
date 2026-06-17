import 'dart:convert';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_phone_contacts_device_stub.dart'
    if (dart.library.io) 'ngmy_phone_contacts_device_io.dart' as device;

/// A person NGMY Helper can call or message by name.
class NgmyPhoneContact {
  final String id;
  final String name;
  final List<String> phones;
  final String source;

  const NgmyPhoneContact({
    required this.id,
    required this.name,
    required this.phones,
    this.source = 'local',
  });

  String get primaryPhone => phones.isNotEmpty ? phones.first : '';

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'phones': phones,
        'source': source,
      };

  factory NgmyPhoneContact.fromJson(Map<String, dynamic> json) {
    final phonesRaw = json['phones'];
    final phones = <String>[];
    if (phonesRaw is List) {
      for (final p in phonesRaw) {
        final s = p.toString().trim();
        if (s.isNotEmpty) phones.add(s);
      }
    }
    return NgmyPhoneContact(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString().trim(),
      phones: phones,
      source: (json['source'] ?? 'local').toString(),
    );
  }
}

class NgmyPhoneContactsStore {
  static const _keyPrefix = 'ngmy_phone_contacts_v1_';

  static String _key(String email) => '$_keyPrefix${email.toLowerCase().trim()}';

  static Future<List<NgmyPhoneContact>> load(String email) async {
    if (email.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email));
    if (raw == null || raw.isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      return decoded
          .whereType<Map>()
          .map((m) => NgmyPhoneContact.fromJson(Map<String, dynamic>.from(m)))
          .where((c) => c.name.isNotEmpty && c.phones.isNotEmpty)
          .toList();
    } catch (e) {
      debugPrint('[contacts] load error: $e');
      return [];
    }
  }

  static Future<void> save(String email, List<NgmyPhoneContact> contacts) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    final encoded = jsonEncode(contacts.map((c) => c.toJson()).toList());
    await prefs.setString(_key(email), encoded);
  }

  static Future<List<NgmyPhoneContact>> ensureHydrated(
    String email, {
    List<Map<String, dynamic>> ngmyUsers = const [],
  }) async {
    var list = await load(email);
    if (list.isEmpty && ngmyUsers.isNotEmpty) {
      list = mergeNgmyUsers(list, ngmyUsers);
      await save(email, list);
    }
    return list;
  }

  static List<NgmyPhoneContact> mergeNgmyUsers(
    List<NgmyPhoneContact> existing,
    List<Map<String, dynamic>> ngmyUsers,
  ) {
    final byKey = <String, NgmyPhoneContact>{};
    for (final c in existing) {
      byKey[_nameKey(c.name)] = c;
    }
    for (final u in ngmyUsers) {
      final phone = (u['phone'] ?? '').toString().trim();
      if (phone.isEmpty) continue;
      final name = (u['fullName'] ?? u['username'] ?? u['email'] ?? '').toString().trim();
      if (name.isEmpty) continue;
      final key = _nameKey(name);
      if (byKey.containsKey(key)) continue;
      byKey[key] = NgmyPhoneContact(
        id: 'ngmy_${(u['email'] ?? name).toString().hashCode}',
        name: name,
        phones: [phone],
        source: 'ngmy',
      );
    }
    return byKey.values.toList()..sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
  }

  static String _nameKey(String name) => name.toLowerCase().replaceAll(RegExp(r'\s+'), ' ').trim();

  static int _score(String query, NgmyPhoneContact c) {
    final q = _nameKey(query);
    final n = _nameKey(c.name);
    if (n == q) return 100;
    if (n.startsWith(q)) return 80;
    final parts = n.split(' ');
    if (parts.any((p) => p == q)) return 75;
    if (n.contains(q)) return 60;
    if (q.contains(n)) return 50;
    return 0;
  }

  static List<NgmyPhoneContact> search(List<NgmyPhoneContact> all, String query) {
    final q = query.trim();
    if (q.isEmpty) return [];
    final scored = <({NgmyPhoneContact c, int s})>[];
    for (final c in all) {
      final s = _score(q, c);
      if (s > 0) scored.add((c: c, s: s));
    }
    scored.sort((a, b) => b.s.compareTo(a.s));
    return scored.map((e) => e.c).toList();
  }

  static String directoryForAi(List<NgmyPhoneContact> contacts, {int max = 80}) {
    if (contacts.isEmpty) {
      return 'PHONE CONTACTS: linked on this device — use "name" field when calling or texting.';
    }
    final buf = StringBuffer('PHONE CONTACTS (use "name" field — never guess phone numbers):\n');
    for (final c in contacts.take(max)) {
      buf.writeln('- ${c.name}');
    }
    if (contacts.length > max) buf.writeln('… and ${contacts.length - max} more');
    return buf.toString().trim();
  }

  static Future<int> syncFromDevice(String email) async {
    if (kIsWeb) return 0;
    final rows = await device.ngmyLoadDeviceContactsForStore();
    if (rows.isEmpty) return 0;
    final imported = rows.map((m) => NgmyPhoneContact.fromJson(m)).toList();
    final existing = await load(email);
    final merged = <String, NgmyPhoneContact>{};
    for (final c in existing) {
      merged[_nameKey(c.name)] = c;
    }
    for (final c in imported) {
      merged[_nameKey(c.name)] = c;
    }
    final list = merged.values.toList()..sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
    await save(email, list);
    return imported.length;
  }

  static List<NgmyPhoneContact> parseVcf(String vcf) {
    final out = <NgmyPhoneContact>[];
    final blocks = vcf.split(RegExp(r'BEGIN:VCARD', caseSensitive: false));
    for (final block in blocks) {
      if (!block.contains('END:VCARD')) continue;
      String? name;
      final phones = <String>[];
      for (final line in block.split('\n')) {
        final trimmed = line.trim();
        if (trimmed.toUpperCase().startsWith('FN:')) {
          name = trimmed.substring(3).trim();
        } else if (trimmed.toUpperCase().startsWith('N:') && (name == null || name.isEmpty)) {
          final parts = trimmed.substring(2).split(';');
          name = parts.reversed.where((p) => p.trim().isNotEmpty).join(' ').trim();
        } else if (RegExp(r'^TEL', caseSensitive: false).hasMatch(trimmed)) {
          final idx = trimmed.indexOf(':');
          if (idx >= 0) {
            final phone = trimmed.substring(idx + 1).trim();
            if (phone.replaceAll(RegExp(r'[^\d]'), '').length >= 7) phones.add(phone);
          }
        }
      }
      if (name != null && name.isNotEmpty && phones.isNotEmpty) {
        out.add(NgmyPhoneContact(
          id: 'vcf_${name.hashCode}_${phones.first.hashCode}',
          name: name,
          phones: phones,
          source: 'import',
        ));
      }
    }
    return out;
  }

  static Future<int> importVcfFile(String email) async {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['vcf', 'vcard'],
      withData: true,
    );
    if (result == null || result.files.isEmpty) return 0;
    final file = result.files.first;
    final bytes = file.bytes;
    if (bytes == null || bytes.isEmpty) return 0;
    final text = utf8.decode(bytes, allowMalformed: true);
    final parsed = parseVcf(text);
    if (parsed.isEmpty) return 0;
    final existing = await load(email);
    final merged = <String, NgmyPhoneContact>{};
    for (final c in existing) {
      merged[_nameKey(c.name)] = c;
    }
    for (final c in parsed) {
      merged[_nameKey(c.name)] = c;
    }
    final list = merged.values.toList()..sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
    await save(email, list);
    return parsed.length;
  }

  static Future<void> addManual(String email, {required String name, required String phone}) async {
    final n = name.trim();
    final p = phone.trim();
    if (n.isEmpty || p.isEmpty) return;
    final existing = await load(email);
    final list = List<NgmyPhoneContact>.from(existing);
    list.removeWhere((c) => _nameKey(c.name) == _nameKey(n));
    list.add(NgmyPhoneContact(
      id: 'manual_${DateTime.now().microsecondsSinceEpoch}',
      name: n,
      phones: [p],
      source: 'manual',
    ));
    list.sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
    await save(email, list);
  }
}
