import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

const _kPayloadPrefix = 'NGMY-ESS:';

enum EssentialsTransferCategory { contacts, locations, support, medicines, all }

Future<Map<String, dynamic>> _exportBundle(String userEmail, Set<EssentialsTransferCategory> cats) async {
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

String _encodePayload(Map<String, dynamic> bundle) {
  final raw = jsonEncode(bundle);
  final compressed = GZipEncoder().encode(utf8.encode(raw))!;
  return '$_kPayloadPrefix${base64Url.encode(compressed)}';
}

Map<String, dynamic>? _decodePayload(String code) {
  try {
    var s = code.trim();
    if (s.startsWith(_kPayloadPrefix)) s = s.substring(_kPayloadPrefix.length);
    final bytes = GZipDecoder().decodeBytes(base64Url.decode(s));
    final decoded = jsonDecode(utf8.decode(bytes));
    if (decoded is Map) return Map<String, dynamic>.from(decoded);
  } catch (_) {}
  return null;
}

Future<void> showNgmyEssentialsTransferHub(BuildContext context, {required String userEmail}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: const Color(0xFF0B1220),
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
    builder: (ctx) => _EssentialsTransferSheet(userEmail: userEmail),
  );
}

class _EssentialsTransferSheet extends StatefulWidget {
  const _EssentialsTransferSheet({required this.userEmail});
  final String userEmail;

  @override
  State<_EssentialsTransferSheet> createState() => _EssentialsTransferSheetState();
}

class _EssentialsTransferSheetState extends State<_EssentialsTransferSheet> {
  var _mode = 'send';
  var _all = true;
  var _contacts = true;
  var _locations = true;
  var _support = true;
  var _medicines = true;
  String? _shareCode;
  var _busy = false;
  final _pasteCtrl = TextEditingController();

  @override
  void dispose() {
    _pasteCtrl.dispose();
    super.dispose();
  }

  Set<EssentialsTransferCategory> get _selected {
    if (_all) return {EssentialsTransferCategory.all};
    final s = <EssentialsTransferCategory>{};
    if (_contacts) s.add(EssentialsTransferCategory.contacts);
    if (_locations) s.add(EssentialsTransferCategory.locations);
    if (_support) s.add(EssentialsTransferCategory.support);
    if (_medicines) s.add(EssentialsTransferCategory.medicines);
    return s;
  }

  Future<void> _generateCode() async {
    if (_selected.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Select at least one category')));
      return;
    }
    setState(() => _busy = true);
    try {
      final bundle = await _exportBundle(widget.userEmail, _selected);
      final code = _encodePayload(bundle);
      if (!mounted) return;
      setState(() => _shareCode = code);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _importCode() async {
    final code = _pasteCtrl.text.trim().isEmpty ? (_shareCode ?? '') : _pasteCtrl.text.trim();
    if (code.isEmpty) return;
    final bundle = _decodePayload(code);
    if (bundle == null) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Invalid transfer code')));
      return;
    }
    setState(() => _busy = true);
    try {
      if (bundle['contacts'] is List) {
        final items = (bundle['contacts'] as List).whereType<Map>().map((m) => NgmyBusinessContact.fromJson(Map<String, dynamic>.from(m))).toList();
        await ngmyImportBusinessContacts(userEmail: widget.userEmail, items: items);
      }
      if (bundle['locations'] is List) {
        final items = (bundle['locations'] as List).whereType<Map>().map((m) => NgmySavedLocation.fromJson(Map<String, dynamic>.from(m))).toList();
        await ngmyImportSavedLocations(userEmail: widget.userEmail, items: items);
      }
      if (bundle['support'] is List) {
        final items = (bundle['support'] as List).whereType<Map>().map((m) => NgmySupportLine.fromJson(Map<String, dynamic>.from(m))).toList();
        await ngmyImportQuickSupport(userEmail: widget.userEmail, items: items);
      }
      if (bundle['medicines'] is List) {
        final items = (bundle['medicines'] as List).whereType<Map>().map((m) => NgmyMedicineEntry.fromJson(Map<String, dynamic>.from(m))).toList();
        await ngmyImportMedicines(userEmail: widget.userEmail, items: items);
      }
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Information imported successfully')));
        Navigator.pop(context);
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Padding(
      padding: EdgeInsets.fromLTRB(20, 16, 20, 20 + bottom),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(
              children: [
                const Icon(Icons.sync_alt_rounded, color: Color(0xFF38BDF8), size: 22),
                const SizedBox(width: 10),
                const Expanded(child: Text('Transfer Essentials', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white54)),
              ],
            ),
            const SizedBox(height: 6),
            Text('Move contacts, site map, hotlines & medicines to another device — local backup only.', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
            const SizedBox(height: 16),
            SegmentedButton<String>(
              segments: const [
                ButtonSegment(value: 'send', label: Text('Send'), icon: Icon(Icons.upload_rounded, size: 16)),
                ButtonSegment(value: 'receive', label: Text('Receive'), icon: Icon(Icons.download_rounded, size: 16)),
              ],
              selected: {_mode},
              onSelectionChanged: (s) => setState(() => _mode = s.first),
            ),
            const SizedBox(height: 16),
            if (_mode == 'send') ...[
              CheckboxListTile(
                contentPadding: EdgeInsets.zero,
                title: const Text('All information', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                value: _all,
                activeColor: const Color(0xFF38BDF8),
                onChanged: (v) => setState(() => _all = v ?? true),
              ),
              if (!_all) ...[
                CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Contacts', style: TextStyle(color: Colors.white70)), value: _contacts, activeColor: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _contacts = v ?? false)),
                CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Site Map', style: TextStyle(color: Colors.white70)), value: _locations, activeColor: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _locations = v ?? false)),
                CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Hotlines', style: TextStyle(color: Colors.white70)), value: _support, activeColor: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _support = v ?? false)),
                CheckboxListTile(contentPadding: EdgeInsets.zero, title: const Text('Medicines', style: TextStyle(color: Colors.white70)), value: _medicines, activeColor: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _medicines = v ?? false)),
              ],
              const SizedBox(height: 12),
              FilledButton.icon(
                onPressed: _busy ? null : _generateCode,
                icon: _busy ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.black)) : const Icon(Icons.qr_code_2_rounded),
                label: const Text('Create transfer code'),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF38BDF8), foregroundColor: Colors.black, minimumSize: const Size.fromHeight(48)),
              ),
              if (_shareCode != null) ...[
                const SizedBox(height: 16),
                if (_shareCode!.length <= 2800)
                  Center(
                    child: Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
                      child: QrImageView(data: _shareCode!, size: 180, backgroundColor: Colors.white),
                    ),
                  ),
                const SizedBox(height: 12),
                SelectableText(_shareCode!, style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 10)),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: () {
                          Clipboard.setData(ClipboardData(text: _shareCode!));
                          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Code copied')));
                        },
                        icon: const Icon(Icons.copy_rounded, size: 16),
                        label: const Text('Copy code'),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: () => Share.share(_shareCode!, subject: 'NGMY Essentials backup'),
                        icon: const Icon(Icons.share_rounded, size: 16),
                        label: const Text('Share'),
                      ),
                    ),
                  ],
                ),
              ],
            ] else ...[
              TextField(
                controller: _pasteCtrl,
                maxLines: 4,
                style: const TextStyle(color: Colors.white, fontSize: 11),
                decoration: InputDecoration(
                  hintText: 'Paste transfer code from other device…',
                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                  filled: true,
                  fillColor: Colors.white.withValues(alpha: 0.06),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                ),
              ),
              const SizedBox(height: 12),
              FilledButton.icon(
                onPressed: _busy ? null : _importCode,
                icon: const Icon(Icons.download_done_rounded),
                label: const Text('Import information'),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF34D399), foregroundColor: Colors.black, minimumSize: const Size.fromHeight(48)),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
