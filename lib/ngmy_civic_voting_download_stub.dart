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

Future<String> ngmyDownloadCivicVotingPdfResults({
  required String fileName,
  required Uint8List pdfBytes,
}) async {
  final safe = fileName.trim().isEmpty ? 'civic_voting_results.pdf' : fileName.trim();
  final name = safe.toLowerCase().endsWith('.pdf') ? safe : '$safe.pdf';
  try {
    await Share.shareXFiles(
      [XFile.fromData(pdfBytes, mimeType: 'application/pdf', name: name)],
      subject: name,
    );
    return 'Paper results ready to share';
  } catch (_) {
    return 'Could not share paper results on this device.';
  }
}
