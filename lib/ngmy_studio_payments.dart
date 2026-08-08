import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_settings_cloud.dart';
import 'ngmy_stripe_payments.dart';

/// Account-level free allowances and subscriptions for Menu Studio and Bio.
///
/// The marker is mirrored locally and in `ngmy_settings`, so deleting the free
/// document or changing phones does not reset the allowance.
abstract final class NgmyStudioPayments {
  static const menuMonthlyCents = 1599;
  static const bioMonthlyCents = 399;
  static const freeBioTemplateId = 'gold_curved';
  static const freeBioAvatarSelections = 3; // First photo + two replacements.
  /// After Bio Studio subscription: two profile changes free, then $1.99 unlocks
  /// the next two, and that pack cycle repeats.
  static const subscribedBioAvatarFreeChanges = 2;
  static const bioAvatarPackChanges = 2;

  static String _email(String email) => email.trim().toLowerCase();

  static String _key(String email) {
    final encoded = base64Url.encode(utf8.encode(_email(email))).replaceAll('=', '');
    return 'ngmy_studio_entitlement_v1_$encoded';
  }

  static Future<Map<String, dynamic>> _load(String email) async {
    final key = _key(email);
    final prefs = await SharedPreferences.getInstance();
    final localRaw = prefs.getString(key);
    Map<String, dynamic> local = {};
    if (localRaw != null && localRaw.isNotEmpty) {
      try {
        final decoded = jsonDecode(localRaw);
        if (decoded is Map) local = Map<String, dynamic>.from(decoded);
      } catch (_) {}
    }

    final remote = await ngmyFetchSettingsValueViaRest(key);
    if (remote == null) return local;
    await prefs.setString(key, jsonEncode(remote));
    return remote;
  }

  static Future<void> _save(String email, Map<String, dynamic> value) async {
    value['updatedAt'] = DateTime.now().toUtc().toIso8601String();
    final key = _key(email);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(key, jsonEncode(value));
    await ngmyUpsertSettingsRowReliable(key, value);
  }

  static Future<bool> hasMenuSubscription(String email) =>
      NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.menuStudio);

  static Future<bool> hasBioSubscription(String email) =>
      NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.bioStudio);

  static bool isFreeBioTemplate(String templateId) =>
      templateId.trim() == freeBioTemplateId;

  static bool freeBioAvatarSelectionAvailable(int selectionsUsed) =>
      selectionsUsed < freeBioAvatarSelections;

  static int subscribedBioAvatarAllowance(int packsPurchased) =>
      subscribedBioAvatarFreeChanges + (packsPurchased * bioAvatarPackChanges);

  static String _oldestId(List<String> ids) {
    if (ids.isEmpty) return '';
    final copy = List<String>.from(ids);
    int stamp(String id) =>
        int.tryParse(RegExp(r'(\d{10,})$').firstMatch(id.trim())?.group(1) ?? '') ??
        9007199254740991; // JavaScript's largest exact integer.
    copy.sort((a, b) => stamp(a).compareTo(stamp(b)));
    return copy.first;
  }

  /// Returns the one menu id permanently assigned to the free allowance.
  ///
  /// Existing accounts are grandfathered by assigning their oldest known menu
  /// (the final item because libraries are newest-first). A brand-new account
  /// assigns [newMenuId].
  static Future<String> resolveFreeMenuId({
    required String email,
    required List<String> existingIdsNewestFirst,
    String? newMenuId,
  }) async {
    final state = await _load(email);
    final stored = (state['freeMenuId'] ?? '').toString().trim();
    if (stored.isNotEmpty) return stored;

    final chosen = existingIdsNewestFirst.isNotEmpty
        ? _oldestId(existingIdsNewestFirst)
        : (newMenuId ?? '').trim();
    if (chosen.isEmpty) return '';
    state['freeMenuId'] = chosen;
    await _save(email, state);
    return chosen;
  }

  static Future<bool> ensureCanCreateMenu({
    required BuildContext context,
    required String email,
    required List<String> existingIdsNewestFirst,
    required String newMenuId,
    bool isAdmin = false,
  }) async {
    if (isAdmin || await hasMenuSubscription(email)) return true;
    final freeId = await resolveFreeMenuId(
      email: email,
      existingIdsNewestFirst: existingIdsNewestFirst,
      newMenuId: newMenuId,
    );
    if (freeId == newMenuId) return true;
    if (!context.mounted) return false;
    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.menuStudio,
      email: email,
      title: 'Menu Studio',
      message: 'Your first menu is free. Subscribe for \$15.99 per month to create and publish more menus.',
    );
  }

  static Future<bool> ensureCanPublishMenu({
    required BuildContext context,
    required String email,
    required List<String> existingIdsNewestFirst,
    required String menuId,
    bool isAdmin = false,
  }) async {
    if (isAdmin || await hasMenuSubscription(email)) return true;
    final freeId = await resolveFreeMenuId(
      email: email,
      existingIdsNewestFirst: existingIdsNewestFirst,
      newMenuId: menuId,
    );
    if (freeId == menuId) return true;
    if (!context.mounted) return false;
    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.menuStudio,
      email: email,
      title: 'Menu Studio',
      message: 'Your first menu is free. Subscribe for \$15.99 per month to publish additional menus.',
    );
  }

  /// Returns the oldest Bio permanently assigned to the free allowance.
  static Future<String> resolveFreeBioId({
    required String email,
    required List<String> existingIdsOldestFirst,
    required String currentBioId,
  }) async {
    final state = await _load(email);
    final stored = (state['freeBioId'] ?? '').toString().trim();
    if (stored.isNotEmpty) return stored;
    final chosen = existingIdsOldestFirst.isNotEmpty
        ? _oldestId(existingIdsOldestFirst)
        : currentBioId.trim();
    if (chosen.isEmpty) return '';
    state['freeBioId'] = chosen;
    await _save(email, state);
    return chosen;
  }

  static Future<bool> ensureCanPublishBio({
    required BuildContext context,
    required String email,
    required String bioId,
    required String templateId,
    required List<String> existingIdsOldestFirst,
    bool isAdmin = false,
  }) async {
    if (isAdmin || await hasBioSubscription(email)) return true;
    final freeId = await resolveFreeBioId(
      email: email,
      existingIdsOldestFirst: existingIdsOldestFirst,
      currentBioId: bioId,
    );
    final free = bioId == freeId && isFreeBioTemplate(templateId);
    if (free) return true;
    if (!context.mounted) return false;
    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.bioStudio,
      email: email,
      title: 'Bio Studio',
      message: 'The first Bio with the first template is free. Subscribe for \$3.99 per month to publish other Bios or templates.',
    );
  }

  static Map<String, dynamic> _intMap(dynamic raw) {
    if (raw is Map) return Map<String, dynamic>.from(raw);
    return <String, dynamic>{};
  }

  static Future<bool> _consumeSubscribedBioAvatarChange({
    required BuildContext context,
    required String email,
    required String bioId,
    bool isAdmin = false,
  }) async {
    final state = await _load(email);
    final usedMap = _intMap(state['bioAvatarSubSelections']);
    final packsMap = _intMap(state['bioAvatarPacks']);
    var used = (usedMap[bioId] as num?)?.toInt() ?? 0;
    var packs = (packsMap[bioId] as num?)?.toInt() ?? 0;
    var allowance = subscribedBioAvatarAllowance(packs);

    if (used >= allowance) {
      if (!context.mounted) return false;
      final nextPack = packs + 1;
      final scope = '${bioId}_p$nextPack';
      final paid = await NgmyStripePayments.ensureScopedPaid(
        context: context,
        product: NgmyStripeProduct.bioPhotoPack,
        email: email,
        scope: scope,
        isAdmin: isAdmin,
        title: 'Bio Photo Changes',
        message:
            'You used your 2 free profile photo changes. Pay \$1.99 for 2 more changes. This repeats every 2 changes.',
      );
      if (!paid) return false;
      packs = nextPack;
      packsMap[bioId] = packs;
      state['bioAvatarPacks'] = packsMap;
      allowance = subscribedBioAvatarAllowance(packs);
    }

    if (used >= allowance) return false;
    usedMap[bioId] = used + 1;
    state['bioAvatarSubSelections'] = usedMap;
    await _save(email, state);
    return true;
  }

  /// Checks and records a profile-photo selection.
  ///
  /// Free Bio (no subscription): first photo + two replacements are free; then
  /// subscribe. With an active Bio subscription: two photo changes are free,
  /// then each additional pair of changes costs \$1.99 (separate from the
  /// monthly subscription).
  static Future<bool> ensureCanSelectBioAvatar({
    required BuildContext context,
    required String email,
    required String bioId,
    required List<String> existingIdsOldestFirst,
    required bool isReplacement,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;

    if (await hasBioSubscription(email)) {
      if (!context.mounted) return false;
      return _consumeSubscribedBioAvatarChange(
        context: context,
        email: email,
        bioId: bioId,
        isAdmin: isAdmin,
      );
    }

    final freeId = await resolveFreeBioId(
      email: email,
      existingIdsOldestFirst: existingIdsOldestFirst,
      currentBioId: bioId,
    );
    if (bioId != freeId) {
      if (!context.mounted) return false;
      return NgmyStripePayments.ensurePaid(
        context: context,
        product: NgmyStripeProduct.bioStudio,
        email: email,
        title: 'Bio Studio',
        message: 'Subscribe for \$3.99 per month to add photos to additional Bios.',
      );
    }

    final state = await _load(email);
    final counts = _intMap(state['bioAvatarSelections']);
    var used = (counts[bioId] as num?)?.toInt() ?? 0;

    // Backward compatibility: an existing image predating this counter counts
    // as the initial free selection when it is replaced for the first time.
    if (isReplacement && used == 0) used = 1;
    if (!freeBioAvatarSelectionAvailable(used)) {
      if (!context.mounted) return false;
      return NgmyStripePayments.ensurePaid(
        context: context,
        product: NgmyStripeProduct.bioStudio,
        email: email,
        title: 'Bio Studio',
        message:
            'You used the first photo and two free photo changes. Subscribe for \$3.99 per month to keep publishing. After you subscribe, photo changes are 2 free, then \$1.99 for 2 more.',
      );
    }

    counts[bioId] = used + 1;
    state['bioAvatarSelections'] = counts;
    await _save(email, state);
    return true;
  }

  /// Records that a legacy/free Bio already had its initial profile photo.
  /// Called before clearing so remove-then-add cannot reset the change count.
  static Future<void> recordBioAvatarBaseline({
    required String email,
    required String bioId,
  }) async {
    if (await hasBioSubscription(email)) return;
    final state = await _load(email);
    final counts = _intMap(state['bioAvatarSelections']);
    final used = (counts[bioId] as num?)?.toInt() ?? 0;
    if (used > 0) return;
    counts[bioId] = 1;
    state['bioAvatarSelections'] = counts;
    await _save(email, state);
  }
}
