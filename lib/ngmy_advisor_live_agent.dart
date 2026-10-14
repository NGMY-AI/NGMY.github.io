// NGMY Advisors — Live Agent.
// The advisor carries out a task in a REAL cloud browser (Browser Use Cloud) — clicking,
// typing, scrolling — while the user watches it live inside the chat and can tap in
// (e.g. to log in). Money actions are never completed by the agent (server-side rules).

import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_advisor_live_view.dart';
import 'ngmy_edge_invoke.dart';
import 'package:url_launcher/url_launcher.dart';

// ── Intent ─────────────────────────────────────────────────────────────────

final RegExp _agentUrl = RegExp(r'https?://[^\s<>"]+', caseSensitive: false);
final RegExp _agentDomain = RegExp(
  r'\b((?:[a-z0-9-]+\.)+(?:com|org|net|io|co|ai|app|dev|gov|edu|tv|me|info|biz|us|uk|ca|news|shop|store|xyz|tech))(/[^\s<>"]*)?\b',
  caseSensitive: false,
);
final RegExp _agentAction = RegExp(
  r"\b(click|tap|press|log ?in|sign ?in|sign up|register|fill( it| out| in)?|type|scroll|select|choose|"
  r"navigate|go to (my|the|their)|open (my|the) (profile|account|settings|dashboard|balance|wallet|cart|orders|inbox|history)|"
  r"check (my|the|their) (balance|account|profile|orders|wallet|history|trades|inbox|status)|"
  r"book|reserve|add to (the )?cart|search (for|on)|find (it|that|this)? ?on (the|this|that|their) (site|page|website)|"
  r"download|compare prices|subscribe|apply|application|enroll|admissions?|"
  r"open (up )?(the |their |my |a )?[\w .&'-]{1,40}(website|site|web ?page|portal|app)|"
  r"switch to|turn (on|off)|do (it|that|this) (for me|now)|for me in the (browser|site|website))\b",
  caseSensitive: false,
);
/// Requests that are clearly online tasks even without the word "website".
final RegExp _agentSelfContained = RegExp(
  r"\b(apply|application|enroll|admissions?|register for|sign up for|book (a|an|my)|order (a|an|my|some))\b"
  // (A car VIN is answered straight from the government records in chat — no browser needed.)
  r"|\b(open (it |that |this )?live|live browser|use (the|your) (live )?browser|search (it|this|that) (out|up)|look (it|this|that) up)\b",
  caseSensitive: false,
);
/// "Find me information about X" style requests — a lookup the live browser can do.
final RegExp _agentLookup = RegExp(
  r"\b(look (it |this |that )?up|find out|search (it|this|that) (out|up)|(all )?(the )?info(rmation)? (about|on|for)|"
  r"details (about|on|for)|history (of|for|on)|tell me (everything|all) about|open (it |that |this )?live|"
  r"live browser|use (the|your) (live )?browser)\b",
  caseSensitive: false,
);
final RegExp _agentWebContext = RegExp(
  r'\b(site|website|web ?page|page|browser|online|app|account|profile|dashboard|tab)\b',
  caseSensitive: false,
);
final RegExp _agentContinue = RegExp(
  r"^\s*(ok(ay)?[,!. ]*)?(continue|keep going|go ahead|go on|carry on|resume|i('?m| am) (logged|signed) in|i (logged|signed) in|done|finished|ready|next|try again|retry|do it( again)?|refresh( the page| it)?|reload( the page| it)?)\b"
  r"|\b(you('re| are)? not (continuing|doing (it|anything)|working)|i don'?t see (it|anything|them|the (list|page|results))|nothing (is )?(happening|showing))\b",
  caseSensitive: false,
);

/// When the user asks the advisor to DO something on a website.
/// [currentUrl] = page already open in the chat browser; [hasLiveSession] = a live browser exists.
({String? url, bool continuing})? ngmyAdvisorAgentTaskIntent(
  String text, {
  String currentUrl = '',
  bool hasLiveSession = false,
}) {
  final t = text.trim();
  if (t.isEmpty) return null;
  if (hasLiveSession && _agentContinue.hasMatch(t)) return (url: null, continuing: true);
  final isLookup = _agentLookup.hasMatch(t) && _agentSelfContained.hasMatch(t);
  if (!_agentAction.hasMatch(t) && !isLookup) return null;
  final full = _agentUrl.firstMatch(t)?.group(0)?.replaceAll(RegExp(r'[).,!?]+$'), '');
  final bare = _agentDomain.firstMatch(t)?.group(0);
  final url = full ?? (bare != null && !bare.contains('@') ? 'https://$bare' : null);
  final webContext = url != null ||
      currentUrl.isNotEmpty ||
      hasLiveSession ||
      _agentWebContext.hasMatch(t) ||
      _agentSelfContained.hasMatch(t);
  if (!webContext) return null;
  return (url: url, continuing: false);
}

/// Thanks, love, laughs, greetings, "ok", emojis… — conversation, never a browser job.
bool ngmyUserMessageIsChitChat(String text) {
  final t = text.trim().toLowerCase();
  if (t.isEmpty) return true;
  // Only emojis / punctuation.
  if (!RegExp(r'[a-z0-9]').hasMatch(t)) return true;
  if (t.length > 80) return false;
  return RegExp(
    r"^(ok(ay)?|k|kk|cool|nice|great|awesome|perfect|alright|bet|sure|yes|yeah|yep|no|nope|nah|wow|omg|lol|lmao|haha+|hehe|"
    r"thanks?( you)?|thank u|ty|thx|appreciate (it|you)|god bless( you)?|bless you|love (you|u|it)|i love (you|u|it)|miss (you|u)|"
    r"good (morning|night|afternoon|evening)|gm|gn|hi+|hey+|hello|bye|see (you|ya)|later|talk (to you )?later|"
    r"you'?re (the best|amazing|sweet|so sweet|funny|beautiful|cute)|that'?s (it|all|good|great|nice|cool|funny|crazy)|"
    r"no problem|np|my pleasure|how are you|wyd|what'?s up|sup)\b"
    r"[\w\s,.!?'💕❤️😘🥰😂🤣🙏😊👍]*$",
  ).hasMatch(t);
}

/// "Never mind" — drop the web task they were describing.
bool ngmyUserCancelsWebTask(String text) => RegExp(
      r"\b(never ?mind|nvm|forget (it|that|about it)|cancel( it| that)?|don'?t (do it|worry about it)|stop it|not now|leave it)\b",
      caseSensitive: false,
    ).hasMatch(text);

/// Asks the AI whether a browser task is clear enough to start, or what to ask first.
/// [request] = everything they said about the task so far. Returns
/// (ready, ask = what to text them if not ready, task = full instruction if ready).
String ngmyAdvisorWebTaskPlanPrompt({
  required String advisorName,
  required String request,
  required String recentChat,
}) =>
    'You are $advisorName, an advisor in the NGMY app who can do tasks for people in a live web browser they watch.\n'
    'Decide if you should open the browser NOW for this, or ask questions first.\n\n'
    'Recent chat (oldest first):\n$recentChat\n\n'
    'What they want done (everything they said about it):\n$request\n\n'
    'RULES:\n'
    '- Work like a helpful job/booking assistant, in this order:\n'
    '  1. FIRST QUESTION (one friendly message): ask for everything missing among WHERE (city or area) and WHICH ROLE/ITEM. '
    'Give the usual choices as options, e.g. for KFC: ["Team member", "Cook", "Cashier", "Shift lead"]; for a store: its common roles. '
    'Example: "I can help with that. Two quick things so I pull up the right openings: 1. Which area — are you in Macon, or somewhere else? '
    '2. What role — team member, cook, cashier, or shift lead?" (Only ask what is still unknown.)\n'
    '  2. SEARCH: once you know where and what, set ready=true with a task like: "Find open <role> jobs at <company> in <place> on the '
    'company\'s official careers site. Open each listing to confirm it is live and get its direct apply link. If there is none in <place>, '
    'find the nearest real one in a nearby town and say how far it is. Do not apply yet — finish with the openings (and the nearest one) as options." '
    'If only the place is known ("find me a job in Macon GA"), research who is hiring there and list them as options.\n'
    '  3. BEFORE APPLYING: when they pick an opening to apply for, first collect in ONE message (bullet list) what applications ask and '
    'they have not given yet: full legal name, phone number, email, home address, age (or confirm 18+), and the days/hours they can work. '
    'Ask whether they already have an account on that site ONLY if that site needs one.\n'
    '  4. APPLY: when you have those details, set ready=true with a task that opens the apply link and fills the application with every '
    'detail they gave, pausing to ask them anything else the form needs.\n'
    '- Clear requests that already say what and where ("apply for the cashier job at the Burger King on Pio Nono Ave", '
    '"check flights to Miami on Delta") skip to the matching step.\n'
    '- Never ask for passwords, Social Security, card or bank numbers — they type those themselves in the browser.\n'
    '- If it is ready, ask nothing.\n'
    '- If what they said is not really a web task at all (just chatting, thanking, a feeling), set "web" to false.\n\n'
    'Answer with JSON only, no markdown:\n'
    '{"web": true, "ready": true or false, "ask": "your text to them if not ready", '
    '"options": ["if your question has clear choices — e.g. the real job positions that place hires, shifts, yes/no — list 2-6 short ones here (they become buttons), else []"], '
    '"task": "if ready: ONE complete instruction for the browser with every detail they gave (names, position, place, dates)", '
    '"url": "the website to start on if you know it, else empty"}';

/// A page that never loaded because the connection was refused — worth retrying on a
/// direct connection (not a real "site is down").
bool ngmyAgentTextShowsNetworkBlock(String text) => RegExp(
      r"ERR_TUNNEL|ERR_PROXY|NETWORK_BLOCKED|ERR_CONNECTION_(RESET|REFUSED|CLOSED|TIMED_OUT|FAILED)|ERR_TIMED_OUT|"
      r"site can[’']?t be reached|couldn[’']?t (load|reach|open) the (site|page|website)|wouldn[’']?t load",
      caseSensitive: false,
    ).hasMatch(text);

/// Could this be something to do online (find a job, look something up, book, buy…)?
/// Broad on purpose — the planner then decides for real (and says "not a web task" if not).
bool ngmyMessageMightBeWebTask(String text) {
  final t = text.trim();
  if (t.length < 6 || ngmyUserMessageIsChitChat(t)) return false;
  return RegExp(
    r"\b(jobs?|hiring|careers?|work at|position|apply|application|find (me )?(a |an |the |some )?|search|look (for|up|into)|"
    r"check|book|reserve|order|buy|purchase|price|cheapest|compare|near me|sign up|register|enroll|schedule|appointment|"
    r"tickets?|flights?|hotels?|apartments?|rent|for sale|listings?|websites?|site|online|download|get me|show me|where can i)\b",
    caseSensitive: false,
  ).hasMatch(t);
}

/// The advisor's chat reply claims it is browsing / searching right now ("keep an eye on the
/// browser", "I'm searching for that now") — only true if a browser task is actually running.
bool ngmyAdvisorReplyClaimsBrowsing(String reply) => RegExp(
      r"(keep an eye on|watch|check) (the|my) (browser|screen)|in the browser below|"
      r"\bi'?m (now )?(searching|looking|putting|typing|checking|pulling up|opening|browsing|heading to|going to)\b.{0,60}\b(now|site|website|browser|page|careers|search)\b|"
      r"\b(searching|looking) (for )?(that|it|those|them) (up )?now\b",
      caseSensitive: false,
    ).hasMatch(reply);

// ── Run controller ─────────────────────────────────────────────────────────

enum NgmyAgentStartResult { started, notConfigured, failed }

class NgmyAdvisorAgentStep {
  final int id;
  final String text;
  const NgmyAdvisorAgentStep(this.id, this.text);
}

/// One live browser per advisor chat. Survives across tasks so logins carry over.
class NgmyAdvisorAgentRun extends ChangeNotifier {
  String? runId;
  String? sessionId;
  String liveUrl = '';
  String pageUrl = '';
  String status = '';
  String task = '';
  String? result;
  /// The agent's answer as sections (title / summary / sections / notes / sources), when it gave one.
  Map<String, dynamic>? structured;
  String? error;
  String startError = '';
  bool visible = false;
  bool expanded = false;
  /// Full-screen viewer is open — the small panel hides its view (one connection at a time).
  bool fullscreen = false;
  final List<NgmyAdvisorAgentStep> steps = [];
  int _after = 0;
  // Keep ONE live connection per run — swapping the URL mid-run made the view reconnect.
  bool _liveUrlLockedForRun = false;
  Timer? _poll;
  bool _polling = false;
  bool _disposed = false;
  /// Bumped to rebuild the live view (fresh connection) — after returning to the app, or Reconnect.
  int viewNonce = 0;
  /// The cloud browser was left idle after a task and shuts itself down — show a clear message
  /// instead of a dead "waiting for the browser to connect" view.
  bool browserClosed = false;
  Timer? _idleTimer;

  /// Called once when a task finishes (completed / failed / cancelled).
  void Function(NgmyAdvisorAgentRun run)? onFinished;

  /// Fresh connection to the same live browser.
  void reconnect() {
    if (liveUrl.isEmpty || browserClosed) return;
    viewNonce++;
    _notify();
  }

  /// When the last task ended — replies soon after go back to that task.
  DateTime? finishedAt;

  /// True for 30 minutes after a task ended: the user's short replies (a number, an email, a code,
  /// "yes") are answers for that task, not normal chat.
  bool get recentlyFinished {
    final f = finishedAt;
    return f != null && task.isNotEmpty && DateTime.now().difference(f) < const Duration(minutes: 30);
  }

  void _armIdleClose() {
    finishedAt = DateTime.now();
    _idleTimer?.cancel();
    // Keep the live view up for a good while — 75 s was far too short.
    _idleTimer = Timer(const Duration(minutes: 10), () {
      if (running || _disposed) return;
      browserClosed = true;
      // Keep the session id: the next task continues in the SAME browser if it's still up
      // (the server only opens a new, paid browser if this one has really ended).
      liveUrl = '';
      _notify();
    });
  }

  /// Short summary of the last result: title, notes and each source link.
  String _lastFindings() {
    final st = structured;
    final buf = StringBuffer();
    if (st != null) {
      if ('${st['title'] ?? ''}'.isNotEmpty) buf.writeln('${st['title']}: ${st['summary'] ?? ''}');
      for (final s in (st['sources'] is List ? st['sources'] as List : const [])) {
        if (s is Map && '${s['url'] ?? ''}'.isNotEmpty) buf.writeln('- ${s['name'] ?? ''}: ${s['url']}');
      }
      for (final n in (st['notes'] is List ? st['notes'] as List : const [])) {
        buf.writeln('note: $n');
      }
    } else if ((result ?? '').trim().isNotEmpty) {
      buf.writeln(result!.trim());
    }
    final q = '${structured?['question'] ?? ''}'.trim();
    if (q.isNotEmpty) buf.writeln('The form was asking: $q');
    if (pageUrl.isNotEmpty) buf.writeln('Last page open: $pageUrl');
    final s = buf.toString().trim();
    return s.length > 2400 ? s.substring(0, 2400) : s;
  }

  /// The form asked something only the user can answer — their next message is that answer.
  String get pendingQuestion => running ? '' : '${structured?['question'] ?? ''}'.trim();
  bool get awaitingAnswer => pendingQuestion.isNotEmpty && recentlyFinished;

  bool _retriedDirect = false;
  String? _lastStartUrl;
  List<String> _lastRecent = const [];

  /// The page never loaded because the connection was refused (proxy tunnel failure etc.).
  bool get _networkBlocked {
    final all = [result ?? '', error ?? '', structured == null ? '' : '$structured', ...steps.map((s) => s.text)].join('\n');
    return ngmyAgentTextShowsNetworkBlock(all);
  }

  bool get running => status == 'queued' || status == 'dispatching' || status == 'running' || status == 'starting';
  bool get hasSession => (sessionId ?? '').isNotEmpty;
  String get latestStep => steps.isEmpty ? '' : steps.last.text;

  static bool? _configuredCache;

  /// Is the live browser set up on the server (BROWSER_USE_API_KEY)?
  static Future<bool> configured() async {
    if (_configuredCache != null) return _configuredCache!;
    final res = await ngmyEdgeInvoke({'action': 'agentStatus'});
    final ok = res?['configured'] == true;
    if (res != null && res['ok'] == true) _configuredCache = ok;
    return ok;
  }

  Future<NgmyAgentStartResult> start({
    required String task,
    String? startUrl,
    bool continueSession = true,
    List<String> recentUserMessages = const [],
    /// Open a fresh browser without the managed proxy (after a site refused the proxy).
    bool direct = false,
    bool isRetry = false,
  }) async {
    if (running) await stop();
    if (!isRetry) _retriedDirect = false;
    _lastStartUrl = startUrl;
    _lastRecent = recentUserMessages;
    // A follow-up in the same browser needs the earlier task as context.
    final prevTask = continueSession && hasSession ? this.task : '';
    // What it found last time (titles + links), so a follow-up goes straight there.
    final prevResult = continueSession ? _lastFindings() : '';
    _liveUrlLockedForRun = false;
    browserClosed = false;
    _idleTimer?.cancel();
    this.task = task;
    status = 'starting';
    result = null;
    structured = null;
    error = null;
    startError = '';
    steps.clear();
    _after = 0;
    visible = true;
    _notify();

    final res = await ngmyEdgeInvoke(
      {
        'action': 'agentStart',
        'task': task,
        if ((startUrl ?? '').isNotEmpty) 'startUrl': startUrl,
        if (continueSession && hasSession) 'sessionId': sessionId,
        if (prevTask.isNotEmpty) 'prevTask': prevTask,
        if (prevResult.isNotEmpty) 'prevResult': prevResult,
        if (recentUserMessages.isNotEmpty) 'recentUserMessages': recentUserMessages,
        if (direct) 'network': 'direct',
      },
      timeout: const Duration(seconds: 40),
    );
    if (res?['code'] == 'not_configured') {
      _configuredCache = false;
      status = '';
      visible = false;
      _notify();
      return NgmyAgentStartResult.notConfigured;
    }
    if (res == null || res['ok'] != true) {
      status = 'failed';
      startError = (res?['error'] ?? 'Could not start the live browser.').toString();
      _notify();
      return NgmyAgentStartResult.failed;
    }
    runId = res['runId']?.toString();
    final sid = (res['sessionId'] ?? '').toString();
    if (sid.isNotEmpty) {
      if (sid != sessionId) liveUrl = '';
      sessionId = sid;
    }
    status = (res['status'] ?? 'queued').toString();
    _notify();
    _schedulePoll(const Duration(milliseconds: 1500));
    return NgmyAgentStartResult.started;
  }

  /// Pick up a task that was still running when the chat was closed.
  void resume({required String runId, String? sessionId, required String task}) {
    this.runId = runId;
    if ((sessionId ?? '').isNotEmpty) this.sessionId = sessionId;
    this.task = task;
    status = 'running';
    result = null;
    structured = null;
    error = null;
    startError = '';
    steps.clear();
    _after = 0;
    _liveUrlLockedForRun = false;
    browserClosed = false;
    _idleTimer?.cancel();
    visible = true;
    _notify();
    _schedulePoll(const Duration(milliseconds: 600));
  }

  void _schedulePoll(Duration after) {
    _poll?.cancel();
    if (_disposed) return;
    _poll = Timer(after, _pollOnce);
  }

  Future<void> _pollOnce() async {
    final id = runId;
    if (_polling || id == null || _disposed) return;
    _polling = true;
    try {
      final res = await ngmyEdgeInvoke({'action': 'agentPoll', 'runId': id, 'after': _after});
      if (_disposed || id != runId) return;
      if (res != null && res['ok'] == true) {
        final lv = (res['liveUrl'] ?? '').toString();
        if (lv.isNotEmpty && (liveUrl.isEmpty || !_liveUrlLockedForRun)) {
          if (lv != liveUrl) liveUrl = lv;
          _liveUrlLockedForRun = true;
        }
        final pu = (res['pageUrl'] ?? '').toString();
        if (pu.isNotEmpty) pageUrl = pu;
        final raw = res['steps'];
        if (raw is List) {
          for (final s in raw) {
            if (s is! Map) continue;
            final text = (s['text'] ?? '').toString().trim();
            final sid = int.tryParse('${s['id']}') ?? 0;
            if (text.isEmpty || steps.any((e) => e.id == sid && sid != 0)) continue;
            if (steps.isNotEmpty && steps.last.text == text) continue;
            steps.add(NgmyAdvisorAgentStep(sid, text));
          }
          if (steps.length > 60) steps.removeRange(0, steps.length - 60);
        }
        final next = int.tryParse('${res['nextAfter']}');
        if (next != null && next > _after) _after = next;
        status = (res['status'] ?? status).toString();
        result = res['result']?.toString();
        final st = res['structured'];
        if (st is Map) structured = Map<String, dynamic>.from(st);
        error = res['error']?.toString();
        _notify();
      }
      if (running) {
        _schedulePoll(const Duration(milliseconds: 2500));
      } else if (!_retriedDirect && _networkBlocked) {
        // The site refused the browser's connection — reopen it on a direct connection and
        // do the same task again, instead of giving up.
        _retriedDirect = true;
        final again = task;
        steps.add(const NgmyAdvisorAgentStep(0, 'That site blocked my connection — reconnecting another way…'));
        _notify();
        unawaited(start(task: again, startUrl: _lastStartUrl, continueSession: false, recentUserMessages: _lastRecent, direct: true, isRetry: true));
      } else {
        _armIdleClose();
        onFinished?.call(this);
      }
    } catch (e) {
      debugPrint('[advisor-agent] poll: $e');
      if (running) _schedulePoll(const Duration(seconds: 4));
    } finally {
      _polling = false;
    }
  }

  Future<void> stop() async {
    final id = runId;
    _poll?.cancel();
    if (id == null) return;
    status = 'cancelled';
    _armIdleClose();
    _notify();
    await ngmyEdgeInvoke({'action': 'agentStop', 'runId': id});
  }

  void hide() {
    visible = false;
    expanded = false;
    _notify();
  }

  void show() {
    if (hasSession || running) {
      visible = true;
      _notify();
    }
  }

  void toggleExpanded() {
    expanded = !expanded;
    _notify();
  }

  void setFullscreen(bool v) {
    fullscreen = v;
    _notify();
  }

  void _notify() {
    if (!_disposed) notifyListeners();
  }

  @override
  void dispose() {
    _disposed = true;
    _poll?.cancel();
    _idleTimer?.cancel();
    super.dispose();
  }
}

/// Prompt block for the advisor's reply after the live task ends.
String ngmyAdvisorAgentResultPromptBlock(NgmyAdvisorAgentRun run) {
  final recent = run.steps.length <= 10 ? run.steps : run.steps.sublist(run.steps.length - 10);
  final buf = StringBuffer()
    ..writeln('LIVE BROWSER TASK — YOU just did this yourself in your live browser while they watched.')
    ..writeln('Task they gave you: ${run.task}')
    ..writeln('Outcome: ${run.status}${run.error != null && run.error!.isNotEmpty ? ' (error: ${run.error})' : ''}');
  if ((run.result ?? '').trim().isNotEmpty) buf.writeln('What you found:\n${run.result!.trim()}');
  if (recent.isNotEmpty) buf.writeln('Steps you took: ${recent.map((s) => s.text).join(' → ')}');
  if (run.structured != null) {
    buf.writeln('The full details are shown to them right below your message in a neat card with sections. '
        'So write ONLY 1–2 short friendly sentences: the headline answer, and anything that needs them '
        '(e.g. a site blocked you). Do NOT list the numbers again.');
  } else {
    buf.writeln('Tell them what you did and found. Put each fact on its own line like "Taxes 2025: \$1,234" — '
        'short lines, no long paragraph.');
  }
  final question = '${run.structured?['question'] ?? ''}'.trim();
  if (question.isNotEmpty) {
    buf.writeln('You paused the application because it asks: "$question". Ask them exactly that in ONE short line, like '
        '"Quick one from the application — $question" (the choices appear as buttons). Nothing else.');
    return buf.toString();
  }
  final options = run.structured?['options'];
  if (options is List && options.isNotEmpty) {
    buf.writeln('You found these choices for them: ${options.join(', ')}. They appear as buttons under your message — '
        'say in one short line what you found and ask which one they want (do not list them all again).');
  }
  buf.writeln('NEVER say a job, item or appointment "is available" unless the result shows its own page was opened '
      '(a link for it in sources). If something was only seen in a search list, or the notes say it could not be opened '
      'or verified, say exactly that — e.g. "it shows up in their search, but the listing page wouldn\'t open, so I can\'t '
      'confirm it\'s still open". Don\'t sound sure about anything the result doesn\'t prove.');
  buf.writeln('Be truthful: if you stopped for a login or a final confirm/payment button, say what they need '
      'to do in the Browser window, then "tell me to continue". Never claim money was moved.');
  return buf.toString();
}

// ── Result card (what the advisor found, in boxes) ─────────────────────────

class NgmyAdvisorResultCard extends StatelessWidget {
  const NgmyAdvisorResultCard({super.key, required this.data, this.onOpenSource});

  final Map<String, dynamic> data;
  final void Function(String url)? onOpenSource;

  @override
  Widget build(BuildContext context) {
    final title = '${data['title'] ?? ''}'.trim();
    final summary = '${data['summary'] ?? ''}'.trim();
    final sections = ((data['sections'] as List?) ?? const []).whereType<Map>().toList();
    final notes = ((data['notes'] as List?) ?? const []).map((e) => '$e').where((e) => e.trim().isNotEmpty).toList();
    final sources = ((data['sources'] as List?) ?? const []).whereType<Map>().toList();
    const accents = [Color(0xFF60A5FA), Color(0xFF34D399), Color(0xFFFBBF24), Color(0xFFF472B6), Color(0xFFA78BFA)];

    return Container(
      margin: const EdgeInsets.only(top: 10),
      width: MediaQuery.sizeOf(context).width * 0.86,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: const Color(0xFF15151B),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (title.isNotEmpty)
            Text(title, style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w800, height: 1.25)),
          if (summary.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Text(summary, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 13.5, height: 1.4)),
            ),
          for (var i = 0; i < sections.length; i++) ...[
            const SizedBox(height: 12),
            Container(
              decoration: BoxDecoration(
                color: const Color(0xFF1C1C24),
                borderRadius: BorderRadius.circular(14),
                border: Border(left: BorderSide(color: accents[i % accents.length], width: 3)),
              ),
              padding: const EdgeInsets.fromLTRB(12, 10, 12, 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    '${sections[i]['heading'] ?? ''}',
                    style: TextStyle(color: accents[i % accents.length], fontSize: 12.5, fontWeight: FontWeight.w800, letterSpacing: 0.3),
                  ),
                  const SizedBox(height: 6),
                  for (final r in ((sections[i]['rows'] as List?) ?? const []).whereType<Map>())
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 4),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            flex: 5,
                            child: Text('${r['label'] ?? ''}',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 13)),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            flex: 6,
                            child: Text('${r['value'] ?? ''}',
                                textAlign: TextAlign.right,
                                style: const TextStyle(color: Colors.white, fontSize: 13.5, fontWeight: FontWeight.w700)),
                          ),
                        ],
                      ),
                    ),
                ],
              ),
            ),
          ],
          if (notes.isNotEmpty) ...[
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFFF59E0B).withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  for (final n in notes)
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 2),
                      child: Text('• $n', style: const TextStyle(color: Color(0xFFFCD34D), fontSize: 12.5, height: 1.35)),
                    ),
                ],
              ),
            ),
          ],
          if (sources.isNotEmpty) ...[
            const SizedBox(height: 10),
            Wrap(
              spacing: 6,
              runSpacing: 6,
              children: [
                for (final s in sources)
                  ActionChip(
                    avatar: const Icon(Icons.language_rounded, size: 15, color: Color(0xFF60A5FA)),
                    label: Text(
                      '${(s['name'] ?? '').toString().isNotEmpty ? s['name'] : Uri.tryParse('${s['url']}')?.host ?? 'Source'}',
                      style: const TextStyle(fontSize: 11.5),
                    ),
                    onPressed: '${s['url'] ?? ''}'.isEmpty || onOpenSource == null ? null : () => onOpenSource!('${s['url']}'),
                  ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

// ── Full screen (can turn sideways like a video) ───────────────────────────

Future<void> ngmyOpenAdvisorLiveFullscreen(BuildContext context, NgmyAdvisorAgentRun run) async {
  if (ngmyLiveViewExternalOnly) return ngmyOpenAdvisorLiveExternal(run);
  run.setFullscreen(true);
  try {
    await Navigator.of(context, rootNavigator: true).push(
      PageRouteBuilder<void>(
        opaque: true,
        pageBuilder: (_, _, _) => _NgmyAdvisorLiveFullscreen(run: run),
        transitionsBuilder: (_, anim, _, child) => FadeTransition(opacity: anim, child: child),
      ),
    );
  } finally {
    run.setFullscreen(false);
  }
}

class _NgmyAdvisorLiveFullscreen extends StatefulWidget {
  const _NgmyAdvisorLiveFullscreen({required this.run});
  final NgmyAdvisorAgentRun run;

  @override
  State<_NgmyAdvisorLiveFullscreen> createState() => _NgmyAdvisorLiveFullscreenState();
}

class _NgmyAdvisorLiveFullscreenState extends State<_NgmyAdvisorLiveFullscreen> {
  /// Rotate the view 90° so it fills the phone held sideways — works even when the app is
  /// locked to portrait (iPhone home-screen app).
  bool _sideways = true;

  @override
  void initState() {
    super.initState();
    widget.run.addListener(_changed);
  }

  @override
  void dispose() {
    widget.run.removeListener(_changed);
    super.dispose();
  }

  void _changed() {
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final r = widget.run;
    final size = MediaQuery.sizeOf(context);
    final pad = MediaQuery.paddingOf(context);
    // Already landscape (tablet / rotated device) → no need to rotate.
    final rotate = _sideways && size.height > size.width;
    final availW = size.width - pad.left - pad.right;
    final availH = size.height - pad.top - pad.bottom;
    // Long side along the view's width; keep the page's shape.
    final longSide = rotate ? availH : availW;
    final shortSide = rotate ? availW : availH;
    var viewW = longSide;
    var viewH = ngmyAdvisorLiveViewHeight(viewW);
    if (viewH > shortSide) {
      viewH = shortSide;
      viewW = viewH / 0.66;
    }
    final view = SizedBox(
      width: viewW,
      height: viewH,
      child: r.liveUrl.isEmpty
          ? const Center(child: CircularProgressIndicator(color: Color(0xFF60A5FA)))
          : NgmyAdvisorLiveView(key: ValueKey('fs-${r.liveUrl}#${r.viewNonce}'), url: r.liveUrl),
    );

    Widget controls(bool vertical) {
      final children = <Widget>[
        if (r.running)
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
            decoration: BoxDecoration(color: const Color(0xFFDC2626), borderRadius: BorderRadius.circular(6)),
            child: const Text('LIVE', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900)),
          ),
        IconButton(
          tooltip: _sideways ? 'Upright' : 'Sideways',
          onPressed: () => setState(() => _sideways = !_sideways),
          icon: const Icon(Icons.screen_rotation_rounded, color: Colors.white),
        ),
        if (r.running)
          IconButton(
            tooltip: 'Stop',
            onPressed: () => unawaited(r.stop()),
            icon: const Icon(Icons.stop_circle_outlined, color: Color(0xFFF87171)),
          ),
        IconButton(
          tooltip: 'Close',
          onPressed: () => Navigator.of(context).maybePop(),
          icon: const Icon(Icons.close_rounded, color: Colors.white),
        ),
      ];
      return vertical ? Column(mainAxisSize: MainAxisSize.min, children: children) : Row(mainAxisSize: MainAxisSize.min, children: children);
    }

    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Stack(
          children: [
            Center(child: rotate ? RotatedBox(quarterTurns: 1, child: view) : view),
            // Controls sit on the free edge so they never cover the page.
            if (rotate)
              Positioned(left: 4, top: 8, child: RotatedBox(quarterTurns: 1, child: controls(false)))
            else
              Positioned(right: 8, top: 8, child: controls(false)),
            if ((r.latestStep).isNotEmpty && r.running)
              Positioned(
                left: rotate ? null : 12,
                right: rotate ? 4 : 12,
                bottom: rotate ? null : 12,
                top: rotate ? 60 : null,
                child: RotatedBox(
                  quarterTurns: rotate ? 1 : 0,
                  child: Container(
                    constraints: const BoxConstraints(maxWidth: 520),
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    decoration: BoxDecoration(color: const Color(0xCC111827), borderRadius: BorderRadius.circular(10)),
                    child: Text(r.latestStep,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(color: Colors.white70, fontSize: 12)),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}

// ── Live panel ─────────────────────────────────────────────────────────────

/// Height of the live view for a given width — matches the cloud browser's shape
/// (page + its tab/address bar) so there is no empty black area.
double ngmyAdvisorLiveViewHeight(double width) => (width * 0.66).clamp(180.0, 900.0);

class NgmyAdvisorLivePanel extends StatefulWidget {
  const NgmyAdvisorLivePanel({
    super.key,
    required this.run,
    required this.advisorName,
    this.onDragDelta,
  });

  final NgmyAdvisorAgentRun run;
  final String advisorName;
  /// Vertical drag on the header (dy) — moves the panel up / down.
  final ValueChanged<double>? onDragDelta;

  @override
  State<NgmyAdvisorLivePanel> createState() => _NgmyAdvisorLivePanelState();
}

class _NgmyAdvisorLivePanelState extends State<NgmyAdvisorLivePanel> with SingleTickerProviderStateMixin {
  late final AnimationController _pulse =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..repeat(reverse: true);

  @override
  void initState() {
    super.initState();
    widget.run.addListener(_changed);
  }

  @override
  void dispose() {
    widget.run.removeListener(_changed);
    _pulse.dispose();
    super.dispose();
  }

  void _changed() {
    if (mounted) setState(() {});
  }

  String _statusLine() {
    final r = widget.run;
    if (r.startError.isNotEmpty) return r.startError;
    if (r.status == 'starting' || r.status == 'queued' || r.status == 'dispatching') {
      return '${widget.advisorName} is starting the browser…';
    }
    if (r.running) return r.latestStep.isNotEmpty ? r.latestStep : '${widget.advisorName} is working…';
    if (r.status == 'completed') return 'Done — ${widget.advisorName} finished the task';
    if (r.status == 'cancelled') return 'Stopped';
    if (r.status == 'failed') return 'Couldn\'t finish — ${widget.advisorName} will explain';
    return 'Live browser';
  }

  @override
  Widget build(BuildContext context) {
    final r = widget.run;
    // Panel inner width ≈ screen − margins; height follows the page shape (no black gap).
    final viewW = MediaQuery.sizeOf(context).width - 16 - 24;
    final viewH = ngmyAdvisorLiveViewHeight(viewW);
    return Material(
      elevation: 10,
      shadowColor: Colors.black54,
      color: const Color(0xFF16161C),
      borderRadius: BorderRadius.circular(18),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(12, 4, 6, 12),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Drag handle — slide the window up or down.
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onVerticalDragUpdate: (d) => widget.onDragDelta?.call(d.delta.dy),
              child: SizedBox(
                height: 14,
                width: double.infinity,
                child: Center(
                  child: Container(
                    width: 42,
                    height: 4,
                    decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(4)),
                  ),
                ),
              ),
            ),
            GestureDetector(
              behavior: HitTestBehavior.translucent,
              onVerticalDragUpdate: (d) => widget.onDragDelta?.call(d.delta.dy),
              child: Row(
              children: [
                Container(
                  width: 34,
                  height: 34,
                  decoration: BoxDecoration(color: const Color(0xFF1E3A5F), borderRadius: BorderRadius.circular(9)),
                  child: const Icon(Icons.language_rounded, color: Color(0xFF60A5FA), size: 20),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          const Text('Browser', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                          const SizedBox(width: 8),
                          if (r.running)
                            FadeTransition(
                              opacity: _pulse,
                              child: Container(
                                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                                decoration: BoxDecoration(color: const Color(0xFFDC2626), borderRadius: BorderRadius.circular(6)),
                                child: const Text('LIVE', style: TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w900)),
                              ),
                            ),
                        ],
                      ),
                      const SizedBox(height: 2),
                      AnimatedSwitcher(
                        duration: const Duration(milliseconds: 250),
                        child: Text(
                          _statusLine(),
                          key: ValueKey(_statusLine()),
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 12, height: 1.3),
                        ),
                      ),
                    ],
                  ),
                ),
                if (r.running)
                  TextButton(
                    onPressed: () => unawaited(r.stop()),
                    style: TextButton.styleFrom(foregroundColor: const Color(0xFFF87171)),
                    child: const Text('Stop', style: TextStyle(fontWeight: FontWeight.w800)),
                  ),
                if (r.liveUrl.isNotEmpty && !r.browserClosed)
                  IconButton(
                    tooltip: 'Reconnect',
                    onPressed: r.reconnect,
                    icon: const Icon(Icons.refresh_rounded, color: Colors.white60, size: 21),
                  ),
                IconButton(
                  tooltip: 'Full screen',
                  onPressed: r.liveUrl.isEmpty ? null : () => ngmyOpenAdvisorLiveFullscreen(context, r),
                  icon: const Icon(Icons.fullscreen_rounded, color: Colors.white70, size: 24),
                ),
                IconButton(
                  tooltip: 'Hide',
                  onPressed: r.hide,
                  icon: const Icon(Icons.keyboard_arrow_down_rounded, color: Colors.white60, size: 24),
                ),
              ],
            ),
            ),
            const SizedBox(height: 8),
            Padding(
              padding: const EdgeInsets.only(right: 6),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: SizedBox(
                  height: viewH,
                  width: double.infinity,
                  child: r.liveUrl.isNotEmpty && r.fullscreen
                      ? const ColoredBox(
                          color: Color(0xFF0F172A),
                          child: Center(
                            child: Text('Watching in full screen', style: TextStyle(color: Colors.white54, fontSize: 12)),
                          ),
                        )
                      : r.browserClosed
                      ? ColoredBox(
                          color: const Color(0xFF0F172A),
                          child: Center(
                            child: Padding(
                              padding: const EdgeInsets.all(16),
                              child: Text(
                                'The browser is resting to save data.\n'
                                'Just reply to ${widget.advisorName} and it opens again right where you left off.',
                                textAlign: TextAlign.center,
                                style: const TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.4),
                              ),
                            ),
                          ),
                        )
                      : r.liveUrl.isNotEmpty && ngmyLiveViewOnOwnScreen
                      ? _NgmyLiveStepsPreview(run: r, onWatch: () => ngmyOpenAdvisorLiveFullscreen(context, r))
                      : r.liveUrl.isNotEmpty
                      ? NgmyAdvisorLiveView(key: ValueKey('${r.liveUrl}#${r.viewNonce}'), url: r.liveUrl)
                      : ColoredBox(
                          color: const Color(0xFF0F172A),
                          child: Center(
                            child: r.startError.isNotEmpty
                                ? const Icon(Icons.error_outline_rounded, color: Colors.white38, size: 30)
                                : const Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      SizedBox(
                                        width: 26,
                                        height: 26,
                                        child: CircularProgressIndicator(strokeWidth: 2.4, color: Color(0xFF60A5FA)),
                                      ),
                                      SizedBox(height: 10),
                                      Text('Opening a live browser…', style: TextStyle(color: Colors.white54, fontSize: 12)),
                                    ],
                                  ),
                          ),
                        ),
                ),
              ),
            ),
            if (r.liveUrl.isNotEmpty)
              Padding(
                padding: const EdgeInsets.fromLTRB(2, 8, 8, 0),
                child: Text(
                  'Tap inside to take over anytime — log in yourself, then tell ${widget.advisorName} to continue.',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10.5, height: 1.3),
                ),
              ),
          ],
        ),
      ),
    );
  }
}

/// The live browser plays right inside the chat, so they watch the mouse move in real time.
/// Only if the phone has killed the app twice recently while it was showing do we switch
/// to the step list (with Watch live full screen) — and they can switch back.
/// iPhone / iPad web app: the live browser video must never play inside the app's page —
/// Safari runs out of graphics memory and kills the whole app ("A problem repeatedly
/// occurred"). There it opens in Safari's own window instead (separate, stable).
bool get ngmyLiveViewExternalOnly => kIsWeb && defaultTargetPlatform == TargetPlatform.iOS;

/// Show the step list in the chat instead of the live video: always on iPhone; on other
/// phones only if the live view made the app restart twice recently.
bool get ngmyLiveViewOnOwnScreen =>
    ngmyLiveViewExternalOnly ||
    (kIsWeb && defaultTargetPlatform == TargetPlatform.android && ngmyLiveViewRecentCrashes() >= 2);

/// Opens the live browser in its own Safari window (iPhone) — real time, tap in to sign in.
Future<void> ngmyOpenAdvisorLiveExternal(NgmyAdvisorAgentRun run) async {
  if (run.liveUrl.isEmpty) return;
  await launchUrl(Uri.parse(run.liveUrl), mode: LaunchMode.externalApplication, webOnlyWindowName: '_blank');
}

/// What the advisor is doing right now: a fresh picture of its browser screen about once a
/// second (page, mouse and clicks — light enough for iPhone, unlike the live video), the
/// latest step, and a button to watch the full live screen.
class _NgmyLiveStepsPreview extends StatefulWidget {
  const _NgmyLiveStepsPreview({required this.run, required this.onWatch});
  final NgmyAdvisorAgentRun run;
  final VoidCallback onWatch;

  @override
  State<_NgmyLiveStepsPreview> createState() => _NgmyLiveStepsPreviewState();
}

class _NgmyLiveStepsPreviewState extends State<_NgmyLiveStepsPreview> with WidgetsBindingObserver {
  Uint8List? _shot;
  Timer? _timer;
  bool _fetching = false;
  bool _foreground = true;
  DateTime? _stoppedAt;
  int _misses = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _timer = Timer.periodic(const Duration(milliseconds: 1100), (_) => _tick());
    _tick();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    _foreground = state == AppLifecycleState.resumed;
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _timer?.cancel();
    super.dispose();
  }

  Future<void> _tick() async {
    final r = widget.run;
    final sid = r.sessionId ?? '';
    if (_fetching || !_foreground || sid.isEmpty || r.browserClosed) return;
    // Keep updating while it works, plus a few seconds after so the last screen shows.
    if (r.running) {
      _stoppedAt = null;
    } else {
      _stoppedAt ??= DateTime.now();
      if (DateTime.now().difference(_stoppedAt!) > const Duration(seconds: 6)) return;
    }
    _fetching = true;
    try {
      final res = await ngmyEdgeInvoke({'action': 'agentShot', 'sessionId': sid, if ((r.runId ?? '').isNotEmpty) 'runId': r.runId, 'after': r._after}, timeout: const Duration(seconds: 10));
      final b64 = (res?['jpegBase64'] ?? '').toString();
      if (res?['ok'] == true && b64.isNotEmpty && mounted) {
        _misses = 0;
        setState(() => _shot = base64Decode(b64));
      } else if (mounted) {
        setState(() => _misses++);
      }
    } catch (e) {
      debugPrint('[advisor-agent] shot: $e');
    } finally {
      _fetching = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    final run = widget.run;
    final host = Uri.tryParse(run.pageUrl)?.host ?? '';
    final latest = run.latestStep;
    final shot = _shot;
    return Container(
      color: const Color(0xFF0F172A),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: GestureDetector(
              onTap: widget.onWatch,
              child: Stack(fit: StackFit.expand, children: [
                if (shot != null)
                  Image.memory(
                    shot,
                    fit: BoxFit.contain,
                    gaplessPlayback: true,
                    cacheWidth: 900,
                    filterQuality: FilterQuality.medium,
                  )
                else
                  Center(
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Color(0xFF60A5FA))),
                      const SizedBox(height: 10),
                      Text(
                        _misses >= 6 ? 'Live pictures aren’t coming through — tap Full live screen below' : (run.running ? 'Opening the screen…' : 'Ready'),
                        textAlign: TextAlign.center,
                        style: const TextStyle(color: Colors.white54, fontSize: 12.5),
                      ),
                    ]),
                  ),
                // Where it is + what it's doing, over the bottom of the picture.
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: Container(
                    padding: const EdgeInsets.fromLTRB(10, 14, 10, 6),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Colors.transparent, Colors.black.withValues(alpha: 0.75)],
                      ),
                    ),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                      if (host.isNotEmpty)
                        Text('🔒 $host', maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white60, fontSize: 11)),
                      if (latest.isNotEmpty)
                        Text(latest, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w600, height: 1.25)),
                    ]),
                  ),
                ),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 6, 8, 6),
            child: SizedBox(
              width: double.infinity,
              child: FilledButton.icon(
                onPressed: widget.onWatch,
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF2563EB), padding: const EdgeInsets.symmetric(vertical: 9)),
                icon: const Icon(Icons.live_tv_rounded, size: 17),
                label: const Text('Full live screen · tap in to sign in', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13)),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
