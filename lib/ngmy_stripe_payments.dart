import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_stripe_checkout_launch_stub.dart'
    if (dart.library.html) 'ngmy_stripe_checkout_launch_web.dart';
import 'ngmy_stripe_return_capture_stub.dart'
    if (dart.library.html) 'ngmy_stripe_return_capture_web.dart';
import 'ngmy_stripe_cloud.dart';

enum NgmyStripeProduct {
  docShareOrg,
  invoice,
  advisors,
  familyTree,
  messageTranslator,
  documentScanner,
  marriageDocument,
  phoneUnlock,
}

class NgmyStripePayments {
  static const String docShareOrgUrl = 'https://buy.stripe.com/eVq9AT5Rvggh8kb3q5b7y08';
  static const String invoiceUrl = 'https://buy.stripe.com/dRm6oHeo16FHeIzaSxb7y07';
  static const String advisorsUrl = 'https://buy.stripe.com/cNi28reo19RTgQH8Kpb7y06';
  static const String familyTreeUrl = 'https://buy.stripe.com/14A5kDfs57JL0RJ3q5b7y05';
  static const String messageTranslatorUrl = 'https://buy.stripe.com/00wfZhbbP3tvgQH6Chb7y04';
  static const String documentScannerUrl = 'https://buy.stripe.com/cNibJ11Bf1ln0RJaSxb7y03';
  static const String marriageDocumentUrl = 'https://buy.stripe.com/28EdR993H3tvdEvf8Nb7y09';
  static const String phoneUnlockUrl = 'https://buy.stripe.com/5kQeVd2Fjggh9ofd0Fb7y0a';

  static const int invoiceFreeTrialDays = 3;
  static const int advisorFreeMinutes = 30;
  static const int dayTrialHours = 24;
  static const int marriageSessionHours = 4;
  static const int phoneUnlockAccessDays = 10;
  static const int monthlyAccessDays = 30;

  /// How long a redirect-only unlock lasts before Supabase has to confirm it.
  /// Keeps a real buyer working while the webhook lands, without letting anyone
  /// unlock a feature just by visiting the success URL by hand.
  static const Duration provisionalAccessWindow = Duration(minutes: 60);

  static const _accessPrefix = 'ngmy_stripe_until_';
  static const _provisionalPrefix = 'ngmy_stripe_prov_';
  static const _invoiceTrialPrefix = 'ngmy_invoice_trial_start_';
  static const _dayTrialPrefix = 'ngmy_stripe_day_trial_';
  static const _pendingProductKey = 'ngmy_pay_pending_product';
  static const _pendingEmailKey = 'ngmy_pay_pending_email';
  static const _pendingStartedKey = 'ngmy_pay_pending_started';

  static bool isAdmin(dynamic user) {
    try {
      return (user as dynamic).isAdmin == true;
    } catch (_) {
      return false;
    }
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static String _productKey(NgmyStripeProduct product) => product.name;

  static String productSlug(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return 'doc_share_org';
      case NgmyStripeProduct.invoice:
        return 'invoice';
      case NgmyStripeProduct.advisors:
        return 'advisors';
      case NgmyStripeProduct.familyTree:
        return 'family_tree';
      case NgmyStripeProduct.messageTranslator:
        return 'translator';
      case NgmyStripeProduct.documentScanner:
        return 'scanner';
      case NgmyStripeProduct.marriageDocument:
        return 'marriage';
      case NgmyStripeProduct.phoneUnlock:
        return 'phone_unlock';
    }
  }

  static NgmyStripeProduct? productFromSlug(String slug) {
    switch (slug.trim().toLowerCase()) {
      case 'doc_share_org':
        return NgmyStripeProduct.docShareOrg;
      case 'invoice':
        return NgmyStripeProduct.invoice;
      case 'advisors':
        return NgmyStripeProduct.advisors;
      case 'family_tree':
        return NgmyStripeProduct.familyTree;
      case 'translator':
        return NgmyStripeProduct.messageTranslator;
      case 'scanner':
        return NgmyStripeProduct.documentScanner;
      case 'marriage':
        return NgmyStripeProduct.marriageDocument;
      case 'phone_unlock':
        return NgmyStripeProduct.phoneUnlock;
      default:
        return null;
    }
  }

  static String checkoutUrl(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return docShareOrgUrl;
      case NgmyStripeProduct.invoice:
        return invoiceUrl;
      case NgmyStripeProduct.advisors:
        return advisorsUrl;
      case NgmyStripeProduct.familyTree:
        return familyTreeUrl;
      case NgmyStripeProduct.messageTranslator:
        return messageTranslatorUrl;
      case NgmyStripeProduct.documentScanner:
        return documentScannerUrl;
      case NgmyStripeProduct.marriageDocument:
        return marriageDocumentUrl;
      case NgmyStripeProduct.phoneUnlock:
        return phoneUnlockUrl;
    }
  }

  /// Stripe only allows [A-Za-z0-9_-] in client_reference_id, so the account email
  /// rides along base64url-encoded and the webhook decodes it.
  static String checkoutReference(String email, NgmyStripeProduct product) {
    final slug = productSlug(product);
    final normalized = _emailKey(email);
    if (normalized.isEmpty) return slug;
    final encoded = base64Url.encode(utf8.encode(normalized)).replaceAll('=', '');
    return '$slug--$encoded';
  }

  /// Stripe Payment Link carrying the product and the NGMY account that must be
  /// credited, so access lands on the right account no matter what email the buyer
  /// types on Stripe's page.
  static String checkoutUrlFor(String email, NgmyStripeProduct product) {
    final base = checkoutUrl(product);
    final uri = Uri.parse(base);
    final params = Map<String, String>.from(uri.queryParameters);
    final normalized = _emailKey(email);
    if (normalized.isNotEmpty) {
      params['prefilled_email'] = normalized;
    }
    params['client_reference_id'] = checkoutReference(email, product);
    return uri.replace(queryParameters: params).toString();
  }

  /// Live Stripe prices, in cents.
  static int priceCents(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return 10000;
      case NgmyStripeProduct.invoice:
        return 799;
      case NgmyStripeProduct.advisors:
        return 599;
      case NgmyStripeProduct.familyTree:
        return 1099;
      case NgmyStripeProduct.messageTranslator:
        return 299;
      case NgmyStripeProduct.documentScanner:
        return 299;
      case NgmyStripeProduct.marriageDocument:
        return 2599;
      case NgmyStripeProduct.phoneUnlock:
        return 100;
    }
  }

  static String priceLabel(NgmyStripeProduct product) {
    final cents = priceCents(product);
    final dollars = cents ~/ 100;
    final rem = cents % 100;
    return rem == 0 ? '\$$dollars' : '\$$dollars.${rem.toString().padLeft(2, '0')}';
  }

  static String durationLabel(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.marriageDocument:
        return '4 hours';
      case NgmyStripeProduct.phoneUnlock:
        return '10 days';
      default:
        return '30 days';
    }
  }

  /// Each feature gets its own accent pair so the dialog feels made for it.
  static List<Color> productAccent(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return const [Color(0xFF38BDF8), Color(0xFF6366F1)];
      case NgmyStripeProduct.invoice:
        return const [Color(0xFF34D399), Color(0xFF06B6D4)];
      case NgmyStripeProduct.advisors:
        return const [Color(0xFFFBBF24), Color(0xFFF97316)];
      case NgmyStripeProduct.familyTree:
        return const [Color(0xFF4ADE80), Color(0xFF14B8A6)];
      case NgmyStripeProduct.messageTranslator:
        return const [Color(0xFF22D3EE), Color(0xFF3B82F6)];
      case NgmyStripeProduct.documentScanner:
        return const [Color(0xFFA78BFA), Color(0xFF6366F1)];
      case NgmyStripeProduct.marriageDocument:
        return const [Color(0xFFFB7185), Color(0xFFEC4899)];
      case NgmyStripeProduct.phoneUnlock:
        return const [Color(0xFF818CF8), Color(0xFFA855F7)];
    }
  }

  static String paymentSuccessUrl(NgmyStripeProduct product) =>
      'https://ngmy.org/?ngmy_pay_ok=1&ngmy_pay=${productSlug(product)}';

  static String productTitle(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return 'Doc Share — Organization';
      case NgmyStripeProduct.invoice:
        return 'NGMY Invoice';
      case NgmyStripeProduct.advisors:
        return 'NGMY Advisors';
      case NgmyStripeProduct.familyTree:
        return 'Family Tree';
      case NgmyStripeProduct.messageTranslator:
        return 'Message Translator';
      case NgmyStripeProduct.documentScanner:
        return 'Document Scanner';
      case NgmyStripeProduct.marriageDocument:
        return 'Marriage Documents';
      case NgmyStripeProduct.phoneUnlock:
        return 'Phone Unlock';
    }
  }

  static IconData productIcon(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return Icons.apartment_rounded;
      case NgmyStripeProduct.invoice:
        return Icons.receipt_long_rounded;
      case NgmyStripeProduct.advisors:
        return Icons.forum_rounded;
      case NgmyStripeProduct.familyTree:
        return Icons.account_tree_rounded;
      case NgmyStripeProduct.messageTranslator:
        return Icons.translate_rounded;
      case NgmyStripeProduct.documentScanner:
        return Icons.document_scanner_rounded;
      case NgmyStripeProduct.marriageDocument:
        return Icons.favorite_rounded;
      case NgmyStripeProduct.phoneUnlock:
        return Icons.lock_open_rounded;
    }
  }

  static String productSubtitle(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return 'Organization license — team access codes and member logins.';
      case NgmyStripeProduct.invoice:
        return 'Monthly access to Premium and Luxury invoice templates.';
      case NgmyStripeProduct.advisors:
        return 'Unlimited advisor chat for 30 days.';
      case NgmyStripeProduct.familyTree:
        return 'Create family trees and upload photos for 30 days.';
      case NgmyStripeProduct.messageTranslator:
        return 'Unlimited message translations for 30 days.';
      case NgmyStripeProduct.documentScanner:
        return 'Unlimited document scans for 30 days.';
      case NgmyStripeProduct.marriageDocument:
        return 'Edit marriage documents for 4 hours after payment.';
      case NgmyStripeProduct.phoneUnlock:
        return 'Instant access to Phone Unlock for 10 days after payment.';
    }
  }

  static bool isOneTimePayProduct(NgmyStripeProduct product) =>
      product == NgmyStripeProduct.marriageDocument || product == NgmyStripeProduct.phoneUnlock;

  static bool isSubscribeProduct(NgmyStripeProduct product) => !isOneTimePayProduct(product);

  static String actionLabel(NgmyStripeProduct product) =>
      isSubscribeProduct(product) ? 'Subscribe' : 'Pay';

  static Future<DateTime?> _accessUntil(String email, NgmyStripeProduct product) async {
    final key = _emailKey(email);
    if (key.isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('$_accessPrefix${_productKey(product)}_$key');
    if (raw == null || raw.isEmpty) return null;
    return DateTime.tryParse(raw);
  }

  static Future<void> _setAccessUntil(String email, NgmyStripeProduct product, DateTime until) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      '$_accessPrefix${_productKey(product)}_$key',
      until.toUtc().toIso8601String(),
    );
  }

  /// Local cache write (also used when syncing from Supabase webhook records).
  static Future<void> cacheAccessUntil(String email, NgmyStripeProduct product, DateTime until) =>
      _setAccessUntil(email, product, until);

  static Future<DateTime?> _provisionalUntil(String email, NgmyStripeProduct product) async {
    final key = _emailKey(email);
    if (key.isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('$_provisionalPrefix${_productKey(product)}_$key');
    if (raw == null || raw.isEmpty) return null;
    return DateTime.tryParse(raw);
  }

  static Future<void> _setProvisional(String email, NgmyStripeProduct product) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      '$_provisionalPrefix${_productKey(product)}_$key',
      DateTime.now().toUtc().add(provisionalAccessWindow).toIso8601String(),
    );
  }

  static Future<void> _clearProvisional(String email, NgmyStripeProduct product) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('$_provisionalPrefix${_productKey(product)}_$key');
  }

  /// Supabase is the source of truth, so paid access follows the account onto any
  /// device. The local copy is only an offline cache of what the cloud last said,
  /// plus a short provisional window right after checkout.
  static Future<bool> hasActiveAccess(String email, NgmyStripeProduct product) async {
    final cloudUntil = await NgmyStripeCloud.syncAccessFromCloud(email, productSlug(product));
    if (cloudUntil != null) {
      await _setAccessUntil(email, product, cloudUntil);
      await _clearProvisional(email, product);
      return true;
    }

    final now = DateTime.now();
    final cached = await _accessUntil(email, product);
    if (cached != null && cached.isAfter(now)) return true;

    final provisional = await _provisionalUntil(email, product);
    return provisional != null && provisional.isAfter(now);
  }

  /// Pull all paid-feature access for a signed-in user from Supabase. Called on
  /// launch, on resume and right after login so a second device restores instantly.
  static Future<void> syncAllAccessFromCloud(String email) async {
    final active = await NgmyStripeCloud.fetchAllActiveAccess(email);
    for (final entry in active.entries) {
      final product = productFromSlug(entry.key);
      if (product == null) continue;
      await _setAccessUntil(email, product, entry.value);
      await _clearProvisional(email, product);
    }
  }

  /// Returning from checkout only opens a short provisional window. The real
  /// duration always comes from Supabase once Stripe's webhook confirms the
  /// payment, so the success URL alone can never buy lasting access.
  static Future<void> _grantForProduct(String email, NgmyStripeProduct product) =>
      _setProvisional(email, product);

  static Future<void> _setPendingCheckout(String email, NgmyStripeProduct product) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_pendingProductKey, _productKey(product));
    await prefs.setString(_pendingEmailKey, _emailKey(email));
    await prefs.setString(_pendingStartedKey, DateTime.now().toUtc().toIso8601String());
  }

  static Future<void> _clearPendingCheckout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_pendingProductKey);
    await prefs.remove(_pendingEmailKey);
    await prefs.remove(_pendingStartedKey);
  }

  static Future<NgmyStripeProduct?> _productFromPending(SharedPreferences prefs) async {
    final pending = prefs.getString(_pendingProductKey);
    if (pending == null || pending.isEmpty) return null;
    for (final p in NgmyStripeProduct.values) {
      if (p.name == pending) return p;
    }
    return null;
  }

  static Future<bool> _grantFromReturnData({
    required String slug,
    required String emailFromUrl,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    var product = productFromSlug(slug);
    product ??= await _productFromPending(prefs);
    if (product == null) return false;

    final email = _emailKey(
      emailFromUrl.isNotEmpty ? emailFromUrl : (prefs.getString(_pendingEmailKey) ?? ''),
    );
    if (email.isEmpty) return false;

    await _grantForProduct(email, product);
    await _clearPendingCheckout();
    ngmyClearPaymentQueryFromUrl();
    return true;
  }

  static Future<bool> _processPaymentReturnUri(Uri u) async {
    if (u.queryParameters['ngmy_pay_ok'] != '1') return false;
    return _grantFromReturnData(
      slug: u.queryParameters['ngmy_pay'] ?? '',
      emailFromUrl: u.queryParameters['ngmy_pay_email'] ?? '',
    );
  }

  /// Call on app start / resume — unlocks access when checkout redirects back to ngmy.org.
  static Future<bool> processPaymentReturnFromUrl([Uri? uri]) async {
    ngmyCapturePaymentReturnInPage();

    final candidates = <Uri>{uri ?? Uri.base};
    final webUri = ngmyPaymentReturnUri();
    if (webUri != null) candidates.add(webUri);

    for (final u in candidates) {
      if (await _processPaymentReturnUri(u)) return true;
    }

    final stored = ngmyConsumeStoredPaymentReturn();
    if (stored != null && stored['ok'] == true) {
      final at = stored['at'];
      if (at is num) {
        final age = DateTime.now().millisecondsSinceEpoch - at.toInt();
        if (age > const Duration(hours: 6).inMilliseconds) return false;
      }
      return _grantFromReturnData(
        slug: stored['pay']?.toString() ?? '',
        emailFromUrl: stored['email']?.toString() ?? '',
      );
    }

    return false;
  }

  static Future<DateTime?> accessUntil(String email, NgmyStripeProduct product) async {
    final confirmed = await _accessUntil(email, product);
    final provisional = await _provisionalUntil(email, product);
    if (confirmed == null) return provisional;
    if (provisional == null) return confirmed;
    return confirmed.isAfter(provisional) ? confirmed : provisional;
  }

  static Future<DateTime?> marriageSessionUntil(String email) =>
      accessUntil(email, NgmyStripeProduct.marriageDocument);

  static Future<Duration?> marriageSessionRemaining(String email) async {
    final until = await marriageSessionUntil(email);
    if (until == null) return null;
    final left = until.difference(DateTime.now());
    if (left.isNegative) return Duration.zero;
    return left;
  }

  static Future<bool> hasMarriageSession(String email) =>
      hasActiveAccess(email, NgmyStripeProduct.marriageDocument);

  static Future<bool> hasPhoneUnlockAccess(String email) =>
      hasActiveAccess(email, NgmyStripeProduct.phoneUnlock);

  static bool marriageDocDeckKind(String? deckKind) {
    if (deckKind == null) return false;
    return deckKind == 'marriage_agreement' ||
        deckKind == 'hati_kuhowa' ||
        deckKind == 'hati_kuhoweya' ||
        deckKind == 'hati_malipo_awamu';
  }

  static Future<DateTime?> _invoiceTrialStart(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('$_invoiceTrialPrefix$key');
    if (raw == null || raw.isEmpty) return null;
    return DateTime.tryParse(raw);
  }

  static Future<void> ensureInvoiceTrialStarted(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    if (await _invoiceTrialStart(email) != null) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('$_invoiceTrialPrefix$key', DateTime.now().toUtc().toIso8601String());
  }

  static Future<bool> hasInvoiceTrialAccess(String email) async {
    final started = await _invoiceTrialStart(email);
    if (started == null) return true;
    return DateTime.now().difference(started).inDays < invoiceFreeTrialDays;
  }

  static Future<int> invoiceTrialDaysLeft(String email) async {
    final started = await _invoiceTrialStart(email);
    if (started == null) return invoiceFreeTrialDays;
    final used = DateTime.now().difference(started).inDays;
    return (invoiceFreeTrialDays - used).clamp(0, invoiceFreeTrialDays);
  }

  static Future<DateTime?> _dayTrialStart(String email, NgmyStripeProduct product) async {
    final key = _emailKey(email);
    if (key.isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('$_dayTrialPrefix${_productKey(product)}_$key');
    if (raw == null || raw.isEmpty) return null;
    return DateTime.tryParse(raw);
  }

  static Future<void> ensureDayTrialStarted(String email, NgmyStripeProduct product) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    if (await _dayTrialStart(email, product) != null) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      '$_dayTrialPrefix${_productKey(product)}_$key',
      DateTime.now().toUtc().toIso8601String(),
    );
  }

  static Future<bool> hasDayTrialAccess(String email, NgmyStripeProduct product) async {
    final started = await _dayTrialStart(email, product);
    if (started == null) return true;
    return DateTime.now().difference(started).inHours < dayTrialHours;
  }

  static Future<bool> needsPayment({
    required String email,
    required NgmyStripeProduct product,
    bool isAdmin = false,
    bool checkDayTrial = false,
    bool checkInvoiceTrial = false,
  }) async {
    if (isAdmin) return false;
    if (await hasActiveAccess(email, product)) return false;
    if (checkInvoiceTrial && product == NgmyStripeProduct.invoice) {
      return !await hasInvoiceTrialAccess(email);
    }
    if (checkDayTrial &&
        (product == NgmyStripeProduct.messageTranslator || product == NgmyStripeProduct.documentScanner)) {
      return !await hasDayTrialAccess(email, product);
    }
    return true;
  }

  static Future<void> startCheckout(String email, NgmyStripeProduct product) async {
    await _setPendingCheckout(email, product);
    ngmyLaunchPaymentCheckout(checkoutUrlFor(email, product));
  }

  /// Shows pay/subscribe dialog only when access is expired.
  static Future<bool> ensurePaid({
    required BuildContext context,
    required NgmyStripeProduct product,
    required String email,
    bool isAdmin = false,
    bool checkDayTrial = false,
    bool checkInvoiceTrial = false,
    String? title,
    String? message,
  }) async {
    if (isAdmin) return true;
    await processPaymentReturnFromUrl();
    final cloudUntil = await NgmyStripeCloud.syncAccessFromCloud(email, productSlug(product));
    if (cloudUntil != null) {
      await _setAccessUntil(email, product, cloudUntil);
    }

    if (!await needsPayment(
      email: email,
      product: product,
      isAdmin: isAdmin,
      checkDayTrial: checkDayTrial,
      checkInvoiceTrial: checkInvoiceTrial,
    )) {
      return true;
    }

    if (!context.mounted) return false;
    final opened = await showNgmyPaymentDialog(
      context: context,
      product: product,
      email: email,
      title: title,
      message: message,
    );
    if (opened != true) return false;

    await processPaymentReturnFromUrl();
    final waited = await NgmyStripeCloud.waitForCloudAccess(
      email: email,
      productSlug: productSlug(product),
    );
    if (waited != null) {
      await _setAccessUntil(email, product, waited);
    }

    return !await needsPayment(
      email: email,
      product: product,
      isAdmin: isAdmin,
      checkDayTrial: checkDayTrial,
      checkInvoiceTrial: checkInvoiceTrial,
    );
  }

  static Future<bool> showNgmyPaymentDialog({
    required BuildContext context,
    required NgmyStripeProduct product,
    required String email,
    String? title,
    String? message,
  }) {
    return showDialog<bool>(
      context: context,
      barrierDismissible: true,
      barrierColor: Colors.black.withValues(alpha: 0.78),
      builder: (ctx) => _NgmyPaymentDialog(
        product: product,
        email: email,
        title: title ?? productTitle(product),
        message: message ?? productSubtitle(product),
      ),
    ).then((v) => v == true);
  }
}

class _NgmyPaymentDialog extends StatelessWidget {
  const _NgmyPaymentDialog({
    required this.product,
    required this.email,
    required this.title,
    required this.message,
  });

  final NgmyStripeProduct product;
  final String email;
  final String title;
  final String message;

  static const _card = Color(0xFF0D1017);
  static const _muted = Color(0xFF7C8499);

  Widget _perk(Color accent, IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 24,
            height: 24,
            decoration: BoxDecoration(
              color: accent.withValues(alpha: 0.16),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Icon(icon, size: 14, color: accent),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.only(top: 3),
              child: Text(
                text,
                style: const TextStyle(
                  color: Color(0xFFB6BDCC),
                  fontSize: 12.5,
                  height: 1.35,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final colors = NgmyStripePayments.productAccent(product);
    final accent = colors.first;
    final accent2 = colors.last;
    final isOneTimePay = NgmyStripePayments.isOneTimePayProduct(product);
    final action = NgmyStripePayments.actionLabel(product);
    final price = NgmyStripePayments.priceLabel(product);
    final duration = NgmyStripePayments.durationLabel(product);
    final isMarriage = product == NgmyStripeProduct.marriageDocument;

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 28),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 396),
        child: DecoratedBox(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(30),
            boxShadow: [
              BoxShadow(
                color: accent.withValues(alpha: 0.26),
                blurRadius: 56,
                spreadRadius: -8,
                offset: const Offset(0, 20),
              ),
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.6),
                blurRadius: 30,
                offset: const Offset(0, 12),
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(30),
            child: Container(
              decoration: BoxDecoration(
                color: _card,
                border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                borderRadius: BorderRadius.circular(30),
              ),
              child: Stack(
                children: [
                  // Colour wash bleeding down from the top of the card.
                  Positioned(
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 210,
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: [
                            accent.withValues(alpha: 0.22),
                            accent2.withValues(alpha: 0.07),
                            Colors.transparent,
                          ],
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    top: -70,
                    right: -50,
                    child: Container(
                      width: 190,
                      height: 190,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: RadialGradient(
                          colors: [accent2.withValues(alpha: 0.3), Colors.transparent],
                        ),
                      ),
                    ),
                  ),
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(26, 26, 26, 20),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Container(
                                width: 54,
                                height: 54,
                                decoration: BoxDecoration(
                                  gradient: LinearGradient(
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                    colors: [accent, accent2],
                                  ),
                                  borderRadius: BorderRadius.circular(18),
                                  boxShadow: [
                                    BoxShadow(
                                      color: accent.withValues(alpha: 0.45),
                                      blurRadius: 18,
                                      offset: const Offset(0, 8),
                                    ),
                                  ],
                                ),
                                child: Icon(
                                  NgmyStripePayments.productIcon(product),
                                  color: Colors.white,
                                  size: 27,
                                ),
                              ),
                              const Spacer(),
                              Container(
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 12,
                                  vertical: 6,
                                ),
                                decoration: BoxDecoration(
                                  color: Colors.white.withValues(alpha: 0.07),
                                  borderRadius: BorderRadius.circular(30),
                                  border: Border.all(
                                    color: Colors.white.withValues(alpha: 0.12),
                                  ),
                                ),
                                child: Text(
                                  isOneTimePay ? 'ONE-TIME' : 'MONTHLY',
                                  style: TextStyle(
                                    color: Colors.white.withValues(alpha: 0.82),
                                    fontSize: 9.5,
                                    fontWeight: FontWeight.w800,
                                    letterSpacing: 1.4,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 22),
                          Text(
                            title,
                            style: const TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.w800,
                              fontSize: 23,
                              height: 1.15,
                              letterSpacing: -0.4,
                            ),
                          ),
                          const SizedBox(height: 9),
                          Text(
                            message,
                            style: const TextStyle(
                              color: Color(0xFF9BA3B5),
                              fontSize: 13,
                              height: 1.45,
                            ),
                          ),
                          const SizedBox(height: 20),
                          // Wrap so the chip drops below the price on narrow phones
                          // instead of colliding with it.
                          Wrap(
                            spacing: 11,
                            runSpacing: 10,
                            crossAxisAlignment: WrapCrossAlignment.center,
                            children: [
                              ShaderMask(
                                shaderCallback: (bounds) => LinearGradient(
                                  colors: [Colors.white, accent],
                                ).createShader(bounds),
                                child: Text(
                                  price,
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.w900,
                                    fontSize: 42,
                                    height: 1,
                                    letterSpacing: -1.5,
                                  ),
                                ),
                              ),
                              Container(
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 11,
                                  vertical: 6,
                                ),
                                decoration: BoxDecoration(
                                  color: accent.withValues(alpha: 0.14),
                                  borderRadius: BorderRadius.circular(30),
                                  border: Border.all(
                                    color: accent.withValues(alpha: 0.32),
                                  ),
                                ),
                                child: Text(
                                  '$duration access',
                                  style: TextStyle(
                                    color: accent,
                                    fontSize: 11.5,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 22),
                          Container(
                            padding: const EdgeInsets.fromLTRB(15, 15, 15, 4),
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.035),
                              borderRadius: BorderRadius.circular(18),
                              border: Border.all(
                                color: Colors.white.withValues(alpha: 0.06),
                              ),
                            ),
                            child: Column(
                              children: [
                                _perk(
                                  accent,
                                  Icons.bolt_rounded,
                                  isMarriage
                                      ? 'Opens the moment you pay, with a timer while you work'
                                      : 'Opens the moment you pay — no waiting',
                                ),
                                _perk(
                                  accent,
                                  Icons.devices_rounded,
                                  'Sign in on any phone or computer and it is still unlocked',
                                ),
                                _perk(
                                  accent,
                                  Icons.verified_user_rounded,
                                  'Encrypted checkout — your card details stay private',
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 22),
                          _GradientPayButton(
                            label: '$action $price',
                            colors: [accent, accent2],
                            onPressed: () async {
                              await NgmyStripePayments.startCheckout(email, product);
                              if (context.mounted) Navigator.pop(context, true);
                            },
                          ),
                          if (email.trim().isNotEmpty) ...[
                            const SizedBox(height: 13),
                            Center(
                              child: Text(
                                'Unlocks on $email',
                                textAlign: TextAlign.center,
                                style: const TextStyle(
                                  color: Color(0xFF5E6577),
                                  fontSize: 11,
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                          ],
                          const SizedBox(height: 4),
                          Center(
                            child: TextButton(
                              onPressed: () => Navigator.pop(context, false),
                              style: TextButton.styleFrom(
                                foregroundColor: _muted,
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 18,
                                  vertical: 8,
                                ),
                              ),
                              child: const Text(
                                'Maybe later',
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Gradient CTA with a press response — FilledButton cannot carry a gradient.
class _GradientPayButton extends StatefulWidget {
  const _GradientPayButton({
    required this.label,
    required this.colors,
    required this.onPressed,
  });

  final String label;
  final List<Color> colors;
  final Future<void> Function() onPressed;

  @override
  State<_GradientPayButton> createState() => _GradientPayButtonState();
}

class _GradientPayButtonState extends State<_GradientPayButton> {
  bool _down = false;
  bool _busy = false;

  Future<void> _fire() async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await widget.onPressed();
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => setState(() => _down = true),
      onTapUp: (_) => setState(() => _down = false),
      onTapCancel: () => setState(() => _down = false),
      onTap: _fire,
      child: AnimatedScale(
        scale: _down ? 0.975 : 1,
        duration: const Duration(milliseconds: 110),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 17),
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.centerLeft,
              end: Alignment.centerRight,
              colors: widget.colors,
            ),
            borderRadius: BorderRadius.circular(17),
            boxShadow: [
              BoxShadow(
                color: widget.colors.first.withValues(alpha: 0.42),
                blurRadius: 22,
                offset: const Offset(0, 9),
              ),
            ],
          ),
          child: Center(
            child: _busy
                ? const SizedBox(
                    width: 19,
                    height: 19,
                    child: CircularProgressIndicator(
                      strokeWidth: 2.2,
                      valueColor: AlwaysStoppedAnimation(Colors.white),
                    ),
                  )
                : Text(
                    widget.label,
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w800,
                      fontSize: 16,
                      letterSpacing: 0.2,
                    ),
                  ),
          ),
        ),
      ),
    );
  }
}

class NgmyMarriageSessionTimerBar extends StatefulWidget {
  const NgmyMarriageSessionTimerBar({
    super.key,
    required this.email,
    required this.isAdmin,
    this.onExpired,
  });

  final String email;
  final bool isAdmin;
  final VoidCallback? onExpired;

  @override
  State<NgmyMarriageSessionTimerBar> createState() => _NgmyMarriageSessionTimerBarState();
}

class _NgmyMarriageSessionTimerBarState extends State<NgmyMarriageSessionTimerBar> {
  Timer? _tick;
  Duration _remaining = Duration.zero;
  bool _firedExpired = false;

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
    _tick = Timer.periodic(const Duration(seconds: 1), (_) => unawaited(_refresh()));
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  Future<void> _refresh() async {
    if (widget.isAdmin) {
      if (mounted) setState(() => _remaining = const Duration(hours: 999));
      return;
    }
    final left = await NgmyStripePayments.marriageSessionRemaining(widget.email);
    if (!mounted) return;
    final rem = left ?? Duration.zero;
    setState(() => _remaining = rem);
    if (rem <= Duration.zero && !_firedExpired) {
      _firedExpired = true;
      widget.onExpired?.call();
    }
  }

  String _format(Duration d) {
    if (d.inHours >= 999) return 'Admin — unlimited';
    final h = d.inHours;
    final m = d.inMinutes.remainder(60);
    final s = d.inSeconds.remainder(60);
    if (h > 0) return '${h}h ${m.toString().padLeft(2, '0')}m ${s.toString().padLeft(2, '0')}s left';
    return '${m.toString().padLeft(2, '0')}:${s.toString().padLeft(2, '0')} left';
  }

  @override
  Widget build(BuildContext context) {
    final urgent = _remaining.inMinutes < 30 && _remaining.inHours < 999;
    final color = urgent ? const Color(0xFFEF4444) : const Color(0xFFB8860B);
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.fromLTRB(10, 6, 10, 0),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: color.withValues(alpha: 0.55)),
      ),
      child: Row(
        children: [
          Icon(Icons.timer_outlined, color: color, size: 20),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              'Marriage document session · ${_format(_remaining)}',
              style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 13),
            ),
          ),
        ],
      ),
    );
  }
}
