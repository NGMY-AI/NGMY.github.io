import 'package:flutter/material.dart';

import 'ngmy_family_tree_payments.dart';
import 'ngmy_invoice_templates.dart';
import 'ngmy_stripe_payments.dart';
import 'ngmy_wallet_payment_ui.dart';

enum NgmyInvoicePaymentTier { premium, luxury }

enum NgmyInvoicePaymentPlan { oneTime, monthly }

/// Invoice template access.
///
/// - Standard templates are free to edit. Save / download is free for the first
///   three invoices, then Stripe unlocks unlimited export.
/// - Premium / Luxury / Essential Luxury are always paywalled for editing,
///   photo, unlock, save, and download — the free-invoice count never applies.
class NgmyInvoicePayments {
  static const double defaultPremiumOneTime = 9.99;
  static const double defaultPremiumMonthly = 12.99;
  static const double defaultLuxuryOneTime = 19.99;
  static const double defaultLuxuryMonthly = 24.99;

  static String _key(String email) => email.toLowerCase().trim();

  static NgmyWalletPaymentTheme _themeFor(NgmyInvoicePaymentTier tier) =>
      tier == NgmyInvoicePaymentTier.premium ? NgmyWalletPaymentTheme.premium : NgmyWalletPaymentTheme.luxury;

  static NgmyInvoicePaymentTier? tierForTemplate(String templateId) {
    final t = ngmyInvoiceTemplateById(templateId);
    if (t == null) return null;
    if (t.category == kNgmyInvoicePremiumCategory) return NgmyInvoicePaymentTier.premium;
    if (t.category == kNgmyInvoiceLuxuryCategory) return NgmyInvoicePaymentTier.luxury;
    return null;
  }

  static bool requiresPayment(String templateId, dynamic config) {
    final tier = tierForTemplate(templateId);
    if (tier == null) return false;
    return tierMonetizationEnabled(config, tier);
  }

  static bool isStandardTemplate(String templateId) => tierForTemplate(templateId) == null;

  static bool tierMonetizationEnabled(dynamic config, NgmyInvoicePaymentTier tier) {
    return _allowOneTime(config, tier) || _allowMonthly(config, tier);
  }

  static bool _allowOneTime(dynamic config, NgmyInvoicePaymentTier tier) {
    if (tier == NgmyInvoicePaymentTier.premium) {
      return (config as dynamic).invoicePremiumAllowOneTime != false;
    }
    return (config as dynamic).invoiceLuxuryAllowOneTime != false;
  }

  static bool _allowMonthly(dynamic config, NgmyInvoicePaymentTier tier) {
    if (tier == NgmyInvoicePaymentTier.premium) {
      return (config as dynamic).invoicePremiumAllowMonthly != false;
    }
    return (config as dynamic).invoiceLuxuryAllowMonthly != false;
  }

  static double oneTimeFee(dynamic config, NgmyInvoicePaymentTier tier) {
    if (tier == NgmyInvoicePaymentTier.premium) {
      final v = (config as dynamic).invoicePremiumOneTimeFee;
      return v is num ? v.toDouble() : defaultPremiumOneTime;
    }
    final v = (config as dynamic).invoiceLuxuryOneTimeFee;
    return v is num ? v.toDouble() : defaultLuxuryOneTime;
  }

  static double monthlyFee(dynamic config, NgmyInvoicePaymentTier tier) {
    if (tier == NgmyInvoicePaymentTier.premium) {
      final v = (config as dynamic).invoicePremiumMonthlyFee;
      return v is num ? v.toDouble() : defaultPremiumMonthly;
    }
    final v = (config as dynamic).invoiceLuxuryMonthlyFee;
    return v is num ? v.toDouble() : defaultLuxuryMonthly;
  }

  static List<String> _lifetime(dynamic config, NgmyInvoicePaymentTier tier) {
    final raw = tier == NgmyInvoicePaymentTier.premium
        ? (config as dynamic).invoicePremiumLifetimeEmails
        : (config as dynamic).invoiceLuxuryLifetimeEmails;
    if (raw is! List) return [];
    return raw.map((e) => e.toString().toLowerCase().trim()).where((e) => e.isNotEmpty).toList();
  }

  static Map<String, String> _accessMap(dynamic config, NgmyInvoicePaymentTier tier) {
    final raw = tier == NgmyInvoicePaymentTier.premium
        ? (config as dynamic).invoicePremiumAccessUntilByEmail
        : (config as dynamic).invoiceLuxuryAccessUntilByEmail;
    if (raw is! Map) return {};
    return raw.map((k, v) => MapEntry(k.toString().toLowerCase().trim(), v.toString()));
  }

  /// Local wallet / lifetime unlock for a paid template (sync).
  static bool hasAccess(dynamic config, String email, String templateId, {bool isAdmin = false}) {
    if (isAdmin) return true;
    if (!requiresPayment(templateId, config)) return true;
    final tier = tierForTemplate(templateId)!;
    final key = _key(email);
    if (key.isEmpty) return false;
    if (_lifetime(config, tier).contains(key)) return true;
    final untilRaw = _accessMap(config, tier)[key];
    if (untilRaw != null && untilRaw.isNotEmpty) {
      final until = DateTime.tryParse(untilRaw);
      if (until != null && until.isAfter(DateTime.now())) return true;
    }
    return false;
  }

  /// Stripe invoice subscription unlocks every tier.
  static Future<bool> hasStripeInvoiceAccess(String email) =>
      NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.invoice);

  /// Identifies one invoice by what is on it. The free allowance is spent per
  /// Standard invoice on save/download, so saving then downloading the same one
  /// must not count twice.
  static String invoiceRef({
    required String templateId,
    required String invoiceNo,
    required String business,
    required String clientName,
    required String item,
    required String itemPrice,
  }) =>
      [templateId, invoiceNo, business, clientName, item, itemPrice]
          .map((s) => s.trim().toLowerCase())
          .join('|');

  static String invoiceRefFromEntry(Map<String, dynamic> entry) => invoiceRef(
        templateId: (entry['template'] ?? '').toString(),
        invoiceNo: (entry['invoiceNo'] ?? '').toString(),
        business: (entry['business'] ?? entry['businessName'] ?? '').toString(),
        clientName: (entry['clientName'] ?? '').toString(),
        item: (entry['item'] ?? entry['itemName'] ?? '').toString(),
        itemPrice: (entry['itemPrice'] ?? '').toString(),
      );

  /// Whether Premium / Luxury content should stay locked in the editor.
  /// Standard templates are never content-locked — only their export is limited.
  /// The three free invoices never unlock a paid template.
  static Future<bool> isContentLocked(
    dynamic config,
    String email,
    String templateId, {
    bool isAdmin = false,
    String invoiceRef = '',
  }) async {
    if (isAdmin) return false;
    if (!requiresPayment(templateId, config)) return false;
    if (hasAccess(config, email, templateId)) return false;
    if (await hasStripeInvoiceAccess(email)) return false;
    return true;
  }

  static void grantLifetime(dynamic config, String email, NgmyInvoicePaymentTier tier) {
    final key = _key(email);
    if (key.isEmpty) return;
    final list = List<String>.from(_lifetime(config, tier));
    if (!list.contains(key)) list.add(key);
    _setLifetime(config, tier, list);
  }

  static void grantMonthly(dynamic config, String email, NgmyInvoicePaymentTier tier, {int days = 30}) {
    final key = _key(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_accessMap(config, tier));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setAccessMap(config, tier, map);
  }

  static void _setLifetime(dynamic config, NgmyInvoicePaymentTier tier, List<String> emails) {
    if (tier == NgmyInvoicePaymentTier.premium) {
      (config as dynamic).invoicePremiumLifetimeEmails = emails;
    } else {
      (config as dynamic).invoiceLuxuryLifetimeEmails = emails;
    }
  }

  static void _setAccessMap(dynamic config, NgmyInvoicePaymentTier tier, Map<String, String> map) {
    if (tier == NgmyInvoicePaymentTier.premium) {
      (config as dynamic).invoicePremiumAccessUntilByEmail = map;
    } else {
      (config as dynamic).invoiceLuxuryAccessUntilByEmail = map;
    }
  }

  static void _grantAllPaidTiers(dynamic config, String email) {
    grantMonthly(config, email, NgmyInvoicePaymentTier.premium);
    grantMonthly(config, email, NgmyInvoicePaymentTier.luxury);
  }

  static Future<NgmyInvoicePaymentPlan?> pickPlan(
    BuildContext context,
    dynamic config,
    NgmyInvoicePaymentTier tier,
  ) {
    final one = _allowOneTime(config, tier);
    final month = _allowMonthly(config, tier);
    if (one && month) {
      return _showPlanPicker(
        context: context,
        tier: tier,
        oneTimeFee: oneTimeFee(config, tier),
        monthlyFee: monthlyFee(config, tier),
      );
    }
    if (one) return Future.value(NgmyInvoicePaymentPlan.oneTime);
    if (month) return Future.value(NgmyInvoicePaymentPlan.monthly);
    return Future.value(null);
  }

  static Future<NgmyInvoicePaymentPlan?> _showPlanPicker({
    required BuildContext context,
    required NgmyInvoicePaymentTier tier,
    required double oneTimeFee,
    required double monthlyFee,
  }) {
    final theme = _themeFor(tier);
    final data = NgmyWalletPaymentThemeData.forTheme(theme);
    final tierLabel = tier == NgmyInvoicePaymentTier.premium ? 'Premium' : 'Luxury';

    return showDialog<NgmyInvoicePaymentPlan>(
      context: context,
      barrierColor: Colors.black.withValues(alpha: 0.72),
      builder: (ctx) => Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.symmetric(horizontal: 22, vertical: 28),
        child: NgmyPaymentShell(
          themeData: data,
          title: '$tierLabel Invoice Access',
          subtitle: 'Choose how you want to unlock $tierLabel templates on this device.',
          child: Column(
            children: [
              NgmyPlanOptionCard(
                themeData: data,
                label: 'One-time unlock',
                price: oneTimeFee,
                hint: 'Lifetime access on this account',
                icon: Icons.all_inclusive_rounded,
                onTap: () => Navigator.pop(ctx, NgmyInvoicePaymentPlan.oneTime),
              ),
              const SizedBox(height: 10),
              NgmyPlanOptionCard(
                themeData: data,
                label: 'Monthly access',
                price: monthlyFee,
                hint: '30 days — renew anytime',
                icon: Icons.calendar_month_rounded,
                onTap: () => Navigator.pop(ctx, NgmyInvoicePaymentPlan.monthly),
              ),
              const SizedBox(height: 14),
              TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Not now')),
            ],
          ),
        ),
      ),
    );
  }

  static Future<bool> _runStripeCheckout({
    required BuildContext context,
    required String email,
    required dynamic config,
    required String title,
    required String message,
    required NgmyInvoicePaymentTier celebrateTier,
    VoidCallback? onGranted,
  }) async {
    final paid = await NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.invoice,
      email: email,
      title: title,
      message: message,
    );
    if (!paid) return false;

    _grantAllPaidTiers(config, email);
    onGranted?.call();

    if (context.mounted) {
      await showNgmyUnlockCelebration(
        context: context,
        theme: _themeFor(celebrateTier),
        headline: 'Invoice access unlocked',
        subtitle: 'Active for 30 days',
      );
    }
    return true;
  }

  /// Unlock Premium / Luxury / Essential Luxury for editing, photo, unlock,
  /// save, or download. The free-invoice allowance is never spent here — users
  /// can pay for paid templates at any time, even with free Standard exports left.
  static Future<bool> requestAccess({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required String templateId,
    required Future<bool> Function(double amount, String description) onCharge,
    VoidCallback? onGranted,
    String invoiceRef = '',
  }) async {
    if ((user as dynamic).isAdmin == true) return true;
    final email = (user as dynamic).email as String;

    // Standard templates are not gated by this method — export uses
    // [ensureSaveOrDownloadAllowed] instead.
    if (!requiresPayment(templateId, config)) return true;

    if (hasAccess(config, email, templateId)) return true;
    if (await hasStripeInvoiceAccess(email)) {
      _grantAllPaidTiers(config, email);
      onGranted?.call();
      return true;
    }

    final tier = tierForTemplate(templateId)!;
    final tierLabel = tier == NgmyInvoicePaymentTier.premium ? 'Premium' : 'Luxury';

    return _runStripeCheckout(
      context: context,
      email: email,
      config: config,
      title: 'NGMY Invoice — $tierLabel',
      message: 'Unlock $tierLabel invoice templates to edit, add your photo, save, and download.',
      celebrateTier: tier,
      onGranted: onGranted,
    );
  }

  /// Save / download gate for every template.
  ///
  /// Paid templates go through [requestAccess]. Standard templates use the
  /// three free invoices; the fourth and later require Stripe.
  static Future<bool> ensureSaveOrDownloadAllowed({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required String templateId,
    required Future<bool> Function(double amount, String description) onCharge,
    VoidCallback? onGranted,
    String invoiceRef = '',
  }) async {
    if ((user as dynamic).isAdmin == true) return true;
    final email = (user as dynamic).email as String;

    if (await hasStripeInvoiceAccess(email)) {
      if (requiresPayment(templateId, config)) {
        _grantAllPaidTiers(config, email);
      }
      onGranted?.call();
      return true;
    }

    if (requiresPayment(templateId, config)) {
      return requestAccess(
        context: context,
        user: user,
        config: config,
        templateId: templateId,
        onCharge: onCharge,
        onGranted: onGranted,
        invoiceRef: invoiceRef,
      );
    }

    // Standard — three free unique invoices, then pay.
    if (await NgmyStripePayments.claimInvoiceFree(email, invoiceRef)) {
      return true;
    }

    return _runStripeCheckout(
      context: context,
      email: email,
      config: config,
      title: 'NGMY Invoice',
      message: 'You have used your ${NgmyStripePayments.invoiceFreeCount} free Standard invoices. '
          'Subscribe for unlimited invoices, including Premium & Luxury templates (30 days).',
      celebrateTier: NgmyInvoicePaymentTier.premium,
      onGranted: onGranted,
    );
  }
}
