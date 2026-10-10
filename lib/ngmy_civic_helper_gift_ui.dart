import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_civic_helper_gifts.dart';
import 'ngmy_nav.dart';
import 'ngmy_store_access.dart';

/// After the member dismisses a gift alert, skip auto pop-ups until next app open.
class NgmyHelperGiftUserPopupSession {
  static bool _dismissedUntilNextAppOpen = false;

  static bool get isDismissedForAppSession => _dismissedUntilNextAppOpen;

  static void markDismissedForAppSession() {
    _dismissedUntilNextAppOpen = true;
  }
}

InputDecoration _ngmyGiftFieldDecoration({
  required bool isDark,
  required String label,
  String? hint,
  String? prefixText,
}) {
  final fill = isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF8FAFC);
  final border = isDark ? Colors.white.withValues(alpha: 0.12) : const Color(0xFFE2E8F0);
  return InputDecoration(
    labelText: label,
    hintText: hint,
    prefixText: prefixText,
    filled: true,
    fillColor: fill,
    labelStyle: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : const Color(0xFF64748B)),
    border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: border)),
    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: border)),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(16),
      borderSide: const BorderSide(color: Color(0xFFEC4899), width: 2),
    ),
    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
  );
}

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
  // Stores the admin granted win: their store name and description are what
  // the gift card shows, even if the seller has no listings yet.
  for (final granted in NgmyStoreAccessCache.giftOptions()) {
    bySeller[granted['sellerEmail'] as String] = granted;
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
          final open = NgmyCivicHelperGifts.openPendingNeedingAdminGrant(config);
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
  // Stores the admin granted (Store access) show with their name and description.
  await NgmyStoreAccessCache.load();
  if (!context.mounted) return null;
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
                const SizedBox(height: 16),
                _NgmyHelperGiftMoneyCardPreview(
                  style: style,
                  giftName: nameC.text.trim().isEmpty ? 'Money card' : nameC.text.trim(),
                  amount: double.tryParse(amountC.text.trim()) ?? 0,
                  storeName: () {
                    if (selectedListingId == null) return 'Pick a store';
                    for (final o in storeOptions) {
                      if (o['id'] == selectedListingId) return o['title'] as String;
                    }
                    return 'Pick a store';
                  }(),
                ),
                const SizedBox(height: 18),
                Text(
                  'Present style',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                ),
                const SizedBox(height: 4),
                Text(
                  'Tap a design — no swiping.',
                  style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black45),
                ),
                const SizedBox(height: 10),
                GridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 4,
                    mainAxisSpacing: 8,
                    crossAxisSpacing: 8,
                    childAspectRatio: 0.82,
                  ),
                  itemCount: kNgmyHelperGiftStyles.length,
                  itemBuilder: (_, i) {
                    final s = kNgmyHelperGiftStyles[i];
                    final selected = s.id == styleId;
                    return Material(
                      color: Colors.transparent,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(14),
                        onTap: () => setST(() => styleId = s.id),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(14),
                            gradient: LinearGradient(colors: [s.accent, s.accent2]),
                            border: Border.all(
                              color: selected ? Colors.white : Colors.white.withValues(alpha: 0.15),
                              width: selected ? 3 : 1,
                            ),
                            boxShadow: selected
                                ? [BoxShadow(color: s.accent.withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 4))]
                                : null,
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(s.emoji, style: const TextStyle(fontSize: 22)),
                              const SizedBox(height: 4),
                              Text(
                                s.label.split(' ').first,
                                textAlign: TextAlign.center,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w800),
                              ),
                            ],
                          ),
                        ),
                      ),
                    );
                  },
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: nameC,
                  onChanged: (_) => setST(() {}),
                  decoration: _ngmyGiftFieldDecoration(
                    isDark: isDark,
                    label: 'Card title',
                    hint: 'e.g. Grocery money card',
                  ),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: amountC,
                  onChanged: (_) => setST(() {}),
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  decoration: _ngmyGiftFieldDecoration(
                    isDark: isDark,
                    label: 'Amount on card',
                    hint: 'Store sees this balance',
                    prefixText: '\$ ',
                  ),
                ),
                const SizedBox(height: 16),
                Text(
                  'Redeem at this NGMY store',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                ),
                const SizedBox(height: 4),
                Text(
                  'Only the store you pick can scan and redeem this card.',
                  style: TextStyle(fontSize: 12, height: 1.35, color: isDark ? Colors.white54 : Colors.black54),
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
                  ...storeOptions.map((opt) {
                    final selected = selectedListingId == opt['id'];
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Material(
                        color: selected
                            ? stateColors.first.withValues(alpha: 0.14)
                            : (isDark ? Colors.white.withValues(alpha: 0.04) : const Color(0xFFF8FAFC)),
                        borderRadius: BorderRadius.circular(16),
                        child: InkWell(
                          borderRadius: BorderRadius.circular(16),
                          onTap: () => setST(() => selectedListingId = opt['id'] as String),
                          child: Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(
                                color: selected ? stateColors.first : (isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                                width: selected ? 2 : 1,
                              ),
                            ),
                            child: Row(
                              children: [
                                Icon(
                                  selected ? Icons.radio_button_checked_rounded : Icons.radio_button_off_rounded,
                                  color: selected ? stateColors.first : (isDark ? Colors.white38 : Colors.black38),
                                ),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        opt['title'] as String,
                                        style: TextStyle(
                                          fontWeight: FontWeight.w900,
                                          fontSize: 14,
                                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                                        ),
                                      ),
                                      if ((opt['address'] as String).isNotEmpty)
                                        Text(
                                          opt['address'] as String,
                                          maxLines: 2,
                                          overflow: TextOverflow.ellipsis,
                                          style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54),
                                        ),
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
                const SizedBox(height: 16),
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

/// User-facing gift card with QR for store redeem.
Future<void> showNgmyHelperGiftReceivedDialog(BuildContext context, NgmyHelperGift gift) async {
  await showDialog<void>(
    context: context,
    barrierColor: Colors.black.withValues(alpha: 0.55),
    builder: (ctx) => Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
      child: _NgmyHelperGiftMemberCardPanel(
        gift: gift,
        onClose: () async {
          if (!gift.redeemed) {
            await NgmyCivicHelperGifts.markGiftPopupSeen(gift.token);
          }
          if (ctx.mounted) Navigator.pop(ctx);
        },
      ),
    ),
  );
}

bool _ngmyHelperGiftWalletSheetOpen = false;

/// Profile wallet — all money cards for this member.
Future<void> showNgmyHelperGiftUserWallet({
  required BuildContext context,
  required dynamic config,
  required String userEmail,
}) async {
  if (_ngmyHelperGiftWalletSheetOpen) return;
  _ngmyHelperGiftWalletSheetOpen = true;
  try {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _NgmyHelperGiftWalletSheet(
        config: config,
        userEmail: userEmail,
        parentContext: context,
      ),
    );
  } finally {
    _ngmyHelperGiftWalletSheetOpen = false;
  }
}

class _NgmyHelperGiftWalletSheet extends StatefulWidget {
  const _NgmyHelperGiftWalletSheet({
    required this.config,
    required this.userEmail,
    required this.parentContext,
  });

  final dynamic config;
  final String userEmail;
  final BuildContext parentContext;

  @override
  State<_NgmyHelperGiftWalletSheet> createState() => _NgmyHelperGiftWalletSheetState();
}

class _NgmyHelperGiftWalletSheetState extends State<_NgmyHelperGiftWalletSheet> {
  var _loading = true;

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
  }

  Future<void> _refresh() async {
    await NgmyCivicHelperGifts.hydrateFromCloud(widget.config);
    if (mounted) setState(() => _loading = false);
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B1220) : Colors.white;
    final gifts = NgmyCivicHelperGifts.giftsForEmail(widget.config, widget.userEmail);
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.88),
      margin: const EdgeInsets.fromLTRB(10, 40, 10, 10),
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
            padding: const EdgeInsets.fromLTRB(18, 12, 8, 4),
            child: Row(
              children: [
                const Text('🎁', style: TextStyle(fontSize: 28)),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('My money cards', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                      Text(
                        _loading
                            ? 'Syncing your cards…'
                            : gifts.isEmpty
                                ? 'When an admin sends you a card, it appears here.'
                                : '${gifts.where((g) => g.isActive).length} active · ${gifts.length} total',
                        style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54),
                      ),
                    ],
                  ),
                ),
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded)),
              ],
            ),
          ),
          Expanded(
            child: _loading
                ? const Center(child: CircularProgressIndicator(color: Color(0xFFEC4899)))
                : gifts.isEmpty
                    ? Center(
                        child: Padding(
                          padding: const EdgeInsets.all(28),
                          child: Text(
                            'No helper presents yet. Earn three first-helper campaigns in a row in Civic Registry.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: isDark ? Colors.white54 : Colors.black45, height: 1.4),
                          ),
                        ),
                      )
                    : ListView.separated(
                        padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                        itemCount: gifts.length,
                        separatorBuilder: (_, __) => const SizedBox(height: 10),
                        itemBuilder: (_, i) {
                          final g = gifts[i];
                          final style = ngmyHelperGiftStyleById(g.styleId);
                          return Material(
                            color: isDark ? Colors.white.withValues(alpha: 0.05) : const Color(0xFFF8FAFC),
                            borderRadius: BorderRadius.circular(18),
                            child: InkWell(
                              borderRadius: BorderRadius.circular(18),
                              onTap: () async {
                                final parent = widget.parentContext;
                                Navigator.pop(context);
                                if (parent.mounted) {
                                  await showNgmyHelperGiftReceivedDialog(parent, g);
                                }
                              },
                              child: Container(
                                padding: const EdgeInsets.all(14),
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(18),
                                  border: Border.all(color: style.accent.withValues(alpha: 0.35)),
                                ),
                                child: Row(
                                  children: [
                                    Container(
                                      width: 48,
                                      height: 48,
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(14),
                                        gradient: LinearGradient(colors: [style.accent, style.accent2]),
                                      ),
                                      child: Center(child: Text(style.emoji, style: const TextStyle(fontSize: 24))),
                                    ),
                                    const SizedBox(width: 12),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(g.giftName, style: TextStyle(fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                                          Text(
                                            g.redeemed
                                                ? 'Redeemed · \$${g.amount.toStringAsFixed(2)}'
                                                : g.isExpired
                                                    ? 'Expired · \$${g.amount.toStringAsFixed(2)}'
                                                    : '\$${g.amount.toStringAsFixed(2)} · ${g.storeSellerName.isEmpty ? 'NGMY store' : g.storeSellerName}'
                                                        '${g.expiresAt != null ? ' · use by ${_ngmyGiftDate(g.expiresAt!)}' : ''}',
                                            style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Icon(
                                      g.redeemed ? Icons.check_circle_rounded : Icons.qr_code_2_rounded,
                                      color: g.redeemed ? Colors.green : style.accent,
                                    ),
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
  }
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
  String? actionNote;
  var busy = false;

  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setST) {
          final bg = isDark ? const Color(0xFF0B1220) : Colors.white;
          final status = peeked == null
              ? _NgmyGiftRedeemStatus.idle
              : (peeked!.redeemed ? _NgmyGiftRedeemStatus.alreadyUsed : _NgmyGiftRedeemStatus.ready);
          return Container(
            margin: const EdgeInsets.fromLTRB(10, 48, 10, 10),
            padding: EdgeInsets.fromLTRB(18, 16, 18, 16 + MediaQuery.of(ctx).viewInsets.bottom),
            decoration: BoxDecoration(
              color: bg,
              borderRadius: BorderRadius.circular(28),
              border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
            ),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: const Color(0xFFEC4899).withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: const Icon(Icons.payments_rounded, color: Color(0xFFEC4899), size: 26),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Redeem money card', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                            Text(
                              'Scan the member’s card QR or paste their code.',
                              style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                            ),
                          ],
                        ),
                      ),
                      IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close_rounded)),
                    ],
                  ),
                  const SizedBox(height: 16),
                  if (barcode_platform.ngmyBarcodeUseCamera)
                    FilledButton.icon(
                      onPressed: busy
                          ? null
                          : () async {
                              final raw = await _scanHelperGiftQr(ctx);
                              if (raw == null || raw.trim().isEmpty) return;
                              codeC.text = raw.trim();
                              setST(() {
                                busy = true;
                                actionNote = null;
                              });
                              final token = NgmyCivicHelperGifts.parseTokenFromPayload(codeC.text) ?? codeC.text.trim();
                              final g = await NgmyCivicHelperGifts.loadGiftByToken(token, config: config);
                              setST(() {
                                busy = false;
                                peeked = g;
                                actionNote = g == null ? 'No card matched that code.' : null;
                              });
                            },
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF6366F1),
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                      ),
                      icon: const Icon(Icons.qr_code_scanner_rounded),
                      label: const Text('Open camera scanner', style: TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  if (barcode_platform.ngmyBarcodeUseCamera) const SizedBox(height: 12),
                  TextField(
                    controller: codeC,
                    decoration: _ngmyGiftFieldDecoration(
                      isDark: isDark,
                      label: 'Card code',
                      hint: 'Paste from member’s wallet',
                    ),
                    onChanged: (_) => setST(() {
                      peeked = null;
                      actionNote = null;
                    }),
                  ),
                  const SizedBox(height: 12),
                  _NgmyGiftRedeemStatusChip(status: status, actionNote: actionNote),
                  if (peeked != null) ...[
                    const SizedBox(height: 14),
                    _NgmyHelperGiftStorePeekCard(gift: peeked!, isDark: isDark),
                  ],
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: busy
                              ? null
                              : () async {
                                  setST(() {
                                    busy = true;
                                    actionNote = null;
                                  });
                                  final token = NgmyCivicHelperGifts.parseTokenFromPayload(codeC.text) ?? codeC.text.trim();
                                  final g = await NgmyCivicHelperGifts.loadGiftByToken(token, config: config);
                                  setST(() {
                                    busy = false;
                                    peeked = g;
                                    actionNote = g == null ? 'No card matched that code.' : null;
                                  });
                                },
                          style: OutlinedButton.styleFrom(
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: const Text('Verify card'),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: FilledButton(
                          onPressed: busy || peeked == null || peeked!.redeemed
                              ? null
                              : () async {
                                  setST(() {
                                    busy = true;
                                    actionNote = 'Applying store credit…';
                                  });
                                  final result = await NgmyCivicHelperGifts.redeemAtStore(
                                    config: config,
                                    qrOrToken: codeC.text,
                                    storeOwnerEmail: storeOwnerEmail,
                                    storeOwnerName: storeOwnerName,
                                  );
                                  setST(() {
                                    busy = false;
                                    peeked = result.gift;
                                    actionNote = result.ok
                                        ? 'Success — give the member \$${result.gift?.amount.toStringAsFixed(2) ?? ''} in store credit.'
                                        : result.message;
                                  });
                                  if (result.ok) {
                                    onDataChanged();
                                  }
                                },
                          style: FilledButton.styleFrom(
                            backgroundColor: const Color(0xFF059669),
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: Text(busy ? 'Working…' : 'Apply credit', style: const TextStyle(fontWeight: FontWeight.w900)),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          );
        },
      );
    },
  );
}

enum _NgmyGiftRedeemStatus { idle, ready, alreadyUsed }

class _NgmyGiftRedeemStatusChip extends StatelessWidget {
  const _NgmyGiftRedeemStatusChip({required this.status, this.actionNote});

  final _NgmyGiftRedeemStatus status;
  final String? actionNote;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (actionNote != null && actionNote!.isNotEmpty) {
      final ok = actionNote!.startsWith('Success');
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: (ok ? const Color(0xFF059669) : (isDark ? Colors.amber : const Color(0xFFB45309))).withValues(alpha: 0.12),
          borderRadius: BorderRadius.circular(12),
        ),
        child: Text(actionNote!, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: isDark ? Colors.white : const Color(0xFF0F172A))),
      );
    }
    final (label, color) = switch (status) {
      _NgmyGiftRedeemStatus.idle => ('Scan or paste a code, then tap Verify card.', isDark ? Colors.white54 : const Color(0xFF64748B)),
      _NgmyGiftRedeemStatus.ready => ('Card is valid for your store — tap Apply credit.', const Color(0xFF059669)),
      _NgmyGiftRedeemStatus.alreadyUsed => ('This card was already used.', const Color(0xFF64748B)),
    };
    return Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: color));
  }
}

class _NgmyHelperGiftStorePeekCard extends StatelessWidget {
  const _NgmyHelperGiftStorePeekCard({required this.gift, required this.isDark});

  final NgmyHelperGift gift;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final style = ngmyHelperGiftStyleById(gift.styleId);
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: LinearGradient(colors: [style.accent.withValues(alpha: 0.85), style.accent2]),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(style.emoji, style: const TextStyle(fontSize: 28)),
              const SizedBox(width: 10),
              Expanded(
                child: Text(gift.giftName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text('\$${gift.amount.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 32)),
          Text('Member: ${gift.fullName}', style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 13)),
          if (gift.storeSellerName.trim().isNotEmpty)
            Text(
              'Store: ${gift.storeSellerName.trim()}'
              '${gift.storeAddress.trim().isEmpty || gift.storeAddress.trim() == 'Store location on file' ? '' : ' · ${gift.storeAddress.trim()}'}',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12, fontWeight: FontWeight.w600),
            ),
          if (gift.redeemed)
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child: Text('Used · no further credit', style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontWeight: FontWeight.w700)),
            ),
        ],
      ),
    );
  }
}

class _NgmyHelperGiftMoneyCardPreview extends StatelessWidget {
  const _NgmyHelperGiftMoneyCardPreview({
    required this.style,
    required this.giftName,
    required this.amount,
    required this.storeName,
  });

  final NgmyHelperGiftStyle style;
  final String giftName;
  final double amount;
  final String storeName;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        gradient: LinearGradient(colors: [style.accent, style.accent2]),
        boxShadow: [BoxShadow(color: style.accent.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 8))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(style.emoji, style: const TextStyle(fontSize: 26)),
              const Spacer(),
              Icon(style.icon, color: Colors.white.withValues(alpha: 0.85)),
            ],
          ),
          const SizedBox(height: 12),
          Text(giftName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
          Text(
            amount > 0 ? '\$${amount.toStringAsFixed(2)}' : '\$ —',
            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 34, letterSpacing: -0.5),
          ),
          const SizedBox(height: 6),
          Text('Redeem at: $storeName', style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 11, fontWeight: FontWeight.w600)),
        ],
      ),
    );
  }
}

class _NgmyHelperGiftMemberCardPanel extends StatelessWidget {
  const _NgmyHelperGiftMemberCardPanel({required this.gift, required this.onClose});

  final NgmyHelperGift gift;
  final VoidCallback onClose;

  @override
  Widget build(BuildContext context) {
    final style = ngmyHelperGiftStyleById(gift.styleId);
    return Container(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(28),
        color: const Color(0xFF0F172A),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(22),
              gradient: LinearGradient(colors: [style.accent, style.accent2]),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(style.emoji, style: const TextStyle(fontSize: 36)),
                const SizedBox(height: 8),
                Text(
                  gift.redeemed ? 'Card used' : (gift.isExpired ? 'Card expired' : 'Your money card'),
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 13),
                ),
                Text(gift.giftName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                const SizedBox(height: 4),
                Text('\$${gift.amount.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 36)),
                if (!gift.redeemed && gift.expiresAt != null)
                  Text(
                    gift.isExpired
                        ? 'Expired ${_ngmyGiftDate(gift.expiresAt!)}'
                        : 'Use by ${_ngmyGiftDate(gift.expiresAt!)} (valid 1 week)',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 12.5),
                  ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          if (gift.isExpired && !gift.redeemed)
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.06),
                borderRadius: BorderRadius.circular(16),
              ),
              child: const Text(
                'This card expired — money cards can be used for 1 week after they are sent.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600, fontSize: 13),
              ),
            )
          else if (!gift.redeemed)
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                children: [
                  QrImageView(data: gift.qrPayload, size: 200, backgroundColor: Colors.white),
                  const SizedBox(height: 8),
                  Text(
                    'Show this at ${gift.storeSellerName.isEmpty ? 'your NGMY store' : gift.storeSellerName}',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: Color(0xFF334155)),
                  ),
                  if (gift.storeAddress.trim().isNotEmpty && gift.storeAddress.trim() != 'Store location on file')
                    Text(
                      gift.storeAddress.trim(),
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 11, color: Color(0xFF64748B)),
                    ),
                ],
              ),
            )
          else
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.06),
                borderRadius: BorderRadius.circular(16),
              ),
              child: const Text(
                'This card was redeemed at the store. No QR is needed anymore.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600, fontSize: 13),
              ),
            ),
          const SizedBox(height: 14),
          Row(
            children: [
              if (!gift.redeemed)
                Expanded(
                  child: OutlinedButton(
                    onPressed: () async {
                      await Clipboard.setData(ClipboardData(text: gift.qrPayload));
                      if (context.mounted) {
                        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Code copied')));
                      }
                    },
                    style: OutlinedButton.styleFrom(foregroundColor: Colors.white70),
                    child: const Text('Copy code'),
                  ),
                ),
              if (!gift.redeemed) const SizedBox(width: 8),
              Expanded(
                child: FilledButton(
                  onPressed: onClose,
                  style: FilledButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: style.accent2,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                  ),
                  child: const Text('Close', style: TextStyle(fontWeight: FontWeight.w900)),
                ),
              ),
            ],
          ),
          if (!gift.redeemed)
            TextButton(
              onPressed: () {
                NgmyHelperGiftUserPopupSession.markDismissedForAppSession();
                onClose();
              },
              child: Text('Remind me later', style: TextStyle(color: Colors.white.withValues(alpha: 0.65))),
            ),
        ],
      ),
    );
  }
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

String _ngmyGiftDate(DateTime d) {
  final l = d.toLocal();
  return '${l.month}/${l.day}/${l.year}';
}
