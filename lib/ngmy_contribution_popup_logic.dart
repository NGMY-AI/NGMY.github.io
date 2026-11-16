import 'dart:convert';

import 'main.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_registry_stats.dart';

// Who should get the contribution pop-up when the app opens: a member of a state that has a help (contribution) campaign going, inside the
// campaign's circle (everyone, a city or a room), who has not contributed to THIS campaign yet.

/// Every Civic Registry record that belongs to this app account, found every way the registry links them: the same email, the
/// registry number on the account, the "linked app email" set when the ID card was granted, or a granted ID card with the same phone.
/// (The pop-up used to know only the first two, so a member whose registry record has a different email than their login looked like
/// they had never given, while the registrar's list showed them as contributed.)
List<Map<String, dynamic>> ngmyRegistryRecordsForAccount(AppConfig config, UserData u) {
  final out = <Map<String, dynamic>>[];
  final seen = <String>{};
  void add(Map<String, dynamic>? m) {
    if (m == null) return;
    final id = '${NgmyCivicRegistryMembers.emailKey((m['email'] ?? '').toString())}0001${(m['registryId'] ?? '').toString().trim().toUpperCase()}';
    if (seen.add(id)) out.add(m);
  }
  final me = NgmyCivicRegistryMembers.emailKey(u.email);
  add(NgmyCivicRegistryMembers.findByEmail(config, u.email));
  if ((u.registryId ?? '').trim().isNotEmpty) add(NgmyCivicRegistryMembers.findByRegistryId(config, u.registryId!));
  try {
    add(NgmyCivicRegistryMembers.passportForAppUser(config, email: u.email, phone: u.phone));
  } catch (_) {}
  if (me.isNotEmpty) {
    for (final m in NgmyCivicRegistryMembers.listFrom(config)) {
      if (NgmyCivicRegistryMembers.emailKey((m['linkedAppEmail'] ?? '').toString()) == me) add(Map<String, dynamic>.from(m));
    }
  }
  return out;
}

/// What the registrar wrote on the member's own record when recording a contribution: campaign id -> total given.
/// It travels with the member list to every phone, so the member's phone knows even before the money records arrive.
double ngmyRecordStampedContribution(Map<String, dynamic> record, String campaignId) {
  final raw = record['contribCampaigns'];
  if (raw is! Map || campaignId.trim().isEmpty) return 0;
  final v = raw[campaignId.trim()];
  return v is num ? v.toDouble() : (double.tryParse('${v ?? ''}') ?? 0);
}

/// Writes "this member gave [total] to [campaignId]" onto the member's registry record (the registrar's phone does this when it
/// records a contribution; the list is then saved to the cloud as usual).
void ngmyStampMemberContribution(AppConfig config, {required String email, required String registryId, required String campaignId, required double total}) {
  if (campaignId.trim().isEmpty || total <= 0) return;
  final rec = NgmyCivicRegistryMembers.findByEmail(config, email) ?? (registryId.trim().isNotEmpty ? NgmyCivicRegistryMembers.findByRegistryId(config, registryId) : null);
  if (rec == null) return;
  final stamps = <String, dynamic>{...(rec['contribCampaigns'] is Map ? Map<String, dynamic>.from(rec['contribCampaigns'] as Map) : const <String, dynamic>{})};
  stamps[campaignId.trim()] = total;
  NgmyCivicRegistryMembers.upsert(config, {...rec, 'contribCampaigns': stamps});
}

/// The state a member belongs to: the Civic Registry state when they are enrolled, else the state of the account.
String ngmyMemberStateForContribution(AppConfig config, UserData u) {
  final recs = ngmyRegistryRecordsForAccount(config, u);
  final registry = recs.isEmpty ? null : recs.first;
  final s = (registry?['state'] ?? '').toString().trim();
  return s.isNotEmpty ? s : u.state.trim();
}

/// Is [u] inside the circle the campaign of [state] asks (all members, one city, or one room)?
bool ngmyMemberInHelpScope(AppConfig config, UserData u, String state) {
  if (!config.helpActiveFor(state)) return false;
  final type = config.helpScopeTypeFor(state);
  final value = config.helpScopeValueFor(state).trim();
  if (type != 'city' && type != 'room') return true;
  if (value.isEmpty) return false;
  final recs = ngmyRegistryRecordsForAccount(config, u);
  final registry = recs.isEmpty ? null : recs.first;
  final city = ((registry?['city'] ?? u.city) ?? '').toString().trim();
  final room = ((registry?['room'] ?? u.room) ?? '').toString().trim();
  return (type == 'city' ? city : room).toLowerCase() == value.toLowerCase();
}

String _campaignIdFor(AppConfig config, String state) {
  final stored = config.helpCampaignIdFor(state);
  if (stored.isNotEmpty) return stored;
  return '${config.helpPurposeFor(state)}|${config.helpScopeTypeFor(state)}|${config.helpScopeValueFor(state)}|$state';
}

/// Has [u] an approved contribution to the campaign that is going now in [state] (a contribution to an earlier campaign does not count)?
bool ngmyMemberContributedToCampaign(AppConfig config, UserData u, Iterable<AppTransaction> all, String state) =>
    ngmyMemberCampaignContributions(config, u, all, state).isNotEmpty;

/// How much [u] has given to the campaign that is going now in [state] (0 when nothing).
double ngmyMemberCampaignTotal(AppConfig config, UserData u, Iterable<AppTransaction> all, String state) =>
    ngmyMemberCampaignContributions(config, u, all, state).fold<double>(0, (a, t) => a + (t.amount > 0 ? t.amount : 0));

/// The approved contributions of [u] to the campaign going now in [state], each record once. The member is recognised the same way the registrar's
/// own report does it: by the email of the record, the member email written inside it, or the registry number.
List<AppTransaction> ngmyMemberCampaignContributions(AppConfig config, UserData u, Iterable<AppTransaction> all, String state) {
  final found = <String, AppTransaction>{};
  final campaignId = _campaignIdFor(config, state).trim();
  final startedAt = DateTime.tryParse(config.helpCampaignStartedAtFor(state).trim());
  final emailKey = NgmyCivicRegistryMembers.emailKey(u.email);
  final recs = ngmyRegistryRecordsForAccount(config, u);
  final rids = <String>{
    (u.registryId ?? '').trim().toUpperCase(),
    for (final r in recs) (r['registryId'] ?? '').toString().trim().toUpperCase(),
  }..remove('');
  final emails = <String>{
    if (emailKey.isNotEmpty) emailKey,
    for (final r in recs) NgmyCivicRegistryMembers.emailKey((r['email'] ?? '').toString()),
    for (final r in recs) NgmyCivicRegistryMembers.emailKey((r['linkedAppEmail'] ?? '').toString()),
  }..remove('');
  final deleted = config.civicDeletedContributionIds.map((e) => e.trim()).where((e) => e.isNotEmpty).toSet();
  for (final t in all) {
    if (t.type != TransactionType.contribution || t.status != TransactionStatus.approved) continue;
    if (deleted.contains(t.id)) continue;
    Map<String, dynamic> meta = const {};
    final raw = t.sourceDetails?.trim() ?? '';
    if (raw.isNotEmpty) {
      try {
        final d = jsonDecode(raw);
        if (d is Map) meta = Map<String, dynamic>.from(d);
      } catch (_) {}
    }
    final metaEmail = NgmyCivicRegistryMembers.emailKey((meta['memberEmail'] ?? '').toString());
    final metaAppEmail = NgmyCivicRegistryMembers.emailKey((meta['appEmail'] ?? '').toString());
    final mine = emails.contains(NgmyCivicRegistryMembers.emailKey(t.userEmail)) ||
        (metaEmail.isNotEmpty && emails.contains(metaEmail)) ||
        // The registrar wrote this member's app login into the record.
        (metaAppEmail.isNotEmpty && metaAppEmail == emailKey) ||
        rids.contains((meta['registryId'] ?? '').toString().trim().toUpperCase()) ||
        rids.any((rid) => t.id.toUpperCase().contains(rid)) ||
        emails.any((e) => t.id.toLowerCase().startsWith('contrib_${e}_'));
    if (!mine) continue;
    final cid = (meta['campaignId'] ?? '').toString().trim();
    final receiptState = (meta['state'] ?? '').toString().trim();
    if (receiptState.isNotEmpty && !NgmyCivicRegistryStats.statesMatch(receiptState, state)) continue;
    // The same rule the registrar's list uses: the campaign number is the one going now, or the gift was recorded after this campaign began
    // (a registrar phone that had not yet received the newest campaign number must not make the member look like a non-giver).
    if (campaignId.isNotEmpty && cid == campaignId) {
      found[t.id] = t;
    } else if (startedAt != null && !t.timestamp.isBefore(startedAt)) {
      found[t.id] = t;
    }
  }
  return found.values.toList();
}

/// Today as a key, for "once a day".
String ngmyTodayKey([DateTime? now]) {
  final d = (now ?? DateTime.now()).toLocal();
  return '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';
}

/// Half of today as a key, for the thank-you pop-up: it may show once before noon and once after noon (twice a day),
/// for as long as the campaign is going.
String ngmyHalfDayKey([DateTime? now]) {
  final d = (now ?? DateTime.now()).toLocal();
  return '${ngmyTodayKey(d)}-${d.hour < 12 ? 'am' : 'pm'}';
}
