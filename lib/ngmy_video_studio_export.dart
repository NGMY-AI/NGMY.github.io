import 'ngmy_video_studio_export_stub.dart' if (dart.library.html) 'ngmy_video_studio_export_web.dart' as impl;
import 'ngmy_video_studio_models.dart';

Future<String> exportNgmyVideoStudioComposed({
  required NgmyVideoStudioExportConfig config,
  void Function(double progress, String status)? onProgress,
}) {
  return impl.exportNgmyVideoStudioComposed(config: config, onProgress: onProgress);
}

Future<String> exportNgmyVideoStudioDirect({
  required String videoSourceUrl,
}) {
  return impl.exportNgmyVideoStudioDirect(videoSourceUrl: videoSourceUrl);
}
