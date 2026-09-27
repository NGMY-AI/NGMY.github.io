import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_cloud_policy.dart';

void main() {
  group('settings allowlist (must match security_audit_hardening.sql)', () {
    test('published catalog pages stay public', () {
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_app_branding'), isTrue);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_popups'), isTrue);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_bio_pub_demo'), isTrue);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_menu_pub_demo'), isTrue);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_bio_publish_registry'), isTrue);
    });

    test('share tokens and transfer vaults are not public REST', () {
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_slides_transfer_qr_stashes_v1'), isFalse);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_doc_share_stash_v2_TOKEN'), isFalse);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_doc_share_code_v2_ABCD'), isFalse);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_refcode_REFD000001'), isFalse);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_essentials_code_v1_X'), isFalse);
    });

    test('private user and civic rows stay network-sensitive', () {
      expect(NgmyCloudPolicy.settingsKeyNetworkSensitive('civic_registry_members'), isTrue);
      expect(NgmyCloudPolicy.settingsKeyNetworkSensitive('wallet_txn_decisions'), isFalse);
      expect(NgmyCloudPolicy.settingsKeyNetworkSensitive('ngmy_gi_account_wallet_v1_a@b.c'), isTrue);
      expect(NgmyCloudPolicy.settingsKeyNetworkSensitive('management_operational_lists'), isTrue);
    });
  });
}
