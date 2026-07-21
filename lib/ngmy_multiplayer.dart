import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Brief pause after both players enter so neither starts early.
const int kNgmyMpLobbyAlignMs = 500;

/// Shared countdown once both players are in the room.
const int kNgmyMpCountdownSec = 4;

/// Multiplayer-capable game ids.
const Set<String> kNgmyMultiplayerGameIds = {
  'checkers_deluxe',
  'tic_tac_go',
  'memory',
  'typing',
  'scramble',
  'pattern',
};

/// Head-to-head skill games: progress scores synced; winner bonus like memory.
const Set<String> kNgmySkillMultiplayerGameIds = {
  'memory',
  'typing',
  'scramble',
  'pattern',
};

/// Board classics still in Game Center (casino games removed).
const List<String> kNgmyProGameIds = [
  'checkers_deluxe',
  'tic_tac_go',
];

const Map<String, String> kNgmyProGameTitles = {
  'checkers_deluxe': 'Checkers Deluxe',
  'tic_tac_go': 'Tic Tac Go',
};

List<Map<String, dynamic>> parseGameInvites(dynamic raw) {
  if (raw is! List) return [];
  return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
}

DateTime _inviteTimestamp(Map<String, dynamic> invite) {
  for (final key in ['sessionUpdatedAt', 'respondedAt', 'createdAt']) {
    final parsed = DateTime.tryParse((invite[key] ?? '').toString());
    if (parsed != null) return parsed;
  }
  return DateTime.fromMillisecondsSinceEpoch(0);
}

/// Union invites by id — keeps the newest update so two players never wipe each other's invites.
List<Map<String, dynamic>> mergeGameInvites(List<Map<String, dynamic>> local, List<Map<String, dynamic>> remote) {
  final byId = <String, Map<String, dynamic>>{};
  for (final raw in [...remote, ...local]) {
    final item = Map<String, dynamic>.from(raw);
    final id = (item['id'] ?? '').toString();
    if (id.isEmpty) continue;
    final created = DateTime.tryParse((item['createdAt'] ?? '').toString());
    if ((item['status'] ?? 'pending') == 'pending' &&
        created != null &&
        DateTime.now().difference(created).inDays > 14) {
      continue;
    }
    final existing = byId[id];
    if (existing == null || _inviteTimestamp(item).isAfter(_inviteTimestamp(existing))) {
      byId[id] = item;
    }
  }
  final out = byId.values.toList()
    ..sort((a, b) => _inviteTimestamp(b).compareTo(_inviteTimestamp(a)));
  return out;
}

void addGameInvite(
  List<Map<String, dynamic>> invites, {
  required String fromEmail,
  required String fromName,
  required String toEmail,
  String? toName,
  required String gameId,
  required String gameTitle,
  required int matchesTotal,
}) {
  final key = toEmail.toLowerCase().trim();
  invites.removeWhere((i) =>
      (i['toEmail'] ?? '').toString().toLowerCase().trim() == key &&
      (i['gameId'] ?? '') == gameId &&
      (i['status'] ?? 'pending') == 'pending');
  invites.add({
    'id': DateTime.now().microsecondsSinceEpoch.toString(),
    'fromEmail': fromEmail.toLowerCase().trim(),
    'fromName': fromName,
    'toEmail': key,
    if (toName != null && toName.trim().isNotEmpty) 'toName': toName.trim(),
    'gameId': gameId,
    'gameTitle': gameTitle,
    'status': 'pending',
    'createdAt': DateTime.now().toIso8601String(),
    'matchesTotal': matchesTotal,
    'matchesPlayed': 0,
    'seriesStatus': 'active',
  });
}

int inviteMatchesRemaining(Map<String, dynamic> invite) {
  final total = (invite['matchesTotal'] as num?)?.toInt() ?? 1;
  final played = (invite['matchesPlayed'] as num?)?.toInt() ?? 0;
  return (total - played).clamp(0, total);
}

bool inviteSeriesComplete(Map<String, dynamic> invite) {
  return inviteMatchesRemaining(invite) <= 0;
}

List<Map<String, dynamic>> pendingInvitesFor(String email, List<Map<String, dynamic>> invites) {
  final key = email.toLowerCase().trim();
  return invites
      .where((i) =>
          (i['toEmail'] ?? '').toString().toLowerCase().trim() == key && (i['status'] ?? 'pending') == 'pending')
      .toList();
}

/// Mark finished invites when every game in the series has been played.
void ngmyPruneStaleGameInvites(List<Map<String, dynamic>> invites) {
  for (final i in invites) {
    if (inviteSeriesComplete(i)) {
      i['status'] = 'finished';
      i['seriesStatus'] = 'complete';
    }
  }
}

/// True when this player should see a Join room banner (games left in the series).
bool inviteNeedsJoinRoom(Map<String, dynamic> invite, String email) {
  if ((invite['status'] ?? '') != 'active') return false;
  if ((invite['seriesStatus'] ?? '') == 'complete') return false;
  if (inviteSeriesComplete(invite)) return false;

  final key = email.toLowerCase().trim();
  final from = (invite['fromEmail'] ?? '').toString().toLowerCase().trim();
  final to = (invite['toEmail'] ?? '').toString().toLowerCase().trim();
  if (from != key && to != key) return false;

  return inviteMatchesRemaining(invite) > 0;
}

String inviteJoinRoomSubtitle(Map<String, dynamic> invite, String email) {
  final total = (invite['matchesTotal'] as num?)?.toInt() ?? 1;
  final played = (invite['matchesPlayed'] as num?)?.toInt() ?? 0;
  final gameNum = played + 1;
  final key = email.toLowerCase().trim();

  final sessionRaw = invite['sessionState'];
  if (sessionRaw is! Map) {
    return 'Game $gameNum of $total — tap Join room when you are ready';
  }
  final session = Map<String, dynamic>.from(sessionRaw);
  final inGameRaw = session['inGame'];
  final inGame = inGameRaw is Map ? Map<String, dynamic>.from(inGameRaw) : <String, dynamic>{};

  final p1 = (session['player1Email'] ?? session['playerXEmail'] ?? invite['fromEmail'] ?? '')
      .toString()
      .toLowerCase()
      .trim();
  final p2 = (session['player2Email'] ?? session['playerOEmail'] ?? invite['toEmail'] ?? '')
      .toString()
      .toLowerCase()
      .trim();
  String? other;
  if (p1 == key && p2.isNotEmpty) {
    other = p2;
  } else if (p2 == key && p1.isNotEmpty) {
    other = p1;
  }
  final youIn = inGame[key] == true;
  final otherIn = other != null && inGame[other] == true;

  if (youIn && !otherIn) {
    return 'Game $gameNum of $total — waiting for opponent to join the room';
  }
  if (!youIn && otherIn) {
    return 'Game $gameNum of $total — your opponent is in the room. Join now';
  }
  if (!youIn && !otherIn) {
    return 'Game $gameNum of $total — both players tap Join room to start';
  }
  return 'Game $gameNum of $total — match in progress';
}

List<Map<String, dynamic>> activeMatchesFor(String email, List<Map<String, dynamic>> invites) {
  ngmyPruneStaleGameInvites(invites);
  final key = email.toLowerCase().trim();
  return invites.where((i) {
    if (!inviteNeedsJoinRoom(i, key)) return false;
    final updatedAt = DateTime.tryParse((i['sessionUpdatedAt'] ?? '').toString()) ??
        DateTime.tryParse((i['respondedAt'] ?? '').toString()) ??
        DateTime.tryParse((i['createdAt'] ?? '').toString());
    if (updatedAt != null && DateTime.now().difference(updatedAt).inHours > 72) return false;
    return true;
  }).toList();
}

Map<String, dynamic>? findInviteById(List<Map<String, dynamic>> invites, String id) {
  for (final i in invites) {
    if ((i['id'] ?? '').toString() == id) return i;
  }
  return null;
}

void upsertInviteInList(List<Map<String, dynamic>> invites, Map<String, dynamic> invite) {
  final id = (invite['id'] ?? '').toString();
  if (id.isEmpty) return;
  final idx = invites.indexWhere((i) => (i['id'] ?? '').toString() == id);
  final copy = Map<String, dynamic>.from(invite);
  if (idx >= 0) {
    invites[idx] = copy;
  } else {
    invites.add(copy);
  }
}

bool _looksLikeEmail(String value) => value.contains('@');

String _playerDisplayNameFromSession(Map<String, dynamic> session, String playerEmail, Map<String, dynamic> invite) {
  final from = (invite['fromEmail'] ?? '').toString().toLowerCase().trim();
  final to = (invite['toEmail'] ?? '').toString().toLowerCase().trim();
  final p1 = (session['player1Email'] ?? session['playerXEmail'] ?? from).toString().toLowerCase().trim();
  final p2 = (session['player2Email'] ?? session['playerOEmail'] ?? to).toString().toLowerCase().trim();
  if (playerEmail == p1) {
    return (session['player1Name'] ?? session['playerXName'] ?? invite['fromName'] ?? '').toString().trim();
  }
  if (playerEmail == p2) {
    return (session['player2Name'] ?? session['playerOName'] ?? invite['toName'] ?? '').toString().trim();
  }
  if (playerEmail == from) return (invite['fromName'] ?? '').toString().trim();
  if (playerEmail == to) return (invite['toName'] ?? '').toString().trim();
  return '';
}

/// Opponent label for banners and game headers (username, not email).
String inviteOpponentDisplayName(
  Map<String, dynamic> invite,
  String yourEmail, {
  Map<String, String>? emailToUsername,
}) {
  final key = yourEmail.toLowerCase().trim();
  final from = (invite['fromEmail'] ?? '').toString().toLowerCase().trim();
  final to = (invite['toEmail'] ?? '').toString().toLowerCase().trim();
  final opponentEmail = key == from ? to : from;
  final sessionRaw = invite['sessionState'];
  final session = sessionRaw is Map ? Map<String, dynamic>.from(sessionRaw) : <String, dynamic>{};
  var name = _playerDisplayNameFromSession(session, opponentEmail, invite);
  if ((name.isEmpty || _looksLikeEmail(name)) && emailToUsername != null) {
    name = emailToUsername[opponentEmail] ?? '';
  }
  if (name.isEmpty || _looksLikeEmail(name)) return 'Opponent';
  return name;
}

Future<Map<String, String>> ngmyLoadEmailToUsernameMap() async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('all_users');
    if (raw == null || raw.isEmpty) return {};
    final list = jsonDecode(raw);
    if (list is! List) return {};
    final out = <String, String>{};
    for (final e in list) {
      if (e is! Map) continue;
      final email = (e['email'] ?? '').toString().toLowerCase().trim();
      final username = (e['username'] ?? '').toString().trim();
      if (email.isNotEmpty && username.isNotEmpty) out[email] = username;
    }
    return out;
  } catch (_) {
    return {};
  }
}

Future<String> inviteOpponentDisplayNameResolved(Map<String, dynamic> invite, String yourEmail) async {
  final map = await ngmyLoadEmailToUsernameMap();
  return inviteOpponentDisplayName(invite, yourEmail, emailToUsername: map);
}

/// Local-only invite lookup (multiplayer invites disabled).
Future<Map<String, dynamic>?> ngmyFetchInviteByIdMerged(
  String inviteId,
  List<Map<String, dynamic>> localInvites, {
  bool forceRefresh = false,
}) async {
  return findInviteById(localInvites, inviteId);
}

void respondInvite(List<Map<String, dynamic>> invites, String id, String status) {
  for (final i in invites) {
    if ((i['id'] ?? '').toString() == id) {
      i['status'] = status;
      i['respondedAt'] = DateTime.now().toIso8601String();
      return;
    }
  }
}

Map<String, dynamic> _initSessionForGame(Map<String, dynamic> invite, {String? accepterName}) {
  final gameId = (invite['gameId'] ?? '').toString();
  final fromEmail = (invite['fromEmail'] ?? '').toString().toLowerCase().trim();
  final toEmail = (invite['toEmail'] ?? '').toString().toLowerCase().trim();
  final fromName = (invite['fromName'] ?? fromEmail).toString();
  final toName = (accepterName ?? toEmail).toString();
  switch (gameId) {
    case 'tic_tac_go':
      return {
        'ttt': List<String>.filled(9, ''),
        'turnEmail': fromEmail,
        'playerXEmail': fromEmail,
        'playerXName': fromName,
        'playerOEmail': toEmail,
        'playerOName': toName,
        'gameOver': false,
        'winnerEmail': '',
        'winnerLabel': '',
        'isDraw': false,
      };
    case 'connect_four_pro':
      return {
        'c4': List.generate(6, (_) => List.filled(7, 0)),
        'c4Turn': 1,
        'player1Email': fromEmail,
        'player1Name': fromName,
        'player2Email': toEmail,
        'player2Name': toName,
        'gameOver': false,
        'winnerEmail': '',
        'winnerLabel': '',
        'isDraw': false,
      };
    case 'checkers_deluxe':
      return {
        'checkers': List.generate(8, (r) => List.generate(8, (c) {
          if ((r + c) % 2 == 1) {
            if (r < 3) return 2;
            if (r > 4) return 1;
          }
          return 0;
        })),
        'checkersTurn': 1,
        'player1Email': fromEmail,
        'player1Name': fromName,
        'player2Email': toEmail,
        'player2Name': toName,
        'gameOver': false,
        'winnerEmail': '',
        'winnerLabel': '',
        'isDraw': false,
      };
    default:
      return {
        'gameOver': false,
        'winnerEmail': '',
        'winnerLabel': '',
        'player1Email': fromEmail,
        'player1Name': fromName,
        'player2Email': toEmail,
        'player2Name': toName,
      };
  }
}

void activateInviteMatch(List<Map<String, dynamic>> invites, String id, {String? accepterName}) {
  for (final i in invites) {
    if ((i['id'] ?? '').toString() == id) {
      i['status'] = 'active';
      i['respondedAt'] = DateTime.now().toIso8601String();
      final session = _initSessionForGame(i, accepterName: accepterName);
      final fromEmail = (i['fromEmail'] ?? '').toString().toLowerCase().trim();
      final toEmail = (i['toEmail'] ?? '').toString().toLowerCase().trim();
      final p1 = (session['player1Email'] ?? session['playerXEmail'] ?? fromEmail).toString().toLowerCase().trim();
      final p2 = (session['player2Email'] ?? session['playerOEmail'] ?? toEmail).toString().toLowerCase().trim();
      if (p1.isNotEmpty) session['player1Email'] = p1;
      if (p2.isNotEmpty) session['player2Email'] = p2;
      final inGame = <String, dynamic>{};
      if (p1.isNotEmpty) inGame[p1] = false;
      if (p2.isNotEmpty) inGame[p2] = false;
      session['inGame'] = inGame;
      i['sessionState'] = session;
      i['sessionUpdatedAt'] = DateTime.now().toIso8601String();
      return;
    }
  }
}

/// After one game in a series ends: bump [matchesPlayed], finish invite when done, reset gate for next game.
void recordInviteMatchPlayed(List<Map<String, dynamic>> invites, String id) {
  for (final i in invites) {
    if ((i['id'] ?? '').toString() != id) continue;
    final played = ((i['matchesPlayed'] as num?)?.toInt() ?? 0) + 1;
    i['matchesPlayed'] = played;
    final total = (i['matchesTotal'] as num?)?.toInt() ?? 1;
    if (played >= total) {
      i['status'] = 'finished';
      i['seriesStatus'] = 'complete';
    } else {
      final sessionRaw = i['sessionState'];
      if (sessionRaw is Map) {
        final s = Map<String, dynamic>.from(sessionRaw);
        s['gameOver'] = false;
        s.remove('startAt');
        final p1 = (s['player1Email'] ?? s['playerXEmail'] ?? '').toString().toLowerCase().trim();
        final p2 = (s['player2Email'] ?? s['playerOEmail'] ?? '').toString().toLowerCase().trim();
        final inGame = <String, dynamic>{};
        if (p1.isNotEmpty) inGame[p1] = false;
        if (p2.isNotEmpty) inGame[p2] = false;
        s['inGame'] = inGame;
        final gid = (i['gameId'] ?? '').toString();
        if (gid == 'memory') {
          s['memoryMatched'] = <int>[];
          s.remove('memorySeed');
        } else if (gid == 'pattern') {
          s.remove('patternSeed');
        }
        i['sessionState'] = s;
      }
    }
    i['sessionUpdatedAt'] = DateTime.now().toIso8601String();
    return;
  }
}

void updateInviteSession(List<Map<String, dynamic>> invites, String id, Map<String, dynamic> sessionState) {
  for (final i in invites) {
    if ((i['id'] ?? '').toString() == id) {
      i['sessionState'] = Map<String, dynamic>.from(sessionState);
      i['sessionUpdatedAt'] = DateTime.now().toIso8601String();
      return;
    }
  }
}

Future<List<Map<String, dynamic>>?> ngmyFetchGameInvitesFromCloud({bool force = false}) async => const [];

Future<Map<String, dynamic>?> ngmyFetchInviteById(String inviteId) async => null;

Future<Map<String, dynamic>?> ngmyFetchInviteByIdMergedOnlyLocal(
  String inviteId,
  List<Map<String, dynamic>> localInvites,
) async {
  return findInviteById(localInvites, inviteId) ??
      ngmyFetchInviteByIdMerged(inviteId, localInvites);
}

/// Local prune only — multiplayer invites are disabled.
Future<List<Map<String, dynamic>>?> ngmySyncGameInvites(List<Map<String, dynamic>> localInvites, {bool push = false}) async {
  ngmyPruneStaleGameInvites(localInvites);
  return List<Map<String, dynamic>>.from(localInvites.map((e) => Map<String, dynamic>.from(e)));
}

Future<bool> ngmyPublishGameInvites(
  List<Map<String, dynamic>> localInvites, {
  bool preferCachedRemote = false,
}) async {
  ngmyPruneStaleGameInvites(localInvites);
  return true;
}

Future<bool> ngmyPublishInviteSession(List<Map<String, dynamic>> localInvites, String inviteId, Map<String, dynamic> sessionState) async {
  updateInviteSession(localInvites, inviteId, sessionState);
  return true;
}

void ngmyPublishInviteSessionFast(
  List<Map<String, dynamic>> localInvites,
  String inviteId,
  Map<String, dynamic> sessionState,
) {
  updateInviteSession(localInvites, inviteId, sessionState);
}

/// Solo vs NGMY system, or head-to-head when [inviteId] is set.
class NgmyGamePlayContext {
  final bool vsComputer;
  final String youLabel;
  final String opponentLabel;
  final String yourEmail;
  final String? opponentEmail;
  final String? inviteId;
  final bool youArePlayerOne;

  const NgmyGamePlayContext({
    required this.vsComputer,
    required this.youLabel,
    required this.opponentLabel,
    required this.yourEmail,
    this.opponentEmail,
    this.inviteId,
    this.youArePlayerOne = true,
  });

  factory NgmyGamePlayContext.solo({required String youLabel, required String yourEmail}) {
    return NgmyGamePlayContext(
      vsComputer: true,
      youLabel: youLabel,
      opponentLabel: 'NGMY',
      yourEmail: yourEmail.toLowerCase().trim(),
    );
  }

  factory NgmyGamePlayContext.fromInvite(Map<String, dynamic> invite, String yourEmail, String yourName) {
    final id = (invite['id'] ?? '').toString();
    final from = (invite['fromEmail'] ?? '').toString().toLowerCase().trim();
    final to = (invite['toEmail'] ?? '').toString().toLowerCase().trim();
    final key = yourEmail.toLowerCase().trim();
    final session = invite['sessionState'] is Map ? Map<String, dynamic>.from(invite['sessionState'] as Map) : <String, dynamic>{};
    final opponentEmail = key == from ? to : from;
    var opponentName = key == from
        ? ((session['player2Name'] ?? session['playerOName'] ?? invite['toName'] ?? '').toString().trim())
        : ((session['player1Name'] ?? session['playerXName'] ?? invite['fromName'] ?? '').toString().trim());
    if (opponentName.isEmpty || _looksLikeEmail(opponentName)) {
      opponentName = inviteOpponentDisplayName(invite, yourEmail);
    }
    return NgmyGamePlayContext(
      vsComputer: false,
      youLabel: yourName,
      opponentLabel: opponentName,
      yourEmail: key,
      opponentEmail: opponentEmail,
      inviteId: id,
      youArePlayerOne: key == from,
    );
  }
}

Future<void> showMultiplayerInviteDialog({
  required BuildContext context,
  required String gameTitle,
  required void Function(String accountId, int matchesTotal) onSend,
}) {
  final emailC = TextEditingController();
  final gamesC = TextEditingController(text: '3');
  return showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      title: Row(
        children: [
          const Icon(Icons.person_add_rounded, color: Color(0xFF7C3AED)),
          const SizedBox(width: 8),
          Expanded(child: Text('Invite Player — $gameTitle')),
        ],
      ),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Enter the other player\'s account email. They must accept the invite in Game Center to play.',
          ),
          const SizedBox(height: 12),
          TextField(
            controller: emailC,
            keyboardType: TextInputType.emailAddress,
            decoration: const InputDecoration(
              labelText: 'Account email',
              border: OutlineInputBorder(),
              prefixIcon: Icon(Icons.person_search_rounded),
            ),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: gamesC,
            keyboardType: TextInputType.number,
            decoration: const InputDecoration(
              labelText: 'Number of games in this match',
              hintText: 'Best of 1–20 (default 3)',
              border: OutlineInputBorder(),
              prefixIcon: Icon(Icons.sports_esports_rounded),
            ),
          ),
        ],
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
        FilledButton(
          onPressed: () {
            final email = emailC.text.trim();
            if (email.isEmpty) return;
            var total = int.tryParse(gamesC.text.trim()) ?? 3;
            if (total < 1) total = 1;
            if (total > 20) total = 20;
            Navigator.pop(ctx);
            onSend(email, total);
          },
          child: const Text('Send Invite'),
        ),
      ],
    ),
  ).whenComplete(() {
    emailC.dispose();
    gamesC.dispose();
  });
}
