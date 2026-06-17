import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_phone_contacts.dart';
import 'ngmy_phone_integrations.dart';

NgmyPhoneAction ngmyPhoneActionWithContact(NgmyPhoneAction action, NgmyPhoneContact contact) {
  final fields = Map<String, String>.from(action.fields);
  fields['phone'] = contact.primaryPhone;
  fields['contactName'] = contact.name;
  return NgmyPhoneAction(type: action.type, fields: fields);
}

bool ngmyPhoneActionNeedsPhone(NgmyPhoneAction action) {
  return action.type == 'call' || action.type == 'sms' || action.type == 'whatsapp';
}

Future<List<NgmyPhoneContact>> ngmyResolveContactsForName(
  String email,
  String name, {
  List<Map<String, dynamic>> ngmyUsers = const [],
}) async {
  final all = await NgmyPhoneContactsStore.ensureHydrated(email, ngmyUsers: ngmyUsers);
  return NgmyPhoneContactsStore.search(all, name);
}

Future<NgmyPhoneContact?> ngmyAutoPickContact(List<NgmyPhoneContact> matches) async {
  if (matches.isEmpty) return null;
  return matches.first;
}

Future<List<NgmyPhoneContact>> _contactsForResolve(
  String userEmail, {
  List<Map<String, dynamic>> ngmyUsers = const [],
  bool forceDeviceSync = false,
}) async {
  await NgmyPhoneContactsStore.ensureHydrated(userEmail, ngmyUsers: ngmyUsers);
  if (!kIsWeb && forceDeviceSync) {
    await NgmyPhoneContactsStore.syncFromDevice(userEmail);
  }
  return NgmyPhoneContactsStore.load(userEmail);
}

Future<List<NgmyPhoneAction>> ngmyResolvePhoneActionsByName({
  required BuildContext context,
  required String userEmail,
  required List<NgmyPhoneAction> actions,
  List<Map<String, dynamic>> ngmyUsers = const [],
}) async {
  var all = await _contactsForResolve(userEmail, ngmyUsers: ngmyUsers, forceDeviceSync: true);
  final out = <NgmyPhoneAction>[];
  for (final action in actions) {
    if (!ngmyPhoneActionNeedsPhone(action)) {
      out.add(action);
      continue;
    }
    final phone = (action.fields['phone'] ?? '').trim();
    final name = (action.fields['name'] ?? action.fields['contact'] ?? '').trim();
    if (phone.isNotEmpty) {
      out.add(action);
      continue;
    }
    if (name.isEmpty) {
      out.add(action);
      continue;
    }
    var matches = NgmyPhoneContactsStore.search(all, name);
    if (matches.isEmpty) {
      all = await _contactsForResolve(userEmail, ngmyUsers: ngmyUsers, forceDeviceSync: true);
      matches = NgmyPhoneContactsStore.search(all, name);
    }
    final picked = await ngmyAutoPickContact(matches);
    if (picked != null) {
      out.add(ngmyPhoneActionWithContact(action, picked));
    } else {
      out.add(action);
    }
  }
  return out;
}

List<Map<String, dynamic>> ngmyUsersToContactMaps(List<dynamic> users) {
  return users.map((u) {
    if (u is Map) return Map<String, dynamic>.from(u);
    try {
      return Map<String, dynamic>.from((u as dynamic).toJson() as Map);
    } catch (_) {
      return <String, dynamic>{};
    }
  }).where((m) => m.isNotEmpty).toList();
}
