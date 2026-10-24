import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Birthdays and ages in the Civic Registry.
///
/// A person's age is always worked out from their date of birth (MM/DD/YYYY), so it
/// goes up by itself on every birthday. A typed-in age is only used when there is no date.

/// A real, past date written MM/DD/YYYY, or null.
DateTime? ngmyParseDob(String text) {
  final m = RegExp(r'^(\d{2})/(\d{2})/(\d{4})$').firstMatch(text.trim());
  if (m == null) return null;
  final mo = int.parse(m.group(1)!), d = int.parse(m.group(2)!), y = int.parse(m.group(3)!);
  if (y < 1900 || mo < 1 || mo > 12 || d < 1) return null;
  final date = DateTime(y, mo, d);
  if (date.month != mo || date.day != d) return null; // 02/30 and the like
  if (date.isAfter(DateTime.now())) return null;
  return date;
}

/// Whole years lived on [today].
int ngmyAgeOn(DateTime dob, DateTime today) {
  var age = today.year - dob.year;
  final had = today.month > dob.month || (today.month == dob.month && today.day >= dob.day);
  if (!had) age--;
  return age < 0 ? 0 : age;
}

/// The age to show for a relative map: from the date of birth when there is one.
int? ngmyRelativeAge(Map<String, dynamic> r, {DateTime? today}) {
  final dob = ngmyParseDob('${r['dob'] ?? ''}');
  if (dob != null) return ngmyAgeOn(dob, today ?? DateTime.now());
  return int.tryParse('${r['age'] ?? ''}');
}

/// The birthday in [year]. A 29 February birthday is kept on 28 February in other years.
DateTime ngmyBirthdayIn(DateTime dob, int year) {
  if (dob.month == 2 && dob.day == 29) {
    final leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    return DateTime(year, 2, leap ? 29 : 28);
  }
  return DateTime(year, dob.month, dob.day);
}

/// Days until the next birthday (0 means today).
int ngmyDaysUntilBirthday(DateTime dob, DateTime today) {
  final t = DateTime(today.year, today.month, today.day);
  var next = ngmyBirthdayIn(dob, t.year);
  if (next.isBefore(t)) next = ngmyBirthdayIn(dob, t.year + 1);
  return next.difference(t).inDays;
}

class CivicBirthdayEvent {
  const CivicBirthdayEvent({required this.who, required this.isSelf, required this.kind, required this.age, required this.date, required this.key});
  final String who;
  final bool isSelf;

  /// 'soon' (two days away), 'today', or 'turned18'.
  final String kind;

  /// The age they are turning (soon, today) or the age 18 (turned18).
  final int age;
  final DateTime date;

  /// Stays the same for the same birthday, so each one is shown only once.
  final String key;
}

String _monthDay(DateTime d) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return '${months[d.month - 1]} ${d.day}';
}

String ngmyBirthdayDateLabel(DateTime d) => _monthDay(d);

/// Who has a birthday to tell the user about right now: two days ahead, on the day, and a
/// congratulation for turning 18 (shown for up to a week after, if the app was closed that day).
List<CivicBirthdayEvent> ngmyCivicBirthdayEvents({
  required String selfName,
  required String selfDob,
  required List<Map<String, dynamic>> relatives,
  required DateTime today,
}) {
  final out = <CivicBirthdayEvent>[];
  final t = DateTime(today.year, today.month, today.day);
  void person(String name, String dobText, bool self) {
    final dob = ngmyParseDob(dobText);
    if (dob == null || name.trim().isEmpty) return;
    final days = ngmyDaysUntilBirthday(dob, t);
    final age = ngmyAgeOn(dob, t);
    final base = '${name.trim().toLowerCase()}|$dobText';
    if (days == 2) {
      out.add(CivicBirthdayEvent(who: name.trim(), isSelf: self, kind: 'soon', age: age + 1, date: t.add(const Duration(days: 2)), key: '$base|soon|${t.year}'));
    }
    if (days == 0 && age >= 1) {
      out.add(CivicBirthdayEvent(who: name.trim(), isSelf: self, kind: 'today', age: age, date: t, key: '$base|today|${t.year}'));
    }
    if (age == 18) {
      final since = t.difference(ngmyBirthdayIn(dob, t.year)).inDays;
      if (since >= 0 && since <= 7) {
        out.add(CivicBirthdayEvent(who: name.trim(), isSelf: self, kind: 'turned18', age: 18, date: ngmyBirthdayIn(dob, t.year), key: '$base|18'));
      }
    }
  }

  person(selfName, selfDob, true);
  void walk(List<Map<String, dynamic>> list) {
    for (final r in list) {
      person('${r['fullName'] ?? ''}', '${r['dob'] ?? ''}', false);
      final nested = r['relatives'];
      if (nested is List) walk(nested.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList());
    }
  }

  walk(relatives);
  return out;
}

/// True the first time a given birthday message is claimed on this phone for this user.
Future<bool> ngmyCivicBirthdayClaim(String email, String key) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final k = 'ngmy_civic_birthday_seen_${email.toLowerCase().trim()}';
    final seen = prefs.getStringList(k) ?? <String>[];
    if (seen.contains(key)) return false;
    seen.add(key);
    // Keep the list short: old birthdays are never needed again.
    await prefs.setStringList(k, seen.length > 80 ? seen.sublist(seen.length - 80) : seen);
    return true;
  } catch (_) {
    return true;
  }
}

String ngmyBirthdayNotificationText(CivicBirthdayEvent e) {
  final who = e.isSelf ? 'Your' : '${e.who}\'s';
  return switch (e.kind) {
    'soon' => '$who birthday is in 2 days, on ${_monthDay(e.date)}. ${e.isSelf ? 'You turn' : 'They turn'} ${e.age}!',
    'today' => e.isSelf ? 'Happy birthday! You are ${e.age} today. 🎉' : 'Today is ${e.who}\'s birthday. They are ${e.age} today! 🎉',
    _ => '',
  };
}

/// The congratulation pop-up for reaching 18.
Future<void> ngmyShowTurned18Dialog(BuildContext context, CivicBirthdayEvent e) {
  return showDialog<void>(
    context: context,
    builder: (ctx) => Dialog(
      backgroundColor: Colors.transparent,
      child: Container(
        padding: const EdgeInsets.fromLTRB(24, 26, 24, 18),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(28),
          gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF7C3AED), Color(0xFFDB2777), Color(0xFFF59E0B)]),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 30, offset: const Offset(0, 14))],
        ),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          const Text('🎉🎂🎊', style: TextStyle(fontSize: 44)),
          const SizedBox(height: 8),
          const Text('Congratulations!', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.w900)),
          const SizedBox(height: 10),
          Text(
            e.isSelf ? 'You just turned 18! Welcome to adulthood.' : '${e.who} just turned 18! A new adult in the family.',
            textAlign: TextAlign.center,
            style: const TextStyle(color: Colors.white, fontSize: 16.5, height: 1.4, fontWeight: FontWeight.w700),
          ),
          const SizedBox(height: 18),
          FilledButton(
            onPressed: () => Navigator.pop(ctx),
            style: FilledButton.styleFrom(backgroundColor: Colors.white, foregroundColor: const Color(0xFF7C3AED), minimumSize: const Size(160, 46), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
            child: const Text('Thank you!', style: TextStyle(fontWeight: FontWeight.w900)),
          ),
        ]),
      ),
    ),
  );
}

/// Types a date of birth as digits and puts the slashes in: 03142002 becomes 03/14/2002.
class NgmyDobFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final digits = newValue.text.replaceAll(RegExp(r'\D'), '');
    final d = digits.length > 8 ? digits.substring(0, 8) : digits;
    final b = StringBuffer();
    for (var i = 0; i < d.length; i++) {
      if (i == 2 || i == 4) b.write('/');
      b.write(d[i]);
    }
    final text = b.toString();
    return TextEditingValue(text: text, selection: TextSelection.collapsed(offset: text.length));
  }
}
