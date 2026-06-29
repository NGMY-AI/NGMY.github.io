// Live Help: consent-based, view-only screen sharing paired by a short code
// or QR code instead of picking a user from any list. Pairing and the live
// frame/draw data travel through one tiny row in the `live_help_codes` table
// (Supabase Postgres Changes realtime) that is deleted the moment the
// session ends or is cancelled — it never accumulates history. A pure
// broadcast-channel version of this was tried first but proved unreliable
// for pairing between two real devices in production, so this uses the same
// table-backed realtime mechanism already proven reliable elsewhere in the
// app.
//
// Roles: an admin creates the code/QR and ends up viewing; whoever enters or
// scans that code ends up sharing their own screen to get help, instantly
// (no waiting list — the code is single-use and claims the row atomically).
// The viewer can draw on the live view (arrows/circles) to point at things;
// those marks are mirrored back onto the sharer's actual screen. The viewer
// never controls, taps, or types on the other device — only the NGMY app's
// own UI is ever captured, never the OS screen or other apps.
import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Wrap the app shell's root content in this so frames can be captured.
final GlobalKey ngmyLiveSupportRepaintKey = GlobalKey();

/// On-screen diagnostic trail for the handshake — shown directly in the UI
/// (not just debugPrint) so a non-technical user can read/screenshot it.
final ValueNotifier<List<String>> ngmyLiveHelpDebugLog = ValueNotifier(<String>[]);

void _lsLog(String msg) {
  final ts = DateTime.now().toIso8601String().substring(11, 19);
  final next = List<String>.from(ngmyLiveHelpDebugLog.value)..add('$ts  $msg');
  if (next.length > 40) next.removeAt(0);
  ngmyLiveHelpDebugLog.value = next;
  debugPrint('[live_help] $msg');
}

Widget _ngmyLiveHelpDebugPanel() {
  return ValueListenableBuilder<List<String>>(
    valueListenable: ngmyLiveHelpDebugLog,
    builder: (context, lines, _) {
      if (lines.isEmpty) return const SizedBox.shrink();
      return Container(
        margin: const EdgeInsets.fromLTRB(16, 8, 16, 16),
        padding: const EdgeInsets.all(10),
        constraints: const BoxConstraints(maxHeight: 160),
        decoration: BoxDecoration(
          color: Colors.black.withValues(alpha: 0.85),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Connection log (for support diagnosis):', style: TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.bold)),
            const SizedBox(height: 4),
            Expanded(
              child: SingleChildScrollView(
                child: Text(
                  lines.join('\n'),
                  style: const TextStyle(color: Colors.greenAccent, fontSize: 10, fontFamily: 'monospace'),
                ),
              ),
            ),
          ],
        ),
      );
    },
  );
}

const String _kLiveHelpTable = 'live_help_codes';

String _ngmyLiveHelpRowChannelName(String code) => 'ngmy-lh-row-$code';

String ngmyGenerateLiveHelpCode() {
  final rnd = Random();
  return (1000 + rnd.nextInt(9000)).toString(); // 4 digits, never more than 5
}

SupabaseClient get _ngmyLsClient => Supabase.instance.client;

String _nowIso() => DateTime.now().toIso8601String();

/// Carries the single realtime channel watching one code's row, plus the
/// latest row data — shared between whichever screens need to react to it,
/// since a channel's postgres-changes filters must be registered once,
/// before `subscribe()`, and can't be added again afterwards.
class _LiveHelpRowWatcher {
  final RealtimeChannel channel;
  final ValueNotifier<Map<String, dynamic>?> row = ValueNotifier(null);
  _LiveHelpRowWatcher(this.channel);
}

void _applyDrawPayload(dynamic raw) {
  Map<String, dynamic>? dp;
  if (raw is String && raw.isNotEmpty) {
    try {
      dp = jsonDecode(raw) as Map<String, dynamic>;
    } catch (_) {
      return;
    }
  } else if (raw is Map<String, dynamic>) {
    dp = raw;
  }
  if (dp == null) return;
  final op = (dp['op'] ?? '').toString();
  if (op == 'clear') {
    ngmyLiveHelpStrokes.value = {};
    return;
  }
  if (op == 'draw') {
    final id = (dp['id'] ?? '').toString();
    final pts = dp['pts'];
    if (id.isEmpty || pts is! List) return;
    final points = pts.whereType<List>().map((p) => Offset((p[0] as num).toDouble(), (p[1] as num).toDouble())).toList();
    final next = Map<String, List<Offset>>.from(ngmyLiveHelpStrokes.value);
    next[id] = points;
    ngmyLiveHelpStrokes.value = next;
  }
}

class _ActiveShare {
  final String code;
  final RealtimeChannel channel;
  Timer? frameTimer;
  _ActiveShare(this.code, this.channel);
}

_ActiveShare? _ngmyActiveShare;

/// True while this device is actively sharing its screen.
final ValueNotifier<bool> ngmyIsSharingLiveHelp = ValueNotifier(false);

/// Normalized (0..1) stroke points the remote viewer has drawn, mirrored
/// onto this device's own screen as an overlay while sharing.
final ValueNotifier<Map<String, List<Offset>>> ngmyLiveHelpStrokes = ValueNotifier({});

Future<void> _captureAndSendFrame() async {
  final share = _ngmyActiveShare;
  if (share == null) return;
  try {
    final renderObject = ngmyLiveSupportRepaintKey.currentContext?.findRenderObject();
    if (renderObject is! RenderRepaintBoundary) return;
    final image = await renderObject.toImage(pixelRatio: 0.5);
    final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
    image.dispose();
    if (bytes == null) return;
    final b64 = base64Encode(bytes.buffer.asUint8List());
    // Stay well under a safe row/payload size — skip an oversized frame
    // rather than risk the update or the realtime delivery failing.
    if (b64.length > 260000) return;
    await _ngmyLsClient.from(_kLiveHelpTable).update({'frame_data': b64, 'updated_at': _nowIso()}).eq('code', share.code);
  } catch (e) {
    debugPrint('[live_help] frame send failed: $e');
  }
}

/// Registers the row-watching callback a sharer needs (end-of-session +
/// incoming draw points) on [channel] — must be called before `subscribe()`.
void _attachSharerRowListener(RealtimeChannel channel, String code) {
  channel.onPostgresChanges(
    event: PostgresChangeEvent.update,
    schema: 'public',
    table: _kLiveHelpTable,
    filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'code', value: code),
    callback: (payload) {
      final rec = payload.newRecord;
      final status = (rec['status'] ?? '').toString();
      if (status == 'ended') {
        unawaited(ngmyStopSharingLiveHelp(notifyRow: false));
        return;
      }
      _applyDrawPayload(rec['draw_points']);
    },
  );
}

/// Called once the sharer has explicitly confirmed sharing their screen.
void ngmyStartSharingLiveHelp(String code, RealtimeChannel channel) {
  _ngmyActiveShare = _ActiveShare(code, channel);
  ngmyIsSharingLiveHelp.value = true;
  _ngmyActiveShare!.frameTimer = Timer.periodic(const Duration(milliseconds: 1500), (_) => _captureAndSendFrame());
  // Wait for RepaintBoundary to mount after ngmyIsSharingLiveHelp flips true.
  WidgetsBinding.instance.addPostFrameCallback((_) {
    unawaited(_captureAndSendFrame());
  });
}

Future<void> ngmyStopSharingLiveHelp({bool notifyRow = true}) async {
  final share = _ngmyActiveShare;
  _ngmyActiveShare = null;
  ngmyIsSharingLiveHelp.value = false;
  ngmyLiveHelpStrokes.value = {};
  share?.frameTimer?.cancel();
  if (share != null) {
    if (notifyRow) {
      try {
        await _ngmyLsClient.from(_kLiveHelpTable).update({'status': 'ended', 'updated_at': _nowIso()}).eq('code', share.code);
      } catch (_) {}
    }
    try {
      await _ngmyLsClient.from(_kLiveHelpTable).delete().eq('code', share.code);
    } catch (_) {}
    try {
      await share.channel.unsubscribe();
    } catch (_) {}
  }
}

/// Persistent banner + drawn-guidance overlay shown on the sharer's device.
Widget ngmyLiveSupportBannerOverlay() {
  return ValueListenableBuilder<bool>(
    valueListenable: ngmyIsSharingLiveHelp,
    builder: (context, sharing, _) {
      if (!sharing) return const SizedBox.shrink();
      return Stack(
        children: [
          Positioned.fill(
            child: IgnorePointer(
              child: ValueListenableBuilder<Map<String, List<Offset>>>(
                valueListenable: ngmyLiveHelpStrokes,
                builder: (context, strokes, _) => CustomPaint(painter: _NgmyStrokePainter(strokes)),
              ),
            ),
          ),
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: SafeArea(
              bottom: false,
              child: Material(
                color: const Color(0xFFDC2626),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  child: Row(
                    children: [
                      const Icon(Icons.visibility, color: Colors.white, size: 18),
                      const SizedBox(width: 8),
                      const Expanded(
                        child: Text(
                          'Support is viewing your screen',
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13),
                        ),
                      ),
                      TextButton(
                        onPressed: () => unawaited(ngmyStopSharingLiveHelp()),
                        style: TextButton.styleFrom(foregroundColor: Colors.white, backgroundColor: Colors.white.withValues(alpha: 0.18)),
                        child: const Text('End'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      );
    },
  );
}

class _NgmyStrokePainter extends CustomPainter {
  final Map<String, List<Offset>> strokes;
  _NgmyStrokePainter(this.strokes);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFFF3B30)
      ..strokeWidth = 5
      ..strokeCap = StrokeCap.round
      ..style = PaintingStyle.stroke;
    for (final pts in strokes.values) {
      if (pts.isEmpty) continue;
      if (pts.length == 1) {
        canvas.drawCircle(Offset(pts[0].dx * size.width, pts[0].dy * size.height), 7, paint..style = PaintingStyle.fill);
        paint.style = PaintingStyle.stroke;
        continue;
      }
      final path = Path()..moveTo(pts[0].dx * size.width, pts[0].dy * size.height);
      for (final p in pts.skip(1)) {
        path.lineTo(p.dx * size.width, p.dy * size.height);
      }
      canvas.drawPath(path, paint);
    }
  }

  @override
  bool shouldRepaint(covariant _NgmyStrokePainter oldDelegate) => true;
}

// ---------------- Single entry screen, role-adaptive ----------------
// Everyone sees the same "Give Help" button. An admin opening it creates a
// code/QR and ends up viewing; anyone else opening it enters/scans a code
// and ends up sharing their own screen — instantly, no waiting list.

class NgmyGiveHelpScreen extends StatelessWidget {
  final bool isAdmin;
  const NgmyGiveHelpScreen({super.key, required this.isAdmin});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Give Help')),
      body: isAdmin ? const _CreateCodeView() : const _EnterCodeView(),
    );
  }
}

class _CreateCodeView extends StatefulWidget {
  const _CreateCodeView();
  @override
  State<_CreateCodeView> createState() => _CreateCodeViewState();
}

class _CreateCodeViewState extends State<_CreateCodeView> {
  String? _code;
  RealtimeChannel? _channel;
  bool _paired = false;
  bool _settingUp = false;
  bool _ready = false;
  String? _error;
  Timer? _setupTimeout;

  @override
  void dispose() {
    _setupTimeout?.cancel();
    if (!_paired) {
      final code = _code;
      try {
        _channel?.unsubscribe();
      } catch (_) {}
      if (code != null) {
        unawaited(_ngmyLsClient.from(_kLiveHelpTable).delete().eq('code', code));
      }
    }
    super.dispose();
  }

  Future<void> _start() async {
    ngmyLiveHelpDebugLog.value = [];
    final code = ngmyGenerateLiveHelpCode();
    final topic = _ngmyLiveHelpRowChannelName(code);
    _lsLog('HOST: creating code $code (topic $topic)');
    final channel = _ngmyLsClient.channel(topic);
    final watcher = _LiveHelpRowWatcher(channel);
    channel.onPostgresChanges(
      event: PostgresChangeEvent.update,
      schema: 'public',
      table: _kLiveHelpTable,
      filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'code', value: code),
      callback: (payload) {
        final rec = payload.newRecord;
        watcher.row.value = rec;
        final status = (rec['status'] ?? '').toString();
        if (status == 'claimed' && !_paired) {
          _paired = true;
          _lsLog('HOST: row claimed — opening viewer');
          if (!mounted) return;
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (_) => NgmyLiveSupportViewerScreen(code: code, watcher: watcher)))
              .then((_) {
            if (mounted) {
              setState(() {
                _code = null;
                _channel = null;
                _paired = false;
              });
            }
          });
        }
      },
    );
    // Don't show the code until the channel has actually finished joining and
    // the row exists — otherwise a fast scan/entry can try to claim a row
    // that isn't there yet.
    channel.subscribe((status, error) async {
      _lsLog('HOST: subscribe status=$status${error != null ? ' error=$error' : ''}');
      if (!mounted) return;
      if (status == RealtimeSubscribeStatus.subscribed) {
        try {
          await _ngmyLsClient.from(_kLiveHelpTable).insert({'code': code, 'status': 'waiting'});
        } catch (e) {
          _lsLog('HOST: row insert failed: $e');
          if (!mounted) return;
          _setupTimeout?.cancel();
          try {
            channel.unsubscribe();
          } catch (_) {}
          setState(() {
            _error = 'Could not start — try again.';
            _code = null;
            _settingUp = false;
            _channel = null;
          });
          return;
        }
        _setupTimeout?.cancel();
        if (!mounted) return;
        setState(() {
          _ready = true;
          _settingUp = false;
        });
      } else if (status == RealtimeSubscribeStatus.channelError || status == RealtimeSubscribeStatus.timedOut) {
        _setupTimeout?.cancel();
        setState(() {
          _error = 'Could not start — check your connection and try again.';
          _code = null;
          _settingUp = false;
          _channel = null;
        });
      }
    });
    _setupTimeout = Timer(const Duration(seconds: 12), () {
      if (!mounted || _ready) return;
      _lsLog('HOST: setup timed out after 12s waiting for subscribed status');
      try {
        channel.unsubscribe();
      } catch (_) {}
      setState(() {
        _error = 'Taking too long to connect — check your internet and try again.';
        _code = null;
        _settingUp = false;
        _channel = null;
      });
    });
    setState(() {
      _code = code;
      _channel = channel;
      _paired = false;
      _ready = false;
      _settingUp = true;
      _error = null;
    });
  }

  void _cancel() {
    _setupTimeout?.cancel();
    final code = _code;
    try {
      _channel?.unsubscribe();
    } catch (_) {}
    if (code != null) {
      unawaited(_ngmyLsClient.from(_kLiveHelpTable).delete().eq('code', code));
    }
    setState(() {
      _code = null;
      _channel = null;
      _ready = false;
      _settingUp = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(child: _content()),
        _ngmyLiveHelpDebugPanel(),
      ],
    );
  }

  Widget _content() {
    if (_code == null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.qr_code_2_rounded, size: 56),
              const SizedBox(height: 16),
              const Text('Create a code so a user can connect and share their screen with you.', textAlign: TextAlign.center),
              if (_error != null) ...[
                const SizedBox(height: 12),
                Text(_error!, style: const TextStyle(color: Colors.red), textAlign: TextAlign.center),
              ],
              const SizedBox(height: 20),
              FilledButton(onPressed: () => unawaited(_start()), child: const Text('Create Code')),
            ],
          ),
        ),
      );
    }
    if (_settingUp) {
      return const Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CircularProgressIndicator(),
            SizedBox(height: 16),
            Text('Setting up...'),
          ],
        ),
      );
    }
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('Give this code to the user, or let them scan the QR:', textAlign: TextAlign.center),
            const SizedBox(height: 18),
            Text(_code!, style: const TextStyle(fontSize: 48, fontWeight: FontWeight.w900, letterSpacing: 6)),
            const SizedBox(height: 18),
            QrImageView(data: _code!, size: 200),
            const SizedBox(height: 20),
            const Text('This connects automatically the moment the user enters or scans it.'),
            const SizedBox(height: 16),
            OutlinedButton(onPressed: _cancel, child: const Text('Cancel')),
          ],
        ),
      ),
    );
  }
}

class _EnterCodeView extends StatefulWidget {
  const _EnterCodeView();
  @override
  State<_EnterCodeView> createState() => _EnterCodeViewState();
}

class _EnterCodeViewState extends State<_EnterCodeView> {
  final TextEditingController _codeC = TextEditingController();
  bool _scanning = false;
  bool _connecting = false;
  String? _error;
  MobileScannerController? _scanCam;
  RealtimeChannel? _channel;

  @override
  void dispose() {
    _codeC.dispose();
    _scanCam?.dispose();
    if (!ngmyIsSharingLiveHelp.value) {
      try {
        _channel?.unsubscribe();
      } catch (_) {}
    }
    super.dispose();
  }

  Future<void> _connect(String code) async {
    if (_connecting) return;
    final c = code.trim();
    if (c.length < 3 || c.length > 4 || int.tryParse(c) == null) {
      setState(() => _error = 'Enter the code support gave you.');
      return;
    }
    ngmyLiveHelpDebugLog.value = [];
    setState(() {
      _connecting = true;
      _error = null;
    });
    _lsLog('JOIN: claiming code $c');
    try {
      // Atomic claim: only succeeds once, for whoever gets here first — the
      // code is single-use, so this is what makes the connection automatic
      // and instant instead of a waiting list.
      final rows = await _ngmyLsClient
          .from(_kLiveHelpTable)
          .update({'status': 'claimed', 'updated_at': _nowIso()})
          .eq('code', c)
          .eq('status', 'waiting')
          .select();
      if (rows.isEmpty) {
        _lsLog('JOIN: code not available to claim');
        if (!mounted) return;
        setState(() {
          _connecting = false;
          _error = 'That code is invalid or already used. Ask support for a fresh one.';
        });
        return;
      }
      _lsLog('JOIN: claimed — opening session');
      final topic = _ngmyLiveHelpRowChannelName(c);
      final channel = _ngmyLsClient.channel(topic);
      _attachSharerRowListener(channel, c);
      channel.subscribe();
      _channel = channel;
      if (!mounted) return;
      unawaited(_confirmAndShare(c, channel));
    } catch (e) {
      _lsLog('JOIN: claim failed: $e');
      if (!mounted) return;
      setState(() {
        _connecting = false;
        _error = 'Connection error — check your internet and try again.';
      });
    }
  }

  Future<void> _confirmAndShare(String code, RealtimeChannel channel) async {
    final ok = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        title: const Text('Share your screen?'),
        content: const Text('Support will see your current NGMY screen and can draw on it to point things out. '
            'They can only see inside this app — nothing else on your device — and you can end it anytime.'),
        actions: [
          TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Share Screen')),
        ],
      ),
    );
    if (!mounted) return;
    if (ok != true) {
      try {
        channel.unsubscribe();
      } catch (_) {}
      unawaited(_ngmyLsClient.from(_kLiveHelpTable).update({'status': 'ended', 'updated_at': _nowIso()}).eq('code', code));
      unawaited(_ngmyLsClient.from(_kLiveHelpTable).delete().eq('code', code));
      setState(() {
        _connecting = false;
        _channel = null;
      });
      return;
    }
    ngmyStartSharingLiveHelp(code, channel);
    setState(() => _connecting = false);
  }

  void _stop() {
    unawaited(ngmyStopSharingLiveHelp());
    setState(() {
      _channel = null;
      _codeC.clear();
    });
  }

  void _onDetect(BarcodeCapture capture) {
    for (final b in capture.barcodes) {
      final v = (b.rawValue ?? '').trim();
      if (v.isNotEmpty) {
        setState(() => _scanning = false);
        unawaited(_connect(v));
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(child: _content()),
        _ngmyLiveHelpDebugPanel(),
      ],
    );
  }

  Widget _content() {
    return ValueListenableBuilder<bool>(
      valueListenable: ngmyIsSharingLiveHelp,
      builder: (context, sharing, _) {
        if (sharing) {
          return Center(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.visibility, size: 56, color: Color(0xFFDC2626)),
                  const SizedBox(height: 16),
                  const Text('Support is now viewing your screen', textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16)),
                  const SizedBox(height: 8),
                  const Text('Look for the red banner at the top — tap End there (or here) anytime.', textAlign: TextAlign.center),
                  const SizedBox(height: 20),
                  FilledButton(onPressed: _stop, style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626)), child: const Text('End Session')),
                ],
              ),
            ),
          );
        }
        if (_scanning) {
          _scanCam ??= MobileScannerController(detectionSpeed: DetectionSpeed.normal);
          return Stack(
            fit: StackFit.expand,
            children: [
              MobileScanner(controller: _scanCam, onDetect: _onDetect),
              Positioned(
                top: 16,
                left: 16,
                child: SafeArea(
                  child: IconButton.filled(onPressed: () => setState(() => _scanning = false), icon: const Icon(Icons.close_rounded)),
                ),
              ),
            ],
          );
        }
        return Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.qr_code_scanner_rounded, size: 56),
                const SizedBox(height: 16),
                const Text('Enter the code support gave you, or scan their QR.', textAlign: TextAlign.center),
                const SizedBox(height: 20),
                SizedBox(
                  width: 200,
                  child: TextField(
                    controller: _codeC,
                    enabled: !_connecting,
                    keyboardType: TextInputType.number,
                    maxLength: 4,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900, letterSpacing: 6),
                    decoration: const InputDecoration(counterText: '', border: OutlineInputBorder()),
                    onSubmitted: _connect,
                  ),
                ),
                if (_error != null) ...[
                  const SizedBox(height: 10),
                  Text(_error!, style: const TextStyle(color: Colors.red), textAlign: TextAlign.center),
                ],
                const SizedBox(height: 16),
                FilledButton(
                  onPressed: _connecting ? null : () => _connect(_codeC.text),
                  child: _connecting
                      ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2))
                      : const Text('Connect'),
                ),
                const SizedBox(height: 10),
                OutlinedButton.icon(
                  onPressed: _connecting ? null : () => setState(() => _scanning = true),
                  icon: const Icon(Icons.qr_code_scanner_rounded),
                  label: const Text('Scan QR instead'),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

/// Admin-side viewer. Reuses the row watcher already set up by
/// [_CreateCodeViewState] — a channel's postgres-changes filters can only be
/// registered once, before its single `subscribe()` call, so this screen
/// reacts to the same watcher instead of creating its own subscription.
class NgmyLiveSupportViewerScreen extends StatefulWidget {
  final String code;
  final _LiveHelpRowWatcher watcher;
  const NgmyLiveSupportViewerScreen({super.key, required this.code, required this.watcher});

  @override
  State<NgmyLiveSupportViewerScreen> createState() => _NgmyLiveSupportViewerScreenState();
}

class _NgmyLiveSupportViewerScreenState extends State<NgmyLiveSupportViewerScreen> {
  Uint8List? _latestFrame;
  String? _lastFrameData;
  double _aspect = 9 / 16;
  bool _ended = false;

  final GlobalKey _stageKey = GlobalKey();
  final Map<String, List<Offset>> _strokes = {};
  String? _activeStrokeId;
  DateTime _lastSent = DateTime.fromMillisecondsSinceEpoch(0);

  RealtimeChannel get _channel => widget.watcher.channel;

  @override
  void initState() {
    super.initState();
    widget.watcher.row.addListener(_onRow);
  }

  void _onRow() {
    final rec = widget.watcher.row.value;
    if (rec == null) return;
    final status = (rec['status'] ?? '').toString();
    if (status == 'ended') {
      if (mounted && !_ended) setState(() => _ended = true);
      return;
    }
    final data = rec['frame_data'];
    if (data is String && data.isNotEmpty && data != _lastFrameData) {
      _lastFrameData = data;
      try {
        final bytes = base64Decode(data);
        unawaited(_updateAspect(bytes));
        if (mounted) setState(() => _latestFrame = bytes);
      } catch (_) {}
    }
  }

  Future<void> _updateAspect(Uint8List bytes) async {
    try {
      final codec = await ui.instantiateImageCodec(bytes);
      final frame = await codec.getNextFrame();
      final w = frame.image.width.toDouble();
      final h = frame.image.height.toDouble();
      frame.image.dispose();
      if (w > 0 && h > 0 && mounted) setState(() => _aspect = w / h);
    } catch (_) {}
  }

  @override
  void dispose() {
    widget.watcher.row.removeListener(_onRow);
    if (!_ended) {
      unawaited(_ngmyLsClient.from(_kLiveHelpTable).update({'status': 'ended', 'updated_at': _nowIso()}).eq('code', widget.code));
    }
    unawaited(_ngmyLsClient.from(_kLiveHelpTable).delete().eq('code', widget.code));
    try {
      _channel.unsubscribe();
    } catch (_) {}
    super.dispose();
  }

  void _sendStroke() {
    final id = _activeStrokeId;
    if (id == null) return;
    final pts = _strokes[id];
    if (pts == null) return;
    unawaited(_ngmyLsClient.from(_kLiveHelpTable).update({
      'draw_points': {'op': 'draw', 'id': id, 'pts': pts.map((p) => [p.dx, p.dy]).toList()},
      'updated_at': _nowIso(),
    }).eq('code', widget.code));
  }

  void _onPanStart(DragStartDetails d) {
    final box = _stageKey.currentContext?.findRenderObject();
    if (box is! RenderBox) return;
    final local = box.globalToLocal(d.globalPosition);
    final nx = (local.dx / box.size.width).clamp(0.0, 1.0);
    final ny = (local.dy / box.size.height).clamp(0.0, 1.0);
    final id = 'st_${DateTime.now().microsecondsSinceEpoch}';
    setState(() {
      _activeStrokeId = id;
      _strokes[id] = [Offset(nx, ny)];
    });
  }

  void _onPanUpdate(DragUpdateDetails d) {
    final id = _activeStrokeId;
    if (id == null) return;
    final box = _stageKey.currentContext?.findRenderObject();
    if (box is! RenderBox) return;
    final local = box.globalToLocal(d.globalPosition);
    final nx = (local.dx / box.size.width).clamp(0.0, 1.0);
    final ny = (local.dy / box.size.height).clamp(0.0, 1.0);
    setState(() => _strokes[id]!.add(Offset(nx, ny)));
    final now = DateTime.now();
    if (now.difference(_lastSent) > const Duration(milliseconds: 120)) {
      _lastSent = now;
      _sendStroke();
    }
  }

  void _onPanEnd(DragEndDetails d) {
    _sendStroke();
    _activeStrokeId = null;
  }

  void _clearDrawing() {
    setState(() => _strokes.clear());
    unawaited(_ngmyLsClient.from(_kLiveHelpTable).update({
      'draw_points': {'op': 'clear'},
      'updated_at': _nowIso(),
    }).eq('code', widget.code));
  }

  Future<void> _end() async {
    _ended = true;
    try {
      await _ngmyLsClient.from(_kLiveHelpTable).update({'status': 'ended', 'updated_at': _nowIso()}).eq('code', widget.code);
      await _ngmyLsClient.from(_kLiveHelpTable).delete().eq('code', widget.code);
    } catch (_) {}
    if (mounted) Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              child: Row(
                children: [
                  IconButton(onPressed: () => Navigator.of(context).pop(), icon: const Icon(Icons.arrow_back, color: Colors.white)),
                  Expanded(
                    child: Text('Viewing — code ${widget.code}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                  ),
                  IconButton(onPressed: _clearDrawing, icon: const Icon(Icons.layers_clear_rounded, color: Colors.white), tooltip: 'Clear drawing'),
                  IconButton(onPressed: _end, icon: const Icon(Icons.stop_circle_outlined, color: Colors.white), tooltip: 'End session'),
                ],
              ),
            ),
            Expanded(child: _body()),
          ],
        ),
      ),
    );
  }

  Widget _body() {
    if (_ended) {
      return const Center(child: Text('Session ended.', style: TextStyle(color: Colors.white)));
    }
    if (_latestFrame == null) {
      return const Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CircularProgressIndicator(color: Colors.white),
            SizedBox(height: 16),
            Text('Connected — waiting for the first frame...', style: TextStyle(color: Colors.white)),
          ],
        ),
      );
    }
    return Center(
      child: AspectRatio(
        aspectRatio: _aspect,
        child: GestureDetector(
          onPanStart: _onPanStart,
          onPanUpdate: _onPanUpdate,
          onPanEnd: _onPanEnd,
          child: Stack(
            key: _stageKey,
            fit: StackFit.expand,
            children: [
              Image.memory(_latestFrame!, gaplessPlayback: true, fit: BoxFit.fill),
              CustomPaint(painter: _NgmyStrokePainter(_strokes)),
            ],
          ),
        ),
      ),
    );
  }
}
