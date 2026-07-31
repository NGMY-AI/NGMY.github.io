import 'package:flutter/material.dart';

/// Non-web fallback — solid tile background.
class NgmyVaultVideoPreview extends StatelessWidget {
  const NgmyVaultVideoPreview({super.key, required this.source, this.mimeType = 'video/mp4'});

  final String source;
  final String mimeType;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF241B3A), Color(0xFF151024)],
        ),
      ),
    );
  }
}
