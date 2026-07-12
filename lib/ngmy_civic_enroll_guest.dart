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
const _kBg = Color(0xFF0B0F14);
const _kPanel = Color(0xFF121821);
const _kBorder = Color(0xFF243041);
const _kAccent = Color(0xFF00B25A);
const _kMuted = Color(0xFF94A3B8);

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

bool _civicFlagOn(dynamic raw) {
  if (raw == true || raw == 1) return true;
  final s = raw?.toString().trim().toLowerCase() ?? '';
  return s == 'true' || s == '1' || s == 'yes' || s == 'on';
}

/// Standalone civic self-enrollment — no NGMY login required.
class NgmyGuestCivicEnrollApp extends StatelessWidget {
  const NgmyGuestCivicEnrollApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Civic Registry Enrollment',
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: _kBg,
        colorScheme: ColorScheme.fromSeed(seedColor: _kAccent, brightness: Brightness.dark),
        inputDecorationTheme: InputDecorationTheme(
          filled: true,
          fillColor: _kPanel,
          labelStyle: const TextStyle(color: _kMuted),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: _kBorder)),
          enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: _kBorder)),
          focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: _kAccent, width: 1.4)),
        ),
        dropdownMenuTheme: const DropdownMenuThemeData(
          textStyle: TextStyle(color: Colors.white),
        ),
      ),
      theme: ThemeData(useMaterial3: true, brightness: Brightness.dark, scaffoldBackgroundColor: _kBg),
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
  bool _closed = false;
  bool _done = false;
  String? _loadError;
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
    _selectedState = _stateFromLaunchUrl() ?? 'Georgia';
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

  String? _stateFromLaunchUrl() {
    try {
      final uri = Uri.base;
      final state = uri.queryParameters['state']?.trim();
      if (state != null && state.isNotEmpty) {
        for (final s in _kUsStates) {
          if (s.toLowerCase() == state.toLowerCase()) return s;
        }
      }
    } catch (_) {}
    return null;
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
      if (resp.statusCode != 200) {
        debugPrint('[civic_guest] config status ${resp.statusCode}');
        return null;
      }
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

  void _absorbCatalog(Map<String, dynamic> source) {
    if (_civicFlagOn(source['civicSelfEnrollmentEnabled'])) {
      _enabled = true;
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
    if (byState.isNotEmpty) {
      _citiesByState = byState;
      if (!_kUsStates.contains(_selectedState) || (_citiesForState().isEmpty && byState.isNotEmpty)) {
        final preferred = byState.keys.firstWhere(
          (k) => k.trim().toLowerCase() == _selectedState.toLowerCase(),
          orElse: () => byState.keys.first,
        );
        _selectedState = preferred;
      }
    }
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _loadError = null;
      _closed = false;
    });

    Map<String, dynamic>? settings;
    Map<String, dynamic>? membersPayload;
    Map<String, dynamic>? configRow;

    for (var attempt = 0; attempt < 5; attempt++) {
      settings ??= await ngmyFetchSettingsValueReliable(_kCivicSelfEnrollmentSettingsKey);
      membersPayload ??= await ngmyFetchSettingsValueReliable(NgmyCivicRegistryMembers.cloudSettingsKey);
      configRow ??= await _fetchConfigCatalog();
      final sawEnabled = (settings != null && _civicFlagOn(settings['civicSelfEnrollmentEnabled'])) ||
          (configRow != null && _civicFlagOn(configRow['civicSelfEnrollmentEnabled']));
      if (sawEnabled || (settings != null && configRow != null)) break;
      if (attempt < 4) await Future<void>.delayed(Duration(milliseconds: 450 * (attempt + 1)));
    }

    if (!mounted) return;

    _enabled = false;
    _rooms = const [];
    _legacyCities = const [];
    _citiesByState = const {};
    _members = const [];

    // Any source saying ON wins — never let a stale OFF wipe a fresh ON from another store.
    if (configRow != null) _absorbCatalog(configRow);
    if (settings != null) _absorbCatalog(settings);

    if (membersPayload != null) {
      final raw = membersPayload['members'];
      if (raw is List) {
        _members = raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
      }
    }

    if (!_enabled) {
      setState(() {
        _loading = false;
        _closed = true;
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
      final latest = await ngmyFetchSettingsValueReliable(NgmyCivicRegistryMembers.cloudSettingsKey) ?? {};
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

  Widget _footerBrand() {
    return Center(
      child: Container(
        margin: const EdgeInsets.only(top: 18, bottom: 8),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(
          color: const Color(0xFF0F172A),
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: _kBorder),
        ),
        child: Text(
          "EMO 'YA MMBOND0 · $_selectedState",
          style: const TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.w700,
            letterSpacing: 0.6,
            color: _kMuted,
          ),
        ),
      ),
    );
  }

  InputDecoration _field(String label) => InputDecoration(labelText: label);

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: _kBg,
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(color: _kAccent),
              SizedBox(height: 16),
              Text('Opening enrollment…', style: TextStyle(fontWeight: FontWeight.w700, color: Colors.white)),
            ],
          ),
        ),
      );
    }

    if (_closed || _loadError != null) {
      return Scaffold(
        backgroundColor: _kBg,
        body: SafeArea(
          child: Column(
            children: [
              Expanded(
                child: Center(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 28),
                    child: Container(
                      width: double.infinity,
                      constraints: const BoxConstraints(maxWidth: 420),
                      padding: const EdgeInsets.fromLTRB(22, 28, 22, 24),
                      decoration: BoxDecoration(
                        color: _kPanel,
                        borderRadius: BorderRadius.circular(22),
                        border: Border.all(color: _kBorder),
                        boxShadow: [
                          BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 28, offset: const Offset(0, 12)),
                        ],
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Container(
                            width: 64,
                            height: 64,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: const Color(0xFF1E293B),
                              border: Border.all(color: const Color(0xFF334155)),
                            ),
                            child: const Icon(Icons.lock_rounded, color: Color(0xFF94A3B8), size: 30),
                          ),
                          const SizedBox(height: 18),
                          const Text(
                            'Enrollment closed',
                            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: Colors.white),
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(height: 10),
                          Text(
                            _loadError ??
                                'Self-enrollment is not open for this registry right now. Please check back later or ask your administrator.',
                            textAlign: TextAlign.center,
                            style: const TextStyle(fontSize: 14, height: 1.45, color: _kMuted),
                          ),
                          const SizedBox(height: 22),
                          SizedBox(
                            width: double.infinity,
                            child: OutlinedButton(
                              onPressed: _load,
                              style: OutlinedButton.styleFrom(
                                foregroundColor: Colors.white,
                                side: const BorderSide(color: _kBorder),
                                minimumSize: const Size(double.infinity, 46),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                              ),
                              child: const Text('Check again', style: TextStyle(fontWeight: FontWeight.w700)),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              _footerBrand(),
              const SizedBox(height: 12),
            ],
          ),
        ),
      );
    }

    if (_done) {
      return Scaffold(
        backgroundColor: _kBg,
        body: SafeArea(
          child: Column(
            children: [
              Expanded(
                child: Center(
                  child: Padding(
                    padding: const EdgeInsets.all(28),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Icon(Icons.verified_rounded, size: 72, color: _kAccent),
                        const SizedBox(height: 16),
                        const Text(
                          'You are enrolled',
                          style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: Colors.white),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 10),
                        Text(
                          _registryId == null || _registryId!.isEmpty
                              ? 'Your information is now in the Civic Registry.'
                              : 'Registry ID: $_registryId\nYour information is now in the Civic Registry.',
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontSize: 15, height: 1.45, color: _kMuted),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              _footerBrand(),
              const SizedBox(height: 12),
            ],
          ),
        ),
      );
    }

    final cities = _citiesForState();

    return Scaffold(
      backgroundColor: _kBg,
      appBar: AppBar(
        title: const Text('Enroll Yourself'),
        backgroundColor: const Color(0xFF0F172A),
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(18, 18, 18, 12),
              children: [
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: const Color(0xFF052E1C),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: const Color(0xFF14532D)),
                  ),
                  child: const Text(
                    'No account or sign-in needed. Fill this form to enroll in the Civic Registry.',
                    style: TextStyle(fontSize: 13, height: 1.35, fontWeight: FontWeight.w600, color: Color(0xFF86EFAC)),
                  ),
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: _nameC,
                  style: const TextStyle(color: Colors.white),
                  textCapitalization: TextCapitalization.words,
                  decoration: _field('Full Name *'),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: _dobC,
                  style: const TextStyle(color: Colors.white),
                  keyboardType: TextInputType.number,
                  inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9/]')), _DateSlashFormatter()],
                  decoration: _field('Date of Birth (MM/DD/YYYY) *'),
                ),
                const SizedBox(height: 12),
                DropdownButtonFormField<String>(
                  key: ValueKey('id-$_idType'),
                  initialValue: _idType,
                  dropdownColor: _kPanel,
                  style: const TextStyle(color: Colors.white),
                  decoration: _field('ID Type *'),
                  items: const ['National ID', 'Passport', 'Drivers License', 'Voters Card']
                      .map((s) => DropdownMenuItem(value: s, child: Text(s)))
                      .toList(),
                  onChanged: (v) => setState(() => _idType = v),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: _addressC,
                  style: const TextStyle(color: Colors.white),
                  decoration: _field('Home Address *'),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: _phoneC,
                  style: const TextStyle(color: Colors.white),
                  keyboardType: TextInputType.phone,
                  inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                  decoration: _field('Phone *'),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: _emailC,
                  style: const TextStyle(color: Colors.white),
                  keyboardType: TextInputType.emailAddress,
                  decoration: _field('Email *'),
                ),
                const SizedBox(height: 12),
                DropdownButtonFormField<String>(
                  key: ValueKey('state-$_selectedState'),
                  initialValue: _kUsStates.contains(_selectedState) ? _selectedState : _kUsStates.first,
                  dropdownColor: _kPanel,
                  style: const TextStyle(color: Colors.white),
                  decoration: _field('State *'),
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
                    key: ValueKey('city-$_selectedState-$_city'),
                    initialValue: cities.contains(_city) ? _city : null,
                    dropdownColor: _kPanel,
                    style: const TextStyle(color: Colors.white),
                    decoration: _field('City *'),
                    items: cities.map((c) => DropdownMenuItem(value: c, child: Text(c))).toList(),
                    onChanged: (v) => setState(() => _city = v),
                  )
                else
                  TextFormField(
                    initialValue: _city,
                    style: const TextStyle(color: Colors.white),
                    decoration: _field('City *'),
                    onChanged: (v) => _city = v.trim(),
                  ),
                const SizedBox(height: 12),
                if (_rooms.isNotEmpty)
                  DropdownButtonFormField<String>(
                    key: ValueKey('room-$_room'),
                    initialValue: _rooms.contains(_room) ? _room : null,
                    dropdownColor: _kPanel,
                    style: const TextStyle(color: Colors.white),
                    decoration: _field('Room *'),
                    items: _rooms.map((r) => DropdownMenuItem(value: r, child: Text(r))).toList(),
                    onChanged: (v) => setState(() => _room = v),
                  )
                else
                  TextFormField(
                    initialValue: _room,
                    style: const TextStyle(color: Colors.white),
                    decoration: _field('Room *'),
                    onChanged: (v) => _room = v.trim(),
                  ),
                const SizedBox(height: 22),
                FilledButton(
                  onPressed: _submitting ? null : _submit,
                  style: FilledButton.styleFrom(
                    backgroundColor: _kAccent,
                    foregroundColor: Colors.white,
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
          ),
          _footerBrand(),
          const SizedBox(height: 10),
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
