import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

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
  static const _prefPlayedKeys = 'ngmy_income_sound_played_keys';
  static final Set<String> _playedDedupeKeys = {};
  static bool _playedKeysLoaded = false;

  static const _candidateFiles = [
    'income_cash.mp3',
    'YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3',
    'income_cash.wav',
    'income_cash.ogg',
    'income_cash.m4a',
  ];

  /// While the app opens and the account reloads, money that was already there is "found"
  /// again — that must never ring. Only money that arrives after this moment does.
  static DateTime _quietUntil = DateTime.now().add(const Duration(seconds: 25));

  static void bindSession(String? email) {
    final next = email?.toLowerCase().trim();
    if (next != _sessionEmail) _quietUntil = DateTime.now().add(const Duration(seconds: 25));
    _sessionEmail = next;
    if (_sessionEmail != null && _sessionEmail!.isEmpty) _sessionEmail = null;
    unawaited(preload());
  }

  /// A tiny silent clip. Unlocking audio used to play the cash sound itself at "1% volume" —
  /// but iPhones ignore volume from web pages, so it rang at full volume every time the app
  /// was opened or tapped.
  static String _silentWavDataUrl() {
    const rate = 8000, samples = 400; // 50 ms of silence, 8-bit mono
    final b = BytesBuilder();
    void str(String s) => b.add(s.codeUnits);
    void u32(int v) => b.add([v & 255, (v >> 8) & 255, (v >> 16) & 255, (v >> 24) & 255]);
    void u16(int v) => b.add([v & 255, (v >> 8) & 255]);
    str('RIFF');
    u32(36 + samples);
    str('WAVEfmt ');
    u32(16);
    u16(1);
    u16(1);
    u32(rate);
    u32(rate);
    u16(1);
    u16(8);
    str('data');
    u32(samples);
    b.add(List<int>.filled(samples, 128));
    return 'data:audio/wav;base64,${base64Encode(b.toBytes())}';
  }

  /// Web browsers block audio until a user gesture — prime the player on tap/login (silently).
  static Future<void> unlockForWebUserGesture() async {
    if (!kIsWeb || _webAudioUnlocked) return;
    _webAudioUnlocked = true;
    try {
      await _player.play(UrlSource(_silentWavDataUrl()), volume: 0);
      debugPrint('[income sound] web audio unlocked (silent)');
    } catch (e) {
      _webAudioUnlocked = false;
      debugPrint('[income sound] web unlock failed: $e');
    }
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

  static Future<void> _ensurePlayedKeysLoaded() async {
    if (_playedKeysLoaded) return;
    _playedKeysLoaded = true;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefPlayedKeys);
      if (raw == null || raw.trim().isEmpty) return;
      final list = jsonDecode(raw);
      if (list is! List) return;
      for (final e in list) {
        final s = e.toString().trim();
        if (s.isNotEmpty) _playedDedupeKeys.add(s);
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
    /// When the money actually arrived. Older than a few minutes = it's just being reloaded.
    DateTime? happenedAt,
  }) async {
    if (amount < 0.01) return;
    final ben = beneficiaryEmail.toLowerCase().trim();
    final me = _sessionEmail ?? '';
    if (me.isEmpty || ben != me) return;

    await _ensurePlayedKeysLoaded();
    final key = dedupeKey?.trim();
    // Same money never rings twice (also across refreshes).
    if (key != null && key.isNotEmpty) {
      if (_playedDedupeKeys.contains(key)) return;
      _playedDedupeKeys.add(key);
      unawaited(_persistPlayedKeys());
    }
    // App just opened / balance reloading, or old money found again → stay quiet.
    final now = DateTime.now();
    if (now.isBefore(_quietUntil)) return;
    if (happenedAt != null && now.difference(happenedAt).abs() > const Duration(minutes: 5)) return;
    if (!(await isEnabled())) return;

    if (kIsWeb && !_webAudioUnlocked) {
      await unlockForWebUserGesture();
    }

    await _resolveAssetOnce();
    if (_resolvedAsset != null) {
      try {
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
