import 'package:flutter/material.dart';

import 'ngmy_family_tree_payments.dart';
import 'ngmy_invoice_templates.dart';
import 'ngmy_wallet_payment_ui.dart';

enum NgmyInvoicePaymentTier { premium, luxury }

enum NgmyInvoicePaymentPlan { oneTime, monthly }

/// Invoice template wallet pricing (Premium + Luxury / Essential Luxury).
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

  static bool hasAccess(dynamic config, String email, String templateId) {
    if (!requiresPayment(templateId, config)) return true;
    final tier = tierForTemplate(templateId)!;
    final key = _key(email);
    if (key.isEmpty) return false;
    if (_lifetime(config, tier).contains(key)) return true;
    final untilRaw = _accessMap(config, tier)[key];
    if (untilRaw == null || untilRaw.isEmpty) return false;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
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

  static Future<bool> requestAccess({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required String templateId,
    required Future<bool> Function(double amount, String description) onCharge,
    VoidCallback? onGranted,
  }) async {
    if (!requiresPayment(templateId, config)) return true;
    if (hasAccess(config, (user as dynamic).email as String, templateId)) return true;

    final tier = tierForTemplate(templateId)!;
    final plan = await pickPlan(context, config, tier);
    if (plan == null) return false;
    if (!context.mounted) return false;

    final amount = plan == NgmyInvoicePaymentPlan.oneTime ? oneTimeFee(config, tier) : monthlyFee(config, tier);
    final tierLabel = tier == NgmyInvoicePaymentTier.premium ? 'Premium' : 'Luxury';
    final planLabel = plan == NgmyInvoicePaymentPlan.oneTime ? 'one-time unlock' : '30-day access';

    final paid = await NgmyFamilyTreePayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: amount,
      title: 'Invoice $tierLabel Templates',
      message: 'Unlock $tierLabel invoice templates ($planLabel) from your NGMY wallet.',
      theme: _themeFor(tier),
      onCharge: onCharge,
    );
    if (!paid) return false;

    if (plan == NgmyInvoicePaymentPlan.oneTime) {
      grantLifetime(config, (user as dynamic).email as String, tier);
    } else {
      grantMonthly(config, (user as dynamic).email as String, tier);
    }
    onGranted?.call();

    if (context.mounted) {
      final tierLabel = tier == NgmyInvoicePaymentTier.premium ? 'Premium' : 'Luxury';
      final planSubtitle = plan == NgmyInvoicePaymentPlan.oneTime ? 'Unlocked forever' : 'Active for 30 days';
      await showNgmyUnlockCelebration(
        context: context,
        theme: _themeFor(tier),
        headline: '$tierLabel Unlocked',
        subtitle: planSubtitle,
      );
    }
    return true;
  }
}
