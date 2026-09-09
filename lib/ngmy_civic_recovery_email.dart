import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_hud_tech_shell.dart';
import 'ngmy_password_reset_otp.dart';
import 'ngmy_supabase_auth.dart';
import 'utils.dart';

const _kSavedEmailsPref = 'ngmy_saved_login_emails_v1';

class NgmyCivicInboxCode {
  const NgmyCivicInboxCode({
    required this.purpose,
    required this.code,
    required this.at,
    required this.expiresAt,
  });

  final String purpose;
  final String code;
  final String at;
  final String expiresAt;

  String get purposeLabel {
    switch (purpose) {
      case 'password_reset':
        return 'Password reset';
      case 'change_email':
        return 'Change email';
      case 'verify':
        return 'Verify';
      default:
        return purpose;
    }
  }

  String get expiresLabel {
    final exp = DateTime.tryParse(expiresAt);
    if (exp == null) return '';
    final mins = exp.difference(DateTime.now()).inMinutes;
    if (mins <= 0) return 'Expired';
    return '${mins}m left';
  }
}

class NgmyCivicRecoveryStatus {
  const NgmyCivicRecoveryStatus({
    required this.emails,
    required this.codes,
    this.error,
  });

  final List<String> emails;
  final List<NgmyCivicInboxCode> codes;
  final String? error;
}

List<String> _emailsFrom(dynamic raw) {
  final out = <String>[];
  void push(dynamic v) {
    final e = v.toString().trim().toLowerCase();
    if (e.contains('@') && !out.contains(e)) out.add(e);
  }

  if (raw is List) {
    for (final v in raw) {
      push(v);
    }
  } else if (raw is Map) {
    final nested = raw['emails'];
    if (nested is List) {
      for (final v in nested) {
        push(v);
      }
    } else {
      push(raw['email']);
    }
  } else if (raw != null) {
    push(raw);
  }
  return out.take(3).toList();
}

Future<List<String>> _localSavedEmails(String owner) async {
  final p = await SharedPreferences.getInstance();
  final key = owner.trim().toLowerCase();
  final raw = p.getString('$_kSavedEmailsPref:$key') ?? p.getString(_kSavedEmailsPref);
  if (raw == null || raw.isEmpty) return const [];
  try {
    return _emailsFrom(jsonDecode(raw));
  } catch (_) {
    return _emailsFrom(raw);
  }
}

Future<void> _writeLocalSavedEmails(String owner, List<String> emails) async {
  final p = await SharedPreferences.getInstance();
  final key = owner.trim().toLowerCase();
  final encoded = jsonEncode(emails.take(3).toList());
  if (key.contains('@')) {
    await p.setString('$_kSavedEmailsPref:$key', encoded);
  }
  await p.setString(_kSavedEmailsPref, encoded);
}

List<NgmyCivicInboxCode> _codesFrom(dynamic raw) {
  if (raw is! List) return const [];
  final out = <NgmyCivicInboxCode>[];
  for (final row in raw) {
    if (row is! Map) continue;
    final code = (row['code'] ?? '').toString().trim();
    if (code.length < 6) continue;
    out.add(
      NgmyCivicInboxCode(
        purpose: (row['purpose'] ?? 'verify').toString(),
        code: code,
        at: (row['at'] ?? '').toString(),
        expiresAt: (row['expiresAt'] ?? '').toString(),
      ),
    );
  }
  return out;
}

Future<NgmyCivicRecoveryStatus> ngmyCivicRecoveryLoad({String? accountEmail}) async {
  final owner = (accountEmail ??
          Supabase.instance.client.auth.currentUser?.email ??
          '')
      .trim()
      .toLowerCase();
  final local = await _localSavedEmails(owner);
  try {
    await ngmyWaitForSupabaseReady();
    final data = await ngmyEdgeInvoke(
      {'action': 'civicRecoveryStatus'},
      timeout: const Duration(seconds: 20),
    );
    if (data == null) {
      return NgmyCivicRecoveryStatus(
        emails: local,
        codes: const [],
        error: local.isEmpty ? 'Could not reach the server.' : null,
      );
    }
    if (data['ok'] != true) {
      return NgmyCivicRecoveryStatus(
        emails: local,
        codes: const [],
        error: local.isEmpty ? (data['error'] ?? 'Could not load login emails.').toString() : null,
      );
    }
    final emails = _emailsFrom(data['emails']);
    if (emails.isEmpty) {
      emails.addAll(_emailsFrom(data['email']));
    }
    if (emails.isEmpty && local.isNotEmpty) {
      for (final email in local) {
        await ngmyCivicRecoveryEmailSave(email);
      }
      emails.addAll(local);
    }
    if (emails.isNotEmpty) {
      await _writeLocalSavedEmails(owner, emails);
    }
    return NgmyCivicRecoveryStatus(
      emails: emails.isNotEmpty ? emails : local,
      codes: _codesFrom(data['codes']),
    );
  } catch (e) {
    debugPrint('[codes inbox] status: $e');
    return NgmyCivicRecoveryStatus(
      emails: local,
      codes: const [],
      error: local.isEmpty ? 'Could not load login emails.' : null,
    );
  }
}

Future<String?> ngmyCivicRecoveryEmailLoad() async {
  final status = await ngmyCivicRecoveryLoad();
  if (status.emails.isEmpty) return null;
  return status.emails.first;
}

Future<({bool ok, List<String> emails, String? error})> ngmyCivicRecoveryEmailSave(String email) async {
  final key = email.trim().toLowerCase();
  if (key.isEmpty || !key.contains('@')) {
    return (ok: false, emails: const <String>[], error: 'Enter a valid login email.');
  }
  try {
    await ngmyWaitForSupabaseReady();
    final data = await ngmyEdgeInvoke(
      {'action': 'civicRecoveryLink', 'civicEmail': key},
      timeout: const Duration(seconds: 25),
    );
    if (data == null) {
      return (ok: false, emails: const <String>[], error: 'Could not reach the server.');
    }
    if (data['ok'] == true) {
      final emails = _emailsFrom(data['emails']);
      final owner = (Supabase.instance.client.auth.currentUser?.email ?? key).trim().toLowerCase();
      await _writeLocalSavedEmails(owner, emails.isNotEmpty ? emails : [key]);
      return (ok: true, emails: emails.isNotEmpty ? emails : [key], error: null);
    }
    return (
      ok: false,
      emails: const <String>[],
      error: (data['error'] ?? 'Could not save this email.').toString(),
    );
  } catch (e) {
    debugPrint('[codes inbox] save: $e');
    return (ok: false, emails: const <String>[], error: 'Could not save this email.');
  }
}

Future<({bool ok, List<String> emails, String? error})> ngmyCivicRecoveryEmailRemove(String email) async {
  final key = email.trim().toLowerCase();
  try {
    await ngmyWaitForSupabaseReady();
    final data = await ngmyEdgeInvoke(
      {'action': 'civicRecoveryRemove', 'civicEmail': key},
      timeout: const Duration(seconds: 20),
    );
    if (data == null) {
      return (ok: false, emails: const <String>[], error: 'Could not reach the server.');
    }
    if (data['ok'] == true) {
      final emails = _emailsFrom(data['emails']);
      final owner = (Supabase.instance.client.auth.currentUser?.email ?? key).trim().toLowerCase();
      await _writeLocalSavedEmails(owner, emails);
      return (ok: true, emails: emails, error: null);
    }
    return (
      ok: false,
      emails: const <String>[],
      error: (data['error'] ?? 'Could not remove this email.').toString(),
    );
  } catch (e) {
    debugPrint('[codes inbox] remove: $e');
    return (ok: false, emails: const <String>[], error: 'Could not remove this email.');
  }
}

Future<({bool ok, String? error})> ngmyCivicRecoveryIssueCode(String purpose) async {
  try {
    await ngmyWaitForSupabaseReady();
    final data = await ngmyEdgeInvoke(
      {'action': 'civicRecoveryIssue', 'purpose': purpose},
      timeout: const Duration(seconds: 25),
    );
    if (data == null) return (ok: false, error: 'Could not reach the server.');
    if (data['ok'] == true) return (ok: true, error: null);
    return (ok: false, error: (data['error'] ?? 'Could not create a code.').toString());
  } catch (e) {
    debugPrint('[codes inbox] issue: $e');
    return (ok: false, error: 'Could not create a code.');
  }
}

Future<void> showNgmyCivicRecoveryEmailDialog(
  BuildContext context, {
  String? accountEmail,
}) async {
  final signedIn = Supabase.instance.client.auth.currentSession != null;
  if (!signedIn) {
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Sign in first, then tap the profile icon.')),
    );
    return;
  }
  await Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyCodesInboxPage(accountEmail: accountEmail),
    ),
  );
}

class NgmyCodesInboxPage extends StatefulWidget {
  const NgmyCodesInboxPage({super.key, this.accountEmail});

  final String? accountEmail;

  @override
  State<NgmyCodesInboxPage> createState() => _NgmyCodesInboxPageState();
}

class _NgmyCodesInboxPageState extends State<NgmyCodesInboxPage> with WidgetsBindingObserver {
  static const _colors = [Color(0xFF22D3EE), Color(0xFF8B5CF6)];

  var _loading = true;
  var _busy = false;
  var _emails = <String>[];
  var _codes = <NgmyCivicInboxCode>[];
  String? _error;
  Timer? _refreshTimer;

  String get _loginEmail {
    final fromAccount = (widget.accountEmail ?? '').trim().toLowerCase();
    if (fromAccount.contains('@')) return fromAccount;
    return (Supabase.instance.client.auth.currentUser?.email ?? '').trim().toLowerCase();
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _reload();
    _refreshTimer = Timer.periodic(const Duration(seconds: 4), (_) {
      if (mounted && !_busy) unawaited(_reload(silent: true));
    });
  }

  @override
  void dispose() {
    _refreshTimer?.cancel();
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) unawaited(_reload(silent: true));
  }

  Future<void> _reload({bool silent = false}) async {
    if (!silent && mounted) setState(() => _loading = true);
    final status = await ngmyCivicRecoveryLoad(accountEmail: _loginEmail);
    if (!mounted) return;
    setState(() {
      _loading = false;
      _emails = status.emails;
      _codes = status.codes;
      if (!silent || status.error != null) _error = status.error;
    });
  }

  void _toast(String msg, {bool ok = false}) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(msg),
        backgroundColor: ok ? const Color(0xFF16A34A) : null,
      ),
    );
  }

  Future<void> _addEmail(String raw) async {
    if (_busy) return;
    setState(() {
      _busy = true;
      _error = null;
    });
    final result = await ngmyCivicRecoveryEmailSave(raw);
    if (!mounted) return;
    setState(() => _busy = false);
    if (result.ok) {
      await _writeLocalSavedEmails(_loginEmail, result.emails);
      await _reload();
      _toast('Login email saved.', ok: true);
    } else {
      setState(() => _error = result.error);
    }
  }

  Future<void> _removeEmail(String email) async {
    if (_busy) return;
    setState(() => _busy = true);
    final result = await ngmyCivicRecoveryEmailRemove(email);
    if (!mounted) return;
    setState(() => _busy = false);
    if (result.ok) {
      await _reload();
    } else {
      setState(() => _error = result.error);
    }
  }

  Future<void> _copy(String code) async {
    await Clipboard.setData(ClipboardData(text: code));
    _toast('Code copied.', ok: true);
  }

  Future<void> _showAddEmail() async {
    if (_emails.length >= 3) {
      _toast('You can save a maximum of 3 emails.');
      return;
    }
    final ctl = TextEditingController(
      text: _emails.contains(_loginEmail) ? '' : _loginEmail,
    );
    final added = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF101826),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(22)),
      ),
      builder: (ctx) {
        return Padding(
          padding: EdgeInsets.fromLTRB(20, 18, 20, 18 + MediaQuery.viewInsetsOf(ctx).bottom),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text(
                'Add login email',
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
              ),
              const SizedBox(height: 6),
              Text(
                'Use an email that already has an NGMY account. You can save up to 3. They stay saved.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.62), height: 1.35),
              ),
              const SizedBox(height: 16),
              TextField(
                controller: ctl,
                autofocus: true,
                keyboardType: TextInputType.emailAddress,
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  hintText: 'name@gmail.com',
                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                  filled: true,
                  fillColor: Colors.white.withValues(alpha: 0.06),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
              const SizedBox(height: 14),
              FilledButton(
                onPressed: () => Navigator.pop(ctx, ctl.text.trim()),
                child: const Text('Save email'),
              ),
            ],
          ),
        );
      },
    );
    ctl.dispose();
    if (added != null && added.isNotEmpty) await _addEmail(added);
  }

  Future<void> _useResetCode(NgmyCivicInboxCode item) async {
    final account = _loginEmail;
    if (account.isEmpty) {
      _toast('Sign in again, then retry.');
      return;
    }
    final pwCtl = TextEditingController();
    final confirmCtl = TextEditingController();
    final saved = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF101826),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(22)),
      ),
      builder: (ctx) {
        var saving = false;
        String? localError;
        return StatefulBuilder(
          builder: (ctx, setSheet) {
            Future<void> save() async {
              final pw = pwCtl.text;
              final confirm = confirmCtl.text;
              if (pw.length < 6) {
                setSheet(() => localError = 'Password must be at least 6 characters.');
                return;
              }
              if (pw != confirm) {
                setSheet(() => localError = 'Passwords do not match.');
                return;
              }
              setSheet(() {
                saving = true;
                localError = null;
              });
              final verified = await ngmyPasswordResetVerifyResendOtp(account, item.code);
              if (!verified.ok) {
                setSheet(() {
                  saving = false;
                  localError = verified.error ?? 'Incorrect or expired code.';
                });
                return;
              }
              final done = await ngmyPasswordResetComplete(
                account,
                hashPassword(pw),
                resetToken: verified.resetToken,
              );
              if (!ctx.mounted) return;
              if (done.ok) {
                Navigator.pop(ctx, true);
              } else {
                setSheet(() {
                  saving = false;
                  localError = done.error ?? 'Could not update password.';
                });
              }
            }

            return Padding(
              padding: EdgeInsets.fromLTRB(20, 18, 20, 18 + MediaQuery.viewInsetsOf(ctx).bottom),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    'Set new password',
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'Using code ${item.code}',
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.62),
                      letterSpacing: 1.4,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 16),
                  TextField(
                    controller: pwCtl,
                    obscureText: true,
                    style: const TextStyle(color: Colors.white),
                    decoration: InputDecoration(
                      labelText: 'New password',
                      labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.55)),
                      filled: true,
                      fillColor: Colors.white.withValues(alpha: 0.06),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: confirmCtl,
                    obscureText: true,
                    style: const TextStyle(color: Colors.white),
                    decoration: InputDecoration(
                      labelText: 'Confirm password',
                      labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.55)),
                      filled: true,
                      fillColor: Colors.white.withValues(alpha: 0.06),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                  ),
                  if (localError != null) ...[
                    const SizedBox(height: 10),
                    Text(localError!, style: const TextStyle(color: Color(0xFFF87171))),
                  ],
                  const SizedBox(height: 14),
                  FilledButton(
                    onPressed: saving ? null : save,
                    child: saving
                        ? const SizedBox(
                            width: 16,
                            height: 16,
                            child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                          )
                        : const Text('Update password'),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
    pwCtl.dispose();
    confirmCtl.dispose();
    if (saved == true && mounted) {
      await _reload();
      _toast('Password updated. Use it the next time you sign in.', ok: true);
    }
  }

  @override
  Widget build(BuildContext context) {
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return Scaffold(
          backgroundColor: const Color(0xFF070B14),
          body: SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                NgmyToolkitAliveHeader(
                  title: 'NGMY AUTHENTICATION',
                  subtitle: 'Saved login emails stay here',
                  colors: _colors,
                  pulse: pulse,
                  orbit: orbit,
                  icon: Icons.person_rounded,
                  onClose: () => Navigator.pop(context),
                ),
                if (_error != null)
                  Padding(
                    padding: const EdgeInsets.fromLTRB(18, 0, 18, 8),
                    child: Text(_error!, style: const TextStyle(color: Color(0xFFF87171), fontSize: 13)),
                  ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 4, 16, 12),
                  child: NgmyHudTechFrame(
                    colors: _colors,
                    pulse: pulse,
                    scan: scan,
                    orbit: orbit,
                    borderRadius: 18,
                    padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            const Expanded(
                              child: Text(
                                'LOGIN EMAILS',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.w900,
                                  letterSpacing: 0.6,
                                  fontSize: 13,
                                ),
                              ),
                            ),
                            Text(
                              '${_emails.length} / 3',
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w700),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        _AddEmailButton(
                          pulse: pulse,
                          enabled: !_busy && _emails.length < 3,
                          onTap: _showAddEmail,
                        ),
                        const SizedBox(height: 12),
                        if (_loading)
                          const Padding(
                            padding: EdgeInsets.symmetric(vertical: 10),
                            child: LinearProgressIndicator(minHeight: 2),
                          )
                        else if (_emails.isEmpty)
                          Text(
                            'Add up to 3 NGMY login emails. They stay saved for authentication on every device.',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.58), height: 1.4),
                          )
                        else
                          for (final email in _emails)
                            Padding(
                              padding: const EdgeInsets.only(bottom: 8),
                              child: DecoratedBox(
                                decoration: BoxDecoration(
                                  color: Colors.white.withValues(alpha: 0.05),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: ListTile(
                                  dense: true,
                                  title: Text(
                                    email,
                                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                                  ),
                                  trailing: IconButton(
                                    tooltip: 'Remove',
                                    onPressed: _busy ? null : () => _removeEmail(email),
                                    icon: const Icon(Icons.close_rounded, color: Colors.white54),
                                  ),
                                ),
                              ),
                            ),
                      ],
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                    child: NgmyHudTechFrame(
                      colors: const [Color(0xFF8B5CF6), Color(0xFF22D3EE)],
                      pulse: pulse,
                      scan: scan,
                      orbit: orbit,
                      phase: 0.35,
                      borderRadius: 18,
                      padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Row(
                            children: [
                              const Expanded(
                                child: Text(
                                  'VERIFICATION',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.w900,
                                    letterSpacing: 0.6,
                                    fontSize: 13,
                                  ),
                                ),
                              ),
                              IconButton(
                                tooltip: 'Refresh codes',
                                onPressed: _busy ? null : () => _reload(),
                                icon: const Icon(Icons.refresh_rounded, color: Colors.white),
                              ),
                            ],
                          ),
                          const SizedBox(height: 8),
                          Expanded(
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(12),
                              child: ColoredBox(
                                color: Colors.black.withValues(alpha: 0.22),
                                child: _loading
                                    ? const Center(child: CircularProgressIndicator(strokeWidth: 2))
                                    : _codes.isEmpty
                                        ? Center(
                                            child: Padding(
                                              padding: const EdgeInsets.all(24),
                                              child: Text(
                                                _emails.isEmpty
                                                    ? 'Add a saved NGMY login email first. Authentication codes will appear here.'
                                                    : 'No verification codes yet. Request a password reset, then tap refresh.',
                                                textAlign: TextAlign.center,
                                                style: TextStyle(
                                                  color: Colors.white.withValues(alpha: 0.55),
                                                  height: 1.4,
                                                ),
                                              ),
                                            ),
                                          )
                                        : SingleChildScrollView(
                                            scrollDirection: Axis.horizontal,
                                            child: ConstrainedBox(
                                              constraints: BoxConstraints(
                                                minWidth: MediaQuery.sizeOf(context).width - 56,
                                              ),
                                              child: SingleChildScrollView(
                                                child: DataTable(
                                                  headingTextStyle: TextStyle(
                                                    color: Colors.white.withValues(alpha: 0.7),
                                                    fontWeight: FontWeight.w800,
                                                    fontSize: 12,
                                                  ),
                                                  dataTextStyle: const TextStyle(color: Colors.white, fontSize: 13),
                                                  columns: const [
                                                    DataColumn(label: Text('Code')),
                                                    DataColumn(label: Text('For')),
                                                    DataColumn(label: Text('Expires')),
                                                    DataColumn(label: Text('')),
                                                  ],
                                                  rows: [
                                                    for (final item in _codes.reversed)
                                                      DataRow(
                                                        cells: [
                                                          DataCell(
                                                            Text(
                                                              item.code,
                                                              style: const TextStyle(
                                                                fontWeight: FontWeight.w900,
                                                                letterSpacing: 1.6,
                                                              ),
                                                            ),
                                                            onTap: () => _copy(item.code),
                                                          ),
                                                          DataCell(Text(item.purposeLabel)),
                                                          DataCell(Text(item.expiresLabel)),
                                                          DataCell(
                                                            Row(
                                                              mainAxisSize: MainAxisSize.min,
                                                              children: [
                                                                IconButton(
                                                                  tooltip: 'Copy',
                                                                  onPressed: () => _copy(item.code),
                                                                  icon: const Icon(Icons.copy_rounded, color: Colors.white70, size: 18),
                                                                ),
                                                                if (item.purpose == 'password_reset')
                                                                  TextButton(
                                                                    onPressed: () => _useResetCode(item),
                                                                    child: const Text('Use'),
                                                                  ),
                                                              ],
                                                            ),
                                                          ),
                                                        ],
                                                      ),
                                                  ],
                                                ),
                                              ),
                                            ),
                                          ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _AddEmailButton extends StatelessWidget {
  const _AddEmailButton({
    required this.pulse,
    required this.enabled,
    required this.onTap,
  });

  final double pulse;
  final bool enabled;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final glow = 0.28 + pulse * 0.35;
    return Opacity(
      opacity: enabled ? 1 : 0.42,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: enabled ? onTap : null,
          borderRadius: BorderRadius.circular(16),
          child: Ink(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              gradient: const LinearGradient(
                colors: [Color(0xFF22D3EE), Color(0xFF6366F1), Color(0xFF8B5CF6)],
                begin: Alignment.centerLeft,
                end: Alignment.centerRight,
              ),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF22D3EE).withValues(alpha: glow),
                  blurRadius: 18,
                  offset: const Offset(0, 6),
                ),
              ],
            ),
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 13),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.add_rounded, color: Colors.white, size: 22),
                  SizedBox(width: 8),
                  Text(
                    'Add email',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w900,
                      fontSize: 15,
                      letterSpacing: 0.3,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
