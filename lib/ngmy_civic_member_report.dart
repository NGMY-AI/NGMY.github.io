import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_civic_member_report_pdf.dart';
import 'ngmy_civic_member_report_print_stub.dart'
    if (dart.library.html) 'ngmy_civic_member_report_print_web.dart';

class NgmyCivicMemberReportData {
  NgmyCivicMemberReportData({
    required this.memberName,
    required this.generatedAt,
    required this.officialRecord,
    required this.contact,
    required this.activity,
    required this.contributions,
    required this.claims,
  });

  final String memberName;
  final String generatedAt;
  final Map<String, String> officialRecord;
  final Map<String, String> contact;
  final Map<String, String> activity;
  final List<String> contributions;
  final List<String> claims;
}

NgmyCivicMemberReportData ngmyParseCivicMemberReportPlainText(String plainText, {String? memberName}) {
  final lines = plainText.split('\n');
  String? name;
  String generatedAt = DateTime.now().toLocal().toString();
  final official = <String, String>{};
  final contact = <String, String>{};
  final activity = <String, String>{};
  final contributions = <String>[];
  final claims = <String>[];

  String section = '';
  for (final raw in lines) {
    final line = raw.trim();
    if (line.isEmpty) continue;
    if (line.startsWith('--- ') && line.endsWith(' ---')) {
      section = line.substring(4, line.length - 4).trim().toUpperCase();
      continue;
    }
    if (line.startsWith('FULL MEMBER INFORMATION')) continue;
    if (line.startsWith('Generated:')) {
      generatedAt = line.substring('Generated:'.length).trim();
      continue;
    }
    if (line.startsWith('- ')) {
      final item = line.substring(2).trim();
      if (section.contains('CONTRIBUTION')) {
        contributions.add(item);
      } else if (section.contains('CLAIM')) {
        claims.add(item);
      }
      continue;
    }
    final colon = line.indexOf(':');
    if (colon <= 0) continue;
    final key = line.substring(0, colon).trim();
    final value = line.substring(colon + 1).trim();
    if (key == 'Name' && name == null) name = value;
    if (section.contains('OFFICIAL')) {
      official[key] = value;
    } else if (section.contains('CONTACT')) {
      contact[key] = value;
    } else if (section.contains('ACTIVITY')) {
      activity[key] = value;
    }
  }

  return NgmyCivicMemberReportData(
    memberName: memberName ?? name ?? 'Member',
    generatedAt: generatedAt,
    officialRecord: official,
    contact: contact,
    activity: activity,
    contributions: contributions,
    claims: claims,
  );
}

String _escapeHtml(String s) => s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

String _htmlTableRows(Map<String, String> fields) {
  if (fields.isEmpty) return '<tr><td colspan="2" class="empty">No records.</td></tr>';
  return fields.entries
      .map(
        (e) => '''
<tr>
  <th>${_escapeHtml(e.key)}</th>
  <td>${_escapeHtml(e.value)}</td>
</tr>''',
      )
      .join('\n');
}

String _htmlListItems(List<String> items, String emptyLabel) {
  if (items.isEmpty) return '<li class="empty">$emptyLabel</li>';
  return items.map((e) => '<li>${_escapeHtml(e)}</li>').join('\n');
}

String ngmyBuildCivicMemberReportHtml(String plainText, {String? memberName}) {
  final data = ngmyParseCivicMemberReportPlainText(plainText, memberName: memberName);
  return ngmyBuildCivicMemberReportHtmlFromData(data);
}

String ngmyBuildCivicMemberReportHtmlFromData(NgmyCivicMemberReportData data) {
  return '''
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Civic Registry Member Report — ${_escapeHtml(data.memberName)}</title>
  <style>
    @page { margin: 16mm; }
    @media print {
      body { background: #fff; padding: 0; }
      .toolbar { display: none !important; }
      .document { box-shadow: none; border: 1px solid #cbd5e1; }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 24px;
      background: #eef2f7;
      color: #0f172a;
      font-family: "Segoe UI", Arial, sans-serif;
    }
    .toolbar { margin-bottom: 16px; display: flex; gap: 10px; max-width: 900px; margin-left: auto; margin-right: auto; }
    button {
      font-size: 14px; padding: 10px 16px; border-radius: 8px;
      border: 1px solid #cbd5e1; background: #fff; cursor: pointer; font-weight: 600;
    }
    .document {
      max-width: 900px;
      margin: 0 auto;
      background: #fff;
      border: 1px solid #cbd5e1;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
    }
    .doc-header {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #312e81 100%);
      color: #fff;
      padding: 28px 32px 24px;
      border-bottom: 4px solid #94a3b8;
    }
    .brand-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; }
    .brand {
      font-size: 34px; font-weight: 900; letter-spacing: 0.18em;
      background: linear-gradient(180deg, #fff 0%, #cbd5e1 45%, #94a3b8 100%);
      -webkit-background-clip: text; background-clip: text; color: transparent;
      text-shadow: 0 0 18px rgba(255,255,255,0.35);
    }
    .seal {
      min-width: 92px; text-align: center; padding: 10px 12px;
      border: 2px solid rgba(255,255,255,0.35); border-radius: 12px;
      background: rgba(255,255,255,0.08); font-size: 11px; letter-spacing: 0.08em;
    }
    .doc-title { margin: 18px 0 4px; font-size: 24px; font-weight: 800; letter-spacing: 0.04em; }
    .doc-subtitle { margin: 0; color: rgba(255,255,255,0.78); font-size: 13px; }
    .doc-meta { margin-top: 14px; font-size: 12px; color: rgba(255,255,255,0.72); }
    .content { padding: 24px 28px 30px; }
    .section {
      border: 1px solid #dbe3ef;
      border-radius: 12px;
      margin-bottom: 18px;
      overflow: hidden;
      background: #fafbfd;
    }
    .section-head {
      background: linear-gradient(180deg, #f8fafc, #eef2ff);
      border-bottom: 1px solid #dbe3ef;
      padding: 12px 16px;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #1e3a8a;
    }
    table { width: 100%; border-collapse: collapse; background: #fff; }
    th, td {
      padding: 11px 14px;
      border-bottom: 1px solid #e5e7eb;
      text-align: left;
      vertical-align: top;
      font-size: 13px;
      line-height: 1.45;
    }
    th {
      width: 34%;
      background: #f8fafc;
      color: #475569;
      font-weight: 700;
    }
    td { color: #0f172a; font-weight: 600; }
    tr:last-child th, tr:last-child td { border-bottom: none; }
    .empty { color: #64748b; font-style: italic; }
    ul {
      margin: 0; padding: 14px 18px 14px 34px; background: #fff;
    }
    li { margin: 0 0 8px; font-size: 13px; line-height: 1.45; color: #0f172a; }
    .footer {
      padding: 14px 28px 22px;
      border-top: 1px solid #e5e7eb;
      font-size: 11px;
      color: #64748b;
      text-align: center;
      letter-spacing: 0.04em;
    }
  </style>
</head>
<body>
  <div class="toolbar"><button onclick="window.print()">Print</button></div>
  <div class="document">
    <header class="doc-header">
      <div class="brand-row">
        <div class="brand">NGMY</div>
        <div class="seal">OFFICIAL<br>CIVIC REGISTRY</div>
      </div>
      <h1 class="doc-title">Full Member Information Report</h1>
      <p class="doc-subtitle">${_escapeHtml(data.memberName)}</p>
      <div class="doc-meta">Generated ${_escapeHtml(data.generatedAt)} · Confidential member record</div>
    </header>
    <div class="content">
      <section class="section">
        <div class="section-head">Official Record</div>
        <table>${_htmlTableRows(data.officialRecord)}</table>
      </section>
      <section class="section">
        <div class="section-head">Contact Information</div>
        <table>${_htmlTableRows(data.contact)}</table>
      </section>
      <section class="section">
        <div class="section-head">Activity Summary</div>
        <table>${_htmlTableRows(data.activity)}</table>
      </section>
      <section class="section">
        <div class="section-head">Contribution Records</div>
        <ul>${_htmlListItems(data.contributions, 'No contribution records.')}</ul>
      </section>
      <section class="section">
        <div class="section-head">Claim Records</div>
        <ul>${_htmlListItems(data.claims, 'No claim records.')}</ul>
      </section>
    </div>
    <div class="footer">NGMY Civic Registry · Official document · Do not alter or reproduce without authorization</div>
  </div>
  <script>window.addEventListener('load', function(){ setTimeout(function(){ window.print(); }, 350); });</script>
</body>
</html>
''';
}

class NgmyCivicMemberReportPreview extends StatelessWidget {
  const NgmyCivicMemberReportPreview({super.key, required this.data, this.isDark = false});

  final NgmyCivicMemberReportData data;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : const Color(0xFFEEF2F7),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFFCBD5E1)),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(13),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              padding: const EdgeInsets.fromLTRB(18, 18, 18, 16),
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF0F172A), Color(0xFF1E3A8A), Color(0xFF312E81)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      ShaderMask(
                        shaderCallback: (bounds) => const LinearGradient(
                          colors: [Color(0xFFFFFFFF), Color(0xFFCBD5E1), Color(0xFF94A3B8)],
                        ).createShader(bounds),
                        child: const Text(
                          'NGMY',
                          style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, letterSpacing: 6, color: Colors.white),
                        ),
                      ),
                      const Spacer(),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: Colors.white30),
                          color: Colors.white10,
                        ),
                        child: const Text('OFFICIAL\nCIVIC REGISTRY', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, fontSize: 9, fontWeight: FontWeight.w800, height: 1.2, letterSpacing: 0.8)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  const Text('Full Member Information Report', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 18)),
                  const SizedBox(height: 4),
                  Text(data.memberName, style: const TextStyle(color: Colors.white70, fontSize: 13)),
                  const SizedBox(height: 8),
                  Text('Generated ${data.generatedAt}', style: const TextStyle(color: Colors.white54, fontSize: 11)),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                children: [
                  _section('Official Record', data.officialRecord, isDark),
                  const SizedBox(height: 12),
                  _section('Contact Information', data.contact, isDark),
                  const SizedBox(height: 12),
                  _section('Activity Summary', data.activity, isDark),
                  const SizedBox(height: 12),
                  _listSection('Contribution Records', data.contributions, 'No contribution records.', isDark),
                  const SizedBox(height: 12),
                  _listSection('Claim Records', data.claims, 'No claim records.', isDark),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _section(String title, Map<String, String> fields, bool isDark) {
    return _frame(
      title: title,
      isDark: isDark,
      child: Column(
        children: fields.entries.map((e) => _row(e.key, e.value, isDark)).toList(),
      ),
    );
  }

  Widget _listSection(String title, List<String> items, String empty, bool isDark) {
    return _frame(
      title: title,
      isDark: isDark,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: items.isEmpty
            ? [Text(empty, style: TextStyle(color: isDark ? Colors.white54 : Colors.black54, fontStyle: FontStyle.italic, fontSize: 13))]
            : items.map((e) => Padding(padding: const EdgeInsets.only(bottom: 8), child: Text('• $e', style: TextStyle(fontSize: 13, height: 1.4, color: isDark ? Colors.white : const Color(0xFF0F172A))))).toList(),
      ),
    );
  }

  Widget _frame({required String title, required Widget child, required bool isDark}) {
    return Container(
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF0F172A) : Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFFDBE3EF)),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1E293B) : const Color(0xFFEEF2FF),
              border: Border(bottom: BorderSide(color: isDark ? const Color(0xFF334155) : const Color(0xFFDBE3EF))),
            ),
            child: Text(title.toUpperCase(), style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.2, color: isDark ? const Color(0xFF93C5FD) : const Color(0xFF1E3A8A))),
          ),
          Padding(padding: const EdgeInsets.all(12), child: child),
        ],
      ),
    );
  }

  Widget _row(String label, String value, bool isDark) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFFE5E7EB)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 120,
            child: Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: isDark ? Colors.white60 : const Color(0xFF64748B))),
          ),
          Expanded(child: Text(value, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: isDark ? Colors.white : const Color(0xFF0F172A)))),
        ],
      ),
    );
  }
}

Future<void> showNgmyCivicMemberReportSheet(
  BuildContext context, {
  required String memberName,
  required String plainText,
}) {
  final data = ngmyParseCivicMemberReportPlainText(plainText, memberName: memberName);
  final html = ngmyBuildCivicMemberReportHtmlFromData(data);
  final isDark = Theme.of(context).brightness == Brightness.dark;

  Future<void> downloadPdf() async {
    try {
      final bytes = await ngmyBuildCivicMemberReportPdfBytes(data);
      await ngmyDownloadCivicMemberReport(
        htmlContent: html,
        plainText: plainText,
        fileName: memberName,
        pdfBytes: bytes,
      );
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('PDF downloaded — open it or share it with others.'),
            backgroundColor: Color(0xFF059669),
          ),
        );
      }
    } catch (e) {
      await ngmyDownloadCivicMemberReport(htmlContent: html, plainText: plainText, fileName: memberName);
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('PDF failed — downloaded HTML report instead.')),
        );
      }
    }
  }

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
                        tooltip: 'Download PDF',
                        onPressed: downloadPdf,
                        icon: const Icon(Icons.picture_as_pdf_outlined),
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
                    padding: const EdgeInsets.fromLTRB(14, 14, 14, 28),
                    child: NgmyCivicMemberReportPreview(data: data, isDark: isDark),
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
                            onPressed: downloadPdf,
                            icon: const Icon(Icons.picture_as_pdf_outlined, size: 18),
                            label: const Text('Download PDF'),
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
