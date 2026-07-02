import 'package:flutter/material.dart';

typedef NgmyAiToolOpener = Future<String?> Function(BuildContext context);

/// Lets NGMY Helper AI open in-app tools without leaving the chat.
class NgmyAiAppBridge {
  NgmyAiAppBridge._();

  static BuildContext? Function()? _context;
  static final Map<String, NgmyAiToolOpener> _tools = {};

  static void register({
    required BuildContext? Function() context,
    required Map<String, NgmyAiToolOpener> tools,
  }) {
    _context = context;
    _tools
      ..clear()
      ..addAll(tools);
  }

  static void clear() {
    _context = null;
    _tools.clear();
  }

  static List<String> get toolIds => _tools.keys.toList()..sort();

  static Future<String?> open(String toolId) async {
    final ctx = _context?.call();
    if (ctx == null || !ctx.mounted) {
      return 'Open NGMY on your phone first, then ask the AI again.';
    }
    final fn = _tools[toolId.trim().toLowerCase()];
    if (fn == null) {
      return 'Unknown tool "$toolId". Try: ${toolIds.join(', ')}.';
    }
    return fn(ctx);
  }
}
