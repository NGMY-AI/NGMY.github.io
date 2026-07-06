import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_slides_pdf_ios_stub.dart' if (dart.library.html) 'ngmy_slides_pdf_ios_web.dart';

/// Returned when a PDF is staged for iPhone share / Safari open.
const kNgmySlidesPdfStagedToken = '__ngmy_slides_pdf_staged__';

bool get ngmyHasStagedSlidesPdf => ngmyHasStagedSlidesPdfImpl();

String? get ngmyStagedSlidesPdfName => ngmyStagedSlidesPdfNameImpl();

void ngmyClearStagedSlidesPdf() => ngmyClearStagedSlidesPdfImpl();

Future<bool> ngmyShareStagedSlidesPdf() => ngmyShareStagedSlidesPdfImpl();

Future<bool> ngmyDownloadStagedSlidesPdf() => ngmyDownloadStagedSlidesPdfImpl();

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
        '• Tap Download — then choose Save to Files.\n'
        '• Tap Share to send it to someone.\n'
        '• Tap Safari to open it in the browser (use Share ↗ at the bottom to save).\n\n'
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
            if (!context.mounted) return;
            if (ctx.mounted) Navigator.pop(ctx);
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(
                  opened
                      ? 'PDF opened in Safari — tap Share ↗ at the bottom, then Save to Files.'
                      : 'Could not open in Safari. Try Download instead.',
                ),
                duration: const Duration(seconds: 9),
              ),
            );
          },
          icon: const Icon(Icons.language_rounded, size: 18),
          label: const Text('Safari'),
        ),
        OutlinedButton.icon(
          onPressed: () async {
            final shared = await ngmyShareStagedSlidesPdf();
            if (!context.mounted) return;
            if (ctx.mounted) Navigator.pop(ctx);
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(
                  shared
                      ? 'Choose Save to Files or send to someone from the share menu.'
                      : 'Share unavailable — try Download or Safari.',
                ),
                duration: const Duration(seconds: 9),
              ),
            );
          },
          icon: const Icon(Icons.ios_share_rounded, size: 18),
          label: const Text('Share'),
        ),
        FilledButton.icon(
          style: FilledButton.styleFrom(backgroundColor: const Color(0xFFB8860B)),
          onPressed: () async {
            final saved = await ngmyDownloadStagedSlidesPdf();
            if (!context.mounted) return;
            if (ctx.mounted) Navigator.pop(ctx);
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(
                  saved
                      ? 'On the next screen, tap Save to Files to keep your PDF.'
                      : 'Download did not start — try Share or Safari.',
                ),
                duration: const Duration(seconds: 9),
              ),
            );
          },
          icon: const Icon(Icons.download_rounded, size: 18),
          label: const Text('Download'),
        ),
      ],
    ),
  );
}
