import 'dart:async';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Plays a cash/income sound for the signed-in user when they receive money.
///
/// Add your audio file (any one of these names) under [kNgmyIncomeSoundAssetDir]:
///   - income_cash.mp3  (recommended)
///   - income_cash.wav
///   - income_cash.ogg
class NgmyIncomeSound {
  NgmyIncomeSound._();

  static const kNgmyIncomeSoundAssetDir = 'assets/sounds/';
  static const _prefEnabled = 'ngmy_income_sound_enabled';

  static final AudioPlayer _player = AudioPlayer();
  static String? _sessionEmail;
  static String? _resolvedAsset; // e.g. sounds/income_cash.mp3
  static bool _assetLookupDone = false;
  static DateTime? _lastPlayedAt;
  static const _debounce = Duration(milliseconds: 900);

  static const _candidateFiles = [
    'income_cash.mp3',
    'YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3',
    'income_cash.wav',
    'income_cash.ogg',
    'income_cash.m4a',
  ];

  /// Call when the logged-in user changes (login / logout / switch).
  static void bindSession(String? email) {
    _sessionEmail = email?.toLowerCase().trim();
    if (_sessionEmail != null && _sessionEmail!.isEmpty) _sessionEmail = null;
    unawaited(preload());
  }

  /// Warm up the asset so the first payout plays without delay.
  static Future<void> preload() async {
    await _resolveAssetOnce();
    if (_resolvedAsset == null) return;
    try {
      await _player.setReleaseMode(ReleaseMode.stop);
      await _player.setSource(AssetSource(_resolvedAsset!));
    } catch (e) {
      debugPrint('[income sound] preload: $e');
    }
  }

  static Future<bool> isEnabled() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getBool(_prefEnabled) ?? true;
    } catch (_) {
      return true;
    }
  }

  static Future<void> setEnabled(bool value) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_prefEnabled, value);
    } catch (_) {}
  }

  static Future<void> _resolveAssetOnce() async {
    if (_assetLookupDone) return;
    _assetLookupDone = true;
    for (final name in _candidateFiles) {
      final path = '$kNgmyIncomeSoundAssetDir$name';
      try {
        await rootBundle.load(path);
        _resolvedAsset = 'sounds/$name';
        debugPrint('[income sound] using $_resolvedAsset');
        return;
      } catch (_) {}
    }
    debugPrint(
      '[income sound] no audio in $kNgmyIncomeSoundAssetDir — add income_cash.mp3 (see README there)',
    );
  }

  /// Play for [beneficiaryEmail] when it matches the active session and [amount] > 0.
  static Future<void> playForUser({
    required String beneficiaryEmail,
    required double amount,
  }) async {
    if (amount < 0.01) return;
    final ben = beneficiaryEmail.toLowerCase().trim();
    final me = _sessionEmail ?? '';
    if (me.isEmpty || ben != me) return;
    if (!(await isEnabled())) return;

    final now = DateTime.now();
    if (_lastPlayedAt != null && now.difference(_lastPlayedAt!) < _debounce) return;
    _lastPlayedAt = now;

    await _resolveAssetOnce();
    if (_resolvedAsset != null) {
      try {
        await _player.stop();
        await _player.setReleaseMode(ReleaseMode.stop);
        await _player.setVolume(1.0);
        if (kIsWeb) {
          await _player.play(AssetSource(_resolvedAsset!), volume: 1.0);
        } else {
          await _player.play(AssetSource(_resolvedAsset!));
        }
        return;
      } catch (e) {
        debugPrint('[income sound] play error: $e');
      }
    }

    // Soft fallback until you add income_cash.mp3
    try {
      if (!kIsWeb) {
        await SystemSound.play(SystemSoundType.click);
      }
    } catch (_) {}
  }

  static void dispose() {
    unawaited(_player.dispose());
  }
}
