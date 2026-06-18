import 'package:flutter/material.dart';

import 'ngmy_app_notifications.dart';

/// Weekday check-in misses in a calendar month — 3 misses resets the investment plan.
class NgmyClockInMissPolicy {
  static const int maxMissesPerMonth = 3;

  static String monthKey(DateTime d) =>
      '${d.year}-${d.month.toString().padLeft(2, '0')}';

  static String dayKey(DateTime d) =>
      '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

  static bool _isWeekend(DateTime d) => d.weekday == DateTime.saturday || d.weekday == DateTime.sunday;

  static bool _isPastNoon(DateTime now) => !now.isBefore(DateTime(now.year, now.month, now.day, 12));

  static bool _sameDay(DateTime? a, DateTime b) {
    if (a == null) return false;
    return a.year == b.year && a.month == b.month && a.day == b.day;
  }

  /// Sync month bucket on [user] — clears misses when the calendar month changes.
  static void rolloverMonthIfNeeded(dynamic user) {
    final mk = monthKey(DateTime.now());
    final stored = (user.clockInMissMonth as String?) ?? '';
    if (stored == mk) return;
    user.clockInMissMonth = mk;
    user.clockInMissCount = 0;
    user.clockInMissedDays = <String>[];
  }

  /// True when this weekday's check-in window has closed without a successful check-in.
  static bool shouldEvaluateMiss(dynamic user, DateTime now) {
    if (user.isAdmin == true) return false;
    if (user.isOnFreeTrial == true) return false;
    final inv = user.activeInvestment;
    if (inv == null) return false;
    if ((inv.daysLeft as int) <= 0) return false;
    if (_isWeekend(now)) return false;
    if (!_isPastNoon(now)) return false;
    if (user.isClockedIn == true) return false;
    try {
      if (user.alreadyClockedInToday == true) return false;
    } catch (_) {
      if (_sameDay(user.lastClockInEarningsDate as DateTime?, now)) return false;
    }
    return true;
  }

  /// Records today's miss once. Returns `warn2` on 2nd miss, `reset` on 3rd (plan cleared).
  static String? recordMissIfNeeded(dynamic user, DateTime now) {
    rolloverMonthIfNeeded(user);
    final dk = dayKey(now);
    final days = List<String>.from((user.clockInMissedDays as List?)?.map((e) => e.toString()) ?? const []);
    if (days.contains(dk)) return null;

    days.add(dk);
    user.clockInMissedDays = days;
    user.clockInMissCount = days.length;

    if (days.length >= maxMissesPerMonth) {
      user.activeInvestment = null;
      return 'reset';
    }
    if (days.length == 2) return 'warn2';
    return 'miss1';
  }

  static Future<void> notifySecondMiss(String email) {
    return ngmyInAppNotify?.call(
          title: 'Investment reminder',
          body:
              'You missed 2 weekday check-ins this month. Check in before noon on weekdays — one more miss resets your investment plan.',
          tag: 'clock_miss_warn2_${monthKey(DateTime.now())}_$email',
          cooldown: const Duration(hours: 20),
        ) ??
        Future.value();
  }

  static Future<void> notifyPlanReset(String email) {
    return ngmyInAppNotify?.call(
          title: 'Investment plan reset',
          body:
              'You missed 3 weekday check-ins this month. Your investment plan was reset — open Invest to activate a new plan.',
          tag: 'clock_miss_reset_${monthKey(DateTime.now())}_$email',
          cooldown: const Duration(hours: 20),
        ) ??
        Future.value();
  }
}

/// Shown after the 3rd monthly miss clears the user's investment plan.
class NgmyClockInMissResetDialog extends StatelessWidget {
  const NgmyClockInMissResetDialog({super.key, this.onGoToInvest});

  final VoidCallback? onGoToInvest;

  static Future<void> show(BuildContext context, {VoidCallback? onGoToInvest}) {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      barrierColor: Colors.black.withValues(alpha: 0.82),
      builder: (_) => NgmyClockInMissResetDialog(onGoToInvest: onGoToInvest),
    );
  }

  @override
  Widget build(BuildContext context) {
    const accent = Color(0xFFF59E0B);
    const danger = Color(0xFFEF4444);
    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 22, vertical: 24),
      child: Container(
        padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(26),
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF1C0A0A), Color(0xFF451A03), Color(0xFF0F172A)],
          ),
          border: Border.all(color: danger.withValues(alpha: 0.45)),
          boxShadow: [BoxShadow(color: danger.withValues(alpha: 0.25), blurRadius: 28, spreadRadius: 1)],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 72,
              height: 72,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: LinearGradient(colors: [danger.withValues(alpha: 0.9), accent]),
                border: Border.all(color: Colors.white24, width: 2),
              ),
              child: const Icon(Icons.warning_amber_rounded, color: Colors.white, size: 38),
            ),
            const SizedBox(height: 14),
            const Text(
              'Investment Plan Reset',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900),
            ),
            const SizedBox(height: 8),
            Text(
              'You missed 3 weekday check-ins this month. Your active investment plan has been cleared — invest again to keep earning and unlock games.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 13, height: 1.45),
            ),
            const SizedBox(height: 18),
            SizedBox(
              width: double.infinity,
              child: FilledButton.icon(
                onPressed: () {
                  Navigator.pop(context);
                  onGoToInvest?.call();
                },
                icon: const Icon(Icons.trending_up_rounded, size: 20),
                label: const Text('Invest Again', style: TextStyle(fontWeight: FontWeight.w900)),
                style: FilledButton.styleFrom(
                  backgroundColor: accent,
                  minimumSize: const Size(double.infinity, 48),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
            ),
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('Got it', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w700)),
            ),
          ],
        ),
      ),
    );
  }
}
