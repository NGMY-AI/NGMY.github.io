import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_live_capture.dart';
import 'ngmy_live_capture_blob_store.dart';
import 'ngmy_live_capture_export.dart';
import 'ngmy_live_capture_media.dart';

/// Cool green studio palette — voice memos and video in one place.
abstract final class NgmyRecorderStudioColors {
  static const emerald = Color(0xFF059669);
  static const teal = Color(0xFF14B8A6);
  static const mint = Color(0xFF22C55E);
  static const forest = Color(0xFF065F46);
  static const deep = Color(0xFF042F2E);
  static const panel = Color(0xFF064E3B);
}

enum _StudioMode { voice, video }

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
  _StudioMode _mode = _StudioMode.voice;
  List<NgmyLiveCaptureItem> _items = [];
  bool _loading = true;
  bool _busy = false;

  NgmyLiveCaptureSession get _session => ngmyLiveCaptureSession;

  /// While recording, always reflect the active capture kind from the session
  /// (survives leaving and re-entering Recorder Studio).
  _StudioMode get _displayMode {
    if (_session.recording) {
      return _session.videoMode ? _StudioMode.video : _StudioMode.voice;
    }
    return _mode;
  }

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat(reverse: true);
    if (_session.recording) {
      _mode = _session.videoMode ? _StudioMode.video : _StudioMode.voice;
    }
    _session.addListener(_onSession);
    unawaited(_reload());
  }

  void _onSession() {
    if (!mounted) return;
    if (_session.recording) {
      final synced = _session.videoMode ? _StudioMode.video : _StudioMode.voice;
      if (_mode != synced) _mode = synced;
    }
    setState(() {});
  }

  @override
  void dispose() {
    _session.removeListener(_onSession);
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final items = await NgmyLiveCaptureStore.load(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _items = items.where((e) => e.kind != 'photo' && !e.mimeType.startsWith('image/')).toList();
      _loading = false;
    });
  }

  Future<void> _deleteItem(NgmyLiveCaptureItem item) async {
    await NgmyLiveCaptureStore.deleteItem(widget.userEmail, item.id);
    await _reload();
  }

  void _setMode(_StudioMode mode) {
    if (_session.recording) return;
    _session.lastError = null;
    _session.lastStatus = null;
    setState(() {
      _mode = mode;
      _session.videoMode = mode == _StudioMode.video;
    });
  }

  Future<void> _startRecording() async {
    if (_busy || _session.recording) return;
    _session.lastError = null;
    _session.lastStatus = null;
    setState(() => _busy = true);
    await _session.start(userEmail: widget.userEmail, video: _mode == _StudioMode.video);
    if (mounted) setState(() => _busy = false);
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
          body: SafeArea(
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
                        'Voice memos and videos — tap to play, swipe left to delete.',
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
                  recording ? 'Recording in progress — come back here to stop & save.' : 'Voice memos · video — like a pocket studio.',
                  style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.35),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.14),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: Colors.white24),
            ),
            child: const Icon(Icons.mic_rounded, color: Colors.white, size: 22),
          ),
        ],
      ),
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
                children: [
                  _modeChip('Voice', _displayMode == _StudioMode.voice, Icons.mic_rounded, () => _setMode(_StudioMode.voice)),
                  const SizedBox(width: 8),
                  _modeChip('Video', _displayMode == _StudioMode.video, Icons.videocam_rounded, () => _setMode(_StudioMode.video)),
                  const Spacer(),
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
              if (_displayMode == _StudioMode.video && !recording) ...[
                const SizedBox(height: 10),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  children: [
                    _smallChip('YouTube 16:9', _session.aspect == 'youtube', () => setState(() => _session.aspect = 'youtube')),
                    _smallChip('TikTok 9:16', _session.aspect == 'tiktok', () => setState(() => _session.aspect = 'tiktok')),
                    _smallChip('Square', _session.aspect == 'square', () => setState(() => _session.aspect = 'square')),
                    _flipCameraIcon(),
                  ],
                ),
              ],
              const SizedBox(height: 16),
              if (recording && _displayMode == _StudioMode.video)
                KeyedSubtree(
                  key: ValueKey('cam-${identityHashCode(_session.previewStream)}'),
                  child: NgmyLiveCaptureMedia.liveCameraPreview(
                    stream: _session.previewStream,
                    height: _session.aspect == 'tiktok' ? 280 : 220,
                    mirror: _session.facingMode == 'user',
                  ),
                )
              else if (recording && _displayMode == _StudioMode.voice)
                _WaveBars(active: true, pulse: p)
              else
                _idleHint(),
              const SizedBox(height: 16),
              if (recording)
                const Text('● LIVE', style: TextStyle(color: NgmyRecorderStudioColors.mint, fontWeight: FontWeight.w900, letterSpacing: 1.4))
              else
                Text(
                  _displayMode == _StudioMode.video
                      ? 'Record video with front or back camera. Play back after you stop.'
                      : 'Record voice memos — clear audio like iPhone Voice Memos.',
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
                  icon: Icon(recording ? Icons.stop_rounded : (_displayMode == _StudioMode.video ? Icons.videocam_rounded : Icons.mic_rounded)),
                  label: Text(
                    recording ? 'Stop & Save' : 'Start ${_displayMode == _StudioMode.video ? 'Video' : 'Voice'}',
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
      child: const Text('Nothing here yet — record your first voice memo or video.', style: TextStyle(color: Colors.white54)),
    );
  }

  Widget _libraryTile(NgmyLiveCaptureItem item) {
    final isVideo = item.kind == 'video';
    final icon = isVideo ? Icons.videocam_rounded : Icons.graphic_eq_rounded;
    final label = isVideo ? 'VIDEO · ${NgmyLiveCaptureSession.formatClock(item.durationSec)}' : 'VOICE · ${NgmyLiveCaptureSession.formatClock(item.durationSec)}';
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
                  Icon(icon, color: NgmyRecorderStudioColors.teal),
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

  Widget _idleHint() {
    final icon = _mode == _StudioMode.video ? Icons.videocam_rounded : Icons.graphic_eq_rounded;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 32),
      decoration: BoxDecoration(
        color: Colors.black.withValues(alpha: 0.18),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: Colors.white12),
      ),
      child: Icon(icon, size: 52, color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.85)),
    );
  }

  Widget _modeChip(String label, bool on, IconData icon, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(999),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(999),
          color: on ? NgmyRecorderStudioColors.emerald.withValues(alpha: 0.35) : Colors.transparent,
          border: Border.all(color: on ? NgmyRecorderStudioColors.mint : Colors.white24, width: 1.5),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 22, color: on ? NgmyRecorderStudioColors.mint : Colors.white70),
            const SizedBox(width: 8),
            Text(label, style: TextStyle(color: Colors.white, fontWeight: on ? FontWeight.w900 : FontWeight.w600, fontSize: 16)),
          ],
        ),
      ),
    );
  }

  Widget _flipCameraIcon() {
    final isFront = _session.facingMode == 'user';
    return Tooltip(
      message: isFront ? 'Switch to back camera' : 'Switch to front camera',
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => setState(() => _session.facingMode = isFront ? 'environment' : 'user'),
          borderRadius: BorderRadius.circular(10),
          child: Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Colors.white.withValues(alpha: 0.08),
              border: Border.all(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.45)),
            ),
            child: Icon(Icons.cameraswitch_rounded, size: 17, color: Colors.white.withValues(alpha: 0.85)),
          ),
        ),
      ),
    );
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

class _WaveBars extends StatelessWidget {
  const _WaveBars({required this.active, required this.pulse});
  final bool active;
  final double pulse;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 64,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: List.generate(28, (i) {
          final h = 10.0 + (math.sin((i * 0.55) + pulse * math.pi * 2).abs() * (active ? 46 : 18));
          return Container(
            width: 5,
            height: h,
            margin: const EdgeInsets.symmetric(horizontal: 1.5),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(99),
              color: Color.lerp(NgmyRecorderStudioColors.teal, NgmyRecorderStudioColors.mint, pulse),
            ),
          );
        }),
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
                  '${isVideo ? 'Video' : 'Voice Memo'} · ${_clock(widget.item.durationSec.toDouble())}',
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
                else if (isVideo || widget.item.mimeType.startsWith('video/'))
                  NgmyLiveCaptureMedia.playbackVideo(
                    key: ValueKey('media-${widget.item.id}-${widget.item.dataUrl.hashCode}'),
                    src: widget.item.dataUrl,
                    mimeType: widget.item.mimeType,
                    height: 280,
                  )
                else
                  NgmyLiveCaptureMedia.playbackAudio(
                    key: ValueKey('aud-${widget.item.id}-${widget.item.dataUrl.hashCode}'),
                    src: widget.item.dataUrl,
                    mimeType: widget.item.mimeType,
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
