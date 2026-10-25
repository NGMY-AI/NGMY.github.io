import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_user_groups.dart';

void main() {
  test('lightning users filter by state and relatives link', () {
    final a = NgmyLightningUser.fromMap({'email': 'a@x.com', 'name': 'Amina', 'state': 'Texas', 'phone': '5551112222', 'family': []});
    final b = NgmyLightningUser.fromMap({
      'email': 'b@x.com',
      'name': 'Baraka',
      'state': 'Texas',
      'family': [
        {'relation': 'mother', 'name': 'Amina', 'email': 'a@x.com'}
      ]
    });
    final c = NgmyLightningUser.fromMap({'email': 'c@x.com', 'name': 'Chuki', 'state': 'Ohio'});
    final list = ngmyLightningUsersForState('Texas', fromServer: [
      {'email': 'a@x.com', 'name': 'Amina', 'state': 'Texas'},
      {'email': 'b@x.com', 'name': 'Baraka', 'state': 'Texas'},
      {'email': 'c@x.com', 'name': 'Chuki', 'state': 'Ohio'},
    ]);
    expect(list.map((u) => u.name), ['Amina', 'Baraka']);
    final rel = ngmyLightningRelatives(a, [a, b, c]);
    expect(rel.single['relation'], 'child');
    expect(rel.single['fullName'], 'Baraka');
  });
}
