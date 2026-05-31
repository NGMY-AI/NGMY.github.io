import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_web_status_bar.dart';

/// Keeps Flutter web layout in sync with the mobile browser viewport on cold start.
class NgmyWebViewportGuard extends StatefulWidget {
  const NgmyWebViewportGuard({super.key, required this.child});

  final Widget child;

  @override
  State<NgmyWebViewportGuard> createState() => _NgmyWebViewportGuardState();
}

class _NgmyWebViewportGuardState extends State<NgmyWebViewportGuard> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    if (!kIsWeb) return;
    WidgetsBinding.instance.addObserver(this);
    ngmyInstallWebViewportSync();
    _scheduleLayoutSync();
  }

  void _scheduleLayoutSync() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      setState(() {});
    });
    for (final delay in const [50, 150, 400, 1000, 2000]) {
      Future<void>.delayed(Duration(milliseconds: delay), () {
        if (mounted) setState(() {});
      });
    }
  }

  @override
  void dispose() {
    if (kIsWeb) WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeMetrics() {
    if (kIsWeb && mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
