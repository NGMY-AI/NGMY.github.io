import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_communicate_storage.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  const email = 'tester@example.com';
  const advisor = 'cmp-test';

  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('messages are kept across reloads', () async {
    await NgmyCommunicateMemoryStore.append(email, advisor, role: 'user', text: 'hi');
    await NgmyCommunicateMemoryStore.append(email, advisor, role: 'ai', text: 'hello!');
    final rows = await NgmyCommunicateMemoryStore.load(email, advisor);
    expect(rows.map((r) => r['text']), ['hi', 'hello!']);
  });

  test('saving a shorter list never erases earlier messages', () async {
    for (final t in ['one', 'two', 'three']) {
      await NgmyCommunicateMemoryStore.append(email, advisor, role: 'user', text: t);
    }
    final rows = await NgmyCommunicateMemoryStore.load(email, advisor);
    // A stale screen saving only the last message must not wipe the others.
    await NgmyCommunicateMemoryStore.saveAll(email, advisor, [rows.last]);
    final after = await NgmyCommunicateMemoryStore.load(email, advisor);
    expect(after.map((r) => r['text']), ['one', 'two', 'three']);
  });

  test('more than 500 messages are all kept', () async {
    final many = [
      for (var i = 0; i < 620; i++)
        {'role': i.isEven ? 'user' : 'ai', 'text': 'msg $i', 'at': DateTime.utc(2026, 1, 1).add(Duration(seconds: i)).toIso8601String()},
    ];
    await NgmyCommunicateMemoryStore.saveAll(email, advisor, many);
    final rows = await NgmyCommunicateMemoryStore.load(email, advisor);
    expect(rows.length, 620);
  });

  test('reactions are saved and can be removed', () async {
    await NgmyCommunicateMemoryStore.append(email, advisor, role: 'ai', text: 'proud of you');
    await NgmyCommunicateMemoryStore.setReactionMatching(email, advisor, role: 'ai', text: 'proud of you', emoji: '❤️');
    expect((await NgmyCommunicateMemoryStore.load(email, advisor)).single['reaction'], '❤️');
    await NgmyCommunicateMemoryStore.setReactionMatching(email, advisor, role: 'ai', text: 'proud of you', emoji: '');
    expect((await NgmyCommunicateMemoryStore.load(email, advisor)).single.containsKey('reaction'), isFalse);
  });

  test('a corrupted quick copy does not lose the chat on the next save', () async {
    await NgmyCommunicateMemoryStore.append(email, advisor, role: 'user', text: 'keep me');
    final prefs = await SharedPreferences.getInstance();
    final key = prefs.getKeys().firstWhere((k) => k.startsWith('ngmy_communicate_chat_'));
    final good = prefs.getString(key)!;
    await prefs.setString(key, '{broken json');
    // Load sees nothing usable but must not throw.
    expect(await NgmyCommunicateMemoryStore.load(email, advisor), isA<List>());
    await prefs.setString(key, good);
    expect((await NgmyCommunicateMemoryStore.load(email, advisor)).single['text'], 'keep me');
  });
}
