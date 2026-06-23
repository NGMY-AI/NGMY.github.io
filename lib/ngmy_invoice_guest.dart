import 'package:flutter/material.dart';

import 'ngmy_app_builder_invoice_templates.dart';
import 'ngmy_invoice_launch_stub.dart' if (dart.library.html) 'ngmy_invoice_launch_web.dart';
import 'ngmy_invoice_publish_registry.dart';

String? ngmyPublishedInvoiceSlugFromLaunch() => ngmyReadInvoiceSlugFromLaunchUrl();

bool ngmyIsGuestPublishedInvoiceLaunch() {
  final slug = ngmyPublishedInvoiceSlugFromLaunch();
  return slug != null && slug.trim().isNotEmpty;
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
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF2563EB), brightness: Brightness.dark),
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

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: Color(0xFF111827),
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(color: Colors.white),
              SizedBox(height: 16),
              Text('Opening invoice…', style: TextStyle(fontWeight: FontWeight.w700, color: Colors.white)),
            ],
          ),
        ),
      );
    }

    if (_entry == null || _error != null) {
      return Scaffold(
        backgroundColor: const Color(0xFF111827),
        appBar: AppBar(title: const Text('Invoice not found'), backgroundColor: const Color(0xFF1F2937)),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.link_off_rounded, size: 56, color: Colors.white38),
                const SizedBox(height: 12),
                Text(_error ?? 'Not found', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70)),
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
        backgroundColor: const Color(0xFF111827),
        appBar: AppBar(title: const Text('Invoice link expired'), backgroundColor: const Color(0xFF1F2937)),
        body: const Center(
          child: Padding(
            padding: EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.schedule_rounded, size: 56, color: Colors.white38),
                SizedBox(height: 12),
                Text(
                  'This invoice link has expired. Ask the sender for a new link.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white70),
                ),
              ],
            ),
          ),
        ),
      );
    }

    final record = Map<String, dynamic>.from(_entry!['data'] as Map);
    final templateId = (record['templateId'] ?? 'classic').toString();
    final payLabel = (record['payLabel'] ?? '').toString().trim();

    return Scaffold(
      backgroundColor: const Color(0xFF111827),
      appBar: AppBar(title: const Text('Invoice'), backgroundColor: const Color(0xFF1F2937)),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 480),
            // Light mode — matches what users see when they create an
            // invoice in App Builder, regardless of this page's dark chrome.
            child: ngmyAppBuilderInvoicePreview(
              templateId: templateId,
              record: record,
              theme: const Color(0xFF2563EB),
              isDark: false,
              payLabel: payLabel.isEmpty ? null : payLabel,
              showPaymentLink: false,
            ),
          ),
        ),
      ),
    );
  }
}
