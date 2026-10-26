import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_game_notifications.dart';
import 'package:ngmy/ngmy_game_session.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('receipts show the balance before and after, and are deleted after a week and past 59', () async {
    SharedPreferences.setMockInitialValues({});
    ngmyUserWalletLedgerSettled = true;
    // $952.51 → bet $12 → won back $1.17 → $941.68
    ngmySeedLiveBalance('me@x.com', 941.68);
    await NgmyGameNotifications.record(
      email: 'me@x.com+local.ngmy', gameTitle: 'Bubble Pop', won: true, amount: 1.17, stake: 12, detail: '1/15');
    // A lost game: $941.68 → bet $10 → $931.68
    ngmySeedLiveBalance('me@x.com', 931.68);
    await NgmyGameNotifications.record(email: 'me@x.com', gameTitle: 'Bubble Pop', won: false, amount: 10, stake: 10, detail: '');
    // A receipt older than a week is deleted for good.
    await NgmyGameNotifications.record(
      email: 'me@x.com', gameTitle: 'Old', won: true, amount: 2, detail: '', at: DateTime.now().subtract(const Duration(days: 8)));
    final list = await NgmyGameNotifications.listFor('me@x.com', syncCloud: false);
    expect(list.length, 2);
    expect(list.any((e) => e.gameTitle == 'Old'), isFalse);
    final lost = list.firstWhere((e) => !e.won);
    expect(lost.balanceBefore, closeTo(941.68, 0.001));
    expect(lost.balanceAfter, closeTo(931.68, 0.001));
    final win = list.firstWhere((e) => e.gameTitle == 'Bubble Pop' && e.won);
    expect(win.balanceBefore, closeTo(952.51, 0.001));
    expect(win.net, closeTo(-10.83, 0.001));
  });

  test('only the newest 59 receipts are kept', () async {
    SharedPreferences.setMockInitialValues({});
    for (var i = 0; i < 65; i++) {
      await NgmyGameNotifications.record(
        email: 'cap@x.com', gameTitle: 'G$i', won: false, amount: 1, detail: '', at: DateTime.now().subtract(Duration(minutes: 70 - i)));
    }
    final list = await NgmyGameNotifications.listFor('cap@x.com', syncCloud: false);
    expect(list.length, 59);
    expect(list.first.gameTitle, 'G64');
    expect(list.any((e) => e.gameTitle == 'G0'), isFalse);
  });
}
