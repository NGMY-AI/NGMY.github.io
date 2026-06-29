/// Shared YouTube / embed HTML helpers for virtual device players.
class NgmyVirtualDeviceEmbed {
  static const String videoEndedMessage = 'ngmy-vd-ended';
  static const String htmlBaseUrl = 'https://www.youtube.com';
  /// Parent page origin for YouTube embed API (must match PWA host).
  static const String embedOrigin = 'https://ngmy.org';

  /// Builds a mobile-friendly YouTube embed URL (www.youtube.com — works in PWA iframes).
  static String youtubeEmbedUrl(
    String videoId, {
    bool autoplay = true,
    bool muted = false,
    String origin = embedOrigin,
  }) {
    final params = <String>[
      if (autoplay) 'autoplay=1',
      'playsinline=1',
      'rel=0',
      'modestbranding=1',
      'enablejsapi=1',
      'origin=$origin',
      if (muted) 'mute=1',
    ];
    return 'https://www.youtube.com/embed/$videoId?${params.join('&')}';
  }

  static String? extractYouTubeVideoId(String url) {
    final m = RegExp(
      r'(?:youtube\.com/embed/|youtube-nocookie\.com/embed/|[?&]v=|youtu\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})',
    ).firstMatch(url);
    return m?.group(1);
  }

  static bool isYouTubeUrl(String url) {
    final lower = url.toLowerCase();
    return lower.contains('youtube') || lower.contains('youtu.be');
  }

  /// Simple single-iframe page for WebView (TikTok, Instagram, Facebook, muted YouTube).
  static String genericIframeHtml(String embedUrl) {
    final escaped = embedUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
    return '''
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }
    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
  </style>
</head>
<body>
  <iframe
    src="$escaped"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</body>
</html>
''';
  }

  /// YouTube player using IFrame API on a div (required for ENDED events — do not wrap an existing iframe).
  static String youtubePlayerHtml(
    String videoId, {
    bool muted = false,
    bool notifyOnEnd = false,
    String origin = embedOrigin,
  }) {
    final muteFlag = muted ? 1 : 0;
    final eventsBlock = notifyOnEnd
        ? '''
        events: {
          onStateChange: function (e) {
            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();
          }
        },'''
        : '';
    return '''
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }
    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="ngmy-yt-host"></div>
  <script>
    function ngmyNotifyEnded() {
      try {
        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {
          window.NgmyVideoEnded.postMessage('$videoEndedMessage');
        }
      } catch (e) {}
      try { window.parent.postMessage('$videoEndedMessage', '*'); } catch (e) {}
    }
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
    function onYouTubeIframeAPIReady() {
      new YT.Player('ngmy-yt-host', {
        width: '100%',
        height: '100%',
        videoId: '$videoId',
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          enablejsapi: 1,
          origin: '$origin',
          mute: $muteFlag
        }$eventsBlock
      });
    }
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  </script>
</body>
</html>
''';
  }

  /// Pick the best HTML/load strategy for a play URL.
  static String iframeHtml(String playUrl, {bool notifyOnEnd = false, bool muted = false}) {
    final ytId = extractYouTubeVideoId(playUrl);
    if (ytId != null) {
      if (notifyOnEnd) {
        return youtubePlayerHtml(ytId, muted: muted, notifyOnEnd: true);
      }
      return genericIframeHtml(youtubeEmbedUrl(ytId, muted: muted));
    }
    return genericIframeHtml(playUrl);
  }
}
