import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_family_tree.dart';
import 'package:ngmy/ngmy_worksheets_storage.dart';

FamilyMember _m(String id, {String? parent, String? spouse, int order = 0}) =>
    FamilyMember(id: id, name: id, parentId: parent, spouseId: spouse, birthOrder: order);

void _expectTidy(FamilyTree tree) {
  final pos = familyTreeLayoutPositions(tree);
  expect(pos.length, tree.members.length, reason: 'every member is drawn');
  final list = pos.entries.toList();
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      final a = list[i].value, b = list[j].value;
      if ((a.dy - b.dy).abs() > 1) continue;
      expect((a.dx - b.dx).abs() >= 84 + 21, isTrue,
          reason: '${list[i].key} and ${list[j].key} overlap on one row');
    }
  }
  // Every child sits exactly one row under its parent.
  for (final m in tree.members) {
    final p = m.parentId;
    if (p == null || !pos.containsKey(p)) continue;
    final parent = tree.members.firstWhere((x) => x.id == p);
    if (parent.spouseId == m.id || m.spouseId == p) continue;
    expect(pos[m.id]!.dy > pos[p]!.dy, isTrue, reason: '${m.id} below ${p}');
  }
}

void main() {
  FamilyTree tree(List<FamilyMember> ms) =>
      FamilyTree(id: 't', name: 't', code: 'c', members: ms, createdAt: DateTime(2026));

  List<FamilyMember> nineteen() {
    final ms = <FamilyMember>[_m('root')];
    for (var i = 0; i < 4; i++) {
      ms.add(_m('c$i', parent: 'root', order: i));
      for (var j = 0; j < 3; j++) {
        ms.add(_m('g$i$j', parent: 'c$i', order: j));
      }
    }
    ms.add(_m('gg0', parent: 'g00'));
    ms.add(_m('gg1', parent: 'g31'));
    return ms;
  }

  test('19 members lay out without overlaps', () {
    final ms = nineteen();
    expect(ms.length, 19);
    _expectTidy(tree(ms));
  });

  test('adding a spouse to the root (stored only on the spouse) keeps order', () {
    final ms = [...nineteen(), _m('rootWife', spouse: 'root')];
    final t = tree(ms);
    _expectTidy(t);
    final pos = familyTreeLayoutPositions(t);
    expect(pos['root']!.dy, pos['rootWife']!.dy);
    expect(pos['c0']!.dy > pos['root']!.dy, isTrue);
  });

  test('spouses everywhere, children under either partner', () {
    final ms = [...nineteen(), _m('rootWife', spouse: 'root')];
    for (var i = 0; i < 4; i++) {
      ms.add(_m('s$i', spouse: 'c$i'));
      for (var j = 0; j < 3; j++) {
        ms.add(_m('sg$i$j', spouse: 'g$i$j'));
      }
    }
    // A child recorded under the root's spouse instead of the root.
    ms.add(_m('late', parent: 'rootWife', order: 9));
    final t = tree(ms);
    _expectTidy(t);
    final pos = familyTreeLayoutPositions(t);
    expect(pos['late']!.dy, pos['c0']!.dy);
  });

  test('spouse added before the root in the list does not become the root', () {
    final ms = [_m('rootWife', spouse: 'root'), ...nineteen()];
    final pos = familyTreeLayoutPositions(tree(ms));
    expect(pos['c0']!.dy > pos['root']!.dy, isTrue);
    expect(pos['rootWife']!.dy, pos['root']!.dy);
  });
}
