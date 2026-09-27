import 'dart:async';

import 'package:flutter/foundation.dart';

import 'ngmy_db_relay.dart' show kNgmyRelayTableCodes, kNgmySettingsKeyCodes, kNgmySettingsPrefixCodes;
import 'ngmy_net_trace_sink_stub.dart' if (dart.library.html) 'ngmy_net_trace_sink_web.dart';

/// Development request tracer. On in debug builds; on web release builds only
/// when the page URL contains `ngmy_net_trace=1`. Logs to the console only.
final bool kNgmyNetTraceEnabled = kDebugMode || _traceQueryFlag();

bool _traceQueryFlag() {
  try {
    return Uri.base.queryParameters['ngmy_net_trace'] == '1';
  } catch (_) {
    return false;
  }
}

final Map<String, int> _counts = {};
final DateTime _startedAt = DateTime.now();
int _total = 0;
int _totalAtLastSummary = 0;
Timer? _summaryTimer;

String _caller() {
  final lines = StackTrace.current.toString().split('\n');
  final picked = <String>[];
  for (final raw in lines) {
    final line = raw.trim();
    if (line.isEmpty) continue;
    if (line.contains('ngmy_net_trace') ||
        line.contains('ngmy_edge_invoke') ||
        line.contains('ngmy_web_rest_proxy') ||
        line.contains('ngmy_db_relay') ||
        line.contains('package:http/') ||
        line.contains('dart-sdk') ||
        line.contains('dart:')) {
      continue;
    }
    picked.add(line.replaceAll(RegExp(r'\s+'), ' '));
    if (picked.length >= 3) break;
  }
  return picked.join(' <- ');
}

/// Records one outgoing request. [kind] is REST / AUTH / STORAGE / EDGE / RELAY / REALTIME / PROBE.
void ngmyNetTrace(String kind, String label) {
  if (!kNgmyNetTraceEnabled) return;
  final key = '$kind $label';
  final n = (_counts[key] ?? 0) + 1;
  _counts[key] = n;
  _total++;
  final t = DateTime.now().difference(_startedAt).inMilliseconds / 1000;
  final line = '[net] +${t.toStringAsFixed(1)}s #$_total $key (x$n) via ${_caller()}';
  debugPrint(line);
  ngmyNetTraceSink(line);
  _summaryTimer ??= Timer.periodic(const Duration(seconds: 15), (_) => _summary());
}

void _summary() {
  if (_total == _totalAtLastSummary) return;
  _totalAtLastSummary = _total;
  final top = _counts.entries.toList()..sort((a, b) => b.value.compareTo(a.value));
  final body = top.take(15).map((e) => '  ${e.value}x ${e.key}').join('\n');
  debugPrint('[net] summary: $_total requests\n$body');
}

String? _reverse(Map<String, String> codes, Object? code) {
  if (code == null) return null;
  for (final e in codes.entries) {
    if (e.value == code) return e.key;
  }
  return code.toString();
}

/// Readable label for an Edge body: action, relay op, table, settings key.
String ngmyNetTraceEdgeLabel(Map<String, dynamic> body, {required bool anonymous}) {
  final action = (body['action'] ?? 'chat').toString();
  final parts = <String>[action];
  if (action == 'dbRelay') {
    parts.add('op=${body['op']}');
    final table = _reverse(kNgmyRelayTableCodes, body['t']);
    if (table != null) parts.add('table=$table');
    final sk = _reverse(kNgmySettingsKeyCodes, body['sk']) ?? _reverse(kNgmySettingsPrefixCodes, body['sk']);
    if (sk != null) parts.add('key=$sk${body['sfx'] ?? ''}');
  }
  if (anonymous) parts.add('(anon)');
  return parts.join(' ');
}

/// Readable label for a Supabase URL (table, auth path, bucket).
String ngmyNetTraceLabelForUri(Uri uri) {
  final segs = uri.pathSegments;
  final i = segs.indexWhere((s) => s == 'v1');
  final rest = i >= 0 && i + 1 < segs.length ? segs.sublist(i + 1).take(3).join('/') : uri.path;
  final key = uri.queryParameters['key'];
  return key == null ? rest : '$rest key=$key';
}

String ngmyNetTraceKindForUri(Uri uri) {
  final p = uri.path;
  if (p.contains('/auth/v1')) return 'AUTH';
  if (p.contains('/storage/v1')) return 'STORAGE';
  if (p.contains('/functions/v1') || p.endsWith('/api/sync')) return 'EDGE';
  if (p.contains('/rest/v1')) return 'REST';
  return 'HTTP';
}
