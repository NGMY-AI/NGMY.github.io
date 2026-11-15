import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kiapo_uongozi.dart';
import 'package:shared_preferences/shared_preferences.dart';

// Hati ya Kiapo cha Uongozi (the president's leadership oath paper): when the admin deletes it, it is gone for everyone and cannot come
// back by itself - only a new paper the admin creates shows again.

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    NgmyHatiKiapoStore.offlineForTests = true; // never touch the real database
    NgmyHatiKiapoStore.resetForTests();
  });

  test('deleted by the admin: gone, marked deleted, and the old paper cannot be saved back', () async {
    final paper = ngmyBuildHatiKiapoUongoziDeck(state: 'Georgia');
    await NgmyHatiKiapoStore.save(paper);
    expect(await NgmyHatiKiapoStore.loadForState('Georgia'), isNotNull);

    await NgmyHatiKiapoStore.delete('Georgia');
    expect(await NgmyHatiKiapoStore.loadForState('Georgia'), isNull);
    expect(await NgmyHatiKiapoStore.isDeleted('Georgia'), isTrue);

    // Someone still had the old paper open and saves it: refused, it stays deleted.
    expect(await NgmyHatiKiapoStore.save(paper), isFalse);
    expect(await NgmyHatiKiapoStore.loadForState('Georgia'), isNull);

    // After the app restarts, the delete is still remembered on this phone.
    NgmyHatiKiapoStore.resetForTests();
    expect(await NgmyHatiKiapoStore.loadForState('Georgia'), isNull);
    expect(await NgmyHatiKiapoStore.isDeleted('Georgia'), isTrue);
  });

  test('a NEW paper made by the admin after the delete shows again', () async {
    await NgmyHatiKiapoStore.save(ngmyBuildHatiKiapoUongoziDeck(state: 'Georgia'));
    await NgmyHatiKiapoStore.delete('Georgia');
    final fresh = ngmyBuildHatiKiapoUongoziDeck(state: 'Georgia');
    await NgmyHatiKiapoStore.save(fresh);
    final back = await NgmyHatiKiapoStore.loadForState('Georgia');
    expect(back, isNotNull);
    expect(back!.id, fresh.id);
    expect(await NgmyHatiKiapoStore.isDeleted('Georgia'), isFalse);
  });

  test('deleting one state leaves the other states alone', () async {
    await NgmyHatiKiapoStore.save(ngmyBuildHatiKiapoUongoziDeck(state: 'Georgia'));
    await NgmyHatiKiapoStore.save(ngmyBuildHatiKiapoUongoziDeck(state: 'Texas'));
    await NgmyHatiKiapoStore.delete('Georgia');
    expect(await NgmyHatiKiapoStore.loadForState('Georgia'), isNull);
    expect(await NgmyHatiKiapoStore.loadForState('Texas'), isNotNull);
  });
}
