import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Vault video player — play/pause runs inside the HTML platform view so
/// mobile browsers treat taps as a real user gesture (Flutter overlays alone
/// cannot start playback on iOS Safari / many Android WebViews).
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
  final Completer<void> _viewReady = Completer<void>();
  void Function()? _domTogglePlay;
  bool _ready = false;
  bool _playing = false;
  bool _muted = false;
  String? _error;
  double _progress = 0;
  Duration _position = Duration.zero;
  Duration _duration = Duration.zero;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vault-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      final root = html.DivElement()
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.position = 'relative'
        ..style.backgroundColor = '#000'
        ..style.overflow = 'hidden'
        ..style.cursor = 'pointer';

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
      v.append(html.SourceElement()
        ..src = widget.source
        ..type = mime);
      v.src = widget.source;

      final playHint = html.DivElement()
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
        ..style.color = '#fff'
        ..style.fontSize = '44px'
        ..style.lineHeight = '1'
        ..text = '▶';

      root.append(v);
      root.append(playHint);
      _video = v;

      void syncPlayHint() {
        playHint.style.display = (v.paused || v.ended) ? 'flex' : 'none';
        playHint.text = v.paused || v.ended ? '▶' : '❚❚';
      }

      Future<void> togglePlay() async {
        try {
          if (v.paused || v.ended) {
            if (v.ended) v.currentTime = 0;
            try {
              await v.play();
            } catch (_) {
              v.muted = true;
              await v.play();
              v.muted = _muted;
            }
          } else {
            v.pause();
          }
          syncPlayHint();
        } catch (e) {
          debugPrint('[vault html video] togglePlay: $e');
          if (mounted) {
            setState(() => _error = 'Could not start playback. Tap the video again.');
          }
        }
      }

      _domTogglePlay = () {
        unawaited(togglePlay());
      };

      root.onClick.listen((_) {
        unawaited(togglePlay());
      });

      void markReady() {
        if (!mounted) return;
        final durSec = v.duration;
        setState(() {
          _ready = true;
          if (durSec.isFinite && durSec > 0) {
            _duration = Duration(milliseconds: (durSec * 1000).round());
          }
        });
        syncPlayHint();
      }

      v.onLoadedMetadata.listen((_) => markReady());
      v.onLoadedData.listen((_) => markReady());
      v.onCanPlay.listen((_) => markReady());
      v.onPlay.listen((_) {
        syncPlayHint();
        if (mounted) setState(() => _playing = true);
      });
      v.onPause.listen((_) {
        syncPlayHint();
        if (mounted) setState(() => _playing = false);
      });
      v.onEnded.listen((_) {
        syncPlayHint();
        if (mounted) {
          setState(() {
            _playing = false;
            _progress = 1;
          });
        }
      });
      v.onTimeUpdate.listen((_) {
        if (!mounted) return;
        final dur = v.duration;
        final pos = v.currentTime;
        if (!dur.isFinite || dur <= 0) return;
        setState(() {
          _position = Duration(milliseconds: (pos * 1000).round());
          _duration = Duration(milliseconds: (dur * 1000).round());
          _progress = (pos / dur).clamp(0.0, 1.0);
        });
      });
      v.onError.listen((_) {
        final code = v.error?.code;
        debugPrint('[vault html video] error code=$code src=${widget.source} mime=$mime');
        if (mounted) {
          setState(() => _error = 'Could not play this video. Try re-adding an MP4 clip from your gallery.');
        }
      });

      if (!_viewReady.isCompleted) _viewReady.complete();
      v.load();
      return root;
    });
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

  Future<void> _togglePlay() async {
    if (!_viewReady.isCompleted) {
      try {
        await _viewReady.future.timeout(const Duration(seconds: 8));
      } catch (_) {
        if (mounted) {
          setState(() => _error = 'Video player is still loading. Wait a moment and tap again.');
        }
        return;
      }
    }
    final toggle = _domTogglePlay;
    if (toggle == null) {
      if (mounted) {
        setState(() => _error = 'Video player not ready. Close and reopen the clip.');
      }
      return;
    }
    toggle();
  }

  Future<void> _toggleMute() async {
    if (!_viewReady.isCompleted) await _viewReady.future;
    final v = _video;
    if (v == null) return;
    final next = !v.muted;
    v.muted = next;
    if (!next) v.volume = 1;
    if (mounted) setState(() => _muted = next);
  }

  void _seek(double value) {
    final v = _video;
    if (v == null) return;
    final dur = v.duration;
    if (!dur.isFinite || dur <= 0) return;
    v.currentTime = dur * value.clamp(0.0, 1.0);
  }

  String _fmt(Duration d) {
    final m = d.inMinutes.remainder(60).toString().padLeft(2, '0');
    final s = d.inSeconds.remainder(60).toString().padLeft(2, '0');
    final h = d.inHours;
    if (h > 0) return '$h:$m:$s';
    return '${d.inMinutes}:$s';
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
                  onPressed: () {
                    setState(() => _error = null);
                    unawaited(_togglePlay());
                  },
                  child: const Text('Try play again'),
                ),
              ],
            ),
          ),
        ),
      );
    }

    return Stack(
      fit: StackFit.expand,
      children: [
        const ColoredBox(color: Colors.black),
        HtmlElementView(viewType: _viewType),
        if (!_ready)
          const IgnorePointer(
            child: Center(
              child: SizedBox(
                width: 28,
                height: 28,
                child: CircularProgressIndicator(strokeWidth: 2.2, color: Colors.white54),
              ),
            ),
          ),
        // Bottom transport bar — forwards to the same DOM play handler.
        Positioned(
          left: 12,
          right: 12,
          bottom: 16,
          child: SafeArea(
            top: false,
            child: Container(
              padding: const EdgeInsets.fromLTRB(10, 8, 10, 8),
              decoration: BoxDecoration(
                color: Colors.black.withValues(alpha: 0.62),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: Colors.white12),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  SliderTheme(
                    data: SliderTheme.of(context).copyWith(
                      trackHeight: 2.5,
                      thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 7),
                      overlayShape: const RoundSliderOverlayShape(overlayRadius: 14),
                      activeTrackColor: const Color(0xFF818CF8),
                      inactiveTrackColor: Colors.white24,
                      thumbColor: Colors.white,
                    ),
                    child: Slider(
                      value: _progress.clamp(0.0, 1.0),
                      onChanged: _ready ? _seek : null,
                    ),
                  ),
                  Row(
                    children: [
                      _barBtn(
                        _playing ? Icons.pause_rounded : Icons.play_arrow_rounded,
                        () => unawaited(_togglePlay()),
                      ),
                      const SizedBox(width: 4),
                      _barBtn(
                        _muted ? Icons.volume_off_rounded : Icons.volume_up_rounded,
                        () => unawaited(_toggleMute()),
                      ),
                      const SizedBox(width: 8),
                      Text(
                        '${_fmt(_position)} / ${_fmt(_duration)}',
                        style: const TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w600),
                      ),
                      const Spacer(),
                      _barBtn(Icons.replay_rounded, () async {
                        final v = _video;
                        if (v == null) return;
                        v.currentTime = 0;
                        await _togglePlay();
                      }),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _barBtn(IconData icon, VoidCallback onTap) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Padding(
          padding: const EdgeInsets.all(8),
          child: Icon(icon, color: Colors.white, size: 22),
        ),
      ),
    );
  }
}
