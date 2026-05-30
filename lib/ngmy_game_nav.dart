import 'package:flutter/material.dart';

/// Pops [count] routes using a [NavigatorState] captured before dialogs close.
void ngmyPopRouteCount(NavigatorState nav, int count) {
  for (var i = 0; i < count; i++) {
    if (!nav.canPop()) return;
    nav.pop();
  }
}

/// Close result dialog, then run navigation after the dialog route is gone.
void ngmyCloseDialogThen(VoidCallback afterDialogClosed) {
  WidgetsBinding.instance.addPostFrameCallback((_) {
    WidgetsBinding.instance.addPostFrameCallback((_) => afterDialogClosed());
  });
}
