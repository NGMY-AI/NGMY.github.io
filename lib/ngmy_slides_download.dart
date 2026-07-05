import 'dart:typed_data';

import 'ngmy_slides_download_stub.dart' if (dart.library.html) 'ngmy_slides_download_web.dart';

Future<String> saveNgmySlidesPdf(Uint8List bytes, String filename) => downloadNgmySlidesPdf(bytes, filename);
