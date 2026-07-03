import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kStorageKey = 'ngmy_business_notes_v1';

String _notesKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

const _noteColors = [
  Color(0xFFFFF9C4),
  Color(0xFFFFFFFF),
  Color(0xFFE2E8F0),
  Color(0xFFFBCFE8),
  Color(0xFFBFDBFE),
  Color(0xFFBBF7D0),
  Color(0xFF1E293B),
];

const _noteFolders = ['All', 'Personal', 'Work', 'Ideas', 'Meeting', 'Other'];

enum _NoteBgPattern { none, rain, waves, grass, stars, grid, bokeh }

class _NoteBackgroundDef {
  const _NoteBackgroundDef({
    required this.id,
    required this.label,
    required this.category,
    required this.colors,
    this.pattern = _NoteBgPattern.none,
    this.emojis = const [],
    this.darkText = false,
  });

  final String id;
  final String label;
  final String category;
  final List<Color> colors;
  final _NoteBgPattern pattern;
  final List<String> emojis;
  final bool darkText;
}

const _noteBackgrounds = <_NoteBackgroundDef>[
  _NoteBackgroundDef(id: 'sunrise_meadow', label: 'Sunrise Meadow', category: 'Personal', colors: [Color(0xFFFFF7ED), Color(0xFFBBF7D0), Color(0xFF86EFAC)], pattern: _NoteBgPattern.grass, emojis: ['🌅', '🌿', '🦋']),
  _NoteBackgroundDef(id: 'ocean_waves', label: 'Ocean Waves', category: 'Nature', colors: [Color(0xFF0EA5E9), Color(0xFF0369A1), Color(0xFF1E3A8A)], pattern: _NoteBgPattern.waves, emojis: ['🌊', '🐚'], darkText: true),
  _NoteBackgroundDef(id: 'rainforest', label: 'Rainforest', category: 'Nature', colors: [Color(0xFF14532D), Color(0xFF166534), Color(0xFF052E16)], pattern: _NoteBgPattern.grass, emojis: ['🌳', '🦜', '🌿'], darkText: true),
  _NoteBackgroundDef(id: 'cherry_blossom', label: 'Cherry Blossom', category: 'Personal', colors: [Color(0xFFFDF2F8), Color(0xFFFBCFE8), Color(0xFFF472B6)], pattern: _NoteBgPattern.bokeh, emojis: ['🌸', '🌷']),
  _NoteBackgroundDef(id: 'starry_night', label: 'Starry Night', category: 'Personal', colors: [Color(0xFF1E1B4B), Color(0xFF312E81), Color(0xFF0F172A)], pattern: _NoteBgPattern.stars, emojis: ['✨', '🌙'], darkText: true),
  _NoteBackgroundDef(id: 'rain_drops', label: 'Rainy Day', category: 'Nature', colors: [Color(0xFFCBD5E1), Color(0xFF64748B), Color(0xFF334155)], pattern: _NoteBgPattern.rain, emojis: ['🌧️', '☔'], darkText: true),
  _NoteBackgroundDef(id: 'mountain_mist', label: 'Mountain Mist', category: 'Nature', colors: [Color(0xFFE2E8F0), Color(0xFF94A3B8), Color(0xFF475569)], pattern: _NoteBgPattern.bokeh, emojis: ['🏔️', '☁️']),
  _NoteBackgroundDef(id: 'tropical_beach', label: 'Tropical Beach', category: 'Personal', colors: [Color(0xFF67E8F9), Color(0xFF22D3EE), Color(0xFFFDE68A)], pattern: _NoteBgPattern.waves, emojis: ['🏝️', '🌴', '🐚']),
  _NoteBackgroundDef(id: 'butterfly_garden', label: 'Butterfly Garden', category: 'Personal', colors: [Color(0xFFFEF9C3), Color(0xFFFDE68A), Color(0xFFF0ABFC)], pattern: _NoteBgPattern.bokeh, emojis: ['🦋', '🌺', '🌻']),
  _NoteBackgroundDef(id: 'koi_pond', label: 'Koi Pond', category: 'Nature', colors: [Color(0xFF99F6E4), Color(0xFF2DD4BF), Color(0xFF0F766E)], pattern: _NoteBgPattern.waves, emojis: ['🐟', '🪷']),
  _NoteBackgroundDef(id: 'safari_sunset', label: 'Safari Sunset', category: 'Nature', colors: [Color(0xFFFDBA74), Color(0xFFEA580C), Color(0xFF7C2D12)], pattern: _NoteBgPattern.bokeh, emojis: ['🦁', '🌅', '🦒'], darkText: true),
  _NoteBackgroundDef(id: 'waterfall_mist', label: 'Waterfall', category: 'Nature', colors: [Color(0xFFBAE6FD), Color(0xFF38BDF8), Color(0xFF0284C7)], pattern: _NoteBgPattern.rain, emojis: ['💧', '🌊']),
  _NoteBackgroundDef(id: 'executive_blue', label: 'Executive Blue', category: 'Work', colors: [Color(0xFFEFF6FF), Color(0xFFBFDBFE), Color(0xFF93C5FD)], pattern: _NoteBgPattern.grid, emojis: ['💼']),
  _NoteBackgroundDef(id: 'boardroom_slate', label: 'Boardroom', category: 'Work', colors: [Color(0xFF334155), Color(0xFF1E293B), Color(0xFF0F172A)], pattern: _NoteBgPattern.none, emojis: ['📊'], darkText: true),
  _NoteBackgroundDef(id: 'graph_paper', label: 'Graph Paper', category: 'Work', colors: [Color(0xFFFFFFFF), Color(0xFFF8FAFC), Color(0xFFE2E8F0)], pattern: _NoteBgPattern.grid, emojis: ['📐']),
  _NoteBackgroundDef(id: 'conference_cream', label: 'Conference', category: 'Meeting', colors: [Color(0xFFFFFBEB), Color(0xFFFEF3C7), Color(0xFFFDE68A)], pattern: _NoteBgPattern.none, emojis: ['🤝', '📋']),
  _NoteBackgroundDef(id: 'calendar_blue', label: 'Calendar', category: 'Meeting', colors: [Color(0xFFF0F9FF), Color(0xFFDBEAFE), Color(0xFFBFDBFE)], pattern: _NoteBgPattern.grid, emojis: ['📅']),
  _NoteBackgroundDef(id: 'brainstorm_aurora', label: 'Aurora Ideas', category: 'Ideas', colors: [Color(0xFF4ADE80), Color(0xFF818CF8), Color(0xFF312E81)], pattern: _NoteBgPattern.bokeh, emojis: ['💡', '✨'], darkText: true),
  _NoteBackgroundDef(id: 'cosmos_purple', label: 'Cosmos', category: 'Ideas', colors: [Color(0xFF581C87), Color(0xFF7E22CE), Color(0xFF1E1B4B)], pattern: _NoteBgPattern.stars, emojis: ['🌌', '🚀'], darkText: true),
  _NoteBackgroundDef(id: 'lightning_storm', label: 'Lightning', category: 'Ideas', colors: [Color(0xFF1E293B), Color(0xFF334155), Color(0xFFCA8A04)], pattern: _NoteBgPattern.rain, emojis: ['⚡', '🌩️'], darkText: true),
  _NoteBackgroundDef(id: 'wildlife_forest', label: 'Wildlife', category: 'Nature', colors: [Color(0xFF365314), Color(0xFF4D7C0F), Color(0xFF14532D)], pattern: _NoteBgPattern.grass, emojis: ['🦊', '🦌', '🐻'], darkText: true),
];

const _bgCategories = ['All', 'Personal', 'Work', 'Meeting', 'Ideas', 'Nature'];

_NoteBackgroundDef _noteBackgroundById(String id) =>
    _noteBackgrounds.firstWhere((b) => b.id == id, orElse: () => _noteBackgrounds.first);

String _defaultBackgroundForFolder(String folder) {
  switch (folder) {
    case 'Work':
      return 'executive_blue';
    case 'Meeting':
      return 'conference_cream';
    case 'Ideas':
      return 'brainstorm_aurora';
    case 'Nature':
      return 'ocean_waves';
    default:
      return 'sunrise_meadow';
  }
}

class _NoteCreationChoice {
  const _NoteCreationChoice({this.layout, required this.backgroundId, this.customColor});
  final _NoteTemplate? layout;
  final String backgroundId;
  final int? customColor;
}

class _NoteTemplate {
  const _NoteTemplate({
    required this.id,
    required this.label,
    required this.emoji,
    required this.body,
    this.title = '',
    this.folder = 'Personal',
    this.colorIndex = 0,
    this.backgroundId = '',
  });

  final String id;
  final String label;
  final String emoji;
  final String title;
  final String body;
  final String folder;
  final int colorIndex;
  final String backgroundId;
}

const _noteTemplates = <_NoteTemplate>[
  _NoteTemplate(id: 'blank', label: 'Blank Note', emoji: '📝', body: '', title: ''),
  _NoteTemplate(
    id: 'meeting',
    label: 'Meeting Notes',
    emoji: '📋',
    title: 'Meeting Notes',
    folder: 'Meeting',
    colorIndex: 4,
    body: 'Date:\nAttendees:\n\nAgenda\n• \n\nDiscussion\n• \n\nAction Items\n- [ ] \n\nNext Steps\n• ',
  ),
  _NoteTemplate(
    id: 'daily',
    label: 'Daily Journal',
    emoji: '📅',
    title: 'Daily Journal',
    folder: 'Personal',
    colorIndex: 0,
    body: 'Today I am grateful for:\n1. \n2. \n3. \n\nHighlights\n• \n\nTomorrow\n• ',
  ),
  _NoteTemplate(
    id: 'project',
    label: 'Project Plan',
    emoji: '🚀',
    title: 'Project Plan',
    folder: 'Work',
    colorIndex: 4,
    body: 'Project:\nOwner:\nDeadline:\n\nGoals\n• \n\nMilestones\n- [ ] Kickoff\n- [ ] Phase 1\n- [ ] Launch\n\nRisks\n• ',
  ),
  _NoteTemplate(
    id: 'brainstorm',
    label: 'Brainstorm',
    emoji: '💡',
    title: 'Brainstorm',
    folder: 'Ideas',
    colorIndex: 3,
    body: 'Topic:\n\nIdeas\n• \n• \n• \n\nBest picks\n★ \n\nNext experiment\n• ',
  ),
  _NoteTemplate(
    id: 'todo',
    label: 'To-Do List',
    emoji: '✅',
    title: 'To-Do',
    folder: 'Work',
    colorIndex: 5,
    body: 'Priority\n- [ ] \n- [ ] \n\nLater\n- [ ] \n- [ ] \n\nDone\n- [x] ',
  ),
  _NoteTemplate(
    id: 'weekly',
    label: 'Weekly Review',
    emoji: '📊',
    title: 'Weekly Review',
    folder: 'Work',
    colorIndex: 1,
    body: 'Week of:\n\nWins\n• \n\nChallenges\n• \n\nLearned\n• \n\nFocus next week\n1. \n2. \n3. ',
  ),
  _NoteTemplate(
    id: 'client',
    label: 'Client Call',
    emoji: '🤝',
    title: 'Client Call',
    folder: 'Work',
    colorIndex: 4,
    body: 'Client:\nContact:\nDate:\n\nNeeds\n• \n\nNotes\n• \n\nFollow-up\n- [ ] ',
  ),
  _NoteTemplate(
    id: 'ideas',
    label: 'Ideas & Inspiration',
    emoji: '✨',
    title: 'Ideas',
    folder: 'Ideas',
    colorIndex: 3,
    body: 'Inspiration\n"Quote or idea here"\n\nConcepts\n• \n• \n\nResources\n• ',
  ),
  _NoteTemplate(
    id: 'travel',
    label: 'Travel Planner',
    emoji: '✈️',
    title: 'Trip Planner',
    folder: 'Personal',
    colorIndex: 5,
    body: 'Destination:\nDates:\n\nPacking\n- [ ] Passport\n- [ ] Tickets\n- [ ] Charger\n\nItinerary\nDay 1:\nDay 2:\n',
  ),
  _NoteTemplate(
    id: 'recipe',
    label: 'Recipe',
    emoji: '🍳',
    title: 'Recipe',
    folder: 'Personal',
    colorIndex: 0,
    body: 'Servings:\nPrep time:\n\nIngredients\n• \n• \n\nSteps\n1. \n2. \n\nTips\n• ',
  ),
  _NoteTemplate(
    id: 'book',
    label: 'Book Notes',
    emoji: '📚',
    title: 'Book Notes',
    folder: 'Personal',
    colorIndex: 1,
    body: 'Title:\nAuthor:\n\nKey ideas\n• \n\nFavorite quotes\n" "\n\nTakeaways\n• ',
  ),
  _NoteTemplate(
    id: 'budget',
    label: 'Budget Tracker',
    emoji: '💰',
    title: 'Budget',
    folder: 'Work',
    colorIndex: 5,
    body: 'Month:\nIncome:\n\nExpenses\n• Rent — \n• Food — \n• Transport — \n\nSavings goal\n• ',
  ),
  _NoteTemplate(
    id: 'workout',
    label: 'Workout Log',
    emoji: '💪',
    title: 'Workout',
    folder: 'Personal',
    colorIndex: 5,
    body: 'Date:\nFocus:\n\nWarm-up\n• \n\nMain\n• \n• \n\nCool-down\n• \n\nNotes\n• ',
  ),
  _NoteTemplate(
    id: 'interview',
    label: 'Interview Prep',
    emoji: '🎯',
    title: 'Interview Prep',
    folder: 'Work',
    colorIndex: 4,
    body: 'Role:\nCompany:\n\nStrengths\n• \n\nStories (STAR)\n• \n\nQuestions to ask\n• ',
  ),
  _NoteTemplate(
    id: 'lesson',
    label: 'Lesson Plan',
    emoji: '🎓',
    title: 'Lesson Plan',
    folder: 'Work',
    colorIndex: 4,
    body: 'Subject:\nGrade:\nDuration:\n\nObjectives\n• \n\nActivities\n1. \n2. \n\nAssessment\n• ',
  ),
  _NoteTemplate(
    id: 'swot',
    label: 'SWOT Analysis',
    emoji: '🔍',
    title: 'SWOT',
    folder: 'Work',
    colorIndex: 1,
    body: 'Strengths\n• \n\nWeaknesses\n• \n\nOpportunities\n• \n\nThreats\n• ',
  ),
  _NoteTemplate(
    id: 'contact',
    label: 'Contact Card',
    emoji: '👤',
    title: 'Contact',
    folder: 'Work',
    colorIndex: 1,
    body: 'Name:\nRole:\nCompany:\nPhone:\nEmail:\n\nNotes\n• \n\nFollow-up\n- [ ] ',
  ),
  _NoteTemplate(
    id: 'event',
    label: 'Event Planner',
    emoji: '🎉',
    title: 'Event Plan',
    folder: 'Work',
    colorIndex: 3,
    body: 'Event:\nDate & time:\nVenue:\n\nChecklist\n- [ ] Invites\n- [ ] Catering\n- [ ] Setup\n\nBudget\n• ',
  ),
  _NoteTemplate(
    id: 'research',
    label: 'Research Notes',
    emoji: '🔬',
    title: 'Research',
    folder: 'Ideas',
    colorIndex: 1,
    body: 'Topic:\nSources\n• \n\nFindings\n• \n\nQuestions\n• \n\nConclusion\n• ',
  ),
];

const _emojiCategories = <String, List<String>>{
  'Smileys': ['😀', '😊', '🙂', '😎', '🤩', '🥳', '😍', '🤔', '😴', '👍', '👏', '🙌', '💪', '🔥', '⭐', '✨'],
  'Work': ['📋', '📊', '📈', '💼', '🤝', '🎯', '✅', '📌', '🗂️', '📎', '💡', '🚀', '⏰', '📞', '✉️', '🏢'],
  'Life': ['❤️', '🏠', '🍳', '✈️', '🎉', '🎓', '📚', '💰', '🛒', '🎵', '🎮', '☕', '🌿', '🌞', '🌙', '🎁'],
  'Symbols': ['•', '→', '←', '↑', '↓', '★', '☆', '♥', '♦', '♣', '♠', '✓', '✗', '⚡', '⚠️', 'ℹ️'],
};

class NgmyBusinessNote {
  NgmyBusinessNote({
    String? id,
    this.title = '',
    this.body = '',
    this.folder = 'Personal',
    this.colorIndex = 0,
    this.backgroundId = '',
    this.customColor,
    this.pinned = false,
    this.icon = '📝',
    DateTime? createdAt,
    DateTime? updatedAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        createdAt = createdAt ?? DateTime.now(),
        updatedAt = updatedAt ?? DateTime.now();

  final String id;
  String title;
  String body;
  String folder;
  int colorIndex;
  String backgroundId;
  int? customColor;
  bool pinned;
  String icon;
  final DateTime createdAt;
  DateTime updatedAt;

  String get preview {
    if (title.trim().isNotEmpty) return title.trim();
    final line = body.split('\n').firstWhere((l) => l.trim().isNotEmpty, orElse: () => '');
    return line.trim().isEmpty ? 'New Note' : line.trim();
  }

  String get effectiveBackgroundId => backgroundId.isEmpty ? _defaultBackgroundForFolder(folder) : backgroundId;

  bool get usesCustomColor => customColor != null;

  bool get darkTheme {
    if (customColor != null) {
      final c = Color(customColor!);
      return c.computeLuminance() < 0.45;
    }
    return _noteBackgroundById(effectiveBackgroundId).darkText;
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'body': body,
        'folder': folder,
        'colorIndex': colorIndex,
        'backgroundId': backgroundId,
        if (customColor != null) 'customColor': customColor,
        'pinned': pinned,
        'icon': icon,
        'createdAt': createdAt.toUtc().toIso8601String(),
        'updatedAt': updatedAt.toUtc().toIso8601String(),
      };

  factory NgmyBusinessNote.fromJson(Map<String, dynamic> json) => NgmyBusinessNote(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? '').toString(),
        body: (json['body'] ?? '').toString(),
        folder: (json['folder'] ?? 'Personal').toString(),
        colorIndex: (json['colorIndex'] as num?)?.toInt().clamp(0, _noteColors.length - 1) ?? 0,
        backgroundId: (json['backgroundId'] ?? '').toString(),
        customColor: (json['customColor'] as num?)?.toInt(),
        pinned: json['pinned'] == true,
        icon: (json['icon'] ?? '📝').toString(),
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
        updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

Future<List<NgmyBusinessNote>> _loadNotes(String userEmail) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_notesKey(userEmail));
    if (raw == null) return [];
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.whereType<Map>().map((e) => NgmyBusinessNote.fromJson(Map<String, dynamic>.from(e))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _saveNotes(String userEmail, List<NgmyBusinessNote> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_notesKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyBusinessNotesCount({required String userEmail}) async => (await _loadNotes(userEmail)).length;

Future<List<NgmyBusinessNote>> ngmyExportBusinessNotes({required String userEmail}) => _loadNotes(userEmail);

Future<void> ngmyImportBusinessNotes({required String userEmail, required List<NgmyBusinessNote> items}) async {
  final existing = await _loadNotes(userEmail);
  final byId = {for (final e in existing) e.id: e};
  for (final item in items) {
    byId[item.id] = item;
  }
  await _saveNotes(userEmail, byId.values.toList());
}

Future<void> showNgmyBusinessNotesDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Notes',
    barrierColor: Colors.black.withValues(alpha: 0.92),
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (_, __, ___) => _BusinessNotesScreen(userEmail: userEmail),
    transitionBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
  );
}

class _BusinessNotesScreen extends StatefulWidget {
  const _BusinessNotesScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_BusinessNotesScreen> createState() => _BusinessNotesScreenState();
}

class _BusinessNotesScreenState extends State<_BusinessNotesScreen> {
  static const _accent = Color(0xFF8B5CF6);

  List<NgmyBusinessNote> _notes = [];
  bool _loading = true;
  String _query = '';
  String _folder = 'All';

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await _loadNotes(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _notes = list;
      _loading = false;
    });
  }

  List<NgmyBusinessNote> get _visible {
    var list = _notes.where((n) {
      if (_folder != 'All' && n.folder != _folder) return false;
      if (_query.trim().isEmpty) return true;
      final q = _query.toLowerCase();
      return n.title.toLowerCase().contains(q) || n.body.toLowerCase().contains(q);
    }).toList();
    list.sort((a, b) {
      if (a.pinned != b.pinned) return a.pinned ? -1 : 1;
      return b.updatedAt.compareTo(a.updatedAt);
    });
    return list;
  }

  Future<void> _pickTemplateAndCreate() async {
    final choice = await Navigator.of(context).push<_NoteCreationChoice>(
      PageRouteBuilder(
        pageBuilder: (_, anim, __) => const _NoteTemplatePickerPage(),
        transitionsBuilder: (_, anim, __, child) => SlideTransition(
          position: Tween<Offset>(begin: const Offset(0, 0.08), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)),
          child: FadeTransition(opacity: anim, child: child),
        ),
      ),
    );
    if (choice == null || !mounted) return;
    final layout = choice.layout;
    final note = NgmyBusinessNote(
      title: layout?.title ?? '',
      body: layout?.body ?? '',
      folder: layout?.folder ?? 'Personal',
      colorIndex: layout?.colorIndex ?? 0,
      backgroundId: choice.backgroundId,
      customColor: choice.customColor,
      icon: layout?.emoji ?? '📝',
    );
    await _openEditor(note: note, isNew: true);
  }

  Future<void> _openEditor({NgmyBusinessNote? note, bool isNew = false}) async {
    final result = await Navigator.of(context).push<NgmyBusinessNote>(
      PageRouteBuilder(
        pageBuilder: (_, anim, __) => _NoteEditorPage(userEmail: widget.userEmail, note: note, isNew: isNew),
        transitionsBuilder: (_, anim, __, child) => SlideTransition(
          position: Tween<Offset>(begin: const Offset(0, 0.04), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)),
          child: FadeTransition(opacity: anim, child: child),
        ),
      ),
    );
    if (result == null) return;
    final items = await _loadNotes(widget.userEmail);
    final i = items.indexWhere((e) => e.id == result.id);
    if (i >= 0) {
      items[i] = result;
    } else {
      items.insert(0, result);
    }
    await _saveNotes(widget.userEmail, items);
    await _reload();
  }

  Future<void> _delete(NgmyBusinessNote note) async {
    final items = await _loadNotes(widget.userEmail);
    items.removeWhere((e) => e.id == note.id);
    await _saveNotes(widget.userEmail, items);
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    final visible = _visible;
    return Material(
      color: const Color(0xFF0B0F19),
      child: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(12)),
                      child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18),
                    ),
                  ),
                  const SizedBox(width: 4),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Notes', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, letterSpacing: -0.5)),
                        Text('Business Essentials', style: TextStyle(color: Color(0xFF94A3B8), fontWeight: FontWeight.w600, fontSize: 12)),
                      ],
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFF6366F1)]),
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [BoxShadow(color: _accent.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4))],
                    ),
                    child: Material(
                      color: Colors.transparent,
                      child: InkWell(
                        onTap: _pickTemplateAndCreate,
                        borderRadius: BorderRadius.circular(16),
                        child: const Padding(
                          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                          child: Row(
                            children: [
                              Icon(Icons.add_rounded, color: Colors.white, size: 20),
                              SizedBox(width: 6),
                              Text('New', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 16, 16, 0),
              child: TextField(
                onChanged: (v) => setState(() => _query = v),
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w500),
                decoration: InputDecoration(
                  hintText: 'Search notes…',
                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                  prefixIcon: Icon(Icons.search_rounded, color: Colors.white.withValues(alpha: 0.4)),
                  filled: true,
                  fillColor: Colors.white.withValues(alpha: 0.07),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                  contentPadding: const EdgeInsets.symmetric(vertical: 12),
                ),
              ),
            ),
            SizedBox(
              height: 44,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
                itemCount: _noteFolders.length,
                separatorBuilder: (_, __) => const SizedBox(width: 8),
                itemBuilder: (_, i) {
                  final f = _noteFolders[i];
                  final sel = _folder == f;
                  return GestureDetector(
                    onTap: () => setState(() => _folder = f),
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                      decoration: BoxDecoration(
                        gradient: sel ? const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFF6366F1)]) : null,
                        color: sel ? null : Colors.white.withValues(alpha: 0.06),
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(color: sel ? Colors.transparent : Colors.white.withValues(alpha: 0.08)),
                      ),
                      child: Text(f, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: sel ? Colors.white : Colors.white54)),
                    ),
                  );
                },
              ),
            ),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator(color: _accent))
                  : visible.isEmpty
                      ? Center(
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Container(
                                padding: const EdgeInsets.all(24),
                                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.04), shape: BoxShape.circle),
                                child: Icon(Icons.note_alt_outlined, size: 48, color: Colors.white.withValues(alpha: 0.2)),
                              ),
                              const SizedBox(height: 16),
                              Text('No notes yet', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontWeight: FontWeight.w800, fontSize: 18)),
                              const SizedBox(height: 8),
                              Text('Pick a template or start blank', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 13)),
                              const SizedBox(height: 20),
                              FilledButton.icon(
                                onPressed: _pickTemplateAndCreate,
                                icon: const Icon(Icons.dashboard_customize_outlined),
                                label: const Text('Browse templates'),
                                style: FilledButton.styleFrom(backgroundColor: _accent, padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12)),
                              ),
                            ],
                          ),
                        )
                      : ListView.builder(
                          padding: const EdgeInsets.fromLTRB(16, 16, 16, 32),
                          itemCount: visible.length,
                          itemBuilder: (_, i) {
                            final n = visible[i];
                            final dark = n.darkTheme;
                            return Padding(
                              padding: const EdgeInsets.only(bottom: 10),
                              child: Dismissible(
                                key: ValueKey(n.id),
                                direction: DismissDirection.endToStart,
                                background: Container(
                                  alignment: Alignment.centerRight,
                                  padding: const EdgeInsets.only(right: 24),
                                  decoration: BoxDecoration(
                                    gradient: LinearGradient(colors: [Colors.transparent, const Color(0xFFEF4444).withValues(alpha: 0.3)]),
                                    borderRadius: BorderRadius.circular(18),
                                  ),
                                  child: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444), size: 26),
                                ),
                                onDismissed: (_) => _delete(n),
                                child: Material(
                                  color: Colors.transparent,
                                  child: InkWell(
                                    onTap: () => _openEditor(note: n),
                                    borderRadius: BorderRadius.circular(18),
                                    child: Stack(
                                      children: [
                                        Positioned.fill(
                                          child: ClipRRect(
                                            borderRadius: BorderRadius.circular(18),
                                            child: _NoteBackgroundLayer(note: n, compact: true),
                                          ),
                                        ),
                                        Container(
                                          padding: const EdgeInsets.all(16),
                                          decoration: BoxDecoration(
                                            borderRadius: BorderRadius.circular(18),
                                            border: Border.all(color: dark ? Colors.white.withValues(alpha: 0.1) : Colors.black.withValues(alpha: 0.05)),
                                          ),
                                          child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Container(
                                            width: 44,
                                            height: 44,
                                            alignment: Alignment.center,
                                            decoration: BoxDecoration(
                                              color: dark ? Colors.white.withValues(alpha: 0.1) : Colors.black.withValues(alpha: 0.04),
                                              borderRadius: BorderRadius.circular(12),
                                            ),
                                            child: Text(n.icon.isEmpty ? '📝' : n.icon, style: const TextStyle(fontSize: 22)),
                                          ),
                                          const SizedBox(width: 14),
                                          Expanded(
                                            child: Column(
                                              crossAxisAlignment: CrossAxisAlignment.start,
                                              children: [
                                                Row(
                                                  children: [
                                                    Expanded(
                                                      child: Text(
                                                        n.preview,
                                                        maxLines: 1,
                                                        overflow: TextOverflow.ellipsis,
                                                        style: TextStyle(color: dark ? Colors.white : const Color(0xFF0F172A), fontWeight: FontWeight.w800, fontSize: 16),
                                                      ),
                                                    ),
                                                    if (n.pinned) const Padding(padding: EdgeInsets.only(left: 6), child: Icon(Icons.push_pin_rounded, size: 14, color: Color(0xFF8B5CF6))),
                                                  ],
                                                ),
                                                const SizedBox(height: 4),
                                                Text(
                                                  n.body.trim().isEmpty ? 'Empty note' : n.body.replaceAll('\n', ' '),
                                                  maxLines: 2,
                                                  overflow: TextOverflow.ellipsis,
                                                  style: TextStyle(color: dark ? Colors.white60 : const Color(0xFF64748B), fontSize: 13, height: 1.35),
                                                ),
                                                const SizedBox(height: 8),
                                                Row(
                                                  children: [
                                                    Container(
                                                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                                      decoration: BoxDecoration(
                                                        color: dark ? Colors.white.withValues(alpha: 0.08) : Colors.black.withValues(alpha: 0.05),
                                                        borderRadius: BorderRadius.circular(8),
                                                      ),
                                                      child: Text(n.folder, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: dark ? Colors.white54 : const Color(0xFF94A3B8))),
                                                    ),
                                                    const Spacer(),
                                                    Text(_formatDate(n.updatedAt), style: TextStyle(color: dark ? Colors.white38 : const Color(0xFF94A3B8), fontSize: 11, fontWeight: FontWeight.w600)),
                                                  ],
                                                ),
                                              ],
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
            ),
          ],
        ),
      ),
    );
  }

  String _formatDate(DateTime d) {
    final now = DateTime.now();
    if (d.year == now.year && d.month == now.month && d.day == now.day) {
      final h = d.hour > 12 ? d.hour - 12 : (d.hour == 0 ? 12 : d.hour);
      final am = d.hour >= 12 ? 'PM' : 'AM';
      return '$h:${d.minute.toString().padLeft(2, '0')} $am';
    }
    return '${d.month}/${d.day}/${d.year % 100}';
  }
}

class _NoteTemplatePickerPage extends StatefulWidget {
  const _NoteTemplatePickerPage();

  @override
  State<_NoteTemplatePickerPage> createState() => _NoteTemplatePickerPageState();
}

class _NoteTemplatePickerPageState extends State<_NoteTemplatePickerPage> with SingleTickerProviderStateMixin {
  late final TabController _tabs;
  String _bgCategory = 'All';

  @override
  void initState() {
    super.initState();
    _tabs = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabs.dispose();
    super.dispose();
  }

  List<_NoteBackgroundDef> get _filteredBackgrounds {
    if (_bgCategory == 'All') return _noteBackgrounds;
    return _noteBackgrounds.where((b) => b.category == _bgCategory).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0B0F19),
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 8, 16, 0),
              child: Row(
                children: [
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Create a note', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                        Text('Pick a beautiful background or layout', style: TextStyle(color: Color(0xFF94A3B8), fontSize: 12, fontWeight: FontWeight.w600)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            TabBar(
              controller: _tabs,
              indicatorColor: const Color(0xFF8B5CF6),
              labelColor: Colors.white,
              unselectedLabelColor: Colors.white54,
              labelStyle: const TextStyle(fontWeight: FontWeight.w800, fontSize: 13),
              tabs: const [Tab(text: 'Designs'), Tab(text: 'Layouts')],
            ),
            Expanded(
              child: TabBarView(
                controller: _tabs,
                children: [
                  Column(
                    children: [
                      SizedBox(
                        height: 42,
                        child: ListView.separated(
                          scrollDirection: Axis.horizontal,
                          padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                          itemCount: _bgCategories.length,
                          separatorBuilder: (_, __) => const SizedBox(width: 8),
                          itemBuilder: (_, i) {
                            final c = _bgCategories[i];
                            final sel = _bgCategory == c;
                            return FilterChip(
                              label: Text(c),
                              selected: sel,
                              onSelected: (_) => setState(() => _bgCategory = c),
                              selectedColor: const Color(0xFF8B5CF6).withValues(alpha: 0.35),
                              backgroundColor: Colors.white.withValues(alpha: 0.06),
                              labelStyle: TextStyle(fontWeight: FontWeight.w700, fontSize: 11, color: sel ? Colors.white : Colors.white54),
                              side: BorderSide(color: sel ? const Color(0xFF8B5CF6) : Colors.white12),
                              showCheckmark: false,
                            );
                          },
                        ),
                      ),
                      Expanded(
                        child: GridView.builder(
                          padding: const EdgeInsets.all(16),
                          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 12, crossAxisSpacing: 12, childAspectRatio: 0.85),
                          itemCount: _filteredBackgrounds.length,
                          itemBuilder: (_, i) {
                            final bg = _filteredBackgrounds[i];
                            return Material(
                              color: Colors.transparent,
                              child: InkWell(
                                onTap: () => Navigator.pop(context, _NoteCreationChoice(backgroundId: bg.id)),
                                borderRadius: BorderRadius.circular(18),
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(18),
                                  child: Stack(
                                    fit: StackFit.expand,
                                    children: [
                                      _NoteBackgroundPreview(backgroundId: bg.id),
                                      DecoratedBox(
                                        decoration: BoxDecoration(
                                          gradient: LinearGradient(
                                            begin: Alignment.topCenter,
                                            end: Alignment.bottomCenter,
                                            colors: [Colors.transparent, Colors.black.withValues(alpha: 0.55)],
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.all(12),
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            if (bg.emojis.isNotEmpty) Text(bg.emojis.first, style: const TextStyle(fontSize: 24)),
                                            const Spacer(),
                                            Text(bg.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                                            Text(bg.category, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 10, fontWeight: FontWeight.w600)),
                                          ],
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
                      ),
                    ],
                  ),
                  GridView.builder(
                    padding: const EdgeInsets.all(16),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 12, crossAxisSpacing: 12, childAspectRatio: 0.92),
                    itemCount: _noteTemplates.length,
                    itemBuilder: (_, i) {
                      final t = _noteTemplates[i];
                      return Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () => Navigator.pop(
                            context,
                            _NoteCreationChoice(
                              layout: t,
                              backgroundId: t.backgroundId.isEmpty ? _defaultBackgroundForFolder(t.folder) : t.backgroundId,
                            ),
                          ),
                          borderRadius: BorderRadius.circular(18),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(18),
                            child: Stack(
                              fit: StackFit.expand,
                              children: [
                                _NoteBackgroundPreview(backgroundId: t.backgroundId.isEmpty ? _defaultBackgroundForFolder(t.folder) : t.backgroundId),
                                Container(
                                  padding: const EdgeInsets.all(14),
                                  color: Colors.black.withValues(alpha: 0.28),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(t.emoji, style: const TextStyle(fontSize: 28)),
                                      const Spacer(),
                                      Text(t.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                                      const SizedBox(height: 4),
                                      Text(
                                        t.body.split('\n').firstWhere((l) => l.trim().isNotEmpty, orElse: () => 'Start fresh'),
                                        maxLines: 2,
                                        overflow: TextOverflow.ellipsis,
                                        style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 11, height: 1.3),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      );
                    },
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

class _NoteEditorPage extends StatefulWidget {
  const _NoteEditorPage({required this.userEmail, this.note, this.isNew = false});
  final String userEmail;
  final NgmyBusinessNote? note;
  final bool isNew;

  @override
  State<_NoteEditorPage> createState() => _NoteEditorPageState();
}

class _NoteEditorPageState extends State<_NoteEditorPage> {
  late NgmyBusinessNote _note;
  late final TextEditingController _title;
  late final TextEditingController _body;
  late final FocusNode _bodyFocus;
  Timer? _autosave;
  bool _dirty = false;
  bool _previewMode = false;

  @override
  void initState() {
    super.initState();
    _note = widget.note ?? NgmyBusinessNote(folder: 'Personal');
    _title = TextEditingController(text: _note.title);
    _body = TextEditingController(text: _note.body);
    _bodyFocus = FocusNode();
    _title.addListener(_markDirty);
    _body.addListener(_markDirty);
  }

  void _markDirty() {
    _dirty = true;
    _autosave?.cancel();
    _autosave = Timer(const Duration(milliseconds: 800), _persist);
  }

  Future<void> _persist() async {
    _note.title = _title.text;
    _note.body = _body.text;
    _note.updatedAt = DateTime.now();
    _dirty = false;
    if (mounted) setState(() {});
  }

  @override
  void dispose() {
    _autosave?.cancel();
    _title.dispose();
    _body.dispose();
    _bodyFocus.dispose();
    super.dispose();
  }

  Future<bool> _onWillPop() async {
    await _persist();
    if (mounted) Navigator.pop(context, _note);
    return false;
  }

  void _insertAtCursor(String text) {
    final t = _body.text;
    final sel = _body.selection;
    final start = sel.start.clamp(0, t.length);
    final end = sel.end.clamp(0, t.length);
    _body.text = t.substring(0, start) + text + t.substring(end);
    _body.selection = TextSelection.collapsed(offset: start + text.length);
    _bodyFocus.requestFocus();
    _markDirty();
  }

  void _wrapSelection(String left, String right) {
    final t = _body.text;
    final sel = _body.selection;
    if (!sel.isValid) {
      _insertAtCursor('$left$right');
      _body.selection = TextSelection.collapsed(offset: sel.start.clamp(0, t.length) + left.length);
      return;
    }
    final s = sel.start.clamp(0, t.length);
    final e = sel.end.clamp(0, t.length);
    if (s == e) {
      _insertAtCursor('$left$right');
      _body.selection = TextSelection.collapsed(offset: s + left.length);
      return;
    }
    final selected = t.substring(s, e);
    _body.text = t.substring(0, s) + left + selected + right + t.substring(e);
    _body.selection = TextSelection(baseOffset: s + left.length, extentOffset: e + left.length);
    _markDirty();
  }

  void _insertLine(String prefix) {
    final t = _body.text;
    final sel = _body.selection;
    final start = sel.start.clamp(0, t.length);
    final lineStart = t.lastIndexOf('\n', start - 1) + 1;
    final before = t.substring(0, lineStart);
    final after = t.substring(lineStart);
    _body.text = before + prefix + after;
    _body.selection = TextSelection.collapsed(offset: (before + prefix).length);
    _markDirty();
  }

  void _toggleCheckbox() {
    final t = _body.text;
    final sel = _body.selection;
    final start = sel.start.clamp(0, t.length);
    final lineStart = t.lastIndexOf('\n', start - 1) + 1;
    final lineEnd = t.indexOf('\n', start);
    final end = lineEnd == -1 ? t.length : lineEnd;
    var line = t.substring(lineStart, end);
    if (line.startsWith('- [ ] ')) {
      line = line.replaceFirst('- [ ] ', '- [x] ');
    } else if (line.startsWith('- [x] ')) {
      line = line.replaceFirst('- [x] ', '- [ ] ');
    } else {
      line = '- [ ] $line';
    }
    _body.text = t.substring(0, lineStart) + line + t.substring(end);
    _markDirty();
  }

  Future<void> _showEmojiPicker() async {
    final picked = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF1E293B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
              const SizedBox(height: 12),
              const Text('Insert emoji', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
              const SizedBox(height: 12),
              ..._emojiCategories.entries.map((entry) {
                return Padding(
                  padding: const EdgeInsets.only(bottom: 12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(entry.key, style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w700, fontSize: 11)),
                      const SizedBox(height: 6),
                      Wrap(
                        spacing: 4,
                        runSpacing: 4,
                        children: entry.value.map((e) {
                          return InkWell(
                            onTap: () => Navigator.pop(ctx, e),
                            borderRadius: BorderRadius.circular(10),
                            child: Container(
                              width: 40,
                              height: 40,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(10)),
                              child: Text(e, style: const TextStyle(fontSize: 22)),
                            ),
                          );
                        }).toList(),
                      ),
                    ],
                  ),
                );
              }),
            ],
          ),
        ),
      ),
    );
    if (picked != null) {
      if (_bodyFocus.hasFocus || _body.text.isNotEmpty) {
        _insertAtCursor(picked);
      } else {
        setState(() => _note.icon = picked);
      }
    }
  }

  Future<void> _showInsertTemplate() async {
    final t = await showModalBottomSheet<_NoteTemplate>(
      context: context,
      backgroundColor: const Color(0xFF1E293B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      isScrollControlled: true,
      builder: (ctx) => DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.55,
        maxChildSize: 0.85,
        builder: (_, scroll) => Column(
          children: [
            const SizedBox(height: 12),
            Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2))),
            const Padding(
              padding: EdgeInsets.all(16),
              child: Text('Insert template block', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
            ),
            Expanded(
              child: ListView.builder(
                controller: scroll,
                itemCount: _noteTemplates.where((t) => t.id != 'blank').length,
                itemBuilder: (_, i) {
                  final t = _noteTemplates.where((t) => t.id != 'blank').elementAt(i);
                  return ListTile(
                    leading: Text(t.emoji, style: const TextStyle(fontSize: 24)),
                    title: Text(t.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                    subtitle: Text(t.body.split('\n').take(2).join(' '), maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white38, fontSize: 11)),
                    onTap: () => Navigator.pop(ctx, t),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
    if (t != null) {
      _insertAtCursor('\n\n--- ${t.label} ---\n${t.body}\n');
    }
  }

  Future<void> _showBackgroundPicker() async {
    final picked = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0B0F19),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.72,
        maxChildSize: 0.92,
        builder: (_, scroll) => Column(
          children: [
            const SizedBox(height: 10),
            Container(width: 44, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2))),
            const Padding(
              padding: EdgeInsets.all(16),
              child: Text('Note backgrounds', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
            ),
            Expanded(
              child: GridView.builder(
                controller: scroll,
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 10, crossAxisSpacing: 10, childAspectRatio: 0.82),
                itemCount: _noteBackgrounds.length,
                itemBuilder: (_, i) {
                  final bg = _noteBackgrounds[i];
                  final sel = _note.effectiveBackgroundId == bg.id && !_note.usesCustomColor;
                  return GestureDetector(
                    onTap: () => Navigator.pop(ctx, bg.id),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(14),
                      child: Stack(
                        fit: StackFit.expand,
                        children: [
                          _NoteBackgroundPreview(backgroundId: bg.id),
                          if (sel) Container(color: Colors.white.withValues(alpha: 0.18), child: const Center(child: Icon(Icons.check_circle_rounded, color: Colors.white))),
                          Align(
                            alignment: Alignment.bottomLeft,
                            child: Container(
                              width: double.infinity,
                              color: Colors.black.withValues(alpha: 0.45),
                              padding: const EdgeInsets.all(6),
                              child: Text(bg.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w700)),
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
    if (picked != null) setState(() {
      _note.backgroundId = picked;
      _note.customColor = null;
    });
  }

  Future<void> _showCustomColorPicker() async {
    var hue = HSVColor.fromColor(_note.customColor != null ? Color(_note.customColor!) : Colors.blue).hue;
    var sat = HSVColor.fromColor(_note.customColor != null ? Color(_note.customColor!) : Colors.blue).saturation;
    var val = HSVColor.fromColor(_note.customColor != null ? Color(_note.customColor!) : Colors.blue).value;
    final picked = await showModalBottomSheet<int>(
      context: context,
      backgroundColor: const Color(0xFF1E293B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setLocal) {
          final preview = HSVColor.fromAHSV(1, hue, sat, val).toColor();
          return SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Center(child: Container(width: 44, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
                  const SizedBox(height: 16),
                  const Text('Pick any color', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                  const SizedBox(height: 14),
                  Container(
                    height: 56,
                    decoration: BoxDecoration(color: preview, borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white24)),
                  ),
                  const SizedBox(height: 14),
                  Text('Hue', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w700, fontSize: 11)),
                  Slider(value: hue, min: 0, max: 360, activeColor: preview, onChanged: (v) => setLocal(() => hue = v)),
                  Text('Saturation', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w700, fontSize: 11)),
                  Slider(value: sat, min: 0, max: 1, activeColor: preview, onChanged: (v) => setLocal(() => sat = v)),
                  Text('Brightness', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w700, fontSize: 11)),
                  Slider(value: val, min: 0.1, max: 1, activeColor: preview, onChanged: (v) => setLocal(() => val = v)),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      for (final c in const [
                        0xFFEF4444, 0xFFF97316, 0xFFFBBF24, 0xFF22C55E, 0xFF06B6D4, 0xFF3B82F6,
                        0xFF8B5CF6, 0xFFEC4899, 0xFF78716C, 0xFF0F172A, 0xFFFFFFFF, 0xFFFBCFE8,
                      ])
                        GestureDetector(
                          onTap: () => Navigator.pop(ctx, c),
                          child: Container(width: 32, height: 32, decoration: BoxDecoration(color: Color(c), shape: BoxShape.circle, border: Border.all(color: Colors.white24))),
                        ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  FilledButton(
                    onPressed: () => Navigator.pop(ctx, preview.toARGB32()),
                    style: FilledButton.styleFrom(backgroundColor: const Color(0xFF8B5CF6), padding: const EdgeInsets.symmetric(vertical: 14)),
                    child: const Text('Use this color', style: TextStyle(fontWeight: FontWeight.w800)),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
    if (picked != null) setState(() {
      _note.customColor = picked;
      _note.backgroundId = '';
    });
  }

  Future<void> _showActions() async {
    final action = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF1E293B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(8, 12, 8, 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2))),
              _actionTile(Icons.copy_rounded, 'Copy note', 'copy'),
              _actionTile(Icons.share_outlined, 'Share', 'share'),
              _actionTile(_note.pinned ? Icons.push_pin_rounded : Icons.push_pin_outlined, _note.pinned ? 'Unpin' : 'Pin note', 'pin'),
              const Divider(color: Colors.white12),
              ..._noteFolders.where((f) => f != 'All').map((f) => _actionTile(Icons.folder_outlined, 'Move to $f', 'folder:$f')),
              const Divider(color: Colors.white12),
              _actionTile(Icons.delete_outline_rounded, 'Delete note', 'delete', destructive: true),
            ],
          ),
        ),
      ),
    );
    if (action == null || !mounted) return;
    if (action == 'copy') {
      await Clipboard.setData(ClipboardData(text: '${_title.text}\n\n${_body.text}'));
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Copied to clipboard')));
    } else if (action == 'share') {
      await Clipboard.setData(ClipboardData(text: '${_title.text}\n\n${_body.text}'));
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Note copied — paste to share')));
    } else if (action == 'pin') {
      setState(() => _note.pinned = !_note.pinned);
    } else if (action.startsWith('folder:')) {
      setState(() => _note.folder = action.substring(7));
    } else if (action == 'delete') {
      await _persist();
      if (mounted) Navigator.pop(context, null);
    }
  }

  Widget _actionTile(IconData icon, String label, String value, {bool destructive = false}) {
    return ListTile(
      leading: Icon(icon, color: destructive ? const Color(0xFFEF4444) : Colors.white70),
      title: Text(label, style: TextStyle(color: destructive ? const Color(0xFFEF4444) : Colors.white, fontWeight: FontWeight.w600)),
      onTap: () => Navigator.pop(context, value),
    );
  }

  @override
  Widget build(BuildContext context) {
    final dark = _note.darkTheme;
    final fg = dark ? Colors.white : const Color(0xFF0F172A);
    final muted = dark ? Colors.white60 : const Color(0xFF64748B);

    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) _onWillPop();
      },
      child: Scaffold(
        body: Stack(
          fit: StackFit.expand,
          children: [
            _NoteBackgroundLayer(note: _note),
            SafeArea(
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(4, 4, 8, 0),
                    child: Row(
                      children: [
                        IconButton(
                          icon: Icon(Icons.arrow_back_ios_new_rounded, color: fg, size: 20),
                          onPressed: _onWillPop,
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                          decoration: BoxDecoration(color: dark ? Colors.white.withValues(alpha: 0.12) : Colors.black.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(10)),
                          child: Text(_note.folder, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: muted)),
                        ),
                        const Spacer(),
                        _headerBtn(
                          icon: _previewMode ? Icons.edit_rounded : Icons.visibility_rounded,
                          label: _previewMode ? 'Edit' : 'Preview',
                          fg: fg,
                          onTap: () => setState(() => _previewMode = !_previewMode),
                        ),
                        IconButton(
                          icon: Icon(_note.pinned ? Icons.push_pin_rounded : Icons.push_pin_outlined, color: _note.pinned ? const Color(0xFF8B5CF6) : muted, size: 20),
                          onPressed: () => setState(() => _note.pinned = !_note.pinned),
                        ),
                        IconButton(
                          icon: Icon(Icons.more_horiz_rounded, color: muted),
                          onPressed: _showActions,
                        ),
                      ],
                    ),
                  ),
                  Container(
                    margin: const EdgeInsets.fromLTRB(12, 4, 12, 0),
                    padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 6),
                    decoration: BoxDecoration(
                      color: dark ? Colors.black.withValues(alpha: 0.22) : Colors.white.withValues(alpha: 0.72),
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: Row(
                        children: [
                          _tool(Icons.format_bold_rounded, 'Bold', () => _wrapSelection('**', '**'), fg),
                          _tool(Icons.format_italic_rounded, 'Italic', () => _wrapSelection('_', '_'), fg),
                          _tool(Icons.format_underlined_rounded, 'Underline', () => _wrapSelection('<u>', '</u>'), fg),
                          _tool(Icons.format_list_bulleted_rounded, 'List', () => _insertLine('• '), fg),
                          _tool(Icons.format_list_numbered_rounded, 'Number', () => _insertLine('1. '), fg),
                          _tool(Icons.check_box_outlined, 'Check', _toggleCheckbox, fg),
                          _tool(Icons.title_rounded, 'Heading', () => _insertLine('# '), fg),
                          _tool(Icons.format_quote_rounded, 'Quote', () => _insertLine('> '), fg),
                          _tool(Icons.horizontal_rule_rounded, 'Line', () => _insertAtCursor('\n---\n'), fg),
                          _tool(Icons.emoji_emotions_outlined, 'Emoji', _showEmojiPicker, fg),
                          _tool(Icons.dashboard_customize_outlined, 'Template', _showInsertTemplate, fg),
                          _tool(Icons.wallpaper_rounded, 'Background', _showBackgroundPicker, fg),
                          _tool(Icons.palette_rounded, 'Any color', _showCustomColorPicker, fg),
                        ],
                      ),
                    ),
                  ),
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20, 8, 20, 12),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              GestureDetector(
                                onTap: _showEmojiPicker,
                                child: Text(_note.icon.isEmpty ? '📝' : _note.icon, style: const TextStyle(fontSize: 28)),
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: TextField(
                                  controller: _title,
                                  enabled: !_previewMode,
                                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: fg, letterSpacing: -0.5),
                                  decoration: InputDecoration(
                                    hintText: 'Title',
                                    hintStyle: TextStyle(color: dark ? Colors.white30 : const Color(0xFFCBD5E1)),
                                    border: InputBorder.none,
                                    isDense: true,
                                    contentPadding: EdgeInsets.zero,
                                  ),
                                  maxLines: 2,
                                ),
                              ),
                            ],
                          ),
                          Text(_formatDate(_note.updatedAt), style: TextStyle(fontSize: 11, color: muted, fontWeight: FontWeight.w600)),
                          const SizedBox(height: 8),
                          Expanded(
                            child: _previewMode
                                ? SingleChildScrollView(child: _NoteMarkdownPreview(text: _body.text, dark: dark))
                                : TextField(
                                    controller: _body,
                                    focusNode: _bodyFocus,
                                    style: TextStyle(fontSize: 16, height: 1.55, color: dark ? Colors.white.withValues(alpha: 0.92) : const Color(0xFF334155)),
                                    decoration: InputDecoration(
                                      hintText: 'Start writing…',
                                      hintStyle: TextStyle(color: dark ? Colors.white30 : const Color(0xFFCBD5E1)),
                                      border: InputBorder.none,
                                    ),
                                    maxLines: null,
                                    expands: true,
                                    textAlignVertical: TextAlignVertical.top,
                                  ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  if (_dirty)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SizedBox(width: 12, height: 12, child: CircularProgressIndicator(strokeWidth: 2, color: muted)),
                          const SizedBox(width: 8),
                          Text('Saving…', style: TextStyle(fontSize: 11, color: muted, fontWeight: FontWeight.w600)),
                        ],
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

  Widget _headerBtn({required IconData icon, required String label, required Color fg, required VoidCallback onTap}) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(10),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          child: Row(
            children: [
              Icon(icon, size: 18, color: fg),
              const SizedBox(width: 4),
              Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: fg)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _tool(IconData icon, String tip, VoidCallback onTap, Color fg) {
    return Tooltip(
      message: tip,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(10),
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Icon(icon, size: 20, color: fg.withValues(alpha: 0.85)),
          ),
        ),
      ),
    );
  }

  String _formatDate(DateTime d) {
    final local = d.toLocal();
    final months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    final h = local.hour > 12 ? local.hour - 12 : (local.hour == 0 ? 12 : local.hour);
    final am = local.hour >= 12 ? 'PM' : 'AM';
    return '${months[local.month - 1]} ${local.day}, ${local.year} · $h:${local.minute.toString().padLeft(2, '0')} $am';
  }
}

class _NoteMarkdownPreview extends StatelessWidget {
  const _NoteMarkdownPreview({required this.text, required this.dark});
  final String text;
  final bool dark;

  @override
  Widget build(BuildContext context) {
    if (text.trim().isEmpty) {
      return Text('Nothing to preview yet', style: TextStyle(color: dark ? Colors.white38 : const Color(0xFF94A3B8), fontStyle: FontStyle.italic));
    }
    final fg = dark ? Colors.white.withValues(alpha: 0.92) : const Color(0xFF334155);
    final lines = text.split('\n');
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: lines.map((line) => _lineWidget(line, fg)).toList(),
    );
  }

  Widget _lineWidget(String line, Color fg) {
    if (line.trim() == '---') {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Container(height: 1, color: fg.withValues(alpha: 0.2)),
      );
    }
    if (line.startsWith('# ')) {
      return Padding(
        padding: const EdgeInsets.only(bottom: 8, top: 4),
        child: Text(line.substring(2), style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: fg)),
      );
    }
    if (line.startsWith('> ')) {
      return Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
        decoration: BoxDecoration(
          border: Border(left: BorderSide(color: fg.withValues(alpha: 0.35), width: 3)),
          color: fg.withValues(alpha: 0.06),
          borderRadius: BorderRadius.circular(4),
        ),
        child: _inline(line.substring(2), fg, baseSize: 15, baseWeight: FontWeight.w500),
      );
    }
    if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
      final checked = line.startsWith('- [x] ');
      final label = line.substring(6);
      return Padding(
        padding: const EdgeInsets.only(bottom: 6),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(checked ? Icons.check_box_rounded : Icons.check_box_outline_blank_rounded, size: 20, color: checked ? const Color(0xFF8B5CF6) : fg.withValues(alpha: 0.5)),
            const SizedBox(width: 8),
            Expanded(child: Text(label, style: TextStyle(fontSize: 15, color: fg, decoration: checked ? TextDecoration.lineThrough : null, decorationColor: fg.withValues(alpha: 0.5)))),
          ],
        ),
      );
    }
    if (line.startsWith('• ') || line.startsWith('- ')) {
      return Padding(
        padding: const EdgeInsets.only(bottom: 4, left: 4),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('• ', style: TextStyle(fontSize: 15, color: fg.withValues(alpha: 0.6))),
            Expanded(child: _inline(line.substring(2), fg)),
          ],
        ),
      );
    }
    if (RegExp(r'^\d+\. ').hasMatch(line)) {
      final dot = line.indexOf('. ');
      return Padding(
        padding: const EdgeInsets.only(bottom: 4, left: 4),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('${line.substring(0, dot + 1)} ', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: fg.withValues(alpha: 0.7))),
            Expanded(child: _inline(line.substring(dot + 2), fg)),
          ],
        ),
      );
    }
    if (line.trim().isEmpty) return const SizedBox(height: 10);
    return Padding(padding: const EdgeInsets.only(bottom: 6), child: _inline(line, fg));
  }

  Widget _inline(String raw, Color fg, {double baseSize = 15, FontWeight baseWeight = FontWeight.w400}) {
    final spans = <InlineSpan>[];
    var i = 0;
    while (i < raw.length) {
      if (raw.startsWith('**', i)) {
        final end = raw.indexOf('**', i + 2);
        if (end != -1) {
          spans.add(TextSpan(text: raw.substring(i + 2, end), style: TextStyle(fontWeight: FontWeight.w800, color: fg, fontSize: baseSize)));
          i = end + 2;
          continue;
        }
      }
      if (raw.startsWith('_', i)) {
        final end = raw.indexOf('_', i + 1);
        if (end != -1) {
          spans.add(TextSpan(text: raw.substring(i + 1, end), style: TextStyle(fontStyle: FontStyle.italic, color: fg, fontSize: baseSize)));
          i = end + 1;
          continue;
        }
      }
      if (raw.startsWith('<u>', i)) {
        final end = raw.indexOf('</u>', i);
        if (end != -1) {
          spans.add(TextSpan(text: raw.substring(i + 3, end), style: TextStyle(decoration: TextDecoration.underline, color: fg, fontSize: baseSize)));
          i = end + 4;
          continue;
        }
      }
      final nextSpecial = _nextSpecial(raw, i);
      spans.add(TextSpan(text: raw.substring(i, nextSpecial), style: TextStyle(color: fg, fontSize: baseSize, fontWeight: baseWeight)));
      i = nextSpecial;
    }
    return RichText(text: TextSpan(children: spans));
  }

  int _nextSpecial(String s, int from) {
    final indices = [
      if (s.indexOf('**', from) >= 0) s.indexOf('**', from),
      if (s.indexOf('_', from) >= 0) s.indexOf('_', from),
      if (s.indexOf('<u>', from) >= 0) s.indexOf('<u>', from),
    ];
    if (indices.isEmpty) return s.length;
    return indices.reduce((a, b) => a < b ? a : b);
  }
}

class _NoteBackgroundPreview extends StatelessWidget {
  const _NoteBackgroundPreview({required this.backgroundId, this.compact = false});
  final String backgroundId;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    return _NoteBackgroundLayer(backgroundId: backgroundId, compact: compact);
  }
}

class _NoteBackgroundLayer extends StatelessWidget {
  const _NoteBackgroundLayer({this.note, this.backgroundId, this.compact = false});
  final NgmyBusinessNote? note;
  final String? backgroundId;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    if (note?.usesCustomColor == true) {
      return ColoredBox(color: Color(note!.customColor!));
    }
    final id = backgroundId ?? note?.effectiveBackgroundId ?? _noteBackgrounds.first.id;
    final def = _noteBackgroundById(id);
    return Stack(
      fit: StackFit.expand,
      children: [
        DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: def.colors,
            ),
          ),
        ),
        CustomPaint(painter: _NoteBackgroundPainter(def.pattern)),
        ..._decorEmojis(def.emojis, compact),
      ],
    );
  }

  List<Widget> _decorEmojis(List<String> emojis, bool compact) {
    if (emojis.isEmpty) return const [];
    final positions = compact
        ? [Alignment.topRight, Alignment.bottomLeft]
        : [Alignment.topRight, Alignment.centerLeft, Alignment.bottomRight, Alignment.topLeft];
    return List.generate(emojis.length.clamp(0, positions.length), (i) {
      return Align(
        alignment: positions[i],
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Text(emojis[i], style: TextStyle(fontSize: compact ? 28 : 42, color: Colors.white.withValues(alpha: 0.18))),
        ),
      );
    });
  }
}

class _NoteBackgroundPainter extends CustomPainter {
  _NoteBackgroundPainter(this.pattern);
  final _NoteBgPattern pattern;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..style = PaintingStyle.fill;
    switch (pattern) {
      case _NoteBgPattern.rain:
        paint.color = Colors.white.withValues(alpha: 0.18);
        for (var x = 0.0; x < size.width; x += 14) {
          for (var y = (x % 28) / 2; y < size.height; y += 22) {
            canvas.drawLine(Offset(x, y), Offset(x - 3, y + 10), paint..strokeWidth = 1.4);
          }
        }
      case _NoteBgPattern.waves:
        paint.color = Colors.white.withValues(alpha: 0.14);
        paint.style = PaintingStyle.stroke;
        paint.strokeWidth = 2;
        for (var i = 0; i < 5; i++) {
          final path = Path();
          final baseY = size.height * (0.45 + i * 0.11);
          path.moveTo(0, baseY);
          for (var x = 0.0; x <= size.width; x += 18) {
            path.quadraticBezierTo(x + 9, baseY + (i.isEven ? 10 : -10), x + 18, baseY);
          }
          canvas.drawPath(path, paint);
        }
      case _NoteBgPattern.grass:
        paint.color = Colors.white.withValues(alpha: 0.16);
        paint.strokeWidth = 2;
        paint.style = PaintingStyle.stroke;
        for (var x = 0.0; x < size.width; x += 10) {
          final h = 12 + (x % 18);
          canvas.drawLine(Offset(x, size.height), Offset(x - 3, size.height - h), paint);
          canvas.drawLine(Offset(x + 4, size.height), Offset(x + 7, size.height - h * 0.8), paint);
        }
      case _NoteBgPattern.stars:
        paint.color = Colors.white.withValues(alpha: 0.35);
        for (var i = 0; i < 28; i++) {
          final dx = (i * 37.0) % size.width;
          final dy = (i * 53.0) % size.height;
          canvas.drawCircle(Offset(dx, dy), 1.2 + (i % 3), paint);
        }
      case _NoteBgPattern.grid:
        paint.color = Colors.black.withValues(alpha: 0.05);
        paint.strokeWidth = 1;
        paint.style = PaintingStyle.stroke;
        for (var x = 0.0; x < size.width; x += 18) {
          canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
        }
        for (var y = 0.0; y < size.height; y += 18) {
          canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
        }
      case _NoteBgPattern.bokeh:
        paint.style = PaintingStyle.fill;
        for (var i = 0; i < 10; i++) {
          paint.color = Colors.white.withValues(alpha: 0.08 + (i % 3) * 0.03);
          final r = 18.0 + (i % 4) * 14;
          canvas.drawCircle(Offset((i * 67.0) % size.width, (i * 43.0) % size.height), r, paint);
        }
      case _NoteBgPattern.none:
        break;
    }
  }

  @override
  bool shouldRepaint(covariant _NoteBackgroundPainter oldDelegate) => oldDelegate.pattern != pattern;
}
