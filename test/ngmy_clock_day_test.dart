import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_clock_day.dart';

void main() {
  test('same clock day by the app day even when the phone time zone moved', () {
    // 9:00 AM Pacific = 12:00 PM Eastern; later the phone is in New York at 1:30 AM next local day
    // but still the same Eastern-standard day only if before 05:00 UTC next day.
    final pacificMorning = DateTime.utc(2026, 10, 16, 16, 0); // 11:00 ET-std, 9:00 PT
    final laterSameAppDay = DateTime.utc(2026, 10, 17, 4, 30); // 23:30 ET-std
    expect(ngmySameClockDay(pacificMorning, laterSameAppDay), isTrue);
    final nextMorning = DateTime.utc(2026, 10, 17, 14, 0);
    expect(ngmyClockDayKey(nextMorning) == ngmyClockDayKey(pacificMorning), isFalse);
  });

  test('records: a session start or payout today blocks another clock-in', () {
    final now = DateTime.now();
    expect(
      ngmyClockedInTodayFromRecords([(id: 'clockin_start_a@b.c_1', details: 'Clock-in session started (auto)', at: now)], now),
      isTrue,
    );
    expect(
      ngmyClockedInTodayFromRecords([(id: 'x', details: 'Clock-in daily earnings', at: now)], now),
      isTrue,
    );
    expect(
      ngmyClockedInTodayFromRecords([(id: 'x', details: 'Game bet: Dice', at: now)], now),
      isFalse,
    );
    expect(
      ngmyClockedInTodayFromRecords([(id: 'clockin_start_a', details: '', at: now.subtract(const Duration(days: 2)))], now),
      isFalse,
    );
  });
}
