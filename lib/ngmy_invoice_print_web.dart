import 'dart:async';
import 'dart:typed_data';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'dart:js_util' as js_util;

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

Future<void> _invokePrint(dynamic win) async {
  for (var i = 0; i < 4; i++) {
    await Future<void>.delayed(Duration(milliseconds: 280 + i * 220));
    try {
      js_util.callMethod(win, 'focus', const []);
    } catch (_) {}
    try {
      js_util.callMethod(win, 'print', const []);
      return;
    } catch (_) {}
  }
}

Future<bool> _sharePdf(Uint8List bytes, String name) async {
  try {
    if (bytes.isEmpty) return false;
    final blob = html.Blob([bytes], 'application/pdf');
    final file = html.File([blob], name, {'type': 'application/pdf'});
    final shareData = js_util.jsify(<String, Object>{
      'files': [file],
      'title': name,
    });
    await js_util.promiseToFuture<void>(js_util.callMethod(html.window.navigator, 'share', [shareData]));
    return true;
  } catch (_) {
    return false;
  }
}

/// Hidden iframe large enough for mobile browsers to render PDF pages before print.
Future<bool> _printPdfInIframe(Uint8List pdfBytes) async {
  if (pdfBytes.isEmpty) return false;
  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final iframe = html.IFrameElement()
    ..style.position = 'fixed'
    ..style.left = '-10000px'
    ..style.top = '0'
    ..style.width = '900px'
    ..style.height = '1200px'
    ..style.border = '0'
    ..style.opacity = '0'
    ..style.pointerEvents = 'none'
    ..setAttribute('aria-hidden', 'true')
    ..src = url;
  html.document.body?.append(iframe);
  try {
    try {
      await iframe.onLoad.first.timeout(const Duration(seconds: 8));
    } catch (_) {}
    final win = iframe.contentWindow;
    if (win == null) return false;
    await _invokePrint(win);
    Timer(const Duration(minutes: 2), () {
      try {
        iframe.remove();
      } catch (_) {}
      try {
        html.Url.revokeObjectUrl(url);
      } catch (_) {}
    });
    return true;
  } catch (_) {
    try {
      iframe.remove();
    } catch (_) {}
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
    return false;
  }
}

Future<bool> _openPdfInNewTabAndPrint(Uint8List pdfBytes, String name) async {
  if (pdfBytes.isEmpty) return false;
  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final opened = html.window.open(url, '_blank');
  if (opened == null) {
    html.Url.revokeObjectUrl(url);
    return false;
  }
  Timer(const Duration(milliseconds: 1200), () {
    unawaited(_invokePrint(opened));
  });
  Future<void>.delayed(const Duration(minutes: 5), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
  return true;
}

/// Opens print immediately: print dialog first when [preferPrintDialog], else share sheet (with Print) on iOS.
Future<bool> ngmyInvoicePrintPdfDirectImpl(
  Uint8List pdfBytes,
  String filename, {
  bool preferPrintDialog = false,
}) async {
  if (pdfBytes.isEmpty) return false;
  final name = _safePdfName(filename);

  if (preferPrintDialog) {
    if (await _printPdfInIframe(pdfBytes)) return true;
    if (await _openPdfInNewTabAndPrint(pdfBytes, name)) return true;
    if (await _sharePdf(pdfBytes, name)) return true;
    return false;
  }

  // Default: share sheet on Apple mobile (includes Print), then iframe print, then new tab.
  if (_isAppleMobileBrowser() && await _sharePdf(pdfBytes, name)) return true;

  if (await _printPdfInIframe(pdfBytes)) return true;

  if (await _openPdfInNewTabAndPrint(pdfBytes, name)) return true;

  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final opened = html.window.open(url, '_blank');
  if (opened == null) {
    html.Url.revokeObjectUrl(url);
    return false;
  }
  Future<void>.delayed(const Duration(minutes: 5), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
  return true;
}

Future<String> downloadNgmyPdfBytesImpl(Uint8List pdfBytes, String filename) async {
  if (pdfBytes.isEmpty) return 'Could not create PDF — no data.';
  final name = _safePdfName(filename);
  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final anchor = html.AnchorElement(href: url)
    ..download = name
    ..style.display = 'none';
  html.document.body?.append(anchor);
  anchor.click();
  await Future<void>.delayed(const Duration(milliseconds: 180));
  anchor.remove();
  html.Url.revokeObjectUrl(url);
  return 'Downloaded $name';
}

Future<bool> ngmyInvoiceOpenPdfInBrowserImpl(Uint8List pdfBytes) async {
  if (pdfBytes.isEmpty) return false;
  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final opened = html.window.open(url, '_blank');
  if (opened == null) {
    html.Url.revokeObjectUrl(url);
    return false;
  }
  Future<void>.delayed(const Duration(minutes: 5), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
  return true;
}
