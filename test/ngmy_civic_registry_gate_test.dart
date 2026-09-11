import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_gate.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('only server v1 hashes count as a changed state-code check', () {
    expect(civicRegistryPinSigIsServerIssued('v1:abc'), isTrue);
    expect(civicRegistryPinSigIsServerIssued('v1:local'), isFalse);
    expect(civicRegistryPinSigIsServerIssued('georgia|-12345'), isFalse);
    expect(civicRegistryPinSigIsServerIssued(''), isFalse);
  });

  test('unlock lookup matches Georgia and GA as the same state', () {
    final entry = civicRegistryUnlockEntryFromStates(
      {
        'Georgia': {'pinSig': 'v1:local', 'registryId': 'GA4944484'},
      },
      'GA',
    );
    expect(entry, isNotNull);
    expect(entry!['pinSig'], 'v1:local');
    expect(entry['registryId'], 'GA4944484');
  });

  test('a saved membership verify stays unlocked until Civic access changes', () async {
    SharedPreferences.setMockInitialValues({});
    await civicRegistrySaveServerUnlock(
      'member@example.com',
      state: 'Georgia',
      pinSig: 'v1:local',
      registryId: 'GA4944484',
    );
    expect(
      await civicRegistryIsUnlocked(
        'member@example.com',
        state: 'Georgia',
        globalPin: '',
        pinsByState: const {},
      ),
      isTrue,
    );
    expect(
      await civicRegistryIsUnlocked(
        'member@example.com',
        state: 'GA',
        globalPin: '',
        pinsByState: const {},
      ),
      isTrue,
    );
  });
}
