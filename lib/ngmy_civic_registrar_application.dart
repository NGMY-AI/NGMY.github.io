import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Per-user backup for Authorized Registrar applications (survives refresh / stale config sync).
class NgmyCivicRegistrarApplication {
  static String _prefsKey(String email) =>
      'ngmy_registrar_app_${email.toLowerCase().trim()}';

  static Future<Map<String, dynamic>?> load(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey(email));
      if (raw == null || raw.trim().isEmpty) return null;
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return null;
      return Map<String, dynamic>.from(decoded);
    } catch (_) {
      return null;
    }
  }

  static Future<void> save(String email, Map<String, dynamic> application) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey(email), jsonEncode(application));
    } catch (_) {}
  }

  static Future<void> clear(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(_prefsKey(email));
    } catch (_) {}
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static String _statusOf(Map<String, dynamic> a) =>
      (a['status'] ?? 'pending').toString().toLowerCase();

  /// Pending only when this person's newest row is pending. An old pending
  /// row left behind next to a later revoke/reject no longer hides Apply.
  static bool isPendingForEmail(
    Iterable<Map<String, dynamic>> applications,
    String email,
  ) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    final newest = newestRowForEmail(applications, key);
    return newest != null && _statusOf(newest) == 'pending';
  }

  /// How long a request the server has not received yet is still resent.
  static const Duration freshRequestWindow = Duration(minutes: 30);

  static bool isFreshRequest(Map<String, dynamic> row, {String? now}) {
    final created = DateTime.tryParse((row['createdAt'] ?? '').toString())?.toUtc();
    if (created == null) return false;
    final at = DateTime.tryParse((now ?? '').trim())?.toUtc() ?? DateTime.now().toUtc();
    return at.difference(created) <= freshRequestWindow;
  }

  static bool isApprovedForEmail(
    Iterable<Map<String, dynamic>> applications,
    String email,
  ) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    return applications.any(
      (a) =>
          (a['userEmail'] ?? '').toString().toLowerCase().trim() == key &&
          _statusOf(a) == 'approved',
    );
  }

  static bool isRevokedForEmail(
    Iterable<Map<String, dynamic>> applications,
    String email,
  ) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    return applications.any(
      (a) =>
          (a['userEmail'] ?? '').toString().toLowerCase().trim() == key &&
          _statusOf(a) == 'revoked',
    );
  }

  static bool isRejectedForEmail(
    Iterable<Map<String, dynamic>> applications,
    String email,
  ) {
    if (isPendingForEmail(applications, email)) return false;
    if (isApprovedForEmail(applications, email)) return false;
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    return applications.any(
      (a) =>
          (a['userEmail'] ?? '').toString().toLowerCase().trim() == key &&
          _statusOf(a) == 'rejected',
    );
  }

  static List<String> revokeVotesOf(Map<String, dynamic> application) {
    final raw = application['revokeVotes'];
    if (raw is! List) return const [];
    final seen = <String>{};
    final out = <String>[];
    for (final item in raw) {
      final key = _emailKey(item.toString());
      if (key.isEmpty || looksMaskedEmail(key) || seen.contains(key)) continue;
      seen.add(key);
      out.add(key);
    }
    return out;
  }

  static bool hasPendingRevoke(Map<String, dynamic> application) {
    return _statusOf(application) == 'approved' && revokeVotesOf(application).isNotEmpty;
  }

  static bool reviewerHasRevokeVote(Map<String, dynamic> application, String email) {
    return revokeVotesOf(application).contains(_emailKey(email));
  }

  /// Admins act alone. One Authorized Registrar in the state can revoke
  /// alone. Two or more ARs means a second registrar must confirm.
  static bool revokeNeedsSecondRegistrar({
    required int activeRegistrarCount,
    required bool reviewerIsAdmin,
  }) {
    if (reviewerIsAdmin) return false;
    return activeRegistrarCount >= 2;
  }

  static Map<String, dynamic> addRevokeVote(
    Map<String, dynamic> application,
    String email, {
    String? at,
  }) {
    final next = Map<String, dynamic>.from(application);
    final votes = [...revokeVotesOf(next)];
    final key = _emailKey(email);
    if (key.isNotEmpty && !votes.contains(key)) votes.add(key);
    final stamp = (at ?? '').trim().isEmpty ? DateTime.now().toUtc().toIso8601String() : at!.trim();
    next['revokeVotes'] = votes;
    next['revokeRequestedBy'] = votes.isEmpty ? '' : (next['revokeRequestedBy'] ?? votes.first);
    next['revokeRequestedAt'] = (next['revokeRequestedAt'] ?? '').toString().trim().isEmpty
        ? stamp
        : next['revokeRequestedAt'];
    next['updatedAt'] = stamp;
    return next;
  }

  static Map<String, dynamic> clearRevokeVotes(Map<String, dynamic> application) {
    final next = Map<String, dynamic>.from(application);
    next.remove('revokeVotes');
    next.remove('revokeRequestedBy');
    next.remove('revokeRequestedAt');
    return next;
  }

  static bool revokeVoteCompletes({
    required Map<String, dynamic> application,
    required String voterEmail,
    required int activeRegistrarCount,
    required bool reviewerIsAdmin,
    String targetEmail = '',
  }) {
    if (reviewerIsAdmin) return true;
    if (activeRegistrarCount < 2) return true;
    final votes = [...revokeVotesOf(application)];
    final key = _emailKey(voterEmail);
    final target = _emailKey(targetEmail);
    if (key.isNotEmpty && key != target && !votes.contains(key)) votes.add(key);
    return votes.where((e) => e != target).length >= 2;
  }

  /// Rejected or revoked applicants may submit a new application.
  static bool canReapply({
    required Iterable<Map<String, dynamic>> applications,
    required String email,
  }) {
    if (isPendingForEmail(applications, email)) return false;
    if (isApprovedForEmail(applications, email)) return false;
    return true;
  }

  static bool looksMaskedEmail(String email) {
    final s = email.trim();
    return s == '***' || s.contains('***');
  }

  /// Persist/merge must never replace a real applicant email with `l***@…`.
  static Map<String, dynamic> preserveApplicantIdentity({
    required Map<String, dynamic> incoming,
    Map<String, dynamic>? existing,
  }) {
    final copy = Map<String, dynamic>.from(incoming);
    if (existing == null) return copy;
    final incomingEmail = (copy['userEmail'] ?? copy['email'] ?? '').toString();
    final existingEmail = (existing['userEmail'] ?? existing['email'] ?? '').toString();
    if (looksMaskedEmail(incomingEmail) &&
        existingEmail.trim().isNotEmpty &&
        !looksMaskedEmail(existingEmail)) {
      copy['userEmail'] = existingEmail;
    }
    if (copy['revokeVotes'] == null && existing['revokeVotes'] != null) {
      copy['revokeVotes'] = existing['revokeVotes'];
    }
    for (final f in ['fullName', 'applicantName', 'phone', 'reason', 'experience', 'username', 'revokeRequestedBy']) {
      final inc = (copy[f] ?? '').toString().trim();
      final ex = (existing[f] ?? '').toString().trim();
      if ((inc.isEmpty || looksMaskedEmail(inc) || inc == '***') && ex.isNotEmpty) {
        copy[f] = existing[f];
      }
    }
    return {...existing, ...copy};
  }

  /// True when user should have registrar access (config + optional local backup).
  static bool hasRegistrarAccess({
    required Iterable<Map<String, dynamic>> applications,
    required String email,
    required bool userFlag,
    Map<String, dynamic>? localBackup,
    bool cloudSaysRegistrar = false,
  }) {
    if (isRevokedForEmail(applications, email)) return false;
    if (isRejectedForEmail(applications, email)) return false;
    if (localBackup != null && _statusOf(localBackup) == 'revoked') return false;
    if (localBackup != null && _statusOf(localBackup) == 'rejected') return false;
    if (isApprovedForEmail(applications, email)) return true;
    if (localBackup != null && _statusOf(localBackup) == 'approved') return true;
    // Only trust flags when there is no application row denying access.
    if (userFlag || cloudSaysRegistrar) return true;
    return false;
  }

  /// Authorized Registrars (and King/Admin) never fill Verify your membership.
  static bool shouldSkipMembershipVerify({
    required String email,
    required bool isAuthorizedRegistrar,
    bool isCivicRegistryKing = false,
    bool isCivicRegistryAdmin = false,
    Iterable<Map<String, dynamic>> applications = const [],
    Map<String, dynamic>? localBackup,
    bool cloudSaysRegistrar = false,
  }) {
    if (isCivicRegistryKing || isCivicRegistryAdmin) return true;
    return hasRegistrarAccess(
      applications: applications,
      email: email,
      userFlag: isAuthorizedRegistrar,
      localBackup: localBackup,
      cloudSaysRegistrar: cloudSaysRegistrar,
    );
  }

  /// Network summaries mask other people's emails. Own rows keep the real
  /// address so the signed-in registrar is recognizable on every device.
  static List<Map<String, dynamic>> combineNetworkAndOwn({
    Iterable<dynamic> network = const [],
    Iterable<dynamic> own = const [],
  }) {
    List<Map<String, dynamic>> mapsOf(Iterable<dynamic> raw) => raw
        .whereType<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .toList();

    final byId = <String, Map<String, dynamic>>{};
    final extra = <Map<String, dynamic>>[];
    void take(Map<String, dynamic> row, {required bool prefer}) {
      final copy = Map<String, dynamic>.from(row);
      final id = (copy['id'] ?? '').toString().trim();
      if (id.isEmpty) {
        extra.add(copy);
        return;
      }
      if (!prefer && byId.containsKey(id)) return;
      byId[id] = copy;
    }

    for (final row in mapsOf(network)) {
      take(row, prefer: false);
    }
    for (final row in mapsOf(own)) {
      take(row, prefer: true);
    }
    return [...byId.values, ...extra];
  }

  /// One application record per person, always — replaces every prior row
  /// for this email (regardless of its status) with [application]. Used
  /// to only replace same-status rows, which meant a revoke→reapply cycle
  /// left the old "revoked" row behind (different status, so it survived)
  /// AND added a new "pending" row — two cards for the same person in the
  /// admin's Requests list, compounding by one more row every cycle. A
  /// missing/empty email never matches another row so it can never wipe
  /// out unrelated applicants.
  static List<Map<String, dynamic>> upsertInList(
    List<Map<String, dynamic>> list,
    Map<String, dynamic> application,
  ) {
    final email = (application['userEmail'] ?? '').toString().toLowerCase().trim();
    final id = (application['id'] ?? '').toString().trim();
    final kept = list
        .where((a) {
          if (id.isNotEmpty && (a['id'] ?? '').toString().trim() == id) return false;
          if (email.isEmpty) return true;
          return (a['userEmail'] ?? '').toString().toLowerCase().trim() != email;
        })
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
    kept.add(Map<String, dynamic>.from(application));
    return kept;
  }

  static DateTime? _rowTimestamp(Map<String, dynamic> a) {
    final raw = (a['reviewedAt'] ?? a['updatedAt'] ?? a['revokedAt'] ?? a['createdAt'] ?? '').toString();
    if (raw.trim().isEmpty) return null;
    return DateTime.tryParse(raw)?.toUtc();
  }

  /// Merges a device-local application backup into [list] for [email] —
  /// but only if it's actually more recent than whatever's already
  /// there. This backup is written once, on the applicant's own device,
  /// when they submit an application — it is never updated there again
  /// when an admin later approves/revokes/restores remotely, on a
  /// different device. Every app bootstrap on the applicant's own phone
  /// calls this to fold that backup back in, so blindly replacing an
  /// existing row (e.g. one just correctly merged in from the cloud,
  /// showing "revoked") with the stale local one (still "pending" from
  /// however long ago they applied) silently undid every remote status
  /// change on every single app load — the applicant's own device could
  /// never see themselves as revoked no matter how long they waited.
  static List<Map<String, dynamic>> mergeLocalIntoList(
    List<Map<String, dynamic>> list,
    String email,
    Map<String, dynamic>? local,
  ) {
    if (local == null) return list.map((e) => Map<String, dynamic>.from(e)).toList();
    final key = _emailKey(email);
    final existingIdx = list.indexWhere((a) => (a['userEmail'] ?? '').toString().toLowerCase().trim() == key);
    if (existingIdx == -1) {
      // Do not resurrect a deleted cloud row from a stale device backup.
      final localStatus = _statusOf(local);
      if (localStatus == 'approved' || localStatus == 'revoked' || localStatus == 'rejected') {
        return list.map((e) => Map<String, dynamic>.from(e)).toList();
      }
      return upsertInList(list, local);
    }
    final existing = list[existingIdx];
    final existingStatus = _statusOf(existing);
    final localStatus = _statusOf(local);
    // Cloud revoke/reject always wins over a stale local approved/pending backup.
    if ((existingStatus == 'revoked' || existingStatus == 'rejected') &&
        localStatus != existingStatus) {
      return list.map((e) => Map<String, dynamic>.from(e)).toList();
    }
    final existingTs = _rowTimestamp(existing);
    final localTs = _rowTimestamp(local);
    if (localTs == null) return list.map((e) => Map<String, dynamic>.from(e)).toList();
    if (existingTs != null && !localTs.isAfter(existingTs)) {
      return list.map((e) => Map<String, dynamic>.from(e)).toList();
    }
    return upsertInList(list, local);
  }

  static int _statusRank(String status) {
    switch (status) {
      case 'revoked':
        return 3;
      case 'rejected':
        return 2;
      case 'approved':
        return 1;
      default:
        return 0;
    }
  }

  /// The row that currently decides this person's access: newest by
  /// decision time, with revoke/reject beating a same-time approval.
  static Map<String, dynamic>? newestRowForEmail(
    Iterable<Map<String, dynamic>> rows,
    String email,
  ) {
    final key = _emailKey(email);
    if (key.isEmpty) return null;
    Map<String, dynamic>? best;
    for (final raw in rows) {
      if ((raw['userEmail'] ?? '').toString().toLowerCase().trim() != key) continue;
      final row = Map<String, dynamic>.from(raw);
      if (best == null) {
        best = row;
        continue;
      }
      final bt = _rowTimestamp(best);
      final rt = _rowTimestamp(row);
      if (bt != null && rt != null) {
        if (rt.isAfter(bt)) {
          best = row;
        } else if (!bt.isAfter(rt) && _statusRank(_statusOf(row)) > _statusRank(_statusOf(best))) {
          best = row;
        }
      } else if (rt != null) {
        best = row;
      } else if (bt == null && _statusRank(_statusOf(row)) > _statusRank(_statusOf(best))) {
        best = row;
      }
    }
    return best;
  }

  /// Turns a stale local approval into a fresh request the King/Admin can
  /// approve with one tap. The old id is kept as [reappliedFrom] so the
  /// reviewer sees it is a re-approval, not a stranger.
  static Map<String, dynamic> pendingReapplicationFrom(
    Map<String, dynamic> previous, {
    String? at,
    String? id,
  }) {
    final stamp = (at ?? '').trim().isEmpty ? DateTime.now().toUtc().toIso8601String() : at!.trim();
    final next = Map<String, dynamic>.from(previous);
    final previousId = (previous['id'] ?? '').toString().trim();
    for (final f in [
      'reviewedAt',
      'reviewedBy',
      'updatedAt',
      'revokedAt',
      'revokedBy',
      'revokeVotes',
      'revokeRequestedBy',
      'revokeRequestedAt',
      'rejectionReason',
    ]) {
      next.remove(f);
    }
    next['id'] = (id ?? '').trim().isNotEmpty
        ? id!.trim()
        : DateTime.now().microsecondsSinceEpoch.toString();
    next['status'] = 'pending';
    next['createdAt'] = stamp;
    if (previousId.isNotEmpty) next['reappliedFrom'] = previousId;
    final reason = (next['reason'] ?? '').toString().trim();
    next['reason'] = reason.isEmpty
        ? 'Re-approval: this registrar was approved on a phone but the approval never reached the server.'
        : reason;
    return next;
  }

  /// The server answered for the signed-in member, so its rows for that
  /// email are the truth. Help Mode, members and cities are all written by
  /// the server, which only checks its own approved rows — a phone that keeps
  /// treating a stale local approval as real gets "Not allowed" on every save
  /// while still showing the registrar tools.
  ///
  /// - Server rows for [email] replace every local row for that email.
  /// - No server row + local pending request: the request is kept and must be
  ///   sent again ([resubmit]).
  /// - No server row + stale local approval: the approval is dropped and a
  ///   fresh pending request is created for the King/Admin to approve
  ///   ([resubmit], [reappliedFromStaleApproval]).
  /// - Nothing anywhere: the person is a plain member and may apply.
  static ({
    List<Map<String, dynamic>> list,
    Map<String, dynamic>? own,
    Map<String, dynamic>? resubmit,
    bool reappliedFromStaleApproval,
  }) reconcileOwnRowsWithServer({
    required List<Map<String, dynamic>> list,
    required String email,
    required List<Map<String, dynamic>> serverRows,
    Map<String, dynamic>? localBackup,
    String? now,
    String? reapplicationId,
  }) {
    final key = _emailKey(email);
    final others = list
        .where((a) => (a['userEmail'] ?? '').toString().toLowerCase().trim() != key)
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
    if (key.isEmpty) {
      return (list: others, own: null, resubmit: null, reappliedFromStaleApproval: false);
    }
    final mine = serverRows
        .where((a) => (a['userEmail'] ?? '').toString().toLowerCase().trim() == key)
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
    if (mine.isNotEmpty) {
      return (
        list: [...others, ...mine],
        own: newestRowForEmail(mine, key),
        resubmit: null,
        reappliedFromStaleApproval: false,
      );
    }
    final localRow = localBackup ?? newestRowForEmail(list, key);
    final localStatus = localRow == null ? '' : _statusOf(localRow);
    // Only a request made moments ago is sent again (its first push may
    // have failed). Anything older that the server no longer holds was
    // deleted or revoked by the King/Admin: resending it, or turning an old
    // approval into a new request, left the person stuck on "Pending" with
    // no Apply button. They are a plain member again and may apply.
    if (localRow != null &&
        localStatus == 'pending' &&
        isFreshRequest(localRow, now: now)) {
      final pending = Map<String, dynamic>.from(localRow);
      return (
        list: [...others, pending],
        own: pending,
        resubmit: pending,
        reappliedFromStaleApproval: false,
      );
    }
    return (list: others, own: null, resubmit: null, reappliedFromStaleApproval: false);
  }

  static String _shortDate(dynamic raw) {
    final s = (raw ?? '').toString().trim();
    if (s.isEmpty) return '';
    final d = DateTime.tryParse(s)?.toLocal();
    if (d == null) return s;
    return '${d.month}/${d.day}/${d.year}';
  }

  /// One sentence of what the server believes about this account plus the
  /// step that fixes it. Shown in the Help Mode sync report after a 403 so
  /// the registrar and the King/Admin see the same fact instead of
  /// "cloud sync failed".
  static ({String summary, String advice}) describeServerView({
    required bool fetched,
    required bool isRegistrar,
    required bool isAdmin,
    required Iterable<Map<String, dynamic>> ownRows,
    required String email,
    String registrarState = '',
  }) {
    if (!fetched) {
      return (
        summary: 'Server view: could not be fetched (no answer from the server).',
        advice: 'Tap Retry in Details. If the server keeps refusing, ask the King/Admin to approve your '
            'registrar request again in Civic Registry → Registrar Requests.',
      );
    }
    if (isAdmin) {
      return (
        summary: 'Server view: this account is an admin.',
        advice: 'Tap Retry. If it repeats, the server function is out of date and must be redeployed.',
      );
    }
    final row = newestRowForEmail(ownRows, email);
    final state = (row?['state'] ?? registrarState).toString().trim();
    final stateLabel = state.isEmpty ? '' : ' $state';
    if (isRegistrar) {
      return (
        summary: 'Server view: Authorized Registrar${stateLabel.isEmpty ? '' : ' for$stateLabel'}, '
            'but the save was still refused.',
        advice: 'Tap Retry. If it repeats, the server function is out of date and must be redeployed.',
      );
    }
    if (row == null) {
      return (
        summary: 'Server view: no registrar application exists for this account on the server, '
            'so the server treats it as a regular member.',
        advice: 'Open Civic Registry again — a new registrar request is sent to the King/Admin automatically — '
            'then ask the King/Admin to tap Approve in Registrar Requests. Help Mode saves as soon as it is approved.',
      );
    }
    final status = _statusOf(row);
    switch (status) {
      case 'pending':
        final sent = _shortDate(row['createdAt']);
        return (
          summary: 'Server view: your$stateLabel registrar request is PENDING'
              '${sent.isEmpty ? '' : ' (sent $sent)'}; it was never approved on the server.',
          advice: 'Ask the King/Admin to tap Approve in Civic Registry → Registrar Requests. '
              'Help Mode saves as soon as it is approved.',
        );
      case 'revoked':
      case 'rejected':
        final when = _shortDate(row['revokedAt'] ?? row['reviewedAt'] ?? row['updatedAt']);
        return (
          summary: 'Server view: your$stateLabel registrar access is ${status.toUpperCase()}'
              '${when.isEmpty ? '' : ' (since $when)'}.',
          advice: 'Ask the King/Admin to tap Restore Access in Civic Registry → Registrar Requests.',
        );
      default:
        return (
          summary: 'Server view: your$stateLabel registrar application is $status, '
              'but the server still refused the save.',
          advice: 'Tap Retry. If it repeats, the server function is out of date and must be redeployed.',
        );
    }
  }

  /// Did the server's authoritative list record the reviewer's decision?
  /// A decision that only lives on the reviewer's phone is not a decision:
  /// the registrar still gets "Not allowed" on every save.
  static bool serverConfirmsDecision(
    Iterable<Map<String, dynamic>> serverRows, {
    required String email,
    required String status,
    String id = '',
    bool pendingRevoke = false,
  }) {
    final wanted = status.toLowerCase().trim();
    final rowId = id.trim();
    Map<String, dynamic>? row;
    if (rowId.isNotEmpty) {
      for (final a in serverRows) {
        if ((a['id'] ?? '').toString().trim() == rowId) {
          row = Map<String, dynamic>.from(a);
          break;
        }
      }
    }
    row ??= newestRowForEmail(serverRows, email);
    if (row == null) return false;
    final actual = _statusOf(row);
    if (wanted == 'cancelrevoke') return actual == 'approved' && revokeVotesOf(row).isEmpty;
    if (pendingRevoke) return actual == 'approved' && revokeVotesOf(row).isNotEmpty;
    return actual == wanted;
  }

  @Deprecated('Use mergeLocalIntoList')
  static List<Map<String, dynamic>> mergeLocalPendingIntoList(
    List<Map<String, dynamic>> list,
    String email,
    Map<String, dynamic>? localPending,
  ) =>
      mergeLocalIntoList(list, email, localPending);
}
