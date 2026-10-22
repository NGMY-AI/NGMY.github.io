import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_service_texture.dart';

void main() {
  testWidgets('every service look draws its textured card around the content', (tester) async {
    for (final look in NgmyServiceLook.values) {
      await tester.pumpWidget(MaterialApp(home: Scaffold(body: Center(child: SizedBox(width: 360, child: NgmyServiceTexture(look: look, child: Text('inside ${look.name}')))))));
      expect(find.text('inside ${look.name}'), findsOneWidget);
      expect(tester.takeException(), isNull);
    }
  });
}
