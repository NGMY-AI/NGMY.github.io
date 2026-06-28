import 'package:flutter/foundation.dart';

enum NgmyVirtualMediaPlatform { youtube, tiktok, instagram, other }

class NgmyVirtualMediaTarget {
  const NgmyVirtualMediaTarget({
    required this.originalUrl,
    required this.embedUrl,
    required this.platform,
    required this.label,
    this.previewImageUrl,
  });

  final String originalUrl;
  final String embedUrl;
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
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        embedUrl: 'https://www.youtube.com/embed/$ytId?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1',
        platform: NgmyVirtualMediaPlatform.youtube,
        label: 'YouTube',
        previewImageUrl: 'https://img.youtube.com/vi/$ytId/hqdefault.jpg',
      );
    }

    final ttId = _tiktokId(lower);
    if (ttId != null) {
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        embedUrl: 'https://www.tiktok.com/embed/v2/$ttId',
        platform: NgmyVirtualMediaPlatform.tiktok,
        label: 'TikTok',
      );
    }

    final igCode = _instagramCode(lower);
    if (igCode != null) {
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        embedUrl: 'https://www.instagram.com/p/$igCode/embed/captioned',
        platform: NgmyVirtualMediaPlatform.instagram,
        label: 'Instagram',
      );
    }

    if (lower.contains('tiktok.com') ||
        lower.contains('instagram.com') ||
        lower.contains('youtube.com') ||
        lower.contains('youtu.be')) {
      return NgmyVirtualMediaTarget(
        originalUrl: url,
        embedUrl: url,
        platform: NgmyVirtualMediaPlatform.other,
        label: 'Video',
      );
    }

    return null;
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

  static String? _instagramCode(String url) {
    return RegExp(r'instagram\.com/(?:reel|p|tv)/([a-zA-Z0-9_-]+)').firstMatch(url)?.group(1);
  }
}
