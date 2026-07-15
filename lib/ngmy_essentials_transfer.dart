import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_business_notes.dart';
import 'ngmy_business_tasks.dart';
import 'ngmy_essentials_short_code.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

const _accent = Color(0xFF38BDF8);
const _accent2 = Color(0xFF34D399);

enum EssentialsTransferCategory { contacts, locations, support, medicines, notes, tasks, all }

Future<Map<String, dynamic>> ngmyEssentialsExportBundle(String userEmail, Set<EssentialsTransferCategory> cats) async {
  final all = cats.contains(EssentialsTransferCategory.all);
  final bundle = <String, dynamic>{'v': 1, 'exportedAt': DateTime.now().toUtc().toIso8601String()};
  if (all || cats.contains(EssentialsTransferCategory.contacts)) {
    bundle['contacts'] = (await ngmyExportBusinessContacts(userEmail: userEmail)).map((e) => e.toJson()).toList();
  }
  if (all || cats.contains(EssentialsTransferCategory.locations)) {
    bundle['locations'] = (await ngmyExportSavedLocations(userEmail: userEmail)).map((e) => e.toJson()).toList();
  }
  if (all || cats.contains(EssentialsTransferCategory.support)) {
    bundle['support'] = (await ngmyExportQuickSupport(userEmail: userEmail)).map((e) => e.toJson()).toList();
  }
  if (all || cats.contains(EssentialsTransferCategory.medicines)) {
    bundle['medicines'] = (await ngmyExportMedicines(userEmail: userEmail)).map((e) => e.toJson()).toList();
  }
  if (all || cats.contains(EssentialsTransferCategory.notes)) {
    bundle['notes'] = (await ngmyExportBusinessNotes(userEmail: userEmail))
        .map((e) => e.toJson(embedImagesForTransfer: true))
        .toList();
  }
  if (all || cats.contains(EssentialsTransferCategory.tasks)) {
    bundle['tasks'] = (await ngmyExportBusinessTasks(userEmail: userEmail)).map((e) => e.toJson()).toList();
  }
  return bundle;
}

String ngmyEssentialsEncodePayload(Map<String, dynamic> bundle) {
  final raw = jsonEncode(bundle);
  final compressed = GZipEncoder().encode(utf8.encode(raw))!;
  return '$kNgmyEssentialsPayloadPrefix${base64Url.encode(compressed)}';
}

Map<String, dynamic>? ngmyEssentialsDecodePayload(String code) {
  try {
    var s = code.trim();
    if (s.startsWith(kNgmyEssentialsPayloadPrefix)) s = s.substring(kNgmyEssentialsPayloadPrefix.length);
    final bytes = GZipDecoder().decodeBytes(base64Url.decode(s));
    final decoded = jsonDecode(utf8.decode(bytes));
    if (decoded is Map) return Map<String, dynamic>.from(decoded);
  } catch (_) {}
  return null;
}

/// Short scannable code in the QR — same big-dot style as NGMY Advisors transfer.
String ngmyEssentialsQrDisplayData({required String shortCode}) => ngmyEssentialsShortQrPayload(shortCode);

Future<void> ngmyEssentialsImportBundle(String userEmail, Map<String, dynamic> bundle) async {
  if (bundle['contacts'] is List) {
    final items = (bundle['contacts'] as List).whereType<Map>().map((m) => NgmyBusinessContact.fromJson(Map<String, dynamic>.from(m))).toList();
    await ngmyImportBusinessContacts(userEmail: userEmail, items: items);
  }
  if (bundle['locations'] is List) {
    final items = (bundle['locations'] as List).whereType<Map>().map((m) => NgmySavedLocation.fromJson(Map<String, dynamic>.from(m))).toList();
    await ngmyImportSavedLocations(userEmail: userEmail, items: items);
  }
  if (bundle['support'] is List) {
    final items = (bundle['support'] as List).whereType<Map>().map((m) => NgmySupportLine.fromJson(Map<String, dynamic>.from(m))).toList();
    await ngmyImportQuickSupport(userEmail: userEmail, items: items);
  }
  if (bundle['medicines'] is List) {
    final items = (bundle['medicines'] as List).whereType<Map>().map((m) => NgmyMedicineEntry.fromJson(Map<String, dynamic>.from(m))).toList();
    await ngmyImportMedicines(userEmail: userEmail, items: items);
  }
  if (bundle['notes'] is List) {
    final items = (bundle['notes'] as List).whereType<Map>().map((m) => NgmyBusinessNote.fromJson(Map<String, dynamic>.from(m))).toList();
    await ngmyImportBusinessNotes(userEmail: userEmail, items: items);
  }
  if (bundle['tasks'] is List) {
    final items = (bundle['tasks'] as List).whereType<Map>().map((m) => NgmyBusinessTask.fromJson(Map<String, dynamic>.from(m))).toList();
    await ngmyImportBusinessTasks(userEmail: userEmail, items: items);
  }
}

Future<String?> ngmyEssentialsResolveImportPayload(String raw) async {
  final parsed = ngmyEssentialsParseScannedRaw(raw);
  if (parsed == null) return null;
  if (parsed.startsWith(kNgmyEssentialsPayloadPrefix)) return parsed;
  return NgmyEssentialsShortCode.resolvePayload(parsed);
}

Future<void> showNgmyEssentialsTransferHub(BuildContext context, {required String userEmail}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute(builder: (_) => NgmyEssentialsTransferPage(userEmail: userEmail)),
  );
}

class NgmyEssentialsTransferPage extends StatefulWidget {
  const NgmyEssentialsTransferPage({super.key, required this.userEmail});
  final String userEmail;

  @override
  State<NgmyEssentialsTransferPage> createState() => _NgmyEssentialsTransferPageState();
}

class _NgmyEssentialsTransferPageState extends State<NgmyEssentialsTransferPage> {
  var _all = true;
  var _contacts = true;
  var _locations = true;
  var _support = true;
  var _medicines = true;
  var _notes = true;
  var _tasks = true;
  var _busy = false;

  Set<EssentialsTransferCategory> get _selected {
    if (_all) return {EssentialsTransferCategory.all};
    final s = <EssentialsTransferCategory>{};
    if (_contacts) s.add(EssentialsTransferCategory.contacts);
    if (_locations) s.add(EssentialsTransferCategory.locations);
    if (_support) s.add(EssentialsTransferCategory.support);
    if (_medicines) s.add(EssentialsTransferCategory.medicines);
    if (_notes) s.add(EssentialsTransferCategory.notes);
    if (_tasks) s.add(EssentialsTransferCategory.tasks);
    return s;
  }

  Future<void> _showQr() async {
    if (_selected.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Select at least one category')));
      return;
    }
    setState(() => _busy = true);
    try {
      final bundle = await ngmyEssentialsExportBundle(widget.userEmail, _selected);
      final payload = ngmyEssentialsEncodePayload(bundle);
      if (payload.trim().isEmpty) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Nothing selected to back up')));
        }
        return;
      }
      var code = NgmyEssentialsShortCode.generate();
      var published = false;
      for (var i = 0; i < 5; i++) {
        final result = await NgmyEssentialsShortCode.publishPayload(ownerEmail: widget.userEmail, payload: payload, code: code);
        if (result != null) {
          code = result;
          published = true;
          break;
        }
        code = NgmyEssentialsShortCode.generate();
      }
      if (!published) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Could not upload backup — check internet and try again')),
          );
        }
        return;
      }
      final qrData = ngmyEssentialsQrDisplayData(shortCode: code);
      if (!mounted) return;
      await Navigator.of(context).push<void>(
        MaterialPageRoute(
          builder: (_) => _EssentialsQrDisplayPage(
            qrData: qrData,
            fullPayload: payload,
            code: code,
            categoryCount: _all ? 4 : _selected.length,
          ),
        ),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _scanQr() async {
    final raw = await Navigator.of(context).push<String>(MaterialPageRoute(builder: (_) => const _EssentialsScanPage()));
    if (raw == null || !mounted) return;
    await _importRaw(raw);
  }

  Future<void> _enterCode() async {
    final raw = await Navigator.of(context).push<String>(MaterialPageRoute(builder: (_) => const _EssentialsEnterCodePage()));
    if (raw == null || !mounted) return;
    await _importRaw(raw);
  }

  Future<void> _importRaw(String raw) async {
    setState(() => _busy = true);
    try {
      final payload = await ngmyEssentialsResolveImportPayload(raw);
      if (payload == null) {
        if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Code not found — check the 6-character code or create a new QR')));
        return;
      }
      final bundle = ngmyEssentialsDecodePayload(payload);
      if (bundle == null) {
        if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Invalid backup data')));
        return;
      }
      await ngmyEssentialsImportBundle(widget.userEmail, bundle);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Essentials imported successfully')));
        Navigator.pop(context, true);
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Scaffold(
      backgroundColor: t.scaffold,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 8, 12, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(color: t.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
                      child: Icon(Icons.arrow_back_ios_new_rounded, color: t.iconButtonIcon, size: 18),
                    ),
                  ),
                  Expanded(
                    child: Text('Transfer Essentials', textAlign: TextAlign.center, style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 18)),
                  ),
                  const SizedBox(width: 48),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(20, 12, 20, 28),
                children: [
                  Container(
                    padding: const EdgeInsets.all(18),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: [_accent.withValues(alpha: t.isDark ? 0.18 : 0.1), t.surface]),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: _accent.withValues(alpha: 0.3)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Move your essentials', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 20)),
                        const SizedBox(height: 6),
                        Text('Share a 6-character code or scan the big-dot NGMY QR — works on any phone for 24 hours.', style: TextStyle(color: t.subtitle, fontSize: 13, height: 1.4)),
                      ],
                    ),
                  ),
                  const SizedBox(height: 20),
                  _hubTile(context, icon: Icons.qr_code_2_rounded, title: 'Show backup QR', subtitle: 'Big easy-scan QR + 6-character code', color: _accent, onTap: _busy ? null : _showQr),
                  const SizedBox(height: 10),
                  _hubTile(context, icon: Icons.qr_code_scanner_rounded, title: 'Scan QR code', subtitle: 'Camera scan on receiving phone', color: _accent2, onTap: _busy ? null : _scanQr),
                  const SizedBox(height: 10),
                  _hubTile(context, icon: Icons.pin_rounded, title: 'Enter 6-character code', subtitle: 'Type or paste the code from sender', color: const Color(0xFFA78BFA), onTap: _busy ? null : _enterCode),
                  const SizedBox(height: 24),
                  Text('INCLUDE IN BACKUP', style: t.sectionLabel.copyWith(letterSpacing: 1.2)),
                  const SizedBox(height: 8),
                  _checkTile(context, 'All information', _all, (v) => setState(() => _all = v ?? true)),
                  if (!_all) ...[
                    _checkTile(context, 'Contacts', _contacts, (v) => setState(() => _contacts = v ?? false)),
                    _checkTile(context, 'Site Map', _locations, (v) => setState(() => _locations = v ?? false)),
                    _checkTile(context, 'Hotlines', _support, (v) => setState(() => _support = v ?? false)),
                    _checkTile(context, 'Medicines', _medicines, (v) => setState(() => _medicines = v ?? false)),
                    _checkTile(context, 'Notes', _notes, (v) => setState(() => _notes = v ?? false)),
                    _checkTile(context, 'Quick Tasks', _tasks, (v) => setState(() => _tasks = v ?? false)),
                  ],
                  if (_busy) ...[const SizedBox(height: 24), Center(child: CircularProgressIndicator(color: _accent))],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _hubTile(BuildContext context, {required IconData icon, required String title, required String subtitle, required Color color, VoidCallback? onTap}) {
    final t = NgmyHubTheme.of(context);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: t.surface, borderRadius: BorderRadius.circular(18), border: Border.all(color: color.withValues(alpha: 0.28))),
          child: Row(
            children: [
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(color: color.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(14)),
                child: Icon(icon, color: color, size: 26),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(title, style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 16)),
                  const SizedBox(height: 3),
                  Text(subtitle, style: TextStyle(color: t.subtitle, fontSize: 12)),
                ]),
              ),
              Icon(Icons.chevron_right_rounded, color: t.muted),
            ],
          ),
        ),
      ),
    );
  }

  Widget _checkTile(BuildContext context, String label, bool value, ValueChanged<bool?> onChanged) {
    final t = NgmyHubTheme.of(context);
    return CheckboxListTile(
      contentPadding: EdgeInsets.zero,
      title: Text(label, style: TextStyle(color: value ? t.title : t.subtitle, fontWeight: FontWeight.w600)),
      value: value,
      activeColor: _accent,
      onChanged: onChanged,
    );
  }
}

class _EssentialsQrDisplayPage extends StatelessWidget {
  const _EssentialsQrDisplayPage({
    required this.qrData,
    required this.fullPayload,
    required this.code,
    required this.categoryCount,
  });
  final String qrData;
  final String fullPayload;
  final String code;
  final int categoryCount;

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Scaffold(
      backgroundColor: t.scaffold,
      appBar: AppBar(backgroundColor: t.scaffold, foregroundColor: t.title, elevation: 0, centerTitle: true, title: const Text('Backup QR', style: TextStyle(fontWeight: FontWeight.w900))),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(22),
                  decoration: BoxDecoration(color: t.surface, borderRadius: BorderRadius.circular(24), border: Border.all(color: _accent.withValues(alpha: 0.35))),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      NgmyBrandedQrWidget(
                        data: qrData,
                        large: true,
                        sizeOverride: 320,
                      ),
                      Text(
                        'YOUR 6-CHARACTER CODE',
                        style: t.sectionLabel.copyWith(letterSpacing: 1.3),
                      ),
                      const SizedBox(height: 10),
                      SelectableText(
                        code,
                        style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 42, letterSpacing: 8),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        '$categoryCount categor${categoryCount == 1 ? 'y' : 'ies'} · valid 24 hours · scan on any phone',
                        style: TextStyle(color: t.subtitle, fontSize: 12, height: 1.35),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 16),
                      Wrap(
                        alignment: WrapAlignment.center,
                        spacing: 10,
                        runSpacing: 10,
                        children: [
                          FilledButton.icon(
                            onPressed: () {
                              Clipboard.setData(ClipboardData(text: code));
                              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('6-character code copied')));
                            },
                            icon: const Icon(Icons.copy_rounded, size: 18),
                            label: const Text('Copy code'),
                            style: FilledButton.styleFrom(backgroundColor: _accent, foregroundColor: Colors.black),
                          ),
                          FilledButton.icon(
                            onPressed: () {
                              Clipboard.setData(ClipboardData(text: fullPayload));
                              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Full backup copied — paste on other phone')));
                            },
                            icon: const Icon(Icons.backup_rounded, size: 18),
                            label: const Text('Copy backup'),
                            style: FilledButton.styleFrom(backgroundColor: _accent2, foregroundColor: Colors.black),
                          ),
                          OutlinedButton.icon(
                            onPressed: () => Share.share(fullPayload, subject: 'NGMY Essentials backup'),
                            icon: const Icon(Icons.share_rounded, size: 18),
                            label: const Text('Share backup'),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(height: 14),
            SizedBox(
              width: double.infinity,
              child: FilledButton(onPressed: () => Navigator.pop(context), style: FilledButton.styleFrom(backgroundColor: _accent2, foregroundColor: Colors.black, minimumSize: const Size.fromHeight(50)), child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w900))),
            ),
          ],
        ),
      ),
    );
  }
}

class _EssentialsEnterCodePage extends StatefulWidget {
  const _EssentialsEnterCodePage();

  @override
  State<_EssentialsEnterCodePage> createState() => _EssentialsEnterCodePageState();
}

class _EssentialsEnterCodePageState extends State<_EssentialsEnterCodePage> {
  final _ctrl = TextEditingController();
  var _busy = false;

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  Future<void> _paste() async {
    final clip = await Clipboard.getData(Clipboard.kTextPlain);
    if (clip?.text != null) _ctrl.text = clip!.text!.trim().toUpperCase();
  }

  Future<void> _submit() async {
    final code = NgmyEssentialsShortCode.normalize(_ctrl.text);
    if (code == null) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a valid 6-character code (letters or numbers)')));
      return;
    }
    setState(() => _busy = true);
    final payload = await NgmyEssentialsShortCode.resolvePayload(code);
    if (!mounted) return;
    setState(() => _busy = false);
    if (payload == null) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Code not found — ask sender to create a new QR')));
      return;
    }
    Navigator.pop(context, payload);
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Scaffold(
      backgroundColor: t.scaffold,
      appBar: AppBar(backgroundColor: t.scaffold, foregroundColor: t.title, elevation: 0, centerTitle: true, title: const Text('Enter code', style: TextStyle(fontWeight: FontWeight.w900))),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Type the 6-character code from the sender', style: TextStyle(color: t.subtitle, fontSize: 14)),
            const SizedBox(height: 20),
            TextField(
              controller: _ctrl,
              autofocus: true,
              maxLength: 6,
              textCapitalization: TextCapitalization.characters,
              style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 36, letterSpacing: 10),
              textAlign: TextAlign.center,
              decoration: InputDecoration(
                counterText: '',
                hintText: 'ABC123',
                hintStyle: TextStyle(color: t.muted, letterSpacing: 10),
                filled: true,
                fillColor: t.inputFill,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(18), borderSide: BorderSide(color: _accent.withValues(alpha: 0.35))),
                enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(18), borderSide: BorderSide(color: t.inputBorder)),
                focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(18), borderSide: const BorderSide(color: _accent, width: 2)),
              ),
              onSubmitted: (_) => _submit(),
            ),
            const SizedBox(height: 12),
            TextButton.icon(onPressed: _paste, icon: const Icon(Icons.content_paste_rounded), label: const Text('Paste from clipboard')),
            const Spacer(),
            FilledButton(
              onPressed: _busy ? null : _submit,
              style: FilledButton.styleFrom(backgroundColor: _accent2, foregroundColor: Colors.black, minimumSize: const Size.fromHeight(52)),
              child: _busy ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.black)) : const Text('Import essentials', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
            ),
          ],
        ),
      ),
    );
  }
}

class _EssentialsScanPage extends StatefulWidget {
  const _EssentialsScanPage();

  @override
  State<_EssentialsScanPage> createState() => _EssentialsScanPageState();
}

class _EssentialsScanPageState extends State<_EssentialsScanPage> {
  final _controller = MobileScannerController(
    detectionSpeed: DetectionSpeed.noDuplicates,
    facing: CameraFacing.back,
    formats: const [BarcodeFormat.qrCode],
  );
  var _handled = false;
  var _torch = false;

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final b in capture.barcodes) {
      for (final raw in [b.rawValue, b.displayValue]) {
        if (raw == null || raw.trim().isEmpty) continue;
        final parsed = ngmyEssentialsParseScannedRaw(raw);
        if (parsed == null) continue;
        _handled = true;
        HapticFeedback.mediumImpact();
        Navigator.pop(context, parsed);
        return;
      }
    }
  }

  Future<void> _pasteCode() async {
    final clip = await Clipboard.getData(Clipboard.kTextPlain);
    final text = clip?.text ?? '';
    if (text.trim().startsWith(kNgmyEssentialsPayloadPrefix)) {
      if (mounted) Navigator.pop(context, text.trim());
      return;
    }
    final parsed = ngmyEssentialsParseScannedRaw(text);
    if (parsed == null) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Clipboard does not contain a valid Essentials QR, code, or backup')));
      }
      return;
    }
    if (mounted) Navigator.pop(context, parsed);
  }

  Future<void> _openEnterCode() async {
    final result = await Navigator.of(context).push<String>(MaterialPageRoute(builder: (_) => const _EssentialsEnterCodePage()));
    if (result != null && mounted) Navigator.pop(context, result);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: const Text('Scan Essentials QR'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        actions: [
          IconButton(icon: const Icon(Icons.content_paste_rounded), tooltip: 'Paste code', onPressed: _pasteCode),
          IconButton(icon: const Icon(Icons.pin_rounded), tooltip: 'Enter code', onPressed: _openEnterCode),
          IconButton(
            icon: Icon(_torch ? Icons.flash_on_rounded : Icons.flash_off_rounded),
            onPressed: () async {
              await _controller.toggleTorch();
              setState(() => _torch = !_torch);
            },
          ),
        ],
      ),
      body: Stack(
        children: [
          MobileScanner(controller: _controller, onDetect: _onDetect, fit: BoxFit.cover),
          Center(child: Container(width: 280, height: 280, decoration: BoxDecoration(borderRadius: BorderRadius.circular(22), border: Border.all(color: _accent, width: 4)))),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 36,
            child: Text(
              'Fill the frame · bright screen · big-dot NGMY QR',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600),
            ),
          ),
        ],
      ),
    );
  }
}
