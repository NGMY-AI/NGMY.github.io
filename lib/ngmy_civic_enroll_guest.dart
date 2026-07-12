import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;

import 'ngmy_civic_enroll_link.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_registry_stats.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_settings_cloud.dart';
import 'ngmy_state_picker.dart';
import 'ngmy_supabase_config.dart';
import 'ngmy_web_status_bar.dart';

const _kCivicSelfEnrollmentSettingsKey = 'civic_self_enrollment_settings';
/// Match main app dark chrome (`0xFF121212`) so status/nav bars do not clash.
const _kBg = Color(0xFF121212);
const _kAccent = Color(0xFF22D3EE);
const _kAccentSoft = Color(0xFFA78BFA);
const _kGreen = Color(0xFF10B981);
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

void _applyEnrollChrome() {
  ngmyApplyWebStatusBarStyle(lightMode: false);
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: _kBg,
      statusBarIconBrightness: Brightness.light,
      statusBarBrightness: Brightness.dark,
      systemNavigationBarColor: _kBg,
      systemNavigationBarIconBrightness: Brightness.light,
      systemNavigationBarDividerColor: _kBg,
    ),
  );
}

/// Standalone civic self-enrollment — no NGMY login required.
class NgmyGuestCivicEnrollApp extends StatelessWidget {
  const NgmyGuestCivicEnrollApp({super.key});

  @override
  Widget build(BuildContext context) {
    _applyEnrollChrome();
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'NGMY Self Enrollment',
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: _kBg,
        canvasColor: _kBg,
        colorScheme: const ColorScheme.dark(
          surface: _kBg,
          primary: _kAccent,
          secondary: _kAccentSoft,
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: _kBg,
          foregroundColor: Colors.white,
          elevation: 0,
          scrolledUnderElevation: 0,
          surfaceTintColor: Colors.transparent,
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

class _NgmyGuestCivicEnrollScreenState extends State<NgmyGuestCivicEnrollScreen> with TickerProviderStateMixin {
  bool _loading = true;
  bool _submitting = false;
  bool _done = false;
  String? _loadError;
  String? _registryId;

  Map<String, List<String>> _citiesByState = const {};
  List<String> _legacyCities = const [];
  List<Map<String, dynamic>> _members = const [];

  String _selectedState = 'Georgia';
  final _nameC = TextEditingController();
  final _addressC = TextEditingController();
  final _phoneC = TextEditingController();
  final _familyMembersC = TextEditingController();

  late final AnimationController _pulse;
  late final AnimationController _shimmer;
  late final AnimationController _orbit;

  @override
  void initState() {
    super.initState();
    _applyEnrollChrome();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _shimmer = AnimationController(vsync: this, duration: const Duration(milliseconds: 3600))..repeat();
    _orbit = AnimationController(vsync: this, duration: const Duration(milliseconds: 10000))..repeat();
    ngmyTakePendingCivicSelfEnrollmentOpen();
    _selectedState = _stateFromLaunchUrl() ?? 'Georgia';
    unawaited(_load());
  }

  @override
  void dispose() {
    _pulse.dispose();
    _shimmer.dispose();
    _orbit.dispose();
    _nameC.dispose();
    _addressC.dispose();
    _phoneC.dispose();
    _familyMembersC.dispose();
    super.dispose();
  }

  String? _stateFromLaunchUrl() {
    try {
      final state = Uri.base.queryParameters['state']?.trim();
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

  void _absorbCatalog(Map<String, dynamic> source) {
    final cities = source['cities'];
    if (cities is List && cities.isNotEmpty) {
      _legacyCities = cities.map((e) => e.toString().trim()).where((e) => e.isNotEmpty).toList();
    }
    final byState = NgmyCivicRegistryStats.parseCivicCitiesByState(source['civicCitiesByState']);
    if (byState.isNotEmpty) {
      _citiesByState = byState;
      if (_citiesForState().isEmpty) {
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
    });

    Map<String, dynamic>? membersPayload;
    Map<String, dynamic>? configRow;
    Map<String, dynamic>? settings;

    for (var attempt = 0; attempt < 5; attempt++) {
      membersPayload ??= await ngmyFetchSettingsValueReliable(NgmyCivicRegistryMembers.cloudSettingsKey);
      configRow ??= await _fetchConfigCatalog();
      settings ??= await ngmyFetchSettingsValueReliable(_kCivicSelfEnrollmentSettingsKey);
      if (membersPayload != null || configRow != null || settings != null) break;
      if (attempt < 4) await Future<void>.delayed(Duration(milliseconds: 450 * (attempt + 1)));
    }

    if (!mounted) return;

    _legacyCities = const [];
    _citiesByState = const {};
    _members = const [];

    if (configRow != null) _absorbCatalog(configRow);
    if (settings != null) _absorbCatalog(settings);

    if (membersPayload != null) {
      final raw = membersPayload['members'];
      if (raw is List) {
        _members = raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
      }
    }

    if (!mounted) return;
    setState(() => _loading = false);
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

  String _guestEmailFromPhone(String phone) {
    final digits = phone.replaceAll(RegExp(r'\D'), '');
    return 'civic.$digits@guest.ngmy';
  }

  Future<void> _submit() async {
    if (_submitting) return;
    final fullName = _nameC.text.trim();
    final address = _addressC.text.trim();
    final phone = _phoneC.text.trim();
    final familyRaw = _familyMembersC.text.trim();
    final familyMembers = int.tryParse(familyRaw) ?? 0;
    final state = _selectedState.trim();

    if (fullName.isEmpty) {
      _toast('Full Name is required.');
      return;
    }
    if (!RegExp(r'^\S+\s+\S+').hasMatch(fullName)) {
      _toast('Full Name must contain at least first and last name.');
      return;
    }
    if (address.isEmpty) {
      _toast('Home Address is required.');
      return;
    }
    if (phone.isEmpty) {
      _toast('Phone is required.');
      return;
    }
    if (!RegExp(r'^\d{7,15}$').hasMatch(phone)) {
      _toast('Phone must contain numbers only (7-15 digits).');
      return;
    }
    if (familyRaw.isEmpty) {
      _toast('Family Members is required.');
      return;
    }
    if (familyMembers < 1 || familyMembers > 99) {
      _toast('Enter how many family members (1–99).');
      return;
    }
    if (state.isEmpty) {
      _toast('State is required.');
      return;
    }

    final email = _guestEmailFromPhone(phone);

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

      final duplicate = NgmyCivicRegistryMembers.findDuplicateInRecords(
        records: remoteMembers,
        fullName: fullName,
        homeAddress: address,
        phone: phone,
        excludeEmail: email,
      );
      if (duplicate != null) {
        _toast(NgmyCivicRegistryMembers.duplicateMessage(duplicate));
        setState(() => _submitting = false);
        return;
      }

      final registryId = _generateRegistryId(state);
      final member = NgmyCivicRegistryMembers.buildRecord(
        email: email,
        fullName: fullName,
        dob: '',
        idType: '',
        homeAddress: address,
        phone: phone,
        city: '',
        room: '',
        state: state,
        registryId: registryId,
        familyMembers: familyMembers,
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
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg), backgroundColor: const Color(0xFF1F2937)));
  }

  Widget _livingBackdrop(double pulse, double orbit) {
    return Stack(
      fit: StackFit.expand,
      children: [
        const ColoredBox(color: _kBg),
        Positioned(
          left: -80 + orbit * 40,
          top: -40,
          child: Container(
            width: 220,
            height: 220,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                colors: [
                  _kAccent.withValues(alpha: 0.16 + pulse * 0.08),
                  Colors.transparent,
                ],
              ),
            ),
          ),
        ),
        Positioned(
          right: -60,
          top: 120 + pulse * 20,
          child: Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                colors: [
                  _kAccentSoft.withValues(alpha: 0.14 + pulse * 0.08),
                  Colors.transparent,
                ],
              ),
            ),
          ),
        ),
        Positioned(
          left: 40,
          bottom: 40,
          child: Container(
            width: 160,
            height: 160,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                colors: [
                  _kGreen.withValues(alpha: 0.10 + pulse * 0.06),
                  Colors.transparent,
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _titleBadge(double pulse, double shimmer) {
    return Transform.scale(
      scale: 1.0 + pulse * 0.02,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18),
              gradient: LinearGradient(
                begin: Alignment(-1.2 + shimmer * 2.4, -0.4),
                end: Alignment(1.2 - shimmer * 2.4, 0.6),
                colors: [
                  _kAccent.withValues(alpha: 0.22 + pulse * 0.12),
                  Colors.white.withValues(alpha: 0.08),
                  _kAccentSoft.withValues(alpha: 0.20 + pulse * 0.10),
                ],
              ),
              border: Border.all(
                color: Colors.white.withValues(alpha: 0.28 + pulse * 0.18),
                width: 1.2,
              ),
              boxShadow: [
                BoxShadow(color: _kAccent.withValues(alpha: 0.18 + pulse * 0.12), blurRadius: 18, offset: const Offset(0, 6)),
              ],
            ),
            child: Text(
              'NGMY self enrollment',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                letterSpacing: 0.8 + pulse * 0.3,
                color: Colors.white,
                shadows: [
                  Shadow(color: _kAccent.withValues(alpha: 0.35 + pulse * 0.2), blurRadius: 10),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _glassField({required Widget child}) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            color: Colors.white.withValues(alpha: 0.05),
            border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
          ),
          child: child,
        ),
      ),
    );
  }

  InputDecoration _dec(String label) => InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(color: _kMuted, fontWeight: FontWeight.w600),
        floatingLabelStyle: const TextStyle(color: _kAccent, fontWeight: FontWeight.w700),
        border: InputBorder.none,
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
      );

  Future<void> _pickState() async {
    final picked = await showNgmyStatePickerSheet(
      context,
      states: _kUsStates,
      selected: _selectedState,
      title: 'Choose state',
    );
    if (picked == null || !mounted) return;
    setState(() => _selectedState = picked);
  }

  Widget _mottoBadge(double pulse, double shimmer) {
    return Transform.scale(
      scale: 1.0 + pulse * 0.03,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
          child: Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              gradient: LinearGradient(
                begin: Alignment(-1.0 + shimmer * 2.0, -0.3),
                end: Alignment(1.0 - shimmer * 2.0, 0.5),
                colors: [
                  _kAccentSoft.withValues(alpha: 0.22 + pulse * 0.12),
                  Colors.white.withValues(alpha: 0.06),
                  _kAccent.withValues(alpha: 0.18 + pulse * 0.10),
                ],
              ),
              border: Border.all(
                color: Colors.white.withValues(alpha: 0.28 + pulse * 0.16),
                width: 1.2,
              ),
              boxShadow: [
                BoxShadow(
                  color: _kAccentSoft.withValues(alpha: 0.20 + pulse * 0.14),
                  blurRadius: 16 + pulse * 8,
                  offset: const Offset(0, 6),
                ),
              ],
            ),
            child: Text(
              "EMO 'YA MMBOND0 · $_selectedState",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                letterSpacing: 1.1 + pulse * 0.4,
                color: Colors.white,
                shadows: [
                  Shadow(color: _kAccent.withValues(alpha: 0.4 + pulse * 0.2), blurRadius: 12),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _submitButton(double pulse, double shimmer) {
    return GestureDetector(
      onTap: _submitting ? null : _submit,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 220),
        height: 54,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          gradient: LinearGradient(
            begin: Alignment(-1 + shimmer * 2, 0),
            end: Alignment(1 - shimmer * 2, 1),
            colors: [
              Color.lerp(const Color(0xFF059669), const Color(0xFF10B981), pulse)!,
              Color.lerp(const Color(0xFF0EA5E9), const Color(0xFF22D3EE), 1 - pulse)!,
            ],
          ),
          boxShadow: [
            BoxShadow(
              color: _kGreen.withValues(alpha: 0.28 + pulse * 0.22),
              blurRadius: 18 + pulse * 10,
              offset: const Offset(0, 8),
            ),
          ],
          border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
        ),
        child: Center(
          child: _submitting
              ? const SizedBox(
                  width: 22,
                  height: 22,
                  child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white),
                )
              : const Text(
                  'Complete Enrollment',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: Colors.white, letterSpacing: 0.4),
                ),
        ),
      ),
    );
  }

  Widget _shell({required Widget child}) {
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        statusBarColor: _kBg,
        statusBarIconBrightness: Brightness.light,
        statusBarBrightness: Brightness.dark,
        systemNavigationBarColor: _kBg,
        systemNavigationBarIconBrightness: Brightness.light,
        systemNavigationBarDividerColor: _kBg,
      ),
      child: Scaffold(
        backgroundColor: _kBg,
        body: AnimatedBuilder(
          animation: Listenable.merge([_pulse, _shimmer, _orbit]),
          builder: (context, _) {
            final pulse = Curves.easeInOut.transform(_pulse.value);
            return Stack(
              fit: StackFit.expand,
              children: [
                _livingBackdrop(pulse, _orbit.value),
                SafeArea(child: child),
              ],
            );
          },
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return _shell(
        child: const Center(
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

    if (_loadError != null) {
      return _shell(
        child: Column(
          children: [
            const SizedBox(height: 24),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: AnimatedBuilder(
                animation: Listenable.merge([_pulse, _shimmer]),
                builder: (context, child) => _titleBadge(Curves.easeInOut.transform(_pulse.value), _shimmer.value),
              ),
            ),
            const SizedBox(height: 12),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: AnimatedBuilder(
                animation: Listenable.merge([_pulse, _shimmer]),
                builder: (context, child) => _mottoBadge(Curves.easeInOut.transform(_pulse.value), _shimmer.value),
              ),
            ),
            Expanded(
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 28),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(22),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 14, sigmaY: 14),
                      child: Container(
                        width: double.infinity,
                        constraints: const BoxConstraints(maxWidth: 420),
                        padding: const EdgeInsets.fromLTRB(22, 28, 22, 24),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(22),
                          color: Colors.white.withValues(alpha: 0.05),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
                        ),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(Icons.wifi_off_rounded, color: Colors.white.withValues(alpha: 0.55), size: 34),
                            const SizedBox(height: 16),
                            const Text(
                              'Could not load',
                              style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: Colors.white),
                              textAlign: TextAlign.center,
                            ),
                            const SizedBox(height: 10),
                            Text(
                              _loadError!,
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 14, height: 1.45, color: _kMuted),
                            ),
                            const SizedBox(height: 22),
                            OutlinedButton(
                              onPressed: _load,
                              style: OutlinedButton.styleFrom(
                                foregroundColor: Colors.white,
                                side: BorderSide(color: Colors.white.withValues(alpha: 0.25)),
                                minimumSize: const Size(double.infinity, 46),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                              ),
                              child: const Text('Try again', style: TextStyle(fontWeight: FontWeight.w700)),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      );
    }

    if (_done) {
      return _shell(
        child: Column(
          children: [
            const SizedBox(height: 20),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: AnimatedBuilder(
                animation: Listenable.merge([_pulse, _shimmer]),
                builder: (context, child) => _titleBadge(Curves.easeInOut.transform(_pulse.value), _shimmer.value),
              ),
            ),
            const SizedBox(height: 12),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: AnimatedBuilder(
                animation: Listenable.merge([_pulse, _shimmer]),
                builder: (context, child) => _mottoBadge(Curves.easeInOut.transform(_pulse.value), _shimmer.value),
              ),
            ),
            Expanded(
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.all(28),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      AnimatedBuilder(
                        animation: _pulse,
                        builder: (context, child) {
                          final pulse = Curves.easeInOut.transform(_pulse.value);
                          return Icon(Icons.verified_rounded, size: 78, color: Color.lerp(_kGreen, _kAccent, pulse));
                        },
                      ),
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
          ],
        ),
      );
    }

    return _shell(
      child: Column(
        children: [
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 24),
              children: [
                AnimatedBuilder(
                  animation: Listenable.merge([_pulse, _shimmer]),
                  builder: (context, child) => _titleBadge(Curves.easeInOut.transform(_pulse.value), _shimmer.value),
                ),
                const SizedBox(height: 12),
                AnimatedBuilder(
                  animation: Listenable.merge([_pulse, _shimmer]),
                  builder: (context, child) => _mottoBadge(Curves.easeInOut.transform(_pulse.value), _shimmer.value),
                ),
                const SizedBox(height: 22),
                _glassField(
                  child: TextField(
                    controller: _nameC,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                    textCapitalization: TextCapitalization.words,
                    decoration: _dec('Full Name'),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: TextField(
                    controller: _addressC,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                    decoration: _dec('Home Address'),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: TextField(
                    controller: _phoneC,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                    keyboardType: TextInputType.phone,
                    inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                    decoration: _dec('Phone'),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: TextField(
                    controller: _familyMembersC,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                    keyboardType: TextInputType.number,
                    inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                    decoration: _dec('Family Members'),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: InkWell(
                    onTap: _pickState,
                    borderRadius: BorderRadius.circular(16),
                    child: InputDecorator(
                      decoration: _dec('State'),
                      child: Row(
                        children: [
                          Expanded(
                            child: Text(
                              _selectedState,
                              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 15),
                            ),
                          ),
                          Icon(Icons.expand_more_rounded, color: Colors.white.withValues(alpha: 0.55)),
                        ],
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 26),
                AnimatedBuilder(
                  animation: Listenable.merge([_pulse, _shimmer]),
                  builder: (context, child) => _submitButton(Curves.easeInOut.transform(_pulse.value), _shimmer.value),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

