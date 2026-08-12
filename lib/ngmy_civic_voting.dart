import 'dart:convert';

import 'package:file_picker/file_picker.dart';
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

/// Vote category templates.
class NgmyVotingCategory {
  static const civic = 'civic';
  static const music = 'music';
  static const movie = 'movie';
  static const artistYear = 'artist_year';
  static const artistMonth = 'artist_month';
  static const custom = 'custom';

  static const List<(String id, String label, bool membersOnly)> all = [
    (civic, 'Civic Registry', true),
    (music, 'Music / Artists', false),
    (movie, 'Movies', false),
    (artistYear, 'Best Artist of the Year', false),
    (artistMonth, 'Best Artist of the Month', false),
    (custom, 'Custom (public)', false),
  ];

  static String labelOf(String id) {
    for (final c in all) {
      if (c.$1 == id) return c.$2;
    }
    return 'Voting';
  }

  static bool membersOnlyFor(String id) {
    for (final c in all) {
      if (c.$1 == id) return c.$3;
    }
    return false;
  }

  static String defaultTitle(String id) {
    switch (id) {
      case civic:
        return 'Civic Voting';
      case music:
        return 'Best Music Artist';
      case movie:
        return 'Best Movie';
      case artistYear:
        return 'Best Artist of the Year';
      case artistMonth:
        return 'Best Artist of the Month';
      default:
        return 'Community Vote';
    }
  }
}

class NgmyCivicVotingCandidate {
  NgmyCivicVotingCandidate({
    required this.id,
    required this.name,
    this.photoUrl = '',
    this.bioNote = '',
    this.voiceNoteUrl = '',
    this.dripTotal = 0,
    this.dripDurationMinutes = 0,
    this.dripStartedAt = '',
  });

  final String id;
  String name;
  String photoUrl;
  String bioNote;
  String voiceNoteUrl;

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
        'bioNote': bioNote,
        'voiceNoteUrl': voiceNoteUrl,
        'dripTotal': dripTotal,
        'dripDurationMinutes': dripDurationMinutes,
        'dripStartedAt': dripStartedAt,
      };

  factory NgmyCivicVotingCandidate.fromJson(Map<String, dynamic> json) {
    return NgmyCivicVotingCandidate(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      photoUrl: (json['photoUrl'] ?? '').toString(),
      bioNote: (json['bioNote'] ?? json['notes'] ?? '').toString(),
      voiceNoteUrl: (json['voiceNoteUrl'] ?? '').toString(),
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
    this.voterRegistryId = '',
  });

  final String voterEmail;
  final String candidateId;
  final String at;

  /// Civic registry id — used so each member can vote only once.
  final String voterRegistryId;

  Map<String, dynamic> toJson() => {
        'voterEmail': voterEmail,
        'candidateId': candidateId,
        'at': at,
        'voterRegistryId': voterRegistryId,
      };

  factory NgmyCivicVotingBallot.fromJson(Map<String, dynamic> json) {
    return NgmyCivicVotingBallot(
      voterEmail: (json['voterEmail'] ?? '').toString().toLowerCase().trim(),
      candidateId: (json['candidateId'] ?? '').toString(),
      at: (json['at'] ?? '').toString(),
      voterRegistryId: (json['voterRegistryId'] ?? '').toString().trim(),
    );
  }
}

class NgmyCivicVotingState {
  NgmyCivicVotingState({
    this.id = '',
    this.category = NgmyVotingCategory.civic,
    this.membersOnly = true,
    this.open = false,
    this.title = 'Civic Voting',
    this.yearLabel = '2026',
    this.dateLabel = '',
    this.scheduleOpenDate = '',
    this.recurrenceYears = 0,
    this.lastAutoOpenKey = '',
    this.manualClosedCycleKey = '',
    List<String>? allowedStates,
    List<NgmyCivicVotingCandidate>? candidates,
    List<NgmyCivicVotingBallot>? ballots,
    this.updatedAt = '',
    List<NgmyCivicVotingState>? polls,
  })  : allowedStates = allowedStates ?? <String>[],
        candidates = candidates ?? <NgmyCivicVotingCandidate>[],
        ballots = ballots ?? <NgmyCivicVotingBallot>[],
        polls = polls ?? <NgmyCivicVotingState>[];

  /// Unique poll id (multi-poll bundle). Empty for legacy single-poll rows.
  String id;

  /// civic | music | movie | artist_year | artist_month | custom
  String category;

  /// Civic Registry poll = members only; other categories = anyone.
  bool membersOnly;

  bool open;
  String title;
  String yearLabel;
  String dateLabel;

  /// Calendar date (YYYY-MM-DD) when voting should open.
  String scheduleOpenDate;

  /// 0 = one-time; otherwise reopen every N years on the same month/day.
  int recurrenceYears;

  /// Cycle key already auto-opened (e.g. `2026-11-04`).
  String lastAutoOpenKey;

  /// If admin closed during a cycle, do not auto-reopen until the next cycle.
  String manualClosedCycleKey;

  /// Empty = all states. Only applies when [membersOnly] is true.
  List<String> allowedStates;
  List<NgmyCivicVotingCandidate> candidates;
  List<NgmyCivicVotingBallot> ballots;
  String updatedAt;

  /// Multi-poll container. When non-empty, this object is the bundle root
  /// and each entry is an independent vote (civic / music / movies / …).
  List<NgmyCivicVotingState> polls;

  bool get isBundle => polls.isNotEmpty;

  List<NgmyCivicVotingState> get allPolls {
    if (polls.isNotEmpty) return polls;
    return <NgmyCivicVotingState>[this];
  }

  List<NgmyCivicVotingState> get openPolls => allPolls.where((p) => p.open).toList();

  bool get anyOpen => openPolls.isNotEmpty;

  void syncMembersOnlyFromCategory() {
    membersOnly = NgmyVotingCategory.membersOnlyFor(category);
  }

  bool allowsState(String state) {
    if (!membersOnly) return true;
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

  bool hasVoted(String email, {String registryId = ''}) {
    final key = email.toLowerCase().trim();
    final rid = registryId.trim();
    if (key.isNotEmpty && ballots.any((b) => b.voterEmail == key)) return true;
    if (rid.isNotEmpty && ballots.any((b) => b.voterRegistryId.trim() == rid)) return true;
    return false;
  }

  String? votedCandidateId(String email, {String registryId = ''}) {
    final key = email.toLowerCase().trim();
    final rid = registryId.trim();
    for (final b in ballots) {
      if (key.isNotEmpty && b.voterEmail == key) return b.candidateId;
      if (rid.isNotEmpty && b.voterRegistryId.trim() == rid) return b.candidateId;
    }
    return null;
  }

  /// Keep the first ballot only for each email / registry id.
  void dedupeBallots() {
    final seenEmail = <String>{};
    final seenReg = <String>{};
    final next = <NgmyCivicVotingBallot>[];
    for (final b in ballots) {
      final e = b.voterEmail.toLowerCase().trim();
      final r = b.voterRegistryId.trim();
      if (e.isNotEmpty && seenEmail.contains(e)) continue;
      if (r.isNotEmpty && seenReg.contains(r)) continue;
      if (e.isNotEmpty) seenEmail.add(e);
      if (r.isNotEmpty) seenReg.add(r);
      next.add(b);
    }
    ballots
      ..clear()
      ..addAll(next);
  }

  static String cycleKey(DateTime d) =>
      '${d.year.toString().padLeft(4, '0')}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

  static String formatDisplayDate(DateTime d) {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return '${months[d.month - 1]} ${d.day}, ${d.year}';
  }

  /// Latest scheduled cycle on or before [today] (local calendar day).
  DateTime? currentOrPastCycleDate({DateTime? now}) {
    final raw = scheduleOpenDate.trim();
    if (raw.isEmpty) return null;
    final parsed = DateTime.tryParse(raw);
    if (parsed == null) return null;
    final anchor = DateTime(parsed.year, parsed.month, parsed.day);
    final today = now ?? DateTime.now();
    final day = DateTime(today.year, today.month, today.day);
    if (anchor.isAfter(day)) return null;
    if (recurrenceYears <= 0) return anchor;

    var cycle = anchor;
    while (true) {
      final next = DateTime(cycle.year + recurrenceYears, cycle.month, cycle.day);
      if (next.isAfter(day)) break;
      cycle = next;
    }
    return cycle;
  }

  DateTime? nextUpcomingCycleDate({DateTime? now}) {
    final raw = scheduleOpenDate.trim();
    if (raw.isEmpty) return null;
    final parsed = DateTime.tryParse(raw);
    if (parsed == null) return null;
    final anchor = DateTime(parsed.year, parsed.month, parsed.day);
    final today = now ?? DateTime.now();
    final day = DateTime(today.year, today.month, today.day);
    if (!anchor.isBefore(day)) return anchor;
    if (recurrenceYears <= 0) return null;
    var cycle = anchor;
    while (true) {
      final next = DateTime(cycle.year + recurrenceYears, cycle.month, cycle.day);
      if (!next.isBefore(day)) return next;
      cycle = next;
    }
  }

  /// Apply calendar auto-open. Returns true if state mutated.
  bool applySchedule({DateTime? now}) {
    if (polls.isNotEmpty) {
      var any = false;
      for (final p in polls) {
        if (p.applySchedule(now: now)) any = true;
      }
      return any;
    }
    final cycle = currentOrPastCycleDate(now: now);
    if (cycle == null) return false;
    final key = cycleKey(cycle);
    if (manualClosedCycleKey == key) return false;
    if (lastAutoOpenKey == key) return false;

    open = true;
    lastAutoOpenKey = key;
    dateLabel = formatDisplayDate(cycle);
    yearLabel = '${cycle.year}';
    return true;
  }

  Map<String, dynamic> toJson() {
    if (polls.isNotEmpty) {
      return {
        'polls': polls.map((p) => p._pollToJson()).toList(),
        'updatedAt': updatedAt,
      };
    }
    return _pollToJson();
  }

  Map<String, dynamic> _pollToJson() => {
        'id': id,
        'category': category,
        'membersOnly': membersOnly,
        'open': open,
        'title': title,
        'yearLabel': yearLabel,
        'dateLabel': dateLabel,
        'scheduleOpenDate': scheduleOpenDate,
        'recurrenceYears': recurrenceYears,
        'lastAutoOpenKey': lastAutoOpenKey,
        'manualClosedCycleKey': manualClosedCycleKey,
        'allowedStates': allowedStates,
        'candidates': candidates.map((c) => c.toJson()).toList(),
        'ballots': ballots.map((b) => b.toJson()).toList(),
        'updatedAt': updatedAt,
      };

  factory NgmyCivicVotingState.fromJson(Map<String, dynamic> json) {
    final rawPolls = json['polls'];
    if (rawPolls is List && rawPolls.isNotEmpty) {
      final list = rawPolls
          .whereType<Map>()
          .map((e) => NgmyCivicVotingState._pollFromJson(Map<String, dynamic>.from(e)))
          .toList();
      return NgmyCivicVotingState(
        polls: list,
        updatedAt: (json['updatedAt'] ?? list.first.updatedAt).toString(),
      );
    }
    // Legacy single-poll payload → wrap as a one-poll bundle for consistency.
    final single = NgmyCivicVotingState._pollFromJson(json);
    if (single.id.trim().isEmpty) {
      single.id = 'poll_${DateTime.now().microsecondsSinceEpoch}';
    }
    return NgmyCivicVotingState(
      polls: [single],
      updatedAt: single.updatedAt,
    );
  }

  factory NgmyCivicVotingState._pollFromJson(Map<String, dynamic> json) {
    final category = (json['category'] ?? NgmyVotingCategory.civic).toString();
    final membersOnly = json.containsKey('membersOnly')
        ? json['membersOnly'] == true
        : NgmyVotingCategory.membersOnlyFor(category);
    return NgmyCivicVotingState(
      id: (json['id'] ?? '').toString(),
      category: category,
      membersOnly: membersOnly,
      open: json['open'] == true,
      title: (json['title'] ?? NgmyVotingCategory.defaultTitle(category)).toString(),
      yearLabel: (json['yearLabel'] ?? '2026').toString(),
      dateLabel: (json['dateLabel'] ?? '').toString(),
      scheduleOpenDate: (json['scheduleOpenDate'] ?? '').toString(),
      recurrenceYears: (json['recurrenceYears'] as num?)?.toInt() ?? 0,
      lastAutoOpenKey: (json['lastAutoOpenKey'] ?? '').toString(),
      manualClosedCycleKey: (json['manualClosedCycleKey'] ?? '').toString(),
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

  NgmyCivicVotingState copyPoll() => NgmyCivicVotingState._pollFromJson(_pollToJson());
}

String ngmyCivicVoterRegistryId({
  required dynamic config,
  required String email,
  String? phone,
}) {
  final passport = NgmyCivicRegistryMembers.passportForAppUser(
    config,
    email: email,
    phone: phone ?? '',
  );
  return (passport?['registryId'] ?? '').toString().trim();
}

/// Who may cast a ballot on this poll.
bool ngmyCanCivicVote({
  required dynamic config,
  required String email,
  String? phone,
  required String memberState,
  required NgmyCivicVotingState voting,
}) {
  if (!voting.open) return false;
  if (!voting.allowsState(memberState)) return false;
  // Public categories (music, movies, artists, …) — any signed-in user.
  if (!voting.membersOnly) {
    return email.trim().isNotEmpty;
  }
  // Civic Registry poll — linked passport members only.
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
    if (_loaded && !forceCloud) {
      await _syncScheduleAndMaybePersist(_cache);
      return _cache;
    }
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
    await _syncScheduleAndMaybePersist(_cache);
    return _cache;
  }

  static Future<void> _syncScheduleAndMaybePersist(NgmyCivicVotingState state) async {
    final changed = state.applySchedule();
    if (!changed) return;
    // Auto-open is a real state change — one cloud write when the date arrives.
    await save(state);
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

  /// One settings write per mutation (vote / admin edit / schedule open).
  static Future<bool> save(NgmyCivicVotingState state) async {
    for (final poll in state.allPolls) {
      poll.dedupeBallots();
      poll.syncMembersOnlyFromCategory();
      for (final c in poll.candidates) {
        c.name = c.name.toUpperCase();
      }
      if (poll.id.trim().isEmpty) {
        poll.id = 'poll_${DateTime.now().microsecondsSinceEpoch}';
      }
    }
    // Always persist as a polls bundle.
    if (state.polls.isEmpty && (state.candidates.isNotEmpty || state.title.trim().isNotEmpty || state.open)) {
      state.polls = [state.copyPoll()..id = state.id.isEmpty ? 'poll_main' : state.id];
    }
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
    final cloud = await _uploadBytes(
      candidateId: candidateId,
      bytes: bytes,
      ext: 'jpg',
      contentType: 'image/jpeg',
      folder: 'voting_candidates',
    );
    if (cloud != null) return cloud;
    return 'data:image/jpeg;base64,${base64Encode(bytes)}';
  }

  static Future<String?> pickCandidateVoiceNote(String candidateId) async {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: const ['m4a', 'mp3', 'wav', 'aac', 'ogg', 'webm'],
      withData: true,
    );
    if (result == null || result.files.isEmpty) return null;
    final file = result.files.first;
    final bytes = file.bytes;
    if (bytes == null || bytes.isEmpty) return null;
    final ext = (file.extension ?? 'm4a').toLowerCase();
    final contentType = switch (ext) {
      'mp3' => 'audio/mpeg',
      'wav' => 'audio/wav',
      'aac' => 'audio/aac',
      'ogg' => 'audio/ogg',
      'webm' => 'audio/webm',
      _ => 'audio/mp4',
    };
    return _uploadBytes(
      candidateId: candidateId,
      bytes: bytes,
      ext: ext,
      contentType: contentType,
      folder: 'voting_voice_notes',
    );
  }

  static Future<String?> _uploadBytes({
    required String candidateId,
    required Uint8List bytes,
    required String ext,
    required String contentType,
    required String folder,
  }) async {
    try {
      final safe = candidateId.replaceAll(RegExp(r'[^a-zA-Z0-9_-]'), '_');
      if (safe.isEmpty) return null;
      final path = '$folder/$safe.$ext';
      final storage = Supabase.instance.client.storage.from('media');
      await storage
          .uploadBinary(path, bytes, fileOptions: FileOptions(upsert: true, contentType: contentType))
          .timeout(const Duration(seconds: 45));
      final url = storage.getPublicUrl(path);
      if (url.isEmpty) return null;
      return '$url?v=${DateTime.now().millisecondsSinceEpoch}';
    } catch (e) {
      debugPrint('[civic voting] upload: $e');
      return null;
    }
  }
}
