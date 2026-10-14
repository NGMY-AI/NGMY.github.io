import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_admin_alerts.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('admin is told once about new dashboard items, never about old ones', () async {
    SharedPreferences.setMockInitialValues({});
    NgmyAdminAlertCategory civic(List<String> names) => NgmyAdminAlertCategory(
        'civic', 'New civic registry member', 'new civic registry members', [for (final n in names) NgmyAdminAlertItem(n, n)]);
    expect(await NgmyAdminAlerts.sweep([civic(['Amina', 'Juma'])]), isEmpty); // first look: quiet
    final one = await NgmyAdminAlerts.sweep([civic(['Amina', 'Juma', 'Neema'])]);
    expect(one.single.title, 'New civic registry member');
    expect(one.single.body, 'Neema');
    expect(await NgmyAdminAlerts.sweep([civic(['Amina', 'Juma', 'Neema'])]), isEmpty); // already told
    final many = await NgmyAdminAlerts.sweep([civic(['Amina', 'Juma', 'Neema', 'A', 'B', 'C', 'D'])]);
    expect(many.single.title, '4 new civic registry members');
    expect(NgmyAdminAlerts.rowLabel({'fullName': 'Amina Kweka', 'state': 'Georgia'}), 'Amina Kweka · Georgia');
  });
}
