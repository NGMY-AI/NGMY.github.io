import 'dart:convert';
import 'dart:typed_data';

/// Build an iCalendar (.ics) file. When [alarmAtStart] is true, includes VALARM so
/// the phone Calendar app alerts (rings) at event start.
Uint8List ngmyBuildIcsBytes({
  required String title,
  required DateTime start,
  required DateTime end,
  String? notes,
  String? location,
  bool alarmAtStart = false,
  int alarmMinutesBefore = 0,
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
    ..writeln('DTSTAMP:${_icsDateUtc(DateTime.now().toUtc())}')
    ..writeln('DTSTART:${_icsDateLocal(start)}')
    ..writeln('DTEND:${_icsDateLocal(end)}')
    ..writeln('SUMMARY:${_escapeIcs(title)}');
  if (notes != null && notes.trim().isNotEmpty) {
    body.writeln('DESCRIPTION:${_escapeIcs(notes.trim())}');
  }
  if (location != null && location.trim().isNotEmpty) {
    body.writeln('LOCATION:${_escapeIcs(location.trim())}');
  }
  if (alarmAtStart || alarmMinutesBefore > 0) {
    final trigger = alarmMinutesBefore <= 0 ? '-PT0M' : '-PT${alarmMinutesBefore}M';
    body
      ..writeln('BEGIN:VALARM')
      ..writeln('TRIGGER:$trigger')
      ..writeln('ACTION:DISPLAY')
      ..writeln('DESCRIPTION:${_escapeIcs(title)}')
      ..writeln('END:VALARM');
  }
  body
    ..writeln('END:VEVENT')
    ..writeln('END:VCALENDAR');
  return Uint8List.fromList(utf8.encode(body.toString()));
}

String _icsDateLocal(DateTime dt) {
  final local = dt.toLocal();
  String two(int n) => n.toString().padLeft(2, '0');
  return '${local.year}${two(local.month)}${two(local.day)}T${two(local.hour)}${two(local.minute)}${two(local.second)}';
}

String _icsDateUtc(DateTime dt) {
  String two(int n) => n.toString().padLeft(2, '0');
  return '${dt.year}${two(dt.month)}${two(dt.day)}T${two(dt.hour)}${two(dt.minute)}${two(dt.second)}Z';
}

String _escapeIcs(String value) {
  return value.replaceAll('\\', '\\\\').replaceAll('\n', '\\n').replaceAll(',', '\\,').replaceAll(';', '\\;');
}
