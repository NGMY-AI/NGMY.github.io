import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_quick_support_v2';

String _supportKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

class NgmySupportLine {
  NgmySupportLine({
    String? id,
    required this.title,
    required this.provider,
    required this.phone,
    required this.category,
    this.accountRef = '',
    this.extension = '',
    this.notes = '',
    this.emergency = false,
    DateTime? createdAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        createdAt = createdAt ?? DateTime.now();

  final String id;
  final String title;
  final String provider;
  final String phone;
  final String category;
  final String accountRef;
  final String extension;
  final String notes;
  final bool emergency;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'provider': provider,
        'phone': phone,
        'category': category,
        'accountRef': accountRef,
        'extension': extension,
        'notes': notes,
        'emergency': emergency,
        'createdAt': createdAt.toIso8601String(),
      };

  factory NgmySupportLine.fromJson(Map<String, dynamic> json) => NgmySupportLine(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? '').toString(),
        provider: (json['provider'] ?? '').toString(),
        phone: (json['phone'] ?? '').toString(),
        category: (json['category'] ?? 'Custom').toString(),
        accountRef: (json['accountRef'] ?? '').toString(),
        extension: (json['extension'] ?? '').toString(),
        notes: (json['notes'] ?? '').toString(),
        emergency: json['emergency'] == true,
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

class _SupportTemplate {
  const _SupportTemplate(this.category, this.title, this.provider, this.icon, this.color);

  final String category;
  final String title;
  final String provider;
  final IconData icon;
  final Color color;
}

const _templates = [
  _SupportTemplate('Insurance', 'Business insurance', 'Your broker / carrier', Icons.shield_rounded, Color(0xFF38BDF8)),
  _SupportTemplate('IT', 'IT helpdesk', 'Tech support line', Icons.computer_rounded, Color(0xFFA78BFA)),
  _SupportTemplate('Bank', 'Bank / fraud line', 'Financial institution', Icons.account_balance_rounded, Color(0xFF34D399)),
  _SupportTemplate('Legal', 'Legal counsel', 'Law firm / attorney', Icons.gavel_rounded, Color(0xFFFB7185)),
  _SupportTemplate('HR', 'HR / payroll', 'Human resources', Icons.groups_rounded, Color(0xFFFBBF24)),
  _SupportTemplate('Utilities', 'Utilities / facilities', 'Building / power / internet', Icons.build_rounded, Color(0xFF94A3B8)),
];

Future<List<NgmySupportLine>> _loadSupportLines(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_supportKey(userEmail));
  if (raw != null && raw.isNotEmpty) {
    try {
      final list = jsonDecode(raw);
      if (list is List) {
        return list
            .whereType<Map>()
            .map((e) => NgmySupportLine.fromJson(Map<String, dynamic>.from(e)))
            .where((e) => e.id.isNotEmpty)
            .toList();
      }
    } catch (_) {}
  }
  return _migrateLegacySupport(userEmail);
}

Future<List<NgmySupportLine>> _migrateLegacySupport(String userEmail) async {
  final e = userEmail.toLowerCase().trim();
  final legacyKey = 'ngmy_daily_roadside_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(legacyKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final m = jsonDecode(raw);
    if (m is! Map) return [];
    final lines = <NgmySupportLine>[];
    final primary = (m['insurance'] ?? m['primary'] ?? '').toString();
    final account = (m['policy'] ?? m['account'] ?? '').toString();
    final support = (m['roadside'] ?? m['support'] ?? '').toString();
    final emergency = (m['emergency'] ?? '').toString();
    if (primary.isNotEmpty || account.isNotEmpty) {
      lines.add(NgmySupportLine(title: 'Primary support', provider: primary, phone: support, category: 'Insurance', accountRef: account));
    }
    if (emergency.isNotEmpty) {
      lines.add(NgmySupportLine(title: 'Emergency backup', provider: 'Emergency', phone: emergency, category: 'Emergency', emergency: true));
    }
    if (lines.isEmpty) return [];
    await _saveSupportLines(userEmail, lines);
    return lines;
  } catch (_) {
    return [];
  }
}

Future<void> _saveSupportLines(String userEmail, List<NgmySupportLine> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_supportKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyQuickSupportCount({required String userEmail}) async {
  return (await _loadSupportLines(userEmail)).length;
}

Future<List<NgmySupportLine>> ngmyExportQuickSupport({required String userEmail}) => _loadSupportLines(userEmail);

Future<void> ngmyImportQuickSupport({required String userEmail, required List<NgmySupportLine> items}) async {
  final existing = await _loadSupportLines(userEmail);
  final byId = {for (final e in existing) e.id: e};
  for (final item in items) {
    byId[item.id] = item;
  }
  await _saveSupportLines(userEmail, byId.values.toList());
}

Future<void> showNgmyQuickSupportDialog(BuildContext context, {required String userEmail}) {
  final t = NgmyHubTheme.of(context);
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Quick Support',
    barrierColor: t.barrier,
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (ctx, a1, a2) => _QuickSupportScreen(userEmail: userEmail),
    transitionBuilder: (ctx, anim, _, child) {
      final slide = Tween<Offset>(begin: const Offset(0, 0.06), end: Offset.zero)
          .animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(opacity: anim, child: SlideTransition(position: slide, child: child));
    },
  );
}

class _QuickSupportScreen extends StatefulWidget {
  const _QuickSupportScreen({required this.userEmail});

  final String userEmail;

  @override
  State<_QuickSupportScreen> createState() => _QuickSupportScreenState();
}

class _QuickSupportScreenState extends State<_QuickSupportScreen> {
  List<NgmySupportLine> _lines = [];
  bool _loading = true;
  String _filter = 'All';

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await _loadSupportLines(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _lines = list;
      _loading = false;
    });
  }

  Future<void> _persist(List<NgmySupportLine> list) async {
    await _saveSupportLines(widget.userEmail, list);
    if (mounted) setState(() => _lines = list);
  }

  List<String> get _categories {
    final cats = _lines.map((e) => e.category).toSet().toList()..sort();
    return ['All', ...cats];
  }

  List<NgmySupportLine> get _visible {
    var list = _lines;
    if (_filter != 'All') list = list.where((e) => e.category == _filter).toList();
    return list
      ..sort((a, b) {
        if (a.emergency != b.emergency) return a.emergency ? -1 : 1;
        return a.title.compareTo(b.title);
      });
  }

  Future<void> _openEditor({NgmySupportLine? existing, _SupportTemplate? fromTemplate}) async {
    final saved = await showNgmyModernEditorPage<NgmySupportLine>(
      context,
      _SupportEditorPage(existing: existing, template: fromTemplate),
    );
    if (saved == null) return;
    final list = List<NgmySupportLine>.from(_lines);
    final idx = list.indexWhere((e) => e.id == saved.id);
    if (idx >= 0) {
      list[idx] = saved;
    } else {
      list.add(saved);
    }
    await _persist(list);
  }

  Future<void> _delete(NgmySupportLine line) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) {
        final t = NgmyHubTheme.of(ctx);
        return AlertDialog(
          backgroundColor: t.dialogBg,
          title: Text('Remove support line?', style: TextStyle(color: t.title)),
          content: Text('Delete ${line.title}?', style: TextStyle(color: t.subtitle)),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
          ],
        );
      },
    );
    if (ok != true) return;
    await _persist(_lines.where((e) => e.id != line.id).toList());
  }

  Future<void> _dial(NgmySupportLine line) async {
    var phone = line.phone.trim();
    if (line.extension.trim().isNotEmpty) phone = '$phone,,${line.extension.trim()}';
    final digits = phone.replaceAll(RegExp(r'[^\d+,]'), '');
    if (digits.isEmpty) return;
    final uri = Uri.parse('tel:$digits');
    if (await canLaunchUrl(uri)) await launchUrl(uri);
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final visible = _visible;
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    final emergency = _lines.where((e) => e.emergency).toList();
    const accent = Color(0xFFFBBF24);

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
                  colors: [accent.withValues(alpha: t.isDark ? 0.18 : 0.12), t.heroGradientEnd],
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
                            Text('Hotlines', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 18)),
                            Text('Call list', style: TextStyle(color: accent, fontWeight: FontWeight.w700, fontSize: 11)),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => _openEditor(),
                        icon: Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            gradient: const LinearGradient(colors: [Color(0xFFFBBF24), Color(0xFFF59E0B)]),
                            borderRadius: BorderRadius.circular(14),
                          ),
                          child: const Icon(Icons.add_ic_call_rounded, color: Colors.black, size: 22),
                        ),
                      ),
                    ],
                  ),
                ),
            if (emergency.isNotEmpty)
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 6, 16, 0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Icon(Icons.emergency_rounded, color: const Color(0xFFEF4444).withValues(alpha: 0.9), size: 14),
                        const SizedBox(width: 5),
                        Text('Emergency', style: TextStyle(color: t.subtitle, fontWeight: FontWeight.w700, fontSize: 11, letterSpacing: 0.3)),
                      ],
                    ),
                    ...emergency.map(
                      (e) => Padding(
                        padding: const EdgeInsets.only(top: 6),
                        child: Material(
                          color: Colors.transparent,
                          child: InkWell(
                            onTap: () => _dial(e),
                            borderRadius: BorderRadius.circular(10),
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                              decoration: BoxDecoration(
                                color: const Color(0xFF7F1D1D).withValues(alpha: 0.45),
                                borderRadius: BorderRadius.circular(10),
                                border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.35)),
                              ),
                              child: Row(
                                children: [
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: [
                                        Text(
                                          e.title,
                                          style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w600, fontSize: 12),
                                          maxLines: 1,
                                          overflow: TextOverflow.ellipsis,
                                        ),
                                        const SizedBox(height: 2),
                                        Text(
                                          e.phone,
                                          style: const TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w800, fontSize: 17, letterSpacing: 0.3, height: 1.1),
                                        ),
                                      ],
                                    ),
                                  ),
                                  const SizedBox(width: 8),
                                  Container(
                                    padding: const EdgeInsets.all(7),
                                    decoration: BoxDecoration(
                                      color: const Color(0xFFEF4444).withValues(alpha: 0.22),
                                      borderRadius: BorderRadius.circular(8),
                                    ),
                                    child: const Icon(Icons.call_rounded, color: Color(0xFFEF4444), size: 18),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    if (emergency.length == 1)
                      Align(
                        alignment: Alignment.centerRight,
                        child: TextButton(
                          onPressed: () => _openEditor(existing: emergency.first),
                          style: TextButton.styleFrom(
                            foregroundColor: Colors.white.withValues(alpha: 0.4),
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 0),
                            minimumSize: Size.zero,
                            tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                          ),
                          child: const Text('Edit', style: TextStyle(fontSize: 11)),
                        ),
                      ),
                    if (emergency.length > 1)
                      ...emergency.map(
                        (e) => Align(
                          alignment: Alignment.centerRight,
                          child: TextButton(
                            onPressed: () => _openEditor(existing: e),
                            style: TextButton.styleFrom(
                              foregroundColor: Colors.white.withValues(alpha: 0.4),
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 0),
                              minimumSize: Size.zero,
                              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                            ),
                            child: Text('Edit ${e.title}', style: const TextStyle(fontSize: 10), overflow: TextOverflow.ellipsis),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            if (_lines.isEmpty && !_loading)
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
                child: Text('Quick-add from template:', style: TextStyle(color: t.subtitle, fontSize: 12)),
              ),
            if (_lines.isEmpty && !_loading)
              SizedBox(
                height: 110,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                  itemCount: _templates.length,
                  separatorBuilder: (_, __) => const SizedBox(width: 10),
                  itemBuilder: (_, i) {
                    final tmpl = _templates[i];
                    return InkWell(
                      onTap: () => _openEditor(fromTemplate: tmpl),
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        width: 120,
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: tmpl.color.withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: tmpl.color.withValues(alpha: 0.35)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Icon(tmpl.icon, color: tmpl.color, size: 22),
                            const Spacer(),
                            Text(tmpl.category, style: TextStyle(color: tmpl.color, fontWeight: FontWeight.w800, fontSize: 11)),
                            Text(tmpl.title, style: TextStyle(color: t.title.withValues(alpha: 0.85), fontSize: 10), maxLines: 2, overflow: TextOverflow.ellipsis),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
            if (_lines.isNotEmpty)
              SizedBox(
                height: 44,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.fromLTRB(16, 10, 16, 0),
                  itemCount: _categories.length,
                  separatorBuilder: (_, __) => const SizedBox(width: 8),
                  itemBuilder: (_, i) {
                    final cat = _categories[i];
                    final selected = _filter == cat;
                    return FilterChip(
                      label: Text(cat),
                      selected: selected,
                      onSelected: (_) => setState(() => _filter = cat),
                      selectedColor: accent.withValues(alpha: t.isDark ? 0.25 : 0.18),
                      backgroundColor: t.chipOffBg,
                      checkmarkColor: accent,
                      labelStyle: TextStyle(color: selected ? accent : t.chipOffLabel, fontWeight: FontWeight.w600),
                    );
                  },
                ),
              ),
            Expanded(
              child: _loading
                  ? Center(child: CircularProgressIndicator(color: accent))
                  : visible.isEmpty
                      ? Center(
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(Icons.phone_in_talk_rounded, size: 56, color: t.muted.withValues(alpha: 0.5)),
                                const SizedBox(height: 12),
                                Text('Your business help desk', style: TextStyle(color: t.title, fontWeight: FontWeight.w700, fontSize: 16)),
                                const SizedBox(height: 6),
                                Text(
                                  'Insurance, IT, bank fraud, legal — save every hotline and dial in one tap.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(color: t.subtitle, fontSize: 13),
                                ),
                              ],
                            ),
                          ),
                        )
                      : ListView.builder(
                          padding: EdgeInsets.fromLTRB(16, 12, 16, 24 + bottom),
                          itemCount: visible.length,
                          itemBuilder: (_, i) {
                            final line = visible[i];
                            if (line.emergency) return const SizedBox.shrink();
                            final template = _templates.cast<_SupportTemplate?>().firstWhere(
                                  (t) => t!.category == line.category,
                                  orElse: () => null,
                                );
                            final color = template?.color ?? const Color(0xFFFBBF24);
                            return _SupportCard(
                              line: line,
                              accent: color,
                              icon: template?.icon ?? Icons.headset_mic_rounded,
                              onCall: () => _dial(line),
                              onEdit: () => _openEditor(existing: line),
                              onDelete: () => _delete(line),
                              onCopyRef: () async {
                                if (line.accountRef.trim().isEmpty) return;
                                await Clipboard.setData(ClipboardData(text: line.accountRef.trim()));
                                if (context.mounted) {
                                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Reference copied')));
                                }
                              },
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

class _SupportEditorPage extends StatefulWidget {
  const _SupportEditorPage({this.existing, this.template});

  final NgmySupportLine? existing;
  final _SupportTemplate? template;

  @override
  State<_SupportEditorPage> createState() => _SupportEditorPageState();
}

class _SupportEditorPageState extends State<_SupportEditorPage> {
  static const _accent = Color(0xFFFBBF24);
  static const _categoryOptions = ['Insurance', 'IT', 'Bank', 'Legal', 'HR', 'Utilities', 'Custom'];

  late final TextEditingController _title;
  late final TextEditingController _provider;
  late final TextEditingController _phone;
  late final TextEditingController _accountRef;
  late final TextEditingController _extension;
  late final TextEditingController _notes;
  String _category = 'Custom';
  bool _emergency = false;

  @override
  void initState() {
    super.initState();
    final e = widget.existing;
    final t = widget.template;
    _title = TextEditingController(text: e?.title ?? t?.title ?? '');
    _provider = TextEditingController(text: e?.provider ?? t?.provider ?? '');
    _phone = TextEditingController(text: e?.phone ?? '');
    _accountRef = TextEditingController(text: e?.accountRef ?? '');
    _extension = TextEditingController(text: e?.extension ?? '');
    _notes = TextEditingController(text: e?.notes ?? '');
    _category = e?.category ?? t?.category ?? 'Custom';
    _emergency = e?.emergency ?? false;
  }

  @override
  void dispose() {
    _title.dispose();
    _provider.dispose();
    _phone.dispose();
    _accountRef.dispose();
    _extension.dispose();
    _notes.dispose();
    super.dispose();
  }

  void _save() {
    if (_title.text.trim().isEmpty || _phone.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter title and phone')));
      return;
    }
    Navigator.pop(
      context,
      NgmySupportLine(
        id: widget.existing?.id,
        title: _title.text.trim(),
        provider: _provider.text.trim(),
        phone: _phone.text.trim(),
        category: _category,
        accountRef: _accountRef.text.trim(),
        extension: _extension.text.trim(),
        notes: _notes.text.trim(),
        emergency: _emergency,
        createdAt: widget.existing?.createdAt,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isNew = widget.existing == null;
    return NgmyModernEditorPage(
      title: isNew ? 'New Support Line' : 'Edit Support Line',
      subtitle: isNew ? 'Save a hotline — insurance, IT, bank fraud, legal, and more.' : 'Update this help-desk entry.',
      accent: _accent,
      icon: Icons.phone_in_talk_rounded,
      onClose: () => Navigator.pop(context),
      onSave: _save,
      saveLabel: isNew ? 'Save Line' : 'Update Line',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          NgmyModernField(controller: _title, label: 'Title', hint: 'Business insurance, IT helpdesk…', icon: Icons.label_rounded, accent: _accent),
          NgmyModernField(controller: _provider, label: 'Provider', hint: 'Company or department name', icon: Icons.business_rounded, accent: _accent),
          NgmyModernField(controller: _phone, label: 'Phone', hint: '+1 (800) 000-0000', icon: Icons.phone_rounded, accent: _accent, keyboard: TextInputType.phone),
          NgmyModernField(controller: _extension, label: 'Extension', hint: 'Optional extension', icon: Icons.dialpad_rounded, accent: _accent, keyboard: TextInputType.phone),
          NgmyModernField(controller: _accountRef, label: 'Account / policy #', hint: 'Case, policy, or account reference', icon: Icons.tag_rounded, accent: _accent),
          Text('CATEGORY', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 8),
          NgmyModernChipRow(
            options: _categoryOptions,
            selected: _category,
            accent: _accent,
            onSelected: (v) => setState(() => _category = v),
          ),
          NgmyModernField(controller: _notes, label: 'Notes', hint: 'Hours, PIN, what to say when you call…', icon: Icons.notes_rounded, accent: _accent, maxLines: 3),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: _emergency ? const Color(0xFF7F1D1D).withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.04),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: _emergency ? const Color(0xFFEF4444).withValues(alpha: 0.5) : Colors.white.withValues(alpha: 0.08)),
            ),
            child: Row(
              children: [
                Icon(Icons.emergency_rounded, color: _emergency ? const Color(0xFFEF4444) : Colors.white38, size: 22),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('Emergency line', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14)),
                      Text('Pins to top with red quick-dial', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11)),
                    ],
                  ),
                ),
                Switch.adaptive(
                  value: _emergency,
                  activeTrackColor: const Color(0xFFEF4444).withValues(alpha: 0.5),
                  activeThumbColor: const Color(0xFFEF4444),
                  onChanged: (v) => setState(() => _emergency = v),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _SupportCard extends StatelessWidget {
  const _SupportCard({
    required this.line,
    required this.accent,
    required this.icon,
    required this.onCall,
    required this.onEdit,
    required this.onDelete,
    required this.onCopyRef,
  });

  final NgmySupportLine line;
  final Color accent;
  final IconData icon;
  final VoidCallback onCall;
  final VoidCallback onEdit;
  final VoidCallback onDelete;
  final VoidCallback onCopyRef;

  @override
  Widget build(BuildContext context) {
    final theme = NgmyHubTheme.of(context);
    final meta = [line.provider, line.category].where((e) => e.isNotEmpty).join(' · ');
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      height: 86,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            accent.withValues(alpha: theme.isDark ? 0.22 : 0.14),
            theme.listItemBg,
            accent.withValues(alpha: theme.isDark ? 0.10 : 0.06),
          ],
        ),
        border: Border.all(color: accent.withValues(alpha: 0.38)),
        boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.16), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Row(
          children: [
            Container(
              width: 5,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: line.emergency
                      ? const [Color(0xFFEF4444), Color(0xFFF87171)]
                      : [accent, accent.withValues(alpha: 0.45)],
                ),
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(10, 8, 6, 8),
                child: Row(
                  children: [
                    Container(
                      width: 42,
                      height: 42,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          colors: line.emergency
                              ? const [Color(0xFFEF4444), Color(0xFFDC2626)]
                              : [accent, accent.withValues(alpha: 0.65)],
                        ),
                        boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.3), blurRadius: 8)],
                      ),
                      alignment: Alignment.center,
                      child: Icon(icon, color: Colors.white, size: 20),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            line.title,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(color: theme.title, fontWeight: FontWeight.w800, fontSize: 14),
                          ),
                          if (meta.isNotEmpty) ...[
                            const SizedBox(height: 2),
                            Text(meta, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: theme.subtitle, fontSize: 11, fontWeight: FontWeight.w600)),
                          ],
                          if (line.phone.isNotEmpty) ...[
                            const SizedBox(height: 3),
                            Text(line.phone, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent.withValues(alpha: 0.95), fontSize: 11, fontWeight: FontWeight.w700)),
                          ],
                        ],
                      ),
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            if (line.phone.isNotEmpty)
                              _SupportMiniBtn(icon: Icons.call_rounded, color: accent, onTap: onCall),
                            if (line.accountRef.isNotEmpty)
                              _SupportMiniBtn(icon: Icons.copy_rounded, color: theme.muted, onTap: onCopyRef),
                          ],
                        ),
                        const SizedBox(height: 2),
                        Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _SupportMiniBtn(icon: Icons.edit_rounded, color: theme.muted, onTap: onEdit),
                            _SupportMiniBtn(icon: Icons.delete_outline_rounded, color: const Color(0xFFEF4444), onTap: onDelete),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SupportMiniBtn extends StatelessWidget {
  const _SupportMiniBtn({required this.icon, required this.color, required this.onTap});
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(10),
      child: Padding(padding: const EdgeInsets.all(5), child: Icon(icon, size: 16, color: color)),
    );
  }
}

