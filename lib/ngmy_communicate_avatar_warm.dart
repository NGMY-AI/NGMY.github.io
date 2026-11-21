import 'ngmy_advisor_portraits.dart';
import 'ngmy_communicate_storage.dart';

/// Pre-cache companion avatars from config (call after settings hydrate).
/// Kept outside the Advisors screen file so the settings loader can call it without loading the whole Advisors code.
Future<void> ngmyWarmCommunicateAvatarsFromConfig(dynamic config) async {
  await Future.wait([
    NgmyCommunicateAvatarCache.hydrateRamFromDisk(),
    ngmyWarmAdvisorPortraitAssets(),
  ]);
  final raw = (config as dynamic).communicateProfiles;
  if (raw is List) await NgmyCommunicateAvatarCache.cacheAllProfiles(raw);
}
