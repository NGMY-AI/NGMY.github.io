import 'dart:convert';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_invoice_signature.dart';
import 'ngmy_slides_download.dart';
import 'ngmy_slides_export.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_pdf_ios.dart';
import 'ngmy_slides_print_stub.dart' if (dart.library.html) 'ngmy_slides_print_web.dart';
import 'ngmy_worksheet_helpers.dart';

/// Pick a PDF and return a data URL for embedding on a slide.
Future<({String dataUrl, String fileName, Uint8List bytes})?> ngmySlidesPickPdf() async {
  final result = await FilePicker.platform.pickFiles(
    type: FileType.custom,
    allowedExtensions: ['pdf'],
    withData: true,
  );
  if (result == null || result.files.isEmpty) return null;
  final file = result.files.first;
  final bytes = file.bytes;
  if (bytes == null || bytes.isEmpty) return null;
  final name = file.name.trim().isEmpty ? 'document.pdf' : file.name.trim();
  return (dataUrl: 'data:application/pdf;base64,${base64Encode(bytes)}', fileName: name, bytes: bytes);
}

/// Best-effort page count from raw PDF bytes (local only — no upload).
int ngmySlidesEstimatePdfPages(Uint8List bytes) {
  try {
    final text = String.fromCharCodes(bytes);
    final countMatch = RegExp(r'/Type\s*/Pages[^>]*?/Count\s+(\d+)', dotAll: true).firstMatch(text);
    if (countMatch != null) {
      final n = int.tryParse(countMatch.group(1)!);
      if (n != null && n > 0) return n.clamp(1, 200);
    }
    final pages = RegExp(r'/Type\s*/Page\b').allMatches(text).length;
    if (pages > 0) return pages.clamp(1, 200);
  } catch (_) {}
  return 1;
}

/// Enhance image clarity — contrast + sharpen for school photos / scans.
Future<String?> ngmySlidesEnhanceImage(String dataUrl) async {
  if (!dataUrl.startsWith('data:image')) return dataUrl;
  // Canvas filters often render black frames on Flutter web/PWA — keep the original photo.
  if (kIsWeb) return dataUrl;
  try {
    final payload = dataUrl.contains(',') ? dataUrl.split(',').last : dataUrl;
    final bytes = base64Decode(payload);
    final codec = await ui.instantiateImageCodec(bytes, targetWidth: 2400);
    final frame = await codec.getNextFrame();
    final src = frame.image;
    final sw = src.width;
    final sh = src.height;
    final recorder = ui.PictureRecorder();
    final canvas = Canvas(recorder);
    final paint = Paint()
      ..colorFilter = const ColorFilter.matrix([
        1.18, -0.05, -0.05, 0, 8,
        -0.05, 1.18, -0.05, 0, 8,
        -0.05, -0.05, 1.18, 0, 8,
        0, 0, 0, 1, 0,
      ]);
    canvas.drawImage(src, Offset.zero, paint);
    src.dispose();
    final picture = recorder.endRecording();
    final enhanced = await picture.toImage(sw, sh);
    picture.dispose();
    final byteData = await enhanced.toByteData(format: ui.ImageByteFormat.png);
    enhanced.dispose();
    if (byteData == null) return dataUrl;
    return 'data:image/png;base64,${base64Encode(byteData.buffer.asUint8List())}';
  } catch (e) {
    debugPrint('[slides enhance] $e');
    return dataUrl;
  }
}

Future<String?> ngmySlidesSignatureToImage(
  List<Offset?> points,
  Size canvasSize, {
  Color color = const Color(0xFF111827),
  double strokeWidth = 3.5,
}) async {
  if (points.whereType<Offset>().isEmpty) return null;
  try {
    const w = 800;
    final scale = w / canvasSize.width;
    final h = (canvasSize.height * scale).round().clamp(120, 400);
    final recorder = ui.PictureRecorder();
    final canvas = Canvas(recorder);
    canvas.drawRect(Rect.fromLTWH(0, 0, w.toDouble(), h.toDouble()), Paint()..color = const Color(0xFFFFFFFF));
    final stroke = Paint()
      ..color = color
      ..strokeWidth = strokeWidth * scale
      ..strokeCap = StrokeCap.round
      ..style = PaintingStyle.stroke;
    Offset? last;
    // `points` are normalized 0.0-1.0 fractions of the drawing canvas (see
    // _addPoint in ngmy_invoice_signature.dart), not raw pixel coordinates
    // in canvasSize's space. Multiplying by `scale` (a ratio meant for
    // pixel values) collapsed every stroke into a sub-pixel cluster near
    // the origin — that's why nothing visible ever showed up after
    // signing. Map the 0-1 fraction directly onto the output image size.
    for (final p in points) {
      if (p == null) {
        last = null;
        continue;
      }
      final scaled = Offset(p.dx * w, p.dy * h);
      if (last != null) canvas.drawLine(last, scaled, stroke);
      last = scaled;
    }
    final picture = recorder.endRecording();
    final img = await picture.toImage(w, h);
    picture.dispose();
    final bytes = await img.toByteData(format: ui.ImageByteFormat.png);
    img.dispose();
    if (bytes == null) return null;
    return 'data:image/png;base64,${base64Encode(bytes.buffer.asUint8List())}';
  } catch (e) {
    debugPrint('[slides signature] $e');
    return null;
  }
}

Future<String?> ngmySlidesCaptureSignature(BuildContext context) async {
  final points = <Offset?>[];
  Size? size;
  var color = const Color(0xFF111827);
  var strokeWidth = 3.5;
  await showNgmyFullscreenSignature(
    context,
    title: 'Sign document',
    points: points,
    onSave: (saved, canvasSize, inkColor, inkStrokeWidth) {
      points
        ..clear()
        ..addAll(saved);
      size = canvasSize;
      color = inkColor;
      strokeWidth = inkStrokeWidth;
    },
  );
  if (points.whereType<Offset>().isEmpty || size == null) return null;
  return ngmySlidesSignatureToImage(points, size!, color: color, strokeWidth: strokeWidth);
}

String ngmySlidesPrintHtml(NgmySlideDeck deck) {
  // The old fixed pixel size (up to 960px) had no relation to the actual
  // printed page — on real paper that's a small rectangle stranded in the
  // middle with huge blank margins. A later fix shaped `@page` itself to
  // the deck's own tall 9:16 aspect ratio — that removed the gutter
  // *inside* this HTML's own page box, but real printers only load
  // standard paper (A4/Letter), so the OS print pipeline scaled that
  // custom narrow page to fit the actual sheet, putting the same gutter
  // back on the sides. Using a standard A4 page — matching the real
  // sheet exactly, nothing left for the printer to re-fit — and
  // stretching `.slide` to its full printable width/height (not locked
  // to the deck's own aspect ratio) is what actually fills real paper.
  const pageWmm = 210.0;
  const pageHmm = 297.0;
  const marginMm = 10.0;
  final buf = StringBuffer('''
<!DOCTYPE html><html><head><meta charset="utf-8"><title>${_escapeHtml(deck.name)}</title>
<style>
  @page { size: ${pageWmm}mm ${pageHmm}mm; margin: ${marginMm}mm; }
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }
  h1 { font-size: 14px; margin: 6px 10mm; }
  .slide { page-break-after: always; width: 100%; height: ${pageHmm - marginMm * 2}mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }
  .el { position: absolute; overflow: hidden; }
  .txt { white-space: pre-wrap; word-break: break-word; }
  img { max-width: 100%; max-height: 100%; object-fit: contain; }
  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }
</style></head><body>
<h1>${_escapeHtml(deck.name)}</h1>
''');
  for (var i = 0; i < deck.slides.length; i++) {
    final slide = deck.slides[i];
    final bg = slide.background.toRadixString(16).padLeft(8, '0').substring(2);
    buf.writeln('<div class="slide" style="background:#$bg">');
    for (final e in slide.elements) {
      final left = (e.x * 100).toStringAsFixed(2);
      final top = (e.y * 100).toStringAsFixed(2);
      final width = (e.w * 100).toStringAsFixed(2);
      final height = (e.h * 100).toStringAsFixed(2);
      buf.write('<div class="el" style="left:$left%;top:$top%;width:$width%;height:$height%">');
      switch (e.type) {
        case NgmySlideElementType.text:
          final color = e.color.toRadixString(16).padLeft(8, '0').substring(2);
          buf.write('<div class="txt" style="font-size:${e.fontSize}px;color:#$color">${_escapeHtml(e.text)}</div>');
        case NgmySlideElementType.image:
        case NgmySlideElementType.signature:
          if (e.imageRef != null && e.imageRef!.startsWith('data:image')) {
            buf.write('<img src="${e.imageRef}" alt="" />');
          }
        case NgmySlideElementType.pdf:
          buf.write('<div class="pdf"><div>📄 ${_escapeHtml(e.fileName.isEmpty ? 'PDF document' : e.fileName)}</div></div>');
        case NgmySlideElementType.shape:
          buf.write('<div style="width:100%;height:100%;background:${_cssColor(e.fillColor)};border:2px solid ${_cssColor(e.strokeColor)}"></div>');
      }
      buf.writeln('</div>');
    }
    buf.writeln('</div>');
  }
  buf.writeln('</body></html>');
  return buf.toString();
}

/// Converts an ARGB int to a CSS rgba() string, preserving alpha. Naively
/// slicing the hex string (dropping the first byte to "remove alpha") is
/// what caused every intentionally transparent shape (0x00000000 — used
/// throughout for invisible sign zones and unfilled bordered boxes) to
/// print as solid black: for that specific value the remaining RRGGBB
/// digits happen to spell out black, with no alpha info preserved at all.
String _cssColor(int argb) {
  final a = ((argb >> 24) & 0xFF) / 255.0;
  final r = (argb >> 16) & 0xFF;
  final g = (argb >> 8) & 0xFF;
  final b = argb & 0xFF;
  return 'rgba($r,$g,$b,${a.toStringAsFixed(3)})';
}

String _escapeHtml(String s) => s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

Future<void> ngmySlidesOpenPrintPreview(BuildContext context, NgmySlideDeck deck) async {
  final html = ngmySlidesPrintHtml(deck);
  await showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF0C1220),
      title: const Text('Export presentation', style: TextStyle(color: Colors.white)),
      content: SizedBox(
        width: 320,
        child: Text(
          'Download a PDF that looks like your slides (${deck.slides.length} page${deck.slides.length == 1 ? '' : 's'}), or open the print view in your browser.',
          style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 13),
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
        TextButton(
          onPressed: () async {
            Navigator.pop(ctx);
            ngmySlidesLaunchPrintHtml(html, title: deck.name);
          },
          child: const Text('Print view'),
        ),
        FilledButton(
          onPressed: () async {
            Navigator.pop(ctx);
            final msg = await ngmySlidesDownloadDeckPdf(deck);
            if (context.mounted) {
              await ngmyHandleSlidesPdfDownloadResult(context, msg, deckName: deck.name);
            }
          },
          child: const Text('Download PDF'),
        ),
      ],
    ),
  );
}

void ngmySlidesLaunchPrintHtml(String html, {required String title}) {
  ngmySlidesOpenPrintHtml(html, title: title);
}

Future<String?> ngmySlidesPickAndEnhancePhoto() async {
  final ref = await ngmyPickImageBase64(imageQuality: 92, maxWidth: 2400);
  if (ref == null) return null;
  final enhanced = await ngmySlidesEnhanceImage(ref);
  return enhanced ?? ref;
}

/// Download a visual PDF that matches the slide canvas layout.
Future<String> ngmySlidesDownloadDeckPdf(NgmySlideDeck deck) async {
  final bytes = await ngmySlidesExportPdfBytes(deck);
  return saveNgmySlidesPdf(bytes, ngmySlidesExportPdfFilename(deck));
}

List<(String, NgmySlideLayout)> get ngmySlidesSchoolLayouts => const [
      ('Flashcard', NgmySlideLayout.flashcard),
      ('Quiz', NgmySlideLayout.quiz),
      ('Worksheet', NgmySlideLayout.worksheet),
      ('Notes', NgmySlideLayout.titleContent),
      ('Section', NgmySlideLayout.section),
    ];

extension NgmySlideDeckToolkit on NgmySlideDeck {
  int durationForSlide(int index) {
    if (index < 0 || index >= slides.length) return autoAdvanceSeconds.clamp(1, 120);
    final perSlide = slides[index].durationSeconds;
    final base = perSlide > 0 ? perSlide : autoAdvanceSeconds;
    return base.clamp(1, 120);
  }
}
