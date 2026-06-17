import 'package:add_2_calendar/add_2_calendar.dart';

Future<bool> ngmyAddNativeCalendarEvent({
  required String title,
  required DateTime start,
  required DateTime end,
  String? notes,
  String? location,
}) async {
  final event = Event(
    title: title,
    description: notes,
    location: location,
    startDate: start,
    endDate: end,
    iosParams: const IOSParams(reminder: Duration(minutes: 15)),
    androidParams: const AndroidParams(emailInvites: []),
  );
  return Add2Calendar.addEvent2Cal(event);
}
