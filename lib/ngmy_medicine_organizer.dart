import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

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
    DateTime? createdAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        createdAt = createdAt ?? DateTime.now();

  final String id;
  String name;
  String dosage;
  int timesPerDay;
  String schedule;
  String notes;
  String category;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'dosage': dosage,
        'timesPerDay': timesPerDay,
        'schedule': schedule,
        'notes': notes,
        'category': category,
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

Future<void> showNgmyMedicineOrganizerDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Medicine Organizer',
    barrierColor: Colors.black.withValues(alpha: 0.88),
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
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF0C1220),
        title: const Text('Remove medicine?', style: TextStyle(color: Colors.white)),
        content: Text('Delete ${item.name}?', style: const TextStyle(color: Colors.white70)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626)), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    await _persist(_items.where((e) => e.id != item.id).toList());
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: const Color(0xFF030712),
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
                  colors: [const Color(0xFFEC4899).withValues(alpha: 0.2), const Color(0xFF030712)],
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
                          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(12)),
                          child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18),
                        ),
                      ),
                      const Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Medicine Organizer', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                            Text('Dosage & schedule tracker', style: TextStyle(color: Color(0xFFF472B6), fontWeight: FontWeight.w700, fontSize: 11)),
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
                      ? const Center(child: CircularProgressIndicator(color: Color(0xFFEC4899)))
                      : _items.isEmpty
                          ? Center(
                              child: Padding(
                                padding: const EdgeInsets.all(24),
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(Icons.medication_liquid_rounded, size: 56, color: Colors.white.withValues(alpha: 0.2)),
                                    const SizedBox(height: 12),
                                    const Text('Track medicines & vitamins', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 16)),
                                    const SizedBox(height: 6),
                                    Text('Save name, dosage, and how many times per day — all stored locally on your device.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13)),
                                  ],
                                ),
                              ),
                            )
                          : ListView.builder(
                              padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
                              itemCount: _items.length,
                              itemBuilder: (_, i) {
                                final m = _items[i];
                                return Container(
                                  margin: const EdgeInsets.only(bottom: 10),
                                  decoration: BoxDecoration(
                                    color: Colors.white.withValues(alpha: 0.05),
                                    borderRadius: BorderRadius.circular(14),
                                    border: Border.all(color: const Color(0xFFEC4899).withValues(alpha: 0.25)),
                                  ),
                                  child: ListTile(
                                    leading: CircleAvatar(backgroundColor: const Color(0xFFEC4899).withValues(alpha: 0.2), child: const Icon(Icons.medication_rounded, color: Color(0xFFEC4899), size: 20)),
                                    title: Text(m.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                                    subtitle: Text('${m.dosage.isEmpty ? 'No dosage' : m.dosage} · ${m.timesPerDay}x/day${m.schedule.isNotEmpty ? ' · $m.schedule' : ''}', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
                                    trailing: Row(
                                      mainAxisSize: MainAxisSize.min,
                                      children: [
                                        IconButton(tooltip: 'Edit', onPressed: () => _openEditor(existing: m), icon: Icon(Icons.edit_rounded, color: Colors.white.withValues(alpha: 0.6), size: 20)),
                                        IconButton(tooltip: 'Delete', onPressed: () => _delete(m), icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444), size: 20)),
                                      ],
                                    ),
                                    onTap: () => _openEditor(existing: m),
                                  ),
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
            onSelected: (v) => setState(() => _timesPerDay = int.parse(v)),
          ),
          NgmyModernField(controller: _schedule, label: 'Schedule', hint: 'Morning & evening, with food…', icon: Icons.schedule_rounded, accent: _accent),
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
