import 'dart:async';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_live_capture.dart';
import 'ngmy_live_capture_blob_store.dart';
import 'ngmy_live_capture_export.dart';
import 'ngmy_live_capture_media.dart';

/// Cool green studio palette — video recording in one place.
abstract final class NgmyRecorderStudioColors {
  static const emerald = Color(0xFF059669);
  static const teal = Color(0xFF14B8A6);
  static const mint = Color(0xFF22C55E);
  static const forest = Color(0xFF065F46);
  static const deep = Color(0xFF042F2E);
  static const panel = Color(0xFF064E3B);
}

/// How the preview animates when switching front/back camera.
enum NgmyCameraFlipStyle {
  instant,
  slideHorizontal,
  slideVertical,
  fade,
}

const _kCameraFlipStylePrefs = 'ngmy_recorder_camera_flip_style_v1';

String _cameraFlipStyleLabel(NgmyCameraFlipStyle style) {
  switch (style) {
    case NgmyCameraFlipStyle.instant:
      return 'Instant';
    case NgmyCameraFlipStyle.slideHorizontal:
      return 'Slide left/right';
    case NgmyCameraFlipStyle.slideVertical:
      return 'Slide up/down';
    case NgmyCameraFlipStyle.fade:
      return 'Fade';
  }
}

IconData _cameraFlipStyleIcon(NgmyCameraFlipStyle style) {
  switch (style) {
    case NgmyCameraFlipStyle.instant:
      return Icons.flash_on_rounded;
    case NgmyCameraFlipStyle.slideHorizontal:
      return Icons.swap_horiz_rounded;
    case NgmyCameraFlipStyle.slideVertical:
      return Icons.swap_vert_rounded;
    case NgmyCameraFlipStyle.fade:
      return Icons.blur_on_rounded;
  }
}

Future<void> showNgmyCreatorRecorderStudio(BuildContext context, {required String userEmail}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      builder: (_) => NgmyCreatorRecorderStudioPage(userEmail: userEmail),
    ),
  );
}

class NgmyCreatorRecorderStudioPage extends StatefulWidget {
  const NgmyCreatorRecorderStudioPage({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<NgmyCreatorRecorderStudioPage> createState() => _NgmyCreatorRecorderStudioPageState();
}

class _NgmyCreatorRecorderStudioPageState extends State<NgmyCreatorRecorderStudioPage> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  List<NgmyLiveCaptureItem> _items = [];
  bool _loading = true;
  bool _busy = false;
  bool _cameraBusy = false;
  bool _previewFullscreen = false;
  NgmyCameraFlipStyle _cameraFlipStyle = NgmyCameraFlipStyle.slideHorizontal;
  int _cameraFlipSlideSign = 1;

  NgmyLiveCaptureSession get _session => ngmyLiveCaptureSession;

  (double, double) _previewSize(BuildContext context) {
    final maxW = MediaQuery.sizeOf(context).width - 72;
    switch (_session.aspect) {
      case 'tiktok':
        final w = maxW.clamp(200.0, 360.0);
        return (w, w * 16 / 9);
      case 'square':
        final w = maxW.clamp(220.0, 340.0);
        return (w, w);
      case 'youtube':
      default:
        return (maxW, maxW * 9 / 16);
    }
  }

  double _previewHeight(BuildContext context) => _previewSize(context).$2;

  String get _aspectHint {
    switch (_session.aspect) {
      case 'tiktok':
        return 'TikTok — hold your phone upright for full-screen vertical video.';
      case 'square':
        return 'Square — centered 1:1 video, like Instagram posts.';
      case 'youtube':
      default:
        return 'YouTube — turn your phone sideways for full-screen wide video.';
    }
  }

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat(reverse: true);
    _session.videoMode = true;
    _session.pipEnabled = false;
    if (_session.aspect != 'tiktok' && _session.aspect != 'youtube' && _session.aspect != 'square') {
      _session.aspect = 'tiktok';
    }
    _session.addListener(_onSession);
    unawaited(_loadCameraFlipStyle());
    unawaited(_reload().then((_) async {
      if (!_session.recording) {
        await _session.refreshVideoPreview();
        if (mounted) setState(() {});
      }
    }));
  }

  Future<void> _loadCameraFlipStyle() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kCameraFlipStylePrefs);
      if (raw == null || !mounted) return;
      final style = NgmyCameraFlipStyle.values.firstWhere(
        (s) => s.name == raw,
        orElse: () => NgmyCameraFlipStyle.slideHorizontal,
      );
      setState(() => _cameraFlipStyle = style);
    } catch (_) {}
  }

  Future<void> _persistCameraFlipStyle(NgmyCameraFlipStyle style) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_kCameraFlipStylePrefs, style.name);
    } catch (_) {}
  }

  void _cycleCameraFlipStyle() {
    final values = NgmyCameraFlipStyle.values;
    final next = values[(values.indexOf(_cameraFlipStyle) + 1) % values.length];
    setState(() => _cameraFlipStyle = next);
    unawaited(_persistCameraFlipStyle(next));
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('Camera switch: ${_cameraFlipStyleLabel(next)}'),
        duration: const Duration(seconds: 2),
        behavior: SnackBarBehavior.floating,
        backgroundColor: NgmyRecorderStudioColors.forest,
      ),
    );
  }

  void _onSession() {
    if (!mounted) return;
    setState(() {});
  }

  @override
  void dispose() {
    _session.removeListener(_onSession);
    _pulse.dispose();
    unawaited(_session.closeVideoPreview());
    super.dispose();
  }

  Future<void> _reload() async {
    final items = await NgmyLiveCaptureStore.load(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _items = items.where((e) => e.kind == 'video' || e.mimeType.startsWith('video/')).toList();
      _loading = false;
    });
  }

  Future<void> _deleteItem(NgmyLiveCaptureItem item) async {
    await NgmyLiveCaptureStore.deleteItem(widget.userEmail, item.id);
    await _reload();
  }

  Future<void> _startRecording() async {
    if (_busy || _session.recording) return;
    _session.lastError = null;
    _session.lastStatus = null;
    _session.videoMode = true;
    setState(() => _busy = true);
    await _session.start(userEmail: widget.userEmail, video: true);
    if (mounted) {
      setState(() => _busy = false);
      if (_session.recording) {
        if (_session.noiseCancellation) {
          _session.lastStatus = 'Recording with noise cancel — background sounds are filtered.';
        } else if (_session.aspect == 'youtube') {
          _session.lastStatus = 'Recording wide video — keep your phone sideways.';
        } else if (_session.aspect == 'tiktok') {
          _session.lastStatus = 'Recording vertical video — keep your phone upright.';
        }
      }
    }
  }

  Future<void> _stopRecording() async {
    if (_busy || !_session.recording) return;
    setState(() => _busy = true);
    final item = await _session.stopAndSave();
    if (!mounted) return;
    setState(() => _busy = false);
    if (item != null) {
      await _reload();
      if (mounted) await _openItem(item);
    }
  }

  Future<void> _openItem(NgmyLiveCaptureItem item) async {
    if (item.dataUrl.isEmpty) {
      item.dataUrl = await NgmyLiveCaptureBlobStore.getPlayableUrl(item.id, mimeType: item.mimeType) ?? '';
    }
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _StudioCaptureSheet(
        item: item,
        userEmail: widget.userEmail,
        onChanged: _reload,
      ),
    );
    if (mounted) await _reload();
  }

  @override
  Widget build(BuildContext context) {
    final recording = _session.recording;
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return Scaffold(
          backgroundColor: NgmyRecorderStudioColors.deep,
          body: Stack(
            children: [
              SafeArea(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    _header(recording),
                    Expanded(
                      child: ListView(
                        padding: const EdgeInsets.fromLTRB(18, 16, 18, 28),
                        children: [
                          _studioPanel(recording, pulse),
                          if (_session.lastError != null) ...[
                            const SizedBox(height: 12),
                            Text(_session.lastError!, style: const TextStyle(color: Color(0xFFFCA5A5), fontSize: 12)),
                          ] else if (_session.lastStatus != null) ...[
                            const SizedBox(height: 12),
                            Text(_session.lastStatus!, style: const TextStyle(color: NgmyRecorderStudioColors.mint, fontSize: 12)),
                          ],
                          const SizedBox(height: 22),
                          const Text('Your studio library', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                          const SizedBox(height: 4),
                          const Text(
                            'Videos — tap to play, swipe left to delete.',
                            style: TextStyle(color: Colors.white54, fontSize: 12, height: 1.4),
                          ),
                          const SizedBox(height: 12),
                          if (_loading)
                            const Padding(
                              padding: EdgeInsets.all(24),
                              child: Center(child: CircularProgressIndicator(color: NgmyRecorderStudioColors.teal)),
                            )
                          else if (_items.isEmpty)
                            _emptyLibrary()
                          else
                            ..._items.map(_libraryTile),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              if (_previewFullscreen && (_session.recording || _session.previewActive))
                _fullscreenPreviewOverlay(recording),
            ],
          ),
        );
      },
    );
  }

  Widget _header(bool recording) {
    return Container(
      padding: const EdgeInsets.fromLTRB(8, 8, 8, 18),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            NgmyRecorderStudioColors.forest,
            NgmyRecorderStudioColors.emerald,
            Color.lerp(NgmyRecorderStudioColors.teal, NgmyRecorderStudioColors.mint, 0.35)!,
          ],
        ),
        boxShadow: [
          BoxShadow(color: NgmyRecorderStudioColors.emerald.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 8)),
        ],
      ),
      child: Row(
        children: [
          IconButton(
            onPressed: () => Navigator.pop(context),
            icon: const Icon(Icons.arrow_back_rounded, color: Colors.white),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Recorder Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                Text(
                  recording ? 'Recording in progress — come back here to stop & save.' : 'Video studio — record with front or back camera.',
                  style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.35),
                ),
              ],
            ),
          ),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: Colors.white.withValues(alpha: 0.14),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: Colors.white24),
                ),
                child: const Icon(Icons.mic_rounded, color: Colors.white, size: 22),
              ),
              const SizedBox(width: 6),
              Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: _showMicSetupGuide,
                  borderRadius: BorderRadius.circular(10),
                  child: Tooltip(
                    message: 'How to turn on the microphone',
                    child: Container(
                      padding: const EdgeInsets.all(7),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.12),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: Colors.white24),
                      ),
                      child: const Icon(Icons.info_outline_rounded, color: Colors.white, size: 16),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  void _showMicSetupGuide() {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => const _MicSetupGuideSheet(),
    );
  }

  Widget _studioPanel(bool recording, double pulse) {
    return AnimatedBuilder(
      animation: _pulse,
      builder: (context, child) {
        final p = Curves.easeInOut.transform(_pulse.value);
        return Container(
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            border: Border.all(
              color: recording
                  ? Color.lerp(NgmyRecorderStudioColors.mint, Colors.white, p * 0.4)!
                  : NgmyRecorderStudioColors.teal.withValues(alpha: 0.35),
              width: recording ? 2 : 1,
            ),
            gradient: LinearGradient(
              begin: Alignment(-1 + p, -0.3),
              end: Alignment(1 - p, 0.7),
              colors: [
                NgmyRecorderStudioColors.panel,
                NgmyRecorderStudioColors.deep,
                Color.lerp(NgmyRecorderStudioColors.forest, NgmyRecorderStudioColors.emerald, p * 0.25)!,
              ],
            ),
          ),
          child: Column(
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  if (!recording)
                    Expanded(
                      child: Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        children: [
                          _smallChip('YouTube 16:9', _session.aspect == 'youtube', () => _setAspect('youtube')),
                          _smallChip('TikTok 9:16', _session.aspect == 'tiktok', () => _setAspect('tiktok')),
                          _smallChip('Square', _session.aspect == 'square', () => _setAspect('square')),
                        ],
                      ),
                    )
                  else
                    const Expanded(
                      child: Text(
                        'VIDEO',
                        style: TextStyle(color: NgmyRecorderStudioColors.mint, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.2),
                      ),
                    ),
                  Text(
                    _session.clockLabel(),
                    style: TextStyle(
                      color: recording ? NgmyRecorderStudioColors.mint : Colors.white,
                      fontWeight: FontWeight.w900,
                      fontSize: 26,
                      letterSpacing: 1.1,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              if (_session.recording || _session.previewActive)
                _buildCameraPreview()
              else
                _idleHint(context),
              const SizedBox(height: 16),
              if (recording)
                const Text(
                  '● LIVE',
                  style: TextStyle(color: NgmyRecorderStudioColors.mint, fontWeight: FontWeight.w900, letterSpacing: 1.4),
                )
              else
                Text(
                  _aspectHint,
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.45),
                ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                height: 52,
                child: FilledButton.icon(
                  onPressed: _busy ? null : (recording ? _stopRecording : _startRecording),
                  style: FilledButton.styleFrom(
                    backgroundColor: recording ? const Color(0xFFDC2626) : NgmyRecorderStudioColors.emerald,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                  ),
                  icon: Icon(recording ? Icons.stop_rounded : Icons.videocam_rounded),
                  label: Text(
                    recording ? 'Stop & Save' : 'Start Video',
                    style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _emptyLibrary() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.04),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.25)),
      ),
      child: const Text('Nothing here yet — record your first video.', style: TextStyle(color: Colors.white54)),
    );
  }

  Widget _libraryTile(NgmyLiveCaptureItem item) {
    final label = 'VIDEO · ${NgmyLiveCaptureSession.formatClock(item.durationSec)}';
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Dismissible(
        key: ValueKey('studio-cap-${item.id}'),
        direction: DismissDirection.endToStart,
        background: Container(
          alignment: Alignment.centerRight,
          padding: const EdgeInsets.only(right: 22),
          decoration: BoxDecoration(
            color: const Color(0xFFDC2626),
            borderRadius: BorderRadius.circular(16),
          ),
          child: const Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Icon(Icons.delete_outline_rounded, color: Colors.white),
              SizedBox(width: 8),
              Text('Delete', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
            ],
          ),
        ),
        onDismissed: (_) {
          setState(() => _items.removeWhere((e) => e.id == item.id));
          unawaited(_deleteItem(item));
        },
        child: Material(
          color: Colors.white.withValues(alpha: 0.05),
          borderRadius: BorderRadius.circular(16),
          child: InkWell(
            borderRadius: BorderRadius.circular(16),
            onTap: () => _openItem(item),
            child: Padding(
              padding: const EdgeInsets.all(14),
              child: Row(
                children: [
                  Icon(Icons.videocam_rounded, color: NgmyRecorderStudioColors.teal),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(item.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                        Text('$label · Tap to play', style: const TextStyle(color: Colors.white54, fontSize: 11)),
                      ],
                    ),
                  ),
                  const Icon(Icons.chevron_right_rounded, color: Colors.white38),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _idleHint(BuildContext context) {
    final size = _previewSize(context);
    return Container(
      width: size.$1,
      height: size.$2,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: Colors.black.withValues(alpha: 0.18),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: Colors.white12),
      ),
      child: Icon(Icons.videocam_rounded, size: 52, color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.85)),
    );
  }

  Widget _buildCameraPreview({double? height}) {
    final size = _previewSize(context);
    final previewWidth = size.$1;
    final previewHeight = height ?? size.$2;
    final previewBody = NgmyLiveCaptureMedia.liveCameraPreview(
      stream: _session.previewStream,
      height: previewHeight,
      mirror: _session.facingMode == 'user',
      objectFit: 'cover',
      zoomOut: 1.0,
    );

    Widget previewChild;
    if (_cameraFlipStyle == NgmyCameraFlipStyle.instant) {
      previewChild = KeyedSubtree(
        key: ValueKey('cam-${_session.facingMode}-${_session.aspect}'),
        child: previewBody,
      );
    } else {
      final duration = switch (_cameraFlipStyle) {
        NgmyCameraFlipStyle.fade => const Duration(milliseconds: 320),
        NgmyCameraFlipStyle.slideVertical => const Duration(milliseconds: 380),
        _ => const Duration(milliseconds: 360),
      };
      previewChild = AnimatedSwitcher(
        duration: duration,
        switchInCurve: Curves.easeOutCubic,
        switchOutCurve: Curves.easeInCubic,
        transitionBuilder: (child, animation) {
          switch (_cameraFlipStyle) {
            case NgmyCameraFlipStyle.fade:
              return FadeTransition(opacity: animation, child: child);
            case NgmyCameraFlipStyle.slideVertical:
              return SlideTransition(
                position: Tween<Offset>(
                  begin: Offset(0, _cameraFlipSlideSign * 0.35),
                  end: Offset.zero,
                ).animate(animation),
                child: child,
              );
            case NgmyCameraFlipStyle.slideHorizontal:
              return SlideTransition(
                position: Tween<Offset>(
                  begin: Offset(_cameraFlipSlideSign * 0.45, 0),
                  end: Offset.zero,
                ).animate(animation),
                child: child,
              );
            case NgmyCameraFlipStyle.instant:
              return child;
          }
        },
        child: KeyedSubtree(
          key: ValueKey('cam-${_session.facingMode}-${_session.aspect}'),
          child: previewBody,
        ),
      );
    }

    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.center,
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(18),
          child: SizedBox(
            width: previewWidth,
            height: previewHeight,
            child: previewChild,
          ),
        ),
        Positioned(
          top: 6,
          right: 6,
          child: _previewControlBar(),
        ),
      ],
    );
  }

  Widget _previewControlBar() {
    return DecoratedBox(
      decoration: BoxDecoration(
        color: Colors.black.withValues(alpha: 0.42),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 3, vertical: 3),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            _previewControlBtn(
              icon: _session.noiseCancellation ? Icons.noise_aware_rounded : Icons.hearing_rounded,
              tooltip: _session.noiseCancellation ? 'Noise cancel on' : 'Turn on noise cancel',
              onTap: _cameraBusy ? null : _toggleNoiseCancellation,
              active: _session.noiseCancellation,
            ),
            _previewControlBtn(
              icon: _cameraFlipStyleIcon(_cameraFlipStyle),
              tooltip: 'Camera switch style: ${_cameraFlipStyleLabel(_cameraFlipStyle)} (tap to change)',
              onTap: _cycleCameraFlipStyle,
              active: _cameraFlipStyle != NgmyCameraFlipStyle.instant,
            ),
            _previewControlBtn(
              icon: Icons.cameraswitch_rounded,
              tooltip: _session.facingMode == 'user' ? 'Switch to back camera' : 'Switch to front camera',
              onTap: _cameraBusy ? null : _flipCamera,
            ),
            _previewControlBtn(
              icon: _previewFullscreen ? Icons.fullscreen_exit_rounded : Icons.fullscreen_rounded,
              tooltip: _previewFullscreen ? 'Exit full screen' : 'Full screen preview',
              onTap: _toggleFullscreen,
            ),
          ],
        ),
      ),
    );
  }

  Widget _previewControlBtn({
    required IconData icon,
    required String tooltip,
    VoidCallback? onTap,
    bool active = false,
  }) {
    final enabled = onTap != null;
    return Tooltip(
      message: tooltip,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(7),
          child: Container(
            width: 24,
            height: 24,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(7),
              color: active ? NgmyRecorderStudioColors.mint.withValues(alpha: 0.28) : Colors.transparent,
            ),
            child: Icon(
              icon,
              size: 13,
              color: Colors.white.withValues(alpha: enabled ? (active ? 1.0 : 0.92) : 0.4),
            ),
          ),
        ),
      ),
    );
  }

  Widget _fullscreenPreviewOverlay(bool recording) {
    final screenH = MediaQuery.sizeOf(context).height;
    return Material(
      color: Colors.black.withValues(alpha: 0.96),
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
              child: Row(
                children: [
                  Text(
                    recording ? '● RECORDING ${_session.clockLabel()}' : 'PREVIEW',
                    style: TextStyle(
                      color: recording ? NgmyRecorderStudioColors.mint : Colors.white70,
                      fontWeight: FontWeight.w900,
                      fontSize: 12,
                      letterSpacing: 1.1,
                    ),
                  ),
                  const Spacer(),
                  IconButton(
                    onPressed: () => setState(() => _previewFullscreen = false),
                    icon: const Icon(Icons.fullscreen_exit_rounded, color: Colors.white, size: 22),
                  ),
                ],
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 16),
                child: Center(
                  child: _buildCameraPreview(height: screenH * 0.72),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _toggleFullscreen() {
    setState(() => _previewFullscreen = !_previewFullscreen);
  }

  Future<void> _toggleNoiseCancellation() async {
    if (_cameraBusy) return;
    setState(() => _cameraBusy = true);
    final turningOn = !_session.noiseCancellation;
    await _session.setNoiseCancellation(turningOn);
    if (mounted) {
      setState(() => _cameraBusy = false);
      if (_session.recording && _session.lastError == null) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(turningOn ? 'Noise cancel on — still recording.' : 'Noise cancel off — still recording.'),
            duration: const Duration(seconds: 2),
            behavior: SnackBarBehavior.floating,
            backgroundColor: NgmyRecorderStudioColors.forest,
          ),
        );
      }
    }
  }

  void _setAspect(String aspect) {
    if (_session.recording) return;
    setState(() => _session.aspect = aspect);
    unawaited(_session.refreshVideoPreview().then((_) {
      if (mounted) setState(() {});
    }));
  }

  Future<void> _flipCamera() async {
    if (_cameraBusy) return;
    _cameraFlipSlideSign = _session.facingMode == 'user' ? 1 : -1;
    setState(() => _cameraBusy = true);
    await _session.switchCamera();
    if (mounted) setState(() => _cameraBusy = false);
  }

  Widget _smallChip(String label, bool on, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(999),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(999),
          color: on ? Colors.white.withValues(alpha: 0.12) : Colors.transparent,
          border: Border.all(color: on ? NgmyRecorderStudioColors.teal : Colors.white24),
        ),
        child: Text(label, style: TextStyle(color: Colors.white, fontWeight: on ? FontWeight.w800 : FontWeight.w600, fontSize: 11)),
      ),
    );
  }
}

class _StudioCaptureSheet extends StatefulWidget {
  const _StudioCaptureSheet({required this.item, required this.userEmail, required this.onChanged});

  final NgmyLiveCaptureItem item;
  final String userEmail;
  final Future<void> Function() onChanged;

  @override
  State<_StudioCaptureSheet> createState() => _StudioCaptureSheetState();
}

class _StudioCaptureSheetState extends State<_StudioCaptureSheet> {
  late final TextEditingController _titleC;
  bool _exporting = false;
  bool _mediaLoading = true;

  @override
  void initState() {
    super.initState();
    _titleC = TextEditingController(text: widget.item.title);
    unawaited(_ensureMediaUrl());
  }

  Future<void> _ensureMediaUrl() async {
    if (widget.item.dataUrl.isNotEmpty) {
      if (mounted) setState(() => _mediaLoading = false);
      return;
    }
    final url = await NgmyLiveCaptureBlobStore.getPlayableUrl(widget.item.id, mimeType: widget.item.mimeType);
    if (!mounted) return;
    if (url != null && url.isNotEmpty) widget.item.dataUrl = url;
    setState(() => _mediaLoading = false);
  }

  @override
  void dispose() {
    _titleC.dispose();
    super.dispose();
  }

  Future<void> _rename() async {
    final c = TextEditingController(text: _titleC.text);
    final next = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: NgmyRecorderStudioColors.panel,
        title: const Text('Rename', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        content: TextField(
          controller: c,
          autofocus: true,
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
          decoration: InputDecoration(
            hintText: 'Name',
            hintStyle: const TextStyle(color: Colors.white38),
            enabledBorder: UnderlineInputBorder(borderSide: BorderSide(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.5))),
            focusedBorder: const UnderlineInputBorder(borderSide: BorderSide(color: NgmyRecorderStudioColors.mint)),
          ),
          onSubmitted: (v) => Navigator.pop(ctx, v.trim()),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel', style: TextStyle(color: Colors.white54))),
          TextButton(
            onPressed: () => Navigator.pop(ctx, c.text.trim()),
            child: const Text('Save', style: TextStyle(color: NgmyRecorderStudioColors.mint, fontWeight: FontWeight.w900)),
          ),
        ],
      ),
    );
    c.dispose();
    if (next == null || next.isEmpty || !mounted) return;
    _titleC.text = next;
    widget.item.title = next;
    final items = await NgmyLiveCaptureStore.load(widget.userEmail);
    final i = items.indexWhere((e) => e.id == widget.item.id);
    if (i >= 0) {
      items[i].title = next;
      await NgmyLiveCaptureStore.save(widget.userEmail, items);
    }
    await widget.onChanged();
    if (mounted) setState(() {});
  }

  Future<void> _share() async {
    setState(() => _exporting = true);
    final ok = await ngmyLiveCaptureShare(widget.item);
    if (mounted) {
      setState(() => _exporting = false);
      if (!ok) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Could not share this recording.'),
            backgroundColor: Color(0xFFDC2626),
            behavior: SnackBarBehavior.floating,
          ),
        );
      }
    }
  }

  Future<void> _delete() async {
    await NgmyLiveCaptureStore.deleteItem(widget.userEmail, widget.item.id);
    await widget.onChanged();
    if (mounted) Navigator.pop(context);
  }

  String _clock(double sec) {
    final s = sec.isNaN || sec.isInfinite ? 0 : sec.floor().clamp(0, 99999);
    return NgmyLiveCaptureSession.formatClock(s);
  }

  @override
  Widget build(BuildContext context) {
    final isVideo = widget.item.kind == 'video' || widget.item.mimeType.startsWith('video/');
    final maxH = MediaQuery.sizeOf(context).height * 0.88;
    return SafeArea(
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          constraints: BoxConstraints(maxWidth: 520, maxHeight: maxH),
          margin: const EdgeInsets.all(12),
          padding: const EdgeInsets.fromLTRB(18, 14, 18, 20),
          decoration: BoxDecoration(
            color: NgmyRecorderStudioColors.panel,
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.35)),
          ),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)))),
                const SizedBox(height: 14),
                Text(_titleC.text, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                Text(
                  'Video · ${_clock(widget.item.durationSec.toDouble())}',
                  style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 16),
                if (_mediaLoading)
                  SizedBox(
                    height: isVideo ? 280 : 140,
                    child: const Center(
                      child: CircularProgressIndicator(color: NgmyRecorderStudioColors.mint, strokeWidth: 2.5),
                    ),
                  )
                else if (widget.item.dataUrl.isEmpty)
                  const Text('Media unavailable — storage was full when saved.', style: TextStyle(color: Colors.white54, fontSize: 12))
                else
                  NgmyLiveCaptureMedia.playbackVideo(
                    key: ValueKey('media-${widget.item.id}-${widget.item.dataUrl.hashCode}'),
                    src: widget.item.dataUrl,
                    mimeType: widget.item.mimeType,
                    height: 280,
                  ),
                const SizedBox(height: 20),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton.icon(
                    onPressed: _exporting ? null : _share,
                    style: FilledButton.styleFrom(
                      backgroundColor: NgmyRecorderStudioColors.emerald,
                      foregroundColor: Colors.white,
                      minimumSize: const Size.fromHeight(48),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    icon: const Icon(Icons.ios_share_rounded),
                    label: const Text('Share', style: TextStyle(fontWeight: FontWeight.w800)),
                  ),
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: _rename,
                        style: OutlinedButton.styleFrom(
                          foregroundColor: NgmyRecorderStudioColors.mint,
                          side: BorderSide(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.6)),
                          minimumSize: const Size.fromHeight(48),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        icon: const Icon(Icons.edit_rounded),
                        label: const Text('Rename', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                TextButton.icon(
                  onPressed: _delete,
                  icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFF87171)),
                  label: const Text('Delete', style: TextStyle(color: Color(0xFFF87171), fontWeight: FontWeight.w800)),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

enum _MicGuideDevice { iphone, android, computer }

class _MicSetupGuideSheet extends StatefulWidget {
  const _MicSetupGuideSheet();

  @override
  State<_MicSetupGuideSheet> createState() => _MicSetupGuideSheetState();
}

class _MicSetupGuideSheetState extends State<_MicSetupGuideSheet> {
  _MicGuideDevice _device = _MicGuideDevice.iphone;

  @override
  Widget build(BuildContext context) {
    final maxH = MediaQuery.sizeOf(context).height * 0.88;
    return SafeArea(
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          constraints: BoxConstraints(maxWidth: 520, maxHeight: maxH),
          margin: const EdgeInsets.all(12),
          padding: const EdgeInsets.fromLTRB(18, 14, 18, 22),
          decoration: BoxDecoration(
            color: NgmyRecorderStudioColors.panel,
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.35)),
          ),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(
                  child: Container(
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)),
                  ),
                ),
                const SizedBox(height: 14),
                const Row(
                  children: [
                    Icon(Icons.info_outline_rounded, color: NgmyRecorderStudioColors.mint, size: 22),
                    SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        'Turn on the microphone',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                const Text(
                  'Pick your device below. Follow the steps so videos record with sound.',
                  style: TextStyle(color: Colors.white54, fontSize: 12, height: 1.45),
                ),
                const SizedBox(height: 16),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    _deviceChip('iPhone', Icons.phone_iphone_rounded, _MicGuideDevice.iphone),
                    _deviceChip('Android', Icons.android_rounded, _MicGuideDevice.android),
                    _deviceChip('Computer', Icons.computer_rounded, _MicGuideDevice.computer),
                  ],
                ),
                const SizedBox(height: 18),
                ..._stepsFor(_device).map(_stepTile),
                const SizedBox(height: 14),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: NgmyRecorderStudioColors.emerald.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: NgmyRecorderStudioColors.mint.withValues(alpha: 0.35)),
                  ),
                  child: const Text(
                    'Tip: Always tap Start Video first — then allow the mic when your device asks. '
                    'Recordings made before the mic is allowed will have no sound.',
                    style: TextStyle(color: Colors.white70, fontSize: 12, height: 1.45, fontWeight: FontWeight.w600),
                  ),
                ),
                const SizedBox(height: 12),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton(
                    onPressed: () => Navigator.pop(context),
                    style: FilledButton.styleFrom(
                      backgroundColor: NgmyRecorderStudioColors.emerald,
                      foregroundColor: Colors.white,
                      minimumSize: const Size.fromHeight(48),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    child: const Text('Got it', style: TextStyle(fontWeight: FontWeight.w900)),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _deviceChip(String label, IconData icon, _MicGuideDevice device) {
    final selected = _device == device;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => setState(() => _device = device),
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            color: selected ? NgmyRecorderStudioColors.emerald.withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.06),
            border: Border.all(color: selected ? NgmyRecorderStudioColors.mint : Colors.white24),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 16, color: selected ? Colors.white : Colors.white60),
              const SizedBox(width: 6),
              Text(
                label,
                style: TextStyle(
                  color: selected ? Colors.white : Colors.white60,
                  fontWeight: FontWeight.w800,
                  fontSize: 12,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _stepTile(String text) {
    final dot = text.indexOf('.');
    final n = dot > 0 ? text.substring(0, dot) : '•';
    final body = dot > 0 ? text.substring(dot + 1).trim() : text;
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 24,
            height: 24,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.35),
              shape: BoxShape.circle,
            ),
            child: Text(n, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11)),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text(body, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.45, fontWeight: FontWeight.w600)),
          ),
        ],
      ),
    );
  }

  List<String> _stepsFor(_MicGuideDevice device) {
    switch (device) {
      case _MicGuideDevice.iphone:
        return const [
          '1. Open ngmy.org in Safari (Add to Home Screen works too).',
          '2. Open Recorder Studio and tap Start Video.',
          '3. Tap Allow when ngmy.org asks — this works with Safari set to Ask or Allow.',
          '4. Recommended: Settings → Safari → Microphone → Ask, then Allow inside ngmy.org when recording.',
          '5. If no prompt appears: tap the AA icon in the address bar → Website Settings → Microphone → Allow.',
          '6. Also check: Settings → Privacy & Security → Microphone → Safari ON.',
          '7. Close Safari completely, reopen ngmy.org, tap Start Video, then Allow.',
        ];
      case _MicGuideDevice.android:
        return const [
          '1. Open ngmy.org in Chrome (recommended).',
          '2. Open Recorder Studio and tap Start Video.',
          '3. When Android asks, tap Allow while using the app.',
          '4. If blocked: tap the lock icon in the address bar → Permissions → Microphone → Allow.',
          '5. Or go to Settings → Apps → Chrome → Permissions → Microphone → Allow.',
          '6. Refresh the page and tap Start Video again.',
        ];
      case _MicGuideDevice.computer:
        return const [
          '1. Open ngmy.org in Chrome, Edge, or Safari.',
          '2. Click Start Video in Recorder Studio.',
          '3. Click Allow in the browser microphone prompt.',
          '4. If blocked: click the lock icon in the address bar → Site settings → Microphone → Allow.',
          '5. On Mac: System Settings → Privacy & Security → Microphone → enable your browser.',
          '6. On Windows: Settings → Privacy → Microphone → allow desktop apps and your browser.',
          '7. Refresh ngmy.org and click Start Video again.',
        ];
    }
  }
}
