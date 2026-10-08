import 'package:flutter/foundation.dart';

import 'ngmy_edge_invoke.dart';

/// Loads page HTML through NGMY Edge so the mini browser can show sites that block iframes.
Future<String?> ngmyFetchAdvisorBrowserHtml(String url, {Duration timeout = const Duration(seconds: 25)}) async {
  final u = url.trim();
  if (u.isEmpty) return null;
  try {
    final res = await ngmyEdgeInvoke(
      {'action': 'advisorBrowserFrame', 'url': u},
      timeout: timeout,
    );
    if (res == null || res['ok'] != true) {
      debugPrint('[advisor-browser] relay: ${res?['error']}');
      return null;
    }
    final html = (res['html'] ?? '').toString();
    if (html.trim().length < 32) return null;
    return html;
  } catch (e) {
    debugPrint('[advisor-browser] relay error: $e');
    return null;
  }
}
