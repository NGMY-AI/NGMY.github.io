// NGMY Advisors — the advisor's "eyes" on the web.
//  • Spots when the user asks to open a site / look something up.
//  • Reads the page or searches the web on the server (Gemini Search + URL Context), so the
//    advisor answers from what is REALLY on the page instead of guessing.
//  • Muse-style Browser card in the chat (page picture + Open browser → the mini browser).

import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_edge_invoke.dart';

final RegExp _urlInText = RegExp(r'https?://[^\s<>"]+', caseSensitive: false);
final RegExp _bareDomain = RegExp(
  r'\b((?:[a-z0-9-]+\.)+(?:com|org|net|io|co|ai|app|dev|gov|edu|tv|me|info|biz|us|uk|ca|news|shop|store|xyz))(/[^\s<>"]*)?\b',
  caseSensitive: false,
);
final RegExp _browseAsk = RegExp(
  r"\b(open|go to|goto|visit|pull up|load|check out|look at|browse)\b.{0,40}\b(site|website|web ?page|page|link|url|browser|online)\b"
  r"|\b(open|use) (the|your|a) browser\b"
  r"|\bbrowse\b"
  r"|\bsearch (the )?(web|internet|online|google)\b"
  r"|\bgoogle (it|that|this|for)\b"
  r"|\b(search online for|search for|look up|look it up|look that up|find online)\b"
  r"|\b(latest|today'?s|current|live|right now)\b.{0,25}\b(news|price|prices|score|scores|weather|rate|rates|results|headlines)\b",
  caseSensitive: false,
);

/// Returns a browse request when the user asked the advisor to open a site / look something up.
/// `null` means normal chat.
({String? url})? ngmyAdvisorBrowseIntent(String text) {
  final t = text.trim();
  if (t.isEmpty) return null;
  final full = _urlInText.firstMatch(t)?.group(0);
  if (full != null) {
    return (url: full.replaceAll(RegExp(r'[).,!?]+$'), ''));
  }
  final bare = _bareDomain.firstMatch(t);
  final asked = _browseAsk.hasMatch(t) ||
      (bare != null &&
          RegExp(r'\b(open|go to|goto|visit|pull up|load|check|look at|browse|go on|get on|log ?in)\b', caseSensitive: false)
              .hasMatch(t));
  if (!asked) return null;
  if (bare != null && !(bare.group(0) ?? '').contains('@')) {
    return (url: 'https://${bare.group(0)}');
  }
  return (url: null);
}

typedef NgmyAdvisorBrowseResult = ({
  bool ok,
  String summary,
  String url,
  String title,
  List<({String url, String title})> sources,
  String? screenshotB64,
  String? error,
});

NgmyAdvisorBrowseResult _browseFailed(String? url, String error) => (
      ok: false,
      summary: '',
      url: url ?? '',
      title: '',
      sources: const <({String url, String title})>[],
      screenshotB64: null,
      error: error,
    );

/// Server-side browse (Supabase `advisorBrowse`) — read-only page view / web search.
Future<NgmyAdvisorBrowseResult> ngmyAdvisorBrowseWeb({required String task, String? url}) async {
  try {
    final data = await ngmyEdgeInvoke(
      {
        'action': 'advisorBrowse',
        'task': task,
        if ((url ?? '').trim().isNotEmpty) 'url': url!.trim(),
      },
      timeout: const Duration(seconds: 60),
    );
    if (data == null) return _browseFailed(url, 'No response');
    final sources = <({String url, String title})>[];
    final rawSources = data['sources'];
    if (rawSources is List) {
      for (final s in rawSources) {
        if (s is Map) {
          final u = (s['url'] ?? '').toString().trim();
          if (u.isNotEmpty) sources.add((url: u, title: (s['title'] ?? '').toString().trim()));
        }
      }
    }
    final shot = (data['screenshotBase64'] ?? '').toString().trim();
    final shownUrl = (data['url'] ?? '').toString().trim();
    return (
      ok: data['ok'] == true,
      summary: (data['summary'] ?? '').toString().trim(),
      url: shownUrl.isNotEmpty ? shownUrl : (url ?? ''),
      title: (data['title'] ?? '').toString().trim(),
      sources: sources,
      screenshotB64: shot.isEmpty ? null : shot,
      error: data['error']?.toString(),
    );
  } catch (e) {
    debugPrint('[advisor-browse] $e');
    return _browseFailed(url, e.toString());
  }
}

/// Prompt block handed to the advisor after browsing.
String ngmyAdvisorBrowsePromptBlock(NgmyAdvisorBrowseResult r) {
  final buf = StringBuffer()
    ..writeln('WEB BROWSER — YOU JUST LOOKED AT THE WEB for this message. The page is already open for them in the '
        'Browser window in this chat — do NOT add another open_url action for the same page.')
    ..writeln('Talk like you looked yourself ("I just checked…", "On their site it says…").')
    ..writeln('HONESTY: You read public pages only. You are NOT signed in to their accounts, you cannot see their '
        'balance, and you never place trades, payments or purchases. Never say "logging in", "placing trades" or '
        '"done" for things you did not do. If they want that, tell them the site is open in the Browser window and '
        'guide them step by step — they do the sign-in and money parts themselves.');
  if (r.ok && r.summary.isNotEmpty) {
    if (r.title.isNotEmpty) buf.writeln('Page: ${r.title}${r.url.isNotEmpty ? ' (${r.url})' : ''}');
    buf.writeln('What you saw:\n${r.summary}');
    if (r.sources.isNotEmpty) {
      buf.writeln('Sources: ${r.sources.map((s) => s.title.isNotEmpty ? s.title : Uri.tryParse(s.url)?.host ?? s.url).join(', ')}');
    }
    buf.writeln('Answer their request from what you saw — specific facts, numbers and names. Never invent details '
        'that are not above. A few sentences is fine here.');
  } else {
    buf.writeln('The page did not load (${r.error ?? 'unknown error'}). Say so honestly and briefly — '
        'do NOT pretend you saw anything. Offer to try another link.');
  }
  return buf.toString();
}

String ngmyAdvisorBrowserHost(String url) {
  final host = Uri.tryParse(url)?.host ?? '';
  return host.startsWith('www.') ? host.substring(4) : host;
}

/// Muse-style "Browser" card shown in the chat above the advisor's answer.
class NgmyAdvisorBrowserChatCard extends StatelessWidget {
  final String status;
  final String url;
  final String? screenshotB64;
  final bool loading;
  final VoidCallback? onOpen;

  const NgmyAdvisorBrowserChatCard({
    super.key,
    required this.status,
    required this.url,
    this.screenshotB64,
    this.loading = false,
    this.onOpen,
  });

  @override
  Widget build(BuildContext context) {
    final shot = (screenshotB64 ?? '').trim();
    Widget preview;
    if (shot.isNotEmpty) {
      Widget img;
      try {
        img = Image.memory(
          base64Decode(shot),
          fit: BoxFit.cover,
          alignment: Alignment.topCenter,
          gaplessPlayback: true,
          errorBuilder: (_, _, _) => const SizedBox.shrink(),
        );
      } catch (_) {
        img = const SizedBox.shrink();
      }
      preview = ClipRRect(
        borderRadius: BorderRadius.circular(12),
        child: AspectRatio(aspectRatio: 1100 / 760, child: img),
      );
    } else if (loading) {
      preview = ClipRRect(
        borderRadius: BorderRadius.circular(12),
        child: Container(
          height: 120,
          color: const Color(0xFF15151A),
          alignment: Alignment.center,
          child: const SizedBox(
            width: 24,
            height: 24,
            child: CircularProgressIndicator(strokeWidth: 2.4, color: Color(0xFF60A5FA)),
          ),
        ),
      );
    } else {
      preview = const SizedBox.shrink();
    }

    return Container(
      margin: const EdgeInsets.only(top: 12),
      width: MediaQuery.sizeOf(context).width * 0.8,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFF1C1C21),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(color: const Color(0xFF1E3A5F), borderRadius: BorderRadius.circular(10)),
                child: const Icon(Icons.language_rounded, color: Color(0xFF60A5FA), size: 22),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('Browser', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 15)),
                    Text(
                      status,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12.5),
                    ),
                  ],
                ),
              ),
            ],
          ),
          if (shot.isNotEmpty || loading) ...[const SizedBox(height: 10), preview],
          if (url.trim().isNotEmpty && onOpen != null) ...[
            const SizedBox(height: 10),
            SizedBox(
              height: 40,
              child: TextButton(
                onPressed: onOpen,
                style: TextButton.styleFrom(
                  backgroundColor: Colors.white.withValues(alpha: 0.07),
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
                ),
                child: const Text('Open browser', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600)),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// Little emoji bubble pinned to the corner of a chat message, with a pop-in.
class NgmyAdvisorReactionBadge extends StatelessWidget {
  final String emoji;
  const NgmyAdvisorReactionBadge({super.key, required this.emoji});

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder<double>(
      key: ValueKey(emoji),
      tween: Tween(begin: 0, end: 1),
      duration: const Duration(milliseconds: 420),
      curve: Curves.elasticOut,
      builder: (context, v, child) => Transform.scale(scale: v, child: child),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 4),
        decoration: BoxDecoration(
          color: const Color(0xFF1F1F23),
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: Colors.black, width: 2),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 6, offset: const Offset(0, 2))],
        ),
        child: Text(emoji, style: const TextStyle(fontSize: 16, height: 1.1)),
      ),
    );
  }
}
