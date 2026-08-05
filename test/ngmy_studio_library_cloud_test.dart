import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_models.dart';
import 'package:ngmy/ngmy_menu_models.dart';
import 'package:ngmy/ngmy_studio_library_cloud.dart';

/// These rules decide whether a user's Menu Studio work survives a new phone,
/// and whether something they deleted stays deleted. Getting either wrong loses
/// or resurrects real customer data, so the merge is pinned down here.
void main() {
  NgmyMenuDocument menu(String id, {required DateTime updatedAt, String name = 'Menu'}) =>
      NgmyMenuDocument(id: id, restaurantName: name, updatedAt: updatedAt);

  List<NgmyMenuDocument> merge({
    List<NgmyMenuDocument> local = const [],
    List<NgmyMenuDocument> remote = const [],
    Map<String, DateTime> tombstones = const {},
  }) =>
      NgmyStudioLibraryCloud.mergeById<NgmyMenuDocument>(
        local: local,
        remote: remote,
        idOf: (d) => d.id,
        updatedOf: (d) => d.updatedAt,
        tombstones: tombstones,
      );

  final t0 = DateTime.utc(2026, 1, 1);
  final t1 = DateTime.utc(2026, 2, 1);
  final t2 = DateTime.utc(2026, 3, 1);

  group('menu library merge', () {
    test('a new device with nothing local gets the whole cloud library', () {
      final merged = merge(remote: [menu('a', updatedAt: t0), menu('b', updatedAt: t1)]);
      expect(merged.map((d) => d.id), containsAll(['a', 'b']));
    });

    test('a device that is offline-created keeps its menus alongside the cloud ones', () {
      final merged = merge(
        local: [menu('local', updatedAt: t1)],
        remote: [menu('cloud', updatedAt: t0)],
      );
      expect(merged.map((d) => d.id), containsAll(['local', 'cloud']));
    });

    test('the newer edit of the same menu wins regardless of which side it is on', () {
      final localNewer = merge(
        local: [menu('a', updatedAt: t2, name: 'from phone')],
        remote: [menu('a', updatedAt: t0, name: 'from cloud')],
      );
      expect(localNewer.single.restaurantName, 'from phone');

      final remoteNewer = merge(
        local: [menu('a', updatedAt: t0, name: 'from phone')],
        remote: [menu('a', updatedAt: t2, name: 'from cloud')],
      );
      expect(remoteNewer.single.restaurantName, 'from cloud');
    });

    test('a deleted menu is not resurrected by a device still holding it', () {
      final merged = merge(
        local: [menu('a', updatedAt: t0)],
        remote: [menu('a', updatedAt: t0)],
        tombstones: {'a': t1},
      );
      expect(merged, isEmpty);
    });

    test('an edit made after the delete keeps the menu alive', () {
      final merged = merge(
        local: [menu('a', updatedAt: t2)],
        tombstones: {'a': t1},
      );
      expect(merged.single.id, 'a');
    });

    test('results come back newest first', () {
      final merged = merge(remote: [
        menu('old', updatedAt: t0),
        menu('new', updatedAt: t2),
        menu('mid', updatedAt: t1),
      ]);
      expect(merged.map((d) => d.id).toList(), ['new', 'mid', 'old']);
    });
  });

  group('bio backup slot', () {
    test('the oldest bio is the one that gets backed up', () {
      final picked = NgmyStudioLibraryCloud.oldestBio([
        bio('second', createdAt: t1),
        bio('first', createdAt: t0),
        bio('third', createdAt: t2),
      ]);
      expect(picked?.id, 'first');
    });

    test('deleting the oldest promotes the next oldest into the slot', () {
      final remaining = [bio('second', createdAt: t1), bio('third', createdAt: t2)];
      expect(NgmyStudioLibraryCloud.oldestBio(remaining)?.id, 'second');
    });

    test('no bios means nothing to back up', () {
      expect(NgmyStudioLibraryCloud.oldestBio(const []), isNull);
    });

    test('editing a bio does not move it out of the backup slot', () {
      final first = bio('first', createdAt: t0);
      first.displayName = 'renamed';
      first.updatedAt = t2;
      final picked = NgmyStudioLibraryCloud.oldestBio([first, bio('second', createdAt: t1)]);
      expect(picked?.id, 'first');
    });
  });

  group('bio creation time', () {
    test('is recovered from the id for bios saved before the field existed', () {
      final created = DateTime.utc(2026, 5, 4, 12);
      final id = 'bio_${created.microsecondsSinceEpoch}';
      final doc = NgmyBioDocument.fromJson({'id': id, 'updatedAt': t2.toIso8601String()});
      expect(doc.createdAt.toUtc(), created);
    });

    test('falls back to the last edit when the id carries no timestamp', () {
      final doc = NgmyBioDocument.fromJson({'id': 'legacy-bio', 'updatedAt': t1.toIso8601String()});
      expect(doc.createdAt.toUtc(), t1);
    });

    test('survives a save/load round trip so the backup slot stays put', () {
      final original = bio('bio_1', createdAt: t0);
      final restored = NgmyBioDocument.decodeList(NgmyBioDocument.encodeList([original])).single;
      expect(restored.createdAt.toUtc(), t0);
    });
  });
}

NgmyBioDocument bio(String id, {required DateTime createdAt}) =>
    NgmyBioDocument(id: id, createdAt: createdAt);
