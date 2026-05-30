import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:gal/gal.dart';

/// Saves QR PNG to the device gallery (mobile) or Downloads folder (desktop).
Future<String> saveNgmyQrPngBytes(Uint8List bytes, String filename) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.png') ? safeName : '$safeName.png';

  if (!kIsWeb && (Platform.isAndroid || Platform.isIOS)) {
    final hasAccess = await Gal.hasAccess();
    if (!hasAccess) {
      await Gal.requestAccess();
    }
    await Gal.putImageBytes(bytes, name: name);
    return 'Saved to your photo gallery.';
  }

  Directory dir;
  if (!kIsWeb && Platform.isWindows) {
    final root = Platform.environment['USERPROFILE'];
    dir = Directory(root != null && root.isNotEmpty ? '$root\\Downloads' : '.');
  } else if (!kIsWeb) {
    final root = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '.';
    dir = Directory('$root${Platform.pathSeparator}Downloads');
  } else {
    dir = Directory.current;
  }
  await dir.create(recursive: true);
  final file = File('${dir.path}${Platform.pathSeparator}$name');
  await file.writeAsBytes(bytes, flush: true);
  return 'Saved to ${file.path}';
}
