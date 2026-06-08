import 'package:flutter/material.dart';

import 'ngmy_family_tree_payments.dart';
import 'ngmy_invoice_templates.dart';

enum NgmyInvoicePaymentTier { premium, luxury }

enum NgmyInvoicePaymentPlan { oneTime, monthly }

/// Invoice template wallet pricing (Premium + Luxury / Essential Luxury).
class NgmyInvoicePayments {
  static const double defaultPremiumOneTime = 9.99;
  static const double defaultPremiumMonthly = 12.99;
  static const double defaultLuxuryOneTime = 19.99;
  static const double defaultLuxuryMonthly = 24.99;

  static String _key(String email) => email.toLowerCase().trim();

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
    if (tier == NgmyInvoicePaymentTier.premium) {
      return _allowOneTime(config, tier) || _allowMonthly(config, tier);
    }
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
  ) async {
    final one = _allowOneTime(config, tier);
    final month = _allowMonthly(config, tier);
    if (one && month) {
      return showDialog<NgmyInvoicePaymentPlan>(
        context: context,
        builder: (ctx) => AlertDialog(
          title: Text(tier == NgmyInvoicePaymentTier.premium ? 'Premium invoices' : 'Luxury invoices'),
          content: Text(
            'Choose how you want to unlock ${tier == NgmyInvoicePaymentTier.premium ? 'Premium' : 'Luxury'} templates on this device.',
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
            TextButton(
              onPressed: () => Navigator.pop(ctx, NgmyInvoicePaymentPlan.oneTime),
              child: Text('One-time \$${oneTimeFee(config, tier).toStringAsFixed(2)}'),
            ),
            FilledButton(
              onPressed: () => Navigator.pop(ctx, NgmyInvoicePaymentPlan.monthly),
              child: Text('Monthly \$${monthlyFee(config, tier).toStringAsFixed(2)}'),
            ),
          ],
        ),
      );
    }
    if (one) return NgmyInvoicePaymentPlan.oneTime;
    if (month) return NgmyInvoicePaymentPlan.monthly;
    return null;
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

    final amount = plan == NgmyInvoicePaymentPlan.oneTime ? oneTimeFee(config, tier) : monthlyFee(config, tier);
    final tierLabel = tier == NgmyInvoicePaymentTier.premium ? 'Premium' : 'Luxury';
    final planLabel = plan == NgmyInvoicePaymentPlan.oneTime ? 'one-time unlock' : '30-day access';

    final paid = await NgmyFamilyTreePayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: amount,
      title: 'Invoice $tierLabel Templates',
      message: 'Unlock $tierLabel invoice templates ($planLabel) for \$${amount.toStringAsFixed(2)}.',
      onCharge: onCharge,
    );
    if (!paid) return false;

    if (plan == NgmyInvoicePaymentPlan.oneTime) {
      grantLifetime(config, (user as dynamic).email as String, tier);
    } else {
      grantMonthly(config, (user as dynamic).email as String, tier);
    }
    onGranted?.call();
    return true;
  }
}
