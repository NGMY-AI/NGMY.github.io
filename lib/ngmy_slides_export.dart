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
  // Floor used to be 8pt regardless of how small the page's own scale
  // ratio was. Once the page shrank to real-world size (see below), that
  // floor forced small design-time labels (e.g. a 9pt "Sahihi:" tag) to
  // render nearly 2x bigger than their box was sized for, wrapping text
  // that fit fine on screen. Only guard against near-zero/negative sizes.
  final fs = (e.fontSize * (pageW / 960)).clamp(3.0, 96.0);
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

pw.Widget _pdfShape(NgmySlideElement e, double pageW) {
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
  // strokeWidth is authored against the 960-wide design canvas, same as
  // fontSize. Text already scales by pageW/960 (see _pdfText); borders
  // didn't, so once the page shrank to real-world size every border/line
  // rendered roughly 2x thicker than intended relative to the page (the
  // title rule looked fine because that one is a filled rect sized by
  // fractional height, which scales automatically).
  final strokeScale = pageW / 960;
  final sw = (e.strokeWidth * strokeScale).clamp(0.35, 6.0);
  final border = strokeColor == null ? null : pw.Border.all(color: strokeColor, width: sw);
  switch (e.shape) {
    case NgmySlideShapeKind.circle:
      return pw.Container(
        decoration: pw.BoxDecoration(shape: pw.BoxShape.circle, color: fill, border: border),
      );
    case NgmySlideShapeKind.line:
      return strokeColor == null ? pw.SizedBox() : pw.Center(child: pw.Container(height: sw + 0.4, color: strokeColor));
    default:
      return pw.Container(
        decoration: pw.BoxDecoration(color: fill, border: border, borderRadius: pw.BorderRadius.circular(4)),
      );
  }
}

pw.Widget _pdfElement(NgmySlideElement e, double pageW, double pageH) {
  final left = e.x * pageW;
  final top = e.y * pageH;
  // A 12pt floor makes sense for text/image boxes (nothing legible should
  // render smaller than that), but decorative bar shapes — the title's
  // underline rule, the witness table's column divider — are authored a
  // couple of points thick on purpose and fill their *entire* box. Forcing
  // that box up to 12pt turned a ~1.5-2pt line into one 6-9x thicker than
  // designed, which is exactly the "thick when I print" report: the
  // on-screen editor never applies this floor, so it never showed there.
  final minSize = e.type == NgmySlideElementType.shape ? 0.4 : 12.0;
  final width = (e.w * pageW).clamp(minSize, pageW);
  final height = (e.h * pageH).clamp(minSize, pageH);

  pw.Widget child;
  switch (e.type) {
    case NgmySlideElementType.text:
      child = pw.Align(alignment: _pdfAlignment(e.align), child: _pdfText(e, pageW));
    case NgmySlideElementType.image:
    case NgmySlideElementType.signature:
      final img = _pdfImageFromRef(e.imageRef);
      // A full-bleed background (the locked templates' paper texture,
      // including the decorative frame lines, is one full-slide image) is
      // meant to cover its box edge to edge, same as every vector element
      // on top of it — BoxFit.contain instead preserves the image's own
      // aspect ratio and letterboxes it, so once the page got stretched to
      // fill the real printed page (non-uniformly, since the design's
      // native shape is 9:16), the background stayed a smaller island
      // while the text/table on top of it stretched to the full page, spilling past the
      // frame lines baked into that now-undersized image. Only a true
      // full-slide background should stretch to fill; a user's actual
      // inserted photo (or a signature) should keep its own proportions.
      final isFullBleedBg = e.type == NgmySlideElementType.image && e.x == 0 && e.y == 0 && e.w == 1 && e.h == 1;
      child = img == null
          ? pw.Center(child: pw.Text(e.fileName.isEmpty ? 'Image' : e.fileName, style: pw.TextStyle(fontSize: 10, color: PdfColors.grey700)))
          : pw.Image(img, fit: isFullBleedBg ? pw.BoxFit.fill : pw.BoxFit.contain);
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
      child = _pdfShape(e, pageW);
  }

  // The editor/live view rotates elements via Flutter's Transform.rotate.
  // pdf's own pw.Transform.rotate takes the same angle but composes it in
  // the PDF's native (y-up) canvas space rather than Flutter's y-down
  // screen space, so the same signed angle spins the opposite way —
  // negating it here is what makes the two actually match instead of
  // mirroring each other (this is what read as "the watermark flips the
  // other way in the PDF").
  if (e.rotation != 0) {
    child = pw.Transform.rotate(angle: -e.rotation, child: child);
  }

  // pdf's setFillColor only ever emits the RGB channels to the content
  // stream — it silently drops alpha entirely, so a low-alpha text color
  // (the faint watermark) painted fully opaque in the PDF regardless of
  // what alpha we set. pw.Opacity is the only thing in this package that
  // actually emits a graphics-state alpha, so it's the real fix, not a
  // difference in *what* color we pass.
  if (e.type == NgmySlideElementType.text) {
    final textAlpha = (e.color >> 24) & 0xFF;
    if (textAlpha < 255) {
      child = pw.Opacity(opacity: textAlpha / 255, child: child);
    }
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
/// PdfPageFormat's width/height are in points (1/72in). The old code
/// passed 960 (the on-screen reference canvas's pixel width) straight in,
/// producing a roughly 13x24in custom page that printers/viewers had to
/// shrink to fit real paper. A later fix shaped the PDF's own page to a
/// standard size instead of that custom aspect ratio — matching the
/// actual paper being printed on means nothing needs to be re-fit by the
/// print driver, so no blank gutter gets reintroduced outside the PDF.
/// That standard size has to be Letter, not A4: this app's documents are
/// US-only (see the state picker baked into every certificate — "Alabama",
/// "Arkansas", etc.), and a US printer has Letter loaded, not A4. An A4
/// PDF sent to a Letter tray gets fit-to-page and centered by the OS
/// print pipeline — since A4 and Letter aren't the same aspect ratio,
/// that always leaves a margin on one axis, which is exactly the "frame
/// doesn't fill the printed page" report. The content is then stretched
/// to fill that page's full width and height directly (not aspect-locked
/// to the deck's 9:16 shape) — a certificate's text/table layout
/// tolerates a modest non-uniform stretch far better than a permanent
/// blank margin down both sides.
Future<Uint8List> ngmySlidesExportPdfBytes(NgmySlideDeck deck) async {
  final doc = pw.Document(title: deck.name, creator: 'NGMY Slides');
  const pageFormat = PdfPageFormat.letter;
  const margin = 2.5;
  // Requested after the print margin was already trimmed to near zero:
  // a genuine zoom-in, not just less blank border. Scales the whole
  // composed page (frame image included) up around its center; whatever
  // spills past the page edge is cropped by the ClipRect below. Height
  // and width are scaled independently — a separate "wider on the left
  // and right only" request on top of the overall zoom.
  const zoomY = 1.01875;
  const zoomX = 1.0375;
  final contentW = pageFormat.width - margin * 2;
  final contentH = pageFormat.height - margin * 2;

  for (final slide in deck.slides) {
    doc.addPage(
      pw.Page(
        pageFormat: pageFormat,
        margin: const pw.EdgeInsets.all(margin),
        build: (_) => pw.SizedBox(
          width: contentW,
          height: contentH,
          child: pw.ClipRect(
            child: pw.Transform(
              transform: Matrix4.diagonal3Values(zoomX, zoomY, 1),
              alignment: pw.Alignment.center,
              child: _pdfSlidePage(slide, deck, contentW, contentH),
            ),
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
