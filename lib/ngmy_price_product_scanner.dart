import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'ngmy_barcode_lookup.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_nav.dart';
import 'ngmy_product_qr_actions.dart';
import 'ngmy_product_qr_widget.dart';
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
  static const _gold = Color(0xFFFFD54F);
  static const _billGreen = Color(0xFF1B5E20);

  late TabController _tabs;
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.unrestricted,
    facing: CameraFacing.back,
    formats: ngmyScannerBarcodeFormats,
  );

  bool _handling = false;
  bool _torchOn = false;
  bool _loading = false;
  bool _markingSold = false;
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
  final _stockC = TextEditingController(text: '1');
  final _descC = TextEditingController();
  String? _editingId;
  final GlobalKey _storeQrCaptureKey = GlobalKey();
  bool _qrBusy = false;

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
    if (_stockC.text.trim().isEmpty && _local != null) _stockC.text = '${_local!.stock}';
  }

  Future<void> _reloadCatalog() async {
    final list = await loadNgmyLocalProducts();
    if (!mounted) return;
    setState(() => _catalog = list);
    if (_local != null) {
      final fresh = list.cast<NgmyLocalProductRecord?>().firstWhere(
            (r) => r?.id == _local!.id,
            orElse: () => null,
          );
      if (fresh != null) setState(() => _local = fresh);
    }
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
    _stockC.dispose();
    _descC.dispose();
    super.dispose();
  }

  bool get _isEnrolledItem => _local != null && _catalog.any((r) => r.id == _local!.id);

  bool get _canMarkSold => _isEnrolledItem && (_local?.stock ?? 0) > 0;

  void _showLocalHit(NgmyLocalProductRecord local, String raw) {
    setState(() {
      _loading = false;
      _handling = false;
      _local = local;
      _online = null;
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
        _error = online == null
            ? 'Code ${ngmyShortItemCode(trimmed)} not in your store yet.\nEnroll it in My Catalog with your price.'
            : null;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Lookup failed for ${ngmyShortItemCode(trimmed)}.';
      });
    } finally {
      _handling = false;
    }
  }

  Future<void> _markAsSold() async {
    final id = _local?.id;
    if (id == null || !_canMarkSold || _markingSold) return;
    setState(() => _markingSold = true);
    final updated = await markNgmyLocalProductSold(id);
    await _reloadCatalog();
    if (!mounted) return;
    setState(() {
      _markingSold = false;
      if (updated != null) _local = updated;
    });
    final msg = (updated?.stock ?? 0) > 0
        ? 'Sold! ${updated!.stock} left in stock.'
        : 'Sold out — item removes from My Items in 10 hours.';
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
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

  NgmyLocalProductRecord? get _previewRecord {
    final name = _nameC.text.trim();
    final barcode = _barcodeC.text.trim();
    if (name.isEmpty || barcode.isEmpty) return null;
    return NgmyLocalProductRecord(
      id: _editingId ?? 'preview',
      barcode: barcode,
      name: name,
      productType: _typeC.text.trim().isEmpty ? 'General' : _typeC.text.trim(),
      brand: _brandC.text.trim(),
      price: double.tryParse(_priceC.text.trim()) ?? 0,
      description: _descC.text.trim(),
      savedAt: DateTime.now().toUtc().toIso8601String(),
      stock: int.tryParse(_stockC.text.trim()) ?? 1,
    );
  }

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
    _stockC.text = '${record?.stock ?? 1}';
    _descC.text = record?.description ?? online?.description ?? '';
    _tabs.animateTo(1);
    setState(() {});
  }

  Future<void> _saveProduct() async {
    final name = _nameC.text.trim();
    final barcode = _barcodeC.text.trim();
    final type = _typeC.text.trim();
    final price = double.tryParse(_priceC.text.trim()) ?? 0;
    final stock = (int.tryParse(_stockC.text.trim()) ?? 1).clamp(1, 9999);
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a product name.')));
      return;
    }
    if (barcode.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter or scan a barcode.')));
      return;
    }
    final existing = _editingId != null
        ? _catalog.cast<NgmyLocalProductRecord?>().firstWhere((r) => r?.id == _editingId, orElse: () => null)
        : null;
    final record = NgmyLocalProductRecord(
      id: _editingId ?? 'prod-${DateTime.now().microsecondsSinceEpoch}',
      barcode: barcode,
      name: name,
      productType: type.isEmpty ? 'General' : type,
      brand: _brandC.text.trim(),
      price: price,
      description: _descC.text.trim(),
      imageUrl: existing?.imageUrl ?? _online?.imageUrl,
      savedAt: existing?.savedAt ?? DateTime.now().toUtc().toIso8601String(),
      stock: stock,
      pendingDeleteAt: stock > 0 ? null : existing?.pendingDeleteAt,
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

  Future<void> _runQrAction(Future<String> Function() action) async {
    if (_qrBusy) return;
    setState(() => _qrBusy = true);
    try {
      final msg = await action();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('QR action failed: $e')));
    } finally {
      if (mounted) setState(() => _qrBusy = false);
    }
  }

  Future<void> _downloadStoreQr(NgmyLocalProductRecord record) async {
    await _runQrAction(() => downloadNgmyStoreProductQr(
          context,
          record: record,
          visibleCaptureKey: _previewRecord?.id == record.id ? _storeQrCaptureKey : null,
        ));
  }

  Future<void> _saveStoreQr(NgmyLocalProductRecord record) async {
    if (_qrBusy) return;
    setState(() => _qrBusy = true);
    try {
      await saveNgmyStoreProductQrToLibrary(record);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('QR saved on this device — ${record.name}')),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Save failed: $e')));
    } finally {
      if (mounted) setState(() => _qrBusy = false);
    }
  }

  Future<void> _shareStoreQr(NgmyLocalProductRecord record) async {
    await _runQrAction(() => shareNgmyStoreProductQr(
          context,
          record: record,
          visibleCaptureKey: _previewRecord?.id == record.id ? _storeQrCaptureKey : null,
        ));
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
      _stockC.text = '1';
      _descC.clear();
    }
    if (mounted) setState(() {});
  }

  String? _purgeCountdownLabel(NgmyLocalProductRecord? r) {
    if (r?.pendingDeleteAt == null) return null;
    final at = DateTime.tryParse(r!.pendingDeleteAt!);
    if (at == null) return null;
    final left = at.difference(DateTime.now().toUtc());
    if (left.isNegative) return 'Removing soon…';
    final h = left.inHours;
    final m = left.inMinutes % 60;
    return h > 0 ? 'Removes in ${h}h ${m}m' : 'Removes in ${m}m';
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

  Widget _moneyPriceFrame(double price) {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 22),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF2E7D32), Color(0xFF1B5E20), Color(0xFF14532D), Color(0xFF1B5E20)],
          stops: [0.0, 0.35, 0.7, 1.0],
        ),
        border: Border.all(color: _gold, width: 3),
        boxShadow: [
          BoxShadow(color: _billGreen.withOpacity(0.55), blurRadius: 16, offset: const Offset(0, 6)),
          BoxShadow(color: _gold.withOpacity(0.2), blurRadius: 8),
        ],
      ),
      child: Stack(
        children: [
          Positioned(top: 6, left: 12, child: Text('\$', style: TextStyle(color: _gold.withOpacity(0.18), fontSize: 48, fontWeight: FontWeight.w900))),
          Positioned(bottom: 4, right: 14, child: Text('\$', style: TextStyle(color: _gold.withOpacity(0.12), fontSize: 36, fontWeight: FontWeight.w900))),
          Column(
            children: [
              Text('PRICE', style: TextStyle(color: _gold.withOpacity(0.85), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 3)),
              const SizedBox(height: 6),
              Text(
                price > 0 ? '\$${price.toStringAsFixed(2)}' : '—',
                style: const TextStyle(
                  color: _gold,
                  fontSize: 42,
                  fontWeight: FontWeight.w900,
                  height: 1,
                  shadows: [Shadow(color: Colors.black54, blurRadius: 4, offset: Offset(0, 2))],
                ),
              ),
              const SizedBox(height: 4),
              Text('USD', style: TextStyle(color: Colors.white.withOpacity(0.7), fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2)),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildScanResult(bool isDark) {
    if (_loading) {
      return const Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CircularProgressIndicator(color: _accent),
            SizedBox(height: 10),
            Text('Looking up product…', style: TextStyle(color: Colors.white70)),
          ],
        ),
      );
    }
    final hasData = _local != null || _online != null;
    if (!hasData && _error == null) {
      return Center(
        child: Text(
          'Scan to see product type, details, and price.',
          textAlign: TextAlign.center,
          style: TextStyle(color: Colors.white.withOpacity(0.5)),
        ),
      );
    }
    if (_error != null && !hasData) {
      return ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(_error!, style: const TextStyle(color: Colors.white70)),
          const SizedBox(height: 12),
          FilledButton(
            onPressed: () => _prefillEditor(barcode: _lastCode),
            style: FilledButton.styleFrom(backgroundColor: _accent),
            child: const Text('Enroll in My Catalog'),
          ),
        ],
      );
    }

    final image = _local?.imageUrl ?? _online?.imageUrl;
    final stock = _local?.stock;
    final purgeLabel = _purgeCountdownLabel(_local);

    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        if (_displayPrice > 0) _moneyPriceFrame(_displayPrice),
        if (_local != null && _isEnrolledItem) ...[
          Row(
            children: [
              Icon(Icons.inventory_2_outlined, color: Colors.white.withOpacity(0.6), size: 16),
              const SizedBox(width: 6),
              Text(
                (_local!.stock) > 0 ? 'In stock: ${_local!.stock}' : 'Sold out',
                style: TextStyle(color: (_local!.stock) > 0 ? _accent : Colors.orangeAccent, fontWeight: FontWeight.w800, fontSize: 13),
              ),
              if (purgeLabel != null) ...[
                const SizedBox(width: 8),
                Text(purgeLabel, style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 11)),
              ],
            ],
          ),
          const SizedBox(height: 10),
        ],
        if (image != null && image.startsWith('http'))
          ClipRRect(
            borderRadius: BorderRadius.circular(10),
            child: Image.network(image, height: 100, fit: BoxFit.contain, errorBuilder: (_, __, ___) => const SizedBox.shrink()),
          ),
        const SizedBox(height: 10),
        Text(_displayName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
        if (_lastCode != null) ...[
          const SizedBox(height: 4),
          Text('Code ${ngmyShortItemCode(_lastCode!)}', style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 12, fontWeight: FontWeight.w600)),
        ],
        const SizedBox(height: 8),
        _infoRow('Type', _displayType.isEmpty ? '—' : _displayType),
        if ((_local?.brand ?? _online?.brand ?? '').isNotEmpty) _infoRow('Brand', _local?.brand ?? _online?.brand ?? ''),
        if (_local?.description.isNotEmpty == true) _infoRow('Notes', _local!.description),
        if (_online != null && _local == null) _infoRow('Source', _online!.source),
        if (_canMarkSold) ...[
          const SizedBox(height: 12),
          FilledButton.icon(
            onPressed: _markingSold ? null : _markAsSold,
            icon: _markingSold
                ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Icon(Icons.point_of_sale_rounded),
            label: Text(_markingSold ? 'Recording sale…' : 'Mark as sold'),
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFFD97706), minimumSize: const Size(double.infinity, 48)),
          ),
        ],
        if (_local != null && _isEnrolledItem && (stock ?? 0) <= 0) ...[
          const SizedBox(height: 8),
          Text(
            'Last unit sold. Item stays in My Items for 10 hours, then removes automatically.',
            style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 11),
          ),
        ],
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
    final preview = _previewRecord;
    return ListView(
      padding: const EdgeInsets.all(14),
      children: [
        Text('Create & QR designer', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
        const SizedBox(height: 8),
        _field('Product name', _nameC, onChanged: (_) => setState(() {})),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _field('Barcode / UPC', _barcodeC, onChanged: (_) => setState(() {}))),
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
            Expanded(child: _field('Product type', _typeC, hint: 'e.g. Grocery, Electronics', onChanged: (_) => setState(() {}))),
            const SizedBox(width: 8),
            Expanded(child: _field('Price (\$)', _priceC, keyboard: TextInputType.number, onChanged: (_) => setState(() {}))),
          ],
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _field('Stock qty', _stockC, keyboard: TextInputType.number, hint: 'How many in store', onChanged: (_) => setState(() {}))),
            const SizedBox(width: 8),
            Expanded(child: _field('Brand (optional)', _brandC, onChanged: (_) => setState(() {}))),
          ],
        ),
        const SizedBox(height: 8),
        _field('Notes', _descC, maxLines: 2, onChanged: (_) => setState(() {})),
        const SizedBox(height: 12),
        FilledButton.icon(
          onPressed: _saveProduct,
          icon: const Icon(Icons.save_rounded),
          label: Text(_editingId == null ? 'Save to device' : 'Update on device'),
          style: FilledButton.styleFrom(backgroundColor: _accent, minimumSize: const Size(double.infinity, 44)),
        ),
        if (preview != null) ...[
          const SizedBox(height: 20),
          const Text('Store QR code', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
          const SizedBox(height: 4),
          Text('Price in center · NGMY logo · gold corner rings', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 11)),
          const SizedBox(height: 12),
          Center(
            child: RepaintBoundary(
              key: _storeQrCaptureKey,
              child: NgmyStoreProductQrWidget(
                data: preview.qrPayload,
                price: preview.price,
                large: true,
              ),
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: _qrBusy ? null : () => _downloadStoreQr(preview),
                  icon: _qrBusy
                      ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                      : const Icon(Icons.download_rounded, size: 18),
                  label: const Text('Download'),
                  style: OutlinedButton.styleFrom(foregroundColor: _accent, side: BorderSide(color: _accent.withOpacity(0.55))),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: FilledButton.icon(
                  onPressed: _qrBusy ? null : () => _saveStoreQr(preview),
                  icon: const Icon(Icons.bookmark_rounded, size: 18),
                  label: const Text('Save'),
                  style: FilledButton.styleFrom(backgroundColor: _accent),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: _qrBusy ? null : () => _shareStoreQr(preview),
                  icon: const Icon(Icons.ios_share_rounded, size: 18),
                  label: const Text('Share'),
                  style: OutlinedButton.styleFrom(foregroundColor: _scanPurple, side: BorderSide(color: _scanPurple.withOpacity(0.55))),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text('Stock on QR: ${preview.stock} — download, save, or share this code.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 10)),
        ],
        const SizedBox(height: 20),
        Text('MY ITEMS (${_catalog.length})', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
        const SizedBox(height: 8),
        if (_catalog.isEmpty)
          Text('No items yet. Scan a product or create one above.', style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 12))
        else
          ..._catalog.map((p) {
            final purge = _purgeCountdownLabel(p);
            return Card(
              color: const Color(0xFF0F2744),
              margin: const EdgeInsets.only(bottom: 8),
              child: ListTile(
                title: Text(p.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                subtitle: Text(
                  '${p.productType} · \$${p.price.toStringAsFixed(2)} · ${ngmyShortBarcodeLabel(p.barcode)} · stock ${p.stock}${purge != null ? ' · $purge' : ''}',
                  style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11),
                ),
                trailing: PopupMenuButton<String>(
                  icon: const Icon(Icons.more_vert, color: Colors.white54),
                  onSelected: (v) {
                    if (v == 'edit') _prefillEditor(record: p);
                    if (v == 'download') _downloadStoreQr(p);
                    if (v == 'save_qr') _saveStoreQr(p);
                    if (v == 'share') _shareStoreQr(p);
                    if (v == 'delete') _deleteProduct(p.id);
                  },
                  itemBuilder: (_) => const [
                    PopupMenuItem(value: 'edit', child: Text('Edit')),
                    PopupMenuItem(value: 'download', child: Text('Download QR')),
                    PopupMenuItem(value: 'save_qr', child: Text('Save QR on device')),
                    PopupMenuItem(value: 'share', child: Text('Share QR')),
                    PopupMenuItem(value: 'delete', child: Text('Delete')),
                  ],
                ),
                onTap: () => _prefillEditor(record: p),
              ),
            );
          }),
      ],
    );
  }

  Widget _field(String label, TextEditingController c, {String? hint, TextInputType? keyboard, int maxLines = 1, ValueChanged<String>? onChanged}) {
    return TextField(
      controller: c,
      keyboardType: keyboard,
      maxLines: maxLines,
      onChanged: onChanged,
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
