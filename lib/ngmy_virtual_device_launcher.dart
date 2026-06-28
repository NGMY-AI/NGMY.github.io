import 'package:flutter/material.dart';

import 'ngmy_virtual_device.dart' deferred as vdevice;

/// Opens Virtual Device on demand so heavy iframe/WebView code never loads at app startup.
Future<void> openNgmyVirtualDevice({
  required BuildContext context,
  String? userEmail,
}) async {
  await vdevice.loadLibrary();
  if (!context.mounted) return;
  vdevice.showNgmyVirtualDevice(context: context, userEmail: userEmail);
}

Future<void> openNgmyVirtualDeviceLinkSearch(
  BuildContext context, {
  required int deviceCount,
}) async {
  await vdevice.loadLibrary();
  if (!context.mounted) return;
  return vdevice.showNgmyVirtualDeviceLinkSearch(context, deviceCount: deviceCount);
}
