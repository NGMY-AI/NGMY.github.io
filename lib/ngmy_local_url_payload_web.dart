import 'dart:html' as html;

String? ngmyReadLocalUrlPayloadTokenFromLaunch() {
  final hash = html.window.location.hash.trim();
  if (hash.isEmpty) return null;
  final body = hash.startsWith('#') ? hash.substring(1) : hash;
  if (body.startsWith('d=')) return body.substring(2);
  final params = Uri.splitQueryString(body);
  final fromQuery = params['d']?.trim();
  if (fromQuery != null && fromQuery.isNotEmpty) return fromQuery;
  return null;
}
