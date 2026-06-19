import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_civic_registry_members.dart';

const kNgmyCivicIdQrPrefix = 'NGMY-CIVIC:';

String ngmyCivicIdQrPayload(String registryId) => '$kNgmyCivicIdQrPrefix${registryId.trim().toUpperCase()}';

String? ngmyParseRegistryIdFromScan(String raw) {
  final text = raw.trim();
  if (text.isEmpty) return null;
  if (text.toUpperCase().startsWith(kNgmyCivicIdQrPrefix)) {
    final id = text.substring(kNgmyCivicIdQrPrefix.length).trim();
    return id.isEmpty ? null : id.toUpperCase();
  }
  final match = RegExp(r'^[A-Z]{2}\d{5,}$').firstMatch(text.toUpperCase());
  if (match != null) return match.group(0);
  return null;
}

Map<String, dynamic>? ngmyFindCivicMemberByRegistryId(dynamic config, String registryId) =>
    NgmyCivicRegistryMembers.findByRegistryId(config, registryId);

typedef NgmyCivicIdDepositHandler = void Function({
  required String memberEmail,
  required String registryId,
  required String memberName,
  required double amount,
  required bool walletDeposit,
});

Future<void> showNgmyCivicIdScannerSheet(
  BuildContext context, {
  required dynamic config,
  required bool walletDepositEnabled,
  required NgmyCivicIdDepositHandler onDeposit,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      final idC = TextEditingController();
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: Container(
          margin: const EdgeInsets.fromLTRB(14, 0, 14, 18),
          padding: const EdgeInsets.fromLTRB(18, 18, 18, 22),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF0F111A) : Colors.white,
            borderRadius: BorderRadius.circular(24),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: const Color(0xFF6200EE).withOpacity(0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(Icons.qr_code_scanner_rounded, color: Color(0xFF6200EE)),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('Scan Registry ID', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17)),
                        Text(
                          walletDepositEnabled ? 'Scan ID to deposit into wallet' : 'Scan ID to record contribution',
                          style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              if (barcode_platform.ngmyBarcodeUseCamera)
                FilledButton.icon(
                  onPressed: () async {
                    final id = await Navigator.push<String>(
                      ctx,
                      MaterialPageRoute(builder: (_) => const _NgmyCivicIdScanPage()),
                    );
                    if (id == null || !ctx.mounted) return;
                    Navigator.pop(ctx);
                    if (!context.mounted) return;
                    await _promptCivicIdDeposit(
                      context,
                      registryId: id,
                      config: config,
                      walletDepositEnabled: walletDepositEnabled,
                      onDeposit: onDeposit,
                    );
                  },
                  icon: const Icon(Icons.photo_camera_outlined),
                  label: const Text('Open camera scanner'),
                  style: FilledButton.styleFrom(
                    backgroundColor: const Color(0xFF6200EE),
                    minimumSize: const Size(double.infinity, 48),
                  ),
                ),
              if (barcode_platform.ngmyBarcodeUseCamera) const SizedBox(height: 12),
              TextField(
                controller: idC,
                textCapitalization: TextCapitalization.characters,
                decoration: const InputDecoration(
                  labelText: 'Registry ID',
                  hintText: 'e.g. GE5263618',
                  prefixIcon: Icon(Icons.badge_outlined),
                ),
              ),
              const SizedBox(height: 14),
              FilledButton(
                onPressed: () async {
                  final id = ngmyParseRegistryIdFromScan(idC.text);
                  if (id == null) {
                    ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter a valid registry ID.')));
                    return;
                  }
                  Navigator.pop(ctx);
                  if (!context.mounted) return;
                  await _promptCivicIdDeposit(
                    context,
                    registryId: id,
                    config: config,
                    walletDepositEnabled: walletDepositEnabled,
                    onDeposit: onDeposit,
                  );
                },
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF059669), minimumSize: const Size(double.infinity, 46)),
                child: const Text('Find member & deposit', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ],
          ),
        ),
      );
    },
  );
}

Future<void> _promptCivicIdDeposit(
  BuildContext context, {
  required String registryId,
  required dynamic config,
  required bool walletDepositEnabled,
  required NgmyCivicIdDepositHandler onDeposit,
}) async {
  final member = ngmyFindCivicMemberByRegistryId(config, registryId);
  if (member == null) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('No member found for ID $registryId.')));
    return;
  }
  final name = (member['fullName'] ?? '').toString();
  final email = NgmyCivicRegistryMembers.emailKey((member['email'] ?? '').toString());
  final amountC = TextEditingController();

  await showDialog<void>(
    context: context,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      return AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        title: const Text('Deposit to member'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1E293B) : const Color(0xFFF0FDF4),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFF86EFAC)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(name.isEmpty ? 'Registry member' : name, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 16)),
                  const SizedBox(height: 4),
                  Text('ID: $registryId', style: TextStyle(fontSize: 13, color: isDark ? Colors.white70 : const Color(0xFF166534))),
                  if (email.isNotEmpty) Text(email, style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
                ],
              ),
            ),
            const SizedBox(height: 14),
            TextField(
              controller: amountC,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: InputDecoration(
                labelText: walletDepositEnabled ? 'Deposit amount (\$)' : 'Contribution amount (\$)',
                prefixIcon: const Icon(Icons.attach_money),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () {
              final amount = double.tryParse(amountC.text.trim()) ?? 0;
              if (amount <= 0) {
                ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter a valid amount.')));
                return;
              }
              if (email.isEmpty) {
                ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Member has no email on file.')));
                return;
              }
              onDeposit(
                memberEmail: email,
                registryId: registryId,
                memberName: name,
                amount: amount,
                walletDeposit: walletDepositEnabled,
              );
              Navigator.pop(ctx);
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(
                    walletDepositEnabled
                        ? 'Deposited \$${amount.toStringAsFixed(2)} to ${name.isEmpty ? registryId : name}.'
                        : 'Contribution recorded for ${name.isEmpty ? registryId : name}.',
                  ),
                  backgroundColor: Colors.green,
                ),
              );
            },
            child: Text(walletDepositEnabled ? 'Deposit' : 'Save contribution'),
          ),
        ],
      );
    },
  );
}

class _NgmyCivicIdScanPage extends StatefulWidget {
  const _NgmyCivicIdScanPage();

  @override
  State<_NgmyCivicIdScanPage> createState() => _NgmyCivicIdScanPageState();
}

class _NgmyCivicIdScanPageState extends State<_NgmyCivicIdScanPage> {
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.normal,
    facing: CameraFacing.back,
  );
  bool _handled = false;

  @override
  void dispose() {
    _camera.dispose();
    super.dispose();
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final b in capture.barcodes) {
      final id = ngmyParseRegistryIdFromScan(b.rawValue?.trim() ?? '');
      if (id != null) {
        _handled = true;
        Navigator.pop(context, id);
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: const Text('Scan Registry ID'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
      ),
      body: Stack(
        fit: StackFit.expand,
        children: [
          MobileScanner(controller: _camera, onDetect: _onDetect),
          Positioned(
            left: 16,
            right: 16,
            bottom: 28,
            child: SafeArea(
              top: false,
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.black.withOpacity(0.82),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: Colors.white24),
                ),
                child: const Text(
                  'Point at the QR code on the member\'s Civic Registry ID card.',
                  style: TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w600, height: 1.35),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
