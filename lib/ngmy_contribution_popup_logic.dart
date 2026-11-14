import 'dart:convert';

import 'main.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_registry_stats.dart';

// Who should get the contribution pop-up when the app opens: a member of a state that has a help (contribution) campaign going, inside the
// campaign's circle (everyone, a city or a room), who has not contributed to THIS campaign yet.

/// The state a member belongs to: the Civic Registry state when they are enrolled, else the state of the account.
String ngmyMemberStateForContribution(AppConfig config, UserData u) {
  final registry = NgmyCivicRegistryMembers.findByEmail(config, u.email) ?? (((u.registryId ?? '').trim().isNotEmpty) ? NgmyCivicRegistryMembers.findByRegistryId(config, u.registryId!) : null);
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
  final registry = NgmyCivicRegistryMembers.findByEmail(config, u.email) ?? (((u.registryId ?? '').trim().isNotEmpty) ? NgmyCivicRegistryMembers.findByRegistryId(config, u.registryId!) : null);
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
  final rid = (u.registryId ?? '').trim().toUpperCase();
  final registry = NgmyCivicRegistryMembers.findByEmail(config, u.email) ?? (rid.isNotEmpty ? NgmyCivicRegistryMembers.findByRegistryId(config, u.registryId!) : null);
  final emails = <String>{
    if (emailKey.isNotEmpty) emailKey,
    if (registry != null) NgmyCivicRegistryMembers.emailKey((registry['email'] ?? '').toString()),
    if (registry != null) NgmyCivicRegistryMembers.emailKey((registry['linkedAppEmail'] ?? '').toString()),
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
    final mine = emails.contains(NgmyCivicRegistryMembers.emailKey(t.userEmail)) ||
        (metaEmail.isNotEmpty && emails.contains(metaEmail)) ||
        (rid.isNotEmpty && ((meta['registryId'] ?? '').toString().trim().toUpperCase() == rid || t.id.toUpperCase().contains(rid)));
    if (!mine) continue;
    final cid = (meta['campaignId'] ?? '').toString().trim();
    if (campaignId.isNotEmpty && cid.isNotEmpty) {
      if (cid == campaignId) found[t.id] = t;
      continue;
    }
    // An old row without a campaign number: it counts only when it was made after this campaign began, in this state.
    if (cid.isEmpty && startedAt != null && !t.timestamp.isBefore(startedAt)) {
      final receiptState = (meta['state'] ?? '').toString().trim();
      if (receiptState.isEmpty || NgmyCivicRegistryStats.statesMatch(receiptState, state)) found[t.id] = t;
    }
  }
  return found.values.toList();
}

/// Today as a key, for "once a day".
String ngmyTodayKey([DateTime? now]) {
  final d = (now ?? DateTime.now()).toLocal();
  return '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';
}
