import 'dart:html' as html;

String? ngmyReadAppSlugFromLaunchUrl() {
  final uri = Uri.parse(html.window.location.href);
  final slug = uri.queryParameters['ngmy_app']?.trim();
  if (slug != null && slug.isNotEmpty) return slug.toLowerCase();
  final hash = uri.fragment.trim();
  if (hash.startsWith('app/')) {
    final fromHash = hash.substring(4).trim();
    if (fromHash.isNotEmpty) return fromHash.toLowerCase();
  }
  return null;
}

String ngmyAppBuilderBaseUrl() {
  final origin = html.window.location.origin;
  final path = html.window.location.pathname ?? '/';
  if (origin.isNotEmpty) {
    final base = '$origin$path'.replaceAll(RegExp(r'/+$'), '');
    return '$base/';
  }
  return 'https://ngmy-ai.github.io/NGMY.github.io/';
}
