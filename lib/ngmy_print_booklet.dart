import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/services.dart' show rootBundle;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

/// Printable fold-and-staple books.
///
/// Every sheet of normal paper is printed sideways with two book pages on each side and a
/// thin dashed line down the middle. Print both sides (flip on the short edge), put the
/// sheets inside each other, fold along the line and staple on it: the pages come out in
/// reading order. Pages run on to as many sheets as the book needs.

enum NgmyBookPaper { letter, a4 }

String ngmyBookPaperLabel(NgmyBookPaper p) => p == NgmyBookPaper.letter ? 'Letter (8.5 × 11 in)' : 'A4';

/// `data:image/...;base64,...` → bytes (null when it isn't one).
Uint8List? ngmyDataUriBytes(String? uri) {
  if (uri == null || uri.isEmpty) return null;
  final comma = uri.indexOf(',');
  if (!uri.startsWith('data:') || comma < 0) return null;
  try {
    return base64Decode(uri.substring(comma + 1));
  } catch (_) {
    return null;
  }
}

class NgmyBookChapter {
  const NgmyBookChapter({required this.title, required this.body, this.picture = '', this.imageQuery = ''});
  final String title;
  final String body;

  /// Optional picture for this page (data URI), printed under the title.
  final String picture;

  /// What the AI wanted pictured (used to fetch [picture]).
  final String imageQuery;

  NgmyBookChapter copyWith({String? title, String? body, String? picture}) =>
      NgmyBookChapter(title: title ?? this.title, body: body ?? this.body, picture: picture ?? this.picture, imageQuery: imageQuery);

  Map<String, dynamic> toJson() => {
        'title': title,
        'body': body,
        if (picture.isNotEmpty) 'picture': picture,
        if (imageQuery.isNotEmpty) 'image_query': imageQuery,
      };
  factory NgmyBookChapter.fromJson(Map<String, dynamic> j) => NgmyBookChapter(
        title: (j['title'] ?? '').toString(),
        body: (j['body'] ?? '').toString(),
        picture: (j['picture'] ?? '').toString(),
        imageQuery: (j['image_query'] ?? j['imageQuery'] ?? '').toString(),
      );
}

/// How the front cover looks: one of the templates plus the user's own changes.
class NgmyBookCover {
  const NgmyBookCover({
    this.template = 'royal',
    this.bg1,
    this.bg2,
    this.accent,
    this.ink,
    this.photo = '',
    this.position = '',
    this.font = '',
  });

  final String template;
  final int? bg1;
  final int? bg2;
  final int? accent;
  final int? ink;

  /// The user's own picture (data URI).
  final String photo;

  /// '' = template default, else 'top' | 'middle' | 'bottom'.
  final String position;

  /// '' = template default, else 'classic' | 'modern' | 'display'.
  final String font;

  NgmyBookCover copyWith({
    String? template,
    int? bg1,
    int? bg2,
    int? accent,
    int? ink,
    String? photo,
    String? position,
    String? font,
    bool resetColors = false,
  }) =>
      NgmyBookCover(
        template: template ?? this.template,
        bg1: resetColors ? null : bg1 ?? this.bg1,
        bg2: resetColors ? null : bg2 ?? this.bg2,
        accent: resetColors ? null : accent ?? this.accent,
        ink: resetColors ? null : ink ?? this.ink,
        photo: photo ?? this.photo,
        position: position ?? this.position,
        font: font ?? this.font,
      );

  Map<String, dynamic> toJson() => {
        'template': template,
        if (bg1 != null) 'bg1': bg1,
        if (bg2 != null) 'bg2': bg2,
        if (accent != null) 'accent': accent,
        if (ink != null) 'ink': ink,
        if (photo.isNotEmpty) 'photo': photo,
        if (position.isNotEmpty) 'position': position,
        if (font.isNotEmpty) 'font': font,
      };

  factory NgmyBookCover.fromJson(Map<String, dynamic> j) {
    int? n(Object? v) => v is int ? v : int.tryParse('${v ?? ''}');
    return NgmyBookCover(
      template: (j['template'] ?? 'royal').toString(),
      bg1: n(j['bg1']),
      bg2: n(j['bg2']),
      accent: n(j['accent']),
      ink: n(j['ink']),
      photo: (j['photo'] ?? '').toString(),
      position: (j['position'] ?? '').toString(),
      font: (j['font'] ?? '').toString(),
    );
  }
}

class NgmyBookDoc {
  const NgmyBookDoc({
    required this.title,
    this.subtitle = '',
    this.author = '',
    this.chapters = const [],
    this.cover = const NgmyBookCover(),
  });
  final String title;
  final String subtitle;
  final String author;
  final List<NgmyBookChapter> chapters;
  final NgmyBookCover cover;

  NgmyBookDoc copyWith({String? title, String? subtitle, String? author, List<NgmyBookChapter>? chapters, NgmyBookCover? cover}) =>
      NgmyBookDoc(
        title: title ?? this.title,
        subtitle: subtitle ?? this.subtitle,
        author: author ?? this.author,
        chapters: chapters ?? this.chapters,
        cover: cover ?? this.cover,
      );

  Map<String, dynamic> toJson() => {
        'title': title,
        'subtitle': subtitle,
        'author': author,
        'chapters': chapters.map((c) => c.toJson()).toList(),
        'cover': cover.toJson(),
      };

  factory NgmyBookDoc.fromJson(Map<String, dynamic> j) => NgmyBookDoc(
        title: (j['title'] ?? '').toString(),
        subtitle: (j['subtitle'] ?? '').toString(),
        author: (j['author'] ?? '').toString(),
        chapters: (j['chapters'] is List ? j['chapters'] as List : const [])
            .whereType<Map>()
            .map((e) => NgmyBookChapter.fromJson(Map<String, dynamic>.from(e)))
            .toList(),
        cover: j['cover'] is Map ? NgmyBookCover.fromJson(Map<String, dynamic>.from(j['cover'] as Map)) : const NgmyBookCover(),
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

/// A chapter picture placed on a page.
class NgmyBookPicture {
  const NgmyBookPicture({required this.chapter, required this.y, required this.height});
  final int chapter;
  final double y;
  final double height;
}

enum NgmyBookPageKind { cover, content, notes, back }

class NgmyBookPage {
  const NgmyBookPage({
    this.lines = const [],
    this.pictures = const [],
    this.number,
    this.kind = NgmyBookPageKind.content,
    this.notesFrom,
  });
  final List<NgmyBookLine> lines;
  final List<NgmyBookPicture> pictures;
  final int? number;
  final NgmyBookPageKind kind;

  /// Ruled "Notes" lines fill the rest of the page from here (writing-area y).
  final double? notesFrom;

  bool get isCover => kind == NgmyBookPageKind.cover;
  bool get isBack => kind == NgmyBookPageKind.back;

  /// No written content (a notes page or a filler page).
  bool get isBlank => kind == NgmyBookPageKind.notes || (kind == NgmyBookPageKind.content && lines.isEmpty && pictures.isEmpty);
}

/// One book page = half a sheet of the chosen paper.
({double width, double height}) ngmyBookPageSize(NgmyBookPaper paper) {
  final sheet = paper == NgmyBookPaper.letter ? PdfPageFormat.letter : PdfPageFormat.a4;
  // Sheet is turned sideways: its long side is split in two.
  return (width: sheet.height / 2, height: sheet.width);
}

const double kNgmyBookSideMargin = 36;
const double kNgmyBookTopMargin = 40;
const double kNgmyBookBottomMargin = 50;
const double kNgmyBookBodySize = 11.5;
const double kNgmyBookPictureHeight = 170;

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

/// Flows the book onto pages: the cover, then the pages one after another with no big gaps
/// (a new page only starts a page when the old one is nearly full), pictures under their
/// titles; with [notes] on, ruled "Notes" lines fill leftover space. Extra pages needed to fill the last
/// sheet are blank (Notes pages when [notes] is on), and the back cover is always last.
List<NgmyBookPage> ngmyPaginateBook(
  NgmyBookDoc doc, {
  required double pageWidth,
  required double pageHeight,
  required NgmyTextWidth measure,
  double bodySize = kNgmyBookBodySize,
  bool Function(int chapter)? hasPicture,
  bool backCover = true,
  bool notes = false,
}) {
  final contentW = pageWidth - kNgmyBookSideMargin * 2;
  final contentH = pageHeight - kNgmyBookTopMargin - kNgmyBookBottomMargin;
  final pictureOk = hasPicture ?? (int i) => doc.chapters[i].picture.isNotEmpty;
  final pages = <NgmyBookPage>[const NgmyBookPage(kind: NgmyBookPageKind.cover)];

  var lines = <NgmyBookLine>[];
  var pics = <NgmyBookPicture>[];
  var y = 0.0;
  void newPage() {
    pages.add(NgmyBookPage(lines: lines, pictures: pics, number: pages.length));
    lines = <NgmyBookLine>[];
    pics = <NgmyBookPicture>[];
    y = 0;
  }

  bool pageEmpty() => lines.isEmpty && pics.isEmpty;

  void addLine(String text, double size, bool bold, double lineH) {
    if (y + lineH > contentH && !pageEmpty()) newPage();
    lines.add(NgmyBookLine(text, size: size, bold: bold, y: y));
    y += lineH;
  }

  final bodyLineH = bodySize * 1.5;
  const titleSize = 17.0;
  const titleLineH = titleSize * 1.3;
  for (var ci = 0; ci < doc.chapters.length; ci++) {
    final ch = doc.chapters[ci];
    final t = ch.title.trim();
    final body = ch.body.replaceAll('\r\n', '\n').trimRight();
    final pic = pictureOk(ci);
    if (t.isEmpty && body.trim().isEmpty && !pic) continue;

    // Keep going on the same page when there is real room left; otherwise turn the page.
    if (!pageEmpty()) {
      final need = titleLineH + 10 + (pic ? kNgmyBookPictureHeight + 12 : 0) + bodyLineH * 4;
      if (y + 26 + need > contentH) {
        newPage();
      } else {
        y += 26;
      }
    }
    if (t.isNotEmpty) {
      for (final l in ngmyWrapBookText(t, contentW, titleSize, true, measure)) {
        addLine(l, titleSize, true, titleLineH);
      }
      y += 8;
    }
    if (pic) {
      if (y + kNgmyBookPictureHeight > contentH && !pageEmpty()) newPage();
      pics.add(NgmyBookPicture(chapter: ci, y: y, height: kNgmyBookPictureHeight));
      y += kNgmyBookPictureHeight + 12;
    }
    var gapPending = false;
    for (final para in body.split('\n')) {
      if (para.trim().isEmpty) {
        gapPending = true;
        continue;
      }
      if (gapPending && !pageEmpty()) y += bodyLineH * 0.5;
      gapPending = false;
      for (final l in ngmyWrapBookText(para.trim(), contentW, bodySize, false, measure)) {
        addLine(l, bodySize, false, bodyLineH);
      }
      y += bodyLineH * 0.3;
    }
  }
  if (!pageEmpty()) {
    // Leftover space on the last written page: ruled lines only when notes were asked for.
    final notesFrom = notes && y + 30 < contentH - 90 ? y + 30 : null;
    pages.add(NgmyBookPage(lines: lines, pictures: pics, number: pages.length, notesFrom: notesFrom));
  }

  final reserved = backCover ? 1 : 0;
  while ((pages.length + reserved) % 4 != 0) {
    pages.add(notes
        ? NgmyBookPage(kind: NgmyBookPageKind.notes, number: pages.length, notesFrom: 0)
        : const NgmyBookPage(kind: NgmyBookPageKind.notes));
  }
  if (backCover) pages.add(const NgmyBookPage(kind: NgmyBookPageKind.back));
  return pages;
}

/// Which two pages (0-based, left then right) go on each printed side, in printing order:
/// sheet 1 front, sheet 1 back, sheet 2 front… Put inside each other and folded, they read
/// in order.
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

_BookFonts? _fontsCache;

Future<_BookFonts> _loadBookFonts() async {
  if (_fontsCache != null) return _fontsCache!;
  try {
    final r = await rootBundle.load('assets/fonts/Roboto-Regular.ttf');
    final b = await rootBundle.load('assets/fonts/Roboto-Bold.ttf');
    final scratch = PdfDocument();
    final mr = PdfTtfFont(scratch, r);
    final mb = PdfTtfFont(scratch, b);
    return _fontsCache = _BookFonts(pw.Font.ttf(r), pw.Font.ttf(b),
        (t, size, bold) => (bold ? mb : mr).stringMetrics(t).advanceWidth * size);
  } catch (_) {
    final scratch = PdfDocument();
    final mr = PdfFont.helvetica(scratch);
    final mb = PdfFont.helveticaBold(scratch);
    return _BookFonts(pw.Font.helvetica(), pw.Font.helveticaBold(),
        (t, size, bold) => (bold ? mb : mr).stringMetrics(t).advanceWidth * size);
  }
}

/// Chapter pictures the PDF can use (JPEG / PNG), by chapter index.
Map<int, pw.MemoryImage> _chapterImages(NgmyBookDoc doc) {
  final out = <int, pw.MemoryImage>{};
  for (var i = 0; i < doc.chapters.length; i++) {
    final bytes = ngmyDataUriBytes(doc.chapters[i].picture);
    if (bytes == null) continue;
    try {
      out[i] = pw.MemoryImage(bytes);
    } catch (_) {}
  }
  return out;
}

/// Lays the book out. When the last sheet would end with blank pages, it quietly tries a
/// slightly smaller or larger text size (11-12.5 pt) that fills the sheets better, so the
/// book doesn't end in empty paper.
List<NgmyBookPage> _layout(NgmyBookDoc doc, NgmyBookPaper paper, _BookFonts fonts, Map<int, pw.MemoryImage> images, {bool notes = false}) {
  final size = ngmyBookPageSize(paper);
  List<NgmyBookPage> run(double body) => ngmyPaginateBook(doc,
      pageWidth: size.width,
      pageHeight: size.height,
      measure: fonts.measure,
      hasPicture: images.containsKey,
      bodySize: body,
      notes: notes);
  int blanks(List<NgmyBookPage> p) => p.where((x) => x.kind == NgmyBookPageKind.notes).length;
  var best = run(kNgmyBookBodySize);
  if (notes || blanks(best) == 0) return best;
  // Long books: one extra blank page or two is nothing; skip the extra work.
  final words = doc.chapters.fold<int>(0, (n, c) => n + c.body.length ~/ 6);
  if (words > 40000) return best;
  for (final body in const [12.0, 11.0, 12.5]) {
    final p = run(body);
    if (blanks(p) < blanks(best)) best = p;
    if (blanks(best) == 0) break;
  }
  return best;
}

/// How many pages and sheets a book takes, for the print screen.
/// [filled] = pages up to the last written one (the rest are Notes pages and the back cover).
Future<({int pages, int sheets, int filled})> ngmyBookletCount(NgmyBookDoc doc, NgmyBookPaper paper, {bool notes = false}) async {
  final fonts = await _loadBookFonts();
  final pages = _layout(doc, paper, fonts, _chapterImages(doc), notes: notes);
  var filled = pages.length;
  while (filled > 1 && (pages[filled - 1].isBlank || pages[filled - 1].isBack)) {
    filled--;
  }
  return (pages: pages.length, sheets: pages.length ~/ 4, filled: filled);
}

/// The PDF to print. [booklet] = sideways sheets, two pages per side with the fold line;
/// otherwise one book page per PDF page in reading order (for reading on screen).
/// [coverPng] = the designed front cover, drawn to fill the cover page; [backColor] = the
/// back cover's colour.
Future<Uint8List> ngmyBuildBookletPdf(
  NgmyBookDoc doc, {
  NgmyBookPaper paper = NgmyBookPaper.letter,
  bool booklet = true,
  Uint8List? coverPng,
  int? backColor,
  int? accentColor,
  bool notes = false,
}) async {
  final fonts = await _loadBookFonts();
  final size = ngmyBookPageSize(paper);
  final images = _chapterImages(doc);
  final pages = _layout(doc, paper, fonts, images, notes: notes);
  final ink = PdfColor.fromInt(0xFF1F2937);
  final soft = PdfColor.fromInt(0xFF6B7280);
  final rule = PdfColor.fromInt(0xFFD7DCE3);
  final accent = PdfColor.fromInt(accentColor ?? 0xFF8B4513);
  final contentW = size.width - kNgmyBookSideMargin * 2;
  final contentH = size.height - kNgmyBookTopMargin - kNgmyBookBottomMargin;
  pw.MemoryImage? cover;
  if (coverPng != null && coverPng.isNotEmpty) {
    try {
      cover = pw.MemoryImage(coverPng);
    } catch (_) {}
  }

  pw.Widget ruled(double from, {bool heading = false}) {
    final top = kNgmyBookTopMargin + from;
    final widgets = <pw.Widget>[];
    var y = top + (heading ? 34 : 0);
    if (heading) {
      widgets.add(pw.Positioned(
        left: kNgmyBookSideMargin,
        top: top,
        child: pw.Text('Notes', style: pw.TextStyle(font: fonts.bold, fontSize: 15, color: accent)),
      ));
    }
    while (y < kNgmyBookTopMargin + contentH - 4) {
      widgets.add(pw.Positioned(
        left: kNgmyBookSideMargin,
        top: y,
        child: pw.Container(width: contentW, height: 0.6, color: rule),
      ));
      y += 22;
    }
    return pw.Stack(children: widgets);
  }

  pw.Widget half(NgmyBookPage page) {
    if (page.isCover) {
      return pw.SizedBox(
        width: size.width,
        height: size.height,
        child: cover != null
            ? pw.Image(cover, fit: pw.BoxFit.cover, width: size.width, height: size.height)
            : pw.Center(
                child: pw.Padding(
                  padding: const pw.EdgeInsets.all(kNgmyBookSideMargin),
                  child: pw.Text(doc.title.trim().isEmpty ? 'Untitled Book' : doc.title.trim(),
                      textAlign: pw.TextAlign.center, style: pw.TextStyle(font: fonts.bold, fontSize: 26, color: ink)),
                ),
              ),
      );
    }
    if (page.isBack) {
      final bg = PdfColor.fromInt(backColor ?? 0xFF2B1D14);
      final light = (backColor ?? 0xFF2B1D14) & 0xFFFFFF;
      final r = (light >> 16) & 0xFF, g = (light >> 8) & 0xFF, b = light & 0xFF;
      final dark = (r * 299 + g * 587 + b * 114) / 1000 < 150;
      final text = dark ? PdfColors.white : ink;
      return pw.Container(
        width: size.width,
        height: size.height,
        color: bg,
        child: pw.Column(mainAxisAlignment: pw.MainAxisAlignment.end, children: [
          pw.Container(width: 40, height: 2, color: accent),
          pw.SizedBox(height: 10),
          pw.Text(doc.title.trim(), textAlign: pw.TextAlign.center, style: pw.TextStyle(font: fonts.bold, fontSize: 12, color: text)),
          if (doc.author.trim().isNotEmpty)
            pw.Padding(
              padding: const pw.EdgeInsets.only(top: 4),
              child: pw.Text(doc.author.trim(), style: pw.TextStyle(font: fonts.regular, fontSize: 9, color: text)),
            ),
          pw.SizedBox(height: 60),
        ]),
      );
    }
    return pw.SizedBox(
      width: size.width,
      height: size.height,
      child: pw.Stack(children: [
        if (page.notesFrom != null) ruled(page.notesFrom!, heading: page.kind == NgmyBookPageKind.notes),
        for (final p in page.pictures)
          if (images[p.chapter] != null)
            pw.Positioned(
              left: kNgmyBookSideMargin,
              top: kNgmyBookTopMargin + p.y,
              child: pw.ClipRRect(
                horizontalRadius: 8,
                verticalRadius: 8,
                child: pw.Image(images[p.chapter]!, width: contentW, height: p.height, fit: pw.BoxFit.cover),
              ),
            ),
        for (final l in page.lines)
          pw.Positioned(
            left: kNgmyBookSideMargin +
                (l.center ? ((contentW - fonts.measure(l.text, l.size, l.bold)) / 2).clamp(0.0, contentW) : 0),
            top: kNgmyBookTopMargin + l.y,
            child: pw.Text(
              l.text,
              softWrap: false,
              maxLines: 1,
              style: pw.TextStyle(font: l.bold ? fonts.bold : fonts.regular, fontSize: l.size, color: l.bold ? accent : ink),
            ),
          ),
        if (page.number != null)
          pw.Positioned(
            left: 0,
            right: 0,
            bottom: 24,
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
            left: 8,
            bottom: 8,
            child: pw.Text(
              'Sheet $sheetNo of $sheets · $face${sheetNo == 1 ? ' (outside)' : sheetNo == sheets ? ' (middle)' : ''}',
              style: pw.TextStyle(font: fonts.regular, fontSize: 6, color: PdfColor.fromInt(0xFFB0B5BD)),
            ),
          ),
          // The fold / staple line down the exact middle of the sheet.
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
    for (final p in pages) {
      pdf.addPage(pw.Page(pageFormat: format, build: (_) => half(p)));
    }
  }
  return pdf.save();
}
