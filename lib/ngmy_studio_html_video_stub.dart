import 'package:flutter/material.dart';

/// Non-web platforms use [NgmyStudioSlotVideo] with file/network controller instead.
class NgmyStudioHtmlVideo extends StatelessWidget {
  final String source;
  final bool trySoundOnLoad;
  final bool playbackEnabled;

  const NgmyStudioHtmlVideo({
    super.key,
    required this.source,
    this.trySoundOnLoad = false,
    this.playbackEnabled = true,
  });

  @override
  Widget build(BuildContext context) => const SizedBox.shrink();
}
