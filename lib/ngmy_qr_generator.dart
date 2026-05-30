import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_qr_download.dart';
import 'ngmy_qr_storage.dart';

const String _kNgmyLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

const List<String> _kQrTypeLabels = [
  'Website / Link',
  'Wi‑Fi',
  'Contact',
  'Plain Text',
  'Email',
  'Phone',
  'SMS',
];

/// QR Code Generator — local device storage only (no cloud/database).
void showNgmyQrGeneratorDialog(BuildContext context) {
  showDialog<void>(
    context: context,
    barrierColor: Colors.black.withOpacity(0.82),
    builder: (ctx) => const _NgmyQrGeneratorDialog(),
  );
}

class _NgmyQrGeneratorDialog extends StatefulWidget {
  const _NgmyQrGeneratorDialog();

  @override
  State<_NgmyQrGeneratorDialog> createState() => _NgmyQrGeneratorDialogState();
}

class _NgmyQrGeneratorDialogState extends State<_NgmyQrGeneratorDialog> {
  static const _bg = Color(0xFF0B0E18);
  static const _panel = Color(0xFF12182A);
  static const _accent = Color(0xFF06B6D4);
  static const _accentDeep = Color(0xFF0891B2);
  static const _savedTabIndex = 7;

  int _type = 0;
  bool _busy = false;
  List<NgmySavedQrRecord> _saved = [];

  final _labelC = TextEditingController();
  final _linkC = TextEditingController();
  final _textC = TextEditingController();
  final _wifiSsidC = TextEditingController();
  final _wifiPassC = TextEditingController();
  String _wifiSecurity = 'WPA';
  bool _wifiHidden = false;
  final _contactNameC = TextEditingController();
  final _contactPhoneC = TextEditingController();
  final _contactEmailC = TextEditingController();
  final _contactOrgC = TextEditingController();
  final _emailToC = TextEditingController();
  final _emailSubjectC = TextEditingController();
  final _emailBodyC = TextEditingController();
  final _phoneC = TextEditingController();
  final _smsBodyC = TextEditingController();

  final GlobalKey _qrCaptureKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    for (final c in [
      _labelC, _linkC, _textC, _wifiSsidC, _wifiPassC, _contactNameC, _contactPhoneC,
      _contactEmailC, _contactOrgC, _emailToC, _emailSubjectC, _emailBodyC, _phoneC, _smsBodyC,
    ]) {
      c.addListener(_onFieldsChanged);
    }
    _reloadSaved();
  }

  Future<void> _reloadSaved() async {
    final list = await loadNgmySavedQrs();
    if (!mounted) return;
    setState(() => _saved = list);
  }

  void _onFieldsChanged() => setState(() {});

  @override
  void dispose() {
    for (final c in [
      _labelC, _linkC, _textC, _wifiSsidC, _wifiPassC, _contactNameC, _contactPhoneC,
      _contactEmailC, _contactOrgC, _emailToC, _emailSubjectC, _emailBodyC, _phoneC, _smsBodyC,
    ]) {
      c.removeListener(_onFieldsChanged);
      c.dispose();
    }
    super.dispose();
  }

  String _escapeWifi(String value) {
    return value
        .replaceAll('\\', r'\\')
        .replaceAll(';', r'\;')
        .replaceAll(':', r'\:')
        .replaceAll(',', r'\,')
        .replaceAll('"', r'\"');
  }

  String _normalizeUrl(String raw) {
    var url = raw.trim();
    if (url.isEmpty) return '';
    if (!RegExp(r'^[a-zA-Z][a-zA-Z\d+\-.]*:').hasMatch(url)) {
      url = 'https://$url';
    }
    return url;
  }

  String _buildPayload() {
    if (_type == _savedTabIndex) return '';
    switch (_type) {
      case 0:
        return _normalizeUrl(_linkC.text);
      case 1:
        final ssid = _wifiSsidC.text.trim();
        if (ssid.isEmpty) return '';
        final sec = _wifiSecurity == 'None' ? 'nopass' : _wifiSecurity;
        final hidden = _wifiHidden ? 'H:true;' : 'H:false;';
        final pass = _wifiSecurity == 'None' ? '' : _escapeWifi(_wifiPassC.text);
        return 'WIFI:T:$sec;S:${_escapeWifi(ssid)};P:$pass;$hidden;';
      case 2:
        final name = _contactNameC.text.trim();
        if (name.isEmpty) return '';
        final phone = _contactPhoneC.text.trim();
        final email = _contactEmailC.text.trim();
        final org = _contactOrgC.text.trim();
        return [
          'BEGIN:VCARD',
          'VERSION:3.0',
          'FN:$name',
          if (phone.isNotEmpty) 'TEL:$phone',
          if (email.isNotEmpty) 'EMAIL:$email',
          if (org.isNotEmpty) 'ORG:$org',
          'END:VCARD',
        ].join('\n');
      case 3:
        return _textC.text.trim();
      case 4:
        final to = _emailToC.text.trim();
        if (to.isEmpty) return '';
        final subject = Uri.encodeComponent(_emailSubjectC.text.trim());
        final body = Uri.encodeComponent(_emailBodyC.text.trim());
        var mail = 'mailto:$to';
        final params = <String>[];
        if (subject.isNotEmpty) params.add('subject=$subject');
        if (body.isNotEmpty) params.add('body=$body');
        if (params.isNotEmpty) mail = '$mail?${params.join('&')}';
        return mail;
      case 5:
        final phone = _phoneC.text.trim().replaceAll(RegExp(r'\s+'), '');
        if (phone.isEmpty) return '';
        return phone.startsWith('tel:') ? phone : 'tel:$phone';
      case 6:
        final phone = _phoneC.text.trim().replaceAll(RegExp(r'\s+'), '');
        if (phone.isEmpty) return '';
        final digits = phone.replaceFirst(RegExp(r'^smsto:'), '');
        final msg = Uri.encodeComponent(_smsBodyC.text.trim());
        return msg.isEmpty ? 'smsto:$digits' : 'smsto:$digits?body=$msg';
      default:
        return '';
    }
  }

  String _typeLabel([int? index]) {
    final i = index ?? _type;
    if (i == _savedTabIndex) return 'Saved on this device';
    return _kQrTypeLabels[i.clamp(0, _kQrTypeLabels.length - 1)];
  }

  String _defaultFilename(String label) {
    final base = label.trim().isEmpty ? 'ngmy_qr' : label.trim();
    return 'ngmy_${base}_${DateTime.now().millisecondsSinceEpoch}';
  }

  Future<Uint8List?> _captureVisibleQr() async {
    await Future.delayed(const Duration(milliseconds: 80));
    await WidgetsBinding.instance.endOfFrame;
    final boundary = _qrCaptureKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
    if (boundary == null) return null;
    final image = await boundary.toImage(pixelRatio: 3.0);
    final data = await image.toByteData(format: ui.ImageByteFormat.png);
    return data?.buffer.asUint8List();
  }

  Future<Uint8List?> _captureQrOffscreen(String payload) async {
    if (!mounted) return null;
    final key = GlobalKey();
    late OverlayEntry entry;
    entry = OverlayEntry(
      builder: (ctx) => Positioned(
        left: -4000,
        top: -4000,
        child: Material(
          color: Colors.transparent,
          child: RepaintBoundary(
            key: key,
            child: NgmyBrandedQrWidget(data: payload),
          ),
        ),
      ),
    );
    Overlay.of(context).insert(entry);
    try {
      await Future.delayed(const Duration(milliseconds: 200));
      await WidgetsBinding.instance.endOfFrame;
      final boundary = key.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) return null;
      final image = await boundary.toImage(pixelRatio: 3.0);
      final data = await image.toByteData(format: ui.ImageByteFormat.png);
      return data?.buffer.asUint8List();
    } finally {
      entry.remove();
    }
  }

  Future<void> _downloadQr({required String payload, required String label}) async {
    if (_busy || payload.isEmpty) return;
    setState(() => _busy = true);
    try {
      var bytes = await _captureVisibleQr();
      bytes ??= await _captureQrOffscreen(payload);
      if (bytes == null) throw Exception('Could not render QR image.');
      final msg = await downloadNgmyQrImage(bytes, _defaultFilename(label));
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Download failed: $e')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _downloadCurrent() async {
    final payload = _buildPayload();
    if (payload.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Fill in the required fields first.')),
      );
      return;
    }
    final label = _labelC.text.trim().isEmpty ? _typeLabel() : _labelC.text.trim();
    await _downloadQr(payload: payload, label: label);
  }

  Future<void> _saveCurrent() async {
    final payload = _buildPayload();
    final label = _labelC.text.trim();
    if (payload.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Fill in the required fields first.')),
      );
      return;
    }
    if (label.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Add a label so you know what this QR is for.')),
      );
      return;
    }
    final record = NgmySavedQrRecord(
      id: '${DateTime.now().millisecondsSinceEpoch}',
      label: label,
      typeIndex: _type,
      typeLabel: _typeLabel(),
      payload: payload,
      savedAt: DateTime.now().toUtc().toIso8601String(),
    );
    await addNgmySavedQr(record);
    await _reloadSaved();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('“$label” saved on this device only.')),
    );
  }

  Future<void> _deleteSaved(NgmySavedQrRecord record) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Delete saved QR?'),
        content: Text('Remove “${record.label}” from this device?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    await deleteNgmySavedQr(record.id);
    await _reloadSaved();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Deleted “${record.label}”.')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final w = MediaQuery.of(context).size.width;
    final dialogW = w > 520 ? 440.0 : w - 28;
    final payload = _buildPayload();
    final hasQr = payload.isNotEmpty;
    final onSavedTab = _type == _savedTabIndex;

    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 24),
      backgroundColor: Colors.transparent,
      child: Container(
        width: dialogW,
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.92),
        decoration: BoxDecoration(
          color: _bg,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: Colors.white.withOpacity(0.08)),
          boxShadow: [
            BoxShadow(color: _accent.withOpacity(0.12), blurRadius: 32, spreadRadius: 2),
            BoxShadow(color: Colors.black.withOpacity(0.55), blurRadius: 24, offset: const Offset(0, 12)),
          ],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _header(),
            Flexible(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 18),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    _typeRow(),
                    const SizedBox(height: 14),
                    _typeBanner(),
                    const SizedBox(height: 14),
                    if (onSavedTab)
                      _savedList()
                    else ...[
                      _formFields(),
                      if (hasQr) ...[
                        const SizedBox(height: 14),
                        _field(
                          controller: _labelC,
                          label: 'Label this QR code *',
                          hint: 'e.g. Home Wi‑Fi, My website, Shop link',
                          icon: Icons.label_outline_rounded,
                        ),
                      ],
                      const SizedBox(height: 18),
                      _qrPreview(payload, hasQr),
                      if (hasQr) ...[
                        const SizedBox(height: 12),
                        Row(
                          children: [
                            Expanded(
                              child: OutlinedButton.icon(
                                onPressed: _busy ? null : _downloadCurrent,
                                icon: _busy
                                    ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2))
                                    : const Icon(Icons.download_rounded, size: 18),
                                label: const Text('Download'),
                                style: OutlinedButton.styleFrom(
                                  foregroundColor: _accent,
                                  side: BorderSide(color: _accent.withOpacity(0.55)),
                                  padding: const EdgeInsets.symmetric(vertical: 12),
                                ),
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: ElevatedButton.icon(
                                onPressed: _busy ? null : _saveCurrent,
                                icon: const Icon(Icons.bookmark_rounded, size: 18),
                                label: const Text('Save'),
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: _accent,
                                  foregroundColor: Colors.white,
                                  padding: const EdgeInsets.symmetric(vertical: 12),
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Saved locally on this device only · never uploaded',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white.withOpacity(0.4), fontSize: 11),
                        ),
                      ],
                    ],
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _header() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
      child: Row(
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              gradient: const LinearGradient(colors: [_accent, _accentDeep], begin: Alignment.topLeft, end: Alignment.bottomRight),
              borderRadius: BorderRadius.circular(10),
              boxShadow: [BoxShadow(color: _accent.withOpacity(0.45), blurRadius: 10)],
            ),
            child: const Icon(Icons.qr_code_2_rounded, color: Colors.white, size: 22),
          ),
          const SizedBox(width: 12),
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('QR Code Generator', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                Text('Local device · Download · Save', style: TextStyle(color: Color(0xFF94A3B8), fontSize: 12, fontWeight: FontWeight.w600)),
              ],
            ),
          ),
          IconButton(
            onPressed: () => Navigator.of(context).pop(),
            icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 22),
          ),
        ],
      ),
    );
  }

  Widget _typeRow() {
    const types = [
      ('Link', Icons.link_rounded),
      ('Wi‑Fi', Icons.wifi_rounded),
      ('Contact', Icons.contact_page_outlined),
      ('Text', Icons.notes_rounded),
      ('Email', Icons.email_outlined),
      ('Phone', Icons.phone_rounded),
      ('SMS', Icons.sms_outlined),
      ('Saved', Icons.folder_special_rounded),
    ];
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: List.generate(types.length, (i) {
          final (label, icon) = types[i];
          final selected = _type == i;
          return Padding(
            padding: EdgeInsets.only(right: i == types.length - 1 ? 0 : 8),
            child: GestureDetector(
              onTap: () => setState(() => _type = i),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
                decoration: BoxDecoration(
                  gradient: selected
                      ? const LinearGradient(colors: [_accent, _accentDeep], begin: Alignment.topLeft, end: Alignment.bottomRight)
                      : null,
                  color: selected ? null : _panel.withOpacity(0.7),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: selected ? _accent.withOpacity(0.6) : Colors.white.withOpacity(0.08)),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(icon, size: 16, color: selected ? Colors.white : Colors.white38),
                    const SizedBox(width: 6),
                    Text(label, style: TextStyle(color: selected ? Colors.white : Colors.white38, fontWeight: FontWeight.w800, fontSize: 12)),
                    if (i == _savedTabIndex && _saved.isNotEmpty) ...[
                      const SizedBox(width: 5),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(color: Colors.white.withOpacity(0.2), borderRadius: BorderRadius.circular(8)),
                        child: Text('${_saved.length}', style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
                      ),
                    ],
                  ],
                ),
              ),
            ),
          );
        }),
      ),
    );
  }

  Widget _typeBanner() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 12),
      decoration: BoxDecoration(
        color: _accent.withOpacity(0.06),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: _accent.withOpacity(0.45)),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            _type == _savedTabIndex ? Icons.phone_android_rounded : Icons.auto_awesome_rounded,
            color: _accent,
            size: 16,
          ),
          const SizedBox(width: 8),
          Flexible(
            child: Text(
              _type == _savedTabIndex
                  ? '${_saved.length} QR code${_saved.length == 1 ? '' : 's'} on this device'
                  : 'Generate ${_typeLabel()} QR instantly',
              textAlign: TextAlign.center,
              style: const TextStyle(color: _accent, fontWeight: FontWeight.w800, fontSize: 13),
            ),
          ),
        ],
      ),
    );
  }

  Widget _savedList() {
    if (_saved.isEmpty) {
      return Container(
        padding: const EdgeInsets.all(28),
        decoration: BoxDecoration(color: _panel, borderRadius: BorderRadius.circular(18), border: Border.all(color: _accent.withOpacity(0.2))),
        child: Column(
          children: [
            Icon(Icons.qr_code_2_rounded, size: 56, color: Colors.white.withOpacity(0.15)),
            const SizedBox(height: 12),
            const Text('No saved QR codes yet', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
            const SizedBox(height: 6),
            Text(
              'Create a QR, add a label, and tap Save.\nEverything stays on this phone only.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12, height: 1.4),
            ),
          ],
        ),
      );
    }

    return Column(
      children: _saved.map((record) => _savedTile(record)).toList(),
    );
  }

  Widget _savedTile(NgmySavedQrRecord record) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _accent.withOpacity(0.22)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(record.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                    const SizedBox(height: 4),
                    Text(record.typeLabel, style: TextStyle(color: _accent.withOpacity(0.9), fontSize: 12, fontWeight: FontWeight.w700)),
                    const SizedBox(height: 2),
                    Text(
                      _formatSavedDate(record.savedAt),
                      style: TextStyle(color: Colors.white.withOpacity(0.4), fontSize: 11),
                    ),
                  ],
                ),
              ),
              IconButton(
                onPressed: _busy ? null : () => _deleteSaved(record),
                icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444)),
                tooltip: 'Delete',
              ),
            ],
          ),
          const SizedBox(height: 10),
          Center(
            child: NgmyBrandedQrWidget(data: record.payload, compact: true),
          ),
          const SizedBox(height: 10),
          SizedBox(
            width: double.infinity,
            child: OutlinedButton.icon(
              onPressed: _busy ? null : () => _downloadQr(payload: record.payload, label: record.label),
              icon: const Icon(Icons.download_rounded, size: 18),
              label: const Text('Download to gallery'),
              style: OutlinedButton.styleFrom(
                foregroundColor: _accent,
                side: BorderSide(color: _accent.withOpacity(0.55)),
              ),
            ),
          ),
        ],
      ),
    );
  }

  String _formatSavedDate(String iso) {
    final dt = DateTime.tryParse(iso);
    if (dt == null) return '';
    final local = dt.toLocal();
    return 'Saved ${local.month}/${local.day}/${local.year}';
  }

  Widget _formFields() {
    switch (_type) {
      case 0:
        return _field(controller: _linkC, label: 'Paste any website or link', hint: 'https://example.com', icon: Icons.link_rounded, maxLines: 2);
      case 1:
        return Column(
          children: [
            _field(controller: _wifiSsidC, label: 'Network name (SSID)', hint: 'My Wi‑Fi', icon: Icons.wifi_rounded),
            const SizedBox(height: 10),
            _field(controller: _wifiPassC, label: 'Password', hint: 'Wi‑Fi password', icon: Icons.lock_outline_rounded, obscure: _wifiSecurity != 'None'),
            const SizedBox(height: 10),
            _dropdown(label: 'Security', value: _wifiSecurity, items: const ['WPA', 'WEP', 'None'], onChanged: (v) => setState(() => _wifiSecurity = v ?? 'WPA')),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              title: const Text('Hidden network', style: TextStyle(color: Colors.white70, fontSize: 13)),
              value: _wifiHidden,
              activeTrackColor: _accent.withOpacity(0.5),
              thumbColor: WidgetStateProperty.resolveWith((s) => s.contains(WidgetState.selected) ? _accent : null),
              onChanged: (v) => setState(() => _wifiHidden = v),
            ),
          ],
        );
      case 2:
        return Column(
          children: [
            _field(controller: _contactNameC, label: 'Full name *', hint: 'Jane Doe', icon: Icons.person_outline_rounded),
            const SizedBox(height: 10),
            _field(controller: _contactPhoneC, label: 'Phone', hint: '+1 555 123 4567', icon: Icons.phone_outlined),
            const SizedBox(height: 10),
            _field(controller: _contactEmailC, label: 'Email', hint: 'jane@example.com', icon: Icons.email_outlined),
            const SizedBox(height: 10),
            _field(controller: _contactOrgC, label: 'Company (optional)', hint: 'NGMY', icon: Icons.business_outlined),
          ],
        );
      case 3:
        return _field(controller: _textC, label: 'Any text message', hint: 'Type anything to encode…', icon: Icons.notes_rounded, maxLines: 4);
      case 4:
        return Column(
          children: [
            _field(controller: _emailToC, label: 'Email address *', hint: 'someone@example.com', icon: Icons.email_outlined),
            const SizedBox(height: 10),
            _field(controller: _emailSubjectC, label: 'Subject (optional)', hint: 'Hello from NGMY', icon: Icons.subject_rounded),
            const SizedBox(height: 10),
            _field(controller: _emailBodyC, label: 'Message (optional)', hint: 'Your message…', icon: Icons.message_outlined, maxLines: 3),
          ],
        );
      case 5:
        return _field(controller: _phoneC, label: 'Phone number', hint: '+1 555 123 4567', icon: Icons.phone_rounded);
      case 6:
        return Column(
          children: [
            _field(controller: _phoneC, label: 'Phone number *', hint: '+1 555 123 4567', icon: Icons.phone_rounded),
            const SizedBox(height: 10),
            _field(controller: _smsBodyC, label: 'Message (optional)', hint: 'Hi! Scan this to text me.', icon: Icons.sms_outlined, maxLines: 2),
          ],
        );
      default:
        return const SizedBox.shrink();
    }
  }

  Widget _field({
    required TextEditingController controller,
    required String label,
    required String hint,
    required IconData icon,
    int maxLines = 1,
    bool obscure = false,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: Colors.white.withOpacity(0.75), fontSize: 12, fontWeight: FontWeight.w700)),
        const SizedBox(height: 6),
        TextField(
          controller: controller,
          maxLines: maxLines,
          obscureText: obscure,
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: TextStyle(color: Colors.white.withOpacity(0.32)),
            prefixIcon: Icon(icon, color: _accent, size: 20),
            filled: true,
            fillColor: const Color(0xFF0A0F1C),
            contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: _accent.withOpacity(0.35))),
            focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: const BorderSide(color: _accent, width: 1.5)),
          ),
        ),
      ],
    );
  }

  Widget _dropdown({
    required String label,
    required String value,
    required List<String> items,
    required ValueChanged<String?> onChanged,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: Colors.white.withOpacity(0.75), fontSize: 12, fontWeight: FontWeight.w700)),
        const SizedBox(height: 6),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 14),
          decoration: BoxDecoration(
            color: const Color(0xFF0A0F1C),
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: _accent.withOpacity(0.35)),
          ),
          child: DropdownButtonHideUnderline(
            child: DropdownButton<String>(
              value: value,
              isExpanded: true,
              dropdownColor: _panel,
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
              items: items.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
              onChanged: onChanged,
            ),
          ),
        ),
      ],
    );
  }

  Widget _qrPreview(String payload, bool hasQr) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _accent.withOpacity(0.2)),
      ),
      child: Column(
        children: [
          Text(
            hasQr ? 'Your NGMY QR Code' : 'Enter details above',
            style: TextStyle(color: hasQr ? Colors.white : Colors.white54, fontWeight: FontWeight.w800, fontSize: 14),
          ),
          const SizedBox(height: 14),
          if (!hasQr)
            SizedBox(
              height: 200,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.qr_code_scanner_rounded, size: 64, color: Colors.white.withOpacity(0.15)),
                  const SizedBox(height: 10),
                  Text('QR preview appears here instantly', style: TextStyle(color: Colors.white.withOpacity(0.4), fontSize: 12)),
                ],
              ),
            )
          else
            Center(
              child: RepaintBoundary(
                key: _qrCaptureKey,
                child: NgmyBrandedQrWidget(data: payload),
              ),
            ),
          if (hasQr) ...[
            const SizedBox(height: 12),
            Text(
              'Scan with any camera · NGMY logo in center',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 11, fontWeight: FontWeight.w500),
            ),
          ],
        ],
      ),
    );
  }
}

/// Branded NGMY QR with circular eyes, corner rings, and center logo.
class NgmyBrandedQrWidget extends StatelessWidget {
  final String data;
  final bool compact;

  const NgmyBrandedQrWidget({super.key, required this.data, this.compact = false});

  static const _accent = Color(0xFF06B6D4);
  static const _accentDeep = Color(0xFF0891B2);
  static const _ink = Color(0xFF0F172A);

  @override
  Widget build(BuildContext context) {
    final size = compact ? 160.0 : 248.0;
    final logoSize = compact ? 34.0 : 52.0;
    final ring = compact ? 16.0 : 22.0;

    return SizedBox(
      width: size + 28,
      height: size + 28,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(top: 0, left: 0, child: _CornerRing(size: ring)),
          Positioned(top: 0, right: 0, child: _CornerRing(size: ring)),
          Positioned(bottom: 0, left: 0, child: _CornerRing(size: ring)),
          Positioned(bottom: 0, right: 0, child: _CornerRing(size: ring)),
          Container(
            width: size,
            height: size,
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              boxShadow: [BoxShadow(color: _accent.withOpacity(0.18), blurRadius: 16, spreadRadius: 1)],
            ),
            child: Stack(
              alignment: Alignment.center,
              children: [
                QrImageView(
                  data: data,
                  size: size - 20,
                  padding: EdgeInsets.zero,
                  backgroundColor: Colors.white,
                  errorCorrectionLevel: QrErrorCorrectLevel.H,
                  eyeStyle: const QrEyeStyle(eyeShape: QrEyeShape.circle, color: _ink),
                  dataModuleStyle: const QrDataModuleStyle(dataModuleShape: QrDataModuleShape.circle, color: _ink),
                ),
                Container(
                  width: logoSize + 8,
                  height: logoSize + 8,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(compact ? 8 : 12),
                    border: Border.all(color: _accent.withOpacity(0.35), width: 2),
                    boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 6)],
                  ),
                  padding: const EdgeInsets.all(4),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(compact ? 6 : 8),
                    child: Image.network(
                      _kNgmyLogoUrl,
                      fit: BoxFit.cover,
                      errorBuilder: (_, __, ___) => Container(
                        color: _accent.withOpacity(0.12),
                        alignment: Alignment.center,
                        child: Text('NGMY', style: TextStyle(fontWeight: FontWeight.w900, fontSize: compact ? 8 : 11, color: _accentDeep)),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _CornerRing extends StatelessWidget {
  final double size;
  const _CornerRing({required this.size});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: const Color(0xFF06B6D4).withOpacity(0.55), width: 2.2),
      ),
    );
  }
}
