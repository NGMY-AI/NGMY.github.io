import 'dart:typed_data';

import 'ngmy_qr_download_io.dart' if (dart.library.html) 'ngmy_qr_download_web.dart' as impl;

Future<String> downloadNgmyQrImage(Uint8List bytes, String filename) {
  return impl.saveNgmyQrPngBytes(bytes, filename);
}
