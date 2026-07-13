import 'package:flutter/material.dart';

String ngmyCleanMediaMime(String mime) {
  final base = mime.split(';').first.trim().toLowerCase();
  if (base.startsWith('audio/') || base.startsWith('video/') || base.startsWith('application/')) {
    return base;
  }
  return 'application/octet-stream';
}

class NgmyLiveCaptureMedia {
  static Widget liveCameraPreview({required Object? stream, double height = 200, bool mirror = true}) {
    return Container(
      height: height,
      alignment: Alignment.center,
      decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(18)),
      child: const Text('Camera preview needs the web app', style: TextStyle(color: Colors.white54)),
    );
  }

  static Widget playbackVideo({required String src, required String mimeType, double height = 220, Key? key}) {
    return Container(
      key: key,
      height: height,
      alignment: Alignment.center,
      decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(18)),
      child: const Icon(Icons.videocam_off_rounded, color: Colors.white38, size: 40),
    );
  }

  static Widget playbackAudio({required String src, required String mimeType, double height = 52, Key? key}) {
    return Container(
      key: key,
      height: height,
      alignment: Alignment.center,
      color: const Color(0xFF0F172A),
      child: const Text('Audio playback needs the web app', style: TextStyle(color: Colors.white54)),
    );
  }

  static String toPlayableUrl(String src, String mimeType) => src;

  static Future<NgmyCapturePlayer?> createPlayer(String src, {required bool video, String? mimeType}) async => null;

  static void downloadSync(String dataUrl, String mimeType, String title) {}

  static Future<void> downloadQuiet(String dataUrl, String mimeType, String title) async {}
}

class NgmyCapturePlayer {
  bool get playing => false;
  double get position => 0;
  double get duration => 0;
  double playbackRate = 1;
  String? lastError;

  Future<void> play() async {}
  Future<void> pause() async {}
  Future<void> seek(double seconds) async {}
  Future<void> setRate(double rate) async {}
  void dispose() {}
  void listen(VoidCallback onTick) {}
  void unlisten(VoidCallback onTick) {}
}
