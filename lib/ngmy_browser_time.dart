import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_help_center.dart';
import 'ngmy_house_workers.dart';
import 'ngmy_stripe_cloud.dart';
import 'ngmy_stripe_payments.dart';

/// How long an account may use the advisors' live browser, kept quietly in the background (nothing about it is shown).
///
///  * 10 free minutes at the start.
///  * Then $5.99 buys 2 hours of browser time that must be used within a week (card with Stripe, or Cash App with a code and a
///    screenshot that an admin approves).
///  * Time only counts while the browser is actually open; closing it stops the count, and what is left is still there when the person
///    comes back (until the week is over).
///  * Hours that were not used within the week are gone. The next time that person comes back they get only 5 minutes, then the
///    payment pop-up asks again.
class NgmyBrowserTime {
  static const int freeSeconds = 600;
  static const int packSeconds = 7200;
  static const int graceSeconds = 300;
  static const int packDays = 7;
  static const double price = 5.99;
  static const String stripeSlug = 'advisor_browser';

  static String _k(String email, String field) => 'ngmy_bw_${field}_${email.toLowerCase().trim()}';

  static DateTime Function() clock = DateTime.now;

  /// TEST SWITCH. While it is true nobody gets free browser time and admins are asked to pay too, so the payment pop-up
  /// can be tried straight away. Set it to false to bring back the 10 free minutes (and no limit for admins).
  static bool paywallTest = true;

  /// Admins are never asked to pay (except while [paywallTest] is on).
  static bool adminExempt(bool isAdmin) => isAdmin && !paywallTest;

  /// The stored numbers for [email]: the free seconds left (the first time: the 10 minutes), the paid seconds left, when the paid
  /// time ends, and the end of the last Stripe payment that was already turned into hours.
  static Future<({int free, int pack, int until, int credited})> _read(SharedPreferences p, String email) async {
    return (
      free: p.getInt(_k(email, 'free')) ?? freeSeconds,
      pack: p.getInt(_k(email, 'pack')) ?? 0,
      until: p.getInt(_k(email, 'until')) ?? 0,
      credited: p.getInt(_k(email, 'credited')) ?? 0,
    );
  }

  static Future<void> _write(SharedPreferences p, String email, {int? free, int? pack, int? until, int? credited}) async {
    if (free != null) await p.setInt(_k(email, 'free'), free);
    if (pack != null) await p.setInt(_k(email, 'pack'), pack);
    if (until != null) await p.setInt(_k(email, 'until'), until);
    if (credited != null) await p.setInt(_k(email, 'credited'), credited);
  }

  /// A week has passed since the payment: the hours that are left are gone, and the person gets only 5 minutes before the next payment.
  static Future<void> _expire(SharedPreferences p, String email) async {
    final s = await _read(p, email);
    if (s.until == 0 || clock().millisecondsSinceEpoch <= s.until) return;
    await _write(p, email, pack: 0, until: 0, free: graceSeconds);
  }

  /// Seconds of browser time this account has left (paid time first, else the free time).
  static Future<int> secondsLeft(String email) async {
    if (email.trim().isEmpty) return 0;
    final p = await SharedPreferences.getInstance();
    await _expire(p, email);
    final s = await _read(p, email);
    if (s.pack > 0) return s.pack;
    return paywallTest ? 0 : s.free;
  }

  static Future<bool> hasTime(String email) async => (await secondsLeft(email)) > 0;

  /// The browser was open for [seconds]: take them off the paid time, or off the free time when there is none.
  static Future<void> use(String email, int seconds) async {
    if (email.trim().isEmpty || seconds <= 0) return;
    final p = await SharedPreferences.getInstance();
    await _expire(p, email);
    final s = await _read(p, email);
    if (s.pack > 0) {
      await _write(p, email, pack: (s.pack - seconds).clamp(0, packSeconds));
    } else {
      await _write(p, email, free: (s.free - seconds).clamp(0, freeSeconds));
    }
  }

  /// A payment arrived: 2 hours that last until [until] (a week from the payment by default).
  static Future<void> creditPack(String email, {DateTime? until}) async {
    if (email.trim().isEmpty) return;
    final p = await SharedPreferences.getInstance();
    final end = (until ?? clock().add(const Duration(days: packDays))).millisecondsSinceEpoch;
    await _write(p, email, pack: packSeconds, until: end);
  }

  /// Turns payments into hours: a Stripe payment is recorded by the server (its end date shows it is a new one), and a Cash App
  /// payment is handed over once after an admin approved it. Returns true when a Cash App payment is still waiting for the admin.
  static Future<bool> syncPayments(String email) async {
    if (email.trim().isEmpty) return false;
    final p = await SharedPreferences.getInstance();
    try {
      final until = await NgmyStripeCloud.syncAccessFromCloud(email, stripeSlug);
      if (until != null) {
        final s = await _read(p, email);
        if (until.millisecondsSinceEpoch > s.credited) {
          await creditPack(email, until: until);
          await _write(p, email, credited: until.millisecondsSinceEpoch);
        }
      }
    } catch (_) {/* offline: nothing to add this time */}
    var waiting = false;
    try {
      final res = await ngmyEdgeInvoke({'action': 'bwPassGet'}, timeout: const Duration(seconds: 10));
      final n = int.tryParse('${res?['grants'] ?? 0}') ?? 0;
      for (var i = 0; i < n; i++) {
        await creditPack(email);
      }
      waiting = res?['pending'] == true;
    } catch (_) {/* offline */}
    return waiting;
  }

  /// True when the person may start or keep using the browser. When their time is over this shows the payment pop-up.
  static Future<bool> ensureAvailable({
    required BuildContext context,
    required String email,
    required dynamic config,
    bool isAdmin = false,
  }) async {
    if (adminExempt(isAdmin)) return true;
    final waiting = await syncPayments(email);
    if (await hasTime(email)) return true;
    if (!context.mounted) return false;
    await showPaywall(context, email: email, config: config, waiting: waiting);
    await syncPayments(email);
    return hasTime(email);
  }

  /// The payment pop-up: pay $5.99 by card (Stripe) or with Cash App.
  static Future<void> showPaywall(
    BuildContext context, {
    required String email,
    required dynamic config,
    bool waiting = false,
  }) async {
    final root = Navigator.of(context, rootNavigator: true).context;
    final opened = await NgmyStripePayments.showNgmyPaymentDialog(
      context: context,
      product: NgmyStripeProduct.advisorBrowser,
      email: email,
      title: 'NGMY Browser',
      message: waiting
          ? 'Your Cash App payment is being checked. Your 2 hours start as soon as an admin approves it.'
          : 'Your browser time is up. \$${price.toStringAsFixed(2)} gives you 2 more hours: use them within a week, and what is left stays here when you close the browser.',
      extraLabel: 'Pay with Cash App',
      onExtra: () => _payCashApp(root, email, config),
    );
    if (opened == true) {
      await NgmyStripePayments.processPaymentReturnFromUrl();
      await NgmyStripeCloud.waitForCloudAccess(email: email, productSlug: stripeSlug);
    }
  }

  static Future<void> _payCashApp(BuildContext context, String email, dynamic config) async {
    NgmyHelpCenterConfig cfg;
    try {
      cfg = NgmyHelpCenterConfig.fromMap((config as dynamic).helpCenterHub as Map<String, dynamic>);
    } catch (_) {
      cfg = NgmyHelpCenterConfig.defaults();
    }
    final url = cfg.resolvedCashAppUrl();
    if (url.isEmpty) {
      if (context.mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Cash App is not set up yet.')));
      return;
    }
    if (!context.mounted) return;
    final res = await showNgmyCareCashAppSheet(
      context,
      amount: price,
      label: 'NGMY Browser · 2 hours',
      cashAppUrl: url,
      cashAppTag: cfg.cashAppDisplayTag(),
      fullTerm: false,
      onSubmit: (code, proof, mime) async {
        try {
          final r = await ngmyEdgeInvoke({'action': 'bwCashApp', 'code': code, 'proofBase64': proof, 'proofMime': mime}, timeout: const Duration(seconds: 30));
          return r ?? {'ok': false, 'error': 'No connection. Try again.'};
        } catch (_) {
          return {'ok': false, 'error': 'No connection. Try again.'};
        }
      },
    );
    if (res != null && context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Payment sent. An admin will check it, and your 2 hours start as soon as it is approved.')));
    }
  }
}
