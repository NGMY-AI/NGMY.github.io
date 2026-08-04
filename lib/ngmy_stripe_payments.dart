import 'dart:async';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_stripe_checkout_launch_stub.dart'
    if (dart.library.html) 'ngmy_stripe_checkout_launch_web.dart';
import 'ngmy_stripe_return_capture_stub.dart'
    if (dart.library.html) 'ngmy_stripe_return_capture_web.dart';

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

  static const _accessPrefix = 'ngmy_stripe_until_';
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

  /// Stripe Payment Link with prefilled email + product slug for return handling.
  static String checkoutUrlFor(String email, NgmyStripeProduct product) {
    final base = checkoutUrl(product);
    final uri = Uri.parse(base);
    final params = Map<String, String>.from(uri.queryParameters);
    final normalized = _emailKey(email);
    if (normalized.isNotEmpty) {
      params['prefilled_email'] = normalized;
    }
    params['client_reference_id'] = productSlug(product);
    return uri.replace(queryParameters: params).toString();
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

  static Future<bool> hasActiveAccess(String email, NgmyStripeProduct product) async {
    final until = await _accessUntil(email, product);
    return until != null && until.isAfter(DateTime.now());
  }

  static Future<void> grantMonthlyAccess(String email, NgmyStripeProduct product, {int days = monthlyAccessDays}) async {
    final existing = await _accessUntil(email, product);
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    await _setAccessUntil(email, product, base.add(Duration(days: days)));
  }

  static Future<void> grantMarriageSession(String email) async {
    await _setAccessUntil(
      email,
      NgmyStripeProduct.marriageDocument,
      DateTime.now().add(const Duration(hours: marriageSessionHours)),
    );
  }

  static Future<void> grantPhoneUnlockAccess(String email) async {
    await _setAccessUntil(
      email,
      NgmyStripeProduct.phoneUnlock,
      DateTime.now().add(const Duration(days: phoneUnlockAccessDays)),
    );
  }

  static Future<void> _grantForProduct(String email, NgmyStripeProduct product) async {
    switch (product) {
      case NgmyStripeProduct.marriageDocument:
        await grantMarriageSession(email);
      case NgmyStripeProduct.phoneUnlock:
        await grantPhoneUnlockAccess(email);
      default:
        await grantMonthlyAccess(email, product);
    }
  }

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

  static Future<DateTime?> accessUntil(String email, NgmyStripeProduct product) =>
      _accessUntil(email, product);

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

  /// Shows pay/subscribe dialog only when access is expired. Never grants without a checkout return.
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

  @override
  Widget build(BuildContext context) {
    const accent = Color(0xFF2563EB);
    const accent2 = Color(0xFF7C3AED);
    final isOneTimePay = NgmyStripePayments.isOneTimePayProduct(product);
    final isMarriage = product == NgmyStripeProduct.marriageDocument;
    final isPhoneUnlock = product == NgmyStripeProduct.phoneUnlock;
    final action = NgmyStripePayments.actionLabel(product);

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 28),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(24),
        child: Material(
          color: const Color(0xFF0B0F18),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
                decoration: const BoxDecoration(
                  gradient: LinearGradient(colors: [Color(0xFF1E3A8A), accent, accent2]),
                ),
                child: Column(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.15),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Text(
                        isOneTimePay ? 'ONE-TIME ACCESS' : 'SUBSCRIPTION',
                        style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 2),
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      title,
                      textAlign: TextAlign.center,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      message,
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 13, height: 1.45),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
                child: Column(
                  children: [
                    if (isMarriage)
                      Container(
                        width: double.infinity,
                        margin: const EdgeInsets.only(bottom: 14),
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: const Color(0xFFB8860B).withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: const Color(0xFFB8860B).withValues(alpha: 0.45)),
                        ),
                        child: const Text(
                          'Complete payment first, then you can edit for 4 hours. A timer shows at the top while you work.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white70, fontSize: 12, height: 1.4, fontWeight: FontWeight.w600),
                        ),
                      ),
                    if (isPhoneUnlock)
                      Container(
                        width: double.infinity,
                        margin: const EdgeInsets.only(bottom: 14),
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: const Color(0xFF0EA5E9).withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: const Color(0xFF0EA5E9).withValues(alpha: 0.45)),
                        ),
                        child: const Text(
                          'Pay once for instant access — no waiting period. Phone Unlock stays open for 10 days, then you can pay again. After paying, return to NGMY — access unlocks automatically.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white70, fontSize: 12, height: 1.4, fontWeight: FontWeight.w600),
                        ),
                      ),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton(
                        onPressed: () async {
                          await NgmyStripePayments.startCheckout(email, product);
                          if (context.mounted) Navigator.pop(context, true);
                        },
                        style: FilledButton.styleFrom(
                          backgroundColor: accent,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: Text(action, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                      ),
                    ),
                    const SizedBox(height: 8),
                    TextButton(
                      onPressed: () => Navigator.pop(context, false),
                      child: Text('Not now', style: TextStyle(color: Colors.white.withValues(alpha: 0.45))),
                    ),
                  ],
                ),
              ),
            ],
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
