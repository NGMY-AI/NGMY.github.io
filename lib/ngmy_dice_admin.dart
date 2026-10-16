import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_dice_config.dart';

/// Dice face controls shown on Admin → Game Timers.
class NgmyDiceControlPanel extends StatefulWidget {
  const NgmyDiceControlPanel({
    super.key,
    required this.settings,
    required this.onChanged,
    this.isDark = true,
  });

  final NgmyDiceSettings settings;
  final Future<void> Function() onChanged;
  final bool isDark;

  @override
  State<NgmyDiceControlPanel> createState() => _NgmyDiceControlPanelState();
}

class _NgmyDiceControlPanelState extends State<NgmyDiceControlPanel> {
  static const _faces = [1, 2, 3, -1, -2];
  final _email = TextEditingController();
  int _outcome = 3;
  final _next = TextEditingController(text: '3');
  final _day = TextEditingController(text: '0');
  final _week = TextEditingController(text: '0');
  final _generalDay = <int, TextEditingController>{};
  final _generalWeek = <int, TextEditingController>{};
  Timer? _poll;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    for (final face in _faces) {
      final q = widget.settings.faceQuotas['$face'] ?? {'perDay': 0, 'perWeek': 0};
      _generalDay[face] = TextEditingController(text: '${q['perDay'] ?? 0}');
      _generalWeek[face] = TextEditingController(text: '${q['perWeek'] ?? 0}');
    }
    _poll = Timer.periodic(const Duration(seconds: 2), (_) => unawaited(_refresh()));
    unawaited(_refresh());
  }

  @override
  void dispose() {
    _poll?.cancel();
    _email.dispose();
    _next.dispose();
    _day.dispose();
    _week.dispose();
    for (final c in _generalDay.values) {
      c.dispose();
    }
    for (final c in _generalWeek.values) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _refresh() async {
    await NgmyDiceLive.pull(widget.settings);
    if (mounted) setState(() {});
  }

  Future<void> _save({required String message}) async {
    if (_saving) return;
    _poll?.cancel();
    setState(() => _saving = true);
    try {
      await widget.onChanged();
      if (!mounted) return;
      setState(() {});
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
    } finally {
      if (mounted) {
        _poll = Timer.periodic(const Duration(seconds: 2), (_) => unawaited(_refresh()));
        setState(() => _saving = false);
      }
    }
  }

  void _writeGeneralQuotas() {
    for (final face in _faces) {
      widget.settings.faceQuotas['$face'] = {
        'perDay': int.tryParse(_generalDay[face]!.text.trim()) ?? 0,
        'perWeek': int.tryParse(_generalWeek[face]!.text.trim()) ?? 0,
      };
    }
  }

  @override
  Widget build(BuildContext context) {
    final dark = widget.isDark;
    final card = dark ? const Color(0xFF151E2E) : Colors.white;
    final ink = dark ? Colors.white : const Color(0xFF111827);
    final mute = dark ? Colors.white60 : const Color(0xFF6B7280);
    final fieldFill = dark ? const Color(0xFF0B1220) : const Color(0xFFF4F6FA);

    return Container(
      padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFF59E0B).withValues(alpha: 0.7)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(children: [
            const Text('🎲', style: TextStyle(fontSize: 22)),
            const SizedBox(width: 8),
            Expanded(
              child: Text('Dice control', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 18)),
            ),
          ]),
          const SizedBox(height: 6),
          Text(
            'Set how many times everyone lands on each face per day and per week. After those plays, the dice goes back to normal. For one person, the next-play count drops here as they play.',
            style: TextStyle(color: mute, fontSize: 12.5, height: 1.35),
          ),
          const SizedBox(height: 12),
          Text('Everyone', style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
          const SizedBox(height: 8),
          for (final face in _faces) _generalRow(face, ink, mute, fieldFill),
          const SizedBox(height: 4),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              onPressed: _saving
                  ? null
                  : () async {
                      _writeGeneralQuotas();
                      await _save(message: 'Dice control saved for every player.');
                    },
              style: FilledButton.styleFrom(
                backgroundColor: const Color(0xFFF59E0B),
                foregroundColor: const Color(0xFF111827),
                padding: const EdgeInsets.symmetric(vertical: 12),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: Text(_saving ? 'Saving…' : 'Save dice for everyone', style: const TextStyle(fontWeight: FontWeight.w900)),
            ),
          ),
          const SizedBox(height: 16),
          Text('One user', style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
          const SizedBox(height: 8),
          TextField(
            controller: _email,
            style: TextStyle(color: ink),
            decoration: _fieldDecoration('User email', mute, fieldFill),
          ),
          const SizedBox(height: 8),
          DropdownButton<int>(
            value: _outcome,
            dropdownColor: card,
            style: TextStyle(color: ink, fontWeight: FontWeight.w800),
            items: [
              for (final face in _faces)
                DropdownMenuItem(value: face, child: Text(_faceLabel(face))),
            ],
            onChanged: (v) => setState(() => _outcome = v ?? 3),
          ),
          Row(
            children: [
              Expanded(child: _num(_next, 'Next plays', ink, mute, fieldFill)),
              const SizedBox(width: 8),
              Expanded(child: _num(_day, 'Per day', ink, mute, fieldFill)),
              const SizedBox(width: 8),
              Expanded(child: _num(_week, 'Per week', ink, mute, fieldFill)),
            ],
          ),
          const SizedBox(height: 8),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              onPressed: _saving
                  ? null
                  : () async {
                      final email = _email.text.trim();
                      if (email.isEmpty) {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('Enter the user email first.')),
                        );
                        return;
                      }
                      ngmySetUserFaceRule(
                        cfg: widget.settings,
                        email: email,
                        outcome: _outcome,
                        nextLeft: int.tryParse(_next.text.trim()) ?? 0,
                        perDay: int.tryParse(_day.text.trim()) ?? 0,
                        perWeek: int.tryParse(_week.text.trim()) ?? 0,
                      );
                      await _save(message: 'Dice set for $email. The count drops as they play.');
                    },
              style: FilledButton.styleFrom(
                backgroundColor: const Color(0xFF00B25A),
                padding: const EdgeInsets.symmetric(vertical: 12),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('Set for this user', style: TextStyle(fontWeight: FontWeight.w900)),
            ),
          ),
          const SizedBox(height: 14),
          Text('Remaining tries', style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
          const SizedBox(height: 6),
          if (widget.settings.userFaceRules.isEmpty)
            Text('No one-user rules yet.', style: TextStyle(color: mute, fontSize: 12.5))
          else
            for (final rule in widget.settings.userFaceRules) _liveRule(rule, ink, mute, fieldFill),
        ],
      ),
    );
  }

  InputDecoration _fieldDecoration(String label, Color mute, Color fill) {
    return InputDecoration(
      labelText: label,
      labelStyle: TextStyle(color: mute, fontSize: 12),
      filled: true,
      fillColor: fill,
      isDense: true,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
    );
  }

  Widget _num(TextEditingController c, String label, Color ink, Color mute, Color fill) {
    return TextField(
      controller: c,
      keyboardType: TextInputType.number,
      style: TextStyle(color: ink, fontWeight: FontWeight.w800),
      decoration: _fieldDecoration(label, mute, fill),
    );
  }

  Widget _generalRow(int face, Color ink, Color mute, Color fill) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        children: [
          SizedBox(
            width: 36,
            child: Text(_faceLabel(face), style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
          ),
          Expanded(child: _num(_generalDay[face]!, 'Per day', ink, mute, fill)),
          const SizedBox(width: 6),
          Expanded(child: _num(_generalWeek[face]!, 'Per week', ink, mute, fill)),
        ],
      ),
    );
  }

  Widget _liveRule(Map<String, dynamic> rule, Color ink, Color mute, Color fill) {
    final face = (rule['outcome'] as num?)?.toInt() ?? 0;
    final next = (rule['nextLeft'] as num?)?.toInt() ?? 0;
    final dayUsed = (rule['dayUsed'] as num?)?.toInt() ?? 0;
    final day = (rule['perDay'] as num?)?.toInt() ?? 0;
    final weekUsed = (rule['weekUsed'] as num?)?.toInt() ?? 0;
    final week = (rule['perWeek'] as num?)?.toInt() ?? 0;
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 6),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(10)),
      child: Text(
        '${rule['email']}   ${_faceLabel(face)}   next $next   day $dayUsed/$day   week $weekUsed/$week',
        style: TextStyle(color: ink, fontSize: 12.5, fontWeight: FontWeight.w700),
      ),
    );
  }

  String _faceLabel(int face) => face > 0 ? '+$face' : '$face';
}
