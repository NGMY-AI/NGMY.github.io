import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_advisor_browser_session.dart';
import 'ngmy_phone_integrations.dart';
import 'ngmy_phone_tool_intent.dart';

/// Prompt block appended to advisor AI context (browser + reactions).
String ngmyAdvisorWebAndReactionContext({required String advisorName}) {
  return '''
WEB & LINKS — You are $advisorName on NGMY Advisors. When they ask you to open a website, look something up online,
shop, read news, or use any web app, reply like a human first, then append:

[[NGMY_PHONE_ACTIONS]]
[{"type":"open_url","url":"https://example.com","label":"Short status like Viewing account area"}]
[[/NGMY_PHONE_ACTIONS]]

Use a real https URL. Optional "label" is shown under Browser in chat (keep it short).
For directions use maps; for NGMY features inside this app use open_tool (video_studio, phone_unlock, swahili_school, etc.) — same JSON block.
The site opens ONLY inside the small Browser port above the chat box (never the whole app). Drive that port with:

[[NGMY_BROWSER_CMD]]
[{"op":"click_text","text":"Demo"}]
[[/NGMY_BROWSER_CMD]]

Ops: navigate (url, optional label), back, forward, click_text, click_selector.
Use navigate to open/change pages; click_text when they say tap Demo or Sign in.
Do NOT spam reload or say you are "refreshing" — never reload the same page twice.
If the mini browser already has the site, tell the user what to tap next instead of reopening it.
HONESTY: You never type passwords, sign in, pay, or place trades — the user does those in the Browser window.
Never claim "logged in", "placed the trades", "bought it" or "done" for actions you did not see happen.

MESSAGE REACTIONS — React to THEIR last message like a real person (not every text). When they share good news, say something sweet,
agree to a plan, thank you, or deserve encouragement, append ONE emoji reaction on their message:

[[NGMY_REACT_USER]]❤️[[/NGMY_REACT_USER]]

Allowed: ❤️ 💕 🥰 👍 😂 🙏 🔥 ✨ — omit the block on bland or professional-only messages.
Do not write "I reacted with…" — use the tag silently.
''';
}

class NgmyAdvisorParsedReply {
  final String text;
  final List<NgmyPhoneAction> actions;
  final List<NgmyAdvisorBrowserCommand> browserCommands;
  final String reactionEmoji;
  final String browserUrl;
  final String browserLabel;

  const NgmyAdvisorParsedReply({
    required this.text,
    this.actions = const [],
    this.browserCommands = const [],
    this.reactionEmoji = '',
    this.browserUrl = '',
    this.browserLabel = '',
  });
}

final _reactTag = RegExp(
  r'\[\[NGMY_REACT_USER\]\]\s*([^\s\[\]]{1,8})\s*\[\[/NGMY_REACT_USER\]\]',
  multiLine: true,
);

final _browserCmdTag = RegExp(
  r'\[\[NGMY_BROWSER_CMD\]\]\s*([\s\S]*?)\s*\[\[/NGMY_BROWSER_CMD\]\]',
  multiLine: true,
);

List<NgmyAdvisorBrowserCommand> ngmyParseAdvisorBrowserCommands(String raw) {
  final out = <NgmyAdvisorBrowserCommand>[];
  final match = _browserCmdTag.firstMatch(raw);
  if (match == null) return out;
  try {
    final decoded = jsonDecode(match.group(1)!.trim());
    if (decoded is List) {
      for (final item in decoded) {
        if (item is Map) {
          final cmd = NgmyAdvisorBrowserCommand.fromJson(Map<String, dynamic>.from(item));
          if (cmd != null) out.add(cmd);
        }
      }
    } else if (decoded is Map) {
      final cmd = NgmyAdvisorBrowserCommand.fromJson(Map<String, dynamic>.from(decoded));
      if (cmd != null) out.add(cmd);
    }
  } catch (e) {
    debugPrint('[advisor] browser cmd parse: $e');
  }
  return out;
}

String ngmyStripAdvisorBrowserCommandTags(String raw) => raw.replaceAll(_browserCmdTag, '').trim();

const _allowedReactions = {'❤️', '💕', '🥰', '👍', '😂', '🙏', '🔥', '✨', '💖', '😊', '🎉'};

String _normalizeReaction(String raw) {
  final t = raw.trim();
  if (_allowedReactions.contains(t)) return t;
  if (t == 'heart' || t == 'love') return '❤️';
  if (t == 'thumbs' || t == 'thumbsup' || t == 'like') return '👍';
  return '';
}

/// Strip reaction + phone action blocks; infer browser card from first open_url/maps http action.
NgmyAdvisorParsedReply ngmyParseAdvisorAssistantReply(
  String raw, {
  required String userMessage,
}) {
  var text = raw.trim();
  var reaction = '';
  final browserCommands = ngmyParseAdvisorBrowserCommands(text);
  text = ngmyStripAdvisorBrowserCommandTags(text);

  final reactMatch = _reactTag.firstMatch(text);
  if (reactMatch != null) {
    reaction = _normalizeReaction(reactMatch.group(1) ?? '');
    text = text.replaceFirst(_reactTag, '').trim();
  }

  final parsed = ngmyParseHelperPhoneActions(text);
  text = parsed.text.trim();
  var actions = parsed.actions;

  if (actions.isEmpty) {
    actions = [
      ...ngmyInferOpenUrlActionsFromUserMessage(userMessage),
      ...ngmyInferOpenToolActionsFromUserMessage(userMessage),
    ];
  }

  if (reaction.isEmpty) {
    reaction = ngmyAdvisorPickReactionEmoji(userMessage: userMessage, aiReply: text);
  }

  String browserUrl = '';
  String browserLabel = '';
  for (final a in actions) {
    if (a.type == 'open_url') {
      browserUrl = _normalizeUrl(a.fields['url'] ?? '');
      browserLabel = (a.fields['label'] ?? a.fields['title'] ?? '').trim();
      break;
    }
    if (a.type == 'maps' && browserUrl.isEmpty) {
      final q = (a.fields['query'] ?? a.fields['address'] ?? '').trim();
      if (q.isNotEmpty) {
        browserUrl = 'https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent(q)}';
        browserLabel = (a.fields['label'] ?? 'Opening Maps').trim();
      }
    }
  }

  for (final cmd in browserCommands) {
    if ((cmd.op == 'navigate' || cmd.op == 'open') && browserUrl.isEmpty) {
      browserUrl = _normalizeUrl(cmd.url ?? '');
      browserLabel = (cmd.label ?? '').trim();
    }
  }

  return NgmyAdvisorParsedReply(
    text: text,
    actions: actions,
    browserCommands: browserCommands,
    reactionEmoji: reaction,
    browserUrl: browserUrl,
    browserLabel: browserLabel,
  );
}

List<NgmyPhoneAction> ngmyAdvisorPhoneActionsForChips(List<NgmyPhoneAction> actions) =>
    actions.where((a) => a.type != 'open_url' && a.type != 'maps').toList();

String _normalizeUrl(String url) {
  var u = url.trim();
  if (u.isEmpty) return '';
  if (!u.startsWith('http://') && !u.startsWith('https://')) u = 'https://$u';
  return u;
}

/// Heuristic when the model forgets the reaction tag.
String ngmyAdvisorPickReactionEmoji({
  required String userMessage,
  required String aiReply,
}) {
  final u = userMessage.toLowerCase();
  final a = aiReply.toLowerCase();
  if (u.isEmpty) return '';

  if (RegExp(r'\b(thank|thanks|appreciate|grateful|bless you|god bless)\b').hasMatch(u)) {
    return '🙏';
  }
  if (RegExp(r'\b(love you|miss you|marry|baby|babe|my love|❤)\b').hasMatch(u)) {
    return '❤️';
  }
  if (RegExp(r'\b(lol|lmao|haha|funny|😂)\b').hasMatch(u)) {
    return '😂';
  }
  if (RegExp(r"\b(yes|yeah|yep|sure|let's do|demo again|sounds good|deal|ok let's|i agree)\b").hasMatch(u)) {
    return '👍';
  }
  if (RegExp(r'\b(amazing|awesome|great job|proud|won|passed|got the job)\b').hasMatch(u)) {
    return '🔥';
  }
  if (RegExp(r'\b(pray|prayer|church|lord)\b').hasMatch(u)) {
    return '🙏';
  }
  // Advisor warmth mirrored back
  if (RegExp(r'\b(proud of you|so happy for you|congrats|congratulations)\b').hasMatch(a)) {
    return '🥰';
  }
  return '';
}

final _urlInText = RegExp(
  r'(https?://\S+|www\.\S+)',
  caseSensitive: false,
);

List<NgmyPhoneAction> ngmyInferOpenUrlActionsFromUserMessage(String userText) {
  final t = userText.trim();
  if (t.isEmpty) return const [];

  final match = _urlInText.firstMatch(t);
  if (match != null) {
    final url = _normalizeUrl(match.group(1)!);
    return [NgmyPhoneAction(type: 'open_url', fields: {'url': url, 'label': 'Opening link'})];
  }
  return const [];
}

bool ngmyUserMessageLooksLikeWebTask(String userText) {
  final lower = userText.toLowerCase();
  return RegExp(
    r'\b(open|website|browser|browse|sign in|log in|login|url|link|online|web page|internet)\b',
  ).hasMatch(lower);
}

List<NgmyPhoneAction> ngmyAdvisorPhoneActionsFromRow(Map<String, String> row) {
  final raw = row['phoneActions'];
  if (raw == null || raw.trim().isEmpty) return const [];
  try {
    final decoded = jsonDecode(raw);
    if (decoded is! List) return const [];
    final out = <NgmyPhoneAction>[];
    for (final item in decoded) {
      if (item is Map) {
        final action = NgmyPhoneAction.fromJson(Map<String, dynamic>.from(item));
        if (action != null) out.add(action);
      }
    }
    return out;
  } catch (e) {
    debugPrint('[advisor] phoneActions decode: $e');
    return const [];
  }
}

String ngmyAdvisorPhoneActionsToJson(List<NgmyPhoneAction> actions) {
  final list = actions
      .map((a) => {'type': a.type, ...a.fields})
      .toList();
  return jsonEncode(list);
}

String ngmyAdvisorBrowserHostLabel(String url) {
  try {
    final host = Uri.parse(url).host;
    if (host.isEmpty) return 'Website';
    return host.startsWith('www.') ? host.substring(4) : host;
  } catch (_) {
    return 'Website';
  }
}
