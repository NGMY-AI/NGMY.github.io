import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

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
  menuStudio,
  bioStudio,
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
  static const String menuStudioUrl = 'https://buy.stripe.com/8x2bJ1cfTe892ZR3q5b7y0b';
  static const String bioStudioUrl = 'https://buy.stripe.com/4gM6oHgw97JLbwn1hXb7y0c';

  /// Invoices a free user may create before the paywall. Counted per invoice,
  /// not per day, so someone who only invoices occasionally still gets all three.
  static const int invoiceFreeCount = 3;
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
  static const _invoiceFreeRefsPrefix = 'ngmy_invoice_free_refs_';
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
      case NgmyStripeProduct.menuStudio:
        return 'menu_studio';
      case NgmyStripeProduct.bioStudio:
        return 'bio_studio';
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
      case 'menu_studio':
        return NgmyStripeProduct.menuStudio;
      case 'bio_studio':
        return NgmyStripeProduct.bioStudio;
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
      case NgmyStripeProduct.menuStudio:
        return menuStudioUrl;
      case NgmyStripeProduct.bioStudio:
        return bioStudioUrl;
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
      case NgmyStripeProduct.menuStudio:
        return 1599;
      case NgmyStripeProduct.bioStudio:
        return 399;
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

  /// Each feature gets its own precious-metal pair — [mid, deep] — so the
  /// payment dialog reads as made for that feature rather than generic.
  static List<Color> productAccent(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return const [Color(0xFF8FB8F0), Color(0xFF3B5FC0)]; // sapphire
      case NgmyStripeProduct.invoice:
        return const [Color(0xFFF0C24B), Color(0xFFB07E12)]; // gold
      case NgmyStripeProduct.advisors:
        return const [Color(0xFFF5A742), Color(0xFFC2611A)]; // amber
      case NgmyStripeProduct.familyTree:
        return const [Color(0xFF5FD6A4), Color(0xFF14876A)]; // emerald
      case NgmyStripeProduct.messageTranslator:
        return const [Color(0xFF6FE3F5), Color(0xFF1E88A8)]; // crystal
      case NgmyStripeProduct.documentScanner:
        return const [Color(0xFFB58CF5), Color(0xFF6D3FC4)]; // amethyst
      case NgmyStripeProduct.marriageDocument:
        return const [Color(0xFFF4A98F), Color(0xFFD1476B)]; // rose gold
      case NgmyStripeProduct.phoneUnlock:
        return const [Color(0xFFB3C9E6), Color(0xFF4F6E9E)]; // polished silver
      case NgmyStripeProduct.menuStudio:
        return const [Color(0xFFF0C24B), Color(0xFF8A6110)]; // menu gold
      case NgmyStripeProduct.bioStudio:
        return const [Color(0xFF78B7FF), Color(0xFF285BB8)]; // bio crystal blue
    }
  }

  /// The near-white highlight that sweeps across metal as it catches the light.
  static Color productShine(NgmyStripeProduct product) {
    switch (product) {
      case NgmyStripeProduct.docShareOrg:
        return const Color(0xFFE8F1FF);
      case NgmyStripeProduct.invoice:
        return const Color(0xFFFFF4CB);
      case NgmyStripeProduct.advisors:
        return const Color(0xFFFFEACA);
      case NgmyStripeProduct.familyTree:
        return const Color(0xFFDCFFEF);
      case NgmyStripeProduct.messageTranslator:
        return const Color(0xFFE4FCFF);
      case NgmyStripeProduct.documentScanner:
        return const Color(0xFFF1E4FF);
      case NgmyStripeProduct.marriageDocument:
        return const Color(0xFFFFE6DA);
      case NgmyStripeProduct.phoneUnlock:
        return const Color(0xFFF5FAFF);
      case NgmyStripeProduct.menuStudio:
        return const Color(0xFFFFF4CB);
      case NgmyStripeProduct.bioStudio:
        return const Color(0xFFE9F5FF);
    }
  }

  /// Short, single-line benefits — long sentences ruin the centred layout.
  static List<String> productPerks(NgmyStripeProduct product) {
    return [
      product == NgmyStripeProduct.marriageDocument
          ? 'Opens instantly, with a live timer'
          : 'Unlocks the moment you pay',
      'Works on all your devices',
      'Private, encrypted checkout',
    ];
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
      case NgmyStripeProduct.menuStudio:
        return 'Menu Studio';
      case NgmyStripeProduct.bioStudio:
        return 'Bio Studio';
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
      case NgmyStripeProduct.menuStudio:
        return Icons.restaurant_menu_rounded;
      case NgmyStripeProduct.bioStudio:
        return Icons.badge_rounded;
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
      case NgmyStripeProduct.menuStudio:
        return 'Create and publish unlimited menus for 30 days.';
      case NgmyStripeProduct.bioStudio:
        return 'Publish premium Bios and make unlimited photo changes for 30 days.';
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

  /// Web: another tab wrote the Stripe success receipt into localStorage.
  static void listenForCrossTabPaymentReturn(void Function() onMaybePaid) =>
      ngmyListenForCrossTabPaymentReturn(onMaybePaid);

  /// Web: force the engine to re-measure after leaving an external page.
  static void forceWebViewportResettle() => ngmyForceWebViewportResettle();

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

  /// Invoices already counted against the free allowance, held as content
  /// references rather than a plain tally. Saving an invoice and then
  /// downloading the same one has to spend one of the three, not two, and
  /// re-opening one made earlier must not spend another.
  static Future<List<String>> _invoiceFreeRefs(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return const [];
    final prefs = await SharedPreferences.getInstance();
    return prefs.getStringList('$_invoiceFreeRefsPrefix$key') ?? const [];
  }

  static Future<int> invoiceFreeUsed(String email) async => (await _invoiceFreeRefs(email)).length;

  static Future<int> invoiceFreeLeft(String email) async {
    final used = await invoiceFreeUsed(email);
    return (invoiceFreeCount - used).clamp(0, invoiceFreeCount);
  }

  /// Whether this invoice is still covered by the free allowance, without
  /// spending anything. Safe to call while building the locked-preview UI.
  static Future<bool> hasInvoiceFreeLeft(String email, String invoiceRef) async {
    final refs = await _invoiceFreeRefs(email);
    if (refs.contains(invoiceRef.trim())) return true;
    return refs.length < invoiceFreeCount;
  }

  /// Claims one of the free invoices for [invoiceRef]. Returns false once all
  /// three are spent on other invoices, which is what sends the user to pay.
  static Future<bool> claimInvoiceFree(String email, String invoiceRef) async {
    final key = _emailKey(email);
    final ref = invoiceRef.trim();
    if (key.isEmpty || ref.isEmpty) return false;

    final refs = List<String>.from(await _invoiceFreeRefs(email));
    if (refs.contains(ref)) return true;
    if (refs.length >= invoiceFreeCount) return false;

    refs.add(ref);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList('$_invoiceFreeRefsPrefix$key', refs);
    return true;
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
  }) async {
    if (isAdmin) return false;
    if (await hasActiveAccess(email, product)) return false;
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

class _NgmyPaymentDialog extends StatefulWidget {
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
  State<_NgmyPaymentDialog> createState() => _NgmyPaymentDialogState();
}

class _NgmyPaymentDialogState extends State<_NgmyPaymentDialog>
    with TickerProviderStateMixin {
  static const _card = Color(0xFF0B0E14);
  static const _muted = Color(0xFF7C8499);

  late final AnimationController _entry;
  late final AnimationController _ambient;

  @override
  void initState() {
    super.initState();
    _entry = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 720),
    )..forward();
    _ambient = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 9),
    )..repeat();
  }

  @override
  void dispose() {
    _entry.dispose();
    _ambient.dispose();
    super.dispose();
  }

  /// Rows rise into place one after another instead of all appearing at once.
  Widget _stagger(int index, Widget child) {
    final start = (0.14 + index * 0.07).clamp(0.0, 0.66);
    final anim = CurvedAnimation(
      parent: _entry,
      curve: Interval(
        start,
        (start + 0.44).clamp(0.0, 1.0),
        curve: Curves.easeOutCubic,
      ),
    );
    return AnimatedBuilder(
      animation: anim,
      builder: (context, inner) => Opacity(
        opacity: anim.value.clamp(0.0, 1.0),
        child: Transform.translate(
          offset: Offset(0, 16 * (1 - anim.value)),
          child: inner,
        ),
      ),
      child: child,
    );
  }

  Widget _perk(Color mid, Color shine, String text) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 19,
            height: 19,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [shine, mid],
              ),
            ),
            child: const Icon(Icons.check_rounded, size: 12, color: _card),
          ),
          const SizedBox(width: 9),
          Flexible(
            child: Text(
              text,
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Color(0xFFB9C0CF),
                fontSize: 12.5,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _ornament(Color mid) {
    return Row(
      children: [
        Expanded(
          child: Container(
            height: 1,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [Colors.transparent, mid.withValues(alpha: 0.38)],
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 11),
          child: Transform.rotate(
            angle: math.pi / 4,
            child: Container(
              width: 6,
              height: 6,
              decoration: BoxDecoration(
                color: mid.withValues(alpha: 0.85),
                borderRadius: BorderRadius.circular(1.5),
              ),
            ),
          ),
        ),
        Expanded(
          child: Container(
            height: 1,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [mid.withValues(alpha: 0.38), Colors.transparent],
              ),
            ),
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final palette = NgmyStripePayments.productAccent(widget.product);
    final mid = palette.first;
    final deep = palette.last;
    final shine = NgmyStripePayments.productShine(widget.product);
    final metalText = Color.lerp(mid, Colors.white, 0.55)!;

    final isOneTimePay = NgmyStripePayments.isOneTimePayProduct(widget.product);
    final action = NgmyStripePayments.actionLabel(widget.product);
    final price = NgmyStripePayments.priceLabel(widget.product);
    final duration = NgmyStripePayments.durationLabel(widget.product);
    final perks = NgmyStripePayments.productPerks(widget.product);

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 26),
      child: AnimatedBuilder(
        animation: _entry,
        builder: (context, child) {
          final pop = Curves.easeOutBack.transform(_entry.value.clamp(0.0, 1.0));
          final fade = ((_entry.value) / 0.45).clamp(0.0, 1.0);
          return Opacity(
            opacity: fade,
            child: Transform.scale(scale: 0.9 + 0.1 * pop, child: child),
          );
        },
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 392),
          child: DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              boxShadow: [
                BoxShadow(
                  color: mid.withValues(alpha: 0.3),
                  blurRadius: 60,
                  spreadRadius: -10,
                  offset: const Offset(0, 22),
                ),
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.66),
                  blurRadius: 34,
                  offset: const Offset(0, 14),
                ),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(30),
              child: Container(
                color: _card,
                child: Stack(
                  children: [
                    // Colour wash bleeding down from the top of the card.
                    Positioned(
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 240,
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [
                              mid.withValues(alpha: 0.20),
                              deep.withValues(alpha: 0.09),
                              Colors.transparent,
                            ],
                          ),
                        ),
                      ),
                    ),
                    Positioned(
                      top: -80,
                      right: -60,
                      child: Container(
                        width: 210,
                        height: 210,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: RadialGradient(
                            colors: [
                              shine.withValues(alpha: 0.16),
                              Colors.transparent,
                            ],
                          ),
                        ),
                      ),
                    ),
                    // Drifting highlights across the upper half.
                    Positioned.fill(
                      child: IgnorePointer(
                        child: AnimatedBuilder(
                          animation: _ambient,
                          builder: (context, _) => CustomPaint(
                            painter: _SparklePainter(
                              t: _ambient.value,
                              color: shine,
                            ),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(24, 30, 24, 20),
                      child: SingleChildScrollView(
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            _stagger(
                              0,
                              SizedBox(
                                width: 112,
                                height: 112,
                                child: Stack(
                                  alignment: Alignment.center,
                                  children: [
                                    AnimatedBuilder(
                                      animation: _ambient,
                                      builder: (context, _) => CustomPaint(
                                        size: const Size(112, 112),
                                        painter: _HaloPainter(
                                          t: _ambient.value,
                                          mid: mid,
                                          shine: shine,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      width: 66,
                                      height: 66,
                                      decoration: BoxDecoration(
                                        gradient: LinearGradient(
                                          begin: Alignment.topLeft,
                                          end: Alignment.bottomRight,
                                          colors: [shine, mid, deep],
                                        ),
                                        borderRadius: BorderRadius.circular(22),
                                        boxShadow: [
                                          BoxShadow(
                                            color: mid.withValues(alpha: 0.5),
                                            blurRadius: 22,
                                            offset: const Offset(0, 9),
                                          ),
                                        ],
                                      ),
                                      child: Icon(
                                        NgmyStripePayments.productIcon(widget.product),
                                        color: Colors.white,
                                        size: 31,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(height: 18),
                            _stagger(
                              1,
                              Container(
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 13,
                                  vertical: 6,
                                ),
                                decoration: BoxDecoration(
                                  color: mid.withValues(alpha: 0.10),
                                  borderRadius: BorderRadius.circular(30),
                                  border: Border.all(
                                    color: mid.withValues(alpha: 0.30),
                                  ),
                                ),
                                child: Text(
                                  isOneTimePay
                                      ? 'ONE-TIME ACCESS'
                                      : 'MONTHLY ACCESS',
                                  style: TextStyle(
                                    color: metalText,
                                    fontSize: 9.5,
                                    fontWeight: FontWeight.w800,
                                    letterSpacing: 1.7,
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 15),
                            _stagger(
                              2,
                              Text(
                                widget.title,
                                textAlign: TextAlign.center,
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w800,
                                  fontSize: 23,
                                  height: 1.18,
                                  letterSpacing: -0.4,
                                ),
                              ),
                            ),
                            const SizedBox(height: 9),
                            _stagger(
                              3,
                              Text(
                                widget.message,
                                textAlign: TextAlign.center,
                                style: const TextStyle(
                                  color: Color(0xFF98A0B2),
                                  fontSize: 12.8,
                                  height: 1.45,
                                ),
                              ),
                            ),
                            const SizedBox(height: 20),
                            _stagger(
                              4,
                              AnimatedBuilder(
                                animation: _ambient,
                                builder: (context, _) {
                                  final t = _ambient.value;
                                  return ShaderMask(
                                    blendMode: BlendMode.srcIn,
                                    shaderCallback: (bounds) => LinearGradient(
                                      begin: Alignment(-1.9 + 4.2 * t, -0.5),
                                      end: Alignment(-1.0 + 4.2 * t, 0.5),
                                      colors: [metalText, shine, metalText],
                                    ).createShader(bounds),
                                    child: Text(
                                      price,
                                      style: const TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.w900,
                                        fontSize: 46,
                                        height: 1,
                                        letterSpacing: -1.8,
                                      ),
                                    ),
                                  );
                                },
                              ),
                            ),
                            const SizedBox(height: 11),
                            _stagger(
                              5,
                              Container(
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 12,
                                  vertical: 6,
                                ),
                                decoration: BoxDecoration(
                                  color: mid.withValues(alpha: 0.13),
                                  borderRadius: BorderRadius.circular(30),
                                  border: Border.all(
                                    color: mid.withValues(alpha: 0.30),
                                  ),
                                ),
                                child: Text(
                                  '$duration of access',
                                  style: TextStyle(
                                    color: metalText,
                                    fontSize: 11.5,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 20),
                            _stagger(6, _ornament(mid)),
                            const SizedBox(height: 16),
                            _stagger(
                              7,
                              Column(
                                children: [
                                  for (final perk in perks) _perk(mid, shine, perk),
                                ],
                              ),
                            ),
                            const SizedBox(height: 22),
                            _stagger(
                              8,
                              _GradientPayButton(
                                label: '$action $price',
                                colors: [mid, deep],
                                shine: shine,
                                onPressed: () async {
                                  await NgmyStripePayments.startCheckout(
                                    widget.email,
                                    widget.product,
                                  );
                                  if (context.mounted) {
                                    Navigator.pop(context, true);
                                  }
                                },
                              ),
                            ),
                            if (widget.email.trim().isNotEmpty) ...[
                              const SizedBox(height: 13),
                              _stagger(
                                9,
                                Text(
                                  'Unlocks on ${widget.email}',
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
                            _stagger(
                              10,
                              TextButton(
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
                    // Metal frame sits above the content so it reads as a border.
                    Positioned.fill(
                      child: IgnorePointer(
                        child: AnimatedBuilder(
                          animation: _ambient,
                          builder: (context, _) => CustomPaint(
                            painter: _MetalFramePainter(
                              t: _ambient.value,
                              mid: mid,
                              deep: deep,
                              shine: shine,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Rotating brushed-metal border, plus a fainter inner hairline.
class _MetalFramePainter extends CustomPainter {
  _MetalFramePainter({
    required this.t,
    required this.mid,
    required this.deep,
    required this.shine,
  });

  final double t;
  final Color mid;
  final Color deep;
  final Color shine;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;

    final shader = SweepGradient(
      transform: GradientRotation(t * 2 * math.pi),
      colors: [
        deep.withValues(alpha: 0.30),
        mid.withValues(alpha: 0.70),
        shine,
        mid.withValues(alpha: 0.70),
        deep.withValues(alpha: 0.30),
        deep.withValues(alpha: 0.30),
      ],
      stops: const [0.0, 0.17, 0.26, 0.35, 0.62, 1.0],
    ).createShader(rect);

    canvas.drawRRect(
      RRect.fromRectAndRadius(rect.deflate(1.1), const Radius.circular(29)),
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.8
        ..shader = shader,
    );

    canvas.drawRRect(
      RRect.fromRectAndRadius(rect.deflate(7.5), const Radius.circular(23)),
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1
        ..color = mid.withValues(alpha: 0.13),
    );
  }

  @override
  bool shouldRepaint(covariant _MetalFramePainter old) =>
      old.t != t || old.mid != mid || old.shine != shine;
}

/// Two counter-rotating rings with dots riding the outer one.
class _HaloPainter extends CustomPainter {
  _HaloPainter({required this.t, required this.mid, required this.shine});

  final double t;
  final Color mid;
  final Color shine;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    final centre = rect.center;
    final outer = size.width / 2 - 2;

    canvas.drawCircle(
      centre,
      outer,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.0
        ..shader = SweepGradient(
          transform: GradientRotation(t * 2 * math.pi),
          colors: [
            mid.withValues(alpha: 0.0),
            mid.withValues(alpha: 0.55),
            shine,
            mid.withValues(alpha: 0.55),
            mid.withValues(alpha: 0.0),
            mid.withValues(alpha: 0.0),
          ],
          stops: const [0.0, 0.2, 0.3, 0.4, 0.7, 1.0],
        ).createShader(rect),
    );

    final innerR = outer - 9;
    canvas.drawCircle(
      centre,
      innerR,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1
        ..shader = SweepGradient(
          transform: GradientRotation(-t * 2 * math.pi),
          colors: [
            shine.withValues(alpha: 0.0),
            shine.withValues(alpha: 0.42),
            shine.withValues(alpha: 0.0),
            shine.withValues(alpha: 0.0),
          ],
          stops: const [0.0, 0.12, 0.3, 1.0],
        ).createShader(rect),
    );

    for (var i = 0; i < 3; i++) {
      final angle = t * 2 * math.pi + i * (2 * math.pi / 3);
      final p = Offset(
        centre.dx + outer * math.cos(angle),
        centre.dy + outer * math.sin(angle),
      );
      canvas.drawCircle(p, 2.1, Paint()..color = shine.withValues(alpha: 0.9));
      canvas.drawCircle(p, 4.4, Paint()..color = shine.withValues(alpha: 0.16));
    }
  }

  @override
  bool shouldRepaint(covariant _HaloPainter old) =>
      old.t != t || old.mid != mid || old.shine != shine;
}

/// Slow twinkle across the top of the card.
class _SparklePainter extends CustomPainter {
  _SparklePainter({required this.t, required this.color});

  final double t;
  final Color color;

  static const _spots = <Offset>[
    Offset(0.13, 0.10),
    Offset(0.86, 0.08),
    Offset(0.93, 0.26),
    Offset(0.07, 0.29),
    Offset(0.74, 0.045),
    Offset(0.26, 0.05),
    Offset(0.50, 0.015),
  ];

  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 0; i < _spots.length; i++) {
      final phase = (t + i / _spots.length) % 1.0;
      final a = (math.sin(phase * 2 * math.pi) + 1) / 2;
      if (a <= 0.03) continue;
      final at = Offset(_spots[i].dx * size.width, _spots[i].dy * size.height);
      canvas.drawCircle(
        at,
        1.0 + 1.6 * a,
        Paint()..color = color.withValues(alpha: 0.08 + 0.40 * a),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _SparklePainter old) => old.t != t;
}

/// Gradient CTA with a press response — FilledButton cannot carry a gradient.
class _GradientPayButton extends StatefulWidget {
  const _GradientPayButton({
    required this.label,
    required this.colors,
    required this.shine,
    required this.onPressed,
  });

  final String label;
  final List<Color> colors;
  final Color shine;
  final Future<void> Function() onPressed;

  @override
  State<_GradientPayButton> createState() => _GradientPayButtonState();
}

class _GradientPayButtonState extends State<_GradientPayButton>
    with SingleTickerProviderStateMixin {
  late final AnimationController _sweep;
  bool _down = false;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _sweep = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 2600),
    )..repeat();
  }

  @override
  void dispose() {
    _sweep.dispose();
    super.dispose();
  }

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
                color: widget.colors.first.withValues(alpha: 0.45),
                blurRadius: 24,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(17),
            child: Stack(
              children: [
                // Light travelling across the button face.
                Positioned.fill(
                  child: IgnorePointer(
                    child: AnimatedBuilder(
                      animation: _sweep,
                      builder: (context, _) {
                        final t = _sweep.value;
                        return DecoratedBox(
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              begin: Alignment(-2.2 + 4.4 * t, -1),
                              end: Alignment(-1.5 + 4.4 * t, 1),
                              colors: [
                                Colors.transparent,
                                widget.shine.withValues(alpha: 0.42),
                                Colors.transparent,
                              ],
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                ),
                Center(
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
              ],
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
    if (widget.isAdmin) return;
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
    // Admins do not have a timed session — hide the bar entirely for them.
    if (widget.isAdmin) return const SizedBox.shrink();

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
