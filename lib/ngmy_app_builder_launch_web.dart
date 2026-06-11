import 'dart:html' as html;

String? _slugFromSessionStorage() {
  try {
    final stored = html.window.sessionStorage['ngmy_guest_app_slug'];
    if (stored != null && stored.trim().isNotEmpty) return stored.trim().toLowerCase();
  } catch (_) {}
  return null;
}

String? _slugFromPath(String path) {
  final match = RegExp(r'/app/([^/?#]+)', caseSensitive: false).firstMatch(path);
  if (match != null) {
    final slug = match.group(1)?.trim().toLowerCase();
    if (slug != null && slug.isNotEmpty && slug != 'index.html') return slug;
  }
  final segments = path.split('/').where((s) => s.isNotEmpty).toList();
  for (var i = 0; i < segments.length - 1; i++) {
    if (segments[i].toLowerCase() == 'app') {
      final slug = segments[i + 1].trim().toLowerCase();
      if (slug.isNotEmpty && slug != 'index.html') return slug;
    }
  }
  return null;
}

String? ngmyReadAppSlugFromLaunchUrl() {
  final fromStore = _slugFromSessionStorage();
  if (fromStore != null && fromStore.isNotEmpty) return fromStore;

  final uri = Uri.parse(html.window.location.href);

  final fromPath = _slugFromPath(uri.path);
  if (fromPath != null && fromPath.isNotEmpty) {
    try {
      html.window.sessionStorage['ngmy_guest_app_slug'] = fromPath;
    } catch (_) {}
    return fromPath;
  }

  final slug = uri.queryParameters['ngmy_app']?.trim();
  if (slug != null && slug.isNotEmpty) return slug.toLowerCase();

  final hash = uri.fragment.trim();
  if (hash.startsWith('app/')) {
    final fromHash = hash.substring(4).split('/').first.trim();
    if (fromHash.isNotEmpty) return fromHash.toLowerCase();
  }
  return null;
}

String ngmyAppBuilderBaseUrl() {
  const fallback = 'https://ngmy-ai.github.io/NGMY.github.io/';
  try {
    final origin = html.window.location.origin;
    final path = html.window.location.pathname ?? '/';
    if (origin.isEmpty) return fallback;
    var basePath = path;
    final appIdx = basePath.toLowerCase().indexOf('/app/');
    if (appIdx >= 0) {
      basePath = basePath.substring(0, appIdx);
    }
    if (!basePath.endsWith('/')) basePath = '$basePath/';
    if (basePath == '/') return '$origin/NGMY.github.io/';
    return '$origin$basePath';
  } catch (_) {
    return fallback;
  }
}
