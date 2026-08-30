import 'ngmy_civic_registry_cloud.dart';

/// Role-filtered private config lists (loans, games, help, jobs, store).
Future<Map<String, dynamic>?> ngmyPrivateListsFetch({required String email}) async {
  final data = await ngmyCivicInvoke({
    'action': 'privateListsFetch',
    'email': email.trim().toLowerCase(),
  });
  if (data == null || data['ok'] != true) return null;
  return data;
}

Future<bool> ngmyPrivateListsPersistManagement({
  required String email,
  required Map<String, dynamic> management,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'privateListsPersist',
    'email': email.trim().toLowerCase(),
    'kind': 'management',
    'management': management,
  });
  return data != null && data['ok'] == true;
}

Future<bool> ngmyPrivateListsPersistKind({
  required String email,
  required String kind,
  required List<Map<String, dynamic>> items,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'privateListsPersist',
    'email': email.trim().toLowerCase(),
    'kind': kind,
    'items': items,
  });
  return data != null && data['ok'] == true;
}

Future<bool> ngmyPrivateListsPersistFamilyAccess({
  required String email,
  required Map<String, dynamic> byEmail,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'privateListsPersist',
    'email': email.trim().toLowerCase(),
    'kind': 'familyPhotoAccess',
    'byEmail': byEmail,
  });
  return data != null && data['ok'] == true;
}

Future<List<Map<String, dynamic>>> ngmyAdminUsersListFetch({required String email}) async {
  final data = await ngmyCivicInvoke({
    'action': 'adminUsersList',
    'email': email.trim().toLowerCase(),
  });
  if (data == null || data['ok'] != true) return const [];
  final users = data['users'];
  if (users is! List) return const [];
  return users.map((e) => Map<String, dynamic>.from(e as Map)).toList();
}

Future<bool> ngmyPrivateListsPersistHelpSpendings({
  required String email,
  required List<Map<String, dynamic>> items,
}) async {
  return ngmyPrivateListsPersistKind(
    email: email,
    kind: 'helpCampaignSpendings',
    items: items,
  );
}
