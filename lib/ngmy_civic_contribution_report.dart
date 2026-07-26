import 'package:flutter/material.dart';

import 'ngmy_civic_member_report_print_stub.dart'
    if (dart.library.html) 'ngmy_civic_member_report_print_web.dart';

/// How the printable civic contribution report is laid out.
enum NgmyCivicContributionReportView {
  /// Contributed members on the left, not yet contributed on the right.
  split,
  /// Only members who contributed.
  contributedOnly,
  /// One table with a status column for everyone.
  allCombined,
}

class NgmyCivicContributionReportRow {
  const NgmyCivicContributionReportRow({
    required this.name,
    required this.registryId,
    required this.city,
    required this.room,
    required this.phone,
    required this.contributed,
    required this.amount,
  });

  final String name;
  final String registryId;
  final String city;
  final String room;
  final String phone;
  final bool contributed;
  final double amount;
}

class NgmyCivicContributionReportData {
  const NgmyCivicContributionReportData({
    required this.state,
    required this.campaignTitle,
    required this.scopeLabel,
    required this.generatedAt,
    required this.campaignActive,
    required this.rows,
  });

  final String state;
  final String campaignTitle;
  final String scopeLabel;
  final String generatedAt;
  final bool campaignActive;
  final List<NgmyCivicContributionReportRow> rows;

  List<NgmyCivicContributionReportRow> get contributed =>
      rows.where((r) => r.contributed).toList();

  List<NgmyCivicContributionReportRow> get notContributed =>
      rows.where((r) => !r.contributed).toList();

  String get motto => "EMO 'YA M'MBONDO · $state";
}

String ngmyCivicContributionMottoForState(String state) => "EMO 'YA M'MBONDO · ${state.trim()}";

String _escapeHtml(String s) => s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

String _tableRows(
  List<NgmyCivicContributionReportRow> rows, {
  bool showStatus = false,
  String emptyLabel = 'No members listed.',
}) {
  if (rows.isEmpty) {
    return '<tr><td colspan="${showStatus ? 6 : 5}" class="empty">$emptyLabel</td></tr>';
  }
  return rows.map((r) {
    final status = r.contributed
        ? '<span class="badge yes">Contributed</span>'
        : '<span class="badge no">Not yet</span>';
    final amount = r.contributed && r.amount > 0 ? '\$${r.amount.toStringAsFixed(2)}' : '—';
    return '''
<tr>
  <td class="name">${_escapeHtml(r.name.isEmpty ? '—' : r.name)}</td>
  <td class="rid">${_escapeHtml(r.registryId.isEmpty ? '—' : r.registryId)}</td>
  <td>${_escapeHtml(r.city.isEmpty ? '—' : r.city)}</td>
  <td>${_escapeHtml(r.room.isEmpty ? '—' : r.room)}</td>
  <td class="phone">${_escapeHtml(r.phone.isEmpty ? '—' : r.phone)}</td>
  ${showStatus ? '<td class="status">$status</td>' : ''}
  ${showStatus ? '' : '<td class="amount">$amount</td>'}
</tr>''';
  }).join('\n');
}

String ngmyBuildCivicContributionReportHtml(
  NgmyCivicContributionReportData data, {
  NgmyCivicContributionReportView view = NgmyCivicContributionReportView.split,
}) {
  final contributed = data.contributed;
  final pending = data.notContributed;
  final viewKey = switch (view) {
    NgmyCivicContributionReportView.split => 'split',
    NgmyCivicContributionReportView.contributedOnly => 'contributed',
    NgmyCivicContributionReportView.allCombined => 'all',
  };

  final splitBlock = '''
<div class="panel-grid split-view view-panel" data-view="split">
  <div class="panel contributed-panel">
    <div class="panel-title contributed">Contributed · ${contributed.length}</div>
    <table>
      <thead><tr><th>Name</th><th>Registry ID</th><th>City</th><th>Room</th><th>Phone</th><th>Amount</th></tr></thead>
      <tbody>${_tableRows(contributed, emptyLabel: 'No contributions recorded yet.')}</tbody>
    </table>
  </div>
  <div class="panel pending-panel">
    <div class="panel-title pending">Not yet contributed · ${pending.length}</div>
    <table>
      <thead><tr><th>Name</th><th>Registry ID</th><th>City</th><th>Room</th><th>Phone</th><th>Amount</th></tr></thead>
      <tbody>${_tableRows(pending, emptyLabel: 'Everyone in scope has contributed.')}</tbody>
    </table>
  </div>
</div>''';

  final contributedOnlyBlock = '''
<div class="view-panel contributed-only-view" data-view="contributed">
  <div class="panel contributed-panel solo">
    <div class="panel-title contributed">Members who contributed · ${contributed.length}</div>
    <table>
      <thead><tr><th>Name</th><th>Registry ID</th><th>City</th><th>Room</th><th>Phone</th><th>Amount</th></tr></thead>
      <tbody>${_tableRows(contributed, emptyLabel: 'No contributions recorded yet.')}</tbody>
    </table>
  </div>
</div>''';

  final allBlock = '''
<div class="view-panel all-view" data-view="all">
  <div class="panel solo">
    <div class="panel-title neutral">Full community roster · ${data.rows.length}</div>
    <table>
      <thead><tr><th>Name</th><th>Registry ID</th><th>City</th><th>Room</th><th>Phone</th><th>Status</th></tr></thead>
      <tbody>${_tableRows(data.rows, showStatus: true, emptyLabel: 'No members in this state.')}</tbody>
    </table>
  </div>
</div>''';

  return '''
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NGMY Civic Contribution Report — ${_escapeHtml(data.state)}</title>
  <style>
    @page { size: letter; margin: 10mm; }
    @media print {
      body { background: #fff; padding: 0; }
      .toolbar, .view-switch { display: none !important; }
      .document { box-shadow: none; }
      .view-panel { display: none !important; }
      .view-panel.active { display: block !important; }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 20px;
      background: linear-gradient(160deg, #eef4ff 0%, #f8fafc 45%, #fff7ed 100%);
      color: #0f172a;
      font-family: "Segoe UI", Arial, sans-serif;
    }
    .toolbar, .view-switch {
      max-width: 980px;
      margin: 0 auto 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }
    .view-switch button, .toolbar button {
      font-size: 13px;
      padding: 9px 14px;
      border-radius: 999px;
      border: 1px solid #cbd5e1;
      background: #fff;
      cursor: pointer;
      font-weight: 700;
    }
    .view-switch button.active {
      background: linear-gradient(135deg, #1d4ed8, #2563eb);
      color: #fff;
      border-color: #1d4ed8;
    }
    .document {
      max-width: 980px;
      margin: 0 auto;
      background: #fff;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 18px 50px rgba(15, 23, 42, 0.12);
      border: 1px solid #dbeafe;
      position: relative;
    }
    .watermark {
      position: absolute;
      inset: 0;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 120px;
      font-weight: 900;
      letter-spacing: 0.35em;
      color: rgba(15, 23, 42, 0.045);
      transform: rotate(-28deg);
      user-select: none;
      z-index: 0;
    }
    .doc-inner { position: relative; z-index: 1; }
    .hero {
      padding: 28px 32px 22px;
      background:
        linear-gradient(135deg, rgba(0, 127, 255, 0.92) 0%, rgba(29, 78, 216, 0.95) 42%, rgba(206, 16, 33, 0.88) 100%);
      color: #fff;
      border-bottom: 5px solid #f7d618;
    }
    .hero-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
    }
    .brand {
      font-size: 36px;
      font-weight: 900;
      letter-spacing: 0.22em;
      line-height: 1;
      text-shadow: 0 2px 18px rgba(0,0,0,0.25);
    }
    .seal {
      min-width: 108px;
      text-align: center;
      padding: 10px 12px;
      border: 2px solid rgba(255,255,255,0.45);
      border-radius: 14px;
      background: rgba(255,255,255,0.12);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.1em;
      line-height: 1.35;
    }
    .hero h1 {
      margin: 16px 0 6px;
      font-size: 26px;
      font-weight: 900;
      letter-spacing: 0.03em;
    }
    .hero .subtitle {
      margin: 0;
      font-size: 14px;
      opacity: 0.92;
      max-width: 620px;
      line-height: 1.45;
    }
    .meta-row {
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .chip {
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.16);
      border: 1px solid rgba(255,255,255,0.28);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 16px 24px;
      background: linear-gradient(180deg, #f8fafc, #fff);
      border-bottom: 1px solid #e2e8f0;
    }
    .stat {
      text-align: center;
      padding: 12px 8px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      background: #fff;
    }
    .stat .label {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #64748b;
    }
    .stat .value {
      margin-top: 6px;
      font-size: 24px;
      font-weight: 900;
      color: #0f172a;
    }
    .stat.yes .value { color: #059669; }
    .stat.no .value { color: #dc2626; }
    .content { padding: 18px 22px 8px; }
    .view-panel { display: none; }
    .view-panel.active { display: block; }
    .panel-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    @media (max-width: 820px) {
      .panel-grid { grid-template-columns: 1fr; }
    }
    .panel {
      border: 1px solid #dbeafe;
      border-radius: 14px;
      overflow: hidden;
      background: #fafbfd;
    }
    .panel-title {
      padding: 11px 14px;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .panel-title.contributed { background: #ecfdf5; color: #047857; border-bottom: 1px solid #bbf7d0; }
    .panel-title.pending { background: #fef2f2; color: #b91c1c; border-bottom: 1px solid #fecaca; }
    .panel-title.neutral { background: #eff6ff; color: #1d4ed8; border-bottom: 1px solid #bfdbfe; }
    table { width: 100%; border-collapse: collapse; background: #fff; }
    th, td {
      padding: 8px 10px;
      border-bottom: 1px solid #e5e7eb;
      font-size: 11px;
      text-align: left;
      vertical-align: top;
      line-height: 1.35;
    }
    th {
      background: #f8fafc;
      font-weight: 800;
      color: #475569;
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    td.name { font-weight: 700; }
    td.rid, td.phone { font-variant-numeric: tabular-nums; white-space: nowrap; }
    td.amount { font-weight: 800; color: #047857; }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.04em;
    }
    .badge.yes { background: #dcfce7; color: #166534; }
    .badge.no { background: #fee2e2; color: #991b1b; }
    .empty { color: #64748b; font-style: italic; text-align: center; }
    .footer {
      padding: 18px 24px 24px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
    }
    .motto {
      display: inline-block;
      padding: 12px 22px;
      border-radius: 14px;
      background: linear-gradient(135deg, rgba(167,139,250,0.14), rgba(34,211,238,0.12));
      border: 1px solid rgba(29,78,216,0.18);
      font-size: 15px;
      font-weight: 900;
      letter-spacing: 0.08em;
      color: #1e3a8a;
    }
    .footer-note {
      margin-top: 12px;
      font-size: 10px;
      color: #64748b;
      letter-spacing: 0.06em;
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <button type="button" onclick="window.print()">Print / Save PDF</button>
  </div>
  <div class="view-switch no-print">
    <span style="font-weight:800;font-size:12px;color:#475569;margin-right:4px;">View:</span>
    <button type="button" data-view-btn="split" onclick="setView('split')">Split tables</button>
    <button type="button" data-view-btn="contributed" onclick="setView('contributed')">Contributed only</button>
    <button type="button" data-view-btn="all" onclick="setView('all')">Everyone (status)</button>
  </div>
  <div class="document">
    <div class="watermark">NGMY</div>
    <div class="doc-inner">
      <header class="hero">
        <div class="hero-top">
          <div class="brand">NGMY</div>
          <div class="seal">CONGOLESE<br>COMMUNITY<br>CIVIC REGISTRY</div>
        </div>
        <h1>Contribution Community Report</h1>
        <p class="subtitle">${_escapeHtml(data.campaignTitle)} · ${_escapeHtml(data.scopeLabel)}</p>
        <div class="meta-row">
          <span class="chip">${_escapeHtml(data.state)}</span>
          <span class="chip">${data.campaignActive ? 'Active campaign' : 'Community record'}</span>
          <span class="chip">Generated ${_escapeHtml(data.generatedAt)}</span>
        </div>
      </header>
      <div class="stats">
        <div class="stat"><div class="label">Total in scope</div><div class="value">${data.rows.length}</div></div>
        <div class="stat yes"><div class="label">Contributed</div><div class="value">${contributed.length}</div></div>
        <div class="stat no"><div class="label">Not yet</div><div class="value">${pending.length}</div></div>
      </div>
      <div class="content">
        $splitBlock
        $contributedOnlyBlock
        $allBlock
      </div>
      <footer class="footer">
        <div class="motto">${_escapeHtml(data.motto)}</div>
        <div class="footer-note">NGMY Civic Registry · Official community document · Share with care · NGMY watermark</div>
      </footer>
    </div>
  </div>
  <script>
    function setView(key) {
      document.querySelectorAll('.view-panel').forEach(function(el) {
        el.classList.toggle('active', el.getAttribute('data-view') === key);
      });
      document.querySelectorAll('[data-view-btn]').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-view-btn') === key);
      });
    }
    setView('$viewKey');
  </script>
</body>
</html>''';
}

class NgmyCivicContributionReportPreview extends StatelessWidget {
  const NgmyCivicContributionReportPreview({
    super.key,
    required this.data,
    required this.view,
    this.isDark = false,
  });

  final NgmyCivicContributionReportData data;
  final NgmyCivicContributionReportView view;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final contributed = data.contributed;
    final pending = data.notContributed;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Container(
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : const Color(0xFFEEF2F7),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: isDark ? const Color(0xFF334155) : const Color(0xFFCBD5E1)),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(18, 18, 18, 16),
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [Color(0xFF007FFF), Color(0xFF1D4ED8), Color(0xFFCE1021)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Row(
                  children: [
                    Text('NGMY', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28, letterSpacing: 6)),
                    Spacer(),
                    Text('CONGOLESE COMMUNITY', textAlign: TextAlign.right, style: TextStyle(color: Colors.white70, fontSize: 9, fontWeight: FontWeight.w800, letterSpacing: 0.8)),
                  ],
                ),
                const SizedBox(height: 12),
                const Text('Contribution Community Report', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                const SizedBox(height: 4),
                Text('${data.campaignTitle} · ${data.scopeLabel}', style: const TextStyle(color: Colors.white70, fontSize: 12)),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 8,
                  runSpacing: 6,
                  children: [
                    _chip(data.state),
                    _chip(data.campaignActive ? 'Active' : 'Record'),
                    _chip('${contributed.length} contributed'),
                    _chip('${pending.length} pending'),
                  ],
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(14),
            child: switch (view) {
              NgmyCivicContributionReportView.split => Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(child: _miniTable('Contributed', contributed, true, ink, muted)),
                    const SizedBox(width: 10),
                    Expanded(child: _miniTable('Not yet', pending, false, ink, muted)),
                  ],
                ),
              NgmyCivicContributionReportView.contributedOnly =>
                _miniTable('Contributed', contributed, true, ink, muted),
              NgmyCivicContributionReportView.allCombined =>
                _miniTable('Everyone', data.rows, null, ink, muted),
            },
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                gradient: LinearGradient(
                  colors: [
                    const Color(0xFFA78BFA).withValues(alpha: 0.16),
                    const Color(0xFF22D3EE).withValues(alpha: 0.12),
                  ],
                ),
                border: Border.all(color: const Color(0xFF1D4ED8).withValues(alpha: 0.18)),
              ),
              child: Text(
                data.motto,
                textAlign: TextAlign.center,
                style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 0.6, color: isDark ? const Color(0xFF93C5FD) : const Color(0xFF1E3A8A)),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _chip(String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: Colors.white30),
      ),
      child: Text(label, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
    );
  }

  Widget _miniTable(String title, List<NgmyCivicContributionReportRow> rows, bool? contributedOnly, Color ink, Color muted) {
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
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
            color: contributedOnly == true
                ? (isDark ? const Color(0xFF064E3B) : const Color(0xFFECFDF5))
                : contributedOnly == false
                    ? (isDark ? const Color(0xFF7F1D1D) : const Color(0xFFFEF2F2))
                    : (isDark ? const Color(0xFF1E3A8A) : const Color(0xFFEFF6FF)),
            child: Text('$title · ${rows.length}', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 0.8, color: ink)),
          ),
          if (rows.isEmpty)
            Padding(
              padding: const EdgeInsets.all(12),
              child: Text('No members in this section.', style: TextStyle(color: muted, fontStyle: FontStyle.italic, fontSize: 12)),
            )
          else
            ...rows.take(8).map(
                  (r) => Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    child: Row(
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(r.name.isEmpty ? '—' : r.name, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: ink)),
                              Text(r.registryId.isEmpty ? r.phone : r.registryId, style: TextStyle(fontSize: 10, color: muted)),
                            ],
                          ),
                        ),
                        if (contributedOnly == null)
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: (r.contributed ? const Color(0xFFDCFCE7) : const Color(0xFFFEE2E2)).withValues(alpha: isDark ? 0.25 : 1),
                              borderRadius: BorderRadius.circular(999),
                            ),
                            child: Text(
                              r.contributed ? 'Yes' : 'No',
                              style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: r.contributed ? const Color(0xFF166534) : const Color(0xFF991B1B)),
                            ),
                          ),
                      ],
                    ),
                  ),
                ),
          if (rows.length > 8)
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 10),
              child: Text('+ ${rows.length - 8} more on the printable report', style: TextStyle(fontSize: 10, color: muted)),
            ),
        ],
      ),
    );
  }
}

Future<void> showNgmyCivicContributionReportSheet(
  BuildContext context, {
  required NgmyCivicContributionReportData data,
}) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return _NgmyCivicContributionReportSheetHost(data: data, isDark: isDark);
    },
  );
}

class _NgmyCivicContributionReportSheetHost extends StatefulWidget {
  const _NgmyCivicContributionReportSheetHost({required this.data, required this.isDark});

  final NgmyCivicContributionReportData data;
  final bool isDark;

  @override
  State<_NgmyCivicContributionReportSheetHost> createState() => _NgmyCivicContributionReportSheetHostState();
}

class _NgmyCivicContributionReportSheetHostState extends State<_NgmyCivicContributionReportSheetHost> {
  NgmyCivicContributionReportView _view = NgmyCivicContributionReportView.split;

  Future<void> _print() async {
    final html = ngmyBuildCivicContributionReportHtml(widget.data, view: _view);
    final plain = _plainText(widget.data, _view);
    await ngmyPrintCivicMemberReport(
      htmlContent: html,
      plainText: plain,
      fileName: 'ngmy-contribution-${widget.data.state.replaceAll(RegExp(r'\s+'), '_')}',
    );
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Print dialog opened — save as PDF or print for your community.'),
          backgroundColor: Color(0xFF059669),
        ),
      );
    }
  }

  Future<void> _download() async {
    final html = ngmyBuildCivicContributionReportHtml(widget.data, view: _view);
    final plain = _plainText(widget.data, _view);
    await ngmyDownloadCivicMemberReport(
      htmlContent: html,
      plainText: plain,
      fileName: 'ngmy-contribution-${widget.data.state.replaceAll(RegExp(r'\s+'), '_')}',
    );
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Report downloaded — open or share the HTML file.')),
      );
    }
  }

  String _plainText(NgmyCivicContributionReportData data, NgmyCivicContributionReportView view) {
    final buf = StringBuffer()
      ..writeln('NGMY Civic Contribution Report — ${data.state}')
      ..writeln(data.campaignTitle)
      ..writeln('Generated: ${data.generatedAt}')
      ..writeln(data.motto)
      ..writeln('');
    Iterable<NgmyCivicContributionReportRow> rows = switch (view) {
      NgmyCivicContributionReportView.contributedOnly => data.contributed,
      NgmyCivicContributionReportView.allCombined => data.rows,
      NgmyCivicContributionReportView.split => data.rows,
    };
    for (final r in rows) {
      buf.writeln('${r.contributed ? '[YES]' : '[NO]'} ${r.name} · ${r.registryId} · ${r.city}/${r.room}');
    }
    return buf.toString();
  }

  @override
  Widget build(BuildContext context) {
    final ink = widget.isDark ? Colors.white : const Color(0xFF0F172A);
    return DraggableScrollableSheet(
      initialChildSize: 0.92,
      minChildSize: 0.55,
      maxChildSize: 0.98,
      builder: (context, scrollController) {
        return Container(
          decoration: BoxDecoration(
            color: widget.isDark ? const Color(0xFF0F172A) : Colors.white,
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
                          Text('Contribution Report', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: ink)),
                          Text(widget.data.state, style: TextStyle(fontSize: 13, color: widget.isDark ? Colors.white60 : Colors.black54)),
                        ],
                      ),
                    ),
                    IconButton(tooltip: 'Print', onPressed: _print, icon: const Icon(Icons.print_outlined)),
                    IconButton(tooltip: 'Download', onPressed: _download, icon: const Icon(Icons.download_outlined)),
                    IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close)),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: SegmentedButton<NgmyCivicContributionReportView>(
                  segments: const [
                    ButtonSegment(value: NgmyCivicContributionReportView.split, label: Text('Split')),
                    ButtonSegment(value: NgmyCivicContributionReportView.contributedOnly, label: Text('Contributed')),
                    ButtonSegment(value: NgmyCivicContributionReportView.allCombined, label: Text('Everyone')),
                  ],
                  selected: {_view},
                  onSelectionChanged: (s) => setState(() => _view = s.first),
                ),
              ),
              const SizedBox(height: 10),
              const Divider(height: 1),
              Expanded(
                child: SingleChildScrollView(
                  controller: scrollController,
                  padding: const EdgeInsets.fromLTRB(14, 14, 14, 28),
                  child: NgmyCivicContributionReportPreview(data: widget.data, view: _view, isDark: widget.isDark),
                ),
              ),
              SafeArea(
                top: false,
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
                  child: Row(
                    children: [
                      Expanded(
                        child: OutlinedButton.icon(onPressed: _download, icon: const Icon(Icons.download_outlined, size: 18), label: const Text('Download')),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: FilledButton.icon(
                          onPressed: _print,
                          icon: const Icon(Icons.print_outlined, size: 18),
                          label: const Text('Print / PDF'),
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
  }
}
