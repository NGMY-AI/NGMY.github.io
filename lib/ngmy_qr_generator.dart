import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_qr_storage.dart';
import 'ngmy_qr_template_ui.dart';
import 'ngmy_qr_templates.dart';

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

/// QR Code Generator — local codes plus cloud-saved Advisors / Family Tree sync QRs.
void showNgmyQrGeneratorDialog(BuildContext context, {String? userEmail}) {
  showDialog<void>(
    context: context,
    barrierColor: Colors.black.withOpacity(0.82),
    builder: (ctx) => _NgmyQrGeneratorDialog(userEmail: userEmail?.trim()),
  );
}

class _NgmyQrGeneratorDialog extends StatefulWidget {
  const _NgmyQrGeneratorDialog({this.userEmail});

  final String? userEmail;

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
  final _templateTitleC = TextEditingController();
  final _templateBodyC = TextEditingController();
  final _templateFooterC = TextEditingController();

  NgmyQrTemplateDef? _activeTemplate;

  final GlobalKey _qrCaptureKey = GlobalKey();
  final GlobalKey _templateCaptureKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    for (final c in [
      _labelC, _linkC, _textC, _wifiSsidC, _wifiPassC, _contactNameC, _contactPhoneC,
      _contactEmailC, _contactOrgC, _emailToC, _emailSubjectC, _emailBodyC, _phoneC, _smsBodyC,
      _templateTitleC, _templateBodyC, _templateFooterC,
    ]) {
      c.addListener(_onFieldsChanged);
    }
    _reloadSaved();
  }

  Future<void> _reloadSaved() async {
    final list = await loadNgmySavedQrs(userEmail: widget.userEmail);
    if (!mounted) return;
    setState(() => _saved = list);
  }

  void _onFieldsChanged() => setState(() {});

  @override
  void dispose() {
    for (final c in [
      _labelC, _linkC, _textC, _wifiSsidC, _wifiPassC, _contactNameC, _contactPhoneC,
      _contactEmailC, _contactOrgC, _emailToC, _emailSubjectC, _emailBodyC, _phoneC, _smsBodyC,
      _templateTitleC, _templateBodyC, _templateFooterC,
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
    final key = _activeTemplate != null ? _templateCaptureKey : _qrCaptureKey;
    final boundary = key.currentContext?.findRenderObject() as RenderRepaintBoundary?;
    if (boundary == null) return null;
    final image = await boundary.toImage(pixelRatio: 3.0);
    final data = await image.toByteData(format: ui.ImageByteFormat.png);
    return data?.buffer.asUint8List();
  }

  Map<String, String> _templateFieldVars() {
    return ngmyQrDefaultTemplateVars(_type, {
      'url': _linkC.text.trim(),
      'link': _linkC.text.trim(),
      'label': _labelC.text.trim(),
      'ssid': _wifiSsidC.text.trim(),
      'network': _wifiSsidC.text.trim(),
      'password': _wifiPassC.text.trim(),
      'name': _contactNameC.text.trim(),
      'phone': _contactPhoneC.text.trim().isNotEmpty ? _contactPhoneC.text.trim() : _phoneC.text.trim(),
      'email': _contactEmailC.text.trim().isNotEmpty ? _contactEmailC.text.trim() : _emailToC.text.trim(),
      'org': _contactOrgC.text.trim(),
      'message': _textC.text.trim().isNotEmpty ? _textC.text.trim() : _smsBodyC.text.trim(),
      'text': _textC.text.trim(),
      'to': _emailToC.text.trim(),
      'subject': _emailSubjectC.text.trim(),
    });
  }

  void _clearTemplate() {
    setState(() {
      _activeTemplate = null;
      _templateTitleC.clear();
      _templateBodyC.clear();
      _templateFooterC.clear();
    });
  }

  void _applyTemplate(NgmyQrTemplateDef template, String title, String body, String footer) {
    setState(() {
      _activeTemplate = template;
      _templateTitleC.text = title;
      _templateBodyC.text = body;
      _templateFooterC.text = footer;
    });
  }

  Future<void> _openTemplateGallery(String payload) async {
    if (payload.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Fill in the required fields first.')),
      );
      return;
    }
    await showNgmyQrTemplateGallery(
      context: context,
      categoryIndex: _type,
      categoryLabel: _typeLabel(),
      fieldVars: _templateFieldVars(),
      qrWidget: NgmyBrandedQrWidget(data: payload, compact: true, sizeOverride: 200, tightFrame: true, showLogo: true),
      onSelected: _applyTemplate,
    );
  }

  Widget _compactQrForTemplate(String payload) {
    return NgmyBrandedQrWidget(
      data: payload,
      compact: true,
      sizeOverride: 232,
      tightFrame: true,
      showLogo: true,
    );
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
        content: Text(
          record.isSyncQr
              ? 'Remove “${record.label}” from your saved sync QRs? You can save a new ${record.label} QR after this.'
              : 'Remove “${record.label}” from this device?',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    await deleteNgmySavedQr(record.id, userEmail: widget.userEmail);
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
      child: NgmyHudMotion(
        builder: (context, pulse, scan, orbit) {
          const colors = [_accent, _accentDeep];
          return NgmyToolkitAlivePanel(
            colors: colors,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            width: dialogW,
            maxHeight: MediaQuery.of(context).size.height * 0.92,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                NgmyToolkitAliveHeader(
                  title: 'QR Code Generator',
                  subtitle: widget.userEmail != null && widget.userEmail!.isNotEmpty
                      ? 'Saved sync QRs · Local codes'
                      : 'Local device · Download · Save',
                  colors: colors,
                  pulse: pulse,
                  orbit: orbit,
                  icon: Icons.qr_code_2_rounded,
                  trailing: onSavedTab
                      ? null
                      : Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            IconButton(
                              onPressed: hasQr ? () => _openTemplateGallery(payload) : null,
                              tooltip: 'Templates',
                              icon: Icon(
                                Icons.dashboard_customize_rounded,
                                color: hasQr ? _accent : Colors.white24,
                                size: 22,
                              ),
                            ),
                          ],
                        ),
                  onClose: () => Navigator.of(context).pop(),
                ),
                Flexible(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 18),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        NgmyToolkitAliveSection(
                          colors: colors,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.08,
                          padding: const EdgeInsets.all(8),
                          child: _typeRow(),
                        ),
                        const SizedBox(height: 14),
                        NgmyToolkitAliveSection(
                          colors: const [Color(0xFF22D3EE), Color(0xFF6366F1)],
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.2,
                          child: _typeBanner(),
                        ),
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
                          if (_activeTemplate != null && hasQr) ...[
                            _templateEditor(),
                            const SizedBox(height: 12),
                            NgmyToolkitAliveSection(
                              colors: colors,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.35,
                              child: _templatePreview(payload),
                            ),
                          ] else
                            NgmyToolkitAliveSection(
                              colors: colors,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.35,
                              child: _qrPreview(payload, hasQr),
                            ),
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
          );
        },
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
              onTap: () => setState(() {
                _type = i;
                _clearTemplate();
              }),
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
                  ? '${_saved.length} saved QR code${_saved.length == 1 ? '' : 's'}'
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
              'Create a QR and tap Save, or save a restore QR\nfrom NGMY Advisors or Family Tree sync.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12, height: 1.4),
            ),
          ],
        ),
      );
    }

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        childAspectRatio: 0.78,
      ),
      itemCount: _saved.length,
      itemBuilder: (context, index) => _savedGridTile(_saved[index]),
    );
  }

  void _openSavedQrFullscreen(NgmySavedQrRecord record) {
    showDialog<void>(
      context: context,
      barrierColor: Colors.black.withOpacity(0.94),
      builder: (ctx) => Dialog.fullscreen(
        backgroundColor: _bg,
        child: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
                child: Row(
                  children: [
                    IconButton(
                      onPressed: () => Navigator.pop(ctx),
                      icon: const Icon(Icons.close_rounded, color: Colors.white70),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(record.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18), maxLines: 1, overflow: TextOverflow.ellipsis),
                          Text(record.typeLabel, style: TextStyle(color: _accent.withOpacity(0.9), fontSize: 12, fontWeight: FontWeight.w700)),
                          if (record.isSyncQr && record.usesRemaining != null)
                            Text(
                              record.usesRemaining! >= 999
                                  ? 'Unlimited scans (admin)'
                                  : '${record.usesRemaining} of 2 scans remaining',
                              style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11, fontWeight: FontWeight.w600),
                            ),
                        ],
                      ),
                    ),
                    IconButton(
                      onPressed: _busy
                          ? null
                          : () async {
                              await _deleteSaved(record);
                              if (ctx.mounted) Navigator.pop(ctx);
                            },
                      icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444)),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: Center(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(20),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        NgmyBrandedQrWidget(data: record.payload, large: true),
                        const SizedBox(height: 20),
                        Text(
                          record.isSyncQr
                              ? 'Restore QR — scan on another phone (${record.usesRemaining != null && record.usesRemaining! < 999 ? 'max 2 scans total' : 'admin'})'
                              : 'Scan with any camera app',
                          style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 14, fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                child: SizedBox(
                  width: double.infinity,
                  child: ElevatedButton.icon(
                    onPressed: _busy ? null : () => _downloadQr(payload: record.payload, label: record.label),
                    icon: const Icon(Icons.download_rounded),
                    label: const Text('Download to gallery'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _accent,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _savedGridTile(NgmySavedQrRecord record) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(14),
        onTap: () => _openSavedQrFullscreen(record),
        child: Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            color: _panel,
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: _accent.withOpacity(0.22)),
          ),
          child: Column(
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Text(
                      record.label,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                  GestureDetector(
                    onTap: _busy ? null : () => _deleteSaved(record),
                    child: const Padding(
                      padding: EdgeInsets.only(left: 4),
                      child: Icon(Icons.close_rounded, size: 16, color: Color(0xFFEF4444)),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 2),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(record.typeLabel, style: TextStyle(color: _accent.withOpacity(0.85), fontSize: 9, fontWeight: FontWeight.w700)),
              ),
              if (record.isSyncQr && record.usesRemaining != null) ...[
                const SizedBox(height: 2),
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    record.usesRemaining! >= 999 ? 'Unlimited' : '${record.usesRemaining} scans left',
                    style: TextStyle(
                      color: record.usesRemaining! > 0 ? const Color(0xFF34D399) : const Color(0xFFF59E0B),
                      fontSize: 9,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
              ],
              const Spacer(),
              FittedBox(
                child: NgmyBrandedQrWidget(data: record.payload, compact: true),
              ),
              const SizedBox(height: 4),
              Text('Tap to scan', style: TextStyle(color: Colors.white.withOpacity(0.35), fontSize: 9, fontWeight: FontWeight.w600)),
            ],
          ),
        ),
      ),
    );
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
    VoidCallback? onChanged,
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
          onChanged: onChanged == null ? null : (_) => onChanged(),
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

  Widget _templateEditor() {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _accent.withOpacity(0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  _activeTemplate?.name ?? 'Template',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                ),
              ),
              TextButton.icon(
                onPressed: _clearTemplate,
                icon: const Icon(Icons.close_rounded, size: 16),
                label: const Text('Plain QR'),
                style: TextButton.styleFrom(foregroundColor: Colors.white54),
              ),
              TextButton.icon(
                onPressed: () => _openTemplateGallery(_buildPayload()),
                icon: const Icon(Icons.grid_view_rounded, size: 16),
                label: const Text('Change'),
                style: TextButton.styleFrom(foregroundColor: _accent),
              ),
            ],
          ),
          const SizedBox(height: 10),
          _field(controller: _templateTitleC, label: 'Subtitle (editable)', hint: 'Scan to connect to our Wi‑Fi', icon: Icons.subtitles_rounded, onChanged: () => setState(() {})),
          const SizedBox(height: 10),
          _field(controller: _templateFooterC, label: 'Closing line (editable)', hint: 'Enjoy your connection!', icon: Icons.favorite_border_rounded, onChanged: () => setState(() {})),
        ],
      ),
    );
  }

  Widget _templatePreview(String payload) {
    final template = _activeTemplate!;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _accent.withOpacity(0.2)),
      ),
      child: Column(
        children: [
          Text(
            'Premium access card · QR in center · Steps at bottom',
            style: TextStyle(color: Colors.white.withOpacity(0.75), fontWeight: FontWeight.w800, fontSize: 13),
          ),
          const SizedBox(height: 14),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: NgmyQrTemplateCard(
              captureKey: _templateCaptureKey,
              template: template,
              title: _templateTitleC.text.trim().isEmpty ? template.theme.subtitleTemplate : _templateTitleC.text.trim(),
              body: _templateBodyC.text.trim(),
              footer: _templateFooterC.text.trim().isEmpty ? template.theme.closingTemplate : _templateFooterC.text.trim(),
              fieldVars: _templateFieldVars(),
              qrWidget: _compactQrForTemplate(payload),
            ),
          ),
          const SizedBox(height: 10),
          Text(
            'Download saves the full template with your words and QR code.',
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 11),
          ),
        ],
      ),
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
  final bool large;
  final GlobalKey? captureKey;
  final int? errorCorrectionLevel;
  final double? sizeOverride;
  final bool showLogo;
  /// Snug frame for template cards — minimal padding around the QR.
  final bool tightFrame;
  /// Larger, bolder QR modules for easy phone scanning (short payloads only).
  final bool coarseScan;

  const NgmyBrandedQrWidget({
    super.key,
    required this.data,
    this.compact = false,
    this.large = false,
    this.captureKey,
    this.errorCorrectionLevel,
    this.sizeOverride,
    this.showLogo = true,
    this.tightFrame = false,
    this.coarseScan = false,
  });

  static Future<Uint8List?> capturePng(GlobalKey key, {double pixelRatio = 4}) async {
    final ctx = key.currentContext;
    if (ctx == null) return null;
    final boundary = ctx.findRenderObject();
    if (boundary is! RenderRepaintBoundary) return null;
    final image = await boundary.toImage(pixelRatio: pixelRatio);
    final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
    return bytes?.buffer.asUint8List();
  }

  static const _accent = Color(0xFF06B6D4);
  static const _accentDeep = Color(0xFF0891B2);
  static const _ink = Color(0xFF0F172A);

  @override
  Widget build(BuildContext context) {
    final size = sizeOverride ?? (large ? 300.0 : (compact ? 130.0 : 248.0));
    final logoSize = tightFrame ? size * 0.24 : (large ? 64.0 : (compact ? 28.0 : 52.0));
    final ring = tightFrame ? 0.0 : (large ? 26.0 : (compact ? 14.0 : 22.0));
    final outerPad = tightFrame ? 4.0 : (large ? 36.0 : 28.0);
    final qrPad = tightFrame ? 6.0 : 10.0;

    return RepaintBoundary(
      key: captureKey,
      child: SizedBox(
      width: size + outerPad * 2,
      height: size + outerPad * 2,
      child: Stack(
        alignment: Alignment.center,
        children: [
          if (ring > 0) ...[
            Positioned(top: 0, left: 0, child: _CornerRing(size: ring)),
            Positioned(top: 0, right: 0, child: _CornerRing(size: ring)),
            Positioned(bottom: 0, left: 0, child: _CornerRing(size: ring)),
            Positioned(bottom: 0, right: 0, child: _CornerRing(size: ring)),
          ],
          Container(
            width: size,
            height: size,
            padding: EdgeInsets.all(qrPad),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(tightFrame ? 10 : 16),
              boxShadow: tightFrame ? null : [BoxShadow(color: _accent.withOpacity(0.18), blurRadius: 16, spreadRadius: 1)],
            ),
            child: Stack(
              alignment: Alignment.center,
              children: [
                QrImageView(
                  data: data,
                  version: QrVersions.auto,
                  size: size - qrPad * 2,
                  padding: EdgeInsets.zero,
                  backgroundColor: Colors.white,
                  errorCorrectionLevel: errorCorrectionLevel ?? (coarseScan ? QrErrorCorrectLevel.L : QrErrorCorrectLevel.H),
                  errorStateBuilder: (context, error) => Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.all(12),
                    child: Text(
                      'QR too large',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: _ink.withValues(alpha: 0.55), fontWeight: FontWeight.w700, fontSize: compact ? 10 : 12),
                    ),
                  ),
                  eyeStyle: QrEyeStyle(
                    eyeShape: coarseScan ? QrEyeShape.square : QrEyeShape.circle,
                    color: _ink,
                  ),
                  dataModuleStyle: QrDataModuleStyle(
                    dataModuleShape: coarseScan ? QrDataModuleShape.square : QrDataModuleShape.circle,
                    color: _ink,
                  ),
                  gapless: coarseScan ? false : true,
                ),
                if (showLogo)
                  Container(
                    width: logoSize + 10,
                    height: logoSize + 10,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      shape: BoxShape.circle,
                      border: Border.all(color: _accent.withValues(alpha: 0.35), width: 2),
                      boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 6)],
                    ),
                    padding: const EdgeInsets.all(5),
                    child: ClipOval(
                      child: Image.network(
                        _kNgmyLogoUrl,
                        fit: BoxFit.cover,
                        errorBuilder: (_, __, ___) => Container(
                          color: _accent.withValues(alpha: 0.12),
                          alignment: Alignment.center,
                          child: Text('NGMY', style: TextStyle(fontWeight: FontWeight.w900, fontSize: large ? 13 : (compact ? 8 : 11), color: _accentDeep)),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
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
