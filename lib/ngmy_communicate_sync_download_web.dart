import 'dart:convert';
import 'dart:html' as html;
import 'dart:js_util' as js_util;

import 'package:flutter/scheduler.dart';

void ngmyWebCleanupHiddenFileInputs() {
  try {
    final inputs = html.document.querySelectorAll('input[type=file]');
    for (final node in inputs) {
      if (node is html.InputElement && node.style.display == 'none') {
        node.remove();
      }
    }
  } catch (_) {}
}

String _safeJsonFilename(String filename) {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  return safeName.endsWith('.json') ? safeName : '$safeName.json';
}

Future<String?> _saveWithFilePicker(html.Blob blob, String name) async {
  try {
    if (!js_util.hasProperty(html.window, 'showSaveFilePicker')) return null;
    final handle = await js_util.promiseToFuture<Object>(
      js_util.callMethod(html.window, 'showSaveFilePicker', [
        js_util.jsify({
          'suggestedName': name,
          'types': [
            {
              'description': 'JSON',
              'accept': {
                'application/json': ['.json'],
              },
            },
          ],
        }),
      ]),
    );
    final writable = await js_util.promiseToFuture<Object>(
      js_util.callMethod(handle, 'createWritable', []),
    );
    await js_util.promiseToFuture(js_util.callMethod(writable, 'write', [blob]));
    await js_util.promiseToFuture(js_util.callMethod(writable, 'close', []));
    return 'Saved $name — chose Replace to overwrite the previous backup.';
  } catch (e) {
    final msg = e.toString().toLowerCase();
    if (msg.contains('aborterror') || msg.contains('abort')) {
      return 'Download cancelled';
    }
    // Unsupported / denied — fall back to anchor download.
    return null;
  }
}

Future<String> downloadNgmyAdvisorSyncJson(
  String jsonText,
  String filename, {
  bool allowReplace = false,
}) async {
  final name = _safeJsonFilename(filename);
  final blob = html.Blob([utf8.encode(jsonText)], 'application/json');

  if (allowReplace) {
    final picked = await _saveWithFilePicker(blob, name);
    if (picked != null) {
      ngmyWebCleanupHiddenFileInputs();
      SchedulerBinding.instance.scheduleFrame();
      return picked;
    }
  }

  final url = html.Url.createObjectUrlFromBlob(blob);
  final anchor = html.AnchorElement(href: url)
    ..download = name
    ..style.display = 'none';
  html.document.body?.append(anchor);
  anchor.click();
  await Future<void>.delayed(const Duration(milliseconds: 120));
  anchor.remove();
  html.Url.revokeObjectUrl(url);
  ngmyWebCleanupHiddenFileInputs();
  SchedulerBinding.instance.scheduleFrame();
  return allowReplace
      ? 'Downloaded $name — pick the same name and choose Replace to overwrite.'
      : 'Downloaded $name';
}

Future<String> downloadNgmyAdvisorSyncBytes(
  List<int> bytes,
  String filename, {
  bool allowReplace = false,
}) async {
  return downloadNgmyAdvisorSyncJson(
    utf8.decode(bytes),
    filename,
    allowReplace: allowReplace,
  );
}
