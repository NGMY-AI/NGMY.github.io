import 'package:flutter/material.dart';

/// Non-web stub — vault ships as web.
class NgmyVaultHtmlVideo extends StatelessWidget {
  const NgmyVaultHtmlVideo({super.key, required this.source});

  final String source;

  @override
  Widget build(BuildContext context) {
    return const ColoredBox(
      color: Colors.black,
      child: Center(child: Icon(Icons.videocam_off_rounded, color: Colors.white38, size: 40)),
    );
  }
}
