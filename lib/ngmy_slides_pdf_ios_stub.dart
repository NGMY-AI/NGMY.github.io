import 'dart:typed_data';

import 'ngmy_slides_download_stub.dart';

bool ngmyHasStagedSlidesPdfImpl() => false;

String? ngmyStagedSlidesPdfNameImpl() => null;

void ngmyClearStagedSlidesPdfImpl() {}

Future<bool> ngmyShareStagedSlidesPdfImpl() async => false;

Future<bool> ngmyDownloadStagedSlidesPdfImpl() async => false;

Future<bool> ngmyOpenStagedSlidesPdfInSafariImpl() async => false;

Future<String> saveNgmySlidesPdfWithIosSupportImpl(Uint8List bytes, String filename) =>
    downloadNgmySlidesPdf(bytes, filename);
