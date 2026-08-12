import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

Future<String> ngmyDownloadCivicVotingResults({
  required String fileName,
  required String content,
}) async {
  final safe = fileName.trim().isEmpty ? 'civic_voting_results.txt' : fileName.trim();
  try {
    await Share.share(content, subject: safe);
    return 'Results ready to share';
  } catch (_) {
    await Clipboard.setData(ClipboardData(text: content));
    return 'Results copied to clipboard';
  }
}
