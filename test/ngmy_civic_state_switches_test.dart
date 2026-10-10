import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_state_switches.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('first state is free, then each change counts, lock after the last', () {
    var used = 0;
    String anchor = '';
    DateTime? lock;
    bool change(String from, String to) => NgmyCivicStateSwitches.tryConsumeSwitch(
          isAdmin: false,
          isCivicRegistryAdmin: false,
          fromState: from,
          toState: to,
          anchorState: anchor,
          setAnchorState: (s) => anchor = s,
          switchesUsed: used,
          setSwitchesUsed: (n) => used = n,
          lockedUntil: lock,
          setLockedUntil: (u) => lock = u,
        );

    expect(change('Georgia', 'Alabama'), isTrue);
    expect(used, 0, reason: 'first state only sets the anchor');
    expect(change('Alabama', 'Alabama'), isTrue);
    expect(used, 0, reason: 'same state is never counted');
    for (var i = 0; i < NgmyCivicStateSwitches.maxSwitches; i++) {
      expect(change(i.isEven ? 'Alabama' : 'Texas', i.isEven ? 'Texas' : 'Alabama'), isTrue);
    }
    expect(used, NgmyCivicStateSwitches.maxSwitches);
    expect(lock, isNotNull);
    expect(change('Alabama', 'Ohio'), isFalse);
  });

  test('phone copy keeps the count, lock and "not synced yet" mark', () async {
    SharedPreferences.setMockInitialValues({});
    final lock = DateTime.utc(2026, 10, 10, 18);
    await NgmyCivicStateSwitches.saveLocal(
      email: 'Member@Example.com',
      switchesUsed: 3,
      anchorState: 'Alabama',
      lockedUntil: lock,
      synced: false,
    );
    final saved = await NgmyCivicStateSwitches.loadLocal('member@example.com');
    expect(saved!['used'], 3);
    expect(saved['synced'], isFalse);
    expect(NgmyCivicStateSwitches.parseLockedUntil(saved['lockedUntil']), lock);
  });
}
