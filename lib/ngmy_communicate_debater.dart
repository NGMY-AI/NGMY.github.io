import 'dart:async';

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_phone_contact_resolve.dart';
import 'ngmy_phone_integrations.dart';

/// Shared Christian core beliefs — same as Bible Study Teacher.
const String kNgmyDebaterChristianBeliefs = '''
CORE BELIEF (what you stand for — never concede):
- There is only ONE God — God the Father is the only true God.
- Jesus Christ is the Son of God — sent by the Father. Eternal life is knowing the only true God AND Jesus Christ whom He sent.
- Jesus Christ is also God because He is the Son of God — the son shares the nature of the father. He is God's Son, not a rival second Almighty.
- The Trinity doctrine (three co-equal persons in one God) is NOT biblical — you believe it is a lie. Teach: one God the Father, and Jesus Christ His Son.
''';

String ngmyDebaterRolePromptBlock() {
  return 'ROLE: Christian Debater — skilled apologist on the CREATION / Christianity side. You ALWAYS debate (unlike Bible Study Teacher teach mode). '
      'You defend Scripture against Muslims, atheists, Jehovah\'s Witnesses, Mormons, Hindus, or anyone — respectfully but firmly.\n'
      '$kNgmyDebaterChristianBeliefs'
      'DEBATE STYLE (always on):\n'
      '- Listen to their EXACT argument, then dismantle it with Scripture + logic + key Hebrew/Greek keywords (1–3 words, not whole verses in original language).\n'
      '- Ask sharp follow-up questions that expose contradictions in THEIR belief system.\n'
      '- Against Islam: engage Quran vs Bible claims with respect — no insults — but never agree that Jesus was only a prophet if Scripture says Son of God.\n'
      '- Against atheism: cosmology, morality, fulfilled prophecy, resurrection evidence.\n'
      '- Against Trinity defenders: Father supreme (John 14:28), Son sent/begotten, one God the Father.\n'
      '- Replies should be ready to TEXT — concise paragraphs unless they need a longer answer.\n'
      '- When user pastes an opponent message, write the reply THEY should send back — first person optional ("You could say…") or direct quote they can copy.\n'
      '- When user asks you to ask a question, write ONE strong debate question they can send.\n'
      '- Never say you are AI. You are their debate coach and Christian apologist partner.\n'
      'SCRIPTURE POOL (rotate — do not repeat the same two verses every time):\n'
      'John 17:3; 1 Cor 8:6; Deut 6:4; Mark 12:29; John 20:17; John 14:28; 1 Tim 2:5; Matt 16:16; John 10:36; Psalm 2:7; Heb 1:5; Rom 1:3-4; Acts 2:22; Col 1:15; Rev 3:14; Isa 9:6; Micah 5:2; John 1:14.\n';
}

bool ngmyCommunicateRoleIsDebater(String role) => role == 'debater';

class NgmyDebateSessionStore {
  static String _key(String email, String profileId) =>
      'ngmy_debate_session_${email.toLowerCase().trim()}_${profileId.trim()}';

  static Future<Map<String, String>> load(String email, String profileId) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email, profileId));
    if (raw == null || raw.isEmpty) {
      return {'opponentName': '', 'opponentPhone': '', 'channel': 'sms'};
    }
    try {
      final map = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      var channel = (map['channel'] ?? 'sms').toString();
      if (channel == 'messenger' || channel == 'app') channel = 'sms';
      return {
        'opponentName': (map['opponentName'] ?? '').toString(),
        'opponentPhone': (map['opponentPhone'] ?? '').toString(),
        'channel': channel,
      };
    } catch (_) {
      return {'opponentName': '', 'opponentPhone': '', 'channel': 'sms'};
    }
  }

  static Future<void> save(
    String email,
    String profileId, {
    required String opponentName,
    required String opponentPhone,
    required String channel,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(email, profileId),
      jsonEncode({
        'opponentName': opponentName.trim(),
        'opponentPhone': opponentPhone.trim(),
        'channel': channel,
      }),
    );
  }
}

String ngmyDebateChannelLabel(String channel) => switch (channel) {
      'whatsapp' => 'WhatsApp',
      'sms' => 'iMessage',
      _ => 'iMessage',
    };

String ngmyNormalizeDebatePhone(String raw) {
  final t = raw.trim();
  if (t.isEmpty) return '';
  final digits = t.replaceAll(RegExp(r'[^\d+]'), '');
  return digits.isNotEmpty ? digits : t;
}

String ngmyDebatePastePrompt(String opponentText, {String? opponentName, String channel = 'sms'}) {
  final who = opponentName?.trim().isNotEmpty == true ? opponentName!.trim() : 'the person they are debating';
  return 'DEBATE — OPPONENT MESSAGE pasted from $who (${ngmyDebateChannelLabel(channel)}):\n'
      '"$opponentText"\n\n'
      'Write a strong Christian apologetic reply they can send back. Counter their specific points. '
      'Same beliefs as Bible Study Teacher. Text-message length unless more detail is needed.\n';
}

String ngmyDebateAskQuestionPrompt({String? opponentName, String? topic}) {
  final who = opponentName?.trim().isNotEmpty == true ? opponentName!.trim() : 'their opponent';
  final t = topic?.trim().isNotEmpty == true ? ' about ${topic!.trim()}' : '';
  return 'DEBATE — generate ONE sharp question the user can send to $who$t. '
      'It should challenge their belief respectfully and advance the Christian position.\n';
}

Future<String?> ngmyDebateSendReply({
  required BuildContext context,
  required String userEmail,
  required String opponentName,
  required String opponentPhone,
  required String channel,
  required String message,
  List<Map<String, dynamic>> ngmyUsers = const [],
}) async {
  final text = message.trim();
  if (text.isEmpty) return 'Nothing to send.';
  if (!context.mounted) return null;

  final name = opponentName.trim();
  final phone = ngmyNormalizeDebatePhone(opponentPhone);
  if (name.isEmpty && phone.isEmpty) {
    return 'Add opponent name or phone number in Debate mode above.';
  }

  final type = channel == 'whatsapp' ? 'whatsapp' : 'sms';
  List<NgmyPhoneAction> actions;

  if (phone.isNotEmpty) {
    actions = [
      NgmyPhoneAction(
        type: type,
        fields: {
          'phone': phone,
          if (name.isNotEmpty) 'name': name,
          'contactName': name.isNotEmpty ? name : phone,
          'body': text,
        },
      ),
    ];
  } else {
    actions = [
      NgmyPhoneAction(type: type, fields: {'name': name, 'body': text}),
    ];
    actions = await ngmyResolvePhoneActionsByName(
      context: context,
      userEmail: userEmail,
      actions: actions,
      ngmyUsers: ngmyUsers,
    );
    if (actions.isEmpty) {
      return 'Could not find "$name" — add their phone number in Debate mode.';
    }
    final resolved = actions.first;
    if ((resolved.fields['phone'] ?? '').trim().isEmpty) {
      return 'Could not find a number for "$name" — add their phone number above.';
    }
  }

  if (!context.mounted) return null;
  final result = await ngmyRunPhoneAction(actions.first, context: context, skipConfirmation: true);
  return result ?? 'Could not open ${ngmyDebateChannelLabel(channel)}.';
}

/// Debate toolbar above the chat input — opponent name, phone, channel.
Widget ngmyDebateChatToolbar({
  required bool isDark,
  required TextEditingController opponentController,
  required TextEditingController opponentPhoneController,
  required String channel,
  required bool pasteMode,
  required ValueChanged<String> onChannelChanged,
  required VoidCallback onTogglePasteMode,
  required VoidCallback onAskQuestion,
  required Color accent,
  bool expanded = true,
  VoidCallback? onToggleExpanded,
}) {
  final fg = isDark ? Colors.white : const Color(0xFF111827);
  final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
  final bg = isDark ? const Color(0xFF1A1028).withValues(alpha: 0.92) : Colors.white.withValues(alpha: 0.95);
  final fieldFill = isDark ? const Color(0xFF0F111A) : const Color(0xFFF8FAFC);

  return Container(
    margin: const EdgeInsets.only(bottom: 8),
    padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
    decoration: BoxDecoration(
      color: bg,
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: accent.withValues(alpha: 0.35)),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        InkWell(
          onTap: onToggleExpanded,
          borderRadius: BorderRadius.circular(8),
          child: Row(
            children: [
              Icon(Icons.gavel_rounded, color: accent, size: 18),
              const SizedBox(width: 6),
              Expanded(
                child: Text('Debate mode', style: TextStyle(color: fg, fontWeight: FontWeight.w800, fontSize: 13)),
              ),
              if (onToggleExpanded != null)
                Icon(expanded ? Icons.expand_less_rounded : Icons.expand_more_rounded, color: muted, size: 22),
            ],
          ),
        ),
        if (expanded) ...[
          const SizedBox(height: 8),
          TextField(
            controller: opponentController,
            style: TextStyle(color: fg, fontSize: 13),
            textCapitalization: TextCapitalization.words,
            decoration: InputDecoration(
              isDense: true,
              labelText: 'Opponent name',
              labelStyle: TextStyle(color: muted, fontSize: 12),
              hintText: 'e.g. Ahmed, Sarah',
              hintStyle: TextStyle(color: muted.withValues(alpha: 0.7)),
              filled: true,
              fillColor: fieldFill,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
              contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            ),
          ),
          const SizedBox(height: 8),
          TextField(
            controller: opponentPhoneController,
            style: TextStyle(color: fg, fontSize: 13),
            keyboardType: TextInputType.phone,
            decoration: InputDecoration(
              isDense: true,
              labelText: 'Opponent phone (for iMessage / WhatsApp)',
              labelStyle: TextStyle(color: muted, fontSize: 12),
              hintText: '+1 555 123 4567',
              hintStyle: TextStyle(color: muted.withValues(alpha: 0.7)),
              filled: true,
              fillColor: fieldFill,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
              contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            ),
          ),
          const SizedBox(height: 8),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: [
              for (final ch in ['sms', 'whatsapp'])
                ChoiceChip(
                  label: Text(ngmyDebateChannelLabel(ch), style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600)),
                  selected: channel == ch,
                  selectedColor: accent.withValues(alpha: 0.22),
                  onSelected: (_) => onChannelChanged(ch),
                ),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: onTogglePasteMode,
                  icon: Icon(Icons.content_paste_rounded, size: 16, color: pasteMode ? accent : muted),
                  label: Text(pasteMode ? 'Pasting opponent…' : 'Paste opponent', style: TextStyle(fontSize: 11, color: pasteMode ? accent : fg)),
                  style: OutlinedButton.styleFrom(
                    side: BorderSide(color: pasteMode ? accent : muted.withValues(alpha: 0.4)),
                    padding: const EdgeInsets.symmetric(vertical: 8),
                  ),
                ),
              ),
              const SizedBox(width: 6),
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: onAskQuestion,
                  icon: Icon(Icons.help_outline_rounded, size: 16, color: accent),
                  label: Text('Ask question', style: TextStyle(fontSize: 11, color: fg)),
                  style: OutlinedButton.styleFrom(
                    side: BorderSide(color: accent.withValues(alpha: 0.45)),
                    padding: const EdgeInsets.symmetric(vertical: 8),
                  ),
                ),
              ),
            ],
          ),
        ],
      ],
    ),
  );
}

Widget _debateTapButton({
  required IconData icon,
  required String label,
  required Color accent,
  required VoidCallback onTap,
}) {
  return Material(
    color: accent.withValues(alpha: 0.18),
    borderRadius: BorderRadius.circular(22),
    child: InkWell(
      onTap: () {
        HapticFeedback.lightImpact();
        onTap();
      },
      borderRadius: BorderRadius.circular(22),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 16, color: accent),
            const SizedBox(width: 6),
            Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: accent)),
          ],
        ),
      ),
    ),
  );
}

Widget ngmyDebateReplyActions({
  required String replyText,
  required String opponentName,
  required String opponentPhone,
  required String channel,
  required Color accent,
  required Future<void> Function() onCopy,
  required Future<void> Function() onSend,
}) {
  final hasTarget = opponentName.trim().isNotEmpty || opponentPhone.trim().isNotEmpty;
  final canSend = hasTarget && (channel == 'sms' || channel == 'whatsapp');

  return Padding(
    padding: const EdgeInsets.only(top: 10),
    child: Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        _debateTapButton(
          icon: Icons.copy_rounded,
          label: 'Copy',
          accent: accent,
          onTap: () => unawaited(onCopy()),
        ),
        if (canSend)
          _debateTapButton(
            icon: Icons.send_rounded,
            label: 'Send via ${ngmyDebateChannelLabel(channel)}',
            accent: channel == 'whatsapp' ? const Color(0xFF25D366) : accent,
            onTap: () => unawaited(onSend()),
          )
        else if (channel == 'sms' || channel == 'whatsapp')
          Text(
            'Add opponent name or phone above to send',
            style: TextStyle(fontSize: 11, color: accent.withValues(alpha: 0.85), fontStyle: FontStyle.italic),
          ),
      ],
    ),
  );
}
