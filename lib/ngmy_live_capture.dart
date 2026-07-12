import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_live_capture_engine.dart';

/// App-wide session so recording keeps running after the dialog is closed.
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
  const NgmyLiveCaptureItem({
    required this.id,
    required this.title,
    required this.kind,
    required this.createdAt,
    required this.dataUrl,
    required this.mimeType,
    required this.durationSec,
  });

  final String id;
  final String title;
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

/// Survives dialog close / tab switches so capture can keep running.
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
    lastStatus = 'Recording in background — you can leave NGMY, take a call, or switch apps.';
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
      title: '${videoMode ? 'Video' : 'Voice'} ${_formatClock(elapsedSec)}',
      kind: videoMode ? 'video' : 'audio',
      createdAt: DateTime.now(),
      dataUrl: result.dataUrl,
      mimeType: result.mimeType,
      durationSec: elapsedSec,
    );
    final existing = await NgmyLiveCaptureStore.load(email);
    await NgmyLiveCaptureStore.save(email, [item, ...existing]);
    await _engine.downloadLast();
    lastStatus = 'Saved and downloaded. Ready for another capture.';
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
    // Do NOT dispose the engine while recording — session keeps it alive.
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
    final ok = await _session.start(userEmail: widget.userEmail, video: _session.videoMode);
    if (!mounted) return;
    setState(() => _busy = false);
    if (!ok) return;
  }

  Future<void> _stop() async {
    if (_busy || !_session.recording) return;
    setState(() => _busy = true);
    final item = await _session.stopAndSave();
    if (!mounted) return;
    setState(() => _busy = false);
    if (item != null) await _reload();
  }

  void _closeOrMinimize() {
    // Closing keeps an active recording alive in the background session.
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    final recording = _session.recording;
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 520, maxHeight: 760),
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
                                ? 'Still recording in the background — close this and take your call.'
                                : 'Intelligent voice & video. Keeps capturing when you leave the screen.',
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
                      IconButton(
                        onPressed: _closeOrMinimize,
                        icon: const Icon(Icons.close_rounded, color: Colors.white),
                      ),
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
                          padding: const EdgeInsets.all(18),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(
                              color: recording
                                  ? Color.lerp(const Color(0xFFEF4444), Colors.white, p * 0.35)!
                                  : Colors.white12,
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
                            boxShadow: [
                              BoxShadow(
                                color: (recording ? const Color(0xFFEF4444) : const Color(0xFF22D3EE))
                                    .withValues(alpha: 0.22 + p * 0.2),
                                blurRadius: 22,
                              ),
                            ],
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
                                      fontSize: 30,
                                      letterSpacing: 1.2,
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 18),
                              if (recording)
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Container(
                                      width: 12,
                                      height: 12,
                                      decoration: BoxDecoration(
                                        shape: BoxShape.circle,
                                        color: Color.lerp(const Color(0xFFEF4444), Colors.white, p),
                                        boxShadow: [
                                          BoxShadow(color: const Color(0xFFEF4444).withValues(alpha: 0.55), blurRadius: 10),
                                        ],
                                      ),
                                    ),
                                    const SizedBox(width: 10),
                                    const Text('LIVE · BACKGROUND SAFE', style: TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w900, letterSpacing: 1.2)),
                                  ],
                                )
                              else
                                const Text(
                                  'Start voice or video, then leave NGMY, answer a phone call, or switch tabs. Capture stays active when the browser allows background media.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(color: Colors.white60, fontSize: 12, height: 1.45),
                                ),
                              const SizedBox(height: 18),
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
                      Text(_session.lastError!, style: const TextStyle(color: Color(0xFFFCA5A5), fontSize: 12, height: 1.35)),
                    ] else if (_session.lastStatus != null) ...[
                      const SizedBox(height: 12),
                      Text(_session.lastStatus!, style: const TextStyle(color: Color(0xFF86EFAC), fontSize: 12, height: 1.35)),
                    ],
                    const SizedBox(height: 22),
                    const Text('Recent captures', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                    const SizedBox(height: 10),
                    if (_loading)
                      const Padding(
                        padding: EdgeInsets.all(24),
                        child: Center(child: CircularProgressIndicator(color: Color(0xFF22D3EE))),
                      )
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
                        return Container(
                          margin: const EdgeInsets.only(bottom: 10),
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.05),
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: Colors.white12),
                          ),
                          child: Row(
                            children: [
                              Icon(
                                item.kind == 'video' ? Icons.videocam_rounded : Icons.mic_rounded,
                                color: const Color(0xFF22D3EE),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(item.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                                    Text(
                                      '${item.kind.toUpperCase()} · ${NgmyLiveCaptureSession._formatClock(item.durationSec)}',
                                      style: const TextStyle(color: Colors.white54, fontSize: 11),
                                    ),
                                  ],
                                ),
                              ),
                              IconButton(
                                tooltip: 'Download again',
                                onPressed: () => NgmyLiveCaptureEngine.downloadDataUrl(item.dataUrl, item.mimeType, item.title),
                                icon: const Icon(Icons.download_rounded, color: Colors.white70),
                              ),
                            ],
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
