import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_app_builder_data.dart';

/// Static QR display from layout JSON.
class NgmyRuntimeQrDisplay extends StatelessWidget {
  const NgmyRuntimeQrDisplay({
    super.key,
    required this.data,
    required this.theme,
    this.label = '',
    this.isDark = false,
    this.size = 200,
  });

  final String data;
  final Color theme;
  final String label;
  final bool isDark;
  final double size;

  @override
  Widget build(BuildContext context) {
    final payload = data.trim();
    if (payload.isEmpty) {
      return Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF1E293B) : Colors.grey.shade100,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: theme.withValues(alpha: 0.25)),
        ),
        child: Column(
          children: [
            Icon(Icons.qr_code_2_rounded, size: 64, color: theme.withValues(alpha: 0.5)),
            const SizedBox(height: 8),
            Text('QR code will appear here', style: TextStyle(color: isDark ? Colors.white54 : Colors.black54)),
          ],
        ),
      );
    }
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
            boxShadow: [BoxShadow(color: theme.withValues(alpha: 0.2), blurRadius: 16, offset: const Offset(0, 6))],
          ),
          child: QrImageView(
            data: payload,
            version: QrVersions.auto,
            size: size,
            backgroundColor: Colors.white,
            eyeStyle: QrEyeStyle(eyeShape: QrEyeShape.square, color: theme),
            dataModuleStyle: QrDataModuleStyle(dataModuleShape: QrDataModuleShape.square, color: Colors.black87),
          ),
        ),
        if (label.isNotEmpty) ...[
          const SizedBox(height: 10),
          Text(label, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
        ],
        const SizedBox(height: 6),
        SelectableText(
          payload,
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
        ),
      ],
    );
  }
}

/// Live QR generator — user types URL or text and QR updates instantly.
class NgmyRuntimeQrGenerator extends StatefulWidget {
  const NgmyRuntimeQrGenerator({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    this.isDark = false,
    required this.onSnack,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final void Function(String message) onSnack;

  @override
  State<NgmyRuntimeQrGenerator> createState() => _NgmyRuntimeQrGeneratorState();
}

class _NgmyRuntimeQrGeneratorState extends State<NgmyRuntimeQrGenerator> {
  late final TextEditingController _ctrl;
  String get _mode => (widget.node['mode'] ?? 'url').toString().toLowerCase();

  @override
  void initState() {
    super.initState();
    final seed = (widget.node['defaultValue'] ?? widget.node['data'] ?? '').toString();
    _ctrl = TextEditingController(text: seed);
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  String get _qrPayload {
    var raw = _ctrl.text.trim();
    if (raw.isEmpty) return '';
    if (_mode == 'url' && !raw.startsWith('http://') && !raw.startsWith('https://')) {
      raw = 'https://$raw';
    }
    return raw;
  }

  Future<void> _saveQr() async {
    final payload = _qrPayload;
    if (payload.isEmpty) {
      widget.onSnack('Enter ${_mode == 'url' ? 'a website URL' : 'some text'} first.');
      return;
    }
    final col = (widget.node['collection'] ?? 'qr_codes').toString();
    final label = (widget.node['saveLabelField'] ?? 'label').toString();
    await widget.store.ensureLoaded();
    await widget.store.addRecord(col, {
      label: _ctrl.text.trim().length > 40 ? '${_ctrl.text.trim().substring(0, 40)}…' : _ctrl.text.trim(),
      'payload': payload,
      'mode': _mode,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    });
    widget.onSnack('QR saved!');
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final title = (widget.node['title'] ?? (_mode == 'url' ? 'Website QR Code' : 'Text QR Code')).toString();
    final hint = (widget.node['placeholder'] ?? (_mode == 'url' ? 'https://your-website.com' : 'Type any message')).toString();
    final payload = _qrPayload;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            widget.theme.withValues(alpha: widget.isDark ? 0.22 : 0.12),
            widget.isDark ? const Color(0xFF0F172A) : Colors.white,
          ],
        ),
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: widget.theme.withValues(alpha: 0.3)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Icon(_mode == 'url' ? Icons.link_rounded : Icons.text_fields_rounded, color: widget.theme),
              const SizedBox(width: 8),
              Expanded(child: Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: widget.isDark ? Colors.white : Colors.black87))),
            ],
          ),
          const SizedBox(height: 14),
          TextField(
            controller: _ctrl,
            onChanged: (_) => setState(() {}),
            maxLines: _mode == 'text' ? 3 : 1,
            style: TextStyle(color: widget.isDark ? Colors.white : Colors.black87),
            decoration: InputDecoration(
              hintText: hint,
              filled: true,
              fillColor: widget.isDark ? const Color(0xFF111827) : Colors.grey.shade50,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
              prefixIcon: Icon(_mode == 'url' ? Icons.language_rounded : Icons.edit_rounded, color: widget.theme),
            ),
          ),
          const SizedBox(height: 18),
          Center(child: NgmyRuntimeQrDisplay(data: payload, theme: widget.theme, isDark: widget.isDark, size: 180)),
          if (widget.node['allowSave'] != false) ...[
            const SizedBox(height: 14),
            FilledButton.icon(
              onPressed: _saveQr,
              style: FilledButton.styleFrom(backgroundColor: widget.theme, minimumSize: const Size(double.infinity, 48)),
              icon: const Icon(Icons.save_rounded),
              label: Text((widget.node['saveButtonLabel'] ?? 'Save QR code').toString()),
            ),
          ],
        ],
      ),
    );
  }
}

/// Invoice creator — client, items, amount; saves and shows printable card + payment QR.
class NgmyRuntimeInvoiceBuilder extends StatefulWidget {
  const NgmyRuntimeInvoiceBuilder({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    this.isDark = false,
    required this.onSnack,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final void Function(String message) onSnack;

  @override
  State<NgmyRuntimeInvoiceBuilder> createState() => _NgmyRuntimeInvoiceBuilderState();
}

class _NgmyRuntimeInvoiceBuilderState extends State<NgmyRuntimeInvoiceBuilder> {
  final _clientC = TextEditingController();
  final _itemsC = TextEditingController();
  final _amountC = TextEditingController();
  final _dueC = TextEditingController();
  final _payUrlC = TextEditingController();
  Map<String, dynamic>? _preview;

  @override
  void dispose() {
    _clientC.dispose();
    _itemsC.dispose();
    _amountC.dispose();
    _dueC.dispose();
    _payUrlC.dispose();
    super.dispose();
  }

  Future<void> _generate() async {
    final client = _clientC.text.trim();
    final items = _itemsC.text.trim();
    final amount = _amountC.text.trim();
    if (client.isEmpty || amount.isEmpty) {
      widget.onSnack('Client name and amount are required.');
      return;
    }
    final col = (widget.node['collection'] ?? 'invoices').toString();
    final record = {
      'client': client,
      'items': items,
      'amount': amount,
      'due': _dueC.text.trim(),
      'payUrl': _payUrlC.text.trim(),
      'invoiceNo': 'INV-${DateTime.now().millisecondsSinceEpoch % 100000}',
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await widget.store.ensureLoaded();
    await widget.store.addRecord(col, record);
    setState(() => _preview = record);
    widget.onSnack('Invoice created!');
  }

  @override
  Widget build(BuildContext context) {
    final title = (widget.node['title'] ?? 'Create Invoice').toString();
    final fieldFill = widget.isDark ? const Color(0xFF111827) : Colors.grey.shade50;
    final textColor = widget.isDark ? Colors.white : Colors.black87;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: textColor)),
        const SizedBox(height: 12),
        TextField(controller: _clientC, style: TextStyle(color: textColor), decoration: InputDecoration(labelText: 'Client / Company', filled: true, fillColor: fieldFill, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)))),
        const SizedBox(height: 10),
        TextField(controller: _itemsC, maxLines: 3, style: TextStyle(color: textColor), decoration: InputDecoration(labelText: 'Line items / description', filled: true, fillColor: fieldFill, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)))),
        const SizedBox(height: 10),
        TextField(controller: _amountC, keyboardType: TextInputType.number, style: TextStyle(color: textColor), decoration: InputDecoration(labelText: 'Total amount (\$)', filled: true, fillColor: fieldFill, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)))),
        const SizedBox(height: 10),
        TextField(controller: _dueC, style: TextStyle(color: textColor), decoration: InputDecoration(labelText: 'Due date', filled: true, fillColor: fieldFill, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)))),
        const SizedBox(height: 10),
        TextField(controller: _payUrlC, style: TextStyle(color: textColor), decoration: InputDecoration(labelText: 'Payment link (optional — for QR)', filled: true, fillColor: fieldFill, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)))),
        const SizedBox(height: 14),
        FilledButton.icon(
          onPressed: _generate,
          style: FilledButton.styleFrom(backgroundColor: widget.theme, minimumSize: const Size(double.infinity, 50)),
          icon: const Icon(Icons.receipt_long_rounded),
          label: const Text('Generate invoice'),
        ),
        if (_preview != null) ...[
          const SizedBox(height: 20),
          _InvoicePreviewCard(record: _preview!, theme: widget.theme, isDark: widget.isDark),
        ],
      ],
    );
  }
}

class _InvoicePreviewCard extends StatelessWidget {
  const _InvoicePreviewCard({required this.record, required this.theme, required this.isDark});
  final Map<String, dynamic> record;
  final Color theme;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    final payUrl = (record['payUrl'] ?? '').toString().trim();
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1E293B) : Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: theme.withValues(alpha: 0.35), width: 1.5),
        boxShadow: [BoxShadow(color: theme.withValues(alpha: 0.12), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.receipt_rounded, color: theme),
              const SizedBox(width: 8),
              Text('INVOICE', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.2, color: theme)),
              const Spacer(),
              Text((record['invoiceNo'] ?? '').toString(), style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
            ],
          ),
          const Divider(height: 24),
          Text('Bill to: ${record['client']}', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
          const SizedBox(height: 8),
          Text((record['items'] ?? '').toString(), style: TextStyle(color: isDark ? Colors.white70 : Colors.black87)),
          const SizedBox(height: 12),
          Text('\$${record['amount']}', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: theme)),
          if ((record['due'] ?? '').toString().isNotEmpty)
            Padding(padding: const EdgeInsets.only(top: 4), child: Text('Due: ${record['due']}', style: TextStyle(color: isDark ? Colors.white60 : Colors.black54))),
          if (payUrl.isNotEmpty) ...[
            const SizedBox(height: 16),
            Center(child: NgmyRuntimeQrDisplay(data: payUrl, theme: theme, isDark: isDark, label: 'Pay with QR', size: 140)),
          ],
        ],
      ),
    );
  }
}

Future<void> ngmyRuntimeOpenUrl(String url, void Function(String) onSnack) async {
  var u = url.trim();
  if (u.isEmpty) return;
  if (!u.startsWith('http://') && !u.startsWith('https://')) u = 'https://$u';
  final uri = Uri.tryParse(u);
  if (uri == null) {
    onSnack('Invalid link.');
    return;
  }
  if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
    onSnack('Could not open link.');
  }
}
