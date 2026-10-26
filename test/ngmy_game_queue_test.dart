import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_game_queue.dart';
import 'package:ngmy/ngmy_wallet_server.dart';
import 'package:shared_preferences/shared_preferences.dart';

NgmyQueuedGameTxn q(String id, double delta, int sec) => NgmyQueuedGameTxn(
      id: id,
      key: 'a@b.c',
      delta: delta,
      at: DateTime.utc(2026, 1, 1, 0, 0, sec),
      txn: {'id': id, 'amount': delta.abs()},
    );

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    ngmyGameQueueResetForTest();
    ngmyUnsettledGameTxns.clear();
  });

  test('offline games stay queued, in order, and count against the balance until the server has them', () {
    ngmyGameQueueAdd(q('payout', 2.92, 5));
    ngmyGameQueueAdd(q('bet', -2, 1));
    expect([for (final e in ngmyGameQueueOrdered()) e.id], ['bet', 'payout']);
    expect(ngmyUnsettledGameNetFor('a@b.c'), closeTo(0.92, 0.001));
    // A game that is also in the in-flight map is only counted once.
    ngmyUnsettledGameTxns['bet'] = (key: 'a@b.c', delta: -2.0);
    expect(ngmyUnsettledGameNetFor('a@b.c'), closeTo(0.92, 0.001));
    ngmyGameQueueRemove('bet');
    ngmyUnsettledGameTxns.clear();
    expect(ngmyUnsettledGameNetFor('a@b.c'), closeTo(2.92, 0.001));
  });

  test('the queue survives closing the app', () async {
    ngmyGameQueueAdd(q('bet', -2, 1));
    await Future<void>.delayed(const Duration(milliseconds: 50));
    ngmyGameQueueResetForTest();
    expect(ngmyGameQueue, isEmpty);
    await ngmyGameQueueLoad();
    expect(ngmyGameQueue.keys, ['bet']);
    expect(ngmyGameQueue['bet']!.txn['amount'], 2);
    expect(ngmyUnsettledGameNetFor('a@b.c'), -2);
  });
}
