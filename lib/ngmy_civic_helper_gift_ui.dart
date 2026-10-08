import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_civic_helper_gifts.dart';
import 'ngmy_nav.dart';

/// NGMY **stores** only (one row per seller), not individual product listings.
List<Map<String, dynamic>> ngmyHelperGiftStoreOptions(List<Map<String, dynamic>> storeListings) {
  final bySeller = <String, Map<String, dynamic>>{};
  for (final l in storeListings) {
    final seller = (l['sellerEmail'] ?? '').toString().toLowerCase().trim();
    if (seller.isEmpty) continue;
    final storeName = [
      l['storeName'],
      l['shopName'],
      l['businessName'],
      l['sellerName'],
      l['sellerDisplayName'],
    ].map((e) => e.toString().trim()).firstWhere((s) => s.isNotEmpty, orElse: () => '');
    final display = storeName.isNotEmpty ? storeName : seller.split('@').first;
    final addr = (l['storeAddress'] ?? l['location'] ?? l['address'] ?? '').toString().trim();
    final existing = bySeller[seller];
    if (existing != null) {
      if ((existing['address'] as String).isEmpty && addr.isNotEmpty) {
        existing['address'] = addr;
      }
      continue;
    }
    bySeller[seller] = {
      'id': 'store_$seller',
      'title': display,
      'address': addr.isEmpty ? 'Store location on file' : addr,
      'sellerEmail': seller,
      'sellerName': (l['sellerName'] ?? display).toString(),
    };
  }
  final out = bySeller.values.toList()
    ..sort((a, b) => (a['title'] as String).compareTo(b['title'] as String));
  return out;
}

/// Admin hub: pending helpers + popup notification toggle.
Future<void> showNgmyHelperGiftPendingHub({
  required BuildContext context,
  required dynamic config,
  required List<Map<String, dynamic>> storeListings,
  required String adminEmail,
  required Future<NgmyHelperGift?> Function({
    required NgmyHelperGiftPending pending,
    required String giftName,
    required double amount,
    required String styleId,
    required String storeAddress,
    required String storeSellerEmail,
    required String storeSellerName,
    required String storeListingId,
  }) onGrant,
  VoidCallback? onChanged,
}) async {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  var popupEnabled = await NgmyHelperGiftAdminPopupSettings.isEnabled();
  if (!context.mounted) return;

  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setST) {
          final open = NgmyCivicHelperGifts.openPending(config);
          final bg = isDark ? const Color(0xFF0B1220) : Colors.white;
          return Container(
            constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.92),
            margin: const EdgeInsets.fromLTRB(8, 36, 8, 8),
            decoration: BoxDecoration(
              color: bg,
              borderRadius: BorderRadius.circular(28),
              border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
            ),
            child: Column(
              children: [
                const SizedBox(height: 10),
                Container(width: 40, height: 4, decoration: BoxDecoration(color: isDark ? Colors.white24 : Colors.black12, borderRadius: BorderRadius.circular(2))),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 14, 8, 8),
                  child: Row(
                    children: [
                      const Text('🎁', style: TextStyle(fontSize: 30)),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Helper presents',
                              style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                            ),
                            Text(
                              'First helper 3 campaigns in a row',
                              style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                            ),
                          ],
                        ),
                      ),
                      IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close_rounded)),
                    ],
                  ),
                ),
                SwitchListTile(
                  title: Text('Reward pop-ups', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                  subtitle: Text(
                    popupEnabled
                        ? 'Full-screen alerts when you open the app (10s each, by state).'
                        : 'Pop-ups off — pending rewards stay listed here.',
                    style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54),
                  ),
                  value: popupEnabled,
                  activeColor: const Color(0xFFEC4899),
                  onChanged: (v) async {
                    await NgmyHelperGiftAdminPopupSettings.setEnabled(v);
                    setST(() => popupEnabled = v);
                  },
                ),
                const Divider(height: 1),
                Expanded(
                  child: open.isEmpty
                      ? Center(
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Text(
                              'No pending helper rewards right now.',
                              textAlign: TextAlign.center,
                              style: TextStyle(color: isDark ? Colors.white54 : Colors.black45),
                            ),
                          ),
                        )
                      : ListView.separated(
                          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                          itemCount: open.length,
                          separatorBuilder: (_, __) => const SizedBox(height: 10),
                          itemBuilder: (_, i) {
                            final p = open[i];
                            final colors = ngmyHelperGiftStateGradient(p.state);
                            return Material(
                              elevation: 0,
                              color: isDark ? Colors.white.withValues(alpha: 0.05) : const Color(0xFFF8FAFC),
                              borderRadius: BorderRadius.circular(18),
                              child: InkWell(
                                borderRadius: BorderRadius.circular(18),
                                onTap: () async {
                                  Navigator.pop(ctx);
                                  final gift = await showNgmyHelperGiftGrantSheet(
                                    context: context,
                                    pending: p,
                                    storeListings: storeListings,
                                    onGrant: ({
                                      required String giftName,
                                      required double amount,
                                      required String styleId,
                                      required String storeAddress,
                                      required String storeSellerEmail,
                                      required String storeSellerName,
                                      required String storeListingId,
                                    }) =>
                                        onGrant(
                                      pending: p,
                                      giftName: giftName,
                                      amount: amount,
                                      styleId: styleId,
                                      storeAddress: storeAddress,
                                      storeSellerEmail: storeSellerEmail,
                                      storeSellerName: storeSellerName,
                                      storeListingId: storeListingId,
                                    ),
                                  );
                                  if (gift != null) onChanged?.call();
                                },
                                child: Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(18),
                                    border: Border.all(color: colors.last.withValues(alpha: 0.45)),
                                  ),
                                  padding: const EdgeInsets.all(14),
                                  child: Row(
                                    children: [
                                      Container(
                                        width: 52,
                                        height: 52,
                                        decoration: BoxDecoration(
                                          borderRadius: BorderRadius.circular(14),
                                          gradient: LinearGradient(colors: colors),
                                        ),
                                        child: Center(
                                          child: Text(
                                            p.state.trim().isEmpty ? '🏛' : p.state.trim().substring(0, 1).toUpperCase(),
                                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22),
                                          ),
                                        ),
                                      ),
                                      const SizedBox(width: 12),
                                      Expanded(
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Text(p.fullName, style: TextStyle(fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                                            Text(
                                              '${p.state.trim().isEmpty ? 'State' : p.state} · streak ${p.streak}',
                                              style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54),
                                            ),
                                            Text(p.email, style: TextStyle(fontSize: 10, color: isDark ? Colors.white38 : Colors.black38)),
                                          ],
                                        ),
                                      ),
                                      Icon(Icons.chevron_right_rounded, color: colors.first),
                                    ],
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
                ),
              ],
            ),
          );
        },
      );
    },
  );
}

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
  final storeOptions = ngmyHelperGiftStoreOptions(storeListings);
  final stateColors = ngmyHelperGiftStateGradient(pending.state);

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
            margin: const EdgeInsets.fromLTRB(8, 36, 8, 8),
            decoration: BoxDecoration(
              color: bg,
              borderRadius: BorderRadius.circular(28),
              border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
            ),
            child: ListView(
              padding: EdgeInsets.fromLTRB(16, 12, 16, 16 + MediaQuery.of(ctx).viewInsets.bottom),
              children: [
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20),
                    gradient: LinearGradient(colors: stateColors),
                  ),
                  child: Row(
                    children: [
                      Text(style.emoji, style: const TextStyle(fontSize: 32)),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              pending.state.trim().isEmpty ? 'Helper reward' : pending.state.trim(),
                              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 0.6),
                            ),
                            Text(
                              pending.fullName,
                              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                            ),
                            Text(
                              '3 first-helps in a row',
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 12),
                            ),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => Navigator.pop(ctx),
                        icon: const Icon(Icons.close_rounded, color: Colors.white),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 12),
                Text(
                  'Money card',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : const Color(0xFF0F172A)),
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
                Text('NGMY STORE', style: TextStyle(fontSize: 10, letterSpacing: 1.4, fontWeight: FontWeight.w900, color: isDark ? Colors.white54 : Colors.black45)),
                const SizedBox(height: 6),
                Text(
                  'Choose the store name that will scan the QR. Only that store can redeem this card (not individual items).',
                  style: TextStyle(fontSize: 11, height: 1.35, color: isDark ? Colors.white60 : Colors.black54),
                ),
                const SizedBox(height: 10),
                if (storeOptions.isEmpty)
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.orange.withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.orange.withValues(alpha: 0.4)),
                    ),
                    child: const Text(
                      'No NGMY stores on file yet. A store seller must have a seller account with listings, then come back.',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600),
                    ),
                  )
                else
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: storeOptions.map((opt) {
                      final selected = selectedListingId == opt['id'];
                      return SizedBox(
                        width: (MediaQuery.of(ctx).size.width - 56) / 2,
                        child: Material(
                          color: selected ? stateColors.first.withValues(alpha: 0.12) : (isDark ? Colors.white.withValues(alpha: 0.04) : const Color(0xFFF8FAFC)),
                          borderRadius: BorderRadius.circular(16),
                          child: InkWell(
                            borderRadius: BorderRadius.circular(16),
                            onTap: () => setST(() => selectedListingId = opt['id'] as String),
                            child: Container(
                              padding: const EdgeInsets.all(12),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(16),
                                border: Border.all(
                                  color: selected ? stateColors.first : (isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                                  width: selected ? 2 : 1,
                                ),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      Icon(Icons.storefront_rounded, size: 20, color: selected ? stateColors.first : (isDark ? Colors.white54 : Colors.black45)),
                                      const SizedBox(width: 6),
                                      Expanded(
                                        child: Text(
                                          opt['title'] as String,
                                          maxLines: 2,
                                          overflow: TextOverflow.ellipsis,
                                          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                                        ),
                                      ),
                                    ],
                                  ),
                                  if ((opt['address'] as String).isNotEmpty) ...[
                                    const SizedBox(height: 6),
                                    Text(
                                      opt['address'] as String,
                                      maxLines: 2,
                                      overflow: TextOverflow.ellipsis,
                                      style: TextStyle(fontSize: 10, color: isDark ? Colors.white54 : Colors.black54),
                                    ),
                                  ],
                                ],
                              ),
                            ),
                          ),
                        ),
                      );
                    }).toList(),
                  ),
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
