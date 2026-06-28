// Live Support: admin requests to view (read-only) a user's current NGMY app
// screen. The user must explicitly accept before anything is shared, sees a
// persistent on-screen banner for the whole session, and can end it any time.
// Only the NGMY app's own UI is captured (via RepaintBoundary) — never the
// device's OS-level screen, other apps, or any device control/input.
import 'dart:async';
import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

const String kLiveSupportTable = 'live_support_sessions';

/// Wrap the app shell's root content in this so frames can be captured.
final GlobalKey ngmyLiveSupportRepaintKey = GlobalKey();

class NgmyLiveSupportSession {
  final String id;
  final String userEmail;
  final String adminEmail;
  final String adminName;
  const NgmyLiveSupportSession({required this.id, required this.userEmail, required this.adminEmail, required this.adminName});
}

/// Non-null while this device is actively broadcasting its screen to an admin.
final ValueNotifier<NgmyLiveSupportSession?> ngmyActiveLiveSupportSession = ValueNotifier(null);

/// Non-null while there is an incoming request awaiting this user's accept/decline.
final ValueNotifier<Map<String, dynamic>?> ngmyPendingLiveSupportRequest = ValueNotifier(null);

RealtimeChannel? _ngmyLiveSupportRequestChannel;
RealtimeChannel? _ngmyLiveSupportBroadcastChannel;
RealtimeChannel? _ngmyLiveSupportSessionWatchChannel;
Timer? _ngmyLiveSupportFrameTimer;
String? _ngmyLiveSupportListeningEmail;

SupabaseClient get _ngmyLsClient => Supabase.instance.client;

/// Call once a user is signed in so they can receive support requests.
void ngmyListenForLiveSupportRequests(String userEmail) {
  final email = userEmail.trim().toLowerCase();
  if (email.isEmpty || _ngmyLiveSupportListeningEmail == email) return;
  ngmyStopListeningForLiveSupportRequests();
  _ngmyLiveSupportListeningEmail = email;
  try {
    _ngmyLiveSupportRequestChannel = _ngmyLsClient
        .channel('ngmy-live-support-req-${email.hashCode}')
        .onPostgresChanges(
          event: PostgresChangeEvent.insert,
          schema: 'public',
          table: kLiveSupportTable,
          filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'user_email', value: email),
          callback: (payload) {
            final row = payload.newRecord;
            if ((row['status'] ?? '').toString() != 'requested') return;
            ngmyPendingLiveSupportRequest.value = row;
          },
        )
        .subscribe();
  } catch (e) {
    debugPrint('[live_support] listen failed: $e');
  }
}

void ngmyStopListeningForLiveSupportRequests() {
  try {
    _ngmyLiveSupportRequestChannel?.unsubscribe();
  } catch (_) {}
  _ngmyLiveSupportRequestChannel = null;
  _ngmyLiveSupportListeningEmail = null;
}

Future<void> ngmyRespondToLiveSupportRequest(bool accept) async {
  final row = ngmyPendingLiveSupportRequest.value;
  ngmyPendingLiveSupportRequest.value = null;
  if (row == null) return;
  final id = (row['id'] ?? '').toString();
  if (id.isEmpty) return;
  try {
    await _ngmyLsClient.from(kLiveSupportTable).update({
      'status': accept ? 'accepted' : 'declined',
      'updated_at': DateTime.now().toUtc().toIso8601String(),
    }).eq('id', id);
  } catch (e) {
    debugPrint('[live_support] respond failed: $e');
  }
  if (!accept) return;
  ngmyActiveLiveSupportSession.value = NgmyLiveSupportSession(
    id: id,
    userEmail: (row['user_email'] ?? '').toString(),
    adminEmail: (row['admin_email'] ?? '').toString(),
    adminName: (row['admin_name'] ?? '').toString(),
  );
  _ngmyStartLiveSupportBroadcast(id);
}

void _ngmyStartLiveSupportBroadcast(String sessionId) {
  _ngmyLiveSupportFrameTimer?.cancel();
  try {
    _ngmyLiveSupportBroadcastChannel?.unsubscribe();
  } catch (_) {}
  _ngmyLiveSupportBroadcastChannel = _ngmyLsClient.channel('live-support-$sessionId')..subscribe();

  try {
    _ngmyLiveSupportSessionWatchChannel?.unsubscribe();
  } catch (_) {}
  _ngmyLiveSupportSessionWatchChannel = _ngmyLsClient
      .channel('ngmy-live-support-watch-$sessionId')
      .onPostgresChanges(
        event: PostgresChangeEvent.update,
        schema: 'public',
        table: kLiveSupportTable,
        filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'id', value: sessionId),
        callback: (payload) {
          final status = (payload.newRecord['status'] ?? '').toString();
          if (status == 'ended') ngmyEndLiveSupportSession(notifyRow: false);
        },
      )
      .subscribe();

  _ngmyLiveSupportFrameTimer = Timer.periodic(const Duration(milliseconds: 1500), (_) => _ngmyCaptureAndSendFrame());
}

Future<void> _ngmyCaptureAndSendFrame() async {
  try {
    final renderObject = ngmyLiveSupportRepaintKey.currentContext?.findRenderObject();
    if (renderObject is! RenderRepaintBoundary) return;
    final image = await renderObject.toImage(pixelRatio: 0.35);
    final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
    image.dispose();
    if (bytes == null) return;
    final b64 = base64Encode(bytes.buffer.asUint8List());
    // Stay well under the realtime broadcast payload limit — skip an
    // oversized frame rather than risk the channel erroring out.
    if (b64.length > 220000) return;
    await _ngmyLiveSupportBroadcastChannel?.sendBroadcastMessage(event: 'frame', payload: {'data': b64});
  } catch (e) {
    debugPrint('[live_support] frame capture failed: $e');
  }
}

Future<void> ngmyEndLiveSupportSession({bool notifyRow = true}) async {
  final session = ngmyActiveLiveSupportSession.value;
  ngmyActiveLiveSupportSession.value = null;
  _ngmyLiveSupportFrameTimer?.cancel();
  _ngmyLiveSupportFrameTimer = null;
  try {
    _ngmyLiveSupportBroadcastChannel?.unsubscribe();
  } catch (_) {}
  _ngmyLiveSupportBroadcastChannel = null;
  try {
    _ngmyLiveSupportSessionWatchChannel?.unsubscribe();
  } catch (_) {}
  _ngmyLiveSupportSessionWatchChannel = null;
  if (notifyRow && session != null) {
    try {
      await _ngmyLsClient.from(kLiveSupportTable).update({
        'status': 'ended',
        'updated_at': DateTime.now().toUtc().toIso8601String(),
      }).eq('id', session.id);
    } catch (e) {
      debugPrint('[live_support] end session failed: $e');
    }
  }
}

/// Persistent banner shown on the user's device for the whole session.
Widget ngmyLiveSupportBannerOverlay() {
  return ValueListenableBuilder<NgmyLiveSupportSession?>(
    valueListenable: ngmyActiveLiveSupportSession,
    builder: (context, session, _) {
      if (session == null) return const SizedBox.shrink();
      return Positioned(
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
                  Expanded(
                    child: Text(
                      session.adminName.isNotEmpty ? '${session.adminName} from support is viewing your screen' : 'Support is viewing your screen',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13),
                    ),
                  ),
                  TextButton(
                    onPressed: () => unawaited(ngmyEndLiveSupportSession()),
                    style: TextButton.styleFrom(foregroundColor: Colors.white, backgroundColor: Colors.white.withValues(alpha: 0.18)),
                    child: const Text('End'),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    },
  );
}

/// Consent dialog shown to the user when a request comes in. Call once near
/// the app root; it listens to [ngmyPendingLiveSupportRequest] itself.
void ngmyInstallLiveSupportConsentListener(BuildContext Function() contextProvider) {
  bool showing = false;
  ngmyPendingLiveSupportRequest.addListener(() async {
    final row = ngmyPendingLiveSupportRequest.value;
    if (row == null || showing) return;
    showing = true;
    final ctx = contextProvider();
    final adminName = (row['admin_name'] ?? '').toString();
    final who = adminName.isNotEmpty ? adminName : 'NGMY Support';
    try {
      final accept = await showDialog<bool>(
        context: ctx,
        barrierDismissible: false,
        builder: (dialogCtx) => AlertDialog(
          title: const Text('Screen view request'),
          content: Text('$who wants to view your current NGMY screen to help you. '
              'They can only see your screen inside this app — nothing else on your device — and you can end it anytime.'),
          actions: [
            TextButton(onPressed: () => Navigator.of(dialogCtx).pop(false), child: const Text('Decline')),
            FilledButton(onPressed: () => Navigator.of(dialogCtx).pop(true), child: const Text('Allow')),
          ],
        ),
      );
      await ngmyRespondToLiveSupportRequest(accept ?? false);
    } finally {
      showing = false;
    }
  });
}

// ---------------- Admin side ----------------

Future<String> ngmyRequestLiveSupportSession({required String userEmail, required String adminEmail, required String adminName}) async {
  final id = 'lss_${DateTime.now().millisecondsSinceEpoch}_${userEmail.toLowerCase().trim().hashCode.abs()}';
  await _ngmyLsClient.from(kLiveSupportTable).insert({
    'id': id,
    'user_email': userEmail.toLowerCase().trim(),
    'admin_email': adminEmail.toLowerCase().trim(),
    'admin_name': adminName,
    'status': 'requested',
  });
  return id;
}

Future<void> ngmyAdminEndLiveSupportSession(String sessionId) async {
  try {
    await _ngmyLsClient.from(kLiveSupportTable).update({
      'status': 'ended',
      'updated_at': DateTime.now().toUtc().toIso8601String(),
    }).eq('id', sessionId);
  } catch (e) {
    debugPrint('[live_support] admin end failed: $e');
  }
}

class NgmyLiveSupportAdminScreen extends StatefulWidget {
  final List<({String email, String username})> users;
  final String adminEmail;
  final String adminName;
  const NgmyLiveSupportAdminScreen({super.key, required this.users, required this.adminEmail, required this.adminName});

  @override
  State<NgmyLiveSupportAdminScreen> createState() => _NgmyLiveSupportAdminScreenState();
}

class _NgmyLiveSupportAdminScreenState extends State<NgmyLiveSupportAdminScreen> {
  final TextEditingController _search = TextEditingController();

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  Future<void> _requestFor(String email) async {
    final id = await ngmyRequestLiveSupportSession(userEmail: email, adminEmail: widget.adminEmail, adminName: widget.adminName);
    if (!mounted) return;
    await Navigator.of(context).push(MaterialPageRoute(
      builder: (_) => _NgmyLiveSupportWaitingScreen(sessionId: id, userEmail: email),
    ));
  }

  @override
  Widget build(BuildContext context) {
    final query = _search.text.trim().toLowerCase();
    final filtered = widget.users.where((u) => query.isEmpty || u.email.toLowerCase().contains(query) || u.username.toLowerCase().contains(query)).toList();
    return Scaffold(
      appBar: AppBar(title: const Text('Live Support')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(14),
            child: TextField(
              controller: _search,
              onChanged: (_) => setState(() {}),
              decoration: const InputDecoration(prefixIcon: Icon(Icons.search), hintText: 'Search users by email or name', border: OutlineInputBorder()),
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: filtered.length,
              itemBuilder: (context, i) {
                final u = filtered[i];
                return ListTile(
                  leading: const CircleIcon(),
                  title: Text(u.username.isNotEmpty ? u.username : u.email),
                  subtitle: Text(u.email),
                  trailing: FilledButton(onPressed: () => unawaited(_requestFor(u.email)), child: const Text('Request')),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class CircleIcon extends StatelessWidget {
  const CircleIcon({super.key});
  @override
  Widget build(BuildContext context) => const CircleAvatar(child: Icon(Icons.person));
}

class _NgmyLiveSupportWaitingScreen extends StatefulWidget {
  final String sessionId;
  final String userEmail;
  const _NgmyLiveSupportWaitingScreen({required this.sessionId, required this.userEmail});

  @override
  State<_NgmyLiveSupportWaitingScreen> createState() => _NgmyLiveSupportWaitingScreenState();
}

class _NgmyLiveSupportWaitingScreenState extends State<_NgmyLiveSupportWaitingScreen> {
  RealtimeChannel? _watch;
  Timer? _timeout;
  String? _resultStatus;

  @override
  void initState() {
    super.initState();
    _watch = _ngmyLsClient
        .channel('ngmy-live-support-waitwatch-${widget.sessionId}')
        .onPostgresChanges(
          event: PostgresChangeEvent.update,
          schema: 'public',
          table: kLiveSupportTable,
          filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'id', value: widget.sessionId),
          callback: (payload) {
            final status = (payload.newRecord['status'] ?? '').toString();
            if (!mounted) return;
            if (status == 'accepted') {
              Navigator.of(context).pushReplacement(MaterialPageRoute(
                builder: (_) => NgmyLiveSupportViewerScreen(sessionId: widget.sessionId, userEmail: widget.userEmail),
              ));
            } else if (status == 'declined' || status == 'ended') {
              setState(() => _resultStatus = status);
            }
          },
        )
        .subscribe();
    _timeout = Timer(const Duration(seconds: 45), () {
      if (!mounted) return;
      unawaited(ngmyAdminEndLiveSupportSession(widget.sessionId));
      setState(() => _resultStatus = 'timeout');
    });
  }

  @override
  void dispose() {
    _timeout?.cancel();
    try {
      _watch?.unsubscribe();
    } catch (_) {}
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Requesting ${widget.userEmail}')),
      body: Center(
        child: _resultStatus == null
            ? Column(
                mainAxisSize: MainAxisSize.min,
                children: const [
                  CircularProgressIndicator(),
                  SizedBox(height: 16),
                  Text('Waiting for the user to accept...'),
                ],
              )
            : Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(switch (_resultStatus) {
                    'declined' => 'User declined the request.',
                    'ended' => 'Request was cancelled.',
                    _ => 'No response — request timed out.',
                  }),
                  const SizedBox(height: 16),
                  FilledButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Close')),
                ],
              ),
      ),
    );
  }
}

class NgmyLiveSupportViewerScreen extends StatefulWidget {
  final String sessionId;
  final String userEmail;
  const NgmyLiveSupportViewerScreen({super.key, required this.sessionId, required this.userEmail});

  @override
  State<NgmyLiveSupportViewerScreen> createState() => _NgmyLiveSupportViewerScreenState();
}

class _NgmyLiveSupportViewerScreenState extends State<NgmyLiveSupportViewerScreen> {
  RealtimeChannel? _frames;
  RealtimeChannel? _watch;
  Uint8List? _latestFrame;
  bool _ended = false;

  @override
  void initState() {
    super.initState();
    _frames = _ngmyLsClient
        .channel('live-support-${widget.sessionId}')
        .onBroadcast(
          event: 'frame',
          callback: (payload) {
            final data = payload['data'];
            if (data is! String) return;
            try {
              final bytes = base64Decode(data);
              if (!mounted) return;
              setState(() => _latestFrame = bytes);
            } catch (_) {}
          },
        )
        .subscribe();
    _watch = _ngmyLsClient
        .channel('ngmy-live-support-viewerwatch-${widget.sessionId}')
        .onPostgresChanges(
          event: PostgresChangeEvent.update,
          schema: 'public',
          table: kLiveSupportTable,
          filter: PostgresChangeFilter(type: PostgresChangeFilterType.eq, column: 'id', value: widget.sessionId),
          callback: (payload) {
            final status = (payload.newRecord['status'] ?? '').toString();
            if (status == 'ended' && mounted) setState(() => _ended = true);
          },
        )
        .subscribe();
  }

  @override
  void dispose() {
    try {
      _frames?.unsubscribe();
    } catch (_) {}
    try {
      _watch?.unsubscribe();
    } catch (_) {}
    super.dispose();
  }

  Future<void> _end() async {
    await ngmyAdminEndLiveSupportSession(widget.sessionId);
    if (mounted) Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(title: Text('Viewing ${widget.userEmail}'), actions: [
        IconButton(onPressed: _end, icon: const Icon(Icons.stop_circle_outlined), tooltip: 'End session'),
      ]),
      body: Center(
        child: _ended
            ? const Text('The user ended the session.', style: TextStyle(color: Colors.white))
            : _latestFrame == null
                ? const Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      CircularProgressIndicator(color: Colors.white),
                      SizedBox(height: 16),
                      Text('Waiting for the first frame...', style: TextStyle(color: Colors.white)),
                    ],
                  )
                : InteractiveViewer(child: Image.memory(_latestFrame!, gaplessPlayback: true)),
      ),
    );
  }
}
