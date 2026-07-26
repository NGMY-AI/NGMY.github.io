import 'package:flutter/material.dart';

import 'ngmy_civic_member_report_print_stub.dart'
    if (dart.library.html) 'ngmy_civic_member_report_print_web.dart';

enum NgmyCivicContributionReportLang { english, swahili }

enum NgmyCivicContributionReportView {
  split,
  contributedOnly,
  allCombined,
}

class NgmyCivicContributionReportStrings {
  const NgmyCivicContributionReportStrings(this.lang);

  final NgmyCivicContributionReportLang lang;

  bool get isSwahili => lang == NgmyCivicContributionReportLang.swahili;

  String get contributed => isSwahili ? 'Waliochangia' : 'Contributed';
  String get notYetContributed => isSwahili ? 'Hawajachangia' : 'Not yet contributed';
  String get notYetShort => isSwahili ? 'Bado' : 'Not yet';
  String get currentCampaign => isSwahili ? 'Kampeni ya sasa' : 'Current campaign';
  String get activeNow => isSwahili ? 'Kampeni ya sasa' : 'Active now';
  String get total => isSwahili ? 'Jumla' : 'Total';
  String get yes => isSwahili ? 'Ndiyo' : 'Yes';
  String get no => isSwahili ? 'Hapana' : 'No';
  String get campaignStartedPrefix => isSwahili ? 'Ilianza' : 'Current campaign started';
  String get campaignStartUnknown =>
      isSwahili ? 'Muda wa kuanza haujarekodiwa' : 'Campaign start not recorded';

  /// One campaign label in Swahili — never "Inaendelea sasa" plus "Kampeni ya sasa".
  String campaignStatusLabel({required bool active}) {
    if (isSwahili) return 'Kampeni ya sasa';
    return active ? activeNow : currentCampaign;
  }

  String _formatWhen(DateTime started) {
    final local = started.toLocal();
    final h = local.hour % 12 == 0 ? 12 : local.hour % 12;
    final ampm = local.hour >= 12 ? 'PM' : 'AM';
    return '${local.month}/${local.day}/${local.year} $h:${local.minute.toString().padLeft(2, '0')} $ampm';
  }

  /// Swahili: one line only — "Kampeni ya sasa" or "Kampeni ya sasa · {date}".
  String campaignHeaderLine({required bool active, DateTime? started}) {
    if (!isSwahili) {
      if (started == null) return campaignStatusLabel(active: active);
      return '${campaignStatusLabel(active: active)}\n${formatCampaignStarted(started)}';
    }
    if (started == null) return 'Kampeni ya sasa';
    return 'Kampeni ya sasa · ${_formatWhen(started)}';
  }

  String footer(String state) =>
      isSwahili ? 'Usajili wa Raia wa NGMY · $state · NGMY' : 'NGMY Civic Registry · $state · NGMY';

  String formatCampaignStarted(DateTime? started) {
    if (started == null) return campaignStartUnknown;
    return '$campaignStartedPrefix ${_formatWhen(started)}';
  }

  String emptyContributed() =>
      isSwahili ? 'Hakuna michango kwa kampeni hii bado.' : 'No contributions yet for this campaign.';
  String emptyPending() =>
      isSwahili ? 'Wote walio kwenye orodha wamechangia.' : 'Everyone in scope has contributed.';
  String emptyMembers() => isSwahili ? 'Hakuna wanachama.' : 'No members in scope.';
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
    required this.campaignStartedAt,
    required this.rows,
  });

  final String state;
  final String campaignTitle;
  final String scopeLabel;
  final String generatedAt;
  final bool campaignActive;
  final DateTime? campaignStartedAt;
  final List<NgmyCivicContributionReportRow> rows;

  List<NgmyCivicContributionReportRow> get contributed =>
      rows.where((r) => r.contributed).toList();

  List<NgmyCivicContributionReportRow> get notContributed =>
      rows.where((r) => !r.contributed).toList();

  String get motto => "EMO 'YA M'MBONDO · $state";
}

String _escapeHtml(String s) => s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

String _tableRows(
  List<NgmyCivicContributionReportRow> rows,
  NgmyCivicContributionReportStrings t, {
  bool showStatus = false,
  String emptyLabel = 'No members listed.',
}) {
  if (rows.isEmpty) {
    return '<tr><td colspan="6" class="empty">$emptyLabel</td></tr>';
  }
  return rows.map((r) {
    final status = r.contributed
        ? '<span class="badge yes">${_escapeHtml(t.yes)}</span>'
        : '<span class="badge no">${_escapeHtml(t.no)}</span>';
    final amount = r.contributed && r.amount > 0 ? '\$${r.amount.toStringAsFixed(2)}' : '—';
    return '''
<tr>
  <td class="name">${_escapeHtml(r.name.isEmpty ? '—' : r.name)}</td>
  <td class="rid">${_escapeHtml(r.registryId.isEmpty ? '—' : r.registryId)}</td>
  <td>${_escapeHtml(r.city.isEmpty ? '—' : r.city)}</td>
  <td>${_escapeHtml(r.room.isEmpty ? '—' : r.room)}</td>
  <td class="phone">${_escapeHtml(r.phone.isEmpty ? '—' : r.phone)}</td>
  ${showStatus ? '<td class="status">$status</td>' : '<td class="amount">$amount</td>'}
</tr>''';
  }).join('\n');
}

String _bodyTables(
  NgmyCivicContributionReportData data,
  NgmyCivicContributionReportView view,
  NgmyCivicContributionReportStrings t,
) {
  final contributed = data.contributed;
  final pending = data.notContributed;

  switch (view) {
    case NgmyCivicContributionReportView.split:
      return '''
<div class="panel-grid">
  <div class="panel">
    <div class="panel-title yes">${_escapeHtml(t.contributed)} · ${contributed.length}</div>
    <table>
      <thead><tr><th>Name</th><th>ID</th><th>City</th><th>Room</th><th>Phone</th><th>Amt</th></tr></thead>
      <tbody>${_tableRows(contributed, t, emptyLabel: t.emptyContributed())}</tbody>
    </table>
  </div>
  <div class="panel">
    <div class="panel-title no">${_escapeHtml(t.notYetContributed)} · ${pending.length}</div>
    <table>
      <thead><tr><th>Name</th><th>ID</th><th>City</th><th>Room</th><th>Phone</th><th>Amt</th></tr></thead>
      <tbody>${_tableRows(pending, t, emptyLabel: t.emptyPending())}</tbody>
    </table>
  </div>
</div>''';
    case NgmyCivicContributionReportView.contributedOnly:
      return '''
<div class="panel solo">
  <div class="panel-title yes">${_escapeHtml(t.contributed)} · ${contributed.length}</div>
  <table>
    <thead><tr><th>Name</th><th>ID</th><th>City</th><th>Room</th><th>Phone</th><th>Amt</th></tr></thead>
    <tbody>${_tableRows(contributed, t, emptyLabel: t.emptyContributed())}</tbody>
  </table>
</div>''';
    case NgmyCivicContributionReportView.allCombined:
      return '''
<div class="panel solo">
  <div class="panel-title neutral">${_escapeHtml(t.contributed)} / ${_escapeHtml(t.notYetShort)} · ${data.rows.length}</div>
  <table>
    <thead><tr><th>Name</th><th>ID</th><th>City</th><th>Room</th><th>Phone</th><th>Status</th></tr></thead>
    <tbody>${_tableRows(data.rows, t, showStatus: true, emptyLabel: t.emptyMembers())}</tbody>
  </table>
</div>''';
  }
}

String ngmyBuildCivicContributionReportHtml(
  NgmyCivicContributionReportData data, {
  NgmyCivicContributionReportView view = NgmyCivicContributionReportView.split,
  NgmyCivicContributionReportLang lang = NgmyCivicContributionReportLang.english,
}) {
  final t = NgmyCivicContributionReportStrings(lang);
  final contributed = data.contributed.length;
  final pending = data.notContributed.length;
  final campaignHeader = t.campaignHeaderLine(active: data.campaignActive, started: data.campaignStartedAt);
  final campaignHeaderHtml = campaignHeader.split('\n').map(_escapeHtml).join('<br>');

  return '''
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NGMY — ${_escapeHtml(data.state)}</title>
  <style>
    @page { size: letter; margin: 10mm; }
    @media print {
      body { background: #fff; padding: 0; }
      .document { box-shadow: none; border: none; }
    }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background: #fff; color: #111; font-family: Georgia, "Times New Roman", serif; }
    .document { max-width: 900px; margin: 0 auto; background: #fff; position: relative; padding: 0 2px 10px; }
    .ngmy-mark {
      position: absolute; inset: 0; pointer-events: none;
      display: flex; align-items: center; justify-content: center;
      font-family: system-ui, Arial, sans-serif;
      font-size: 96px; font-weight: 900; letter-spacing: 0.28em;
      color: rgba(15, 23, 42, 0.035); transform: rotate(-24deg);
      user-select: none; z-index: 0;
    }
    .doc-inner { position: relative; z-index: 1; }
    .masthead {
      display: grid; grid-template-columns: minmax(88px, 1fr) auto minmax(88px, 1fr);
      align-items: end; gap: 8px; padding-bottom: 8px; margin-bottom: 8px;
      border-bottom: 1.5px solid #111;
    }
    .stamp { font-family: system-ui, Arial, sans-serif; font-size: 11px; line-height: 1.3; color: #444; }
    .stamp .date { font-weight: 800; color: #111; font-size: 12px; }
    .header { text-align: center; }
    .header h1 {
      margin: 0; font-size: 15px; font-weight: 800; letter-spacing: 0.04em;
      line-height: 1.25; text-decoration: underline; text-underline-offset: 4px;
    }
    .header .sub { margin: 3px 0 0; font-family: system-ui, Arial, sans-serif; font-size: 10px; color: #555; line-height: 1.35; }
    .counts {
      justify-self: end; text-align: right; font-family: system-ui, Arial, sans-serif;
      font-size: 10px; color: #444; line-height: 1.45;
    }
    .counts b { color: #111; font-size: 11px; }
    .content { padding-top: 4px; }
    .panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    @media (max-width: 760px) { .panel-grid { grid-template-columns: 1fr; } }
    .panel { border: 1px solid #ccc; overflow: hidden; }
    .panel-title {
      padding: 5px 8px; font-family: system-ui, Arial, sans-serif;
      font-size: 9px; font-weight: 800; letter-spacing: 0.06em;
      border-bottom: 1px solid #ddd;
    }
    .panel-title.yes { background: #f3faf6; color: #166534; }
    .panel-title.no { background: #fef7f7; color: #991b1b; }
    .panel-title.neutral { background: #f8fafc; color: #334155; }
    table { width: 100%; border-collapse: collapse; font-family: system-ui, Arial, sans-serif; }
    th, td { border-bottom: 1px solid #e5e7eb; padding: 3px 5px; font-size: 9.5px; line-height: 1.25; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; font-size: 8.5px; text-transform: uppercase; letter-spacing: 0.04em; color: #555; }
    td.name { font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 120px; }
    td.rid, td.phone { font-variant-numeric: tabular-nums; white-space: nowrap; font-size: 9px; }
    td.amount { font-weight: 700; color: #166534; }
    .badge { display: inline-block; padding: 1px 5px; border-radius: 999px; font-size: 8px; font-weight: 800; }
    .badge.yes { background: #dcfce7; color: #166534; }
    .badge.no { background: #fee2e2; color: #991b1b; }
    .empty { color: #777; font-style: italic; text-align: center; }
    .footer { margin-top: 10px; padding-top: 8px; border-top: 1px solid #ddd; text-align: center; }
    .motto { font-size: 12px; font-weight: 800; letter-spacing: 0.06em; color: #111; }
    .footer-note { margin-top: 5px; font-family: system-ui, Arial, sans-serif; font-size: 8px; color: #888; letter-spacing: 0.04em; }
  </style>
</head>
<body>
  <div class="document">
    <div class="ngmy-mark">NGMY</div>
    <div class="doc-inner">
      <div class="masthead">
        <div class="stamp">
          <div class="date">${_escapeHtml(data.generatedAt)}</div>
          <div>$campaignHeaderHtml</div>
        </div>
        <div class="header">
          <h1>${_escapeHtml(data.motto)}</h1>
          <p class="sub">${_escapeHtml(data.campaignTitle)} · ${_escapeHtml(data.scopeLabel)}</p>
        </div>
        <div class="counts">
          <div>${_escapeHtml(t.total)} <b>${data.rows.length}</b></div>
          <div>${_escapeHtml(t.contributed)} <b>$contributed</b></div>
          <div>${_escapeHtml(t.notYetShort)} <b>$pending</b></div>
        </div>
      </div>
      <div class="content">${_bodyTables(data, view, t)}</div>
      <footer class="footer">
        <div class="motto">${_escapeHtml(data.motto)}</div>
        <div class="footer-note">${_escapeHtml(t.footer(data.state))}</div>
      </footer>
    </div>
  </div>
</body>
</html>''';
}

class _NgmyFlagToggle extends StatelessWidget {
  const _NgmyFlagToggle({
    required this.selected,
    required this.onTap,
    required this.child,
  });

  final bool selected;
  final VoidCallback onTap;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        width: 34,
        height: 24,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(6),
          border: Border.all(
            color: selected ? const Color(0xFF2563EB) : const Color(0xFFCBD5E1),
            width: selected ? 2 : 1,
          ),
          boxShadow: selected
              ? [BoxShadow(color: const Color(0xFF2563EB).withValues(alpha: 0.25), blurRadius: 6, offset: const Offset(0, 2))]
              : null,
        ),
        clipBehavior: Clip.antiAlias,
        child: child,
      ),
    );
  }
}

class _UsFlag extends StatelessWidget {
  const _UsFlag();

  @override
  Widget build(BuildContext context) {
    return CustomPaint(painter: _UsFlagPainter(), size: const Size(34, 24));
  }
}

class _UsFlagPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    const stripes = 7;
    final stripeH = size.height / stripes;
    for (var i = 0; i < stripes; i++) {
      canvas.drawRect(
        Rect.fromLTWH(0, i * stripeH, size.width, stripeH),
        Paint()..color = i.isEven ? const Color(0xFFB22234) : Colors.white,
      );
    }
    canvas.drawRect(
      Rect.fromLTWH(0, 0, size.width * 0.42, size.height * 0.54),
      Paint()..color = const Color(0xFF3C3B6E),
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _TzFlag extends StatelessWidget {
  const _TzFlag();

  @override
  Widget build(BuildContext context) {
    return CustomPaint(painter: _TzFlagPainter(), size: const Size(34, 24));
  }
}

class _TzFlagPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF1EB53A));
    final path = Path()
      ..moveTo(0, size.height * 0.72)
      ..lineTo(size.width, size.height * 0.18)
      ..lineTo(size.width, size.height * 0.38)
      ..lineTo(0, size.height * 0.92)
      ..close();
    canvas.drawPath(path, Paint()..color = const Color(0xFF000000));
    final path2 = Path()
      ..moveTo(0, size.height * 0.78)
      ..lineTo(size.width, size.height * 0.24)
      ..lineTo(size.width, size.height * 0.32)
      ..lineTo(0, size.height * 0.86)
      ..close();
    canvas.drawPath(path2, Paint()..color = const Color(0xFFFCD116));
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class NgmyCivicContributionReportPreview extends StatelessWidget {
  const NgmyCivicContributionReportPreview({
    super.key,
    required this.data,
    required this.view,
    required this.lang,
    this.isDark = false,
  });

  final NgmyCivicContributionReportData data;
  final NgmyCivicContributionReportView view;
  final NgmyCivicContributionReportLang lang;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final t = NgmyCivicContributionReportStrings(lang);
    final contributed = data.contributed;
    final pending = data.notContributed;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white54 : const Color(0xFF64748B);
    final border = isDark ? const Color(0xFF334155) : const Color(0xFFD1D5DB);

    return Container(
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: border),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 10),
            child: Column(
              children: [
                Text(
                  data.motto,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 13,
                    letterSpacing: 0.4,
                    color: ink,
                    decoration: TextDecoration.underline,
                    decorationThickness: 1.2,
                  ),
                ),
                const SizedBox(height: 4),
                Text('${data.campaignTitle} · ${data.scopeLabel}', textAlign: TextAlign.center, style: TextStyle(fontSize: 11, color: muted)),
                const SizedBox(height: 6),
                Text(
                  t.campaignHeaderLine(active: data.campaignActive, started: data.campaignStartedAt),
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 10, color: muted),
                ),
                const SizedBox(height: 8),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _countPill('${t.total} ${data.rows.length}', ink, muted),
                    const SizedBox(width: 6),
                    _countPill('${t.contributed} ${contributed.length}', const Color(0xFF166534), muted),
                    const SizedBox(width: 6),
                    _countPill('${t.notYetShort} ${pending.length}', const Color(0xFF991B1B), muted),
                  ],
                ),
              ],
            ),
          ),
          Divider(height: 1, color: border),
          Padding(
            padding: const EdgeInsets.all(12),
            child: switch (view) {
              NgmyCivicContributionReportView.split => Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(child: _miniTable(t.contributed, contributed, true, t, ink, muted, border)),
                    const SizedBox(width: 8),
                    Expanded(child: _miniTable(t.notYetContributed, pending, false, t, ink, muted, border)),
                  ],
                ),
              NgmyCivicContributionReportView.contributedOnly =>
                _miniTable(t.contributed, contributed, true, t, ink, muted, border),
              NgmyCivicContributionReportView.allCombined =>
                _miniTable('${t.contributed} / ${t.notYetShort}', data.rows, null, t, ink, muted, border),
            },
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
            child: Text(
              t.footer(data.state),
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: muted, letterSpacing: 0.3),
            ),
          ),
        ],
      ),
    );
  }

  Widget _countPill(String label, Color fg, Color muted) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        border: Border.all(color: muted.withValues(alpha: 0.35)),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(label, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: fg)),
    );
  }

  Widget _miniTable(
    String title,
    List<NgmyCivicContributionReportRow> rows,
    bool? contributedOnly,
    NgmyCivicContributionReportStrings t,
    Color ink,
    Color muted,
    Color border,
  ) {
    return Container(
      decoration: BoxDecoration(border: Border.all(color: border), borderRadius: BorderRadius.circular(8)),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            color: isDark ? const Color(0xFF1E293B) : const Color(0xFFF8FAFC),
            child: Text('$title · ${rows.length}', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: ink)),
          ),
          if (rows.isEmpty)
            Padding(
              padding: const EdgeInsets.all(10),
              child: Text(
                contributedOnly == true ? t.emptyContributed() : contributedOnly == false ? t.emptyPending() : t.emptyMembers(),
                style: TextStyle(color: muted, fontStyle: FontStyle.italic, fontSize: 11),
              ),
            )
          else
            ...rows.take(10).map(
                  (r) => Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
                    child: Row(
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(r.name.isEmpty ? '—' : r.name, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 11, color: ink)),
                              Text(r.registryId.isEmpty ? r.phone : r.registryId, style: TextStyle(fontSize: 9, color: muted)),
                            ],
                          ),
                        ),
                        if (contributedOnly == null)
                          Text(
                            r.contributed ? t.yes : t.no,
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.w800,
                              color: r.contributed ? const Color(0xFF166534) : const Color(0xFF991B1B),
                            ),
                          ),
                      ],
                    ),
                  ),
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
    builder: (ctx) => _NgmyCivicContributionReportSheetHost(data: data, isDark: isDark),
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
  NgmyCivicContributionReportLang _lang = NgmyCivicContributionReportLang.english;

  Future<void> _print() async {
    final html = ngmyBuildCivicContributionReportHtml(widget.data, view: _view, lang: _lang);
    await ngmyPrintCivicMemberReport(
      htmlContent: html,
      plainText: _plainText(widget.data, _view),
      fileName: 'ngmy-contribution-${widget.data.state.replaceAll(RegExp(r'\s+'), '_')}',
    );
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Print ready — turn off browser headers for a clean page.'), backgroundColor: Color(0xFF059669)),
      );
    }
  }

  Future<void> _download() async {
    final html = ngmyBuildCivicContributionReportHtml(widget.data, view: _view, lang: _lang);
    await ngmyDownloadCivicMemberReport(
      htmlContent: html,
      plainText: _plainText(widget.data, _view),
      fileName: 'ngmy-contribution-${widget.data.state.replaceAll(RegExp(r'\s+'), '_')}',
    );
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Report saved — open the file to view or share.')),
      );
    }
  }

  String _plainText(NgmyCivicContributionReportData data, NgmyCivicContributionReportView view) {
    final t = NgmyCivicContributionReportStrings(_lang);
    final buf = StringBuffer()
      ..writeln('NGMY — ${data.state}')
      ..writeln(data.campaignTitle)
      ..writeln(t.formatCampaignStarted(data.campaignStartedAt))
      ..writeln('Generated: ${data.generatedAt}')
      ..writeln(data.motto)
      ..writeln(t.footer(data.state))
      ..writeln('');
    final rows = switch (view) {
      NgmyCivicContributionReportView.contributedOnly => data.contributed,
      NgmyCivicContributionReportView.allCombined => data.rows,
      NgmyCivicContributionReportView.split => data.rows,
    };
    for (final r in rows) {
      buf.writeln('${r.contributed ? t.yes : t.no}  ${r.name}  ${r.registryId}');
    }
    return buf.toString();
  }

  Widget _viewChip(String label, NgmyCivicContributionReportView value) {
    final on = _view == value;
    final ink = widget.isDark ? Colors.white : const Color(0xFF0F172A);
    return Expanded(
      child: GestureDetector(
        onTap: () => setState(() => _view = value),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          padding: const EdgeInsets.symmetric(vertical: 9),
          decoration: BoxDecoration(
            color: on
                ? (widget.isDark ? const Color(0xFF2563EB) : const Color(0xFF0F172A))
                : (widget.isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9)),
            borderRadius: BorderRadius.circular(10),
            border: Border.all(color: on ? Colors.transparent : (widget.isDark ? const Color(0xFF334155) : const Color(0xFFE2E8F0))),
          ),
          child: Text(
            label,
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: on ? Colors.white : ink.withValues(alpha: 0.75)),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final ink = widget.isDark ? Colors.white : const Color(0xFF0F172A);
    final surface = widget.isDark ? const Color(0xFF0F172A) : Colors.white;
    final t = NgmyCivicContributionReportStrings(_lang);

    return DraggableScrollableSheet(
      initialChildSize: 0.9,
      minChildSize: 0.5,
      maxChildSize: 0.96,
      builder: (context, scrollController) {
        return Container(
          decoration: BoxDecoration(
            color: surface,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
          ),
          child: Column(
            children: [
              Container(
                width: 36,
                height: 4,
                margin: const EdgeInsets.only(top: 10, bottom: 6),
                decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(99)),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 8, 0),
                child: Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Contribution Report', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: ink)),
                          Text(
                            '${widget.data.state} · ${t.campaignStatusLabel(active: widget.data.campaignActive)}',
                            style: TextStyle(fontSize: 12, color: widget.isDark ? Colors.white54 : Colors.black54),
                          ),
                        ],
                      ),
                    ),
                    _NgmyFlagToggle(
                      selected: _lang == NgmyCivicContributionReportLang.english,
                      onTap: () => setState(() => _lang = NgmyCivicContributionReportLang.english),
                      child: const _UsFlag(),
                    ),
                    const SizedBox(width: 6),
                    _NgmyFlagToggle(
                      selected: _lang == NgmyCivicContributionReportLang.swahili,
                      onTap: () => setState(() => _lang = NgmyCivicContributionReportLang.swahili),
                      child: const _TzFlag(),
                    ),
                    const SizedBox(width: 4),
                    IconButton(
                      visualDensity: VisualDensity.compact,
                      onPressed: () => Navigator.pop(context),
                      icon: Icon(Icons.close_rounded, color: ink.withValues(alpha: 0.7)),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 10, 16, 0),
                child: Row(
                  children: [
                    _viewChip('Both sides', NgmyCivicContributionReportView.split),
                    const SizedBox(width: 6),
                    _viewChip(t.contributed, NgmyCivicContributionReportView.contributedOnly),
                    const SizedBox(width: 6),
                    _viewChip('All', NgmyCivicContributionReportView.allCombined),
                  ],
                ),
              ),
              const SizedBox(height: 10),
              Expanded(
                child: SingleChildScrollView(
                  controller: scrollController,
                  padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
                  child: NgmyCivicContributionReportPreview(
                    data: widget.data,
                    view: _view,
                    lang: _lang,
                    isDark: widget.isDark,
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
                        child: TextButton(
                          onPressed: _download,
                          style: TextButton.styleFrom(
                            foregroundColor: ink,
                            padding: const EdgeInsets.symmetric(vertical: 13),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                            backgroundColor: widget.isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9),
                          ),
                          child: const Text('Save file', style: TextStyle(fontWeight: FontWeight.w800)),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: TextButton(
                          onPressed: _print,
                          style: TextButton.styleFrom(
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(vertical: 13),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                            backgroundColor: const Color(0xFF0F172A),
                          ),
                          child: const Text('Print', style: TextStyle(fontWeight: FontWeight.w800)),
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
