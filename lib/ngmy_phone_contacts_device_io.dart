import 'package:flutter_contacts/flutter_contacts.dart';

Future<int> ngmySyncDevicePhoneContacts() async {
  final granted = await FlutterContacts.requestPermission(readonly: true);
  if (!granted) return 0;
  final raw = await FlutterContacts.getContacts(withProperties: true, withPhoto: false);
  return raw.length;
}

List<Map<String, dynamic>> ngmyReadDeviceContactsForStore() {
  return [];
}

Future<List<Map<String, dynamic>>> ngmyLoadDeviceContactsForStore() async {
  final granted = await FlutterContacts.requestPermission(readonly: true);
  if (!granted) return [];
  final raw = await FlutterContacts.getContacts(withProperties: true, withPhoto: false);
  final out = <Map<String, dynamic>>[];
  for (final c in raw) {
    final name = c.displayName.trim();
    if (name.isEmpty) continue;
    final phones = <String>[];
    for (final p in c.phones) {
      final digits = p.number.replaceAll(RegExp(r'[^\d+]'), '');
      if (digits.length >= 7) phones.add(p.number.trim());
    }
    if (phones.isEmpty) continue;
    out.add({
      'id': 'device_${c.id}',
      'name': name,
      'phones': phones,
      'source': 'device',
    });
  }
  return out;
}
