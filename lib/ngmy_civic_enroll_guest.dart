import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;

import 'ngmy_civic_enroll_link.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_registry_stats.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';
import 'ngmy_supabase_config.dart';

const _kCivicSelfEnrollmentSettingsKey = 'civic_self_enrollment_settings';

const _kUsStates = <String>[
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

bool ngmyIsGuestCivicEnrollLaunch() {
  if (ngmyPendingCivicSelfEnrollmentOpen) return true;
  return ngmyPeekCivicEnrollLaunchIntent();
}

/// Standalone civic self-enrollment — no NGMY login required.
class NgmyGuestCivicEnrollApp extends StatelessWidget {
  const NgmyGuestCivicEnrollApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Civic Registry Enrollment',
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF00B25A), brightness: Brightness.light),
        scaffoldBackgroundColor: const Color(0xFFF4F7F5),
      ),
      home: const NgmyGuestCivicEnrollScreen(),
    );
  }
}

class NgmyGuestCivicEnrollScreen extends StatefulWidget {
  const NgmyGuestCivicEnrollScreen({super.key});

  @override
  State<NgmyGuestCivicEnrollScreen> createState() => _NgmyGuestCivicEnrollScreenState();
}

class _NgmyGuestCivicEnrollScreenState extends State<NgmyGuestCivicEnrollScreen> {
  bool _loading = true;
  bool _submitting = false;
  bool _enabled = false;
  bool _done = false;
  String? _error;
  String? _registryId;

  List<String> _rooms = const [];
  Map<String, List<String>> _citiesByState = const {};
  List<String> _legacyCities = const [];
  List<Map<String, dynamic>> _members = const [];

  String _selectedState = 'Georgia';
  final _nameC = TextEditingController();
  final _dobC = TextEditingController();
  final _addressC = TextEditingController();
  final _phoneC = TextEditingController();
  final _emailC = TextEditingController();
  String? _idType;
  String? _city;
  String? _room;

  @override
  void initState() {
    super.initState();
    ngmyTakePendingCivicSelfEnrollmentOpen();
    unawaited(_load());
  }

  @override
  void dispose() {
    _nameC.dispose();
    _dobC.dispose();
    _addressC.dispose();
    _phoneC.dispose();
    _emailC.dispose();
    super.dispose();
  }

  List<String> _citiesForState() => NgmyCivicRegistryStats.citiesForState(
        civicCitiesByState: _citiesByState,
        legacyCities: _legacyCities,
        state: _selectedState,
      );

  Future<Map<String, dynamic>?> _fetchConfigCatalog() async {
    try {
      final uri = Uri.parse('${kNgmySupabaseUrl.trim()}/rest/v1/config').replace(
        queryParameters: {
          'id': 'eq.1',
          'select': 'cities,rooms,civicCitiesByState,civicSelfEnrollmentEnabled',
        },
      );
      final resp = await http
          .get(
            uri,
            headers: {
              'apikey': kNgmySupabaseAnonKey,
              'Authorization': 'Bearer $kNgmySupabaseAnonKey',
            },
          )
          .timeout(const Duration(seconds: 10));
      if (resp.statusCode != 200) return null;
      final decoded = jsonDecode(resp.body);
      if (decoded is! List || decoded.isEmpty) return null;
      final row = decoded.first;
      if (row is! Map) return null;
      return Map<String, dynamic>.from(row);
    } catch (e) {
      debugPrint('[civic_guest] config fetch: $e');
      return null;
    }
  }

  void _applyCatalog(Map<String, dynamic> source) {
    if (source.containsKey('civicSelfEnrollmentEnabled')) {
      _enabled = source['civicSelfEnrollmentEnabled'] == true;
    }
    final rooms = source['rooms'];
    if (rooms is List && rooms.isNotEmpty) {
      _rooms = rooms.map((e) => e.toString().trim()).where((e) => e.isNotEmpty).toList();
    }
    final cities = source['cities'];
    if (cities is List && cities.isNotEmpty) {
      _legacyCities = cities.map((e) => e.toString().trim()).where((e) => e.isNotEmpty).toList();
    }
    final byState = NgmyCivicRegistryStats.parseCivicCitiesByState(source['civicCitiesByState']);
    if (byState.isNotEmpty) _citiesByState = byState;
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _error = null;
    });

    Map<String, dynamic>? settings;
    Map<String, dynamic>? membersPayload;
    Map<String, dynamic>? configRow;

    for (var attempt = 0; attempt < 4; attempt++) {
      settings ??= await ngmyFetchSettingsValueViaRest(_kCivicSelfEnrollmentSettingsKey);
      membersPayload ??= await ngmyFetchSettingsValueViaRest(NgmyCivicRegistryMembers.cloudSettingsKey);
      configRow ??= await _fetchConfigCatalog();
      if (settings != null || configRow != null) break;
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 400 * (attempt + 1)));
    }

    if (!mounted) return;

    _enabled = false;
    _rooms = const [];
    _legacyCities = const [];
    _citiesByState = const {};
    _members = const [];

    if (configRow != null) _applyCatalog(configRow);
    if (settings != null) _applyCatalog(settings);

    if (membersPayload != null) {
      final raw = membersPayload['members'];
      if (raw is List) {
        _members = raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
      }
    }

    if (!_enabled) {
      setState(() {
        _loading = false;
        _error = 'Self-enrollment is not open right now. Ask an admin to turn it on.';
      });
      return;
    }

    final cities = _citiesForState();
    setState(() {
      _loading = false;
      _city = cities.contains(_city) ? _city : null;
      _room = _rooms.contains(_room) ? _room : null;
    });
  }

  String _generateRegistryId(String state) {
    final prefix = state.length >= 2 ? state.substring(0, 2).toUpperCase() : 'ST';
    final existing = _members
        .map((m) => (m['registryId'] ?? '').toString().trim().toUpperCase())
        .where((id) => id.isNotEmpty)
        .toSet();
    for (var i = 0; i < 5000; i++) {
      final candidate = '$prefix${math.Random().nextInt(8999999) + 1000000}';
      if (!existing.contains(candidate)) return candidate;
    }
    return '$prefix${DateTime.now().microsecondsSinceEpoch}';
  }

  Future<void> _submit() async {
    if (_submitting) return;
    final fullName = _nameC.text.trim();
    final dob = _dobC.text.trim();
    final idType = (_idType ?? '').trim();
    final address = _addressC.text.trim();
    final phone = _phoneC.text.trim();
    final email = _emailC.text.trim().toLowerCase();
    final city = (_city ?? '').trim();
    final room = (_room ?? '').trim();

    if (!RegExp(r'^\S+\s+\S+').hasMatch(fullName)) {
      _toast('Full Name must contain at least first and last name.');
      return;
    }
    if (!RegExp(r'^\d{2}/\d{2}/\d{4}$').hasMatch(dob)) {
      _toast('Date of Birth must be in MM/DD/YYYY format.');
      return;
    }
    if (idType.isEmpty) {
      _toast('Please select ID Type.');
      return;
    }
    if (address.isEmpty) {
      _toast('Home Address is required.');
      return;
    }
    if (!RegExp(r'^\d{7,15}$').hasMatch(phone)) {
      _toast('Phone must contain numbers only (7-15 digits).');
      return;
    }
    if (!RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$').hasMatch(email)) {
      _toast('Please enter a valid email address.');
      return;
    }
    final cities = _citiesForState();
    if (cities.isNotEmpty && !cities.contains(city)) {
      _toast('Please choose a city from the list.');
      return;
    }
    if (city.isEmpty) {
      _toast('City is required.');
      return;
    }
    if (_rooms.isNotEmpty && !_rooms.contains(room)) {
      _toast('Please choose a room from the list.');
      return;
    }
    if (room.isEmpty) {
      _toast('Room is required.');
      return;
    }

    setState(() => _submitting = true);
    try {
      // Re-fetch members so we merge with the latest cloud list.
      final latest = await ngmyFetchSettingsValueViaRest(NgmyCivicRegistryMembers.cloudSettingsKey) ?? {};
      final remoteMembers = <Map<String, dynamic>>[];
      final raw = latest['members'];
      if (raw is List) {
        for (final e in raw) {
          if (e is Map) remoteMembers.add(Map<String, dynamic>.from(e));
        }
      }

      final emailKey = NgmyCivicRegistryMembers.emailKey(email);
      if (remoteMembers.any((m) => NgmyCivicRegistryMembers.emailKey((m['email'] ?? '').toString()) == emailKey)) {
        _toast('This email is already enrolled in the Civic Registry.');
        setState(() => _submitting = false);
        return;
      }

      final duplicate = NgmyCivicRegistryMembers.findDuplicateInRecords(
        records: remoteMembers,
        fullName: fullName,
        dob: dob,
        city: city,
        excludeEmail: email,
      );
      if (duplicate != null) {
        _toast(NgmyCivicRegistryMembers.duplicateMessage(duplicate));
        setState(() => _submitting = false);
        return;
      }

      final registryId = _generateRegistryId(_selectedState);
      final member = NgmyCivicRegistryMembers.buildRecord(
        email: email,
        fullName: fullName,
        dob: dob,
        idType: idType,
        homeAddress: address,
        phone: phone,
        city: city,
        room: room,
        state: _selectedState,
        registryId: registryId,
      );
      remoteMembers.add(member);

      final payload = {
        'members': remoteMembers,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
        'source': 'guest_self_enrollment',
      };
      final ok = await ngmyUpsertSettingsRowReliable(NgmyCivicRegistryMembers.cloudSettingsKey, payload);
      if (!ok) {
        _toast('Could not save enrollment. Check your connection and try again.');
        setState(() => _submitting = false);
        return;
      }

      if (!mounted) return;
      setState(() {
        _submitting = false;
        _done = true;
        _registryId = registryId;
        _members = remoteMembers;
      });
    } catch (e) {
      debugPrint('[civic_guest] submit: $e');
      ngmyInvalidateCloudReachabilityCache();
      if (!mounted) return;
      setState(() => _submitting = false);
      _toast('Enrollment failed. Please try again.');
    }
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(color: Color(0xFF00B25A)),
              SizedBox(height: 16),
              Text('Opening enrollment…', style: TextStyle(fontWeight: FontWeight.w700)),
            ],
          ),
        ),
      );
    }

    if (_error != null) {
      return Scaffold(
        appBar: AppBar(title: const Text('Civic Enrollment'), backgroundColor: const Color(0xFF0F766E)),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.lock_outline_rounded, size: 56, color: Colors.black38),
                const SizedBox(height: 12),
                Text(_error!, textAlign: TextAlign.center, style: const TextStyle(fontSize: 15, height: 1.4)),
                const SizedBox(height: 16),
                FilledButton(onPressed: _load, child: const Text('Try again')),
              ],
            ),
          ),
        ),
      );
    }

    if (_done) {
      return Scaffold(
        body: SafeArea(
          child: Center(
            child: Padding(
              padding: const EdgeInsets.all(28),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.verified_rounded, size: 72, color: Color(0xFF00B25A)),
                  const SizedBox(height: 16),
                  const Text(
                    'You are enrolled',
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 10),
                  Text(
                    _registryId == null || _registryId!.isEmpty
                        ? 'Your information is now in the Civic Registry.'
                        : 'Registry ID: $_registryId\nYour information is now in the Civic Registry.',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 15, height: 1.45, color: Colors.black54),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    }

    final cities = _citiesForState();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Enroll Yourself'),
        backgroundColor: const Color(0xFF0F766E),
        foregroundColor: Colors.white,
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(18, 18, 18, 32),
        children: [
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFECFDF5),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFA7F3D0)),
            ),
            child: const Text(
              'No account or sign-in needed. Fill this form to enroll in the Civic Registry.',
              style: TextStyle(fontSize: 13, height: 1.35, fontWeight: FontWeight.w600, color: Color(0xFF065F46)),
            ),
          ),
          const SizedBox(height: 16),
          TextField(
            controller: _nameC,
            textCapitalization: TextCapitalization.words,
            decoration: const InputDecoration(labelText: 'Full Name *', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _dobC,
            keyboardType: TextInputType.number,
            inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9/]')), _DateSlashFormatter()],
            decoration: const InputDecoration(labelText: 'Date of Birth (MM/DD/YYYY) *', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 12),
          DropdownButtonFormField<String>(
            value: _idType,
            decoration: const InputDecoration(labelText: 'ID Type *', border: OutlineInputBorder()),
            items: const ['National ID', 'Passport', 'Drivers License', 'Voters Card']
                .map((s) => DropdownMenuItem(value: s, child: Text(s)))
                .toList(),
            onChanged: (v) => setState(() => _idType = v),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _addressC,
            decoration: const InputDecoration(labelText: 'Home Address *', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _phoneC,
            keyboardType: TextInputType.phone,
            inputFormatters: [FilteringTextInputFormatter.digitsOnly],
            decoration: const InputDecoration(labelText: 'Phone *', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _emailC,
            keyboardType: TextInputType.emailAddress,
            decoration: const InputDecoration(labelText: 'Email *', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 12),
          DropdownButtonFormField<String>(
            value: _kUsStates.contains(_selectedState) ? _selectedState : _kUsStates.first,
            decoration: const InputDecoration(labelText: 'State *', border: OutlineInputBorder()),
            items: _kUsStates.map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),
            onChanged: (v) {
              if (v == null) return;
              setState(() {
                _selectedState = v;
                _city = null;
              });
            },
          ),
          const SizedBox(height: 12),
          if (cities.isNotEmpty)
            DropdownButtonFormField<String>(
              value: cities.contains(_city) ? _city : null,
              decoration: const InputDecoration(labelText: 'City *', border: OutlineInputBorder()),
              items: cities.map((c) => DropdownMenuItem(value: c, child: Text(c))).toList(),
              onChanged: (v) => setState(() => _city = v),
            )
          else
            TextFormField(
              initialValue: _city,
              decoration: const InputDecoration(labelText: 'City *', border: OutlineInputBorder()),
              onChanged: (v) => _city = v.trim(),
            ),
          const SizedBox(height: 12),
          if (_rooms.isNotEmpty)
            DropdownButtonFormField<String>(
              value: _rooms.contains(_room) ? _room : null,
              decoration: const InputDecoration(labelText: 'Room *', border: OutlineInputBorder()),
              items: _rooms.map((r) => DropdownMenuItem(value: r, child: Text(r))).toList(),
              onChanged: (v) => setState(() => _room = v),
            )
          else
            TextFormField(
              initialValue: _room,
              decoration: const InputDecoration(labelText: 'Room *', border: OutlineInputBorder()),
              onChanged: (v) => _room = v.trim(),
            ),
          const SizedBox(height: 22),
          FilledButton(
            onPressed: _submitting ? null : _submit,
            style: FilledButton.styleFrom(
              backgroundColor: const Color(0xFF00B25A),
              minimumSize: const Size(double.infinity, 52),
            ),
            child: _submitting
                ? const SizedBox(
                    width: 22,
                    height: 22,
                    child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white),
                  )
                : const Text('Complete Enrollment', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 16)),
          ),
        ],
      ),
    );
  }
}

class _DateSlashFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final digits = newValue.text.replaceAll(RegExp(r'[^0-9]'), '');
    final buf = StringBuffer();
    for (var i = 0; i < digits.length && i < 8; i++) {
      if (i == 2 || i == 4) buf.write('/');
      buf.write(digits[i]);
    }
    final text = buf.toString();
    return TextEditingValue(text: text, selection: TextSelection.collapsed(offset: text.length));
  }
}
