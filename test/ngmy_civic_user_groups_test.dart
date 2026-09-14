import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_user_groups.dart';

void main() {
  group('invite codes', () {
    test('accepts 3 letters plus 1–5 digits', () {
      expect(ngmyCivicUserGroupCodeIsValid('ABC1'), isTrue);
      expect(ngmyCivicUserGroupCodeIsValid('abc12345'), isTrue);
      expect(ngmyCivicUserGroupCodeIsValid('AB12'), isFalse);
      expect(ngmyCivicUserGroupCodeIsValid('ABCD12'), isFalse);
      expect(ngmyCivicUserGroupCodeIsValid('ABC123456'), isFalse);
    });

    test('parses typed codes and QR payloads', () {
      expect(ngmyParseCivicUserGroupInviteCode('abc12'), 'ABC12');
      expect(ngmyParseCivicUserGroupInviteCode('abc 12'), 'ABC12');
      expect(
        ngmyParseCivicUserGroupInviteCode('NGMY-GROUP:XYZ99'),
        'XYZ99',
      );
      expect(ngmyParseCivicUserGroupInviteCode('GRP-HELLO1'), 'GRP-HELLO1');
      expect(ngmyParseCivicUserGroupInviteCode(''), isNull);
      expect(ngmyParseCivicUserGroupInviteCode('not-a-code'), isNull);
    });

    test('QR payload uses the group prefix', () {
      expect(ngmyCivicUserGroupQrPayload('abc12'), 'NGMY-GROUP:ABC12');
    });
  });

  group('help mode', () {
    test('does not activate without a purpose', () {
      final g = NgmyCivicUserGroup(
        id: 'g1',
        name: 'ABC12',
        ownerEmail: 'owner@example.com',
        ownerName: 'Owner',
        inviteCode: 'ABC12',
        createdAt: DateTime.utc(2026, 1, 1),
      );
      g.activateHelpMode();
      expect(g.helpModeActive, isFalse);
      expect(g.helpCampaignId, isEmpty);

      g.saveHelpSettings(
        purpose: 'Rent help',
        cashApp: r'$owner',
        zelle: 'owner@example.com',
        phone: '404-555-0100',
      );
      g.activateHelpMode();
      expect(g.helpModeActive, isTrue);
      expect(g.helpPurpose, 'Rent help');
      expect(g.helpCampaignId, isNotEmpty);
    });

    test('closing a round marks members who did not contribute', () {
      final g = NgmyCivicUserGroup(
        id: 'g1',
        name: 'ABC12',
        ownerEmail: 'owner@example.com',
        ownerName: 'Owner',
        inviteCode: 'ABC12',
        createdAt: DateTime.utc(2026, 1, 1),
        members: [
          NgmyCivicUserGroupMember(
            email: 'member@example.com',
            name: 'Member',
            joinedAt: DateTime.utc(2026, 1, 2),
          ),
        ],
      );
      g.saveHelpSettings(
        purpose: 'Food',
        cashApp: '',
        zelle: '',
        phone: '',
      );
      g.activateHelpMode();
      g.ledger.add(
        NgmyCivicUserGroupLedgerEntry(
          id: 'led1',
          kind: NgmyCivicUserGroupLedgerKind.contribution,
          amount: 20,
          label: 'Owner',
          note: 'Food',
          at: DateTime.utc(2026, 1, 3),
          byEmail: 'owner@example.com',
          campaignId: g.helpCampaignId,
          memberEmail: 'owner@example.com',
        ),
      );
      expect(g.contributedToCampaign('Owner', g.helpCampaignId), isTrue);
      expect(
        g.contributedToCampaign('Member', g.helpCampaignId, email: 'member@example.com'),
        isFalse,
      );
      g.deactivateHelpMode();
      expect(g.helpModeActive, isFalse);
      expect(g.ownerMissed, 0);
      expect(g.missedFor('Member', 'member@example.com'), 1);
    });
  });

  group('ledger', () {
    test('round-trips contribution and spending JSON', () {
      final entry = NgmyCivicUserGroupLedgerEntry(
        id: 'led1',
        kind: NgmyCivicUserGroupLedgerKind.contribution,
        amount: 12.5,
        label: 'Ada',
        note: 'Round 1',
        at: DateTime.utc(2026, 2, 1, 15),
        byEmail: 'owner@example.com',
        campaignId: 'lg_1',
        memberEmail: 'ada@example.com',
      );
      final copy = NgmyCivicUserGroupLedgerEntry.fromJson(entry.toJson());
      expect(copy.kind, NgmyCivicUserGroupLedgerKind.contribution);
      expect(copy.amount, 12.5);
      expect(copy.memberEmail, 'ada@example.com');
      expect(copy.campaignId, 'lg_1');

      final spend = NgmyCivicUserGroupLedgerEntry.fromJson({
        'id': 's1',
        'kind': 'spending',
        'amount': 4,
        'label': 'Supplies',
        'note': '',
        'at': '2026-02-02T00:00:00.000Z',
        'byEmail': 'owner@example.com',
      });
      expect(spend.kind, NgmyCivicUserGroupLedgerKind.spending);
    });

    test('group totals and membership', () {
      final g = NgmyCivicUserGroup(
        id: 'g1',
        name: 'ABC12',
        ownerEmail: 'owner@example.com',
        ownerName: 'Owner',
        inviteCode: 'ABC12',
        createdAt: DateTime.utc(2026, 1, 1),
        ledger: [
          NgmyCivicUserGroupLedgerEntry(
            id: 'c1',
            kind: NgmyCivicUserGroupLedgerKind.contribution,
            amount: 30,
            label: 'Ada',
            note: '',
            at: DateTime.utc(2026, 1, 2),
            byEmail: 'owner@example.com',
            memberEmail: 'ada@example.com',
          ),
          NgmyCivicUserGroupLedgerEntry(
            id: 's1',
            kind: NgmyCivicUserGroupLedgerKind.spending,
            amount: 10,
            label: 'Food',
            note: '',
            at: DateTime.utc(2026, 1, 3),
            byEmail: 'owner@example.com',
          ),
        ],
      );
      g.members.add(
        NgmyCivicUserGroupMember(
          email: 'ada@example.com',
          name: 'Ada',
          joinedAt: DateTime.utc(2026, 1, 2),
        ),
      );
      expect(g.totalContributions, 30);
      expect(g.totalSpending, 10);
      expect(g.balance, 20);
      expect(g.isMember('ADA@example.com'), isTrue);
      expect(g.isOwner('owner@example.com'), isTrue);
      expect(g.memberCount, 2);
      expect(g.emailForMemberName('Ada'), 'ada@example.com');
    });
  });
}
