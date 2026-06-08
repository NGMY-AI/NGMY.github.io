import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_barcode_lookup.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_nav.dart';
import 'ngmy_product_scanner_storage.dart';

typedef NgmyPriceScanApply = void Function(String name, double price, String productType);

/// Iron Triangle price calculator — product scan + local catalog (device storage only).
void openNgmyPriceProductScanner(BuildContext context, {NgmyPriceScanApply? onApplyPrice}) {
  NgmyNavigator.push(
    context,
    NgmyPriceProductScannerPage(onApplyPrice: onApplyPrice),
  );
}

class NgmyPriceProductScannerPage extends StatefulWidget {
  const NgmyPriceProductScannerPage({super.key, this.onApplyPrice});

  final NgmyPriceScanApply? onApplyPrice;

  @override
  State<NgmyPriceProductScannerPage> createState() => _NgmyPriceProductScannerPageState();
}

class _NgmyPriceProductScannerPageState extends State<NgmyPriceProductScannerPage> with SingleTickerProviderStateMixin {
  static const _accent = Color(0xFF10B981);
  static const _scanPurple = Color(0xFF7C3AED);

  late TabController _tabs;
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.unrestricted,
    facing: CameraFacing.back,
    formats: ngmyScannerBarcodeFormats,
  );

  bool _handling = false;
  bool _torchOn = false;
  bool _loading = false;
  bool _fromCatalog = false;
  String? _lastCode;
  String? _lastFormat;
  String? _error;
  NgmyBarcodeProduct? _online;
  NgmyLocalProductRecord? _local;
  List<NgmyLocalProductRecord> _catalog = [];
  DateTime? _lastDetectAt;

  final _nameC = TextEditingController();
  final _barcodeC = TextEditingController();
  final _typeC = TextEditingController();
  final _brandC = TextEditingController();
  final _priceC = TextEditingController();
  final _descC = TextEditingController();
  String? _editingId;

  @override
  void initState() {
    super.initState();
    _tabs = TabController(length: 2, vsync: this);
    _tabs.addListener(_onTabChanged);
    _reloadCatalog();
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      try {
        await _camera.start();
      } catch (_) {}
    });
  }

  void _onTabChanged() {
    if (_tabs.index != 1 || _lastCode == null) return;
    if (_barcodeC.text.trim().isEmpty) _barcodeC.text = _lastCode!;
    if (_nameC.text.trim().isEmpty && _displayName.isNotEmpty) _nameC.text = _displayName;
    if (_typeC.text.trim().isEmpty && _displayType.isNotEmpty) _typeC.text = _displayType;
    if (_brandC.text.trim().isEmpty && (_local?.brand ?? _online?.brand ?? '').isNotEmpty) {
      _brandC.text = _local?.brand ?? _online?.brand ?? '';
    }
    if (_priceC.text.trim().isEmpty && _displayPrice > 0) _priceC.text = _displayPrice.toStringAsFixed(2);
  }

  Future<void> _reloadCatalog() async {
    final list = await loadNgmyLocalProducts();
    if (!mounted) return;
    setState(() => _catalog = list);
  }

  @override
  void dispose() {
    _tabs.removeListener(_onTabChanged);
    _tabs.dispose();
    _camera.dispose();
    _nameC.dispose();
    _barcodeC.dispose();
    _typeC.dispose();
    _brandC.dispose();
    _priceC.dispose();
    _descC.dispose();
    super.dispose();
  }

  void _showLocalHit(NgmyLocalProductRecord local, String raw) {
    setState(() {
      _loading = false;
      _handling = false;
      _local = local;
      _online = null;
      _fromCatalog = true;
      _lastCode = raw.trim();
      _error = null;
    });
  }

  Future<void> _resolveCode(String raw) async {
    final trimmed = raw.trim();
    if (trimmed.isEmpty || _handling) return;

    final enrolled = matchNgmyLocalProductInList(trimmed, _catalog);
    if (enrolled != null) {
      _showLocalHit(enrolled, trimmed);
      return;
    }

    if (trimmed == _lastCode && _loading) return;

    _handling = true;
    _lastCode = trimmed;
    setState(() {
      _loading = true;
      _error = null;
      _online = null;
      _local = null;
      _fromCatalog = false;
    });

    try {
      final local = await findNgmyLocalProductByBarcode(trimmed);
      if (local != null) {
        if (!mounted) return;
        _showLocalHit(local, trimmed);
        return;
      }

      final online = await lookupBarcodeProduct(trimmed);
      if (!mounted) return;
      setState(() {
        _loading = false;
        _online = online;
        _local = null;
        _fromCatalog = false;
        _error = online == null
            ? 'Code read: $trimmed\nNot in your catalog yet. Enroll it in My Catalog with your price.'
            : null;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Lookup failed. Code: $trimmed';
      });
    } finally {
      _handling = false;
    }
  }

  void _onDetect(BarcodeCapture capture) {
    final now = DateTime.now();
    if (_lastDetectAt != null && now.difference(_lastDetectAt!) < const Duration(milliseconds: 350)) return;

    for (final barcode in capture.barcodes) {
      final raw = ngmyExtractBarcodeValue(barcode);
      if (raw == null || raw.isEmpty) continue;
      _lastDetectAt = now;
      _lastFormat = barcode.format.name;
      setState(() {});
      _resolveCode(raw);
      return;
    }
  }

  Future<void> _enterManually() async {
    final c = TextEditingController(text: _lastCode ?? '');
    final entered = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Enter barcode or scan data'),
        content: TextField(
          controller: c,
          autofocus: true,
          decoration: const InputDecoration(hintText: 'UPC / EAN / QR payload'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, c.text.trim()), child: const Text('Look up')),
        ],
      ),
    );
    if (entered != null && entered.isNotEmpty) await _resolveCode(entered);
  }

  void _clearScan() => setState(() {
        _online = null;
        _local = null;
        _lastCode = null;
        _lastFormat = null;
        _error = null;
        _fromCatalog = false;
        _handling = false;
        _loading = false;
      });

  String get _displayName => _local?.name ?? _online?.title ?? '';
  String get _displayType {
    if (_local != null && _local!.productType.isNotEmpty) return _local!.productType;
    final desc = _online?.description ?? '';
    if (desc.contains('Category:')) return desc.split('Category:').last.trim().split('\n').first;
    return _online != null ? 'Retail product' : '';
  }

  double get _displayPrice => _local?.price ?? 0;

  void _applyToCalculator() {
    final name = _displayName;
    final price = _displayPrice;
    final type = _displayType;
    if (price <= 0 && name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Save a price in My Catalog first, or enroll this product.')),
      );
      return;
    }
    widget.onApplyPrice?.call(name, price, type);
    Navigator.pop(context);
  }

  void _prefillEditor({NgmyLocalProductRecord? record, NgmyBarcodeProduct? online, String? barcode}) {
    _editingId = record?.id;
    _nameC.text = record?.name ?? online?.title ?? '';
    _barcodeC.text = record?.barcode ?? barcode ?? _lastCode ?? '';
    _typeC.text = record?.productType ?? _displayType;
    _brandC.text = record?.brand ?? online?.brand ?? '';
    _priceC.text = record != null && record.price > 0 ? record.price.toStringAsFixed(2) : '';
    _descC.text = record?.description ?? online?.description ?? '';
    _tabs.animateTo(1);
    setState(() {});
  }

  Future<void> _saveProduct() async {
    final name = _nameC.text.trim();
    final barcode = _barcodeC.text.trim();
    final type = _typeC.text.trim();
    final price = double.tryParse(_priceC.text.trim()) ?? 0;
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a product name.')));
      return;
    }
    if (barcode.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter or scan a barcode.')));
      return;
    }
    final record = NgmyLocalProductRecord(
      id: _editingId ?? 'prod-${DateTime.now().microsecondsSinceEpoch}',
      barcode: barcode,
      name: name,
      productType: type.isEmpty ? 'General' : type,
      brand: _brandC.text.trim(),
      price: price,
      description: _descC.text.trim(),
      imageUrl: _online?.imageUrl,
      savedAt: DateTime.now().toUtc().toIso8601String(),
    );
    await saveNgmyLocalProduct(record);
    await _reloadCatalog();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Saved on this device only.')));
    setState(() {
      _editingId = record.id;
      _local = record;
    });
  }

  Future<void> _deleteProduct(String id) async {
    await deleteNgmyLocalProduct(id);
    await _reloadCatalog();
    if (_editingId == id) {
      _editingId = null;
      _nameC.clear();
      _barcodeC.clear();
      _typeC.clear();
      _brandC.clear();
      _priceC.clear();
      _descC.clear();
    }
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final useCamera = barcode_platform.ngmyBarcodeUseCamera;

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0A1222) : const Color(0xFF091323),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0A3A46),
        foregroundColor: Colors.white,
        title: const Text('Product Scanner', style: TextStyle(fontWeight: FontWeight.w900)),
        bottom: TabBar(
          controller: _tabs,
          indicatorColor: _accent,
          labelColor: Colors.white,
          unselectedLabelColor: Colors.white54,
          tabs: const [
            Tab(icon: Icon(Icons.qr_code_scanner_rounded, size: 20), text: 'Scan'),
            Tab(icon: Icon(Icons.inventory_2_outlined, size: 20), text: 'My Catalog'),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabs,
        children: [
          _buildScanTab(isDark, useCamera),
          _buildCatalogTab(isDark),
        ],
      ),
    );
  }

  Widget _buildScanTab(bool isDark, bool useCamera) {
    return Column(
      children: [
        if (useCamera)
          Expanded(
            flex: 5,
            child: Stack(
              fit: StackFit.expand,
              children: [
                MobileScanner(
                  controller: _camera,
                  onDetect: _onDetect,
                  fit: BoxFit.cover,
                ),
                Center(
                  child: Container(
                    width: 280,
                    height: 160,
                    decoration: BoxDecoration(
                      border: Border.all(color: _local != null ? _accent : _scanPurple, width: 3),
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                ),
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 10,
                  child: Text(
                    _lastFormat != null ? 'Detected $_lastFormat — hold steady' : 'Scan any barcode or QR code',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white.withOpacity(0.92), fontSize: 12, fontWeight: FontWeight.w600),
                  ),
                ),
                Positioned(
                  top: 8,
                  right: 8,
                  child: Row(
                    children: [
                      IconButton(
                        style: IconButton.styleFrom(backgroundColor: Colors.black45),
                        icon: Icon(_torchOn ? Icons.flash_on : Icons.flash_off, color: Colors.white),
                        onPressed: () async {
                          await _camera.toggleTorch();
                          setState(() => _torchOn = !_torchOn);
                        },
                      ),
                      IconButton(
                        style: IconButton.styleFrom(backgroundColor: Colors.black45),
                        icon: const Icon(Icons.keyboard_rounded, color: Colors.white),
                        onPressed: _enterManually,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          )
        else
          Expanded(
            flex: 3,
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.qr_code_scanner_rounded, size: 56, color: _scanPurple),
                  const SizedBox(height: 12),
                  const Text(
                    'Camera scan works on the NGMY phone app.\nOn desktop web, enter the barcode below.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white70, height: 1.35),
                  ),
                  const SizedBox(height: 16),
                  FilledButton.icon(
                    onPressed: _enterManually,
                    icon: const Icon(Icons.edit_rounded),
                    label: const Text('Enter barcode'),
                    style: FilledButton.styleFrom(backgroundColor: _scanPurple),
                  ),
                ],
              ),
            ),
          ),
        Expanded(flex: 5, child: _buildScanResult(isDark)),
      ],
    );
  }

  Widget _buildScanResult(bool isDark) {
    if (_loading) {
      return const Center(child: Column(mainAxisSize: MainAxisSize.min, children: [CircularProgressIndicator(color: _accent), SizedBox(height: 10), Text('Looking up product…', style: TextStyle(color: Colors.white70))]));
    }
    final hasData = _local != null || _online != null;
    if (!hasData && _error == null) {
      return Center(child: Text('Scan to see product type, details, and your saved price.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.5))));
    }
    if (_error != null && !hasData) {
      return ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(_error!, style: const TextStyle(color: Colors.white70)),
          const SizedBox(height: 12),
          FilledButton(onPressed: () => _prefillEditor(barcode: _lastCode), style: FilledButton.styleFrom(backgroundColor: _accent), child: const Text('Enroll in My Catalog')),
        ],
      );
    }

    final image = _local?.imageUrl ?? _online?.imageUrl;
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        if (_fromCatalog && _local != null)
          Container(
            width: double.infinity,
            margin: const EdgeInsets.only(bottom: 10),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(
              color: _accent.withOpacity(0.18),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: _accent),
            ),
            child: Row(
              children: [
                const Icon(Icons.inventory_2_rounded, color: _accent, size: 22),
                const SizedBox(width: 10),
                Expanded(
                  child: Text(
                    'From your catalog — \$${_displayPrice.toStringAsFixed(2)}',
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                  ),
                ),
              ],
            ),
          ),
        if (image != null && image.startsWith('http'))
          ClipRRect(borderRadius: BorderRadius.circular(10), child: Image.network(image, height: 120, fit: BoxFit.contain, errorBuilder: (_, __, ___) => const SizedBox.shrink())),
        const SizedBox(height: 10),
        Text(_displayName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
        if (_lastCode != null) ...[
          const SizedBox(height: 4),
          Text('Code: $_lastCode', style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 11)),
        ],
        const SizedBox(height: 8),
        _infoRow('Type', _displayType.isEmpty ? '—' : _displayType),
        if ((_local?.brand ?? _online?.brand ?? '').isNotEmpty) _infoRow('Brand', _local?.brand ?? _online?.brand ?? ''),
        _infoRow('Your price', _displayPrice > 0 ? '\$${_displayPrice.toStringAsFixed(2)}' : 'Not set — save in catalog'),
        if (_local != null) _infoRow('Storage', _fromCatalog ? 'Your enrolled item (this device)' : 'Scanned product QR'),
        if (_local?.description.isNotEmpty == true) _infoRow('Notes', _local!.description),
        if (_online != null && _local == null) _infoRow('Source', _online!.source),
        const SizedBox(height: 12),
        if (widget.onApplyPrice != null && _displayPrice > 0)
          FilledButton.icon(
            onPressed: _applyToCalculator,
            icon: const Icon(Icons.price_check_rounded),
            label: const Text('Use price in calculator'),
            style: FilledButton.styleFrom(backgroundColor: _accent, minimumSize: const Size(double.infinity, 44)),
          ),
        const SizedBox(height: 8),
        OutlinedButton.icon(
          onPressed: () => _prefillEditor(record: _local, online: _online, barcode: _lastCode),
          icon: const Icon(Icons.edit_note_rounded, color: _accent),
          label: const Text('Edit / enroll in catalog'),
          style: OutlinedButton.styleFrom(foregroundColor: _accent, minimumSize: const Size(double.infinity, 44)),
        ),
        TextButton.icon(onPressed: _clearScan, icon: const Icon(Icons.refresh_rounded), label: const Text('Scan another')),
      ],
    );
  }

  Widget _infoRow(String k, String v) => Padding(
        padding: const EdgeInsets.only(bottom: 6),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(width: 72, child: Text(k, style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 12, fontWeight: FontWeight.w700))),
            Expanded(child: Text(v, style: const TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600))),
          ],
        ),
      );

  Widget _buildCatalogTab(bool isDark) {
    final editing = _editingId != null || _nameC.text.isNotEmpty || _barcodeC.text.isNotEmpty;
    return ListView(
      padding: const EdgeInsets.all(14),
      children: [
        Text('Create & QR designer', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
        const SizedBox(height: 8),
        _field('Product name', _nameC),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _field('Barcode / UPC', _barcodeC)),
            const SizedBox(width: 8),
            IconButton.filled(
              style: IconButton.styleFrom(backgroundColor: _scanPurple),
              onPressed: () {
                _tabs.animateTo(0);
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Switch to Scan tab — scan fills barcode here.')));
              },
              icon: const Icon(Icons.qr_code_scanner_rounded, color: Colors.white),
            ),
          ],
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _field('Product type', _typeC, hint: 'e.g. Grocery, Electronics')),
            const SizedBox(width: 8),
            Expanded(child: _field('Price (\$)', _priceC, keyboard: TextInputType.number)),
          ],
        ),
        const SizedBox(height: 8),
        _field('Brand (optional)', _brandC),
        const SizedBox(height: 8),
        _field('Notes', _descC, maxLines: 2),
        const SizedBox(height: 12),
        FilledButton.icon(
          onPressed: _saveProduct,
          icon: const Icon(Icons.save_rounded),
          label: Text(_editingId == null ? 'Save to device' : 'Update on device'),
          style: FilledButton.styleFrom(backgroundColor: _accent, minimumSize: const Size(double.infinity, 44)),
        ),
        if (editing && _nameC.text.trim().isNotEmpty && _barcodeC.text.trim().isNotEmpty) ...[
          const SizedBox(height: 16),
          const Text('Product QR code', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
          const SizedBox(height: 8),
          Center(
            child: Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: _accent.withOpacity(0.5)),
              ),
              child: QrImageView(
                data: NgmyLocalProductRecord(
                  id: _editingId ?? 'preview',
                  barcode: _barcodeC.text.trim(),
                  name: _nameC.text.trim(),
                  productType: _typeC.text.trim().isEmpty ? 'General' : _typeC.text.trim(),
                  brand: _brandC.text.trim(),
                  price: double.tryParse(_priceC.text.trim()) ?? 0,
                  description: _descC.text.trim(),
                  savedAt: DateTime.now().toUtc().toIso8601String(),
                ).qrPayload,
                version: QrVersions.auto,
                size: 160,
                backgroundColor: Colors.white,
              ),
            ),
          ),
          const SizedBox(height: 6),
          Text('Print or share this QR — scans open product details on this device.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 10)),
        ],
        const SizedBox(height: 20),
        Text('MY ITEMS (${_catalog.length})', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
        const SizedBox(height: 8),
        if (_catalog.isEmpty)
          Text('No items yet. Scan a product or create one above.', style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 12))
        else
          ..._catalog.map((p) => Card(
                color: const Color(0xFF0F2744),
                margin: const EdgeInsets.only(bottom: 8),
                child: ListTile(
                  title: Text(p.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                  subtitle: Text('${p.productType} · \$${p.price.toStringAsFixed(2)} · ${p.barcode}', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11)),
                  trailing: PopupMenuButton<String>(
                    icon: const Icon(Icons.more_vert, color: Colors.white54),
                    onSelected: (v) {
                      if (v == 'edit') _prefillEditor(record: p);
                      if (v == 'delete') _deleteProduct(p.id);
                    },
                    itemBuilder: (_) => const [
                      PopupMenuItem(value: 'edit', child: Text('Edit')),
                      PopupMenuItem(value: 'delete', child: Text('Delete')),
                    ],
                  ),
                  onTap: () => _prefillEditor(record: p),
                ),
              )),
      ],
    );
  }

  Widget _field(String label, TextEditingController c, {String? hint, TextInputType? keyboard, int maxLines = 1}) {
    return TextField(
      controller: c,
      keyboardType: keyboard,
      maxLines: maxLines,
      style: const TextStyle(color: Colors.white, fontSize: 13),
      decoration: InputDecoration(
        labelText: label,
        hintText: hint,
        labelStyle: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12),
        hintStyle: TextStyle(color: Colors.white.withOpacity(0.28)),
        filled: true,
        fillColor: Colors.black.withOpacity(0.25),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide(color: Colors.white.withOpacity(0.12))),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide(color: Colors.white.withOpacity(0.12))),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: const BorderSide(color: _accent)),
      ),
    );
  }
}
