import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_calendar_download_stub.dart' if (dart.library.html) 'ngmy_calendar_download_web.dart';
import 'ngmy_calendar_native_stub.dart' if (dart.library.io) 'ngmy_calendar_native_io.dart';
import 'ngmy_phone_action_ui.dart';

export 'ngmy_phone_action_ui.dart';

/// Apps NGMY Helper AI can open on the user's phone right now.
const List<({String id, String label, String example})> kNgmyPhoneConnectedApps = [
  (id: 'calendar', label: 'Calendar', example: 'Add dentist Friday at 3pm'),
  (id: 'maps', label: 'Maps', example: 'Open directions to 123 Main St'),
  (id: 'phone', label: 'Phone', example: 'Call my doctor at 555-0100'),
  (id: 'sms', label: 'Messages', example: 'Text Mom I am on my way'),
  (id: 'email', label: 'Mail', example: 'Email support about my order'),
  (id: 'browser', label: 'Safari / Chrome', example: 'Open ngmy.org'),
];

/// Instructions appended to Helper AI prompts so the model can trigger phone actions.
String ngmyHelperPhoneIntegrationContext({DateTime? now}) {
  final today = (now ?? DateTime.now()).toLocal();
  final todayLabel =
      '${today.year}-${today.month.toString().padLeft(2, '0')}-${today.day.toString().padLeft(2, '0')} '
      '${today.hour.toString().padLeft(2, '0')}:${today.minute.toString().padLeft(2, '0')} (user local time)';
  return '''
PHONE INTEGRATIONS — CRITICAL: When the user asks to add/book/schedule a meeting or event on their PHONE calendar (Apple Calendar, Google Calendar, etc. — NOT anything inside the NGMY app), you MUST append the block below. Without it, their real calendar will not update.

Today is $todayLabel. Use this for "tomorrow", "Friday", "next week", etc.

Reply in plain language first, then append EXACTLY:

[[NGMY_PHONE_ACTIONS]]
[{"type":"calendar","title":"Team meeting","start":"2026-06-20T14:00:00","end":"2026-06-20T15:00:00","notes":"optional","location":"optional"}]
[[/NGMY_PHONE_ACTIONS]]

Supported action types (JSON array):
- calendar — title (required), start (ISO 8601 local datetime), end (optional, default +1 hour), notes, location
- maps — query or address (required)
- call — phone (required)
- sms — phone (required), body (optional)
- email — to (required), subject, body
- open_url — url (required)

Rules:
- REQUIRED for any calendar / meeting / appointment request — never skip the block.
- start/end must be valid ISO datetimes in the user's local timezone.
- Never invent phone numbers or emails — ask if missing.
- Do not tell them to use NGMY's in-app admin calendar — this is their real iPhone/Android calendar.
''';
}

/// Parsed phone action from Helper AI output.
class NgmyPhoneAction {
  final String type;
  final Map<String, String> fields;

  const NgmyPhoneAction({required this.type, required this.fields});

  String get label => switch (type) {
        'calendar' => 'Add to Calendar',
        'maps' => 'Open Maps',
        'call' => 'Call',
        'sms' => 'Send Text',
        'email' => 'Send Email',
        'open_url' => 'Open Link',
        _ => 'Run',
      };

  IconData get icon => switch (type) {
        'calendar' => Icons.calendar_month_rounded,
        'maps' => Icons.map_rounded,
        'call' => Icons.phone_rounded,
        'sms' => Icons.sms_rounded,
        'email' => Icons.email_rounded,
        'open_url' => Icons.open_in_new_rounded,
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
      case 'maps':
        return fields['query'] ?? fields['address'] ?? 'Open location';
      case 'call':
      case 'sms':
        return fields['phone'] ?? '';
      case 'email':
        return fields['to'] ?? fields['subject'] ?? 'Email';
      case 'open_url':
        final url = fields['url'] ?? '';
        return url.length > 42 ? '${url.substring(0, 39)}…' : url;
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

  final loose = RegExp(r'(\[\s*\{[\s\S]*?"type"\s*:\s*"(?:calendar|maps|call|sms|email|open_url)"[\s\S]*?\}\s*\])');
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
}) {
  final uid = 'ngmy-${DateTime.now().microsecondsSinceEpoch}@ngmy.org';
  final body = StringBuffer()
    ..writeln('BEGIN:VCALENDAR')
    ..writeln('VERSION:2.0')
    ..writeln('PRODID:-//NGMY//Helper AI//EN')
    ..writeln('CALSCALE:GREGORIAN')
    ..writeln('METHOD:PUBLISH')
    ..writeln('BEGIN:VEVENT')
    ..writeln('UID:$uid')
    ..writeln('DTSTAMP:${_icsDate(DateTime.now().toUtc())}Z')
    ..writeln('DTSTART:${_icsDate(start)}')
    ..writeln('DTEND:${_icsDate(end)}')
    ..writeln('SUMMARY:${_escapeIcs(title)}');
  if (notes != null && notes.trim().isNotEmpty) {
    body.writeln('DESCRIPTION:${_escapeIcs(notes.trim())}');
  }
  if (location != null && location.trim().isNotEmpty) {
    body.writeln('LOCATION:${_escapeIcs(location.trim())}');
  }
  body
    ..writeln('END:VEVENT')
    ..writeln('END:VCALENDAR');
  return Uint8List.fromList(utf8.encode(body.toString()));
}

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
  return action.type == 'calendar' || action.type == 'call' || action.type == 'sms' || action.type == 'email';
}

Future<String?> ngmyRunPhoneAction(
  NgmyPhoneAction action, {
  BuildContext? context,
  bool skipConfirmation = false,
}) async {
  if (_needsConfirmation(action) && context != null && context.mounted && !skipConfirmation) {
    final ok = await ngmyShowPhoneActionSheet(context: context, action: action);
    if (!ok) return 'Cancelled.';
  }

  switch (action.type) {
    case 'calendar':
      return _runCalendar(action);
    case 'maps':
      return _runMaps(action);
    case 'call':
      return _runCall(action);
    case 'sms':
      return _runSms(action);
    case 'email':
      return _runEmail(action);
    case 'open_url':
      return _runOpenUrl(action);
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
      );
      if (added) return 'Added "$title" to your phone Calendar app.';
    } catch (e) {
      debugPrint('[phone] native calendar error: $e');
    }
  }

  if (kIsWeb) {
    try {
      final bytes = _buildIcs(title: title, start: start, end: end, notes: notes, location: location);
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
  if (phone.isEmpty) return 'No phone number provided.';
  final ok = await _launchExternal(Uri.parse('tel:$phone'));
  return ok ? 'Opening Phone…' : 'Could not start a call.';
}

Future<String?> _runSms(NgmyPhoneAction action) async {
  final phone = (action.fields['phone'] ?? '').replaceAll(RegExp(r'[^\d+]+'), '');
  if (phone.isEmpty) return 'No phone number provided.';
  final body = action.fields['body']?.trim() ?? '';
  final uri = body.isEmpty
      ? Uri.parse('sms:$phone')
      : Uri.parse('sms:$phone?body=${Uri.encodeComponent(body)}');
  final ok = await _launchExternal(uri);
  return ok ? 'Opening Messages…' : 'Could not open Messages.';
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

Future<String?> _runOpenUrl(NgmyPhoneAction action) async {
  var url = (action.fields['url'] ?? '').trim();
  if (url.isEmpty) return 'No link provided.';
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://$url';
  }
  final ok = await _launchExternal(Uri.parse(url));
  return ok ? 'Opening link…' : 'Could not open that link.';
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
