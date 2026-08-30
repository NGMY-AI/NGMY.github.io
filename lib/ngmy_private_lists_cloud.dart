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

Future<Map<String, dynamic>?> ngmyCivicFetchCitiesRooms({required String email}) async {
  return ngmyCivicInvoke({
    'action': 'civicFetchCitiesRooms',
    'email': email.trim().toLowerCase(),
  });
}

Future<Map<String, dynamic>?> ngmyCivicAdminSettingsFetch({required String email}) async {
  return ngmyCivicInvoke({
    'action': 'civicAdminSettingsFetch',
    'email': email.trim().toLowerCase(),
  });
}

Future<bool> ngmyCivicAdminSettingsPersist({
  required String email,
  required String kind,
  Map<String, dynamic>? payload,
  List<dynamic>? ids,
  List<dynamic>? emails,
  Map<String, dynamic>? civicCitiesByState,
  List<dynamic>? cities,
  List<dynamic>? rooms,
}) async {
  final body = <String, dynamic>{
    'action': 'civicAdminSettingsPersist',
    'email': email.trim().toLowerCase(),
    'kind': kind,
  };
  if (payload != null) body['payload'] = payload;
  if (ids != null) body['ids'] = ids;
  if (emails != null) body['emails'] = emails;
  if (civicCitiesByState != null) body['civicCitiesByState'] = civicCitiesByState;
  if (cities != null) body['cities'] = cities;
  if (rooms != null) body['rooms'] = rooms;
  final data = await ngmyCivicInvoke(body);
  return data != null && data['ok'] == true;
}
