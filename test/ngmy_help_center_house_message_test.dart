import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_help_center.dart';

void main() {
  test('house insurance WhatsApp message is grouped by section', () {
    final cfg = NgmyHelpCenterConfig.defaults();
    final house = cfg.services.firstWhere((s) => s.id == 'house_fixture');
    final msg = cfg.buildRequestMessage(
      service: house,
      clientName: 'Ada Lovelace',
      clientPhone: '4045550100',
      clientEmail: 'ada@example.com',
      coverageItems: const ['Faucet & sink leaks', 'Door & lock'],
      housePlanLine: r'$50 for 30 days · covered until 11/6/2026',
      serviceAddress: '12 Oak St',
      problemDetails: 'Drip under the handle',
      reference: 'HC-20261007-1001',
    );

    expect(msg, contains('*NGMY House + Insurance*'));
    expect(msg, contains('*Member*'));
    expect(msg, contains('Ada Lovelace'));
    expect(msg, contains('*Subscription*'));
    expect(msg, contains(r'$50 for 30 days · covered until 11/6/2026'));
    expect(msg, contains('*Chosen services*'));
    expect(msg, contains('1. Faucet & sink leaks'));
    expect(msg, contains('2. Door & lock'));
    expect(msg, contains('*Visit*'));
    expect(msg, contains('12 Oak St'));
    expect(msg, contains('*The problem*'));
    expect(msg, contains('Drip under the handle'));
    expect(msg, isNot(contains('House Fixture')));
    expect(msg, isNot(contains('Coverage chosen:')));
  });
}
