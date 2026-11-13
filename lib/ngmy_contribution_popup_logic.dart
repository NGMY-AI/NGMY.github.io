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
bool ngmyMemberContributedToCampaign(AppConfig config, UserData u, Iterable<AppTransaction> all, String state) {
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
    final mine = emails.contains(NgmyCivicRegistryMembers.emailKey(t.userEmail)) || (rid.isNotEmpty && (meta['registryId'] ?? '').toString().trim().toUpperCase() == rid);
    if (!mine) continue;
    final cid = (meta['campaignId'] ?? '').toString().trim();
    if (campaignId.isNotEmpty && cid.isNotEmpty) {
      if (cid == campaignId) return true;
      continue;
    }
    // An old row without a campaign number: it counts only when it was made after this campaign began, in this state.
    if (cid.isEmpty && startedAt != null && !t.timestamp.isBefore(startedAt)) {
      final receiptState = (meta['state'] ?? '').toString().trim();
      if (receiptState.isEmpty || NgmyCivicRegistryStats.statesMatch(receiptState, state)) return true;
    }
  }
  return false;
}
