import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';

const String kNgmyHomeVoteAdSettingsKey = 'home_vote_ad_campaign';
const String _kNgmyHomeVoteAdPrefsKey = 'ngmy_home_vote_ad_v1';
const String kNgmyHomeVoteAdCardId = 'ngmy_home_vote_ad_default';
const String kNgmyHomeVoteAdCategory = 'Vote Ad';

/// Exact home deck card face height used by [NgmyGlassCardStack].
const double kNgmyHomeVoteAdCardHeight = 252;

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

class NgmyVoteAdSlideStyle {
  const NgmyVoteAdSlideStyle({
    required this.id,
    required this.label,
    required this.icon,
    required this.accent,
  });

  final String id;
  final String label;
  final IconData icon;
  final Color accent;
}

const List<NgmyVoteAdSlideStyle> kNgmyVoteAdSlideStyles = [
  NgmyVoteAdSlideStyle(id: 'cinematic', label: 'Cinematic', icon: Icons.movie_filter_rounded, accent: Color(0xFFFACC15)),
  NgmyVoteAdSlideStyle(id: 'billboard', label: 'Billboard', icon: Icons.view_agenda_rounded, accent: Color(0xFFEF4444)),
  NgmyVoteAdSlideStyle(id: 'ticker', label: 'Ticker', icon: Icons.horizontal_rule_rounded, accent: Color(0xFF22D3EE)),
  NgmyVoteAdSlideStyle(id: 'rally', label: 'Rally', icon: Icons.campaign_rounded, accent: Color(0xFFF97316)),
  NgmyVoteAdSlideStyle(id: 'spotlight', label: 'Spotlight', icon: Icons.highlight_rounded, accent: Color(0xFFD4AF37)),
  NgmyVoteAdSlideStyle(id: 'portrait', label: 'Portrait', icon: Icons.account_circle_rounded, accent: Color(0xFFA78BFA)),
  NgmyVoteAdSlideStyle(id: 'neon', label: 'Neon', icon: Icons.bolt_rounded, accent: Color(0xFFE879F9)),
  NgmyVoteAdSlideStyle(id: 'parade', label: 'Parade', icon: Icons.flag_rounded, accent: Color(0xFF34D399)),
  NgmyVoteAdSlideStyle(id: 'editorial', label: 'Editorial', icon: Icons.newspaper_rounded, accent: Color(0xFFE2E8F0)),
  NgmyVoteAdSlideStyle(id: 'stadium', label: 'Stadium', icon: Icons.stadium_rounded, accent: Color(0xFF60A5FA)),
];

NgmyVoteAdSlideStyle ngmyVoteAdSlideStyleById(String id) {
  for (final s in kNgmyVoteAdSlideStyles) {
    if (s.id == id) return s;
  }
  return kNgmyVoteAdSlideStyles.first;
}

class NgmyHomeVoteAdCampaign {
  NgmyHomeVoteAdCampaign({
    this.active = false,
    this.businessCardJson = '',
    this.candidateId = '',
    this.candidateName = '',
    this.photoUrl = '',
    this.backgroundUrl = '',
    this.bioNote = '',
    this.headline = 'VOTE NOW',
    this.supportLine = 'Your voice. Your community. Your choice.',
    this.ctaText = 'CAST YOUR BALLOT',
    this.marqueeText = 'VOTE · SUPPORT THIS CANDIDATE · MAKE YOUR VOICE COUNT · CIVIC REGISTRY VOTING ·',
    this.slideStyle = 'cinematic',
    this.showCirclePhoto = true,
    this.showMarquee = true,
    this.accentArgb = 0xFFFACC15,
    this.startsAt = '',
    this.endsAt = '',
    this.durationDays = 7,
    this.publishedBy = '',
    this.updatedAt = '',
  });

  bool active;
  /// Legacy business-card JSON (optional).
  String businessCardJson;
  String candidateId;
  String candidateName;
  /// Circle / portrait photo.
  String photoUrl;
  /// Full-bleed background (separate from circle).
  String backgroundUrl;
  String bioNote;
  String headline;
  String supportLine;
  String ctaText;
  String marqueeText;
  String slideStyle;
  bool showCirclePhoto;
  bool showMarquee;
  int accentArgb;
  String startsAt;
  String endsAt;
  int durationDays;
  String publishedBy;
  String updatedAt;

  Color get accent => Color(accentArgb);

  String get effectiveBackground {
    final bg = backgroundUrl.trim();
    if (bg.isNotEmpty) return bg;
    return photoUrl.trim();
  }

  bool get hasCreative =>
      candidateName.trim().isNotEmpty ||
      photoUrl.trim().isNotEmpty ||
      backgroundUrl.trim().isNotEmpty ||
      businessCardJson.trim().isNotEmpty;

  bool get isLive {
    if (!active) return false;
    if (!hasCreative) return false;
    final now = DateTime.now().toUtc();
    final start = DateTime.tryParse(startsAt)?.toUtc();
    final end = DateTime.tryParse(endsAt)?.toUtc();
    if (start != null && now.isBefore(start)) return false;
    if (end != null && !now.isBefore(end)) return false;
    return true;
  }

  NgmyHomeVoteAdCampaign copyWith({
    bool? active,
    String? businessCardJson,
    String? candidateId,
    String? candidateName,
    String? photoUrl,
    String? backgroundUrl,
    String? bioNote,
    String? headline,
    String? supportLine,
    String? ctaText,
    String? marqueeText,
    String? slideStyle,
    bool? showCirclePhoto,
    bool? showMarquee,
    int? accentArgb,
    String? startsAt,
    String? endsAt,
    int? durationDays,
    String? publishedBy,
    String? updatedAt,
  }) {
    return NgmyHomeVoteAdCampaign(
      active: active ?? this.active,
      businessCardJson: businessCardJson ?? this.businessCardJson,
      candidateId: candidateId ?? this.candidateId,
      candidateName: candidateName ?? this.candidateName,
      photoUrl: photoUrl ?? this.photoUrl,
      backgroundUrl: backgroundUrl ?? this.backgroundUrl,
      bioNote: bioNote ?? this.bioNote,
      headline: headline ?? this.headline,
      supportLine: supportLine ?? this.supportLine,
      ctaText: ctaText ?? this.ctaText,
      marqueeText: marqueeText ?? this.marqueeText,
      slideStyle: slideStyle ?? this.slideStyle,
      showCirclePhoto: showCirclePhoto ?? this.showCirclePhoto,
      showMarquee: showMarquee ?? this.showMarquee,
      accentArgb: accentArgb ?? this.accentArgb,
      startsAt: startsAt ?? this.startsAt,
      endsAt: endsAt ?? this.endsAt,
      durationDays: durationDays ?? this.durationDays,
      publishedBy: publishedBy ?? this.publishedBy,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }

  Map<String, dynamic> toJson() => {
        'active': active,
        'businessCardJson': businessCardJson,
        'candidateId': candidateId,
        'candidateName': candidateName,
        'photoUrl': photoUrl,
        'backgroundUrl': backgroundUrl,
        'bioNote': bioNote,
        'headline': headline,
        'supportLine': supportLine,
        'ctaText': ctaText,
        'marqueeText': marqueeText,
        'slideStyle': slideStyle,
        'showCirclePhoto': showCirclePhoto,
        'showMarquee': showMarquee,
        'accentArgb': accentArgb,
        'startsAt': startsAt,
        'endsAt': endsAt,
        'durationDays': durationDays,
        'publishedBy': publishedBy,
        'updatedAt': updatedAt,
      };

  factory NgmyHomeVoteAdCampaign.fromJson(Map<String, dynamic>? json) {
    if (json == null) return NgmyHomeVoteAdCampaign();
    var name = (json['candidateName'] ?? '').toString();
    var photo = (json['photoUrl'] ?? '').toString();
    var bg = (json['backgroundUrl'] ?? '').toString();
    var bio = (json['bioNote'] ?? '').toString();
    var headline = (json['headline'] ?? 'VOTE NOW').toString();
    var support = (json['supportLine'] ?? '').toString();
    var cta = (json['ctaText'] ?? '').toString();
    var marquee = (json['marqueeText'] ?? '').toString();
    final cardJson = (json['businessCardJson'] ?? '').toString();
    if (name.trim().isEmpty && cardJson.trim().isNotEmpty) {
      try {
        final map = jsonDecode(cardJson);
        if (map is Map) {
          if (name.trim().isEmpty) name = (map['fullName'] ?? '').toString();
          if (bio.trim().isEmpty) bio = (map['tagline'] ?? '').toString();
          if (photo.trim().isEmpty) {
            final logo = (map['logoBase64'] ?? '').toString().trim();
            if (logo.isNotEmpty) {
              photo = logo.startsWith('data:') ? logo : 'data:image/jpeg;base64,$logo';
            }
          }
        }
      } catch (_) {}
    }
    if (support.trim().isEmpty) {
      support = bio.trim().isEmpty ? 'Your voice. Your community. Your choice.' : bio.trim();
    }
    if (cta.trim().isEmpty) cta = 'CAST YOUR BALLOT';
    if (marquee.trim().isEmpty) {
      marquee = 'VOTE · SUPPORT THIS CANDIDATE · MAKE YOUR VOICE COUNT · CIVIC REGISTRY VOTING ·';
    }
    return NgmyHomeVoteAdCampaign(
      active: json['active'] == true,
      businessCardJson: cardJson,
      candidateId: (json['candidateId'] ?? '').toString(),
      candidateName: name,
      photoUrl: photo,
      backgroundUrl: bg,
      bioNote: bio,
      headline: headline.trim().isEmpty ? 'VOTE NOW' : headline,
      supportLine: support,
      ctaText: cta,
      marqueeText: marquee,
      slideStyle: (json['slideStyle'] ?? 'cinematic').toString(),
      showCirclePhoto: json['showCirclePhoto'] != false,
      showMarquee: json['showMarquee'] != false,
      accentArgb: (json['accentArgb'] as num?)?.toInt() ?? 0xFFFACC15,
      startsAt: (json['startsAt'] ?? '').toString(),
      endsAt: (json['endsAt'] ?? '').toString(),
      durationDays: (json['durationDays'] as num?)?.toInt() ?? 7,
      publishedBy: (json['publishedBy'] ?? '').toString(),
      updatedAt: (json['updatedAt'] ?? '').toString(),
    );
  }
}

class NgmyHomeVoteAdStore {
  NgmyHomeVoteAdStore._();

  static NgmyHomeVoteAdCampaign _cache = NgmyHomeVoteAdCampaign();
  static bool _loaded = false;

  static NgmyHomeVoteAdCampaign get current => _cache;

  static Future<NgmyHomeVoteAdCampaign> load({bool forceCloud = false}) async {
    if (_loaded && !forceCloud) {
      _expireIfNeeded(persistCloud: false);
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
    _loaded = true;
    _expireIfNeeded(persistCloud: false);

    if (forceCloud) {
      // ignore: unawaited_futures
      _refreshFromCloud();
    }
    return _cache;
  }

  static Future<NgmyHomeVoteAdCampaign> refreshFromCloud() => _refreshFromCloud();

  static Future<NgmyHomeVoteAdCampaign> _refreshFromCloud() async {
    if (!await ngmyCanReachCloud()) return _cache;
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
    _expireIfNeeded(persistCloud: true);
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

  static Future<void> _expireIfNeeded({required bool persistCloud}) async {
    if (!_cache.active) return;
    final end = DateTime.tryParse(_cache.endsAt)?.toUtc();
    if (end == null) return;
    if (!DateTime.now().toUtc().isBefore(end)) {
      _cache.active = false;
      _cache.updatedAt = DateTime.now().toUtc().toIso8601String();
      await _saveLocal(_cache);
      if (!persistCloud) return;
      try {
        if (await ngmyCanReachCloud()) {
          await ngmyUpsertSettingsRowReliable(kNgmyHomeVoteAdSettingsKey, _cache.toJson());
        }
      } catch (_) {}
    }
  }

  static Future<bool> publish({
    required NgmyHomeVoteAdCampaign draft,
    required int durationDays,
    required String publishedBy,
  }) async {
    final days = durationDays.clamp(1, kNgmyHomeVoteAdMaxDays);
    final now = DateTime.now().toUtc();
    final campaign = draft.copyWith(
      active: true,
      candidateName: draft.candidateName.trim().toUpperCase(),
      headline: draft.headline.trim().isEmpty ? 'VOTE NOW' : draft.headline.trim().toUpperCase(),
      ctaText: draft.ctaText.trim().isEmpty ? 'CAST YOUR BALLOT' : draft.ctaText.trim().toUpperCase(),
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
