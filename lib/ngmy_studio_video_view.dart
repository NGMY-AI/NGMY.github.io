import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

/// Avoids [LateInitializationError] from reading [VideoPlayerController.value] too early.
class NgmyStudioVideoView extends StatelessWidget {
  final VideoPlayerController? controller;

  const NgmyStudioVideoView({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    final c = controller;
    if (c == null) {
      return const SizedBox.shrink();
    }
    return AnimatedBuilder(
      animation: c,
      builder: (context, _) {
        if (!c.value.isInitialized) {
          return const Center(
            child: SizedBox(
              width: 28,
              height: 28,
              child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
            ),
          );
        }
        final size = c.value.size;
        final w = size.width > 0 ? size.width : 16.0;
        final h = size.height > 0 ? size.height : 9.0;
        return FittedBox(
          fit: BoxFit.cover,
          clipBehavior: Clip.hardEdge,
          child: SizedBox(width: w, height: h, child: VideoPlayer(c)),
        );
      },
    );
  }
}
