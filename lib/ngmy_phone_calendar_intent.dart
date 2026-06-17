import 'ngmy_phone_integrations.dart';

/// Fallback when the AI forgets the action block — detect calendar booking from the user's words.
List<NgmyPhoneAction> ngmyInferCalendarActionsFromUserMessage(
  String userText, {
  DateTime? now,
}) {
  final text = userText.trim();
  if (text.isEmpty) return const [];

  final lower = text.toLowerCase();
  final wantsCalendar = RegExp(
    r'(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|'
    r'(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|'
    r'add.{0,20}to (my )?(phone )?calendar|'
    r'book (a |an )?(meeting|appointment|event)|'
    r'schedule (a |an )?(meeting|appointment|event)|'
    r'put (a |an )?(meeting|appointment|event)',
    caseSensitive: false,
  ).hasMatch(lower);
  if (!wantsCalendar) return const [];

  final anchor = now ?? DateTime.now();
  final start = _parseWhen(lower, anchor);
  final title = _parseTitle(text, lower);

  return [
    NgmyPhoneAction(
      type: 'calendar',
      fields: {
        'title': title,
        'start': start.toIso8601String(),
        'end': start.add(const Duration(hours: 1)).toIso8601String(),
        'notes': 'Added from NGMY Helper AI',
      },
    ),
  ];
}

String _parseTitle(String text, String lower) {
  final quoted = RegExp("\"([^\"]+)\"|'([^']+)'").firstMatch(text);
  if (quoted != null) {
    return (quoted.group(1) ?? quoted.group(2) ?? '').trim();
  }

  final called = RegExp(r'(?:called|named|titled)\s+(.+?)(?:\s+(?:on|at|for|tomorrow|today|next)\b|$)', caseSensitive: false)
      .firstMatch(lower);
  if (called != null) {
    final raw = called.group(1) ?? '';
    if (raw.length >= 3 && raw.length <= 80) {
      return _titleCase(raw.trim());
    }
  }

  final forMatch = RegExp(r'(?:meeting|appointment|event)\s+(?:for|about)\s+(.+?)(?:\s+(?:on|at|tomorrow|today|next)\b|$)', caseSensitive: false)
      .firstMatch(lower);
  if (forMatch != null) {
    final raw = forMatch.group(1) ?? '';
    if (raw.length >= 3 && raw.length <= 80) {
      return _titleCase(raw.trim());
    }
  }

  if (lower.contains('meeting')) return 'Meeting';
  if (lower.contains('appointment')) return 'Appointment';
  return 'NGMY Event';
}

String _titleCase(String s) {
  if (s.isEmpty) return s;
  return s.split(RegExp(r'\s+')).map((w) {
    if (w.isEmpty) return w;
    return w[0].toUpperCase() + w.substring(1);
  }).join(' ');
}

DateTime _parseWhen(String lower, DateTime anchor) {
  var day = DateTime(anchor.year, anchor.month, anchor.day);
  var hour = 9;
  var minute = 0;

  if (lower.contains('tomorrow')) {
    day = day.add(const Duration(days: 1));
  } else if (lower.contains('today')) {
    // keep day
  } else {
    const weekdays = {
      'monday': DateTime.monday,
      'tuesday': DateTime.tuesday,
      'wednesday': DateTime.wednesday,
      'thursday': DateTime.thursday,
      'friday': DateTime.friday,
      'saturday': DateTime.saturday,
      'sunday': DateTime.sunday,
    };
    for (final entry in weekdays.entries) {
      if (lower.contains(entry.key)) {
        day = _nextWeekday(day, entry.value);
        break;
      }
    }
  }

  final atTime = RegExp(r'\bat\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b', caseSensitive: false).firstMatch(lower);
  if (atTime != null) {
    hour = int.tryParse(atTime.group(1) ?? '') ?? hour;
    minute = int.tryParse(atTime.group(2) ?? '') ?? 0;
    final ampm = atTime.group(3)?.toLowerCase();
    if (ampm == 'pm' && hour < 12) hour += 12;
    if (ampm == 'am' && hour == 12) hour = 0;
    if (ampm == null && hour >= 1 && hour <= 7) hour += 12; // "at 3" → 3pm for meetings
  }

  return DateTime(day.year, day.month, day.day, hour, minute);
}

DateTime _nextWeekday(DateTime from, int weekday) {
  var d = from;
  for (var i = 0; i < 14; i++) {
    if (d.weekday == weekday && (i > 0 || d.isBefore(from.add(const Duration(hours: 1))))) {
      return d;
    }
    d = d.add(const Duration(days: 1));
  }
  return from.add(const Duration(days: 1));
}
