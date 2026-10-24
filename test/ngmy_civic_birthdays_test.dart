import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_birthdays.dart';

void main() {
  test('age comes from the date of birth and goes up on the birthday', () {
    final dob = ngmyParseDob('03/14/2002')!;
    expect(ngmyAgeOn(dob, DateTime(2026, 3, 13)), 23);
    expect(ngmyAgeOn(dob, DateTime(2026, 3, 14)), 24);
    expect(ngmyAgeOn(dob, DateTime(2027, 3, 13)), 24);
    expect(ngmyAgeOn(dob, DateTime(2027, 3, 14)), 25);
    expect(ngmyRelativeAge({'dob': '03/14/2002', 'age': 5}, today: DateTime(2026, 10, 24)), 24);
    expect(ngmyRelativeAge({'dob': '', 'age': 7}), 7);
    expect(ngmyParseDob('02/30/2010'), isNull);
    expect(ngmyParseDob('13/01/2010'), isNull);
    expect(ngmyParseDob('01/01/2999'), isNull);
    expect(ngmyParseDob('1/1/2010'), isNull);
  });

  test('a leap day birthday is kept on 28 February in other years', () {
    final dob = ngmyParseDob('02/29/2004')!;
    expect(ngmyBirthdayIn(dob, 2025), DateTime(2025, 2, 28));
    expect(ngmyBirthdayIn(dob, 2028), DateTime(2028, 2, 29));
    expect(ngmyDaysUntilBirthday(dob, DateTime(2025, 2, 26)), 2);
  });

  test('birthdays are announced two days ahead, on the day, and at 18', () {
    final rels = <Map<String, dynamic>>[
      {'fullName': 'Ada Lovelace', 'dob': '10/26/2010', 'relation': 'child'},
      {'fullName': 'Sam Lovelace', 'dob': '10/24/2008', 'relation': 'child'},
      {'fullName': 'Max Lovelace', 'dob': '10/21/2008', 'relation': 'child'},
      {'fullName': 'Old Enough', 'dob': '10/10/2006', 'relation': 'child'},
    ];
    final today = DateTime(2026, 10, 24);
    final ev = ngmyCivicBirthdayEvents(selfName: 'Parent One', selfDob: '10/26/1980', relatives: rels, today: today);
    expect(ev.where((e) => e.kind == 'soon').map((e) => e.who), containsAll(['Ada Lovelace', 'Parent One']));
    expect(ev.firstWhere((e) => e.who == 'Ada Lovelace' && e.kind == 'soon').age, 16);
    expect(ev.where((e) => e.kind == 'today').map((e) => e.who), ['Sam Lovelace']);
    final eighteen = ev.where((e) => e.kind == 'turned18').map((e) => e.who).toList();
    expect(eighteen, containsAll(['Sam Lovelace', 'Max Lovelace']));
    expect(eighteen.contains('Old Enough'), isFalse); // turned 20, not 18
    expect(ngmyBirthdayNotificationText(ev.firstWhere((e) => e.who == 'Ada Lovelace' && e.kind == 'soon')), contains('in 2 days'));
    // The same birthday has a stable key, so it is only ever announced once.
    final again = ngmyCivicBirthdayEvents(selfName: 'Parent One', selfDob: '10/26/1980', relatives: rels, today: today);
    expect(again.map((e) => e.key), ev.map((e) => e.key));
  });

  test('the date box puts the slashes in by itself', () {
    final f = NgmyDobFormatter();
    expect(f.formatEditUpdate(TextEditingValue.empty, const TextEditingValue(text: '03142002')).text, '03/14/2002');
    expect(f.formatEditUpdate(TextEditingValue.empty, const TextEditingValue(text: '0314')).text, '03/14');
    expect(f.formatEditUpdate(TextEditingValue.empty, const TextEditingValue(text: '031420021234')).text, '03/14/2002');
  });
}
