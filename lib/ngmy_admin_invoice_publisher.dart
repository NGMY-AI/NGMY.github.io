import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_invoice_guest.dart';
import 'ngmy_invoice_publish_registry.dart';
import 'ngmy_invoice_storage.dart';
import 'ngmy_invoice_templates.dart';

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

/// Admin-only tool: build an invoice from the same template catalog users get,
/// attach a customizable pay button/QR, then publish it to a unique
/// https://ngmy.org/invoice/{slug} link anyone can open and pay from — no
/// NGMY login required. Every invoice created here (published or not) is
/// saved to this device's local storage alongside regular saved invoices.
class NgmyAdminInvoicePublisherScreen extends StatefulWidget {
  const NgmyAdminInvoicePublisherScreen({super.key, required this.adminEmail});

  final String adminEmail;

  @override
  State<NgmyAdminInvoicePublisherScreen> createState() => _NgmyAdminInvoicePublisherScreenState();
}

class _NgmyAdminInvoicePublisherScreenState extends State<NgmyAdminInvoicePublisherScreen> {
  String _templateId = 'modern';

  final _bizNameC = TextEditingController();
  final _bizStreetC = TextEditingController();
  final _bizCityStateZipC = TextEditingController();
  final _bizPhoneC = TextEditingController();
  final _invoiceNoC = TextEditingController(text: '1');
  final _issuedDateC = TextEditingController();
  final _dueDateC = TextEditingController();
  final _clientNameC = TextEditingController();
  final _clientEmailC = TextEditingController();
  final _itemNameC = TextEditingController();
  final _itemDescC = TextEditingController();
  final _itemPriceC = TextEditingController(text: '0');
  final _itemQtyC = TextEditingController(text: '1');
  final _itemDiscountC = TextEditingController(text: '0');
  final _paymentInfoC = TextEditingController();

  final _payLabelC = TextEditingController(text: 'Pay Now');
  final _payUrlC = TextEditingController();
  bool _payShowQr = true;
  NgmyInvoicePayButtonStyle _payStyle = NgmyInvoicePayButtonStyle.solid;

  Duration? _publishDuration = const Duration(days: 3);
  bool _publishing = false;
  List<Map<String, dynamic>> _published = [];

  @override
  void initState() {
    super.initState();
    final now = DateTime.now();
    _issuedDateC.text = '${now.month}/${now.day}/${now.year}';
    _loadPublished();
  }

  @override
  void dispose() {
    for (final c in [
      _bizNameC,
      _bizStreetC,
      _bizCityStateZipC,
      _bizPhoneC,
      _invoiceNoC,
      _issuedDateC,
      _dueDateC,
      _clientNameC,
      _clientEmailC,
      _itemNameC,
      _itemDescC,
      _itemPriceC,
      _itemQtyC,
      _itemDiscountC,
      _paymentInfoC,
      _payLabelC,
      _payUrlC,
    ]) {
      c.dispose();
    }
    super.dispose();
  }

  double _num(String raw) => double.tryParse(raw.trim()) ?? 0;

  double get _subtotal {
    final price = _num(_itemPriceC.text);
    final qty = _num(_itemQtyC.text);
    final disc = _num(_itemDiscountC.text);
    return (price * qty) * (1 - (disc.clamp(0, 100) / 100));
  }

  Future<void> _loadPublished() async {
    final all = await loadSavedInvoices();
    if (!mounted) return;
    setState(() {
      _published = all.where((e) => e['isAdminPublished'] == true).toList();
    });
  }

  Map<String, dynamic> _entryFromForm() {
    final now = DateTime.now().toIso8601String();
    return {
      'id': DateTime.now().microsecondsSinceEpoch.toString(),
      'template': _templateId,
      'invoiceNo': _invoiceNoC.text.trim(),
      'issuedDate': _issuedDateC.text.trim(),
      'dueDate': _dueDateC.text.trim(),
      'business': _bizNameC.text.trim(),
      'street': _bizStreetC.text.trim(),
      'cityStateZip': _bizCityStateZipC.text.trim(),
      'phone': _bizPhoneC.text.trim(),
      'clientName': _clientNameC.text.trim(),
      'clientEmail': _clientEmailC.text.trim(),
      'item': _itemNameC.text.trim(),
      'description': _itemDescC.text.trim(),
      'itemPrice': _itemPriceC.text.trim(),
      'itemQty': _itemQtyC.text.trim(),
      'itemDiscount': _itemDiscountC.text.trim(),
      'paymentInfo': _paymentInfoC.text.trim(),
      'subtotal': _subtotal,
      'isPaid': false,
      'createdAt': now,
      'isAdminPublished': true,
      'payButtonLabel': _payLabelC.text.trim().isEmpty ? 'Pay Now' : _payLabelC.text.trim(),
      'payButtonUrl': _payUrlC.text.trim(),
      'payButtonStyle': ngmyPayButtonStyleName(_payStyle),
      'payShowQr': _payShowQr,
    };
  }

  String _generateSlug() {
    final ms = DateTime.now().millisecondsSinceEpoch.toRadixString(36);
    final rand = (DateTime.now().microsecondsSinceEpoch % 8191).toRadixString(36);
    return 'inv-$ms$rand';
  }

  Future<void> _publish() async {
    if (_bizNameC.text.trim().isEmpty || _clientNameC.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Add a business name and client name first.'), backgroundColor: Color(0xFFEF4444)),
      );
      return;
    }
    setState(() => _publishing = true);
    final entry = _entryFromForm();
    final slug = _generateSlug();
    final expiresAt = _publishDuration == null ? null : DateTime.now().add(_publishDuration!);

    final error = await NgmyInvoicePublishRegistry.publish(
      slug: slug,
      data: entry,
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
    entry['publishedSlug'] = slug;
    entry['publishedUrl'] = url;
    entry['expiresAt'] = expiresAt?.toIso8601String();
    await addSavedInvoice(entry);
    await _loadPublished();

    if (!mounted) return;
    await showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Invoice published'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Share this link — anyone who opens it can view the invoice and pay, no login needed.'),
            const SizedBox(height: 12),
            SelectableText(url, style: const TextStyle(fontWeight: FontWeight.w700)),
            const SizedBox(height: 8),
            Text(
              expiresAt == null ? 'This link never expires.' : 'Expires ${_durationLabel(_publishDuration)} from now.',
              style: const TextStyle(fontSize: 12, color: Colors.grey),
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
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final accent = ngmyInvoiceTemplateById(_templateId)?.accent ?? const Color(0xFF16A34A);
    final previewData = NgmyInvoicePreviewData(
      templateId: _templateId,
      businessName: _bizNameC.text,
      bizStreet: _bizStreetC.text,
      bizCityStateZip: _bizCityStateZipC.text,
      bizPhone: _bizPhoneC.text,
      invoiceNo: _invoiceNoC.text,
      issuedDate: _issuedDateC.text,
      dueDate: _dueDateC.text,
      clientName: _clientNameC.text,
      clientEmail: _clientEmailC.text,
      itemName: _itemNameC.text,
      itemPrice: _itemPriceC.text,
      itemQty: _itemQtyC.text,
      itemDiscount: _itemDiscountC.text,
      itemDesc: _itemDescC.text,
      paymentInfo: _paymentInfoC.text,
      subtotal: _subtotal,
      isPaid: false,
      providerSignature: const [],
      clientSignature: const [],
    );

    return ListView(
      padding: const EdgeInsets.all(14),
      children: [
        const Text('Create & publish an invoice', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
        const SizedBox(height: 4),
        const Text(
          'Build an invoice from any template, attach a pay button or QR code, then publish a link anyone can open and pay from — no NGMY account needed.',
          style: TextStyle(fontSize: 12, color: Colors.grey),
        ),
        const SizedBox(height: 14),
        NgmyInvoiceTemplatePicker(selectedId: _templateId, onSelect: (id) => setState(() => _templateId = id)),
        const SizedBox(height: 16),
        _sectionLabel('Business'),
        _field(_bizNameC, 'Business name'),
        _field(_bizStreetC, 'Street address'),
        _field(_bizCityStateZipC, 'City, State ZIP'),
        _field(_bizPhoneC, 'Phone'),
        const SizedBox(height: 10),
        _sectionLabel('Client & item'),
        _field(_clientNameC, 'Client name'),
        _field(_clientEmailC, 'Client email'),
        _field(_itemNameC, 'Item / service'),
        _field(_itemDescC, 'Description'),
        Row(
          children: [
            Expanded(child: _field(_itemPriceC, 'Price', keyboard: TextInputType.number)),
            const SizedBox(width: 8),
            Expanded(child: _field(_itemQtyC, 'Qty', keyboard: TextInputType.number)),
            const SizedBox(width: 8),
            Expanded(child: _field(_itemDiscountC, 'Discount %', keyboard: TextInputType.number)),
          ],
        ),
        _field(_paymentInfoC, 'Payment info (shown on invoice)'),
        const SizedBox(height: 16),
        _sectionLabel('Pay button'),
        _field(_payLabelC, 'Button label (e.g. "Pay with CashApp")'),
        _field(_payUrlC, 'Payment link (CashApp, Venmo, PayPal, any URL)'),
        const SizedBox(height: 8),
        Wrap(
          spacing: 8,
          children: NgmyInvoicePayButtonStyle.values.map((s) {
            final selected = _payStyle == s;
            return ChoiceChip(
              label: Text(s.name),
              selected: selected,
              onSelected: (_) => setState(() => _payStyle = s),
            );
          }).toList(),
        ),
        SwitchListTile(
          contentPadding: EdgeInsets.zero,
          value: _payShowQr,
          onChanged: (v) => setState(() => _payShowQr = v),
          title: const Text('Also show a scannable QR code'),
        ),
        const SizedBox(height: 10),
        if (_payUrlC.text.trim().isNotEmpty)
          Center(
            child: NgmyInvoicePayButton(
              label: _payLabelC.text.trim().isEmpty ? 'Pay Now' : _payLabelC.text.trim(),
              color: accent,
              style: _payStyle,
            ),
          ),
        const SizedBox(height: 18),
        _sectionLabel('Preview'),
        NgmyInvoicePreview(data: previewData),
        const SizedBox(height: 18),
        _sectionLabel('Publish'),
        DropdownButtonFormField<Duration?>(
          initialValue: _publishDuration,
          decoration: const InputDecoration(labelText: 'Link expires after'),
          items: _kPublishDurations
              .map((d) => DropdownMenuItem<Duration?>(value: d, child: Text(_durationLabel(d))))
              .toList(),
          onChanged: (v) => setState(() => _publishDuration = v),
        ),
        const SizedBox(height: 10),
        FilledButton.icon(
          onPressed: _publishing ? null : _publish,
          icon: _publishing
              ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
              : const Icon(Icons.ios_share_rounded),
          label: Text(_publishing ? 'Publishing…' : 'Publish & Get Link'),
        ),
        const SizedBox(height: 24),
        _sectionLabel('Published invoices on this device'),
        if (_published.isEmpty) const Text('None yet.', style: TextStyle(color: Colors.grey, fontSize: 12)),
        ..._published.map((e) {
          final expired = _isExpired(e);
          final url = (e['publishedUrl'] ?? '').toString();
          return Card(
            color: isDark ? const Color(0xFF161922) : Colors.white,
            child: ListTile(
              title: Text('${e['business'] ?? ''} → ${e['clientName'] ?? ''}'),
              subtitle: Text(
                expired ? 'Expired · $url' : url,
                style: TextStyle(color: expired ? Colors.red : null, fontSize: 11),
              ),
              trailing: Wrap(
                spacing: 4,
                children: [
                  IconButton(
                    icon: const Icon(Icons.copy_rounded, size: 18),
                    onPressed: url.isEmpty
                        ? null
                        : () {
                            Clipboard.setData(ClipboardData(text: url));
                            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied.')));
                          },
                  ),
                  IconButton(
                    icon: const Icon(Icons.delete_outline_rounded, size: 18),
                    onPressed: () => _unpublish(e),
                  ),
                ],
              ),
            ),
          );
        }),
      ],
    );
  }

  Widget _sectionLabel(String text) => Padding(
        padding: const EdgeInsets.only(bottom: 8, top: 4),
        child: Text(text, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 13)),
      );

  Widget _field(TextEditingController c, String label, {TextInputType? keyboard}) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: TextField(
          controller: c,
          keyboardType: keyboard,
          decoration: InputDecoration(labelText: label),
          onChanged: (_) => setState(() {}),
        ),
      );
}
