import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import 'ngmy_civic_voting.dart';

const _ink = PdfColor.fromInt(0xFF0F172A);
const _muted = PdfColor.fromInt(0xFF64748B);
const _emerald = PdfColor.fromInt(0xFF059669);
const _emeraldDark = PdfColor.fromInt(0xFF047857);
const _gold = PdfColor.fromInt(0xFFD97706);
const _goldSoft = PdfColor.fromInt(0xFFFFF7ED);
const _silver = PdfColor.fromInt(0xFF64748B);
const _bronze = PdfColor.fromInt(0xFFB45309);
const _cream = PdfColor.fromInt(0xFFFFFBF5);
const _line = PdfColor.fromInt(0xFFE2E8F0);

Future<Uint8List> ngmyBuildCivicVotingResultsPdfBytes({
  required NgmyCivicVotingState voting,
}) async {
  final sorted = [...voting.candidates]
    ..sort((a, b) {
      final vb = voting.votesFor(b.id);
      final va = voting.votesFor(a.id);
      if (vb != va) return vb.compareTo(va);
      return a.name.compareTo(b.name);
    });
  final total = sorted.fold<int>(0, (n, c) => n + voting.votesFor(c.id));
  final title = voting.title.trim().isEmpty ? 'CIVIC VOTING' : voting.title.trim().toUpperCase();
  final year = voting.yearLabel.trim();
  final dateLine = voting.dateLabel.trim().isEmpty
      ? (voting.scheduleOpenDate.trim().isEmpty ? '—' : voting.scheduleOpenDate.trim())
      : voting.dateLabel.trim();
  final category = NgmyVotingCategory.labelOf(voting.category).toUpperCase();
  final now = DateTime.now().toLocal();
  final stamp =
      '${now.year.toString().padLeft(4, '0')}-${now.month.toString().padLeft(2, '0')}-${now.day.toString().padLeft(2, '0')}';
  final audience = voting.membersOnly ? 'Civic Registry members' : 'Open community vote';

  final doc = pw.Document(title: '$title · Official Results', creator: 'NGMY');

  doc.addPage(
    pw.MultiPage(
      pageFormat: PdfPageFormat.letter,
      margin: const pw.EdgeInsets.all(28),
      build: (ctx) => [
        pw.Container(
          decoration: pw.BoxDecoration(
            color: _cream,
            border: pw.Border.all(color: _emeraldDark, width: 2.2),
          ),
          padding: const pw.EdgeInsets.all(6),
          child: pw.Container(
            decoration: pw.BoxDecoration(
              border: pw.Border.all(color: _gold, width: 1.4),
            ),
            padding: const pw.EdgeInsets.fromLTRB(22, 20, 22, 18),
            child: pw.Column(
              crossAxisAlignment: pw.CrossAxisAlignment.stretch,
              children: [
                // Competition header banner
                pw.Container(
                  padding: const pw.EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                  decoration: pw.BoxDecoration(
                    gradient: const pw.LinearGradient(
                      colors: [_emeraldDark, _emerald, PdfColor.fromInt(0xFF34D399)],
                    ),
                    borderRadius: pw.BorderRadius.circular(10),
                  ),
                  child: pw.Column(
                    children: [
                      pw.Text(
                        'NGMY OFFICIAL RESULTS',
                        style: pw.TextStyle(
                          color: PdfColors.white,
                          fontSize: 9,
                          fontWeight: pw.FontWeight.bold,
                          letterSpacing: 2.4,
                        ),
                      ),
                      pw.SizedBox(height: 6),
                      pw.Text(
                        title,
                        textAlign: pw.TextAlign.center,
                        style: pw.TextStyle(
                          color: PdfColors.white,
                          fontSize: 22,
                          fontWeight: pw.FontWeight.bold,
                        ),
                      ),
                      pw.SizedBox(height: 4),
                      pw.Text(
                        [
                          if (year.isNotEmpty) year,
                          category,
                          dateLine,
                        ].where((s) => s.trim().isNotEmpty).join('  ·  '),
                        textAlign: pw.TextAlign.center,
                        style: const pw.TextStyle(color: PdfColors.white, fontSize: 10),
                      ),
                    ],
                  ),
                ),
                pw.SizedBox(height: 14),
                pw.Row(
                  mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                  children: [
                    _metaPill('ISSUED $stamp', _emerald),
                    _metaPill(audience.toUpperCase(), _gold),
                  ],
                ),
                if (sorted.isNotEmpty) ...[
                  pw.SizedBox(height: 16),
                  pw.Text(
                    'CHAMPIONS PODIUM',
                    style: pw.TextStyle(
                      color: _gold,
                      fontSize: 10,
                      fontWeight: pw.FontWeight.bold,
                      letterSpacing: 1.6,
                    ),
                  ),
                  pw.SizedBox(height: 8),
                  pw.Row(
                    crossAxisAlignment: pw.CrossAxisAlignment.start,
                    children: [
                      for (var i = 0; i < 3; i++)
                        pw.Expanded(
                          child: pw.Padding(
                            padding: pw.EdgeInsets.only(right: i < 2 ? 8 : 0),
                            child: i < sorted.length
                                ? _podiumCard(
                                    rank: i + 1,
                                    name: sorted[i].name.trim().isEmpty ? '—' : sorted[i].name.trim(),
                                    votes: voting.votesFor(sorted[i].id),
                                  )
                                : pw.SizedBox(),
                          ),
                        ),
                    ],
                  ),
                ],
                pw.SizedBox(height: 16),
                pw.Container(
                  padding: const pw.EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  decoration: pw.BoxDecoration(
                    color: PdfColor.fromInt(0xFFECFDF5),
                    borderRadius: pw.BorderRadius.circular(8),
                    border: pw.Border.all(color: PdfColor.fromInt(0xFFA7F3D0)),
                  ),
                  child: pw.Row(
                    mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                    children: [
                      pw.Text(
                        'FULL STANDINGS',
                        style: pw.TextStyle(color: _emeraldDark, fontSize: 10, fontWeight: pw.FontWeight.bold, letterSpacing: 1.2),
                      ),
                      pw.Text(
                        '$total TOTAL VOTE${total == 1 ? '' : 'S'}',
                        style: pw.TextStyle(color: _emeraldDark, fontSize: 10, fontWeight: pw.FontWeight.bold),
                      ),
                    ],
                  ),
                ),
                pw.SizedBox(height: 10),
                pw.Table(
                  border: pw.TableBorder(
                    horizontalInside: const pw.BorderSide(color: _line, width: 0.6),
                    bottom: const pw.BorderSide(color: _emerald, width: 1.1),
                    top: const pw.BorderSide(color: _emerald, width: 1.1),
                  ),
                  columnWidths: {
                    0: const pw.FlexColumnWidth(0.85),
                    1: const pw.FlexColumnWidth(3.1),
                    2: const pw.FlexColumnWidth(1.05),
                  },
                  children: [
                    pw.TableRow(
                      decoration: const pw.BoxDecoration(color: PdfColor.fromInt(0xFF064E3B)),
                      children: [
                        _headCell('RANK'),
                        _headCell('CANDIDATE'),
                        _headCell('VOTES', center: true),
                      ],
                    ),
                    ...sorted.asMap().entries.map((e) {
                      final rank = e.key + 1;
                      final c = e.value;
                      final votes = voting.votesFor(c.id);
                      final medal = rank <= 3 && votes >= 5;
                      final bg = rank == 1
                          ? _goldSoft
                          : rank == 2
                              ? PdfColor.fromInt(0xFFF8FAFC)
                              : rank == 3
                                  ? PdfColor.fromInt(0xFFFFFBEB)
                                  : (rank.isEven ? PdfColor.fromInt(0xFFF8FAFC) : PdfColors.white);
                      return pw.TableRow(
                        decoration: pw.BoxDecoration(color: bg),
                        children: [
                          _bodyCell(
                            medal ? _medalLabel(rank) : '#$rank',
                            center: true,
                            bold: rank <= 3,
                            color: rank == 1
                                ? _gold
                                : rank == 2
                                    ? _silver
                                    : rank == 3
                                        ? _bronze
                                        : _ink,
                          ),
                          _bodyCell(
                            c.name.trim().isEmpty ? '—' : c.name.trim(),
                            bold: rank <= 3,
                          ),
                          _bodyCell('$votes', center: true, bold: rank <= 3, color: _emeraldDark),
                        ],
                      );
                    }),
                    pw.TableRow(
                      decoration: const pw.BoxDecoration(color: PdfColor.fromInt(0xFFECFDF5)),
                      children: [
                        _bodyCell('', bold: true),
                        _bodyCell('GRAND TOTAL', bold: true, color: _emeraldDark),
                        _bodyCell('$total', center: true, bold: true, color: _emeraldDark),
                      ],
                    ),
                  ],
                ),
                pw.SizedBox(height: 16),
                pw.Container(
                  padding: const pw.EdgeInsets.all(12),
                  decoration: pw.BoxDecoration(
                    border: pw.Border.all(color: _line),
                    borderRadius: pw.BorderRadius.circular(8),
                  ),
                  child: pw.Column(
                    crossAxisAlignment: pw.CrossAxisAlignment.start,
                    children: [
                      pw.Text(
                        'COMPETITION SEAL',
                        style: pw.TextStyle(color: _muted, fontSize: 8, fontWeight: pw.FontWeight.bold, letterSpacing: 1.4),
                      ),
                      pw.SizedBox(height: 4),
                      pw.Text(
                        'Certified results from NGMY Civic Voting. '
                        '${voting.membersOnly ? 'One vote per linked Civic Registry member.' : 'One vote per signed-in community member.'} '
                        'Crowns appear for top 3 with 5+ votes.',
                        style: const pw.TextStyle(color: _muted, fontSize: 9, lineSpacing: 2),
                      ),
                      pw.SizedBox(height: 8),
                      pw.Row(
                        mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                        children: [
                          pw.Text('ngmy.org', style: pw.TextStyle(color: _emerald, fontSize: 9, fontWeight: pw.FontWeight.bold)),
                          pw.Text(
                            'Page ${ctx.pageNumber} of ${ctx.pagesCount}',
                            style: const pw.TextStyle(color: _muted, fontSize: 8),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    ),
  );

  return doc.save();
}

pw.Widget _metaPill(String text, PdfColor color) {
  return pw.Container(
    padding: const pw.EdgeInsets.symmetric(horizontal: 10, vertical: 5),
    decoration: pw.BoxDecoration(
      color: PdfColors.white,
      borderRadius: pw.BorderRadius.circular(99),
      border: pw.Border.all(color: color, width: 1),
    ),
    child: pw.Text(
      text,
      style: pw.TextStyle(color: color, fontSize: 8, fontWeight: pw.FontWeight.bold, letterSpacing: 0.6),
    ),
  );
}

pw.Widget _podiumCard({required int rank, required String name, required int votes}) {
  final color = rank == 1 ? _gold : (rank == 2 ? _silver : _bronze);
  final soft = rank == 1
      ? _goldSoft
      : rank == 2
          ? PdfColor.fromInt(0xFFF1F5F9)
          : PdfColor.fromInt(0xFFFFFBEB);
  return pw.Container(
    padding: const pw.EdgeInsets.fromLTRB(8, 10, 8, 10),
    decoration: pw.BoxDecoration(
      color: soft,
      borderRadius: pw.BorderRadius.circular(10),
      border: pw.Border.all(color: color, width: rank == 1 ? 1.6 : 1),
    ),
    child: pw.Column(
      children: [
        pw.Container(
          width: 28,
          height: 28,
          alignment: pw.Alignment.center,
          decoration: pw.BoxDecoration(color: color, shape: pw.BoxShape.circle),
          child: pw.Text(
            '$rank',
            style: pw.TextStyle(color: PdfColors.white, fontSize: 12, fontWeight: pw.FontWeight.bold),
          ),
        ),
        pw.SizedBox(height: 6),
        pw.Text(
          _medalLabel(rank),
          style: pw.TextStyle(color: color, fontSize: 8, fontWeight: pw.FontWeight.bold, letterSpacing: 0.8),
        ),
        pw.SizedBox(height: 4),
        pw.Text(
          name,
          textAlign: pw.TextAlign.center,
          maxLines: 2,
          style: pw.TextStyle(color: _ink, fontSize: 9, fontWeight: pw.FontWeight.bold),
        ),
        pw.SizedBox(height: 3),
        pw.Text(
          '$votes votes',
          style: pw.TextStyle(color: _emeraldDark, fontSize: 9, fontWeight: pw.FontWeight.bold),
        ),
      ],
    ),
  );
}

String _medalLabel(int rank) {
  switch (rank) {
    case 1:
      return 'GOLD';
    case 2:
      return 'SILVER';
    case 3:
      return 'BRONZE';
    default:
      return '#$rank';
  }
}

pw.Widget _headCell(String text, {bool center = false}) {
  return pw.Padding(
    padding: const pw.EdgeInsets.symmetric(horizontal: 8, vertical: 8),
    child: pw.Text(
      text,
      textAlign: center ? pw.TextAlign.center : pw.TextAlign.left,
      style: pw.TextStyle(color: PdfColors.white, fontSize: 9, fontWeight: pw.FontWeight.bold, letterSpacing: 0.8),
    ),
  );
}

pw.Widget _bodyCell(String text, {bool bold = false, bool center = false, PdfColor? color}) {
  return pw.Padding(
    padding: const pw.EdgeInsets.symmetric(horizontal: 8, vertical: 7),
    child: pw.Text(
      text,
      textAlign: center ? pw.TextAlign.center : pw.TextAlign.left,
      style: pw.TextStyle(
        color: color ?? _ink,
        fontSize: 10,
        fontWeight: bold ? pw.FontWeight.bold : pw.FontWeight.normal,
      ),
    ),
  );
}

String ngmyCivicVotingResultsPaperHtml({
  required NgmyCivicVotingState voting,
}) {
  String esc(String s) => s
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');

  final sorted = [...voting.candidates]
    ..sort((a, b) {
      final vb = voting.votesFor(b.id);
      final va = voting.votesFor(a.id);
      if (vb != va) return vb.compareTo(va);
      return a.name.compareTo(b.name);
    });
  final total = sorted.fold<int>(0, (n, c) => n + voting.votesFor(c.id));
  final title = voting.title.trim().isEmpty ? 'CIVIC VOTING' : voting.title.trim().toUpperCase();
  final year = voting.yearLabel.trim();
  final dateLine = voting.dateLabel.trim().isEmpty ? '—' : voting.dateLabel.trim();
  final category = NgmyVotingCategory.labelOf(voting.category).toUpperCase();
  final now = DateTime.now().toLocal();
  final stamp =
      '${now.year.toString().padLeft(4, '0')}-${now.month.toString().padLeft(2, '0')}-${now.day.toString().padLeft(2, '0')}';
  final audience = voting.membersOnly ? 'Civic Registry members' : 'Open community vote';

  String podiumCard(int i) {
    if (i >= sorted.length) return '<div class="pod empty"></div>';
    final c = sorted[i];
    final votes = voting.votesFor(c.id);
    final rank = i + 1;
    final medal = rank == 1 ? 'gold' : (rank == 2 ? 'silver' : 'bronze');
    final label = rank == 1 ? 'GOLD' : (rank == 2 ? 'SILVER' : 'BRONZE');
    final name = esc(c.name.trim().isEmpty ? '—' : c.name.trim());
    return '''
      <div class="pod $medal">
        <div class="badge">$rank</div>
        <div class="medal">$label</div>
        <div class="name">$name</div>
        <div class="votes">$votes votes</div>
      </div>''';
  }

  final rows = StringBuffer();
  for (var i = 0; i < sorted.length; i++) {
    final c = sorted[i];
    final votes = voting.votesFor(c.id);
    final rank = i + 1;
    final cls = rank == 1
        ? 'r1'
        : rank == 2
            ? 'r2'
            : rank == 3
                ? 'r3'
                : (rank.isEven ? 'even' : '');
    final medal = (rank <= 3 && votes >= 5)
        ? (rank == 1 ? 'GOLD' : (rank == 2 ? 'SILVER' : 'BRONZE'))
        : '#$rank';
    rows.writeln('''
      <tr class="$cls">
        <td class="rank">${esc(medal)}</td>
        <td>${esc(c.name.trim().isEmpty ? '—' : c.name.trim())}</td>
        <td class="num">$votes</td>
      </tr>''');
  }

  return '''
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>NGMY.ORG · Official Voting Results</title>
<style>
  @page { size: letter; margin: 10mm; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0; background: #fff;
    color: #0f172a;
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  }
  .frame {
    border: 2.5px solid #047857;
    padding: 7px;
    background: #fffbf5;
  }
  .inner {
    border: 1.5px solid #d97706;
    padding: 18px 18px 16px;
  }
  .banner {
    background: linear-gradient(135deg, #064e3b 0%, #059669 55%, #34d399 100%);
    color: #fff;
    border-radius: 12px;
    padding: 16px 14px 14px;
    text-align: center;
    box-shadow: 0 10px 24px rgba(4, 120, 87, 0.22);
  }
  .eyebrow {
    font-size: 10px; font-weight: 800; letter-spacing: 2.6px; opacity: 0.92;
  }
  h1 {
    margin: 7px 0 4px; font-size: 26px; font-weight: 900; letter-spacing: 0.4px;
  }
  .banner-sub {
    margin: 0; font-size: 11px; opacity: 0.92; font-weight: 600;
  }
  .meta {
    display: flex; justify-content: space-between; gap: 8px; margin: 12px 0 14px;
  }
  .pill {
    border-radius: 999px; border: 1px solid #059669; color: #047857;
    font-size: 9px; font-weight: 800; letter-spacing: 0.6px;
    padding: 5px 10px; background: #fff;
  }
  .pill.gold { border-color: #d97706; color: #b45309; }
  .section {
    font-size: 10px; font-weight: 900; letter-spacing: 1.6px; color: #d97706; margin: 0 0 8px;
  }
  .pods {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 14px;
  }
  .pod {
    border-radius: 12px; padding: 10px 8px; text-align: center; border: 1px solid #e2e8f0;
    background: #fff;
  }
  .pod.gold { background: #fff7ed; border-color: #d97706; border-width: 1.6px; }
  .pod.silver { background: #f8fafc; border-color: #94a3b8; }
  .pod.bronze { background: #fffbeb; border-color: #b45309; }
  .pod.empty { visibility: hidden; }
  .badge {
    width: 28px; height: 28px; border-radius: 50%; margin: 0 auto 6px;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-weight: 900; font-size: 13px;
  }
  .pod.gold .badge { background: #d97706; }
  .pod.silver .badge { background: #64748b; }
  .pod.bronze .badge { background: #b45309; }
  .medal { font-size: 9px; font-weight: 900; letter-spacing: 1px; margin-bottom: 4px; }
  .pod.gold .medal { color: #d97706; }
  .pod.silver .medal { color: #64748b; }
  .pod.bronze .medal { color: #b45309; }
  .name { font-size: 12px; font-weight: 800; line-height: 1.2; min-height: 28px; }
  .votes { margin-top: 4px; font-size: 11px; font-weight: 800; color: #047857; }
  .standings-bar {
    display: flex; justify-content: space-between; align-items: center;
    background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px;
    padding: 8px 12px; margin-bottom: 10px;
    font-size: 10px; font-weight: 900; color: #047857; letter-spacing: 1px;
  }
  table { width: 100%; border-collapse: collapse; }
  th {
    background: #064e3b; color: #fff; text-align: left; font-size: 10px;
    letter-spacing: 0.8px; padding: 9px 10px; font-weight: 800;
  }
  th.num, td.num, td.rank { text-align: center; }
  td { padding: 8px 10px; font-size: 12px; border-bottom: 1px solid #e2e8f0; }
  tr.r1 { background: #fff7ed; font-weight: 800; }
  tr.r2 { background: #f8fafc; font-weight: 700; }
  tr.r3 { background: #fffbeb; font-weight: 700; }
  tr.even { background: #f8fafc; }
  tr.r1 td.rank { color: #d97706; }
  tr.r2 td.rank { color: #64748b; }
  tr.r3 td.rank { color: #b45309; }
  td.num { color: #047857; font-weight: 800; }
  tfoot td {
    background: #ecfdf5; font-weight: 900; color: #047857; border-top: 1.5px solid #059669;
  }
  .seal {
    margin-top: 14px; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px;
  }
  .seal-title {
    font-size: 9px; font-weight: 900; letter-spacing: 1.4px; color: #64748b; margin-bottom: 4px;
  }
  .seal p { margin: 0; font-size: 10px; color: #64748b; line-height: 1.45; }
  .seal-foot {
    display: flex; justify-content: space-between; margin-top: 8px;
    font-size: 10px; font-weight: 800; color: #059669;
  }
</style>
</head>
<body>
  <div class="frame">
    <div class="inner">
      <div class="banner">
        <div class="eyebrow">NGMY OFFICIAL RESULTS</div>
        <h1>${esc(title)}</h1>
        <p class="banner-sub">${esc([
          if (year.isNotEmpty) year,
          category,
          dateLine,
        ].where((s) => s.trim().isNotEmpty).join('  ·  '))}</p>
      </div>
      <div class="meta">
        <span class="pill">ISSUED ${esc(stamp)}</span>
        <span class="pill gold">${esc(audience.toUpperCase())}</span>
      </div>
      ${sorted.isEmpty ? '' : '''
      <div class="section">CHAMPIONS PODIUM</div>
      <div class="pods">
        ${podiumCard(0)}
        ${podiumCard(1)}
        ${podiumCard(2)}
      </div>'''}
      <div class="standings-bar">
        <span>FULL STANDINGS</span>
        <span>$total TOTAL VOTE${total == 1 ? '' : 'S'}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th class="rank">RANK</th>
            <th>CANDIDATE</th>
            <th class="num">VOTES</th>
          </tr>
        </thead>
        <tbody>
          $rows
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>GRAND TOTAL</td>
            <td class="num">$total</td>
          </tr>
        </tfoot>
      </table>
      <div class="seal">
        <div class="seal-title">COMPETITION SEAL</div>
        <p>Certified results from NGMY Civic Voting. ${voting.membersOnly ? 'One vote per linked Civic Registry member.' : 'One vote per signed-in community member.'} Crowns appear for top 3 with 5+ votes.</p>
        <div class="seal-foot"><span>ngmy.org</span><span>Official paper</span></div>
      </div>
    </div>
  </div>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { try { window.print(); } catch (e) {} }, 180);
    });
  </script>
</body>
</html>''';
}
