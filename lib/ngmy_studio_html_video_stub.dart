import 'package:flutter/material.dart';

/// Non-web platforms use [NgmyStudioSlotVideo] with file/network controller instead.
class NgmyStudioHtmlVideo extends StatelessWidget {
  final String source;
  final bool trySoundOnLoad;

  const NgmyStudioHtmlVideo({super.key, required this.source, this.trySoundOnLoad = false});

  @override
  Widget build(BuildContext context) => const SizedBox.shrink();
}
