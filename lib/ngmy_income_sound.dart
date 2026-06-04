import 'dart:async';

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Plays a cash/income sound for the signed-in user when they receive money.
class NgmyIncomeSound {
  NgmyIncomeSound._();

  static const kNgmyIncomeSoundAssetDir = 'assets/sounds/';
  static const _prefEnabled = 'ngmy_income_sound_enabled';

  static final AudioPlayer _player = AudioPlayer();
  static String? _sessionEmail;
  static String? _resolvedAsset; // e.g. sounds/income_cash.mp3
  static bool _assetLookupDone = false;
  static bool _webAudioUnlocked = false;
  static DateTime? _lastPlayedAt;
  static const _debounce = Duration(milliseconds: 900);

  static const _candidateFiles = [
    'income_cash.mp3',
    'YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3',
    'income_cash.wav',
    'income_cash.ogg',
    'income_cash.m4a',
  ];

  static void bindSession(String? email) {
    _sessionEmail = email?.toLowerCase().trim();
    if (_sessionEmail != null && _sessionEmail!.isEmpty) _sessionEmail = null;
    unawaited(preload());
  }

  /// Web browsers block audio until a user gesture — call after login / first tap.
  static Future<void> unlockForWebUserGesture() async {
    if (!kIsWeb || _webAudioUnlocked) return;
    await _resolveAssetOnce();
    if (_resolvedAsset == null) return;
    final url = _webAssetUrl(_resolvedAsset!);
    if (url == null) return;
    try {
      await _player.setReleaseMode(ReleaseMode.stop);
      await _player.setSource(UrlSource(url));
      await _player.setVolume(0.001);
      await _player.resume();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await _player.stop();
      await _player.setVolume(1.0);
      _webAudioUnlocked = true;
      debugPrint('[income sound] web audio unlocked');
    } catch (e) {
      debugPrint('[income sound] web unlock: $e');
    }
  }

  static Future<void> preload() async {
    await _resolveAssetOnce();
    if (_resolvedAsset == null) return;
    try {
      await _player.setReleaseMode(ReleaseMode.stop);
      if (kIsWeb) {
        final url = _webAssetUrl(_resolvedAsset!);
        if (url != null) await _player.setSource(UrlSource(url));
      } else {
        await _player.setSource(AssetSource(_resolvedAsset!));
      }
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

  static String? _webAssetUrl(String assetSubPath) {
    if (!kIsWeb) return null;
    return Uri.base.resolve('assets/assets/$assetSubPath').toString();
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
        if (kIsWeb && !_webAudioUnlocked) {
          await unlockForWebUserGesture();
        }
        await _player.stop();
        await _player.setReleaseMode(ReleaseMode.stop);
        await _player.setVolume(1.0);
        if (kIsWeb) {
          final url = _webAssetUrl(_resolvedAsset!);
          if (url != null) {
            await _player.play(UrlSource(url), volume: 1.0);
            return;
          }
        } else {
          await _player.play(AssetSource(_resolvedAsset!));
        }
        return;
      } catch (e) {
        debugPrint('[income sound] play error: $e');
      }
    }

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
