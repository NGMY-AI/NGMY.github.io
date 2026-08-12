import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_business_card_models.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';

const String kNgmyHomeVoteAdSettingsKey = 'home_vote_ad_campaign';
const String _kNgmyHomeVoteAdPrefsKey = 'ngmy_home_vote_ad_v1';
const String kNgmyHomeVoteAdCardId = 'ngmy_home_vote_ad_default';

/// Max campaign length: just under 5 months (~150 days).
const int kNgmyHomeVoteAdMaxDays = 150;

const List<(int days, String label)> kNgmyHomeVoteAdDurations = [
  (1, '1 day'),
  (3, '3 days'),
  (7, '1 week'),
  (14, '2 weeks'),
  (30, '1 month'),
  (60, '2 months'),
  (90, '3 months'),
  (120, '4 months'),
  (149, 'Just under 5 months'),
];

class NgmyHomeVoteAdCampaign {
  NgmyHomeVoteAdCampaign({
    this.active = false,
    this.businessCardJson = '',
    this.candidateId = '',
    this.candidateName = '',
    this.startsAt = '',
    this.endsAt = '',
    this.durationDays = 7,
    this.publishedBy = '',
    this.updatedAt = '',
  });

  bool active;
  String businessCardJson;
  String candidateId;
  String candidateName;
  String startsAt;
  String endsAt;
  int durationDays;
  String publishedBy;
  String updatedAt;

  bool get isLive {
    if (!active) return false;
    if (businessCardJson.trim().isEmpty) return false;
    final now = DateTime.now().toUtc();
    final start = DateTime.tryParse(startsAt)?.toUtc();
    final end = DateTime.tryParse(endsAt)?.toUtc();
    if (start != null && now.isBefore(start)) return false;
    if (end != null && !now.isBefore(end)) return false;
    return true;
  }

  Map<String, dynamic> toJson() => {
        'active': active,
        'businessCardJson': businessCardJson,
        'candidateId': candidateId,
        'candidateName': candidateName,
        'startsAt': startsAt,
        'endsAt': endsAt,
        'durationDays': durationDays,
        'publishedBy': publishedBy,
        'updatedAt': updatedAt,
      };

  factory NgmyHomeVoteAdCampaign.fromJson(Map<String, dynamic>? json) {
    if (json == null) return NgmyHomeVoteAdCampaign();
    return NgmyHomeVoteAdCampaign(
      active: json['active'] == true,
      businessCardJson: (json['businessCardJson'] ?? '').toString(),
      candidateId: (json['candidateId'] ?? '').toString(),
      candidateName: (json['candidateName'] ?? '').toString(),
      startsAt: (json['startsAt'] ?? '').toString(),
      endsAt: (json['endsAt'] ?? '').toString(),
      durationDays: (json['durationDays'] as num?)?.toInt() ?? 7,
      publishedBy: (json['publishedBy'] ?? '').toString(),
      updatedAt: (json['updatedAt'] ?? '').toString(),
    );
  }

  NgmyBusinessCardDocument? get document {
    try {
      final map = jsonDecode(businessCardJson);
      if (map is! Map) return null;
      return NgmyBusinessCardDocument.fromJson(Map<String, dynamic>.from(map));
    } catch (_) {
      return null;
    }
  }
}

class NgmyHomeVoteAdStore {
  NgmyHomeVoteAdStore._();

  static NgmyHomeVoteAdCampaign _cache = NgmyHomeVoteAdCampaign();
  static bool _loaded = false;

  static NgmyHomeVoteAdCampaign get current => _cache;

  static Future<NgmyHomeVoteAdCampaign> load({bool forceCloud = false}) async {
    if (_loaded && !forceCloud) {
      _expireIfNeeded();
      return _cache;
    }
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kNgmyHomeVoteAdPrefsKey);
      if (raw != null && raw.trim().isNotEmpty) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          _cache = NgmyHomeVoteAdCampaign.fromJson(Map<String, dynamic>.from(decoded));
        }
      }
    } catch (e) {
      debugPrint('[home vote ad] local load: $e');
    }
    if (forceCloud || await ngmyCanReachCloud()) {
      try {
        final row = await ngmyFetchSettingsValueViaRest(kNgmyHomeVoteAdSettingsKey);
        if (row != null && row.isNotEmpty) {
          final remote = NgmyHomeVoteAdCampaign.fromJson(row);
          if (_preferRemote(remote, _cache)) {
            _cache = remote;
            await _saveLocal(_cache);
          }
        }
      } catch (e) {
        debugPrint('[home vote ad] cloud load: $e');
      }
    }
    _loaded = true;
    _expireIfNeeded();
    return _cache;
  }

  static bool _preferRemote(NgmyHomeVoteAdCampaign remote, NgmyHomeVoteAdCampaign local) {
    final r = DateTime.tryParse(remote.updatedAt)?.toUtc();
    final l = DateTime.tryParse(local.updatedAt)?.toUtc();
    if (r == null) return local.updatedAt.trim().isEmpty;
    if (l == null) return true;
    return !r.isBefore(l);
  }

  static Future<void> _saveLocal(NgmyHomeVoteAdCampaign campaign) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_kNgmyHomeVoteAdPrefsKey, jsonEncode(campaign.toJson()));
    } catch (e) {
      debugPrint('[home vote ad] local save: $e');
    }
  }

  static Future<void> _expireIfNeeded() async {
    if (!_cache.active) return;
    final end = DateTime.tryParse(_cache.endsAt)?.toUtc();
    if (end == null) return;
    if (!DateTime.now().toUtc().isBefore(end)) {
      _cache.active = false;
      _cache.updatedAt = DateTime.now().toUtc().toIso8601String();
      await _saveLocal(_cache);
      // Best-effort cloud sync; don't block home load on network.
      try {
        if (await ngmyCanReachCloud()) {
          await ngmyUpsertSettingsRowReliable(kNgmyHomeVoteAdSettingsKey, _cache.toJson());
        }
      } catch (_) {}
    }
  }

  static Future<bool> publish({
    required NgmyBusinessCardDocument document,
    required int durationDays,
    required String publishedBy,
    String candidateId = '',
    String candidateName = '',
  }) async {
    final days = durationDays.clamp(1, kNgmyHomeVoteAdMaxDays);
    final now = DateTime.now().toUtc();
    final campaign = NgmyHomeVoteAdCampaign(
      active: true,
      businessCardJson: jsonEncode(document.toJson()),
      candidateId: candidateId,
      candidateName: candidateName,
      startsAt: now.toIso8601String(),
      endsAt: now.add(Duration(days: days)).toIso8601String(),
      durationDays: days,
      publishedBy: publishedBy.trim().toLowerCase(),
      updatedAt: now.toIso8601String(),
    );
    _cache = campaign;
    _loaded = true;
    await _saveLocal(campaign);
    if (!await ngmyCanReachCloud()) return false;
    try {
      return await ngmyUpsertSettingsRowReliable(kNgmyHomeVoteAdSettingsKey, campaign.toJson());
    } catch (e) {
      debugPrint('[home vote ad] cloud save: $e');
      return false;
    }
  }

  static Future<bool> remove({required String publishedBy}) async {
    final now = DateTime.now().toUtc().toIso8601String();
    _cache = NgmyHomeVoteAdCampaign(
      active: false,
      updatedAt: now,
      publishedBy: publishedBy.trim().toLowerCase(),
    );
    _loaded = true;
    await _saveLocal(_cache);
    if (!await ngmyCanReachCloud()) return false;
    try {
      return await ngmyUpsertSettingsRowReliable(kNgmyHomeVoteAdSettingsKey, _cache.toJson());
    } catch (e) {
      debugPrint('[home vote ad] cloud remove: $e');
      return false;
    }
  }
}
