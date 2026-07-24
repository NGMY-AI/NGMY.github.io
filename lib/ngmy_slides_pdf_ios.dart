import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_slides_pdf_ios_stub.dart' if (dart.library.html) 'ngmy_slides_pdf_ios_web.dart';

/// Returned when a PDF is staged for iPhone share / Safari open.
const kNgmySlidesPdfStagedToken = '__ngmy_slides_pdf_staged__';

bool get ngmyHasStagedSlidesPdf => ngmyHasStagedSlidesPdfImpl();

String? get ngmyStagedSlidesPdfName => ngmyStagedSlidesPdfNameImpl();

void ngmyClearStagedSlidesPdf() => ngmyClearStagedSlidesPdfImpl();

void ngmyStageSlidesPdfBytes(Uint8List bytes, String filename) =>
    ngmyStageSlidesPdfBytesImpl(bytes, filename);

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
  final forInvoicePrint = deckName == 'Invoice';
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    isDismissible: false,
    builder: (ctx) => _NgmySlidesPdfSaveSheet(fileName: name, forInvoicePrint: forInvoicePrint),
  );
}

class _NgmySlidesPdfSaveSheet extends StatelessWidget {
  const _NgmySlidesPdfSaveSheet({required this.fileName, this.forInvoicePrint = false});

  final String fileName;
  final bool forInvoicePrint;

  Future<void> _finish(BuildContext context, Future<bool> Function() action, String okMsg, String failMsg) async {
    final ok = await action();
    if (!context.mounted) return;
    Navigator.pop(context);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(ok ? okMsg : failMsg), duration: const Duration(seconds: 8)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 22),
              decoration: BoxDecoration(
                color: const Color(0xFF12182A),
                borderRadius: BorderRadius.circular(22),
                border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 8))],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Center(
                    child: Container(
                      width: 40,
                      height: 4,
                      decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    forInvoicePrint ? 'Print your invoice' : 'Save your PDF',
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    forInvoicePrint
                        ? 'One full letter page — tap Share then Print, or open in Safari.'
                        : fileName,
                    textAlign: TextAlign.center,
                    maxLines: forInvoicePrint ? 3 : 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12, fontWeight: FontWeight.w600),
                  ),
                  if (!forInvoicePrint) ...[
                    const SizedBox(height: 4),
                    Text(
                      fileName,
                      textAlign: TextAlign.center,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11, fontWeight: FontWeight.w600),
                    ),
                  ],
                  const SizedBox(height: 20),
                  Row(
                    children: [
                      Expanded(
                        child: _PdfActionTile(
                          icon: Icons.download_rounded,
                          label: 'Download',
                          accent: const Color(0xFFB8860B),
                          filled: true,
                          onTap: () => _finish(
                            context,
                            ngmyDownloadStagedSlidesPdf,
                            'Tap Save to Files on the next screen.',
                            'Download did not start — try Share.',
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: _PdfActionTile(
                          icon: Icons.ios_share_rounded,
                          label: 'Share',
                          accent: const Color(0xFF2563EB),
                          onTap: () => _finish(
                            context,
                            ngmyShareStagedSlidesPdf,
                            forInvoicePrint
                                ? 'Choose Print from the share menu for one full page.'
                                : 'Pick Save to Files or send from the share menu.',
                            'Share unavailable — try Safari.',
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: _PdfActionTile(
                          icon: Icons.language_rounded,
                          label: 'Safari',
                          accent: const Color(0xFF059669),
                          onTap: () => _finish(
                            context,
                            ngmyOpenStagedSlidesPdfInSafari,
                            forInvoicePrint
                                ? 'PDF opened — tap Share ↗ then Print.'
                                : 'PDF opened — use Share ↗ at the bottom of Safari.',
                            'Could not open Safari — try Share.',
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  TextButton(
                    onPressed: () {
                      ngmyClearStagedSlidesPdf();
                      Navigator.pop(context);
                    },
                    child: Text('Cancel', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w700)),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PdfActionTile extends StatelessWidget {
  const _PdfActionTile({
    required this.icon,
    required this.label,
    required this.accent,
    required this.onTap,
    this.filled = false,
  });

  final IconData icon;
  final String label;
  final Color accent;
  final VoidCallback onTap;
  final bool filled;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Ink(
          padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 8),
          decoration: BoxDecoration(
            color: filled ? accent.withValues(alpha: 0.22) : Colors.white.withValues(alpha: 0.06),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: filled ? accent.withValues(alpha: 0.55) : Colors.white.withValues(alpha: 0.1)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, color: filled ? accent : Colors.white, size: 26),
              const SizedBox(height: 8),
              Text(label, style: TextStyle(color: Colors.white, fontWeight: filled ? FontWeight.w900 : FontWeight.w700, fontSize: 12)),
            ],
          ),
        ),
      ),
    );
  }
}
