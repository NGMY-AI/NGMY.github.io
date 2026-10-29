import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_communicate_payments.dart';
import 'package:ngmy/ngmy_communicate_storage.dart';
import 'package:shared_preferences/shared_preferences.dart';

class _Cfg {
  _Cfg(this.communicateMinutesPerPayment);
  final int communicateMinutesPerPayment;
}

void main() {
  test('the advisors are free for 10 minutes before they ask for a pass (the old saved 30 counts as the new 10)', () {
    expect(NgmyCommunicatePayments.defaultMinutesPerPayment, 10);
    expect(NgmyCommunicatePayments.minutesPerPaymentFromConfig(_Cfg(30)), 10);
    expect(NgmyCommunicatePayments.minutesPerPaymentFromConfig(_Cfg(10)), 10);
    expect(NgmyCommunicatePayments.minutesPerPaymentFromConfig(_Cfg(20)), 20, reason: 'an admin choice is kept');
    expect(NgmyCommunicatePayments.thresholdSeconds(_Cfg(30)), 600);
  });
  test('everybody starts again with 10 free minutes: what was already used is forgiven once, then time counts again', () async {
    SharedPreferences.setMockInitialValues({'ngmy_communicate_used_sec_a@b.com': 1900});
    expect(await NgmyCommunicateTimeTracker.getUsedSeconds('a@b.com'), 1900, reason: 'before the reset it was counted');
    expect(await NgmyCommunicateTimeTracker.syncFromCloud('a@b.com'), 0, reason: 'the reset forgives it');
    expect(await NgmyCommunicateTimeTracker.getUsedSeconds('a@b.com'), 0);
    await NgmyCommunicateTimeTracker.addSeconds('a@b.com', 240);
    expect(await NgmyCommunicateTimeTracker.getUsedSeconds('a@b.com'), 240, reason: 'new time counts');
    await NgmyCommunicateTimeTracker.syncFromCloud('a@b.com');
    expect(await NgmyCommunicateTimeTracker.getUsedSeconds('a@b.com'), 240, reason: 'the reset happens only once');
  });
}
