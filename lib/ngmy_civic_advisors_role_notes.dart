import 'package:flutter/material.dart';

import 'ngmy_communicate.dart';

/// Read-only reference for the admin — what to ask Cursor to add in NGMY Advisors.
/// No controls; advisors in the app are unchanged.
class NgmyCivicAdvisorsRoleNotesCard extends StatefulWidget {
  const NgmyCivicAdvisorsRoleNotesCard({super.key, required this.isDark});

  final bool isDark;

  @override
  State<NgmyCivicAdvisorsRoleNotesCard> createState() => _NgmyCivicAdvisorsRoleNotesCardState();
}

class _NgmyCivicAdvisorsRoleNotesCardState extends State<NgmyCivicAdvisorsRoleNotesCard> {
  bool _expanded = false;

  @override
  Widget build(BuildContext context) {
    final isDark = widget.isDark;
    final cardBg = isDark ? const Color(0xFF1E1E1E) : Colors.white;
    final border = isDark ? Colors.white12 : const Color(0xFFE5E7EB);
    final muted = isDark ? Colors.white60 : Colors.black54;
    final title = isDark ? Colors.white : Colors.black87;

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: cardBg,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: border),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.2 : 0.05), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: () => setState(() => _expanded = !_expanded),
              borderRadius: BorderRadius.circular(24),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(18, 16, 14, 16),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: const Color(0xFFEC4899).withValues(alpha: 0.14),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: const Icon(Icons.notes_rounded, color: Color(0xFFEC4899), size: 22),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Communicate', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: title)),
                          const SizedBox(height: 2),
                          Text(
                            'Reference only — how to ask for new advisors & roles',
                            style: TextStyle(fontSize: 12, color: muted, height: 1.3),
                          ),
                        ],
                      ),
                    ),
                    Icon(_expanded ? Icons.expand_less_rounded : Icons.expand_more_rounded, color: muted),
                  ],
                ),
              ),
            ),
          ),
          if (_expanded) ...[
            Divider(height: 1, color: border),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 14, 18, 18),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _section('What you can add in $kNgmyAdvisorsHubTitle', title, muted),
                  const SizedBox(height: 8),
                  Text(
                    'Ask Cursor to add or edit an AI advisor (companion). Existing advisors stay as they are.',
                    style: TextStyle(fontSize: 12, color: muted, height: 1.4),
                  ),
                  const SizedBox(height: 12),
                  _section('Advisor roles', title, muted),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 6,
                    runSpacing: 6,
                    children: kNgmyCommunicateRoles.entries
                        .map((e) => _chip(e.value, isDark))
                        .toList(),
                  ),
                  const SizedBox(height: 16),
                  _section('Profile fields (per advisor)', title, muted),
                  const SizedBox(height: 8),
                  _bullet('Name, gender (male / female), role (from list above)', muted),
                  _bullet('Personality — how they talk and behave', muted),
                  _bullet('Bio (optional short line)', muted),
                  _bullet('Emoji fallback, photo / avatar', muted),
                  _bullet('Active or hidden (hidden = users do not see them)', muted),
                  const SizedBox(height: 16),
                  _section('Mshauri — state & president notes', title, muted),
                  const SizedBox(height: 8),
                  Text(
                    'For Mshauri (Community Advisor) only — per US state you can set:',
                    style: TextStyle(fontSize: 12, color: muted, height: 1.4),
                  ),
                  const SizedBox(height: 8),
                  _bullet('President name (primary)', muted),
                  _bullet('President name (alternate spelling)', muted),
                  _bullet('Group / faction label (primary & alternate)', muted),
                  _bullet('Admin notes — extra teaching for that state', muted),
                  const SizedBox(height: 16),
                  _section('NGMY AI keys', title, muted),
                  const SizedBox(height: 8),
                  Text(
                    'Gemini, ElevenLabs, and Resend keys are not edited in the admin app anymore. '
                    'Send your key to Cursor when you need a change — current keys in the app stay until you ask.',
                    style: TextStyle(fontSize: 12, color: muted, height: 1.4),
                  ),
                  const SizedBox(height: 16),
                  _section('Example instructions', title, muted),
                  const SizedBox(height: 8),
                  _example(
                    'Add a Financial Advisor named Sarah — female, warm personality, helps with budgeting.',
                    isDark,
                  ),
                  const SizedBox(height: 8),
                  _example(
                    'Add Mshauri for Texas: president name …, group label …, notes about local civic registry.',
                    isDark,
                  ),
                  const SizedBox(height: 8),
                  _example(
                    'Hide advisor [name] or update [name] personality to …',
                    isDark,
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _section(String text, Color title, Color muted) {
    return Text(
      text.toUpperCase(),
      style: TextStyle(fontSize: 10, letterSpacing: 1.1, fontWeight: FontWeight.w800, color: muted),
    );
  }

  Widget _chip(String label, bool isDark) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF2A1A32) : const Color(0xFFFDF2F8),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFEC4899).withValues(alpha: 0.25)),
      ),
      child: Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : const Color(0xFF9D174D))),
    );
  }

  Widget _bullet(String text, Color muted) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('• ', style: TextStyle(color: muted, fontSize: 12)),
          Expanded(child: Text(text, style: TextStyle(fontSize: 12, color: muted, height: 1.35))),
        ],
      ),
    );
  }

  Widget _example(String text, bool isDark) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: isDark ? Colors.black26 : const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
      ),
      child: Text(
        '“$text”',
        style: TextStyle(fontSize: 12, fontStyle: FontStyle.italic, color: isDark ? Colors.white70 : Colors.black87, height: 1.35),
      ),
    );
  }
}
