import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

import 'ngmy_supabase_config.dart';

/// Same-origin REST path on web — service worker proxies to Supabase PostgREST.
const String kNgmyRestPublicPath = '/api/rest/v1';

String _ngmyWebBasePath() {
  if (!kIsWeb) return '';
  final path = Uri.base.path;
  if (path.isEmpty || path == '/') return '';
  return path.endsWith('/') ? path.substring(0, path.length - 1) : path;
}

/// Public REST URL — web uses [/api/rest/v1], native uses Supabase directly.
Uri ngmySupabaseRestUri(String pathAndQuery) {
  final trimmed = pathAndQuery.startsWith('/') ? pathAndQuery : '/$pathAndQuery';
  if (!kIsWeb) {
    return Uri.parse('${kNgmySupabaseUrl.trim()}/rest/v1$trimmed');
  }
  return Uri.parse('${Uri.base.origin}${_ngmyWebBasePath()}$kNgmyRestPublicPath$trimmed');
}

bool _shouldProxySupabaseRest(Uri uri) {
  if (!kIsWeb) return false;
  final base = kNgmySupabaseUrl.trim();
  if (base.isEmpty) return false;
  final upstream = Uri.parse(base);
  return uri.host == upstream.host && uri.path.startsWith('/rest/v1/');
}

Uri _proxiedRestUri(Uri uri) {
  final suffix = uri.path.substring('/rest/v1'.length);
  return Uri.parse('${Uri.base.origin}${_ngmyWebBasePath()}$kNgmyRestPublicPath$suffix')
      .replace(queryParameters: uri.queryParameters.isEmpty ? null : uri.queryParameters);
}

/// Rewrites Supabase PostgREST calls to same-origin [/api/rest/v1] on web.
class NgmyWebRestProxyClient extends http.BaseClient {
  NgmyWebRestProxyClient([http.Client? inner]) : _inner = inner ?? http.Client();

  final http.Client _inner;

  @override
  Future<http.StreamedResponse> send(http.BaseRequest request) async {
    if (_shouldProxySupabaseRest(request.url)) {
      final proxied = _proxiedRestUri(request.url);
      if (request is http.Request) {
        return _inner.send(http.Request(request.method, proxied)
          ..headers.addAll(request.headers)
          ..bodyBytes = request.bodyBytes
          ..encoding = request.encoding
          ..followRedirects = request.followRedirects
          ..maxRedirects = request.maxRedirects
          ..persistentConnection = request.persistentConnection);
      }
      if (request is http.MultipartRequest) {
        final copy = http.MultipartRequest(request.method, proxied)
          ..headers.addAll(request.headers)
          ..followRedirects = request.followRedirects
          ..maxRedirects = request.maxRedirects
          ..persistentConnection = request.persistentConnection;
        copy.fields.addAll(request.fields);
        for (final f in request.files) {
          copy.files.add(f);
        }
        return _inner.send(copy);
      }
      if (request is http.StreamedRequest) {
        final copy = http.StreamedRequest(request.method, proxied)
          ..headers.addAll(request.headers)
          ..followRedirects = request.followRedirects
          ..maxRedirects = request.maxRedirects
          ..persistentConnection = request.persistentConnection
          ..contentLength = request.contentLength;
        await request.finalize().pipe(copy.sink);
        return _inner.send(copy);
      }
    }
    return _inner.send(request);
  }

  @override
  void close() {
    _inner.close();
    super.close();
  }
}
