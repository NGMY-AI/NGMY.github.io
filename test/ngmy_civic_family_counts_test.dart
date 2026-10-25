import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart' show AppConfig;
import 'package:ngmy/ngmy_civic_registry_members.dart';

void main() {
  test('refreshing contact details never wipes the male and female counts or the family', () {
    final config = AppConfig();
    final record = NgmyCivicRegistryMembers.buildRecord(
      email: 'a@b.c',
      fullName: 'John Mbuto',
      dob: '01/02/1980',
      idType: 'National ID',
      homeAddress: '1 Main St',
      phone: '5551234567',
      city: 'Dallas',
      room: '',
      state: 'Texas',
      registryId: 'TX1234567',
      familyMembers: 5,
      familyMales: 3,
      familyFemales: 2,
    );
    record['gender'] = 'male';
    record['maritalStatus'] = 'married';
    record['relatives'] = [
      {'id': 'r1', 'relation': 'spouse', 'fullName': 'Mary Mbuto', 'gender': 'female'}
    ];
    NgmyCivicRegistryMembers.upsert(config, record, forceNew: true);
    // The save step refreshes the row from the account's details (which know nothing about family counts).
    NgmyCivicRegistryMembers.syncFromFields(
      config,
      email: 'a@b.c',
      fullName: 'John Mbuto',
      dob: '01/02/1980',
      idType: 'National ID',
      homeAddress: '1 Main St',
      phone: '5551234567',
      city: 'Dallas',
      room: '',
      state: 'Texas',
      registryId: 'TX1234567',
      helps: 0,
      missed: 0,
    );
    final after = NgmyCivicRegistryMembers.findByRegistryId(config, 'TX1234567')!;
    expect(after['familyMembers'], 5);
    expect(after['familyMales'], 3);
    expect(after['familyFemales'], 2);
    expect(after['gender'], 'male');
    expect(after['maritalStatus'], 'married');
    expect((after['relatives'] as List).length, 1);
  });
}
