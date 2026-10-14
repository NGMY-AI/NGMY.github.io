import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_game_session.dart';
import 'package:ngmy/ngmy_wallet_memory.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('a not-yet-loaded \$0 shows the balance saved on the phone, never more', () async {
    SharedPreferences.setMockInitialValues({});
    await NgmyWalletMemory.load();
    NgmyWalletMemory.rememberBalance('a@b.com', 25.5);
    ngmyUserWalletLedgerSettled = false;
    expect(ngmyBalanceOrRemembered('A@b.com', 0), 25.5);
    expect(ngmyBalanceOrRemembered('a@b.com', 10), 10); // real balance is never raised
    expect(ngmyLiveBalanceFor('a@b.com', fallback: () => 0), 25.5);
    ngmyUserWalletLedgerSettled = true;
    expect(ngmyBalanceOrRemembered('a@b.com', 0), 0); // after loading, $0 is real
  });
}
