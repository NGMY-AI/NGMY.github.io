import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_my_code.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_studio_hub.dart';

/// Shows the user's personal My Code + QR for receiving documents.
Future<void> openNgmyDocShareMyCodePage(
  BuildContext context, {
  required String email,
}) async {
  await Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      builder: (_) => NgmyDocShareMyCodePage(email: email),
    ),
  );
}

/// Send document(s) to someone using their My Code or QR.
Future<bool> openNgmyDocShareSendToMyCodePage(
  BuildContext context, {
  required String senderEmail,
  required List<NgmyDocShareItem> items,
  String? preselectedCode,
}) async {
  if (items.isEmpty) return false;
  final ok = await Navigator.of(context).push<bool>(
    MaterialPageRoute<bool>(
      builder: (_) => NgmyDocShareSendToMyCodePage(
        senderEmail: senderEmail,
        items: items,
        preselectedCode: preselectedCode,
      ),
    ),
  );
  return ok == true;
}

class NgmyDocShareMyCodePage extends StatefulWidget {
  const NgmyDocShareMyCodePage({super.key, required this.email});

  final String email;

  @override
  State<NgmyDocShareMyCodePage> createState() => _NgmyDocShareMyCodePageState();
}

class _NgmyDocShareMyCodePageState extends State<NgmyDocShareMyCodePage> {
  final _qrKey = GlobalKey();
  String? _code;
  var _loading = true;

  @override
  void initState() {
    super.initState();
    unawaited(_boot());
  }

  Future<void> _boot() async {
    final code = await NgmyDocShareMyCode.ensureMyCode(widget.email);
    if (!mounted) return;
    setState(() {
      _code = code;
      _loading = false;
    });
  }

  Future<void> _copyCode() async {
    final code = _code;
    if (code == null) return;
    await Clipboard.setData(ClipboardData(text: code));
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('My Code copied')));
    }
  }

  Future<void> _downloadQr() async {
    final code = _code;
    if (code == null) return;
    try {
      final bytes = await NgmyBrandedQrWidget.capturePng(_qrKey, pixelRatio: 4);
      if (bytes == null || bytes.isEmpty) return;
      final msg = await downloadNgmyQrImage(bytes, 'ngmy_my_code_$code.png');
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not save QR: $e')));
    }
  }

  Future<void> _shareCode() async {
    final code = _code;
    if (code == null) return;
    await Share.share(
      'Send me documents on NGMY Doc Share using My Code: $code\n'
      'Or scan my QR in Doc Share → Scan QR.',
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: fg,
        elevation: 0,
        title: Text('My Code', style: TextStyle(fontWeight: FontWeight.w900, color: fg)),
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : _code == null
              ? Center(
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Text(
                      'Could not create your code. Check internet and try again.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: fg.withValues(alpha: 0.7)),
                    ),
                  ),
                )
              : SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
                  child: Column(
                    children: [
                      Text(
                        'Share this code or QR so anyone can send documents directly to your Doc Share.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: fg.withValues(alpha: 0.65), height: 1.45, fontSize: 14),
                      ),
                      const SizedBox(height: 24),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(vertical: 22, horizontal: 16),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              kNgmyStudioHubAccent.withValues(alpha: isDark ? 0.35 : 0.12),
                              kNgmyStudioHubAccent2.withValues(alpha: isDark ? 0.2 : 0.08),
                            ],
                          ),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.4)),
                        ),
                        child: Column(
                          children: [
                            Text(
                              'MY CODE',
                              style: TextStyle(
                                color: fg.withValues(alpha: 0.55),
                                fontSize: 11,
                                fontWeight: FontWeight.w800,
                                letterSpacing: 1.2,
                              ),
                            ),
                            const SizedBox(height: 8),
                            Text(
                              _code!,
                              style: TextStyle(
                                color: fg,
                                fontSize: 36,
                                fontWeight: FontWeight.w900,
                                letterSpacing: 6,
                                fontFeatures: const [FontFeature.tabularFigures()],
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text('5 numbers + 1 letter', style: TextStyle(color: fg.withValues(alpha: 0.5), fontSize: 12)),
                          ],
                        ),
                      ),
                      const SizedBox(height: 28),
                      RepaintBoundary(
                        key: _qrKey,
                        child: Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(20),
                            boxShadow: [
                              BoxShadow(color: kNgmyStudioHubAccent.withValues(alpha: 0.2), blurRadius: 24, offset: const Offset(0, 8)),
                            ],
                          ),
                          child: NgmyBrandedQrWidget(
                            data: NgmyDocShareMyCode.qrPayloadForCode(_code!),
                            large: true,
                            sizeOverride: 220,
                          ),
                        ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        'Others scan this in Doc Share → Scan QR to send you a file.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: fg.withValues(alpha: 0.55), fontSize: 12, height: 1.4),
                      ),
                      const SizedBox(height: 28),
                      Row(
                        children: [
                          Expanded(
                            child: OutlinedButton.icon(
                              onPressed: _copyCode,
                              icon: const Icon(Icons.copy_rounded, size: 18),
                              label: const Text('Copy code'),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: FilledButton.icon(
                              onPressed: _downloadQr,
                              style: FilledButton.styleFrom(backgroundColor: kNgmyStudioHubAccent),
                              icon: const Icon(Icons.download_rounded, size: 18),
                              label: const Text('Save QR'),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 10),
                      SizedBox(
                        width: double.infinity,
                        child: OutlinedButton.icon(
                          onPressed: _shareCode,
                          icon: const Icon(Icons.ios_share_rounded, size: 18),
                          label: const Text('Share code & instructions'),
                        ),
                      ),
                    ],
                  ),
                ),
    );
  }
}

class NgmyDocShareSendToMyCodePage extends StatefulWidget {
  const NgmyDocShareSendToMyCodePage({
    super.key,
    required this.senderEmail,
    required this.items,
    this.preselectedCode,
  });

  final String senderEmail;
  final List<NgmyDocShareItem> items;
  final String? preselectedCode;

  @override
  State<NgmyDocShareSendToMyCodePage> createState() => _NgmyDocShareSendToMyCodePageState();
}

class _NgmyDocShareSendToMyCodePageState extends State<NgmyDocShareSendToMyCodePage> {
  final _codeController = TextEditingController();
  var _sending = false;
  String? _status;

  @override
  void initState() {
    super.initState();
    final pre = NgmyDocShareMyCode.normalizeInput(widget.preselectedCode ?? '');
    if (pre != null) _codeController.text = pre;
  }

  @override
  void dispose() {
    _codeController.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    if (_sending) return;
    final code = NgmyDocShareMyCode.normalizeInput(_codeController.text);
    if (code == null) {
      setState(() => _status = 'Enter a valid My Code — 5 numbers then 1 letter (example: 48291K).');
      return;
    }
    setState(() {
      _sending = true;
      _status = 'Sending…';
    });
    final ok = await NgmyDocShareMyCode.sendToRecipient(
      senderEmail: widget.senderEmail,
      recipientCode: code,
      items: widget.items,
      onStatus: (s) {
        if (mounted) setState(() => _status = s);
      },
    );
    if (!mounted) return;
    setState(() => _sending = false);
    if (ok) {
      Navigator.pop(context, true);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: fg,
        elevation: 0,
        title: Text('Send to My Code', style: TextStyle(fontWeight: FontWeight.w900, color: fg)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Sending ${widget.items.length} file(s). Enter the recipient\'s personal My Code or scan their QR.',
              style: TextStyle(color: fg.withValues(alpha: 0.65), height: 1.45),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _codeController,
              autofocus: widget.preselectedCode == null,
              maxLength: 6,
              textCapitalization: TextCapitalization.characters,
              inputFormatters: [
                FilteringTextInputFormatter.allow(RegExp(r'[0-9A-Za-z]')),
                _MyCodeInputFormatter(),
              ],
              decoration: InputDecoration(
                labelText: 'Recipient My Code',
                hintText: '12345A',
                counterText: '',
                filled: true,
                fillColor: isDark ? const Color(0xFF151B28) : Colors.white,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
              ),
            ),
            const SizedBox(height: 12),
            ...widget.items.take(3).map(
              (item) => Padding(
                padding: const EdgeInsets.only(bottom: 6),
                child: Row(
                  children: [
                    Icon(Icons.insert_drive_file_rounded, size: 18, color: kNgmyStudioHubAccent),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(item.name, overflow: TextOverflow.ellipsis, style: TextStyle(color: fg, fontSize: 13)),
                    ),
                  ],
                ),
              ),
            ),
            if (widget.items.length > 3)
              Text('+ ${widget.items.length - 3} more', style: TextStyle(color: fg.withValues(alpha: 0.5), fontSize: 12)),
            if (_status != null) ...[
              const SizedBox(height: 16),
              Text(_status!, style: TextStyle(color: fg.withValues(alpha: 0.75), fontSize: 13)),
            ],
            const Spacer(),
            FilledButton(
              onPressed: _sending ? null : _send,
              style: FilledButton.styleFrom(
                backgroundColor: kNgmyStudioHubAccent,
                padding: const EdgeInsets.symmetric(vertical: 16),
              ),
              child: _sending
                  ? const SizedBox(
                      width: 22,
                      height: 22,
                      child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                    )
                  : const Text('Send to their Doc Share', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
            ),
          ],
        ),
      ),
    );
  }
}

class _MyCodeInputFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final upper = newValue.text.toUpperCase();
    final buf = StringBuffer();
    for (var i = 0; i < upper.length && i < 6; i++) {
      final ch = upper[i];
      if (i < 5) {
        if (RegExp(r'\d').hasMatch(ch)) buf.write(ch);
      } else if (RegExp(r'[A-Z]').hasMatch(ch)) {
        buf.write(ch);
      }
    }
    final text = buf.toString();
    return TextEditingValue(text: text, selection: TextSelection.collapsed(offset: text.length));
  }
}
