import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Business info for repair estimates — device-local only (SharedPreferences).
class NgmyRepairEstimateBusinessInfo {
  const NgmyRepairEstimateBusinessInfo({
    this.name = '',
    this.phone = '',
    this.street = '',
    this.cityStateZip = '',
    this.email = '',
  });

  final String name;
  final String phone;
  final String street;
  final String cityStateZip;
  final String email;

  NgmyRepairEstimateBusinessInfo copyWith({
    String? name,
    String? phone,
    String? street,
    String? cityStateZip,
    String? email,
  }) {
    return NgmyRepairEstimateBusinessInfo(
      name: name ?? this.name,
      phone: phone ?? this.phone,
      street: street ?? this.street,
      cityStateZip: cityStateZip ?? this.cityStateZip,
      email: email ?? this.email,
    );
  }

  Map<String, String> toJson() => {
        'name': name,
        'phone': phone,
        'street': street,
        'cityStateZip': cityStateZip,
        'email': email,
      };

  factory NgmyRepairEstimateBusinessInfo.fromJson(Map<String, dynamic> json) {
    return NgmyRepairEstimateBusinessInfo(
      name: (json['name'] ?? '').toString(),
      phone: (json['phone'] ?? '').toString(),
      street: (json['street'] ?? '').toString(),
      cityStateZip: (json['cityStateZip'] ?? '').toString(),
      email: (json['email'] ?? '').toString(),
    );
  }

  bool get isEmpty =>
      name.trim().isEmpty &&
      phone.trim().isEmpty &&
      street.trim().isEmpty &&
      cityStateZip.trim().isEmpty &&
      email.trim().isEmpty;
}

class NgmyRepairEstimateBusinessStore {
  static const _prefsKey = 'ngmy_repair_estimate_business_v1';

  static Future<NgmyRepairEstimateBusinessInfo> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw == null || raw.trim().isEmpty) return const NgmyRepairEstimateBusinessInfo();
      final decoded = jsonDecode(raw);
      if (decoded is Map) {
        return NgmyRepairEstimateBusinessInfo.fromJson(Map<String, dynamic>.from(decoded));
      }
    } catch (_) {}
    return const NgmyRepairEstimateBusinessInfo();
  }

  static Future<void> save(NgmyRepairEstimateBusinessInfo info) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_prefsKey, jsonEncode(info.toJson()));
  }

  /// Seed from G-Services invoice fields only when user has never saved business info.
  static Future<NgmyRepairEstimateBusinessInfo> loadOrSeed({
    String seedName = '',
    String seedPhone = '',
    String seedStreet = '',
    String seedCityStateZip = '',
  }) async {
    final saved = await load();
    if (!saved.isEmpty) return saved;
    if ([seedName, seedPhone, seedStreet, seedCityStateZip].every((s) => s.trim().isEmpty)) {
      return saved;
    }
    return NgmyRepairEstimateBusinessInfo(
      name: seedName.trim(),
      phone: seedPhone.trim(),
      street: seedStreet.trim(),
      cityStateZip: seedCityStateZip.trim(),
    );
  }
}
