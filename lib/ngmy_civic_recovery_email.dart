import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_supabase_auth.dart';

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
  } else if (raw != null) {
    push(raw);
  }
  return out.take(2).toList();
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

Future<NgmyCivicRecoveryStatus> ngmyCivicRecoveryLoad() async {
  try {
    await ngmyWaitForSupabaseReady();
    final data = await ngmyEdgeInvoke(
      {'action': 'civicRecoveryStatus'},
      timeout: const Duration(seconds: 20),
    );
    if (data == null) {
      return const NgmyCivicRecoveryStatus(
        emails: [],
        codes: [],
        error: 'Could not reach the server.',
      );
    }
    if (data['ok'] != true) {
      return NgmyCivicRecoveryStatus(
        emails: const [],
        codes: const [],
        error: (data['error'] ?? 'Could not load recovery emails.').toString(),
      );
    }
    final emails = _emailsFrom(data['emails']);
    if (emails.isEmpty) {
      emails.addAll(_emailsFrom(data['email']));
    }
    return NgmyCivicRecoveryStatus(
      emails: emails,
      codes: _codesFrom(data['codes']),
    );
  } catch (e) {
    debugPrint('[civic recovery] status: $e');
    return const NgmyCivicRecoveryStatus(
      emails: [],
      codes: [],
      error: 'Could not load recovery emails.',
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
    return (ok: false, emails: const <String>[], error: 'Enter a valid email.');
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
      return (ok: true, emails: _emailsFrom(data['emails']), error: null);
    }
    return (
      ok: false,
      emails: const <String>[],
      error: (data['error'] ?? 'Could not save this email.').toString(),
    );
  } catch (e) {
    debugPrint('[civic recovery] save: $e');
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
      return (ok: true, emails: _emailsFrom(data['emails']), error: null);
    }
    return (
      ok: false,
      emails: const <String>[],
      error: (data['error'] ?? 'Could not remove this email.').toString(),
    );
  } catch (e) {
    debugPrint('[civic recovery] remove: $e');
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
    debugPrint('[civic recovery] issue: $e');
    return (ok: false, error: 'Could not create a code.');
  }
}

Future<void> showNgmyCivicRecoveryEmailDialog(BuildContext context) async {
  final signedIn = Supabase.instance.client.auth.currentSession != null;
  if (!signedIn) {
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Sign in first, then tap the profile icon to add recovery emails.')),
    );
    return;
  }

  final ctl = TextEditingController();
  var loading = true;
  var busy = false;
  var emails = <String>[];
  var codes = <NgmyCivicInboxCode>[];
  String? error;

  await showDialog<void>(
    context: context,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setDlg) {
          Future<void> reload({bool showSpinner = false}) async {
            if (showSpinner) setDlg(() => loading = true);
            final status = await ngmyCivicRecoveryLoad();
            if (!ctx.mounted) return;
            setDlg(() {
              loading = false;
              emails = status.emails;
              codes = status.codes;
              error = status.error;
            });
          }

          if (loading) {
            loading = false;
            reload(showSpinner: true);
          }

          Future<void> addEmail() async {
            if (busy) return;
            setDlg(() {
              busy = true;
              error = null;
            });
            final result = await ngmyCivicRecoveryEmailSave(ctl.text);
            if (!ctx.mounted) return;
            setDlg(() {
              busy = false;
              if (result.ok) {
                emails = result.emails;
                ctl.clear();
                error = null;
              } else {
                error = result.error;
              }
            });
            if (result.ok) await reload();
          }

          Future<void> removeEmail(String email) async {
            if (busy) return;
            setDlg(() {
              busy = true;
              error = null;
            });
            final result = await ngmyCivicRecoveryEmailRemove(email);
            if (!ctx.mounted) return;
            setDlg(() => busy = false);
            if (result.ok) {
              await reload();
            } else {
              setDlg(() => error = result.error);
            }
          }

          Future<void> issue(String purpose) async {
            if (busy) return;
            setDlg(() {
              busy = true;
              error = null;
            });
            final result = await ngmyCivicRecoveryIssueCode(purpose);
            if (!ctx.mounted) return;
            setDlg(() => busy = false);
            if (result.ok) {
              await reload();
            } else {
              setDlg(() => error = result.error);
            }
          }

          final rows = <_RecoveryRow>[
            for (final email in emails)
              _RecoveryRow(email: email, code: '', purpose: '', expires: ''),
            for (final item in codes.reversed)
              _RecoveryRow(
                email: '',
                code: item.code,
                purpose: item.purposeLabel,
                expires: item.expiresLabel,
              ),
          ];

          return AlertDialog(
            backgroundColor: const Color(0xFF151A24),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
            title: const Text(
              'Civic recovery emails',
              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
            ),
            content: SizedBox(
              width: 520,
              child: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Add up to 2 emails that are already in Civic Registry. '
                      'Password reset, change-email, and verify codes appear in this table.',
                      style: TextStyle(color: Colors.white.withOpacity(0.72), height: 1.35),
                    ),
                    const SizedBox(height: 14),
                    if (loading)
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 24),
                        child: Center(
                          child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
                        ),
                      )
                    else
                      ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: Table(
                          columnWidths: const {
                            0: FlexColumnWidth(2.4),
                            1: FlexColumnWidth(1.2),
                            2: FlexColumnWidth(1.4),
                            3: FlexColumnWidth(1.0),
                            4: FixedColumnWidth(40),
                          },
                          defaultVerticalAlignment: TableCellVerticalAlignment.middle,
                          children: [
                            TableRow(
                              decoration: BoxDecoration(color: Colors.white.withOpacity(0.08)),
                              children: [
                                _head('Email'),
                                _head('Code'),
                                _head('Purpose'),
                                _head('Expires'),
                                const SizedBox.shrink(),
                              ],
                            ),
                            if (rows.isEmpty)
                              TableRow(
                                decoration: BoxDecoration(color: Colors.white.withOpacity(0.03)),
                                children: [
                                  _cell('No emails yet', muted: true),
                                  _cell(''),
                                  _cell(''),
                                  _cell(''),
                                  const SizedBox.shrink(),
                                ],
                              ),
                            for (final row in rows)
                              TableRow(
                                decoration: BoxDecoration(color: Colors.white.withOpacity(0.03)),
                                children: [
                                  _cell(row.email.isEmpty ? '—' : row.email),
                                  _cell(row.code, mono: row.code.isNotEmpty),
                                  _cell(row.purpose),
                                  _cell(row.expires),
                                  row.email.isEmpty
                                      ? const SizedBox.shrink()
                                      : IconButton(
                                          tooltip: 'Remove',
                                          visualDensity: VisualDensity.compact,
                                          onPressed: busy ? null : () => removeEmail(row.email),
                                          icon: Icon(
                                            Icons.close_rounded,
                                            size: 18,
                                            color: Colors.white.withOpacity(0.7),
                                          ),
                                        ),
                                ],
                              ),
                          ],
                        ),
                      ),
                    if (emails.length < 2) ...[
                      const SizedBox(height: 14),
                      TextField(
                        controller: ctl,
                        keyboardType: TextInputType.emailAddress,
                        style: const TextStyle(color: Colors.white),
                        decoration: InputDecoration(
                          labelText: emails.isEmpty
                              ? 'Civic Registry email'
                              : 'Second Civic Registry email',
                          labelStyle: TextStyle(color: Colors.white.withOpacity(0.6)),
                          filled: true,
                          fillColor: Colors.white.withOpacity(0.06),
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                      ),
                    ],
                    if (error != null) ...[
                      const SizedBox(height: 10),
                      Text(error!, style: const TextStyle(color: Color(0xFFF87171), fontSize: 13)),
                    ],
                    const SizedBox(height: 12),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: [
                        TextButton(
                          onPressed: busy || emails.isEmpty ? null : () => issue('password_reset'),
                          child: const Text('Password-reset code'),
                        ),
                        TextButton(
                          onPressed: busy || emails.isEmpty ? null : () => issue('change_email'),
                          child: const Text('Change-email code'),
                        ),
                        TextButton(
                          onPressed: busy || emails.isEmpty ? null : () => issue('verify'),
                          child: const Text('Verify code'),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            actions: [
              TextButton(
                onPressed: busy ? null : () => Navigator.pop(ctx),
                child: const Text('Close'),
              ),
              if (emails.length < 2)
                FilledButton(
                  onPressed: busy ? null : addEmail,
                  child: busy
                      ? const SizedBox(
                          width: 16,
                          height: 16,
                          child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                        )
                      : const Text('Add email'),
                ),
            ],
          );
        },
      );
    },
  );
  ctl.dispose();
}

class _RecoveryRow {
  const _RecoveryRow({
    required this.email,
    required this.code,
    required this.purpose,
    required this.expires,
  });

  final String email;
  final String code;
  final String purpose;
  final String expires;
}

Widget _head(String text) {
  return Padding(
    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
    child: Text(
      text,
      style: const TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w800),
    ),
  );
}

Widget _cell(String text, {bool muted = false, bool mono = false}) {
  return Padding(
    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
    child: Text(
      text,
      style: TextStyle(
        color: muted ? Colors.white38 : Colors.white,
        fontSize: 12,
        fontWeight: mono ? FontWeight.w800 : FontWeight.w500,
        letterSpacing: mono ? 1.2 : 0,
      ),
    ),
  );
}
