import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

import 'ngmy_app_builder_invoice_templates.dart';
import 'ngmy_invoice_publish_registry.dart';
import 'ngmy_invoice_storage.dart';
import 'ngmy_qr_download.dart';

const String _kInvoicePublicBaseUrl = 'https://ngmy.org/invoice/';

const List<Duration?> _kPublishDurations = [
  Duration(minutes: 10),
  Duration(hours: 1),
  Duration(days: 1),
  Duration(days: 3),
  Duration(days: 7),
  null, // No expiry
];

String _durationLabel(Duration? d) {
  if (d == null) return 'No expiry';
  if (d.inMinutes < 60) return '${d.inMinutes} minutes';
  if (d.inHours < 24) return '${d.inHours} hour${d.inHours == 1 ? '' : 's'}';
  return '${d.inDays} day${d.inDays == 1 ? '' : 's'}';
}

/// Admin-only "Invoices" menu inside NGMY App Builder — same invoice
/// templates/frame regular users get from the invoiceBuilder widget when
/// building an app (see ngmy_app_builder_invoice_templates.dart), but admin
/// can publish a standalone https://ngmy.org/invoice/{slug} pay link anyone
/// can open with zero NGMY login. Every invoice created here is saved to
/// this device's local storage (saved_invoices_v1, isAdminPublished: true).
class NgmyAdminInvoiceLinksPanel extends StatefulWidget {
  const NgmyAdminInvoiceLinksPanel({super.key, required this.adminEmail, this.theme = const Color(0xFF2563EB)});

  final String adminEmail;
  final Color theme;

  @override
  State<NgmyAdminInvoiceLinksPanel> createState() => _NgmyAdminInvoiceLinksPanelState();
}

class _NgmyAdminInvoiceLinksPanelState extends State<NgmyAdminInvoiceLinksPanel> {
  String _templateId = 'classic';
  final _clientC = TextEditingController();
  final _itemsC = TextEditingController();
  final _amountC = TextEditingController();
  final _dueC = TextEditingController();
  final _payUrlC = TextEditingController();
  final _payLabelC = TextEditingController();
  final GlobalKey _previewKey = GlobalKey();

  Duration? _publishDuration = const Duration(days: 3);
  bool _publishing = false;
  bool _downloading = false;
  Map<String, dynamic>? _preview;
  List<Map<String, dynamic>> _published = [];

  @override
  void initState() {
    super.initState();
    _loadPublished();
  }

  @override
  void dispose() {
    _clientC.dispose();
    _itemsC.dispose();
    _amountC.dispose();
    _dueC.dispose();
    _payUrlC.dispose();
    _payLabelC.dispose();
    super.dispose();
  }

  Future<void> _loadPublished() async {
    final all = await loadSavedInvoices();
    if (!mounted) return;
    setState(() {
      _published = all.where((e) => e['isAdminPublished'] == true).toList();
    });
  }

  Map<String, dynamic> _recordFromForm() {
    return {
      'client': _clientC.text.trim(),
      'items': _itemsC.text.trim(),
      'amount': _amountC.text.trim(),
      'due': _dueC.text.trim(),
      'payUrl': _payUrlC.text.trim(),
      'payLabel': _payLabelC.text.trim(),
      'invoiceNo': 'INV-${DateTime.now().millisecondsSinceEpoch % 100000}',
      'createdAt': DateTime.now().toUtc().toIso8601String(),
      'templateId': _templateId,
    };
  }

  Future<void> _downloadInvoice() async {
    setState(() => _downloading = true);
    try {
      await Future.delayed(const Duration(milliseconds: 120));
      await WidgetsBinding.instance.endOfFrame;
      final boundary = _previewKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) throw Exception('Preview is not ready yet.');
      final image = await boundary.toImage(pixelRatio: 3.0);
      final bytes = (await image.toByteData(format: ui.ImageByteFormat.png))?.buffer.asUint8List();
      if (bytes == null) throw Exception('Could not render invoice image.');
      final filename = 'invoice_${_clientC.text.trim().isEmpty ? 'draft' : _clientC.text.trim()}_${DateTime.now().millisecondsSinceEpoch}';
      final msg = await downloadNgmyQrImage(bytes, filename);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg), backgroundColor: const Color(0xFF16A34A)));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Download failed: $e'), backgroundColor: const Color(0xFFEF4444)));
    } finally {
      if (mounted) setState(() => _downloading = false);
    }
  }

  String _generateSlug() {
    final ms = DateTime.now().millisecondsSinceEpoch.toRadixString(36);
    final rand = (DateTime.now().microsecondsSinceEpoch % 8191).toRadixString(36);
    return 'inv-$ms$rand';
  }

  Future<void> _publish() async {
    if (_clientC.text.trim().isEmpty || _amountC.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Client name and amount are required.'), backgroundColor: Color(0xFFEF4444)),
      );
      return;
    }
    setState(() => _publishing = true);
    final record = _recordFromForm();
    setState(() => _preview = record);
    final slug = _generateSlug();
    final expiresAt = _publishDuration == null ? null : DateTime.now().add(_publishDuration!);

    final error = await NgmyInvoicePublishRegistry.publish(
      slug: slug,
      data: record,
      createdByEmail: widget.adminEmail,
      expiresAt: expiresAt,
    );

    if (!mounted) return;
    setState(() => _publishing = false);

    if (error != null) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(error), backgroundColor: const Color(0xFFEF4444)));
      return;
    }

    final url = '$_kInvoicePublicBaseUrl$slug';
    final entry = Map<String, dynamic>.from(record);
    entry['id'] = DateTime.now().microsecondsSinceEpoch.toString();
    entry['isAdminPublished'] = true;
    entry['publishedSlug'] = slug;
    entry['publishedUrl'] = url;
    entry['expiresAt'] = expiresAt?.toIso8601String();
    await addSavedInvoice(entry);
    await _loadPublished();

    if (!mounted) return;
    await showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1F2937),
        title: const Text('Invoice published', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Share this link — anyone who opens it can view the invoice and pay, no login needed.', style: TextStyle(color: Colors.white.withValues(alpha: 0.85))),
            const SizedBox(height: 12),
            SelectableText(url, style: const TextStyle(fontWeight: FontWeight.w700, color: Colors.white)),
            const SizedBox(height: 8),
            Text(
              expiresAt == null ? 'This link never expires.' : 'Expires ${_durationLabel(_publishDuration)} from now.',
              style: TextStyle(fontSize: 12, color: Colors.white.withValues(alpha: 0.5)),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {
              Clipboard.setData(ClipboardData(text: url));
              Navigator.pop(ctx);
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied.')));
            },
            child: const Text('Copy Link'),
          ),
          FilledButton(onPressed: () => Navigator.pop(ctx), child: const Text('Done')),
        ],
      ),
    );
  }

  Future<void> _unpublish(Map<String, dynamic> entry) async {
    final slug = (entry['publishedSlug'] ?? '').toString();
    if (slug.isNotEmpty) {
      await NgmyInvoicePublishRegistry.unpublishSlug(slug);
    }
    await deleteSavedInvoice((entry['id'] ?? '').toString());
    await _loadPublished();
  }

  bool _isExpired(Map<String, dynamic> entry) {
    final raw = (entry['expiresAt'] ?? '').toString();
    if (raw.isEmpty) return false;
    final d = DateTime.tryParse(raw);
    if (d == null) return false;
    return DateTime.now().isAfter(d);
  }

  @override
  Widget build(BuildContext context) {
    final preview = _preview ?? _recordFromForm();
    return Container(
      color: const Color(0xFF111827),
      child: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          const Text('Invoices', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
          const SizedBox(height: 4),
          Text(
            'Admin only — build an invoice from any template, then publish a link anyone can open and pay from, no NGMY account needed.',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12),
          ),
          const SizedBox(height: 18),
          Text('Invoice template', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.7))),
          const SizedBox(height: 8),
          SizedBox(
            height: 88,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              itemCount: kNgmyAppBuilderInvoiceTemplates.length,
              separatorBuilder: (_, __) => const SizedBox(width: 8),
              itemBuilder: (_, i) {
                final t = kNgmyAppBuilderInvoiceTemplates[i];
                final selected = t.id == _templateId;
                return InkWell(
                  onTap: () => setState(() => _templateId = t.id),
                  borderRadius: BorderRadius.circular(14),
                  child: Container(
                    width: 108,
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: selected ? widget.theme.withValues(alpha: 0.15) : const Color(0xFF1F2937),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: selected ? widget.theme : Colors.transparent, width: 2),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(t.icon, size: 20, color: selected ? widget.theme : Colors.white60),
                        const Spacer(),
                        Text(t.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: Colors.white)),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
          const SizedBox(height: 14),
          _field(_clientC, 'Client / Company'),
          _field(_itemsC, 'Line items / description', maxLines: 3),
          _field(_amountC, 'Total amount (\$)', keyboard: TextInputType.number),
          _field(_dueC, 'Due date'),
          _field(_payUrlC, 'Payment link (optional — for QR)'),
          _field(_payLabelC, 'Text shown under the QR (optional — link itself stays hidden)'),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: DropdownButtonFormField<Duration?>(
                  initialValue: _publishDuration,
                  dropdownColor: const Color(0xFF1F2937),
                  style: const TextStyle(color: Colors.white),
                  decoration: const InputDecoration(labelText: 'Link expires after', labelStyle: TextStyle(color: Colors.white70)),
                  items: _kPublishDurations
                      .map((d) => DropdownMenuItem<Duration?>(value: d, child: Text(_durationLabel(d))))
                      .toList(),
                  onChanged: (v) => setState(() => _publishDuration = v),
                ),
              ),
              const SizedBox(width: 12),
              FilledButton.icon(
                onPressed: _publishing ? null : _publish,
                style: FilledButton.styleFrom(backgroundColor: widget.theme),
                icon: _publishing
                    ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Icon(Icons.ios_share_rounded),
                label: Text(_publishing ? 'Publishing…' : 'Publish & Get Link'),
              ),
            ],
          ),
          const SizedBox(height: 22),
          Row(
            children: [
              Text('Preview', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.7))),
              const Spacer(),
              OutlinedButton.icon(
                onPressed: _downloading ? null : _downloadInvoice,
                icon: _downloading
                    ? const SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2))
                    : const Icon(Icons.download_rounded, size: 18),
                label: Text(_downloading ? 'Downloading…' : 'Download'),
              ),
            ],
          ),
          const SizedBox(height: 10),
          // Invoices render in light mode regardless of the dashboard's dark
          // theme — matches what users see when they create one in App Builder.
          RepaintBoundary(
            key: _previewKey,
            child: ngmyAppBuilderInvoicePreview(
              templateId: _templateId,
              record: preview,
              theme: widget.theme,
              isDark: false,
              payLabel: _payLabelC.text.trim().isEmpty ? null : _payLabelC.text.trim(),
              showPaymentLink: false,
            ),
          ),
          const SizedBox(height: 26),
          Text('Published invoices on this device', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.7))),
          const SizedBox(height: 8),
          if (_published.isEmpty)
            Text('None yet.', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12)),
          ..._published.map((e) {
            final expired = _isExpired(e);
            final url = (e['publishedUrl'] ?? '').toString();
            return Container(
              margin: const EdgeInsets.only(bottom: 8),
              decoration: BoxDecoration(color: const Color(0xFF1F2937), borderRadius: BorderRadius.circular(12)),
              child: ListTile(
                title: Text('${e['client'] ?? ''} · \$${e['amount'] ?? ''}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                subtitle: Text(
                  expired ? 'Expired · $url' : url,
                  style: TextStyle(color: expired ? const Color(0xFFEF4444) : Colors.white54, fontSize: 11),
                ),
                trailing: Wrap(
                  spacing: 4,
                  children: [
                    IconButton(
                      icon: const Icon(Icons.copy_rounded, size: 18, color: Colors.white60),
                      onPressed: url.isEmpty
                          ? null
                          : () {
                              Clipboard.setData(ClipboardData(text: url));
                              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied.')));
                            },
                    ),
                    IconButton(
                      icon: const Icon(Icons.delete_outline_rounded, size: 18, color: Colors.white60),
                      onPressed: () => _unpublish(e),
                    ),
                  ],
                ),
              ),
            );
          }),
        ],
      ),
    );
  }

  Widget _field(TextEditingController c, String label, {TextInputType? keyboard, int maxLines = 1}) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: TextField(
          controller: c,
          keyboardType: keyboard,
          maxLines: maxLines,
          style: const TextStyle(color: Colors.white),
          decoration: InputDecoration(
            labelText: label,
            labelStyle: const TextStyle(color: Colors.white70),
            filled: true,
            fillColor: const Color(0xFF1F2937),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
          ),
          onChanged: (_) => setState(() {}),
        ),
      );
}
