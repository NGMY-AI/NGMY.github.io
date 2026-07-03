import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

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

enum _NoteBgPattern { none, rain, waves, grass, stars, grid, bokeh, snow, fireflies, petals, fish, aurora, lightning, clouds, leaves }

enum _NoteBgAnimOverlay { none, butterflies, birds, fish, fireflies, clouds, leaves, petals, snow, aurora }

class _NoteBackgroundDef {
  const _NoteBackgroundDef({
    required this.id,
    required this.label,
    required this.category,
    required this.colors,
    this.pattern = _NoteBgPattern.none,
    this.overlay = _NoteBgAnimOverlay.none,
    this.emojis = const [],
    this.floatingEmojis = const [],
    this.darkText = false,
  });

  final String id;
  final String label;
  final String category;
  final List<Color> colors;
  final _NoteBgPattern pattern;
  final _NoteBgAnimOverlay overlay;
  final List<String> emojis;
  /// Theme-accurate animated creatures/objects for this design (flowers, animals, etc.)
  final List<String> floatingEmojis;
  final bool darkText;
}

const _noteBackgrounds = <_NoteBackgroundDef>[
  _NoteBackgroundDef(id: 'sunrise_meadow', label: 'Sunrise Meadow', category: 'Personal', colors: [Color(0xFFFFF7ED), Color(0xFFBBF7D0), Color(0xFF86EFAC)], pattern: _NoteBgPattern.grass, emojis: ['🌅', '🌿'], floatingEmojis: ['🌼', '🌿', '🦋']),
  _NoteBackgroundDef(id: 'ocean_waves', label: 'Ocean Waves', category: 'Nature', colors: [Color(0xFF0EA5E9), Color(0xFF0369A1), Color(0xFF1E3A8A)], pattern: _NoteBgPattern.waves, overlay: _NoteBgAnimOverlay.fish, emojis: ['🌊'], floatingEmojis: ['🐟', '🐠', '🐬'], darkText: true),
  _NoteBackgroundDef(id: 'rainforest', label: 'Rainforest', category: 'Nature', colors: [Color(0xFF14532D), Color(0xFF166534), Color(0xFF052E16)], pattern: _NoteBgPattern.leaves, overlay: _NoteBgAnimOverlay.leaves, emojis: ['🌳', '🦜'], floatingEmojis: ['🦜', '🌿', '🐒'], darkText: true),
  _NoteBackgroundDef(id: 'cherry_blossom', label: 'Cherry Blossom', category: 'Personal', colors: [Color(0xFFFDF2F8), Color(0xFFFBCFE8), Color(0xFFF472B6)], pattern: _NoteBgPattern.petals, overlay: _NoteBgAnimOverlay.petals, emojis: ['🌸'], floatingEmojis: ['🌸', '🌸', '🌸']),
  _NoteBackgroundDef(id: 'starry_night', label: 'Starry Night', category: 'Personal', colors: [Color(0xFF1E1B4B), Color(0xFF312E81), Color(0xFF0F172A)], pattern: _NoteBgPattern.stars, overlay: _NoteBgAnimOverlay.aurora, emojis: ['🌙'], floatingEmojis: ['✨', '🌙'], darkText: true),
  _NoteBackgroundDef(id: 'rain_drops', label: 'Rainy Day', category: 'Nature', colors: [Color(0xFFCBD5E1), Color(0xFF64748B), Color(0xFF334155)], pattern: _NoteBgPattern.rain, overlay: _NoteBgAnimOverlay.clouds, emojis: ['☔'], darkText: true),
  _NoteBackgroundDef(id: 'mountain_mist', label: 'Mountain Mist', category: 'Nature', colors: [Color(0xFFE2E8F0), Color(0xFF94A3B8), Color(0xFF475569)], pattern: _NoteBgPattern.clouds, overlay: _NoteBgAnimOverlay.clouds, emojis: ['🏔️']),
  _NoteBackgroundDef(id: 'tropical_beach', label: 'Tropical Beach', category: 'Personal', colors: [Color(0xFF67E8F9), Color(0xFF22D3EE), Color(0xFFFDE68A)], pattern: _NoteBgPattern.waves, emojis: ['🏝️', '🌴'], floatingEmojis: ['🌴', '🦜', '🏝️']),
  _NoteBackgroundDef(id: 'butterfly_garden', label: 'Butterfly Garden', category: 'Personal', colors: [Color(0xFFFEF9C3), Color(0xFFFDE68A), Color(0xFFF0ABFC)], pattern: _NoteBgPattern.bokeh, overlay: _NoteBgAnimOverlay.petals, emojis: ['🌺'], floatingEmojis: ['🦋', '🦋', '🌺']),
  _NoteBackgroundDef(id: 'koi_pond', label: 'Koi Pond', category: 'Nature', colors: [Color(0xFF99F6E4), Color(0xFF2DD4BF), Color(0xFF0F766E)], pattern: _NoteBgPattern.waves, overlay: _NoteBgAnimOverlay.fish, emojis: ['🪷'], floatingEmojis: ['🐟', '🪷']),
  _NoteBackgroundDef(id: 'safari_sunset', label: 'Safari Sunset', category: 'Nature', colors: [Color(0xFFFDBA74), Color(0xFFEA580C), Color(0xFF7C2D12)], pattern: _NoteBgPattern.bokeh, emojis: ['🦁', '🦒'], floatingEmojis: ['🦁', '🦒', '🐘'], darkText: true),
  _NoteBackgroundDef(id: 'waterfall_mist', label: 'Waterfall', category: 'Nature', colors: [Color(0xFFBAE6FD), Color(0xFF38BDF8), Color(0xFF0284C7)], pattern: _NoteBgPattern.rain, overlay: _NoteBgAnimOverlay.clouds, emojis: ['💧'], floatingEmojis: ['💧']),
  _NoteBackgroundDef(id: 'executive_blue', label: 'Executive Blue', category: 'Work', colors: [Color(0xFFEFF6FF), Color(0xFFBFDBFE), Color(0xFF93C5FD)], pattern: _NoteBgPattern.grid, emojis: ['💼']),
  _NoteBackgroundDef(id: 'boardroom_slate', label: 'Boardroom', category: 'Work', colors: [Color(0xFF334155), Color(0xFF1E293B), Color(0xFF0F172A)], pattern: _NoteBgPattern.none, emojis: ['📊'], darkText: true),
  _NoteBackgroundDef(id: 'graph_paper', label: 'Graph Paper', category: 'Work', colors: [Color(0xFFFFFFFF), Color(0xFFF8FAFC), Color(0xFFE2E8F0)], pattern: _NoteBgPattern.grid, emojis: ['📐']),
  _NoteBackgroundDef(id: 'conference_cream', label: 'Conference', category: 'Meeting', colors: [Color(0xFFFFFBEB), Color(0xFFFEF3C7), Color(0xFFFDE68A)], pattern: _NoteBgPattern.none, emojis: ['🤝']),
  _NoteBackgroundDef(id: 'calendar_blue', label: 'Calendar', category: 'Meeting', colors: [Color(0xFFF0F9FF), Color(0xFFDBEAFE), Color(0xFFBFDBFE)], pattern: _NoteBgPattern.grid, emojis: ['📅']),
  _NoteBackgroundDef(id: 'brainstorm_aurora', label: 'Aurora Ideas', category: 'Ideas', colors: [Color(0xFF4ADE80), Color(0xFF818CF8), Color(0xFF312E81)], pattern: _NoteBgPattern.aurora, overlay: _NoteBgAnimOverlay.aurora, emojis: ['💡'], floatingEmojis: ['💡', '✨'], darkText: true),
  _NoteBackgroundDef(id: 'cosmos_purple', label: 'Cosmos', category: 'Ideas', colors: [Color(0xFF581C87), Color(0xFF7E22CE), Color(0xFF1E1B4B)], pattern: _NoteBgPattern.stars, overlay: _NoteBgAnimOverlay.aurora, emojis: ['🚀'], floatingEmojis: ['🚀', '✨'], darkText: true),
  _NoteBackgroundDef(id: 'lightning_storm', label: 'Lightning', category: 'Ideas', colors: [Color(0xFF1E293B), Color(0xFF334155), Color(0xFFCA8A04)], pattern: _NoteBgPattern.lightning, overlay: _NoteBgAnimOverlay.clouds, emojis: ['⚡'], darkText: true),
  _NoteBackgroundDef(id: 'wildlife_forest', label: 'Wildlife', category: 'Nature', colors: [Color(0xFF365314), Color(0xFF4D7C0F), Color(0xFF14532D)], pattern: _NoteBgPattern.grass, overlay: _NoteBgAnimOverlay.leaves, emojis: ['🦊'], floatingEmojis: ['🦊', '🐿️', '🦌'], darkText: true),
  // ── 20 new animated designs ──
  _NoteBackgroundDef(id: 'lavender_fields', label: 'Lavender Fields', category: 'Personal', colors: [Color(0xFFEDE9FE), Color(0xFFC4B5FD), Color(0xFF8B5CF6)], pattern: _NoteBgPattern.petals, overlay: _NoteBgAnimOverlay.petals, emojis: ['💜'], floatingEmojis: ['💜', '🌸', '💕']),
  _NoteBackgroundDef(id: 'snowy_peaks', label: 'Snowy Peaks', category: 'Nature', colors: [Color(0xFFF1F5F9), Color(0xFFCBD5E1), Color(0xFF64748B)], pattern: _NoteBgPattern.snow, overlay: _NoteBgAnimOverlay.snow, emojis: ['🏔️'], floatingEmojis: ['❄️', '🏔️']),
  _NoteBackgroundDef(id: 'hummingbird', label: 'Hummingbird', category: 'Nature', colors: [Color(0xFFECFDF5), Color(0xFF6EE7B7), Color(0xFF059669)], pattern: _NoteBgPattern.leaves, overlay: _NoteBgAnimOverlay.leaves, emojis: ['🌺'], floatingEmojis: ['🐦', '🌺']),
  _NoteBackgroundDef(id: 'coral_reef', label: 'Coral Reef', category: 'Nature', colors: [Color(0xFFF97316), Color(0xFFFB7185), Color(0xFF0EA5E9)], pattern: _NoteBgPattern.waves, overlay: _NoteBgAnimOverlay.fish, emojis: ['🪸'], floatingEmojis: ['🐠', '🪸', '🐟'], darkText: true),
  _NoteBackgroundDef(id: 'desert_dusk', label: 'Desert Dusk', category: 'Nature', colors: [Color(0xFFFDE68A), Color(0xFFF97316), Color(0xFF7C2D12)], pattern: _NoteBgPattern.bokeh, emojis: ['🌵'], floatingEmojis: ['🌵', '🦅', '🦎'], darkText: true),
  _NoteBackgroundDef(id: 'bamboo_grove', label: 'Bamboo Grove', category: 'Nature', colors: [Color(0xFFDCFCE7), Color(0xFF86EFAC), Color(0xFF166534)], pattern: _NoteBgPattern.grass, overlay: _NoteBgAnimOverlay.leaves, emojis: ['🎋'], floatingEmojis: ['🎋', '🎋', '🎋']),
  _NoteBackgroundDef(id: 'firefly_night', label: 'Firefly Night', category: 'Personal', colors: [Color(0xFF1E3A5F), Color(0xFF0F172A), Color(0xFF312E81)], pattern: _NoteBgPattern.fireflies, overlay: _NoteBgAnimOverlay.fireflies, emojis: ['🌙'], floatingEmojis: ['✨'], darkText: true),
  _NoteBackgroundDef(id: 'rose_garden', label: 'Rose Garden', category: 'Personal', colors: [Color(0xFFFECDD3), Color(0xFFFB7185), Color(0xFFBE123C)], pattern: _NoteBgPattern.petals, overlay: _NoteBgAnimOverlay.petals, emojis: ['🌹'], floatingEmojis: ['🌹', '💕', '🌹']),
  _NoteBackgroundDef(id: 'moonlit_lake', label: 'Moonlit Lake', category: 'Personal', colors: [Color(0xFF1E3A8A), Color(0xFF312E81), Color(0xFF0F172A)], pattern: _NoteBgPattern.waves, overlay: _NoteBgAnimOverlay.aurora, emojis: ['🌕'], floatingEmojis: ['🌕', '✨'], darkText: true),
  _NoteBackgroundDef(id: 'zen_garden', label: 'Zen Garden', category: 'Personal', colors: [Color(0xFFF5F5F4), Color(0xFFD6D3D1), Color(0xFF78716C)], pattern: _NoteBgPattern.waves, overlay: _NoteBgAnimOverlay.leaves, emojis: ['🪨'], floatingEmojis: ['🪨', '🎋']),
  _NoteBackgroundDef(id: 'eagle_sky', label: 'Eagle Sky', category: 'Nature', colors: [Color(0xFFBAE6FD), Color(0xFF38BDF8), Color(0xFF1D4ED8)], pattern: _NoteBgPattern.clouds, overlay: _NoteBgAnimOverlay.clouds, emojis: ['🦅'], floatingEmojis: ['🦅']),
  _NoteBackgroundDef(id: 'penguin_ice', label: 'Penguin Ice', category: 'Nature', colors: [Color(0xFFE0F2FE), Color(0xFF7DD3FC), Color(0xFF0369A1)], pattern: _NoteBgPattern.snow, overlay: _NoteBgAnimOverlay.snow, emojis: ['🐧'], floatingEmojis: ['🐧', '❄️']),
  _NoteBackgroundDef(id: 'dolphin_bay', label: 'Dolphin Bay', category: 'Nature', colors: [Color(0xFF67E8F9), Color(0xFF0891B2), Color(0xFF164E63)], pattern: _NoteBgPattern.waves, overlay: _NoteBgAnimOverlay.fish, emojis: ['🐬'], floatingEmojis: ['🐬', '🐟']),
  _NoteBackgroundDef(id: 'sunflower_field', label: 'Sunflower Field', category: 'Personal', colors: [Color(0xFFFEF08A), Color(0xFFFACC15), Color(0xFFCA8A04)], pattern: _NoteBgPattern.bokeh, overlay: _NoteBgAnimOverlay.petals, emojis: ['🌻'], floatingEmojis: ['🌻', '🌻', '🌼']),
  _NoteBackgroundDef(id: 'startup_pitch', label: 'Startup Pitch', category: 'Work', colors: [Color(0xFFF0FDF4), Color(0xFF86EFAC), Color(0xFF16A34A)], pattern: _NoteBgPattern.grid, overlay: _NoteBgAnimOverlay.aurora, emojis: ['🚀'], floatingEmojis: ['🚀']),
  _NoteBackgroundDef(id: 'finance_green', label: 'Finance Pro', category: 'Work', colors: [Color(0xFFECFDF5), Color(0xFF34D399), Color(0xFF047857)], pattern: _NoteBgPattern.grid, emojis: ['💰']),
  _NoteBackgroundDef(id: 'legal_brief', label: 'Legal Brief', category: 'Work', colors: [Color(0xFFF8FAFC), Color(0xFFCBD5E1), Color(0xFF475569)], pattern: _NoteBgPattern.none, emojis: ['⚖️']),
  _NoteBackgroundDef(id: 'workshop_notes', label: 'Workshop', category: 'Meeting', colors: [Color(0xFFFFF7ED), Color(0xFFFED7AA), Color(0xFFEA580C)], pattern: _NoteBgPattern.bokeh, emojis: ['🔧']),
  _NoteBackgroundDef(id: 'podcast_studio', label: 'Podcast Studio', category: 'Ideas', colors: [Color(0xFF18181B), Color(0xFF3F3F46), Color(0xFF7C3AED)], pattern: _NoteBgPattern.aurora, overlay: _NoteBgAnimOverlay.aurora, emojis: ['🎙️'], floatingEmojis: ['🎙️'], darkText: true),
  _NoteBackgroundDef(id: 'art_studio', label: 'Art Studio', category: 'Ideas', colors: [Color(0xFFFDF4FF), Color(0xFFE879F9), Color(0xFF2563EB)], pattern: _NoteBgPattern.petals, overlay: _NoteBgAnimOverlay.petals, emojis: ['🎨'], floatingEmojis: ['🎨', '🌸']),
  _NoteBackgroundDef(id: 'northern_lights', label: 'Northern Lights', category: 'Nature', colors: [Color(0xFF020617), Color(0xFF064E3B), Color(0xFF312E81), Color(0xFF0F172A)], pattern: _NoteBgPattern.aurora, overlay: _NoteBgAnimOverlay.aurora, emojis: ['🌌'], floatingEmojis: ['✨', '🌌', '⭐'], darkText: true),
];

int _gridCountTwoPerRow(int itemCount) => itemCount.isOdd ? itemCount + 1 : itemCount;

const _kFloatingEmojiCount = 3;

/// Normalized cross-screen travel paths (0–1 coords; values may go slightly off-screen).
class _CrossScreenPath {
  const _CrossScreenPath({
    required this.start,
    required this.end,
    this.wave = 0.04,
    this.speed = 0.28,
    this.phase = 0,
  });
  final Offset start;
  final Offset end;
  final double wave;
  final double speed;
  final double phase;

  Offset at(double t) {
    final p = (t * speed + phase) % 1.0;
    final x = start.dx + (end.dx - start.dx) * p;
    final y = start.dy + (end.dy - start.dy) * p + math.sin(p * math.pi * 2) * wave;
    return Offset(x, y);
  }
}

const _crossScreenPaths = <_CrossScreenPath>[
  _CrossScreenPath(start: Offset(-0.1, 0.18), end: Offset(1.1, 0.32), wave: 0.05, speed: 0.22, phase: 0.02),
  _CrossScreenPath(start: Offset(1.1, 0.12), end: Offset(-0.1, 0.48), wave: 0.04, speed: 0.19, phase: 0.18),
  _CrossScreenPath(start: Offset(-0.1, 0.62), end: Offset(1.1, 0.78), wave: 0.045, speed: 0.24, phase: 0.35),
  _CrossScreenPath(start: Offset(0.15, -0.1), end: Offset(0.85, 1.1), wave: 0.035, speed: 0.17, phase: 0.51),
  _CrossScreenPath(start: Offset(1.1, 0.88), end: Offset(-0.1, 0.22), wave: 0.05, speed: 0.21, phase: 0.67),
  _CrossScreenPath(start: Offset(-0.1, 0.42), end: Offset(1.1, 0.55), wave: 0.04, speed: 0.23, phase: 0.79),
  _CrossScreenPath(start: Offset(0.85, 1.1), end: Offset(0.2, -0.1), wave: 0.038, speed: 0.18, phase: 0.91),
];

const _textAnimEffects = ['bounce', 'pulse', 'glow', 'wave', 'shake', 'rainbow', 'fade'];

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
    this.openInPreview = false,
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
  bool openInPreview;
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
        'openInPreview': openInPreview,
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
        openInPreview: json['openInPreview'] == true,
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
                          itemCount: _gridCountTwoPerRow(_filteredBackgrounds.length),
                          itemBuilder: (_, i) {
                            if (i >= _filteredBackgrounds.length) return const SizedBox.shrink();
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
                    itemCount: _gridCountTwoPerRow(_noteTemplates.length),
                    itemBuilder: (_, i) {
                      if (i >= _noteTemplates.length) return const SizedBox.shrink();
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
  late final String _initialBody;
  Timer? _autosave;
  bool _dirty = false;
  bool _previewMode = false;

  @override
  void initState() {
    super.initState();
    _note = widget.note ?? NgmyBusinessNote(folder: 'Personal');
    _initialBody = _note.body;
    _title = TextEditingController(text: _note.title);
    _body = TextEditingController(text: _note.body);
    _bodyFocus = FocusNode();
    _title.addListener(_markDirty);
    _body.addListener(_markDirty);
    if (!widget.isNew && _note.openInPreview) {
      _previewMode = true;
    }
  }

  bool _hasSaveableContent() {
    if (_title.text.trim().isNotEmpty) return true;
    if (_body.text.trim().isEmpty) return false;
    return _body.text.trim() != _initialBody.trim();
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
    if (!_hasSaveableContent()) {
      if (mounted) Navigator.pop(context, null);
      return false;
    }
    await _persist();
    _note.openInPreview = true;
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

  Future<void> _showTextAnimationPicker() async {
    final effect = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF1E293B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
              const SizedBox(height: 14),
              const Text('Text animation', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
              const SizedBox(height: 6),
              const Text('Wrap selected text with a live effect (visible in Preview)', style: TextStyle(color: Colors.white54, fontSize: 12)),
              const SizedBox(height: 14),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: _textAnimEffects.map((fx) {
                  return ActionChip(
                    label: Text(fx, style: const TextStyle(fontWeight: FontWeight.w700)),
                    onPressed: () => Navigator.pop(ctx, fx),
                    backgroundColor: const Color(0xFF8B5CF6).withValues(alpha: 0.25),
                    labelStyle: const TextStyle(color: Colors.white),
                    side: const BorderSide(color: Color(0xFF8B5CF6)),
                  );
                }).toList(),
              ),
            ],
          ),
        ),
      ),
    );
    if (effect == null) return;
    final t = _body.text;
    final sel = _body.selection;
    final s = sel.start.clamp(0, t.length);
    final e = sel.end.clamp(0, t.length);
    if (s != e) {
      final selected = t.substring(s, e);
      _body.text = t.substring(0, s) + '⟦$effect:$selected⟧' + t.substring(e);
      _body.selection = TextSelection.collapsed(offset: s + effect.length + selected.length + 3);
    } else {
      _insertAtCursor('⟦$effect:your text⟧');
      final cursor = _body.selection.start;
      _body.selection = TextSelection(baseOffset: cursor - 12, extentOffset: cursor - 1);
    }
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
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 10, crossAxisSpacing: 10, childAspectRatio: 0.82),
                itemCount: _gridCountTwoPerRow(_noteBackgrounds.length),
                itemBuilder: (_, i) {
                  if (i >= _noteBackgrounds.length) return const SizedBox.shrink();
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
                          onTap: () => setState(() {
                            _previewMode = !_previewMode;
                            if (!_previewMode) _note.openInPreview = false;
                          }),
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
                          _tool(Icons.animation_rounded, 'Animate', _showTextAnimationPicker, fg),
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
      if (raw.startsWith('⟦', i)) {
        final end = raw.indexOf('⟧', i);
        if (end != -1) {
          final inner = raw.substring(i + 1, end);
          final colon = inner.indexOf(':');
          if (colon > 0) {
            final effect = inner.substring(0, colon);
            final txt = inner.substring(colon + 1);
            spans.add(WidgetSpan(
              alignment: PlaceholderAlignment.middle,
              child: _AnimatedTextEffect(effect: effect, text: txt, color: fg, fontSize: baseSize, fontWeight: baseWeight),
            ));
            i = end + 1;
            continue;
          }
        }
      }
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
      if (s.indexOf('⟦', from) >= 0) s.indexOf('⟦', from),
      if (s.indexOf('**', from) >= 0) s.indexOf('**', from),
      if (s.indexOf('_', from) >= 0) s.indexOf('_', from),
      if (s.indexOf('<u>', from) >= 0) s.indexOf('<u>', from),
    ];
    if (indices.isEmpty) return s.length;
    return indices.reduce((a, b) => a < b ? a : b);
  }
}

class _NoteBackgroundPreview extends StatelessWidget {
  const _NoteBackgroundPreview({required this.backgroundId});
  final String backgroundId;

  @override
  Widget build(BuildContext context) {
    return _NoteAnimatedBackgroundLayer(backgroundId: backgroundId, compact: true);
  }
}

class _NoteAnimatedBackgroundLayer extends StatefulWidget {
  const _NoteAnimatedBackgroundLayer({this.note, this.backgroundId, this.compact = false});
  final NgmyBusinessNote? note;
  final String? backgroundId;
  final bool compact;

  @override
  State<_NoteAnimatedBackgroundLayer> createState() => _NoteAnimatedBackgroundLayerState();
}

class _NoteAnimatedBackgroundLayerState extends State<_NoteAnimatedBackgroundLayer> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  late final math.Random _rng;
  late List<_AnimParticle> _particles;

  @override
  void initState() {
    super.initState();
    _rng = math.Random(backgroundId.hashCode);
    _particles = _spawnParticles(_def);
    _ctrl = AnimationController(vsync: this, duration: const Duration(seconds: 22))..repeat();
  }

  String get backgroundId => widget.backgroundId ?? widget.note?.effectiveBackgroundId ?? _noteBackgrounds.first.id;

  _NoteBackgroundDef get _def {
    if (widget.note?.usesCustomColor == true) {
      return _noteBackgrounds.first;
    }
    return _noteBackgroundById(backgroundId);
  }

  @override
  void didUpdateWidget(covariant _NoteAnimatedBackgroundLayer oldWidget) {
    super.didUpdateWidget(oldWidget);
    final oldId = oldWidget.backgroundId ?? oldWidget.note?.effectiveBackgroundId;
    final newId = backgroundId;
    if (oldId != newId || oldWidget.note?.customColor != widget.note?.customColor) {
      _particles = _spawnParticles(_def);
    }
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  List<_AnimParticle> _spawnParticles(_NoteBackgroundDef def) {
    final isRain = def.pattern == _NoteBgPattern.rain || def.pattern == _NoteBgPattern.lightning;
    final count = isRain
        ? (widget.compact ? 48 : 90)
        : def.pattern == _NoteBgPattern.snow
            ? (widget.compact ? 22 : 40)
            : (widget.compact ? 16 : 30);
    return List.generate(count, (i) {
      final kind = isRain
          ? _ParticleKind.rain
          : def.pattern == _NoteBgPattern.snow
              ? _ParticleKind.snow
              : def.pattern == _NoteBgPattern.petals || def.pattern == _NoteBgPattern.leaves
                  ? _ParticleKind.petal
                  : def.pattern == _NoteBgPattern.fireflies
                      ? _ParticleKind.firefly
                      : def.pattern == _NoteBgPattern.fish
                          ? _ParticleKind.fish
                          : _ParticleKind.rain;
      return _AnimParticle(
        x: _rng.nextDouble(),
        y: _rng.nextDouble(),
        speed: 0.025 + _rng.nextDouble() * 0.08,
        size: 0.4 + _rng.nextDouble() * 0.8,
        phase: _rng.nextDouble(),
        kind: kind,
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    if (widget.note?.usesCustomColor == true) {
      return ColoredBox(color: Color(widget.note!.customColor!));
    }
    final def = _def;
    return RepaintBoundary(
      child: AnimatedBuilder(
        animation: _ctrl,
        builder: (_, __) {
          final t = _ctrl.value;
          return Stack(
            fit: StackFit.expand,
            clipBehavior: Clip.hardEdge,
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
              CustomPaint(
                painter: _NoteAnimatedBackgroundPainter(
                  pattern: def.pattern,
                  backgroundId: def.id,
                  t: t,
                  particles: _particles,
                  compact: widget.compact,
                ),
              ),
              ..._animatedOverlays(def, t),
              ..._staticEmojis(def.emojis),
            ],
          );
        },
      ),
    );
  }

  List<Widget> _staticEmojis(List<String> emojis) {
    if (emojis.isEmpty) return const [];
    return [
      Align(
        alignment: Alignment.topLeft,
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Text(emojis.first, style: TextStyle(fontSize: widget.compact ? 22 : 32, color: Colors.white.withValues(alpha: 0.22))),
        ),
      ),
    ];
  }

  List<Widget> _animatedOverlays(_NoteBackgroundDef def, double t) {
    final widgets = <Widget>[
      ..._floatingThemeEmojis(def, t),
      ..._ambientOverlay(def, t),
    ];
    return widgets;
  }

  List<Widget> _floatingThemeEmojis(_NoteBackgroundDef def, double t) {
    if (def.floatingEmojis.isEmpty) return const [];
    final emojis = def.floatingEmojis;
    return List.generate(_kFloatingEmojiCount, (i) {
      final emoji = emojis[i % emojis.length];
      final path = _crossScreenPaths[i % _crossScreenPaths.length];
      final pos = path.at(t);
      final size = (widget.compact ? 26.0 : 42.0) + (i % 3) * 5;
      return _FloatingEmoji(
        key: ValueKey('${def.id}_float_$i'),
        emoji: emoji,
        normalizedPos: pos,
        size: size,
        t: t,
        phase: path.phase,
        flapsWings: _emojiFlapsWings(emoji),
        swims: _emojiSwims(emoji),
      );
    });
  }

  List<Widget> _ambientOverlay(_NoteBackgroundDef def, double t) {
    final overlay = def.overlay == _NoteBgAnimOverlay.none ? _overlayFromPattern(def.pattern) : def.overlay;
    switch (overlay) {
      case _NoteBgAnimOverlay.fireflies:
        return List.generate(widget.compact ? 5 : 8, (i) {
          return Positioned.fill(
            child: LayoutBuilder(
              builder: (_, c) {
                final x = (0.1 + (i * 0.11) % 0.8) * c.maxWidth;
                final y = (0.2 + (i * 0.09) % 0.6) * c.maxHeight;
                final glow = 0.35 + math.sin((t + i * 0.13) * math.pi * 2) * 0.35;
                return Transform.translate(
                  offset: Offset(x, y),
                  child: Opacity(
                    opacity: glow.clamp(0.15, 0.95),
                    child: Text('✨', style: TextStyle(fontSize: widget.compact ? 10 : 14, shadows: [Shadow(color: Colors.yellow.withValues(alpha: 0.8), blurRadius: 8)])),
                  ),
                );
              },
            ),
          );
        });
      case _NoteBgAnimOverlay.clouds:
        return [
          _driftingCloud(t, 0.0, 0.08, widget.compact ? 48 : 72),
          _driftingCloud(t, 0.45, 0.18, widget.compact ? 36 : 56),
        ];
      case _NoteBgAnimOverlay.butterflies:
      case _NoteBgAnimOverlay.birds:
      case _NoteBgAnimOverlay.fish:
      case _NoteBgAnimOverlay.snow:
      case _NoteBgAnimOverlay.petals:
      case _NoteBgAnimOverlay.leaves:
      case _NoteBgAnimOverlay.aurora:
      case _NoteBgAnimOverlay.none:
        return const [];
    }
  }

  bool _emojiFlapsWings(String emoji) {
    const flappers = {'🦋', '🐦', '🦅', '🕊️', '🦜', '🐬', '🐟', '🐠', '🐧'};
    return flappers.contains(emoji);
  }

  bool _emojiSwims(String emoji) {
    const swimmers = {'🐟', '🐠', '🐬', '🐧'};
    return swimmers.contains(emoji);
  }

  _NoteBgAnimOverlay _overlayFromPattern(_NoteBgPattern p) {
    switch (p) {
      case _NoteBgPattern.rain:
      case _NoteBgPattern.lightning:
        return _NoteBgAnimOverlay.clouds;
      case _NoteBgPattern.stars:
      case _NoteBgPattern.aurora:
        return _NoteBgAnimOverlay.aurora;
      case _NoteBgPattern.snow:
        return _NoteBgAnimOverlay.snow;
      case _NoteBgPattern.petals:
        return _NoteBgAnimOverlay.petals;
      case _NoteBgPattern.leaves:
        return _NoteBgAnimOverlay.leaves;
      case _NoteBgPattern.fireflies:
        return _NoteBgAnimOverlay.fireflies;
      case _NoteBgPattern.clouds:
        return _NoteBgAnimOverlay.clouds;
      default:
        return _NoteBgAnimOverlay.none;
    }
  }

  Widget _driftingCloud(double t, double yFactor, double phase, double width) {
    return Positioned.fill(
      child: LayoutBuilder(
        builder: (_, c) {
          final x = ((t * 0.35 + phase) % 1.0) * (c.maxWidth + width) - width;
          return Transform.translate(
            offset: Offset(x, yFactor * c.maxHeight),
            child: Icon(Icons.cloud_rounded, size: width, color: Colors.white.withValues(alpha: 0.16)),
          );
        },
      ),
    );
  }
}

enum _ParticleKind { rain, snow, petal, firefly, fish }

class _AnimParticle {
  _AnimParticle({
    required this.x,
    required this.y,
    required this.speed,
    required this.size,
    required this.phase,
    required this.kind,
  });
  final double x;
  final double y;
  final double speed;
  final double size;
  final double phase;
  final _ParticleKind kind;
}

class _NoteAnimatedBackgroundPainter extends CustomPainter {
  _NoteAnimatedBackgroundPainter({
    required this.pattern,
    required this.backgroundId,
    required this.t,
    required this.particles,
    required this.compact,
  });

  final _NoteBgPattern pattern;
  final String backgroundId;
  final double t;
  final List<_AnimParticle> particles;
  final bool compact;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint();
    switch (pattern) {
      case _NoteBgPattern.rain:
        _paintRain(canvas, size, paint, long: true);
      case _NoteBgPattern.lightning:
        _paintRain(canvas, size, paint, long: true);
        if ((t % 0.25) < 0.03) {
          paint.color = Colors.white.withValues(alpha: 0.25);
          canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), paint);
        }
      case _NoteBgPattern.snow:
        _paintSnow(canvas, size, paint);
      case _NoteBgPattern.petals:
        _paintPetals(canvas, size, paint);
      case _NoteBgPattern.leaves:
        _paintPetals(canvas, size, paint, leaves: true);
      case _NoteBgPattern.fireflies:
        _paintFireflies(canvas, size, paint);
      case _NoteBgPattern.waves:
      case _NoteBgPattern.fish:
        _paintWaves(canvas, size, paint);
      case _NoteBgPattern.grass:
        _paintGrass(canvas, size, paint);
      case _NoteBgPattern.stars:
        _paintStars(canvas, size, paint);
      case _NoteBgPattern.aurora:
        if (backgroundId == 'northern_lights') {
          _paintNorthernLights(canvas, size, paint);
        } else {
          _paintAurora(canvas, size, paint);
        }
        _paintStars(canvas, size, paint, dense: backgroundId == 'northern_lights');
      case _NoteBgPattern.clouds:
        _paintCloudMist(canvas, size, paint);
      case _NoteBgPattern.grid:
        _paintGrid(canvas, size, paint);
      case _NoteBgPattern.bokeh:
        _paintBokeh(canvas, size, paint);
      case _NoteBgPattern.none:
        break;
    }
  }

  void _paintRain(Canvas canvas, Size size, Paint paint, {bool long = false}) {
    paint.style = PaintingStyle.fill;
    for (final p in particles) {
      if (p.kind != _ParticleKind.rain) continue;
      final y = ((p.y + t * p.speed * 0.65) % 1.15) * size.height - size.height * 0.08;
      final x = p.x * size.width + math.sin(p.phase * math.pi * 2) * 2;
      final dropH = 5 + p.size * (long ? 10 : 7);
      final dropW = 1.2 + p.size * 0.5;
      final alpha = 0.22 + p.size * 0.18;

      // Teardrop head
      paint.color = Colors.white.withValues(alpha: alpha);
      canvas.drawOval(Rect.fromCenter(center: Offset(x, y), width: dropW * 1.6, height: dropW * 1.4), paint);

      // Falling streak
      paint.style = PaintingStyle.stroke;
      paint.strokeWidth = dropW * 0.7;
      paint.strokeCap = StrokeCap.round;
      paint.color = Colors.white.withValues(alpha: alpha * 0.85);
      canvas.drawLine(Offset(x, y + dropW * 0.5), Offset(x - 1.8, y + dropH), paint);
      paint.style = PaintingStyle.fill;
    }
  }

  void _paintSnow(Canvas canvas, Size size, Paint paint) {
    for (final p in particles) {
      if (p.kind != _ParticleKind.snow) continue;
      final y = ((p.y + t * p.speed * 0.28) % 1.15) * size.height - size.height * 0.08;
      final x = p.x * size.width + math.sin((t + p.phase) * math.pi * 2) * 10;
      paint.color = Colors.white.withValues(alpha: 0.45 + p.size * 0.2);
      canvas.drawCircle(Offset(x, y), 1.2 + p.size * 1.8, paint);
    }
  }

  void _paintPetals(Canvas canvas, Size size, Paint paint, {bool leaves = false}) {
    for (final p in particles) {
      if (p.kind != _ParticleKind.petal) continue;
      final y = ((p.y + t * p.speed * 0.22) % 1.1) * size.height;
      final x = p.x * size.width + math.sin((t + p.phase) * math.pi * 2) * 14;
      paint.color = (leaves ? const Color(0xFF86EFAC) : const Color(0xFFF472B6)).withValues(alpha: 0.35 + p.size * 0.15);
      canvas.save();
      canvas.translate(x, y);
      canvas.rotate((t * 0.5 + p.phase) * math.pi * 2);
      canvas.drawOval(Rect.fromCenter(center: Offset.zero, width: 6 + p.size * 4, height: 3 + p.size * 2), paint);
      canvas.restore();
    }
  }

  void _paintFireflies(Canvas canvas, Size size, Paint paint) {
    for (final p in particles) {
      if (p.kind != _ParticleKind.firefly) continue;
      final flicker = 0.3 + math.sin((t + p.phase) * math.pi * 4) * 0.35;
      if (flicker < 0.15) continue;
      final x = p.x * size.width + math.sin((t + p.phase) * math.pi * 2) * 6;
      final y = p.y * size.height + math.cos((t + p.phase) * math.pi * 2) * 6;
      paint.color = const Color(0xFFFDE047).withValues(alpha: flicker);
      canvas.drawCircle(Offset(x, y), 2 + p.size, paint);
      paint.color = const Color(0xFFFDE047).withValues(alpha: flicker * 0.35);
      canvas.drawCircle(Offset(x, y), 5 + p.size * 2, paint);
    }
  }

  void _paintWaves(Canvas canvas, Size size, Paint paint) {
    paint.style = PaintingStyle.stroke;
    paint.strokeWidth = 2;
    for (var i = 0; i < 5; i++) {
      paint.color = Colors.white.withValues(alpha: 0.1 + i * 0.02);
      final path = Path();
      final baseY = size.height * (0.42 + i * 0.1);
      path.moveTo(0, baseY);
      for (var x = 0.0; x <= size.width; x += 12) {
        final wave = math.sin((x / size.width * 4 * math.pi) + (t * math.pi * 0.8) + i) * (8 + i * 2);
        path.lineTo(x, baseY + wave);
      }
      canvas.drawPath(path, paint);
    }
  }

  void _paintGrass(Canvas canvas, Size size, Paint paint) {
    paint.style = PaintingStyle.stroke;
    paint.strokeWidth = 1.8;
    paint.color = Colors.white.withValues(alpha: 0.18);
    for (var x = 0.0; x < size.width; x += 12) {
      final sway = math.sin((t * math.pi * 0.7) + x * 0.04) * 4;
      final h = 10 + (x % 20);
      canvas.drawLine(Offset(x, size.height), Offset(x - 3 + sway, size.height - h), paint);
    }
  }

  void _paintStars(Canvas canvas, Size size, Paint paint, {bool dense = false}) {
    final count = dense ? (compact ? 40 : 70) : (compact ? 18 : 32);
    for (var i = 0; i < count; i++) {
      final dx = (i * 47.0 + 13) % size.width;
      final dy = (i * 61.0 + 29) % size.height;
      final twinkle = 0.25 + math.sin((t + i * 0.07) * math.pi * 2) * 0.35;
      paint.shader = null;
      paint.style = PaintingStyle.fill;
      paint.color = Colors.white.withValues(alpha: twinkle.clamp(0.1, 0.9));
      canvas.drawCircle(Offset(dx, dy), (dense ? 1.2 : 1.0) + (i % 3) * 0.6, paint);
    }
  }

  void _paintNorthernLights(Canvas canvas, Size size, Paint paint) {
    paint.style = PaintingStyle.fill;
    final bands = [
      [const Color(0xFF34D399), const Color(0xFF10B981), const Color(0xFF059669)],
      [const Color(0xFF818CF8), const Color(0xFF6366F1), const Color(0xFF4F46E5)],
      [const Color(0xFF22D3EE), const Color(0xFF06B6D4), const Color(0xFF0891B2)],
      [const Color(0xFFA78BFA), const Color(0xFF8B5CF6), const Color(0xFF7C3AED)],
      [const Color(0xFF4ADE80), const Color(0xFF22C55E), const Color(0xFF16A34A)],
    ];
    for (var band = 0; band < bands.length; band++) {
      final path = Path();
      final baseY = size.height * (0.08 + band * 0.11);
      path.moveTo(0, baseY);
      for (var x = 0.0; x <= size.width; x += 6) {
        final wave = math.sin((x / size.width * 5 * math.pi) + (t * math.pi * 0.55) + band * 1.2) * (18 + band * 10);
        final ripple = math.cos((x / size.width * 3 * math.pi) - (t * math.pi * 0.35) + band) * 8;
        path.lineTo(x, baseY + wave + ripple);
      }
      path.lineTo(size.width, size.height);
      path.lineTo(0, size.height);
      path.close();
      final shimmer = 0.18 + math.sin(t * math.pi * 0.8 + band * 0.9) * 0.08;
      paint.shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          bands[band][0].withValues(alpha: shimmer * 0.35),
          bands[band][1].withValues(alpha: shimmer),
          bands[band][2].withValues(alpha: shimmer * 0.45),
          Colors.transparent,
        ],
        stops: const [0.0, 0.35, 0.65, 1.0],
      ).createShader(Rect.fromLTWH(0, baseY - 30, size.width, size.height - baseY + 40));
      canvas.drawPath(path, paint);
      paint.shader = null;
    }
    // Soft horizon glow
    paint.shader = LinearGradient(
      begin: Alignment.topCenter,
      end: Alignment.bottomCenter,
      colors: [
        Colors.transparent,
        const Color(0xFF6366F1).withValues(alpha: 0.06 + math.sin(t * math.pi * 0.5) * 0.03),
        const Color(0xFF10B981).withValues(alpha: 0.1 + math.sin(t * math.pi * 0.4) * 0.04),
      ],
    ).createShader(Rect.fromLTWH(0, size.height * 0.5, size.width, size.height * 0.5));
    canvas.drawRect(Rect.fromLTWH(0, size.height * 0.5, size.width, size.height * 0.5), paint);
    paint.shader = null;
  }

  void _paintAurora(Canvas canvas, Size size, Paint paint) {
    for (var i = 0; i < 3; i++) {
      paint.shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          Colors.transparent,
          [const Color(0xFF4ADE80), const Color(0xFF818CF8), const Color(0xFF22D3EE)][i].withValues(alpha: 0.08 + math.sin(t * math.pi * 0.8 + i) * 0.04),
          Colors.transparent,
        ],
      ).createShader(Rect.fromLTWH(0, size.height * (0.1 + i * 0.12 + math.sin(t * math.pi * 0.8) * 0.03), size.width, size.height * 0.35));
      canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), paint);
      paint.shader = null;
    }
  }

  void _paintCloudMist(Canvas canvas, Size size, Paint paint) {
    paint.color = Colors.white.withValues(alpha: 0.06);
    for (var i = 0; i < 4; i++) {
      final cx = ((t * 0.06 + i * 0.22) % 1.2) * size.width;
      final cy = size.height * (0.15 + i * 0.12);
      canvas.drawOval(Rect.fromCenter(center: Offset(cx, cy), width: size.width * 0.35, height: size.height * 0.12), paint);
    }
  }

  void _paintGrid(Canvas canvas, Size size, Paint paint) {
    paint.color = Colors.black.withValues(alpha: 0.04);
    paint.strokeWidth = 1;
    paint.style = PaintingStyle.stroke;
    final offset = (t * 6) % 18;
    for (var x = -offset; x < size.width; x += 18) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (var y = -offset; y < size.height; y += 18) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
  }

  void _paintBokeh(Canvas canvas, Size size, Paint paint) {
    paint.style = PaintingStyle.fill;
    for (var i = 0; i < 8; i++) {
      final pulse = 0.06 + math.sin((t + i * 0.11) * math.pi * 0.8) * 0.03;
      paint.color = Colors.white.withValues(alpha: pulse);
      final r = 16.0 + (i % 4) * 12 + math.sin((t + i) * math.pi * 0.8) * 4;
      canvas.drawCircle(Offset((i * 73.0 + t * 8) % size.width, (i * 41.0) % size.height), r, paint);
    }
  }

  @override
  bool shouldRepaint(covariant _NoteAnimatedBackgroundPainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.pattern != pattern || oldDelegate.backgroundId != backgroundId;
}

/// Background emoji that travels across the screen (never blocks text taps).
class _FloatingEmoji extends StatelessWidget {
  const _FloatingEmoji({
    super.key,
    required this.emoji,
    required this.normalizedPos,
    required this.size,
    required this.t,
    required this.phase,
    required this.flapsWings,
    required this.swims,
  });

  final String emoji;
  final Offset normalizedPos;
  final double size;
  final double t;
  final double phase;
  final bool flapsWings;
  final bool swims;

  @override
  Widget build(BuildContext context) {
    final flap = flapsWings ? 0.65 + math.sin((t * 2.0 + phase) * math.pi * 2).abs() * 0.35 : 1.0;
    final bob = swims ? math.sin((t * 1.4 + phase) * math.pi * 2) * 5 : 0.0;
    return Positioned.fill(
      child: IgnorePointer(
        child: LayoutBuilder(
          builder: (_, c) {
            final dx = normalizedPos.dx * c.maxWidth;
            final dy = normalizedPos.dy * c.maxHeight + bob;
            return Transform.translate(
              offset: Offset(dx, dy),
              child: Transform.scale(
                scaleX: flap,
                scaleY: 1.0,
                child: Text(
                  emoji,
                  style: TextStyle(
                    fontSize: size,
                    shadows: [Shadow(color: Colors.black.withValues(alpha: 0.15), blurRadius: 5)],
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

/// Live text effect for preview (syntax: ⟦effect:words⟧).
class _AnimatedTextEffect extends StatefulWidget {
  const _AnimatedTextEffect({
    required this.effect,
    required this.text,
    required this.color,
    required this.fontSize,
    required this.fontWeight,
  });

  final String effect;
  final String text;
  final Color color;
  final double fontSize;
  final FontWeight fontWeight;

  @override
  State<_AnimatedTextEffect> createState() => _AnimatedTextEffectState();
}

class _AnimatedTextEffectState extends State<_AnimatedTextEffect> with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (_, __) {
        final t = _ctrl.value;
        final fx = widget.effect.toLowerCase();
        var dy = 0.0;
        var scale = 1.0;
        var angle = 0.0;
        var opacity = 1.0;
        Color color = widget.color;
        switch (fx) {
          case 'bounce':
            dy = -math.sin(t * math.pi * 2).abs() * 8;
          case 'pulse':
            scale = 1.0 + math.sin(t * math.pi * 2) * 0.12;
          case 'glow':
            scale = 1.0 + math.sin(t * math.pi * 2) * 0.05;
            color = Color.lerp(widget.color, Colors.white, 0.25 + math.sin(t * math.pi * 2) * 0.15)!;
          case 'wave':
            dy = math.sin(t * math.pi * 4) * 4;
            angle = math.sin(t * math.pi * 2) * 0.08;
          case 'shake':
            dy = math.sin(t * math.pi * 8) * 3;
            angle = math.sin(t * math.pi * 10) * 0.06;
          case 'rainbow':
            color = HSVColor.fromAHSV(1, (t * 360) % 360, 0.55, 0.95).toColor();
          case 'fade':
            opacity = 0.45 + math.sin(t * math.pi * 2) * 0.45;
          default:
            dy = -math.sin(t * math.pi * 2).abs() * 6;
        }
        return Opacity(
          opacity: opacity.clamp(0.2, 1.0),
          child: Transform.translate(
            offset: Offset(0, dy),
            child: Transform.rotate(
              angle: angle,
              child: Transform.scale(
                scale: scale,
                child: Text(
                  widget.text,
                  style: TextStyle(
                    fontSize: widget.fontSize,
                    fontWeight: widget.fontWeight,
                    color: color,
                    shadows: fx == 'glow'
                        ? [Shadow(color: color.withValues(alpha: 0.8), blurRadius: 12)]
                        : null,
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

// Alias for editor/list usage
typedef _NoteBackgroundLayer = _NoteAnimatedBackgroundLayer;
