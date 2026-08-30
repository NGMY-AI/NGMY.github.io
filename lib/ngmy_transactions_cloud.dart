import 'ngmy_civic_registry_cloud.dart';

/// Role-filtered transactions via Edge — masks other users' emails in Network.
Future<List<Map<String, dynamic>>> ngmyTransactionsFetch({
  required String email,
  int limit = 10000,
  bool pendingWallet = false,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'transactionsFetch',
    'email': email.trim().toLowerCase(),
    'limit': limit,
    if (pendingWallet) 'pendingWallet': true,
  });
  if (data == null || data['ok'] != true) return const [];
  final rows = data['transactions'];
  if (rows is! List) return const [];
  return rows
      .whereType<Map>()
      .map((e) => Map<String, dynamic>.from(e))
      .toList();
}
