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
  return PdfColor(r, g, b, a <= 0 ? 1 : a);
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
  final fill = _pdfColor(e.fillColor);
  final stroke = _pdfColor(e.strokeColor);
  final border = pw.Border.all(color: stroke, width: e.strokeWidth.clamp(0.5, 6.0));
  switch (e.shape) {
    case NgmySlideShapeKind.circle:
      return pw.Container(
        decoration: pw.BoxDecoration(shape: pw.BoxShape.circle, color: fill, border: border),
      );
    case NgmySlideShapeKind.line:
      return pw.Center(child: pw.Container(height: e.strokeWidth + 1, color: stroke));
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
Future<Uint8List> ngmySlidesExportPdfBytes(NgmySlideDeck deck) async {
  final doc = pw.Document(title: deck.name, creator: 'NGMY Slides');
  const pageW = 960.0;
  final pageH = pageW / deck.aspectValue;
  final format = PdfPageFormat(pageW, pageH, marginAll: 0);

  for (final slide in deck.slides) {
    doc.addPage(
      pw.Page(
        pageFormat: format,
        build: (_) => _pdfSlidePage(slide, deck, pageW, pageH),
      ),
    );
  }

  return doc.save();
}

String ngmySlidesExportPdfFilename(NgmySlideDeck deck) {
  final safe = deck.name.trim().replaceAll(RegExp(r'[^\w\-. ]+'), '_').trim();
  return safe.isEmpty ? 'presentation' : safe;
}
