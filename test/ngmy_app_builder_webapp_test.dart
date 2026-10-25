import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_app_builder_ai.dart';
import 'package:ngmy/ngmy_app_builder_runtime.dart';
import 'package:ngmy/ngmy_app_builder_webapp_doc.dart';

const _reply = '''
Here is your snake game! Swipe to turn.
---APP_JSON---
{"name":"Snake","tagline":"Eat and grow","themeColorHex":"#22C55E","screens":[
 {"id":"home","title":"Snake","kind":"custom","data":{"fullBleed":true,"hideAppBar":true,"layout":{"type":"webApp","id":"game","htmlRef":"game","height":640}}}
]}
---HTML:game---
<!doctype html>
<html><head><title>Snake</title></head><body><canvas id="c"></canvas>
<script>
const s = "line one
line two";
localStorage.setItem('best', '3');
</script></body></html>
---END_HTML---
''';

void main() {
  test('the AI can hand over a whole app as code and it lands inside the webApp widget', () {
    final r = ngmyParseCopilotReply(_reply, null, 'a@b.c');
    final p = r.updatedProject;
    expect(p, isNotNull);
    expect(p!.name, 'Snake');
    final layout = ngmyScreenLayout(p.screens.first)!;
    expect(layout['type'], 'webApp');
    expect('${layout['html']}', contains('<canvas id="c">'));
    expect('${layout['html']}', contains('localStorage.setItem'));
    expect(p.screens.first.data['fullBleed'], true);
    expect(r.message, isNot(contains('---HTML')));
  });

  test('code cut off before its closing line is still kept', () {
    final cut = ngmySplitHtmlBlocks('hi\n---HTML:x---\n<!doctype html><html><body>${'a' * 500}</body></html>');
    expect(cut.blocks['x'], contains('</html>'));
    expect(cut.text, 'hi');
  });

  test('the sandbox page gets a safe storage stand-in', () {
    final withHead = ngmyWebAppDocument('<html><head><title>x</title></head><body>hi</body></html>', key: 'app_main', store: {'best': '</script>7'});
    expect(withHead, contains('ngmyWebApp'));
    expect(withHead.indexOf('<script>'), lessThan(withHead.indexOf('<body>')));
    expect(withHead, isNot(contains('</script>7')));
    final bare = ngmyWebAppDocument('<div>hi</div>', key: 'k');
    expect(bare, startsWith('<!doctype html>'));
    expect(bare, contains('<div>hi</div>'));
  });

  testWidgets('a webApp widget builds in the runtime', (t) async {
    await t.pumpWidget(MaterialApp(
      home: Scaffold(
        body: SingleChildScrollView(
          child: NgmyAppLayoutRenderer(
            layout: const {'type': 'column', 'children': [{'type': 'webApp', 'id': 'g', 'html': '<html><body>hi</body></html>', 'height': 300}]},
            theme: Colors.green,
            appId: 'app1',
            onNavigate: (_) {},
            onSnack: (_) {},
          ),
        ),
      ),
    ));
    await t.pump(const Duration(milliseconds: 300));
    expect(t.takeException(), isNull);
  });
}
