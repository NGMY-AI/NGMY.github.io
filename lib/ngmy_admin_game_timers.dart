import 'package:flutter/material.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_dice_admin.dart';
import 'ngmy_dice_config.dart';
import 'ngmy_games.dart';

/// Admin: Game Center times, plus dice face control for every player.
class NgmyAdminGameTimersScreen extends StatefulWidget {
  const NgmyAdminGameTimersScreen({
    super.key,
    required this.limits,
    required this.onSave,
    required this.diceSettings,
    required this.onDiceChanged,
    this.diceUsers = const [],
    this.searchCloudUsers,
    this.isDark = true,
  });
  final Map<String, int> limits;
  final Future<void> Function(Map<String, int> limits) onSave;
  final NgmyDiceSettings diceSettings;
  final Future<void> Function() onDiceChanged;
  final List<NgmyDiceUserOption> diceUsers;
  final Future<List<NgmyDiceUserOption>> Function(String query)? searchCloudUsers;
  final bool isDark;

  @override
  State<NgmyAdminGameTimersScreen> createState() => _NgmyAdminGameTimersScreenState();
}

class _TimerGame {
  const _TimerGame(this.id, this.title, this.emoji, this.defaultSeconds);
  final String id;
  final String title;
  final String emoji;
  final int defaultSeconds;
}

class _NgmyAdminGameTimersScreenState extends State<NgmyAdminGameTimersScreen> {
  late final Map<String, int> _limits = Map.of(widget.limits);
  final _search = TextEditingController();
  bool _saving = false;
  bool _dirty = false;

  late final List<_TimerGame> _games = [
    for (final id in kNgmyAdminGameIds) _TimerGame(id, kNgmyGameTitles[id] ?? id, id == 'dice' ? '🎲' : '🎮', 60),
    for (final g in kNgmyArcadeGames) _TimerGame(g.id, g.title, g.emoji, g.seconds),
  ];

  int _value(_TimerGame g) => _limits[g.id] ?? g.defaultSeconds;

  void _set(_TimerGame g, int v) {
    setState(() {
      _limits[g.id] = v.clamp(ngmyMinGameSeconds, ngmyMaxGameSeconds);
      _dirty = true;
    });
  }

  Future<void> _type(_TimerGame g) async {
    final ctl = TextEditingController(text: '${_value(g)}');
    final v = await showDialog<int>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text('${g.emoji} ${g.title}'),
        content: TextField(
          controller: ctl,
          autofocus: true,
          keyboardType: TextInputType.number,
          decoration: InputDecoration(suffixText: 'seconds', helperText: 'Between $ngmyMinGameSeconds and $ngmyMaxGameSeconds'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, int.tryParse(ctl.text.trim())), child: const Text('Set')),
        ],
      ),
    );
    if (v != null) _set(g, v);
  }

  Future<void> _setAll() async {
    final ctl = TextEditingController(text: '60');
    final v = await showDialog<int>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Same time for every game'),
        content: TextField(controller: ctl, autofocus: true, keyboardType: TextInputType.number, decoration: const InputDecoration(suffixText: 'seconds')),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, int.tryParse(ctl.text.trim())), child: const Text('Set all')),
        ],
      ),
    );
    if (v == null) return;
    setState(() {
      for (final g in _games) {
        _limits[g.id] = v.clamp(ngmyMinGameSeconds, ngmyMaxGameSeconds);
      }
      _dirty = true;
    });
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    try {
      await widget.onSave(Map.of(_limits));
      if (!mounted) return;
      setState(() => _dirty = false);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Game timers saved — every player gets them.')));
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final dark = widget.isDark;
    final bg = dark ? const Color(0xFF0B1220) : const Color(0xFFF4F6FA);
    final card = dark ? const Color(0xFF151E2E) : Colors.white;
    final ink = dark ? Colors.white : const Color(0xFF111827);
    final mute = dark ? Colors.white60 : const Color(0xFF6B7280);
    final q = _search.text.trim().toLowerCase();
    final shown = _games.where((g) => q.isEmpty || g.title.toLowerCase().contains(q)).toList();

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: ink,
        elevation: 0,
        title: const Text('Game Timers', style: TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          TextButton(onPressed: _setAll, child: const Text('Set all')),
        ],
      ),
      bottomNavigationBar: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 6, 16, 10),
          child: FilledButton.icon(
            onPressed: _dirty && !_saving ? _save : null,
            style: FilledButton.styleFrom(
              backgroundColor: const Color(0xFF00B25A),
              padding: const EdgeInsets.symmetric(vertical: 15),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
            icon: _saving
                ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Icon(Icons.save_rounded),
            label: Text(_dirty ? 'Save for every player' : 'Saved', style: const TextStyle(fontWeight: FontWeight.w900)),
          ),
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
        children: [
          NgmyDiceControlPanel(
            settings: widget.diceSettings,
            isDark: dark,
            onChanged: widget.onDiceChanged,
            users: widget.diceUsers,
            searchCloudUsers: widget.searchCloudUsers,
          ),
          const SizedBox(height: 18),
          Text('Game times', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 16)),
          const SizedBox(height: 8),
          TextField(
            controller: _search,
            onChanged: (_) => setState(() {}),
            style: TextStyle(color: ink),
            decoration: InputDecoration(
              hintText: 'Search a game',
              hintStyle: TextStyle(color: mute),
              prefixIcon: Icon(Icons.search_rounded, color: mute),
              filled: true,
              fillColor: card,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
            ),
          ),
          const SizedBox(height: 10),
          for (final g in shown) ...[
            Builder(builder: (_) {
              final v = _value(g);
              final custom = v != g.defaultSeconds;
              return Container(
                padding: const EdgeInsets.fromLTRB(14, 10, 8, 10),
                decoration: BoxDecoration(
                  color: card,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: custom ? const Color(0xFF00B25A).withValues(alpha: 0.6) : Colors.transparent),
                ),
                child: Row(children: [
                  Text(g.emoji, style: const TextStyle(fontSize: 22)),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(g.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800)),
                      Text(custom ? 'Normal ${g.defaultSeconds}s' : 'Normal time', style: TextStyle(color: mute, fontSize: 11.5)),
                    ]),
                  ),
                  IconButton(onPressed: () => _set(g, v - 5), icon: Icon(Icons.remove_circle_outline_rounded, color: mute)),
                  GestureDetector(
                    onTap: () => _type(g),
                    child: Container(
                      width: 64,
                      padding: const EdgeInsets.symmetric(vertical: 6),
                      alignment: Alignment.center,
                      decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(10)),
                      child: Text('${v}s', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 15)),
                    ),
                  ),
                  IconButton(onPressed: () => _set(g, v + 5), icon: const Icon(Icons.add_circle_outline_rounded, color: Color(0xFF00B25A))),
                  if (custom)
                    IconButton(
                      tooltip: 'Back to normal',
                      onPressed: () => _set(g, g.defaultSeconds),
                      icon: Icon(Icons.restart_alt_rounded, color: mute, size: 20),
                    ),
                ]),
              );
            }),
            const SizedBox(height: 8),
          ],
        ],
      ),
    );
  }
}
