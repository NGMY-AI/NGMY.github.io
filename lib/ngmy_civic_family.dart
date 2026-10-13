import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// Civic Registry families.
///
/// A member is a household. Their spouse and unmarried children are stored on
/// the member as `relatives` (never searchable, never ranked, never counted as
/// separate contributors — a married couple is one household). The server
/// splits a child marked married, or a spouse marked divorced / separated, into
/// their own member (their own household), still linked to this family.
///
/// Relative map: {id, relation: spouse|child, fullName, gender: male|female|'',
/// dob: MM/DD/YYYY, age, phone, status, relatives (married child only), ownRegistryId}.

const kNgmyCivicMaritalStatuses = <(String, String)>[
  ('single', 'Single'),
  ('married', 'Married'),
  ('divorced', 'Divorced'),
  ('separated', 'Separated'),
  ('widowed', 'Widowed'),
];

List<Map<String, dynamic>> ngmyCivicRelativesOf(Map<String, dynamic>? member) {
  final raw = member?['relatives'];
  if (raw is! List) return [];
  return raw.whereType<Map>().map((e) => _deepCopy(Map<String, dynamic>.from(e))).toList();
}

Map<String, dynamic> _deepCopy(Map<String, dynamic> m) {
  final out = Map<String, dynamic>.from(m);
  final nested = out['relatives'];
  if (nested is List) {
    out['relatives'] = nested.whereType<Map>().map((e) => _deepCopy(Map<String, dynamic>.from(e))).toList();
  }
  return out;
}

String _g(dynamic v) {
  final s = '${v ?? ''}'.trim().toLowerCase();
  return s == 'male' || s == 'female' ? s : '';
}

bool _splitOff(Map<String, dynamic> r) => '${r['ownRegistryId'] ?? ''}'.trim().isNotEmpty;

/// People who still live in this household (split-off people have their own).
List<Map<String, dynamic>> ngmyCivicHouseholdRelatives(List<Map<String, dynamic>> rels) => rels.where((r) {
      if (_splitOff(r)) return false;
      if (r['relation'] == 'spouse') return (r['status'] ?? 'married') == 'married';
      return (r['status'] ?? 'single') != 'married';
    }).toList();

/// Family size and male/female counts worked out from the people added.
({int total, int males, int females, bool allKnown}) ngmyCivicFamilyCounts(String selfGender, List<Map<String, dynamic>> rels) {
  final inHouse = ngmyCivicHouseholdRelatives(rels);
  final genders = [_g(selfGender), ...inHouse.map((r) => _g(r['gender']))];
  return (
    total: 1 + inHouse.length,
    males: genders.where((g) => g == 'male').length,
    females: genders.where((g) => g == 'female').length,
    allKnown: genders.every((g) => g.isNotEmpty),
  );
}

String _childKey(Map<String, dynamic> r) {
  final n = '${r['fullName'] ?? ''}'.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');
  if (n.isEmpty) return '';
  final d = '${r['dob'] ?? ''}'.trim();
  final age = r['age'];
  return '$n|${d.isNotEmpty ? d : (age != null && '$age'.isNotEmpty ? 'age$age' : '')}';
}

/// A child can only be listed under two parents (mother and father).
/// Returns a message when one of [rels] is already under two other families.
String? ngmyCivicChildParentConflict(
  List<Map<String, dynamic>> roster,
  List<Map<String, dynamic>> rels, {
  String excludeRegistryId = '',
}) {
  final ex = excludeRegistryId.trim().toUpperCase();
  for (final r in rels) {
    if (r['relation'] != 'child' || _splitOff(r)) continue;
    final key = _childKey(r);
    if (key.isEmpty) continue;
    var parents = 0;
    for (final m in roster) {
      if (ex.isNotEmpty && '${m['registryId'] ?? ''}'.trim().toUpperCase() == ex) continue;
      if (ngmyCivicRelativesOf(m).any((x) => x['relation'] == 'child' && !_splitOff(x) && _childKey(x) == key)) parents++;
    }
    if (parents >= 2) {
      return '${r['fullName']} is already listed as a child in two families (their mother and father). A child can only be added under two parents.';
    }
  }
  return null;
}

/// "Wife Jane · 3 children · 1 has own family"
String ngmyCivicFamilySummary(List<Map<String, dynamic>> rels) {
  if (rels.isEmpty) return 'No family members added yet';
  final spouse = rels.where((r) => r['relation'] == 'spouse').toList();
  final kids = rels.where((r) => r['relation'] == 'child').toList();
  final own = rels.where(_splitOff).length;
  final parts = <String>[
    for (final s in spouse) '${(s['status'] ?? 'married') == 'married' ? 'Spouse' : 'Former spouse'}: ${s['fullName']}',
    if (kids.isNotEmpty) '${kids.length} ${kids.length == 1 ? 'child' : 'children'}',
    if (own > 0) '$own with own family',
  ];
  return parts.join(' · ');
}

/// Male / Female choice.
class NgmyCivicGenderPicker extends StatelessWidget {
  const NgmyCivicGenderPicker({super.key, required this.value, required this.onChanged, this.isDark = true});
  final String value;
  final ValueChanged<String> onChanged;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    Widget opt(String id, String label, IconData icon, Color color) {
      final on = value == id;
      return Expanded(
        child: GestureDetector(
          onTap: () {
            HapticFeedback.selectionClick();
            onChanged(on ? '' : id);
          },
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            height: 48,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              color: on ? color.withValues(alpha: 0.18) : (isDark ? Colors.black26 : Colors.grey.shade100),
              border: Border.all(color: on ? color : Colors.transparent, width: 1.6),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 20, color: on ? color : Colors.grey),
                const SizedBox(width: 6),
                Text(label, style: TextStyle(fontWeight: FontWeight.w800, color: on ? color : (isDark ? Colors.white70 : Colors.black54))),
              ],
            ),
          ),
        ),
      );
    }

    return Row(
      children: [
        opt('male', 'Male', Icons.male_rounded, const Color(0xFF3B82F6)),
        const SizedBox(width: 10),
        opt('female', 'Female', Icons.female_rounded, const Color(0xFFEC4899)),
      ],
    );
  }
}

/// Single / Married / Divorced / Separated / Widowed.
class NgmyCivicMaritalPicker extends StatelessWidget {
  const NgmyCivicMaritalPicker({super.key, required this.value, required this.onChanged, this.isDark = true});
  final String value;
  final ValueChanged<String> onChanged;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        for (final (id, label) in kNgmyCivicMaritalStatuses)
          ChoiceChip(
            label: Text(label),
            selected: value == id,
            onSelected: (_) => onChanged(value == id ? '' : id),
            selectedColor: const Color(0xFF00B25A).withValues(alpha: 0.25),
            labelStyle: TextStyle(fontWeight: FontWeight.w700, color: value == id ? const Color(0xFF00B25A) : (isDark ? Colors.white70 : Colors.black87)),
          ),
      ],
    );
  }
}

/// The "+ Family" button with a short summary, between Males/Females and Register.
class NgmyCivicFamilyButton extends StatelessWidget {
  const NgmyCivicFamilyButton({super.key, required this.relatives, required this.onTap, this.isDark = true});
  final List<Map<String, dynamic>> relatives;
  final VoidCallback onTap;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    const green = Color(0xFF00B25A);
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(18),
      child: Container(
        padding: const EdgeInsets.fromLTRB(12, 10, 14, 10),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          color: green.withValues(alpha: 0.08),
          border: Border.all(color: green.withValues(alpha: 0.45)),
        ),
        child: Row(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: const BoxDecoration(shape: BoxShape.circle, color: green),
              child: const Icon(Icons.add_rounded, color: Colors.white, size: 26),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    relatives.isEmpty ? 'Add family (spouse & children)' : 'Family members (${relatives.length})',
                    style: TextStyle(fontWeight: FontWeight.w900, color: isDark ? Colors.white : Colors.black87),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    ngmyCivicFamilySummary(relatives),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                  ),
                ],
              ),
            ),
            const Icon(Icons.chevron_right_rounded, color: green),
          ],
        ),
      ),
    );
  }
}

/// A spouse is the opposite gender of the person they are married to.
String ngmyCivicSpouseGender(String headGender) => switch (_g(headGender)) {
      'male' => 'female',
      'female' => 'male',
      _ => '',
    };

/// After the enrollee's gender changes, their (current) spouse follows.
List<Map<String, dynamic>> ngmyCivicAlignSpouses(String headGender, List<Map<String, dynamic>> rels) {
  final sg = ngmyCivicSpouseGender(headGender);
  if (sg.isEmpty) return rels;
  return [
    for (final r in rels)
      r['relation'] == 'spouse' && (r['status'] ?? 'married') == 'married' && !_splitOff(r) ? {...r, 'gender': sg} : r,
  ];
}

const kNgmyCivicIdTypes = ['National ID', 'Passport', 'Drivers License', 'Voters Card'];

/// What the family shares with the person enrolled (they live together), and
/// which of the enrollment form's questions each relative is asked too.
class NgmyCivicFamilyHome {
  const NgmyCivicFamilyHome({
    this.headName = '',
    this.headGender = '',
    this.address = '',
    this.city = '',
    this.askIdType = false,
    this.askEmail = false,
  });
  final String headName;
  final String headGender;
  final String address;
  final String city;
  final bool askIdType;
  final bool askEmail;

  NgmyCivicFamilyHome under(String name, String gender) => NgmyCivicFamilyHome(
        headName: name,
        headGender: gender,
        address: address,
        city: city,
        askIdType: askIdType,
        askEmail: askEmail,
      );

  String get where => [address.trim(), city.trim()].where((s) => s.isNotEmpty).join(', ');
}

/// Edits the spouse and children. Returns the new list, or null if cancelled.
Future<List<Map<String, dynamic>>?> showNgmyCivicFamilyEditor(
  BuildContext context, {
  required List<Map<String, dynamic>> relatives,
  NgmyCivicFamilyHome home = const NgmyCivicFamilyHome(),
  bool nested = false,
}) {
  return showModalBottomSheet<List<Map<String, dynamic>>>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _FamilyEditorSheet(
      initial: ngmyCivicAlignSpouses(home.headGender, relatives.map(_deepCopy).toList()),
      home: home,
      nested: nested,
    ),
  );
}

class _FamilyEditorSheet extends StatefulWidget {
  const _FamilyEditorSheet({required this.initial, required this.home, required this.nested});
  final List<Map<String, dynamic>> initial;
  final NgmyCivicFamilyHome home;
  final bool nested;
  String get headName => home.headName;
  @override
  State<_FamilyEditorSheet> createState() => _FamilyEditorSheetState();
}

class _FamilyEditorSheetState extends State<_FamilyEditorSheet> {
  late List<Map<String, dynamic>> _rels = widget.initial;

  Future<void> _edit({Map<String, dynamic>? existing, required String relation}) async {
    final r = await showDialog<Map<String, dynamic>>(
      context: context,
      builder: (_) => _RelativeDialog(existing: existing, relation: relation, allowNested: !widget.nested, home: widget.home),
    );
    if (r == null || !mounted) return;
    setState(() {
      final i = existing == null ? -1 : _rels.indexOf(existing);
      if (i >= 0) {
        _rels[i] = r;
      } else {
        _rels = [..._rels, r];
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF111827) : Colors.white;
    final spouses = _rels.where((r) => r['relation'] == 'spouse').toList();
    final kids = _rels.where((r) => r['relation'] == 'child').toList();
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.9, maxWidth: 680),
        decoration: BoxDecoration(color: bg, borderRadius: const BorderRadius.vertical(top: Radius.circular(24))),
        child: SafeArea(
          top: false,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const SizedBox(height: 10),
              Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey, borderRadius: BorderRadius.circular(99))),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 14, 20, 4),
                child: Row(
                  children: [
                    const Icon(Icons.family_restroom_rounded, color: Color(0xFF00B25A)),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        widget.headName.trim().isEmpty ? 'Family members' : '${widget.headName.trim()}\'s family',
                        style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18),
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Text(
                  'Relatives are private: they never show in search and are not ranked. A child marked married, or a divorced spouse, becomes their own family automatically.',
                  style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54, height: 1.35),
                ),
              ),
              Flexible(
                child: ListView(
                  shrinkWrap: true,
                  padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
                  children: [
                    if (_rels.isEmpty)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 22),
                        child: Text('No one added yet.', textAlign: TextAlign.center, style: TextStyle(color: isDark ? Colors.white54 : Colors.black45)),
                      ),
                    for (final r in [...spouses, ...kids]) _relTile(r, isDark),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
                child: Row(
                  children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: () => _edit(relation: 'spouse'),
                        icon: const Icon(Icons.favorite_rounded, size: 18),
                        label: const Text('Add spouse'),
                        style: OutlinedButton.styleFrom(minimumSize: const Size(0, 46), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: () => _edit(relation: 'child'),
                        icon: const Icon(Icons.child_care_rounded, size: 18),
                        label: const Text('Add child'),
                        style: OutlinedButton.styleFrom(minimumSize: const Size(0, 46), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 14),
                child: SizedBox(
                  width: double.infinity,
                  height: 50,
                  child: ElevatedButton(
                    onPressed: () => Navigator.pop(context, _rels),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF00B25A),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                    child: Text('Done · ${_rels.length} ${_rels.length == 1 ? 'person' : 'people'}', style: const TextStyle(fontWeight: FontWeight.w900)),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _relTile(Map<String, dynamic> r, bool isDark) {
    final spouse = r['relation'] == 'spouse';
    final status = '${r['status'] ?? (spouse ? 'married' : 'single')}';
    final g = _g(r['gender']);
    final age = r['age'];
    final details = [
      spouse ? (status == 'married' ? 'Spouse' : 'Former spouse ($status)') : (status == 'married' ? 'Child · married' : 'Child'),
      if (g.isNotEmpty) g == 'male' ? 'Male' : 'Female',
      if ('${r['dob'] ?? ''}'.trim().isNotEmpty) 'Born ${r['dob']}' else if (age != null && '$age'.isNotEmpty) 'Age $age',
      if ('${r['address'] ?? ''}'.trim().isNotEmpty) 'Lives at ${r['address']}',
      if (_splitOff(r)) 'Own family (${r['ownRegistryId']})',
      if (!spouse && status == 'married' && (r['relatives'] is List) && (r['relatives'] as List).isNotEmpty) '${(r['relatives'] as List).length} in their family',
    ];
    return Card(
      margin: const EdgeInsets.only(bottom: 8),
      color: isDark ? Colors.white.withValues(alpha: 0.05) : Colors.grey.shade50,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: (spouse ? const Color(0xFFEC4899) : const Color(0xFF3B82F6)).withValues(alpha: 0.18),
          child: Icon(spouse ? Icons.favorite_rounded : Icons.child_care_rounded, color: spouse ? const Color(0xFFEC4899) : const Color(0xFF3B82F6), size: 20),
        ),
        title: Text('${r['fullName']}', style: const TextStyle(fontWeight: FontWeight.w800)),
        subtitle: Text(details.join(' · '), style: const TextStyle(fontSize: 12)),
        onTap: () => _edit(existing: r, relation: spouse ? 'spouse' : 'child'),
        trailing: IconButton(
          tooltip: 'Remove',
          icon: const Icon(Icons.delete_outline_rounded, color: Colors.redAccent),
          onPressed: _splitOff(r)
              ? null // already their own family — keep the link
              : () => setState(() => _rels = _rels.where((x) => !identical(x, r)).toList()),
        ),
      ),
    );
  }
}


class _RelativeDialog extends StatefulWidget {
  const _RelativeDialog({this.existing, required this.relation, required this.allowNested, required this.home});
  final Map<String, dynamic>? existing;
  final String relation;
  final bool allowNested;
  final NgmyCivicFamilyHome home;
  @override
  State<_RelativeDialog> createState() => _RelativeDialogState();
}

class _RelativeDialogState extends State<_RelativeDialog> {
  late final _name = TextEditingController(text: '${widget.existing?['fullName'] ?? ''}');
  late final _dob = TextEditingController(text: '${widget.existing?['dob'] ?? ''}');
  late final _age = TextEditingController(text: widget.existing?['age'] == null ? '' : '${widget.existing!['age']}');
  late final _phone = TextEditingController(text: '${widget.existing?['phone'] ?? ''}');
  late final _email = TextEditingController(text: '${widget.existing?['email'] ?? ''}');
  late final _address = TextEditingController(text: '${widget.existing?['address'] ?? ''}');
  late bool _livesElsewhere = '${widget.existing?['address'] ?? ''}'.trim().isNotEmpty;
  late String _idType = () {
    final v = '${widget.existing?['idType'] ?? ''}'.trim();
    return kNgmyCivicIdTypes.contains(v) ? v : 'National ID';
  }();
  late String _gender = _g(widget.existing?['gender']);
  late String _status = '${widget.existing?['status'] ?? (widget.relation == 'spouse' ? 'married' : 'single')}';
  late List<Map<String, dynamic>> _nested = ngmyCivicRelativesOf(widget.existing);
  String? _error;

  bool get _spouse => widget.relation == 'spouse';
  bool get _locked => _splitOff(widget.existing ?? const {});

  /// A married spouse's gender comes from the person enrolled (opposite).
  String get _fixedGender => _spouse && _status == 'married' ? ngmyCivicSpouseGender(widget.home.headGender) : '';

  @override
  void dispose() {
    _name.dispose();
    _dob.dispose();
    _age.dispose();
    _phone.dispose();
    _email.dispose();
    _address.dispose();
    super.dispose();
  }

  void _save() {
    final name = _name.text.trim();
    if (!RegExp(r'^\S+\s+\S+').hasMatch(name)) {
      setState(() => _error = 'Full name is required (first and last name).');
      return;
    }
    final dob = _dob.text.trim();
    if (dob.isNotEmpty && !RegExp(r'^\d{2}/\d{2}/\d{4}$').hasMatch(dob)) {
      setState(() => _error = 'Date of Birth must be in MM/DD/YYYY format.');
      return;
    }
    final phone = _phone.text.replaceAll(RegExp(r'\D'), '');
    if (_spouse && !RegExp(r'^\d{7,15}$').hasMatch(phone)) {
      setState(() => _error = 'Phone number is required (7–15 digits).');
      return;
    }
    if (!_spouse && phone.isNotEmpty && !RegExp(r'^\d{7,15}$').hasMatch(phone)) {
      setState(() => _error = 'Phone number must be 7–15 digits (or leave it blank).');
      return;
    }
    final email = _email.text.trim().toLowerCase();
    if (email.isNotEmpty && !RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$').hasMatch(email)) {
      setState(() => _error = 'Please enter a valid email address.');
      return;
    }
    final gender = _fixedGender.isNotEmpty ? _fixedGender : _gender;
    if (gender.isEmpty) {
      setState(() => _error = 'Choose male or female.');
      return;
    }
    final age = _spouse ? null : int.tryParse(_age.text.trim());
    final out = <String, dynamic>{
      ...?widget.existing,
      'id': widget.existing?['id'] ?? 'rel_${DateTime.now().microsecondsSinceEpoch}',
      'relation': widget.relation,
      'fullName': name,
      'gender': gender,
      'dob': dob,
      'age': age,
      'phone': phone,
      if (widget.home.askIdType) 'idType': _idType,
      if (widget.home.askEmail) 'email': email,
      'status': _status,
      'address': !_spouse && _livesElsewhere ? _address.text.trim() : '',
    };
    if (!_spouse && _status == 'married' && widget.allowNested) {
      out['relatives'] = ngmyCivicAlignSpouses(gender, _nested);
    } else {
      out.remove('relatives');
    }
    Navigator.pop(context, out);
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    InputDecoration deco(String label, {String? hint}) => InputDecoration(
          labelText: label,
          hintText: hint,
          filled: true,
          fillColor: isDark ? Colors.black26 : Colors.grey.shade50,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
        );
    final fixed = _fixedGender;
    final where = widget.home.where;
    final dobField = TextField(controller: _dob, keyboardType: TextInputType.datetime, decoration: deco('Date of Birth', hint: 'MM/DD/YYYY'));
    return AlertDialog(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
      title: Text(widget.existing == null ? (_spouse ? 'Add spouse' : 'Add child') : 'Edit ${_spouse ? 'spouse' : 'child'}'),
      content: SizedBox(
        width: 460,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextField(controller: _name, textCapitalization: TextCapitalization.words, decoration: deco('Full Name *', hint: 'First and last name')),
              const SizedBox(height: 12),
              if (fixed.isNotEmpty)
                Container(
                  height: 48,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(14),
                    color: (fixed == 'male' ? const Color(0xFF3B82F6) : const Color(0xFFEC4899)).withValues(alpha: 0.14),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        fixed == 'male' ? Icons.male_rounded : Icons.female_rounded,
                        color: fixed == 'male' ? const Color(0xFF3B82F6) : const Color(0xFFEC4899),
                      ),
                      const SizedBox(width: 6),
                      Text(fixed == 'male' ? 'Male (husband)' : 'Female (wife)', style: const TextStyle(fontWeight: FontWeight.w800)),
                    ],
                  ),
                )
              else
                NgmyCivicGenderPicker(value: _gender, onChanged: (v) => setState(() => _gender = v), isDark: isDark),
              const SizedBox(height: 12),
              if (_spouse)
                dobField
              else
                Row(
                  children: [
                    Expanded(flex: 3, child: dobField),
                    const SizedBox(width: 10),
                    Expanded(
                      flex: 2,
                      child: TextField(
                        controller: _age,
                        keyboardType: TextInputType.number,
                        inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                        decoration: deco('or Age'),
                      ),
                    ),
                  ],
                ),
              if (widget.home.askIdType) ...[
                const SizedBox(height: 12),
                DropdownButtonFormField<String>(
                  initialValue: _idType,
                  decoration: deco('ID Type'),
                  items: [for (final t in kNgmyCivicIdTypes) DropdownMenuItem(value: t, child: Text(t))],
                  onChanged: (v) => setState(() => _idType = v ?? _idType),
                ),
              ],
              const SizedBox(height: 12),
              TextField(
                controller: _phone,
                keyboardType: TextInputType.phone,
                decoration: deco(_spouse ? 'Phone Number *' : 'Phone Number (optional)'),
              ),
              if (widget.home.askEmail) ...[
                const SizedBox(height: 12),
                TextField(controller: _email, keyboardType: TextInputType.emailAddress, decoration: deco('Email (optional)')),
              ],
              if (!_livesElsewhere && where.isNotEmpty) ...[
                const SizedBox(height: 12),
                Row(
                  children: [
                    const Icon(Icons.home_rounded, size: 18, color: Color(0xFF00B25A)),
                    const SizedBox(width: 6),
                    Expanded(
                      child: Text(
                        'Lives at $where (same home)',
                        style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : Colors.black54),
                      ),
                    ),
                  ],
                ),
              ],
              // Optional: a child who doesn't live with the parents.
              if (!_spouse) ...[
                const SizedBox(height: 8),
                if (!_livesElsewhere)
                  Align(
                    alignment: Alignment.centerLeft,
                    child: TextButton.icon(
                      onPressed: () => setState(() => _livesElsewhere = true),
                      icon: const Icon(Icons.add_location_alt_rounded, size: 18),
                      label: const Text('Lives somewhere else? Add their address', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  )
                else ...[
                  const SizedBox(height: 4),
                  TextField(
                    controller: _address,
                    textCapitalization: TextCapitalization.words,
                    decoration: deco('Where this child lives (optional)', hint: 'Street, city'),
                  ),
                  Align(
                    alignment: Alignment.centerLeft,
                    child: TextButton(
                      onPressed: () => setState(() {
                        _livesElsewhere = false;
                        _address.clear();
                      }),
                      child: const Text('Lives with the parents'),
                    ),
                  ),
                ],
              ],
              const SizedBox(height: 14),
              Text(_spouse ? 'Status' : 'Is this child married?', style: const TextStyle(fontWeight: FontWeight.w800)),
              const SizedBox(height: 8),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  for (final (id, label) in _spouse
                      ? const [('married', 'Married'), ('divorced', 'Divorced'), ('separated', 'Separated / broke up')]
                      : const [('single', 'Not married'), ('married', 'Married')])
                    ChoiceChip(
                      label: Text(label),
                      selected: _status == id,
                      onSelected: _locked ? null : (_) => setState(() => _status = id),
                    ),
                ],
              ),
              if (_status != (_spouse ? 'married' : 'single') && !_locked) ...[
                const SizedBox(height: 8),
                Text(
                  _spouse
                      ? 'When saved, they become their own family in Civic Registry and are counted on their own.'
                      : 'When saved, they become their own family in Civic Registry (still shown under this family).',
                  style: const TextStyle(fontSize: 12, color: Color(0xFFF59E0B), fontWeight: FontWeight.w700),
                ),
              ],
              if (!_spouse && _status == 'married' && widget.allowNested) ...[
                const SizedBox(height: 12),
                NgmyCivicFamilyButton(
                  relatives: _nested,
                  isDark: isDark,
                  onTap: () async {
                    final next = await showNgmyCivicFamilyEditor(
                      context,
                      relatives: _nested,
                      home: widget.home.under(_name.text, _gender),
                      nested: true,
                    );
                    if (next != null && mounted) setState(() => _nested = next);
                  },
                ),
              ],
              if (_error != null) ...[
                const SizedBox(height: 10),
                Text(_error!, style: const TextStyle(color: Colors.redAccent, fontWeight: FontWeight.w700)),
              ],
            ],
          ),
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
        ElevatedButton(onPressed: _save, child: const Text('Save')),
      ],
    );
  }
}
