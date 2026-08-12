import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_stripe_payments.dart';

/// App-wide device transfer freemium gate.
///
/// Anyone can scan / receive for free. Sending (QR, download, file export) is
/// free for the first [freeTransferLimit] transfers, then requires
/// [NgmyStripeProduct.deviceTransfer] ($4.99/mo).
abstract final class NgmyTransferPayments {
  static const int freeTransferLimit = 2;
  static const _usedPrefix = 'ngmy_device_transfer_used_';

  static String _key(String email) {
    final clean = email.toLowerCase().trim();
    return clean.isEmpty ? 'device' : clean;
  }

  static Future<bool> hasSubscription({
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final clean = email.trim();
    if (clean.isEmpty) return false;
    return NgmyStripePayments.hasActiveAccess(
      clean,
      NgmyStripeProduct.deviceTransfer,
    );
  }

  static Future<int> freeTransfersUsed(String email) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt('$_usedPrefix${_key(email)}') ?? 0;
  }

  static Future<int> freeTransfersRemaining(String email) async {
    final used = await freeTransfersUsed(email);
    final left = freeTransferLimit - used;
    return left < 0 ? 0 : left;
  }

  static Future<void> recordTransferUsed(String email) async {
    final prefs = await SharedPreferences.getInstance();
    final key = '$_usedPrefix${_key(email)}';
    final used = prefs.getInt(key) ?? 0;
    await prefs.setInt(key, used + 1);
  }

  /// Burn one free transfer after a successful send/export (not when subscribed).
  static Future<void> consumeFreeTransferIfNeeded({
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return;
    if (await hasSubscription(email: email, isAdmin: false)) return;
    await recordTransferUsed(email);
  }

  /// True when the user may send/export without opening checkout.
  static Future<bool> canTransferWithoutPaying({
    required String email,
    bool isAdmin = false,
  }) async {
    if (await hasSubscription(email: email, isAdmin: isAdmin)) return true;
    return (await freeTransfersUsed(email)) < freeTransferLimit;
  }

  /// Call before Show QR / download / export. Does not consume a free slot —
  /// call [consumeFreeTransferIfNeeded] after the send succeeds.
  static Future<bool> ensureCanTransfer({
    required BuildContext context,
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final clean = email.trim();
    if (clean.isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Sign in to transfer files between devices.')),
        );
      }
      return false;
    }

    if (await hasSubscription(email: clean, isAdmin: false)) return true;
    if ((await freeTransfersUsed(clean)) < freeTransferLimit) return true;

    if (!context.mounted) return false;
    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.deviceTransfer,
      email: clean,
      isAdmin: isAdmin,
    );
  }

  static Future<String> statusLabel({
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin || await hasSubscription(email: email, isAdmin: isAdmin)) {
      return 'Unlimited transfers with Transfer Pro';
    }
    final left = await freeTransfersRemaining(email);
    if (left <= 0) return 'Free transfers used — Subscribe \$4.99/mo';
    return '$left free transfer${left == 1 ? '' : 's'} left · then \$4.99/mo';
  }
}
