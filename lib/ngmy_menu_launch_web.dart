import 'dart:html' as html;

String? ngmyReadMenuSlugFromLaunchUrl() {
  final path = html.window.location.pathname ?? '';
  final match = RegExp(r'/menu/([^/?#]+)', caseSensitive: false).firstMatch(path);
  if (match != null) return match.group(1)?.trim().toLowerCase();

  final hash = html.window.location.hash;
  if (hash.startsWith('#/menu/')) {
    return hash.replaceFirst('#/menu/', '').split('?').first.trim().toLowerCase();
  }
  if (hash.startsWith('#menu/')) {
    return hash.replaceFirst('#menu/', '').split('?').first.trim().toLowerCase();
  }

  final params = Uri.parse(html.window.location.href).queryParameters;
  final q = params['ngmy_menu']?.trim().toLowerCase();
  if (q != null && q.isNotEmpty) return q;

  return null;
}
