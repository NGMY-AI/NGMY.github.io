import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// In-chat coaching modes for pickup lines, witty comebacks, and reply help.
const kNgmyTextCoachModes = <String, String>{
  'pickup_line': 'Pickup line',
  'smart_mouth': 'Smart mouth',
  'reply_help': 'Reply',
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

const _ngmyTextCoachOutputFormat =
    'OUTPUT FORMAT (strict): Reply with ONLY the exact text they should send — nothing else. '
    'No explanations, no "here\'s what to say", no bullet labels, no coaching commentary, no "As an AI". '
    'If you give more than one option, put each line on its own line with no numbering or labels. '
    'Sound human — short, natural, copy-paste ready.\n';

String ngmyTextCoachModePromptBlock(String mode, {required String userText}) {
  final m = ngmyCommunicateNormalizeTextCoachMode(mode);
  final pasted = ngmyTextLooksLikePastedConversation(userText);
  final contextNote = pasted
      ? 'They pasted a real conversation — read every line. Your answer must fit ONLY what was said.\n'
      : 'Use the chat history below. Stay on their current topic.\n';

  switch (m) {
    case 'pickup_line':
      return 'MODE: PICKUP LINE\n'
          '$_ngmyTextCoachOutputFormat'
          '$contextNote'
          'Give smooth, clever, flirty openers or follow-ups that fit the conversation. '
          'If they are mid-chat, continue the bit naturally — reply to her/his last message, not a random new opener.\n';
    case 'smart_mouth':
      return 'MODE: SMART MOUTH\n'
          '$_ngmyTextCoachOutputFormat'
          '$contextNote'
          'Give clever, confident, funny comebacks tied to what the other person said — never random off-topic quotes.\n';
    default:
      return 'MODE: REPLY HELP\n'
          '$_ngmyTextCoachOutputFormat'
          '$contextNote'
          'Read who said what. Give the exact text they should send back — reply to the last message, do not start a new topic.\n';
  }
}

String ngmyTextCoachVisionInstruction(String text, {required bool hasPhoto, required String mode}) {
  if (!hasPhoto) return '';
  return 'SCREENSHOT: OCR every message bubble. Figure out who said what. '
      '${ngmyTextCoachModePromptBlock(mode, userText: text)}'
      'Base your answer ONLY on the screenshot plus their caption.\n';
}

/// Compact mode picker — sits inside the chat input row.
Widget ngmyTextCoachModeDropdown({
  required bool isDark,
  required String mode,
  required Color accent,
  required ValueChanged<String> onModeChanged,
}) {
  final fg = isDark ? Colors.white.withValues(alpha: 0.85) : const Color(0xFF374151);
  return SizedBox(
    width: 92,
    child: DropdownButtonHideUnderline(
      child: DropdownButton<String>(
        value: ngmyCommunicateNormalizeTextCoachMode(mode),
        isDense: true,
        isExpanded: true,
        icon: Icon(Icons.expand_more_rounded, size: 16, color: accent),
        dropdownColor: isDark ? const Color(0xFF1E1B2E) : Colors.white,
        borderRadius: BorderRadius.circular(10),
        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: fg),
        items: kNgmyTextCoachModes.entries
            .map(
              (e) => DropdownMenuItem<String>(
                value: e.key,
                child: Text(e.value, overflow: TextOverflow.ellipsis),
              ),
            )
            .toList(),
        onChanged: (v) {
          if (v != null) onModeChanged(v);
        },
      ),
    ),
  );
}
