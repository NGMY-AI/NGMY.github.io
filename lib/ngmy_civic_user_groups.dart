import 'dart:convert';
import 'dart:math' as math;

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_civic_registry_cloud.dart';
import 'ngmy_settings_cloud.dart';

const kNgmyCivicUserGroupQrPrefix = 'NGMY-GROUP:';
const kNgmyCivicUserGroupFreeMemberCap = 100;
/// Exactly 3 uppercase letters + 1–5 digits (e.g. ABC12345).
const kNgmyCivicUserGroupCodePattern = r'^[A-Z]{3}[0-9]{1,5}$';

bool ngmyCivicUserGroupCodeIsValid(String raw) {
  final c = raw.trim().toUpperCase();
  return RegExp(kNgmyCivicUserGroupCodePattern).hasMatch(c);
}

String ngmyCivicUserGroupCodeHint() => 'ABC12345';

String ngmyCivicUserGroupQrPayload(String inviteCode) =>
    '$kNgmyCivicUserGroupQrPrefix${inviteCode.trim().toUpperCase()}';

String? ngmyParseCivicUserGroupInviteCode(String raw) {
  var text = raw.trim();
  if (text.isEmpty) return null;
  var upper = text.toUpperCase();
  if (upper.startsWith(kNgmyCivicUserGroupQrPrefix)) {
    upper = upper.substring(kNgmyCivicUserGroupQrPrefix.length).trim();
  }
  final legacy = upper.replaceAll(RegExp(r'\s+'), '');
  if (RegExp(r'^GRP-[A-Z0-9]{5,10}$').hasMatch(legacy)) return legacy;
  final compact = upper.replaceAll(RegExp(r'[^A-Z0-9]'), '');
  if (RegExp(kNgmyCivicUserGroupCodePattern).hasMatch(compact)) return compact;
  return null;
}

/// Someone in a group. A person who has asked to join but is not approved yet has status 'pending'.
class NgmyCivicUserGroupMember {
  NgmyCivicUserGroupMember({
    required this.email,
    required this.name,
    required this.joinedAt,
    this.missed = 0,
    this.status = 'active',
    this.phone = '',
    this.state = '',
    this.address = '',
    List<Map<String, String>>? family,
    this.requestedAt,
  }) : family = family ?? <Map<String, String>>[];

  final String email;
  final String name;
  final DateTime joinedAt;
  int missed;

  /// 'active' (in the group) or 'pending' (waiting for the owner to approve).
  String status;
  final String phone;
  final String state;
  final String address;

  /// Family in this group, picked by the person when they asked to join: {relation, name, email}.
  final List<Map<String, String>> family;
  final DateTime? requestedAt;

  bool get isPending => status == 'pending';

  Map<String, dynamic> toJson() => {
        'email': email,
        'name': name,
        'joinedAt': joinedAt.toUtc().toIso8601String(),
        'missed': missed,
        if (status != 'active') 'status': status,
        if (phone.isNotEmpty) 'phone': phone,
        if (state.isNotEmpty) 'state': state,
        if (address.isNotEmpty) 'address': address,
        if (family.isNotEmpty) 'family': family,
        if (requestedAt != null) 'requestedAt': requestedAt!.toUtc().toIso8601String(),
      };

  factory NgmyCivicUserGroupMember.fromJson(Map<String, dynamic> j) => NgmyCivicUserGroupMember(
        email: (j['email'] ?? '').toString().toLowerCase().trim(),
        name: (j['name'] ?? '').toString().trim(),
        joinedAt: DateTime.tryParse((j['joinedAt'] ?? '').toString()) ?? DateTime.now().toUtc(),
        missed: j['missed'] is num ? (j['missed'] as num).toInt() : 0,
        status: (j['status'] ?? '').toString() == 'pending' ? 'pending' : 'active',
        phone: (j['phone'] ?? '').toString(),
        state: (j['state'] ?? '').toString(),
        address: (j['address'] ?? '').toString(),
        family: j['family'] is List
            ? [
                for (final f in (j['family'] as List).whereType<Map>())
                  {for (final e in f.entries) '${e.key}': '${e.value}'}
              ]
            : null,
        requestedAt: DateTime.tryParse((j['requestedAt'] ?? '').toString()),
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

enum NgmyCivicUserGroupLedgerKind { contribution, spending, memberRemoved }

class NgmyCivicUserGroupLedgerEntry {
  NgmyCivicUserGroupLedgerEntry({
    required this.id,
    required this.kind,
    required this.amount,
    required this.label,
    required this.note,
    required this.at,
    required this.byEmail,
    this.campaignId = '',
    this.memberEmail = '',
    this.campaignName = '',
  });

  final String id;
  final NgmyCivicUserGroupLedgerKind kind;
  final double amount;
  final String label;
  final String note;
  final DateTime at;
  final String byEmail;
  final String campaignId;
  final String memberEmail;

  /// What the contribution round was for ("School fees", "Funeral help"...).
  final String campaignName;

  static String _kindToJson(NgmyCivicUserGroupLedgerKind kind) {
    switch (kind) {
      case NgmyCivicUserGroupLedgerKind.contribution:
        return 'contribution';
      case NgmyCivicUserGroupLedgerKind.spending:
        return 'spending';
      case NgmyCivicUserGroupLedgerKind.memberRemoved:
        return 'member_removed';
    }
  }

  static NgmyCivicUserGroupLedgerKind _kindFromJson(String raw) {
    switch (raw.toLowerCase().trim()) {
      case 'spending':
        return NgmyCivicUserGroupLedgerKind.spending;
      case 'member_removed':
      case 'removed':
        return NgmyCivicUserGroupLedgerKind.memberRemoved;
      default:
        return NgmyCivicUserGroupLedgerKind.contribution;
    }
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'kind': _kindToJson(kind),
        'amount': amount,
        'label': label,
        'note': note,
        'at': at.toUtc().toIso8601String(),
        'byEmail': byEmail,
        if (campaignId.isNotEmpty) 'campaignId': campaignId,
        if (memberEmail.isNotEmpty) 'memberEmail': memberEmail,
        if (campaignName.isNotEmpty) 'campaignName': campaignName,
      };

  factory NgmyCivicUserGroupLedgerEntry.fromJson(Map<String, dynamic> j) {
    return NgmyCivicUserGroupLedgerEntry(
      id: (j['id'] ?? '').toString(),
      kind: _kindFromJson((j['kind'] ?? '').toString()),
      amount: (j['amount'] is num)
          ? (j['amount'] as num).toDouble()
          : double.tryParse('${j['amount']}') ?? 0,
      label: (j['label'] ?? '').toString(),
      note: (j['note'] ?? '').toString(),
      at: DateTime.tryParse((j['at'] ?? '').toString()) ?? DateTime.now().toUtc(),
      byEmail: (j['byEmail'] ?? '').toString().toLowerCase().trim(),
      campaignId: (j['campaignId'] ?? '').toString().trim(),
      memberEmail: (j['memberEmail'] ?? '').toString().toLowerCase().trim(),
      campaignName: (j['campaignName'] ?? '').toString().trim(),
    );
  }
}

class NgmyCivicUserGroupMissedEntry {
  NgmyCivicUserGroupMissedEntry({
    required this.id,
    required this.memberName,
    required this.memberEmail,
    required this.campaignId,
    required this.purpose,
    required this.at,
  });

  final String id;
  final String memberName;
  final String memberEmail;
  final String campaignId;
  final String purpose;
  final DateTime at;

  Map<String, dynamic> toJson() => {
        'id': id,
        'memberName': memberName,
        'memberEmail': memberEmail,
        'campaignId': campaignId,
        'purpose': purpose,
        'at': at.toUtc().toIso8601String(),
      };

  factory NgmyCivicUserGroupMissedEntry.fromJson(Map<String, dynamic> j) =>
      NgmyCivicUserGroupMissedEntry(
        id: (j['id'] ?? '').toString(),
        memberName: (j['memberName'] ?? '').toString(),
        memberEmail: (j['memberEmail'] ?? '').toString().toLowerCase().trim(),
        campaignId: (j['campaignId'] ?? '').toString(),
        purpose: (j['purpose'] ?? '').toString(),
        at: DateTime.tryParse((j['at'] ?? '').toString()) ?? DateTime.now().toUtc(),
      );
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
    this.helpModeActive = false,
    this.helpPurpose = '',
    this.helpCashApp = '',
    this.helpZelle = '',
    this.helpPhone = '',
    this.helpCampaignId = '',
    this.helpCampaignStartedAt,
    this.ownerMissed = 0,
    List<String>? helpCampaignClosures,
    List<NgmyCivicUserGroupMissedEntry>? missedHistory,
  })  : members = members ?? <NgmyCivicUserGroupMember>[],
        notes = notes ?? <NgmyCivicUserGroupNote>[],
        ledger = ledger ?? <NgmyCivicUserGroupLedgerEntry>[],
        helpCampaignClosures = helpCampaignClosures ?? <String>[],
        missedHistory = missedHistory ?? <NgmyCivicUserGroupMissedEntry>[];

  final String id;
  String name;
  final String ownerEmail;
  String ownerName;
  final String inviteCode;
  final DateTime createdAt;
  final List<NgmyCivicUserGroupMember> members;
  final List<NgmyCivicUserGroupNote> notes;
  final List<NgmyCivicUserGroupLedgerEntry> ledger;
  bool helpModeActive;
  String helpPurpose;
  String helpCashApp;
  String helpZelle;
  String helpPhone;
  String helpCampaignId;
  DateTime? helpCampaignStartedAt;
  int ownerMissed;
  final List<String> helpCampaignClosures;
  final List<NgmyCivicUserGroupMissedEntry> missedHistory;

  bool isOwner(String email) =>
      ownerEmail.toLowerCase().trim() == email.toLowerCase().trim();

  /// In the group: the owner and approved people. Someone waiting for approval is not in yet.
  bool isMember(String email) {
    final e = email.toLowerCase().trim();
    if (isOwner(e)) return true;
    return members.any((m) => m.email == e && !m.isPending);
  }

  bool isPending(String email) {
    final e = email.toLowerCase().trim();
    return members.any((m) => m.email == e && m.isPending);
  }

  List<NgmyCivicUserGroupMember> get activeMembers => [for (final m in members) if (!m.isPending) m];
  List<NgmyCivicUserGroupMember> get pendingMembers => [for (final m in members) if (m.isPending) m];

  int get memberCount {
    final emails = <String>{ownerEmail.toLowerCase().trim()};
    for (final m in activeMembers) {
      emails.add(m.email);
    }
    return emails.length;
  }

  /// How many different contribution rounds this person gave to (plus single gifts outside a round).
  int timesContributed(String name, String email) {
    final key = name.trim().toLowerCase();
    final e = email.toLowerCase().trim();
    final rounds = <String>{};
    var single = 0;
    for (final x in ledger) {
      if (x.kind != NgmyCivicUserGroupLedgerKind.contribution) continue;
      final mine = x.label.trim().toLowerCase() == key || (e.isNotEmpty && x.memberEmail == e);
      if (!mine) continue;
      if (x.campaignId.isEmpty) {
        single++;
      } else {
        rounds.add(x.campaignId);
      }
    }
    return rounds.length + single;
  }


  double get totalContributions => ledger
      .where((e) => e.kind == NgmyCivicUserGroupLedgerKind.contribution)
      .fold<double>(0, (s, e) => s + e.amount);

  double get totalSpending => ledger
      .where((e) => e.kind == NgmyCivicUserGroupLedgerKind.spending)
      .fold<double>(0, (s, e) => s + e.amount);

  double get balance => totalContributions - totalSpending;

  bool contributedToCampaign(String memberName, String campaignId, {String email = ''}) {
    final cid = campaignId.trim();
    if (cid.isEmpty) return false;
    final key = memberName.trim().toLowerCase();
    final emailKey = email.toLowerCase().trim();
    return ledger.any((e) {
      if (e.kind != NgmyCivicUserGroupLedgerKind.contribution) return false;
      if (e.campaignId != cid) return false;
      if (e.label.trim().toLowerCase() == key) return true;
      if (emailKey.isNotEmpty && e.memberEmail == emailKey) return true;
      return false;
    });
  }

  void saveHelpSettings({
    required String purpose,
    required String cashApp,
    required String zelle,
    required String phone,
  }) {
    helpPurpose = purpose.trim();
    helpCashApp = cashApp.trim();
    helpZelle = zelle.trim();
    helpPhone = phone.trim();
  }

  void activateHelpMode() {
    if (helpPurpose.trim().isEmpty) return;
    helpModeActive = true;
    helpCampaignId =
        'lg_${DateTime.now().millisecondsSinceEpoch}_${math.Random().nextInt(1 << 16)}';
    helpCampaignStartedAt = DateTime.now().toUtc();
  }

  void deactivateHelpMode() {
    final cid = helpCampaignId.trim();
    final purpose = helpPurpose;
    if (cid.isNotEmpty && !helpCampaignClosures.contains(cid)) {
      _markMissedForCampaign(cid, purpose: purpose);
      helpCampaignClosures.add(cid);
    }
    helpModeActive = false;
    helpCampaignId = '';
    helpCampaignStartedAt = null;
  }

  void _markMissedForCampaign(String campaignId, {required String purpose}) {
    final now = DateTime.now().toUtc();
    final purposeText = purpose.trim().isEmpty ? 'Help round' : purpose.trim();

    void recordMissed(String name, String email) {
      missedHistory.insert(
        0,
        NgmyCivicUserGroupMissedEntry(
          id: 'miss_${now.millisecondsSinceEpoch}_${email.hashCode}',
          memberName: name,
          memberEmail: email.toLowerCase().trim(),
          campaignId: campaignId,
          purpose: purposeText,
          at: now,
        ),
      );
    }

    if (!contributedToCampaign(ownerName, campaignId)) {
      ownerMissed += 1;
      recordMissed(ownerName, ownerEmail);
    }
    for (final m in activeMembers) {
      if (!contributedToCampaign(m.name, campaignId)) {
        m.missed += 1;
        recordMissed(m.name, m.email);
      }
    }
  }

  List<NgmyCivicUserGroupMissedEntry> missedForMember(String name, String email) {
    final nameKey = name.trim().toLowerCase();
    final emailKey = email.toLowerCase().trim();
    return missedHistory
        .where(
          (e) =>
              e.memberEmail == emailKey ||
              e.memberName.trim().toLowerCase() == nameKey,
        )
        .toList();
  }

  bool clearMissedEntry({required String entryId}) {
    final idx = missedHistory.indexWhere((e) => e.id == entryId);
    if (idx < 0) return false;
    final entry = missedHistory.removeAt(idx);
    if (isOwner(entry.memberEmail)) {
      if (ownerMissed > 0) ownerMissed -= 1;
    } else {
      for (final m in members) {
        if (m.email == entry.memberEmail) {
          if (m.missed > 0) m.missed -= 1;
          break;
        }
      }
    }
    return true;
  }

  void clearMissedForCampaignContribution({
    required String memberName,
    required String memberEmail,
    required String campaignId,
  }) {
    final cid = campaignId.trim();
    if (cid.isEmpty) return;
    final emailKey = memberEmail.toLowerCase().trim();
    final nameKey = memberName.trim().toLowerCase();
    final ids = missedHistory
        .where(
          (e) =>
              e.campaignId == cid &&
              (e.memberEmail == emailKey ||
                  e.memberName.trim().toLowerCase() == nameKey),
        )
        .map((e) => e.id)
        .toList();
    for (final id in ids) {
      clearMissedEntry(entryId: id);
    }
  }

  int missedFor(String name, String email) {
    if (isOwner(email)) return ownerMissed;
    final e = email.toLowerCase().trim();
    try {
      return members.firstWhere((m) => m.email == e).missed;
    } catch (_) {
      return 0;
    }
  }

  String? emailForMemberName(String name) {
    final key = name.trim().toLowerCase();
    if (ownerName.trim().toLowerCase() == key) return ownerEmail;
    for (final m in activeMembers) {
      if (m.name.trim().toLowerCase() == key) return m.email;
    }
    return null;
  }

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
        'helpModeActive': helpModeActive,
        'helpPurpose': helpPurpose,
        'helpCashApp': helpCashApp,
        'helpZelle': helpZelle,
        'helpPhone': helpPhone,
        'helpCampaignId': helpCampaignId,
        if (helpCampaignStartedAt != null)
          'helpCampaignStartedAt': helpCampaignStartedAt!.toUtc().toIso8601String(),
        'ownerMissed': ownerMissed,
        'helpCampaignClosures': helpCampaignClosures,
        'missedHistory': missedHistory.map((e) => e.toJson()).toList(),
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
      helpModeActive: j['helpModeActive'] == true,
      helpPurpose: (j['helpPurpose'] ?? '').toString(),
      helpCashApp: (j['helpCashApp'] ?? '').toString(),
      helpZelle: (j['helpZelle'] ?? '').toString(),
      helpPhone: (j['helpPhone'] ?? '').toString(),
      helpCampaignId: (j['helpCampaignId'] ?? '').toString(),
      helpCampaignStartedAt:
          DateTime.tryParse((j['helpCampaignStartedAt'] ?? '').toString()),
      ownerMissed: j['ownerMissed'] is num ? (j['ownerMissed'] as num).toInt() : 0,
      helpCampaignClosures: j['helpCampaignClosures'] is List
          ? (j['helpCampaignClosures'] as List)
              .map((e) => e.toString())
              .where((e) => e.isNotEmpty)
              .toList()
          : null,
      missedHistory: asMaps(j['missedHistory'])
          .map(NgmyCivicUserGroupMissedEntry.fromJson)
          .toList(),
    );
  }
}

/// A Lightning group person, as the Civic Registry registrar sees them when enrolling.
class NgmyLightningUser {
  const NgmyLightningUser({required this.email, required this.name, required this.phone, required this.state, required this.address, required this.family, required this.groupCode});
  final String email;
  final String name;
  final String phone;
  final String state;
  final String address;
  final List<Map<String, String>> family;
  final String groupCode;

  factory NgmyLightningUser.fromMap(Map<String, dynamic> m) => NgmyLightningUser(
        email: (m['email'] ?? '').toString().toLowerCase().trim(),
        name: (m['name'] ?? '').toString().trim(),
        phone: (m['phone'] ?? '').toString(),
        state: (m['state'] ?? '').toString().trim(),
        address: (m['address'] ?? '').toString().trim(),
        family: m['family'] is List
            ? [
                for (final f in (m['family'] as List).whereType<Map>()) {for (final e in f.entries) '${e.key}': '${e.value}'}
              ]
            : const [],
        groupCode: (m['groupCode'] ?? '').toString(),
      );
}

String _lgState(String s) => s.toLowerCase().replaceAll(RegExp(r'[^a-z]'), '');

/// Everyone in Lightning groups who lives in [state]: what the server sent a registrar, plus the approved
/// people of every group this phone can see. One row per person.
List<NgmyLightningUser> ngmyLightningUsersForState(String state, {List<Map<String, dynamic>> fromServer = const [], List<NgmyCivicUserGroup> groups = const []}) {
  final want = _lgState(state);
  final out = <String, NgmyLightningUser>{};
  void add(NgmyLightningUser u) {
    if (u.email.isEmpty || u.name.isEmpty) return;
    if (want.isNotEmpty && _lgState(u.state) != want) return;
    final prev = out[u.email];
    // Keep the row that knows the most.
    if (prev == null || (u.phone.isNotEmpty && prev.phone.isEmpty) || (u.family.length > prev.family.length)) out[u.email] = u;
  }

  for (final m in fromServer) {
    add(NgmyLightningUser.fromMap(m));
  }
  for (final g in groups) {
    for (final m in g.activeMembers) {
      add(NgmyLightningUser(email: m.email, name: m.name, phone: m.phone, state: m.state, address: m.address, family: m.family, groupCode: g.inviteCode));
    }
  }
  return out.values.toList()..sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
}

/// The spouse and children the registrar should see when enrolling [person]: what they chose themselves, plus
/// what other group people said about them ("this is my mother" makes that person a child here).
List<Map<String, dynamic>> ngmyLightningRelatives(NgmyLightningUser person, List<NgmyLightningUser> everyone) {
  final out = <Map<String, dynamic>>[];
  final seen = <String>{};
  void add(String relation, String name, {String phone = '', String gender = ''}) {
    final key = '$relation|${name.trim().toLowerCase()}';
    if (name.trim().isEmpty || !seen.add(key)) return;
    out.add({
      'id': 'rel_lg_${out.length}_${name.hashCode.abs()}',
      'relation': relation,
      'fullName': name.trim(),
      'gender': gender,
      'dob': '',
      'age': null,
      'phone': phone.replaceAll(RegExp(r'\D'), ''),
      'idType': '',
      'address': '',
      'email': '',
      'status': relation == 'spouse' ? 'married' : 'single',
    });
  }

  for (final f in person.family) {
    final rel = (f['relation'] ?? '').toLowerCase();
    final name = f['name'] ?? '';
    if (rel == 'spouse') add('spouse', name);
    if (rel == 'child') add('child', name);
  }
  for (final other in everyone) {
    if (other.email == person.email) continue;
    for (final f in other.family) {
      if ((f['email'] ?? '').toLowerCase() != person.email && (f['name'] ?? '').trim().toLowerCase() != person.name.trim().toLowerCase()) continue;
      final rel = (f['relation'] ?? '').toLowerCase();
      if (rel == 'mother' || rel == 'father') add('child', other.name, phone: other.phone);
      if (rel == 'spouse') add('spouse', other.name, phone: other.phone);
    }
  }
  return out;
}

/// Local + settings-cloud store for lightning user groups.
abstract final class NgmyCivicUserGroupsStore {
  static const settingsKey = 'civic_user_groups_v1';
  static const _localKey = 'ngmy_civic_user_groups_v1';
  /// Uses the already-public essentials-code prefix so invite lookup works
  /// with current RLS and dbRelay (no new Edge action required).
  static const _inviteIndexPrefix = 'ngmy_essentials_code_v1_LGROUP_';
  static const _inviteIndexKind = 'ngmy_lightning_group';

  static List<NgmyCivicUserGroup>? _memoryCache;

  /// Lightning users in the registrar's state, as sent by the server (an Authorized Registrar only).
  static List<Map<String, dynamic>> registrarLightningUsers = const [];

  static List<NgmyCivicUserGroup> get cachedGroups =>
      List.unmodifiable(_memoryCache ?? const []);

  static NgmyCivicUserGroup? cachedById(String id) {
    final list = _memoryCache;
    if (list == null) return null;
    try {
      return list.firstWhere((g) => g.id == id);
    } catch (_) {
      return null;
    }
  }

  static List<NgmyCivicUserGroup> cachedOwnedBy(String email) {
    final e = email.toLowerCase().trim();
    return cachedGroups.where((g) => g.ownerEmail == e).toList();
  }

  static List<NgmyCivicUserGroup> cachedJoinedBy(String email) {
    final e = email.toLowerCase().trim();
    return cachedGroups
        .where((g) => g.isMember(e) && g.ownerEmail != e)
        .toList();
  }

  static void _setMemoryCache(List<NgmyCivicUserGroup> list) {
    _memoryCache = list;
  }

  static Future<void> warmCacheFromLocal() async {
    if (_memoryCache != null && _memoryCache!.isNotEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_localKey);
    if (raw == null || raw.isEmpty) return;
    try {
      final decoded = jsonDecode(raw);
      if (decoded is Map) {
        final groups = _groupsFromRoot(Map<String, dynamic>.from(decoded));
        _setMemoryCache(groups.values.toList()
          ..sort((a, b) => b.createdAt.compareTo(a.createdAt)));
      }
    } catch (_) {}
  }

  static String _newId() =>
      'cug_${DateTime.now().millisecondsSinceEpoch}_${math.Random().nextInt(1 << 20)}';

  static String _inviteIndexKey(String code) =>
      '$_inviteIndexPrefix${code.trim().toUpperCase()}';

  static Future<NgmyCivicUserGroup?> _fetchInviteIndex(String code) async {
    final c = ngmyParseCivicUserGroupInviteCode(code) ?? code.trim().toUpperCase();
    if (c.isEmpty) return null;
    try {
      final value = await ngmyFetchSettingsValueViaRest(_inviteIndexKey(c));
      if (value == null) return null;
      if ((value['kind'] ?? '').toString() != _inviteIndexKind) return null;
      final raw = value['group'];
      if (raw is! Map) return null;
      final group = NgmyCivicUserGroup.fromJson(Map<String, dynamic>.from(raw));
      return group.id.isEmpty ? null : group;
    } catch (_) {
      return null;
    }
  }

  /// The group as the public invite lookup may show it: no phone numbers, home addresses or family details.
  static Map<String, dynamic> _publicGroupJson(NgmyCivicUserGroup group) {
    final j = group.toJson();
    final members = j['members'];
    if (members is List) {
      j['members'] = [
        for (final m in members.whereType<Map>())
          {
            for (final e in m.entries)
              if (e.key != 'phone' && e.key != 'address' && e.key != 'family' && e.key != 'requestedAt') e.key: e.value,
          },
      ];
    }
    return j;
  }

  static Future<void> _publishInviteIndex(NgmyCivicUserGroup group) async {
    final ok = await ngmyUpsertSettingsRowReliable(
      _inviteIndexKey(group.inviteCode),
      {
        'kind': _inviteIndexKind,
        'group': _publicGroupJson(group),
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      },
    );
    if (!ok) {
      throw StateError(
        'Could not publish this group code. Check your connection and try again.',
      );
    }
  }

  static NgmyCivicUserGroup _preferRicher(
    NgmyCivicUserGroup a,
    NgmyCivicUserGroup b,
  ) {
    if (b.memberCount > a.memberCount) return b;
    if (a.memberCount > b.memberCount) return a;
    if (b.ledger.length > a.ledger.length) return b;
    if (a.ledger.length > b.ledger.length) return a;
    if (b.helpModeActive && !a.helpModeActive) return b;
    return a;
  }

  static Future<Map<String, NgmyCivicUserGroup>> _hydrateFromInviteIndexes(
    Map<String, NgmyCivicUserGroup> groups,
  ) async {
    final out = Map<String, NgmyCivicUserGroup>.from(groups);
    for (final entry in groups.entries) {
      final indexed = await _fetchInviteIndex(entry.value.inviteCode);
      if (indexed == null) {
        try {
          await _publishInviteIndex(entry.value);
        } catch (_) {}
        continue;
      }
      final richer = _preferRicher(entry.value, indexed);
      out[richer.id] = richer;
      if (richer.id != entry.key) out.remove(entry.key);
    }
    return out;
  }

  static Future<Map<String, dynamic>?> _fetchCloudRoot() async {
    final data = await ngmyCivicInvoke({'action': 'civicUserGroupsFetch'});
    if (data != null && data['ok'] == true && data['value'] is Map) {
      return Map<String, dynamic>.from(data['value'] as Map);
    }
    return ngmyFetchSettingsValueViaRest(settingsKey);
  }

  static Future<Map<String, dynamic>?> _persistCloudRoot(
    Map<String, dynamic> root,
  ) async {
    final data = await ngmyCivicInvoke({
      'action': 'civicUserGroupsPersist',
      'value': root,
    });
    if (data != null && data['ok'] == true && data['value'] is Map) {
      return Map<String, dynamic>.from(data['value'] as Map);
    }
    final err = (data?['error'] ?? '').toString().trim();
    if (data != null && data['ok'] == false && err.contains('already taken')) {
      throw StateError(err);
    }
    final ok = await ngmyUpsertSettingsRowReliable(settingsKey, root);
    return ok ? root : null;
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
    var root = local;
    final remote = await _fetchCloudRoot();
    if (remote != null && remote['registrarLightningUsers'] is List) {
      registrarLightningUsers = [for (final u in (remote['registrarLightningUsers'] as List).whereType<Map>()) Map<String, dynamic>.from(u)];
    }
    if (remote != null) {
      final remoteGroups = _groupsFromRoot(remote);
      final localGroups = _groupsFromRoot(local);
      if (remoteGroups.isNotEmpty || localGroups.isEmpty) {
        root = remote;
        for (final e in localGroups.entries) {
          remoteGroups.putIfAbsent(e.key, () => e.value);
        }
        if (remoteGroups.isNotEmpty) {
          root = Map<String, dynamic>.from(remote);
          root['groups'] = {
            for (final e in remoteGroups.entries) e.key: e.value.toJson(),
          };
        }
      } else {
        root = local;
      }
    }
    final hydrated = await _hydrateFromInviteIndexes(_groupsFromRoot(root));
    root = Map<String, dynamic>.from(root);
    root['groups'] = {for (final e in hydrated.entries) e.key: e.value.toJson()};
    await prefs.setString(_localKey, jsonEncode(root));
    return root;
  }

  static Future<void> _saveRoot(Map<String, dynamic> root) async {
    root['updatedAt'] = DateTime.now().toUtc().toIso8601String();
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_localKey, jsonEncode(root));
    Map<String, dynamic>? saved;
    try {
      saved = await _persistCloudRoot(root);
    } on StateError catch (e) {
      if (e.message.contains('already taken')) rethrow;
    }
    final groups = _groupsFromRoot(saved ?? root);
    if (groups.isEmpty) {
      throw StateError(
        'Could not sync this group to the cloud. Check your connection and try again.',
      );
    }
    for (final group in groups.values) {
      await _publishInviteIndex(group);
    }
    final stored = saved ?? root;
    stored['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
    await prefs.setString(_localKey, jsonEncode(stored));
    final list = groups.values.toList()
      ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
    _setMemoryCache(list);
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
    _setMemoryCache(list);
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
    final indexed = await _fetchInviteIndex(c);
    if (indexed != null) return indexed;
    final data = await ngmyCivicInvoke({
      'action': 'civicUserGroupsFind',
      'code': c,
    });
    if (data != null && data.containsKey('group') && data['group'] is Map) {
      return NgmyCivicUserGroup.fromJson(
        Map<String, dynamic>.from(data['group'] as Map),
      );
    }
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

  /// Groups this person has asked to join and is still waiting to be approved for.
  static Future<List<NgmyCivicUserGroup>> waitingFor(String email) async {
    final e = email.toLowerCase().trim();
    return (await loadAll()).where((g) => g.isPending(e)).toList();
  }

  static Future<List<NgmyCivicUserGroup>> joinedBy(String email) async {
    final e = email.toLowerCase().trim();
    return (await loadAll())
        .where((g) => g.isMember(e) && g.ownerEmail != e)
        .toList();
  }

  static Future<NgmyCivicUserGroup> createGroup({
    required String inviteCode,
    required String ownerEmail,
    required String ownerName,
  }) async {
    final code = inviteCode.trim().toUpperCase();
    if (!ngmyCivicUserGroupCodeIsValid(code)) {
      throw ArgumentError('Group code must be 3 letters + 1–5 numbers (e.g. ABC123).');
    }
    final root = await _loadRoot();
    final groups = _groupsFromRoot(root);
    if (groups.values.any((g) => g.inviteCode == code)) {
      throw StateError('That group code is already taken. Try another.');
    }
    final taken = await findByInviteCode(code);
    if (taken != null) {
      throw StateError('That group code is already taken. Try another.');
    }
    final group = NgmyCivicUserGroup(
      id: _newId(),
      name: code,
      ownerEmail: ownerEmail.toLowerCase().trim(),
      ownerName: ownerName.trim().isEmpty ? 'Owner' : ownerName.trim(),
      inviteCode: code,
      createdAt: DateTime.now().toUtc(),
    );
    groups[group.id] = group;
    root['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
    await _saveRoot(root);
    await _publishInviteIndex(cachedById(group.id) ?? group);
    return cachedById(group.id) ?? group;
  }

  static Future<void> saveGroup(NgmyCivicUserGroup group) async {
    final root = await _loadRoot();
    final groups = _groupsFromRoot(root);
    groups[group.id] = _withPreservedMembers(group, groups[group.id]);
    root['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
    await _saveRoot(root);
  }

  static NgmyCivicUserGroup _withPreservedMembers(
    NgmyCivicUserGroup incoming,
    NgmyCivicUserGroup? existing,
  ) {
    if (existing == null) return incoming;
    final have = incoming.members.map((m) => m.email).toSet();
    for (final m in existing.members) {
      if (!have.contains(m.email)) incoming.members.add(m);
    }
    return incoming;
  }

  static void _upsertMemoryGroup(NgmyCivicUserGroup group) {
    _memoryCache ??= [];
    final idx = _memoryCache!.indexWhere((g) => g.id == group.id);
    if (idx >= 0) {
      _memoryCache![idx] = group;
    } else {
      _memoryCache!.insert(0, group);
    }
  }

  static void _removeMemoryGroup(String id) {
    _memoryCache?.removeWhere((g) => g.id == id);
  }

  static Future<void> deleteGroup(String id) async {
    final root = await _loadRoot();
    final groups = _groupsFromRoot(root);
    groups.remove(id);
    root['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
    await _saveRoot(root);
    _removeMemoryGroup(id);
  }

  /// Asks to join. Nobody gets in just by having the code: the person is added as 'pending' with their details,
  /// and the group owner has to approve them.
  static Future<NgmyCivicUserGroup?> requestJoin({
    required String inviteCode,
    required String email,
    required String name,
    required String phone,
    required String state,
    required String address,
    List<Map<String, String>> family = const [],
  }) async {
    final code = ngmyParseCivicUserGroupInviteCode(inviteCode) ?? inviteCode.trim().toUpperCase();
    if (code.isEmpty) return null;
    final group = await findByInviteCode(code);
    if (group == null) return null;
    final e = email.toLowerCase().trim();
    if (group.isMember(e) || group.isPending(e)) return group;
    group.members.removeWhere((m) => m.email == e);
    group.members.add(
      NgmyCivicUserGroupMember(
        email: e,
        name: name.trim().isEmpty ? e.split('@').first : name.trim(),
        joinedAt: DateTime.now().toUtc(),
        status: 'pending',
        phone: phone.trim(),
        state: state.trim(),
        address: address.trim(),
        family: family,
        requestedAt: DateTime.now().toUtc(),
      ),
    );
    await saveGroup(group);
    return cachedById(group.id) ?? group;
  }

  /// The owner lets a waiting person in.
  static Future<bool> approveRequest({required String groupId, required String memberEmail}) async {
    final group = await findById(groupId);
    if (group == null) return false;
    final e = memberEmail.toLowerCase().trim();
    final i = group.members.indexWhere((m) => m.email == e && m.isPending);
    if (i < 0) return false;
    group.members[i].status = 'active';
    await saveGroup(group);
    return true;
  }

  /// The owner says no. The person can ask again later.
  static Future<bool> declineRequest({required String groupId, required String memberEmail, String? declinedByEmail}) =>
      removeMember(groupId: groupId, memberEmail: memberEmail, removedByEmail: declinedByEmail, note: 'Join request declined');

  static Future<NgmyCivicUserGroup?> joinByCode({
    required String inviteCode,
    required String email,
    required String name,
  }) async {
    final code =
        ngmyParseCivicUserGroupInviteCode(inviteCode) ?? inviteCode.trim().toUpperCase();
    if (code.isEmpty) return null;
    final data = await ngmyCivicInvoke({
      'action': 'civicUserGroupsJoin',
      'code': code,
      'name': name,
    });
    if (data != null &&
        data.containsKey('alreadyMember') &&
        data['ok'] == true &&
        data['group'] is Map) {
      final group = NgmyCivicUserGroup.fromJson(
        Map<String, dynamic>.from(data['group'] as Map),
      );
      await _mergeGroupIntoLocalPrefs(group);
      try {
        await _publishInviteIndex(group);
      } catch (_) {}
      return group;
    }
    final group = await findByInviteCode(code);
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
    return cachedById(group.id) ?? group;
  }

  static Future<void> _mergeGroupIntoLocalPrefs(NgmyCivicUserGroup group) async {
    _upsertMemoryGroup(group);
    try {
      final prefs = await SharedPreferences.getInstance();
      Map<String, dynamic> local = {'groups': <String, dynamic>{}};
      final raw = prefs.getString(_localKey);
      if (raw != null && raw.isNotEmpty) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) local = Map<String, dynamic>.from(decoded);
      }
      final groups = _groupsFromRoot(local);
      groups[group.id] = group;
      local['groups'] = {for (final e in groups.entries) e.key: e.value.toJson()};
      local['updatedAt'] = DateTime.now().toUtc().toIso8601String();
      await prefs.setString(_localKey, jsonEncode(local));
    } catch (_) {}
  }

  static Future<bool> removeMember({
    required String groupId,
    required String memberEmail,
    String? memberName,
    String? removedByEmail,
    String note = 'Removed from group',
  }) async {
    final group = await findById(groupId);
    if (group == null) return false;
    final e = memberEmail.toLowerCase().trim();
    if (group.isOwner(e)) return false;
    String display = (memberName ?? '').trim();
    if (display.isEmpty) {
      try {
        display = group.members.firstWhere((m) => m.email == e).name.trim();
      } catch (_) {
        display = e.contains('@') ? e.split('@').first : e;
      }
    }
    if (display.isEmpty) display = 'Member';
    final before = group.members.length;
    group.members.removeWhere((m) => m.email == e);
    if (group.members.length == before) return false;
    group.ledger.insert(
      0,
      NgmyCivicUserGroupLedgerEntry(
        id: _newId(),
        kind: NgmyCivicUserGroupLedgerKind.memberRemoved,
        amount: 0,
        label: display,
        note: note,
        at: DateTime.now().toUtc(),
        byEmail: (removedByEmail ?? '').toLowerCase().trim(),
        memberEmail: e,
      ),
    );
    await saveGroup(group);
    return true;
  }
}
