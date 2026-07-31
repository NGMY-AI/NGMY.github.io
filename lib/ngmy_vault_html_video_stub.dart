import 'package:flutter/material.dart';

/// Non-web stub — vault ships as web.
class NgmyVaultHtmlVideo extends StatelessWidget {
  const NgmyVaultHtmlVideo({super.key, required this.source, this.mimeType = 'video/mp4'});

  final String source;
  final String mimeType;

  @override
  Widget build(BuildContext context) {
    return const ColoredBox(
      color: Colors.black,
      child: Center(child: Icon(Icons.videocam_off_rounded, color: Colors.white38, size: 40)),
    );
  }
}
