import 'package:flutter/material.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_supabase_auth.dart';

Future<String?> ngmyCivicRecoveryEmailLoad() async {
  try {
    await ngmyWaitForSupabaseReady();
    final data = await ngmyEdgeInvoke(
      {'action': 'civicRecoveryStatus'},
      timeout: const Duration(seconds: 20),
    );
    if (data == null || data['ok'] != true) return null;
    final email = (data['email'] ?? '').toString().trim().toLowerCase();
    return email.isEmpty ? null : email;
  } catch (e) {
    debugPrint('[civic recovery] status: $e');
    return null;
  }
}

Future<({bool ok, String? email, String? error})> ngmyCivicRecoveryEmailSave(String email) async {
  final key = email.trim().toLowerCase();
  if (key.isEmpty || !key.contains('@')) {
    return (ok: false, email: null, error: 'Enter a valid email.');
  }
  try {
    await ngmyWaitForSupabaseReady();
    final data = await ngmyEdgeInvoke(
      {'action': 'civicRecoveryLink', 'civicEmail': key},
      timeout: const Duration(seconds: 25),
    );
    if (data == null) {
      return (ok: false, email: null, error: 'Could not reach the server.');
    }
    if (data['ok'] == true) {
      final saved = (data['email'] ?? key).toString().trim().toLowerCase();
      return (ok: true, email: saved, error: null);
    }
    return (
      ok: false,
      email: null,
      error: (data['error'] ?? 'Could not save this email.').toString(),
    );
  } catch (e) {
    debugPrint('[civic recovery] save: $e');
    return (ok: false, email: null, error: 'Could not save this email.');
  }
}

Future<void> showNgmyCivicRecoveryEmailDialog(BuildContext context) async {
  final ctl = TextEditingController();
  var loading = true;
  var saving = false;
  String? current;
  String? error;

  await showDialog<void>(
    context: context,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setDlg) {
          if (loading) {
            loading = false;
            ngmyCivicRecoveryEmailLoad().then((v) {
              if (!ctx.mounted) return;
              setDlg(() {
                current = v;
                if (v != null && v.isNotEmpty) ctl.text = v;
              });
            });
          }

          Future<void> save() async {
            if (saving) return;
            setDlg(() {
              saving = true;
              error = null;
            });
            final result = await ngmyCivicRecoveryEmailSave(ctl.text);
            if (!ctx.mounted) return;
            setDlg(() {
              saving = false;
              if (result.ok) {
                current = result.email;
                error = null;
              } else {
                error = result.error;
              }
            });
            if (result.ok && ctx.mounted) {
              Navigator.pop(ctx);
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Civic recovery email saved. Password reset codes will go there.'),
                  backgroundColor: Color(0xFF16A34A),
                ),
              );
            }
          }

          return AlertDialog(
            backgroundColor: const Color(0xFF151A24),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
            title: const Text(
              'Civic recovery email',
              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
            ),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  current != null && current!.isNotEmpty
                      ? 'Connected: $current'
                      : 'Add an email that is already in Civic Registry. Password reset codes are sent to that email — not Resend.',
                  style: TextStyle(color: Colors.white.withOpacity(0.72), height: 1.35),
                ),
                const SizedBox(height: 14),
                TextField(
                  controller: ctl,
                  keyboardType: TextInputType.emailAddress,
                  style: const TextStyle(color: Colors.white),
                  decoration: InputDecoration(
                    labelText: 'Civic Registry email',
                    labelStyle: TextStyle(color: Colors.white.withOpacity(0.6)),
                    filled: true,
                    fillColor: Colors.white.withOpacity(0.06),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                ),
                if (error != null) ...[
                  const SizedBox(height: 10),
                  Text(error!, style: const TextStyle(color: Color(0xFFF87171), fontSize: 13)),
                ],
              ],
            ),
            actions: [
              TextButton(
                onPressed: saving ? null : () => Navigator.pop(ctx),
                child: const Text('Cancel'),
              ),
              FilledButton(
                onPressed: saving ? null : save,
                child: saving
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                      )
                    : const Text('Save'),
              ),
            ],
          );
        },
      );
    },
  );
  ctl.dispose();
}
