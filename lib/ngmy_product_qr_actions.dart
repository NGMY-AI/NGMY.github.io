import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

import 'ngmy_product_qr_widget.dart';
import 'ngmy_product_scanner_storage.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_qr_storage.dart';
import 'ngmy_share_image.dart';

const int kNgmyStoreProductQrTypeIndex = 8;

Future<Uint8List?> captureNgmyStoreProductQrVisible(GlobalKey captureKey) async {
  await Future.delayed(const Duration(milliseconds: 120));
  await WidgetsBinding.instance.endOfFrame;
  final boundary = captureKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
  if (boundary == null) return null;
  final image = await boundary.toImage(pixelRatio: 3.0);
  final data = await image.toByteData(format: ui.ImageByteFormat.png);
  return data?.buffer.asUint8List();
}

Future<Uint8List?> captureNgmyStoreProductQrOffscreen(
  BuildContext context, {
  required String payload,
  required double price,
}) async {
  if (!context.mounted) return null;
  final key = GlobalKey();
  late OverlayEntry entry;
  entry = OverlayEntry(
    builder: (ctx) => Positioned(
      left: -5000,
      top: -5000,
      child: Material(
        color: Colors.transparent,
        child: RepaintBoundary(
          key: key,
          child: NgmyStoreProductQrWidget(data: payload, price: price, large: true),
        ),
      ),
    ),
  );
  Overlay.of(context).insert(entry);
  try {
    await Future.delayed(const Duration(milliseconds: 280));
    await WidgetsBinding.instance.endOfFrame;
    final boundary = key.currentContext?.findRenderObject() as RenderRepaintBoundary?;
    if (boundary == null) return null;
    final image = await boundary.toImage(pixelRatio: 3.0);
    final data = await image.toByteData(format: ui.ImageByteFormat.png);
    return data?.buffer.asUint8List();
  } finally {
    entry.remove();
  }
}

Future<Uint8List?> renderNgmyStoreProductQrPng(
  BuildContext context, {
  required String payload,
  required double price,
  GlobalKey? visibleCaptureKey,
}) async {
  if (visibleCaptureKey != null) {
    final visible = await captureNgmyStoreProductQrVisible(visibleCaptureKey);
    if (visible != null) return visible;
  }
  if (!context.mounted) return null;
  return captureNgmyStoreProductQrOffscreen(context, payload: payload, price: price);
}

String ngmyStoreProductQrFilename(NgmyLocalProductRecord record) {
  final base = record.name.trim().isEmpty ? 'product' : record.name.trim();
  return 'ngmy_store_${base}_${record.id}';
}

Future<String> downloadNgmyStoreProductQr(
  BuildContext context, {
  required NgmyLocalProductRecord record,
  GlobalKey? visibleCaptureKey,
}) async {
  final bytes = await renderNgmyStoreProductQrPng(
    context,
    payload: record.qrPayload,
    price: record.price,
    visibleCaptureKey: visibleCaptureKey,
  );
  if (bytes == null) throw Exception('Could not render QR image.');
  return downloadNgmyQrImage(bytes, ngmyStoreProductQrFilename(record));
}

Future<NgmySavedQrRecord> saveNgmyStoreProductQrToLibrary(NgmyLocalProductRecord record) async {
  final saved = NgmySavedQrRecord(
    id: 'store-qr-${record.id}',
    label: record.name.trim().isEmpty ? 'Store product' : record.name.trim(),
    typeIndex: kNgmyStoreProductQrTypeIndex,
    typeLabel: 'Store product',
    payload: record.qrPayload,
    savedAt: DateTime.now().toUtc().toIso8601String(),
  );
  await deleteNgmySavedQr(saved.id);
  await addNgmySavedQr(saved);
  return saved;
}

Future<String> shareNgmyStoreProductQr(
  BuildContext context, {
  required NgmyLocalProductRecord record,
  GlobalKey? visibleCaptureKey,
}) async {
  final bytes = await renderNgmyStoreProductQrPng(
    context,
    payload: record.qrPayload,
    price: record.price,
    visibleCaptureKey: visibleCaptureKey,
  );
  if (bytes == null) throw Exception('Could not render QR image.');

  final shareText = '${record.name} — \$${record.price.toStringAsFixed(2)} · NGMY Store QR';
  await Clipboard.setData(ClipboardData(text: shareText));

  final msg = await shareNgmyPngBytes(
    bytes,
    ngmyStoreProductQrFilename(record),
    title: record.name,
    text: shareText,
  );
  return '$msg · Product info copied.';
}
