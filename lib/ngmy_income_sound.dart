import 'dart:async';
import 'dart:convert';



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

  static const _prefPlayedKeys = 'ngmy_income_sound_played_keys';

  static final Set<String> _playedDedupeKeys = {};



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
  /// Does not play the income clip (that sounded like cash on every app open).

  static Future<void> unlockForWebUserGesture() async {

    if (!kIsWeb || _webAudioUnlocked) return;

    _webAudioUnlocked = true;

    debugPrint('[income sound] web audio unlocked (silent)');

  }



  /// Resolve asset path only — loading into the player on open caused audible glitches on web.

  static Future<void> preload() async {

    await _resolveAssetOnce();

  }



  static Future<void> seedPlayedKeys(Iterable<String> keys) async {

    for (final raw in keys) {

      final k = raw.trim();

      if (k.isNotEmpty) _playedDedupeKeys.add(k);

    }

    try {

      final prefs = await SharedPreferences.getInstance();

      final raw = prefs.getString(_prefPlayedKeys);

      if (raw != null && raw.trim().isNotEmpty) {

        final list = jsonDecode(raw);

        if (list is List) {

          for (final e in list) {

            final s = e.toString().trim();

            if (s.isNotEmpty) _playedDedupeKeys.add(s);

          }

        }

      }

    } catch (_) {}

  }



  static Future<void> _persistPlayedKeys() async {

    try {

      final prefs = await SharedPreferences.getInstance();

      final keys = _playedDedupeKeys.toList();

      if (keys.length > 800) keys.removeRange(0, keys.length - 800);

      await prefs.setString(_prefPlayedKeys, jsonEncode(keys));

    } catch (_) {}

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

    String? dedupeKey,

    bool force = false,

  }) async {

    if (amount < 0.01) return;

    final ben = beneficiaryEmail.toLowerCase().trim();

    final me = _sessionEmail ?? '';

    if (me.isEmpty || ben != me) return;

    if (!(await isEnabled())) return;



    final key = dedupeKey?.trim();

    if (key != null && key.isNotEmpty) {

      if (_playedDedupeKeys.contains(key)) return;

      _playedDedupeKeys.add(key);

      unawaited(_persistPlayedKeys());

    }



    final now = DateTime.now();

    if (!force && _lastPlayedAt != null && now.difference(_lastPlayedAt!) < _debounce) return;

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


