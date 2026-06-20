/// Builds Supabase `media` rows for the **live NGMY schema**:

/// id, type, url, videoUrl, contentType, userEmail, description, created_at, data, likedBy, savedBy

/// (caption/comments/username/timestamp live in `description` + `data` when columns are absent)

List<String> ngmyJsonStringList(dynamic raw) {
  if (raw is List) {
    return raw.map((e) => e.toString()).where((e) => e.isNotEmpty).toList();
  }
  return const [];
}

List<Map<String, dynamic>> ngmyJsonMapList(dynamic raw) {
  if (raw is! List) return const [];
  return raw
      .whereType<Map>()
      .map((e) => Map<String, dynamic>.from(e))
      .toList();
}

List<String> ngmyMergeStringLists(List<String> a, List<String> b) {
  return {...a, ...b}.toList();
}

List<Map<String, dynamic>> ngmyMergeCommentLists(
  List<Map<String, dynamic>> a,
  List<Map<String, dynamic>> b,
) {
  final byId = <String, Map<String, dynamic>>{};
  for (final raw in [...a, ...b]) {
    final c = Map<String, dynamic>.from(raw);
    final id = (c['id'] ?? '').toString();
    if (id.isEmpty) continue;
    final existing = byId[id];
    if (existing == null) {
      byId[id] = c;
      continue;
    }
    final replies = ngmyMergeCommentLists(
      ngmyJsonMapList(existing['replies']),
      ngmyJsonMapList(c['replies']),
    );
    final merged = Map<String, dynamic>.from(existing);
    final text = (c['text'] ?? '').toString().trim();
    if (text.isNotEmpty) merged['text'] = text;
    merged['replies'] = replies;
    byId[id] = merged;
  }
  final list = byId.values.toList();
  list.sort((x, y) {
    final tx = DateTime.tryParse((x['timestamp'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
    final ty = DateTime.tryParse((y['timestamp'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
    return tx.compareTo(ty);
  });
  return list;
}

Map<String, dynamic> ngmyMediaRowMinimalForCloud(Map<String, dynamic> raw) {
  final mediaType =
      (raw['contentType'] ?? raw['content_type'] ?? raw['type'] ?? 'video').toString();
  final url = (raw['videoUrl'] ?? raw['video_url'] ?? raw['url'] ?? '').toString();
  final likedBy = raw['likedBy'] ?? raw['liked_by'];
  final savedBy = raw['savedBy'] ?? raw['saved_by'];
  final sharedBy = raw['sharedBy'] ?? raw['shared_by'];
  final caption = (raw['caption'] ?? raw['description'] ?? '').toString();
  final ts = (raw['timestamp'] ?? raw['created_at'] ?? DateTime.now().toUtc().toIso8601String()).toString();
  return {
    'id': (raw['id'] ?? '').toString(),
    'userEmail': (raw['userEmail'] ?? raw['user_email'] ?? '').toString(),
    'videoUrl': url,
    'url': url,
    'contentType': mediaType,
    'type': mediaType,
    'description': caption,
    'likedBy': likedBy is List ? likedBy : const [],
    'savedBy': savedBy is List ? savedBy : const [],
    'data': {
      'caption': caption,
      'timestamp': ts,
      'username': (raw['username'] ?? 'User').toString(),
      'comments': raw['comments'] is List ? raw['comments'] : const [],
      'likes': likedBy is List ? likedBy.length : (raw['likes'] as num?)?.toInt() ?? 0,
      'likedBy': likedBy is List ? likedBy : const [],
      'savedBy': savedBy is List ? savedBy : const [],
      'sharedBy': sharedBy is List ? sharedBy : const [],
    },
  };
}

/// Full row for upsert — matches production Supabase (no `caption` / `timestamp` columns).
Map<String, dynamic> ngmyMediaRowForCloud(Map<String, dynamic> raw) {
  final mediaType =
      (raw['contentType'] ?? raw['content_type'] ?? raw['type'] ?? 'video').toString();
  final url = (raw['videoUrl'] ?? raw['video_url'] ?? raw['url'] ?? '').toString();
  final likedBy = raw['likedBy'] ?? raw['liked_by'];
  final savedBy = raw['savedBy'] ?? raw['saved_by'];
  final sharedBy = raw['sharedBy'] ?? raw['shared_by'];
  final comments = raw['comments'] ?? const [];
  final caption = (raw['caption'] ?? raw['description'] ?? '').toString();
  final ts = (raw['timestamp'] ?? raw['created_at'] ?? DateTime.now().toUtc().toIso8601String()).toString();

  final data = <String, dynamic>{
    'caption': caption,
    'timestamp': ts,
    'username': (raw['username'] ?? 'User').toString(),
    'comments': comments is List ? comments : const [],
    'likes': likedBy is List ? likedBy.length : (raw['likes'] as num?)?.toInt() ?? 0,
    'likedBy': likedBy is List ? likedBy : const [],
    'savedBy': savedBy is List ? savedBy : const [],
    'sharedBy': sharedBy is List ? sharedBy : const [],
  };

  void take(String key) {
    if (raw.containsKey(key) && raw[key] != null) data[key] = raw[key];
  }

  take('taggedUsers');
  take('tagged_users');
  take('mediaAspectRatio');
  take('media_aspect_ratio');
  take('externalLink');
  take('external_link');
  take('previewSeconds');
  take('preview_seconds');
  take('continuePrice');
  take('continue_price');
  take('watchReward');
  take('watch_reward');
  take('watchRequiredSeconds');
  take('watch_required_seconds');
  take('rewardedViewers');
  take('rewarded_viewers');
  take('shareCount');
  if (raw['monetization'] is Map) {
    data['monetization'] = raw['monetization'];
  }

  final row = <String, dynamic>{
    'id': (raw['id'] ?? '').toString(),
    'userEmail': (raw['userEmail'] ?? raw['user_email'] ?? '').toString(),
    'username': (raw['username'] ?? 'User').toString(),
    'videoUrl': url,
    'url': url,
    'contentType': mediaType,
    'type': mediaType,
    'description': caption,
    'likedBy': likedBy is List ? likedBy : const [],
    'savedBy': savedBy is List ? savedBy : const [],
    'sharedBy': sharedBy is List ? sharedBy : const [],
    'data': data,
  };

  row['caption'] = caption;
  row['timestamp'] = ts;
  row['comments'] = comments is List ? comments : const [];
  row['likes'] = likedBy is List ? likedBy.length : (raw['likes'] as num?)?.toInt() ?? 0;
  row['shareCount'] = (raw['shareCount'] as num?)?.toInt() ?? 0;
  row['sharedBy'] = sharedBy is List ? sharedBy : const [];

  return row;
}

/// Merge optional `data` jsonb from Supabase into a flat map for [MediaPost.fromJson].
Map<String, dynamic> ngmyMediaJsonWithData(Map<String, dynamic> json) {
  final out = Map<String, dynamic>.from(json);
  final topLikedBy = ngmyJsonStringList(out['likedBy'] ?? out['liked_by']);
  final topSavedBy = ngmyJsonStringList(out['savedBy'] ?? out['saved_by']);
  final topSharedBy = ngmyJsonStringList(out['sharedBy'] ?? out['shared_by']);
  final topComments = ngmyJsonMapList(out['comments'] ?? out['media_comments']);

  Map<String, dynamic>? nestedMap;
  final nested = json['data'];
  if (nested is Map) {
    nestedMap = Map<String, dynamic>.from(nested);
    out.addAll(nestedMap);
  }

  final dataLikedBy = nestedMap != null ? ngmyJsonStringList(nestedMap['likedBy']) : const <String>[];
  final dataSavedBy = nestedMap != null ? ngmyJsonStringList(nestedMap['savedBy']) : const <String>[];
  final dataSharedBy = nestedMap != null ? ngmyJsonStringList(nestedMap['sharedBy']) : const <String>[];
  final dataComments = nestedMap != null ? ngmyJsonMapList(nestedMap['comments']) : const <Map<String, dynamic>>[];

  out['likedBy'] = ngmyMergeStringLists(topLikedBy, dataLikedBy);
  out['savedBy'] = ngmyMergeStringLists(topSavedBy, dataSavedBy);
  out['sharedBy'] = ngmyMergeStringLists(topSharedBy, dataSharedBy);
  out['comments'] = ngmyMergeCommentLists(topComments, dataComments);
  out['likes'] = out['likedBy'] is List ? (out['likedBy'] as List).length : (out['likes'] as num?)?.toInt() ?? 0;
  final topShare = (out['shareCount'] as num?)?.toInt() ?? 0;
  final dataShare = nestedMap != null ? (nestedMap['shareCount'] as num?)?.toInt() ?? 0 : 0;
  out['shareCount'] = topShare > dataShare ? topShare : dataShare;

  if ((out['caption'] ?? '').toString().isEmpty && (out['description'] ?? '').toString().isNotEmpty) {
    out['caption'] = out['description'];
  }
  if (out['timestamp'] == null && out['created_at'] != null) {
    out['timestamp'] = out['created_at'];
  }
  if ((out['videoUrl'] ?? '').toString().isEmpty && (out['url'] ?? '').toString().isNotEmpty) {
    out['videoUrl'] = out['url'];
  }
  return out;
}
