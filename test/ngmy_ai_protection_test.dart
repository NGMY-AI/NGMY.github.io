import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_ai_client.dart';

/// The AI protection: no key in the app, no direct calls to an AI company, and the server rules are in place.
/// (The limits themselves are tested in supabase/functions/ngmy-ai-chat/ai_gate_test.ts and ai_gate_e2e_test.ts.)
final _keyPatterns = [
  RegExp(r'AIza[0-9A-Za-z_-]{30,}'),
  RegExp(r'sk-ant-[0-9A-Za-z_-]{20,}'),
  RegExp(r'sk-(proj-)?[0-9A-Za-z]{30,}'),
];

List<File> _files(String dir, Set<String> ext) {
  final d = Directory(dir);
  if (!d.existsSync()) return [];
  return [
    for (final e in d.listSync(recursive: true, followLinks: false))
      if (e is File && ext.any((x) => e.path.endsWith(x)) && !e.path.contains('canvaskit')) e,
  ];
}

void main() {
  test('no AI key is in the app code or in the built web app (lib, web, docs, build/web)', () {
    final hits = <String>[];
    var scanned = 0;
    for (final dir in ['lib', 'web', 'docs', 'build/web']) {
      for (final f in _files(dir, {'.dart', '.js', '.html', '.json'})) {
        scanned++;
        final text = f.readAsStringSync(encoding: const SystemEncoding());
        for (final re in _keyPatterns) {
          final m = re.firstMatch(text);
          if (m != null) hits.add('${f.path}: ${m.group(0)!.substring(0, 8)}...');
        }
      }
    }
    expect(scanned, greaterThan(50));
    expect(hits, isEmpty, reason: 'a key-like string is in the client files');
  });

  test('the app never calls an AI company directly: every AI request goes to the NGMY server', () {
    final bad = RegExp(r'generativelanguage\.googleapis\.com|api\.openai\.com|api\.anthropic\.com|api\.elevenlabs\.io');
    final hits = <String>[];
    for (final f in _files('lib', {'.dart'})) {
      final m = bad.firstMatch(f.readAsStringSync());
      if (m != null) hits.add('${f.path}: ${m.group(0)}');
    }
    expect(hits, isEmpty);
  });

  test('the server answers for itself: it picks the AI company and never sends the key to an address from the browser', () {
    final src = File('supabase/functions/ngmy-ai-chat/index.ts').readAsStringSync();
    expect(src.contains('?key='), isFalse, reason: 'a key in a web address can end up in an error message');
    expect(src.contains('body?.provider'), isFalse);
    expect(src.contains('body.openAiBaseUrl'), isFalse);
    // Every route that spends money on an AI provider asks the gate first.
    for (final endpoint in ['"chat"', '"outfit"', '"image"', '"tts"', '"browse"', '"agent"']) {
      expect(src.contains('guardAi(req, $endpoint'), isTrue, reason: 'no gate on $endpoint');
    }
    // The gate comes before the provider key is even read, in the chat route.
    final chatGuard = src.indexOf('guardAi(req, "chat", aiCls)');
    final chatKey = src.indexOf('const serverKey = await resolveServerAiApiKey();');
    expect(chatGuard, greaterThan(0));
    expect(chatKey, greaterThan(chatGuard));
  });

  test('the friendly limit messages are final: they are never retried', () {
    expect(ngmyIsAiLimitMessage('You are using AI too fast. Please wait a little and try again.'), isTrue);
    expect(ngmyIsAiLimitMessage('The AI is busy right now. Please try again in a minute.'), isTrue);
    expect(ngmyIsAiLimitMessage('The AI is resting for now. Please try again later.'), isTrue);
    expect(ngmyIsAiLimitMessage('Please sign in to use AI.'), isTrue);
    expect(ngmyIsAiLimitMessage('Could not reach server.'), isFalse);
    expect(ngmyIsTransientAiHttpError('You are using AI too fast. Please wait a little and try again.'), isFalse);
    expect(ngmyIsTransientAiHttpError('The AI is busy right now. Please try again in a minute.'), isFalse);
    expect(ngmyIsTransientAiHttpError('HTTP 503 unavailable'), isTrue, reason: 'a real network glitch may still be retried by the old helper');
  });
}
