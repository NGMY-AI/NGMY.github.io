import 'package:flutter/material.dart';

import 'ngmy_civic_registry_members.dart';

/// One enrolled civic member shown in the admin transfer picker.
class NgmyCivicTransferCandidate {
  const NgmyCivicTransferCandidate({
    required this.email,
    required this.fullName,
    required this.registryId,
    required this.state,
    this.phone = '',
    this.city = '',
  });

  final String email;
  final String fullName;
  final String registryId;
  final String state;
  final String phone;
  final String city;

  factory NgmyCivicTransferCandidate.fromMember(Map<String, dynamic> m) {
    return NgmyCivicTransferCandidate(
      email: (m['email'] ?? '').toString(),
      fullName: (m['fullName'] ?? '').toString().trim().isEmpty
          ? ((m['email'] ?? '').toString().trim().isEmpty ? 'Member' : (m['email'] ?? '').toString())
          : (m['fullName'] ?? '').toString().trim(),
      registryId: (m['registryId'] ?? '').toString().trim(),
      state: (m['state'] ?? '').toString().trim(),
      phone: (m['phone'] ?? '').toString().trim(),
      city: (m['city'] ?? '').toString().trim(),
    );
  }
}

/// Admin-only: pick an enrolled member and move their full civic record to another state.
Future<void> showNgmyTransferCivicMemberStateSheet(
  BuildContext context, {
  required bool isDark,
  required List<String> usStates,
  required List<NgmyCivicTransferCandidate> members,
  required Future<bool> Function({
    required NgmyCivicTransferCandidate member,
    required String fromState,
    required String toState,
  }) onTransfer,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _TransferCivicMemberSheet(
      isDark: isDark,
      usStates: usStates,
      members: members,
      onTransfer: onTransfer,
    ),
  );
}

class _TransferCivicMemberSheet extends StatefulWidget {
  const _TransferCivicMemberSheet({
    required this.isDark,
    required this.usStates,
    required this.members,
    required this.onTransfer,
  });

  final bool isDark;
  final List<String> usStates;
  final List<NgmyCivicTransferCandidate> members;
  final Future<bool> Function({
    required NgmyCivicTransferCandidate member,
    required String fromState,
    required String toState,
  }) onTransfer;

  @override
  State<_TransferCivicMemberSheet> createState() => _TransferCivicMemberSheetState();
}

class _TransferCivicMemberSheetState extends State<_TransferCivicMemberSheet> {
  final _search = TextEditingController();
  NgmyCivicTransferCandidate? _selected;
  String? _toState;
  bool _busy = false;

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  List<NgmyCivicTransferCandidate> get _filtered {
    final q = _search.text.trim().toLowerCase();
    if (q.isEmpty) return widget.members;
    return widget.members.where((m) {
      return m.fullName.toLowerCase().contains(q) ||
          m.email.toLowerCase().contains(q) ||
          m.registryId.toLowerCase().contains(q) ||
          m.state.toLowerCase().contains(q) ||
          m.phone.contains(q);
    }).toList();
  }

  Future<void> _confirmTransfer() async {
    final member = _selected;
    final to = (_toState ?? '').trim();
    if (member == null || to.isEmpty) return;
    if (member.state.trim().toLowerCase() == to.toLowerCase()) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('${member.fullName} is already registered in $to.')),
      );
      return;
    }

    final ok = await showDialog<bool>(
      context: context,
      builder: (dCtx) => AlertDialog(
        title: const Text('Transfer member?'),
        content: Text(
          'Move ${member.fullName} from ${member.state.isEmpty ? '—' : member.state} to $to?\n\n'
          'Their registry ID, profile, family info, helps, missed, passport, nicknames, photo, '
          'claims, and contribution history stay with them. City and room will be cleared '
          'so they can be assigned in the new state.',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(dCtx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(dCtx, true), child: const Text('Transfer')),
        ],
      ),
    );
    if (ok != true || !mounted) return;

    setState(() => _busy = true);
    final success = await widget.onTransfer(
      member: member,
      fromState: member.state,
      toState: to,
    );
    if (!mounted) return;
    setState(() => _busy = false);
    if (success) {
      Navigator.pop(context);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('${member.fullName} transferred to $to.'),
          backgroundColor: const Color(0xFF059669),
        ),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Transfer failed. Try again.'), backgroundColor: Color(0xFFDC2626)),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final bg = widget.isDark ? const Color(0xFF0F111A) : Colors.white;
    final muted = widget.isDark ? Colors.white60 : Colors.black54;
    final filtered = _filtered;
    final targetChoices = widget.usStates
        .where((s) => s.trim().toLowerCase() != (_selected?.state ?? '').trim().toLowerCase())
        .toList();

    return SafeArea(
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.88, maxWidth: 560),
          margin: const EdgeInsets.fromLTRB(14, 14, 14, 18),
          padding: const EdgeInsets.fromLTRB(18, 16, 18, 18),
          decoration: BoxDecoration(
            color: bg,
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: widget.isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: widget.isDark ? Colors.white24 : Colors.black12,
                    borderRadius: BorderRadius.circular(99),
                  ),
                ),
              ),
              const SizedBox(height: 14),
              const Text('Transfer member to another state', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 6),
              Text(
                'Admin only. Moves the full civic registry record — profile, helps, claims, and more.',
                style: TextStyle(fontSize: 12.5, color: muted, height: 1.35),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: _search,
                enabled: !_busy,
                decoration: InputDecoration(
                  hintText: 'Search name, email, registry ID, state…',
                  prefixIcon: const Icon(Icons.search_rounded),
                  filled: true,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
                onChanged: (_) => setState(() {}),
              ),
              const SizedBox(height: 10),
              Expanded(
                child: filtered.isEmpty
                    ? Center(child: Text('No enrolled members found.', style: TextStyle(color: muted)))
                    : ListView.separated(
                        itemCount: filtered.length,
                        separatorBuilder: (_, _) => const SizedBox(height: 6),
                        itemBuilder: (_, i) {
                          final m = filtered[i];
                          final selected = _selected?.registryId == m.registryId &&
                              NgmyCivicRegistryMembers.emailKey(_selected?.email ?? '') ==
                                  NgmyCivicRegistryMembers.emailKey(m.email);
                          return Material(
                            color: selected
                                ? const Color(0xFF6200EE).withValues(alpha: widget.isDark ? 0.22 : 0.10)
                                : (widget.isDark ? const Color(0xFF151B28) : const Color(0xFFF8FAFC)),
                            borderRadius: BorderRadius.circular(14),
                            child: ListTile(
                              enabled: !_busy,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                              leading: Icon(
                                selected ? Icons.check_circle_rounded : Icons.person_outline_rounded,
                                color: selected ? const Color(0xFF6200EE) : muted,
                              ),
                              title: Text(m.fullName, style: const TextStyle(fontWeight: FontWeight.w800)),
                              subtitle: Text(
                                [
                                  if (m.registryId.isNotEmpty) m.registryId,
                                  if (m.state.isNotEmpty) m.state,
                                  if (m.city.isNotEmpty) m.city,
                                  if (m.email.isNotEmpty) m.email,
                                ].join(' · '),
                                style: TextStyle(fontSize: 12, color: muted),
                              ),
                              onTap: () => setState(() {
                                _selected = m;
                                if ((_toState ?? '').trim().toLowerCase() == m.state.trim().toLowerCase()) {
                                  _toState = null;
                                }
                              }),
                            ),
                          );
                        },
                      ),
              ),
              const SizedBox(height: 10),
              InputDecorator(
                decoration: InputDecoration(
                  labelText: 'Destination state',
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                  filled: true,
                ),
                child: DropdownButtonHideUnderline(
                  child: DropdownButton<String>(
                    isExpanded: true,
                    value: _toState != null && targetChoices.contains(_toState) ? _toState : null,
                    hint: const Text('Choose new state'),
                    items: targetChoices
                        .map((s) => DropdownMenuItem(value: s, child: Text(s)))
                        .toList(),
                    onChanged: _busy || _selected == null
                        ? null
                        : (v) => setState(() => _toState = v),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              FilledButton.icon(
                onPressed: _busy || _selected == null || (_toState ?? '').trim().isEmpty ? null : _confirmTransfer,
                icon: _busy
                    ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Icon(Icons.swap_horiz_rounded),
                label: Text(_busy ? 'Transferring…' : 'Transfer member'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF6200EE),
                  minimumSize: const Size(double.infinity, 48),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
