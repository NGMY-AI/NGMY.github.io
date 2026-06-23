import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_invoice_launch_stub.dart' if (dart.library.html) 'ngmy_invoice_launch_web.dart';
import 'ngmy_invoice_publish_registry.dart';
import 'ngmy_invoice_templates.dart';
import 'ngmy_qr_generator.dart';

String? ngmyPublishedInvoiceSlugFromLaunch() => ngmyReadInvoiceSlugFromLaunchUrl();

bool ngmyIsGuestPublishedInvoiceLaunch() {
  final slug = ngmyPublishedInvoiceSlugFromLaunch();
  return slug != null && slug.trim().isNotEmpty;
}

enum NgmyInvoicePayButtonStyle { solid, gradient, outline, pill }

NgmyInvoicePayButtonStyle ngmyPayButtonStyleFromName(String? name) {
  switch (name) {
    case 'gradient':
      return NgmyInvoicePayButtonStyle.gradient;
    case 'outline':
      return NgmyInvoicePayButtonStyle.outline;
    case 'pill':
      return NgmyInvoicePayButtonStyle.pill;
    default:
      return NgmyInvoicePayButtonStyle.solid;
  }
}

String ngmyPayButtonStyleName(NgmyInvoicePayButtonStyle style) => style.name;

/// Renders a customizable "pay" call-to-action below an invoice — used both in
/// the admin's live preview and on the public guest pay page.
class NgmyInvoicePayButton extends StatelessWidget {
  const NgmyInvoicePayButton({
    super.key,
    required this.label,
    required this.color,
    required this.style,
    this.onTap,
  });

  final String label;
  final Color color;
  final NgmyInvoicePayButtonStyle style;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final radius = style == NgmyInvoicePayButtonStyle.pill ? 999.0 : 12.0;
    BoxDecoration decoration;
    Color textColor;
    switch (style) {
      case NgmyInvoicePayButtonStyle.outline:
        decoration = BoxDecoration(
          borderRadius: BorderRadius.circular(radius),
          border: Border.all(color: color, width: 2),
        );
        textColor = color;
      case NgmyInvoicePayButtonStyle.gradient:
        decoration = BoxDecoration(
          borderRadius: BorderRadius.circular(radius),
          gradient: LinearGradient(colors: [color, Color.lerp(color, Colors.black, 0.35)!]),
          boxShadow: [BoxShadow(color: color.withOpacity(0.45), blurRadius: 14, offset: const Offset(0, 5))],
        );
        textColor = Colors.white;
      case NgmyInvoicePayButtonStyle.pill:
        decoration = BoxDecoration(
          borderRadius: BorderRadius.circular(radius),
          color: color,
          boxShadow: [BoxShadow(color: color.withOpacity(0.4), blurRadius: 10, offset: const Offset(0, 4))],
        );
        textColor = Colors.white;
      case NgmyInvoicePayButtonStyle.solid:
        decoration = BoxDecoration(borderRadius: BorderRadius.circular(radius), color: color);
        textColor = Colors.white;
    }
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(radius),
        child: Ink(
          decoration: decoration,
          padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 14),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.payments_rounded, color: textColor, size: 18),
              const SizedBox(width: 8),
              Text(label, style: TextStyle(color: textColor, fontWeight: FontWeight.w800, fontSize: 14)),
            ],
          ),
        ),
      ),
    );
  }
}

/// Builds NgmyInvoicePreviewData from a published-invoice cloud entry's `data` map.
NgmyInvoicePreviewData ngmyInvoicePreviewDataFromMap(Map<String, dynamic> m) {
  return NgmyInvoicePreviewData(
    templateId: (m['template'] ?? 'modern').toString(),
    businessName: (m['business'] ?? '').toString(),
    bizStreet: (m['street'] ?? '').toString(),
    bizCityStateZip: (m['cityStateZip'] ?? '').toString(),
    bizPhone: (m['phone'] ?? '').toString(),
    invoiceNo: (m['invoiceNo'] ?? '').toString(),
    issuedDate: (m['issuedDate'] ?? '').toString(),
    dueDate: (m['dueDate'] ?? '').toString(),
    clientName: (m['clientName'] ?? '').toString(),
    clientEmail: (m['clientEmail'] ?? '').toString(),
    itemName: (m['item'] ?? '').toString(),
    itemPrice: (m['itemPrice'] ?? '0').toString(),
    itemQty: (m['itemQty'] ?? '1').toString(),
    itemDiscount: (m['itemDiscount'] ?? '0').toString(),
    itemDesc: (m['description'] ?? '').toString(),
    paymentInfo: (m['paymentInfo'] ?? '').toString(),
    subtotal: (m['subtotal'] is num) ? (m['subtotal'] as num).toDouble() : 0,
    isPaid: m['isPaid'] == true,
    providerSignature: const [],
    clientSignature: const [],
  );
}

/// Standalone shell — published invoice pay links open here with zero NGMY login.
class NgmyGuestPublishedInvoice extends StatelessWidget {
  final String slug;

  const NgmyGuestPublishedInvoice({super.key, required this.slug});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Invoice',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF16A34A)),
        useMaterial3: true,
      ),
      home: NgmyGuestInvoiceHostScreen(slug: slug),
    );
  }
}

class NgmyGuestInvoiceHostScreen extends StatefulWidget {
  final String slug;

  const NgmyGuestInvoiceHostScreen({super.key, required this.slug});

  @override
  State<NgmyGuestInvoiceHostScreen> createState() => _NgmyGuestInvoiceHostScreenState();
}

class _NgmyGuestInvoiceHostScreenState extends State<NgmyGuestInvoiceHostScreen> {
  Map<String, dynamic>? _entry;
  String? _error;
  bool _loading = true;
  bool _expired = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _error = null;
    });
    for (var attempt = 0; attempt < 4; attempt++) {
      final entry = await NgmyInvoicePublishRegistry.fetchBySlug(widget.slug);
      if (!mounted) return;
      if (entry != null) {
        final expiresAtRaw = (entry['expiresAt'] ?? '').toString();
        final expiresAt = expiresAtRaw.isEmpty ? null : DateTime.tryParse(expiresAtRaw);
        final expired = expiresAt != null && DateTime.now().toUtc().isAfter(expiresAt);
        setState(() {
          _entry = entry;
          _expired = expired;
          _loading = false;
        });
        return;
      }
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 500 * (attempt + 1)));
    }
    if (!mounted) return;
    setState(() {
      _loading = false;
      _error = 'We could not open this invoice link. Ask the sender to re-share it.';
    });
  }

  Future<void> _openPayLink(String url) async {
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: Colors.white,
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(),
              SizedBox(height: 16),
              Text('Opening invoice…', style: TextStyle(fontWeight: FontWeight.w700)),
            ],
          ),
        ),
      );
    }

    if (_entry == null || _error != null) {
      return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(title: const Text('Invoice not found')),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.link_off_rounded, size: 56, color: Colors.grey),
                const SizedBox(height: 12),
                Text(_error ?? 'Not found', textAlign: TextAlign.center),
                const SizedBox(height: 16),
                FilledButton(onPressed: _load, child: const Text('Try again')),
              ],
            ),
          ),
        ),
      );
    }

    if (_expired) {
      return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(title: const Text('Invoice link expired')),
        body: const Center(
          child: Padding(
            padding: EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.schedule_rounded, size: 56, color: Colors.grey),
                SizedBox(height: 12),
                Text(
                  'This invoice link has expired. Ask the sender for a new link.',
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ),
      );
    }

    final data = Map<String, dynamic>.from(_entry!['data'] as Map);
    final previewData = ngmyInvoicePreviewDataFromMap(data);
    final payLabel = (data['payButtonLabel'] ?? 'Pay Now').toString();
    final payUrl = (data['payButtonUrl'] ?? '').toString().trim();
    final showQr = data['payShowQr'] == true && payUrl.isNotEmpty;
    final style = ngmyPayButtonStyleFromName((data['payButtonStyle'] ?? 'solid').toString());
    final template = ngmyInvoiceTemplateById(previewData.templateId);
    final accent = template?.accent ?? const Color(0xFF16A34A);

    return Scaffold(
      backgroundColor: Theme.of(context).brightness == Brightness.dark ? const Color(0xFF0A1020) : const Color(0xFFF1F5F9),
      appBar: AppBar(title: const Text('Invoice')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 520),
            child: Column(
              children: [
                NgmyInvoicePreview(data: previewData),
                if (payUrl.isNotEmpty) ...[
                  const SizedBox(height: 18),
                  NgmyInvoicePayButton(
                    label: payLabel,
                    color: accent,
                    style: style,
                    onTap: () => _openPayLink(payUrl),
                  ),
                  if (showQr) ...[
                    const SizedBox(height: 14),
                    const Text('Or scan to pay', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12)),
                    const SizedBox(height: 8),
                    NgmyBrandedQrWidget(data: payUrl, compact: true),
                  ],
                ],
                const SizedBox(height: 24),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
