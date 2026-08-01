import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_live_capture_blob_store.dart';
import 'ngmy_live_capture_engine.dart';
import 'ngmy_live_capture_media.dart';
import 'ngmy_vault_web_io.dart';

final NgmyLiveCaptureSession ngmyLiveCaptureSession = NgmyLiveCaptureSession._();

Future<void> showNgmyLiveCaptureDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Live Capture',
    barrierColor: Colors.black.withValues(alpha: 0.72),
    transitionDuration: const Duration(milliseconds: 380),
    pageBuilder: (ctx, a1, a2) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, a2, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutCubic);
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.92, end: 1).animate(curved),
          child: NgmyLiveCaptureScreen(userEmail: userEmail),
        ),
      );
    },
  );
}

Future<int> ngmyLiveCaptureCount({required String userEmail}) async {
  final items = await NgmyLiveCaptureStore.load(userEmail);
  return items.length;
}

class NgmyLiveCaptureItem {
  NgmyLiveCaptureItem({
    required this.id,
    required this.title,
    required this.kind,
    required this.createdAt,
    required this.dataUrl,
    required this.mimeType,
    required this.durationSec,
  });

  final String id;
  String title;
  final String kind; // audio | video
  final DateTime createdAt;
  String dataUrl;
  final String mimeType;
  final int durationSec;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'kind': kind,
        'createdAt': createdAt.toUtc().toIso8601String(),
        // The media payload itself is kept out of SharedPreferences/localStorage
        // (see NgmyLiveCaptureBlobStore) — a single recording can be several MB,
        // which blows past the ~5-10MB per-origin localStorage quota on mobile.
        'dataUrl': '',
        'mimeType': mimeType,
        'durationSec': durationSec,
      };

  factory NgmyLiveCaptureItem.fromJson(Map<String, dynamic> json) => NgmyLiveCaptureItem(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? 'Capture').toString(),
        kind: (json['kind'] ?? 'audio').toString(),
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString())?.toLocal() ?? DateTime.now(),
        dataUrl: (json['dataUrl'] ?? '').toString(),
        mimeType: (json['mimeType'] ?? 'audio/webm').toString(),
        durationSec: (json['durationSec'] as num?)?.toInt() ?? 0,
      );
}

class NgmyLiveCaptureStore {
  static String _key(String email) =>
      'ngmy_live_capture_v1_${email.trim().isEmpty ? 'guest' : email.trim().toLowerCase().hashCode.abs()}';

  static Future<List<NgmyLiveCaptureItem>> load(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key(email));
      if (raw == null || raw.isEmpty) return [];
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      final items = decoded
          .whereType<Map>()
          .map((e) => NgmyLiveCaptureItem.fromJson(Map<String, dynamic>.from(e)))
          .toList()
        ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
      for (final item in items) {
        final url = await NgmyLiveCaptureBlobStore.getPlayableUrl(item.id, mimeType: item.mimeType);
        if (url != null && url.isNotEmpty) {
          item.dataUrl = url;
        }
      }
      return items;
    } catch (_) {
      return [];
    }
  }

  /// Returns false if the recording could not be persisted for later — the
  /// caller should still let the user play/download it in this session.
  static Future<bool> save(String email, List<NgmyLiveCaptureItem> items) async {
    final trimmed = items.take(24).toList();
    final dropped = items.skip(24);
    if (dropped.isNotEmpty) {
      unawaited(NgmyLiveCaptureBlobStore.deleteMany(dropped.map((e) => e.id)));
    }
    var mediaOk = true;
    for (final item in trimmed) {
      if (item.dataUrl.isEmpty) {
        // Media already in IndexedDB (photos putBytes, recordings putBlob).
        final existing = await NgmyLiveCaptureBlobStore.getPlayableUrl(item.id, mimeType: item.mimeType);
        if (existing == null || existing.isEmpty) mediaOk = false;
        continue;
      }
      final ok = await NgmyLiveCaptureBlobStore.putMedia(item.id, item.dataUrl, mimeType: item.mimeType);
      if (ok) {
        item.dataUrl = '';
      } else {
        mediaOk = false;
      }
    }
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_key(email), jsonEncode(trimmed.map((e) => e.toJson()).toList()));
      return mediaOk;
    } catch (e) {
      debugPrint('[live_capture] save: $e');
      return false;
    }
  }

  static Future<void> deleteItem(String email, String id) async {
    final items = await load(email);
    items.removeWhere((e) => e.id == id);
    await save(email, items);
    await NgmyLiveCaptureBlobStore.delete(id);
  }
}

class NgmyLiveCaptureSession extends ChangeNotifier {
  NgmyLiveCaptureSession._();

  final NgmyLiveCaptureEngine _engine = NgmyLiveCaptureEngine();
  Timer? _tick;
  DateTime? _startedAt;
  String? _userEmail;
  String? lastError;
  String? lastStatus;
  bool videoMode = false;
  /// `user` = front / selfie, `environment` = back camera.
  String facingMode = 'user';
  /// `youtube` = 16:9, `tiktok` = 9:16 vertical, `square` = 1:1.
  String aspect = 'youtube';
  bool recording = false;
  int elapsedSec = 0;

  Object? get previewStream => _engine.previewStream;

  String? get activeUserEmail => _userEmail;

  bool get isBackgroundRecording => recording;

  Future<bool> start({required String userEmail, required bool video}) async {
    lastError = null;
    lastStatus = null;
    final ok = await _engine.start(
      video: video,
      facingMode: facingMode,
      aspect: aspect,
    );
    if (!ok) {
      lastError = _engine.lastError ?? 'Could not start recording on this device.';
      notifyListeners();
      return false;
    }
    _userEmail = userEmail;
    videoMode = video;
    recording = true;
    elapsedSec = 0;
    _startedAt = DateTime.now();
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(seconds: 1), (_) {
      if (!recording || _startedAt == null) return;
      elapsedSec = DateTime.now().difference(_startedAt!).inSeconds;
      notifyListeners();
    });
    lastStatus = 'Recording — tap Stop & Save when finished.';
    notifyListeners();
    return true;
  }

  Future<NgmyLiveCaptureItem?> stopAndSave() async {
    _tick?.cancel();
    final result = await _engine.stop();
    recording = false;
    if (result == null) {
      lastError = _engine.lastError ?? 'Nothing was captured.';
      notifyListeners();
      return null;
    }
    final email = _userEmail ?? '';
    final id = DateTime.now().microsecondsSinceEpoch.toString();
    var mediaOk = true;
    final blob = result.captureBlob;
    if (blob != null) {
      mediaOk = await NgmyLiveCaptureBlobStore.putBlob(id, blob, mimeType: result.mimeType);
    } else if (result.dataUrl.isNotEmpty) {
      mediaOk = await NgmyLiveCaptureBlobStore.putMedia(id, result.dataUrl, mimeType: result.mimeType);
    }
    final playUrl = mediaOk ? (await NgmyLiveCaptureBlobStore.getPlayableUrl(id, mimeType: result.mimeType) ?? result.dataUrl) : result.dataUrl;
    final item = NgmyLiveCaptureItem(
      id: id,
      title: '${videoMode ? 'Video' : 'Voice Memo'} ${NgmyLiveCaptureSession._formatClock(elapsedSec)}',
      kind: videoMode ? 'video' : 'audio',
      createdAt: DateTime.now(),
      dataUrl: mediaOk ? '' : playUrl,
      mimeType: result.mimeType,
      durationSec: elapsedSec,
    );
    final existing = await NgmyLiveCaptureStore.load(email);
    final indexOk = await NgmyLiveCaptureStore.save(email, [item, ...existing]);
    if (mediaOk) item.dataUrl = playUrl;
    if (mediaOk && indexOk) {
      lastError = null;
      lastStatus = 'Saved. Open it below to play, edit, or download.';
    } else if (!mediaOk) {
      lastError = 'Captured, but could not save on this device — download it from the player before you leave.';
      lastStatus = null;
    } else {
      lastStatus = 'Saved. Open it below to play, edit, or download.';
    }
    notifyListeners();
    return item;
  }

  String clockLabel() => formatClock(elapsedSec);

  static String formatClock(int sec) => _formatClock(sec);

  static String _formatClock(int sec) {
    final m = (sec ~/ 60).toString().padLeft(2, '0');
    final s = (sec % 60).toString().padLeft(2, '0');
    return '$m:$s';
  }
}

class NgmyLiveCaptureScreen extends StatefulWidget {
  const NgmyLiveCaptureScreen({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<NgmyLiveCaptureScreen> createState() => _NgmyLiveCaptureScreenState();
}

class _NgmyLiveCaptureScreenState extends State<NgmyLiveCaptureScreen> with TickerProviderStateMixin {
  late final AnimationController _pulse;
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

  Future<void> _start() async {
    if (_busy || _session.recording) return;
    setState(() => _busy = true);
    await _session.start(userEmail: widget.userEmail, video: _session.videoMode);
    if (mounted) setState(() => _busy = false);
  }

  Future<void> _stop() async {
    if (_busy || !_session.recording) return;
    setState(() => _busy = true);
    final item = await _session.stopAndSave();
    if (!mounted) return;
    setState(() => _busy = false);
    if (item != null) {
      await _reload();
      if (mounted) await _openMemo(item);
    }
  }

  Future<void> _openMemo(NgmyLiveCaptureItem item) async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _VoiceMemoSheet(
        item: item,
        userEmail: widget.userEmail,
        onChanged: () async {
          await _reload();
        },
      ),
    );
    if (mounted) await _reload();
  }

  void _closeOrMinimize() => Navigator.pop(context);

  @override
  Widget build(BuildContext context) {
    final recording = _session.recording;
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 520, maxHeight: 780),
        child: Material(
          color: const Color(0xFF0B0F19),
          borderRadius: BorderRadius.circular(28),
          clipBehavior: Clip.antiAlias,
          child: Column(
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(18, 16, 8, 16),
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFFDC2626), Color(0xFF7C3AED), Color(0xFF06B6D4)],
                  ),
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('Live Capture', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                          const SizedBox(height: 4),
                          Text(
                            recording
                                ? 'Still recording — Keep going and take your call.'
                                : 'Voice Memos + camera. Play, edit, and download in-app.',
                            style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.35),
                          ),
                        ],
                      ),
                    ),
                    if (recording)
                      TextButton(
                        onPressed: _closeOrMinimize,
                        child: const Text('Keep going', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                      )
                    else
                      IconButton(onPressed: _closeOrMinimize, icon: const Icon(Icons.close_rounded, color: Colors.white)),
                  ],
                ),
              ),
              Expanded(
                child: ListView(
                  padding: const EdgeInsets.fromLTRB(18, 18, 18, 24),
                  children: [
                    AnimatedBuilder(
                      animation: _pulse,
                      builder: (context, child) {
                        final p = Curves.easeInOut.transform(_pulse.value);
                        return Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(
                              color: recording ? Color.lerp(const Color(0xFFEF4444), Colors.white, p * 0.35)! : Colors.white12,
                            ),
                            gradient: LinearGradient(
                              begin: Alignment(-1 + p, -0.4),
                              end: Alignment(1 - p, 0.6),
                              colors: [
                                Color.lerp(const Color(0xFF111827), const Color(0xFF1F2937), p)!,
                                const Color(0xFF0B1220),
                                Color.lerp(const Color(0xFF0F172A), const Color(0xFF164E63), p * 0.5)!,
                              ],
                            ),
                          ),
                          child: Column(
                            children: [
                              Row(
                                children: [
                                  _modeChip('Voice', !_session.videoMode, () {
                                    if (recording) return;
                                    setState(() => _session.videoMode = false);
                                  }),
                                  const SizedBox(width: 8),
                                  _modeChip('Video', _session.videoMode, () {
                                    if (recording) return;
                                    setState(() => _session.videoMode = true);
                                  }),
                                  const Spacer(),
                                  Text(
                                    _session.clockLabel(),
                                    style: TextStyle(
                                      color: recording ? const Color(0xFFF87171) : Colors.white,
                                      fontWeight: FontWeight.w900,
                                      fontSize: 28,
                                      letterSpacing: 1.2,
                                    ),
                                  ),
                                ],
                              ),
                              if (_session.videoMode && !recording) ...[
                                const SizedBox(height: 12),
                                Row(
                                  children: [
                                    _modeChip('Front', _session.facingMode == 'user', () {
                                      setState(() => _session.facingMode = 'user');
                                    }),
                                    const SizedBox(width: 8),
                                    _modeChip('Back', _session.facingMode == 'environment', () {
                                      setState(() => _session.facingMode = 'environment');
                                    }),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                Row(
                                  children: [
                                    _modeChip('YouTube', _session.aspect == 'youtube', () {
                                      setState(() => _session.aspect = 'youtube');
                                    }),
                                    const SizedBox(width: 8),
                                    _modeChip('TikTok', _session.aspect == 'tiktok', () {
                                      setState(() => _session.aspect = 'tiktok');
                                    }),
                                    const SizedBox(width: 8),
                                    _modeChip('Square', _session.aspect == 'square', () {
                                      setState(() => _session.aspect = 'square');
                                    }),
                                  ],
                                ),
                              ],
                              if (recording && _session.videoMode) ...[
                                const SizedBox(height: 14),
                                KeyedSubtree(
                                  key: ValueKey('cam-${identityHashCode(_session.previewStream)}'),
                                  child: NgmyLiveCaptureMedia.liveCameraPreview(
                                    stream: _session.previewStream,
                                    height: _session.aspect == 'tiktok' ? 280 : 220,
                                    mirror: _session.facingMode == 'user',
                                  ),
                                ),
                              ] else if (recording && !_session.videoMode) ...[
                                const SizedBox(height: 14),
                                _WaveBars(active: true, pulse: p),
                              ],
                              const SizedBox(height: 16),
                              if (recording)
                                const Text('LIVE · BACKGROUND SAFE', style: TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w900, letterSpacing: 1.2))
                              else
                                Text(
                                  _session.videoMode
                                      ? 'Pick front/back camera and YouTube or TikTok size, then record. Play it back after you stop.'
                                      : 'Record voice clearly. Play and download after you stop & save.',
                                  textAlign: TextAlign.center,
                                  style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.45),
                                ),
                              const SizedBox(height: 16),
                              Row(
                                children: [
                                  Expanded(
                                    child: SizedBox(
                                      height: 52,
                                      child: FilledButton(
                                        onPressed: _busy ? null : (recording ? _stop : _start),
                                        style: FilledButton.styleFrom(
                                          backgroundColor: recording ? const Color(0xFFEF4444) : const Color(0xFF06B6D4),
                                          foregroundColor: Colors.white,
                                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                                        ),
                                        child: Text(
                                          recording ? 'Stop & Save' : 'Start ${_session.videoMode ? 'Video' : 'Voice'}',
                                          style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15),
                                        ),
                                      ),
                                    ),
                                  ),
                                  if (recording) ...[
                                    const SizedBox(width: 10),
                                    SizedBox(
                                      height: 52,
                                      child: OutlinedButton(
                                        onPressed: _closeOrMinimize,
                                        style: OutlinedButton.styleFrom(
                                          foregroundColor: Colors.white,
                                          side: const BorderSide(color: Colors.white38),
                                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                                        ),
                                        child: const Text('Leave open', style: TextStyle(fontWeight: FontWeight.w800)),
                                      ),
                                    ),
                                  ],
                                ],
                              ),
                            ],
                          ),
                        );
                      },
                    ),
                    if (_session.lastError != null) ...[
                      const SizedBox(height: 12),
                      Text(_session.lastError!, style: const TextStyle(color: Color(0xFFFCA5A5), fontSize: 12)),
                    ] else if (_session.lastStatus != null) ...[
                      const SizedBox(height: 12),
                      Text(_session.lastStatus!, style: const TextStyle(color: Color(0xFF86EFAC), fontSize: 12)),
                    ],
                    const SizedBox(height: 22),
                    const Text('Recent captures', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                    const SizedBox(height: 10),
                    if (_loading)
                      const Padding(padding: EdgeInsets.all(24), child: Center(child: CircularProgressIndicator(color: Color(0xFF22D3EE))))
                    else if (_items.isEmpty)
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(18),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.04),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: Colors.white12),
                        ),
                        child: const Text('No captures yet.', style: TextStyle(color: Colors.white54)),
                      )
                    else
                      ..._items.map((item) {
                        return Padding(
                          padding: const EdgeInsets.only(bottom: 10),
                          child: Material(
                            color: Colors.white.withValues(alpha: 0.05),
                            borderRadius: BorderRadius.circular(16),
                            child: InkWell(
                              borderRadius: BorderRadius.circular(16),
                              onTap: () => _openMemo(item),
                              child: Padding(
                                padding: const EdgeInsets.all(14),
                                child: Row(
                                  children: [
                                    Icon(
                                      item.kind == 'video' ? Icons.videocam_rounded : Icons.graphic_eq_rounded,
                                      color: const Color(0xFF22D3EE),
                                    ),
                                    const SizedBox(width: 12),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(item.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                                          Text(
                                            '${item.kind == 'video' ? 'VIDEO' : 'VOICE'} · ${NgmyLiveCaptureSession._formatClock(item.durationSec)} · Tap to play',
                                            style: const TextStyle(color: Colors.white54, fontSize: 11),
                                          ),
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
                      }),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _modeChip(String label, bool on, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(999),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(999),
          color: on ? Colors.white.withValues(alpha: 0.16) : Colors.transparent,
          border: Border.all(color: on ? Colors.white54 : Colors.white24),
        ),
        child: Text(label, style: TextStyle(color: Colors.white, fontWeight: on ? FontWeight.w900 : FontWeight.w600, fontSize: 12)),
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
              color: Color.lerp(const Color(0xFF22D3EE), const Color(0xFFEF4444), pulse),
            ),
          );
        }),
      ),
    );
  }
}

class _VoiceMemoSheet extends StatefulWidget {
  const _VoiceMemoSheet({required this.item, required this.userEmail, required this.onChanged});

  final NgmyLiveCaptureItem item;
  final String userEmail;
  final Future<void> Function() onChanged;

  @override
  State<_VoiceMemoSheet> createState() => _VoiceMemoSheetState();
}

class _VoiceMemoSheetState extends State<_VoiceMemoSheet> {
  late final TextEditingController _titleC;
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
        backgroundColor: const Color(0xFF1E293B),
        title: const Text('Rename', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        content: TextField(
          controller: c,
          autofocus: true,
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
          decoration: const InputDecoration(
            hintText: 'Recording name',
            hintStyle: TextStyle(color: Colors.white38),
            enabledBorder: UnderlineInputBorder(borderSide: BorderSide(color: Colors.white24)),
            focusedBorder: UnderlineInputBorder(borderSide: BorderSide(color: Color(0xFF22D3EE))),
          ),
          onSubmitted: (v) => Navigator.pop(ctx, v.trim()),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel', style: TextStyle(color: Colors.white54))),
          TextButton(
            onPressed: () => Navigator.pop(ctx, c.text.trim()),
            child: const Text('Save', style: TextStyle(color: Color(0xFF22D3EE), fontWeight: FontWeight.w900)),
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
    if (mounted) {
      setState(() {});
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Renamed'), backgroundColor: Color(0xFF059669), behavior: SnackBarBehavior.floating),
      );
    }
  }

  Future<void> _download() async {
    var src = widget.item.dataUrl;
    if (src.isEmpty) {
      src = await NgmyLiveCaptureBlobStore.getPlayableUrl(widget.item.id, mimeType: widget.item.mimeType) ?? '';
    }
    var ok = false;
    if (src.isNotEmpty) {
      await NgmyLiveCaptureMedia.downloadAsync(src, widget.item.mimeType, widget.item.title);
      ok = true;
    } else {
      final bytes = await NgmyLiveCaptureBlobStore.getBytes(widget.item.id);
      if (bytes != null && bytes.isNotEmpty) {
        final ext = widget.item.kind == 'video' ? 'mp4' : 'm4a';
        ok = await ngmyVaultDownloadBytes(bytes, '${widget.item.title.replaceAll(RegExp(r'[^a-zA-Z0-9_-]+'), '_')}.$ext', widget.item.mimeType);
      }
    }
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok ? 'Download started' : 'Could not download this recording.'),
        backgroundColor: ok ? const Color(0xFF334155) : const Color(0xFFDC2626),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  Future<void> _delete() async {
    await NgmyLiveCaptureStore.deleteItem(widget.userEmail, widget.item.id);
    await widget.onChanged();
    if (mounted) Navigator.pop(context);
  }

  String _clock(double sec) {
    final s = sec.isNaN || sec.isInfinite ? 0 : sec.floor().clamp(0, 99999);
    return NgmyLiveCaptureSession._formatClock(s);
  }

  @override
  Widget build(BuildContext context) {
    final isVideo = widget.item.kind == 'video';
    final maxH = MediaQuery.sizeOf(context).height * 0.88;
    final mime = widget.item.mimeType;
    return SafeArea(
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          constraints: BoxConstraints(maxWidth: 520, maxHeight: maxH),
          margin: const EdgeInsets.all(12),
          padding: const EdgeInsets.fromLTRB(18, 14, 18, 20),
          decoration: BoxDecoration(
            color: const Color(0xFF111827),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: Colors.white12),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 28, offset: const Offset(0, 12))],
          ),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(
                  child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99))),
                ),
                const SizedBox(height: 14),
                Text(_titleC.text, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                Text(
                  '${isVideo ? 'Video' : 'Voice Memo'} · ${_clock(widget.item.durationSec.toDouble())}',
                  style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 16),
                if (_mediaLoading)
                  SizedBox(
                    height: isVideo ? 240 : 140,
                    child: const Center(
                      child: CircularProgressIndicator(color: Color(0xFF22D3EE), strokeWidth: 2.5),
                    ),
                  )
                else if (widget.item.dataUrl.isEmpty)
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.04),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: Colors.white12),
                    ),
                    child: const Text(
                      'This recording could not be kept on this device (storage was full when it was captured). Delete it and record again.',
                      style: TextStyle(color: Colors.white54, fontSize: 12, height: 1.4),
                    ),
                  )
                else if (isVideo)
                  NgmyLiveCaptureMedia.playbackVideo(
                    key: ValueKey('vid-${widget.item.id}-${widget.item.dataUrl.hashCode}'),
                    src: widget.item.dataUrl,
                    mimeType: mime,
                    height: 280,
                  )
                else ...[
                  const Text(
                    'Tap the play button to listen',
                    style: TextStyle(color: Colors.white54, fontSize: 12),
                  ),
                  const SizedBox(height: 10),
                  NgmyLiveCaptureMedia.playbackAudio(
                    key: ValueKey('aud-${widget.item.id}-${widget.item.dataUrl.hashCode}'),
                    src: widget.item.dataUrl,
                    mimeType: mime,
                  ),
                ],
                const SizedBox(height: 20),
                Row(
                  children: [
                    Expanded(
                      child: FilledButton.icon(
                        onPressed: widget.item.dataUrl.isEmpty ? null : _download,
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFF334155),
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
                      child: OutlinedButton.icon(
                        onPressed: _rename,
                        style: OutlinedButton.styleFrom(
                          foregroundColor: Colors.white,
                          side: const BorderSide(color: Colors.white24),
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
