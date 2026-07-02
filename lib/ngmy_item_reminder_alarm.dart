import 'dart:async';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/services.dart';

/// Loud looping alarm while a "Where I Put It" reminder popup is showing.
class NgmyItemReminderAlarm {
  NgmyItemReminderAlarm._();

  static Timer? _pulseTimer;
  static AudioPlayer? _player;
  static bool _running = false;

  static const _assetCandidates = [
    'sounds/item_reminder_alarm.mp3',
    'sounds/item_reminder_alarm.wav',
    'sounds/income_cash.mp3',
    'sounds/income_cash.wav',
  ];

  static Future<void> start() async {
    if (_running) return;
    _running = true;
    await stop();

    final played = await _tryAssetLoop();
    if (!played) {
      _startPulseFallback();
    } else {
      _startPulseFallback(silent: true);
    }
  }

  static Future<void> stop() async {
    _running = false;
    _pulseTimer?.cancel();
    _pulseTimer = null;
    try {
      await _player?.stop();
      await _player?.dispose();
    } catch (_) {}
    _player = null;
  }

  static Future<bool> _tryAssetLoop() async {
    for (final asset in _assetCandidates) {
      try {
        await rootBundle.load('assets/$asset');
        _player = AudioPlayer();
        await _player!.setReleaseMode(ReleaseMode.loop);
        await _player!.setVolume(1.0);
        await _player!.play(AssetSource(asset));
        return true;
      } catch (_) {
        try {
          await _player?.dispose();
        } catch (_) {}
        _player = null;
      }
    }
    return false;
  }

  static void _startPulseFallback({bool silent = false}) {
    _pulseTimer?.cancel();
    var ticks = 0;
    _pulseTimer = Timer.periodic(const Duration(milliseconds: 420), (_) {
      if (!_running) return;
      ticks++;
      if (ticks > 48) {
        stop();
        return;
      }
      if (!silent) {
        unawaited(SystemSound.play(SystemSoundType.alert));
      }
      try {
        HapticFeedback.heavyImpact();
      } catch (_) {}
    });
    if (!silent) {
      unawaited(SystemSound.play(SystemSoundType.alert));
    }
    try {
      HapticFeedback.heavyImpact();
    } catch (_) {}
  }
}
