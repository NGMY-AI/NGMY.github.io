import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_local_growth_income.dart';

AppTransaction _clock(DateTime d) => AppTransaction(
      id: 'c${d.millisecondsSinceEpoch}',
      userEmail: 'a@b.com',
      amount: 2,
      type: TransactionType.reimbursement,
      method: PaymentMethod.system,
      sourceDetails: 'Clock-in daily earnings (local)',
      status: TransactionStatus.approved,
      timestamp: d,
    );

UserData _investor() => UserData(
      email: 'a@b.com',
      activeInvestment: ActiveInvestment(name: 'Plan', amount: 100, dailyROI: 2, purchaseDate: DateTime(2026, 9, 28), daysClockedIn: 0, totalEarned: 0),
    );

void main() {
  // Oct 2026: Thu 1, Fri 2, Mon 5 … Fri 9, Mon 12, Tue 13, Wed 14, Thu 15.
  final done = [for (final d in [1, 2, 5, 6, 7, 8, 9, 12]) _clock(DateTime(2026, 10, d, 9))];

  test('two missed weekdays warn, the third removes the plan', () {
    final u = _investor();
    expect(NgmyLocalGrowthIncomeStore.evaluateMisses(u, done, DateTime(2026, 10, 14, 13)), 'warn2');
    expect(u.clockInMissedDays.length, 2);
    expect(u.activeInvestment, isNotNull);
    expect(NgmyLocalGrowthIncomeStore.evaluateMisses(u, done, DateTime(2026, 10, 15, 13)), 'reset');
    expect(u.activeInvestment, isNull);
  });

  test('the count starts again from zero every month', () {
    final u = _investor();
    NgmyLocalGrowthIncomeStore.evaluateMisses(u, done, DateTime(2026, 10, 14, 13));
    expect(u.clockInMissedDays.length, 2);
    // Next month, before noon on Monday Nov 2: only Nov 2... is not counted yet, so it starts at zero.
    final action = NgmyLocalGrowthIncomeStore.evaluateMisses(u, done, DateTime(2026, 11, 2, 10));
    expect(action, isNull);
    expect(u.clockInMissedDays, isEmpty);
    expect(u.activeInvestment, isNotNull);
  });

  test('a morning check-in on a past weekday means it is not missed', () {
    final u = _investor();
    final all = [...done, _clock(DateTime(2026, 10, 13, 8)), _clock(DateTime(2026, 10, 14, 8))];
    expect(NgmyLocalGrowthIncomeStore.evaluateMisses(u, all, DateTime(2026, 10, 14, 13)), isNull);
    expect(u.clockInMissedDays, isEmpty);
  });

  test('30 minutes late costs 30 percent', () {
    expect(NgmyLocalGrowthIncomeStore.latePenaltyPercent(DateTime(2026, 10, 14, 0, 45)), 30);
    expect(NgmyLocalGrowthIncomeStore.latePenaltyPercent(DateTime(2026, 10, 14, 9, 0)), 30);
  });
}
