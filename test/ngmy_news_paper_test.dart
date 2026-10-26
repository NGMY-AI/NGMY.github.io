import 'dart:io';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_news_paper.dart';

const sp = 'C:/Users/appbu/AppData/Local/Temp/claude/C--Users-appbu-StudioProjects-ngmy/57c6e595-d6c4-43c4-9873-33fc75db63b1/scratchpad';

const doc = NgmyNewsDoc(
  paper: 'The NGMY Times',
  category: 'COMMUNITY',
  headline: 'NGMY Opens Its Doors To Young Builders Everywhere',
  subhead: 'One app now brings work, money, learning and community together for families across the country',
  byline: 'By the NGMY Newsroom',
  caption: 'Members gather as the new NGMY Hub opens, with the Civic Registry at its heart.',
  body: [
    'KB PABLO QR, Founder, President and CEO of NGMY, has built one app that gives young people and families the tools they need for work, money, learning and community. From the Civic Registry to the Advisors, every part of NGMY was made so that people can see, trust and help each other.',
    'In the Civic Registry, every contribution gets a receipt, and members can see where the money goes. Authorized Registrars enroll families state by state, and the community can print its roster whenever it is needed. The result is something simple and powerful: trust you can see.',
    'Away from the registry, NGMY Hub offers a store, a Help Center, a Document Scanner and more, while the Creator Hub holds studios for video, quotes, QR codes and learning Kiswahili. Growth Income lets members earn on work days, and every receipt shows the balance before and after.',
    'The Core Protocol studios turn curiosity into play: a real 3D body to explore, an electronics lab, a DNA lab and a rocket to land. NGMY says the movement is only beginning, and everyone is welcome to join.',
    'NGMY Advisors are AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili whenever you write Swahili. Members say the advice feels warm and personal, and the advisors never lose sight of who built the app.',
    'Families also keep the Family Book, a library of up to six books. The AI can write a whole new book from the family tree, in English or Swahili, and the cover can be designed to match the family. It is one more way NGMY helps people keep their story.',
  ],
  pullQuote: 'Trust you can see.',
  sidebarTitle: 'Did you know?',
  sidebarText: 'Every contribution in the Civic Registry gets a receipt, so the whole community can follow the money.',
);

Future<Uint8List> _photo() async {
  final rec = ui.PictureRecorder();
  final c = Canvas(rec);
  c.drawRect(const Rect.fromLTWH(0, 0, 800, 500), Paint()..shader = const LinearGradient(colors: [Color(0xFF1E3A8A), Color(0xFFF59E0B)]).createShader(const Rect.fromLTWH(0, 0, 800, 500)));
  c.drawCircle(const Offset(560, 160), 70, Paint()..color = const Color(0xFFFDE68A));
  c.drawRect(const Rect.fromLTWH(0, 330, 800, 170), Paint()..color = const Color(0xFF14532D));
  final img = await rec.endRecording().toImage(800, 500);
  return (await img.toByteData(format: ui.ImageByteFormat.png))!.buffer.asUint8List();
}

void main() {
  testWidgets('every newspaper design draws a full page with its two watermarks', (t) async {
    t.view.physicalSize = const Size(kNewsPageW, kNewsPageH);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.runAsync(() async {
      final roboto = FontLoader('Roboto');
      for (final f in ['Light', 'Regular', 'Medium', 'Bold']) {
        roboto.addFont(rootBundle.load('assets/fonts/Roboto-$f.ttf'));
      }
      await roboto.load();
      await ngmyLoadNewsFonts();
    });
    final photo = await t.runAsync(_photo);
    for (final tpl in kNgmyNewsTemplates) {
      final key = GlobalKey();
      await t.pumpWidget(MaterialApp(debugShowCheckedModeBanner: false, home: Scaffold(body: RepaintBoundary(key: key, child: NgmyNewspaperView(doc: doc, template: tpl, photo: photo, date: DateTime(2026, 10, 25))))));
      await t.pump(const Duration(milliseconds: 200));
      expect(t.takeException(), isNull, reason: tpl.id);
      expect(find.text('CREATED BY NGMY.ORG'), findsOneWidget);
      expect(find.text('NGMY.ORG'), findsWidgets);
      await t.runAsync(() async {
        final ro = key.currentContext!.findRenderObject() as RenderRepaintBoundary;
        final img = await ro.toImage(pixelRatio: 1.0);
        final bd = await img.toByteData(format: ui.ImageByteFormat.png);
        File('$sp/news_${tpl.id}.png').writeAsBytesSync(bd!.buffer.asUint8List());
      });
    }
  });
}
