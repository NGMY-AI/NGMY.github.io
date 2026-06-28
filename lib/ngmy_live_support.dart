// Live Help: consent-based, view-only screen sharing paired by a short code
// or QR code instead of picking a user from any list. Nothing is written to
// any database table — pairing and frames travel only over an ephemeral
// Supabase Realtime broadcast channel keyed by the code, which holds no
// history once both sides disconnect.
//
// The helper can draw on the live view (arrows/circles) to point at things;
// those marks are mirrored back onto the other person's actual screen. The
// helper never controls, taps, or types on the other device — only the
// NGMY app's own UI is ever captured, never the OS screen or other apps.
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

String _ngmyLiveHelpChannelName(String code) => 'ngmy-livehelp-$code';

String ngmyGenerateLiveHelpCode() {
  final rnd = Random();
  return (1000 + rnd.nextInt(9000)).toString(); // 4 digits, never more than 5
}

class _ActiveShare {
  final String code;
  final RealtimeChannel channel;
  Timer? frameTimer;
  _ActiveShare(this.code, this.channel);
}

_ActiveShare? _ngmyActiveShare;

/// Non-null while this device is actively broadcasting its screen.
final ValueNotifier<bool> ngmyIsSharingLiveHelp = ValueNotifier(false);

/// Normalized (0..1) stroke points the remote helper has drawn, mirrored
/// onto this device's own screen as an overlay while sharing.
final ValueNotifier<Map<String, List<Offset>>> ngmyLiveHelpStrokes = ValueNotifier({});

SupabaseClient get _ngmyLsClient => Supabase.instance.client;

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
    // Stay well under the realtime broadcast payload limit — skip an
    // oversized frame rather than risk the channel erroring out.
    if (b64.length > 260000) return;
    await share.channel.sendBroadcastMessage(event: 'frame', payload: {'data': b64});
  } catch (e) {
    debugPrint('[live_help] frame capture failed: $e');
  }
}

/// Starts waiting on [code] for a helper to join. Calls [onJoinRequest] when
/// someone scans/enters the code — the caller decides whether to accept.
RealtimeChannel ngmyStartLiveHelpHost({
  required String code,
  required void Function() onJoinRequest,
}) {
  final channel = _ngmyLsClient.channel(_ngmyLiveHelpChannelName(code));
  channel
      .onBroadcast(
        event: 'join',
        callback: (payload) {
          if (ngmyIsSharingLiveHelp.value) return; // already paired — ignore further joins
          onJoinRequest();
        },
      )
      .onBroadcast(
        event: 'draw',
        callback: (payload) {
          final id = (payload['id'] ?? '').toString();
          final raw = payload['points'];
          if (id.isEmpty || raw is! List) return;
          final pts = raw.whereType<List>().map((p) => Offset((p[0] as num).toDouble(), (p[1] as num).toDouble())).toList();
          final next = Map<String, List<Offset>>.from(ngmyLiveHelpStrokes.value);
          next[id] = pts;
          ngmyLiveHelpStrokes.value = next;
        },
      )
      .onBroadcast(
        event: 'draw_clear',
        callback: (_) => ngmyLiveHelpStrokes.value = {},
      )
      .onBroadcast(
        event: 'end',
        callback: (_) => ngmyStopLiveHelpHost(),
      )
      .subscribe();
  return channel;
}

void ngmyAcceptLiveHelpJoin(String code, RealtimeChannel channel) {
  channel.sendBroadcastMessage(event: 'accept', payload: const {});
  _ngmyActiveShare = _ActiveShare(code, channel);
  ngmyIsSharingLiveHelp.value = true;
  _ngmyActiveShare!.frameTimer = Timer.periodic(const Duration(milliseconds: 1500), (_) => _captureAndSendFrame());
}

void ngmyDeclineLiveHelpJoin(RealtimeChannel channel) {
  channel.sendBroadcastMessage(event: 'decline', payload: const {});
}

Future<void> ngmyStopLiveHelpHost() async {
  final share = _ngmyActiveShare;
  _ngmyActiveShare = null;
  ngmyIsSharingLiveHelp.value = false;
  ngmyLiveHelpStrokes.value = {};
  share?.frameTimer?.cancel();
  try {
    await share?.channel.sendBroadcastMessage(event: 'end', payload: const {});
  } catch (_) {}
  try {
    await share?.channel.unsubscribe();
  } catch (_) {}
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
                        onPressed: () => unawaited(ngmyStopLiveHelpHost()),
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

// ---------------- Entry screens ----------------
// Split so regular users only ever see "Get Help" (ask for support) and only
// admins can reach "Give Help" (view a user's screen) — kept as two separate
// screens rather than one tabbed screen so each role only ever sees its own.

/// Any signed-in user: generate a code/QR to ask for help.
class NgmyGetHelpScreen extends StatelessWidget {
  const NgmyGetHelpScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Get Help')),
      body: const _GetHelpTab(),
    );
  }
}

/// Admin only: enter/scan a code to view a user's screen and help them.
class NgmyGiveHelpScreen extends StatelessWidget {
  const NgmyGiveHelpScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Give Help')),
      body: const _GiveHelpTab(),
    );
  }
}

class _GetHelpTab extends StatefulWidget {
  const _GetHelpTab();
  @override
  State<_GetHelpTab> createState() => _GetHelpTabState();
}

class _GetHelpTabState extends State<_GetHelpTab> {
  String? _code;
  RealtimeChannel? _hostChannel;

  @override
  void dispose() {
    if (_hostChannel != null && !ngmyIsSharingLiveHelp.value) {
      _hostChannel!.unsubscribe();
    }
    super.dispose();
  }

  void _start() {
    final code = ngmyGenerateLiveHelpCode();
    setState(() => _code = code);
    _hostChannel = ngmyStartLiveHelpHost(
      code: code,
      onJoinRequest: () => unawaited(_showJoinPrompt(code)),
    );
  }

  Future<void> _showJoinPrompt(String code) async {
    final channel = _hostChannel;
    if (channel == null || !mounted) return;
    final accept = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        title: const Text('Screen view request'),
        content: const Text('NGMY Support wants to view your current screen to help you. '
            'They can only see your screen inside this app — nothing else on your device — and they can draw on it to point things out. You can end it anytime.'),
        actions: [
          TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Decline')),
          FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Allow')),
        ],
      ),
    );
    if (!mounted) return;
    if (accept == true) {
      ngmyAcceptLiveHelpJoin(code, channel);
      setState(() {});
    } else {
      ngmyDeclineLiveHelpJoin(channel);
    }
  }

  void _stop() {
    unawaited(ngmyStopLiveHelpHost());
    try {
      _hostChannel?.unsubscribe();
    } catch (_) {}
    _hostChannel = null;
    setState(() => _code = null);
  }

  @override
  Widget build(BuildContext context) {
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
        if (_code == null) {
          return Center(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.support_agent_rounded, size: 56),
                  const SizedBox(height: 16),
                  const Text('Get a code to share with support so they can see your screen and guide you.', textAlign: TextAlign.center),
                  const SizedBox(height: 20),
                  FilledButton(onPressed: _start, child: const Text('Generate Code')),
                ],
              ),
            ),
          );
        }
        return Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text('Give this code to support, or let them scan the QR:', textAlign: TextAlign.center),
                const SizedBox(height: 18),
                Text(_code!, style: const TextStyle(fontSize: 48, fontWeight: FontWeight.w900, letterSpacing: 6)),
                const SizedBox(height: 18),
                QrImageView(data: _code!, size: 200),
                const SizedBox(height: 20),
                const Text('Waiting for support to connect...'),
                const SizedBox(height: 16),
                OutlinedButton(onPressed: _stop, child: const Text('Cancel')),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _GiveHelpTab extends StatefulWidget {
  const _GiveHelpTab();
  @override
  State<_GiveHelpTab> createState() => _GiveHelpTabState();
}

class _GiveHelpTabState extends State<_GiveHelpTab> {
  final TextEditingController _codeC = TextEditingController();
  bool _scanning = false;
  MobileScannerController? _scanCam;

  @override
  void dispose() {
    _codeC.dispose();
    _scanCam?.dispose();
    super.dispose();
  }

  void _connect(String code) {
    final c = code.trim();
    if (c.length < 3 || c.length > 4 || int.tryParse(c) == null) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter the code support gave you.')));
      return;
    }
    Navigator.of(context).push(MaterialPageRoute(builder: (_) => NgmyLiveSupportViewerScreen(code: c)));
  }

  void _onDetect(BarcodeCapture capture) {
    for (final b in capture.barcodes) {
      final v = (b.rawValue ?? '').trim();
      if (v.isNotEmpty) {
        setState(() => _scanning = false);
        _connect(v);
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
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
              child: IconButton.filled(
                onPressed: () => setState(() => _scanning = false),
                icon: const Icon(Icons.close_rounded),
              ),
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
            const Text('Enter the code the user gave you, or scan their QR.', textAlign: TextAlign.center),
            const SizedBox(height: 20),
            SizedBox(
              width: 200,
              child: TextField(
                controller: _codeC,
                keyboardType: TextInputType.number,
                maxLength: 4,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900, letterSpacing: 6),
                decoration: const InputDecoration(counterText: '', border: OutlineInputBorder()),
                onSubmitted: _connect,
              ),
            ),
            const SizedBox(height: 16),
            FilledButton(onPressed: () => _connect(_codeC.text), child: const Text('Connect')),
            const SizedBox(height: 10),
            OutlinedButton.icon(
              onPressed: () => setState(() => _scanning = true),
              icon: const Icon(Icons.qr_code_scanner_rounded),
              label: const Text('Scan QR instead'),
            ),
          ],
        ),
      ),
    );
  }
}

class NgmyLiveSupportViewerScreen extends StatefulWidget {
  final String code;
  const NgmyLiveSupportViewerScreen({super.key, required this.code});

  @override
  State<NgmyLiveSupportViewerScreen> createState() => _NgmyLiveSupportViewerScreenState();
}

class _NgmyLiveSupportViewerScreenState extends State<NgmyLiveSupportViewerScreen> {
  RealtimeChannel? _channel;
  Uint8List? _latestFrame;
  double _aspect = 9 / 16;
  bool _connected = false;
  bool _ended = false;
  bool _timedOut = false;
  Timer? _joinTimeout;

  final GlobalKey _stageKey = GlobalKey();
  final Map<String, List<Offset>> _strokes = {};
  String? _activeStrokeId;
  DateTime _lastSent = DateTime.fromMillisecondsSinceEpoch(0);

  @override
  void initState() {
    super.initState();
    _channel = _ngmyLsClient.channel(_ngmyLiveHelpChannelName(widget.code))
      ..onBroadcast(
        event: 'accept',
        callback: (_) {
          _joinTimeout?.cancel();
          if (mounted) setState(() => _connected = true);
        },
      ).onBroadcast(
        event: 'decline',
        callback: (_) {
          _joinTimeout?.cancel();
          if (mounted) setState(() => _ended = true);
        },
      ).onBroadcast(
        event: 'frame',
        callback: (payload) {
          final data = payload['data'];
          if (data is! String) return;
          try {
            final bytes = base64Decode(data);
            unawaited(_updateAspect(bytes));
            if (!mounted) return;
            setState(() => _latestFrame = bytes);
          } catch (_) {}
        },
      ).onBroadcast(
        event: 'end',
        callback: (_) {
          if (mounted) setState(() => _ended = true);
        },
      ).subscribe(
        (status, _) {
          if (status == RealtimeSubscribeStatus.subscribed) {
            _channel?.sendBroadcastMessage(event: 'join', payload: const {});
          }
        },
      );
    _joinTimeout = Timer(const Duration(seconds: 45), () {
      if (!mounted || _connected) return;
      setState(() => _timedOut = true);
    });
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
    _joinTimeout?.cancel();
    if (_connected && !_ended) {
      unawaited(_channel?.sendBroadcastMessage(event: 'end', payload: const {}));
    }
    try {
      _channel?.unsubscribe();
    } catch (_) {}
    super.dispose();
  }

  void _sendStroke() {
    final id = _activeStrokeId;
    if (id == null) return;
    final pts = _strokes[id];
    if (pts == null) return;
    unawaited(_channel?.sendBroadcastMessage(
      event: 'draw',
      payload: {'id': id, 'points': pts.map((p) => [p.dx, p.dy]).toList()},
    ));
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
    unawaited(_channel?.sendBroadcastMessage(event: 'draw_clear', payload: const {}));
  }

  Future<void> _end() async {
    await _channel?.sendBroadcastMessage(event: 'end', payload: const {});
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
                    child: Text(
                      _connected ? 'Viewing — code ${widget.code}' : 'Connecting to ${widget.code}...',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                    ),
                  ),
                  if (_connected) IconButton(onPressed: _clearDrawing, icon: const Icon(Icons.layers_clear_rounded, color: Colors.white), tooltip: 'Clear drawing'),
                  if (_connected) IconButton(onPressed: _end, icon: const Icon(Icons.stop_circle_outlined, color: Colors.white), tooltip: 'End session'),
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
    if (_timedOut && !_connected) {
      return const Center(child: Text('No one responded to that code.', style: TextStyle(color: Colors.white)));
    }
    if (!_connected) {
      return const Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CircularProgressIndicator(color: Colors.white),
            SizedBox(height: 16),
            Text('Waiting for the user to accept...', style: TextStyle(color: Colors.white)),
          ],
        ),
      );
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
