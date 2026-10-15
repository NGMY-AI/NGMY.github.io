import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/services.dart' show rootBundle;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

/// Printable fold-and-staple books.
///
/// Every sheet of normal paper is printed sideways with two book pages on each side and a
/// thin dashed line down the middle. Print both sides (flip on the short edge), stack the
/// sheets, fold along the line and staple on it: the pages come out in reading order.
/// Pages run on to as many sheets as the book needs.

enum NgmyBookPaper { letter, a4 }

String ngmyBookPaperLabel(NgmyBookPaper p) => p == NgmyBookPaper.letter ? 'Letter (8.5 × 11 in)' : 'A4';

class NgmyBookChapter {
  const NgmyBookChapter({required this.title, required this.body});
  final String title;
  final String body;

  Map<String, dynamic> toJson() => {'title': title, 'body': body};
  factory NgmyBookChapter.fromJson(Map<String, dynamic> j) =>
      NgmyBookChapter(title: (j['title'] ?? '').toString(), body: (j['body'] ?? '').toString());
}

class NgmyBookDoc {
  const NgmyBookDoc({required this.title, this.subtitle = '', this.author = '', this.chapters = const []});
  final String title;
  final String subtitle;
  final String author;
  final List<NgmyBookChapter> chapters;

  Map<String, dynamic> toJson() => {
        'title': title,
        'subtitle': subtitle,
        'author': author,
        'chapters': chapters.map((c) => c.toJson()).toList(),
      };

  factory NgmyBookDoc.fromJson(Map<String, dynamic> j) => NgmyBookDoc(
        title: (j['title'] ?? '').toString(),
        subtitle: (j['subtitle'] ?? '').toString(),
        author: (j['author'] ?? '').toString(),
        chapters: (j['chapters'] is List ? j['chapters'] as List : const [])
            .whereType<Map>()
            .map((e) => NgmyBookChapter.fromJson(Map<String, dynamic>.from(e)))
            .toList(),
      );

  String toJsonString() => jsonEncode(toJson());
}

/// Width of [text] at font [size] in points.
typedef NgmyTextWidth = double Function(String text, double size, bool bold);

class NgmyBookLine {
  const NgmyBookLine(this.text, {required this.size, required this.y, this.bold = false, this.center = false});
  final String text;
  final double size;
  final bool bold;
  final bool center;

  /// Top of the line, measured from the top of the writing area.
  final double y;
}

class NgmyBookPage {
  const NgmyBookPage({this.lines = const [], this.number, this.isCover = false});
  final List<NgmyBookLine> lines;
  final int? number;
  final bool isCover;
  bool get isBlank => lines.isEmpty;
}

/// One book page = half a sheet of the chosen paper.
({double width, double height}) ngmyBookPageSize(NgmyBookPaper paper) {
  final sheet = paper == NgmyBookPaper.letter ? PdfPageFormat.letter : PdfPageFormat.a4;
  // Sheet is turned sideways: its long side is split in two.
  return (width: sheet.height / 2, height: sheet.width);
}

const double kNgmyBookSideMargin = 40;
const double kNgmyBookTopMargin = 46;
const double kNgmyBookBottomMargin = 56;
const double kNgmyBookBodySize = 11;

/// Breaks one paragraph into lines that fit [maxWidth]; very long words are split.
List<String> ngmyWrapBookText(String paragraph, double maxWidth, double size, bool bold, NgmyTextWidth measure) {
  final words = paragraph.split(RegExp(r'\s+')).where((w) => w.isNotEmpty);
  final lines = <String>[];
  var cur = '';
  for (final w in words) {
    final cand = cur.isEmpty ? w : '$cur $w';
    if (measure(cand, size, bold) <= maxWidth) {
      cur = cand;
      continue;
    }
    if (cur.isNotEmpty) lines.add(cur);
    var rest = w;
    while (rest.length > 1 && measure(rest, size, bold) > maxWidth) {
      var cut = rest.length - 1;
      while (cut > 1 && measure(rest.substring(0, cut), size, bold) > maxWidth) {
        cut--;
      }
      lines.add(rest.substring(0, cut));
      rest = rest.substring(cut);
    }
    cur = rest;
  }
  if (cur.isNotEmpty) lines.add(cur);
  return lines;
}

/// Flows the book onto pages: a cover, then each chapter starting on a fresh page and
/// running on for as many pages as it needs. Blank pages are added at the end so the
/// count fills whole sheets (4 pages per sheet).
List<NgmyBookPage> ngmyPaginateBook(
  NgmyBookDoc doc, {
  required double pageWidth,
  required double pageHeight,
  required NgmyTextWidth measure,
  double bodySize = kNgmyBookBodySize,
}) {
  final contentW = pageWidth - kNgmyBookSideMargin * 2;
  final contentH = pageHeight - kNgmyBookTopMargin - kNgmyBookBottomMargin;
  final pages = <NgmyBookPage>[];

  // Cover.
  final cover = <(String, double, bool)>[];
  final title = doc.title.trim().isEmpty ? 'Untitled Book' : doc.title.trim();
  for (final l in ngmyWrapBookText(title, contentW, 26, true, measure)) {
    cover.add((l, 26, true));
  }
  if (doc.subtitle.trim().isNotEmpty) {
    cover.add(('', 10, false));
    for (final l in ngmyWrapBookText(doc.subtitle.trim(), contentW, 14, false, measure)) {
      cover.add((l, 14, false));
    }
  }
  if (doc.author.trim().isNotEmpty) {
    cover.add(('', 22, false));
    for (final l in ngmyWrapBookText(doc.author.trim(), contentW, 12, false, measure)) {
      cover.add((l, 12, false));
    }
  }
  var coverH = 0.0;
  for (final c in cover) {
    coverH += c.$2 * 1.3;
  }
  var cy = ((contentH - coverH) * 0.4).clamp(0.0, contentH);
  final coverLines = <NgmyBookLine>[];
  for (final c in cover) {
    if (c.$1.isNotEmpty && cy + c.$2 * 1.3 <= contentH) {
      coverLines.add(NgmyBookLine(c.$1, size: c.$2, bold: c.$3, center: true, y: cy));
    }
    cy += c.$2 * 1.3;
  }
  pages.add(NgmyBookPage(lines: coverLines, isCover: true));

  var lines = <NgmyBookLine>[];
  var y = 0.0;
  void newPage() {
    pages.add(NgmyBookPage(lines: lines, number: pages.length));
    lines = <NgmyBookLine>[];
    y = 0;
  }

  void addLine(String text, double size, bool bold, double lineH, {bool center = false}) {
    if (y + lineH > contentH && lines.isNotEmpty) newPage();
    lines.add(NgmyBookLine(text, size: size, bold: bold, center: center, y: y));
    y += lineH;
  }

  final bodyLineH = bodySize * 1.45;
  for (final ch in doc.chapters) {
    final t = ch.title.trim();
    final body = ch.body.replaceAll('\r\n', '\n').trimRight();
    if (t.isEmpty && body.trim().isEmpty) continue;
    if (lines.isNotEmpty) newPage();
    if (t.isNotEmpty) {
      for (final l in ngmyWrapBookText(t, contentW, 17, true, measure)) {
        addLine(l, 17, true, 17 * 1.3);
      }
      y += 10;
    }
    var gapPending = false;
    for (final para in body.split('\n')) {
      if (para.trim().isEmpty) {
        gapPending = true;
        continue;
      }
      if (gapPending && lines.isNotEmpty) y += bodyLineH * 0.6;
      gapPending = false;
      for (final l in ngmyWrapBookText(para.trim(), contentW, bodySize, false, measure)) {
        addLine(l, bodySize, false, bodyLineH);
      }
      y += bodyLineH * 0.35;
    }
  }
  if (lines.isNotEmpty) newPage();

  while (pages.length % 4 != 0) {
    pages.add(const NgmyBookPage());
  }
  return pages;
}

/// Which two pages (0-based, left then right) go on each printed side, in printing order:
/// sheet 1 front, sheet 1 back, sheet 2 front… Stacked and folded, they read in order.
List<(int, int)> ngmyBookletSides(int pageCount) {
  var n = pageCount;
  if (n < 4) n = 4;
  if (n % 4 != 0) n += 4 - n % 4;
  final sides = <(int, int)>[];
  for (var i = 0; i < n ~/ 4; i++) {
    sides.add((n - 1 - 2 * i, 2 * i));
    sides.add((2 * i + 1, n - 2 - 2 * i));
  }
  return sides;
}

class _BookFonts {
  _BookFonts(this.regular, this.bold, this.measure);
  final pw.Font regular;
  final pw.Font bold;
  final NgmyTextWidth measure;
}

Future<_BookFonts> _loadBookFonts() async {
  try {
    final r = await rootBundle.load('assets/fonts/Roboto-Regular.ttf');
    final b = await rootBundle.load('assets/fonts/Roboto-Bold.ttf');
    final scratch = PdfDocument();
    final mr = PdfTtfFont(scratch, r);
    final mb = PdfTtfFont(scratch, b);
    return _BookFonts(pw.Font.ttf(r), pw.Font.ttf(b),
        (t, size, bold) => (bold ? mb : mr).stringMetrics(t).advanceWidth * size);
  } catch (_) {
    final scratch = PdfDocument();
    final mr = PdfFont.helvetica(scratch);
    final mb = PdfFont.helveticaBold(scratch);
    return _BookFonts(pw.Font.helvetica(), pw.Font.helveticaBold(),
        (t, size, bold) => (bold ? mb : mr).stringMetrics(t).advanceWidth * size);
  }
}

/// How many pages and sheets a book takes, for the print screen.
/// [filled] = pages up to the last written one (the rest are blanks that fill the sheet).
Future<({int pages, int sheets, int filled})> ngmyBookletCount(NgmyBookDoc doc, NgmyBookPaper paper) async {
  final fonts = await _loadBookFonts();
  final size = ngmyBookPageSize(paper);
  final pages = ngmyPaginateBook(doc, pageWidth: size.width, pageHeight: size.height, measure: fonts.measure);
  var filled = pages.length;
  while (filled > 1 && pages[filled - 1].isBlank) {
    filled--;
  }
  return (pages: pages.length, sheets: pages.length ~/ 4, filled: filled);
}

/// The PDF to print. [booklet] = sideways sheets, two pages per side with the fold line;
/// otherwise one book page per PDF page in reading order (for reading on screen).
Future<Uint8List> ngmyBuildBookletPdf(NgmyBookDoc doc, {NgmyBookPaper paper = NgmyBookPaper.letter, bool booklet = true}) async {
  final fonts = await _loadBookFonts();
  final size = ngmyBookPageSize(paper);
  final pages = ngmyPaginateBook(doc, pageWidth: size.width, pageHeight: size.height, measure: fonts.measure);
  final ink = PdfColor.fromInt(0xFF1F2937);
  final soft = PdfColor.fromInt(0xFF6B7280);
  final contentW = size.width - kNgmyBookSideMargin * 2;

  pw.Widget half(NgmyBookPage page) {
    return pw.SizedBox(
      width: size.width,
      height: size.height,
      child: pw.Stack(children: [
        for (final l in page.lines)
          pw.Positioned(
            left: kNgmyBookSideMargin +
                (l.center ? ((contentW - fonts.measure(l.text, l.size, l.bold)) / 2).clamp(0.0, contentW) : 0),
            top: kNgmyBookTopMargin + l.y,
            child: pw.Text(
              l.text,
              softWrap: false,
              maxLines: 1,
              style: pw.TextStyle(font: l.bold ? fonts.bold : fonts.regular, fontSize: l.size, color: ink),
            ),
          ),
        if (page.number != null && !page.isBlank)
          pw.Positioned(
            left: 0,
            right: 0,
            bottom: 26,
            child: pw.Center(
              child: pw.Text('${page.number}', style: pw.TextStyle(font: fonts.regular, fontSize: 9, color: soft)),
            ),
          ),
      ]),
    );
  }

  final pdf = pw.Document(title: doc.title, author: doc.author);
  if (booklet) {
    final format = PdfPageFormat(size.width * 2, size.height, marginAll: 0);
    final sides = ngmyBookletSides(pages.length);
    final sheets = sides.length ~/ 2;
    for (var k = 0; k < sides.length; k++) {
      final (left, right) = sides[k];
      final sheetNo = k ~/ 2 + 1;
      final face = k.isEven ? 'front' : 'back';
      pdf.addPage(pw.Page(
        pageFormat: format,
        build: (_) => pw.Stack(children: [
          pw.Row(children: [half(pages[left]), half(pages[right])]),
          // Tiny stacking label: sheet 1 is the outside sheet, the last one is the middle.
          pw.Positioned(
            left: 14,
            bottom: 10,
            child: pw.Text(
              'Sheet $sheetNo of $sheets · $face${sheetNo == 1 ? ' (outside)' : sheetNo == sheets ? ' (middle)' : ''}',
              style: pw.TextStyle(font: fonts.regular, fontSize: 6.5, color: PdfColor.fromInt(0xFFB0B5BD)),
            ),
          ),
          // The fold / staple line down the middle of the sheet.
          pw.Positioned.fill(
            child: pw.CustomPaint(
              painter: (canvas, s) {
                canvas
                  ..setStrokeColor(PdfColor.fromInt(0xFF9CA3AF))
                  ..setLineWidth(0.6)
                  ..setLineDashPattern(const [4, 4])
                  ..moveTo(s.x / 2, 0)
                  ..lineTo(s.x / 2, s.y)
                  ..strokePath();
              },
            ),
          ),
        ]),
      ));
    }
  } else {
    final format = PdfPageFormat(size.width, size.height, marginAll: 0);
    // Reading order: the blank pages that only fill out sheets are left off.
    for (final p in pages.where((p) => p.isCover || !p.isBlank)) {
      pdf.addPage(pw.Page(pageFormat: format, build: (_) => half(p)));
    }
  }
  return pdf.save();
}
