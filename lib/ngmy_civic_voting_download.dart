import 'ngmy_civic_voting_download_stub.dart'
    if (dart.library.html) 'ngmy_civic_voting_download_web.dart' as impl;

Future<String> ngmyDownloadCivicVotingResults({
  required String fileName,
  required String content,
}) {
  return impl.ngmyDownloadCivicVotingResults(fileName: fileName, content: content);
}
