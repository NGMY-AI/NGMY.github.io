import 'package:flutter/material.dart';

/// Multiplayer-capable game ids.
const Set<String> kNgmyMultiplayerGameIds = {
  'checkers_deluxe',
  'tic_tac_go',
  'chess_royale',
  'connect_four_pro',
  'backgammon_pro',
  'pool_8ball',
  'poker_texas',
};

const List<String> kNgmyProGameIds = [
  'checkers_deluxe',
  'tic_tac_go',
  'pool_8ball',
  'blackjack_vegas',
  'roulette_euro',
  'slots_jackpot',
  'poker_texas',
  'chess_royale',
  'connect_four_pro',
  'domino_block',
  'plinko_prizes',
  'spin_wheel',
  'baccarat_punto',
  'craps_table',
  'casino_war',
  'bingo_live',
  'solitaire_klondike',
  'backgammon_pro',
  'billiards_snooker',
  'profit_solve',
];

const Map<String, String> kNgmyProGameTitles = {
  'checkers_deluxe': 'Checkers Deluxe',
  'tic_tac_go': 'Tic Tac Go',
  'pool_8ball': '8-Ball Pool',
  'blackjack_vegas': 'Blackjack Vegas',
  'roulette_euro': 'European Roulette',
  'slots_jackpot': 'Slots Jackpot',
  'poker_texas': 'Texas Hold\'em',
  'chess_royale': 'Chess Royale',
  'connect_four_pro': 'Connect Four Pro',
  'domino_block': 'Domino Block',
  'plinko_prizes': 'Plinko Prizes',
  'spin_wheel': 'Spin Wheel',
  'baccarat_punto': 'Baccarat',
  'craps_table': 'Craps Table',
  'casino_war': 'Casino War',
  'bingo_live': 'Bingo Live',
  'solitaire_klondike': 'Solitaire Klondike',
  'backgammon_pro': 'Backgammon Pro',
  'billiards_snooker': 'Billiards Snooker',
  'profit_solve': 'Profit Solve',
};

List<Map<String, dynamic>> parseGameInvites(dynamic raw) {
  if (raw is! List) return [];
  return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
}

void addGameInvite(List<Map<String, dynamic>> invites, {
  required String fromEmail,
  required String fromName,
  required String toEmail,
  required String gameId,
  required String gameTitle,
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
    'gameId': gameId,
    'gameTitle': gameTitle,
    'status': 'pending',
    'createdAt': DateTime.now().toIso8601String(),
  });
}

List<Map<String, dynamic>> pendingInvitesFor(String email, List<Map<String, dynamic>> invites) {
  final key = email.toLowerCase().trim();
  return invites
      .where((i) => (i['toEmail'] ?? '').toString().toLowerCase().trim() == key && (i['status'] ?? 'pending') == 'pending')
      .toList();
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

Future<void> showMultiplayerInviteDialog({
  required BuildContext context,
  required String gameTitle,
  required void Function(String accountId) onSend,
}) {
  final c = TextEditingController();
  return showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      title: Row(
        children: [
          const Icon(Icons.groups_rounded, color: Color(0xFF7C3AED)),
          const SizedBox(width: 8),
          Expanded(child: Text('Invite Player — $gameTitle')),
        ],
      ),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('Enter the other player\'s account ID (email). They will see the request in Game Center in real time.'),
          const SizedBox(height: 12),
          TextField(
            controller: c,
            decoration: const InputDecoration(
              labelText: 'Account ID / Email',
              border: OutlineInputBorder(),
              prefixIcon: Icon(Icons.person_search_rounded),
            ),
          ),
        ],
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
        FilledButton(
          onPressed: () {
            final id = c.text.trim();
            if (id.isEmpty) return;
            Navigator.pop(ctx);
            onSend(id);
          },
          child: const Text('Send Invite'),
        ),
      ],
    ),
  ).whenComplete(() => c.dispose());
}
