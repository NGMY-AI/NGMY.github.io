import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_dice_config.dart';

/// A player the admin can pick for a personal dice rule.
class NgmyDiceUserOption {
  const NgmyDiceUserOption({required this.email, this.name = ''});

  final String email;
  final String name;

  String get label => name.trim().isEmpty ? email : name.trim();
}

/// Dice control on Admin → Game Timers: wins and loses for everyone and for one player.
class NgmyDiceControlPanel extends StatefulWidget {
  const NgmyDiceControlPanel({
    super.key,
    required this.settings,
    required this.onChanged,
    required this.users,
    this.searchCloudUsers,
    this.livePoll = true,
    this.isDark = true,
  });

  final NgmyDiceSettings settings;
  final Future<void> Function() onChanged;
  final List<NgmyDiceUserOption> users;
  final Future<List<NgmyDiceUserOption>> Function(String query)? searchCloudUsers;
  final bool livePoll;
  final bool isDark;

  @override
  State<NgmyDiceControlPanel> createState() => _NgmyDiceControlPanelState();
}

class _NgmyDiceControlPanelState extends State<NgmyDiceControlPanel> {
  static const _win = Color(0xFF00B25A);
  static const _lose = Color(0xFFEF4444);
  static const _amber = Color(0xFFF59E0B);

  final _search = TextEditingController();
  final _searchFocus = FocusNode();
  Timer? _poll;
  Timer? _debounce;
  bool _saving = false;
  bool _searching = false;

  String _period = 'day';
  int _crowdWins = 0;
  int _crowdLoses = 0;

  NgmyDiceUserOption? _picked;
  List<NgmyDiceUserOption> _suggestions = const [];
  int _userWins = 1;
  int _userLoses = 0;

  @override
  void initState() {
    super.initState();
    _loadCrowdFields();
    if (widget.livePoll) {
      _startPolling();
      unawaited(_refresh());
    }
  }

  @override
  void dispose() {
    _poll?.cancel();
    _debounce?.cancel();
    _search.dispose();
    _searchFocus.dispose();
    super.dispose();
  }

  void _loadCrowdFields() {
    final rule = widget.settings.crowdRule;
    _period = (rule['period'] ?? 'day').toString() == 'week' ? 'week' : 'day';
    _crowdWins = (rule['wins'] as num?)?.toInt() ?? 0;
    _crowdLoses = (rule['loses'] as num?)?.toInt() ?? 0;
  }

  void _startPolling() {
    _poll?.cancel();
    _poll = Timer.periodic(const Duration(seconds: 2), (_) => unawaited(_refresh()));
  }

  Future<void> _refresh() async {
    if (_saving) return;
    final before = widget.settings.crowdRule['id'];
    await NgmyDiceLive.pull(widget.settings);
    if (!mounted) return;
    setState(() {
      if (before != widget.settings.crowdRule['id']) _loadCrowdFields();
    });
  }

  Future<void> _save(String message) async {
    if (_saving) return;
    _poll?.cancel();
    setState(() => _saving = true);
    try {
      await widget.onChanged();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
    } finally {
      if (mounted) {
        setState(() => _saving = false);
        if (widget.livePoll) _startPolling();
      }
    }
  }

  void _onSearchChanged(String raw) {
    final q = raw.trim().toLowerCase();
    if (_picked != null && _picked!.email.toLowerCase() != q) _picked = null;
    _debounce?.cancel();
    if (q.isEmpty) {
      setState(() {
        _suggestions = const [];
        _searching = false;
      });
      return;
    }
    setState(() => _suggestions = _localMatches(q));
    final cloud = widget.searchCloudUsers;
    if (cloud == null || q.length < 2) return;
    setState(() => _searching = true);
    _debounce = Timer(const Duration(milliseconds: 350), () async {
      List<NgmyDiceUserOption> found = const [];
      try {
        found = await cloud(q);
      } catch (_) {}
      if (!mounted || _search.text.trim().toLowerCase() != q) return;
      setState(() {
        _searching = false;
        _suggestions = _dedupe([..._localMatches(q), ...found]).take(8).toList();
      });
    });
  }

  List<NgmyDiceUserOption> _localMatches(String q) {
    final hits = widget.users.where((u) {
      return u.email.toLowerCase().contains(q) || u.name.toLowerCase().contains(q);
    }).toList();
    hits.sort((a, b) {
      final ap = a.email.toLowerCase().startsWith(q) ? 0 : 1;
      final bp = b.email.toLowerCase().startsWith(q) ? 0 : 1;
      if (ap != bp) return ap - bp;
      return a.email.compareTo(b.email);
    });
    return _dedupe(hits).take(8).toList();
  }

  List<NgmyDiceUserOption> _dedupe(List<NgmyDiceUserOption> items) {
    final seen = <String>{};
    final out = <NgmyDiceUserOption>[];
    for (final u in items) {
      final key = u.email.toLowerCase().trim();
      if (key.isEmpty || !seen.add(key)) continue;
      out.add(u);
    }
    return out;
  }

  void _pick(NgmyDiceUserOption u) {
    setState(() {
      _picked = u;
      _suggestions = const [];
      _search.text = u.email;
      _search.selection = TextSelection.collapsed(offset: u.email.length);
    });
    _searchFocus.unfocus();
  }

  void _clearPick() {
    setState(() {
      _picked = null;
      _search.clear();
      _suggestions = const [];
    });
  }

  Future<void> _saveCrowd() async {
    ngmySetCrowdRule(cfg: widget.settings, period: _period, wins: _crowdWins, loses: _crowdLoses);
    await _save(
      _crowdWins + _crowdLoses == 0
          ? 'Dice control for everyone is off. Normal play.'
          : 'Saved: every player wins $_crowdWins and loses $_crowdLoses per ${_period == 'week' ? 'week' : 'day'}.',
    );
  }

  Future<void> _stopCrowd() async {
    setState(() {
      _crowdWins = 0;
      _crowdLoses = 0;
    });
    await _saveCrowd();
  }

  Future<void> _saveUser() async {
    final picked = _picked;
    if (picked == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Search a player and tap their name first.')),
      );
      return;
    }
    if (_userWins + _userLoses == 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Choose at least 1 win or 1 lose.')),
      );
      return;
    }
    ngmySetUserOutcomeRule(
      cfg: widget.settings,
      email: picked.email,
      name: picked.name,
      wins: _userWins,
      loses: _userLoses,
    );
    await _save('${picked.label}: next plays win $_userWins and lose $_userLoses.');
  }

  Future<void> _stopUser(String email, String label) async {
    ngmyClearUserDiceRules(widget.settings, email);
    await _save('Stopped dice control for $label.');
  }

  String _nameFor(String email) {
    final key = email.toLowerCase().trim();
    for (final u in widget.users) {
      if (u.email.toLowerCase().trim() == key && u.name.trim().isNotEmpty) return u.name.trim();
    }
    return '';
  }

  @override
  Widget build(BuildContext context) {
    final dark = widget.isDark;
    final card = dark ? const Color(0xFF151E2E) : Colors.white;
    final ink = dark ? Colors.white : const Color(0xFF111827);
    final mute = dark ? Colors.white60 : const Color(0xFF6B7280);
    final fill = dark ? const Color(0xFF0B1220) : const Color(0xFFF4F6FA);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _header(ink),
        const SizedBox(height: 12),
        _everyoneCard(card, ink, mute, fill),
        const SizedBox(height: 12),
        _playerCard(card, ink, mute, fill),
        const SizedBox(height: 12),
        _liveCard(card, ink, mute, fill),
      ],
    );
  }

  Widget _header(Color ink) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: const LinearGradient(
          colors: [Color(0xFF7C3AED), Color(0xFF4F46E5), Color(0xFF0EA5E9)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: const Row(
        children: [
          Text('🎲', style: TextStyle(fontSize: 34)),
          SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Dice control', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                SizedBox(height: 4),
                Text(
                  'Choose how many Dice Roll games players win and lose. When the count is used up, play goes back to normal.',
                  style: TextStyle(color: Colors.white, fontSize: 12.5, height: 1.35),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  BoxDecoration _cardDecoration(Color card, Color accent) => BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: accent.withValues(alpha: 0.55)),
      );

  Widget _sectionTitle(String emoji, String title, String sub, Color ink, Color mute) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(emoji, style: const TextStyle(fontSize: 22)),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 17)),
              const SizedBox(height: 2),
              Text(sub, style: TextStyle(color: mute, fontSize: 12.5, height: 1.3)),
            ],
          ),
        ),
      ],
    );
  }

  Widget _everyoneCard(Color card, Color ink, Color mute, Color fill) {
    final rule = widget.settings.crowdRule;
    final savedWins = (rule['wins'] as num?)?.toInt() ?? 0;
    final savedLoses = (rule['loses'] as num?)?.toInt() ?? 0;
    final savedPeriod = (rule['period'] ?? 'day').toString() == 'week' ? 'week' : 'day';
    final active = savedWins + savedLoses > 0;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: _cardDecoration(card, _amber),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _sectionTitle('👥', 'Everyone', 'Each player gets this many wins and loses, counted on their own phone.', ink, mute),
          const SizedBox(height: 12),
          SizedBox(
            width: double.infinity,
            child: SegmentedButton<String>(
              segments: const [
                ButtonSegment(value: 'day', label: Text('Per day')),
                ButtonSegment(value: 'week', label: Text('Per week')),
              ],
              selected: {_period},
              showSelectedIcon: false,
              style: SegmentedButton.styleFrom(
                foregroundColor: ink,
                backgroundColor: fill,
                selectedForegroundColor: const Color(0xFF111827),
                selectedBackgroundColor: _amber,
                side: BorderSide(color: _amber.withValues(alpha: 0.5)),
              ),
              onSelectionChanged: (s) => setState(() => _period = s.first),
            ),
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: _CountStepper(
                  label: 'Games to WIN',
                  value: _crowdWins,
                  color: _win,
                  ink: ink,
                  mute: mute,
                  fill: fill,
                  onChanged: (v) => setState(() => _crowdWins = v),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: _CountStepper(
                  label: 'Games to LOSE',
                  value: _crowdLoses,
                  color: _lose,
                  ink: ink,
                  mute: mute,
                  fill: fill,
                  onChanged: (v) => setState(() => _crowdLoses = v),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
            decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(12)),
            child: Text(
              active
                  ? 'Now live: every player wins $savedWins and loses $savedLoses per $savedPeriod.'
                  : 'Now: off. Everyone plays normally.',
              style: TextStyle(color: active ? _win : mute, fontWeight: FontWeight.w800, fontSize: 12.5),
            ),
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: FilledButton(
                  onPressed: _saving ? null : _saveCrowd,
                  style: FilledButton.styleFrom(
                    backgroundColor: _amber,
                    foregroundColor: const Color(0xFF111827),
                    padding: const EdgeInsets.symmetric(vertical: 13),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: Text(_saving ? 'Saving…' : 'Save for everyone', style: const TextStyle(fontWeight: FontWeight.w900)),
                ),
              ),
              if (active) ...[
                const SizedBox(width: 8),
                OutlinedButton(
                  onPressed: _saving ? null : _stopCrowd,
                  style: OutlinedButton.styleFrom(
                    foregroundColor: ink,
                    padding: const EdgeInsets.symmetric(vertical: 13, horizontal: 16),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: const Text('Turn off', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
              ],
            ],
          ),
        ],
      ),
    );
  }

  Widget _playerCard(Color card, Color ink, Color mute, Color fill) {
    final picked = _picked;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: _cardDecoration(card, const Color(0xFF6366F1)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _sectionTitle('🎯', 'One player', 'Search by email or name, tap the player, then set their next plays.', ink, mute),
          const SizedBox(height: 12),
          TextField(
            controller: _search,
            focusNode: _searchFocus,
            onChanged: _onSearchChanged,
            autocorrect: false,
            enableSuggestions: false,
            keyboardType: TextInputType.emailAddress,
            style: TextStyle(color: ink, fontWeight: FontWeight.w700),
            decoration: InputDecoration(
              hintText: 'Start typing an email…',
              hintStyle: TextStyle(color: mute),
              prefixIcon: Icon(Icons.search_rounded, color: mute),
              suffixIcon: _searching
                  ? const Padding(
                      padding: EdgeInsets.all(14),
                      child: SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2)),
                    )
                  : (_search.text.isEmpty
                      ? null
                      : IconButton(icon: Icon(Icons.close_rounded, color: mute), onPressed: _clearPick)),
              filled: true,
              fillColor: fill,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
            ),
          ),
          if (picked == null && _suggestions.isNotEmpty) ...[
            const SizedBox(height: 6),
            Container(
              decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(14)),
              child: Column(
                children: [
                  for (final u in _suggestions)
                    InkWell(
                      borderRadius: BorderRadius.circular(14),
                      onTap: () => _pick(u),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                        child: Row(
                          children: [
                            CircleAvatar(
                              radius: 16,
                              backgroundColor: const Color(0xFF6366F1).withValues(alpha: 0.2),
                              child: Text(
                                (u.label.isEmpty ? '?' : u.label[0]).toUpperCase(),
                                style: const TextStyle(color: Color(0xFF6366F1), fontWeight: FontWeight.w900),
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  if (u.name.trim().isNotEmpty)
                                    Text(u.name.trim(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800)),
                                  Text(u.email, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: u.name.trim().isEmpty ? ink : mute, fontSize: 12.5)),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ],
          if (picked == null && _suggestions.isEmpty && _search.text.trim().isNotEmpty && !_searching) ...[
            const SizedBox(height: 8),
            Text('No player found for "${_search.text.trim()}".', style: TextStyle(color: mute, fontSize: 12.5)),
          ],
          if (picked != null) ...[
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(
                color: _win.withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: _win.withValues(alpha: 0.5)),
              ),
              child: Row(
                children: [
                  const Icon(Icons.check_circle_rounded, color: _win),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(picked.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
                        if (picked.name.trim().isNotEmpty)
                          Text(picked.email, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: mute, fontSize: 12)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
          const SizedBox(height: 12),
          Text('Their next plays', style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
          const SizedBox(height: 8),
          Row(
            children: [
              Expanded(
                child: _CountStepper(
                  label: 'Games to WIN',
                  value: _userWins,
                  color: _win,
                  ink: ink,
                  mute: mute,
                  fill: fill,
                  onChanged: (v) => setState(() => _userWins = v),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: _CountStepper(
                  label: 'Games to LOSE',
                  value: _userLoses,
                  color: _lose,
                  ink: ink,
                  mute: mute,
                  fill: fill,
                  onChanged: (v) => setState(() => _userLoses = v),
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            'Wins and loses are mixed in random order. A win lands on +1, +2 or +3. A lose lands on −1 or −2.',
            style: TextStyle(color: mute, fontSize: 12, height: 1.3),
          ),
          const SizedBox(height: 10),
          SizedBox(
            width: double.infinity,
            child: FilledButton.icon(
              onPressed: _saving ? null : _saveUser,
              icon: const Icon(Icons.casino_rounded),
              style: FilledButton.styleFrom(
                backgroundColor: const Color(0xFF6366F1),
                padding: const EdgeInsets.symmetric(vertical: 13),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              label: Text(
                picked == null ? 'Choose a player first' : 'Set dice for ${picked.label}',
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontWeight: FontWeight.w900),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _liveCard(Color card, Color ink, Color mute, Color fill) {
    final rows = <Widget>[];
    for (final rule in widget.settings.userOutcomeRules) {
      final email = (rule['email'] ?? '').toString();
      if (email.isEmpty) continue;
      final name = (rule['name'] ?? '').toString().trim().isNotEmpty ? (rule['name'] as String).trim() : _nameFor(email);
      final winsLeft = (rule['winsLeft'] as num?)?.toInt() ?? 0;
      final losesLeft = (rule['losesLeft'] as num?)?.toInt() ?? 0;
      final winsSet = (rule['winsSet'] as num?)?.toInt() ?? winsLeft;
      final losesSet = (rule['losesSet'] as num?)?.toInt() ?? losesLeft;
      if (winsSet + losesSet == 0) continue;
      rows.add(_liveRow(
        title: name.isEmpty ? email : name,
        subtitle: name.isEmpty ? '' : email,
        winsLeft: winsLeft,
        winsSet: winsSet,
        losesLeft: losesLeft,
        losesSet: losesSet,
        ink: ink,
        mute: mute,
        fill: fill,
        onStop: () => _stopUser(email, name.isEmpty ? email : name),
      ));
    }
    for (final rule in widget.settings.userFaceRules) {
      final email = (rule['email'] ?? '').toString();
      final next = (rule['nextLeft'] as num?)?.toInt() ?? 0;
      final perDay = (rule['perDay'] as num?)?.toInt() ?? 0;
      final perWeek = (rule['perWeek'] as num?)?.toInt() ?? 0;
      if (email.isEmpty || next + perDay + perWeek <= 0) continue;
      final face = (rule['outcome'] as num?)?.toInt() ?? 0;
      rows.add(Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.fromLTRB(12, 8, 4, 8),
        decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(12)),
        child: Row(
          children: [
            Expanded(
              child: Text(
                '$email   ${face > 0 ? '+$face' : '$face'}   next $next   day ${(rule['dayUsed'] as num?)?.toInt() ?? 0}/$perDay   week ${(rule['weekUsed'] as num?)?.toInt() ?? 0}/$perWeek',
                style: TextStyle(color: mute, fontSize: 12.5, fontWeight: FontWeight.w700),
              ),
            ),
            IconButton(
              tooltip: 'Stop',
              onPressed: _saving ? null : () => _stopUser(email, email),
              icon: Icon(Icons.close_rounded, color: mute),
            ),
          ],
        ),
      ));
    }
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: _cardDecoration(card, _win),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _sectionTitle('📊', 'Live count', 'Updates every 2 seconds while this page is open.', ink, mute),
          const SizedBox(height: 10),
          if (rows.isEmpty)
            Text('No player has a personal rule right now.', style: TextStyle(color: mute, fontSize: 12.5))
          else
            ...rows,
        ],
      ),
    );
  }

  Widget _liveRow({
    required String title,
    required String subtitle,
    required int winsLeft,
    required int winsSet,
    required int losesLeft,
    required int losesSet,
    required Color ink,
    required Color mute,
    required Color fill,
    required VoidCallback onStop,
  }) {
    final done = winsLeft + losesLeft <= 0;
    Widget chip(String text, Color c) => Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
          decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(20)),
          child: Text(text, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 12)),
        );
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.fromLTRB(12, 10, 4, 10),
      decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(14)),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
                if (subtitle.isNotEmpty) Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: mute, fontSize: 11.5)),
                const SizedBox(height: 6),
                Wrap(
                  spacing: 6,
                  runSpacing: 4,
                  children: done
                      ? [chip('Done · normal play', mute)]
                      : [
                          chip('Win $winsLeft of $winsSet left', _win),
                          chip('Lose $losesLeft of $losesSet left', _lose),
                        ],
                ),
              ],
            ),
          ),
          if (!done)
            IconButton(
              tooltip: 'Stop',
              onPressed: _saving ? null : onStop,
              icon: Icon(Icons.close_rounded, color: mute),
            ),
        ],
      ),
    );
  }
}

class _CountStepper extends StatelessWidget {
  const _CountStepper({
    required this.label,
    required this.value,
    required this.color,
    required this.ink,
    required this.mute,
    required this.fill,
    required this.onChanged,
  });

  final String label;
  final int value;
  final Color color;
  final Color ink;
  final Color mute;
  final Color fill;
  final ValueChanged<int> onChanged;

  Future<void> _type(BuildContext context) async {
    final ctl = TextEditingController(text: '$value');
    final v = await showDialog<int>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(label),
        content: TextField(
          controller: ctl,
          autofocus: true,
          keyboardType: TextInputType.number,
          decoration: const InputDecoration(helperText: 'From 0 to 999'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, int.tryParse(ctl.text.trim())), child: const Text('Set')),
        ],
      ),
    );
    if (v != null) onChanged(v.clamp(0, 999));
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(6, 10, 6, 8),
      decoration: BoxDecoration(
        color: fill,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: color.withValues(alpha: 0.45)),
      ),
      child: Column(
        children: [
          Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 12)),
          const SizedBox(height: 4),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                visualDensity: VisualDensity.compact,
                onPressed: value > 0 ? () => onChanged(value - 1) : null,
                icon: Icon(Icons.remove_circle_rounded, color: value > 0 ? color : mute),
              ),
              GestureDetector(
                onTap: () => _type(context),
                child: Text('$value', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 28)),
              ),
              IconButton(
                visualDensity: VisualDensity.compact,
                onPressed: value < 999 ? () => onChanged(value + 1) : null,
                icon: Icon(Icons.add_circle_rounded, color: color),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
