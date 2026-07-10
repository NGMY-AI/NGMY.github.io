import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_local_tts.dart';
import 'ngmy_swahili_curriculum.dart';
import 'ngmy_swahili_path_ui.dart';
import 'ngmy_swahili_routes.dart';
import 'ngmy_swahili_visuals.dart';
import 'ngmy_swahili_word_enrichment.dart';

/// One word the user wants to see as a pop-up every time they open the app.
class SwahiliWordReminder {
  const SwahiliWordReminder({
    required this.swahili,
    required this.english,
    this.pronunciation = '',
  });

  final String swahili;
  final String english;
  final String pronunciation;

  Map<String, dynamic> toJson() => {
        'swahili': swahili,
        'english': english,
        'pronunciation': pronunciation,
      };

  factory SwahiliWordReminder.fromJson(Map<String, dynamic> json) {
    return SwahiliWordReminder(
      swahili: json['swahili'] as String? ?? '',
      english: json['english'] as String? ?? '',
      pronunciation: json['pronunciation'] as String? ?? '',
    );
  }

  factory SwahiliWordReminder.fromWord(SwahiliWord w) => SwahiliWordReminder(
        swahili: w.swahili,
        english: w.english,
        pronunciation: w.pronunciation,
      );
}

void showNgmySwahiliSchool({required BuildContext context, String? userEmail}) {
  final bg = Theme.of(context).brightness == Brightness.dark ? kSwahiliSchoolBgDark : kSwahiliSchoolBgLight;
  Navigator.of(context).push<void>(
    ngmySwahiliInstantRoute<void>(
      context,
      NgmySwahiliSchoolPage(userEmail: userEmail),
      background: bg,
    ),
  );
}

class NgmySwahiliProgress {
  NgmySwahiliProgress({
    this.unlockedLevelIndex = 0,
    Set<String>? completedDays,
    Map<String, int>? bestScores,
    Set<String>? passedLevels,
    Map<String, List<String>>? studiedWords,
    this.studyCalendarDay = '',
    List<SwahiliWordReminder>? wordReminders,
  })  : completedDays = completedDays != null ? Set<String>.from(completedDays) : <String>{},
        bestScores = bestScores != null ? Map<String, int>.from(bestScores) : <String, int>{},
        passedLevels = passedLevels != null ? Set<String>.from(passedLevels) : <String>{},
        studiedWords = studiedWords != null
            ? studiedWords.map((k, v) => MapEntry(k, List<String>.from(v)))
            : <String, List<String>>{},
        wordReminders = wordReminders != null ? List<SwahiliWordReminder>.from(wordReminders) : <SwahiliWordReminder>[];

  int unlockedLevelIndex;
  Set<String> completedDays;
  Map<String, int> bestScores;
  Set<String> passedLevels;
  Map<String, List<String>> studiedWords;
  String studyCalendarDay;
  List<SwahiliWordReminder> wordReminders;

  static String _todayKey() {
    final n = DateTime.now();
    return '${n.year}-${n.month.toString().padLeft(2, '0')}-${n.day.toString().padLeft(2, '0')}';
  }

  static String dayKey(int levelIndex, int dayIndex) => '${levelIndex}_$dayIndex';

  bool isDayDone(int levelIndex, int dayIndex) => completedDays.contains(dayKey(levelIndex, dayIndex));

  void markDayDone(int levelIndex, int dayIndex) => completedDays.add(dayKey(levelIndex, dayIndex));

  bool isWordStudied(int levelIndex, int dayIndex, String word) {
    if (isDayDone(levelIndex, dayIndex)) return true;
    return studiedWords[dayKey(levelIndex, dayIndex)]?.contains(word) ?? false;
  }

  void markWordStudied(int levelIndex, int dayIndex, String word) {
    final k = dayKey(levelIndex, dayIndex);
    final list = List<String>.from(studiedWords[k] ?? const []);
    if (!list.contains(word)) list.add(word);
    studiedWords[k] = list;
    studyCalendarDay = _todayKey();
  }

  bool allDaysDone(SwahiliLevel level, int levelIndex) {
    for (var d = 0; d < level.days.length; d++) {
      if (!isDayDone(levelIndex, d)) return false;
    }
    return true;
  }

  bool isLevelPassed(String levelId) => passedLevels.contains(levelId);

  bool hasWordReminder(SwahiliWord word) =>
      wordReminders.any((r) => r.swahili == word.swahili && r.english == word.english);

  void setWordReminder(SwahiliWord word, bool enabled) {
    wordReminders.removeWhere((r) => r.swahili == word.swahili);
    if (enabled) {
      wordReminders.add(SwahiliWordReminder.fromWord(word));
    }
  }

  Map<String, dynamic> toJson() => {
        'unlockedLevelIndex': unlockedLevelIndex,
        'completedDays': completedDays.toList(),
        'bestScores': bestScores,
        'passedLevels': passedLevels.toList(),
        'studiedWords': studiedWords.map((k, v) => MapEntry(k, v)),
        'studyCalendarDay': studyCalendarDay,
        'wordReminders': wordReminders.map((r) => r.toJson()).toList(),
      };

  factory NgmySwahiliProgress.fromJson(Map<String, dynamic> json) {
    final rawStudied = json['studiedWords'] as Map<String, dynamic>? ?? {};
    final rawReminders = json['wordReminders'] as List<dynamic>? ?? [];
    return NgmySwahiliProgress(
      unlockedLevelIndex: (json['unlockedLevelIndex'] as num?)?.toInt() ?? 0,
      completedDays: (json['completedDays'] as List<dynamic>? ?? []).map((e) => e.toString()).toSet(),
      bestScores: (json['bestScores'] as Map<String, dynamic>? ?? {})
          .map((k, v) => MapEntry(k.toString(), (v as num).toInt())),
      passedLevels: (json['passedLevels'] as List<dynamic>? ?? []).map((e) => e.toString()).toSet(),
      studiedWords: rawStudied.map(
        (k, v) => MapEntry(k.toString(), (v as List<dynamic>).map((e) => e.toString()).toList()),
      ),
      studyCalendarDay: json['studyCalendarDay'] as String? ?? '',
      wordReminders: rawReminders
          .whereType<Map>()
          .map((e) => SwahiliWordReminder.fromJson(Map<String, dynamic>.from(e)))
          .where((r) => r.swahili.isNotEmpty)
          .toList(),
    );
  }
}

final Map<String, NgmySwahiliProgress> _swahiliProgressMemory = {};

String _swahiliProgressStorageKey(String? email) =>
    'ngmy_swahili_school_${(email ?? '').trim().isEmpty ? 'guest' : email!.trim().toLowerCase()}';

Future<NgmySwahiliProgress> loadSwahiliProgress(String? email) async {
  final storageKey = _swahiliProgressStorageKey(email);
  final cached = _swahiliProgressMemory[storageKey];
  if (cached != null) return cached;

  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(storageKey);
  if (raw == null || raw.isEmpty) {
    final fresh = NgmySwahiliProgress();
    _swahiliProgressMemory[storageKey] = fresh;
    return fresh;
  }
  try {
    final progress = NgmySwahiliProgress.fromJson(jsonDecode(raw) as Map<String, dynamic>);
    _swahiliProgressMemory[storageKey] = progress;
    return progress;
  } catch (_) {
    final fresh = NgmySwahiliProgress();
    _swahiliProgressMemory[storageKey] = fresh;
    return fresh;
  }
}

Future<void> saveSwahiliProgress(String? email, NgmySwahiliProgress progress) async {
  final storageKey = _swahiliProgressStorageKey(email);
  _swahiliProgressMemory[storageKey] = progress;
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(storageKey, jsonEncode(progress.toJson()));
}

class NgmySwahiliSchoolPage extends StatefulWidget {
  const NgmySwahiliSchoolPage({super.key, this.userEmail});

  final String? userEmail;

  @override
  State<NgmySwahiliSchoolPage> createState() => _NgmySwahiliSchoolPageState();
}

class _NgmySwahiliSchoolPageState extends State<NgmySwahiliSchoolPage> with WidgetsBindingObserver {
  NgmySwahiliProgress _progress = NgmySwahiliProgress();
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _load();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      _reloadProgressFromDisk();
    }
  }

  Future<void> _reloadProgressFromDisk() async {
    final storageKey = _swahiliProgressStorageKey(widget.userEmail);
    _swahiliProgressMemory.remove(storageKey);
    final p = await loadSwahiliProgress(widget.userEmail);
    if (!mounted) return;
    setState(() => _progress = p);
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

  bool _isDayUnlocked(int levelIndex, int dayIndex) {
    if (dayIndex == 0) return true;
    return _progress.isDayDone(levelIndex, dayIndex - 1);
  }

  void _openLevelPath(int levelIndex) {
    final level = kSwahiliLevels[levelIndex];
    Navigator.of(context).push<void>(
      ngmySwahiliInstantRoute<void>(
        context,
        SwahiliWeekPathPage(
          level: level,
          levelIndex: levelIndex,
          isDayDone: (d) => _progress.isDayDone(levelIndex, d),
          isDayUnlocked: (d) => _isDayUnlocked(levelIndex, d),
          allDaysDone: () => _progress.allDaysDone(level, levelIndex),
          levelPassed: () => _progress.isLevelPassed(level.id),
          bestScore: () => _progress.bestScores[level.id],
          onDayTap: (d, pathCtx) async {
            final lesson = _buildLessonPage(levelIndex, d);
            await Navigator.of(pathCtx).push<void>(
              ngmySwahiliInstantRoute<void>(pathCtx, lesson),
            );
            // Path page refreshes itself when this Future completes.
            if (mounted) setState(() {});
          },
          onTestTap: (pathCtx) async {
            await Navigator.of(pathCtx).push<void>(
              ngmySwahiliInstantRoute<void>(
                pathCtx,
                _SwahiliTestPage(
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
            if (mounted) setState(() {});
          },
        ),
        background: kSwahiliPathBg,
      ),
    ).then((_) {
      if (mounted) setState(() {});
    });
  }

  Widget _buildLessonPage(int levelIndex, int dayIndex) {
    final level = kSwahiliLevels[levelIndex];
    final day = level.days[dayIndex];
    return _SwahiliLessonPage(
      level: level,
      levelIndex: levelIndex,
      dayIndex: dayIndex,
      day: day,
      userEmail: widget.userEmail,
      enableVoiceDay: false,
      isWordStudied: (w) => _progress.isWordStudied(levelIndex, dayIndex, w),
      onWordStudied: (w) async {
        _progress.markWordStudied(levelIndex, dayIndex, w);
        await _save();
      },
      isDayDone: () => _progress.isDayDone(levelIndex, dayIndex),
      hasWordReminder: (w) => _progress.hasWordReminder(w),
      onWordReminderChanged: (w, on) async {
        _progress.setWordReminder(w, on);
        await _save();
      },
      onComplete: () async {
        setState(() => _progress.markDayDone(levelIndex, dayIndex));
        await _save();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0F1419) : const Color(0xFFF5F7FA);

    return ColoredBox(
      color: bg,
      child: Scaffold(
        backgroundColor: bg,
        body: _loading
            ? const Center(child: CircularProgressIndicator(color: Color(0xFF4AAF6E)))
            : CustomScrollView(
              slivers: [
                SliverToBoxAdapter(
                  child: SafeArea(
                    bottom: false,
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          NgmyHudMotion(
                            builder: (context, pulse, scan, orbit) {
                              const colors = [Color(0xFF4AAF6E), Color(0xFF14B8A6)];
                              return NgmyToolkitAliveSection(
                                colors: colors,
                                pulse: pulse,
                                scan: scan,
                                orbit: orbit,
                                padding: const EdgeInsets.fromLTRB(6, 4, 10, 4),
                                child: Row(
                                  children: [
                                    IconButton(
                                      onPressed: () => Navigator.pop(context),
                                      icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 18, color: Colors.white70),
                                    ),
                                    Expanded(
                                      child: NgmyToolkitAliveHeader(
                                        title: 'Kiswahili School',
                                        subtitle: 'Jifunze · live path',
                                        colors: colors,
                                        pulse: pulse,
                                        orbit: orbit,
                                        icon: Icons.translate_rounded,
                                        dense: true,
                                      ),
                                    ),
                                    NgmyHudMiniOrb(
                                      colors: colors,
                                      pulse: pulse,
                                      orbit: orbit,
                                      size: 40,
                                      icon: Icons.school_rounded,
                                    ),
                                  ],
                                ),
                              );
                            },
                          ),
                          const SizedBox(height: 8),
                          NgmyHudMotion(
                            builder: (context, pulse, scan, orbit) {
                              const colors = [Color(0xFF4AAF6E), Color(0xFF14B8A6)];
                              return NgmyToolkitAliveSection(
                                colors: colors,
                                pulse: pulse,
                                scan: scan,
                                orbit: orbit,
                                phase: 0.12,
                                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                                child: Row(
                                  children: [
                                    Expanded(
                                      child: Text(
                                        'Tuanze somo letu la Kiswahili!',
                                        style: TextStyle(
                                          fontWeight: FontWeight.w700,
                                          fontSize: 13,
                                          color: Colors.white.withValues(alpha: 0.9),
                                        ),
                                      ),
                                    ),
                                    FilledButton(
                                      onPressed: () => _openLevelPath(_progress.unlockedLevelIndex),
                                      style: FilledButton.styleFrom(
                                        backgroundColor: const Color(0xFF4AAF6E),
                                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                                        minimumSize: Size.zero,
                                      ),
                                      child: const Text('Anza', style: TextStyle(fontWeight: FontWeight.w800)),
                                    ),
                                  ],
                                ),
                              );
                            },
                          ),
                          const SizedBox(height: 20),
                          Text(
                            'Tayari kujifunza?',
                            style: TextStyle(
                              fontSize: 26,
                              fontWeight: FontWeight.w900,
                              color: isDark ? Colors.white : const Color(0xFF1E293B),
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'Endelea ulipoishia â€” bofya wiki kuona njia',
                            style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                          ),
                          const SizedBox(height: 16),
                          SizedBox(
                            height: 210,
                            child: NgmyHudMotion(
                              builder: (context, pulse, scan, orbit) {
                                return ListView.separated(
                                  scrollDirection: Axis.horizontal,
                                  itemCount: kSwahiliLevels.length,
                                  separatorBuilder: (_, _) => const SizedBox(width: 12),
                                  itemBuilder: (context, i) {
                                    final level = kSwahiliLevels[i];
                                    final locked = i > _progress.unlockedLevelIndex;
                                    var done = 0;
                                    for (var d = 0; d < level.days.length; d++) {
                                      if (_progress.isDayDone(i, d)) done++;
                                    }
                                    final g = SwahiliLevelDashboardCard.gradientsFor(i);
                                    return NgmyToolkitAliveSection(
                                      colors: g,
                                      pulse: pulse,
                                      scan: scan,
                                      orbit: orbit,
                                      phase: 0.08 + i * 0.09,
                                      padding: EdgeInsets.zero,
                                      onTap: locked ? null : () => _openLevelPath(i),
                                      child: SwahiliLevelDashboardCard(
                                        level: level,
                                        levelIndex: i,
                                        progress: level.days.isEmpty ? 0 : done / level.days.length,
                                        locked: locked,
                                        passed: _progress.isLevelPassed(level.id),
                                        onTap: null,
                                        bare: true,
                                      ),
                                    );
                                  },
                                );
                              },
                            ),
                          ),
                          const SizedBox(height: 24),
                          Text(
                            'Mazoezi',
                            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF1E293B)),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'Kila wiki = siku 5 + mtihani Â· njia ya kujifunza',
                            style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                SliverPadding(
                  padding: const EdgeInsets.fromLTRB(18, 12, 18, 32),
                  sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (context, i) {
                        final level = kSwahiliLevels[i];
                        final locked = i > _progress.unlockedLevelIndex;
                        var doneCount = 0;
                        for (var d = 0; d < level.days.length; d++) {
                          if (_progress.isDayDone(i, d)) doneCount++;
                        }
                        final pct = level.days.isEmpty ? 0 : (doneCount * 100 / level.days.length).round();
                        return Padding(
                          padding: const EdgeInsets.only(bottom: 10),
                          child: _PractiseRow(
                            level: level,
                            levelIndex: i,
                            locked: locked,
                            percent: pct,
                            isDark: isDark,
                            onTap: locked ? null : () => _openLevelPath(i),
                          ),
                        );
                      },
                      childCount: kSwahiliLevels.length,
                    ),
                  ),
                ),
              ],
            ),
      ),
    );
  }
}

class _PractiseRow extends StatelessWidget {
  const _PractiseRow({
    required this.level,
    required this.levelIndex,
    required this.locked,
    required this.percent,
    required this.isDark,
    this.onTap,
  });

  final SwahiliLevel level;
  final int levelIndex;
  final bool locked;
  final int percent;
  final bool isDark;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            gradient: LinearGradient(
              colors: locked
                  ? [const Color(0xFF6B8F7A), const Color(0xFF5A7A68)]
                  : [const Color(0xFF2D7A4A), const Color(0xFF358F55)],
            ),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF2D7A4A).withValues(alpha: locked ? 0.1 : 0.25),
                blurRadius: 12,
                offset: const Offset(0, 4),
              ),
            ],
          ),
          child: Row(
            children: [
              Icon(level.icon, color: Colors.white.withValues(alpha: locked ? 0.6 : 1), size: 26),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      level.title,
                      style: TextStyle(
                        color: Colors.white.withValues(alpha: locked ? 0.7 : 1),
                        fontWeight: FontWeight.w900,
                        fontSize: 15,
                      ),
                    ),
                    Text(
                      locked ? 'Funga hatua iliyotangulia' : '${level.days.length} siku Â· njia ya kujifunza',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 11),
                    ),
                  ],
                ),
              ),
              if (locked)
                Icon(Icons.lock_rounded, color: Colors.white.withValues(alpha: 0.7))
              else
                SizedBox(
                  width: 40,
                  height: 40,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      CircularProgressIndicator(
                        value: percent / 100,
                        strokeWidth: 3.5,
                        backgroundColor: Colors.white.withValues(alpha: 0.25),
                        color: Colors.white,
                      ),
                      Text('$percent%', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9)),
                    ],
                  ),
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
    required this.userEmail,
    this.enableVoiceDay = false,
    required this.isWordStudied,
    required this.onWordStudied,
    required this.isDayDone,
    required this.hasWordReminder,
    required this.onWordReminderChanged,
    required this.onComplete,
  });

  final SwahiliLevel level;
  final int levelIndex;
  final int dayIndex;
  final SwahiliLessonDay day;
  final String? userEmail;
  /// True for the lesson day currently piloting voice notes — only the
  /// first two words in that day get the mic button (see [_WordCard]).
  final bool enableVoiceDay;
  final bool Function(String word) isWordStudied;
  final Future<void> Function(String word) onWordStudied;
  final bool Function() isDayDone;
  final bool Function(SwahiliWord word) hasWordReminder;
  final Future<void> Function(SwahiliWord word, bool enabled) onWordReminderChanged;
  final VoidCallback onComplete;

  @override
  State<_SwahiliLessonPage> createState() => _SwahiliLessonPageState();
}

class _SwahiliLessonPageState extends State<_SwahiliLessonPage> with WidgetsBindingObserver {
  late bool _completed;
  final Map<String, int> _studySeconds = {};

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _syncStudiedFromProgress();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed && mounted) {
      _syncStudiedFromProgress();
      setState(() {});
    }
  }

  void _syncStudiedFromProgress() {
    _completed = widget.isDayDone();
    for (final w in widget.day.words) {
      if (widget.isWordStudied(w.swahili)) {
        _studySeconds[w.swahili] = kSwahiliMinStudySeconds;
      }
    }
  }

  int get _studiedCount => widget.day.words.where((w) => _isStudied(w.swahili)).length;

  bool _isStudied(String key) => (_studySeconds[key] ?? 0) >= kSwahiliMinStudySeconds || widget.isWordStudied(key);

  bool get _allStudied => _studiedCount >= widget.day.words.length;

  Future<void> _maybeCompleteDay() async {
    if (!_allStudied || _completed) return;
    widget.onComplete();
    if (!mounted) return;
    setState(() => _completed = true);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          widget.dayIndex < 4
              ? 'Siku ${widget.dayIndex + 1} imekamilika! / Day ${widget.dayIndex + 1} complete!'
              : 'Siku ${widget.dayIndex + 1} imekamilika! Unaweza kufanya mtihani. / Day complete — take the test!',
        ),
        backgroundColor: const Color(0xFFD97706),
      ),
    );
  }

  Future<void> _openWord(SwahiliWord word) async {
    final key = word.swahili;
    final alreadyStudied = _isStudied(key);
    final prior = alreadyStudied ? kSwahiliMinStudySeconds : (_studySeconds[key] ?? 0);
    final rich = enrichSwahiliWord(word);
    final added = await Navigator.of(context).push<int>(
      ngmySwahiliInstantRoute<int>(
        context,
        _SwahiliWordStudyPage(
          rich: rich,
          priorSeconds: prior,
          alreadyStudied: alreadyStudied,
          reminderEnabled: widget.hasWordReminder(word),
          onReminderChanged: (on) => widget.onWordReminderChanged(word, on),
        ),
      ),
    );
    if (added != null && mounted) {
      setState(() => _studySeconds[key] = added);
      if (added >= kSwahiliMinStudySeconds) {
        if (!widget.isWordStudied(key)) {
          await widget.onWordStudied(key);
        }
        await _maybeCompleteDay();
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? kSwahiliLessonBgDark : kSwahiliLessonBgLight;

    return ColoredBox(
      color: bg,
      child: Scaffold(
        backgroundColor: bg,
        appBar: AppBar(
          backgroundColor: isDark ? const Color(0xFF1A2030) : Colors.white,
          foregroundColor: isDark ? Colors.white : const Color(0xFF1E293B),
          elevation: 0,
          scrolledUnderElevation: 0,
          surfaceTintColor: Colors.transparent,
          title: Text(widget.day.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
        ),
        body: NgmyHudMotion(
          builder: (context, pulse, scan, orbit) {
            final hudColors = <Color>[widget.level.color, const Color(0xFF14B8A6)];
            return ListView.builder(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
          itemCount: widget.day.words.length + 2,
          cacheExtent: 1200,
          itemBuilder: (context, index) {
            if (index == 0) {
              return NgmyToolkitAliveSection(
                colors: hudColors,
                pulse: pulse,
                scan: scan,
                orbit: orbit,
                phase: 0.06,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      widget.day.subtitle,
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w700,
                        color: Colors.white.withValues(alpha: 0.88),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Bofya kila neno — picha inaonyesha maana ya Kiingereza. / Tap each word — the picture shows what the English means.',
                      style: TextStyle(
                        fontSize: 12,
                        height: 1.45,
                        color: Colors.white.withValues(alpha: 0.62),
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
                          style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: Colors.white.withValues(alpha: 0.7)),
                        ),
                      ],
                    ),
                  ],
                ),
              );
            }
            if (index == widget.day.words.length + 1) {
              return Padding(
                padding: const EdgeInsets.only(top: 8),
                child: NgmyToolkitAliveSection(
                  colors: const [Color(0xFFD97706), Color(0xFFF59E0B)],
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  phase: 0.4,
                  padding: const EdgeInsets.all(8),
                  child: FilledButton.icon(
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
                ),
              );
            }
            final w = widget.day.words[index - 1];
            return Padding(
              padding: const EdgeInsets.only(top: 10),
              child: NgmyToolkitAliveSection(
                colors: hudColors,
                pulse: pulse,
                scan: scan,
                orbit: orbit,
                phase: 0.1 + (index % 6) * 0.06,
                padding: EdgeInsets.zero,
                onTap: () => _openWord(w),
                child: _WordCard(
                  word: w,
                  index: index,
                  color: widget.level.color,
                  isDark: true,
                  studied: _isStudied(w.swahili),
                  studySeconds: _studySeconds[w.swahili] ?? 0,
                  onTap: () => _openWord(w),
                  enableVoice: widget.enableVoiceDay && (index - 1) < 2,
                  bare: true,
                ),
              ),
            );
          },
        );
          },
        ),
      ),
    );
  }
}

class _WordCard extends StatefulWidget {
  const _WordCard({
    required this.word,
    required this.index,
    required this.color,
    required this.isDark,
    required this.studied,
    required this.studySeconds,
    required this.onTap,
    this.enableVoice = false,
    this.bare = false,
  });

  final SwahiliWord word;
  final int index;
  final Color color;
  final bool isDark;
  final bool studied;
  final int studySeconds;
  final VoidCallback onTap;
  final bool enableVoice;
  final bool bare;

  @override
  State<_WordCard> createState() => _WordCardState();
}

class _WordCardState extends State<_WordCard> {
  bool _speaking = false;

  // Keyed by the Swahili word (unique per card) — but it's the English
  // translation that gets spoken, since learners here are Swahili speakers
  // learning English.
  String get _voiceKey => 'english_word_${widget.word.swahili}';

  Future<void> _toggleSpeak() async {
    if (NgmyLocalTts.isSpeaking(_voiceKey)) {
      await NgmyLocalTts.stop();
      if (mounted) setState(() => _speaking = false);
      return;
    }

    setState(() => _speaking = true);

    final result = await NgmyLocalTts.speak(text: widget.word.english, key: _voiceKey);

    if (!mounted) return;
    setState(() => _speaking = false);
    if (result.error != null) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(result.error!), backgroundColor: const Color(0xFFDC2626)),
      );
    }
  }

  @override
  void dispose() {
    if (NgmyLocalTts.isSpeaking(_voiceKey)) {
      NgmyLocalTts.stop();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final word = widget.word;
    final isDark = widget.isDark || widget.bare;
    final studied = widget.studied;
    final color = widget.color;
    final card = widget.bare ? Colors.transparent : (isDark ? const Color(0xFF1A2030) : Colors.white);
    final borderColor = widget.bare
        ? Colors.transparent
        : (studied ? const Color(0xFFD97706) : color.withValues(alpha: 0.25));
    final visual = resolveSwahiliWordVisual(swahili: word.swahili, english: word.english);
    final titleColor = widget.bare || isDark ? Colors.white : const Color(0xFF0F172A);
    final englishColor = widget.bare || isDark ? const Color(0xFFFCA5A5) : const Color(0xFFDC2626);

    return Material(
      color: card,
      borderRadius: BorderRadius.circular(16),
      child: InkWell(
        onTap: widget.bare ? null : widget.onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: borderColor, width: studied && !widget.bare ? 1.8 : 1),
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SwahiliLessonNumberBadge(number: widget.index, color: studied ? const Color(0xFFD97706) : color),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      word.swahili,
                      style: TextStyle(
                        fontWeight: FontWeight.w900,
                        fontSize: 15,
                        height: 1.2,
                        color: titleColor,
                      ),
                    ),
                    const SizedBox(height: 6),
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Padding(
                          padding: EdgeInsets.only(top: 2),
                          child: Icon(Icons.arrow_right_alt_rounded, color: Color(0xFFDC2626), size: 18),
                        ),
                        const SizedBox(width: 2),
                        Expanded(
                          child: Text(
                            word.english,
                            style: TextStyle(
                              fontWeight: FontWeight.w700,
                              fontSize: 13,
                              height: 1.25,
                              color: englishColor,
                            ),
                          ),
                        ),
                        if (widget.enableVoice) ...[
                          const SizedBox(width: 2),
                          _SwahiliVoiceButton(
                            speaking: _speaking,
                            onPressed: _toggleSpeak,
                          ),
                        ],
                      ],
                    ),
                    if (!studied && widget.studySeconds > 0) ...[
                      const SizedBox(height: 4),
                      Text(
                        '${kSwahiliMinStudySeconds - widget.studySeconds}s left',
                        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: color),
                      ),
                    ],
                  ],
                ),
              ),
              const SizedBox(width: 10),
              SwahiliWordVisualTile(visual: visual, swahili: word.swahili, english: word.english, compact: true),
              if (studied) ...[
                const SizedBox(width: 6),
                const Icon(Icons.check_circle_rounded, color: Color(0xFFD97706), size: 20),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

/// Small "listen" button — plays the Swahili word aloud using the device's
/// own local voice engine (no cloud service, no API key).
class _SwahiliVoiceButton extends StatelessWidget {
  const _SwahiliVoiceButton({
    required this.speaking,
    required this.onPressed,
  });

  final bool speaking;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: speaking ? const Color(0xFFD97706).withValues(alpha: 0.18) : Colors.transparent,
      shape: const CircleBorder(),
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: onPressed,
        child: Padding(
          padding: const EdgeInsets.all(4),
          child: Icon(
            speaking ? Icons.stop_circle_rounded : Icons.mic_rounded,
            size: 20,
            color: const Color(0xFFD97706),
          ),
        ),
      ),
    );
  }
}

class _SwahiliWordStudyPage extends StatefulWidget {
  const _SwahiliWordStudyPage({
    required this.rich,
    required this.priorSeconds,
    required this.alreadyStudied,
    required this.reminderEnabled,
    required this.onReminderChanged,
  });

  final SwahiliRichWord rich;
  final int priorSeconds;
  final bool alreadyStudied;
  final bool reminderEnabled;
  final Future<void> Function(bool enabled) onReminderChanged;

  @override
  State<_SwahiliWordStudyPage> createState() => _SwahiliWordStudyPageState();
}

class _SwahiliWordStudyPageState extends State<_SwahiliWordStudyPage> {
  Timer? _timer;
  int _sessionSeconds = 0;
  late bool _reminderOn;

  int get _totalSeconds => widget.priorSeconds + _sessionSeconds;

  bool get _studied => widget.alreadyStudied || _totalSeconds >= kSwahiliMinStudySeconds;

  @override
  void initState() {
    super.initState();
    _reminderOn = widget.reminderEnabled;
    if (!widget.alreadyStudied && widget.priorSeconds < kSwahiliMinStudySeconds) {
      _timer = Timer.periodic(const Duration(seconds: 1), (_) {
        if (mounted) setState(() => _sessionSeconds++);
      });
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final word = widget.rich.base;
    final visual = resolveSwahiliWordVisual(swahili: word.swahili, english: word.english);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0F1419) : const Color(0xFFFAF7F2);
    final remaining = (kSwahiliMinStudySeconds - _totalSeconds).clamp(0, kSwahiliMinStudySeconds);

    return ColoredBox(
      color: bg,
      child: Scaffold(
        backgroundColor: bg,
        appBar: AppBar(
          backgroundColor: isDark ? const Color(0xFF1A2030) : Colors.white,
          foregroundColor: isDark ? Colors.white : const Color(0xFF1E293B),
          elevation: 0,
          scrolledUnderElevation: 0,
          surfaceTintColor: Colors.transparent,
          title: const Text('Somo / Lesson', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
        ),
        body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              decoration: BoxDecoration(
                color: _studied
                    ? const Color(0xFF059669).withValues(alpha: 0.15)
                    : const Color(0xFFD97706).withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: _studied ? const Color(0xFF059669) : const Color(0xFFD97706)),
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
                          ? 'Umekamilisha kusoma — Done studying!'
                          : 'Soma angalau sekunde $remaining zaidi / Study $remaining more seconds',
                      style: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.w700,
                        color: isDark ? Colors.white70 : const Color(0xFF475569),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 14, 20, 20),
              children: [
                SwahiliWordVisualHero(visual: visual, swahili: word.swahili, english: word.english),
                const SizedBox(height: 16),
                Text(
                  word.swahili,
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.w900,
                    color: isDark ? Colors.white : const Color(0xFF1E3A5F),
                  ),
                ),
                Text(
                  word.english,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w700,
                    color: isDark ? Colors.white60 : const Color(0xFF64748B),
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  'Tamkwa: ${word.pronunciation}',
                  style: TextStyle(
                    fontSize: 13,
                    fontStyle: FontStyle.italic,
                    color: isDark ? Colors.white54 : const Color(0xFF94A3B8),
                  ),
                ),
                const SizedBox(height: 12),
                SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  value: _reminderOn,
                  activeTrackColor: const Color(0xFF4AAF6E).withValues(alpha: 0.45),
                  activeThumbColor: const Color(0xFF4AAF6E),
                  title: Text(
                    'Onyesha kila ninapofungua app',
                    style: TextStyle(fontWeight: FontWeight.w700, fontSize: 13, color: isDark ? Colors.white : const Color(0xFF334155)),
                  ),
                  subtitle: Text(
                    'Pop up this word every time you open NGMY / Turn off anytime',
                    style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                  ),
                  onChanged: (on) async {
                    if (on == _reminderOn) return;
                    setState(() => _reminderOn = on);
                    try {
                      await widget.onReminderChanged(on);
                    } catch (_) {
                      if (mounted) setState(() => _reminderOn = !on);
                    }
                  },
                ),
                const SizedBox(height: 8),
                _bilingualBlock(isDark, 'Maelezo / Explanation', widget.rich.explanationSw, widget.rich.explanationEn),
                const SizedBox(height: 12),
                _bilingualBlock(isDark, 'Sarufi / Grammar', widget.rich.grammarSw, widget.rich.grammarEn),
                const SizedBox(height: 16),
                Text(
                  'Vidokezo / Tips',
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 12,
                    color: isDark ? Colors.white60 : const Color(0xFF64748B),
                  ),
                ),
                const SizedBox(height: 8),
                ...widget.rich.tips.map(
                  (t) => Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('• ', style: TextStyle(color: Color(0xFFD97706), fontWeight: FontWeight.w900)),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(t.swahili, style: _bodyStyle(isDark).copyWith(fontWeight: FontWeight.w600)),
                              const SizedBox(height: 2),
                              Text(t.english, style: _enStyle(isDark)),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 16),
                Text(
                  'Mifano / Examples',
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 12,
                    color: isDark ? Colors.white60 : const Color(0xFF64748B),
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
                        color: isDark ? const Color(0xFF1A2030) : Colors.white,
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: const Color(0xFF1E3A5F).withValues(alpha: 0.15)),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(ex.swahili, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14, color: isDark ? Colors.white : const Color(0xFF1E293B))),
                          const SizedBox(height: 4),
                          Text(ex.english, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: isDark ? Colors.white70 : const Color(0xFF475569))),
                          if (ex.partNotes.isNotEmpty) ...[
                            const SizedBox(height: 8),
                            Text(
                              'Maneno / Words:',
                              style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: isDark ? Colors.white54 : const Color(0xFF94A3B8)),
                            ),
                            const SizedBox(height: 4),
                            ...ex.partNotes.map(
                              (n) => Padding(
                                padding: const EdgeInsets.only(bottom: 2),
                                child: Text('↳ $n', style: TextStyle(fontSize: 11, height: 1.35, color: isDark ? Colors.white54 : const Color(0xFF94A3B8))),
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
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
            child: FilledButton(
              onPressed: () => Navigator.pop(context, _totalSeconds),
              style: FilledButton.styleFrom(
                backgroundColor: const Color(0xFF1E3A5F),
                minimumSize: const Size(double.infinity, 48),
              ),
              child: Text(
                _studied ? 'Nimeelewa — Done' : 'Funga (endelea kusoma) / Close (keep studying)',
                style: const TextStyle(fontWeight: FontWeight.w800),
              ),
            ),
          ),
        ],
      ),
      ),
    );
  }

  static TextStyle _bodyStyle(bool isDark) => TextStyle(
        fontSize: 14,
        height: 1.5,
        color: isDark ? Colors.white.withValues(alpha: 0.9) : const Color(0xFF334155),
      );

  static TextStyle _enStyle(bool isDark) => TextStyle(
        fontSize: 13,
        height: 1.45,
        fontStyle: FontStyle.italic,
        color: isDark ? Colors.white54 : const Color(0xFF64748B),
      );

  static Widget _bilingualBlock(bool isDark, String title, String swahili, String english) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1A2030) : Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFD97706).withValues(alpha: 0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 11, color: Color(0xFFD97706))),
          const SizedBox(height: 6),
          Text(swahili, style: _bodyStyle(isDark).copyWith(fontWeight: FontWeight.w600)),
          const SizedBox(height: 6),
          Text(english, style: _enStyle(isDark)),
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
    final hudColors = <Color>[widget.level.color, const Color(0xFF14B8A6)];
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B1018) : const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: widget.level.color,
        foregroundColor: Colors.white,
        title: Text('${widget.level.title} test', style: const TextStyle(fontWeight: FontWeight.w900)),
      ),
      body: NgmyHudMotion(
        builder: (context, pulse, scan, orbit) {
          return Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                NgmyToolkitAliveSection(
                  colors: hudColors,
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  phase: 0.05,
                  padding: const EdgeInsets.all(10),
                  child: Row(
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
                      Text(
                        '${_index + 1}/${_questions.length}',
                        style: const TextStyle(fontWeight: FontWeight.w800, color: Colors.white),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
                NgmyToolkitAliveSection(
                  colors: hudColors,
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  phase: 0.14,
                  child: Text(
                    q.prompt,
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w900,
                      color: Colors.white,
                      height: 1.3,
                    ),
                  ),
                ),
                const SizedBox(height: 16),
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
                    child: NgmyToolkitAliveSection(
                      colors: hudColors,
                      pulse: pulse,
                      scan: scan,
                      orbit: orbit,
                      phase: 0.2 + i * 0.08,
                      padding: EdgeInsets.zero,
                      onTap: () => _pick(i),
                      child: Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
                        decoration: BoxDecoration(
                          color: bg,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(
                            color: _selected == i ? Colors.white70 : Colors.white24,
                            width: _selected == i ? 2 : 1,
                          ),
                        ),
                        child: Text(
                          opt,
                          style: const TextStyle(
                            fontWeight: FontWeight.w700,
                            fontSize: 15,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  );
                }),
                const Spacer(),
                NgmyToolkitAliveSection(
                  colors: hudColors,
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  phase: 0.5,
                  padding: const EdgeInsets.all(8),
                  child: FilledButton(
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
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
