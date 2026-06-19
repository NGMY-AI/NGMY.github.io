import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'dart:typed_data';

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

  static bool isPaymentReply(Map<String, dynamic> r) =>
      isPurchaseNotification(r) || isPurchaseStatus(r);

  static String paymentStatusOf(Map<String, dynamic> r) =>
      (r['paymentStatus'] ?? 'pending').toString();

  static bool isPending(Map<String, dynamic> r) => paymentStatusOf(r) == 'pending';
}

/// Store payment confirmation threads auto-delete after this many days.
const kNgmyStorePaymentReceiptRetentionDays = 14;

List<Map<String, dynamic>> _storeInquiryRepliesFrom(Map<String, dynamic> m) {
  final raw = m['replies'];
  if (raw is List) {
    return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
  }
  return const [];
}

bool ngmyStoreInquiryHasPaymentContent(Map<String, dynamic> m) =>
    _storeInquiryRepliesFrom(m).any(NgmyStorePaymentReply.isPaymentReply);

DateTime? ngmyStoreInquiryLastActivityAt(Map<String, dynamic> m) {
  final replies = _storeInquiryRepliesFrom(m);
  if (replies.isNotEmpty) {
    return DateTime.tryParse((replies.last['createdAt'] ?? m['createdAt'] ?? '').toString());
  }
  return DateTime.tryParse((m['createdAt'] ?? '').toString());
}

/// Removes payment-confirmation inquiries older than [retentionDays]. Returns deleted inquiry ids.
List<String> ngmyPurgeExpiredStorePaymentReceipts(
  List<Map<String, dynamic>> inquiries, {
  int retentionDays = kNgmyStorePaymentReceiptRetentionDays,
}) {
  final cutoff = DateTime.now().toUtc().subtract(Duration(days: retentionDays));
  final removedIds = <String>[];
  inquiries.removeWhere((m) {
    if (!ngmyStoreInquiryHasPaymentContent(m)) return false;
    final lastAt = ngmyStoreInquiryLastActivityAt(m);
    if (lastAt == null || !lastAt.isBefore(cutoff)) return false;
    final id = (m['id'] ?? '').toString();
    if (id.isNotEmpty) removedIds.add(id);
    return true;
  });
  return removedIds;
}

String ngmyGenerateStorePaymentCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  final r = Random();
  return List.generate(8, (_) => chars[r.nextInt(chars.length)]).join();
}

String ngmyStorePaymentMethodLabel(String method) {
  switch (method.toLowerCase().trim()) {
    case 'cashapp':
      return 'Cash App';
    case 'zelle':
      return 'Zelle';
    case 'ngmy':
      return 'NGMY Balance';
    default:
      return method.isEmpty ? 'Payment' : method.toUpperCase();
  }
}

String _formatStoreMoney(num? value) {
  final v = (value as num?)?.toDouble() ?? 0;
  return '\$${v.toStringAsFixed(2)}';
}

/// Compact seller-only purchase notification (payment proof review).
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

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final pending = paymentStatus.toLowerCase() == 'pending';
    final surface = isDark ? const Color(0xFF1A2030) : const Color(0xFFFFFBF2);
    final border = isDark ? const Color(0xFF3B82F6) : const Color(0xFF2563EB);
    final textPrimary = isDark ? Colors.white : const Color(0xFF0F172A);
    final textMuted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final codeBg = isDark ? const Color(0xFF0F172A) : const Color(0xFFEFF6FF);
    final codeBorder = isDark ? const Color(0xFF60A5FA) : const Color(0xFF93C5FD);

    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: surface,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: border, width: 1.5),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: isDark ? 0.25 : 0.06),
            blurRadius: 6,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 24,
                height: 24,
                decoration: BoxDecoration(
                  color: const Color(0xFFF97316),
                  borderRadius: BorderRadius.circular(5),
                ),
                child: const Icon(Icons.shopping_cart_outlined, color: Colors.white, size: 14),
              ),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  'PURCHASE NOTIFICATION',
                  style: TextStyle(
                    fontWeight: FontWeight.w900,
                    fontSize: 10.5,
                    letterSpacing: 0.35,
                    color: textPrimary,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          _compactDetail('Product', product, textPrimary, textMuted),
          const SizedBox(height: 3),
          _compactDetail('Pay via', paymentMethod, textPrimary, textMuted),
          const SizedBox(height: 3),
          _compactDetail('Ship to', deliveryAddress, textPrimary, textMuted, maxLines: 2),
          const SizedBox(height: 8),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 7),
            decoration: BoxDecoration(
              color: codeBg,
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: codeBorder),
            ),
            child: Row(
              children: [
                Icon(Icons.vpn_key_rounded, color: isDark ? const Color(0xFF93C5FD) : const Color(0xFF1D4ED8), size: 14),
                const SizedBox(width: 6),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Code for payment note',
                        style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: textMuted),
                      ),
                      Text(
                        transactionCode,
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          fontSize: 15,
                          letterSpacing: 1,
                          color: isDark ? const Color(0xFF93C5FD) : const Color(0xFF1D4ED8),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Text('Payment proof', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: textMuted)),
          const SizedBox(height: 4),
          GestureDetector(
            onTap: onScreenshotTap,
            child: Container(
              width: double.infinity,
              constraints: const BoxConstraints(minHeight: 64, maxHeight: 96),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF0F172A) : Colors.white,
                borderRadius: BorderRadius.circular(7),
                border: Border.all(color: isDark ? Colors.white24 : const Color(0xFFCBD5E1)),
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(6),
                child: NgmyPaymentProofImage(path: screenshotPath),
              ),
            ),
          ),
          if (showActions && pending) ...[
            const SizedBox(height: 8),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(Icons.info_outline_rounded, size: 14, color: isDark ? Colors.orange.shade300 : const Color(0xFFD97706)),
                const SizedBox(width: 5),
                Expanded(
                  child: Text(
                    'Review proof, then confirm or reject.',
                    style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w700, color: isDark ? Colors.orange.shade200 : const Color(0xFFB45309), height: 1.3),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                Expanded(
                  child: _actionBtn(
                    label: 'Confirm',
                    icon: Icons.check_rounded,
                    colors: const [Color(0xFF16A34A), Color(0xFF22C55E)],
                    onTap: busy ? null : onConfirm,
                    compact: true,
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: _actionBtn(
                    label: 'Reject',
                    icon: Icons.close_rounded,
                    colors: const [Color(0xFFDC2626), Color(0xFFEF4444)],
                    onTap: busy ? null : onReject,
                    compact: true,
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }

  Widget _compactDetail(String label, String value, Color primary, Color muted, {int maxLines = 1}) {
    return RichText(
      maxLines: maxLines,
      overflow: TextOverflow.ellipsis,
      text: TextSpan(
        style: TextStyle(fontSize: 10.5, color: primary, height: 1.3),
        children: [
          TextSpan(text: '$label: ', style: TextStyle(fontWeight: FontWeight.w800, color: muted)),
          TextSpan(text: value.isEmpty ? '—' : value, style: const TextStyle(fontWeight: FontWeight.w600)),
        ],
      ),
    );
  }

  Widget _actionBtn({
    required String label,
    required IconData icon,
    required List<Color> colors,
    required VoidCallback? onTap,
    bool compact = false,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Ink(
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors),
            borderRadius: BorderRadius.circular(20),
          ),
          padding: EdgeInsets.symmetric(vertical: compact ? 8 : 12),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, color: Colors.white, size: compact ? 16 : 20),
              const SizedBox(width: 4),
              Text(label, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: compact ? 12 : 14)),
            ],
          ),
        ),
      ),
    );
  }
}

/// Payment decision / status note shown to buyer (and seller after action).
class NgmyPurchaseStatusCard extends StatelessWidget {
  const NgmyPurchaseStatusCard({
    super.key,
    required this.status,
    required this.headline,
    this.productName,
    this.paymentMethod,
    this.amount,
    this.transactionCode,
    this.subtitle,
  });

  final String status;
  final String headline;
  final String? productName;
  final String? paymentMethod;
  final double? amount;
  final String? transactionCode;
  final String? subtitle;

  factory NgmyPurchaseStatusCard.fromStoreReply(
    Map<String, dynamic> reply, {
    Map<String, dynamic>? order,
  }) {
    final status = NgmyStorePaymentReply.paymentStatusOf(reply);
    final product = (reply['product'] ?? reply['listingTitle'] ?? order?['title'] ?? '').toString().trim();
    final methodRaw = (reply['paymentMethod'] ?? order?['paidVia'] ?? '').toString();
    final method = methodRaw.contains('CASH') || methodRaw.length <= 6
        ? ngmyStorePaymentMethodLabel(methodRaw.toLowerCase())
        : methodRaw;
    final amount = (reply['amount'] as num?)?.toDouble() ??
        (order?['total'] as num?)?.toDouble() ??
        (((order?['price'] as num?) ?? 0).toDouble() + ((order?['deliveryFee'] as num?) ?? 0).toDouble());
    final code = (reply['transactionCode'] ?? order?['paymentVerificationCode'] ?? '').toString();
    final headline = (reply['message'] ?? '').toString().trim();

    String defaultHeadline;
    String? sub;
    switch (status) {
      case 'approved':
        defaultHeadline = 'Payment approved';
        sub = 'Your order is confirmed. Track shipping in Purchases.';
        break;
      case 'rejected':
        defaultHeadline = 'Payment rejected';
        sub = 'The seller could not verify your payment proof.';
        break;
      case 'awaiting_proof':
        defaultHeadline = 'Payment proof sent';
        sub = 'Waiting for the seller to review in Messages.';
        break;
      default:
        defaultHeadline = headline.isNotEmpty ? headline : 'Order update';
        final replySub = (reply['subtitle'] ?? '').toString().trim();
        sub = replySub.isEmpty ? null : replySub;
    }

    return NgmyPurchaseStatusCard(
      status: status,
      headline: defaultHeadline,
      productName: product.isEmpty ? null : product,
      paymentMethod: method.isEmpty ? null : method,
      amount: amount > 0 ? amount : null,
      transactionCode: code.isEmpty ? null : code,
      subtitle: sub ?? (headline.isNotEmpty ? headline : null),
    );
  }

  factory NgmyPurchaseStatusCard.shipping({
    required String headline,
    String? productName,
    String? subtitle,
  }) {
    return NgmyPurchaseStatusCard(
      status: 'shipped',
      headline: headline,
      productName: productName,
      subtitle: subtitle,
    );
  }

  factory NgmyPurchaseStatusCard.delivered({String? productName}) {
    return NgmyPurchaseStatusCard(
      status: 'delivered',
      headline: 'Order delivered',
      productName: productName,
      subtitle: 'Please confirm you received the item in Purchases.',
    );
  }

  _StatusPalette _palette(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    switch (status) {
      case 'approved':
        return _StatusPalette(
          accent: const Color(0xFF16A34A),
          accentSoft: isDark ? const Color(0xFF14532D) : const Color(0xFFDCFCE7),
          border: isDark ? const Color(0xFF22C55E) : const Color(0xFF86EFAC),
          surface: isDark ? const Color(0xFF152218) : const Color(0xFFF0FDF4),
          icon: Icons.verified_rounded,
        );
      case 'rejected':
        return _StatusPalette(
          accent: const Color(0xFFDC2626),
          accentSoft: isDark ? const Color(0xFF450A0A) : const Color(0xFFFEE2E2),
          border: isDark ? const Color(0xFFF87171) : const Color(0xFFFECACA),
          surface: isDark ? const Color(0xFF221418) : const Color(0xFFFFF5F5),
          icon: Icons.cancel_rounded,
        );
      case 'awaiting_proof':
        return _StatusPalette(
          accent: const Color(0xFFD97706),
          accentSoft: isDark ? const Color(0xFF422006) : const Color(0xFFFFEDD5),
          border: isDark ? const Color(0xFFFBBF24) : const Color(0xFFFCD34D),
          surface: isDark ? const Color(0xFF221C10) : const Color(0xFFFFFBEB),
          icon: Icons.hourglass_top_rounded,
        );
      case 'shipped':
        return _StatusPalette(
          accent: const Color(0xFF7C3AED),
          accentSoft: isDark ? const Color(0xFF2E1065) : const Color(0xFFEDE9FE),
          border: isDark ? const Color(0xFFA78BFA) : const Color(0xFFC4B5FD),
          surface: isDark ? const Color(0xFF1C1830) : const Color(0xFFF5F3FF),
          icon: Icons.local_shipping_outlined,
        );
      case 'delivered':
        return _StatusPalette(
          accent: const Color(0xFF059669),
          accentSoft: isDark ? const Color(0xFF064E3B) : const Color(0xFFD1FAE5),
          border: isDark ? const Color(0xFF34D399) : const Color(0xFF6EE7B7),
          surface: isDark ? const Color(0xFF14221E) : const Color(0xFFECFDF5),
          icon: Icons.check_circle_rounded,
        );
      default:
        return _StatusPalette(
          accent: const Color(0xFF2563EB),
          accentSoft: isDark ? const Color(0xFF1E3A5F) : const Color(0xFFEFF6FF),
          border: isDark ? const Color(0xFF60A5FA) : const Color(0xFF93C5FD),
          surface: isDark ? const Color(0xFF1A2030) : const Color(0xFFF8FAFC),
          icon: Icons.info_outline_rounded,
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    final p = _palette(context);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final textPrimary = isDark ? Colors.white : const Color(0xFF0F172A);
    final textMuted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(11),
      decoration: BoxDecoration(
        color: p.surface,
        borderRadius: BorderRadius.circular(11),
        border: Border.all(color: p.border, width: 1.4),
        boxShadow: [
          BoxShadow(
            color: p.accent.withValues(alpha: isDark ? 0.12 : 0.08),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 30,
                height: 30,
                decoration: BoxDecoration(
                  color: p.accentSoft,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(p.icon, color: p.accent, size: 18),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      headline,
                      style: TextStyle(fontSize: 13, fontWeight: FontWeight.w900, color: textPrimary, height: 1.2),
                    ),
                    if (subtitle != null && subtitle!.isNotEmpty) ...[
                      const SizedBox(height: 3),
                      Text(
                        subtitle!,
                        style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w600, color: textMuted, height: 1.35),
                      ),
                    ],
                  ],
                ),
              ),
            ],
          ),
          if (productName != null || paymentMethod != null || amount != null || transactionCode != null) ...[
            const SizedBox(height: 9),
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 8),
              decoration: BoxDecoration(
                color: isDark ? Colors.black26 : Colors.white.withValues(alpha: 0.85),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: p.border.withValues(alpha: 0.55)),
              ),
              child: Column(
                children: [
                  if (productName != null && productName!.isNotEmpty)
                    _infoRow(Icons.inventory_2_outlined, 'Product', productName!, textPrimary, textMuted),
                  if (paymentMethod != null && paymentMethod!.isNotEmpty) ...[
                    if (productName != null && productName!.isNotEmpty) const SizedBox(height: 5),
                    _infoRow(Icons.payments_outlined, 'Paid via', paymentMethod!, textPrimary, textMuted),
                  ],
                  if (amount != null && amount! > 0) ...[
                    const SizedBox(height: 5),
                    _infoRow(Icons.attach_money_rounded, 'Total', _formatStoreMoney(amount), textPrimary, textMuted),
                  ],
                  if (transactionCode != null && transactionCode!.isNotEmpty) ...[
                    const SizedBox(height: 5),
                    _infoRow(Icons.tag_rounded, 'Ref code', transactionCode!, textPrimary, textMuted),
                  ],
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _infoRow(IconData icon, String label, String value, Color primary, Color muted) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 13, color: muted),
        const SizedBox(width: 5),
        Expanded(
          child: RichText(
            text: TextSpan(
              style: TextStyle(fontSize: 10.5, color: primary, height: 1.3),
              children: [
                TextSpan(text: '$label  ', style: TextStyle(fontWeight: FontWeight.w700, color: muted, fontSize: 9.5)),
                TextSpan(text: value, style: const TextStyle(fontWeight: FontWeight.w800)),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _StatusPalette {
  const _StatusPalette({
    required this.accent,
    required this.accentSoft,
    required this.border,
    required this.surface,
    required this.icon,
  });

  final Color accent;
  final Color accentSoft;
  final Color border;
  final Color surface;
  final IconData icon;
}

class _NgmyPaymentProofCache {
  static final _bytes = <String, Uint8List>{};
  static const _maxEntries = 32;

  static Uint8List? get(String key) => _bytes[key];

  static void put(String key, Uint8List value) {
    if (!_bytes.containsKey(key) && _bytes.length >= _maxEntries) {
      _bytes.remove(_bytes.keys.first);
    }
    _bytes[key] = value;
  }
}

class NgmyPaymentProofImage extends StatefulWidget {
  const NgmyPaymentProofImage({super.key, this.path});

  final String? path;

  @override
  State<NgmyPaymentProofImage> createState() => _NgmyPaymentProofImageState();
}

class _NgmyPaymentProofImageState extends State<NgmyPaymentProofImage> {
  Uint8List? _memoryBytes;
  String? _resolvedPath;

  @override
  void initState() {
    super.initState();
    _resolveBytes();
  }

  @override
  void didUpdateWidget(NgmyPaymentProofImage oldWidget) {
    super.didUpdateWidget(oldWidget);
    final next = widget.path?.trim() ?? '';
    final prev = oldWidget.path?.trim() ?? '';
    if (next != prev) _resolveBytes();
  }

  void _resolveBytes() {
    final p = widget.path?.trim() ?? '';
    if (p.isEmpty) {
      if (_resolvedPath != null || _memoryBytes != null) {
        setState(() {
          _resolvedPath = null;
          _memoryBytes = null;
        });
      }
      return;
    }
    if (p == _resolvedPath) return;
    if (p.startsWith('data:image')) {
      final cached = _NgmyPaymentProofCache.get(p);
      if (cached != null) {
        setState(() {
          _memoryBytes = cached;
          _resolvedPath = p;
        });
        return;
      }
      try {
        final comma = p.indexOf(',');
        if (comma > 0) {
          final bytes = base64Decode(p.substring(comma + 1));
          _NgmyPaymentProofCache.put(p, bytes);
          setState(() {
            _memoryBytes = bytes;
            _resolvedPath = p;
          });
          return;
        }
      } catch (_) {}
    }
    setState(() {
      _memoryBytes = null;
      _resolvedPath = p;
    });
  }

  @override
  Widget build(BuildContext context) {
    final p = _resolvedPath ?? widget.path?.trim() ?? '';
    if (p.isEmpty) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(10),
          child: Text(
            'No screenshot',
            style: TextStyle(
              color: Theme.of(context).brightness == Brightness.dark ? Colors.white38 : Colors.grey,
              fontSize: 10,
            ),
          ),
        ),
      );
    }
    if (_memoryBytes != null) {
      return RepaintBoundary(
        child: Image.memory(
          _memoryBytes!,
          key: ValueKey('proof_mem_$p'),
          fit: BoxFit.contain,
          gaplessPlayback: true,
          filterQuality: FilterQuality.medium,
        ),
      );
    }
    if (p.startsWith('http://') || p.startsWith('https://')) {
      return RepaintBoundary(
        child: Image.network(
          p,
          key: ValueKey('proof_net_$p'),
          fit: BoxFit.contain,
          gaplessPlayback: true,
          errorBuilder: (_, __, ___) => const _Err(),
        ),
      );
    }
    if (!kIsWeb) {
      return RepaintBoundary(
        child: Image.file(
          File(p),
          key: ValueKey('proof_file_$p'),
          fit: BoxFit.contain,
          gaplessPlayback: true,
          errorBuilder: (_, __, ___) => const _Err(),
        ),
      );
    }
    return const _Err();
  }
}

class _Err extends StatelessWidget {
  const _Err();

  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Unable to load screenshot', style: TextStyle(color: Colors.grey, fontSize: 10)));
  }
}

/// Full-screen payment proof with pinch / scroll zoom (admin deposit review).
void showNgmyPaymentProofFullscreen(BuildContext context, String path) {
  final p = path.trim();
  if (p.isEmpty) return;
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (ctx) => _NgmyFullscreenPaymentProofPage(path: p),
    ),
  );
}

class _NgmyFullscreenPaymentProofPage extends StatefulWidget {
  const _NgmyFullscreenPaymentProofPage({required this.path});

  final String path;

  @override
  State<_NgmyFullscreenPaymentProofPage> createState() => _NgmyFullscreenPaymentProofPageState();
}

class _NgmyFullscreenPaymentProofPageState extends State<_NgmyFullscreenPaymentProofPage> {
  final TransformationController _transform = TransformationController();

  void _zoomBy(double factor) {
    final m = Matrix4.copy(_transform.value);
    m.scale(factor);
    _transform.value = m;
  }

  void _resetZoom() {
    _transform.value = Matrix4.identity();
  }

  @override
  void dispose() {
    _transform.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        title: const Text('Payment proof', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 16)),
        leading: IconButton(
          icon: const Icon(Icons.close_rounded),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          IconButton(
            tooltip: 'Zoom out',
            icon: const Icon(Icons.zoom_out_rounded),
            onPressed: () => _zoomBy(0.85),
          ),
          IconButton(
            tooltip: 'Reset zoom',
            icon: const Icon(Icons.fit_screen_rounded),
            onPressed: _resetZoom,
          ),
          IconButton(
            tooltip: 'Zoom in',
            icon: const Icon(Icons.zoom_in_rounded),
            onPressed: () => _zoomBy(1.18),
          ),
        ],
      ),
      body: InteractiveViewer(
        transformationController: _transform,
        minScale: 0.4,
        maxScale: 8.0,
        panEnabled: true,
        scaleEnabled: true,
        child: Center(
          child: NgmyPaymentProofImage(path: widget.path),
        ),
      ),
    );
  }
}
