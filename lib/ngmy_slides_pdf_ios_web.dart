import 'dart:typed_data';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'dart:js_util' as js_util;

import 'ngmy_slides_pdf_ios.dart';

String? _pendingUrl;
String? _pendingName;

bool ngmyHasStagedSlidesPdfImpl() => _pendingUrl != null && _pendingUrl!.trim().isNotEmpty;

String? ngmyStagedSlidesPdfNameImpl() => _pendingName;

void ngmyClearStagedSlidesPdfImpl() {
  final url = _pendingUrl;
  _pendingUrl = null;
  _pendingName = null;
  if (url != null && url.startsWith('blob:')) {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  }
}

bool _isAppleMobileBrowser() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return ua.contains('iphone') ||
      ua.contains('ipad') ||
      ua.contains('ipod') ||
      (ua.contains('macintosh') && ua.contains('mobile'));
}

String _safePdfName(String filename) {
  final safe = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  return safe.endsWith('.pdf') ? safe : '$safe.pdf';
}

void _stagePdf(Uint8List bytes, String filename) {
  ngmyClearStagedSlidesPdfImpl();
  final name = _safePdfName(filename);
  final blob = html.Blob([bytes], 'application/pdf');
  _pendingUrl = html.Url.createObjectUrlFromBlob(blob);
  _pendingName = name;
}

Future<bool> ngmyShareStagedSlidesPdfImpl() async {
  final url = _pendingUrl;
  final name = _pendingName ?? 'presentation.pdf';
  if (url == null || url.isEmpty) return false;
  try {
    final resp = await html.window.fetch(url);
    final blob = await resp.blob();
    if (blob.size <= 0) return false;
    final file = html.File([blob], name, {'type': 'application/pdf'});
    final shareData = js_util.jsify(<String, Object>{
      'files': [file],
      'title': name,
    });
    final nav = html.window.navigator;
    final canShare = js_util.callMethod<bool?>(nav, 'canShare', [shareData]);
    if (canShare == false && !_isAppleMobileBrowser()) return false;
    await js_util.promiseToFuture<void>(js_util.callMethod(nav, 'share', [shareData]));
    return true;
  } catch (_) {
    return false;
  }
}

Future<bool> ngmyOpenStagedSlidesPdfInSafariImpl() async {
  final url = _pendingUrl;
  final name = _pendingName ?? 'presentation.pdf';
  if (url == null || url.isEmpty) return false;
  try {
    final anchor = html.AnchorElement()
      ..href = url
      ..target = '_blank'
      ..rel = 'noopener'
      ..download = name;
    html.document.body?.append(anchor);
    anchor.click();
    anchor.remove();
    if (url.startsWith('blob:')) {
      Future<void>.delayed(const Duration(seconds: 180), () {
        try {
          html.Url.revokeObjectUrl(url);
        } catch (_) {}
      });
    }
    return true;
  } catch (_) {
    return false;
  }
}

Future<String> saveNgmySlidesPdfWithIosSupportImpl(Uint8List bytes, String filename) async {
  final name = _safePdfName(filename);
  if (_isAppleMobileBrowser()) {
    _stagePdf(bytes, name);
    return kNgmySlidesPdfStagedToken;
  }
  final blob = html.Blob([bytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final anchor = html.AnchorElement(href: url)
    ..download = name
    ..style.display = 'none';
  html.document.body?.append(anchor);
  anchor.click();
  await Future<void>.delayed(const Duration(milliseconds: 120));
  anchor.remove();
  html.Url.revokeObjectUrl(url);
  return 'Downloaded $name';
}
