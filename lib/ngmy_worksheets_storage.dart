import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_worksheet_helpers.dart';

const String _projectsKeyPrefix = 'ngmy_worksheets_projects_v2_';
const String _projectsIndexV3Prefix = 'ngmy_worksheets_index_v3_';
const String _projectItemV3Prefix = 'ngmy_worksheet_item_v3_';
const String _projectThumbV3Prefix = 'ngmy_worksheet_thumb_v3_';
const String _familyTreesKeyPrefix = 'ngmy_worksheets_family_trees_v1_';

String _emailSlug(String userEmail) {
  final email = userEmail.toLowerCase().trim();
  if (email.isEmpty) return '';
  return email.replaceAll(RegExp(r'[^a-z0-9@._+-]'), '_');
}

String _projectsKey(String userEmail) =>
    '$_projectsKeyPrefix${userEmail.toLowerCase().trim().hashCode.abs()}';

String _projectsIndexV3Key(String userEmail) =>
    '$_projectsIndexV3Prefix${_emailSlug(userEmail)}';

String _projectItemV3Key(String userEmail, String projectId) =>
    '$_projectItemV3Prefix${_emailSlug(userEmail)}_$projectId';

String _projectThumbV3Key(String userEmail, String projectId) =>
    '$_projectThumbV3Prefix${_emailSlug(userEmail)}_$projectId';

Future<bool> _safePrefsSetString(
  SharedPreferences prefs,
  String key,
  String value,
) async {
  try {
    return await prefs.setString(key, value);
  } catch (e) {
    debugPrint('[worksheets] setString failed for $key: $e');
    return false;
  }
}

Future<void> _safePrefsRemove(SharedPreferences prefs, String key) async {
  try {
    await prefs.remove(key);
  } catch (e) {
    debugPrint('[worksheets] remove failed for $key: $e');
  }
}

WorksheetProject _projectWithStoredThumbnail(
  WorksheetProject project,
  String? storedThumb,
) {
  if (storedThumb != null && storedThumb.isNotEmpty) {
    return project.copyWith(thumbnailPath: storedThumb);
  }
  return project;
}

String _familyTreesKey(String userEmail) =>
    '$_familyTreesKeyPrefix${userEmail.toLowerCase().trim().hashCode.abs()}';

String _normalizedEmail(String userEmail) => userEmail.toLowerCase().trim();

class BudgetItem {
  final String id;
  final String name;
  final double quantity;
  final double unitPrice;
  final String unitLabel;

  const BudgetItem({
    required this.id,
    required this.name,
    this.quantity = 1,
    this.unitPrice = 0,
    this.unitLabel = 'each',
  });

  /// Line total (quantity × unit price).
  double get lineTotal => quantity * unitPrice;

  /// Legacy alias — older UI referred to line total as [price].
  double get price => lineTotal;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'quantity': quantity,
        'unitPrice': unitPrice,
        'unitLabel': unitLabel,
        'price': lineTotal,
      };

  factory BudgetItem.fromJson(Map<String, dynamic> json) {
    final legacyPrice = (json['price'] as num?)?.toDouble() ?? 0;
    final qty = (json['quantity'] as num?)?.toDouble();
    final unit = (json['unitPrice'] as num?)?.toDouble();
    if (qty != null && unit != null) {
      return BudgetItem(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? '').toString(),
        quantity: qty <= 0 ? 1 : qty,
        unitPrice: unit,
        unitLabel: (json['unitLabel'] ?? 'each').toString().trim().isEmpty
            ? 'each'
            : (json['unitLabel'] ?? 'each').toString(),
      );
    }
    return BudgetItem(
      id: (json['id'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      quantity: 1,
      unitPrice: legacyPrice,
      unitLabel: 'each',
    );
  }

  BudgetItem copyWith({
    String? name,
    double? quantity,
    double? unitPrice,
    String? unitLabel,
  }) {
    return BudgetItem(
      id: id,
      name: name ?? this.name,
      quantity: quantity ?? this.quantity,
      unitPrice: unitPrice ?? this.unitPrice,
      unitLabel: unitLabel ?? this.unitLabel,
    );
  }

  String get quantityLabel {
    final q = quantity;
    final whole = q == q.roundToDouble();
    final qStr = whole ? q.toInt().toString() : q.toStringAsFixed(2).replaceAll(RegExp(r'\.?0+$'), '');
    final unit = unitLabel.trim().isEmpty ? 'each' : unitLabel.trim();
    if (unit == 'each' || unit == 'pcs') return '$qStr ×';
    return '$qStr $unit ×';
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
      items.fold(0.0, (sum, item) => sum + item.lineTotal);

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
  final String deathDate;
  final String occupation;
  final int birthOrder;
  final bool hidden;
  /// How many of this member's children show in the tree before a "+ more" dropdown (0 = use tree default).
  final int visibleChildrenCap;

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
    this.deathDate = '',
    this.occupation = '',
    this.birthOrder = 1,
    this.hidden = false,
    this.visibleChildrenCap = 0,
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
        'deathDate': deathDate,
        'occupation': occupation,
        'birthOrder': birthOrder,
        'hidden': hidden,
        'visibleChildrenCap': visibleChildrenCap,
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
      deathDate: (json['deathDate'] ?? '').toString(),
      occupation: (json['occupation'] ?? '').toString(),
      birthOrder: (json['birthOrder'] as num?)?.toInt() ?? 1,
      hidden: json['hidden'] == true,
      visibleChildrenCap: (json['visibleChildrenCap'] as num?)?.toInt() ?? 0,
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
    String? deathDate,
    String? occupation,
    int? birthOrder,
    bool? hidden,
    int? visibleChildrenCap,
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
      deathDate: deathDate ?? this.deathDate,
      occupation: occupation ?? this.occupation,
      birthOrder: birthOrder ?? this.birthOrder,
      hidden: hidden ?? this.hidden,
      visibleChildrenCap: visibleChildrenCap ?? this.visibleChildrenCap,
    );
  }
}

enum FamilyTreeAccessRole { owner, editor, viewer }

FamilyTreeAccessRole familyTreeAccessRoleFromString(String? raw) {
  switch ((raw ?? '').toLowerCase()) {
    case 'editor':
      return FamilyTreeAccessRole.editor;
    case 'viewer':
      return FamilyTreeAccessRole.viewer;
    default:
      return FamilyTreeAccessRole.owner;
  }
}

String familyTreeAccessRoleToString(FamilyTreeAccessRole role) {
  switch (role) {
    case FamilyTreeAccessRole.editor:
      return 'editor';
    case FamilyTreeAccessRole.viewer:
      return 'viewer';
    case FamilyTreeAccessRole.owner:
      return 'owner';
  }
}

String familyTreeOwnerEmail(FamilyTree tree, String fallbackUserEmail) {
  final owner = tree.ownerEmail.trim();
  if (owner.isNotEmpty) return _normalizedEmail(owner);
  return _normalizedEmail(fallbackUserEmail);
}

bool familyTreeIsOwner(FamilyTree tree, String userEmail) {
  final me = _normalizedEmail(userEmail);
  return me == familyTreeOwnerEmail(tree, userEmail) && tree.localRole != FamilyTreeAccessRole.viewer;
}

bool familyTreeCanEdit(FamilyTree tree, String userEmail) {
  if (tree.localRole == FamilyTreeAccessRole.viewer) return false;
  final me = _normalizedEmail(userEmail);
  final owner = familyTreeOwnerEmail(tree, userEmail);
  if (me == owner) return true;
  if (tree.localRole == FamilyTreeAccessRole.editor) return true;
  return tree.collaboratorEmails.map(_normalizedEmail).contains(me);
}

bool familyTreeCanManageCollaborators(FamilyTree tree, String userEmail) =>
    familyTreeIsOwner(tree, userEmail);

bool familyTreeCanWriteCloud(FamilyTree tree, String userEmail) => familyTreeCanEdit(tree, userEmail);

/// Max shared (view-only) family trees a user can import via QR/file.
const int kNgmyFamilyTreeMaxSharedTrees = 2;

int countViewOnlyFamilyTrees(Iterable<FamilyTree> trees) =>
    trees.where((t) => t.isViewOnly).length;

Future<bool> userHasOwnedFamilyTree(String userEmail) async {
  final list = await loadFamilyTreesLocalOnly(userEmail);
  return list.any((t) => familyTreeIsOwner(t, userEmail));
}

Future<void> assertCanImportSharedFamilyTree(String userEmail, FamilyTree imported) async {
  final list = await loadFamilyTreesLocalOnly(userEmail);
  if (list.any((t) => t.id == imported.id)) return;
  if (countViewOnlyFamilyTrees(list) >= kNgmyFamilyTreeMaxSharedTrees) {
    throw StateError(
      'You can only keep $kNgmyFamilyTreeMaxSharedTrees shared family trees. Remove one before importing another.',
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
  /// Default max children shown per parent in the tree (0 = show all).
  final int visibleChildrenPerParent;
  /// Creator account email — cloud row lives under this user.
  final String ownerEmail;
  /// Local permission for this device (viewer = QR/file recipient, read-only).
  final FamilyTreeAccessRole localRole;

  const FamilyTree({
    required this.id,
    required this.name,
    required this.code,
    this.isPrivate = true,
    this.collaboratorEmails = const [],
    this.members = const [],
    required this.createdAt,
    this.visibleChildrenPerParent = 0,
    this.ownerEmail = '',
    this.localRole = FamilyTreeAccessRole.owner,
  });

  bool get isViewOnly => localRole == FamilyTreeAccessRole.viewer;

  int get visibleMemberCount => members.where((m) => !m.hidden).length;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'code': code,
        'isPrivate': isPrivate,
        'collaboratorEmails': collaboratorEmails,
        'members': members.map((e) => e.toJson()).toList(),
        'createdAt': createdAt.toIso8601String(),
        'visibleChildrenPerParent': visibleChildrenPerParent,
        'ownerEmail': ownerEmail,
        'localRole': familyTreeAccessRoleToString(localRole),
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
      visibleChildrenPerParent: (json['visibleChildrenPerParent'] as num?)?.toInt() ?? 0,
      ownerEmail: (json['ownerEmail'] ?? '').toString(),
      localRole: familyTreeAccessRoleFromString(json['localRole']?.toString()),
    );
  }

  FamilyTree copyWith({
    String? name,
    String? code,
    bool? isPrivate,
    List<String>? collaboratorEmails,
    List<FamilyMember>? members,
    int? visibleChildrenPerParent,
    String? ownerEmail,
    FamilyTreeAccessRole? localRole,
  }) {
    return FamilyTree(
      id: id,
      name: name ?? this.name,
      code: code ?? this.code,
      isPrivate: isPrivate ?? this.isPrivate,
      collaboratorEmails: collaboratorEmails ?? this.collaboratorEmails,
      members: members ?? this.members,
      createdAt: createdAt,
      visibleChildrenPerParent: visibleChildrenPerParent ?? this.visibleChildrenPerParent,
      ownerEmail: ownerEmail ?? this.ownerEmail,
      localRole: localRole ?? this.localRole,
    );
  }
}

String generateFamilyTreeCode(String name) {
  final cleaned = name.toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
  if (cleaned.isEmpty) return 'TREE';
  return cleaned.length <= 8 ? cleaned : cleaned.substring(0, 8);
}

Future<List<WorksheetProject>> loadWorksheetProjects(String userEmail) async {
  final email = _normalizedEmail(userEmail);
  if (email.isEmpty) return [];

  final prefs = await SharedPreferences.getInstance();
  await prefs.reload();

  final v3 = await _loadWorksheetProjectsV3(prefs, email);
  if (v3.isNotEmpty) return v3;

  final v2 = prefs.getString(_projectsKey(email));
  if (v2 != null && v2.isNotEmpty) {
    final migrated = _decodeProjects(v2);
    if (migrated.isNotEmpty) {
      await saveWorksheetProjects(email, migrated);
      return migrated;
    }
  }

  final legacyKey =
      'ngmy_worksheets_projects_v1_${email.hashCode.abs()}';
  final legacy = prefs.getString(legacyKey);
  if (legacy != null && legacy.isNotEmpty) {
    final migrated = _decodeProjects(legacy);
    if (migrated.isNotEmpty) {
      await saveWorksheetProjects(email, migrated);
      return migrated;
    }
  }
  return [];
}

Future<List<WorksheetProject>> _loadWorksheetProjectsV3(
  SharedPreferences prefs,
  String email,
) async {
  final indexKey = _projectsIndexV3Key(email);
  final rawIndex = prefs.getString(indexKey);
  if (rawIndex == null || rawIndex.trim().isEmpty) return [];

  try {
    final decoded = jsonDecode(rawIndex);
    if (decoded is! List) return [];
    final projects = <WorksheetProject>[];
    for (final rawId in decoded) {
      final id = rawId.toString().trim();
      if (id.isEmpty) continue;
      final rawProject = prefs.getString(_projectItemV3Key(email, id));
      if (rawProject == null || rawProject.isEmpty) continue;
      try {
        final map = jsonDecode(rawProject);
        if (map is! Map) continue;
        final project = WorksheetProject.fromJson(Map<String, dynamic>.from(map));
        if (project.id.isNotEmpty && project.name.isNotEmpty) {
          final storedThumb = prefs.getString(_projectThumbV3Key(email, id));
          projects.add(_projectWithStoredThumbnail(project, storedThumb));
        }
      } catch (_) {}
    }
    projects.sort((a, b) => b.createdAt.compareTo(a.createdAt));
    return projects;
  } catch (_) {
    return [];
  }
}

Future<WorksheetProject?> loadWorksheetProjectById(
  String userEmail,
  String projectId,
) async {
  final email = _normalizedEmail(userEmail);
  final id = projectId.trim();
  if (email.isEmpty || id.isEmpty) return null;
  final list = await loadWorksheetProjects(email);
  for (final p in list) {
    if (p.id == id) return p;
  }
  return null;
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

Future<bool> saveWorksheetProjects(
  String userEmail,
  List<WorksheetProject> projects,
) async {
  final email = _normalizedEmail(userEmail);
  if (email.isEmpty) return false;

  final prefs = await SharedPreferences.getInstance();
  final ids = <String>[];

  try {
    final previousIndex = prefs.getString(_projectsIndexV3Key(email));
    if (previousIndex != null && previousIndex.isNotEmpty) {
      try {
        final oldIds = (jsonDecode(previousIndex) as List).map((e) => e.toString()).toSet();
        final keep = projects.map((p) => p.id).where((id) => id.isNotEmpty).toSet();
        for (final oldId in oldIds) {
          if (!keep.contains(oldId)) {
            await _safePrefsRemove(prefs, _projectItemV3Key(email, oldId));
            await _safePrefsRemove(prefs, _projectThumbV3Key(email, oldId));
          }
        }
      } catch (_) {}
    }

    for (final project in projects) {
      if (project.id.isEmpty || project.name.trim().isEmpty) continue;

      final thumbnail = project.thumbnailPath?.trim();
      WorksheetProject coreProject = project;
      if (thumbnail != null && thumbnail.isNotEmpty) {
        var thumbToStore = thumbnail;
        var thumbSaved = await _safePrefsSetString(
          prefs,
          _projectThumbV3Key(email, project.id),
          thumbToStore,
        );
        if (!thumbSaved) {
          final shrunk = await ngmyWorksheetShareThumbnail(thumbnail, forQr: false);
          if (shrunk != null && shrunk.isNotEmpty) {
            thumbToStore = shrunk;
            thumbSaved = await _safePrefsSetString(
              prefs,
              _projectThumbV3Key(email, project.id),
              thumbToStore,
            );
          }
        }
        coreProject = thumbSaved
            ? project.copyWith(thumbnailPath: null)
            : project.copyWith(thumbnailPath: thumbToStore);
      } else {
        await _safePrefsRemove(prefs, _projectThumbV3Key(email, project.id));
      }

      final coreSaved = await _safePrefsSetString(
        prefs,
        _projectItemV3Key(email, project.id),
        jsonEncode(coreProject.toJson()),
      );
      if (!coreSaved) {
        debugPrint('[worksheets] failed to save project ${project.id} for $email');
        continue;
      }
      ids.add(project.id);
    }

    final indexSaved = await _safePrefsSetString(
      prefs,
      _projectsIndexV3Key(email),
      jsonEncode(ids),
    );
    if (!indexSaved) {
      debugPrint('[worksheets] failed to save project index for $email');
      return false;
    }

    // Lite v2 mirror for migration only — never embed thumbnails (quota overflow on web).
    final liteMirror = projects
        .where((p) => ids.contains(p.id))
        .map((p) => p.copyWith(thumbnailPath: null).toJson())
        .toList();
    await _safePrefsSetString(
      prefs,
      _projectsKey(email),
      jsonEncode(liteMirror),
    );

    await prefs.reload();
    if (projects.isNotEmpty && ids.isEmpty) return false;
    return true;
  } catch (e) {
    debugPrint('[worksheets] saveWorksheetProjects error: $e');
    return false;
  }
}

Future<bool> upsertWorksheetProject(
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
  return saveWorksheetProjects(userEmail, list);
}

Future<void> deleteWorksheetProject(String userEmail, String projectId) async {
  final list = await loadWorksheetProjects(userEmail);
  list.removeWhere((p) => p.id == projectId);
  await saveWorksheetProjects(userEmail, list);
}

Future<List<FamilyTree>> loadFamilyTrees(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  List<FamilyTree> local = [];
  final raw = prefs.getString(_familyTreesKey(userEmail));
  if (raw != null && raw.isNotEmpty) {
    try {
      final list = jsonDecode(raw);
      if (list is List) {
        local = list
            .whereType<Map>()
            .map((e) => FamilyTree.fromJson(Map<String, dynamic>.from(e)))
            .where((t) => t.id.isNotEmpty && t.name.isNotEmpty)
            .toList()
          ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
      }
    } catch (_) {}
  }

  final remote = await _fetchFamilyTreesFromCloud(userEmail);
  if (remote == null) return local;

  final merged = _mergeFamilyTreeLists(local, remote);
  final mergedJson = jsonEncode(merged.map((t) => t.toJson()).toList());
  if (mergedJson != (raw ?? '')) {
    await _persistFamilyTreesLocally(userEmail, merged);
  }
  final ownedWritable = merged.where((t) => familyTreeCanWriteCloud(t, userEmail)).toList();
  if (ownedWritable.isNotEmpty && local.isNotEmpty && remote.isEmpty) {
    unawaited(_upsertFamilyTreesCloud(userEmail, ownedWritable));
  }
  return merged;
}

Future<void> saveFamilyTrees(
  String userEmail,
  List<FamilyTree> trees,
) async {
  await _persistFamilyTreesLocally(userEmail, trees);
  final writable = trees.where((t) => familyTreeCanWriteCloud(t, userEmail)).toList();
  if (writable.isNotEmpty) {
    await _upsertFamilyTreesCloud(userEmail, writable);
  }
}

Future<void> upsertFamilyTree(String userEmail, FamilyTree tree) async {
  List<FamilyTree> list = [];
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_familyTreesKey(userEmail));
  if (raw != null && raw.isNotEmpty) {
    try {
      final decoded = jsonDecode(raw);
      if (decoded is List) {
        list = decoded
            .whereType<Map>()
            .map((e) => FamilyTree.fromJson(Map<String, dynamic>.from(e)))
            .where((t) => t.id.isNotEmpty && t.name.isNotEmpty)
            .toList();
      }
    } catch (_) {}
  }
  final idx = list.indexWhere((t) => t.id == tree.id);
  var normalized = tree;
  if (tree.ownerEmail.trim().isEmpty && familyTreeCanEdit(tree, userEmail)) {
    normalized = tree.copyWith(
      ownerEmail: _normalizedEmail(userEmail),
      localRole: tree.localRole == FamilyTreeAccessRole.viewer ? FamilyTreeAccessRole.viewer : FamilyTreeAccessRole.owner,
    );
  }
  if (idx == -1) {
    list.insert(0, normalized);
  } else {
    list[idx] = normalized;
  }
  await _persistFamilyTreesLocally(userEmail, list);
  if (familyTreeCanWriteCloud(normalized, userEmail)) {
    final ownerEmail = familyTreeOwnerEmail(normalized, userEmail);
    final cloudOk = await _upsertFamilyTreeCloud(ownerEmail, normalized);
    if (!cloudOk) {
      debugPrint('[family_trees] saved locally; cloud sync will retry on next load.');
    }
  }
}

Future<void> deleteFamilyTree(String userEmail, String treeId) async {
  final list = await loadFamilyTrees(userEmail);
  final tree = list.where((t) => t.id == treeId).firstOrNull;
  list.removeWhere((t) => t.id == treeId);
  await _persistFamilyTreesLocally(userEmail, list);
  if (tree != null && familyTreeIsOwner(tree, userEmail)) {
    await _deleteFamilyTreeCloud(treeId);
  }
}

List<FamilyMember> visibleMembers(FamilyTree tree) =>
    tree.members.where((m) => !m.hidden).toList();

List<FamilyMember> childrenOf(FamilyTree tree, String parentId) {
  return visibleMembers(tree)
      .where((m) => m.parentId == parentId)
      .toList()
    ..sort((a, b) => a.birthOrder.compareTo(b.birthOrder));
}

int familyTreeVisibleChildCap(FamilyTree tree, FamilyMember parent) {
  if (parent.visibleChildrenCap > 0) return parent.visibleChildrenCap;
  if (tree.visibleChildrenPerParent > 0) return tree.visibleChildrenPerParent;
  return 0;
}

int siblingDisplayOrder(FamilyTree tree, FamilyMember member) {
  final parentId = member.parentId;
  if (parentId == null || parentId.isEmpty) return 0;
  final siblings = childrenOf(tree, parentId);
  final idx = siblings.indexWhere((m) => m.id == member.id);
  if (idx >= 0) return idx + 1;
  return member.birthOrder > 0 ? member.birthOrder : 0;
}

int nextBirthOrderForParent(FamilyTree tree, String? parentId) {
  if (parentId == null || parentId.isEmpty) return 1;
  final siblings = childrenOf(tree, parentId);
  if (siblings.isEmpty) return 1;
  return siblings.map((m) => m.birthOrder).reduce(math.max) + 1;
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

/// Full member profile for Supabase — photos and Family Book stay on device only.
Map<String, dynamic> familyMemberToCloudJson(FamilyMember member) => {
      'id': member.id,
      'name': member.name,
      'gender': familyGenderToString(member.gender),
      'birthDate': member.birthDate,
      'birthPlace': member.birthPlace,
      'deathDate': member.deathDate,
      'occupation': member.occupation,
      'notes': member.notes,
      'parentId': member.parentId,
      'spouseId': member.spouseId,
      'birthOrder': member.birthOrder,
      'hidden': member.hidden,
      'visibleChildrenCap': member.visibleChildrenCap,
    };

FamilyMember familyMemberFromCloudJson(Map<String, dynamic> json) {
  return FamilyMember.fromJson(json);
}

FamilyMember mergeFamilyMemberCloudIntoLocal(FamilyMember local, FamilyMember cloud) {
  return local.copyWith(
    name: cloud.name.isNotEmpty ? cloud.name : local.name,
    gender: cloud.gender != FamilyGender.unknown ? cloud.gender : local.gender,
    birthDate: cloud.birthDate.isNotEmpty ? cloud.birthDate : local.birthDate,
    birthPlace: cloud.birthPlace.isNotEmpty ? cloud.birthPlace : local.birthPlace,
    deathDate: cloud.deathDate.isNotEmpty ? cloud.deathDate : local.deathDate,
    occupation: cloud.occupation.isNotEmpty ? cloud.occupation : local.occupation,
    notes: cloud.notes.isNotEmpty ? cloud.notes : local.notes,
    parentId: cloud.parentId ?? local.parentId,
    spouseId: cloud.spouseId ?? local.spouseId,
    birthOrder: cloud.birthOrder > 0 ? cloud.birthOrder : local.birthOrder,
    hidden: cloud.hidden,
    visibleChildrenCap: cloud.visibleChildrenCap > 0 ? cloud.visibleChildrenCap : local.visibleChildrenCap,
    photoPath: local.photoPath,
  );
}

FamilyMember mergeImportedMemberIntoLocal(FamilyMember local, FamilyMember imported) {
  final importedPhoto = imported.photoPath?.trim();
  return local.copyWith(
    name: imported.name.isNotEmpty ? imported.name : local.name,
    gender: imported.gender != FamilyGender.unknown ? imported.gender : local.gender,
    parentId: imported.parentId ?? local.parentId,
    spouseId: imported.spouseId ?? local.spouseId,
    photoPath: (importedPhoto != null && importedPhoto.isNotEmpty) ? importedPhoto : local.photoPath,
    notes: imported.notes.isNotEmpty ? imported.notes : local.notes,
    birthDate: imported.birthDate.isNotEmpty ? imported.birthDate : local.birthDate,
    birthPlace: imported.birthPlace.isNotEmpty ? imported.birthPlace : local.birthPlace,
    deathDate: imported.deathDate.isNotEmpty ? imported.deathDate : local.deathDate,
    occupation: imported.occupation.isNotEmpty ? imported.occupation : local.occupation,
    birthOrder: imported.birthOrder > 0 ? imported.birthOrder : local.birthOrder,
    hidden: imported.hidden,
    visibleChildrenCap: imported.visibleChildrenCap > 0 ? imported.visibleChildrenCap : local.visibleChildrenCap,
  );
}

FamilyTree mergeFamilyTreeCloudIntoLocal(FamilyTree local, FamilyTree remote) {
  final remoteById = {for (final m in remote.members) m.id: m};
  final merged = <FamilyMember>[];
  final seen = <String>{};
  for (final lm in local.members) {
    seen.add(lm.id);
    final rm = remoteById[lm.id];
    merged.add(rm == null ? lm : mergeFamilyMemberCloudIntoLocal(lm, rm));
  }
  for (final rm in remote.members) {
    if (!seen.contains(rm.id)) merged.add(rm);
  }
  return local.copyWith(
    name: remote.name.isNotEmpty ? remote.name : local.name,
    code: remote.code.isNotEmpty ? remote.code : local.code,
    collaboratorEmails: remote.collaboratorEmails.isNotEmpty ? remote.collaboratorEmails : local.collaboratorEmails,
    members: merged,
    ownerEmail: local.ownerEmail.isNotEmpty ? local.ownerEmail : remote.ownerEmail,
    localRole: local.localRole,
  );
}

Future<List<FamilyTree>> loadFamilyTreesLocalOnly(String userEmail) async {
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

Future<void> restoreFamilyTreeMerged(
  String userEmail,
  FamilyTree imported, {
  required String bundleOwnerEmail,
}) async {
  final isOwnerImport = _normalizedEmail(bundleOwnerEmail) == _normalizedEmail(userEmail);
  final role = isOwnerImport ? FamilyTreeAccessRole.owner : FamilyTreeAccessRole.viewer;
  final owner = familyTreeOwnerEmail(imported, bundleOwnerEmail);

  final list = await loadFamilyTreesLocalOnly(userEmail);
  final idx = list.indexWhere((t) => t.id == imported.id);
  if (!isOwnerImport && idx == -1) {
    await assertCanImportSharedFamilyTree(userEmail, imported);
  }
  FamilyTree prepared;
  if (idx == -1) {
    prepared = imported.copyWith(ownerEmail: owner, localRole: role);
    list.insert(0, prepared);
  } else {
    final existing = list[idx];
    final membersById = {for (final m in existing.members) m.id: m};
    for (final im in imported.members) {
      final local = membersById[im.id];
      if (local == null) {
        membersById[im.id] = im;
      } else {
        membersById[im.id] = mergeImportedMemberIntoLocal(local, im);
      }
    }
    prepared = existing.copyWith(
      name: imported.name.isNotEmpty ? imported.name : existing.name,
      code: imported.code.isNotEmpty ? imported.code : existing.code,
      isPrivate: imported.isPrivate,
      collaboratorEmails: imported.collaboratorEmails.isNotEmpty ? imported.collaboratorEmails : existing.collaboratorEmails,
      members: membersById.values.toList(),
      visibleChildrenPerParent: imported.visibleChildrenPerParent,
      ownerEmail: owner,
      localRole: isOwnerImport ? FamilyTreeAccessRole.owner : FamilyTreeAccessRole.viewer,
    );
    list[idx] = prepared;
  }

  // Shared backup / QR: full tree on this phone only — never duplicate Supabase rows.
  await _persistFamilyTreesLocally(userEmail, list);
  if (isOwnerImport) {
    await _upsertFamilyTreeCloud(_normalizedEmail(bundleOwnerEmail), prepared);
  }
}

Map<String, dynamic> _familyTreeRow(FamilyTree tree, String userEmail) {
  final now = DateTime.now().toUtc().toIso8601String();
  return {
    'id': tree.id,
    'userEmail': _normalizedEmail(userEmail),
    'name': tree.name,
    'code': tree.code,
    'isPrivate': tree.isPrivate,
    'collaboratorEmails': tree.collaboratorEmails,
    'members': tree.members.map(familyMemberToCloudJson).toList(),
    'visibleChildrenPerParent': tree.visibleChildrenPerParent,
    'createdAt': tree.createdAt.toUtc().toIso8601String(),
    'updatedAt': now,
  };
}

FamilyTree _familyTreeFromRow(Map<String, dynamic> row, String forUserEmail) {
  final payload = Map<String, dynamic>.from(row);
  if (payload['members'] is! List && row['data'] is Map) {
    return FamilyTree.fromJson(Map<String, dynamic>.from(row['data'] as Map));
  }
  final rawMembers = row['members'];
  final members = rawMembers is List
      ? rawMembers
          .whereType<Map>()
          .map((e) => familyMemberFromCloudJson(Map<String, dynamic>.from(e)))
          .where((m) => m.id.isNotEmpty)
          .toList()
      : <FamilyMember>[];
  final rawCollab = row['collaboratorEmails'];
  final collabs = rawCollab is List
      ? rawCollab.map((e) => _normalizedEmail(e.toString())).where((e) => e.isNotEmpty).toList()
      : <String>[];
  final rowOwner = _normalizedEmail((row['userEmail'] ?? '').toString());
  final me = _normalizedEmail(forUserEmail);
  final role = me == rowOwner
      ? FamilyTreeAccessRole.owner
      : (collabs.contains(me) ? FamilyTreeAccessRole.editor : FamilyTreeAccessRole.viewer);
  return FamilyTree(
    id: (row['id'] ?? '').toString(),
    name: (row['name'] ?? '').toString(),
    code: (row['code'] ?? '').toString(),
    isPrivate: row['isPrivate'] != false,
    collaboratorEmails: collabs,
    members: members,
    createdAt: DateTime.tryParse((row['createdAt'] ?? '').toString()) ?? DateTime.now(),
    visibleChildrenPerParent: (row['visibleChildrenPerParent'] as num?)?.toInt() ?? 0,
    ownerEmail: rowOwner,
    localRole: role,
  );
}

bool _familyTreesTableMissing(Object error) {
  return error.toString().contains("Could not find the table 'public.family_trees'");
}

Future<List<FamilyTree>?> _fetchFamilyTreesFromCloud(String userEmail) async {
  if (!await ngmyCanReachCloud()) return null;
  final email = _normalizedEmail(userEmail);
  if (email.isEmpty) return null;
  try {
    final ownedRows = await Supabase.instance.client
        .from('family_trees')
        .select()
        .eq('userEmail', email)
        .timeout(kNgmyCloudLoadTimeout);
    List<dynamic> collabRows = const [];
    try {
      collabRows = await Supabase.instance.client
          .from('family_trees')
          .select()
          .contains('collaboratorEmails', [email])
          .timeout(kNgmyCloudLoadTimeout);
    } catch (e) {
      debugPrint('[family_trees] collaborator fetch: $e');
    }
    final byId = <String, Map<String, dynamic>>{};
    for (final row in [...(ownedRows as List), ...(collabRows as List)]) {
      if (row is Map) {
        final map = Map<String, dynamic>.from(row);
        final id = (map['id'] ?? '').toString();
        if (id.isNotEmpty) byId[id] = map;
      }
    }
    return byId.values
        .map((e) => _familyTreeFromRow(e, email))
        .where((t) => t.id.isNotEmpty && t.name.isNotEmpty)
        .toList()
      ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
  } catch (e) {
    if (_familyTreesTableMissing(e)) {
      debugPrint('[family_trees] table missing — run supabase/family_trees_table.sql');
    } else {
      debugPrint('[family_trees] fetch error: $e');
    }
    return null;
  }
}

List<FamilyTree> _mergeFamilyTreeLists(List<FamilyTree> local, List<FamilyTree> remote) {
  if (remote.isEmpty) return local;
  if (local.isEmpty) return remote;
  final byId = <String, FamilyTree>{};
  for (final t in local) {
    if (t.id.isNotEmpty) byId[t.id] = t;
  }
  for (final r in remote) {
    if (r.id.isEmpty) continue;
    final existing = byId[r.id];
    if (existing == null) {
      byId[r.id] = r;
      continue;
    }
    byId[r.id] = mergeFamilyTreeCloudIntoLocal(existing, r);
  }
  return byId.values.toList()..sort((a, b) => b.createdAt.compareTo(a.createdAt));
}

Future<void> _persistFamilyTreesLocally(String userEmail, List<FamilyTree> trees) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    _familyTreesKey(userEmail),
    jsonEncode(trees.map((t) => t.toJson()).toList()),
  );
}

Future<bool> _upsertFamilyTreeCloud(String userEmail, FamilyTree tree) async {
  if (!await ngmyCanReachCloud()) return false;
  try {
    await Supabase.instance.client
        .from('family_trees')
        .upsert(_familyTreeRow(tree, userEmail))
        .timeout(kNgmyCloudWriteTimeout);
    return true;
  } catch (e) {
    if (_familyTreesTableMissing(e)) {
      debugPrint('[family_trees] table missing — run supabase/family_trees_table.sql');
    } else {
      debugPrint('[family_trees] upsert error: $e');
    }
    return false;
  }
}

Future<bool> _upsertFamilyTreesCloud(String userEmail, List<FamilyTree> trees) async {
  if (trees.isEmpty || !await ngmyCanReachCloud()) return false;
  try {
    final rows = trees
        .map((t) => _familyTreeRow(t, familyTreeOwnerEmail(t, userEmail)))
        .toList();
    await Supabase.instance.client.from('family_trees').upsert(rows).timeout(kNgmyCloudWriteTimeout);
    return true;
  } catch (e) {
    if (_familyTreesTableMissing(e)) {
      debugPrint('[family_trees] table missing — run supabase/family_trees_table.sql');
    } else {
      debugPrint('[family_trees] bulk upsert error: $e');
    }
    return false;
  }
}

Future<void> _deleteFamilyTreeCloud(String treeId) async {
  if (treeId.isEmpty || !await ngmyCanReachCloud()) return;
  try {
    await Supabase.instance.client.from('family_trees').delete().eq('id', treeId);
  } catch (e) {
    debugPrint('[family_trees] delete error: $e');
  }
}
