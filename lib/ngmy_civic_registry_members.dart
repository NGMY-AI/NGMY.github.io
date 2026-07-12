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

  static List<Map<String, dynamic>> removedFrom(dynamic config) {
    try {
      final raw = (config as dynamic).civicRegistryRemoved;
      if (raw is! List) return [];
      return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
    } catch (_) {
      return [];
    }
  }

  static void setRemoved(dynamic config, List<Map<String, dynamic>> removed) {
    try {
      (config as dynamic).civicRegistryRemoved = removed;
    } catch (_) {}
  }

  static void _clearTombstone(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return;
    final next = removedFrom(config)
      ..removeWhere((r) => emailKey((r['email'] ?? '').toString()) == key);
    setRemoved(config, next);
  }

  static void _addTombstone(dynamic config, {required String email, String registryId = '', String state = ''}) {
    final key = emailKey(email);
    if (key.isEmpty) return;
    final now = DateTime.now().toUtc().toIso8601String();
    final next = removedFrom(config);
    next.removeWhere((r) => emailKey((r['email'] ?? '').toString()) == key);
    next.add({
      'email': key,
      'registryId': registryId.trim(),
      'state': state.trim(),
      'removedAt': now,
    });
    setRemoved(config, next);
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
    _clearTombstone(config, email);
    final members = listFrom(config);
    final next = Map<String, dynamic>.from(record)..['email'] = email;
    final now = DateTime.now().toUtc().toIso8601String();
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
      next['nicknames'] = next['nicknames'] ?? keep['nicknames'] ?? const <String>[];
      if (!next.containsKey('showNicknames')) next['showNicknames'] = keep['showNicknames'] == true;
      next['updatedAt'] = now;
      members[idx] = next;
    } else {
      next['enrolledAt'] = next['enrolledAt'] ?? now;
      next['updatedAt'] = now;
      members.add(next);
    }
    setList(config, members);
  }

  /// Update an existing member in place (by original email or registry ID). Never adds a new row.
  static Map<String, dynamic>? updateExisting(
    dynamic config, {
    required String originalEmail,
    String registryId = '',
    required Map<String, dynamic> fields,
  }) {
    final members = listFrom(config);
    final fromEmail = emailKey(originalEmail);
    final rid = registryId.trim().toUpperCase();
    var idx = fromEmail.isEmpty
        ? -1
        : members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == fromEmail);
    if (idx < 0 && rid.isNotEmpty) {
      idx = members.indexWhere(
        (m) => (m['registryId'] ?? '').toString().trim().toUpperCase() == rid,
      );
    }
    if (idx < 0) return null;

    final keep = Map<String, dynamic>.from(members[idx]);
    final next = Map<String, dynamic>.from(keep);
    for (final e in fields.entries) {
      next[e.key] = e.value;
    }

    final newEmail = emailKey((next['email'] ?? keep['email'] ?? '').toString());
    if (newEmail.isEmpty) return null;

    // If email changed, ensure no other member already owns it.
    if (newEmail != emailKey((keep['email'] ?? '').toString())) {
      final clash = members.indexWhere(
        (m) => emailKey((m['email'] ?? '').toString()) == newEmail,
      );
      if (clash >= 0 && clash != idx) return null;
    }

    next['email'] = newEmail;
    next['registryId'] = (keep['registryId'] ?? next['registryId'] ?? '').toString();
    next['helps'] = keep['helps'] ?? next['helps'] ?? 0;
    next['missed'] = keep['missed'] ?? next['missed'] ?? 0;
    next['enrolledAt'] = keep['enrolledAt'] ?? next['enrolledAt'];
    next['passportGranted'] = keep['passportGranted'] ?? next['passportGranted'] ?? false;
    next['linkedAppEmail'] = (next['linkedAppEmail'] ?? keep['linkedAppEmail'] ?? '').toString();
    next['passportGrantedAt'] = keep['passportGrantedAt'] ?? next['passportGrantedAt'];
    next['idPhotoPath'] = (next['idPhotoPath'] ?? keep['idPhotoPath'] ?? '').toString();
    next['nicknames'] = next['nicknames'] ?? keep['nicknames'] ?? const <String>[];
    if (!fields.containsKey('showNicknames')) {
      next['showNicknames'] = keep['showNicknames'] == true;
    }
    next['updatedAt'] = DateTime.now().toUtc().toIso8601String();
    members[idx] = next;
    setList(config, members);
    return next;
  }

  static List<String> nicknamesOf(Map<String, dynamic> member) {
    final raw = member['nicknames'];
    if (raw is! List) return const [];
    return raw
        .map((e) => e.toString().trim())
        .where((e) => e.isNotEmpty)
        .take(2)
        .toList();
  }

  static bool showNicknamesPublicly(Map<String, dynamic> member) => member['showNicknames'] == true;

  static String publicDisplayName(Map<String, dynamic>? member, {required String fullName, required String username}) {
    if (member != null && showNicknamesPublicly(member)) {
      final nicks = nicknamesOf(member);
      if (nicks.isNotEmpty) return nicks.join(' · ');
    }
    final name = fullName.trim();
    return name.isNotEmpty ? name : username.trim();
  }

  static void setNicknames(
    dynamic config,
    String email, {
    required List<String> nicknames,
    required bool showNicknames,
  }) {
    final m = findByEmail(config, email);
    if (m == null) return;
    final cleaned = nicknames.map((e) => e.trim()).where((e) => e.isNotEmpty).take(2).toList();
    upsert(
      config,
      {
        ...m,
        'nicknames': cleaned,
        'showNicknames': showNicknames,
      },
    );
  }

  static bool passportGranted(Map<String, dynamic> member) => member['passportGranted'] == true;

  static String _phoneKey(String phone) => phone.replaceAll(RegExp(r'\D'), '');

  static bool isGuestSyntheticEmail(String email) => emailKey(email).endsWith('@guest.ngmy');

  /// Change a member's email key while keeping the same registry record.
  static bool rekeyEmail(dynamic config, {required String fromEmail, required String toEmail}) {
    final from = emailKey(fromEmail);
    final to = emailKey(toEmail);
    if (from.isEmpty || to.isEmpty || from == to) return from == to && from.isNotEmpty;
    if (findByEmail(config, to) != null) return false;
    final members = listFrom(config);
    final idx = members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == from);
    if (idx < 0) return false;
    members[idx] = Map<String, dynamic>.from(members[idx])..['email'] = to;
    setList(config, members);
    return true;
  }

  /// Email of an app account matching this civic record by email or phone.
  static String? findLinkableAppEmail(List<dynamic> allUsers, Map<String, dynamic> member) {
    final memberEmail = emailKey((member['email'] ?? '').toString());
    final memberPhone = _phoneKey((member['phone'] ?? '').toString());
    String? byPhone;
    String? byPhoneLogin;
    for (final raw in allUsers) {
      final email = emailKey((raw.email ?? '').toString());
      final phone = _phoneKey((raw.phone ?? '').toString());
      if (email.isEmpty || isGuestSyntheticEmail(email)) continue;
      final isLogin = (() {
        try {
          return (raw as dynamic).isAppLoginAccount == true;
        } catch (_) {
          return false;
        }
      })();
      if (memberEmail.isNotEmpty && email == memberEmail) return email;
      if (memberPhone.length >= 7 && phone == memberPhone) {
        byPhone ??= email;
        if (isLogin) byPhoneLogin ??= email;
      }
    }
    return byPhoneLogin ?? byPhone;
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
    final existing = findByEmail(config, email);
    final registryId = (existing?['registryId'] ?? '').toString();
    final state = (existing?['state'] ?? '').toString();
    final members = listFrom(config)..removeWhere((m) => emailKey((m['email'] ?? '').toString()) == key);
    setList(config, members);
    _addTombstone(config, email: key, registryId: registryId, state: state);
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

  static String _normName(String s) => s.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');

  static String _normAddress(String s) =>
      s.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ').replaceAll(RegExp(r'[^\w\s]'), '');

  static Map<String, dynamic>? findDuplicateRecord({
    required dynamic config,
    required String fullName,
    String dob = '',
    String city = '',
    String homeAddress = '',
    String phone = '',
    String? excludeEmail,
    String? excludeRegistryId,
  }) {
    return findDuplicateInRecords(
      records: listFrom(config),
      fullName: fullName,
      dob: dob,
      city: city,
      homeAddress: homeAddress,
      phone: phone,
      excludeEmail: excludeEmail,
      excludeRegistryId: excludeRegistryId,
    );
  }

  /// Blocks double enrollment when identity overlaps on:
  /// name+address, name+phone, address+phone, same phone, or legacy name+dob/city.
  static Map<String, dynamic>? findDuplicateInRecords({
    required List<Map<String, dynamic>> records,
    required String fullName,
    String dob = '',
    String city = '',
    String homeAddress = '',
    String phone = '',
    String? excludeEmail,
    String? excludeRegistryId,
  }) {
    final nameKey = _normName(fullName);
    final addrKey = _normAddress(homeAddress);
    final phoneKey = _phoneKey(phone);
    final dobKey = RegExp(r'^\d{2}/\d{2}/\d{4}$').hasMatch(dob.trim()) ? dob.trim() : '';
    final cityKey = city.trim().toLowerCase();
    final exclude = excludeEmail?.toLowerCase().trim() ?? '';
    final excludeId = (excludeRegistryId ?? '').trim().toUpperCase();

    for (final m in records) {
      final email = emailKey((m['email'] ?? '').toString());
      if (exclude.isNotEmpty && email == exclude) continue;
      final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (excludeId.isNotEmpty && id == excludeId) continue;

      final existingName = _normName((m['fullName'] ?? '').toString());
      final existingAddr = _normAddress((m['homeAddress'] ?? '').toString());
      final existingPhone = _phoneKey((m['phone'] ?? '').toString());
      final existingDob = (m['dob'] ?? '').toString().trim();
      final existingCity = (m['city'] ?? '').toString().trim().toLowerCase();

      final nameMatch = nameKey.isNotEmpty && existingName == nameKey;
      final addrMatch = addrKey.isNotEmpty && existingAddr == addrKey;
      final phoneMatch = phoneKey.length >= 7 && existingPhone.length >= 7 && phoneKey == existingPhone;

      if (phoneMatch) return m;
      if (nameMatch && addrMatch) return m;
      if (nameMatch && phoneMatch) return m;
      if (addrMatch && phoneMatch) return m;

      if (nameMatch) {
        final nameAndDob = dobKey.isNotEmpty && existingDob.isNotEmpty && dobKey == existingDob;
        final nameAndCity = cityKey.isNotEmpty && existingCity.isNotEmpty && cityKey == existingCity;
        if (nameAndDob || nameAndCity) return m;
      }
    }
    return null;
  }

  static String duplicateMessage(Map<String, dynamic> existing) {
    final name = (existing['fullName'] ?? '').toString().trim();
    final id = (existing['registryId'] ?? '').toString().trim();
    final phone = (existing['phone'] ?? '').toString().trim();
    final address = (existing['homeAddress'] ?? '').toString().trim();
    final parts = <String>[if (name.isNotEmpty) name else 'Member'];
    if (id.isNotEmpty) parts.add('ID $id');
    if (phone.isNotEmpty) parts.add(phone);
    if (address.isNotEmpty) parts.add(address);
    return 'Already enrolled — matching name, address, or phone was found (${parts.join(' · ')}). One person cannot enroll twice.';
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
        'removed': removedFrom(config),
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      };

  /// Full backup envelope for download (includes helps/missed/passport so rankings restore).
  /// Always scoped to one state — files must not be restorable in another state.
  static Map<String, dynamic> backupEnvelope(dynamic config, {required String state}) {
    final st = state.trim();
    if (st.isEmpty) {
      return {
        'type': 'ngmy_civic_registry_backup',
        'version': 1,
        'state': '',
        'savedAt': DateTime.now().toUtc().toIso8601String(),
        'memberCount': 0,
        'members': <Map<String, dynamic>>[],
      };
    }
    final key = st.toLowerCase();
    final members = listFrom(config)
        .where((m) => (m['state'] ?? '').toString().trim().toLowerCase() == key)
        .map((m) => Map<String, dynamic>.from(m)..['state'] = st)
        .toList();
    return {
      'type': 'ngmy_civic_registry_backup',
      'version': 1,
      'state': st,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
      'memberCount': members.length,
      'members': members,
    };
  }

  static String backupStateFromJson(String raw) {
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return '';
    return (Map<String, dynamic>.from(decoded)['state'] ?? '').toString().trim();
  }

  static bool backupStateMatches(String backupState, String currentState) {
    final a = backupState.trim().toLowerCase();
    final b = currentState.trim().toLowerCase();
    return a.isNotEmpty && b.isNotEmpty && a == b;
  }

  static List<Map<String, dynamic>> membersFromBackupJson(String raw, {String? requireState}) {
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return const [];
    final map = Map<String, dynamic>.from(decoded);
    final fileState = (map['state'] ?? '').toString().trim();
    if (requireState != null && requireState.trim().isNotEmpty) {
      if (!backupStateMatches(fileState, requireState)) return const [];
    }
    final list = map['members'] ?? map['civicRegistryMembers'];
    if (list is! List) return const [];
    final want = (requireState ?? fileState).trim().toLowerCase();
    return list
        .whereType<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .where((m) {
          if (want.isEmpty) return false;
          final ms = (m['state'] ?? fileState).toString().trim().toLowerCase();
          return ms == want;
        })
        .toList();
  }

  /// Smart restore: only add members that are not already enrolled (by email, registry ID, or identity).
  /// Existing members are left untouched. Only members belonging to [requireState] are considered.
  static ({int added, int skipped, List<Map<String, dynamic>> restored}) importMissingMembers(
    dynamic config,
    List<Map<String, dynamic>> incoming, {
    required String requireState,
  }) {
    var added = 0;
    var skipped = 0;
    final restored = <Map<String, dynamic>>[];
    final stateKey = requireState.trim().toLowerCase();
    if (stateKey.isEmpty) return (added: 0, skipped: incoming.length, restored: restored);

    for (final raw in incoming) {
      final memberState = (raw['state'] ?? requireState).toString().trim();
      if (memberState.toLowerCase() != stateKey) {
        skipped++;
        continue;
      }

      final email = emailKey((raw['email'] ?? '').toString());
      final registryId = (raw['registryId'] ?? '').toString().trim();
      final fullName = (raw['fullName'] ?? '').toString();
      final phone = (raw['phone'] ?? '').toString();
      final address = (raw['homeAddress'] ?? '').toString();
      final dob = (raw['dob'] ?? '').toString();
      final city = (raw['city'] ?? '').toString();

      var key = email;
      if (key.isEmpty) {
        final digits = _phoneKey(phone);
        if (digits.length >= 7) {
          key = 'civic.$digits@guest.ngmy';
        } else {
          skipped++;
          continue;
        }
      }

      if (findByEmail(config, key) != null) {
        skipped++;
        continue;
      }
      if (registryId.isNotEmpty && findByRegistryId(config, registryId) != null) {
        skipped++;
        continue;
      }
      final dup = findDuplicateInRecords(
        records: listFrom(config),
        fullName: fullName,
        dob: dob,
        city: city,
        homeAddress: address,
        phone: phone,
        excludeEmail: key,
        excludeRegistryId: registryId,
      );
      if (dup != null) {
        skipped++;
        continue;
      }

      final record = Map<String, dynamic>.from(raw)
        ..['email'] = key
        ..['state'] = requireState.trim();
      if ((record['registryId'] ?? '').toString().trim().isEmpty && registryId.isNotEmpty) {
        record['registryId'] = registryId;
      }
      upsert(config, record);
      restored.add(Map<String, dynamic>.from(listFrom(config).firstWhere(
        (m) => emailKey((m['email'] ?? '').toString()) == key,
        orElse: () => record,
      )));
      added++;
    }
    return (added: added, skipped: skipped, restored: restored);
  }

  static DateTime? _memberStamp(Map<String, dynamic> m) {
    return DateTime.tryParse((m['updatedAt'] ?? m['enrolledAt'] ?? '').toString());
  }

  static Map<String, dynamic> _preferNewerMember(Map<String, dynamic> a, Map<String, dynamic> b) {
    final ta = _memberStamp(a);
    final tb = _memberStamp(b);
    if (tb == null) return a;
    if (ta == null) return b;
    return tb.isAfter(ta) ? b : a;
  }

  static void applyPayload(dynamic config, Map<String, dynamic> payload) {
    final remote = payload['members'];
    if (remote is! List) return;
    final remoteMembers = remote.map((e) => Map<String, dynamic>.from(e as Map)).toList();

    // Merge delete tombstones from every device so removals stay removed everywhere.
    final remoteRemovedRaw = payload['removed'] ?? payload['civicRegistryRemoved'];
    final remoteRemoved = <Map<String, dynamic>>[];
    if (remoteRemovedRaw is List) {
      for (final e in remoteRemovedRaw) {
        if (e is Map) remoteRemoved.add(Map<String, dynamic>.from(e));
      }
    }
    final tombstones = <String, Map<String, dynamic>>{};
    for (final r in [...removedFrom(config), ...remoteRemoved]) {
      final key = emailKey((r['email'] ?? '').toString());
      if (key.isEmpty) continue;
      final prev = tombstones[key];
      if (prev == null) {
        tombstones[key] = r;
        continue;
      }
      final a = DateTime.tryParse((prev['removedAt'] ?? '').toString());
      final b = DateTime.tryParse((r['removedAt'] ?? '').toString());
      if (b != null && (a == null || b.isAfter(a))) tombstones[key] = r;
    }
    setRemoved(config, tombstones.values.toList());

    final local = listFrom(config);
    if (local.isEmpty) {
      final filtered = remoteMembers.where((m) {
        final key = emailKey((m['email'] ?? '').toString());
        final tomb = tombstones[key];
        if (tomb == null) return true;
        final removedAt = DateTime.tryParse((tomb['removedAt'] ?? '').toString());
        final updatedAt = _memberStamp(m);
        if (removedAt == null) return false;
        if (updatedAt != null && updatedAt.isAfter(removedAt)) return true; // re-enrolled after delete
        return false;
      }).toList();
      setList(config, filtered);
      return;
    }

    final merged = <String, Map<String, dynamic>>{};
    final idsOwned = <String, String>{};

    for (final m in local) {
      final key = emailKey((m['email'] ?? '').toString());
      if (key.isEmpty) continue;
      merged[key] = m;
      final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (id.isNotEmpty) idsOwned[id] = key;
    }

    for (final m in remoteMembers) {
      final key = emailKey((m['email'] ?? '').toString());
      if (key.isEmpty) continue;
      final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (merged.containsKey(key)) {
        merged[key] = _preferNewerMember(merged[key]!, m);
        continue;
      }
      if (id.isNotEmpty && idsOwned.containsKey(id)) {
        final existingKey = idsOwned[id]!;
        final existing = merged[existingKey];
        if (existing != null) {
          final newer = _preferNewerMember(existing, m);
          if (identical(newer, m) || emailKey((newer['email'] ?? '').toString()) == key) {
            merged.remove(existingKey);
            merged[key] = Map<String, dynamic>.from(m);
            idsOwned[id] = key;
          }
        }
        continue;
      }
      merged[key] = m;
      if (id.isNotEmpty) idsOwned[id] = key;
    }

    // Drop anyone with a tombstone newer than their last update (deleted on another device).
    merged.removeWhere((key, m) {
      final tomb = tombstones[key];
      if (tomb == null) return false;
      final removedAt = DateTime.tryParse((tomb['removedAt'] ?? '').toString());
      final updatedAt = _memberStamp(m);
      if (removedAt == null) return true;
      if (updatedAt != null && updatedAt.isAfter(removedAt)) {
        _clearTombstone(config, key); // resurrected after delete
        return false;
      }
      return true;
    });

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
