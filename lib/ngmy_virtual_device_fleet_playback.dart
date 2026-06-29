import 'dart:async';

import 'package:flutter/foundation.dart';

import 'ngmy_virtual_device_media.dart';

/// Rotates muted grid players — only [batchSize] devices play at once.
class NgmyVirtualDeviceFleetPlayback {
  static const int batchSize = 4;

  static final ValueNotifier<int> batchStart = ValueNotifier(0);
  static int _totalDevices = 20;
  static Timer? _fallbackTimer;

  static void syncDeviceCount(int count) {
    _totalDevices = count.clamp(1, 999);
    final maxStart = _maxBatchStart(_totalDevices);
    if (batchStart.value > maxStart) batchStart.value = 0;
  }

  static int _maxBatchStart(int total) {
    if (total <= batchSize) return 0;
    return ((total - 1) ~/ batchSize) * batchSize;
  }

  static int batchCount(int total) => (total + batchSize - 1) ~/ batchSize;

  static int batchIndexForDevice(int deviceIndex) => deviceIndex ~/ batchSize;

  static bool isActiveSlot(int deviceIndex) {
    if (NgmyVirtualDevicePlayback.active.value == null) return false;
    final start = batchStart.value;
    return deviceIndex >= start && deviceIndex < start + batchSize;
  }

  static String batchLabel(int deviceIndex, int total) {
    final batch = batchIndexForDevice(deviceIndex) + 1;
    final batches = batchCount(total);
    return 'Fold $batch/$batches';
  }

  static String activeRangeLabel(int total) {
    final start = batchStart.value + 1;
    final end = (batchStart.value + batchSize).clamp(1, total);
    return 'Devices $start–$end of $total';
  }

  static void startForMedia(NgmyVirtualMediaTarget media) {
    batchStart.value = 0;
    _armFallbackTimer(media);
  }

  static void stop() {
    _fallbackTimer?.cancel();
    _fallbackTimer = null;
    batchStart.value = 0;
  }

  static void onVideoEnded() {
    if (NgmyVirtualDevicePlayback.active.value == null) return;
    _fallbackTimer?.cancel();
    final total = _totalDevices;
    if (total <= batchSize) {
      _armFallbackTimer(NgmyVirtualDevicePlayback.active.value!);
      return;
    }
    final next = batchStart.value + batchSize;
    batchStart.value = next >= total ? 0 : next;
    _armFallbackTimer(NgmyVirtualDevicePlayback.active.value!);
  }

  /// Live streams / embeds that never fire ENDED still rotate on a long fallback.
  static void _armFallbackTimer(NgmyVirtualMediaTarget media) {
    _fallbackTimer?.cancel();
    final seconds = switch (media.platform) {
      NgmyVirtualMediaPlatform.youtube => 180,
      NgmyVirtualMediaPlatform.tiktok => 60,
      NgmyVirtualMediaPlatform.instagram => 90,
      NgmyVirtualMediaPlatform.facebook => 120,
      NgmyVirtualMediaPlatform.other => 120,
    };
    _fallbackTimer = Timer(Duration(seconds: seconds), onVideoEnded);
  }
}
