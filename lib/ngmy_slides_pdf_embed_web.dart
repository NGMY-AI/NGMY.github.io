// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

Widget ngmySlidesPdfEmbed({required String dataUrl, int pdfPage = 0, String fileName = ''}) {
  final viewType = 'ngmy-pdf-${dataUrl.hashCode}-$pdfPage';
  final src = pdfPage > 0 ? '$dataUrl#page=$pdfPage' : dataUrl;
  ui_web.platformViewRegistry.registerViewFactory(viewType, (int viewId) {
    final iframe = html.IFrameElement()
      ..src = src
      ..style.border = 'none'
      ..style.width = '100%'
      ..style.height = '100%';
    return iframe;
  });
  return Stack(
    fit: StackFit.expand,
    children: [
      HtmlElementView(viewType: viewType),
      if (fileName.isNotEmpty)
        Positioned(
          left: 4,
          top: 4,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
            decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(4)),
            child: Text(fileName, style: const TextStyle(color: Colors.white, fontSize: 8)),
          ),
        ),
    ],
  );
}
