import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_civic_member_report_print_stub.dart'
    if (dart.library.html) 'ngmy_civic_member_report_print_web.dart';

String ngmyBuildCivicMemberReportHtml(String plainText) {
  final escaped = plainText
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  final lines = escaped.split('\n').map((line) {
    if (line.startsWith('--- ') && line.endsWith(' ---')) {
      return '<h3 style="margin:18px 0 8px;color:#1e3a8a;font-size:15px;">${line.substring(4, line.length - 4)}</h3>';
    }
    if (line.trim().isEmpty) return '<div style="height:8px"></div>';
    return '<p style="margin:4px 0;font-size:13px;line-height:1.45;color:#111827;">$line</p>';
  }).join('\n');

  return '''
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Civic Registry Member Report</title>
  <style>
    @media print {
      body { margin: 0; padding: 16px; }
      .toolbar { display: none !important; }
    }
    body {
      font-family: Georgia, "Times New Roman", serif;
      background: #fff;
      color: #111827;
      padding: 24px;
      max-width: 820px;
      margin: 0 auto;
    }
    h1 {
      font-size: 24px;
      margin: 0 0 6px;
      letter-spacing: 0.5px;
    }
    .meta { color: #64748b; font-size: 12px; margin-bottom: 18px; }
    .toolbar {
      margin-bottom: 20px;
      display: flex;
      gap: 10px;
    }
    button {
      font-size: 14px;
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <button onclick="window.print()">Print</button>
  </div>
  <h1>Full Member Information</h1>
  <div class="meta">Civic Registry · Official member report</div>
  $lines
  <script>window.addEventListener('load', function(){ setTimeout(function(){ window.print(); }, 300); });</script>
</body>
</html>
''';
}

Future<void> showNgmyCivicMemberReportSheet(
  BuildContext context, {
  required String memberName,
  required String plainText,
}) {
  final html = ngmyBuildCivicMemberReportHtml(plainText);
  final isDark = Theme.of(context).brightness == Brightness.dark;

  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return DraggableScrollableSheet(
        initialChildSize: 0.92,
        minChildSize: 0.55,
        maxChildSize: 0.98,
        builder: (context, scrollController) {
          return Container(
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF0F172A) : Colors.white,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(22)),
            ),
            child: Column(
              children: [
                Container(
                  width: 42,
                  height: 4,
                  margin: const EdgeInsets.only(top: 10, bottom: 8),
                  decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(99)),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 0, 8, 8),
                  child: Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text('Full Member Report', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
                            Text(memberName, style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : Colors.black54)),
                          ],
                        ),
                      ),
                      IconButton(
                        tooltip: 'Print',
                        onPressed: () => ngmyPrintCivicMemberReport(htmlContent: html, plainText: plainText, fileName: memberName),
                        icon: const Icon(Icons.print_outlined),
                      ),
                      IconButton(
                        tooltip: 'Download',
                        onPressed: () => ngmyDownloadCivicMemberReport(htmlContent: html, plainText: plainText, fileName: memberName),
                        icon: const Icon(Icons.download_outlined),
                      ),
                      IconButton(
                        tooltip: 'Copy text',
                        onPressed: () async {
                          await Clipboard.setData(ClipboardData(text: plainText));
                          if (ctx.mounted) {
                            ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Report copied to clipboard')));
                          }
                        },
                        icon: const Icon(Icons.copy_outlined),
                      ),
                      IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close)),
                    ],
                  ),
                ),
                const Divider(height: 1),
                Expanded(
                  child: SingleChildScrollView(
                    controller: scrollController,
                    padding: const EdgeInsets.fromLTRB(18, 16, 18, 28),
                    child: SelectableText(
                      plainText,
                      style: TextStyle(
                        fontSize: 14,
                        height: 1.55,
                        color: isDark ? Colors.white : const Color(0xFF111827),
                        fontFamily: 'Georgia',
                      ),
                    ),
                  ),
                ),
                SafeArea(
                  top: false,
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
                    child: Row(
                      children: [
                        Expanded(
                          child: OutlinedButton.icon(
                            onPressed: () => ngmyDownloadCivicMemberReport(htmlContent: html, plainText: plainText, fileName: memberName),
                            icon: const Icon(Icons.download_outlined, size: 18),
                            label: const Text('Download'),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: FilledButton.icon(
                            onPressed: () => ngmyPrintCivicMemberReport(htmlContent: html, plainText: plainText, fileName: memberName),
                            icon: const Icon(Icons.print_outlined, size: 18),
                            label: const Text('Print'),
                            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF1D4ED8)),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      );
    },
  );
}
