import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Civic Registry members — isolated from general app user profiles.
class NgmyCivicRegistryMembers {
  static const _prefsKey = 'ngmy_civic_registry_members_v1';
  static const cloudSettingsKey = 'civic_registry_members';

  static String emailKey(String email) => email.toLowerCase().trim();

  static List<Map<String, dynamic>> listFrom(dynamic config) {
    final raw = (config as dynamic).civicRegistryMembers;
    if (raw is! List) return [];
    return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
  }

  static void setList(dynamic config, List<Map<String, dynamic>> members) {
    (config as dynamic).civicRegistryMembers = members;
  }

  static Map<String, dynamic> buildRecord({
    required String email,
    required String fullName,
    required String dob,
    required String idType,
    required String homeAddress,
    required String phone,
    required String city,
    required String room,
    required String state,
    required String registryId,
    int familyMembers = 1,
    int helps = 0,
    int missed = 0,
    String? enrolledAt,
  }) {
    return {
      'email': emailKey(email),
      'fullName': fullName.trim(),
      'dob': dob.trim(),
      'idType': idType.trim(),
      'homeAddress': homeAddress.trim(),
      'phone': phone.trim(),
      'city': city.trim(),
      'room': room.trim(),
      'state': state.trim(),
      'registryId': registryId.trim(),
      'familyMembers': familyMembers < 1 ? 1 : familyMembers,
      'helps': helps,
      'missed': missed,
      'enrolledAt': enrolledAt ?? DateTime.now().toUtc().toIso8601String(),
    };
  }

  static void upsert(dynamic config, Map<String, dynamic> record) {
    final email = emailKey((record['email'] ?? '').toString());
    if (email.isEmpty) return;
    final members = listFrom(config);
    final next = Map<String, dynamic>.from(record)..['email'] = email;
    final idx = members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == email);
    if (idx >= 0) {
      final keep = members[idx];
      next['helps'] = next['helps'] ?? keep['helps'] ?? 0;
      next['missed'] = next['missed'] ?? keep['missed'] ?? 0;
      next['familyMembers'] = next['familyMembers'] ?? keep['familyMembers'] ?? 1;
      next['enrolledAt'] = keep['enrolledAt'] ?? next['enrolledAt'];
      next['passportGranted'] = next['passportGranted'] ?? keep['passportGranted'] ?? false;
      next['linkedAppEmail'] = (next['linkedAppEmail'] ?? keep['linkedAppEmail'] ?? '').toString();
      next['passportGrantedAt'] = keep['passportGrantedAt'] ?? next['passportGrantedAt'];
      next['idPhotoPath'] = (next['idPhotoPath'] ?? keep['idPhotoPath'] ?? '').toString();
      members[idx] = next;
    } else {
      members.add(next);
    }
    setList(config, members);
  }

  static bool passportGranted(Map<String, dynamic> member) => member['passportGranted'] == true;

  static String _phoneKey(String phone) => phone.replaceAll(RegExp(r'\D'), '');

  /// Email of an app account matching this civic record by email or phone.
  static String? findLinkableAppEmail(List<dynamic> allUsers, Map<String, dynamic> member) {
    final memberEmail = emailKey((member['email'] ?? '').toString());
    final memberPhone = _phoneKey((member['phone'] ?? '').toString());
    String? byPhone;
    for (final raw in allUsers) {
      final email = emailKey((raw.email ?? '').toString());
      final phone = _phoneKey((raw.phone ?? '').toString());
      if (email.isEmpty) continue;
      if (memberEmail.isNotEmpty && email == memberEmail) return email;
      if (memberPhone.length >= 7 && phone == memberPhone) byPhone ??= email;
    }
    return byPhone;
  }

  /// Civic passport visible to a logged-in app user (granted + email or phone match).
  static Map<String, dynamic>? passportForAppUser(
    dynamic config, {
    required String email,
    required String phone,
  }) {
    final userEmail = emailKey(email);
    final userPhone = _phoneKey(phone);
    for (final m in listFrom(config)) {
      if (!passportGranted(m)) continue;
      final linked = emailKey((m['linkedAppEmail'] ?? '').toString());
      if (linked.isNotEmpty && linked == userEmail) return m;
      final memberEmail = emailKey((m['email'] ?? '').toString());
      if (memberEmail.isNotEmpty && memberEmail == userEmail) return m;
      final memberPhone = _phoneKey((m['phone'] ?? '').toString());
      if (userPhone.length >= 7 && memberPhone.isNotEmpty && memberPhone == userPhone) return m;
    }
    return null;
  }

  static void grantPassport(dynamic config, String memberEmail, String linkedAppEmail) {
    final m = findByEmail(config, memberEmail);
    if (m == null) return;
    upsert(
      config,
      {
        ...m,
        'passportGranted': true,
        'linkedAppEmail': emailKey(linkedAppEmail),
        'passportGrantedAt': DateTime.now().toUtc().toIso8601String(),
      },
    );
  }

  static void revokePassport(dynamic config, String memberEmail) {
    final m = findByEmail(config, memberEmail);
    if (m == null) return;
    upsert(
      config,
      {
        ...m,
        'passportGranted': false,
        'linkedAppEmail': '',
        'passportGrantedAt': null,
      },
    );
  }

  static void removeByEmail(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return;
    final members = listFrom(config)..removeWhere((m) => emailKey((m['email'] ?? '').toString()) == key);
    setList(config, members);
  }

  static bool isEnrolled(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return false;
    return listFrom(config).any((m) => emailKey((m['email'] ?? '').toString()) == key);
  }

  static Map<String, dynamic>? findByEmail(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return null;
    for (final m in listFrom(config)) {
      if (emailKey((m['email'] ?? '').toString()) == key) return m;
    }
    return null;
  }

  static Map<String, dynamic>? findByRegistryId(dynamic config, String registryId) {
    final key = registryId.trim().toUpperCase();
    if (key.isEmpty) return null;
    for (final m in listFrom(config)) {
      if ((m['registryId'] ?? '').toString().trim().toUpperCase() == key) return m;
    }
    return null;
  }

  static Map<String, dynamic>? findDuplicateRecord({
    required dynamic config,
    required String fullName,
    required String dob,
    required String city,
    String? excludeEmail,
  }) {
    return findDuplicateInRecords(
      records: listFrom(config),
      fullName: fullName,
      dob: dob,
      city: city,
      excludeEmail: excludeEmail,
    );
  }

  static Map<String, dynamic>? findDuplicateInRecords({
    required List<Map<String, dynamic>> records,
    required String fullName,
    required String dob,
    required String city,
    String? excludeEmail,
  }) {
    final nameKey = fullName.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');
    if (nameKey.isEmpty) return null;
    final dobKey = RegExp(r'^\d{2}/\d{2}/\d{4}$').hasMatch(dob.trim()) ? dob.trim() : '';
    final cityKey = city.trim().toLowerCase();
    final exclude = excludeEmail?.toLowerCase().trim() ?? '';

    for (final m in records) {
      final email = emailKey((m['email'] ?? '').toString());
      if (exclude.isNotEmpty && email == exclude) continue;
      final existingName = (m['fullName'] ?? '').toString().trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');
      if (existingName != nameKey) continue;
      final existingDob = (m['dob'] ?? '').toString().trim();
      final existingCity = (m['city'] ?? '').toString().trim().toLowerCase();
      final nameAndDob = dobKey.isNotEmpty && existingDob.isNotEmpty && dobKey == existingDob;
      final nameAndCity = cityKey.isNotEmpty && existingCity.isNotEmpty && cityKey == existingCity;
      if (nameAndDob || nameAndCity) return m;
    }
    return null;
  }

  static String duplicateMessage(Map<String, dynamic> existing) {
    final name = (existing['fullName'] ?? '').toString();
    final id = (existing['registryId'] ?? '').toString().trim();
    final city = (existing['city'] ?? '').toString().trim();
    final dob = (existing['dob'] ?? '').toString().trim();
    final parts = <String>[if (name.isNotEmpty) name else 'Member'];
    if (id.isNotEmpty) parts.add('ID $id');
    if (dob.isNotEmpty) parts.add('DOB $dob');
    if (city.isNotEmpty) parts.add(city);
    return 'A member is already enrolled with matching name and city or date of birth: ${parts.join(' · ')}.';
  }

  static void syncFromFields(
    dynamic config, {
    required String email,
    required String fullName,
    required String dob,
    required String idType,
    required String homeAddress,
    required String phone,
    required String city,
    required String room,
    required String state,
    required String registryId,
    required int helps,
    required int missed,
    int? familyMembers,
  }) {
    final existing = findByEmail(config, email);
    final existingFamily = existing?['familyMembers'];
    final family = familyMembers ??
        (existingFamily is num ? existingFamily.toInt() : int.tryParse('${existingFamily ?? ''}') ?? 1);
    upsert(
      config,
      buildRecord(
        email: email,
        fullName: fullName,
        dob: dob,
        idType: idType,
        homeAddress: homeAddress,
        phone: phone,
        city: city,
        room: room,
        state: state,
        registryId: registryId,
        familyMembers: family,
        helps: helps,
        missed: missed,
        enrolledAt: existing?['enrolledAt']?.toString(),
      ),
    );
  }

  static void migrateFromLegacyUsers(dynamic config, List<dynamic> allUsers) {
    var changed = false;
    for (final u in allUsers) {
      if ((u as dynamic).isEnrolledInRegistry != true) continue;
      final email = emailKey((u as dynamic).email.toString());
      if (email.isEmpty || findByEmail(config, email) != null) continue;
      upsert(
        config,
        buildRecord(
          email: email,
          fullName: (u as dynamic).fullName?.toString() ?? (u as dynamic).username.toString(),
          dob: (u as dynamic).dob?.toString() ?? '',
          idType: (u as dynamic).idType?.toString() ?? '',
          homeAddress: (u as dynamic).homeAddress?.toString() ?? '',
          phone: (u as dynamic).phone.toString(),
          city: (u as dynamic).city?.toString() ?? '',
          room: (u as dynamic).room?.toString() ?? '',
          state: (u as dynamic).state.toString(),
          registryId: (u as dynamic).registryId?.toString() ?? '',
          helps: (u as dynamic).helps as int? ?? 0,
          missed: (u as dynamic).missed as int? ?? 0,
        ),
      );
      changed = true;
    }
    if (changed) debugPrint('[civic] migrated legacy enrolled users into civicRegistryMembers');
  }

  static Map<String, dynamic> payload(dynamic config) => {
        'members': listFrom(config),
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      };

  static void applyPayload(dynamic config, Map<String, dynamic> payload) {
    final remote = payload['members'];
    if (remote is! List) return;
    final remoteMembers = remote.map((e) => Map<String, dynamic>.from(e as Map)).toList();
    final local = listFrom(config);
    if (local.isEmpty) {
      setList(config, remoteMembers);
      return;
    }
    final merged = <String, Map<String, dynamic>>{};
    for (final m in remoteMembers) {
      final key = emailKey((m['email'] ?? '').toString());
      if (key.isNotEmpty) merged[key] = m;
    }
    for (final m in local) {
      final key = emailKey((m['email'] ?? '').toString());
      if (key.isNotEmpty) merged[key] = m;
    }
    setList(config, merged.values.toList());
  }

  static Future<void> saveLocalBackup(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey, jsonEncode(payload(config)));
    } catch (_) {}
  }

  static Future<void> hydrateLocal(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw == null || raw.isEmpty) return;
      final decoded = jsonDecode(raw);
      if (decoded is Map) applyPayload(config, Map<String, dynamic>.from(decoded));
    } catch (_) {}
  }
}
