import 'dart:convert';
import 'dart:html' as html;
import 'dart:typed_data';

import 'ngmy_qr_download_web.dart' as download;

bool _isIOSSafari() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return ua.contains('iphone') || ua.contains('ipad') || ua.contains('ipod');
}

Future<String> shareNgmyPngBytes(
  Uint8List bytes,
  String filename, {
  String? title,
  String? text,
}) async {
  return shareNgmyBytes(bytes, filename, mimeType: 'image/png', title: title, text: text);
}

String _ensureFilename(String filename, String mimeType) {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  if (safeName.contains('.')) return safeName;
  final mime = mimeType.toLowerCase();
  final ext = switch (mime) {
    'image/jpeg' || 'image/jpg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
    'image/webp' => '.webp',
    'image/heic' || 'image/heif' => '.heic',
    'video/mp4' => '.mp4',
    'application/pdf' => '.pdf',
    _ => '',
  };
  return '$safeName$ext';
}

Future<String> shareNgmyBytes(
  Uint8List bytes,
  String filename, {
  required String mimeType,
  String? title,
  String? text,
}) async {
  final name = _ensureFilename(filename, mimeType);
  final cleanMime = mimeType.split(';').first.trim();

  try {
    final blob = html.Blob([bytes], cleanMime);
    final file = html.File([blob], name, {'type': cleanMime});
    final nav = html.window.navigator;
    final shareData = <Object, Object?>{
      'files': [file],
    };
    final trimmedTitle = (title ?? '').trim();
    final trimmedText = (text ?? '').trim();
    if (trimmedTitle.isNotEmpty) shareData['title'] = trimmedTitle;
    if (trimmedText.isNotEmpty) shareData['text'] = trimmedText;
    await nav.share(shareData);
    return 'Shared $name';
  } catch (_) {}

  if (mimeType == 'image/png') return download.saveNgmyQrPngBytes(bytes, name);
  return _downloadBlob(html.Blob([bytes], cleanMime), name, fallbackUrl: null);
}

Future<String> shareNgmyCaptureUrl(
  String url,
  String filename, {
  required String mimeType,
  String? title,
  String? text,
}) async {
  final name = _ensureFilename(filename, mimeType);
  final cleanMime = mimeType.split(';').first.trim();

  try {
    html.Blob blob;
    if (url.startsWith('blob:')) {
      final req = await html.HttpRequest.request(url, responseType: 'blob')
          .timeout(const Duration(seconds: 120));
      final raw = req.response;
      if (raw is! html.Blob || raw.size <= 0) throw StateError('empty blob');
      blob = raw.type.isNotEmpty ? raw : html.Blob([raw], cleanMime);
    } else if (url.startsWith('data:')) {
      blob = _dataUrlToBlob(url, cleanMime);
    } else {
      throw StateError('unsupported url');
    }

    final file = html.File([blob], name, {'type': cleanMime});
    final nav = html.window.navigator;
    final shareData = <Object, Object?>{'files': [file]};
    final trimmedTitle = (title ?? '').trim();
    final trimmedText = (text ?? '').trim();
    if (trimmedTitle.isNotEmpty) shareData['title'] = trimmedTitle;
    if (trimmedText.isNotEmpty) shareData['text'] = trimmedText;
    await nav.share(shareData);
    return 'Shared $name';
  } catch (_) {}

  return _downloadBlob(null, name, fallbackUrl: url, mimeType: cleanMime);
}

html.Blob _dataUrlToBlob(String dataUrl, String fallbackMime) {
  final comma = dataUrl.indexOf(',');
  if (comma < 0) throw StateError('bad data url');
  final header = dataUrl.substring(0, comma).toLowerCase();
  final payload = dataUrl.substring(comma + 1);
  final mimeMatch = RegExp(r'data:([^;,]+)').firstMatch(header);
  final mime = (mimeMatch?.group(1) ?? fallbackMime).split(';').first.trim();
  late List<int> bytes;
  if (header.contains(';base64')) {
    var cleaned = payload.replaceAll(RegExp(r'\s'), '');
    cleaned = cleaned.replaceAll('-', '+').replaceAll('_', '/');
    final pad = cleaned.length % 4;
    if (pad > 0) cleaned = cleaned.padRight(cleaned.length + (4 - pad), '=');
    bytes = base64Decode(cleaned);
  } else {
    bytes = Uri.decodeComponent(payload).codeUnits;
  }
  return html.Blob([Uint8List.fromList(bytes)], mime);
}

String _downloadBlob(html.Blob? blob, String name, {required String? fallbackUrl, String? mimeType}) {
  if (_isIOSSafari()) {
    final href = fallbackUrl ??
        (blob != null ? html.Url.createObjectUrlFromBlob(blob) : null);
    if (href != null && href.isNotEmpty) {
      html.window.open(href, '_blank');
      return 'Opened $name — use Share in the video viewer to save or send.';
    }
  }
  if (blob != null) {
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.AnchorElement(href: url)
      ..download = name
      ..click();
    html.Url.revokeObjectUrl(url);
    return 'Downloaded $name';
  }
  if (fallbackUrl != null && fallbackUrl.isNotEmpty) {
    html.AnchorElement(href: fallbackUrl)
      ..download = name
      ..click();
    return 'Downloaded $name';
  }
  return 'Could not share $name';
}
