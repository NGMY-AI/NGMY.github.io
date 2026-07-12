import 'package:flutter/material.dart';

/// Non-web stubs for Live Capture media helpers.
class NgmyLiveCaptureMedia {
  static Widget liveCameraPreview({required Object? stream, double height = 180}) {
    return Container(
      height: height,
      alignment: Alignment.center,
      decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(18)),
      child: const Text('Camera preview needs the web app', style: TextStyle(color: Colors.white54)),
    );
  }

  static Widget playbackVideo({required String src, double height = 200}) {
    return Container(
      height: height,
      alignment: Alignment.center,
      decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(18)),
      child: const Icon(Icons.videocam_off_rounded, color: Colors.white38, size: 40),
    );
  }

  static Future<NgmyCapturePlayer?> createPlayer(String src, {required bool video}) async => null;

  static Future<void> downloadQuiet(String dataUrl, String mimeType, String title) async {}
}

class NgmyCapturePlayer {
  bool get playing => false;
  double get position => 0;
  double get duration => 0;
  double playbackRate = 1;

  Future<void> play() async {}
  Future<void> pause() async {}
  Future<void> seek(double seconds) async {}
  Future<void> setRate(double rate) async {}
  void dispose() {}
  void listen(VoidCallback onTick) {}
  void unlisten(VoidCallback onTick) {}
}
