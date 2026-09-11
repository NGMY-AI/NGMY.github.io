import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_identity.dart';
import 'package:ngmy/ngmy_civic_registry_members.dart';

void main() {
  group('registry ID matching', () {
    test('dashes, spaces, and case do not change the ID', () {
      expect(NgmyCivicWalletIdentity.idsEqual('GA1234567', 'GA-1234567'), isTrue);
      expect(NgmyCivicWalletIdentity.idsEqual('GA1234567', 'ga 123 4567'), isTrue);
      expect(NgmyCivicWalletIdentity.idsEqual('GA1234567', 'NGMY-CIVIC:GA1234567'), isTrue);
      expect(NgmyCivicWalletIdentity.idsEqual('GA1234567', 'GA1234568'), isFalse);
    });

    test('masked ** IDs are the same person as the printed GA ID', () {
      expect(NgmyCivicWalletIdentity.idsEqual('**6250732', 'GA6250732'), isTrue);
      expect(
        NgmyCivicWalletIdentity.rankingPersonKey('**6250732'),
        NgmyCivicWalletIdentity.rankingPersonKey('GA6250732'),
      );
      expect(NgmyCivicWalletIdentity.isMaskedRegistryId('**6250732'), isTrue);
      expect(NgmyCivicWalletIdentity.isCanonicalRegistryId('GA6250732'), isTrue);
    });

    test('accepts a previous registry ID after a reprint', () {
      final member = {
        'state': 'Georgia',
        'registryId': 'GA9990001',
        'previousRegistryId': 'GA1234567',
      };
      expect(NgmyCivicWalletIdentity.idMatches(member, 'GA-1234567'), isTrue);
      expect(NgmyCivicWalletIdentity.idMatches(member, 'GA9990001'), isTrue);
    });

    test('findById locates the member even when the typed ID has dashes', () {
      final members = [
        {
          'state': 'Georgia',
          'fullName': 'Ada King',
          'registryId': 'GA1234567',
          'dob': '01/15/1990',
        },
      ];
      final found = NgmyCivicWalletIdentity.findById(
        members: members,
        state: 'Georgia',
        registryId: 'GA-1234567',
      );
      expect(found, isNotNull);
      expect(found!['fullName'], 'Ada King');
    });
  });

  group('name matching', () {
    test('same first and last name still match when a middle name is missing', () {
      final members = [
        {
          'state': 'Georgia',
          'fullName': 'John A Smith',
          'registryId': 'GA1111111',
        },
      ];
      final found = NgmyCivicWalletIdentity.findByName(
        members: members,
        state: 'Georgia',
        fullName: 'John Smith',
      );
      expect(found, isNotNull);
      expect(found!['registryId'], 'GA1111111');
    });

    test('correct ID picks the right person when two members share a name', () {
      final members = [
        {
          'state': 'Georgia',
          'fullName': 'John Smith',
          'registryId': 'GA1111111',
          'dob': '01/01/1980',
        },
        {
          'state': 'Georgia',
          'fullName': 'John Smith',
          'registryId': 'GA2222222',
          'dob': '02/02/1985',
        },
      ];
      final byName = NgmyCivicWalletIdentity.findByName(
        members: members,
        state: 'Georgia',
        fullName: 'John Smith',
      );
      expect(byName!['registryId'], 'GA1111111');
      final byId = NgmyCivicWalletIdentity.findById(
        members: members,
        state: 'Georgia',
        registryId: 'GA-2222222',
      );
      expect(byId!['registryId'], 'GA2222222');
      expect(NgmyCivicWalletIdentity.idMatches(byName, 'GA-2222222'), isFalse);
    });
  });

  group('display names', () {
    test('registry IDs are not used as a person name', () {
      expect(NgmyCivicRegistryMembers.isPublicPersonName('GA1234567'), isFalse);
      expect(NgmyCivicRegistryMembers.isPublicPersonName('Member'), isFalse);
      expect(NgmyCivicRegistryMembers.isPublicPersonName('Ada King', registryId: 'GA1234567'), isTrue);
      expect(
        NgmyCivicRegistryMembers.resolvedDisplayName({
          'fullName': 'GA1234567',
          'username': 'Ada King',
          'registryId': 'GA1234567',
        }),
        'Ada King',
      );
    });
  });

  group('date of birth', () {
    test('MMDDYYYY and MM/DD/YYYY are the same date', () {
      final member = {'dob': '01/15/1990'};
      expect(NgmyCivicWalletIdentity.dobMatches(member, '01151990'), isTrue);
      expect(NgmyCivicWalletIdentity.dobMatches(member, '01-15-1990'), isTrue);
      expect(NgmyCivicWalletIdentity.dobMatches(member, '01/16/1990'), isFalse);
    });
  });
}
