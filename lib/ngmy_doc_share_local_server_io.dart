import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

/// Temporary LAN server — sender keeps screen open; receiver scans QR and pulls files directly.
class NgmyDocShareLocalServer {
  static HttpServer? _server;
  static String? _sessionId;
  static String? _ownerEmail;
  static List<NgmyDocShareItem> _items = [];
  static String? _baseUrl;

  static bool get isRunning => _server != null;

  static String _generateSession() {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
    final r = Random.secure();
    return List.generate(8, (_) => chars[r.nextInt(chars.length)]).join();
  }

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
      debugPrint('[doc share lan] ip: $e');
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

  static Future<({String qrPayload, int fileCount})?> start({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (items.isEmpty) return null;
    await stop();

    for (final item in items) {
      if (item.sizeBytes <= 0) {
        debugPrint('[doc share lan] empty file: ${item.name}');
        return null;
      }
      final probe = await NgmyDocShareStore.readByteRange(ownerEmail, item, 0, 1);
      if (probe == null || probe.isEmpty) {
        debugPrint('[doc share lan] unreadable file: ${item.name}');
        return null;
      }
    }

    final ip = await _localIp();
    if (ip == null) return null;

    final session = _generateSession();
    HttpServer? server;
    for (var port = 8765; port < 9765; port++) {
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
    _items = List.from(items);
    _baseUrl = 'http://$ip:${server.port}';

    server.listen((req) => unawaited(_handle(req, session)));

    // Short local code — big QR dots (same style as NGMY Advisors stash codes).
    return (
      qrPayload: 'N2|$ip:${server.port}/$session',
      fileCount: items.length,
    );
  }

  static Future<void> _handle(HttpRequest req, String session) async {
    try {
      final path = req.uri.path;
      final prefix = '/$session';
      if ((path == prefix || path == '$prefix/') && req.method == 'GET') {
        await _serveManifest(req);
        return;
      }
      if (req.method == 'OPTIONS') {
        req.response.headers
          ..add('Access-Control-Allow-Origin', '*')
          ..add('Access-Control-Allow-Methods', 'GET, OPTIONS')
          ..add('Access-Control-Allow-Headers', 'Content-Type, Range');
        req.response.statusCode = HttpStatus.ok;
        await req.response.close();
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
      if (path == '$prefix/bundle.json' && req.method == 'GET') {
        await _serveBundle(req);
        return;
      }
      req.response.statusCode = HttpStatus.notFound;
      await req.response.close();
    } catch (e) {
      debugPrint('[doc share lan] request: $e');
      try {
        req.response.statusCode = HttpStatus.internalServerError;
        await req.response.close();
      } catch (_) {}
    }
  }

  static Future<void> _serveManifest(HttpRequest req) async {
    final owner = (_ownerEmail ?? '').trim();
    final base = _baseUrl ?? '';
    final files = <Map<String, dynamic>>[];
    for (final item in _items) {
      files.add({
        'id': item.id,
        'name': item.name,
        'mime': item.mime,
        'sizeBytes': item.sizeBytes,
        'url': '$base/$_sessionId/file/${Uri.encodeComponent(item.id)}',
      });
    }
    final body = jsonEncode({
      'version': 1,
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

  static Future<void> _serveBundle(HttpRequest req) async {
    if (_ownerEmail == null) {
      req.response.statusCode = HttpStatus.notFound;
      await req.response.close();
      return;
    }
    final files = <Map<String, dynamic>>[];
    for (final item in _items) {
      final bytes = await NgmyDocShareStore.readBytes(_ownerEmail!, item);
      if (bytes == null || bytes.isEmpty) continue;
      files.add({
        'name': item.name,
        'mime': item.mime,
        'sizeBytes': item.sizeBytes,
        'data': base64Encode(bytes),
      });
    }
    final body = jsonEncode({
      'marker': 'ngmyDocShareBundle',
      'version': 1,
      'ownerEmail': _ownerEmail!.toLowerCase().trim(),
      'files': files,
    });
    req.response.headers
      ..contentType = ContentType.json
      ..add('Access-Control-Allow-Origin', '*');
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
        final len = await file.length();
        req.response.headers
          ..contentType = ContentType.parse(item.mime)
          ..contentLength = len
          ..add('Access-Control-Allow-Origin', '*')
          ..add('Connection', 'keep-alive')
          ..add('Content-Disposition', 'inline; filename="${item.name.replaceAll('"', '')}"');
        await req.response.addStream(file.openRead());
        await req.response.close();
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
      ..add('Access-Control-Allow-Origin', '*');
    req.response.add(bytes);
    await req.response.close();
  }

  static Future<void> stop() async {
    final s = _server;
    _server = null;
    _sessionId = null;
    _ownerEmail = null;
    _items = [];
    _baseUrl = null;
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
