// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

String ngmyWebHostname() {
  final host = html.window.location.hostname;
  return host == null ? '' : host;
}

String ngmyWebOrigin() {
  final origin = html.window.location.origin;
  return origin == null ? '' : origin;
}

void ngmyOAuthStoreEmailHint(String email) {
  final v = email.toLowerCase().trim();
  if (v.isEmpty) return;
  html.window.sessionStorage['ngmy_oauth_email_hint'] = v;
}

String? ngmyOAuthPeekEmailHint() {
  final v = html.window.sessionStorage['ngmy_oauth_email_hint'];
  if (v == null || v.trim().isEmpty) return null;
  return v.trim().toLowerCase();
}

String? ngmyOAuthTakeEmailHint() {
  final v = html.window.sessionStorage['ngmy_oauth_email_hint'];
  html.window.sessionStorage.remove('ngmy_oauth_email_hint');
  if (v == null || v.trim().isEmpty) return null;
  return v.trim().toLowerCase();
}

void ngmyOAuthStoreProviderHint(String provider) {
  final v = provider.trim().toLowerCase();
  if (v.isEmpty) return;
  html.window.sessionStorage['ngmy_oauth_provider_hint'] = v;
}

String? ngmyOAuthTakeProviderHint() {
  final v = html.window.sessionStorage['ngmy_oauth_provider_hint'];
  html.window.sessionStorage.remove('ngmy_oauth_provider_hint');
  if (v == null || v.trim().isEmpty) return null;
  return v.trim().toLowerCase();
}
