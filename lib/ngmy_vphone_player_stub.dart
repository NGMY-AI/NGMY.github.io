import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_vphone_link.dart';

/// The player of the virtual phone off the web: video files play here, other links open in the phone's browser.
class VPhonePlayer extends StatefulWidget {
  const VPhonePlayer({super.key, required this.link});
  final VPhoneLink link;

  @override
  State<VPhonePlayer> createState() => _VPhonePlayerState();
}

class _VPhonePlayerState extends State<VPhonePlayer> {
  VideoPlayerController? _c;
  String? _error;

  @override
  void initState() {
    super.initState();
    if (widget.link.kind == VPhoneLinkKind.file) {
      final c = VideoPlayerController.networkUrl(Uri.parse(widget.link.embed));
      _c = c;
      c.initialize().then((_) {
        if (!mounted) return;
        setState(() {});
        c.play();
      }).catchError((Object _) {
        if (mounted) setState(() => _error = 'This link could not be played. It may not be a video file.');
      });
    }
  }

  @override
  void dispose() {
    _c?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final c = _c;
    if (c == null || _error != null) {
      return Container(
        color: Colors.black,
        alignment: Alignment.center,
        padding: const EdgeInsets.all(16),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Text(_error ?? 'This kind of link plays in the phone browser.', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70)),
          const SizedBox(height: 10),
          FilledButton(onPressed: () => launchUrl(Uri.parse(widget.link.url), mode: LaunchMode.externalApplication), child: const Text('Open the link')),
        ]),
      );
    }
    if (!c.value.isInitialized) return const ColoredBox(color: Colors.black, child: Center(child: CircularProgressIndicator()));
    return GestureDetector(
      onTap: () => c.value.isPlaying ? c.pause() : c.play(),
      child: ColoredBox(color: Colors.black, child: Center(child: AspectRatio(aspectRatio: c.value.aspectRatio, child: VideoPlayer(c)))),
    );
  }
}
