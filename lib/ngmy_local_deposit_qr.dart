import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'main.dart';
import 'ngmy_nav.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';

/// Short QR prefix for admin-generated local Growth Income deposit codes.
const String kNgmyLocalDepositQrPrefix = 'NGMYLOCALDEP1';

String _stashKey(String token) => 'ngmy_local_deposit_qr_v1_${token.trim()}';
String _codeKey(String code) => 'ngmy_local_deposit_code_v1_${code.trim().toUpperCase()}';

String _generateToken() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  final r = Random.secure();
  return 'LD${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
}

/// Admin creates a one-time deposit QR; users scan it in Local Growth Income
/// backup/restore to credit their local wallet automatically.
class NgmyLocalDepositQr {
  static String generateCode() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    final r = Random.secure();
    return List.generate(6, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static String? normalizeCode(String raw) {
    final t = raw.trim().toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
    if (t.length < 5 || t.length > 6) return null;
    return t;
  }

  static bool looksLikeCode(String raw) {
    final t = raw.trim();
    if (t.isEmpty || t.length > 6) return false;
    if (t.contains('|') || t.contains(':') || t.contains('/') || t.contains('.') || t.contains(' ')) return false;
    if (RegExp(r'^(NGMY|HTTP)', caseSensitive: false).hasMatch(t)) return false;
    return RegExp(r'^[A-Za-z0-9]{5,6}$').hasMatch(t);
  }

  static Future<({String qrPayload, String code, double amount})?> create({
    required String adminEmail,
    required double amount,
  }) async {
    if (amount <= 0) return null;
    final token = _generateToken();
    final code = generateCode();
    final now = DateTime.now().toUtc().toIso8601String();
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _stashKey(token),
          'value': {
            'amount': amount,
            'adminEmail': adminEmail.toLowerCase().trim(),
            'createdAt': now,
            'redeemedBy': '',
          },
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _codeKey(code),
          'value': {'token': token, 'updatedAt': now},
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[local deposit qr] create: $e');
      return null;
    }
    return (qrPayload: '$kNgmyLocalDepositQrPrefix|$token', code: code, amount: amount);
  }

  static Future<String?> _loadTokenForCode(String code) async {
    final normalized = normalizeCode(code);
    if (normalized == null) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _codeKey(normalized))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is Map) return (value['token'] ?? '').toString().trim();
    } catch (e) {
      debugPrint('[local deposit qr] code lookup: $e');
    }
    return null;
  }

  static Future<({double amount, String adminEmail})?> redeemByCode({
    required String code,
    required String redeemerEmail,
  }) async {
    final token = await _loadTokenForCode(code);
    if (token == null || token.isEmpty) return null;
    return redeem(raw: '$kNgmyLocalDepositQrPrefix|$token', redeemerEmail: redeemerEmail);
  }

  static Future<({double amount, String adminEmail})?> redeem({
    required String raw,
    required String redeemerEmail,
  }) async {
    final text = raw.trim();
    if (!text.startsWith('$kNgmyLocalDepositQrPrefix|')) return null;
    final token = text.substring(kNgmyLocalDepositQrPrefix.length + 1).trim();
    if (token.isEmpty) return null;

    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _stashKey(token))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is! Map) return null;

      final redeemedBy = (value['redeemedBy'] ?? '').toString().trim();
      if (redeemedBy.isNotEmpty) return null;

      final amount = (value['amount'] as num? ?? 0).toDouble();
      if (amount <= 0) return null;

      final adminEmail = (value['adminEmail'] ?? '').toString().trim();
      final now = DateTime.now().toUtc().toIso8601String();
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _stashKey(token),
          'value': {
            ...Map<String, dynamic>.from(value),
            'redeemedBy': redeemerEmail.toLowerCase().trim(),
            'redeemedAt': now,
          },
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);

      return (amount: amount, adminEmail: adminEmail);
    } catch (e) {
      debugPrint('[local deposit qr] redeem: $e');
      return null;
    }
  }
}

String ngmyAppWhatsAppDigits(AppConfig config) {
  final phone = config.helpPhone.trim().isNotEmpty ? config.helpPhone.trim() : config.loanPhone.trim();
  return phone.replaceAll(RegExp(r'[^\d]'), '');
}

Future<void> ngmyOpenAppWhatsApp(AppConfig config, String message) async {
  final digits = ngmyAppWhatsAppDigits(config);
  if (digits.isEmpty || message.trim().isEmpty) return;
  final uri = Uri.parse('https://wa.me/$digits?text=${Uri.encodeComponent(message.trim())}');
  try {
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  } catch (_) {}
}

String ngmyLocalDepositWhatsAppMessage({
  required UserData user,
  required String realEmail,
  required AppTransaction transaction,
  required AppConfig config,
}) {
  final method = transaction.method == PaymentMethod.cashApp ? 'Cash App' : 'Bitcoin';
  final code = (transaction.verificationCode ?? '').trim();
  final handle = (transaction.sourceDetails ?? '').trim();
  final payTo = transaction.method == PaymentMethod.cashApp ? config.officialCashApp : config.officialBitcoin;
  final buf = StringBuffer()
    ..writeln('*NGMY Local Growth Income — Deposit Request*')
    ..writeln('Amount: *\$${formatCurrency(transaction.amount)}*')
    ..writeln('User: ${user.username.trim().isEmpty ? 'User' : user.username.trim()}')
    ..writeln('Account: $realEmail')
    ..writeln('Pay to: $payTo ($method)')
    ..writeln('Sender $method: ${handle.isEmpty ? '(see screenshot)' : handle}');
  if (code.isNotEmpty) buf.writeln('Verification code: *$code*');
  buf.writeln('Submitted today via NGMY Local Wallet.');
  return buf.toString();
}

Future<void> showNgmyAdminLocalDepositQrFlow(
  BuildContext context, {
  required String adminEmail,
}) async {
  final amountC = TextEditingController();
  final amount = await showDialog<double>(
    context: context,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      return AlertDialog(
        backgroundColor: isDark ? const Color(0xFF151B28) : Colors.white,
        title: const Text('Local deposit QR', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Enter the amount to credit when a user scans this QR in Local Growth Income → Backup & Restore.',
              style: TextStyle(fontSize: 13, color: isDark ? Colors.white70 : const Color(0xFF64748B), height: 1.4),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: amountC,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: InputDecoration(
                labelText: 'Amount (\$)',
                prefixText: '\$ ',
                filled: true,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
              ),
              autofocus: true,
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () {
              final a = double.tryParse(amountC.text.trim());
              if (a == null || a <= 0) {
                ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter a valid amount.')));
                return;
              }
              Navigator.pop(ctx, a);
            },
            style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
            child: const Text('Generate QR'),
          ),
        ],
      );
    },
  );
  amountC.dispose();
  if (amount == null || amount <= 0 || !context.mounted) return;

  final created = await NgmyLocalDepositQr.create(adminEmail: adminEmail, amount: amount);
  if (!context.mounted) return;
  if (created == null) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Could not create deposit QR. Check your connection and try again.')),
    );
    return;
  }

  await NgmyNavigator.push<void>(
    context,
    _NgmyLocalDepositQrPage(qrPayload: created.qrPayload, code: created.code, amount: created.amount),
    fullscreenDialog: true,
  );
}

class _NgmyLocalDepositQrPage extends StatefulWidget {
  const _NgmyLocalDepositQrPage({required this.qrPayload, required this.code, required this.amount});

  final String qrPayload;
  final String code;
  final double amount;

  @override
  State<_NgmyLocalDepositQrPage> createState() => _NgmyLocalDepositQrPageState();
}

class _NgmyLocalDepositQrPageState extends State<_NgmyLocalDepositQrPage> {
  final GlobalKey _qrCaptureKey = GlobalKey();
  bool _downloading = false;

  void _copy(String text, String label) {
    Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$label copied')));
  }

  Future<void> _downloadQr() async {
    if (_downloading) return;
    setState(() => _downloading = true);
    try {
      final bytes = await NgmyBrandedQrWidget.capturePng(_qrCaptureKey, pixelRatio: 4);
      if (bytes == null || bytes.isEmpty) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Could not capture QR image.')));
        }
        return;
      }
      final msg = await downloadNgmyQrImage(bytes, 'ngmy_local_deposit_qr.png');
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } finally {
      if (mounted) setState(() => _downloading = false);
    }
  }

  Widget _copyChip({required String label, required VoidCallback onTap}) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(20),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: WorksheetPalette.green.withValues(alpha: 0.12),
          borderRadius: BorderRadius.circular(20),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.copy_rounded, size: 14, color: WorksheetPalette.green),
            const SizedBox(width: 6),
            Text(label, style: TextStyle(color: WorksheetPalette.green, fontWeight: FontWeight.w800, fontSize: 12)),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Deposit QR', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: card,
                    borderRadius: BorderRadius.circular(24),
                    border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                  ),
                  child: Column(
                    children: [
                      Text(
                        '\$${formatCurrency(widget.amount)}',
                        style: TextStyle(fontWeight: FontWeight.w900, fontSize: 32, color: WorksheetPalette.green),
                      ),
                      const SizedBox(height: 6),
                      Text('Local Growth Income deposit', style: TextStyle(fontSize: 13, color: titleColor.withValues(alpha: 0.7))),
                      const SizedBox(height: 20),
                      NgmyBrandedQrWidget(data: widget.qrPayload, large: true, captureKey: _qrCaptureKey),
                      const SizedBox(height: 16),
                      Text('Code: ${widget.code}', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: titleColor, letterSpacing: 1.2)),
                      const SizedBox(height: 12),
                      Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        alignment: WrapAlignment.center,
                        children: [
                          _copyChip(label: 'Copy 6-digit code', onTap: () => _copy(widget.code, '6-digit code')),
                          _copyChip(label: 'Copy QR payload', onTap: () => _copy(widget.qrPayload, 'QR payload')),
                        ],
                      ),
                      const SizedBox(height: 12),
                      OutlinedButton.icon(
                        onPressed: _downloading ? null : _downloadQr,
                        icon: _downloading
                            ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                            : const Icon(Icons.download_rounded, size: 18),
                        label: Text(_downloading ? 'Saving…' : 'Download QR image'),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: WorksheetPalette.green,
                          side: BorderSide(color: WorksheetPalette.green.withValues(alpha: 0.45)),
                        ),
                      ),
                      const SizedBox(height: 14),
                      Text(
                        'Send the QR image or the 6-digit code to the user. They can scan under Backup & Restore → Scan QR, '
                        'or type the code under Enter Code. Each deposit works once.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : const Color(0xFF64748B), height: 1.4),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => Navigator.pop(context),
                style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green, minimumSize: const Size(double.infinity, 48)),
                child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
