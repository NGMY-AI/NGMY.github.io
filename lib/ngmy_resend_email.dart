import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_ai_client.dart';

/// Resend.com email delivery for admin-only NGMY Helper commands.
class NgmyResendEmail {
  NgmyResendEmail._();

  static const _prefsKey = 'ngmy_resend_api_key_v1';
  static const _fromPrefsKey = 'ngmy_resend_from_email_v1';
  static const defaultFrom = 'NGMY <noreply@ngmy.org>';

  static String sanitizeKey(String raw) => raw.trim().replaceAll(RegExp(r'[\r\n\t]'), '');

  static Future<void> persistLocalKey(String key) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final cleaned = sanitizeKey(key);
      if (cleaned.isEmpty) {
        await prefs.remove(_prefsKey);
      } else {
        await prefs.setString(_prefsKey, cleaned);
      }
    } catch (e) {
      debugPrint('[resend] local key save: $e');
    }
  }

  static Future<void> persistLocalFrom(String from) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final cleaned = from.trim();
      if (cleaned.isEmpty) {
        await prefs.remove(_fromPrefsKey);
      } else {
        await prefs.setString(_fromPrefsKey, cleaned);
      }
    } catch (e) {
      debugPrint('[resend] local from save: $e');
    }
  }

  static Future<String> resolveApiKey({dynamic config}) async {
    final fromConfig = config != null ? sanitizeKey((config as dynamic).resendApiKey?.toString() ?? '') : '';
    if (fromConfig.isNotEmpty) return fromConfig;
    try {
      final prefs = await SharedPreferences.getInstance();
      return sanitizeKey(prefs.getString(_prefsKey) ?? '');
    } catch (_) {
      return '';
    }
  }

  static Future<String> resolveFromEmail({dynamic config}) async {
    final fromConfig = config != null ? (config as dynamic).resendFromEmail?.toString().trim() ?? '' : '';
    if (fromConfig.isNotEmpty) return fromConfig;
    try {
      final prefs = await SharedPreferences.getInstance();
      final saved = prefs.getString(_fromPrefsKey)?.trim() ?? '';
      return saved.isNotEmpty ? saved : defaultFrom;
    } catch (_) {
      return defaultFrom;
    }
  }

  static Future<({bool ok, String? messageId, String? error})> send({
    required String apiKey,
    required String from,
    required String to,
    required String subject,
    required String body,
    required String requesterEmail,
  }) async {
    final cleanedKey = sanitizeKey(apiKey);
    final recipient = to.trim();
    final htmlBody = body.trim().isEmpty ? '<p></p>' : _bodyToHtml(body.trim());
    if (cleanedKey.isEmpty) {
      return (ok: false, messageId: null, error: 'Resend API key missing. Admin → NGMY AI → paste Resend key → Save AI Settings.');
    }
    if (recipient.isEmpty || !recipient.contains('@')) {
      return (ok: false, messageId: null, error: 'No valid recipient email was provided.');
    }

    final viaProxy = await _sendViaSupabaseProxy(
      apiKey: cleanedKey,
      from: from.trim().isEmpty ? defaultFrom : from.trim(),
      to: recipient,
      subject: subject.trim().isEmpty ? 'Message from NGMY' : subject.trim(),
      html: htmlBody,
      requesterEmail: requesterEmail,
    );
    if (viaProxy.ok) return viaProxy;

    if (!kIsWeb) {
      final direct = await _sendDirect(
        apiKey: cleanedKey,
        from: from.trim().isEmpty ? defaultFrom : from.trim(),
        to: recipient,
        subject: subject.trim().isEmpty ? 'Message from NGMY' : subject.trim(),
        html: htmlBody,
      );
      if (direct.ok) return direct;
      return (ok: false, messageId: null, error: direct.error ?? viaProxy.error);
    }

    return viaProxy;
  }

  static String _bodyToHtml(String body) {
    if (body.contains('<') && body.contains('>')) return body;
    return '<p>${const HtmlEscape().convert(body).replaceAll('\n', '<br/>')}</p>';
  }

  static Future<({bool ok, String? messageId, String? error})> _sendDirect({
    required String apiKey,
    required String from,
    required String to,
    required String subject,
    required String html,
  }) async {
    try {
      final res = await http
          .post(
            Uri.parse('https://api.resend.com/emails'),
            headers: {
              'Authorization': 'Bearer $apiKey',
              'Content-Type': 'application/json',
            },
            body: jsonEncode({
              'from': from,
              'to': [to],
              'subject': subject,
              'html': html,
            }),
          )
          .timeout(const Duration(seconds: 30));
      if (res.statusCode >= 200 && res.statusCode < 300) {
        try {
          final data = jsonDecode(res.body);
          final id = data is Map ? data['id']?.toString() : null;
          return (ok: true, messageId: id, error: null);
        } catch (_) {
          return (ok: true, messageId: null, error: null);
        }
      }
      return (ok: false, messageId: null, error: _parseResendError(res.body, res.statusCode));
    } catch (e) {
      return (ok: false, messageId: null, error: e.toString());
    }
  }

  static Future<({bool ok, String? messageId, String? error})> _sendViaSupabaseProxy({
    required String apiKey,
    required String from,
    required String to,
    required String subject,
    required String html,
    required String requesterEmail,
  }) async {
    final body = <String, dynamic>{
      'action': 'resendEmail',
      'apiKey': apiKey,
      'from': from,
      'to': to,
      'subject': subject,
      'html': html,
      'requesterEmail': requesterEmail,
    };

    try {
      final client = Supabase.instance.client;
      try {
        final res = await client.functions.invoke(kNgmySupabaseAiFunction, body: body);
        return _parseProxyResponse(res.status, res.data);
      } catch (e) {
        debugPrint('[resend] functions.invoke failed: $e');
      }

      final restUrl = client.rest.url;
      final base = restUrl.contains('/rest/v1') ? restUrl.substring(0, restUrl.indexOf('/rest/v1')) : restUrl;
      final url = '$base/functions/v1/$kNgmySupabaseAiFunction';
      final session = client.auth.currentSession;
      final anonKey = client.headers['apikey'] ?? client.headers['Apikey'] ?? '';
      final token = session?.accessToken ?? anonKey;
      final response = await http
          .post(
            Uri.parse(url),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer $token',
              if (anonKey.isNotEmpty) 'apikey': anonKey,
            },
            body: jsonEncode(body),
          )
          .timeout(const Duration(seconds: 35));
      final decoded = response.body.isNotEmpty ? jsonDecode(response.body) : <String, dynamic>{};
      return _parseProxyResponse(response.statusCode, decoded);
    } catch (e) {
      return (ok: false, messageId: null, error: _friendlyError(e.toString()));
    }
  }

  static ({bool ok, String? messageId, String? error}) _parseProxyResponse(int status, dynamic data) {
    if (status == 200 && data is Map) {
      if (data['ok'] == true) {
        return (ok: true, messageId: data['id']?.toString(), error: null);
      }
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (ok: false, messageId: null, error: _friendlyError(err));
    }
    if (status == 403) {
      return (ok: false, messageId: null, error: 'Only NGMY admins can send direct emails from the AI.');
    }
    if (status == 404) {
      return (
        ok: false,
        messageId: null,
        error: 'Email proxy not deployed yet. Admin: redeploy Supabase function $kNgmySupabaseAiFunction.',
      );
    }
    if (data is Map) {
      final err = data['error']?.toString();
      if (err != null && err.isNotEmpty) return (ok: false, messageId: null, error: _friendlyError(err));
    }
    return (ok: false, messageId: null, error: 'Email proxy HTTP $status');
  }

  static String? _parseResendError(String body, int status) {
    try {
      final data = jsonDecode(body);
      if (data is Map) {
        final msg = data['message']?.toString();
        if (msg != null && msg.isNotEmpty) return msg;
      }
    } catch (_) {}
    return 'Resend HTTP $status';
  }

  static String? _friendlyError(String? raw) {
    if (raw == null || raw.trim().isEmpty) return null;
    final lower = raw.toLowerCase();
    if (lower.contains('domain') && lower.contains('verify')) {
      return 'Resend needs your sending domain verified. Set a verified From address in NGMY AI settings.';
    }
    if (lower.contains('invalid') && lower.contains('key')) {
      return 'Resend rejected this API key. Copy it again from resend.com → API Keys, then Save AI Settings.';
    }
    if (raw.length > 180) return '${raw.substring(0, 177)}…';
    return raw;
  }
}

/// Admin-only AI instructions for direct email delivery.
String ngmyAdminEmailSendContext({required List<Map<String, dynamic>> ngmyUsers}) {
  final lines = ngmyUsers
      .where((u) => (u['email'] ?? '').toString().trim().contains('@'))
      .take(120)
      .map((u) {
        final name = (u['username'] ?? u['fullName'] ?? 'User').toString().trim();
        final email = (u['email'] ?? '').toString().trim();
        return '- $name <$email>';
      })
      .join('\n');
  return '''
ADMIN DIRECT EMAIL (Resend) — This admin can send real emails to any NGMY user or any email address.
When they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests — that only opens Mail on the phone.

NGMY user emails you can target:
${lines.isEmpty ? '- Use any valid email address the admin provides.' : lines}

Rules:
- Draft a clear professional subject and body when the admin only gives the idea.
- If the admin gives exact wording, use it.
- Append one send_email action after your plain-language confirmation:

[[NGMY_PHONE_ACTIONS]]
[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]
[[/NGMY_PHONE_ACTIONS]]
''';
}
