import 'package:flutter/foundation.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_oauth_nav_stub.dart' if (dart.library.html) 'ngmy_oauth_nav_web.dart';
import 'ngmy_supabase_config.dart';

/// Canonical production URLs — add both in Supabase Auth → Redirect URLs.
const String kNgmyOAuthRedirectUrl = 'https://ngmy.org/';
const String kNgmyOAuthLegacyRedirectUrl = 'https://ngmy-ai.github.io/NGMY.github.io/';

String? _cachedGoogleClientId;

/// Resolves the OAuth callback URL Supabase should redirect to after login.
String ngmyOAuthRedirectUrl() {
  if (kIsWeb) {
    try {
      final uri = Uri.base;
      if (uri.origin.isNotEmpty) return '${uri.origin}${uri.path.endsWith('/') ? uri.path : '${uri.path}/'}';
    } catch (_) {}
    return kNgmyOAuthRedirectUrl;
  }
  return 'io.supabase.flutter://login-callback';
}

/// After OAuth, Supabase redirects back with ?code= or #access_token=.
Future<void> ngmyRecoverOAuthSessionIfNeeded() async {
  if (!kIsWeb) return;
  final uri = Uri.base;
  final hasPkceCode = uri.queryParameters.containsKey('code');
  final hasImplicitToken = uri.fragment.contains('access_token');
  final hasError = uri.queryParameters.containsKey('error') || uri.fragment.contains('error_description');
  if (!hasPkceCode && !hasImplicitToken && !hasError) return;

  try {
    await Supabase.instance.client.auth.getSessionFromUrl(uri);
    ngmyOAuthCleanBrowserUrl(kNgmyOAuthRedirectUrl);
  } catch (e) {
    debugPrint('[ngmy_oauth] session recovery failed: $e');
  }
}

Future<String?> _fetchGoogleClientIdFromSupabase() async {
  if (_cachedGoogleClientId != null && _cachedGoogleClientId!.isNotEmpty) {
    return _cachedGoogleClientId;
  }
  try {
    final uri = Uri.parse('$kNgmySupabaseUrl/auth/v1/authorize').replace(
      queryParameters: {
        'provider': 'google',
        'redirect_to': kNgmyOAuthRedirectUrl,
      },
    );
    final request = http.Request('GET', uri)
      ..headers['apikey'] = kNgmySupabaseAnonKey
      ..headers['Authorization'] = 'Bearer $kNgmySupabaseAnonKey'
      ..followRedirects = false;
    final response = await http.Client().send(request).then(http.Response.fromStream);
    final location = response.headers['location'] ?? response.headers['Location'];
    if (location == null || location.isEmpty) return null;
    final googleUri = Uri.tryParse(location);
    final clientId = googleUri?.queryParameters['client_id'];
    if (clientId != null && clientId.isNotEmpty) {
      _cachedGoogleClientId = clientId;
      return clientId;
    }
  } catch (e) {
    debugPrint('[ngmy_oauth] fetch google client id: $e');
  }
  return null;
}

String _sanitizeOAuthAuthorizeUrl(String oauthUrl, String redirectTo) {
  try {
    final uri = Uri.parse(oauthUrl);
    final params = Map<String, String>.from(uri.queryParameters);
    final current = params['redirect_to'] ?? '';
    if (current.contains('localhost') ||
        current.contains('127.0.0.1') ||
        current.isEmpty ||
        !current.contains('ngmy-ai.github.io')) {
      params['redirect_to'] = redirectTo;
    }
    return uri.replace(queryParameters: params).toString();
  } catch (_) {
    return oauthUrl;
  }
}

Future<String?> _signInWithGoogleIdToken() async {
  final clientId = await _fetchGoogleClientIdFromSupabase();
  if (clientId == null) {
    return 'Could not start Google login. Check Supabase Google provider settings.';
  }
  try {
    final googleSignIn = GoogleSignIn(
      clientId: clientId,
      scopes: const ['email', 'profile', 'openid'],
    );
    await googleSignIn.signOut();
    final account = await googleSignIn.signIn();
    if (account == null) return null;
    final googleAuth = await account.authentication;
    final idToken = googleAuth.idToken;
    if (idToken == null || idToken.isEmpty) {
      return 'Google login failed: no ID token returned.';
    }
    await Supabase.instance.client.auth.signInWithIdToken(
      provider: OAuthProvider.google,
      idToken: idToken,
      accessToken: googleAuth.accessToken,
    );
    return null;
  } catch (e) {
    debugPrint('[ngmy_oauth] google id token sign-in: $e');
    return 'Google login failed: $e';
  }
}

Future<String?> _signInWithOAuthRedirect(OAuthProvider provider) async {
  final redirectTo = ngmyOAuthRedirectUrl();
  try {
    final res = await Supabase.instance.client.auth.getOAuthSignInUrl(
      provider: provider,
      redirectTo: redirectTo,
    );
    final url = _sanitizeOAuthAuthorizeUrl(res.url, redirectTo);
    if (kIsWeb) {
      ngmyOAuthNavigateSameTab(url);
      return null;
    }
    final launched = await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
    if (!launched) {
      return 'Could not open ${provider.name} login. Check your browser settings.';
    }
    return null;
  } catch (e) {
    return _oauthSetupError(provider, e);
  }
}

String _oauthSetupError(OAuthProvider provider, Object e) {
  return '${provider.name.toUpperCase()} login failed.\n\n'
      'Safari shows "localhost" when Supabase Site URL is still set to localhost.\n\n'
      'Fix in Supabase → Authentication → URL Configuration:\n'
      '• Site URL: $kNgmyOAuthRedirectUrl\n'
      '• Redirect URLs: $kNgmyOAuthRedirectUrl\n'
      '• Also add: $kNgmyOAuthLegacyRedirectUrl\n'
      '• Also add: $kNgmyOAuthLegacyRedirectUrl**\n\n'
      'Error: $e';
}

/// Google/GitHub login entry point.
Future<String?> ngmyStartOAuthSignIn(OAuthProvider provider) async {
  if (kIsWeb && provider == OAuthProvider.google) {
    final googleErr = await _signInWithGoogleIdToken();
    if (googleErr == null) return null;
    debugPrint('[ngmy_oauth] Google ID token path failed, trying redirect: $googleErr');
  }
  return _signInWithOAuthRedirect(provider);
}
