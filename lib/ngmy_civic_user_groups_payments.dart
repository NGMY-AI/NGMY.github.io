import 'package:flutter/material.dart';

import 'ngmy_civic_user_groups.dart';
import 'ngmy_stripe_payments.dart';

/// Paywalls for lightning Civic User Groups.
abstract final class NgmyCivicUserGroupsPayments {
  static const freeOwnedLimit = 1;

  static Future<bool> hasExtraOwnedSlot({
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    return NgmyStripePayments.hasActiveAccess(
      email,
      NgmyStripeProduct.civicUserGroupExtra,
    );
  }

  static Future<bool> hasMembersOverCapUnlock({
    required String email,
    required String groupId,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final scoped = await NgmyStripePayments.hasActiveScopedAccess(
      email,
      NgmyStripeProduct.civicUserGroupMembers,
      groupId,
    );
    if (scoped) return true;
    return NgmyStripePayments.hasActiveAccess(
      email,
      NgmyStripeProduct.civicUserGroupMembers,
    );
  }

  /// True when the user may create another owned group right now.
  static Future<bool> canCreateOwnedGroup({
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final owned = await NgmyCivicUserGroupsStore.ownedBy(email);
    if (owned.length < freeOwnedLimit) return true;
    return hasExtraOwnedSlot(email: email, isAdmin: isAdmin);
  }

  static Future<bool> ensureCanCreateOwnedGroup({
    required BuildContext context,
    required String email,
    bool isAdmin = false,
  }) async {
    if (await canCreateOwnedGroup(email: email, isAdmin: isAdmin)) return true;
    if (!context.mounted) return false;
    final ok = await NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.civicUserGroupExtra,
      email: email,
      isAdmin: isAdmin,
      title: 'Create another group',
      message:
          'Your free group slot is used. Subscribe to create another lightning group '
          '(${NgmyStripePayments.priceLabel(NgmyStripeProduct.civicUserGroupExtra)} / '
          '${NgmyStripePayments.durationLabel(NgmyStripeProduct.civicUserGroupExtra)}).',
    );
    return ok && await canCreateOwnedGroup(email: email, isAdmin: isAdmin);
  }

  /// True when joining would stay within the free 100 cap, or paid unlock is active.
  static Future<bool> canAcceptAnotherMember({
    required String ownerEmail,
    required String groupId,
    required int currentMemberCount,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    if (currentMemberCount < kNgmyCivicUserGroupFreeMemberCap) return true;
    return hasMembersOverCapUnlock(
      email: ownerEmail,
      groupId: groupId,
      isAdmin: isAdmin,
    );
  }

  static Future<bool> ensureCanAcceptMember({
    required BuildContext context,
    required String ownerEmail,
    required String groupId,
    required int currentMemberCount,
    bool isAdmin = false,
  }) async {
    if (await canAcceptAnotherMember(
      ownerEmail: ownerEmail,
      groupId: groupId,
      currentMemberCount: currentMemberCount,
      isAdmin: isAdmin,
    )) {
      return true;
    }
    if (!context.mounted) return false;
    final opened = await NgmyStripePayments.ensureScopedPaid(
      context: context,
      product: NgmyStripeProduct.civicUserGroupMembers,
      email: ownerEmail,
      scope: groupId,
      isAdmin: isAdmin,
      title: 'Unlock 100+ members',
      message:
          'This group is at the free $kNgmyCivicUserGroupFreeMemberCap-member limit. '
          'Unlock more seats for '
          '${NgmyStripePayments.priceLabel(NgmyStripeProduct.civicUserGroupMembers)} / '
          '${NgmyStripePayments.durationLabel(NgmyStripeProduct.civicUserGroupMembers)}.',
    );
    return opened &&
        await canAcceptAnotherMember(
          ownerEmail: ownerEmail,
          groupId: groupId,
          currentMemberCount: currentMemberCount,
          isAdmin: isAdmin,
        );
  }
}
