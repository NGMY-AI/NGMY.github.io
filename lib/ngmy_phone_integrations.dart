import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_ai_app_bridge.dart';
import 'ngmy_calendar_ics.dart';
import 'ngmy_helper_alarm.dart';
import 'ngmy_calendar_download_stub.dart' if (dart.library.html) 'ngmy_calendar_download_web.dart';
import 'ngmy_calendar_native_stub.dart' if (dart.library.io) 'ngmy_calendar_native_io.dart';
import 'ngmy_phone_action_ui.dart';
import 'ngmy_resend_email.dart';

export 'ngmy_phone_action_ui.dart';

/// Apps NGMY Helper AI can open on the user's phone right now.
const List<({String id, String label, String example})> kNgmyPhoneConnectedApps = [
  (id: 'calendar', label: 'Calendar', example: 'Add dentist Friday at 3pm'),
  (id: 'alarm', label: 'Wake alarm', example: 'Wake me at 7am — work at 10'),
  (id: 'maps', label: 'Maps', example: 'Open directions to 123 Main St'),
  (id: 'call', label: 'Phone', example: 'Call Mom'),
  (id: 'sms', label: 'iMessage / Messages', example: 'Text Sarah I am on my way'),
  (id: 'whatsapp', label: 'WhatsApp', example: 'WhatsApp John saying hello'),
  (id: 'email', label: 'Mail', example: 'Email support about my order'),
  (id: 'messenger', label: 'Messenger', example: 'Open Messenger to my friend'),
  (id: 'facebook', label: 'Facebook', example: 'Open my Facebook'),
  (id: 'instagram', label: 'Instagram', example: 'Open Instagram'),
  (id: 'telegram', label: 'Telegram', example: 'Open Telegram'),
  (id: 'open_tool', label: 'NGMY apps', example: 'Open Video Studio / Play Zone / Virtual Device'),
];

String ngmyHelperPhoneIntegrationContext({
  DateTime? now,
  String contactsDirectory = '',
}) {
  final today = (now ?? DateTime.now()).toLocal();
  final todayLabel =
      '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')} '
      '${today.hour.toString().padLeft(2, '0')}:${today.minute.toString().padLeft(2, '0')} (user local time)';
  return '''
PHONE INTEGRATIONS — You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name — the app looks up contacts automatically.

${contactsDirectory.isNotEmpty ? '$contactsDirectory\n' : ''}
Today is $todayLabel.

When the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:

[[NGMY_PHONE_ACTIONS]]
[{"type":"call","name":"Mom"}]
[[/NGMY_PHONE_ACTIONS]]

Action types (JSON array):
- calendar — title, start (ISO local), end (optional), notes, location
- alarm — title, start (ISO local wake time), notes (optional) — sets alarm on the user's phone (notification or Clock); never tell user to keep NGMY open
- open_tool — tool (spark_lounge, video_studio, virtual_device, swahili_school, ai_outfit, qr_generator, quote_calc, doc_share) — opens that NGMY tool inside the app
- call — name (preferred) OR phone
- sms — name OR phone, body (optional) — opens iMessage/Messages on iPhone
- whatsapp — name OR phone, body (optional)
- maps — query or address
- email — to (email or name if in contacts), subject, body
- messenger — url OR username OR page; opens Messenger/Facebook chat when a public link/username is known
- facebook — url OR username OR page; opens Facebook page/profile/feed when a public link/username is known
- instagram — url OR username; opens Instagram profile/app when a public link/username is known
- telegram — url OR username; opens Telegram when a public link/username is known
- open_url — url

Rules:
- When user says "call Mom" or "text John on WhatsApp", use "name" — NEVER invent phone numbers.
- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once — do NOT tell them to tap a contacts button.
- REQUIRED calendar block for any meeting/appointment request.
- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.
- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.
- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool — do NOT tell them to navigate manually.
- start/end must be valid ISO datetimes in local timezone.
- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.
''';
}

/// Parsed phone action from Helper AI output.
class NgmyPhoneAction {
  final String type;
  final Map<String, String> fields;

  const NgmyPhoneAction({required this.type, required this.fields});

  String get label => switch (type) {
        'calendar' => 'Add to Calendar',
        'alarm' => 'Set wake alarm',
        'maps' => 'Open Maps',
        'call' => 'Call',
        'sms' => 'Send Text',
        'whatsapp' => 'WhatsApp',
        'email' => 'Send Email',
        'send_email' => 'Send via NGMY',
        'messenger' => 'Open Messenger',
        'facebook' => 'Open Facebook',
        'instagram' => 'Open Instagram',
        'telegram' => 'Open Telegram',
        'open_tool' => 'Open NGMY tool',
        _ => 'Run',
      };

  IconData get icon => switch (type) {
        'calendar' => Icons.calendar_month_rounded,
        'alarm' => Icons.alarm_rounded,
        'maps' => Icons.map_rounded,
        'call' => Icons.phone_rounded,
        'sms' => Icons.sms_rounded,
        'whatsapp' => Icons.chat_rounded,
        'email' => Icons.email_rounded,
        'send_email' => Icons.mark_email_read_rounded,
        'messenger' => Icons.forum_rounded,
        'facebook' => Icons.facebook_rounded,
        'instagram' => Icons.camera_alt_rounded,
        'telegram' => Icons.send_rounded,
        'open_url' => Icons.open_in_new_rounded,
        'open_tool' => Icons.apps_rounded,
        _ => Icons.phonelink_rounded,
      };

  String get summary {
    switch (type) {
      case 'calendar':
        final title = fields['title'] ?? 'Event';
        final start = _parseDateTime(fields['start']);
        if (start != null) {
          return '$title · ${_formatShort(start)}';
        }
        return title;
      case 'alarm':
        final title = fields['title'] ?? 'Wake up';
        final start = _parseDateTime(fields['start']);
        if (start != null) {
          return '$title · ${_formatShort(start)}';
        }
        return title;
      case 'maps':
        return fields['query'] ?? fields['address'] ?? 'Open location';
      case 'call':
      case 'sms':
      case 'whatsapp':
        final who = fields['contactName'] ?? fields['name'] ?? '';
        final phone = fields['phone'] ?? '';
        if (who.isNotEmpty && phone.isNotEmpty) return '$who · $phone';
        if (who.isNotEmpty) return who;
        return phone;
      case 'email':
      case 'send_email':
        return fields['to'] ?? fields['subject'] ?? 'Email';
      case 'messenger':
      case 'facebook':
      case 'instagram':
      case 'telegram':
        return fields['username'] ?? fields['page'] ?? fields['url'] ?? label;
      case 'open_url':
        final url = fields['url'] ?? '';
        return url.length > 42 ? '${url.substring(0, 39)}…' : url;
      case 'open_tool':
        return fields['tool'] ?? fields['app'] ?? 'NGMY tool';
      default:
        return type;
    }
  }

  static NgmyPhoneAction? fromJson(Map<String, dynamic> json) {
    final type = (json['type'] ?? '').toString().trim().toLowerCase();
    if (type.isEmpty) return null;
    final fields = <String, String>{};
    json.forEach((key, value) {
      if (key == 'type' || value == null) return;
      fields[key.toString()] = value.toString();
    });
    return NgmyPhoneAction(type: type, fields: fields);
  }
}

/// Strip action block from AI text and return parsed actions.
({String text, List<NgmyPhoneAction> actions}) ngmyParseHelperPhoneActions(String raw) {
  var text = raw.trim();
  final actions = <NgmyPhoneAction>[];

  void ingestJson(String jsonText) {
    try {
      final decoded = jsonDecode(jsonText);
      if (decoded is List) {
        for (final item in decoded) {
          if (item is Map) {
            final action = NgmyPhoneAction.fromJson(Map<String, dynamic>.from(item));
            if (action != null) actions.add(action);
          }
        }
      } else if (decoded is Map) {
        final action = NgmyPhoneAction.fromJson(Map<String, dynamic>.from(decoded));
        if (action != null) actions.add(action);
      }
    } catch (e) {
      debugPrint('[phone] action parse error: $e');
    }
  }

  final tagged = RegExp(
    r'\[\[NGMY_PHONE_ACTIONS\]\]\s*([\s\S]*?)\s*\[\[/NGMY_PHONE_ACTIONS\]\]',
    multiLine: true,
  );
  final taggedMatch = tagged.firstMatch(raw);
  if (taggedMatch != null) {
    text = raw.replaceFirst(tagged, '').trim();
    ingestJson(taggedMatch.group(1)!.trim());
    return (text: text, actions: actions);
  }

  final fence = RegExp(r'```(?:json)?\s*(\[[\s\S]*?\])\s*```', multiLine: true);
  final fenceMatch = fence.firstMatch(raw);
  if (fenceMatch != null && raw.contains('"type"')) {
    text = raw.replaceFirst(fence, '').trim();
    ingestJson(fenceMatch.group(1)!);
    if (actions.isNotEmpty) return (text: text, actions: actions);
  }

  final loose = RegExp(r'(\[\s*\{[\s\S]*?"type"\s*:\s*"(?:calendar|alarm|maps|call|sms|whatsapp|email|send_email|messenger|facebook|instagram|telegram|open_url|open_tool)"[\s\S]*?\}\s*\])');
  final looseMatch = loose.firstMatch(raw);
  if (looseMatch != null) {
    text = raw.replaceFirst(loose, '').trim();
    ingestJson(looseMatch.group(1)!);
  }

  return (text: text, actions: actions);
}

String _formatShort(DateTime dt) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '${months[dt.month - 1]} ${dt.day}, $h:$min $ampm';
}

DateTime? _parseDateTime(String? raw) {
  if (raw == null || raw.trim().isEmpty) return null;
  try {
    return DateTime.parse(raw.trim()).toLocal();
  } catch (_) {
    return null;
  }
}

String _icsDate(DateTime dt) {
  final local = dt.toLocal();
  String two(int n) => n.toString().padLeft(2, '0');
  return '${local.year}${two(local.month)}${two(local.day)}T${two(local.hour)}${two(local.minute)}${two(local.second)}';
}

String _escapeIcs(String value) {
  return value.replaceAll('\\', '\\\\').replaceAll('\n', '\\n').replaceAll(',', '\\,').replaceAll(';', '\\;');
}

Uint8List _buildIcs({
  required String title,
  required DateTime start,
  required DateTime end,
  String? notes,
  String? location,
  bool alarmAtStart = false,
  int alarmMinutesBefore = 15,
}) =>
    ngmyBuildIcsBytes(
      title: title,
      start: start,
      end: end,
      notes: notes,
      location: location,
      alarmAtStart: alarmAtStart,
      alarmMinutesBefore: alarmMinutesBefore,
    );

String _googleCalendarUrl({
  required String title,
  required DateTime start,
  required DateTime end,
  String? notes,
  String? location,
}) {
  String gmt(DateTime dt) {
    final u = dt.toUtc();
    String two(int n) => n.toString().padLeft(2, '0');
    return '${u.year}${two(u.month)}${two(u.day)}T${two(u.hour)}${two(u.minute)}${two(u.second)}Z';
  }

  final params = <String, String>{
    'action': 'TEMPLATE',
    'text': title,
    'dates': '${gmt(start)}/${gmt(end)}',
  };
  if (notes != null && notes.trim().isNotEmpty) params['details'] = notes.trim();
  if (location != null && location.trim().isNotEmpty) params['location'] = location.trim();
  return Uri.https('calendar.google.com', '/calendar/render', params).toString();
}

Future<bool> _launchExternal(Uri uri, {LaunchMode mode = LaunchMode.externalApplication}) async {
  try {
    if (await canLaunchUrl(uri)) {
      return await launchUrl(uri, mode: mode);
    }
  } catch (e) {
    debugPrint('[phone] launch error: $e');
  }
  return false;
}

bool _needsConfirmation(NgmyPhoneAction action) {
  return action.type == 'calendar' ||
      action.type == 'call' ||
      action.type == 'sms' ||
      action.type == 'whatsapp' ||
      action.type == 'email' ||
      action.type == 'send_email' ||
      action.type == 'messenger' ||
      action.type == 'facebook' ||
      action.type == 'instagram' ||
      action.type == 'telegram';
}

Future<String?> ngmyRunPhoneAction(
  NgmyPhoneAction action, {
  BuildContext? context,
  bool skipConfirmation = false,
  String userEmail = '',
  bool isAdmin = false,
  String resendApiKey = '',
  String resendFromEmail = '',
  dynamic config,
}) async {
  if (_needsConfirmation(action) && context != null && context.mounted && !skipConfirmation) {
    final ok = await ngmyShowPhoneActionSheet(context: context, action: action);
    if (!ok) return 'Cancelled.';
  }

  switch (action.type) {
    case 'calendar':
      return _runCalendar(action);
    case 'alarm':
      return _runAlarm(action, userEmail: userEmail);
    case 'maps':
      return _runMaps(action);
    case 'call':
      return _runCall(action);
    case 'sms':
      return _runSms(action);
    case 'whatsapp':
      return _runWhatsApp(action);
    case 'email':
      return _runEmail(action);
    case 'send_email':
      return _runSendEmail(
        action,
        isAdmin: isAdmin,
        requesterEmail: userEmail,
        resendApiKey: resendApiKey,
        resendFromEmail: resendFromEmail,
        config: config,
      );
    case 'messenger':
      return _runMessenger(action);
    case 'facebook':
      return _runFacebook(action);
    case 'instagram':
      return _runInstagram(action);
    case 'telegram':
      return _runTelegram(action);
    case 'open_url':
      return _runOpenUrl(action);
    case 'open_tool':
      return _runOpenTool(action);
    default:
      return 'Unknown action type: ${action.type}';
  }
}

Future<String?> _runCalendar(NgmyPhoneAction action) async {
  final title = (action.fields['title'] ?? 'NGMY Event').trim();
  final start = _parseDateTime(action.fields['start']);
  if (start == null) return 'Could not read the event date.';
  final end = _parseDateTime(action.fields['end']) ?? start.add(const Duration(hours: 1));
  final notes = action.fields['notes'];
  final location = action.fields['location'];

  if (!kIsWeb) {
    try {
      final added = await ngmyAddNativeCalendarEvent(
        title: title,
        start: start,
        end: end,
        notes: notes,
        location: location,
        reminderMinutesBefore: 15,
      );
      if (added) return 'Added "$title" to your phone Calendar app.';
    } catch (e) {
      debugPrint('[phone] native calendar error: $e');
    }
  }

  if (kIsWeb) {
    try {
      final bytes = _buildIcs(
        title: title,
        start: start,
        end: end,
        notes: notes,
        location: location,
        alarmMinutesBefore: 15,
      );
      final msg = await ngmyDownloadIcsFile(
        bytes,
        '${title.replaceAll(RegExp(r'[^\w]+'), '_')}.ics',
        eventTitle: title,
      );
      if (!msg.startsWith('Could not')) return msg;
    } catch (e) {
      debugPrint('[phone] ics open error: $e');
    }
    final gUrl = _googleCalendarUrl(title: title, start: start, end: end, notes: notes, location: location);
    return ngmyOpenGoogleCalendarUrl(gUrl);
  }

  final url = _googleCalendarUrl(title: title, start: start, end: end, notes: notes, location: location);
  final ok = await _launchExternal(Uri.parse(url));
  return ok ? 'Opened Calendar to add "$title".' : 'Could not open Calendar. Tap Add to Calendar below.';
}

Future<String?> _runAlarm(NgmyPhoneAction action, {required String userEmail}) async {
  final title = (action.fields['title'] ?? 'Wake up').trim();
  final start = _parseDateTime(action.fields['start']);
  if (start == null) return 'Could not read the alarm time.';
  if (userEmail.trim().isEmpty) {
    return 'Sign in to save wake alarms to your NGMY account on this device.';
  }
  return ngmyScheduleHelperWakeAlarm(
    userEmail: userEmail,
    title: title,
    when: start,
    notes: action.fields['notes'],
  );
}

Future<String?> _runMaps(NgmyPhoneAction action) async {
  final query = (action.fields['query'] ?? action.fields['address'] ?? '').trim();
  if (query.isEmpty) return 'No address or place was provided.';
  final encoded = Uri.encodeComponent(query);
  final candidates = [
    Uri.parse('https://maps.apple.com/?q=$encoded'),
    Uri.parse('geo:0,0?q=$encoded'),
    Uri.parse('https://www.google.com/maps/search/?api=1&query=$encoded'),
  ];
  for (final uri in candidates) {
    if (await _launchExternal(uri)) return 'Opening Maps for "$query".';
  }
  return 'Could not open Maps.';
}

Future<String?> _runCall(NgmyPhoneAction action) async {
  final phone = (action.fields['phone'] ?? '').replaceAll(RegExp(r'[^\d+]+'), '');
  if (phone.isEmpty) return 'Could not find a phone number for that name.';
  final ok = await _launchExternal(Uri.parse('tel:$phone'));
  final who = action.fields['contactName'] ?? action.fields['name'] ?? '';
  return ok
      ? (who.isNotEmpty ? 'Calling $who…' : 'Opening Phone…')
      : 'Could not start a call.';
}

Future<String?> _runSms(NgmyPhoneAction action) async {
  final raw = (action.fields['phone'] ?? action.fields['email'] ?? '').trim();
  if (raw.isEmpty) return 'Could not find a phone number or email for that contact.';
  final body = action.fields['body']?.trim() ?? '';
  final who = action.fields['contactName'] ?? action.fields['name'] ?? '';
  final isEmail = RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$').hasMatch(raw);
  final address = isEmail ? raw.toLowerCase() : raw.replaceAll(RegExp(r'[^\d+]'), '');
  if (address.isEmpty) return 'Could not find a phone number or email for that contact.';
  final uri = body.isEmpty
      ? Uri.parse('sms:$address')
      : Uri.parse('sms:$address?body=${Uri.encodeComponent(body)}');
  final ok = await _launchExternal(uri);
  return ok
      ? (who.isNotEmpty ? 'Opening Messages to $who…' : 'Opening Messages…')
      : 'Could not open Messages.';
}

Future<String?> _runWhatsApp(NgmyPhoneAction action) async {
  final phone = (action.fields['phone'] ?? '').replaceAll(RegExp(r'[^\d]'), '');
  if (phone.isEmpty) return 'Could not find a phone number for that name.';
  final body = action.fields['body']?.trim() ?? '';
  final params = body.isNotEmpty ? '?text=${Uri.encodeComponent(body)}' : '';
  final candidates = [
    Uri.parse('https://wa.me/$phone$params'),
    Uri.parse('whatsapp://send?phone=$phone${body.isNotEmpty ? '&text=${Uri.encodeComponent(body)}' : ''}'),
  ];
  for (final uri in candidates) {
    if (await _launchExternal(uri)) {
      final who = action.fields['contactName'] ?? action.fields['name'] ?? '';
      return who.isNotEmpty ? 'Opening WhatsApp to $who…' : 'Opening WhatsApp…';
    }
  }
  return 'Could not open WhatsApp.';
}

Future<String?> _runEmail(NgmyPhoneAction action) async {
  final to = (action.fields['to'] ?? '').trim();
  if (to.isEmpty) return 'No email address provided.';
  final params = <String, String>{};
  final subject = action.fields['subject']?.trim();
  final body = action.fields['body']?.trim();
  if (subject != null && subject.isNotEmpty) params['subject'] = subject;
  if (body != null && body.isNotEmpty) params['body'] = body;
  final uri = Uri(scheme: 'mailto', path: to, queryParameters: params.isEmpty ? null : params);
  final ok = await _launchExternal(uri);
  return ok ? 'Opening Mail…' : 'Could not open Mail.';
}

Future<String?> _runSendEmail(
  NgmyPhoneAction action, {
  required bool isAdmin,
  required String requesterEmail,
  String resendApiKey = '',
  String resendFromEmail = '',
  dynamic config,
}) async {
  if (!isAdmin) return 'Only NGMY admins can send direct emails from the AI.';
  final to = (action.fields['to'] ?? '').trim();
  if (to.isEmpty) return 'No email address provided.';
  final subject = (action.fields['subject'] ?? 'Message from NGMY').trim();
  final body = (action.fields['body'] ?? action.fields['html'] ?? action.fields['message'] ?? '').trim();
  if (body.isEmpty) return 'No email message body was provided.';

  final apiKey = resendApiKey.trim().isNotEmpty
      ? resendApiKey.trim()
      : await NgmyResendEmail.resolveApiKey(config: config);
  final from = resendFromEmail.trim().isNotEmpty
      ? resendFromEmail.trim()
      : await NgmyResendEmail.resolveFromEmail(config: config);

  final result = await NgmyResendEmail.send(
    apiKey: apiKey,
    from: from,
    to: to,
    subject: subject,
    body: body,
    requesterEmail: requesterEmail,
  );
  if (!result.ok) return result.error ?? 'Email could not be sent.';
  final id = result.messageId;
  return id != null && id.isNotEmpty ? 'Email sent to $to.' : 'Email sent to $to.';
}

String _cleanHandle(String raw) => raw.trim().replaceFirst(RegExp(r'^@+'), '').trim();

Future<String?> _runMessenger(NgmyPhoneAction action) async {
  final url = (action.fields['url'] ?? '').trim();
  final username = _cleanHandle(action.fields['username'] ?? action.fields['page'] ?? '');
  final candidates = <Uri>[];
  if (url.isNotEmpty) {
    candidates.add(Uri.parse(url.startsWith('http') ? url : 'https://$url'));
  }
  if (username.isNotEmpty) {
    candidates.add(Uri.parse('fb-messenger://user-thread/$username'));
    candidates.add(Uri.parse('https://m.me/$username'));
  }
  candidates.add(Uri.parse('https://www.messenger.com/'));
  for (final uri in candidates) {
    if (await _launchExternal(uri)) return 'Opening Messenger…';
  }
  return 'Could not open Messenger.';
}

Future<String?> _runFacebook(NgmyPhoneAction action) async {
  final url = (action.fields['url'] ?? '').trim();
  final username = _cleanHandle(action.fields['username'] ?? action.fields['page'] ?? '');
  final candidates = <Uri>[];
  if (url.isNotEmpty) {
    candidates.add(Uri.parse(url.startsWith('http') ? url : 'https://$url'));
  }
  if (username.isNotEmpty) {
    candidates.add(Uri.parse('fb://profile/$username'));
    candidates.add(Uri.parse('https://www.facebook.com/$username'));
  }
  candidates.add(Uri.parse('fb://feed'));
  candidates.add(Uri.parse('https://www.facebook.com/'));
  for (final uri in candidates) {
    if (await _launchExternal(uri)) return 'Opening Facebook…';
  }
  return 'Could not open Facebook.';
}

Future<String?> _runInstagram(NgmyPhoneAction action) async {
  final url = (action.fields['url'] ?? '').trim();
  final username = _cleanHandle(action.fields['username'] ?? '');
  final candidates = <Uri>[];
  if (url.isNotEmpty) {
    candidates.add(Uri.parse(url.startsWith('http') ? url : 'https://$url'));
  }
  if (username.isNotEmpty) {
    candidates.add(Uri.parse('instagram://user?username=$username'));
    candidates.add(Uri.parse('https://www.instagram.com/$username/'));
  }
  candidates.add(Uri.parse('https://www.instagram.com/'));
  for (final uri in candidates) {
    if (await _launchExternal(uri)) return 'Opening Instagram…';
  }
  return 'Could not open Instagram.';
}

Future<String?> _runTelegram(NgmyPhoneAction action) async {
  final url = (action.fields['url'] ?? '').trim();
  final username = _cleanHandle(action.fields['username'] ?? '');
  final candidates = <Uri>[];
  if (url.isNotEmpty) {
    candidates.add(Uri.parse(url.startsWith('http') ? url : 'https://$url'));
  }
  if (username.isNotEmpty) {
    candidates.add(Uri.parse('tg://resolve?domain=$username'));
    candidates.add(Uri.parse('https://t.me/$username'));
  }
  candidates.add(Uri.parse('https://web.telegram.org/'));
  for (final uri in candidates) {
    if (await _launchExternal(uri)) return 'Opening Telegram…';
  }
  return 'Could not open Telegram.';
}

Future<String?> _runOpenUrl(NgmyPhoneAction action) async {
  var url = (action.fields['url'] ?? '').trim();
  if (url.isEmpty) return 'No link provided.';
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://$url';
  }
  final ok = await _launchExternal(Uri.parse(url));
  return ok ? 'Opening link…' : 'Could not open that link.';
}

Future<String?> _runOpenTool(NgmyPhoneAction action) async {
  final tool = (action.fields['tool'] ?? action.fields['app'] ?? '').trim().toLowerCase();
  if (tool.isEmpty) return 'No NGMY tool was specified.';
  return NgmyAiAppBridge.open(tool);
}

/// Compact chips shown under an AI message that triggered phone actions.
Widget ngmyPhoneActionChips({
  required List<NgmyPhoneAction> actions,
  required Future<void> Function(NgmyPhoneAction action) onTap,
  required bool isDark,
}) {
  if (actions.isEmpty) return const SizedBox.shrink();
  return Padding(
    padding: const EdgeInsets.only(top: 6, left: 4),
    child: Wrap(
      spacing: 6,
      runSpacing: 6,
      children: [
        for (final action in actions)
          ActionChip(
            avatar: Icon(action.icon, size: 16, color: const Color(0xFF00B25A)),
            label: Text(action.summary, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600)),
            backgroundColor: isDark ? const Color(0xFF1C2433) : const Color(0xFFE8F8EF),
            side: BorderSide(color: const Color(0xFF00B25A).withValues(alpha: 0.45)),
            onPressed: () => onTap(action),
          ),
      ],
    ),
  );
}
