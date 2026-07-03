import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

String _dailyKey(String userEmail, String tool) {
  final e = userEmail.toLowerCase().trim();
  return 'ngmy_daily_${tool}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

Future<Map<String, String>> _loadMap(String key) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(key);
  if (raw == null || raw.isEmpty) return {};
  try {
    final m = jsonDecode(raw);
    if (m is Map) return m.map((k, v) => MapEntry(k.toString(), v.toString()));
  } catch (_) {}
  return {};
}

Future<void> _saveMap(String key, Map<String, String> data) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(key, jsonEncode(data));
}

/// Business Contacts — clients, vendors, and key people you call often.
Future<void> showNgmyKeyFobVaultDialog(BuildContext context, {required String userEmail}) async {
  final storageKey = _dailyKey(userEmail, 'key_fob');
  final data = await _loadMap(storageKey);
  final company = TextEditingController(text: data['car'] ?? data['company'] ?? '');
  final contactName = TextEditingController(text: data['vin'] ?? data['contactName'] ?? '');
  final phone = TextEditingController(text: data['plate'] ?? data['phone'] ?? '');
  final email = TextEditingController(text: data['spare'] ?? data['email'] ?? '');
  final role = TextEditingController(text: data['dealer'] ?? data['role'] ?? '');
  final notes = TextEditingController(text: data['locksmith'] ?? data['notes'] ?? '');
  final extra = TextEditingController(text: data['fobNote'] ?? data['extra'] ?? '');

  if (!context.mounted) return;
  await showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF0C1220),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
      title: const Row(
        children: [
          Icon(Icons.contacts_rounded, color: Color(0xFF38BDF8)),
          SizedBox(width: 8),
          Expanded(
            child: Text('Business Contacts', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 17)),
          ),
        ],
      ),
      content: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Keep clients, vendors, couriers, and key partners in one place — tap to call when you need them.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12, height: 1.35),
            ),
            const SizedBox(height: 12),
            _dailyField(company, 'Company / business name'),
            _dailyField(contactName, 'Contact name'),
            _dailyField(phone, 'Phone'),
            _dailyField(email, 'Email'),
            _dailyField(role, 'Role (client, vendor, supplier…)'),
            _dailyField(notes, 'Notes (hours, account #, best time to call)'),
            _dailyField(extra, 'Extra details'),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
        if (phone.text.trim().isNotEmpty)
          TextButton(
            onPressed: () => _dial(phone.text.trim()),
            child: const Text('Call'),
          ),
        FilledButton(
          onPressed: () async {
            await _saveMap(storageKey, {
              'car': company.text.trim(),
              'vin': contactName.text.trim(),
              'plate': phone.text.trim(),
              'spare': email.text.trim(),
              'dealer': role.text.trim(),
              'locksmith': notes.text.trim(),
              'fobNote': extra.text.trim(),
            });
            if (ctx.mounted) Navigator.pop(ctx);
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Business contact saved')));
            }
          },
          child: const Text('Save'),
        ),
      ],
    ),
  );
  company.dispose();
  contactName.dispose();
  phone.dispose();
  email.dispose();
  role.dispose();
  notes.dispose();
  extra.dispose();
}

/// Saved Locations — client sites, offices, delivery drops, meeting places.
Future<void> showNgmyParkMyCarDialog(BuildContext context, {required String userEmail}) async {
  final storageKey = _dailyKey(userEmail, 'park');
  final data = await _loadMap(storageKey);
  final site = TextEditingController(text: data['level'] ?? data['site'] ?? '');
  final address = TextEditingController(text: data['spot'] ?? data['address'] ?? '');
  var lat = data['lat'] ?? '';
  var lng = data['lng'] ?? '';
  var locating = false;

  if (!context.mounted) return;
  await showDialog<void>(
    context: context,
    builder: (ctx) => StatefulBuilder(
      builder: (ctx, setLocal) => AlertDialog(
        backgroundColor: const Color(0xFF0C1220),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        title: const Row(
          children: [
            Icon(Icons.place_rounded, color: Color(0xFF34D399)),
            SizedBox(width: 8),
            Text('Saved Locations', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 17)),
          ],
        ),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Pin client sites, offices, warehouses, or delivery spots — open in Maps anytime.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12),
              ),
              const SizedBox(height: 12),
              _dailyField(site, 'Location name (client, office, warehouse…)'),
              _dailyField(address, 'Address / suite / landmark'),
              if (lat.isNotEmpty && lng.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Text('GPS: $lat, $lng', style: const TextStyle(color: Color(0xFF34D399), fontSize: 11)),
                ),
              OutlinedButton.icon(
                onPressed: locating
                    ? null
                    : () async {
                        setLocal(() => locating = true);
                        try {
                          var perm = await Geolocator.checkPermission();
                          if (perm == LocationPermission.denied) {
                            perm = await Geolocator.requestPermission();
                          }
                          if (perm == LocationPermission.denied || perm == LocationPermission.deniedForever) {
                            if (ctx.mounted) {
                              ScaffoldMessenger.of(ctx).showSnackBar(
                                const SnackBar(content: Text('Allow location to save this pin')),
                              );
                            }
                            return;
                          }
                          final pos = await Geolocator.getCurrentPosition();
                          lat = pos.latitude.toStringAsFixed(6);
                          lng = pos.longitude.toStringAsFixed(6);
                          setLocal(() {});
                        } catch (e) {
                          if (ctx.mounted) {
                            ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(content: Text('GPS failed: $e')));
                          }
                        } finally {
                          setLocal(() => locating = false);
                        }
                      },
                icon: locating
                    ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                    : const Icon(Icons.my_location_rounded, size: 18),
                label: Text(locating ? 'Getting GPS…' : 'Save current GPS pin'),
              ),
            ],
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
          if (lat.isNotEmpty && lng.isNotEmpty)
            TextButton(
              onPressed: () => _openMaps(lat, lng),
              child: const Text('Open Maps'),
            ),
          FilledButton(
            onPressed: () async {
              await _saveMap(storageKey, {
                'level': site.text.trim(),
                'spot': address.text.trim(),
                'lat': lat,
                'lng': lng,
                'savedAt': DateTime.now().toIso8601String(),
              });
              if (ctx.mounted) Navigator.pop(ctx);
              if (context.mounted) {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Location saved')));
              }
            },
            child: const Text('Save location'),
          ),
        ],
      ),
    ),
  );
  site.dispose();
  address.dispose();
}

/// Quick Support — insurance, IT, bank, and emergency lines for daily business.
Future<void> showNgmyRoadsideReadyDialog(BuildContext context, {required String userEmail}) async {
  final storageKey = _dailyKey(userEmail, 'roadside');
  final data = await _loadMap(storageKey);
  final primary = TextEditingController(text: data['insurance'] ?? data['primary'] ?? '');
  final account = TextEditingController(text: data['policy'] ?? data['account'] ?? '');
  final support = TextEditingController(text: data['roadside'] ?? data['support'] ?? '');
  final emergency = TextEditingController(text: data['emergency'] ?? '');

  if (!context.mounted) return;
  await showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF0C1220),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
      title: const Row(
        children: [
          Icon(Icons.support_agent_rounded, color: Color(0xFFFBBF24)),
          SizedBox(width: 8),
          Text('Quick Support', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 17)),
        ],
      ),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Insurance, IT helpdesk, bank fraud line, lawyer, or backup contact — one tap to call when something goes wrong.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12, height: 1.35),
            ),
            const SizedBox(height: 12),
            _dailyField(primary, 'Primary line (insurance, broker, lawyer)'),
            _dailyField(account, 'Account / policy / reference #'),
            _dailyField(support, 'Support hotline (IT, vendor, bank)'),
            _dailyField(emergency, 'Emergency backup contact'),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
        if (support.text.trim().isNotEmpty)
          TextButton(onPressed: () => _dial(support.text.trim()), child: const Text('Call support')),
        if (emergency.text.trim().isNotEmpty)
          TextButton(onPressed: () => _dial(emergency.text.trim()), child: const Text('Call emergency')),
        FilledButton(
          onPressed: () async {
            await _saveMap(storageKey, {
              'insurance': primary.text.trim(),
              'policy': account.text.trim(),
              'roadside': support.text.trim(),
              'emergency': emergency.text.trim(),
            });
            if (ctx.mounted) Navigator.pop(ctx);
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Support numbers saved')));
            }
          },
          child: const Text('Save'),
        ),
      ],
    ),
  );
  primary.dispose();
  account.dispose();
  support.dispose();
  emergency.dispose();
}

Widget _dailyField(TextEditingController c, String label) => Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: TextField(
        controller: c,
        style: const TextStyle(color: Colors.white, fontSize: 14),
        decoration: InputDecoration(
          labelText: label,
          labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12),
          filled: true,
          fillColor: Colors.white.withValues(alpha: 0.06),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
          contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        ),
      ),
    );

Future<void> _dial(String phone) async {
  final digits = phone.replaceAll(RegExp(r'[^\d+]'), '');
  if (digits.isEmpty) return;
  final uri = Uri.parse('tel:$digits');
  if (await canLaunchUrl(uri)) await launchUrl(uri);
}

Future<void> _openMaps(String lat, String lng) async {
  final uri = Uri.parse('https://www.google.com/maps/search/?api=1&query=$lat,$lng');
  if (await canLaunchUrl(uri)) await launchUrl(uri, mode: LaunchMode.externalApplication);
}
