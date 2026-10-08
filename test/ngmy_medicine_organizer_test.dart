import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_medicine_organizer.dart';
import 'package:ngmy/ngmy_medicine_reminder_service.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('Mark as taken persists a visible completion on the medicine', () async {
    final medicine = NgmyMedicineEntry(
      id: 'med-1',
      name: 'Vitamin D',
      dosage: '1 tablet',
      timesPerDay: 1,
      reminderTimes: ['08:00'],
    );
    await ngmyImportMedicines(
      userEmail: 'member@example.com',
      items: [medicine],
    );

    final marked = await ngmyMarkMedicineTaken(
      userEmail: 'member@example.com',
      medicineId: 'med-1',
      timeSlot: '08:00',
      takenAt: DateTime.utc(2026, 10, 8, 8, 5),
    );

    expect(marked, isTrue);
    final saved = await ngmyExportMedicines(userEmail: 'member@example.com');
    expect(saved.single.lastTakenSlot, '08:00');
    expect(saved.single.lastTakenAt, DateTime.utc(2026, 10, 8, 8, 5));
    expect(
      ngmyMedicineWasTakenToday(saved.single, DateTime(2026, 10, 8, 21)),
      isTrue,
    );
    expect(
      ngmyMedicineWasTakenToday(saved.single, DateTime(2026, 10, 9, 1)),
      isFalse,
    );
  });

  test(
    'Mark as taken returns false when the medicine no longer exists',
    () async {
      expect(
        await ngmyMarkMedicineTaken(
          userEmail: 'member@example.com',
          medicineId: 'deleted',
          timeSlot: '20:00',
        ),
        isFalse,
      );
    },
  );

  testWidgets('reminder button closes the alert and records the dose', (
    tester,
  ) async {
    final medicine = NgmyMedicineEntry(
      id: 'med-button',
      name: 'Blood pressure tablet',
      dosage: '10mg',
      timesPerDay: 1,
      reminderTimes: ['09:30'],
    );
    await ngmyImportMedicines(
      userEmail: 'member@example.com',
      items: [medicine],
    );

    await tester.pumpWidget(
      MaterialApp(
        home: Builder(
          builder: (context) => FilledButton(
            onPressed: () => unawaited(
              showNgmyMedicineReminderAlert(
                context,
                medicine: medicine,
                timeSlot: '09:30',
                userEmail: 'member@example.com',
              ),
            ),
            child: const Text('Show reminder'),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Show reminder'));
    await tester.pumpAndSettle(const Duration(milliseconds: 100));
    await tester.pump(const Duration(seconds: 5));

    expect(find.text('Mark as taken'), findsOneWidget);
    await tester.ensureVisible(find.text('Mark as taken'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Mark as taken'));
    await tester.pumpAndSettle();

    expect(find.text('MEDICINE TIME'), findsNothing);
    final saved = await ngmyExportMedicines(userEmail: 'member@example.com');
    expect(saved.single.lastTakenSlot, '09:30');
    expect(saved.single.lastTakenAt, isNotNull);
  });
}
