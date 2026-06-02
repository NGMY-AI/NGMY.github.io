import 'dart:convert';
import 'dart:io';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Reply payload type for Cash App / Zelle payment proof in store messages.
class NgmyStorePaymentReply {
  static const purchaseNotification = 'purchase_notification';
  static const purchaseStatus = 'purchase_status';

  static bool isPurchaseNotification(Map<String, dynamic> r) =>
      (r['type'] ?? '').toString() == purchaseNotification;

  static bool isPurchaseStatus(Map<String, dynamic> r) =>
      (r['type'] ?? '').toString() == purchaseStatus;

  static String paymentStatusOf(Map<String, dynamic> r) =>
      (r['paymentStatus'] ?? 'pending').toString();

  static bool isPending(Map<String, dynamic> r) => paymentStatusOf(r) == 'pending';
}

String ngmyGenerateStorePaymentCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  final r = Random();
  return List.generate(8, (_) => chars[r.nextInt(chars.length)]).join();
}

String ngmyStorePaymentMethodLabel(String method) {
  switch (method.toLowerCase().trim()) {
    case 'cashapp':
      return 'CASHAPP';
    case 'zelle':
      return 'ZELLE';
    default:
      return method.toUpperCase();
  }
}

/// Purchase notification card — matches NGMY store payment receipt design.
class NgmyPurchaseNotificationCard extends StatelessWidget {
  const NgmyPurchaseNotificationCard({
    super.key,
    required this.product,
    required this.paymentMethod,
    required this.deliveryAddress,
    required this.transactionCode,
    this.screenshotPath,
    this.paymentStatus = 'pending',
    this.showActions = false,
    this.busy = false,
    this.onConfirm,
    this.onReject,
    this.onScreenshotTap,
  });

  final String product;
  final String paymentMethod;
  final String deliveryAddress;
  final String transactionCode;
  final String? screenshotPath;
  final String paymentStatus;
  final bool showActions;
  final bool busy;
  final VoidCallback? onConfirm;
  final VoidCallback? onReject;
  final VoidCallback? onScreenshotTap;

  static const _cream = Color(0xFFFFFDF5);
  static const _borderBlue = Color(0xFF2563EB);
  static const _codeBlue = Color(0xFF1D4ED8);

  @override
  Widget build(BuildContext context) {
    final resolved = paymentStatus.toLowerCase();
    final pending = resolved == 'pending';

    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: _cream,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: _borderBlue, width: 2),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 8, offset: const Offset(0, 3)),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 28,
                height: 28,
                decoration: BoxDecoration(
                  color: const Color(0xFFF97316),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: const Icon(Icons.receipt_long_rounded, color: Colors.white, size: 18),
              ),
              const SizedBox(width: 8),
              const Expanded(
                child: Text(
                  'PURCHASE NOTIFICATION',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 0.4, color: Color(0xFF0F172A)),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          _detailLine('Product:', product),
          const SizedBox(height: 4),
          _detailLine('Payment Method:', paymentMethod),
          const SizedBox(height: 4),
          _detailLine('Delivery Address:', deliveryAddress),
          const SizedBox(height: 12),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFEFF6FF),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0xFF93C5FD)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Row(
                  children: [
                    Icon(Icons.vpn_key_rounded, color: _codeBlue, size: 16),
                    SizedBox(width: 6),
                    Text('Transaction Code:', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: _codeBlue)),
                  ],
                ),
                const SizedBox(height: 6),
                Text(
                  transactionCode,
                  style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 22, color: _codeBlue, letterSpacing: 1.2),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Buyer should include this code in payment note',
                  style: TextStyle(fontSize: 10, color: Color(0xFF1E40AF), fontWeight: FontWeight.w600),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          const Row(
            children: [
              Icon(Icons.photo_library_outlined, size: 16, color: Color(0xFF475569)),
              SizedBox(width: 6),
              Text('Payment Proof:', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: Color(0xFF0F172A))),
            ],
          ),
          const SizedBox(height: 8),
          GestureDetector(
            onTap: onScreenshotTap,
            child: Container(
              width: double.infinity,
              constraints: const BoxConstraints(minHeight: 120, maxHeight: 200),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: const Color(0xFFCBD5E1)),
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(7),
                child: NgmyPaymentProofImage(path: screenshotPath),
              ),
            ),
          ),
          if (showActions && pending) ...[
            const SizedBox(height: 12),
            const Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(Icons.warning_amber_rounded, color: Color(0xFFD97706), size: 18),
                SizedBox(width: 6),
                Expanded(
                  child: Text(
                    'Please review the payment proof and confirm or reject below.',
                    style: TextStyle(fontWeight: FontWeight.w800, fontSize: 11, color: Color(0xFFB45309), height: 1.35),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: _actionBtn(
                    label: 'Confirm',
                    icon: Icons.check_rounded,
                    colors: const [Color(0xFF16A34A), Color(0xFF22C55E)],
                    onTap: busy ? null : onConfirm,
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: _actionBtn(
                    label: 'Reject',
                    icon: Icons.close_rounded,
                    colors: const [Color(0xFFDC2626), Color(0xFFEF4444)],
                    onTap: busy ? null : onReject,
                  ),
                ),
              ],
            ),
          ] else if (!pending) ...[
            const SizedBox(height: 10),
            Text(
              resolved == 'approved' ? 'Payment reviewed — approved' : 'Payment reviewed — rejected',
              style: TextStyle(
                fontWeight: FontWeight.w800,
                fontSize: 11,
                color: resolved == 'approved' ? const Color(0xFF16A34A) : const Color(0xFFDC2626),
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _detailLine(String label, String value) => RichText(
        text: TextSpan(
          style: const TextStyle(fontSize: 12, color: Color(0xFF0F172A), height: 1.35),
          children: [
            TextSpan(text: '$label ', style: const TextStyle(fontWeight: FontWeight.w800)),
            TextSpan(text: value, style: const TextStyle(fontWeight: FontWeight.w500)),
          ],
        ),
      );

  Widget _actionBtn({
    required String label,
    required IconData icon,
    required List<Color> colors,
    required VoidCallback? onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(24),
        child: Ink(
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors),
            borderRadius: BorderRadius.circular(24),
          ),
          padding: const EdgeInsets.symmetric(vertical: 12),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, color: Colors.white, size: 20),
              const SizedBox(width: 6),
              Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
            ],
          ),
        ),
      ),
    );
  }
}

class NgmyPurchaseStatusBubble extends StatelessWidget {
  const NgmyPurchaseStatusBubble({super.key, required this.message, required this.icon, required this.iconColor});

  final String message;
  final IconData icon;
  final Color iconColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFE2E8F0)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: iconColor, size: 18),
          const SizedBox(width: 8),
          Expanded(
            child: Text(message, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: Color(0xFF334155), height: 1.35)),
          ),
        ],
      ),
    );
  }
}

class NgmyPaymentProofImage extends StatelessWidget {
  const NgmyPaymentProofImage({super.key, this.path});

  final String? path;

  @override
  Widget build(BuildContext context) {
    final p = path?.trim() ?? '';
    if (p.isEmpty) {
      return const Center(
        child: Padding(
          padding: EdgeInsets.all(16),
          child: Text('No screenshot attached', style: TextStyle(color: Colors.grey, fontSize: 12)),
        ),
      );
    }
    if (p.startsWith('data:image')) {
      try {
        final comma = p.indexOf(',');
        if (comma > 0) {
          final bytes = base64Decode(p.substring(comma + 1));
          return Image.memory(bytes, fit: BoxFit.contain);
        }
      } catch (_) {}
    }
    if (p.startsWith('http://') || p.startsWith('https://')) {
      return Image.network(p, fit: BoxFit.contain, errorBuilder: (_, __, ___) => const _Err());
    }
    if (!kIsWeb) {
      return Image.file(File(p), fit: BoxFit.contain, errorBuilder: (_, __, ___) => const _Err());
    }
    return const _Err();
  }
}

class _Err extends StatelessWidget {
  const _Err();

  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Unable to load screenshot', style: TextStyle(color: Colors.grey, fontSize: 12)));
  }
}
