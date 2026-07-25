import 'dart:convert';

/// iFixit-style repair manual categories.
class RepairGuideCategory {
  const RepairGuideCategory({
    required this.id,
    required this.label,
    required this.iconName,
    required this.colors,
  });

  final String id;
  final String label;
  final String iconName;
  final List<int> colors; // ARGB ints for JSON

  Map<String, dynamic> toJson() => {
        'id': id,
        'label': label,
        'iconName': iconName,
        'colors': colors,
      };

  factory RepairGuideCategory.fromJson(Map<String, dynamic> json) {
    return RepairGuideCategory(
      id: (json['id'] ?? '').toString(),
      label: (json['label'] ?? '').toString(),
      iconName: (json['iconName'] ?? 'build').toString(),
      colors: (json['colors'] as List?)?.map((e) => (e as num).toInt()).toList() ??
          const [0xFFF97316, 0xFFEA580C],
    );
  }
}

class RepairGuideStep {
  const RepairGuideStep({
    required this.order,
    required this.title,
    required this.body,
    this.imageBase64,
    this.imageUrl,
    this.tools = const [],
    this.warning,
  });

  final int order;
  final String title;
  final String body;
  final String? imageBase64;
  final String? imageUrl;
  final List<String> tools;
  final String? warning;

  Map<String, dynamic> toJson() => {
        'order': order,
        'title': title,
        'body': body,
        if (imageBase64 != null && imageBase64!.isNotEmpty) 'imageBase64': imageBase64,
        if (imageUrl != null && imageUrl!.isNotEmpty) 'imageUrl': imageUrl,
        'tools': tools,
        if (warning != null && warning!.isNotEmpty) 'warning': warning,
      };

  factory RepairGuideStep.fromJson(Map<String, dynamic> json) {
    return RepairGuideStep(
      order: (json['order'] as num?)?.toInt() ?? 0,
      title: (json['title'] ?? '').toString(),
      body: (json['body'] ?? '').toString(),
      imageBase64: json['imageBase64'] as String?,
      imageUrl: json['imageUrl'] as String?,
      tools: (json['tools'] as List?)?.map((e) => e.toString()).toList() ?? const [],
      warning: json['warning'] as String?,
    );
  }

  RepairGuideStep copyWith({
    int? order,
    String? title,
    String? body,
    String? imageBase64,
    List<String>? tools,
    String? warning,
    bool clearImage = false,
  }) {
    return RepairGuideStep(
      order: order ?? this.order,
      title: title ?? this.title,
      body: body ?? this.body,
      imageBase64: clearImage ? null : (imageBase64 ?? this.imageBase64),
      tools: tools ?? this.tools,
      warning: warning ?? this.warning,
    );
  }
}

class RepairGuide {
  const RepairGuide({
    required this.id,
    required this.categoryId,
    required this.make,
    required this.model,
    this.year,
    this.variant = '',
    required this.repairTitle,
    this.summary = '',
    this.coverImageBase64,
    this.coverImageUrl,
    required this.steps,
    required this.authorEmail,
    required this.createdAt,
    required this.updatedAt,
    this.isSeed = false,
  });

  final String id;
  final String categoryId;
  final String make;
  final String model;
  final int? year;
  final String variant;
  final String repairTitle;
  final String summary;
  final String? coverImageBase64;
  final String? coverImageUrl;
  final List<RepairGuideStep> steps;
  final String authorEmail;
  final DateTime createdAt;
  final DateTime updatedAt;
  final bool isSeed;

  String get deviceLabel {
    final y = year != null ? ' $year' : '';
    final v = variant.trim().isEmpty ? '' : ' ${variant.trim()}';
    return '${make.trim()} ${model.trim()}$y$v'.trim();
  }

  String get fullTitle => '$deviceLabel — $repairTitle';

  Map<String, dynamic> toJson() => {
        'id': id,
        'categoryId': categoryId,
        'make': make,
        'model': model,
        if (year != null) 'year': year,
        'variant': variant,
        'repairTitle': repairTitle,
        'summary': summary,
        if (coverImageBase64 != null && coverImageBase64!.isNotEmpty) 'coverImageBase64': coverImageBase64,
        if (coverImageUrl != null && coverImageUrl!.isNotEmpty) 'coverImageUrl': coverImageUrl,
        'steps': steps.map((s) => s.toJson()).toList(),
        'authorEmail': authorEmail,
        'createdAt': createdAt.toIso8601String(),
        'updatedAt': updatedAt.toIso8601String(),
        'isSeed': isSeed,
      };

  factory RepairGuide.fromJson(Map<String, dynamic> json) {
    final stepsRaw = json['steps'];
    var steps = <RepairGuideStep>[];
    if (stepsRaw is List) {
      steps = stepsRaw
          .whereType<Map>()
          .map((e) => RepairGuideStep.fromJson(Map<String, dynamic>.from(e)))
          .toList();
      steps.sort((a, b) => a.order.compareTo(b.order));
    }
    return RepairGuide(
      id: (json['id'] ?? '').toString(),
      categoryId: (json['categoryId'] ?? 'car').toString(),
      make: (json['make'] ?? '').toString(),
      model: (json['model'] ?? '').toString(),
      year: (json['year'] as num?)?.toInt(),
      variant: (json['variant'] ?? '').toString(),
      repairTitle: (json['repairTitle'] ?? '').toString(),
      summary: (json['summary'] ?? '').toString(),
      coverImageBase64: json['coverImageBase64'] as String?,
      coverImageUrl: json['coverImageUrl'] as String?,
      steps: steps,
      authorEmail: (json['authorEmail'] ?? '').toString(),
      createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
      isSeed: json['isSeed'] == true,
    );
  }

  RepairGuide copyWith({
    String? categoryId,
    String? make,
    String? model,
    int? year,
    String? variant,
    String? repairTitle,
    String? summary,
    String? coverImageBase64,
    List<RepairGuideStep>? steps,
    DateTime? updatedAt,
    bool clearCover = false,
  }) {
    return RepairGuide(
      id: id,
      categoryId: categoryId ?? this.categoryId,
      make: make ?? this.make,
      model: model ?? this.model,
      year: year ?? this.year,
      variant: variant ?? this.variant,
      repairTitle: repairTitle ?? this.repairTitle,
      summary: summary ?? this.summary,
      coverImageBase64: clearCover ? null : (coverImageBase64 ?? this.coverImageBase64),
      steps: steps ?? this.steps,
      authorEmail: authorEmail,
      createdAt: createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      isSeed: isSeed,
    );
  }
}

String ngmyRepairGuideNewId() => 'rg_${DateTime.now().millisecondsSinceEpoch}';

/// Built-in categories (mirrors iFixit groupings).
const kRepairGuideCategories = <RepairGuideCategory>[
  RepairGuideCategory(id: 'car', label: 'Car & Truck', iconName: 'directions_car', colors: [0xFF2563EB, 0xFF1D4ED8]),
  RepairGuideCategory(id: 'phone', label: 'Phone', iconName: 'smartphone', colors: [0xFF7C3AED, 0xFF6D28D9]),
  RepairGuideCategory(id: 'pc', label: 'PC', iconName: 'computer', colors: [0xFF0EA5E9, 0xFF0284C7]),
  RepairGuideCategory(id: 'appliance', label: 'Appliance', iconName: 'kitchen', colors: [0xFF10B981, 0xFF059669]),
  RepairGuideCategory(id: 'electronics', label: 'Electronics', iconName: 'devices', colors: [0xFFF59E0B, 0xFFD97706]),
  RepairGuideCategory(id: 'tablet', label: 'Tablet', iconName: 'tablet', colors: [0xFFEC4899, 0xFFDB2777]),
  RepairGuideCategory(id: 'console', label: 'Game Console', iconName: 'sports_esports', colors: [0xFF8B5CF6, 0xFF7C3AED]),
  RepairGuideCategory(id: 'camera', label: 'Camera', iconName: 'photo_camera', colors: [0xFF64748B, 0xFF475569]),
  RepairGuideCategory(id: 'mac', label: 'Mac', iconName: 'laptop_mac', colors: [0xFF94A3B8, 0xFF64748B]),
  RepairGuideCategory(id: 'household', label: 'Household', iconName: 'home_repair_service', colors: [0xFF14B8A6, 0xFF0D9488]),
];

RepairGuideCategory? repairGuideCategoryById(String id) {
  for (final c in kRepairGuideCategories) {
    if (c.id == id) return c;
  }
  return null;
}

RepairGuide repairGuideFromJsonString(String raw) =>
    RepairGuide.fromJson(jsonDecode(raw) as Map<String, dynamic>);
