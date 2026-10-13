import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_game_session.dart';
import 'package:ngmy/ngmy_local_growth_income.dart';

AppTransaction _t(String id, {TransactionStatus status = TransactionStatus.approved, DateTime? at, String email = 'me@x.com'}) =>
    AppTransaction(
      id: id,
      userEmail: email,
      amount: 10,
      type: TransactionType.deposit,
      method: PaymentMethod.cashApp,
      status: status,
      timestamp: at ?? DateTime.now(),
    );

void main() {
  test('Growth Income history from two phones is merged, never dropped', () {
    final a = [_t('1'), _t('2', status: TransactionStatus.pending)];
    final b = [_t('2'), _t('3')];
    final merged = NgmyLocalGrowthIncomeStore.mergeTransactionHistories(a, b);
    expect(merged.map((t) => t.id).toSet(), {'1', '2', '3'});
    expect(merged.firstWhere((t) => t.id == '2').status, TransactionStatus.approved);
  });

  test('an empty cloud answer does not wipe this phone\'s history', () {
    final all = [_t('1'), _t('2')];
    expect(ngmyReplaceUserTransactionsFromCloud(all, 'me@x.com', const []).length, 2);
  });

  test('recent rows the server hasn\'t got yet are kept; old ones follow the server', () {
    final old = DateTime.now().subtract(const Duration(days: 10));
    final all = [_t('new'), _t('old', at: old), _t('cloud')];
    final out = ngmyReplaceUserTransactionsFromCloud(all, 'me@x.com', [_t('cloud')]);
    expect(out.map((t) => t.id).toSet(), {'new', 'cloud'});
  });

  test('a fresh local wallet save blocks an immediate cloud overwrite', () {
    ngmyMarkLocalWalletChange({'email': 'Me@X.com', 'accountBalance': 5});
    expect(ngmyWalletChangedLocallyRecently('me@x.com'), isTrue);
    ngmyMarkLocalWalletChange({'email': 'other@x.com', 'username': 'x'});
    expect(ngmyWalletChangedLocallyRecently('other@x.com'), isFalse);
  });
}
