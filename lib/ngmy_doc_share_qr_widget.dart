import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'ngmy_qr_generator.dart';

/// Doc Share QR — same branded design as NGMY Advisors (circular modules, corner rings, center logo).
class NgmyDocShareQrWidget extends StatelessWidget {
  const NgmyDocShareQrWidget({
    super.key,
    required this.data,
    this.captureKey,
    this.large = true,
    this.maxSide,
  });

  final String data;
  final GlobalKey? captureKey;
  final bool large;
  final double? maxSide;

  static Future<Uint8List?> capturePng(GlobalKey key, {double pixelRatio = 4}) =>
      NgmyBrandedQrWidget.capturePng(key, pixelRatio: pixelRatio);

  @override
  Widget build(BuildContext context) {
    return NgmyBrandedQrWidget(
      data: data,
      large: large,
      compact: !large,
      captureKey: captureKey,
    );
  }
}
