import 'dart:io';

void main() {
  final path = 'lib/main.dart';
  var text = File(path).readAsStringSync();
  const startMark = '  void _showGamesAdmin(bool isDark) {';
  const endMark = '  void _showJobApplicationsAdmin(bool isDark) {';
  final start = text.indexOf(startMark);
  final end = text.indexOf(endMark);
  if (start < 0 || end < 0) {
    stderr.writeln('markers not found');
    exit(1);
  }
  const replacement = '''  void _showGamesAdmin(bool isDark) {
    showNgmyGameCenterAdminSheet(
      context: context,
      isDark: isDark,
      initialLimits: widget.config.gameTimeLimits,
      initialDice: widget.config.diceSettings,
      users: widget.allUsers
          .map((u) => NgmyAdminUserEntry(email: u.email, username: u.username))
          .toList(),
      onSave: (limits, diceJson) {
        widget.config.gameTimeLimits = limits;
        widget.config.diceSettings = diceJson;
        widget.onDataChanged();
      },
    );
  }

''';
  text = text.replaceRange(start, end, replacement);
  File(path).writeAsStringSync(text);
  stdout.writeln('Replaced _showGamesAdmin');
}
