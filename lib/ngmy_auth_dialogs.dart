import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_supabase_auth.dart';
import 'utils.dart';

/// Modern confirmation before clearing all local app data.
Future<void> showNgmyResetAppDataDialog(BuildContext context) async {
  final confirm = await showDialog<bool>(
    context: context,
    barrierDismissible: true,
    builder: (ctx) => const _NgmyResetAppDataDialog(),
  );
  if (confirm != true || !context.mounted) return;
  final p = await SharedPreferences.getInstance();
  await p.clear();
  if (!context.mounted) return;
  ScaffoldMessenger.of(context).showSnackBar(
    const SnackBar(content: Text('System reset complete. Please restart the app.')),
  );
}

class _NgmyResetAppDataDialog extends StatefulWidget {
  const _NgmyResetAppDataDialog();

  @override
  State<_NgmyResetAppDataDialog> createState() => _NgmyResetAppDataDialogState();
}

class _NgmyResetAppDataDialogState extends State<_NgmyResetAppDataDialog> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  late final Animation<double> _glow;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
    _glow = Tween<double>(begin: 0.18, end: 0.38).animate(CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut));
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const accent = Color(0xFFF59E0B);
    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 28, vertical: 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 340),
          child: AnimatedBuilder(
            animation: _ctrl,
            builder: (context, _) {
              return DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(22),
                  boxShadow: [
                    BoxShadow(color: accent.withOpacity(_glow.value), blurRadius: 18, offset: const Offset(0, 8)),
                    BoxShadow(color: Colors.black.withOpacity(0.28), blurRadius: 14, offset: const Offset(0, 10)),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(22),
                  child: Material(
                    color: const Color(0xFF1C1917),
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Container(
                            width: 52,
                            height: 52,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: RadialGradient(colors: [accent.withOpacity(0.5), Colors.transparent]),
                              border: Border.all(color: accent.withOpacity(0.55)),
                            ),
                            child: const Icon(Icons.restart_alt_rounded, color: accent, size: 28),
                          ),
                          const SizedBox(height: 14),
                          const Text(
                            'Reset local data?',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
                          ),
                          const SizedBox(height: 10),
                          Text(
                            'This clears saved data on this device and signs everyone out. Only use this if the app is stuck loading or login fails.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white.withOpacity(0.72), fontSize: 13, height: 1.45),
                          ),
                          const SizedBox(height: 18),
                          Row(
                            children: [
                              Expanded(
                                child: OutlinedButton(
                                  onPressed: () => Navigator.pop(context, false),
                                  style: OutlinedButton.styleFrom(
                                    foregroundColor: Colors.white70,
                                    side: BorderSide(color: Colors.white.withOpacity(0.2)),
                                    padding: const EdgeInsets.symmetric(vertical: 13),
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                  child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                                ),
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: ElevatedButton(
                                  onPressed: () => Navigator.pop(context, true),
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: accent,
                                    foregroundColor: Colors.black,
                                    padding: const EdgeInsets.symmetric(vertical: 13),
                                    elevation: 0,
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                  child: const Text('Reset', style: TextStyle(fontWeight: FontWeight.w900)),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}

/// Modern forgot-password flow (email code + new password).
Future<void> showNgmyForgotPasswordDialog(
  BuildContext context, {
  required String initialEmail,
  required Iterable<String> knownEmails,
  required Future<bool> Function(String email, String passwordHash) onResetPasswordByEmail,
}) {
  return showDialog<void>(
    context: context,
    barrierDismissible: false,
    builder: (_) => _NgmyForgotPasswordDialog(
      initialEmail: initialEmail,
      knownEmails: knownEmails,
      onResetPasswordByEmail: onResetPasswordByEmail,
    ),
  );
}

class _NgmyForgotPasswordDialog extends StatefulWidget {
  const _NgmyForgotPasswordDialog({
    required this.initialEmail,
    required this.knownEmails,
    required this.onResetPasswordByEmail,
  });

  final String initialEmail;
  final Iterable<String> knownEmails;
  final Future<bool> Function(String email, String passwordHash) onResetPasswordByEmail;

  @override
  State<_NgmyForgotPasswordDialog> createState() => _NgmyForgotPasswordDialogState();
}

class _NgmyForgotPasswordDialogState extends State<_NgmyForgotPasswordDialog> with SingleTickerProviderStateMixin {
  late final TextEditingController _emailCtl;
  late final TextEditingController _codeCtl;
  late final TextEditingController _newPwCtl;
  late final TextEditingController _confirmCtl;
  late final AnimationController _ctrl;
  int _step = 1;
  bool _loading = false;

  @override
  void initState() {
    super.initState();
    _emailCtl = TextEditingController(text: widget.initialEmail);
    _codeCtl = TextEditingController();
    _newPwCtl = TextEditingController();
    _confirmCtl = TextEditingController();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _emailCtl.dispose();
    _codeCtl.dispose();
    _newPwCtl.dispose();
    _confirmCtl.dispose();
    _ctrl.dispose();
    super.dispose();
  }

  InputDecoration _field(String label, {bool obscure = false}) {
    return InputDecoration(
      labelText: label,
      filled: true,
      fillColor: Colors.white.withOpacity(0.06),
      labelStyle: TextStyle(color: Colors.white.withOpacity(0.65)),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: Colors.white.withOpacity(0.14)),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: const BorderSide(color: Color(0xFF9D7AFF), width: 1.4),
      ),
    );
  }

  Future<void> _sendCode() async {
    final email = _emailCtl.text.toLowerCase().trim();
    if (email.isEmpty || !email.endsWith('@gmail.com')) {
      _toast('Enter a valid Gmail address');
      return;
    }
    setState(() => _loading = true);
    try {
      await ngmyWaitForSupabaseReady();
      final existsInApp = widget.knownEmails.any((e) => e.toLowerCase().trim() == email);
      Map<String, dynamic>? row;
      try {
        row = await ngmyFetchUserLoginRow(Supabase.instance.client, email);
      } catch (_) {}
      final oauthLinked = row != null && (row['isAppLoginAccount'] == true || row['is_app_login_account'] == true);
      var shouldCreateUser = !existsInApp && row == null;
      if (oauthLinked || existsInApp || row != null) shouldCreateUser = false;
      try {
        await Supabase.instance.client.auth.signInWithOtp(email: email, shouldCreateUser: shouldCreateUser);
      } catch (otpErr) {
        if (!shouldCreateUser) {
          await Supabase.instance.client.auth.signInWithOtp(email: email, shouldCreateUser: true);
        } else {
          rethrow;
        }
      }
      if (!mounted) return;
      setState(() {
        _loading = false;
        _step = 2;
      });
      _toast('Code sent to $email. Check inbox and spam.', success: true);
    } catch (e) {
      if (!mounted) return;
      setState(() => _loading = false);
      final err = e.toString().toLowerCase();
      if (err.contains('rate') || err.contains('too many') || err.contains('over_email_send_rate_limit')) {
        _toast('Too many emails. Wait about an hour and try again.');
      } else if (err.contains('signup') && err.contains('disabled')) {
        _toast('Email signup is disabled in Supabase settings.');
      } else {
        _toast(e.toString());
      }
    }
  }

  Future<void> _verifyAndReset() async {
    final email = _emailCtl.text.toLowerCase().trim();
    final code = _codeCtl.text.trim();
    final pw = _newPwCtl.text;
    final confirm = _confirmCtl.text;
    if (code.length < 6) {
      _toast('Enter the 6-digit code');
      return;
    }
    if (pw.length < 6) {
      _toast('Password must be at least 6 characters');
      return;
    }
    if (pw != confirm) {
      _toast('Passwords do not match');
      return;
    }
    setState(() => _loading = true);
    try {
      await Supabase.instance.client.auth.verifyOTP(type: OtpType.email, email: email, token: code);
      try {
        await Supabase.instance.client.auth.updateUser(UserAttributes(password: pw));
      } catch (_) {}
      final ok = await widget.onResetPasswordByEmail(email, hashPassword(pw));
      try {
        await Supabase.instance.client.auth.signOut();
      } catch (_) {}
      if (!mounted) return;
      Navigator.pop(context);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            ok ? 'Password updated! Log in with your new password.' : 'Password updated but profile not found. Sign up first.',
          ),
          backgroundColor: ok ? const Color(0xFF00B25A) : Colors.orange,
        ),
      );
    } catch (e) {
      if (!mounted) return;
      setState(() => _loading = false);
      _toast('Verification failed: $e');
    }
  }

  void _toast(String msg, {bool success = false}) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(msg), backgroundColor: success ? const Color(0xFF00B25A) : null),
    );
  }

  @override
  Widget build(BuildContext context) {
    const accent = Color(0xFF7C3AED);
    final glow = Tween<double>(begin: 0.2, end: 0.42).animate(CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut));

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 22, vertical: 20),
      child: AnimatedBuilder(
        animation: _ctrl,
        builder: (context, _) {
          final tilt = math.sin(_ctrl.value * math.pi * 2) * 0.01;
          return Transform(
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.001)
              ..rotateX(tilt)
              ..rotateY(tilt * 0.5),
            alignment: Alignment.center,
            child: DecoratedBox(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                boxShadow: [
                  BoxShadow(color: accent.withOpacity(glow.value), blurRadius: 20, offset: const Offset(0, 8)),
                  BoxShadow(color: Colors.black.withOpacity(0.32), blurRadius: 16, offset: const Offset(0, 12)),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(24),
                child: Material(
                  color: const Color(0xFF12101C),
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 400, maxHeight: 560),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.fromLTRB(20, 18, 12, 16),
                          decoration: const BoxDecoration(
                            gradient: LinearGradient(
                              colors: [Color(0xFF4C1D95), Color(0xFF6D28D9), Color(0xFF312E81)],
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                            ),
                          ),
                          child: Row(
                            children: [
                              Container(
                                padding: const EdgeInsets.all(10),
                                decoration: BoxDecoration(
                                  color: Colors.white.withOpacity(0.14),
                                  borderRadius: BorderRadius.circular(14),
                                ),
                                child: const Icon(Icons.lock_reset_rounded, color: Colors.white, size: 24),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      _step == 1 ? 'Reset password' : 'Verify & set password',
                                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17),
                                    ),
                                    const SizedBox(height: 2),
                                    Text(
                                      _step == 1 ? 'We email you a 6-digit code' : 'Enter code and choose a new password',
                                      style: TextStyle(color: Colors.white.withOpacity(0.78), fontSize: 12),
                                    ),
                                  ],
                                ),
                              ),
                              IconButton(
                                onPressed: _loading ? null : () => Navigator.pop(context),
                                icon: const Icon(Icons.close_rounded, color: Colors.white70),
                              ),
                            ],
                          ),
                        ),
                        Flexible(
                          child: SingleChildScrollView(
                            padding: const EdgeInsets.fromLTRB(20, 18, 20, 8),
                            child: Column(
                              children: _step == 1
                                  ? [
                                      TextField(
                                        controller: _emailCtl,
                                        keyboardType: TextInputType.emailAddress,
                                        style: const TextStyle(color: Colors.white),
                                        decoration: _field('Gmail address'),
                                      ),
                                    ]
                                  : [
                                      Text(
                                        'Code sent to ${_emailCtl.text}',
                                        style: TextStyle(color: Colors.white.withOpacity(0.65), fontSize: 12),
                                      ),
                                      const SizedBox(height: 14),
                                      TextField(
                                        controller: _codeCtl,
                                        keyboardType: TextInputType.number,
                                        maxLength: 6,
                                        style: const TextStyle(color: Colors.white, letterSpacing: 4),
                                        decoration: _field('6-digit code'),
                                      ),
                                      const SizedBox(height: 12),
                                      TextField(
                                        controller: _newPwCtl,
                                        obscureText: true,
                                        style: const TextStyle(color: Colors.white),
                                        decoration: _field('New password (min 6 chars)', obscure: true),
                                      ),
                                      const SizedBox(height: 12),
                                      TextField(
                                        controller: _confirmCtl,
                                        obscureText: true,
                                        style: const TextStyle(color: Colors.white),
                                        decoration: _field('Confirm password', obscure: true),
                                      ),
                                      Align(
                                        alignment: Alignment.centerLeft,
                                        child: TextButton(
                                          onPressed: _loading ? null : _sendCode,
                                          child: const Text('Resend code'),
                                        ),
                                      ),
                                    ],
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(20, 4, 20, 18),
                          child: Row(
                            children: [
                              Expanded(
                                child: OutlinedButton(
                                  onPressed: _loading ? null : () => Navigator.pop(context),
                                  style: OutlinedButton.styleFrom(
                                    foregroundColor: Colors.white70,
                                    side: BorderSide(color: Colors.white.withOpacity(0.18)),
                                    padding: const EdgeInsets.symmetric(vertical: 13),
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                  child: const Text('Cancel'),
                                ),
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                flex: 2,
                                child: ElevatedButton(
                                  onPressed: _loading ? null : (_step == 1 ? _sendCode : _verifyAndReset),
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: accent,
                                    foregroundColor: Colors.white,
                                    padding: const EdgeInsets.symmetric(vertical: 13),
                                    elevation: 0,
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                  child: _loading
                                      ? const SizedBox(
                                          width: 20,
                                          height: 20,
                                          child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                                        )
                                      : Text(
                                          _step == 1 ? 'Send code' : 'Update password',
                                          style: const TextStyle(fontWeight: FontWeight.w800),
                                        ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
