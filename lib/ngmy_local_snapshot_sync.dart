import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'main.dart';
import 'ngmy_account_snapshot.dart';
import 'ngmy_local_growth_income_stash.dart';

String _liveTokenPrefsKey(String ownerEmail) =>
    'ngmy_local_growth_income_live_token_v1_${base64Url.encode(utf8.encode(ownerEmail.toLowerCase().trim()))}';

/// Keeps the owner's live QR relay updated whenever the local wallet changes,
/// so scans always resolve to the latest snapshot (not a frozen export).
Future<void> ngmySyncLocalLiveSnapshotIfRegistered({
  required String ownerEmail,
  required UserData user,
  required List<AppTransaction> transactions,
  required int walletStateRevision,
}) async {
  final prefs = await SharedPreferences.getInstance();
  if ((prefs.getString(_liveTokenPrefsKey(ownerEmail)) ?? '').trim().isEmpty) return;
  final snapshotJson = NgmyAccountSnapshot.fromUser(
    user,
    transactions,
    ownerRealEmail: ownerEmail,
    walletStateRevision: walletStateRevision,
  ).toJson();
  await NgmyLocalSnapshotStash.createLive(ownerEmail: ownerEmail, snapshotJson: snapshotJson);
}
