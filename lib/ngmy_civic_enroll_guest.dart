import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;

import 'ngmy_civic_enroll_link.dart';
import 'ngmy_civic_registry_id_card.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_registry_stats.dart';
import 'ngmy_light_notice_dialog.dart';
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
  final _familyMalesC = TextEditingController();
  final _familyFemalesC = TextEditingController();

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
    _familyMalesC.dispose();
    _familyFemalesC.dispose();
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
    final prefix = NgmyCivicRegistryIdCard.stateCode(state);
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
    final malesRaw = _familyMalesC.text.trim();
    final femalesRaw = _familyFemalesC.text.trim();
    final males = malesRaw.isEmpty ? 0 : (int.tryParse(malesRaw) ?? -1);
    final females = femalesRaw.isEmpty ? 0 : (int.tryParse(femalesRaw) ?? -1);
    final state = _selectedState.trim();

    if (fullName.isEmpty) {
      _toast('Jina kamili linahitajika.');
      return;
    }
    // Require at least first + last name (two non-empty words).
    if (!RegExp(r'^\S+\s+\S+').hasMatch(fullName)) {
      _toast('Andika jina la kwanza na jina la mwisho.');
      return;
    }
    if (address.isEmpty) {
      _toast('Anwani ya nyumbani inahitajika.');
      return;
    }
    if (phone.isEmpty) {
      _toast('Nambari ya simu inahitajika.');
      return;
    }
    if (!RegExp(r'^\d{7,15}$').hasMatch(phone)) {
      _toast('Simu iwe nambari tu (tarakimu 7–15).');
      return;
    }
    if (familyRaw.isEmpty) {
      _toast('Ukubwa wa familia unahitajika.');
      return;
    }
    if (familyMembers < 1 || familyMembers > 99) {
      _toast('Andika ukubwa wa familia (1–99).');
      return;
    }
    if (malesRaw.isNotEmpty && males < 0) {
      _toast('Wanaume lazima iwe nambari (au uache wazi).');
      return;
    }
    if (femalesRaw.isNotEmpty && females < 0) {
      _toast('Wanawake lazima iwe nambari (au uache wazi).');
      return;
    }
    // Male/female split is optional. Only enforce the sum when both are provided.
    if (malesRaw.isNotEmpty && femalesRaw.isNotEmpty && males + females != familyMembers) {
      _toast('Wanaume + wanawake lazima iwe sawa na ukubwa wa familia ($familyMembers), au uache wazi.');
      return;
    }
    if (state.isEmpty) {
      _toast('Jimbo linahitajika.');
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

      final remoteRemoved = <Map<String, dynamic>>[];
      final removedRaw = latest['removed'] ?? latest['civicRegistryRemoved'];
      if (removedRaw is List) {
        for (final e in removedRaw) {
          if (e is Map) remoteRemoved.add(Map<String, dynamic>.from(e));
        }
      }
      remoteRemoved.removeWhere(
        (r) => NgmyCivicRegistryMembers.emailKey((r['email'] ?? '').toString()) == email,
      );

      final duplicate = NgmyCivicRegistryMembers.findDuplicateInRecords(
        records: remoteMembers,
        fullName: fullName,
        homeAddress: address,
        phone: phone,
      );
      if (duplicate != null) {
        final name = (duplicate['fullName'] ?? '').toString().trim();
        final id = (duplicate['registryId'] ?? '').toString().trim();
        final parts = <String>[if (name.isNotEmpty) name else 'Mwanachama'];
        if (id.isNotEmpty) parts.add('ID $id');
        _toast(
          'Tayari umesajiliwa — jina, anwani, au simu inafanana (${parts.join(' · ')}). Mtu mmoja hawezi kujisajili mara mbili.',
        );
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
        familyMales: males,
        familyFemales: females,
        enrollmentSource: 'guest_self_enrollment',
      );
      remoteMembers.add(member);

      final payload = {
        'members': remoteMembers,
        'removed': remoteRemoved,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
        'source': 'guest_self_enrollment',
      };
      final ok = await ngmyUpsertSettingsRowReliable(NgmyCivicRegistryMembers.cloudSettingsKey, payload);
      if (!ok) {
        _toast('Haikuweza kuhifadhi usajili. Angalia muunganisho wako kisha jaribu tena.');
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
      _toast('Usajili umeshindikana. Tafadhali jaribu tena.');
    }
  }

  void _toast(String msg) {
    if (!mounted) return;
    showNgmyLightNotice(
      context,
      title: 'Tafadhali angalia',
      message: msg,
      okLabel: 'Sawa',
      icon: Icons.edit_note_rounded,
    );
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
    // Logo ring sits at the far end of the title bar; keep bar height the same.
    const logoSize = 54.0;
    return Transform.scale(
      scale: 1.0 + pulse * 0.02,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.center,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(18),
            child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 16,
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(16, 8, 58, 8),
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
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w900,
                    letterSpacing: 0.7 + pulse * 0.3,
                    color: Colors.white,
                    shadows: [
                      Shadow(color: _kAccent.withValues(alpha: 0.35 + pulse * 0.2), blurRadius: 10),
                    ],
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            right: -2,
            child: Container(
              width: logoSize,
              height: logoSize,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: const SweepGradient(
                  colors: [
                    Color(0xFFFFF4C2),
                    Color(0xFFD4AF37),
                    Color(0xFFB8860B),
                    Color(0xFFF5E6A3),
                    Color(0xFFD4AF37),
                    Color(0xFF8B6914),
                    Color(0xFFFFF4C2),
                  ],
                ),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFFD4AF37).withValues(alpha: 0.45 + pulse * 0.2),
                    blurRadius: 12,
                    spreadRadius: 0.5,
                  ),
                ],
              ),
              padding: const EdgeInsets.all(2.4),
              child: Container(
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.white,
                ),
                clipBehavior: Clip.antiAlias,
                child: Transform.scale(
                  // Medium-strong zoom so letters stay readable in the circle.
                  scale: 1.22,
                  child: Padding(
                    padding: const EdgeInsets.all(1.5),
                    child: Image.asset(
                      'assets/images/ngmy_logo.png',
                      fit: BoxFit.contain,
                      alignment: Alignment.center,
                      errorBuilder: (_, __, ___) => Image.network(
                        'https://i.ibb.co/LhbMvz9/ngmy-logo.png',
                        fit: BoxFit.contain,
                        alignment: Alignment.center,
                        errorBuilder: (_, __, ___) => const ColoredBox(
                          color: Colors.white,
                          child: Center(
                            child: Text('NGMY', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 8, color: Color(0xFF1E3A5F))),
                          ),
                        ),
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

  Widget _glassField({required Widget child}) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 10,
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

  /// Soft rounded inner cells for family size (no sharp Material fill corners).
  Widget _familySoftField({
    required TextEditingController controller,
    required String label,
  }) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        color: Colors.white.withValues(alpha: 0.08),
        border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
      ),
      child: TextField(
        controller: controller,
        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
        keyboardType: TextInputType.number,
        inputFormatters: [FilteringTextInputFormatter.digitsOnly],
        decoration: InputDecoration(
          labelText: label,
          labelStyle: const TextStyle(color: _kMuted, fontWeight: FontWeight.w600, fontSize: 13),
          floatingLabelStyle: const TextStyle(color: _kAccent, fontWeight: FontWeight.w700),
          border: InputBorder.none,
          enabledBorder: InputBorder.none,
          focusedBorder: InputBorder.none,
          filled: false,
          contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
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
        child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 12,
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
              "EMO 'YA M'MBONDO · $_selectedState",
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
                  'Kamilisha usajili',
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
              Text('Inafungua usajili…', style: TextStyle(fontWeight: FontWeight.w700, color: Colors.white)),
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
                    child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 14,
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
                              'Haikuweza kupakia',
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
                              child: const Text('Jaribu tena', style: TextStyle(fontWeight: FontWeight.w700)),
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
                        'Umesajiliwa',
                        style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: Colors.white),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 10),
                      Text(
                        _registryId == null || _registryId!.isEmpty
                            ? 'Maelezo yako sasa yamo katika Sajili ya Wananchi.'
                            : 'Nambari ya sajili: $_registryId\nMaelezo yako sasa yamo katika Sajili ya Wananchi.',
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
                    decoration: _dec('Jina kamili'),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: TextField(
                    controller: _addressC,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                    decoration: _dec('Anwani ya nyumbani'),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: TextField(
                    controller: _phoneC,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                    keyboardType: TextInputType.phone,
                    inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                    decoration: _dec('Simu'),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Text(
                          'Ukubwa wa familia',
                          style: TextStyle(
                            color: Colors.white.withValues(alpha: 0.78),
                            fontSize: 13,
                            fontWeight: FontWeight.w800,
                          ),
                        ),
                        const SizedBox(height: 12),
                        _familySoftField(
                          controller: _familyMembersC,
                          label: 'Jumla (idadi ya watu)',
                        ),
                        const SizedBox(height: 10),
                        Row(
                          children: [
                            Expanded(
                              child: _familySoftField(
                                controller: _familyMalesC,
                                label: 'Wanaume (M) — hiari',
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: _familySoftField(
                                controller: _familyFemalesC,
                                label: 'Wanawake (F) — hiari',
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                _glassField(
                  child: InkWell(
                    onTap: _pickState,
                    borderRadius: BorderRadius.circular(16),
                    child: InputDecorator(
                      decoration: _dec('Jimbo'),
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

