import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_swahili_curriculum.dart';
import 'ngmy_vault_games.dart';

enum WordTrack { professional, school, work, street, kiswahili }

extension WordTrackX on WordTrack {
  String get id => name;
  String get title => switch (this) {
        WordTrack.professional => 'Professional',
        WordTrack.school => 'School',
        WordTrack.work => 'Work',
        WordTrack.street => 'Street',
        WordTrack.kiswahili => 'Kiswahili School',
      };
  String get blurb => switch (this) {
        WordTrack.professional => 'Business, formal & polished English.',
        WordTrack.school => 'Classroom vocabulary for students.',
        WordTrack.work => 'Office, jobs & workplace English.',
        WordTrack.street => 'Everyday / casual English.',
        WordTrack.kiswahili => 'Words from the Kiswahili school path.',
      };
  IconData get icon => switch (this) {
        WordTrack.professional => Icons.business_center_rounded,
        WordTrack.school => Icons.school_rounded,
        WordTrack.work => Icons.work_rounded,
        WordTrack.street => Icons.chat_bubble_rounded,
        WordTrack.kiswahili => Icons.translate_rounded,
      };
  List<Color> get colors => switch (this) {
        WordTrack.professional => const [Color(0xFF6366F1), Color(0xFF22D3EE)],
        WordTrack.school => const [Color(0xFF34D399), Color(0xFF06B6D4)],
        WordTrack.work => const [Color(0xFFF59E0B), Color(0xFFEF4444)],
        WordTrack.street => const [Color(0xFFF472B6), Color(0xFFA78BFA)],
        WordTrack.kiswahili => const [Color(0xFF10B981), Color(0xFF047857)],
      };
}

class _WMPair {
  const _WMPair(this.prompt, this.answer, {this.id = ''});
  final String prompt;
  final String answer;
  final String id;
}

class WordMatchSessionStore {
  static const _kActive = 'ngmy_word_match_active_v1';
  static const _kSeen = 'ngmy_word_match_seen_v1';
  static const _kRetry = 'ngmy_word_match_retry_v1';
  static const _kProgress = 'ngmy_word_match_progress_v1';

  static Future<WordTrack?> activeTrack() async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kActive);
    if (raw == null || raw.isEmpty) return null;
    for (final t in WordTrack.values) {
      if (t.id == raw) return t;
    }
    return null;
  }

  static Future<void> setActive(WordTrack track) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kActive, track.id);
    await prefs.setInt(_kProgress, 0);
  }

  static Future<void> clearActive() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_kActive);
    await prefs.remove(_kRetry);
    await prefs.setInt(_kProgress, 0);
  }

  static Future<int> progress() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(_kProgress) ?? 0;
  }

  static Future<void> setProgress(int v) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_kProgress, v);
  }

  static Future<Set<String>> seenIds(WordTrack track) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kSeen);
    if (raw == null) return {};
    try {
      final map = jsonDecode(raw);
      if (map is! Map) return {};
      final list = map[track.id];
      if (list is List) return list.map((e) => '$e').toSet();
    } catch (_) {}
    return {};
  }

  static Future<void> markSeen(WordTrack track, Iterable<String> ids) async {
    final prefs = await SharedPreferences.getInstance();
    final all = <String, dynamic>{};
    final raw = prefs.getString(_kSeen);
    if (raw != null) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is Map) all.addAll(Map<String, dynamic>.from(decoded));
      } catch (_) {}
    }
    final prev = ((all[track.id] as List?) ?? const []).map((e) => '$e').toSet();
    prev.addAll(ids);
    all[track.id] = prev.toList();
    await prefs.setString(_kSeen, jsonEncode(all));
  }

  static Future<void> clearSeen(WordTrack track) async {
    final prefs = await SharedPreferences.getInstance();
    final all = <String, dynamic>{};
    final raw = prefs.getString(_kSeen);
    if (raw != null) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is Map) all.addAll(Map<String, dynamic>.from(decoded));
      } catch (_) {}
    }
    all[track.id] = <String>[];
    await prefs.setString(_kSeen, jsonEncode(all));
  }

  static Future<List<_WMPair>?> retrySet() async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kRetry);
    if (raw == null) return null;
    try {
      final list = jsonDecode(raw);
      if (list is! List) return null;
      return list
          .whereType<Map>()
          .map((m) => _WMPair('${m['p']}', '${m['a']}', id: '${m['id'] ?? ''}'))
          .toList();
    } catch (_) {
      return null;
    }
  }

  static Future<void> saveRetry(List<_WMPair> set) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _kRetry,
      jsonEncode(set.map((e) => {'p': e.prompt, 'a': e.answer, 'id': e.id}).toList()),
    );
  }

  static Future<void> clearRetry() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_kRetry);
  }
}

List<_WMPair> _bankFor(WordTrack track) {
  switch (track) {
    case WordTrack.professional:
      return const [
        _WMPair('Negotiate', 'Discuss to reach agreement', id: 'pro_1'),
        _WMPair('Deadline', 'A time when work is due', id: 'pro_2'),
        _WMPair('Stakeholder', 'Person with interest in a project', id: 'pro_3'),
        _WMPair('Proposal', 'A formal plan or offer', id: 'pro_4'),
        _WMPair('Agenda', 'List of meeting topics', id: 'pro_5'),
        _WMPair('Budget', 'Plan for spending money', id: 'pro_6'),
        _WMPair('Invoice', 'Bill requesting payment', id: 'pro_7'),
        _WMPair('Benchmark', 'Standard used for comparison', id: 'pro_8'),
        _WMPair('Deliverable', 'Work product you must submit', id: 'pro_9'),
        _WMPair('Strategy', 'Long-term plan to win', id: 'pro_10'),
        _WMPair('Compliance', 'Following rules and laws', id: 'pro_11'),
        _WMPair('Revenue', 'Money a business earns', id: 'pro_12'),
        _WMPair('Equity', 'Ownership share in a company', id: 'pro_13'),
        _WMPair('KPI', 'Key performance indicator', id: 'pro_14'),
        _WMPair('Briefing', 'Short update meeting', id: 'pro_15'),
        _WMPair('Pivot', 'Change direction of a plan', id: 'pro_16'),
        _WMPair('Leverage', 'Use an advantage wisely', id: 'pro_17'),
        _WMPair('Scope', 'Boundaries of a project', id: 'pro_18'),
        _WMPair('Milestone', 'Important progress checkpoint', id: 'pro_19'),
        _WMPair('Sync', 'Align people or systems', id: 'pro_20'),
        _WMPair('Bandwidth', 'Capacity to take more work', id: 'pro_21'),
        _WMPair('Onboarding', 'Welcoming a new teammate', id: 'pro_22'),
        _WMPair('Retainer', 'Ongoing paid client deal', id: 'pro_23'),
        _WMPair('Forecast', 'Prediction of future results', id: 'pro_24'),
        _WMPair('Audit', 'Official review of records', id: 'pro_25'),
      ];
    case WordTrack.school:
      return const [
        _WMPair('Essay', 'A short written composition', id: 'sch_1'),
        _WMPair('Homework', 'Schoolwork done at home', id: 'sch_2'),
        _WMPair('Lecture', 'Teacher talks to the class', id: 'sch_3'),
        _WMPair('Syllabus', 'Course outline for a class', id: 'sch_4'),
        _WMPair('Quiz', 'Short test of knowledge', id: 'sch_5'),
        _WMPair('Thesis', 'Main idea of a paper', id: 'sch_6'),
        _WMPair('Library', 'Place to borrow books', id: 'sch_7'),
        _WMPair('Semester', 'Half of a school year', id: 'sch_8'),
        _WMPair('Campus', 'School grounds and buildings', id: 'sch_9'),
        _WMPair('Tutor', 'Person who helps you learn', id: 'sch_10'),
        _WMPair('Diploma', 'Certificate of graduation', id: 'sch_11'),
        _WMPair('Scholarship', 'Money awarded for study', id: 'sch_12'),
        _WMPair('Curriculum', 'Subjects taught in school', id: 'sch_13'),
        _WMPair('Attendance', 'Being present in class', id: 'sch_14'),
        _WMPair('Experiment', 'Test done to learn facts', id: 'sch_15'),
        _WMPair('Equation', 'Math statement with equals', id: 'sch_16'),
        _WMPair('Paragraph', 'Group of related sentences', id: 'sch_17'),
        _WMPair('Vocabulary', 'Words you know and use', id: 'sch_18'),
        _WMPair('Grammar', 'Rules of a language', id: 'sch_19'),
        _WMPair('Revision', 'Reviewing to improve work', id: 'sch_20'),
        _WMPair('Presentation', 'Talk shown to an audience', id: 'sch_21'),
        _WMPair('Deadline', 'Last day to submit work', id: 'sch_22'),
        _WMPair('Principal', 'Head of a school', id: 'sch_23'),
        _WMPair('Laboratory', 'Room for science experiments', id: 'sch_24'),
        _WMPair('Transcript', 'Record of your grades', id: 'sch_25'),
      ];
    case WordTrack.work:
      return const [
        _WMPair('Shift', 'Scheduled period of work', id: 'wrk_1'),
        _WMPair('Colleague', 'Person you work with', id: 'wrk_2'),
        _WMPair('Overtime', 'Extra hours beyond schedule', id: 'wrk_3'),
        _WMPair('Resume', 'Document of your job history', id: 'wrk_4'),
        _WMPair('Interview', 'Meeting to get hired', id: 'wrk_5'),
        _WMPair('Salary', 'Regular pay for a job', id: 'wrk_6'),
        _WMPair('Promotion', 'Move to a higher position', id: 'wrk_7'),
        _WMPair('Deadline', 'Time when a task is due', id: 'wrk_8'),
        _WMPair('Client', 'Customer who pays for service', id: 'wrk_9'),
        _WMPair('Teamwork', 'Working well with others', id: 'wrk_10'),
        _WMPair('Remote', 'Working from another place', id: 'wrk_11'),
        _WMPair('Internship', 'Temporary training job', id: 'wrk_12'),
        _WMPair('Supervisor', 'Person who manages workers', id: 'wrk_13'),
        _WMPair('Payroll', 'System that pays employees', id: 'wrk_14'),
        _WMPair('Contract', 'Written work agreement', id: 'wrk_15'),
        _WMPair('Feedback', 'Comments to improve work', id: 'wrk_16'),
        _WMPair('Workflow', 'Steps to finish a task', id: 'wrk_17'),
        _WMPair('Meeting', 'People gather to discuss', id: 'wrk_18'),
        _WMPair('Target', 'Goal you aim to hit', id: 'wrk_19'),
        _WMPair('Training', 'Learning skills for a job', id: 'wrk_20'),
        _WMPair('Benefit', 'Extra perk besides pay', id: 'wrk_21'),
        _WMPair('Resignation', 'Leaving a job officially', id: 'wrk_22'),
        _WMPair('Inventory', 'Stock of goods on hand', id: 'wrk_23'),
        _WMPair('Customer', 'Person who buys something', id: 'wrk_24'),
        _WMPair('Schedule', 'Plan of times and tasks', id: 'wrk_25'),
      ];
    case WordTrack.street:
      return const [
        _WMPair('Hang out', 'Spend time casually', id: 'str_1'),
        _WMPair('Chill', 'Relax and take it easy', id: 'str_2'),
        _WMPair('Vibe', 'Mood or feeling of a place', id: 'str_3'),
        _WMPair('Hype', 'Excitement around something', id: 'str_4'),
        _WMPair('Ghost', 'Suddenly stop answering someone', id: 'str_5'),
        _WMPair('Flex', 'Show off on purpose', id: 'str_6'),
        _WMPair('Low-key', 'Quietly / not loudly', id: 'str_7'),
        _WMPair('High-key', 'Openly / obviously', id: 'str_8'),
        _WMPair('Spill', 'Tell the secret or story', id: 'str_9'),
        _WMPair('Cap', 'A lie / not true', id: 'str_10'),
        _WMPair('No cap', 'Being honest / no lie', id: 'str_11'),
        _WMPair('Bet', 'Okay / agree / sure', id: 'str_12'),
        _WMPair('Slay', 'Do something impressively', id: 'str_13'),
        _WMPair('Fire', 'Really good / exciting', id: 'str_14'),
        _WMPair('Sus', 'Suspicious or shady', id: 'str_15'),
        _WMPair('GOAT', 'Greatest of all time', id: 'str_16'),
        _WMPair('Bounce', 'Leave a place', id: 'str_17'),
        _WMPair('Crash', 'Sleep somewhere temporarily', id: 'str_18'),
        _WMPair('Snack', 'Small quick food', id: 'str_19'),
        _WMPair('Lit', 'Fun and energetic', id: 'str_20'),
        _WMPair('Extra', 'Over the top', id: 'str_21'),
        _WMPair('Mood', 'Relatable feeling right now', id: 'str_22'),
        _WMPair('Ship', 'Support two people as a couple', id: 'str_23'),
        _WMPair('Tea', 'Interesting gossip', id: 'str_24'),
        _WMPair('Woke', 'Aware of social issues', id: 'str_25'),
      ];
    case WordTrack.kiswahili:
      final out = <_WMPair>[];
      var i = 0;
      for (final level in kSwahiliLevels) {
        for (final day in level.days) {
          for (final w in day.words) {
            final sw = w.swahili.trim();
            final en = w.english.trim();
            if (sw.isEmpty || en.isEmpty || en.length > 42) continue;
            out.add(_WMPair(sw, en, id: 'ksw_${i++}'));
          }
        }
      }
      return out;
  }
}

/// Word Match — short tech-games entry with saved learning tracks.
class NgmyVaultWordMatchScreen extends StatefulWidget {
  const NgmyVaultWordMatchScreen({super.key});

  @override
  State<NgmyVaultWordMatchScreen> createState() => _NgmyVaultWordMatchScreenState();
}

class _NgmyVaultWordMatchScreenState extends State<NgmyVaultWordMatchScreen> {
  WordTrack? _track;
  bool _loading = true;
  int _progress = 0;
  int _lastDelta = 0;
  static const _goal = 12;

  @override
  void initState() {
    super.initState();
    unawaited(_boot());
  }

  Future<void> _boot() async {
    final active = await WordMatchSessionStore.activeTrack();
    final prog = await WordMatchSessionStore.progress();
    if (!mounted) return;
    setState(() {
      _track = active;
      _progress = prog;
      _loading = false;
    });
  }

  Future<void> _choose(WordTrack track) async {
    await WordMatchSessionStore.setActive(track);
    await WordMatchSessionStore.clearRetry();
    if (!mounted) return;
    setState(() {
      _track = track;
      _progress = 0;
    });
  }

  Future<void> _onRoundDone({required bool won, required int coinsDelta}) async {
    _lastDelta += coinsDelta;
    if (won) {
      final next = (_progress + 1).clamp(0, _goal);
      await WordMatchSessionStore.setProgress(next);
      if (next >= _goal) {
        await WordMatchSessionStore.clearActive();
        await WordMatchSessionStore.clearRetry();
        if (!mounted) return;
        setState(() {
          _track = null;
          _progress = 0;
        });
        return;
      }
      if (!mounted) return;
      setState(() => _progress = next);
    }
  }

  void _exit() {
    Navigator.pop(context, VaultGameResult(coinsEarned: _lastDelta, score: _lastDelta.abs()));
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(backgroundColor: Color(0xFF030712), body: Center(child: CircularProgressIndicator(color: Color(0xFFA78BFA))));
    }
    if (_track == null) {
      return _TrackPicker(onPick: _choose, onClose: _exit);
    }
    return _WordMatchPlay(
      track: _track!,
      progress: _progress,
      goal: _goal,
      onRoundDone: _onRoundDone,
      onExit: _exit,
      onSwitchTrack: _track == WordTrack.kiswahili ? null : _switchTrack,
    );
  }

  Future<void> _switchTrack() async {
    await WordMatchSessionStore.clearActive();
    await WordMatchSessionStore.clearRetry();
    if (!mounted) return;
    setState(() {
      _track = null;
      _progress = 0;
    });
  }
}

class _TrackPicker extends StatelessWidget {
  const _TrackPicker({required this.onPick, required this.onClose});
  final Future<void> Function(WordTrack) onPick;
  final VoidCallback onClose;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 14, 0),
              child: Row(
                children: [
                  IconButton(onPressed: onClose, icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
                  const Expanded(
                    child: Text('WORD MATCH', style: TextStyle(color: Color(0xFFA78BFA), fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 14)),
                  ),
                ],
              ),
            ),
            const Padding(
              padding: EdgeInsets.fromLTRB(18, 10, 18, 6),
              child: Text('What do you want to learn?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
            ),
            const Padding(
              padding: EdgeInsets.fromLTRB(18, 0, 18, 12),
              child: Text('Pick a path. English tracks can switch later with the corner icon — Kiswahili stays locked until finished.', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w600, fontSize: 13)),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(14, 0, 14, 18),
                children: WordTrack.values.map((t) {
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Material(
                      color: Colors.transparent,
                      child: InkWell(
                        onTap: () => onPick(t),
                        borderRadius: BorderRadius.circular(16),
                        child: Ink(
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(16),
                            gradient: LinearGradient(colors: [t.colors.first.withValues(alpha: 0.28), const Color(0xFF0D1422)]),
                            border: Border.all(color: t.colors.first.withValues(alpha: 0.45)),
                          ),
                          child: Row(
                            children: [
                              Container(
                                width: 46,
                                height: 46,
                                decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: t.colors)),
                                child: Icon(t.icon, color: Colors.black87, size: 22),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(t.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                                    const SizedBox(height: 3),
                                    Text(t.blurb, style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.3)),
                                  ],
                                ),
                              ),
                              const Icon(Icons.arrow_forward_ios_rounded, color: Colors.white38, size: 14),
                            ],
                          ),
                        ),
                      ),
                    ),
                  );
                }).toList(),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _WordMatchPlay extends StatefulWidget {
  const _WordMatchPlay({
    required this.track,
    required this.progress,
    required this.goal,
    required this.onRoundDone,
    required this.onExit,
    this.onSwitchTrack,
  });

  final WordTrack track;
  final int progress;
  final int goal;
  final Future<void> Function({required bool won, required int coinsDelta}) onRoundDone;
  final VoidCallback onExit;
  final VoidCallback? onSwitchTrack;

  @override
  State<_WordMatchPlay> createState() => _WordMatchPlayState();
}

class _WordMatchPlayState extends State<_WordMatchPlay> with TickerProviderStateMixin {
  static const _roundLen = 8;
  static const _winCoins = 5;
  static const _loseCoins = 3;
  static const _clearBonus = 12;
  static const _failPenalty = 8;

  late final AnimationController _pulse;
  late final AnimationController _scan;
  late final AnimationController _orbit;
  final _rng = math.Random();
  List<_WMPair> _round = [];
  int _qi = 0;
  int _score = 0;
  int _lives = 3;
  int _sessionDelta = 0;
  bool _over = false;
  bool _won = false;
  List<String> _options = [];
  int? _picked;
  int? _correctIdx;
  Duration _left = const Duration(seconds: 45);
  Timer? _timer;

  List<Color> get colors => widget.track.colors;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
    _scan = AnimationController(vsync: this, duration: const Duration(milliseconds: 3400))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(milliseconds: 9000))..repeat();
    unawaited(_bootRound());
  }

  @override
  void dispose() {
    _timer?.cancel();
    _pulse.dispose();
    _scan.dispose();
    _orbit.dispose();
    super.dispose();
  }

  Future<void> _bootRound() async {
    final retry = await WordMatchSessionStore.retrySet();
    if (retry != null && retry.isNotEmpty) {
      _round = retry;
    } else {
      _round = await _buildFreshRound();
      await WordMatchSessionStore.saveRetry(_round);
    }
    if (!mounted) return;
    _startClock();
    _rollOptions();
    setState(() {});
  }

  Future<List<_WMPair>> _buildFreshRound() async {
    final bank = _bankFor(widget.track);
    final seen = await WordMatchSessionStore.seenIds(widget.track);
    var pool = bank.where((p) => !seen.contains(p.id)).toList();
    if (pool.length < _roundLen) {
      // Reset seen when nearly exhausted so learning can continue fresh.
      pool = List<_WMPair>.from(bank);
      await WordMatchSessionStore.clearSeen(widget.track);
    }
    pool.shuffle(_rng);
    return pool.take(_roundLen).toList();
  }

  void _startClock() {
    _timer?.cancel();
    _left = const Duration(seconds: 45);
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) unawaited(_finish(won: false));
    });
  }

  _WMPair get _current => _round[_qi.clamp(0, _round.length - 1)];

  void _rollOptions() {
    if (_round.isEmpty) return;
    final correct = _current.answer;
    final bank = _bankFor(widget.track);
    final distractors = <String>{};
    var guard = 0;
    while (distractors.length < 3 && guard < 80) {
      guard++;
      final w = bank[_rng.nextInt(bank.length)].answer;
      if (w != correct) distractors.add(w);
    }
    final opts = [correct, ...distractors]..shuffle(_rng);
    setState(() {
      _options = opts;
      _picked = null;
      _correctIdx = opts.indexOf(correct);
    });
  }

  Future<void> _pick(int i) async {
    if (_over || _picked != null || _round.isEmpty) return;
    setState(() => _picked = i);
    final right = i == _correctIdx;
    if (right) {
      HapticFeedback.lightImpact();
      setState(() {
        _score += 10;
        _sessionDelta += _winCoins;
      });
      await VaultProgressStore.addWalletCoins(_winCoins);
    } else {
      HapticFeedback.heavyImpact();
      setState(() {
        _lives -= 1;
        _sessionDelta -= _loseCoins;
      });
      await VaultProgressStore.spendWalletCoins(_loseCoins);
    }
    await Future<void>.delayed(const Duration(milliseconds: 420));
    if (!mounted || _over) return;
    if (!right && _lives <= 0) {
      await _finish(won: false);
      return;
    }
    if (_qi >= _round.length - 1) {
      await _finish(won: true);
      return;
    }
    setState(() => _qi += 1);
    _rollOptions();
  }

  Future<void> _finish({required bool won}) async {
    if (_over) return;
    _timer?.cancel();
    setState(() {
      _over = true;
      _won = won;
    });
    if (won) {
      await VaultProgressStore.addWalletCoins(_clearBonus);
      _sessionDelta += _clearBonus;
      await WordMatchSessionStore.markSeen(widget.track, _round.map((e) => e.id));
      await WordMatchSessionStore.clearRetry();
      await VaultProgressStore.saveRun(gameId: 'word_match', level: ((widget.progress + 1) / widget.goal * 10).ceil().clamp(1, 10), score: _score, coinsEarned: 0);
    } else {
      await VaultProgressStore.spendWalletCoins(_failPenalty);
      _sessionDelta -= _failPenalty;
      // Keep retry set so failed questions stay the same.
    }
    await widget.onRoundDone(won: won, coinsDelta: _sessionDelta);
    if (mounted) setState(() {});
  }

  Future<void> _again() async {
    setState(() {
      _qi = 0;
      _score = 0;
      _lives = 3;
      _sessionDelta = 0;
      _over = false;
      _won = false;
    });
    await _bootRound();
  }

  @override
  Widget build(BuildContext context) {
    final promptLabel = widget.track == WordTrack.kiswahili ? 'What does this mean?' : 'Pick the best meaning';
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      body: Stack(
        children: [
          AnimatedBuilder(
            animation: Listenable.merge([_pulse, _scan, _orbit]),
            builder: (context, _) {
              final pulse = Curves.easeInOut.transform(_pulse.value);
              return CustomPaint(
                painter: _WordMatchHudPainter(colors: colors, pulse: pulse, scan: _scan.value, orbit: _orbit.value),
                child: const SizedBox.expand(),
              );
            },
          ),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 4, 14, 0),
                  child: Row(
                    children: [
                      IconButton(onPressed: widget.onExit, icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
                      Expanded(
                        child: Text('WORD MATCH · ${widget.track.title.toUpperCase()}', style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 0.8, fontSize: 11)),
                      ),
                      _pill(Icons.monetization_on_rounded, _sessionDelta >= 0 ? '+$_sessionDelta' : '$_sessionDelta'),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                  child: Row(
                    children: [
                      _pill(Icons.flag_rounded, '${widget.progress}/${widget.goal}'),
                      const SizedBox(width: 8),
                      _pill(Icons.favorite_rounded, '$_lives'),
                      const Spacer(),
                      _pill(Icons.timer_rounded, '${_left.inSeconds}s'),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(99),
                    child: LinearProgressIndicator(
                      value: _round.isEmpty ? 0 : (_qi + 1) / _round.length,
                      minHeight: 7,
                      backgroundColor: Colors.white12,
                      color: colors.first,
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(18, 18, 18, 8),
                    child: Column(
                      children: [
                        Text(promptLabel, style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w700, fontSize: 12)),
                        const SizedBox(height: 12),
                        if (_round.isNotEmpty)
                          AnimatedBuilder(
                            animation: Listenable.merge([_pulse, _scan, _orbit]),
                            builder: (context, _) {
                              final pulse = Curves.easeInOut.transform(_pulse.value);
                              return TweenAnimationBuilder<double>(
                                key: ValueKey(_qi),
                                tween: Tween(begin: 0.92, end: 1),
                                duration: const Duration(milliseconds: 340),
                                curve: Curves.easeOutBack,
                                builder: (context, s, child) => Transform.scale(scale: s, child: child),
                                child: Stack(
                                  children: [
                                    Container(
                                      width: double.infinity,
                                      padding: const EdgeInsets.symmetric(vertical: 28, horizontal: 16),
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(18),
                                        gradient: LinearGradient(
                                          begin: Alignment.topLeft,
                                          end: Alignment.bottomRight,
                                          colors: [
                                            colors.first.withValues(alpha: 0.28 + pulse * 0.1),
                                            const Color(0xFF0B1424),
                                            colors.last.withValues(alpha: 0.18),
                                          ],
                                        ),
                                        border: Border.all(color: colors.first.withValues(alpha: 0.45 + pulse * 0.25), width: 1.4),
                                        boxShadow: [
                                          BoxShadow(color: colors.first.withValues(alpha: 0.18 + pulse * 0.12), blurRadius: 22, offset: const Offset(0, 8)),
                                        ],
                                      ),
                                      child: Text(
                                        _current.prompt,
                                        textAlign: TextAlign.center,
                                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, height: 1.25, decoration: TextDecoration.none),
                                      ),
                                    ),
                                    Positioned(
                                      top: 6,
                                      right: 6,
                                      child: CustomPaint(
                                        size: const Size(28, 28),
                                        painter: _MiniOrbitPainter(color: colors.last, orbit: _orbit.value),
                                      ),
                                    ),
                                    if (widget.onSwitchTrack != null)
                                      Positioned(
                                        top: 4,
                                        left: 4,
                                        child: Material(
                                          color: Colors.transparent,
                                          child: InkWell(
                                            onTap: widget.onSwitchTrack,
                                            borderRadius: BorderRadius.circular(99),
                                            child: Ink(
                                              width: 28,
                                              height: 28,
                                              decoration: BoxDecoration(
                                                shape: BoxShape.circle,
                                                color: Colors.black.withValues(alpha: 0.35),
                                                border: Border.all(color: colors.first.withValues(alpha: 0.55)),
                                              ),
                                              child: Icon(Icons.grid_view_rounded, size: 14, color: colors.first.withValues(alpha: 0.95)),
                                            ),
                                          ),
                                        ),
                                      ),
                                  ],
                                ),
                              );
                            },
                          ),
                        const SizedBox(height: 18),
                        ..._options.asMap().entries.map((e) => Padding(padding: const EdgeInsets.only(bottom: 10), child: _option(e.key, e.value))),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          if (_over)
            _CleanResultSheet(
              won: _won,
              score: _score,
              coinsDelta: _sessionDelta,
              colors: colors,
              onAgain: _again,
              onExit: widget.onExit,
              title: _won ? 'Round cleared' : 'Round over',
              subtitle: _won ? 'New questions next time.' : 'Same questions until you clear them.',
            ),
        ],
      ),
    );
  }

  Widget _option(int i, String label) {
    Color bg = Colors.white.withValues(alpha: 0.06);
    Color border = Colors.white24;
    if (_picked != null) {
      if (i == _correctIdx) {
        bg = const Color(0xFF34D399).withValues(alpha: 0.22);
        border = const Color(0xFF34D399);
      } else if (i == _picked) {
        bg = const Color(0xFFEF4444).withValues(alpha: 0.22);
        border = const Color(0xFFEF4444);
      }
    }
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => _pick(i),
        borderRadius: BorderRadius.circular(14),
        child: Ink(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 16),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), color: bg, border: Border.all(color: border)),
          child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15, decoration: TextDecoration.none)),
        ),
      ),
    );
  }

  Widget _pill(IconData icon, String t) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(999)),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 13, color: colors.first),
          const SizedBox(width: 4),
          Text(t, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12, decoration: TextDecoration.none)),
        ],
      ),
    );
  }
}

class _CleanResultSheet extends StatelessWidget {
  const _CleanResultSheet({
    required this.won,
    required this.score,
    required this.coinsDelta,
    required this.colors,
    required this.onAgain,
    required this.onExit,
    required this.title,
    required this.subtitle,
  });

  final bool won;
  final int score;
  final int coinsDelta;
  final List<Color> colors;
  final VoidCallback onAgain;
  final VoidCallback onExit;
  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.black.withValues(alpha: 0.72),
      child: Center(
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 28),
          padding: const EdgeInsets.fromLTRB(20, 22, 20, 16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: const Color(0xFF111827),
            border: Border.all(color: colors.first.withValues(alpha: 0.45)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(won ? Icons.check_circle_rounded : Icons.refresh_rounded, color: colors.first, size: 42),
              const SizedBox(height: 10),
              Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, decoration: TextDecoration.none)),
              const SizedBox(height: 6),
              Text(subtitle, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white60, fontWeight: FontWeight.w600, fontSize: 13, decoration: TextDecoration.none)),
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  _stat('Score', '$score'),
                  const SizedBox(width: 18),
                  _stat('Coins', coinsDelta >= 0 ? '+$coinsDelta' : '$coinsDelta'),
                ],
              ),
              const SizedBox(height: 18),
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: onAgain,
                  style: FilledButton.styleFrom(
                    backgroundColor: colors.first,
                    foregroundColor: Colors.black,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: Text(won ? 'NEXT ROUND' : 'TRY SAME ROUND', style: const TextStyle(fontWeight: FontWeight.w900, decoration: TextDecoration.none)),
                ),
              ),
              TextButton(
                onPressed: onExit,
                child: const Text('Back to arcade', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w700, decoration: TextDecoration.none)),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _stat(String label, String value) {
    return Column(
      children: [
        Text(label, style: const TextStyle(color: Colors.white38, fontWeight: FontWeight.w700, fontSize: 11, decoration: TextDecoration.none)),
        const SizedBox(height: 4),
        Text(value, style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 18, decoration: TextDecoration.none)),
      ],
    );
  }
}

class _WordMatchHudPainter extends CustomPainter {
  _WordMatchHudPainter({required this.colors, required this.pulse, required this.scan, required this.orbit});
  final List<Color> colors;
  final double pulse;
  final double scan;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final bg = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [const Color(0xFF061018), colors.first.withValues(alpha: 0.1), const Color(0xFF030712)],
      ).createShader(Offset.zero & size);
    canvas.drawRect(Offset.zero & size, bg);

    final grid = Paint()..color = colors.first.withValues(alpha: 0.06 + pulse * 0.04)..strokeWidth = 1;
    for (var x = 0.0; x < size.width; x += 26) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), grid);
    }
    for (var y = 0.0; y < size.height; y += 26) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), grid);
    }

    final sy = size.height * scan;
    canvas.drawRect(
      Rect.fromLTWH(0, sy - 18, size.width, 36),
      Paint()
        ..shader = LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Colors.transparent, colors.first.withValues(alpha: 0.14), Colors.transparent],
        ).createShader(Rect.fromLTWH(0, sy - 18, size.width, 36)),
    );

    final cx = size.width - 26.0;
    final cy = 54.0;
    for (var i = 0; i < 6; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 3);
      canvas.drawCircle(Offset(cx + math.cos(a) * 9, cy + math.sin(a) * 9), 1.5, Paint()..color = colors.last.withValues(alpha: 0.75));
    }
  }

  @override
  bool shouldRepaint(covariant _WordMatchHudPainter old) => true;
}

class _MiniOrbitPainter extends CustomPainter {
  _MiniOrbitPainter({required this.color, required this.orbit});
  final Color color;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2);
    canvas.drawCircle(c, 8, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = color.withValues(alpha: 0.45));
    for (var i = 0; i < 4; i++) {
      final a = orbit * math.pi * 2 + i * (math.pi / 2);
      canvas.drawCircle(Offset(c.dx + math.cos(a) * 8, c.dy + math.sin(a) * 8), 1.4, Paint()..color = color);
    }
  }

  @override
  bool shouldRepaint(covariant _MiniOrbitPainter old) => old.orbit != orbit;
}
