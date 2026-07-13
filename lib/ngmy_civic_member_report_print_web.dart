import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:js_util' as js_util;

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
    // Prefer a clean site URL in browser print chrome (no #civic-registry-screen).
    if (previousHash.isNotEmpty) {
      try {
        html.window.history.replaceState(null, 'NGMY.ORG', html.window.location.pathname + html.window.location.search);
      } catch (_) {}
    }
    final iframe = html.IFrameElement()
      ..style.position = 'fixed'
      ..style.right = '0'
      ..style.bottom = '0'
      ..style.width = '0'
      ..style.height = '0'
      ..style.border = '0'
      ..style.opacity = '0'
      ..setAttribute('aria-hidden', 'true');
    html.document.body?.append(iframe);

    final loaded = Completer<void>();
    iframe.onLoad.first.then((_) {
      if (!loaded.isCompleted) loaded.complete();
    });
    iframe.srcdoc = htmlContent;
    await loaded.future.timeout(const Duration(seconds: 6), onTimeout: () {});

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
            html.window.location.pathname + html.window.location.search + previousHash,
          );
        } catch (_) {}
      }
      await _openInNewTab(htmlContent, plainText, fileName);
      return;
    }
    try {
      final doc = js_util.getProperty(win, 'document');
      js_util.setProperty(doc, 'title', 'NGMY.ORG');
    } catch (_) {}
    // WindowBase doesn't expose focus()/print() in dart:html's typed API —
    // call through JS interop since the underlying object is a real Window.
    try {
      js_util.callMethod(win, 'focus', const []);
    } catch (_) {}
    // The document's own <script> already calls print() on load; this is a
    // fallback in case srcdoc's onload timing races the embedded script.
    Timer(const Duration(milliseconds: 300), () {
      try {
        js_util.callMethod(win, 'print', const []);
      } catch (_) {}
    });
    // Remove well after the print dialog would have appeared/closed.
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
            html.window.location.pathname + html.window.location.search + previousHash,
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
          html.window.location.pathname + html.window.location.search + previousHash,
        );
      } catch (_) {}
    }
    await _openInNewTab(htmlContent, plainText, fileName);
  }
}

Future<void> _openInNewTab(String htmlContent, String plainText, String fileName) async {
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
}) async {
  final safe = fileName.replaceAll(RegExp(r'[^a-zA-Z0-9 _-]'), '_').trim();
  final blob = html.Blob([utf8.encode(htmlContent)], 'text/html;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.AnchorElement(href: url)
    ..download = '${safe.isEmpty ? 'civic_member_report' : safe}.html'
    ..click();
  html.Url.revokeObjectUrl(url);
}
