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
    this.tools = const [],
    this.warning,
  });

  final int order;
  final String title;
  final String body;
  final String? imageBase64;
  final List<String> tools;
  final String? warning;

  Map<String, dynamic> toJson() => {
        'order': order,
        'title': title,
        'body': body,
        if (imageBase64 != null && imageBase64!.isNotEmpty) 'imageBase64': imageBase64,
        'tools': tools,
        if (warning != null && warning!.isNotEmpty) 'warning': warning,
      };

  factory RepairGuideStep.fromJson(Map<String, dynamic> json) {
    return RepairGuideStep(
      order: (json['order'] as num?)?.toInt() ?? 0,
      title: (json['title'] ?? '').toString(),
      body: (json['body'] ?? '').toString(),
      imageBase64: json['imageBase64'] as String?,
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

/// Sample guides so the toolkit feels alive on first open.
List<RepairGuide> kRepairGuideSeedGuides() {
  final now = DateTime.now();
  return [
    RepairGuide(
      id: 'seed_nissan_altima_spark',
      categoryId: 'car',
      make: 'Nissan',
      model: 'Altima',
      year: 2018,
      variant: '2.5L',
      repairTitle: 'Spark Plug Replacement',
      summary: 'Replace all four spark plugs on the QR25DE engine. Typical interval: 105,000 miles.',
      authorEmail: 'ngmy@seed',
      createdAt: now,
      updatedAt: now,
      isSeed: true,
      steps: const [
        RepairGuideStep(
          order: 1,
          title: 'Gather tools & parts',
          body:
              'You need: 4x NGK or OEM spark plugs (QR25DE), 10 mm socket, spark plug socket (5/8"), extension, torque wrench, dielectric grease, and a clean workspace.',
          tools: ['Spark plug socket', 'Torque wrench', '10 mm socket'],
        ),
        RepairGuideStep(
          order: 2,
          title: 'Disconnect the battery',
          body:
              'Open the hood. Loosen the negative (-) terminal with a 10 mm wrench and tuck the cable aside so it cannot contact the terminal while you work.',
          warning: 'Always disconnect the battery before working near the ignition system.',
          tools: ['10 mm wrench'],
        ),
        RepairGuideStep(
          order: 3,
          title: 'Remove engine cover',
          body:
              'Pull up the plastic engine cover — it clips into place with no tools. Set it aside to expose the ignition coils on top of the engine.',
        ),
        RepairGuideStep(
          order: 4,
          title: 'Remove ignition coils',
          body:
              'Unplug each coil connector (press the tab). Remove the 10 mm bolt holding each coil. Pull the coil straight up — do not twist. Repeat for all four cylinders.',
          tools: ['10 mm socket'],
        ),
        RepairGuideStep(
          order: 5,
          title: 'Remove old spark plugs',
          body:
              'Use a spark plug socket and extension to loosen each plug counter-clockwise. Note: cylinders 2 and 4 are slightly harder to reach — a swivel adapter helps.',
          tools: ['Spark plug socket', 'Extension'],
        ),
        RepairGuideStep(
          order: 6,
          title: 'Gap & install new plugs',
          body:
              'Check gap on new plugs (spec: 0.043 in / 1.1 mm for QR25DE). Hand-thread each plug clockwise until snug, then torque to 25 N·m (18 ft·lb). Apply a thin coat of anti-seize to threads if recommended by plug manufacturer.',
          tools: ['Feeler gauge', 'Torque wrench'],
        ),
        RepairGuideStep(
          order: 7,
          title: 'Reassemble & test',
          body:
              'Reinstall coils, connectors, engine cover, and battery. Start the engine — it may idle rough for 30 seconds while the ECU relearns. Confirm no misfire codes with an OBD scanner.',
        ),
      ],
    ),
    RepairGuide(
      id: 'seed_iphone_screen',
      categoryId: 'phone',
      make: 'Apple',
      model: 'iPhone 13',
      year: 2021,
      repairTitle: 'Screen Replacement',
      summary: 'Swap a cracked display assembly. Requires heat and careful flex cable handling.',
      authorEmail: 'ngmy@seed',
      createdAt: now,
      updatedAt: now,
      isSeed: true,
      steps: const [
        RepairGuideStep(
          order: 1,
          title: 'Power off & remove screws',
          body: 'Power off the phone. Remove the two pentalobe screws at the bottom edge.',
          tools: ['Pentalobe driver'],
        ),
        RepairGuideStep(
          order: 2,
          title: 'Heat and open',
          body: 'Apply heat around the edges (80–90°C). Use a suction cup and pick to lift the display slightly, then slide picks along the adhesive.',
          warning: 'Do not lift the display more than 90° — flex cables are fragile.',
          tools: ['Heat gun', 'Suction cup', 'Opening picks'],
        ),
        RepairGuideStep(
          order: 3,
          title: 'Disconnect cables',
          body: 'Remove bracket screws. Disconnect battery first, then display and Face ID flex cables in order.',
        ),
        RepairGuideStep(
          order: 4,
          title: 'Install new screen',
          body: 'Transfer earpiece and sensors if needed. Connect cables, reassemble brackets, test before sealing adhesive.',
        ),
      ],
    ),
    RepairGuide(
      id: 'seed_washer_pump',
      categoryId: 'appliance',
      make: 'Whirlpool',
      model: 'Front-Load Washer',
      year: 2019,
      repairTitle: 'Drain Pump Replacement',
      summary: 'Fix standing water and slow drain by replacing the pump filter assembly.',
      authorEmail: 'ngmy@seed',
      createdAt: now,
      updatedAt: now,
      isSeed: true,
      steps: const [
        RepairGuideStep(
          order: 1,
          title: 'Unplug & drain',
          body: 'Unplug the washer. Place towels and a shallow pan under the filter access at the front lower panel.',
        ),
        RepairGuideStep(
          order: 2,
          title: 'Open filter access',
          body: 'Twist the filter cap counter-clockwise slowly — water will drain out. Remove debris from the trap.',
        ),
        RepairGuideStep(
          order: 3,
          title: 'Replace pump if needed',
          body: 'If the impeller is damaged, remove the rear panel, disconnect hoses and wiring, swap the pump, and reassemble.',
          tools: ['Phillips screwdriver', 'Pliers'],
        ),
      ],
    ),
  ];
}

String repairGuideCategoryIconName(String iconName) => iconName;

RepairGuide repairGuideFromJsonString(String raw) =>
    RepairGuide.fromJson(jsonDecode(raw) as Map<String, dynamic>);
