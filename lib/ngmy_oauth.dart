import 'package:flutter/foundation.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_oauth_host_stub.dart' if (dart.library.html) 'ngmy_oauth_host_web.dart';
import 'ngmy_oauth_nav_stub.dart' if (dart.library.html) 'ngmy_oauth_nav_web.dart';
import 'ngmy_supabase_config.dart';

/// Canonical production URLs — add both in Supabase Auth → Redirect URLs.
const String kNgmyOAuthRedirectUrl = 'https://ngmy.org/';
const String kNgmyOAuthLegacyRedirectUrl = 'https://ngmy-ai.github.io/NGMY.github.io/';

String? _cachedGoogleClientId;
bool _supabaseAuthInitialized = false;

bool _isLocalDevHost(String host) {
  final h = host.toLowerCase();
  return h == 'localhost' || h == '127.0.0.1' || h.endsWith('.local');
}

/// True when the browser URL is an OAuth return (Google/GitHub callback).
bool ngmyUriHasOAuthCallback() {
  if (!kIsWeb) return false;
  try {
    final uri = Uri.base;
    if (uri.queryParameters.containsKey('code')) return true;
    if (uri.queryParameters.containsKey('error')) return true;
    final frag = uri.fragment;
    if (frag.contains('access_token') || frag.contains('error')) return true;
  } catch (_) {}
  return false;
}

/// OAuth callback URL — real users on ngmy.org always get https://ngmy.org/ (never localhost).
String ngmyOAuthRedirectUrl() {
  if (!kIsWeb) return 'io.supabase.flutter://login-callback';

  final host = ngmyWebHostname().toLowerCase().trim();
  if (host.isNotEmpty && _isLocalDevHost(host)) {
    try {
      final origin = ngmyWebOrigin();
      if (origin.isNotEmpty) {
        var path = Uri.base.path;
        if (!path.endsWith('/')) path = '$path/';
        return '$origin$path';
      }
    } catch (_) {}
    return 'http://localhost:8080/';
  }
  if (host.contains('github.io')) {
    return kNgmyOAuthLegacyRedirectUrl;
  }
  return kNgmyOAuthRedirectUrl;
}

String ngmyOAuthCleanTargetUrl() => ngmyOAuthRedirectUrl();

Future<void> ngmyEnsureSupabaseAuthInitialized() async {
  if (_supabaseAuthInitialized) return;
  try {
    await Supabase.initialize(
      url: kNgmySupabaseUrl,
      anonKey: kNgmySupabaseAnonKey,
      authOptions: const FlutterAuthClientOptions(
        authFlowType: AuthFlowType.pkce,
        detectSessionInUri: true,
      ),
    );
    _supabaseAuthInitialized = true;
  } catch (e) {
    try {
      final _ = Supabase.instance.client;
      _supabaseAuthInitialized = true;
    } catch (_) {
      debugPrint('[ngmy_oauth] supabase init: $e');
      rethrow;
    }
  }
}

Future<void> ngmyRecoverOAuthSessionIfNeeded() async {
  if (!kIsWeb) return;
  final uri = Uri.base;
  final hasPkceCode = uri.queryParameters.containsKey('code');
  final hasImplicitToken = uri.fragment.contains('access_token');
  final hasError = uri.queryParameters.containsKey('error') || uri.fragment.contains('error');
  if (!hasPkceCode && !hasImplicitToken && !hasError) return;

  try {
    await ngmyEnsureSupabaseAuthInitialized();
    await Supabase.instance.client.auth.getSessionFromUrl(uri);
    ngmyOAuthCleanBrowserUrl(ngmyOAuthCleanTargetUrl());
  } catch (e) {
    debugPrint('[ngmy_oauth] session recovery failed: $e');
    try {
      if (Supabase.instance.client.auth.currentSession != null) {
        ngmyOAuthCleanBrowserUrl(ngmyOAuthCleanTargetUrl());
      }
    } catch (_) {}
  }
}

Future<String?> _fetchGoogleClientIdFromSupabase() async {
  if (_cachedGoogleClientId != null && _cachedGoogleClientId!.isNotEmpty) {
    return _cachedGoogleClientId;
  }
  try {
    final redirectTo = ngmyOAuthRedirectUrl();
    final uri = Uri.parse('$kNgmySupabaseUrl/auth/v1/authorize').replace(
      queryParameters: {'provider': 'google', 'redirect_to': redirectTo},
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

String _forceRedirectInOAuthUrl(String oauthUrl, String redirectTo) {
  try {
    final uri = Uri.parse(oauthUrl);
    final params = Map<String, String>.from(uri.queryParameters);
    params['redirect_to'] = redirectTo;
    var out = uri.replace(queryParameters: params).toString();
    final encoded = Uri.encodeComponent(redirectTo);
    out = out.replaceAll(RegExp(r'redirect_to=[^&]*'), 'redirect_to=$encoded');
    out = out.replaceAll('redirect_to=http%3A%2F%2Flocalhost', 'redirect_to=$encoded');
    out = out.replaceAll('redirect_to=http%3A%2F%2F127.0.0.1', 'redirect_to=$encoded');
    return out;
  } catch (_) {
    return oauthUrl;
  }
}

String? _localhostRedirectUserError(String url) {
  if (!kIsWeb) return null;
  final host = ngmyWebHostname().toLowerCase();
  if (_isLocalDevHost(host)) return null;
  if (!url.contains('localhost') && !url.contains('127.0.0.1')) return null;
  return 'Google/GitHub login is pointing to localhost instead of ngmy.org.\n\n'
      'Fix in Supabase → Authentication → URL Configuration:\n'
      '• Site URL: $kNgmyOAuthRedirectUrl\n'
      '• Redirect URLs: $kNgmyOAuthRedirectUrl\n'
      '• Also add: $kNgmyOAuthLegacyRedirectUrl\n\n'
      'Remove any localhost URL from Site URL, then try again.';
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
  await ngmyEnsureSupabaseAuthInitialized();
  final redirectTo = ngmyOAuthRedirectUrl();
  debugPrint('[ngmy_oauth] ${provider.name} host=${ngmyWebHostname()} redirect_to=$redirectTo');
  try {
    final res = await Supabase.instance.client.auth.getOAuthSignInUrl(
      provider: provider,
      redirectTo: redirectTo,
    );
    final url = _forceRedirectInOAuthUrl(res.url, redirectTo);
    final localhostErr = _localhostRedirectUserError(url);
    if (localhostErr != null) {
      debugPrint('[ngmy_oauth] blocked localhost redirect: $url');
      return localhostErr;
    }
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
      'In Supabase → Authentication → URL Configuration set:\n'
      '• Site URL: $kNgmyOAuthRedirectUrl\n'
      '• Redirect URLs: $kNgmyOAuthRedirectUrl and $kNgmyOAuthLegacyRedirectUrl\n\n'
      'Error: $e';
}

Future<String?> ngmyStartOAuthSignIn(OAuthProvider provider) async {
  if (kIsWeb) {
    return _signInWithOAuthRedirect(provider);
  }
  if (provider == OAuthProvider.google) {
    await ngmyEnsureSupabaseAuthInitialized();
    final googleErr = await _signInWithGoogleIdToken();
    if (googleErr == null) return null;
    debugPrint('[ngmy_oauth] Google ID token path failed, trying redirect: $googleErr');
  }
  return _signInWithOAuthRedirect(provider);
}
