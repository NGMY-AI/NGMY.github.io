import 'dart:math' as math;
import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_advisor_browser_session.dart';
import 'ngmy_ai_app_bridge.dart';
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
For directions use maps; for places inside the NGMY app use open_tool (see NGMY APP GUIDE) — same JSON block.
The site opens ONLY inside the small Browser port above the chat box (never the whole app). Drive that port with:

[[NGMY_BROWSER_CMD]]
[{"op":"click_text","text":"Demo"}]
[[/NGMY_BROWSER_CMD]]

Ops: navigate (url, optional label), back, forward, click_text, click_selector.
Use navigate to open/change pages; click_text when they say tap Demo or Sign in.
Do NOT spam reload or say you are "refreshing" — never reload the same page twice.
If the mini browser already has the site, tell the user what to tap next instead of reopening it.
NEVER PRETEND TO BROWSE: In normal chat you are NOT using a browser. Never say you are "loading", "searching",
"displaying", "opening" or "showing" anything on a website, and never say "you should see it in the browser" —
only the app's live Browser does that, and it reports its own progress. If they want something done on a website,
ask them to say the full task in one message (e.g. "search McDonald's jobs in Macon on mcdonalds.com").
HONESTY: You never type passwords, sign in, pay, or place trades — the user does those in the Browser window.
Never claim "logged in", "placed the trades", "bought it" or "done" for actions you did not see happen.

MESSAGE REACTIONS — React to THEIR last message like a real person (not every text). When they share good news, say something sweet,
agree to a plan, thank you, or deserve encouragement, append ONE emoji reaction on their message:

[[NGMY_REACT_USER]]👍[[/NGMY_REACT_USER]]

Pick the emoji that FITS the message: 👍 agreeing/plans/ok, 😂 jokes, 😮 surprises, 😢 sad news, 🙏 thanks or prayer, 🎉 wins and celebrations, 🔥 hype, 💯 facts, ❤️ ONLY for real affection. Omit the block on bland or professional-only messages.
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

const _allowedReactions = {'❤️', '💕', '🥰', '👍', '😂', '🙏', '🔥', '✨', '💖', '😊', '🎉', '😢', '😮', '💯', '🫂'};

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

  // The emoji has to fit the message: the reading of their words wins, and the model's
  // own heart is dropped when the message was not affectionate (no hearts on "ok").
  final picked = ngmyAdvisorPickReactionEmoji(userMessage: userMessage, aiReply: text);
  if (picked.isNotEmpty) {
    reaction = picked;
  } else if (const {'❤️', '💕', '🥰', '💖'}.contains(reaction)) {
    reaction = '';
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
    actions.where((a) => a.type != 'open_url' && a.type != 'maps' && a.type != 'app_lookup').toList();

/// Places the advisor opened on its own because the user asked to be taken there.
bool ngmyAdvisorActionGoesNow(NgmyPhoneAction a) =>
    a.type == 'open_tool' && const {'true', '1', 'yes'}.contains((a.fields['go'] ?? '').trim().toLowerCase());

/// Prompt block: the advisor can take the user anywhere in NGMY and look up real app data.
String ngmyAdvisorAppNavigatorContext() {
  final places = NgmyAiAppBridge.catalogForPrompt();
  if (places.isEmpty) return '';
  final lookups = NgmyAiAppBridge.lookupCatalogForPrompt();
  return '''
NGMY APP GUIDE — You can take the user anywhere in the NGMY app and look things up for them. You are their guide:
when someone doesn't know how to do something in the app, take them to the right place and tell them the next tap.

Places (use the id exactly):
$places

To take them somewhere, add an open_tool action. Add "go":true when they asked you to take/open/bring them there
right now — the app opens it for them. Leave "go" out to just offer a button. Always give a short "label":

[[NGMY_PHONE_ACTIONS]]
[{"type":"open_tool","tool":"civic_registry","go":true,"label":"Open Civic Registry"}]
[[/NGMY_PHONE_ACTIONS]]

${lookups.isEmpty ? '' : '''Lookups — when they ask for information that lives in the app, ask the app instead of guessing:
$lookups

[[NGMY_PHONE_ACTIONS]]
[{"type":"app_lookup","kind":"civic_member","query":"Jane Doe"}]
[[/NGMY_PHONE_ACTIONS]]

The app answers right after your message with the real record and buttons to go there. So in YOUR message only say a
short line like "Let me check Civic Registry for Jane." NEVER invent names, IDs, phone numbers, balances or any details —
only the app's answer has them. If they want to see the record after, use open_tool civic_member with the same query.
'''}Only use the places and lookups listed here. You can't edit or delete records, approve anything, or move money — say so
and take them to the right screen so they can do it themselves.
''';
}

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
  final u = userMessage.toLowerCase().trim();
  final a = aiReply.toLowerCase();
  if (u.isEmpty) return '';
  bool has(String pattern) => RegExp(pattern, caseSensitive: false).hasMatch(u);

  // Bad news first — never answer sadness with a heart or a thumbs up.
  if (has(r"\b(passed away|died|funeral|lost my (job|mom|dad|mother|father|baby|friend)|got fired|laid off|broke up|heartbroken|depressed|so sad|i'?m sad|crying|in the hospital|diagnosed|miscarriage|divorce)\b")) {
    return '😢';
  }
  // Upset or angry — a hug, not a thumbs up.
  if (has(r"\b(so mad|i'?m mad|angry|pissed( off)?|furious|frustrated|annoyed|fed up|i hate (this|it|my)|sick of|stressed( out)?|overwhelmed|can'?t take (it|this))\b")) {
    return '🫂';
  }
  if (has(r'\b(thank|thanks|thx|appreciate|grateful|bless you|god bless)\b')) return '🙏';
  if (has(r'\b(pray for|praying|prayer|amen|church|lord|jesus)\b')) return '🙏';
  if (has(r'(\b(lol|lmao|lmfao|haha+|hehe|rofl|funny|hilarious|joke)\b|😂|🤣)')) return '😂';
  if (has(r'\b(got the job|hired|promoted|promotion|passed|graduated|won|i did it|we did it|closed the deal|paid off|bought (a|my) (house|car))\b')) return '🎉';
  if (has(r'\b(birthday|anniversary|engaged|wedding|congrats|new baby)\b')) return '🎉';
  if (has(r'\b(wow|no way|omg|really\?|seriously\?|crazy|unbelievable|shocked)\b')) return '😮';
  if (has(r'\b(amazing|awesome|let'"'"'?s go|killed it|nailed it|proud of myself|on fire|crushed it)\b')) return '🔥';
  // Real affection only gets a heart.
  if (has(r"(\b(i love you|love you|luv you|miss you|marry me|my love|babe|baby|sweetheart|you'?re (so )?(sweet|cute|beautiful|handsome))\b|❤|💕|😘|🥰)")) {
    return '❤️';
  }
  if (has(r"\b(yes|yeah|yep|yup|sure|ok|okay|k|deal|done|got it|sounds good|i agree|agreed|will do|on it|perfect|cool|bet|alright|let'?s do it|i'?ll do (it|that)|i understand|makes sense)\b")) {
    return '👍';
  }
  if (has(r'\b(good morning|good night|gm|gn)\b')) return '😊';
  if (has(r'\b(exactly|facts|true|so true|for real|100)\b')) return '💯';
  // The advisor's own warmth mirrored back.
  if (RegExp(r'\b(proud of you|so happy for you|congrats|congratulations)\b').hasMatch(a)) return '🥰';
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

/// How likely a real person is to react to this kind of message (0–1). Big feelings
/// (laughing, sad, upset, a win, a surprise, love) usually get one; thanks or "ok" only sometimes.
double ngmyAdvisorReactionChance(String base) => switch (base) {
      '😂' || '😢' || '🫂' || '🎉' || '😮' || '❤️' => 0.8,
      '🔥' || '💯' || '🥰' => 0.5,
      '🙏' => 0.35,
      _ => 0.22,
    };

/// A natural variation of the reaction, so it isn't the same emoji every time.
String ngmyAdvisorVaryReaction(String base, math.Random r, {required bool dating, String avoid = ''}) {
  final options = switch (base) {
    '🙏' => dating ? ['🙏', '🥰', '❤️'] : ['🙏', '😊', '🫶'],
    '😂' => ['😂', '🤣', '😆'],
    '❤️' => dating ? ['❤️', '🥰', '😘', '💕'] : ['🥰', '😊', '❤️'],
    '👍' => ['👍', '👌', '💪'],
    '🎉' => ['🎉', '🥳', '🙌'],
    '😢' => ['😢', '🥺', '💔'],
    '🫂' => ['🫂', '🥺', '😔'],
    '😮' => ['😮', '😳', '🤯'],
    '🔥' => ['🔥', '💪', '🙌'],
    '💯' => ['💯', '🙌'],
    '😊' => ['😊', '☀️'],
    _ => [base],
  };
  final pool = options.where((e) => e != avoid).toList();
  final list = pool.isEmpty ? options : pool;
  return list[r.nextInt(list.length)];
}
