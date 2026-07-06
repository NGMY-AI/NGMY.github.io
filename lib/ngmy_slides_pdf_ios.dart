import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_slides_pdf_ios_stub.dart' if (dart.library.html) 'ngmy_slides_pdf_ios_web.dart';

/// Returned when a PDF is staged for iPhone share / Safari open.
const kNgmySlidesPdfStagedToken = '__ngmy_slides_pdf_staged__';

bool get ngmyHasStagedSlidesPdf => ngmyHasStagedSlidesPdfImpl();

String? get ngmyStagedSlidesPdfName => ngmyStagedSlidesPdfNameImpl();

void ngmyClearStagedSlidesPdf() => ngmyClearStagedSlidesPdfImpl();

Future<bool> ngmyShareStagedSlidesPdf() => ngmyShareStagedSlidesPdfImpl();

Future<bool> ngmyOpenStagedSlidesPdfInSafari() => ngmyOpenStagedSlidesPdfInSafariImpl();

/// Save PDF bytes — on iPhone web stages for share sheet; elsewhere downloads directly.
Future<String> saveNgmySlidesPdfWithIosSupport(Uint8List bytes, String filename) =>
    saveNgmySlidesPdfWithIosSupportImpl(bytes, filename);

Future<void> ngmyHandleSlidesPdfDownloadResult(BuildContext context, String msg, {String deckName = 'presentation'}) async {
  if (msg == kNgmySlidesPdfStagedToken) {
    await ngmyShowIosSlidesPdfDialog(context, deckName: deckName);
    return;
  }
  if (context.mounted) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }
}

Future<void> ngmyShowIosSlidesPdfDialog(BuildContext context, {required String deckName}) async {
  final name = ngmyStagedSlidesPdfName ?? '$deckName.pdf';
  await showDialog<void>(
    context: context,
    barrierDismissible: false,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF1A1A2E),
      title: const Text('Save your PDF', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
      content: Text(
        'Your presentation PDF is ready.\n\n'
        '• Tap Share to save to Files or send to someone.\n'
        '• Tap Safari to open the PDF in your browser.\n\n'
        'File: $name',
        style: const TextStyle(color: Colors.white70, height: 1.35, fontSize: 13),
      ),
      actions: [
        TextButton(
          onPressed: () {
            ngmyClearStagedSlidesPdf();
            Navigator.pop(ctx);
          },
          child: const Text('Cancel'),
        ),
        OutlinedButton.icon(
          onPressed: () async {
            final opened = await ngmyOpenStagedSlidesPdfInSafari();
            if (ctx.mounted) Navigator.pop(ctx);
            if (!context.mounted) return;
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(opened ? 'PDF opened — use Share ↗ then Save to Files.' : 'Could not open PDF. Try Share instead.'),
                duration: const Duration(seconds: 8),
              ),
            );
          },
          icon: const Icon(Icons.language_rounded, size: 18),
          label: const Text('Safari'),
        ),
        FilledButton.icon(
          style: FilledButton.styleFrom(backgroundColor: const Color(0xFFB8860B)),
          onPressed: () async {
            final shared = await ngmyShareStagedSlidesPdf();
            if (ctx.mounted) Navigator.pop(ctx);
            if (!context.mounted) return;
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(shared ? 'Tap Save to Files or share from the menu.' : 'Share unavailable — try Safari.'),
                duration: const Duration(seconds: 8),
              ),
            );
            if (!shared) {
              await ngmyOpenStagedSlidesPdfInSafari();
            }
          },
          icon: const Icon(Icons.ios_share_rounded, size: 18),
          label: const Text('Share'),
        ),
      ],
    ),
  );
}
