import 'dart:html' as html;

import 'package:flutter/material.dart';

import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_virtual_device_embed.dart';

html.Element? _bgHost;

/// Web background player — mounts on [document.body].
///
/// Mobile Safari / Chrome PWAs often hang forever on YouTube `autoplay=1`
/// when the iframe is created after a bottom sheet closes (stale gesture).
/// So we show a thumbnail + **Tap to play** first, and only load the iframe
/// inside a real button click.
void showBackgroundPlayer(BuildContext context, {required String url, String? title}) {
  final videoId = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(url);
  if (videoId == null) {
    ScaffoldMessenger.maybeOf(context)?.showSnackBar(
      const SnackBar(content: Text('Could not read that YouTube link.')),
    );
    return;
  }

  stopBackgroundPlayer();

  final label = (title?.trim().isNotEmpty == true) ? title!.trim() : 'Now playing';
  final bottomPx = NgmyBottomNavMetrics.barHeight + 36;
  final thumbUrl = 'https://i.ytimg.com/vi/$videoId/hqdefault.jpg';

  final host = html.DivElement()
    ..id = 'ngmy-bg-music-host'
    ..style.cssText = '''
      position: fixed;
      right: 14px;
      bottom: ${bottomPx}px;
      width: min(420px, calc(100vw - 28px));
      z-index: 2147483000;
      border-radius: 18px;
      overflow: hidden;
      background: #0B1020;
      box-shadow: 0 10px 28px rgba(0,0,0,0.4);
      border: 1px solid rgba(124,58,237,0.4);
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    ''';

  final header = html.DivElement()
    ..style.cssText = '''
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px 8px 12px;
      color: #fff;
      font-size: 12px;
      font-weight: 800;
    ''';

  final titleEl = html.SpanElement()
    ..text = label
    ..style.cssText = 'flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;';

  final soundBtn = html.ButtonElement()
    ..text = '🔊 Sound'
    ..title = 'Unmute'
    ..style.cssText = _btnStyle(filled: true)
    ..style.display = 'none';

  final minBtn = html.ButtonElement()
    ..text = '—'
    ..title = 'Minimize'
    ..style.cssText = _iconBtnStyle();

  final closeBtn = html.ButtonElement()
    ..text = '✕'
    ..title = 'Stop'
    ..style.cssText = _iconBtnStyle();

  final frameWrap = html.DivElement()
    ..style.cssText = 'position: relative; width: 100%; padding-top: 56.25%; background: #000;';

  // Poster + Tap to play (no iframe yet — avoids the infinite spinner).
  final poster = html.DivElement()
    ..style.cssText = '''
      position: absolute;
      inset: 0;
      background: #000 center/cover no-repeat url("$thumbUrl");
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    ''';

  final playBtn = html.ButtonElement()
    ..text = '▶  Tap to play'
    ..style.cssText = '''
      border: none;
      border-radius: 999px;
      padding: 14px 22px;
      background: #7C3AED;
      color: #fff;
      font-weight: 900;
      font-size: 15px;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
    ''';

  poster.append(playBtn);
  frameWrap.append(poster);

  html.IFrameElement? iframe;
  var muted = false;
  var minimized = false;
  var started = false;

  String embedSrc({required bool autoplay, required bool mute}) {
    // Keep params minimal — extra origin/jsapi flags can break mobile embeds.
    final params = <String>[
      if (autoplay) 'autoplay=1',
      'playsinline=1',
      'rel=0',
      'modestbranding=1',
      'controls=1',
      if (mute) 'mute=1',
    ];
    return 'https://www.youtube.com/embed/$videoId?${params.join('&')}';
  }

  void startPlayback({required bool withSound}) {
    if (started && iframe != null) {
      muted = !withSound;
      iframe!.src = embedSrc(autoplay: true, mute: muted);
      soundBtn.text = muted ? '🔊 Sound' : '🔇 Mute';
      return;
    }
    started = true;
    muted = !withSound;
    poster.remove();

    iframe = html.IFrameElement()
      ..allowFullscreen = true
      ..style.cssText = 'position:absolute; inset:0; width:100%; height:100%; border:none;'
      ..setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen',
      );
    // Set src in the same user-gesture turn as the tap.
    iframe!.src = embedSrc(autoplay: true, mute: muted);
    frameWrap.append(iframe!);
    soundBtn.style.display = 'inline-block';
    soundBtn.text = muted ? '🔊 Sound' : '🔇 Mute';
  }

  // Critical: attach listeners directly so the click is a real user gesture.
  playBtn.onClick.listen((event) {
    event.stopPropagation();
    startPlayback(withSound: true);
  });
  poster.onClick.listen((_) => startPlayback(withSound: true));

  soundBtn.onClick.listen((_) {
    if (!started) {
      startPlayback(withSound: true);
      return;
    }
    muted = !muted;
    if (iframe != null) {
      iframe!.src = embedSrc(autoplay: true, mute: muted);
    }
    soundBtn.text = muted ? '🔊 Sound' : '🔇 Mute';
  });

  minBtn.onClick.listen((_) {
    minimized = !minimized;
    if (minimized) {
      frameWrap.style.display = 'none';
      host.style.width = '220px';
      minBtn.text = '□';
      minBtn.title = 'Expand';
    } else {
      frameWrap.style.display = 'block';
      host.style.width = 'min(420px, calc(100vw - 28px))';
      minBtn.text = '—';
      minBtn.title = 'Minimize';
    }
  });

  closeBtn.onClick.listen((_) => stopBackgroundPlayer());

  header.children.addAll([titleEl, soundBtn, minBtn, closeBtn]);
  host.children.addAll([header, frameWrap]);
  html.document.body?.append(host);
  _bgHost = host;
}

String _btnStyle({bool filled = false}) => '''
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  background: ${filled ? '#7C3AED' : 'rgba(255,255,255,0.1)'};
  color: #fff;
  font-weight: 800;
  font-size: 11px;
  cursor: pointer;
''';

String _iconBtnStyle() => '''
  border: none;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-weight: 900;
  cursor: pointer;
''';

void stopBackgroundPlayer() {
  _bgHost?.remove();
  _bgHost = null;
}
