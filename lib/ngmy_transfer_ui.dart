import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_studio_hub.dart';
import 'ngmy_transfer.dart';
import 'ngmy_transfer_constants.dart';
import 'ngmy_transfer_webrtc.dart';

/// Opens Send directly for the given file(s) — from the ⋮ menu only.
Future<void> openNgmyTransferSend(
  BuildContext context, {
  required String email,
  required List<NgmyDocShareItem> items,
}) async {
  if (items.isEmpty) return;
  await Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      builder: (_) => NgmyTransferSendPage(email: email, items: items),
    ),
  );
}

/// Opens Receive — from the ⋮ menu only.
Future<void> openNgmyTransferReceive(
  BuildContext context, {
  required String email,
  required VoidCallback onReceived,
}) async {
  final ok = await Navigator.of(context).push<bool>(
    MaterialPageRoute<bool>(
      builder: (_) => NgmyTransferReceivePage(email: email, onReceived: onReceived),
    ),
  );
  if (ok == true) onReceived();
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
  var _starting = false;
  var _receiverConnected = false;
  String _status = 'Tap Start transfer below.';
  double? _byteProgress;
  Timer? _webrtcPoll;

  @override
  void dispose() {
    _webrtcPoll?.cancel();
    unawaited(NgmyTransfer.stopSend());
    super.dispose();
  }

  Future<void> _startTransfer() async {
    if (_starting || _session != null) return;
    setState(() {
      _starting = true;
      _error = null;
      _status = 'Starting…';
    });

    final session = await NgmyTransfer.startSend(
      ownerEmail: widget.email,
      items: widget.items,
      onFileComplete: (sent, total) {
        if (mounted) {
          setState(() {
            _filesSent = sent;
            _receiverConnected = true;
            _status = 'Sent file $sent of $total';
            _byteProgress = 1;
          });
        }
      },
      onSendBytes: (sent, total) {
        if (mounted && total > 0) {
          setState(() {
            _receiverConnected = true;
            _byteProgress = sent / total;
            _status = sent >= total ? 'Finishing…' : 'Sending video… ${((sent / total) * 100).round()}%';
          });
        }
      },
    );

    if (!mounted) return;
    if (session == null) {
      setState(() {
        _starting = false;
        _error = 'Could not start. Check your connection and try again.';
        _status = '';
      });
      return;
    }

    setState(() {
      _starting = false;
      _session = session;
      _status = session.mode == NgmyTransferMode.webrtc
          ? 'Waiting for receiver to enter this 6-digit code…'
          : 'Waiting on same Wi‑Fi — receiver enters the code below…';
    });

    if (session.mode == NgmyTransferMode.webrtc) {
      _webrtcPoll?.cancel();
      _webrtcPoll = Timer.periodic(const Duration(milliseconds: 200), (_) async {
        if (!mounted || _session == null) return;
        final linked = await NgmyTransferWebRtc.applyAnswerWhenReady(_session!.offerToken!);
        if (linked && mounted) {
          setState(() {
            _receiverConnected = true;
            _status = 'Receiver connected — sending…';
          });
        }
      });
    }
  }

  Future<void> _copyCode() async {
    final code = _session?.code;
    if (code == null) return;
    await Clipboard.setData(ClipboardData(text: code));
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('6-digit code copied')));
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

    return PopScope(
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
        body: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            if (_error != null)
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: Text(_error!, style: TextStyle(color: Colors.red.shade400, height: 1.45)),
              ),
            ...widget.items.map(
              (item) => Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Row(
                  children: [
                    Icon(
                      item.isVideo ? Icons.videocam_rounded : Icons.insert_drive_file_rounded,
                      color: kNgmyStudioHubAccent,
                      size: 20,
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(item.name, style: TextStyle(color: fg, fontWeight: FontWeight.w700), maxLines: 2),
                    ),
                    Text(item.sizeLabel, style: TextStyle(color: muted, fontSize: 12)),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Total: ${_sizeLabel(totalBytes)} · ${widget.items.length} file(s)',
              style: TextStyle(color: muted, fontSize: 13),
            ),
            const SizedBox(height: 20),
            if (session != null) ...[
              Text('Give the other phone this 6-digit code:', style: TextStyle(color: muted, fontSize: 14)),
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
                  ),
                  child: Column(
                    children: [
                      Text(
                        session.code,
                        style: TextStyle(color: fg, fontSize: 48, fontWeight: FontWeight.w900, letterSpacing: 12),
                      ),
                      const SizedBox(height: 6),
                      Text('Numbers only · tap to copy', style: TextStyle(color: muted, fontSize: 12)),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),
              Text(_status, textAlign: TextAlign.center, style: TextStyle(color: muted, height: 1.4)),
              if (_receiverConnected || _filesSent > 0 || _byteProgress != null) ...[
                const SizedBox(height: 16),
                LinearProgressIndicator(
                  value: _byteProgress ?? (session.fileCount == 0 ? null : _filesSent / session.fileCount),
                  backgroundColor: isDark ? Colors.white12 : const Color(0xFFE2E8F0),
                  color: kNgmyStudioHubAccent,
                ),
              ],
            ] else ...[
              Text(
                'NGMY Transfer uses a 6-digit number code (not the QR letters on your file list). '
                'Receiver opens ⋮ → NGMY Transfer → Receive and types this code.',
                style: TextStyle(color: muted, height: 1.45, fontSize: 13),
              ),
            ],
            const SizedBox(height: 24),
            FilledButton.icon(
              onPressed: (_starting || session != null) ? null : _startTransfer,
              icon: _starting
                  ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : const Icon(Icons.rocket_launch_rounded),
              label: Text(session != null ? 'Transfer active' : 'Start transfer'),
              style: FilledButton.styleFrom(
                backgroundColor: kNgmyStudioHubAccent,
                disabledBackgroundColor: kNgmyStudioHubAccent.withValues(alpha: 0.45),
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              ),
            ),
            if (session != null) ...[
              const SizedBox(height: 12),
              OutlinedButton(
                onPressed: () async {
                  await NgmyTransfer.stopSend();
                  if (mounted) {
                    setState(() {
                      _session = null;
                      _filesSent = 0;
                      _receiverConnected = false;
                      _status = 'Tap Start transfer again.';
                    });
                  }
                },
                child: const Text('Stop transfer'),
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
    if (code.length != 6 || !RegExp(r'^\d{6}$').hasMatch(code)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter the 6-digit number code from the sender\'s Send screen')),
      );
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
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Received ${imported.length} file(s) via $kNgmyTransferProductName')),
      );
      Navigator.of(context).pop(true);
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
              'Type the 6-digit number from the sender\'s NGMY Transfer Send screen.\n'
              'This is not the QR share code (letters) shown on files.',
              style: TextStyle(color: muted, height: 1.45, fontSize: 13),
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

void unawaited(Future<void> f) {}
