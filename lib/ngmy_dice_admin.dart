import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_dice_config.dart';

/// Admin controls for which dice face players land on, and live remaining tries.
Future<void> showNgmyDiceAdminSheet({
  required BuildContext context,
  required NgmyDiceSettings settings,
  required VoidCallback onChanged,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: const Color(0xFF0B1220),
    builder: (ctx) => _DiceAdminSheet(settings: settings, onChanged: onChanged),
  );
}

class _DiceAdminSheet extends StatefulWidget {
  const _DiceAdminSheet({required this.settings, required this.onChanged});

  final NgmyDiceSettings settings;
  final VoidCallback onChanged;

  @override
  State<_DiceAdminSheet> createState() => _DiceAdminSheetState();
}

class _DiceAdminSheetState extends State<_DiceAdminSheet> {
  static const _faces = [1, 2, 3, -1, -2];
  final _email = TextEditingController();
  int _outcome = 3;
  final _next = TextEditingController(text: '3');
  final _day = TextEditingController(text: '0');
  final _week = TextEditingController(text: '0');
  final _generalDay = <int, TextEditingController>{};
  final _generalWeek = <int, TextEditingController>{};
  Timer? _poll;

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

  Future<void> _save() async {
    widget.onChanged();
    await NgmyDiceLive.push(widget.settings);
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.of(context).viewInsets.bottom;
    return Padding(
      padding: EdgeInsets.fromLTRB(16, 12, 16, 16 + bottom),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Dice faces', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
            const SizedBox(height: 6),
            const Text(
              'Everyone gets the face this many times, then normal play. A specific user uses their next plays first.',
              style: TextStyle(color: Colors.white60, fontSize: 12, height: 1.35),
            ),
            const SizedBox(height: 12),
            for (final face in _faces) _generalRow(face),
            const SizedBox(height: 8),
            const Text('One user', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
            const SizedBox(height: 8),
            TextField(
              controller: _email,
              style: const TextStyle(color: Colors.white),
              decoration: const InputDecoration(
                labelText: 'User email',
                labelStyle: TextStyle(color: Colors.white54),
              ),
            ),
            const SizedBox(height: 8),
            DropdownButton<int>(
              value: _outcome,
              dropdownColor: const Color(0xFF111827),
              style: const TextStyle(color: Colors.white),
              items: [
                for (final face in _faces)
                  DropdownMenuItem(value: face, child: Text(face > 0 ? '+$face' : '$face')),
              ],
              onChanged: (v) => setState(() => _outcome = v ?? 3),
            ),
            Row(
              children: [
                Expanded(child: _num(_next, 'Next plays')),
                const SizedBox(width: 8),
                Expanded(child: _num(_day, 'Per day')),
                const SizedBox(width: 8),
                Expanded(child: _num(_week, 'Per week')),
              ],
            ),
            const SizedBox(height: 8),
            FilledButton(
              onPressed: () async {
                final email = _email.text.trim();
                if (email.isEmpty) return;
                ngmySetUserFaceRule(
                  cfg: widget.settings,
                  email: email,
                  outcome: _outcome,
                  nextLeft: int.tryParse(_next.text.trim()) ?? 0,
                  perDay: int.tryParse(_day.text.trim()) ?? 0,
                  perWeek: int.tryParse(_week.text.trim()) ?? 0,
                );
                await _save();
              },
              child: const Text('Set for this user'),
            ),
            const SizedBox(height: 12),
            for (final rule in widget.settings.userFaceRules) _liveRule(rule),
          ],
        ),
      ),
    );
  }

  Widget _num(TextEditingController c, String label) {
    return TextField(
      controller: c,
      keyboardType: TextInputType.number,
      style: const TextStyle(color: Colors.white),
      decoration: InputDecoration(labelText: label, labelStyle: const TextStyle(color: Colors.white54, fontSize: 12)),
    );
  }

  Widget _generalRow(int face) {
    final key = '$face';
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        children: [
          SizedBox(
            width: 36,
            child: Text(face > 0 ? '+$face' : '$face', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
          ),
          Expanded(child: _num(_generalDay[face]!, 'Day')),
          const SizedBox(width: 6),
          Expanded(child: _num(_generalWeek[face]!, 'Week')),
          IconButton(
            onPressed: () async {
              widget.settings.faceQuotas[key] = {
                'perDay': int.tryParse(_generalDay[face]!.text.trim()) ?? 0,
                'perWeek': int.tryParse(_generalWeek[face]!.text.trim()) ?? 0,
              };
              await _save();
            },
            icon: const Icon(Icons.check_rounded, color: Colors.white),
          ),
        ],
      ),
    );
  }

  Widget _liveRule(Map<String, dynamic> rule) {
    final face = (rule['outcome'] as num?)?.toInt() ?? 0;
    final next = (rule['nextLeft'] as num?)?.toInt() ?? 0;
    final dayUsed = (rule['dayUsed'] as num?)?.toInt() ?? 0;
    final day = (rule['perDay'] as num?)?.toInt() ?? 0;
    final weekUsed = (rule['weekUsed'] as num?)?.toInt() ?? 0;
    final week = (rule['perWeek'] as num?)?.toInt() ?? 0;
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Text(
        '${rule['email']}  ${face > 0 ? '+$face' : face}   next $next   day $dayUsed/$day   week $weekUsed/$week',
        style: const TextStyle(color: Colors.white70, fontSize: 12),
      ),
    );
  }
}
