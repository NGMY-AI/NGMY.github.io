/// Builds Supabase `media` rows — core columns first, extras in `data` jsonb when present.
Map<String, dynamic> ngmyMediaRowForCloud(Map<String, dynamic> raw) {
  final mediaType =
      (raw['contentType'] ?? raw['content_type'] ?? raw['type'] ?? 'video').toString();
  final url = (raw['videoUrl'] ?? raw['video_url'] ?? raw['url'] ?? '').toString();
  final likedBy = raw['likedBy'] ?? raw['liked_by'];
  final savedBy = raw['savedBy'] ?? raw['saved_by'];
  final comments = raw['comments'] ?? const [];

  final row = <String, dynamic>{
    'id': (raw['id'] ?? '').toString(),
    'userEmail': (raw['userEmail'] ?? raw['user_email'] ?? '').toString(),
    'username': (raw['username'] ?? 'User').toString(),
    'videoUrl': url,
    'url': url,
    'contentType': mediaType,
    'type': mediaType,
    'caption': (raw['caption'] ?? '').toString(),
    'timestamp': (raw['timestamp'] ?? DateTime.now().toUtc().toIso8601String()).toString(),
    'comments': comments is List ? comments : const [],
    'likedBy': likedBy is List ? likedBy : const [],
    'savedBy': savedBy is List ? savedBy : const [],
    'likes': likedBy is List ? likedBy.length : (raw['likes'] as num?)?.toInt() ?? 0,
  };

  final data = <String, dynamic>{};
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
  if (raw['monetization'] is Map) {
    data['monetization'] = raw['monetization'];
  }

  if (data.isNotEmpty) {
    row['data'] = data;
  }
  return row;
}

/// Merge optional `data` jsonb from Supabase into a flat map for [MediaPost.fromJson].
Map<String, dynamic> ngmyMediaJsonWithData(Map<String, dynamic> json) {
  final out = Map<String, dynamic>.from(json);
  final nested = json['data'];
  if (nested is Map) {
    out.addAll(Map<String, dynamic>.from(nested));
  }
  return out;
}
