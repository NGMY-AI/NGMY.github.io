import 'ngmy_phone_integrations.dart';

/// Detect wake-up / alarm requests when the AI forgets the action block.
List<NgmyPhoneAction> ngmyInferAlarmActionsFromUserMessage(
  String userText, {
  DateTime? now,
}) {
  final text = userText.trim();
  if (text.isEmpty) return const [];

  final lower = text.toLowerCase();
  final wantsAlarm = RegExp(
    r'\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|remind me to wake|'
    r'need to wake|get me up|morning alarm)\b',
    caseSensitive: false,
  ).hasMatch(lower);

  final workAt = RegExp(
    r'\b(work|shift|job|meeting|appointment|class|school).{0,24}\bat\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b',
    caseSensitive: false,
  ).firstMatch(lower);

  if (!wantsAlarm && workAt == null) return const [];

  final anchor = now ?? DateTime.now();
  DateTime alarmTime;
  String title;

  if (workAt != null && !RegExp(r'\bat\s+\d', caseSensitive: false).hasMatch(lower.replaceFirst(workAt.group(0)!, ''))) {
    final workHour = _parseHour(workAt.group(2), workAt.group(4), workAt.group(3));
    final workMin = int.tryParse(workAt.group(3) ?? '') ?? 0;
    var day = DateTime(anchor.year, anchor.month, anchor.day);
    if (lower.contains('tomorrow')) day = day.add(const Duration(days: 1));
    final workWhen = DateTime(day.year, day.month, day.day, workHour, workMin);
    alarmTime = workWhen.subtract(const Duration(hours: 1));
    if (alarmTime.isBefore(anchor.add(const Duration(minutes: 5)))) {
      alarmTime = alarmTime.add(const Duration(days: 1));
    }
    title = 'Wake up — ${_workLabel(workAt.group(1))} at ${_shortTime(workHour, workMin)}';
  } else {
    alarmTime = _parseAlarmWhen(lower, anchor);
    title = _parseAlarmTitle(text, lower);
  }

  return [
    NgmyPhoneAction(
      type: 'alarm',
      fields: {
        'title': title,
        'start': alarmTime.toIso8601String(),
        'notes': 'Wake alarm from NGMY Helper',
      },
    ),
  ];
}

String _workLabel(String? raw) {
  final w = (raw ?? 'work').toLowerCase();
  if (w.contains('meeting') || w.contains('appointment')) return 'Meeting';
  if (w.contains('class') || w.contains('school')) return 'Class';
  if (w.contains('shift')) return 'Shift';
  return 'Work';
}

String _shortTime(int hour, int minute) {
  final h = hour % 12 == 0 ? 12 : hour % 12;
  final ampm = hour >= 12 ? 'PM' : 'AM';
  final min = minute.toString().padLeft(2, '0');
  return '$h:$min $ampm';
}

int _parseHour(String? hRaw, String? ampm, String? minMaybeGroup) {
  var hour = int.tryParse(hRaw ?? '') ?? 7;
  final ampmL = ampm?.toLowerCase();
  if (ampmL == 'pm' && hour < 12) hour += 12;
  if (ampmL == 'am' && hour == 12) hour = 0;
  if (ampmL == null && hour >= 1 && hour <= 7) hour += 12;
  return hour.clamp(0, 23);
}

DateTime _parseAlarmWhen(String lower, DateTime anchor) {
  var day = DateTime(anchor.year, anchor.month, anchor.day);
  if (lower.contains('tomorrow')) day = day.add(const Duration(days: 1));

  final atTime = RegExp(r'\b(?:at|for)\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b', caseSensitive: false).firstMatch(lower);
  var hour = 7;
  var minute = 0;
  if (atTime != null) {
    hour = _parseHour(atTime.group(1), atTime.group(3), atTime.group(2));
    minute = int.tryParse(atTime.group(2) ?? '') ?? 0;
  }

  var when = DateTime(day.year, day.month, day.day, hour, minute);
  if (when.isBefore(anchor.add(const Duration(minutes: 2))) && !lower.contains('tomorrow')) {
    when = when.add(const Duration(days: 1));
  }
  return when;
}

String _parseAlarmTitle(String text, String lower) {
  if (lower.contains('work')) return 'Wake up — Work';
  if (lower.contains('school') || lower.contains('class')) return 'Wake up — School';
  final quoted = RegExp("\"([^\"]+)\"|'([^']+)'").firstMatch(text);
  if (quoted != null) {
    final q = (quoted.group(1) ?? quoted.group(2) ?? '').trim();
    if (q.length >= 3 && q.length <= 60) return 'Wake up — $q';
  }
  return 'Wake up';
}
