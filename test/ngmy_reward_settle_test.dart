import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_local_growth_income_ui.dart';

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
  trailTests();
  retentionTests();
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

AppTransaction _at(String id, TransactionType type, double amount, int hour, {TransactionStatus status = TransactionStatus.approved}) => AppTransaction(
      id: id,
      userEmail: 'a@x.com',
      amount: amount,
      type: type,
      method: PaymentMethod.system,
      sourceDetails: 'x',
      status: status,
      timestamp: DateTime(2026, 10, 25, hour),
    );

void trailTests() {
  test('wallet history shows the balance before and after each move', () {
    final trail = ngmyBalanceTrail([
      _at('dep', TransactionType.deposit, 20, 8),
      _at('bet', TransactionType.adminRemove, 5, 9),
      _at('crown', TransactionType.reimbursement, 1, 10),
      _at('rej', TransactionType.withdrawal, 50, 11, status: TransactionStatus.rejected),
    ], 16);
    expect(trail['crown'], (before: 15.0, after: 16.0));
    expect(trail['rej'], (before: 16.0, after: 16.0));
    expect(trail['bet'], (before: 20.0, after: 15.0));
    expect(trail['dep'], (before: 0.0, after: 20.0));
  });
}

void retentionTests() {
  test('wallet history keeps two months; games, civic and waiting requests are not purged', () {
    final now = DateTime(2026, 10, 25);
    AppTransaction mk(TransactionType type, DateTime at, {String d = 'x', TransactionStatus s = TransactionStatus.approved}) => AppTransaction(
          id: 'i${at.millisecondsSinceEpoch}${type.index}',
          userEmail: 'a@x.com',
          amount: 5,
          type: type,
          method: PaymentMethod.system,
          sourceDetails: d,
          status: s,
          timestamp: at,
        );
    final old = DateTime(2026, 8, 1);
    final recent = DateTime(2026, 10, 1);
    expect(ngmyWalletRowTooOld(mk(TransactionType.deposit, old), now), isTrue);
    expect(ngmyWalletRowTooOld(mk(TransactionType.reimbursement, old, d: 'Crown daily reward (King)'), now), isTrue);
    expect(ngmyWalletRowTooOld(mk(TransactionType.adminRemove, old, d: 'NGMY Store purchase'), now), isTrue);
    expect(ngmyWalletRowTooOld(mk(TransactionType.deposit, recent), now), isFalse);
    expect(ngmyWalletRowTooOld(mk(TransactionType.adminRemove, old, d: 'Game bet: Dice'), now), isFalse);
    expect(ngmyWalletRowTooOld(mk(TransactionType.contribution, old), now), isFalse);
    expect(ngmyWalletRowTooOld(mk(TransactionType.withdrawal, old, s: TransactionStatus.pending), now), isFalse);
  });
}
