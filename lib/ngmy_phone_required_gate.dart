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
class NgmyPhoneRequiredGate extends StatelessWidget {
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
  Widget build(BuildContext context) => child;
}
