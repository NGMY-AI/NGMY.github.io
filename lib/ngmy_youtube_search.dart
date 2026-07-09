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

/// Local config first, then cloud (Supabase `config` row) — same pattern as
/// [ngmyResolveGeminiApiKey] in ngmy_ai_client.dart.
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

/// Searches YouTube (Data API v3 `search.list`) — needs an API key from
/// [ngmyResolveYouTubeApiKey]. Throws on network/API errors so the caller can
/// show a specific message (missing key vs quota vs network).
Future<List<NgmyYouTubeSearchResult>> ngmySearchYouTube(
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
