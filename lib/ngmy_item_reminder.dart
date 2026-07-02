import 'package:flutter/material.dart';

import 'ngmy_item_reminder_storage.dart';

Future<void> showNgmyItemReminderDialog(BuildContext context, {required String userEmail}) {
  return showDialog<void>(
    context: context,
    barrierColor: Colors.black87,
    builder: (ctx) => _ItemReminderDialog(userEmail: userEmail),
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
  Duration _delay = const Duration(hours: 2);
  bool _busy = false;
  List<NgmyItemReminder> _items = [];

  static const _delayOptions = <(String, Duration)>[
    ('30 min', Duration(minutes: 30)),
    ('1 hour', Duration(hours: 1)),
    ('2 hours', Duration(hours: 2)),
    ('3 hours', Duration(hours: 3)),
    ('6 hours', Duration(hours: 6)),
    ('12 hours', Duration(hours: 12)),
    ('24 hours', Duration(hours: 24)),
  ];

  @override
  void initState() {
    super.initState();
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

  Future<void> _save() async {
    setState(() => _busy = true);
    final msg = await addNgmyItemReminder(
      userEmail: widget.userEmail,
      itemName: _itemC.text,
      locationNote: _locationC.text,
      remindAfter: _delay,
    );
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
    final dialogW = w > 520 ? 480.0 : w - 24;
    final due = _items.where((e) => e.isDue).length;

    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 18),
      backgroundColor: const Color(0xFF05070C),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: SizedBox(
        width: dialogW,
        height: MediaQuery.of(context).size.height * 0.88,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 8, 0),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: const Color(0xFF7C3AED).withValues(alpha: 0.2),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(Icons.place_rounded, color: Color(0xFFA78BFA), size: 22),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('Where I Put It', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                        Text(
                          due > 0 ? '$due reminder${due == 1 ? '' : 's'} ready now' : 'Never lose your keys again',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11),
                        ),
                      ],
                    ),
                  ),
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close, color: Colors.white70)),
                ],
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    _field(_itemC, 'What did you put away?', Icons.key_rounded, hint: 'Car keys, wallet, passport…'),
                    const SizedBox(height: 10),
                    _field(_locationC, 'Where did you put it?', Icons.location_on_outlined, hint: 'Kitchen counter by the fruit bowl', maxLines: 3),
                    const SizedBox(height: 14),
                    const Text('Remind me in…', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: _delayOptions.map((opt) {
                        final on = _delay == opt.$2;
                        return ChoiceChip(
                          label: Text(opt.$1),
                          selected: on,
                          onSelected: (_) => setState(() => _delay = opt.$2),
                          selectedColor: const Color(0xFF7C3AED),
                          labelStyle: TextStyle(color: on ? Colors.white : Colors.white70, fontWeight: FontWeight.w700, fontSize: 12),
                          backgroundColor: const Color(0xFF0B1020),
                          side: BorderSide(color: on ? const Color(0xFFA78BFA) : Colors.white24),
                        );
                      }).toList(),
                    ),
                    const SizedBox(height: 16),
                    FilledButton.icon(
                      onPressed: _busy ? null : _save,
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF7C3AED),
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                      ),
                      icon: _busy
                          ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Icon(Icons.notifications_active_rounded),
                      label: const Text('Save & schedule reminder'),
                    ),
                    const SizedBox(height: 20),
                    Row(
                      children: [
                        const Text('Your reminders', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                        const Spacer(),
                        Text('${_items.length} saved', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11)),
                      ],
                    ),
                    const SizedBox(height: 10),
                    if (_items.isEmpty)
                      Container(
                        padding: const EdgeInsets.all(20),
                        decoration: BoxDecoration(
                          color: const Color(0xFF0B1020),
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: Colors.white10),
                        ),
                        child: Text(
                          'No reminders yet. Example: "Car keys" → "Hook by the garage door" → remind in 3 hours.',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.55), height: 1.35, fontSize: 12),
                        ),
                      )
                    else
                      ..._items.map((r) {
                        final dueNow = r.isDue;
                        return Container(
                          margin: const EdgeInsets.only(bottom: 8),
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            color: dueNow ? const Color(0xFF1E1033) : const Color(0xFF0B1020),
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(color: dueNow ? const Color(0xFFA78BFA) : Colors.white10, width: dueNow ? 1.4 : 1),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Expanded(
                                    child: Text(r.itemName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                                  ),
                                  if (dueNow)
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                      decoration: BoxDecoration(color: const Color(0xFF7C3AED), borderRadius: BorderRadius.circular(8)),
                                      child: const Text('NOW', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9)),
                                    ),
                                ],
                              ),
                              const SizedBox(height: 6),
                              Text(r.locationNote, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 13, height: 1.3)),
                              const SizedBox(height: 6),
                              Text(
                                dueNow ? 'Reminder time reached' : 'Alerts ${_formatRemindAt(r.remindAt)}',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.42), fontSize: 10),
                              ),
                              Align(
                                alignment: Alignment.centerRight,
                                child: TextButton(
                                  onPressed: () async {
                                    await deleteNgmyItemReminder(r.id, userEmail: widget.userEmail);
                                    await _reload();
                                  },
                                  child: const Text('Delete', style: TextStyle(color: Color(0xFFEF4444))),
                                ),
                              ),
                            ],
                          ),
                        );
                      }),
                  ],
                ),
              ),
            ),
          ],
        ),
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
      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
      decoration: InputDecoration(
        labelText: label,
        hintText: hint,
        labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.5)),
        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.28)),
        prefixIcon: Icon(icon, color: const Color(0xFFA78BFA), size: 20),
        filled: true,
        fillColor: const Color(0xFF0B1020),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1)),
        ),
        focusedBorder: const OutlineInputBorder(
          borderRadius: BorderRadius.all(Radius.circular(12)),
          borderSide: BorderSide(color: Color(0xFF7C3AED), width: 1.4),
        ),
      ),
    );
  }
}
