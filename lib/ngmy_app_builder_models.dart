import 'package:flutter/material.dart';

enum NgmyAppBuilderStatus { draft, submitted, published, rejected }

enum NgmyAppScreenKind { welcome, menu, content, form, aiChat }

extension NgmyAppBuilderStatusExt on NgmyAppBuilderStatus {
  String get label => switch (this) {
        NgmyAppBuilderStatus.draft => 'Draft',
        NgmyAppBuilderStatus.submitted => 'In review',
        NgmyAppBuilderStatus.published => 'Published',
        NgmyAppBuilderStatus.rejected => 'Needs changes',
      };
}

extension NgmyAppScreenKindExt on NgmyAppScreenKind {
  String get label => switch (this) {
        NgmyAppScreenKind.welcome => 'Welcome',
        NgmyAppScreenKind.menu => 'Menu',
        NgmyAppScreenKind.content => 'Content',
        NgmyAppScreenKind.form => 'Form',
        NgmyAppScreenKind.aiChat => 'AI Chat',
      };

  IconData get icon => switch (this) {
        NgmyAppScreenKind.welcome => Icons.waving_hand_rounded,
        NgmyAppScreenKind.menu => Icons.dashboard_rounded,
        NgmyAppScreenKind.content => Icons.article_rounded,
        NgmyAppScreenKind.form => Icons.edit_note_rounded,
        NgmyAppScreenKind.aiChat => Icons.smart_toy_rounded,
      };
}

class NgmyAppBuilderActor {
  final String id;
  final String name;
  final String role;
  final String description;
  final IconData icon;
  final Color color;
  final String systemPrompt;

  const NgmyAppBuilderActor({
    required this.id,
    required this.name,
    required this.role,
    required this.description,
    required this.icon,
    required this.color,
    required this.systemPrompt,
  });
}

const List<NgmyAppBuilderActor> kNgmyAppBuilderActors = [
  NgmyAppBuilderActor(
    id: 'architect',
    name: 'Nova',
    role: 'App Architect',
    description: 'Plans screens, flows, and features for your app.',
    icon: Icons.architecture_rounded,
    color: Color(0xFF6366F1),
    systemPrompt:
        'You are Nova, an app architect inside NGMY App Builder. Design clear screen flows. '
        'Reply with practical structure: app name, tagline, screen list (welcome/menu/content/form/aiChat), and navigation.',
  ),
  NgmyAppBuilderActor(
    id: 'designer',
    name: 'Luna',
    role: 'UI Designer',
    description: 'Writes headlines, colors, and polished copy.',
    icon: Icons.palette_rounded,
    color: Color(0xFFEC4899),
    systemPrompt:
        'You are Luna, a UI designer for NGMY mini-apps. Improve titles, subtitles, button labels, and theme colors. '
        'Keep copy short, friendly, and mobile-first.',
  ),
  NgmyAppBuilderActor(
    id: 'builder',
    name: 'Bolt',
    role: 'App Builder',
    description: 'Turns ideas into screens you can preview instantly.',
    icon: Icons.construction_rounded,
    color: Color(0xFFF59E0B),
    systemPrompt:
        'You are Bolt, a builder AI for NGMY. When asked, output JSON only with keys: '
        'name, tagline, themeColorHex, screens (array of {id, title, kind, data}). '
        'Kinds: welcome, menu, content, form, aiChat. Keep 3-6 screens.',
  ),
  NgmyAppBuilderActor(
    id: 'reviewer',
    name: 'Sage',
    role: 'App Reviewer',
    description: 'Checks clarity, missing pieces, and publish readiness.',
    icon: Icons.fact_check_rounded,
    color: Color(0xFF10B981),
    systemPrompt:
        'You are Sage, a reviewer for NGMY apps. Audit completeness: naming, navigation, empty fields, UX issues. '
        'Give a publish readiness score 0-100 and bullet fixes.',
  ),
];

NgmyAppBuilderActor ngmyAppBuilderActorById(String id) {
  return kNgmyAppBuilderActors.firstWhere(
    (a) => a.id == id,
    orElse: () => kNgmyAppBuilderActors.first,
  );
}

class NgmyAppScreen {
  final String id;
  final String title;
  final NgmyAppScreenKind kind;
  final Map<String, dynamic> data;

  const NgmyAppScreen({
    required this.id,
    required this.title,
    required this.kind,
    this.data = const {},
  });

  factory NgmyAppScreen.welcome({
    required String id,
    required String title,
    String subtitle = 'Welcome to my app',
    String buttonLabel = 'Get started',
    String? buttonTargetScreenId,
    String heroEmoji = '✨',
  }) {
    return NgmyAppScreen(
      id: id,
      title: title,
      kind: NgmyAppScreenKind.welcome,
      data: {
        'subtitle': subtitle,
        'buttonLabel': buttonLabel,
        'buttonTargetScreenId': buttonTargetScreenId ?? '',
        'heroEmoji': heroEmoji,
      },
    );
  }

  factory NgmyAppScreen.menu({
    required String id,
    required String title,
    List<Map<String, String>> items = const [],
  }) {
    return NgmyAppScreen(
      id: id,
      title: title,
      kind: NgmyAppScreenKind.menu,
      data: {'items': items},
    );
  }

  NgmyAppScreen copyWith({
    String? id,
    String? title,
    NgmyAppScreenKind? kind,
    Map<String, dynamic>? data,
  }) {
    return NgmyAppScreen(
      id: id ?? this.id,
      title: title ?? this.title,
      kind: kind ?? this.kind,
      data: data ?? Map<String, dynamic>.from(this.data),
    );
  }

  Map<String, dynamic> toMap() => {
        'id': id,
        'title': title,
        'kind': kind.name,
        'data': data,
      };

  factory NgmyAppScreen.fromMap(Map<String, dynamic> map) {
    final kindRaw = (map['kind'] ?? 'welcome').toString();
    final kind = NgmyAppScreenKind.values.firstWhere(
      (k) => k.name == kindRaw,
      orElse: () => NgmyAppScreenKind.welcome,
    );
    return NgmyAppScreen(
      id: (map['id'] ?? '').toString().trim().isEmpty ? _ngmyNewId('scr') : map['id'].toString(),
      title: (map['title'] ?? 'Screen').toString(),
      kind: kind,
      data: Map<String, dynamic>.from((map['data'] as Map?) ?? const {}),
    );
  }
}

class NgmyAppProject {
  final String id;
  final String name;
  final String tagline;
  final String ownerEmail;
  final int themeColor;
  final List<NgmyAppScreen> screens;
  final NgmyAppBuilderStatus status;
  final String createdAt;
  final String updatedAt;
  final String? publishedAt;
  final String? reviewNote;

  const NgmyAppProject({
    required this.id,
    required this.name,
    required this.tagline,
    required this.ownerEmail,
    required this.themeColor,
    required this.screens,
    this.status = NgmyAppBuilderStatus.draft,
    required this.createdAt,
    required this.updatedAt,
    this.publishedAt,
    this.reviewNote,
  });

  Color get theme => Color(themeColor);

  NgmyAppScreen? screenById(String? id) {
    if (id == null || id.trim().isEmpty) return null;
    for (final s in screens) {
      if (s.id == id) return s;
    }
    return null;
  }

  NgmyAppScreen get homeScreen => screens.isNotEmpty ? screens.first : NgmyAppScreen.welcome(id: 'home', title: name);

  NgmyAppProject copyWith({
    String? name,
    String? tagline,
    int? themeColor,
    List<NgmyAppScreen>? screens,
    NgmyAppBuilderStatus? status,
    String? updatedAt,
    String? publishedAt,
    String? reviewNote,
  }) {
    return NgmyAppProject(
      id: id,
      name: name ?? this.name,
      tagline: tagline ?? this.tagline,
      ownerEmail: ownerEmail,
      themeColor: themeColor ?? this.themeColor,
      screens: screens ?? this.screens,
      status: status ?? this.status,
      createdAt: createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      publishedAt: publishedAt ?? this.publishedAt,
      reviewNote: reviewNote ?? this.reviewNote,
    );
  }

  Map<String, dynamic> toMap() => {
        'id': id,
        'name': name,
        'tagline': tagline,
        'ownerEmail': ownerEmail,
        'themeColor': themeColor,
        'screens': screens.map((s) => s.toMap()).toList(),
        'status': status.name,
        'createdAt': createdAt,
        'updatedAt': updatedAt,
        'publishedAt': publishedAt,
        'reviewNote': reviewNote,
      };

  factory NgmyAppProject.fromMap(Map<String, dynamic> map) {
    final statusRaw = (map['status'] ?? 'draft').toString();
    final status = NgmyAppBuilderStatus.values.firstWhere(
      (s) => s.name == statusRaw,
      orElse: () => NgmyAppBuilderStatus.draft,
    );
    final screensRaw = map['screens'];
    final screens = <NgmyAppScreen>[];
    if (screensRaw is List) {
      for (final item in screensRaw) {
        if (item is Map) screens.add(NgmyAppScreen.fromMap(Map<String, dynamic>.from(item)));
      }
    }
    if (screens.isEmpty) {
      screens.add(NgmyAppScreen.welcome(id: 'home', title: (map['name'] ?? 'My App').toString()));
    }
    final now = DateTime.now().toUtc().toIso8601String();
    return NgmyAppProject(
      id: (map['id'] ?? _ngmyNewId('app')).toString(),
      name: (map['name'] ?? 'Untitled App').toString(),
      tagline: (map['tagline'] ?? '').toString(),
      ownerEmail: (map['ownerEmail'] ?? '').toString().toLowerCase().trim(),
      themeColor: (map['themeColor'] as num?)?.toInt() ?? 0xFF6366F1,
      screens: screens,
      status: status,
      createdAt: (map['createdAt'] ?? now).toString(),
      updatedAt: (map['updatedAt'] ?? now).toString(),
      publishedAt: map['publishedAt']?.toString(),
      reviewNote: map['reviewNote']?.toString(),
    );
  }

  factory NgmyAppProject.blank({required String ownerEmail}) {
    final now = DateTime.now().toUtc().toIso8601String();
    final id = _ngmyNewId('app');
    return NgmyAppProject(
      id: id,
      name: 'My New App',
      tagline: 'Built with NGMY App Builder',
      ownerEmail: ownerEmail.toLowerCase().trim(),
      themeColor: 0xFF6366F1,
      screens: [
        NgmyAppScreen.welcome(id: 'home', title: 'Welcome', buttonTargetScreenId: 'menu'),
        NgmyAppScreen.menu(
          id: 'menu',
          title: 'Main Menu',
          items: [
            {'label': 'About', 'targetScreenId': 'about', 'icon': 'info'},
            {'label': 'Contact', 'targetScreenId': 'contact', 'icon': 'mail'},
          ],
        ),
        const NgmyAppScreen(id: 'about', title: 'About', kind: NgmyAppScreenKind.content, data: {'body': 'Tell your story here.'}),
        NgmyAppScreen(
          id: 'contact',
          title: 'Contact',
          kind: NgmyAppScreenKind.form,
          data: {
            'fields': [
              {'id': 'name', 'label': 'Your name', 'type': 'text'},
              {'id': 'message', 'label': 'Message', 'type': 'text'},
            ],
            'submitLabel': 'Send',
            'successMessage': 'Thanks! We received your message.',
          },
        ),
      ],
      createdAt: now,
      updatedAt: now,
    );
  }
}

String _ngmyNewId(String prefix) => '${prefix}_${DateTime.now().millisecondsSinceEpoch}';

bool ngmyUserCanAccessAppBuilder({required bool isAdmin, required bool appBuilderEnabled}) =>
    isAdmin || appBuilderEnabled;
