import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

String _cleanVideoMime(String mime) {
  final base = mime.split(';').first.trim().toLowerCase();
  if (base.startsWith('video/')) return base;
  return 'video/mp4';
}

void _attachMediaSource(html.VideoElement v, String source, String mime) {
  v.children.clear();
  v.removeAttribute('src');
  if (source.startsWith('blob:') || source.startsWith('http://') || source.startsWith('https://')) {
    v.src = source;
  } else {
    v.append(html.SourceElement()
      ..src = source
      ..type = mime);
  }
  v.load();
}

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
  Timer? _stallWatch;

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
      ..defaultMuted = false
      ..volume = 1.0
      ..setAttribute('playsinline', 'true')
      ..setAttribute('webkit-playsinline', 'true')
      ..style.width = '100%'
      ..style.height = '100%'
      ..style.objectFit = 'contain'
      ..style.display = 'block'
      ..style.pointerEvents = 'none';

    final mime = widget.mimeType.trim().isEmpty ? 'video/mp4' : _cleanVideoMime(widget.mimeType);
    _attachMediaSource(v, widget.source, mime);

    _video = v;
    root.append(v);

    var userMuted = false;

    const playGlyph = '▶';
    const pauseGlyph = '❚❚';
    const muteGlyph = '🔇';
    const volGlyph = '🔊';
    const replayGlyph = '↺';

    /// Classic white play triangle — no font glyph, no gray box on mobile web.
    html.DivElement playTriangle({required double height, double offsetLeft = 3}) {
      final half = height / 2;
      final width = height * 0.92;
      return html.DivElement()
        ..style.width = '0'
        ..style.height = '0'
        ..style.borderTop = '${half}px solid transparent'
        ..style.borderBottom = '${half}px solid transparent'
        ..style.borderLeft = '${width}px solid #FFFFFF'
        ..style.marginLeft = '${offsetLeft}px'
        ..style.pointerEvents = 'none';
    }

    html.SpanElement glyph(String char, {double size = 20}) {
      return html.SpanElement()
        ..text = char
        ..style.fontSize = '${size}px'
        ..style.color = '#FFFFFF'
        ..style.lineHeight = '1'
        ..style.userSelect = 'none';
    }

    void setBtnIcon(html.ButtonElement btn, String char, {double size = 20}) {
      btn.children.clear();
      btn.append(glyph(char, size: size));
    }

    void ensureAudible() {
      if (userMuted) return;
      v.muted = false;
      v.defaultMuted = false;
      v.removeAttribute('muted');
      v.volume = 1.0;
      v.playbackRate = 1.0;
      v.defaultPlaybackRate = 1.0;
    }

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

    // Center play — circle backdrop + same small ▶ as the bottom bar (no icon box).
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
      ..style.zIndex = '3';
    centerBtn.children.clear();
    centerBtn.append(playTriangle(height: 26, offsetLeft: 5));

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
      ..style.zIndex = '10'
      ..style.pointerEvents = 'auto'
      ..style.touchAction = 'manipulation';

    final seek = html.InputElement(type: 'range')
      ..style.width = '100%'
      ..style.margin = '0 0 6px 0'
      ..min = '0'
      ..max = '1000'
      ..value = '0';
    seek.style.setProperty('accent-color', '#818CF8');

    final row = html.DivElement()
      ..style.display = 'flex'
      ..style.alignItems = 'center'
      ..style.gap = '4px';

    html.ButtonElement iconBtn(String char, void Function(html.Event) onClick, {double size = 20}) {
      final b = html.ButtonElement()
        ..type = 'button'
        ..style.background = 'transparent'
        ..style.border = 'none'
        ..style.padding = '10px'
        ..style.minWidth = '44px'
        ..style.minHeight = '44px'
        ..style.cursor = 'pointer'
        ..style.opacity = '1'
        ..style.pointerEvents = 'auto'
        ..style.display = 'flex'
        ..style.alignItems = 'center'
        ..style.justifyContent = 'center';
      setBtnIcon(b, char, size: size);
      b.onClick.listen((e) {
        e.stopPropagation();
        onClick(e);
      });
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
      setBtnIcon(barPlayBtn, playing ? pauseGlyph : playGlyph);
      setBtnIcon(muteBtn, v.muted ? muteGlyph : volGlyph);
      if (dur.isFinite && dur > 0) {
        seek.value = ((pos / dur) * 1000).round().clamp(0, 1000).toString();
      }
      String fmt(num sec) {
        final s = sec.floor().clamp(0, 99999);
        final m = (s ~/ 60).toString().padLeft(2, '0');
        final r = (s % 60).toString().padLeft(2, '0');
        return '$m:$r';
      }

      final durSec = dur.isFinite && dur > 0 ? dur.toDouble() : 0.0;
      timeLabel.text = '${fmt(pos.toDouble())} / ${fmt(durSec)}';
    }

    void showError(String msg) {
      debugPrint('[vault html video] $msg');
      if (mounted) setState(() => _error = msg);
    }

    void playWithSound() {
      v.playbackRate = 1.0;
      v.defaultPlaybackRate = 1.0;
      v.muted = userMuted;
      v.defaultMuted = userMuted;
      if (!userMuted) {
        v.removeAttribute('muted');
        v.volume = 1.0;
      }
      try {
        // Play is always called straight from a tap, so sound is allowed. If a
        // browser still refuses, fall back to muted rather than tearing the
        // player down — a silent clip beats a dead play button.
        v.play().catchError((Object e) {
          debugPrint('[vault html video] play failed: $e');
          if (v.muted) return;
          v.muted = true;
          v.defaultMuted = true;
          v.play().catchError((Object e2) {
            debugPrint('[vault html video] muted retry failed: $e2');
          });
          syncUi();
        });
      } catch (e) {
        debugPrint('[vault html video] play threw: $e');
      }
      syncUi();
    }

    /// A clip whose data never arrives leaves `play()` pending forever, so the
    /// button looks dead. Re-attach the source once, then say what went wrong.
    void watchForStall() {
      _stallWatch?.cancel();
      _stallWatch = Timer(const Duration(seconds: 5), () {
        if (!mounted || v.readyState > 0 || !v.paused) return;
        _attachMediaSource(v, widget.source, mime);
        v.play().catchError((Object _) {});
        _stallWatch = Timer(const Duration(seconds: 8), () {
          if (!mounted || v.readyState > 0 || !v.paused) return;
          showError('This clip will not load on this browser. Re-add it as an MP4 from your gallery.');
        });
      });
    }

    void togglePlay() {
      try {
        v.playbackRate = 1.0;
        v.defaultPlaybackRate = 1.0;
        if (v.readyState < 1) {
          _attachMediaSource(v, widget.source, mime);
          watchForStall();
        }
        if (v.paused || v.ended) {
          if (v.ended) v.currentTime = 0;
          playWithSound();
        } else {
          v.pause();
        }
      } catch (e) {
        debugPrint('[vault html video] toggle failed: $e');
      }
      syncUi();
    }

    tapLayer.onClick.listen((e) {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });

    barPlayBtn = iconBtn(playGlyph, (e) {
      e.preventDefault();
      togglePlay();
    });

    muteBtn = iconBtn(volGlyph, (e) {
      e.preventDefault();
      userMuted = !userMuted;
      v.muted = userMuted;
      if (!userMuted) {
        v.volume = 1.0;
        v.muted = false;
      }
      syncUi();
    });

    replayBtn = iconBtn(replayGlyph, (e) {
      e.preventDefault();
      v.currentTime = 0;
      togglePlay();
    });

    seek.onInput.listen((e) {
      e.stopPropagation();
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

    v.onPlay.listen((_) {
      _stallWatch?.cancel();
      if (!userMuted) {
        v.muted = false;
        v.volume = 1.0;
      }
      v.playbackRate = 1.0;
      syncUi();
    });
    v.onLoadedData.listen((_) => _stallWatch?.cancel());
    v.onLoadedMetadata.listen((_) {
      v.playbackRate = 1.0;
      v.defaultPlaybackRate = 1.0;
      syncUi();
    });
    v.onLoadedData.listen((_) => syncUi());
    v.onCanPlay.listen((_) => syncUi());
    v.onPlay.listen((_) => syncUi());
    v.onPause.listen((_) => syncUi());
    v.onEnded.listen((_) => syncUi());
    v.onTimeUpdate.listen((_) => syncUi());
    v.onError.listen((_) {
      _stallWatch?.cancel();
      debugPrint('[vault html video] error code=${v.error?.code} src=${widget.source}');
      showError('Could not play this video. Try re-adding an MP4 clip from your gallery.');
    });

    v.onCanPlayThrough.listen((_) => syncUi());

    syncUi();
    return root;
  }

  @override
  void dispose() {
    _stallWatch?.cancel();
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
