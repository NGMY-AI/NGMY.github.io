import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_item_reminder_alarm.dart';
import 'ngmy_item_reminder_storage.dart';
import 'ngmy_nav.dart';
import 'ngmy_overlay_guard.dart';

Timer? _itemReminderPollTimer;
String? _watcherUserEmail;
bool _alertOpen = false;
final Set<String> _sessionAlertedIds = {};

/// Polls for due reminders and shows interrupting full-screen alerts app-wide.
void ngmyStartItemReminderWatcher(String userEmail) {
  final email = userEmail.trim();
  if (email.isEmpty) return;
  _watcherUserEmail = email;
  _itemReminderPollTimer?.cancel();
  _itemReminderPollTimer = Timer.periodic(const Duration(seconds: 2), (_) => unawaited(_pollDueReminders()));
  unawaited(_pollDueReminders());
}

void ngmyStopItemReminderWatcher() {
  _itemReminderPollTimer?.cancel();
  _itemReminderPollTimer = null;
  _watcherUserEmail = null;
}

Future<void> ngmyCheckItemRemindersNow({String? userEmail}) async {
  if (userEmail != null && userEmail.trim().isNotEmpty) {
    _watcherUserEmail = userEmail.trim();
  }
  await _pollDueReminders();
}

Future<void> _pollDueReminders() async {
  if (_alertOpen) return;
  if (!ngmyShouldAllowGlobalInterrupt()) return;
  final email = _watcherUserEmail;
  if (email == null || email.isEmpty) return;

  final due = await ngmyDueItemReminders(userEmail: email);
  for (final reminder in due) {
    if (_sessionAlertedIds.contains(reminder.id)) continue;
    final ctx = ngmyRootNavigatorKey.currentContext;
    if (ctx == null || !ctx.mounted) return;
    _sessionAlertedIds.add(reminder.id);
    await showNgmyItemReminderAlert(ctx, reminder: reminder, userEmail: email);
    break;
  }
}

/// Full-screen interrupt popup when a reminder fires.
Future<void> showNgmyItemReminderAlert(
  BuildContext context, {
  required NgmyItemReminder reminder,
  required String userEmail,
}) async {
  if (_alertOpen) return;
  _alertOpen = true;
  unawaited(NgmyItemReminderAlarm.start());
  try {
    await showGeneralDialog<void>(
      context: context,
      useRootNavigator: true,
      barrierDismissible: false,
      barrierColor: Colors.black.withValues(alpha: 0.92),
      transitionDuration: const Duration(milliseconds: 280),
      pageBuilder: (ctx, a1, a2) {
        return SafeArea(
          child: Center(
            child: Material(
              color: Colors.transparent,
              child: Container(
                margin: const EdgeInsets.symmetric(horizontal: 18),
                padding: const EdgeInsets.fromLTRB(22, 26, 22, 20),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(28),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF1E1033), Color(0xFF312E81), Color(0xFF4C1D95)],
                  ),
                  border: Border.all(color: const Color(0xFFA78BFA).withValues(alpha: 0.55), width: 1.6),
                  boxShadow: [
                    BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.45), blurRadius: 40, offset: const Offset(0, 16)),
                  ],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      width: 72,
                      height: 72,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(colors: [Color(0xFFA78BFA), Color(0xFF7C3AED)]),
                        boxShadow: [BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.5), blurRadius: 20)],
                      ),
                      child: const Icon(Icons.notifications_active_rounded, color: Colors.white, size: 38),
                    ),
                    const SizedBox(height: 18),
                    const Text(
                      'WHERE DID YOU PUT IT?',
                      style: TextStyle(color: Color(0xFFC4B5FD), fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.4),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      reminder.itemName,
                      textAlign: TextAlign.center,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28, height: 1.15),
                    ),
                    const SizedBox(height: 16),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: Colors.black.withValues(alpha: 0.28),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: Colors.white24),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Icon(Icons.location_on_rounded, color: const Color(0xFFA78BFA).withValues(alpha: 0.95), size: 20),
                              const SizedBox(width: 6),
                              Text(
                                'Location',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w800, fontSize: 11),
                              ),
                            ],
                          ),
                          const SizedBox(height: 8),
                          Text(
                            reminder.locationNote,
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 17, height: 1.35),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      'Scheduled for ${_formatAlertWhen(reminder.remindAt)}',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.42), fontSize: 11),
                    ),
                    const SizedBox(height: 20),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton(
                        onPressed: () async {
                          await NgmyItemReminderAlarm.stop();
                          if (Navigator.of(ctx, rootNavigator: true).canPop()) {
                            Navigator.of(ctx, rootNavigator: true).pop();
                          }
                          await deleteNgmyItemReminder(reminder.id, userEmail: userEmail);
                        },
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFF22C55E),
                          foregroundColor: Colors.black,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Got it — thanks!', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                      ),
                    ),
                    const SizedBox(height: 8),
                    TextButton(
                      onPressed: () async {
                        await NgmyItemReminderAlarm.stop();
                        if (Navigator.of(ctx, rootNavigator: true).canPop()) {
                          Navigator.of(ctx, rootNavigator: true).pop();
                        }
                        await snoozeNgmyItemReminder(reminder, userEmail: userEmail, snoozeBy: const Duration(minutes: 15));
                      },
                      child: const Text('Snooze 15 min', style: TextStyle(color: Color(0xFFA78BFA), fontWeight: FontWeight.w800)),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
      transitionBuilder: (ctx, anim, _, child) {
        final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack);
        return FadeTransition(
          opacity: anim,
          child: ScaleTransition(scale: Tween<double>(begin: 0.88, end: 1).animate(curved), child: child),
        );
      },
    );
  } finally {
    await NgmyItemReminderAlarm.stop();
    _alertOpen = false;
  }
}

String _formatAlertWhen(DateTime dt) {
  final local = dt.toLocal();
  final h = local.hour > 12 ? local.hour - 12 : (local.hour == 0 ? 12 : local.hour);
  final m = local.minute.toString().padLeft(2, '0');
  final ampm = local.hour >= 12 ? 'PM' : 'AM';
  return '${local.month}/${local.day} at $h:$m $ampm';
}
