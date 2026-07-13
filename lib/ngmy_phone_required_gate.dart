import 'dart:ui';

import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';
import 'package:flutter/services.dart';

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

/// Blocks the app until the signed-in user saves a valid phone number on their account.
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
  final _phoneC = TextEditingController();
  final _focusNode = FocusNode();
  bool _saving = false;
  bool _resolvingCloud = false;
  String _resolvedPhone = '';

  @override
  void initState() {
    super.initState();
    _resolvedPhone = widget.phone.trim();
    _phoneC.text = _resolvedPhone;
    _resolveFromCloudIfNeeded();
  }

  @override
  void didUpdateWidget(covariant NgmyPhoneRequiredGate oldWidget) {
    super.didUpdateWidget(oldWidget);
    final next = widget.phone.trim();
    if (next != oldWidget.phone.trim() && ngmyUserPhoneOnFile(next)) {
      _resolvedPhone = next;
      if (_phoneC.text.trim() != next) _phoneC.text = next;
    } else if (!ngmyUserPhoneOnFile(_resolvedPhone) && ngmyUserPhoneOnFile(next)) {
      _resolvedPhone = next;
      _phoneC.text = next;
    }
  }

  @override
  void dispose() {
    _phoneC.dispose();
    _focusNode.dispose();
    super.dispose();
  }

  bool get _phoneOnFile => ngmyUserPhoneOnFile(_resolvedPhone.isNotEmpty ? _resolvedPhone : widget.phone);

  Future<void> _resolveFromCloudIfNeeded() async {
    if (_phoneOnFile) return;
    final resolver = widget.onResolvePhoneFromCloud;
    if (resolver == null) return;
    setState(() => _resolvingCloud = true);
    try {
      final cloudPhone = (await resolver())?.trim() ?? '';
      if (!mounted) return;
      if (ngmyUserPhoneOnFile(cloudPhone)) {
        setState(() {
          _resolvedPhone = cloudPhone;
          _phoneC.text = cloudPhone;
        });
      }
    } finally {
      if (mounted) setState(() => _resolvingCloud = false);
    }
  }

  Future<void> _save() async {
    final phone = _phoneC.text.trim();
    if (!ngmyUserPhoneOnFile(phone)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter a valid phone number (at least 10 digits).')),
      );
      return;
    }
    setState(() => _saving = true);
    try {
      final ok = await widget.onSavePhone(phone);
      if (!mounted) return;
      if (ok) {
        setState(() => _resolvedPhone = phone);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not save phone. It may already be registered to another account.')),
        );
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_phoneOnFile) return widget.child;

    final isDark = Theme.of(context).brightness == Brightness.dark;
    const brand = Color(0xFF00B25A);
    const accent = Color(0xFF2563EB);

    return Stack(
      children: [
        IgnorePointer(child: widget.child),
        Positioned.fill(
          child: ColoredBox(
            color: isDark ? const Color(0xF0050810) : const Color(0xF5F7FB),
            child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 10,
              child: SafeArea(
                child: Center(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 28),
                    child: ConstrainedBox(
                      constraints: const BoxConstraints(maxWidth: 420),
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(28),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withOpacity(isDark ? 0.45 : 0.14),
                              blurRadius: 36,
                              offset: const Offset(0, 16),
                            ),
                          ],
                        ),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(28),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Container(
                                width: double.infinity,
                                padding: const EdgeInsets.fromLTRB(22, 18, 22, 20),
                                decoration: BoxDecoration(
                                  gradient: LinearGradient(
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                    colors: isDark
                                        ? [const Color(0xFF0F3D2E), const Color(0xFF1E3A5F)]
                                        : [const Color(0xFF00B25A), const Color(0xFF2563EB)],
                                  ),
                                ),
                                child: Column(
                                  children: [
                                    Container(
                                      width: 64,
                                      height: 64,
                                      decoration: BoxDecoration(
                                        color: Colors.white.withOpacity(0.18),
                                        shape: BoxShape.circle,
                                        border: Border.all(color: Colors.white.withOpacity(0.35), width: 1.5),
                                      ),
                                      child: const Icon(Icons.contact_phone_rounded, color: Colors.white, size: 32),
                                    ),
                                    const SizedBox(height: 14),
                                    const Text(
                                      'Add your phone number',
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        fontSize: 22,
                                        fontWeight: FontWeight.w900,
                                        color: Colors.white,
                                        letterSpacing: 0.2,
                                        decoration: TextDecoration.none,
                                      ),
                                    ),
                                    const SizedBox(height: 6),
                                    Text(
                                      'One number for your NGMY account on every device.',
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        fontSize: 13,
                                        height: 1.35,
                                        color: Colors.white.withOpacity(0.9),
                                        decoration: TextDecoration.none,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Container(
                                width: double.infinity,
                                color: isDark ? const Color(0xFF121826) : Colors.white,
                                padding: const EdgeInsets.fromLTRB(22, 20, 22, 22),
                                child: DefaultTextStyle(
                                  style: TextStyle(
                                    decoration: TextDecoration.none,
                                    color: isDark ? Colors.white : const Color(0xFF0F172A),
                                  ),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.stretch,
                                    children: [
                                      if (widget.email.trim().isNotEmpty)
                                        Container(
                                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                                          decoration: BoxDecoration(
                                            color: isDark ? const Color(0xFF1A2233) : const Color(0xFFF1F5F9),
                                            borderRadius: BorderRadius.circular(14),
                                            border: Border.all(
                                              color: isDark ? Colors.white12 : const Color(0xFFE2E8F0),
                                            ),
                                          ),
                                          child: Row(
                                            children: [
                                              Icon(Icons.mark_email_read_outlined, size: 18, color: isDark ? Colors.white60 : Colors.black45),
                                              const SizedBox(width: 10),
                                              Expanded(
                                                child: Text(
                                                  widget.email.trim(),
                                                  style: TextStyle(
                                                    fontSize: 13,
                                                    fontWeight: FontWeight.w600,
                                                    color: isDark ? Colors.white70 : const Color(0xFF334155),
                                                    decoration: TextDecoration.none,
                                                  ),
                                                  overflow: TextOverflow.ellipsis,
                                                ),
                                              ),
                                            ],
                                          ),
                                        ),
                                      if (widget.email.trim().isNotEmpty) const SizedBox(height: 14),
                                      if (_resolvingCloud)
                                        Padding(
                                          padding: const EdgeInsets.only(bottom: 14),
                                          child: Row(
                                            mainAxisAlignment: MainAxisAlignment.center,
                                            children: [
                                              SizedBox(
                                                width: 16,
                                                height: 16,
                                                child: CircularProgressIndicator(
                                                  strokeWidth: 2,
                                                  color: isDark ? brand : accent,
                                                ),
                                              ),
                                              const SizedBox(width: 10),
                                              Text(
                                                'Checking your saved number…',
                                                style: TextStyle(
                                                  fontSize: 12,
                                                  color: isDark ? Colors.white60 : Colors.black54,
                                                  decoration: TextDecoration.none,
                                                ),
                                              ),
                                            ],
                                          ),
                                        ),
                                      Text(
                                        'Required for account security and support. You can update it anytime in Profile.',
                                        style: TextStyle(
                                          fontSize: 13,
                                          height: 1.45,
                                          color: isDark ? Colors.white70 : const Color(0xFF475569),
                                          decoration: TextDecoration.none,
                                        ),
                                      ),
                                      const SizedBox(height: 16),
                                      TextField(
                                        controller: _phoneC,
                                        focusNode: _focusNode,
                                        keyboardType: TextInputType.phone,
                                        textInputAction: TextInputAction.done,
                                        onSubmitted: (_) => _saving ? null : _save(),
                                        autocorrect: false,
                                        enableSuggestions: false,
                                        spellCheckConfiguration: const SpellCheckConfiguration.disabled(),
                                        style: TextStyle(
                                          fontSize: 17,
                                          fontWeight: FontWeight.w600,
                                          letterSpacing: 0.3,
                                          decoration: TextDecoration.none,
                                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                                        ),
                                        inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[\d+\-\(\)\s]'))],
                                        decoration: InputDecoration(
                                          labelText: 'Mobile phone',
                                          hintText: '(555) 123-4567',
                                          prefixIcon: Icon(Icons.phone_in_talk_rounded, color: isDark ? brand : accent),
                                          filled: true,
                                          fillColor: isDark ? const Color(0xFF1A2233) : const Color(0xFFF8FAFC),
                                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
                                          enabledBorder: OutlineInputBorder(
                                            borderRadius: BorderRadius.circular(16),
                                            borderSide: BorderSide(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderRadius: BorderRadius.circular(16),
                                            borderSide: BorderSide(color: isDark ? brand : accent, width: 1.8),
                                          ),
                                          labelStyle: TextStyle(
                                            decoration: TextDecoration.none,
                                            color: isDark ? Colors.white60 : Colors.black54,
                                          ),
                                        ),
                                      ),
                                      const SizedBox(height: 12),
                                      Row(
                                        children: [
                                          Icon(Icons.cloud_done_outlined, size: 16, color: isDark ? brand : accent),
                                          const SizedBox(width: 8),
                                          Expanded(
                                            child: Text(
                                              'Saved to your account and synced across devices.',
                                              style: TextStyle(
                                                fontSize: 11.5,
                                                height: 1.35,
                                                color: isDark ? Colors.white54 : const Color(0xFF64748B),
                                                decoration: TextDecoration.none,
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                      const SizedBox(height: 18),
                                      FilledButton(
                                        onPressed: (_saving || _resolvingCloud) ? null : _save,
                                        style: FilledButton.styleFrom(
                                          backgroundColor: brand,
                                          foregroundColor: Colors.white,
                                          disabledBackgroundColor: brand.withOpacity(0.45),
                                          padding: const EdgeInsets.symmetric(vertical: 15),
                                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                                          elevation: 0,
                                        ),
                                        child: _saving
                                            ? const SizedBox(
                                                width: 22,
                                                height: 22,
                                                child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                                              )
                                            : const Text(
                                                'Save & continue',
                                                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, decoration: TextDecoration.none),
                                              ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
