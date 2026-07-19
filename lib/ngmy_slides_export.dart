import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import 'ngmy_slides_models.dart';

PdfColor _pdfColor(int argb) {
  final a = ((argb >> 24) & 0xFF) / 255.0;
  final r = ((argb >> 16) & 0xFF) / 255.0;
  final g = ((argb >> 8) & 0xFF) / 255.0;
  final b = (argb & 0xFF) / 255.0;
  // Forcing alpha=0 up to fully opaque turned every intentionally
  // transparent shape (0x00000000 — used everywhere for invisible sign
  // zones and unfilled bordered boxes) into a solid black rectangle when
  // printed/exported to PDF. Trust the alpha channel as given.
  return PdfColor(r, g, b, a);
}

pw.MemoryImage? _pdfImageFromRef(String? ref) {
  if (ref == null || !ref.startsWith('data:image')) return null;
  try {
    return pw.MemoryImage(base64Decode(ref.split(',').last));
  } catch (_) {
    return null;
  }
}

String _pdfTextContent(NgmySlideElement e) {
  var text = e.text;
  if (!e.bulletList) return text;
  return text
      .split('\n')
      .map((line) {
        final t = line.trim();
        if (t.isEmpty) return '';
        return t.startsWith('•') ? t : '• $t';
      })
      .join('\n');
}

pw.TextAlign _pdfTextAlign(TextAlign align) {
  switch (align) {
    case TextAlign.center:
      return pw.TextAlign.center;
    case TextAlign.right:
    case TextAlign.end:
      return pw.TextAlign.right;
    default:
      return pw.TextAlign.left;
  }
}

pw.Alignment _pdfAlignment(TextAlign align) {
  switch (align) {
    case TextAlign.center:
      return pw.Alignment.center;
    case TextAlign.right:
    case TextAlign.end:
      return pw.Alignment.centerRight;
    default:
      return pw.Alignment.centerLeft;
  }
}

pw.Widget _pdfText(NgmySlideElement e, double pageW) {
  final fs = (e.fontSize * (pageW / 960)).clamp(8.0, 96.0);
  return pw.Text(
    _pdfTextContent(e),
    style: pw.TextStyle(
      fontSize: fs,
      color: _pdfColor(e.color),
      fontWeight: e.fontWeight.value >= FontWeight.w700.value ? pw.FontWeight.bold : pw.FontWeight.normal,
      fontStyle: e.fontStyle == FontStyle.italic ? pw.FontStyle.italic : pw.FontStyle.normal,
      decoration: e.decoration == TextDecoration.underline ? pw.TextDecoration.underline : pw.TextDecoration.none,
    ),
    textAlign: _pdfTextAlign(e.align),
  );
}

pw.Widget _pdfShape(NgmySlideElement e) {
  // Passing color: PdfColor(_, _, _, 0) for "no fill" relies on the pdf
  // package correctly emitting an alpha graphics state for a solid-fill
  // primitive, which isn't reliably honored by every PDF viewer — some
  // just paint the RGB opaque and ignore alpha 0. Passing null for color
  // (paint nothing at all) is unambiguous regardless of viewer, so that's
  // used for anything with alpha 0 instead of trusting transparency.
  final fillA = (e.fillColor >> 24) & 0xFF;
  final strokeA = (e.strokeColor >> 24) & 0xFF;
  final fill = fillA == 0 ? null : _pdfColor(e.fillColor);
  final strokeColor = strokeA == 0 ? null : _pdfColor(e.strokeColor);
  final border = strokeColor == null ? null : pw.Border.all(color: strokeColor, width: e.strokeWidth.clamp(0.5, 6.0));
  switch (e.shape) {
    case NgmySlideShapeKind.circle:
      return pw.Container(
        decoration: pw.BoxDecoration(shape: pw.BoxShape.circle, color: fill, border: border),
      );
    case NgmySlideShapeKind.line:
      return strokeColor == null ? pw.SizedBox() : pw.Center(child: pw.Container(height: e.strokeWidth + 1, color: strokeColor));
    default:
      return pw.Container(
        decoration: pw.BoxDecoration(color: fill, border: border, borderRadius: pw.BorderRadius.circular(4)),
      );
  }
}

pw.Widget _pdfElement(NgmySlideElement e, double pageW, double pageH) {
  final left = e.x * pageW;
  final top = e.y * pageH;
  final width = (e.w * pageW).clamp(12.0, pageW);
  final height = (e.h * pageH).clamp(12.0, pageH);

  pw.Widget child;
  switch (e.type) {
    case NgmySlideElementType.text:
      child = pw.Align(alignment: _pdfAlignment(e.align), child: _pdfText(e, pageW));
    case NgmySlideElementType.image:
    case NgmySlideElementType.signature:
      final img = _pdfImageFromRef(e.imageRef);
      child = img == null
          ? pw.Center(child: pw.Text(e.fileName.isEmpty ? 'Image' : e.fileName, style: pw.TextStyle(fontSize: 10, color: PdfColors.grey700)))
          : pw.Image(img, fit: pw.BoxFit.contain);
    case NgmySlideElementType.pdf:
      child = pw.Container(
        decoration: pw.BoxDecoration(
          color: PdfColors.grey100,
          border: pw.Border.all(color: PdfColors.grey400),
          borderRadius: pw.BorderRadius.circular(6),
        ),
        alignment: pw.Alignment.center,
        child: pw.Text(
          e.fileName.isEmpty ? 'PDF document' : e.fileName,
          style: pw.TextStyle(fontSize: 11, fontWeight: pw.FontWeight.bold, color: PdfColors.red800),
          textAlign: pw.TextAlign.center,
        ),
      );
    case NgmySlideElementType.shape:
      child = _pdfShape(e);
  }

  return pw.Positioned(
    left: left,
    top: top,
    child: pw.SizedBox(
      width: width,
      height: height,
      child: e.type == NgmySlideElementType.signature
          ? pw.Container(
              padding: const pw.EdgeInsets.all(4),
              decoration: pw.BoxDecoration(
                color: PdfColors.white,
                border: pw.Border.all(color: PdfColors.grey400),
                borderRadius: pw.BorderRadius.circular(4),
              ),
              child: child,
            )
          : child,
    ),
  );
}

pw.Widget _pdfSlidePage(NgmySlide slide, NgmySlideDeck deck, double pageW, double pageH) {
  final bg = _pdfColor(slide.background);
  pw.Widget background;
  if (slide.backgroundEnd != null) {
    background = pw.Container(
      decoration: pw.BoxDecoration(
        gradient: pw.LinearGradient(
          begin: pw.Alignment.topLeft,
          end: pw.Alignment.bottomRight,
          colors: [bg, _pdfColor(slide.backgroundEnd!)],
        ),
      ),
    );
  } else {
    background = pw.Container(color: bg);
  }

  return pw.Stack(
    children: [
      pw.Positioned.fill(child: background),
      ...slide.elements.map((e) => _pdfElement(e, pageW, pageH)),
    ],
  );
}

/// Builds a PDF that mirrors slide layout (backgrounds, positioned text, images).
///
/// The page itself is a real, standard paper size (A4) — PdfPageFormat's
/// width/height are in points (1/72in), and the old code passed 960 (the
/// on-screen reference canvas's pixel width) straight in, producing a
/// roughly 13x24in custom page. Printers/viewers then had to shrink that
/// whole oversized page down to fit actual paper, leaving the content
/// looking tiny and stranded in the middle. The slide content is now
/// centered within the real page, scaled up to fill it edge to edge on
/// whichever dimension binds first (full height for a tall 9:16 deck).
Future<Uint8List> ngmySlidesExportPdfBytes(NgmySlideDeck deck) async {
  final doc = pw.Document(title: deck.name, creator: 'NGMY Slides');
  const pageFormat = PdfPageFormat.a4;
  const margin = 16.0;
  final availW = pageFormat.width - margin * 2;
  final availH = pageFormat.height - margin * 2;
  final aspect = deck.aspectValue; // width / height
  var contentW = availW;
  var contentH = contentW / aspect;
  if (contentH > availH) {
    contentH = availH;
    contentW = contentH * aspect;
  }

  for (final slide in deck.slides) {
    doc.addPage(
      pw.Page(
        pageFormat: pageFormat,
        margin: const pw.EdgeInsets.all(margin),
        build: (_) => pw.Center(
          child: pw.SizedBox(
            width: contentW,
            height: contentH,
            child: pw.ClipRect(child: _pdfSlidePage(slide, deck, contentW, contentH)),
          ),
        ),
      ),
    );
  }

  return doc.save();
}

String ngmySlidesExportPdfFilename(NgmySlideDeck deck) {
  final safe = deck.name.trim().replaceAll(RegExp(r'[^\w\-. ]+'), '_').trim();
  return safe.isEmpty ? 'presentation' : safe;
}
