import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';

Future<Directory> _dir() async {
  final root = await getApplicationDocumentsDirectory();
  final dir = Directory('${root.path}/ngmy_comm_chat_images');
  if (!await dir.exists()) await dir.create(recursive: true);
  return dir;
}

Future<File> _fileFor(String id) async {
  final safe = id.trim().replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final dir = await _dir();
  return File('${dir.path}/$safe.bin');
}

Future<bool> ngmyCommChatImagePutImpl(String id, Uint8List bytes) async {
  if (id.trim().isEmpty || bytes.isEmpty) return false;
  try {
    final f = await _fileFor(id);
    await f.writeAsBytes(bytes, flush: true);
    return true;
  } catch (e) {
    debugPrint('[comm-chat-img io put] $e');
    return false;
  }
}

Future<Uint8List?> ngmyCommChatImageGetImpl(String id) async {
  if (id.trim().isEmpty) return null;
  try {
    final f = await _fileFor(id);
    if (!await f.exists()) return null;
    return await f.readAsBytes();
  } catch (e) {
    debugPrint('[comm-chat-img io get] $e');
    return null;
  }
}

Future<void> ngmyCommChatImageDeleteImpl(String id) async {
  if (id.trim().isEmpty) return;
  try {
    final f = await _fileFor(id);
    if (await f.exists()) await f.delete();
  } catch (e) {
    debugPrint('[comm-chat-img io delete] $e');
  }
}
