// What a pasted link is: a YouTube or Vimeo video, a video file, or an ordinary web page.

enum VPhoneLinkKind { youtube, vimeo, file, page, invalid }

class VPhoneLink {
  const VPhoneLink(this.kind, this.url, this.embed, this.title);

  final VPhoneLinkKind kind;

  /// The address as the person pasted it (with https added when it was missing).
  final String url;

  /// The address that is shown in the player (the embed address of YouTube and Vimeo, the file itself otherwise).
  final String embed;
  final String title;

  bool get playable => kind != VPhoneLinkKind.invalid;

  static const none = VPhoneLink(VPhoneLinkKind.invalid, '', '', '');
}

const _fileEnds = ['.mp4', '.m4v', '.mov', '.webm', '.ogv', '.ogg', '.m3u8', '.mp3', '.m4a', '.wav', '.aac', '.flac', '.mkv', '.3gp'];

/// Works out what [raw] is. Never throws: a bad link gives [VPhoneLink.none].
VPhoneLink parseVideoLink(String raw) {
  var s = raw.trim();
  if (s.isEmpty || s.contains(RegExp(r'\s'))) return VPhoneLink.none;
  if (!s.contains('://')) s = 'https://$s';
  final uri = Uri.tryParse(s);
  if (uri == null || uri.host.isEmpty || !uri.host.contains('.') || (uri.scheme != 'https' && uri.scheme != 'http')) return VPhoneLink.none;
  final host = uri.host.toLowerCase().replaceFirst(RegExp(r'^www\.'), '');
  final segs = uri.pathSegments.where((p) => p.isNotEmpty).toList();

  String? yt;
  if (host == 'youtu.be' && segs.isNotEmpty) {
    yt = segs.first;
  } else if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
    if (uri.queryParameters['v'] != null) {
      yt = uri.queryParameters['v'];
    } else if (segs.length >= 2 && const ['embed', 'shorts', 'live', 'v'].contains(segs.first)) {
      yt = segs[1];
    }
  }
  if (yt != null && RegExp(r'^[A-Za-z0-9_-]{6,15}$').hasMatch(yt)) {
    final t = uri.queryParameters['t'] ?? uri.queryParameters['start'];
    final start = int.tryParse((t ?? '').replaceAll('s', ''));
    final embed = 'https://www.youtube-nocookie.com/embed/$yt?autoplay=1&playsinline=1&rel=0&modestbranding=1${start != null ? '&start=$start' : ''}';
    return VPhoneLink(VPhoneLinkKind.youtube, s, embed, 'YouTube video $yt');
  }
  if (host == 'vimeo.com' || host == 'player.vimeo.com') {
    final id = segs.reversed.firstWhere((p) => RegExp(r'^\d{4,}$').hasMatch(p), orElse: () => '');
    if (id.isNotEmpty) return VPhoneLink(VPhoneLinkKind.vimeo, s, 'https://player.vimeo.com/video/$id?autoplay=1&playsinline=1', 'Vimeo video $id');
  }
  final path = uri.path.toLowerCase();
  if (_fileEnds.any(path.endsWith)) {
    final name = segs.isEmpty ? host : Uri.decodeComponent(segs.last);
    return VPhoneLink(VPhoneLinkKind.file, s, s, name);
  }
  return VPhoneLink(VPhoneLinkKind.page, s, s, host);
}
