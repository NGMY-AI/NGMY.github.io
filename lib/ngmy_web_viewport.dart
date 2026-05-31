import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Keeps Flutter web layout in sync with the mobile browser viewport on cold start.
///
/// On iOS Safari / PWA, the first paint can misalign touch coordinates until the
/// visual viewport settles. Rebuilding after metrics change fixes taps landing
/// above buttons until the user navigates away and back.
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
    _scheduleLayoutSync();
  }

  void _scheduleLayoutSync() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      setState(() {});
    });
    for (final delay in const [50, 150, 400, 1000]) {
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
