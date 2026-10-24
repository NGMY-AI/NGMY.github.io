import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_body_explorer.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

/// Reads the part names straight out of the bundled anatomy file.
List<String> bodyGroups() {
  final d = ByteData.sublistView(File('assets/data/body3d.bin').readAsBytesSync());
  var o = 4;
  final n = d.getUint32(o, Endian.little);
  o += 4;
  final names = <String>[];
  for (var i = 0; i < n; i++) {
    final len = d.getUint8(o++);
    names.add(utf8.decode([for (var k = 0; k < len; k++) d.getUint8(o + k)]));
    o += len + 1 + 3 + 1 + 8;
  }
  return names;
}

void main() {
  test('every part in the 3D anatomy file has something to read about it', () {
    final names = bodyGroups();
    expect(names.length, greaterThan(70));
    final missing = [for (final n in names) if (!kBodyFacts.containsKey(n)) n];
    expect(missing, isEmpty);
  });

  testWidgets('the real 3D body loads, turns, and a tap picks a part', (t) async {
    NgmyTone.enabled = false;
    t.view.physicalSize = const Size(430, 932);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyBodyExplorer()));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 2500)));
    await t.pump(const Duration(milliseconds: 400));
    await t.dragFrom(const Offset(215, 300), const Offset(100, 0));
    await t.pump(const Duration(milliseconds: 200));
    await t.tapAt(const Offset(215, 330));
    await t.pump(const Duration(milliseconds: 700));
    expect(t.takeException(), isNull);
    await t.ensureVisible(find.text('Organs'));
    await t.tap(find.text('Organs'), warnIfMissed: false);
    await t.pump(const Duration(milliseconds: 300));
    await t.ensureVisible(find.text('Heart'));
    await t.tap(find.text('Heart'), warnIfMissed: false);
    await t.pump(const Duration(milliseconds: 800));
    expect(find.textContaining('fist'), findsOneWidget);
    expect(t.takeException(), isNull);
  });
}
