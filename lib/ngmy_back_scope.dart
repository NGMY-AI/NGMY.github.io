import 'package:flutter/material.dart';

/// Lets system back go to previous in-screen tab before leaving the route.
class NgmyTabBackScope extends StatelessWidget {
  const NgmyTabBackScope({
    super.key,
    required this.activeTab,
    required this.onTabBack,
    required this.child,
  });

  final int activeTab;
  final VoidCallback onTabBack;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: activeTab <= 0,
      onPopInvokedWithResult: (didPop, result) {
        if (didPop) return;
        if (activeTab > 0) onTabBack();
      },
      child: child,
    );
  }
}
