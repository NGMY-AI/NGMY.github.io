import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_game_session.dart';
import 'package:ngmy/ngmy_wallet_memory.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('a partial history on the phone never replaces the real balance', () {
    final partial = [
      AppTransaction(id: 'a', userEmail: 'me@x.com', amount: 5, type: TransactionType.adminAdd, method: PaymentMethod.system, status: TransactionStatus.approved, timestamp: DateTime.now()),
    ];
    ngmyUserWalletLedgerSettled = false;
    expect(ngmyResolveAccountBalance('me@x.com', 420, partial), 420);
    ngmyUserWalletLedgerSettled = true;
    expect(ngmyResolveAccountBalance('me@x.com', 420, partial), 5);
    ngmyUserWalletLedgerSettled = false;
  });

  test('every balance shown is remembered for the next launch', () async {
    SharedPreferences.setMockInitialValues({});
    await NgmyWalletMemory.load();
    ngmySeedLiveBalance('Me@X.com', 312.5);
    expect(NgmyWalletMemory.balanceOf('me@x.com'), 312.5);
    NgmyWalletMemory.rememberWallet('me@x.com', balance: 300, totalProfit: 40, todayEarned: 6, investment: {'name': 'Gold'});
    expect(NgmyWalletMemory.of('me@x.com')!['totalProfit'], 40);
  });
}
