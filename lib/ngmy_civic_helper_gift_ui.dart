import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_civic_helper_gifts.dart';
import 'ngmy_nav.dart';

/// Admin sheet: pick a beautiful present style, name, amount, and store address, then grant.
Future<NgmyHelperGift?> showNgmyHelperGiftGrantSheet({
  required BuildContext context,
  required NgmyHelperGiftPending pending,
  required List<Map<String, dynamic>> storeListings,
  required Future<NgmyHelperGift?> Function({
    required String giftName,
    required double amount,
    required String styleId,
    required String storeAddress,
    required String storeSellerEmail,
    required String storeSellerName,
    required String storeListingId,
  }) onGrant,
}) async {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  final nameC = TextEditingController(text: 'First Helper Reward');
  final amountC = TextEditingController(text: '25');
  var styleId = kNgmyHelperGiftStyles.first.id;
  String? selectedListingId;

  final storeOptions = <Map<String, dynamic>>[];
  final seen = <String>{};
  for (final l in storeListings) {
    final addr = (l['location'] ?? l['address'] ?? '').toString().trim();
    final seller = (l['sellerEmail'] ?? '').toString().toLowerCase().trim();
    final title = (l['title'] ?? l['name'] ?? 'Store').toString();
    if (addr.isEmpty && seller.isEmpty) continue;
    final key = '$seller|$addr';
    if (!seen.add(key)) continue;
    storeOptions.add({
      'id': (l['id'] ?? key).toString(),
      'title': title,
      'address': addr.isEmpty ? 'Address on file with seller' : addr,
      'sellerEmail': seller,
      'sellerName': (l['sellerName'] ?? seller).toString(),
    });
  }

  return showModalBottomSheet<NgmyHelperGift>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setST) {
          final bg = isDark ? const Color(0xFF0B1220) : Colors.white;
          final style = ngmyHelperGiftStyleById(styleId);
          return Container(
            constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.92),
            margin: const EdgeInsets.fromLTRB(10, 40, 10, 10),
            padding: EdgeInsets.fromLTRB(16, 14, 16, 16 + MediaQuery.of(ctx).viewInsets.bottom),
            decoration: BoxDecoration(
              color: bg,
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
            ),
            child: ListView(
              children: [
                Row(
                  children: [
                    Text(style.emoji, style: const TextStyle(fontSize: 28)),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Grant a Present',
                            style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                          ),
                          Text(
                            '${pending.fullName} · 3 first-helps in a row',
                            style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                          ),
                        ],
                      ),
                    ),
                    IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close)),
                  ],
                ),
                const SizedBox(height: 10),
                _infoChip(isDark, 'Name', pending.fullName),
                _infoChip(isDark, 'ID', pending.registryId.isEmpty ? '—' : pending.registryId),
                _infoChip(isDark, 'Email', pending.email),
                _infoChip(isDark, 'Phone', pending.phone.isEmpty ? '—' : pending.phone),
                _infoChip(isDark, 'Location', [pending.city, pending.state].where((s) => s.trim().isNotEmpty).join(', ')),
                const SizedBox(height: 14),
                Text('PRESENT STYLE', style: TextStyle(fontSize: 10, letterSpacing: 1.4, fontWeight: FontWeight.w900, color: isDark ? Colors.white54 : Colors.black45)),
                const SizedBox(height: 8),
                SizedBox(
                  height: 108,
                  child: ListView.separated(
                    scrollDirection: Axis.horizontal,
                    itemCount: kNgmyHelperGiftStyles.length,
                    separatorBuilder: (_, __) => const SizedBox(width: 8),
                    itemBuilder: (_, i) {
                      final s = kNgmyHelperGiftStyles[i];
                      final selected = s.id == styleId;
                      return GestureDetector(
                        onTap: () => setST(() => styleId = s.id),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 220),
                          width: 96,
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(16),
                            gradient: LinearGradient(colors: [s.accent, s.accent2]),
                            border: Border.all(color: selected ? Colors.white : Colors.transparent, width: 2.5),
                            boxShadow: selected
                                ? [BoxShadow(color: s.accent.withValues(alpha: 0.45), blurRadius: 12, offset: const Offset(0, 4))]
                                : null,
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(s.emoji, style: const TextStyle(fontSize: 28)),
                              const SizedBox(height: 6),
                              Text(s.label, textAlign: TextAlign.center, maxLines: 2, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),
                const SizedBox(height: 14),
                TextField(
                  controller: nameC,
                  decoration: InputDecoration(
                    labelText: 'Money card name',
                    hintText: 'e.g. Grocery money card',
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                ),
                const SizedBox(height: 10),
                TextField(
                  controller: amountC,
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  decoration: InputDecoration(
                    labelText: 'Money on the card (\$)',
                    hintText: 'Amount the store will see',
                    prefixText: '\$ ',
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                ),
                const SizedBox(height: 12),
                Text('REDEEM AT NGMY STORE', style: TextStyle(fontSize: 10, letterSpacing: 1.4, fontWeight: FontWeight.w900, color: isDark ? Colors.white54 : Colors.black45)),
                const SizedBox(height: 6),
                Text(
                  'This sends a money card with a QR. Pick the one NGMY store that can scan it. Other stores cannot redeem it.',
                  style: TextStyle(fontSize: 11, height: 1.35, color: isDark ? Colors.white60 : Colors.black54),
                ),
                const SizedBox(height: 8),
                if (storeOptions.isEmpty)
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.orange.withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.orange.withValues(alpha: 0.4)),
                    ),
                    child: const Text(
                      'No store listings with an address yet. Ask a store seller to publish a listing with their location, then come back.',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600),
                    ),
                  )
                else
                  ...storeOptions.map((opt) {
                    final selected = selectedListingId == opt['id'];
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Material(
                        color: selected ? style.accent.withValues(alpha: 0.14) : (isDark ? Colors.white.withValues(alpha: 0.04) : const Color(0xFFF8FAFC)),
                        borderRadius: BorderRadius.circular(12),
                        child: InkWell(
                          borderRadius: BorderRadius.circular(12),
                          onTap: () => setST(() => selectedListingId = opt['id'] as String),
                          child: Padding(
                            padding: const EdgeInsets.all(12),
                            child: Row(
                              children: [
                                Icon(selected ? Icons.radio_button_checked : Icons.radio_button_off, color: style.accent),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(opt['title'] as String, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                                      Text(opt['address'] as String, style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54)),
                                      Text(opt['sellerName'] as String, style: TextStyle(fontSize: 10, color: isDark ? Colors.white38 : Colors.black38)),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    );
                  }),
                const SizedBox(height: 12),
                FilledButton.icon(
                  onPressed: storeOptions.isEmpty
                      ? null
                      : () async {
                          final amount = double.tryParse(amountC.text.trim()) ?? 0;
                          final name = nameC.text.trim();
                          Map<String, dynamic>? opt;
                          for (final o in storeOptions) {
                            if (o['id'] == selectedListingId) opt = o;
                          }
                          final seller = (opt?['sellerEmail'] ?? '').toString().trim();
                          if (name.isEmpty || amount <= 0 || opt == null || seller.isEmpty) {
                            ScaffoldMessenger.of(ctx).showSnackBar(
                              const SnackBar(content: Text('Enter the card name, the amount, and the NGMY store that can spend it.')),
                            );
                            return;
                          }
                          final gift = await onGrant(
                            giftName: name,
                            amount: amount,
                            styleId: styleId,
                            storeAddress: opt['address'] as String,
                            storeSellerEmail: opt['sellerEmail'] as String,
                            storeSellerName: opt['sellerName'] as String,
                            storeListingId: opt['id'] as String,
                          );
                          if (gift != null && ctx.mounted) {
                            Navigator.pop(ctx, gift);
                          } else if (ctx.mounted) {
                            ScaffoldMessenger.of(ctx).showSnackBar(
                              const SnackBar(
                                content: Text('Money card was not sent. The server did not confirm the gift — try again.'),
                                backgroundColor: Colors.orange,
                              ),
                            );
                          }
                        },
                  style: FilledButton.styleFrom(
                    backgroundColor: style.accent,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  icon: const Icon(Icons.send_rounded),
                  label: const Text('Send money card', style: TextStyle(fontWeight: FontWeight.w900)),
                ),
              ],
            ),
          );
        },
      );
    },
  );
}

Widget _infoChip(bool isDark, String label, String value) {
  return Padding(
    padding: const EdgeInsets.only(bottom: 4),
    child: Row(
      children: [
        SizedBox(width: 72, child: Text(label, style: TextStyle(fontSize: 11, color: isDark ? Colors.white38 : Colors.black45))),
        Expanded(child: Text(value, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: isDark ? Colors.white : const Color(0xFF0F172A)))),
      ],
    ),
  );
}

/// User-facing gift card with QR for store redeem.
Future<void> showNgmyHelperGiftReceivedDialog(BuildContext context, NgmyHelperGift gift) async {
  final style = ngmyHelperGiftStyleById(gift.styleId);
  final isDark = Theme.of(context).brightness == Brightness.dark;
  await showDialog<void>(
    context: context,
    builder: (ctx) => Dialog(
      backgroundColor: Colors.transparent,
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24),
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [style.accent, style.accent2]),
          boxShadow: [BoxShadow(color: style.accent.withValues(alpha: 0.4), blurRadius: 24, offset: const Offset(0, 10))],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(style.emoji, style: const TextStyle(fontSize: 44)),
            const SizedBox(height: 6),
            const Text('You received a present!', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
            const SizedBox(height: 4),
            Text(gift.giftName, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.95), fontWeight: FontWeight.w700, fontSize: 15)),
            const SizedBox(height: 4),
            Text('\$${gift.amount.toStringAsFixed(2)} money card', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26)),
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
              child: QrImageView(data: gift.qrPayload, size: 180, backgroundColor: Colors.white),
            ),
            const SizedBox(height: 10),
            Text(
              'Only this store can scan this card:\n${gift.storeAddress}',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.95), fontSize: 12, height: 1.35, fontWeight: FontWeight.w600),
            ),
            if (gift.storeSellerName.isNotEmpty)
              Text('Store: ${gift.storeSellerName}', style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 11)),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: TextButton(
                    onPressed: () async {
                      await Clipboard.setData(ClipboardData(text: gift.qrPayload));
                      if (ctx.mounted) {
                        ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Gift code copied')));
                      }
                    },
                    style: TextButton.styleFrom(foregroundColor: Colors.white),
                    child: const Text('Copy code'),
                  ),
                ),
                Expanded(
                  child: FilledButton(
                    onPressed: () => Navigator.pop(ctx),
                    style: FilledButton.styleFrom(backgroundColor: Colors.white, foregroundColor: style.accent2),
                    child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w900)),
                  ),
                ),
              ],
            ),
            if (isDark) const SizedBox.shrink(),
          ],
        ),
      ),
    ),
  );
}

Future<String?> _scanHelperGiftQr(BuildContext context) {
  if (!barcode_platform.ngmyBarcodeUseCamera) return Future.value(null);
  return NgmyNavigator.push<String>(
    context,
    const _NgmyHelperGiftScanPage(),
    routeName: 'NgmyHelperGiftScan',
    fullscreenDialog: true,
  );
}

class _NgmyHelperGiftScanPage extends StatefulWidget {
  const _NgmyHelperGiftScanPage();

  @override
  State<_NgmyHelperGiftScanPage> createState() => _NgmyHelperGiftScanPageState();
}

class _NgmyHelperGiftScanPageState extends State<_NgmyHelperGiftScanPage> {
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.noDuplicates,
    facing: CameraFacing.back,
    formats: const [BarcodeFormat.qrCode],
  );
  bool _handled = false;

  @override
  void dispose() {
    _camera.dispose();
    super.dispose();
  }

  void _accept(String raw) {
    if (_handled || !mounted) return;
    final token = NgmyCivicHelperGifts.parseTokenFromPayload(raw);
    if (token == null) return;
    _handled = true;
    NgmyNavigator.pop(context, raw.trim());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: const Color(0xFF0B1220),
        foregroundColor: Colors.white,
        title: const Text('Scan gift QR'),
      ),
      body: Stack(
        fit: StackFit.expand,
        children: [
          MobileScanner(
            controller: _camera,
            onDetect: (capture) {
              for (final barcode in capture.barcodes) {
                final raw = (barcode.rawValue ?? barcode.displayValue ?? '').trim();
                if (raw.isEmpty) continue;
                _accept(raw);
                return;
              }
            },
          ),
          Center(
            child: Container(
              width: 240,
              height: 240,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: const Color(0xFFEC4899), width: 3),
              ),
            ),
          ),
          const Positioned(
            left: 24,
            right: 24,
            bottom: 36,
            child: Text(
              'Point the camera at the member’s money-card QR.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
            ),
          ),
        ],
      ),
    );
  }
}

/// Store owner redeem sheet — scan the helper gift QR and honor the amount.
Future<void> showNgmyHelperGiftStoreRedeemSheet({
  required BuildContext context,
  required dynamic config,
  required String storeOwnerEmail,
  required String storeOwnerName,
  required VoidCallback onDataChanged,
}) async {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  final codeC = TextEditingController();
  NgmyHelperGift? peeked;
  String? message;
  var busy = false;

  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setST) {
          final bg = isDark ? const Color(0xFF0B1220) : Colors.white;
          return Container(
            margin: const EdgeInsets.fromLTRB(12, 60, 12, 12),
            padding: EdgeInsets.fromLTRB(16, 16, 16, 16 + MediaQuery.of(ctx).viewInsets.bottom),
            decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(22)),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text('Scan money card', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                const SizedBox(height: 6),
                Text(
                  'Scan the member’s QR. You only see the amount if the admin chose your store.',
                  style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                ),
                const SizedBox(height: 12),
                if (barcode_platform.ngmyBarcodeUseCamera)
                  FilledButton.icon(
                    onPressed: busy
                        ? null
                        : () async {
                            final raw = await _scanHelperGiftQr(ctx);
                            if (raw == null || raw.trim().isEmpty) return;
                            codeC.text = raw.trim();
                            setST(() => busy = true);
                            final token = NgmyCivicHelperGifts.parseTokenFromPayload(codeC.text) ?? codeC.text.trim();
                            final g = await NgmyCivicHelperGifts.loadGiftByToken(token, config: config);
                            setST(() {
                              busy = false;
                              peeked = g;
                              message = g == null ? 'Gift not found.' : null;
                            });
                          },
                    style: FilledButton.styleFrom(
                      backgroundColor: const Color(0xFFEC4899),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    icon: const Icon(Icons.qr_code_2_rounded),
                    label: const Text('Scan QR code', style: TextStyle(fontWeight: FontWeight.w900)),
                  ),
                if (barcode_platform.ngmyBarcodeUseCamera) const SizedBox(height: 10),
                TextField(
                  controller: codeC,
                  decoration: InputDecoration(
                    labelText: 'Gift QR / code',
                    hintText: 'NGMYHELPERGIFT1|…',
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  onChanged: (_) => setST(() {
                    peeked = null;
                    message = null;
                  }),
                ),
                const SizedBox(height: 10),
                if (peeked != null) ...[
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      color: const Color(0xFF059669).withValues(alpha: 0.12),
                      border: Border.all(color: const Color(0xFF059669).withValues(alpha: 0.4)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(peeked!.giftName, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                        Text('\$${peeked!.amount.toStringAsFixed(2)} on this card', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 22, color: Color(0xFF059669))),
                        Text('For: ${peeked!.fullName}', style: TextStyle(fontSize: 12, color: isDark ? Colors.white70 : Colors.black54)),
                        if (peeked!.redeemed) const Text('Already redeemed', style: TextStyle(color: Colors.red, fontWeight: FontWeight.w800)),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),
                ],
                if (message != null) ...[
                  Text(message!, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: isDark ? Colors.amber : const Color(0xFFB45309))),
                  const SizedBox(height: 8),
                ],
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: busy
                            ? null
                            : () async {
                                setST(() => busy = true);
                                final token = NgmyCivicHelperGifts.parseTokenFromPayload(codeC.text) ?? codeC.text.trim();
                                final g = await NgmyCivicHelperGifts.loadGiftByToken(token, config: config);
                                setST(() {
                                  busy = false;
                                  peeked = g;
                                  message = g == null ? 'Gift not found.' : null;
                                });
                              },
                        child: const Text('Look up'),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: FilledButton(
                        onPressed: busy
                            ? null
                            : () async {
                                setST(() => busy = true);
                                final result = await NgmyCivicHelperGifts.redeemAtStore(
                                  config: config,
                                  qrOrToken: codeC.text,
                                  storeOwnerEmail: storeOwnerEmail,
                                  storeOwnerName: storeOwnerName,
                                );
                                setST(() {
                                  busy = false;
                                  peeked = result.gift;
                                  message = result.message;
                                });
                                if (result.ok) {
                                  onDataChanged();
                                  if (ctx.mounted) {
                                    ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(content: Text(result.message)));
                                  }
                                }
                              },
                        child: const Text('Redeem'),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          );
        },
      );
    },
  );
}

/// Compact banner for admin dashboard when helpers earn a 3-streak reward.
class NgmyHelperGiftAdminBanner extends StatelessWidget {
  const NgmyHelperGiftAdminBanner({
    super.key,
    required this.pendingCount,
    required this.onOpen,
  });

  final int pendingCount;
  final VoidCallback onOpen;

  @override
  Widget build(BuildContext context) {
    if (pendingCount <= 0) return const SizedBox.shrink();
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onOpen,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          width: double.infinity,
          margin: const EdgeInsets.only(bottom: 12),
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            gradient: const LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFF8B5CF6)]),
            boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.3), blurRadius: 12, offset: const Offset(0, 4))],
          ),
          child: Row(
            children: [
              const Text('🎁', style: TextStyle(fontSize: 28)),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      pendingCount == 1 ? 'Helper earned a present!' : '$pendingCount helpers earned presents!',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15),
                    ),
                    const Text(
                      'First helper 3 times in a row — tap to send a money card',
                      style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w600),
                    ),
                  ],
                ),
              ),
              const Icon(Icons.chevron_right_rounded, color: Colors.white),
            ],
          ),
        ),
      ),
    );
  }
}
