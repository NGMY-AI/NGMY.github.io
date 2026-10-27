import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_feature_sync_session.dart';
import 'ngmy_loan_settings.dart';
import 'ngmy_loan_phone.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_offline.dart';
import 'ngmy_upload_shrink.dart';

const ngmyLoanPhotoKeys = ['idFrontRef', 'idBackRef', 'selfieRef', 'titleFrontRef', 'titleBackRef'];

/// Local backup for loan photo refs — survives cloud sync that strips base64 blobs.
class NgmyLoanPhotosStore {
  static String _key(String loanId) => 'ngmy_loan_photos_${loanId.trim()}';

  static Map<String, String> refsFromApp(Map<String, dynamic> app) {
    final out = <String, String>{};
    for (final k in ngmyLoanPhotoKeys) {
      final v = (app[k] ?? '').toString().trim();
      if (v.isNotEmpty) out[k] = v;
    }
    return out;
  }

  static Future<void> saveForApp(Map<String, dynamic> app) async {
    final id = (app['id'] ?? '').toString().trim();
    if (id.isEmpty) return;
    final refs = refsFromApp(app);
    if (refs.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(id), jsonEncode(refs));
  }

  static Future<void> applyTo(List<Map<String, dynamic>> apps) async {
    if (apps.isEmpty) return;
    for (final app in apps) {
      await applyToApp(app);
    }
  }

  static Future<void> applyToApp(Map<String, dynamic> app) async {
    final id = (app['id'] ?? '').toString().trim();
    if (id.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(id));
    if (raw == null || raw.isEmpty) return;
    try {
      final stored = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      ngmyLoanMergePhotoRefsIntoApp(app, stored);
    } catch (_) {}
  }

  static Future<void> remove(String loanId) async {
    if (loanId.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key(loanId.trim()));
  }
}

void ngmyLoanMergePhotoRefsIntoApp(Map<String, dynamic> dst, Map<String, dynamic> src) {
  for (final k in ngmyLoanPhotoKeys) {
    final d = (dst[k] ?? '').toString().trim();
    final s = (src[k] ?? '').toString().trim();
    if (s.isEmpty) continue;
    if (d.isEmpty) {
      dst[k] = s;
      continue;
    }
    final dCloud = d.startsWith('supabase://');
    final sCloud = s.startsWith('supabase://');
    if (!dCloud && sCloud) dst[k] = s;
  }
}

/// Keep list/config storage small — photo bytes live in NgmyLoanPhotosStore + Supabase.
void ngmyLoanCompactPhotoRefsForListStorage(Map<String, dynamic> app) {
  for (final k in ngmyLoanPhotoKeys) {
    final v = (app[k] ?? '').toString().trim();
    if (v.isEmpty || v.startsWith('supabase://') || v.startsWith('http')) continue;
    app[k] = '';
  }
}

/// Lightweight cloud status map — users see approve/reject without re-downloading full loans.
class NgmyLoanStatusCloud {
  static const _settingsKey = 'ngmy_loan_status_map_v1';

  static Map<String, dynamic> statusMapFromApps(List<Map<String, dynamic>> apps) {
    final map = <String, dynamic>{};
    for (final raw in apps) {
      final id = (raw['id'] ?? '').toString().trim();
      final status = (raw['status'] ?? '').toString().trim();
      if (id.isEmpty || status.isEmpty) continue;
      map[id] = {
        'status': status,
        'approvedAt': raw['approvedAt'],
        'rejectionReason': raw['rejectionReason'],
        'updatedAt': raw['updatedAt'] ?? DateTime.now().toUtc().toIso8601String(),
      };
    }
    return map;
  }

  static void applyStatusMap(List<Map<String, dynamic>> apps, Map<String, dynamic> statusMap) {
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      final override = statusMap[id];
      if (override is! Map) continue;
      final remote = Map<String, dynamic>.from(override);
      final rs = (remote['status'] ?? '').toString();
      if (rs.isEmpty) continue;
      final ls = (apps[i]['status'] ?? 'pending').toString();
      final remoteFinal = rs == 'approved' || rs == 'rejected';
      final localFinal = ls == 'approved' || ls == 'rejected';
      final ru = (remote['updatedAt'] ?? '').toString();
      final lu = (apps[i]['updatedAt'] ?? '').toString();
      if (remoteFinal && !localFinal) {
        apps[i]['status'] = rs;
        if (remote['approvedAt'] != null) apps[i]['approvedAt'] = remote['approvedAt'];
        if (remote['rejectionReason'] != null) apps[i]['rejectionReason'] = remote['rejectionReason'];
        if (ru.isNotEmpty) apps[i]['updatedAt'] = ru;
      } else if (remoteFinal && localFinal && ru.compareTo(lu) > 0) {
        apps[i]['status'] = rs;
        if (remote['approvedAt'] != null) apps[i]['approvedAt'] = remote['approvedAt'];
        if (remote['rejectionReason'] != null) apps[i]['rejectionReason'] = remote['rejectionReason'];
        apps[i]['updatedAt'] = ru;
      }
    }
  }

  static Future<void> pushFromApps(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await ngmyDbRelaySettingsUpsert(_settingsKey, {
        'statuses': statusMapFromApps(apps),
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      });
    } catch (e) {
      debugPrint('[loan status cloud] push: $e');
    }
  }

  static Future<void> fetchAndApply(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud() || apps.isEmpty) return;
    try {
      final value = await ngmyDbRelaySettingsFetch(_settingsKey);
      if (value == null) return;
      final statuses = value['statuses'];
      if (statuses is Map) {
        applyStatusMap(apps, Map<String, dynamic>.from(statuses));
      }
    } catch (e) {
      debugPrint('[loan status cloud] fetch: $e');
    }
  }
}

/// Instant local backup for admin loan approve/reject — survives cloud lag.
class NgmyLoanStatusStore {
  static String _key(String loanId) => 'ngmy_loan_status_${loanId.trim()}';

  static Future<void> saveDecision(
    String loanId, {
    required String status,
    String? approvedAt,
    String? rejectionReason,
  }) async {
    if (loanId.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(loanId),
      jsonEncode({
        'status': status,
        if (approvedAt != null) 'approvedAt': approvedAt,
        if (rejectionReason != null) 'rejectionReason': rejectionReason,
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      }),
    );
  }

  static Future<void> applyTo(List<Map<String, dynamic>> apps) async {
    if (apps.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      final raw = prefs.getString(_key(id));
      if (raw == null || raw.isEmpty) continue;
      try {
        final m = Map<String, dynamic>.from(jsonDecode(raw) as Map);
        final status = (m['status'] ?? '').toString();
        if (status.isEmpty) continue;
        apps[i]['status'] = status;
        if (m['approvedAt'] != null) apps[i]['approvedAt'] = m['approvedAt'];
        if (m['rejectionReason'] != null) apps[i]['rejectionReason'] = m['rejectionReason'];
        if (m['updatedAt'] != null) apps[i]['updatedAt'] = m['updatedAt'];
      } catch (_) {}
    }
  }

  static Future<void> remove(String loanId) async {
    if (loanId.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key(loanId.trim()));
  }
}

/// Merge payment rows — paid status always wins (admin recordings survive user stale sync).
List<Map<String, dynamic>> ngmyLoanMergePaymentsList(
  List<Map<String, dynamic>> local,
  List<Map<String, dynamic>> remote,
) {
  if (remote.isEmpty) return local.map((e) => Map<String, dynamic>.from(e)).toList();
  if (local.isEmpty) return remote.map((e) => Map<String, dynamic>.from(e)).toList();
  final byId = <String, Map<String, dynamic>>{};
  for (final p in local) {
    final id = (p['id'] ?? '').toString();
    if (id.isNotEmpty) byId[id] = Map<String, dynamic>.from(p);
  }
  for (final p in remote) {
    final id = (p['id'] ?? '').toString();
    if (id.isEmpty) continue;
    final r = Map<String, dynamic>.from(p);
    final existing = byId[id];
    if (existing == null) {
      byId[id] = r;
      continue;
    }
    final localPaid = (existing['status'] ?? '') == 'paid';
    final remotePaid = (r['status'] ?? '') == 'paid';
    if (remotePaid && !localPaid) {
      byId[id] = r;
    } else if (localPaid && !remotePaid) {
      byId[id] = existing;
    } else {
      final lp = (existing['paidAt'] ?? '').toString();
      final rp = (r['paidAt'] ?? '').toString();
      byId[id] = rp.compareTo(lp) >= 0 ? r : existing;
    }
  }
  final out = byId.values.toList();
  out.sort((a, b) => (a['id'] ?? '').toString().compareTo((b['id'] ?? '').toString()));
  return out;
}

void ngmyLoanMergePaymentsIntoApp(Map<String, dynamic> dst, Map<String, dynamic> src) {
  final local = (dst['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
  final remote = (src['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
  if (local.isEmpty && remote.isEmpty) return;
  dst['payments'] = ngmyLoanMergePaymentsList(local, remote);
}

int ngmyLoanPaidCount(List<dynamic> payments) =>
    payments.where((p) => p is Map && (p['status'] ?? '') == 'paid').length;

double ngmyLoanPaidTotal(List<dynamic> payments) {
  var sum = 0.0;
  for (final p in payments) {
    if (p is! Map) continue;
    if ((p['status'] ?? '') != 'paid') continue;
    sum += (p['paidAmount'] as num?)?.toDouble() ?? (p['amount'] as num?)?.toDouble() ?? 0;
  }
  return sum;
}

/// Cloud + local backup for weekly payment recordings (admin → user in real time).
class NgmyLoanPaymentsCloud {
  static const _settingsKey = 'ngmy_loan_payments_map_v1';

  static List<Map<String, dynamic>> paymentsFromLoan(Map<String, dynamic> loan) {
    return (loan['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
  }

  static Map<String, dynamic> paymentsMapFromApps(List<Map<String, dynamic>> apps) {
    final map = <String, dynamic>{};
    for (final loan in apps) {
      final id = (loan['id'] ?? '').toString().trim();
      final payments = paymentsFromLoan(loan);
      if (id.isEmpty || payments.isEmpty) continue;
      map[id] = {
        'payments': payments,
        'updatedAt': loan['paymentsUpdatedAt'] ?? loan['updatedAt'] ?? DateTime.now().toUtc().toIso8601String(),
      };
    }
    return map;
  }

  static void applyPaymentsMap(List<Map<String, dynamic>> apps, Map<String, dynamic> payMap) {
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      final entry = payMap[id];
      if (entry is! Map) continue;
      final remote = Map<String, dynamic>.from(entry);
      final remotePayments = (remote['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
      if (remotePayments.isEmpty) continue;
      final localPayments = paymentsFromLoan(apps[i]);
      apps[i]['payments'] = ngmyLoanMergePaymentsList(localPayments, remotePayments);
      final ru = (remote['updatedAt'] ?? '').toString();
      if (ru.isNotEmpty) apps[i]['paymentsUpdatedAt'] = ru;
    }
  }

  static Future<void> pushLoan(String loanId, Map<String, dynamic> loan) async {
    if (!await ngmyCanReachCloud() || loanId.trim().isEmpty) return;
    try {
      final payments = paymentsFromLoan(loan);
      if (payments.isEmpty) return;
      Map<String, dynamic> existing = {};
      final value = await ngmyDbRelaySettingsFetch(_settingsKey);
      if (value != null) {
        final m = value['payments'];
        if (m is Map) existing = Map<String, dynamic>.from(m);
      }
      existing[loanId] = {
        'payments': payments,
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      };
      await ngmyDbRelaySettingsUpsert(_settingsKey, {
        'payments': existing,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      });
    } catch (e) {
      debugPrint('[loan payments cloud] push: $e');
    }
  }

  static Future<void> pushFromApps(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await ngmyDbRelaySettingsUpsert(_settingsKey, {
        'payments': paymentsMapFromApps(apps),
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      });
    } catch (e) {
      debugPrint('[loan payments cloud] push all: $e');
    }
  }

  static Future<void> fetchAndApply(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud() || apps.isEmpty) return;
    try {
      final value = await ngmyDbRelaySettingsFetch(_settingsKey);
      if (value == null) return;
      final payments = value['payments'];
      if (payments is Map) applyPaymentsMap(apps, Map<String, dynamic>.from(payments));
    } catch (e) {
      debugPrint('[loan payments cloud] fetch: $e');
    }
  }

  static Future<void> fetchAndApplyForLoan(List<Map<String, dynamic>> apps, String loanId) async {
    await fetchAndApply(apps);
    await NgmyLoanPaymentsStore.applyTo(apps, loanId: loanId);
  }
}

class NgmyLoanPaymentsStore {
  static String _key(String loanId) => 'ngmy_loan_payments_${loanId.trim()}';

  static Future<void> save(String loanId, List<Map<String, dynamic>> payments) async {
    if (loanId.trim().isEmpty || payments.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(loanId),
      jsonEncode({
        'payments': payments,
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      }),
    );
  }

  static Future<void> remove(String loanId) async {
    if (loanId.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key(loanId.trim()));
  }

  static Future<void> applyTo(List<Map<String, dynamic>> apps, {String? loanId}) async {
    if (apps.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      if (loanId != null && loanId.trim().isNotEmpty && id != loanId.trim()) continue;
      final raw = prefs.getString(_key(id));
      if (raw == null || raw.isEmpty) continue;
      try {
        final m = Map<String, dynamic>.from(jsonDecode(raw) as Map);
        final stored = (m['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
        if (stored.isEmpty) continue;
        final local = NgmyLoanPaymentsCloud.paymentsFromLoan(apps[i]);
        apps[i]['payments'] = ngmyLoanMergePaymentsList(local, stored);
        if (m['updatedAt'] != null) apps[i]['paymentsUpdatedAt'] = m['updatedAt'];
      } catch (_) {}
    }
  }
}

/// Cached loan photo widget — no blink on tap/rebuild.
class NgmyLoanImage extends StatefulWidget {
  const NgmyLoanImage(this.ref, {super.key, this.fit = BoxFit.cover});
  final dynamic ref;
  final BoxFit fit;

  @override
  State<NgmyLoanImage> createState() => _NgmyLoanImageState();
}

class _NgmyLoanImageState extends State<NgmyLoanImage> {
  static final Map<String, String> _resolvedUrls = {};
  static final Map<String, Uint8List> _memoryBytes = {};

  String? _display;
  Uint8List? _bytes;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _resolve();
  }

  Future<void> _resolve() async {
    final src = (widget.ref ?? '').toString().trim();
    if (src.isEmpty) {
      if (mounted) setState(() => _loading = false);
      return;
    }
    if (src.startsWith('data:image')) {
      try {
        final b = base64Decode(src.split(',').last);
        _memoryBytes[src] = b;
        if (mounted) setState(() { _bytes = b; _loading = false; });
        return;
      } catch (_) {}
    }
    if (_memoryBytes.containsKey(src)) {
      if (mounted) setState(() { _bytes = _memoryBytes[src]; _loading = false; });
      return;
    }
    if (_resolvedUrls.containsKey(src)) {
      if (mounted) setState(() { _display = _resolvedUrls[src]; _loading = false; });
      return;
    }
    if (src.startsWith('http')) {
      _resolvedUrls[src] = src;
      if (mounted) setState(() { _display = src; _loading = false; });
      return;
    }
    final resolved = await NgmyLoanStore.resolveRef(src);
    _resolvedUrls[src] = resolved;
    if (resolved.startsWith('data:image')) {
      try {
        final b = base64Decode(resolved.split(',').last);
        _memoryBytes[src] = b;
        if (mounted) setState(() { _bytes = b; _loading = false; });
        return;
      } catch (_) {}
    }
    if (mounted) setState(() { _display = resolved; _loading = false; });
  }

  @override
  Widget build(BuildContext context) {
    if (_bytes != null && _bytes!.isNotEmpty) {
      return Image.memory(_bytes!, fit: widget.fit, gaplessPlayback: true, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, size: 28));
    }
    final url = _display ?? '';
    if (url.startsWith('http')) {
      return Image.network(url, fit: widget.fit, gaplessPlayback: true, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, size: 28));
    }
    if (!kIsWeb && url.isNotEmpty && !url.startsWith('http') && !url.startsWith('data:')) {
      final file = File(url);
      if (file.existsSync()) {
        return Image.file(file, fit: widget.fit, gaplessPlayback: true, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, size: 28));
      }
    }
    if (!kIsWeb && url.startsWith('/')) {
      return Image.file(File(url), fit: widget.fit, gaplessPlayback: true);
    }
    if (_loading) {
      return const Center(child: SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2)));
    }
    return const Icon(Icons.image_not_supported, size: 32);
  }
}

/// Bridge to app config without importing main.dart (avoids circular imports).
class NgmyLoanConfigBridge {
  NgmyLoanConfigBridge({
    required this.loanApplications,
    required this.loanPhone,
    required this.loanHowItWorks,
    required this.officialCashApp,
    required this.loanCompanyZelle,
  });

  List<Map<String, dynamic>> loanApplications;
  String loanPhone;
  String loanHowItWorks;
  String officialCashApp;
  String loanCompanyZelle;
}

String ngmyLoanFormatCurrency(double v) {
  if (v == v.roundToDouble()) return v.toStringAsFixed(0);
  return v.toStringAsFixed(2);
}

const Color _loanGreen = Color(0xFF00B25A);
const Color _loanGreenDark = Color(0xFF00894B);

class _LoanUi {
  _LoanUi(this.isDark);
  final bool isDark;

  Color get pageBg => isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6);
  Color get card => isDark ? const Color(0xFF151B28) : Colors.white;
  Color get fieldFill => isDark ? const Color(0xFF1E2535) : const Color(0xFFF9FAFB);
  Color get textPrimary => isDark ? Colors.white : const Color(0xFF111827);
  Color get textSecondary => isDark ? Colors.white70 : const Color(0xFF6B7280);
  Color get border => isDark ? Colors.white24 : Colors.grey.shade300;
  Color get subtle => isDark ? Colors.white12 : Colors.black.withValues(alpha: 0.04);
}

/// Loan applications, admin review, and payment tracking.
class NgmyLoanServicesScreen extends StatefulWidget {
  const NgmyLoanServicesScreen({
    super.key,
    required this.userEmail,
    required this.username,
    required this.config,
    required this.onDataChanged,
    this.onPersistNow,
    this.onRefreshLoans,
    this.showCalculator = false,
  });

  final String userEmail;
  final String username;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final Future<bool> Function()? onPersistNow;
  final Future<void> Function()? onRefreshLoans;

  /// The loan calculator is for the admin only.
  final bool showCalculator;

  @override
  State<NgmyLoanServicesScreen> createState() => _NgmyLoanServicesScreenState();
}

class _NgmyLoanServicesScreenState extends State<NgmyLoanServicesScreen> with WidgetsBindingObserver, TickerProviderStateMixin {
  bool _refreshing = false;
  late final AnimationController _heroCtrl;

  @override
  void initState() {
    super.initState();
    NgmyFeatureSyncSession.enterLoans();
    _heroCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..forward();
    WidgetsBinding.instance.addObserver(this);
    unawaited(_refreshLoans());
    unawaited(NgmyLoanSettings.load().then((_) {
      if (mounted) setState(() {});
    }));
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _heroCtrl.dispose();
    NgmyFeatureSyncSession.leaveLoans();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) unawaited(_refreshLoans());
  }

  Future<void> _refreshLoans() async {
    if (_refreshing) return;
    _refreshing = true;
    try {
      await widget.onRefreshLoans?.call();
      await NgmyLoanPhotosStore.applyTo(widget.config.loanApplications);
      await NgmyLoanStatusCloud.fetchAndApply(widget.config.loanApplications);
      await NgmyLoanPaymentsCloud.fetchAndApply(widget.config.loanApplications);
      await NgmyLoanPaymentsStore.applyTo(widget.config.loanApplications);
    } finally {
      _refreshing = false;
      if (mounted) setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ui = _LoanUi(isDark);
    final myLoans = NgmyLoanStore.appsForUser(widget.config.loanApplications, widget.userEmail);
    final active = myLoans.where((a) => (a['status'] ?? '') == 'approved').toList();
    final pending = myLoans.where((a) => (a['status'] ?? '') == 'pending').toList();
    final rejected = myLoans.where((a) => (a['status'] ?? '') == 'rejected').toList();

    return Scaffold(
      backgroundColor: ui.pageBg,
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: ui.textPrimary,
        elevation: 0,
        scrolledUnderElevation: 0,
        surfaceTintColor: Colors.transparent,
        leading: Padding(
          padding: const EdgeInsets.only(left: 8),
          child: IconButton(
            icon: Icon(Icons.arrow_back_ios_new_rounded, color: ui.textPrimary, size: 20),
            onPressed: () => Navigator.pop(context),
          ),
        ),
        title: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: isDark ? Colors.white.withValues(alpha: 0.08) : Colors.white.withValues(alpha: 0.92),
            border: Border.all(color: _loanGreen.withValues(alpha: 0.35)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.all(6),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: const Icon(Icons.trending_up_rounded, color: Colors.white, size: 16),
              ),
              const SizedBox(width: 8),
              Text('Loan Services', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: ui.textPrimary)),
            ],
          ),
        ),
        centerTitle: true,
      ),
      body: RefreshIndicator(
        color: _loanGreen,
        onRefresh: _refreshLoans,
        child: SingleChildScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          padding: EdgeInsets.fromLTRB(20, MediaQuery.paddingOf(context).top + kToolbarHeight + 8, 20, 20),
          child: FadeTransition(
            opacity: CurvedAnimation(parent: _heroCtrl, curve: Curves.easeOut),
            child: SlideTransition(
              position: Tween<Offset>(begin: const Offset(0, 0.06), end: Offset.zero)
                  .animate(CurvedAnimation(parent: _heroCtrl, curve: Curves.easeOutCubic)),
              child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _headerCard(),
              if (active.isNotEmpty) ...[
                const SizedBox(height: 18),
                ...active.map((a) => _activeLoanHeroCard(context, a, isDark)),
              ],
              const SizedBox(height: 18),
              Center(
                child: ScaleTransition(
                  scale: Tween<double>(begin: 0.92, end: 1).animate(
                    CurvedAnimation(parent: _heroCtrl, curve: const Interval(0.35, 1, curve: Curves.easeOutBack)),
                  ),
                  child: ClipRRect(
                  borderRadius: BorderRadius.circular(28),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      onTap: () => _openApplication(context),
                      child: Ink(
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]),
                          boxShadow: [
                            BoxShadow(color: _loanGreen.withValues(alpha: 0.35), blurRadius: 18, offset: const Offset(0, 8)),
                          ],
                        ),
                        padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 14),
                        child: const Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(Icons.description_outlined, color: Colors.white, size: 18),
                            SizedBox(width: 8),
                            Text('Apply for a Loan', style: TextStyle(fontWeight: FontWeight.w900, color: Colors.white, fontSize: 14)),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
                ),
              ),
              if (pending.isNotEmpty) ...[
                const SizedBox(height: 20),
                Text('Pending review', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: ui.textPrimary)),
                const SizedBox(height: 8),
                ...pending.map((a) => _pendingLoanCard(context, a, isDark)),
              ],
              if (rejected.isNotEmpty) ...[
                const SizedBox(height: 20),
                const Text('Not approved this time — you are welcome to apply again', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.redAccent)),
                ...rejected.map((a) => _loanTile(context, a, isDark)),
              ],
              const SizedBox(height: 24),
              _howItWorks(context, isDark),
              const SizedBox(height: 40),
            ],
          ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _headerCard() => Container(
        width: double.infinity,
        padding: const EdgeInsets.all(22),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF00B25A), Color(0xFF059669), Color(0xFF0F766E)],
          ),
          borderRadius: BorderRadius.circular(26),
          boxShadow: [
            BoxShadow(color: _loanGreen.withValues(alpha: 0.28), blurRadius: 24, offset: const Offset(0, 12)),
          ],
        ),
        child: Stack(
          children: [
            Positioned(
              right: -18,
              top: -22,
              child: IgnorePointer(
                child: Container(
                  width: 110,
                  height: 110,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: Colors.white.withValues(alpha: 0.10),
                  ),
                ),
              ),
            ),
            Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(
              children: [
                Icon(Icons.account_balance_rounded, color: Colors.white, size: 28),
                SizedBox(width: 12),
                Text('Loan Services', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 22)),
              ],
            ),
            const SizedBox(height: 10),
            Text(
              'We help our community members when they need help — funerals, buying a car, or other important needs. Apply with collateral, repay on time, and your collateral is released back to you.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontSize: 13, height: 1.45),
            ),
            const SizedBox(height: 10),
            RichText(
              text: TextSpan(
                style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 13, height: 1.4),
                children: [
                  const TextSpan(text: 'Call us on '),
                  WidgetSpan(
                    alignment: PlaceholderAlignment.baseline,
                    baseline: TextBaseline.alphabetic,
                    child: GestureDetector(
                      onTap: () => NgmyLoanLogic.callPhone(widget.config.loanPhone),
                      child: Text(
                        widget.config.loanPhone,
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 13,
                          fontWeight: FontWeight.w900,
                          decoration: TextDecoration.underline,
                          decorationColor: Colors.white,
                        ),
                      ),
                    ),
                  ),
                  const TextSpan(text: ' if you need a hand.'),
                ],
              ),
            ),
            const SizedBox(height: 6),
            Text(
              'Up to 2 loans under \$1,000 · 1 loan if \$1,000+.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 11, fontWeight: FontWeight.w600),
            ),
          ],
        ),
          ],
        ),
      );

  /// The five steps, drawn as a timeline: a green line joins the steps and each one has its own picture.
  Widget _howItWorks(BuildContext context, bool isDark) {
    const steps = [
      (Icons.edit_note_rounded, 'Apply', 'Submit your loan application with your collateral details'),
      (Icons.manage_search_rounded, 'Review', 'Your application is reviewed within a few hours'),
      (Icons.account_balance_wallet_rounded, 'Funds', 'If approved, the loan amount is credited to your account'),
      (Icons.event_available_rounded, 'Repay', 'Make your payments on schedule (the app shows your total repayment and each payment amount before you apply)'),
      (Icons.lock_open_rounded, 'Released', 'Upon full repayment, your collateral is released back to you'),
    ];
    final ink = isDark ? Colors.white : const Color(0xFF111827);
    final soft = isDark ? Colors.white70 : const Color(0xFF4B5563);
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isDark ? const [Color(0xFF14201B), Color(0xFF0F1620)] : const [Color(0xFFECFDF5), Colors.white],
        ),
        border: Border.all(color: _loanGreen.withValues(alpha: isDark ? 0.35 : 0.3)),
        boxShadow: isDark ? null : [BoxShadow(color: _loanGreen.withValues(alpha: 0.1), blurRadius: 18, offset: const Offset(0, 8))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]), borderRadius: BorderRadius.circular(13)),
                child: const Icon(Icons.volunteer_activism_rounded, color: Colors.white, size: 21),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('How it works', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: ink)),
                    Text('Five simple steps, made to help you', style: TextStyle(fontSize: 11.5, color: soft)),
                  ],
                ),
              ),
              if (widget.showCalculator)
                Material(
                  color: Colors.transparent,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(12),
                    onTap: () => showNgmyLoanCalculator(context),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                      decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), border: Border.all(color: _loanGreen.withValues(alpha: 0.6))),
                      child: const Row(mainAxisSize: MainAxisSize.min, children: [
                        Icon(Icons.calculate_rounded, color: _loanGreen, size: 17),
                        SizedBox(width: 5),
                        Text('Calculator', style: TextStyle(color: _loanGreen, fontWeight: FontWeight.w800, fontSize: 11.5)),
                      ]),
                    ),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 16),
          for (var i = 0; i < steps.length; i++)
            IntrinsicHeight(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  SizedBox(
                    width: 40,
                    child: Column(
                      children: [
                        Container(
                          width: 36,
                          height: 36,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: _loanGreen.withValues(alpha: isDark ? 0.18 : 0.14),
                            border: Border.all(color: _loanGreen.withValues(alpha: 0.7), width: 1.6),
                          ),
                          child: Icon(steps[i].$1, color: _loanGreen, size: 18),
                        ),
                        if (i < steps.length - 1) Expanded(child: Container(width: 2, margin: const EdgeInsets.symmetric(vertical: 3), color: _loanGreen.withValues(alpha: 0.35))),
                      ],
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 14, top: 2),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(children: [
                            Text('Step ${i + 1}', style: const TextStyle(color: _loanGreen, fontWeight: FontWeight.w900, fontSize: 10.5, letterSpacing: 0.6)),
                            const SizedBox(width: 6),
                            Text(steps[i].$2, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 14)),
                          ]),
                          const SizedBox(height: 2),
                          Text(steps[i].$3, style: TextStyle(fontSize: 12.5, height: 1.4, color: soft)),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }

  Widget _activeLoanHeroCard(BuildContext context, Map<String, dynamic> app, bool isDark) {
    final amount = (app['amount'] as num?)?.toDouble() ?? 0;
    final total = (app['totalRepayment'] as num?)?.toDouble() ?? 0;
    final payments = app['payments'] as List? ?? [];
    final paid = ngmyLoanPaidCount(payments);
    final totalWeeks = payments.length;
    final progress = totalWeeks > 0 ? paid / totalWeeks : 0.0;
    final paidTotal = ngmyLoanPaidTotal(payments);
    final remaining = (total - paidTotal).clamp(0.0, total).toDouble();
    final weekly = totalWeeks > 0 ? total / totalWeeks : 0.0;

    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: const LinearGradient(
          colors: [Color(0xFF00C96A), Color(0xFF007A45), Color(0xFF005C34)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Material(
        color: Colors.transparent,
        clipBehavior: Clip.antiAlias,
        borderRadius: BorderRadius.circular(26),
        child: InkWell(
          onTap: () => Navigator.push(
            context,
            MaterialPageRoute<void>(
              builder: (_) => NgmyLoanTrackingScreen(
                loanId: (app['id'] ?? '').toString(),
                config: widget.config,
                onDataChanged: widget.onDataChanged,
                isAdmin: false,
                onPersistNow: widget.onPersistNow,
                onRefreshLoans: widget.onRefreshLoans,
              ),
            ),
          ),
          child: Stack(
            children: [
              Positioned(right: -30, top: -30, child: Container(width: 120, height: 120, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.08)))),
              Positioned(left: -20, bottom: -20, child: Container(width: 80, height: 80, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.06)))),
              Padding(
                padding: const EdgeInsets.fromLTRB(22, 22, 22, 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(20)),
                          child: const Text('ACTIVE LOAN', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
                        ),
                        const Spacer(),
                        const Icon(Icons.bolt_rounded, color: Colors.white70, size: 20),
                        const SizedBox(width: 4),
                        const Text('Live', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800)),
                      ],
                    ),
                    const SizedBox(height: 16),
                    Text('\$${ngmyLoanFormatCurrency(amount)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 38, height: 1)),
                    const SizedBox(height: 4),
                    Text((app['scheduleSummary'] ?? '').toString(), style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12)),
                    const SizedBox(height: 18),
                    Row(
                      children: [
                        _heroStat('Total due', '\$${ngmyLoanFormatCurrency(total)}'),
                        const SizedBox(width: 16),
                        _heroStat('Weekly', '\$${ngmyLoanFormatCurrency(weekly)}'),
                        const SizedBox(width: 16),
                        _heroStat('Left', '\$${ngmyLoanFormatCurrency(remaining)}'),
                      ],
                    ),
                    const SizedBox(height: 16),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: LinearProgressIndicator(value: progress, minHeight: 8, backgroundColor: Colors.white24, color: Colors.white),
                    ),
                    const SizedBox(height: 8),
                    Row(
                      children: [
                        Text('$paid of $totalWeeks payments received', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12)),
                        const Spacer(),
                        const Text('Tap to track →', style: TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w600)),
                      ],
                    ),
                    if (ngmyLoanReminderLine(app).isNotEmpty) ...[
                      const SizedBox(height: 10),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12)),
                        child: Text(ngmyLoanReminderLine(app), style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700, height: 1.35)),
                      ),
                    ],
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _heroStat(String label, String value) => Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 10, fontWeight: FontWeight.w600)),
            Text(value, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
          ],
        ),
      );

  Widget _pendingLoanCard(BuildContext context, Map<String, dynamic> app, bool isDark) {
    final amount = (app['amount'] as num?)?.toDouble() ?? 0;
    final submitted = _fmtDate(app['createdAt']);
    final collateral = NgmyLoanLogic.collateralLabel((app['collateralType'] ?? '').toString());

    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: isDark
              ? [const Color(0xFF1A2332), const Color(0xFF151B28)]
              : [const Color(0xFFFFFBEB), const Color(0xFFFFF7ED)],
        ),
        border: Border.all(color: const Color(0xFFF59E0B).withValues(alpha: 0.45)),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFFF59E0B).withValues(alpha: isDark ? 0.08 : 0.12),
            blurRadius: 14,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  width: 46,
                  height: 46,
                  decoration: BoxDecoration(
                    color: const Color(0xFFF59E0B).withValues(alpha: 0.16),
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: const Icon(Icons.hourglass_top_rounded, color: Color(0xFFF59E0B), size: 24),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Application under review',
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          fontSize: 14,
                          color: isDark ? Colors.white : const Color(0xFF92400E),
                        ),
                      ),
                      const SizedBox(height: 3),
                      Text(
                        'Submitted${submitted.isNotEmpty ? ' · $submitted' : ''}',
                        style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : const Color(0xFFB45309)),
                      ),
                    ],
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(
                    color: const Color(0xFFF59E0B).withValues(alpha: 0.14),
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: const Color(0xFFF59E0B).withValues(alpha: 0.35)),
                  ),
                  child: const Text('PENDING', style: TextStyle(color: Color(0xFFF59E0B), fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
                ),
              ],
            ),
            const SizedBox(height: 14),
            Row(
              children: [
                _pendingStatChip('Amount', '\$${ngmyLoanFormatCurrency(amount)}', isDark),
                const SizedBox(width: 8),
                Expanded(child: _pendingStatChip('Collateral', collateral, isDark)),
              ],
            ),
            const SizedBox(height: 10),
            Text(
              (app['scheduleSummary'] ?? '').toString(),
              style: TextStyle(fontSize: 11, height: 1.35, color: isDark ? Colors.white60 : const Color(0xFF78716C)),
            ),
            const SizedBox(height: 10),
            Row(
              children: [
                Icon(Icons.info_outline_rounded, size: 14, color: isDark ? Colors.white38 : const Color(0xFFA8A29E)),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(
                    'Your application stays saved. Admin will review it soon.',
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: isDark ? Colors.white54 : const Color(0xFF78716C)),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _pendingStatChip(String label, String value, bool isDark) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        decoration: BoxDecoration(
          color: isDark ? Colors.white.withValues(alpha: 0.05) : Colors.white,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFFDE68A)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : const Color(0xFFA8A29E))),
            const SizedBox(height: 2),
            Text(value, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF1C1917)), maxLines: 1, overflow: TextOverflow.ellipsis),
          ],
        ),
      );

  String _fmtDate(dynamic raw) {
    final dt = DateTime.tryParse((raw ?? '').toString());
    if (dt == null) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return '${months[dt.month - 1]} ${dt.day}, ${dt.year}';
  }

  Widget _loanTile(BuildContext context, Map<String, dynamic> app, bool isDark) {
    final status = (app['status'] ?? 'pending').toString();
    final amount = (app['amount'] as num?)?.toDouble() ?? 0;
    final payments = app['payments'] as List? ?? [];
    final paid = ngmyLoanPaidCount(payments);
    final total = payments.length;
    final progress = total > 0 ? paid / total : 0.0;
    Color c = Colors.orange;
    if (status == 'approved') c = _loanGreen;
    if (status == 'rejected') c = Colors.red;
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF151B28) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: c.withValues(alpha: 0.35)),
        boxShadow: isDark ? null : [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 10, offset: const Offset(0, 4))],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: status == 'approved'
            ? () => Navigator.push(
                  context,
                  MaterialPageRoute<void>(
                    builder: (_) => NgmyLoanTrackingScreen(
                      loanId: (app['id'] ?? '').toString(),
                      config: widget.config,
                      onDataChanged: widget.onDataChanged,
                      isAdmin: false,
                      onPersistNow: widget.onPersistNow,
                      onRefreshLoans: widget.onRefreshLoans,
                    ),
                  ),
                )
            : (status == 'rejected'
                ? () {
                    final reason = (app['rejectionReason'] ?? '').toString();
                    showDialog<void>(
                      context: context,
                      builder: (c) => AlertDialog(
                        title: const Text('Application rejected'),
                        content: Text(reason.isEmpty ? 'No reason provided. You may apply again.' : reason),
                        actions: [TextButton(onPressed: () => Navigator.pop(c), child: const Text('OK'))],
                      ),
                    );
                  }
                : null),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(color: c.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
                  child: Icon(status == 'approved' ? Icons.payments_rounded : Icons.hourglass_top_rounded, color: c, size: 22),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('\$${ngmyLoanFormatCurrency(amount)} · ${status.toUpperCase()}', style: TextStyle(fontWeight: FontWeight.w900, color: c, fontSize: 14)),
                      const SizedBox(height: 4),
                      Text(
                        status == 'rejected' && (app['rejectionReason'] ?? '').toString().isNotEmpty
                            ? 'Rejected: ${app['rejectionReason']}'
                            : (app['scheduleSummary'] ?? '').toString(),
                        maxLines: 2,
                        style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.grey.shade600),
                      ),
                      if (status == 'approved' && total > 0) ...[
                        const SizedBox(height: 8),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(4),
                          child: LinearProgressIndicator(value: progress, minHeight: 5, backgroundColor: c.withValues(alpha: 0.15), color: c),
                        ),
                        const SizedBox(height: 4),
                        Text('$paid of $total payments received', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: c)),
                      ],
                    ],
                  ),
                ),
                if (status == 'approved') const Icon(Icons.chevron_right_rounded, color: _loanGreen),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _openApplication(BuildContext context) async {
    final myLoans = NgmyLoanStore.appsForUser(widget.config.loanApplications, widget.userEmail);
    if (!NgmyLoanLogic.canUserApplyAnother(myLoans)) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(NgmyLoanLogic.loanLimitMessage(myLoans))));
      return;
    }
    final ok = await Navigator.push<bool>(
      context,
      MaterialPageRoute<bool>(builder: (_) => NgmyLoanApplicationScreen(userEmail: widget.userEmail, username: widget.username, config: widget.config, onDataChanged: widget.onDataChanged, onPersistNow: widget.onPersistNow)),
    );
    if (ok == true && mounted) setState(() {});
  }
}

class NgmyLoanApplicationScreen extends StatefulWidget {
  const NgmyLoanApplicationScreen({super.key, required this.userEmail, required this.username, required this.config, required this.onDataChanged, this.onPersistNow});
  final String userEmail;
  final String username;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final Future<bool> Function()? onPersistNow;

  @override
  State<NgmyLoanApplicationScreen> createState() => _NgmyLoanApplicationScreenState();
}

class _NgmyLoanApplicationScreenState extends State<NgmyLoanApplicationScreen> {
  final _amountC = TextEditingController();
  final _fullNameC = TextEditingController();
  final _phoneC = TextEditingController();
  final _emailC = TextEditingController();
  final _addressC = TextEditingController();
  final _govIdC = TextEditingController();
  final _idExpC = TextEditingController();
  final _ssnC = TextEditingController();
  final _receiveDetailC = TextEditingController();
  final _customCollateralC = TextEditingController();
  final _purposeNoteC = TextEditingController();
  final _collValueC = TextEditingController();
  final _guarNameC = TextEditingController();
  final _guarPhoneC = TextEditingController();
  final _civicIdC = TextEditingController();
  final _picker = ImagePicker();
  String? _purpose;
  DateTime? _neededOn;
  static const _purposes = ['Funeral / Burial', 'Buy a car', 'Car repair', 'Family emergency', 'Other need'];

  String? _paymentMethod;
  String? _collateralChoice;
  String _idType = 'drivers_license';
  int _termMonths = 12;
  DateTime? _dateOfBirth;
  bool _submitting = false;
  Timer? _draftTimer;

  String? _idFront;
  String? _idBack;
  String? _selfie;
  String? _titleFront;
  String? _titleBack;

  double get _amount => double.tryParse(_amountC.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 0;

  @override
  void initState() {
    super.initState();
    _emailC.text = widget.userEmail;
    unawaited(NgmyLoanSettings.load().then((_) {
      if (mounted) setState(() {});
    }));
    unawaited(_loadDraft().then((_) {
      if (!mounted) return;
      if (_phoneC.text.trim().isEmpty) {
        _phoneC.text = '+1 ';
      } else {
        _phoneC.text = ngmyLoanFormatUsPhone(_phoneC.text);
      }
      if (_idExpC.text.trim().isNotEmpty) {
        _idExpC.text = ngmyLoanFormatDateInput(_idExpC.text);
      }
    }));
    for (final c in [_amountC, _fullNameC, _phoneC, _emailC, _addressC, _govIdC, _idExpC, _ssnC, _receiveDetailC, _customCollateralC]) {
      c.addListener(_scheduleDraftSave);
    }
  }

  void _scheduleDraftSave() {
    _draftTimer?.cancel();
    _draftTimer = Timer(const Duration(milliseconds: 500), _saveDraft);
  }

  Future<void> _loadDraft() async {
    final d = await NgmyLoanDraftStore.load(widget.userEmail);
    if (d == null || !mounted) return;
    setState(() {
      _fullNameC.text = (d['fullLegalName'] ?? '').toString();
      _phoneC.text = (d['phone'] ?? '').toString();
      _emailC.text = (d['email'] ?? widget.userEmail).toString();
      _addressC.text = (d['homeAddress'] ?? '').toString();
      _govIdC.text = (d['governmentId'] ?? '').toString();
      _idExpC.text = (d['idExpiration'] ?? '').toString();
      _ssnC.text = (d['ssn'] ?? '').toString();
      _receiveDetailC.text = (d['receiveDetails'] ?? d['payoutDestination'] ?? '').toString();
      _customCollateralC.text = (d['collateralCustomNote'] ?? '').toString();
      _idType = (d['idType'] ?? 'drivers_license').toString();
      _paymentMethod = (d['receiveMethod'] as String?)?.isNotEmpty == true ? d['receiveMethod'].toString() : null;
      _collateralChoice = (d['collateralType'] as String?)?.isNotEmpty == true ? d['collateralType'].toString() : null;
      _termMonths = (d['termMonths'] as num?)?.toInt() ?? 12;
      final dob = DateTime.tryParse((d['dateOfBirth'] ?? '').toString());
      if (dob != null) _dateOfBirth = dob;
    });
  }

  Future<void> _saveDraft() async {
    await NgmyLoanDraftStore.save(widget.userEmail, {
      'fullLegalName': _fullNameC.text.trim(),
      'phone': _phoneC.text.trim(),
      'email': _emailC.text.trim(),
      'homeAddress': _addressC.text.trim(),
      'governmentId': _govIdC.text.trim(),
      'idExpiration': _idExpC.text.trim(),
      'ssn': _ssnC.text.trim(),
      'receiveDetails': _receiveDetailC.text.trim(),
      'payoutDestination': _receiveDetailC.text.trim(),
      'collateralCustomNote': _customCollateralC.text.trim(),
      'idType': _idType,
      'receiveMethod': _paymentMethod ?? '',
      'collateralType': _collateralChoice ?? '',
      'termMonths': _termMonths,
      'dateOfBirth': _dateOfBirth?.toUtc().toIso8601String() ?? '',
    });
  }

  @override
  void dispose() {
    _draftTimer?.cancel();
    for (final c in [_purposeNoteC, _collValueC, _guarNameC, _guarPhoneC, _civicIdC]) {
      c.dispose();
    }
    _amountC.dispose();
    _fullNameC.dispose();
    _phoneC.dispose();
    _emailC.dispose();
    _addressC.dispose();
    _govIdC.dispose();
    _idExpC.dispose();
    _ssnC.dispose();
    _receiveDetailC.dispose();
    _customCollateralC.dispose();
    super.dispose();
  }

  InputDecoration _fieldDeco(_LoanUi ui, String label, {String? hint, bool required = true}) => InputDecoration(
        labelText: required ? '$label *' : label,
        hintText: hint,
        labelStyle: TextStyle(color: ui.textSecondary),
        hintStyle: TextStyle(color: ui.textSecondary.withValues(alpha: 0.7)),
        filled: true,
        fillColor: ui.fieldFill,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: ui.border)),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: ui.border)),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: _loanGreen, width: 1.5)),
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      );

  Widget _sectionTitle(_LoanUi ui, String title) => Padding(
        padding: const EdgeInsets.only(bottom: 10, top: 4),
        child: Text(title, style: TextStyle(fontSize: 17, fontWeight: FontWeight.w800, color: ui.textPrimary)),
      );

  Widget _uploadBox(_LoanUi ui, {required String label, required String hint, required bool done, required VoidCallback onTap}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('$label *', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 12, color: ui.textSecondary)),
          const SizedBox(height: 5),
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: onTap,
              borderRadius: BorderRadius.circular(10),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 11, horizontal: 12),
                decoration: BoxDecoration(
                  color: done ? _loanGreen.withValues(alpha: isDark ? 0.15 : 0.08) : ui.fieldFill,
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: done ? _loanGreen : ui.border, width: done ? 1.5 : 1),
                ),
                child: Row(
                  children: [
                    Icon(done ? Icons.check_circle_rounded : Icons.add_a_photo_outlined, color: done ? _loanGreen : ui.textSecondary, size: 20),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        done ? 'Uploaded — tap to replace' : hint,
                        style: TextStyle(color: done ? _loanGreen : ui.textSecondary, fontSize: 12, fontWeight: FontWeight.w500),
                      ),
                    ),
                    Icon(Icons.chevron_right_rounded, color: ui.textSecondary, size: 20),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  bool get isDark => Theme.of(context).brightness == Brightness.dark;

  Widget _choiceChip(_LoanUi ui, {required String label, required IconData icon, required bool selected, required VoidCallback onTap}) {
    return Expanded(
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(10),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 6),
            decoration: BoxDecoration(
              color: selected ? _loanGreen.withValues(alpha: isDark ? 0.22 : 0.12) : ui.fieldFill,
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: selected ? _loanGreen : ui.border, width: selected ? 1.5 : 1),
            ),
            child: Column(
              children: [
                Icon(icon, size: 20, color: selected ? _loanGreen : ui.textSecondary),
                const SizedBox(height: 4),
                Text(label, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: selected ? _loanGreen : ui.textSecondary)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<ImageSource?> _showPhotoSourceSheet(String label) async {
    final ui = _LoanUi(isDark);
    return showDialog<ImageSource>(
      context: context,
      barrierColor: Colors.black.withValues(alpha: 0.72),
      builder: (ctx) => Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.symmetric(horizontal: 28, vertical: 32),
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 340),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: Material(
              color: ui.card,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    padding: const EdgeInsets.fromLTRB(16, 14, 10, 14),
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF059669)]),
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 36,
                          height: 36,
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.18),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: const Icon(Icons.add_a_photo_rounded, color: Colors.white, size: 20),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                              const SizedBox(height: 2),
                              const Text('Choose camera or gallery', style: TextStyle(color: Colors.white70, fontSize: 10)),
                            ],
                          ),
                        ),
                        IconButton(
                          onPressed: () => Navigator.pop(ctx),
                          icon: const Icon(Icons.close_rounded, color: Colors.white, size: 20),
                          visualDensity: VisualDensity.compact,
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
                    child: Column(
                      children: [
                        _photoSourceOption(
                          ui,
                          icon: Icons.camera_alt_rounded,
                          title: 'Take photo',
                          subtitle: 'Use your camera now',
                          onTap: () => Navigator.pop(ctx, ImageSource.camera),
                        ),
                        const SizedBox(height: 10),
                        _photoSourceOption(
                          ui,
                          icon: Icons.photo_library_rounded,
                          title: 'Choose from gallery',
                          subtitle: 'Pick an existing photo',
                          onTap: () => Navigator.pop(ctx, ImageSource.gallery),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _photoSourceOption(
    _LoanUi ui, {
    required IconData icon,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
  }) {
    return Material(
      color: ui.fieldFill,
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: ui.border),
          ),
          child: Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: _loanGreen.withValues(alpha: 0.14),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(icon, color: _loanGreen, size: 22),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: TextStyle(fontWeight: FontWeight.w800, color: ui.textPrimary, fontSize: 14)),
                    Text(subtitle, style: TextStyle(fontSize: 11, color: ui.textSecondary)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: ui.textSecondary, size: 20),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _pickDob() async {
    final now = DateTime.now();
    final picked = await showDatePicker(
      context: context,
      initialDate: _dateOfBirth ?? DateTime(now.year - 25),
      firstDate: DateTime(now.year - 100),
      lastDate: DateTime(now.year - 18),
    );
    if (picked != null) setState(() => _dateOfBirth = picked);
  }

  Future<String?> _pickPhoto(String label) async {
    final src = await _showPhotoSourceSheet(label);
    if (src == null) return null;
    final file = await _picker.pickImage(source: src, imageQuality: 82, maxWidth: 1600);
    if (file == null) return null;
    return NgmyLoanStore.storeImageRef(file);
  }

  List<String> _validate() {
    final missing = <String>[];
    if (_amount <= 0) missing.add('Requested loan amount');
    if (_fullNameC.text.trim().isEmpty) missing.add('Full legal name');
    if (_dateOfBirth == null) missing.add('Date of birth');
    if (!ngmyLoanIsCompleteUsPhone(_phoneC.text)) missing.add('Phone number (+1 234 567 8901)');
    if (_emailC.text.trim().isEmpty) missing.add('Email address');
    if (_addressC.text.trim().isEmpty) missing.add('Home address');
    if (_ssnC.text.replaceAll(RegExp(r'\D'), '').length != 9) missing.add('Social Security Number (9 digits)');
    if (_govIdC.text.trim().isEmpty) missing.add('Government ID number');
    if (_idExpC.text.trim().isEmpty || !ngmyLoanIsCompleteDate(_idExpC.text)) missing.add('ID expiration date (MM/DD/YYYY)');
    if (_idFront == null) missing.add('ID photo — front');
    if (_idBack == null) missing.add('ID photo — back');
    if (_selfie == null) missing.add('Selfie photo');
    if (_paymentMethod == null) missing.add('Payment method (tap Cash App, Zelle, or Other)');
    if (_receiveDetailC.text.trim().isEmpty) missing.add(_paymentDetailLabel());
    if (_collateralChoice == null) {
      missing.add('Collateral type (phone, vehicle, property, or other)');
    } else if (_collateralChoice == 'custom') {
      if (_customCollateralC.text.trim().isEmpty) missing.add('Description of what you are offering as collateral');
    } else {
      if (_titleFront == null) missing.add('Collateral photo — front');
      if (_titleBack == null) missing.add('Collateral photo — back');
    }
    if (_amount > NgmyLoanSettings.current.maxAmount) missing.add('A loan amount of \$${ngmyLoanFormatCurrency(NgmyLoanSettings.current.maxAmount)} or less');
    if (_purpose == null) missing.add('What you need help with');
    if ((double.tryParse(_collValueC.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 0) <= 0) missing.add('Estimated value of your collateral');
    return missing;
  }

  Future<void> _submit() async {
    final missing = _validate();
    if (missing.isNotEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Please complete:\n• ${missing.join('\n• ')}'), duration: const Duration(seconds: 5)),
      );
      return;
    }
    final myLoans = NgmyLoanStore.appsForUser(widget.config.loanApplications, widget.userEmail);
    if (!NgmyLoanLogic.canUserApplyAnother(myLoans, newAmount: _amount)) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(NgmyLoanLogic.loanLimitMessage(myLoans, newAmount: _amount))));
      return;
    }
    if (!await _confirmAgreement()) return;
    setState(() => _submitting = true);
    try {
      final collateralType = _collateralChoice ?? 'custom';
      final term = NgmyLoanLogic.termForAmount(_amount, userMonths: _amount > 2000 ? _termMonths : null);
      final interest = _amount * NgmyLoanLogic.interestRate;
      final total = _amount + interest;
      final weekly = total / term.weeks;

      final payments = List.generate(term.weeks, (i) {
        final due = DateTime.now().add(Duration(days: 7 * (i + 1)));
        return {
          'id': '${i + 1}',
          'dueDate': due.toUtc().toIso8601String(),
          'amount': double.parse(weekly.toStringAsFixed(2)),
          'status': 'pending',
          'paidAmount': 0.0,
          'paidAt': '',
        };
      });

      widget.config.loanApplications.insert(0, {
        'id': DateTime.now().microsecondsSinceEpoch.toString(),
        'userEmail': widget.userEmail,
        'username': widget.username,
        'status': 'pending',
        'createdAt': DateTime.now().toUtc().toIso8601String(),
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
        'amount': _amount,
        'interestRate': NgmyLoanLogic.interestRate,
        'totalRepayment': double.parse(total.toStringAsFixed(2)),
        'scheduleSummary': term.summary,
        'termWeeks': term.weeks,
        'termMonths': term.monthsLabel,
        'repaymentMonths': NgmyLoanSettings.current.repaymentMonths,
        'interestAmount': double.parse(interest.toStringAsFixed(2)),
        'purpose': _purpose ?? '',
        'purposeNote': _purposeNoteC.text.trim(),
        'neededOn': _neededOn?.toUtc().toIso8601String() ?? '',
        'collateralValue': double.tryParse(_collValueC.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 0,
        'guarantorName': _guarNameC.text.trim(),
        'guarantorPhone': _guarPhoneC.text.trim(),
        'civicRegistryId': _civicIdC.text.trim(),
        'agreement': {
          'acceptedAt': DateTime.now().toUtc().toIso8601String(),
          'name': _fullNameC.text.trim(),
          'civicRegistryId': _civicIdC.text.trim(),
          'amount': _amount,
          'interestAmount': double.parse(interest.toStringAsFixed(2)),
          'totalRepayment': double.parse(total.toStringAsFixed(2)),
          'payments': term.weeks,
          'eachPayment': double.parse(weekly.toStringAsFixed(2)),
          'period': term.monthsLabel,
        },
        'paidOut': false,
        'collateralReleased': false,
        'collateralType': collateralType,
        'collateralCustomNote': _customCollateralC.text.trim(),
        'fullLegalName': _fullNameC.text.trim(),
        'dateOfBirth': _dateOfBirth?.toUtc().toIso8601String() ?? '',
        'phone': ngmyLoanFormatUsPhone(_phoneC.text).trim(),
        'email': _emailC.text.trim(),
        'homeAddress': _addressC.text.trim(),
        'idType': _idType,
        'idExpiration': ngmyLoanFormatDateInput(_idExpC.text),
        'ssn': _ssnC.text.trim(),
        'governmentId': _govIdC.text.trim(),
        'idFrontRef': _idFront,
        'idBackRef': _idBack,
        'selfieRef': _selfie,
        'titleFrontRef': _titleFront ?? '',
        'titleBackRef': _titleBack ?? '',
        'receiveMethod': _paymentMethod ?? 'other',
        'receiveDetails': _receiveDetailC.text.trim(),
        'payoutDestination': _receiveDetailC.text.trim(),
        'companyCashApp': widget.config.officialCashApp,
        'companyZelle': widget.config.loanCompanyZelle,
        'rejectionReason': '',
        'payments': payments,
      });
      final submitted = widget.config.loanApplications.first;
      await NgmyLoanStore.ensureCloudPhotoRefs(submitted);
      await NgmyLoanPhotosStore.saveForApp(submitted);
      ngmyLoanCompactPhotoRefsForListStorage(submitted);
      widget.onDataChanged();
      final saved = await widget.onPersistNow?.call() ?? false;
      await NgmyLoanDraftStore.clear(widget.userEmail);
      if (!mounted) return;
      Navigator.pop(context, true);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            saved
                ? 'Loan application submitted. Admin will review soon.'
                : 'Application saved on this device. Syncing to admin — check connection if it stays pending.',
          ),
          backgroundColor: saved ? const Color(0xFF16A34A) : const Color(0xFFF59E0B),
        ),
      );
    } finally {
      if (mounted) setState(() => _submitting = false);
    }
  }

  String _paymentDetailLabel() {
    return switch (_paymentMethod) {
      'cashapp' => 'Cash App \$cashtag',
      'zelle' => 'Zelle phone or email',
      'other' => 'How you want to receive funds',
      _ => 'Payment details',
    };
  }

  String _paymentDetailHint() {
    return switch (_paymentMethod) {
      'cashapp' => r'e.g. $YourCashtag',
      'zelle' => 'Phone number or email on Zelle',
      'other' => 'Bank name, routing, or other instructions',
      _ => '',
    };
  }

  Widget _costRow(_LoanUi ui, String label, String value, {bool bold = false}) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 3),
        child: Row(children: [
          Expanded(child: Text(label, style: TextStyle(color: ui.textSecondary, fontSize: 13))),
          Text(value, style: TextStyle(color: bold ? _loanGreen : ui.textPrimary, fontWeight: bold ? FontWeight.w900 : FontWeight.w700, fontSize: bold ? 15 : 13)),
        ]),
      );

  /// What the loan will cost, in plain figures, before anything is submitted.
  Widget _costCard(_LoanUi ui) {
    final b = NgmyLoanLogic.breakdown(_amount);
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: _loanGreen.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(14), border: Border.all(color: _loanGreen.withValues(alpha: 0.35))),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('What you would repay', style: TextStyle(color: ui.textPrimary, fontWeight: FontWeight.w900, fontSize: 13)),
        const SizedBox(height: 6),
        _costRow(ui, 'Amount requested', '\$${ngmyLoanFormatCurrency(b.amount)}'),
        _costRow(ui, 'Interest', '\$${ngmyLoanFormatCurrency(b.interest)}'),
        _costRow(ui, 'Total to repay', '\$${ngmyLoanFormatCurrency(b.total)}', bold: true),
        _costRow(ui, 'Number of payments', '${b.weeks} (one each week)'),
        _costRow(ui, 'Each payment', '\$${ngmyLoanFormatCurrency(double.parse(b.weekly.toStringAsFixed(2)))}', bold: true),
        _costRow(ui, 'Repayment period', b.period),
      ]),
    );
  }

  /// The member reads the exact figures and agrees before the application is sent.
  Future<bool> _confirmAgreement() async {
    final ui = _LoanUi(isDark);
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: ui.card,
        title: Text('Please read and agree', style: TextStyle(color: ui.textPrimary, fontWeight: FontWeight.w900, fontSize: 17)),
        content: SingleChildScrollView(
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            _costCard(ui),
            const SizedBox(height: 10),
            Text(
              'By tapping "I agree" I confirm these figures. I am offering my collateral, and it is released back to me when I have repaid in full.',
              style: TextStyle(color: ui.textSecondary, fontSize: 12, height: 1.4),
            ),
          ]),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Go back')),
          FilledButton(style: FilledButton.styleFrom(backgroundColor: _loanGreen), onPressed: () => Navigator.pop(ctx, true), child: const Text('I agree')),
        ],
      ),
    );
    return ok == true;
  }

  String _collateralPhotoLabel(String side) {
    final type = _collateralChoice;
    final base = switch (type) {
      'phone' => 'Phone',
      'car' => 'Vehicle title',
      'house' => 'Property document',
      _ => 'Collateral',
    };
    return '$base — $side';
  }

  @override
  Widget build(BuildContext context) {
    final ui = _LoanUi(isDark);
    final term = _amount > 0 ? NgmyLoanLogic.termForAmount(_amount, userMonths: _amount > 2000 ? _termMonths : null) : null;

    return Scaffold(
      backgroundColor: ui.pageBg,
      appBar: AppBar(
        backgroundColor: ui.card,
        foregroundColor: ui.textPrimary,
        elevation: 0,
        surfaceTintColor: ui.card,
        leading: IconButton(icon: Icon(Icons.arrow_back_ios_new_rounded, color: ui.textPrimary), onPressed: () => Navigator.pop(context)),
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: _loanGreen, borderRadius: BorderRadius.circular(10)),
              child: const Icon(Icons.trending_up_rounded, color: Colors.white, size: 20),
            ),
            const SizedBox(width: 10),
            Text('Loan Application', style: TextStyle(color: ui.textPrimary, fontWeight: FontWeight.w800, fontSize: 18)),
          ],
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 28),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: ui.card,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: ui.border),
            boxShadow: isDark ? null : [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 16, offset: const Offset(0, 4))],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _sectionTitle(ui, 'Loan Details'),
              TextField(
                controller: _amountC,
                style: TextStyle(color: ui.textPrimary),
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                decoration: _fieldDeco(ui, 'Requested Loan Amount (\$)', hint: 'Enter amount'),
                onChanged: (_) => setState(() {}),
              ),
              const SizedBox(height: 10),
              const SizedBox(height: 4),
              Text('You can ask for up to \$${ngmyLoanFormatCurrency(NgmyLoanSettings.current.maxAmount)}.', style: TextStyle(color: ui.textSecondary, fontSize: 11)),
              if (_amount > 0 && term != null) ...[
                const SizedBox(height: 10),
                _costCard(ui),
              ],
              const SizedBox(height: 18),
              _sectionTitle(ui, 'What do you need help with?'),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  for (final p in _purposes)
                    ChoiceChip(
                      label: Text(p),
                      selected: _purpose == p,
                      onSelected: (_) => setState(() => _purpose = p),
                      selectedColor: _loanGreen.withValues(alpha: 0.25),
                    ),
                ],
              ),
              const SizedBox(height: 10),
              TextField(controller: _purposeNoteC, style: TextStyle(color: ui.textPrimary), maxLines: 2, decoration: _fieldDeco(ui, 'A short note (optional)', hint: 'Tell us a little about what you need')),
              const SizedBox(height: 10),
              InkWell(
                onTap: () async {
                  final now = DateTime.now();
                  final d = await showDatePicker(context: context, initialDate: _neededOn ?? now.add(const Duration(days: 3)), firstDate: now, lastDate: now.add(const Duration(days: 365)));
                  if (d != null) setState(() => _neededOn = d);
                },
                borderRadius: BorderRadius.circular(12),
                child: InputDecorator(
                  decoration: _fieldDeco(ui, 'Date you need it'),
                  child: Text(
                    _neededOn == null ? 'Tap to choose a date' : '${_neededOn!.month}/${_neededOn!.day}/${_neededOn!.year}',
                    style: TextStyle(color: _neededOn == null ? ui.textSecondary : ui.textPrimary),
                  ),
                ),
              ),
              const SizedBox(height: 18),
              _sectionTitle(ui, 'Personal Information'),
              TextField(controller: _fullNameC, style: TextStyle(color: ui.textPrimary), decoration: _fieldDeco(ui, 'Full Legal Name', hint: 'First Middle Last')),
              const SizedBox(height: 10),
              InkWell(
                onTap: _pickDob,
                borderRadius: BorderRadius.circular(12),
                child: InputDecorator(
                  decoration: _fieldDeco(ui, 'Date of Birth'),
                  child: Text(
                    ngmyLoanFormatDobDisplay(_dateOfBirth),
                    style: TextStyle(color: _dateOfBirth == null ? ui.textSecondary : ui.textPrimary),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _phoneC,
                style: TextStyle(color: ui.textPrimary),
                keyboardType: TextInputType.phone,
                inputFormatters: const [NgmyLoanUsPhoneFormatter()],
                decoration: _fieldDeco(ui, 'Phone Number', hint: '+1 234 567 8901'),
              ),
              const SizedBox(height: 10),
              TextField(controller: _emailC, style: TextStyle(color: ui.textPrimary), keyboardType: TextInputType.emailAddress, decoration: _fieldDeco(ui, 'Email Address', hint: 'you@email.com')),
              const SizedBox(height: 10),
              TextField(controller: _addressC, style: TextStyle(color: ui.textPrimary), maxLines: 2, decoration: _fieldDeco(ui, 'Home Address', hint: 'Street, City, State, ZIP')),
              const SizedBox(height: 10),
              TextField(controller: _civicIdC, style: TextStyle(color: ui.textPrimary), decoration: _fieldDeco(ui, 'Civic Registry ID', hint: 'Your NGMY Civic Registry ID, if you have one')),
              const SizedBox(height: 18),
              _sectionTitle(ui, 'Government-Issued ID'),
              DropdownButtonFormField<String>(
                value: _idType,
                dropdownColor: ui.card,
                style: TextStyle(color: ui.textPrimary),
                decoration: _fieldDeco(ui, 'ID Type'),
                items: const [
                  DropdownMenuItem(value: 'drivers_license', child: Text("Driver's License")),
                  DropdownMenuItem(value: 'passport', child: Text('Passport')),
                  DropdownMenuItem(value: 'state_id', child: Text('State ID')),
                  DropdownMenuItem(value: 'other', child: Text('Other')),
                ],
                onChanged: (v) => setState(() => _idType = v ?? 'drivers_license'),
              ),
              const SizedBox(height: 10),
              TextField(controller: _govIdC, style: TextStyle(color: ui.textPrimary), decoration: _fieldDeco(ui, 'ID Number', hint: 'Enter ID number')),
              const SizedBox(height: 10),
              TextField(
                controller: _idExpC,
                style: TextStyle(color: ui.textPrimary),
                keyboardType: TextInputType.number,
                inputFormatters: const [NgmyLoanDateFormatter()],
                decoration: _fieldDeco(ui, 'ID Expiration Date', hint: 'MM/DD/YYYY'),
              ),
              _uploadBox(ui, label: 'ID — front', hint: 'Tap to add front of ID', done: _idFront != null, onTap: () async { final r = await _pickPhoto('ID — front'); if (r != null) { setState(() => _idFront = r); _scheduleDraftSave(); } }),
              _uploadBox(ui, label: 'ID — back', hint: 'Tap to add back of ID', done: _idBack != null, onTap: () async { final r = await _pickPhoto('ID — back'); if (r != null) { setState(() => _idBack = r); _scheduleDraftSave(); } }),
              const SizedBox(height: 6),
              _sectionTitle(ui, 'Identity Verification'),
              Text('Clear selfie for identity verification.', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 6),
              _uploadBox(ui, label: 'Selfie', hint: 'Tap to add selfie', done: _selfie != null, onTap: () async { final r = await _pickPhoto('Selfie'); if (r != null) { setState(() => _selfie = r); _scheduleDraftSave(); } }),
              const SizedBox(height: 10),
              TextField(
                controller: _ssnC,
                style: TextStyle(color: ui.textPrimary),
                keyboardType: TextInputType.number,
                decoration: _fieldDeco(ui, 'Social Security Number', hint: 'XXX-XX-XXXX'),
                inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9-]'))],
              ),
              Text('Your information is encrypted and secure.', style: TextStyle(fontSize: 11, color: ui.textSecondary)),
              const SizedBox(height: 18),
              _sectionTitle(ui, 'How you receive funds'),
              Text('Tap one payment method, then enter your details.', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 8),
              Row(
                children: [
                  _choiceChip(ui, label: 'Cash App', icon: Icons.attach_money_rounded, selected: _paymentMethod == 'cashapp', onTap: () => setState(() { _paymentMethod = 'cashapp'; _receiveDetailC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Zelle', icon: Icons.account_balance_rounded, selected: _paymentMethod == 'zelle', onTap: () => setState(() { _paymentMethod = 'zelle'; _receiveDetailC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Other', icon: Icons.more_horiz_rounded, selected: _paymentMethod == 'other', onTap: () => setState(() { _paymentMethod = 'other'; _receiveDetailC.clear(); })),
                ],
              ),
              if (_paymentMethod != null) ...[
                const SizedBox(height: 10),
                TextField(
                  controller: _receiveDetailC,
                  style: TextStyle(color: ui.textPrimary),
                  decoration: _fieldDeco(ui, _paymentDetailLabel(), hint: _paymentDetailHint()),
                ),
              ],
              const SizedBox(height: 18),
              _sectionTitle(ui, 'Collateral'),
              Text('Choose what you are putting up. Photos appear only after you pick a type.', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 8),
              Row(
                children: [
                  _choiceChip(ui, label: 'Phone', icon: Icons.smartphone_rounded, selected: _collateralChoice == 'phone', onTap: () => setState(() { _collateralChoice = 'phone'; _titleFront = null; _titleBack = null; _customCollateralC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Vehicle', icon: Icons.directions_car_rounded, selected: _collateralChoice == 'car', onTap: () => setState(() { _collateralChoice = 'car'; _titleFront = null; _titleBack = null; _customCollateralC.clear(); })),
                ],
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  _choiceChip(ui, label: 'Property', icon: Icons.home_work_rounded, selected: _collateralChoice == 'house', onTap: () => setState(() { _collateralChoice = 'house'; _titleFront = null; _titleBack = null; _customCollateralC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Other', icon: Icons.inventory_2_outlined, selected: _collateralChoice == 'custom', onTap: () => setState(() { _collateralChoice = 'custom'; _titleFront = null; _titleBack = null; })),
                ],
              ),
              if (_collateralChoice == 'custom') ...[
                const SizedBox(height: 10),
                TextField(
                  controller: _customCollateralC,
                  style: TextStyle(color: ui.textPrimary),
                  maxLines: 4,
                  decoration: _fieldDeco(ui, 'Describe your collateral', hint: 'What you are offering, make/model, value, condition…', required: true),
                ),
                Text('We will review other collateral before approval — no photos required.', style: TextStyle(fontSize: 11, color: ui.textSecondary)),
              ] else if (_collateralChoice != null) ...[
                const SizedBox(height: 10),
                _uploadBox(ui, label: _collateralPhotoLabel('front'), hint: 'Tap to add front photo', done: _titleFront != null, onTap: () async { final r = await _pickPhoto(_collateralPhotoLabel('front')); if (r != null) { setState(() => _titleFront = r); _scheduleDraftSave(); } }),
                _uploadBox(ui, label: _collateralPhotoLabel('back'), hint: 'Tap to add back photo', done: _titleBack != null, onTap: () async { final r = await _pickPhoto(_collateralPhotoLabel('back')); if (r != null) { setState(() => _titleBack = r); _scheduleDraftSave(); } }),
              ],
              if (_collateralChoice != null) ...[
                const SizedBox(height: 10),
                TextField(
                  controller: _collValueC,
                  style: TextStyle(color: ui.textPrimary),
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  decoration: _fieldDeco(ui, 'Estimated value of your collateral (\$)', hint: 'About how much it is worth', required: true),
                ),
              ],
              const SizedBox(height: 18),
              _sectionTitle(ui, 'Family or guarantor contact (optional)'),
              Text('Someone who knows you and can be reached if we cannot reach you.', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 8),
              TextField(controller: _guarNameC, style: TextStyle(color: ui.textPrimary), decoration: _fieldDeco(ui, 'Their name')),
              const SizedBox(height: 10),
              TextField(controller: _guarPhoneC, style: TextStyle(color: ui.textPrimary), keyboardType: TextInputType.phone, decoration: _fieldDeco(ui, 'Their phone number')),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: _submitting ? null : _submit,
                      style: FilledButton.styleFrom(
                        minimumSize: const Size(double.infinity, 48),
                        backgroundColor: _loanGreen,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: _submitting
                          ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Text('Submit Application', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: OutlinedButton(
                      onPressed: _submitting ? null : () => Navigator.pop(context),
                      style: OutlinedButton.styleFrom(
                        minimumSize: const Size(0, 48),
                        foregroundColor: ui.textPrimary,
                        side: BorderSide(color: ui.border),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w600)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class NgmyLoanTrackingScreen extends StatefulWidget {
  const NgmyLoanTrackingScreen({
    super.key,
    required this.loanId,
    required this.config,
    required this.onDataChanged,
    required this.isAdmin,
    this.onPersistNow,
    this.onRefreshLoans,
  });

  final String loanId;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final bool isAdmin;
  final Future<bool> Function()? onPersistNow;
  final Future<void> Function()? onRefreshLoans;

  @override
  State<NgmyLoanTrackingScreen> createState() => _NgmyLoanTrackingScreenState();
}

class _NgmyLoanTrackingScreenState extends State<NgmyLoanTrackingScreen> with WidgetsBindingObserver, SingleTickerProviderStateMixin {
  Timer? _poll;
  bool _syncing = false;
  DateTime? _lastSync;
  late final AnimationController _headerPulse;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _headerPulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat(reverse: true);
    unawaited(_pullLatest());
    _poll = Timer.periodic(const Duration(seconds: 20), (_) => unawaited(_pullLatest(silent: true)));
  }

  @override
  void dispose() {
    _poll?.cancel();
    _headerPulse.dispose();
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) unawaited(_pullLatest());
  }

  Map<String, dynamic>? get _loan {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == widget.loanId);
    if (i < 0) return null;
    return widget.config.loanApplications[i];
  }

  Future<void> _pullLatest({bool silent = false}) async {
    if (_syncing) return;
    _syncing = true;
    try {
      await widget.onRefreshLoans?.call();
      await NgmyLoanPaymentsCloud.fetchAndApplyForLoan(widget.config.loanApplications, widget.loanId);
    } finally {
      _syncing = false;
      _lastSync = DateTime.now();
      if (mounted) setState(() {});
    }
  }

  Future<void> _mutateLoan(void Function(Map<String, dynamic> loan) fn) async {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == widget.loanId);
    if (i < 0) return;
    fn(widget.config.loanApplications[i]);
    final now = DateTime.now().toUtc().toIso8601String();
    widget.config.loanApplications[i]['updatedAt'] = now;
    widget.config.loanApplications[i]['paymentsUpdatedAt'] = now;
    final loan = widget.config.loanApplications[i];
    final payments = NgmyLoanPaymentsCloud.paymentsFromLoan(loan);
    await NgmyLoanPaymentsStore.save(widget.loanId, payments);
    await NgmyLoanPaymentsCloud.pushLoan(widget.loanId, loan);
    final ok = await widget.onPersistNow?.call() ?? false;
    widget.onDataChanged();
    if (!mounted) return;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok ? 'Payment saved — user sees it live.' : 'Saved on this device — syncing…'),
        backgroundColor: ok ? _loanGreen : Colors.orange,
      ),
    );
  }

  Future<void> _recordPayment(Map<String, dynamic> payment) async {
    final dueAmt = (payment['amount'] as num?)?.toDouble() ?? 0;
    final amountC = TextEditingController(text: ngmyLoanFormatCurrency(dueAmt));
    final noteC = TextEditingController();
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ok = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (c) => Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(c).bottom),
        child: Container(
          margin: const EdgeInsets.fromLTRB(14, 0, 14, 18),
          padding: const EdgeInsets.fromLTRB(22, 20, 22, 22),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF151B28) : Colors.white,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: _loanGreen.withValues(alpha: 0.3)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text('Record payment received', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 6),
              Text('Week #${payment['id']}', style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
              const SizedBox(height: 16),
              TextField(
                controller: amountC,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                decoration: InputDecoration(
                  labelText: 'Amount received (\$)',
                  prefixIcon: const Icon(Icons.attach_money_rounded, color: _loanGreen),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: noteC,
                decoration: InputDecoration(
                  labelText: 'Note (optional)',
                  prefixIcon: const Icon(Icons.notes_rounded, color: _loanGreen),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(child: OutlinedButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel'))),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      style: FilledButton.styleFrom(backgroundColor: _loanGreen, padding: const EdgeInsets.symmetric(vertical: 14)),
                      onPressed: () => Navigator.pop(c, true),
                      child: const Text('Mark received'),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
    if (ok != true) {
      amountC.dispose();
      noteC.dispose();
      return;
    }
    final received = double.tryParse(amountC.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? dueAmt;
    final noteText = noteC.text.trim();
    amountC.dispose();
    noteC.dispose();
    final payId = (payment['id'] ?? '').toString();
    await _mutateLoan((loan) {
      final payments = NgmyLoanPaymentsCloud.paymentsFromLoan(loan);
      final idx = payments.indexWhere((p) => (p['id'] ?? '').toString() == payId);
      if (idx < 0) return;
      payments[idx]['status'] = 'paid';
      payments[idx]['paidAmount'] = received;
      payments[idx]['paidAt'] = DateTime.now().toUtc().toIso8601String();
      if (noteText.isNotEmpty) payments[idx]['adminNote'] = noteText;
      loan['payments'] = payments;
      // When the last payment comes in, the loan is repaid and the collateral goes back to the member.
      final due = (loan['totalRepayment'] as num?)?.toDouble() ?? 0;
      if (due > 0 && ngmyLoanPaidTotal(payments) >= due - 0.005 && loan['collateralReleased'] != true) {
        loan['collateralReleased'] = true;
        loan['collateralReleasedAt'] = DateTime.now().toUtc().toIso8601String();
      }
    });
  }

  Widget _buildPaymentsHeader({
    required Map<String, dynamic> loan,
    required double progress,
    required int paidCount,
    required int paymentCount,
    required double paidTotal,
    required double remaining,
  }) {
    final amount = (loan['amount'] as num?)?.toDouble() ?? 0;
    final schedule = (loan['scheduleSummary'] ?? '').toString();
    final titleLabel = widget.isAdmin ? 'Loan tracking' : 'My payments';

    return ClipRRect(
      borderRadius: const BorderRadius.vertical(bottom: Radius.circular(22)),
      child: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)], begin: Alignment.topLeft, end: Alignment.bottomRight),
        ),
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned(right: -24, top: -18, child: _headerGlowOrb(90, 0.1)),
            Positioned(left: -30, bottom: 20, child: _headerGlowOrb(70, 0.07)),
            SafeArea(
              bottom: false,
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 4, 14, 14),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Row(
                      children: [
                        IconButton(
                          visualDensity: VisualDensity.compact,
                          padding: EdgeInsets.zero,
                          constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
                          icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18),
                          onPressed: () => Navigator.pop(context),
                        ),
                        const Spacer(),
                        if (_lastSync != null)
                          AnimatedBuilder(
                            animation: _headerPulse,
                            builder: (context, child) {
                              final glow = 0.55 + (_headerPulse.value * 0.45);
                              return Container(
                                padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
                                decoration: BoxDecoration(
                                  color: Colors.white.withValues(alpha: 0.12),
                                  borderRadius: BorderRadius.circular(12),
                                  border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
                                ),
                                child: Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(Icons.circle, color: Colors.white.withValues(alpha: glow), size: 6),
                                    const SizedBox(width: 5),
                                    const Text('Live', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: Colors.white)),
                                  ],
                                ),
                              );
                            },
                          ),
                      ],
                    ),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.11),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
                      ),
                      child: Column(
                        children: [
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      '\$${ngmyLoanFormatCurrency(amount)}',
                                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, height: 1),
                                    ),
                                    const SizedBox(height: 2),
                                    const Text('Active loan', style: TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.w600)),
                                  ],
                                ),
                              ),
                              TweenAnimationBuilder<double>(
                                tween: Tween(begin: 0, end: progress),
                                duration: const Duration(milliseconds: 900),
                                curve: Curves.easeOutCubic,
                                builder: (context, value, _) => SizedBox(
                                  width: 44,
                                  height: 44,
                                  child: Stack(
                                    alignment: Alignment.center,
                                    children: [
                                      CircularProgressIndicator(value: value, strokeWidth: 4, backgroundColor: Colors.white24, color: Colors.white),
                                      Text('${(value * 100).round()}%', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10)),
                                    ],
                                  ),
                                ),
                              ),
                            ],
                          ),
                          if (schedule.isNotEmpty) ...[
                            const SizedBox(height: 8),
                            Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                schedule,
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 10, height: 1.25),
                              ),
                            ),
                          ],
                          const SizedBox(height: 10),
                          Container(height: 1, color: Colors.white.withValues(alpha: 0.14)),
                          const SizedBox(height: 10),
                          Row(
                            children: [
                              Expanded(
                                child: Text(
                                  '$paidCount of $paymentCount received',
                                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12),
                                ),
                              ),
                              Text(
                                '\$${ngmyLoanFormatCurrency(paidTotal)} paid',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 10, fontWeight: FontWeight.w600),
                              ),
                            ],
                          ),
                          const SizedBox(height: 4),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              '\$${ngmyLoanFormatCurrency(remaining)} left to pay',
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 10),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16),
                        color: Colors.white.withValues(alpha: 0.14),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.35)),
                      ),
                      child: Text(titleLabel, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 12, color: Colors.white)),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _headerGlowOrb(double size, double alpha) => Container(
        width: size,
        height: size,
        decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: alpha)),
      );

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final loan = _loan;
    if (loan == null) {
      return Scaffold(
        backgroundColor: isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6),
        appBar: AppBar(title: const Text('Loan tracking')),
        body: const Center(child: Text('Loan not found.')),
      );
    }
    final payments = NgmyLoanPaymentsCloud.paymentsFromLoan(loan);
    final cash = (loan['companyCashApp'] ?? widget.config.officialCashApp).toString();
    final zelle = (loan['companyZelle'] ?? widget.config.loanCompanyZelle).toString();
    final paidCount = ngmyLoanPaidCount(payments);
    final paidTotal = ngmyLoanPaidTotal(payments);
    final totalDue = (loan['totalRepayment'] as num?)?.toDouble() ?? 0;
    final progress = payments.isEmpty ? 0.0 : paidCount / payments.length;
    final remaining = (totalDue - paidTotal).clamp(0.0, totalDue).toDouble();

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6),
      body: RefreshIndicator(
        color: _loanGreen,
        onRefresh: () => _pullLatest(),
        child: CustomScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          slivers: [
            SliverToBoxAdapter(child: _buildPaymentsHeader(
              loan: loan,
              progress: progress,
              paidCount: paidCount,
              paymentCount: payments.length,
              paidTotal: paidTotal,
              remaining: remaining,
            )),
            SliverPadding(
              padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
              sliver: SliverToBoxAdapter(
                child: Text('Pay the company', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : Colors.black87)),
              ),
            ),
            if (cash.isNotEmpty)
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                sliver: SliverToBoxAdapter(child: _payMethodCard(
                  isDark: isDark,
                  icon: Icons.payments_rounded,
                  iconColor: const Color(0xFF00D632),
                  title: 'Cash App',
                  subtitle: '\$$cash',
                  actionLabel: 'Open',
                  onAction: () => NgmyLoanLogic.openCashApp(cash),
                )),
              ),
            if (zelle.isNotEmpty) ...[
              const SliverToBoxAdapter(child: SizedBox(height: 10)),
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                sliver: SliverToBoxAdapter(child: _payMethodCard(
                  isDark: isDark,
                  icon: Icons.account_balance_rounded,
                  iconColor: const Color(0xFF6D28D9),
                  title: 'Zelle',
                  subtitle: zelle,
                  actionLabel: 'Copy',
                  onAction: () {
                    Clipboard.setData(ClipboardData(text: zelle));
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Zelle copied')));
                  },
                )),
              ),
            ],
            SliverPadding(
              padding: const EdgeInsets.fromLTRB(16, 22, 16, 8),
              sliver: SliverToBoxAdapter(
                child: Text(
                  widget.isAdmin ? 'Weekly schedule — tap to record' : 'Your payment schedule',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : Colors.black87),
                ),
              ),
            ),
            SliverPadding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 10),
              sliver: SliverGrid(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  childAspectRatio: 1.48,
                ),
                delegate: SliverChildBuilderDelegate(
                  (context, i) => _paymentGridTile(context, payments[i], isDark: isDark),
                  childCount: payments.length,
                ),
              ),
            ),
            const SliverToBoxAdapter(child: SizedBox(height: 32)),
          ],
        ),
      ),
    );
  }

  Widget _payMethodCard({
    required bool isDark,
    required IconData icon,
    required Color iconColor,
    required String title,
    required String subtitle,
    required String actionLabel,
    required VoidCallback onAction,
  }) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF151B28) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? Colors.white12 : Colors.grey.shade200),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: iconColor.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
            child: Icon(icon, color: iconColor, size: 22),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                Text(subtitle, style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.grey.shade600)),
              ],
            ),
          ),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: _loanGreen, padding: const EdgeInsets.symmetric(horizontal: 16)),
            onPressed: onAction,
            child: Text(actionLabel),
          ),
        ],
      ),
    );
  }

  Widget _paymentGridTile(BuildContext context, Map<String, dynamic> p, {required bool isDark}) {
    final due = DateTime.tryParse((p['dueDate'] ?? '').toString())?.toLocal();
    final paid = (p['status'] ?? '') == 'paid';
    final dueAmt = (p['amount'] as num?)?.toDouble() ?? 0;
    final paidAt = DateTime.tryParse((p['paidAt'] ?? '').toString())?.toLocal();
    final statusColor = paid ? _loanGreen : const Color(0xFFF59E0B);
    final dateLabel = paid && paidAt != null
        ? '${paidAt.month}/${paidAt.day}'
        : (due != null ? '${due.month}/${due.day}' : '—');
    final innerBg = isDark ? Colors.white.withValues(alpha: 0.06) : Colors.grey.shade50;
    final innerBorder = statusColor.withValues(alpha: paid ? 0.35 : 0.2);

    return Align(
      alignment: Alignment.topCenter,
      child: Material(
        color: Colors.transparent,
        clipBehavior: Clip.antiAlias,
        borderRadius: BorderRadius.circular(16),
        child: InkWell(
          onTap: widget.isAdmin && !paid ? () => _recordPayment(p) : null,
          child: Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: paid ? _loanGreen.withValues(alpha: isDark ? 0.12 : 0.06) : (isDark ? const Color(0xFF1A2235) : Colors.white),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: statusColor.withValues(alpha: paid ? 0.4 : 0.22)),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 9),
                decoration: BoxDecoration(
                  color: innerBg,
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: innerBorder),
                ),
                child: Row(
                  children: [
                    Icon(paid ? Icons.check_circle_rounded : Icons.schedule_rounded, color: statusColor, size: 18),
                    const SizedBox(width: 8),
                    Text('Week ${p['id']}', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                    const Spacer(),
                    Text(dateLabel, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: isDark ? Colors.white54 : Colors.grey.shade600)),
                  ],
                ),
              ),
              const SizedBox(height: 10),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 11),
                decoration: BoxDecoration(
                  color: innerBg,
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: innerBorder),
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        '\$${ngmyLoanFormatCurrency(dueAmt)}',
                        style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: isDark ? Colors.white : Colors.black87, height: 1.15),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(color: statusColor.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(8)),
                      child: Text(paid ? 'PAID' : 'DUE', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: statusColor)),
                    ),
                    if (widget.isAdmin && !paid) ...[
                      const SizedBox(width: 6),
                      GestureDetector(
                        onTap: () => _recordPayment(p),
                        child: Container(
                          padding: const EdgeInsets.all(5),
                          decoration: BoxDecoration(color: _loanGreen, borderRadius: BorderRadius.circular(8)),
                          child: const Icon(Icons.check_rounded, color: Colors.white, size: 14),
                        ),
                      ),
                    ],
                  ],
                ),
              ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// The admin's loan calculator: try an amount, an interest rate and a repayment period, see the whole cost and every payment.
void showNgmyLoanCalculator(BuildContext context) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  final amt = TextEditingController(text: '500');
  var rate = NgmyLoanSettings.current.interestPercent;
  var months = NgmyLoanSettings.current.repaymentMonths;
  showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (c) => StatefulBuilder(
      builder: (ctx, setST) {
        final loan = double.tryParse(amt.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 0;
        final interest = double.parse((loan * rate / 100).toStringAsFixed(2));
        final total = loan + interest;
        final weeks = months * 4;
        final weekly = weeks > 0 ? total / weeks : 0.0;
        final bg = isDark ? const Color(0xFF0F141E) : const Color(0xFFF6F8F7);
        final card = isDark ? const Color(0xFF171E2B) : Colors.white;
        final ink = isDark ? Colors.white : const Color(0xFF111827);
        final soft = isDark ? Colors.white60 : const Color(0xFF6B7280);
        final line = isDark ? Colors.white12 : const Color(0xFFE5E7EB);
        String money(double v) => '\$${ngmyLoanFormatCurrency(double.parse(v.toStringAsFixed(2)))}';
        Widget row(String l, String v, {bool strong = false, Color? color}) => Padding(
              padding: const EdgeInsets.symmetric(vertical: 6),
              child: Row(children: [
                Expanded(child: Text(l, style: TextStyle(color: soft, fontSize: 13))),
                Text(v, style: TextStyle(color: color ?? ink, fontWeight: strong ? FontWeight.w900 : FontWeight.w700, fontSize: strong ? 15 : 13)),
              ]),
            );
        BoxDecoration box() => BoxDecoration(color: card, borderRadius: BorderRadius.circular(20), border: Border.all(color: line));
        final principalShare = total > 0 ? (loan / total).clamp(0.0, 1.0) : 1.0;
        return DraggableScrollableSheet(
          initialChildSize: 0.92,
          minChildSize: 0.5,
          maxChildSize: 0.96,
          expand: false,
          builder: (_, scroll) => Container(
            decoration: BoxDecoration(color: bg, borderRadius: const BorderRadius.vertical(top: Radius.circular(28))),
            child: ListView(
              controller: scroll,
              padding: EdgeInsets.fromLTRB(16, 10, 16, 20 + MediaQuery.of(ctx).viewInsets.bottom),
              children: [
                Center(child: Container(width: 42, height: 4, decoration: BoxDecoration(color: soft.withValues(alpha: 0.5), borderRadius: BorderRadius.circular(3)))),
                const SizedBox(height: 14),
                Row(children: [
                  Container(
                    width: 42,
                    height: 42,
                    decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]), borderRadius: BorderRadius.circular(14)),
                    child: const Icon(Icons.calculate_rounded, color: Colors.white, size: 23),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('Loan calculator', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 19)),
                      Text('Admin only: try the terms before you set them', style: TextStyle(color: soft, fontSize: 11.5)),
                    ]),
                  ),
                  IconButton(onPressed: () => Navigator.pop(ctx), icon: Icon(Icons.close_rounded, color: soft)),
                ]),
                const SizedBox(height: 14),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: box(),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('Loan amount', style: TextStyle(color: soft, fontWeight: FontWeight.w700, fontSize: 12)),
                    const SizedBox(height: 6),
                    TextField(
                      controller: amt,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 26),
                      decoration: InputDecoration(
                        prefixText: '\$ ',
                        prefixStyle: const TextStyle(color: _loanGreen, fontWeight: FontWeight.w900, fontSize: 26),
                        hintText: '0',
                        border: InputBorder.none,
                        isDense: true,
                      ),
                      onChanged: (_) => setST(() {}),
                    ),
                    const SizedBox(height: 6),
                    Wrap(spacing: 8, runSpacing: 6, children: [
                      for (final v in const [100, 250, 500, 1000, 2000])
                        ActionChip(
                          label: Text('\$$v', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                          onPressed: () {
                            amt.text = '$v';
                            setST(() {});
                          },
                        ),
                    ]),
                  ]),
                ),
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: box(),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Row(children: [
                      Flexible(child: Text('Try other terms', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 14))),
                      const Spacer(),
                      TextButton(
                        onPressed: () => setST(() {
                          rate = NgmyLoanSettings.current.interestPercent;
                          months = NgmyLoanSettings.current.repaymentMonths;
                        }),
                        child: const Text('Use my saved terms'),
                      ),
                    ]),
                    Row(children: [
                      Text('Interest rate', style: TextStyle(color: soft, fontSize: 12.5)),
                      const Spacer(),
                      Text('${ngmyLoanFormatCurrency(rate)}%', style: const TextStyle(color: Color(0xFFF59E0B), fontWeight: FontWeight.w900, fontSize: 14)),
                    ]),
                    Slider(value: rate.clamp(0, 100).toDouble(), min: 0, max: 100, divisions: 200, activeColor: const Color(0xFFF59E0B), onChanged: (v) => setST(() => rate = v)),
                    Row(children: [
                      Text('Repayment period', style: TextStyle(color: soft, fontSize: 12.5)),
                      const Spacer(),
                      Text(months == 1 ? '1 month' : '$months months', style: const TextStyle(color: _loanGreen, fontWeight: FontWeight.w900, fontSize: 14)),
                    ]),
                    Slider(value: months.toDouble(), min: 1, max: 12, divisions: 11, activeColor: _loanGreen, onChanged: (v) => setST(() => months = v.round())),
                  ]),
                ),
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.all(18),
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF00B25A), Color(0xFF007A45)]),
                    borderRadius: BorderRadius.circular(22),
                    boxShadow: [BoxShadow(color: _loanGreen.withValues(alpha: 0.28), blurRadius: 18, offset: const Offset(0, 8))],
                  ),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('The member repays', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12, fontWeight: FontWeight.w700)),
                    const SizedBox(height: 2),
                    Text(money(total), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 36, height: 1.1)),
                    const SizedBox(height: 6),
                    Text(loan > 0 ? '$weeks weekly payments of ${money(weekly)}' : 'Type an amount to begin', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
                    const SizedBox(height: 14),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: SizedBox(
                        height: 10,
                        child: Row(children: [
                          Expanded(flex: (principalShare * 1000).round().clamp(1, 1000), child: Container(color: Colors.white)),
                          Expanded(flex: ((1 - principalShare) * 1000).round().clamp(0, 999) + 1, child: Container(color: const Color(0xFFFBBF24))),
                        ]),
                      ),
                    ),
                    const SizedBox(height: 6),
                    Wrap(spacing: 16, runSpacing: 4, children: [
                      Row(mainAxisSize: MainAxisSize.min, children: [
                        Container(width: 9, height: 9, decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle)),
                        Text('  Borrowed ${money(loan)}', style: const TextStyle(color: Colors.white, fontSize: 11.5, fontWeight: FontWeight.w700)),
                      ]),
                      Row(mainAxisSize: MainAxisSize.min, children: [
                        Container(width: 9, height: 9, decoration: const BoxDecoration(color: Color(0xFFFBBF24), shape: BoxShape.circle)),
                        Text('  Interest ${money(interest)}', style: const TextStyle(color: Colors.white, fontSize: 11.5, fontWeight: FontWeight.w700)),
                      ]),
                    ]),
                  ]),
                ),
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.fromLTRB(16, 10, 16, 10),
                  decoration: box(),
                  child: Column(children: [
                    row('Amount requested', money(loan)),
                    Divider(height: 1, color: line),
                    row('Interest', money(interest), color: const Color(0xFFF59E0B)),
                    Divider(height: 1, color: line),
                    row('Total to repay', money(total), strong: true),
                    Divider(height: 1, color: line),
                    row('Number of payments', '$weeks (one each week)'),
                    Divider(height: 1, color: line),
                    row('Each payment', money(weekly), strong: true, color: _loanGreen),
                    Divider(height: 1, color: line),
                    row('Repayment period', months == 1 ? '1 month' : '$months months'),
                  ]),
                ),
                if (loan > 0 && weeks > 0) ...[
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.all(14),
                    decoration: box(),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('Payment by payment', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 14)),
                      const SizedBox(height: 8),
                      for (var i = 0; i < weeks && i < 12; i++)
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 4),
                          child: Row(children: [
                            Container(
                              width: 26,
                              height: 26,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(color: _loanGreen.withValues(alpha: 0.14), shape: BoxShape.circle),
                              child: Text('${i + 1}', style: const TextStyle(color: _loanGreen, fontWeight: FontWeight.w900, fontSize: 11)),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Builder(builder: (_) {
                                final d = DateTime.now().add(Duration(days: 7 * (i + 1)));
                                return Text('${d.month}/${d.day}/${d.year}', style: TextStyle(color: soft, fontSize: 12.5));
                              }),
                            ),
                            Text(money(weekly), style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 13)),
                            SizedBox(width: 88, child: Text('left ${money((total - weekly * (i + 1)).clamp(0, total).toDouble())}', textAlign: TextAlign.right, style: TextStyle(color: soft, fontSize: 11.5))),
                          ]),
                        ),
                      if (weeks > 12) Padding(padding: const EdgeInsets.only(top: 4), child: Text('… and ${weeks - 12} more weekly payments', style: TextStyle(color: soft, fontSize: 12))),
                    ]),
                  ),
                ],
                const SizedBox(height: 14),
                FilledButton.icon(
                  style: FilledButton.styleFrom(backgroundColor: _loanGreen, minimumSize: const Size.fromHeight(48), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                  onPressed: () async {
                    final cur = NgmyLoanSettings.current;
                    final ok = await NgmyLoanSettings.save(NgmyLoanSettings(interestPercent: rate, maxAmount: cur.maxAmount, repaymentMonths: months));
                    if (ctx.mounted) {
                      ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(content: Text(ok ? 'These terms are now the loan terms.' : 'Saved on this phone. It will sync when the connection is back.')));
                    }
                  },
                  icon: const Icon(Icons.save_rounded, size: 18),
                  label: const Text('Make these my loan terms', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
              ],
            ),
          ),
        );
      },
    ),
  );
}

void showNgmyLoanAdminSheet(
  BuildContext context, {
  required NgmyLoanConfigBridge config,
  required VoidCallback onDataChanged,
  required bool isDark,
  VoidCallback? onEditSettings,
  Future<bool> Function()? onPersistNow,
  Future<void> Function()? onRefreshLoans,
}) {
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => DraggableScrollableSheet(
      initialChildSize: 0.92,
      minChildSize: 0.5,
      maxChildSize: 0.96,
      builder: (_, scroll) => _NgmyLoanAdminPanel(
        config: config,
        onDataChanged: onDataChanged,
        isDark: isDark,
        scrollController: scroll,
        onEditSettings: onEditSettings,
        onPersistNow: onPersistNow,
        onRefreshLoans: onRefreshLoans,
      ),
    ),
  );
}

class _NgmyLoanAdminPanel extends StatefulWidget {
  const _NgmyLoanAdminPanel({
    required this.config,
    required this.onDataChanged,
    required this.isDark,
    required this.scrollController,
    this.onEditSettings,
    this.onPersistNow,
    this.onRefreshLoans,
  });
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final bool isDark;
  final ScrollController scrollController;
  final VoidCallback? onEditSettings;
  final Future<bool> Function()? onPersistNow;
  final Future<void> Function()? onRefreshLoans;

  @override
  State<_NgmyLoanAdminPanel> createState() => _NgmyLoanAdminPanelState();
}

class _NgmyLoanAdminPanelState extends State<_NgmyLoanAdminPanel> {
  Timer? _poll;

  @override
  void initState() {
    super.initState();
    NgmyFeatureSyncSession.enterLoans();
    unawaited(widget.onRefreshLoans?.call());
    _poll = Timer.periodic(const Duration(seconds: 45), (_) {
      if (!mounted) return;
      unawaited(widget.onRefreshLoans?.call().then((_) {
        if (mounted) setState(() {});
      }));
    });
  }

  @override
  void dispose() {
    _poll?.cancel();
    NgmyFeatureSyncSession.leaveLoans();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final apps = List<Map<String, dynamic>>.from(widget.config.loanApplications.map((e) => Map<String, dynamic>.from(e)))
      ..sort((a, b) => (b['createdAt'] ?? '').toString().compareTo((a['createdAt'] ?? '').toString()));

    return Container(
      decoration: BoxDecoration(
        color: widget.isDark ? const Color(0xFF0F111A) : Colors.white,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: ListView(
        controller: widget.scrollController,
        padding: const EdgeInsets.fromLTRB(18, 12, 18, 24),
        children: [
          Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade400, borderRadius: BorderRadius.circular(99)))),
          const SizedBox(height: 12),
          Row(
            children: [
              const Expanded(child: Text('Loan Center', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold))),
              TextButton.icon(
                onPressed: () => _editTerms(context),
                icon: const Icon(Icons.tune_rounded, size: 18),
                label: const Text('Loan terms'),
              ),
              if (widget.onEditSettings != null)
                TextButton.icon(
                  onPressed: () {
                    Navigator.pop(context);
                    widget.onEditSettings!();
                  },
                  icon: const Icon(Icons.settings, size: 18),
                  label: const Text('Settings'),
                ),
            ],
          ),
          Text('${apps.where((a) => (a['status'] ?? '') == 'pending').length} pending · ${apps.length} total', style: TextStyle(color: Colors.grey.shade600)),
          const SizedBox(height: 16),
          if (apps.isEmpty) const Padding(padding: EdgeInsets.all(24), child: Text('No loan applications yet.', textAlign: TextAlign.center)),
          ...apps.map((a) => _adminCard(context, a)),
        ],
      ),
    );
  }

  /// The admin chooses the interest rate, the biggest loan and the repayment period.
  Future<void> _editTerms(BuildContext context) async {
    final cur = NgmyLoanSettings.current;
    final rate = TextEditingController(text: ngmyLoanFormatCurrency(cur.interestPercent));
    final max = TextEditingController(text: ngmyLoanFormatCurrency(cur.maxAmount));
    final months = TextEditingController(text: '${cur.repaymentMonths}');
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Loan terms'),
        content: SingleChildScrollView(
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            const Text('These numbers are used everywhere in the loan service. Change them any time; loans already approved keep the figures the member agreed to.', style: TextStyle(fontSize: 12)),
            const SizedBox(height: 12),
            TextField(controller: rate, keyboardType: const TextInputType.numberWithOptions(decimal: true), decoration: const InputDecoration(labelText: 'Interest rate (%)', border: OutlineInputBorder())),
            const SizedBox(height: 10),
            TextField(controller: max, keyboardType: const TextInputType.numberWithOptions(decimal: true), decoration: const InputDecoration(labelText: 'Biggest loan (\$)', border: OutlineInputBorder())),
            const SizedBox(height: 10),
            TextField(controller: months, keyboardType: TextInputType.number, decoration: const InputDecoration(labelText: 'Repayment period (months)', border: OutlineInputBorder())),
          ]),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Save')),
        ],
      ),
    );
    final r = double.tryParse(rate.text.replaceAll(RegExp(r'[^0-9.]'), ''));
    final mx = double.tryParse(max.text.replaceAll(RegExp(r'[^0-9.]'), ''));
    final mo = int.tryParse(months.text.replaceAll(RegExp(r'[^0-9]'), ''));
    rate.dispose();
    max.dispose();
    months.dispose();
    if (ok != true || r == null || mx == null || mo == null) return;
    final saved = await NgmyLoanSettings.save(NgmyLoanSettings(interestPercent: r.clamp(0, 200).toDouble(), maxAmount: mx.clamp(1, 1000000).toDouble(), repaymentMonths: mo.clamp(1, 24)));
    if (!context.mounted) return;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(saved ? 'Loan terms saved.' : 'Saved on this phone. It will sync when the connection is back.')));
  }

  Widget _adminCard(BuildContext context, Map<String, dynamic> app) {
    final status = (app['status'] ?? 'pending').toString();
    final id = (app['id'] ?? '').toString();
    final statusColor = switch (status) {
      'approved' => _loanGreen,
      'rejected' => Colors.redAccent,
      _ => Colors.orange,
    };
    return Card(
      margin: const EdgeInsets.only(bottom: 14),
      elevation: widget.isDark ? 0 : 2,
      color: widget.isDark ? const Color(0xFF151B28) : Colors.white,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16), side: BorderSide(color: statusColor.withValues(alpha: 0.35))),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(6, 8, 14, 14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                IconButton(
                  visualDensity: VisualDensity.compact,
                  icon: Icon(Icons.delete_outline_rounded, color: Colors.redAccent.withValues(alpha: 0.85), size: 20),
                  tooltip: 'Delete loan',
                  onPressed: () => _confirmDeleteLoan(context, app),
                ),
                Expanded(
                  child: Text(
                    (app['fullLegalName'] ?? app['username'] ?? 'Applicant').toString(),
                    style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(color: statusColor.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(20)),
                  child: Text(ngmyLoanStatusLabel(app).toUpperCase(), style: TextStyle(color: statusColor, fontSize: 10, fontWeight: FontWeight.w900)),
                ),
              ],
            ),
            Material(
              color: Colors.transparent,
              child: InkWell(
                borderRadius: BorderRadius.circular(12),
                onTap: () => _openLoanDetail(context, app),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(8, 4, 8, 4),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        '\$${ngmyLoanFormatCurrency((app['amount'] as num?)?.toDouble() ?? 0)} · ${NgmyLoanLogic.collateralLabel((app['collateralType'] ?? '').toString())}',
                        style: TextStyle(fontSize: 12, color: Colors.grey.shade600, fontWeight: FontWeight.w600),
                      ),
                      Text((app['userEmail'] ?? app['email'] ?? '').toString(), style: TextStyle(fontSize: 11, color: Colors.grey.shade500)),
                      if ((app['purpose'] ?? '').toString().isNotEmpty) Text('Purpose: ${app['purpose']}', style: TextStyle(fontSize: 11.5, color: Colors.grey.shade600, fontWeight: FontWeight.w600)),
                      if (status == 'approved') ...[
                        Builder(builder: (_) {
                          final tot = (app['totalRepayment'] as num?)?.toDouble() ?? 0;
                          final paid = ngmyLoanPaidTotal((app['payments'] as List?) ?? const []);
                          return Text('Paid \$${ngmyLoanFormatCurrency(paid)} · Balance \$${ngmyLoanFormatCurrency((tot - paid).clamp(0, tot).toDouble())}', style: const TextStyle(fontSize: 11.5, color: _loanGreenDark, fontWeight: FontWeight.w800));
                        }),
                        Text(app['collateralReleased'] == true ? 'Collateral: Released' : 'Collateral held', style: TextStyle(fontSize: 11.5, color: Colors.grey.shade600, fontWeight: FontWeight.w600)),
                      ],
                      const SizedBox(height: 10),
                      const Row(
                        children: [
                          Icon(Icons.touch_app_rounded, size: 14, color: _loanGreen),
                          SizedBox(width: 6),
                          Expanded(
                            child: Text(
                              'Tap to view full application & zoom photos',
                              style: TextStyle(fontSize: 11, color: _loanGreenDark, fontWeight: FontWeight.w700),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
            if (status == 'approved' && app['paidOut'] != true) ...[
              const SizedBox(height: 8),
              Align(
                alignment: Alignment.centerLeft,
                child: OutlinedButton.icon(
                  onPressed: () async {
                    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == id);
                    if (i < 0) return;
                    widget.config.loanApplications[i]['paidOut'] = true;
                    widget.config.loanApplications[i]['paidOutAt'] = DateTime.now().toUtc().toIso8601String();
                    widget.onDataChanged();
                    await widget.onPersistNow?.call();
                    if (mounted) setState(() {});
                  },
                  icon: const Icon(Icons.payments_rounded, size: 16),
                  label: const Text('Mark as paid out'),
                ),
              ),
            ],
            if (status == 'pending') ...[
              const SizedBox(height: 10),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(onPressed: () => _reject(context, id), child: const Text('Decline')),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      style: FilledButton.styleFrom(backgroundColor: _loanGreen),
                      onPressed: () => _approve(id),
                      child: const Text('Approve'),
                    ),
                  ),
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }

  Future<void> _openLoanDetail(BuildContext context, Map<String, dynamic> app) async {
    final copy = Map<String, dynamic>.from(app);
    await NgmyLoanPhotosStore.applyToApp(copy);
    if (!context.mounted) return;
    await Navigator.push<void>(
      context,
      MaterialPageRoute<void>(
        builder: (ctx) => _NgmyLoanAdminDetailScreen(
          app: copy,
          isDark: widget.isDark,
          config: widget.config,
          onDataChanged: widget.onDataChanged,
          onPersistNow: widget.onPersistNow,
          onRefreshLoans: widget.onRefreshLoans,
          onDelete: () => _confirmDeleteLoan(ctx, copy, popDetail: true),
          onApprove: (id) {
            Navigator.pop(ctx);
            _approve(id);
          },
          onReject: (id) {
            Navigator.pop(ctx);
            _reject(context, id);
          },
        ),
      ),
    );
  }

  Future<bool> _confirmDeleteLoan(BuildContext context, Map<String, dynamic> app, {bool popDetail = false}) async {
    final id = (app['id'] ?? '').toString();
    final name = (app['fullLegalName'] ?? app['username'] ?? 'this loan').toString();
    final ok = await showNgmyDeleteConfirm(
      context,
      title: 'Delete loan permanently?',
      message: 'Remove $name from Loan Center and the user\'s Loan Services? All photos and payment history for this loan will be deleted everywhere. This cannot be undone.',
      confirmLabel: 'Delete forever',
    );
    if (ok != true || id.isEmpty) return false;
    final deleted = await NgmyLoanDelete.deleteLoan(apps: widget.config.loanApplications, loanId: id);
    if (!deleted) return false;
    final saved = await widget.onPersistNow?.call() ?? false;
    widget.onDataChanged();
    if (!context.mounted) return deleted;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(saved ? 'Loan deleted everywhere.' : 'Deleted on this device — sync when online.'),
        backgroundColor: saved ? _loanGreen : Colors.orange,
      ),
    );
    if (popDetail && context.mounted && Navigator.canPop(context)) Navigator.pop(context);
    return true;
  }

  Future<void> _approve(String id) async {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == id);
    if (i < 0) return;
    final approvedAt = DateTime.now().toUtc().toIso8601String();
    widget.config.loanApplications[i]['status'] = 'approved';
    widget.config.loanApplications[i]['approvedAt'] = approvedAt;
    widget.config.loanApplications[i]['updatedAt'] = approvedAt;
    await NgmyLoanPhotosStore.saveForApp(widget.config.loanApplications[i]);
    await NgmyLoanStatusStore.saveDecision(id, status: 'approved', approvedAt: approvedAt);
    await NgmyLoanStatusCloud.pushFromApps(widget.config.loanApplications);
    final ok = await widget.onPersistNow?.call() ?? false;
    widget.onDataChanged();
    if (!context.mounted) return;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok ? 'Loan approved and saved.' : 'Approved on this device — sync failed. Check internet and open Loan Center again.'),
        backgroundColor: ok ? _loanGreen : Colors.orange,
      ),
    );
  }

  Future<void> _reject(BuildContext context, String id) async {
    final reasonC = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: const Text('Reject application'),
        content: TextField(controller: reasonC, maxLines: 3, decoration: const InputDecoration(labelText: 'Why rejected? (user will see this)')),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(c, true), child: const Text('Reject')),
        ],
      ),
    );
    if (ok != true) {
      reasonC.dispose();
      return;
    }
    final reason = reasonC.text.trim();
    reasonC.dispose();
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == id);
    if (i < 0) return;
    final updatedAt = DateTime.now().toUtc().toIso8601String();
    widget.config.loanApplications[i]['status'] = 'rejected';
    widget.config.loanApplications[i]['rejectionReason'] = reason;
    widget.config.loanApplications[i]['updatedAt'] = updatedAt;
    await NgmyLoanStatusStore.saveDecision(id, status: 'rejected', rejectionReason: reason);
    await NgmyLoanStatusCloud.pushFromApps(widget.config.loanApplications);
    final saved = await widget.onPersistNow?.call() ?? false;
    widget.onDataChanged();
    if (!context.mounted) return;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(saved ? 'Loan rejected and saved.' : 'Rejected locally — cloud sync failed.'),
        backgroundColor: saved ? _loanGreen : Colors.orange,
      ),
    );
  }
}

String _ngmyLoanIdTypeLabel(String t) => switch (t) {
      'drivers_license' => "Driver's License",
      'passport' => 'Passport',
      'state_id' => 'State ID',
      'other' => 'Other',
      _ => t.isEmpty ? '—' : t,
    };

String _ngmyLoanAdminFmtDate(dynamic raw) {
  final d = DateTime.tryParse((raw ?? '').toString())?.toLocal();
  if (d == null) return (raw ?? '').toString();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return '${months[d.month - 1]} ${d.day}, ${d.year}';
}

class _NgmyLoanAdminDetailScreen extends StatelessWidget {
  const _NgmyLoanAdminDetailScreen({
    required this.app,
    required this.isDark,
    required this.config,
    required this.onDataChanged,
    required this.onDelete,
    required this.onApprove,
    required this.onReject,
    this.onPersistNow,
    this.onRefreshLoans,
  });

  final Map<String, dynamic> app;
  final bool isDark;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final Future<bool> Function()? onDelete;
  final void Function(String id) onApprove;
  final void Function(String id) onReject;
  final Future<bool> Function()? onPersistNow;
  final Future<void> Function()? onRefreshLoans;

  List<(String, IconData, dynamic)> get _photos => [
        if ((app['idFrontRef'] ?? '').toString().isNotEmpty) ('ID front', Icons.badge_outlined, app['idFrontRef']),
        if ((app['idBackRef'] ?? '').toString().isNotEmpty) ('ID back', Icons.badge_outlined, app['idBackRef']),
        if ((app['selfieRef'] ?? '').toString().isNotEmpty) ('Selfie', Icons.face_retouching_natural_rounded, app['selfieRef']),
        if ((app['titleFrontRef'] ?? '').toString().isNotEmpty) ('Collateral front', Icons.photo_library_outlined, app['titleFrontRef']),
        if ((app['titleBackRef'] ?? '').toString().isNotEmpty) ('Collateral back', Icons.photo_library_outlined, app['titleBackRef']),
      ];

  @override
  Widget build(BuildContext context) {
    final status = (app['status'] ?? 'pending').toString();
    final id = (app['id'] ?? '').toString();
    final name = (app['fullLegalName'] ?? app['username'] ?? 'Applicant').toString();
    final amount = (app['amount'] as num?)?.toDouble() ?? 0;
    final pageBg = isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;

    return Scaffold(
      backgroundColor: pageBg,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 168,
            pinned: true,
            backgroundColor: _loanGreenDark,
            foregroundColor: Colors.white,
            actions: [
              if (status == 'approved')
                IconButton(
                  icon: const Icon(Icons.payments_outlined),
                  tooltip: 'Payment tracking',
                  onPressed: () => Navigator.push(
                    context,
                    MaterialPageRoute<void>(
                      builder: (_) => NgmyLoanTrackingScreen(
                        loanId: id,
                        config: config,
                        onDataChanged: onDataChanged,
                        isAdmin: true,
                        onPersistNow: onPersistNow,
                        onRefreshLoans: onRefreshLoans,
                      ),
                    ),
                  ),
                ),
              IconButton(
                icon: const Icon(Icons.delete_outline_rounded),
                tooltip: 'Delete loan',
                onPressed: () => onDelete?.call(),
              ),
            ],
            flexibleSpace: FlexibleSpaceBar(
              background: Container(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF00B25A), Color(0xFF059669), Color(0xFF0F766E)],
                  ),
                ),
                child: SafeArea(
                  bottom: false,
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(56, 8, 16, 16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.18),
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: Colors.white30),
                          ),
                          child: Text(status.toUpperCase(), style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
                        ),
                        const SizedBox(height: 8),
                        Text(name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, height: 1.15)),
                        const SizedBox(height: 4),
                        Text(
                          '\$${ngmyLoanFormatCurrency(amount)} · ${NgmyLoanLogic.collateralLabel((app['collateralType'] ?? '').toString())}',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 13, fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 24),
            sliver: SliverList(
              delegate: SliverChildListDelegate([
                _adminInfoCard(
                  card,
                  icon: Icons.payments_rounded,
                  title: 'Loan terms',
                  rows: [
                    ('Amount requested', '\$${ngmyLoanFormatCurrency(amount)}'),
                    ('Total repayment', '\$${ngmyLoanFormatCurrency((app['totalRepayment'] as num?)?.toDouble() ?? 0)}'),
                    ('Schedule', (app['scheduleSummary'] ?? '').toString()),
                    ('Term', '${app['termWeeks'] ?? ''} weeks'),
                    ('Submitted', _ngmyLoanAdminFmtDate(app['createdAt'])),
                  ],
                ),
                _adminInfoCard(
                  card,
                  icon: Icons.person_rounded,
                  title: 'Applicant',
                  rows: [
                    ('Full legal name', (app['fullLegalName'] ?? '').toString()),
                    ('Username', (app['username'] ?? '').toString()),
                    ('Email', (app['email'] ?? app['userEmail'] ?? '').toString()),
                    ('Phone', ngmyLoanDisplayUsPhone((app['phone'] ?? '').toString())),
                    ('Date of birth', _ngmyLoanAdminFmtDate(app['dateOfBirth'])),
                    ('Home address', (app['homeAddress'] ?? '').toString()),
                  ],
                ),
                _adminInfoCard(
                  card,
                  icon: Icons.verified_user_outlined,
                  title: 'Government ID',
                  rows: [
                    ('ID type', _ngmyLoanIdTypeLabel((app['idType'] ?? '').toString())),
                    ('ID number', (app['governmentId'] ?? '').toString()),
                    ('Expiration', (app['idExpiration'] ?? '').toString()),
                    ('SSN', (app['ssn'] ?? '').toString()),
                  ],
                ),
                _adminInfoCard(
                  card,
                  icon: Icons.account_balance_wallet_outlined,
                  title: 'Payout',
                  rows: [
                    ('Method', (app['receiveMethod'] ?? '').toString()),
                    ('Details', (app['receiveDetails'] ?? app['payoutDestination'] ?? '').toString()),
                  ],
                ),
                _adminInfoCard(
                  card,
                  icon: Icons.inventory_2_outlined,
                  title: 'Collateral',
                  rows: [
                    ('Type', NgmyLoanLogic.collateralLabel((app['collateralType'] ?? '').toString())),
                    if ((app['collateralCustomNote'] ?? '').toString().isNotEmpty) ('Description', (app['collateralCustomNote'] ?? '').toString()),
                  ],
                ),
                _adminPhotosCard(context, card),
                if (status == 'rejected' && (app['rejectionReason'] ?? '').toString().isNotEmpty)
                  _adminInfoCard(
                    card,
                    icon: Icons.block_rounded,
                    title: 'Rejection reason',
                    rows: [('Reason', (app['rejectionReason'] ?? '').toString())],
                    accent: Colors.redAccent,
                  ),
                if (status == 'pending') ...[
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: id.isEmpty ? null : () => onReject(id),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: Colors.redAccent,
                            side: const BorderSide(color: Colors.redAccent),
                            padding: const EdgeInsets.symmetric(vertical: 14),
                          ),
                          child: const Text('Reject', style: TextStyle(fontWeight: FontWeight.w800)),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: FilledButton(
                          onPressed: id.isEmpty ? null : () => onApprove(id),
                          style: FilledButton.styleFrom(
                            backgroundColor: _loanGreen,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                          ),
                          child: const Text('Approve loan', style: TextStyle(fontWeight: FontWeight.w900)),
                        ),
                      ),
                    ],
                  ),
                ],
              ]),
            ),
          ),
        ],
      ),
    );
  }

  Widget _adminInfoCard(
    Color card, {
    required IconData icon,
    required String title,
    required List<(String, String)> rows,
    Color accent = _loanGreen,
  }) {
    final visible = rows.where((r) => r.$2.trim().isNotEmpty).toList();
    if (visible.isEmpty) return const SizedBox.shrink();
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: isDark ? Colors.white12 : Colors.grey.shade200),
        boxShadow: isDark ? null : [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
            decoration: BoxDecoration(
              color: accent.withValues(alpha: isDark ? 0.12 : 0.08),
              borderRadius: const BorderRadius.vertical(top: Radius.circular(18)),
            ),
            child: Row(
              children: [
                Icon(icon, size: 18, color: accent),
                const SizedBox(width: 8),
                Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : const Color(0xFF111827))),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 10, 14, 14),
            child: Column(
              children: visible.map((row) {
                return Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(
                        width: 118,
                        child: Text(row.$1, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : const Color(0xFF6B7280))),
                      ),
                      Expanded(
                        child: Text(row.$2, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, height: 1.35, color: isDark ? Colors.white : const Color(0xFF111827))),
                      ),
                    ],
                  ),
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }

  Widget _adminPhotosCard(BuildContext context, Color card) {
    final photos = _photos;
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: isDark ? Colors.white12 : Colors.grey.shade200),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
            decoration: BoxDecoration(
              color: const Color(0xFF3B82F6).withValues(alpha: isDark ? 0.12 : 0.08),
              borderRadius: const BorderRadius.vertical(top: Radius.circular(18)),
            ),
            child: Row(
              children: [
                const Icon(Icons.photo_library_rounded, size: 18, color: Color(0xFF3B82F6)),
                const SizedBox(width: 8),
                Text('Photos & documents', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : const Color(0xFF111827))),
                const Spacer(),
                Text('Tap to open', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : const Color(0xFF6B7280))),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(14),
            child: photos.isEmpty
                ? Text('No photos attached to this application.', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.grey.shade600))
                : Wrap(
                    spacing: 12,
                    runSpacing: 12,
                    children: photos.map((item) {
                      return Material(
                        color: isDark ? const Color(0xFF1E2535) : const Color(0xFFF9FAFB),
                        borderRadius: BorderRadius.circular(14),
                        child: InkWell(
                          onTap: () => NgmyLoanStore.openZoom(context, item.$3, label: item.$1),
                          borderRadius: BorderRadius.circular(14),
                          child: Container(
                            width: 148,
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(14),
                              border: Border.all(color: isDark ? Colors.white12 : Colors.grey.shade200),
                            ),
                            child: Column(
                              children: [
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(10),
                                  child: SizedBox(
                                    width: double.infinity,
                                    height: 120,
                                    child: Stack(
                                      fit: StackFit.expand,
                                      children: [
                                        NgmyLoanImage(item.$3),
                                        Positioned(
                                          right: 6,
                                          bottom: 6,
                                          child: Container(
                                            padding: const EdgeInsets.all(4),
                                            decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), borderRadius: BorderRadius.circular(8)),
                                            child: const Icon(Icons.open_in_full_rounded, color: Colors.white, size: 14),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 8),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Icon(item.$2, size: 14, color: const Color(0xFF3B82F6)),
                                    const SizedBox(width: 4),
                                    Flexible(
                                      child: Text(item.$1, textAlign: TextAlign.center, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF374151)), maxLines: 2, overflow: TextOverflow.ellipsis),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      );
                    }).toList(),
                  ),
          ),
        ],
      ),
    );
  }
}

/// The status of a loan in plain words: Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined.
String ngmyLoanStatusLabel(Map<String, dynamic> app) {
  final s = (app['status'] ?? 'pending').toString();
  if (s == 'rejected') return 'Declined';
  if (s != 'approved') return 'Pending';
  final total = (app['totalRepayment'] as num?)?.toDouble() ?? 0;
  final pays = (app['payments'] as List?) ?? const [];
  final paid = ngmyLoanPaidTotal(pays);
  if (total > 0 && paid >= total - 0.005) return 'Repaid';
  final now = DateTime.now().toUtc();
  final overdue = pays.any((p) => p is Map && (p['status'] ?? '') != 'paid' && (DateTime.tryParse('${p['dueDate']}')?.isBefore(now) ?? false));
  if (overdue) return 'Overdue';
  if (paid > 0) return 'In Repayment';
  return app['paidOut'] == true ? 'Paid Out' : 'Approved';
}

/// A friendly line about the next payment: coming up soon, late, or all done and the collateral released.
String ngmyLoanReminderLine(Map<String, dynamic> app) {
  if (app['collateralReleased'] == true) return '✅ Fully repaid. Your collateral has been released back to you.';
  final pays = (app['payments'] as List?) ?? const [];
  final now = DateTime.now().toUtc();
  for (final p in pays) {
    if (p is! Map || (p['status'] ?? '') == 'paid') continue;
    final due = DateTime.tryParse('${p['dueDate']}');
    if (due == null) continue;
    final amt = ngmyLoanFormatCurrency((p['amount'] as num?)?.toDouble() ?? 0);
    final date = '${due.toLocal().month}/${due.toLocal().day}/${due.toLocal().year}';
    if (due.isBefore(now)) return '⏰ A payment of \$$amt was due on $date. Please pay when you can, or call us if you need more time.';
    final days = due.difference(now).inDays;
    if (days <= 2) return '🔔 Your next payment of \$$amt is due ${days <= 0 ? 'today' : 'in $days day${days == 1 ? '' : 's'}'} ($date).';
    return 'Next payment: \$$amt on $date.';
  }
  return '';
}

class NgmyLoanLogic {
  /// The interest as a fraction (0.1 is 10%). The admin sets it in the loan settings.
  static double get interestRate => NgmyLoanSettings.current.interestPercent / 100;

  /// The whole cost of a loan, worked out from the admin's settings.
  static ({double amount, double interest, double total, int weeks, double weekly, String period}) breakdown(double amount) {
    final t = termForAmount(amount);
    final interest = double.parse((amount * interestRate).toStringAsFixed(2));
    final total = amount + interest;
    return (amount: amount, interest: interest, total: total, weeks: t.weeks, weekly: t.weeks > 0 ? total / t.weeks : 0.0, period: t.monthsLabel);
  }

  static List<Map<String, dynamic>> _activeLoans(List<Map<String, dynamic>> userLoans) => userLoans
      .where((a) {
        final s = (a['status'] ?? '').toString();
        return s == 'approved' || s == 'pending';
      })
      .map((e) => Map<String, dynamic>.from(e))
      .toList();

  /// Under \$1,000: max 2 active/pending. \$1,000+: max 1.
  static bool canUserApplyAnother(List<Map<String, dynamic>> userLoans, {double? newAmount}) {
    final active = _activeLoans(userLoans);
    if (active.isEmpty) return true;
    final anyLarge = active.any((a) => ((a['amount'] as num?)?.toDouble() ?? 0) >= 1000);
    final newLarge = (newAmount ?? 0) >= 1000;
    if (anyLarge || newLarge) return active.length < 1;
    return active.length < 2;
  }

  static String loanLimitMessage(List<Map<String, dynamic>> userLoans, {double? newAmount}) {
    final active = _activeLoans(userLoans);
    final anyLarge = active.any((a) => ((a['amount'] as num?)?.toDouble() ?? 0) >= 1000);
    final newLarge = (newAmount ?? 0) >= 1000;
    if (anyLarge || newLarge) {
      return 'Loans of \$1,000 or more allow only 1 active application at a time.';
    }
    return 'You can have up to 2 active loans under \$1,000. Wait for review or finish current ones.';
  }

  static String requiredCollateralType(double amount) {
    if (amount <= 200) return 'phone';
    if (amount >= 2000) return 'house';
    return 'car';
  }

  static String collateralLabel(String type) => switch (type) {
        'phone' => 'Phone (2 photos)',
        'car' => 'Vehicle title (front & back)',
        'house' => 'Property title (front & back)',
        _ => 'Collateral',
      };

  /// Weekly payments over the repayment period the admin chose.
  static ({int weeks, String summary, String monthsLabel}) termForAmount(double amount, {int? userMonths}) {
    final months = NgmyLoanSettings.current.repaymentMonths;
    final weeks = months * 4;
    final label = months == 1 ? '1 month' : '$months months';
    return (weeks: weeks, summary: '$weeks weekly payments over $label', monthsLabel: label);
  }

  static Future<void> openCashApp(String tag) async {
    final handle = tag.trim().replaceFirst(r'$', '');
    if (handle.isEmpty) return;
    final uri = Uri.parse('https://cash.app/\$$handle');
    if (await canLaunchUrl(uri)) await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  static Future<void> callPhone(String phone) async {
    final digits = phone.replaceAll(RegExp(r'[^0-9+]'), '');
    if (digits.isEmpty) return;
    final uri = Uri.parse('tel:$digits');
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }
}

class NgmyLoanDraftStore {
  static String _key(String email) => 'ngmy_loan_draft_${email.toLowerCase().trim()}';

  static Future<Map<String, dynamic>?> load(String email) async {
    if (email.trim().isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email));
    if (raw == null || raw.isEmpty) return null;
    try {
      final d = jsonDecode(raw);
      if (d is Map) return Map<String, dynamic>.from(d);
    } catch (_) {}
    return null;
  }

  static Future<void> save(String email, Map<String, dynamic> draft) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(email), jsonEncode(draft));
  }

  static Future<void> clear(String email) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key(email));
  }
}

/// Permanently remove a loan and all related data (admin only).
class NgmyLoanDelete {
  static Future<void> _deletePhotoRef(String ref) async {
    final src = ref.trim();
    if (!src.startsWith('supabase://media/')) return;
    final path = src.replaceFirst('supabase://media/', '');
    try {
      await Supabase.instance.client.storage.from('media').remove([path]);
    } catch (e) {
      debugPrint('[loan delete] storage: $e');
    }
  }

  static Future<bool> deleteLoan({
    required List<Map<String, dynamic>> apps,
    required String loanId,
  }) async {
    final id = loanId.trim();
    if (id.isEmpty) return false;
    final i = apps.indexWhere((a) => (a['id'] ?? '').toString() == id);
    if (i < 0) return false;
    final app = Map<String, dynamic>.from(apps[i]);
    for (final k in ngmyLoanPhotoKeys) {
      await _deletePhotoRef((app[k] ?? '').toString());
    }
    await NgmyLoanPhotosStore.remove(id);
    await NgmyLoanStatusStore.remove(id);
    await NgmyLoanPaymentsStore.remove(id);
    apps.removeAt(i);
    await NgmyLoanStatusCloud.pushFromApps(apps);
    await NgmyLoanPaymentsCloud.pushFromApps(apps);
    return true;
  }
}

class NgmyLoanStore {
  static List<Map<String, dynamic>> appsForUser(List<Map<String, dynamic>> all, String email) {
    final key = email.toLowerCase().trim();
    return all.where((a) => (a['userEmail'] ?? '').toString().toLowerCase().trim() == key).map((e) => Map<String, dynamic>.from(e)).toList();
  }

  static Future<void> ensureCloudPhotoRefs(Map<String, dynamic> app) async {
    final loanId = (app['id'] ?? DateTime.now().microsecondsSinceEpoch).toString();
    for (final k in ngmyLoanPhotoKeys) {
      final v = (app[k] ?? '').toString().trim();
      if (v.isEmpty || v.startsWith('supabase://')) continue;
      if (v.startsWith('data:image')) {
        try {
          final comma = v.indexOf(',');
          if (comma > 0) {
            final bytes = base64Decode(v.substring(comma + 1));
            final uploaded = await _upload(bytes, 'loans/$loanId/$k.jpg');
            if (uploaded != null) app[k] = uploaded;
          }
        } catch (e) {
          debugPrint('[loan] photo upload $k: $e');
        }
      } else if (!kIsWeb) {
        try {
          final file = File(v);
          if (await file.exists()) {
            final uploaded = await _upload(await file.readAsBytes(), 'loans/$loanId/$k.jpg');
            if (uploaded != null) app[k] = uploaded;
          }
        } catch (e) {
          debugPrint('[loan] photo file $k: $e');
        }
      }
    }
    await NgmyLoanPhotosStore.saveForApp(app);
  }

  static Future<void> ensureAllCloudPhotoRefs(List<Map<String, dynamic>> apps) async {
    for (final app in apps) {
      await ensureCloudPhotoRefs(app);
    }
  }

  static Future<String> storeImageRef(XFile file) async {
    final bytes = await file.readAsBytes();
    if (await ngmyDeviceIsOnline()) {
      final uploaded = await _upload(bytes, 'loans/${DateTime.now().microsecondsSinceEpoch}.jpg');
      if (uploaded != null) return uploaded;
    }
    if (kIsWeb) {
      return 'data:image/jpeg;base64,${base64Encode(bytes)}';
    }
    return file.path;
  }

  static Future<String?> _upload(Uint8List bytes, String path) async {
    try {
      final storage = Supabase.instance.client.storage.from('media');
      final small = ngmyShrinkImageForUpload(bytes).bytes;
      await storage.uploadBinary(path, small, fileOptions: const FileOptions(upsert: true, contentType: 'image/jpeg'));
      return 'supabase://media/$path';
    } catch (e) {
      debugPrint('[loan] upload: $e');
      return null;
    }
  }

  static Future<String> resolveRef(String ref) async {
    final src = ref.trim();
    if (!src.startsWith('supabase://media/')) return src;
    final path = src.replaceFirst('supabase://media/', '');
    try {
      final storage = Supabase.instance.client.storage.from('media');
      if (await ngmyDeviceIsOnline()) {
        final signed = await storage.createSignedUrl(path, 60 * 60 * 24).timeout(const Duration(seconds: 10));
        if (signed.isNotEmpty) return signed;
      }
      return storage.getPublicUrl(path);
    } catch (e) {
      debugPrint('[loan] resolve: $e');
      try {
        return Supabase.instance.client.storage.from('media').getPublicUrl(path);
      } catch (_) {
        return src;
      }
    }
  }

  static Widget imageWidget(dynamic ref) => NgmyLoanImage(ref);

  static void openZoom(BuildContext context, dynamic ref, {String label = 'Photo'}) {
    final src = (ref ?? '').toString();
    if (src.isEmpty) return;
    Navigator.push(
      context,
      MaterialPageRoute<void>(
        builder: (ctx) => _NgmyLoanZoomPage(ref: src, label: label),
      ),
    );
  }
}

class _NgmyLoanZoomPage extends StatelessWidget {
  final String ref;
  final String label;
  const _NgmyLoanZoomPage({required this.ref, required this.label});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(backgroundColor: Colors.black, foregroundColor: Colors.white, title: Text(label, style: const TextStyle(fontSize: 14))),
      body: InteractiveViewer(
        minScale: 0.5,
        maxScale: 5,
        child: Center(child: NgmyLoanImage(ref, fit: BoxFit.contain)),
      ),
    );
  }
}
