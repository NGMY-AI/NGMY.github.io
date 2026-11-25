import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_notification_routes.dart';

void main() {
  test('every notification leads where it came from', () {
    // Signal Grid trade alerts by system.
    expect(ngmyNotificationRoute('sg_trade_1', title: 'Options: bought MARA \$5.50 call'), 'options');
    expect(ngmyNotificationRoute('sg_trade_2', title: 'Scalper: sold AVGO +\$1.20'), 'scalper');
    expect(ngmyNotificationRoute('sg_trade_3', title: 'Signal Grid: bought BTC/USD'), 'signal_grid');
    expect(ngmyNotificationRoute('signal_abc', title: '▲ STRONG BUY EUR/USD'), 'signal_grid');
    // Civic Registry.
    expect(ngmyNotificationRoute('civic_bday_x', title: 'Birthday today'), 'civic_registry');
    expect(ngmyNotificationRoute('admin_civic_members_9', title: 'New civic registry member'), 'civic_registry');
    expect(ngmyNotificationRoute('admin_registrar_5', title: 'Registrar application'), 'civic_registry');
    expect(ngmyNotificationRoute('registrar_revoked_a@b.c', title: 'Registrar access removed'), 'civic_registry');
    // The rest of the app.
    expect(ngmyNotificationRoute('announcement_7', title: 'New announcement'), 'news');
    expect(ngmyNotificationRoute('news_7'), 'news');
    expect(ngmyNotificationRoute('game_invite_3', title: 'Game invite'), 'game_center');
    expect(ngmyNotificationRoute('store_sale_3', title: 'New sale'), 'store');
    expect(ngmyNotificationRoute('admin_store_orders_3'), 'store');
    expect(ngmyNotificationRoute('house_job_3', title: 'New work available'), 'help_center');
    expect(ngmyNotificationRoute('admin_house_care_payments_3'), 'help_center');
    expect(ngmyNotificationRoute('job_new_3', title: 'New job in marketplace'), 'media');
    expect(ngmyNotificationRoute('admin_deposits_txn:1'), 'admin');
    expect(ngmyNotificationRoute('day_before_2026-12-01', title: 'ngmy.org renews tomorrow'), 'admin');
    expect(ngmyNotificationRoute('txn_42', title: 'Money received'), 'profile');
    // Unknown: a civic word in the title, otherwise home.
    expect(ngmyNotificationRoute(null, title: 'Civic update'), 'civic_registry');
    expect(ngmyNotificationRoute('something_else', title: 'Hello'), 'home');
  });

  test('a tap waits for the app, then opens once', () async {
    NgmyNotificationOpen.reset();
    final opened = <String>[];
    NgmyNotificationOpen.deliver('options');
    expect(NgmyNotificationOpen.pending, 'options');
    Future<void> handler(String r) async => opened.add(r);
    NgmyNotificationOpen.attach(handler);
    await Future<void>.delayed(Duration.zero);
    expect(opened, ['options']);
    expect(NgmyNotificationOpen.pending, isNull);
    NgmyNotificationOpen.deliver('scalper');
    await Future<void>.delayed(Duration.zero);
    expect(opened, ['options', 'scalper']);
    NgmyNotificationOpen.detach(handler);
    NgmyNotificationOpen.deliver('civic_registry');
    expect(NgmyNotificationOpen.pending, 'civic_registry');
    NgmyNotificationOpen.deliver('');
    expect(NgmyNotificationOpen.pending, 'civic_registry');
    NgmyNotificationOpen.reset();
  });
}
