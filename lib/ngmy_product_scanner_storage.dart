import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

const String _kLocalProductsKey = 'ngmy_local_products_v1';

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
  });

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
    );
  }

  String get qrPayload => jsonEncode({
        'ngmy': 'product',
        'v': 1,
        'id': id,
        'barcode': barcode,
        'name': name,
        'type': productType,
        'brand': brand,
        'price': price,
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
        savedAt: DateTime.now().toUtc().toIso8601String(),
      );
    } catch (_) {
      return null;
    }
  }
}

Future<List<NgmyLocalProductRecord>> loadNgmyLocalProducts() async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_kLocalProductsKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => NgmyLocalProductRecord.fromJson(Map<String, dynamic>.from(e)))
        .where((r) => r.id.isNotEmpty)
        .toList();
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

Future<NgmyLocalProductRecord?> findNgmyLocalProductByBarcode(String barcode) async {
  final code = barcode.replaceAll(RegExp(r'\D'), '');
  if (code.isEmpty) return null;
  final list = await loadNgmyLocalProducts();
  for (final r in list) {
    final local = r.barcode.replaceAll(RegExp(r'\D'), '');
    if (local == code) return r;
  }
  return null;
}
