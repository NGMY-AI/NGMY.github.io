import 'dart:io';

void main() {
  final path = 'lib/main.dart';
  final lines = File(path).readAsLinesSync();
  final start = lines.indexWhere((l) => l.contains("__removed_tap_order"));
  final end = lines.indexWhere((l) => l.contains("if (widget.gameId == 'lucky_doors')"));
  if (start < 0 || end < 0) {
    stderr.writeln('markers not found start=$start end=$end');
    exit(1);
  }
  var close = end;
  var depth = 0;
  for (var j = end; j < lines.length && j < end + 40; j++) {
    depth += '{'.allMatches(lines[j]).length - '}'.allMatches(lines[j]).length;
    if (j > end && lines[j].trim() == '}' && depth <= 0) {
      close = j;
      break;
    }
  }
  final out = [...lines.sublist(0, start), ...lines.sublist(close + 1)];
  File(path).writeAsStringSync('${out.join('\n')}\n');
  stdout.writeln('Removed lines ${start + 1}-${close + 1}');
}
