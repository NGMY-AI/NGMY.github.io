import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';

AppTransaction _t(String id, String details, {double amount = 1, TransactionType type = TransactionType.reimbursement, TransactionStatus status = TransactionStatus.approved}) => AppTransaction(
      id: id,
      userEmail: 'a@x.com',
      amount: amount,
      type: type,
      method: PaymentMethod.system,
      sourceDetails: details,
      status: status,
      timestamp: DateTime(2026, 10, 25, 12),
    );

void main() {
  test('crown and clock-in rewards are settled once on the server, other money is not', () {
    expect(ngmyIsServerRewardTransaction(_t('crown_a@x.com_20261025', 'Crown daily reward (King)')), isTrue);
    expect(ngmyIsServerRewardTransaction(_t('clock_a@x.com_20261025', 'Clock-in daily earnings', amount: 4.5)), isTrue);
    expect(ngmyIsServerRewardTransaction(_t('clock_a@x.com_20261025', 'Clock-in daily earnings (local)')), isFalse);
    expect(ngmyIsServerRewardTransaction(_t('x1', 'Crown daily reward (King)')), isFalse);
    expect(ngmyIsServerRewardTransaction(_t('crown_a@x.com_20261025', 'Crown daily reward (King)', status: TransactionStatus.pending)), isFalse);
    expect(ngmyIsServerSettledTransaction(_t('g1', 'Game bet: Dice', type: TransactionType.adminRemove)), isTrue);
    expect(ngmyIsServerSettledTransaction(_t('d1', 'Deposit', type: TransactionType.deposit)), isFalse);
    // Rewards are not games, so they still show in the wallet history.
    expect(ngmyIsGameLedgerTransaction(_t('crown_a@x.com_20261025', 'Crown daily reward (King)')), isFalse);
  });
}
