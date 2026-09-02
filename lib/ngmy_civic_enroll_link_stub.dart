import 'package:flutter/services.dart';

import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_registry_stats.dart';

bool ngmyPendingCivicSelfEnrollmentOpen = false;

Future<bool> ngmyCopyTextToClipboard(String text) async {
  final trimmed = text.trim();
  if (trimmed.isEmpty) return false;
  try {
    await Clipboard.setData(ClipboardData(text: trimmed));
    return true;
  } catch (_) {
    return false;
  }
}

/// Short path link: `https://ngmy.org/enroll/georgia` or `…/enroll/georgia?r=…&k=2`.
String ngmyCivicSelfEnrollmentShareUrl({
  String? state,
  String? registrarEmail,
  String? stateLinkToken,
  int linkVersion = 0,
}) {
  final st = (state ?? '').trim();
  final reg = (registrarEmail ?? '').trim();
  final slug = NgmyCivicRegistryStats.enrollStateSlug(st);
  if (slug.isEmpty) return 'https://ngmy.org/';
  final params = <String>[];
  if (reg.isNotEmpty) params.add('r=${NgmyCivicRegistryMembers.registrarLinkToken(reg)}');
  final version = linkVersion > 0 ? linkVersion : int.tryParse((stateLinkToken ?? '').trim()) ?? 0;
  if (version > 1) params.add('k=$version');
  final query = params.isEmpty ? '' : '?${params.join('&')}';
  return 'https://ngmy.org/enroll/$slug$query';
}

bool ngmyPeekCivicEnrollLaunchIntent() => ngmyPendingCivicSelfEnrollmentOpen;

void ngmyCaptureCivicEnrollLaunchIntent() {}

bool ngmyTakePendingCivicSelfEnrollmentOpen() {
  final pending = ngmyPendingCivicSelfEnrollmentOpen;
  ngmyPendingCivicSelfEnrollmentOpen = false;
  return pending;
}
