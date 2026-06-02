import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_web_status_bar.dart';

/// Web-only: one-time viewport scroll fix. Does not call [setState] (that caused blink loops).
class NgmyWebViewportGuard extends StatefulWidget {
  const NgmyWebViewportGuard({super.key, required this.child});

  final Widget child;

  @override
  State<NgmyWebViewportGuard> createState() => _NgmyWebViewportGuardState();
}

class _NgmyWebViewportGuardState extends State<NgmyWebViewportGuard> {
  @override
  void initState() {
    super.initState();
    if (kIsWeb) {
      ngmyInstallWebViewportSync();
    }
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
