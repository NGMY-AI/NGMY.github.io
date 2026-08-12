import 'dart:typed_data';

import 'ngmy_civic_voting_download_stub.dart'
    if (dart.library.html) 'ngmy_civic_voting_download_web.dart' as impl;

Future<String> ngmyDownloadCivicVotingResults({
  required String fileName,
  required String content,
}) {
  return impl.ngmyDownloadCivicVotingResults(fileName: fileName, content: content);
}

/// Opens the PDF for immediate viewing and downloads the paper file.
Future<String> ngmyDownloadCivicVotingPdfResults({
  required String fileName,
  required Uint8List pdfBytes,
}) {
  return impl.ngmyDownloadCivicVotingPdfResults(fileName: fileName, pdfBytes: pdfBytes);
}
