import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_business_contacts_v2';

String _contactsKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

class NgmyBusinessContact {
  NgmyBusinessContact({
    String? id,
    required this.name,
    required this.company,
    required this.phone,
    required this.email,
    required this.category,
    this.notes = '',
    this.favorite = false,
    DateTime? lastContacted,
    DateTime? createdAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        lastContacted = lastContacted,
        createdAt = createdAt ?? DateTime.now();

  final String id;
  final String name;
  final String company;
  final String phone;
  final String email;
  final String category;
  final String notes;
  final bool favorite;
  final DateTime? lastContacted;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'company': company,
        'phone': phone,
        'email': email,
        'category': category,
        'notes': notes,
        'favorite': favorite,
        if (lastContacted != null) 'lastContacted': lastContacted!.toIso8601String(),
        'createdAt': createdAt.toIso8601String(),
      };

  factory NgmyBusinessContact.fromJson(Map<String, dynamic> json) => NgmyBusinessContact(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? '').toString(),
        company: (json['company'] ?? '').toString(),
        phone: (json['phone'] ?? '').toString(),
        email: (json['email'] ?? '').toString(),
        category: (json['category'] ?? 'Other').toString(),
        notes: (json['notes'] ?? '').toString(),
        favorite: json['favorite'] == true,
        lastContacted: DateTime.tryParse((json['lastContacted'] ?? '').toString()),
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      );

  NgmyBusinessContact copyWith({
    String? name,
    String? company,
    String? phone,
    String? email,
    String? category,
    String? notes,
    bool? favorite,
    DateTime? lastContacted,
  }) =>
      NgmyBusinessContact(
        id: id,
        name: name ?? this.name,
        company: company ?? this.company,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        category: category ?? this.category,
        notes: notes ?? this.notes,
        favorite: favorite ?? this.favorite,
        lastContacted: lastContacted ?? this.lastContacted,
        createdAt: createdAt,
      );
}

Future<List<NgmyBusinessContact>> _loadContacts(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_contactsKey(userEmail));
  if (raw != null && raw.isNotEmpty) {
    try {
      final list = jsonDecode(raw);
      if (list is List) {
        return list
            .whereType<Map>()
            .map((e) => NgmyBusinessContact.fromJson(Map<String, dynamic>.from(e)))
            .where((e) => e.id.isNotEmpty)
            .toList();
      }
    } catch (_) {}
  }
  return _migrateLegacyContact(userEmail);
}

Future<List<NgmyBusinessContact>> _migrateLegacyContact(String userEmail) async {
  final e = userEmail.toLowerCase().trim();
  final legacyKey = 'ngmy_daily_key_fob_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(legacyKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final m = jsonDecode(raw);
    if (m is! Map) return [];
    final company = (m['car'] ?? m['company'] ?? '').toString();
    final name = (m['vin'] ?? m['contactName'] ?? '').toString();
    final phone = (m['plate'] ?? m['phone'] ?? '').toString();
    if (company.isEmpty && name.isEmpty && phone.isEmpty) return [];
    final contact = NgmyBusinessContact(
      name: name.isEmpty ? company : name,
      company: company,
      phone: phone,
      email: (m['spare'] ?? m['email'] ?? '').toString(),
      category: (m['dealer'] ?? m['role'] ?? 'Client').toString().isEmpty ? 'Client' : (m['dealer'] ?? m['role'] ?? 'Client').toString(),
      notes: (m['locksmith'] ?? m['notes'] ?? '').toString(),
    );
    await _saveContacts(userEmail, [contact]);
    return [contact];
  } catch (_) {
    return [];
  }
}

Future<void> _saveContacts(String userEmail, List<NgmyBusinessContact> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_contactsKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyBusinessContactCount({required String userEmail}) async {
  final list = await _loadContacts(userEmail);
  return list.length;
}

Future<List<NgmyBusinessContact>> ngmyExportBusinessContacts({required String userEmail}) => _loadContacts(userEmail);

Future<void> ngmyImportBusinessContacts({required String userEmail, required List<NgmyBusinessContact> items}) async {
  final existing = await _loadContacts(userEmail);
  final byId = {for (final e in existing) e.id: e};
  for (final item in items) {
    byId[item.id] = item;
  }
  await _saveContacts(userEmail, byId.values.toList());
}

Future<void> showNgmyBusinessContactsDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Business Contacts',
    barrierColor: Colors.black.withValues(alpha: 0.88),
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (ctx, a1, a2) => _BusinessContactsScreen(userEmail: userEmail),
    transitionBuilder: (ctx, anim, _, child) {
      final slide = Tween<Offset>(begin: const Offset(0, 0.06), end: Offset.zero)
          .animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(opacity: anim, child: SlideTransition(position: slide, child: child));
    },
  );
}

class _BusinessContactsScreen extends StatefulWidget {
  const _BusinessContactsScreen({required this.userEmail});

  final String userEmail;

  @override
  State<_BusinessContactsScreen> createState() => _BusinessContactsScreenState();
}

class _BusinessContactsScreenState extends State<_BusinessContactsScreen> {
  static const _categories = ['All', 'Client', 'Vendor', 'Partner', 'Employee', 'Other'];
  static const _categoryColors = {
    'Client': Color(0xFF38BDF8),
    'Vendor': Color(0xFFA78BFA),
    'Partner': Color(0xFF34D399),
    'Employee': Color(0xFFFBBF24),
    'Other': Color(0xFF94A3B8),
  };

  List<NgmyBusinessContact> _contacts = [];
  String _filter = 'All';
  String _query = '';
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await _loadContacts(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _contacts = list;
      _loading = false;
    });
  }

  Future<void> _persist(List<NgmyBusinessContact> list) async {
    await _saveContacts(widget.userEmail, list);
    if (mounted) setState(() => _contacts = list);
  }

  List<NgmyBusinessContact> get _visible {
    final q = _query.trim().toLowerCase();
    return _contacts.where((c) {
      if (_filter != 'All' && c.category != _filter) return false;
      if (q.isEmpty) return true;
      return c.name.toLowerCase().contains(q) ||
          c.company.toLowerCase().contains(q) ||
          c.phone.contains(q) ||
          c.email.toLowerCase().contains(q);
    }).toList()
      ..sort((a, b) {
        if (a.favorite != b.favorite) return a.favorite ? -1 : 1;
        final aTime = a.lastContacted ?? a.createdAt;
        final bTime = b.lastContacted ?? b.createdAt;
        return bTime.compareTo(aTime);
      });
  }

  Future<void> _openEditor({NgmyBusinessContact? existing}) async {
    final saved = await showNgmyModernEditorPage<NgmyBusinessContact>(
      context,
      _ContactEditorPage(existing: existing),
    );
    if (saved == null) return;
    final list = List<NgmyBusinessContact>.from(_contacts);
    final idx = list.indexWhere((e) => e.id == saved.id);
    if (idx >= 0) {
      list[idx] = saved;
    } else {
      list.add(saved);
    }
    await _persist(list);
  }

  Future<void> _delete(NgmyBusinessContact c) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF0C1220),
        title: const Text('Delete contact?', style: TextStyle(color: Colors.white)),
        content: Text('Remove ${c.name.isEmpty ? c.company : c.name}?', style: const TextStyle(color: Colors.white70)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    await _persist(_contacts.where((e) => e.id != c.id).toList());
  }

  Future<void> _markContacted(NgmyBusinessContact c) async {
    final updated = c.copyWith(lastContacted: DateTime.now());
    final list = _contacts.map((e) => e.id == c.id ? updated : e).toList();
    await _persist(list);
  }

  Future<void> _toggleFavorite(NgmyBusinessContact c) async {
    final updated = c.copyWith(favorite: !c.favorite);
    final list = _contacts.map((e) => e.id == c.id ? updated : e).toList();
    await _persist(list);
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    final visible = _visible;

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
                  colors: [const Color(0xFF38BDF8).withValues(alpha: 0.22), const Color(0xFF030712)],
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
                            Text('Business Contacts', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                            Text('Rolodex', style: TextStyle(color: Color(0xFF38BDF8), fontWeight: FontWeight.w700, fontSize: 11)),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => _openEditor(),
                        icon: Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            gradient: LinearGradient(colors: [const Color(0xFF38BDF8), const Color(0xFF2563EB)]),
                            borderRadius: BorderRadius.circular(14),
                            boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.35), blurRadius: 12)],
                          ),
                          child: const Icon(Icons.add_rounded, color: Colors.black, size: 22),
                        ),
                      ),
                    ],
                  ),
                ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: TextField(
                onChanged: (v) => setState(() => _query = v),
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  hintText: 'Search name, company, phone…',
                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.4)),
                  prefixIcon: Icon(Icons.search_rounded, color: Colors.white.withValues(alpha: 0.5)),
                  filled: true,
                  fillColor: Colors.white.withValues(alpha: 0.06),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                ),
              ),
            ),
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
                    selectedColor: const Color(0xFF38BDF8).withValues(alpha: 0.25),
                    checkmarkColor: const Color(0xFF38BDF8),
                    labelStyle: TextStyle(color: selected ? const Color(0xFF38BDF8) : Colors.white70, fontWeight: FontWeight.w600),
                  );
                },
              ),
            ),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator(color: Color(0xFF38BDF8)))
                  : visible.isEmpty
                      ? Center(
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(Icons.contacts_rounded, size: 56, color: Colors.white.withValues(alpha: 0.2)),
                                const SizedBox(height: 12),
                                Text(
                                  _contacts.isEmpty ? 'Build your business rolodex' : 'No matches',
                                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 16),
                                ),
                                const SizedBox(height: 6),
                                Text(
                                  'Save clients, vendors, and partners — star favorites and tap to call instantly.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
                                ),
                                const SizedBox(height: 16),
                                FilledButton.icon(
                                  onPressed: () => _openEditor(),
                                  style: FilledButton.styleFrom(
                                    backgroundColor: const Color(0xFF38BDF8),
                                    foregroundColor: Colors.black,
                                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                  icon: const Icon(Icons.person_add_alt_1_rounded),
                                  label: const Text('Add your first contact', style: TextStyle(fontWeight: FontWeight.w900)),
                                ),
                              ],
                            ),
                          ),
                        )
                      : ListView.builder(
                          padding: EdgeInsets.fromLTRB(16, 12, 16, 24 + bottom),
                          itemCount: visible.length,
                          itemBuilder: (_, i) {
                            final c = visible[i];
                            final color = _categoryColors[c.category] ?? _categoryColors['Other']!;
                            return _ContactCard(
                              contact: c,
                              accent: color,
                              onEdit: () => _openEditor(existing: c),
                              onDelete: () => _delete(c),
                              onFavorite: () => _toggleFavorite(c),
                              onCall: () async {
                                await _dial(c.phone);
                                await _markContacted(c);
                              },
                              onEmail: () => _email(c.email),
                              onCopy: () => _copy(c.phone, 'Phone copied'),
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

class _ContactEditorPage extends StatefulWidget {
  const _ContactEditorPage({this.existing});

  final NgmyBusinessContact? existing;

  @override
  State<_ContactEditorPage> createState() => _ContactEditorPageState();
}

class _ContactEditorPageState extends State<_ContactEditorPage> {
  static const _accent = Color(0xFF38BDF8);
  late final TextEditingController _name;
  late final TextEditingController _company;
  late final TextEditingController _phone;
  late final TextEditingController _email;
  late final TextEditingController _notes;
  String _category = 'Client';
  DateTime? _lastContacted;

  @override
  void initState() {
    super.initState();
    final e = widget.existing;
    _name = TextEditingController(text: e?.name ?? '');
    _company = TextEditingController(text: e?.company ?? '');
    _phone = TextEditingController(text: e?.phone ?? '');
    _email = TextEditingController(text: e?.email ?? '');
    _notes = TextEditingController(text: e?.notes ?? '');
    _category = e?.category ?? 'Client';
    _lastContacted = e?.lastContacted;
  }

  @override
  void dispose() {
    _name.dispose();
    _company.dispose();
    _phone.dispose();
    _email.dispose();
    _notes.dispose();
    super.dispose();
  }

  void _save() {
    if (_name.text.trim().isEmpty && _company.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a name or company')));
      return;
    }
    Navigator.pop(
      context,
      NgmyBusinessContact(
        id: widget.existing?.id,
        name: _name.text.trim(),
        company: _company.text.trim(),
        phone: _phone.text.trim(),
        email: _email.text.trim(),
        category: _category,
        notes: _notes.text.trim(),
        favorite: widget.existing?.favorite ?? false,
        lastContacted: _lastContacted,
        createdAt: widget.existing?.createdAt,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isNew = widget.existing == null;
    return NgmyModernEditorPage(
      title: isNew ? 'New Contact' : 'Edit Contact',
      subtitle: isNew ? 'Add someone you call often — client, vendor, or partner.' : 'Update details for this contact.',
      accent: _accent,
      icon: Icons.contacts_rounded,
      onClose: () => Navigator.pop(context),
      onSave: _save,
      saveLabel: isNew ? 'Save Contact' : 'Update Contact',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          NgmyModernField(controller: _name, label: 'Name', hint: 'Full name', icon: Icons.person_outline_rounded, accent: _accent),
          NgmyModernField(controller: _company, label: 'Company', hint: 'Business or organization', icon: Icons.business_rounded, accent: _accent),
          NgmyModernField(controller: _phone, label: 'Phone', hint: '+1 (555) 000-0000', icon: Icons.phone_rounded, accent: _accent, keyboard: TextInputType.phone),
          NgmyModernField(controller: _email, label: 'Email', hint: 'name@company.com', icon: Icons.mail_outline_rounded, accent: _accent, keyboard: TextInputType.emailAddress),
          Text('CATEGORY', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 8),
          NgmyModernChipRow(
            options: const ['Client', 'Vendor', 'Partner', 'Employee', 'Other'],
            selected: _category,
            accent: _accent,
            onSelected: (v) => setState(() => _category = v),
          ),
          NgmyModernDateField(label: 'Last contacted', value: _lastContacted, accent: _accent, onChanged: (d) => setState(() => _lastContacted = d)),
          NgmyModernField(controller: _notes, label: 'Notes', hint: 'Best time to call, account #…', icon: Icons.notes_rounded, accent: _accent, maxLines: 3),
        ],
      ),
    );
  }
}

class _ContactCard extends StatelessWidget {
  const _ContactCard({
    required this.contact,
    required this.accent,
    required this.onEdit,
    required this.onDelete,
    required this.onFavorite,
    required this.onCall,
    required this.onEmail,
    required this.onCopy,
  });

  final NgmyBusinessContact contact;
  final Color accent;
  final VoidCallback onEdit;
  final VoidCallback onDelete;
  final VoidCallback onFavorite;
  final VoidCallback onCall;
  final VoidCallback onEmail;
  final VoidCallback onCopy;

  @override
  Widget build(BuildContext context) {
    final title = contact.name.isNotEmpty ? contact.name : contact.company;
    final subtitle = contact.company.isNotEmpty && contact.name.isNotEmpty ? contact.company : contact.category;

    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.05),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: accent.withValues(alpha: 0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ListTile(
            contentPadding: const EdgeInsets.fromLTRB(14, 4, 8, 0),
            leading: CircleAvatar(
              backgroundColor: accent.withValues(alpha: 0.2),
              child: Text(title.isNotEmpty ? title[0].toUpperCase() : '?', style: TextStyle(color: accent, fontWeight: FontWeight.w800)),
            ),
            title: Row(
              children: [
                Expanded(child: Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700))),
                if (contact.favorite)
                  const Icon(Icons.star_rounded, color: Color(0xFFFBBF24), size: 18),
              ],
            ),
            subtitle: Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                IconButton(tooltip: contact.favorite ? 'Unstar' : 'Star', onPressed: onFavorite, icon: Icon(contact.favorite ? Icons.star_rounded : Icons.star_outline_rounded, color: const Color(0xFFFBBF24), size: 20)),
                IconButton(tooltip: 'Edit', onPressed: onEdit, icon: Icon(Icons.edit_rounded, color: Colors.white.withValues(alpha: 0.55), size: 20)),
                IconButton(tooltip: 'Delete', onPressed: onDelete, icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444), size: 20)),
              ],
            ),
          ),
          if (contact.phone.isNotEmpty || contact.email.isNotEmpty)
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
              child: Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  if (contact.phone.isNotEmpty) ...[
                    _ActionChip(icon: Icons.call_rounded, label: 'Call', color: accent, onTap: onCall),
                    _ActionChip(icon: Icons.copy_rounded, label: 'Copy #', color: Colors.white54, onTap: onCopy),
                  ],
                  if (contact.email.isNotEmpty)
                    _ActionChip(icon: Icons.email_outlined, label: 'Email', color: const Color(0xFF34D399), onTap: onEmail),
                ],
              ),
            ),
          if (contact.notes.isNotEmpty)
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
              child: Text(contact.notes, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11)),
            ),
        ],
      ),
    );
  }
}

class _ActionChip extends StatelessWidget {
  const _ActionChip({required this.icon, required this.label, required this.color, required this.onTap});

  final IconData icon;
  final String label;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(20),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        decoration: BoxDecoration(
          color: color.withValues(alpha: 0.15),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: color.withValues(alpha: 0.35)),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 14, color: color),
            const SizedBox(width: 4),
            Text(label, style: TextStyle(color: color, fontSize: 12, fontWeight: FontWeight.w600)),
          ],
        ),
      ),
    );
  }
}

Future<void> _dial(String phone) async {
  final digits = phone.replaceAll(RegExp(r'[^\d+]'), '');
  if (digits.isEmpty) return;
  final uri = Uri.parse('tel:$digits');
  if (await canLaunchUrl(uri)) await launchUrl(uri);
}

Future<void> _email(String email) async {
  if (email.trim().isEmpty) return;
  final uri = Uri.parse('mailto:${email.trim()}');
  if (await canLaunchUrl(uri)) await launchUrl(uri);
}

Future<void> _copy(String text, String message) async {
  if (text.trim().isEmpty) return;
  await Clipboard.setData(ClipboardData(text: text.trim()));
}
