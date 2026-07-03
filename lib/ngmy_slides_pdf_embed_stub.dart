import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

Widget ngmySlidesPdfEmbed({required String dataUrl, int pdfPage = 0, String fileName = ''}) {
  final src = pdfPage > 0 ? '$dataUrl#page=$pdfPage' : dataUrl;
  final controller = WebViewController()
    ..setJavaScriptMode(JavaScriptMode.unrestricted)
    ..loadRequest(Uri.parse(src));
  return Stack(
    fit: StackFit.expand,
    children: [
      WebViewWidget(controller: controller),
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
