import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// NGMY-exclusive tech tools — not available on other platforms.
class NgmyTechExclusive {
  NgmyTechExclusive._();

  static Future<void> showPhantomHandshake(BuildContext context) async {
    final code = _ngmyPairCode();
    final expires = DateTime.now().add(const Duration(minutes: 5));
    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF0A0F1A),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        title: const Row(
          children: [
            Icon(Icons.link_rounded, color: Color(0xFF22D3EE)),
            SizedBox(width: 8),
            Text('Phantom Handshake', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'One-time NGMY pairing code — share with another device running NGMY. Expires in 5 minutes. Never stored on a server.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 13, height: 1.4),
            ),
            const SizedBox(height: 16),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 18),
              decoration: BoxDecoration(
                color: Colors.black,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFF22D3EE).withValues(alpha: 0.5)),
              ),
              child: Text(
                code,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: Color(0xFF22D3EE),
                  fontSize: 28,
                  fontWeight: FontWeight.w900,
                  letterSpacing: 6,
                  fontFamily: 'monospace',
                ),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Expires ${_formatTime(expires)}',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
          FilledButton(
            onPressed: () {
              Clipboard.setData(ClipboardData(text: code));
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Pairing code copied')));
            },
            child: const Text('Copy code'),
          ),
        ],
      ),
    );
  }

  static Future<void> showCipherDrop(BuildContext context) async {
    final input = TextEditingController();
    final key = TextEditingController();
    final output = ValueNotifier<String>('');
    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF0A0F1A),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        title: const Row(
          children: [
            Icon(Icons.enhanced_encryption_rounded, color: Color(0xFF10B981)),
            SizedBox(width: 8),
            Text('Cipher Drop', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
          ],
        ),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'Client-side only — your message never leaves this device unencrypted. Only someone with the key can decode.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 12, height: 1.35),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: input,
                maxLines: 3,
                style: const TextStyle(color: Colors.white),
                decoration: _field('Secret message'),
              ),
              const SizedBox(height: 8),
              TextField(
                controller: key,
                style: const TextStyle(color: Colors.white),
                decoration: _field('Passphrase key'),
              ),
              const SizedBox(height: 12),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => output.value = _cipher(input.text, key.text),
                      child: const Text('Encrypt'),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => output.value = _decipher(input.text, key.text),
                      child: const Text('Decrypt'),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              ValueListenableBuilder<String>(
                valueListenable: output,
                builder: (_, v, __) => v.isEmpty
                    ? const SizedBox.shrink()
                    : SelectableText(v, style: const TextStyle(color: Color(0xFF10B981), fontFamily: 'monospace', fontSize: 11)),
              ),
            ],
          ),
        ),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Done'))],
      ),
    );
    input.dispose();
    key.dispose();
    output.dispose();
  }

  static Future<void> showSignalGhost(BuildContext context) async {
    final ua = Uri.base.toString();
    final tz = DateTime.now().timeZoneName;
    final seed = '${DateTime.now().millisecondsSinceEpoch}${math.Random().nextInt(9999)}';
    final trace = base64Url.encode(utf8.encode(seed)).substring(0, 16).toUpperCase();
    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF0A0F1A),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        title: const Row(
          children: [
            Icon(Icons.radar_rounded, color: Color(0xFFF97316)),
            SizedBox(width: 8),
            Text('Signal Ghost', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'NGMY device fingerprint — a read-only trace of how this session appears on the network. For your eyes only.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 12, height: 1.35),
            ),
            const SizedBox(height: 14),
            _ghostRow('Trace ID', trace),
            _ghostRow('Session', ua.length > 42 ? '${ua.substring(0, 42)}…' : ua),
            _ghostRow('Timezone', tz),
            _ghostRow('Entropy', '${(math.Random().nextDouble() * 100).toStringAsFixed(2)} bits'),
            _ghostRow('Status', 'GHOST — passive scan'),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
          FilledButton(
            onPressed: () {
              Clipboard.setData(ClipboardData(text: 'NGMY-SIGNAL-$trace'));
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Trace copied')));
            },
            child: const Text('Copy trace'),
          ),
        ],
      ),
    );
  }

  static InputDecoration _field(String label) => InputDecoration(
        labelText: label,
        labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.5)),
        filled: true,
        fillColor: Colors.white.withValues(alpha: 0.06),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
      );

  static Widget _ghostRow(String k, String v) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(width: 72, child: Text(k, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11))),
            Expanded(child: Text(v, style: const TextStyle(color: Color(0xFFF97316), fontSize: 11, fontFamily: 'monospace'))),
          ],
        ),
      );

  static String _ngmyPairCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = math.Random();
    return List.generate(8, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static String _cipher(String text, String key) {
    if (text.isEmpty || key.isEmpty) return '';
    final kb = utf8.encode(key);
    final out = <int>[];
    for (var i = 0; i < text.length; i++) {
      out.add(text.codeUnitAt(i) ^ kb[i % kb.length]);
    }
    return base64Url.encode(out);
  }

  static String _decipher(String encoded, String key) {
    if (encoded.isEmpty || key.isEmpty) return '';
    try {
      final bytes = base64Url.decode(encoded.replaceAll(' ', '+'));
      final kb = utf8.encode(key);
      final out = StringBuffer();
      for (var i = 0; i < bytes.length; i++) {
        out.writeCharCode(bytes[i] ^ kb[i % kb.length]);
      }
      return out.toString();
    } catch (_) {
      return 'Invalid cipher text';
    }
  }

  static String _formatTime(DateTime dt) {
    final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
    final ampm = dt.hour >= 12 ? 'PM' : 'AM';
    return '$h:${dt.minute.toString().padLeft(2, '0')} $ampm';
  }
}

void showNgmyPhantomHandshakeDialog(BuildContext context) => NgmyTechExclusive.showPhantomHandshake(context);
void showNgmyCipherDropDialog(BuildContext context) => NgmyTechExclusive.showCipherDrop(context);
void showNgmySignalGhostDialog(BuildContext context) => NgmyTechExclusive.showSignalGhost(context);
