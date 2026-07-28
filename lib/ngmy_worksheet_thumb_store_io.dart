import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';

Future<Directory> _dir() async {
  final root = await getApplicationDocumentsDirectory();
  final dir = Directory('${root.path}/ngmy_worksheet_thumbs');
  if (!await dir.exists()) await dir.create(recursive: true);
  return dir;
}

Future<File> _fileFor(String id) async {
  final safe = id.trim().replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final dir = await _dir();
  return File('${dir.path}/$safe.jpg');
}

Future<bool> ngmyWorksheetThumbPutImpl(String id, Uint8List bytes) async {
  if (id.trim().isEmpty || bytes.isEmpty) return false;
  try {
    final f = await _fileFor(id);
    await f.writeAsBytes(bytes, flush: true);
    return true;
  } catch (e) {
    debugPrint('[worksheet-thumb io put] $e');
    return false;
  }
}

Future<Uint8List?> ngmyWorksheetThumbGetImpl(String id) async {
  if (id.trim().isEmpty) return null;
  try {
    final f = await _fileFor(id);
    if (!await f.exists()) return null;
    return await f.readAsBytes();
  } catch (e) {
    debugPrint('[worksheet-thumb io get] $e');
    return null;
  }
}

Future<void> ngmyWorksheetThumbDeleteImpl(String id) async {
  if (id.trim().isEmpty) return;
  try {
    final f = await _fileFor(id);
    if (await f.exists()) await f.delete();
  } catch (e) {
    debugPrint('[worksheet-thumb io delete] $e');
  }
}
