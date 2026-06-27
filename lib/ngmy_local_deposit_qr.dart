import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'main.dart';
import 'ngmy_nav.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';

/// Short QR prefix for admin-generated local Growth Income deposit codes.
const String kNgmyLocalDepositQrPrefix = 'NGMYLOCALDEP1';

String _stashKey(String token) => 'ngmy_local_deposit_qr_v1_${token.trim()}';

String _generateToken() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  final r = Random.secure();
  return 'LD${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
}

/// Admin creates a one-time deposit QR; users scan it in Local Growth Income
/// backup/restore to credit their local wallet automatically.
class NgmyLocalDepositQr {
  static Future<({String qrPayload, double amount})?> create({
    required String adminEmail,
    required double amount,
  }) async {
    if (amount <= 0) return null;
    final token = _generateToken();
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
    } catch (e) {
      debugPrint('[local deposit qr] create: $e');
      return null;
    }
    return (qrPayload: '$kNgmyLocalDepositQrPrefix|$token', amount: amount);
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
    _NgmyLocalDepositQrPage(qrPayload: created.qrPayload, amount: created.amount),
    fullscreenDialog: true,
  );
}

class _NgmyLocalDepositQrPage extends StatelessWidget {
  const _NgmyLocalDepositQrPage({required this.qrPayload, required this.amount});

  final String qrPayload;
  final double amount;

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
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: card,
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      '\$${formatCurrency(amount)}',
                      style: TextStyle(fontWeight: FontWeight.w900, fontSize: 32, color: WorksheetPalette.green),
                    ),
                    const SizedBox(height: 6),
                    Text('Local Growth Income deposit', style: TextStyle(fontSize: 13, color: titleColor.withValues(alpha: 0.7))),
                    const SizedBox(height: 20),
                    NgmyBrandedQrWidget(data: qrPayload, large: true),
                    const SizedBox(height: 16),
                    InkWell(
                      onTap: () {
                        Clipboard.setData(ClipboardData(text: qrPayload));
                        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('QR payload copied')));
                      },
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
                            Text('Copy code', style: TextStyle(color: WorksheetPalette.green, fontWeight: FontWeight.w800, fontSize: 12)),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      'Send this QR to the user. They scan it under Local Growth Income → Backup & Restore → Scan QR. '
                      'Each code works once.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : const Color(0xFF64748B), height: 1.4),
                    ),
                  ],
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
