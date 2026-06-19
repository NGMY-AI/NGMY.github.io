/// Web / stub — native calendar API not available.
Future<bool> ngmyAddNativeCalendarEvent({
  required String title,
  required DateTime start,
  required DateTime end,
  String? notes,
  String? location,
  int reminderMinutesBefore = 15,
}) async {
  return false;
}
