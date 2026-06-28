import 'package:flutter/foundation.dart';

enum NgmyVirtualMediaPlatform { youtube, tiktok, instagram, facebook, other }

class NgmyVirtualMediaTarget {
  const NgmyVirtualMediaTarget({
    required this.originalUrl,
    required this.playUrl,
    required this.platform,
    required this.label,
    this.previewImageUrl,
  });

  final String originalUrl;
  /// URL loaded in the single shared player (mobile-friendly when possible).
  final String playUrl;
  final NgmyVirtualMediaPlatform platform;
  final String label;
  final String? previewImageUrl;
}

/// Shared playback — one pasted link, one real player; grid uses lightweight previews.
class NgmyVirtualDevicePlayback {
  static final ValueNotifier<NgmyVirtualMediaTarget?> active = ValueNotifier(null);
  static int deviceCount = 20;

  static void clear() => active.value = null;
}

class NgmyVirtualDeviceMedia {
  static NgmyVirtualMediaTarget? parse(String raw) {
    final trimmed = raw.trim();
    if (trimmed.isEmpty) return null;
    final url = trimmed.startsWith('http') ? trimmed : 'https://$trimmed';
    final lower = url.toLowerCase();

    final ytId = _youtubeId(lower);
    if (ytId != null) {
      // youtube.com/watch (even on m.youtube.com) sends X-Frame-Options:
      // SAMEORIGIN, so browsers refuse to show it in our iframe at all.
      // Only the dedicated /embed/ endpoint is allowed to be framed.
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        playUrl: 'https://www.youtube.com/embed/$ytId?autoplay=1&playsinline=1&rel=0&modestbranding=1',
        platform: NgmyVirtualMediaPlatform.youtube,
        label: 'YouTube',
        previewImageUrl: 'https://img.youtube.com/vi/$ytId/hqdefault.jpg',
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
        lower.contains('fb.watch') ||
        lower.contains('youtube.com') ||
        lower.contains('youtu.be')) {
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        playUrl: url,
        platform: NgmyVirtualMediaPlatform.other,
        label: 'Video',
      );
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
    final watch = RegExp(
      r'(?:youtube\.com/watch\?(?:[^&]*&)*v=|youtu\.be/|youtube\.com/shorts/|youtube\.com/embed/)([a-zA-Z0-9_-]{11})',
    );
    return watch.firstMatch(url)?.group(1);
  }

  static String? _tiktokId(String url) {
    final m = RegExp(r'tiktok\.com/@[^/]+/video/(\d+)').firstMatch(url);
    if (m != null) return m.group(1);
    return RegExp(r'tiktok\.com/t/(\w+)').firstMatch(url)?.group(1);
  }
}
