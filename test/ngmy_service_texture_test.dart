import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_service_texture.dart';
import 'package:ngmy/ngmy_service_tile_3d.dart';

void main() {
  _tileTests();
  testWidgets('every service look draws its textured card around the content', (tester) async {
    for (final look in NgmyServiceLook.values) {
      await tester.pumpWidget(MaterialApp(home: Scaffold(body: Center(child: SizedBox(width: 360, child: NgmyServiceTexture(look: look, child: Text('inside ${look.name}')))))));
      expect(find.text('inside ${look.name}'), findsOneWidget);
      expect(tester.takeException(), isNull);
    }
  });
}

void _tileTests() {
  testWidgets('four 3D tiles sit in one frame and react to a tap', (tester) async {
    tester.view.physicalSize = const Size(430, 900);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    var taps = 0;
    await tester.pumpWidget(MaterialApp(home: Scaffold(body: _Host(onTap: () => taps++))));
    await tester.pump(const Duration(milliseconds: 600));
    expect(find.byType(NgmyTile3D), findsNWidgets(4));
    expect(find.byType(NgmyTileFrame), findsOneWidget);
    await tester.tap(find.text('tile 0'));
    await tester.pump(const Duration(milliseconds: 300));
    expect(taps, 1);
    expect(tester.takeException(), isNull);
  });
}

class _Host extends StatefulWidget {
  const _Host({required this.onTap});
  final VoidCallback onTap;

  @override
  State<_Host> createState() => _HostState();
}

class _HostState extends State<_Host> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(seconds: 2))..repeat(reverse: true);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => NgmyTileFrame(
        animation: _c,
        child: GridView.count(
          shrinkWrap: true,
          crossAxisCount: 2,
          children: [
            for (var i = 0; i < 4; i++)
              NgmyTile3D(colors: NgmyTileColors.of(NgmyServiceLook.values[i]), float: _c, phase: i * 0.2, selected: i == 1, onTap: widget.onTap, child: Center(child: Text('tile $i'))),
          ],
        ),
      );
}
