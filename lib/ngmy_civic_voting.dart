import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/painting.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_civic_registry_members.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';

const String kNgmyCivicVotingSettingsKey = 'civic_voting_settings';
const String _kNgmyCivicVotingPrefsKey = 'ngmy_civic_voting_settings_v1';

class NgmyCivicVotingCandidate {
  NgmyCivicVotingCandidate({
    required this.id,
    required this.name,
    this.photoUrl = '',
    this.dripTotal = 0,
    this.dripDurationMinutes = 0,
    this.dripStartedAt = '',
  });

  final String id;
  String name;
  String photoUrl;

  /// Admin drip votes — released gradually over [dripDurationMinutes].
  int dripTotal;
  int dripDurationMinutes;
  String dripStartedAt;

  int releasedDripVotes({DateTime? now}) {
    if (dripTotal <= 0 || dripDurationMinutes <= 0 || dripStartedAt.trim().isEmpty) {
      return 0;
    }
    final start = DateTime.tryParse(dripStartedAt)?.toUtc();
    if (start == null) return 0;
    final elapsed = (now ?? DateTime.now().toUtc()).difference(start);
    if (elapsed.isNegative) return 0;
    final totalMs = dripDurationMinutes * 60 * 1000;
    if (totalMs <= 0) return dripTotal;
    final fraction = (elapsed.inMilliseconds / totalMs).clamp(0.0, 1.0);
    return (dripTotal * fraction).floor().clamp(0, dripTotal);
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'photoUrl': photoUrl,
        'dripTotal': dripTotal,
        'dripDurationMinutes': dripDurationMinutes,
        'dripStartedAt': dripStartedAt,
      };

  factory NgmyCivicVotingCandidate.fromJson(Map<String, dynamic> json) {
    return NgmyCivicVotingCandidate(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      photoUrl: (json['photoUrl'] ?? '').toString(),
      dripTotal: (json['dripTotal'] as num?)?.toInt() ?? 0,
      dripDurationMinutes: (json['dripDurationMinutes'] as num?)?.toInt() ?? 0,
      dripStartedAt: (json['dripStartedAt'] ?? '').toString(),
    );
  }
}

class NgmyCivicVotingBallot {
  NgmyCivicVotingBallot({
    required this.voterEmail,
    required this.candidateId,
    required this.at,
  });

  final String voterEmail;
  final String candidateId;
  final String at;

  Map<String, dynamic> toJson() => {
        'voterEmail': voterEmail,
        'candidateId': candidateId,
        'at': at,
      };

  factory NgmyCivicVotingBallot.fromJson(Map<String, dynamic> json) {
    return NgmyCivicVotingBallot(
      voterEmail: (json['voterEmail'] ?? '').toString().toLowerCase().trim(),
      candidateId: (json['candidateId'] ?? '').toString(),
      at: (json['at'] ?? '').toString(),
    );
  }
}

class NgmyCivicVotingState {
  NgmyCivicVotingState({
    this.open = false,
    this.title = 'Civic Voting',
    this.yearLabel = '2026',
    this.dateLabel = '',
    List<String>? allowedStates,
    List<NgmyCivicVotingCandidate>? candidates,
    List<NgmyCivicVotingBallot>? ballots,
    this.updatedAt = '',
  })  : allowedStates = allowedStates ?? <String>[],
        candidates = candidates ?? <NgmyCivicVotingCandidate>[],
        ballots = ballots ?? <NgmyCivicVotingBallot>[];

  bool open;
  String title;
  String yearLabel;
  String dateLabel;

  /// Empty = all states.
  List<String> allowedStates;
  List<NgmyCivicVotingCandidate> candidates;
  List<NgmyCivicVotingBallot> ballots;
  String updatedAt;

  bool allowsState(String state) {
    if (allowedStates.isEmpty) return true;
    final want = state.trim().toLowerCase();
    return allowedStates.any((s) => s.trim().toLowerCase() == want);
  }

  int votesFor(String candidateId, {DateTime? now}) {
    final userVotes = ballots.where((b) => b.candidateId == candidateId).length;
    NgmyCivicVotingCandidate? cand;
    for (final c in candidates) {
      if (c.id == candidateId) {
        cand = c;
        break;
      }
    }
    final drip = cand?.releasedDripVotes(now: now) ?? 0;
    return userVotes + drip;
  }

  bool hasVoted(String email) {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return false;
    return ballots.any((b) => b.voterEmail == key);
  }

  String? votedCandidateId(String email) {
    final key = email.toLowerCase().trim();
    for (final b in ballots) {
      if (b.voterEmail == key) return b.candidateId;
    }
    return null;
  }

  Map<String, dynamic> toJson() => {
        'open': open,
        'title': title,
        'yearLabel': yearLabel,
        'dateLabel': dateLabel,
        'allowedStates': allowedStates,
        'candidates': candidates.map((c) => c.toJson()).toList(),
        'ballots': ballots.map((b) => b.toJson()).toList(),
        'updatedAt': updatedAt,
      };

  factory NgmyCivicVotingState.fromJson(Map<String, dynamic> json) {
    return NgmyCivicVotingState(
      open: json['open'] == true,
      title: (json['title'] ?? 'Civic Voting').toString(),
      yearLabel: (json['yearLabel'] ?? '2026').toString(),
      dateLabel: (json['dateLabel'] ?? '').toString(),
      allowedStates: ((json['allowedStates'] as List?) ?? const [])
          .map((e) => e.toString())
          .where((s) => s.trim().isNotEmpty)
          .toList(),
      candidates: ((json['candidates'] as List?) ?? const [])
          .map((e) => NgmyCivicVotingCandidate.fromJson(Map<String, dynamic>.from(e as Map)))
          .toList(),
      ballots: ((json['ballots'] as List?) ?? const [])
          .map((e) => NgmyCivicVotingBallot.fromJson(Map<String, dynamic>.from(e as Map)))
          .toList(),
      updatedAt: (json['updatedAt'] ?? '').toString(),
    );
  }

  NgmyCivicVotingState copy() => NgmyCivicVotingState.fromJson(toJson());
}

/// Linked / passport-granted Civic Registry members may vote.
bool ngmyCanCivicVote({
  required dynamic config,
  required String email,
  String? phone,
  required String memberState,
  required NgmyCivicVotingState voting,
}) {
  if (!voting.open) return false;
  if (!voting.allowsState(memberState)) return false;
  final passport = NgmyCivicRegistryMembers.passportForAppUser(
    config,
    email: email,
    phone: phone ?? '',
  );
  if (passport == null) return false;
  if (!NgmyCivicRegistryMembers.passportGranted(passport)) return false;
  return true;
}

/// Supports https URLs and `data:image/...;base64,...` admin uploads.
ImageProvider? ngmyCivicVotingPhotoProvider(String url) {
  final u = url.trim();
  if (u.isEmpty) return null;
  if (u.startsWith('data:image')) {
    final comma = u.indexOf(',');
    if (comma <= 0 || comma >= u.length - 1) return null;
    try {
      return MemoryImage(base64Decode(u.substring(comma + 1)));
    } catch (_) {
      return null;
    }
  }
  return NetworkImage(u);
}

class NgmyCivicVotingStore {
  NgmyCivicVotingStore._();

  static NgmyCivicVotingState _cache = NgmyCivicVotingState();
  static bool _loaded = false;

  static NgmyCivicVotingState get current => _cache;

  static Future<NgmyCivicVotingState> load({bool forceCloud = false}) async {
    if (_loaded && !forceCloud) return _cache;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kNgmyCivicVotingPrefsKey);
      if (raw != null && raw.trim().isNotEmpty) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          _cache = NgmyCivicVotingState.fromJson(Map<String, dynamic>.from(decoded));
        }
      }
    } catch (e) {
      debugPrint('[civic voting] local load: $e');
    }
    if (forceCloud || await ngmyCanReachCloud()) {
      try {
        final row = await ngmyFetchSettingsValueViaRest(kNgmyCivicVotingSettingsKey);
        if (row != null && row.isNotEmpty) {
          final remote = NgmyCivicVotingState.fromJson(row);
          if (_preferRemote(remote, _cache)) {
            _cache = remote;
            await _saveLocal(_cache);
          }
        }
      } catch (e) {
        debugPrint('[civic voting] cloud load: $e');
      }
    }
    _loaded = true;
    return _cache;
  }

  static bool _preferRemote(NgmyCivicVotingState remote, NgmyCivicVotingState local) {
    final r = DateTime.tryParse(remote.updatedAt)?.toUtc();
    final l = DateTime.tryParse(local.updatedAt)?.toUtc();
    if (r == null) return local.updatedAt.trim().isEmpty;
    if (l == null) return true;
    return !r.isBefore(l);
  }

  static Future<void> _saveLocal(NgmyCivicVotingState state) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_kNgmyCivicVotingPrefsKey, jsonEncode(state.toJson()));
    } catch (e) {
      debugPrint('[civic voting] local save: $e');
    }
  }

  /// One settings write per mutation (vote / admin edit).
  static Future<bool> save(NgmyCivicVotingState state) async {
    state.updatedAt = DateTime.now().toUtc().toIso8601String();
    _cache = state;
    _loaded = true;
    await _saveLocal(state);
    if (!await ngmyCanReachCloud()) return false;
    try {
      return await ngmyUpsertSettingsRowReliable(kNgmyCivicVotingSettingsKey, state.toJson());
    } catch (e) {
      debugPrint('[civic voting] cloud save: $e');
      return false;
    }
  }

  /// Refresh from cloud only while a voting surface is open.
  static Future<NgmyCivicVotingState> refreshWhileOpen() => load(forceCloud: true);

  static Future<String?> pickCandidatePhoto(String candidateId) async {
    final img = await ImagePicker().pickImage(
      source: ImageSource.gallery,
      imageQuality: 70,
      maxWidth: 720,
    );
    if (img == null) return null;
    final bytes = await img.readAsBytes();
    final cloud = await _uploadCandidatePhoto(candidateId, bytes);
    if (cloud != null) return cloud;
    return 'data:image/jpeg;base64,${base64Encode(bytes)}';
  }

  static Future<String?> _uploadCandidatePhoto(String candidateId, Uint8List bytes) async {
    try {
      final safe = candidateId.replaceAll(RegExp(r'[^a-zA-Z0-9_-]'), '_');
      if (safe.isEmpty) return null;
      final path = 'voting_candidates/$safe.jpg';
      final storage = Supabase.instance.client.storage.from('media');
      await storage
          .uploadBinary(path, bytes, fileOptions: const FileOptions(upsert: true, contentType: 'image/jpeg'))
          .timeout(const Duration(seconds: 45));
      final url = storage.getPublicUrl(path);
      if (url.isEmpty) return null;
      return '$url?v=${DateTime.now().millisecondsSinceEpoch}';
    } catch (e) {
      debugPrint('[civic voting] photo upload: $e');
      return null;
    }
  }
}
