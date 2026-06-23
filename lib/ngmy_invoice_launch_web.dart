import 'dart:html' as html;

String? _slugFromPath(String path) {
  final match = RegExp(r'/invoice/([^/?#]+)', caseSensitive: false).firstMatch(path);
  if (match != null) {
    final slug = match.group(1)?.trim().toLowerCase();
    if (slug != null && slug.isNotEmpty && slug != 'index.html') return slug;
  }
  final segments = path.split('/').where((s) => s.isNotEmpty).toList();
  for (var i = 0; i < segments.length - 1; i++) {
    if (segments[i].toLowerCase() == 'invoice') {
      final slug = segments[i + 1].trim().toLowerCase();
      if (slug.isNotEmpty && slug != 'index.html') return slug;
    }
  }
  return null;
}

String? ngmyReadInvoiceSlugFromLaunchUrl() {
  final uri = Uri.parse(html.window.location.href);
  final fromPath = _slugFromPath(uri.path);
  if (fromPath != null && fromPath.isNotEmpty) {
    try {
      html.window.sessionStorage['ngmy_guest_invoice_slug'] = fromPath;
    } catch (_) {}
    return fromPath;
  }

  try {
    html.window.sessionStorage.remove('ngmy_guest_invoice_slug');
  } catch (_) {}

  final slug = uri.queryParameters['ngmy_invoice']?.trim();
  if (slug != null && slug.isNotEmpty) return slug.toLowerCase();

  final hash = uri.fragment.trim();
  if (hash.startsWith('invoice/')) {
    final fromHash = hash.substring(8).split('/').first.trim();
    if (fromHash.isNotEmpty) return fromHash.toLowerCase();
  }

  return null;
}
