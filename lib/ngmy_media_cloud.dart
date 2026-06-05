/// Builds Supabase `media` rows for the **live NGMY schema**:

/// id, type, url, videoUrl, contentType, userEmail, description, created_at, data, likedBy, savedBy

/// (caption/comments/username/timestamp live in `description` + `data` when columns are absent)

Map<String, dynamic> ngmyMediaRowMinimalForCloud(Map<String, dynamic> raw) {

  final mediaType =

      (raw['contentType'] ?? raw['content_type'] ?? raw['type'] ?? 'video').toString();

  final url = (raw['videoUrl'] ?? raw['video_url'] ?? raw['url'] ?? '').toString();

  final likedBy = raw['likedBy'] ?? raw['liked_by'];

  final savedBy = raw['savedBy'] ?? raw['saved_by'];

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

  final comments = raw['comments'] ?? const [];

  final caption = (raw['caption'] ?? raw['description'] ?? '').toString();

  final ts = (raw['timestamp'] ?? raw['created_at'] ?? DateTime.now().toUtc().toIso8601String()).toString();



  final data = <String, dynamic>{

    'caption': caption,

    'timestamp': ts,

    'username': (raw['username'] ?? 'User').toString(),

    'comments': comments is List ? comments : const [],

    'likes': likedBy is List ? likedBy.length : (raw['likes'] as num?)?.toInt() ?? 0,

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

    'data': data,

  };



  // Legacy installs that ran media_tables.sql may have these columns — safe to include;

  // missing-column handler strips them on older/live mixed schemas.

  row['caption'] = caption;

  row['timestamp'] = ts;

  row['comments'] = comments is List ? comments : const [];

  row['likes'] = likedBy is List ? likedBy.length : (raw['likes'] as num?)?.toInt() ?? 0;



  return row;

}



/// Merge optional `data` jsonb from Supabase into a flat map for [MediaPost.fromJson].

Map<String, dynamic> ngmyMediaJsonWithData(Map<String, dynamic> json) {

  final out = Map<String, dynamic>.from(json);

  final nested = json['data'];

  if (nested is Map) {

    out.addAll(Map<String, dynamic>.from(nested));

  }

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


