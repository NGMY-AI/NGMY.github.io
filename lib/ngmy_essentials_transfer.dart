import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

const kNgmyEssentialsPayloadPrefix = 'NGMY-ESS:';
const _kEssentialsAccent = Color(0xFF38BDF8);

enum EssentialsTransferCategory { contacts, locations, support, medicines, all }

Future<Map<String, dynamic>> ngmyEssentialsExportBundle(String userEmail, Set<EssentialsTransferCategory> cats) async {
  final all = cats.contains(EssentialsTransferCategory.all);
  final bundle = <String, dynamic>{
    'v': 1,
    'exportedAt': DateTime.now().toUtc().toIso8601String(),
  };
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
}

bool ngmyEssentialsIsPayload(String raw) => raw.trim().startsWith(kNgmyEssentialsPayloadPrefix);

Future<void> showNgmyEssentialsTransferHub(BuildContext context, {required String userEmail}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute(
      builder: (_) => NgmyEssentialsTransferPage(userEmail: userEmail),
    ),
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
  var _busy = false;

  Set<EssentialsTransferCategory> get _selected {
    if (_all) return {EssentialsTransferCategory.all};
    final s = <EssentialsTransferCategory>{};
    if (_contacts) s.add(EssentialsTransferCategory.contacts);
    if (_locations) s.add(EssentialsTransferCategory.locations);
    if (_support) s.add(EssentialsTransferCategory.support);
    if (_medicines) s.add(EssentialsTransferCategory.medicines);
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
      if (!mounted) return;
      await Navigator.of(context).push<void>(
        MaterialPageRoute(
          builder: (_) => _EssentialsQrDisplayPage(payload: payload, categoryCount: _selected.length),
        ),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _scanQr() async {
    final payload = await Navigator.of(context).push<String>(
      MaterialPageRoute(builder: (_) => const _EssentialsScanPage()),
    );
    if (payload == null || !mounted) return;
    await _importPayload(payload);
  }

  Future<void> _pasteCode() async {
    final code = await showDialog<String>(
      context: context,
      builder: (ctx) {
        final c = TextEditingController();
        return AlertDialog(
          backgroundColor: const Color(0xFF0B1220),
          title: const Text('Enter transfer code', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
          content: TextField(
            controller: c,
            maxLines: 6,
            autofocus: true,
            style: const TextStyle(color: Colors.white, fontSize: 11),
            decoration: InputDecoration(
              hintText: 'Paste NGMY-ESS code here…',
              hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
              filled: true,
              fillColor: Colors.white.withValues(alpha: 0.06),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
            ),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, c.text.trim()), child: const Text('Import')),
          ],
        );
      },
    );
    if (code == null || code.isEmpty || !mounted) return;
    await _importPayload(code);
  }

  Future<void> _importPayload(String code) async {
    final bundle = ngmyEssentialsDecodePayload(code);
    if (bundle == null) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Invalid transfer code')));
      return;
    }
    setState(() => _busy = true);
    try {
      await ngmyEssentialsImportBundle(widget.userEmail, bundle);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Information imported successfully')));
        Navigator.pop(context, true);
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      appBar: AppBar(
        backgroundColor: const Color(0xFF030712),
        foregroundColor: Colors.white,
        elevation: 0,
        title: const Text('Transfer Essentials', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(20, 8, 20, 28),
        children: [
          Text(
            'Move contacts, site map, hotlines & medicines to another phone — same QR style as Doc Share and Advisors.',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13, height: 1.4),
          ),
          const SizedBox(height: 20),
          _actionTile(
            icon: Icons.qr_code_2_rounded,
            title: 'Show backup QR',
            subtitle: 'Other phone scans this branded NGMY QR code',
            accent: _kEssentialsAccent,
            onTap: _busy ? null : _showQr,
          ),
          const SizedBox(height: 10),
          _actionTile(
            icon: Icons.qr_code_scanner_rounded,
            title: 'Scan QR to restore',
            subtitle: 'Point camera at sender\'s Essentials QR',
            accent: const Color(0xFF34D399),
            onTap: _busy ? null : _scanQr,
          ),
          const SizedBox(height: 10),
          _actionTile(
            icon: Icons.pin_rounded,
            title: 'Paste transfer code',
            subtitle: 'Type or paste the NGMY-ESS code manually',
            accent: const Color(0xFFA78BFA),
            onTap: _busy ? null : _pasteCode,
          ),
          const SizedBox(height: 24),
          Text('WHAT TO SEND', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 8),
          CheckboxListTile(
            contentPadding: EdgeInsets.zero,
            title: const Text('All information', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
            value: _all,
            activeColor: _kEssentialsAccent,
            onChanged: (v) => setState(() => _all = v ?? true),
          ),
          if (!_all) ...[
            CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Contacts', style: TextStyle(color: Colors.white70)), value: _contacts, activeColor: _kEssentialsAccent, onChanged: (v) => setState(() => _contacts = v ?? false)),
            CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Site Map', style: TextStyle(color: Colors.white70)), value: _locations, activeColor: _kEssentialsAccent, onChanged: (v) => setState(() => _locations = v ?? false)),
            CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Hotlines', style: TextStyle(color: Colors.white70)), value: _support, activeColor: _kEssentialsAccent, onChanged: (v) => setState(() => _support = v ?? false)),
            CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Medicines', style: TextStyle(color: Colors.white70)), value: _medicines, activeColor: _kEssentialsAccent, onChanged: (v) => setState(() => _medicines = v ?? false)),
          ],
          if (_busy) ...[
            const SizedBox(height: 20),
            const Center(child: CircularProgressIndicator(color: _kEssentialsAccent)),
          ],
        ],
      ),
    );
  }

  Widget _actionTile({
    required IconData icon,
    required String title,
    required String subtitle,
    required Color accent,
    required VoidCallback? onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: accent.withValues(alpha: 0.1),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: accent.withValues(alpha: 0.35)),
          ),
          child: Row(
            children: [
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: accent.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12)),
                child: Icon(icon, color: accent, size: 24),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                    const SizedBox(height: 4),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.35)),
            ],
          ),
        ),
      ),
    );
  }
}

class _EssentialsQrDisplayPage extends StatelessWidget {
  const _EssentialsQrDisplayPage({required this.payload, required this.categoryCount});
  final String payload;
  final int categoryCount;

  @override
  Widget build(BuildContext context) {
    final short = payload.length > 48 ? '${payload.substring(0, 44)}…' : payload;
    return Scaffold(
      backgroundColor: const Color(0xFF0B1220),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0B1220),
        foregroundColor: Colors.white,
        elevation: 0,
        title: const Text('Share Essentials QR', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
        leading: IconButton(icon: const Icon(Icons.close_rounded), onPressed: () => Navigator.pop(context)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Expanded(
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: const Color(0xFF111827),
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: _kEssentialsAccent.withValues(alpha: 0.35)),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    NgmyBrandedQrWidget(data: payload, large: true),
                    const SizedBox(height: 18),
                    Text(
                      categoryCount >= 4 ? 'All Essentials categories' : '$categoryCount categor${categoryCount == 1 ? 'y' : 'ies'} selected',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                    ),
                    const SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                      decoration: BoxDecoration(
                        color: _kEssentialsAccent.withValues(alpha: 0.12),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Text('Scan with NGMY camera', style: TextStyle(color: _kEssentialsAccent, fontWeight: FontWeight.w800, fontSize: 12)),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      'Or paste code on receiving phone',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12),
                    ),
                    const SizedBox(height: 6),
                    SelectableText(short, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 10)),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () {
                      Clipboard.setData(ClipboardData(text: payload));
                      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Transfer code copied')));
                    },
                    icon: const Icon(Icons.copy_rounded, size: 16),
                    label: const Text('Copy code'),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () => Share.share(payload, subject: 'NGMY Essentials backup'),
                    icon: const Icon(Icons.share_rounded, size: 16),
                    label: const Text('Share'),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => Navigator.pop(context),
                style: FilledButton.styleFrom(backgroundColor: _kEssentialsAccent, foregroundColor: Colors.black, minimumSize: const Size.fromHeight(48)),
                child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
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
  final _controller = MobileScannerController(detectionSpeed: DetectionSpeed.normal, facing: CameraFacing.back);
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
      final raw = b.rawValue?.trim() ?? '';
      if (!ngmyEssentialsIsPayload(raw)) continue;
      _handled = true;
      Navigator.pop(context, raw);
      return;
    }
  }

  Future<void> _pasteCode() async {
    final clip = await Clipboard.getData(Clipboard.kTextPlain);
    final text = clip?.text?.trim() ?? '';
    if (text.isEmpty) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Copy the transfer code from sender first.')));
      return;
    }
    if (mounted) Navigator.pop(context, text);
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
          MobileScanner(controller: _controller, onDetect: _onDetect),
          Center(
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: _kEssentialsAccent, width: 4),
              ),
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 32,
            child: Text(
              'Align the NGMY Essentials QR inside the frame',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600),
            ),
          ),
        ],
      ),
    );
  }
}
