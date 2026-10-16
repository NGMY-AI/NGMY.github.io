import 'package:flutter/material.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_dice_admin.dart';
import 'ngmy_dice_config.dart';
import 'ngmy_games.dart';

/// One Game Center money move, for the Top Winners table.
class NgmyGamePlayRecord {
  const NgmyGamePlayRecord({required this.email, required this.game, required this.amount, required this.win, required this.at});
  final String email;
  final String game;
  final double amount;

  /// true = paid out (full or partial win), false = the stake.
  final bool win;
  final DateTime at;
}

/// Admin → Game Center: game timers, and the players winning the most (and on which games).
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
    this.records = const [],
    this.nameOf,
  });
  final Map<String, int> limits;
  final Future<void> Function(Map<String, int> limits) onSave;
  final NgmyDiceSettings diceSettings;
  final Future<String?> Function() onDiceChanged;
  final List<NgmyDiceUserOption> diceUsers;
  final Future<List<NgmyDiceUserOption>> Function(String query)? searchCloudUsers;
  final bool isDark;
  final List<NgmyGamePlayRecord> records;
  final String Function(String email)? nameOf;

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

class _Winner {
  _Winner(this.email);
  final String email;
  double won = 0, staked = 0;
  int wins = 0, plays = 0;
  final games = <String, ({int wins, double won, int plays})>{};
  double get net => won - staked;

  /// Games played (stakes) that paid nothing back.
  int lossesIn(({int wins, double won, int plays}) g) => (g.plays - g.wins).clamp(0, 1 << 30);
  int get losses => games.values.fold(0, (n, g) => n + lossesIn(g));
}

const _amber = Color(0xFFF59E0B);
const _green = Color(0xFF10B981);

class _NgmyAdminGameTimersScreenState extends State<NgmyAdminGameTimersScreen> {
  late final Map<String, int> _limits = Map.of(widget.limits);
  final _search = TextEditingController();
  bool _saving = false;
  bool _dirty = false;
  int _tab = 0;
  int _allSeconds = 60;
  int _days = 0; // 0 = all time

  late final List<_TimerGame> _games = [
    for (final id in kNgmyAdminGameIds) _TimerGame(id, kNgmyGameTitles[id] ?? id, id == 'dice' ? '🎲' : '🎮', 60),
    for (final g in kNgmyArcadeGames) _TimerGame(g.id, g.title, g.emoji, g.seconds),
  ];

  bool get _dark => widget.isDark;
  Color get _bg => _dark ? const Color(0xFF0A0F1C) : const Color(0xFFF3F5F9);
  Color get _card => _dark ? const Color(0xFF141B2B) : Colors.white;
  Color get _ink => _dark ? Colors.white : const Color(0xFF0F172A);
  Color get _mute => _dark ? Colors.white60 : const Color(0xFF64748B);

  int _value(_TimerGame g) => _limits[g.id] ?? g.defaultSeconds;

  void _set(_TimerGame g, int v) {
    setState(() {
      _limits[g.id] = v.clamp(ngmyMinGameSeconds, ngmyMaxGameSeconds);
      _dirty = true;
    });
  }

  void _applyAll() {
    setState(() {
      for (final g in _games) {
        _limits[g.id] = _allSeconds;
      }
      _dirty = true;
    });
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Every game set to ${_allSeconds}s — tap Save to apply.')));
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

  // ─── Header ─────────────────────────────────────────────────────────────

  Widget _header() {
    final custom = _games.where((g) => _value(g) != g.defaultSeconds).length;
    return Container(
      margin: const EdgeInsets.fromLTRB(16, 4, 16, 12),
      padding: const EdgeInsets.fromLTRB(18, 16, 18, 16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF7C2D12), Color(0xFFD97706), Color(0xFFF59E0B)]),
        boxShadow: [BoxShadow(color: _amber.withValues(alpha: 0.35), blurRadius: 20, offset: const Offset(0, 8))],
      ),
      child: Row(children: [
        Container(
          width: 48,
          height: 48,
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(14)),
          child: const Icon(Icons.sports_esports_rounded, color: Colors.white, size: 26),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Game Center', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
            const SizedBox(height: 3),
            Text(
              _tab == 0 ? '${_games.length} games · $custom with your own time' : 'Who wins the most, and on which games',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12.5, fontWeight: FontWeight.w600),
            ),
          ]),
        ),
      ]),
    );
  }

  Widget _tabs() {
    Widget tab(int i, IconData icon, String label) {
      final on = _tab == i;
      final onColor = _dark ? const Color(0xFF0F172A) : Colors.white;
      return Expanded(
        child: GestureDetector(
          onTap: () => setState(() => _tab = i),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            padding: const EdgeInsets.symmetric(vertical: 11),
            decoration: BoxDecoration(
              color: on ? (_dark ? Colors.white : const Color(0xFF0F172A)) : Colors.transparent,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, size: 17, color: on ? onColor : _mute),
              const SizedBox(width: 6),
              Text(label, style: TextStyle(fontWeight: FontWeight.w800, color: on ? onColor : _mute)),
            ]),
          ),
        ),
      );
    }

    return Container(
      margin: const EdgeInsets.fromLTRB(16, 0, 16, 10),
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(color: _card, borderRadius: BorderRadius.circular(15)),
      child: Row(children: [tab(0, Icons.timer_rounded, 'Timers'), tab(1, Icons.emoji_events_rounded, 'Top winners')]),
    );
  }

  // ─── Timers tab ─────────────────────────────────────────────────────────

  Widget _roundBtn(IconData icon, VoidCallback onTap, {Color? color}) => Material(
        color: (color ?? _mute).withValues(alpha: 0.14),
        shape: const CircleBorder(),
        child: InkWell(
          customBorder: const CircleBorder(),
          onTap: onTap,
          child: Padding(padding: const EdgeInsets.all(7), child: Icon(icon, size: 18, color: color ?? _ink)),
        ),
      );

  static const _presets = [30, 45, 60, 90, 120];

  Widget _allCard() {
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 10, 10, 10),
      decoration: BoxDecoration(color: _bg, borderRadius: BorderRadius.circular(14)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('Same time for every game', style: TextStyle(color: _ink, fontWeight: FontWeight.w800, fontSize: 13)),
        const SizedBox(height: 8),
        Row(children: [
          for (final s in _presets)
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(right: 6),
                child: GestureDetector(
                  onTap: () => setState(() => _allSeconds = s),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 150),
                    height: 34,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: _allSeconds == s ? _amber : _card,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text('${s}s',
                        style: TextStyle(color: _allSeconds == s ? Colors.black : _ink, fontWeight: FontWeight.w800, fontSize: 12.5)),
                  ),
                ),
              ),
            ),
          SizedBox(
            height: 34,
            child: FilledButton(
              onPressed: _applyAll,
              style: FilledButton.styleFrom(
                backgroundColor: _green,
                padding: const EdgeInsets.symmetric(horizontal: 12),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
              ),
              child: const Text('Apply', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5)),
            ),
          ),
        ]),
      ]),
    );
  }

  bool _showAllArcade = false;

  Widget _group(String title, IconData icon, List<_TimerGame> games, {int? limit}) {
    final shown = limit == null ? games : games.take(limit).toList();
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Padding(
        padding: const EdgeInsets.fromLTRB(4, 16, 4, 8),
        child: Row(children: [
          Icon(icon, size: 16, color: _amber),
          const SizedBox(width: 6),
          Text(title, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 14)),
          const SizedBox(width: 6),
          Text('${games.length}', style: TextStyle(color: _mute, fontWeight: FontWeight.w700, fontSize: 12)),
        ]),
      ),
      Container(
        decoration: BoxDecoration(color: _bg, borderRadius: BorderRadius.circular(16)),
        child: Column(children: [
          for (var i = 0; i < shown.length; i++) ...[
            if (i > 0) Divider(height: 1, thickness: 1, indent: 56, color: _mute.withValues(alpha: 0.12)),
            _timerRow(shown[i]),
          ],
        ]),
      ),
      if (limit != null && games.length > limit)
        Center(
          child: TextButton.icon(
            onPressed: () => setState(() => _showAllArcade = true),
            icon: const Icon(Icons.expand_more_rounded, color: _amber),
            label: Text('Show all ${games.length}', style: const TextStyle(color: _amber, fontWeight: FontWeight.w800)),
          ),
        ),
    ]);
  }

  Widget _timersTab() {
    final q = _search.text.trim().toLowerCase();
    bool match(_TimerGame g) => q.isEmpty || g.title.toLowerCase().contains(q);
    final arcadeIds = {for (final g in kNgmyArcadeGames) g.id};
    final classic = _games.where((g) => !arcadeIds.contains(g.id) && match(g)).toList();
    final arcade = _games.where((g) => arcadeIds.contains(g.id) && match(g)).toList();
    final changed = _games.where((g) => _value(g) != g.defaultSeconds).length;
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
      children: [
        // Dice control (from Admin → Game Timers before the redesign) stays at the top.
        NgmyDiceControlPanel(
          settings: widget.diceSettings,
          isDark: _dark,
          onChanged: widget.onDiceChanged,
          users: widget.diceUsers,
          searchCloudUsers: widget.searchCloudUsers,
        ),
        const SizedBox(height: 16),
        // Game timers section.
        Container(
          padding: const EdgeInsets.fromLTRB(12, 14, 12, 12),
          decoration: BoxDecoration(
            color: _card,
            borderRadius: BorderRadius.circular(22),
            border: Border.all(color: _amber.withValues(alpha: 0.3)),
          ),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFFD97706), _amber]),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Icon(Icons.timer_rounded, color: Colors.white, size: 22),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Game timers', style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 17)),
                  Text(changed == 0 ? 'How long each game lasts' : 'How long each game lasts · $changed changed',
                      style: TextStyle(color: _mute, fontSize: 12)),
                ]),
              ),
            ]),
            const SizedBox(height: 12),
            TextField(
              controller: _search,
              onChanged: (_) => setState(() {}),
              style: TextStyle(color: _ink),
              decoration: InputDecoration(
                hintText: 'Search a game',
                hintStyle: TextStyle(color: _mute),
                prefixIcon: Icon(Icons.search_rounded, color: _mute),
                filled: true,
                fillColor: _bg,
                isDense: true,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
              ),
            ),
            if (q.isEmpty) ...[
              const SizedBox(height: 10),
              _allCard(),
            ],
            if (classic.isNotEmpty) _group('Classic games', Icons.casino_rounded, classic),
            if (arcade.isNotEmpty)
              _group('Arcade games', Icons.sports_esports_rounded, arcade, limit: q.isEmpty && !_showAllArcade ? 8 : null),
            if (classic.isEmpty && arcade.isEmpty)
              Padding(
                padding: const EdgeInsets.all(20),
                child: Center(child: Text('No game called "${_search.text.trim()}"', style: TextStyle(color: _mute))),
              ),
          ]),
        ),
      ],
    );
  }

  Widget _timerRow(_TimerGame g) {
    final v = _value(g);
    final custom = v != g.defaultSeconds;
    Widget step(IconData icon, VoidCallback onTap) => InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(8),
          child: Padding(padding: const EdgeInsets.all(6), child: Icon(icon, size: 16, color: custom ? _amber : _ink)),
        );
    return Padding(
      padding: const EdgeInsets.fromLTRB(10, 8, 6, 8),
      child: Row(children: [
        Container(
          width: 36,
          height: 36,
          alignment: Alignment.center,
          decoration: BoxDecoration(color: _card, shape: BoxShape.circle),
          child: Text(g.emoji, style: const TextStyle(fontSize: 18)),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(g.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w800, fontSize: 13.5)),
            Text(custom ? 'Changed · normal ${g.defaultSeconds}s' : 'Normal time',
                maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: custom ? _amber : _mute, fontSize: 11)),
          ]),
        ),
        // − time + in one pill.
        Container(
          decoration: BoxDecoration(
            color: custom ? _amber.withValues(alpha: 0.14) : _card,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: custom ? _amber.withValues(alpha: 0.6) : Colors.transparent),
          ),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            step(Icons.remove_rounded, () => _set(g, v - 5)),
            GestureDetector(
              onTap: () => _type(g),
              child: SizedBox(
                width: 44,
                child: Text('${v}s',
                    textAlign: TextAlign.center, style: TextStyle(color: custom ? _amber : _ink, fontWeight: FontWeight.w900, fontSize: 14)),
              ),
            ),
            step(Icons.add_rounded, () => _set(g, v + 5)),
          ]),
        ),
        SizedBox(
          width: 34,
          child: custom
              ? IconButton(
                  tooltip: 'Back to normal',
                  padding: EdgeInsets.zero,
                  visualDensity: VisualDensity.compact,
                  onPressed: () => _set(g, g.defaultSeconds),
                  icon: Icon(Icons.restart_alt_rounded, color: _mute, size: 18),
                )
              : null,
        ),
      ]),
    );
  }

  // ─── Top winners tab ────────────────────────────────────────────────────

  List<_Winner> _winners() {
    final cutoff = _days == 0 ? null : DateTime.now().subtract(Duration(days: _days));
    final by = <String, _Winner>{};
    for (final r in widget.records) {
      if (cutoff != null && r.at.isBefore(cutoff)) continue;
      final w = by.putIfAbsent(r.email, () => _Winner(r.email));
      final g = w.games[r.game] ?? (wins: 0, won: 0.0, plays: 0);
      if (r.win) {
        w.won += r.amount;
        w.wins++;
        w.games[r.game] = (wins: g.wins + 1, won: g.won + r.amount, plays: g.plays);
      } else {
        w.staked += r.amount;
        w.plays++;
        w.games[r.game] = (wins: g.wins, won: g.won, plays: g.plays + 1);
      }
    }
    return by.values.where((w) => w.wins > 0).toList()..sort((a, b) => b.won.compareTo(a.won));
  }

  String _money(double v) => '\$${v.toStringAsFixed(2)}';

  void _showPlayer(_Winner w, int rank) {
    final name = widget.nameOf?.call(w.email) ?? w.email;
    final games = w.games.entries.toList()..sort((a, b) => b.value.wins != a.value.wins ? b.value.wins.compareTo(a.value.wins) : b.value.plays.compareTo(a.value.plays));
    final maxPlays = games.fold<int>(1, (m, e) => [m, e.value.wins + w.lossesIn(e.value)].reduce((a, b) => a > b ? a : b));
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(ctx).height * 0.85),
        decoration: BoxDecoration(color: _card, borderRadius: const BorderRadius.vertical(top: Radius.circular(24))),
        child: SafeArea(
          top: false,
          child: ListView(
            shrinkWrap: true,
            padding: const EdgeInsets.fromLTRB(18, 12, 18, 18),
            children: [
              Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: _mute.withValues(alpha: 0.4), borderRadius: BorderRadius.circular(9)))),
              const SizedBox(height: 14),
              Row(children: [
                _avatar(name, rank, 48),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 18)),
                    Text(w.email, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _mute, fontSize: 12)),
                  ]),
                ),
              ]),
              const SizedBox(height: 14),
              Row(children: [
                Expanded(child: _stat('Wins', '${w.wins}', _green)),
                const SizedBox(width: 8),
                Expanded(child: _stat('Losses', '${w.losses}', const Color(0xFFEF4444))),
              ]),
              const SizedBox(height: 8),
              Row(children: [
                Expanded(child: _stat('Won', _money(w.won), _amber)),
                const SizedBox(width: 8),
                Expanded(child: _stat('Net', '${w.net >= 0 ? '+' : '−'}${_money(w.net.abs())}', w.net >= 0 ? _green : const Color(0xFFEF4444))),
              ]),
              const SizedBox(height: 18),
              Text('Wins and losses by game', style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: 15)),
              const SizedBox(height: 4),
              Row(children: [
                Container(width: 10, height: 10, decoration: BoxDecoration(color: _green, borderRadius: BorderRadius.circular(3))),
                Text('  wins    ', style: TextStyle(color: _mute, fontSize: 11)),
                Container(width: 10, height: 10, decoration: BoxDecoration(color: const Color(0xFFEF4444), borderRadius: BorderRadius.circular(3))),
                Text('  losses', style: TextStyle(color: _mute, fontSize: 11)),
              ]),
              const SizedBox(height: 10),
              for (var i = 0; i < games.length; i++)
                Builder(builder: (_) {
                  final g = games[i].value;
                  final lost = w.lossesIn(g);
                  final total = g.wins + lost;
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Row(children: [
                        if (i == 0 && g.wins > 0) const Text('⭐ ', style: TextStyle(fontSize: 14)),
                        Expanded(child: Text(games[i].key, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w800))),
                        Text('${g.wins} W', style: const TextStyle(color: _green, fontSize: 12, fontWeight: FontWeight.w900)),
                        Text('  ·  ', style: TextStyle(color: _mute, fontSize: 12)),
                        Text('$lost L', style: const TextStyle(color: Color(0xFFEF4444), fontSize: 12, fontWeight: FontWeight.w900)),
                        Text('  ·  ${_money(g.won)}', style: TextStyle(color: _mute, fontSize: 12, fontWeight: FontWeight.w700)),
                      ]),
                      const SizedBox(height: 5),
                      // Wins (green) and losses (red) side by side, sized against the busiest game.
                      ClipRRect(
                        borderRadius: BorderRadius.circular(99),
                        child: SizedBox(
                          height: 9,
                          child: LayoutBuilder(builder: (_, box) {
                            final scale = box.maxWidth / maxPlays;
                            return Stack(children: [
                              Container(color: _mute.withValues(alpha: 0.15)),
                              Row(children: [
                                Container(width: g.wins * scale, color: _green),
                                Container(width: lost * scale, color: const Color(0xFFEF4444)),
                              ]),
                            ]);
                          }),
                        ),
                      ),
                      if (total > 0)
                        Padding(
                          padding: const EdgeInsets.only(top: 3),
                          child: Text('Wins ${(g.wins * 100 / total).round()}% of the time',
                              style: TextStyle(color: _mute, fontSize: 10.5, fontWeight: FontWeight.w600)),
                        ),
                    ]),
                  );
                }),
            ],
          ),
        ),
      ),
    );
  }

  Widget _stat(String label, String value, Color color) => Container(
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(color: color.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12)),
        child: Column(children: [
          Text(value, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 15)),
          const SizedBox(height: 2),
          Text(label, style: TextStyle(color: _mute, fontSize: 11, fontWeight: FontWeight.w700)),
        ]),
      );

  Widget _avatar(String name, int rank, double size) {
    const medals = [Color(0xFFF5C451), Color(0xFFCBD5E1), Color(0xFFD97706)];
    final ring = rank < 3 ? medals[rank] : _mute.withValues(alpha: 0.4);
    return Container(
      width: size,
      height: size,
      padding: const EdgeInsets.all(2.5),
      decoration: BoxDecoration(shape: BoxShape.circle, color: ring),
      child: Container(
        alignment: Alignment.center,
        decoration: BoxDecoration(shape: BoxShape.circle, color: _dark ? const Color(0xFF1F2937) : const Color(0xFFF1F5F9)),
        child: Text(name.trim().isEmpty ? '?' : name.trim()[0].toUpperCase(), style: TextStyle(color: _ink, fontWeight: FontWeight.w900, fontSize: size * 0.4)),
      ),
    );
  }

  Widget _winnersTab() {
    final list = _winners();
    Widget chip(int d, String label) {
      final on = _days == d;
      return Padding(
        padding: const EdgeInsets.only(right: 8),
        child: GestureDetector(
          onTap: () => setState(() => _days = d),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
            decoration: BoxDecoration(color: on ? _amber : _card, borderRadius: BorderRadius.circular(999)),
            child: Text(label, style: TextStyle(color: on ? Colors.black : _ink, fontWeight: FontWeight.w800, fontSize: 12.5)),
          ),
        ),
      );
    }

    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
      children: [
        Row(children: [chip(0, 'All time'), chip(30, '30 days'), chip(7, '7 days')]),
        const SizedBox(height: 12),
        if (list.isEmpty)
          Padding(
            padding: const EdgeInsets.only(top: 40),
            child: Column(children: [
              Icon(Icons.emoji_events_outlined, size: 48, color: _mute),
              const SizedBox(height: 8),
              Text('No game wins yet in this period.', style: TextStyle(color: _mute)),
            ]),
          ),
        for (var i = 0; i < list.length; i++) _winnerRow(list[i], i),
      ],
    );
  }

  Widget _winnerRow(_Winner w, int i) {
    final name = widget.nameOf?.call(w.email) ?? w.email;
    final best = (w.games.entries.where((e) => e.value.wins > 0).toList()..sort((a, b) => b.value.wins.compareTo(a.value.wins))).first;
    const medals = [Color(0xFFF5C451), Color(0xFFCBD5E1), Color(0xFFD97706)];
    return GestureDetector(
      onTap: () => _showPlayer(w, i),
      child: Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.fromLTRB(8, 10, 8, 10),
        decoration: BoxDecoration(
          color: _card,
          borderRadius: BorderRadius.circular(16),
          border: i < 3 ? Border.all(color: medals[i].withValues(alpha: 0.6)) : null,
        ),
        child: Row(children: [
          SizedBox(
            width: 30,
            child: Text(i < 3 ? ['🥇', '🥈', '🥉'][i] : '${i + 1}',
                textAlign: TextAlign.center, style: TextStyle(fontSize: i < 3 ? 20 : 14, fontWeight: FontWeight.w900, color: _mute)),
          ),
          const SizedBox(width: 4),
          _avatar(name, i, 40),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _ink, fontWeight: FontWeight.w800)),
              const SizedBox(height: 2),
              Text('${w.wins} wins · ${w.losses} losses · best: ${best.key}', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _mute, fontSize: 11.5)),
            ]),
          ),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text(_money(w.won), style: const TextStyle(color: _green, fontWeight: FontWeight.w900, fontSize: 15)),
            Text('won', style: TextStyle(color: _mute, fontSize: 10.5)),
          ]),
          Icon(Icons.chevron_right_rounded, color: _mute),
        ]),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bg,
      appBar: AppBar(backgroundColor: _bg, foregroundColor: _ink, elevation: 0, toolbarHeight: 44),
      bottomNavigationBar: _tab == 0
          ? SafeArea(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 6, 16, 10),
                child: FilledButton.icon(
                  onPressed: _dirty && !_saving ? _save : null,
                  style: FilledButton.styleFrom(
                    backgroundColor: _green,
                    padding: const EdgeInsets.symmetric(vertical: 15),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  icon: _saving
                      ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : Icon(_dirty ? Icons.save_rounded : Icons.check_rounded),
                  label: Text(_dirty ? 'Save for every player' : 'All saved', style: const TextStyle(fontWeight: FontWeight.w900)),
                ),
              ),
            )
          : null,
      body: Column(children: [
        _header(),
        _tabs(),
        Expanded(child: _tab == 0 ? _timersTab() : _winnersTab()),
      ]),
    );
  }
}
