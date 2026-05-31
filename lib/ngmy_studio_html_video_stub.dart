import 'package:flutter/material.dart';

/// Non-web platforms use [NgmyStudioSlotVideo] with file/network controller instead.
class NgmyStudioHtmlVideo extends StatelessWidget {
  final String source;

  const NgmyStudioHtmlVideo({super.key, required this.source});

  @override
  Widget build(BuildContext context) => const SizedBox.shrink();
}
