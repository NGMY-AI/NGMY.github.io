import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_live_capture_engine.dart';
import 'ngmy_live_capture_media.dart';

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
  final String dataUrl;
  final String mimeType;
  final int durationSec;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'kind': kind,
        'createdAt': createdAt.toUtc().toIso8601String(),
        'dataUrl': dataUrl,
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
      return decoded
          .whereType<Map>()
          .map((e) => NgmyLiveCaptureItem.fromJson(Map<String, dynamic>.from(e)))
          .toList()
        ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
    } catch (_) {
      return [];
    }
  }

  static Future<void> save(String email, List<NgmyLiveCaptureItem> items) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final trimmed = items.take(12).toList();
      await prefs.setString(_key(email), jsonEncode(trimmed.map((e) => e.toJson()).toList()));
    } catch (e) {
      debugPrint('[live_capture] save: $e');
    }
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
  bool recording = false;
  int elapsedSec = 0;

  Object? get previewStream => _engine.previewStream;

  Future<bool> start({required String userEmail, required bool video}) async {
    lastError = null;
    lastStatus = null;
    final ok = await _engine.start(video: video);
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
    lastStatus = 'Recording — leave open, take a call, or switch apps. Capture keeps going when allowed.';
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
    final item = NgmyLiveCaptureItem(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      title: '${videoMode ? 'Video' : 'New Recording'} ${NgmyLiveCaptureSession._formatClock(elapsedSec)}',
      kind: videoMode ? 'video' : 'audio',
      createdAt: DateTime.now(),
      dataUrl: result.dataUrl,
      mimeType: result.mimeType,
      durationSec: elapsedSec,
    );
    final existing = await NgmyLiveCaptureStore.load(email);
    await NgmyLiveCaptureStore.save(email, [item, ...existing]);
    // Do not auto-download — that was blurring the app. User downloads from the player.
    lastStatus = 'Saved. Open it below to play, edit, or download.';
    notifyListeners();
    return item;
  }

  String clockLabel() => _formatClock(elapsedSec);

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
                              if (recording && _session.videoMode) ...[
                                const SizedBox(height: 14),
                                NgmyLiveCaptureMedia.liveCameraPreview(stream: _session.previewStream, height: 200),
                              ] else if (recording && !_session.videoMode) ...[
                                const SizedBox(height: 14),
                                _WaveBars(active: true, pulse: p),
                              ],
                              const SizedBox(height: 16),
                              if (recording)
                                const Text('LIVE · BACKGROUND SAFE', style: TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w900, letterSpacing: 1.2))
                              else
                                const Text(
                                  'Record voice or video. Preview while filming, then play and edit like Voice Memos.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(color: Colors.white60, fontSize: 12, height: 1.45),
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

class _VoiceMemoSheetState extends State<_VoiceMemoSheet> with SingleTickerProviderStateMixin {
  NgmyCapturePlayer? _player;
  late final TextEditingController _titleC;
  late final AnimationController _wave;
  bool _ready = false;
  bool _downloading = false;
  double _pos = 0;
  double _dur = 0;
  bool _playing = false;
  double _rate = 1;

  @override
  void initState() {
    super.initState();
    _titleC = TextEditingController(text: widget.item.title);
    _wave = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..repeat(reverse: true);
    unawaited(_boot());
  }

  Future<void> _boot() async {
    final p = await NgmyLiveCaptureMedia.createPlayer(widget.item.dataUrl, video: widget.item.kind == 'video');
    if (!mounted) {
      p?.dispose();
      return;
    }
    _player = p;
    p?.listen(_onTick);
    setState(() {
      _ready = true;
      _dur = p?.duration ?? widget.item.durationSec.toDouble();
    });
  }

  void _onTick() {
    if (!mounted || _player == null) return;
    setState(() {
      _pos = _player!.position;
      _dur = _player!.duration > 0 ? _player!.duration : _dur;
      _playing = _player!.playing;
    });
  }

  @override
  void dispose() {
    _player?.unlisten(_onTick);
    _player?.dispose();
    _titleC.dispose();
    _wave.dispose();
    super.dispose();
  }

  Future<void> _toggle() async {
    final p = _player;
    if (p == null) return;
    if (p.playing) {
      await p.pause();
    } else {
      await p.play();
    }
  }

  Future<void> _saveTitle() async {
    final next = _titleC.text.trim();
    if (next.isEmpty || next == widget.item.title) return;
    widget.item.title = next;
    final items = await NgmyLiveCaptureStore.load(widget.userEmail);
    final i = items.indexWhere((e) => e.id == widget.item.id);
    if (i >= 0) {
      items[i].title = next;
      await NgmyLiveCaptureStore.save(widget.userEmail, items);
    }
    await widget.onChanged();
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Name updated'), backgroundColor: Color(0xFF059669), behavior: SnackBarBehavior.floating),
      );
    }
  }

  Future<void> _download() async {
    if (_downloading) return;
    setState(() => _downloading = true);
    // Yield a frame so the button press doesn't leave the canvas blurred.
    await Future<void>.delayed(const Duration(milliseconds: 16));
    await NgmyLiveCaptureEngine.downloadDataUrl(widget.item.dataUrl, widget.item.mimeType, widget.item.title);
    await Future<void>.delayed(const Duration(milliseconds: 120));
    if (mounted) setState(() => _downloading = false);
  }

  Future<void> _delete() async {
    final items = await NgmyLiveCaptureStore.load(widget.userEmail);
    items.removeWhere((e) => e.id == widget.item.id);
    await NgmyLiveCaptureStore.save(widget.userEmail, items);
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
                TextField(
                  controller: _titleC,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                  decoration: const InputDecoration(
                    border: InputBorder.none,
                    hintText: 'Recording name',
                    hintStyle: TextStyle(color: Colors.white38),
                  ),
                  onSubmitted: (_) => _saveTitle(),
                  onEditingComplete: _saveTitle,
                ),
                Text(
                  '${isVideo ? 'Video' : 'Voice Memo'} · ${_clock(widget.item.durationSec.toDouble())}',
                  style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 16),
                if (isVideo)
                  NgmyLiveCaptureMedia.playbackVideo(src: widget.item.dataUrl, height: 220)
                else
                  AnimatedBuilder(
                    animation: _wave,
                    builder: (_, __) => _WaveBars(active: _playing, pulse: _wave.value),
                  ),
                const SizedBox(height: 12),
                if (!isVideo || _player != null) ...[
                  SliderTheme(
                    data: SliderTheme.of(context).copyWith(
                      activeTrackColor: const Color(0xFF22D3EE),
                      inactiveTrackColor: Colors.white12,
                      thumbColor: Colors.white,
                      overlayColor: const Color(0xFF22D3EE).withValues(alpha: 0.2),
                    ),
                    child: Slider(
                      value: _dur <= 0 ? 0 : _pos.clamp(0, _dur),
                      max: _dur <= 0 ? 1 : _dur,
                      onChanged: (v) => _player?.seek(v),
                    ),
                  ),
                  Row(
                    children: [
                      Text(_clock(_pos), style: const TextStyle(color: Colors.white54, fontSize: 12)),
                      const Spacer(),
                      Text(_clock(_dur > 0 ? _dur : widget.item.durationSec.toDouble()), style: const TextStyle(color: Colors.white54, fontSize: 12)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _rateChip(0.5),
                      _rateChip(1),
                      _rateChip(1.5),
                      _rateChip(2),
                    ],
                  ),
                  const SizedBox(height: 14),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      IconButton(
                        onPressed: () => _player?.seek((_pos - 5).clamp(0, _dur)),
                        icon: const Icon(Icons.replay_5_rounded, color: Colors.white70, size: 30),
                      ),
                      const SizedBox(width: 10),
                      Material(
                        color: const Color(0xFF22D3EE),
                        shape: const CircleBorder(),
                        child: InkWell(
                          customBorder: const CircleBorder(),
                          onTap: _ready ? _toggle : null,
                          child: SizedBox(
                            width: 72,
                            height: 72,
                            child: Icon(_playing ? Icons.pause_rounded : Icons.play_arrow_rounded, color: Colors.white, size: 40),
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      IconButton(
                        onPressed: () => _player?.seek((_pos + 5).clamp(0, _dur <= 0 ? 999 : _dur)),
                        icon: const Icon(Icons.forward_5_rounded, color: Colors.white70, size: 30),
                      ),
                    ],
                  ),
                ],
                const SizedBox(height: 20),
                Row(
                  children: [
                    Expanded(
                      child: FilledButton.icon(
                        onPressed: _downloading ? null : _download,
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFF334155),
                          foregroundColor: Colors.white,
                          minimumSize: const Size.fromHeight(48),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        icon: _downloading
                            ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                            : const Icon(Icons.download_rounded),
                        label: const Text('Download', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: _saveTitle,
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

  Widget _rateChip(double rate) {
    final on = (_rate - rate).abs() < 0.01;
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4),
      child: InkWell(
        onTap: () async {
          setState(() => _rate = rate);
          await _player?.setRate(rate);
        },
        borderRadius: BorderRadius.circular(99),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(
            color: on ? Colors.white.withValues(alpha: 0.16) : Colors.transparent,
            borderRadius: BorderRadius.circular(99),
            border: Border.all(color: on ? Colors.white54 : Colors.white24),
          ),
          child: Text('${rate}x', style: TextStyle(color: Colors.white, fontWeight: on ? FontWeight.w900 : FontWeight.w600, fontSize: 12)),
        ),
      ),
    );
  }
}
