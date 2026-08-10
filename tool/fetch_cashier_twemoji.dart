import 'dart:io';

/// Downloads Twemoji PNGs for Cashier gender avatars into assets/twemoji/.
Future<void> main() async {
  const emojis = <String>[
    '👨🏾',
    '👨🏽',
    '👨🏻',
    '👨🏿',
    '🧔‍♂️',
    '👨🏾‍🦱',
    '👨🏽‍🦱',
    '👨🏿‍🦱',
    '👨🏻‍🦱',
    '👨🏾‍🦲',
    '👨🏿‍🦲',
    '👨🏾‍💼',
    '👨🏽‍💼',
    '👨🏿‍💼',
    '👨🏾‍🎓',
    '👨🏽‍🎓',
    '👨',
    '👩🏾',
    '👩🏽',
    '👩🏻',
    '👩🏿',
    '👩🏾‍🦱',
    '👩🏽‍🦱',
    '👩🏿‍🦱',
    '👩🏻‍🦱',
    '👩🏾‍🦳',
    '👩🏿‍🦳',
    '👩🏾‍💼',
    '👩🏽‍💼',
    '👩🏿‍💼',
    '👩🏾‍🎓',
    '👩🏽‍🎓',
    '👩',
    '🧕',
    '👤',
    '🧔',
    '👨‍💼',
    '👩‍💼',
    '👨‍🎓',
    '👩‍🎓',
    '👩🏻‍🎓',
  ];

  final dir = Directory('assets/twemoji');
  await dir.create(recursive: true);

  const base =
      'https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/72x72/';
  var ok = 0;
  final miss = <String>[];

  for (final emoji in emojis) {
    final candidates = <String>{
      _codes(emoji),
      _codesNoVs(emoji),
    }.where((e) => e.isNotEmpty).toList();

    var saved = false;
    for (final code in candidates) {
      final file = File('assets/twemoji/$code.png');
      if (await file.exists() && await file.length() > 100) {
        stdout.writeln('HAVE $emoji -> $code');
        saved = true;
        ok++;
        break;
      }
      final uri = Uri.parse('$base$code.png');
      try {
        final client = HttpClient();
        final req = await client.getUrl(uri);
        final res = await req.close();
        if (res.statusCode == 200) {
          final bytes = await res.fold<List<int>>(
            <int>[],
            (prev, chunk) => prev..addAll(chunk),
          );
          if (bytes.length > 100) {
            await file.writeAsBytes(bytes, flush: true);
            stdout.writeln('GOT  $emoji -> $code');
            saved = true;
            ok++;
            client.close(force: true);
            break;
          }
        }
        client.close(force: true);
      } catch (e) {
        // try next candidate
      }
    }
    if (!saved) {
      miss.add('$emoji (${candidates.join(' | ')})');
      stdout.writeln('MISS $emoji');
    }
  }

  stdout.writeln('ok=$ok miss=${miss.length}');
  for (final m in miss) {
    stdout.writeln(' still $m');
  }
  if (miss.isNotEmpty) exitCode = 1;
}

String _codes(String s) =>
    s.runes.map((r) => r.toRadixString(16)).join('-');

String _codesNoVs(String s) => s.runes
    .where((r) => r != 0xfe0f)
    .map((r) => r.toRadixString(16))
    .join('-');
