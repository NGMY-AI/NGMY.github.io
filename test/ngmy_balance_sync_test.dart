import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_wallet_server.dart';

void main() {
  test('a phone with an old higher balance never brings spent money back', () {
    // Phone B still shows 352; phone A already lost a 2 bet, so the server holds 350.
    final target = ngmyBalanceToSave(local: 352, known: 352, cloud: 350);
    expect(target, 350);
  });

  test('a change made on this phone is applied on top of what the server holds now', () {
    // This phone earned 1 (352 to 353) while another phone spent 2 (server 350).
    expect(ngmyBalanceToSave(local: 353, known: 352, cloud: 350), 351);
    // This phone withdrew 10.
    expect(ngmyBalanceToSave(local: 342, known: 352, cloud: 352), 342);
  });

  test('without a known figure a higher local number is never pushed up', () {
    expect(ngmyBalanceToSave(local: 352, known: null, cloud: 350), 350);
    expect(ngmyBalanceToSave(local: 340, known: null, cloud: 350), 340);
  });

  test('the server balance is trusted only for a moment after a game settles', () {
    ngmyServerBalances['a@x.com'] = 350;
    ngmyServerBalanceAt['a@x.com'] = DateTime.now();
    expect(ngmyFreshServerBalance('a@x.com'), 350);
    ngmyServerBalanceAt['a@x.com'] = DateTime.now().subtract(const Duration(seconds: 30));
    expect(ngmyFreshServerBalance('a@x.com'), isNull);
  });

  test('balance saves wait for a game that is still settling', () async {
    ngmyBeginGameSettle();
    var waited = false;
    final f = ngmyWaitForGameSettles(max: const Duration(seconds: 3)).then((_) => waited = true);
    await Future<void>.delayed(const Duration(milliseconds: 400));
    expect(waited, isFalse);
    ngmyEndGameSettle();
    await f;
    expect(waited, isTrue);
  });
}
