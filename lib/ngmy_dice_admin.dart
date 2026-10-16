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
  final Future<String?> Function() onChanged;
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
  static const _plus3 = Color(0xFF8B5CF6);

  final _search = TextEditingController();
  final _searchFocus = FocusNode();
  Timer? _poll;
  Timer? _debounce;
  bool _saving = false;
  bool _searching = false;
  bool _disposed = false;
  String _syncError = '';

  String _period = 'day';
  int _crowdWins = 0;
  int _crowdLoses = 0;

  NgmyDiceUserOption? _picked;
  List<NgmyDiceUserOption> _suggestions = const [];
  int _userWins = 1;
  int _userLoses = 0;
  int _userPlus3 = 0;

  @override
  void initState() {
    super.initState();
    _loadCrowdFields();
    if (widget.livePoll) unawaited(_refresh());
  }

  @override
  void dispose() {
    _disposed = true;
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

  bool get _anyCounting => widget.settings.userOutcomeRules.any((g) =>
      ((g['winsLeft'] as num?)?.toInt() ?? 0) +
          ((g['losesLeft'] as num?)?.toInt() ?? 0) +
          ((g['plus3Left'] as num?)?.toInt() ?? 0) >
      0);

  /// Reads the newest counts, then schedules the next read: every second while someone is
  /// still counting down, every few seconds otherwise.
  Future<void> _refresh() async {
    _poll?.cancel();
    if (_disposed || !widget.livePoll) return;
    if (!_saving) {
      final before = widget.settings.crowdRule['id'];
      final ok = await NgmyDiceLive.pull(widget.settings);
      if (_disposed) return;
      setState(() {
        _syncError = ok ? '' : NgmyDiceLive.lastError;
        if (before != widget.settings.crowdRule['id']) _loadCrowdFields();
      });
    }
    if (_disposed) return;
    _poll = Timer(Duration(milliseconds: _anyCounting ? 1000 : 4000), () => unawaited(_refresh()));
  }

  Future<void> _save(String message, void Function() apply) async {
    if (_saving) return;
    _poll?.cancel();
    setState(() => _saving = true);
    String? error;
    try {
      if (widget.livePoll) await NgmyDiceLive.pull(widget.settings);
      apply();
      error = await widget.onChanged();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        backgroundColor: error == null ? null : const Color(0xFFB91C1C),
        duration: Duration(seconds: error == null ? 3 : 6),
        content: Text(error == null
            ? message
            : 'Saved on this phone, but the server did not take it yet, so players will not see it. ($error)'),
      ));
    } finally {
      if (mounted) {
        setState(() {
          _saving = false;
          _syncError = error ?? '';
        });
        if (widget.livePoll) unawaited(_refresh());
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
    await _save(
      _crowdWins + _crowdLoses == 0
          ? 'Dice control for everyone is off. Normal play.'
          : 'Saved: every player wins $_crowdWins and loses $_crowdLoses per ${_period == 'week' ? 'week' : 'day'}.',
      () => ngmySetCrowdRule(cfg: widget.settings, period: _period, wins: _crowdWins, loses: _crowdLoses),
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
    if (_userWins + _userLoses + _userPlus3 == 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Choose at least 1 win, 1 lose or 1 +3.')),
      );
      return;
    }
    await _save(
      '${picked.label}: next plays win $_userWins, lose $_userLoses, +3 $_userPlus3.',
      () => ngmySetUserOutcomeRule(
        cfg: widget.settings,
        email: picked.email,
        name: picked.name,
        wins: _userWins,
        loses: _userLoses,
        plus3: _userPlus3,
      ),
    );
  }

  Future<void> _stopUser(String email, String label) async {
    await _save('Stopped dice control for $label.', () => ngmyClearUserDiceRules(widget.settings, email));
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
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: _CountStepper(
                  label: 'WIN',
                  hint: 'games per ${_period == 'week' ? 'week' : 'day'}',
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
                  label: 'LOSE',
                  hint: 'games per ${_period == 'week' ? 'week' : 'day'}',
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
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: _CountStepper(
                  label: 'WIN',
                  hint: '+1 / +2',
                  value: _userWins,
                  color: _win,
                  ink: ink,
                  mute: mute,
                  fill: fill,
                  onChanged: (v) => setState(() => _userWins = v),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _CountStepper(
                  label: 'LOSE',
                  hint: '−1 / −2',
                  value: _userLoses,
                  color: _lose,
                  ink: ink,
                  mute: mute,
                  fill: fill,
                  onChanged: (v) => setState(() => _userLoses = v),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _CountStepper(
                  label: '+3',
                  hint: 'exactly +3',
                  value: _userPlus3,
                  color: _plus3,
                  ink: ink,
                  mute: mute,
                  fill: fill,
                  onChanged: (v) => setState(() => _userPlus3 = v),
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            'Their next ${_userWins + _userLoses + _userPlus3} plays follow these counts, mixed in random order. Then play is normal.',
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
    final active = <Widget>[];
    final done = <Widget>[];
    for (final rule in widget.settings.userOutcomeRules) {
      final email = (rule['email'] ?? '').toString();
      if (email.isEmpty) continue;
      int n(String f) => (rule[f] as num?)?.toInt() ?? 0;
      final name = (rule['name'] ?? '').toString().trim().isNotEmpty ? (rule['name'] as String).trim() : _nameFor(email);
      final winsSet = n('winsSet') > 0 || n('winsLeft') == 0 ? n('winsSet') : n('winsLeft');
      final losesSet = n('losesSet') > 0 || n('losesLeft') == 0 ? n('losesSet') : n('losesLeft');
      final plus3Set = n('plus3Set');
      if (winsSet + losesSet + plus3Set == 0) continue;
      final row = _LiveRuleTile(
        key: ValueKey('live-$email'),
        title: name.isEmpty ? email : name,
        subtitle: name.isEmpty ? '' : email,
        wins: _Tally(n('winsLeft'), winsSet),
        loses: _Tally(n('losesLeft'), losesSet),
        plus3: _Tally(n('plus3Left'), plus3Set),
        ink: ink,
        mute: mute,
        fill: fill,
        onStop: _saving ? null : () => _stopUser(email, name.isEmpty ? email : name),
      );
      (n('winsLeft') + n('losesLeft') + n('plus3Left') > 0 ? active : done).add(row);
    }
    rows
      ..addAll(active)
      ..addAll(done);
    for (final rule in widget.settings.userFaceRules) {
      final email = (rule['email'] ?? '').toString();
      final next = (rule['nextLeft'] as num?)?.toInt() ?? 0;
      final perDay = (rule['perDay'] as num?)?.toInt() ?? 0;
      final perWeek = (rule['perWeek'] as num?)?.toInt() ?? 0;
      if (email.isEmpty || next + perDay + perWeek <= 0) continue;
      final face = (rule['outcome'] as num?)?.toInt() ?? 0;
      rows.add(Container(
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.fromLTRB(12, 8, 4, 8),
        decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(14)),
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

    final ready = NgmyDiceLive.serverReady;
    final bannerText = _syncError.isNotEmpty
        ? 'Cannot reach the server right now. Counts here may be behind.'
        : (!ready && widget.livePoll
            ? 'Live sync is off: the server has not been updated for dice control yet. Players cannot send their counts here until bright-handler is deployed.'
            : '');

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: _cardDecoration(card, _win),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(child: _sectionTitle('📊', 'Live count', 'Watch each player\'s plays go down as they play.', ink, mute)),
              if (widget.livePoll) _LiveDot(ok: ready && _syncError.isEmpty),
            ],
          ),
          if (bannerText.isNotEmpty) ...[
            const SizedBox(height: 10),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
              decoration: BoxDecoration(
                color: _lose.withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: _lose.withValues(alpha: 0.45)),
              ),
              child: Text(bannerText, style: TextStyle(color: ink, fontSize: 12.5, height: 1.3, fontWeight: FontWeight.w700)),
            ),
          ],
          const SizedBox(height: 12),
          if (rows.isEmpty)
            Text('No player has a personal rule right now.', style: TextStyle(color: mute, fontSize: 12.5))
          else
            ...rows,
        ],
      ),
    );
  }
}

class _Tally {
  const _Tally(this.left, this.total);
  final int left;
  final int total;
}

/// Green when full, amber as it drains, red when nearly out.
Color _barColor(double fraction) {
  if (fraction > 0.6) return const Color(0xFF22C55E);
  if (fraction > 0.3) return const Color(0xFFF59E0B);
  return const Color(0xFFEF4444);
}

class _LiveDot extends StatefulWidget {
  const _LiveDot({required this.ok});
  final bool ok;

  @override
  State<_LiveDot> createState() => _LiveDotState();
}

class _LiveDotState extends State<_LiveDot> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))
    ..repeat(reverse: true);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final color = widget.ok ? const Color(0xFF22C55E) : const Color(0xFFEF4444);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
      decoration: BoxDecoration(color: color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(20)),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          FadeTransition(
            opacity: Tween<double>(begin: 0.35, end: 1).animate(_c),
            child: Container(width: 8, height: 8, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
          ),
          const SizedBox(width: 6),
          Text(widget.ok ? 'LIVE' : 'OFFLINE', style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 11)),
        ],
      ),
    );
  }
}

class _AnimatedBar extends StatelessWidget {
  const _AnimatedBar({required this.fraction, required this.height, required this.track});
  final double fraction;
  final double height;
  final Color track;

  @override
  Widget build(BuildContext context) {
    final f = fraction.clamp(0.0, 1.0);
    return TweenAnimationBuilder<double>(
      tween: Tween<double>(end: f),
      duration: const Duration(milliseconds: 450),
      curve: Curves.easeOutCubic,
      builder: (context, value, _) {
        return ClipRRect(
          borderRadius: BorderRadius.circular(height),
          child: Stack(
            children: [
              Container(height: height, color: track),
              FractionallySizedBox(
                widthFactor: value,
                child: Container(height: height, color: _barColor(value)),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _LiveRuleTile extends StatelessWidget {
  const _LiveRuleTile({
    super.key,
    required this.title,
    required this.subtitle,
    required this.wins,
    required this.loses,
    required this.plus3,
    required this.ink,
    required this.mute,
    required this.fill,
    required this.onStop,
  });

  final String title;
  final String subtitle;
  final _Tally wins;
  final _Tally loses;
  final _Tally plus3;
  final Color ink;
  final Color mute;
  final Color fill;
  final VoidCallback? onStop;

  @override
  Widget build(BuildContext context) {
    final total = wins.total + loses.total + plus3.total;
    final left = wins.left + loses.left + plus3.left;
    final finished = left <= 0;
    final fraction = total == 0 ? 0.0 : left / total;
    final accent = finished ? mute : _barColor(fraction);
    final track = ink.withValues(alpha: 0.12);

    Widget tile(String label, _Tally t, Color c) {
      final f = t.total == 0 ? 0.0 : t.left / t.total;
      final off = t.total == 0;
      return Expanded(
        child: Container(
          padding: const EdgeInsets.fromLTRB(8, 8, 8, 8),
          decoration: BoxDecoration(
            color: ink.withValues(alpha: 0.05),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: (off ? mute : c).withValues(alpha: 0.35)),
          ),
          child: Column(
            children: [
              Text(label, style: TextStyle(color: off ? mute : c, fontWeight: FontWeight.w900, fontSize: 11)),
              const SizedBox(height: 2),
              Text(
                off ? '—' : '${t.left}/${t.total}',
                style: TextStyle(color: off ? mute : ink, fontWeight: FontWeight.w900, fontSize: 18),
              ),
              const SizedBox(height: 6),
              _AnimatedBar(fraction: off ? 0 : f, height: 5, track: track),
            ],
          ),
        ),
      );
    }

    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.fromLTRB(12, 12, 6, 12),
      decoration: BoxDecoration(
        color: fill,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: accent.withValues(alpha: 0.4)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              CircleAvatar(
                radius: 17,
                backgroundColor: accent.withValues(alpha: 0.2),
                child: Text(
                  (title.isEmpty ? '?' : title[0]).toUpperCase(),
                  style: TextStyle(color: accent, fontWeight: FontWeight.w900),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
                    if (subtitle.isNotEmpty)
                      Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: mute, fontSize: 11.5)),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                decoration: BoxDecoration(color: accent.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(20)),
                child: Text(
                  finished ? 'DONE' : '$left of $total left',
                  style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 11.5),
                ),
              ),
              if (!finished)
                IconButton(
                  tooltip: 'Stop',
                  visualDensity: VisualDensity.compact,
                  onPressed: onStop,
                  icon: Icon(Icons.close_rounded, color: mute),
                )
              else
                const SizedBox(width: 6),
            ],
          ),
          const SizedBox(height: 10),
          Padding(
            padding: const EdgeInsets.only(right: 6),
            child: _AnimatedBar(fraction: fraction, height: 12, track: track),
          ),
          const SizedBox(height: 10),
          Padding(
            padding: const EdgeInsets.only(right: 6),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                tile('WIN', wins, const Color(0xFF00B25A)),
                const SizedBox(width: 8),
                tile('LOSE', loses, const Color(0xFFEF4444)),
                const SizedBox(width: 8),
                tile('+3', plus3, const Color(0xFF8B5CF6)),
              ],
            ),
          ),
          if (finished)
            Padding(
              padding: const EdgeInsets.only(top: 8, right: 6),
              child: Text('Used up. Normal play now.', style: TextStyle(color: mute, fontSize: 12)),
            ),
        ],
      ),
    );
  }
}

class _CountStepper extends StatelessWidget {
  const _CountStepper({
    required this.label,
    required this.hint,
    required this.value,
    required this.color,
    required this.ink,
    required this.mute,
    required this.fill,
    required this.onChanged,
  });

  final String label;
  final String hint;
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

  Widget _roundButton(IconData icon, VoidCallback? onTap, Color c) {
    return Material(
      color: c.withValues(alpha: onTap == null ? 0.08 : 0.2),
      shape: const CircleBorder(),
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: onTap,
        child: SizedBox(
          width: 34,
          height: 34,
          child: Icon(icon, size: 20, color: onTap == null ? mute : c),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(6, 10, 6, 10),
      decoration: BoxDecoration(
        color: fill,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: color.withValues(alpha: 0.45)),
      ),
      child: Column(
        children: [
          Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 13)),
          Text(hint, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: mute, fontSize: 10.5)),
          const SizedBox(height: 4),
          GestureDetector(
            onTap: () => _type(context),
            child: Text('$value', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 30)),
          ),
          const SizedBox(height: 6),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _roundButton(Icons.remove_rounded, value > 0 ? () => onChanged(value - 1) : null, color),
              const SizedBox(width: 10),
              _roundButton(Icons.add_rounded, value < 999 ? () => onChanged(value + 1) : null, color),
            ],
          ),
        ],
      ),
    );
  }
}
