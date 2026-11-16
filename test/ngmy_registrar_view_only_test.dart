import 'dart:io';

import 'package:flutter_test/flutter_test.dart';

// An Authorized Registrar who opens ANOTHER state with that state's code may look but never change anything there.
// These checks read the code so the rule cannot be dropped by accident.

void main() {
  final m = File('lib/main.dart').readAsStringSync();

  test('registrar tools (edit) work only in the home state', () {
    expect(m, contains('final home = _registrarHomeState();\n    if (home.trim().isEmpty) return true;\n    return NgmyCivicRegistryStats.statesMatch(st, home);'));
  });

  test('a visiting registrar sees the Members list, but with no manage buttons', () {
    expect(m, contains('bool _isRegistrarVisitingOtherState() {'));
    expect(m, contains("if (_activeTab == 2 && _isRegistrarVisitingOtherState()) _membersSection(isDark),"));
    expect(m, contains('_memberCard(m, isDark, manageActions: _canUseRegistrarToolsHere())'), reason: 'member cards have no edit buttons away from home');
    expect(m, contains("key: const Key('civic-registrar-view-only'),"), reason: 'the view-only banner');
  });

  test('every edit button in the Members list and help mode checks the home state', () {
    expect(m, contains('if (_canUseRegistrarToolsHere()) ...[\n              const SizedBox(width: 8),\n              InkWell(\n                borderRadius: BorderRadius.circular(10),\n                onTap: () => _confirmClearMissed(members),'));
    expect(m, contains('bool _canManageCitiesForSelectedState() => _canUseRegistrarToolsHere();'));
  });
}
