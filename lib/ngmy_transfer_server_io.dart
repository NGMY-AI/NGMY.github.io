import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

import 'ngmy_transfer_constants.dart';

/// Direct Wi-Fi transfer server — streams large videos without loading into RAM.
class NgmyTransferServer {
  static HttpServer? _server;
  static String? _sessionId;
  static String? _ownerEmail;
  static String? _transferKey;
  static List<NgmyDocShareItem> _items = [];
  static String? _host;
  static void Function(int sent, int total)? _onFileComplete;
  static var _filesSent = 0;

  static bool get isSupported => true;

  static bool get isRunning => _server != null;

  static Future<String?> _localIp() async {
    try {
      final interfaces = await NetworkInterface.list(
        type: InternetAddressType.IPv4,
        includeLinkLocal: false,
      );
      String? hotspot;
      String? wifiLike;
      String? fallback;
      for (final iface in interfaces) {
        final name = iface.name.toLowerCase();
        final isHotspot = name.contains('ap') ||
            name.contains('hotspot') ||
            name.contains('rndis') ||
            name.contains('wlan1');
        final isWifi = name.contains('wlan') ||
            name.contains('wifi') ||
            name.contains('en0') ||
            name.contains('eth') ||
            name.contains('wifi_p2p');
        for (final addr in iface.addresses) {
          if (addr.isLoopback) continue;
          final ip = addr.address;
          if (!ip.startsWith('192.168.') && !ip.startsWith('10.') && !_isPrivate172(ip)) {
            continue;
          }
          if (isHotspot) return ip;
          if (isWifi) wifiLike ??= ip;
          fallback ??= ip;
        }
      }
      return hotspot ?? wifiLike ?? fallback;
    } catch (e) {
      debugPrint('[ngmy transfer] ip: $e');
    }
    return null;
  }

  static bool _isPrivate172(String ip) {
    if (!ip.startsWith('172.')) return false;
    final parts = ip.split('.');
    if (parts.length < 2) return false;
    final second = int.tryParse(parts[1]) ?? 0;
    return second >= 16 && second <= 31;
  }

  static String _generateSessionId() {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
    final r = Random.secure();
    return List.generate(12, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static Future<({String host, int port, String sessionId})?> start({
    required String ownerEmail,
    required String transferKey,
    required List<NgmyDocShareItem> items,
    void Function(int sent, int total)? onFileComplete,
  }) async {
    if (items.isEmpty || transferKey.trim().isEmpty) return null;
    await stop();

    for (final item in items) {
      if (item.sizeBytes <= 0) return null;
      final probe = await NgmyDocShareStore.readByteRange(ownerEmail, item, 0, 1);
      if (probe == null || probe.isEmpty) return null;
    }

    final ip = await _localIp();
    if (ip == null) return null;

    final session = _generateSessionId();
    HttpServer? server;
    for (var port = 9810; port < 10810; port++) {
      try {
        server = await HttpServer.bind(InternetAddress.anyIPv4, port, shared: true);
        break;
      } on SocketException {
        continue;
      }
    }
    if (server == null) return null;

    _server = server;
    _sessionId = session;
    _ownerEmail = ownerEmail;
    _transferKey = transferKey.trim();
    _items = List.from(items);
    _host = ip;
    _onFileComplete = onFileComplete;
    _filesSent = 0;

    server.listen((req) => unawaited(_handle(req, session)));

    return (host: ip, port: server.port, sessionId: session);
  }

  static List<Map<String, dynamic>> manifestFiles() {
    final base = _baseUrl();
    if (base == null || _sessionId == null) return [];
    return _items
        .map((item) => {
              'id': item.id,
              'name': item.name,
              'mime': item.mime,
              'sizeBytes': item.sizeBytes,
              'url': '$base/$_sessionId/file/${Uri.encodeComponent(item.id)}',
            })
        .toList();
  }

  static String? _baseUrl() {
    if (_host == null || _server == null) return null;
    return 'http://$_host:${_server!.port}';
  }

  static bool _authorized(HttpRequest req) {
    final key = req.headers.value(kNgmyTransferKeyHeader) ?? '';
    return key.isNotEmpty && key == (_transferKey ?? '');
  }

  static Future<void> _handle(HttpRequest req, String session) async {
    try {
      if (req.method == 'OPTIONS') {
        _cors(req.response);
        req.response.statusCode = HttpStatus.ok;
        await req.response.close();
        return;
      }

      if (!_authorized(req)) {
        req.response.statusCode = HttpStatus.unauthorized;
        await req.response.close();
        return;
      }

      final path = req.uri.path;
      final prefix = '/$session';
      if ((path == prefix || path == '$prefix/') && req.method == 'GET') {
        await _serveManifest(req);
        return;
      }
      if (path == '$prefix/manifest.json' && req.method == 'GET') {
        await _serveManifest(req);
        return;
      }
      if (path.startsWith('$prefix/file/') && req.method == 'GET') {
        final fileId = Uri.decodeComponent(path.substring('$prefix/file/'.length));
        await _serveFile(req, fileId);
        return;
      }
      req.response.statusCode = HttpStatus.notFound;
      await req.response.close();
    } catch (e) {
      debugPrint('[ngmy transfer] request: $e');
      try {
        req.response.statusCode = HttpStatus.internalServerError;
        await req.response.close();
      } catch (_) {}
    }
  }

  static void _cors(HttpResponse res) {
    res.headers
      ..add('Access-Control-Allow-Origin', '*')
      ..add('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
      ..add('Access-Control-Allow-Headers', 'Content-Type, Range, $kNgmyTransferKeyHeader');
  }

  static Future<void> _serveManifest(HttpRequest req) async {
    final owner = (_ownerEmail ?? '').trim();
    final files = manifestFiles();
    final body = jsonEncode({
      'version': 1,
      'product': 'NGMY Transfer',
      'ownerEmail': owner,
      'fileCount': files.length,
      'files': files,
    });
    req.response.headers
      ..contentType = ContentType.json
      ..add('Access-Control-Allow-Origin', '*')
      ..add('Cache-Control', 'no-store');
    req.response.write(body);
    await req.response.close();
  }

  static Future<void> _serveFile(HttpRequest req, String fileId) async {
    if (_ownerEmail == null) {
      req.response.statusCode = HttpStatus.notFound;
      await req.response.close();
      return;
    }
    final item = _items.where((e) => e.id == fileId).firstOrNull;
    if (item == null) {
      req.response.statusCode = HttpStatus.notFound;
      await req.response.close();
      return;
    }

    final path = await NgmyDocShareStore.filePath(_ownerEmail!, item);
    if (path != null) {
      final file = File(path);
      if (await file.exists()) {
        await _streamFile(req, file, item);
        _filesSent++;
        _onFileComplete?.call(_filesSent, _items.length);
        return;
      }
    }

    final bytes = await NgmyDocShareStore.readBytes(_ownerEmail!, item);
    if (bytes == null || bytes.isEmpty) {
      req.response.statusCode = HttpStatus.notFound;
      await req.response.close();
      return;
    }
    req.response.headers
      ..contentType = ContentType.parse(item.mime)
      ..contentLength = bytes.length
      ..add('Access-Control-Allow-Origin', '*')
      ..add('Accept-Ranges', 'bytes');
    req.response.add(bytes);
    await req.response.close();
    _filesSent++;
    _onFileComplete?.call(_filesSent, _items.length);
  }

  static Future<void> _streamFile(HttpRequest req, File file, NgmyDocShareItem item) async {
    final len = await file.length();
    final range = req.headers.value(HttpHeaders.rangeHeader);
    if (range != null && range.startsWith('bytes=')) {
      final parts = range.substring(6).split('-');
      final start = int.tryParse(parts.first) ?? 0;
      final endRaw = parts.length > 1 ? parts[1] : '';
      final end = endRaw.isEmpty ? len - 1 : int.tryParse(endRaw) ?? (len - 1);
      final safeStart = start.clamp(0, len > 0 ? len - 1 : 0);
      final safeEnd = end.clamp(safeStart, len - 1);
      final chunkLen = safeEnd - safeStart + 1;
      req.response.statusCode = HttpStatus.partialContent;
      req.response.headers
        ..contentType = ContentType.parse(item.mime)
        ..contentLength = chunkLen
        ..add('Access-Control-Allow-Origin', '*')
        ..add('Accept-Ranges', 'bytes')
        ..add('Content-Range', 'bytes $safeStart-$safeEnd/$len')
        ..add('Connection', 'keep-alive');
      await req.response.addStream(file.openRead(safeStart, safeEnd + 1));
      await req.response.close();
      return;
    }

    req.response.headers
      ..contentType = ContentType.parse(item.mime)
      ..contentLength = len
      ..add('Access-Control-Allow-Origin', '*')
      ..add('Accept-Ranges', 'bytes')
      ..add('Connection', 'keep-alive')
      ..add('Content-Disposition', 'inline; filename="${item.name.replaceAll('"', '')}"');
    await req.response.addStream(file.openRead());
    await req.response.close();
  }

  static Future<void> stop() async {
    final s = _server;
    _server = null;
    _sessionId = null;
    _ownerEmail = null;
    _transferKey = null;
    _items = [];
    _host = null;
    _onFileComplete = null;
    _filesSent = 0;
    if (s != null) {
      try {
        await s.close(force: true);
      } catch (_) {}
    }
  }
}

extension _FirstOrNull<E> on Iterable<E> {
  E? get firstOrNull {
    final it = iterator;
    if (it.moveNext()) return it.current;
    return null;
  }
}
