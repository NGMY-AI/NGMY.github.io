import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_members.dart';

void main() {
  test('the public sees the nickname only while it is switched on', () {
    final on = {'fullName': 'John Mbuto', 'nicknames': ['JM', 'Big J'], 'showNicknames': true};
    final off = {'fullName': 'John Mbuto', 'nicknames': ['JM'], 'showNicknames': false};
    final none = {'fullName': 'John Mbuto', 'nicknames': <String>[], 'showNicknames': true};
    expect(NgmyCivicRegistryMembers.publicDisplayName(on, fullName: 'John Mbuto', username: 'john'), 'JM · Big J');
    expect(NgmyCivicRegistryMembers.publicDisplayName(off, fullName: 'John Mbuto', username: 'john'), 'John Mbuto');
    expect(NgmyCivicRegistryMembers.publicDisplayName(none, fullName: 'John Mbuto', username: 'john'), 'John Mbuto');
    expect(NgmyCivicRegistryMembers.publicDisplayName(null, fullName: '', username: 'john'), 'john');
  });
}
