// NGMY Advisors — Live Agent.
// The advisor carries out a task in a REAL cloud browser (Browser Use Cloud) — clicking,
// typing, scrolling — while the user watches it live inside the chat and can tap in
// (e.g. to log in). Money actions are never completed by the agent (server-side rules).

import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_advisor_live_view.dart';
import 'ngmy_edge_invoke.dart';

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
  r"download|compare prices|subscribe|"
  r"switch to|turn (on|off)|do (it|that|this) (for me|now)|for me in the (browser|site|website))\b",
  caseSensitive: false,
);
final RegExp _agentWebContext = RegExp(
  r'\b(site|website|web ?page|page|browser|online|app|account|profile|dashboard|tab)\b',
  caseSensitive: false,
);
final RegExp _agentContinue = RegExp(
  r"^\s*(ok(ay)?[,!. ]*)?(continue|keep going|go ahead|go on|carry on|resume|i('?m| am) (logged|signed) in|i (logged|signed) in|done|finished|ready|next)\b",
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
  if (!_agentAction.hasMatch(t)) return null;
  final full = _agentUrl.firstMatch(t)?.group(0)?.replaceAll(RegExp(r'[).,!?]+$'), '');
  final bare = _agentDomain.firstMatch(t)?.group(0);
  final url = full ?? (bare != null && !bare.contains('@') ? 'https://$bare' : null);
  final webContext = url != null || currentUrl.isNotEmpty || hasLiveSession || _agentWebContext.hasMatch(t);
  if (!webContext) return null;
  return (url: url, continuing: false);
}

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

  /// Called once when a task finishes (completed / failed / cancelled).
  void Function(NgmyAdvisorAgentRun run)? onFinished;

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
  }) async {
    if (running) await stop();
    // A follow-up in the same browser needs the earlier task as context.
    final prevTask = continueSession && hasSession ? this.task : '';
    _liveUrlLockedForRun = false;
    this.task = task;
    status = 'starting';
    result = null;
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
        error = res['error']?.toString();
        _notify();
      }
      if (running) {
        _schedulePoll(const Duration(milliseconds: 2500));
      } else {
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
  if ((run.result ?? '').trim().isNotEmpty) buf.writeln('Your notes from the browser:\n${run.result!.trim()}');
  if (recent.isNotEmpty) buf.writeln('Steps you took: ${recent.map((s) => s.text).join(' → ')}');
  buf.writeln('Tell them in your own voice what you did and what you found — exact numbers/names as seen. '
      'Be truthful: if you stopped for a login or a final confirm/payment button, say exactly what they need '
      'to do in the Browser window, then "tell me to continue". Never claim money was moved. 2–5 sentences.');
  return buf.toString();
}

// ── Full screen (can turn sideways like a video) ───────────────────────────

Future<void> ngmyOpenAdvisorLiveFullscreen(BuildContext context, NgmyAdvisorAgentRun run) async {
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
          : NgmyAdvisorLiveView(key: ValueKey('fs-${r.liveUrl}'), url: r.liveUrl),
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
                      : r.liveUrl.isNotEmpty
                      ? NgmyAdvisorLiveView(key: ValueKey(r.liveUrl), url: r.liveUrl)
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
