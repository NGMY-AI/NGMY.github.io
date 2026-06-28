import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

const String kNgmyVirtualDeviceYouTubeHome = 'https://m.youtube.com/';

class NgmyVirtualDeviceBrowserControls {
  NgmyVirtualDeviceBrowserControls({
    required this.goHome,
    required this.goBack,
    required this.goForward,
    required this.reload,
  });

  final Future<void> Function() goHome;
  final Future<void> Function() goBack;
  final Future<void> Function() goForward;
  final Future<void> Function() reload;
}

class NgmyVirtualDeviceBrowser extends StatefulWidget {
  const NgmyVirtualDeviceBrowser({super.key, this.onReady});

  final void Function(NgmyVirtualDeviceBrowserControls controls)? onReady;

  @override
  State<NgmyVirtualDeviceBrowser> createState() => _NgmyVirtualDeviceBrowserState();
}

class _NgmyVirtualDeviceBrowserState extends State<NgmyVirtualDeviceBrowser> {
  late final String _viewType;
  html.IFrameElement? _frame;
  var _loading = true;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vdevice-yt-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _frame = html.IFrameElement()
        ..src = kNgmyVirtualDeviceYouTubeHome
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..allowFullscreen = true
        ..setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      _frame!.onLoad.listen((_) {
        if (mounted) setState(() => _loading = false);
      });
      return _frame!;
    });

    widget.onReady?.call(
      NgmyVirtualDeviceBrowserControls(
        goHome: () async {
          final f = _frame;
          if (f == null) return;
          setState(() => _loading = true);
          f.src = kNgmyVirtualDeviceYouTubeHome;
        },
        goBack: () async {
          try {
            _frame?.contentWindow?.history.back();
          } catch (_) {}
        },
        goForward: () async {
          try {
            _frame?.contentWindow?.history.forward();
          } catch (_) {}
        },
        reload: () async {
          final f = _frame;
          if (f == null) return;
          setState(() => _loading = true);
          f.src = f.src ?? kNgmyVirtualDeviceYouTubeHome;
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        HtmlElementView(viewType: _viewType),
        if (_loading)
          const ColoredBox(
            color: Colors.black26,
            child: Center(
              child: SizedBox(
                width: 28,
                height: 28,
                child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
              ),
            ),
          ),
      ],
    );
  }
}
