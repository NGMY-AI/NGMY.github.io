import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_game_session.dart';
import 'package:ngmy/ngmy_wallet_server.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
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

  test('the balance drops the moment a bet is placed and a late older number cannot raise it', () async {
    const email = 'live@x.com';
    ngmySeedLiveBalance(email, 350, authoritative: true);
    ngmyBeginGameSettle();
    ngmyNotifyBalanceChanged(email: email, balance: 348, authoritative: true);
    expect(ngmyLiveBalanceFor(email), 348);
    // A database echo or an older read that still says 350 arrives mid-settle.
    ngmyNotifyBalanceChanged(email: email, balance: 350);
    ngmySeedLiveBalance(email, 350);
    expect(ngmyLiveBalanceFor(email), 348);
    // The server's answer is authoritative.
    ngmySeedLiveBalance(email, 348, authoritative: true);
    ngmyEndGameSettle();
    ngmyNotifyBalanceChanged(email: email, balance: 350);
    expect(ngmyLiveBalanceFor(email), 348);
  });

  test('a win shows instantly and a stale lower number never hides it', () {
    const email = 'win@x.com';
    ngmySeedLiveBalance(email, 348, authoritative: true);
    ngmyBeginGameSettle();
    ngmyNotifyBalanceChanged(email: email, balance: 352, authoritative: true);
    expect(ngmyLiveBalanceFor(email), 352);
    ngmyEndGameSettle();
  });

  test('raises are accepted again once the settle window has passed', () async {
    const email = 'later@x.com';
    ngmySeedLiveBalance(email, 100, authoritative: true);
    await Future<void>.delayed(const Duration(milliseconds: 2700));
    ngmyNotifyBalanceChanged(email: email, balance: 150);
    expect(ngmyLiveBalanceFor(email), 150);
  });

  group('money never leaves an account without a spend that explains it', () {
    test('a stale low balance on a phone cannot pull 900 down to 8 dollars', () {
      expect(ngmyBalanceToSave(local: 8, known: 900, cloud: 900, explainedDebit: 0), 900);
      expect(ngmyBalanceToSave(local: 8, known: null, cloud: 900, explainedDebit: 0), 900);
    });

    test('a real spend still lowers the balance', () {
      expect(ngmyBalanceToSave(local: 850, known: 900, cloud: 900, explainedDebit: 50), 850);
      expect(ngmyBalanceToSave(local: 850, known: null, cloud: 900, explainedDebit: 50), 850);
    });

    test('a drop larger than the spends behind it is refused', () {
      expect(ngmyBalanceToSave(local: 700, known: 900, cloud: 900, explainedDebit: 50), 900);
    });

    test('a spend made while another phone also spent keeps both', () {
      expect(ngmyBalanceToSave(local: 850, known: 900, cloud: 880, explainedDebit: 50), 830);
    });

    test('game receipts the server has not confirmed are tracked per receipt', () {
      ngmyUnsettledGameTxns['t1'] = (key: 'g@x.com', delta: -2.0);
      ngmyUnsettledGameTxns['t2'] = (key: 'g@x.com', delta: 5.0);
      expect(ngmyUnsettledGameNetFor('g@x.com'), 3.0);
      ngmyUnsettledGameTxns.clear();
      expect(ngmyUnsettledGameNetFor('g@x.com'), 0.0);
    });

    test('plan buys noted on this phone explain a drop only after the last save', () {
      ngmyNoteLocalDebit('p@x.com+local.ngmy', 120);
      expect(ngmyNotedDebitsSince('p@x.com', DateTime.now().subtract(const Duration(minutes: 1))), 120);
      expect(ngmyNotedDebitsSince('p@x.com', DateTime.now().add(const Duration(seconds: 1))), 0);
    });
  });
}
