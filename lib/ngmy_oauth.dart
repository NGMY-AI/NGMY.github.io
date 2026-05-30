import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_oauth_nav_stub.dart' if (dart.library.html) 'ngmy_oauth_nav_web.dart';

/// Canonical GitHub Pages URL — must match Supabase Auth → URL Configuration.
const String kNgmyOAuthRedirectUrl = 'https://ngmy-ai.github.io/NGMY.github.io/';

/// Resolves the OAuth callback URL Supabase should redirect to after Google/GitHub login.
String ngmyOAuthRedirectUrl() {
  if (kIsWeb) {
    final base = Uri.base;
    if (base.host.contains('github.io')) {
      return kNgmyOAuthRedirectUrl;
    }
    final path = base.path.isEmpty ? '/' : base.path;
    final normalizedPath = path.endsWith('/') ? path : '$path/';
    return '${base.origin}$normalizedPath';
  }
  return 'io.supabase.flutter://login-callback';
}

/// After OAuth, Supabase redirects back with ?code= or #access_token=. Recover session on web.
Future<void> ngmyRecoverOAuthSessionIfNeeded() async {
  if (!kIsWeb) return;
  final uri = Uri.base;
  final hasPkceCode = uri.queryParameters.containsKey('code');
  final hasImplicitToken = uri.fragment.contains('access_token');
  final hasError = uri.queryParameters.containsKey('error') || uri.fragment.contains('error_description');
  if (!hasPkceCode && !hasImplicitToken && !hasError) return;

  try {
    await Supabase.instance.client.auth.getSessionFromUrl(uri);
    ngmyOAuthCleanBrowserUrl(ngmyOAuthRedirectUrl());
  } catch (e) {
    debugPrint('[ngmy_oauth] session recovery failed: $e');
  }
}

/// Starts Google/GitHub OAuth. On web uses same-tab navigation (Safari/PWA safe).
Future<String?> ngmyStartOAuthSignIn(OAuthProvider provider) async {
  final redirectTo = ngmyOAuthRedirectUrl();
  try {
    final res = await Supabase.instance.client.auth.getOAuthSignInUrl(
      provider: provider,
      redirectTo: redirectTo,
    );
    if (kIsWeb) {
      ngmyOAuthNavigateSameTab(res.url);
      return null;
    }
    final launched = await Supabase.instance.client.auth.signInWithOAuth(
      provider,
      redirectTo: redirectTo,
      authScreenLaunchMode: LaunchMode.externalApplication,
    );
    if (!launched) {
      return 'Could not open ${provider.name} login. Check your browser settings.';
    }
    return null;
  } catch (e) {
    return '${provider.name.toUpperCase()} login failed. In Supabase → Authentication → URL Configuration, add redirect URL: $redirectTo. Error: $e';
  }
}
