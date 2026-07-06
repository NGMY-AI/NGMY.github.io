import 'dart:typed_data';

import 'ngmy_slides_pdf_ios.dart';

Future<String> saveNgmySlidesPdf(Uint8List bytes, String filename) =>
    saveNgmySlidesPdfWithIosSupport(bytes, filename);
