import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_barcode_lookup.dart';

const String _kLocalProductsKey = 'ngmy_local_products_v1';
const Duration kNgmySoldProductPurgeDelay = Duration(hours: 10);

/// Product catalog entry — device local only (never Supabase).
class NgmyLocalProductRecord {
  final String id;
  final String barcode;
  final String name;
  final String productType;
  final String brand;
  final double price;
  final String description;
  final String? imageUrl;
  final String savedAt;
  final int stock;
  final String? pendingDeleteAt;

  const NgmyLocalProductRecord({
    required this.id,
    required this.barcode,
    required this.name,
    required this.productType,
    this.brand = '',
    required this.price,
    this.description = '',
    this.imageUrl,
    required this.savedAt,
    this.stock = 1,
    this.pendingDeleteAt,
  });

  bool get isSoldOut => stock <= 0;

  NgmyLocalProductRecord copyWith({
    String? id,
    String? barcode,
    String? name,
    String? productType,
    String? brand,
    double? price,
    String? description,
    String? imageUrl,
    String? savedAt,
    int? stock,
    String? pendingDeleteAt,
    bool clearPendingDelete = false,
  }) {
    return NgmyLocalProductRecord(
      id: id ?? this.id,
      barcode: barcode ?? this.barcode,
      name: name ?? this.name,
      productType: productType ?? this.productType,
      brand: brand ?? this.brand,
      price: price ?? this.price,
      description: description ?? this.description,
      imageUrl: imageUrl ?? this.imageUrl,
      savedAt: savedAt ?? this.savedAt,
      stock: stock ?? this.stock,
      pendingDeleteAt: clearPendingDelete ? null : (pendingDeleteAt ?? this.pendingDeleteAt),
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'barcode': barcode,
        'name': name,
        'productType': productType,
        'brand': brand,
        'price': price,
        'description': description,
        'imageUrl': imageUrl,
        'savedAt': savedAt,
        'stock': stock,
        'pendingDeleteAt': pendingDeleteAt,
      };

  factory NgmyLocalProductRecord.fromJson(Map<String, dynamic> json) {
    return NgmyLocalProductRecord(
      id: (json['id'] ?? '').toString(),
      barcode: (json['barcode'] ?? '').toString(),
      name: (json['name'] ?? '').toString(),
      productType: (json['productType'] ?? json['type'] ?? '').toString(),
      brand: (json['brand'] ?? '').toString(),
      price: (json['price'] ?? 0).toDouble(),
      description: (json['description'] ?? '').toString(),
      imageUrl: (json['imageUrl'] ?? '').toString().trim().isEmpty ? null : (json['imageUrl'] ?? '').toString(),
      savedAt: (json['savedAt'] ?? '').toString(),
      stock: json['stock'] is int ? json['stock'] as int : int.tryParse('${json['stock']}') ?? 1,
      pendingDeleteAt: (json['pendingDeleteAt'] ?? '').toString().trim().isEmpty ? null : (json['pendingDeleteAt'] ?? '').toString(),
    );
  }

  String get qrPayload => jsonEncode({
        'ngmy': 'product',
        'v': 2,
        'id': id,
        'barcode': barcode,
        'name': name,
        'type': productType,
        'brand': brand,
        'price': price,
        'stock': stock,
        'description': description,
      });

  static NgmyLocalProductRecord? fromQrPayload(String raw) {
    final trimmed = raw.trim();
    if (trimmed.isEmpty) return null;
    try {
      final data = jsonDecode(trimmed);
      if (data is! Map) return null;
      if (data['ngmy']?.toString() != 'product') return null;
      final id = (data['id'] ?? DateTime.now().microsecondsSinceEpoch).toString();
      return NgmyLocalProductRecord(
        id: id,
        barcode: (data['barcode'] ?? '').toString(),
        name: (data['name'] ?? 'Product').toString(),
        productType: (data['type'] ?? data['productType'] ?? 'General').toString(),
        brand: (data['brand'] ?? '').toString(),
        price: (data['price'] ?? 0).toDouble(),
        description: (data['description'] ?? '').toString(),
        stock: data['stock'] is int ? data['stock'] as int : int.tryParse('${data['stock']}') ?? 1,
        savedAt: DateTime.now().toUtc().toIso8601String(),
      );
    } catch (_) {
      return null;
    }
  }
}

String ngmyShortItemCode(String raw) {
  final trimmed = raw.trim();
  if (trimmed.isEmpty) return '—';
  final fromQr = NgmyLocalProductRecord.fromQrPayload(trimmed);
  if (fromQr != null) {
    final tail = fromQr.id.length > 6 ? fromQr.id.substring(fromQr.id.length - 6) : fromQr.id;
    return 'QR-$tail';
  }
  final digits = ngmyNormalizeBarcodeDigits(trimmed);
  if (digits.length >= 6) return digits.substring(digits.length - 6);
  if (trimmed.length > 12) return '${trimmed.substring(0, 5)}…';
  return trimmed;
}

String ngmyShortBarcodeLabel(String barcode) {
  final digits = ngmyNormalizeBarcodeDigits(barcode);
  if (digits.length >= 6) return digits.substring(digits.length - 6);
  if (barcode.length > 10) return '${barcode.substring(0, 4)}…';
  return barcode;
}

Future<void> _purgeExpiredProducts(List<NgmyLocalProductRecord> list) async {
  final now = DateTime.now().toUtc();
  list.removeWhere((r) {
    if (r.pendingDeleteAt == null) return false;
    final at = DateTime.tryParse(r.pendingDeleteAt!);
    if (at == null) return false;
    return !now.isBefore(at);
  });
}

Future<List<NgmyLocalProductRecord>> loadNgmyLocalProducts() async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_kLocalProductsKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    final parsed = list
        .whereType<Map>()
        .map((e) => NgmyLocalProductRecord.fromJson(Map<String, dynamic>.from(e)))
        .where((r) => r.id.isNotEmpty)
        .toList();
    final before = parsed.length;
    await _purgeExpiredProducts(parsed);
    if (parsed.length != before) {
      await persistNgmyLocalProducts(parsed);
    }
    return parsed;
  } catch (_) {
    return [];
  }
}

Future<void> persistNgmyLocalProducts(List<NgmyLocalProductRecord> records) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_kLocalProductsKey, jsonEncode(records.map((e) => e.toJson()).toList()));
}

Future<NgmyLocalProductRecord> saveNgmyLocalProduct(NgmyLocalProductRecord record) async {
  final list = await loadNgmyLocalProducts();
  final idx = list.indexWhere((r) => r.id == record.id);
  if (idx >= 0) {
    list[idx] = record;
  } else {
    list.insert(0, record);
  }
  await persistNgmyLocalProducts(list);
  return record;
}

Future<void> deleteNgmyLocalProduct(String id) async {
  final list = await loadNgmyLocalProducts();
  list.removeWhere((r) => r.id == id);
  await persistNgmyLocalProducts(list);
}

Future<NgmyLocalProductRecord?> markNgmyLocalProductSold(String id) async {
  final list = await loadNgmyLocalProducts();
  final idx = list.indexWhere((r) => r.id == id);
  if (idx < 0) return null;
  final r = list[idx];
  if (r.stock <= 0) return r;

  final newStock = r.stock - 1;
  NgmyLocalProductRecord updated;
  if (newStock > 0) {
    updated = r.copyWith(stock: newStock, clearPendingDelete: true);
  } else {
    final deleteAt = DateTime.now().toUtc().add(kNgmySoldProductPurgeDelay).toIso8601String();
    updated = r.copyWith(stock: 0, pendingDeleteAt: deleteAt);
  }
  list[idx] = updated;
  await persistNgmyLocalProducts(list);
  return updated;
}

Set<String> ngmyBarcodeMatchKeys(String raw) {
  final trimmed = raw.trim();
  final digits = ngmyNormalizeBarcodeDigits(trimmed);
  final keys = <String>{trimmed, digits};
  if (digits.length == 12) keys.add('0$digits');
  if (digits.length == 13 && digits.startsWith('0')) keys.add(digits.substring(1));
  if (digits.length > 13) keys.add(digits.substring(digits.length - 13));
  if (digits.length > 12) keys.add(digits.substring(digits.length - 12));
  return keys.where((k) => k.isNotEmpty).toSet();
}

NgmyLocalProductRecord? matchNgmyLocalProductInList(String raw, List<NgmyLocalProductRecord> list) {
  final trimmed = raw.trim();
  if (trimmed.isEmpty) return null;

  final fromQr = NgmyLocalProductRecord.fromQrPayload(trimmed);
  if (fromQr != null) {
    for (final r in list) {
      if (r.id == fromQr.id) return r;
      final keys = ngmyBarcodeMatchKeys(r.barcode);
      if (keys.intersection(ngmyBarcodeMatchKeys(fromQr.barcode)).isNotEmpty) return r;
    }
    return fromQr;
  }

  final scanKeys = ngmyBarcodeMatchKeys(trimmed);
  for (final r in list) {
    if (r.id == trimmed) return r;
    final itemKeys = ngmyBarcodeMatchKeys(r.barcode);
    if (scanKeys.intersection(itemKeys).isNotEmpty) return r;
  }
  return null;
}

Future<NgmyLocalProductRecord?> findNgmyLocalProductByBarcode(String barcode) async {
  final list = await loadNgmyLocalProducts();
  return matchNgmyLocalProductInList(barcode, list);
}
