import 'package:flutter/foundation.dart';

import 'ngmy_virtual_device_embed.dart';

enum NgmyVirtualMediaPlatform { youtube, tiktok, instagram, facebook, other }

class NgmyVirtualMediaTarget {
  const NgmyVirtualMediaTarget({
    required this.originalUrl,
    required this.playUrl,
    required this.platform,
    required this.label,
    this.previewImageUrl,
    this.youtubeVideoId,
  });

  final String originalUrl;
  /// URL loaded in the single shared player (mobile-friendly when possible).
  final String playUrl;
  final NgmyVirtualMediaPlatform platform;
  final String label;
  final String? previewImageUrl;
  final String? youtubeVideoId;

  /// Master player (with sound). Grid mirrors use [playUrlMuted].
  String get playUrlAudible => playUrl;

  /// Muted autoplay for grid mirrors — avoids 20+ overlapping audio streams.
  String get playUrlMuted {
    final id = youtubeVideoId;
    if (id != null && id.isNotEmpty) {
      return NgmyVirtualDeviceEmbed.youtubeEmbedUrl(id, muted: true);
    }
    return playUrl;
  }

  bool get usesEmbedHtml =>
      platform == NgmyVirtualMediaPlatform.youtube ||
      platform == NgmyVirtualMediaPlatform.tiktok ||
      platform == NgmyVirtualMediaPlatform.instagram ||
      platform == NgmyVirtualMediaPlatform.facebook;
}

/// Shared playback — one pasted link, one real player; grid uses lightweight previews.
class NgmyVirtualDevicePlayback {
  static final ValueNotifier<NgmyVirtualMediaTarget?> active = ValueNotifier(null);
  static int deviceCount = 20;

  static void clear() => active.value = null;
}

class NgmyVirtualDeviceMedia {
  static NgmyVirtualMediaTarget? parse(String raw) {
    final trimmed = raw.trim().replaceAll(RegExp(r'[\u200B-\u200D\uFEFF]'), '');
    if (trimmed.isEmpty) return null;
    final url = trimmed.startsWith('http') ? trimmed : 'https://$trimmed';
    final lower = url.toLowerCase();

    final ytId = _youtubeId(lower);
    if (ytId != null) {
      // youtube.com/watch sends X-Frame-Options: SAMEORIGIN — only /embed/ works.
      // Use youtube-nocookie + HTML iframe wrapper for reliable mobile WebView playback.
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        playUrl: NgmyVirtualDeviceEmbed.youtubeEmbedUrl(ytId, muted: false),
        platform: NgmyVirtualMediaPlatform.youtube,
        label: 'YouTube',
        previewImageUrl: 'https://img.youtube.com/vi/$ytId/hqdefault.jpg',
        youtubeVideoId: ytId,
      );
    }

    final ttId = _tiktokId(lower);
    if (ttId != null) {
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        playUrl: 'https://www.tiktok.com/player/v1/$ttId?music_info=0&description=0',
        platform: NgmyVirtualMediaPlatform.tiktok,
        label: 'TikTok',
      );
    }

    final ig = _instagramTarget(url, lower);
    if (ig != null) return ig;

    final fb = _facebookTarget(url, lower);
    if (fb != null) return fb;

    if (lower.contains('tiktok.com') ||
        lower.contains('instagram.com') ||
        lower.contains('facebook.com') ||
        lower.contains('fb.watch')) {
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        playUrl: url,
        platform: NgmyVirtualMediaPlatform.other,
        label: 'Video',
      );
    }

    if (lower.contains('youtube.com') || lower.contains('youtu.be')) {
      return null;
    }

    return null;
  }

  static NgmyVirtualMediaTarget? _instagramTarget(String url, String lower) {
    final reel = RegExp(r'instagram\.com/reel/([a-zA-Z0-9_-]+)').firstMatch(lower);
    if (reel != null) {
      final code = reel.group(1)!;
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        playUrl: 'https://www.instagram.com/reel/$code/embed/captioned/?cr=1&v=14',
        platform: NgmyVirtualMediaPlatform.instagram,
        label: 'Instagram',
      );
    }
    final post = RegExp(r'instagram\.com/(?:p|tv)/([a-zA-Z0-9_-]+)').firstMatch(lower);
    if (post != null) {
      final code = post.group(1)!;
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        playUrl: 'https://www.instagram.com/p/$code/embed/captioned/?cr=1&v=14',
        platform: NgmyVirtualMediaPlatform.instagram,
        label: 'Instagram',
      );
    }
    return null;
  }

  static NgmyVirtualMediaTarget? _facebookTarget(String url, String lower) {
    if (!lower.contains('facebook.com') && !lower.contains('fb.watch') && !lower.contains('fb.com')) {
      return null;
    }
    final encoded = Uri.encodeComponent(url);
    return NgmyVirtualMediaTarget(
      originalUrl: url,
      playUrl: 'https://www.facebook.com/plugins/video.php?href=$encoded&show_text=false&width=734',
      platform: NgmyVirtualMediaPlatform.facebook,
      label: 'Facebook',
    );
  }

  static String? _youtubeId(String url) {
    final patterns = [
      RegExp(r'(?:youtube\.com/embed/|youtube-nocookie\.com/embed/|[?&]v=|youtu\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})'),
      RegExp(r'youtube\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})'),
      RegExp(r'm\.youtube\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})'),
      RegExp(r'music\.youtube\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})'),
      RegExp(r'youtube\.com/v/([a-zA-Z0-9_-]{11})'),
      RegExp(r'youtube\.com/shorts/([a-zA-Z0-9_-]{11})'),
    ];
    for (final p in patterns) {
      final id = p.firstMatch(url)?.group(1);
      if (id != null && id.length == 11) return id;
    }
    return null;
  }

  static String? _tiktokId(String url) {
    final m = RegExp(r'tiktok\.com/@[^/]+/video/(\d+)').firstMatch(url);
    if (m != null) return m.group(1);
    return RegExp(r'tiktok\.com/t/(\w+)').firstMatch(url)?.group(1);
  }
}
