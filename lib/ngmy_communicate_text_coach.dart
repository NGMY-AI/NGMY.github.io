import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// In-chat coaching modes for pickup lines, witty comebacks, and reply help.
const kNgmyTextCoachModes = <String, String>{
  'pickup_line': 'Pickup Lines',
  'smart_mouth': 'Smart Mouth',
  'reply_help': 'What Should I Reply?',
};

String ngmyCommunicateNormalizeTextCoachMode(String raw) {
  final m = raw.trim().toLowerCase();
  return kNgmyTextCoachModes.containsKey(m) ? m : 'reply_help';
}

bool ngmyCommunicateRoleIsTextCoach(String role) {
  switch (role.trim().toLowerCase()) {
    case 'pickup_line':
    case 'smart_mouth':
    case 'text_coach':
      return true;
    default:
      return false;
  }
}

bool ngmyCommunicateRoleAllowsTextCoachPhotos(String role) {
  switch (role.trim().toLowerCase()) {
    case 'pickup_line':
    case 'smart_mouth':
    case 'text_coach':
    case 'romantic':
    case 'friend':
      return true;
    default:
      return false;
  }
}

/// Default mode when opening a text-coach advisor.
String ngmyTextCoachDefaultModeForRole(String role) {
  switch (role.trim().toLowerCase()) {
    case 'pickup_line':
      return 'pickup_line';
    case 'smart_mouth':
      return 'smart_mouth';
    default:
      return 'reply_help';
  }
}

class NgmyTextCoachModeStore {
  static String _key(String email, String profileId) =>
      'ngmy_text_coach_mode_${email.toLowerCase().trim()}_$profileId';

  static Future<String> load(String email, String profileId, {required String defaultMode}) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key(email, profileId));
      if (raw == null || raw.isEmpty) return ngmyCommunicateNormalizeTextCoachMode(defaultMode);
      return ngmyCommunicateNormalizeTextCoachMode(raw);
    } catch (_) {
      return ngmyCommunicateNormalizeTextCoachMode(defaultMode);
    }
  }

  static Future<void> save(String email, String profileId, String mode) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_key(email, profileId), ngmyCommunicateNormalizeTextCoachMode(mode));
    } catch (_) {}
  }
}

bool ngmyTextLooksLikePastedConversation(String text) {
  final t = text.trim();
  if (t.length < 24) return false;
  final lines = t.split('\n').where((l) => l.trim().isNotEmpty).length;
  if (lines >= 2) return true;
  return RegExp(
    r'(^|\n)\s*(them|her|him|she|he|they|other|you|me)\s*[:>-]',
    caseSensitive: false,
  ).hasMatch(t);
}

String ngmyTextCoachModePromptBlock(String mode, {required String userText}) {
  final m = ngmyCommunicateNormalizeTextCoachMode(mode);
  final pasted = ngmyTextLooksLikePastedConversation(userText);
  final contextNote = pasted
      ? 'They pasted a REAL conversation — read every line. Your answer must fit ONLY what was said. '
          'Never change the subject or answer a random question that was not in the chat.\n'
      : 'Use the full chat history below. Stay on THEIR current topic — no random tangents.\n';

  const humanVoice =
      'VOICE (critical): Sound like a sharp human friend texting advice — not a robot, not an essay, not "As an AI". '
      'Short punchy lines. Natural slang when it fits. Confident energy. No bullet-point lecture unless they asked for options.\n';

  switch (m) {
    case 'pickup_line':
      return 'MODE: PICKUP LINE COACH\n'
          '$humanVoice'
          '$contextNote'
          'Your job: smooth, clever, flirty openers and follow-ups that fit the vibe of the conversation.\n'
          'EXAMPLES OF THE ENERGY (do NOT copy blindly — adapt to their situation):\n'
          '- "Do you have AirDrop?" → she says yes → "Can you put it on?" → she asks why → "I just want to share my feelings with you."\n'
          '- "Do you have an application?" → she asks for what → "Boyfriend."\n'
          'Give 1–3 lines they can actually send. If they need a follow-up for HER last message, write that follow-up — not a random new opener.\n'
          'If they are mid-conversation, continue the bit naturally — setup → her reply → your killer next line.\n';
    case 'smart_mouth':
      return 'MODE: SMART MOUTH / WITTY COMEBACK COACH\n'
          '$humanVoice'
          '$contextNote'
          'Your job: clever, confident, funny comebacks — sharp but not corny spam. Roast with charm when appropriate.\n'
          'EXAMPLES OF THE ENERGY (adapt to what they are actually dealing with):\n'
          '- "It\'s only two things I gotta do in this world: be cool, and die."\n'
          '- "God created the world. Everything else was made in China."\n'
          '- "I don\'t know why we give money to the country that hates us — they should hate us for free."\n'
          'The comeback must answer or riff on what the OTHER person said or the situation they described — never a random quote unrelated to the chat.\n'
          'Give lines they can copy-paste. One killer line often beats a paragraph.\n';
    default:
      return 'MODE: REPLY HELP — what should they text back?\n'
          '$humanVoice'
          '$contextNote'
          'Read who said what. Suggest 1–3 reply options that match the tone they want (flirty, funny, chill, firm).\n'
          'Explain in one short sentence WHY each reply works, then give the exact text to send.\n'
          'If they are stuck after her message, reply TO THAT MESSAGE — do not start a new topic.\n';
  }
}

String ngmyTextCoachVisionInstruction(String text, {required bool hasPhoto, required String mode}) {
  if (!hasPhoto) return '';
  return 'SCREENSHOT / PHOTO: Read the image carefully — OCR every message bubble, name, timestamp if visible. '
      'Figure out who is who in the text thread. '
      '${ngmyTextCoachModePromptBlock(mode, userText: text)}'
      'Base your coaching ONLY on what you see in the screenshot plus their caption. '
      'If the image is a chat, quote or paraphrase her/his last message before you suggest a reply.\n';
}

String ngmyTextCoachPasteHint(String mode) {
  switch (ngmyCommunicateNormalizeTextCoachMode(mode)) {
    case 'pickup_line':
      return 'Paste her message or describe the vibe — I\'ll give you a line…';
    case 'smart_mouth':
      return 'Paste what they said — I\'ll cook a comeback…';
    default:
      return 'Paste the conversation or screenshot — what should I reply?';
  }
}

Widget ngmyTextCoachChatToolbar({
  required bool isDark,
  required String mode,
  required Color accent,
  required ValueChanged<String> onModeChanged,
}) {
  return Padding(
    padding: const EdgeInsets.only(bottom: 8),
    child: SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: kNgmyTextCoachModes.entries.map((e) {
          final selected = mode == e.key;
          return Padding(
            padding: const EdgeInsets.only(right: 8),
            child: FilterChip(
              selected: selected,
              showCheckmark: false,
              label: Text(e.value, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: selected ? Colors.white : (isDark ? Colors.white70 : Colors.black87))),
              selectedColor: accent,
              backgroundColor: isDark ? Colors.white.withValues(alpha: 0.08) : Colors.black.withValues(alpha: 0.05),
              side: BorderSide(color: selected ? accent : (isDark ? Colors.white24 : Colors.black12)),
              onSelected: (_) => onModeChanged(e.key),
            ),
          );
        }).toList(),
      ),
    ),
  );
}
