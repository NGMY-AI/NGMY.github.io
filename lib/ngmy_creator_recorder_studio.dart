import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_live_capture.dart';
import 'ngmy_live_capture_blob_store.dart';
import 'ngmy_live_capture_export.dart';
import 'ngmy_live_capture_media.dart';

/// Cool green studio palette — photos, voice memos, and video in one place.
abstract final class NgmyRecorderStudioColors {
  static const emerald = Color(0xFF059669);
  static const teal = Color(0xFF14B8A6);
  static const mint = Color(0xFF22C55E);
  static const forest = Color(0xFF065F46);
  static const deep = Color(0xFF042F2E);
  static const panel = Color(0xFF064E3B);
}

enum _StudioMode { photo, voice, video }

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

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat(reverse: true);
    _session.addListener(_onSession);
    unawaited(_reload());
  }

  void _onSession() {
    if (mounted) setState(() {});
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
      _items = items;
      _loading = false;
    });
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
    if (_busy || _session.recording || _mode == _StudioMode.photo) return;
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

  Future<void> _capturePhoto({required ImageSource source}) async {
    if (_busy || _session.recording) return;
    _session.lastError = null;
    _session.lastStatus = null;
    setState(() => _busy = true);
    try {
      final picker = ImagePicker();
      final picked = await picker.pickImage(source: source, imageQuality: 90, maxWidth: 4096);
      if (picked == null || !mounted) return;
      final bytes = await picked.readAsBytes();
      if (bytes.isEmpty) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Photo was empty — try again.'), backgroundColor: Color(0xFFDC2626)),
          );
        }
        return;
      }
      final id = DateTime.now().microsecondsSinceEpoch.toString();
      final title = 'Photo · ${_photoTitleStamp(DateTime.now())}';
      final stored = await NgmyLiveCaptureBlobStore.putBytes(id, bytes, mimeType: 'image/jpeg');
      var playUrl = '';
      if (stored) {
        playUrl = await NgmyLiveCaptureBlobStore.getPlayableUrl(id) ?? '';
      }
      if (playUrl.isEmpty && bytes.length <= 700000) {
        playUrl = 'data:image/jpeg;base64,${base64Encode(bytes)}';
      }
      if (playUrl.isEmpty) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Photo captured but could not be saved on this device.'),
              backgroundColor: Color(0xFFDC2626),
              behavior: SnackBarBehavior.floating,
            ),
          );
        }
        return;
      }
      final item = NgmyLiveCaptureItem(
        id: id,
        title: title,
        kind: 'photo',
        createdAt: DateTime.now(),
        dataUrl: stored ? '' : playUrl,
        mimeType: 'image/jpeg',
        durationSec: 0,
      );
      final existing = await NgmyLiveCaptureStore.load(widget.userEmail);
      await NgmyLiveCaptureStore.save(widget.userEmail, [item, ...existing]);
      if (stored) item.dataUrl = playUrl;
      _session.lastError = null;
      _session.lastStatus = 'Photo saved to your studio library.';
      await _reload();
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Photo saved to your studio library'),
            backgroundColor: NgmyRecorderStudioColors.emerald,
            behavior: SnackBarBehavior.floating,
          ),
        );
        await _openItem(item);
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Could not take photo: $e'), backgroundColor: const Color(0xFFDC2626)),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _openItem(NgmyLiveCaptureItem item) async {
    if (item.dataUrl.isEmpty) {
      item.dataUrl = await NgmyLiveCaptureBlobStore.getPlayableUrl(item.id) ?? '';
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
                        'Photos, voice memos, and videos — tap any item to play or download.',
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
                  recording ? 'Recording in progress — come back here to stop & save.' : 'Photos · voice memos · video — like a pocket studio.',
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
                  _modeChip('Photo', _mode == _StudioMode.photo, Icons.photo_camera_rounded, () => _setMode(_StudioMode.photo)),
                  const SizedBox(width: 8),
                  _modeChip('Voice', _mode == _StudioMode.voice, Icons.mic_rounded, () => _setMode(_StudioMode.voice)),
                  const SizedBox(width: 8),
                  _modeChip('Video', _mode == _StudioMode.video, Icons.videocam_rounded, () => _setMode(_StudioMode.video)),
                  const Spacer(),
                  if (_mode != _StudioMode.photo)
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
              if (_mode == _StudioMode.video && !recording) ...[
                const SizedBox(height: 12),
                Row(
                  children: [
                    _smallChip('Front', _session.facingMode == 'user', () => setState(() => _session.facingMode = 'user')),
                    const SizedBox(width: 8),
                    _smallChip('Back', _session.facingMode == 'environment', () => setState(() => _session.facingMode = 'environment')),
                  ],
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    _smallChip('YouTube 16:9', _session.aspect == 'youtube', () => setState(() => _session.aspect = 'youtube')),
                    _smallChip('TikTok 9:16', _session.aspect == 'tiktok', () => setState(() => _session.aspect = 'tiktok')),
                    _smallChip('Square', _session.aspect == 'square', () => setState(() => _session.aspect = 'square')),
                  ],
                ),
              ],
              const SizedBox(height: 16),
              if (_mode == _StudioMode.photo)
                _photoControls()
              else if (recording && _mode == _StudioMode.video)
                KeyedSubtree(
                  key: ValueKey('cam-${identityHashCode(_session.previewStream)}'),
                  child: NgmyLiveCaptureMedia.liveCameraPreview(
                    stream: _session.previewStream,
                    height: _session.aspect == 'tiktok' ? 280 : 220,
                    mirror: _session.facingMode == 'user',
                  ),
                )
              else if (recording && _mode == _StudioMode.voice)
                _WaveBars(active: true, pulse: p)
              else
                _idleHint(),
              const SizedBox(height: 16),
              if (_mode == _StudioMode.photo)
                const SizedBox.shrink()
              else if (recording)
                const Text('● LIVE', style: TextStyle(color: NgmyRecorderStudioColors.mint, fontWeight: FontWeight.w900, letterSpacing: 1.4))
              else
                Text(
                  _mode == _StudioMode.video
                      ? 'Record video with front or back camera. Play back after you stop.'
                      : 'Record voice memos — clear audio like iPhone Voice Memos.',
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.45),
                ),
              if (_mode != _StudioMode.photo) ...[
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
                    icon: Icon(recording ? Icons.stop_rounded : (_mode == _StudioMode.video ? Icons.videocam_rounded : Icons.mic_rounded)),
                    label: Text(
                      recording ? 'Stop & Save' : 'Start ${_mode == _StudioMode.video ? 'Video' : 'Voice'}',
                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15),
                    ),
                  ),
                ),
              ],
            ],
          ),
        );
      },
    );
  }

  Widget _photoControls() {
    return Column(
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 28),
          decoration: BoxDecoration(
            color: Colors.black.withValues(alpha: 0.22),
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.4)),
          ),
          child: Column(
            children: [
              Icon(Icons.photo_camera_rounded, size: 56, color: NgmyRecorderStudioColors.mint.withValues(alpha: 0.9)),
              const SizedBox(height: 10),
              const Text('Snap a photo or pick from gallery', style: TextStyle(color: Colors.white70, fontSize: 13)),
            ],
          ),
        ),
        const SizedBox(height: 14),
        Row(
          children: [
            Expanded(
              child: FilledButton.icon(
                onPressed: _busy ? null : () => _capturePhoto(source: ImageSource.camera),
                style: FilledButton.styleFrom(
                  backgroundColor: NgmyRecorderStudioColors.emerald,
                  foregroundColor: Colors.white,
                  minimumSize: const Size.fromHeight(52),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                icon: const Icon(Icons.camera_alt_rounded),
                label: const Text('Take Photo', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: OutlinedButton.icon(
                onPressed: _busy ? null : () => _capturePhoto(source: ImageSource.gallery),
                style: OutlinedButton.styleFrom(
                  foregroundColor: NgmyRecorderStudioColors.mint,
                  side: BorderSide(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.7)),
                  minimumSize: const Size.fromHeight(52),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                icon: const Icon(Icons.photo_library_rounded),
                label: const Text('Gallery', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
          ],
        ),
      ],
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

  Widget _emptyLibrary() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.04),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: NgmyRecorderStudioColors.teal.withValues(alpha: 0.25)),
      ),
      child: const Text('Nothing here yet — take a photo or record your first memo.', style: TextStyle(color: Colors.white54)),
    );
  }

  Widget _libraryTile(NgmyLiveCaptureItem item) {
    IconData icon;
    String label;
    switch (item.kind) {
      case 'photo':
        icon = Icons.photo_rounded;
        label = 'PHOTO';
        break;
      case 'video':
        icon = Icons.videocam_rounded;
        label = 'VIDEO · ${NgmyLiveCaptureSession.formatClock(item.durationSec)}';
        break;
      default:
        icon = Icons.graphic_eq_rounded;
        label = 'VOICE · ${NgmyLiveCaptureSession.formatClock(item.durationSec)}';
    }
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
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
                if (item.kind == 'photo' && item.dataUrl.isNotEmpty)
                  ClipRRect(
                    borderRadius: BorderRadius.circular(10),
                    child: SizedBox(width: 48, height: 48, child: _photoThumb(item.dataUrl)),
                  )
                else
                  Icon(icon, color: NgmyRecorderStudioColors.teal),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(item.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                      Text('$label · Tap to open', style: const TextStyle(color: Colors.white54, fontSize: 11)),
                    ],
                  ),
                ),
                const Icon(Icons.chevron_right_rounded, color: Colors.white38),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _modeChip(String label, bool on, IconData icon, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(999),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(999),
          color: on ? NgmyRecorderStudioColors.emerald.withValues(alpha: 0.35) : Colors.transparent,
          border: Border.all(color: on ? NgmyRecorderStudioColors.mint : Colors.white24),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 16, color: on ? NgmyRecorderStudioColors.mint : Colors.white70),
            const SizedBox(width: 6),
            Text(label, style: TextStyle(color: Colors.white, fontWeight: on ? FontWeight.w900 : FontWeight.w600, fontSize: 12)),
          ],
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

String _photoTitleStamp(DateTime dt) {
  final h = dt.hour > 12 ? dt.hour - 12 : (dt.hour == 0 ? 12 : dt.hour);
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  return '${dt.month}/${dt.day} · $h:${dt.minute.toString().padLeft(2, '0')} $ampm';
}

Widget _photoThumb(String src) {
  if (src.startsWith('blob:') || src.startsWith('http')) {
    return Image.network(src, fit: BoxFit.cover, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_rounded, color: Colors.white38));
  }
  final bytes = _decodeImageBytes(src);
  if (bytes != null) return Image.memory(bytes, fit: BoxFit.cover);
  return const Icon(Icons.photo_rounded, color: NgmyRecorderStudioColors.teal);
}

Widget _photoPreview(String src, {double maxHeight = 320}) {
  if (src.isEmpty) {
    return const Text('Photo unavailable on this device.', style: TextStyle(color: Colors.white54));
  }
  if (src.startsWith('blob:') || src.startsWith('http')) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(14),
      child: Image.network(src, fit: BoxFit.contain, height: maxHeight),
    );
  }
  final bytes = _decodeImageBytes(src);
  if (bytes != null) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(14),
      child: Image.memory(bytes, fit: BoxFit.contain, height: maxHeight),
    );
  }
  return const Text('Could not load photo.', style: TextStyle(color: Colors.white54));
}

Uint8List? _decodeImageBytes(String src) {
  try {
    if (!src.startsWith('data:')) return null;
    final comma = src.indexOf(',');
    if (comma < 0) return null;
    final header = src.substring(0, comma).toLowerCase();
    final payload = src.substring(comma + 1);
    if (header.contains(';base64')) {
      var cleaned = payload.replaceAll(RegExp(r'\s'), '');
      cleaned = cleaned.replaceAll('-', '+').replaceAll('_', '/');
      final pad = cleaned.length % 4;
      if (pad > 0) cleaned = cleaned.padRight(cleaned.length + (4 - pad), '=');
      return base64Decode(cleaned);
    }
    return Uint8List.fromList(Uri.decodeComponent(payload).codeUnits);
  } catch (_) {
    return null;
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
    final url = await NgmyLiveCaptureBlobStore.getPlayableUrl(widget.item.id);
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

  Future<void> _download() async {
    setState(() => _exporting = true);
    final ok = await ngmyLiveCaptureDownload(widget.item);
    if (mounted) {
      setState(() => _exporting = false);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(ok ? 'Download started — check Files or Downloads.' : 'Could not download this item.'),
          backgroundColor: ok ? NgmyRecorderStudioColors.emerald : const Color(0xFFDC2626),
          behavior: SnackBarBehavior.floating,
        ),
      );
    }
  }

  Future<void> _share() async {
    setState(() => _exporting = true);
    final ok = await ngmyLiveCaptureShare(widget.item);
    if (mounted) {
      setState(() => _exporting = false);
      if (!ok) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Could not share — try Download instead.'),
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
    final isPhoto = widget.item.kind == 'photo';
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
                  isPhoto ? 'Photo' : '${isVideo ? 'Video' : 'Voice Memo'} · ${_clock(widget.item.durationSec.toDouble())}',
                  style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 16),
                if (_mediaLoading)
                  SizedBox(
                    height: isPhoto ? 120 : (isVideo ? 240 : 140),
                    child: const Center(
                      child: CircularProgressIndicator(color: NgmyRecorderStudioColors.mint, strokeWidth: 2.5),
                    ),
                  )
                else if (widget.item.dataUrl.isEmpty)
                  const Text('Media unavailable — storage was full when saved.', style: TextStyle(color: Colors.white54, fontSize: 12))
                else if (isPhoto)
                  _photoPreview(widget.item.dataUrl)
                else if (isVideo || widget.item.mimeType.startsWith('video/'))
                  NgmyLiveCaptureMedia.playbackVideo(
                    key: ValueKey('media-${widget.item.id}-${widget.item.dataUrl.hashCode}'),
                    src: widget.item.dataUrl,
                    mimeType: widget.item.mimeType,
                    height: isVideo ? 240 : 160,
                  )
                else
                  NgmyLiveCaptureMedia.playbackAudio(
                    key: ValueKey('aud-${widget.item.id}-${widget.item.dataUrl.hashCode}'),
                    src: widget.item.dataUrl,
                    mimeType: widget.item.mimeType,
                  ),
                const SizedBox(height: 20),
                Row(
                  children: [
                    Expanded(
                      child: FilledButton.icon(
                        onPressed: _exporting ? null : _download,
                        style: FilledButton.styleFrom(
                          backgroundColor: NgmyRecorderStudioColors.forest,
                          foregroundColor: Colors.white,
                          minimumSize: const Size.fromHeight(48),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        icon: const Icon(Icons.download_rounded),
                        label: const Text('Download', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
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
                  ],
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
