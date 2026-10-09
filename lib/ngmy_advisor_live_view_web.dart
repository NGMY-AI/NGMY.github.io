import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Live view of the advisor's cloud browser (interactive iframe — the user can tap in to log in).
class NgmyAdvisorLiveView extends StatefulWidget {
  const NgmyAdvisorLiveView({super.key, required this.url});

  final String url;

  @override
  State<NgmyAdvisorLiveView> createState() => _NgmyAdvisorLiveViewState();
}

class _NgmyAdvisorLiveViewState extends State<NgmyAdvisorLiveView> {
  late final String _viewType;
  html.IFrameElement? _frame;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-advisor-live-${identityHashCode(this)}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _frame = html.IFrameElement()
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.backgroundColor = '#0f172a'
        ..allow = 'autoplay; clipboard-read; clipboard-write'
        ..src = widget.url;
      return _frame!;
    });
  }

  @override
  void didUpdateWidget(covariant NgmyAdvisorLiveView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.url != widget.url) _frame?.src = widget.url;
  }

  @override
  Widget build(BuildContext context) => HtmlElementView(viewType: _viewType);
}
