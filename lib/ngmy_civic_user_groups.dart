import 'dart:convert';
import 'dart:math' as math;

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_settings_cloud.dart';

const kNgmyCivicUserGroupQrPrefix = 'NGMY-GROUP:';
const kNgmyCivicUserGroupFreeMemberCap = 100;

String ngmyCivicUserGroupQrPayload(String inviteCode) =>
    '$kNgmyCivicUserGroupQrPrefix${inviteCode.trim().toUpperCase()}';

String? ngmyParseCivicUserGroupInviteCode(String raw) {
  final text = raw.trim();
  if (text.isEmpty) return null;
  final upper = text.toUpperCase();
  if (upper.startsWith(kNgmyCivicUserGroupQrPrefix)) {
    final code = upper.substring(kNgmyCivicUserGroupQrPrefix.length).trim();
    return code.isEmpty ? null : code;
  }
  final m = RegExp(r'^GRP-[A-Z0-9]{5,10}$').firstMatch(upper);
  return m?.group(0);
}

class NgmyCivicUserGroupMember {
  NgmyCivicUserGroupMember({
    required this.email,
    required this.name,
    required this.joinedAt,
  });

  final String email;
  final String name;
  final DateTime joinedAt;

  Map<String, dynamic> toJson() => {
        'email': email,
        'name': name,
        'joinedAt': joinedAt.toUtc().toIso8601String(),
      };

  factory NgmyCivicUserGroupMember.fromJson(Map<String, dynamic> j) =>
      NgmyCivicUserGroupMember(
        email: (j['email'] ?? '').toString().toLowerCase().trim(),
        name: (j['name'] ?? '').toString().trim(),
        joinedAt: DateTime.tryParse((j['joinedAt'] ?? '').toString()) ??
            DateTime.now().toUtc(),
      );
}

class NgmyCivicUserGroupNote {
  NgmyCivicUserGroupNote({
    required this.id,
    required this.text,
    required this.at,
    required this.byEmail,
  });

  final String id;
  final String text;
  final DateTime at;
  final String byEmail;

  Map<String, dynamic> toJson() => {
        'id': id,
        'text': text,
        'at': at.toUtc().toIso8601String(),
        'byEmail': byEmail,
      };

  factory NgmyCivicUserGroupNote.fromJson(Map<String, dynamic> j) =>
      NgmyCivicUserGroupNote(
        id: (j['id'] ?? '').toString(),
        text: (j['text'] ?? '').toString(),
        at: DateTime.tryParse((j['at'] ?? '').toString()) ?? DateTime.now().toUtc(),
        byEmail: (j['byEmail'] ?? '').toString().toLowerCase().trim(),
      );
}

enum NgmyCivicUserGroupLedgerKind { contribution, spending }

class NgmyCivicUserGroupLedgerEntry {
  NgmyCivicUserGroupLedgerEntry({
    required this.id,
    required this.kind,
    required this.amount,
    required this.label,
    required this.note,
    required this.at,
    required this.byEmail,
  });

  final String id;
  final NgmyCivicUserGroupLedgerKind kind;
  final double amount;
  final String label;
  final String note;
  final DateTime at;
  final String byEmail;

  Map<String, dynamic> toJson() => {
        'id': id,
        'kind': kind == NgmyCivicUserGroupLedgerKind.contribution
            ? 'contribution'
            : 'spending',
        'amount': amount,
        'label': label,
        'note': note,
        'at': at.toUtc().toIso8601String(),
        'byEmail': byEmail,
      };

  factory NgmyCivicUserGroupLedgerEntry.fromJson(Map<String, dynamic> j) {
    final k = (j['kind'] ?? '').toString().toLowerCase();
    return NgmyCivicUserGroupLedgerEntry(
      id: (j['id'] ?? '').toString(),
      kind: k == 'spending'
          ? NgmyCivicUserGroupLedgerKind.spending
          : NgmyCivicUserGroupLedgerKind.contribution,
      amount: (j['amount'] is num)
          ? (j['amount'] as num).toDouble()
          : double.tryParse('${j['amount']}') ?? 0,
      label: (j['label'] ?? '').toString(),
      note: (j['note'] ?? '').toString(),
      at: DateTime.tryParse((j['at'] ?? '').toString()) ?? DateTime.now().toUtc(),
      byEmail: (j['byEmail'] ?? '').toString().toLowerCase().trim(),
    );
  }
}

class NgmyCivicUserGroup {
  NgmyCivicUserGroup({
    required this.id,
    required this.name,
    required this.ownerEmail,
    required this.ownerName,
    required this.inviteCode,
    required this.createdAt,
    List<NgmyCivicUserGroupMember>? members,
    List<NgmyCivicUserGroupNote>? notes,
    List<NgmyCivicUserGroupLedgerEntry>? ledger,
  })  : members = members ?? <NgmyCivicUserGroupMember>[],
        notes = notes ?? <NgmyCivicUserGroupNote>[],
        ledger = ledger ?? <NgmyCivicUserGroupLedgerEntry>[];

  final String id;
  String name;
  final String ownerEmail;
  String ownerName;
  final String inviteCode;
  final DateTime createdAt;
  final List<NgmyCivicUserGroupMember> members;
  final List<NgmyCivicUserGroupNote> notes;
  final List<NgmyCivicUserGroupLedgerEntry> ledger;

  bool isOwner(String email) =>
      ownerEmail.toLowerCase().trim() == email.toLowerCase().trim();

  bool isMember(String email) {
    final e = email.toLowerCase().trim();
    if (isOwner(e)) return true;
    return members.any((m) => m.email == e);
  }

  int get memberCount {
    final emails = <String>{ownerEmail.toLowerCase().trim()};
    for (final m in members) {
      emails.add(m.email);
    }
    return emails.length;
  }

  double get totalContributions => ledger
      .where((e) => e.kind == NgmyCivicUserGroupLedgerKind.contribution)
      .fold<double>(0, (s, e) => s + e.amount);

  double get totalSpending => ledger
      .where((e) => e.kind == NgmyCivicUserGroupLedgerKind.spending)
      .fold<double>(0, (s, e) => s + e.amount);

  double get balance => totalContributions - totalSpending;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'ownerEmail': ownerEmail,
        'ownerName': ownerName,
        'inviteCode': inviteCode,
        'createdAt': createdAt.toUtc().toIso8601String(),
        'members': members.map((m) => m.toJson()).toList(),
        'notes': notes.map((n) => n.toJson()).toList(),
        'ledger': ledger.map((e) => e.toJson()).toList(),
      };

  factory NgmyCivicUserGroup.fromJson(Map<String, dynamic> j) {
    List<Map<String, dynamic>> asMaps(dynamic raw) {
      if (raw is! List) return const [];
      return raw
          .whereType<Map>()
          .map((e) => Map<String, dynamic>.from(e))
          .toList();
    }

    return NgmyCivicUserGroup(
      id: (j['id'] ?? '').toString(),
      name: (j['name'] ?? 'Group').toString(),
      ownerEmail: (j['ownerEmail'] ?? '').toString().toLowerCase().trim(),
      ownerName: (j['ownerName'] ?? '').toString().trim(),
      inviteCode: (j['inviteCode'] ?? '').toString().toUpperCase().trim(),
      createdAt: DateTime.tryParse((j['createdAt'] ?? '').toString()) ??
          DateTime.now().toUtc(),
      members: asMaps(j['members']).map(NgmyCivicUserGroupMember.fromJson).toList(),
      notes: asMaps(j['notes']).map(NgmyCivicUserGroupNote.fromJson).toList(),
      ledger:
          asMaps(j['ledger']).map(NgmyCivicUserGroupLedgerEntry.fromJson).toList(),
    );
  }
}

/// Local + settings-cloud store for lightning user groups.
abstract final class NgmyCivicUserGroupsStore {
  static const settingsKey = 'civic_user_groups_v1';
  static const _localKey = 'ngmy_civic_user_groups_v1';

  static String _newId() =>
      'cug_${DateTime.now().millisecondsSinceEpoch}_${math.Random().nextInt(1 << 20)}';

  static String _newInviteCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = math.Random.secure();
    final body = List.generate(6, (_) => chars[r.nextInt(chars.length)]).join();
    return 'GRP-$body';
  }

  static Future<Map<String, dynamic>> _loadRoot() async {
    final prefs = await SharedPreferences.getInstance();
    Map<String, dynamic> local = {'groups': <String, dynamic>{}};
    final raw = prefs.getString(_localKey);
    if (raw != null && raw.isNotEmpty) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is Map) local = Map<String, dynamic>.from(decoded);
      } catch (_) {}
    }
    final remote = await ngmyFetchSettingsValueViaRest(settingsKey);
    if (remote != null) {
      await prefs.setString(_localKey, jsonEncode(remote));
      return remote;
    }
    return local;
  }

  static Future<void> _saveRoot(Map<String, dynamic> root) async {
    root['updatedAt'] = DateTime.now().toUtc().toIso8601String();
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_localKey, jsonEncode(root));
    await ngmyUpsertSettingsRowReliable(settingsKey, root);
  }

  static Map<String, NgmyCivicUserGroup> _groupsFromRoot(Map<String, dynamic> root) {
    final raw = root['groups'];
    final out = <String, NgmyCivicUserGroup>{};
    if (raw is! Map) return out;
    for (final e in raw.entries) {
      if (e.value is! Map) continue;
      final g = NgmyCivicUserGroup.fromJson(Map<String, dynamic>.from(e.value as Map));
      if (g.id.isEmpty) continue;
      out[g.id] = g;
    }
    return out;
  }

  static Future<List<NgmyCivicUserGroup>> loadAll() async {
    final root = await _loadRoot();
    final list = _groupsFromRoot(root).values.toList()
      ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
    return list;
  }

  static Future<NgmyCivicUserGroup?> findById(String id) async {
    final all = await loadAll();
    try {
      return all.firstWhere((g) => g.id == id);
    } catch (_) {
      return null;
    }
  }

  static Future<NgmyCivicUserGroup?> findByInviteCode(String code) async {
    final c = ngmyParseCivicUserGroupInviteCode(code) ?? code.trim().toUpperCase();
    if (c.isEmpty) return null;
    final all = await loadAll();
    try {
      return all.firstWhere((g) => g.inviteCode == c);
    } catch (_) {
      return null;
    }
  }

  static Future<List<NgmyCivicUserGroup>> ownedBy(String email) async {
    final e = email.toLowerCase().trim();
    return (await loadAll()).where((g) => g.ownerEmail == e).toList();
  }

  static Future<List<NgmyCivicUserGroup>> joinedBy(String email) async {
    final e = email.toLowerCase().trim();
    return (await loadAll())
        .where((g) => g.isMember(e) && g.ownerEmail != e)
        .toList();
  }

  static Future<NgmyCivicUserGroup> createGroup({
    required String name,
    required String ownerEmail,
    required String ownerName,
  }) async {
    final root = await _loadRoot();
    final groups = _groupsFromRoot(root);
    var code = _newInviteCode();
    while (groups.values.any((g) => g.inviteCode == code)) {
      code = _newInviteCode();
    }
    final group = NgmyCivicUserGroup(
      id: _newId(),
      name: name.trim().isEmpty ? 'My Group' : name.trim(),
      ownerEmail: ownerEmail.toLowerCase().trim(),
      ownerName: ownerName.trim().isEmpty ? 'Owner' : ownerName.trim(),
      inviteCode: code,
      createdAt: DateTime.now().toUtc(),
    );
    groups[group.id] = group;
    root['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
    await _saveRoot(root);
    return group;
  }

  static Future<void> saveGroup(NgmyCivicUserGroup group) async {
    final root = await _loadRoot();
    final groups = _groupsFromRoot(root);
    groups[group.id] = group;
    root['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
    await _saveRoot(root);
  }

  static Future<void> deleteGroup(String id) async {
    final root = await _loadRoot();
    final groups = _groupsFromRoot(root);
    groups.remove(id);
    root['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
    await _saveRoot(root);
  }

  static Future<NgmyCivicUserGroup?> joinByCode({
    required String inviteCode,
    required String email,
    required String name,
  }) async {
    final group = await findByInviteCode(inviteCode);
    if (group == null) return null;
    final e = email.toLowerCase().trim();
    if (group.isMember(e)) return group;
    group.members.add(
      NgmyCivicUserGroupMember(
        email: e,
        name: name.trim().isEmpty ? e.split('@').first : name.trim(),
        joinedAt: DateTime.now().toUtc(),
      ),
    );
    await saveGroup(group);
    return group;
  }

  static Future<bool> removeMember({
    required String groupId,
    required String memberEmail,
  }) async {
    final group = await findById(groupId);
    if (group == null) return false;
    final e = memberEmail.toLowerCase().trim();
    if (group.isOwner(e)) return false;
    group.members.removeWhere((m) => m.email == e);
    await saveGroup(group);
    return true;
  }
}
