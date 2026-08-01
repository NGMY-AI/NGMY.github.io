import 'package:flutter/material.dart';

import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_item_reminder_storage.dart';

Future<void> showNgmyItemReminderDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Where I Put It',
    barrierColor: Colors.black.withValues(alpha: 0.88),
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (ctx, a1, a2) => _ItemReminderDialog(userEmail: userEmail),
    transitionBuilder: (ctx, anim, _, child) {
      final slide = Tween<Offset>(begin: const Offset(0, 0.08), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(
        opacity: anim,
        child: SlideTransition(position: slide, child: child),
      );
    },
  );
}

class _ItemReminderDialog extends StatefulWidget {
  const _ItemReminderDialog({required this.userEmail});

  final String userEmail;

  @override
  State<_ItemReminderDialog> createState() => _ItemReminderDialogState();
}

class _ItemReminderDialogState extends State<_ItemReminderDialog> {
  final _itemC = TextEditingController();
  final _locationC = TextEditingController();
  Duration? _delay;
  DateTime _customRemindAt = DateTime.now().add(const Duration(hours: 2));
  bool _useCustomTime = false;
  bool _busy = false;
  List<NgmyItemReminder> _items = [];

  static const _line1 = <(String, Duration)>[
    ('5 min', Duration(minutes: 5)),
    ('15 min', Duration(minutes: 15)),
    ('30 min', Duration(minutes: 30)),
    ('1 hour', Duration(hours: 1)),
    ('2 hours', Duration(hours: 2)),
  ];

  static const _line2 = <(String, Duration)>[
    ('3 hours', Duration(hours: 3)),
    ('6 hours', Duration(hours: 6)),
    ('12 hours', Duration(hours: 12)),
    ('24 hours', Duration(hours: 24)),
  ];

  @override
  void initState() {
    super.initState();
    _delay = const Duration(hours: 2);
    _reload();
  }

  @override
  void dispose() {
    _itemC.dispose();
    _locationC.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final list = await loadNgmyItemReminders(userEmail: widget.userEmail);
    if (!mounted) return;
    setState(() => _items = list);
  }

  Future<void> _pickCustomDate() async {
    final date = await showDatePicker(
      context: context,
      initialDate: _customRemindAt,
      firstDate: DateTime.now(),
      lastDate: DateTime.now().add(const Duration(days: 365)),
      builder: (ctx, child) => Theme(
        data: Theme.of(ctx).copyWith(colorScheme: const ColorScheme.dark(primary: Color(0xFF7C3AED))),
        child: child!,
      ),
    );
    if (date == null || !mounted) return;
    final time = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.fromDateTime(_customRemindAt),
      builder: (ctx, child) => Theme(
        data: Theme.of(ctx).copyWith(colorScheme: const ColorScheme.dark(primary: Color(0xFF7C3AED))),
        child: child!,
      ),
    );
    if (time == null || !mounted) return;
    setState(() {
      _customRemindAt = DateTime(date.year, date.month, date.day, time.hour, time.minute);
      _useCustomTime = true;
      _delay = null;
    });
  }

  Future<void> _openCustomSet() async {
    await _pickCustomDate();
    if (!mounted) return;
    if (_customRemindAt.isBefore(DateTime.now().add(const Duration(minutes: 1)))) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Pick a time at least 1 minute from now.')),
      );
      return;
    }
    setState(() {
      _useCustomTime = true;
      _delay = null;
    });
  }

  Future<void> _save() async {
    setState(() => _busy = true);
    final String msg;
    if (_useCustomTime) {
      msg = await addNgmyItemReminderAt(
        userEmail: widget.userEmail,
        itemName: _itemC.text,
        locationNote: _locationC.text,
        remindAt: _customRemindAt,
      );
    } else {
      msg = await addNgmyItemReminder(
        userEmail: widget.userEmail,
        itemName: _itemC.text,
        locationNote: _locationC.text,
        remindAfter: _delay ?? const Duration(hours: 2),
      );
    }
    if (!mounted) return;
    setState(() => _busy = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    if (msg.startsWith('Enter') || msg.startsWith('Write') || msg.startsWith('Pick')) return;
    _itemC.clear();
    _locationC.clear();
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    final w = MediaQuery.of(context).size.width;
    final dialogW = w > 520 ? 500.0 : w - 20;
    final due = _items.where((e) => e.isDue).length;

    return Center(
      child: Material(
        color: Colors.transparent,
        child: Container(
          width: dialogW,
          height: MediaQuery.of(context).size.height * 0.9,
          margin: const EdgeInsets.symmetric(vertical: 12),
          clipBehavior: Clip.antiAlias,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(28),
            gradient: const LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFF0B1020), Color(0xFF1E1033), Color(0xFF0F172A)],
            ),
            border: Border.all(color: const Color(0xFF7C3AED).withValues(alpha: 0.35)),
            boxShadow: [BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.25), blurRadius: 40, offset: const Offset(0, 16))],
          ),
          child: Column(
            children: [
              _heroHeader(due),
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(18, 4, 18, 18),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      _glassCard(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            _field(_itemC, 'What did you put away?', Icons.key_rounded, hint: 'Car keys, wallet, kids backpack…'),
                            const SizedBox(height: 12),
                            _field(_locationC, 'Where did you put it?', Icons.location_on_rounded, hint: 'Kitchen counter · garage hook · kids closet', maxLines: 2),
                          ],
                        ),
                      ),
                      const SizedBox(height: 16),
                      const Text('Remind me in…', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                      const SizedBox(height: 10),
                      _chipRow(_line1),
                      const SizedBox(height: 8),
                      _chipRow(_line2, showSet: true),
                      if (_useCustomTime) ...[
                        const SizedBox(height: 10),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                          decoration: BoxDecoration(
                            color: const Color(0xFF7C3AED).withValues(alpha: 0.15),
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(color: const Color(0xFFA78BFA).withValues(alpha: 0.45)),
                          ),
                          child: Row(
                            children: [
                              const Icon(Icons.schedule_rounded, color: Color(0xFFA78BFA), size: 18),
                              const SizedBox(width: 8),
                              Expanded(
                                child: Text(
                                  'Custom: ${_formatRemindAt(_customRemindAt)}',
                                  style: const TextStyle(color: Color(0xFFA78BFA), fontWeight: FontWeight.w800, fontSize: 13),
                                ),
                              ),
                              TextButton(onPressed: _pickCustomDate, child: const Text('Edit')),
                            ],
                          ),
                        ),
                      ],
                      const SizedBox(height: 18),
                      FilledButton.icon(
                        onPressed: _busy ? null : _save,
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFF7C3AED),
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                          elevation: 4,
                        ),
                        icon: _busy
                            ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                            : const Icon(Icons.notifications_active_rounded),
                        label: const Text('Save & schedule reminder', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                      ),
                      const SizedBox(height: 22),
                      Row(
                        children: [
                          const Text('Your reminders', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                          const Spacer(),
                          Text('${_items.length} saved', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11)),
                        ],
                      ),
                      const SizedBox(height: 10),
                      if (_items.isEmpty)
                        _glassCard(
                          child: Text(
                            'No reminders yet. Example: "Car keys" → "Hook by the garage door" → remind in 2 hours.',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.6), height: 1.4, fontSize: 12.5),
                          ),
                        )
                      else
                        ..._items.map(_reminderTile),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _heroHeader(int due) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(20, 22, 12, 20),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            const Color(0xFF7C3AED).withValues(alpha: 0.45),
            const Color(0xFF5B21B6).withValues(alpha: 0.2),
            Colors.transparent,
          ],
        ),
      ),
      child: Stack(
        children: [
          Positioned(right: -10, top: -20, child: Icon(Icons.location_searching_rounded, size: 100, color: Colors.white.withValues(alpha: 0.04))),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: const LinearGradient(colors: [Color(0xFFA78BFA), Color(0xFF7C3AED)]),
                  boxShadow: [BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.5), blurRadius: 16)],
                ),
                child: const Icon(Icons.place_rounded, color: Colors.white, size: 28),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('Where I Put It', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, height: 1.1)),
                    const SizedBox(height: 4),
                    Text(
                      due > 0 ? '$due reminder${due == 1 ? '' : 's'} ready now' : 'Never lose keys, wallet, or kids gear',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12.5, fontWeight: FontWeight.w600),
                    ),
                  ],
                ),
              ),
              IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7))),
            ],
          ),
        ],
      ),
    );
  }

  Widget _glassCard({required Widget child}) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.04),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: child,
    );
  }

  Widget _chipRow(List<(String, Duration)> options, {bool showSet = false}) {
    final items = <Widget>[
      ...options.map((opt) => Expanded(child: _timeChip(opt.$1, opt.$2))),
      if (showSet) Expanded(child: _setChip()),
    ];
    return Row(
      children: [
        for (var i = 0; i < items.length; i++) ...[
          if (i > 0) const SizedBox(width: 6),
          items[i],
        ],
      ],
    );
  }

  Widget _timeChip(String label, Duration d) {
    final on = !_useCustomTime && _delay == d;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => setState(() {
          _delay = d;
          _useCustomTime = false;
        }),
        borderRadius: BorderRadius.circular(12),
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: on ? const LinearGradient(colors: [Color(0xFF7C3AED), Color(0xFF5B21B6)]) : null,
            color: on ? null : const Color(0xFF0B1020),
            border: Border.all(color: on ? const Color(0xFFA78BFA) : Colors.white24),
          ),
          child: Center(
            child: FittedBox(
              fit: BoxFit.scaleDown,
              child: Text(
                label,
                style: TextStyle(color: on ? Colors.white : Colors.white70, fontWeight: FontWeight.w800, fontSize: 11),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _setChip() {
    final on = _useCustomTime;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _openCustomSet,
        borderRadius: BorderRadius.circular(12),
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: on ? const LinearGradient(colors: [Color(0xFF22C55E), Color(0xFF16A34A)]) : null,
            color: on ? null : const Color(0xFF0B1020),
            border: Border.all(color: on ? const Color(0xFF22C55E) : const Color(0xFF7C3AED).withValues(alpha: 0.6), width: on ? 1.5 : 1.2),
          ),
          child: Center(
            child: FittedBox(
              fit: BoxFit.scaleDown,
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.tune_rounded, size: 14, color: on ? Colors.white : const Color(0xFFA78BFA)),
                  const SizedBox(width: 4),
                  Text('Set', style: TextStyle(color: on ? Colors.white : const Color(0xFFA78BFA), fontWeight: FontWeight.w900, fontSize: 11)),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _reminderTile(NgmyItemReminder r) {
    final dueNow = r.isDue;
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: dueNow ? const Color(0xFF1E1033) : Colors.white.withValues(alpha: 0.04),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: dueNow ? const Color(0xFFA78BFA) : Colors.white10, width: dueNow ? 1.5 : 1),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.inventory_2_outlined, color: dueNow ? const Color(0xFFA78BFA) : Colors.white38, size: 18),
              const SizedBox(width: 8),
              Expanded(child: Text(r.itemName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
              if (dueNow)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(color: const Color(0xFF7C3AED), borderRadius: BorderRadius.circular(8)),
                  child: const Text('NOW', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9)),
                ),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(Icons.location_on_outlined, color: Colors.white.withValues(alpha: 0.4), size: 16),
              const SizedBox(width: 6),
              Expanded(child: Text(r.locationNote, style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 13, height: 1.35))),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            dueNow ? 'Reminder time reached' : 'Alerts ${_formatRemindAt(r.remindAt)}',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10),
          ),
          Align(
            alignment: Alignment.centerRight,
            child: TextButton(
              onPressed: () async {
                final ok = await showNgmyDeleteConfirm(
                  context,
                  title: 'Delete reminder?',
                  message: 'Remove this “Where I Put It” reminder?',
                );
                if (ok != true) return;
                await deleteNgmyItemReminder(r.id, userEmail: widget.userEmail);
                await _reload();
              },
              child: const Text('Delete', style: TextStyle(color: Color(0xFFEF4444))),
            ),
          ),
        ],
      ),
    );
  }

  String _formatRemindAt(DateTime dt) {
    final local = dt.toLocal();
    final h = local.hour > 12 ? local.hour - 12 : (local.hour == 0 ? 12 : local.hour);
    final m = local.minute.toString().padLeft(2, '0');
    final ampm = local.hour >= 12 ? 'PM' : 'AM';
    return '${local.month}/${local.day} $h:$m $ampm';
  }

  Widget _field(TextEditingController c, String label, IconData icon, {String? hint, int maxLines = 1}) {
    return TextField(
      controller: c,
      maxLines: maxLines,
      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 14),
      decoration: InputDecoration(
        labelText: label,
        hintText: hint,
        labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w700),
        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.28)),
        prefixIcon: Icon(icon, color: const Color(0xFFA78BFA), size: 22),
        filled: true,
        fillColor: const Color(0xFF05070C).withValues(alpha: 0.5),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1)),
        ),
        focusedBorder: const OutlineInputBorder(
          borderRadius: BorderRadius.all(Radius.circular(14)),
          borderSide: BorderSide(color: Color(0xFF7C3AED), width: 1.6),
        ),
      ),
    );
  }
}
