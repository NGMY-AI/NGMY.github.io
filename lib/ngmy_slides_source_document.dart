import 'dart:convert';
import 'dart:typed_data';

import 'package:archive/archive.dart';
import 'package:file_picker/file_picker.dart';

import 'ngmy_ai_client.dart';

/// A document the user attaches so the AI can read it and rewrite it as slides.
/// PDFs go to the AI as the file itself; Word and text files are read into text.
class NgmySlidesSourceDocument {
  const NgmySlidesSourceDocument({required this.name, this.part, this.text = ''});
  final String name;
  /// The file itself (PDF), sent to the AI as an attachment.
  final NgmyAiImagePart? part;
  /// The words of the file (Word, text), sent to the AI as part of the request.
  final String text;
}

/// Largest file the AI will take (keeps the request within what the server accepts).
const int kNgmySlidesSourceMaxBytes = 8 * 1024 * 1024;

/// Words kept from a text document, so a very long file still fits the request.
const int kNgmySlidesSourceMaxChars = 60000;

/// Asks for a PDF, Word or text file and reads it. Returns null if nothing was picked.
/// Throws a readable message when the file cannot be read.
Future<NgmySlidesSourceDocument?> ngmyPickSlidesSourceDocument() async {
  final result = await FilePicker.platform.pickFiles(
    type: FileType.custom,
    allowedExtensions: const ['pdf', 'docx', 'txt', 'md'],
    withData: true,
  );
  if (result == null || result.files.isEmpty) return null;
  final file = result.files.first;
  final bytes = file.bytes;
  if (bytes == null) throw 'That file could not be opened. Try another file.';
  if (bytes.length > kNgmySlidesSourceMaxBytes) {
    throw 'That file is too big. Use a file under 8 MB.';
  }
  return ngmyReadSlidesSourceDocument(file.name, bytes);
}

/// Reads one document's bytes. Exposed for tests.
NgmySlidesSourceDocument ngmyReadSlidesSourceDocument(String name, Uint8List bytes) {
  final lower = name.toLowerCase();
  if (lower.endsWith('.pdf')) {
    return NgmySlidesSourceDocument(
      name: name,
      part: (mimeType: 'application/pdf', data: base64Encode(bytes)),
    );
  }
  if (lower.endsWith('.docx')) {
    final text = _wordText(bytes);
    if (text.trim().isEmpty) throw 'No readable words were found in that Word file.';
    return NgmySlidesSourceDocument(name: name, text: _capped(text));
  }
  final text = utf8.decode(bytes, allowMalformed: true);
  if (text.trim().isEmpty) throw 'That file is empty.';
  return NgmySlidesSourceDocument(name: name, text: _capped(text));
}

String _capped(String text) =>
    text.length > kNgmySlidesSourceMaxChars ? text.substring(0, kNgmySlidesSourceMaxChars) : text;

/// The words of a .docx: the text runs of word/document.xml, one line per paragraph.
String _wordText(Uint8List bytes) {
  final archive = ZipDecoder().decodeBytes(bytes);
  final entry = archive.findFile('word/document.xml');
  if (entry == null) return '';
  final xml = utf8.decode(entry.content as List<int>, allowMalformed: true);
  final paragraphs = xml.split('</w:p>');
  final out = StringBuffer();
  for (final p in paragraphs) {
    final runs = RegExp(r'<w:t[^>]*>([^<]*)</w:t>').allMatches(p).map((m) => m.group(1) ?? '');
    final line = runs.join().trim();
    if (line.isNotEmpty) out.writeln(_unescapeXml(line));
  }
  return out.toString();
}

String _unescapeXml(String s) => s
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&');
