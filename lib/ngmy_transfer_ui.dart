import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_studio_hub.dart';
import 'ngmy_transfer.dart';
import 'ngmy_transfer_constants.dart';
import 'ngmy_transfer_server.dart';

Future<void> openNgmyTransferFromDocShare(
  BuildContext context, {
  required String email,
  required List<NgmyDocShareItem> items,
  required VoidCallback onReceived,
}) async {
  await Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      builder: (_) => NgmyTransferHubPage(
        email: email,
        initialItems: items,
        onReceived: onReceived,
      ),
    ),
  );
}

class NgmyTransferHubPage extends StatelessWidget {
  const NgmyTransferHubPage({
    super.key,
    required this.email,
    required this.initialItems,
    required this.onReceived,
  });

  final String email;
  final List<NgmyDocShareItem> initialItems;
  final VoidCallback onReceived;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: fg,
        elevation: 0,
        title: Text(kNgmyTransferProductName, style: TextStyle(fontWeight: FontWeight.w900, color: fg)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Send big videos and files phone-to-phone — no Bluetooth, no AirDrop menus. '
              'Everything stays inside NGMY.',
              style: TextStyle(color: muted, height: 1.45, fontSize: 14),
            ),
            const SizedBox(height: 24),
            _TransferModeCard(
              icon: Icons.north_east_rounded,
              title: 'Send',
              subtitle: initialItems.isEmpty
                  ? 'Add files in Doc Share first, then send with a 6-digit code.'
                  : 'Share ${initialItems.length} selected file(s) with a session code.',
              gradient: const [Color(0xFF2563EB), Color(0xFF7C3AED)],
              onTap: () {
                if (initialItems.isEmpty) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Select or add files in Doc Share, then open NGMY Transfer again.')),
                  );
                  return;
                }
                Navigator.of(context).push<void>(
                  MaterialPageRoute<void>(
                    builder: (_) => NgmyTransferSendPage(email: email, items: initialItems),
                  ),
                );
              },
            ),
            const SizedBox(height: 14),
            _TransferModeCard(
              icon: Icons.south_west_rounded,
              title: 'Receive',
              subtitle: 'Enter the 6-digit code from the sender\'s phone.',
              gradient: const [kNgmyStudioHubAccent2, kNgmyStudioHubAccent],
              onTap: () {
                Navigator.of(context).push<void>(
                  MaterialPageRoute<void>(
                    builder: (_) => NgmyTransferReceivePage(
                      email: email,
                      onReceived: onReceived,
                    ),
                  ),
                );
              },
            ),
            const Spacer(),
            if (!kIsWeb)
              Text(
                'Tip: Both phones on the same Wi‑Fi or hotspot work best for large videos.',
                textAlign: TextAlign.center,
                style: TextStyle(color: muted, fontSize: 12, height: 1.4),
              )
            else
              Text(
                'On web you can receive when on the same network as the sender. '
                'Use the phone app to send large files.',
                textAlign: TextAlign.center,
                style: TextStyle(color: muted, fontSize: 12, height: 1.4),
              ),
          ],
        ),
      ),
    );
  }
}

class _TransferModeCard extends StatelessWidget {
  const _TransferModeCard({
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.gradient,
    required this.onTap,
  });

  final IconData icon;
  final String title;
  final String subtitle;
  final List<Color> gradient;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(colors: gradient, begin: Alignment.topLeft, end: Alignment.bottomRight),
            boxShadow: [
              BoxShadow(
                color: gradient.last.withValues(alpha: 0.35),
                blurRadius: 18,
                offset: const Offset(0, 8),
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Row(
              children: [
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.18),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Icon(icon, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
                      const SizedBox(height: 4),
                      Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.88), height: 1.35)),
                    ],
                  ),
                ),
                Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.9), size: 28),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class NgmyTransferSendPage extends StatefulWidget {
  const NgmyTransferSendPage({super.key, required this.email, required this.items});

  final String email;
  final List<NgmyDocShareItem> items;

  @override
  State<NgmyTransferSendPage> createState() => _NgmyTransferSendPageState();
}

class _NgmyTransferSendPageState extends State<NgmyTransferSendPage> {
  NgmyTransferSendSession? _session;
  var _filesSent = 0;
  String? _error;
  var _starting = true;

  @override
  void initState() {
    super.initState();
    unawaited(_start());
  }

  Future<void> _start() async {
    if (!NgmyTransferServer.isSupported) {
      setState(() {
        _starting = false;
        _error = kIsWeb
            ? 'Sending large files requires the NGMY phone app. Receivers can still enter your code on web if on the same Wi‑Fi.'
            : 'NGMY Transfer could not start on this device.';
      });
      return;
    }

    final session = await NgmyTransfer.startSend(
      ownerEmail: widget.email,
      items: widget.items,
      onFileComplete: (sent, total) {
        if (mounted) setState(() => _filesSent = sent);
      },
    );

    if (!mounted) return;
    setState(() {
      _starting = false;
      _session = session;
      _error = session == null ? 'Could not start transfer. Check Wi‑Fi and try again.' : null;
    });
  }

  @override
  void dispose() {
    unawaited(NgmyTransfer.stopSend());
    super.dispose();
  }

  Future<void> _copyCode() async {
    final code = _session?.code;
    if (code == null) return;
    await Clipboard.setData(ClipboardData(text: code));
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Session code copied')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final session = _session;
    final totalBytes = widget.items.fold<int>(0, (s, i) => s + i.sizeBytes);
    final sizeLabel = _sizeLabel(totalBytes);

    return PopScope(
      canPop: true,
      onPopInvokedWithResult: (didPop, _) {
        if (didPop) unawaited(NgmyTransfer.stopSend());
      },
      child: Scaffold(
        backgroundColor: bg,
        appBar: AppBar(
          backgroundColor: bg,
          foregroundColor: fg,
          elevation: 0,
          title: Text('Send · $kNgmyTransferProductName', style: TextStyle(fontWeight: FontWeight.w900, color: fg)),
        ),
        body: _starting
            ? const Center(child: CircularProgressIndicator(color: kNgmyStudioHubAccent))
            : _error != null
                ? Center(
                    child: Padding(
                      padding: const EdgeInsets.all(28),
                      child: Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: muted, height: 1.5)),
                    ),
                  )
                : ListView(
                    padding: const EdgeInsets.all(20),
                    children: [
                      Text(
                        'Tell the other phone this code:',
                        style: TextStyle(color: muted, fontSize: 14),
                      ),
                      const SizedBox(height: 12),
                      GestureDetector(
                        onTap: _copyCode,
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.symmetric(vertical: 28),
                          decoration: BoxDecoration(
                            color: isDark ? const Color(0xFF151B28) : Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.45), width: 2),
                            boxShadow: [
                              BoxShadow(
                                color: kNgmyStudioHubAccent.withValues(alpha: 0.15),
                                blurRadius: 24,
                                offset: const Offset(0, 10),
                              ),
                            ],
                          ),
                          child: Column(
                            children: [
                              Text(
                                session?.code ?? '------',
                                style: TextStyle(
                                  color: fg,
                                  fontSize: 48,
                                  fontWeight: FontWeight.w900,
                                  letterSpacing: 12,
                                ),
                              ),
                              const SizedBox(height: 8),
                              Text('Tap to copy', style: TextStyle(color: muted, fontSize: 12)),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 20),
                      _InfoTile(
                        icon: Icons.folder_open_rounded,
                        title: '${widget.items.length} file(s) · $sizeLabel',
                        subtitle: widget.items.map((e) => e.name).take(3).join('\n') +
                            (widget.items.length > 3 ? '\n+ ${widget.items.length - 3} more' : ''),
                        muted: muted,
                        fg: fg,
                      ),
                      const SizedBox(height: 12),
                      _InfoTile(
                        icon: Icons.wifi_tethering_rounded,
                        title: 'Keep this screen open',
                        subtitle: 'Receiver enters the code in NGMY Transfer → Receive. '
                            'Same Wi‑Fi or hotspot. Transfers stream directly — good for videos.',
                        muted: muted,
                        fg: fg,
                      ),
                      if (_filesSent > 0) ...[
                        const SizedBox(height: 20),
                        LinearProgressIndicator(
                          value: session == null || session.fileCount == 0 ? null : _filesSent / session.fileCount,
                          backgroundColor: isDark ? Colors.white12 : const Color(0xFFE2E8F0),
                          color: kNgmyStudioHubAccent,
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Sent $_filesSent of ${session?.fileCount ?? widget.items.length} file(s)',
                          style: TextStyle(color: muted, fontSize: 13),
                        ),
                      ],
                    ],
                  ),
      ),
    );
  }

  String _sizeLabel(int bytes) {
    if (bytes < 1024 * 1024) return '${(bytes / 1024).toStringAsFixed(1)} KB';
    if (bytes < 1024 * 1024 * 1024) return '${(bytes / (1024 * 1024)).toStringAsFixed(1)} MB';
    return '${(bytes / (1024 * 1024 * 1024)).toStringAsFixed(2)} GB';
  }
}

class NgmyTransferReceivePage extends StatefulWidget {
  const NgmyTransferReceivePage({super.key, required this.email, required this.onReceived});

  final String email;
  final VoidCallback onReceived;

  @override
  State<NgmyTransferReceivePage> createState() => _NgmyTransferReceivePageState();
}

class _NgmyTransferReceivePageState extends State<NgmyTransferReceivePage> {
  final _controller = TextEditingController();
  final _focus = FocusNode();
  var _busy = false;
  String? _status;
  double? _byteProgress;
  var _filesDone = 0;
  var _filesTotal = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _focus.requestFocus());
  }

  @override
  void dispose() {
    _controller.dispose();
    _focus.dispose();
    super.dispose();
  }

  Future<void> _receive() async {
    final code = _controller.text.trim();
    if (code.length != 6) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter the 6-digit session code')));
      return;
    }
    setState(() {
      _busy = true;
      _status = 'Connecting…';
      _byteProgress = null;
      _filesDone = 0;
      _filesTotal = 0;
    });

    final imported = await NgmyTransfer.receiveByCode(
      recipientEmail: widget.email,
      code: code,
      onStatus: (s) {
        if (mounted) setState(() => _status = s);
      },
      onProgress: (r, t) {
        if (mounted) {
          setState(() {
            _filesDone = r;
            _filesTotal = t;
          });
        }
      },
      onBytes: (_, received, total) {
        if (mounted && total != null && total > 0) {
          setState(() => _byteProgress = received / total);
        }
      },
    );

    if (!mounted) return;
    setState(() => _busy = false);

    if (imported.isNotEmpty) {
      widget.onReceived();
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Received ${imported.length} file(s) via $kNgmyTransferProductName')),
        );
        Navigator.of(context).pop(true);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: fg,
        elevation: 0,
        title: Text('Receive · $kNgmyTransferProductName', style: TextStyle(fontWeight: FontWeight.w900, color: fg)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Enter the 6-digit code shown on the sender\'s phone.',
              style: TextStyle(color: muted, height: 1.45),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _controller,
              focusNode: _focus,
              enabled: !_busy,
              keyboardType: TextInputType.number,
              maxLength: 6,
              textAlign: TextAlign.center,
              style: TextStyle(color: fg, fontSize: 36, fontWeight: FontWeight.w900, letterSpacing: 10),
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              decoration: InputDecoration(
                counterText: '',
                hintText: '482193',
                hintStyle: TextStyle(color: muted.withValues(alpha: 0.4), fontSize: 36, letterSpacing: 10),
                filled: true,
                fillColor: isDark ? const Color(0xFF151B28) : Colors.white,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(18)),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(18),
                  borderSide: const BorderSide(color: kNgmyStudioHubAccent, width: 2),
                ),
              ),
              onSubmitted: (_) {
                if (!_busy) unawaited(_receive());
              },
            ),
            const SizedBox(height: 16),
            if (_status != null)
              Text(_status!, textAlign: TextAlign.center, style: TextStyle(color: muted, fontSize: 13, height: 1.4)),
            if (_byteProgress != null) ...[
              const SizedBox(height: 16),
              LinearProgressIndicator(
                value: _byteProgress,
                backgroundColor: isDark ? Colors.white12 : const Color(0xFFE2E8F0),
                color: kNgmyStudioHubAccent,
              ),
            ],
            if (_filesTotal > 0) ...[
              const SizedBox(height: 8),
              Text('File $_filesDone of $_filesTotal', textAlign: TextAlign.center, style: TextStyle(color: muted)),
            ],
            const Spacer(),
            FilledButton.icon(
              onPressed: _busy ? null : _receive,
              icon: _busy
                  ? const SizedBox(
                      width: 18,
                      height: 18,
                      child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                    )
                  : const Icon(Icons.download_rounded),
              label: Text(_busy ? 'Receiving…' : 'Connect & receive'),
              style: FilledButton.styleFrom(
                backgroundColor: kNgmyStudioHubAccent,
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _InfoTile extends StatelessWidget {
  const _InfoTile({
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.muted,
    required this.fg,
  });

  final IconData icon;
  final String title;
  final String subtitle;
  final Color muted;
  final Color fg;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF151B28) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: kNgmyStudioHubAccent, size: 22),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: TextStyle(color: fg, fontWeight: FontWeight.w800)),
                const SizedBox(height: 4),
                Text(subtitle, style: TextStyle(color: muted, height: 1.4, fontSize: 13)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

void unawaited(Future<void> f) {}
