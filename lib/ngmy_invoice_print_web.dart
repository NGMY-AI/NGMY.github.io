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

Future<bool> _printPdfInIframe(Uint8List pdfBytes) async {
  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  try {
    final iframe = html.IFrameElement()
      ..style.position = 'fixed'
      ..style.right = '0'
      ..style.bottom = '0'
      ..style.width = '0'
      ..style.height = '0'
      ..style.border = '0'
      ..style.opacity = '0'
      ..setAttribute('aria-hidden', 'true')
      ..src = url;
    html.document.body?.append(iframe);

    try {
      await iframe.onLoad.first.timeout(const Duration(seconds: 6));
    } catch (_) {}
    final win = iframe.contentWindow;
    if (win == null) return false;
    try {
      js_util.callMethod(win, 'focus', const []);
    } catch (_) {}
    try {
      js_util.callMethod(win, 'print', const []);
    } catch (_) {}
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
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
    return false;
  }
}

/// Opens print immediately: iOS share sheet (with Print) or browser print dialog.
Future<bool> ngmyInvoicePrintPdfDirectImpl(Uint8List pdfBytes, String filename) async {
  if (pdfBytes.isEmpty) return false;
  final name = _safePdfName(filename);

  if (await _sharePdf(pdfBytes, name)) return true;

  if (await _printPdfInIframe(pdfBytes)) return true;

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
