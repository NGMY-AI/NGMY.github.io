import 'dart:async';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_medicine_organizer.dart';
import 'ngmy_nav.dart';

Timer? _medicineReminderPollTimer;
String? _medicineWatcherEmail;
bool _medicineAlertOpen = false;

String _firedKey(String userEmail, String medicineId, String slot, DateTime day) =>
    'ngmy_med_fired_${userEmail.hashCode}_${medicineId}_${day.year}${day.month}${day.day}_$slot';

Future<bool> _alreadyFiredToday(String userEmail, String medicineId, String slot) async {
  final prefs = await SharedPreferences.getInstance();
  final today = DateTime.now();
  return prefs.getBool(_firedKey(userEmail, medicineId, slot, today)) ?? false;
}

Future<void> _markFiredToday(String userEmail, String medicineId, String slot) async {
  final prefs = await SharedPreferences.getInstance();
  final today = DateTime.now();
  await prefs.setBool(_firedKey(userEmail, medicineId, slot, today), true);
}

bool _medicineActiveOnDate(NgmyMedicineEntry m, DateTime now) {
  if (m.category == 'As needed') return false;
  final day = DateTime(now.year, now.month, now.day);
  if (m.startDate != null) {
    final start = DateTime(m.startDate!.year, m.startDate!.month, m.startDate!.day);
    if (day.isBefore(start)) return false;
  }
  if (m.endDate != null) {
    final end = DateTime(m.endDate!.year, m.endDate!.month, m.endDate!.day);
    if (day.isAfter(end)) return false;
  }
  return true;
}

/// Returns medicines due right now with their matched time slot (HH:mm).
Future<List<(NgmyMedicineEntry, String)>> ngmyMedicinesDueNow({required String userEmail}) async {
  final now = DateTime.now();
  final items = await ngmyExportMedicines(userEmail: userEmail);
  final due = <(NgmyMedicineEntry, String)>[];

  for (final m in items) {
    if (!m.remindersEnabled) continue;
    if (!_medicineActiveOnDate(m, now)) continue;
    final times = m.reminderTimes.isNotEmpty ? m.reminderTimes : ngmyDefaultMedicineReminderTimes(m.timesPerDay);
    for (final slot in times) {
      final parts = slot.split(':');
      if (parts.length < 2) continue;
      final hour = int.tryParse(parts[0]);
      final minute = int.tryParse(parts[1]);
      if (hour == null || minute == null) continue;
      final scheduled = DateTime(now.year, now.month, now.day, hour, minute);
      final diffMin = now.difference(scheduled).inMinutes;
      if (diffMin >= 0 && diffMin <= 30) {
        if (await _alreadyFiredToday(userEmail, m.id, slot)) continue;
        due.add((m, slot));
      }
    }
  }
  return due;
}

void ngmyStartMedicineReminderWatcher(String userEmail) {
  final email = userEmail.trim();
  if (email.isEmpty) return;
  _medicineWatcherEmail = email;
  _medicineReminderPollTimer?.cancel();
  _medicineReminderPollTimer = Timer.periodic(const Duration(seconds: 30), (_) => unawaited(_pollMedicineReminders()));
  unawaited(_pollMedicineReminders());
}

void ngmyStopMedicineReminderWatcher() {
  _medicineReminderPollTimer?.cancel();
  _medicineReminderPollTimer = null;
  _medicineWatcherEmail = null;
}

Future<void> ngmyCheckMedicineRemindersNow({String? userEmail}) async {
  if (userEmail != null && userEmail.trim().isNotEmpty) {
    _medicineWatcherEmail = userEmail.trim();
  }
  await _pollMedicineReminders();
}

Future<void> _pollMedicineReminders() async {
  if (_medicineAlertOpen) return;
  final email = _medicineWatcherEmail;
  if (email == null || email.isEmpty) return;

  final due = await ngmyMedicinesDueNow(userEmail: email);
  if (due.isEmpty) return;

  final ctx = ngmyRootNavigatorKey.currentContext;
  if (ctx == null || !ctx.mounted) return;

  final (medicine, slot) = due.first;
  await showNgmyMedicineReminderAlert(ctx, medicine: medicine, timeSlot: slot, userEmail: email);
}

/// Full-screen blocking reminder — holds focus ~5 seconds, then dismisses.
/// Shown on schedule and when the app opens while a dose is due.
Future<void> showNgmyMedicineReminderAlert(
  BuildContext context, {
  required NgmyMedicineEntry medicine,
  required String timeSlot,
  required String userEmail,
}) async {
  if (_medicineAlertOpen) return;
  _medicineAlertOpen = true;
  try {
    await showGeneralDialog<void>(
      context: context,
      barrierDismissible: false,
      barrierColor: Colors.black.withValues(alpha: 0.94),
      transitionDuration: const Duration(milliseconds: 280),
      pageBuilder: (ctx, a1, a2) => _MedicineReminderOverlay(
        medicine: medicine,
        timeSlot: timeSlot,
        onDone: () async {
          await _markFiredToday(userEmail, medicine.id, timeSlot);
          if (ctx.mounted) Navigator.of(ctx).pop();
        },
      ),
      transitionBuilder: (ctx, anim, _, child) {
        return FadeTransition(opacity: anim, child: ScaleTransition(scale: Tween<double>(begin: 0.92, end: 1).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)), child: child));
      },
    );
    await _markFiredToday(userEmail, medicine.id, timeSlot);
  } finally {
    _medicineAlertOpen = false;
  }
}

class _MedicineReminderOverlay extends StatefulWidget {
  const _MedicineReminderOverlay({required this.medicine, required this.timeSlot, required this.onDone});
  final NgmyMedicineEntry medicine;
  final String timeSlot;
  final Future<void> Function() onDone;

  @override
  State<_MedicineReminderOverlay> createState() => _MedicineReminderOverlayState();
}

class _MedicineReminderOverlayState extends State<_MedicineReminderOverlay> {
  static const _blockSeconds = 5;
  var _secondsLeft = _blockSeconds;
  var _canDismiss = false;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (t) {
      if (!mounted) return;
      setState(() {
        _secondsLeft--;
        if (_secondsLeft <= 0) {
          _canDismiss = true;
          t.cancel();
          unawaited(_finish());
        }
      });
    });
  }

  Future<void> _finish() async {
    await widget.onDone();
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  String _formatSlot(String slot) {
    final parts = slot.split(':');
    if (parts.length < 2) return slot;
    final h = int.tryParse(parts[0]) ?? 0;
    final m = parts[1];
    final hour = h > 12 ? h - 12 : (h == 0 ? 12 : h);
    final ampm = h >= 12 ? 'PM' : 'AM';
    return '$hour:$m $ampm';
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: _canDismiss,
      child: Material(
        color: Colors.transparent,
        child: SafeArea(
          child: Center(
            child: Container(
              margin: const EdgeInsets.symmetric(horizontal: 20),
              padding: const EdgeInsets.fromLTRB(24, 28, 24, 22),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(28),
                gradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF500724), Color(0xFF831843), Color(0xFFBE185D)],
                ),
                border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.55), width: 1.6),
                boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.45), blurRadius: 40, offset: const Offset(0, 16))],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    width: 76,
                    height: 76,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: const LinearGradient(colors: [Color(0xFFF472B6), Color(0xFFEC4899)]),
                    ),
                    child: const Icon(Icons.medication_liquid_rounded, color: Colors.white, size: 40),
                  ),
                  const SizedBox(height: 18),
                  const Text('MEDICINE TIME', style: TextStyle(color: Color(0xFFFBCFE8), fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.5)),
                  const SizedBox(height: 10),
                  Text(widget.medicine.name, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28)),
                  if (widget.medicine.dosage.isNotEmpty) ...[
                    const SizedBox(height: 8),
                    Text(widget.medicine.dosage, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 16, fontWeight: FontWeight.w600)),
                  ],
                  const SizedBox(height: 16),
                  Text('Scheduled for ${_formatSlot(widget.timeSlot)}', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 13)),
                  if (widget.medicine.schedule.isNotEmpty)
                    Padding(
                      padding: const EdgeInsets.only(top: 6),
                      child: Text(widget.medicine.schedule, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 13)),
                    ),
                  const SizedBox(height: 22),
                  if (!_canDismiss)
                    Text(
                      '$_secondsLeft',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 42),
                    )
                  else
                    const Icon(Icons.check_circle_rounded, color: Color(0xFF34D399), size: 48),
                  const SizedBox(height: 8),
                  Text(
                    _canDismiss ? 'Reminder complete' : 'Please take your medicine…',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12),
                  ),
                  if (_canDismiss) ...[
                    const SizedBox(height: 16),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton(
                        onPressed: () => unawaited(_finish()),
                        style: FilledButton.styleFrom(backgroundColor: const Color(0xFF34D399), foregroundColor: Colors.black, padding: const EdgeInsets.symmetric(vertical: 14)),
                        child: const Text('Mark as taken', style: TextStyle(fontWeight: FontWeight.w900)),
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
