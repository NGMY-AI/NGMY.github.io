import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_cashier_iou.dart';
import 'ngmy_cashier_storage.dart';
import 'ngmy_nav.dart';
import 'ngmy_overlay_guard.dart';
import 'ngmy_worksheet_helpers.dart';

bool _cashierAlertOpen = false;
final Set<String> _cashierSessionAlerted = {};
String? _cashierWatcherEmail;
Timer? _cashierPollTimer;

String _dueKey(NgmyCashierIou iou) =>
    '${iou.id}_${ngmyCashierDateOnly(iou.dueDate).toIso8601String()}';

void ngmyStartCashierReminderWatcher(String userEmail) {
  final email = userEmail.trim();
  if (email.isEmpty) return;
  _cashierWatcherEmail = email;
  _cashierPollTimer?.cancel();
  _cashierPollTimer = Timer.periodic(
    const Duration(seconds: 8),
    (_) => unawaited(ngmyCheckCashierRemindersNow(userEmail: email)),
  );
  unawaited(ngmyCheckCashierRemindersNow(userEmail: email));
}

void ngmyStopCashierReminderWatcher() {
  _cashierPollTimer?.cancel();
  _cashierPollTimer = null;
  _cashierWatcherEmail = null;
}

Future<void> ngmyCheckCashierRemindersNow({String? userEmail}) async {
  if (userEmail != null && userEmail.trim().isNotEmpty) {
    _cashierWatcherEmail = userEmail.trim();
  }
  if (_cashierAlertOpen) return;
  if (!ngmyShouldAllowGlobalInterrupt()) return;
  final email = _cashierWatcherEmail;
  if (email == null || email.isEmpty) return;

  final due = await ngmyCashierDayBeforeReminders(email);
  for (final iou in due) {
    final key = _dueKey(iou);
    if (_cashierSessionAlerted.contains(key)) continue;
    if (iou.dayBeforeReminderSeenKey == key) {
      _cashierSessionAlerted.add(key);
      continue;
    }
    final ctx = ngmyRootNavigatorKey.currentContext;
    if (ctx == null || !ctx.mounted) return;
    _cashierSessionAlerted.add(key);
    await showNgmyCashierDayBeforeAlert(ctx, iou: iou, userEmail: email);
    break;
  }
}

Future<void> showNgmyCashierDayBeforeAlert(
  BuildContext context, {
  required NgmyCashierIou iou,
  required String userEmail,
}) async {
  if (_cashierAlertOpen) return;
  _cashierAlertOpen = true;
  try {
    await showGeneralDialog<void>(
      context: context,
      useRootNavigator: true,
      barrierDismissible: false,
      barrierColor: Colors.black.withValues(alpha: 0.88),
      transitionDuration: const Duration(milliseconds: 260),
      pageBuilder: (ctx, a1, a2) {
        return SafeArea(
          child: Center(
            child: Material(
              color: Colors.transparent,
              child: Container(
                margin: const EdgeInsets.symmetric(horizontal: 18),
                padding: const EdgeInsets.fromLTRB(22, 26, 22, 18),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(24),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      Color(0xFF052E16),
                      Color(0xFF14532D),
                      Color(0xFF166534),
                    ],
                  ),
                  border: Border.all(
                    color: const Color(0xFF86EFAC).withValues(alpha: 0.55),
                    width: 1.5,
                  ),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      width: 68,
                      height: 68,
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          colors: [Color(0xFF86EFAC), Color(0xFF22C55E)],
                        ),
                      ),
                      child: const Icon(
                        Icons.notifications_active_rounded,
                        color: Color(0xFF052E16),
                        size: 34,
                      ),
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'PAYMENT REMINDER',
                      style: TextStyle(
                        color: Color(0xFFBBF7D0),
                        fontWeight: FontWeight.w900,
                        fontSize: 11,
                        letterSpacing: 1.3,
                      ),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      '${iou.personName.trim().isEmpty ? 'Someone' : iou.personName.trim()} pays tomorrow',
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w900,
                        fontSize: 24,
                        height: 1.2,
                      ),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      '${ngmyFormatMoney(iou.amount)} is due tomorrow.',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white.withValues(alpha: 0.9),
                        fontWeight: FontWeight.w600,
                        fontSize: 15,
                      ),
                    ),
                    const SizedBox(height: 20),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton(
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFF86EFAC),
                          foregroundColor: const Color(0xFF052E16),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(14),
                          ),
                        ),
                        onPressed: () async {
                          iou.dayBeforeReminderSeenKey = _dueKey(iou);
                          await upsertNgmyCashierIou(userEmail, iou);
                          if (ctx.mounted) Navigator.of(ctx).pop();
                        },
                        child: const Text(
                          'Got it',
                          style: TextStyle(fontWeight: FontWeight.w900),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  } finally {
    _cashierAlertOpen = false;
  }
}
