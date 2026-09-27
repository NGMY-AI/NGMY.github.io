import 'dart:convert';
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_supabase_config.dart';

/// Live anon probes. Run with:
///   $env:NGMY_LIVE_SECURITY_TEST='1'; flutter test test/ngmy_supabase_security_live_anon_test.dart
/// These encode the *secure* contract. They fail until
/// `supabase/security_audit_hardening.sql` has been applied on the project.
void main() {
  final enabled = Platform.environment['NGMY_LIVE_SECURITY_TEST'] == '1';

  Future<({int status, String body, String? range})> getRest(String path) async {
    final client = HttpClient();
    try {
      final req = await client.getUrl(Uri.parse('$kNgmySupabaseUrl/rest/v1$path'));
      req.headers.set('apikey', kNgmySupabaseAnonKey);
      req.headers.set('Authorization', 'Bearer $kNgmySupabaseAnonKey');
      req.headers.set('Accept', 'application/json');
      req.headers.set('Prefer', 'count=exact');
      final res = await req.close();
      final body = await res.transform(utf8.decoder).join();
      return (status: res.statusCode, body: body, range: res.headers.value('content-range'));
    } finally {
      client.close(force: true);
    }
  }

  Future<({int status, String body})> postRest(String path, Object payload) async {
    final client = HttpClient();
    try {
      final req = await client.postUrl(Uri.parse('$kNgmySupabaseUrl/rest/v1$path'));
      req.headers.set('apikey', kNgmySupabaseAnonKey);
      req.headers.set('Authorization', 'Bearer $kNgmySupabaseAnonKey');
      req.headers.set('Content-Type', 'application/json');
      req.add(utf8.encode(jsonEncode(payload)));
      final res = await req.close();
      final body = await res.transform(utf8.decoder).join();
      return (status: res.statusCode, body: body);
    } finally {
      client.close(force: true);
    }
  }

  Future<({int status, String body})> patchRest(String path, Object payload) async {
    final client = HttpClient();
    try {
      final req = await client.patchUrl(Uri.parse('$kNgmySupabaseUrl/rest/v1$path'));
      req.headers.set('apikey', kNgmySupabaseAnonKey);
      req.headers.set('Authorization', 'Bearer $kNgmySupabaseAnonKey');
      req.headers.set('Content-Type', 'application/json');
      req.headers.set('Prefer', 'return=representation');
      req.add(utf8.encode(jsonEncode(payload)));
      final res = await req.close();
      final body = await res.transform(utf8.decoder).join();
      return (status: res.statusCode, body: body);
    } finally {
      client.close(force: true);
    }
  }

  group('live anon REST (secure contract)', () {
    test('anon cannot read users or transactions', () async {
      final users = await getRest('/users?select=email&limit=5');
      expect(users.status, anyOf(200, 206));
      expect(jsonDecode(users.body), isEmpty);
      final tx = await getRest('/transactions?select=id,userEmail&limit=5');
      expect(tx.status, anyOf(200, 206));
      expect(jsonDecode(tx.body), isEmpty);
    }, skip: enabled ? false : 'Set NGMY_LIVE_SECURITY_TEST=1');

    test('anon cannot list share tokens or the slides vault', () async {
      final keys = await getRest('/ngmy_settings?select=key&limit=500');
      expect(keys.status, anyOf(200, 206));
      final list = (jsonDecode(keys.body) as List)
          .map((e) => (e as Map)['key']?.toString() ?? '')
          .toList();
      expect(list.where((k) => k.startsWith('ngmy_doc_share_stash_v2_')), isEmpty);
      expect(list.where((k) => k.startsWith('ngmy_doc_share_code_v2_')), isEmpty);
      expect(list.where((k) => k.startsWith('ngmy_refcode_')), isEmpty);
      expect(list.contains('ngmy_slides_transfer_qr_stashes_v1'), isFalse);
      final vault = await getRest('/ngmy_settings?select=key&key=eq.ngmy_slides_transfer_qr_stashes_v1');
      expect(jsonDecode(vault.body), isEmpty);
    }, skip: enabled ? false : 'Set NGMY_LIVE_SECURITY_TEST=1');

    test('anon cannot insert another user or their transactions', () async {
      final user = await postRest('/users', {
        'email': 'security-live-probe@example.com',
        'username': 'probe',
        'accountBalance': 9999,
        'isAdmin': true,
      });
      expect(user.status, anyOf(401, 403, 425));
      final txn = await postRest('/transactions', {
        'id': 'security-live-probe-txn',
        'userEmail': 'kbpabloqr@gmail.com',
        'amount': 9999,
        'type': 0,
        'status': 1,
      });
      expect(txn.status, anyOf(401, 403, 425));
    }, skip: enabled ? false : 'Set NGMY_LIVE_SECURITY_TEST=1');

    test('anon cannot update media rows', () async {
      final patch = await patchRest('/media?id=eq.1781909394699', {'title': 'should-fail'});
      expect(patch.status, anyOf(200, 401, 403, 425));
      if (patch.status == 200) {
        expect(patch.body == '' || patch.body == '[]', isTrue, reason: 'anon media update must change 0 rows');
      }
    }, skip: enabled ? false : 'Set NGMY_LIVE_SECURITY_TEST=1');

    test('anon cannot call store-contact or rate-limit RPCs', () async {
      final contact = await postRest('/rpc/ngmy_store_contact', {'p_email': 'kbpabloqr@gmail.com'});
      expect(contact.status, anyOf(401, 403, 404));
      final rl = await postRest('/rpc/ngmy_consume_rate_limit', {
        'p_bucket': 'x',
        'p_key': 'y',
        'p_max': 10,
        'p_window_seconds': 60,
      });
      expect(rl.status, anyOf(401, 403, 404));
    }, skip: enabled ? false : 'Set NGMY_LIVE_SECURITY_TEST=1');

    test('gemini key column is not selectable', () async {
      final r = await getRest('/config?select=geminiApiKey&limit=1');
      expect(r.status, anyOf(400, 401, 403));
    }, skip: enabled ? false : 'Set NGMY_LIVE_SECURITY_TEST=1');
  });
}
