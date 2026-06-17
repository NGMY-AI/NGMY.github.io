import 'ngmy_video_studio_models.dart';

Future<String> exportNgmyVideoStudioComposed({
  required NgmyVideoStudioExportConfig config,
  void Function(double progress, String status)? onProgress,
}) async {
  return 'Video download works in the NGMY web app. Open https://ngmy-ai.github.io/NGMY.github.io/ in Chrome or Edge to export with templates.';
}

Future<String> exportNgmyVideoStudioDirect({
  required String videoSourceUrl,
}) async {
  return 'Direct download works in the NGMY web app (Chrome or Edge).';
}

void cancelNgmyVideoStudioExport() {}
