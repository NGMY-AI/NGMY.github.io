import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_supabase_columns.dart';

const _kNgmyYouTubeConfigRowId = '1';

String _ngmyYouTubeKeyFromMap(Map<String, dynamic>? json) {
  if (json == null) return '';
  for (final field in ['youtubeApiKey', 'youtube_api_key']) {
    final v = json[field]?.toString().trim();
    if (v != null && v.isNotEmpty) return v;
  }
  return '';
}

Future<Map<String, dynamic>?> _ngmyFetchConfigRowForYouTube() async {
  final client = Supabase.instance.client;
  for (final id in [_kNgmyYouTubeConfigRowId, 1]) {
    try {
      final row = await client
          .from('config')
          .select(NgmySupabaseColumns.youtubeOnly)
          .eq('id', id)
          .maybeSingle()
          .timeout(const Duration(seconds: 15));
      if (row != null) return Map<String, dynamic>.from(row);
    } catch (e) {
      debugPrint('[ngmy-yt] config fetch id=$id: $e');
    }
  }
  try {
    final row = await client.from('config').select(NgmySupabaseColumns.youtubeOnly).limit(1).maybeSingle().timeout(const Duration(seconds: 15));
    if (row != null) return Map<String, dynamic>.from(row);
  } catch (e) {
    debugPrint('[ngmy-yt] config fetch fallback: $e');
  }
  return null;
}

/// Local config first, then cloud (Supabase `config` row).
/// If no dedicated YouTube key is set, a Google Gemini key (AIza…) from the
/// same Cloud project can work when YouTube Data API v3 is enabled.
Future<String> ngmyResolveYouTubeApiKey({String localKey = '', dynamic config, int retries = 2}) async {
  var key = localKey.trim();
  if (key.isEmpty && config != null) {
    try {
      key = (config as dynamic).youtubeApiKey?.toString().trim() ?? '';
    } catch (_) {}
  }
  for (var attempt = 0; attempt < retries && key.isEmpty; attempt++) {
    if (attempt > 0) await Future<void>.delayed(Duration(milliseconds: 350 * attempt));
    try {
      key = _ngmyYouTubeKeyFromMap(await _ngmyFetchConfigRowForYouTube());
    } catch (e) {
      debugPrint('[ngmy-yt] fetch key: $e');
    }
  }
  if (key.isEmpty && config != null) {
    try {
      final gemini = (config as dynamic).geminiApiKey?.toString().trim() ?? '';
      if (gemini.startsWith('AIza')) key = gemini;
    } catch (_) {}
  }
  if (key.isNotEmpty && config != null) {
    try {
      (config as dynamic).youtubeApiKey = key;
    } catch (_) {}
  }
  return key;
}

class NgmyYouTubeSearchResult {
  const NgmyYouTubeSearchResult({
    required this.videoId,
    required this.title,
    required this.channelTitle,
    required this.thumbnailUrl,
  });

  final String videoId;
  final String title;
  final String channelTitle;
  final String thumbnailUrl;

  String get watchUrl => 'https://www.youtube.com/watch?v=$videoId';
}

/// Searches YouTube. Prefers Data API v3 when [apiKey] is set.
/// On native (no browser CORS), falls back to public innertube search.
Future<List<NgmyYouTubeSearchResult>> ngmySearchYouTube(
  String query, {
  String apiKey = '',
  int maxResults = 20,
}) async {
  final q = query.trim();
  if (q.isEmpty) return const [];

  Object? keyedError;
  if (apiKey.trim().isNotEmpty) {
    try {
      final keyed = await _searchWithGoogleApi(q, apiKey: apiKey.trim(), maxResults: maxResults);
      if (keyed.isNotEmpty) return keyed;
    } catch (e) {
      keyedError = e;
      debugPrint('[ngmy-yt] google api search failed: $e');
    }
  }

  // Browser CORS blocks innertube from ngmy.org — only try it off-web.
  if (!kIsWeb) {
    try {
      return await _searchWithInnertube(q, maxResults: maxResults);
    } catch (e) {
      debugPrint('[ngmy-yt] innertube search failed: $e');
      if (keyedError != null) {
        throw Exception(keyedError.toString().replaceFirst('Exception: ', ''));
      }
      rethrow;
    }
  }

  if (apiKey.trim().isEmpty) {
    throw Exception(
      'Song search needs a YouTube API key. Ask the admin to add one in NGMY AI settings, '
      'or paste a YouTube link instead.',
    );
  }
  throw Exception(
    keyedError?.toString().replaceFirst('Exception: ', '') ??
        'Song search failed. Check the YouTube API key, or paste a YouTube link.',
  );
}

Future<List<NgmyYouTubeSearchResult>> _searchWithGoogleApi(
  String query, {
  required String apiKey,
  int maxResults = 20,
}) async {
  final uri = Uri.https('www.googleapis.com', '/youtube/v3/search', {
    'part': 'snippet',
    'type': 'video',
    'maxResults': '$maxResults',
    'safeSearch': 'moderate',
    'q': query,
    'key': apiKey,
  });
  final res = await http.get(uri).timeout(const Duration(seconds: 15));
  if (res.statusCode != 200) {
    final dynamic body = jsonDecode(res.body);
    String? message;
    if (body is Map) {
      final err = body['error'];
      if (err is Map) message = err['message']?.toString();
    }
    throw Exception(message ?? 'YouTube search failed (${res.statusCode})');
  }
  final dynamic data = jsonDecode(res.body);
  final items = (data is Map ? data['items'] : null) as List<dynamic>? ?? const [];
  return items
      .map((dynamic item) {
        final id = item['id'];
        final snippet = item['snippet'];
        final videoId = id is Map ? id['videoId']?.toString() : null;
        if (videoId == null || videoId.isEmpty || snippet is! Map) return null;
        final thumbnails = snippet['thumbnails'];
        final thumb = thumbnails is Map
            ? (thumbnails['medium'] ?? thumbnails['default'] ?? thumbnails['high'])
            : null;
        return NgmyYouTubeSearchResult(
          videoId: videoId,
          title: snippet['title']?.toString() ?? 'Untitled',
          channelTitle: snippet['channelTitle']?.toString() ?? '',
          thumbnailUrl: thumb is Map ? (thumb['url']?.toString() ?? '') : '',
        );
      })
      .whereType<NgmyYouTubeSearchResult>()
      .toList();
}

/// Public YouTube innertube search — works without a Google API key.
Future<List<NgmyYouTubeSearchResult>> _searchWithInnertube(String query, {int maxResults = 20}) async {
  final uri = Uri.https('www.youtube.com', '/youtubei/v1/search', {'prettyPrint': 'false'});
  final body = jsonEncode({
    'context': {
      'client': {
        'clientName': 'WEB',
        'clientVersion': '2.20240101.00.00',
        'hl': 'en',
        'gl': 'US',
      },
    },
    'query': query,
  });

  final res = await http
      .post(
        uri,
        headers: {
          'Content-Type': 'application/json',
          'X-YouTube-Client-Name': '1',
          'X-YouTube-Client-Version': '2.20240101.00.00',
          'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        body: body,
      )
      .timeout(const Duration(seconds: 20));

  if (res.statusCode != 200) {
    throw Exception('Song search failed (${res.statusCode}). Try pasting a YouTube link instead.');
  }

  final dynamic data = jsonDecode(res.body);
  final out = <NgmyYouTubeSearchResult>[];
  final seen = <String>{};
  _collectVideoRenderers(data, out, seen, maxResults);
  if (out.isEmpty) {
    throw Exception('No songs found for "$query". Try another name, or paste a YouTube link.');
  }
  return out;
}

void _collectVideoRenderers(
  dynamic node,
  List<NgmyYouTubeSearchResult> out,
  Set<String> seen,
  int maxResults,
) {
  if (out.length >= maxResults || node == null) return;

  if (node is Map) {
    final renderer = node['videoRenderer'];
    if (renderer is Map) {
      final videoId = renderer['videoId']?.toString() ?? '';
      if (videoId.length == 11 && seen.add(videoId)) {
        final title = _innertubeText(renderer['title']) ?? 'Untitled';
        final channel = _innertubeText(renderer['ownerText']) ??
            _innertubeText(renderer['longBylineText']) ??
            _innertubeText(renderer['shortBylineText']) ??
            '';
        String thumb = '';
        final thumbs = renderer['thumbnail'];
        if (thumbs is Map) {
          final list = thumbs['thumbnails'];
          if (list is List && list.isNotEmpty) {
            final last = list.last;
            if (last is Map) thumb = last['url']?.toString() ?? '';
          }
        }
        if (thumb.isEmpty) {
          thumb = 'https://i.ytimg.com/vi/$videoId/hqdefault.jpg';
        }
        out.add(
          NgmyYouTubeSearchResult(
            videoId: videoId,
            title: title,
            channelTitle: channel,
            thumbnailUrl: thumb,
          ),
        );
      }
    }
    for (final value in node.values) {
      _collectVideoRenderers(value, out, seen, maxResults);
      if (out.length >= maxResults) return;
    }
  } else if (node is List) {
    for (final item in node) {
      _collectVideoRenderers(item, out, seen, maxResults);
      if (out.length >= maxResults) return;
    }
  }
}

String? _innertubeText(dynamic node) {
  if (node == null) return null;
  if (node is String) return node;
  if (node is Map) {
    final simple = node['simpleText']?.toString();
    if (simple != null && simple.isNotEmpty) return simple;
    final runs = node['runs'];
    if (runs is List) {
      final buf = StringBuffer();
      for (final run in runs) {
        if (run is Map) {
          final t = run['text']?.toString();
          if (t != null) buf.write(t);
        }
      }
      final s = buf.toString().trim();
      if (s.isNotEmpty) return s;
    }
  }
  return null;
}
