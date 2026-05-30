import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_dice_config.dart';
import 'ngmy_games.dart';

class NgmyAdminUserEntry {
  final String email;
  final String username;
  const NgmyAdminUserEntry({required this.email, required this.username});
}

/// Redesigned Game Center admin — numeric fields, 1–120s timers, dice section.
Future<void> showNgmyGameCenterAdminSheet({
  required BuildContext context,
  required bool isDark,
  required Map<String, int> initialLimits,
  required Map<String, dynamic> initialDice,
  required List<NgmyAdminUserEntry> users,
  required void Function(Map<String, int> limits, Map<String, dynamic> diceJson) onSave,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyGameCenterAdminSheet(
      isDark: isDark,
      initialLimits: Map<String, int>.from(initialLimits),
      initialDice: NgmyDiceSettings.fromJson(initialDice),
      users: users,
      onSave: onSave,
    ),
  );
}

class _NgmyGameCenterAdminSheet extends StatefulWidget {
  final bool isDark;
  final Map<String, int> initialLimits;
  final NgmyDiceSettings initialDice;
  final List<NgmyAdminUserEntry> users;
  final void Function(Map<String, int> limits, Map<String, dynamic> diceJson) onSave;

  const _NgmyGameCenterAdminSheet({
    required this.isDark,
    required this.initialLimits,
    required this.initialDice,
    required this.users,
    required this.onSave,
  });

  @override
  State<_NgmyGameCenterAdminSheet> createState() => _NgmyGameCenterAdminSheetState();
}

class _NgmyGameCenterAdminSheetState extends State<_NgmyGameCenterAdminSheet> with SingleTickerProviderStateMixin {
  late TabController _tabs;
  late Map<String, int> _limits;
  late NgmyDiceSettings _dice;
  final _userSearchC = TextEditingController();
  final _grantWinsC = TextEditingController(text: '5');
  String _userQuery = '';
  final Map<String, TextEditingController> _limitCtrls = {};
  late final Map<String, TextEditingController> _diceCtrls;

  @override
  void initState() {
    super.initState();
    _tabs = TabController(length: 2, vsync: this);
    _limits = Map<String, int>.from(widget.initialLimits);
    _dice = widget.initialDice;
    for (final id in kNgmyGameIds) {
      final sec = (_limits[id] ?? 60).clamp(ngmyMinGameSeconds, ngmyMaxGameSeconds);
      _limits[id] = sec;
      _limitCtrls[id] = TextEditingController(text: '$sec');
    }
    _diceCtrls = {
      'w1': TextEditingController(text: '${_dice.weights['1'] ?? 22}'),
      'w2': TextEditingController(text: '${_dice.weights['2'] ?? 22}'),
      'w3': TextEditingController(text: '${_dice.weights['3'] ?? 16}'),
      'wm1': TextEditingController(text: '${_dice.weights['-1'] ?? 20}'),
      'wm2': TextEditingController(text: '${_dice.weights['-2'] ?? 20}'),
      'winPct': TextEditingController(text: '${_dice.winPercent}'),
      'maxWin': TextEditingController(text: '${_dice.maxWinStreak}'),
      'maxLose': TextEditingController(text: '${_dice.maxLoseStreak}'),
      'plus3': TextEditingController(text: '${_dice.plus3DailyLimit}'),
    };
  }

  @override
  void dispose() {
    _tabs.dispose();
    _userSearchC.dispose();
    _grantWinsC.dispose();
    for (final c in _limitCtrls.values) {
      c.dispose();
    }
    for (final c in _diceCtrls.values) {
      c.dispose();
    }
    super.dispose();
  }

  InputDecoration _dec(String label, {String? hint, String? suffix}) {
    final dark = widget.isDark;
    return InputDecoration(
      labelText: label,
      hintText: hint,
      suffixText: suffix,
      isDense: true,
      filled: true,
      fillColor: dark ? const Color(0xFF1C1F2E) : const Color(0xFFF8FAFC),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: dark ? Colors.white12 : const Color(0xFFE2E8F0))),
      enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: dark ? Colors.white12 : const Color(0xFFE2E8F0))),
      focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: Color(0xFF7C3AED), width: 2)),
    );
  }

  int _parseInt(TextEditingController c, int fallback, {int min = 0, int max = 9999}) {
    final n = int.tryParse(c.text.trim());
    if (n == null) return fallback;
    return n.clamp(min, max);
  }

  void _applyDiceFromFields() {
    _dice.weights['1'] = _parseInt(_diceCtrls['w1']!, _dice.weights['1'] ?? 22, min: 1, max: 100);
    _dice.weights['2'] = _parseInt(_diceCtrls['w2']!, _dice.weights['2'] ?? 22, min: 1, max: 100);
    _dice.weights['3'] = _parseInt(_diceCtrls['w3']!, _dice.weights['3'] ?? 16, min: 1, max: 100);
    _dice.weights['-1'] = _parseInt(_diceCtrls['wm1']!, _dice.weights['-1'] ?? 20, min: 1, max: 100);
    _dice.weights['-2'] = _parseInt(_diceCtrls['wm2']!, _dice.weights['-2'] ?? 20, min: 1, max: 100);
    _dice.winPercent = _parseInt(_diceCtrls['winPct']!, _dice.winPercent, min: 5, max: 95);
    _dice.maxWinStreak = _parseInt(_diceCtrls['maxWin']!, _dice.maxWinStreak, min: 1, max: 20);
    _dice.maxLoseStreak = _parseInt(_diceCtrls['maxLose']!, _dice.maxLoseStreak, min: 1, max: 20);
    _dice.plus3DailyLimit = _parseInt(_diceCtrls['plus3']!, _dice.plus3DailyLimit, min: 0, max: 500);
  }

  void _applyLimitsFromFields() {
    for (final id in kNgmyGameIds) {
      final c = _limitCtrls[id]!;
      _limits[id] = _parseInt(c, _limits[id] ?? 60, min: ngmyMinGameSeconds, max: ngmyMaxGameSeconds);
      c.text = '${_limits[id]}';
    }
  }

  Widget _sectionCard({required String title, required IconData icon, required Color accent, required List<Widget> children}) {
    final dark = widget.isDark;
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: dark ? const Color(0xFF161922) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: accent.withValues(alpha: 0.35)),
        boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.08), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, color: accent, size: 22),
              const SizedBox(width: 10),
              Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: dark ? Colors.white : Colors.black87)),
            ],
          ),
          const SizedBox(height: 14),
          ...children,
        ],
      ),
    );
  }

  Widget _numField(String label, TextEditingController c, {String suffix = '', int? min, int? max}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: TextField(
        controller: c,
        keyboardType: TextInputType.number,
        inputFormatters: [FilteringTextInputFormatter.digitsOnly],
        decoration: _dec(label, suffix: suffix),
        onChanged: (_) => setState(() {}),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final dark = widget.isDark;
    final bg = dark ? const Color(0xFF0F111A) : const Color(0xFFF1F5F9);
    final filtered = widget.users.where((u) {
      if (_userQuery.trim().isEmpty) return false;
      final q = _userQuery.toLowerCase();
      return u.email.toLowerCase().contains(q) || u.username.toLowerCase().contains(q);
    }).take(8);

    return Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        height: MediaQuery.of(context).size.height * 0.92,
        margin: const EdgeInsets.fromLTRB(12, 12, 12, 16),
        decoration: BoxDecoration(
          color: bg,
          borderRadius: BorderRadius.circular(28),
          border: Border.all(color: dark ? Colors.white10 : const Color(0xFFE2E8F0)),
        ),
        child: Column(
          children: [
            const SizedBox(height: 10),
            Container(width: 44, height: 4, decoration: BoxDecoration(color: Colors.grey.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(4))),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 8, 0),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: const Color(0xFF7C3AED).withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
                    child: const Icon(Icons.sports_esports_rounded, color: Color(0xFF7C3AED)),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Game Center', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: dark ? Colors.white : Colors.black)),
                        Text('Timers & dice controls', style: TextStyle(fontSize: 12, color: dark ? Colors.white54 : Colors.black54)),
                      ],
                    ),
                  ),
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded)),
                ],
              ),
            ),
            TabBar(
              controller: _tabs,
              labelColor: const Color(0xFF7C3AED),
              unselectedLabelColor: dark ? Colors.white54 : Colors.black45,
              indicatorColor: const Color(0xFF7C3AED),
              tabs: const [
                Tab(text: 'Game Timers'),
                Tab(text: 'Dice Roll'),
              ],
            ),
            Expanded(
              child: TabBarView(
                controller: _tabs,
                children: [
                  ListView(
                    padding: const EdgeInsets.all(16),
                    children: [
                      Text(
                        'Round length per game (${ngmyMinGameSeconds}s – ${ngmyMaxGameSeconds}s / 2 min). Enter seconds in each box.',
                        style: TextStyle(fontSize: 12, color: dark ? Colors.white60 : Colors.black54, height: 1.35),
                      ),
                      const SizedBox(height: 12),
                      ...kNgmyGameIds.map((id) {
                        return _sectionCard(
                          title: kNgmyGameTitles[id] ?? id,
                          icon: Icons.timer_outlined,
                          accent: const Color(0xFF2563EB),
                          children: [
                            _numField('Seconds', _limitCtrls[id]!, suffix: 'sec', min: ngmyMinGameSeconds, max: ngmyMaxGameSeconds),
                          ],
                        );
                      }),
                    ],
                  ),
                  ListView(
                    padding: const EdgeInsets.all(16),
                    children: [
                      _sectionCard(
                        title: 'Outcome weights',
                        icon: Icons.tune_rounded,
                        accent: const Color(0xFF7C3AED),
                        children: [
                          Row(
                            children: [
                              Expanded(child: _numField('+1 weight', _diceCtrls['w1']!)),
                              const SizedBox(width: 8),
                              Expanded(child: _numField('+2 weight', _diceCtrls['w2']!)),
                            ],
                          ),
                          Row(
                            children: [
                              Expanded(child: _numField('+3 weight', _diceCtrls['w3']!)),
                              const SizedBox(width: 8),
                              Expanded(child: _numField('−1 weight', _diceCtrls['wm1']!)),
                            ],
                          ),
                          _numField('−2 weight', _diceCtrls['wm2']!),
                        ],
                      ),
                      _sectionCard(
                        title: 'Win / loss rules',
                        icon: Icons.percent_rounded,
                        accent: const Color(0xFF22C55E),
                        children: [
                          _numField('Win chance', _diceCtrls['winPct']!, suffix: '%', min: 5, max: 95),
                          Row(
                            children: [
                              Expanded(child: _numField('Max wins in a row', _diceCtrls['maxWin']!)),
                              const SizedBox(width: 8),
                              Expanded(child: _numField('Max losses in a row', _diceCtrls['maxLose']!)),
                            ],
                          ),
                          _numField('Global +3 hits per day (all users)', _diceCtrls['plus3']!),
                          Text(
                            '+3 used today: ${_dice.plus3UsedToday} (resets daily)',
                            style: TextStyle(fontSize: 11, color: dark ? Colors.white54 : Colors.black54),
                          ),
                        ],
                      ),
                      _sectionCard(
                        title: 'Grant bonus wins',
                        icon: Icons.card_giftcard_rounded,
                        accent: const Color(0xFFF59E0B),
                        children: [
                          TextField(
                            controller: _userSearchC,
                            decoration: _dec('Search user', hint: 'Email or name'),
                            onChanged: (v) => setState(() => _userQuery = v),
                          ),
                          const SizedBox(height: 8),
                          Row(
                            children: [
                              SizedBox(width: 100, child: _numField('Wins to grant', _grantWinsC)),
                              const SizedBox(width: 8),
                              Expanded(
                                child: Text(
                                  'Granted wins are consumed on dice rolls before normal odds.',
                                  style: TextStyle(fontSize: 11, color: dark ? Colors.white54 : Colors.black54),
                                ),
                              ),
                            ],
                          ),
                          ...filtered.map((u) {
                            var left = 0;
                            for (final g in _dice.userGrants) {
                              if ((g['email'] ?? '').toString().toLowerCase() == u.email.toLowerCase().trim()) {
                                left = (g['winsLeft'] as num?)?.toInt() ?? 0;
                                break;
                              }
                            }
                            return ListTile(
                              contentPadding: EdgeInsets.zero,
                              title: Text(u.username, style: TextStyle(fontWeight: FontWeight.w700, color: dark ? Colors.white : Colors.black)),
                              subtitle: Text('${u.email}${left > 0 ? ' · $left left' : ''}', style: TextStyle(fontSize: 11, color: dark ? Colors.white54 : Colors.black54)),
                              trailing: FilledButton(
                                onPressed: () {
                                  final n = int.tryParse(_grantWinsC.text.trim()) ?? 5;
                                  addUserGrant(_dice, u.email, n);
                                  setState(() {});
                                },
                                child: const Text('Grant'),
                              ),
                            );
                          }),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
              child: FilledButton.icon(
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF7C3AED),
                  minimumSize: const Size(double.infinity, 52),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                onPressed: () {
                  _applyLimitsFromFields();
                  _applyDiceFromFields();
                  widget.onSave(_limits, _dice.toJson());
                  Navigator.pop(context);
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Game Center settings saved.')));
                },
                icon: const Icon(Icons.save_rounded),
                label: const Text('Save settings', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
