import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_medicine_organizer_v1';

String _medicineKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

class NgmyMedicineEntry {
  NgmyMedicineEntry({
    String? id,
    required this.name,
    required this.dosage,
    required this.timesPerDay,
    this.schedule = '',
    this.notes = '',
    this.category = 'Daily',
    this.startDate,
    this.endDate,
    this.remindersEnabled = true,
    List<String>? reminderTimes,
    DateTime? createdAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        reminderTimes = List<String>.from(reminderTimes ?? const []),
        createdAt = createdAt ?? DateTime.now();

  final String id;
  String name;
  String dosage;
  int timesPerDay;
  String schedule;
  String notes;
  String category;
  DateTime? startDate;
  DateTime? endDate;
  bool remindersEnabled;
  List<String> reminderTimes;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'dosage': dosage,
        'timesPerDay': timesPerDay,
        'schedule': schedule,
        'notes': notes,
        'category': category,
        'remindersEnabled': remindersEnabled,
        'reminderTimes': reminderTimes,
        if (startDate != null) 'startDate': startDate!.toUtc().toIso8601String(),
        if (endDate != null) 'endDate': endDate!.toUtc().toIso8601String(),
        'createdAt': createdAt.toUtc().toIso8601String(),
      };

  factory NgmyMedicineEntry.fromJson(Map<String, dynamic> json) => NgmyMedicineEntry(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? '').toString(),
        dosage: (json['dosage'] ?? '').toString(),
        timesPerDay: (json['timesPerDay'] as num?)?.toInt().clamp(1, 12) ?? 1,
        schedule: (json['schedule'] ?? '').toString(),
        notes: (json['notes'] ?? '').toString(),
        category: (json['category'] ?? 'Daily').toString(),
        remindersEnabled: json['remindersEnabled'] != false,
        reminderTimes: (json['reminderTimes'] as List?)?.map((e) => e.toString()).toList() ?? const [],
        startDate: DateTime.tryParse((json['startDate'] ?? '').toString()),
        endDate: DateTime.tryParse((json['endDate'] ?? '').toString()),
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

Future<List<NgmyMedicineEntry>> _loadMedicines(String userEmail) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_medicineKey(userEmail));
    if (raw == null) return [];
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.whereType<Map>().map((e) => NgmyMedicineEntry.fromJson(Map<String, dynamic>.from(e))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _saveMedicines(String userEmail, List<NgmyMedicineEntry> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_medicineKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyMedicineOrganizerCount({required String userEmail}) async {
  return (await _loadMedicines(userEmail)).length;
}

Future<List<NgmyMedicineEntry>> ngmyExportMedicines({required String userEmail}) => _loadMedicines(userEmail);

Future<void> ngmyImportMedicines({required String userEmail, required List<NgmyMedicineEntry> items}) async {
  final existing = await _loadMedicines(userEmail);
  final byId = {for (final e in existing) e.id: e};
  for (final item in items) {
    byId[item.id] = item;
  }
  await _saveMedicines(userEmail, byId.values.toList());
}

List<String> ngmyDefaultMedicineReminderTimes(int timesPerDay) {
  switch (timesPerDay.clamp(1, 6)) {
    case 1:
      return ['08:00'];
    case 2:
      return ['08:00', '20:00'];
    case 3:
      return ['08:00', '14:00', '20:00'];
    case 4:
      return ['07:00', '12:00', '17:00', '21:00'];
    case 5:
      return ['07:00', '10:00', '13:00', '17:00', '21:00'];
    default:
      return ['07:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
  }
}

String ngmyFormatMedicineClock(String hhmm) {
  final parts = hhmm.split(':');
  if (parts.length < 2) return hhmm;
  final h = int.tryParse(parts[0]) ?? 0;
  final m = int.tryParse(parts[1]) ?? 0;
  final hour12 = h == 0 ? 12 : (h > 12 ? h - 12 : h);
  final ampm = h >= 12 ? 'PM' : 'AM';
  return '$hour12:${m.toString().padLeft(2, '0')} $ampm';
}

String ngmyMedicinePinBody(NgmyMedicineEntry m) {
  final times = m.reminderTimes.isNotEmpty ? m.reminderTimes : ngmyDefaultMedicineReminderTimes(m.timesPerDay);
  return [
    if (m.dosage.trim().isNotEmpty) 'Dosage: ${m.dosage.trim()}',
    '${m.timesPerDay}x per day',
    if (m.category.trim().isNotEmpty) 'Category: ${m.category.trim()}',
    if (m.schedule.trim().isNotEmpty) 'Schedule: ${m.schedule.trim()}',
    if (times.isNotEmpty) 'Times: ${times.map(ngmyFormatMedicineClock).join(' · ')}',
    if (m.notes.trim().isNotEmpty) 'Notes: ${m.notes.trim()}',
    m.remindersEnabled ? 'Reminders: On' : 'Reminders: Off',
    'Time for your medicine',
  ].join('\n');
}

Future<void> showNgmyMedicineOrganizerDialog(BuildContext context, {required String userEmail}) {
  final t = NgmyHubTheme.of(context);
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Medicine Organizer',
    barrierColor: t.barrier,
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (ctx, a1, a2) => _MedicineOrganizerScreen(userEmail: userEmail),
    transitionBuilder: (ctx, anim, _, child) {
      final slide = Tween<Offset>(begin: const Offset(0, 0.06), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(opacity: anim, child: SlideTransition(position: slide, child: child));
    },
  );
}

class _MedicineOrganizerScreen extends StatefulWidget {
  const _MedicineOrganizerScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_MedicineOrganizerScreen> createState() => _MedicineOrganizerScreenState();
}

class _MedicineOrganizerScreenState extends State<_MedicineOrganizerScreen> {
  List<NgmyMedicineEntry> _items = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await _loadMedicines(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _items = list;
      _loading = false;
    });
  }

  Future<void> _persist(List<NgmyMedicineEntry> list) async {
    await _saveMedicines(widget.userEmail, list);
    if (mounted) setState(() => _items = list);
  }

  Future<void> _openEditor({NgmyMedicineEntry? existing}) async {
    final saved = await showNgmyModernEditorPage<NgmyMedicineEntry>(
      context,
      _MedicineEditorPage(existing: existing),
    );
    if (saved == null) return;
    final list = List<NgmyMedicineEntry>.from(_items);
    final idx = list.indexWhere((e) => e.id == saved.id);
    if (idx >= 0) {
      list[idx] = saved;
    } else {
      list.add(saved);
    }
    await _persist(list);
  }

  Future<void> _delete(NgmyMedicineEntry item) async {
    final ok = await showNgmyDeleteConfirm(
      context,
      title: 'Remove medicine?',
      message: 'Delete ${item.name}?',
    );
    if (ok != true) return;
    await _persist(_items.where((e) => e.id != item.id).toList());
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    const accent = Color(0xFFEC4899);
    return Material(
      color: t.scaffold,
      child: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 160,
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [accent.withValues(alpha: t.isDark ? 0.2 : 0.12), t.heroGradientEnd],
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(color: t.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
                          child: Icon(Icons.arrow_back_ios_new_rounded, color: t.iconButtonIcon, size: 18),
                        ),
                      ),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Medicine Organizer', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 18)),
                            Text('Dosage & schedule tracker', style: TextStyle(color: const Color(0xFFF472B6), fontWeight: FontWeight.w700, fontSize: 11)),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => _openEditor(),
                        icon: Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            gradient: const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFFDB2777)]),
                            borderRadius: BorderRadius.circular(14),
                          ),
                          child: const Icon(Icons.add_rounded, color: Colors.white, size: 22),
                        ),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: _loading
                      ? Center(child: CircularProgressIndicator(color: accent))
                      : _items.isEmpty
                          ? Center(
                              child: Padding(
                                padding: const EdgeInsets.all(24),
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(Icons.medication_liquid_rounded, size: 56, color: t.muted.withValues(alpha: 0.5)),
                                    const SizedBox(height: 12),
                                    Text('Track medicines & vitamins', style: TextStyle(color: t.title, fontWeight: FontWeight.w700, fontSize: 16)),
                                    const SizedBox(height: 6),
                                    Text('Save name, dosage, and how many times per day — all stored locally on your device.', textAlign: TextAlign.center, style: TextStyle(color: t.subtitle, fontSize: 13)),
                                  ],
                                ),
                              ),
                            )
                          : ListView.builder(
                              padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
                              itemCount: _items.length,
                              itemBuilder: (_, i) {
                                final m = _items[i];
                                return _MedicinePlasticCard(
                                  medicine: m,
                                  accent: accent,
                                  onEdit: () => _openEditor(existing: m),
                                  onDelete: () => _delete(m),
                                );
                              },
                            ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _MedicinePlasticCard extends StatelessWidget {
  const _MedicinePlasticCard({
    required this.medicine,
    required this.accent,
    required this.onEdit,
    required this.onDelete,
  });

  final NgmyMedicineEntry medicine;
  final Color accent;
  final VoidCallback onEdit;
  final VoidCallback onDelete;

  @override
  Widget build(BuildContext context) {
    final times = medicine.reminderTimes.isNotEmpty
        ? medicine.reminderTimes
        : ngmyDefaultMedicineReminderTimes(medicine.timesPerDay);
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      height: 168,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        boxShadow: [
          BoxShadow(color: accent.withValues(alpha: 0.3), blurRadius: 16, offset: const Offset(0, 6)),
          const BoxShadow(color: Colors.black26, blurRadius: 8, offset: Offset(0, 2)),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onEdit,
          borderRadius: BorderRadius.circular(18),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(18),
            child: Stack(
              children: [
                Positioned.fill(
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [
                          const Color(0xFFFFF1F7),
                          Color.lerp(const Color(0xFFFCE7F3), accent, 0.25)!,
                          Color.lerp(const Color(0xFFFBCFE8), accent, 0.45)!,
                        ],
                      ),
                    ),
                  ),
                ),
                Positioned(
                  right: -10,
                  bottom: -16,
                  child: Icon(Icons.medication_liquid_rounded, size: 100, color: accent.withValues(alpha: 0.14)),
                ),
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 28,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: [accent.withValues(alpha: 0.7), accent]),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 14),
                      child: Row(
                        children: [
                          const Icon(Icons.local_pharmacy_rounded, color: Colors.white, size: 13),
                          const SizedBox(width: 6),
                          const Text('MEDICATION CARD', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 1.2)),
                          const Spacer(),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.22),
                              borderRadius: BorderRadius.circular(999),
                            ),
                            child: Text(medicine.category.toUpperCase(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 8, letterSpacing: 0.6)),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(14, 10, 10, 34),
                  child: Row(
                    children: [
                      Container(
                        width: 46,
                        height: 46,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(14),
                          gradient: LinearGradient(colors: [accent, accent.withValues(alpha: 0.7)]),
                          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 10)],
                        ),
                        child: const Icon(Icons.local_pharmacy_rounded, color: Colors.white, size: 24),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              medicine.name,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(color: Color(0xFF831843), fontWeight: FontWeight.w900, fontSize: 16),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              medicine.dosage.isEmpty ? 'Dosage not set' : medicine.dosage,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(color: const Color(0xFF9D174D).withValues(alpha: 0.85), fontWeight: FontWeight.w700, fontSize: 12),
                            ),
                            const Spacer(),
                            Wrap(
                              spacing: 6,
                              runSpacing: 4,
                              children: [
                                _MedChip(label: '${medicine.timesPerDay}x / day'),
                                if (medicine.schedule.isNotEmpty) _MedChip(label: medicine.schedule),
                                if (medicine.remindersEnabled)
                                  const _MedChip(label: 'Reminders on')
                                else
                                  const _MedChip(label: 'Reminders off'),
                              ],
                            ),
                            if (times.isNotEmpty) ...[
                              const SizedBox(height: 6),
                              Row(
                                children: [
                                  Icon(Icons.access_time_filled_rounded, size: 13, color: accent.withValues(alpha: 0.85)),
                                  const SizedBox(width: 4),
                                  Expanded(
                                    child: Text(
                                      times.map(ngmyFormatMedicineClock).join(' · '),
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                      style: TextStyle(color: const Color(0xFF9D174D).withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 10.5),
                                    ),
                                  ),
                                ],
                              ),
                            ],
                            if (medicine.notes.trim().isNotEmpty) ...[
                              const SizedBox(height: 4),
                              Text(
                                medicine.notes.trim(),
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(color: const Color(0xFFBE185D).withValues(alpha: 0.75), fontWeight: FontWeight.w600, fontSize: 10),
                              ),
                            ],
                          ],
                        ),
                      ),
                      Column(
                        children: [
                          _MedCircleBtn(icon: Icons.edit_rounded, onTap: onEdit),
                          const SizedBox(height: 6),
                          _MedCircleBtn(icon: Icons.delete_outline_rounded, onTap: onDelete, danger: true),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _MedChip extends StatelessWidget {
  const _MedChip({required this.label});
  final String label;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: const Color(0xFFEC4899).withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: const Color(0xFFEC4899).withValues(alpha: 0.35)),
      ),
      child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFFBE185D), fontWeight: FontWeight.w800, fontSize: 10)),
    );
  }
}

class _MedCircleBtn extends StatelessWidget {
  const _MedCircleBtn({required this.icon, required this.onTap, this.danger = false});
  final IconData icon;
  final VoidCallback onTap;
  final bool danger;
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      customBorder: const CircleBorder(),
      child: Container(
        width: 30,
        height: 30,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Colors.white.withValues(alpha: 0.85),
          border: Border.all(color: danger ? const Color(0xFFFCA5A5) : const Color(0xFFF9A8D4)),
        ),
        child: Icon(icon, size: 15, color: danger ? const Color(0xFFEF4444) : const Color(0xFFBE185D)),
      ),
    );
  }
}

class _MedicineEditorPage extends StatefulWidget {
  const _MedicineEditorPage({this.existing});
  final NgmyMedicineEntry? existing;

  @override
  State<_MedicineEditorPage> createState() => _MedicineEditorPageState();
}

class _MedicineEditorPageState extends State<_MedicineEditorPage> {
  static const _accent = Color(0xFFEC4899);
  late final TextEditingController _name;
  late final TextEditingController _dosage;
  late final TextEditingController _schedule;
  late final TextEditingController _notes;
  int _timesPerDay = 1;
  String _category = 'Daily';
  DateTime? _startDate;
  DateTime? _endDate;
  bool _remindersEnabled = true;
  List<String> _reminderTimes = [];

  @override
  void initState() {
    super.initState();
    final e = widget.existing;
    _name = TextEditingController(text: e?.name ?? '');
    _dosage = TextEditingController(text: e?.dosage ?? '');
    _schedule = TextEditingController(text: e?.schedule ?? '');
    _notes = TextEditingController(text: e?.notes ?? '');
    _timesPerDay = e?.timesPerDay ?? 1;
    _category = e?.category ?? 'Daily';
    _startDate = e?.startDate;
    _endDate = e?.endDate;
    _remindersEnabled = e?.remindersEnabled ?? true;
    _reminderTimes = e?.reminderTimes.isNotEmpty == true
        ? List<String>.from(e!.reminderTimes)
        : ngmyDefaultMedicineReminderTimes(_timesPerDay);
  }

  void _syncReminderTimesToCount() {
    final defaults = ngmyDefaultMedicineReminderTimes(_timesPerDay);
    if (_reminderTimes.length == defaults.length) return;
    _reminderTimes = List<String>.from(defaults);
  }

  Future<void> _pickReminderTime(int index) async {
    final parts = _reminderTimes[index].split(':');
    final hour = int.tryParse(parts.first) ?? 8;
    final minute = parts.length > 1 ? int.tryParse(parts[1]) ?? 0 : 0;
    final picked = await showTimePicker(
      context: context,
      initialTime: TimeOfDay(hour: hour, minute: minute),
      builder: (ctx, child) => Theme(
        data: Theme.of(ctx).copyWith(colorScheme: const ColorScheme.dark(primary: _accent, surface: Color(0xFF111827))),
        child: child!,
      ),
    );
    if (picked == null) return;
    setState(() {
      _reminderTimes[index] = '${picked.hour.toString().padLeft(2, '0')}:${picked.minute.toString().padLeft(2, '0')}';
    });
  }

  String _formatReminderTime(String slot) {
    final parts = slot.split(':');
    if (parts.length < 2) return slot;
    final h = int.tryParse(parts[0]) ?? 0;
    final m = parts[1];
    final hour = h > 12 ? h - 12 : (h == 0 ? 12 : h);
    final ampm = h >= 12 ? 'PM' : 'AM';
    return '$hour:$m $ampm';
  }

  @override
  void dispose() {
    _name.dispose();
    _dosage.dispose();
    _schedule.dispose();
    _notes.dispose();
    super.dispose();
  }

  void _save() {
    if (_name.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter medicine name')));
      return;
    }
    Navigator.pop(
      context,
      NgmyMedicineEntry(
        id: widget.existing?.id,
        name: _name.text.trim(),
        dosage: _dosage.text.trim(),
        timesPerDay: _timesPerDay,
        schedule: _schedule.text.trim(),
        notes: _notes.text.trim(),
        category: _category,
        startDate: _startDate,
        endDate: _endDate,
        remindersEnabled: _remindersEnabled,
        reminderTimes: List<String>.from(_reminderTimes),
        createdAt: widget.existing?.createdAt,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isNew = widget.existing == null;
    return NgmyModernEditorPage(
      title: isNew ? 'Add Medicine' : 'Edit Medicine',
      subtitle: 'Track pills, vitamins, and how often to take them — saved locally only.',
      accent: _accent,
      icon: Icons.medication_liquid_rounded,
      onClose: () => Navigator.pop(context),
      onSave: _save,
      saveLabel: isNew ? 'Save Medicine' : 'Update',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          NgmyModernField(controller: _name, label: 'Medicine name', hint: 'Aspirin, Vitamin D…', icon: Icons.medication_rounded, accent: _accent),
          NgmyModernField(controller: _dosage, label: 'Dosage', hint: '500mg, 1 tablet…', icon: Icons.scale_rounded, accent: _accent),
          Text('TIMES PER DAY', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 8),
          NgmyModernChipRow(
            options: const ['1', '2', '3', '4', '6'],
            selected: '$_timesPerDay',
            accent: _accent,
            onSelected: (v) => setState(() {
              _timesPerDay = int.parse(v);
              _syncReminderTimesToCount();
            }),
          ),
          const SizedBox(height: 4),
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            value: _remindersEnabled,
            activeTrackColor: _accent.withValues(alpha: 0.45),
            thumbColor: WidgetStateProperty.resolveWith((states) => states.contains(WidgetState.selected) ? _accent : null),
            title: const Text('Reminder alerts', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 15)),
            subtitle: Text(
              _remindersEnabled ? 'Blocking popup when it is time to take this medicine' : 'Reminders off for this medicine',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 12),
            ),
            onChanged: (v) => setState(() => _remindersEnabled = v),
          ),
          if (_remindersEnabled) ...[
            Text('REMINDER TIMES', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
            const SizedBox(height: 8),
            ...List.generate(_reminderTimes.length, (i) {
              return Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: () => _pickReminderTime(i),
                    borderRadius: BorderRadius.circular(14),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.05),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: _accent.withValues(alpha: 0.25)),
                      ),
                      child: Row(
                        children: [
                          Icon(Icons.alarm_rounded, color: _accent, size: 18),
                          const SizedBox(width: 10),
                          Text('Dose ${i + 1}', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w600, fontSize: 13)),
                          const Spacer(),
                          Text(_formatReminderTime(_reminderTimes[i]), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                          const SizedBox(width: 6),
                          Icon(Icons.edit_rounded, color: Colors.white.withValues(alpha: 0.35), size: 16),
                        ],
                      ),
                    ),
                  ),
                ),
              );
            }),
          ],
          NgmyModernField(controller: _schedule, label: 'Schedule', hint: 'Morning & evening, with food…', icon: Icons.schedule_rounded, accent: _accent),
          NgmyModernDateField(label: 'Start date', value: _startDate, accent: _accent, onChanged: (d) => setState(() => _startDate = d)),
          NgmyModernDateField(label: 'End date', value: _endDate, accent: _accent, onChanged: (d) => setState(() => _endDate = d)),
          Text('TYPE', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 8),
          NgmyModernChipRow(
            options: const ['Daily', 'As needed', 'Weekly', 'Prescription'],
            selected: _category,
            accent: _accent,
            onSelected: (v) => setState(() => _category = v),
          ),
          NgmyModernField(controller: _notes, label: 'Notes', hint: 'Doctor, pharmacy, side effects…', icon: Icons.notes_rounded, accent: _accent, maxLines: 3),
        ],
      ),
    );
  }
}
