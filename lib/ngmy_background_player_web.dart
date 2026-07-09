import 'dart:html' as html;

import 'package:flutter/material.dart';

import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_virtual_device_embed.dart';

html.Element? _bgHost;

/// Web background player — mounts a real DOM iframe on [document.body] so
/// YouTube can autoplay. Flutter [HtmlElementView] inside an [Overlay] often
/// stays stuck on loading and never plays.
void showBackgroundPlayer(BuildContext context, {required String url, String? title}) {
  final videoId = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(url);
  if (videoId == null) {
    ScaffoldMessenger.maybeOf(context)?.showSnackBar(
      const SnackBar(content: Text('Could not read that YouTube link.')),
    );
    return;
  }

  stopBackgroundPlayer();

  final embedUrl = NgmyVirtualDeviceEmbed.youtubeEmbedUrl(videoId, muted: true, autoplay: true);
  final label = (title?.trim().isNotEmpty == true) ? title!.trim() : 'Now playing';
  final bottomPx = NgmyBottomNavMetrics.barHeight + 36;

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

  final muteBtn = html.ButtonElement()
    ..text = '🔊 Sound'
    ..title = 'Tap to unmute'
    ..style.cssText = '''
      border: none;
      border-radius: 8px;
      padding: 6px 10px;
      background: #7C3AED;
      color: #fff;
      font-weight: 800;
      font-size: 11px;
      cursor: pointer;
    ''';

  final minBtn = html.ButtonElement()
    ..text = '—'
    ..title = 'Minimize'
    ..style.cssText = '''
      border: none;
      border-radius: 8px;
      width: 30px;
      height: 30px;
      background: rgba(255,255,255,0.1);
      color: #fff;
      font-weight: 900;
      cursor: pointer;
    ''';

  final closeBtn = html.ButtonElement()
    ..text = '✕'
    ..title = 'Stop'
    ..style.cssText = '''
      border: none;
      border-radius: 8px;
      width: 30px;
      height: 30px;
      background: rgba(255,255,255,0.1);
      color: #fff;
      font-weight: 900;
      cursor: pointer;
    ''';

  final frameWrap = html.DivElement()
    ..style.cssText = 'position: relative; width: 100%; padding-top: 56.25%; background: #000;';

  final iframe = html.IFrameElement()
    ..src = embedUrl
    ..allowFullscreen = true
    ..style.cssText = 'position:absolute; inset:0; width:100%; height:100%; border:none;'
    ..setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen',
    )
    ..setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

  var muted = true;
  var minimized = false;

  muteBtn.onClick.listen((_) {
    muted = !muted;
    iframe.src = NgmyVirtualDeviceEmbed.youtubeEmbedUrl(videoId, muted: muted, autoplay: true);
    muteBtn.text = muted ? '🔊 Sound' : '🔇 Mute';
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

  header.children.addAll([titleEl, muteBtn, minBtn, closeBtn]);
  frameWrap.append(iframe);
  host.children.addAll([header, frameWrap]);
  html.document.body?.append(host);
  _bgHost = host;
}

void stopBackgroundPlayer() {
  _bgHost?.remove();
  _bgHost = null;
}
