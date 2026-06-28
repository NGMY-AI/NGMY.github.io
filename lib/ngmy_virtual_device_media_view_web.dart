import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Embedded video player for virtual devices (web iframe).
/// Only mount a few of these at once — grid uses [NgmyVirtualDeviceMediaPreview] instead.
class NgmyVirtualDeviceMediaView extends StatefulWidget {
  const NgmyVirtualDeviceMediaView({
    super.key,
    required this.viewKey,
    required this.embedUrl,
    this.compact = false,
  });

  final String viewKey;
  final String embedUrl;
  final bool compact;

  @override
  State<NgmyVirtualDeviceMediaView> createState() => _NgmyVirtualDeviceMediaViewState();
}

class _NgmyVirtualDeviceMediaViewState extends State<NgmyVirtualDeviceMediaView> {
  late final String _viewType;
  html.IFrameElement? _frame;
  var _loading = true;
  var _failed = false;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vmedia-${widget.viewKey}-${DateTime.now().microsecondsSinceEpoch}';
    _registerFrame();
  }

  void _registerFrame() {
    try {
      ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
        _frame = html.IFrameElement()
          ..src = widget.embedUrl
          ..style.border = 'none'
          ..style.width = '100%'
          ..style.height = '100%'
          ..allowFullscreen = true
          ..setAttribute(
            'allow',
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
          );
        _frame!.onLoad.listen((_) {
          if (mounted) setState(() => _loading = false);
        });
        _frame!.onError.listen((_) {
          if (mounted) {
            setState(() {
              _loading = false;
              _failed = true;
            });
          }
        });
        return _frame!;
      });
    } catch (_) {
      _failed = true;
      _loading = false;
    }
  }

  @override
  void didUpdateWidget(covariant NgmyVirtualDeviceMediaView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.embedUrl != widget.embedUrl && _frame != null) {
      setState(() {
        _loading = true;
        _failed = false;
      });
      _frame!.src = widget.embedUrl;
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_failed) {
      return ColoredBox(
        color: Colors.black,
        child: Center(
          child: Icon(Icons.videocam_off_rounded, color: Colors.white.withValues(alpha: 0.5), size: widget.compact ? 22 : 36),
        ),
      );
    }
    final spinner = widget.compact ? 14.0 : 28.0;
    return Stack(
      fit: StackFit.expand,
      children: [
        HtmlElementView(viewType: _viewType),
        if (_loading)
          ColoredBox(
            color: Colors.black45,
            child: Center(
              child: SizedBox(
                width: spinner,
                height: spinner,
                child: const CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
              ),
            ),
          ),
      ],
    );
  }
}
