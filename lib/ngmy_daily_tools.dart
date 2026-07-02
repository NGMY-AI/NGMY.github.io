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

/// Key Fob Vault — car info, spare key location, lost-key steps (daily use).
Future<void> showNgmyKeyFobVaultDialog(BuildContext context, {required String userEmail}) async {
  final storageKey = _dailyKey(userEmail, 'key_fob');
  final data = await _loadMap(storageKey);
  final car = TextEditingController(text: data['car'] ?? '');
  final vin = TextEditingController(text: data['vin'] ?? '');
  final plate = TextEditingController(text: data['plate'] ?? '');
  final spare = TextEditingController(text: data['spare'] ?? '');
  final dealer = TextEditingController(text: data['dealer'] ?? '');
  final locksmith = TextEditingController(text: data['locksmith'] ?? '');
  final fobNote = TextEditingController(text: data['fobNote'] ?? '');

  if (!context.mounted) return;
  await showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF0C1220),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
      title: const Row(
        children: [
          Icon(Icons.key_rounded, color: Color(0xFF38BDF8)),
          SizedBox(width: 8),
          Expanded(child: Text('Key Fob Vault', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 17))),
        ],
      ),
      content: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Save your car & key details here. If you lose your fob, everything you need is in one place. '
              'For remote start/unlock, open your car brand app (FordPass, myToyota, Tesla, etc.) — NGMY stores your info and guides you.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12, height: 1.35),
            ),
            const SizedBox(height: 12),
            _dailyField(car, 'Car (year, make, model)'),
            _dailyField(vin, 'VIN'),
            _dailyField(plate, 'License plate'),
            _dailyField(fobNote, 'Key fob type / smart key notes'),
            _dailyField(spare, 'Spare key location'),
            _dailyField(dealer, 'Dealer phone'),
            _dailyField(locksmith, 'Locksmith phone'),
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFF38BDF8).withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.35)),
              ),
              child: Text(
                'Lost key? 1) Call locksmith  2) Use spare  3) Dealer replacement  4) Check car app for digital key',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 11, height: 1.4),
              ),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
        if (dealer.text.trim().isNotEmpty)
          TextButton(
            onPressed: () => _dial(dealer.text.trim()),
            child: const Text('Call dealer'),
          ),
        FilledButton(
          onPressed: () async {
            await _saveMap(storageKey, {
              'car': car.text.trim(),
              'vin': vin.text.trim(),
              'plate': plate.text.trim(),
              'spare': spare.text.trim(),
              'dealer': dealer.text.trim(),
              'locksmith': locksmith.text.trim(),
              'fobNote': fobNote.text.trim(),
            });
            if (ctx.mounted) Navigator.pop(ctx);
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Key Fob Vault saved')));
            }
          },
          child: const Text('Save'),
        ),
      ],
    ),
  );
  car.dispose();
  vin.dispose();
  plate.dispose();
  spare.dispose();
  dealer.dispose();
  locksmith.dispose();
  fobNote.dispose();
}

/// Park My Car — GPS pin, level/spot notes, open in Maps.
Future<void> showNgmyParkMyCarDialog(BuildContext context, {required String userEmail}) async {
  final storageKey = _dailyKey(userEmail, 'park');
  final data = await _loadMap(storageKey);
  final spot = TextEditingController(text: data['spot'] ?? '');
  final level = TextEditingController(text: data['level'] ?? '');
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
            Icon(Icons.local_parking_rounded, color: Color(0xFF34D399)),
            SizedBox(width: 8),
            Text('Park My Car', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 17)),
          ],
        ),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Drop a pin when you park so you never wander the lot again.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12),
              ),
              const SizedBox(height: 12),
              _dailyField(level, 'Garage level / row (e.g. Level 3, Row B)'),
              _dailyField(spot, 'Landmark (e.g. near elevator 2)'),
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
                                const SnackBar(content: Text('Allow location to save parking GPS')),
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
                'spot': spot.text.trim(),
                'level': level.text.trim(),
                'lat': lat,
                'lng': lng,
                'savedAt': DateTime.now().toIso8601String(),
              });
              if (ctx.mounted) Navigator.pop(ctx);
              if (context.mounted) {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Parking spot saved')));
              }
            },
            child: const Text('Save spot'),
          ),
        ],
      ),
    ),
  );
  spot.dispose();
  level.dispose();
}

/// Roadside Ready — insurance, roadside, emergency quick-dial.
Future<void> showNgmyRoadsideReadyDialog(BuildContext context, {required String userEmail}) async {
  final storageKey = _dailyKey(userEmail, 'roadside');
  final data = await _loadMap(storageKey);
  final insurance = TextEditingController(text: data['insurance'] ?? '');
  final policy = TextEditingController(text: data['policy'] ?? '');
  final roadside = TextEditingController(text: data['roadside'] ?? '');
  final emergency = TextEditingController(text: data['emergency'] ?? '');

  if (!context.mounted) return;
  await showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF0C1220),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
      title: const Row(
        children: [
          Icon(Icons.car_crash_rounded, color: Color(0xFFFBBF24)),
          SizedBox(width: 8),
          Text('Roadside Ready', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 17)),
        ],
      ),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Flat tire or breakdown? One tap to call roadside or emergency — info saved on your phone.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12, height: 1.35),
            ),
            const SizedBox(height: 12),
            _dailyField(insurance, 'Insurance company'),
            _dailyField(policy, 'Policy #'),
            _dailyField(roadside, 'Roadside / AAA phone'),
            _dailyField(emergency, 'Emergency contact'),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
        if (roadside.text.trim().isNotEmpty)
          TextButton(onPressed: () => _dial(roadside.text.trim()), child: const Text('Call roadside')),
        if (emergency.text.trim().isNotEmpty)
          TextButton(onPressed: () => _dial(emergency.text.trim()), child: const Text('Call emergency')),
        FilledButton(
          onPressed: () async {
            await _saveMap(storageKey, {
              'insurance': insurance.text.trim(),
              'policy': policy.text.trim(),
              'roadside': roadside.text.trim(),
              'emergency': emergency.text.trim(),
            });
            if (ctx.mounted) Navigator.pop(ctx);
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Roadside kit saved')));
            }
          },
          child: const Text('Save'),
        ),
      ],
    ),
  );
  insurance.dispose();
  policy.dispose();
  roadside.dispose();
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
