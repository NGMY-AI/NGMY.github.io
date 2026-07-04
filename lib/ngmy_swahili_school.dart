import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_swahili_curriculum.dart';
import 'ngmy_swahili_word_enrichment.dart';

void showNgmySwahiliSchool({required BuildContext context, String? userEmail}) {
  Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmySwahiliSchoolPage(userEmail: userEmail),
    ),
  );
}

class NgmySwahiliProgress {
  NgmySwahiliProgress({
    this.unlockedLevelIndex = 0,
    this.completedDays = const {},
    this.bestScores = const {},
    this.passedLevels = const {},
  });

  int unlockedLevelIndex;
  Set<String> completedDays;
  Map<String, int> bestScores;
  Set<String> passedLevels;

  bool isDayDone(int levelIndex, int dayIndex) => completedDays.contains('${levelIndex}_$dayIndex');

  void markDayDone(int levelIndex, int dayIndex) => completedDays.add('${levelIndex}_$dayIndex');

  bool allDaysDone(SwahiliLevel level, int levelIndex) {
    for (var d = 0; d < level.days.length; d++) {
      if (!isDayDone(levelIndex, d)) return false;
    }
    return true;
  }

  bool isLevelPassed(String levelId) => passedLevels.contains(levelId);

  Map<String, dynamic> toJson() => {
        'unlockedLevelIndex': unlockedLevelIndex,
        'completedDays': completedDays.toList(),
        'bestScores': bestScores,
        'passedLevels': passedLevels.toList(),
      };

  factory NgmySwahiliProgress.fromJson(Map<String, dynamic> json) {
    return NgmySwahiliProgress(
      unlockedLevelIndex: (json['unlockedLevelIndex'] as num?)?.toInt() ?? 0,
      completedDays: (json['completedDays'] as List<dynamic>? ?? []).map((e) => e.toString()).toSet(),
      bestScores: (json['bestScores'] as Map<String, dynamic>? ?? {})
          .map((k, v) => MapEntry(k.toString(), (v as num).toInt())),
      passedLevels: (json['passedLevels'] as List<dynamic>? ?? []).map((e) => e.toString()).toSet(),
    );
  }
}

Future<NgmySwahiliProgress> loadSwahiliProgress(String? email) async {
  final prefs = await SharedPreferences.getInstance();
  final key = 'ngmy_swahili_school_${(email ?? '').trim().isEmpty ? 'guest' : email!.trim().toLowerCase()}';
  final raw = prefs.getString(key);
  if (raw == null || raw.isEmpty) return NgmySwahiliProgress();
  try {
    return NgmySwahiliProgress.fromJson(jsonDecode(raw) as Map<String, dynamic>);
  } catch (_) {
    return NgmySwahiliProgress();
  }
}

Future<void> saveSwahiliProgress(String? email, NgmySwahiliProgress progress) async {
  final prefs = await SharedPreferences.getInstance();
  final key = 'ngmy_swahili_school_${(email ?? '').trim().isEmpty ? 'guest' : email!.trim().toLowerCase()}';
  await prefs.setString(key, jsonEncode(progress.toJson()));
}

class NgmySwahiliSchoolPage extends StatefulWidget {
  const NgmySwahiliSchoolPage({super.key, this.userEmail});

  final String? userEmail;

  @override
  State<NgmySwahiliSchoolPage> createState() => _NgmySwahiliSchoolPageState();
}

class _NgmySwahiliSchoolPageState extends State<NgmySwahiliSchoolPage> {
  NgmySwahiliProgress _progress = NgmySwahiliProgress();
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final p = await loadSwahiliProgress(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _progress = p;
      _loading = false;
    });
  }

  Future<void> _save() => saveSwahiliProgress(widget.userEmail, _progress);

  void _openDay(int levelIndex, int dayIndex) {
    final level = kSwahiliLevels[levelIndex];
    final day = level.days[dayIndex];
    Navigator.of(context).push<void>(
      MaterialPageRoute<void>(
        builder: (_) => _SwahiliLessonPage(
          level: level,
          levelIndex: levelIndex,
          dayIndex: dayIndex,
          day: day,
          onComplete: () async {
            setState(() => _progress.markDayDone(levelIndex, dayIndex));
            await _save();
          },
        ),
      ),
    ).then((_) => setState(() {}));
  }

  void _openTest(int levelIndex) {
    final level = kSwahiliLevels[levelIndex];
    if (!_progress.allDaysDone(level, levelIndex)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Finish all 5 days before taking the test.')),
      );
      return;
    }
    Navigator.of(context).push<void>(
      MaterialPageRoute<void>(
        builder: (_) => _SwahiliTestPage(
          level: level,
          levelIndex: levelIndex,
          onFinished: (score, passed) async {
            final id = level.id;
            final prev = _progress.bestScores[id] ?? 0;
            if (score > prev) _progress.bestScores[id] = score;
            if (passed) {
              _progress.passedLevels.add(id);
              if (levelIndex + 1 < kSwahiliLevels.length && _progress.unlockedLevelIndex < levelIndex + 1) {
                _progress.unlockedLevelIndex = levelIndex + 1;
              }
            } else {
              _progress.completedDays.removeWhere((k) => k.startsWith('${levelIndex}_'));
            }
            await _save();
            if (!mounted) return;
            setState(() {});
          },
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0F1419) : const Color(0xFFFAF7F2);

    return Scaffold(
      backgroundColor: bg,
      body: _loading
          ? const Center(child: CircularProgressIndicator(color: Color(0xFFD97706)))
          : CustomScrollView(
              slivers: [
                SliverToBoxAdapter(
                  child: SafeArea(
                    bottom: false,
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                      child: Column(
                        children: [
                          Row(
                            children: [
                              IconButton(
                                onPressed: () => Navigator.pop(context),
                                icon: Icon(Icons.arrow_back_ios_new_rounded, size: 18, color: isDark ? Colors.white70 : const Color(0xFF475569)),
                              ),
                              const Spacer(),
                            ],
                          ),
                          _SchoolHomeHeader(isDark: isDark),
                        ],
                      ),
                    ),
                  ),
                ),
                SliverPadding(
                  padding: const EdgeInsets.fromLTRB(18, 20, 18, 32),
                  sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (context, i) {
                        final level = kSwahiliLevels[i];
                        final locked = i > _progress.unlockedLevelIndex;
                        final passed = _progress.isLevelPassed(level.id);
                        var doneCount = 0;
                        for (var d = 0; d < level.days.length; d++) {
                          if (_progress.isDayDone(i, d)) doneCount++;
                        }
                        final allDone = doneCount >= level.days.length;
                        return Padding(
                          padding: const EdgeInsets.only(bottom: 16),
                          child: _LevelCard(
                            level: level,
                            levelIndex: i,
                            locked: locked,
                            passed: passed,
                            daysDone: doneCount,
                            totalDays: level.days.length,
                            allDaysDone: allDone,
                            bestScore: _progress.bestScores[level.id],
                            onDayTap: locked ? null : (d) => _openDay(i, d),
                            onTestTap: locked || !allDone ? null : () => _openTest(i),
                            isDayDone: (d) => _progress.isDayDone(i, d),
                            isDark: isDark,
                          ),
                        );
                      },
                      childCount: kSwahiliLevels.length,
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}

class _SchoolHomeHeader extends StatelessWidget {
  const _SchoolHomeHeader({required this.isDark});

  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final card = isDark ? const Color(0xFF1A2030) : Colors.white;
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: const Color(0xFFD97706).withValues(alpha: 0.45)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: isDark ? 0.35 : 0.08),
            blurRadius: 24,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 68,
            height: 68,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18),
              gradient: const LinearGradient(
                colors: [Color(0xFF1E3A5F), Color(0xFF2D4A6F)],
              ),
              border: Border.all(color: const Color(0xFFD97706), width: 2),
            ),
            child: const Icon(Icons.person_rounded, color: Color(0xFFFDE68A), size: 38),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    color: const Color(0xFFD97706).withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: const Text(
                    'MWALIMU AMINA',
                    style: TextStyle(
                      color: Color(0xFFD97706),
                      fontSize: 10,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 0.8,
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Shule ya Kiswahili',
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w900,
                    color: isDark ? Colors.white : const Color(0xFF1E293B),
                    height: 1.1,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  'Jifunze hatua kwa hatua · Pita mtihani kwa 70% au zaidi',
                  style: TextStyle(
                    fontSize: 12,
                    height: 1.4,
                    color: isDark ? Colors.white60 : const Color(0xFF64748B),
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _LevelCard extends StatelessWidget {
  const _LevelCard({
    required this.level,
    required this.levelIndex,
    required this.locked,
    required this.passed,
    required this.daysDone,
    required this.totalDays,
    required this.allDaysDone,
    required this.isDayDone,
    required this.isDark,
    this.bestScore,
    this.onDayTap,
    this.onTestTap,
  });

  final SwahiliLevel level;
  final int levelIndex;
  final bool locked;
  final bool passed;
  final int daysDone;
  final int totalDays;
  final bool allDaysDone;
  final int? bestScore;
  final bool Function(int dayIndex) isDayDone;
  final void Function(int dayIndex)? onDayTap;
  final VoidCallback? onTestTap;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final card = isDark ? const Color(0xFF151D2B) : Colors.white;
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Opacity(
      opacity: locked ? 0.55 : 1,
      child: Container(
        decoration: BoxDecoration(
          color: card,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: level.color.withValues(alpha: 0.35)),
          boxShadow: [
            BoxShadow(
              color: level.color.withValues(alpha: isDark ? 0.15 : 0.1),
              blurRadius: 16,
              offset: const Offset(0, 6),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 12),
              decoration: BoxDecoration(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(21)),
                gradient: LinearGradient(
                  colors: [level.color, level.color.withValues(alpha: 0.75)],
                ),
              ),
              child: Row(
                children: [
                  Icon(level.icon, color: Colors.white, size: 26),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Step ${levelIndex + 1}: ${level.title}',
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: 16,
                          ),
                        ),
                        Text(
                          level.subtitle,
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 11),
                        ),
                      ],
                    ),
                  ),
                  if (locked)
                    Icon(Icons.lock_rounded, color: Colors.white.withValues(alpha: 0.7), size: 20)
                  else if (passed)
                    const Icon(Icons.verified_rounded, color: Colors.white, size: 22),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(8),
                          child: LinearProgressIndicator(
                            value: totalDays == 0 ? 0 : daysDone / totalDays,
                            minHeight: 8,
                            backgroundColor: level.color.withValues(alpha: 0.15),
                            color: level.color,
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Text('$daysDone/$totalDays days', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: muted)),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      for (var d = 0; d < totalDays; d++)
                        _DayChip(
                          day: d + 1,
                          done: isDayDone(d),
                          locked: locked,
                          color: level.color,
                          onTap: onDayTap == null ? null : () => onDayTap!(d),
                        ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  SizedBox(
                    width: double.infinity,
                    child: FilledButton.icon(
                      onPressed: onTestTap,
                      style: FilledButton.styleFrom(
                        backgroundColor: allDaysDone ? level.color : muted.withValues(alpha: 0.3),
                        disabledBackgroundColor: muted.withValues(alpha: 0.2),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      icon: Icon(allDaysDone ? Icons.quiz_rounded : Icons.lock_outline_rounded, size: 20),
                      label: Text(
                        passed
                            ? 'Retake test${bestScore != null ? ' · best $bestScore%' : ''}'
                            : allDaysDone
                                ? 'Take level test (70% to pass)'
                                : 'Complete 5 days to unlock test',
                        style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 13),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _DayChip extends StatelessWidget {
  const _DayChip({
    required this.day,
    required this.done,
    required this.locked,
    required this.color,
    this.onTap,
  });

  final int day;
  final bool done;
  final bool locked;
  final Color color;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: locked ? null : onTap,
        borderRadius: BorderRadius.circular(12),
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            color: done ? color.withValues(alpha: 0.18) : color.withValues(alpha: 0.08),
            border: Border.all(color: done ? color : color.withValues(alpha: 0.3)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(
                done ? Icons.check_circle_rounded : Icons.menu_book_rounded,
                size: 16,
                color: done ? color : color.withValues(alpha: 0.7),
              ),
              const SizedBox(width: 6),
              Text(
                'Day $day',
                style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: color.withValues(alpha: 0.95)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _SwahiliLessonPage extends StatefulWidget {
  const _SwahiliLessonPage({
    required this.level,
    required this.levelIndex,
    required this.dayIndex,
    required this.day,
    required this.onComplete,
  });

  final SwahiliLevel level;
  final int levelIndex;
  final int dayIndex;
  final SwahiliLessonDay day;
  final VoidCallback onComplete;

  @override
  State<_SwahiliLessonPage> createState() => _SwahiliLessonPageState();
}

class _SwahiliLessonPageState extends State<_SwahiliLessonPage> {
  bool _completed = false;
  final Map<String, int> _studySeconds = {};

  int get _studiedCount => widget.day.words.where((w) => _isStudied(w.swahili)).length;

  bool _isStudied(String key) => (_studySeconds[key] ?? 0) >= kSwahiliMinStudySeconds;

  bool get _allStudied => _studiedCount >= widget.day.words.length;

  Future<void> _openWord(SwahiliWord word) async {
    final key = word.swahili;
    final prior = _studySeconds[key] ?? 0;
    final added = await showModalBottomSheet<int>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _WordDetailSheet(
        rich: enrichSwahiliWord(word),
        isDark: Theme.of(ctx).brightness == Brightness.dark,
        priorSeconds: prior,
      ),
    );
    if (added != null && mounted) {
      setState(() => _studySeconds[key] = added);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0F1419) : const Color(0xFFFAF7F2);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: isDark ? const Color(0xFF1A2030) : Colors.white,
        foregroundColor: isDark ? Colors.white : const Color(0xFF1E293B),
        elevation: 0,
        title: Text(widget.day.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
        children: [
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1A2030) : Colors.white,
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFD97706).withValues(alpha: 0.35)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  widget.day.subtitle,
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w700,
                    color: isDark ? Colors.white70 : const Color(0xFF475569),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Bofya kila neno na soma angalau sekunde $kSwahiliMinStudySeconds. Usikome hadi uelewe vizuri.',
                  style: TextStyle(
                    fontSize: 12,
                    height: 1.45,
                    color: isDark ? Colors.white54 : const Color(0xFF64748B),
                  ),
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(6),
                        child: LinearProgressIndicator(
                          value: widget.day.words.isEmpty ? 0 : _studiedCount / widget.day.words.length,
                          minHeight: 8,
                          backgroundColor: const Color(0xFFD97706).withValues(alpha: 0.15),
                          color: const Color(0xFFD97706),
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Text(
                      '$_studiedCount/${widget.day.words.length}',
                      style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: isDark ? Colors.white70 : const Color(0xFF64748B)),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 14),
          ...widget.day.words.map(
            (w) => Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: _WordCard(
                word: w,
                color: widget.level.color,
                isDark: isDark,
                studied: _isStudied(w.swahili),
                studySeconds: _studySeconds[w.swahili] ?? 0,
                onTap: () => _openWord(w),
              ),
            ),
          ),
          const SizedBox(height: 8),
          FilledButton.icon(
            onPressed: (_completed || !_allStudied)
                ? null
                : () {
                    widget.onComplete();
                    setState(() => _completed = true);
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text(
                          widget.dayIndex < 4
                              ? 'Siku ${widget.dayIndex + 1} imekamilika! Rudi kesho kwa siku inayofuata.'
                              : 'Siku ${widget.dayIndex + 1} imekamilika! Unaweza kufanya mtihani sasa.',
                        ),
                        backgroundColor: const Color(0xFFD97706),
                      ),
                    );
                  },
            style: FilledButton.styleFrom(
              backgroundColor: const Color(0xFFD97706),
              disabledBackgroundColor: (isDark ? Colors.white : Colors.black).withValues(alpha: 0.12),
              minimumSize: const Size(double.infinity, 50),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
            icon: Icon(_completed ? Icons.check_rounded : Icons.done_all_rounded),
            label: Text(
              _completed
                  ? 'Siku imekamilika'
                  : _allStudied
                      ? 'Nimemaliza siku hii'
                      : 'Bofya maneno yote (sek $kSwahiliMinStudySeconds kila moja)',
              style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 13),
              textAlign: TextAlign.center,
            ),
          ),
        ],
      ),
    );
  }
}

class _WordCard extends StatelessWidget {
  const _WordCard({
    required this.word,
    required this.color,
    required this.isDark,
    required this.studied,
    required this.studySeconds,
    required this.onTap,
  });

  final SwahiliWord word;
  final Color color;
  final bool isDark;
  final bool studied;
  final int studySeconds;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final card = isDark ? const Color(0xFF1A2030) : Colors.white;
    final borderColor = studied ? const Color(0xFFD97706) : color.withValues(alpha: 0.25);
    return Material(
      color: card,
      borderRadius: BorderRadius.circular(16),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: borderColor, width: studied ? 1.8 : 1),
          ),
          child: Row(
            children: [
              Icon(
                studied ? Icons.check_circle_rounded : Icons.touch_app_rounded,
                size: 20,
                color: studied ? const Color(0xFFD97706) : color.withValues(alpha: 0.6),
              ),
              const SizedBox(width: 10),
              Expanded(
                flex: 5,
                child: Text(
                  word.swahili,
                  style: TextStyle(
                    fontWeight: FontWeight.w900,
                    fontSize: 16,
                    color: isDark ? Colors.white : const Color(0xFF0F172A),
                  ),
                ),
              ),
              Icon(Icons.arrow_forward_rounded, size: 18, color: color.withValues(alpha: 0.5)),
              Expanded(
                flex: 5,
                child: Text(
                  word.english,
                  textAlign: TextAlign.right,
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 14,
                    color: isDark ? Colors.white70 : const Color(0xFF64748B),
                  ),
                ),
              ),
              if (!studied && studySeconds > 0) ...[
                const SizedBox(width: 6),
                Text(
                  '${kSwahiliMinStudySeconds - studySeconds}s',
                  style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: color),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

class _WordDetailSheet extends StatefulWidget {
  const _WordDetailSheet({
    required this.rich,
    required this.isDark,
    required this.priorSeconds,
  });

  final SwahiliRichWord rich;
  final bool isDark;
  final int priorSeconds;

  @override
  State<_WordDetailSheet> createState() => _WordDetailSheetState();
}

class _WordDetailSheetState extends State<_WordDetailSheet> {
  Timer? _timer;
  int _sessionSeconds = 0;

  int get _totalSeconds => widget.priorSeconds + _sessionSeconds;

  bool get _studied => _totalSeconds >= kSwahiliMinStudySeconds;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() => _sessionSeconds++);
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final word = widget.rich.base;
    final card = widget.isDark ? const Color(0xFF1A2030) : Colors.white;
    final remaining = (kSwahiliMinStudySeconds - _totalSeconds).clamp(0, kSwahiliMinStudySeconds);

    return SafeArea(
      child: Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
        child: DraggableScrollableSheet(
          initialChildSize: 0.88,
          minChildSize: 0.45,
          maxChildSize: 0.95,
          expand: false,
          builder: (_, scroll) => Padding(
            padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
            child: Container(
              decoration: BoxDecoration(
                color: card,
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: const Color(0xFFD97706).withValues(alpha: 0.35)),
              ),
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 10, 16, 0),
                    child: Column(
                      children: [
                        Container(
                          width: 36,
                          height: 4,
                          decoration: BoxDecoration(
                            color: Colors.grey.withValues(alpha: 0.35),
                            borderRadius: BorderRadius.circular(4),
                          ),
                        ),
                        const SizedBox(height: 10),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                          decoration: BoxDecoration(
                            color: _studied
                                ? const Color(0xFF059669).withValues(alpha: 0.15)
                                : const Color(0xFFD97706).withValues(alpha: 0.12),
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(
                              color: _studied ? const Color(0xFF059669) : const Color(0xFFD97706),
                            ),
                          ),
                          child: Row(
                            children: [
                              Icon(
                                _studied ? Icons.check_circle_rounded : Icons.timer_rounded,
                                size: 18,
                                color: _studied ? const Color(0xFF059669) : const Color(0xFFD97706),
                              ),
                              const SizedBox(width: 8),
                              Expanded(
                                child: Text(
                                  _studied
                                      ? 'Umekamilisha kusoma neno hili — vizuri!'
                                      : 'Soma angalau sekunde $remaining zaidi',
                                  style: TextStyle(
                                    fontSize: 12,
                                    fontWeight: FontWeight.w700,
                                    color: widget.isDark ? Colors.white70 : const Color(0xFF475569),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: ListView(
                      controller: scroll,
                      padding: const EdgeInsets.fromLTRB(20, 14, 20, 20),
                      children: [
                        Text(
                          word.swahili,
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.w900,
                            color: widget.isDark ? Colors.white : const Color(0xFF1E3A5F),
                          ),
                        ),
                        Text(
                          word.english,
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w700,
                            color: widget.isDark ? Colors.white60 : const Color(0xFF64748B),
                          ),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          'Tamkwa: ${word.pronunciation}',
                          style: TextStyle(
                            fontSize: 13,
                            fontStyle: FontStyle.italic,
                            color: widget.isDark ? Colors.white54 : const Color(0xFF94A3B8),
                          ),
                        ),
                        const SizedBox(height: 16),
                        _detailBlock('Maelezo rahisi', widget.rich.explanationSw),
                        const SizedBox(height: 12),
                        _detailBlock('Kidokezo cha sarufi', widget.rich.grammarSw),
                        const SizedBox(height: 16),
                        Text(
                          'Vidokezo vya kukusaidia',
                          style: TextStyle(
                            fontWeight: FontWeight.w800,
                            fontSize: 12,
                            color: widget.isDark ? Colors.white60 : const Color(0xFF64748B),
                          ),
                        ),
                        const SizedBox(height: 8),
                        ...widget.rich.tipsSw.map(
                          (t) => Padding(
                            padding: const EdgeInsets.only(bottom: 6),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text('• ', style: TextStyle(color: Color(0xFFD97706), fontWeight: FontWeight.w900)),
                                Expanded(child: Text(t, style: _bodyStyle)),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(height: 16),
                        Text(
                          'Mifano ya matumizi',
                          style: TextStyle(
                            fontWeight: FontWeight.w800,
                            fontSize: 12,
                            color: widget.isDark ? Colors.white60 : const Color(0xFF64748B),
                          ),
                        ),
                        const SizedBox(height: 10),
                        ...widget.rich.examples.map(
                          (ex) => Padding(
                            padding: const EdgeInsets.only(bottom: 12),
                            child: Container(
                              width: double.infinity,
                              padding: const EdgeInsets.all(14),
                              decoration: BoxDecoration(
                                color: widget.isDark ? const Color(0xFF0F1419) : const Color(0xFFFAF7F2),
                                borderRadius: BorderRadius.circular(14),
                                border: Border.all(color: const Color(0xFF1E3A5F).withValues(alpha: 0.15)),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(ex.swahili, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14, color: widget.isDark ? Colors.white : const Color(0xFF1E293B))),
                                  const SizedBox(height: 4),
                                  Text('Kiingereza: ${ex.english}', style: TextStyle(fontSize: 12, color: widget.isDark ? Colors.white54 : const Color(0xFF64748B))),
                                  if (ex.partNotes.isNotEmpty) ...[
                                    const SizedBox(height: 8),
                                    ...ex.partNotes.map(
                                      (n) => Padding(
                                        padding: const EdgeInsets.only(bottom: 2),
                                        child: Text('↳ $n', style: TextStyle(fontSize: 11, height: 1.35, color: widget.isDark ? Colors.white54 : const Color(0xFF94A3B8))),
                                      ),
                                    ),
                                  ],
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
                    child: FilledButton(
                      onPressed: () => Navigator.pop(context, _totalSeconds),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF1E3A5F),
                        minimumSize: const Size(double.infinity, 48),
                      ),
                      child: Text(
                        _studied ? 'Nimeelewa — funga' : 'Funga (endelea kusoma)',
                        style: const TextStyle(fontWeight: FontWeight.w800),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  TextStyle get _bodyStyle => TextStyle(
        fontSize: 14,
        height: 1.5,
        color: widget.isDark ? Colors.white.withValues(alpha: 0.9) : const Color(0xFF334155),
      );

  Widget _detailBlock(String title, String body) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: widget.isDark ? const Color(0xFF0F1419) : const Color(0xFFFAF7F2),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFD97706).withValues(alpha: 0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 11, color: Color(0xFFD97706))),
          const SizedBox(height: 6),
          Text(body, style: _bodyStyle),
        ],
      ),
    );
  }
}

class _SwahiliTestPage extends StatefulWidget {
  const _SwahiliTestPage({
    required this.level,
    required this.levelIndex,
    required this.onFinished,
  });

  final SwahiliLevel level;
  final int levelIndex;
  final void Function(int scorePercent, bool passed) onFinished;

  @override
  State<_SwahiliTestPage> createState() => _SwahiliTestPageState();
}

class _SwahiliTestPageState extends State<_SwahiliTestPage> {
  late final List<SwahiliTestQuestion> _questions;
  int _index = 0;
  int _correct = 0;
  int? _selected;
  bool _revealed = false;
  bool _done = false;

  @override
  void initState() {
    super.initState();
    _questions = buildSwahiliTestForLevel(widget.level);
  }

  void _pick(int i) {
    if (_revealed || _done) return;
    setState(() {
      _selected = i;
      _revealed = true;
      if (i == _questions[_index].correctIndex) _correct++;
    });
  }

  void _next() {
    if (_index + 1 >= _questions.length) {
      final pct = (_correct * 100 / _questions.length).round();
      final passed = pct >= kSwahiliPassPercent;
      setState(() => _done = true);
      widget.onFinished(pct, passed);
      return;
    }
    setState(() {
      _index++;
      _selected = null;
      _revealed = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (_questions.isEmpty) {
      return Scaffold(
        appBar: AppBar(title: const Text('Test')),
        body: const Center(child: Text('No questions available.')),
      );
    }

    if (_done) {
      final pct = (_correct * 100 / _questions.length).round();
      final passed = pct >= kSwahiliPassPercent;
      return Scaffold(
        backgroundColor: isDark ? const Color(0xFF0B1018) : const Color(0xFFF0FDF4),
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  passed ? Icons.emoji_events_rounded : Icons.replay_rounded,
                  size: 72,
                  color: passed ? const Color(0xFFF59E0B) : Colors.redAccent,
                ),
                const SizedBox(height: 16),
                Text(
                  passed ? 'Hongera! You passed!' : 'Keep learning',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.w900,
                    color: isDark ? Colors.white : const Color(0xFF0F172A),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Score: $pct% ($_correct/${_questions.length})',
                  style: TextStyle(fontSize: 18, color: isDark ? Colors.white70 : const Color(0xFF64748B)),
                ),
                const SizedBox(height: 12),
                Text(
                  passed
                      ? 'You unlocked the next level. Endelea! (Continue!)'
                      : 'You need at least $kSwahiliPassPercent% to pass. Review the 5 days and try again.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 14, height: 1.45, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                ),
                const SizedBox(height: 28),
                FilledButton(
                  onPressed: () => Navigator.pop(context),
                  style: FilledButton.styleFrom(
                    backgroundColor: widget.level.color,
                    minimumSize: const Size(double.infinity, 50),
                  ),
                  child: const Text('Back to school', style: TextStyle(fontWeight: FontWeight.w900)),
                ),
              ],
            ),
          ),
        ),
      );
    }

    final q = _questions[_index];
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B1018) : const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: widget.level.color,
        foregroundColor: Colors.white,
        title: Text('${widget.level.title} test', style: const TextStyle(fontWeight: FontWeight.w900)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Expanded(
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(8),
                    child: LinearProgressIndicator(
                      value: (_index + 1) / _questions.length,
                      minHeight: 8,
                      backgroundColor: widget.level.color.withValues(alpha: 0.2),
                      color: widget.level.color,
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                Text('${_index + 1}/${_questions.length}', style: const TextStyle(fontWeight: FontWeight.w800)),
              ],
            ),
            const SizedBox(height: 28),
            Text(
              q.prompt,
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w900,
                color: isDark ? Colors.white : const Color(0xFF0F172A),
                height: 1.3,
              ),
            ),
            const SizedBox(height: 24),
            ...List.generate(q.options.length, (i) {
              final opt = q.options[i];
              Color? bg;
              if (_revealed) {
                if (i == q.correctIndex) {
                  bg = Colors.green.withValues(alpha: 0.2);
                } else if (i == _selected) {
                  bg = Colors.red.withValues(alpha: 0.15);
                }
              }
              return Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: Material(
                  color: bg ?? (isDark ? const Color(0xFF151D2B) : Colors.white),
                  borderRadius: BorderRadius.circular(14),
                  child: InkWell(
                    onTap: () => _pick(i),
                    borderRadius: BorderRadius.circular(14),
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(
                          color: _selected == i ? widget.level.color : widget.level.color.withValues(alpha: 0.25),
                          width: _selected == i ? 2 : 1,
                        ),
                      ),
                      child: Text(
                        opt,
                        style: TextStyle(
                          fontWeight: FontWeight.w700,
                          fontSize: 15,
                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }),
            const Spacer(),
            FilledButton(
              onPressed: _revealed ? _next : null,
              style: FilledButton.styleFrom(
                backgroundColor: widget.level.color,
                minimumSize: const Size(double.infinity, 50),
              ),
              child: Text(
                _index + 1 >= _questions.length ? 'See results' : 'Next question',
                style: const TextStyle(fontWeight: FontWeight.w900),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
