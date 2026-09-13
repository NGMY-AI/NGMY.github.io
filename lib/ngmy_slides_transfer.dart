import 'dart:async';
import 'dart:convert';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_civic_registry_stats.dart';
import 'ngmy_communicate_sync_download_io.dart'
    if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_db_relay.dart';
import 'ngmy_nav.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_transfer_payments.dart';

const String kNgmySlidesDeckBundleType = 'ngmy_slides_deck_v1';
const String kNgmySlidesLibraryBundleType = 'ngmy_slides_library_v1';
const String kNgmySlidesQrPrefixV2 = 'NGMYSLIDESYNC2';
const String kNgmySlidesClaimPrefix = 'NGMYSLIDECODE';
const int kNgmySlidesQrMaxUses = 25;
const int kNgmySlidesMarriageClaimMaxUses = 2;
const String _kSlidesQrStashSettingsKey = 'ngmy_slides_transfer_qr_stashes_v1';
final RegExp kNgmySlidesMarriageClaimCodeRe = RegExp(r'^[A-Z]{2}\d{3}$');

bool ngmySlidesDeckUsesMarriageClaimCode(NgmySlideDeck deck) => deck.isLockedTemplateDoc;

String? ngmySlidesMarriageTransferState(List<NgmySlideDeck> decks) {
  if (decks.isEmpty || !decks.every(ngmySlidesDeckUsesMarriageClaimCode)) return null;
  for (final deck in decks) {
    final state = (deck.marriageState ?? '').trim();
    if (state.isNotEmpty) return state;
  }
  return '';
}

String ngmySlidesMarriageClaimPrefix(String state) =>
    NgmyCivicRegistryStats.postalCodeForState(state);

String? ngmySlidesNormalizeMarriageClaimCode(String raw) {
  final t = raw.trim().toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
  if (kNgmySlidesMarriageClaimCodeRe.hasMatch(t)) return t;
  return null;
}

String ngmySlidesGenerateMarriageClaimCode(
  String state, {
  Set<String> taken = const {},
  Random? random,
}) {
  final prefix = ngmySlidesMarriageClaimPrefix(state);
  final r = random ?? Random.secure();
  for (var i = 0; i < 80; i++) {
    final code = '$prefix${r.nextInt(1000).toString().padLeft(3, '0')}';
    if (!taken.contains(code)) return code;
  }
  return '$prefix${DateTime.now().millisecondsSinceEpoch.remainder(1000).toString().padLeft(3, '0')}';
}

Set<String> ngmySlidesTakenMarriageClaimCodes(Iterable<NgmySlideDeck> decks) {
  final taken = <String>{};
  for (final deck in decks) {
    final code = ngmySlidesNormalizeMarriageClaimCode(deck.transferClaimCode ?? '');
    if (code != null) taken.add(code);
  }
  return taken;
}

/// Keeps the document's existing code. Assigns a new unique one only once.
String ngmySlidesAssignMarriageClaimCode(
  NgmySlideDeck deck, {
  Iterable<NgmySlideDeck> existing = const [],
  Random? random,
}) {
  final have = ngmySlidesNormalizeMarriageClaimCode(deck.transferClaimCode ?? '');
  if (have != null) {
    deck.transferClaimCode = have;
    return have;
  }
  final taken = ngmySlidesTakenMarriageClaimCodes(existing.where((d) => d.id != deck.id));
  final code = ngmySlidesGenerateMarriageClaimCode(
    deck.marriageState ?? '',
    taken: taken,
    random: random,
  );
  deck.transferClaimCode = code;
  return code;
}

String? ngmySlidesStableMarriageClaimCode(List<NgmySlideDeck> decks) {
  if (decks.length != 1) return null;
  final deck = decks.first;
  if (!ngmySlidesDeckUsesMarriageClaimCode(deck)) return null;
  return ngmySlidesNormalizeMarriageClaimCode(deck.transferClaimCode ?? '');
}

const _slidesBlue = Color(0xFF2563EB);
const _slidesBlueDark = Color(0xFF1D4ED8);
const _slidesIndigo = Color(0xFF4F46E5);

class NgmySlidesTransferQrStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'SL${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>> _loadStashes() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final value = await ngmyDbRelaySettingsFetch(_kSlidesQrStashSettingsKey, timeout: kNgmyCloudLoadTimeout);
      if (value == null) return {};
      final stashes = value['stashes'];
      if (stashes is Map) return Map<String, dynamic>.from(stashes);
    } catch (e) {
      debugPrint('[slides qr stash] load: $e');
    }
    return {};
  }

  static Future<void> _saveStashes(Map<String, dynamic> stashes) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await ngmyDbRelaySettingsUpsert(
        _kSlidesQrStashSettingsKey,
        {'stashes': stashes, 'savedAt': DateTime.now().toUtc().toIso8601String()},
        timeout: kNgmyCloudWriteTimeout,
      );
    } catch (e) {
      debugPrint('[slides qr stash] save: $e');
    }
  }

  static Future<({String qrPayload, String token, String? claimCode})?> createFromShareJson(
    String shareJson, {
    required String ownerEmail,
    required String bundleId,
    String? marriageState,
    String? existingClaimCode,
  }) async {
    if (!await ngmyCanReachCloud()) return null;
    final json = shareJson.trim();
    if (json.isEmpty) return null;
    final stashes = await _loadStashes();
    final claimCode = ngmySlidesNormalizeMarriageClaimCode(existingClaimCode ?? '') ??
        (marriageState != null
            ? ngmySlidesGenerateMarriageClaimCode(marriageState)
            : null);

    for (final e in stashes.entries) {
      if (e.value is! Map) continue;
      final row = Map<String, dynamic>.from(e.value as Map);
      if ((row['bundleId'] ?? '').toString() != bundleId) continue;
      row['payload'] = base64Encode(utf8.encode(json));
      row['ownerEmail'] = ownerEmail.trim();
      row['updatedAt'] = DateTime.now().toUtc().toIso8601String();
      if (claimCode != null) {
        row['claimCode'] = claimCode;
        row['kind'] = 'marriage';
        row['usesRemaining'] = (row['usesRemaining'] as num?)?.toInt() ?? kNgmySlidesMarriageClaimMaxUses;
      }
      stashes[e.key] = row;
      await _saveStashes(stashes);
      return (qrPayload: '$kNgmySlidesQrPrefixV2|${e.key}', token: e.key, claimCode: claimCode);
    }

    final token = _generateToken();
    stashes[token] = {
      'ownerEmail': ownerEmail.trim(),
      'bundleId': bundleId,
      'payload': base64Encode(utf8.encode(json)),
      'usesRemaining': claimCode != null ? kNgmySlidesMarriageClaimMaxUses : kNgmySlidesQrMaxUses,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
      if (claimCode != null) 'claimCode': claimCode,
      if (claimCode != null) 'kind': 'marriage',
    };
    await _saveStashes(stashes);
    return (qrPayload: '$kNgmySlidesQrPrefixV2|$token', token: token, claimCode: claimCode);
  }

  static Future<void> releaseBundle(String bundleId) async {
    final id = bundleId.trim();
    if (id.isEmpty || !await ngmyCanReachCloud()) return;
    final stashes = await _loadStashes();
    final before = stashes.length;
    stashes.removeWhere((_, row) => row is Map && (row['bundleId'] ?? '').toString() == id);
    if (stashes.length != before) await _saveStashes(stashes);
  }

  static Future<String?> consumeClaimCode(String rawCode) async {
    final code = ngmySlidesNormalizeMarriageClaimCode(rawCode);
    if (code == null || !await ngmyCanReachCloud()) return null;
    final stashes = await _loadStashes();
    for (final e in stashes.entries) {
      if (e.value is! Map) continue;
      final existing = ngmySlidesNormalizeMarriageClaimCode((e.value['claimCode'] ?? '').toString());
      if (existing == code) return consumeToken(e.key);
    }
    return null;
  }

  static Future<String?> consumeToken(String token) async {
    final id = token.trim();
    if (id.isEmpty || !await ngmyCanReachCloud()) return null;
    final stashes = await _loadStashes();
    final row = stashes[id];
    if (row is! Map) return null;
    final uses = (row['usesRemaining'] as num?)?.toInt() ?? 0;
    if (uses <= 0) return null;
    final payloadRaw = (row['payload'] ?? '').toString();
    if (payloadRaw.isEmpty) return null;
    String? jsonText;
    try {
      jsonText = utf8.decode(base64Decode(payloadRaw));
    } catch (_) {
      return null;
    }
    if (jsonText.trim().isEmpty) return null;
    final nextUses = uses - 1;
    final isMarriage = (row['kind'] ?? '').toString() == 'marriage' ||
        ngmySlidesNormalizeMarriageClaimCode((row['claimCode'] ?? '').toString()) != null;
    if (nextUses <= 0 && !isMarriage) {
      stashes.remove(id);
    } else {
      stashes[id] = {
        ...Map<String, dynamic>.from(row),
        'usesRemaining': nextUses < 0 ? 0 : nextUses,
        'lastUsedAt': DateTime.now().toUtc().toIso8601String(),
      };
    }
    await _saveStashes(stashes);
    return jsonText;
  }
}

Map<String, dynamic> ngmySlidesDeckShareBundle({
  required String ownerEmail,
  required NgmySlideDeck deck,
}) =>
    {
      'type': kNgmySlidesDeckBundleType,
      'ownerEmail': ownerEmail.trim(),
      'exportedAt': DateTime.now().toUtc().toIso8601String(),
      'deck': deck.toJson(),
    };

Map<String, dynamic> ngmySlidesLibraryShareBundle({
  required String ownerEmail,
  required List<NgmySlideDeck> decks,
}) =>
    {
      'type': kNgmySlidesLibraryBundleType,
      'ownerEmail': ownerEmail.trim(),
      'exportedAt': DateTime.now().toUtc().toIso8601String(),
      'decks': decks.map((d) => d.toJson()).toList(),
    };

String ngmySlidesShareJson({
  required String ownerEmail,
  required NgmySlideDeck? deck,
  required List<NgmySlideDeck>? allDecks,
}) {
  if (deck != null) {
    return jsonEncode(ngmySlidesDeckShareBundle(ownerEmail: ownerEmail, deck: deck));
  }
  return jsonEncode(ngmySlidesLibraryShareBundle(ownerEmail: ownerEmail, decks: allDecks ?? []));
}

String ngmySlidesQrPayloadLite(String shareJson) => 'NGMY_SL:${base64Url.encode(utf8.encode(shareJson))}';

Future<({String qrPayload, String? claimCode})> ngmySlidesQrPayloadForDisplay({
  required String ownerEmail,
  required String shareJson,
  required String bundleId,
  String? marriageState,
  String? existingClaimCode,
}) async {
  final stash = await NgmySlidesTransferQrStash.createFromShareJson(
    shareJson,
    ownerEmail: ownerEmail,
    bundleId: bundleId,
    marriageState: marriageState,
    existingClaimCode: existingClaimCode,
  );
  if (stash != null) {
    return (
      qrPayload: stash.qrPayload,
      claimCode: stash.claimCode ?? ngmySlidesNormalizeMarriageClaimCode(existingClaimCode ?? ''),
    );
  }
  return (
    qrPayload: ngmySlidesQrPayloadLite(shareJson),
    claimCode: ngmySlidesNormalizeMarriageClaimCode(existingClaimCode ?? ''),
  );
}

bool ngmySlidesScanAcceptsPayload(String raw) {
  final t = raw.trim();
  if (t.isEmpty) return false;
  if (t.startsWith('$kNgmySlidesQrPrefixV2|')) return true;
  if (t.startsWith('$kNgmySlidesClaimPrefix|')) return true;
  if (t.startsWith('NGMY_SL:')) return true;
  if (t.contains(kNgmySlidesDeckBundleType) || t.contains(kNgmySlidesLibraryBundleType)) return true;
  if (t.startsWith('{')) {
    try {
      final map = jsonDecode(t);
      if (map is Map) {
        final type = (map['type'] ?? '').toString();
        return type == kNgmySlidesDeckBundleType || type == kNgmySlidesLibraryBundleType;
      }
    } catch (_) {}
  }
  return false;
}

String? ngmySlidesScanPayloadFromBarcode(Barcode barcode) {
  final raw = barcode.rawValue?.trim();
  final display = barcode.displayValue?.trim();
  for (final text in [raw, display]) {
    if (text == null || text.isEmpty) continue;
    if (ngmySlidesScanAcceptsPayload(text)) return text;
    final v2 = text.indexOf('$kNgmySlidesQrPrefixV2|');
    if (v2 >= 0) {
      final slice = text.substring(v2).trim();
      if (ngmySlidesScanAcceptsPayload(slice)) return slice;
    }
    final lite = text.indexOf('NGMY_SL:');
    if (lite >= 0) {
      final slice = text.substring(lite).trim();
      if (ngmySlidesScanAcceptsPayload(slice)) return slice;
    }
  }
  return null;
}

List<NgmySlideDeck> ngmySlidesDecksFromShareRaw(String raw) {
  final trimmed = raw.trim();
  if (trimmed.isEmpty || trimmed.startsWith('$kNgmySlidesQrPrefixV2|')) return [];
  try {
    Map<String, dynamic> map;
    if (trimmed.startsWith('NGMY_SL:')) {
      map = jsonDecode(utf8.decode(base64Url.decode(trimmed.substring(8)))) as Map<String, dynamic>;
    } else {
      map = jsonDecode(trimmed) as Map<String, dynamic>;
    }
    return _decksFromBundleMap(map);
  } catch (_) {
    return [];
  }
}

Future<List<NgmySlideDeck>> ngmySlidesDecksFromShareRawAsync(String raw) async {
  var trimmed = raw.trim();
  if (trimmed.startsWith('$kNgmySlidesClaimPrefix|')) {
    final parts = trimmed.split('|');
    if (parts.length >= 2) {
      final json = await NgmySlidesTransferQrStash.consumeClaimCode(parts[1]);
      if (json != null && json.trim().isNotEmpty) {
        return ngmySlidesDecksFromShareRaw(json);
      }
    }
    return [];
  }
  final typedCode = ngmySlidesNormalizeMarriageClaimCode(trimmed);
  if (typedCode != null && !trimmed.contains('|') && !trimmed.startsWith('{')) {
    final json = await NgmySlidesTransferQrStash.consumeClaimCode(typedCode);
    if (json != null && json.trim().isNotEmpty) {
      return ngmySlidesDecksFromShareRaw(json);
    }
    return [];
  }
  if (trimmed.startsWith('$kNgmySlidesQrPrefixV2|')) {
    final parts = trimmed.split('|');
    if (parts.length >= 2) {
      final json = await NgmySlidesTransferQrStash.consumeToken(parts[1]);
      if (json != null && json.trim().isNotEmpty) {
        return ngmySlidesDecksFromShareRaw(json);
      }
    }
    return [];
  }
  return ngmySlidesDecksFromShareRaw(trimmed);
}

List<NgmySlideDeck> _decksFromBundleMap(Map<String, dynamic> map) {
  final type = (map['type'] ?? '').toString();
  if (type == kNgmySlidesDeckBundleType) {
    final deckRaw = map['deck'];
    if (deckRaw is! Map) return [];
    return [ngmySlidesDeckCopyForImport(NgmySlideDeck.fromJson(Map<String, dynamic>.from(deckRaw)))];
  }
  if (type == kNgmySlidesLibraryBundleType) {
    final list = map['decks'];
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((m) => ngmySlidesDeckCopyForImport(NgmySlideDeck.fromJson(Map<String, dynamic>.from(m))))
        .toList();
  }
  return [];
}

NgmySlideDeck ngmySlidesDeckCopyForImport(NgmySlideDeck imported) {
  final json = imported.toJson();
  json['id'] = NgmySlidesTemplates.newId();
  final name = imported.name.trim();
  json['name'] = name.isEmpty ? 'Shared presentation' : name;
  json['transferReceived'] = true;
  json.remove('transferClaimCode');
  final slides = json['slides'];
  if (slides is List) {
    for (final s in slides) {
      if (s is Map) s['id'] = NgmySlidesTemplates.newId();
    }
  }
  return NgmySlideDeck.fromJson(Map<String, dynamic>.from(json));
}

Future<List<NgmySlideDeck>?> ngmyPickAndParseSlidesBackup() async {
  final raw = await ngmyPickBackupJsonViaBrowser();
  if (raw == null || raw.trim().isEmpty) return null;
  final decks = await ngmySlidesDecksFromShareRawAsync(raw);
  return decks.isEmpty ? null : decks;
}

Future<String?> ngmyScanSlidesTransferQr(BuildContext context) {
  return NgmyNavigator.push<String>(
    context,
    const NgmySlidesTransferScanPage(),
    routeName: 'NgmySlidesTransferScan',
    fullscreenDialog: true,
  );
}

Future<String?> showNgmySlidesDocumentCodeDialog(BuildContext context) async {
  final entered = await showGeneralDialog<String>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Dismiss',
    barrierColor: const Color(0xD9000000),
    transitionDuration: const Duration(milliseconds: 240),
    pageBuilder: (ctx, anim, secondary) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, secondary, child) {
      final curve = Curves.easeOutCubic.transform(anim.value);
      return Opacity(
        opacity: curve,
        child: Transform.scale(
          scale: 0.94 + curve * 0.06,
          child: const _NgmySlidesDocumentCodeSheet(),
        ),
      );
    },
  );
  if (entered == null) return null;
  if (entered.isEmpty) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Use the 5-character code on the document QR, like GA847.')),
      );
    }
    return null;
  }
  return entered;
}

Future<void> showNgmySlidesTransferHub(
  BuildContext context, {
  required String ownerEmail,
  required List<NgmySlideDeck> decks,
  required Future<void> Function(List<NgmySlideDeck> imported) onImported,
  bool isAdmin = false,
}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute(
      fullscreenDialog: true,
      builder: (_) => NgmySlidesTransferPage(
        ownerEmail: ownerEmail,
        decks: decks,
        onImported: onImported,
        isAdmin: isAdmin,
      ),
    ),
  );
}

class NgmySlidesTransferPage extends StatefulWidget {
  const NgmySlidesTransferPage({
    super.key,
    required this.ownerEmail,
    required this.decks,
    required this.onImported,
    this.isAdmin = false,
  });

  final String ownerEmail;
  final List<NgmySlideDeck> decks;
  final Future<void> Function(List<NgmySlideDeck> imported) onImported;
  final bool isAdmin;

  @override
  State<NgmySlidesTransferPage> createState() => _NgmySlidesTransferPageState();
}

class _NgmySlidesTransferPageState extends State<NgmySlidesTransferPage> {
  String _mode = 'one';
  String? _selectedDeckId;
  bool _busy = false;
  bool _sendNeedsPay = false;

  NgmySlideDeck? get _selectedDeck {
    if (_selectedDeckId == null) return null;
    for (final d in widget.decks) {
      if (d.id == _selectedDeckId) return d;
    }
    return null;
  }

  List<NgmySlideDeck> get _exportDecks {
    if (_mode == 'all') return List<NgmySlideDeck>.from(widget.decks);
    final d = _selectedDeck;
    return d == null ? [] : [d];
  }

  String get _bundleLabel {
    if (_mode == 'all') return 'All presentations (${widget.decks.length})';
    return _selectedDeck?.name ?? 'Pick a presentation';
  }

  int get _slideCount => _exportDecks.fold<int>(0, (n, d) => n + d.slides.length);

  @override
  void initState() {
    super.initState();
    if (widget.decks.isNotEmpty) _selectedDeckId = widget.decks.first.id;
    unawaited(_refreshTransferStatus());
  }

  Future<void> _refreshTransferStatus() async {
    final needsPay = !await NgmyTransferPayments.canTransferWithoutPaying(
      email: widget.ownerEmail,
      isAdmin: widget.isAdmin,
    );
    if (!mounted) return;
    setState(() => _sendNeedsPay = needsPay);
  }

  Future<void> _showQr() async {
    final decks = _exportDecks;
    if (decks.isEmpty) return;
    for (final deck in decks) {
      if (ngmySlidesDeckUsesMarriageClaimCode(deck)) {
        ngmySlidesAssignMarriageClaimCode(deck, existing: widget.decks);
      }
    }
    final ok = await NgmyTransferPayments.ensureCanTransfer(
      context: context,
      email: widget.ownerEmail,
      isAdmin: widget.isAdmin,
    );
    if (!ok || !mounted) return;
    await Navigator.push<void>(
      context,
      MaterialPageRoute(
        builder: (_) => NgmySlidesTransferQrPage(
          ownerEmail: widget.ownerEmail,
          decks: decks,
          title: _bundleLabel,
        ),
      ),
    );
    await NgmyTransferPayments.consumeFreeTransferIfNeeded(
      email: widget.ownerEmail,
      isAdmin: widget.isAdmin,
    );
    await _refreshTransferStatus();
  }

  Future<void> _scan() async {
    final raw = await ngmyScanSlidesTransferQr(context);
    if (raw == null || raw.trim().isEmpty) return;
    setState(() => _busy = true);
    final imported = await ngmySlidesDecksFromShareRawAsync(raw);
    setState(() => _busy = false);
    if (imported.isEmpty) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not read that presentation QR or document code.')),
      );
      return;
    }
    await widget.onImported(imported);
    if (!mounted) return;
    Navigator.pop(context);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Imported ${imported.length} presentation${imported.length == 1 ? '' : 's'}')),
    );
  }

  Future<void> _download() async {
    final decks = _exportDecks;
    if (decks.isEmpty) return;
    final ok = await NgmyTransferPayments.ensureCanTransfer(
      context: context,
      email: widget.ownerEmail,
      isAdmin: widget.isAdmin,
    );
    if (!ok || !mounted) return;
    final json = decks.length == 1
        ? ngmySlidesShareJson(ownerEmail: widget.ownerEmail, deck: decks.first, allDecks: null)
        : ngmySlidesShareJson(ownerEmail: widget.ownerEmail, deck: null, allDecks: decks);
    final safe = decks.length == 1
        ? decks.first.name.replaceAll(RegExp(r'[^\w\-.]+'), '_')
        : 'ngmy_slides_library';
    final msg = await downloadNgmyAdvisorSyncJson(json, 'ngmy_slides_$safe');
    await NgmyTransferPayments.consumeFreeTransferIfNeeded(
      email: widget.ownerEmail,
      isAdmin: widget.isAdmin,
    );
    await _refreshTransferStatus();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _upload() async {
    setState(() => _busy = true);
    final imported = await ngmyPickAndParseSlidesBackup();
    setState(() => _busy = false);
    if (imported == null || imported.isEmpty) return;
    await widget.onImported(imported);
    if (!mounted) return;
    Navigator.pop(context);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Imported ${imported.length} presentation${imported.length == 1 ? '' : 's'} from file')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B1220) : const Color(0xFFF1F5F9);
    final canExport = _exportDecks.isNotEmpty;

    return Scaffold(
      backgroundColor: bg,
      body: Stack(
        children: [
          Positioned(
            top: -80,
            right: -60,
            child: Container(
              width: 220,
              height: 220,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(colors: [_slidesBlue.withValues(alpha: 0.22), Colors.transparent]),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 4, 12, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: Icon(Icons.close_rounded, color: isDark ? Colors.white70 : const Color(0xFF64748B)),
                      ),
                      Expanded(
                        child: Text(
                          'Transfer presentations',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontWeight: FontWeight.w900,
                            fontSize: 17,
                            color: isDark ? Colors.white : const Color(0xFF0F172A),
                          ),
                        ),
                      ),
                      const SizedBox(width: 48),
                    ],
                  ),
                ),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(18, 8, 18, 24),
                    children: [
                      _heroHeader(isDark),
                      const SizedBox(height: 22),
                      _sectionTitle(isDark, 'What to transfer'),
                      const SizedBox(height: 12),
                      Row(
                        children: [
                          Expanded(
                            child: _modeCard(
                              isDark: isDark,
                              selected: _mode == 'one',
                              icon: Icons.slideshow_rounded,
                              title: 'One presentation',
                              subtitle: 'Pick a single deck',
                              onTap: () => setState(() => _mode = 'one'),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: _modeCard(
                              isDark: isDark,
                              selected: _mode == 'all',
                              icon: Icons.collections_bookmark_rounded,
                              title: 'All presentations',
                              subtitle: '${widget.decks.length} saved',
                              onTap: () => setState(() => _mode = 'all'),
                            ),
                          ),
                        ],
                      ),
                      if (_mode == 'one') ...[
                        const SizedBox(height: 20),
                        _sectionTitle(isDark, 'Choose presentation'),
                        const SizedBox(height: 10),
                        if (widget.decks.isEmpty)
                          _emptyDecks(isDark)
                        else
                          ...widget.decks.map((d) => _deckPickTile(d, isDark)),
                      ],
                      const SizedBox(height: 24),
                      _sectionTitle(isDark, 'Transfer options'),
                      const SizedBox(height: 12),
                      Row(
                        children: [
                          Expanded(
                            child: _actionTile(
                              isDark: isDark,
                              enabled: canExport,
                              icon: Icons.qr_code_2_rounded,
                              title: 'Show QR',
                              subtitle: 'Scan on another device',
                              color: const Color(0xFF38BDF8),
                              featured: true,
                              onTap: _showQr,
                              isPro: _sendNeedsPay,
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: _actionTile(
                              isDark: isDark,
                              enabled: true,
                              icon: Icons.qr_code_scanner_rounded,
                              title: 'Scan QR',
                              subtitle: 'Receive presentations',
                              color: _slidesIndigo,
                              onTap: _scan,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 10),
                      Row(
                        children: [
                          Expanded(
                            child: _actionTile(
                              isDark: isDark,
                              enabled: canExport,
                              icon: Icons.download_rounded,
                              title: 'Backup file',
                              subtitle: 'Download .json',
                              color: const Color(0xFF10B981),
                              onTap: _download,
                              isPro: _sendNeedsPay,
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: _actionTile(
                              isDark: isDark,
                              enabled: true,
                              icon: Icons.upload_file_rounded,
                              title: 'Upload file',
                              subtitle: 'Import backup',
                              color: const Color(0xFFF59E0B),
                              onTap: _upload,
                            ),
                          ),
                        ],
                      ),
                      if (canExport) ...[
                        const SizedBox(height: 18),
                        Container(
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            color: _slidesBlue.withValues(alpha: isDark ? 0.12 : 0.08),
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: _slidesBlue.withValues(alpha: 0.28)),
                          ),
                          child: Row(
                            children: [
                              Icon(Icons.info_outline_rounded, size: 18, color: _slidesBlue.withValues(alpha: 0.9)),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Text(
                                  'Ready to share $_bundleLabel · $_slideCount slide${_slideCount == 1 ? '' : 's'}',
                                  style: TextStyle(
                                    fontSize: 12,
                                    fontWeight: FontWeight.w600,
                                    color: isDark ? Colors.white70 : const Color(0xFF475569),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          ),
          if (_busy)
            Container(
              color: Colors.black45,
              child: const Center(child: CircularProgressIndicator(color: _slidesBlue)),
            ),
        ],
      ),
    );
  }

  Widget _heroHeader(bool isDark) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(20, 22, 20, 24),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [_slidesBlue, _slidesBlueDark, _slidesIndigo],
        ),
        boxShadow: [
          BoxShadow(color: _slidesBlue.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 10)),
        ],
      ),
      child: Stack(
        children: [
          Positioned(
            right: -12,
            top: -8,
            child: Icon(Icons.auto_stories_rounded, size: 100, color: Colors.white.withValues(alpha: 0.1)),
          ),
          Row(
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  color: Colors.white.withValues(alpha: 0.18),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.35)),
                ),
                child: const Icon(Icons.sync_alt_rounded, color: Colors.white, size: 28),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'NGMY Slides Transfer',
                      style: TextStyle(
                        color: Colors.white.withValues(alpha: 0.85),
                        fontSize: 11,
                        fontWeight: FontWeight.w800,
                        letterSpacing: 1.1,
                      ),
                    ),
                    const SizedBox(height: 4),
                    const FittedBox(
                      fit: BoxFit.scaleDown,
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'Move presentations between devices',
                        maxLines: 1,
                        softWrap: false,
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: 16,
                          height: 1.1,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _sectionTitle(bool isDark, String text) {
    return Row(
      children: [
        Container(width: 3, height: 14, decoration: BoxDecoration(color: _slidesBlue, borderRadius: BorderRadius.circular(2))),
        const SizedBox(width: 8),
        Text(
          text.toUpperCase(),
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.w900,
            letterSpacing: 0.9,
            color: isDark ? Colors.white54 : const Color(0xFF64748B),
          ),
        ),
      ],
    );
  }

  Widget _modeCard({
    required bool isDark,
    required bool selected,
    required IconData icon,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            color: isDark ? const Color(0xFF111827) : Colors.white,
            border: Border.all(
              color: selected ? _slidesBlue : (isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
              width: selected ? 2 : 1,
            ),
            boxShadow: selected
                ? [BoxShadow(color: _slidesBlue.withValues(alpha: 0.2), blurRadius: 14, offset: const Offset(0, 6))]
                : null,
          ),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: _slidesBlue.withValues(alpha: selected ? 0.2 : 0.1),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(icon, color: _slidesBlue, size: 22),
                ),
                const SizedBox(height: 10),
                Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                const SizedBox(height: 2),
                Text(subtitle, style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _deckPickTile(NgmySlideDeck deck, bool isDark) {
    final selected = deck.id == _selectedDeckId;
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => setState(() => _selectedDeckId = deck.id),
          borderRadius: BorderRadius.circular(16),
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF111827) : Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: selected ? _slidesBlue : (isDark ? Colors.white12 : const Color(0xFFE2E8F0)), width: selected ? 2 : 1),
            ),
            child: Row(
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    gradient: LinearGradient(colors: [_slidesBlue, _slidesBlue.withValues(alpha: 0.7)]),
                  ),
                  child: const Icon(Icons.slideshow_rounded, color: Colors.white, size: 22),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(deck.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                      Text('${deck.slides.length} slides', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
                    ],
                  ),
                ),
                Icon(selected ? Icons.check_circle_rounded : Icons.circle_outlined, color: selected ? _slidesBlue : (isDark ? Colors.white24 : Colors.black26)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _emptyDecks(bool isDark) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
      ),
      child: Text(
        'Create a presentation first, then come back to transfer it.',
        style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
      ),
    );
  }

  Widget _actionTile({
    required bool isDark,
    required bool enabled,
    required IconData icon,
    required String title,
    required String subtitle,
    required Color color,
    required VoidCallback onTap,
    bool featured = false,
    bool isPro = false,
  }) {
    return Opacity(
        opacity: enabled ? 1 : 0.45,
        child: Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: enabled ? onTap : null,
            borderRadius: BorderRadius.circular(18),
            child: Ink(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(18),
                color: isDark ? const Color(0xFF111827) : Colors.white,
                border: Border.all(
                  color: featured ? color.withValues(alpha: 0.45) : (isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                  width: featured ? 1.5 : 1,
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 14, 12, 14),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Stack(
                      clipBehavior: Clip.none,
                      children: [
                        Container(
                          padding: const EdgeInsets.all(9),
                          decoration: BoxDecoration(
                            color: color.withValues(alpha: 0.14),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Icon(icon, color: color, size: 22),
                        ),
                        if (isPro)
                          Positioned(
                            right: -4,
                            top: -4,
                            child: Container(
                              width: 14,
                              height: 14,
                              decoration: const BoxDecoration(
                                color: Color(0xFF0369A1),
                                shape: BoxShape.circle,
                              ),
                              child: const Icon(Icons.lock_rounded, size: 9, color: Colors.white),
                            ),
                          ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                    const SizedBox(height: 2),
                    Text(subtitle, style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B))),
                  ],
                ),
              ),
            ),
          ),
        ),
    );
  }
}

class NgmySlidesTransferQrPage extends StatefulWidget {
  const NgmySlidesTransferQrPage({
    super.key,
    required this.ownerEmail,
    required this.decks,
    required this.title,
  });

  final String ownerEmail;
  final List<NgmySlideDeck> decks;
  final String title;

  @override
  State<NgmySlidesTransferQrPage> createState() => _NgmySlidesTransferQrPageState();
}

class _NgmySlidesTransferQrPageState extends State<NgmySlidesTransferQrPage> {
  String? _payload;
  String? _claimCode;
  String? _error;

  @override
  void initState() {
    super.initState();
    unawaited(_load());
  }

  Future<void> _load() async {
    try {
      final shareJson = widget.decks.length == 1
          ? ngmySlidesShareJson(ownerEmail: widget.ownerEmail, deck: widget.decks.first, allDecks: null)
          : ngmySlidesShareJson(ownerEmail: widget.ownerEmail, deck: null, allDecks: widget.decks);
      final bundleId = widget.decks.length == 1 ? widget.decks.first.id : 'library_${widget.decks.length}';
      if (widget.decks.length == 1 && ngmySlidesDeckUsesMarriageClaimCode(widget.decks.first)) {
        ngmySlidesAssignMarriageClaimCode(widget.decks.first);
      }
      final created = await ngmySlidesQrPayloadForDisplay(
        ownerEmail: widget.ownerEmail,
        shareJson: shareJson,
        bundleId: bundleId,
        marriageState: ngmySlidesMarriageTransferState(widget.decks),
        existingClaimCode: ngmySlidesStableMarriageClaimCode(widget.decks),
      );
      if (!mounted) return;
      setState(() {
        _payload = created.qrPayload;
        _claimCode = created.claimCode;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() => _error = 'Could not create QR. Check your connection and try again.');
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B1220) : const Color(0xFFF1F5F9);
    final isCloud = _payload?.startsWith('$kNgmySlidesQrPrefixV2|') ?? false;
    final slideCount = widget.decks.fold<int>(0, (n, d) => n + d.slides.length);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 12, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.arrow_back_ios_new_rounded, size: 18, color: isDark ? Colors.white70 : const Color(0xFF64748B)),
                  ),
                  Expanded(
                    child: Text(
                      'Presentation QR',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                    ),
                  ),
                  const SizedBox(width: 48),
                ],
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(20, 8, 20, 24),
                child: Column(
                  children: [
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.fromLTRB(20, 22, 20, 24),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(24),
                        gradient: const LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [_slidesBlue, _slidesBlueDark, _slidesIndigo],
                        ),
                      ),
                      child: Column(
                        children: [
                          Text(
                            widget.title,
                            textAlign: TextAlign.center,
                            style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: Colors.white),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            '${widget.decks.length} presentation${widget.decks.length == 1 ? '' : 's'} · $slideCount slides',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12, fontWeight: FontWeight.w700),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 16),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(22),
                      decoration: BoxDecoration(
                        color: isDark ? const Color(0xFF111827) : Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        border: Border.all(color: _slidesBlue.withValues(alpha: 0.3)),
                      ),
                      child: Column(
                        children: [
                          if (_error != null)
                            Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.redAccent))
                          else if (_payload == null)
                            const Padding(
                              padding: EdgeInsets.symmetric(vertical: 48),
                              child: CircularProgressIndicator(color: _slidesBlue),
                            )
                          else ...[
                            if ((_claimCode ?? '').isNotEmpty) ...[
                              const Text(
                                'Document code',
                                style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: Color(0xFF64748B)),
                              ),
                              const SizedBox(height: 6),
                              GestureDetector(
                                onTap: () async {
                                  await Clipboard.setData(ClipboardData(text: _claimCode!));
                                  if (!context.mounted) return;
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    const SnackBar(content: Text('Document code copied.')),
                                  );
                                },
                                child: Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                                  decoration: BoxDecoration(
                                    color: const Color(0xFFEFF6FF),
                                    borderRadius: BorderRadius.circular(14),
                                    border: Border.all(color: _slidesBlue.withValues(alpha: 0.35)),
                                  ),
                                  child: Text(
                                    _claimCode!,
                                    style: const TextStyle(
                                      fontWeight: FontWeight.w900,
                                      fontSize: 28,
                                      letterSpacing: 4,
                                      color: Color(0xFF0F172A),
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                'Share this code or the QR. The other phone taps search next to the flashlight.',
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                              ),
                              const SizedBox(height: 14),
                            ],
                            Container(
                              padding: const EdgeInsets.all(16),
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(20),
                                border: Border.all(color: const Color(0xFFE2E8F0)),
                              ),
                              child: NgmyBrandedQrWidget(data: _payload!, large: true),
                            ),
                          ],
                          const SizedBox(height: 14),
                          Text(
                            isCloud ? 'Cloud QR — scan on another phone with NGMY Slides open.' : 'Offline QR — keep both devices on the same network if scan fails.',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _NgmySlidesDocumentCodeSheet extends StatefulWidget {
  const _NgmySlidesDocumentCodeSheet();

  @override
  State<_NgmySlidesDocumentCodeSheet> createState() => _NgmySlidesDocumentCodeSheetState();
}

class _NgmySlidesDocumentCodeSheetState extends State<_NgmySlidesDocumentCodeSheet> {
  final TextEditingController _controller = TextEditingController();
  final FocusNode _focus = FocusNode();

  @override
  void initState() {
    super.initState();
    _focus.addListener(() {
      if (mounted) setState(() {});
    });
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) _focus.requestFocus();
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    _focus.dispose();
    super.dispose();
  }

  String get _raw => _controller.text.toUpperCase();
  String? get _valid => ngmySlidesNormalizeMarriageClaimCode(_raw);

  void _submit() {
    Navigator.pop(context, _valid ?? '');
  }

  @override
  Widget build(BuildContext context) {
    final inset = MediaQuery.viewInsetsOf(context).bottom;
    return Center(
      child: Padding(
        padding: EdgeInsets.fromLTRB(24, 24, 24, 24 + inset),
        child: Material(
          color: Colors.transparent,
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 360),
            child: Container(
              decoration: BoxDecoration(
                color: const Color(0xFF0B1220),
                borderRadius: BorderRadius.circular(28),
                border: Border.all(color: _slidesBlue.withValues(alpha: 0.4), width: 1.2),
                boxShadow: [
                  BoxShadow(color: _slidesBlue.withValues(alpha: 0.28), blurRadius: 36, offset: const Offset(0, 16)),
                  const BoxShadow(color: Color(0x90000000), blurRadius: 28, offset: Offset(0, 18)),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(28),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
                      decoration: const BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [_slidesBlue, _slidesBlueDark, _slidesIndigo],
                        ),
                      ),
                      child: Column(
                        children: [
                          Container(
                            width: 52,
                            height: 52,
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.16),
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
                            ),
                            child: const Icon(Icons.pin_rounded, color: Colors.white, size: 26),
                          ),
                          const SizedBox(height: 12),
                          const Text(
                            'Enter document code',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, letterSpacing: -0.3),
                          ),
                          const SizedBox(height: 6),
                          Text(
                            'Type the 5-character code shown with the QR.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontWeight: FontWeight.w600, fontSize: 13, height: 1.35),
                          ),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(20, 22, 20, 20),
                      child: Column(
                        children: [
                          Stack(
                            children: [
                              Row(
                                children: [
                                  for (var i = 0; i < 5; i++) ...[
                                    if (i == 2) const SizedBox(width: 10),
                                    Expanded(child: _codeCell(i)),
                                    if (i != 4 && i != 1) const SizedBox(width: 7),
                                  ],
                                ],
                              ),
                              Positioned.fill(
                                child: Opacity(
                                  opacity: 0,
                                  child: TextField(
                                    controller: _controller,
                                    focusNode: _focus,
                                    autofocus: true,
                                    maxLength: 5,
                                    textCapitalization: TextCapitalization.characters,
                                    keyboardType: TextInputType.visiblePassword,
                                    inputFormatters: [
                                      FilteringTextInputFormatter.allow(RegExp(r'[A-Za-z0-9]')),
                                      LengthLimitingTextInputFormatter(5),
                                      _UpperCaseTextFormatter(),
                                    ],
                                    onChanged: (_) => setState(() {}),
                                    onSubmitted: (_) => _submit(),
                                    decoration: const InputDecoration(counterText: '', border: InputBorder.none),
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 10),
                          const Text(
                            'Example  GA847',
                            style: TextStyle(color: Color(0xFF94A3B8), fontWeight: FontWeight.w700, fontSize: 12, letterSpacing: 1.2),
                          ),
                          const SizedBox(height: 18),
                          SizedBox(
                            width: double.infinity,
                            height: 50,
                            child: FilledButton(
                              onPressed: _valid == null ? null : _submit,
                              style: FilledButton.styleFrom(
                                backgroundColor: _slidesBlue,
                                disabledBackgroundColor: const Color(0xFF1E293B),
                                foregroundColor: Colors.white,
                                disabledForegroundColor: const Color(0xFF64748B),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                              ),
                              child: const Text('Transfer document', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                            ),
                          ),
                          const SizedBox(height: 6),
                          TextButton(
                            onPressed: () => Navigator.pop(context),
                            style: TextButton.styleFrom(foregroundColor: const Color(0xFF94A3B8)),
                            child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _codeCell(int index) {
    final filled = index < _raw.length;
    final active = index == _raw.length && _focus.hasFocus;
    final ch = filled ? _raw[index] : '';
    return AnimatedContainer(
      duration: const Duration(milliseconds: 160),
      height: 56,
      decoration: BoxDecoration(
        color: filled || active ? const Color(0xFF111827) : const Color(0xFF0F172A),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(
          color: active
              ? _slidesBlue
              : filled
                  ? _slidesBlue.withValues(alpha: 0.55)
                  : const Color(0xFF334155),
          width: active ? 2 : 1.2,
        ),
        boxShadow: active
            ? [BoxShadow(color: _slidesBlue.withValues(alpha: 0.28), blurRadius: 12)]
            : null,
      ),
      alignment: Alignment.center,
      child: Text(
        ch,
        style: const TextStyle(
          color: Colors.white,
          fontWeight: FontWeight.w900,
          fontSize: 22,
          letterSpacing: 0,
        ),
      ),
    );
  }
}

class _UpperCaseTextFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final text = newValue.text.toUpperCase();
    return newValue.copyWith(
      text: text,
      selection: TextSelection.collapsed(offset: text.length),
    );
  }
}

class NgmySlidesTransferScanPage extends StatefulWidget {
  const NgmySlidesTransferScanPage({super.key});

  @override
  State<NgmySlidesTransferScanPage> createState() => _NgmySlidesTransferScanPageState();
}

class _NgmySlidesTransferScanPageState extends State<NgmySlidesTransferScanPage> {
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.unrestricted,
    facing: CameraFacing.back,
  );
  bool _handled = false;
  bool _torchOn = false;

  @override
  void dispose() {
    _camera.dispose();
    super.dispose();
  }

  void _accept(String raw) {
    if (_handled || !mounted) return;
    _handled = true;
    NgmyNavigator.pop(context, raw);
  }

  Future<void> _enterDocumentCode() async {
    if (_handled) return;
    final entered = await showNgmySlidesDocumentCodeDialog(context);
    if (entered == null || !mounted) return;
    _accept('$kNgmySlidesClaimPrefix|$entered');
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final barcode in capture.barcodes) {
      final payload = ngmySlidesScanPayloadFromBarcode(barcode);
      if (payload != null) {
        _accept(payload);
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scan presentation QR'),
        backgroundColor: const Color(0xFF0B1220),
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            tooltip: 'Enter document code',
            icon: const Icon(Icons.search_rounded),
            onPressed: _enterDocumentCode,
          ),
          IconButton(
            tooltip: _torchOn ? 'Flash off' : 'Flash on',
            icon: Icon(_torchOn ? Icons.flash_on_rounded : Icons.flash_off_rounded),
            onPressed: () async {
              await _camera.toggleTorch();
              if (mounted) setState(() => _torchOn = !_torchOn);
            },
          ),
        ],
      ),
      backgroundColor: Colors.black,
      body: Stack(
        fit: StackFit.expand,
        children: [
          MobileScanner(controller: _camera, onDetect: _onDetect),
          Center(
            child: Container(
              width: 260,
              height: 260,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(28),
                border: Border.all(color: _slidesBlue, width: 3),
                boxShadow: [BoxShadow(color: _slidesBlue.withValues(alpha: 0.35), blurRadius: 24, spreadRadius: 2)],
              ),
            ),
          ),
          Positioned(
            left: 20,
            right: 20,
            bottom: 32,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
              decoration: BoxDecoration(
                color: Colors.black.withValues(alpha: 0.72),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: _slidesBlue.withValues(alpha: 0.45)),
              ),
              child: const Text(
                'Point at a NGMY Slides transfer QR, or tap search to enter the document code',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
