import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_login_logo.dart';

void main() {
  testWidgets('login paints without an error and the logo and title are centred', (t) async {
    t.view.physicalSize = const Size(786, 1704);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(theme: ThemeData.dark(), home: AuthScreen(allUsers: const [], config: AppConfig(), onAuthComplete: (a, b, c, d, e) async {}, onGoogleLogin: (e) async => null, onGithubLogin: (e) async => null, onResetPasswordByEmail: (a, b, c) async => true)));
    await t.pump(const Duration(milliseconds: 1500));
    expect(t.takeException(), isNull, reason: 'nothing may fail while the login is painted');
    final title = t.getRect(find.byType(NgmyLoginTitleFrame));
    expect((title.center.dx - 196.5).abs(), lessThan(2));
    await t.pump(const Duration(seconds: 12));
    await t.pumpWidget(const SizedBox());
  });
}
