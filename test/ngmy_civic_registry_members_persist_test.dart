import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_members.dart';

void main() {
  test('a named member with a registry ID is never treated as a phantom', () {
    expect(
      NgmyCivicRegistryMembers.isPhantomMemberRow({
        'registryId': 'GA-10021',
        'fullName': 'Maya Member',
        'state': 'Georgia',
      }),
      isFalse,
    );
    expect(
      NgmyCivicRegistryMembers.isPhantomMemberRow({
        'registryId': '',
        'fullName': 'Maya Member',
      }),
      isTrue,
    );
    expect(
      NgmyCivicRegistryMembers.isPhantomMemberRow({
        'registryId': 'GA-10021',
        'fullName': 'Member',
        'username': 'Member',
      }),
      isTrue,
    );
  });
}
