import 'package:flutter/material.dart';

/// "Invite a player" — a game-night style sheet: who to invite and how many games.
Future<void> showMultiplayerInviteDialog({
  required BuildContext context,
  required String gameTitle,
  required void Function(String accountId, int matchesTotal) onSend,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyInviteSheet(gameTitle: gameTitle, onSend: onSend),
  );
}

class _NgmyInviteSheet extends StatefulWidget {
  const _NgmyInviteSheet({required this.gameTitle, required this.onSend});
  final String gameTitle;
  final void Function(String accountId, int matchesTotal) onSend;

  @override
  State<_NgmyInviteSheet> createState() => _NgmyInviteSheetState();
}

class _NgmyInviteSheetState extends State<_NgmyInviteSheet> {
  final _emailC = TextEditingController();
  int _games = 3;
  String _error = '';

  static const _accent = Color(0xFFA855F7);
  static const _gold = Color(0xFFFBBF24);

  @override
  void dispose() {
    _emailC.dispose();
    super.dispose();
  }

  void _send() {
    final email = _emailC.text.trim();
    if (!RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$').hasMatch(email)) {
      setState(() => _error = "Enter the other player's account email.");
      return;
    }
    Navigator.pop(context);
    widget.onSend(email, _games);
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.viewInsetsOf(context).bottom + MediaQuery.paddingOf(context).bottom;
    return Padding(
      padding: EdgeInsets.only(bottom: bottom),
      child: Container(
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF2A1250), Color(0xFF150A2B)]),
        ),
        padding: const EdgeInsets.fromLTRB(20, 10, 20, 20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(child: Container(width: 42, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
            const SizedBox(height: 16),
            Row(
              children: [
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: const LinearGradient(colors: [Color(0xFFA855F7), Color(0xFFEC4899)]),
                    boxShadow: [BoxShadow(color: _accent.withValues(alpha: 0.5), blurRadius: 18)],
                  ),
                  child: const Icon(Icons.sports_esports_rounded, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('INVITE A PLAYER', style: TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.6)),
                      const SizedBox(height: 2),
                      Text(widget.gameTitle,
                          maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                    ],
                  ),
                ),
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white60)),
              ],
            ),
            const SizedBox(height: 18),
            Row(
              children: [
                _side(Icons.person_rounded, 'You', const Color(0xFF60A5FA)),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    decoration: BoxDecoration(
                      color: _gold.withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(99),
                      border: Border.all(color: _gold.withValues(alpha: 0.6)),
                    ),
                    child: const Text('VS', style: TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 13)),
                  ),
                ),
                _side(Icons.person_add_alt_1_rounded, 'Your friend', const Color(0xFFF472B6)),
              ],
            ),
            const SizedBox(height: 18),
            const Text('Their account email', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12.5)),
            const SizedBox(height: 6),
            TextField(
              controller: _emailC,
              keyboardType: TextInputType.emailAddress,
              autofocus: true,
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
              onChanged: (_) {
                if (_error.isNotEmpty) setState(() => _error = '');
              },
              onSubmitted: (_) => _send(),
              decoration: InputDecoration(
                hintText: 'friend@example.com',
                hintStyle: const TextStyle(color: Colors.white30),
                prefixIcon: const Icon(Icons.alternate_email_rounded, color: _accent),
                filled: true,
                fillColor: Colors.white.withValues(alpha: 0.06),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.12)),
                ),
                focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: _accent, width: 1.6)),
                errorText: _error.isEmpty ? null : _error,
              ),
            ),
            const SizedBox(height: 16),
            const Text('How many games?', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12.5)),
            const SizedBox(height: 8),
            Row(
              children: [
                for (final n in const [1, 3, 5, 7]) ...[
                  Expanded(
                    child: GestureDetector(
                      onTap: () => setState(() => _games = n),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 180),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(14),
                          gradient: _games == n ? const LinearGradient(colors: [Color(0xFFA855F7), Color(0xFF6366F1)]) : null,
                          color: _games == n ? null : Colors.white.withValues(alpha: 0.06),
                          border: Border.all(color: _games == n ? Colors.white54 : Colors.white12),
                        ),
                        child: Column(
                          children: [
                            Text('$n', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                            Text(n == 1 ? 'game' : 'best of $n',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 10, fontWeight: FontWeight.w700)),
                          ],
                        ),
                      ),
                    ),
                  ),
                  if (n != 7) const SizedBox(width: 8),
                ],
              ],
            ),
            const SizedBox(height: 14),
            Row(
              children: [
                Icon(Icons.info_outline_rounded, size: 15, color: Colors.white.withValues(alpha: 0.5)),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(
                    'They get your invite in their Game Center. When you both join, the match starts together.',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11.5),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            SizedBox(
              height: 54,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(18),
                  gradient: const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFFA855F7)]),
                  boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.4), blurRadius: 18, offset: const Offset(0, 6))],
                ),
                child: TextButton.icon(
                  onPressed: _send,
                  icon: const Icon(Icons.send_rounded, color: Colors.white),
                  label: Text(
                    'Send invite · $_games game${_games == 1 ? '' : 's'}',
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _side(IconData icon, String label, Color color) => Expanded(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(
            color: color.withValues(alpha: 0.1),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: color.withValues(alpha: 0.45)),
          ),
          child: Column(
            children: [
              Icon(icon, color: color, size: 24),
              const SizedBox(height: 4),
              Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5)),
            ],
          ),
        ),
      );
}
