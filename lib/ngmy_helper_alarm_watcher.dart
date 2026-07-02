import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_helper_alarm_memory.dart';
import 'ngmy_item_reminder_alarm.dart';
import 'ngmy_nav.dart';

Timer? _helperAlarmPollTimer;
String? _helperAlarmUserEmail;
bool _helperAlarmAlertOpen = false;
final Set<String> _firedAlarmIds = {};

/// Polls saved AI alarms and rings in-app (works on web PWA when the app is open).
void ngmyStartHelperAlarmWatcher(String userEmail) {
  final email = userEmail.trim();
  if (email.isEmpty) return;
  _helperAlarmUserEmail = email;
  _helperAlarmPollTimer?.cancel();
  _helperAlarmPollTimer = Timer.periodic(const Duration(seconds: 2), (_) => unawaited(_pollHelperAlarms()));
  unawaited(_pollHelperAlarms());
}

void ngmyStopHelperAlarmWatcher() {
  _helperAlarmPollTimer?.cancel();
  _helperAlarmPollTimer = null;
  _helperAlarmUserEmail = null;
}

Future<void> ngmyCheckHelperAlarmsNow({String? userEmail}) async {
  if (userEmail != null && userEmail.trim().isNotEmpty) {
    _helperAlarmUserEmail = userEmail.trim();
  }
  await _pollHelperAlarms();
}

Future<void> _pollHelperAlarms() async {
  if (_helperAlarmAlertOpen) return;
  final email = _helperAlarmUserEmail;
  if (email == null || email.isEmpty) return;

  final all = await NgmyHelperAlarmMemoryStore.load(email);
  final now = DateTime.now();
  for (final entry in all) {
    if (_firedAlarmIds.contains(entry.id)) continue;
    if (entry.when.isAfter(now)) continue;
    if (now.difference(entry.when) > const Duration(minutes: 3)) {
      await NgmyHelperAlarmMemoryStore.remove(email, entry.id);
      continue;
    }

    final ctx = ngmyRootNavigatorKey.currentContext;
    if (ctx == null || !ctx.mounted) return;

    _firedAlarmIds.add(entry.id);
    await showNgmyHelperAlarmAlert(ctx, entry: entry, userEmail: email);
    await NgmyHelperAlarmMemoryStore.remove(email, entry.id);
    break;
  }
}

Future<void> showNgmyHelperAlarmAlert(
  BuildContext context, {
  required NgmyHelperAlarmEntry entry,
  required String userEmail,
}) async {
  if (_helperAlarmAlertOpen) return;
  _helperAlarmAlertOpen = true;
  unawaited(NgmyItemReminderAlarm.start());
  try {
    await showGeneralDialog<void>(
      context: context,
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
                    colors: [Color(0xFF431407), Color(0xFF9A3412), Color(0xFFEA580C)],
                  ),
                  border: Border.all(color: const Color(0xFFFDBA74).withValues(alpha: 0.55), width: 1.6),
                  boxShadow: [
                    BoxShadow(color: const Color(0xFFF97316).withValues(alpha: 0.45), blurRadius: 40, offset: const Offset(0, 16)),
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
                        gradient: const LinearGradient(colors: [Color(0xFFFDBA74), Color(0xFFF97316)]),
                        boxShadow: [BoxShadow(color: const Color(0xFFF97316).withValues(alpha: 0.5), blurRadius: 20)],
                      ),
                      child: const Icon(Icons.alarm_rounded, color: Colors.white, size: 38),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      entry.title,
                      textAlign: TextAlign.center,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      entry.notes?.trim().isNotEmpty == true ? entry.notes!.trim() : 'Your NGMY alarm is ringing.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 14, height: 1.35),
                    ),
                    const SizedBox(height: 20),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton(
                        onPressed: () async {
                          await NgmyItemReminderAlarm.stop();
                          if (ctx.mounted) Navigator.pop(ctx);
                        },
                        style: FilledButton.styleFrom(
                          backgroundColor: Colors.white,
                          foregroundColor: const Color(0xFF9A3412),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Dismiss alarm', style: TextStyle(fontWeight: FontWeight.w900)),
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
    await NgmyItemReminderAlarm.stop();
    _helperAlarmAlertOpen = false;
  }
}
