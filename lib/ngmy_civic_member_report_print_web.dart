import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:js_util' as js_util;
import 'dart:typed_data';

String _ngmyLocationPathAndSearch() {
  final path = html.window.location.pathname ?? '/';
  final search = html.window.location.search ?? '';
  return '$path$search';
}

Future<void> _invokePrint(dynamic win) async {
  for (var i = 0; i < 4; i++) {
    await Future<void>.delayed(Duration(milliseconds: 250 + i * 200));
    try {
      js_util.callMethod(win, 'focus', const []);
    } catch (_) {}
    try {
      js_util.callMethod(win, 'print', const []);
      return;
    } catch (_) {}
  }
}

/// Prints the styled HTML document via a hidden same-tab iframe. This avoids
/// both `window.open` + `document.write` (blocked by newer dart:html/browser
/// security) and opening a separate tab from a blob URL (popup blockers, and
/// some mobile browsers render a blob-URL tab without the page's own CSS
/// fully applied) — the iframe technique keeps everything in-page so the
/// print preview always matches what was designed.
Future<void> ngmyPrintCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
}) async {
  final previousTitle = html.document.title;
  final previousHash = html.window.location.hash;
  try {
    html.document.title = 'NGMY.ORG';
    if (previousHash.isNotEmpty) {
      try {
        html.window.history.replaceState(null, 'NGMY.ORG', _ngmyLocationPathAndSearch());
      } catch (_) {}
    }
    final iframe = html.IFrameElement()
      ..style.position = 'fixed'
      ..style.left = '-10000px'
      ..style.top = '0'
      ..style.width = '900px'
      ..style.height = '1200px'
      ..style.border = '0'
      ..style.opacity = '0'
      ..style.pointerEvents = 'none'
      ..setAttribute('aria-hidden', 'true');
    html.document.body?.append(iframe);

    final loaded = Completer<void>();
    iframe.onLoad.first.then((_) {
      if (!loaded.isCompleted) loaded.complete();
    });
    iframe.srcdoc = htmlContent;
    await loaded.future.timeout(const Duration(seconds: 8), onTimeout: () {});

    final win = iframe.contentWindow;
    if (win == null) {
      iframe.remove();
      try {
        html.document.title = previousTitle;
      } catch (_) {}
      if (previousHash.isNotEmpty) {
        try {
          html.window.history.replaceState(
            null,
            previousTitle,
            '${_ngmyLocationPathAndSearch()}$previousHash',
          );
        } catch (_) {}
      }
      await _openInNewTab(htmlContent, plainText, fileName, autoPrint: true);
      return;
    }
    try {
      final doc = js_util.getProperty(win, 'document');
      js_util.setProperty(doc, 'title', 'NGMY.ORG');
    } catch (_) {}
    await _invokePrint(win);
    Timer(const Duration(minutes: 2), () {
      try {
        iframe.remove();
      } catch (_) {}
      try {
        html.document.title = previousTitle;
      } catch (_) {}
      if (previousHash.isNotEmpty) {
        try {
          html.window.history.replaceState(
            null,
            previousTitle,
            '${_ngmyLocationPathAndSearch()}$previousHash',
          );
        } catch (_) {}
      }
    });
  } catch (e) {
    try {
      html.document.title = previousTitle;
    } catch (_) {}
    if (previousHash.isNotEmpty) {
      try {
        html.window.history.replaceState(
          null,
          previousTitle,
          '${_ngmyLocationPathAndSearch()}$previousHash',
        );
      } catch (_) {}
    }
    await _openInNewTab(htmlContent, plainText, fileName, autoPrint: true);
  }
}

Future<void> _openInNewTab(
  String htmlContent,
  String plainText,
  String fileName, {
  bool autoPrint = false,
}) async {
  final blob = html.Blob([utf8.encode(htmlContent)], 'text/html;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final opened = html.window.open(url, '_blank');
  if (opened == null) {
    html.Url.revokeObjectUrl(url);
    await ngmyDownloadCivicMemberReport(
      htmlContent: htmlContent,
      plainText: plainText,
      fileName: fileName,
    );
    return;
  }
  if (autoPrint) {
    Timer(const Duration(milliseconds: 900), () {
      try {
        js_util.callMethod(opened, 'focus', const []);
        js_util.callMethod(opened, 'print', const []);
      } catch (_) {}
    });
  }
  Future<void>.delayed(const Duration(minutes: 2), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
}

Future<void> ngmyDownloadCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
  Uint8List? pdfBytes,
}) async {
  final safe = fileName.replaceAll(RegExp(r'[^a-zA-Z0-9 _-]'), '_').trim();
  final base = safe.isEmpty ? 'civic_member_report' : safe;
  if (pdfBytes != null && pdfBytes.isNotEmpty) {
    final blob = html.Blob([pdfBytes], 'application/pdf');
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.AnchorElement(href: url)
      ..download = '$base.pdf'
      ..click();
    Timer(const Duration(seconds: 3), () {
      try {
        html.Url.revokeObjectUrl(url);
      } catch (_) {}
    });
    return;
  }
  final blob = html.Blob([utf8.encode(htmlContent)], 'text/html;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.AnchorElement(href: url)
    ..download = '$base.html'
    ..click();
  Timer(const Duration(seconds: 3), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
}
