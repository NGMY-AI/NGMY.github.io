import 'package:video_player/video_player.dart';

VideoPlayerController? createStudioVideoController(String src) {
  if (src.startsWith('blob:') || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return VideoPlayerController.networkUrl(
      Uri.parse(src),
      videoPlayerOptions: VideoPlayerOptions(mixWithOthers: true),
    );
  }
  return null;
}
