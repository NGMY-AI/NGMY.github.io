/// Shared YouTube / embed HTML helpers for virtual device players.
class NgmyVirtualDeviceEmbed {
  static const String _origin = 'https://www.youtube.com';

  /// Builds a mobile-friendly YouTube nocookie embed URL.
  static String youtubeEmbedUrl(
    String videoId, {
    bool autoplay = true,
    bool muted = false,
  }) {
    final params = <String>[
      if (autoplay) 'autoplay=1',
      'playsinline=1',
      'rel=0',
      'modestbranding=1',
      'enablejsapi=1',
      'origin=$_origin',
      if (muted) 'mute=1',
    ];
    return 'https://www.youtube-nocookie.com/embed/$videoId?${params.join('&')}';
  }

  /// HTML wrapper — loading embed URLs directly in WebView often shows
  /// "This video is unavailable" on iOS/Android; an iframe inside HTML fixes it.
  static String iframeHtml(String embedUrl) {
    final escaped = embedUrl
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;');
    return '''
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%;
      height: 100%;
      background: #000;
      overflow: hidden;
    }
    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
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

  static const String htmlBaseUrl = _origin;
}
