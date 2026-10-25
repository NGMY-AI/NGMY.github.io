import 'package:flutter/material.dart';

import 'ngmy_civic_user_groups.dart';
import 'ngmy_phone_format.dart';

/// "Enroll existing Lightning group users": the Authorized Registrar sees everyone from their state who joined a
/// Lightning group and is not in the Civic Registry yet, and can enroll them with one tap (the form is filled in
/// for them, including family they chose in the group). Nobody is enrolled automatically.
class NgmyLightningEnrollFrame extends StatefulWidget {
  const NgmyLightningEnrollFrame({
    super.key,
    required this.state,
    required this.isDark,
    required this.enrolled,
    required this.onEnroll,
  });

  final String state;
  final bool isDark;

  /// The members already in the registry (to leave them out of the list).
  final List<Map<String, dynamic>> enrolled;
  final void Function(NgmyLightningUser user, List<Map<String, dynamic>> relatives) onEnroll;

  @override
  State<NgmyLightningEnrollFrame> createState() => _NgmyLightningEnrollFrameState();
}

class _NgmyLightningEnrollFrameState extends State<NgmyLightningEnrollFrame> {
  final TextEditingController _search = TextEditingController();
  List<NgmyLightningUser> _all = [];
  bool _loading = true;
  bool _showAll = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void didUpdateWidget(covariant NgmyLightningEnrollFrame old) {
    super.didUpdateWidget(old);
    if (old.state != widget.state) _load();
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    setState(() => _loading = true);
    List<NgmyCivicUserGroup> groups = const [];
    try {
      groups = await NgmyCivicUserGroupsStore.loadAll();
    } catch (_) {}
    if (!mounted) return;
    setState(() {
      _all = ngmyLightningUsersForState(widget.state, fromServer: NgmyCivicUserGroupsStore.registrarLightningUsers, groups: groups);
      _loading = false;
    });
  }

  String _digits(String s) {
    final d = ngmyPhoneDigits(s);
    return d.length > 10 ? d.substring(d.length - 10) : d;
  }

  bool _isEnrolled(NgmyLightningUser u) {
    final ph = _digits(u.phone);
    for (final m in widget.enrolled) {
      if ((m['email'] ?? '').toString().toLowerCase().trim() == u.email) return true;
      if (ph.length >= 7 && _digits((m['phone'] ?? '').toString()) == ph) return true;
      if ((m['fullName'] ?? '').toString().trim().toLowerCase() == u.name.trim().toLowerCase() && u.name.trim().isNotEmpty) return true;
    }
    return false;
  }

  @override
  Widget build(BuildContext context) {
    final dark = widget.isDark;
    const bolt = Color(0xFF22D3EE);
    final q = _search.text.trim().toLowerCase();
    final waiting = [for (final u in _all) if (!_isEnrolled(u)) u];
    final matches = [
      for (final u in waiting)
        if (q.isEmpty || u.name.toLowerCase().contains(q) || u.phone.contains(q) || u.groupCode.toLowerCase().contains(q)) u,
    ];
    final shown = _showAll ? matches : matches.take(6).toList();
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: dark ? const [Color(0xFF0B2530), Color(0xFF14181F)] : const [Color(0xFFECFEFF), Color(0xFFFFFFFF)]),
        border: Border.all(color: bolt.withValues(alpha: 0.45), width: 1.3),
        boxShadow: [BoxShadow(color: bolt.withValues(alpha: 0.12), blurRadius: 18)],
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Container(
            width: 46,
            height: 46,
            decoration: BoxDecoration(shape: BoxShape.circle, color: bolt.withValues(alpha: 0.16), border: Border.all(color: bolt.withValues(alpha: 0.6))),
            child: const Icon(Icons.bolt_rounded, color: bolt, size: 26),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Lightning group users in ${widget.state}', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: dark ? Colors.white : const Color(0xFF0F172A))),
              const SizedBox(height: 2),
              Text('People who joined a Lightning group and are not in the registry yet.', style: TextStyle(fontSize: 12, color: dark ? Colors.white60 : Colors.black54)),
            ]),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(color: bolt.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(12)),
            child: Text('${waiting.length}', style: const TextStyle(color: bolt, fontWeight: FontWeight.w900, fontSize: 14)),
          ),
        ]),
        const SizedBox(height: 14),
        TextField(
          controller: _search,
          onChanged: (_) => setState(() {}),
          decoration: InputDecoration(
            hintText: 'Search by name, phone or group code…',
            prefixIcon: const Icon(Icons.search_rounded),
            filled: true,
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
            fillColor: dark ? Colors.black26 : Colors.white,
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
          ),
        ),
        const SizedBox(height: 12),
        if (_loading)
          const Padding(padding: EdgeInsets.all(24), child: Center(child: CircularProgressIndicator()))
        else if (shown.isEmpty)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 22),
            child: Center(child: Text(waiting.isEmpty ? 'Everyone from Lightning groups in this state is already in the registry.' : 'Nobody matches that search.', textAlign: TextAlign.center, style: const TextStyle(color: Colors.grey))),
          )
        else
          for (final u in shown) _tile(u, dark, bolt),
        if (!_loading && matches.length > shown.length)
          Align(alignment: Alignment.center, child: TextButton(onPressed: () => setState(() => _showAll = true), child: Text('Show all ${matches.length}'))),
      ]),
    );
  }

  Widget _tile(NgmyLightningUser u, bool dark, Color bolt) {
    final rels = ngmyLightningRelatives(u, _all);
    final famLine = [
      for (final f in u.family) '${_cap(f['relation'] ?? '')}: ${f['name'] ?? ''}',
      for (final r in rels) if (!u.family.any((f) => (f['name'] ?? '').toLowerCase() == '${r['fullName']}'.toLowerCase())) '${_cap('${r['relation']}')}: ${r['fullName']}',
    ];
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: dark ? Colors.white.withValues(alpha: 0.05) : Colors.white, borderRadius: BorderRadius.circular(18), border: Border.all(color: bolt.withValues(alpha: 0.25))),
      child: Row(children: [
        CircleAvatar(backgroundColor: bolt.withValues(alpha: 0.18), child: Text(u.name.isEmpty ? '?' : u.name[0].toUpperCase(), style: TextStyle(color: bolt, fontWeight: FontWeight.w900))),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(u.name, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 14.5)),
            const SizedBox(height: 2),
            Text([if (u.phone.isNotEmpty) ngmyPhoneDashed(u.phone), if (u.groupCode.isNotEmpty) 'Group ${u.groupCode}'].join(' · '), style: TextStyle(fontSize: 12, color: dark ? Colors.white60 : Colors.black54)),
            if (u.address.isNotEmpty) Text(u.address, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11.5, color: dark ? Colors.white38 : Colors.black45)),
            if (famLine.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 4), child: Text('Family: ${famLine.join(' · ')}', style: TextStyle(fontSize: 11.5, color: bolt, fontWeight: FontWeight.w700))),
          ]),
        ),
        const SizedBox(width: 8),
        FilledButton(
          onPressed: () => widget.onEnroll(u, rels),
          style: FilledButton.styleFrom(backgroundColor: bolt, foregroundColor: Colors.black, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
          child: const Text('Enroll', style: TextStyle(fontWeight: FontWeight.w900)),
        ),
      ]),
    );
  }

  String _cap(String s) => s.isEmpty ? s : '${s[0].toUpperCase()}${s.substring(1)}';
}
