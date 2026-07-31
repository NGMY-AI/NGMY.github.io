import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Full-screen vault player — controls live in the HTML layer so taps work on
/// Flutter web (HtmlElementView sits above Flutter widgets and steals hits).
class NgmyVaultHtmlVideo extends StatefulWidget {
  const NgmyVaultHtmlVideo({super.key, required this.source, this.mimeType = 'video/mp4'});

  final String source;
  final String mimeType;

  @override
  State<NgmyVaultHtmlVideo> createState() => _NgmyVaultHtmlVideoState();
}

class _NgmyVaultHtmlVideoState extends State<NgmyVaultHtmlVideo> {
  late final String _viewType;
  html.VideoElement? _video;
  String? _error;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vault-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) => _buildDomPlayer());
  }

  html.Element _buildDomPlayer() {
    final root = html.DivElement()
      ..style.width = '100%'
      ..style.height = '100%'
      ..style.position = 'relative'
      ..style.backgroundColor = '#000'
      ..style.overflow = 'hidden'
      ..style.touchAction = 'manipulation';

    final v = html.VideoElement()
      ..controls = false
      ..preload = 'auto'
      ..autoplay = false
      ..muted = false
      ..setAttribute('playsinline', 'true')
      ..setAttribute('webkit-playsinline', 'true')
      ..style.width = '100%'
      ..style.height = '100%'
      ..style.objectFit = 'contain'
      ..style.display = 'block'
      ..style.pointerEvents = 'none';

    final mime = widget.mimeType.trim().isEmpty ? 'video/mp4' : widget.mimeType.trim();
    v.src = widget.source;
    try {
      v.append(html.SourceElement()
        ..src = widget.source
        ..type = mime);
    } catch (_) {}

    _video = v;
    root.append(v);

    var userMuted = false;

    const playSvg = '<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';
    const pauseSvg = '<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    const muteSvg = '<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
    const volSvg = '<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
    const replaySvg = '<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>';
    const centerPlaySvg = '<svg width="44" height="44" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>';

    // Tap layer — covers video area above transport bar.
    final tapLayer = html.DivElement()
      ..style.position = 'absolute'
      ..style.left = '0'
      ..style.right = '0'
      ..style.top = '0'
      ..style.bottom = '96px'
      ..style.zIndex = '2'
      ..style.cursor = 'pointer'
      ..style.backgroundColor = 'transparent';

    // Single center play / pause affordance.
    final centerBtn = html.DivElement()
      ..style.position = 'absolute'
      ..style.left = '50%'
      ..style.top = '50%'
      ..style.transform = 'translate(-50%, -50%)'
      ..style.width = '72px'
      ..style.height = '72px'
      ..style.borderRadius = '50%'
      ..style.backgroundColor = 'rgba(0,0,0,0.55)'
      ..style.border = '1.5px solid rgba(255,255,255,0.24)'
      ..style.display = 'flex'
      ..style.alignItems = 'center'
      ..style.justifyContent = 'center'
      ..style.pointerEvents = 'none'
      ..style.transition = 'opacity 0.2s'
      ..style.zIndex = '3'
      ..innerHtml = centerPlaySvg;

    // Bottom transport bar (HTML — receives taps reliably on mobile web).
    final bar = html.DivElement()
      ..style.position = 'absolute'
      ..style.left = '12px'
      ..style.right = '12px'
      ..style.bottom = '16px'
      ..style.padding = '8px 10px'
      ..style.borderRadius = '16px'
      ..style.backgroundColor = 'rgba(0,0,0,0.62)'
      ..style.border = '1px solid rgba(255,255,255,0.12)'
      ..style.zIndex = '4';

    final seek = html.InputElement(type: 'range')
      ..style.width = '100%'
      ..style.margin = '0 0 6px 0'
      ..style.accentColor = '#818CF8'
      ..min = '0'
      ..max = '1000'
      ..value = '0';

    final row = html.DivElement()
      ..style.display = 'flex'
      ..style.alignItems = 'center'
      ..style.gap = '4px';

    html.ButtonElement iconBtn(String svg, void Function(html.Event) onClick) {
      final b = html.ButtonElement()
        ..type = 'button'
        ..style.background = 'transparent'
        ..style.border = 'none'
        ..style.padding = '8px'
        ..style.cursor = 'pointer'
        ..style.display = 'flex'
        ..style.alignItems = 'center'
        ..style.justifyContent = 'center'
        ..innerHtml = svg;
      b.onClick.listen(onClick);
      return b;
    }

    late html.ButtonElement barPlayBtn;
    late html.ButtonElement muteBtn;
    late html.ButtonElement replayBtn;
    late html.SpanElement timeLabel;

    void syncUi() {
      final dur = v.duration;
      final pos = v.currentTime;
      final playing = !v.paused && !v.ended;
      centerBtn.style.opacity = playing ? '0' : '1';
      centerBtn.innerHtml = centerPlaySvg;
      barPlayBtn.innerHtml = playing ? pauseSvg : playSvg;
      muteBtn.innerHtml = v.muted ? muteSvg : volSvg;
      if (dur.isFinite && dur > 0) {
        seek.value = ((pos / dur) * 1000).round().clamp(0, 1000).toString();
      }
      String fmt(double sec) {
        final s = sec.floor().clamp(0, 99999);
        final m = (s ~/ 60).toString().padLeft(2, '0');
        final r = (s % 60).toString().padLeft(2, '0');
        return '$m:$r';
      }

      final durSec = dur.isFinite && dur > 0 ? dur : 0.0;
      timeLabel.text = '${fmt(pos)} / ${fmt(durSec)}';
    }

    void showError(String msg) {
      debugPrint('[vault html video] $msg');
      if (mounted) setState(() => _error = msg);
    }

    void togglePlay() {
      try {
        if (v.paused || v.ended) {
          if (v.ended) v.currentTime = 0;
          final p = v.play();
          if (p != null) {
            p.catchError((_) {
              v.muted = true;
              final p2 = v.play();
              if (p2 != null) {
                p2.then((_) {
                  v.muted = userMuted;
                  syncUi();
                });
              }
            });
          }
        } else {
          v.pause();
        }
      } catch (e) {
        showError('Tap Play again — your browser blocked playback.');
      }
      syncUi();
    }

    tapLayer.onClick.listen((e) {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });

    barPlayBtn = iconBtn(playSvg, (e) {
      e.preventDefault();
      togglePlay();
    });

    muteBtn = iconBtn(volSvg, (e) {
      e.preventDefault();
      userMuted = !v.muted;
      v.muted = userMuted;
      if (!userMuted) v.volume = 1;
      syncUi();
    });

    replayBtn = iconBtn(replaySvg, (e) {
      e.preventDefault();
      v.currentTime = 0;
      togglePlay();
    });

    seek.onInput.listen((_) {
      final dur = v.duration;
      if (!dur.isFinite || dur <= 0) return;
      final val = int.tryParse(seek.value ?? '0') ?? 0;
      v.currentTime = dur * (val / 1000.0);
      syncUi();
    });

    timeLabel = html.SpanElement()
      ..style.color = 'rgba(255,255,255,0.7)'
      ..style.fontSize = '11px'
      ..style.fontWeight = '600'
      ..style.marginLeft = '8px'
      ..style.flex = '1'
      ..text = '00:00 / 00:00';

    row
      ..append(barPlayBtn)
      ..append(muteBtn)
      ..append(timeLabel)
      ..append(replayBtn);

    bar
      ..append(seek)
      ..append(row);

    root
      ..append(tapLayer)
      ..append(centerBtn)
      ..append(bar);

    v.onLoadedMetadata.listen((_) => syncUi());
    v.onLoadedData.listen((_) => syncUi());
    v.onCanPlay.listen((_) => syncUi());
    v.onPlay.listen((_) => syncUi());
    v.onPause.listen((_) => syncUi());
    v.onEnded.listen((_) => syncUi());
    v.onTimeUpdate.listen((_) => syncUi());
    v.onError.listen((_) {
      debugPrint('[vault html video] error code=${v.error?.code} src=${widget.source}');
      showError('Could not play this video. Try re-adding an MP4 clip from your gallery.');
    });

    v.load();
    syncUi();
    return root;
  }

  @override
  void dispose() {
    try {
      _video?.pause();
      _video?.removeAttribute('src');
      _video?.load();
    } catch (_) {}
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_error != null) {
      return ColoredBox(
        color: Colors.black,
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.error_outline_rounded, color: Colors.white54, size: 40),
                const SizedBox(height: 12),
                Text(
                  _error!,
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.35),
                ),
                const SizedBox(height: 16),
                TextButton(
                  onPressed: () => setState(() => _error = null),
                  child: const Text('Dismiss', style: TextStyle(color: Color(0xFF818CF8), fontWeight: FontWeight.w700)),
                ),
              ],
            ),
          ),
        ),
      );
    }

    return ColoredBox(
      color: Colors.black,
      child: SizedBox.expand(
        child: HtmlElementView(viewType: _viewType),
      ),
    );
  }
}
