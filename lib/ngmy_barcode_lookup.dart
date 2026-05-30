import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

// Web on phones still has a camera — only desktop web should use manual entry.
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'package:http/http.dart' as http;
import 'package:mobile_scanner/mobile_scanner.dart';

import 'ngmy_nav.dart';

/// Result of looking up a barcode on public product databases.
class NgmyBarcodeProduct {
  final String barcode;
  final String title;
  final String brand;
  final String description;
  final String? imageUrl;
  final String source;

  const NgmyBarcodeProduct({
    required this.barcode,
    required this.title,
    required this.brand,
    required this.description,
    this.imageUrl,
    required this.source,
  });
}

String _normalizeBarcode(String raw) {
  final digits = raw.replaceAll(RegExp(r'\D'), '');
  return digits;
}

Future<NgmyBarcodeProduct?> lookupBarcodeProduct(String rawCode) async {
  final code = _normalizeBarcode(rawCode);
  if (code.length < 8) return null;

  final off = await _lookupOpenFoodFacts(code);
  if (off != null) return off;

  final upc = await _lookupUpcItemDb(code);
  if (upc != null) return upc;

  return null;
}

Future<NgmyBarcodeProduct?> _lookupOpenFoodFacts(String code) async {
  try {
    final uri = Uri.parse('https://world.openfoodfacts.org/api/v2/product/$code.json');
    final res = await http.get(uri).timeout(const Duration(seconds: 12));
    if (res.statusCode != 200) return null;
    final data = jsonDecode(res.body);
    if (data is! Map || data['status'] != 1) return null;
    final product = data['product'];
    if (product is! Map) return null;
    final name = (product['product_name'] ?? product['product_name_en'] ?? '').toString().trim();
    if (name.isEmpty) return null;
    final brand = (product['brands'] ?? '').toString().trim();
    final qty = (product['quantity'] ?? '').toString().trim();
    final categories = (product['categories'] ?? '').toString().trim();
    final image = (product['image_front_url'] ?? product['image_url'] ?? '').toString().trim();
    final descParts = <String>[
      if (brand.isNotEmpty) 'Brand: $brand',
      if (qty.isNotEmpty) 'Size: $qty',
      if (categories.isNotEmpty) 'Category: ${categories.split(',').first.trim()}',
    ];
    return NgmyBarcodeProduct(
      barcode: code,
      title: name,
      brand: brand.isEmpty ? '—' : brand,
      description: descParts.isEmpty ? 'Found on Open Food Facts.' : descParts.join('\n'),
      imageUrl: image.isEmpty ? null : image,
      source: 'Open Food Facts',
    );
  } catch (e) {
    debugPrint('[barcode] Open Food Facts error: $e');
    return null;
  }
}

Future<NgmyBarcodeProduct?> _lookupUpcItemDb(String code) async {
  try {
    final uri = Uri.parse('https://api.upcitemdb.com/prod/trial/lookup?upc=$code');
    final res = await http
        .get(uri, headers: {'Accept': 'application/json', 'Content-Type': 'application/json'})
        .timeout(const Duration(seconds: 12));
    if (res.statusCode != 200) return null;
    final data = jsonDecode(res.body);
    if (data is! Map) return null;
    final items = data['items'];
    if (items is! List || items.isEmpty) return null;
    final item = items.first;
    if (item is! Map) return null;
    final title = (item['title'] ?? item['description'] ?? '').toString().trim();
    if (title.isEmpty) return null;
    final brand = (item['brand'] ?? '').toString().trim();
    final category = (item['category'] ?? '').toString().trim();
    final images = item['images'];
    String? imageUrl;
    if (images is List && images.isNotEmpty) {
      imageUrl = images.first.toString();
    }
    return NgmyBarcodeProduct(
      barcode: code,
      title: title,
      brand: brand.isEmpty ? '—' : brand,
      description: category.isEmpty ? 'Found on UPC database.' : 'Category: $category',
      imageUrl: imageUrl,
      source: 'UPC Item DB',
    );
  } catch (e) {
    debugPrint('[barcode] UPCitemdb error: $e');
    return null;
  }
}

/// Full-screen scanner + product result (Purchases tab).
class NgmyBarcodeScannerPage extends StatefulWidget {
  const NgmyBarcodeScannerPage({super.key});

  @override
  State<NgmyBarcodeScannerPage> createState() => _NgmyBarcodeScannerPageState();
}

class _NgmyBarcodeScannerPageState extends State<NgmyBarcodeScannerPage> {
  static const Color _accent = Color(0xFF7C3AED);

  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.normal,
    facing: CameraFacing.back,
    formats: const [BarcodeFormat.all],
  );

  bool _handling = false;
  bool _torchOn = false;
  NgmyBarcodeProduct? _result;
  String? _lastCode;
  String? _error;
  bool _loading = false;

  @override
  void dispose() {
    _camera.dispose();
    super.dispose();
  }

  Future<void> _lookupCode(String code) async {
    if (_handling || code.trim().isEmpty) return;
    if (code == _lastCode && (_result != null || _loading)) return;
    _handling = true;
    _lastCode = code;
    setState(() {
      _loading = true;
      _error = null;
      _result = null;
    });
    try {
      final product = await lookupBarcodeProduct(code);
      if (!mounted) return;
      setState(() {
        _loading = false;
        _result = product;
        _error = product == null ? 'No product found for barcode $code. Try another code or enter it manually.' : null;
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Lookup failed. Check your connection and try again.';
      });
    } finally {
      _handling = false;
    }
  }

  void _onDetect(BarcodeCapture capture) {
    final barcodes = capture.barcodes;
    if (barcodes.isEmpty) return;
    final raw = barcodes.first.rawValue;
    if (raw == null || raw.trim().isEmpty) return;
    _lookupCode(raw.trim());
  }

  Future<void> _enterBarcodeManually() async {
    final c = TextEditingController(text: _lastCode ?? '');
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final entered = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: isDark ? const Color(0xFF121726) : Colors.white,
        title: Text('Enter barcode', style: TextStyle(color: isDark ? Colors.white : Colors.black)),
        content: TextField(
          controller: c,
          keyboardType: TextInputType.number,
          autofocus: true,
          style: TextStyle(color: isDark ? Colors.white : Colors.black),
          decoration: const InputDecoration(
            hintText: 'UPC / EAN number',
            prefixIcon: Icon(Icons.numbers_rounded),
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          ElevatedButton(
            onPressed: () => Navigator.pop(ctx, c.text.trim()),
            style: ElevatedButton.styleFrom(backgroundColor: _accent),
            child: const Text('Look up'),
          ),
        ],
      ),
    );
    if (entered != null && entered.isNotEmpty) {
      await _lookupCode(entered);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final useCamera = barcode_platform.ngmyBarcodeUseCamera;

    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: const Color(0xFF0B0F1A),
        foregroundColor: Colors.white,
        title: const Text('Scan product', style: TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          if (useCamera)
            IconButton(
              icon: Icon(_torchOn ? Icons.flash_on : Icons.flash_off),
              onPressed: () async {
                await _camera.toggleTorch();
                setState(() => _torchOn = !_torchOn);
              },
            ),
          IconButton(
            icon: const Icon(Icons.keyboard_rounded),
            tooltip: 'Type barcode',
            onPressed: _enterBarcodeManually,
          ),
        ],
      ),
      body: Column(
        children: [
          if (useCamera)
            Expanded(
              flex: 5,
              child: Stack(
                fit: StackFit.expand,
                children: [
                  MobileScanner(controller: _camera, onDetect: _onDetect),
                  Center(
                    child: Container(
                      width: 260,
                      height: 140,
                      decoration: BoxDecoration(
                        border: Border.all(color: _accent, width: 3),
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                  ),
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: 12,
                    child: Text(
                      'Point at the barcode — we will look it up automatically',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white.withOpacity(0.9), fontSize: 12, fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
            )
          else
            Expanded(
              flex: 3,
              child: Container(
                color: const Color(0xFF121726),
                padding: const EdgeInsets.all(24),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(Icons.qr_code_scanner_rounded, size: 64, color: _accent),
                    const SizedBox(height: 16),
                    const Text(
                      'Camera scan works in the NGMY app on your phone.\nOn web, enter the barcode number below.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white70, height: 1.4),
                    ),
                    const SizedBox(height: 20),
                    ElevatedButton.icon(
                      onPressed: _enterBarcodeManually,
                      icon: const Icon(Icons.edit_rounded),
                      label: const Text('Enter barcode number'),
                      style: ElevatedButton.styleFrom(backgroundColor: _accent, foregroundColor: Colors.white),
                    ),
                  ],
                ),
              ),
            ),
          Expanded(
            flex: 4,
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF121726) : Colors.white,
                borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
              ),
              child: _buildResultPanel(isDark, useCamera: useCamera),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildResultPanel(bool isDark, {required bool useCamera}) {
    if (_loading) {
      return const Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CircularProgressIndicator(color: _accent),
            SizedBox(height: 12),
            Text('Searching product databases…', style: TextStyle(fontWeight: FontWeight.w600)),
          ],
        ),
      );
    }
    if (_result != null) {
      final p = _result!;
      return ListView(
        padding: const EdgeInsets.all(16),
        children: [
          if (p.imageUrl != null && p.imageUrl!.startsWith('http'))
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Image.network(p.imageUrl!, height: 160, fit: BoxFit.contain, errorBuilder: (_, __, ___) => const SizedBox.shrink()),
            ),
          const SizedBox(height: 12),
          Text(p.title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: isDark ? Colors.white : Colors.black87)),
          const SizedBox(height: 6),
          Text('Barcode: ${p.barcode}', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54)),
          const SizedBox(height: 8),
          Text('Brand: ${p.brand}', style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : Colors.black87)),
          const SizedBox(height: 8),
          Text(p.description, style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : Colors.black54)),
          const SizedBox(height: 8),
          Text('Source: ${p.source}', style: const TextStyle(fontSize: 11, color: _accent, fontWeight: FontWeight.w600)),
          const SizedBox(height: 16),
          OutlinedButton.icon(
            onPressed: () => setState(() {
              _result = null;
              _lastCode = null;
              _error = null;
            }),
            icon: const Icon(Icons.qr_code_scanner_rounded),
            label: const Text('Scan another item'),
          ),
        ],
      );
    }
    if (_error != null) {
      return ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Icon(Icons.info_outline, color: Colors.orange.shade700, size: 40),
          const SizedBox(height: 12),
          Text(_error!, style: TextStyle(color: isDark ? Colors.white70 : Colors.black87)),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: _enterBarcodeManually,
            style: ElevatedButton.styleFrom(backgroundColor: _accent, foregroundColor: Colors.white),
            child: const Text('Try manual entry'),
          ),
        ],
      );
    }
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Text(
          useCamera ? 'Scan a barcode to see the product name and details.' : 'Enter a barcode to look up the product.',
          textAlign: TextAlign.center,
          style: TextStyle(color: isDark ? Colors.white54 : Colors.black54),
        ),
      ),
    );
  }
}

void openNgmyBarcodeScanner(BuildContext context) {
  NgmyNavigator.push(context, const NgmyBarcodeScannerPage());
}
