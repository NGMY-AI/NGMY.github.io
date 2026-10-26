import 'dart:async';

import 'package:flutter/material.dart';

bool ngmyUserPhoneOnFile(String phone) {
  final digits = phone.replaceAll(RegExp(r'[^\d]'), '');
  return digits.length >= 10;
}

/// Cloud is the cross-device source of truth when valid; otherwise keep local.
String ngmyMergeAccountPhone({required String local, required String remote}) {
  final localTrim = local.trim();
  final remoteTrim = remote.trim();
  final localOk = ngmyUserPhoneOnFile(localTrim);
  final remoteOk = ngmyUserPhoneOnFile(remoteTrim);
  if (remoteOk) return remoteTrim;
  if (localOk) return localTrim;
  return remoteTrim.isNotEmpty ? remoteTrim : localTrim;
}

String ngmyFormatPhoneDisplay(String phone) {
  final digits = phone.replaceAll(RegExp(r'[^\d]'), '');
  if (digits.length == 10) {
    return '(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}';
  }
  if (digits.length == 11 && digits.startsWith('1')) {
    final d = digits.substring(1);
    return '+1 (${d.substring(0, 3)}) ${d.substring(3, 6)}-${d.substring(6)}';
  }
  return phone.trim();
}

/// Kept for call-sites compatibility. Phone is collected in Profile → Contact
/// (no blocking popup on app entry).
class NgmyPhoneRequiredGate extends StatefulWidget {
  const NgmyPhoneRequiredGate({
    super.key,
    required this.phone,
    required this.email,
    required this.onSavePhone,
    required this.child,
    this.onResolvePhoneFromCloud,
  });

  final String phone;
  final String email;
  final Future<bool> Function(String phone) onSavePhone;
  final Future<String?> Function()? onResolvePhoneFromCloud;
  final Widget child;

  @override
  State<NgmyPhoneRequiredGate> createState() => _NgmyPhoneRequiredGateState();
}

class _NgmyPhoneRequiredGateState extends State<NgmyPhoneRequiredGate> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    // The phone lives in the account in the cloud: fetch it when the app opens and keep checking, so every
    // device shows the same number and a number typed on another phone appears here too.
    WidgetsBinding.instance.addPostFrameCallback((_) => _resolve());
    _timer = Timer.periodic(const Duration(minutes: 2), (_) => _resolve());
  }

  Future<void> _resolve() async {
    if (!mounted) return;
    try {
      await widget.onResolvePhoneFromCloud?.call();
    } catch (_) {}
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => widget.child;
}
