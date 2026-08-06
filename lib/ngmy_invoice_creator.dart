import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_invoice_letter.dart';
import 'ngmy_invoice_payments.dart';
import 'ngmy_invoice_print.dart';
import 'ngmy_invoice_protected_preview.dart';
import 'ngmy_invoice_signature.dart';
import 'ngmy_invoice_storage.dart';
import 'ngmy_invoice_templates.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_slides_download.dart';

class _InvoiceGuestUser {
  _InvoiceGuestUser(this.email);
  final String email;
  bool get isAdmin => false;
}

List<Map<String, double>> _serializeSignature(List<Offset?> points) {
  return points
      .whereType<Offset>()
      .map((p) => {'x': p.dx, 'y': p.dy})
      .toList();
}

List<Offset?> _deserializeSignature(dynamic raw) {
  if (raw is! List) return [];
  return raw.map((p) {
    if (p is! Map) return null;
    final x = p['x'];
    final y = p['y'];
    if (x is num && y is num) return Offset(x.toDouble(), y.toDouble());
    return null;
  }).whereType<Offset>().toList();
}

double _num(String raw) => double.tryParse(raw.trim()) ?? 0;

/// Full Create Invoice dialog — signatures, saved inbox, download, paid toggle, provider auto-save.
void showNgmyInvoiceCreator(
  BuildContext context, {
  required String userEmail,
  String initialService = '',
  double initialAmount = 0,
  dynamic user,
  dynamic config,
  Future<bool> Function(double amount, String description)? onCharge,
  VoidCallback? onDataChanged,
}) {
  showDialog<void>(
    context: context,
    barrierColor: Colors.black87,
    builder: (_) => NgmyInvoiceCreatorDialog(
      userEmail: userEmail,
      initialService: initialService,
      initialAmount: initialAmount,
      user: user,
      config: config,
      onCharge: onCharge,
      onDataChanged: onDataChanged,
    ),
  );
}

class NgmyInvoiceCreatorDialog extends StatefulWidget {
  const NgmyInvoiceCreatorDialog({
    super.key,
    required this.userEmail,
    this.initialService = '',
    this.initialAmount = 0,
    this.user,
    this.config,
    this.onCharge,
    this.onDataChanged,
  });

  final String userEmail;
  final String initialService;
  final double initialAmount;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description)? onCharge;
  final VoidCallback? onDataChanged;

  @override
  State<NgmyInvoiceCreatorDialog> createState() => _NgmyInvoiceCreatorDialogState();
}

class _NgmyInvoiceCreatorDialogState extends State<NgmyInvoiceCreatorDialog> {
  String _templateId = 'modern';
  bool _invoicePaid = false;
  bool _loadingProvider = false;
  int _savedCount = 0;
  Uint8List? _providerPhotoBytes;
  final List<Offset?> _providerSignaturePoints = [];
  final List<Offset?> _clientSignaturePoints = [];
  final GlobalKey _previewKey = GlobalKey();
  Uint8List? _printPdfCache;
  String? _printPdfCacheKey;
  Timer? _printPdfWarmTimer;

  final _invoiceNoC = TextEditingController(text: '1');
  final _issuedDateC = TextEditingController();
  final _dueDateC = TextEditingController();
  final _bizNameC = TextEditingController();
  final _bizStreetC = TextEditingController();
  final _bizCityStateZipC = TextEditingController();
  final _bizPhoneC = TextEditingController();
  final _clientNameC = TextEditingController();
  final _clientEmailC = TextEditingController();
  final _itemNameC = TextEditingController();
  final _itemDescC = TextEditingController();
  final _itemPriceC = TextEditingController(text: '0');
  final _itemQtyC = TextEditingController(text: '1');
  final _itemDiscountC = TextEditingController(text: '0');
  final _paymentInfoC = TextEditingController(text: 'Thank you for your business!');

  dynamic get _effectiveUser => widget.user ?? _InvoiceGuestUser(widget.userEmail);

  bool get _isAdmin {
    try {
      return (_effectiveUser as dynamic).isAdmin == true;
    } catch (_) {
      return false;
    }
  }

  String get _email {
    try {
      final e = (_effectiveUser as dynamic).email;
      if (e is String && e.trim().isNotEmpty) return e.trim();
    } catch (_) {}
    return widget.userEmail.trim();
  }

  @override
  void initState() {
    super.initState();
    final now = DateTime.now();
    _issuedDateC.text = '${now.month}/${now.day}/${now.year}';
    _dueDateC.text = '${now.month}/${now.day + 7}/${now.year}';
    if (widget.initialService.trim().isNotEmpty) _itemNameC.text = widget.initialService.trim();
    if (widget.initialAmount > 0) _itemPriceC.text = widget.initialAmount.toStringAsFixed(2);
    _providerSignaturePoints.clear();
    _clientSignaturePoints.clear();
    _invoicePaid = false;
    unawaited(_bootstrap());
    for (final c in [_bizNameC, _bizStreetC, _bizCityStateZipC, _bizPhoneC, _paymentInfoC]) {
      c.addListener(_persistProviderProfile);
    }
  }

  Future<void> _bootstrap() async {
    await cleanupExpiredPaidInvoices();
    _savedCount = await savedInvoiceCount();
    await _loadProviderProfile();
    if (mounted) setState(() {});
  }

  Future<void> _loadProviderProfile() async {
    final email = _email;
    if (email.isEmpty) return;
    _loadingProvider = true;
    final profile = await loadInvoiceProviderProfile(email);
    if (!mounted) return;
    if (profile.isNotEmpty) {
      _bizNameC.text = profile['business'] ?? _bizNameC.text;
      _bizStreetC.text = profile['street'] ?? _bizStreetC.text;
      _bizCityStateZipC.text = profile['cityStateZip'] ?? _bizCityStateZipC.text;
      _bizPhoneC.text = profile['phone'] ?? _bizPhoneC.text;
      _paymentInfoC.text = profile['paymentInfo'] ?? _paymentInfoC.text;
      final photoB64 = profile['photoBase64'] ?? '';
      if (photoB64.isNotEmpty) {
        try {
          _providerPhotoBytes = base64Decode(photoB64);
        } catch (_) {}
      }
    }
    _loadingProvider = false;
  }

  void _persistProviderProfile() {
    if (_loadingProvider) return;
    final email = _email;
    if (email.isEmpty) return;
    saveInvoiceProviderProfile(email, {
      'business': _bizNameC.text.trim(),
      'street': _bizStreetC.text.trim(),
      'cityStateZip': _bizCityStateZipC.text.trim(),
      'phone': _bizPhoneC.text.trim(),
      'paymentInfo': _paymentInfoC.text.trim(),
      'photoBase64': (_providerPhotoBytes != null && _providerPhotoBytes!.isNotEmpty)
          ? base64Encode(_providerPhotoBytes!)
          : '',
    });
  }

  @override
  void dispose() {
    _printPdfWarmTimer?.cancel();
    for (final c in [_bizNameC, _bizStreetC, _bizCityStateZipC, _bizPhoneC, _paymentInfoC]) {
      c.removeListener(_persistProviderProfile);
    }
    _invoiceNoC.dispose();
    _issuedDateC.dispose();
    _dueDateC.dispose();
    _bizNameC.dispose();
    _bizStreetC.dispose();
    _bizCityStateZipC.dispose();
    _bizPhoneC.dispose();
    _clientNameC.dispose();
    _clientEmailC.dispose();
    _itemNameC.dispose();
    _itemDescC.dispose();
    _itemPriceC.dispose();
    _itemQtyC.dispose();
    _itemDiscountC.dispose();
    _paymentInfoC.dispose();
    super.dispose();
  }

  double _subtotal() {
    final price = _num(_itemPriceC.text);
    final qty = _num(_itemQtyC.text);
    final disc = _num(_itemDiscountC.text);
    final gross = price * qty;
    return gross - (gross * (disc.clamp(0, 100) / 100));
  }

  bool _contentLocked() {
    if (_isAdmin) return false;
    if (widget.config == null) return false;
    return NgmyInvoicePayments.requiresPayment(_templateId, widget.config) &&
        !NgmyInvoicePayments.hasAccess(widget.config, _email, _templateId, isAdmin: _isAdmin);
  }

  String _invoiceRef() => NgmyInvoicePayments.invoiceRef(
        templateId: _templateId,
        invoiceNo: _invoiceNoC.text,
        business: _bizNameC.text,
        clientName: _clientNameC.text,
        item: _itemNameC.text,
        itemPrice: _itemPriceC.text,
      );

  Future<bool> _ensureTemplatePaid(BuildContext ctx) async {
    if (_isAdmin) return true;
    if (widget.config == null || widget.onCharge == null) return !_contentLocked();
    final ok = await NgmyInvoicePayments.requestAccess(
      context: ctx,
      user: _effectiveUser,
      config: widget.config,
      templateId: _templateId,
      onCharge: widget.onCharge!,
      onGranted: widget.onDataChanged,
      invoiceRef: _invoiceRef(),
    );
    if (ok && mounted) setState(() {});
    return ok;
  }

  /// Save / download: Standard uses 3 free invoices; paid templates always paywall.
  Future<bool> _ensureCanSaveOrDownload(BuildContext ctx) async {
    if (_isAdmin) return true;
    if (widget.config == null || widget.onCharge == null) return !_contentLocked();
    final ok = await NgmyInvoicePayments.ensureSaveOrDownloadAllowed(
      context: ctx,
      user: _effectiveUser,
      config: widget.config,
      templateId: _templateId,
      onCharge: widget.onCharge!,
      onGranted: widget.onDataChanged,
      invoiceRef: _invoiceRef(),
    );
    if (ok && mounted) setState(() {});
    return ok;
  }

  InputDecoration _fieldDec(String label, {bool locked = false}) => InputDecoration(
        labelText: label,
        suffixIcon: locked ? const Icon(Icons.lock_outline_rounded, size: 18) : null,
      );

  Widget _lockedWrap(BuildContext ctx, Widget child) {
    if (!_contentLocked()) return child;
    return GestureDetector(
      onTap: () => _ensureTemplatePaid(ctx),
      child: AbsorbPointer(child: child),
    );
  }

  Map<String, dynamic> _entryFromForm(double subtotal) {
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
      'subtotal': subtotal,
      'isPaid': _invoicePaid,
      'paidAt': _invoicePaid ? now : null,
      'createdAt': now,
      'providerSignature': _serializeSignature(_providerSignaturePoints),
      'clientSignature': _serializeSignature(_clientSignaturePoints),
      if (_providerPhotoBytes != null && _providerPhotoBytes!.isNotEmpty)
        'photoBase64': base64Encode(_providerPhotoBytes!),
    };
  }

  void _applyEntry(Map<String, dynamic> entry) {
    _templateId = ngmyNormalizeInvoiceTemplateId((entry['template'] ?? 'modern').toString());
    _invoiceNoC.text = (entry['invoiceNo'] ?? '1').toString();
    _issuedDateC.text = (entry['issuedDate'] ?? '').toString();
    _dueDateC.text = (entry['dueDate'] ?? '').toString();
    _bizNameC.text = (entry['business'] ?? entry['businessName'] ?? '').toString();
    _bizStreetC.text = (entry['street'] ?? entry['bizStreet'] ?? '').toString();
    _bizCityStateZipC.text = (entry['cityStateZip'] ?? entry['bizCityStateZip'] ?? '').toString();
    _bizPhoneC.text = (entry['phone'] ?? entry['bizPhone'] ?? '').toString();
    _clientNameC.text = (entry['clientName'] ?? '').toString();
    _clientEmailC.text = (entry['clientEmail'] ?? '').toString();
    _itemNameC.text = (entry['item'] ?? entry['itemName'] ?? '').toString();
    _itemDescC.text = (entry['description'] ?? entry['itemDesc'] ?? '').toString();
    _itemPriceC.text = (entry['itemPrice'] ?? '0').toString();
    _itemQtyC.text = (entry['itemQty'] ?? '1').toString();
    _itemDiscountC.text = (entry['itemDiscount'] ?? '0').toString();
    _paymentInfoC.text = (entry['paymentInfo'] ?? '').toString();
    _invoicePaid = entry['isPaid'] == true;
    _providerSignaturePoints
      ..clear()
      ..addAll(_deserializeSignature(entry['providerSignature']));
    _clientSignaturePoints
      ..clear()
      ..addAll(_deserializeSignature(entry['clientSignature']));
    final photoB64 = (entry['photoBase64'] ?? '').toString();
    if (photoB64.isNotEmpty) {
      try {
        _providerPhotoBytes = base64Decode(photoB64);
      } catch (_) {
        _providerPhotoBytes = null;
      }
    } else {
      _providerPhotoBytes = null;
    }
    setState(() {});
  }

  Future<void> _pickProviderPhoto() async {
    if (_contentLocked()) {
      if (!await _ensureTemplatePaid(context)) return;
    }
    try {
      final picker = ImagePicker();
      final file = await picker.pickImage(
        source: ImageSource.gallery,
        maxWidth: 800,
        maxHeight: 800,
        imageQuality: 85,
      );
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (!mounted) return;
      setState(() => _providerPhotoBytes = bytes);
      _persistProviderProfile();
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Could not load photo: $e')),
        );
      }
    }
  }

  Future<int> _saveInvoice(BuildContext ctx, double subtotal) async {
    await addSavedInvoice(_entryFromForm(subtotal));
    final count = await savedInvoiceCount();
    if (ctx.mounted) {
      ScaffoldMessenger.of(ctx).showSnackBar(
        SnackBar(
          content: Text(
            _invoicePaid
                ? 'Invoice saved. Tap the receipt icon to view it. Paid invoices auto-delete after 5 days.'
                : 'Invoice saved. Tap the receipt icon next to Create Invoice to view it.',
          ),
          backgroundColor: const Color(0xFF16A34A),
        ),
      );
    }
    return count;
  }

  Future<Uint8List> _captureInvoicePng({bool fast = false}) async {
    if (fast) {
      await Future.delayed(const Duration(milliseconds: 24));
    } else {
      await Future.delayed(const Duration(milliseconds: 180));
    }
    await WidgetsBinding.instance.endOfFrame;
    final boundary = _previewKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
    if (boundary == null) {
      throw Exception('Preview is not ready yet. Scroll to the invoice preview and try again.');
    }
    final image = await boundary.toImage(pixelRatio: fast ? 2.0 : 3.0);
    final bytes = (await image.toByteData(format: ui.ImageByteFormat.png))?.buffer.asUint8List();
    if (bytes == null) throw Exception('Could not render invoice image.');
    return bytes;
  }

  String _printPdfCacheSignature(double subtotal) =>
      '$_templateId|$_invoicePaid|${_invoiceNoC.text}|${_issuedDateC.text}|${_dueDateC.text}|'
      '${_bizNameC.text}|${_clientNameC.text}|${_itemNameC.text}|${_itemPriceC.text}|'
      '${_itemQtyC.text}|${_itemDiscountC.text}|$subtotal|'
      '${_providerSignaturePoints.length}|${_clientSignaturePoints.length}|'
      '${_providerPhotoBytes?.length ?? 0}';

  void _schedulePrintPdfWarm(double subtotal) {
    _printPdfWarmTimer?.cancel();
    _printPdfWarmTimer = Timer(const Duration(milliseconds: 350), () {
      if (!mounted) return;
      unawaited(_warmPrintPdfCache(subtotal));
    });
  }

  Future<void> _warmPrintPdfCache(double subtotal) async {
    try {
      final key = _printPdfCacheSignature(subtotal);
      if (_printPdfCache != null && _printPdfCacheKey == key) return;
      final png = await _captureInvoicePng(fast: true);
      if (!mounted) return;
      final pdf = await ngmyInvoiceBuildLetterPdf(png);
      if (!mounted) return;
      _printPdfCache = pdf;
      _printPdfCacheKey = key;
    } catch (_) {}
  }

  Future<Uint8List> _printPdfBytes(double subtotal) async {
    final key = _printPdfCacheSignature(subtotal);
    if (_printPdfCache != null && _printPdfCacheKey == key) return _printPdfCache!;
    final png = await _captureInvoicePng(fast: true);
    final pdf = await ngmyInvoiceBuildLetterPdf(png);
    _printPdfCache = pdf;
    _printPdfCacheKey = key;
    return pdf;
  }

  String _invoiceExportBaseName() {
    final invoiceNo = _invoiceNoC.text.trim().isEmpty ? 'invoice' : _invoiceNoC.text.trim();
    return 'invoice_${invoiceNo}_${DateTime.now().millisecondsSinceEpoch}';
  }

  /// Receipt-sized PNG download — same behavior as before.
  Future<void> _downloadInvoice(BuildContext ctx) async {
    try {
      final bytes = await _captureInvoicePng();
      final filename = _invoiceExportBaseName();
      final msg = await downloadNgmyQrImage(bytes, filename);
      if (ctx.mounted) {
        ScaffoldMessenger.of(ctx).showSnackBar(
          SnackBar(content: Text(msg), backgroundColor: const Color(0xFF16A34A)),
        );
      }
    } catch (e) {
      if (ctx.mounted) {
        ScaffoldMessenger.of(ctx).showSnackBar(
          SnackBar(content: Text('Download failed: $e'), backgroundColor: const Color(0xFFEF4444)),
        );
      }
    }
  }

  /// Full US Letter page — opens print/share immediately (no extra menus).
  Future<void> _printInvoice(BuildContext ctx, double subtotal) async {
    try {
      final pdfBytes = await _printPdfBytes(subtotal);
      final filename = _invoiceExportBaseName();

      if (kIsWeb) {
        final ok = await ngmyInvoicePrintPdfDirect(pdfBytes, filename);
        if (!ctx.mounted) return;
        if (!ok) {
          ScaffoldMessenger.of(ctx).showSnackBar(
            const SnackBar(
              content: Text('Could not open print — try again.'),
              backgroundColor: Color(0xFFEF4444),
            ),
          );
        }
        return;
      }

      final msg = await saveNgmySlidesPdf(pdfBytes, filename);
      if (ctx.mounted) {
        ScaffoldMessenger.of(ctx).showSnackBar(
          SnackBar(
            content: Text('$msg — open the letter PDF to print on full paper.'),
            backgroundColor: const Color(0xFF16A34A),
          ),
        );
      }
    } catch (e) {
      if (ctx.mounted) {
        ScaffoldMessenger.of(ctx).showSnackBar(
          SnackBar(content: Text('Print failed: $e'), backgroundColor: const Color(0xFFEF4444)),
        );
      }
    }
  }

  Future<void> _showDownloadOrPrintOptions(BuildContext ctx) async {
    final choice = await showDialog<String>(
      context: ctx,
      barrierColor: Colors.black.withValues(alpha: 0.78),
      builder: (dCtx) => Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.symmetric(horizontal: 32, vertical: 24),
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 300),
          child: _InvoiceExportDialog(
            onDownload: () => Navigator.pop(dCtx, 'download'),
            onPrint: () => Navigator.pop(dCtx, 'print'),
            onCancel: () => Navigator.pop(dCtx),
          ),
        ),
      ),
    );
    if (!ctx.mounted || choice == null) return;
    final subtotal = _subtotal();
    if (choice == 'print') {
      await _printInvoice(ctx, subtotal);
    } else {
      await _downloadInvoice(ctx);
    }
  }

  Future<void> _showSavedInvoicesSheet(BuildContext ctx) async {
    var invoices = await loadSavedInvoices();
    if (!ctx.mounted) return;

    await showModalBottomSheet<void>(
      context: ctx,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0B1020),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
      builder: (sheetCtx) => StatefulBuilder(
        builder: (sheetCtx, setSheet) {
          Future<void> reload() async {
            invoices = await loadSavedInvoices();
            final count = await savedInvoiceCount();
            setSheet(() {});
            if (mounted) setState(() => _savedCount = count);
          }

          return SafeArea(
            child: Padding(
              padding: EdgeInsets.only(
                left: 16,
                right: 16,
                top: 12,
                bottom: MediaQuery.of(sheetCtx).viewInsets.bottom + 16,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
                      const Icon(Icons.receipt_long_rounded, color: Color(0xFF10B981)),
                      const SizedBox(width: 8),
                      const Expanded(
                        child: Text(
                          'Saved Invoices',
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
                        ),
                      ),
                      IconButton(
                        onPressed: () => Navigator.pop(sheetCtx),
                        icon: const Icon(Icons.close, color: Colors.white54),
                      ),
                    ],
                  ),
                  Text(
                    'Stored on this device only · unpaid invoices stay until you delete them',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11),
                  ),
                  const SizedBox(height: 12),
                  if (invoices.isEmpty)
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 28),
                      child: Column(
                        children: [
                          Icon(Icons.receipt_outlined, size: 48, color: Colors.white.withValues(alpha: 0.15)),
                          const SizedBox(height: 10),
                          Text(
                            'No saved invoices yet',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontWeight: FontWeight.w700),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'Tap Save Invoice to keep one here.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 12),
                          ),
                        ],
                      ),
                    )
                  else
                    ConstrainedBox(
                      constraints: BoxConstraints(maxHeight: MediaQuery.of(sheetCtx).size.height * 0.55),
                      child: ListView.separated(
                        shrinkWrap: true,
                        itemCount: invoices.length,
                        separatorBuilder: (_, __) => const SizedBox(height: 8),
                        itemBuilder: (_, i) {
                          final inv = invoices[i];
                          final id = (inv['id'] ?? '').toString();
                          final no = (inv['invoiceNo'] ?? '—').toString();
                          final client = (inv['clientName'] ?? 'Client').toString();
                          final item = (inv['item'] ?? inv['itemName'] ?? '').toString();
                          final sub = inv['subtotal'];
                          final amount = sub is num ? sub.toDouble() : double.tryParse('$sub') ?? 0;
                          final paid = inv['isPaid'] == true;
                          return Container(
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              color: const Color(0xFF12182A),
                              borderRadius: BorderRadius.circular(12),
                              border: Border.all(
                                color: paid ? Colors.white12 : const Color(0xFF10B981).withValues(alpha: 0.35),
                              ),
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            'Invoice #$no',
                                            style: const TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w800,
                                              fontSize: 15,
                                            ),
                                          ),
                                          Text(
                                            client,
                                            style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 13),
                                          ),
                                          if (item.isNotEmpty)
                                            Text(
                                              item,
                                              style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
                                            ),
                                        ],
                                      ),
                                    ),
                                    Column(
                                      crossAxisAlignment: CrossAxisAlignment.end,
                                      children: [
                                        Text(
                                          '\$${amount.toStringAsFixed(2)}',
                                          style: const TextStyle(
                                            color: Color(0xFF34D399),
                                            fontWeight: FontWeight.w900,
                                            fontSize: 16,
                                          ),
                                        ),
                                        const SizedBox(height: 4),
                                        Container(
                                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                          decoration: BoxDecoration(
                                            color: paid ? Colors.white10 : const Color(0xFFF97316).withValues(alpha: 0.15),
                                            borderRadius: BorderRadius.circular(10),
                                          ),
                                          child: Text(
                                            paid ? 'Paid' : 'Unpaid',
                                            style: TextStyle(
                                              color: paid ? Colors.white54 : const Color(0xFFF97316),
                                              fontSize: 10,
                                              fontWeight: FontWeight.w800,
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 10),
                                Row(
                                  children: [
                                    Expanded(
                                      child: OutlinedButton(
                                        onPressed: () {
                                          _applyEntry(inv);
                                          Navigator.pop(sheetCtx);
                                          ScaffoldMessenger.of(ctx).showSnackBar(
                                            const SnackBar(content: Text('Invoice loaded into editor.')),
                                          );
                                        },
                                        child: const Text('Open'),
                                      ),
                                    ),
                                    const SizedBox(width: 8),
                                    Expanded(
                                      child: OutlinedButton.icon(
                                        onPressed: () async {
                                          final tpl = ngmyNormalizeInvoiceTemplateId((inv['template'] ?? 'modern').toString());
                                          if (widget.config != null) {
                                            if (!ctx.mounted) return;
                                            final ok = await NgmyInvoicePayments.ensureSaveOrDownloadAllowed(
                                              context: ctx,
                                              user: _effectiveUser,
                                              config: widget.config,
                                              templateId: tpl,
                                              onCharge: widget.onCharge ?? (_, __) async => false,
                                              onGranted: widget.onDataChanged,
                                              invoiceRef: NgmyInvoicePayments.invoiceRefFromEntry(
                                                Map<String, dynamic>.from(inv),
                                              ),
                                            );
                                            if (!ok) return;
                                            if (mounted) setState(() {});
                                          }
                                          _applyEntry(inv);
                                          await Future.delayed(const Duration(milliseconds: 250));
                                          if (ctx.mounted) await _showDownloadOrPrintOptions(ctx);
                                        },
                                        icon: const Icon(Icons.download_rounded, size: 16),
                                        label: const Text('Download'),
                                      ),
                                    ),
                                    IconButton(
                                      onPressed: () async {
                                        final ok = await showDialog<bool>(
                                          context: sheetCtx,
                                          builder: (dCtx) => AlertDialog(
                                            title: const Text('Delete invoice?'),
                                            content: Text('Remove invoice #$no from this device?'),
                                            actions: [
                                              TextButton(onPressed: () => Navigator.pop(dCtx, false), child: const Text('Cancel')),
                                              TextButton(onPressed: () => Navigator.pop(dCtx, true), child: const Text('Delete')),
                                            ],
                                          ),
                                        );
                                        if (ok == true) {
                                          await deleteSavedInvoice(id);
                                          await reload();
                                        }
                                      },
                                      icon: const Icon(Icons.delete_outline, color: Color(0xFFEF4444)),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          );
                        },
                      ),
                    ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }

  NgmyInvoicePreviewData _previewData(double subtotal, {bool locked = false}) {
    if (locked) {
      return NgmyInvoicePreviewData(
        templateId: _templateId,
        businessName: 'Your Business Name',
        bizStreet: '123 Main Street',
        bizCityStateZip: 'City, ST 00000',
        bizPhone: '(555) 555-5555',
        invoiceNo: 'INV-0000',
        issuedDate: _issuedDateC.text,
        dueDate: _dueDateC.text,
        clientName: 'Client Name',
        clientEmail: 'client@email.com',
        itemName: 'Service or item',
        itemPrice: '0.00',
        itemQty: '1',
        itemDiscount: '0',
        itemDesc: 'Description',
        paymentInfo: 'Payment info',
        subtotal: 0,
        isPaid: false,
        providerSignature: const [],
        clientSignature: const [],
      );
    }
    return NgmyInvoicePreviewData(
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
      subtotal: subtotal,
      isPaid: _invoicePaid,
      providerSignature: _providerSignaturePoints,
      clientSignature: _clientSignaturePoints,
      providerPhotoBytes: _providerPhotoBytes,
    );
  }

  Future<void> _openFullscreenSignature({
    required BuildContext ctx,
    required String title,
    required List<Offset?> target,
  }) async {
    await showNgmyFullscreenSignature(
      ctx,
      title: title,
      points: target,
      onSave: (saved, canvasSize, color, strokeWidth) {
        target
          ..clear()
          ..addAll(normalizeSignaturePoints(saved, canvasSize));
        setState(() {});
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final subtotal = _subtotal();
    final screen = MediaQuery.of(context).size;
    final locked = _contentLocked();
    _schedulePrintPdfWarm(subtotal);

    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
      backgroundColor: isDark ? const Color(0xFF0A1020) : Colors.white,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      child: SizedBox(
        width: math.min(1250, screen.width - 16),
        height: screen.height * 0.95,
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  const Icon(Icons.receipt_long_rounded),
                  const SizedBox(width: 8),
                  const Expanded(
                    child: Text('Create Invoice', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18)),
                  ),
                  IconButton(
                    tooltip: 'Saved invoices',
                    onPressed: () => _showSavedInvoicesSheet(context).then((_) async {
                      _savedCount = await savedInvoiceCount();
                      if (mounted) setState(() {});
                    }),
                    icon: Badge(
                      isLabelVisible: _savedCount > 0,
                      label: Text('$_savedCount'),
                      child: const Icon(Icons.folder_special_rounded, color: Color(0xFF10B981)),
                    ),
                  ),
                  TextButton(onPressed: () => Navigator.pop(context), child: const Text('Close')),
                ],
              ),
              const Text('Choose Template', style: TextStyle(fontWeight: FontWeight.w700)),
              const SizedBox(height: 6),
              ngmyInvoiceTemplatePicker(
                context: context,
                selectedId: _templateId,
                onSelect: (id) => setState(() => _templateId = id),
              ),
              if (ngmyIsEssentialLuxuryTemplate(_templateId)) ...[
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: isDark ? const Color(0xFF121726) : const Color(0xFFF1F5F9),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: const Color(0xFFD4AF37).withValues(alpha: 0.35)),
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 52,
                        height: 52,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(color: const Color(0xFFD4AF37), width: 2),
                          image: _providerPhotoBytes != null
                              ? DecorationImage(image: MemoryImage(_providerPhotoBytes!), fit: BoxFit.cover)
                              : null,
                          color: const Color(0xFF1A1A1A),
                        ),
                        child: _providerPhotoBytes == null
                            ? const Icon(Icons.person_rounded, color: Colors.white54)
                            : null,
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text('Your photo', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13)),
                            Text(
                              'Appears on Essential Luxury templates (broadcast style).',
                              style: TextStyle(fontSize: 10, color: isDark ? Colors.white60 : Colors.black54),
                            ),
                          ],
                        ),
                      ),
                      TextButton.icon(
                        onPressed: _pickProviderPhoto,
                        icon: const Icon(Icons.add_a_photo_outlined, size: 18),
                        label: const Text('Add'),
                      ),
                      if (_providerPhotoBytes != null)
                        IconButton(
                          tooltip: 'Remove photo',
                          onPressed: () {
                            setState(() => _providerPhotoBytes = null);
                            _persistProviderProfile();
                          },
                          icon: const Icon(Icons.close_rounded, size: 18),
                        ),
                    ],
                  ),
                ),
              ],
              if (locked) ...[
                const SizedBox(height: 10),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: const Color(0xFF7C3AED).withValues(alpha: 0.12),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: const Color(0xFF7C3AED).withValues(alpha: 0.45)),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.lock_rounded, color: Color(0xFFA78BFA), size: 20),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          'Premium/Luxury locked — pay to edit, add your photo, save, or download. You can unlock anytime.',
                          style: TextStyle(fontSize: 11, color: isDark ? Colors.white70 : Colors.black87, height: 1.35),
                        ),
                      ),
                      TextButton(
                        onPressed: () => _ensureTemplatePaid(context),
                        child: const Text('Unlock'),
                      ),
                    ],
                  ),
                ),
              ],
              const SizedBox(height: 12),
              _lockedWrap(
                context,
                Row(
                  children: [
                    Expanded(child: TextField(controller: _invoiceNoC, decoration: _fieldDec('Invoice #', locked: locked))),
                    const SizedBox(width: 8),
                    Expanded(child: TextField(controller: _issuedDateC, decoration: _fieldDec('Issued Date', locked: locked))),
                    const SizedBox(width: 8),
                    Expanded(child: TextField(controller: _dueDateC, decoration: _fieldDec('Due Date', locked: locked))),
                  ],
                ),
              ),
              const SizedBox(height: 10),
              _lockedWrap(
                context,
                TextField(
                  controller: _bizNameC,
                  decoration: _fieldDec('Your Business Name (auto-saved)', locked: locked),
                  onChanged: (_) => setState(() {}),
                ),
              ),
              const SizedBox(height: 8),
              _lockedWrap(
                context,
                TextField(
                  controller: _bizStreetC,
                  decoration: _fieldDec('Street Address (auto-saved)', locked: locked),
                  onChanged: (_) => setState(() {}),
                ),
              ),
              const SizedBox(height: 8),
              _lockedWrap(
                context,
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: _bizCityStateZipC,
                        decoration: _fieldDec('City, State ZIP (auto-saved)', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: TextField(
                        controller: _bizPhoneC,
                        decoration: _fieldDec('Phone Number (auto-saved)', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 10),
              _lockedWrap(
                context,
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: _clientNameC,
                        decoration: _fieldDec('Bill To (Client Name)', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: TextField(
                        controller: _clientEmailC,
                        decoration: _fieldDec('Client Email', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 10),
              _lockedWrap(
                context,
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: _itemNameC,
                        decoration: _fieldDec('Item name', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: TextField(
                        controller: _itemPriceC,
                        keyboardType: TextInputType.number,
                        decoration: _fieldDec('Price', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: TextField(
                        controller: _itemQtyC,
                        keyboardType: TextInputType.number,
                        decoration: _fieldDec('Qty', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: TextField(
                        controller: _itemDiscountC,
                        keyboardType: TextInputType.number,
                        decoration: _fieldDec('Discount %', locked: locked),
                        onChanged: (_) => setState(() {}),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 8),
              _lockedWrap(
                context,
                TextField(
                  controller: _itemDescC,
                  decoration: _fieldDec('Description', locked: locked),
                  onChanged: (_) => setState(() {}),
                ),
              ),
              const SizedBox(height: 8),
              _lockedWrap(
                context,
                TextField(
                  controller: _paymentInfoC,
                  maxLines: 2,
                  decoration: _fieldDec('Notes & Payment Instructions (auto-saved)', locked: locked),
                  onChanged: (_) => setState(() {}),
                ),
              ),
              const SizedBox(height: 12),
              _lockedWrap(
                context,
                Row(
                  children: [
                    Expanded(
                      child: NgmyInvoiceSignaturePad(
                        title: 'Service Provider Signature',
                        points: _providerSignaturePoints,
                        onChanged: () => setState(() {}),
                        onClear: () => setState(() => _providerSignaturePoints.clear()),
                        onFullscreen: () => _openFullscreenSignature(
                          ctx: context,
                          title: 'Service Provider Signature',
                          target: _providerSignaturePoints,
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: NgmyInvoiceSignaturePad(
                        title: 'Client Signature',
                        points: _clientSignaturePoints,
                        onChanged: () => setState(() {}),
                        onClear: () => setState(() => _clientSignaturePoints.clear()),
                        onFullscreen: () => _openFullscreenSignature(
                          ctx: context,
                          title: 'Client Signature',
                          target: _clientSignaturePoints,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 8),
              _lockedWrap(
                context,
                SwitchListTile(
                  value: _invoicePaid,
                  onChanged: (v) => setState(() => _invoicePaid = v),
                  title: const Text('Mark invoice as paid'),
                  subtitle: const Text('Paid invoices auto-delete from local saves after 5 days.'),
                  contentPadding: EdgeInsets.zero,
                ),
              ),
              const SizedBox(height: 8),
              NgmyInvoiceProtectedPreview(
                locked: locked,
                child: RepaintBoundary(
                  key: _previewKey,
                  child: NgmyInvoicePreview(data: _previewData(subtotal, locked: locked)),
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Offline ready: all invoice calculations/templates are local and work without internet.',
                style: TextStyle(fontSize: 11),
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () async {
                        if (!await _ensureCanSaveOrDownload(context)) return;
                        final count = await _saveInvoice(context, subtotal);
                        setState(() => _savedCount = count);
                      },
                      icon: const Icon(Icons.save_alt_rounded),
                      label: const Text('Save Invoice'),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: FilledButton.icon(
                      onPressed: () async {
                        if (!await _ensureCanSaveOrDownload(context)) return;
                        await _showDownloadOrPrintOptions(context);
                      },
                      icon: const Icon(Icons.download_rounded),
                      label: const Text('Download'),
                    ),
                  ),
                ],
              ),
              const Padding(
                padding: EdgeInsets.only(top: 6),
                child: Text(
                  'Tip: signatures are optional for download, but recommended.',
                  style: TextStyle(fontSize: 11),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _InvoiceExportDialog extends StatelessWidget {
  const _InvoiceExportDialog({
    required this.onDownload,
    required this.onPrint,
    required this.onCancel,
  });

  final VoidCallback onDownload;
  final VoidCallback onPrint;
  final VoidCallback onCancel;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF14B8A6), Color(0xFF0D9488), Color(0xFF0F766E)],
          ),
          boxShadow: [
            BoxShadow(color: const Color(0xFF14B8A6).withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 10)),
          ],
        ),
        child: Material(
          color: Colors.transparent,
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  children: [
                    Container(
                      width: 36,
                      height: 36,
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.2),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: const Icon(Icons.receipt_long_rounded, color: Colors.white, size: 20),
                    ),
                    const SizedBox(width: 10),
                    const Expanded(
                      child: Text(
                        'Export Invoice',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16),
                      ),
                    ),
                    InkWell(
                      onTap: onCancel,
                      borderRadius: BorderRadius.circular(8),
                      child: Padding(
                        padding: const EdgeInsets.all(4),
                        child: Icon(Icons.close_rounded, size: 18, color: Colors.white.withValues(alpha: 0.85)),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Row(
                  children: [
                    Expanded(
                      child: _InvoiceExportAction(
                        icon: Icons.download_rounded,
                        label: 'Download',
                        filled: false,
                        onTap: onDownload,
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: _InvoiceExportAction(
                        icon: Icons.print_rounded,
                        label: 'Print',
                        filled: true,
                        onTap: onPrint,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                TextButton(
                  onPressed: onCancel,
                  style: TextButton.styleFrom(
                    minimumSize: const Size(0, 32),
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  ),
                  child: Text(
                    'Cancel',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 12, fontWeight: FontWeight.w600),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _InvoiceExportAction extends StatelessWidget {
  const _InvoiceExportAction({
    required this.icon,
    required this.label,
    required this.filled,
    required this.onTap,
  });

  final IconData icon;
  final String label;
  final bool filled;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Ink(
          padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            color: filled ? Colors.white : Colors.white.withValues(alpha: 0.14),
            border: Border.all(color: Colors.white.withValues(alpha: filled ? 0.0 : 0.35)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 20, color: filled ? const Color(0xFF0F766E) : Colors.white),
              const SizedBox(height: 4),
              Text(
                label,
                style: TextStyle(
                  color: filled ? const Color(0xFF0F766E) : Colors.white,
                  fontWeight: FontWeight.w800,
                  fontSize: 13,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
