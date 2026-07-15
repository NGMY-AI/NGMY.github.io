import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_my_code.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_share_image.dart';
import 'ngmy_studio_hub.dart';

({Color bg, Color card, Color fg, Color muted, Color border, Color wash}) _sendCodeColors(BuildContext context) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  return (
    bg: isDark ? const Color(0xFF081018) : const Color(0xFFF3F7FB),
    card: isDark ? const Color(0xFF121A26) : Colors.white,
    fg: isDark ? const Color(0xFFF8FAFC) : const Color(0xFF0F172A),
    muted: isDark ? const Color(0xFF94A3B8) : const Color(0xFF64748B),
    border: isDark ? const Color(0xFF243041) : const Color(0xFFE2E8F0),
    wash: isDark ? const Color(0xFF0D9488) : const Color(0xFF14B8A6),
  );
}

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

/// Send document(s) to someone using their personal Doc Share code or QR.
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
  final _focusNode = FocusNode();
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
    _focusNode.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    if (_sending) return;
    final code = NgmyDocShareMyCode.normalizeInput(_codeController.text);
    if (code == null) {
      setState(() => _status = 'Enter their code — 5 numbers then 1 letter (example: 48291K).');
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

  Future<void> _shareOutside() async {
    if (_sending || widget.items.isEmpty) return;
    setState(() {
      _sending = true;
      _status = 'Opening device share…';
    });
    try {
      final item = widget.items.first;
      final bytes = await NgmyDocShareStore.readBytes(widget.senderEmail, item);
      if (bytes == null || bytes.isEmpty) {
        if (mounted) setState(() => _status = 'Could not read ${item.name}. Try re-uploading.');
        return;
      }
      final msg = await shareNgmyBytes(
        bytes,
        item.name,
        mimeType: item.mime.isEmpty ? 'application/octet-stream' : item.mime,
        title: item.name,
        text: widget.items.length > 1
            ? 'NGMY Doc Share (${widget.items.length} files — sharing first)'
            : 'Shared from NGMY Doc Share',
      );
      if (mounted) setState(() => _status = msg);
    } catch (e) {
      if (mounted) setState(() => _status = 'Could not open share sheet: $e');
    } finally {
      if (mounted) setState(() => _sending = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = _sendCodeColors(context);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final fileCount = widget.items.length;

    return Scaffold(
      backgroundColor: c.bg,
      appBar: AppBar(
        backgroundColor: c.bg,
        foregroundColor: c.fg,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        title: Text('Send to their Code', style: TextStyle(fontWeight: FontWeight.w900, color: c.fg)),
      ),
      body: Stack(
        children: [
          Positioned(
            top: -70,
            right: -50,
            child: IgnorePointer(
              child: Container(
                width: 200,
                height: 200,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(
                    colors: [
                      c.wash.withValues(alpha: isDark ? 0.18 : 0.12),
                      c.wash.withValues(alpha: 0),
                    ],
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            bottom: 80,
            left: -60,
            child: IgnorePointer(
              child: Container(
                width: 170,
                height: 170,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(
                    colors: [
                      kNgmyStudioHubAccent.withValues(alpha: isDark ? 0.12 : 0.08),
                      kNgmyStudioHubAccent.withValues(alpha: 0),
                    ],
                  ),
                ),
              ),
            ),
          ),
          SafeArea(
            child: TweenAnimationBuilder<double>(
              tween: Tween(begin: 0, end: 1),
              duration: const Duration(milliseconds: 480),
              curve: Curves.easeOutCubic,
              builder: (context, t, child) => Opacity(
                opacity: t,
                child: Transform.translate(offset: Offset(0, (1 - t) * 14), child: child),
              ),
              child: Column(
                children: [
                  Expanded(
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Container(
                            padding: const EdgeInsets.all(18),
                            decoration: BoxDecoration(
                              color: c.card,
                              borderRadius: BorderRadius.circular(22),
                              border: Border.all(color: c.border),
                            ),
                            child: Row(
                              children: [
                                Container(
                                  width: 52,
                                  height: 52,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(16),
                                    gradient: LinearGradient(
                                      begin: Alignment.topLeft,
                                      end: Alignment.bottomRight,
                                      colors: [
                                        c.wash.withValues(alpha: 0.85),
                                        kNgmyStudioHubAccent,
                                      ],
                                    ),
                                  ),
                                  child: const Icon(Icons.forward_to_inbox_rounded, color: Colors.white, size: 26),
                                ),
                                const SizedBox(width: 14),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        'Send to someone else',
                                        style: TextStyle(color: c.fg, fontWeight: FontWeight.w900, fontSize: 16),
                                      ),
                                      const SizedBox(height: 4),
                                      Text(
                                        'Enter their personal Doc Share code — not your own My Code.',
                                        style: TextStyle(color: c.muted, height: 1.35, fontSize: 13),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 18),
                          Text(
                            'THEIR CODE',
                            style: TextStyle(
                              color: c.muted,
                              fontSize: 11,
                              fontWeight: FontWeight.w800,
                              letterSpacing: 1.1,
                            ),
                          ),
                          const SizedBox(height: 8),
                          TextField(
                            controller: _codeController,
                            focusNode: _focusNode,
                            autofocus: widget.preselectedCode == null,
                            maxLength: 6,
                            textCapitalization: TextCapitalization.characters,
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: c.fg,
                              fontSize: 28,
                              fontWeight: FontWeight.w900,
                              letterSpacing: 6,
                              fontFeatures: const [FontFeature.tabularFigures()],
                            ),
                            inputFormatters: [
                              FilteringTextInputFormatter.allow(RegExp(r'[0-9A-Za-z]')),
                              _MyCodeInputFormatter(),
                            ],
                            onSubmitted: (_) => _sending ? null : _send(),
                            decoration: InputDecoration(
                              hintText: '12345A',
                              hintStyle: TextStyle(
                                color: c.muted.withValues(alpha: 0.45),
                                fontSize: 28,
                                fontWeight: FontWeight.w900,
                                letterSpacing: 6,
                              ),
                              counterText: '',
                              filled: true,
                              fillColor: c.card,
                              contentPadding: const EdgeInsets.symmetric(vertical: 20, horizontal: 16),
                              enabledBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(18),
                                borderSide: BorderSide(color: c.border),
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(18),
                                borderSide: BorderSide(color: kNgmyStudioHubAccent, width: 1.7),
                              ),
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            '5 numbers + 1 letter',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: c.muted, fontSize: 12),
                          ),
                          const SizedBox(height: 20),
                          Text(
                            'FILES ($fileCount)',
                            style: TextStyle(
                              color: c.muted,
                              fontSize: 11,
                              fontWeight: FontWeight.w800,
                              letterSpacing: 1.1,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Container(
                            padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
                            decoration: BoxDecoration(
                              color: c.card,
                              borderRadius: BorderRadius.circular(18),
                              border: Border.all(color: c.border),
                            ),
                            child: Column(
                              children: [
                                ...widget.items.take(4).map(
                                  (item) => Padding(
                                    padding: const EdgeInsets.symmetric(vertical: 6),
                                    child: Row(
                                      children: [
                                        Container(
                                          width: 36,
                                          height: 36,
                                          decoration: BoxDecoration(
                                            borderRadius: BorderRadius.circular(11),
                                            color: kNgmyStudioHubAccent.withValues(alpha: isDark ? 0.22 : 0.12),
                                          ),
                                          child: Icon(
                                            item.isImage
                                                ? Icons.image_rounded
                                                : item.isVideo
                                                    ? Icons.videocam_rounded
                                                    : Icons.insert_drive_file_rounded,
                                            size: 18,
                                            color: kNgmyStudioHubAccent,
                                          ),
                                        ),
                                        const SizedBox(width: 10),
                                        Expanded(
                                          child: Column(
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                item.name,
                                                overflow: TextOverflow.ellipsis,
                                                style: TextStyle(color: c.fg, fontSize: 13, fontWeight: FontWeight.w700),
                                              ),
                                              Text(item.sizeLabel, style: TextStyle(color: c.muted, fontSize: 11)),
                                            ],
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                if (widget.items.length > 4)
                                  Padding(
                                    padding: const EdgeInsets.only(top: 4),
                                    child: Text(
                                      '+ ${widget.items.length - 4} more',
                                      style: TextStyle(color: c.muted, fontSize: 12, fontWeight: FontWeight.w600),
                                    ),
                                  ),
                              ],
                            ),
                          ),
                          if (_status != null) ...[
                            const SizedBox(height: 16),
                            AnimatedContainer(
                              duration: const Duration(milliseconds: 220),
                              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                              decoration: BoxDecoration(
                                color: kNgmyStudioHubAccent.withValues(alpha: isDark ? 0.16 : 0.1),
                                borderRadius: BorderRadius.circular(14),
                                border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.28)),
                              ),
                              child: Row(
                                children: [
                                  if (_sending)
                                    const SizedBox(
                                      width: 16,
                                      height: 16,
                                      child: CircularProgressIndicator(strokeWidth: 2, color: kNgmyStudioHubAccent),
                                    )
                                  else
                                    Icon(Icons.info_outline_rounded, size: 16, color: c.wash),
                                  const SizedBox(width: 10),
                                  Expanded(
                                    child: Text(
                                      _status!,
                                      style: TextStyle(color: c.fg.withValues(alpha: 0.85), fontSize: 13, height: 1.35),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ],
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(20, 0, 20, 16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        OutlinedButton.icon(
                          onPressed: _sending ? null : _shareOutside,
                          style: OutlinedButton.styleFrom(
                            foregroundColor: c.fg,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            side: BorderSide(color: c.border),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                            backgroundColor: c.card.withValues(alpha: 0.75),
                          ),
                          icon: const Icon(Icons.ios_share_rounded, size: 18),
                          label: const Text(
                            'Share via AirDrop / Bluetooth / Nearby',
                            style: TextStyle(fontWeight: FontWeight.w700),
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Device share sheet when available. Or send in-app with their code below.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: c.muted, fontSize: 11, height: 1.35),
                        ),
                        const SizedBox(height: 12),
                        FilledButton(
                          onPressed: _sending ? null : _send,
                          style: FilledButton.styleFrom(
                            backgroundColor: kNgmyStudioHubAccent,
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(vertical: 16),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                            elevation: 0,
                          ),
                          child: _sending
                              ? const SizedBox(
                                  width: 22,
                                  height: 22,
                                  child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                                )
                              : const Text(
                                  'Send to their Doc Share',
                                  style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15),
                                ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
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
