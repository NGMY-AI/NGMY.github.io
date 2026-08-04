import 'dart:async';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

/// Stripe Payment Links — replaces NGMY wallet for these products.
/// Admin users never pay. After Stripe checkout, user taps "I've completed payment"
/// to activate access on this device (configure Stripe success URLs when ready for webhooks).
enum NgmyStripeProduct {
  docShareOrg,
  invoice,
  advisors,
  familyTree,
  messageTranslator,
  documentScanner,
  marriageDocument,
}

class NgmyStripePayments {
  static const String docShareOrgUrl = 'https://buy.stripe.com/eVq9AT5Rvggh8kb3q5b7y08';
  static const String invoiceUrl = 'https://buy.stripe.com/dRm6oHeo16FHeIzaSxb7y07';
  static const String advisorsUrl = 'https://buy.stripe.com/cNi28reo19RTgQH8Kpb7y06';
  static const String familyTreeUrl = 'https://buy.stripe.com/14A5kDfs57JL0RJ3q5b7y05';
  static const String messageTranslatorUrl = 'https://buy.stripe.com/00wfZhbbP3tvgQH6Chb7y04';
  static const String documentScannerUrl = 'https://buy.stripe.com/cNibJ11Bf1ln0RJaSxb7y03';
  static const String marriageDocumentUrl = 'https://buy.stripe.com/28EdR993H3tvdEvf8Nb7y09';

  static const int invoiceFreeTrialDays = 3;
  static const int advisorFreeMinutes = 30;
  static const int dayTrialHours = 24;
  static const int marriageSessionHours = 4;
  static const int monthlyAccessDays = 30;

  static const _accessPrefix = 'ngmy_stripe_until_';
  static const _invoiceTrialPrefix = 'ngmy_invoice_trial_start_';
  static const _dayTrialPrefix = 'ngmy_stripe_day_trial_';

  static bool isAdmin(dynamic user) {
    try {
      return (user as dynamic).isAdmin == true;
    } catch (_) {
      return false;
    }
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static String _productKey(NgmyStripeProduct product) => product.name;

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
    }
  }

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
    }
  }

  static String productSubtitle(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return 'Monthly organization license — team access codes & member logins.';
      case NgmyStripeProduct.invoice:
        return 'Monthly access to Premium & Luxury invoice templates.';
      case NgmyStripeProduct.advisors:
        return 'Monthly unlimited advisor chat.';
      case NgmyStripeProduct.familyTree:
        return 'Monthly access — create trees and upload family photos.';
      case NgmyStripeProduct.messageTranslator:
        return 'Monthly unlimited message translations.';
      case NgmyStripeProduct.documentScanner:
        return 'Monthly unlimited document scans.';
      case NgmyStripeProduct.marriageDocument:
        return 'One-time payment — edit marriage documents for 4 hours.';
    }
  }

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
    final key = _emailKey(email);
    if (key.isEmpty) return;
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

  static bool marriageDocDeckKind(String? deckKind) {
    if (deckKind == null) return false;
    return deckKind == 'marriage_agreement' ||
        deckKind == 'hati_kuhowa' ||
        deckKind == 'hati_kuhoweya' ||
        deckKind == 'hati_malipo_awamu';
  }

  // ── Invoice 3-day free trial ──

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
    if (started == null) return true; // not started yet — first use is free
    return DateTime.now().difference(started).inDays < invoiceFreeTrialDays;
  }

  static Future<int> invoiceTrialDaysLeft(String email) async {
    final started = await _invoiceTrialStart(email);
    if (started == null) return invoiceFreeTrialDays;
    final used = DateTime.now().difference(started).inDays;
    return (invoiceFreeTrialDays - used).clamp(0, invoiceFreeTrialDays);
  }

  // ── 1-day free trial (translator + scanner) ──

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

  static Future<bool> needsStripePayment({
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

  static Future<void> openCheckout(NgmyStripeProduct product) async {
    final uri = Uri.parse(checkoutUrl(product));
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  /// Paywall: opens Stripe, user confirms payment, access is granted locally.
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
    if (!await needsStripePayment(
      email: email,
      product: product,
      isAdmin: isAdmin,
      checkDayTrial: checkDayTrial,
      checkInvoiceTrial: checkInvoiceTrial,
    )) {
      return true;
    }

    final confirmed = await showNgmyStripeCheckoutDialog(
      context: context,
      product: product,
      title: title,
      message: message,
    );
    if (!confirmed) return false;

    if (product == NgmyStripeProduct.marriageDocument) {
      await grantMarriageSession(email);
    } else {
      await grantMonthlyAccess(email, product);
    }
    return true;
  }

  static Future<bool> showNgmyStripeCheckoutDialog({
    required BuildContext context,
    required NgmyStripeProduct product,
    String? title,
    String? message,
  }) {
    return showDialog<bool>(
      context: context,
      barrierDismissible: false,
      barrierColor: Colors.black.withValues(alpha: 0.78),
      builder: (ctx) => _NgmyStripeCheckoutDialog(
        product: product,
        title: title ?? productTitle(product),
        message: message ?? productSubtitle(product),
      ),
    ).then((v) => v == true);
  }
}

class _NgmyStripeCheckoutDialog extends StatefulWidget {
  const _NgmyStripeCheckoutDialog({
    required this.product,
    required this.title,
    required this.message,
  });

  final NgmyStripeProduct product;
  final String title;
  final String message;

  @override
  State<_NgmyStripeCheckoutDialog> createState() => _NgmyStripeCheckoutDialogState();
}

class _NgmyStripeCheckoutDialogState extends State<_NgmyStripeCheckoutDialog> {
  bool _opened = false;

  Future<void> _pay() async {
    setState(() => _opened = true);
    await NgmyStripePayments.openCheckout(widget.product);
  }

  @override
  Widget build(BuildContext context) {
    const stripePurple = Color(0xFF635BFF);
    final isMarriage = widget.product == NgmyStripeProduct.marriageDocument;

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
                  gradient: LinearGradient(
                    colors: [Color(0xFF1A1F71), stripePurple, Color(0xFF7A73FF)],
                  ),
                ),
                child: Column(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.15),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Text(
                        'PAY WITH STRIPE',
                        style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 2),
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      widget.title,
                      textAlign: TextAlign.center,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      widget.message,
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
                          'Pay first, then edit. Your session lasts 4 hours — a timer shows at the top while you work.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white70, fontSize: 12, height: 1.4, fontWeight: FontWeight.w600),
                        ),
                      ),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton.icon(
                        onPressed: _pay,
                        style: FilledButton.styleFrom(
                          backgroundColor: stripePurple,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        icon: const Icon(Icons.open_in_new_rounded),
                        label: Text(_opened ? 'Open Stripe again' : 'Pay with Stripe'),
                      ),
                    ),
                    const SizedBox(height: 10),
                    SizedBox(
                      width: double.infinity,
                      child: OutlinedButton.icon(
                        onPressed: () => Navigator.pop(context, true),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: Colors.white,
                          side: BorderSide(color: Colors.white.withValues(alpha: 0.28)),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        icon: const Icon(Icons.check_circle_outline_rounded),
                        label: const Text("I've completed payment", style: TextStyle(fontWeight: FontWeight.w800)),
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

/// Countdown banner for marriage document editing sessions.
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
