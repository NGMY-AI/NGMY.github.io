import 'dart:async';
import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_edge_invoke.dart';
import 'ngmy_private_lists_cloud.dart';

/// QR prefix for Civic Registry helper gifts redeemable at NGMY Store.
const String kNgmyHelperGiftQrPrefix = 'NGMYHELPERGIFT1';

const String kNgmyHelperGiftPendingSettingsKey = 'civic_helper_gift_pending_v1';
const String kNgmyHelperGiftPendingPrefsKey = 'ngmy_civic_helper_gift_pending_v1';
const String kNgmyHelperGiftInboxSettingsKey = 'civic_helper_gift_inbox_v1';
const String kNgmyHelperGiftInboxPrefsKey = 'ngmy_civic_helper_gift_inbox_v1';
const String kNgmyHelperGiftAdminPopupEnabledKey = 'ngmy_helper_gift_admin_popup_enabled_v1';

/// Admin can disable full-screen helper reward pop-ups (see Helper Gifts hub).
class NgmyHelperGiftAdminPopupSettings {
  static Future<bool> isEnabled() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getBool(kNgmyHelperGiftAdminPopupEnabledKey) ?? true;
    } catch (_) {
      return true;
    }
  }

  static Future<void> setEnabled(bool enabled) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(kNgmyHelperGiftAdminPopupEnabledKey, enabled);
    } catch (_) {}
  }
}

List<Color> ngmyHelperGiftStateGradient(String state) {
  const palettes = <List<Color>>[
    [Color(0xFF1E3A8A), Color(0xFF3B82F6), Color(0xFF60A5FA)],
    [Color(0xFF065F46), Color(0xFF059669), Color(0xFF34D399)],
    [Color(0xFF7C2D12), Color(0xFFEA580C), Color(0xFFFB923C)],
    [Color(0xFF581C87), Color(0xFF9333EA), Color(0xFFC084FC)],
    [Color(0xFF831843), Color(0xFFDB2777), Color(0xFFF472B6)],
    [Color(0xFF134E4A), Color(0xFF0D9488), Color(0xFF2DD4BF)],
    [Color(0xFF713F12), Color(0xFFD97706), Color(0xFFFBBF24)],
    [Color(0xFF312E81), Color(0xFF4F46E5), Color(0xFF818CF8)],
  ];
  final key = state.trim().isEmpty ? 'Nationwide' : state.trim();
  return palettes[key.hashCode.abs() % palettes.length];
}

Future<Map<String, dynamic>?> _helperGiftEdge(
  String op, {
  Map<String, dynamic> fields = const {},
  bool fallbackOnTimeout = false,
}) =>
    ngmyEdgeInvoke({
      'action': 'civicHelperGifts',
      'op': op,
      ...fields,
    }, fallbackOnTimeout: fallbackOnTimeout);

Future<bool> _syncPendingAlertToServer(NgmyHelperGiftPending pending) async {
  if (pending.granted) return true;
  try {
    final data = await _helperGiftEdge('pending', fields: {'pending': pending.toMap()});
    return data?['ok'] == true;
  } catch (e) {
    debugPrint('[helper gifts] pending sync: $e');
  }
  try {
    final relay = await ngmyDbRelaySettingsFetch(kNgmyHelperGiftPendingSettingsKey);
    final items = relay?['items'];
    final current = items is List
        ? items.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList()
        : <Map<String, dynamic>>[];
    final snap = pending.toMap();
    final id = (snap['id'] ?? '').toString();
    final email = (snap['email'] ?? '').toString().toLowerCase().trim();
    final idx = current.indexWhere((p) => (p['id'] ?? '').toString() == id);
    if (idx >= 0) {
      current[idx] = {...current[idx], ...snap, 'granted': false};
    } else if (!current.any((p) => p['granted'] != true && (p['email'] ?? '').toString().toLowerCase().trim() == email)) {
      current.insert(0, {...snap, 'granted': false});
    }
    await ngmyDbRelaySettingsUpsert(kNgmyHelperGiftPendingSettingsKey, {'items': current});
    return true;
  } catch (e) {
    debugPrint('[helper gifts] pending relay sync: $e');
    return false;
  }
}

Future<bool> _grantGiftViaDbRelay({
  required NgmyHelperGiftPending pending,
  required NgmyHelperGift gift,
  required String grantedByEmail,
}) async {
  try {
    await _syncPendingAlertToServer(pending);
    final recipient = pending.email.toLowerCase().trim();
    final storeEmail = gift.storeSellerEmail.toLowerCase().trim();
    if (recipient.isEmpty || storeEmail.isEmpty || gift.amount <= 0) return false;

    final stashKey = 'ngmy_helper_gift_qr_v1_${gift.token}';
    final cloudGift = {
      ...gift.toMap(),
      'email': recipient,
      'storeSellerEmail': storeEmail,
      'grantedBy': grantedByEmail.toLowerCase().trim(),
      'qrPayload': '$kNgmyHelperGiftQrPrefix|${gift.token}',
      'redeemed': false,
    };
    await ngmyDbRelaySettingsUpsert(stashKey, cloudGift);

    final inboxWrap = await ngmyDbRelaySettingsFetch(kNgmyHelperGiftInboxSettingsKey);
    final inboxItems = inboxWrap?['items'];
    final inbox = inboxItems is List
        ? inboxItems.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList()
        : <Map<String, dynamic>>[];
    final existing = inbox.indexWhere(
      (g) => (g['token'] ?? '').toString() == gift.token || (g['id'] ?? '').toString() == gift.id,
    );
    if (existing >= 0) {
      inbox[existing] = cloudGift;
    } else {
      inbox.insert(0, cloudGift);
    }
    await ngmyDbRelaySettingsUpsert(kNgmyHelperGiftInboxSettingsKey, {'items': inbox});

    final pendingWrap = await ngmyDbRelaySettingsFetch(kNgmyHelperGiftPendingSettingsKey);
    final pendingItems = pendingWrap?['items'];
    final pendingList = pendingItems is List
        ? pendingItems.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList()
        : <Map<String, dynamic>>[];
    var pendingIdx = pendingList.indexWhere((p) => (p['id'] ?? '').toString() == pending.id && p['granted'] != true);
    if (pendingIdx < 0) {
      pendingIdx = pendingList.indexWhere(
        (p) => p['granted'] != true && (p['email'] ?? '').toString().toLowerCase().trim() == recipient,
      );
    }
    if (pendingIdx >= 0) {
      pendingList[pendingIdx] = {...pendingList[pendingIdx], 'granted': true, 'notified': true};
      await ngmyDbRelaySettingsUpsert(kNgmyHelperGiftPendingSettingsKey, {'items': pendingList});
    }
    return true;
  } catch (e) {
    debugPrint('[helper gifts] relay grant: $e');
    return false;
  }
}

String _generateGiftToken() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  final r = Random.secure();
  return 'HG${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
}

/// Beautiful present styles the admin can grant after a 3-in-a-row first-helper streak.
class NgmyHelperGiftStyle {
  const NgmyHelperGiftStyle({
    required this.id,
    required this.label,
    required this.emoji,
    required this.accent,
    required this.accent2,
    required this.icon,
  });

  final String id;
  final String label;
  final String emoji;
  final Color accent;
  final Color accent2;
  final IconData icon;
}

const List<NgmyHelperGiftStyle> kNgmyHelperGiftStyles = [
  NgmyHelperGiftStyle(id: 'gold_envelope', label: 'Gold Envelope', emoji: '✉️', accent: Color(0xFFF59E0B), accent2: Color(0xFFB45309), icon: Icons.mail_rounded),
  NgmyHelperGiftStyle(id: 'rose_envelope', label: 'Rose Envelope', emoji: '💌', accent: Color(0xFFEC4899), accent2: Color(0xFFBE185D), icon: Icons.mark_email_unread_rounded),
  NgmyHelperGiftStyle(id: 'birthday', label: 'Birthday Present', emoji: '🎂', accent: Color(0xFF8B5CF6), accent2: Color(0xFF6D28D9), icon: Icons.cake_rounded),
  NgmyHelperGiftStyle(id: 'gift_box', label: 'Gift Box', emoji: '🎁', accent: Color(0xFFEF4444), accent2: Color(0xFFB91C1C), icon: Icons.card_giftcard_rounded),
  NgmyHelperGiftStyle(id: 'trophy', label: 'Champion Trophy', emoji: '🏆', accent: Color(0xFFEAB308), accent2: Color(0xFFA16207), icon: Icons.emoji_events_rounded),
  NgmyHelperGiftStyle(id: 'sparkle', label: 'Sparkle Surprise', emoji: '✨', accent: Color(0xFF06B6D4), accent2: Color(0xFF0E7490), icon: Icons.auto_awesome_rounded),
  NgmyHelperGiftStyle(id: 'crown', label: 'Crown Parcel', emoji: '👑', accent: Color(0xFFF97316), accent2: Color(0xFFC2410C), icon: Icons.workspace_premium_rounded),
  NgmyHelperGiftStyle(id: 'heart', label: 'Heart Package', emoji: '💝', accent: Color(0xFFF43F5E), accent2: Color(0xFFBE123C), icon: Icons.favorite_rounded),
];

NgmyHelperGiftStyle ngmyHelperGiftStyleById(String id) {
  return kNgmyHelperGiftStyles.firstWhere(
    (s) => s.id == id,
    orElse: () => kNgmyHelperGiftStyles.first,
  );
}

/// Pending admin alert when a member is first helper 3 campaigns in a row.
class NgmyHelperGiftPending {
  const NgmyHelperGiftPending({
    required this.id,
    required this.email,
    required this.fullName,
    required this.registryId,
    required this.phone,
    required this.state,
    required this.city,
    required this.streak,
    required this.createdAt,
    this.granted = false,
    this.notified = false,
  });

  final String id;
  final String email;
  final String fullName;
  final String registryId;
  final String phone;
  final String state;
  final String city;
  final int streak;
  final String createdAt;
  final bool granted;
  final bool notified;

  Map<String, dynamic> toMap() => {
        'id': id,
        'email': email,
        'fullName': fullName,
        'registryId': registryId,
        'phone': phone,
        'state': state,
        'city': city,
        'streak': streak,
        'createdAt': createdAt,
        'granted': granted,
        'notified': notified,
      };

  factory NgmyHelperGiftPending.fromMap(Map<String, dynamic> map) => NgmyHelperGiftPending(
        id: (map['id'] ?? '').toString(),
        email: (map['email'] ?? '').toString().toLowerCase().trim(),
        fullName: (map['fullName'] ?? '').toString(),
        registryId: (map['registryId'] ?? '').toString(),
        phone: (map['phone'] ?? '').toString(),
        state: (map['state'] ?? '').toString(),
        city: (map['city'] ?? '').toString(),
        streak: (map['streak'] as num?)?.toInt() ?? 3,
        createdAt: (map['createdAt'] ?? '').toString(),
        granted: map['granted'] == true,
        notified: map['notified'] == true,
      );

  NgmyHelperGiftPending copyWith({bool? granted, bool? notified}) => NgmyHelperGiftPending(
        id: id,
        email: email,
        fullName: fullName,
        registryId: registryId,
        phone: phone,
        state: state,
        city: city,
        streak: streak,
        createdAt: createdAt,
        granted: granted ?? this.granted,
        notified: notified ?? this.notified,
      );
}

/// Gift granted to a helper — includes store QR redeem payload.
class NgmyHelperGift {
  const NgmyHelperGift({
    required this.id,
    required this.email,
    required this.fullName,
    required this.giftName,
    required this.amount,
    required this.styleId,
    required this.storeAddress,
    required this.storeSellerEmail,
    required this.storeSellerName,
    required this.storeListingId,
    required this.qrPayload,
    required this.token,
    required this.createdAt,
    required this.grantedBy,
    this.redeemed = false,
    this.redeemedAt = '',
    this.redeemedByStore = '',
  });

  final String id;
  final String email;
  final String fullName;
  final String giftName;
  final double amount;
  final String styleId;
  final String storeAddress;
  final String storeSellerEmail;
  final String storeSellerName;
  final String storeListingId;
  final String qrPayload;
  final String token;
  final String createdAt;
  final String grantedBy;
  final bool redeemed;
  final String redeemedAt;
  final String redeemedByStore;

  Map<String, dynamic> toMap() => {
        'id': id,
        'email': email,
        'fullName': fullName,
        'giftName': giftName,
        'amount': amount,
        'styleId': styleId,
        'storeAddress': storeAddress,
        'storeSellerEmail': storeSellerEmail,
        'storeSellerName': storeSellerName,
        'storeListingId': storeListingId,
        'qrPayload': qrPayload,
        'token': token,
        'createdAt': createdAt,
        'grantedBy': grantedBy,
        'redeemed': redeemed,
        'redeemedAt': redeemedAt,
        'redeemedByStore': redeemedByStore,
      };

  factory NgmyHelperGift.fromMap(Map<String, dynamic> map) => NgmyHelperGift(
        id: (map['id'] ?? '').toString(),
        email: (map['email'] ?? '').toString().toLowerCase().trim(),
        fullName: (map['fullName'] ?? '').toString(),
        giftName: (map['giftName'] ?? 'Helper Gift').toString(),
        amount: (map['amount'] as num?)?.toDouble() ?? 0,
        styleId: (map['styleId'] ?? 'gold_envelope').toString(),
        storeAddress: (map['storeAddress'] ?? '').toString(),
        storeSellerEmail: (map['storeSellerEmail'] ?? '').toString().toLowerCase().trim(),
        storeSellerName: (map['storeSellerName'] ?? '').toString(),
        storeListingId: (map['storeListingId'] ?? '').toString(),
        qrPayload: (map['qrPayload'] ?? '').toString(),
        token: (map['token'] ?? '').toString(),
        createdAt: (map['createdAt'] ?? '').toString(),
        grantedBy: (map['grantedBy'] ?? '').toString(),
        redeemed: map['redeemed'] == true,
        redeemedAt: (map['redeemedAt'] ?? '').toString(),
        redeemedByStore: (map['redeemedByStore'] ?? '').toString(),
      );
}

/// Tracks first-helper streaks and manages gift pending/inbox + QR redeem.
class NgmyCivicHelperGifts {
  static List<NgmyHelperGiftPending> pendingFromConfig(dynamic config) {
    final raw = (config as dynamic).civicHelperGiftPending;
    if (raw is! List) return [];
    return raw
        .whereType<Map>()
        .map((e) => NgmyHelperGiftPending.fromMap(Map<String, dynamic>.from(e)))
        .toList();
  }

  static void setPending(dynamic config, List<NgmyHelperGiftPending> items) {
    (config as dynamic).civicHelperGiftPending = items.map((e) => e.toMap()).toList();
  }

  static List<NgmyHelperGift> inboxFromConfig(dynamic config) {
    final raw = (config as dynamic).civicHelperGiftInbox;
    if (raw is! List) return [];
    return raw
        .whereType<Map>()
        .map((e) => NgmyHelperGift.fromMap(Map<String, dynamic>.from(e)))
        .toList();
  }

  static void setInbox(dynamic config, List<NgmyHelperGift> items) {
    (config as dynamic).civicHelperGiftInbox = items.map((e) => e.toMap()).toList();
  }

  static List<NgmyHelperGiftPending> openPending(dynamic config) =>
      pendingFromConfig(config).where((p) => !p.granted).toList();

  static int openPendingCount(dynamic config) => openPending(config).length;

  static List<NgmyHelperGift> giftsForEmail(dynamic config, String email) {
    final key = email.toLowerCase().trim();
    return inboxFromConfig(config).where((g) => g.email == key).toList()
      ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
  }

  static String? _sessionEmail() {
    try {
      return Supabase.instance.client.auth.currentUser?.email?.toLowerCase().trim();
    } catch (_) {
      return null;
    }
  }

  static List<NgmyHelperGiftPending> _mergePendingLists(
    List<NgmyHelperGiftPending> a,
    List<NgmyHelperGiftPending> b,
  ) {
    final byId = <String, NgmyHelperGiftPending>{};
    for (final p in [...a, ...b]) {
      if (p.id.isEmpty) continue;
      final existing = byId[p.id];
      if (existing == null || p.createdAt.compareTo(existing.createdAt) >= 0) {
        byId[p.id] = p;
      }
    }
    final openByEmail = <String, NgmyHelperGiftPending>{};
    final granted = <NgmyHelperGiftPending>[];
    for (final p in byId.values) {
      if (p.granted) {
        granted.add(p);
        continue;
      }
      final prev = openByEmail[p.email];
      if (prev == null || p.createdAt.compareTo(prev.createdAt) > 0) {
        openByEmail[p.email] = p;
      }
    }
    final merged = [...openByEmail.values, ...granted]
      ..sort((x, y) => y.createdAt.compareTo(x.createdAt));
    return merged;
  }

  static List<NgmyHelperGift> _mergeInboxLists(
    List<NgmyHelperGift> a,
    List<NgmyHelperGift> b,
  ) {
    final byToken = <String, NgmyHelperGift>{};
    for (final g in [...a, ...b]) {
      final key = g.token.isNotEmpty ? g.token : g.id;
      if (key.isEmpty) continue;
      final existing = byToken[key];
      if (existing == null || g.createdAt.compareTo(existing.createdAt) >= 0) {
        byToken[key] = g;
      }
    }
    return byToken.values.toList()..sort((x, y) => y.createdAt.compareTo(x.createdAt));
  }

  /// When roster streaks reached 3 on the server but the pending alert never
  /// synced, rebuild open admin alerts from member records.
  static int syncOpenPendingFromMemberStreaks(dynamic config) {
    final raw = (config as dynamic).civicRegistryMembers;
    if (raw is! List) return 0;
    final list = pendingFromConfig(config);
    var added = 0;
    for (final item in raw.whereType<Map>()) {
      final streak = (item['firstHelperStreak'] as num?)?.toInt() ?? 0;
      if (streak < 3 || streak % 3 != 0) continue;
      final email = (item['email'] ?? '').toString().toLowerCase().trim();
      if (email.isEmpty) continue;
      if (list.any((p) => !p.granted && p.email == email)) continue;
      list.insert(
        0,
        NgmyHelperGiftPending(
          id: 'hgpend_roster_${email}_$streak',
          email: email,
          fullName: (item['fullName'] ?? email).toString(),
          registryId: (item['registryId'] ?? '').toString(),
          phone: (item['phone'] ?? '').toString(),
          state: (item['state'] ?? '').toString(),
          city: (item['city'] ?? '').toString(),
          streak: streak,
          createdAt: DateTime.now().toUtc().toIso8601String(),
        ),
      );
      added++;
    }
    if (added > 0) setPending(config, list);
    return added;
  }

  /// A streak means consecutive campaigns, not merely any three campaigns.
  /// When a new campaign gets its first helper, everyone except that person
  /// loses an older first-helper streak.
  static void resetOtherFirstHelperStreaks({
    required dynamic config,
    required String winnerEmail,
  }) {
    final raw = (config as dynamic).civicRegistryMembers;
    if (raw is! List) return;
    final winner = winnerEmail.toLowerCase().trim();
    final next = <Map<String, dynamic>>[];
    for (final item in raw.whereType<Map>()) {
      final row = Map<String, dynamic>.from(item);
      if ((row['email'] ?? '').toString().toLowerCase().trim() != winner) {
        row['firstHelperStreak'] = 0;
      }
      next.add(row);
    }
    (config as dynamic).civicRegistryMembers = next;
  }

  /// Call when a member is recorded as a contribution in an active help campaign.
  /// Returns a new pending alert if streak reaches 3, otherwise null.
  static NgmyHelperGiftPending? recordFirstHelperContribution({
    required dynamic config,
    required Map<String, dynamic> memberRecord,
    required String campaignId,
    required bool isFirstInCampaign,
  }) {
    if (campaignId.isEmpty) return null;
    final email = (memberRecord['email'] ?? '').toString().toLowerCase().trim();
    if (email.isEmpty) return null;

    var streak = (memberRecord['firstHelperStreak'] as num?)?.toInt() ?? 0;
    final lastCampaign = (memberRecord['lastFirstHelperCampaignId'] ?? '').toString();

    if (!isFirstInCampaign) {
      memberRecord['firstHelperStreak'] = 0;
      // Keep last campaign id so we don't falsely continue a streak later.
      return null;
    }

    // Already counted this campaign as first.
    if (lastCampaign == campaignId) {
      return null;
    }

    streak = streak + 1;
    memberRecord['firstHelperStreak'] = streak;
    memberRecord['lastFirstHelperCampaignId'] = campaignId;

    if (streak < 3 || streak % 3 != 0) return null;

    final pending = NgmyHelperGiftPending(
      id: 'hgpend_${DateTime.now().millisecondsSinceEpoch}_$email',
      email: email,
      fullName: (memberRecord['fullName'] ?? email).toString(),
      registryId: (memberRecord['registryId'] ?? '').toString(),
      phone: (memberRecord['phone'] ?? '').toString(),
      state: (memberRecord['state'] ?? '').toString(),
      city: (memberRecord['city'] ?? '').toString(),
      streak: streak,
      createdAt: DateTime.now().toUtc().toIso8601String(),
    );
    final list = pendingFromConfig(config);
    // Avoid duplicate open pending for same email.
    if (list.any((p) => !p.granted && p.email == email)) return null;
    list.insert(0, pending);
    setPending(config, list);
    return pending;
  }

  static Future<void> persistPendingLocal(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        kNgmyHelperGiftPendingPrefsKey,
        jsonEncode({'items': pendingFromConfig(config).map((e) => e.toMap()).toList()}),
      );
    } catch (e) {
      debugPrint('[helper gifts] pending local: $e');
    }
  }

  static Future<void> persistInboxLocal(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        kNgmyHelperGiftInboxPrefsKey,
        jsonEncode({'items': inboxFromConfig(config).map((e) => e.toMap()).toList()}),
      );
    } catch (e) {
      debugPrint('[helper gifts] inbox local: $e');
    }
  }

  static Future<void> hydrateFromLocal(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final pendingRaw = prefs.getString(kNgmyHelperGiftPendingPrefsKey);
      if (pendingRaw != null && pendingRaw.trim().isNotEmpty) {
        final decoded = jsonDecode(pendingRaw);
        if (decoded is Map && decoded['items'] is List) {
          setPending(
            config,
            (decoded['items'] as List)
                .whereType<Map>()
                .map((e) => NgmyHelperGiftPending.fromMap(Map<String, dynamic>.from(e)))
                .toList(),
          );
        }
      }
      final inboxRaw = prefs.getString(kNgmyHelperGiftInboxPrefsKey);
      if (inboxRaw != null && inboxRaw.trim().isNotEmpty) {
        final decoded = jsonDecode(inboxRaw);
        if (decoded is Map && decoded['items'] is List) {
          setInbox(
            config,
            (decoded['items'] as List)
                .whereType<Map>()
                .map((e) => NgmyHelperGift.fromMap(Map<String, dynamic>.from(e)))
                .toList(),
          );
        }
      }
    } catch (e) {
      debugPrint('[helper gifts] hydrate local: $e');
    }
  }

  static Future<bool> _persistPendingSettingsCloud(dynamic config) async {
    final payload = {'items': pendingFromConfig(config).map((e) => e.toMap()).toList()};
    try {
      await ngmyDbRelaySettingsUpsert(kNgmyHelperGiftPendingSettingsKey, payload);
      return true;
    } catch (e) {
      debugPrint('[helper gifts] relay pending persist: $e');
    }
    final email = _sessionEmail();
    if (email == null) return false;
    var ok = false;
    for (final pending in openPending(config)) {
      final saved = await ngmyCivicAdminSettingsPersist(
        email: email,
        kind: 'civicHelperGiftPending',
        payload: pending.toMap(),
      );
      ok = ok || saved;
    }
    return ok;
  }

  static Future<bool> persistCloud(dynamic config) async {
    await persistPendingLocal(config);
    await persistInboxLocal(config);
    try {
      var edgeOk = false;
      for (final pending in openPending(config)) {
        final data = await _helperGiftEdge('pending', fields: {'pending': pending.toMap()});
        edgeOk = edgeOk || data?['ok'] == true;
      }
      if (edgeOk) return true;
      return await _persistPendingSettingsCloud(config);
    } catch (e) {
      debugPrint('[helper gifts] cloud persist: $e');
      return await _persistPendingSettingsCloud(config);
    }
  }

  static Future<void> hydrateFromCloud(dynamic config) async {
    await hydrateFromLocal(config);
    final localPending = pendingFromConfig(config);
    final localInbox = inboxFromConfig(config);
    var remotePending = <NgmyHelperGiftPending>[];
    var remoteInbox = <NgmyHelperGift>[];

    try {
      final data = await _helperGiftEdge('fetch');
      if (data != null && data['ok'] == true) {
        final pendingItems = data['pending'];
        if (pendingItems is List) {
          remotePending = pendingItems
              .whereType<Map>()
              .map((e) => NgmyHelperGiftPending.fromMap(Map<String, dynamic>.from(e)))
              .toList();
        }
        final inboxItems = data['inbox'];
        if (inboxItems is List) {
          remoteInbox = inboxItems
              .whereType<Map>()
              .map((e) => NgmyHelperGift.fromMap(Map<String, dynamic>.from(e)))
              .toList();
        }
      }
    } catch (e) {
      debugPrint('[helper gifts] edge hydrate: $e');
    }

    if (remotePending.isEmpty) {
      try {
        final relay = await ngmyDbRelaySettingsFetch(kNgmyHelperGiftPendingSettingsKey);
        final items = relay?['items'];
        if (items is List) {
          remotePending = items
              .whereType<Map>()
              .map((e) => NgmyHelperGiftPending.fromMap(Map<String, dynamic>.from(e)))
              .toList();
        }
      } catch (e) {
        debugPrint('[helper gifts] relay pending hydrate: $e');
      }
    }

    final email = _sessionEmail();
    if (email != null) {
      try {
        final adminData = await ngmyCivicAdminSettingsFetch(email: email);
        if (adminData != null && adminData['ok'] == true) {
          final pendingItems = adminData['civicHelperGiftPending'];
          if (pendingItems is List && pendingItems.isNotEmpty) {
            remotePending = _mergePendingLists(
              remotePending,
              pendingItems
                  .whereType<Map>()
                  .map((e) => NgmyHelperGiftPending.fromMap(Map<String, dynamic>.from(e)))
                  .toList(),
            );
          }
          final inboxItems = adminData['civicHelperGiftInbox'];
          if (inboxItems is List && inboxItems.isNotEmpty) {
            remoteInbox = _mergeInboxLists(
              remoteInbox,
              inboxItems
                  .whereType<Map>()
                  .map((e) => NgmyHelperGift.fromMap(Map<String, dynamic>.from(e)))
                  .toList(),
            );
          }
        }
      } catch (e) {
        debugPrint('[helper gifts] admin settings hydrate: $e');
      }
    }

    if (remoteInbox.isEmpty) {
      try {
        final relay = await ngmyDbRelaySettingsFetch(kNgmyHelperGiftInboxSettingsKey);
        final items = relay?['items'];
        if (items is List) {
          remoteInbox = items
              .whereType<Map>()
              .map((e) => NgmyHelperGift.fromMap(Map<String, dynamic>.from(e)))
              .toList();
        }
      } catch (e) {
        debugPrint('[helper gifts] relay inbox hydrate: $e');
      }
    }

    setPending(config, _mergePendingLists(localPending, remotePending));
    setInbox(config, _mergeInboxLists(localInbox, remoteInbox));
    final derived = syncOpenPendingFromMemberStreaks(config);
    if (derived > 0) {
      unawaited(persistCloud(config));
    }
    await persistPendingLocal(config);
    await persistInboxLocal(config);
  }

  static Future<NgmyHelperGift?> grantGift({
    required dynamic config,
    required NgmyHelperGiftPending pending,
    required String giftName,
    required double amount,
    required String styleId,
    required String storeAddress,
    required String storeSellerEmail,
    required String storeSellerName,
    required String storeListingId,
    required String grantedBy,
  }) async {
    if (amount <= 0 || giftName.trim().isEmpty || storeSellerEmail.trim().isEmpty) return null;
    final token = _generateGiftToken();
    final qrPayload = '$kNgmyHelperGiftQrPrefix|$token';
    final now = DateTime.now().toUtc().toIso8601String();
    final gift = NgmyHelperGift(
      id: 'hgift_${DateTime.now().millisecondsSinceEpoch}',
      email: pending.email,
      fullName: pending.fullName,
      giftName: giftName.trim(),
      amount: amount,
      styleId: styleId,
      storeAddress: storeAddress.trim(),
      storeSellerEmail: storeSellerEmail.toLowerCase().trim(),
      storeSellerName: storeSellerName.trim(),
      storeListingId: storeListingId,
      qrPayload: qrPayload,
      token: token,
      createdAt: now,
      grantedBy: grantedBy.toLowerCase().trim(),
    );

    await _syncPendingAlertToServer(pending);

    var saved = await _helperGiftEdge(
      'grant',
      fields: {
        'pendingId': pending.id,
        'pending': pending.toMap(),
        'gift': gift.toMap(),
      },
      fallbackOnTimeout: true,
    );
    if (saved == null || saved['ok'] != true) {
      final err = (saved?['error'] ?? 'Could not reach server').toString();
      debugPrint('[helper gifts] grant refused: $err');
      final relayOk = await _grantGiftViaDbRelay(
        pending: pending,
        gift: gift,
        grantedByEmail: grantedBy,
      );
      if (!relayOk) return null;
    }

    final inbox = inboxFromConfig(config);
    inbox.insert(0, gift);
    setInbox(config, inbox);

    final pendingList = pendingFromConfig(config);
    final idx = pendingList.indexWhere((p) => p.id == pending.id);
    if (idx >= 0) {
      pendingList[idx] = pending.copyWith(granted: true, notified: true);
      setPending(config, pendingList);
    }

    await persistPendingLocal(config);
    await persistInboxLocal(config);
    return gift;
  }

  static String? parseTokenFromPayload(String raw) {
    final t = raw.trim();
    if (t.startsWith('$kNgmyHelperGiftQrPrefix|')) {
      return t.substring(kNgmyHelperGiftQrPrefix.length + 1).trim();
    }
    if (t.startsWith('HG') && t.length >= 8) return t;
    return null;
  }

  static Future<NgmyHelperGift?> loadGiftByToken(String token, {dynamic config}) async {
    try {
      final data = await _helperGiftEdge('lookup', fields: {'token': token.trim()});
      final value = data?['gift'];
      if (value is Map) return NgmyHelperGift.fromMap(Map<String, dynamic>.from(value));
    } catch (e) {
      debugPrint('[helper gifts] load token: $e');
    }
    if (config != null) {
      for (final g in inboxFromConfig(config)) {
        if (g.token == token) return g;
      }
    }
    return null;
  }

  static Future<({bool ok, String message, NgmyHelperGift? gift})> redeemAtStore({
    required dynamic config,
    required String qrOrToken,
    required String storeOwnerEmail,
    required String storeOwnerName,
  }) async {
    final token = parseTokenFromPayload(qrOrToken);
    if (token == null || token.isEmpty) {
      return (ok: false, message: 'Not a valid NGMY helper gift QR.', gift: null);
    }
    final gift = await loadGiftByToken(token, config: config);
    if (gift == null) {
      return (ok: false, message: 'Gift not found.', gift: null);
    }
    if (gift.redeemed) {
      return (ok: false, message: 'This gift was already redeemed.', gift: gift);
    }
    final owner = storeOwnerEmail.toLowerCase().trim();
    final locked = gift.storeSellerEmail;
    if (owner.isEmpty) {
      return (ok: false, message: 'Sign in as the store owner to scan this gift.', gift: gift);
    }
    if (locked.isEmpty) {
      return (
        ok: false,
        message: 'This gift is not locked to a store. Ask the admin to choose an NGMY store.',
        gift: gift,
      );
    }
    if (locked != owner) {
      final where = gift.storeSellerName.isEmpty ? gift.storeAddress : gift.storeSellerName;
      return (
        ok: false,
        message: 'This money card is only for $where. Another store cannot redeem it.',
        gift: gift,
      );
    }

    final data = await _helperGiftEdge(
      'redeem',
      fields: {
        'token': token,
        'storeOwnerName': storeOwnerName,
      },
    );
    if (data == null || data['ok'] != true || data['gift'] is! Map) {
      return (
        ok: false,
        message: (data?['error'] ?? 'Could not redeem this gift with the server.').toString(),
        gift: gift,
      );
    }
    final updated = NgmyHelperGift.fromMap(Map<String, dynamic>.from(data['gift'] as Map));

    final inbox = inboxFromConfig(config);
    final idx = inbox.indexWhere((g) => g.token == token || g.id == gift.id);
    if (idx >= 0) {
      inbox[idx] = updated;
    } else {
      inbox.insert(0, updated);
    }
    setInbox(config, inbox);
    await persistInboxLocal(config);
    return (
      ok: true,
      message: 'Redeemed \$${updated.amount.toStringAsFixed(2)} — ${updated.giftName}. Give the member store credit for that amount.',
      gift: updated,
    );
  }

  static void markPendingNotified(dynamic config, String pendingId) {
    final list = pendingFromConfig(config);
    final idx = list.indexWhere((p) => p.id == pendingId);
    if (idx < 0) return;
    list[idx] = list[idx].copyWith(notified: true);
    setPending(config, list);
  }
}
