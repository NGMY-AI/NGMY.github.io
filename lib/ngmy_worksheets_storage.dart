import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

const String _projectsKeyPrefix = 'ngmy_worksheets_projects_v2_';
const String _familyTreesKeyPrefix = 'ngmy_worksheets_family_trees_v1_';

String _projectsKey(String userEmail) =>
    '$_projectsKeyPrefix${userEmail.toLowerCase().trim().hashCode.abs()}';

String _familyTreesKey(String userEmail) =>
    '$_familyTreesKeyPrefix${userEmail.toLowerCase().trim().hashCode.abs()}';

class BudgetItem {
  final String id;
  final String name;
  final double price;

  const BudgetItem({
    required this.id,
    required this.name,
    required this.price,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'price': price,
      };

  factory BudgetItem.fromJson(Map<String, dynamic> json) {
    return BudgetItem(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      price: (json['price'] as num?)?.toDouble() ?? 0,
    );
  }

  BudgetItem copyWith({String? name, double? price}) {
    return BudgetItem(
      id: id,
      name: name ?? this.name,
      price: price ?? this.price,
    );
  }
}

class WorksheetProject {
  final String id;
  final String name;
  final String? thumbnailPath;
  final List<BudgetItem> items;
  final DateTime createdAt;

  const WorksheetProject({
    required this.id,
    required this.name,
    this.thumbnailPath,
    this.items = const [],
    required this.createdAt,
  });

  double get totalSpending =>
      items.fold(0.0, (sum, item) => sum + item.price);

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'thumbnailPath': thumbnailPath,
        'items': items.map((e) => e.toJson()).toList(),
        'createdAt': createdAt.toIso8601String(),
      };

  factory WorksheetProject.fromJson(Map<String, dynamic> json) {
    final rawItems = json['items'];
    List<BudgetItem> items = [];
    if (rawItems is List) {
      items = rawItems
          .whereType<Map>()
          .map((e) => BudgetItem.fromJson(Map<String, dynamic>.from(e)))
          .where((e) => e.id.isNotEmpty)
          .toList();
    }
    return WorksheetProject(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      thumbnailPath: json['thumbnailPath']?.toString(),
      items: items,
      createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ??
          DateTime.now(),
    );
  }

  WorksheetProject copyWith({
    String? name,
    String? thumbnailPath,
    List<BudgetItem>? items,
  }) {
    return WorksheetProject(
      id: id,
      name: name ?? this.name,
      thumbnailPath: thumbnailPath ?? this.thumbnailPath,
      items: items ?? this.items,
      createdAt: createdAt,
    );
  }
}

enum FamilyGender { male, female, unknown }

FamilyGender familyGenderFromString(String? raw) {
  switch ((raw ?? '').toLowerCase()) {
    case 'male':
    case 'm':
      return FamilyGender.male;
    case 'female':
    case 'f':
      return FamilyGender.female;
    default:
      return FamilyGender.unknown;
  }
}

String familyGenderToString(FamilyGender gender) {
  switch (gender) {
    case FamilyGender.male:
      return 'male';
    case FamilyGender.female:
      return 'female';
    case FamilyGender.unknown:
      return 'unknown';
  }
}

class FamilyMember {
  final String id;
  final String name;
  final FamilyGender gender;
  final String? parentId;
  final String? spouseId;
  final String? photoPath;
  final String notes;
  final String birthDate;
  final String birthPlace;
  final String occupation;
  final int birthOrder;
  final bool hidden;

  const FamilyMember({
    required this.id,
    required this.name,
    this.gender = FamilyGender.unknown,
    this.parentId,
    this.spouseId,
    this.photoPath,
    this.notes = '',
    this.birthDate = '',
    this.birthPlace = '',
    this.occupation = '',
    this.birthOrder = 1,
    this.hidden = false,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'gender': familyGenderToString(gender),
        'parentId': parentId,
        'spouseId': spouseId,
        'photoPath': photoPath,
        'notes': notes,
        'birthDate': birthDate,
        'birthPlace': birthPlace,
        'occupation': occupation,
        'birthOrder': birthOrder,
        'hidden': hidden,
      };

  factory FamilyMember.fromJson(Map<String, dynamic> json) {
    return FamilyMember(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      gender: familyGenderFromString(json['gender']?.toString()),
      parentId: json['parentId']?.toString(),
      spouseId: json['spouseId']?.toString(),
      photoPath: json['photoPath']?.toString(),
      notes: (json['notes'] ?? '').toString(),
      birthDate: (json['birthDate'] ?? '').toString(),
      birthPlace: (json['birthPlace'] ?? '').toString(),
      occupation: (json['occupation'] ?? '').toString(),
      birthOrder: (json['birthOrder'] as num?)?.toInt() ?? 1,
      hidden: json['hidden'] == true,
    );
  }

  FamilyMember copyWith({
    String? name,
    FamilyGender? gender,
    String? parentId,
    String? spouseId,
    String? photoPath,
    String? notes,
    String? birthDate,
    String? birthPlace,
    String? occupation,
    int? birthOrder,
    bool? hidden,
  }) {
    return FamilyMember(
      id: id,
      name: name ?? this.name,
      gender: gender ?? this.gender,
      parentId: parentId ?? this.parentId,
      spouseId: spouseId ?? this.spouseId,
      photoPath: photoPath ?? this.photoPath,
      notes: notes ?? this.notes,
      birthDate: birthDate ?? this.birthDate,
      birthPlace: birthPlace ?? this.birthPlace,
      occupation: occupation ?? this.occupation,
      birthOrder: birthOrder ?? this.birthOrder,
      hidden: hidden ?? this.hidden,
    );
  }
}

class FamilyTree {
  final String id;
  final String name;
  final String code;
  final bool isPrivate;
  final List<String> collaboratorEmails;
  final List<FamilyMember> members;
  final DateTime createdAt;

  const FamilyTree({
    required this.id,
    required this.name,
    required this.code,
    this.isPrivate = true,
    this.collaboratorEmails = const [],
    this.members = const [],
    required this.createdAt,
  });

  int get visibleMemberCount => members.where((m) => !m.hidden).length;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'code': code,
        'isPrivate': isPrivate,
        'collaboratorEmails': collaboratorEmails,
        'members': members.map((e) => e.toJson()).toList(),
        'createdAt': createdAt.toIso8601String(),
      };

  factory FamilyTree.fromJson(Map<String, dynamic> json) {
    final rawMembers = json['members'];
    List<FamilyMember> members = [];
    if (rawMembers is List) {
      members = rawMembers
          .whereType<Map>()
          .map((e) => FamilyMember.fromJson(Map<String, dynamic>.from(e)))
          .where((e) => e.id.isNotEmpty)
          .toList();
    }
    final rawCollab = json['collaboratorEmails'];
    final collabs = rawCollab is List
        ? rawCollab.map((e) => e.toString()).toList()
        : <String>[];
    return FamilyTree(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      code: (json['code'] ?? '').toString(),
      isPrivate: json['isPrivate'] != false,
      collaboratorEmails: collabs,
      members: members,
      createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ??
          DateTime.now(),
    );
  }

  FamilyTree copyWith({
    String? name,
    String? code,
    bool? isPrivate,
    List<String>? collaboratorEmails,
    List<FamilyMember>? members,
  }) {
    return FamilyTree(
      id: id,
      name: name ?? this.name,
      code: code ?? this.code,
      isPrivate: isPrivate ?? this.isPrivate,
      collaboratorEmails: collaboratorEmails ?? this.collaboratorEmails,
      members: members ?? this.members,
      createdAt: createdAt,
    );
  }
}

String generateFamilyTreeCode(String name) {
  final cleaned = name.toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
  if (cleaned.isEmpty) return 'TREE';
  return cleaned.length <= 8 ? cleaned : cleaned.substring(0, 8);
}

Future<List<WorksheetProject>> loadWorksheetProjects(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final v2 = prefs.getString(_projectsKey(userEmail));
  if (v2 != null && v2.isNotEmpty) {
    return _decodeProjects(v2);
  }
  final legacyKey =
      'ngmy_worksheets_projects_v1_${userEmail.toLowerCase().trim().hashCode.abs()}';
  final legacy = prefs.getString(legacyKey);
  if (legacy != null && legacy.isNotEmpty) {
    final migrated = _decodeProjects(legacy);
    await saveWorksheetProjects(userEmail, migrated);
    return migrated;
  }
  return [];
}

List<WorksheetProject> _decodeProjects(String raw) {
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => WorksheetProject.fromJson(Map<String, dynamic>.from(e)))
        .where((p) => p.id.isNotEmpty && p.name.isNotEmpty)
        .toList()
      ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
  } catch (_) {
    return [];
  }
}

Future<void> saveWorksheetProjects(
  String userEmail,
  List<WorksheetProject> projects,
) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    _projectsKey(userEmail),
    jsonEncode(projects.map((p) => p.toJson()).toList()),
  );
}

Future<void> upsertWorksheetProject(
  String userEmail,
  WorksheetProject project,
) async {
  final list = await loadWorksheetProjects(userEmail);
  final idx = list.indexWhere((p) => p.id == project.id);
  if (idx == -1) {
    list.insert(0, project);
  } else {
    list[idx] = project;
  }
  await saveWorksheetProjects(userEmail, list);
}

Future<void> deleteWorksheetProject(String userEmail, String projectId) async {
  final list = await loadWorksheetProjects(userEmail);
  list.removeWhere((p) => p.id == projectId);
  await saveWorksheetProjects(userEmail, list);
}

Future<List<FamilyTree>> loadFamilyTrees(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_familyTreesKey(userEmail));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => FamilyTree.fromJson(Map<String, dynamic>.from(e)))
        .where((t) => t.id.isNotEmpty && t.name.isNotEmpty)
        .toList()
      ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
  } catch (_) {
    return [];
  }
}

Future<void> saveFamilyTrees(
  String userEmail,
  List<FamilyTree> trees,
) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    _familyTreesKey(userEmail),
    jsonEncode(trees.map((t) => t.toJson()).toList()),
  );
}

Future<void> upsertFamilyTree(String userEmail, FamilyTree tree) async {
  final list = await loadFamilyTrees(userEmail);
  final idx = list.indexWhere((t) => t.id == tree.id);
  if (idx == -1) {
    list.insert(0, tree);
  } else {
    list[idx] = tree;
  }
  await saveFamilyTrees(userEmail, list);
}

Future<void> deleteFamilyTree(String userEmail, String treeId) async {
  final list = await loadFamilyTrees(userEmail);
  list.removeWhere((t) => t.id == treeId);
  await saveFamilyTrees(userEmail, list);
}

List<FamilyMember> visibleMembers(FamilyTree tree) =>
    tree.members.where((m) => !m.hidden).toList();

List<FamilyMember> childrenOf(FamilyTree tree, String parentId) {
  return visibleMembers(tree)
      .where((m) => m.parentId == parentId)
      .toList()
    ..sort((a, b) => a.birthOrder.compareTo(b.birthOrder));
}

FamilyMember? rootMember(FamilyTree tree) {
  final visible = visibleMembers(tree);
  if (visible.isEmpty) return null;
  final roots = visible.where((m) => m.parentId == null || m.parentId!.isEmpty);
  if (roots.isNotEmpty) return roots.first;
  return visible.first;
}

int descendantCount(FamilyTree tree, String memberId) {
  final kids = childrenOf(tree, memberId);
  var count = kids.length;
  for (final child in kids) {
    count += descendantCount(tree, child.id);
  }
  return count;
}
