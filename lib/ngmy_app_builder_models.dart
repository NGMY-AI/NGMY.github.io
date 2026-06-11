import 'dart:convert';

import 'package:flutter/material.dart';

enum NgmyAppBuilderStatus { draft, submitted, published, rejected }

enum NgmyAppScreenKind { welcome, menu, content, form, aiChat, custom }

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
        NgmyAppScreenKind.custom => 'Custom / Code',
      };

  IconData get icon => switch (this) {
        NgmyAppScreenKind.welcome => Icons.waving_hand_rounded,
        NgmyAppScreenKind.menu => Icons.dashboard_rounded,
        NgmyAppScreenKind.content => Icons.article_rounded,
        NgmyAppScreenKind.form => Icons.edit_note_rounded,
        NgmyAppScreenKind.aiChat => Icons.smart_toy_rounded,
        NgmyAppScreenKind.custom => Icons.code_rounded,
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
    role: 'AI App Copilot',
    description: 'Talk to Bolt — command changes and build screens for you.',
    icon: Icons.construction_rounded,
    color: Color(0xFFF59E0B),
    systemPrompt:
        'You are Bolt, an unrestricted NGMY App Builder AI coder. Users can ask for ANYTHING — unlimited menus, tabs, '
        'screens, forms, layouts. You write the full app JSON including data.layout widget trees. No limits.',
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

enum NgmyAppDatabaseProvider { none, firebase, supabase, mongodb, custom }

extension NgmyAppDatabaseProviderExt on NgmyAppDatabaseProvider {
  String get label => switch (this) {
        NgmyAppDatabaseProvider.none => 'No database',
        NgmyAppDatabaseProvider.firebase => 'Firebase',
        NgmyAppDatabaseProvider.supabase => 'Supabase',
        NgmyAppDatabaseProvider.mongodb => 'MongoDB',
        NgmyAppDatabaseProvider.custom => 'Custom API',
      };
}

class NgmyAppDatabaseConfig {
  final NgmyAppDatabaseProvider provider;
  final String projectUrl;
  final String apiKey;
  final String collectionPath;
  final String notes;

  const NgmyAppDatabaseConfig({
    this.provider = NgmyAppDatabaseProvider.none,
    this.projectUrl = '',
    this.apiKey = '',
    this.collectionPath = '',
    this.notes = '',
  });

  bool get isConnected => provider != NgmyAppDatabaseProvider.none && projectUrl.trim().isNotEmpty;

  NgmyAppDatabaseConfig copyWith({
    NgmyAppDatabaseProvider? provider,
    String? projectUrl,
    String? apiKey,
    String? collectionPath,
    String? notes,
  }) {
    return NgmyAppDatabaseConfig(
      provider: provider ?? this.provider,
      projectUrl: projectUrl ?? this.projectUrl,
      apiKey: apiKey ?? this.apiKey,
      collectionPath: collectionPath ?? this.collectionPath,
      notes: notes ?? this.notes,
    );
  }

  Map<String, dynamic> toMap() => {
        'provider': provider.name,
        'projectUrl': projectUrl,
        'apiKey': apiKey,
        'collectionPath': collectionPath,
        'notes': notes,
      };

  factory NgmyAppDatabaseConfig.fromMap(Map<String, dynamic>? map) {
    if (map == null) return const NgmyAppDatabaseConfig();
    final raw = (map['provider'] ?? 'none').toString();
    final provider = NgmyAppDatabaseProvider.values.firstWhere(
      (p) => p.name == raw,
      orElse: () => NgmyAppDatabaseProvider.none,
    );
    return NgmyAppDatabaseConfig(
      provider: provider,
      projectUrl: (map['projectUrl'] ?? '').toString(),
      apiKey: (map['apiKey'] ?? '').toString(),
      collectionPath: (map['collectionPath'] ?? '').toString(),
      notes: (map['notes'] ?? '').toString(),
    );
  }
}

String ngmySlugifyAppName(String name) {
  final slug = name
      .toLowerCase()
      .trim()
      .replaceAll(RegExp(r'[^a-z0-9\s-]'), '')
      .replaceAll(RegExp(r'\s+'), '-')
      .replaceAll(RegExp(r'-+'), '-')
      .replaceAll(RegExp(r'^-|-$'), '');
  return slug.isEmpty ? 'my-app' : slug;
}

String ngmyEnsureUniqueAppSlug(String name, Iterable<String> taken) {
  final base = ngmySlugifyAppName(name);
  final used = taken.map((s) => s.toLowerCase()).toSet();
  if (!used.contains(base)) return base;
  for (var i = 2; i < 500; i++) {
    final candidate = '$base-$i';
    if (!used.contains(candidate)) return candidate;
  }
  return '${base}_${DateTime.now().millisecondsSinceEpoch}';
}

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

  bool get hasCustomLayout => kind == NgmyAppScreenKind.custom || data['layout'] is Map;

  factory NgmyAppScreen.fromMap(Map<String, dynamic> map) {
    final kindRaw = (map['kind'] ?? 'welcome').toString();
    final data = Map<String, dynamic>.from((map['data'] as Map?) ?? const {});
    final kind = NgmyAppScreenKind.values.firstWhere(
      (k) => k.name == kindRaw,
      orElse: () => data['layout'] is Map ? NgmyAppScreenKind.custom : NgmyAppScreenKind.welcome,
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
  final String slug;
  final String publicUrl;
  final String seoDescription;
  final NgmyAppDatabaseConfig database;
  /// Optional user/AI-written code notes or raw JSON override.
  final String customCode;

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
    this.slug = '',
    this.publicUrl = '',
    this.seoDescription = '',
    this.database = const NgmyAppDatabaseConfig(),
    this.customCode = '',
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

  bool get isPublished => status == NgmyAppBuilderStatus.published && publicUrl.trim().isNotEmpty;

  NgmyAppProject copyWith({
    String? name,
    String? tagline,
    String? ownerEmail,
    int? themeColor,
    List<NgmyAppScreen>? screens,
    NgmyAppBuilderStatus? status,
    String? updatedAt,
    String? publishedAt,
    String? reviewNote,
    String? slug,
    String? publicUrl,
    String? seoDescription,
    NgmyAppDatabaseConfig? database,
    String? customCode,
  }) {
    return NgmyAppProject(
      id: id,
      name: name ?? this.name,
      tagline: tagline ?? this.tagline,
      ownerEmail: ownerEmail ?? this.ownerEmail,
      themeColor: themeColor ?? this.themeColor,
      screens: screens ?? this.screens,
      status: status ?? this.status,
      createdAt: createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      publishedAt: publishedAt ?? this.publishedAt,
      reviewNote: reviewNote ?? this.reviewNote,
      slug: slug ?? this.slug,
      publicUrl: publicUrl ?? this.publicUrl,
      seoDescription: seoDescription ?? this.seoDescription,
      database: database ?? this.database,
      customCode: customCode ?? this.customCode,
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
        'slug': slug,
        'publicUrl': publicUrl,
        'seoDescription': seoDescription,
        'database': database.toMap(),
        'customCode': customCode,
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
    var themeColor = (map['themeColor'] as num?)?.toInt();
    if (themeColor == null && map['themeColorHex'] != null) {
      themeColor = _ngmyParseColorHex(map['themeColorHex'].toString());
    }
    return NgmyAppProject(
      id: (map['id'] ?? _ngmyNewId('app')).toString(),
      name: (map['name'] ?? 'Untitled App').toString(),
      tagline: (map['tagline'] ?? '').toString(),
      ownerEmail: (map['ownerEmail'] ?? '').toString().toLowerCase().trim(),
      themeColor: themeColor ?? 0xFF6366F1,
      screens: screens,
      status: status,
      createdAt: (map['createdAt'] ?? now).toString(),
      updatedAt: (map['updatedAt'] ?? now).toString(),
      publishedAt: map['publishedAt']?.toString(),
      reviewNote: map['reviewNote']?.toString(),
      slug: (map['slug'] ?? '').toString(),
      publicUrl: (map['publicUrl'] ?? '').toString(),
      seoDescription: (map['seoDescription'] ?? map['tagline'] ?? '').toString(),
      database: NgmyAppDatabaseConfig.fromMap(
        map['database'] is Map ? Map<String, dynamic>.from(map['database'] as Map) : null,
      ),
      customCode: (map['customCode'] ?? '').toString(),
    );
  }

  String toPrettyJson() {
    final encoder = const JsonEncoder.withIndent('  ');
    return encoder.convert(toMap());
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

int _ngmyParseColorHex(String hex) {
  var h = hex.trim().toUpperCase();
  if (h.startsWith('#')) h = h.substring(1);
  if (h.length == 6) h = 'FF$h';
  return int.tryParse(h, radix: 16) ?? 0xFF6366F1;
}

String _ngmyNewId(String prefix) => '${prefix}_${DateTime.now().millisecondsSinceEpoch}';

bool ngmyUserCanAccessAppBuilder({required bool isAdmin, required bool appBuilderEnabled}) =>
    isAdmin || appBuilderEnabled;
